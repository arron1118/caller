<template>
    <div>
        <el-form ref="searchFormRef" :model="searchRuleForm" :inline="true" class="m-2">

                <el-form-item class="mx-4" prop="number">
                    <el-input v-model.trim="searchRuleForm.number" placeholder="输入账号">
                        <template #prepend>账号</template>
                    </el-input>
                </el-form-item>
                <el-form-item class="mr-4" prop="name">
                    <el-input v-model.trim="searchRuleForm.name" placeholder="输入公司名称">
                        <template #prepend>公司名称</template>
                    </el-input>
                </el-form-item>



            <el-form-item label="公司" label-width="" prop="company">
                <el-select v-model="searchRuleForm.company" placeholder="请选择公司">
                    <el-option label="Zone No.1" value="shanghai" />
                    <el-option label="Zone No.2" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item prop="staff">
            <el-select v-model="searchRuleForm.staff" placeholder="请选择员工">
                <el-option label="Zone No.1" value="shanghai" />
                <el-option label="Zone No.2" value="beijing" />
            </el-select>
            </el-form-item>
            <el-form-item label="时间" prop="state">
                        <el-date-picker
                            v-model="searchRuleForm.dataTime"
                            type="datetimerange"
                            range-separator="To"
                            start-placeholder="开始时间"
                            end-placeholder="结束时间"
                            @change="handleChangeDateTime"
                            value-format="YYYY-MM-DD hh:mm:ss"
                        />
            </el-form-item>
            <el-form-item label="通话时长" prop="operate">
                <el-select v-model="searchRuleForm.operate" placeholder="请选择操作符">
                    <el-option label="=" value="=" />
                    <el-option label=">" value=">" />
                    <el-option label="<" value="<" />
                </el-select>
            </el-form-item>
           <el-form-item>
               <el-input-number
                   v-model="searchRuleForm.duration"
                   :min="0"
                   controls-position="right"
                   @change="handleChangeDuration"
               />
           </el-form-item>
               <el-form-item class="mx-1">
               <el-button type="primary" :loading="loading" @click="submitAdd()"
               >搜索</el-button
               >
               <el-button @click="cancelAdd()">重置</el-button>
           </el-form-item>
        </el-form>
    </div>
</template>

<script>
import {ref, reactive, unref} from "vue"
export default {
    name: "searchForm",
    setup(props, context){
        const width = ref(60)
        const searchFormRef = ref(null)
        const loading = ref(props.loading)
        const changeSwitch = (val) =>{
            if(val === false){
                searchRuleForm.dataTime = ''
            }
        }
        const handleChangeSit = (value) => {
            searchRuleForm.sit = value
        }
        const handleChangeLimitNumber = (value) => {
            searchRuleForm.limitNumber = value
        }
        const handleChangeDuration = (value) => {
            searchRuleForm.rate = value
        }
        const handleChangeDateTime = (value) => {
            console.log(value)
            searchRuleForm.dataTime = value
        }
        const searchRuleForm = reactive({
          company: '',
            staff: '',
            dataTime: '',
            operate: '',
            number: '',
            name: '',
            duration: 0,

        })
        const submitAdd = async () => {
            loading.value = true
            const form = unref(searchFormRef)
            if (!form) return
            try {
                await form.validate()
                const {
                    company,
                    staff,
                    dataTime,
                    operate,
                    duration,
                } = searchRuleForm
                const params = {
                    company: company,
                    staff: staff,
                    dataTime: dataTime,
                    operate: operate,
                    duration: duration
                }
                console.log('参数2', params, loading.value)
               // context.emit('clickAdd', params, loading.value)
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
            handleChangeDuration,
            searchFormRef,
            searchRuleForm,
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
