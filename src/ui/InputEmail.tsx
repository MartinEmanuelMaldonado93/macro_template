import { VariantProps, cva } from 'class-variance-authority';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

const inputEmailStyles = cva('rounded-md', {
	variants: {},
	defaultVariants: {},
});

type emailProps = ComponentProps<'input'> &
	VariantProps<typeof inputEmailStyles>;

export default function InputEmail({ className, ...props }: emailProps) {
	return (
		<input
			{...props}
			type="email"
			className={twMerge(inputEmailStyles({ className }))}
		/>
	);
}
