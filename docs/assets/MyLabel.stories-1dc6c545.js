import{j as q}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const o=({allCaps:s=!1,color:x="text-primary",fontColor:L,label:t,size:v="normal"})=>q.jsx("span",{className:` 
      ${v} ${x}`,style:{color:L},children:s?t.toUpperCase():t});try{o.displayName="MyLabel",o.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:null,description:"Texto que se mostrará en la etiqueta",name:"label",required:!0,type:{name:'"string"'}},size:{defaultValue:{value:"normal"},description:"tamaño de la etiqueta",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"toda la etiqueta en mayusculas",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"text-primary"},description:"color de la etiqueta",name:"color",required:!1,type:{name:"enum",value:[{value:'"text-primary"'},{value:'"text-secondary "'},{value:'"text-tertiary"'}]}},fontColor:{defaultValue:null,description:"fontColor texto del span",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const M={title:"UI/labels/MyLabel",tags:["autodocs"],component:o,parameters:{layout:"centered"},argTypes:{size:{control:"select"},color:{control:"select"},allCaps:{control:"boolean"},fontColor:{control:"color"}}},e={args:{label:"Basic Label"}},a={args:{label:"All Caps Label",allCaps:!0}},r={args:{label:"Secundary Label",color:"text-secondary "}},l={args:{label:"Custom Color Label",fontColor:"#5517ac"}};var n,c,u;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: "Basic Label"
  }
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,m,i;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "All Caps Label",
    allCaps: true
  }
}`,...(i=(m=a.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var d,y,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Secundary Label",
    color: "text-secondary "
  }
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var C,f,g;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: "Custom Color Label",
    fontColor: "#5517ac"
  }
}`,...(g=(f=l.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const V=["Basic","AllCaps","Secundary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secundary,V as __namedExportsOrder,M as default};
//# sourceMappingURL=MyLabel.stories-1dc6c545.js.map
