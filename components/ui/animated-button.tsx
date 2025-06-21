"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Spinner from "./spinner";

export default function AnimatedButton({
  type,
  className,
  children,
  handleClick,
  loading = false,
  disabled = false,
}: {
  type: "button" | "submit" | "reset";
  className?: string;
  children: React.ReactNode;
  handleClick?: () => void;
  loading: boolean;
  disabled?: boolean;
  maxWidth?: string;
}) {
  const [buttonState, setButtonState] = useState<"idle" | "loading">("idle");

  const buttonCopy = {
    idle: children,
    loading: <Spinner variant="light" />,
  };

  useEffect(() => {
    if (loading) {
      setButtonState("loading");
    } else {
      setButtonState("idle");
    }
  }, [loading]);

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={handleClick || undefined}
      className={`btn btn-primary ${
        loading || disabled ? "btn-disabled" : ""
      } ${className}`}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={buttonState}
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 25, opacity: 0 }}
          transition={{ duration: 0.3, bounce: 0, type: "spring" }}
        >
          {buttonCopy[buttonState]}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
