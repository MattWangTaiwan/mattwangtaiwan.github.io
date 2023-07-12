import{V as i}from"./vendor.e0c7b3c9.js";import{C as t,c as r,a as o,n as e}from"./index.9b5e839a.js";import{G as a}from"./GenericView.80da4096.js";import{A as n,B as d}from"./Button.7fbdee09.js";import{I as l}from"./InputText.dfe9b787.js";import{F as s}from"./Faicon.00379273.js";var p={},g=Object.defineProperty,c=Object.getOwnPropertyDescriptor;let b=class extends i{constructor(){super(...arguments),this.username_="",this.password_="",this.showPwd_=!1}get iconStyle(){return{color:"#B3B3B3",width:"18px","font-size":"18px"}}async onClick(){await r.setSignalServerSetting(this.$$serverless(),[{url:"wss://gss.skyrec.cc",seq:1}],this.$$alias()),await r.controlGssDisconnect(this.$$serverless(),this.$$alias()),await r.controlGssConnect(this.$$serverless(),this.$$alias());await r.waitForGssConnected(this.$$serverless(),5e3,this.$$alias())&&this.$$fsm().change("LOGIN",{username:this.username_,password:this.password_})}async handleState(i){try{switch(i.nowState){case"/login.view":"/login.success"===i.preState&&this.$$fsm().change("NEXT");break;case"/login.process":const{username:t,password:r}=i.nowProps,{result:e,stores:a,errno:n,userInfo:d}=await o.login(this.$$serverless(),t,r,!0,this.$$alias());e?this.$$fsm().change("SUCCESS"):this.$$fsm().change("FAIL");break;case"/login.success":this.$$fsm().change("BACK")}}catch(t){console.error(t.message)}}created(){this.$$created()}beforeDestroy(){this.$$beforeDestroy()}};b=((i,t,r,o)=>{for(var e,a=o>1?void 0:o?c(t,r):t,n=i.length-1;n>=0;n--)(e=i[n])&&(a=(o?e(t,r,a):e(a))||a);return o&&a&&g(t,r,a),a})([t({components:{Avatar:n,InputText:l,Faicon:s,Button:d}})],b);const m={};var h=e(b,(function(){var i=this,t=i.$createElement,r=i._self._c||t;return r("div",{staticClass:"pp-fit-100 pp-col-vc container top-padding"},[r("Avatar",{staticStyle:{width:"166px",height:"166px","margin-bottom":"32px"}}),r("InputText",{staticClass:"input-size",staticStyle:{"margin-bottom":"22px"},attrs:{overwrrideStyle:{color:"#B3B3B3",fontSize:"16px",height:"35px"}},scopedSlots:i._u([{key:"icon-start",fn:function(){return[r("Faicon",{attrs:{type:"far",name:"user",overwrrideStyle:i.iconStyle}})]},proxy:!0}]),model:{value:i.username_,callback:function(t){i.username_=t},expression:"username_"}}),r("InputText",{staticClass:"input-size",staticStyle:{"margin-bottom":"22px"},attrs:{password:!i.showPwd_,overwrrideStyle:{color:"#B3B3B3",fontSize:"16px",height:"35px"}},scopedSlots:i._u([{key:"icon-start",fn:function(){return[r("Faicon",{attrs:{type:"far",name:"lock",overwrrideStyle:i.iconStyle}})]},proxy:!0},{key:"icon-end",fn:function(){return[r("div",{staticStyle:{cursor:"pointer"},on:{click:function(){return i.showPwd_=!i.showPwd_}}},[i.showPwd_?r("Faicon",{attrs:{type:"far",name:"eye",overwrrideStyle:i.iconStyle}}):r("Faicon",{attrs:{type:"far",name:"eye-slash",overwrrideStyle:i.iconStyle}})],1)]},proxy:!0}]),model:{value:i.password_,callback:function(t){i.password_=t},expression:"password_"}}),r("Button",{staticClass:"btn-size",staticStyle:{"margin-bottom":"22px"},on:{onClick:i.onClick}},[i._v("登入")]),r("div",{staticStyle:{color:"#A3A3A3","font-size":"14px","margin-bottom":"73px"}},[i._v("忘記帳號或密碼?")]),r("div",{staticStyle:{color:"#A3A3A3","font-size":"14px"}},[i._v("查看更多SKYREC資訊")])],1)}),[],!1,u,"46c68fc0",null,null);function u(i){for(let t in m)this[t]=m[t]}var f={Active:2,Layer:[{"background-color":"#f6f8fc",color:"initial",width:"100%",height:"100%",left:0,top:0,position:"absolute",display:"flex","justify-content":"center","align-items":"center","margin-top":0,"margin-right":0,"margin-bottom":0,"margin-left":0,"padding-top":0,"padding-right":0,"padding-bottom":0,"padding-left":0,"border-top":"initial","border-right":"initial","border-bottom":"initial","border-left":"initial","border-top-left-radius":"initial","border-top-right-radius":"initial","border-bottom-left-radius":"initial","border-bottom-right-radius":"initial",opacity:1},{"background-color":"#f6f8fc",color:"initial",width:"100%",height:"100%",left:0,top:0,position:"absolute",display:"flex","justify-content":"center","align-items":"center","margin-top":0,"margin-right":0,"margin-bottom":0,"margin-left":0,"padding-top":0,"padding-right":0,"padding-bottom":0,"padding-left":0,"border-top":"initial","border-right":"initial","border-bottom":"initial","border-left":"initial","border-top-left-radius":"initial","border-top-right-radius":"initial","border-bottom-left-radius":"initial","border-bottom-right-radius":"initial",opacity:1},{"background-color":"#f6f8fc",color:"initial",width:"100%",height:"100%",left:0,top:0,position:"absolute",display:"flex","justify-content":"center","align-items":"center","margin-top":0,"margin-right":0,"margin-bottom":0,"margin-left":0,"padding-top":0,"padding-right":0,"padding-bottom":0,"padding-left":0,"border-top":"initial","border-right":"initial","border-bottom":"initial","border-left":"initial","border-top-left-radius":"initial","border-top-right-radius":"initial","border-bottom-left-radius":"initial","border-bottom-right-radius":"initial",opacity:1},{"background-color":"#f6f8fc",color:"initial",width:"100%",height:"100%",left:0,top:0,position:"absolute",display:"flex","justify-content":"center","align-items":"center","margin-top":0,"margin-right":0,"margin-bottom":0,"margin-left":0,"padding-top":0,"padding-right":0,"padding-bottom":0,"padding-left":0,"border-top":"initial","border-right":"initial","border-bottom":"initial","border-left":"initial","border-top-left-radius":"initial","border-top-right-radius":"initial","border-bottom-left-radius":"initial","border-bottom-right-radius":"initial",opacity:1},{"background-color":"#f6f8fc",color:"initial",width:"100%",height:"100%",left:0,top:0,position:"absolute",display:"flex","justify-content":"center","align-items":"center","margin-top":0,"margin-right":0,"margin-bottom":0,"margin-left":0,"padding-top":0,"padding-right":0,"padding-bottom":0,"padding-left":0,"border-top":"initial","border-right":"initial","border-bottom":"initial","border-left":"initial","border-top-left-radius":"initial","border-top-right-radius":"initial","border-bottom-left-radius":"initial","border-bottom-right-radius":"initial",opacity:1}],Layout:[{"background-color":"initial",color:"initial",width:"320px",height:"100%","margin-top":0,"margin-right":0,"margin-bottom":0,"margin-left":0,"padding-top":0,"padding-right":0,"padding-bottom":0,"padding-left":0,"border-top":"initial","border-right":"initial","border-bottom":"initial","border-left":"initial","border-top-left-radius":"initial","border-top-right-radius":"initial","border-bottom-left-radius":"initial","border-bottom-right-radius":"initial",opacity:1},{"background-color":"initial",color:"initial",width:"600px",height:"100%","margin-top":0,"margin-right":0,"margin-bottom":0,"margin-left":0,"padding-top":0,"padding-right":0,"padding-bottom":0,"padding-left":0,"border-top":"initial","border-right":"initial","border-bottom":"initial","border-left":"initial","border-top-left-radius":"initial","border-top-right-radius":"initial","border-bottom-left-radius":"initial","border-bottom-right-radius":"initial",opacity:1},{"background-color":"initial",color:"initial",width:"100%",height:"100%","margin-top":0,"margin-right":0,"margin-bottom":0,"margin-left":0,"padding-top":0,"padding-right":0,"padding-bottom":0,"padding-left":0,"border-top":"initial","border-right":"initial","border-bottom":"initial","border-left":"initial","border-top-left-radius":"initial","border-top-right-radius":"initial","border-bottom-left-radius":"initial","border-bottom-right-radius":"initial",opacity:1},{"background-color":"initial",color:"initial",width:"1264px",height:"100%","margin-top":0,"margin-right":0,"margin-bottom":0,"margin-left":0,"padding-top":0,"padding-right":0,"padding-bottom":0,"padding-left":0,"border-top":"initial","border-right":"initial","border-bottom":"initial","border-left":"initial","border-top-left-radius":"initial","border-top-right-radius":"initial","border-bottom-left-radius":"initial","border-bottom-right-radius":"initial",opacity:1},{"background-color":"initial",color:"initial",width:"1904px",height:"100%","margin-top":0,"margin-right":0,"margin-bottom":0,"margin-left":0,"padding-top":0,"padding-right":0,"padding-bottom":0,"padding-left":0,"border-top":"initial","border-right":"initial","border-bottom":"initial","border-left":"initial","border-top-left-radius":"initial","border-top-right-radius":"initial","border-bottom-left-radius":"initial","border-bottom-right-radius":"initial",opacity:1}],Grid:[[],[],[{x:0,y:0,r:-1,b:-1,w:"100%",h:"100%",comp:"LaptopLoginComp1",style:{"margin-top":"0px","margin-right":"0px","margin-bottom":"0px","margin-left":"0px","padding-top":"0px","padding-right":"0px","padding-bottom":"0px","padding-left":"0px","border-top":"initial","border-right":"initial","border-bottom":"initial","border-left":"initial","border-top-left-radius":"initial","border-top-right-radius":"initial","border-bottom-left-radius":"initial","border-bottom-right-radius":"initial","background-color":"rgba(75,243,205,1)","box-shadow":"rgba(0, 0, 0, 0.1) 0 0 4px",opacity:1}}],[],[]],MxGrid:[0,0,1,0,0],MxSize:["Phone","Tablet","Laptop","Desktop","Ultra"],SubVue:[{tag:"LaptopLoginComp1",c:function(){return h.exports}()}],VGuides:[[],[],[],[],[]],HGuides:[[],[],[],[],[]]},y=Object.defineProperty,x=Object.getOwnPropertyDescriptor;let w=class extends i{constructor(){super(...arguments),this.vxmAction_=p,this.visualize_=f}handleState(i){try{i.nowState}catch(t){console.error(t.message)}}created(){this.$$created()}beforeDestroy(){this.$$beforeDestroy()}};w=((i,t,r,o)=>{for(var e,a=o>1?void 0:o?x(t,r):t,n=i.length-1;n>=0;n--)(e=i[n])&&(a=(o?e(t,r,a):e(a))||a);return o&&a&&y(t,r,a),a})([t({components:{GenericView:a}})],w);const v={};var $=e(w,(function(){var i=this,t=i.$createElement;return(i._self._c||t)("GenericView",{attrs:{VxMAction:i.vxmAction_,Visualize:i.visualize_},on:{"update:VxMAction":function(t){i.vxmAction_=t},"update:vx-m-action":function(t){i.vxmAction_=t},"update:Visualize":function(t){i.visualize_=t},"update:visualize":function(t){i.visualize_=t}}})}),[],!1,S,"355d84d4",null,null);function S(i){for(let t in v)this[t]=v[t]}var _=function(){return $.exports}();export{_ as default};
