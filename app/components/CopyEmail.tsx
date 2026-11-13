"use client";
import { useState } from "react";

export default function CopyEmail({ email = "info@mokranigroup.com" }: { email?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <span className="inline-flex flex-wrap items-center gap-3">
      <span className="font-semibold text-[#15191C] select-all">{email}</span>
      <button
        type="button"
        onClick={copy}
        className="rounded-md border border-[#15191C]/40 px-3 py-1 text-sm font-semibold text-[#15191C] hover:bg-[#15191C] hover:text-white"
      >
        {copied ? "Kopierad" : "Kopiera"}
      </button>
    </span>
  );
}
