import{j as r}from"./emotion-element-c39617d8.browser.esm-7f355d58.js";import{n as C}from"./emotion-styled.browser.esm-1ded5d6e.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-6f09c02c.js";const E=C.button`
  border: 0;
  line-height: 1;
  font-size: 16px;
  cursor: pointer;
  font-weight: 700;
  border-radius: 7px;
  display: inline-block;
  color: white;
  background-color: ${({color:e="light",theme:a})=>a.color[e]};
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  height: ${({fullHeight:e})=>e?"100%":"auto"};
  padding: ${({size:e="md",theme:a})=>a.padding[e]};
  opacity: ${({disabled:e})=>e?.6:1};
`,t=({status:e,children:a,...w})=>r(E,{type:"button",disabled:e==="disabled",...w,children:a});try{t.displayName="Button",t.__docgenInfo={description:"",displayName:"Button",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"normal"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},fullHeight:{defaultValue:null,description:"",name:"fullHeight",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}}}catch{}const A={component:t,title:"Components/Button",argTypes:{}},o=e=>r(t,{...e,children:"Light Button"});o.args={color:"light"};const s=e=>r(t,{...e,children:"Dark Button"});s.args={color:"dark"};const u=e=>r(t,{...e,children:"Disabled Button"});u.args={status:"disabled"};const n=e=>r(t,{...e,children:"Small Button"});n.args={size:"sm"};const l=e=>r(t,{...e,children:"Medium Button"});l.args={size:"md"};const i=e=>r(t,{...e,children:"Large Button"});i.args={size:"lg"};const d=e=>r(t,{...e,children:"FullWidth Button"});d.args={fullWidth:!0};const c=e=>r("div",{style:{height:"100px"},children:r(t,{...e,children:"FullHeight Button"})});c.args={fullHeight:!0};var p,m,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"(args: ButtonProps) => <Button {...args}>Light Button</Button>",...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var B,h,f;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:"(args: ButtonProps) => <Button {...args}>Dark Button</Button>",...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var y,b,v;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:"(args: ButtonProps) => <Button {...args}>Disabled Button</Button>",...(v=(b=u.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var S,k,_;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:"(args: ButtonProps) => <Button {...args}>Small Button</Button>",...(_=(k=n.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var H,L,D;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:"(args: ButtonProps) => <Button {...args}>Medium Button</Button>",...(D=(L=l.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var F,P,x;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:"(args: ButtonProps) => <Button {...args}>Large Button</Button>",...(x=(P=i.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var W,q,z;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:"(args: ButtonProps) => <Button {...args}>FullWidth Button</Button>",...(z=(q=d.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var M,V,$;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`(args: ButtonProps) => <div style={{
  height: '100px'
}}>
    <Button {...args}>FullHeight Button</Button>
  </div>`,...($=(V=c.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};const G=["Light","Dark","Disabled","Small","Medium","Large","FullWidth","FullHeight"];export{s as Dark,u as Disabled,c as FullHeight,d as FullWidth,i as Large,o as Light,l as Medium,n as Small,G as __namedExportsOrder,A as default};
