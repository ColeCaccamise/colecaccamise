"use client";

import Input from "./input";
import Button from "./button";
import { useState } from "react";
import toast from "@/utils/toast";

export default function Feedback({
  stack = "Stack",
  feedbackText = "Have any suggestions? Let me know!",
  feedbackPreview = "You should try...",
  handleSendFeedback,
}: {
  stack?: string;
  feedbackText?: string;
  feedbackPreview?: string;
  handleSendFeedback: (feedback: string, stack: string) => Promise<void>;
}) {
  const [feedback, setFeedback] = useState("");
  const [submitCount, setSubmitCount] = useState(0);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await handleSendFeedback(feedback, stack)
      .then(() => {
        toast("Thanks for sharing!", "success");

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
          type="text"
          variant="textarea"
          placeholder={feedbackPreview}
          className="min-h-32"
          value={feedback}
          handleChange={(e) => {
            setFeedback(e.target.value);
          }}
        />

        <Button className="w-fit" type="submit" disabled={!feedback}>
          Submit
        </Button>
      </div>
    </form>
  );
}
