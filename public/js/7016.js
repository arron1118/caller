"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7016],{3744:(e,t)=>{t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,o]of t)n[e]=o;return n}},2916:(e,t,n)=>{n.d(t,{Z:()=>f});var o=n(4865),r={class:"p-4 flex justify-center text-slate-200 text-base"},l=["src"],c={key:0},a=(0,o.createTextVNode)(" 设置 "),i=(0,o.createTextVNode)(" 个人资料 "),s=(0,o.createTextVNode)(" 退 出 ");var u=n(9038);const d=(0,o.defineComponent)({components:{Link:u.rU},setup:function(){var e=(0,o.ref)({marginLeft:"200px"}),t=(0,o.ref)([]),n=(0,o.ref)(!1);return t.value[0]=route().current(),{selectedKeys:t,collapsed:n,contentStyles:e}},created:function(){},methods:{onClick:function(e){e.key;console.log("click on item ${key}")},changeCollapsed:function(){this.collapsed=!this.collapsed,this.contentStyles.marginLeft=this.collapsed?"80px":"200px"}}});const f=(0,n(3744).Z)(d,[["render",function(e,t,n,u,d,f){var p=(0,o.resolveComponent)("font-awesome-icon"),m=(0,o.resolveComponent)("Link"),C=(0,o.resolveComponent)("a-menu-item"),h=(0,o.resolveComponent)("a-menu"),k=(0,o.resolveComponent)("a-layout-sider"),x=(0,o.resolveComponent)("a-dropdown"),g=(0,o.resolveComponent)("a-layout-header"),y=(0,o.resolveComponent)("a-layout-content"),w=(0,o.resolveComponent)("a-layout");return(0,o.openBlock)(),(0,o.createBlock)(w,{"has-sider":""},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(k,{collapsed:e.collapsed,trigger:null,class:(0,o.normalizeClass)("w-52 h-screen top-0 left-0 bottom-0"),style:{position:"fixed"},theme:"dark",collapsible:""},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",r,[(0,o.createElementVNode)("img",{src:e.$page.props.site.logo,class:"w-8 h-8 mr-2"},null,8,l),e.collapsed?(0,o.createCommentVNode)("",!0):((0,o.openBlock)(),(0,o.createElementBlock)("span",c,(0,o.toDisplayString)(e.$page.props.site.siteName),1))]),(0,o.createVNode)(h,{selectedKeys:e.selectedKeys,theme:"dark",mode:"inline"},{default:(0,o.withCtx)((function(){return[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.$page.props.menus.admin,(function(t){return(0,o.openBlock)(),(0,o.createBlock)(C,{key:t.url,class:(0,o.normalizeClass)({"text-blue-500":e.route().current(t.url)}),title:t.title},{icon:(0,o.withCtx)((function(){return[(0,o.createVNode)(p,{icon:t.icon},null,8,["icon"])]})),default:(0,o.withCtx)((function(){return[(0,o.createVNode)(m,{href:e.route(t.url)},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(t.title),1)]})),_:2},1032,["href"])]})),_:2},1032,["class","title"])})),128))]})),_:1},8,["selectedKeys"])]})),_:1},8,["collapsed"]),(0,o.createVNode)(w,{style:(0,o.normalizeStyle)(e.contentStyles),class:(0,o.normalizeClass)("transition ease-in-out")},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(g,{style:{backgroundColor:"#fff",padding:"0 16px"}},{default:(0,o.withCtx)((function(){return[e.collapsed?((0,o.openBlock)(),(0,o.createBlock)(p,{key:0,icon:["fas","indent"],class:"trigger",onClick:e.changeCollapsed,title:"展开"},null,8,["onClick"])):((0,o.openBlock)(),(0,o.createBlock)(p,{key:1,icon:["fas","outdent"],class:"trigger",onClick:e.changeCollapsed,title:"收起"},null,8,["onClick"])),(0,o.createVNode)(x,{class:"float-right"},{overlay:(0,o.withCtx)((function(){return[(0,o.createVNode)(h,{onClick:e.onClick},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(C,{key:"1"},{icon:(0,o.withCtx)((function(){return[(0,o.createVNode)(p,{icon:["fas","user"]})]})),default:(0,o.withCtx)((function(){return[(0,o.createVNode)(m,{href:e.route("admin.profile")},{default:(0,o.withCtx)((function(){return[i]})),_:1},8,["href"])]})),_:1}),(0,o.createVNode)(C,{key:"2"},{icon:(0,o.withCtx)((function(){return[(0,o.createVNode)(p,{icon:["fas","arrow-right-from-bracket"]})]})),default:(0,o.withCtx)((function(){return[(0,o.createVNode)(m,{href:e.route("admin.logout")},{default:(0,o.withCtx)((function(){return[s]})),_:1},8,["href"])]})),_:1})]})),_:1},8,["onClick"])]})),default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("a",{class:"ant-dropdown-link",onClick:t[0]||(t[0]=(0,o.withModifiers)((function(){}),["prevent"]))},[a,(0,o.createVNode)(p,{icon:["fas","angle-down"]})])]})),_:1})]})),_:1}),(0,o.createVNode)(y,{class:"transition transform ease-in-out",style:{margin:"16px",padding:"16px",background:"#fff",minHeight:"280px"}},{default:(0,o.withCtx)((function(){return[(0,o.renderSlot)(e.$slots,"default")]})),_:3})]})),_:3},8,["style"])]})),_:3})}]])},7016:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var o=n(4865),r=(0,o.createTextVNode)(" Profile page ");const l={name:"Profile",components:{AdminLayout:n(2916).Z}};const c=(0,n(3744).Z)(l,[["render",function(e,t,n,l,c,a){var i=(0,o.resolveComponent)("AdminLayout");return(0,o.openBlock)(),(0,o.createBlock)(i,null,{default:(0,o.withCtx)((function(){return[r]})),_:1})}]])}}]);