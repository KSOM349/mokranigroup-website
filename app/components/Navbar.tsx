"use client";
import { useState } from "react";

const links = [
  { href: "/golv", label: "Golv" },
  { href: "/bygg", label: "Bygg" },
  { href: "/it", label: "IT" },
  { href: "/stadning", label: "Städ" },
  { href: "/projekt", label: "Projekt" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-[#15191C] text-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="/" className="text-xl font-extrabold tracking-tight">
          Mokrani <span className="text-[#F2B705]">Group</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-white/80 hover:text-white">
              {l.label}
            </a>
          ))}
          <a href="/kontakt" className="rounded-md bg-[#F2B705] px-5 py-2 text-sm font-bold text-[#15191C] hover:brightness-95">
            Begär offert
          </a>
        </nav>
        <button
          aria-label={open ? "Stäng meny" : "Öppna meny"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-0.5 w-6 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <nav className="border-t border-white/10 bg-[#15191C] px-5 pb-6 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="block border-b border-white/10 py-4 text-lg">
              {l.label}
            </a>
          ))}
          <a href="/kontakt" className="mt-5 block rounded-md bg-[#F2B705] py-3 text-center font-bold text-[#15191C]">
            Begär offert
          </a>
        </nav>
      )}
    </header>
  );
}
