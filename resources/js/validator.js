const { phoneCode } = require("@/lqp")
const checkMobile = (rule, value, callback, source, options) => {
    if (value === '') {
        callback(new Error('请输入正确的手机号!'))
        return false
    }else if(value.length !== 11){
        callback(new Error('请输入正确的手机号!'))
        return false
    }else if(!phoneCode(value)){
        callback(new Error('请输入正确的手机号!'))
        return false
    }else{
        callback()
    }
}
const checkOldPassword = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入旧的密码!'))
        return false
    }else{
        callback()
    }
}
const checkNewPassword = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入新的密码!'))
        return false
    }else{
        callback()
    }
}
const checkConfirmPassword = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入确认的密码!'))
        return false
    }else{
        callback()
    }
}
const checkTitle = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入客户名称!'))
        return false
    }else{
        callback()
    }
}
const checkNumber = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入账号!'))
        return false
    }else{
        callback()
    }
}
const checkPassword = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入密码!'))
        return false
    }else{
        callback()
    }
}
const checkCompany = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入公司名称!'))
        return false
    }else{
        callback()
    }
}
export {
    checkMobile,
    checkOldPassword,
    checkNewPassword,
    checkConfirmPassword,
    checkTitle,
    checkNumber,
    checkPassword,
    checkCompany
}
