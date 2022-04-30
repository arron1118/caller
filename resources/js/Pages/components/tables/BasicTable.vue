<template>
    <el-row>
        <el-col>
            <el-table
                :data="tableData"
                v-loading="loading"
                style="width: 100%"
                ref="multipleTableRef"
                @selection-change="handleSelectionChange"
                id="print"
                :sum-text="'合计'"
                :show-summary="showSummary"
                row-key="id"
                @cell-click="handleColumn"
            >
<!--                @cell-click="handleColumn"-->
<!--                @cell-mouse-enter="handleMouseEnter"-->
<!--                @cell-mouse-leave="handleMouseLeave"-->
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
                        <template v-slot="scope" v-if="item.value === 'user_id'">
                            <slot name="specialUser" :scope="scope"></slot>
                        </template>
                    </el-table-column>
                    <el-table-column
                        :label="testNumbers.label"
                        v-if="testNumbers"
                        prop="testNumbers"
                        :filters="[{ text: '是', value: '0' },{ text: '否', value: '1' }]"
                        :filter-method="filterTestNumbers"
                        filter-placement="bottom-end"
                        column-key="testNumbers"
                    >
                        <template v-slot="scope">
                            <slot name="testNumbers" :scope="scope"></slot>
                        </template>
                    </el-table-column>
                    <el-table-column
                    :label="states.label"
                    v-if="states"
                    prop="states"
                    :filters="[{ text: '禁用', value: '0' },{ text: '正常', value: '1' }]"
                    :filter-method="filterStates"
                    filter-placement="bottom-end"
                    column-key="states"
                >
                    <template v-slot="scope">
                        <slot name="states" :scope="scope"></slot>
                    </template>
                </el-table-column>
                    <el-table-column v-if="operates" :label="operates.label" fixed="right" width="120">
                     <template v-slot="scope">
                         <slot name="operates" :scope="scope"></slot>
                     </template>
                    </el-table-column>
                    <el-table-column
                        :label="payWays.label"
                        v-if="payWays"
                        prop="payWays"
                        :filters="[{ text: '0', value: '0' },{ text: '1', value: '1' }]"
                        :filter-method="filterWays"
                        filter-placement="bottom-end"
                        column-key="payWays"

                    >
                        <template v-slot="scope">
                            <slot name="payWays" :scope="scope"></slot>
                        </template>
                    </el-table-column>
                    <el-table-column
                        :label="payStatus.label"
                        v-if="payStatus"
                        prop="payStatus"
                        :filters="[{ text: '0', value: '0' },{ text: '1', value: '1' },{ text: '2', value: '2' }]"
                        :filter-method="filterStatus"
                        filter-placement="bottom-end"
                        column-key="payStatus"
                    >
                        <template v-slot="scope">
                            <slot name="payStatus" :scope="scope"></slot>
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
    props:[ 'tableTitle', 'tableData','operates','specialNumber','specialUser','testNumbers','states','loading',
        'selectionType', 'pagination','total','getTableData','params','payWays','payStatus','showSummary' ],
    setup(props, context){
        const { replaceStr } = require("@/lqp")
        const multipleSelection = ref([])
        const selectExport = ref([])
        const handleSelectionChange = async(val) => {
            multipleSelection.value = val
            selectExport.value = multipleSelection.value
            context.emit('selectExports', selectExport.value)
        }
        const handleColumn = (row, column, event, cell) =>{
            // console.log(row)
            // console.log('column', column)
            // console.log('event', event)
            // console.log('cell', cell)
            // 隐藏电话号码
            row.isCalled = !row.isCalled
            if(row.isCalled === true){
                row.called_number = row.called_number_copy
            }else if(row.isCalled === false){
                row.called_number = replaceStr(row.called_number, '****')
            }
            // 点击获取用户列表
            if(column.property === 'user_id'){
                context.emit('dialogUserList', true, row.id)
            }
        }
        const filterTestNumbers = (value, row) => {
            console.log(value)
            console.log(row)
            row.testNumbers = value
            console.log(row.testNumbers)
            context.emit('getTestNumbers', row.testNumbers)
        }
        const filterStates = (value, row) => {
            console.log(value)
            console.log(row)
            row.states = value
            console.log(row.states)
            context.emit('getStates', row.states)
        }
        const filterWays = (value, row) => {
            console.log(value)
            console.log(row)
             row.status = value
            console.log(row.status)
            context.emit('getPayWays', row.status)

        }
        const filterStatus = (value, row) => {
            console.log(value)
            console.log(row)
            row.status = value
            console.log(row.status)
            context.emit('getPayStatus', row.status)

        }
        return{
            selectExport,
            multipleSelection,
            handleSelectionChange,
            handleColumn,
            replaceStr,
            filterWays,
            filterStatus,
            filterTestNumbers,
            filterStates
        }
    }
}
</script>

<style scoped>

</style>
