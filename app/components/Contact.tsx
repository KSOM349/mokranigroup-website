import QuoteForm from "./QuoteForm";
import CopyEmail from "./CopyEmail";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  return (
    <section id="contact" className="bg-white px-5 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <SectionLabel text="Kontakt" />
          <h2 className="mt-6 max-w-xl text-4xl font-extrabold text-[#15191C] md:text-6xl">Berätta vad som ska göras. Vi ger offert.</h2>
          <p className="mt-4 text-lg text-[#5B6166]">Fyll i formuläret eller ring, så återkommer vi så snart vi kan.</p>
          <div className="mt-8 space-y-4">
            <p className="text-[#15191C]">
              <span className="block text-sm font-semibold uppercase tracking-wide text-[#5B6166]">Telefon</span>
              <a href="tel:+46760949466" className="text-xl font-bold">076-094 94 66</a>
            </p>
            <p>
              <span className="block text-sm font-semibold uppercase tracking-wide text-[#5B6166]">E-post</span>
              <CopyEmail />
            </p>
            <p className="text-[#15191C]">
              <span className="block text-sm font-semibold uppercase tracking-wide text-[#5B6166]">Område</span>
              Stockholm med omnejd
            </p>
          </div>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}
