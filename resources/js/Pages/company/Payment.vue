<template>
    <company-layout>
        <div class="mb-6 bg-white rounded shadow pt-4">
            <search-form :role="role" @clickSearch="search"></search-form>
        </div>
        <div class="mb-6 border rounded">
            <basic-table
                :tableTitle="tableTitle"
                :where="params"
                :url="'getHistoryList'"
                :exportName="exportName"
                :payType="payType"
                @getPayType="getPayType"
                :payStatus="payStatus"
                @getPayStatus="getPayStatus"
                :payingSlot="true"
            >
                <template v-slot:payingSlot="scope">
                    <div>
                        <el-button type="primary" @click="addFormDialog = true">立即充值</el-button>
                    </div>
                </template>
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
    </company-layout>
    <!--        弹框-->
    <el-dialog v-model="addFormDialog" title="充值">
        <add-form @clickAdd="receiveAddForm" @clickCancelAdd="cancelAddForm" :loading="loading"></add-form>
    </el-dialog>
</template>

<script>
import CompanyLayout from "@/Layouts/CompanyLayout";
import SearchForm from "@/Pages/company/components/forms/searchForm.vue";
import BasicTable from '@/Pages/common/tables/BasicTable.vue';
import AddForm from '@/Pages/company/sub/subPayment/Add.vue'
import { ref } from "vue"
import {ElMessage} from "element-plus";
export default {
    name: "Payment",
    components: {
        CompanyLayout,
        SearchForm,
        BasicTable,
        AddForm
    },
    setup(){
        const role = ref('payment')
        const addFormDialog = ref(false)
        const loading = ref(false)
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
                label: 'ID',
                value: 'id',
                sortable: false,
                show: true
            },
            {
                label: '订单号',
                value: 'payno',
                sortable: false,
                show: true
            },
            {
                label: '类型',
                value: 'title',
                sortable: false,
                show: true
            },
            {
                label: '充值方',
                value: 'corporation',
                sortable: false,
                show: true
            },
            {
                label: '金额（￥/元）',
                value: 'amount',
                sortable: false,
                show: true
            },
            {
                label: '充值时间',
                value: 'create_time',
                sortable: true,
                show: true
            },
            {
                label: '支付时间',
                value: 'pay_time',
                sortable: true,
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
        const receiveAddForm = (e, r) => {
            console.log('zhe', e)
            console.log('zhe', r)
            loading.value = r
            // 提交参数处理完成后，后台返回数据成功后，关闭加载。提示成功。刷新页面。
            setTimeout(function () {
                loading.value = false
                addFormDialog.value = false
                ElMessage({
                    type: 'success',
                    // message: `action: ${action}`,
                    message: '已提交'
                })
                // 重载表格数据

            }, 3000);

        }
        const cancelAddForm = (e) => {
            addFormDialog.value = e
        }
        return{
            addFormDialog,
            role,
            search,
            tableTitle,
            params,
            payType,
            getPayType,
            payStatus,
            getPayStatus,
            payWayIcon,
            exportName,
            receiveAddForm,
            cancelAddForm,
            loading
        }
    }
}
</script>

<style scoped>

</style>
