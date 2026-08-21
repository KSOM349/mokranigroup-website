export default function Services() {
  const services = [
    {
      title: "🏗️ Bygg & Renovering",
      items: [
        "Renovering",
        "Snickeri",
        "Måleri",
        "Ombyggnation",
        "Underarbete",
      ],
    },
    {
      title: "🧱 Golvläggning",
      items: [
        "Plastmatta",
        "Linoleum",
        "Parkett",
        "Våtrumsgolv",
        "Golvreparation",
        "Mattläggning",
      ],
    },
    {
      title: "💻 IT & Nätverk",
      items: [
        "IT Support",
        "Nätverksinstallation",
        "WiFi & Router Setup",
        "Server Administration",
        "Microsoft 365",
        "Azure Cloud Solutions",
        "Cyber Security",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-4">
          Våra Tjänster
        </h2>

        <p className="text-gray-600 mb-12">
          Vi erbjuder professionella tjänster inom bygg,
          golvläggning och IT med fokus på kvalitet,
          noggrannhet och kundnöjdhet.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="border rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 text-left"
            >
              <h3 className="text-2xl font-bold mb-6">
                {service.title}
              </h3>

              <ul className="space-y-3 text-gray-700">
                {service.items.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold mb-4">
            ✨ Städtjänster
          </h3>

          <p className="text-gray-600 mb-4">
            Vi erbjuder även professionella städtjänster för
            privatpersoner och företag.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-gray-700">
            <span>✓ Flyttstädning</span>
            <span>✓ Hemstädning</span>
            <span>✓ Kontorsstädning</span>
            <span>✓ Byggstädning</span>
            <span>✓ Fönsterputsning</span>
          </div>
        </div>

      </div>
    </section>
  );
}