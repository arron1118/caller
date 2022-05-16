<template>
    <home-layout>
        passward
    </home-layout>
</template>

<script>
import HomeLayout from "@/Layouts/HomeLayout";
import { ref } from "vue"
import {ElMessage} from "element-plus";
export default {
    name: "ChangePassword",
    components: {
        HomeLayout,
    },
    setup(){
        const loading = ref(false)
        return{
            loading
        }
    }
}
</script>

<style scoped>

</style>
