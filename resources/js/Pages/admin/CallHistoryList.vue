<template>
    <admin-layout title="Dashboard">
        <div class="mb-6 bg-white rounded shadow pt-4">
           <search-form></search-form>
        </div>
        <div class="mb-6 bg-white rounded shadow p-4">
            <div class="border rounded">
                <div class="m-2 flex flex-row justify-between border-b pb-2">
                    <el-button type="primary" @click="addFormDialog = true">开通账户</el-button>
                    <div class="flex flex-column justify-center items-center mx-4">
                        <el-button type="text" @click="allExportExcel">导出</el-button>
                        <el-button type="text" v-print="'#printId'" @click="print=true">打印</el-button>
                    </div>
                </div>
                <basic-table
                    :tableTitle="tableTitle"
                    :tableData="tableData"
                    :tableLoading="tableLoading"
                    :operates="operates"
                    :selectionType="true"
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
       <div id="printId" style="height: 100%;" >
           <print-table :tableData="tableData" :tableTitle="tableTitle"></print-table>
       </div>
   </div>
</template>

<script>
import AdminLayout from "../../Layouts/AdminLayout";
import SearchForm from "@/Pages/components/forms/searchForm.vue";
import BasicTable from '@/Pages/components/tables/BasicTable.vue';
import TableOperation from "@/Pages/components/tables/TableOperation";
import ButtonGroup from '@/Pages/components/buttons/ButtonGroup.vue';
import AddForm from '@/Pages/admin/sub/Add.vue'
import EditForm from '@/Pages/admin/sub/Edit.vue'
import PrintTable from '@/Pages/components/tables/PrintTable.vue'
import {h, reactive, ref} from "vue"
import {ElMessage, ElMessageBox} from "element-plus";
 export default {
    name: "CallHistoryList",
    components: {
        ButtonGroup,
        AdminLayout, SearchForm,BasicTable,TableOperation,EditForm, AddForm,PrintTable
    },
    setup(){
        // 搜索框
        // 表头
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
                // tableLoading.value = true

            }, 3000);

        }
        const cancelAddForm = (e) => {
            addFormDialog.value = e
        }
        const excelData = ref([])
        const excelDataSelect = ref([])
        const allExportExcel = () => {
            //全部导出
            // 数据写入excel
            ElMessageBox.confirm('将导出为excel文件，确认导出?').then(() => {
                if(excelDataSelect.value.length > 0){
                    excelData.value = excelDataSelect.value
                }else{
                    excelData.value = tableData
                }
                console.log('excelData.value', excelData.value)
                export2Excel()
            }).catch(() => {

            })
        }
        const export2Excel = () => {
            require.ensure([], () => {
                const { export_json_to_excel } = require('@/Pages/excel/export2Excel') // 这里必须使用绝对路径，使用@/+存放export2Excel的路径
                const tHeader = ['账号', '密码', '公司名称', '小号', '坐席', '限制用户', '费率（元）', '结束时间'] // 导出的excel的表头字段
                const filterVal = ['number','password','name', 'minNumber', 'sit', 'limitNumber', 'rate', 'dataTime'] // 对象属性，对应于tHeader
                const list = excelData.value //json数组对象，接口返回的数据
                const data = formatJson(filterVal, list)
                export_json_to_excel(tHeader, data, '检测单体数据')// 导出的表格名称
            })
        }
        const formatJson = (filterVal, jsonData) => {
            return jsonData.map(v => filterVal.map(j => v[j]))
        }
        const selectExportData = (value) => {
            // 选择导出
            console.log('拿到复选框', value)
            excelDataSelect.value = value
        }
        // 表格
        const loading = ref(false)
        const editFormDialog = ref(false)
        const tableLoading = ref(false)
        const tableTitle = [
            {
                label: '账号',
                value: 'number',
                sortable: false
            },
            {
                label: '密码',
                value: 'password',
                sortable: false
            },
            {
                label: '公司名称',
                value: 'name',
                sortable: false
            },
            {
                label: '小号',
                value: 'minNumber',
                sortable: false
            },
            {
                label: '坐席',
                value: 'sit',
                sortable: false
            },
            {
                label: '限制用户',
                value: 'limitNumber',
                sortable: true
            },
            {
                label: '费率（元）',
                value: 'rate',
                sortable: false
            },
            {
                label: '结束时间',
                value: 'dataTime',
                sortable: false
            },
            {
                label: '结束时间',
                value: 'testNumber',
                sortable: false
            }

        ]
        const tableData = [
            {
                id: 1,
                number: '1509372600101482498',
                password: '123456',
                name: '湖北太初',
                minNumber: '124545656',
                sit: 100,
                limitNumber: 999,
                rate: 2,
                dataTime: '2022-03-30 12:00:00',
                testNumber: true,
                state: false
            },
            {
                id: 2,
                number: '1002222',
                password: '1234526',
                name: '湖北太初22',
                minNumber: '124545622256',
                sit: 1020,
                limitNumber: 9299,
                rate: 22,
                dataTime: '2022-03-30 12:00:00',
                testNumber: false,
                state: true
            }

        ]
        const operates = ref({
            operate: true,
            label: '操作',
        })
        const operations = ref([{
            types: 'edit',
            title: '编辑',
            type: 'primary'

        },
        {
            types: 'del',
            title: '删除',
            type: 'danger'

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
        return {
            addFormDialog,
            receiveAddForm,
            cancelAddForm,
            loading,
            operates,
            operations,
            handleOperation,
            tableTitle,
            tableData,
            tableLoading,
            editFormDialog,
            editData,
            cancelEditForm,
            receiveEditForm,
            excelData,
            excelDataSelect,
            allExportExcel,
            selectExportData,
            print



        }
    },
    methods: {
    }
}
</script>

<style scoped>

</style>
