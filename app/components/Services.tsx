export default function Services() {
  const services = [
    {
      title: "🏗️ Bygg",
      items: [
        "Golvläggning",
        "Våtrum",
        "Renovering",
        "Underarbete",
        "Mattläggning",
        "Golvreparation",
      ],
    },
    {
      title: "🧹 Städning",
      items: [
        "Flyttstädning",
        "Hemstädning",
        "Kontorsstädning",
        "Byggstädning",
        "Fönsterputsning",
      ],
    },
    {
      title: "💻 IT",
      items: [
        "Nätverk",
        "Server",
        "Wi-Fi",
        "IT-support",
      ],
    },
    {
      title: "🚀 Digital Ventures",
      items: [
        "MedCore",
        "Coming Soon",
        "LiveArena",
        "Coming Soon",
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
          städning, IT och digital innovation.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

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
                  <li key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}