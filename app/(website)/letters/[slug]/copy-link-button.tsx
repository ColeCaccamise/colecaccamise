"use client";

import { CopyIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function CopyLinkButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative">
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 rounded-md border border-ui-component-default px-3 py-1.5 text-sm hover:bg-sidebar-bg"
      >
        <CopyIcon />
        {copied ? "Copied!" : "Copy URL"}
      </button>
    </div>
  );
}
