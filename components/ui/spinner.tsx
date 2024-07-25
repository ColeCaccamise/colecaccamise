import { Loader2 } from 'lucide-react';

export default function Spinner({ variant = 'dark' }) {
	if (variant === 'dark') {
		return <Loader2 className='text-app-bg h-5 w-5 animate-spin' />;
	}

	if (variant === 'light') {
		return <Loader2 className='text-high-contrast-text h-5 w-5 animate-spin' />;
	}
}
