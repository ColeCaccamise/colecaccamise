"use client";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import toast from "@/utils/toast";
import axios from "axios";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [submitLoading, setSubmitLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSubmitLoading(true);

    try {
      const response = await axios.post("/api/login", { email });

      if (response.status === 200) {
        toast("Email sent", "success");
      }
    } catch (err: any) {
      toast(err.response.data.error, "error");
    } finally {
      setSubmitLoading(false);
    }
  }

  return (
    <>
      <div className="flex flex-col gap-6">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="email@domain.com"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
            label="Email"
            htmlFor="email-login"
            autoFocus
          />

          <div className="flex flex-col gap-6">
            <Button type="submit" disabled={!email} loading={submitLoading}>
              Send me a login link
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
