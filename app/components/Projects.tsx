import { projects } from "../lib/projects";
import SectionLabel from "./SectionLabel";
import Gallery from "./Gallery";

export default function Projects() {
  return (
    <section id="projects" className="bg-white px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel text="Projekt" />
        <h2 className="mt-5 text-4xl font-extrabold text-[#15191C] md:text-6xl">Tidigare arbeten.</h2>
        <p className="mt-4 text-lg text-[#5B6166]">Ett urval av tidigare arbeten i Stockholm med omnejd. Tryck på en bild för att se den större.</p>
        <div className="mt-10">
          <Gallery items={projects.slice(0, 6)} />
        </div>
        <a href="/projekt" className="mt-10 inline-block border-b-4 border-[#F2B705] font-semibold text-[#15191C]">
          Se alla projekt →
        </a>
      </div>
    </section>
  );
}
