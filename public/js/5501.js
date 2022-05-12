"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5501,6361,2340,3474],{6043:(e,t,o)=>{o.d(t,{v:()=>l});var n=o(9669),r=o.n(n),a=o(9680);function l(e,t){return new Promise((function(o,n){r().post(route(e),t).then((function(e){o(e.data)})).catch((function(e){n(e.data)}))}))}r().interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),r().interceptors.response.use((function(e){return 5003===e.data.code&&(route().current(),a.Inertia.get(route("admin.login"))),e}),(function(e){return Promise.reject(e)}))},6943:(e,t,o)=>{o.r(t),o.d(t,{aa:()=>l,allExportExcel:()=>m,bb:()=>c,code:()=>u,replaceStr:()=>i,selectExportExcel:()=>f});var n=o(4865),r=o(4826),a=o(5244),l="aaa";function c(){return"bb"}var u=function(e){return/^1[3456789]{1}\d{9}$/.test(e)},i=function(e,t){var o=e.substring(4,6),n=o.replace(o,t);return e.substring(0,3)+n+e.substring(7,11)},s=(0,n.ref)([]),m=function(e,t,o){r.T.confirm("将导出为excel文件，确认导出?",{confirmButtonText:"导出",cancelButtonText:"取消",type:"success"}).then((function(){s.value=e,d(e,t,o)})).catch((function(){}))},d=function(e,t,n){o.e(8719).then(function(){var e=o(8719).export_json_to_excel,r=[],a=[];t.forEach((function(e){r.push(e.label),a.push(e.value)}));var l=s.value,c=p(a,l);e(r,c,n)}.bind(null,o)).catch(o.oe)},p=function(e,t){return t.map((function(t){return e.map((function(e){return t[e]}))}))},h=(0,n.ref)([]),f=function(e,t,o){if(e.length<1)return(0,a.z8)({type:"warning",message:"请选择需要导出的数据"}),!1;r.T.confirm("将导出为excel文件，确认导出?",{confirmButtonText:"导出",cancelButtonText:"取消",type:"success"}).then((function(){h.value=e,g(e,t,o)})).catch((function(){}))},g=function(e,t,n){o.e(8719).then(function(){var e=o(8719).export_json_to_excel,r=[],a=[];t.forEach((function(e){r.push(e.label),a.push(e.value)}));var l=h.value,c=b(a,l);e(r,c,n)}.bind(null,o)).catch(o.oe)},b=function(e,t){return t.map((function(t){return e.map((function(e){return t[e]}))}))}},3744:(e,t)=>{t.Z=(e,t)=>{const o=e.__vccOpts||e;for(const[e,n]of t)o[e]=n;return o}},2916:(e,t,o)=>{o.d(t,{Z:()=>d});var n=o(4865),r={class:"p-4 flex justify-center text-slate-200 text-base"},a=["src"],l={key:0},c=(0,n.createTextVNode)(" 设置 "),u=(0,n.createTextVNode)(" 个人资料 "),i=(0,n.createTextVNode)(" 退 出 ");var s=o(9038);const m=(0,n.defineComponent)({components:{Link:s.rU},setup:function(){var e=(0,n.ref)({marginLeft:"200px"}),t=(0,n.ref)([]),o=(0,n.ref)(!1);return t.value[0]=route().current(),{selectedKeys:t,collapsed:o,contentStyles:e}},created:function(){},methods:{onClick:function(e){e.key;console.log("click on item ${key}")},changeCollapsed:function(){this.collapsed=!this.collapsed,this.contentStyles.marginLeft=this.collapsed?"80px":"200px"}}});const d=(0,o(3744).Z)(m,[["render",function(e,t,o,s,m,d){var p=(0,n.resolveComponent)("font-awesome-icon"),h=(0,n.resolveComponent)("Link"),f=(0,n.resolveComponent)("a-menu-item"),g=(0,n.resolveComponent)("a-menu"),b=(0,n.resolveComponent)("a-layout-sider"),C=(0,n.resolveComponent)("a-dropdown"),v=(0,n.resolveComponent)("a-layout-header"),y=(0,n.resolveComponent)("a-layout-content"),x=(0,n.resolveComponent)("a-layout");return(0,n.openBlock)(),(0,n.createBlock)(x,{"has-sider":""},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(b,{collapsed:e.collapsed,trigger:null,class:(0,n.normalizeClass)("w-52 h-screen top-0 left-0 bottom-0"),style:{position:"fixed"},theme:"dark",collapsible:""},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",r,[(0,n.createElementVNode)("img",{src:e.$page.props.site.logo,class:"w-8 h-8 mr-2"},null,8,a),e.collapsed?(0,n.createCommentVNode)("",!0):((0,n.openBlock)(),(0,n.createElementBlock)("span",l,(0,n.toDisplayString)(e.$page.props.site.siteName),1))]),(0,n.createVNode)(g,{selectedKeys:e.selectedKeys,theme:"dark",mode:"inline"},{default:(0,n.withCtx)((function(){return[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.$page.props.menus.admin,(function(t){return(0,n.openBlock)(),(0,n.createBlock)(f,{key:t.url,class:(0,n.normalizeClass)({"text-blue-500":e.route().current(t.url)}),title:t.title},{icon:(0,n.withCtx)((function(){return[(0,n.createVNode)(p,{icon:t.icon},null,8,["icon"])]})),default:(0,n.withCtx)((function(){return[(0,n.createVNode)(h,{href:e.route(t.url)},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(t.title),1)]})),_:2},1032,["href"])]})),_:2},1032,["class","title"])})),128))]})),_:1},8,["selectedKeys"])]})),_:1},8,["collapsed"]),(0,n.createVNode)(x,{style:(0,n.normalizeStyle)(e.contentStyles),class:(0,n.normalizeClass)("transition ease-in-out")},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(v,{style:{backgroundColor:"#fff",padding:"0 16px"}},{default:(0,n.withCtx)((function(){return[e.collapsed?((0,n.openBlock)(),(0,n.createBlock)(p,{key:0,icon:["fas","indent"],class:"trigger",onClick:e.changeCollapsed,title:"展开"},null,8,["onClick"])):((0,n.openBlock)(),(0,n.createBlock)(p,{key:1,icon:["fas","outdent"],class:"trigger",onClick:e.changeCollapsed,title:"收起"},null,8,["onClick"])),(0,n.createVNode)(C,{class:"float-right"},{overlay:(0,n.withCtx)((function(){return[(0,n.createVNode)(g,{onClick:e.onClick},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(f,{key:"1"},{icon:(0,n.withCtx)((function(){return[(0,n.createVNode)(p,{icon:["fas","user"]})]})),default:(0,n.withCtx)((function(){return[(0,n.createVNode)(h,{href:e.route("admin.profile")},{default:(0,n.withCtx)((function(){return[u]})),_:1},8,["href"])]})),_:1}),(0,n.createVNode)(f,{key:"2"},{icon:(0,n.withCtx)((function(){return[(0,n.createVNode)(p,{icon:["fas","arrow-right-from-bracket"]})]})),default:(0,n.withCtx)((function(){return[(0,n.createVNode)(h,{href:e.route("admin.logout")},{default:(0,n.withCtx)((function(){return[i]})),_:1},8,["href"])]})),_:1})]})),_:1},8,["onClick"])]})),default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("a",{class:"ant-dropdown-link",onClick:t[0]||(t[0]=(0,n.withModifiers)((function(){}),["prevent"]))},[c,(0,n.createVNode)(p,{icon:["fas","angle-down"]})])]})),_:1})]})),_:1}),(0,n.createVNode)(y,{class:"transition transform ease-in-out",style:{margin:"16px",padding:"16px",background:"#fff",minHeight:"280px"}},{default:(0,n.withCtx)((function(){return[(0,n.renderSlot)(e.$slots,"default")]})),_:3})]})),_:3},8,["style"])]})),_:3})}]])},5501:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m});var n=o(4865),r={class:"mb-6 bg-white rounded shadow pt-4"},a={class:"mb-6 bg-white rounded shadow p-4"},l={class:"border rounded"};var c=o(2916),u=o(6361),i=o(2340);const s={name:"Report",components:{AdminLayout:c.Z,SearchForm:u.default,BasicTable:i.default},setup:function(){var e=(0,n.ref)("report"),t=(0,n.ref)({page:1,limit:15}),o=(0,n.ref)([{label:"用户编号",value:"axb_number",sortable:!1,show:!0},{label:"用户名称",value:"company",sortable:!1,show:!0},{label:"拨号次数",value:"id",sortable:!0,show:!0},{label:"接通次数(>0秒)",value:"id",sortable:!0,show:!0},{label:"有效呼叫(>30秒)",value:"id",sortable:!0,show:!0},{label:"时间(分)",value:"createtime",sortable:!0,show:!0},{label:"消费金额（￥/元）",value:"call_duration",sortable:!0,show:!0}]),r=(0,n.ref)("");return{role:e,tableTitle:o,params:t,search:function(e){console.log("子传父参数",e),t.value=Object.assign({},t.value,e)},exportName:r}}};const m=(0,o(3744).Z)(s,[["render",function(e,t,o,c,u,i){var s=(0,n.resolveComponent)("search-form"),m=(0,n.resolveComponent)("basic-table"),d=(0,n.resolveComponent)("AdminLayout");return(0,n.openBlock)(),(0,n.createBlock)(d,null,{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",r,[(0,n.createVNode)(s,{role:c.role,onClickSearch:c.search},null,8,["role","onClickSearch"])]),(0,n.createElementVNode)("div",a,[(0,n.createElementVNode)("div",l,[(0,n.createVNode)(m,{tableTitle:c.tableTitle,selectionType:!0,pagination:!0,buttonGroups:!0,where:c.params,url:"getHistoryList",exportName:c.exportName,showSummary:!0},null,8,["tableTitle","where","exportName"])])])]})),_:1})}]])},6361:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m});var n=o(4865),r=(0,n.createTextVNode)("搜索 "),a=(0,n.createTextVNode)("重置");var l=o(7757),c=o.n(l);function u(e,t,o,n,r,a,l){try{var c=e[a](l),u=c.value}catch(e){return void o(e)}c.done?t(u):Promise.resolve(u).then(n,r)}function i(e){return function(){var t=this,o=arguments;return new Promise((function(n,r){var a=e.apply(t,o);function l(e){u(a,n,r,l,c,"next",e)}function c(e){u(a,n,r,l,c,"throw",e)}l(void 0)}))}}const s={name:"searchForm",setup:function(e,t){var o=(0,n.ref)(60),r=(0,n.ref)(null),a=(0,n.ref)(e.loading),l=(0,n.ref)({company:"",staff:"",dataTime:"",operate:"",number:"",name:"",duration:0,payer:"",payTime:"",reportCompany:"",reportTime:"",newsTitle:"",publishTime:""}),u=function(){var e=i(c().mark((function e(){var o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.value=!0,o=(0,n.unref)(r)){e.next=4;break}return e.abrupt("return");case 4:return e.prev=4,e.next=7,o.validate();case 7:console.log("搜索参数",l,a.value),t.emit("clickSearch",l,a.value),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(4);case 13:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=i(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=(0,n.unref)(r)){e.next=3;break}return e.abrupt("return");case 3:t.resetFields();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{width:o,searchFormRef:r,searchRuleForm:l,loading:a,submitSearch:u,cancelSearch:s}},props:{loading:String,role:String},watch:{searchRuleForm:function(e){this.$emit("clickSearch",e,this.loading)}},created:function(){console.log(this.role)},methods:{changeNumber:function(e){this.searchRuleForm=Object.assign({},this.searchRuleForm,{number:e})},changeName:function(e){this.searchRuleForm=Object.assign({},this.searchRuleForm,{name:e})},changeCompany:function(e){this.searchRuleForm=Object.assign({},this.searchRuleForm,{company:e})},changeStaff:function(e){var t="";e&&(t=e),this.searchRuleForm=Object.assign({},this.searchRuleForm,{staff:t})},changeDateTime:function(e){this.searchRuleForm=Object.assign({},this.searchRuleForm,{dataTime:e})},changeOperate:function(e){this.searchRuleForm=Object.assign({},this.searchRuleForm,{operate:e})},changeDuration:function(e){this.searchRuleForm=Object.assign({},this.searchRuleForm,{duration:e})},changePayer:function(e){this.searchRuleForm=Object.assign({},this.searchRuleForm,{payer:e})},changePayTime:function(e){this.searchRuleForm=Object.assign({},this.searchRuleForm,{payTime:e})},changeReportCompany:function(e){this.searchRuleForm=Object.assign({},this.searchRuleForm,{reportCompany:e})},changeReportTime:function(e){this.searchRuleForm=Object.assign({},this.searchRuleForm,{reportTime:e})},changeNewsTitle:function(e){this.searchRuleForm=Object.assign({},this.searchRuleForm,{newsTitle:e})},changePublishTime:function(e){this.searchRuleForm=Object.assign({},this.searchRuleForm,{publishTime:e})}}};const m=(0,o(3744).Z)(s,[["render",function(e,t,o,l,c,u){var i=(0,n.resolveComponent)("el-input"),s=(0,n.resolveComponent)("el-form-item"),m=(0,n.resolveComponent)("el-option"),d=(0,n.resolveComponent)("el-select"),p=(0,n.resolveComponent)("el-date-picker"),h=(0,n.resolveComponent)("el-input-number"),f=(0,n.resolveComponent)("el-button"),g=(0,n.resolveComponent)("el-form");return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,[(0,n.createVNode)(g,{ref:"searchFormRef",model:l.searchRuleForm,inline:!0,class:"mx-4"},{default:(0,n.withCtx)((function(){return["user"===o.role?((0,n.openBlock)(),(0,n.createBlock)(s,{key:0,label:"账号",class:"mx-4",prop:"number"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(i,{modelValue:l.searchRuleForm.number,"onUpdate:modelValue":t[0]||(t[0]=function(e){return l.searchRuleForm.number=e}),modelModifiers:{trim:!0},placeholder:"输入账号",onBlur:t[1]||(t[1]=function(e){return u.changeNumber(l.searchRuleForm.number)})},null,8,["modelValue"])]})),_:1})):(0,n.createCommentVNode)("",!0),"user"===o.role?((0,n.openBlock)(),(0,n.createBlock)(s,{key:1,label:"公司",class:"mr-4",prop:"name"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(i,{modelValue:l.searchRuleForm.name,"onUpdate:modelValue":t[2]||(t[2]=function(e){return l.searchRuleForm.name=e}),modelModifiers:{trim:!0},placeholder:"输入公司名称",onBlur:t[3]||(t[3]=function(e){return u.changeName(l.searchRuleForm.name)})},null,8,["modelValue"])]})),_:1})):(0,n.createCommentVNode)("",!0),"callHistory"===o.role?((0,n.openBlock)(),(0,n.createBlock)(s,{key:2,label:"公司","label-width":"",prop:"company"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(d,{modelValue:l.searchRuleForm.company,"onUpdate:modelValue":t[4]||(t[4]=function(e){return l.searchRuleForm.company=e}),placeholder:"请选择公司",onChange:u.changeCompany},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(m,{label:"Zone No.1",value:"shanghai"}),(0,n.createVNode)(m,{label:"Zone No.2",value:"beijing"})]})),_:1},8,["modelValue","onChange"])]})),_:1})):(0,n.createCommentVNode)("",!0),"callHistory"===o.role?((0,n.openBlock)(),(0,n.createBlock)(s,{key:3,prop:"staff"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(d,{modelValue:l.searchRuleForm.staff,"onUpdate:modelValue":t[5]||(t[5]=function(e){return l.searchRuleForm.staff=e}),placeholder:"请选择员工",onChange:u.changeStaff},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(m,{label:"Zone No.1",value:"shanghai"}),(0,n.createVNode)(m,{label:"Zone No.2",value:"beijing"})]})),_:1},8,["modelValue","onChange"])]})),_:1})):(0,n.createCommentVNode)("",!0),"callHistory"===o.role?((0,n.openBlock)(),(0,n.createBlock)(s,{key:4,label:"时间",prop:"state"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(p,{modelValue:l.searchRuleForm.dataTime,"onUpdate:modelValue":t[6]||(t[6]=function(e){return l.searchRuleForm.dataTime=e}),type:"datetimerange","range-separator":"To","start-placeholder":"开始时间","end-placeholder":"结束时间",onChange:u.changeDateTime,"value-format":"YYYY-MM-DD hh:mm:ss"},null,8,["modelValue","onChange"])]})),_:1})):(0,n.createCommentVNode)("",!0),"callHistory"===o.role?((0,n.openBlock)(),(0,n.createBlock)(s,{key:5,label:"通话时长",prop:"operate"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(d,{modelValue:l.searchRuleForm.operate,"onUpdate:modelValue":t[7]||(t[7]=function(e){return l.searchRuleForm.operate=e}),placeholder:"操作符",style:{width:"85px"},onChange:u.changeOperate},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(m,{label:"=",value:"eq"}),(0,n.createVNode)(m,{label:">",value:"gt"}),(0,n.createVNode)(m,{label:"<",value:"lg"})]})),_:1},8,["modelValue","onChange"])]})),_:1})):(0,n.createCommentVNode)("",!0),"callHistory"===o.role?((0,n.openBlock)(),(0,n.createBlock)(s,{key:6},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(h,{modelValue:l.searchRuleForm.duration,"onUpdate:modelValue":t[8]||(t[8]=function(e){return l.searchRuleForm.duration=e}),min:0,placeholder:"秒","controls-position":"right",onChange:u.changeDuration},null,8,["modelValue","onChange"])]})),_:1})):(0,n.createCommentVNode)("",!0),"payment"===o.role?((0,n.openBlock)(),(0,n.createBlock)(s,{key:7,label:"充值方",class:"mx-4",prop:"payer"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(i,{modelValue:l.searchRuleForm.payer,"onUpdate:modelValue":t[9]||(t[9]=function(e){return l.searchRuleForm.payer=e}),modelModifiers:{trim:!0},placeholder:"输入充值方",onBlur:t[10]||(t[10]=function(e){return u.changePayer(l.searchRuleForm.payer)})},null,8,["modelValue"])]})),_:1})):(0,n.createCommentVNode)("",!0),"payment"===o.role?((0,n.openBlock)(),(0,n.createBlock)(s,{key:8,label:"充值时间",prop:"payTime"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(p,{modelValue:l.searchRuleForm.payTime,"onUpdate:modelValue":t[11]||(t[11]=function(e){return l.searchRuleForm.payTime=e}),type:"datetimerange","range-separator":"To","start-placeholder":"开始时间","end-placeholder":"结束时间",onChange:u.changePayTime,"value-format":"YYYY-MM-DD hh:mm:ss"},null,8,["modelValue","onChange"])]})),_:1})):(0,n.createCommentVNode)("",!0),"report"===o.role?((0,n.openBlock)(),(0,n.createBlock)(s,{key:9,label:"所有公司",prop:"reportCompany"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(d,{modelValue:l.searchRuleForm.reportCompany,"onUpdate:modelValue":t[12]||(t[12]=function(e){return l.searchRuleForm.reportCompany=e}),placeholder:"选择公司",onChange:u.changeReportCompany},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(m,{label:"=",value:"eq"}),(0,n.createVNode)(m,{label:">",value:"gt"}),(0,n.createVNode)(m,{label:"<",value:"lg"})]})),_:1},8,["modelValue","onChange"])]})),_:1})):(0,n.createCommentVNode)("",!0),"report"===o.role?((0,n.openBlock)(),(0,n.createBlock)(s,{key:10,label:"时间",prop:"reportTime"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(p,{modelValue:l.searchRuleForm.reportTime,"onUpdate:modelValue":t[13]||(t[13]=function(e){return l.searchRuleForm.reportTime=e}),type:"datetimerange","range-separator":"To","start-placeholder":"开始时间","end-placeholder":"结束时间",onChange:u.changeReportTime,"value-format":"YYYY-MM-DD hh:mm:ss"},null,8,["modelValue","onChange"])]})),_:1})):(0,n.createCommentVNode)("",!0),"news"===o.role?((0,n.openBlock)(),(0,n.createBlock)(s,{key:11,label:"标题",class:"mx-4",prop:"newsTitle"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(i,{modelValue:l.searchRuleForm.newsTitle,"onUpdate:modelValue":t[14]||(t[14]=function(e){return l.searchRuleForm.newsTitle=e}),modelModifiers:{trim:!0},placeholder:"输入标题",onBlur:t[15]||(t[15]=function(e){return u.changeNewsTitle(l.searchRuleForm.newsTitle)})},null,8,["modelValue"])]})),_:1})):(0,n.createCommentVNode)("",!0),"news"===o.role?((0,n.openBlock)(),(0,n.createBlock)(s,{key:12,label:"发布时间",prop:"publishTime"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(p,{modelValue:l.searchRuleForm.publishTime,"onUpdate:modelValue":t[16]||(t[16]=function(e){return l.searchRuleForm.publishTime=e}),type:"date",placeholder:"",onChange:u.changePublishTime,"value-format":"YYYY-MM-DD"},null,8,["modelValue","onChange"])]})),_:1})):(0,n.createCommentVNode)("",!0),(0,n.createVNode)(s,{class:"mx-1"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(f,{type:"primary",loading:o.loading,onClick:t[17]||(t[17]=function(e){return l.submitSearch()})},{default:(0,n.withCtx)((function(){return[r]})),_:1},8,["loading"]),(0,n.createVNode)(f,{onClick:t[18]||(t[18]=function(e){return l.cancelSearch()})},{default:(0,n.withCtx)((function(){return[a]})),_:1})]})),_:1})]})),_:1},8,["model"])])}]])},2340:(e,t,o)=>{o.r(t),o.d(t,{default:()=>b});var n=o(4865),r={key:0,class:"m-2 text-right border-b pb-2 flex flex-row justify-between"},a={class:"flex flex-column justify-center items-center mx-4"},l=(0,n.createTextVNode)("选择导出 "),c=(0,n.createTextVNode)("全部导出"),u=(0,n.createTextVNode)("筛选列"),i={key:1,class:"table-bottom m-4"};var s=o(7757),m=o.n(s),d=o(3474),p=o(6043),h=o(6112);function f(e,t,o,n,r,a,l){try{var c=e[a](l),u=c.value}catch(e){return void o(e)}c.done?t(u):Promise.resolve(u).then(n,r)}const g={name:"BasicTable",components:{vPagination:d.default,Refresh:h.Z},props:["tableTitle","operates","specialNumber","specialUser","testNumbers","states","specialUsername","selectionType","pagination","where","payWays","payStatus","showSummary","buttonGroups","url","exportName","openAccountSlot","releaseNewsSlot","batchImportSlot"],setup:function(e,t){var r=o(6943),a=r.allExportExcel,l=r.selectExportExcel,c=r.replaceStr,u=(0,n.ref)([]),i=(0,n.ref)([]),s=(0,n.ref)(0),d=(0,n.ref)(!1),p=(0,n.ref)([]),h=(0,n.ref)(Object.assign({},{page:1,limit:15},e.where)),g=function(){var e,t=(e=m().mark((function e(t){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u.value=t;case 1:case"end":return e.stop()}}),e)})),function(){var t=this,o=arguments;return new Promise((function(n,r){var a=e.apply(t,o);function l(e){f(a,n,r,l,c,"next",e)}function c(e){f(a,n,r,l,c,"throw",e)}l(void 0)}))});return function(e){return t.apply(this,arguments)}}();return{selectExport:u,handleSelectionChange:g,handleColumn:function(e,o,n,r){e.isCalled=!e.isCalled,!0===e.isCalled?e.called_number=e.called_number_copy:!1===e.isCalled&&(e.called_number=c(e.called_number,"****")),"user_id"===o.property&&t.emit("dialogUserList",!0,e.id)},replaceStr:c,filterWays:function(e,o){console.log(e),console.log(o),o.status=e,console.log(o.status),t.emit("getPayWays",o.status)},filterStatus:function(e,o){console.log(e),console.log(o),o.status=e,console.log(o.status),t.emit("getPayStatus",o.status)},filterTestNumbers:function(e,o){console.log(e),console.log(o),o.testNumbers=e,console.log(o.testNumbers),t.emit("getTestNumbers",o.testNumbers)},filterStates:function(e,o){console.log(e),console.log(o),o.states=e,console.log(o.states),t.emit("getStates",o.states)},selectExportExcel:l,allExportExcel:a,selectTableData:i,tableData:p,total:s,loading:d,params:h}},mounted:function(){this.getTableData()},watch:{where:function(e,t){this.getTableData()}},methods:{getTableData:function(){var e=this;this.loading=!0,(0,p.v)(this.url,this.params).then((function(t){console.log(t),1===t.code&&(e.loading=!1,e.tableData=t.data,e.total=t.total)}))}}};const b=(0,o(3744).Z)(g,[["render",function(e,t,o,s,m,d){var p=(0,n.resolveComponent)("el-button"),h=(0,n.resolveComponent)("el-checkbox"),f=(0,n.resolveComponent)("el-popover"),g=(0,n.resolveComponent)("refresh"),b=(0,n.resolveComponent)("el-icon"),C=(0,n.resolveComponent)("el-table-column"),v=(0,n.resolveComponent)("el-table"),y=(0,n.resolveComponent)("v-pagination"),x=(0,n.resolveComponent)("el-col"),k=(0,n.resolveComponent)("el-row"),V=(0,n.resolveDirective)("loading");return(0,n.openBlock)(),(0,n.createBlock)(k,null,{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(x,null,{default:(0,n.withCtx)((function(){return[!0===o.buttonGroups?((0,n.openBlock)(),(0,n.createElementBlock)("div",r,[(0,n.createElementVNode)("div",null,[!0===o.openAccountSlot?(0,n.renderSlot)(e.$slots,"openAccount",{key:0}):(0,n.createCommentVNode)("",!0),!0===o.releaseNewsSlot?(0,n.renderSlot)(e.$slots,"releaseNews",{key:1}):(0,n.createCommentVNode)("",!0)]),(0,n.createElementVNode)("div",a,[!0===o.batchImportSlot?(0,n.renderSlot)(e.$slots,"batchImport",{key:0}):(0,n.createCommentVNode)("",!0),(0,n.createVNode)(p,{type:"text",onClick:t[0]||(t[0]=function(e){return s.selectExportExcel(s.selectExport,o.tableTitle,o.exportName)})},{default:(0,n.withCtx)((function(){return[l]})),_:1}),(0,n.createVNode)(p,{type:"text",onClick:t[1]||(t[1]=function(e){return s.allExportExcel(s.tableData,o.tableTitle,o.exportName)})},{default:(0,n.withCtx)((function(){return[c]})),_:1}),(0,n.createVNode)(f,{placement:"bottom",width:150,"popper-class":"h-60 overflow-y-scroll",trigger:"click"},{reference:(0,n.withCtx)((function(){return[(0,n.createVNode)(p,{type:"text",style:{"margin-right":"16px"}},{default:(0,n.withCtx)((function(){return[u]})),_:1})]})),default:(0,n.withCtx)((function(){return[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(o.tableTitle,(function(e){return(0,n.openBlock)(),(0,n.createBlock)(h,{modelValue:e.show,"onUpdate:modelValue":function(t){return e.show=t},label:e.label,size:"large"},null,8,["modelValue","onUpdate:modelValue","label"])})),256))]})),_:1}),(0,n.createVNode)(p,{type:"text",plain:"",class:"mr-2"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(b,null,{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(g)]})),_:1})]})),_:1})])])):(0,n.createCommentVNode)("",!0),(0,n.withDirectives)(((0,n.openBlock)(),(0,n.createBlock)(v,{data:s.tableData,style:{width:"100%"},ref:"multipleTableRef",id:"print","row-key":"id","sum-text":"合计","show-summary":o.showSummary,onSelectionChange:s.handleSelectionChange,onCellClick:s.handleColumn},{default:(0,n.withCtx)((function(){return[!0===o.selectionType?((0,n.openBlock)(),(0,n.createBlock)(C,{key:0,type:"selection",width:"55"})):(0,n.createCommentVNode)("",!0),((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(o.tableTitle.filter((function(e){return e.show})),(function(t,o){return(0,n.openBlock)(),(0,n.createBlock)(C,{key:o,prop:t.value,label:t.label,sortable:!0===t.sortable},(0,n.createSlots)({_:2},["called_number"===t.value?{name:"default",fn:(0,n.withCtx)((function(t){return[(0,n.renderSlot)(e.$slots,"specialNumber",{scope:t})]}))}:void 0,"user_id"===t.value?{name:"default",fn:(0,n.withCtx)((function(t){return[(0,n.renderSlot)(e.$slots,"specialUser",{scope:t})]}))}:void 0,"username"===t.value?{name:"default",fn:(0,n.withCtx)((function(t){return[(0,n.renderSlot)(e.$slots,"specialUsername",{scope:t})]}))}:void 0]),1032,["prop","label","sortable"])})),128)),o.testNumbers?((0,n.openBlock)(),(0,n.createBlock)(C,{key:1,label:o.testNumbers.label,prop:"testNumbers",filters:[{text:"是",value:"0"},{text:"否",value:"1"}],"filter-method":s.filterTestNumbers,"filter-placement":"bottom-end","column-key":"testNumbers"},{default:(0,n.withCtx)((function(t){return[(0,n.renderSlot)(e.$slots,"testNumbers",{scope:t})]})),_:3},8,["label","filter-method"])):(0,n.createCommentVNode)("",!0),o.states?((0,n.openBlock)(),(0,n.createBlock)(C,{key:2,label:o.states.label,prop:"states",filters:[{text:"禁用",value:"0"},{text:"正常",value:"1"}],"filter-method":s.filterStates,"filter-placement":"bottom-end","column-key":"states"},{default:(0,n.withCtx)((function(t){return[(0,n.renderSlot)(e.$slots,"states",{scope:t})]})),_:3},8,["label","filter-method"])):(0,n.createCommentVNode)("",!0),o.operates?((0,n.openBlock)(),(0,n.createBlock)(C,{key:3,label:o.operates.label,fixed:"right",width:"120"},{default:(0,n.withCtx)((function(t){return[(0,n.renderSlot)(e.$slots,"operates",{scope:t})]})),_:3},8,["label"])):(0,n.createCommentVNode)("",!0),o.payWays?((0,n.openBlock)(),(0,n.createBlock)(C,{key:4,label:o.payWays.label,prop:"payWays",filters:[{text:"0",value:"0"},{text:"1",value:"1"}],"filter-method":s.filterWays,"filter-placement":"bottom-end","column-key":"payWays"},{default:(0,n.withCtx)((function(t){return[(0,n.renderSlot)(e.$slots,"payWays",{scope:t})]})),_:3},8,["label","filter-method"])):(0,n.createCommentVNode)("",!0),o.payStatus?((0,n.openBlock)(),(0,n.createBlock)(C,{key:5,label:o.payStatus.label,prop:"payStatus",filters:[{text:"0",value:"0"},{text:"1",value:"1"},{text:"2",value:"2"}],"filter-method":s.filterStatus,"filter-placement":"bottom-end","column-key":"payStatus"},{default:(0,n.withCtx)((function(t){return[(0,n.renderSlot)(e.$slots,"payStatus",{scope:t})]})),_:3},8,["label","filter-method"])):(0,n.createCommentVNode)("",!0)]})),_:3},8,["data","show-summary","onSelectionChange","onCellClick"])),[[V,s.loading]]),!0===o.pagination?((0,n.openBlock)(),(0,n.createElementBlock)("div",i,[(0,n.createVNode)(y,{pageSize:s.params.limit,total:s.total,options:s.params,render:d.getTableData},null,8,["pageSize","total","options","render"])])):(0,n.createCommentVNode)("",!0)]})),_:3})]})),_:3})}]])},3474:(e,t,o)=>{o.r(t),o.d(t,{default:()=>a});var n=o(4865);const r={name:"Pagination",props:{pageSize:[Number,String],currentPage:[Number,String],total:[Number,String],options:[Object],render:[Function],layout:{type:String,default:"total, sizes, prev, pager, next, jumper"}},setup:function(e,t){return{handlePageChange:function(t){e.options.page=t,e.render()},handleSizeChange:function(t){e.options.limit=t,e.render()}}}};const a=(0,o(3744).Z)(r,[["render",function(e,t,o,r,a,l){var c=(0,n.resolveComponent)("el-pagination");return(0,n.openBlock)(),(0,n.createBlock)(c,{background:"",onSizeChange:r.handleSizeChange,onCurrentChange:r.handlePageChange,"page-sizes":[10,30,100],"page-size":o.pageSize,layout:o.layout,total:o.total},null,8,["onSizeChange","onCurrentChange","page-size","layout","total"])}]])},6112:(e,t,o)=>{o.d(t,{Z:()=>u});var n=o(4865),r=o(8957);const a=(0,n.defineComponent)({name:"Refresh"}),l={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},c=[(0,n.createElementVNode)("path",{fill:"currentColor",d:"M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"},null,-1)];var u=(0,r.Z)(a,[["render",function(e,t,o,r,a,u){return(0,n.openBlock)(),(0,n.createElementBlock)("svg",l,c)}]])}}]);