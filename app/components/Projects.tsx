import Image from "next/image";
import { projects } from "../lib/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-white px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-extrabold text-[#15191C] md:text-5xl">Tidigare arbeten</h2>
        <p className="mt-4 text-lg text-[#5A646B]">Ett urval av tidigare arbeten i Stockholm med omnejd.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p, i) => {
            const title = p.title ?? `Tidigare arbete ${i + 1}`;
            return (
              <figure key={p.image}>
                <div className="relative h-48 overflow-hidden rounded-md">
                  <Image src={p.image} alt={title} fill className="object-cover" />
                </div>
                <figcaption className="mt-2 text-sm font-semibold text-[#15191C]">{title}</figcaption>
                {p.text && <p className="text-sm text-[#5A646B]">{p.text}</p>}
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
