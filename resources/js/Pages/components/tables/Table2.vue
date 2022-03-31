<template>
    <el-row>
        <el-col>
            <el-table
                :data="tableData"
                style="width: 100%"
                ref="multipleTableRef"
                :default-sort="{ prop: 'number', order: 'descending' }"
                @selection-change="handleSelectionChange"
                id="print"
            >
        <el-table-column type="selection" width="55" />
        <el-table-column
            v-for="(item, index) in tableTitle"
            :key="index"
            :prop="item.value"
            :label="item.label"
            :sortable="item.value === 'number'"
        />
                <el-table-column label="测试账号">
                    <template #default="scope">
                        <el-switch
                            v-model="scope.row.testNumber"
                            inline-prompt
                            active-text="是"
                            inactive-text="否"
                            active-color="#E6A23C"
                            :width="width"
                        />
                    </template>
                </el-table-column>
                <el-table-column label="状态">
                    <template #default="scope">
                        <el-switch
                            v-model="scope.row.state"
                            inline-prompt
                            active-text="正常"
                            inactive-text="禁止"
                            active-color="#E6A23C"
                            :width="width"
                        />
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button type="success" size="small" @click="handleEdit(scope.$index, scope.row)"
                        >编辑</el-button
                        >
                        <el-button
                            size="small"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)"
                        >删除</el-button
                        >
                    </template>
                </el-table-column>
    </el-table>
            <div class="py-4 pl-1">
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :page-count="tableData.length"
                    :page-size="pageSize"
                />
            </div>
        </el-col>
    </el-row>
</template>

<script>
import { Phone } from '@element-plus/icons-vue'
import { h, ref } from 'vue'
import { ElMessageBox, ElMessage } from 'element-plus'
export default {
    name: "Table2",
    components:{
        Phone
    },
    props:[ 'tableTitle', 'tableData' ],
    setup(props, context){
        const pageSize = ref(1)
        const width =ref(60)
        const handleEdit = async(index, row) => {
            console.log(index, row)
            context.emit('clickTableEdit', true, row)
        }
        const handleDelete = (index, row) => {
            console.log(index, row)
            console.log(row.id)
            ElMessageBox({
                title: '确认删除此项数据吗？',
                message: h('p', null, [
                    h('span', null, '此数据将会被'),
                    h('i', { style: 'color: #F56C6C' }, '删除'),
                ]),
                showCancelButton: true,
                confirmButtonText: '删除',
                cancelButtonText: '取消',
                beforeClose: (action, instance, done) => {
                    if (action === 'confirm') {
                        instance.confirmButtonLoading = true
                        instance.confirmButtonText = 'Loading...'
                        setTimeout(() => {
                            done()
                            setTimeout(() => {
                                instance.confirmButtonLoading = false
                            }, 300)
                        }, 3000)
                    } else {
                        done()
                    }
                },
            }).then((action) => {
                ElMessage({
                    type: 'success',
                    // message: `action: ${action}`,
                    message: '已删除'
                })
            })
        }
        const multipleSelection = ref([])
        const selectExport = ref([])
        const handleSelectionChange = async(val) => {
            multipleSelection.value = val
            selectExport.value = multipleSelection.value
            context.emit('selectExports', selectExport.value)
        }
        const handlePrints = (row) => {

        }
        return{
            selectExport,
            pageSize,
            handleEdit,
            handleDelete,
            width,
            multipleSelection,
            handleSelectionChange,
            handlePrints
        }
    },
    mounted() {
       // console.log('shuju',this.tableData)
    }


}
</script>

<style scoped>

</style>
