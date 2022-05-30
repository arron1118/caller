<template>
    <AdminLayout>
        <div class="mb-6 bg-white rounded shadow pt-4">
            <search-form :role="role" @clickSearch="search"></search-form>
        </div>
        <div class="mb-6 bg-white rounded shadow p-4">
            <div class="border rounded">
                <basic-table
                    :tableTitle="tableTitle"
                    :where="params"
                    :url="'getHistoryList'"
                    :exportName="exportName"
                    :showSummary="true"
                >
                </basic-table>
            </div>
        </div>
    </AdminLayout>
</template>

<script>
import AdminLayout from "@/Layouts/AdminLayout";
import SearchForm from "@/Pages/admin/components/forms/searchForm.vue";
import BasicTable from '@/Pages/common/tables/BasicTable.vue';
import { ref } from "vue"
export default {
    name: "Report",
    components: {
        AdminLayout,SearchForm,BasicTable
    },
    setup(){
        const role = ref('report')
        const params = ref({
            page: 1,
            limit: 15,
        })
        const tableTitle = ref( [
            {
                label: '用户编号',
                value: 'axb_number',
                sortable: false,
                show: true
            },
            {
                label: '用户名称',
                value: 'company',
                sortable: false,
                show: true
            },
            {
                label: '拨号次数',
                value: 'id',
                sortable: true,
                show: true
            },
            {
                label: '接通次数(>0秒)',
                value: 'id',
                sortable: true,
                show: true
            },
            {
                label: '有效呼叫(>30秒)',
                value: 'id',
                sortable: true,
                show: true
            },
            {
                label: '时间(分)',
                value: 'createtime',
                sortable: true,
                show: true
            },
            {
                label: '消费金额（￥/元）',
                value: 'call_duration',
                sortable: true,
                show: true
            }
        ])
        const exportName = ref('')
        const search = (f) => {
            console.log('子传父参数', f)
            params.value = Object.assign({}, params.value, f)
        }
        return{
            role,tableTitle,params,search,exportName
        }
    }
}
</script>

<style scoped>

</style>
