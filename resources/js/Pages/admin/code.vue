<!--<template>-->
<!--    <div>-->
<!--        <el-popover placement="left-start" title="列选" trigger="click">-->
<!--            <el-checkbox-group v-model="clickList" @change="columnFilter">-->
<!--                <el-checkbox v-for="(item, index) in tableList" :lable="item.field">{{item.name}}</el-checkbox>-->
<!--            </el-checkbox-group>-->
<!--            <el-button slot="reference">0</el-button>-->
<!--        </el-popover>-->
<!--        <el-table :data="dataList" style="width: 100%" :key="key">-->
<!--            <el-table-column prop="date" label="1" width="180" v-if="columnShow.serialNumber"/>-->
<!--            <el-table-column prop="name" label="2" width="180" v-if="columnShow.systemName"/>-->
<!--        </el-table>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--import {ref} from 'vue'-->
<!--export default {-->
<!--    name: "Code",-->
<!--    setup(){-->
<!--        const key = ref(1)-->
<!--        const tableList = ref([-->
<!--            {title: 'gz', field: 'serialNumber'},-->
<!--            {title: 'g2z', field: 'systemName'},-->
<!--        ])-->
<!--        const checkList = ref([])-->
<!--        const coumnShow: {}-->
<!--        const tableData = ref([-->
<!--            {-->
<!--                date: '2016-05-03',-->
<!--                name: 'Tom',-->
<!--                address: 'No. 189, Grove St, Los Angeles',-->
<!--            },-->
<!--            {-->
<!--                date: '2016-05-02',-->
<!--                name: 'Tom',-->
<!--                address: 'No. 189, Grove St, Los Angeles',-->
<!--            },-->
<!--            {-->
<!--                date: '2016-05-04',-->
<!--                name: 'Tom',-->
<!--                address: 'No. 189, Grove St, Los Angeles',-->
<!--            },-->
<!--            {-->
<!--                date: '2016-05-01',-->
<!--                name: 'Tom',-->
<!--                address: 'No. 189, Grove St, Los Angeles',-->
<!--            },-->
<!--        ])-->
<!--        const columnFilter = (val) => {-->
<!--            if(val === undefind){-->
<!--                tableList.value.forEach(element => {-->
<!--                    checkList.value.push(element.field)-->
<!--                    columnShow[element.field] = true-->
<!--                })-->
<!--            }else{-->
<!--                Object.keys(columnShow.value).forEach(element = > {-->
<!--                    columnShow[element.field]-->
<!--                })-->
<!--            }-->
<!--        }-->
<!--        return{-->
<!--            tableData-->
<!--        }-->

<!--    },-->
<!--    data(){-->
<!--        return{-->
<!--            expands: []-->
<!--        }-->
<!--    },-->
<!--    methods:{-->

<!--    }-->

<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--@media print {-->
<!--    html,-->
<!--    body {-->
<!--        height: inherit;-->
<!--    }-->
<!--}-->
<!--</style>-->
