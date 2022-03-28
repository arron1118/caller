<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column label="Date" width="180">
            <template #default="scope">
                <div style="display: flex; align-items: center">
                    <el-icon><Phone /></el-icon>
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </div>
            </template>
        </el-table-column>
        <el-table-column label="Name" width="180">
            <template #default="scope">
                <el-popover effect="light" trigger="hover" placement="top" width="auto">
                    <template #default>
                        <div>name: {{ scope.row.name }}</div>
                        <div>address: {{ scope.row.address }}</div>
                    </template>
                    <template #reference>
                        <el-tag>{{ scope.row.name }}</el-tag>
                    </template>
                </el-popover>
            </template>
        </el-table-column>
        <el-table-column label="Operations">
            <template #default="scope">
                <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
                >Edit</el-button
                >
                <el-button
                    size="small"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                >Delete</el-button
                >
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
import { Phone } from '@element-plus/icons-vue'
export default {
    name: "Table",
    components:{
        Phone
    },
    props:{
        tableData:{
            type: Object,
            default: {}
        }
    }
}
</script>

<style scoped>

</style>
