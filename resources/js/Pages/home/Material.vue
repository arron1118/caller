<template>
    <home-layout>
        <div class="grid grid-cols-4">
            <div class="col-span-1"></div>
            <div class="col-span-2 bg-white rounded shadow p-4">
                <el-form ref="addFormRef" :model="ruleForm">
                    <el-form-item label="昵称" label-width="140px" prop="username">
                        <el-input v-model.trim="ruleForm.username" type="text" autocomplete="off" />
                        <div class="text-gray-400">注：手机号用于拨号，请认真填写</div>
                    </el-form-item>
                    <el-form-item label="真实姓名" label-width="140px" prop="realname">
                        <el-input v-model.trim="ruleForm.realname" type="text" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="手机号" label-width="140px" prop="phone">
                        <el-input v-model.number="ruleForm.phone" v-model.trim="ruleForm.phone" type="text" autocomplete="off" />
                        <div class="text-gray-400">注：手机号用于拨号，请认真填写</div>
                    </el-form-item>

                    <el-form-item label="登陆IP" label-width="140px" prop="ip">
                        <el-input v-model.trim="ruleForm.ip" type="text" disabled />
                    </el-form-item>
                    <el-form-item label="最后登陆" label-width="140px" prop="time">
                        <el-input v-model.trim="ruleForm.time" type="text" disabled />
                    </el-form-item>
                    <el-form-item label="上次登陆" label-width="140px" prop="lasttime">
                        <el-input v-model.trim="ruleForm.lasttime" type="text" disabled />
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
export default {
    name: "Material",
    components: {
        HomeLayout,
    },
    setup(){
        const addFormRef = ref(null)
        const loading = ref(false)
        const ruleForm = reactive({
            username: '',
            realname: '',
            phone: '',
            ip: '',
            time: '',
            lasttime: ''
        })
        const submitAdd = async () => {
            loading.value = true
            const form = unref(addFormRef)
            if (!form) return
            try {
                await form.validate()
                const {
                    cate,
                    title,
                    phone,
                    province,
                    email,
                    comment,
                } = ruleForm
                const params = {
                    cate: cate,
                    title: title,
                    phone: phone,
                    province: province,
                    email: email,
                    comment: comment
                }
                console.log('开通参数', params, loading.value)
                context.emit('clickAdd', params, loading.value)
                // todo
            } catch (error) {
            }
        }
        const cancelAdd = async () => {
            context.emit('clickCancelAdd', false)
        }
        return{
            addFormRef,
            ruleForm,
            loading,
            submitAdd,
            cancelAdd,
        }
    }
}
</script>

<style scoped>

</style>
