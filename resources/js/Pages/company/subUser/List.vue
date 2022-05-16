<template>
    <div class="mb-6 bg-white rounded shadow p-4">
        <div class="border rounded">
            <div class="m-2 flex flex-row justify-between border-b pb-2">
                <div>
                </div>
                <div class="flex flex-column justify-center items-center mx-4">
                    <el-button type="text" @click="selectExportExcel(this.selectTableData,this.tableTitle,'已开通用户报表')">选择导出</el-button>
                    <el-button type="text" @click="allExportExcel(this.tableData,this.tableTitle,'已开通用户报表')">全部导出</el-button>
                </div>
            </div>
           <basic-table
               :tableTitle="tableTitle"
               :tableData="tableData"
               :loading="loading"
               :pagination="true"
               :total="total"
               :params="params"
               :getTableData="getTableData"
               :selectionType="true"
               @selectExports="selectExportData"
           ></basic-table>
        </div>
    </div>
</template>

<script>
import BasicTable from '@/Pages/company/components/tables/BasicTable.vue';
import {post} from "@/http/request";
export default {
    name: "List",
    components:{
        BasicTable
    },
    setup(props, context){
        // 表头
        const { allExportExcel, selectExportExcel } = require("@/lqp")
        return{
            allExportExcel,
            selectExportExcel
        }
    },
    data(){
        return{
             params :{
                page: 1,
                limit: 10,
            },
             total: 0,
             loading: false,
             tableLoading: false,
             tableTitle: [
                {
                    label: '帐号',
                    value: 'axb_number',
                    sortable: false
                },
                {
                    label: '手机号',
                    value: 'company',
                    sortable: false
                },
                {
                    label: '小号',
                    value: 'company',
                    sortable: false
                },
                {
                    label: '呼叫总数',
                    value: 'customer',
                    sortable: false
                },
                {
                    label: '总消费',
                    value: 'user_id',
                    sortable: false,
                },
                {
                    label: '登录时间',
                    value: 'createtime',
                    sortable: true
                }

            ],
             tableData :[],
             selectTableData:[]
        }
    },
    mounted() {
        this.getTableData()
    },
    methods:{
        getTableData(){
            this.loading = true
            post('getHistoryList', this.params).then((res)=>{
                if(res.code === 1){
                    this.loading = false
                    this.tableData = res.data
                    this.total = res.total
                }
                })
        },
        selectExportData (value) {
            this.selectTableData = value
        },

    }

}
</script>

<style scoped>

</style>
