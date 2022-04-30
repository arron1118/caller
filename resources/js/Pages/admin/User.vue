<template>
    <admin-layout title="Dashboard">
        <div class="mb-6 bg-white rounded shadow pt-4">
            <search-form :role="role" @clickSearch="search"></search-form>
        </div>
        <div class="mb-6 bg-white rounded shadow p-4">
            <div class="border rounded">
                <div class="m-2 flex flex-row justify-between border-b pb-2">
                    <div>
                        <el-button type="primary" @click="addFormDialog = true">开通账户</el-button>
                        <span class="pl-2 text-gray-400">注：点击'已开通用户'列可查看用户列表内容</span>
                    </div>
                    <div class="flex flex-column justify-center items-center">
                        <el-button type="" plain @click="selectExportExcel(selectTableData,tableTitle,'用户管理报表')">选择导出</el-button>
                        <el-button type="" plain @click="allExportExcel(tableData,tableTitle,'用户管理报表')">全部导出</el-button>
                        <el-button type="" plain class="mr-2"><el-icon><refresh /></el-icon></el-button>
                        <el-cascader
                            :options="tableTitle"
                            :props="multiple"
                            @change="handleChange"
                            placeholder="筛选列"
                            clearable
                            collapse-tags
                        />
                    </div>
                </div>
                <el-row class="relative">
                    <el-col :span="2" class="border-r">
                        <v-asides @getTreeId="getTreeId"></v-asides>
                    </el-col>
                    <el-col :span="22">
                        <basic-table
                            :tableTitle="tableTitle"
                            :tableData="tableData"
                            :loading="loading"
                            :operates="operates"
                            :testNumbers="testNumbers"
                            :states="states"
                            @getTestNumbers="getTestNumbers"
                            @getStates="getStates"
                            :specialNumber="specialNumber"
                            :specialUser="specialUser"
                            :selectionType="true"
                            :pagination="true"
                            :total="total"
                            :params="params"
                            :getTableData="getTableData"
                            @selectExports="selectExportData"
                            @dialogUserList="dialogUserList"
                        >
                            <template v-slot:specialNumber="scope">
                                <el-icon><phone color="#409EFC"/></el-icon>
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
        <edit-form @clickEdit="receiveEditForm" @clickCancelEdit="cancelEditForm" :loading="loading" :editData="editData"></edit-form>
    </el-dialog>
    <el-dialog v-model="userLists" title="已开通用户" :fullscreen="true">
       <user-table></user-table>
    </el-dialog>
</template>

<script>
import AdminLayout from "@/Layouts/AdminLayout";
import SearchForm from "@/Pages/components/forms/searchForm.vue";
import BasicTable from '@/Pages/components/tables/BasicTable.vue';
import TableOperation from "@/Pages/components/tables/TableOperation";
import ButtonGroup from '@/Pages/components/buttons/ButtonGroup.vue';
import AddForm from '@/Pages/admin/subUser/Add.vue'
import EditForm from '@/Pages/admin/subUser/Edit.vue'
import UserTable from '@/Pages/admin/subUser/List.vue'
import PrintTable from '@/Pages/components/tables/PrintTable.vue'
import {h, ref} from "vue"
import {ElMessage, ElMessageBox} from "element-plus";
import {post} from "@/http/request";
import {Timer, Phone, Menu, Loading, Refresh, TurnOff} from '@element-plus/icons-vue'
import VAsides from '@/Pages/admin/vAsides/VAsides.vue'
export default {
    name: "CallHistoryList",
    components: {
        ButtonGroup,Timer,Phone,Menu,Loading,Refresh,TurnOff,
        AdminLayout, SearchForm,BasicTable,TableOperation,EditForm, AddForm,PrintTable,UserTable,VAsides
    },
    setup(){
        // 搜索框
        const role = ref('user')
        const search = (f) => {
            console.log('子传父参数', f)
        }
        // 表头
        const arr = ref([])
        const multiple = { multiple: true }
        const handleChange = (value) => {
            arr.value=value
            console.log(arr.value)
            // tableTitle.value.forEach((item)=>{
            //     console.log(item)
            //     // if(item.value.indexOf(arr.value) > -1){
            //     //     return item.value.show = false
            //     // }
            // })
        }
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

            }, 3000);

        }
        const cancelAddForm = (e) => {
            addFormDialog.value = e
        }
        const getTestNumbers = (v) => {
            console.log('支付方式',v)
            // todo

        }
        const getStates = (v) => {
            console.log('支付方式',v)
            // todo

        }
        // 表侧边栏
        const getTreeId = (v) => {
            console.log('id', v)
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

        ]
        const tableData = ref([])
        const selectTableData = ref([])
        const getTableData = async () => {
            loading.value = true
            post('getHistoryList', params.value).then((res)=>{
                console.log(res)
                if(res.code === 1){
                    loading.value = false
                    // 星号隐藏号码
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
        const specialUser = ref('')
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
        const userLists = ref(false)
        const dialogUserList = (v, id) => {
            console.log(v)
            console.log(id)
            userLists.value = v
        }
        return {
            arr,
            multiple,
            handleChange,
            userLists,
            dialogUserList,
            getTableData,
            total,
            params,
            replaceStr,
            selectExportExcel,
            selectTableData,
            search,
            role,
            changeState,
            addFormDialog,
            receiveAddForm,
            cancelAddForm,
            loading,
            operates,
            testNumbers,
            states,
            specialNumber,
            specialUser,
            operations,
            handleOperation,
            tableTitle,
            tableData,
            editFormDialog,
            editData,
            cancelEditForm,
            receiveEditForm,
            allExportExcel,
            getTreeId,
            getStates,
            getTestNumbers

        }
    },
    computed: {
        tableTitle() {
            // 筛选是否可见
            return this.tableTitle.filter(item => item.show)
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

