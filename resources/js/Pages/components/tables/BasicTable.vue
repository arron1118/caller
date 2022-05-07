<template>
    <el-row>
        <el-col>
            <div class="m-2 text-right border-b pb-2 flex flex-row justify-between" v-if="export">
                <div></div>
                <div class="flex flex-column justify-center items-center mx-4">
                    <slot name="button"></slot>
                    <el-popover placement="bottom" :width="150" popper-class="h-60 overflow-y-scroll" trigger="click">
                        <template #reference>
                            <el-button style="margin-right: 16px">筛选列</el-button>
                        </template>
                        <el-checkbox v-for="item in tableTitle" v-model="item.show" :label="item.label" size="large"/>
                    </el-popover>
                    <!--                        <el-button type="text" @click="">筛选列</el-button>-->
                    <el-button type="text" @click="selectExportExcel(selectExport,tableTitle,'通话记录报表')">选择导出
                    </el-button>
                    <el-button type="text" @click="allExportExcel(tableData,tableTitle,'通话记录报表')">全部导出</el-button>
                    <!--                        <el-button type="text" v-print="'#printId'" @click="print=true">打印</el-button>-->
                </div>
            </div>
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
                <el-table-column type="selection" width="55" v-if="selectionType === true"/>
                <el-table-column
                    v-for="(item, index) in tableTitle.filter(item2 => item2.show)"
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
import {post} from "@/http/request";

export default {
    name: "BasicTable",
    components: {
        vPagination
    },
    props: ['tableTitle', 'operates', 'specialNumber', 'specialUser', 'testNumbers', 'states',
        'selectionType', 'pagination', 'where', 'payWays', 'payStatus', 'showSummary', 'export', 'url'],
    setup(props, context) {
        const {allExportExcel, selectExportExcel, replaceStr} = require("@/lqp")
        const selectExport = ref([])
        const selectTableData = ref([])
        // 表格
        const total = ref(0)
        const loading = ref(false)
        const tableData = ref([])
        const params = ref(Object.assign({}, {
            page: 1,
            limit: 15,
        }, props.where))

        const handleSelectionChange = async (val) => {
            selectExport.value = val
        }
        const handleColumn = (row, column, event, cell) => {
            // 隐藏电话号码
            row.isCalled = !row.isCalled
            if (row.isCalled === true) {
                row.called_number = row.called_number_copy
            } else if (row.isCalled === false) {
                row.called_number = replaceStr(row.called_number, '****')
            }
            // 点击获取用户列表
            if (column.property === 'user_id') {
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
        return {
            selectExport,
            handleSelectionChange,
            handleColumn,
            replaceStr,
            filterWays,
            filterStatus,
            filterTestNumbers,
            filterStates,
            selectExportExcel,
            allExportExcel,
            selectTableData,
            tableData,
            total,
            loading,
            params,
        }
    },
    mounted() {
        this.getTableData()
    },
    watch: {
        where (newValue, oldValue) {
            this.getTableData();
        }
    },
    methods: {
        getTableData () {
            this.loading = true
            // this.params = Object.assign({}, this.params, this.where)
            post(this.url, this.params).then((res) => {
                console.log(res)
                if (res.code === 1) {
                    this.loading = false
                    this.tableData = res.data
                    this.total = res.total
                }
            })
        }
    }
}
</script>

<style scoped>

</style>
