"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1996,8965,7584],{5467:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(3645),o=a.n(n)()((function(e){return e[1]}));o.push([e.id,".avatar-uploader .avatar[data-v-08b9d977]{display:block;height:178px;width:178px}",""]);const r=o},8837:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(3645),o=a.n(n)()((function(e){return e[1]}));o.push([e.id,".avatar-uploader .el-upload{border:1px dashed #d9d9d9;border-radius:6px;cursor:pointer;overflow:hidden;position:relative;transition:var(--el-transition-duration-fast)}.avatar-uploader .el-upload:hover{border-color:var(--el-color-primary)}.el-icon.avatar-uploader-icon{color:#8c939d;font-size:28px;height:178px;text-align:center;width:178px}",""]);const r=o},3744:(e,t)=>{t.Z=(e,t)=>{const a=e.__vccOpts||e;for(const[e,n]of t)a[e]=n;return a}},1996:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var n=a(4865),o={class:"mt-4"},r={class:"block"},l=(0,n.createElementVNode)("div",{class:"text-xs text-gray-400"},"提示：1个小号为1个座席，默认 1",-1),i={class:"block"},c=(0,n.createElementVNode)("div",{class:"text-xs text-gray-400"},"提示：0 为无限制开通拨号用户",-1),d={class:"block"},u=(0,n.createElementVNode)("div",{class:"text-xs text-gray-400"},"提示：用于计算话费，默认 0.15/分钟",-1),s={class:"block"},m=(0,n.createElementVNode)("div",{class:"text-xs text-gray-400"},"超过测试时间将被淘汰，空为无限制。",-1),p={class:"block"},f=(0,n.createElementVNode)("div",{class:"text-xs text-gray-400"},"禁止后，该账号下的所有拨号账号将无法正常使用。",-1),h={class:"mt-4"},v={class:"block"},b={class:"flex flex-row justify-center mt-8"},V=(0,n.createTextVNode)("取消"),N=(0,n.createTextVNode)("开通");var w=a(7757),x=a.n(w),C=a(7584),g=a(8965);function k(e,t,a,n,o,r,l){try{var i=e[r](l),c=i.value}catch(e){return void a(e)}i.done?t(c):Promise.resolve(c).then(n,o)}function D(e){return function(){var t=this,a=arguments;return new Promise((function(n,o){var r=e.apply(t,a);function l(e){k(r,n,o,l,i,"next",e)}function i(e){k(r,n,o,l,i,"throw",e)}l(void 0)}))}}const y={name:"Edit",components:{BasicTabs:C.default,ImageUpload:g.default},setup:function(e,t){var a=(0,n.ref)("first"),o=(0,n.ref)([{label:"账户信息",name:"first"},{label:"客户信息",name:"second"}]),r=(0,n.ref)("left"),l=(0,n.ref)(60),i=(0,n.ref)(null),c=(0,n.ref)(e.loading),d=(0,n.reactive)(e.editData),u=function(){var e=D(x().mark((function e(){var a,o,r,l,u,s,m,p,f,h,v,b,V,N,w,C,g,k;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.value=!0,a=(0,n.unref)(i)){e.next=4;break}return e.abrupt("return");case 4:return e.prev=4,e.next=7,a.validate();case 7:o=d.number,r=d.password,l=d.sit,u=d.limitNumber,s=d.minNumber,m=d.rate,p=d.name,f=d.testNumber,h=d.state,v=d.dataTime,b=d.sale,V=d.company,N=d.contacts,w=d.ways,C=d.contractTime,g=d.contractImage,k={number:o,password:r,sit:l,limitNumber:u,minNumber:s,rate:m,name:p,testNumber:f,state:h,dataTime:v,sale:b,company:V,contacts:N,ways:w,contractTime:C,contractImage:g},console.log("编辑参数",k,c.value),t.emit("clickEdit",k,c.value),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(4);case 15:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=D(x().mark((function e(){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.emit("clickCancelEdit",!1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{getTab:function(e){a.value=e},activeName:a,tabsList:o,labelPosition:r,changeSwitch:function(e){!1===e&&(d.dataTime="")},width:l,handleChangeSit:function(e){d.sit=e},handleChangeLimitNumber:function(e){d.limitNumber=e},handleChangeRate:function(e){d.rate=e},editFormRef:i,ruleForm2:d,loading:c,submitEdit:u,cancelEdit:s,handleChangeDateTime:function(e){console.log(e),d.dataTime=e},handleChangeContractTime:function(e){d.contractTime=e}}},props:["loading","editData"],methods:{}};const E=(0,a(3744).Z)(y,[["render",function(e,t,a,w,x,C){var g=(0,n.resolveComponent)("el-input"),k=(0,n.resolveComponent)("el-form-item"),D=(0,n.resolveComponent)("el-option"),y=(0,n.resolveComponent)("el-select"),E=(0,n.resolveComponent)("el-input-number"),_=(0,n.resolveComponent)("el-switch"),T=(0,n.resolveComponent)("el-date-picker"),U=(0,n.resolveComponent)("el-form"),B=(0,n.resolveComponent)("image-upload"),Z=(0,n.resolveComponent)("el-button"),M=(0,n.resolveComponent)("basic-tabs");return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,[(0,n.createVNode)(M,{tabsList:w.tabsList,activeName:w.activeName,onGetTabs:w.getTab},{default:(0,n.withCtx)((function(){return[(0,n.withDirectives)((0,n.createElementVNode)("div",o,[(0,n.createVNode)(U,{class:"px-6",ref:"editFormRef",model:w.ruleForm2,"label-position":w.labelPosition},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(k,{label:"账号","label-width":"140px",prop:"number"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(g,{modelValue:a.editData.number,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.editData.number=e}),modelModifiers:{trim:!0},autocomplete:"off"},null,8,["modelValue"])]})),_:1}),(0,n.createVNode)(k,{label:"密码","label-width":"140px",prop:"password"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(g,{modelValue:a.editData.password,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.editData.password=e}),modelModifiers:{trim:!0},type:"password",autocomplete:"off"},null,8,["modelValue"])]})),_:1}),(0,n.createVNode)(k,{label:"公司名称","label-width":"140px",prop:"name"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(g,{modelValue:a.editData.name,"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.editData.name=e}),modelModifiers:{trim:!0},autocomplete:"off"},null,8,["modelValue"])]})),_:1}),(0,n.createVNode)(k,{label:"小号","label-width":"140px",prop:"minNumber"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(y,{modelValue:a.editData.minNumber,"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.editData.minNumber=e}),placeholder:"请选择名下小号"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(D,{label:"Zone No.1",value:"shanghai"}),(0,n.createVNode)(D,{label:"Zone No.2",value:"beijing"})]})),_:1},8,["modelValue"])]})),_:1}),(0,n.createVNode)(k,{label:"坐席","label-width":"140px",prop:"sit"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",null,[(0,n.createElementVNode)("div",r,[(0,n.createVNode)(E,{modelValue:a.editData.sit,"onUpdate:modelValue":t[4]||(t[4]=function(e){return a.editData.sit=e}),min:1,"controls-position":"right",onChange:w.handleChangeSit},null,8,["modelValue","onChange"])]),l])]})),_:1}),(0,n.createVNode)(k,{label:"限制用户数","label-width":"140px",prop:"limitNumber"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",null,[(0,n.createElementVNode)("div",i,[(0,n.createVNode)(E,{modelValue:a.editData.limitNumber,"onUpdate:modelValue":t[5]||(t[5]=function(e){return a.editData.limitNumber=e}),min:0,"controls-position":"right",onChange:w.handleChangeLimitNumber},null,8,["modelValue","onChange"])]),c])]})),_:1}),(0,n.createVNode)(k,{label:"费率（元）","label-width":"140px",prop:"rate"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",null,[(0,n.createElementVNode)("div",d,[(0,n.createVNode)(E,{modelValue:a.editData.rate,"onUpdate:modelValue":t[6]||(t[6]=function(e){return a.editData.rate=e}),min:.15,"controls-position":"right",onChange:w.handleChangeRate},null,8,["modelValue","min","onChange"])]),u])]})),_:1}),(0,n.createVNode)(k,{label:"测试账号","label-width":"140px",prop:"testNumber"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(_,{modelValue:a.editData.testNumber,"onUpdate:modelValue":t[7]||(t[7]=function(e){return a.editData.testNumber=e}),"inline-prompt":"","active-text":"是","inactive-text":"否",width:w.width,onChange:w.changeSwitch},null,8,["modelValue","width","onChange"])]})),_:1}),(0,n.withDirectives)((0,n.createVNode)(k,{label:"结束时间","label-width":"140px",prop:"state"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",null,[(0,n.createElementVNode)("div",s,[(0,n.createVNode)(T,{modelValue:a.editData.dataTime,"onUpdate:modelValue":t[8]||(t[8]=function(e){return a.editData.dataTime=e}),type:"datetime",placeholder:"",onChange:w.handleChangeDateTime,"value-format":"YYYY-MM-DD hh:mm:ss"},null,8,["modelValue","onChange"])]),m])]})),_:1},512),[[n.vShow,a.editData.testNumber]]),(0,n.createVNode)(k,{label:"状态","label-width":"140px",prop:"state"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",null,[(0,n.createElementVNode)("div",p,[(0,n.createVNode)(_,{modelValue:a.editData.state,"onUpdate:modelValue":t[9]||(t[9]=function(e){return a.editData.state=e}),"inline-prompt":"","active-text":"启用","inactive-text":"禁止",width:w.width},null,8,["modelValue","width"])]),f])]})),_:1})]})),_:1},8,["model","label-position"])],512),[[n.vShow,"first"===w.activeName]]),(0,n.withDirectives)((0,n.createElementVNode)("div",h,[(0,n.createVNode)(U,{class:"px-6",ref:"editFormRef",model:w.ruleForm2,"label-position":w.labelPosition},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(k,{label:"公司名称","label-width":"140px",prop:"company"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(g,{modelValue:a.editData.company,"onUpdate:modelValue":t[10]||(t[10]=function(e){return a.editData.company=e}),modelModifiers:{trim:!0},autocomplete:"off"},null,8,["modelValue"])]})),_:1}),(0,n.createVNode)(k,{label:"联系人","label-width":"140px",prop:"contacts"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(g,{modelValue:a.editData.contacts,"onUpdate:modelValue":t[11]||(t[11]=function(e){return a.editData.contacts=e}),modelModifiers:{trim:!0},autocomplete:"off"},null,8,["modelValue"])]})),_:1}),(0,n.createVNode)(k,{label:"联系方式","label-width":"140px",prop:"ways"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(g,{modelValue:a.editData.ways,"onUpdate:modelValue":t[12]||(t[12]=function(e){return a.editData.ways=e}),modelModifiers:{trim:!0},autocomplete:"off"},null,8,["modelValue"])]})),_:1}),(0,n.createVNode)(k,{label:"合同时间","label-width":"140px",prop:"contractTime"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",null,[(0,n.createElementVNode)("div",v,[(0,n.createVNode)(T,{modelValue:a.editData.contractTime,"onUpdate:modelValue":t[13]||(t[13]=function(e){return a.editData.contractTime=e}),type:"datetimerange",placeholder:"",onChange:w.handleChangeContractTime,"value-format":"YYYY-MM-DD hh:mm:ss"},null,8,["modelValue","onChange"])])])]})),_:1}),(0,n.createVNode)(k,{label:"合同","label-width":"140px",prop:"contractImage"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(B)]})),_:1})]})),_:1},8,["model","label-position"])],512),[[n.vShow,"second"===w.activeName]]),(0,n.createElementVNode)("div",b,[(0,n.createVNode)(Z,{onClick:t[14]||(t[14]=function(e){return w.cancelEdit()})},{default:(0,n.withCtx)((function(){return[V]})),_:1}),(0,n.createVNode)(Z,{type:"primary",loading:a.loading,onClick:t[15]||(t[15]=function(e){return w.submitEdit()})},{default:(0,n.withCtx)((function(){return[N]})),_:1},8,["loading"])])]})),_:1},8,["tabsList","activeName","onGetTabs"])])}]])},8965:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var n=a(4865),o=["src"];var r=a(7757),l=a.n(r),i=a(5244);function c(e,t,a,n,o,r,l){try{var i=e[r](l),c=i.value}catch(e){return void a(e)}i.done?t(c):Promise.resolve(c).then(n,o)}function d(e){return function(){var t=this,a=arguments;return new Promise((function(n,o){var r=e.apply(t,a);function l(e){c(r,n,o,l,i,"next",e)}function i(e){c(r,n,o,l,i,"throw",e)}l(void 0)}))}}const u={name:"ImageUpload",components:{Plus:a(3411).Z},setup:function(e,t){var a=(0,n.ref)(""),o=function(){var e=d(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("lpppp",t.type),"image/png"===t.type||"image/jpeg"===t.type){e.next=6;break}return i.z8.error("上传格式为图片！"),e.abrupt("return",!1);case 6:if(!(t.size/1024/1024>2)){e.next=9;break}return i.z8.error("上传图片不能超过2MB！"),e.abrupt("return",!1);case 9:return e.abrupt("return",!0);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r=function(){var e=d(l().mark((function e(t,a){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),console.log(a);case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return{imageUrl:a,beforeAvatarUpload:o,handleAvatarSuccess:r}},props:[]};var s=a(3379),m=a.n(s),p=a(5467),f={insert:"head",singleton:!1};m()(p.Z,f);p.Z.locals;var h=a(8837),v={insert:"head",singleton:!1};m()(h.Z,v);h.Z.locals;const b=(0,a(3744).Z)(u,[["render",function(e,t,a,r,l,i){var c=(0,n.resolveComponent)("Plus"),d=(0,n.resolveComponent)("el-icon"),u=(0,n.resolveComponent)("el-upload");return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,[(0,n.createVNode)(u,{class:"avatar-uploader",action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":r.handleAvatarSuccess,"before-upload":r.beforeAvatarUpload},{default:(0,n.withCtx)((function(){return[r.imageUrl?((0,n.openBlock)(),(0,n.createElementBlock)("img",{key:0,src:r.imageUrl,class:"avatar"},null,8,o)):((0,n.openBlock)(),(0,n.createBlock)(d,{key:1,class:"avatar-uploader-icon"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(c)]})),_:1}))]})),_:1},8,["on-success","before-upload"])])}],["__scopeId","data-v-08b9d977"]])},7584:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var n=a(4865);const o={name:"BasicTabs",setup:function(e,t){return{handleClick:function(e,a){t.emit("getTabs",e.props.name)}}},props:["tabsList","activeName"],watch:{},methods:{}};const r=(0,a(3744).Z)(o,[["render",function(e,t,a,o,r,l){var i=(0,n.resolveComponent)("el-tab-pane"),c=(0,n.resolveComponent)("el-tabs");return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,[(0,n.createVNode)(c,{modelValue:a.activeName,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.activeName=e}),type:"card",class:"demo-tabs",onTabClick:o.handleClick},{default:(0,n.withCtx)((function(){return[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(a.tabsList,(function(t){return(0,n.openBlock)(),(0,n.createBlock)(i,{key:t,label:t.label,name:t.name},{default:(0,n.withCtx)((function(){return[(0,n.renderSlot)(e.$slots,"default")]})),_:2},1032,["label","name"])})),128))]})),_:3},8,["modelValue","onTabClick"])])}]])}}]);