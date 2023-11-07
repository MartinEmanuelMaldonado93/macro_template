import type { ComponentProps, ReactNode } from 'react';

export default function CenterLayout({
	children,
	...props
}: { children: ReactNode } & ComponentProps<'div'>) {
	return (
		<div
			{...props}
			className="flex min-h-screen flex-col items-center justify-center"
		>
			{children}
		</div>
	);
}
