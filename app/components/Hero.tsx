import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[78vh] items-end overflow-hidden bg-[#15191C] text-white">
      <Image src="/images/renovering.jpg" alt="Renoverat rum" fill priority className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#15191C] via-[#15191C]/70 to-[#15191C]/20" />
      <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-32">
        <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
          Bygg, golv och IT för Stockholms hem och företag
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/80">
          Mokrani Group utför renovering, golvläggning, våtrum och IT-lösningar. Du får en tydlig offert och en kontaktperson från start till slut.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#contact" className="rounded-md bg-[#F2B705] px-7 py-4 font-bold text-[#15191C] hover:brightness-95">
            Begär offert
          </a>
          <a href="#services" className="rounded-md border border-white/60 px-7 py-4 font-semibold hover:bg-white hover:text-[#15191C]">
            Se våra tjänster
          </a>
        </div>
      </div>
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-3"
        style={{ background: "repeating-linear-gradient(135deg,#F2B705 0 18px,#15191C 18px 36px)" }}
      />
    </section>
  );
}
