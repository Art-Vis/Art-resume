import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import imagemin from 'vite-plugin-imagemin';

export default defineConfig({
	plugins: [
		react(),
		imagemin({
			gifsicle: { optimizationLevel: 3 },
			mozjpeg: { quality: 75 },
			optipng: { optimizationLevel: 5 },
			svgo: { plugins: [{ removeViewBox: false }] },
		}),
	],
	resolve: {
		alias: {
			'@styles': path.resolve(__dirname, './src/styles'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@data': path.resolve(__dirname, './src/data'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@store': path.resolve(__dirname, './src/store'),
			'@pages': path.resolve(__dirname, './src/components/Pages'),
		},
	},
});
