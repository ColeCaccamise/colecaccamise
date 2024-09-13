import { Loader2 } from "lucide-react";

export default function Spinner({ variant = "dark" }) {
  if (variant === "dark") {
    return <Loader2 className="h-5 w-5 animate-spin text-app-bg" />;
  }

  if (variant === "light") {
    return <Loader2 className="h-5 w-5 animate-spin text-high-contrast-text" />;
  }
}
