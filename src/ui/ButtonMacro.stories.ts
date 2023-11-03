import type { Meta, StoryObj } from '@storybook/react';
import ButtonMacro from './ButtonMacro';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: 'Example/Button',
	component: ButtonMacro,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		// backgroundColor: { control: 'color' },
	},
} satisfies Meta<typeof ButtonMacro>;

export default meta;
type ButtonStory = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const MacroButtonPrimary: ButtonStory = {
	args: {
		children: 'Prueba children',
	},
};
export const MacroButtonPrimaryHovered: ButtonStory = {
	args: {
		children: 'Prueba con hover',
		intent: 'hovered',
	},
};
export const MacroButtonSecondary: ButtonStory = {
	args: {
		...MacroButtonPrimary.args,
		intent: 'secondary',
	},
};
export const MacroButtonDanger: ButtonStory = {
	args: {
		...MacroButtonPrimary.args,
		intent: 'danger',
	},
};
