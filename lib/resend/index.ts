import { Resend } from "resend";

let resend: Resend | null = null;

function getResend() {
  if (!resend) {
    const key = process.env.RESEND_API_KEY;
    if (!key) {
      throw new Error("RESEND_API_KEY is not set");
    }
    resend = new Resend(key);
  }
  return resend;
}

export async function sendEmail(
  email: string,
  subject: string,
  template: JSX.Element,
) {
  const { data, error } = await getResend().emails.send({
    from: `Cole Caccamise <cole@mail.colecaccamise.com>`,
    to: [email],
    subject: subject,
    react: template,
  });

  return { data, error };
}
