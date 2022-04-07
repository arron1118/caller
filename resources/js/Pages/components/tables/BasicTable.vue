<template>
    <el-row>
        <el-col>
            <el-table
                :data="tableData"
                style="width: 100%"
                ref="multipleTableRef"
                @selection-change="handleSelectionChange"
                id="print"
            >
                <el-table-column type="selection" width="55" v-if="selectionType === true" />
                <el-table-column
                    v-for="(item, index) in tableTitle"
                    :key="index"
                    :prop="item.value"
                    :label="item.label"
                    :sortable="item.sortable === true"
                />
                <el-table-column :label="testNumbers.label" v-if="testNumbers.testNumber">
                    <template v-slot="scope">
                       <slot name="testNumbers" :scope="scope"></slot>
                    </template>
                </el-table-column>
                <el-table-column :label="states.label" v-if="states.state">
                    <template v-slot="scope">
                        <slot name="states" :scope="scope"></slot>
                    </template>
                </el-table-column>
                <el-table-column width="160" v-if="operates.operate" :label="operates.label">
                 <template v-slot="scope">
                     <slot name="operates" :scope="scope"></slot>
                 </template>
                </el-table-column>
    </el-table>
        </el-col>
    </el-row>
</template>

<script>
import { Phone } from '@element-plus/icons-vue'
import { ref } from 'vue'
export default {
    name: "BasicTable",
    components:{
        Phone
    },
    props:[ 'tableTitle', 'tableData','operates','testNumbers','states', 'selectionType' ],
    setup(props, context){
        const pageSize = ref(1)
        const handleEdit = async(index, row) => {
            console.log(index, row)
            context.emit('clickTableEdit', true, row)
        }
        const multipleSelection = ref([])
        const selectExport = ref([])
        const handleSelectionChange = async(val) => {
            multipleSelection.value = val
            selectExport.value = multipleSelection.value
            context.emit('selectExports', selectExport.value)
        }
        const handlePrints = (row) => {

        }
        return{
            selectExport,
            pageSize,
            handleEdit,
            multipleSelection,
            handleSelectionChange,
            handlePrints
        }
    }
}
</script>

<style scoped>

</style>
