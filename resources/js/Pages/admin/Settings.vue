<template>
    <AdminLayout>
        <el-form ref="addFormRef" :model="ruleForm">
            <el-form-item label="号码" label-width="140px" prop="number">
                <el-input v-model.trim="ruleForm.number" autocomplete="off" maxlength="11"/>
            </el-form-item>
            <!--          提交-->
            <div class="flex flex-row justify-center mt-8">
                <el-button @click="cancelAdd()">取消</el-button>
                <el-button type="primary" :loading="loading" @click="submitAdd()"
                >确定
                </el-button
                >
            </div>
        </el-form>
    </AdminLayout>
</template>

<script>
import AdminLayout from "@/Layouts/AdminLayout";
import {reactive, ref, unref} from "vue";

export default {
    name: "Settings",
    components: {
        AdminLayout,
    },
    setup(props, context) {
        const {code} = require("@/lqp")
        const width = ref(60)
        const addFormRef = ref(null)
        const loading = ref(false)
        const ruleForm = reactive({
            number: ''
        })
        const submitAdd = async () => {
            loading.value = true
            const form = unref(addFormRef)
            if (!form) return
            try {
                const {
                    number
                } = ruleForm
                const params = {
                    number: number
                }
                console.log(params)
            } catch (error) {
            }
        }
        const cancelAdd = async () => {

        }

        return {
            width,
            addFormRef,
            ruleForm,
            loading,
            submitAdd,
            cancelAdd,
        }
    },
    mounted() {
        console.log(this.$page.props.config)
    }
}
</script>

<style scoped>

</style>
