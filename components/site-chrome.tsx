import { useEffect, useState, type FormEvent, type SVGProps } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import form from "@vibe/form";
import { BUSINESS, PROGRAMS } from "@/data/site";

export function Leaf(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 22 22" aria-hidden="true" {...props}>
      <path d="M2 20C2 9.5 9.5 2 20 2c0 10.5-7.5 18-18 18Z" fill="currentColor" />
      <path d="M4.5 17.5 15 7" stroke="var(--color-1)" strokeWidth="1.6" />
    </svg>
  );
}

const HERO_PATHS = ["/", "/about", "/programs", "/programs/reforestation", "/programs/ocean-health", "/programs/clean-energy", "/contact"];

const NAV_ITEMS = [
  { label: "Programs", to: "/programs", hash: undefined, current: true },
  { label: "Impact", to: "/", hash: "impact", current: false },
  { label: "Stories", to: "/", hash: "stories", current: false },
  { label: "About", to: "/about", hash: undefined, current: true },
  { label: "Contact", to: "/contact", hash: undefined, current: true },
] as const;

export function SiteHeader() {
  const [menu, setMenu] = useState(false);
  const { pathname } = useLocation();
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  const solid = !HERO_PATHS.includes(path);

  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenu(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menu]);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className={solid ? "nav solid" : "nav"}>
        <div className="wrap">
          <Link to="/" className="brand" aria-label="Verdant home"><Leaf />Verdant</Link>
          <nav className="nav-links" aria-label="Main">
            {NAV_ITEMS.map((n) => (
              <Link key={n.label} to={n.to} hash={n.hash} activeProps={n.current ? { "aria-current": "page" } : undefined}>{n.label}</Link>
            ))}
            <Link className="btn" to="/contact" hash="donate">Donate now</Link>
          </nav>
          <button className="burger" aria-label="Open menu" aria-expanded={menu} aria-controls="mobile-menu" onClick={() => setMenu(true)}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 6h16M3 11h16M3 16h16" /></svg>
          </button>
        </div>
      </header>
      <div id="mobile-menu" className={menu ? "sheet open" : "sheet"} aria-hidden={!menu}>
        <div className="top">
          <span className="brand"><Leaf />Verdant</span>
          <button aria-label="Close menu" onClick={() => setMenu(false)}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 5l12 12M17 5L5 17" /></svg>
          </button>
        </div>
        {NAV_ITEMS.map((n) => (
          <Link key={n.label} to={n.to} hash={n.hash} activeProps={n.current ? { "aria-current": "page" } : undefined} onClick={() => setMenu(false)}>{n.label}</Link>
        ))}
        <Link className="btn btn-teal" to="/contact" hash="donate" onClick={() => setMenu(false)}>Donate now</Link>
      </div>
    </>
  );
}

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [news, setNews] = useState<{ kind: "ok" | "err"; text: string } | null>(null);
  const [sending, setSending] = useState(false);

  async function subscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const v = email.trim();
    if (!v) return setNews({ kind: "err", text: "Enter your email address." });
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) return setNews({ kind: "err", text: "That email address is missing something. Check the part after the @." });
    setSending(true);
    try {
      await form.submit({ formId: "field-report", fields: [{ name: "email", label: "Email", type: "email", value: v }] });
      setNews({ kind: "ok", text: "Thanks! Your first field report arrives next month." });
      setEmail("");
    } catch {
      setNews({ kind: "err", text: "We couldn't sign you up just now. Please try again in a minute." });
    } finally {
      setSending(false);
    }
  }

  return (
    <footer>
      <div className="wrap fn6" id="footer-news">
        <p><b>The monthly field report.</b> Milestones, setbacks and the stories that don't make the news.</p>
        <form className="nform" data-vibe-form-id="field-report" noValidate onSubmit={subscribe}>
          <label htmlFor="em" className="sr">Email</label>
          <input id="em" type="email" placeholder="you@example.com" autoComplete="email" aria-invalid={news?.kind === "err"} aria-describedby="em-msg" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button className="btn btn-ink" type="submit" disabled={sending}>{sending ? "Subscribing…" : "Subscribe →"}</button>
        </form>
        <p id="em-msg" className={news ? (news.kind === "ok" ? "nmsg ok" : "nmsg err") : "nmsg"} role="status">{news?.text}</p>
      </div>
      <div className="wrap">
        <div className="fgrid">
          <div className="about">
            <span className="brand"><Leaf />Verdant</span>
            <p>Restoring forests, oceans and communities. 94% of all funds reach the field.</p>
            <p>{BUSINESS.street}, {BUSINESS.city} · <a className="inl" href={BUSINESS.phoneHref}>{BUSINESS.phone}</a></p>
          </div>
          <nav aria-label="Programs">
            <h2>Programs</h2>
            {PROGRAMS.map((p) => <Link key={p.slug} to={p.path}>{p.name}</Link>)}
            <Link to="/programs">All programs</Link>
          </nav>
          <nav aria-label="Organisation">
            <h2>Organisation</h2>
            <Link to="/about">About</Link>
            <Link to="/" hash="impact">Impact</Link>
            <Link to="/" hash="stories">Stories</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <nav aria-label="Get involved">
            <h2>Get involved</h2>
            <Link to="/contact" hash="donate">Donate</Link>
            <a href="#footer-news">Field report</a>
          </nav>
        </div>
        <div className="fbot"><span>© 2026 Verdant Earth Foundation, Inc. · Registered 501(c)(3) non-profit</span></div>
      </div>
    </footer>
  );
}
