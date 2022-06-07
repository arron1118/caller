<template>
    <AdminLayout>
        系统设置
    </AdminLayout>
</template>

<script>
import AdminLayout from "@/Layouts/AdminLayout";

export default {
    name: "Settings",
    components: {
        AdminLayout,
    },
    mounted() {
        console.log(this.$page.props.config)
    }
}
</script>

<style scoped>

</style>
