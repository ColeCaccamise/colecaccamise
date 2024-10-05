"use server";

import { DeadlockInviteEmail } from "@/emails/deadlock-email";
import { sendEmail } from "@/lib/resend";

export async function sendDeadlockInvite(friendCode: string, email: string) {
  console.log("--- New Deadlock Invite Request ---");
  console.log("Friend Code:", friendCode);
  console.log("Email:", email);
  console.log("--- End Deadlock Invite Request ---");

  const template = DeadlockInviteEmail({
    friendCode,
    email,
  });

  const { data, error } = await sendEmail(
    "cole@colecaccamise.com",
    "New Deadlock Invite Request",
    template,
  );

  if (error) {
    console.error("Error sending email:", error.message);
    throw new Error("Resend error");
  }

  console.log("--- Email Sent ---");
  console.log("Data:", data);
  console.log("Error:", error);
  console.log("--- End Email Sent ---");

  return { data, error };
}
