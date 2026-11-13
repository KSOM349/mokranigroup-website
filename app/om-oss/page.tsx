import type { Metadata } from "next";
import PageShell from "../components/PageShell";

export const metadata: Metadata = {
  title: "Om oss | Mokrani Group",
  description: "Mokrani Group i Stockholm utför golv, bygg, IT och städ för privatpersoner och företag.",
};

export default function Page() {
  return (
    <PageShell title="Om oss" intro="Mokrani Group samlar golv, bygg, IT och städ på ett ställe i Stockholm.">
      <div className="max-w-2xl space-y-5 text-lg text-[#15191C]">
        <p>Vi hjälper privatpersoner och företag i Stockholm med omnejd.</p>
        <p>Vår golvläggare har arbetat med golv och plattsättning sedan 2017. Du får en kontaktperson och en tydlig offert innan jobbet börjar.</p>
        <p>Behöver du hjälp med flera saker samtidigt, till exempel golv och IT, behöver du inte samordna flera företag.</p>
      </div>
      <h2 className="mt-12 text-2xl font-bold text-[#15191C]">Kompetens</h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {["Yrkesbevis som golvläggare (BYN)", "Utbildad nätverkstekniker", "Arbete med golv och plattsättning sedan 2017"].map((i) => (
          <li key={i} className="border-l-4 border-[#F2B705] bg-[#ECEDEA] px-4 py-3 text-[#15191C]">{i}</li>
        ))}
      </ul>
      <a href="/kontakt" className="mt-8 inline-block rounded-md bg-[#F2B705] px-7 py-4 font-bold text-[#15191C] hover:brightness-95">
        Begär offert
      </a>
    </PageShell>
  );
}
