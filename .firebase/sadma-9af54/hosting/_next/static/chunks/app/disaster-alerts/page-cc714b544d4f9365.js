(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[367],{5283:function(e,s,t){Promise.resolve().then(t.bind(t,3880))},3880:function(e,s,t){"use strict";t.r(s);var r=t(7437),a=t(2265),i=t(4086),c=t(9584);s.default=()=>{let[e,s]=(0,a.useState)([]);return(0,a.useEffect)(()=>{let e=async()=>{try{let e=(0,i.ad)(),r=await (0,i.PL)((0,i.hJ)(e,"disasterReports")),a=[];for(let e of r.docs){let s=e.data(),r=await t(e.id);a.push({id:e.id,...s,imageUrl:r})}s(a)}catch(e){console.error("Error fetching disaster reports:",e)}},t=async e=>{try{let s=(0,c.cF)(),t=await (0,c.Jt)((0,c.iH)(s,"images/".concat(e)));return t}catch(e){return console.error("Error fetching image URL:",e),null}};e()},[]),(0,r.jsxs)("div",{className:"p-8",children:[(0,r.jsx)("h1",{className:"mb-6 text-2xl font-bold",children:"Disaster Reports"}),(0,r.jsx)("div",{className:"grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3",children:e.map(e=>(0,r.jsxs)("div",{className:"p-4 bg-white rounded-md shadow-md",children:[(0,r.jsx)("h2",{className:"mb-2 text-lg font-semibold",children:e.title}),(0,r.jsx)("p",{className:"mb-4 text-gray-600",children:e.description}),e.imageUrl&&(0,r.jsx)("img",{src:e.imageUrl,alt:"Disaster",className:"object-cover w-full h-32 mb-4"}),(0,r.jsxs)("p",{className:"text-sm text-gray-500",children:["Location: ",e.location]})]},e.id))})]})}}},function(e){e.O(0,[358,234,584,971,596,744],function(){return e(e.s=5283)}),_N_E=e.O()}]);