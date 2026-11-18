const EMAIL = "info@mokranigroup.com";

export default function CopyEmail() {
  return (
    <a href={`mailto:${EMAIL}`} className="text-xl font-bold text-[#15191C] underline decoration-[#F2B705] decoration-2 underline-offset-4 hover:opacity-70">
      {EMAIL}
    </a>
  );
}
