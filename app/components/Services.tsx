import Image from "next/image";

const withPhoto = [
  { title: "Bygg & renovering",
    href: "/bygg", text: "Ombyggnation, underarbete och renovering av bostäder och lokaler.", image: "/images/renovering.jpg" },
  { title: "Golvläggning",
    href: "/golv", text: "Plastmatta, linoleum och parkett, från underlag till färdigt golv.", image: "/images/golvprojekt.jpg" },
  { title: "Våtrum",
    href: "/vatrum", text: "Tätskikt och golv i badrum och andra våtutrymmen.", image: "/images/vatrum.jpg" },
  { title: "Snickeri",
    href: "/bygg", text: "Inredning och detaljer som är tillverkade och monterade på plats.", image: "/images/snickeri0.jpg" },
];
const textOnly = [
  { title: "IT & nätverk",
    href: "/it", text: "IT-support, nätverk, Microsoft 365 och Azure för små och medelstora företag." },
  { title: "Städtjänster",
    href: "/stadning", text: "Byggstäd och regelbunden städning för företag och privatpersoner." },
];

export default function Services() {
  return (
    <section id="services" className="bg-white px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-extrabold text-[#15191C] md:text-5xl">Våra tjänster</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {withPhoto.map((s) => (
            <article key={s.title} className="group">
              <div className="relative h-64 overflow-hidden rounded-md md:h-80">
                <Image src={s.image} alt={s.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-[#15191C]">{s.title}</h3>
              <p className="mt-2 text-[#5A646B]">{s.text}</p>
              <a href={s.href} className="mt-3 inline-block font-semibold text-[#15191C] underline decoration-[#F2B705] decoration-4 underline-offset-4">
                Läs mer
              </a>
            </article>
          ))}
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {textOnly.map((s) => (
            <article key={s.title} className="rounded-md bg-[#ECEDEA] p-8">
              <h3 className="text-2xl font-bold text-[#15191C]">{s.title}</h3>
              <p className="mt-2 text-[#5A646B]">{s.text}</p>
              <a href={s.href} className="mt-3 inline-block font-semibold text-[#15191C] underline decoration-[#F2B705] decoration-4 underline-offset-4">
                Läs mer
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
