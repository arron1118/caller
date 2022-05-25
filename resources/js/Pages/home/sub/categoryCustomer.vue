<template>
    <el-select v-model="options" placeholder="请选择类型" @change="change">
            <el-option label="意向客户" value="1" />
            <el-option label="重点客户" value="2" />
            <el-option label="成交客户" value="3" />
            <el-option label="无效客户" value="4" />
        </el-select>
    <div class="flex flex-row justify-center mt-8">
        <el-button @click="cancel()">取消</el-button>
        <el-button type="primary" :loading="loading" @click="submit()"
        >确定</el-button
        >
    </div>
</template>

<script>
import {ref} from "vue"
export default {
    name: "CategoryCustomer",
    components: {
    },
    setup(props, context){
        const { TipsBox } = require("@/lqp")
        const loading = ref(false)
        const options = ref('')
        const cateId = ref('')
        const change = () => {
            cateId.value = options.value
        }
        const submit = async () => {
            loading.value = true
            let params = {ids: props.ids, cate: cateId.value}
            console.log(params)
            // try {
            //     await form.validate()
            //     console.log('搜索参数', searchRuleForm, loading.value)
            //     context.emit('clickSearch', searchRuleForm, loading.value)
            // } catch (error) {
            // }
        }
        //
        const cancel = async () => {

        }
        return {
            cateId,
            options,
            change,
            loading,
            submit,
            cancel
        }
    },
    props:['ids']
}
</script>
<style scoped>

</style>
