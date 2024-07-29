'use server';

import LoginForm from '@/components/ui/login-form';
import { signIn } from '@/app/admin/(auth)/login/actions';

export default async function LoginPage() {
	return (
		<>
			<div className='flex flex-col gap-6'>
				<div className='flex flex-col gap-4'>
					<div className='flex flex-col gap-2'>
						<h2>Log in</h2>
						<p>Hi Cole, welcome back.</p>
					</div>
					<LoginForm signIn={signIn} />
				</div>
			</div>
		</>
	);
}
