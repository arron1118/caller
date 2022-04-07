<template>
    <a-layout>
        <a-layout-sider v-model:collapsed="collapsed" :trigger="null" :class="'h-screen'" collapsible>
            <div class="logo"/>
            <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
                <a-menu-item v-for="item in menu" :key="item.id">
                    <component :is="item.icon"></component>
                    <span>{{ item.title }}</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header :style="{ backgroundColor: '#fff'}">
                <menu-unfold-outlined
                    v-if="collapsed"
                    class="trigger"
                    @click="() => (collapsed = !collapsed)"
                />
                <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)"/>
            </a-layout-header>
            <a-layout-content
                :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
            >
                <slot name="content"></slot>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script>
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons-vue';
import {defineComponent, ref} from 'vue';

export default defineComponent({
    components: {
        UserOutlined,
        VideoCameraOutlined,
        UploadOutlined,
        MenuUnfoldOutlined,
        MenuFoldOutlined,
    },

    setup() {
        const menu = ref([
            {
                id: 1,
                title: 'welcome',
                comment: 'welcome to my website',
                url: '/',
                icon: 'AppleOutlined'
            },
            {
                id: 2,
                title: 'dashboard',
                comment: 'dashboard',
                url: '/dashboard',
                icon: 'VideoCameraOutlined'
            },
            {
                id: 3,
                title: 'user',
                comment: 'user command',
                url: '/user',
                icon: 'UserOutlined',
            },
            {
                id: 4,
                title: 'setting',
                comment: 'setting',
                url: '/setting',
                icon: 'MenuUnfoldOutlined'
            }
        ])

        return {
            selectedKeys: ref(['1']),
            collapsed: ref(true),
            menu,
        };
    },

    created() {
        console.log('this ', this)
        this.menu.map(item => {
            // import item.icon from '@ant-design/icons-vue'
            // this.$options.components[item.icon] = item.icon
        })
    }
});
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
}

.site-layout .site-layout-background {
    background: #fff;
}
</style>
