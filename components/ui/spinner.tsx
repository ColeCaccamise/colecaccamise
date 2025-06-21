"use client";

import { SpinnerGapIcon } from "@phosphor-icons/react";

export default function Spinner({ variant = "dark" }) {
  if (variant === "dark") {
    return <SpinnerGapIcon className="h-5 w-5 animate-spin text-app-bg" />;
  }

  if (variant === "light") {
    return (
      <SpinnerGapIcon className="h-5 w-5 animate-spin text-high-contrast-text" />
    );
  }
}
