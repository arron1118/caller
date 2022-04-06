<template>
    <el-row>
        <el-col>
            <el-table
                :data="tableData"
                style="width: 100%"
                ref="multipleTableRef"
                @selection-change="handleSelectionChange"
                id="print"
            >
                <el-table-column type="selection" width="55" v-if="selectionType === true" />
                <el-table-column
                    v-for="(item, index) in tableTitle"
                    :key="index"
                    :prop="item.value"
                    :label="item.label"
                    :sortable="item.sortable === true"
                />
                <el-table-column label="测试账号">
                    <template v-slot="scope">
                        <el-switch
                            v-model="scope.row.testNumber"
                            inline-prompt
                            active-text="是"
                            inactive-text="否"
                            active-color="#E6A23C"
                            :width="width"
                            @change="changeTestNumber($event, scope.row, scope.$index)"
                        />
                    </template>
                </el-table-column>

                <el-table-column fixed="right" width="180" v-if="operates.operate" :label="operates.label">
                 <template v-slot="scope">
                     <slot name="operates" :scope="scope"></slot>
                 </template>
                </el-table-column>

<!--                <el-table-column label="状态">-->
<!--                    <template #default="scope">-->
<!--                        <el-switch-->
<!--                            v-model="scope.row.state"-->
<!--                            inline-prompt-->
<!--                            active-text="正常"-->
<!--                            inactive-text="禁止"-->
<!--                            active-color="#E6A23C"-->
<!--                            :width="width"-->
<!--                        />-->
<!--                    </template>-->
<!--                </el-table-column>-->
    </el-table>
<!--            <div class="py-4 pl-1">-->
<!--                <el-pagination-->
<!--                    background-->
<!--                    layout="prev, pager, next"-->
<!--                    :page-count="tableData.length"-->
<!--                    :page-size="pageSize"-->
<!--                />-->
<!--            </div>-->
        </el-col>
    </el-row>
</template>

<script>
import { Phone } from '@element-plus/icons-vue'
import { h, ref } from 'vue'
import { ElMessageBox, ElMessage } from 'element-plus'
export default {
    name: "BasicTable",
    components:{
        Phone
    },
    props:[ 'tableTitle', 'tableData','operates', 'selectionType' ],
    setup(props, context){
        const pageSize = ref(1)
        const width =ref(60)
        const handleEdit = async(index, row) => {
            console.log(index, row)
            context.emit('clickTableEdit', true, row)
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
        const changeTestNumber = (e,row,index) => {
            // e返回状态，row当前行数据， index下标
            console.log(e)
            console.log(row)
            console.log(index)
            //


        }
        return{
            changeTestNumber,
            selectExport,
            pageSize,
            handleEdit,
            width,
            multipleSelection,
            handleSelectionChange,
            handlePrints
        }
    },
    mounted() {

    }


}
</script>

<style scoped>

</style>
