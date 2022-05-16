<template>
    <div>
        <el-tabs
            v-model="activeName"
            type="card"
            class="demo-tabs"
            @tab-click="handleClick"
        >
            <el-tab-pane
                v-for="item in tabsList"
                :key="item"
                :label="item.label"
                :name="item.name">
                <slot />
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import {ref} from "vue"

export default {
    name: "BasicTabs",
    setup(props, context) {
        const handleClick = (tab, event) => {
            context.emit('getTabs', tab.props['name'])
        }
        return {
            handleClick
        }
    },
    props: ['tabsList', 'activeName'],
    watch: {

    },
    methods: {}
}
</script>

<style scoped>

</style>
