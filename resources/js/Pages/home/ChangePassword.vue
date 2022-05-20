<template>
    <home-layout>
        <div class="grid grid-cols-4">
            <div class="col-span-1"></div>
            <div class="col-span-2 bg-white rounded shadow p-4">
                <el-form ref="addFormRef" :model="ruleForm">
                    <el-form-item label="旧的密码" label-width="140px" prop="old_password">
                        <el-input v-model.trim="ruleForm.old_password" type="text" placeholder="请输入旧的密码" />
                    </el-form-item>
                    <el-form-item label="新的密码" label-width="140px" prop="new_password">
                        <el-input v-model.trim="ruleForm.new_password" type="text" placeholder="请输入新的密码" />
                    </el-form-item>
                    <el-form-item label="确认密码" label-width="140px" prop="confirm_password">
                        <el-input v-model.trim="ruleForm.confirm_password" type="text" placeholder="请输入确认密码" />
                    </el-form-item>
                    <!--          提交-->
                    <div class="flex flex-row justify-center mt-8">
                        <el-button @click="cancelAdd()">取消</el-button>
                        <el-button type="primary" :loading="loading" @click="submitAdd()"
                        >保存</el-button
                        >
                    </div>
                </el-form>
            </div>
            <div class="col-span-1"></div>
        </div>
    </home-layout>
</template>

<script>
import HomeLayout from "@/Layouts/HomeLayout";
import {reactive, ref, unref} from "vue"
import {ElMessage} from "element-plus";
import { post } from "@/http/request"
export default {
    name: "Material",
    components: {
        HomeLayout,
    },
    setup(){
        const materialData = ref([])
        const url = ref('getHistoryList')
        const where = ref({
            limit: 1,
            page: 1
        })
        const getData =  () => {
            post(url.value, where.value).then((res)=> {
                console.log('ziliao', res)
                materialData.value = res.data[0]
            })
        }
        const addFormRef = ref(null)
        const loading = ref(false)
        const ruleForm = reactive({
            old_password: '',
            new_password: '',
            confirm_password: ''
        })
        const submitAdd = async () => {
            loading.value = true
            const form = unref(addFormRef)
            if (!form) return
            try {
                await form.validate()
                const {
                    old_password,
                    new_password,
                    confirm_password
                } = ruleForm
                const params = {
                    old_password: old_password,
                    new_password: new_password,
                    confirm_password: confirm_password
                }
                console.log('开通参数', params)
                setTimeout(function () {
                    loading.value = false
                    ElMessage({
                        type: 'success',
                        // message: `action: ${action}`,
                        message: '已提交'
                    })
                    // 重载表格数据

                }, 3000);

                // todo
            } catch (error) {
            }
        }
        const cancelAdd = async () => {
            loading.value = false
            return false
        }
        return{
            materialData,
            url,
            where,
            getData,
            addFormRef,
            ruleForm,
            loading,
            submitAdd,
            cancelAdd,
        }
    },
    mounted() {
        this.getData()
    },
}
</script>

<style scoped>

</style>
