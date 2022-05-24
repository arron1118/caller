<template>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="导入说明" name="first">
            <div class="mb-4">
                <div>注：只能上传Excel表格，格式为:</div>
                <div class="mb-4">['客户名称', '电话号码', '所在地', '邮箱']</div>
                <el-image
                    style="width: 100px; height: 100px"
                    :src="url"
                    :preview-src-list="srcList"
                    :initial-index="4"
                    fit="cover"
                />
            </div>
            <div>
                <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    multiple
                    :limit="3"
                    :on-exceed="handleExceed"
                    :file-list="fileList"
                >
                    <el-button type="primary">导入</el-button>
                </el-upload>
            </div>
        </el-tab-pane>
        <el-tab-pane label="下载模板" name="second">
            <div>
                <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    multiple
                    :limit="3"
                    :on-exceed="handleExceed"
                    :file-list="fileList"
                >
                    <el-button type="primary">下载模板</el-button>
                </el-upload>
            </div>
        </el-tab-pane>
    </el-tabs>
    <div class="flex flex-row justify-center mt-8">
        <el-button @click="cancelAdd()">取消</el-button>
        <el-button type="primary" :loading="loading" @click="submitAdd()"
        >确定</el-button
        >
    </div>
</template>

<script>
import {ref, unref} from "vue"
export default {
    name: "Add",
    components: {
    },
    setup(props, context){
        const activeName = ref('first')
        const loading = ref(props.loading)
        const tips = ref(true)
        const url = 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
        const srcList = [
            'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
        ]
        const handleClick = (tab, event) => {
            console.log(tab, event)
        }
        const cancelAdd = async () => {
            context.emit('clickCancelAdd', false)
        }
        const submitAdd = async () => {
            // if() 没有结果则提示
            loading.value = true
            const data ='lpp'
            context.emit('clickAdd', data, loading.value)
        }
        return{
            submitAdd,
            cancelAdd,
            activeName,
            handleClick,
            loading,
            tips,
            url,
            srcList
        }
    },
    props:['loading']
}
</script>
<style scoped>

</style>
