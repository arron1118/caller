<template>
    <div>
        <div class="mt-4">
            <el-form class="px-6" ref="addFormRef" :model="ruleForm" :label-position="labelPosition">
                <el-form-item label="小号" label-width="140px" prop="minNumber">
                    <el-select v-model="ruleForm.minNumber" placeholder="请选择名下小号">
                        <el-option label="Zone No.1" value="shanghai" />
                        <el-option label="Zone No.2" value="beijing" />
                    </el-select>
                </el-form-item>
                <el-form-item label="手机号" label-width="140px" prop="telNumber">
                    <el-input v-model.trim="ruleForm.telNumber" autocomplete="off" />
                    <div class="text-xs text-gray-400">提示：必须提供正确的手机号才能进行拨号</div>
                </el-form-item>
                <el-form-item label="账号" label-width="140px" prop="number">
                    <el-input v-model.trim="ruleForm.number" autocomplete="off" />
                    <div class="text-xs text-gray-400">提示：此昵称作为登录账号使用，创建后暂不支持更改</div>
                </el-form-item>
                <el-form-item label="密码" label-width="140px" prop="password">
                    <el-input v-model.trim="ruleForm.password" autocomplete="off" />
                </el-form-item>
                <el-form-item label="测试账号" label-width="140px" prop="testNumber">
                    <el-switch
                        v-model="ruleForm.testNumber"
                        inline-prompt
                        active-text="是"
                        inactive-text="否"
                        :width="width"
                        @change="changeSwitch"
                    />
                </el-form-item>
                <el-form-item label="结束时间" label-width="140px" prop="state" v-show="ruleForm2.testNumber">
                    <div>
                        <div class="block">
                            <el-date-picker
                                v-model="ruleForm2.dataTime"
                                type="datetime"
                                placeholder=""
                                @change="handleChangeDateTime"
                                value-format="YYYY-MM-DD hh:mm:ss"
                            />
                        </div>
                        <div class="text-xs text-gray-400">提示：超过测试时间将禁止拨号，空为无限制。</div>
                    </div>
                </el-form-item>
                <el-form-item label="限制拨打数量" label-width="140px" prop="limitNumber" v-show="ruleForm2.testNumber">
                    <div>
                        <div class="block">
                            <el-input-number
                                v-model="ruleForm2.limitNumber"
                                :min="0"
                                controls-position="right"
                                @change="handleChangeLimitNumber"
                            />
                        </div>
                        <div class="text-xs text-gray-400">提示：0 为无限制</div>
                    </div>
                </el-form-item>
            </el-form>
        </div>
        <div class="flex flex-row justify-center mt-8">
            <el-button @click="cancelAdd()">取消</el-button>
            <el-button type="primary" :loading="loading" @click="submitAdd()"
            >开通</el-button
            >
        </div>
    </div>
</template>

<script>
import {ref, reactive, unref} from "vue"
import BasicTabs from '@/Pages/components/tabs/BasicTabs'
import ImageUpload from "@/Pages/components/plugins/ImageUpload";
export default {
    name: "Add",
    components: {
        BasicTabs,ImageUpload
    },
    setup(props, context){
        // forms
        const labelPosition = ref('left')
        const width = ref(60)
        const addFormRef = ref(null)
        const loading = ref(props.loading)
        const ruleForm = reactive({
            minNumber: '',
            telNumber: '',
            number: '',
            password: '',
            dataTime: '',
            limitNumber: 0,
            testNumber: true
        })
        const changeSwitch = (val) =>{
           console.log(val)
        }
        const handleChangeDateTime = (value) => {
            ruleForm2.dataTime = value
        }
        const handleChangeLimitNumber = (value) => {
            ruleForm2.limitNumber = value
        }
        const submitAdd = async () => {
            loading.value = true
            const form = unref(addFormRef)
            if (!form) return
            try {
                await form.validate()
                const {
                    minNumber,
                    telNumber,
                    number,
                    password,
                    textNumber,
                    dataTime,
                    limitNumber,
                    testNumber
                } = ruleForm
                const params = {
                    minNumber: minNumber,
                    telNumber: telNumber,
                    number: number,
                    password: password,
                    textNumber: textNumber,
                    dataTime: dataTime,
                    limitNumber: limitNumber,
                    testNumber: testNumber
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
            width,
            addFormRef,
            loading,
            submitAdd,
            cancelAdd,
            labelPosition,
            changeSwitch,
            handleChangeDateTime,
            handleChangeLimitNumber
        }
    },
    props:['loading'],
}
</script>

<style scoped>

</style>
