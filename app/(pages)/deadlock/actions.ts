"use server";

import { isValidEmail } from "@/lib/validation";
import sendEmail from "@/app/api/send/send";
import { DeadlockInviteEmail } from "@/emails/deadlock-email";
export async function sendDeadlockInvite(friendCode: string, email: string) {
  if (email && !isValidEmail(email)) {
    throw new Error("invalid_email");
  }

  console.log("--- New Deadlock Invite Request ---");
  console.log("Friend Code:", friendCode);
  console.log("Email:", email);
  console.log("--- End Deadlock Invite Request ---");

  const template = DeadlockInviteEmail({
    friendCode,
    email,
  });

  // send myself an email
  const { data, error } = await sendEmail(
    "cole@colecaccamise.com",
    "New Deadlock Invite Request",
    template,
  );

  console.log("--- Email Sent ---");
  console.log("Data:", data);
  console.log("Error:", error);
  console.log("--- End Email Sent ---");

  return { data, error };
}
