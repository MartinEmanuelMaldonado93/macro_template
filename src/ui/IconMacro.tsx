import type { ComponentProps } from 'react';

//TODO: convertirlo en cva component
export default function IconMacro({ ...props }: ComponentProps<'img'>) {
	return (
		<>
			<img
				{...props}
				className="inline"
				src="/macro-gral.webp"
				width={100}
				alt="logo macro"
			/>
		</>
	);
}
