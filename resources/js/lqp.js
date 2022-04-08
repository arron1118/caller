import {ref} from "vue";
import {ElMessageBox} from "element-plus";
const aa = 'aaa';
function bb () {
    return 'bb';
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
        const { export_json_to_excel } = require('@/Pages/excel/export2Excel') // 这里必须使用绝对路径，使用@/+存放export2Excel的路径
        const tHeader = [] // 导出的excel的表头字段名称
        const filterVal = [] // 对象属性，对应于tHeader
        tTitle.forEach((item)=>{
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
// 其他方法
export { aa, bb, allExportExcel };
