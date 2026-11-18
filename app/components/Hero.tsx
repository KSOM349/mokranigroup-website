import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <Image
        src="/images/arbete-linoleum.jpg"
        alt="Nylagt linoleumgolv i korridor"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[50%_15%]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/95 via-white/85 to-white/55 md:bg-gradient-to-r md:from-white md:via-white/90 md:to-white/0" />
      <div className="mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-5 py-24 md:py-32">
        <p className="label text-[#5B6166]">Stockholm med omnejd</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-extrabold text-[#15191C] md:text-8xl">
          Från bärande vägg till{" "}
          <span className="bg-[linear-gradient(transparent_62%,#F2B705_62%)]">serverrum.</span>
        </h1>
        <p className="mt-7 max-w-xl text-lg text-[#3A4046] md:text-xl">
          Bygg, golvläggning, IT-nätverk och städning. Fyra tjänster, en kontaktperson och en tydlig offert.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="/kontakt" className="inline-flex items-center rounded-md bg-[#F2B705] px-8 py-4 font-bold text-[#15191C] shadow-sm hover:brightness-95">
            Begär offert
          </a>
          <a href="tel:+46760949466" className="inline-flex items-center rounded-md border-2 border-[#15191C] bg-white/70 px-8 py-4 font-semibold text-[#15191C] hover:bg-[#15191C] hover:text-white">
            Ring 076-094 94 66
          </a>
        </div>
      </div>
    </section>
  );
}
