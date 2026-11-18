import type { Metadata } from "next";
import PageShell from "../components/PageShell";

export const metadata: Metadata = {
  title: "Integritetspolicy | Mokrani Group",
  description: "Så behandlar Mokrani Group dina personuppgifter när du kontaktar oss.",
};

const h2 = "mt-10 text-2xl font-bold text-[#15191C]";
const p = "mt-3 text-[#15191C]";

export default function Page() {
  return (
    <PageShell title="Integritetspolicy" intro="Så behandlar vi dina personuppgifter när du kontaktar oss.">
      <div className="max-w-3xl">
        <p className={p}>Senast uppdaterad: 13 november 2026.</p>

        <h2 className={h2}>Vem ansvarar för dina uppgifter?</h2>
        <p className={p}>Mokrani Group är personuppgiftsansvarig. Du når oss på info@mokranigroup.com eller 076 094 94 66.</p>

        <h2 className={h2}>Vilka uppgifter samlar vi in?</h2>
        <p className={p}>När du fyller i formuläret för offert får vi de uppgifter du skriver: namn, telefonnummer (valfritt), e-postadress, vilken typ av arbete det gäller och din beskrivning. Skriv inte in känsliga uppgifter som du inte vill dela. Om du mejlar eller ringer oss får vi också de uppgifter du själv lämnar.</p>

        <h2 className={h2}>Varför behandlar vi uppgifterna?</h2>
        <p className={p}>Vi använder uppgifterna för att svara på din förfrågan, lämna offert och hålla kontakt med dig om uppdraget. Rättslig grund är att det behövs för att vidta åtgärder på din begäran innan ett avtal ingås, eller vårt berättigade intresse att besvara frågor från dig.</p>

        <h2 className={h2}>Vilka tar emot uppgifterna?</h2>
        <p className={p}>Formuläret hanteras av tjänsten Formspree, som tar emot förfrågan och skickar den vidare till vår e-post. Det kan innebära att uppgifterna behandlas utanför EU/EES. E-post till oss vidarebefordras via vår domänleverantör till vår e-postlåda hos Google. Webbplatsen driftas hos Vercel, som kan logga tekniska uppgifter som IP-adress när sidan besöks. Vi säljer inte dina uppgifter.</p>

        <h2 className={h2}>Cookies och statistik</h2>
        <p className={p}>Vi använder inga verktyg för webbstatistik eller marknadsföring på webbplatsen och sätter inga cookies för spårning.</p>

        <h2 className={h2}>Hur länge sparar vi uppgifterna?</h2>
        <p className={p}>Vi sparar uppgifterna så länge de behövs för att hantera din förfrågan och ett eventuellt uppdrag, och raderar dem därefter. Underlag som omfattas av bokföringslagen sparas så länge lagen kräver.</p>

        <h2 className={h2}>Dina rättigheter</h2>
        <p className={p}>Du har rätt att begära tillgång till dina uppgifter, få felaktiga uppgifter rättade, få uppgifter raderade, begränsa behandlingen, invända mot behandlingen och få ut uppgifterna i ett vanligt format. Kontakta oss på info@mokranigroup.com så hjälper vi dig. Du kan också lämna klagomål till Integritetsskyddsmyndigheten (IMY), imy.se.</p>
      </div>
    </PageShell>
  );
}
