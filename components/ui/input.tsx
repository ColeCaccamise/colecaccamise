'use client';

import Link from 'next/link';
import React, { forwardRef, ForwardedRef } from 'react';
import Spinner from '@/components/ui/spinner';

interface InputProps {
	className?: string;
	variant?: string;
	size?: string;
	weight?: string;
	type: string;
	placeholder?: string;
	value?: string;
	name?: string;
	label?: string;
	htmlFor?: string;
	handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	link?: string;
	linkText?: string;
	autoFocus?: boolean;
	placeholderStyle?: string;
	loading?: boolean;
	icon?: JSX.Element;
	prefix?: string | JSX.Element;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
	{
		className,
		variant,
		size = 'text-sm',
		weight = 'font-medium',
		type = 'text',
		placeholder,
		value,
		name,
		label,
		htmlFor,
		handleChange,
		link,
		linkText,
		autoFocus = false,
		placeholderStyle = 'placeholder-low-contrast-text',
		loading,
		icon,
		prefix,
	},
	ref: ForwardedRef<HTMLInputElement>
) {
	if (variant == 'unstyled') {
		return (
			<input
				ref={ref}
				value={value}
				type={type}
				placeholder={placeholder}
				name={name}
				id={htmlFor}
				className={`${className} ${size} ${weight} text-high-contrast-text ${placeholderStyle} outline-none`}
				onChange={handleChange}
				autoFocus={autoFocus}
			/>
		);
	}

	return (
		<div className='flex flex-col gap-2'>
			<div className='flex justify-between'>
				{label && (
					<label
						htmlFor={htmlFor}
						className={`text-sm ${weight}`}
					>
						{label}
					</label>
				)}
				{link && (
					<Link
						href={link}
						className='text-sm font-medium'
						tabIndex={2}
					>
						{linkText}
					</Link>
				)}
			</div>
			<div
				className={`flex justify-between pr-4 items-center bg-app-bg dark:bg-ui-component-default border border-subtle-borders-interactive hover:border-stronger-borders-interactive-focus-rings rounded-lg  overflow-hidden group`}
			>
				<div className='flex w-full'>
					{prefix && (
						<div className='bg-ui-component-hover p-2 font-medium border-r border-subtle-borders-interactive group-hover:border-stronger-borders-interactive-focus-rings select-none'>
							<span className={`${size} font-medium`}>{prefix}</span>
						</div>
					)}

					<input
						ref={ref}
						value={value}
						type={type}
						placeholder={placeholder}
						name={name}
						id={htmlFor}
						className={`${className} ${size} ${weight} flex-grow text-high-contrast-text placeholder-high-contrast-text/50 outline-none bg-transparent p-2`}
						onChange={handleChange}
						autoFocus={autoFocus}
					/>
				</div>

				{icon && (
					<div className='flex items-center justify-center'>
						{loading ? (
							<span>
								<Spinner variant='light' />
							</span>
						) : (
							icon
						)}
					</div>
				)}
			</div>
		</div>
	);
});

export default Input;
