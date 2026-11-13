import type { Metadata } from "next";
import Image from "next/image";
import PageShell from "../components/PageShell";
import { projects } from "../lib/projects";

export const metadata: Metadata = {
  title: "Projekt | Mokrani Group",
  description: "Ett urval av tidigare golv-, bygg- och renoveringsarbeten i Stockholm med omnejd.",
};

export default function Page() {
  return (
    <PageShell title="Projekt" intro="Ett urval av tidigare arbeten i Stockholm med omnejd.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => {
          const title = p.title ?? `Tidigare arbete ${i + 1}`;
          return (
            <figure key={p.image}>
              <div className="relative h-60 overflow-hidden rounded-md">
                <Image src={p.image} alt={title} fill className="object-cover" />
              </div>
              <figcaption className="mt-3 font-semibold text-[#15191C]">{title}</figcaption>
              {p.text && <p className="text-[#5A646B]">{p.text}</p>}
            </figure>
          );
        })}
      </div>
    </PageShell>
  );
}
