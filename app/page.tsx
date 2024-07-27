import Link from 'next/link';
import Image from 'next/image';
import { getAllCollectionMeta } from '@/lib/mdx';
import ListContainer from '@/components/ui/list/list-container';
import Listicle from '@/components/ui/list/listicle';
import Input from '@/components/ui/input';
import Button from '@/components/ui/button';
import NewsletterSignup from '@/components/ui/newsletter-signup';

export default async function Home() {
	const drops = await getAllCollectionMeta('drops');
	const stack = await getAllCollectionMeta('stack');

	const ventures = [
		{
			name: 'YouTube | Cole Caccamise',
			description: 'Aesthetic tech videos.',
			url: 'https://youtube.com/@colecaccamise',
		},
		{
			name: 'Founder Supply (launching soon)',
			description: 'Premium Framer templates for startups & founders..',
		},
		{
			name: 'SaaSKit UI (launching soon)',
			description: 'Premium Framer templates for startups & founders..',
		},
	];

	return (
		<>
			<header className='w-full flex flex-col items-start text-left gap-4 '>
				<Image
					src='https://yt3.googleusercontent.com/xnP_Sb0Q94pr6mO5eBzH9j8NsZXStvTrpu4QTXjzDVoI25lTZ0FbPWVuivSqbUTHfPl-pwCxeA=s900-c-k-c0x00ffffff-no-rj'
					width={72}
					height={72}
					className='rounded-full'
					alt='Cole Caccamise'
				/>
				<div>
					<h1 className='text-lg font-medium '>Cole Caccamise</h1>
					<p>Software Engineer, Designer, & Video Creator</p>
				</div>
				{/* <div>
					<button>Contact</button>
					<button>Hire Me</button>
				</div> */}
			</header>

			<main className='flex flex-col gap-24'>
				<div className=''>
					<span>Now</span>
					<p>
						I’m Cole - an indie hacker based in Buffalo, NY. I run a{' '}
						<Link href='https://youtube.com/@colecaccamise'>
							tech YouTube channel
						</Link>{' '}
						, build websites, and work as a developer.
					</p>
				</div>

				<NewsletterSignup formId='5584232' />

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
					title='Ventures'
					description="Projects I'm working on"
				>
					<Listicle
						collection={ventures}
						kind='ventures'
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

				<NewsletterSignup
					title='The UI Letter (coming soon)'
					description='My upcoming monthly product design newsletter. Teaching founders how to design websites that convert.'
					formId='6876699'
				/>

				<div>
					<span>Connect</span>
					<p>
						Reach me at{' '}
						<Link href='https://x.com/colecaccamise'>@colecaccamise</Link> or
						<Link href='mailto:cole@colecaccamise.com'>
							cole@colecaccamise.com
						</Link>
					</p>
					{/* TODO: list last ventures */}
				</div>
			</main>
		</>
	);
}
