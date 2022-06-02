<template>
    <AdminLayout>
        <div class="mb-6 bg-white rounded border pt-4">
            <search-form :role="role" @clickSearch="search"></search-form>
        </div>
            <div class="border rounded">
                <basic-table
                    :tableTitle="tableTitle"
                    :selectionType="true"
                    :pagination="true"
                    :buttonGroups="true"
                    :where="params"
                    :url="'getHistoryList'"
                    :exportName="exportName"
                    :payType="payType"
                    @getPayType="getPayType"
                    :payStatus="payStatus"
                    @getPayStatus="getPayStatus"
                >
                    <template v-slot:payType="scope">
                        <el-tag :type="scope.scope.row.status === 1 ? '' : scope.scope.row.status === 2? '' : 'success'" disable-transitions>
                            <font-awesome-icon :icon="scope.scope.row.status === 1 ? ['fas', 'pen-to-square']:scope.scope.row.status === 2?['fas', 'pen-to-square'] : ['fas', 'trash-can']" />
                        </el-tag>
                    </template>
                    <template v-slot:payStatus="scope">
                        <el-tag
                            :type="scope.scope.row.status === 1 ? 'success' : scope.scope.row.status === 2? 'info' : 'danger'"
                            disable-transitions
                        >
                            {{ scope.scope.row.status === 1 ? "已付款" : scope.scope.row.status === 2? "未付款" : "已关闭"}}
                        </el-tag>
                    </template>
                </basic-table>
            </div>
    </AdminLayout>
</template>

<script>
import AdminLayout from "@/Layouts/AdminLayout";
import SearchForm from "@/Pages/admin/components/forms/searchForm.vue";
import BasicTable from '@/Pages/common/tables/BasicTable.vue';
import { ref } from "vue"
export default {
    name: "Payment",
    components: {
        AdminLayout,SearchForm,BasicTable
    },
    setup(){
        const role = ref('payment')
        const payType = ref({
            label: '支付方式',
            width: 60
        })
        const payStatus = ref({
            label: '支付状态',
            width: 60
        })
        const payWayIcon = ref([{
            title: '微信',
            type: 'success',
            weixin: ['fas', 'pen-to-square'],

        },
            {
                title: '支付宝',
                type: 'danger',
                alipay: ['far', 'trash-can'],

            }
        ])


        const params = ref({
            page: 1,
            limit: 15,
        })
        const tableTitle = ref([
            {
                label: '订单号',
                value: 'axb_number',
                sortable: false,
                show: true
            },
            {
                label: '类型',
                value: 'company',
                sortable: false,
                show: true
            },
            {
                label: '充值方',
                value: 'company',
                sortable: false,
                show: true
            },
            {
                label: '充值金额（￥/元）',
                value: 'call_duration',
                sortable: false,
                show: true
            },
            {
                label: '充值时间',
                value: 'createtime',
                sortable: true,
                show: true
            },
            {
                label: '支付时间',
                value: 'createtime',
                sortable: true,
                show: true
            },
            {
                label: '充值方式',
                value: 'id',
                sortable: false,
                show: true
            },
            {
                label: '状态',
                value: 'id',
                sortable: false,
                show: true
            }

        ])
        const exportName = ref('充值管理报表')
        const search = (f) => {
            console.log('子传父参数', f)
            params.value = Object.assign({}, params.value, f)
        }
        const getPayType = (v) => {
            console.log('支付方式',v)
            // todo
        }
        const getPayStatus = (v) => {
            console.log('支付状态',v)
            // todo
        }
        return{
            role,
            search,
            tableTitle,
            params,
            payType,
            getPayType,
            payStatus,
            getPayStatus,
            payWayIcon,
            exportName
        }
    }
}
</script>

<style scoped>

</style>
