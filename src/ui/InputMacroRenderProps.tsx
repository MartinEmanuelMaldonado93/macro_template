import { VariantProps, cva } from 'class-variance-authority';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

const inputStyles = cva('rounded-md transition-colors duration-300', {
	variants: {},
	defaultVariants: {},
});

type props = ComponentProps<'input'> &
	VariantProps<typeof inputStyles> & {
		renderLabel?: () => JSX.Element;
	};

export default function InputMacroRenderProps({
	renderLabel,
	className,
	...props
}: props) {
	return (
		<div className='flex flex-col'>
			{renderLabel && renderLabel()}
			<input {...props} className={twMerge(inputStyles({ className }))} />
		</div>
	);
}

// InputNumber.childLabel = ({ ...props }: ComponentProps<'label'>) => {
// 	return <label {...props}></label>;
// };
