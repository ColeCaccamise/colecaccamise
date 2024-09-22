"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Spinner from "./spinner";

export default function AnimatedButton({
  type,
  children,
  handleClick,
  success = false,
  loading = false,
}: {
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
  handleClick: () => void;
  success: boolean;
  loading: boolean;
}) {
  const [buttonState, setButtonState] = useState<
    "idle" | "loading" | "success"
  >("idle");

  const buttonCopy = {
    idle: "Join For Free",
    loading: <Spinner variant="light" />,
    success: "Check Your Email!",
  };

  useEffect(() => {
    if (loading) {
      setButtonState("loading");
    } else if (success) {
      setButtonState("success");
      setTimeout(() => {
        setButtonState("idle");
      }, 3500);
    }
  }, [success, loading]);

  return (
    <button
      type={type}
      disabled={loading}
      onClick={handleClick}
      className={`btn btn-primary relative h-[48px] w-full overflow-hidden md:w-[250px] ${
        loading && "btn-disabled"
      }`}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={buttonState}
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 25, opacity: 0 }}
          transition={{ duration: 0.3, bounce: 0, type: "spring" }}
        >
          {buttonCopy[buttonState]}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
