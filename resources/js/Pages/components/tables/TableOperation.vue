<template>
    <el-row>
        <el-col>

            <el-button
                v-for="(op,index) in operations"
                :key="index"
                :type="op.type"
                size="small"
                plain
                @click="clickOperation(op)"
            >
<!--                <el-icon size="20">
                    <component :is="op.icon"></component>
                </el-icon>-->
                <font-awesome-icon :icon="op.icon"></font-awesome-icon>
            </el-button>
        </el-col>
    </el-row>
</template>

<script>
import {ref} from 'vue'
import {Edit, Delete} from '@element-plus/icons-vue'

export default {
    name: "TableOperation",
    components: {
        Edit, Delete
    },
    props: ['operations', 'rawData'],
    setup(props, context) {
        const {Edit, Delete} = require('@element-plus/icons-vue')
        const rawData = ref(props.rawData)
        const clickOperation = (operation) => {
            context.emit('handleOperation', operation, rawData)
        }
        return {
            Edit,
            Delete,
            rawData,
            clickOperation
        }
    },
    data() {
        return {};
    }
}
</script>

<style scoped>

</style>
