import { createFileRoute } from "@tanstack/react-router";
import settings from "@/config/settings.json";
import { ProgramsIndex } from "@/components/programs-pages";

export const Route = createFileRoute("/programs/")({
  head: () => settings.routes["/programs"],
  component: ProgramsIndex,
});
