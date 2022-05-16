<template>
    <div id="pieChartId" ref="pie" :class="conClasses" class="col-span-2"/>
</template>

<script>
import * as echarts from "echarts";
import {ref} from 'vue'
import {post} from "@/http/request";
export default {
    name: "pieEcharts",
    props: {
        conClasses: {
            default: () => ['h-96','w-full']
        },
        pieTitle: {
            type: String,
            default: ''
        }
    },
    setup(){
        const params = ref({
            page: 1,
            limit: 4,
        })
        const total = ref(0)
        return{
            params,
            total,
        }
    },
    data() {
        return {
            el: null,
        }
    },
    mounted() {
        this.el = echarts.init(this.$refs['pie'])
        window.onresize = function () {
            // this.el.resize();
        }
        this.getPieData()

    },
    methods: {
        getPieData () {
            this.loading = true
            post('getHistoryList', this.params).then((res) => {
                if (res.code === 1) {
                    let data = []
                    res.data.forEach((item)=>{
                        data.push({value: item.user_id, name: item.customer})
                    })
                    this.initChart(data)
                }
            })
        },
        initChart(d) {
            this.el.setOption({
                title: {
                    text: this.pieTitle
                },
                tooltip: {
                    trigger: 'item'
                },
                series: [
                    {
                        type: 'pie',
                        data: d,
                        roseType: 'area'
                    }
                ]
            })
        }
    }
}
</script>

<style scoped>

</style>
