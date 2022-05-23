<template>
    <admin-layout title="Dashboard">
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
                            :selectionType="true"
                            :pagination="true"
                            :buttonGroups="true"
                            :where="params"
                            :url="'getHistoryList'"
                            :exportName="exportName"
                            :testNumbers="testNumbers"
                            :states="states"
                            :specialNumber="specialNumber"
                            :specialUser="specialUser"
                            :loading="loading"
                            :openAccountSlot="true"
                            @getTestNumbers="getTestNumbers"
                            @getStates="getStates"
                            @dialogUserList="dialogUserList"
                        >
                            <template v-slot:openAccount="scope">
                                <div>
                                    <el-button type="primary" @click="addFormDialog = true">开通账户</el-button>
                                    <span class="pl-2 text-gray-400">注：点击'已开通用户'列可查看用户列表内容</span>
                                </div>
                            </template>
                            <template v-slot:specialNumber="scope">
                                <el-icon>
                                    <phone color="#409EFC"/>
                                </el-icon>
                                <span class="">{{ scope.scope.row.called_number }}</span>
                            </template>
                            <template v-slot:specialUser="scope">
                                <span class="text-brand">{{ scope.scope.row.user_id }}</span>
                            </template>
                            <template v-slot:testNumbers="scope">
                                <span
                                    :class="scope.scope.row.testNumbers === 0 ? '' : ''"
                                >{{ scope.scope.row.testNumbers === 0 ? "是" : "否" }}</span>
                            </template>
                            <template v-slot:states="scope">
                                <el-switch
                                    v-model="scope.scope.row.state"
                                    inline-prompt
                                    active-text="正常"
                                    inactive-text="禁用"
                                    active-color="#E6A23C"
                                    :width="states.width"
                                    @change="changeState($event, scope.scope.row, scope.scope.$index)"
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
    </admin-layout>
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
import AdminLayout from "@/Layouts/AdminLayout";
import SearchForm from "@/Pages/admin/components/forms/searchForm.vue";
import BasicTable from '@/Pages/admin/components/tables/BasicTable.vue';
import TableOperation from "@/Pages/admin/components/tables/TableOperation";
import ButtonGroup from '@/Pages/admin/components/buttons/ButtonGroup.vue';
import AddForm from '@/Pages/admin/subUser/Add.vue'
import EditForm from '@/Pages/admin/subUser/Edit.vue'
import UserTable from '@/Pages/admin/subUser/List.vue'
import PrintTable from '@/Pages/admin/components/tables/PrintTable.vue'
import {h, ref} from "vue"
import {ElMessage, ElMessageBox} from "element-plus";
import {Phone} from '@element-plus/icons-vue'
import VAsides from '@/Pages/admin/vAsides/VAsides.vue'
export default {
    name: "User",
    components: {
        ButtonGroup,Phone,
        AdminLayout, SearchForm, BasicTable, TableOperation, EditForm, AddForm, PrintTable, UserTable, VAsides
    },
    setup() {
        const role = ref('user')
        const params = ref({
            page: 1,
            limit: 15,
        })
        const tableTitle = ref([
            {
                label: '编号',
                value: 'axb_number',
                sortable: false,
                show: true
            },
            {
                label: '账号',
                value: 'company',
                sortable: false,
                show: true
            },
            {
                label: '已使用小号',
                value: 'company',
                sortable: false,
                show: true
            },
            {
                label: '坐席',
                value: 'customer',
                sortable: false,
                show: true
            },
            {
                label: '限制用户数量',
                value: 'createtime',
                sortable: false,
                show: true
            },
            {
                label: '已开通用户',
                value: 'user_id',
                sortable: true,
                show: true
            },
            {
                label: '费率（￥/元）',
                value: 'call_duration',
                sortable: false,
                show: true
            },
            {
                label: '余额（￥/元）',
                value: 'call_duration',
                sortable: false,
                show: true
            },
            {
                label: '充值',
                value: 'platform',
                sortable: false,
                show: true
            },
            {
                label: '总消费',
                value: 'platform',
                sortable: false,
                show: true
            },
            {
                label: '最后登录',
                value: 'platform',
                sortable: false,
                show: true
            },
            {
                label: '到期日期',
                value: 'platform',
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
        const specialNumber = ref('')
        const specialUser = ref('')
        const openAccount = ref('')
        const testNumbers = ref({
            testNumber: true,
            label: '测试账号',
            width: 60
        })
        const states = ref({
            state: true,
            label: '状态',
            width: 60
        })
        const editData = ref({})
        const userLists = ref(false)
        const exportName = ref('用户管理报表')
        const loading = ref(false)
        const search = (f) => {
            console.log('子传父参数', f)
            params.value = Object.assign({}, params.value, f)
        }
        const receiveAddForm = (e, r) => {
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
        const getTestNumbers = (v) => {
            console.log('支付方式', v)
            // todo

        }
        const getStates = (v) => {
            console.log('支付方式', v)
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
        const changeState = (e, row, index) => {
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
            changeState,
            addFormDialog,
            receiveAddForm,
            cancelAddForm,
            operates,
            operations,
            testNumbers,
            states,
            specialNumber,
            specialUser,
            handleOperation,
            tableTitle,
            editFormDialog,
            editData,
            cancelEditForm,
            receiveEditForm,
            getTreeId,
            getStates,
            getTestNumbers
        }
    }
}
</script>

