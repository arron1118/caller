<template>
    <div>
        <el-form
            ref="addFormRef"
            :model="ruleForm"
            :rules="rules"
        >
            <el-form-item label="类型" label-width="140px" prop="cate">
                <el-select v-model="ruleForm.cate" placeholder="请选择类型">
                    <el-option label="Zone No.1" value="shanghai" />
                    <el-option label="Zone No.2" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="客户名称" label-width="140px" prop="title">
                <el-input v-model.trim="ruleForm.title" autocomplete="off" />
            </el-form-item>
            <el-form-item label="手机号" label-width="140px" prop="phone">
                <el-input v-model.trim="ruleForm.phone" type="text" autocomplete="off" />
            </el-form-item>
            <el-form-item label="所在地" label-width="140px" prop="province">
                <el-input v-model.trim="ruleForm.province" type="text" autocomplete="off" />
            </el-form-item>
            <el-form-item label="邮箱" label-width="140px" prop="email">
                <el-input v-model.trim="ruleForm.email" type="text" autocomplete="off" />
            </el-form-item>
            <el-form-item label="备注" label-width="140px" prop="comment">
                <el-input type="textarea" v-model.trim="ruleForm.comment" autocomplete="off" />
            </el-form-item>
<!--          提交-->
            <div class="flex flex-row justify-center mt-8">
                <el-button @click="cancelAdd()">取消</el-button>
                <el-button type="primary" :loading="loading" @click="submitAdd()"
                >添加</el-button
                >
            </div>
        </el-form>
    </div>
</template>

<script>
import {ref, reactive, unref} from "vue"
export default {
    name: "Add",
    setup(props, context){
        const { checkMobile, checkTitle } = require("@/validator")
        const addFormRef = ref(null)
        const loading = ref(props.loading)
        const ruleForm = reactive({
            cate: '',
            title: '',
            phone: '',
            province: '',
            email: '',
            comment: ''
        })
        const rules = reactive({
            title:[{
                validator: checkTitle,
                required: true,
                trigger: 'blur'
            }],
            phone: [{
                validator: checkMobile,
                required: true,
                trigger: 'blur'
            }]
        })
        const submitAdd = async () => {
            loading.value = true
            const formEl = unref(addFormRef)
            if (!formEl) return
            let fields = ["title", "phone"]
            formEl.validateField(fields, (valid)=>{
                if(valid){
                    console.log("yes")
                    try {
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
                        context.emit('submitAdd', params, loading.value)
                        // todo
                    } catch (error) {
                    }
                }else{
                    console.log('no')
                }
            })

        }
        const cancelAdd = async () => {
            context.emit('cancelAdd', false)
        }
        return{
            rules,
            addFormRef,
            ruleForm,
            loading,
            submitAdd,
            cancelAdd,
        }
    },
    props:['loading']
}
</script>
<style scoped>

</style>
