import { VariantProps, cva } from 'class-variance-authority';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

const inputStyles = cva('rounded-md', {
	variants: {},
	defaultVariants: {},
});

type props = ComponentProps<'input'> & VariantProps<typeof inputStyles>;

export default function InputNumber({ className, ...props }: props) {
	return (
		<input
			{...props}
			type="number"
			className={twMerge(inputStyles({ className }))}
		/>
	);
}
