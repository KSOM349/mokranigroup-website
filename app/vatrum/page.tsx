import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Våtrum & tätskikt i Stockholm | Mokrani Group",
  description: "Våtrum och tätskikt i Stockholm: badrumsrenovering med tätskikt, fall mot golvbrunn och tätade anslutningar. GVK-auktoriserade. Begär offert.",
};

const sections = [
  {
    "heading": "Våtrum och GVK",
    "text": "Vi är GVK-auktoriserade och har arbetat med golv och plattsättning i 10 år. I ett våtrum avgör underarbetet om golvet håller över tid.\n\nDet viktigaste är ett tätskikt under ytskiktet, ett golv som lutar mot golvbrunnen och tätade anslutningar vid väggar, rör och golvbrunn.",
    "items": []
  },
  {
    "heading": "Det här gör vi",
    "text": "",
    "items": [
      "Tätskikt",
      "Fall mot golvbrunn",
      "Anslutning till golvbrunn",
      "Renovering av badrum"
    ]
  },
  {
    "heading": "Ytskikt",
    "text": "",
    "items": [
      "Plastmatta i våtrum",
      "Hålkäl och svetsade skarvar",
      "Kakel",
      "Klinker"
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
      "Vi utför arbetet",
      "Vi går igenom resultatet med dig"
    ]
  }
];

export default function Page() {
  return (
    <ServicePage
      title="Våtrum"
      intro="Vi bygger och renoverar våtrum med tätskikt, fall mot golvbrunn och tätade anslutningar."
      image="/images/vatrum.jpg"
      sections={sections}
      related={[{"href": "/plattsattning", "label": "Plattsättning"}, {"href": "/golv", "label": "Golvläggning"}]}
    />
  );
}
