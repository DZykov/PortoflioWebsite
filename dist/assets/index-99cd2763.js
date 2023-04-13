import{j as n,a as e,F as g,T as j}from"./react-tilt-75413daf.js";import{r as c,R as P}from"./react-95182015.js";import{a as D}from"./react-dom-e1a19fef.js";import{L as A,B as F}from"./react-router-dom-4e549bcb.js";import{u as E,H as L,C as f,O as w,P as x,a as I,b as M,F as O,D as $,c as z,d as H,e as J}from"./@react-three-66dd53e8.js";import{i as W}from"./maath-01ed86e0.js";import{m}from"./framer-motion-ad79739b.js";import{d as S}from"./react-vertical-timeline-component-2f3e2fd2.js";import{e as B}from"./@emailjs-a704afdc.js";import"./@chevrotain-3c9a3002.js";import"./scheduler-04ce0582.js";import"./react-router-07520ae5.js";import"./@remix-run-8e4687c3.js";import"./@babel-34ca84e8.js";import"./three-891170d2.js";import"./react-use-measure-771f8d87.js";import"./debounce-ae8cc837.js";import"./its-fine-281b95d4.js";import"./react-reconciler-76ea79ac.js";import"./zustand-8e431a89.js";import"./three-stdlib-02a433b1.js";import"./react-merge-refs-239dbb3c.js";import"./suspend-react-00b64780.js";import"./prop-types-4d501b15.js";import"./classnames-7e4e529b.js";import"./react-intersection-observer-a0c2442b.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=o(s);fetch(s.href,l)}})();const v=()=>{const{progress:t}=E();return n(L,{as:"div",center:!0,style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[e("span",{className:"canvas-loader"}),n("p",{style:{fontSize:14,color:"#F1F1F1",fontWeight:800,marginTop:40},children:[t.toFixed(2),"%"]})]})},R=()=>{const t=I("./planet/scene.gltf");return e("primitive",{object:t.scene,scale:2.5,"position-y":0,"rotation-y":0})},Z=()=>e(f,{shadows:!0,frameloop:"demand",dpr:[1,2],gl:{preserveDrawingBuffer:!0},camera:{fov:45,near:.1,far:200,position:[-4,3,6]},children:n(c.Suspense,{fallback:e(v,{}),children:[e(w,{autoRotate:!0,enableZoom:!1,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/2}),e(R,{}),e(x,{all:!0})]})}),q=t=>{const[a]=M([t.imgUrl]);return n(O,{speed:1.75,rotationIntensity:1,floatIntensity:2,children:[e("ambientLight",{intensity:.2}),e("directionalLight",{position:[0,1,.05]}),n("mesh",{castShadow:!0,receiveShadow:!0,scale:2.75,children:[e("icosahedronGeometry",{args:[1,1]}),e("meshStandardMaterial",{color:"#fff8eb",polygonOffset:!0,polygonOffsetFactor:-5,flatShading:!0}),e($,{position:[0,0,1],rotation:[2*Math.PI,0,6.25],scale:1,map:a,flatShading:!0})]})]})},V=({icon:t})=>n(f,{frameloop:"demand",dpr:[2,4],gl:{preserveDrawingBuffer:!0},children:[n(c.Suspense,{fallback:e(v,{}),children:[e(w,{enableZoom:!1}),e(q,{imgUrl:t})]}),e(x,{all:!0})]}),G=({isMobile:t})=>{const a=I("/desktop/scene.gltf");return n("mesh",{children:[e("hemisphereLight",{intensity:.15,groundColor:"black"}),e("spotLight",{position:[-20,50,10],angle:.12,penumbra:1,intensity:1,castShadow:!0,"shadow-mapSize":1024}),e("pointLight",{intensity:1}),e("primitive",{object:a.scene,scale:t?.7:.75,position:t?[0,-3,-2.2]:[0,-3.25,-1.5],rotation:[-.01,-.2,-.1]})]})},U=()=>{const[t,a]=c.useState(!1);return c.useEffect(()=>{const o=window.matchMedia("(max-width: 500px)");a(o.matches);const i=s=>{a(s.matches)};return o.addEventListener("change",i),()=>{o.removeEventListener("change",i)}},[]),n(f,{frameloop:"demand",shadows:!0,dpr:[1,2],camera:{position:[20,3,5],fov:25},gl:{preserveDrawingBuffer:!0},children:[n(c.Suspense,{fallback:e(v,{}),children:[e(w,{enableZoom:!1,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/2}),e(G,{isMobile:t})]}),e(x,{all:!0})]})},Y=t=>{const a=c.useRef(),[o]=c.useState(()=>W(new Float32Array(5e3),{radius:1.2}));return z((i,s)=>{a.current.rotation.x-=s/10,a.current.rotation.y-=s/15}),e("group",{rotation:[0,0,Math.PI/4],children:e(H,{ref:a,positions:o,stride:3,frustumCulled:!0,...t,children:e(J,{transparent:!0,color:"#f272c8",size:.002,sizeAttenuation:!0,depthWrite:!1})})})},Q=()=>e("div",{className:"w-full h-auto absolute inset-0 z-[-1]",children:n(f,{camera:{position:[0,0,1]},children:[e(c.Suspense,{fallback:null,children:e(Y,{})}),e(x,{all:!0})]})}),d={paddingX:"sm:px-16 px-6",paddingY:"sm:py-16 py-6",padding:"sm:px-16 px-6 sm:py-16 py-10",heroHeadText:"font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",heroSubText:"text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",sectionHeadText:"text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",sectionSubText:"sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider"},X=()=>n("section",{className:"relative w-full h-screen mx-auto",children:[n("div",{className:`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${d.paddingX} flex flex-row items-start gap-5`,children:[n("div",{className:"flex flex-col justify-center items-center mt-5",children:[e("div",{className:"w-5 h-5 rounded-full bg-[#915EFF]"}),e("div",{className:"w-1 sm:h-80 h-40 violet-gradient"})]}),n("div",{children:[n("h1",{className:`${d.heroHeadText} text-white`,children:["Hi, I'm ",e("span",{className:"text-[#915EFF]",children:"Demid"})]}),n("p",{className:`${d.heroSubText} mt-2 text-white-100`,children:["I am a full stack developer with incline",e("br",{className:"sm:block hidden"}),"to the backend technologies."]})]})]}),e(U,{}),e("div",{className:"absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center",children:e("a",{href:"#about",children:e("div",{className:"w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2",children:e(m.div,{animate:{y:[0,24,0]},transition:{duration:1.5,repeat:1/0,repeatType:"loop"},className:"w-3 h-3 rounded-full bg-secondary mb-1"})})})})]}),K="/assets/backend-565fc01f.png",ee="/assets/close-ad0e0ca6.svg",te="/assets/creator-dbbffaec.png",ae="/assets/logo-dfe46b1c.svg",ne="/assets/menu-242d80a8.svg",se="/assets/mobile-896ef2f5.png",oe="/assets/web-0d05165f.png",ie="/assets/live-21f19a8c.png",re="/assets/chrono-f5c89c8e.png",le="/assets/cmd_todos-0396de2b.png",ce="/assets/genalg-c8182794.png",de="/assets/InfiniteFall-cab178b7.jpeg",me="/assets/javaconsole-9c353d2d.png",pe="/assets/pyshell_va-bd0a4fe7.png",he="/assets/tag_quality-1a9e36ee.jpeg",ue="/assets/webchat-082c3fa5.png",ge="/assets/webshooter-d336b6d6.png",fe="/assets/django-955df1e2.png",xe="/assets/flask-056015a5.png",be="/assets/nodejs-d83eb6dd.png",ye="/assets/flame-2422712d.png",we="/assets/flutter-61cd82b5.png",ve="/assets/reactjs-966214a8.png",ke="/assets/c-8b7bee0b.png",Ne="/assets/c__-6fcc3512.png",je="/assets/dart-3950c0fd.png",Ie="/assets/java-a98f28a1.png",Se="/assets/js-d89bd9b7.png",_e="/assets/python-48c3c0a2.png",Ce="/assets/do-c0abb9cc.png",Te="/assets/firebase-86079fc8.png",_="/assets/github-3b4e1609.png",Pe="/assets/nginx-7284b987.png",De="/assets/postresql-f811ed72.png",Ae="/assets/terminal-75515ade.png",Fe="/assets/ac-d1ed601c.png",Ee="/assets/mentor-0906a57f.png",Le="/assets/uoft-8af6d0b8.png",k=[{id:"about",title:"About"},{id:"experience",title:"Experience"},{id:"tech",title:"Skills"},{id:"works",title:"Projects"},{id:"contact",title:"Contact"}],Me=[{title:"Backend Developer",icon:K},{title:"Web Developer",icon:oe},{title:"Flutter Developer",icon:se},{title:"Game developer",icon:te}],Oe=[{name:"C",description:"I have been using C mainly for kernel manipulations, synchonization, and parallel programming. I have enough knowledge to build complex system/designs.",icon:ke},{name:"C++",description:"I don't use C++ as my main programming language. I use C++ only for robotics and robot simulations.",icon:Ne},{name:"Java",description:"Java is my first programming language that I learned proficiently. I use Java for AI and app development.",icon:Ie},{name:"Python",description:"Python is my second proficient language, but the most used one. I use Puthon for backend development, analysis, and app development.",icon:_e},{name:"Dart",description:"I have started using Dart one year ago. I use Dart only for frontend development: web, iOS, Android, etc.",icon:je},{name:"JavaScript",description:"I have started using Javascript two years ago. I use JS for web development and small servers.",icon:Se},{name:"Flask",description:"Flask is my main framework for backend development. I can build complex APIs and real times servers.",icon:xe},{name:"Django",description:"I use Django only in large projects that require security, scability, or server-side rendering. I have sufficent knowledge to use it in production.",icon:fe},{name:"Node.js",description:"Node.js is my favorite backend framework for small projects or real-time data transfers. I use it quite alot for prototypes.",icon:be},{name:"Flutter",description:"Flutter is my main frontend framework. I can easily build web and mobiles app or create games.",icon:we},{name:"React.js",description:"I am quite new to React.js. However, I can easily build admirable user interfaces for web-applications and websites.",icon:ve},{name:"Flame",description:"Flame is an extension framework for Flutter. I use Flame to build web and mobile games. I love this framework for its simplicity and compatibility.",icon:ye},{name:"Nginx",description:"I am a strong user of Nginx. This is the only web server that use in production for web apps, servers, and different platforms.",icon:Pe},{name:"PostreSQL",description:"PostgreSQL is my favorite database management system. I use it almost every time as a data warehouse.",icon:De},{name:"Bash",description:"My main OS is Linux; thus, I am using Bash for almost 10 years. I use it to automate mechanial routines.",icon:Ae},{name:"DigitalOcean",description:"DigitalOcean is the cloud service provider that I know proficiently. I have deployed several large projects with DigitalOcean.",icon:Ce},{name:"Firebase",description:"Firebase is a nice tool in my arsenal that allows quickly develop prototypes of apps and platforms.",icon:Te},{name:"GitHub",description:"Well, it is hard to find someone who doesn't use GitHub. You can check all my projects here: github.com/DZykov .",icon:_}],$e=[{title:"Student",company_name:"Appleby College",icon:Fe,iconBg:"#383E56",date:"September 2015 - June 2018",points:["I was a student at borading school Appleby College.","Appleby College is a leading Canadian day and boarding school."]},{title:"Mentor",company_name:"Mentor Collective",icon:Ee,iconBg:"#383E56",date:"May 2018 - Jan 2020",points:["Helping other students to joing Canadian culture and society.","Providing mental help and assistance.","Providing help with courses."]},{title:"Student",company_name:"University of Toronot Mississauga",icon:Le,iconBg:"#E6DEDD",date:"September 2018 - June 2023",points:["I was a student at University of Toronto Mississauga campus.","I graduate with Honours Bachelor of Science: Computer Science, Phillosophy, and Mathematics."]}],ze=[{name:"Chrono",description:"Web-based platform that allows users to post blogs/articles to the platform itself and internet. This is a full scaled project: web app was made with flutter, website pages were made with Node.js, and backend API was made with Flask. DigitalOcean was used to deploy the whole architecture.",tags:[{name:"flask",color:"blue-text-gradient"},{name:"node.js",color:"green-text-gradient"},{name:"flutter",color:"pink-text-gradient"},{name:"postresql",color:"blue-text-gradient"},{name:"nginx",color:"green-text-gradient"},{name:"digitalocean",color:"pink-text-gradient"}],image:re,project_link:["https://app.chrono.pw","https://chrono.pw/demid_zykov"],source_code_link:"https://github.com/DZykov/Chrono_public"},{name:"IRC Web Chat",description:"Web application that allows users to create/join chat-rooms and text each other.",tags:[{name:"nodejs",color:"blue-text-gradient"},{name:"sql",color:"green-text-gradient"},{name:"css",color:"pink-text-gradient"}],image:ue,project_link:["https://webchat.zykov.xyz"],source_code_link:"https://github.com/DZykov/WebChat"},{name:"Life Evolution",description:"A visualization of Genetic Algorithm (Artificial Intelligence) that tries to create a creature that would survive in the provided model/world.",tags:[{name:"java",color:"blue-text-gradient"},{name:"ai",color:"green-text-gradient"},{name:"jwt",color:"pink-text-gradient"}],image:ce,project_link:[],source_code_link:"https://github.com/DZykov/java-gen-alg"},{name:"WebShooter Online",description:"A real-time game with multiplayer support.",tags:[{name:"node.js",color:"blue-text-gradient"},{name:"js",color:"green-text-gradient"},{name:"sockets",color:"pink-text-gradient"}],image:ge,project_link:["https://onlinegame.zykov.xyz"],source_code_link:"https://github.com/DZykov/MultiplayerWebGame"},{name:"Infinite Fall",description:"A game that supports all platforms: web, Android, iOS, linux, windows, etc.",tags:[{name:"flutter",color:"blue-text-gradient"},{name:"flame",color:"green-text-gradient"},{name:"game development",color:"pink-text-gradient"}],image:de,project_link:["https://webgame.zykov.xyz"],source_code_link:"https://github.com/DZykov/InfiniteFall"},{name:"Voice Assistant PyShell",description:"This is my personal take on terminal and voice assistant. VA is higly customazble and works outside of the box.",tags:[{name:"python",color:"blue-text-gradient"},{name:"voice assistant",color:"green-text-gradient"},{name:"shell",color:"pink-text-gradient"}],image:pe,project_link:[],source_code_link:"https://github.com/DZykov/PyShell"},{name:"TODO CLI",description:"CLI implementation of TODO app.",tags:[{name:"python",color:"blue-text-gradient"},{name:"json",color:"green-text-gradient"},{name:"todo",color:"pink-text-gradient"}],image:le,project_link:[],source_code_link:"https://github.com/DZykov/adventure-cli-todo"},{name:"Console",description:"Implementation of console/terminal in Java.",tags:[{name:"java",color:"blue-text-gradient"},{name:"console",color:"green-text-gradient"},{name:"shell",color:"pink-text-gradient"}],image:me,project_link:[],source_code_link:"https://github.com/DZykov/Java-console"},{name:"Tags quality",description:"The algorithm that sorts user's tags by user's interests. Morever, user may indicate how many new tags should be in the feed.",tags:[{name:"python",color:"blue-text-gradient"},{name:"big data",color:"green-text-gradient"},{name:"data science",color:"pink-text-gradient"}],image:he,project_link:[],source_code_link:"https://github.com/DZykov/Userteam"}],He=()=>{const[t,a]=c.useState(""),[o,i]=c.useState(!1),[s,l]=c.useState(!1);return c.useEffect(()=>{const r=()=>{window.scrollY>100?l(!0):l(!1)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]),e("nav",{className:`${d.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${s?"bg-primary":"bg-transparent"}`,children:n("div",{className:"w-full flex justify-between items-center max-w-7xl mx-auto",children:[n(A,{to:"/",className:"flex items-center gap-2",onClick:()=>{a(""),window.scrollTo(0,0)},children:[e("img",{src:ae,alt:"logo",className:"w-9 h-9 object-contain"}),n("p",{className:"text-white text-[18px] font-bold cursor-pointer flex ",children:["Demid Zykov  ",e("span",{className:"sm:block hidden",children:"Portfolio"})]})]}),e("ul",{className:"list-none hidden sm:flex flex-row gap-10",children:k.map(r=>e("li",{className:`${t===r.title?"text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`,onClick:()=>a(r.title),children:e("a",{href:`#${r.id}`,children:r.title})},r.id))}),n("div",{className:"sm:hidden flex flex-1 justify-end items-center",children:[e("img",{src:o?ee:ne,alt:"menu",className:"w-[28px] h-[28px] object-contain",onClick:()=>i(!o)}),e("div",{className:`${o?"flex":"hidden"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`,children:e("ul",{className:"list-none flex justify-end items-start flex-1 flex-col gap-4",children:k.map(r=>e("li",{className:`font-poppins font-medium cursor-pointer text-[16px] ${t===r.title?"text-white":"text-secondary"}`,onClick:()=>{i(!o),a(r.title)},children:e("a",{href:`#${r.id}`,children:r.title})},r.id))})})]})]})})},b=t=>({hidden:{y:-50,opacity:0},show:{y:0,opacity:1,transition:{type:"spring",duration:1.25,delay:t}}}),h=(t,a,o,i)=>({hidden:{x:t==="left"?100:t==="right"?-100:0,y:t==="up"?100:t==="down"?-100:0,opacity:0},show:{x:0,y:0,opacity:1,transition:{type:a,delay:o,duration:i,ease:"easeOut"}}}),N=(t,a,o,i)=>({hidden:{x:t==="left"?"-100%":t==="right"?"100%":0,y:t==="up"||t==="down"?"100%":0},show:{x:0,y:0,transition:{type:a,delay:o,duration:i,ease:"easeOut"}}}),Je=(t,a)=>({hidden:{},show:{transition:{staggerChildren:t,delayChildren:a||0}}}),u=(t,a)=>function(){return n(m.section,{variants:Je(),initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.25},className:`${d.padding} max-w-7xl mx-auto relative z-0`,children:[e("span",{className:"hash-span",id:a,children:" "}),e(t,{})]})},We=({index:t,title:a,icon:o})=>e(j,{className:"xs:w-[250px] w-full",children:e(m.div,{variants:h("right","spring",t*.5,.75),className:"w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card",children:n("div",{options:{max:45,scale:1,speed:450},className:"bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col",children:[e("img",{src:o,alt:"web-development",className:"w-16 h-16 object-contain"}),e("h3",{className:"text-white text-[20px] font-bold text-center",children:a})]})})}),Be=()=>n(g,{children:[n(m.div,{variants:b(),children:[e("p",{className:d.sectionSubText,children:"Introduction"}),e("h2",{className:d.sectionHeadText,children:"Overview."})]}),e(m.p,{variants:h("","",.1,1),className:"mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]",children:"I am a skilled software developer with experience in Python, Java, Dart, C/C++, JS and expertise in Flutter, Flame, React.js, Flask, Django, and Node.js frameworks. Additionaly, I am proficient in server development and arhitecture. I mainly use the combination of Nginx, DigitalOcean, and Ubuntu/Debian server. I am a quick learner and I can can work in a team to create efficient, scalable, and user-friendly solutions that solve real-world problems."}),e("div",{className:"mt-20 flex flex-wrap gap-10",children:Me.map((t,a)=>e(We,{index:a,...t},t.title))})]}),Re=u(Be,"about"),Ze=()=>{const[t,a]=c.useState("The balls are 3D and interactable! Click on any ball to get more information about technology and my relation to it.");function o(i){a(i)}return n(g,{children:[n(m.div,{variants:b(),children:[e("p",{className:`${d.sectionSubText} text-center`,children:"What I have mastered so far"}),e("h2",{className:`${d.sectionHeadText} text-center`,children:"My Skills."})]}),e(m.p,{variants:h("","",.1,1),className:"mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center content-center items-center mx-auto",children:t}),e("br",{}),e("div",{className:"flex flex-row flex-wrap justify-center gap-10",children:Oe.map(i=>e("div",{className:"w-28 h-28",onClick:s=>{o(i.description)},children:e(V,{icon:i.icon})},i.name))})]})},qe=u(Ze,"tech"),Ve=({experience:t})=>n(S.VerticalTimelineElement,{contentStyle:{background:"#1d1836",color:"#fff"},contentArrowStyle:{borderRight:"7px solid  #232631"},date:t.date,iconStyle:{background:t.iconBg},icon:e("div",{className:"flex justify-center items-center w-full h-full",children:e("img",{src:t.icon,alt:t.company_name,className:"w-[70%] h-[70%] object-contain"})}),children:[n("div",{children:[e("h3",{className:"text-white text-[24px] font-bold",children:t.title}),e("p",{className:"text-secondary text-[16px] font-semibold",style:{margin:0},children:t.company_name})]}),e("ul",{className:"mt-5 list-disc ml-5 space-y-2",children:t.points.map((a,o)=>e("li",{className:"text-white-100 text-[14px] pl-1 tracking-wider",children:a},`experience-point-${o}`))})]}),Ge=()=>n(g,{children:[n(m.div,{variants:b(),children:[e("p",{className:`${d.sectionSubText} text-center`,children:"What I have achivied so far"}),e("h2",{className:`${d.sectionHeadText} text-center`,children:"My Experience."})]}),e("div",{className:"mt-20 flex flex-col",children:e(S.VerticalTimeline,{children:$e.map((t,a)=>e(Ve,{experience:t},`experience-${a}`))})})]}),Ue=u(Ge,"experience"),Ye=({index:t,name:a,description:o,tags:i,image:s,source_code_link:l,project_link:r})=>e(m.div,{variants:h("up","spring",t*.5,.75),children:n(j,{options:{max:45,scale:1,speed:450},className:"bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full",children:[n("div",{className:"relative w-full h-[230px]",children:[e("img",{src:s,alt:"project_image",className:"w-full h-full object-cover rounded-2xl"}),e("div",{className:"absolute inset-0 flex justify-end m-3 card-img_hover",children:n("div",{children:[e("div",{onClick:()=>window.open(l,"_blank","noreferrer"),className:"black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer",children:e("img",{src:_,alt:"source code",className:"w-1/2 h-1/2 object-contain"})}),r.map(function(p){return e("div",{onClick:()=>window.open(JSON.stringify(p).replaceAll('"',""),"_blank","noreferrer"),className:"black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer my-1",children:e("img",{src:ie,alt:"source code",className:"w-1/2 h-1/2 object-contain"})})})]})})]}),n("div",{className:"mt-5",children:[e("h3",{className:"text-white font-bold text-[24px]",children:a}),e("p",{className:"mt-2 text-secondary text-[14px]",children:o})]}),e("div",{className:"mt-4 flex flex-wrap gap-2",children:i.map(p=>n("p",{className:`text-[14px] ${p.color}`,children:["#",p.name]},`${a}-${p.name}`))})]})}),Qe=()=>n(g,{children:[n(m.div,{variants:b(),children:[e("p",{className:`${d.sectionSubText} `,children:"My work"}),e("h2",{className:`${d.sectionHeadText}`,children:"Projects."})]}),e("div",{className:"w-full flex",children:e(m.p,{variants:h("","",.1,1),className:"mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]",children:"Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively."})}),e("div",{className:"mt-20 flex flex-wrap gap-7",children:ze.map((t,a)=>e(Ye,{index:a,...t},`project-${a}`))})]}),Xe=u(Qe,"works"),Ke=()=>{const t=c.useRef(),[a,o]=c.useState({name:"",email:"",message:""}),[i,s]=c.useState(!1),l=p=>{const{target:y}=p,{name:C,value:T}=y;o({...a,[C]:T})},r=p=>{p.preventDefault(),s(!0),B.send({}.VITE_APP_EMAILJS_SERVICE_ID,{}.VITE_APP_EMAILJS_TEMPLATE_ID,{from_name:a.name,to_name:"JavaScript Mastery",from_email:a.email,to_email:"sujata@jsmastery.pro",message:a.message},{}.VITE_APP_EMAILJS_PUBLIC_KEY).then(()=>{s(!1),alert("Thank you. I will get back to you as soon as possible."),o({name:"",email:"",message:""})},y=>{s(!1),console.error(y),alert("Ahh, something went wrong. Please try again.")})};return n("div",{className:"xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden",children:[n(m.div,{variants:N("left","tween",.2,1),className:"flex-[0.75] bg-black-100 p-8 rounded-2xl",children:[e("p",{className:d.sectionSubText,children:"Get in touch"}),e("h3",{className:d.sectionHeadText,children:"Contact."}),n("form",{ref:t,onSubmit:r,className:"mt-12 flex flex-col gap-8",children:[n("label",{className:"flex flex-col",children:[e("span",{className:"text-white font-medium mb-4",children:"Your Name"}),e("input",{type:"text",name:"name",value:a.name,onChange:l,placeholder:"What's your name?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"})]}),n("label",{className:"flex flex-col",children:[e("span",{className:"text-white font-medium mb-4",children:"Your email"}),e("input",{type:"email",name:"email",value:a.email,onChange:l,placeholder:"What's your web address?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"})]}),n("label",{className:"flex flex-col",children:[e("span",{className:"text-white font-medium mb-4",children:"Your Message"}),e("textarea",{rows:7,name:"message",value:a.message,onChange:l,placeholder:"What you want to say?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"})]}),e("button",{type:"submit",className:"bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary",children:i?"Sending...":"Send"})]})]}),e(m.div,{variants:N("right","tween",.2,1),className:"xl:flex-1 xl:h-auto md:h-[550px] h-[350px]",children:e(Z,{})})]})},et=u(Ke,"contact"),tt=()=>e(F,{children:n("div",{className:"relative z-0 bg-primary",children:[n("div",{className:"bg-hero-pattern bg-cover bg-no-repeat bg-center",children:[e(He,{}),e(X,{})]}),e(Re,{}),e(Ue,{}),e(qe,{}),e(Xe,{}),n("div",{className:"relative z-0",children:[e(et,{}),e(Q,{})]})]})});D.createRoot(document.getElementById("root")).render(e(P.StrictMode,{children:e(tt,{})}));
