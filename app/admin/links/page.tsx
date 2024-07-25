'use client';

import { useState } from 'react';
import axios from 'axios';
import Input from '@/components/ui/input';

type Link = {
	url: string;
	slug?: string;
	comments?: string;
};

export default function LinksPage() {
	const [blankLink, setBlankLink] = useState<Link>({ url: '' });
	const [links, setLinks] = useState<Link[]>([]);

	return (
		<>
			<h1>Links</h1>
			<Input
				type='string'
				value={blankLink.url}
				handleChange={(e) => setBlankLink({ url: e.target.value })}
			/>
			{links.map((link, index) => (
				<div key={index}>
					<Input
						type='string'
						value={link.url}
					/>
				</div>
			))}
		</>
	);
}
