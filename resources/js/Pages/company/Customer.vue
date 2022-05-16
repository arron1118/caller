<template>
    <company-layout>
        <div class="mb-6 bg-white rounded shadow pt-4">
            <search-form :role="role" @clickSearch="search"></search-form>
        </div>
        <div class="mb-6 bg-white rounded shadow p-4">
            <div class="border rounded">
                <basic-table
                    :tableTitle="tableTitle"
                    :selectionType="true"
                    :pagination="true"
                    :buttonGroups="true"
                    :where="params"
                    :url="'getHistoryList'"
                    :exportName="exportName"
                    :showSummary="true"
                    :customerSlot="true"
                    :operates="operates"
                >
                    <template v-slot:customerSlot="scope">
                        <div>
                            <el-button type="primary" @click="addFormDialog = true">添加客户</el-button>
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
        </div>
    </company-layout>
    <!--        弹框-->
    <el-dialog v-model="addFormDialog" title="添加客户">
        <add-form @clickAdd="receiveAddForm" @clickCancelAdd="cancelAddForm" :loading="loading"></add-form>
    </el-dialog>
    <el-dialog v-model="editFormDialog" title="编辑">
        <edit-form @clickEdit="receiveEditForm" @clickCancelEdit="cancelEditForm" :loading="loading"
                   :editData="editData"></edit-form>
    </el-dialog>
</template>

<script>
import CompanyLayout from "@/Layouts/CompanyLayout";
import SearchForm from "@/Pages/company/components/forms/searchForm.vue";
import BasicTable from '@/Pages/company/components/tables/BasicTable.vue';
import AddForm from '@/Pages/company/subCustomers/Add.vue'
import EditForm from '@/Pages/company/subCustomers/Edit.vue'
import TableOperation from "@/Pages/company/components/tables/TableOperation";
import {h, ref} from "vue"
import {ElMessage, ElMessageBox} from "element-plus";
export default {
    name: "Customer",
    components: {
        CompanyLayout,
        SearchForm,
        BasicTable,
        AddForm,
        EditForm,
        TableOperation
    },
    setup(){
        const role = ref('customer')
        const addFormDialog = ref(false)
        const editFormDialog = ref(false)
        const loading = ref(false)
        const params = ref({
            page: 1,
            limit: 15,
        })
        const tableTitle = ref( [
            {
                label: '用户编号',
                value: 'axb_number',
                sortable: false,
                show: true
            },
            {
                label: '用户名称',
                value: 'company',
                sortable: false,
                show: true
            },
            {
                label: '拨号次数',
                value: 'id',
                sortable: true,
                show: true
            },
            {
                label: '接通次数(>0秒)',
                value: 'id',
                sortable: true,
                show: true
            },
            {
                label: '有效呼叫(>30秒)',
                value: 'id',
                sortable: true,
                show: true
            },
            {
                label: '时间(分)',
                value: 'createtime',
                sortable: true,
                show: true
            },
            {
                label: '消费金额（￥/元）',
                value: 'call_duration',
                sortable: true,
                show: true
            }
        ])
        const exportName = ref('')
        const operates = ref({
            operate: true,
            label: '操作',
        })
        const operations = ref([{
            types: 'edit',
            title: '编辑',
            type: 'success',
            icon: ['fas', 'pen-to-square'],

        },
            {
                types: 'del',
                title: '删除',
                type: 'danger',
                icon: ['far', 'trash-can'],

            }
        ])
        const handleOperation = (op, row) => {
            if (op.types === 'edit') {
                editFormDialog.value = true
                editData.value = row.value
            } else if (op.types === 'del') {
                console.log(row.value.id)
                ElMessageBox({
                    title: '确认删除此id=' + row.value.id + '数据吗？',
                    message: h('p', null, [
                        h('span', null, '此数据将会被'),
                        h('i', {style: 'color: #F56C6C'}, '删除'),
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
        const search = (f) => {
            console.log('子传父参数', f)
            params.value = Object.assign({}, params.value, f)
        }
        const receiveAddForm = (e, r) => {
            console.log('zhe', e)
            console.log('zhe', r)
            loading.value = r
            // 提交参数处理完成后，后台返回数据成功后，关闭加载。提示成功。刷新页面。
            setTimeout(function () {
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
        const receiveEditForm = (e, r) => {
            console.log('参数', e)
            console.log('zhe', r)
            loading.value = r
            // todo
            // 提交参数处理完成后，后台返回数据成功后，关闭加载。提示成功。刷新页面。
            setTimeout(function () {
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
        return{
            loading,
            role,
            tableTitle,
            params,
            search,
            exportName,
            addFormDialog,
            editFormDialog,
            receiveAddForm,
            cancelAddForm,
            receiveEditForm,
            cancelEditForm,
            operates,
            operations,
            handleOperation
        }
    }
}
</script>

<style scoped>

</style>
