<template>
    <div>
        <basic-tabs :tabsList="tabsList" :activeName="activeName" @getTabs="getTab">
            <div class="mt-4" v-show="activeName === 'first'">
                <el-form class="px-6"
                         ref="addFormRef"
                         :model="ruleForm"
                         :label-position="labelPosition"
                         :rules="rules"
                >
                    <el-form-item label="账号" label-width="140px" prop="number">
                        <el-input v-model.trim="ruleForm.number" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="密码" label-width="140px" prop="password">
                        <el-input v-model.trim="ruleForm.password" type="password" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="公司名称" label-width="140px" prop="name">
                        <el-input v-model.trim="ruleForm.name" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="跟进人" label-width="140px" prop="name">
                        <el-input v-model.trim="ruleForm.sale" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="小号" label-width="140px" prop="minNumber">
                        <el-select v-model="ruleForm.minNumber" placeholder="请选择名下小号">
                            <el-option label="Zone No.1" value="shanghai" />
                            <el-option label="Zone No.2" value="beijing" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="坐席" label-width="140px" prop="sit">
                        <div>
                            <div class="block">
                                <el-input-number
                                    v-model="ruleForm.sit"
                                    :min="1"
                                    controls-position="right"
                                    @change="handleChangeSit"
                                />
                            </div>
                            <div class="text-xs text-gray-400">提示：1个小号为1个座席，默认 1</div>
                        </div>
                    </el-form-item>
                    <el-form-item label="限制用户数" label-width="140px" prop="limitNumber">
                        <div>
                            <div class="block">
                                <el-input-number
                                    v-model="ruleForm.limitNumber"
                                    :min="0"
                                    controls-position="right"
                                    @change="handleChangeLimitNumber"
                                />
                            </div>
                            <div class="text-xs text-gray-400">提示：0 为无限制开通拨号用户</div>
                        </div>
                    </el-form-item>
                    <el-form-item label="费率（元）" label-width="140px" prop="rate">
                        <div>
                            <div class="block">
                                <el-input-number
                                    v-model="ruleForm.rate"
                                    :min="0.15"
                                    controls-position="right"
                                    @change="handleChangeRate"
                                />
                            </div>
                            <div class="text-xs text-gray-400">提示：用于计算话费，默认 0.15/分钟</div>
                        </div>
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
                    <el-form-item label="结束时间" label-width="140px" prop="state" v-show="ruleForm.testNumber">
                        <div>
                            <div class="block">
                                <el-date-picker
                                    v-model="ruleForm.dataTime"
                                    type="datetime"
                                    placeholder=""
                                    @change="handleChangeDateTime"
                                    value-format="YYYY-MM-DD hh:mm:ss"
                                />
                            </div>
                            <div class="text-xs text-gray-400">提示：超过测试时间将被淘汰，空为无限制。</div>
                        </div>
                    </el-form-item>
                    <el-form-item label="状态" label-width="140px" prop="state">
                        <div>
                            <div class="block">
                                <el-switch
                                    v-model="ruleForm.state"
                                    inline-prompt
                                    active-text="启用"
                                    inactive-text="禁止"
                                    :width="width"
                                />
                            </div>
                            <div class="text-xs text-gray-400">提示：禁止后，该账号下的所有拨号账号将无法正常使用。</div>
                        </div>
                    </el-form-item>
                </el-form>
            </div>
            <div class="mt-4" v-show="activeName === 'second'">
                <el-form class="px-6" ref="addFormRef" :model="ruleForm" :label-position="labelPosition">
                    <el-form-item label="公司名称" label-width="140px" prop="company">
                        <el-input v-model.trim="ruleForm.company" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="联系人" label-width="140px" prop="contacts">
                        <el-input v-model.trim="ruleForm.contacts" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="联系方式" label-width="140px" prop="ways">
                        <el-input v-model.trim="ruleForm.ways" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="合同时间" label-width="140px" prop="contractTime">
                        <div>
                            <div class="block">
                                <el-date-picker
                                    v-model="ruleForm.contractTime"
                                    type="datetimerange"
                                    placeholder=""
                                    @change="handleChangeContractTime"
                                    value-format="YYYY-MM-DD hh:mm:ss"
                                />
                            </div>
                        </div>
                    </el-form-item>
                    <el-form-item label="合同" label-width="140px" prop="contractImage">
                        <image-upload></image-upload>
<!--                        <el-input v-model.trim="ruleForm.contractImage" autocomplete="off" />-->
                    </el-form-item>
                </el-form>
            </div>
            <div class="flex flex-row justify-center mt-8">
                <el-button @click="cancelAdd()">取消</el-button>
                <el-button type="primary" :loading="loading" @click="submitAdd()"
                >开通</el-button
                >
            </div>
        </basic-tabs>
    </div>
</template>

<script>
import {ref, reactive, unref} from "vue"
import BasicTabs from '@/Pages/common/tabs/BasicTabs'
import ImageUpload from "@/Pages/common/plugins/ImageUpload";
export default {
    name: "Add",
    components: {
        BasicTabs,ImageUpload
    },
    setup(props, context){
        // tabs
        const activeName = ref('first')
        const { checkNumber, checkPassword, checkCompany } = require("@/validator")
        const tabsList = ref([
            {label: '账户信息', name: 'first'},
            {label: '客户信息', name: 'second'},
        ])
        const getTab = (v) => {
            activeName.value = v
        }
        // forms
        const labelPosition = ref('left')
        const width = ref(60)
        const addFormRef = ref(null)
        const loading = ref(props.loading)
        const changeSwitch = (val) =>{
            if(val === false){
                ruleForm.dataTime = ''
            }
        }
        const handleChangeSit = (value) => {
            ruleForm.sit = value
        }
        const handleChangeLimitNumber = (value) => {
            ruleForm.limitNumber = value
        }
        const handleChangeRate = (value) => {
            ruleForm.rate = value
        }
        const handleChangeDateTime = (value) => {
            ruleForm.dataTime = value
        }
        const handleChangeContractTime = (value) => {
            ruleForm.contractTime = value
        }
        const ruleForm = reactive({
            number: '',
            password: '',
            sit: 1,
            limitNumber: 0,
            minNumber: '',
            rate: 0.15,
            name: '',
            testNumber: true,
            state: true,
            dataTime: '',
            sale:'',
            company:'',
            contacts:'',
            ways:'',
            contractTime:'',
            contractImage:'',
        })
        const rules = reactive({
            number:[{
                validator: checkNumber,
                required: true,
                trigger: 'blur'
            }],
            password: [{
                validator: checkPassword,
                required: true,
                trigger: 'blur'
            }],
            company: [{
                validator: checkCompany,
                required: true,
                trigger: 'blur'
            }]
        })
        const submitAdd = async () => {
            loading.value = true
            const formEl = unref(addFormRef)
            if (!formEl) return
            let fields = ["number", "password","company"]
            formEl.validateField(fields, (valid)=>{
                    if(valid) {
                        try {
                            const {
                                number,
                                password,
                                sit,
                                limitNumber,
                                minNumber,
                                rate,
                                name,
                                testNumber,
                                state,
                                dataTime,
                                sale,
                                company,
                                contacts,
                                ways,
                                contractTime,
                                contractImage,
                            } = ruleForm
                            const params = {
                                number: number,
                                password: password,
                                sit: sit,
                                limitNumber: limitNumber,
                                minNumber: minNumber,
                                rate: rate,
                                name: name,
                                testNumber: testNumber,
                                state: state,
                                dataTime: dataTime,
                                sale: sale,
                                company: company,
                                contacts: contacts,
                                ways: ways,
                                contractTime: contractTime,
                                contractImage: contractImage,
                            }
                            console.log('开通参数', params, loading.value)
                            context.emit('clickAdd', params, loading.value)
                            // todo
                        } catch (error) {
                        }
                    }
        })}
        const cancelAdd = async () => {
            context.emit('clickCancelAdd', false)
        }
        return{
                rules,
                getTab,
                activeName,
                tabsList,
                changeSwitch,
                width,
                handleChangeSit,
                handleChangeLimitNumber,
                handleChangeRate,
                addFormRef,
                ruleForm,
                loading,
                submitAdd,
                cancelAdd,
                handleChangeDateTime,
                handleChangeContractTime,
                labelPosition
            }

},
    props:['loading']
}
</script>

<style scoped>

</style>
