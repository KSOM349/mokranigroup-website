export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden py-20 px-6">

      {/* MG Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span
          className="
            text-[280px]
            md:text-[420px]
            font-black
            text-gray-200
            opacity-80
            select-none
            leading-none
          "
        >
          MG
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">

        <p className="mb-6 text-sm md:text-base font-semibold tracking-[6px] text-gray-500">
          BYGG • GOLV • IT
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">
          Mokrani Group
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 mb-10">
          Professionella lösningar inom bygg, golvläggning och IT.
          Vi hjälper företag och privatpersoner med kvalitet,
          noggrannhet och pålitlig service i hela Sverige.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">

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

        {/* Services Preview */}

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-md">
            <div className="text-5xl mb-3">🏗️</div>
            <h3 className="font-bold text-xl mb-2">
              Bygg & Renovering
            </h3>
            <p className="text-gray-600">
              Renovering, snickeri och ombyggnation.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-md">
            <div className="text-5xl mb-3">🧱</div>
            <h3 className="font-bold text-xl mb-2">
              Golvläggning
            </h3>
            <p className="text-gray-600">
              Plastmatta, linoleum, parkett och våtrum.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-md">
            <div className="text-5xl mb-3">💻</div>
            <h3 className="font-bold text-xl mb-2">
              IT & Nätverk
            </h3>
            <p className="text-gray-600">
              IT-support, nätverk och Azure-lösningar.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}