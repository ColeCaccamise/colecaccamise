import Link from 'next/link';
import Image from 'next/image';
import { getAllCollectionMeta } from '@/lib/mdx';
import { DotFilledIcon } from '@radix-ui/react-icons';
import Divider from '@/components/ui/divider';
import Listicle from '@/components/ui/list/listicle';

export default async function Home() {
	const drops = await getAllCollectionMeta('drops');

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

				<div className=''>
					<span>Weekly Newsletter</span>
					<p>
						Documenting the process of building my one person businesses.
						Sharing lessons I learn and interesting resources I find.
					</p>
					{/* TODO: signup form */}
				</div>

				<div className=''>
					<div className='mb-4'>
						<span>Featured Drops</span>
						<p>Premium digital products I’ve created recently</p>
					</div>

					<Listicle
						collection={drops}
						kind='drops'
					/>
				</div>

				<div>
					<div className='mb-4'>
						<span>Ventures</span>

						<p>Projects I&apos;m working on</p>
					</div>

					<Listicle
						collection={ventures}
						kind='ventures'
					/>
				</div>

				<div>
					<span>Stack</span>
					<p>Tools and products I use daily</p>
					{/* TODO: list last ventures */}
				</div>

				<div className='opacity-80 cursor-wait'>
					<span>The UI Letter (coming soon)</span>
					<p>
						My upcoming product design newsletter. Teaching founders how to
						design websites that convert.
					</p>
					{/* TODO: list last ventures */}
				</div>

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
