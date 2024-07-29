'use server';

import { createClient } from '@/utils/supabase/server';

export async function generateMagicLink(email: string) {
	const supabase = createClient();

	const { data, error } = await supabase.auth.admin.generateLink({
		type: 'magiclink',
		email: email,
	});

	if (error) {
		throw new Error('Could not generate magic link.');
	}

	const token = data?.properties?.hashed_token;
	const code = data?.properties?.email_otp;
	const id = data?.user?.id;

	const url = `${process.env.APP_URL}/auth/confirm?token_hash=${token}&type=email`;

	return { url, code, id };
}
