<template>
    <home-layout title="Dashboard">
        <div class="mb-6 bg-white rounded shadow pt-4">
            <search-form :role="role" @clickSearch="search"></search-form>
        </div>
        <div class="border rounded">
            <basic-table
                :tableTitle="tableTitle"
                :operates="operates"
                :where="params"
                :url="'getHistoryList'"
                :exportName="exportName"
            >
                <template v-slot:operates="scope">
                    <table-operation
                        :operations="operations"
                        :rawData="scope.scope.row"
                        @handleOperation="handleOperation"
                    ></table-operation>
                </template>
            </basic-table>
        </div>
    </home-layout>
</template>

<script>
import HomeLayout from "@/Layouts/HomeLayout";
import SearchForm from "@/Pages/home/components/forms/searchForm.vue";
import BasicTable from '@/Pages/common/tables/BasicTable.vue';
import TableOperation from "@/Pages/common/tables/TableOperation";
import ButtonGroup from '@/Pages/home/components/buttons/ButtonGroup.vue';
import { ref } from "vue"
export default {
    name: "CallHistoryList",
    components: {
        HomeLayout, ButtonGroup, SearchForm, BasicTable, TableOperation
    },
    setup() {
        const { QueryBox } = require("@/feedback")
        const role = ref('callHistory')
        const params = ref({
            limit: 30,
        })
        const editFormDialog = ref(false)
        const tableTitle = ref([
            {
                label: 'ID',
                value: 'id',
                sortable: false,
                show: true,
            },
            {
                label: '编号',
                value: 'subid',
                sortable: false,
                show: true,
            },
            {
                label: '客户名称',
                value: 'customer',
                sortable: false,
                show: true,
            },
            {
                label: '被叫号码',
                value: 'called_number',
                sortable: false,
                show: true,
            },
            {
                label: '呼叫时间',
                value: 'createtime',
                sortable: true,
                show: true,
            },
            {
                label: '呼叫时长',
                value: 'call_duration',
                sortable: true,
                show: true,
            },
            {
                label: '消费金额（￥/元）',
                value: 'cost',
                sortable: false,
                show: true,
            },
            {
                label: '录音',
                value: 'cost',
                sortable: false,
                show: true,
            }

        ])
        const operates = ref({
            operate: true,
            label: '操作',
        })
        const operations = ref([
            {
                types: 'del',
                type: 'danger',
                icon: ['far', 'trash-can'],
                title: '删除'
            }
        ])
        const exportName = ref('通话记录报表')
        const search = (f) => {
            console.log('子传父参数', f)
            params.value = Object.assign({}, params.value, f)
        }
        const handleOperation = (op, row) => {
            if (op.types === 'edit') {
                editFormDialog.value = true
                editData.value = row.value

            } else if (op.types === 'del') {
                console.log(row.value.id)
                QueryBox('提示', '确定要删除数据吗？', 'error', '已删除')
            }
        }

        return {
            exportName,
            search,
            role,
            operates,
            operations,
            handleOperation,
            tableTitle,
            params,
        }
    }
}
</script>

