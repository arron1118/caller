<template>
    <a-layout has-sider>
        <a-layout-sider :collapsed="collapsed" :trigger="null" :class="'w-52 h-screen top-0 left-0 bottom-0'" :style="{ position: 'fixed' }" theme="dark" collapsible>
            <div class="p-4 flex justify-center text-slate-200 text-base">
                <img :src="$page.props.site.logo" class="w-8 h-8 mr-2" />
                <span v-if="!collapsed">{{ $page.props.site.siteName }}</span>
            </div>
            <a-menu :selectedKeys="selectedKeys" theme="dark" mode="inline">
                <a-menu-item v-for="item in $page.props.menus.admin" :key="item.url" :class="{ 'text-blue-500': route().current(item.url) }" :title="item.title">
                    <template #icon>
                        <font-awesome-icon :icon="item.icon"></font-awesome-icon>
                    </template>
                    <Link :href="route(item.url)">
                        {{ item.title }}
                    </Link>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout :style="contentStyles" :class="'transition ease-in-out'">
            <a-layout-header :style="{ backgroundColor: '#fff', padding: '0 16px'}">
                <font-awesome-icon :icon="['fas', 'indent']"
                    v-if="collapsed"
                    class="trigger"
                    @click="changeCollapsed"
                    title="展开"
                />
                <font-awesome-icon :icon="['fas', 'outdent']" v-else class="trigger" @click="changeCollapsed" title="收起"/>
                <a-dropdown class="float-right">
                    <a class="ant-dropdown-link" @click.prevent>
                        设置
                        <font-awesome-icon :icon="['fas', 'angle-down']" />
                    </a>
                    <template #overlay>
                        <a-menu @click="onClick">
                            <a-menu-item key="1">
                                <template #icon>
                                    <font-awesome-icon :icon="['fas', 'user']"></font-awesome-icon>
                                </template>
                                <Link :href="route('admin.profile')">
                                    个人资料
                                </Link>
                            </a-menu-item>
                            <a-menu-item key="2">
                                <template #icon>
                                    <font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']"></font-awesome-icon>
                                </template>
                                <Link :href="route('admin.logout')">
                                    退 出
                                </Link>
                            </a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>
            </a-layout-header>
            <a-layout-content
                class="transition transform ease-in-out"
                :style="{ margin: '16px', padding: '16px', background: '#fff', minHeight: '280px' }"
            >
                <slot></slot>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script>
import { defineComponent, ref } from 'vue';
import { Link } from '@inertiajs/inertia-vue3';

export default defineComponent({
    components: {
        Link,
    },

    setup() {
        const contentStyles = ref({ marginLeft: '200px' })
        const selectedKeys = ref([])
        const collapsed = ref(false)
        // 当前菜单索引
        selectedKeys.value[0] = route().current()

        return {
            selectedKeys,
            collapsed,
            contentStyles,
        };
    },

    created() {
    },
    methods: {
        onClick({ key }) {
            console.log('click on item ${key}')
        },
        changeCollapsed() {
            this.collapsed = !this.collapsed
            this.contentStyles.marginLeft = this.collapsed ? '80px' : '200px'
        }
    }
});
</script>
<style>
</style>
