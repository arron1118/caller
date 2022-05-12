<template>
    <el-form class="px-6" ref="editFormRef" :model="ruleForm" :label-position="labelPosition">
        <el-form-item label="小号" label-width="140px" prop="number_store_id">
            <el-select v-model="editData.number_store_id" placeholder="请选择名下小号">
                <el-option label="Zone No.1" value="shanghai" />
                <el-option label="Zone No.2" value="beijing" />
            </el-select>
        </el-form-item>
        <el-form-item label="手机号" label-width="140px" prop="phone">
            <el-input v-model.trim="editData.phone" autocomplete="off" />
            <div class="text-xs text-gray-400">提示：必须提供正确的手机号才能进行拨号</div>
        </el-form-item>
        <el-form-item label="账号" label-width="140px" prop="username">
            <el-input v-model.trim="editData.username" autocomplete="off" />
            <div class="text-xs text-gray-400">提示：此昵称作为登录账号使用，创建后暂不支持更改</div>
        </el-form-item>
        <el-form-item label="密码" label-width="140px" prop="password">
            <el-input v-model.trim="editData.password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="测试账号" label-width="140px" prop="is_test">
            <el-switch
                v-model="editData.is_test"
                inline-prompt
                active-text="是"
                inactive-text="否"
                :width="width"
                @change="changeSwitch"
            />
        </el-form-item>
        <el-form-item label="结束时间" label-width="140px" prop="test_endtime" v-show="editData.is_test">
            <div>
                <div class="block">
                    <el-date-picker
                        v-model="editData.test_endtime"
                        type="datetime"
                        placeholder=""
                        @change="handleChangeDateTime"
                        value-format="YYYY-MM-DD hh:mm:ss"
                    />
                </div>
                <div class="text-xs text-gray-400">提示：超过测试时间将禁止拨号，空为无限制。</div>
            </div>

        </el-form-item>
        <el-form-item label="限制拨打数" label-width="140px" prop="limit_call_number" v-show="editData.is_test">
            <div>
                <div class="block">
                    <el-input-number
                        v-model="editData.limit_call_number"
                        :min="0"
                        controls-position="right"
                        @change="handleChangeLimitCallNumber"
                    />
                </div>
                <div class="text-xs text-gray-400">提示：0 为无限制</div>
            </div>
        </el-form-item>
    </el-form>
    <div class="flex flex-row justify-center mt-8">
        <el-button @click="cancelAdd()">取消</el-button>
        <el-button type="primary" :loading="loading" @click="submitEdit()"
        >开通</el-button
        >
    </div>
</template>

<script>
import {ref, reactive, unref} from "vue"
import BasicTabs from '@/Pages/components/tabs/BasicTabs'
import ImageUpload from "@/Pages/components/plugins/ImageUpload";
export default {
    name: "Edit",
    components: {
        BasicTabs,ImageUpload
    },
    setup(props, context){
        // forms
        const labelPosition = ref('left')
        const width = ref(60)
        const editFormRef = ref(null)
        const loading = ref(props.loading)
        const ruleForm = reactive(props.editData)
        const changeSwitch = (val) =>{
            console.log(val)
            ruleForm.is_test = val
        }
        const handleChangeLimitCallNumber = (value) => {
            ruleForm.limit_call_number = value
        }
        const handleChangeDateTime = (value) => {
            ruleForm.test_endtime = value
        }
        const submitEdit = async () => {
            loading.value = true
            const form = unref(editFormRef)
            if (!form) return
            try {
                await form.validate()
                const {
                    number_store_id,
                    phone,
                    username,
                    password,
                    is_test,
                    test_endtime,
                    limit_call_number
                } = ruleForm
                const params = {
                    number_store_id: number_store_id,
                    phone: phone,
                    username: username,
                    password: password,
                    is_test: is_test,
                    test_endtime: test_endtime,
                    limit_call_number: limit_call_number
                }
                console.log('开通参数', params, loading.value)
                context.emit('clickEdit', params, loading.value)
                // todo
            } catch (error) {
            }
        }
        const cancelAdd = () => {
            context.emit('clickCancelEdit', false)
        }
        return{
            changeSwitch,
            width,
            handleChangeLimitCallNumber,
            editFormRef,
            ruleForm,
            loading,
            submitEdit,
            cancelAdd,
            handleChangeDateTime,
            labelPosition
        }
    },
    props:['loading', 'editData'],
}
</script>

<style scoped>

</style>
