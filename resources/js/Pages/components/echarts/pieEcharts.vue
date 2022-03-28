<template>
    <div id="pieChartId" :class="conClasses" class="col-span-2"/>
</template>

<script>
import * as echarts from "echarts";
export default {
    name: "pieEcharts",
    components: {

    },
    props: {
        conClasses: {
            default: () => ['h-96', 'w-full']
        },
        pieTitle: {
            type: String,
            default: ''
        }
    },
    mounted() {
        this.initChart()
    },
    methods: {
        initChart() {
            const el = echarts.init(document.getElementById('pieChartId'))
            el.setOption({
                title: {
                    text: this.pieTitle
                },
                tooltip: {
                    trigger: 'item'
                },
                // legend: {
                //     orient: 'vertical',
                //     left: 'left'
                // },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: '50%',
                        data: [
                            { value: 1048, name: 'Search Engine' },
                            { value: 735, name: 'Direct' },
                            { value: 580, name: 'Email' },
                            { value: 484, name: 'Union Ads' },
                            { value: 300, name: 'Video Ads' }
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            })
        }
    }
}
</script>

<style scoped>

</style>
