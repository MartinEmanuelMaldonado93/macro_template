/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			// colors from https://www.macro.com.ar/home-page
			colors: {
				'bm-blue': 'hsl(217, 100%, 16%)',
				'bm-blue-light': 'hsl(232, 82%, 52%)',
				'bm-lightblue': 'hsl(197, 100%, 45%)',
				'bm-red': 'hsl(356, 100%, 63%)',
				'bm-red-light': 'hsl(346, 60%, 93%)',
				'bm-gray': 'hsl(0, 0%, 71%)',
				'bm-gray-light': 'hsl(30, 2%, 84%)',
				'bm-pink': 'hsl(330, 100%, 77%)',
			},
			fontFamily: {
				titillium: ["'titillium'", 'system-ui', '-apple-system'],
				'sans-public': ["'sans-public'", 'system-ui', '-apple-system'],
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
