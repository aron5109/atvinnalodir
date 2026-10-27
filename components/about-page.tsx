import { Link } from "@tanstack/react-router";
import { CtaBand, EmptyState, PageHero } from "@/components/page-hero";

const VALUES = [
  { n: "01", title: "Evidence first", body: "We fund the work the data says will matter, and publish the results even when they are humbling." },
  { n: "02", title: "Local ownership", body: "Communities run what we build. Crews, committees and nurseries are theirs, not ours." },
  { n: "03", title: "Every site has an address", body: "Coordinates, a yearly photo and an audited record. If we cannot show it, we do not claim it." },
  { n: "04", title: "Money to the field", body: "94 cents of every dollar reaches the work, and the books are audited every year." },
];

const TIMELINE = [
  { year: "2018", text: "A first coastal crew starts recovering plastic and growing coral in the Coral Triangle, Indonesia." },
  { year: "2019", text: "Planting begins in Chocó, Colombia, and the first village micro-grid switches on in Turkana, Kenya." },
  { year: "2022", text: "Patagonia rewilding and the Tanzanian mangrove coast join the site register." },
  { year: "2026", text: "47 active sites in 12 countries, each with coordinates and a photo from the same spot every year." },
];

const TEAM = [
  { name: "Helen Ward", role: "Executive Director", src: "https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-team-director-800w.png", srcSet: "https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-team-director-800w.png 800w, https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-team-director-1200w.png 1200w", alt: "Portrait of Helen Ward, Executive Director", bio: "Spent twenty years in conservation finance before founding Verdant's first coastal crew partnership." },
  { name: "Samuel Kariuki", role: "Director of Forest Science", src: "https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-team-ecologist-800w.png", srcSet: "https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-team-ecologist-800w.png 800w, https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-team-ecologist-1200w.png 1200w", alt: "Portrait of Samuel Kariuki, Director of Forest Science", bio: "Forest ecologist who designs the native-species mixes and ten-year monitoring for every planting site." },
  { name: "Dewi Anggraini", role: "Head of Ocean Programs", src: "https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-team-marine-800w.png", srcSet: "https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-team-marine-800w.png 800w, https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-team-marine-1200w.png 1200w", alt: "Portrait of Dewi Anggraini, Head of Ocean Programs", bio: "Marine biologist leading the coastal crews and coral nurseries across Indonesia and Tanzania." },
  { name: "Arjun Mehta", role: "Head of Clean Energy", src: "https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-team-engineer-800w.png", srcSet: "https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-team-engineer-800w.png 800w, https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-team-engineer-1200w.png 1200w", alt: "Portrait of Arjun Mehta, Head of Clean Energy", bio: "Solar engineer who trains village technicians to own and repair their micro-grids." },
];

export function AboutPage() {
  return (
    <main id="main">
      <PageHero
        src="https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-about-hero-field-staff-1920w.png"
        srcSet="https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-about-hero-field-staff-800w.png 800w, https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-about-hero-field-staff-1200w.png 1200w, https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-about-hero-field-staff-1920w.png 1920w"
        alt="Verdant field staff and local volunteers standing together in a young restored forest"
        eyebrow="About Verdant"
        title="Restoring what can't wait."
        lede="We are an environmental non-profit working with local communities to restore forests, protect oceans and bring clean energy to the places that need it most."
      />

      <section className="sec">
        <div className="wrap two">
          <div>
            <p className="eyebrow">Our mission</p>
            <h2>Put money where it does the most measurable good.</h2>
          </div>
          <div className="prose">
            <p>Verdant works where conservation, technology and community meet. We back three programs, reforestation, ocean health and clean energy, because the evidence says they create the largest lasting change for each dollar.</p>
            <p>We are a registered 501(c)(3), audited every year, and 94 cents of every dollar reaches the field.</p>
            <div className="ctas"><Link className="btn btn-teal" to="/programs">Explore our programs</Link></div>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap two media">
          <figure>
            <img src="https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-about-story-1200w.png" srcSet="https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-about-story-800w.png 800w, https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-about-story-1200w.png 1200w, https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-about-story-1920w.png 1920w" sizes="(min-width: 960px) 560px, 100vw" alt="A woman tending a nursery of native tree seedlings" loading="lazy" width={1200} height={900} />
            <figcaption className="cap"><span>A community nursery, where every site begins</span></figcaption>
          </figure>
          <div>
            <p className="eyebrow">Our story</p>
            <h2>It started with one crew and one stretch of coast.</h2>
            <p className="lead">Verdant began in 2018 with a single coastal crew in Indonesia. The lesson was simple: lasting change happens when the people who live there run the work. We have built every program on that idea since.</p>
            <ol className="tl">
              {TIMELINE.map((t) => (
                <li key={t.year}><b>{t.year}</b><span>{t.text}</span></li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="ihead"><div><p className="eyebrow">What guides us</p><h2>Our values</h2></div></div>
          <ul className="vals">
            {VALUES.map((v) => (
              <li key={v.title}>
                <span className="pn">{v.n}</span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="ihead"><div><p className="eyebrow">The people</p><h2>Meet the team</h2></div><p className="phint">The people who lead Verdant’s programs in the field and at home.</p></div>
          {TEAM.length === 0 ? (
            <EmptyState title="Team profiles are on their way" body="Check back soon, or get in touch and we will introduce you." />
          ) : (
            <ul className="team">
              {TEAM.map((m) => (
                <li key={m.name}>
                  <img src={m.src} srcSet={m.srcSet} sizes="(min-width: 960px) 270px, (min-width: 600px) 45vw, 100vw" alt={m.alt} loading="lazy" width={800} height={1067} />
                  <h3>{m.name}</h3>
                  <p className="role">{m.role}</p>
                  <p>{m.bio}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <CtaBand title="Want to work with us?" body="Questions, partnerships, press or volunteering. We read every message.">
        <Link className="btn btn-teal" to="/contact">Contact the team</Link>
        <Link className="btn btn-line" to="/contact" hash="donate">Donate now</Link>
      </CtaBand>
    </main>
  );
}
