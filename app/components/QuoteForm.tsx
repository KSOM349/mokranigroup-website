"use client";
import { useState } from "react";

const ENDPOINT = "https://formspree.io/f/mdegkyrj";
const field = "mt-1 w-full rounded-md border border-[#15191C]/25 bg-white px-4 py-3 text-[#15191C] focus:border-[#15191C] focus:outline-none focus:ring-2 focus:ring-[#F2B705]";

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });
      if (res.ok) {
        setStatus("done");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="rounded-md border-l-4 border-[#F2B705] bg-[#F3F1EA] p-8">
        <h3 className="text-2xl font-bold text-[#15191C]">Tack för din förfrågan</h3>
        <p className="mt-2 text-[#5B6166]">Vi har tagit emot din förfrågan och återkommer till dig.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 md:grid-cols-2">
      <input type="hidden" name="_subject" value="Ny offertförfrågan från mokranigroup.com" />
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <label className="block font-semibold text-[#15191C]">
        Namn
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="block font-semibold text-[#15191C]">
        Telefon
        <input name="phone" type="tel" autoComplete="tel" className={field} />
      </label>
      <label className="block font-semibold text-[#15191C]">
        E-post
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="block font-semibold text-[#15191C]">
        Vad gäller det?
        <select name="service" className={field} defaultValue="Golv">
          <option>Golv</option>
          <option>Bygg och renovering</option>
          <option>IT och nätverk</option>
          <option>Städ</option>
          <option>Annat</option>
          <option>Vet ej</option>
        </select>
      </label>
      <label className="block font-semibold text-[#15191C] md:col-span-2">
        Beskriv ditt projekt
        <textarea name="message" required rows={5} className={field} placeholder="Vad ska göras, var, och ungefär hur stor yta?" />
      </label>
      <p className="text-sm text-[#5B6166] md:col-span-2">
        När du skickar förfrågan behandlar vi dina uppgifter för att kunna svara dig. Läs mer i vår{" "}
        <a href="/integritet" className="underline">integritetspolicy</a>.
      </p>
      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-md bg-[#F2B705] px-8 py-4 font-bold text-[#15191C] hover:brightness-95 disabled:opacity-60"
        >
          {status === "sending" ? "Skickar..." : "Skicka förfrågan"}
        </button>
        <p aria-live="polite" className="mt-3 text-[#15191C]">
          {status === "error" && "Något gick fel. Försök igen eller ring oss på 076 094 94 66."}
        </p>
      </div>
    </form>
  );
}
