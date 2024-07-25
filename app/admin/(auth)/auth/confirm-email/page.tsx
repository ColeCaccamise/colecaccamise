'use client';

import Input from '@/components/ui/input';
import Button from '@/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import { verifyLoginCode } from '@/app/admin/(auth)/auth/confirm-email/actions';
import { useEffect, useState } from 'react';
import toast from '@/utils/toast';
import { isValidEmail } from '@/utils/validation';
import { useUser } from '@/context/user-provider';

export default function ConfirmEmailPage() {
	const searchParams = useSearchParams();
	const email = searchParams.get('email');
	const decodedEmail = email
		? decodeURIComponent(email.replace(/\+/g, '%2B'))
		: '';

	const { setUser } = useUser();

	const router = useRouter();

	const [code, setCode] = useState('');
	const [fromPage, setFromPage] = useState('signup');
	const [loading, setLoading] = useState(false);

	// TODO: reveal animation for enter code manually
	const [enterManually, setEnterManually] = useState(false);

	useEffect(() => {
		const error = searchParams.get('error');

		if (error === 'InvalidOrExpired') {
			toast('Token is invalid or expired.', 'error');
		}
	}, [searchParams]);

	useEffect(() => {
		const from = searchParams.get('from');

		if (from === 'login') {
			setFromPage('login');
		}
	}, [searchParams]);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!code) return;

		setLoading(true);

		await verifyLoginCode(decodedEmail, code)
			.then((data) => {
				if (setUser) setUser(data || 'null');
				toast("You've been successfully logged in.", 'success');
				router.push('/admin');
			})
			.catch((err) => {
				toast('Login code invalid or expired', 'error');
			});

		setLoading(false);
	};

	return (
		<>
			<div className='flex flex-col gap-6'>
				<div className='flex flex-col gap-4'>
					<div className='flex flex-col gap-2'>
						<h2>Check your email</h2>
						<p>
							We&apos;ve sent a temporary login link. Please check your inbox
							{decodedEmail ? (
								<>
									{' '}
									at{' '}
									<span className='font-medium text-high-contrast-text'>
										{decodedEmail}
									</span>
								</>
							) : (
								''
							)}
							.
						</p>
					</div>
				</div>
				<form
					className='flex flex-col gap-6'
					onSubmit={handleSubmit}
				>
					{enterManually && (
						<>
							<Input
								type='text'
								placeholder='Enter code'
								label='One-time code'
								htmlFor='login-code'
								value={code}
								handleChange={(e) => setCode(e.target.value)}
							/>
							<div className='flex flex-col gap-6'>
								<Button
									loading={loading}
									disabled={!code}
								>
									Continue with login code
								</Button>
							</div>
						</>
					)}

					<div className='w-full flex flex-col gap-4 justify-center items-center text-text2'>
						{!enterManually && isValidEmail(email || '') && (
							<Button
								variant='link'
								handleClick={() => setEnterManually(true)}
							>
								Enter code manually
							</Button>
						)}

						<Button
							variant='link'
							href='/admin/login'
						>
							Back to login
						</Button>
					</div>
				</form>
			</div>
		</>
	);
}
