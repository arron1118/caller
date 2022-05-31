<template>
    <el-button-group>
        <el-button
        v-for="(op,index) in operations"
        :key="index"
        type="primary"
        size="mini"
        :icon="icons[op.type]"
        @click="clickOperation(op)"
        >
            {{ op.title }}
        </el-button>
    </el-button-group>
</template>

<script>
import {ref, reactive, unref} from "vue"
export default {
    name: "ButtonGroup",
    props:['operations','rawData'],
    setup(props, context){
        const icons = ref({
            edit: 'el-icon-edit',
            view: 'el-icon-view'
        })
        const clickOperation = (operation) => {
            context.emit('handleOperation', operation)
        }
        return{
            icons,
            clickOperation
        }
    },
    methods: {

    }
}
</script>

<style scoped>

</style>
