import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import inject from '@rollup/plugin-inject';

export default defineConfig({
    plugins: [
        laravel({
            input: ['vendor/lochlite/cms/src/Disk/private/app.css', 'vendor/lochlite/cms/src/Disk/private/dashboard.css', 'vendor/lochlite/cms/src/Disk/private/main.scss', 'resources/js/app.js'],
            ssr: 'resources/js/ssr.js',
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
        inject({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./vendor/lochlite/cms/src/Views', import.meta.url)),
            'lochlitecms': fileURLToPath(new URL('./vendor/lochlite/cms/src', import.meta.url)),
            "@heroicons": fileURLToPath(new URL("./node_modules/@heroicons", import.meta.url))
        }
    },
});
