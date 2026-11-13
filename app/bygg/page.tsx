import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Renovering & bygg i Stockholm | Mokrani Group",
  description: "Renovering, ombyggnation, snickeri och måleri i Stockholm. Vi tar hand om allt från underarbete till färdig yta. Begär offert.",
};

const sections = [
  {
    "heading": "Renovering",
    "text": "Vi renoverar hela rum eller delar av dem.",
    "items": [
      "Lägenheter och villor",
      "Kontor och lokaler",
      "Förskolor och boenden"
    ]
  },
  {
    "heading": "Underarbete",
    "text": "Ett bra resultat börjar med ett bra underlag.",
    "items": [
      "Rivning",
      "Avjämning",
      "Spackling och slipning",
      "Gipsning"
    ]
  },
  {
    "heading": "Snickeri",
    "text": "",
    "items": [
      "Dörrar och foder",
      "Lister och socklar",
      "Inredning på plats",
      "Montering och justering"
    ]
  },
  {
    "heading": "Måleri",
    "text": "",
    "items": [
      "Invändig målning",
      "Spackling",
      "Tapetsering",
      "Målning av tak och väggar"
    ]
  },
  {
    "heading": "Vi samordnar hela jobbet",
    "text": "Behöver du flera yrken i samma projekt tar vi hand om kontakten. För rör, snickeri och el arbetar vi tillsammans med utvalda partnerföretag, och du har en kontaktperson hos oss.",
    "items": []
  },
  {
    "heading": "Garanti och ROT",
    "text": "Vi lämnar garanti på vårt arbete. Som privatperson kan du ha rätt till ROT-avdrag för arbetskostnaden. Fråga oss, så berättar vi hur det fungerar för ditt jobb.",
    "items": []
  },
  {
    "heading": "Där vi arbetar",
    "text": "Vi utför jobb i hela Stockholm och i förorterna runt omkring.",
    "items": []
  }
];

export default function Page() {
  return <ServicePage title="Bygg & renovering" intro="Vi renoverar och bygger om bostäder och lokaler, från underarbete till färdig yta." image="/images/renovering.jpg" sections={sections} />;
}
