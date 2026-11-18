import type { Metadata } from "next";
import PageShell from "../components/PageShell";
import QuoteForm from "../components/QuoteForm";
import CopyEmail from "../components/CopyEmail";

export const metadata: Metadata = {
  title: "Kontakt & offert | Mokrani Group",
  description: "Begär offert på golv, bygg, IT eller städ i Stockholm. Ring 076-094 94 66 eller skicka ett meddelande.",
};

export default function Page() {
  return (
    <PageShell title="Kontakt" intro="Berätta vad du behöver så återkommer vi så snart vi kan.">
      <div className="grid gap-12 md:grid-cols-2">
        <QuoteForm />
        <div className="space-y-4">
          <div className="rounded-md bg-[#F3F1EA] p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#5B6166]">Telefon</p>
            <a href="tel:+46760949466" className="text-xl font-bold text-[#15191C]">076-094 94 66</a>
          </div>
          <div className="rounded-md bg-[#F3F1EA] p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#5B6166]">E-post</p>
            <CopyEmail />
          </div>
          <div className="rounded-md bg-[#F3F1EA] p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#5B6166]">Område</p>
            <p className="font-semibold text-[#15191C]">Stockholm med omnejd</p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
