'use client';

import Link from 'next/link';
import Input from '@/components/ui/input';
import Button from '@/components/ui/button';
import { useState } from 'react';
import toast from '@/utils/toast';

export default function LoginForm({
	signIn,
}: {
	signIn: (emailInput: string) => Promise<any>;
}) {
	const [email, setEmail] = useState('');
	const [submitLoading, setSubmitLoading] = useState(false);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		setSubmitLoading(true);

		try {
			await signIn(email);
		} catch (err: any) {
			toast(err.message, 'error');
		} finally {
			setSubmitLoading(false);
		}
	}

	return (
		<form
			className='flex flex-col gap-6'
			onSubmit={handleSubmit}
		>
			<Input
				type='email'
				placeholder='you@example.com'
				value={email}
				handleChange={(e) => setEmail(e.target.value)}
				label='Email'
				htmlFor='email-login'
				autoFocus
			/>

			<div className='flex flex-col gap-6'>
				<Button
					type='submit'
					disabled={!email}
					loading={submitLoading}
				>
					Continue with Email
				</Button>

				<div className='flex flex-col gap-2'>
					<p className='text-sm text-text2'>
						Not a member?{' '}
						<Link
							className='text-high-contrast-text font-medium'
							href='/signup'
						>
							Sign up now
						</Link>
						.
					</p>
				</div>
			</div>
		</form>
	);
}
