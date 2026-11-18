import SectionLabel from "./SectionLabel";

const steps = [
  { title: "Förfrågan", text: "Du berättar vad du behöver. Vi återkommer snabbt med frågor och förslag på platsbesök." },
  { title: "Besök & offert", text: "Vi mäter, bedömer och ger en tydlig offert med omfattning, tidplan och pris." },
  { title: "Genomförande", text: "Arbetet utförs enligt överenskommelse, med en fast kontaktperson hela vägen." },
  { title: "Överlämning", text: "Vi går igenom resultatet tillsammans och lämnar inte förrän du är nöjd." },
];

export default function Process() {
  return (
    <section id="process" className="bg-[#F3F1EA] px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel text="Så arbetar vi" />
        <h2 className="mt-5 max-w-3xl text-4xl font-extrabold text-[#15191C] md:text-6xl">Tydligt från första samtalet till sista skruven.</h2>
        <ol className="mt-14 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-xl bg-white p-7 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2B705] font-bold text-[#15191C]">{i + 1}</span>
              <h3 className="mt-5 text-2xl font-bold text-[#15191C]">{s.title}</h3>
              <p className="mt-2 text-[#5B6166]">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
