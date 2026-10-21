import{c as p,j as e,r as s}from"./index-Bme32G9v.js";const x="https://wa.me/5555999348776?text=Oi%21+Vi+a+demonstra%C3%A7%C3%A3o+do+Faro+e+quero+conversar+sobre+a+minha+imobili%C3%A1ria.+%28ref%3A+demo%29",l=30,b=`
:root { --demo-banner-h: ${l}px; }
.nexo-demo-bar { position: fixed; z-index: 2147483000; left: 0; right: 0; top: 0; height: var(--demo-banner-h); display: flex; align-items: center;
  justify-content: space-between; gap: 12px; padding: 0 14px; box-sizing: border-box; background: var(--demo-bar-bg, var(--ink, #182329));
  color: var(--demo-bar-fg, var(--white, #fffdf8)); font-family: var(--demo-font, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  font-size: 12px; font-weight: 600; line-height: 1; letter-spacing: .01em; text-transform: none; box-shadow: 0 1px 0 rgba(255,255,255,.08); }
.nexo-demo-bar * { box-sizing: border-box; }
.nexo-demo-bar .nd-msg { display: flex; align-items: center; gap: 8px; min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.nexo-demo-bar .nd-dot { width: 7px; height: 7px; flex: 0 0 7px; border-radius: 50%; background: var(--demo-bar-accent, var(--acid, #d9f45e)); box-shadow: 0 0 0 3px rgba(217,244,94,.18); }
.nexo-demo-bar .nd-hint { opacity: .6; font-weight: 500; }
.nexo-demo-bar .nd-actions { display: flex; align-items: center; gap: 8px; flex: 0 0 auto; }
.nexo-demo-bar button, .nexo-demo-bar a { font: inherit; letter-spacing: inherit; text-transform: none; cursor: pointer; }
.nexo-demo-bar .nd-reset { background: transparent; color: inherit; border: 0; padding: 4px 6px; opacity: .72; text-decoration: underline; text-underline-offset: 2px; }
.nexo-demo-bar .nd-reset:hover { opacity: 1; }
.nexo-demo-bar .nd-cta { display: inline-flex; align-items: center; height: 22px; padding: 0 11px; border-radius: 4px; text-decoration: none; font-weight: 800;
  background: var(--demo-bar-accent, var(--acid, #d9f45e)); color: var(--demo-bar-accent-fg, var(--ink, #182329)); }
.nexo-demo-bar .nd-cta:hover { filter: brightness(1.06); }
.nexo-demo-toasts { position: fixed; z-index: 2147483001; left: 50%; top: calc(var(--demo-banner-h) + 10px); transform: translateX(-50%); display: flex; flex-direction: column; gap: 8px;
  align-items: center; pointer-events: none; width: max-content; max-width: calc(100vw - 24px); }
.nexo-demo-toast { padding: 10px 14px; border-radius: 6px; background: var(--demo-bar-bg, var(--ink, #182329)); color: var(--demo-bar-fg, var(--white, #fffdf8));
  font-family: var(--demo-font, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif); font-size: 12px; font-weight: 600; line-height: 1.35; box-shadow: 0 8px 30px rgba(0,0,0,.28); border-left: 3px solid var(--demo-bar-accent, var(--acid, #d9f45e));
  animation: nd-in .18s ease-out; }
@keyframes nd-in { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: none; } }
@media (max-width: 720px) {
  .nexo-demo-bar { top: auto; bottom: 0; height: 40px; padding: 0 10px; box-shadow: 0 -1px 0 rgba(255,255,255,.08); }
  .nexo-demo-bar .nd-hint, .nexo-demo-bar .nd-reset { display: none; }
  .nexo-demo-toasts { top: auto; bottom: 52px; }
}
`;let f=0;function h(){const[t,o]=s.useState([]);s.useEffect(()=>{function n(c){const i=String(c.detail||"Na demonstração isso é simulado"),d=++f;o(a=>a.some(r=>r.text===i)?a:[...a,{id:d,text:i}]),window.setTimeout(()=>o(a=>a.filter(r=>r.id!==d)),4200)}return window.addEventListener("nexo-demo-notice",n),()=>window.removeEventListener("nexo-demo-notice",n)},[]);const m=/^https?:\/\//i.test(x);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"nexo-demo-bar",role:"region","aria-label":"Aviso de demonstração",children:[e.jsxs("span",{className:"nd-msg",children:[e.jsx("i",{className:"nd-dot","aria-hidden":"true"}),e.jsx("span",{children:"Demonstração com dados fictícios"}),e.jsx("span",{className:"nd-hint",children:"· tudo muda a cada visita"})]}),e.jsxs("span",{className:"nd-actions",children:[e.jsx("button",{className:"nd-reset",type:"button",onClick:()=>window.location.reload(),children:"Reiniciar"}),e.jsx("a",{className:"nd-cta",href:x,...m?{target:"_blank",rel:"noopener noreferrer"}:{},children:"Falar no WhatsApp"})]})]}),e.jsx("div",{className:"nexo-demo-toasts","aria-live":"polite",children:t.map(n=>e.jsx("div",{className:"nexo-demo-toast",children:n.text},n.id))})]})}function u(){if(document.getElementById("nexo-demo-root"))return;const t=document.createElement("style");t.id="nexo-demo-style",t.textContent=b,document.head.appendChild(t);const o=document.createElement("div");o.id="nexo-demo-root",document.body.appendChild(o),p.createRoot(o).render(e.jsx(h,{}))}export{u as mountDemoBanner};
