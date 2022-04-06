<template>
    <el-row>
        <el-col>
            <el-button-group>
                <el-button
                    v-for="(op,index) in operations"
                    :key="index"
                    :type="op.type"
                    plain
                    class="mx-1"
                    @click="clickOperation(op)"
                >{{op.title}}</el-button>
            </el-button-group>
        </el-col>
    </el-row>
</template>

<script>
import { ref } from 'vue'
export default {
    name: "TableOperation",
    props:[ 'operations', 'rawData' ],
    setup(props, context){
        const rawData = ref(props.rawData)
        const clickOperation = (operation) => {
            context.emit('handleOperation', operation, rawData )
        }
        return{
            rawData,
            clickOperation
        }
    }
}
</script>

<style scoped>

</style>
