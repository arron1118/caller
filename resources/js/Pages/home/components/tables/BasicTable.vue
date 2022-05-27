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
                        <el-button @click="selectExportExcel(selectDate,tableTitle,exportName)">选择导出
                        </el-button>
                        <el-button @click="allExportExcel(tableData,tableTitle,exportName)">全部导出</el-button>
                        <el-popover placement="bottom" :width="150" popper-class="h-60 overflow-y-scroll" trigger="click">
                            <template #reference>
                                <el-button style="margin-right: 16px">筛选列</el-button>
                            </template>
                            <el-checkbox v-for="item in tableTitle" v-model="item.show" :label="item.label" size="large"/>
                        </el-popover>
                        <el-button plain class="mr-2">
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
                row-key="id"
                @selection-change="handleSelectionChange"
                v-if="showTable"
            >
                <el-table-column type="selection" width="55" v-if="selectionType === true"/>
                <el-table-column
                    v-for="(item, index) in tableTitle.filter(item2 => item2.show)"
                    :key="index"
                    :prop="item.value"
                    :label="item.label"
                    :sortable="item.sortable === true"
                >
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
    props: {
        showTable: {type: Boolean, default: true},
        tableTitle: {type: Array},
        operates: {type: Object},
        selectionType: {type: Boolean},
        pagination: {type: Boolean},
        where: {type: Object},
        buttonGroups:{type: Boolean},
        url:{type: String},
        exportName:{type: String},
        customerSlot:{type: Boolean},
        batchImportSlot:{type: Boolean}
    },
    setup(props, context) {
        const {allExportExcel, selectExportExcel} = require("@/lqp")
        const selectDate = ref([])
        const selectTableData = ref([])
        const total = ref(0)
        const loading = ref(false)
        const tableData = ref([])
        const params = ref(Object.assign({}, {
            page: 1,
            limit: 15,
        }, props.where))
        const handleSelectionChange = async (val) => {
            selectDate.value = val
            context.emit('selectDate', selectDate.value)
        }
        return {
            selectDate,
            handleSelectionChange,
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
