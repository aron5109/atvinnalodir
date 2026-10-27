import { Link } from "@tanstack/react-router";
import { CtaBand, EmptyState, PageHero } from "@/components/page-hero";
import { PROGRAMS, type Program } from "@/data/site";

export function ProgramsIndex() {
  return (
    <main id="main">
      <PageHero
        src="https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-programs-hero-1920w.png"
        srcSet="https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-programs-hero-800w.png 800w, https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-programs-hero-1200w.png 1200w, https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-programs-hero-1920w.png 1920w"
        alt="Aerial view of restored native forest canopy above a winding river"
        eyebrow="What we do"
        title="Three programs, chosen by the evidence."
        lede="Reforestation, ocean health and clean energy. Each is run with local communities and measured site by site."
      />
      <section className="sec">
        <div className="wrap">
          {PROGRAMS.length === 0 ? (
            <EmptyState title="No programs to show yet" body="Our programs will appear here shortly." />
          ) : (
            <ul className="plist">
              {PROGRAMS.map((p) => (
                <li key={p.slug}>
                  <Link to={p.path} className="pcard" aria-label={p.cardLabel}>
                    <img src={p.cardSrc} srcSet={p.cardSrcSet} sizes="(min-width: 960px) 640px, 100vw" alt={p.alt} loading="lazy" width={1200} height={675} />
                    <div>
                      <p className="pn">{p.cardNo}</p>
                      <h2>{p.tagline}</h2>
                      <p>{p.summary}</p>
                      <dl><dt>{p.stat}</dt><dd>{p.statLabel}</dd></dl>
                      <span className="lnk">{p.exploreLabel}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      <CtaBand title="Not sure where to give?" body="Every gift is split by where it does the most, unless you choose one program.">
        <Link className="btn btn-teal" to="/contact" hash="donate">Donate now</Link>
        <Link className="btn btn-line" to="/contact">Ask a question</Link>
      </CtaBand>
    </main>
  );
}

export function ProgramDetail({ program }: { program: Program }) {
  const others = PROGRAMS.filter((p) => p.slug !== program.slug);
  return (
    <main id="main">
      <PageHero
        src={program.heroSrc}
        srcSet={program.heroSrcSet}
        alt={program.alt}
        eyebrow={program.eyebrow}
        title={program.tagline}
        lede={program.lede}
        crumbs={[{ label: "Home", to: "/" }, { label: "Programs", to: "/programs" }, { label: program.name }]}
      >
        <div className="ctas hcta"><Link className="btn" to="/contact" hash="donate">{program.giveLabel}</Link></div>
      </PageHero>

      <section className="sec">
        <div className="wrap">
          <ul className="figs2">
            {program.figures.map((f) => <li key={f.label}><b>{f.value}</b><span>{f.label}</span></li>)}
          </ul>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="ihead"><div><p className="eyebrow">How it works</p><h2>Our approach</h2></div></div>
          <ol className="steps">
            {program.approach.map((a) => (
              <li key={a.title}>
                <span className="pn">{a.step}</span>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="ihead"><div><p className="eyebrow">On the record</p><h2>Where we work</h2></div></div>
          {program.sites.length === 0 ? (
            <EmptyState title="No sites listed yet" body="New sites are added to the register as they begin." />
          ) : (
            <ul className="sites">
              {program.sites.map((s) => (
                <li key={s.no}><span className="no">No. {s.no}</span><b>{s.site}</b><em>{s.country}</em><span className="yr">Since {s.since}</span></li>
              ))}
            </ul>
          )}
          <p className="note">The full register, with coordinates for every site, is on the <Link className="lnk" to="/" hash="register">home page</Link>.</p>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="ihead"><div><p className="eyebrow">Keep exploring</p><h2>Our other programs</h2></div></div>
          <ul className="others">
            {others.map((p) => (
              <li key={p.slug}>
                <p className="pn">{p.name}</p>
                <h3>{p.tagline}</h3>
                <p>{p.summary}</p>
                <Link className="lnk" to={p.path}>{p.exploreLabel}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title={program.ctaTitle} body="Give monthly and you get your site's coordinates, then a photo from the same spot every year.">
        <Link className="btn btn-teal" to="/contact" hash="donate">Donate now</Link>
        <Link className="btn btn-line" to="/contact">Talk to the team</Link>
      </CtaBand>
    </main>
  );
}
