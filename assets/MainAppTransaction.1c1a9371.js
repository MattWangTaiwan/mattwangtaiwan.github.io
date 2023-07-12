import{V as t}from"./vendor.e0c7b3c9.js";import{C as i,n as r}from"./index.09816dd9.js";import{G as e}from"./GenericView.ae7f5407.js";import{C as a,O as o,B as n,F as l,A as d}from"./OverviewItem.76c410ee.js";import"./InputText.c99ffa8b.js";import"./Faicon.b7025e9f.js";var s={},p=Object.defineProperty,c=Object.getOwnPropertyDescriptor;let g=class extends t{constructor(){super(...arguments),this.xAxis_=["12/20","12/21","12/22","12/23","12/24","12/25","12/26"],this.salesData_=[{name:"In-store Traffic",value:[1,2,3,8,9,6,9],type:"bar"},{name:"Transaction",value:[1,2,3,8,9,6,9],type:"bar"},{name:"Conversion",value:[.1,.2,.3,.4,.3,.6,.9],type:"line"}],this.revenueData_=[{name:"Transaction",value:[1,2,3,8,9,6,9],type:"bar"},{name:"Revenue",value:[100,200,300,400,300,600,900],type:"line"}],this.transactionData_=[{title:"Revenue",value:118865,rate:-55.9,iconType:"skyrec2",iconName:"revenue"},{title:"Transaction",value:1023,rate:-29.9,iconType:"skyrec2",iconName:"transaction"},{title:"Conversion",value:7.2,rate:1,iconType:"skyrec2",iconName:"sales-conversion"},{title:"ATV",value:116.1,rate:-37.1,iconType:"skyrec2",iconName:"atv"},{title:"UPT",value:13.8,rate:-25.4,iconType:"skyrec2",iconName:"upt"}]}get chartStyle(){return{gridTemplateAreas:'\n        "title title"\n        "chart chart"\n      '}}get transaction1(){return[this.transactionData_[0],this.transactionData_[1]]}get transaction2(){return[this.transactionData_[2],this.transactionData_[3]]}get transaction3(){return[this.transactionData_[4]]}handleState(t){try{t.nowState}catch(i){console.error(i.message)}}created(){this.$$created()}beforeDestroy(){this.$$beforeDestroy()}};g=((t,i,r,e)=>{for(var a,o=e>1?void 0:e?c(i,r):i,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(e?a(i,r,o):a(o))||o);return e&&o&&p(i,r,o),o})([i({components:{Card:a,OverviewItem:o,BarLineChart:n}})],g);const b={};var m=r(g,(function(){var t=this,i=t.$createElement,r=t._self._c||i;return r("div",{staticClass:"pp-fit-100 grid-base grid-container"},[r("div",{staticClass:"transaction-all",staticStyle:{"grid-area":"area-overview"}},[r("Card",{attrs:{displayHeader:!0,overwrrideStyle:t.chartStyle},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Transaction Overview")]},proxy:!0}])},[r("div",{staticClass:"pp-row-vhc",staticStyle:{height:"60px"}},t._l(t.transactionData_,(function(i,e){return r("OverviewItem",t._b({key:e,staticStyle:{gap:"8px"}},"OverviewItem",i,!1))})),1)])],1),r("div",{staticClass:"transaction-part",staticStyle:{"grid-area":"area-overview-1"}},[r("Card",{attrs:{displayHeader:!0,overwrrideStyle:t.chartStyle},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Transaction Overview")]},proxy:!0}])},[r("div",{staticClass:"pp-row-vhc",staticStyle:{height:"60px"}},t._l(t.transaction1,(function(i,e){return r("OverviewItem",t._b({key:e,staticStyle:{gap:"8px",width:"50%"}},"OverviewItem",i,!1))})),1)])],1),r("div",{staticClass:"transaction-part",staticStyle:{"grid-area":"area-overview-2"}},[r("Card",[r("div",{staticClass:"pp-row-vhc",staticStyle:{height:"60px"}},t._l(t.transaction2,(function(i,e){return r("OverviewItem",t._b({key:e,staticStyle:{gap:"8px",width:"50%"}},"OverviewItem",i,!1))})),1)])],1),r("div",{staticClass:"transaction-part",staticStyle:{"grid-area":"area-overview-3"}},[r("Card",[r("div",{staticClass:"pp-row-vhc",staticStyle:{height:"60px"}},t._l(t.transaction3,(function(i,e){return r("OverviewItem",t._b({key:e,staticStyle:{gap:"8px",width:"50%"}},"OverviewItem",i,!1))})),1)])],1),r("div",{staticStyle:{"grid-area":"area-conversion"}},[r("Card",{attrs:{displayHeader:!0,overwrrideStyle:t.chartStyle},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Sales Conversion")]},proxy:!0}])},[r("BarLineChart",{attrs:{xAxis:t.xAxis_,data:t.salesData_,y2AxisUnitName:"Conversion"}})],1)],1),r("div",{staticStyle:{"grid-area":"area-revenue"}},[r("Card",{attrs:{displayHeader:!0,overwrrideStyle:t.chartStyle},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Revenue")]},proxy:!0}])},[r("BarLineChart",{attrs:{xAxis:t.xAxis_,data:t.revenueData_,y2AxisUnitName:"Revenue"}})],1)],1)])}),[],!1,u,"499566dd",null,null);function u(t){for(let i in b)this[i]=b[i]}var h=function(){return m.exports}(),f=Object.defineProperty,v=Object.getOwnPropertyDescriptor;let y=class extends t{constructor(){super(...arguments),this.component_=""}handleState(t){try{switch(t.nowState){case"/main/app/transaction.filter.time":this.component_="FilterPanel";break;case"/main/app/transaction.view":this.component_="TransactionOverview"}}catch(i){console.error(i.message)}}created(){this.$$created()}beforeDestroy(){this.$$beforeDestroy()}};y=((t,i,r,e)=>{for(var a,o=e>1?void 0:e?v(i,r):i,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(e?a(i,r,o):a(o))||o);return e&&o&&f(i,r,o),o})([i({components:{FilterPanel:l,AppTitle:d,TransactionOverview:h}})],y);const x={};var w=r(y,(function(){var t=this,i=t.$createElement,r=t._self._c||i;return r("div",{staticClass:"pp-fit-100 sr-pt sr-px"},[r("AppTitle",{attrs:{title:"Transaction Overview"}}),r(t.component_,{tag:"component",staticClass:"pp-scroll-mobile",staticStyle:{height:"calc(100% - 40px)"}})],1)}),[],!1,_,"c8261180",null,null);function _(t){for(let i in x)this[i]=x[i]}var S={Active:2,Layer:[{"background-color":"#f6f8fc",color:"initial",width:"100%",height:"100%",left:0,top:0,position:"absolute",display:"flex","justify-content":"center","align-items":"center","margin-top":0,"margin-right":0,"margin-bottom":0,"margin-left":0,"padding-top":0,"padding-right":0,"padding-bottom":0,"padding-left":0,"border-top":"initial","border-right":"initial","border-bottom":"initial","border-left":"initial","border-top-left-radius":"initial","border-top-right-radius":"initial","border-bottom-left-radius":"initial","border-bottom-right-radius":"initial",opacity:1},{"background-color":"#f6f8fc",color:"initial",width:"100%",height:"100%",left:0,top:0,position:"absolute",display:"flex","justify-content":"center","align-items":"center","margin-top":0,"margin-right":0,"margin-bottom":0,"margin-left":0,"padding-top":0,"padding-right":0,"padding-bottom":0,"padding-left":0,"border-top":"initial","border-right":"initial","border-bottom":"initial","border-left":"initial","border-top-left-radius":"initial","border-top-right-radius":"initial","border-bottom-left-radius":"initial","border-bottom-right-radius":"initial",opacity:1},{"background-color":"#f6f8fc",color:"initial",width:"100%",height:"100%",left:0,top:0,position:"absolute",display:"flex","justify-content":"center","align-items":"center","margin-top":0,"margin-right":0,"margin-bottom":0,"margin-left":0,"padding-top":0,"padding-right":0,"padding-bottom":0,"padding-left":0,"border-top":"initial","border-right":"initial","border-bottom":"initial","border-left":"initial","border-top-left-radius":"initial","border-top-right-radius":"initial","border-bottom-left-radius":"initial","border-bottom-right-radius":"initial",opacity:1},{"background-color":"#f6f8fc",color:"initial",width:"100%",height:"100%",left:0,top:0,position:"absolute",display:"flex","justify-content":"center","align-items":"center","margin-top":0,"margin-right":0,"margin-bottom":0,"margin-left":0,"padding-top":0,"padding-right":0,"padding-bottom":0,"padding-left":0,"border-top":"initial","border-right":"initial","border-bottom":"initial","border-left":"initial","border-top-left-radius":"initial","border-top-right-radius":"initial","border-bottom-left-radius":"initial","border-bottom-right-radius":"initial",opacity:1},{"background-color":"#f6f8fc",color:"initial",width:"100%",height:"100%",left:0,top:0,position:"absolute",display:"flex","justify-content":"center","align-items":"center","margin-top":0,"margin-right":0,"margin-bottom":0,"margin-left":0,"padding-top":0,"padding-right":0,"padding-bottom":0,"padding-left":0,"border-top":"initial","border-right":"initial","border-bottom":"initial","border-left":"initial","border-top-left-radius":"initial","border-top-right-radius":"initial","border-bottom-left-radius":"initial","border-bottom-right-radius":"initial",opacity:1}],Layout:[{"background-color":"initial",color:"initial",width:"320px",height:"100%","margin-top":0,"margin-right":0,"margin-bottom":0,"margin-left":0,"padding-top":0,"padding-right":0,"padding-bottom":0,"padding-left":0,"border-top":"initial","border-right":"initial","border-bottom":"initial","border-left":"initial","border-top-left-radius":"initial","border-top-right-radius":"initial","border-bottom-left-radius":"initial","border-bottom-right-radius":"initial",opacity:1},{"background-color":"initial",color:"initial",width:"600px",height:"100%","margin-top":0,"margin-right":0,"margin-bottom":0,"margin-left":0,"padding-top":0,"padding-right":0,"padding-bottom":0,"padding-left":0,"border-top":"initial","border-right":"initial","border-bottom":"initial","border-left":"initial","border-top-left-radius":"initial","border-top-right-radius":"initial","border-bottom-left-radius":"initial","border-bottom-right-radius":"initial",opacity:1},{"background-color":"initial",color:"initial",width:"100%",height:"100%","margin-top":0,"margin-right":0,"margin-bottom":0,"margin-left":0,"padding-top":0,"padding-right":0,"padding-bottom":0,"padding-left":0,"border-top":"initial","border-right":"initial","border-bottom":"initial","border-left":"initial","border-top-left-radius":"initial","border-top-right-radius":"initial","border-bottom-left-radius":"initial","border-bottom-right-radius":"initial",opacity:1},{"background-color":"initial",color:"initial",width:"1264px",height:"100%","margin-top":0,"margin-right":0,"margin-bottom":0,"margin-left":0,"padding-top":0,"padding-right":0,"padding-bottom":0,"padding-left":0,"border-top":"initial","border-right":"initial","border-bottom":"initial","border-left":"initial","border-top-left-radius":"initial","border-top-right-radius":"initial","border-bottom-left-radius":"initial","border-bottom-right-radius":"initial",opacity:1},{"background-color":"initial",color:"initial",width:"1904px",height:"100%","margin-top":0,"margin-right":0,"margin-bottom":0,"margin-left":0,"padding-top":0,"padding-right":0,"padding-bottom":0,"padding-left":0,"border-top":"initial","border-right":"initial","border-bottom":"initial","border-left":"initial","border-top-left-radius":"initial","border-top-right-radius":"initial","border-bottom-left-radius":"initial","border-bottom-right-radius":"initial",opacity:1}],Grid:[[],[],[{x:0,y:0,r:-1,b:-1,w:"100%",h:"100%",comp:"LaptopMainAppTransactionComp1",style:{"margin-top":"0px","margin-right":"0px","margin-bottom":"0px","margin-left":"0px","padding-top":"0px","padding-right":"0px","padding-bottom":"0px","padding-left":"0px","border-top":"initial","border-right":"initial","border-bottom":"initial","border-left":"initial","border-top-left-radius":"initial","border-top-right-radius":"initial","border-bottom-left-radius":"initial","border-bottom-right-radius":"initial","background-color":"#010101",overflow:"hidden","box-shadow":"rgba(0, 0, 0, 0.1) 0 0 4px",opacity:1}}],[],[]],MxGrid:[0,0,1,0,0],MxSize:["Phone","Tablet","Laptop","Desktop","Ultra"],SubVue:[{tag:"LaptopMainAppTransactionComp1",c:function(){return w.exports}()}],VGuides:[[],[],[],[],[]],HGuides:[[],[],[],[],[]]},C=Object.defineProperty,k=Object.getOwnPropertyDescriptor;let O=class extends t{constructor(){super(...arguments),this.vxmAction_=s,this.visualize_=S}handleState(t){try{t.nowState}catch(i){console.error(i.message)}}created(){this.$$created()}beforeDestroy(){this.$$beforeDestroy()}};O=((t,i,r,e)=>{for(var a,o=e>1?void 0:e?k(i,r):i,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(e?a(i,r,o):a(o))||o);return e&&o&&C(i,r,o),o})([i({components:{GenericView:e}})],O);const T={};var A=r(O,(function(){var t=this,i=t.$createElement;return(t._self._c||i)("GenericView",{attrs:{VxMAction:t.vxmAction_,Visualize:t.visualize_},on:{"update:VxMAction":function(i){t.vxmAction_=i},"update:vx-m-action":function(i){t.vxmAction_=i},"update:Visualize":function(i){t.visualize_=i},"update:visualize":function(i){t.visualize_=i}}})}),[],!1,D,"7bee3c1b",null,null);function D(t){for(let i in T)this[i]=T[i]}var j=function(){return A.exports}();export{j as default};
