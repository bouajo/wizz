(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[553],{7129:(e,t,r)=>{Promise.resolve().then(r.bind(r,193))},193:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>v});var s=r(5155),a=r(2115),i=r(4085),l=r(2336),n=r(371),d=r(5785),o=r(3670),c=r(852),m=r(3565),u=r(9602);let f=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(c.bL,{className:(0,u.cn)("grid gap-2",r),...a,ref:t})});f.displayName=c.bL.displayName;let p=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(c.q7,{ref:t,className:(0,u.cn)("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),...a,children:(0,s.jsx)(c.C1,{className:"flex items-center justify-center",children:(0,s.jsx)(m.A,{className:"h-2.5 w-2.5 fill-current text-current"})})})});p.displayName=c.q7.displayName;var x=r(745),h=r(98),b=r(8684),g=r(5015),j=r(767);function v(){let[e,t]=(0,a.useState)("letter"),[r,c]=(0,a.useState)([]),[m,u]=(0,a.useState)(new Date().toISOString().split("T")[0]),[v,y]=(0,a.useState)(!1),[N,w]=(0,a.useState)(!1),k=e=>{c(r.filter((t,r)=>r!==e))};return(0,s.jsxs)("div",{className:"max-w-2xl mx-auto",children:[(0,s.jsx)("h1",{className:"text-2xl font-bold mb-6",children:"Send Document"}),(0,s.jsxs)("form",{onSubmit:t=>{t.preventDefault(),console.log("Sending document:",{documentType:e,addSignature:v,addCompanyStamp:N})},className:"space-y-6",children:[(0,s.jsxs)(f,{defaultValue:"letter",onValueChange:e=>t(e),children:[(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)(p,{value:"letter",id:"letter"}),(0,s.jsx)(d.J,{htmlFor:"letter",children:"Send Letter"})]}),(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)(p,{value:"email",id:"email"}),(0,s.jsx)(d.J,{htmlFor:"email",children:"Send Email"})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(d.J,{htmlFor:"recipient-name",children:"Recipient Name"}),(0,s.jsx)(l.p,{id:"recipient-name",placeholder:"Enter recipient's name"})]}),"letter"===e?(0,s.jsxs)("div",{children:[(0,s.jsx)(d.J,{htmlFor:"recipient-address",children:"Recipient Address"}),(0,s.jsx)(n.T,{id:"recipient-address",placeholder:"Enter recipient's address",rows:3})]}):(0,s.jsxs)("div",{children:[(0,s.jsx)(d.J,{htmlFor:"recipient-email",children:"Recipient Email"}),(0,s.jsx)(l.p,{id:"recipient-email",type:"email",placeholder:"Enter recipient's email address"})]}),"letter"===e&&(0,s.jsxs)("div",{children:[(0,s.jsx)(d.J,{htmlFor:"letter-date",children:"Date"}),(0,s.jsx)(l.p,{id:"letter-date",type:"date",value:m,onChange:e=>u(e.target.value)})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(d.J,{htmlFor:"subject",children:"Subject"}),(0,s.jsx)(l.p,{id:"subject",placeholder:"Enter subject"})]}),"letter"===e&&(0,s.jsxs)("div",{children:[(0,s.jsx)(d.J,{htmlFor:"template",children:"Template"}),(0,s.jsxs)(x.l6,{children:[(0,s.jsx)(x.bq,{id:"template",children:(0,s.jsx)(x.yv,{placeholder:"Select a template"})}),(0,s.jsxs)(x.gC,{children:[(0,s.jsx)(x.eb,{value:"blank",children:"Blank Letter"}),(0,s.jsx)(x.eb,{value:"business",children:"Business Letter"}),(0,s.jsx)(x.eb,{value:"formal",children:"Formal Letter"}),(0,s.jsx)(x.eb,{value:"personal",children:"Personal Letter"})]})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(d.J,{htmlFor:"content",children:"Content"}),(0,s.jsx)(n.T,{id:"content",placeholder:"Enter your ".concat(e," content here"),rows:10})]}),(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsxs)(i.$,{type:"button",onClick:()=>{console.log("Generating document with AI")},className:"w-full",children:[(0,s.jsx)(h.A,{className:"mr-2 h-4 w-4"}),"Generate ","letter"===e?"Letter":"Email"," Using AI"]})}),(0,s.jsxs)("div",{children:[(0,s.jsx)(d.J,{htmlFor:"file-upload",children:"Attachments"}),(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)(l.p,{id:"file-upload",type:"file",multiple:!0,onChange:e=>{e.target.files&&c([...r,...Array.from(e.target.files)])},className:"hidden"}),(0,s.jsxs)(d.J,{htmlFor:"file-upload",className:"cursor-pointer inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",children:["letter"===e?(0,s.jsx)(b.A,{className:"mr-2 h-4 w-4"}):(0,s.jsx)(g.A,{className:"mr-2 h-4 w-4"}),"letter"===e?"Upload Document":"Attach Files"]})]}),r.length>0&&(0,s.jsx)("ul",{className:"mt-2 space-y-2",children:r.map((e,t)=>(0,s.jsxs)("li",{className:"flex items-center justify-between bg-gray-100 px-3 py-2 rounded-md",children:[(0,s.jsx)("span",{className:"text-sm truncate",children:e.name}),(0,s.jsx)(i.$,{variant:"ghost",size:"sm",onClick:()=>k(t),className:"text-red-500 hover:text-red-700",children:(0,s.jsx)(j.A,{className:"h-4 w-4"})})]},t))})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)(o.S,{id:"add-signature",checked:v,onCheckedChange:e=>y(e)}),(0,s.jsx)(d.J,{htmlFor:"add-signature",children:"Add Signature"})]}),"letter"===e&&(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)(o.S,{id:"add-company-stamp",checked:N,onCheckedChange:e=>w(e)}),(0,s.jsx)(d.J,{htmlFor:"add-company-stamp",children:"Add Company Stamp"})]})]}),(0,s.jsxs)("div",{className:"flex justify-end space-x-2",children:[(0,s.jsx)(i.$,{variant:"outline",children:"Save Draft"}),(0,s.jsxs)(i.$,{type:"submit",children:["Send ","letter"===e?"Letter":"Email"]})]})]})]})}},4085:(e,t,r)=>{"use strict";r.d(t,{$:()=>o});var s=r(5155),a=r(2115),i=r(2317),l=r(652),n=r(9602);let d=(0,l.F)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"underline-offset-4 hover:underline text-primary"},size:{default:"h-10 py-2 px-4",sm:"h-9 px-3 rounded-md",lg:"h-11 px-8 rounded-md"}},defaultVariants:{variant:"default",size:"default"}}),o=a.forwardRef((e,t)=>{let{className:r,variant:a,size:l,asChild:o=!1,...c}=e,m=o?i.DX:"button";return(0,s.jsx)(m,{className:(0,n.cn)(d({variant:a,size:l,className:r})),ref:t,...c})});o.displayName="Button"},3670:(e,t,r)=>{"use strict";r.d(t,{S:()=>d});var s=r(5155),a=r(2115),i=r(6352),l=r(8867),n=r(9602);let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(i.bL,{ref:t,className:(0,n.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",r),...a,children:(0,s.jsx)(i.C1,{className:(0,n.cn)("flex items-center justify-center text-current"),children:(0,s.jsx)(l.A,{className:"h-4 w-4"})})})});d.displayName=i.bL.displayName},2336:(e,t,r)=>{"use strict";r.d(t,{p:()=>l});var s=r(5155),a=r(2115),i=r(9602);let l=a.forwardRef((e,t)=>{let{className:r,type:a,...l}=e;return(0,s.jsx)("input",{type:a,className:(0,i.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...l})});l.displayName="Input"},5785:(e,t,r)=>{"use strict";r.d(t,{J:()=>o});var s=r(5155),a=r(2115),i=r(6195),l=r(652),n=r(9602);let d=(0,l.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),o=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(i.b,{ref:t,className:(0,n.cn)(d(),r),...a})});o.displayName=i.b.displayName},745:(e,t,r)=>{"use strict";r.d(t,{bq:()=>m,eb:()=>f,gC:()=>u,l6:()=>o,yv:()=>c});var s=r(5155),a=r(2115),i=r(8883),l=r(1719),n=r(8867),d=r(9602);let o=i.bL;i.YJ;let c=i.WT,m=a.forwardRef((e,t)=>{let{className:r,children:a,...n}=e;return(0,s.jsxs)(i.l9,{ref:t,className:(0,d.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),...n,children:[a,(0,s.jsx)(i.In,{asChild:!0,children:(0,s.jsx)(l.A,{className:"h-4 w-4 opacity-50"})})]})});m.displayName=i.l9.displayName;let u=a.forwardRef((e,t)=>{let{className:r,children:a,position:l="popper",...n}=e;return(0,s.jsx)(i.ZL,{children:(0,s.jsx)(i.UC,{ref:t,className:(0,d.cn)("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===l&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",r),position:l,...n,children:(0,s.jsx)(i.LM,{className:(0,d.cn)("p-1","popper"===l&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:a})})})});u.displayName=i.UC.displayName,a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(i.JU,{ref:t,className:(0,d.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",r),...a})}).displayName=i.JU.displayName;let f=a.forwardRef((e,t)=>{let{className:r,children:a,...l}=e;return(0,s.jsxs)(i.q7,{ref:t,className:(0,d.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),...l,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(i.VF,{children:(0,s.jsx)(n.A,{className:"h-4 w-4"})})}),(0,s.jsx)(i.p4,{children:a})]})});f.displayName=i.q7.displayName,a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(i.wv,{ref:t,className:(0,d.cn)("-mx-1 my-1 h-px bg-muted",r),...a})}).displayName=i.wv.displayName},371:(e,t,r)=>{"use strict";r.d(t,{T:()=>l});var s=r(5155),a=r(2115),i=r(9602);let l=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("textarea",{className:(0,i.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...a})});l.displayName="Textarea"},9602:(e,t,r)=>{"use strict";r.d(t,{cn:()=>i});var s=r(3463),a=r(9795);function i(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.QP)((0,s.$)(t))}}},e=>{var t=t=>e(e.s=t);e.O(0,[41,639,405,44,776,441,517,358],()=>t(7129)),_N_E=e.O()}]);