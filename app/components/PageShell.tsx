import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = { title: string; intro: string; children: React.ReactNode };

export default function PageShell({ title, intro, children }: Props) {
  return (
    <main>
      <Navbar />
      <section className="bg-[#F3F1EA] px-5 pb-14 pt-16">
        <div className="mx-auto max-w-6xl">
          <span aria-hidden className="block h-1.5 w-16 bg-[#F2B705]" />
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#15191C] md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-[#3A4046]">{intro}</p>
        </div>
      </section>
      <div className="bg-white px-5 py-16">
        <div className="mx-auto max-w-6xl">{children}</div>
      </div>
      <Footer />
    </main>
  );
}
