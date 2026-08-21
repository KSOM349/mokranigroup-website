export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-white"
    >
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-6">
          Kontakta Oss
        </h2>

        <p className="text-gray-600 mb-8">
          Kontakta oss för offert eller frågor om bygg,
          golvläggning, IT eller städtjänster.
        </p>

        <div className="bg-gray-50 rounded-2xl shadow p-8">

          <p className="mb-4 text-lg">
            📧 info@mokranigroup.com
          </p>

          <p className="mb-4 text-lg">
            📞 076 094 94 66
          </p>

          <p className="mb-4 text-lg">
            📍 Stockholm, Sverige
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="mailto:info@mokranigroup.com"
              className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              Skicka E-post
            </a>

            <a
              href="tel:+46760949466"
              className="border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition"
            >
              Ring Oss
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}