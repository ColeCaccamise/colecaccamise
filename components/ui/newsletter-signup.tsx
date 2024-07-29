'use client';

import Input from './input';
import Button from './button';
import { useState } from 'react';
import toast from '@/utils/toast';
import { isValidEmail } from '@/lib/validation';
import { subscribeToForm } from '@/lib/convertkit';

export default function NewsletterSignup({
	title,
	formId = '5584232',
	description,
	cta = 'Join For Free',
	lemonSqueezySignup = false,
}: {
	title?: string;
	formId?: string;
	description?: string;
	cta?: string;
	lemonSqueezySignup?: boolean;
}) {
	const [email, setEmail] = useState('');
	const [formSubmitting, setFormSubmitting] = useState(false);

	// TODO: add customers to lemon squeezy discount form, then use resend to send them a programatically gnerated discount code -- implement convertkit unsubscribes
	// You are receiving this message because you purchased/downloaded a product from Cole Caccamise.

	const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!email) {
			return toast('Email is required.', 'error');
		}

		if (!isValidEmail(email)) {
			return toast('A valid email address is required.', 'error');
		}

		if (!formId) return toast('Newsletter not found.', 'error');

		setFormSubmitting(true);

		subscribeToForm(formId, email)
			.then((status) => {
				if (status == 'inactive') {
					toast('Check your email - I just need you to verify!', 'success');
				} else {
					toast("You're subscribed!", 'success');
				}

				setFormSubmitting(false);
			})
			.catch((err) => {
				toast(err.message, 'error');
				setFormSubmitting(false);
			});
	};

	return (
		<div className='flex flex-col gap-4'>
			{title && (
				<div className='flex flex-col gap-2'>
					<span className='font-medium'>{title}</span>
					<p>{description}</p>
				</div>
			)}

			<form
				onSubmit={handleSignup}
				className='flex bg-ui-component-default border border-borders-non-interactive rounded-md p-2 pl-4'
			>
				<Input
					variant='unstyled'
					className='bg-transparent w-full'
					type='email'
					value={email}
					handleChange={(e) => setEmail(e.target.value)}
					placeholder='Your email'
					required
				/>
				<Button
					type='submit'
					className='font-medium bg-primary'
					loading={formSubmitting}
				>
					{cta}
				</Button>
			</form>
		</div>
	);
}
