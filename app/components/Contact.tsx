import QuoteForm from "./QuoteForm";
import CopyEmail from "./CopyEmail";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#ECEDEA] px-5 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-extrabold text-[#15191C] md:text-5xl">Begär offert</h2>
        <p className="mt-4 max-w-2xl text-lg text-[#5A646B]">
          Berätta vad du behöver hjälp med, så återkommer vi med en offert.
        </p>
        <div className="mt-10 rounded-md bg-white p-6 md:p-10">
          <QuoteForm />
        </div>
        <p className="mt-8 text-[#15191C]">
          Du kan också ringa{" "}
          <a href="tel:+46760949466" className="font-semibold underline decoration-[#F2B705] decoration-4 underline-offset-4">076 094 94 66</a>{" "}
          eller mejla{" "}
          <CopyEmail />.
        </p>
      </div>
    </section>
  );
}
