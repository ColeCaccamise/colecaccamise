'use client';

import { usePathname } from 'next/navigation';
import SidebarLink from './sidebar-link';

import Image from 'next/image';

export default function Sidebar({
	menuLinks,
}: {
	menuLinks: { name: string; href: string }[];
}) {
	const pathname = usePathname();

	return (
		<aside className='w-48 h-screen sticky top-0 py-20 hidden md:block'>
			<nav
				className='w-full h-full overflow-visible flex flex-col gap-12'
				aria-label='Desktop navigation'
			>
				<div className='w-full flex flex-col items-start text-left gap-4 '>
					<Image
						src='https://yt3.googleusercontent.com/xnP_Sb0Q94pr6mO5eBzH9j8NsZXStvTrpu4QTXjzDVoI25lTZ0FbPWVuivSqbUTHfPl-pwCxeA=s900-c-k-c0x00ffffff-no-rj'
						width={72}
						height={72}
						className='rounded-full'
						alt='Cole Caccamise'
					/>
					<div>
						<h1 className='text-lg font-medium '>Cole Caccamise</h1>
						<p>Solopreneur</p>
					</div>
					{/* <div>
					<button>Contact</button>
					<button>Hire Me</button>
				</div> */}
				</div>

				<ul className='flex flex-col gap-4'>
					{menuLinks.map((link) => (
						<li key={link.href}>
							<SidebarLink
								href={link.href}
								active={
									link.href === '/'
										? pathname === link.href
										: pathname.startsWith(link.href)
								}
							>
								<span>{link.name}</span>
							</SidebarLink>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
}
