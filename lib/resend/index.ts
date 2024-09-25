import { Resend } from "resend";
import LoginEmail from "@/emails/login-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(
  email: string,
  subject: string,
  template: JSX.Element,
) {
  const { data, error } = await resend.emails.send({
    from: `Cole Caccamise <cole@mail.colecaccamise.com>`,
    to: [email],
    subject: subject,
    react: template,
  });

  return { data, error };
}

export async function sendLoginEmail(email: string, url: string) {
  const template = LoginEmail({
    email: email,
    url: url,
  });

  const { data: emailData, error: emailError } = await sendEmail(
    email,
    `Login to your admin dashboard`,
    template,
  );

  return emailError ? false : true;
}
