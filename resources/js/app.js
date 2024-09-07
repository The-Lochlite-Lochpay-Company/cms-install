import './bootstrap';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

import DropZone from 'dropzone-vue';
import 'dropzone-vue/dist/dropzone-vue.common.css';

const appName = import.meta.env.VITE_APP_NAME || 'Lochlite CMS';

createInertiaApp({
    title: title => title ? title : 'Sem titulo',
    description: description => description ? description : 'Sem descrição',
    keywords: keywords => keywords ? keywords : 'site',
    favicon: favicon => favicon ? favicon : '',
    resolve: (name) => resolvePageComponent(`../../vendor/lochlite/cms/src/Views/${name}.vue`, import.meta.glob('../../vendor/lochlite/cms/src/Views/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(DropZone)
            .mixin({ methods: { route } })
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});

import {Workbox} from 'workbox-window';

if ('serviceWorker' in navigator) {
  const wb = new Workbox('/service-worker.js');

  wb.register();
}