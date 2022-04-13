<template>
    <el-row>
        <el-col>
            <el-table
                :data="tableData"
                style="width: 100%"
                ref="multipleTableRef"
                @selection-change="handleSelectionChange"
                @cell-mouse-enter="handleMouseEnter"
                @cell-mouse-leave="handleMouseLeave"
                @cell-click="handleColumn"
                id="print"
            >
                <el-table-column type="selection" width="55" v-if="selectionType === true" />
                <el-table-column
                    v-for="(item, index) in tableTitle"
                    :key="index"
                    :prop="item.value"
                    :label="item.label"
                    :sortable="item.sortable === true"
                >
                    <template v-slot="scope" v-if="item.value === 'called_number'">
                        <slot name="specialNumber" :scope="scope"></slot>
                    </template>
                </el-table-column>

                <el-table-column :label="testNumbers.label" v-if="testNumbers">
                    <template v-slot="scope">
                       <slot name="testNumbers" :scope="scope"></slot>
                    </template>
                </el-table-column>
                <el-table-column :label="states.label" v-if="states">
                    <template v-slot="scope">
                        <slot name="states" :scope="scope"></slot>
                    </template>
                </el-table-column>
                <el-table-column v-if="operates.operate" :label="operates.label">
                 <template v-slot="scope">
                     <slot name="operates" :scope="scope"></slot>
                 </template>
                </el-table-column>
    </el-table>
            <div class="table-bottom m-4" v-if="pagination === true">
                <v-pagination
                    :pageSize="params.limit"
                    :total="total"
                    :options="params"
                    :render="getTableData"
                >
                </v-pagination>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import {ref} from 'vue'
import vPagination from '@/Pages/components/tables/Pagination.vue'
export default {
    name: "BasicTable",
    components:{
        vPagination
    },
    props:[ 'tableTitle', 'tableData','operates','specialNumber','testNumbers','states', 'selectionType', 'pagination','total','getTableData','params' ],
    setup(props, context){
        const { replaceStr } = require("@/lqp")
        const multipleSelection = ref([])
        const selectExport = ref([])
        const handleSelectionChange = async(val) => {
            multipleSelection.value = val
            selectExport.value = multipleSelection.value
            context.emit('selectExports', selectExport.value)
        }
        const handleColumn = (row, column, cell, event) =>{
            row.isCalled = !row.isCalled
            if(row.isCalled === true){
                row.called_number = row.called_number_copy
            }else if(row.isCalled === false){
                row.called_number = replaceStr(row.called_number, '****')
            }
        }
        const handleMouseEnter = (row, column, cell, event) => {
            if(column.rawColumnKey === 3){
                return cell.children[0].children[1].style.color="#409eff"
            }
        }
        const handleMouseLeave = (row, column, cell, event) => {
            if(column.rawColumnKey === 3){
                return cell.children[0].children[1].style.color=""
            }
        }
        return{
            selectExport,
            multipleSelection,
            handleSelectionChange,
            handleColumn,
            handleMouseEnter,
            handleMouseLeave,
            replaceStr
        }
    }
}
</script>

<style scoped>

</style>
