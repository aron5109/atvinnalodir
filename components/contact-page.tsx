import { useEffect, useRef, useState, type ComponentProps, type FormEvent } from "react";
import form from "@vibe/form";
import { PageHero } from "@/components/page-hero";
import { BUSINESS, MAP_EMBED, MAP_OPEN } from "@/data/site";

const TOPICS = ["General question", "Volunteering", "Partnerships", "Press"];

type Errors = Partial<Record<"name" | "email" | "message", string>>;

function MapEmbed() {
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");
  const [attempt, setAttempt] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setState("loading");
    timer.current = setTimeout(() => setState((s) => (s === "loading" ? "error" : s)), 12000);
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [attempt]);

  return (
    <div className="mapbox">
      <div className="mapframe">
        {state !== "error" && (
          <iframe
            key={attempt}
            title="Map showing 340 Pine St, Suite 900, San Francisco, CA 94104"
            src={MAP_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            onLoad={() => setState("ready")}
          />
        )}
        {state === "loading" && (
          <div className="mapload" role="status">
            <span className="spin" aria-hidden="true" />
            <span>Loading map…</span>
          </div>
        )}
        {state === "error" && (
          <div className="mapload" role="alert">
            <p><b>The map didn't load.</b></p>
            <p>You can still open our address in your maps app.</p>
            <button type="button" className="btn btn-line" onClick={() => setAttempt((n) => n + 1)}>Try again</button>
          </div>
        )}
      </div>
      <a className="btn btn-teal" href={MAP_OPEN} target="_blank" rel="noopener noreferrer">Open in Maps<span className="sr"> (opens in a new tab)</span></a>
    </div>
  );
}

function Chips({ legend, name, items, value, onSelect, className, ...rest }: { legend: string; name: string; items: string[]; value: string; onSelect: (v: string) => void } & Omit<ComponentProps<"fieldset">, "onSelect">) {
  return (
    <fieldset className={className ? "chips " + className : "chips"} {...rest}>
      <legend>{legend}</legend>
      {items.map((t) => (
        <label key={t} className={value === t ? "on" : undefined}>
          <input type="radio" name={name} value={t} checked={value === t} onChange={() => onSelect(t)} />
          <span>{t}</span>
        </label>
      ))}
    </fieldset>
  );
}

function ContactForm() {
  const [topic, setTopic] = useState(TOPICS[0]);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [failure, setFailure] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const next: Errors = {};
    if (!name) next.name = "Enter your name.";
    if (!email) next.email = "Enter your email address.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) next.email = "That email address is missing something. Check the part after the @.";
    if (message.length < 10) next.message = "Tell us a little more, at least a sentence.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("sending");
    try {
      await form.submit({
        formId: "contact",
        fields: [
          { name: "name", label: "Name", type: "text", value: name },
          { name: "email", label: "Email", type: "email", value: email },
          { name: "phone", label: "Phone number", type: "tel", value: phone },
          { name: "topic", label: "Topic", type: "radio", value: topic },
          { name: "message", label: "Message", type: "textarea", value: message },
        ],
      });
      setStatus("sent");
    } catch (err) {
      const code = (err as { code?: string } | null)?.code;
      setFailure(
        code === "RATE_LIMITED" ? "Too many attempts. Please wait a moment and try again."
        : code === "NETWORK" ? "It didn't arrive. Check your connection and try again."
        : code === "CAPTCHA_FAILED" ? "The spam check didn't pass. Please try again."
        : "We couldn't send your message just now. Please try again in a minute.",
      );
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="sent" role="status">
        <h3>Message sent</h3>
        <p>Thank you. We read every message and will reply by email soon.</p>
        <button type="button" className="btn btn-line" onClick={() => { setStatus("idle"); setTopic(TOPICS[0]); }}>Send another message</button>
      </div>
    );
  }

  return (
    <form className="cform" data-vibe-form-id="contact" noValidate onSubmit={onSubmit} aria-busy={status === "sending"}>
      <fieldset className="chips">
        <legend>What is this about?</legend>
        {TOPICS.map((t) => (
          <label key={t} className={topic === t ? "on" : undefined}>
            <input type="radio" name="topic" value={t} checked={topic === t} onChange={() => setTopic(t)} />
            <span>{t}</span>
          </label>
        ))}
      </fieldset>
      <div className="frow">
        <div className="fld">
          <label htmlFor="c-name">Name</label>
          <input id="c-name" name="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby="c-name-e" required />
          <p className="ferr" id="c-name-e">{errors.name}</p>
        </div>
        <div className="fld">
          <label htmlFor="c-email">Email</label>
          <input id="c-email" name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby="c-email-e" required />
          <p className="ferr" id="c-email-e">{errors.email}</p>
        </div>
      </div>
      <div className="fld">
        <label htmlFor="c-phone">Phone <span className="opt">(optional)</span></label>
        <input id="c-phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div className="fld">
        <label htmlFor="c-message">Message</label>
        <textarea id="c-message" name="message" rows={6} aria-invalid={!!errors.message} aria-describedby="c-message-e" required />
        <p className="ferr" id="c-message-e">{errors.message}</p>
      </div>
      <button className="btn btn-teal" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send message →"}</button>
      {status === "error" && <p className="ferr banner" role="alert">{failure}</p>}
    </form>
  );
}

const AMOUNTS = ["$25", "$50", "$100", "$250", "Other"];
const FREQS = ["One-time", "Monthly"];
const FUNDS = ["Where it is needed most", "Reforestation", "Ocean health", "Clean energy"];

function DonationForm() {
  const [amount, setAmount] = useState(AMOUNTS[1]);
  const [freq, setFreq] = useState(FREQS[1]);
  const [fund, setFund] = useState(FUNDS[0]);
  const [errors, setErrors] = useState<Partial<Record<"other" | "name" | "email", string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [failure, setFailure] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const other = String(fd.get("other") ?? "").trim();
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const note = String(fd.get("note") ?? "").trim();
    const next: typeof errors = {};
    if (amount === "Other" && !(Number(other) > 0)) next.other = "Enter the amount you have in mind.";
    if (!name) next.name = "Enter your name.";
    if (!email) next.email = "Enter your email address.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) next.email = "That email address is missing something. Check the part after the @.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("sending");
    try {
      await form.submit({
        formId: "donation-enquiry",
        fields: [
          { name: "amount", label: "Amount", type: "radio", value: amount === "Other" ? "Other: $" + other : amount },
          { name: "frequency", label: "One-time or monthly", type: "radio", value: freq },
          { name: "fund", label: "Where the gift should go", type: "radio", value: fund },
          { name: "name", label: "Name", type: "text", value: name },
          { name: "email", label: "Email", type: "email", value: email },
          { name: "phone", label: "Phone number", type: "tel", value: phone },
          { name: "note", label: "Anything else we should know", type: "textarea", value: note },
        ],
      });
      setStatus("sent");
    } catch (err) {
      const code = (err as { code?: string } | null)?.code;
      setFailure(
        code === "RATE_LIMITED" ? "Too many attempts. Please wait a moment and try again."
        : code === "NETWORK" ? "It didn't arrive. Check your connection and try again."
        : code === "CAPTCHA_FAILED" ? "The spam check didn't pass. Please try again."
        : "We couldn't send your enquiry just now. Please try again in a minute.",
      );
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="sent" role="status">
        <h3>Enquiry received</h3>
        <p>Thank you. This is not a payment: no donation has been taken. Our team will follow up with you by email to arrange your gift.</p>
        <button type="button" className="btn btn-line" onClick={() => setStatus("idle")}>Send another enquiry</button>
      </div>
    );
  }

  return (
    <form className="cform" data-vibe-form-id="donation-enquiry" noValidate onSubmit={onSubmit} aria-busy={status === "sending"}>
      <Chips legend="Amount" name="amount" items={AMOUNTS} value={amount} onSelect={setAmount} />
      {amount === "Other" && (
        <div className="fld">
          <label htmlFor="d-other">Amount in US dollars</label>
          <input id="d-other" name="other" inputMode="numeric" aria-invalid={!!errors.other} aria-describedby="d-other-e" />
          <p className="ferr" id="d-other-e">{errors.other}</p>
        </div>
      )}
      <Chips legend="One-time or monthly" name="frequency" items={FREQS} value={freq} onSelect={setFreq} />
      <Chips legend="Where should it go?" name="fund" items={FUNDS} value={fund} onSelect={setFund} />
      <div className="frow">
        <div className="fld">
          <label htmlFor="d-name">Name</label>
          <input id="d-name" name="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby="d-name-e" required />
          <p className="ferr" id="d-name-e">{errors.name}</p>
        </div>
        <div className="fld">
          <label htmlFor="d-email">Email</label>
          <input id="d-email" name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby="d-email-e" required />
          <p className="ferr" id="d-email-e">{errors.email}</p>
        </div>
      </div>
      <div className="fld">
        <label htmlFor="d-phone">Phone <span className="opt">(optional)</span></label>
        <input id="d-phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div className="fld">
        <label htmlFor="d-note">Anything else we should know <span className="opt">(optional)</span></label>
        <textarea id="d-note" name="note" rows={3} />
      </div>
      <button className="btn btn-teal" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send donation enquiry →"}</button>
      <p className="note">No payment is taken on this site. Our team will follow up to arrange your gift.</p>
      {status === "error" && <p className="ferr banner" role="alert">{failure}</p>}
    </form>
  );
}

export function ContactPage() {
  return (
    <main id="main">
      <PageHero
        src="https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-contact-hero-1920w.png"
        srcSet="https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-contact-hero-800w.png 800w, https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-contact-hero-1200w.png 1200w, https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-contact-hero-1920w.png 1920w"
        alt="A sunlit desk with a notebook, a cup and a leafy plant by a window"
        eyebrow="Contact"
        title="Talk to the Verdant team."
        lede="Questions about our work, a partnership, volunteering or press. Send a message and a real person will reply."
      />
      <section className="sec alt" id="donate" aria-labelledby="donate-h">
        <div className="wrap cgrid">
          <div>
            <p className="eyebrow">Support our work</p>
            <h2 id="donate-h">Make a donation enquiry</h2>
            <p className="note">Choose an amount, how often, and where it should go. We do not take payment here: our team will contact you to arrange your gift.</p>
            <DonationForm />
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap cgrid">
          <div>
            <h2>Send us a message</h2>
            <ContactForm />
          </div>
          <aside aria-labelledby="visit-h">
            <h2 id="visit-h">Our office</h2>
            <address>
              <p><b>{BUSINESS.name}</b></p>
              <p>{BUSINESS.street}<br />{BUSINESS.city}</p>
              <p><span className="gl">Phone</span><a className="lnk" href={BUSINESS.phoneHref}>{BUSINESS.phone}</a></p>
            </address>
            <p className="note">Office visits are by appointment. Call or send a message first.</p>
          </aside>
        </div>
      </section>
      <section className="sec alt" aria-labelledby="map-h">
        <div className="wrap">
          <div className="ihead"><div><p className="eyebrow">Find us</p><h2 id="map-h">Visit our San Francisco office</h2></div></div>
          <MapEmbed />
        </div>
      </section>
    </main>
  );
}
