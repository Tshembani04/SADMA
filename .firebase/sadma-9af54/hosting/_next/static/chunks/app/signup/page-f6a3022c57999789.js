(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{1894:function(e,t,s){Promise.resolve().then(s.bind(s,2604))},30:function(e,t,s){"use strict";s.d(t,{I8:function(){return c},db:function(){return i}}),s(7437);var r=s(994),a=s(3085),l=s(4086),o=s(9584);let n=(0,r.ZF)({apiKey:"AIzaSyB_XSAa2t8XHIM9TU4r944x7ivMS7zQNMo",authDomain:"sadma-9af54.firebaseapp.com",projectId:"sadma-9af54",storageBucket:"sadma-9af54.appspot.com",messagingSenderId:"403466487270",appId:"1:403466487270:web:e9198c802dbcae37030227",measurementId:"G-G6T7Z4XQPT"}),c=(0,a.v0)(n),i=(0,l.ad)(n);(0,o.cF)(n)},2604:function(e,t,s){"use strict";s.r(t);var r=s(7437),a=s(2265),l=s(3085),o=s(30),n=s(4086),c=s(171);s(6518);var i=s(1396),d=s.n(i);t.default=()=>{let e=(0,a.useRef)(),t=(0,a.useRef)(),s=async s=>{s.preventDefault();let r=e.current.value,a=t.current.value;try{let e=await (0,l.Xb)(o.I8,r,a),t=e.user,s=(0,o.db)(),i=(0,n.hJ)(s,"users");console.log("Users collection:",i),(await i.get()).exists()||(await i.doc(),console.log("Users collection created")),await i.doc(t.uid).set({email:t.email}),console.log("This is the user's data",t),c.Am.success("Account created successfully!",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}catch(t){t.code;let e=t.message;c.Am.error(e,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}};return(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("h1",{className:"flex justify-center pt-32 text-3xl items-center font-black text-center text-[#8E7FFE] md:text-5xl",children:"South African Disaster Management"}),(0,r.jsx)("div",{className:"flex items-center w-screen h-screen px-2 overflow-hidden",children:(0,r.jsxs)("div",{className:"relative flex flex-col px-5 py-10 space-y-5 bg-white rounded-lg shadow-xl w-96 sm:mx-auto",children:[(0,r.jsx)("div",{className:"absolute w-5/6 h-full -translate-x-1/2 rounded-lg bg-[#8E7FFE] -z-10 top-4 left-1/2 sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0"}),(0,r.jsx)("div",{className:"mx-auto mb-2 space-y-3",children:(0,r.jsx)("h1",{className:"text-3xl font-bold text-center text-black",children:"Create an account"})}),(0,r.jsxs)("form",{onSubmit:s,children:[(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"relative w-full mt-2",children:[(0,r.jsx)("input",{type:"email",ref:e,className:"border-1 peer block w-full appearance-none rounded-lg border  bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-lightGreen focus:outline-none focus:ring-0",placeholder:" "}),(0,r.jsx)("label",{className:"origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300",children:"Enter Your Email"})]})}),(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"relative w-full mt-2",children:[(0,r.jsx)("input",{type:"password",ref:t,className:"border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-lightGreen focus:outline-none focus:ring-0",placeholder:" "}),(0,r.jsx)("label",{className:"origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300",children:"Enter Your Password"})]})}),(0,r.jsx)("div",{className:"flex items-center w-full mt-4",children:(0,r.jsx)("button",{type:"submit",className:"inline-block py-3 font-bold text-white transition-all duration-300 rounded-lg shrink-0 w-36 hover:bg-[#F2E7E7] bg-[#8E7FFE]",children:"Sign Up"})})]}),(0,r.jsxs)("p",{className:"text-center text-black",children:["Already have an account?",(0,r.jsx)(d(),{href:"login",className:"ml-2 font-semibold whitespace-nowrap text-[#8E7FFE] hover:underline",children:"Login"})]})]})}),(0,r.jsx)(c.Ix,{})]})}}},function(e){e.O(0,[358,214,234,584,217,971,596,744],function(){return e(e.s=1894)}),_N_E=e.O()}]);