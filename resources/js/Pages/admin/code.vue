<template>
    <div>
        <el-table
            :data="tableData"
            style="width: 100%; margin-bottom: 20px"
            row-key="id"
            border
            :row-key="getRowKeys"
            @current-change="toggleRow"
            :loading="true"
        >
            <el-table-column prop="date" label="date" sortable width="180" type="expand">
                <div slot-scope="props">
                    123456
                </div>
            </el-table-column>
            <el-table-column prop="name" label="Name" sortable width="180" />
        </el-table>
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    name: "Code",
    setup(){
        const tableData = ref([
            {
                id: 1,
                date: '2016-05-02',
                name: 'wangxiaohu',
            },
            {
                id: 2,
                date: '2016-05-04',
                name: 'wangxiaohu',
            },
            {
                id: 3,
                date: '2016-05-01',
                name: 'wangxiaohu',
                children: [
                    {
                        id: 31,
                        dates: 'dates',
                        names: 'names',
                    },
                    {
                        id: 32,
                        dates: 'dates',
                        names: 'names',
                    },
                ],
            },
            {
                id: 4,
                date: '2016-05-03',
                name: 'wangxiaohu',
            },
        ])
        return{
            tableData
        }

    },
    data(){
        return{
            expands: []
        }
    },
    methods:{
        getRowKeys(row){
            console.log('9')
            console.log(row)
            return row.id
        },
        toggleRow(row){
            console.log(row)
            this.expands=[]
            this.expands.push('999999999999')

        }
    }

}
</script>

<style scoped>
@media print {
    html,
    body {
        height: inherit;
    }
}
</style>
