<template>
    <div>
        <el-form ref="addFormRef" :model="ruleForm2">
            <el-form-item label="账号" label-width="140px" prop="number">
                <el-input v-model.trim="ruleForm2.number" autocomplete="off" />
            </el-form-item>
            <el-form-item label="密码" label-width="140px" prop="password">
                <el-input v-model.trim="ruleForm2.password" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item label="公司名称" label-width="140px" prop="name">
                <el-input v-model.trim="ruleForm2.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="小号" label-width="140px" prop="minNumber">
                <el-select v-model="ruleForm2.minNumber" placeholder="请选择名下小号">
                    <el-option label="Zone No.1" value="shanghai" />
                    <el-option label="Zone No.2" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="坐席" label-width="140px" prop="sit">
                <div>
                    <div class="block">
                        <el-input-number
                            v-model="ruleForm2.sit"
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
                            v-model="ruleForm2.limitNumber"
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
                            v-model="ruleForm2.rate"
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
                    v-model="ruleForm2.testNumber"
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
                    <div class="text-xs text-gray-400">超过测试时间将被淘汰，空为无限制。</div>
                </div>
            </el-form-item>
            <el-form-item label="状态" label-width="140px" prop="state">
                   <div>
                       <div class="block">
                           <el-switch
                               v-model="ruleForm2.state"
                               inline-prompt
                               active-text="启用"
                               inactive-text="禁止"
                               :width="width"
                           />
                       </div>
                       <div class="text-xs text-gray-400">禁止后，该账号下的所有拨号账号将无法正常使用。</div>
                   </div>
            </el-form-item>
            <div class="flex flex-row justify-center mt-8">
                <el-button @click="cancelAdd()">取消</el-button>
                <el-button type="primary" :loading="loading" @click="submitAdd()"
                >开通</el-button
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
        const width = ref(60)
        const addFormRef = ref(null)
        const loading = ref(props.loading)
        const changeSwitch = (val) =>{
            if(val === false){
                ruleForm2.dataTime = ''
            }
        }
        const handleChangeSit = (value) => {
            ruleForm2.sit = value
        }
        const handleChangeLimitNumber = (value) => {
            ruleForm2.limitNumber = value
        }
        const handleChangeRate = (value) => {
            ruleForm2.rate = value
        }
        const handleChangeDateTime = (value) => {
            console.log(value)
            ruleForm2.dataTime = value
        }
        const ruleForm2 = reactive({
            number: '',
            password: '',
            sit: 1,
            limitNumber: 0,
            minNumber: '',
            rate: 0.15,
            name: '',
            testNumber: false,
            state: true,
            dataTime: ''
        })
        const submitAdd = async () => {
            loading.value = true
            const form = unref(addFormRef)
            if (!form) return
            try {
                await form.validate()
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
                    dataTime
                } = ruleForm2
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
                    dataTime: dataTime
                }
                console.log('参数2', params, loading.value)
                context.emit('clickAdd', params, loading.value)
                // todo
            } catch (error) {
            }
        }
        const cancelAdd = async () => {
            context.emit('clickCancelAdd', false)
        }
        return{
            changeSwitch,
            width,
            handleChangeSit,
            handleChangeLimitNumber,
            handleChangeRate,
            addFormRef,
            ruleForm2,
            loading,
            submitAdd,
            cancelAdd,
            handleChangeDateTime
        }
    },
    props:['loading'],
    methods: {}
}
</script>

<style scoped>

</style>
