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
                        <el-button type="text" @click="selectExportExcel(selectTableData,tableTitle,'充值管理报表')">选择导出</el-button>
                        <el-button type="text" @click="allExportExcel(tableData,tableTitle,'充值管理报表')">全部导出</el-button>
                    </div>
                </div>
                <basic-table
                    :tableTitle="tableTitle"
                    :tableData="tableData"
                    :tableLoading="tableLoading"
                    :selectionType="true"
                    :pagination="true"
                    :total="total"
                    :params="params"
                    :getTableData="getTableData"
                    @selectExports="selectExportData"
                    :payWays="payWays"
                    @getPayWay="getPayWays"
                    :payStatus="payStatus"
                    @getPayStatus="getPayStatus"
                >
                    <template v-slot:payWays="scope">
                        <el-tag
                            :type="scope.scope.row.status === 0 ? '' : 'success'"
                            disable-transitions
                        ><font-awesome-icon :icon="scope.scope.row.status === 0 ? ['fas', 'pen-to-square'] : ['fas', 'pen-to-square']"></font-awesome-icon></el-tag>
                    </template>
                    <template v-slot:payStatus="scope">
                        <el-tag
                            :type="scope.scope.row.status === 0 ? '' : scope.scope.row.status === 1? 'danger' : 'success'"
                            disable-transitions
                        >{{ scope.scope.row.status === 0 ? "已付款" : scope.scope.row.status === 1? "未付款" : ""}}</el-tag>
                    </template>
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
    name: "Payment",
    components: {
        AdminLayout,SearchForm,BasicTable
    },
    setup(){
        // 搜索框
        const role = ref('payment')
        const search = (f) => {
            console.log('子传父参数', f)
        }
        // 表头
        const { allExportExcel, selectExportExcel } = require("@/lqp")
        // 表格
        const payWays = ref({
            label: '支付方式',
            width: 60
        })
        const getPayWays = (v) => {
            console.log('支付方式',v)
            // todo

        }
        const payStatus = ref({
            label: '支付状态',
            width: 60
        })
        const getPayStatus = (v) => {
            console.log('支付状态',v)
            // todo

        }
        const payWayIcon = ref([{
            title: '微信',
            type: 'success',
            weixin: ['fas', 'pen-to-square'],

        },
            {
                title: '支付宝',
                type: 'danger',
                alipay: ['far', 'trash-can'],

            }
        ])


        const params = ref({
            page: 1,
            limit: 15,
        })
        const total = ref(0)
        const loading = ref(false)
        const tableLoading = ref(false)
        const tableTitle = [
            {
                label: '订单号',
                value: 'axb_number',
                sortable: false
            },
            {
                label: '充值方',
                value: 'company',
                sortable: false
            },
            {
                label: '充值金额（￥/元）',
                value: 'call_duration',
                sortable: false
            },
            {
                label: '充值时间',
                value: 'createtime',
                sortable: true
            },
            {
                label: '充值方式',
                value: 'id',
                sortable: false
            },
            {
                label: '状态',
                value: 'id',
                sortable: false
            }

        ]
        const tableData = ref([])
        const selectTableData = ref([])
        const getTableData = async () => {
            post('getHistoryList', params.value).then((res)=>{
                console.log('表格数据',res)
                tableData.value = res.data
                total.value = res.total
            })
        }
        return{
            role,search,allExportExcel,selectExportExcel,loading,tableLoading,tableTitle,
            selectTableData,getTableData,tableData,total,params,payWays,getPayWays,payStatus,getPayStatus,payWayIcon
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
