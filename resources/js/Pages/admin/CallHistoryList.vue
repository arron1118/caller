<template>
    <admin-layout title="Dashboard">
        <div class="mb-6 bg-white rounded shadow pt-4">
            <search-form :role="role" @clickSearch="search"></search-form>
        </div>
        <div class="mb-6 bg-white rounded shadow p-4">
            <div class="border rounded">
                <div class="m-2 text-right border-b pb-2 flex flex-row justify-between">
                    <div></div>
                    <div class="flex flex-column justify-center items-center mx-4">
<!--                        <el-button type="text" @click="">筛选列</el-button>-->
                        <el-button type="text" @click="selectExportExcel(selectTableData,tableTitle,'通话记录报表')">选择导出</el-button>
                        <el-button type="text" @click="allExportExcel(tableData,tableTitle,'通话记录报表')">全部导出</el-button>
<!--                        <el-button type="text" v-print="'#printId'" @click="print=true">打印</el-button>-->
                    </div>
                </div>
                <basic-table
                    :tableTitle="tableTitle"
                    :tableData="tableData"
                    :loading="loading"
                    :operates="operates"
                    :selectionType="true"
                    :pagination="true"
                    :total="total"
                    :params="params"
                    :getTableData="getTableData"
                    @selectExports="selectExportData"
                >
                    <template v-slot:operates="scope">
                        <table-operation
                        :operations="operations"
                        :rawData="scope.scope.row"
                        @handleOperation="handleOperation"
                        ></table-operation>
                    </template>
                </basic-table>
            </div>
        </div>
    </admin-layout>
    <!--        弹框-->
    <el-dialog v-model="addFormDialog" title="开通账号">
        <add-form @clickAdd="receiveAddForm" @clickCancelAdd="cancelAddForm" :loading="loading"></add-form>
    </el-dialog>
    <el-dialog v-model="editFormDialog" title="编辑">
        <edit-form @clickEdit="receiveEditForm" @clickCancelEdit="cancelEditForm" :loading="loading" :editData="editData"></edit-form>
    </el-dialog>
    <!--    打印-->
   <div v-if="print===true">
       <div id="printId" style="height: 100%;">
           <print-table :tableData="tableData" :tableTitle="tableTitle"></print-table>
       </div>
   </div>
</template>

<script>
import AdminLayout from "@/Layouts/AdminLayout";
import SearchForm from "@/Pages/components/forms/searchForm.vue";
import BasicTable from '@/Pages/components/tables/BasicTable.vue';
import TableOperation from "@/Pages/components/tables/TableOperation";
import ButtonGroup from '@/Pages/components/buttons/ButtonGroup.vue';
import AddForm from '@/Pages/admin/subUser/Add.vue'
import EditForm from '@/Pages/admin/subUser/Edit.vue'
import PrintTable from '@/Pages/components/tables/PrintTable.vue'
import {h, reactive, ref} from "vue"
import {ElMessage, ElMessageBox} from "element-plus"
import {post} from "@/http/request";
export default {
    name: "CallHistoryList",
    components: {
        ButtonGroup,
        AdminLayout, SearchForm,BasicTable,TableOperation,EditForm, AddForm,PrintTable
    },
    setup(){
        // 搜索框
        const role = ref('callHistory')
        const search = (f) => {
            console.log('子传父参数', f)
        }
        // 表头
        const { allExportExcel, selectExportExcel, replaceStr } = require("@/lqp")
        const print = ref(false)
        const addFormDialog = ref(false)
        const receiveAddForm = (e, r) =>{
            console.log('zhe',e)
            console.log('zhe',r)
            loading.value = r
            // 提交参数处理完成后，后台返回数据成功后，关闭加载。提示成功。刷新页面。
            setTimeout(function(){
                loading.value = false
                addFormDialog.value = false
                ElMessage({
                    type: 'success',
                    // message: `action: ${action}`,
                    message: '已提交'
                })
                // 重载表格数据

            }, 3000);

        }
        const cancelAddForm = (e) => {
            addFormDialog.value = e
        }
        // 表格
        const params = ref({
            page: 1,
            limit: 15,
        })
        const total = ref(0)
        const editFormDialog = ref(false)
        const loading = ref(false)
        const tableTitle = [
            {
                label: '编号',
                value: 'axb_number',
                sortable: false
            },
            {
                label: '操作人',
                value: 'company',
                sortable: false
            },
            {
                label: '客户名称',
                value: 'customer',
                sortable: false
            },
            {
                label: '被叫号码',
                value: 'called_number',
                sortable: false
            },
            {
                label: '呼叫时间',
                value: 'createtime',
                sortable: true
            },
            {
                label: '呼叫时长',
                value: 'call_duration',
                sortable: true
            },
            {
                label: '消费金额（￥/元）',
                value: 'call_duration',
                sortable: false
            },
            {
                label: '录音',
                value: 'platform',
                sortable: false
            }

        ]
        const tableData = ref([])
        const selectTableData = ref([])
        const operates = ref({
            operate: true,
            label: '操作',
        })
        const operations = ref([
        {
            types: 'del',
            type: 'danger',
            // icon: 'Delete',
            icon: ['far', 'trash-can'],
            title: '删除'

        }
        ])
        const editData = ref({})
        const handleOperation = (op, row) =>{
            if(op.types === 'edit'){
                editFormDialog.value = true
                editData.value = row.value

            }else if(op.types === 'del'){
                console.log(row.value.id)
                ElMessageBox({
                    title: '确认删除此id='+row.value.id+'数据吗？',
                    message: h('p', null, [
                        h('span', null, '此数据将会被'),
                        h('i', { style: 'color: #F56C6C' }, '删除'),
                    ]),
                    showCancelButton: true,
                    confirmButtonText: '删除',
                    cancelButtonText: '取消',
                    beforeClose: (action, instance, done) => {
                        if (action === 'confirm') {
                            let params = row.value.id
                            console.log('删除项id', params)
                            instance.confirmButtonLoading = true
                            instance.confirmButtonText = 'Loading...'
                            setTimeout(() => {
                                done()
                                setTimeout(() => {
                                    instance.confirmButtonLoading = false
                                }, 300)
                            }, 3000)
                            // todo
                        } else {
                            done()
                        }
                    },
                }).then(() => {
                    ElMessage({
                        type: 'success',
                        message: '已删除'
                    })
                })
            }
        }
        const receiveEditForm = (e, r) =>{
            console.log('参数',e)
            console.log('zhe',r)
            loading.value = r
            // todo
            // 提交参数处理完成后，后台返回数据成功后，关闭加载。提示成功。刷新页面。
            setTimeout(function(){
                loading.value = false
                editFormDialog.value = false
                ElMessage({
                    type: 'success',
                    // message: `action: ${action}`,
                    message: '已提交'
                })
                // 重载表格数据

            }, 3000);

        }
        const cancelEditForm = (e) => {
            editFormDialog.value = e
        }
        const changeState = (e,row,index) => {
            // e返回状态，row当前行数据， index下标
            console.log('zhe2',e)
            console.log(row)
            console.log(index)
            //todo
        }
        const getTableData = () => {
            loading.value = true
            post('getHistoryList', params.value).then((res)=>{
                console.log(res)
                if(res.code === 1){
                    loading.value=false
                    tableData.value = res.data
                    total.value = res.total
                }
            })
        }
        return {
            getTableData,
            replaceStr,
            selectTableData,
            allExportExcel,
            selectExportExcel,
            search,
            role,
            changeState,
            addFormDialog,
            receiveAddForm,
            cancelAddForm,
            operates,
            operations,
            handleOperation,
            tableTitle,
            tableData,
            editFormDialog,
            editData,
            cancelEditForm,
            receiveEditForm,
            print,
            total,
            params,
            loading
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

