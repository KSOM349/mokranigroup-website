import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Golvläggare i Stockholm | Parkett, matta & våtrum – Mokrani Group",
  description: "Golvläggare i Stockholm: parkett, laminat, plastmatta, linoleum och våtrumsgolv. Vi lägger golv i hem, förskolor, boenden och kontor. Begär offert.",
};

const sections = [
  {
    heading: "Vilket golv passar dig?",
    text: "Börja med rummet och hur det används. Hittar du inte ditt rum här? Beskriv det för oss så föreslår vi ett golv.",
    items: [
      { title: "Vardagsrum och sovrum", text: "Parkett ger ett varmt och levande golv. Laminat är ett prisvärt alternativ som ser ut som trä." },
      { title: "Hall och kök", text: "Plastmatta tål väta och smuts och är lätt att torka av." },
      { title: "Mycket slitage", text: "Förskola, boende, kontor eller butik: plastmatta eller linoleum är vanliga val." },
      { title: "Kontor där ljud ska dämpas", text: "Textilplattor dämpar ljud, och en skadad platta kan bytas utan att hela golvet tas upp." },
      { title: "Badrum och våtrum", text: "Tätskikt under och plastmatta med svetsade skarvar ovanpå. Laminat och parkett passar inte i våtrum." },
      { title: "Begränsad budget", text: "Laminat är ofta det billigaste alternativet. Vi säger ärligt om ett billigare golv inte är rätt val för rummet." },
    ],
  },
  {
    heading: "Så går ett jobb till",
    steps: true,
    items: [
      { title: "Du beskriver jobbet", text: "Via formuläret eller telefon. Berätta om rummet, ytan och vad du önskar." },
      { title: "Vi tittar på plats och lämnar offert", text: "Vi tittar på underlaget och lämnar en tydlig offert innan något startar." },
      { title: "Vi gör underarbetet", text: "Underlaget förbereds och jämnas ut så att golvet blir rätt från början." },
      { title: "Vi lägger golvet", text: "Golvet läggs enligt överenskommelse, med noggranna anslutningar." },
      { title: "Vi går igenom resultatet", text: "Vi går igenom resultatet tillsammans med dig på plats." },
    ],
  },
  {
    heading: "Erfarenhet du kan lita på",
    text: "Vår golvläggare har arbetat med golv och plattsättning sedan 2017 och har yrkesbevis som golvläggare från Byggnadsindustrins Yrkesnämnd (BYN). Erfarenheten omfattar bostäder, förskolor, boenden och lokaler. Vi lägger golv från bland annat Tarkett, Desso och Forbo.",
  },
];

const faq = [
  { q: "Vilket golv är lättast att städa?", a: "Plastmatta. Ytan är slät och skarvarna kan svetsas ihop så att smuts inte fastnar." },
  { q: "Vilket golv tål mest slitage?", a: "Plastmatta och linoleum är vanliga i förskolor, boenden, kontor och andra miljöer med mycket gående." },
  { q: "Vilket golv passar i badrum?", a: "Ett våtrum behöver tätskikt och ett tätt ytskikt. Plastmatta med svetsade skarvar är ett vanligt val. Laminat och parkett passar inte i våtrum." },
  { q: "Vad är skillnaden mellan parkett och laminat?", a: "Parkett har ett skikt av äkta trä överst, medan laminat har ett tryckt dekorskikt. Parkett ger ett mer levande golv. Laminat är ofta billigare och tåligt men ska inte användas i våtrum." },
  { q: "Vilket trä ska jag välja till parkett?", a: "Ek är det vanligaste: hårt, tåligt och med tydlig ådring. Ask är ljust och slitstarkt, björk och bok ger ett lugnt och ljust golv. Mjukare trä som furu visar bruksspår, vilket många tycker är en del av charmen." },
  { q: "Måste det gamla golvet bort?", a: "Det beror på vad som ligger där och hur underlaget ser ut. Vi tittar på det vid besöket och säger vad som behövs." },
  { q: "Måste golvet under vara plant?", a: "Ja. Ojämnheter syns genom tunna golv och kan skada golvet över tid. Därför jämnar vi ut underlaget innan vi lägger." },
  { q: "Vad är avjämning?", a: "Ett lager som gör underlaget plant och jämnt, så att det nya golvet läggs rätt och ingenting syns igenom." },
  { q: "Kan ni laga ett skadat golv?", a: "Ofta, ja. Berätta vad som hänt och var, så tittar vi på om det går att laga eller om en större åtgärd behövs." },
  { q: "Kan en textilplatta bytas om det blir fläck?", a: "Ja. Textilplattor kan bytas en i taget, vilket är praktiskt på kontor." },
  { q: "Vad kostar det?", a: "Varje jobb är olika, så vi lämnar offert efter att vi har sett vad som ska göras. Priset påverkas mest av golvtyp, rummets storlek, underlagets skick, hur mycket som ska rivas upp och detaljer som trösklar och lister." },
  { q: "Hur lång tid tar ett golvjobb?", a: "Det beror på yta, golvtyp och underlag. Du får en tidsplan i offerten efter att vi har sett vad som ska göras." },
  { q: "Kommer ni hem eller till lokalen och tittar först?", a: "Ja. Vi gör platsbesök innan vi lämnar offert, så att den stämmer med verkligheten." },
  { q: "Kan jag få ROT-avdrag?", a: "Som privatperson kan du ha rätt till ROT-avdrag för arbetskostnaden. Fråga oss så berättar vi hur det fungerar för ditt jobb." },
  { q: "Var arbetar ni?", a: "I Stockholm med omnejd." },
];

export default function Page() {
  return (
    <ServicePage
      title="Golvläggning"
      intro="Vi lägger och renoverar golv i hem, förskolor, boenden och kontor, med noggrant underarbete."
      image="/images/golvprojekt.jpg"
      sections={sections}
      faq={faq}
      related={[{ href: "/vatrum", label: "Våtrum och tätskikt" }, { href: "/plattsattning", label: "Plattsättning" }]}
    />
  );
}
