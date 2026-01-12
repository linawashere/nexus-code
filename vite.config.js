import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@components': path.resolve(__dirname, './src/components'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: "\n          // @import \"@/assets/styles/variables/_colors.scss\";\n          // @import \"@/assets/styles/variables/_fonts.scss\";\n          // @import \"@/assets/styles/variables/_breakpoints.scss\";\n        ",
            },
        },
    },
});
