import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import settings from "@/config/settings.json";

function NotFoundPage() {
  return (
    <main id="main" className="nf">
      <div className="wrap">
        <p className="eyebrow">Error 404</p>
        <h1>We can't find that page.</h1>
        <p className="lead">The address may have changed, or the page may have moved. Try one of these instead.</p>
        <div className="ctas">
          <Link className="btn btn-teal" to="/">Back to home</Link>
          <Link className="btn btn-line" to="/programs">See our programs</Link>
          <Link className="btn btn-line" to="/contact">Contact us</Link>
        </div>
      </div>
    </main>
  );
}

export const Route = createFileRoute("/$")({
  head: () => settings.routes["/$"],
  loader: () => {
    throw notFound();
  },
  notFoundComponent: NotFoundPage,
});
