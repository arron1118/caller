import {ref} from "vue";
import {ElMessageBox} from "element-plus";

const aa = 'aaa';


function bb () {
    return 'bb';
}
const excelData = ref([])
const excelDataSelect = ref([])
const allExportExcel = () => {
    //全部导出
    // 数据写入excel
    ElMessageBox.confirm('将导出为excel文件，确认导出?').then(() => {
        if(excelDataSelect.value.length > 0){
            excelData.value = excelDataSelect.value
        }else{
            excelData.value = tableData
        }
        console.log('excelData.value', excelData.value)
        export2Excel()
    }).catch(() => {

    })
}
const export2Excel = () => {
    require.ensure([], () => {
        const { export_json_to_excel } = require('@/Pages/excel/export2Excel') // 这里必须使用绝对路径，使用@/+存放export2Excel的路径
        const tHeader = ['账号', '密码', '公司名称', '小号', '坐席', '限制用户', '费率（元）', '结束时间'] // 导出的excel的表头字段
        const filterVal = ['number','password','name', 'minNumber', 'sit', 'limitNumber', 'rate', 'dataTime'] // 对象属性，对应于tHeader
        const list = excelData.value //json数组对象，接口返回的数据
        const data = formatJson(filterVal, list)
        export_json_to_excel(tHeader, data, '检测单体数据')// 导出的表格名称
    })
}
const formatJson = (filterVal, jsonData) => {
    return jsonData.map(v => filterVal.map(j => v[j]))
}
const selectExportData = (value) => {
    // 选择导出
    console.log('拿到复选框', value)
    excelDataSelect.value = value
}
export { aa, bb, allExportExcel };
