<template>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column
                    v-for="(item, index) in tableTitle"
                    :key="index"
                    :prop="item.value"
                    :label="item.label"
                />
            </el-table>
</template>

<script>
export default {
    name: "PrintTable",
    components:{

    },
    props:{
        tableData:{
            type: Object,
            default: {}
        },
        tableTitle:{
            type: Object,
            default: {}
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
