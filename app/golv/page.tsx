import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Golvläggning | Mokrani Group",
  description: "Parkett, laminat, plastmatta, linoleum och våtrumsgolv i Stockholm.",
};

const sections = [
  {
    "heading": "Parkett och trägolv",
    "text": "Du väljer trädslag och utförande. Vi hjälper dig att välja rätt golv för rummet.",
    "items": []
  },
  {
    "heading": "Trädslag",
    "text": "",
    "items": [
      "Ek",
      "Ask",
      "Björk",
      "Bok",
      "Körsbär",
      "Valnöt",
      "Lönn",
      "Lärk",
      "Furu"
    ]
  },
  {
    "heading": "Typer av golv",
    "text": "Från massivt trä till prisvärda alternativ.",
    "items": [
      "Massivt trägolv",
      "Flerskiktsparkett",
      "Lamellparkett",
      "Stavparkett",
      "Fiskbensparkett",
      "Mosaikparkett",
      "Bredplank",
      "Laminatgolv"
    ]
  },
  {
    "heading": "Ytbehandling",
    "text": "",
    "items": [
      "Lackad",
      "Oljad",
      "Vitoljad",
      "Borstad"
    ]
  },
  {
    "heading": "Mattläggning",
    "text": "Vi lägger golv från bland annat Tarkett, Desso och Forbo, och jämnar ut underlaget innan vi lägger.",
    "items": [
      "Plastmatta",
      "Linoleum",
      "Textilmatta",
      "Mattplattor",
      "Avjämning av underlag",
      "Svetsade skarvar"
    ]
  },
  {
    "heading": "Plastmatta",
    "text": "Plastmatta passar i miljöer som utsätts för slitage och kräver enkel skötsel.",
    "items": [
      "Förskolor",
      "Vård och boenden",
      "Kontor och lokaler",
      "Bostäder"
    ]
  },
  {
    "heading": "Våtrumsgolv",
    "text": "Golv i badrum och andra våtutrymmen kräver tätt utförande och korrekta detaljer.",
    "items": [
      "Plastmatta i våtrum",
      "Hålkäl och svetsade skarvar",
      "Anslutning till golvbrunn"
    ]
  },
  {
    "heading": "Slipning och reparation",
    "text": "Gamla golv kan ofta få nytt liv.",
    "items": [
      "Slipning av trägolv",
      "Lackning och oljning",
      "Golvreparation",
      "Byte av skadade golvdelar"
    ]
  }
];

export default function Page() {
  return (
    <ServicePage
      title="Golvläggning"
      intro="Vi lägger och renoverar golv i hem, förskolor, boenden och kontor, med noggrant underarbete."
      image="/images/golvprojekt.jpg"
      sections={sections}
    />
  );
}
