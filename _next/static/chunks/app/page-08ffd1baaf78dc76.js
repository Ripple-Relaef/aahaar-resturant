(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2417:(e,t,s)=>{Promise.resolve().then(s.bind(s,853))},853:(e,t,s)=>{"use strict";s.d(t,{default:()=>x});var a=s(5155),l=s(2651),c=s(5565),r=s(7396),n=s(2115),i=s(1536);let d={Drinks:(0,a.jsx)(i.sFP,{className:"text-[#ff8c00] w-6 h-6"}),Desserts:(0,a.jsx)(i.jOg,{className:"text-[#ff8c00] w-6 h-6"}),Pizza:(0,a.jsx)(i.SOl,{className:"text-[#ff8c00] w-6 h-6"}),Burgers:(0,a.jsx)(i.Hcp,{className:"text-[#ff8c00] w-6 h-6"})},x=()=>{let[e,t]=(0,n.useState)(null),[s,i]=(0,n.useState)("All");if((0,n.useEffect)(()=>{(async()=>{try{let e=await l.A.get("https://raw.githubusercontent.com/Ripple-Relaef/restaurant-data/refs/heads/main/aahaar.json");t(e.data.categories)}catch(e){console.error("Error fetching menu data:",e)}})()},[]),!e)return(0,a.jsx)("div",{className:"text-center text-lg mt-10",children:"Loading menu..."});let x="All"===s?e:{[s]:e[s]};return(0,a.jsxs)("div",{className:"",children:[(0,a.jsxs)("div",{className:" p-4 font-sans text-gray-800",children:[(0,a.jsx)("h1",{className:"text-2xl font-bold text-center text-[#ff6347] mb-8",children:"Aahaar Restaurant Menu"}),(0,a.jsxs)("div",{className:"flex overflow-x-auto gap-3 mb-6",children:[(0,a.jsxs)("button",{className:"flex flex-col items-center p-2 ".concat("All"===s?"text-[#ff8c00]":"text-gray-600"),onClick:()=>i("All"),children:[(0,a.jsx)("div",{className:"bg-[#ff8c00] text-white rounded-full p-3",children:(0,a.jsx)("div",{className:" relative w-6 h-6",children:(0,a.jsx)(c.default,{src:"/foodicon.svg",layout:"fill",objectFit:"contain",alt:"Food Icon"})})}),(0,a.jsx)("span",{className:"text-sm mt-2",children:"All"})]}),Object.keys(e).map(e=>(0,a.jsxs)("button",{className:"flex flex-col items-center p-2 ".concat(s===e?"text-[#ff8c00]":"text-gray-600"),onClick:()=>i(e),children:[(0,a.jsx)("div",{className:"bg-[#ff8c00] text-white rounded-full p-3",children:d[e]||(0,a.jsx)("div",{className:" relative w-6 h-6",children:(0,a.jsx)(c.default,{src:"/foodicon.svg",layout:"fill",objectFit:"contain",alt:"Food Icon"})})}),(0,a.jsx)("span",{className:"text-sm mt-2",children:e})]},e))]}),Object.entries(x).map(e=>{let[t,s]=e;return(0,a.jsxs)("div",{className:"mb-10",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 mb-4 justify-between  border-b border-black pb-2",children:[(0,a.jsx)("h2",{className:"text-xl font-bold text-[#ff8c00]",children:t}),(0,a.jsxs)("p",{className:"text-sm text-gray-600",children:[Object.keys(s).length," items"]})]}),(0,a.jsx)("div",{className:"space-y-4",children:Object.entries(s).map(e=>{let[t,s]=e;return(0,a.jsxs)("div",{className:"flex justify-between items-start border-b border-dotted pb-2",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-lg font-semibold",children:t}),(0,a.jsx)("p",{className:"text-sm text-gray-600",children:s.description})]}),(0,a.jsxs)("p",{className:"text-[#ff6347] font-bold",children:[s.price,"/-"]})]},t)})})]},t)})]}),(0,a.jsx)("div",{className:"text-center bg-[#ff8c00] text-white p-2 w-screen fixed bottom-0",children:(0,a.jsxs)("p",{className:"text-sm",children:["Designed and custom-built for Aahaar by ",(0,a.jsx)(r.default,{href:"https://ripple.relaef.com",className:"underline font-medium",children:"Ripple"})," — a step towards the digital wave."]})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[711,190,441,517,358],()=>t(2417)),_N_E=e.O()}]);