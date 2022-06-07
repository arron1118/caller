<template>
    <company-layout title="Dashboard">
        <div class="mb-6 bg-white rounded shadow pt-4">
            <search-form :role="role" @clickSearch="search"></search-form>
        </div>
        <div class="mb-6 bg-white rounded shadow p-4">
            <div class="border rounded">
                <el-row class="relative">
                    <el-col :span="2" class="border-r">
                        <v-asides @getTreeId="getTreeId"></v-asides>
                    </el-col>
                    <el-col :span="22">
                        <basic-table
                            :tableTitle="tableTitle"
                            :operates="operates"
                            :where="params"
                            :url="'getHistoryList'"
                            :exportName="exportName"
                            :isTest="isTest"
                            :status="status"
                            :loading="loading"
                            :openAccountSlot="true"
                            @getIsTest="getIsTest"
                            @getStatus="getStatus"
                            @dialogUserList="dialogUserList"
                        >
                            <template v-slot:openAccountSlot="scope">
                                <div>
                                    <el-button type="primary" @click="addFormDialog = true">开通账户</el-button>
                                    <span class="pl-2 text-gray-400">注：点击'已开通用户'列可查看用户列表内容</span>
                                </div>
                            </template>
                            <template v-slot:IsTest="scope">
                                <span
                                    :class="scope.scope.row.is_test === 0 ? '' : ''"
                                >{{ scope.scope.row.is_test === 0 ? "是" : "否" }}</span>
                            </template>
                            <template v-slot:status="scope">
                                <el-switch
                                    v-model="scope.scope.row.status"
                                    inline-prompt
                                    active-text="正常"
                                    inactive-text="禁用"
                                    active-color="#E6A23C"
                                    :width="status.width"
                                    @change="changeStatus($event, scope.scope.row, scope.scope.$index)"
                                />
                            </template>
                            <template v-slot:operates="scope">
                                <table-operation
                                    :operations="operations"
                                    :rawData="scope.scope.row"
                                    @handleOperation="handleOperation"
                                ></table-operation>
                            </template>
                        </basic-table>
                    </el-col>
                </el-row>
            </div>
        </div>
    </company-layout>
    <!--        弹框-->
    <el-dialog v-model="addFormDialog" title="开通账号">
        <add-form @clickAdd="receiveAddForm" @clickCancelAdd="cancelAddForm" :loading="loading"></add-form>
    </el-dialog>
    <el-dialog v-model="editFormDialog" title="编辑">
        <edit-form @clickEdit="receiveEditForm" @clickCancelEdit="cancelEditForm" :loading="loading"
                   :editData="editData"></edit-form>
    </el-dialog>
    <el-dialog v-model="userLists" title="已开通用户" :fullscreen="true">
        <user-table></user-table>
    </el-dialog>
</template>

<script>
import CompanyLayout from "@/Layouts/CompanyLayout";
import SearchForm from "@/Pages/company/components/forms/searchForm.vue";
import BasicTable from '@/Pages/common/tables/BasicTable.vue';
import TableOperation from "@/Pages/common/tables/TableOperation";
import ButtonGroup from '@/Pages/common/buttons/ButtonGroup.vue';
import AddForm from '@/Pages/company/sub/subUser/Add.vue'
import EditForm from '@/Pages/company/sub/subUser/Edit.vue'
import UserTable from '@/Pages/company/sub/subUser/List.vue'
import VAsides from '@/Pages/company/vAsides/VAsides.vue'
import {h, ref} from "vue"
import {ElMessage, ElMessageBox} from "element-plus";
import {Phone} from '@element-plus/icons-vue'

export default {
    name: "User",
    components: {
        ButtonGroup,Phone,
        CompanyLayout, SearchForm, BasicTable, TableOperation, EditForm, AddForm, UserTable, VAsides
    },
    setup() {
        const role = ref('user')
        const params = ref({
            page: 1,
            limit: 15,
        })
        const tableTitle = ref([
            {
                label: 'ID',
                value: 'id',
                sortable: false,
                show: true
            },
            {
                label: '账号',
                value: 'username',
                sortable: false,
                show: true
            },
            {
                label: '手机号',
                value: 'phone',
                sortable: false,
                show: true
            },
            {
                label: '小号',
                value: 'number',
                sortable: false,
                show: true
            },
            {
                label: '客户数量',
                value: 'customer_count',
                sortable: false,
                show: true
            },
            {
                label: '呼叫总数',
                value: 'call_history_count',
                sortable: false,
                show: true
            },
            {
                label: '总消费',
                value: 'expense_sum',
                sortable: true,
                show: true
            },
            {
                label: '到期日期',
                value: 'test_endtime',
                sortable: false,
                show: true
            },
            {
                label: '登录时间',
                value: 'logintime',
                sortable: false,
                show: true
            }
        ])
        const addFormDialog = ref(false)
        const editFormDialog = ref(false)
        const operates = ref({
            operate: true,
            label: '操作',
        })
        const specialUser = ref('')
        const openAccount = ref('')
        const isTest = ref({
            testNumber: true,
            label: '测试账号',
            width: 60
        })
        const status = ref({
            state: true,
            label: '状态',
            width: 60
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
        const editData = ref({})
        const userLists = ref(false)
        const exportName = ref('用户管理报表')
        const loading = ref(false)
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
        const getIsTest = (v) => {
            console.log('zhe', v)
            // todo

        }
        const getStatus = (v) => {
            console.log('p', v)
            // todo

        }
        const getTreeId = (v) => {
            console.log('id', v)
        }
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
        const changeStatus = (e, row, index) => {
            // e返回状态，row当前行数据， index下标
            console.log('zhe2', e)
            console.log(row)
            console.log(index)
            //todo
        }
        const dialogUserList = (v, id) => {
            console.log(v)
            console.log(id)
            userLists.value = v
        }
        return {
            loading,
            openAccount,
            exportName,
            userLists,
            dialogUserList,
            params,
            search,
            role,
            changeStatus,
            addFormDialog,
            receiveAddForm,
            cancelAddForm,
            operates,
            isTest,
            status,
            specialUser,
            operations,
            handleOperation,
            tableTitle,
            editFormDialog,
            editData,
            cancelEditForm,
            receiveEditForm,
            getTreeId,
            getStatus,
            getIsTest
        }
    }
}
</script>

