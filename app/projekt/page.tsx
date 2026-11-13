import type { Metadata } from "next";
import Image from "next/image";
import PageShell from "../components/PageShell";

export const metadata: Metadata = {
  title: "Projekt | Mokrani Group",
  description: "Ett urval av våra golv-, bygg- och snickeriprojekt i Stockholm.",
};

const projects = [
  { title: "Förskola", image: "/images/forskola.jpg" },
  { title: "Golvprojekt", image: "/images/golvprojekt.jpg" },
  { title: "LSS-hem", image: "/images/lsshem.jpg" },
  { title: "Renovering", image: "/images/renovering.jpg" },
  { title: "Snickeri", image: "/images/snickeri0.jpg" },
  { title: "Våtrum", image: "/images/vatrum.jpg" },
  { title: "Golvprojekt 2", image: "/images/golvprojekt1.jpg" },
  { title: "Snickeri 2", image: "/images/snickeri1.jpg" },
];

export default function Page() {
  return (
    <PageShell title="Projekt" intro="Ett urval av våra tidigare arbeten.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <figure key={p.title}>
            <div className="relative h-60 overflow-hidden rounded-md">
              <Image src={p.image} alt={p.title} fill className="object-cover" />
            </div>
            <figcaption className="mt-3 font-semibold text-[#15191C]">{p.title}</figcaption>
          </figure>
        ))}
      </div>
    </PageShell>
  );
}
