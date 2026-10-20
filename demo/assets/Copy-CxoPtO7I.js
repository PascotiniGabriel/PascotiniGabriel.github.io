import{a as p,r as o,j as t,e as h,h as j}from"./index-CM1nDP_y.js";/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};m.node;const b=p(m);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};y.node;const C=p(y);async function k(e){try{return await navigator.clipboard.writeText(e),!0}catch{return!1}}function g({value:e,label:a="Copiar",doneLabel:s="Copiado",variant:c="secondary",size:i="sm",onCopied:n,onError:r,iconOnlyLabel:x,className:f}){const[l,d]=o.useState(!1),u=o.useRef();o.useEffect(()=>()=>window.clearTimeout(u.current),[]);async function w(){if(!await k(e)){r==null||r();return}d(!0),n==null||n(),window.clearTimeout(u.current),u.current=window.setTimeout(()=>d(!1),2e3)}return t.jsx(j,{variant:c,size:i,icon:l?b:C,onClick:()=>void w(),className:h(l&&"is-copied",f),"aria-label":x,children:t.jsx("span",{"aria-live":"polite",children:l?s:a})})}function $({label:e,value:a,onCopy:s,hint:c}){const i=o.useId();return t.jsxs("div",{className:"copy-box",children:[t.jsx("label",{className:"field-label",htmlFor:i,children:e}),t.jsxs("div",{className:"copy-box-row",children:[t.jsx("input",{id:i,className:"input copy-box-input",readOnly:!0,value:a,onFocus:n=>n.currentTarget.select()}),t.jsx(g,{value:a,onCopied:s,iconOnlyLabel:`Copiar ${e.toLowerCase()}`})]}),c&&t.jsx("p",{className:"field-hint",children:c})]})}function v({value:e,max:a,className:s}){const c=e.length>a;return t.jsxs("span",{className:h("char-count num",c&&"is-over",s),"aria-label":`${e.length} de ${a} caracteres${c?", acima do limite":""}`,children:[e.length,"/",a]})}export{g as C,b as a,$ as b,v as c};
