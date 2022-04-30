<template>
    <AdminLayout>
        <div class="mb-6 bg-white rounded shadow pt-4">
            <search-form :role="role" @clickSearch="search"></search-form>
        </div>
        <div class="mb-6 bg-white rounded shadow p-4">
            <div class="border rounded">
                <div class="m-2 flex flex-row justify-between border-b pb-2">
                    <div></div>
                    <div class="flex flex-column justify-center items-center mx-4">
                        <el-button type="text" @click="selectExportExcel(selectTableData,tableTitle,'通话记录报表')">选择导出</el-button>
                        <el-button type="text" @click="allExportExcel(tableData,tableTitle,'通话记录报表')">全部导出</el-button>
                    </div>
                </div>
                <basic-table
                    :tableTitle="tableTitle"
                    :tableData="tableData"
                    :loading="loading"
                    :selectionType="true"
                    :pagination="true"
                    :total="total"
                    :params="params"
                    :showSummary="true"
                    :getTableData="getTableData"
                    @selectExports="selectExportData"
                >
                </basic-table>
            </div>
        </div>
    </AdminLayout>
</template>

<script>
import AdminLayout from "@/Layouts/AdminLayout";
import SearchForm from "@/Pages/components/forms/searchForm.vue";
import BasicTable from '@/Pages/components/tables/BasicTable.vue';
import { ref } from "vue"
import {post} from "@/http/request";
export default {
    name: "Report",
    components: {
        AdminLayout,SearchForm,BasicTable
    },
    setup(){
        // 搜索框
        const role = ref('report')
        const search = (f) => {
            console.log('子传父参数', f)
        }
        // 表头
        const { allExportExcel, selectExportExcel } = require("@/lqp")
        // 表格
        const params = ref({
            page: 1,
            limit: 15,
        })
        const total = ref(0)
        const loading = ref(false)
        const tableLoading = ref(false)
        const tableTitle = [
            {
                label: '用户编号',
                value: 'axb_number',
                sortable: false
            },
            {
                label: '用户名称',
                value: 'company',
                sortable: false
            },
            {
                label: '拨号次数',
                value: 'id',
                sortable: true
            },
            {
                label: '接通次数(>0秒)',
                value: 'id',
                sortable: true
            },
            {
                label: '有效呼叫(>30秒)',
                value: 'id',
                sortable: true
            },
            {
                label: '时间(分)',
                value: 'createtime',
                sortable: true
            },
            {
                label: '消费金额（￥/元）',
                value: 'call_duration',
                sortable: true
            }
        ]
        const tableData = ref([])
        const selectTableData = ref([])
        const getTableData = () => {
            loading.value = true
            post('getHistoryList', params.value).then((res)=>{
                console.log('表格数据',res)
               if(res.code === 1){
                   loading.value = false
                   tableData.value = res.data
                   total.value = res.total
               }
            })
        }
        return{
            role,search,allExportExcel,selectExportExcel,loading,tableLoading,tableTitle,
            selectTableData,getTableData,tableData,total,params
        }
    },
    mounted() {
        this.getTableData()
    },
    methods: {
        selectExportData (value) {
            this.selectTableData = value
        }
    }
}
</script>

<style scoped>

</style>
