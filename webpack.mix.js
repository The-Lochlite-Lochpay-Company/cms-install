const mix = require('laravel-mix');
require('laravel-mix-workbox');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js').vue()
    .sass('resources/sass/main.scss', 'public/sass')
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
    ])
    .alias({
        '@': 'resources/js',
    })
	.generateSW({clientsClaim: true, skipWaiting: true});

if (mix.inProduction()) {
    mix.version();
}
