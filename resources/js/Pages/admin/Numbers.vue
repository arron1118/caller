<template>
    <admin-layout title="Dashboard">
        <div class="mb-6 bg-white rounded shadow p-4">
            <div class="border rounded">
                <div class="m-2 flex flex-row justify-between border-b pb-2">
                    <el-button type="primary" @click="addFormDialog = true">添加</el-button>
                    <div class="flex flex-column justify-center items-center mx-4">
                    </div>
                </div>
                <basic-table
                    :tableTitle="tableTitle"
                    :tableData="tableData"
                    :loading="loading"
                    :operates="operates"
                    :selectionType="false"
                    :pagination="true"
                    :total="total"
                    :params="params"
                    :getTableData="getTableData"
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
    <el-dialog v-model="addFormDialog" title="添加号码">
        <add-form @clickAdd="receiveAddForm" @clickCancelAdd="cancelAddForm" :loading="loading"></add-form>
    </el-dialog>
    <el-dialog v-model="editFormDialog" title="编辑">
        <edit-form @clickEdit="receiveEditForm" @clickCancelEdit="cancelEditForm" :loading="loading" :editData="editData"></edit-form>
    </el-dialog>
</template>

<script>
import AdminLayout from "@/Layouts/AdminLayout";
import BasicTable from '@/Pages/components/tables/BasicTable.vue';
import TableOperation from "@/Pages/components/tables/TableOperation";
import ButtonGroup from '@/Pages/components/buttons/ButtonGroup.vue';
import AddForm from '@/Pages/admin/subNumbers/Add.vue'
import EditForm from '@/Pages/admin/subNumbers/Edit.vue'
import {h, ref} from "vue"
import {ElMessage, ElMessageBox} from "element-plus";
import {post} from "@/http/request";
import {Timer, Phone} from '@element-plus/icons-vue'
export default {
    name: "Numbers",
    components: {
        ButtonGroup,Timer,Phone,
        AdminLayout,BasicTable,TableOperation,EditForm, AddForm
    },
    setup(){
        // 搜索框
        const role = ref('user')
        const search = (f) => {
            console.log('子传父参数', f)
        }
        // 表头
        const { allExportExcel, selectExportExcel, replaceStr } = require("@/lqp")
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
                // tableLoading.value = true

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
        const loading = ref(false)
        const tableTitle = [
            {
                label: '号码',
                value: 'axb_number',
                sortable: false
            },
            {
                label: '企业使用情况',
                value: 'company',
                sortable: false
            },
            {
                label: '用户使用情况',
                value: 'customer',
                sortable: false
            }
        ]
        const tableData = ref([])
        const selectTableData = ref([])
        const getTableData = () => {
            loading.value = true
            post('getHistoryList', params.value).then((res)=>{
                console.log(res)
                if(res.code === 1){
                    loading.value = false
                    // 隐藏电话号码
                    res.data.forEach((item)=>{
                        item.called_number_copy = item.called_number
                        item.called_number = replaceStr(item.called_number, '****')
                        item.isCalled = false
                    })
                    tableData.value = res.data
                    total.value = res.total
                }
            })
        }
        const editFormDialog = ref(false)
        const operates = ref({
            operate: true,
            label: '操作',
        })
        const specialNumber = ref('')
        const states = ref({
            state: true,
            label: '状态',
            width: 60
        })
        const operations = ref([
            {
            types: 'edit',
            title: '编辑',
            type: 'success',
            icon: ['fas', 'pen-to-square'],

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
                // tableLoading.value = true

            }, 3000);

        }
        const cancelEditForm = (e) => {
            editFormDialog.value = e
        }
        const changeTestNumber = (e,row,index) => {
            // e返回状态，row当前行数据， index下标
            console.log('zhe',e)
            console.log(row)
            console.log(index)
            //todo


        }
        const changeState = (e,row,index) => {
            // e返回状态，row当前行数据， index下标
            console.log('zhe2',e)
            console.log(row)
            console.log(index)
            //todo


        }

        return {
            getTableData,
            total,
            params,
            replaceStr,
            selectExportExcel,
            selectTableData,
            search,
            role,
            changeState,
            changeTestNumber,
            addFormDialog,
            receiveAddForm,
            cancelAddForm,
            loading,
            operates,
            states,
            specialNumber,
            operations,
            handleOperation,
            tableTitle,
            tableData,
            editFormDialog,
            editData,
            cancelEditForm,
            receiveEditForm,
            allExportExcel
        }
    },
    mounted() {
        this.getTableData()
    }
}
</script>

