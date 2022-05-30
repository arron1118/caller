<template>
    <admin-layout title="Dashboard">
        <div class="mb-6 bg-white rounded shadow pt-4">
            <search-form :role="role" @clickSearch="search"></search-form>
        </div>
        <div class="mb-6 bg-white rounded shadow p-4">
            <div class="border rounded">
                <basic-table
                    :tableTitle="tableTitle"
                    :operates="operates"
                    :where="params"
                    :url="'getHistoryList'"
                    :exportName="exportName"
                    :releaseNewsSlot="true"
                    :batchImportSlot="true"
                >
                    <template v-slot:releaseNews="scope">
                        <div>
                            <el-button type="primary" @click="addFormDialog = true">发布</el-button>
                        </div>
                    </template>
                    <template v-slot:batchImport="scope">
                        <div class="mr-2">
                            <el-upload action="" :auto-upload="false" :multiple="false" :show-file-list="false" :on-change="uploadXlsx" :file-list="xlsxList">
                                <el-button type="text">批量导入</el-button>
                            </el-upload>
                        </div>
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
                                            </div>
                                        </admin-layout>
                                        <!--        弹框-->
    <el-dialog v-model="addFormDialog" title="发布资讯">
        <add-form @clickAdd="receiveAddForm" @clickCancelAdd="cancelAddForm" :loading="loading"></add-form>
    </el-dialog>
    <el-dialog v-model="editFormDialog" title="编辑">
        <edit-form @clickEdit="receiveEditForm" @clickCancelEdit="cancelEditForm" :loading="loading" :editData="editData"></edit-form>
    </el-dialog>
</template>

<script>
import AdminLayout from "@/Layouts/AdminLayout";
import SearchForm from "@/Pages/admin/components/forms/searchForm.vue";
import BasicTable from '@/Pages/common/tables/BasicTable.vue';
import TableOperation from "@/Pages/admin/components/tables/TableOperation";
import ButtonGroup from '@/Pages/admin/components/buttons/ButtonGroup.vue';
import AddForm from '@/Pages/admin/subNews/Add.vue'
import EditForm from '@/Pages/admin/subNews/Edit.vue'
import PrintTable from '@/Pages/admin/components/tables/PrintTable.vue'
import {h, ref} from "vue"
import {ElMessage, ElMessageBox} from "element-plus";
export default {
    name: "News",
    components: {
        ButtonGroup,AdminLayout, SearchForm,BasicTable,TableOperation,EditForm, AddForm,PrintTable
    },
    setup: function () {
        // 搜索框
        const role = ref('news')
        const exportName = ref('资讯报表')
        const addFormDialog = ref(false)
        const params = ref({
            page: 1,
            limit: 15,
        })
        const loading = ref(false)
        const tableTitle = ref( [
            {
                label: '标题',
                value: 'axb_number',
                sortable: false,
                show: true
            },
            {
                label: '置顶',
                value: 'company',
                sortable: false,
                show: true
            },
            {
                label: '查看',
                value: 'customer',
                sortable: false,
                show: true
            },
            {
                label: '更新时间',
                value: 'called_number',
                sortable: false,
                show: true
            }
        ])
        const editFormDialog = ref(false)
        const operates = ref({
            operate: true,
            label: '操作',
        })
        const operations = ref([{
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
        const xlsxList = ref([])
        const editData = ref({})
        const search = (f) => {
            console.log('子传父参数', f)
            params.value = Object.assign({}, params.value, f)
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
                // tableLoading.value = true

            }, 3000);

        }
        const cancelAddForm = (e) => {
            addFormDialog.value = e
        }
        const handleOperation = (op, row) => {
            if (op.types === 'edit') {
                editFormDialog.value = true
                editData.value = row.value

            } else if (op.types === 'del') {
                console.log(row.value.id)
                ElMessageBox({
                    title: '确认删除此id=' + row.value.id + '数据吗？',
                    message: h('p', null, [
                        h('span', null, '此数据将会被'),
                        h('i', {style: 'color: #F56C6C'}, '删除'),
                    ]),
                    showCancelButton: true,
                    confirmButtonText: '删除',
                    cancelButtonText: '取消',
                    beforeClose: (action, instance, done) => {
                        if (action === 'confirm') {
                            let params = row.value.id
                            console.log('删除项id', params)
                            instance.confirmButtonLoading = true
                            instance.confirmButtonText = 'Loading...'
                            setTimeout(() => {
                                done()
                                setTimeout(() => {
                                    instance.confirmButtonLoading = false
                                }, 300)
                            }, 3000)
                            // todo
                        } else {
                            done()
                        }
                    },
                }).then(() => {
                    ElMessage({
                        type: 'success',
                        message: '已删除'
                    })
                })
            }
        }
        const receiveEditForm = (e, r) => {
            console.log('参数', e)
            console.log('zhe', r)
            loading.value = r
            // todo
            // 提交参数处理完成后，后台返回数据成功后，关闭加载。提示成功。刷新页面。
            setTimeout(function () {
                loading.value = false
                editFormDialog.value = false
                ElMessage({
                    type: 'success',
                    // message: `action: ${action}`,
                    message: '已提交'
                })
                // 重载表格数据
                // tableLoading.value = true

            }, 3000);

        }
        const cancelEditForm = (e) => {
            editFormDialog.value = e
        }
        const changeTestNumber = (e, row, index) => {
            // e返回状态，row当前行数据， index下标
            console.log('zhe', e)
            console.log(row)
            console.log(index)
            //todo


        }
        const changeState = (e, row, index) => {
            // e返回状态，row当前行数据， index下标
            console.log('zhe2', e)
            console.log(row)
            console.log(index)
            //todo


        }
        const beforeAvatarUpload = async (file) => {
            let fileArr = file.name.split('.')
            let suffix = fileArr[fileArr.length - 1]
            if (suffix !== 'xls' && suffix !== 'xlsx') {
                ElMessage.error('文件格式不正确！')
                return false
            } else if (suffix.size / 1024 / 1024 > 2) {
                ElMessage.error('上传图片不能超过2MB！')
                return false
            }
            return true
        }
            const handleAvatarSuccess = async (response, upload) => {
                console.log(response)
                console.log(upload)
                // imageUrl.value = URL.createObjectURL(uploadFilled.row)
            }
            return {
                xlsxList,
                beforeAvatarUpload,
                handleAvatarSuccess,
                params,
                search,
                role,
                changeState,
                changeTestNumber,
                addFormDialog,
                receiveAddForm,
                cancelAddForm,
                loading,
                operates,
                operations,
                handleOperation,
                tableTitle,
                editFormDialog,
                editData,
                cancelEditForm,
                receiveEditForm,
                exportName
            }
        }
    }
</script>

