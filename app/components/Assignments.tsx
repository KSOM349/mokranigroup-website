import SectionLabel from "./SectionLabel";

const items = [
  { tag: "Bygg + Golv", title: "Badrum & våtrum", text: "Tätskikt samt våtrumsmatta på vägg och golv", href: "/vatrum" },
  { tag: "Bygg + IT", title: "Kontorsrenovering", text: "Nya ytor, nya golv, nytt nätverk", href: "/bygg" },
  { tag: "Golv", title: "Golv i bostad & lokal", text: "Parkett, linoleum och plastmatta", href: "/golv" },
  { tag: "IT", title: "Nätverk & Wi-Fi", text: "Nätverksinstallation, router och kabeldragning", href: "/it" },
  { tag: "IT", title: "IT-support", text: "Felsökning och hjälp till användare", href: "/it" },
  { tag: "Bygg", title: "Ombyggnation", text: "Planlösning, väggar, snickeri och ytskikt", href: "/bygg" },
];

export default function Assignments() {
  return (
    <section id="uppdrag" className="bg-white px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel text="Uppdrag" />
        <h2 className="mt-5 max-w-3xl text-4xl font-extrabold text-[#15191C] md:text-6xl">Uppdrag vi tar oss an.</h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <a key={i.title} href={i.href} className="lift flex min-h-52 flex-col justify-between rounded-xl border border-[#15191C]/10 bg-[#F7F6F2] p-7 hover:border-[#F2B705]">
              <span className="label w-fit rounded-full bg-[#F2B705] px-3 py-1.5 text-[#15191C]">{i.tag}</span>
              <div>
                <h3 className="mt-8 text-2xl font-bold text-[#15191C]">{i.title}</h3>
                <p className="mt-2 text-[#5B6166]">{i.text}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
