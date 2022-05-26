<template>
    <home-layout>
        <div class="grid grid-cols-4">
            <div class="col-span-1"></div>
            <div class="col-span-2 bg-white rounded shadow p-4">
                <el-form
                    ref="editFormRef"
                    :model="editFormFiled"
                    :rules="rules"
                >
                    <el-form-item label="昵称" label-width="140px" prop="username">
                        <el-input v-model="editFormFiled.username" type="text" disabled/>
                        <div class="text-gray-400">注：此昵称作为登录账号使用，暂不支持更改</div>
                    </el-form-item>
                    <el-form-item label="真实姓名" label-width="140px" prop="realname">
                        <el-input v-model="editFormFiled.realname" type="text" placeholder="请输入真实姓名" />
                    </el-form-item>
                    <el-form-item label="手机号" label-width="140px" prop="caller_number">
                        <el-input v-model="editFormFiled.caller_number" type="text" />
                        <div class="text-gray-400">注：手机号用于拨号，请认真填写</div>
                    </el-form-item>
                    <el-form-item label="登陆IP" label-width="140px" prop="ip">
                        <el-input v-model="editFormFiled.ip" type="text" disabled />
                    </el-form-item>
                    <el-form-item label="最后登陆" label-width="140px" prop="time">
                        <el-input v-model="editFormFiled.time" type="text" disabled />
                    </el-form-item>
                    <el-form-item label="上次登陆" label-width="140px" prop="lasttime">
                        <el-input v-model="editFormFiled.lasttime" type="text" disabled />
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
import {defineComponent, reactive, ref, unref} from "vue"
import {ElMessage} from "element-plus";
import { post } from "@/http/request"
export default defineComponent({
    name: "Material",
    components: {
        HomeLayout,
    },
    setup(){
        const {checkMobile} = require("@/validator")
        const url = ref('getHistoryList')
        const where = ref({
            limit: 1,
            page: 1
        })

        const loading = ref(false)
        const getData =  () => {
            post(url.value, where.value).then((res)=> {
                editFormFiled.value = res.data[0]
            })
        }

        // 注册验证
        const editFormRef = ref(null)
        const editFormFiled = ref([])
        // 注册验证规则
        const rules = reactive({
            caller_number:[
                { validator: checkMobile,
                    required: true,
                    trigger: 'blur'
                }
            ]
        })
        const submitAdd = () => {
            const formEl = unref(editFormRef)
            if (!formEl) return
            formEl.validateField("caller_number", (valid) => {
                if (valid) {
                    console.log('submit!')
                    try {
                        const {
                            username,
                            realname,
                            phone,
                            ip,
                            time,
                            lasttime
                        } = editFormFiled
                        const params = {
                            username: username,
                            realname: realname,
                            phone: phone,
                            ip: ip,
                            time: time,
                            lasttime: lasttime
                        }
                        loading.value = true
                        console.log('开通参数', params)
                        setTimeout(function () {
                            loading.value = false
                            ElMessage({
                                type: 'success',
                                message: '已提交'
                            })
                        }, 3000);

                        // todo
                    } catch (error) {}
                } else {
                    console.log('error submit!')
                    return false
                }
            })
        }
        const cancelAdd = async () => {
            loading.value = false
            return false
        }
        return{
            rules,
            editFormFiled,
            url,
            where,
            getData,
            editFormRef,
            loading,
            submitAdd,
            cancelAdd,
        }
    },
    mounted() {
        this.getData()
    },
})
</script>

<style scoped>

</style>
