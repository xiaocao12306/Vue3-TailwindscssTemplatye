import{_,af as f,r as t,o as v,c as b,a as o,a6 as u,a4 as l,$ as V,aa as g}from"./vendor.fb7a9a94.js";import{a as w}from"./api.68aa7740.js";import"./config.9bb692cf.js";const x={style:{margin:"16px"}},y=g(" \u63D0\u4EA4 "),B={setup(k){const d=_();let a=f({userid:null,username:null,password:null});const m=r=>{console.log(r),w(r.id).then(e=>{localStorage.setItem("userid",e.id),d.back()})};return(r,e)=>{const n=t("van-field"),p=t("van-cell-group"),i=t("van-button"),c=t("van-form");return v(),b("div",null,[o(c,{onSubmit:m},{default:u(()=>[o(p,{inset:""},{default:u(()=>[o(n,{modelValue:l(a).userid,"onUpdate:modelValue":e[0]||(e[0]=s=>l(a).userid=s),name:"id",label:"\u8D26\u53F7",placeholder:"\u8D26\u53F7",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u8D26\u53F7"}]},null,8,["modelValue"]),o(n,{modelValue:l(a).username,"onUpdate:modelValue":e[1]||(e[1]=s=>l(a).username=s),name:"username",label:"\u7528\u6237\u540D",placeholder:"\u7528\u6237\u540D",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u7528\u6237\u540D"}]},null,8,["modelValue"]),o(n,{modelValue:l(a).password,"onUpdate:modelValue":e[2]||(e[2]=s=>l(a).password=s),type:"password",name:"password",label:"\u5BC6\u7801",placeholder:"\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u5BC6\u7801"}]},null,8,["modelValue"])]),_:1}),V("div",x,[o(i,{round:"",block:"",type:"primary","native-type":"submit",color:"#2ac8dd"},{default:u(()=>[y]),_:1})])]),_:1})])}}};export{B as default};
//# sourceMappingURL=Login.cc7fe489.js.map