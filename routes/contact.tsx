import { createFileRoute } from "@tanstack/react-router";
import settings from "@/config/settings.json";
import { ContactPage } from "@/components/contact-page";

export const Route = createFileRoute("/contact")({
  head: () => settings.routes["/contact"],
  component: ContactPage,
});
