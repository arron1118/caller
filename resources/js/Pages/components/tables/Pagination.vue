<template>
           <el-pagination  background
                           @size-change="handleSizeChange"
                           @current-change="handlePageChange"
                           :page-sizes="[10, 30, 100]"
                           :page-size="pageSize"
                           :layout="layout"
                           :total="total">

           </el-pagination>
</template>

<script>
export default {
    name: "Pagination",
    components:{

    },
    props: {
        pageSize: [Number, String],//一页多少条
        currentPage: [Number, String],//当前页
        total:[Number, String],//总页数
        options: [Object],  // 分页发生变化赋值给options
        render: [Function], // 跳转触发的请求
        layout: {
            type: String,
            default: 'total, sizes, prev, pager, next, jumper'
        }
    },
    setup(props,context) {
        // 分页导航
        const handlePageChange = (val)=>{
            props.options.page = val;
            props.render();
        }
        //切换分页条数
        const handleSizeChange = (val) =>{
            props.options.limit = val;
            props.render();
        }
        return{
            handlePageChange,
            handleSizeChange
        }
    }
}
</script>
