<template>
    <div>
        <el-form ref="searchFormRef" :model="searchRuleForm" :inline="true" class="mx-4">
            <!--               用户管理-->
            <el-form-item label="账号" class="mx-4" prop="username" v-if="role==='user'">
                <el-input v-model.trim="searchRuleForm.username" placeholder="输入账号" @blur="change1(searchRuleForm.username)"/>
            </el-form-item>
            <el-form-item label="手机号" class="mr-4" prop="phone" v-if="role==='user'">
                <el-input v-model.trim="searchRuleForm.phone" placeholder="输入手机号" @blur="change2(searchRuleForm.phone)"/>
            </el-form-item>
            <!--通话记录-->
            <el-form-item label="时间" prop="dataTime" v-if="role==='callHistory'">
                <el-date-picker
                    v-model="searchRuleForm.dataTime"
                    type="datetimerange"
                    range-separator="To"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                    @change="change4"
                    value-format="YYYY-MM-DD hh:mm:ss"
                />
            </el-form-item>
            <el-form-item label="通话时长" prop="operate" v-if="role==='callHistory'">
                <el-select v-model="searchRuleForm.operate" placeholder="操作符" style="width: 85px" @change="change5">
                    <el-option label="=" value="eq"/>
                    <el-option label=">" value="gt"/>
                    <el-option label="<" value="lg"/>
                </el-select>
            </el-form-item>
            <el-form-item v-if="role==='callHistory'">
                <el-input-number
                    v-model="searchRuleForm.duration"
                    :min="searchRuleForm.duration"
                    placeholder="秒"
                    controls-position="right"
                    @change="change6"
                />
            </el-form-item>
            <!--            客户管理-->
            <el-form-item label="类型" label-width="" prop="cate" v-if="role==='customer'">
                <el-select v-model="searchRuleForm.cate" placeholder="请选择类型" @change="change10">
                    <el-option label="Zone No.1" value="shanghai" />
                    <el-option label="Zone No.2" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="客户名称" class="mr-4" prop="title" v-if="role==='customer'">
                <el-input v-model.trim="searchRuleForm.title" placeholder="输入客户名称" @blur="change9(searchRuleForm.title)"/>
            </el-form-item>
            <el-form-item label="手机号" class="mr-4" prop="phone" v-if="role==='customer'">
                <el-input v-model.trim="searchRuleForm.phone" placeholder="输入手机号" @blur="change2(searchRuleForm.phone)"/>
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
        const searchFormRef = ref(null)
        const loading = ref(props.loading)
        const searchRuleForm = ref({
            cate: '',
            startDate: '',
            endDate: '',
            operate: '',
            duration: 0,
            title: '',
            phone: '',
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
            searchFormRef,
            searchRuleForm,
            loading,
            submitSearch,
            cancelSearch,
        }
    },
    props: {
        loading: String,
        role: String,
    },
    watch: {
        searchRuleForm(newValue) {
            this.$emit('clickSearch', newValue, this.loading)
        }
    },
    created() {
        console.log(this.role)
    },
    methods: {
        // 用户管理
        change1 (v) {
            this.searchRuleForm = Object.assign({}, this.searchRuleForm, { username: v })
        },
        change2(v) {
            this.searchRuleForm = Object.assign({}, this.searchRuleForm, { phone: v })
        },
        //
        change3 (v) {
            this.searchRuleForm = Object.assign({}, this.searchRuleForm, { company_id: v })
        },
        change4 (v) {
            this.searchRuleForm = Object.assign({}, this.searchRuleForm, {startDate: v[0], endDate: v[1]})
        },
        change5 (v) {
            this.searchRuleForm = Object.assign({}, this.searchRuleForm, {operate: v})
        },
        change6 (v) {
            this.searchRuleForm = Object.assign({}, this.searchRuleForm, {duration: v})
        },
        change7 (v) {
            this.searchRuleForm = Object.assign({}, this.searchRuleForm, {payno: v})
        },
        change8 (v) {
            this.searchRuleForm = Object.assign({}, this.searchRuleForm, {user_id: v})
        },
        change9 (v) {
            this.searchRuleForm = Object.assign({}, this.searchRuleForm, {title: v})
        },
        change10 (v) {
            this.searchRuleForm = Object.assign({}, this.searchRuleForm, {cate: v})
        }
    }
}
</script>

<style scoped>

</style>
