import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@ui': pathFile('./src/ui'),
		},
	},
});

function pathFile(dirFile: string) {
	return path.resolve(__dirname, dirFile);
}
