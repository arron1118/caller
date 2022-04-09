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
                page: 2,
                limit: 15,
            }
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        getData() {
            axios.post(route('getHistoryList'), this.params, function (res) {
                console.log(res);
            })
        }
    }
}
</script>

<style scoped>

</style>
