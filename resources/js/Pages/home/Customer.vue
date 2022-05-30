<template>
    <home-layout>
        <div class="mb-6 bg-white rounded shadow pt-4">
            <search-form :role="role" @clickSearch="search"></search-form>
        </div>
        <div class="border rounded">
             <basic-table
                    :tableTitle="tableTitle"
                    :where="params"
                    :url="'getHistoryList'"
                    :exportName="exportName"
                    :showSummary="true"
                    :customerSlot="true"
                    :operates="operates"
                    :operatesWidth="160"
                    @selectDate="selectDate"
                >
                    <template v-slot:customerSlot="scope">
                        <el-button-group>
                            <el-button type="primary" @click="addFormDialog = true">添加客户</el-button>
                            <el-button type="primary" plain @click="importDialog = true">导入客户</el-button>
                            <el-button type="success" plain @click="moveCategory">移动分类</el-button>
                            <el-button type="danger" plain @click="allDeleted">批量删除</el-button>
                            <span class="pl-2 text-gray-400">注：点击'回访记录'列可查看详细内容</span>
                        </el-button-group>
                    </template>
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
    <!--        弹框-->
    <el-dialog v-model="addFormDialog" title="添加客户">
        <add-form @submitAdd="submitAdd" @cancelAdd="cancelAdd" :loading="loading"></add-form>
    </el-dialog>
    <el-dialog v-model="editFormDialog" title="编辑">
        <edit-form @submitEdit="submitEdit" @cancelEdit="cancelEdit" :loading="loading"
                   :editData="editData"></edit-form>
    </el-dialog>
    <el-dialog v-model="importDialog" title="导入客户">
        <import-customer
            @submitImport="submitImport"
            @cancelImport="cancelImport"
            :loading="loading"
        ></import-customer>
    </el-dialog>
    <el-dialog v-model="categoryDialog" title="选择分类">
        <category-customer
            :ids="this.ids"
            :loading="loading"
            @submitCategory="submitCategory"
        ></category-customer>
    </el-dialog>
</template>

<script>
import HomeLayout from "@/Layouts/HomeLayout";
import SearchForm from "@/Pages/home/components/forms/searchForm.vue";
import BasicTable from '@/Pages/common/tables/BasicTable.vue';
import AddForm from '@/Pages/home/sub/subCustomers/Add.vue'
import EditForm from '@/Pages/home/sub/subCustomers/Edit.vue'
import TableOperation from "@/Pages/home/components/tables/TableOperation";
import importCustomer from '@/Pages/home/sub/importCustomer.vue'
import categoryCustomer from '@/Pages/home/sub/categoryCustomer.vue'
import { ref } from "vue"

export default {
    name: "Customer",
    components: {
        importCustomer,
        categoryCustomer,
        HomeLayout,
        SearchForm,
        BasicTable,
        AddForm,
        EditForm,
        TableOperation
    },
    setup(){
        const { TipsBox, QueryBox } = require("@/feedback")
        const { makeCall } = require("@/lqp")
        const role = ref('customer')
        const addFormDialog = ref(false)
        const editFormDialog = ref(false)
        const importDialog = ref(false)
        const categoryDialog = ref(false)
        const loading = ref(false)
        const params = ref({
            page: 1,
            limit: 15,
        })
        const tableTitle = ref( [
            {
                label: 'ID',
                value: 'id',
                sortable: false,
                show: true
            },
            {
                label: '客户名称',
                value: 'title',
                sortable: false,
                show: true
            },
            {
                label: '联系电话',
                value: 'phone',
                sortable: false,
                show: true
            },
            {
                label: '所在地',
                value: 'province',
                sortable: true,
                show: true
            },
            {
                label: '邮箱',
                value: 'email',
                sortable: true,
                show: true
            },
            {
                label: '类型',
                value: 'cate',
                sortable: true,
                show: true
            },
            {
                label: '呼叫次数',
                value: 'called_count',
                sortable: true,
                show: true
            },
            {
                label: '回访记录',
                value: 'called_count',
                sortable: true,
                show: true
            },
            {
                label: '最近呼叫',
                value: 'called_count',
                sortable: true,
                show: true
            },
            {
                label: '创建时间',
                value: 'called_count',
                sortable: true,
                show: true
            },
        ])
        const exportName = ref('')
        const operates = ref({
            operate: true,
            label: '操作',
        })
        const operations = ref([
            {
                types: 'call',
                title: '拨打',
                type: 'primary',
                icon: ['fas', 'pen-to-square'],

            },
            {
            types: 'edit',
            title: '编辑',
            type: 'success',
            icon: ['fas', 'pen-to-square'],

        },
            {
                types: 'del',
                title: '删除',
                type: 'danger',
                icon: ['far', 'trash-can'],

            }
        ])
        const ids = ref([])
        const editData = ref([])
        const handleOperation = (op, row) => {
            if (op.types === 'edit') {
                editFormDialog.value = true
                editData.value = row.value
            } else if (op.types === 'del') {
                console.log(row.value.id)
                QueryBox('提示', '确定要删除数据吗？', 'error', '已删除')
            } else if (op.types === 'call'){
                console.log(row.value)
                let phone = row.value.axb_number
                makeCall(phone)
            }
        }
        const search = (f) => {
            console.log('子传父参数', f)
            params.value = Object.assign({}, params.value, f)
        }
        const submitAdd = (e, r) => {
            loading.value = r
            // 提交参数处理完成后，后台返回数据成功后，关闭加载。提示成功。刷新页面。
            setTimeout(function () {
                loading.value = false
                addFormDialog.value = false
                TipsBox('success', '已提交')
            }, 3000);

        }
        const cancelAdd = (e) => {
            addFormDialog.value = e
        }
        const submitEdit = (e, r) => {
            console.log('参数', e)
            console.log('zhe', r)
            loading.value = r
            // todo
            // 提交参数处理完成后，后台返回数据成功后，关闭加载。提示成功。刷新页面。
            setTimeout(function () {
                loading.value = false
                editFormDialog.value = false
                TipsBox('success', '已提交')
            }, 3000);

        }
        const cancelEdit = (e) => {
            editFormDialog.value = e
        }
        const submitImport = (e,r) => {
            loading.value = r
            // 提交参数处理完成后，后台返回数据成功后，关闭加载。提示成功。刷新页面。
            setTimeout(function () {
                loading.value = false
                importDialog.value = false
                TipsBox('success', '已提交')
            }, 3000);

        }
        const cancelImport = (e) => {
            importDialog.value = e
        }
        const selectDate = (d) => {
            let a = []
            d.forEach((item)=>{
                a.push(item.id)
            })
            a.join(',')
            ids.value = a
            // 去重
            // a.forEach((item)=>{
            //     if(this.ids.indexOf(item) === -1){
            //         this.ids.push(item)
            //     }
            // })
            // console.log('this.ids', this.ids)

        }
        const allDeleted = async() => {
            if(ids.value.length < 1){
                TipsBox('warning', '请选择需要删除的数据！')
                return false
            }else{
                console.log('ok', ids.value)
                // todo
                QueryBox('提示', '确定要删除数据吗？', 'error', '已删除')
            }
        }
        const moveCategory = async() => {
            if(ids.value.length < 1){
                TipsBox('warning', '请选择需要移动的客户！')
                return false
            }else{
                categoryDialog.value = true
            }
        }
        const submitCategory = async(p, b) =>{
            console.log('cs', p, b)
            categoryDialog.value = false
            TipsBox('success', '已提交')
        }
        return{
            editData,
            submitCategory,
            ids,
            selectDate,
            categoryDialog,
            moveCategory,
            QueryBox,
            submitImport,
            cancelImport,
            allDeleted,
            importDialog,
            loading,
            role,
            tableTitle,
            params,
            search,
            exportName,
            addFormDialog,
            editFormDialog,
            submitAdd,
            cancelAdd,
            submitEdit,
            cancelEdit,
            operates,
            operations,
            handleOperation
        }
    }
}
</script>

<style scoped>

</style>
