"use client";

import Input from "./input";
import Button from "./button";
import { useState } from "react";
import toast from "@/utils/toast";
import AnimatedButton from "./animated-button";

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
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  async function handleSubmit() {
    setLoading(true);

    await handleSendFeedback(feedback, stack)
      .then(() => {
        toast("Thanks for sharing!", "success");

        setFeedback("");
        setSubmitCount(0);
        setSuccess(true);
      })
      .catch((error) => {
        if (submitCount > 1) {
          toast("Something seems to be wrong on my end. I apologize!", "error");
        } else {
          setSubmitCount((prev) => prev + 1);
          toast(error.message, "error");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <form className="py-8">
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

        <AnimatedButton
          className="md:h-[48px] md:w-[101px]"
          type="submit"
          disabled={!feedback}
          loading={loading}
          handleClick={handleSubmit}
        >
          Submit
        </AnimatedButton>
      </div>
    </form>
  );
}
