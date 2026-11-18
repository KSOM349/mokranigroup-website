import type { Metadata } from "next";
import PageShell from "../components/PageShell";
import Gallery from "../components/Gallery";
import { projects } from "../lib/projects";

export const metadata: Metadata = {
  title: "Projekt | Mokrani Group",
  description: "Ett urval av tidigare golv-, bygg- och renoveringsarbeten i Stockholm med omnejd.",
};

export default function Page() {
  return (
    <PageShell title="Projekt" intro="Ett urval av tidigare arbeten i Stockholm med omnejd. Tryck på en bild för att se den större.">
      <Gallery items={projects} />
    </PageShell>
  );
}
