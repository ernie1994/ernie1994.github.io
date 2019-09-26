(window.webpackJsonpapp=window.webpackJsonpapp||[]).push([[0],{24:function(e,t){e.exports=[{image:"roommate.jpg",title:"Roommate Finder",description:"Find your next best roommate",appUrl:"https://roommate-finder-67.herokuapp.com",githubUrl:"https://github.com/ernie1994/roommate"},{image:"fancy_dinner.jpg",title:"Recipe List",description:"Find something great to cook",appUrl:"https://drinklist.herokuapp.com/",githubUrl:"https://github.com/ernie1994/drinklist"},{image:"burger.png",title:"Eat-Da-Burger",description:"Pretend you're eating tasty burgers!",appUrl:"https://burger67.herokuapp.com/",githubUrl:"https://github.com/ernie1994/burger"},{image:"giphy.png",title:"Gif Search",description:"Find cool gifs, powered by Giphy!",appUrl:"https://ernie1994.github.io/gifTastic/",githubUrl:"https://github.com/ernie1994/gifTastic"},{image:"event.jpg",title:"Event Me",description:"Plan your next fun event!",appUrl:"https://medricr.github.io/group-project/",githubUrl:"https://github.com/medricr/group-project"},{image:"Ned_Stark.jpg",title:"Game of Thrones Trivia",description:"Test your Game of Thrones knowledge!",appUrl:"https://ernie1994.github.io/TriviaGame/",githubUrl:"https://github.com/ernie1994/TriviaGame"},{image:"node.png",title:"Liri Search App",description:"Search for movies, concerts, and songs. Powered by Node.js",appUrl:null,githubUrl:"https://github.com/ernie1994/liri-node-app"}]},38:function(e,t,a){e.exports=a(59)},59:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(15),i=a.n(l),c=a(6),o=a(7),s=a(9),m=a(8),u=a(10),h=a(72),g=a(60),p=a(61),d=a(62),b=a(73),f=a(63),y=a(64),E=a(12),v=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1,navHeight:0},a.toggle=function(){a.setState({isOpen:!a.state.isOpen})},a.close=function(){a.setState({isOpen:!1})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({navHeight:-document.querySelector("nav").offsetHeight-50})}},{key:"render",value:function(){var e=this,t={link:{marginRight:"5px",color:"white",textAlign:"center"},divider:{backgroundColor:"lightgray",height:"1px"},img:{backgroundColor:"rgb(52,58,64)",borderColor:"rgb(52,58,64)"},navitem:{color:"white",textAlign:"center",cursor:"pointer"},navbrand:{color:"white"}};return r.a.createElement(g.a,{className:"navbar-expand-md navbar-dark bg-dark fixed-top"},r.a.createElement(p.a,{style:t.navbrand},r.a.createElement("img",{alt:"html-tags",style:t.img,id:"html-tags",className:"img-fluid img-thumbnail",src:"/images/html_tags.png"}),"Ernesto Garcia"),r.a.createElement(d.a,{type:"button",onClick:this.toggle}),r.a.createElement(b.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(f.a,{className:"ml-5"},["About Me","Projects","Contact"].map(function(a){return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement(y.a,{style:t.navitem,className:"mr-3 my-1"},r.a.createElement(E.Link,{onClick:e.close,to:a,spy:!0,smooth:!0,duration:500,offset:e.state.navHeight},a)),r.a.createElement("div",{style:t.divider,className:"w-100 d-md-none"}))}),r.a.createElement(y.a,{style:t.navitem,className:"mr-3 my-1"},r.a.createElement("a",{onClick:this.close,style:t.link,href:"https://github.com/ernie1994",target:"_blank",rel:"noopener noreferrer"},"My GitHub")))))}}]),t}(r.a.Component),j=a(65),k=a(66),x=a(67),O=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={navHeight:0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({navHeight:-document.querySelector("nav").offsetHeight-50})}},{key:"render",value:function(){var e={header:{color:"white",textAlign:"center"},background:{backgroundImage:'url("/images/starry-night.jpg")',backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPositionY:"60%"},button:{borderColor:"black",fontWeight:"bold"},col:{textAlign:"center"}};return r.a.createElement(j.a,{style:e.background,className:"p-5"},r.a.createElement(k.a,{style:e.col},r.a.createElement(x.a,{className:"bg-transparent"},r.a.createElement("h1",{style:e.header,className:"display-4"},"My name is",r.a.createElement("br",null),r.a.createElement("strong",null,"Ernesto Garcia"),".",r.a.createElement("br",null),"I am a",r.a.createElement("br",null),"Full Stack Developer."),r.a.createElement("br",null),r.a.createElement(E.Link,{onClick:this.close,to:"Projects",spy:!0,smooth:!0,duration:500,offset:this.state.navHeight},r.a.createElement("button",{type:"button",className:"btn btn-light"},"My Work")))))}}]),t}(r.a.Component),C=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e={gradPic:{width:"250px",height:"250px",marginBottom:"10%",borderRadius:"50%"},header:{textAlign:"center",fontWeight:"bold",marginTop:"20px"}};return r.a.createElement(E.Element,{name:"About Me"},r.a.createElement(j.a,{className:"mt-5 d-flex justify-content-center align-items-center"},r.a.createElement(k.a,{md:4,className:"text-center text-md-right"},r.a.createElement("img",{style:e.gradPic,alt:"Graudation",src:"/images/graduation-pic-square.png"})),r.a.createElement(k.a,{xs:9,md:6,className:"ml-3"},r.a.createElement("h1",{style:e.header,className:"text-center text-md-left"},"ABOUT ME"),r.a.createElement("p",{className:"mt-3 text-center text-md-left"},"I am a highly-motivated full-stack web developer. My journey in the tech industry began after graudating from UCLA with a Bachelor's of Science in Neuroscience. Through many hours of book-reading and YouTube video-watching, I taught myself the basics of iOS programming. Because of the many technologies and languages I had not mastered, I joined the UC Davis Full-Stack Bootcamp to gain the skills to become a full-fledged developer."))))}}]),t}(r.a.Component),N=a(24),w=a.n(N),U=a(37),S=a.n(U),T=(a(58),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e={projectImage:{display:"block",boxShadow:"-10px -10px 10px 5px lightgray",width:"50%",height:"auto",maxHeight:"300px"},projectTitle:{fontFamily:"'Lato', sans-serif"},projectDescr:{color:"gray",fontFamily:"'Lato', sans-serif"},divider:{backgroundColor:"lightgray",height:"1px"}},t=this.props,a=r.a.createElement(j.a,{className:"justify-content-center justify-content-md-start"},r.a.createElement(k.a,{md:6,className:"d-flex justify-content-center justify-content-md-end"},r.a.createElement("img",{style:e.projectImage,alt:t.title,src:"/images/".concat(t.image),className:"img-fluid img-thumbnail"})),r.a.createElement(k.a,{md:6,className:"text-center text-md-left"},r.a.createElement("br",null),r.a.createElement("h2",{style:e.projectTitle},t.title),r.a.createElement("h6",{style:e.projectDescr,className:"text-center text-md-left"},t.description),r.a.createElement("br",null),t.appUrl&&r.a.createElement("a",{className:"btn btn-secondary btn-sm mr-3",href:t.appUrl,target:"_blank",rel:"noopener noreferrer"},"Open App"),r.a.createElement("a",{className:"btn btn-dark btn-sm",href:t.githubUrl,target:"_blank",rel:"noopener noreferrer"},"GitHub Code")));return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{xs:12,className:"my-5"},r.a.createElement(S.a,{animateOnce:!0,animateIn:t.fromRight?"bounceInRight":"bounceInLeft"},a)),r.a.createElement("div",{className:"w-100",style:e.divider}))}}]),t}(r.a.Component)),I=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(E.Element,{name:"Projects"},r.a.createElement(j.a,{className:"d-flex justify-content-center"},r.a.createElement("h1",{style:{textAlign:"center",fontWeight:"bold",marginTop:"20px"}},"PROJECTS"),w.a.map(function(e){return r.a.createElement(T,Object.assign({fromRight:w.a.indexOf(e)%2===0},e,{key:e.githubUrl}))})))}}]),t}(r.a.Component),A=a(18),R=a(68),H=a(69),D=a(70),M=a(71),F=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",message:""},a.submit=function(e){e.preventDefault();var t="mailto:ernesto.garcia.lb@gmail.com?subject="+encodeURIComponent("Job Offer")+"&body="+encodeURIComponent("Hi, \nMy name is "+a.state.name+".")+encodeURIComponent("\n \n"+a.state.message)+encodeURIComponent("\nCall or text me at ")+encodeURIComponent(a.state.phone)+encodeURIComponent(" or email me at "+a.state.email+"!");window.open(t,"_parent")},a.handleChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(A.a)({},r,n),function(){return console.log(a.state)})},a.phoneKeyDown=function(e){if(8!==e.keyCode&&!(a.state.phone.length>=13)){e.preventDefault();var t=e.key,n=new RegExp("^[0-9]*$"),r=e.target.value,l=r.replace("(","").replace(")","").replace("-","");switch(t){case"(":if(0!==l.length||-1!==r.indexOf(t))return;break;case")":if(3!==l.length||-1!==r.indexOf(t))return;break;case"-":if(6!==l.length||-1!==r.indexOf(t))return;break;default:if(!n.test(t))return}(l="".concat(l).concat(t).replace("(","").replace(")","").replace("-","")).length>5?l="("+l.slice(0,3)+")"+l.slice(3,6)+"-"+l.slice(6):l.length>2?l="("+l.slice(0,3)+")"+l.slice(3,l.length):l.length>0?l="("+l.slice(0,l.length):0===l.length&&(l="("),e.target.value=l,a.setState({phone:l},function(){var e=document.querySelector("#phone");13!==a.state.phone.length?e.setCustomValidity("Valid phone number required"):e.setCustomValidity("")})}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e={header:{marginTop:"0px",color:"white"},smallHeaders:{color:"white",textAlign:"center"},mail:{width:"100px",height:"100px"},background:{backgroundColor:"black"}};return r.a.createElement(E.Element,{name:"Contact"},r.a.createElement(j.a,{style:e.background,className:"p-5 d-flex justify-content-center"},r.a.createElement(k.a,{xs:12,sm:10,md:8,lg:6},r.a.createElement(j.a,{className:"d-flex align-items-center"},r.a.createElement(k.a,{md:4,className:"d-flex justify-content-center"},r.a.createElement("img",{style:e.mail,alt:"mail-logo",src:"/images/mail.png"})),r.a.createElement(k.a,{md:6},r.a.createElement("h1",{style:e.header,className:"text-center text-md-left"},"CONTACT"))),r.a.createElement("br",null),r.a.createElement(R.a,{onSubmit:this.submit},r.a.createElement(H.a,null,r.a.createElement(D.a,{invalid:!0,name:"name",onChange:this.handleChange,type:"text",placeholder:"Name",required:!0})),r.a.createElement(H.a,null,r.a.createElement(D.a,{invalid:!0,name:"email",onChange:this.handleChange,type:"email",placeholder:"Email",required:!0})),r.a.createElement(H.a,null,r.a.createElement(D.a,{id:"phone",invalid:!0,name:"phone",onKeyDown:this.phoneKeyDown,onChange:this.handleChange,type:"text",placeholder:"Phone Number",minLength:13,maxLength:13,required:!0})),r.a.createElement(H.a,null,r.a.createElement(D.a,{name:"message",onChange:this.handleChange,type:"textarea",placeholder:"Message"})),r.a.createElement(H.a,{row:!0},r.a.createElement(k.a,{className:"d-flex justify-content-center"},r.a.createElement(M.a,{className:"btn btn-dark",type:"submit"},"Submit")))),r.a.createElement("br",null),r.a.createElement("h6",{style:e.smallHeaders},"ernesto.garcia.lb@gmail.com"),r.a.createElement("h6",{style:e.smallHeaders},"(209)592-8539"))))}}]),t}(r.a.Component),G=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{fluid:!0},r.a.createElement(v,null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(O,null),r.a.createElement(C,null),r.a.createElement(I,null),r.a.createElement(F,null)))}}]),t}(r.a.Component);i.a.render(r.a.createElement(G,null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.f0e6d79d.chunk.js.map