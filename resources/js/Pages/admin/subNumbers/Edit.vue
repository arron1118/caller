<template>
    <div>
        <el-form ref="editFormRef" :model="ruleForm2">
            <el-form-item label="号码" label-width="140px" prop="number">
                <el-input v-model.trim="editData.axb_number" autocomplete="off" maxlength="11" />
            </el-form-item>
            <!--          提交-->
            <div class="flex flex-row justify-center mt-8">
                <el-button @click="cancelAdd()">取消</el-button>
                <el-button type="primary" :loading="loading" @click="submitEdit()"
                >确定</el-button
                >
            </div>
        </el-form>
    </div>
</template>

<script>
import {ref, reactive, unref} from "vue"
import {ElMessage} from "element-plus";

export default {
    name: "Edit",
    setup(props, context){
        const { code } = require("@/lqp")
        const width = ref(60)
        const editFormRef = ref(null)
        const loading = ref(props.loading)
        const ruleForm2 = reactive({
            number: ''
        })
        const submitEdit = async () => {
            loading.value = true
            const form = unref(editFormRef)
            if (!form) return
            try {
                await form.validate()
                const {
                    number
                } = ruleForm2
                const params = {
                    number: number
                }
                if(!code(params.number)){
                    ElMessage({
                        type: 'warning',
                        message: '请输入11位数的号码！'
                    })
                    return false
                }
                console.log('haoma参数', params, loading.value)
                context.emit('clickEdit', params, loading.value)
                // todo
            } catch (error) {
            }
        }
        const cancelAdd = async () => {
            context.emit('clickCancelEdit', false)
        }

        return{
            width,
            editFormRef,
            ruleForm2,
            loading,
            submitEdit,
            cancelAdd,
        }
    },
    props:['loading', 'editData'],
    methods: {}
}
</script>
<style scoped>

</style>
