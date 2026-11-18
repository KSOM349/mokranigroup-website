import SectionLabel from "./SectionLabel";

const cards = [
  { title: "Erfarenhet sedan 2017", text: "Vår golvläggare har arbetat med golv och plattsättning sedan 2017 och har yrkesbevis från BYN." },
  { title: "Noggrannhet", text: "Vi mäter två gånger och dokumenterar. Detaljerna avgör hur länge resultatet håller." },
  { title: "Pålitlig leverans", text: "Tidplaner vi kan stå för, och besked innan det blir ett problem." },
  { title: "Fysiskt och digitalt", text: "Golv, bygg och IT hos samma företag, med en kontaktperson." },
  { title: "Företag och privat", text: "Från bostäder till förskolor, boenden och kontor." },
  { title: "Tydlig offert", text: "Du vet vad som ingår innan jobbet börjar, utan överraskningar efteråt." },
];

export default function About() {
  return (
    <section id="about" className="bg-[#F3F1EA] px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel text="Om oss" />
        <h2 className="mt-5 max-w-3xl text-4xl font-extrabold text-[#15191C] md:text-6xl">Ett lokalt företag som tar ansvar.</h2>
        <p className="mt-5 max-w-2xl text-lg text-[#5B6166]">
          Mokrani Group startade i Stockholm med en enkel idé: kunder ska kunna anlita en seriös aktör som klarar både hantverket och tekniken. Idag arbetar vi åt företag och privatpersoner i Stockholm med omnejd.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="rounded-xl bg-white p-8 shadow-sm">
              <h3 className="border-l-4 border-[#F2B705] pl-4 text-2xl font-bold text-[#15191C]">{c.title}</h3>
              <p className="mt-3 text-[#5B6166]">{c.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-xl bg-[#F2B705] p-8 text-[#15191C] md:p-10">
          <p className="label">Vår vision</p>
          <p className="mt-4 max-w-3xl text-2xl font-bold leading-snug md:text-3xl" style={{ fontFamily: "var(--font-display)" }}>
            Att vara företaget du ringer när något ska göras rätt. Du ska veta vad du får, vem du pratar med och vad det kostar innan vi börjar.
          </p>
        </div>
        <a href="/om-oss" className="mt-10 inline-block border-b-4 border-[#F2B705] font-semibold text-[#15191C]">
          Läs mer om oss →
        </a>
      </div>
    </section>
  );
}
