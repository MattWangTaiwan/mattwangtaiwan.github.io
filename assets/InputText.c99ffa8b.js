var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,l=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,a=(e,a)=>{for(var n in a||(a={}))t.call(a,n)&&l(e,n,a[n]);if(o)for(var n of o(a))r.call(a,n)&&l(e,n,a[n]);return e};import{V as n}from"./vendor.e0c7b3c9.js";import{b as i,C as u,n as s}from"./index.09816dd9.js";import{a as d,W as p,P as c}from"./GenericView.ae7f5407.js";function h(e,t){return void 0===t&&(t={}),function(o,r){d(t,o,r),i((function(o,r){(o.props||(o.props={}))[r]=t,o.model={prop:r,event:e||r}}))(o,r)}}function v(e){const t=encodeURIComponent(e).match(/%[89ABab]/g);return e.length+(t?t.length:0)}var y=Object.defineProperty,g=Object.getOwnPropertyDescriptor,f=(e,t,o,r)=>{for(var l,a=r>1?void 0:r?g(t,o):t,n=e.length-1;n>=0;n--)(l=e[n])&&(a=(r?l(t,o,a):l(a))||a);return r&&a&&y(t,o,a),a};let m=class extends n{constructor(){super(...arguments),this.uid=`${Array.from({length:8},(()=>Math.floor(16*Math.random()).toString(16))).join("")}-${Date.now().toString(16)}`,this.inputValue_="",this.lastValidState_=!0}onValueChange(e){this.updateInputValue(e),this.$emit("onChange",e)}get defaultStyle(){let e="text";return!1!==this.disabled&&(e="not-allowed"),{cursor:e,position:"relative",display:"flex",justifyContent:"center",alignItems:"center",width:"auto",height:"30px",backgroundColor:"transparent",borderRadius:"8px",gap:"4px",border:"1px solid gray",padding:"4px 12px",opacity:!1===this.disabled?"1":"0.7"}}get customStyle(){return a(a({},this.defaultStyle),this.overwrrideStyle)}get inputStyle(){return{width:"100%",height:"100%",backgroundColor:this.backgroundColor,color:this.textColor,fontSize:this.fontSize}}get textColor(){var e,t;return(null==(e=this.overwrrideStyle)?void 0:e.color)?null==(t=this.overwrrideStyle)?void 0:t.color:"#000000"}get fontSize(){var e,t,o,r;return(null==(e=this.overwrrideStyle)?void 0:e.fontSize)?null==(t=this.overwrrideStyle)?void 0:t.fontSize:(null==(o=this.overwrrideStyle)?void 0:o["font-size"])?null==(r=this.overwrrideStyle)?void 0:r["font-size"]:"14px"}get backgroundColor(){var e,t,o,r;return(null==(e=this.overwrrideStyle)?void 0:e.backgroundColor)?null==(t=this.overwrrideStyle)?void 0:t.backgroundColor:(null==(o=this.overwrrideStyle)?void 0:o["background-color"])?null==(r=this.overwrrideStyle)?void 0:r["background-color"]:"transparent"}updateInputValue(e){this.inputValue_=e;let t=!0;this.regexp instanceof RegExp!=!0&&(t=!0),t=null!==this.inputValue_.match(this.regexp),this.lastValidState_!==t&&this.$emit("onValid",{valid:t}),this.lastValidState_=t}onChange(e){this.$emit("onChange",e.target.value)}onBlur(){this.$emit("onBlur")}onFocus(){this.$emit("onFocus")}mounted(){this.updateInputValue(this.value)}};f([h("onChange")],m.prototype,"value",2),f([c({default:""})],m.prototype,"regexp",2),f([c({default:""})],m.prototype,"placeholder",2),f([c({default:!1})],m.prototype,"disabled",2),f([c({default:!1})],m.prototype,"password",2),f([c({default:!1})],m.prototype,"readonly",2),f([c({default:()=>[]})],m.prototype,"datalist",2),f([c({default:()=>({})})],m.prototype,"overwrrideStyle",2),f([p("value"),p("inputValue_")],m.prototype,"onValueChange",1),m=f([u({inheritAttrs:!1})],m);const b={};var _=s(m,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._t("top"),o("div",{staticClass:"srt-row-vc",style:e.customStyle},[e._t("icon-start"),"checkbox"==(!1===e.password?"text":"password")?o("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue_,expression:"inputValue_"}],staticClass:"input",style:e.inputStyle,attrs:{placeholder:e.placeholder,disabled:e.disabled,list:e.uid,readonly:!1!==e.readonly,type:"checkbox"},domProps:{checked:Array.isArray(e.inputValue_)?e._i(e.inputValue_,null)>-1:e.inputValue_},on:{blur:e.onBlur,focus:e.onFocus,change:[function(t){var o=e.inputValue_,r=t.target,l=!!r.checked;if(Array.isArray(o)){var a=e._i(o,null);r.checked?a<0&&(e.inputValue_=o.concat([null])):a>-1&&(e.inputValue_=o.slice(0,a).concat(o.slice(a+1)))}else e.inputValue_=l},e.onChange]}}):"radio"==(!1===e.password?"text":"password")?o("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue_,expression:"inputValue_"}],staticClass:"input",style:e.inputStyle,attrs:{placeholder:e.placeholder,disabled:e.disabled,list:e.uid,readonly:!1!==e.readonly,type:"radio"},domProps:{checked:e._q(e.inputValue_,null)},on:{blur:e.onBlur,focus:e.onFocus,change:[function(t){e.inputValue_=null},e.onChange]}}):o("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue_,expression:"inputValue_"}],staticClass:"input",style:e.inputStyle,attrs:{placeholder:e.placeholder,disabled:e.disabled,list:e.uid,readonly:!1!==e.readonly,type:!1===e.password?"text":"password"},domProps:{value:e.inputValue_},on:{blur:e.onBlur,focus:e.onFocus,change:e.onChange,input:function(t){t.target.composing||(e.inputValue_=t.target.value)}}}),o("datalist",{attrs:{id:e.uid}},e._l(e.datalist,(function(e){return o("option",{domProps:{value:e}})})),0),e._t("icon-end")],2),e._t("bottom")],2)}),[],!1,w,"0b40db20",null,null);function w(e){for(let t in b)this[t]=b[t]}var V=function(){return _.exports}();export{V as I,h as M,v as l};
