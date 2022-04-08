<template>
    <AdminLayout>
        <div class="flex flex-wrap">
            <font-awesome-icon :icon="['fab', 'apple']" class="text-gray-500" size="lg"></font-awesome-icon>
            <h1>Welcome to my website.</h1>
        </div>
    </AdminLayout>
</template>

<script>
import AdminLayout from "../Layouts/AdminLayout";

export default {
    name: "Welcome",
    components: {
        AdminLayout,
    },
    data () {
        return {
            list: [
                '12345',
                '67890',
                '1234567890'
            ],
            showChild: false,
            showChildIndex: null
        }
    },
    created () {
    },
    methods: {
        itemClick (item, index) {
            console.log(this.showChildIndex)
            console.log(this.showChild)
            this.showChild = !this.showChild
            this.showChildIndex = index
            console.log('如果这都不算爱');
        }
    }
}
</script>

<style scoped>

</style>
