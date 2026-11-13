import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Plattsättning i Stockholm | Kakel & klinker – Mokrani Group",
  description: "Plattsättning i Stockholm: kakel och klinker i badrum, hallar och andra utrymmen. Vår golvläggare har arbetat med golv och plattsättning sedan 2017 och har yrkesbevis som golvläggare från Byggnadsindustrins Yrkesnämnd (BYN). Begär offert.",
};

const sections = [
  {
    "heading": "Erfarenhet",
    "text": "Vår golvläggare har arbetat med golv och plattsättning sedan 2017 och har yrkesbevis som golvläggare från Byggnadsindustrins Yrkesnämnd (BYN). En bra platta börjar under ytan: underlaget ska vara jämnt, rent och rätt förberett innan vi sätter första plattan.",
    "items": []
  },
  {
    "heading": "Det här sätter vi",
    "text": "",
    "items": [
      "Kakel på vägg",
      "Klinker på golv",
      "Badrum",
      "Hall och entré",
      "Fogning och silikon"
    ]
  },
  {
    "heading": "Tätskikt i våtrum",
    "text": "I våtrum sätter vi tätskikt innan plattorna. Läs mer under Våtrum.",
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
      title="Plattsättning"
      intro="Vi sätter kakel och klinker i badrum, hallar och andra utrymmen, med ett jämnt underlag och noggranna fogar."
      sections={sections}
      related={[{"href": "/vatrum", "label": "Våtrum och tätskikt"}, {"href": "/golv", "label": "Golvläggning"}]}
    />
  );
}
