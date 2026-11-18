"use client";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#15191C]/10 bg-white/95 text-[#15191C] backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="/" className="flex items-center gap-3 text-lg font-extrabold tracking-tight">
          <span className="bg-[#F2B705] px-2 py-1 text-base font-extrabold leading-none text-[#15191C]">MG</span>
          Mokrani Group
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {links.slice(0, -1).map((l) => (
            <a key={l.href} href={l.href} className="text-[#3A4046] hover:text-[#15191C]">
              {l.label}
            </a>
          ))}
          <a href="tel:+46760949466" className="hidden whitespace-nowrap font-semibold xl:block">
            076-094 94 66
          </a>
          <a href="/kontakt" className="rounded-md bg-[#F2B705] px-5 py-2.5 font-bold text-[#15191C] hover:brightness-95">
            Begär offert
          </a>
        </nav>
        <button
          type="button"
          aria-label={open ? "Stäng meny" : "Öppna meny"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-md border border-[#15191C]/20 lg:hidden"
        >
          <span className="text-2xl leading-none">{open ? "×" : "≡"}</span>
        </button>
      </div>
      {open && (
        <div className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-white px-5 py-8 lg:hidden">
          <nav className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-[#15191C]/10 py-4 text-2xl font-bold"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="/kontakt"
            onClick={() => setOpen(false)}
            className="mt-8 block rounded-md bg-[#F2B705] px-6 py-4 text-center text-lg font-bold text-[#15191C]"
          >
            Begär offert
          </a>
          <p className="mt-6 text-center text-[#3A4046]">
            <a href="tel:+46760949466">076-094 94 66</a>
          </p>
        </div>
      )}
    </header>
  );
}
