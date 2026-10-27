import { createFileRoute } from "@tanstack/react-router";
import settings from "@/config/settings.json";
import { ProgramDetail } from "@/components/programs-pages";
import { PROGRAMS } from "@/data/site";

const program = PROGRAMS.find((p) => p.slug === "ocean-health")!;

export const Route = createFileRoute("/programs/ocean-health")({
  head: () => settings.routes["/programs/ocean-health"],
  component: () => <ProgramDetail program={program} />,
});
