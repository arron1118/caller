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
                <el-table-column :label="testNumbers.label" v-if="testNumbers.testNumber">
                    <template v-slot="scope">
                       <slot name="testNumbers" :scope="scope"></slot>
                    </template>
                </el-table-column>
                <el-table-column :label="states.label" v-if="states.state">
                    <template v-slot="scope">
                        <slot name="states" :scope="scope"></slot>
                    </template>
                </el-table-column>
                <el-table-column width="160" v-if="operates.operate" :label="operates.label">
                 <template v-slot="scope">
                     <slot name="operates" :scope="scope"></slot>
                 </template>
                </el-table-column>
    </el-table>
            <div class="table-bottom m-4" v-if="pagination === true">
                <v-pagination
                    :pageSize="query.limit"
                    :total="pageTotal"
                    :options="query"
                    :render="getData">
                </v-pagination>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import {reactive, ref} from 'vue'
import vPagination from '@/Pages/components/tables/Pagination.vue'
export default {
    name: "BasicTable",
    components:{
        vPagination
    },
    props:[ 'tableTitle', 'tableData','operates','testNumbers','states', 'selectionType', 'pagination' ],
    setup(props, context){
        const pageSize = ref(1)
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
        // 分页
        const pageTotal = ref(0)  //总条数
        const query = reactive({//配置对应的查询参数
            appTimeStart:'',
            appTimeEnd:'',
            page: 1,
            limit:10,//page第几页,limit是一页几个
        })
        const getData = () => {
            console.log(query)
            // proxy.axios({
            //     url: 'api/getList',
            //     method: 'POST',
            //     data:query
            // }).then(res => {
            //     pageTotal.value = res.count;
            //     tableData.value = res.data;
            // })
        }
        getData()
        return{
            selectExport,
            pageSize,
            handleEdit,
            multipleSelection,
            handleSelectionChange,
            query,
            pageTotal,
            getData,
        }
    }
}
</script>

<style scoped>

</style>
