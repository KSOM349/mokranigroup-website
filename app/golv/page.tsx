import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Golvläggare i Stockholm | Parkett, matta & våtrum – Mokrani Group",
  description: "Golvläggare i Stockholm: parkett, laminat, plastmatta, linoleum, plattsättning och våtrumsgolv. Vi lägger golv i hem, förskolor, boenden och kontor. Begär offert.",
};

const sections = [
  {
    "heading": "Erfarenhet av golv, plattsättning och våtrum",
    "text": "Vi har arbetat med golv och plattsättning i 10 år. Under tiden har vi lagt golv i bostäder, förskolor, boenden och lokaler, och vi är GVK-auktoriserade för arbete i våtrum.\n\nI ett våtrum avgör underarbetet om golvet håller. Det börjar med ett tätskikt under ytskiktet, ett golv som lutar mot golvbrunnen och tätade anslutningar vid väggar och rör. När det är rätt gjort kan ytskiktet, till exempel plastmatta, kakel eller klinker, hålla i många år.\n\nVi berättar vad som ska göras innan vi börjar, så att du vet vad du får.",
    "items": []
  },
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
    "text": "Plastmatta passar i miljöer med mycket slitage och krav på enkel skötsel.",
    "items": [
      "Förskolor",
      "Vård och boenden",
      "Kontor och lokaler",
      "Bostäder"
    ]
  },
  {
    "heading": "Plattsättning",
    "text": "Kakel och klinker kräver ett jämnt underlag och ordentliga fogar.",
    "items": [
      "Kakel",
      "Klinker",
      "Plattsättning i badrum",
      "Tätskikt före plattsättning",
      "Fogning"
    ]
  },
  {
    "heading": "Våtrum och tätskikt",
    "text": "Våtrum måste vara täta på riktigt. Vi arbetar med tätskikt, fall mot golvbrunn och tätade anslutningar.",
    "items": [
      "Plastmatta i våtrum",
      "Hålkäl och svetsade skarvar",
      "Anslutning till golvbrunn",
      "Tätskikt"
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
  },
  {
    "heading": "Där vi arbetar",
    "text": "Vi utför jobb i hela Stockholm och i förorterna runt omkring.",
    "items": []
  },
  {
    "heading": "Så går ett jobb till",
    "text": "",
    "items": [
      "Du beskriver jobbet",
      "Vi lämnar en offert",
      "Vi gör underarbetet",
      "Vi lägger golvet",
      "Vi går igenom resultatet med dig"
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
      related={[{"href":"/vatrum","label":"Våtrum och tätskikt"},{"href":"/plattsattning","label":"Plattsättning"}]}
    />
  );
}
