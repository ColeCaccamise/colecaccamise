"use client";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";
import toast from "@/utils/toast";
import { sendDeadlockInvite } from "./actions";
import { isValidEmail } from "@/lib/validation";

export default function DeadlockPage() {
  const [friendCode, setFriendCode] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsLoading(true);

    if (!friendCode) {
      toast("Please enter a friend code", "error");
      setIsLoading(false);
      return;
    }

    if (email && !isValidEmail(email)) {
      toast("Please enter a valid email", "error");
      setIsLoading(false);
      return;
    }

    try {
      await sendDeadlockInvite(friendCode, email);
      setFriendCode("");
      setEmail("");
      toast("Sweet! I'll send you an invite soon.", "success");
    } catch (error: any) {
      toast(
        "Something went wrong. Please try again or DM me on Twitter @colecaccamise instead",
        "error",
      );
    }
    setIsLoading(false);
  }

  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-medium">Deadlock Invites</h1>
        <p>
          <Link
            href="https://store.steampowered.com/app/1422450/Deadlock/"
            target="_blank"
          >
            Deadlock
          </Link>{" "}
          is a multiplayer MOBA game being developed by Valve. It is currently
          in early development with invite-only access to their playtest.
        </p>
        <p>
          I got an invite and can send one to anyone on my friends list. Give me
          your friend code below and I&apos;ll send you a request.
        </p>
        <p>
          It will be from{" "}
          <Link
            href="https://steamcommunity.com/profiles/76561198834582604/"
            target="_blank"
          >
            Hyperapta
          </Link>{" "}
          on Steam. After you accept it, I&apos;ll invite you to Deadlock ASAP.
        </p>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="e.g. 874316876 or https://s.team/p/fgct-bggr/gdngrpjf"
            label="Friend code"
            required
            value={friendCode}
            handleChange={(e) => setFriendCode(e.target.value)}
          />
          <span className="text-sm text-low-contrast-text">
            You can find this on your Add Friend page in Steam.
          </span>
          <Input
            type="email"
            placeholder="Your email"
            label="Email"
            handleChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Button
            disabled={!friendCode || isLoading}
            loading={isLoading}
            type="submit"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
          <span className="text-sm text-low-contrast-text">
            I&apos;ll notify you via email or a Steam message when I send the
            invite so you know to look out (it can take hours or days).
          </span>
        </form>
      </div>
    </div>
  );
}
