/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'macro-blue': 'rgb(0,48,87)',
				'macro-blue-sec': 'rgb(32,58,233)',
				'macro-pink': 'rgb(255,140,197)',
				'macro-danger': 'rgb(255,67,81)',
			},
		},
	},
	plugins: [
		// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
		require('@tailwindcss/forms')({
			strategy: 'base', // only generate global styles
			// strategy: 'class', // only generate classes
		}),
	],
};
