import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { sendLoginEmail } from '@/app/api/send/send';
import { generateMagicLink } from '../actions';
import { isValidEmail } from '@/lib/validation';

export async function signIn(email: string) {
	'use server';

	const validEmail = isValidEmail(email);

	if (!validEmail) {
		throw new Error('Please use a valid email address.');
	}

	const { url, code } = await generateMagicLink(email);

	const emailSent = await sendLoginEmail(email, url, code);

	if (emailSent) {
		return redirect(
			`/admin/auth/confirm-email?email=${encodeURIComponent(email)}&from=login`
		);
	} else {
		throw new Error('We were unable to send you an email. Please try again.');
	}
}
