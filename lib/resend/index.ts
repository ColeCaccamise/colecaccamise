import { Resend } from "resend";

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
