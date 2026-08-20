import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Förskola",
      image: "/images/forskola.jpg",
    },
    {
      title: "Golvprojekt",
      image: "/images/golvprojekt.jpg",
    },
    {
      title: "LSS Hem",
      image: "/images/lsshem.jpg",
    },
    {
      title: "Renovering",
      image: "/images/renovering.jpg",
    },
    {
      title: "Snickeri",
      image: "/images/snickeri0.jpg",
    },
    {
      title: "Våtrum",
      image: "/images/vatrum.jpg",
    },
    {
      title: "Golvprojekt 2",
      image: "/images/golvprojekt1.jpg",
    },
    {
      title: "Snickeri 2",
      image: "/images/snickeri1.jpg",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold mb-4">
            Våra Projekt
          </h2>

          <p className="text-gray-600 text-lg">
            Ett urval av våra tidigare arbeten.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
            >
              <div className="relative h-72">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}