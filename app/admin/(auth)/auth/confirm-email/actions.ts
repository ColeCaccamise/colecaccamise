'use server';

import { createClient } from '@/utils/supabase/server';

export const verifyLoginCode = async (email: string, token: string) => {
	const supabase = createClient();

	const { data, error } = await supabase.auth.verifyOtp({
		email,
		token,
		type: 'email',
	});

	if (!error && data.user) {
		return data.user;
	}

	throw new Error('Login code invalid or expired');
};
