<template>
    <div>
        <el-form ref="addFormRef" :model="ruleForm">
            <el-form-item label="支付方式" label-width="140px" prop="pay_type">
                <el-radio-group v-model="ruleForm.pay_type">
                    <el-radio :label="1" fill="#67C23A">微信</el-radio>
                    <el-radio :label="2">支付宝</el-radio>
                    <el-radio :label="3">手动充值</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="金额/元" label-width="140px" prop="money">
                <el-input-number
                    v-model="ruleForm.money"
                    controls-position="right"
                />
            </el-form-item>
<!--          提交-->
            <div class="flex flex-row justify-center mt-8">
                <el-button @click="cancelAdd()">取消</el-button>
                <el-button type="primary" :loading="loading" @click="submitAdd()"
                >充值</el-button
                >
            </div>
        </el-form>
    </div>
</template>

<script>
import {ref, reactive, unref} from "vue"
export default {
    name: "Add",
    components: {

    },
    setup(props, context){
        const fill = ref('#67C23A')
        const addFormRef = ref(null)
        const loading = ref(props.loading)
        const ruleForm = reactive({
            pay_type: 1,
            money: 0
        })
        const submitAdd = async () => {
            loading.value = true
            const form = unref(addFormRef)
            if (!form) return
            try {
                await form.validate()
                const {
                    pay_type,
                    money
                } = ruleForm
                const params = {
                    pay_type: pay_type,
                    money: money
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
            fill,
            addFormRef,
            ruleForm,
            loading,
            submitAdd,
            cancelAdd,
        }
    },
    props:['loading'],
    methods: {}
}
</script>
<style scoped>

</style>
