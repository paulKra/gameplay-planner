(()=>{var e={};e.id=1931,e.ids=[1931],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},65576:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>s.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>x,tree:()=>c});var r=n(67096),i=n(16132),a=n(37284),s=n.n(a),o=n(32564),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);n.d(t,l);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,72729)),"C:\\Users\\denys\\Documents\\GitHub\\gameplay-planner\\src\\app\\page.js"],metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(n.bind(n,43537)),"C:\\Users\\denys\\Documents\\GitHub\\gameplay-planner\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(n.t.bind(n,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\denys\\Documents\\GitHub\\gameplay-planner\\src\\app\\page.js"],u="/page",p={require:n,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},8715:(e,t,n)=>{Promise.resolve().then(n.bind(n,61678))},61678:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Home});var r=n(30784),i=n(9885),a=n(52451),s=n.n(a),o=n(57114),l=n(13937);n(20185);var c=n(27428),d=n(35877),u=n.n(d),p=n(36648),x=n(65438);let g={src:"/_next/static/media/coming_soon.25da4b92.png",height:1085,width:1927,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAhklEQVR42mPQm7BKcOIa0YmrGSatAyLz5pmBpT3R85YwBC7uSFzYb7pwZuOcZvs5MxiWZoRPNfdYrM8QOlkytzkxeH7Nlm7vnP7SzM6w1FZl68UKDMnRWokh+onlDtnZ7hkJzuWhTinhmmGxagyy8hzGKuw+7AyBcgwhquzu6kxWqjwaKpwAPEEqm/af2gYAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5};function Home(){let[e,t]=u()("userData",c),n=(0,o.useRouter)(),a=(0,i.useRef)(null),handleFileUpload=async e=>{let r=e.target.files[0],i=new FileReader;i.onload=e=>{let r=new Uint8Array(e.target.result),i=p.ZP.inflate(r),a=new TextDecoder("utf-8"),s=a.decode(i),o=s.indexOf("{"),l=s.lastIndexOf("}")+1,c=s.slice(o,l),d=c.indexOf("Infinity");for(;d>0;)d=(c=c.replaceAll("Infinity","-999")).indexOf("Infinity");try{let e=JSON.parse(c);return t(e),console.log(e),console.log("trying to redirect"),n.push("/page_selection")}catch(e){console.error("Invalid JSON:",e)}},i.readAsArrayBuffer(r)},[d,m]=(0,i.useState)(!1),h=(0,i.useRef)(!1),f=(0,i.useRef)(!1),y=(0,i.useRef)(!1),v=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let callback=t=>{switch(t.code){case"KeyA":h.current=!0;break;case"KeyS":f.current=!0;break;case"KeyD":y.current=!0}if(h.current&&f.current&&y.current&&!v.current){console.log("flush file"),v.current=!0;let t=JSON.stringify(e,null,2),n=new Blob([t],{type:"application/json"}),r=URL.createObjectURL(n),i=document.createElement("a");i.href=r,i.download="fapi_save_planner.txt",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)}},releaseCallback=e=>{switch(e.code){case"KeyA":h.current=!1;break;case"KeyS":f.current=!1;break;case"KeyD":y.current=!1}h.current||f.current||y.current||!v.current||(v.current=!1)};return document.addEventListener("keydown",callback),document.addEventListener("keyup",releaseCallback),()=>{document.removeEventListener("keydown",callback),document.removeEventListener("keyup",releaseCallback)}},[e]);let[b,A]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{A(l.isMobile)},[l.isMobile]),(0,r.jsxs)("div",{style:{display:"flex",flex:"1",backgroundColor:"rgba(0,0,0,1)",position:"relative",paddingLeft:"6px",alignItems:"center",justifyContent:"center"},children:[r.jsx(s(),{style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",zIndex:"1",opacity:"0.3"},alt:"fullscreen picture of a Farmer Against Potatoes Idle game",src:g,priority:!0,unoptimized:!0}),(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:b?"-20vh":"calc(0px - 50vh)",zIndex:"2"},children:[(0,r.jsxs)(x.Z,{forceOpen:d,setForceOpen:m,forceXPlacement:"right",tooltip:(0,r.jsxs)("div",{onMouseEnter:e=>{d||m(!0)},onMouseLeave:e=>{d&&m(!1)},children:[r.jsx("h3",{style:{marginTop:"6px",marginBottom:"12px"},children:"Your save file can be found at:"}),(0,r.jsxs)("div",{style:{display:"flex"},children:[r.jsx("div",{style:{fontWeight:"bold",marginRight:"6px"},children:"PC:"}),(0,r.jsxs)("div",{children:[r.jsx("div",{children:"%LOCALAPPDATA%Low\\Oni Gaming\\Farmer Against Potatoes Idle\\fapi-save.txt"}),r.jsx("div",{style:{textAlign:"center",fontWeight:"bold"},children:"or you can copy:"}),r.jsx("div",{children:"%LOCALAPPDATA%Low\\Oni Gaming\\Farmer Against Potatoes Idle"})]})]}),(0,r.jsxs)("div",{style:{display:"flex",marginTop:"12px"},children:[r.jsx("div",{style:{fontWeight:"bold",marginRight:"6px"},children:"Mobile:"}),r.jsx("div",{children:"/storage/emulated/0/Android/data/com.oninou.FAPI/files/fapi-save.txt"})]})]}),children:[r.jsx("div",{className:"mediumImportantText blackTextStroke",style:{margin:"0 0 0 0",fontSize:"60px",fontWeight:"bold"},children:"Upload save file to view calculator"}),r.jsx("div",{onMouseEnter:e=>{d||m(!0)},onMouseLeave:e=>{d&&m(!1)},style:{display:"flex",alignItems:"center"},children:r.jsx("div",{style:{position:"relative",height:"36px",width:"36px",marginLeft:"6px",marginTop:"6px"},children:r.jsx(s(),{alt:"on hover I in a cirlce icon, shows more information on hover",src:"/images/icons/info_lightgray.svg",fill:!0})})})]}),r.jsx("div",{className:"mediumImportantText blackTextStroke",style:{margin:"0 0 0 0",fontSize:"35px",fontWeight:"bold",textStroke:""},children:"Warning: contains spoilers!"}),(0,r.jsxs)("div",{style:{marginTop:"16px"},children:[r.jsx("input",{style:{display:"none"},id:"chooseFileButton","aria-label":"save file upload button",type:"file",title:"",accept:".txt",onChange:handleFileUpload}),r.jsx("button",{style:{fontSize:"1.3rem"},onClick:e=>(chooseFileButton.click(),!1),children:"Choose File"})]}),(0,r.jsxs)("div",{style:{marginTop:"16px"},children:[r.jsx("input",{type:"string",id:"stringSave",ref:a,placeholder:"Paste save string here",style:{marginRight:"12px"}}),r.jsx("button",{style:{fontSize:"1.3rem"},onClick:async e=>{let r=a.current.value;try{r=atob(r);let e=r.indexOf("{"),i=r.lastIndexOf("}")+1,a=r.slice(e,i),s=a.indexOf("Infinity");for(;s>0;)s=(a=a.replaceAll("Infinity","-999")).indexOf("Infinity");try{let e=JSON.parse(a);return t(e),console.log(e),console.log("trying to redirect"),n.push("/page_selection")}catch(e){console.error("Invalid JSON:",e)}}catch(e){console.log(e),console.log("caught error reading string save")}},children:"Load"})]})]})]})}n(3779).ZP.initialize([{trackingId:"G-GGLPK02VH8"}])},72729:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Page});var r=n(4656),i=n(95153);let a=(0,i.createProxy)(String.raw`C:\Users\denys\Documents\GitHub\gameplay-planner\src\app\page_content.jsx`),{__esModule:s,$$typeof:o}=a,l=a.default;function Page(){return r.jsx(l,{})}n(32298)},20185:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),n=t.X(0,[1843,6250,5877,7419,2298,7811,755,5340,5438],()=>__webpack_exec__(65576));module.exports=n})();