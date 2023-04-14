import{j as n,a as e,F as u,T as v}from"./react-tilt-445b5e9b.js";import{r as m,R as Z}from"./react-dab3e289.js";import{a as G}from"./react-dom-38080391.js";import{L as U,B as V}from"./react-router-dom-37a2a8e6.js";import{u as Q,H as Y,C as y,O as w,P as x,a as T,b as X,F as K,D as ee,c as te,d as ae,e as ne}from"./@react-three-8a10a06f.js";import{i as ie}from"./maath-01ed86e0.js";import{m as p}from"./framer-motion-e830db19.js";import{i as C}from"./react-device-detect-e1ff5d96.js";import{d as _}from"./react-vertical-timeline-component-49b0dd62.js";import{e as se}from"./@emailjs-a704afdc.js";import"./@chevrotain-042e6b4d.js";import"./scheduler-04ce0582.js";import"./react-router-c717974f.js";import"./@remix-run-8e4687c3.js";import"./@babel-34ca84e8.js";import"./three-891170d2.js";import"./react-use-measure-1e0236bf.js";import"./debounce-ae8cc837.js";import"./its-fine-0502800c.js";import"./react-reconciler-abdce316.js";import"./zustand-9be6e683.js";import"./three-stdlib-02a433b1.js";import"./react-merge-refs-239dbb3c.js";import"./suspend-react-00b64780.js";import"./ua-parser-js-d2930962.js";import"./prop-types-4d501b15.js";import"./classnames-7e4e529b.js";import"./react-intersection-observer-e02ce0c2.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(i){if(i.ep)return;i.ep=!0;const l=s(i);fetch(i.href,l)}})();const k=()=>{const{progress:t}=Q();return n(Y,{as:"div",center:!0,style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[e("span",{className:"canvas-loader"}),n("p",{style:{fontSize:14,color:"#F1F1F1",fontWeight:800,marginTop:40},children:[t.toFixed(2),"%"]})]})},oe=()=>{const t=T("./planet/scene.gltf");return e("primitive",{object:t.scene,scale:2.5,"position-y":0,"rotation-y":0})},re=()=>e(y,{shadows:!0,frameloop:"demand",dpr:[1,2],gl:{preserveDrawingBuffer:!0},camera:{fov:45,near:.1,far:200,position:[-4,3,6]},children:n(m.Suspense,{fallback:e(k,{}),children:[e(w,{autoRotate:!0,enableZoom:!1,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/2}),e(oe,{}),e(x,{all:!0})]})}),le=t=>{const[a]=X([t.imgUrl]);return n(K,{speed:1.75,rotationIntensity:1,floatIntensity:2,children:[e("ambientLight",{intensity:.2}),e("directionalLight",{position:[0,1,.05]}),n("mesh",{castShadow:!0,receiveShadow:!0,scale:2.75,children:[e("icosahedronGeometry",{args:[1,1]}),e("meshStandardMaterial",{color:"#fff8eb",polygonOffset:!0,polygonOffsetFactor:-5,flatShading:!0}),e(ee,{position:[0,0,1],rotation:[2*Math.PI,0,6.25],scale:1,map:a,flatShading:!0})]})]})},ce=({icon:t})=>n(y,{frameloop:"demand",dpr:[2,4],gl:{preserveDrawingBuffer:!0},children:[n(m.Suspense,{fallback:e(k,{}),children:[e(w,{enableZoom:!1}),e(le,{imgUrl:t})]}),e(x,{all:!0})]}),de=({isMobile:t})=>{const a=T("/desktop/scene.gltf");return n("mesh",{children:[e("hemisphereLight",{intensity:.15,groundColor:"black"}),e("spotLight",{position:[-20,50,10],angle:.12,penumbra:1,intensity:1,castShadow:!0,"shadow-mapSize":1024}),e("pointLight",{intensity:1}),e("primitive",{object:a.scene,scale:t?.7:.75,position:t?[0,-3,-2.2]:[0,-3.25,-1.5],rotation:[-.01,-.2,-.1]})]})},me=()=>{const[t,a]=m.useState(!1);return m.useEffect(()=>{const s=window.matchMedia("(max-width: 500px)");a(s.matches);const o=i=>{a(i.matches)};return s.addEventListener("change",o),()=>{s.removeEventListener("change",o)}},[]),n(y,{frameloop:"demand",shadows:!0,dpr:[1,2],camera:{position:[20,3,5],fov:25},gl:{preserveDrawingBuffer:!0},children:[n(m.Suspense,{fallback:e(k,{}),children:[e(w,{enableZoom:!1,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/2}),e(de,{isMobile:t})]}),e(x,{all:!0})]})},pe=t=>{const a=m.useRef(),[s]=m.useState(()=>ie(new Float32Array(5e3),{radius:1.2}));return te((o,i)=>{a.current.rotation.x-=i/10,a.current.rotation.y-=i/15}),e("group",{rotation:[0,0,Math.PI/4],children:e(ae,{ref:a,positions:s,stride:3,frustumCulled:!0,...t,children:e(ne,{transparent:!0,color:"#f272c8",size:.002,sizeAttenuation:!0,depthWrite:!1})})})},he=()=>e("div",{className:"w-full h-auto absolute inset-0 z-[-1]",children:n(y,{camera:{position:[0,0,1]},children:[e(m.Suspense,{fallback:null,children:e(pe,{})}),e(x,{all:!0})]})}),c={paddingX:"sm:px-16 px-6",paddingY:"sm:py-16 py-6",padding:"sm:px-16 px-6 sm:py-16 py-10",heroHeadText:"font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",heroSubText:"text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",sectionHeadText:"text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",sectionSubText:"sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider"},ue=()=>n("section",{className:"relative w-full h-screen mx-auto",children:[n("div",{className:`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${c.paddingX} flex flex-row items-start gap-5`,children:[n("div",{className:"flex flex-col justify-center items-center mt-5",children:[e("div",{className:"w-5 h-5 rounded-full bg-[#915EFF]"}),e("div",{className:"w-1 sm:h-80 h-40 violet-gradient"})]}),n("div",{children:[n("h1",{className:`${c.heroHeadText} text-white`,children:["Hi, I'm ",e("span",{className:"text-[#915EFF]",children:"Demid"})]}),n("p",{className:`${c.heroSubText} mt-2 text-white-100`,children:["I am a full stack developer with incline",e("br",{className:"sm:block hidden"}),"to the backend technologies."]})]})]}),e(me,{}),e("div",{className:"absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center",children:e("a",{href:"#about",children:e("div",{className:"w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2",children:e(p.div,{animate:{y:[0,24,0]},transition:{duration:1.5,repeat:1/0,repeatType:"loop"},className:"w-3 h-3 rounded-full bg-secondary mb-1"})})})})]}),fe="/assets/backend-565fc01f.png",ge="/assets/close-ad0e0ca6.svg",ye="/assets/creator-dbbffaec.png",xe="/assets/logo-dfe46b1c.svg",be="/assets/menu-242d80a8.svg",ve="/assets/mobile-896ef2f5.png",we="/assets/web-0d05165f.png",P="/assets/live-21f19a8c.png",ke="/assets/chrono-f5c89c8e.png",Ne="/assets/cmd_todos-0396de2b.png",je="/assets/genalg-c8182794.png",Ie="/assets/InfiniteFall-cab178b7.jpeg",Se="/assets/javaconsole-9c353d2d.png",Te="/assets/pyshell_va-bd0a4fe7.png",Ce="/assets/tag_quality-1a9e36ee.jpeg",_e="/assets/webchat-082c3fa5.png",Pe="/assets/webshooter-d336b6d6.png",Ae="/assets/django-efde9b6d.png",A="/assets/flask-5f11a645.png",D="/assets/nodejs-d83eb6dd.png",De="/assets/flame-2422712d.png",F="/assets/flutter-bee8437b.png",z="/assets/reactjs-966214a8.png",E="/assets/c-74f58030.png",Fe="/assets/c__-657c389b.png",L="/assets/dart-3950c0fd.png",O="/assets/java-5c1b1283.png",$="/assets/js-c7b17200.png",M="/assets/python-2634994d.png",W="/assets/do-c0abb9cc.png",ze="/assets/firebase-86079fc8.png",N="/assets/github-3b4e1609.png",J="/assets/nginx-c645e38e.png",B="/assets/postresql-9910f206.png",H="/assets/terminal-75515ade.png",Ee="/assets/ac-47378c84.png",Le="/assets/mentor-0906a57f.png",Oe="/assets/uoft-0ccb1f08.png",j=[{id:"about",title:"About"},{id:"experience",title:"Experience"},{id:"tech",title:"Skills"},{id:"works",title:"Projects"},{id:"contact",title:"Contact"}],$e=[{title:"Backend Developer",icon:fe},{title:"Web Developer",icon:we},{title:"Flutter Developer",icon:ve},{title:"Game developer",icon:ye}],Me=[{name:"C",description:"My primary use of C has been for manipulating kernels, synchronization, and parallel programming. With my proficiency in the language, I am capable of developing intricate systems and designs.",icon:E},{name:"Java",description:"I attained proficiency in programming through learning Java as my first language. I primarily employ Java for the development of applications and Artificial Intelligence (AI) systems.",icon:O},{name:"Python",description:"Python is my second language in which I have attained proficiency, and it is also the language I use the most frequently. I apply Python to backend development, analysis, and application development.",icon:M},{name:"Dart",description:"One year ago, I began utilizing Dart solely for frontend development purposes such as web, iOS, Android, and other related platforms.",icon:L},{name:"JavaScript",description:"Two years ago, I began utilizing Javascript, which I primarily apply to web development and building small servers.",icon:$},{name:"Flask",description:"For backend development, Flask is my primary framework of choice, enabling me to construct sophisticated APIs and real-time servers.",icon:A},{name:"Node.js",description:"When it comes to small projects or real-time data transfers, Node.js is my preferred backend framework, which I frequently use for prototyping.",icon:D},{name:"Flutter",description:"Flutter serves as my primary frontend framework, empowering me to effortlessly construct web and mobile applications, as well as develop games.",icon:F},{name:"React.js",description:"Although I am relatively new to React.js, I possess the proficiency to construct remarkable user interfaces for web applications and websites with ease.",icon:z},{name:"Nginx",description:"Nginx is the sole web server that I employ in a production environment for various platforms, including web apps and servers, and I am a proficient user of this software.",icon:J},{name:"PostreSQL",description:"I hold a preference for PostgreSQL as a database management system and utilize it nearly every time as a data warehouse.",icon:B},{name:"Bash",description:"For almost a decade, I have been using Bash as my primary shell due to my reliance on Linux as my main operating system. I leverage Bash to automate mechanical routines.",icon:H},{name:"DigitalOcean",description:"DigitalOcean is the cloud service provider in which I possess considerable proficiency, having deployed several substantial projects on their platform.",icon:W}],We=[{name:"C",description:"My primary use of C has been for manipulating kernels, synchronization, and parallel programming. With my proficiency in the language, I am capable of developing intricate systems and designs.",icon:E},{name:"C++",description:"While C++ is not my primary programming language, I utilize it specifically for robotics and simulating robots.",icon:Fe},{name:"Java",description:"I attained proficiency in programming through learning Java as my first language. I primarily employ Java for the development of applications and Artificial Intelligence (AI) systems.",icon:O},{name:"Python",description:"Python is my second language in which I have attained proficiency, and it is also the language I use the most frequently. I apply Python to backend development, analysis, and application development.",icon:M},{name:"Dart",description:"One year ago, I began utilizing Dart solely for frontend development purposes such as web, iOS, Android, and other related platforms.",icon:L},{name:"JavaScript",description:"Two years ago, I began utilizing Javascript, which I primarily apply to web development and building small servers.",icon:$},{name:"Flask",description:"For backend development, Flask is my primary framework of choice, enabling me to construct sophisticated APIs and real-time servers.",icon:A},{name:"Django",description:"I solely employ Django in extensive projects that demand enhanced security, scalability, or server-side rendering. I possess adequate proficiency to use it in a production environment.",icon:Ae},{name:"Node.js",description:"When it comes to small projects or real-time data transfers, Node.js is my preferred backend framework, which I frequently use for prototyping.",icon:D},{name:"Flutter",description:"Flutter serves as my primary frontend framework, empowering me to effortlessly construct web and mobile applications, as well as develop games.",icon:F},{name:"React.js",description:"Although I am relatively new to React.js, I possess the proficiency to construct remarkable user interfaces for web applications and websites with ease.",icon:z},{name:"Flame",description:"Flame is a framework extension for Flutter that I utilize to build web and mobile games, and I particularly appreciate this framework for its simplicity and compatibility.",icon:De},{name:"Nginx",description:"Nginx is the sole web server that I employ in a production environment for various platforms, including web apps and servers, and I am a proficient user of this software.",icon:J},{name:"PostreSQL",description:"I hold a preference for PostgreSQL as a database management system and utilize it nearly every time as a data warehouse.",icon:B},{name:"Bash",description:"For almost a decade, I have been using Bash as my primary shell due to my reliance on Linux as my main operating system. I leverage Bash to automate mechanical routines.",icon:H},{name:"DigitalOcean",description:"DigitalOcean is the cloud service provider in which I possess considerable proficiency, having deployed several substantial projects on their platform.",icon:W},{name:"Firebase",description:"Firebase serves as a valuable tool in my arsenal, enabling me to rapidly develop prototypes for various applications and platforms.",icon:ze},{name:"GitHub",description:"It's rare to come across someone who doesn't use GitHub these days, and you can find all of my projects on my GitHub account at github.com/DZykov.",icon:N}],Je=[{title:"Student",company_name:"Appleby College",icon:Ee,iconBg:"#383E56",date:"September 2015 - June 2018",points:["I was a student at boarding school Appleby College.","Appleby College is a leading Canadian day and boarding school."]},{title:"Mentor",company_name:"Mentor Collective",icon:Le,iconBg:"#383E56",date:"May 2018 - Jan 2020",points:["Helping other students to joing Canadian culture and society.","Providing mental help and assistance.","Providing help with courses."]},{title:"Student",company_name:"University of Toronot Mississauga",icon:Oe,iconBg:"#E6DEDD",date:"September 2018 - June 2023",points:["I was a student at University of Toronto Mississauga campus.","I graduate with Honours Bachelor of Science: Computer Science, Phillosophy, and Mathematics."]}],I=[{name:"Chrono",description:"A comprehensive project has been developed that involves a web-based platform for posting blogs/articles on both the platform itself and the internet. The platform has been implemented using various technologies, such as Flutter for developing the web app, Node.js for creating website pages, and Flask for building the backend API. Additionally, DigitalOcean has been utilized to deploy the entire architecture.",tags:[{name:"flask",color:"blue-text-gradient"},{name:"node.js",color:"green-text-gradient"},{name:"flutter",color:"pink-text-gradient"},{name:"postresql",color:"blue-text-gradient"},{name:"nginx",color:"green-text-gradient"},{name:"digitalocean",color:"pink-text-gradient"}],image:ke,project_link:["https://app.chrono.pw","https://chrono.pw/demid_zykov"],source_code_link:"https://github.com/DZykov/Chrono_public"},{name:"IRC Web Chat",description:"A web application has been created to enable users to create and join chat-rooms where they can send text messages to each other. The application allows users to create their own chat-rooms and invite others to join or join existing chat-rooms. Users can send text messages to each other within the chat-rooms and view the messages in real-time. The application has been designed to be user-friendly and easy to use, with a simple and intuitive interface. Additionally, the application has been optimized for scalability and performance to ensure a smooth and seamless experience for users, even as the number of users and chat-rooms grows.",tags:[{name:"nodejs",color:"blue-text-gradient"},{name:"sql",color:"green-text-gradient"},{name:"css",color:"pink-text-gradient"}],image:_e,project_link:["https://webchat.zykov.xyz"],source_code_link:"https://github.com/DZykov/WebChat"},{name:"Life Evolution",description:"An Artificial Intelligence project has been developed which involves the visualization of a Genetic Algorithm. The goal of this algorithm is to create a creature that can survive in a given model or world. The algorithm starts with a population of random creatures and then applies genetic operators such as selection, crossover, and mutation to evolve the population over generations. The fitness of each creature is determined by how well it performs in the given model, such as by avoiding obstacles or collecting resources. The visualization aspect allows users to see the creatures evolve and compete for survival in real-time. The project has been designed to be scalable, allowing users to modify the model and adjust the parameters of the algorithm to explore different scenarios and optimize the performance of the creatures.",tags:[{name:"java",color:"blue-text-gradient"},{name:"ai",color:"green-text-gradient"},{name:"jwt",color:"pink-text-gradient"}],image:je,project_link:[],source_code_link:"https://github.com/DZykov/java-gen-alg"},{name:"WebShooter Online",description:"A real-time web shooter game has been developed with multiplayer support. The game allows players to compete against each other in real-time, testing their shooting skills and reflexes. The game can be played from any web browser, with no need to download any additional software. The game includes option of creating public or private servers or rooms. The multiplayer support allows players to join together and play against each other in real-time. The game has been optimized for performance and scalability to ensure a smooth and seamless experience, even with large numbers of players.",tags:[{name:"node.js",color:"blue-text-gradient"},{name:"js",color:"green-text-gradient"},{name:"sockets",color:"pink-text-gradient"}],image:Pe,project_link:["https://onlinegame.zykov.xyz"],source_code_link:"https://github.com/DZykov/MultiplayerWebGame"},{name:"Infinite Fall",description:"A never-ending game platform has been developed that supports a wide range of platforms, including web, Android, iOS, Linux, Windows, and more. The game has been optimized to run on a wide range of devices and platforms, ensuring that players can enjoy the game regardless of their preferred device. The game has been designed with a user-friendly interface, making it easy for players to access the game on any platform they prefer.",tags:[{name:"flutter",color:"blue-text-gradient"},{name:"flame",color:"green-text-gradient"},{name:"game development",color:"pink-text-gradient"}],image:Ie,project_link:["https://webgame.zykov.xyz"],source_code_link:"https://github.com/DZykov/InfiniteFall"},{name:"Voice Assistant PyShell",description:"I have developed a unique approach to combining a terminal interface with a voice assistant that offers unparalleled customization options. This voice assistant is designed to work seamlessly with the terminal, providing users with an intuitive interface that allows for quick and easy access to a wide range of functions. The voice assistant is highly customizable, allowing users to tailor it to their specific needs and preferences. Additionally, this voice assistant is designed to work 'outside of the box', meaning it can be used with a wide range of software and hardware configurations, making it an ideal solution for a wide range of users. The combination of the terminal and voice assistant provides users with an unprecedented level of control and flexibility, allowing them to perform a wide range of tasks quickly and efficiently.",tags:[{name:"python",color:"blue-text-gradient"},{name:"voice assistant",color:"green-text-gradient"},{name:"shell",color:"pink-text-gradient"}],image:Te,project_link:[],source_code_link:"https://github.com/DZykov/PyShell"},{name:"TODO CLI",description:"I have developed a Command Line Interface (CLI) implementation of a TODO app, designed to help users manage their daily tasks and prioritize their workload. This CLI-based application offers a simple and intuitive interface, enabling users to easily create, edit, and manage their to-do lists without the need for a graphical user interface (GUI). With this app, users can quickly add new tasks, set due dates, and mark completed tasks, all through the convenience of a terminal interface. The TODO app has been designed to be easily portable and platform-independent, enabling users to run it on a wide range of operating systems and devices. The app is also open-source, making it easy for developers to contribute to the project and add new features to the app. With its powerful features and intuitive interface, this CLI-based TODO app is the perfect tool for anyone looking to streamline their workflow and boost their productivity.",tags:[{name:"python",color:"blue-text-gradient"},{name:"json",color:"green-text-gradient"},{name:"todo",color:"pink-text-gradient"}],image:Ne,project_link:[],source_code_link:"https://github.com/DZykov/adventure-cli-todo"},{name:"Console",description:"I have developed a robust and reliable console/terminal implementation in Java, providing users with a powerful and versatile command-line interface for interacting with their applications. This console/terminal implementation offers a wide range of features, including support for command history, tab completion, and customizable prompts. It also supports a variety of different output formats, including text, colors, and special symbols. Additionally, the console/terminal is highly customizable, with options to modify the font, size, and color of the text, as well as the background color. Additionally, the console support encryption/decryption of the files.",tags:[{name:"java",color:"blue-text-gradient"},{name:"console",color:"green-text-gradient"},{name:"shell",color:"pink-text-gradient"},{name:"encryption",color:"blue-text-gradient"}],image:Se,project_link:[],source_code_link:"https://github.com/DZykov/Java-console"},{name:"Tags quality",description:"I have developed an advanced algorithm that uses machine learning to sort a user's tags based on their interests, providing a highly personalized and tailored experience. The algorithm analyzes a user's past behavior, including their search history and engagement with content, to identify patterns and determine their interests. Based on this analysis, the algorithm sorts the user's tags by relevance and importance, ensuring that the most interesting and relevant tags appear at the top of the feed. This algorithm was presented at Hackathon, and received special mentions.",tags:[{name:"python",color:"blue-text-gradient"},{name:"big data",color:"green-text-gradient"},{name:"data science",color:"pink-text-gradient"}],image:Ce,project_link:[],source_code_link:"https://github.com/DZykov/Userteam"}],Be=()=>{const[t,a]=m.useState(""),[s,o]=m.useState(!1),[i,l]=m.useState(!1);return m.useEffect(()=>{const r=()=>{window.scrollY>100?l(!0):l(!1)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]),e("nav",{className:`${c.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${i?"bg-primary":"bg-transparent"}`,children:n("div",{className:"w-full flex justify-between items-center max-w-7xl mx-auto",children:[n(U,{to:"/",className:"flex items-center gap-2",onClick:()=>{a(""),window.scrollTo(0,0)},children:[e("img",{src:xe,alt:"logo",className:"w-9 h-9 object-contain"}),n("p",{className:"text-white text-[18px] font-bold cursor-pointer flex ",children:["Demid Zykov  ",e("span",{className:"sm:block hidden",children:"Portfolio"})]})]}),e("ul",{className:"list-none hidden sm:flex flex-row gap-10",children:j.map(r=>e("li",{className:`${t===r.title?"text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`,onClick:()=>a(r.title),children:e("a",{href:`#${r.id}`,children:r.title})},r.id))}),n("div",{className:"sm:hidden flex flex-1 justify-end items-center",children:[e("img",{src:s?ge:be,alt:"menu",className:"w-[28px] h-[28px] object-contain",onClick:()=>o(!s)}),e("div",{className:`${s?"flex":"hidden"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`,children:e("ul",{className:"list-none flex justify-end items-start flex-1 flex-col gap-4",children:j.map(r=>e("li",{className:`font-poppins font-medium cursor-pointer text-[16px] ${t===r.title?"text-white":"text-secondary"}`,onClick:()=>{o(!s),a(r.title)},children:e("a",{href:`#${r.id}`,children:r.title})},r.id))})})]})]})})},f=t=>({hidden:{y:-50,opacity:0},show:{y:0,opacity:1,transition:{type:"spring",duration:1.25,delay:t}}}),h=(t,a,s,o)=>({hidden:{x:t==="left"?100:t==="right"?-100:0,y:t==="up"?100:t==="down"?-100:0,opacity:0},show:{x:0,y:0,opacity:1,transition:{type:a,delay:s,duration:o,ease:"easeOut"}}}),S=(t,a,s,o)=>({hidden:{x:t==="left"?"-100%":t==="right"?"100%":0,y:t==="up"||t==="down"?"100%":0},show:{x:0,y:0,transition:{type:a,delay:s,duration:o,ease:"easeOut"}}}),He=(t,a)=>({hidden:{},show:{transition:{staggerChildren:t,delayChildren:a||0}}}),g=(t,a)=>function(){return n(p.section,{variants:He(),initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.25},className:`${c.padding} max-w-7xl mx-auto relative z-0`,children:[e("span",{className:"hash-span",id:a,children:" "}),e(t,{})]})},qe=({index:t,title:a,icon:s})=>e(v,{className:"xs:w-[250px] w-full",children:e(p.div,{variants:h("right","spring",t*.5,.75),className:"w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card",children:n("div",{options:{max:45,scale:1,speed:450},className:"bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col",children:[e("img",{src:s,alt:"web-development",className:"w-16 h-16 object-contain"}),e("h3",{className:"text-white text-[20px] font-bold text-center",children:a})]})})}),Re=()=>n(u,{children:[n(p.div,{variants:f(),children:[e("p",{className:c.sectionSubText,children:"Introduction"}),e("h2",{className:c.sectionHeadText,children:"Overview."})]}),e(p.p,{variants:h("","",.1,1),className:"mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]",children:"I am a skilled software developer with experience in Python, Java, Dart, C/C++, JS and expertise in Flutter, Flame, React.js, Flask, Django, and Node.js frameworks. Additionaly, I am proficient in server development and arhitecture. I mainly use the combination of Nginx, DigitalOcean, and Ubuntu/Debian server. I am a quick learner and I can can work in a team to create efficient, scalable, and user-friendly solutions that solve real-world problems."}),e("div",{className:"mt-20 flex flex-wrap gap-10",children:$e.map((t,a)=>e(qe,{index:a,...t},t.title))})]}),Ze=g(Re,"about"),Ge=()=>{const[t,a]=m.useState("The balls are 3D and interactable! Click on any ball to get more information about technology and my relation to it.");function s(o){a(o)}return C?n(u,{children:[n(p.div,{variants:f(),children:[e("p",{className:`${c.sectionSubText} text-center`,children:"What I have mastered so far"}),e("h2",{className:`${c.sectionHeadText} text-center`,children:"My Skills."})]}),e(p.p,{variants:h("","",.1,1),className:"mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center content-center items-center mx-auto",children:t}),e("br",{}),e("div",{className:"flex flex-row flex-wrap justify-center gap-10",children:We.map(o=>e("div",{className:"w-28 h-28 flex items-center justify-center rounded-full bg-tertiary shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300",children:e("div",{className:"w-20 h-20 rounded-full bg-primary flex items-center justify-center transform hover:rotate-12 transition-all duration-300",onClick:i=>{s(o.description)},children:e("img",{className:"w-16 h-16",src:o.icon,alt:o.name})})},o.name))})]}):n(u,{children:[n(p.div,{variants:f(),children:[e("p",{className:`${c.sectionSubText} text-center`,children:"What I have mastered so far"}),e("h2",{className:`${c.sectionHeadText} text-center`,children:"My Skills."})]}),e(p.p,{variants:h("","",.1,1),className:"mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center content-center items-center mx-auto",children:t}),e("br",{}),e("div",{className:"flex flex-row flex-wrap justify-center gap-10",children:Me.map(o=>e("div",{className:"w-28 h-28",onClick:i=>{s(o.description)},children:e(ce,{icon:o.icon})},o.name))})]})},Ue=g(Ge,"tech"),Ve=({experience:t})=>n(_.VerticalTimelineElement,{contentStyle:{background:"#1d1836",color:"#fff"},contentArrowStyle:{borderRight:"7px solid  #232631"},date:t.date,iconStyle:{background:t.iconBg},icon:e("div",{className:"flex justify-center items-center w-full h-full",children:e("img",{src:t.icon,alt:t.company_name,className:"w-[70%] h-[70%] object-contain"})}),children:[n("div",{children:[e("h3",{className:"text-white text-[24px] font-bold",children:t.title}),e("p",{className:"text-secondary text-[16px] font-semibold",style:{margin:0},children:t.company_name})]}),e("ul",{className:"mt-5 list-disc ml-5 space-y-2",children:t.points.map((a,s)=>e("li",{className:"text-white-100 text-[14px] pl-1 tracking-wider",children:a},`experience-point-${s}`))})]}),Qe=()=>n(u,{children:[n(p.div,{variants:f(),children:[e("p",{className:`${c.sectionSubText} text-center`,children:"What I have achivied so far"}),e("h2",{className:`${c.sectionHeadText} text-center`,children:"My Experience."})]}),e("div",{className:"mt-20 flex flex-col",children:e(_.VerticalTimeline,{children:Je.map((t,a)=>e(Ve,{experience:t},`experience-${a}`))})})]}),Ye=g(Qe,"experience"),Xe=({index:t,name:a,description:s,tags:o,image:i,source_code_link:l,project_link:r})=>e(p.div,{variants:h("up","spring",t*.5,.75),children:n(v,{options:{max:45,scale:1,speed:450},className:"bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full",children:[n("div",{className:"relative w-full h-[230px]",children:[e("img",{src:i,alt:"project_image",className:"w-full h-full object-cover rounded-2xl"}),e("div",{className:"absolute inset-0 flex justify-end m-3 card-img_hover",children:n("div",{children:[e("div",{onClick:()=>window.open(l,"_blank","noreferrer"),className:"black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer",children:e("img",{src:N,alt:"source code",className:"w-1/2 h-1/2 object-contain"})}),r.map(function(d){return e("div",{onClick:()=>window.open(JSON.stringify(d).replaceAll('"',""),"_blank","noreferrer"),className:"black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer my-1",children:e("img",{src:P,alt:"source code",className:"w-1/2 h-1/2 object-contain"})})})]})})]}),n("div",{className:"mt-5",children:[e("h3",{className:"text-white font-bold text-[24px]",children:a}),e("p",{className:"mt-2 text-secondary text-[14px]",children:s})]}),e("div",{className:"mt-4 flex flex-wrap gap-2",children:o.map(d=>n("p",{className:`text-[14px] ${d.color}`,children:["#",d.name]},`${a}-${d.name}`))})]})}),Ke=({index:t,name:a,description:s,tags:o,image:i,source_code_link:l,project_link:r})=>e("div",{variants:h("up","spring",t*.5,.75),children:n(v,{options:{max:45,scale:1,speed:450},className:"bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full",children:[n("div",{className:"relative w-full h-[230px]",children:[e("img",{src:i,alt:"project_image",className:"w-full h-full object-cover rounded-2xl"}),e("div",{className:"absolute inset-0 flex justify-end m-3 card-img_hover",children:n("div",{children:[e("div",{onClick:()=>window.open(l,"_blank","noreferrer"),className:"black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer",children:e("img",{src:N,alt:"source code",className:"w-1/2 h-1/2 object-contain"})}),r.map(function(d){return e("div",{onClick:()=>window.open(JSON.stringify(d).replaceAll('"',""),"_blank","noreferrer"),className:"black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer my-1",children:e("img",{src:P,alt:"source code",className:"w-1/2 h-1/2 object-contain"})})})]})})]}),n("div",{className:"mt-5",children:[e("h3",{className:"text-white font-bold text-[24px]",children:a}),e("p",{className:"mt-2 text-secondary text-[14px]",children:s})]}),e("div",{className:"mt-4 flex flex-wrap gap-2",children:o.map(d=>n("p",{className:`text-[14px] ${d.color}`,children:["#",d.name]},`${a}-${d.name}`))})]})}),et=()=>C||window.innerWidth<=900?n(u,{children:[n("div",{variants:f(),children:[e("p",{className:`${c.sectionSubText} `,children:"My work"}),e("h2",{className:`${c.sectionHeadText}`,children:"Projects."})]}),e("div",{className:"w-full flex",children:e("p",{variants:h("","",.1,1),className:"mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]",children:"Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively."})}),e("div",{className:"mt-20 flex flex-wrap gap-7",children:I.map((t,a)=>e(Ke,{index:a,...t},`project-${a}`))})]}):n(u,{children:[n(p.div,{variants:f(),children:[e("p",{className:`${c.sectionSubText} `,children:"My work"}),e("h2",{className:`${c.sectionHeadText}`,children:"Projects."})]}),e("div",{className:"w-full flex",children:e(p.p,{variants:h("","",.1,1),className:"mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]",children:"Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively."})}),e("div",{className:"mt-20 flex flex-wrap gap-7",children:I.map((t,a)=>e(Xe,{index:a,...t},`project-${a}`))})]}),tt=g(et,"works"),at=()=>{const t=m.useRef(),[a,s]=m.useState({name:"",email:"",message:""}),[o,i]=m.useState(!1),l=d=>{const{target:b}=d,{name:q,value:R}=b;s({...a,[q]:R})},r=d=>{d.preventDefault(),i(!0),se.send({}.VITE_APP_EMAILJS_SERVICE_ID,{}.VITE_APP_EMAILJS_TEMPLATE_ID,{from_name:a.name,to_name:"JavaScript Mastery",from_email:a.email,to_email:"sujata@jsmastery.pro",message:a.message},{}.VITE_APP_EMAILJS_PUBLIC_KEY).then(()=>{i(!1),alert("Thank you. I will get back to you as soon as possible."),s({name:"",email:"",message:""})},b=>{i(!1),console.error(b),alert("Ahh, something went wrong. Please try again.")})};return n("div",{className:"xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden",children:[n(p.div,{variants:S("left","tween",.2,1),className:"flex-[0.75] bg-black-100 p-8 rounded-2xl",children:[e("p",{className:c.sectionSubText,children:"Get in touch"}),e("h3",{className:c.sectionHeadText,children:"Contact."}),n("form",{ref:t,onSubmit:r,className:"mt-12 flex flex-col gap-8",children:[n("label",{className:"flex flex-col",children:[e("span",{className:"text-white font-medium mb-4",children:"Your Name"}),e("input",{type:"text",name:"name",value:a.name,onChange:l,placeholder:"What's your name?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"})]}),n("label",{className:"flex flex-col",children:[e("span",{className:"text-white font-medium mb-4",children:"Your email"}),e("input",{type:"email",name:"email",value:a.email,onChange:l,placeholder:"What's your web address?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"})]}),n("label",{className:"flex flex-col",children:[e("span",{className:"text-white font-medium mb-4",children:"Your Message"}),e("textarea",{rows:7,name:"message",value:a.message,onChange:l,placeholder:"What you want to say?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"})]}),e("button",{type:"submit",className:"bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary",children:o?"Sending...":"Send"})]})]}),e(p.div,{variants:S("right","tween",.2,1),className:"xl:flex-1 xl:h-auto md:h-[550px] h-[350px]",children:e(re,{})})]})},nt=g(at,"contact"),it=()=>e(V,{children:n("div",{className:"relative z-0 bg-primary",children:[n("div",{className:"bg-hero-pattern bg-cover bg-no-repeat bg-center",children:[e(Be,{}),e(ue,{})]}),e(Ze,{}),e(Ye,{}),e(Ue,{}),e(tt,{}),n("div",{className:"relative z-0",children:[e(nt,{}),e(he,{})]})]})});G.createRoot(document.getElementById("root")).render(e(Z.StrictMode,{children:e(it,{})}));
