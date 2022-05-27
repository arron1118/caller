<template>
    <home-layout title="Dashboard">
        <div class="mb-6 grid grid-cols-4 gap-4">
            <div class="col-span-3 bg-white rounded shadow">
                <div class="text-lg font-semibold text-gray-600 mb-4 ml-2">客户管理</div>
                <basic-table
                    :tableTitle="tableTitle"
                    :where="params"
                    :url="'getHistoryList'"
                    :customerSlot="true"
                    :operates="operates"
                    :showTable="showTable"
                >
                    <template v-slot:customerSlot="scope">
                        <el-button-group>
                            <el-button type="primary" @click="importDialog = true">导入客户</el-button>
                            <el-button type="primary" plain @click="showTable = true">上次导入</el-button>
                            <el-button type="danger" plain @click="showTable = false">清除列表</el-button>
                        </el-button-group>
                    </template>
                    <template v-slot:operates="scope">
                        <table-operation
                            :operations="operations"
                            :rawData="scope.scope.row"
                            @handleOperation="handleOperation"
                        ></table-operation>
                    </template>
                </basic-table>
            </div>
            <div class="bg-white rounded shadow-lg p-4">
                <div class="text-lg font-semibold text-gray-600 mb-4 ml-2 flex flex-row justify-between">
                    <div>拨打面板</div>
                   <div>
                       <el-tooltip
                           class="box-item"
                           effect="dark"
                           content="点击查看注意事项"
                           placement="top-start"
                           :visible="visible"
                       >
                           <el-icon :size="18" @click="infosDialog"><InfoFilled /></el-icon>
                       </el-tooltip>
                   </div>
                </div>
               <div>
                   <el-input class="h-20 mb-4 text-center"
                             v-model.number="text"
                             maxlength="11"
                             placeholder="请输入号码"
                             clearable
                             @keyup.enter.native="makeCall(text)"
                   ></el-input>
               </div>
                <div class=" grid grid-cols-3">
                    <div v-for="item in numberList" :key="item">
                        <el-button circle size="large" @click="getNumber(item)" class="m-2">{{item.text}}</el-button>
                    </div>
                </div>
                <div class="mt-6">
                    <el-button type="primary" class="w-full" @click="makeCall(text)">拨号</el-button>
                </div>
            </div>
        </div>
    </home-layout>
    <!--        弹框-->
    <el-dialog v-model="importDialog" title="导入客户">
        <import-customer
            @clickAdd="receiveAddForm"
            @clickCancelAdd="cancelAddForm"
            :loading="loading"
        ></import-customer>
    </el-dialog>
</template>

<script>
import HomeLayout from "@/Layouts/HomeLayout"
import { InfoFilled } from '@element-plus/icons-vue'
import {ElMessage, ElMessageBox, ElNotification} from 'element-plus'
import { ref,h } from "vue"
import BasicTable from '@/Pages/home/components/tables/BasicTable.vue'
import TableOperation from "@/Pages/admin/components/tables/TableOperation";
import importCustomer from '@/Pages/home/sub/importCustomer.vue'

export default {
    name: "Dashboard",
    components: {
        importCustomer,InfoFilled, HomeLayout, BasicTable,TableOperation
    },
    setup(){
        const {replaceStr, getCountDown, TipsBox, phoneCode, ContextBox} = require("@/lqp")
        const operates = ref({
            operate: true,
            label: '操作',
        })
        const operations = ref([{
            types: 'edit',
            title: '拨打电话',
            type: 'primary',
            icon: ['fas', 'pen-to-square'],

        }
        ])
        const text = ref([])
        const numberList = ref([
            {text: '1'},
            {text: '2'},
            {text: '3'},
            {text: '4'},
            {text: '5'},
            {text: '6'},
            {text: '7'},
            {text: '8'},
            {text: '9'},
            {text: '*'},
            {text: '0'},
            {text: '-'},
        ])
        const tableTitle = ref([
            {
                label: '客户名称',
                value: 'username',
                show: true
            },
            {
                label: '电话号码',
                value: 'axb_number',
                show: true
            },
            {
                label: '所在地',
                value: 'axb_number',
                show: true
            },
            {
                label: '邮箱',
                value: 'axb_number',
                show: true
            }
        ])
        const params = ref({
            page: 1,
            limit: 8,
        })
        const importDialog = ref(false)
        const loading = ref(false)
        const showTable = ref(false)
        const time = ref(10)
        const number = ref('13450031402')
        const visible = ref(true)
        const getTime = (t) => {
            let interval = setInterval(() => {
                    if(t === 0){
                        clearInterval(interval)
                    }else{
                        t--
                        return t
                    }
                },
                1000)
        }
        const infosDialog = () => {
            visible.value = false
            ContextBox()
        }
        const getNumber = (v) => {
            if(v.text === '-'){
                text.value = []
                return false
            }
            text.value = text.value + v.text
        }
        const handleOperation = (op, row) => {
          if (op.types === 'edit') {
                console.log(row.value)
              ElMessageBox({
                  title: '拨号成功！',
                  message: h('p', null, [
                      h('span', null, [
                          h('span', null, '请在'),
                          h('span', {style: 'color: red'}, time.value),
                          h('span', null, '秒内用手机拨打号码：')
                      ]),
                      h('span', {style: 'font-size: 20px; color: teal'}, number.value)
                  ]),
              })

            }
        }
        const receiveAddForm = (e, r) => {
            loading.value = r
            // 提交参数处理完成后，后台返回数据成功后，关闭加载。提示成功。刷新页面。
            setTimeout(function () {
                loading.value = false
                addFormDialog.value = false
                ElMessage({
                    type: 'success',
                    // message: `action: ${action}`,
                    message: '已提交'
                })
                // 重载表格数据

            }, 3000);

        }
        const cancelAddForm = (e) => {
            addFormDialog.value = e
        }
        const makeCall = (phone) => {
            if(phone.length<1){
                TipsBox('warning', '请输入号码!')
                return false
            }
            if(!phoneCode(phone)){
                TipsBox('warning', '请输入正确的号码!')
                return false
            }
             console.log('submit', phone)

        }
        return {
            visible,
            makeCall,
            getTime,
            showTable,
            receiveAddForm,
            cancelAddForm,
            loading,
            importDialog,
            operates,
            operations,
            handleOperation,
            infosDialog,
            text,
            getNumber,
            numberList,
            tableTitle,
            params,
            replaceStr,
            getCountDown,
            time,
            number
        }
    },
}
</script>

<style scoped>
</style>
