<template>
    <admin-layout title="Dashboard">
            <div class="border rounded">
                <basic-table
                    :tableTitle="tableTitle"
                    :operates="operates"
                    :where="params"
                    :url="'getHistoryList'"
                    :exportName="exportName"
                    :loading="loading"
                    :addNumberSlot="true"
                >
                    <template v-slot:addNumberSlot="scope">
                        <div>
                            <el-button type="primary" @click="addFormDialog = true">添加</el-button>
                        </div>
                    </template>

                    <template v-slot:operates="scope">
                        <table-operation
                            :operations="operations"
                            :rawData="scope.scope.row"
                            @handleOperation="handleOperation"
                        ></table-operation>
                    </template>
                </basic-table>
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
import BasicTable from '@/Pages/common/tables/BasicTable.vue';
import TableOperation from "@/Pages/common/tables/TableOperation";
import AddForm from '@/Pages/admin/sub/subNumbers/Add.vue'
import EditForm from '@/Pages/admin/sub/subNumbers/Edit.vue'
import {h, ref} from "vue"
import {ElMessage, ElMessageBox} from "element-plus";
export default {
    name: "Numbers",
    components: {
        AdminLayout,BasicTable,TableOperation,EditForm, AddForm
    },
    setup(){
        const role = ref('user')
        const exportName = ref('号码管理报表')
        const addFormDialog = ref(false)
        const params = ref({
            page: 1,
            limit: 15,
        })
        const tableTitle = ref([
            {
                label: '号码',
                value: 'axb_number',
                sortable: false,
                show: true
            },
            {
                label: '企业使用情况',
                value: 'company',
                sortable: false,
                show: true
            },
            {
                label: '用户使用情况',
                value: 'customer',
                sortable: false,
                show: true
            }
        ])
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
        const loading = ref(false)
        const search = (f) => {
            console.log('子传父参数', f)
            params.value = Object.assign({}, params.value, f)
        }
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
            loading,
            exportName,
            params,
            search,
            role,
            changeState,
            changeTestNumber,
            addFormDialog,
            receiveAddForm,
            cancelAddForm,
            operates,
            states,
            specialNumber,
            operations,
            handleOperation,
            tableTitle,
            editFormDialog,
            editData,
            cancelEditForm,
            receiveEditForm,
        }
    }
}
</script>

