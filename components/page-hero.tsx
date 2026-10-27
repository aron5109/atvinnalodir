import type { ComponentProps, ReactNode } from "react";
import { Link } from "@tanstack/react-router";

type Crumb = { label: string; to?: "/" | "/programs" };

export function PageHero({
  src,
  srcSet,
  alt,
  eyebrow,
  title,
  lede,
  crumbs,
  children,
  className,
  ...rest
}: {
  src: string;
  srcSet: string;
  alt: string;
  eyebrow: string;
  title: string;
  lede: string;
  crumbs?: Crumb[];
  children?: ReactNode;
} & Omit<ComponentProps<"section">, "title">) {
  return (
    <section className={className ? "phero " + className : "phero"} {...rest}>
      <img className="hbg" src={src} srcSet={srcSet} sizes="100vw" alt={alt} fetchPriority="high" width={1920} height={1080} />
      <div className="wrap">
        {crumbs && (
          <nav className="crumbs" aria-label="Breadcrumb">
            <ol>
              {crumbs.map((c, i) => (
                <li key={c.label}>
                  {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
                  {i < crumbs.length - 1 && <span aria-hidden="true"> / </span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <p className="eyebrow on-dark">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lede">{lede}</p>
        {children}
      </div>
    </section>
  );
}

export function EmptyState({ title, body, className, ...rest }: { title: string; body: string } & Omit<ComponentProps<"div">, "title">) {
  return (
    <div className={className ? "empty " + className : "empty"} role="status" {...rest}>
      <p><b>{title}</b></p>
      <p>{body}</p>
    </div>
  );
}

export function CtaBand({ title, body, children, className, ...rest }: { title: string; body: string; children: ReactNode } & Omit<ComponentProps<"section">, "title">) {
  return (
    <section className={className ? "band " + className : "band"} {...rest}>
      <div className="wrap">
        <h2>{title}</h2>
        <div>
          <p>{body}</p>
          <div className="ctas">{children}</div>
        </div>
      </div>
    </section>
  );
}
