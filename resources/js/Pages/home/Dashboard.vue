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
                            <el-button type="primary" @click="importCustomer = true">导入客户</el-button>
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
            <div class="bg-white rounded shadow-lg text-center p-4">
                <div class="text-right mb-6">
                    <el-tooltip
                        class="box-item"
                        effect="dark"
                        content="点击查看注意事项"
                        placement="top-start"
                    >
                    <el-icon :size="18" @click="infosDialog"><InfoFilled /></el-icon>
                    </el-tooltip>
                </div>
               <div>
                   <el-input class="h-20 mb-4 text-center"
                             v-model.number="text"
                             maxlength="11"
                             placeholder="请输入号码"
                             clearable
                   ></el-input>
               </div>
                <div class=" grid grid-cols-3">
                    <div v-for="item in numberList" :key="item">
                        <el-button circle size="large" @click="getNumber(item)" class="m-2">{{item.text}}</el-button>
                    </div>
                </div>
                <div class="mt-6">
                    <el-button type="primary" class="w-full">拨号</el-button>
                </div>
            </div>
        </div>
    </home-layout>
    <!--        弹框-->
    <el-dialog v-model="addFormDialog" title="导入客户">
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
        const {replaceStr, getCountDown} = require("@/lqp")
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
        const importCustomer = ref(false)
        const loading = ref(false)
        const showTable = ref(false)
        const time = ref(10)
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
        const number = ref('13450031402')
        const infosDialog = () => {
            ElNotification({
                title: '温馨提示',
                message: h(
                    "div",
                    {
                        style:"padding: 2px;",
                    },
                   [
                       h(
                           "div",
                           {
                               style: 'color: #E6A23C'
                           },
                           '1、只允许拨打本公司业务电话，不允许拨打其他行业电话。'
                       ),
                       h(
                           "div",
                           {
                               style: 'color: #E6A23C'
                           },
                           '2、拨号当中不允许出现：金融、地产相关高频行业。'
                       ),
                       h(
                           "div",
                           {
                               style: 'color: #E6A23C'
                           },
                           '3、通话中不允许出现：代开发票、造假等违法字眼。'
                       ),
                       h(
                           "div",
                           {
                               style: 'color: #E6A23C'
                           },
                           '4、不允许在通话中辱骂。'
                       ),
                   ]
                ),
                type: 'info',
                duration: 0,
            })
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
        return {
            getTime,
            showTable,
            receiveAddForm,
            cancelAddForm,
            loading,
            importCustomer,
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
    }
}
</script>

<style scoped>
</style>
