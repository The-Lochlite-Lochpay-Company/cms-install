const mix = require('laravel-mix');
const webpackNodeExternals = require('webpack-node-externals');
require('laravel-mix-workbox');

mix.js('resources/js/ssr.js', 'public/js')
    .vue({
        version: 3,
        useVueStyleLoader: true,
        options: { optimizeSSR: true },
    })
    .alias({
        '@': 'resources/js',
        ziggy: 'vendor/tightenco/ziggy/dist/index',
    })
	.generateSW({clientsClaim: true, skipWaiting: true})
    .webpackConfig({
        target: 'node',
        externals: [webpackNodeExternals()],
    });
