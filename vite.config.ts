import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@ui': pathFile('./src/ui'),
			'@fonts': pathFile('./public/fonts'),
			'@envs': pathFile('./src/environments'),
			'@utils': pathFile('./src/utils'),
			'@components': pathFile('./src/components'),
			'@zodSchemas': pathFile('./src/zodSchemas'),
		},
	},
});

function pathFile(dirFile: string) {
	return path.resolve(__dirname, dirFile);
}
