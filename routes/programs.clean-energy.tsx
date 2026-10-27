import { createFileRoute } from "@tanstack/react-router";
import settings from "@/config/settings.json";
import { ProgramDetail } from "@/components/programs-pages";
import { PROGRAMS } from "@/data/site";

const program = PROGRAMS.find((p) => p.slug === "clean-energy")!;

export const Route = createFileRoute("/programs/clean-energy")({
  head: () => settings.routes["/programs/clean-energy"],
  component: () => <ProgramDetail program={program} />,
});
