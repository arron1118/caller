<template>
    <admin-layout title="Dashboard">
        <el-row class="border py-4 mb-10">
            <el-col :span="6">
               <el-row>
                   <el-col :span="24" class="text-center">
                       <div class="mb-4 text-xl">您好，<span class="text-brand">测试</span>！</div>
                       <el-image src="../../../img/user.png" fit="contain" class="h-20"></el-image>
                   </el-col>
               </el-row>
            </el-col>
            <el-col :span="18">
                <el-row>
                   <el-col :span="8">
                       <el-row>
                           <el-col :span="12">
                               <div class="mb-2">账号：测试</div>
                               <div>手机：***********</div>
                           </el-col>
                           <el-col :span="12">
                               <div class="mb-2">当前余额/元</div>
                               <div class="mb-2 text-yellow-600"><el-icon><money /></el-icon><span class="text-2xl font-semibold ml-2">123456789</span></div>
                               <el-button type="primary">立即充值</el-button>
                           </el-col>
                       </el-row>
                   </el-col>
                    <el-col :span="10"></el-col>
                   <el-col :span="6" class="text-center">
                        <el-row>
                            <el-col :span="12">
                                <el-image src="../../../img/serve.png" fit="contain" class="w-auto h-10 mb-2"></el-image>
                                <div class="mb-2">客服咨询</div>
                                <div class="text-xl font-semibold hover:text-blue-400">13622850769</div>
                            </el-col>
                            <el-col :span="12">
                                <el-image src="../../../img/xiaoqiang.png" fit="contain" class="w-auto h-10 mb-2"></el-image>
                                <div class="mb-2">微信咨询</div>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <el-row class="mb-4">
            <el-col :span="24">
               <div class="mb-4">
                   <el-divider content-position="left">网站概况</el-divider>
                   <el-row>
                       <el-col :span="3">
                       </el-col>
                       <el-col :span="21">
                           <el-row>
                               <el-col :span="4" class="border-r-2 p-1 hover:bg-gray-50 hover:text-yellow-600 text-center mr-2 rounded">
                                   <div>总消费</div>
                                   <div class="mb-2"><el-icon><money /></el-icon><span class="text-xl font-semibold ml-2">123456789</span></div>
                               </el-col>
                               <el-col :span="4" class="border-r-2 p-1 hover:bg-gray-50 hover:text-yellow-600 text-center mr-2 rounded">
                                   <div>今日</div>
                                   <div class="mb-2"><el-icon><money /></el-icon><span class="text-xl font-semibold ml-2">123456789</span></div>
                               </el-col>
                               <el-col :span="4" class="border-r-2 p-1 hover:bg-gray-50 hover:text-yellow-600 text-center mr-2 rounded">
                                   <div>昨日</div>
                                   <div class="mb-2"><el-icon><money /></el-icon><span class="text-xl font-semibold ml-2">123456789</span></div>
                               </el-col>
                               <el-col :span="4" class="border-r-2 p-1 hover:bg-gray-50 hover:text-yellow-600 text-center mr-2 rounded">
                                   <div>本月</div>
                                   <div class="mb-2"><el-icon><money /></el-icon><span class="text-xl font-semibold ml-2">123456789</span></div>
                               </el-col>
                               <el-col :span="4" class="border-r-2 p-1 hover:bg-gray-50 hover:text-yellow-600 text-center mr-2 rounded">
                                   <div>今年</div>
                                   <div class="mb-2"><el-icon><money /></el-icon><span class="text-xl font-semibold ml-2">123456789</span></div>
                               </el-col>
                               <el-col :span="4">
                               </el-col>
                           </el-row>
                       </el-col>
                   </el-row>
               </div>
              <div class="mb-4">
                  <el-divider content-position="left">呼叫统计</el-divider>
                  <el-row>
                      <el-col :span="3">
                      </el-col>
                      <el-col :span="21">
                          <el-row>
                              <el-col :span="8">

                              </el-col>
                              <el-col :span="16">
                                  <el-row>
                                      <el-col :sm="12" :lg="6" class="hover:bg-gray-50">
                                          <el-result
                                              title="9999999"
                                              sub-title="总呼出"
                                          >
                                              <template #icon>
                                                  <el-icon :size="30" color="#409EFC"><headset /></el-icon>
                                              </template>
                                          </el-result>
                                      </el-col>
                                      <el-col :sm="12" :lg="6" class="hover:bg-gray-50">
                                          <el-result
                                              title="9999999"
                                              sub-title="总时间(分)"
                                          >
                                              <template #icon>
                                                  <el-icon :size="30" color="#545C64"><phone /></el-icon>
                                              </template>
                                          </el-result>
                                      </el-col>
                                      <el-col :sm="12" :lg="6" class="hover:bg-gray-50">
                                          <el-result
                                              title="9999999"
                                              sub-title="已接听"
                                          >
                                              <template #icon>
                                                  <el-icon :size="30" color="#67C23A"><CircleCheck /></el-icon>
                                              </template>
                                          </el-result>
                                      </el-col>
                                      <el-col :sm="12" :lg="6" class="hover:bg-gray-50">
                                          <el-result
                                              title="9999999"
                                              sub-title="未接听"
                                          >
                                              <template #icon>
                                                  <el-icon :size="30" color="#F56C6C"><CircleClose /></el-icon>
                                              </template>
                                          </el-result>
                                      </el-col>
                                  </el-row>
                              </el-col>
                          </el-row>
                      </el-col>
                  </el-row>
              </div>
                <div class="mb-4">
                    <el-divider content-position="left">排行榜</el-divider>
                    <el-row>
                        <el-col :span="3">
                        </el-col>
                        <el-col :span="21">
                             <Table :tableData="tableData" />
                        </el-col>
                    </el-row>
                </div>
                <div class="mb-4">
                    <el-divider content-position="left">近12小时拨号统计</el-divider>
                    <el-row>
                        <el-col :span="3">
                        </el-col>
                        <el-col :span="21">
                            <Table :tableData="tableData" />
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
import Table from '../components/Table.vue'
export default {
    name: "Dashboard",
    components: {
        Table,AdminLayout,Money,Headset,Phone,CircleCheck,CircleClose
    },
    setup(){
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
            tableData
        }
    },
    mounted() {
    },
    methods: {
    }
}
</script>

<style scoped>

</style>
