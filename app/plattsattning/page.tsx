import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Plattsättning i Stockholm | Kakel & klinker – Mokrani Group",
  description: "Plattsättning i Stockholm: kakel och klinker i hallar och andra utrymmen. Vår golvläggare har arbetat med golv och plattsättning sedan 2017 och har yrkesbevis som golvläggare från Byggnadsindustrins Yrkesnämnd (BYN). Begär offert.",
};

const sections = [
  {
    heading: "Kakel och klinker, vad är skillnaden?",
    text: "Plattsättning handlar om att sätta kakel eller klinker på väggar och golv. Kakel är oftast tunnare plattor som används på väggar. Klinker är hårdare och tåligare och används ofta på golv.\n\nVår golvläggare har arbetat med golv och plattsättning sedan 2017 och har yrkesbevis som golvläggare från Byggnadsindustrins Yrkesnämnd (BYN). En bra platta börjar under ytan: underlaget ska vara jämnt, rent och rätt förberett innan vi sätter första plattan.",
    items: [
      { title: "Kakel på vägg", text: "Plattor som ger väggen ett lättskött och hållbart ytskikt." },
      { title: "Klinker på golv", text: "Hårda, tåliga plattor som tål slitage på golv." },
      { title: "Hall och entré", text: "Ett tåligt golv som tål skor, väta och smuts." },
      { title: "Fogning och silikon", text: "Fogar och silikon i hörn och skarvar ger ett färdigt och tätt resultat." },
    ],
  },
  {
    heading: "Därför spelar underlaget roll",
    text: "Plattor är hårda och förlåter inte ett ojämnt underlag. Om underlaget inte är plant kan plattorna ligga snett, bli ojämna eller spricka med tiden. Därför förbereder vi underlaget noggrant innan vi sätter första plattan.",
  },
  {
    heading: "Garanti och ROT",
    text: "Vi lämnar garanti på vårt arbete. Som privatperson kan du ha rätt till ROT-avdrag för arbetskostnaden. Fråga oss, så berättar vi hur det fungerar för ditt jobb.",
  },
  {
    heading: "Där vi arbetar",
    text: "Vi utför jobb i hela Stockholm och i förorterna runt omkring.",
  },
  {
    heading: "Så går ett jobb till",
    steps: true,
    items: [
      { title: "Du beskriver jobbet", text: "Via formuläret eller telefon. Berätta om ytan och vad du önskar." },
      { title: "Vi lämnar en offert", text: "Vi tittar på plats och lämnar en tydlig offert innan något startar." },
      { title: "Vi gör underarbetet", text: "Underlaget förbereds så att det blir jämnt och rent." },
      { title: "Vi utför arbetet", text: "Plattorna sätts och fogas noggrant." },
      { title: "Vi går igenom resultatet med dig", text: "Vi går igenom resultatet tillsammans med dig på plats." },
    ],
  },
];

const faq = [
  { q: "Vad är skillnaden mellan kakel och klinker?", a: "Kakel är oftast tunnare och används på väggar. Klinker är hårdare och tåligare och används ofta på golv." },
  { q: "Varför är underlaget så viktigt?", a: "Plattor förlåter inte ojämnheter. Ett ojämnt underlag kan ge sneda plattor och sprickor med tiden." },
  { q: "Kan jag få ROT-avdrag?", a: "Som privatperson kan du ha rätt till ROT-avdrag för arbetskostnaden. Fråga oss så berättar vi hur det fungerar för ditt jobb." },
];

export default function Page() {
  return (
    <ServicePage
      title="Plattsättning"
      intro="Vi sätter kakel och klinker i hallar och andra utrymmen, med ett jämnt underlag och noggranna fogar."
      sections={sections}
      faq={faq}
      related={[{"href": "/golv", "label": "Golvläggning"}]}
    />
  );
}
