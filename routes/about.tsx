import { createFileRoute } from "@tanstack/react-router";
import settings from "@/config/settings.json";
import { AboutPage } from "@/components/about-page";

export const Route = createFileRoute("/about")({
  head: () => settings.routes["/about"],
  component: AboutPage,
});
