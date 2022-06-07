import {ref} from "vue";
import {ElMessage, ElMessageBox} from "element-plus";
import {TipsBox} from "@/feedback"
const aa = 'aaa';

function bb() {
    return 'bb';
}
// 拨打
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
    // todo
}
// 验证为11位数的手机
const phoneCode = (phone) => {
    let telVerify = /^1[3456789]{1}\d{9}$/;
    //验证是验证手机号码为11位，且以1开头。
    // /^1[3456789]{1}\d{9}$/;
    return telVerify.test(phone)
}
// 隐藏电话号码
const replaceStr = (str, char) => {
    let a = str.substring(4, 6)
    let b = a.replace(a, char)
    return str.substring(0, 3) + b + str.substring(7, 11)
}
//全部导出
const excelData = ref([])
const allExportExcel = (tData, tTitle, tName) => {
    // 数据写入excel
    ElMessageBox.confirm('将导出为excel文件，确认导出?',
        {
            confirmButtonText: '导出',
            cancelButtonText: '取消',
            type: 'success',
        }
    ).then(() => {
        excelData.value = tData
        export2Excel(tData, tTitle, tName)
    }).catch(() => {

    })
}
const export2Excel = (tData, tTitle, tName) => {
    require.ensure([], () => {
        const {export_json_to_excel} = require('@/Pages/excel/export2Excel') // 这里必须使用绝对路径，使用@/+存放export2Excel的路径
        const tHeader = [] // 导出的excel的表头字段名称
        const filterVal = [] // 对象属性，对应于tHeader
        tTitle.forEach((item) => {
            tHeader.push(item.label)
            filterVal.push(item.value)
        })
        const list = excelData.value //json数组对象，接口返回的数据
        const data = formatJson(filterVal, list)
        export_json_to_excel(tHeader, data, tName)// 导出的表格名称
    })
}
const formatJson = (filterVal, jsonData) => {
    return jsonData.map(v => filterVal.map(j => v[j]))
}
// 选择导出
const selectExcelData = ref([])
const selectExportExcel = (tData, tTitle, tName) => {
    if (tData.length < 1) {
        ElMessage({type: 'warning', message: '请选择需要导出的数据'})
        return false
    }
    // 数据写入excel
    ElMessageBox.confirm('将导出为excel文件，确认导出?',
        {
            confirmButtonText: '导出',
            cancelButtonText: '取消',
            type: 'success',
        }
    ).then(() => {
        selectExcelData.value = tData
        export3Excel(tData, tTitle, tName)
    }).catch(() => {

    })
}
const export3Excel = (tData, tTitle, tName) => {
    require.ensure([], () => {
        const {export_json_to_excel} = require('@/Pages/excel/export2Excel') // 这里必须使用绝对路径，使用@/+存放export2Excel的路径
        const tHeader = [] // 导出的excel的表头字段名称
        const filterVal = [] // 对象属性，对应于tHeader
        tTitle.forEach((item) => {
            tHeader.push(item.label)
            filterVal.push(item.value)
        })
        const list = selectExcelData.value //json数组对象，接口返回的数据
        const data = formatJson2(filterVal, list)
        export_json_to_excel(tHeader, data, tName)// 导出的表格名称
    })
}
const formatJson2 = (filterVal, jsonData) => {
    return jsonData.map(v => filterVal.map(j => v[j]))
}
// 其他方法
export {aa, bb, allExportExcel, selectExportExcel, replaceStr, phoneCode, makeCall};
