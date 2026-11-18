import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Våtrum & tätskikt i Stockholm | Mokrani Group",
  description: "Våtrum och tätskikt i Stockholm: badrumsrenovering med tätskikt, fall mot golvbrunn och tätade anslutningar. Begär offert.",
};

const sections = [
  {
    heading: "Därför är våtrum extra viktiga",
    text: "I badrum och andra våtutrymmen får vatten och fukt hela tiden angripa golv och väggar. Om vatten tar sig in bakom ytskiktet kan det skada konstruktionen och ge mögel, ofta utan att man ser det på ytan. Därför är det som görs under ytskiktet viktigare än själva ytan.\n\nVår golvläggare har arbetat med golv och plattsättning sedan 2017 och har yrkesbevis som golvläggare från Byggnadsindustrins Yrkesnämnd (BYN).",
  },
  {
    heading: "Det här gör vi",
    text: "Ett våtrum byggs i ordning, där varje steg bygger på det förra.",
    items: [
      { title: "Tätskikt", text: "Ett tätt skikt under ytskiktet som hindrar vatten från att nå underlaget och konstruktionen." },
      { title: "Fall mot golvbrunn", text: "Golvet lutar svagt mot golvbrunnen så att vattnet rinner dit istället för att samlas på golvet." },
      { title: "Anslutning till golvbrunn", text: "Anslutningen runt brunnen är ett känsligt ställe och måste vara tät." },
      { title: "Renovering av badrum", text: "Vi renoverar badrum, från underarbete till färdigt ytskikt." },
    ],
  },
  {
    heading: "Ytskikt i våtrum",
    text: "Ett ytskikt med få skarvar är lättare att hålla tätt. Därför arbetar vi med matta på både golv och vägg.",
    items: [
      { title: "Plastmatta på golv", text: "Ett tätt, slitstarkt och lättstädat golv. Skarvarna svetsas ihop så att golvet blir sammanhängande." },
      { title: "Våtrumsmatta på vägg", text: "Ett vägg-material utan fogar som vatten kan ta sig in i, vilket gör duschzonen lätt att hålla ren." },
      { title: "Hålkäl", text: "Mattan dras upp en bit på väggen så att golv och vägg möts i en tät, rundad övergång." },
      { title: "Svetsade skarvar", text: "Skarvarna smälts ihop så att ytan blir sammanhängande och hygienisk." },
    ],
  },
  {
    heading: "Så märker du ett bra våtrum",
    text: "Ett väl utfört våtrum märks ofta först efter många år, genom att inget har hänt. När tätskikt och ytskikt är rätt gjort kan ytskiktet hålla i många år.",
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
      { title: "Du beskriver jobbet", text: "Berätta om badrummet och vad du önskar. Du kan även skicka bilder." },
      { title: "Vi lämnar en offert", text: "Vi tittar på plats och lämnar en tydlig offert innan något startar." },
      { title: "Vi gör underarbetet", text: "Underlag, fall och tätskikt görs först, för det är här våtrummet avgörs." },
      { title: "Vi utför arbetet", text: "Ytskiktet läggs på golv och vägg, med tätade anslutningar." },
      { title: "Vi går igenom resultatet med dig", text: "Vi går igenom resultatet tillsammans med dig på plats." },
    ],
  },
];

const faq = [
  { q: "Vad är ett tätskikt?", a: "Ett tätskikt är ett vattentätt lager under ytskiktet. Det skyddar underlaget och konstruktionen om vatten tar sig förbi ytskiktet." },
  { q: "Varför ska golvet luta?", a: "För att vattnet ska rinna mot golvbrunnen istället för att stå kvar på golvet. Står vatten kvar belastas ytskiktet och anslutningarna mer." },
  { q: "Vad är hålkäl?", a: "Det är när golvmattan dras upp en bit på väggen så att golv och vägg bildar en rundad, tät övergång istället för en skarp skarv." },
  { q: "Kan jag få ROT-avdrag på badrumsrenovering?", a: "Som privatperson kan du ha rätt till ROT-avdrag för arbetskostnaden. Fråga oss så berättar vi hur det fungerar för ditt jobb." },
];

export default function Page() {
  return (
    <ServicePage
      title="Våtrum"
      intro="Vi bygger och renoverar våtrum med tätskikt, fall mot golvbrunn och tätade anslutningar."
      image="/images/vatrum.jpg"
      sections={sections}
      faq={faq}
      related={[{ href: "/golv", label: "Golvläggning" }, { href: "/bygg", label: "Bygg & renovering" }]}
    />
  );
}
