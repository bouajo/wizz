(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[529],{8776:(e,t,r)=>{Promise.resolve().then(r.bind(r,2607))},2607:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var n=r(5155),s=r(2115),i=r(4085),a=r(2336),l=r(371),o=r(5785),d=r(3670),c=r(98),u=r(5015),f=r(767);function m(){let[e,t]=(0,s.useState)([]),[r,m]=(0,s.useState)(!1),p=r=>{t(e.filter((e,t)=>t!==r))};return(0,n.jsxs)("div",{className:"max-w-2xl mx-auto",children:[(0,n.jsx)("h1",{className:"text-2xl font-bold mb-6",children:"Send Mail"}),(0,n.jsxs)("form",{onSubmit:e=>{e.preventDefault(),console.log("Sending email:",{addSignature:r})},className:"space-y-6",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(o.J,{htmlFor:"recipient-name",children:"Recipient Name"}),(0,n.jsx)(a.p,{id:"recipient-name",placeholder:"Enter recipient's name"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(o.J,{htmlFor:"recipient-email",children:"Recipient Email"}),(0,n.jsx)(a.p,{id:"recipient-email",type:"email",placeholder:"Enter recipient's email address"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(o.J,{htmlFor:"subject",children:"Subject"}),(0,n.jsx)(a.p,{id:"subject",placeholder:"Enter email subject"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(o.J,{htmlFor:"content",children:"Content"}),(0,n.jsx)(l.T,{id:"content",placeholder:"Enter your email content here",rows:10})]}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsxs)(i.$,{type:"button",onClick:()=>{console.log("Generating email with AI")},className:"w-full",children:[(0,n.jsx)(c.A,{className:"mr-2 h-4 w-4"}),"Generate Mail Using AI"]})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(o.J,{htmlFor:"file-upload",children:"Attachments"}),(0,n.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,n.jsx)(a.p,{id:"file-upload",type:"file",multiple:!0,onChange:r=>{r.target.files&&t([...e,...Array.from(r.target.files)])},className:"hidden"}),(0,n.jsxs)(o.J,{htmlFor:"file-upload",className:"cursor-pointer inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",children:[(0,n.jsx)(u.A,{className:"mr-2 h-4 w-4"}),"Attach Files"]})]}),e.length>0&&(0,n.jsx)("ul",{className:"mt-2 space-y-2",children:e.map((e,t)=>(0,n.jsxs)("li",{className:"flex items-center justify-between bg-gray-100 px-3 py-2 rounded-md",children:[(0,n.jsx)("span",{className:"text-sm truncate",children:e.name}),(0,n.jsx)(i.$,{variant:"ghost",size:"sm",onClick:()=>p(t),className:"text-red-500 hover:text-red-700",children:(0,n.jsx)(f.A,{className:"h-4 w-4"})})]},t))})]}),(0,n.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,n.jsx)(d.S,{id:"add-signature",checked:r,onCheckedChange:e=>m(e)}),(0,n.jsx)(o.J,{htmlFor:"add-signature",children:"Add Signature"})]}),(0,n.jsxs)("div",{className:"flex justify-end space-x-2",children:[(0,n.jsx)(i.$,{variant:"outline",children:"Save Draft"}),(0,n.jsx)(i.$,{type:"submit",children:"Send Mail"})]})]})]})}},4085:(e,t,r)=>{"use strict";r.d(t,{$:()=>d});var n=r(5155),s=r(2115),i=r(2317),a=r(652),l=r(9602);let o=(0,a.F)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"underline-offset-4 hover:underline text-primary"},size:{default:"h-10 py-2 px-4",sm:"h-9 px-3 rounded-md",lg:"h-11 px-8 rounded-md"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,t)=>{let{className:r,variant:s,size:a,asChild:d=!1,...c}=e,u=d?i.DX:"button";return(0,n.jsx)(u,{className:(0,l.cn)(o({variant:s,size:a,className:r})),ref:t,...c})});d.displayName="Button"},3670:(e,t,r)=>{"use strict";r.d(t,{S:()=>o});var n=r(5155),s=r(2115),i=r(6352),a=r(8867),l=r(9602);let o=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(i.bL,{ref:t,className:(0,l.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",r),...s,children:(0,n.jsx)(i.C1,{className:(0,l.cn)("flex items-center justify-center text-current"),children:(0,n.jsx)(a.A,{className:"h-4 w-4"})})})});o.displayName=i.bL.displayName},2336:(e,t,r)=>{"use strict";r.d(t,{p:()=>a});var n=r(5155),s=r(2115),i=r(9602);let a=s.forwardRef((e,t)=>{let{className:r,type:s,...a}=e;return(0,n.jsx)("input",{type:s,className:(0,i.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...a})});a.displayName="Input"},5785:(e,t,r)=>{"use strict";r.d(t,{J:()=>d});var n=r(5155),s=r(2115),i=r(6195),a=r(652),l=r(9602);let o=(0,a.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(i.b,{ref:t,className:(0,l.cn)(o(),r),...s})});d.displayName=i.b.displayName},371:(e,t,r)=>{"use strict";r.d(t,{T:()=>a});var n=r(5155),s=r(2115),i=r(9602);let a=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("textarea",{className:(0,i.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...s})});a.displayName="Textarea"},9602:(e,t,r)=>{"use strict";r.d(t,{cn:()=>i});var n=r(3463),s=r(9795);function i(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.QP)((0,n.$)(t))}},8867:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(7401).A)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},5015:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(7401).A)("Paperclip",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]])},98:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(7401).A)("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]])},767:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(7401).A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},6352:(e,t,r)=>{"use strict";r.d(t,{C1:()=>A,bL:()=>w});var n=r(2115),s=r(8068),i=r(8166),a=r(3610),l=r(1488),o=r(858),d=r(7510),c=r(7028),u=r(3360),f=r(5155),m="Checkbox",[p,h]=(0,i.A)(m),[v,x]=p(m),b=n.forwardRef((e,t)=>{let{__scopeCheckbox:r,name:i,checked:o,defaultChecked:d,required:c,disabled:m,value:p="on",onCheckedChange:h,form:x,...b}=e,[g,y]=n.useState(null),w=(0,s.s)(t,e=>y(e)),A=n.useRef(!1),E=!g||x||!!g.closest("form"),[M=!1,C]=(0,l.i)({prop:o,defaultProp:d,onChange:h}),R=n.useRef(M);return n.useEffect(()=>{let e=null==g?void 0:g.form;if(e){let t=()=>C(R.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}},[g,C]),(0,f.jsxs)(v,{scope:r,state:M,disabled:m,children:[(0,f.jsx)(u.sG.button,{type:"button",role:"checkbox","aria-checked":j(M)?"mixed":M,"aria-required":c,"data-state":k(M),"data-disabled":m?"":void 0,disabled:m,value:p,...b,ref:w,onKeyDown:(0,a.m)(e.onKeyDown,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:(0,a.m)(e.onClick,e=>{C(e=>!!j(e)||!e),E&&(A.current=e.isPropagationStopped(),A.current||e.stopPropagation())})}),E&&(0,f.jsx)(N,{control:g,bubbles:!A.current,name:i,value:p,checked:M,required:c,disabled:m,form:x,style:{transform:"translateX(-100%)"},defaultChecked:!j(d)&&d})]})});b.displayName=m;var g="CheckboxIndicator",y=n.forwardRef((e,t)=>{let{__scopeCheckbox:r,forceMount:n,...s}=e,i=x(g,r);return(0,f.jsx)(c.C,{present:n||j(i.state)||!0===i.state,children:(0,f.jsx)(u.sG.span,{"data-state":k(i.state),"data-disabled":i.disabled?"":void 0,...s,ref:t,style:{pointerEvents:"none",...e.style}})})});y.displayName=g;var N=e=>{let{control:t,checked:r,bubbles:s=!0,defaultChecked:i,...a}=e,l=n.useRef(null),c=(0,o.Z)(r),u=(0,d.X)(t);n.useEffect(()=>{let e=l.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(c!==r&&t){let n=new Event("click",{bubbles:s});e.indeterminate=j(r),t.call(e,!j(r)&&r),e.dispatchEvent(n)}},[c,r,s]);let m=n.useRef(!j(r)&&r);return(0,f.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:null!=i?i:m.current,...a,tabIndex:-1,ref:l,style:{...e.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function j(e){return"indeterminate"===e}function k(e){return j(e)?"indeterminate":e?"checked":"unchecked"}var w=b,A=y},6195:(e,t,r)=>{"use strict";r.d(t,{b:()=>l});var n=r(2115),s=r(3360),i=r(5155),a=n.forwardRef((e,t)=>(0,i.jsx)(s.sG.label,{...e,ref:t,onMouseDown:t=>{var r;t.target.closest("button, input, select, textarea")||(null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));a.displayName="Label";var l=a},7028:(e,t,r)=>{"use strict";r.d(t,{C:()=>a});var n=r(2115),s=r(8068),i=r(6611),a=e=>{let{present:t,children:r}=e,a=function(e){var t,r;let[s,a]=n.useState(),o=n.useRef({}),d=n.useRef(e),c=n.useRef("none"),[u,f]=(t=e?"mounted":"unmounted",r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},n.useReducer((e,t)=>{let n=r[e][t];return null!=n?n:e},t));return n.useEffect(()=>{let e=l(o.current);c.current="mounted"===u?e:"none"},[u]),(0,i.N)(()=>{let t=o.current,r=d.current;if(r!==e){let n=c.current,s=l(t);e?f("MOUNT"):"none"===s||(null==t?void 0:t.display)==="none"?f("UNMOUNT"):r&&n!==s?f("ANIMATION_OUT"):f("UNMOUNT"),d.current=e}},[e,f]),(0,i.N)(()=>{if(s){var e;let t;let r=null!==(e=s.ownerDocument.defaultView)&&void 0!==e?e:window,n=e=>{let n=l(o.current).includes(e.animationName);if(e.target===s&&n&&(f("ANIMATION_END"),!d.current)){let e=s.style.animationFillMode;s.style.animationFillMode="forwards",t=r.setTimeout(()=>{"forwards"===s.style.animationFillMode&&(s.style.animationFillMode=e)})}},i=e=>{e.target===s&&(c.current=l(o.current))};return s.addEventListener("animationstart",i),s.addEventListener("animationcancel",n),s.addEventListener("animationend",n),()=>{r.clearTimeout(t),s.removeEventListener("animationstart",i),s.removeEventListener("animationcancel",n),s.removeEventListener("animationend",n)}}f("ANIMATION_END")},[s,f]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:n.useCallback(e=>{e&&(o.current=getComputedStyle(e)),a(e)},[])}}(t),o="function"==typeof r?r({present:a.isPresent}):n.Children.only(r),d=(0,s.s)(a.ref,function(e){var t,r;let n=null===(t=Object.getOwnPropertyDescriptor(e.props,"ref"))||void 0===t?void 0:t.get,s=n&&"isReactWarning"in n&&n.isReactWarning;return s?e.ref:(s=(n=null===(r=Object.getOwnPropertyDescriptor(e,"ref"))||void 0===r?void 0:r.get)&&"isReactWarning"in n&&n.isReactWarning)?e.props.ref:e.props.ref||e.ref}(o));return"function"==typeof r||a.isPresent?n.cloneElement(o,{ref:d}):null};function l(e){return(null==e?void 0:e.animationName)||"none"}a.displayName="Presence"},858:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(2115);function s(e){let t=n.useRef({value:e,previous:e});return n.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}}},e=>{var t=t=>e(e.s=t);e.O(0,[41,441,517,358],()=>t(8776)),_N_E=e.O()}]);