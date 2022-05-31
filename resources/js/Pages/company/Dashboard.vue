<template>
    <company-layout title="Dashboard">
                <div class="shadow mb-6 border">
                    <el-row class="text-center py-4">
                        <el-col :span="4">
                            <div class="border-r">
                                <div class="mb-4">您好，<span class="text-brand">测试</span>！</div>
                                <el-image src="../../../img/user.png" fit="contain" class="h-20"></el-image>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div class="mx-auto w-1/2" style="text-align: start; ">
                                <div class="mb-2">账号：测试</div>
                                <div>手机：***********</div>
                            </div>
                        </el-col>
                        <el-col :span="4">
                           <div class="border-r">
                               <div class="mx-auto" style="text-align: start; ">
                                   <div class="mb-2">当前余额/元</div>
                                   <div class="mb-2 text-yellow-600">
                                       <el-icon>
                                           <money/>
                                       </el-icon>
                                       <span class="text-2xl font-semibold ml-2">123456789</span></div>
                                   <el-button type="primary" >立即充值</el-button>
                               </div>
                           </div>
                        </el-col>
                        <el-col :span="4">
                            <div class="border-r">

                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div class="border-x">
                                <el-image src="../../../img/serve.png" fit="contain"
                                          class="w-auto h-10 mb-2"></el-image>
                                <div class="mb-2">客服咨询</div>
                                <div class="font-semibold hover:text-blue-400">13622850769</div>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <el-image src="../../../img/xiaoqiang.png" fit="contain"
                                      class="w-auto h-10 mb-2"></el-image>
                            <div class="mb-2">微信咨询</div>
                        </el-col>
                    </el-row>
                    <el-row class="text-center bg-gray-50 py-2">
                        <el-col :span="4">
                            <div class="border-r hover:text-yellow-500">
                                <div class="mb-2"><span class="text-lg font-semibold">123456789</span></div>
                                <div>总收入</div>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div class="border-r hover:text-yellow-500">
                                <div class="mb-2"><span class="text-lg font-semibold">123456789</span></div>
                                <div>总消费</div>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div class="border-r hover:text-yellow-500">
                                <div class="mb-2"><span class="text-lg font-semibold">123456789</span></div>
                                <div>今日收入<span class="text-yellow-500">[ -96.70% ]</span></div>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div class="border-r hover:text-yellow-500">
                                <div class="mb-2"><span class="text-lg font-semibold">123456789</span></div>
                                <div>昨日收入</div>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div class="border-r hover:text-yellow-500">
                                <div class="mb-2"><span class="text-lg font-semibold">123456789</span></div>
                                <div>本月收入</div>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div class="hover:text-yellow-500">
                                <div class="mb-2"><span class="text-lg font-semibold">123456789</span></div>
                                <div>今年收入</div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="mb-6 grid grid-cols-2 gap-4">
                    <div class="bg-white rounded shadow p-4 grid grid-cols-3 border">
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
                    <div class="bg-white rounded shadow p-4 border">
                        <div class="text-lg font-semibold text-gray-600 mb-4">排行榜</div>
                        <basic-table
                            :tableTitle="tableTitle"
                            :where="params"
                            :url="'getHistoryList'"
                            :specialUsername="true"
                            :buttonGroups="false"
                            :pagination="false"
                            :selectionType="false"
                        >
                            <template v-slot:specialUsername="scope">
                                <el-icon class="pr-1" v-if="scope.scope.$index<=2"><cold-drink color="#E6A23C" /></el-icon>
                                <span class="">{{ scope.scope.row.username }}</span>
                            </template>
                        </basic-table>
                    </div>
                </div>
                <div class="mb-6 bg-white rounded shadow p-4 border">
                    <el-row>
                        <el-col>
                            <line-echarts :lineTitle="lineTitle"/>
                        </el-col>
                    </el-row>
                </div>
    </company-layout>
</template>

<script>
import CompanyLayout from "@/Layouts/CompanyLayout"
import { Money, Headset, Phone, CircleCheck, CircleClose, ColdDrink } from '@element-plus/icons-vue'
import { ref } from "vue";
import BasicTable from '@/Pages/common/tables/BasicTable.vue'
import lineEcharts from '@/Pages/common/echarts/lineEcharts.vue'
import barEcharts from '@/Pages/common/echarts/barEcharts.vue'
import pieEcharts from '@/Pages/common/echarts/pieEcharts.vue'
export default {
    name: "Dashboard",
    components: {
        CompanyLayout, Money, Headset, Phone, CircleCheck, CircleClose,ColdDrink, lineEcharts, barEcharts, pieEcharts, BasicTable
    },
    setup(){
        const lineTitle = ref('近12小时拨号统计')
        const barTitle = ref('呼叫统计')
        const pieTitle = ref('呼叫统计')
        const tableTitle = ref([
            {
                label: '公司名称',
                value: 'username',
                show: true
            },
            {
                label: '未接听',
                value: 'axb_number',
                show: true
            },
            {
                label: '已接听',
                value: 'axb_number',
                show: true
            },
            {
                label: '时间（分）',
                value: 'axb_number',
                show: true
            },
            {
                label: '消费金额',
                value: 'axb_number',
                show: true
            }
        ])
        const params = ref({
            page: 1,
            limit: 8,
        })
        return {
            tableTitle,
            lineTitle,
            barTitle,
            pieTitle,
            params
        }
    }
}
</script>

<style scoped>
</style>
