import { type EmailOtpType } from '@supabase/supabase-js';
import { type NextRequest } from 'next/server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const token_hash = searchParams.get('token_hash');
	const type = searchParams.get('type') as EmailOtpType | null;
	const next = searchParams.get('next') ?? '/admin?message=login';

	if (token_hash && type) {
		const supabase = createClient();

		const { data, error } = await supabase.auth.verifyOtp({
			type,
			token_hash,
		});
		if (!error && data.user) {
			redirect(next);
		}
	}

	// redirect the user to an error page with some instructions
	redirect(`/admin/auth/confirm-email?error=InvalidOrExpired`);
}
