<template>
    <div class="flex justify-content-center min-h-screen bg-gray-50">
        <div class="flex flex-row m-auto" style="width: 1080px; height: 500px; ">
            <div class="mr-5 p-4 shadow-2xl bg-gradient-to-br from-cyan-500 to-sky-600" style="width: 660px; ">
                <div class="text-base p-20 text-white">
                    <div class="text-xl mb-5 flex">
                        <img class="w-12 h-12 mr-5" src="/img/logo.png" />
                        <span class="inline-block pt-2 ">{{ $page.props.site.siteName }}</span>
                    </div>
                    <div class="leading-8 text-slate-200">
                        东莞汇邦软件科技有限公司位于东莞市南城区鸿福西路南城商务大厦，是一家专注于人力资源管理软件研究、开发及解决方案的高新技术企业.，以CRM系统、OA办公系统、ERP企业管理系统博得用户广泛的好评。致力于将企业同客户互动的全过程数字化、智能化， 帮助企业提升客户满意度，实现可持续的业绩增长!
                    </div>
                </div>
            </div>
            <div class="order-last bg-white py-4 px-6 shadow-2xl" style="width: 400px ">
                <div class="text-2xl text-center mb-8 mt-4 font-semibold text-brand">登录</div>
                <el-form
                    ref="ruleFormRef"
                    :model="ruleForm"
                    :rules="rules"
                    class="demo-ruleForm"
                    :size="formSize"
                >
                    <el-form-item prop="name">
                        <el-input v-model.trim="ruleForm.name" placeholder="用户名" :prefix-icon="User" :input-style="{ textIndent: '5px' }" autofocus />
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input v-model.trim="ruleForm.password" type="password" placeholder="密码" :prefix-icon="Lock" :input-style="{ textIndent: '5px' }" show-password/>
                    </el-form-item>
                    <el-form-item prop="img">
                        <div class="grid grid-cols-2 gap-4">
                            <el-input v-model.trim="ruleForm.img" placeholder="验证码"/>
                            <el-image src="/img/captcha.jpg" fit="contain" class="h-10"/>
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <el-checkbox label="记住我" name="remember" v-model="checked"/>
                    </el-form-item>
                </el-form>
                <div class="text-center mb-4 flex flex-col">
                    <el-button type="primary" :size="formSize" @click="submitForm()">登入</el-button>
                    <!--                <el-button @click="resetForm()">重置</el-button>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref, unref } from 'vue';

export default {
    name: "Login",
    components: {
    },
    setup(props) {
        const { User, Lock } = require("@element-plus/icons-vue")
        const ruleFormRef = ref(null)
        const formSize = ref('large')
        const ruleForm = reactive({
            name: 'admin',
            password: '123456',
            img: '1234'
        })
        const remember = ref(false)
        const rules = reactive({
            name: [
                {
                    required: true,
                    message: '请输入用户名',
                    trigger: 'blur'
                },
            ],
            password: [
                {
                    required: true,
                    message: '请输入密码',
                    trigger: 'blur'
                },
                {
                    min: 6,
                    max: 16,
                    message: '长度应该为6-16',
                    trigger: 'blur'
                },
            ],
            img: [
                {
                    required: true,
                    message: '请输入验证码',
                    trigger: 'blur'
                }
            ],
        })
        return {
            remember,
            User,
            Lock,
            ruleFormRef,
            formSize,
            ruleForm,
            rules,
        }
    },
    mounted() {
        console.log(this.$page)
    },
    methods: {
        async submitForm () {
            const form = unref(this.ruleFormRef)
            console.log('zhe', form)
            if (!form) return
            try {
                await form.validate()
                const { name, password, img } = this.ruleForm
                const params = {
                    name: name,
                    password: password,
                    img: img,
                    checked: this.remember
                }
                console.log('参数', params)
                // todo
                this.$inertia.get('/company')
            } catch (error) {

            }
        },
        resetForm () {
            const form = unref(this.ruleFormRef)
            if (!form) return
            form.resetFields()
        }
    }
}
</script>

<style scoped>


</style>
