<template>
   <div class="h-60">
       <el-select ref="selectRef" v-model="options" placeholder="请选择类型" @change="change">
           <el-option label="意向客户" value="0" />
           <el-option label="重点客户" value="1" />
           <el-option label="成交客户" value="2" />
           <el-option label="无效客户" value="3" />
       </el-select>
   </div>
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
        const options = ref('')
        const cateId = ref('')
        const loading = ref(props.loading)
        const change = () => {
            cateId.value = options.value
        }
        const submit = async () => {
            loading.value = true
           let params = {ids: props.ids, cate: cateId.value}
            console.log(params)
            context.emit('submitCategory', params, loading.value)
        }
        //
        const cancel = async () => {

        }
        return {
            cateId,
            options,
            change,
            submit,
            cancel
        }
    },
    props:['ids', 'loading'],
    mounted() {
        //
        this.$refs.selectRef.toggleMenu()
    }
}
</script>
<style scoped>

</style>
