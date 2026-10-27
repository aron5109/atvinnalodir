import { createFileRoute } from "@tanstack/react-router";
import settings from "@/config/settings.json";
import { VerdantHome } from "@/components/verdant-home";

export const Route = createFileRoute("/")({
  head: () => settings.routes["/"],
  component: VerdantHome,
});
