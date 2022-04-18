<template>
    <div>
        <el-form ref="addFormRef" :model="ruleForm2">
            <el-form-item label="标题" label-width="140px" prop="title">
                <el-input v-model.trim="ruleForm2.title" autocomplete="off" />
            </el-form-item>
            <el-form-item label="关键词" label-width="140px" prop="keywords">
                <el-input v-model.trim="ruleForm2.keywords" type="text" autocomplete="off" />
            </el-form-item>
            <el-form-item label="简介" label-width="140px" prop="introduction">
                <el-input type="textarea" v-model.trim="ruleForm2.introduction" autocomplete="off" />
            </el-form-item>
            <el-form-item label="置顶" label-width="140px" prop="top">
                <el-switch
                    v-model="ruleForm2.top"
                    inline-prompt
                    active-text="是"
                    inactive-text="否"
                    :width="width"
                    @change="changeSwitch"
                />
            </el-form-item>
            <el-form-item label="封面" label-width="140px" prop="cover">
              <image-upload></image-upload>
            </el-form-item>
            <el-form-item label="内容" label-width="140px" prop="cover">
                <tiny-mce></tiny-mce>
            </el-form-item>
<!--          提交-->
            <div class="flex flex-row justify-center mt-8">
                <el-button @click="cancelAdd()">取消</el-button>
                <el-button type="primary" :loading="loading" @click="submitAdd()"
                >发布</el-button
                >
            </div>
        </el-form>
    </div>
</template>

<script>
import {ref, reactive, unref} from "vue"
import ImageUpload from '@/Pages/components/others/ImageUpload.vue'
import TinyMce from '@/Pages/components/others/TinyMce.vue'
export default {
    name: "Add",
    components: {
        TinyMce,
        ImageUpload
    },
    setup(props, context){
        const width = ref(60)
        const addFormRef = ref(null)
        const loading = ref(props.loading)
        const changeSwitch = (val) =>{
           console.log(val)
        }
        const ruleForm2 = reactive({
            title: '',
            keywords: '',
            introduction: '',
            top: false,
        })
        const submitAdd = async () => {
            loading.value = true
            const form = unref(addFormRef)
            if (!form) return
            try {
                await form.validate()
                const {
                    title,
                    keywords,
                    introduction,
                    top,
                } = ruleForm2
                const params = {
                    title: title,
                    keywords: keywords,
                    introduction: introduction,
                    top: top,
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
            changeSwitch,
            width,
            addFormRef,
            ruleForm2,
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
