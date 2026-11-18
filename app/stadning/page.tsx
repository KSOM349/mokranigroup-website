import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Byggstäd & städning i Stockholm | Mokrani Group",
  description: "Byggstäd, slutstäd efter renovering och städning för företag och privatpersoner i Stockholm. Begär offert.",
};

const sections = [
  {
    heading: "Städning som gör skillnad",
    text: "Efter ett byggjobb eller en renovering finns damm och byggrester överallt. Ett rum kan vara färdigt men inte kännas färdigt förrän det är städat. Vi städar efter byggjobb och erbjuder städning för företag och privatpersoner.",
  },
  {
    heading: "Det här städar vi",
    items: [
      { title: "Byggstäd", text: "Städning av damm, skräp och byggrester under och efter byggjobb, så att arbetsplatsen blir ren och säker." },
      { title: "Slutstäd efter renovering", text: "En grundlig städning när allt är klart, så att du kan flytta in och använda rummet direkt." },
      { title: "Kontorsstäd", text: "Regelbunden städning av kontor och lokaler, så att arbetsmiljön känns fräsch." },
      { title: "Städning för privatpersoner", text: "Hjälp i hemmet, anpassad efter dina behov." },
      { title: "Flyttstäd", text: "Städning vid flytt, så att bostaden lämnas ren." },
    ],
  },
  {
    heading: "Byggstäd och slutstäd, vad är skillnaden?",
    text: "Byggstäd görs ofta under eller direkt efter byggarbetet för att ta bort damm och rester som annars sprids. Slutstäd är den noggranna städningen när allt är klart, så att rummet är redo att användas.\n\nOm du renoverar med oss kan städningen ingå i samma jobb, med en kontaktperson.",
  },
  {
    heading: "Där vi arbetar",
    text: "Vi utför jobb i Stockholm med omnejd.",
  },
];

const faq = [
  { q: "Vad är byggstäd?", a: "Byggstäd är städning av damm, skräp och byggrester under eller efter ett byggjobb." },
  { q: "När behöver jag slutstäd?", a: "När renoveringen är klar och du vill kunna använda rummet direkt, utan damm och rester." },
  { q: "Kan ni städa regelbundet för företag?", a: "Ja, vi erbjuder kontorsstäd. Berätta om lokalen och hur ofta du vill ha städning så lämnar vi ett förslag." },
  { q: "Hur får jag en offert?", a: "Skicka en förfrågan via formuläret eller ring oss." },
];

export default function Page() {
  return (
    <ServicePage
      title="Städtjänster"
      intro="Vi städar efter byggjobb och erbjuder städning för företag och privatpersoner."
      sections={sections}
      faq={faq}
      related={[{ href: "/bygg", label: "Bygg & renovering" }]}
    />
  );
}
