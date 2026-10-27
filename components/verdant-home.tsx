import { Link } from "@tanstack/react-router";

const IMG = {
  hero: "https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-home-hero-canopy-1920w.png",
  farmer: "https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-farmer-1100w.jpg",
  planting: "https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-planting-1200w.jpg",
  coast: "https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-coast-1200w.jpg",
  gridChair: "https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-grid-chair-1200w.jpg",
  crew: "https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-crew-1400w.jpg",
  shelter: "https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-shelter-900w.jpg",
  reef: "https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-reef-900w.jpg",
  amina: "https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-amina-1100w.jpg",
  y2019: "https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-y2019-1200w.png",
  y2022: "https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-y2022-1200w.png",
  y2026: "https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-y2026-1200w.png",
};

type Fund = "f" | "o" | "e";

const PROGRAMS = [
  {
    n: "01 / 03 · Reforestation",
    title: "The right tree in the right place",
    body: "Native forest, never monocultures. Every site is chosen for biodiversity, soil health and long-term carbon storage, then watched by satellite for ten years.",
    stat: "31",
    statLabel: "planting sites in 5 countries, each watched for 10 years",
    link: "Give to reforestation",
    to: "/programs/reforestation" as const,
    fund: "f" as Fund,
    img: IMG.planting,
    alt: "Two volunteers planting a native sapling",
    cap: "Planting day, Chocó, Colombia",
  },
  {
    n: "02 / 03 · Ocean health",
    title: "Coastal crews, cleaner water",
    body: "Coastal communities run the work: plastic recovery with zero bycatch, and coral nurseries rebuilt reef by reef.",
    stat: "38",
    statLabel: "coastal communities running the work",
    link: "Give to ocean health",
    to: "/programs/ocean-health" as const,
    fund: "o" as Fund,
    img: IMG.coast,
    alt: "A fisherman pushing an outrigger into the shallows",
    cap: "Coastal crew, Raja Ampat, Indonesia",
  },
  {
    n: "03 / 03 · Clean energy",
    title: "Power owned by the people who use it",
    body: "Solar micro-grids replace kerosene in off-grid villages. The community owns and runs each grid; most pay for themselves in 18 months.",
    stat: "18 mo",
    statLabel: "for a micro-grid to pay for itself",
    link: "Give to clean energy",
    to: "/programs/clean-energy" as const,
    fund: "e" as Fund,
    img: IMG.gridChair,
    alt: "Joseph Lokol, grid committee chair in Turkana",
    cap: "Joseph Lokol, grid committee chair, Turkana, Kenya",
  },
];

const REGISTER: { no: string; site: string; country: string; dot: string; program: string; coord: string; since: string }[] = [
  { no: "14", site: "Chocó", country: "Colombia", dot: "d-f", program: "Reforestation", coord: "5.69° N, 76.66° W", since: "2019" },
  { no: "31", site: "Patagonia rewilding", country: "Chile", dot: "d-f", program: "Reforestation", coord: "50.94° S, 72.99° W", since: "2022" },
  { no: "03", site: "Coral Triangle reefs", country: "Indonesia", dot: "d-o", program: "Ocean health", coord: "0.23° S, 130.52° E", since: "2018" },
  { no: "26", site: "Mangrove coast", country: "Tanzania", dot: "d-o", program: "Ocean health", coord: "6.80° S, 39.30° E", since: "2022" },
  { no: "61", site: "Turkana micro-grids", country: "Kenya", dot: "d-e", program: "Clean energy", coord: "3.12° N, 35.60° E", since: "2019" },
  { no: "48", site: "Rajasthan micro-grids", country: "India", dot: "d-e", program: "Clean energy", coord: "26.90° N, 73.00° E", since: "2023" },
];

const STORIES = [
  { lead: true, img: IMG.crew, alt: "A planting crew at work under the canopy", meta: "Forest · Sep 12, 2026", title: "Two million trees planted in the Colombian Amazon this season" },
  { lead: false, img: IMG.shelter, alt: "A villager at a newly roofed grid shelter", meta: "Community · Aug 28, 2026", title: "Twelve villages in Kenya switch on clean power for the first time" },
  { lead: false, img: IMG.reef, alt: "A restored reef crest", meta: "Ocean · Aug 3, 2026", title: "Fish return to a restored reef in the Coral Triangle" },
];

const FUNDS: { fund: Fund; cls: string; name: string; line: string }[] = [
  { fund: "f", cls: "c-f", name: "Reforestation", line: "$1.42M of $2M · 5 million native trees" },
  { fund: "o", cls: "c-o", name: "Ocean recovery", line: "$890K of $1.2M · 1,200 t of coastal plastic" },
  { fund: "e", cls: "c-e", name: "Clean energy", line: "$531K of $800K · 30 more micro-grids" },
];


// Land mask from Natural Earth 110m, one bit per 3.4° cell, rows from 80° N southward.
const MAP_COLS = 105;
const MAP_STEP = 3.4;
const MAP_LAT0 = 80;
const MAP_ROWS = [
  "0000017fffffc01e00000e00000",
  "00001fbf81ffc00000e07fc0f00",
  "10601fbfe1ffc001819ffffffe0",
  "19ffffff78ff000ff7fffffffff",
  "1bffffff78f0701ffffffffffff",
  "01fffff8f070007bfffffffffff",
  "0061fff87c00037bffffffffc30",
  "01807ffffe00073fffffffff870",
  "00003fffff0003ffffffffffc20",
  "00001ffffb8003ffffffffffc00",
  "00001ffffc0001ff9dffffff600",
  "00001fffe00007bffffffffc400",
  "00000fffc000077afffffffcc00",
  "00000fffc00007e07ffffff7800",
  "000007ff000007fffffffff2000",
  "000003f180000ffffffffff0000",
  "000001e000001fffff8ffff0000",
  "0060007660001fffff8fdf80000",
  "0000003c00001fffff079f10000",
  "0000000700001ffffe030718000",
  "000000037c001ffffe030308000",
  "00000000fe000ffffe010428000",
  "000000007f80003ffc000e60000",
  "00000000ffc0003ff80006fc000",
  "00000000fff8001ff00002d7e80",
  "00000000fffc001ff0000181f60",
  "000000007ffc000ff0000018110",
  "000000007ff8001ff2000007400",
  "000000003ff8001ff600000fe00",
  "000000001ff0000fc400003ff08",
  "000000001fe0000fe400007ff80",
  "000000001fc0000fc000007ff80",
  "000000001f8000078000003ff80",
  "000000001f80000700000039f80",
  "000000003e00000000000000701",
  "000000003c00000000000000303",
  "000000003800000000000000006",
  "000000003800000000000000000",
  "000000003200000000000000000",
  "000000003800000000000000000",
];

const MAP_SITES: [number, number][] = [
  [5.69, -76.66], [-3.4, -62.2], [-10.2, -74.6], [-50.94, -72.99], [30.4, -9.6], [-0.6, 23.6],
  [3.12, 35.6], [-6.8, 39.3], [26.9, 73.0], [11.2, 123.6], [-0.23, 130.52], [-19.3, 133.4],
];

function DotMap() {
  const cell = 10;
  const dots: [number, number][] = [];
  MAP_ROWS.forEach((hex, j) => {
    const bits = BigInt(`0x${hex}`).toString(2).padStart(MAP_COLS, "0");
    for (let i = 0; i < MAP_COLS; i++) if (bits[i] === "1") dots.push([i, j]);
  });
  const pins = MAP_SITES.map(([lat, lon]) => [Math.floor((lon + 180) / MAP_STEP), Math.floor((MAP_LAT0 - lat) / MAP_STEP)]);
  return (
    <svg viewBox={`0 0 ${MAP_COLS * cell} ${MAP_ROWS.length * cell}`} aria-hidden="true">
      {dots.map(([i, j]) => <circle key={`${i}-${j}`} className="dot" cx={i * cell + 5} cy={j * cell + 5} r={3.6} />)}
      {pins.map(([i, j]) => (
        <g key={`p${i}-${j}`}>
          <circle className="halo" cx={i * cell + 5} cy={j * cell + 5} r={7.5} />
          <circle className="pin" cx={i * cell + 5} cy={j * cell + 5} r={4.2} />
        </g>
      ))}
    </svg>
  );
}

export function VerdantHome() {
  return (
    <>
      <main id="main">
        <section className="hero">
          <img className="hbg" src="https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-home-hero-canopy-1920w.png" srcSet="https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-home-hero-canopy-800w.png 800w, https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-home-hero-canopy-1200w.png 1200w, https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-home-hero-canopy-1920w.png 1920w" sizes="100vw" alt="" width={1920} height={1080} fetchPriority="high" />
          <div className="wrap hgrid">
            <div>
              <p className="eyebrow on-dark">Environmental non-profit · 501(c)(3)</p>
              <h1>The planet<br />can't wait.</h1>
              <p className="lede">We restore forests, protect oceans and bring clean energy to the communities who need it most. 94 cents of every dollar reaches the field.</p>
              <p className="hmeta"><span className="coord">5.69° N, 76.66° W</span><span>Restoration site 14 · Chocó, Colombia</span></p>
            </div>
            <aside className="give" id="give" aria-labelledby="give-h">
              <p className="gl">Support our work</p>
              <h2 id="give-h" className="gh">Fund the field teams.</h2>
              <p className="imp">Tell us how much you would like to give, once or monthly, and which program you care about. Our team will follow up with you personally to arrange your gift.</p>
              <Link className="gbtn" to="/contact" hash="donate">Send a donation enquiry →</Link>
              <p className="gfine">No payment is taken on this site. Nothing is charged when you send an enquiry.</p>
            </aside>
          </div>
        </section>

        <section className="mission" id="about">
          <div className="wrap m3">
            <div className="rv">
              <p className="eyebrow">Why now</p>
              <h2>The science is settled. The work is not.</h2>
              <p className="lead">We have less than a decade to prevent irreversible damage. Verdant works where conservation, technology and community meet, and puts money where it creates the most measurable impact.</p>
              <a className="lnk" href="#impact">See our impact</a>
            </div>
            <figure className="rv">
              <img src={IMG.farmer} alt="A farmer checking young plants in a restored field" loading="lazy" />
              <figcaption className="cap"><span>Agroforestry plot, Nyeri county, Kenya</span><span>Field team, 2026</span></figcaption>
            </figure>
          </div>
        </section>

        <section className="programs" id="programs">
          <div className="wrap">
            <div className="ihead">
              <div><p className="eyebrow">What we do</p><h2>Three programs, chosen by the evidence</h2></div>
              <p className="phint">Every gift is split by where it does the most, unless you choose one. <Link className="lnk" to="/programs">See all programs</Link></p>
            </div>
            {PROGRAMS.map((p) => (
              <div className="prow" key={p.n}>
                <figure>
                  <img src={p.img} alt={p.alt} loading="lazy" />
                  <figcaption className="cap">{p.cap}</figcaption>
                </figure>
                <article className="pt">
                  <p className="pn">{p.n}</p>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                  <dl><dt>{p.stat}</dt><dd>{p.statLabel}</dd></dl>
                  <div className="ctas"><Link className="lnk" to={p.to}>Explore the program</Link><Link className="lnk" to="/contact" hash="donate">{p.link}</Link></div>
                </article>
              </div>
            ))}
          </div>
        </section>

        <section className="impact" id="impact">
          <div className="imap">
            <DotMap />
            <div className="istate">
              <p className="eyebrow on-dark">Impact · as of Sep 30, 2026</p>
              <p className="big">47 sites in 12 countries, each one on the record.</p>
              <a className="lnk-w" href="#register">See the site register</a>
            </div>
          </div>
          <div className="wrap">
            <p className="asof">Figures reported by our field teams as of Sep 30, 2026.</p>
            <div className="figs rv">
              <div><b>2.4M</b><span>trees planted</span></div>
              <div><b>800 t</b><span>coastal plastic recovered</span></div>
              <div><b>94</b><span>communities on clean power</span></div>
              <div><b>47</b><span>active sites in 12 countries</span></div>
            </div>
            <div className="reg" id="register" role="table" aria-label="Site register">
              <div className="rh" role="row">
                <span role="columnheader">No.</span><span role="columnheader">Site</span><span role="columnheader">Program</span><span role="columnheader">Coordinates</span><span role="columnheader">Since</span>
              </div>
              {REGISTER.map((r) => (
                <div className="rr" role="row" key={r.no}>
                  <span className="no" role="cell">{r.no}</span>
                  <span role="cell"><b>{r.site}</b><em>{r.country}</em></span>
                  <span className="pg" role="cell"><i className={r.dot} />{r.program}</span>
                  <span className="coord" role="cell">{r.coord}</span>
                  <span className="yr" role="cell">{r.since}</span>
                </div>
              ))}
            </div>
            <p className="regnote"><span>Site register as of Sep 30, 2026, with each site’s coordinates. Map pins mark these sites.</span></p>
          </div>
        </section>

        <section className="stories" id="stories">
          <div className="wrap">
            <div className="ihead"><div><h2>Stories</h2></div></div>
            <div className="sgrid">
              {STORIES.map((s) => (
                <article className={s.lead ? "story lead" : "story"} key={s.title}>
                  <div className="ph"><img src={s.img} alt={s.alt} loading="lazy" /></div>
                  <p className="smeta"><span>{s.meta}</span></p>
                  <h3>{s.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="voice">
          <div className="v3">
            <div className="pic"><img src={IMG.amina} alt="Amina Ekai, micro-grid operator in Turkana" loading="lazy" /></div>
            <div className="txt rv">
              <blockquote>“My daughter does her homework after dark now. The lights are ours. We run them, we fix them, we decide.”</blockquote>
              <p className="who"><b>Amina Ekai</b>Micro-grid operator · Turkana, Kenya</p>
            </div>
          </div>
        </section>

        <section className="fund" id="donate">
          <div className="wrap">
            <p className="eyebrow">2026 fundraising campaign · as of Sep 30, 2026</p>
            <div className="fhead"><h2>Help us reach $4M by December</h2><div className="amt"><b>$2,841,200</b><span>reported raised of $4M, as of Sep 30, 2026</span></div></div>
            <p className="fmeta"><span>71% of goal · 40,218 donors, as of Sep 30, 2026. Campaign ends Dec 31, 2026. A snapshot, not a live total.</span></p>
            <div className="fl5">
              {FUNDS.map((f) => (
                <Link to="/contact" hash="donate" key={f.fund}>
                  <i className={f.cls} /><span><b>{f.name}</b>{f.line}</span><em>Support</em>
                </Link>
              ))}
            </div>
            <div className="where">
              <p className="eyebrow">Where every dollar goes · audited 2025</p>
              <div className="w4">
                <div><b>71¢</b><span>field operations</span></div>
                <div><b>13¢</b><span>community programs</span></div>
                <div><b>10¢</b><span>policy &amp; advocacy</span></div>
                <div><b>6¢</b><span>administration</span></div>
              </div>
              <p className="wnote">That's 94¢ of every dollar on the work itself.</p>
            </div>
          </div>
        </section>

        <section className="years">
          <div className="yrow">
            <figure><img src={IMG.y2019} alt="Seedlings in bare soil at planting" loading="lazy" /><figcaption>2019 · planting</figcaption></figure>
            <figure><img src={IMG.y2022} alt="Young native saplings in rows" loading="lazy" /><figcaption>2022 · year three</figcaption></figure>
            <figure><img src={IMG.y2026} alt="Closed native canopy" loading="lazy" /><figcaption>2026 · year seven</figcaption></figure>
          </div>
          <div className="wrap ytx">
            <div><p className="coord">5.69° N, 76.66° W · Site 14, Chocó</p><h2>Every tree we plant has an address.</h2></div>
            <div>
              <p>Monthly supporters get your site's coordinates, then a photo from the same spot every year.</p>
              <div className="ctas"><Link className="btn btn-teal" to="/contact" hash="donate">Ask about giving monthly →</Link></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
