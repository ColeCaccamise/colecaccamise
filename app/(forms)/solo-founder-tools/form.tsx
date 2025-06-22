"use client";

import AnimatedButton from "@/components/ui/animated-button";
import Input from "@/components/ui/input";
import toast from "@/utils/toast";
import { createOrder } from "../actions";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function SoloFounderToolsForm() {
  const [email, setEmail] = useState("");
  const [formSubmitting, setFormSubmitting] = useState(false);
  const productId = "850146be-d63a-438d-b64f-a945cf1c21f0";
  const searchParams = useSearchParams();
  const clickId = searchParams.get("kiwi_id");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormSubmitting(true);

    const { success, error } = await createOrder(email, productId, clickId);

    if (success) {
      toast("I just sent it to you - check your email!", "success");
      setEmail("");
    } else {
      toast(error || "Something went wrong", "error");
    }

    setFormSubmitting(false);
  };

  return (
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
  );
}
