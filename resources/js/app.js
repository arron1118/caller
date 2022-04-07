require('./bootstrap');

import { createApp, h } from 'vue';
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from '@inertiajs/progress';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.min.css';
library.add(fas, far, fab)

createInertiaApp({
    resolve: name => require(`./Pages/${name}`),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(Antd)
            .component('font-awesome-icon', FontAwesomeIcon)
            .mixin({ methods: { route } })
            .mount(el)
    },
});

InertiaProgress.init();
