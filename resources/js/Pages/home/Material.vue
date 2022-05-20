<template>
    <home-layout>
        <div class="grid grid-cols-4">
            <div class="col-span-1"></div>
            <div class="col-span-2 bg-white rounded shadow p-4">
                <el-form ref="addFormRef" :model="ruleForm">
                    <el-form-item label="昵称" label-width="140px" prop="username">
                        <el-input v-model="materialData.username" type="text" disabled />
                        <div class="text-gray-400">注：此昵称作为登录账号使用，暂不支持更改</div>
                    </el-form-item>
                    <el-form-item label="真实姓名" label-width="140px" prop="realname">
                        <el-input v-model.trim="materialData.realname" type="text" placeholder="请输入真实姓名" />
                    </el-form-item>
                    <el-form-item label="手机号" label-width="140px" prop="phone">
                        <el-input v-model.number="materialData.phone" type="text" />
                        <div class="text-gray-400">注：手机号用于拨号，请认真填写</div>
                    </el-form-item>
                    <el-form-item label="登陆IP" label-width="140px" prop="ip">
                        <el-input v-model.trim="materialData.ip" type="text" disabled />
                    </el-form-item>
                    <el-form-item label="最后登陆" label-width="140px" prop="time">
                        <el-input v-model.trim="materialData.time" type="text" disabled />
                    </el-form-item>
                    <el-form-item label="上次登陆" label-width="140px" prop="lasttime">
                        <el-input v-model.trim="materialData.lasttime" type="text" disabled />
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
        const ruleForm = reactive(materialData.value)
        const submitAdd = async () => {
            loading.value = true
            const form = unref(addFormRef)
            if (!form) return
            try {
                await form.validate()
                const {
                    username,
                    realname,
                    phone,
                    ip,
                    time,
                    lasttime
                } = ruleForm
                const params = {
                    username: username,
                    realname: realname,
                    phone: phone,
                    ip: ip,
                    time: time,
                    lasttime: lasttime
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
