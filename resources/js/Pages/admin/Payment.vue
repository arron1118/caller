<template>
    <AdminLayout>
        <div class="mb-6 bg-white rounded shadow pt-4">
            <search-form :role="role" @clickSearch="search"></search-form>
        </div>
    </AdminLayout>
</template>

<script>
import AdminLayout from "@/Layouts/AdminLayout";
import SearchForm from "@/Pages/components/forms/searchForm.vue";
import {ref} from "vue";

export default {
    name: "Payment",
    components: {
        AdminLayout,SearchForm
    },
    setup(){
        // 搜索框
        const role = ref('payment')
        const search = (f) => {
            console.log('子传父参数', f)
        }
        return{
            role,search
        }
    }
}
</script>

<style scoped>

</style>
