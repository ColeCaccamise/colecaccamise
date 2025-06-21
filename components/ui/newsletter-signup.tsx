"use client";

import Input from "./input";
import Button from "./button";
import { useState } from "react";
import toast from "@/utils/toast";
import { isValidEmail } from "@/lib/validation";
import { subscribeToForm } from "@/lib/convertkit";
import { usePlausible } from "next-plausible";
import AnimatedButton from "./animated-button";

export default function NewsletterSignup({
  title,
  formId = "5584232",
  description,
  cta = "Join For Free",
  location = "Home",
  placeholder = "peter.parker@gmail.com",
  lemonSqueezySignup = false,
}: {
  title?: string;
  formId?: string;
  description?: string | React.ReactNode;
  cta?: string;
  location?: string;
  placeholder?: string;
  lemonSqueezySignup?: boolean;
}) {
  const [email, setEmail] = useState("");
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const plausible = usePlausible();

  // TODO: add customers to lemon squeezy discount form, then use resend to send them a programatically gnerated discount code -- implement convertkit unsubscribes
  // You are receiving this message because you purchased/downloaded a product from Cole Caccamise.

  const handleSignup = async () => {
    if (!email) {
      return toast("Email is required.", "error");
    }

    if (!isValidEmail(email)) {
      setEmail("");
      return toast("A valid email address is required.", "error");
    }

    if (!formId) return toast("Newsletter not found.", "error");

    setFormSubmitting(true);

    subscribeToForm(formId, email)
      .then((status) => {
        if (status == "inactive") {
          toast("Check your email - I just need you to verify!", "success");
          plausible("Newsletter Signup", { props: { location: location } });
        } else {
          toast("You're subscribed!", "success");
        }

        setFormSubmitting(false);
        setSuccess(true);
        setEmail("");
      })
      .catch((err) => {
        toast(err.message, "error");

        setFormSubmitting(false);
        setSuccess(false);
        setEmail("");
      });
  };

  return (
    <div className="flex flex-col gap-4">
      {title && (
        <div className="flex flex-col gap-2">
          {" "}
          <span className="font-medium">{title}</span>
          <p>{description}</p>{" "}
        </div>
      )}

      <form className="flex flex-col gap-4 rounded-md border-0 border-borders-non-interactive bg-transparent p-0 md:flex-row md:gap-0 md:border md:bg-ui-component-default md:p-2 md:pl-4">
        <Input
          variant="unstyled"
          className="flex w-full items-center justify-between overflow-hidden rounded-lg border border-subtle-borders-interactive bg-transparent px-4 py-3 hover:border-stronger-borders-interactive-focus-rings md:border-none md:bg-app-bg md:px-0 dark:bg-ui-component-default"
          type="email"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          required
        />

        <AnimatedButton
          type="submit"
          handleClick={handleSignup}
          loading={formSubmitting}
          disabled={!email}
          className="md:h-[48px] md:w-[147px]"
        >
          {cta}
        </AnimatedButton>
      </form>
    </div>
  );
}
