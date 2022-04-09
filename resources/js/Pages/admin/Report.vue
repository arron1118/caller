<template>
    <AdminLayout>
        Report page
    </AdminLayout>
</template>

<script>
import AdminLayout from "@/Layouts/AdminLayout";

export default {
    name: "Report",
    components: {
        AdminLayout,
    },
    data() {
        return {
            params: {
                page: 1,
                limit: 15,
            }
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        getData() {
            axios.post(route('getHistoryList'), this.params).then(res => {
                console.log(res);
            })
        }
    }
}
</script>

<style scoped>

</style>
