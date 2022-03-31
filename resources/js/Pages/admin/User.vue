<template>
    <admin-layout title="Dashboard">
        <div v-loading="tableLoading">
            <div class="mb-6 bg-white rounded shadow pt-4">
                <el-form
                    ref="ruleFormRef"
                    :model="ruleForm"
                    :inline="true">
                    <el-form-item class="mx-4" prop="number">
                        <el-input v-model.trim="ruleForm.number" placeholder="输入账号">
                            <template #prepend>账号</template>
                        </el-input>
                    </el-form-item>
                    <el-form-item class="mr-4" prop="name">
                        <el-input v-model.trim="ruleForm.name" placeholder="输入公司名称">
                            <template #prepend>公司名称</template>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm()">搜索</el-button>
                        <el-button @click="resetForm()">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="mb-6 bg-white rounded shadow p-4">
               <div class="border rounded">
                   <div class="m-2 flex flex-row justify-between border-b pb-2">
                       <el-button type="primary" @click="dialogFormVisible = true">开通账户</el-button>
                      <div class="flex flex-column justify-center items-center mx-4">
                          <el-button type="text" @click="allExportExcel">导出</el-button>
                          <el-button type="text" v-print="'#printId'">打印</el-button>
                      </div>
                   </div>
                   <Table2 :tableTitle="tableTitle" :tableData="tableData" :tableLoading="tableLoading" @clickTableEdit="receiveEditData" @selectExports="selectExportData"/>
               </div>
            </div>
        </div>
    </admin-layout>
    <!--        弹框-->
    <el-dialog v-model="dialogFormVisible" title="开通账号">
        <add-form @clickAdd="receiveAddForm" @clickCancelAdd="cancelAddForm" :loading="loading"></add-form>
    </el-dialog>
    <!--        弹框-->
    <el-dialog v-model="dialogFormVisible2" title="编辑">
        <edit-form @clickEdit="receiveEditForm" @clickCancelEdit="cancelEditForm" :loading="loading" :editData="editData"></edit-form>
    </el-dialog>
<!--    打印-->
    <div id="printId" style="height: 100%;" class="hidden">
        <print-table :tableData="tableData" :tableTitle="tableTitle"></print-table> 
    </div>
</template>

<script>
import AdminLayout from "../../Layouts/AdminLayout"
import Table2 from '../components/tables/Table2.vue'
import PrintTable from '../components/tables/PrintTable.vue'
import {reactive, unref, ref} from "vue"
import { Link } from '@inertiajs/inertia-vue3'
import { ElMessage, ElMessageBox } from "element-plus"
import AddForm from './sub/Add.vue'
import EditForm from './sub/Edit.vue'
export default {
    name: "User",
    components: {
        AdminLayout, Table2, Link, AddForm, EditForm, PrintTable
    },
   setup(){
       const editData = ref({})
       const loading = ref(false)
       const tableLoading = ref(false)
       const ruleFormRef = ref(null)
       const ruleForm =  reactive({
           name: '',
           number: ''
       })
       const submitForm = async () => {
           const form = unref(ruleFormRef)
           if (!form) return
           try {
               await form.validate()
               const { name, number } = ruleForm
               const params = {number: number,name: name }
               console.log('参数', params)
               if(params.name ===''){
                   ElMessage({
                       type: 'warning',
                       message: '请输入公司名称'
                   })
               }
               if(params.number ===''){
                   ElMessage({
                       type: 'warning',
                       message: '请输入账号'
                   })
               }
               // todo
           } catch (error) {
           }
       }
       const resetForm = () => {
           const form = unref(ruleFormRef)
           if (!form) return
           form.resetFields()
       }
       const dialogFormVisible  = ref(false)
       const dialogFormVisible2 = ref(false)
       const tableTitle = [
           {
               label: '账号',
               value: 'number'
           },
           {
               label: '密码',
               value: 'password'
           },
           {
               label: '公司名称',
               value: 'name'
           },
           {
               label: '小号',
               value: 'minNumber'
           },
           {
               label: '坐席',
               value: 'sit'
           },
           {
               label: '限制用户',
               value: 'limitNumber'
           },
           {
               label: '费率（元）',
               value: 'rate'
           },
           {
               label: '结束时间',
               value: 'dataTime'
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
       const receiveAddForm = (e, r) =>{
           console.log('zhe',e)
            console.log('zhe',r)
            loading.value = r
            // 提交参数处理完成后，后台返回数据成功后，关闭加载。提示成功。刷新页面。
            setTimeout(function(){
                loading.value = false
                dialogFormVisible.value = false
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
           dialogFormVisible.value = e
       }
       const receiveEditForm = (e, r) =>{
           console.log('zhe',e)
           console.log('zhe',r)
           loading.value = r
           // 提交参数处理完成后，后台返回数据成功后，关闭加载。提示成功。刷新页面。
           setTimeout(function(){
               loading.value = false
               dialogFormVisible2.value = false
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
           dialogFormVisible2.value = e
       }
       const receiveEditData = (e, r) => {
           console.log(e)
           console.log(r)
           dialogFormVisible2.value = e
           editData.value = r
           console.log('ppp', editData.value)
       }
       // 全部导出
       const excelData = ref([])
       const excelDataSelect = ref([])
       const allExportExcel = () => {
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
       // 选择导出
       const selectExportData = (value) => {
               console.log('拿到', value)
           excelDataSelect.value = value
       }
       return {
           selectExportData,
           excelData,
           excelDataSelect,
           allExportExcel,
           export2Excel,
           formatJson,
            editData,
           loading,
           tableLoading,
           ruleForm,
           resetForm,
           submitForm,
           ruleFormRef,
           tableTitle,
           tableData,
           dialogFormVisible,
           dialogFormVisible2,
           receiveEditData,
           receiveAddForm,
           cancelAddForm,
           receiveEditForm,
           cancelEditForm
       }
   }
}
</script>

<style scoped>
@media print {
    html,
    body {
        height: inherit;
    }
}
</style>
