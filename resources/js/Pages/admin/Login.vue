<template>
    <div class="el-container min-h-screen" style="background: url('../../../img/bg0.png') no-repeat center; background-size: 100% auto">
   <div class="bg-white bg-opacity-70 m-auto p-4 rounded-md shadow">
       <div class="text-2xl text-center mb-8 mt-4 font-semibold text-brand">喵头鹰调用系统</div>
       <el-form
           ref="ruleFormRef"
           :model="ruleForm"
           :rules="rules"
           class="demo-ruleForm"
           :size="formSize"
       >
           <el-form-item prop="name">
               <el-input v-model.trim="ruleForm.name" placeholder="用户名" :prefix-icon="User"/>
           </el-form-item>
           <el-form-item prop="password">
               <el-input v-model.trim="ruleForm.password" placeholder="密码" :prefix-icon="View"/>
           </el-form-item>
           <el-form-item prop="img">
              <div class="grid grid-cols-2 gap-4">
                  <el-input v-model.trim="ruleForm.img" placeholder="验证码"/>
                  <el-image src="../../../img/captcha.jpg" fit="contain" class="h-8"  />
              </div>
           </el-form-item>
           <el-form-item>
                   <el-checkbox label="记住密码" name="checked" v-model="checked" />
           </el-form-item>
       </el-form>
       <div class="text-center mb-4">
           <el-button type="primary" @click="submitForm()"
           >登入</el-button
           >
           <el-button @click="resetForm()">重置</el-button>
       </div>
   </div>
    </div>
</template>

<script>
import { reactive, ref, unref } from 'vue'
export default {
    name: "Login",
    components: {  },
    setup(props){
        const { User, View } = require("@element-plus/icons-vue")
        const ruleFormRef = ref(null)
        const formSize = ref('default')
        const ruleForm =  reactive({
            name: '',
            password: '',
            img: ''
        })
        const checked = ref(false)
        const rules = reactive({
            name: [
                { required: true, message: '请输入用户名', trigger: 'blur' },

            ],
            password: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { min: 6, max: 16, message: '长度应该为6-16', trigger: 'blur' },
            ],
            img: [
                { required: true, message: '请输入验证码', trigger: 'blur' }
            ],
        })
        // 提交
        const submitForm = async () => {
            const form = unref(ruleFormRef)
            console.log('zhe', form)
           if (!form) return
            try {
               await form.validate()
                const { name, password, img } = ruleForm
                const params = {name: name, password: password, img: img, checked: checked.value}
                console.log('参数', params)
                // todo
            } catch (error) {

            }
        }
        // 重置
        const resetForm = () => {
            const form = unref(ruleFormRef)
            if (!form) return
            form.resetFields()
        }
            return{
                checked,
                User,
                View,
                ruleFormRef,
                formSize,
                ruleForm,
                rules,
                submitForm,
                resetForm

        }
    }
}
</script>

<style scoped>


</style>
