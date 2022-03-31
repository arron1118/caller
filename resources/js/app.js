require('./bootstrap');

import { createApp, h } from 'vue';
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from '@inertiajs/progress';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.min.css';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Print from 'vue3-print-nb'

createInertiaApp({
    resolve: name => require(`./Pages/admin/${name}`),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(Antd)
            .use(ElementPlus)
            .use(Print)
            .mixin({ methods: { route } })
            .mount(el)
    },
});

InertiaProgress.init();
