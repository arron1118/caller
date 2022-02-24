require('./bootstrap');

import { createApp, h } from 'vue';
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from '@inertiajs/progress';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.min.css';

createInertiaApp({
    resolve: name => require(`./Pages/${name}`),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(Antd)
            .mixin({ methods: { route } })
            .mount(el)
    },
});

InertiaProgress.init();
