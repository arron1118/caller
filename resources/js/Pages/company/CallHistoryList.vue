<template>
    <company-layout title="Dashboard">
        <div class="mb-6 bg-white rounded shadow pt-4">
            <search-form :role="role" @clickSearch="search"></search-form>
        </div>
        <div class="border rounded">
            <basic-table
                :tableTitle="tableTitle"
                :operates="operates"
                :where="params"
                :url="'getHistoryList'"
                :exportName="exportName"
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
    </company-layout>
    <!--    打印-->
    <div v-if="print===true">
        <div id="printId" style="height: 100%;">
            <print-table :tableTitle="tableTitle"></print-table>
        </div>
    </div>
</template>

<script>
import CompanyLayout from "@/Layouts/CompanyLayout";
import SearchForm from "@/Pages/company/components/forms/searchForm.vue";
import BasicTable from '@/Pages/common/tables/BasicTable.vue';
import TableOperation from "@/Pages/common/tables/TableOperation";
import ButtonGroup from '@/Pages/common/buttons/ButtonGroup.vue';
import AddForm from '@/Pages/company/sub/subUser/Add.vue'
import EditForm from '@/Pages/company/sub/subUser/Edit.vue'
import {h, reactive, ref} from "vue"
import {ElMessage, ElMessageBox} from "element-plus"
export default {
    name: "CallHistoryList",
    components: {
        ButtonGroup,
        CompanyLayout, SearchForm, BasicTable, TableOperation, EditForm, AddForm
    },
    setup() {
        const {replaceStr} = require("@/lqp")
        const role = ref('callHistory')
        const params = ref({
            limit: 30,
        })
        const editFormDialog = ref(false)
        const tableTitle = ref([
            {
                label: 'ID',
                value: 'id',
                sortable: false,
                show: true,
            },
            {
                label: '编号',
                value: 'subid',
                sortable: false,
                show: true,
            },
            {
                label: '操作人',
                value: 'username',
                sortable: false,
                show: true,
            },
            {
                label: '客户名称',
                value: 'customer',
                sortable: false,
                show: true,
            },
            {
                label: '被叫号码',
                value: 'called_number',
                sortable: false,
                show: true,
            },
            {
                label: '呼叫时间',
                value: 'createtime',
                sortable: true,
                show: true,
            },
            {
                label: '呼叫时长',
                value: 'call_duration',
                sortable: true,
                show: true,
            },
            {
                label: '消费金额（￥/元）',
                value: 'cost',
                sortable: false,
                show: true,
            },
            {
                label: '录音',
                value: 'cost',
                sortable: false,
                show: true,
            }

        ])
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
        const print = ref(false)
        const addFormDialog = ref(false)
        const exportName = ref('通话记录报表')
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
        return {
            exportName,
            replaceStr,
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
            editFormDialog,
            editData,
            cancelEditForm,
            receiveEditForm,
            print,
            params,
        }
    },
    mounted() {
    },
    methods: {
    }
}
</script>

