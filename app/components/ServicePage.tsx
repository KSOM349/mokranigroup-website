import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Item = string | { title: string; text: string };
type Section = { heading: string; text?: string; items?: Item[]; steps?: boolean };
type Faq = { q: string; a: string };
type Props = {
  title: string;
  intro: string;
  sections: Section[];
  image?: string;
  related?: { href: string; label: string }[];
  faq?: Faq[];
};

export default function ServicePage({ title, intro, sections, image, related, faq }: Props) {
  const faqJson = faq && faq.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <main>
      <Navbar />
      <section className="bg-[#F3F1EA] px-5 pb-16 pt-16 md:pt-20">
        <div className="mx-auto max-w-6xl">
          <span aria-hidden className="block h-1.5 w-16 bg-[#F2B705]" />
          <h1 className="mt-6 text-4xl font-extrabold text-[#15191C] md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-[#3A4046] md:text-xl">{intro}</p>
          <a href="/kontakt" className="mt-8 inline-block rounded-md bg-[#F2B705] px-8 py-4 font-bold text-[#15191C] hover:brightness-95">
            Begär offert
          </a>
        </div>
      </section>
      <div className="bg-white px-5 py-16">
        <div className="mx-auto max-w-6xl space-y-20">
          {image && (
            <div className="relative h-64 overflow-hidden rounded-xl md:h-96">
              <Image src={image} alt={title} fill priority className="object-cover" />
            </div>
          )}
          {sections.map((s) => {
            const items = s.items ?? [];
            const objects = items.filter((i): i is { title: string; text: string } => typeof i !== "string");
            const strings = items.filter((i): i is string => typeof i === "string");
            return (
              <section key={s.heading}>
                <span aria-hidden className="block h-1 w-10 bg-[#F2B705]" />
                <h2 className="mt-4 max-w-3xl text-3xl font-extrabold text-[#15191C] md:text-5xl">{s.heading}</h2>
                {s.text && (
                  <div className="mt-5 max-w-3xl space-y-4 text-lg text-[#5B6166]">
                    {s.text.split("\n\n").map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                )}
                {strings.length > 0 && (
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {strings.map((i) => (
                      <li key={i} className="rounded-md border-l-4 border-[#F2B705] bg-[#F3F1EA] px-4 py-3 text-[#15191C]">{i}</li>
                    ))}
                  </ul>
                )}
                {objects.length > 0 && s.steps && (
                  <ol className="mt-8 grid gap-5 md:grid-cols-2">
                    {objects.map((o, i) => (
                      <li key={o.title} className="rounded-xl border border-[#15191C]/10 bg-[#F7F6F2] p-6">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F2B705] font-bold text-[#15191C]">{i + 1}</span>
                        <h3 className="mt-3 text-xl font-bold text-[#15191C]">{o.title}</h3>
                        <p className="mt-2 text-[#5B6166]">{o.text}</p>
                      </li>
                    ))}
                  </ol>
                )}
                {objects.length > 0 && !s.steps && (
                  <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {objects.map((o) => (
                      <div key={o.title} className="rounded-xl border border-[#15191C]/10 bg-[#F7F6F2] p-6">
                        <h3 className="text-xl font-bold text-[#15191C]">{o.title}</h3>
                        <p className="mt-2 text-[#5B6166]">{o.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            );
          })}
          {faq && faq.length > 0 && (
            <section>
              <span aria-hidden className="block h-1 w-10 bg-[#F2B705]" />
              <h2 className="mt-4 text-3xl font-extrabold text-[#15191C] md:text-5xl">Vanliga frågor</h2>
              <div className="mt-8 max-w-4xl divide-y divide-[#15191C]/10 border-y border-[#15191C]/10">
                {faq.map((f) => (
                  <details key={f.q} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-[#15191C]">
                      {f.q}
                      <span aria-hidden className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F2B705] text-2xl leading-none text-[#15191C] transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-3 text-[#5B6166]">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}
          {related && related.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-[#15191C] md:text-3xl">Läs mer</h2>
              <div className="mt-5 flex flex-wrap gap-4">
                {related.map((r) => (
                  <a key={r.href} href={r.href} className="rounded-md border-2 border-[#15191C] px-6 py-3 font-semibold text-[#15191C] hover:bg-[#15191C] hover:text-white">
                    {r.label}
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
      <section className="bg-[#F3F1EA] px-5 py-16 text-center">
        <h2 className="text-3xl font-extrabold text-[#15191C]">Redo att komma igång?</h2>
        <p className="mx-auto mt-3 max-w-xl text-[#5B6166]">Berätta vad du behöver så återkommer vi med frågor och en tydlig offert.</p>
        <a href="/kontakt" className="mt-6 inline-block rounded-md bg-[#15191C] px-7 py-4 font-bold text-white hover:opacity-90">
          Begär offert
        </a>
      </section>
      {faqJson && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }} />
      )}
      <Footer />
    </main>
  );
}
