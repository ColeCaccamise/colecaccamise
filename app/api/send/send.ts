import { ConfirmEmail } from '@/emails/confirm-email';
import { Resend } from 'resend';
import LoginEmail from '@/emails/login-email';

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (
	email: string,
	subject: string,
	template: JSX.Element
) => {
	const { data, error } = await resend.emails.send({
		from: `Cole Caccamise <cole@colecaccamise.com>`,
		to: [email],
		subject: subject,
		react: template,
	});

	return { data, error };
};

// TRANSACTIONAL
export async function sendConfirmationEmail(
	email: string,
	url: string,
	code: string
) {
	const template = ConfirmEmail({
		email: email,
		url: url,
		validationCode: code,
	});

	const { data: emailData, error: emailError } = await sendEmail(
		email,
		'Confirm your email',
		template
	);

	return emailError ? false : true;
}

export async function sendLoginEmail(email: string, url: string, code: string) {
	const template = LoginEmail({
		email: email,
		url: url,
		validationCode: code,
	});

	const { data: emailData, error: emailError } = await sendEmail(
		email,
		`Login to your admin dashboard`,
		template
	);

	return emailError ? false : true;
}

export default sendEmail;
