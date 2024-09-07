import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/lochlite/cms/src/Views/**/*.vue',
        './vendor/lochlite/cms/src/Views/*/*/*.vue',
        './vendor/lochlite/cms/src/Views/***/*.vue',
        './vendor/lochlite/cms/src/Views/Web/*.vue',
        './vendor/lochlite/cms/src/Views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms, typography],
};
