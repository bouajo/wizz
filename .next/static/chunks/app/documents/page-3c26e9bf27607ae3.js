(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[875],{2687:(e,t,a)=>{Promise.resolve().then(a.bind(a,6142))},6142:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>j});var s=a(5155),r=a(2115),d=a(4085),n=a(2336),l=a(2079),i=a(750),o=a(1719),c=a(6967);let m=(0,a(7401).A)("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);var f=a(2060),u=a(8684),p=a(853),x=a(6659),h=a(6293);let g=[{id:1,name:"Q4 Financial Report.pdf",type:"PDF",size:"2.5 MB",lastModified:"2023-12-15",date:"2023-12-01",category:"Finance",stakeholders:["John Doe","Jane Smith","Mike Johnson"]},{id:2,name:"Project Proposal.docx",type:"Word",size:"1.8 MB",lastModified:"2023-12-14",date:"2023-12-10",category:"Projects",stakeholders:["Emily Brown","David Wilson"]},{id:3,name:"Meeting Minutes.txt",type:"Text",size:"32 KB",lastModified:"2023-12-13",date:"2023-12-12",category:"Administration",stakeholders:["Sarah Lee","Tom Clark"]},{id:4,name:"Marketing Strategy.pptx",type:"PowerPoint",size:"5.2 MB",lastModified:"2023-12-12",date:"2023-12-05",category:"Marketing",stakeholders:["Neil Patrick","Rachel Green"]},{id:5,name:"Budget Forecast.xlsx",type:"Excel",size:"1.1 MB",lastModified:"2023-12-11",date:"2023-12-08",category:"Finance",stakeholders:["John Doe","Lisa Wong"]}],y=[{id:1,name:"Company Documents",children:[{id:2,name:"Finance",children:[{id:3,name:"Reports"},{id:4,name:"Budgets"}]},{id:5,name:"HR",children:[{id:6,name:"Policies"},{id:7,name:"Employee Records"}]},{id:8,name:"Projects",children:[{id:9,name:"Active"},{id:10,name:"Archived"}]}]}];function j(){let[e,t]=(0,r.useState)(!1),[a,j]=(0,r.useState)(""),[b,N]=(0,r.useState)(!1),[v,w]=(0,r.useState)(y),[A,k]=(0,r.useState)([1]);(0,r.useEffect)(()=>{t(!0)},[]);let R=g.filter(e=>e.name.toLowerCase().includes(a.toLowerCase())),D=e=>{e.preventDefault(),e.stopPropagation(),"dragenter"===e.type||"dragover"===e.type?N(!0):"dragleave"===e.type&&N(!1)},M=e=>{k(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},C=e=>e.map(e=>(0,s.jsxs)("div",{className:"ml-4",children:[(0,s.jsxs)("div",{className:"flex items-center cursor-pointer hover:bg-accent hover:text-accent-foreground p-1 rounded",onClick:()=>M(e.id),children:[e.children?A.includes(e.id)?(0,s.jsx)(o.A,{className:"h-4 w-4 mr-1"}):(0,s.jsx)(c.A,{className:"h-4 w-4 mr-1"}):(0,s.jsx)("div",{className:"w-4 mr-1"}),(0,s.jsx)(m,{className:"h-4 w-4 mr-2 text-primary"}),(0,s.jsx)("span",{children:e.name})]}),e.children&&A.includes(e.id)&&C(e.children)]},e.id));return e?(0,s.jsxs)("div",{className:"space-y-6",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsx)("h1",{className:"text-2xl font-bold",children:"Documents"}),(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsxs)(d.$,{children:[(0,s.jsx)(f.A,{className:"mr-2 h-4 w-4"})," Create New Document"]}),(0,s.jsxs)(d.$,{variant:"outline",children:[(0,s.jsx)(m,{className:"mr-2 h-4 w-4"})," New Folder"]})]})]}),(0,s.jsxs)("div",{className:"space-y-6",children:[(0,s.jsxs)("div",{className:"p-6 border-2 border-dashed rounded-lg text-center ".concat(b?"border-primary bg-primary/10":"border-muted"),onDragEnter:D,onDragLeave:D,onDragOver:D,onDrop:e=>{e.preventDefault(),e.stopPropagation(),N(!1),e.dataTransfer.files&&e.dataTransfer.files[0]&&console.log("File(s) dropped")},children:[(0,s.jsx)(u.A,{className:"mx-auto h-12 w-12 text-muted-foreground"}),(0,s.jsx)("p",{className:"mt-2 text-sm text-muted-foreground",children:"Drag and drop files here, or click to select files"}),(0,s.jsx)("input",{id:"file-upload",name:"file-upload",type:"file",className:"sr-only",multiple:!0,onChange:e=>{console.log("File(s) selected")}}),(0,s.jsx)("label",{htmlFor:"file-upload",className:"mt-2 cursor-pointer inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90",children:"Select files"})]}),(0,s.jsxs)("div",{className:"bg-card p-4 rounded-lg shadow",children:[(0,s.jsx)("h2",{className:"text-lg font-semibold mb-2",children:"Directory"}),C(v)]}),(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)(p.A,{className:"h-4 w-4 text-muted-foreground"}),(0,s.jsx)(n.p,{type:"search",placeholder:"Search documents...",value:a,onChange:e=>j(e.target.value),className:"w-full"})]}),(0,s.jsx)("div",{className:"overflow-x-auto",children:(0,s.jsxs)(l.XI,{children:[(0,s.jsx)(l.A0,{children:(0,s.jsxs)(l.Hj,{children:[(0,s.jsx)(l.nd,{children:"Name"}),(0,s.jsx)(l.nd,{children:"Type"}),(0,s.jsx)(l.nd,{children:"Size"}),(0,s.jsx)(l.nd,{children:"Category"}),(0,s.jsx)(l.nd,{children:"Date"}),(0,s.jsx)(l.nd,{children:"Stakeholders"}),(0,s.jsx)(l.nd,{children:"Last Modified"}),(0,s.jsx)(l.nd,{className:"text-right",children:"Actions"})]})}),(0,s.jsx)(l.BF,{children:R.map(e=>(0,s.jsxs)(l.Hj,{children:[(0,s.jsx)(l.nA,{className:"font-medium",children:(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(x.A,{className:"h-4 w-4 text-primary mr-2"}),e.name]})}),(0,s.jsx)(l.nA,{children:e.type}),(0,s.jsx)(l.nA,{children:e.size}),(0,s.jsx)(l.nA,{children:e.category}),(0,s.jsx)(l.nA,{children:e.date}),(0,s.jsx)(l.nA,{children:e.stakeholders.join(", ")}),(0,s.jsx)(l.nA,{children:e.lastModified}),(0,s.jsx)(l.nA,{className:"text-right",children:(0,s.jsxs)(i.rI,{children:[(0,s.jsx)(i.ty,{asChild:!0,children:(0,s.jsxs)(d.$,{variant:"ghost",className:"h-8 w-8 p-0",children:[(0,s.jsx)("span",{className:"sr-only",children:"Open menu"}),(0,s.jsx)(h.A,{className:"h-4 w-4"})]})}),(0,s.jsxs)(i.SQ,{align:"end",children:[(0,s.jsx)(i._2,{children:"View"}),(0,s.jsx)(i._2,{children:"Download"}),(0,s.jsx)(i._2,{children:"Rename"}),(0,s.jsx)(i._2,{children:"Move"}),(0,s.jsx)(i.mB,{}),(0,s.jsx)(i._2,{className:"text-destructive",children:"Delete"})]})]})})]},e.id))})]})})]})]}):(0,s.jsx)("div",{children:"Loading..."})}},4085:(e,t,a)=>{"use strict";a.d(t,{$:()=>o});var s=a(5155),r=a(2115),d=a(2317),n=a(652),l=a(9602);let i=(0,n.F)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"underline-offset-4 hover:underline text-primary"},size:{default:"h-10 py-2 px-4",sm:"h-9 px-3 rounded-md",lg:"h-11 px-8 rounded-md"}},defaultVariants:{variant:"default",size:"default"}}),o=r.forwardRef((e,t)=>{let{className:a,variant:r,size:n,asChild:o=!1,...c}=e,m=o?d.DX:"button";return(0,s.jsx)(m,{className:(0,l.cn)(i({variant:r,size:n,className:a})),ref:t,...c})});o.displayName="Button"},750:(e,t,a)=>{"use strict";a.d(t,{SQ:()=>f,_2:()=>u,mB:()=>p,rI:()=>c,ty:()=>m});var s=a(5155),r=a(2115),d=a(937),n=a(6967),l=a(8867),i=a(3565),o=a(9602);let c=d.bL,m=d.l9;d.YJ,d.ZL,d.Pb,d.z6,r.forwardRef((e,t)=>{let{className:a,inset:r,children:l,...i}=e;return(0,s.jsxs)(d.ZP,{ref:t,className:(0,o.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",r&&"pl-8",a),...i,children:[l,(0,s.jsx)(n.A,{className:"ml-auto h-4 w-4"})]})}).displayName=d.ZP.displayName,r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(d.G5,{ref:t,className:(0,o.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...r})}).displayName=d.G5.displayName;let f=r.forwardRef((e,t)=>{let{className:a,sideOffset:r=4,...n}=e;return(0,s.jsx)(d.ZL,{children:(0,s.jsx)(d.UC,{ref:t,sideOffset:r,className:(0,o.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...n})})});f.displayName=d.UC.displayName;let u=r.forwardRef((e,t)=>{let{className:a,inset:r,...n}=e;return(0,s.jsx)(d.q7,{ref:t,className:(0,o.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r&&"pl-8",a),...n})});u.displayName=d.q7.displayName,r.forwardRef((e,t)=>{let{className:a,children:r,checked:n,...i}=e;return(0,s.jsxs)(d.H_,{ref:t,className:(0,o.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),checked:n,...i,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(d.VF,{children:(0,s.jsx)(l.A,{className:"h-4 w-4"})})}),r]})}).displayName=d.H_.displayName,r.forwardRef((e,t)=>{let{className:a,children:r,...n}=e;return(0,s.jsxs)(d.hN,{ref:t,className:(0,o.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),...n,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(d.VF,{children:(0,s.jsx)(i.A,{className:"h-2 w-2 fill-current"})})}),r]})}).displayName=d.hN.displayName,r.forwardRef((e,t)=>{let{className:a,inset:r,...n}=e;return(0,s.jsx)(d.JU,{ref:t,className:(0,o.cn)("px-2 py-1.5 text-sm font-semibold",r&&"pl-8",a),...n})}).displayName=d.JU.displayName;let p=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(d.wv,{ref:t,className:(0,o.cn)("-mx-1 my-1 h-px bg-muted",a),...r})});p.displayName=d.wv.displayName},2336:(e,t,a)=>{"use strict";a.d(t,{p:()=>n});var s=a(5155),r=a(2115),d=a(9602);let n=r.forwardRef((e,t)=>{let{className:a,type:r,...n}=e;return(0,s.jsx)("input",{type:r,className:(0,d.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),ref:t,...n})});n.displayName="Input"},2079:(e,t,a)=>{"use strict";a.d(t,{A0:()=>l,BF:()=>i,Hj:()=>o,XI:()=>n,nA:()=>m,nd:()=>c});var s=a(5155),r=a(2115),d=a(9602);let n=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{className:"w-full overflow-auto",children:(0,s.jsx)("table",{ref:t,className:(0,d.cn)("w-full caption-bottom text-sm",a),...r})})});n.displayName="Table";let l=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("thead",{ref:t,className:(0,d.cn)("[&_tr]:border-b",a),...r})});l.displayName="TableHeader";let i=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("tbody",{ref:t,className:(0,d.cn)("[&_tr:last-child]:border-0",a),...r})});i.displayName="TableBody",r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("tfoot",{ref:t,className:(0,d.cn)("bg-primary font-medium text-primary-foreground",a),...r})}).displayName="TableFooter";let o=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("tr",{ref:t,className:(0,d.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",a),...r})});o.displayName="TableRow";let c=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("th",{ref:t,className:(0,d.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",a),...r})});c.displayName="TableHead";let m=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("td",{ref:t,className:(0,d.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",a),...r})});m.displayName="TableCell",r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("caption",{ref:t,className:(0,d.cn)("mt-4 text-sm text-muted-foreground",a),...r})}).displayName="TableCaption"},9602:(e,t,a)=>{"use strict";a.d(t,{cn:()=>d});var s=a(3463),r=a(9795);function d(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.QP)((0,s.$)(t))}},1719:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(7401).A)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},8684:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(7401).A)("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]])}},e=>{var t=t=>e(e.s=t);e.O(0,[41,639,405,210,775,441,517,358],()=>t(2687)),_N_E=e.O()}]);