// Homepage news, newest first. Each item: { date, body (English JSX), fr / ko (French / Korean JSX, optional) }.
// If a translation is missing, that language falls back to the English text.
// Optional: press (list of [label, url]), embed (LinkedIn embed URL) + embedHeights.
import React from "react"
import { Link } from "gatsby"

const ext = { target: "_blank", rel: "noopener noreferrer" }

// Korean press coverage of the 2024 Nature Astronomy paper
export const pressKr = [
  ["Asia Times", "https://www.asiatime.co.kr/article/20241115500214#_mobwcvr"],
  ["Chosun Ilbo", "https://lifenlearning.chosun.com/pan/site/data/html_dir/2024/11/15/2024111501066.html"],
  ["Daily Smart", "https://www.dailysmart.co.kr/news/articleView.html?idxno=100222"],
  ["Digital Times", "https://www.dt.co.kr/contents.html?article_no=2024111502109954056001&ref=naver"],
  ["Dong-A", "https://edu.donga.com/news/articleView.html?idxno=78511"],
  ["ENews Today", "https://www.enewstoday.co.kr/news/articleView.html?idxno=2200326"],
  ["Kyosu.net", "https://www.kyosu.net/news/articleView.html?idxno=127472"],
  ["Money Today", "https://news.mt.co.kr/mtview.php?no=2024111510543598127"],
  ["Minju Sinmun", "https://www.iminju.net/news/articleView.html?idxno=112247"],
  ["Newsis", "https://www.newsis.com/view/NISX20241115_0002960360"],
  ["NewsTNT", "https://www.newstnt.com/news/articleView.html?idxno=431479"],
  ["Newswell", "https://www.newswell.co.kr/news/articleView.html?idxno=10536"],
  ["ONews", "https://www.onews.tv/news/articleView.html?idxno=225414"],
  ["PS News", "https://www.psnews.co.kr/news/articleView.html?idxno=2072912"],
  ["UNN", "https://news.unn.net/news/articleView.html?idxno=571092"],
  ["Veritas-a", "https://www.veritas-a.com/news/articleView.html?idxno=529635"],
  ["W Sobi", "http://www.wsobi.com/news/articleView.html?idxno=260206"],
]

export const news = [
  {
    date: "2026-10-07",
    body: <>Post on LinkedIn by the Scientific Sector of the French Embassy in Korea</>,
    // LinkedIn post shown inline below the text
    embed: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7513525563123347456",
    // Heights measured for this post: wide screen, tablet, small tablet, phone
    embedHeights: [1360, 1480, 1700, 2250],
    fr: <>Publication LinkedIn du Service scientifique de l’Ambassade de France en Corée</>,
    ko: <>주한 프랑스 대사관 과학과의 LinkedIn 게시물</>,
  },
  {
    date: "2026-09-01",
    body: (
      <>
        <Link to="/the-group/#mathias">Mathias Tan</Link> (
        <a href="https://www.centralesupelec.fr/" {...ext}>CentraleSupélec</a>) joins the group as a
        Master&apos;s intern to work on cosmological applications of optimal transport.
      </>
    ),
    fr: <><Link to="/fr/the-group/#mathias">Mathias Tan</Link> (<a href="https://www.centralesupelec.fr/" {...ext}>CentraleSupélec</a>) rejoint le groupe en stage de Master pour travailler sur les applications cosmologiques du transport optimal.</>,
    ko: <><Link to="/ko/the-group/#mathias">Mathias Tan</Link>(<a href="https://www.centralesupelec.fr/" {...ext}>CentraleSupélec</a>)이 석사 인턴으로 연구실에 합류해 최적 수송(optimal transport)의 우주론적 응용을 연구합니다.</>,
  },
  {
    date: "2026-09-01",
    body: (
      <>
        <Link to="/the-group/#sihyeong">Si Hyeong Noh</Link> starts his PhD in the group.
      </>
    ),
    fr: <><Link to="/fr/the-group/#sihyeong">Si Hyeong Noh</Link> commence sa thèse dans le groupe.</>,
    ko: <><Link to="/ko/the-group/#sihyeong">노시형</Link> 학생이 연구실에서 박사과정을 시작했습니다.</>,
  },
  {
    date: "2026-08-25",
    body: (
      <>
        Paper with Jeffrey Hodgson et al. published in <em>Astronomy &amp; Astrophysics</em>: “A
        refined method for measuring cosmological distances using variability and proper motions in
        AGNs with VLBI-detected counter jets”.{" "}
        <a href="https://doi.org/10.1051/0004-6361/202660314" {...ext}>A&amp;A 712, A240</a>
      </>
    ),
    fr: <>Article avec Jeffrey Hodgson et al. publié dans <em>Astronomy &amp; Astrophysics</em> : « A refined method for measuring cosmological distances using variability and proper motions in AGNs with VLBI-detected counter jets ». <a href="https://doi.org/10.1051/0004-6361/202660314" {...ext}>A&amp;A 712, A240</a></>,
    ko: <>Jeffrey Hodgson 등과 함께 쓴 논문이 <em>Astronomy &amp; Astrophysics</em>에 게재되었습니다: “A refined method for measuring cosmological distances using variability and proper motions in AGNs with VLBI-detected counter jets”. <a href="https://doi.org/10.1051/0004-6361/202660314" {...ext}>A&amp;A 712, A240</a></>,
  },
  {
    date: "2026-08-10",
    body: (
      <>
        <Link to="/the-group/#clea">Cléa Millard</Link>&apos;s paper “Model independent test of the
        FLRW metric and the curvature in light of DESI DR2” is published in <em>JCAP</em>.{" "}
        <a href="https://doi.org/10.1088/1475-7516/2026/08/016" {...ext}>JCAP08(2026)016</a> ·{" "}
        <a href="https://arxiv.org/abs/2601.20293" {...ext}>arXiv:2601.20293</a>
      </>
    ),
    fr: <>L’article de <Link to="/fr/the-group/#clea">Cléa Millard</Link>, « Model independent test of the FLRW metric and the curvature in light of DESI DR2 », est publié dans <em>JCAP</em>. <a href="https://doi.org/10.1088/1475-7516/2026/08/016" {...ext}>JCAP08(2026)016</a> · <a href="https://arxiv.org/abs/2601.20293" {...ext}>arXiv:2601.20293</a></>,
    ko: <><Link to="/ko/the-group/#clea">Cléa Millard</Link>의 논문 “Model independent test of the FLRW metric and the curvature in light of DESI DR2”가 <em>JCAP</em>에 게재되었습니다. <a href="https://doi.org/10.1088/1475-7516/2026/08/016" {...ext}>JCAP08(2026)016</a> · <a href="https://arxiv.org/abs/2601.20293" {...ext}>arXiv:2601.20293</a></>,
  },
  {
    date: "2026-07",
    body: (
      <>
        Featured in <em>Le Petit Échotier</em> (Seoul Accueil, no. 202): « La science au-delà des
        frontières, Regards vers l&apos;infini avec le Pr L&apos;Huillier, cosmologiste français en
        Corée du Sud ».{" "}
        <a href="https://www.seoulaccueil.com/wp-content/uploads/2026/06/PE202-online-version.pdf#page=60" {...ext}>Read the article (PDF, pp. 60–63)</a>
      </>
    ),
    fr: <>Portrait dans <em>Le Petit Échotier</em> (Seoul Accueil, n° 202) : « La science au-delà des frontières, Regards vers l’infini avec le Pr L’Huillier, cosmologiste français en Corée du Sud ». <a href="https://www.seoulaccueil.com/wp-content/uploads/2026/06/PE202-online-version.pdf#page=60" {...ext}>Lire l’article (PDF, p. 60–63)</a></>,
    ko: <><em>Le Petit Échotier</em>(Seoul Accueil, 202호)에 인터뷰가 실렸습니다: « La science au-delà des frontières, Regards vers l’infini avec le Pr L’Huillier, cosmologiste français en Corée du Sud ». <a href="https://www.seoulaccueil.com/wp-content/uploads/2026/06/PE202-online-version.pdf#page=60" {...ext}>기사 보기 (PDF, 60–63쪽, 프랑스어)</a></>,
  },
  {
    date: "2026-07",
    body: (
      <>
        Invited talk at the{" "}
        <a href="https://indico.kgwg.org/event/220/program" {...ext}>2026 KGWG Summer Meeting</a>,
        Pohang: “Testing the ΛCDM Model with Gravitational Waves”.
      </>
    ),
    fr: <>Exposé invité au <a href="https://indico.kgwg.org/event/220/program" {...ext}>2026 KGWG Summer Meeting</a>, Pohang : « Testing the ΛCDM Model with Gravitational Waves ».</>,
    ko: <><a href="https://indico.kgwg.org/event/220/program" {...ext}>2026 KGWG 하계 워크숍</a>(포항) 초청 강연: “Testing the ΛCDM Model with Gravitational Waves”.</>,
  },
  {
    date: "2026-06-04",
    body: (
      <>
        <Link to="/the-group/#clea">Cléa Millard</Link>&apos;s paper was accepted. Congratulations Cléa!
      </>
    ),
    fr: <>L’article de <Link to="/fr/the-group/#clea">Cléa Millard</Link> a été accepté. Félicitations Cléa !</>,
    ko: <><Link to="/ko/the-group/#clea">Cléa Millard</Link>의 논문이 게재 승인되었습니다. 축하합니다!</>,
  },
  {
    date: "2026-04-08",
    body: (
      <>
        <Link to="/the-group/#ussan">Ussan Abbassi</Link> (
        <a href="https://www.ens.psl.eu/" {...ext}>École Normale Supérieure</a>) joins the group to
        work on cosmology with gravitational waves.
      </>
    ),
    fr: <><Link to="/fr/the-group/#ussan">Ussan Abbassi</Link> (<a href="https://www.ens.psl.eu/" {...ext}>École Normale Supérieure</a>) rejoint le groupe pour travailler sur la cosmologie avec les ondes gravitationnelles.</>,
    ko: <><Link to="/ko/the-group/#ussan">Ussan Abbassi</Link>(<a href="https://www.ens.psl.eu/" {...ext}>École Normale Supérieure</a>)가 연구실에 합류해 중력파 우주론을 연구합니다.</>,
  },
  {
    date: "2026-03-22",
    body: (
      <>
        <Link to="/the-group/#hyeon">Hyeon Kim</Link>&apos;s paper on the non-parametric estimation
        of the baryon gas fraction and the cosmological bias with clusters was submitted:{" "}
        <a href="https://arxiv.org/abs/2603.13763" {...ext}>arXiv:2603.13763</a>.
      </>
    ),
    fr: <>L’article de <Link to="/fr/the-group/#hyeon">Hyeon Kim</Link> sur l’estimation non paramétrique de la fraction de gaz baryonique et du biais cosmologique avec les amas de galaxies a été soumis : <a href="https://arxiv.org/abs/2603.13763" {...ext}>arXiv:2603.13763</a>.</>,
    ko: <><Link to="/ko/the-group/#hyeon">김현</Link> 학생의 논문(은하단을 이용한 바리온 가스 비율과 우주론적 편향의 비모수적 추정)이 투고되었습니다: <a href="https://arxiv.org/abs/2603.13763" {...ext}>arXiv:2603.13763</a>.</>,
  },
  {
    date: "2026-03-01",
    body: (
      <>
        <Link to="/the-group/#tarik">Tarik Ouadjou</Link> (
        <a href="https://www.centralesupelec.fr/" {...ext}>CentraleSupélec</a>) joins the group to
        work on machine learning with the{" "}
        <a href="https://www.skao.int/" {...ext}>Square Kilometre Array (SKA)</a>.
      </>
    ),
    fr: <><Link to="/fr/the-group/#tarik">Tarik Ouadjou</Link> (<a href="https://www.centralesupelec.fr/" {...ext}>CentraleSupélec</a>) rejoint le groupe pour travailler sur l’apprentissage automatique appliqué au <a href="https://www.skao.int/" {...ext}>Square Kilometre Array (SKA)</a>.</>,
    ko: <><Link to="/ko/the-group/#tarik">Tarik Ouadjou</Link>(<a href="https://www.centralesupelec.fr/" {...ext}>CentraleSupélec</a>)가 연구실에 합류해 <a href="https://www.skao.int/" {...ext}>SKA(Square Kilometre Array)</a>를 위한 기계학습을 연구합니다.</>,
  },
  {
    date: "2026-01-29",
    body: (
      <>
        <Link to="/the-group/#clea">Cléa Millard</Link>&apos;s first paper, on tests of the FLRW
        model, was submitted:{" "}
        <a href="https://arxiv.org/abs/2601.20293" {...ext}>arXiv:2601.20293</a>.
      </>
    ),
    fr: <>Le premier article de <Link to="/fr/the-group/#clea">Cléa Millard</Link>, sur des tests du modèle FLRW, a été soumis : <a href="https://arxiv.org/abs/2601.20293" {...ext}>arXiv:2601.20293</a>.</>,
    ko: <><Link to="/ko/the-group/#clea">Cléa Millard</Link>의 첫 논문(FLRW 모형 검증)이 투고되었습니다: <a href="https://arxiv.org/abs/2601.20293" {...ext}>arXiv:2601.20293</a>.</>,
  },
  {
    date: "2026-01",
    body: (
      <>
        The <a href="https://lfseoul.org/en/" {...ext}>Lycée Français de Séoul</a> team I mentored
        won 3rd prize and the Prix de la Société Française d&apos;Acoustique at the final of the 33rd
        Olympiades de Physique France, with the project « Voir (plus) rouge… mène au côté obscur de
        la force ! ».{" "}
        <a href="https://pr.sejong.ac.kr/news/people/faculty.do?mode=view&articleNo=863364" {...ext}>
          Sejong University press release
        </a>
      </>
    ),
    fr: <>L’équipe du <a href="https://lfseoul.org/en/" {...ext}>Lycée Français de Séoul</a> que j’ai encadrée a remporté le 3ᵉ prix et le prix de la Société Française d’Acoustique à la finale des 33ᵉ Olympiades de Physique France, avec le projet « Voir (plus) rouge… mène au côté obscur de la force ! ». <a href="https://pr.sejong.ac.kr/news/people/faculty.do?mode=view&articleNo=863364" {...ext}>Communiqué de presse de l’Université Sejong</a></>,
    ko: <>제가 지도한 <a href="https://lfseoul.org/en/" {...ext}>서울프랑스학교(Lycée Français de Séoul)</a> 팀이 제33회 프랑스 물리 올림피아드(Olympiades de Physique France) 결선에서 3등상과 프랑스 음향학회상을 받았습니다. 프로젝트: « Voir (plus) rouge… mène au côté obscur de la force ! ». <a href="https://pr.sejong.ac.kr/news/people/faculty.do?mode=view&articleNo=863364" {...ext}>세종대학교 보도자료</a></>,
  },
  {
    date: "2026-01",
    body: (
      <>
        Invited talk at{" "}
        <a href="https://sites.google.com/view/npoc2026/program" {...ext}><em>New Perspectives in Cosmology</em></a>,
        APCTP, Pohang: “Litmus Tests of the
        Flat-ΛCDM Model with Stage IV Data”.
      </>
    ),
    fr: <>Exposé invité à <a href="https://sites.google.com/view/npoc2026/program" {...ext}><em>New Perspectives in Cosmology</em></a>, APCTP, Pohang : « Litmus Tests of the Flat-ΛCDM Model with Stage IV Data ».</>,
    ko: <>APCTP(포항) <a href="https://sites.google.com/view/npoc2026/program" {...ext}><em>New Perspectives in Cosmology</em></a> 초청 강연: “Litmus Tests of the Flat-ΛCDM Model with Stage IV Data”.</>,
  },
  {
    date: "2025-12-05",
    body: <>Si Hyeong Noh defended his Master&apos;s thesis. Congratulations!</>,
    fr: <>Si Hyeong Noh a soutenu son mémoire de Master. Félicitations !</>,
    ko: <>노시형 학생이 석사학위 논문 심사를 통과했습니다. 축하합니다!</>,
  },
  {
    date: "2025-11-17 → 21",
    body: (
      <>
        The{" "}
        <a href="https://sites.google.com/view/frkrcosmo2025/home" {...ext}>
          2025 France-Korea Workshop on Cosmology
        </a>{" "}
        was held at Sejong University.
      </>
    ),
    fr: <>Le <a href="https://sites.google.com/view/frkrcosmo2025/home" {...ext}>France-Korea Workshop on Cosmology 2025</a> s’est tenu à l’Université Sejong.</>,
    ko: <><a href="https://sites.google.com/view/frkrcosmo2025/home" {...ext}>2025 한-프 우주론 워크숍(France-Korea Workshop on Cosmology)</a>이 세종대학교에서 열렸습니다.</>,
  },
  {
    date: "2025",
    body: (
      <>
        Seung-gyu Hwang was awarded the{" "}
        <a href="https://www.coree.campusfrance.org/peulangseu-jeongbu-janghaggeum-france-excellence" {...ext}>
          France Excellence grant
        </a>{" "}
        to start a PhD in the{" "}
        <a href="https://www.cosmostat.org/" {...ext}>CosmoStat group</a> at CEA Saclay.
        Congratulations Seung-gyu!
      </>
    ),
    fr: <>Seung-gyu Hwang a obtenu une <a href="https://www.coree.campusfrance.org/peulangseu-jeongbu-janghaggeum-france-excellence" {...ext}>bourse France Excellence</a> pour commencer une thèse dans le <a href="https://www.cosmostat.org/" {...ext}>groupe CosmoStat</a> au CEA Saclay. Félicitations Seung-gyu !</>,
    ko: <>황승규 학생이 <a href="https://www.coree.campusfrance.org/peulangseu-jeongbu-janghaggeum-france-excellence" {...ext}>프랑스 정부 우수 장학금(France Excellence)</a>을 받아 CEA 사클레의 <a href="https://www.cosmostat.org/" {...ext}>CosmoStat 그룹</a>에서 박사과정을 시작합니다. 축하합니다!</>,
  },
  {
    date: "2025-09",
    body: (
      <>
        Invited talk at{" "}
        <a href="https://cosmology.kasi.re.kr/conferences/conf2025/home.html" {...ext}>
          <em>The End of Lambda?</em> CosKASI Conference
        </a>
        , Daejeon: “Testing the FLRW Metric and Flatness with Stage-IV Surveys”.
      </>
    ),
    fr: <>Exposé invité à la conférence CosKASI <a href="https://cosmology.kasi.re.kr/conferences/conf2025/home.html" {...ext}><em>The End of Lambda?</em></a>, Daejeon : « Testing the FLRW Metric and Flatness with Stage-IV Surveys ».</>,
    ko: <>CosKASI 학술대회 <a href="https://cosmology.kasi.re.kr/conferences/conf2025/home.html" {...ext}><em>The End of Lambda?</em></a>(대전) 초청 강연: “Testing the FLRW Metric and Flatness with Stage-IV Surveys”.</>,
  },
  {
    date: "2025-07",
    body: (
      <>
        Seminar at <a href="https://www.fzu.cz/en" {...ext}>CEICO/FZU</a>, Prague: “Litmus Tests of
        the Cosmological Model with the Large-Scale Structure”, and talk at the Journées de la SF2A
        2025, Toulouse.
      </>
    ),
    fr: <>Séminaire au <a href="https://www.fzu.cz/en" {...ext}>CEICO/FZU</a>, Prague : « Litmus Tests of the Cosmological Model with the Large-Scale Structure », et exposé aux Journées de la SF2A 2025, Toulouse.</>,
    ko: <><a href="https://www.fzu.cz/en" {...ext}>CEICO/FZU</a>(프라하) 세미나: “Litmus Tests of the Cosmological Model with the Large-Scale Structure”. 프랑스 천문학회 연례 학술대회(SF2A 2025, 툴루즈) 발표.</>,
  },
  {
    date: "2025-03",
    body: (
      <>
        Talk at the{" "}
        <a href="https://www.eeas.europa.eu/delegations/south-korea/2025-research-and-innovation-day_en" {...ext}>
          Korea–EU Research &amp; Innovation Day 2025
        </a>
        , Seoul: “Joint Cosmological Constraints from the Early and Late Universe” (
        <a href="https://youtu.be/bBgBPKoZ-iQ?t=8243" {...ext}>video</a>).
      </>
    ),
    fr: <>Exposé au <a href="https://www.eeas.europa.eu/delegations/south-korea/2025-research-and-innovation-day_en" {...ext}>Korea–EU Research &amp; Innovation Day 2025</a>, Séoul : « Joint Cosmological Constraints from the Early and Late Universe » (<a href="https://youtu.be/bBgBPKoZ-iQ?t=8243" {...ext}>vidéo</a>).</>,
    ko: <><a href="https://www.eeas.europa.eu/delegations/south-korea/2025-research-and-innovation-day_en" {...ext}>한-EU 연구혁신의 날 2025</a>(서울) 발표: “Joint Cosmological Constraints from the Early and Late Universe” (<a href="https://youtu.be/bBgBPKoZ-iQ?t=8243" {...ext}>영상</a>).</>,
  },
  {
    date: "2024-11-14",
    body: (
      <>
        Discovery of an alignment between the small-scale jets of supermassive black holes and the
        orientation of their host galaxies, published in{" "}
        <a href="https://www.nature.com/articles/s41550-024-02407-4" {...ext}>Nature Astronomy</a>.
        See also the article in The Conversation{" "}
        <a href="https://theconversation.com/egg-shaped-galaxies-may-be-aligned-to-the-black-holes-at-their-hearts-astronomers-find-236699" {...ext}>Australia</a>,{" "}
        <a href="https://theconversation.com/decouverte-inattendue-dun-lien-entre-les-jets-des-trous-noirs-et-leurs-galaxies-hotes-237890" {...ext}>France</a>{" "}and{" "}
        <a href="https://theconversation.com/hallados-indicios-de-conexion-entre-agujeros-negros-y-sus-galaxias-239641" {...ext}>Spain</a>.
      </>
    ),
    press: pressKr,
    fr: <>Découverte d’un alignement entre les jets à petite échelle des trous noirs supermassifs et l’orientation de leurs galaxies hôtes, publiée dans <a href="https://www.nature.com/articles/s41550-024-02407-4" {...ext}>Nature Astronomy</a>. Voir aussi les articles de The Conversation <a href="https://theconversation.com/decouverte-inattendue-dun-lien-entre-les-jets-des-trous-noirs-et-leurs-galaxies-hotes-237890" {...ext}>France</a>, <a href="https://theconversation.com/egg-shaped-galaxies-may-be-aligned-to-the-black-holes-at-their-hearts-astronomers-find-236699" {...ext}>Australie</a> et <a href="https://theconversation.com/hallados-indicios-de-conexion-entre-agujeros-negros-y-sus-galaxias-239641" {...ext}>Espagne</a>.</>,
    ko: <>초대질량 블랙홀의 작은 규모 제트와 모은하의 방향 사이에 정렬이 있음을 발견해 <a href="https://www.nature.com/articles/s41550-024-02407-4" {...ext}>Nature Astronomy</a>에 발표했습니다. The Conversation 기사: <a href="https://theconversation.com/egg-shaped-galaxies-may-be-aligned-to-the-black-holes-at-their-hearts-astronomers-find-236699" {...ext}>호주</a>, <a href="https://theconversation.com/decouverte-inattendue-dun-lien-entre-les-jets-des-trous-noirs-et-leurs-galaxies-hotes-237890" {...ext}>프랑스</a>, <a href="https://theconversation.com/hallados-indicios-de-conexion-entre-agujeros-negros-y-sus-galaxias-239641" {...ext}>스페인</a>.</>,
  },
  {
    date: "2024-11",
    body: (
      <>
        Invited talk at the{" "}
        <a href="http://events.kias.re.kr/h/cosmology2024/?pageNo=5453" {...ext}>
          11th KIAS Workshop on Cosmology and Structure Formation
        </a>
        , Seoul: “Litmus Tests of the Flat-ΛCDM Model with Stage IV Data”.
      </>
    ),
    fr: <>Exposé invité au <a href="http://events.kias.re.kr/h/cosmology2024/?pageNo=5453" {...ext}>11th KIAS Workshop on Cosmology and Structure Formation</a>, Séoul : « Litmus Tests of the Flat-ΛCDM Model with Stage IV Data ».</>,
    ko: <><a href="http://events.kias.re.kr/h/cosmology2024/?pageNo=5453" {...ext}>제11회 KIAS 우주론 및 구조 형성 워크숍</a>(서울) 초청 강연: “Litmus Tests of the Flat-ΛCDM Model with Stage IV Data”.</>,
  },
  {
    date: "2024-10-07 → 11",
    body: (
      <>
        First{" "}
        <a href="https://sites.google.com/view/francekoreacosmology2024/home?authuser=0" {...ext}>
          France-Korea Workshop on Cosmology
        </a>{" "}
        at Institut d&apos;Astrophysique Spatiale, Université Paris-Saclay.
      </>
    ),
    fr: <>Premier <a href="https://sites.google.com/view/francekoreacosmology2024/home?authuser=0" {...ext}>France-Korea Workshop on Cosmology</a> à l’Institut d’Astrophysique Spatiale, Université Paris-Saclay.</>,
    ko: <>제1회 <a href="https://sites.google.com/view/francekoreacosmology2024/home?authuser=0" {...ext}>한-프 우주론 워크숍</a>이 파리-사클레 대학교 우주천체물리연구소(IAS)에서 열렸습니다.</>,
  },
  {
    date: "2024-09-01",
    body: (
      <>
        Ms. <Link to="/the-group/#clea">Cléa Millard</Link> joins the group as a PhD candidate.
      </>
    ),
    fr: <><Link to="/fr/the-group/#clea">Cléa Millard</Link> rejoint le groupe en thèse.</>,
    ko: <><Link to="/ko/the-group/#clea">Cléa Millard</Link>가 박사과정생으로 연구실에 합류했습니다.</>,
  },
  {
    date: "2024-07",
    body: (
      <>
        Keynote speaker in the dark energy session of the{" "}
        <a href="https://indico.icranet.org/event/8/program" {...ext}>17th Marcel Grossmann Meeting</a>
        , Pescara.
      </>
    ),
    fr: <>Conférencier invité (keynote) de la session énergie noire du <a href="https://indico.icranet.org/event/8/program" {...ext}>17th Marcel Grossmann Meeting</a>, Pescara.</>,
    ko: <><a href="https://indico.icranet.org/event/8/program" {...ext}>제17회 마르셀 그로스만 회의(Marcel Grossmann Meeting)</a>(이탈리아 페스카라) 암흑에너지 세션 기조 강연.</>,
  },
  {
    date: "2024-01",
    body: (
      <>
        Seminar tour in France: “Constraining the Cosmological Model with the Large-Scale
        Structure” at LERMA (Observatoire de Paris), IAS (Université Paris-Saclay), LUTh (Meudon)
        and Observatoire de Strasbourg.
      </>
    ),
    fr: <>Tournée de séminaires en France : « Constraining the Cosmological Model with the Large-Scale Structure » au LERMA (Observatoire de Paris), à l’IAS (Université Paris-Saclay), au LUTh (Meudon) et à l’Observatoire de Strasbourg.</>,
    ko: <>프랑스 순회 세미나: “Constraining the Cosmological Model with the Large-Scale Structure” — LERMA(파리 천문대), IAS(파리-사클레 대학교), LUTh(뫼동), 스트라스부르 천문대.</>,
  },
  {
    date: "2023-10-01 → 2025-09-30",
    body: (
      <>
        <a href="https://phc-star.ias.universite-paris-saclay.fr/home" {...ext}>PHC STAR joint funding</a>{" "}
        with Prof. Marian Douspis&apos; group at Institut d&apos;Astrophysique Spatiale, Université
        Paris-Saclay.
      </>
    ),
    fr: <>Financement <a href="https://phc-star.ias.universite-paris-saclay.fr/home" {...ext}>PHC STAR</a> avec l’équipe de Marian Douspis à l’Institut d’Astrophysique Spatiale, Université Paris-Saclay.</>,
    ko: <>파리-사클레 대학교 우주천체물리연구소(IAS) Marian Douspis 교수 연구팀과의 <a href="https://phc-star.ias.universite-paris-saclay.fr/home" {...ext}>PHC STAR 한-프 공동연구</a> 지원.</>,
  },
  {
    date: "2023-03-01",
    body: (
      <>
        M. <Link to="/the-group/#hyeon">Hyeon Kim</Link> starts as an integrated Master&apos;s + PhD
        candidate.
      </>
    ),
    fr: <><Link to="/fr/the-group/#hyeon">Hyeon Kim</Link> commence un cursus intégré Master–Doctorat.</>,
    ko: <><Link to="/ko/the-group/#hyeon">김현</Link> 학생이 석박사 통합과정을 시작했습니다.</>,
  },
  {
    date: "2023-01-01",
    body: <>M. Si Hyeong Noh joins the group as a Master&apos;s candidate.</>,
    fr: <>Si Hyeong Noh rejoint le groupe en Master.</>,
    ko: <>노시형 학생이 석사과정생으로 연구실에 합류했습니다.</>,
  },
  {
    date: "2022-06-01 → 2025-01-28",
    body: <>NRF Grant (~180M KRW): “Testing General Relativity with Upcoming Surveys”.</>,
    fr: <>Financement NRF (~180 M KRW) : « Testing General Relativity with Upcoming Surveys ».</>,
    ko: <>한국연구재단 연구비(약 1억 8천만 원): “Testing General Relativity with Upcoming Surveys”.</>,
  },
  {
    date: "2021-03-01",
    body: (
      <>
        Establishment of the <Link to="/the-group/">physical cosmology group</Link> at Sejong
        University.
      </>
    ),
    fr: <>Création du <Link to="/fr/the-group/">groupe de cosmologie physique</Link> à l’Université Sejong.</>,
    ko: <>세종대학교에 <Link to="/ko/the-group/">물리우주론 연구실</Link>을 열었습니다.</>,
  },
  {
    date: "2020-05-24",
    body: (
      <>
        Press release about the VLBI measurement of cosmic distances in{" "}
        <a href="http://www.hani.co.kr/arti/science/science_general/946070.html" {...ext}>
          Hankyoreh (in Korean)
        </a>.
      </>
    ),
    fr: <>Communiqué de presse sur la mesure des distances cosmiques par VLBI dans <a href="http://www.hani.co.kr/arti/science/science_general/946070.html" {...ext}>Hankyoreh (en coréen)</a>.</>,
    ko: <>VLBI를 이용한 우주 거리 측정 연구가 <a href="http://www.hani.co.kr/arti/science/science_general/946070.html" {...ext}>한겨레</a>에 보도되었습니다.</>,
  },
  {
    date: "2019-06-01 → 2022-05-31",
    body: <>NRF Grant (~150k USD): “Testing the cosmological model with the large-scale structures”.</>,
    fr: <>Financement NRF (~150 k USD) : « Testing the cosmological model with the large-scale structures ».</>,
    ko: <>한국연구재단 연구비(약 15만 달러): “Testing the cosmological model with the large-scale structures”.</>,
  },
]
