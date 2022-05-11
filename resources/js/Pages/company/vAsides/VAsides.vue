<template>
       <el-tree
           :data="data"
           :props="defaultProps"
           node-key="id"
           width="120"
           @node-click="handleNodeClick" />
</template>

<script>
import {ref} from "vue"

export default {
    name: "VAsides",
    setup(props, context) {
        const defaultProps = ref({
            children: 'children',
            label: 'label',
        })
        const data = ref( [
            {
                label: '全部',
                id: 1,
                children: [
                    {
                        id: 2,
                        label: '试用期'
                    },
                    {
                        id: 3,
                        label: '使用中'
                    },
                    {
                        id: 4,
                        label: '即将到期'
                    },
                    {
                        id: 5,
                        label: '已无效'
                    }
                ]
            }
        ])
        const handleNodeClick = (data, node, root) => {
            // console.log(data)
            // console.log(node.id)
            // console.log(root)
            context.emit('getTreeId', node.id)
        }
        return{
            data,
            defaultProps,
            handleNodeClick
        }

    },
    props: [

    ],
}
</script>

<style scoped>

</style>
