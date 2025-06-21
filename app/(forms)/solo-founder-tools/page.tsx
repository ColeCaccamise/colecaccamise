"use client";

import AnimatedButton from "@/components/ui/animated-button";
import Input from "@/components/ui/input";
import toast from "@/utils/toast";
import { createOrder } from "../actions";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function SoloFounderTools() {
  const [email, setEmail] = useState("");
  const [formSubmitting, setFormSubmitting] = useState(false);
  const productId = "3755f71e-3389-4cf8-937f-a45f7fa31f6b";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormSubmitting(true);

    const { success, error } = await createOrder(email, productId);

    if (success) {
      toast("I just sent it to you - check your email!", "success");
      setEmail("");
    } else {
      toast(error || "Something went wrong", "error");
    }

    setFormSubmitting(false);
  };

  return (
    <div className="mx-auto flex h-full max-w-lg flex-col items-center justify-center gap-12 px-4 md:px-0">
      <div className="flex flex-col gap-6">
        <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-low-contrast-text">
            Solo Founder Tools
          </span>
          <h1 className="text-2xl font-bold md:text-4xl">
            30+ tools & resources to build (and finally launch) your SaaS
          </h1>
          <p className="text-base text-low-contrast-text">
            Join my free newsletter and receive the list instantly...
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-4">
          <form
            className="flex w-full flex-col gap-4 rounded-md border-0 border-borders-non-interactive bg-transparent p-0 md:flex-row md:gap-0 md:border md:bg-ui-component-default md:p-2 md:pl-4"
            onSubmit={handleSubmit}
          >
            <Input
              variant="unstyled"
              className="flex w-full items-center justify-between overflow-hidden rounded-lg border border-subtle-borders-interactive bg-transparent px-4 py-3 hover:border-stronger-borders-interactive-focus-rings md:border-none md:bg-app-bg md:px-0 dark:bg-ui-component-default"
              type="email"
              value={email}
              handleChange={(e) => setEmail(e.target.value)}
              placeholder="peter.parker@gmail.com"
              required
              autoFocus
            />

            <AnimatedButton
              type="submit"
              loading={formSubmitting}
              disabled={!email}
              className="md:h-[48px] md:w-[147px]"
            >
              Get the list
            </AnimatedButton>
          </form>
        </div>
      </div>

      <div className="flex items-center justify-center gap-1">
        <span className="text-sm text-low-contrast-text">Powered by</span>
        <Link href="https://creatorkiwi.com?ref=solo-founder-tools">
          <Image
            src="/images/logos/creatorkiwi.svg"
            alt="Creator Kiwi"
            width={110}
            height={110}
          />
        </Link>
      </div>
    </div>
  );
}
