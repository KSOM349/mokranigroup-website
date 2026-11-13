import type { Metadata } from "next";
import PageShell from "../components/PageShell";

export const metadata: Metadata = {
  title: "Om oss | Mokrani Group",
  description: "Mokrani Group AB i Stockholm utför bygg, golvläggning, IT och städ för privatpersoner, föreningar och företag.",
};

export default function Page() {
  return (
    <PageShell title="Om oss" intro="Mokrani Group AB är ett företag i Stockholm som samlar bygg, golv, IT och städ på ett ställe.">
      <div className="max-w-2xl space-y-5 text-lg text-[#15191C]">
        <p>Vi arbetar med privatpersoner, bostadsrättsföreningar och företag i hela Stockholm.</p>
        <p>Vi har bland annat arbetat i förskolor, boenden och privata hem. Du får en kontaktperson och en tydlig offert innan jobbet börjar.</p>
        <p>Behöver du hjälp med flera saker samtidigt, till exempel golv och IT, behöver du inte samordna flera företag.</p>
      </div>
      <a href="/kontakt" className="mt-8 inline-block rounded-md bg-[#F2B705] px-7 py-4 font-bold text-[#15191C] hover:brightness-95">
        Begär offert
      </a>
    </PageShell>
  );
}
