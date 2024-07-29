'use client';

import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import SidebarLink from './sidebar-link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function NavigationMenu({
	menuLinks,
}: {
	menuLinks: { name: string; href: string }[];
}) {
	const pathname = usePathname();
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		setMenuOpen(false);
	}, [pathname]);

	return (
		<nav
			className='block md:hidden border-b border-borders-non-interactive py-4 px-8 w-full'
			aria-label='Mobile navigation'
		>
			<div className='flex justify-between items-center w-full'>
				<Link
					href='/'
					className='flex flex-col select-none hover:opacity-90'
				>
					<span>Cole Caccamise</span>
					<span className='text-low-contrast-text'>Solopreneur</span>
				</Link>

				<button
					className='bg-sidebar-bg w-12 h-12 rounded-md border border-borders-non-interactive flex items-center justify-center text-low-contrast-text hover:text-high-contrast-text hover:bg-ui-component-default hover:border-subtle-borders-interactive pointer-cursor transition-all z-1'
					onClick={() => setMenuOpen((prev) => !prev)}
				>
					<HamburgerMenuIcon
						width={20}
						height={20}
					/>
				</button>
			</div>

			<ul
				className={`bg-app-bg flex flex-col gap-4 items-center py-4 w-full absolute z-10 left-0 top-[81px] ${
					menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
				}`}
				style={{ overflow: 'hidden' }}
			>
				{menuLinks.map((link) => (
					<li
						key={link.href}
						className={`transition-opacity duration-300 ease-in-out delay-50 ${
							menuOpen ? 'opacity-100' : 'opacity-0'
						}`}
					>
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
	);
}
