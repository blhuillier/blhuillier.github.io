#!/usr/bin/env python3
"""
Download the arXiv source of every paper in src/data/papers.js and extract its figures,
so one figure per paper can be chosen for the summary boxes.

Run from the repository root:   python3 scripts/fetch_arxiv_figures.py
Output (not committed):          figure-candidates/<paper-id>/
    figures/       every image file from the source (pdf, png, jpg, eps, ps)
    captions.json  figure captions found in the .tex files, with the files they include

Uses only the standard library plus the system `curl`. Waits 3 s between papers, as
arXiv asks for automated downloads. Papers already downloaded are skipped.
"""
import gzip, io, json, re, subprocess, sys, tarfile, time
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "src" / "data" / "papers.js"
OUT = ROOT / "figure-candidates"
IMG = {".pdf", ".png", ".jpg", ".jpeg", ".eps", ".ps"}
UA = "benjissi.com figure fetch (contact: benjamin@sejong.ac.kr)"

text = DATA.read_text(encoding="utf-8")
entries = re.findall(r'id:\s*"([^"]+)".*?arxiv:\s*"([^"]+)"', text, re.S)
if not entries:
    sys.exit("No papers found in src/data/papers.js")
print(f"{len(entries)} papers")

def captions_from_tex(tex):
    found = []
    for env in re.findall(r"\\begin\{figure\*?\}(.*?)\\end\{figure\*?\}", tex, re.S):
        files = re.findall(r"\\includegraphics(?:\[[^\]]*\])?\{([^}]+)\}", env)
        m = re.search(r"\\caption(?:\[[^\]]*\])?\{", env)
        cap = ""
        if m:  # balanced-brace capture of the caption
            depth, i = 1, m.end()
            while i < len(env) and depth:
                depth += {"{": 1, "}": -1}.get(env[i], 0)
                i += 1
            cap = re.sub(r"\s+", " ", env[m.end():i - 1]).strip()
        label = re.search(r"\\label\{([^}]+)\}", env)
        found.append({"files": files, "label": label.group(1) if label else None, "caption": cap})
    return found

for n, (pid, arxiv) in enumerate(entries, 1):
    dest = OUT / pid
    if (dest / "captions.json").exists():
        print(f"[{n}/{len(entries)}] {pid}: already done")
        continue
    print(f"[{n}/{len(entries)}] {pid} (arXiv:{arxiv}) ...", end=" ", flush=True)
    raw = subprocess.run(
        ["curl", "-sSL", "-A", UA, "--max-time", "120", f"https://arxiv.org/e-print/{arxiv}"],
        capture_output=True,
    )
    if raw.returncode != 0 or not raw.stdout:
        print("download failed:", raw.stderr.decode()[:200])
        continue
    data = raw.stdout
    (dest / "figures").mkdir(parents=True, exist_ok=True)
    tex_all, nfig = "", 0
    try:
        try:
            data = gzip.decompress(data)
        except OSError:
            pass
        try:
            with tarfile.open(fileobj=io.BytesIO(data)) as tar:
                for m in tar.getmembers():
                    if not m.isfile():
                        continue
                    name = Path(m.name)
                    if ".." in name.parts:
                        continue  # never write outside the folder
                    if name.suffix.lower() in IMG:
                        target = dest / "figures" / "__".join(name.parts)
                        target.write_bytes(tar.extractfile(m).read())
                        nfig += 1
                    elif name.suffix.lower() == ".tex":
                        tex_all += tar.extractfile(m).read().decode("utf-8", "replace") + "\n"
        except tarfile.ReadError:
            tex_all = data.decode("utf-8", "replace")  # single-file source, no images
    except Exception as e:  # keep going with the other papers
        print("error:", e)
        continue
    caps = captions_from_tex(tex_all)
    (dest / "captions.json").write_text(json.dumps(caps, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"{nfig} image files, {len(caps)} figure captions")
    time.sleep(3)

print(f"\nDone. Results in {OUT.relative_to(ROOT)}/")
