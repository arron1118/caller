<template>
    <el-row>
        <el-col>
            <div class="m-2 text-right border-b pb-2 flex flex-row justify-between">
                <div>
                    <slot name="customerSlot" v-if="customerSlot === true"></slot>
                </div>
                <div v-if="buttonGroups === true">
                    <div class="flex flex-column justify-center items-center mx-4">
                        <slot name="batchImport" v-if="batchImportSlot === true"></slot>
                        <el-button type="text" @click="selectExportExcel(selectExport,tableTitle,exportName)">选择导出
                        </el-button>
                        <el-button type="text" @click="allExportExcel(tableData,tableTitle,exportName)">全部导出</el-button>
                        <el-popover placement="bottom" :width="150" popper-class="h-60 overflow-y-scroll" trigger="click">
                            <template #reference>
                                <el-button type="text" style="margin-right: 16px">筛选列</el-button>
                            </template>
                            <el-checkbox v-for="item in tableTitle" v-model="item.show" :label="item.label" size="large"/>
                        </el-popover>
                        <el-button type="text" plain class="mr-2">
                            <el-icon>
                                <refresh/>
                            </el-icon>
                        </el-button>
                    </div>
                </div>
            </div>

            <el-table
                :data="tableData"
                v-loading="loading"
                style="width: 100%"
                ref="multipleTableRef"
                id="print"
                row-key="id"
                :sum-text="'合计'"
                :show-summary="showSummary"
                @selection-change="handleSelectionChange"
                @cell-mouse-enter="specialNumber"
            >
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
                    <template v-slot="scope" v-if="item.value === 'username'">
                        <slot name="specialUsername" :scope="scope"></slot>
                    </template>
                </el-table-column>
                <el-table-column
                    :label="isTest.label"
                    v-if="isTest"
                    prop="is_test"
                    :filters="[{ text: '是', value: '0' },{ text: '否', value: '1' }]"
                    :filter-method="filterIsTest"
                    filter-placement="bottom-end"
                    column-key="isTest"
                >
                    <template v-slot="scope">
                        <slot name="is_test" :scope="scope"></slot>
                    </template>
                </el-table-column>
                <el-table-column
                    :label="status.label"
                    v-if="status"
                    prop="status"
                    :filters="[{ text: '禁用', value: false },{ text: '正常', value: true }]"
                    :filter-method="filterStatus"
                    filter-placement="bottom-end"
                    column-key="status"
                >
                    <template v-slot="scope">
                        <slot name="status" :scope="scope"></slot>
                    </template>
                </el-table-column>
                <el-table-column v-if="operates" :label="operates.label" fixed="right" width="120">
                    <template v-slot="scope">
                        <slot name="operates" :scope="scope"></slot>
                    </template>
                </el-table-column>
                <el-table-column
                    :label="payType.label"
                    v-if="payType"
                    prop="payType"
                    :filters="[{ text: '微信', value: '1' },{ text: '支付宝', value: '2' },{ text: '手动充值', value: '3' }]"
                    :filter-method="filterWays"
                    filter-placement="bottom-end"
                    column-key="payType"
                >
                    <template v-slot="scope">
                        <slot name="payType" :scope="scope"></slot>
                    </template>
                </el-table-column>
                <el-table-column
                    :label="payStatus.label"
                    v-if="payStatus"
                    prop="payStatus"
                    :filters="[{ text: '已付款', value: '1' },{ text: '未付款', value: '2' },{ text: '已关闭', value: '3' }]"
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
import vPagination from '@/Pages/company/components/tables/Pagination.vue'
import {post} from "@/http/request";
import {Refresh} from '@element-plus/icons-vue'
export default {
    name: "BasicTable",
    components: {
        vPagination,Refresh
    },
    props: [
        'tableTitle',
        'operates',
        'specialNumber',
        'specialUser',
        'isTest',
        'status',
        'specialUsername',
        'selectionType',
        'pagination',
        'where',
        'payType',
        'payStatus',
        'showSummary',
        'buttonGroups',
        'url',
        'exportName',
        'payingSlot',
        'customerSlot',
        'batchImportSlot',
    ],
    setup(props, context) {
        const {allExportExcel, selectExportExcel, replaceStr} = require("@/lqp")
        const selectExport = ref([])
        const selectTableData = ref([])
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
        const specialNumber = (row, column, event, cell) => {
            console.log(row)
            row.called_number = replaceStr(row.called_number, '****')
            // 隐藏电话号码
            // row.isCalled = !row.isCalled
            // if (row.isCalled === true) {
            //     row.called_number = row.called_number_copy
            // } else if (row.isCalled === false) {
            //     row.called_number = replaceStr(row.called_number, '****')
            // }
        }
        const filterIsTest = (value, row) => {
            console.log(value)
            console.log(row)
            row.is_test = value
            console.log(row.is_test)
            context.emit('getIsTest', row.is_test)
        }
        const filterWays = (value, row) => {
            console.log(value)
            console.log(row)
            row.status = value
            console.log(row.status)
            context.emit('getPayType', row.status)

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
            specialNumber,
            replaceStr,
            filterWays,
            filterStatus,
            filterIsTest,
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
        // 需要每个页面传参数是因为搜索的时候，除了页码和每页数还有搜索字段要接收。
        where (newValue, oldValue) {
            this.getTableData();
        }
    },
    methods: {
        getTableData () {
            this.loading = true
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
