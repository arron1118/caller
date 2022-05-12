<template>
    <div id="barChartId" :class="conClasses" class="col-span-2"/>
</template>

<script>
import * as echarts from "echarts";
export default {
    name: "barEcharts",
    components: {

    },
    props: {
        conClasses: {
            default: () => ['h-96', 'w-full']
        },
        barTitle: {
            type: String,
            default: ''
        }
    },
    mounted() {
        this.initChart()
    },
    methods: {
        initChart() {
            const el = echarts.init(document.getElementById('barChartId'))
            el.setOption({
                title: {
                    text: '呼叫统计'
                },
                tooltip: {},
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {},
                series: [
                    {
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }
                ]
            })
        }
    }
}
</script>

<style scoped>

</style>
