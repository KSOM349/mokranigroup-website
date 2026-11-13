import type { Metadata } from "next";
import PageShell from "../components/PageShell";
import QuoteForm from "../components/QuoteForm";
import CopyEmail from "../components/CopyEmail";

export const metadata: Metadata = {
  title: "Kontakt och offert | Mokrani Group",
  description: "Kontakta Mokrani Group i Stockholm för offert på bygg, golv, IT och städ.",
};

const card = "rounded-md bg-[#ECEDEA] p-6";
const link = "mt-2 block text-[#15191C] underline decoration-[#F2B705] decoration-4 underline-offset-4";

export default function Page() {
  return (
    <PageShell title="Kontakt" intro="Beskriv vad du behöver hjälp med, så återkommer vi med en offert.">
      <QuoteForm />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <div className={card}>
          <h2 className="text-xl font-bold text-[#15191C]">E-post</h2>
          <div className="mt-2"><CopyEmail /></div>
        </div>
        <div className={card}>
          <h2 className="text-xl font-bold text-[#15191C]">Telefon</h2>
          <a href="tel:+46760949466" className={link}>076 094 94 66</a>
        </div>
        <div className={card}>
          <h2 className="text-xl font-bold text-[#15191C]">Ort</h2>
          <p className="mt-2 text-[#15191C]">Stockholm, Sverige</p>
        </div>
      </div>
    </PageShell>
  );
}
