export default function SectionLabel({ text }: { n?: string; text: string; dark?: boolean }) {
  return (
    <p className="label flex items-center gap-3 text-[#5B6166]">
      <span aria-hidden className="h-1 w-10 bg-[#F2B705]" />
      {text}
    </p>
  );
}
