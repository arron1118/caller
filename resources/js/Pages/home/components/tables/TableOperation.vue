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
                <font-awesome-icon :icon="op.icon"></font-awesome-icon>
            </el-button>
        </el-col>
    </el-row>
</template>

<script>
import {ref} from 'vue'
export default {
    name: "TableOperation",
    props: ['operations', 'rawData'],
    setup(props, context) {
        const rawData = ref(props.rawData)
        const clickOperation = (operation) => {
            context.emit('handleOperation', operation, rawData)
        }
        return {
            rawData,
            clickOperation
        }
    }
}
</script>

<style scoped>

</style>
