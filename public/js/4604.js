"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4604,8965,651],{4062:(e,t,n)=>{n.d(t,{Z:()=>w});var o=n(4865),r=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const s=e=>e+"_"+(Date.now()+Math.floor(1e6*Math.random())),p=()=>{const e="undefined"!=typeof window?window:n.g;return e&&"tinymce"in e?e.tinymce:null};function f(e){return e?e.getContent():""}function m(e,t){t&&t.setContent(e)}function v(e,t=!0){e&&e.mode.set(t?"readonly":"design")}function h(e,t,n,o,r){let a,l,{images_upload_url:i,images_upload_credentials:u,custom_images_upload_header:c,custom_images_upload_param:d,custom_images_upload_callback:s}=e||{};a=new XMLHttpRequest,a.withCredentials=!!u,a.open("POST",i||""),c&&Object.keys(c).forEach((e=>{a.setRequestHeader(e,c[e])})),a.upload.onprogress=function(e){r(e.loaded/e.total*100)},a.onload=function(){if(403===a.status)return void o("HTTP Error (custom): status "+a.status,{remove:!0});if(a.status<200||a.status>=300)return void o("HTTP Error (custom): status "+a.status);let e=JSON.parse(a.responseText);if(!e)return void o("Invalid JSON (custom): "+a.responseText);let t="function"==typeof s?s(e):e.location;t?n(t):o("Failed Path (custom): location image path is error/empty")},a.onerror=function(){o("Image upload failed due to a XHR Transport error. Code: "+a.status)},l=new FormData,l.append("file",t.blob(),t.filename()),d&&Object.keys(d).forEach((e=>{l.append(e,d[e])})),a.send(l)}const g=(()=>{let e={status:{},loadedCallbacks:{}};const t=t=>{e.loadedCallbacks[t]&&(e.loadedCallbacks[t].forEach((e=>{"function"==typeof e.handler&&e.handler.call(e.scope)})),e.loadedCallbacks[t]=void 0)};return{load:(n,o,r)=>{o&&(e.loadedCallbacks[n]||(e.loadedCallbacks[n]=[]),e.loadedCallbacks[n].push({handler:o,scope:r||void 0})),"LOADED"!==e.status[n]?"LOADING"!==e.status[n]&&(e.status[n]="LOADING",((e,t)=>{const n=document.createElement("script");n.id=s("tiny-script"),n.type="application/javascript",n.src=e,n.referrerPolicy="origin";const o=()=>{n.removeEventListener("load",o),t()};n.addEventListener("load",o),(document.head||document.body).appendChild(n)})(n,(()=>{e.status[n]="LOADED",t(n)}))):t(n)}}})(),b=["id"],y={key:0},w=Object.assign({name:"Vue3Tinymce"},{props:{modelValue:String,setting:{type:Object,default:()=>({})},setup:Function,disabled:Boolean,scriptSrc:String,debug:Boolean},emits:["update:modelValue","init","change"],setup:function(e,{expose:t,emit:n}){const r=e;let w=!0;const k=(0,o.reactive)({editor:null,id:s("tinymce"),err:""}),x=()=>{var e;return String(null!=(e=r.modelValue)?e:"")},C=(e,t,n)=>{r.debug&&console.log(`来自：${e.type} | \n ${t} \n ${n||"--"}`)},V=()=>{if(null===p())return void(k.err="tinymce is null");r.debug&&console.warn("vue3-tinymce 进入debug模式");let e=(t=((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&d(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&d(e,n,t[n]);return e})({},r.setting),o={selector:"#"+k.id,setup:e=>{r.setup&&r.setup(e),e.on("init",(()=>(e=>{k.editor=e,m(x(),e),r.disabled&&"readonly"!==e.mode.get()&&v(e),e.on("change input undo redo",(t=>{((e,t)=>{t||(t=k.editor);const o=f(t);C(e,o),n("update:modelValue",o),n("change",o)})(t,e)})),n("init",e)})(e)))}},a(t,l(o)));var t,o;r.setting.custom_images_upload&&(e.images_upload_handler=(...e)=>{h.apply(null,[r.setting||{},...e])}),p().init(e),w=!1};return(0,o.watch)((()=>r.modelValue),((e,t)=>{if(k.editor&&k.editor.initialized&&t!==e&&e!==f(k.editor)){if(C({type:"propsChanged to setContent"},e,t),null===e)return function(e,t){if(t){if(t.resetContent)return t.resetContent("");t.setContent(""),t.setDirty(!1),t.undoManager.clear()}}(0,k.editor);m(x(),k.editor)}})),(0,o.watch)((()=>r.disabled),(e=>{k.editor&&k.editor.initialized&&v(k.editor,e)})),t({id:k.id,editor:k.editor}),(0,o.onMounted)((()=>{var e;if(null!==p())return void V();const t=null!=(e=r.scriptSrc)?e:"https://cdn.bootcdn.net/ajax/libs/tinymce/5.8.2/tinymce.min.js";g.load(t,V)})),(0,o.onActivated)((()=>{w||V()})),(0,o.onDeactivated)((()=>{k.editor&&k.editor.remove()})),(0,o.onBeforeUnmount)((()=>{k.editor&&k.editor.remove()})),(e,t)=>((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createElementVNode)("div",{id:(0,o.unref)(k).id,class:"tiny-textarea"},null,8,b),(0,o.unref)(k).err?((0,o.openBlock)(),(0,o.createElementBlock)("p",y,(0,o.toDisplayString)((0,o.unref)(k).err),1)):(0,o.createCommentVNode)("",!0)],64))}});w.install=function(e){e.component("Vue3Tinymce",w)}},5467:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(3645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,".avatar-uploader .avatar[data-v-08b9d977]{display:block;height:178px;width:178px}",""]);const a=r},8837:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(3645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,".avatar-uploader .el-upload{border:1px dashed #d9d9d9;border-radius:6px;cursor:pointer;overflow:hidden;position:relative;transition:var(--el-transition-duration-fast)}.avatar-uploader .el-upload:hover{border-color:var(--el-color-primary)}.el-icon.avatar-uploader-icon{color:#8c939d;font-size:28px;height:178px;text-align:center;width:178px}",""]);const a=r},3744:(e,t)=>{t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,o]of t)n[e]=o;return n}},4604:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var o=n(4865),r={class:"flex flex-row justify-center mt-8"},a=(0,o.createTextVNode)("取消"),l=(0,o.createTextVNode)("发布");var i=n(7757),u=n.n(i),c=n(8965);function d(e,t,n,o,r,a,l){try{var i=e[a](l),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(o,r)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var a=e.apply(t,n);function l(e){d(a,o,r,l,i,"next",e)}function i(e){d(a,o,r,l,i,"throw",e)}l(void 0)}))}}const p={name:"Add",components:{TinyMce:n(651).default,ImageUpload:c.default},setup:function(e,t){var n=(0,o.ref)(60),r=(0,o.ref)(null),a=(0,o.ref)(e.loading),l=(0,o.reactive)({title:"",keywords:"",introduction:"",top:!1}),i=function(){var e=s(u().mark((function e(){var n,i,c,d,s,p;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.value=!0,n=(0,o.unref)(r)){e.next=4;break}return e.abrupt("return");case 4:return e.prev=4,e.next=7,n.validate();case 7:i=l.title,c=l.keywords,d=l.introduction,s=l.top,p={title:i,keywords:c,introduction:d,top:s},console.log("开通参数",p,a.value),t.emit("clickAdd",p,a.value),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(4);case 15:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=s(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.emit("clickCancelAdd",!1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{changeSwitch:function(e){console.log(e)},width:n,addFormRef:r,ruleForm2:l,loading:a,submitAdd:i,cancelAdd:c}},props:["loading"],methods:{}};const f=(0,n(3744).Z)(p,[["render",function(e,t,n,i,u,c){var d=(0,o.resolveComponent)("el-input"),s=(0,o.resolveComponent)("el-form-item"),p=(0,o.resolveComponent)("el-switch"),f=(0,o.resolveComponent)("image-upload"),m=(0,o.resolveComponent)("tiny-mce"),v=(0,o.resolveComponent)("el-button"),h=(0,o.resolveComponent)("el-form");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createVNode)(h,{ref:"addFormRef",model:i.ruleForm2},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(s,{label:"标题","label-width":"140px",prop:"title"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(d,{modelValue:i.ruleForm2.title,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.ruleForm2.title=e}),modelModifiers:{trim:!0},autocomplete:"off"},null,8,["modelValue"])]})),_:1}),(0,o.createVNode)(s,{label:"关键词","label-width":"140px",prop:"keywords"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(d,{modelValue:i.ruleForm2.keywords,"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.ruleForm2.keywords=e}),modelModifiers:{trim:!0},type:"text",autocomplete:"off"},null,8,["modelValue"])]})),_:1}),(0,o.createVNode)(s,{label:"简介","label-width":"140px",prop:"introduction"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(d,{type:"textarea",modelValue:i.ruleForm2.introduction,"onUpdate:modelValue":t[2]||(t[2]=function(e){return i.ruleForm2.introduction=e}),modelModifiers:{trim:!0},autocomplete:"off"},null,8,["modelValue"])]})),_:1}),(0,o.createVNode)(s,{label:"置顶","label-width":"140px",prop:"top"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(p,{modelValue:i.ruleForm2.top,"onUpdate:modelValue":t[3]||(t[3]=function(e){return i.ruleForm2.top=e}),"inline-prompt":"","active-text":"是","inactive-text":"否",width:i.width,onChange:i.changeSwitch},null,8,["modelValue","width","onChange"])]})),_:1}),(0,o.createVNode)(s,{label:"封面","label-width":"140px",prop:"cover"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(f)]})),_:1}),(0,o.createVNode)(s,{label:"内容","label-width":"140px",prop:"cover"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(m)]})),_:1}),(0,o.createElementVNode)("div",r,[(0,o.createVNode)(v,{onClick:t[4]||(t[4]=function(e){return i.cancelAdd()})},{default:(0,o.withCtx)((function(){return[a]})),_:1}),(0,o.createVNode)(v,{type:"primary",loading:n.loading,onClick:t[5]||(t[5]=function(e){return i.submitAdd()})},{default:(0,o.withCtx)((function(){return[l]})),_:1},8,["loading"])])]})),_:1},8,["model"])])}]])},8965:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var o=n(4865),r=["src"];var a=n(7757),l=n.n(a),i=n(5244);function u(e,t,n,o,r,a,l){try{var i=e[a](l),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(o,r)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var a=e.apply(t,n);function l(e){u(a,o,r,l,i,"next",e)}function i(e){u(a,o,r,l,i,"throw",e)}l(void 0)}))}}const d={name:"ImageUpload",components:{Plus:n(3411).Z},setup:function(e,t){var n=(0,o.ref)(""),r=function(){var e=c(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("lpppp",t.type),"image/png"===t.type||"image/jpeg"===t.type){e.next=6;break}return i.z8.error("上传格式为图片！"),e.abrupt("return",!1);case 6:if(!(t.size/1024/1024>2)){e.next=9;break}return i.z8.error("上传图片不能超过2MB！"),e.abrupt("return",!1);case 9:return e.abrupt("return",!0);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a=function(){var e=c(l().mark((function e(t,n){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),console.log(n);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return{imageUrl:n,beforeAvatarUpload:r,handleAvatarSuccess:a}},props:[]};var s=n(3379),p=n.n(s),f=n(5467),m={insert:"head",singleton:!1};p()(f.Z,m);f.Z.locals;var v=n(8837),h={insert:"head",singleton:!1};p()(v.Z,h);v.Z.locals;const g=(0,n(3744).Z)(d,[["render",function(e,t,n,a,l,i){var u=(0,o.resolveComponent)("Plus"),c=(0,o.resolveComponent)("el-icon"),d=(0,o.resolveComponent)("el-upload");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createVNode)(d,{class:"avatar-uploader",action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":a.handleAvatarSuccess,"before-upload":a.beforeAvatarUpload},{default:(0,o.withCtx)((function(){return[a.imageUrl?((0,o.openBlock)(),(0,o.createElementBlock)("img",{key:0,src:a.imageUrl,class:"avatar"},null,8,r)):((0,o.openBlock)(),(0,o.createBlock)(c,{key:1,class:"avatar-uploader-icon"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(u)]})),_:1}))]})),_:1},8,["on-success","before-upload"])])}],["__scopeId","data-v-08b9d977"]])},651:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var o=n(4865);const r={name:"TinyMce",components:{Vue3Tinymce:n(4062).Z},setup:function(e,t){return{state:(0,o.ref)({content:"hello",setting:{height:400}}),editNote:function(e){console.log(e)}}},props:[]};const a=(0,n(3744).Z)(r,[["render",function(e,t,n,r,a,l){var i=(0,o.resolveComponent)("vue3-tinymce");return(0,o.openBlock)(),(0,o.createBlock)(i,{modelValue:r.state.content,"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.state.content=e}),setting:r.state.setting,onChange:r.editNote},null,8,["modelValue","setting","onChange"])}]])}}]);