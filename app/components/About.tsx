export default function About() {
  return (
    <section id="about" className="bg-[#15191C] px-5 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-3xl text-3xl font-extrabold leading-tight md:text-5xl">
          Vi hjälper privatpersoner, bostadsrättsföreningar och företag i hela Stockholm.
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-white/75">
          Från golv och våtrum till snickeri och nätverk: vi tar hand om hela jobbet, så att du slipper samordna flera företag.
        </p>
        <a href="#contact" className="mt-8 inline-block rounded-md bg-[#F2B705] px-7 py-4 font-bold text-[#15191C] hover:brightness-95">
          Prata med oss
        </a>
      </div>
    </section>
  );
}
