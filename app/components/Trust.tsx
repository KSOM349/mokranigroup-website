const items = [
  { title: "Kvalitet", text: "Noggrant underarbete och ett slutresultat vi står för." },
  { title: "Kundfokus", text: "Du når oss direkt och får svar utan omvägar." },
  { title: "Erfarenhet", text: "Erfarenhet av golv och plattsättning sedan 2017." },
];

export default function Trust() {
  return (
    <section className="bg-[#F3F1EA] px-5 py-14">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {items.map((i) => (
          <div key={i.title} className="border-l-4 border-[#F2B705] pl-5">
            <h3 className="text-xl font-bold text-[#15191C]">{i.title}</h3>
            <p className="mt-2 text-[#5B6166]">{i.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
