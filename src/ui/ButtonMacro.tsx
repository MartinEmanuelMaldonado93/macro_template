import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

const buttonStyles = cva(
	'text-white px-4 py-2 rounded-full disabled:opacity-60 transition-all duration-600 hover:bg-opacity-80 hover:bg-macro-pink active:scale-95',
	{
		variants: {
			intent: {
				primary: 'bg-macro-blue',
				secondary: 'bg-macro-blue-sec',
				danger: 'bg-macro-danger focus:ring-red-500',
				hovered: 'bg-macro-pink',
			},
			fullWidth: {
				true: 'w-full',
			},
		},
		defaultVariants: {
			intent: 'primary',
			fullWidth: false,
		},
	},
);

type ButtonProps = VariantProps<typeof buttonStyles> &
	ComponentProps<'button'> & {
		type: React.ButtonHTMLAttributes<'button' | 'submit' | 'reset' | undefined>;
	};

export default function ButtonMacro({
	intent,
	fullWidth,
	type = 'button',
	className,
	children,
	...props
}: ButtonProps) {
	return (
		<button
			type={type}
			className={twMerge(buttonStyles({ intent, fullWidth }), className)}
			{...props}
		>
			{children}
		</button>
	);
}
