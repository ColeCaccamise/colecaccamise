import Link from 'next/link';
import Image from 'next/image';
import { getAllCollectionMeta } from '@/lib/mdx';
import ListContainer from '@/components/ui/list/list-container';
import Listicle from '@/components/ui/list/listicle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faInstagram,
	faLinkedin,
	faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import NewsletterSignup from '@/components/ui/newsletter-signup';

export default async function Home() {
	const drops = await getAllCollectionMeta('drops');
	const stack = await getAllCollectionMeta('stack');
	const letters = await getAllCollectionMeta('letters');

	const ventures = [
		{
			name: 'YouTube | Cole Caccamise',
			description: 'Aesthetic tech videos.',
			url: 'https://youtube.com/@colecaccamise',
		},
		{
			name: 'Founder Supply (Re-brand launching soon)',
			description:
				'Premium Framer templates for startups & founders. Currently known as Websignr.',
			url: 'https://caccamise.link/supply',
		},
		{
			name: 'Upcoming SaaS Product',
			description:
				"I'm currently validating some ideas I have and plan to document my first launch in public.",
		},
		// {
		// 	name: 'SaaSKit UI (launching soon)',
		// 	description: 'UI library for modern SaaS applications.',
		// },
	];

	const socials = [
		{
			url: 'https://caccamise.link/x',
			icon: faXTwitter,
		},
		{
			url: 'https://caccamise.link/ig',
			icon: faInstagram,
		},
		{
			url: 'https://caccamise.link/in',
			icon: faLinkedin,
		},
	];

	return (
		<>
			<main className='flex flex-col gap-16 md:gap-24'>
				<div className='flex flex-col gap-2'>
					<span className='font-medium'>About</span>
					<p>
						I work as a software engineer intern and create tech videos about
						products and tools I love.
					</p>
					<p>
						I&apos;m passionate about design and building great SaaS products.
					</p>
				</div>

				<NewsletterSignup
					formId='5584232'
					title='The Letter'
					description='Documenting the process of building my one person businesses. Sharing lessons I learn and interesting resources I find.'
				/>

				<ListContainer
					title='Featured Drops'
					description='Premium digital products I’ve created recently'
				>
					<Listicle
						collection={drops}
						kind='drops'
					/>
				</ListContainer>

				<ListContainer
					title='Featured Letters'
					description='Recent posts from my newsletter'
				>
					<Listicle
						collection={letters}
						kind='letters'
					/>
				</ListContainer>

				<ListContainer
					title='Stack'
					description='Tools and products I use daily'
				>
					<Listicle
						collection={stack}
						kind='stack'
					/>
				</ListContainer>

				<ListContainer
					title='Ventures'
					description="Projects I'm working on"
				>
					<Listicle
						collection={ventures}
						kind='ventures'
					/>
				</ListContainer>

				{/* <NewsletterSignup
					title='The UI Letter (coming soon)'
					description='My upcoming monthly product design newsletter. Teaching founders how to design websites that convert.'
					formId='6876699'
				/> */}

				<div
					id='connect'
					className='flex flex-col gap-4'
				>
					<div>
						<span>Connect</span>
						<p>
							Reach me directly at{' '}
							<Link
								className='hover:opacity-90'
								href='mailto:cole@caccamedia.com'
							>
								cole@colecaccamise.com
							</Link>{' '}
							or connect on social media below.
						</p>
					</div>

					<div className='flex gap-4'>
						{socials.map((social) => (
							<Link
								href={social.url}
								key={social.url}
								className='bg-sidebar-bg w-12 h-12 rounded-md border border-borders-non-interactive flex items-center justify-center text-low-contrast-text hover:text-high-contrast-text hover:bg-ui-component-default hover:border-subtle-borders-interactive'
							>
								<FontAwesomeIcon
									width={20}
									icon={social.icon}
								/>
							</Link>
						))}
					</div>
				</div>
			</main>
		</>
	);
}
