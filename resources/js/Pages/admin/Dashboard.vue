<template>
    <admin-layout title="Dashboard">
        <el-row class="mb-4">
            <el-col :span="24">
                <div class="mb-6 bg-white rounded shadow py-4">
                    <el-row justify="space-around">
                        <el-col :span="6" class="p-1 hover:text-yellow-600 text-center rounded">
                            <div class="grid grid-cols-3 border">
                                <div class="bg-yellow-500 flex flex-col justify-center items-center">
                                    <el-icon :size="40" color="#fff"><money /></el-icon>
                                </div>
                                <div class="col-span-2 bg-white p-2">
                                    <div class="mb-2"><span class="text-lg font-semibold">123456789</span></div>
                                    <div>今日收入<span class="text-yellow-500">[ -96.70% ]</span></div>
                                </div>
                            </div>
                        </el-col>
                       <el-col :span="4" class="p-1 hover:text-yellow-600 text-center rounded">
                           <div class="grid grid-cols-2 border">
                               <div class="bg-blue-500 flex flex-col justify-center items-center">
                                   <el-icon :size="40" color="#fff"><money /></el-icon>
                               </div>
                               <div class="bg-white p-2">
                                   <div class="mb-2"><span class="text-lg font-semibold">123456789</span></div>
                                   <div>总收入</div>
                               </div>
                           </div>
                       </el-col>
                       <el-col :span="4" class="p-1 hover:text-yellow-600 text-center rounded">
                           <div class="grid grid-cols-2 border">
                               <div class="bg-gray-500 flex flex-col justify-center items-center">
                                   <el-icon :size="40" color="#fff"><money /></el-icon>
                               </div>
                               <div class="bg-white p-2">
                                   <div class="mb-2"><span class="text-lg font-semibold">123456789</span></div>
                                   <div>昨天收入</div>
                               </div>
                           </div>
                       </el-col>
                       <el-col :span="4" class="p-1 hover:text-yellow-600 text-center rounded">
                           <div class="grid grid-cols-2 border">
                               <div class="bg-green-500 flex flex-col justify-center items-center">
                                   <el-icon :size="40" color="#fff"><money /></el-icon>
                               </div>
                               <div class="bg-white p-2">
                                   <div class="mb-2"><span class="text-lg font-semibold">123456789</span></div>
                                   <div>本月收入</div>
                               </div>
                           </div>
                       </el-col>
                       <el-col :span="4" class="p-1 hover:text-yellow-600 text-center rounded">
                           <div class="grid grid-cols-2 border">
                               <div class="bg-red-500 flex flex-col justify-center items-center">
                                   <el-icon :size="40" color="#fff"><money /></el-icon>
                               </div>
                               <div class="bg-white p-2">
                                   <div class="mb-2"><span class="text-xl font-semibold">123456789</span></div>
                                   <div>今年收入</div>
                               </div>
                           </div>
                       </el-col>
                    </el-row>
               </div>
                <div class="mb-6 grid grid-cols-2 gap-4">
                      <div class="bg-white rounded shadow p-4 grid grid-cols-3">
                          <div class="col-span-2"><pie-echarts :pieTitle="pieTitle"/></div>
                         <div class="pl-4 border-l mt-12">
                             <div class="flex flex-row justify-between mb-4 hover:bg-gray-100">
                                 <div><el-icon :size="15" color="#409EFC" class="mx-2"><headset /></el-icon>总呼出</div>
                                 <div class="mx-2">99999</div>
                             </div>
                             <div class="flex flex-row justify-between mb-4 hover:bg-gray-100">
                                 <div><el-icon :size="15" color="#6b7280" class="mx-2"><phone /></el-icon>总时间(分)</div>
                                 <div class="mx-2">99999</div>
                             </div>
                             <div class="flex flex-row justify-between mb-4 hover:bg-gray-100">
                                 <div><el-icon :size="15" color="#22c55e" class="mx-2"><CircleCheck /></el-icon>已接听</div>
                                 <div class="mx-2">99999</div>
                             </div>
                             <div class="flex flex-row justify-between mb-4 hover:bg-gray-100">
                                 <div><el-icon :size="15" color="#ef4444" class="mx-2"><CircleClose /></el-icon>未接听</div>
                                 <div class="mx-2">99999</div>
                             </div>
                         </div>

                      </div>
                      <div class="bg-white rounded shadow p-4">
                          <div class="text-lg font-semibold text-gray-600 mb-4">排行榜</div>
                          <Table :tableData="tableData" />
                      </div>
              </div>
                <div class="mb-6 bg-white rounded shadow p-4">
                    <el-row>
                        <el-col>
                            <line-echarts :lineTitle="lineTitle"/>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
    </admin-layout>
</template>

<script>
import AdminLayout from "../../Layouts/AdminLayout"
import { Money, Headset, Phone, CircleCheck, CircleClose } from '@element-plus/icons-vue'
import { ref, reactive } from "vue";
import Table from '../components/tables/Table1.vue'
import lineEcharts from '../components/echarts/lineEcharts.vue'
import barEcharts from '../components/echarts/barEcharts.vue'
import pieEcharts from '../components/echarts/pieEcharts.vue'

import * as echarts from 'echarts'
export default {
    name: "Dashboard",
    components: {
        Table, AdminLayout, Money, Headset, Phone, CircleCheck, CircleClose, lineEcharts, barEcharts, pieEcharts
    },
    setup(){
        const lineTitle = ref('近12小时拨号统计')
        const barTitle = ref('呼叫统计')
        const pieTitle = ref('呼叫统计')
        const tableData = [
            {
                name: 'Tom',
                answer: '10',
                notAnswer: '12',
                time: '100',
                money: '100'
            },
            {
                name: 'Tom',
                answer: '10',
                notAnswer: '12',
                time: '100',
                money: '100'
            }

        ]
        return {
            tableData,
            lineTitle,
            barTitle,
            pieTitle
        }
    }
}
</script>

<style scoped>

</style>
