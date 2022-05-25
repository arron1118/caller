<template>
    <div>
        <el-form ref="editFormRef" :model="ruleForm">
            <el-form-item label="类型" label-width="140px" prop="cate">
                <el-select v-model="editData.cate" placeholder="请选择类型">
                    <el-option label="Zone No.1" value="shanghai" />
                    <el-option label="Zone No.2" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="客户名称" label-width="140px" prop="title">
                <el-input v-model.trim="editData.title" autocomplete="off" />
            </el-form-item>
            <el-form-item label="手机号" label-width="140px" prop="phone">
                <el-input v-model.trim="editData.phone" type="text" autocomplete="off" />
            </el-form-item>
            <el-form-item label="所在地" label-width="140px" prop="province">
                <el-input v-model.trim="editData.province" type="text" autocomplete="off" />
            </el-form-item>
            <el-form-item label="邮箱" label-width="140px" prop="email">
                <el-input v-model.trim="editData.email" type="text" autocomplete="off" />
            </el-form-item>
            <el-form-item label="备注" label-width="140px" prop="comment">
                <el-input type="textarea" v-model.trim="editData.comment" autocomplete="off" />
            </el-form-item>
            <div class="flex flex-row justify-center mt-8">
                <el-button @click="cancelEdit()">取消</el-button>
                <el-button type="primary" :loading="loading" @click="submitEdit()"
                >开通</el-button
                >
            </div>
        </el-form>
    </div>
</template>

<script>
import {ref, reactive, unref} from "vue"
export default {
    name: "Edit",
    setup(props, context){
        const editFormRef = ref(null)
        const loading = ref(props.loading)
        const ruleForm = reactive(props.editData)
        const submitEdit = async () => {
            loading.value = true
            const form = unref(editFormRef)
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
                console.log('编辑参数', params, loading.value)
                context.emit('submitEdit', params, loading.value)
            } catch (error) {
            }
        }
        const cancelEdit = async () => {
            context.emit('cancelEdit', false)
        }
        return{
            editFormRef,
            ruleForm,
            loading,
            submitEdit,
            cancelEdit,
        }
    },
    props:['loading', 'editData'],
}
</script>

<style scoped>

</style>
