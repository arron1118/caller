<template>
    <div>
        <el-form ref="searchFormRef" :model="searchRuleForm" :inline="true" class="mx-4">
            <!--               用户管理-->
            <el-form-item label="账号" class="mx-4" prop="number" v-if="role==='user'">
                <el-input v-model.trim="searchRuleForm.number" placeholder="输入账号" @blur="changeNumber(searchRuleForm.number)"/>
            </el-form-item>
            <el-form-item label="公司" class="mr-4" prop="name" v-if="role==='user'">
                <el-input v-model.trim="searchRuleForm.name" placeholder="输入公司名称" @blur="changeName(searchRuleForm.name)"/>
            </el-form-item>
            <!--通话记录-->
            <el-form-item label="公司" label-width="" prop="company" v-if="role==='callHistory'">
                <el-select v-model="searchRuleForm.company" placeholder="请选择公司" @change="changeCompany">
                    <el-option label="Zone No.1" value="shanghai"/>
                    <el-option label="Zone No.2" value="beijing"/>
                </el-select>
            </el-form-item>
            <el-form-item prop="staff" v-if="role==='callHistory'">
                <el-select v-model="searchRuleForm.staff" placeholder="请选择员工" @change="changeStaff">
                    <el-option label="Zone No.1" value="shanghai"/>
                    <el-option label="Zone No.2" value="beijing"/>
                </el-select>
            </el-form-item>
            <el-form-item label="时间" prop="state" v-if="role==='callHistory'">
                <el-date-picker
                    v-model="searchRuleForm.dataTime"
                    type="datetimerange"
                    range-separator="To"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                    @change="changeDateTime"
                    value-format="YYYY-MM-DD hh:mm:ss"
                />
            </el-form-item>
            <el-form-item label="通话时长" prop="operate" v-if="role==='callHistory'">
                <el-select v-model="searchRuleForm.operate" placeholder="操作符" style="width: 85px" @change="changeOperate">
                    <el-option label="=" value="eq"/>
                    <el-option label=">" value="gt"/>
                    <el-option label="<" value="lg"/>
                </el-select>
            </el-form-item>
            <el-form-item v-if="role==='callHistory'">
                <el-input-number
                    v-model="searchRuleForm.duration"
                    :min="0"
                    placeholder="秒"
                    controls-position="right"
                    @change="changeDuration"
                />
            </el-form-item>
<!--            充值管理-->
            <el-form-item label="充值方" class="mx-4" prop="payer" v-if="role==='payment'">
                <el-input v-model.trim="searchRuleForm.payer" placeholder="输入充值方" @blur="changePayer(searchRuleForm.payer)"/>
            </el-form-item>
            <el-form-item label="充值时间" prop="payTime" v-if="role==='payment'">
                <el-date-picker
                    v-model="searchRuleForm.payTime"
                    type="datetimerange"
                    range-separator="To"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                    @change="changePayTime"
                    value-format="YYYY-MM-DD hh:mm:ss"
                />
            </el-form-item>
<!--            通话报表-->
            <el-form-item label="所有公司" prop="reportCompany" v-if="role==='report'">
                <el-select v-model="searchRuleForm.reportCompany" placeholder="选择公司" @change="changeReportCompany">
                    <el-option label="=" value="eq"/>
                    <el-option label=">" value="gt"/>
                    <el-option label="<" value="lg"/>
                </el-select>
            </el-form-item>
            <el-form-item label="时间" prop="reportTime" v-if="role==='report'">
                <el-date-picker
                    v-model="searchRuleForm.reportTime"
                    type="datetimerange"
                    range-separator="To"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                    @change="changeReportTime"
                    value-format="YYYY-MM-DD hh:mm:ss"
                />
            </el-form-item>
<!--            资讯-->
            <el-form-item label="标题" class="mx-4" prop="newsTitle" v-if="role==='news'">
                <el-input v-model.trim="searchRuleForm.newsTitle" placeholder="输入标题" @blur="changeNewsTitle(searchRuleForm.newsTitle)"/>
            </el-form-item>
            <el-form-item label="发布时间" prop="publishTime" v-if="role==='news'">
                <el-date-picker
                    v-model="searchRuleForm.publishTime"
                    type="date"
                    placeholder=""
                    @change="changePublishTime"
                    value-format="YYYY-MM-DD"
                />
            </el-form-item>
<!--            提交-->
            <el-form-item class="mx-1">
                <el-button type="primary" :loading="loading" @click="submitSearch()"
                >搜索
                </el-button
                >
                <el-button @click="cancelSearch()">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import {ref, unref} from "vue"

export default {
    name: "searchForm",
    setup(props, context) {
        const width = ref(60)
        const searchFormRef = ref(null)
        const loading = ref(props.loading)
        const searchRuleForm = ref({
            company: '',
            staff: '',
            dataTime: '',
            operate: '',
            number: '',
            name: '',
            duration: 0,
            payer: '',
            payTime: '',
            reportCompany: '',
            reportTime: '',
            newsTitle: '',
            publishTime: ''

        })
        const submitSearch = async () => {
            loading.value = true
            const form = unref(searchFormRef)
            if (!form) return
            try {
                await form.validate()
                console.log('搜索参数', searchRuleForm, loading.value)
                context.emit('clickSearch', searchRuleForm, loading.value)
            } catch (error) {
            }
        }
        const cancelSearch = async () => {
            const form = unref(searchFormRef)
            if (!form) return
            form.resetFields()
        }
        return {
            width,
            searchFormRef,
            searchRuleForm,
            loading,
            submitSearch,
            cancelSearch,
        }
    },
    props: ['loading', 'role'],
    watch: {
        searchRuleForm(newValue) {
            this.$emit('clickSearch', newValue, this.loading)
        }
    },
    methods: {
        changeNumber (v) {
            this.searchRuleForm = Object.assign({}, this.searchRuleForm, { number: v })
        },
        changeName (v) {
            this.searchRuleForm = Object.assign({}, this.searchRuleForm, { name: v })
        },

        changeCompany (v) {
            this.searchRuleForm = Object.assign({}, this.searchRuleForm, { company: v })
        },
        changeStaff (val) {
            let temp = ''
            if (val) {
                temp = val
            }
            this.searchRuleForm = Object.assign({}, this.searchRuleForm, { staff: temp })
        },
        changeDateTime (v) {
            this.searchRuleForm = Object.assign({}, this.searchRuleForm, {dataTime: v})
        },
        changeOperate (v) {
            this.searchRuleForm = Object.assign({}, this.searchRuleForm, {operate: v})
        },
        changeDuration (v) {
            this.searchRuleForm = Object.assign({}, this.searchRuleForm, {duration: v})
        },
        changePayer (v) {
            this.searchRuleForm = Object.assign({}, this.searchRuleForm, {payer: v})
        },
        changePayTime (v) {
            this.searchRuleForm = Object.assign({}, this.searchRuleForm, {payTime: v})
        },
        changeReportCompany (v) {
            this.searchRuleForm = Object.assign({}, this.searchRuleForm, {reportCompany: v})
        },
        changeReportTime (v) {
            this.searchRuleForm = Object.assign({}, this.searchRuleForm, {reportTime: v})
        },
        changeNewsTitle (v) {
            this.searchRuleForm = Object.assign({}, this.searchRuleForm, {newsTitle: v})
        },
        changePublishTime (Value) {
            this.searchRuleForm = Object.assign({}, this.searchRuleForm, {publishTime: Value})
        }
    }
}
</script>

<style scoped>

</style>
