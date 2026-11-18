import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "IT-support & nätverk för företag i Stockholm | Mokrani Group",
  description: "IT-support och nätverk för företag i Stockholm: nätverksinstallation, WiFi, router och kabeldragning av utbildad nätverkstekniker. Begär offert.",
};

const sections = [
  {
    heading: "IT som bara fungerar",
    text: "För ett litet företag är IT något som ska fungera utan att ta tid. När datorn hänger sig, WiFi tappar täckning eller skrivaren inte hittas står arbetet still. Vi hjälper dig att lösa det, och att bygga ett nätverk som håller.\n\nVår tekniker är utbildad nätverkstekniker. Utbildningen har fokus på routrar och switchar från Cisco samt server och Active Directory från Microsoft, med laborationer som speglar aktuella IT-miljöer.",
  },
  {
    heading: "IT-support",
    text: "Hjälp när något krånglar, utan krångligt tekniskt språk.",
    items: [
      { title: "Felsökning", text: "Vi tar reda på vad som är fel och åtgärdar det, oavsett om det gäller dator, program eller anslutning." },
      { title: "Hjälp till användare", text: "Frågor i vardagen får ett enkelt svar, så att du kan fortsätta arbeta." },
      { title: "Installation av datorer och program", text: "Nya datorer och program installeras och ställs in så att de är redo att användas." },
    ],
  },
  {
    heading: "Nätverk",
    text: "Nätverket är grunden som allt annat bygger på. Ett bra nätverk märks inte. Ett dåligt märks hela tiden.",
    items: [
      { title: "Nätverksinstallation", text: "Vi installerar och ställer in nätverket så att datorer, skrivare och andra enheter når varandra och internet." },
      { title: "WiFi och router", text: "Routern är nätverkets hjärta. Vi installerar och ställer in WiFi så att du får täckning där du behöver den." },
      { title: "Kabeldragning", text: "Kabel till fasta datorer och skrivare ger en stabilare anslutning än WiFi. Vi drar kabel där det behövs." },
    ],
  },
  {
    heading: "WiFi eller kabel?",
    text: "WiFi är praktiskt för telefoner, surfplattor och bärbara datorer. Men för fasta datorer, skrivare och annat som sällan flyttas är kabel nästan alltid bättre: stabilare, snabbare och mindre störningskänsligt.\n\nI större lokaler eller lokaler med tjocka väggar räcker ofta inte en enda router. Då behövs det flera nätverkspunkter placerade så att täckningen blir jämn.",
  },
  {
    heading: "IT och bygg i samma jobb",
    text: "Planerar du en renovering av kontor eller lokal är det smart att tänka på nätverket samtidigt. Kabel som dras medan väggarna ändå är öppna är enklare och snyggare. Eftersom vi arbetar med både bygg och IT kan det hanteras som ett jobb, med en kontaktperson.",
  },
  {
    heading: "Där vi arbetar",
    text: "Vi utför jobb i Stockholm med omnejd.",
  },
];

const faq = [
  { q: "Varför har jag dålig WiFi i vissa rum?", a: "Det beror ofta på avstånd, tjocka väggar eller att routern står olämpligt. En lösning kan vara att flytta routern eller lägga till fler nätverkspunkter." },
  { q: "Behöver jag dra kabel om jag har WiFi?", a: "Inte alltid, men för fasta datorer och skrivare ger kabel en stabilare anslutning. Det går att kombinera kabel och WiFi." },
  { q: "Kan ni hjälpa mig att installera nya datorer?", a: "Ja. Vi installerar och ställer in datorer och program så att de är redo att användas." },
  { q: "Hur får jag en offert?", a: "Skicka en förfrågan via formuläret eller ring oss, så berättar vi hur vi kan hjälpa till." },
];

export default function Page() {
  return (
    <ServicePage
      title="IT & nätverk"
      intro="Vi hjälper företag med IT-support och nätverk så att vardagen fungerar."
      sections={sections}
      faq={faq}
      related={[{ href: "/bygg", label: "Bygg & renovering" }]}
    />
  );
}
