<template>
    <admin-layout title="Dashboard">
        <div class="mb-6 bg-white rounded shadow pt-4">
           <search-form></search-form>
        </div>
        <div class="mb-6 bg-white rounded shadow p-4">
            <div class="border rounded">
                <div class="m-2 flex flex-row justify-between border-b pb-2">
                    <el-button type="primary" @click="dialogFormVisible = true">开通账户</el-button>
                    <div class="flex flex-column justify-center items-center mx-4">
                        <el-button type="text">导出</el-button>
                        <el-button type="text" v-print="'#printId'">打印</el-button>
                    </div>
                </div>
                <basic-table
                    :tableTitle="tableTitle"
                    :tableData="tableData"
                    :tableLoading="tableLoading"
                    :operates="operates"
                >
<!--                    @clickTableEdit="receiveEditData"-->
                    <template v-slot:operates="scope">
                        <button-group
                            :operations="operations"
                            :rawData="scope.row"
                            @handleOperation="handleOperation"
                        ></button-group>
                    </template>
                </basic-table>

            </div>
        </div>
    </admin-layout>
</template>

<script>
import AdminLayout from "../../Layouts/AdminLayout"
import SearchForm from "@/Pages/components/forms/searchForm.vue"
import BasicTable from '@/Pages/components/tables/BasicTable.vue'
import ButtonGroup from '@/Pages/components/buttons/ButtonGroup.vue'
import {reactive, ref} from "vue"
 export default {
    name: "CallHistoryList",
    components: {
        ButtonGroup,
        AdminLayout, SearchForm,BasicTable
    },
    setup(){
        const operates = ref({
            operate: true,
            label: '操作',

        })
        const operations = ref({
            type: 'edit',
            title: '编辑'
        })
        const handleOperation = (op, row) =>{
            if(op.type == 'edit'){
                console.log(row)
            }
        }
        const tableLoading = ref(false)
        const tableTitle = [
            {
                label: '账号',
                value: 'number'
            },
            {
                label: '密码',
                value: 'password'
            },
            {
                label: '公司名称',
                value: 'name'
            },
            {
                label: '小号',
                value: 'minNumber'
            },
            {
                label: '坐席',
                value: 'sit'
            },
            {
                label: '限制用户',
                value: 'limitNumber'
            },
            {
                label: '费率（元）',
                value: 'rate'
            },
            {
                label: '结束时间',
                value: 'dataTime'
            },
            {
                label: '结束时间',
                value: 'testNumber'
            }

        ]
        const tableData = [
            {
                id: 1,
                number: '1509372600101482498',
                password: '123456',
                name: '湖北太初',
                minNumber: '124545656',
                sit: 100,
                limitNumber: 999,
                rate: 2,
                dataTime: '2022-03-30 12:00:00',
                testNumber: true,
                state: false
            },
            {
                id: 2,
                number: '1002222',
                password: '1234526',
                name: '湖北太初22',
                minNumber: '124545622256',
                sit: 1020,
                limitNumber: 9299,
                rate: 22,
                dataTime: '2022-03-30 12:00:00',
                testNumber: false,
                state: true
            }

        ]
        const receiveEditData = (e, r) => {
            console.log(e)
            console.log(r)
            dialogFormVisible2.value = e
            editData.value = r
            console.log('ppp', editData.value)
        }
        const dialogFormVisible2 = ref(false)
        const editData = ref({})
        return {
            operates,
            operations,
            handleOperation,
            tableTitle,
            tableData,
            tableLoading,
            receiveEditData,
            editData,
            dialogFormVisible2
        }
    },
    methods: {
    }
}
</script>

<style scoped>

</style>
