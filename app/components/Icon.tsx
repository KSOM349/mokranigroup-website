const paths: Record<string, React.ReactNode> = {
  floor: (<><path d="M12 3 3 8l9 5 9-5-9-5Z" /><path d="m3 13 9 5 9-5" /></>),
  bath: (<><path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3Z" /><path d="M6 12V6a2 2 0 0 1 4 0" /><path d="m7 19-1 2M17 19l1 2" /></>),
  tiles: (<><rect x="3" y="3" width="8" height="8" /><rect x="13" y="3" width="8" height="8" /><rect x="3" y="13" width="8" height="8" /><rect x="13" y="13" width="8" height="8" /></>),
  building: (<><rect x="5" y="3" width="14" height="18" rx="1" /><path d="M9 7h2M13 7h2M9 11h2M13 11h2M10 21v-4h4v4" /></>),
  hammer: (<><path d="m14 4 6 6-3 3-6-6 3-3Z" /><path d="m11 10-7 7 3 3 7-7" /></>),
  server: (<><rect x="3" y="4" width="18" height="6" rx="1.5" /><rect x="3" y="14" width="18" height="6" rx="1.5" /><path d="M7 7h.01M7 17h.01" /></>),
  spray: (<><path d="M12 3v6" /><path d="M8 9h8l1 12H7l1-12Z" /><path d="M16 5h3M16 3l2-1" /></>),
  cloud: (<path d="M7 18a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17 9a4.5 4.5 0 0 1 .5 9H7Z" />),
  network: (<><rect x="9" y="3" width="6" height="5" /><rect x="3" y="16" width="6" height="5" /><rect x="15" y="16" width="6" height="5" /><path d="M12 8v4M6 16v-4h12v4" /></>),
  check: (<path d="m5 12 5 5 9-10" />),
  arrow: (<path d="M5 12h14m-6-6 6 6-6 6" />),
};

export default function Icon({ name, className = "h-6 w-6" }: { name: keyof typeof paths | string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
