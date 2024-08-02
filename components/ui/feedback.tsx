"use client";

import Input from "./input";
import Button from "./button";
import { useState } from "react";
import toast from "@/utils/toast";
import { isValidEmail } from "@/lib/validation";

export default function Feedback({
  stack = "Stack",
  feedbackText = "Something I missed? Let me know!",
  feedbackPreview = "Can you include a link to...",
  handleSendFeedback,
}: {
  stack?: string;
  feedbackText?: string;
  feedbackPreview?: string;
  handleSendFeedback: (
    email: string,
    feedback: string,
    stack: string,
  ) => Promise<void>;
}) {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitCount, setSubmitCount] = useState(0);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validEmail = isValidEmail(email);

    if (!validEmail) return toast("Please enter a valid email", "error");

    await handleSendFeedback(email, feedback, stack)
      .then(() => {
        toast("Thank you! I'll get back to you soon.", "success");

        setEmail("");
        setFeedback("");
        setSubmitCount(0);
      })
      .catch((error) => {
        if (submitCount > 1) {
          toast("Something seems to be wrong on my end. I apologize!", "error");
        } else {
          setSubmitCount((prev) => prev + 1);
          toast(error.message, "error");
        }
      });
  }

  return (
    <form className="py-8" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <span className="text-lg font-medium">{feedbackText}</span>
        <Input
          required
          type="email"
          placeholder="Your email"
          value={email}
          handleChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          required
          type="text"
          variant="textarea"
          placeholder={feedbackPreview}
          className="min-h-32"
          value={feedback}
          handleChange={(e) => {
            setFeedback(e.target.value);
          }}
        />

        <Button className="w-fit" type="submit" disabled={!email || !feedback}>
          Submit
        </Button>
      </div>
    </form>
  );
}
