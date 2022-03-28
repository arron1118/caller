<template>
    <admin-layout title="Dashboard">
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
               <div class="m-2">
                   <el-button type="primary" @click="dialogFormVisible = true">开通账户</el-button>
               </div>
               <Table2 :tableTitle="tableTitle" :tableData="tableData" />
           </div>
        </div>
    </admin-layout>
    <!--        弹框-->
    <el-dialog v-model="dialogFormVisible" title="开通账号">
        <add-form @clickFu="receive" @clickCancel="receive2" :loading="loading"></add-form>
    </el-dialog>
</template>

<script>
import AdminLayout from "../../Layouts/AdminLayout"
import Table2 from '../components/tables/Table2.vue'
import {reactive, unref, ref} from "vue"
import { Link } from '@inertiajs/inertia-vue3'
import { ElMessage, ElMessageBox } from "element-plus"
import AddForm from './sub/Add.vue'
export default {
    name: "User",
    components: {
        AdminLayout, Table2, Link, AddForm
    },
   setup(){
        const loading = ref(false)
       const ruleFormRef = ref(null)
       const ruleForm =  reactive({
           name: '',
           number: ''
       })
       const submitForm = async () => {
           const form = unref(ruleFormRef)
           console.log('zhe', form)
           if (!form) return
           try {
               await form.validate()
               const { name, number } = ruleForm
               const params = {name: name, number: number}
               console.log('参数', params)
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
       const tableTitle = [
           {
               label: '记事本',
               value: 'name'
           },
           {
               label: '已使用小号',
               value: 'miniNumber'
           },
           {
               label: '余额',
               value: 'money'
           }

       ]
       const tableData = [
           {
               id: 1,
               name: '湖北太初',
               miniNumber: '123456',
               money: '100'
           },
           {
               id: 2,
               name: '广州聚合',
               miniNumber: '789654',
               money: '200'
           }

       ]
        const receive = (e, r) =>{
           console.log('zhe',e)
            console.log('zhe',r)
            loading.value = r
            // 提交参数处理完成后，后台返回数据成功后，关闭加载。提示成功。刷新页面。
            setTimeout(function(){ loading.value = false }, 3000);
            dialogFormVisible.value = false

       }
       const receive2 = (e) => {
           dialogFormVisible.value = e
       }
       return {
           loading,
           ruleForm,
           resetForm,
           submitForm,
           ruleFormRef,
           tableTitle,
           tableData,
           dialogFormVisible,
           receive,
           receive2
       }
   }
}
</script>

<style scoped>

</style>
