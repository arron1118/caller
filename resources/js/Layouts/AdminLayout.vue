<template>
    <el-container class="layout-container-demo" ref="home">
        <el-aside class="h-screen">
            <el-menu
                background-color="#545c64"
                class="el-menu-vertical-demo h-screen w-full"
                text-color="#fff"
                style="width: 300px;"
            >
                <div class="bg-black text-center py-1">
                    <el-image class="h-12" src="../../img/logo1.png" fit="contain" />
                </div>
                    <Link :href="route('/admin/dashboard')">
                            <el-menu-item>
                                <div :class="{'text-blue-300': route().current('/admin/dashboard')}">
                                <el-icon><odometer /></el-icon>
                                <span>控制台</span>
                                </div>
                            </el-menu-item>
                    </Link>

                    <Link :href="route('/admin/user')">
                    <el-menu-item>
                        <div :class="{'text-blue-300': route().current('/admin/user')}">
                            <el-icon><user /></el-icon>
                                <span>用户管理</span>
                        </div>
                    </el-menu-item>
                    </Link>
                    <Link :href="route('/admin/callhistorylist')">
                    <el-menu-item>
                        <div :class="{'text-blue-300': route().current('/admin/callhistorylist')}">
                            <el-icon><headset /></el-icon>
                                <span class="">通话记录</span>
                        </div>
                    </el-menu-item>
                    </Link>
                <Link :href="route('/admin/callhistorylist')">
                    <el-menu-item>
                        <div :class="{'text-blue-300': route().current('/admin/callhistorylist')}">
                            <el-icon><money /></el-icon>
                            <span class="">充值管理</span>
                        </div>
                    </el-menu-item>
                </Link>
                <Link :href="route('/admin/callhistorylist')">
                    <el-menu-item>
                        <div :class="{'text-blue-300': route().current('/admin/callhistorylist')}">
                            <el-icon><data-analysis /></el-icon>
                            <span class="">通话报表</span>
                        </div>
                    </el-menu-item>
                </Link>
                <Link :href="route('/admin/callhistorylist')">
                    <el-menu-item>
                        <div :class="{'text-blue-300': route().current('/admin/callhistorylist')}">
                            <el-icon><document /></el-icon>
                            <span class="">资讯</span>
                        </div>
                    </el-menu-item>
                </Link>
                <Link :href="route('/admin/callhistorylist')">
                    <el-menu-item>
                        <div :class="{'text-blue-300': route().current('/admin/callhistorylist')}">
                            <el-icon><iphone /></el-icon>
                            <span class="">号码管理</span>
                        </div>
                    </el-menu-item>
                </Link>
                <Link :href="route('/admin/callhistorylist')">
                    <el-menu-item>
                        <div :class="{'text-blue-300': route().current('/admin/callhistorylist')}">
                            <el-icon><setting /></el-icon>
                            <span class="">系统设置</span>
                        </div>
                    </el-menu-item>
                </Link>
                </el-menu>
        </el-aside>
        <el-container>
            <el-header class="flex flex-row justify-between items-center border-b-2">
               <div>
                   <el-row>
                       <span class="mx-1">首页/</span>
                       <el-tag
                           v-for="tag in tags"
                           :key="tag.name"
                           class="mx-1"
                           closable
                           :type="tag.type"
                       >
                           {{ tag.name }}
                       </el-tag>
                   </el-row>
               </div>
                <div class="toolbar flex flex-row items-center">
                    <el-dropdown>
                        <el-icon class="mr-2"><setting/></el-icon>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>View</el-dropdown-item>
                                <el-dropdown-item>Add</el-dropdown-item>
                                <el-dropdown-item>登出</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                    <span>吕秋萍</span>
                </div>
            </el-header>
            <el-main class="bg-gray-50">
                <slot></slot>
            </el-main>
            .
        </el-container>
    </el-container>
</template>
<script>
import { Money, Odometer, User, Headset, DataAnalysis, Document, ArrowRight, Setting, Iphone } from '@element-plus/icons-vue'
import { defineComponent, ref } from 'vue';
import { Link } from '@inertiajs/inertia-vue3'
export default defineComponent({
    components: {
        Iphone,
        Link,
        Money,
        Odometer,
        User,
        Headset,
        DataAnalysis,
        Document,
        ArrowRight,
        Setting
    },
    setup() {

        const tags = ref([
            { name: 'Tag 1', type: '' }
        ])
        return {
            tags
        };
    },
    data(){
        return {
            clientHeight:''
        }
    },
    mounted() {
        // 获取浏览器可视区域高度
        this.clientHeight =   `${document.documentElement.clientHeight}`
        window.onresize = function temp() {
            this.clientHeight = `${document.documentElement.clientHeight}`;
        };
    },
    watch: {
        // 如果 `clientHeight` 发生改变，这个函数就会运行
        clientHeight: function () {
            this.changeFixed(this.clientHeight)
        }
    },
    methods:{
        changeFixed(clientHeight){ //动态修改样式
            this.$refs.home.$el.style.height = clientHeight-20+'px';
        },
    },

    created() {
        console.log('this ', this)
        // this.menu.map(item => {
        //     // import item.icon from '@ant-design/icons-vue'
        //     // this.$options.components[item.icon] = item.icon
        // })
    }
});
</script>
<style>

</style>
