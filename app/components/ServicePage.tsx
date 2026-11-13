import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Section = { heading: string; text: string; items: string[] };
type Props = { title: string; intro: string; sections: Section[]; image?: string; related?: { href: string; label: string }[] };

export default function ServicePage({ title, intro, sections, image, related }: Props) {
  return (
    <main>
      <Navbar />
      <section className="bg-[#15191C] px-5 pb-16 pt-20 text-white">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">{intro}</p>
          <a href="/#contact" className="mt-8 inline-block rounded-md bg-[#F2B705] px-7 py-4 font-bold text-[#15191C] hover:brightness-95">
            Begär offert
          </a>
        </div>
      </section>
      <div aria-hidden className="h-3" style={{ background: "repeating-linear-gradient(135deg,#F2B705 0 18px,#15191C 18px 36px)" }} />
      <div className="bg-white px-5 py-16">
        <div className="mx-auto max-w-6xl space-y-14">
          {image && (
            <div className="relative h-64 overflow-hidden rounded-md md:h-96">
              <Image src={image} alt={title} fill priority className="object-cover" />
            </div>
          )}
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-2xl font-bold text-[#15191C] md:text-3xl">{s.heading}</h2>
              {s.text && <p className="mt-3 max-w-2xl whitespace-pre-line text-[#5A646B]">{s.text}</p>}
              {s.items.length > 0 && (
                <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {s.items.map((i) => (
                    <li key={i} className="border-l-4 border-[#F2B705] bg-[#ECEDEA] px-4 py-3 text-[#15191C]">{i}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
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
      <section className="bg-[#ECEDEA] px-5 py-14 text-center">
        <h2 className="text-2xl font-bold text-[#15191C]">Redo att komma igång?</h2>
        <a href="/#contact" className="mt-6 inline-block rounded-md bg-[#15191C] px-7 py-4 font-bold text-white hover:opacity-90">
          Kontakta oss
        </a>
      </section>
      <Footer />
    </main>
  );
}
