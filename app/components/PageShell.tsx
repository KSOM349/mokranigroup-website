import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageShell({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) {
  return (
    <main>
      <Navbar />
      <section className="bg-[#15191C] px-5 pb-16 pt-20 text-white">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">{intro}</p>
        </div>
      </section>
      <div aria-hidden className="h-3" style={{ background: "repeating-linear-gradient(135deg,#F2B705 0 18px,#15191C 18px 36px)" }} />
      <div className="bg-white px-5 py-16">
        <div className="mx-auto max-w-6xl">{children}</div>
      </div>
      <Footer />
    </main>
  );
}
