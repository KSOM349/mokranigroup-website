const links = [
  { href: "/#services", label: "Tjänster" },
  { href: "/#process", label: "Så arbetar vi" },
  { href: "/projekt", label: "Projekt" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-[#15191C] py-14 text-white">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="flex items-center gap-3 text-xl font-extrabold">
              <span className="bg-[#F2B705] px-2 py-1 text-base leading-none text-[#15191C]">MG</span>
              Mokrani Group
            </p>
            <p className="mt-3 text-white/70">Golv · Bygg · IT · Städ</p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 font-medium">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-white/80 hover:text-white">{l.label}</a>
            ))}
          </nav>
          <div className="text-white/80">
            <p><a href="tel:+46760949466" className="hover:text-white">076 094 94 66</a></p>
            <p><a href="mailto:info@mokranigroup.com" className="hover:text-white">info@mokranigroup.com</a></p>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-white/15 pt-6 text-sm text-white/60 md:flex-row md:justify-between">
          <p>© 2026 Mokrani Group · Stockholm med omnejd</p>
          <a href="/integritet" className="underline hover:text-white">Integritetspolicy</a>
        </div>
      </div>
    </footer>
  );
}
