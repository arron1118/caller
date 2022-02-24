<template>
    <AdminLayout>
        <template #content>
            <div>
                <h1 class="text-7xl">Dashboard</h1>
            </div>
        </template>
    </AdminLayout>
</template>

<script>
import AdminLayout from "../Layouts/AdminLayout";
export default {
    name: "Dashboard",
    components: {
        AdminLayout,
    },
    mounted() {
    },
    methods: {
    }
}
</script>

<style scoped>

</style>
