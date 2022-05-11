<template>
    <AdminLayout>
        <div class="mb-6 bg-white rounded shadow pt-4">
            <search-form :role="role" @clickSearch="search"></search-form>
        </div>
        <div class="mb-6 bg-white rounded shadow p-4">
            <div class="border rounded">
                <basic-table
                    :tableTitle="tableTitle"
                    :selectionType="true"
                    :pagination="true"
                    :buttonGroups="true"
                    :where="params"
                    :url="'getHistoryList'"
                    :exportName="exportName"
                    :payWays="payWays"
                    @getPayWay="getPayWays"
                    :payStatus="payStatus"
                    @getPayStatus="getPayStatus"
                >
                    <template v-slot:payWays="scope">
                        <el-tag
                            :type="scope.scope.row.status === 0 ? '' : 'success'"
                            disable-transitions
                        ><font-awesome-icon :icon="scope.scope.row.status === 0 ? ['fas', 'pen-to-square'] : ['fas', 'trash-can']"></font-awesome-icon></el-tag>
                    </template>
                    <template v-slot:payStatus="scope">
                        <el-tag
                            :type="scope.scope.row.status === 0 ? '' : scope.scope.row.status === 1? 'danger' : 'success'"
                            disable-transitions
                        >{{ scope.scope.row.status === 0 ? "已付款" : scope.scope.row.status === 1? "未付款" : ""}}</el-tag>
                    </template>
                </basic-table>
            </div>
        </div>
    </AdminLayout>
</template>

<script>
import AdminLayout from "@/Layouts/AdminLayout";
import SearchForm from "@/Pages/components/forms/searchForm.vue";
import BasicTable from '@/Pages/components/tables/BasicTable.vue';
import { ref } from "vue"
export default {
    name: "Payment",
    components: {
        AdminLayout,SearchForm,BasicTable
    },
    setup(){
        const role = ref('payment')
        const payWays = ref({
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
        const getPayWays = (v) => {
            console.log('支付方式',v)
            // todo
        }
        const getPayStatus = (v) => {
            console.log('支付状态',v)
            // todo
        }
        return{
            role,search,tableTitle,params,payWays,getPayWays,payStatus,getPayStatus,payWayIcon,exportName
        }
    }
}
</script>

<style scoped>

</style>
