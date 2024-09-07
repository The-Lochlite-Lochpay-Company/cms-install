import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import fs from 'fs';
import path from 'path';
import child_process from 'child_process';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
    plugins: [
        laravel({
            input: ['vendor/lochlite/cms/src/Disk/private/app.css', 'vendor/lochlite/cms/src/Disk/private/main.scss', 'resources/js/app.js'],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./vendor/lochlite/cms/src/Views', import.meta.url)),
            'lochlitecms': fileURLToPath(new URL('./vendor/lochlite/cms/src', import.meta.url)),
            "@heroicons": fileURLToPath(new URL("./node_modules/@heroicons", import.meta.url))
        }
    },
});
