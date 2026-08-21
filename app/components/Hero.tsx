export default function Hero() {
  return (
    <section className="relative bg-white py-16 px-6 overflow-hidden">

      {/* MG Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[220px] md:text-[320px] font-black text-gray-200 select-none">
          MG
        </span>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">

        <span className="inline-block mb-4 text-sm font-semibold tracking-[5px] text-gray-500">
          BYGG • GOLV • IT
        </span>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black">
          Mokrani Group
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          Professionella lösningar inom bygg, golvläggning och IT.
          Vi hjälper företag och privatpersoner med kvalitet,
          noggrannhet och pålitlig service i hela Sverige.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="#services"
            className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Våra tjänster
          </a>

          <a
            href="#contact"
            className="border-2 border-black px-8 py-4 rounded-xl font-semibold hover:bg-black hover:text-white transition"
          >
            Begär offert
          </a>

        </div>

      </div>

    </section>
  );
}