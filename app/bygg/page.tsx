import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Renovering & bygg i Stockholm | Mokrani Group",
  description: "Renovering, ombyggnation, snickeri och måleri i Stockholm. Vi tar hand om allt från underarbete till färdig yta. Begär offert.",
};

const sections = [
  {
    heading: "Från underarbete till färdig yta",
    text: "En renovering består av många små steg som måste göras i rätt ordning. Det som syns allra mest, som färg och golv, är beroende av det som görs först. Ett bra resultat börjar med ett bra underlag.\n\nVi renoverar hela rum eller delar av dem.",
    items: ["Lägenheter och villor", "Kontor och lokaler", "Förskolor och boenden"],
  },
  {
    heading: "Underarbete: det som görs först",
    text: "Underarbetet är grunden. Det är här väggar och golv görs rena, plana och redo för ytskiktet.",
    items: [
      { title: "Rivning", text: "Gamla ytskikt, golv eller väggar tas bort så att vi kommer åt det som ska göras." },
      { title: "Avjämning", text: "Golvet jämnas ut så att det blir plant. Det är viktigt för att nya golv ska sitta rätt." },
      { title: "Spackling och slipning", text: "Hål och ojämnheter i väggar och tak fylls och slipas så att ytan blir slät." },
      { title: "Gipsning", text: "Väggar och tak jämnas och lagas med gips inför spackling och målning." },
    ],
  },
  {
    heading: "Snickeri",
    text: "Snickeriet är detaljerna som gör ett rum färdigt, och som ofta märks mest när de är väl utförda.",
    items: [
      { title: "Dörrar och foder", text: "Montering och justering av dörrar och foder, så att de sitter rätt och går lätt." },
      { title: "Lister och socklar", text: "Lister och socklar ger rummet en snygg avslutning mot golv, vägg och tak." },
      { title: "Inredning på plats", text: "Inredning och detaljer som anpassas och monteras på plats i rummet." },
      { title: "Montering och justering", text: "Vi monterar och justerar så att allt sitter rakt och fungerar som det ska." },
    ],
  },
  {
    heading: "Måleri",
    text: "En ny färg är det snabbaste sättet att förändra ett rum. Ett bra målningsresultat bygger på ett jämnt underlag, och därför hänger måleriet nära ihop med spackling.",
    items: [
      { title: "Invändig målning", text: "Målning av väggar och tak inomhus." },
      { title: "Spackling", text: "Ytan förbereds innan målning så att resultatet blir jämnt." },
      { title: "Tapetsering", text: "Vi sätter tapet på väggar, med förberedd yta för att få ett jämnt resultat." },
      { title: "Målning av tak och väggar", text: "Hela rum eller delar av dem, enligt överenskommelse." },
    ],
  },
  {
    heading: "Badrum",
    text: "Vi renoverar badrum med våtrumsmatta på både vägg och golv. Läs mer om hur våtrum byggs på sidan Våtrum.",
    items: ["Våtrumsmatta på vägg", "Plastmatta på golv"],
  },
  {
    heading: "Slutkontroll",
    text: "När jobbet är klart går vi igenom resultatet tillsammans med dig på plats, så att du vet att allt är som det ska.",
  },
  {
    heading: "Vi samordnar hela jobbet",
    text: "Behöver du flera yrken i samma projekt tar vi hand om kontakten. För rör, snickeri och el arbetar vi tillsammans med utvalda partnerföretag, och du har en kontaktperson hos oss.",
  },
  {
    heading: "Tips inför en renovering",
    text: "Några saker underlättar för både dig och oss:",
    items: [
      "Bestäm vad du vill ha, men var öppen för råd om material",
      "Tänk på vad som ska flyttas ur rummet",
      "Boende i bostadsrätt: kontrollera vad styrelsen behöver godkänna",
      "Skicka gärna bilder och mått när du kontaktar oss",
    ],
  },
  {
    heading: "Garanti och ROT",
    text: "Vi lämnar garanti på vårt arbete. Som privatperson kan du ha rätt till ROT-avdrag för arbetskostnaden. Fråga oss, så berättar vi hur det fungerar för ditt jobb.",
  },
  {
    heading: "Där vi arbetar",
    text: "Vi utför jobb i hela Stockholm och i förorterna runt omkring.",
  },
];

const faq = [
  { q: "Vad är underarbete?", a: "Underarbete är allt som görs innan ytskiktet läggs eller målas, till exempel rivning, avjämning och spackling. Det avgör hur bra och hur hållbart slutresultatet blir." },
  { q: "Behöver jag bygglov för att renovera?", a: "Många invändiga renoveringar kräver inte bygglov, men det kan krävas om du ändrar bärande delar eller planlösning. Kontakta kommunen om du är osäker. Bor du i bostadsrätt behöver du ofta styrelsens godkännande för större ändringar." },
  { q: "Kan ni ta hand om flera yrken i samma jobb?", a: "Ja. Vi tar hand om kontakten och samordnar jobbet. För rör, snickeri och el arbetar vi tillsammans med utvalda partnerföretag." },
  { q: "Hur får jag en offert?", a: "Skicka en förfrågan via formuläret eller ring oss. Vi tittar på jobbet och lämnar en tydlig offert innan något startar." },
  { q: "Kan jag få ROT-avdrag?", a: "Som privatperson kan du ha rätt till ROT-avdrag för arbetskostnaden. Fråga oss så berättar vi hur det fungerar för ditt jobb." },
];

export default function Page() {
  return (
    <ServicePage
      title="Bygg & renovering"
      intro="Vi renoverar och bygger om bostäder och lokaler, från underarbete till färdig yta."
      sections={sections}
      faq={faq}
      related={[{ href: "/vatrum", label: "Våtrum" }, { href: "/golv", label: "Golvläggning" }]}
    />
  );
}
