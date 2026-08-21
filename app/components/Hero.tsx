export default function Hero() {
  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden">
      
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[220px] md:text-[320px] font-black text-gray-100 select-none">
          MG
        </span>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">

        <span className="inline-block mb-4 text-sm font-semibold tracking-[4px] text-gray-600">
          BYGG • GOLV • IT
        </span>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Mokrani Group
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Professionella lösningar inom bygg, golvläggning och IT.
          Vi hjälper företag och privatpersoner med kvalitet,
          noggrannhet och pålitlig service i hela Sverige.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">

          <a
            href="#services"
            className="bg-black text-white px-8 py-4 rounded-xl hover:opacity-90 transition"
          >
            Våra tjänster
          </a>

          <a
            href="#contact"
            className="border border-black px-8 py-4 rounded-xl hover:bg-black hover:text-white transition"
          >
            Begär offert
          </a>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">

          <div className="bg-gray-50 rounded-xl p-5 shadow-sm">
            <div className="text-3xl mb-2">🏗️</div>
            <h3 className="font-semibold">
              Bygg & Renovering
            </h3>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 shadow-sm">
            <div className="text-3xl mb-2">🧱</div>
            <h3 className="font-semibold">
              Golvläggning
            </h3>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 shadow-sm">
            <div className="text-3xl mb-2">💻</div>
            <h3 className="font-semibold">
              IT & Nätverk
            </h3>
          </div>

        </div>

      </div>
    </section>
  );
}