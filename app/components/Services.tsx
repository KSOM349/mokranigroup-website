import Image from "next/image";
import SectionLabel from "./SectionLabel";

const services = [
  { title: "Bygg & Renovering", href: "/bygg", cta: "Läs mer om bygg", image: "",
    text: "Renovering, snickeri och måleri, från rivning till färdig yta. När jobbet är klart gör vi en slutkontroll tillsammans med dig på plats.",
    checks: ["Snickeri & inredning", "Måleri", "Ombyggnation", "Våtrumsmatta i badrum"] },
  { title: "Golvläggning", href: "/golv", cta: "Läs mer om golv", image: "/images/arbete-linoleum.jpg",
    text: "Plastmatta, linoleum, parkett och våtrum. Noggrann underlagsberedning ger golv som håller.",
    checks: ["Plastmatta", "Linoleum", "Parkett", "Våtrumsgolv"] },
  { title: "IT & Nätverk", href: "/it", cta: "Läs mer om IT", image: "",
    text: "IT-support och nätverk av utbildad nätverkstekniker, för företag som vill att vardagen ska fungera.",
    checks: ["IT-support", "Nätverksinstallation", "WiFi och router", "Kabeldragning"] },
  { title: "Städning", href: "/stadning", cta: "Läs mer om städ", image: "",
    text: "Professionell städning för kontor, bostäder och byggprojekt, från regelbunden service till slutstädning.",
    checks: ["Kontorsstäd", "Byggstäd", "Flyttstäd", "Slutstädning"] },
];

export default function Services() {
  return (
    <section id="services" className="bg-white px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel text="Tjänster" />
        <h2 className="mt-5 max-w-3xl text-4xl font-extrabold text-[#15191C] md:text-6xl">Fyra kompetenser. En ansvarig part.</h2>
        <p className="mt-5 max-w-2xl text-lg text-[#5B6166]">
          Du slipper samordna flera entreprenörer. Vi tar hand om helheten och du har en person att ringa.
        </p>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {services.map((s) => (
            <a key={s.title} href={s.href} className="lift zoom group block overflow-hidden rounded-xl border border-[#15191C]/10 bg-[#F7F6F2]">
              {s.image ? (
                <div className="relative h-56 overflow-hidden">
                  <Image src={s.image} alt={s.title} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
                </div>
              ) : (
                <div aria-hidden className="h-3 bg-[#F2B705]" />
              )}
              <div className="p-8">
                <h3 className="text-3xl font-extrabold text-[#15191C]">{s.title}</h3>
                <p className="mt-3 text-[#5B6166]">{s.text}</p>
                <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-[#15191C]">
                  {s.checks.map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F2B705]" />
                      {c}
                    </li>
                  ))}
                </ul>
                <span className="mt-7 inline-block border-b-4 border-[#F2B705] font-bold text-[#15191C]">{s.cta} →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
