(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[350],{9237:function(e,t,s){Promise.resolve().then(s.bind(s,7692))},7692:function(e,t,s){"use strict";s.r(t);var a=s(7437),r=s(2265),l=s(4086),o=s(9584),n=s(4033);t.default=()=>{let e=(0,n.useRouter)(),[t,s]=(0,r.useState)(""),[d,i]=(0,r.useState)(""),[c,u]=(0,r.useState)(""),[m,x]=(0,r.useState)(""),[b,f]=(0,r.useState)(null),[h,p]=(0,r.useState)(null),j=async a=>{a.preventDefault();try{let a=(0,l.ad)(),r=(0,o.cF)(),n=await (0,l.ET)((0,l.hJ)(a,"disasterReports"),{name:t,location:d,title:c,description:m});if(b){let e=(0,o.iH)(r,"images/".concat(n.id));await (0,o.KV)(e,b)}if(h){let e=(0,o.iH)(r,"videos/".concat(n.id));await (0,o.KV)(e,h)}s(""),i(""),u(""),x(""),f(null),p(null),console.log("Disaster report submitted successfully!"),e.push("/disaster-alerts")}catch(e){console.error("Error submitting disaster report:",e)}};return(0,a.jsx)("div",{className:"flex items-center justify-center p-12",children:(0,a.jsxs)("div",{className:"mx-auto w-full max-w-[550px] bg-white",children:[(0,a.jsx)("h2",{className:"mb-3 text-center block text-2xl font-bold text-[#07074D]",children:"Disaster Report Form"}),(0,a.jsxs)("form",{className:"py-6 px-9",onSubmit:j,children:[(0,a.jsx)("div",{className:"mb-5",children:(0,a.jsxs)("label",{className:"mb-3 block text-base font-medium text-[#07074D]",children:["Reporter name:",(0,a.jsx)("input",{required:!0,className:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md",type:"text",value:t,onChange:e=>s(e.target.value)})]})}),(0,a.jsx)("div",{className:"mb-5",children:(0,a.jsxs)("label",{className:"mb-3 block text-base font-medium text-[#07074D]",children:["Location:",(0,a.jsx)("input",{required:!0,className:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md",type:"text",value:d,onChange:e=>i(e.target.value)})]})}),(0,a.jsx)("div",{className:"mb-5",children:(0,a.jsxs)("label",{className:"mb-3 block text-base font-medium text-[#07074D]",children:["Title:",(0,a.jsx)("input",{required:!0,className:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md",type:"text",value:c,onChange:e=>u(e.target.value)})]})}),(0,a.jsx)("div",{className:"mb-5",children:(0,a.jsxs)("label",{className:"mb-3 block text-base font-medium text-[#07074D]",children:["Description:",(0,a.jsx)("textarea",{required:!0,className:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md",value:m,onChange:e=>x(e.target.value)})]})}),(0,a.jsx)("div",{className:"pt-4 mb-6",children:(0,a.jsxs)("label",{className:"mb-5 block text-xl font-semibold text-[#07074D]",children:["Image:",(0,a.jsx)("input",{required:!0,className:" flex min-h-[20px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-4 text-center",type:"file",accept:"image/*",onChange:e=>{let t=e.target.files[0];f(t)}})]})}),(0,a.jsx)("div",{className:"pt-4 mb-6",children:(0,a.jsxs)("label",{className:"mb-5 block text-xl font-semibold text-[#07074D]",children:["Video:",(0,a.jsx)("input",{className:"flex min-h-[20px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-4 text-center",type:"file",accept:"video/*",onChange:e=>{let t=e.target.files[0];p(t)}})]})}),(0,a.jsx)("button",{className:"hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none",type:"submit",children:"Submit Report"})]})]})})}},4033:function(e,t,s){e.exports=s(8165)}},function(e){e.O(0,[358,234,584,971,596,744],function(){return e(e.s=9237)}),_N_E=e.O()}]);