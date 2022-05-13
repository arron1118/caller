<template>
    <div>
        <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
        >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
    </div>
</template>

<script>
import {ref, unref} from "vue"
import {ElMessage} from "element-plus";
import { Plus } from '@element-plus/icons-vue'
export default {
    name: "ImageUpload",
    components: {
        Plus
    },
    setup(props, context){
        const imageUrl = ref('')
        const beforeAvatarUpload = async (rawFile) => {
            console.log('lpppp',rawFile.type)
            if(rawFile.type !== 'image/png' && rawFile.type !== 'image/jpeg'){
                ElMessage.error('上传格式为图片！')
                return false
            } else if (rawFile.size / 1024 / 1024 >2){
                ElMessage.error('上传图片不能超过2MB！')
                return false
            }
            return true
        }
        const handleAvatarSuccess = async (response,upload) => {
            console.log(response)
            console.log(upload)
            // imageUrl.value = URL.createObjectURL(uploadFilled.row)
        }
        return {
            imageUrl,
            beforeAvatarUpload,
            handleAvatarSuccess,
        }
    },
    props: [],
}
</script>
<style scoped>
.avatar-uploader .avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>
<style>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}
</style>

