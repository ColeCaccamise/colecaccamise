'use client';

import Input from './input';

export default function NewsletterSignup() {
	const [email, setEmail] = useState('');

	return (
		<>
			<div>
				<Input
					type='email'
					placeholder='Your email'
					value={email}
				/>
			</div>
		</>
	);
}
