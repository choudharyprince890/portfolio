(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){e.exports=a.p+"static/media/sklearn_genetic_opt.23273bc8.png"},46:function(e,t,a){},48:function(e,t,a){},53:function(e,t,a){e.exports=a(98)},74:function(e,t,a){},76:function(e,t,a){},78:function(e,t,a){},81:function(e,t,a){e.exports=a.p+"static/media/graph_embeddings.fed0850a.png"},82:function(e,t,a){e.exports=a.p+"static/media/kafkaml.9c0f9867.png"},83:function(e,t,a){e.exports=a.p+"static/media/scikit_pipes.8ba027d9.png"},84:function(e,t,a){e.exports=a.p+"static/media/portfolio.4b632d51.png"},89:function(e,t,a){e.exports=a.p+"static/media/fastapi_sklearn.f7d742fc.png"},91:function(e,t,a){},95:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),l=a(19),c=a.n(l),r=a(29),o=a(3),s=a(51),m=a(9),u=a(38),d=a(65),p=a(10),h=a(39),E=(a(44),a(28)),f=a(34),g={sidebarData:[{id:"menu-0",title:"Home",path:"/portfolio",icon:i.a.createElement(p.d,{size:35}),className:"nav-text"},{id:"menu-1",title:"Projects",path:"/projects",icon:i.a.createElement(p.e,{size:35}),className:"nav-text"},{id:"menu-2",title:"Blogs",path:"/blogs",icon:i.a.createElement(E.a,{size:35}),className:"nav-text"},{id:"menu-3",title:"Skills",path:"/skills",icon:i.a.createElement(p.a,{size:35}),className:"nav-text"},{id:"menu-3",title:"Resume",path:"./resume.pdf",icon:i.a.createElement(f.b,{size:35}),className:"nav-text"}]},k=function(e){return i.a.createElement(h.a,null,g.sidebarData.map(function(t){return i.a.createElement(h.a.Item,{key:t.id},i.a.createElement(h.a.Link,{as:r.b,to:t.path,onClick:e.onSelection},t.icon,i.a.createElement("span",null,t.title)))}))},b=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],l=t[1];return i.a.createElement(u.a,{className:"navbar",expand:"sm",expanded:a},i.a.createElement(d.a,{fluid:!0},i.a.createElement(u.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:function(){return l(!a&&"expanded")}},i.a.createElement(p.f,{className:"toggle-icon"})),i.a.createElement(u.a.Collapse,{id:"responsive-navbar-nav"},i.a.createElement(k,{onSelection:function(){l(!1)}}))))},y=a(101),N=a(102),v=a(66),w=a.n(v),S=function(e){return i.a.createElement(w.a,{options:{strings:e.titles,autoStart:!0,loop:!0,deleteSpeed:80}})},_=function(e){var t=e.about.start,a=e.about.exit;return i.a.createElement("section",{id:"about"},i.a.createElement("div",{className:"about-card",style:{backgroundColor:"#263238"}},i.a.createElement("div",{className:"card-header"},i.a.createElement("span",{className:"iconify","data-icon":"emojione:red-circle","data-inline":"false"})," ","\xa0"," ",i.a.createElement("span",{className:"iconify","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",i.a.createElement("span",{className:"iconify","data-icon":"twemoji:green-circle","data-inline":"false"})),i.a.createElement("div",{className:"card-body font-trebuchet text-justify ml-3 mr-3",style:{height:"auto",fontSize:"132%",lineHeight:"150%",backgroundColor:"#F6F6F6",color:"#8e8d8a",padding:"2rem"}},t,i.a.createElement("br",null),a)))},x=a(42),T=(a(72),a(67)),z=(a(74),function(e){return i.a.createElement("div",{className:"tags"},e.tags.map(function(t,a){return i.a.createElement(T.a,{pill:!0,className:"tag mr-2 mb-2",key:e.id+a,bg:"secondary"},t)}))}),j=(a(76),function(e){return i.a.createElement(x.VerticalTimeline,null,e.items.map(function(e){return i.a.createElement(x.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:e.date,icon:e.icon,key:e.id},i.a.createElement("h2",{className:"vertical-timeline-element-title"},i.a.createElement("strong",null,e.title)),i.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},e.company),i.a.createElement("p",{className:"vertical-timeline-element-description"},e.description),i.a.createElement(z,{id:e.id,tags:e.tags}))}))}),C=a(68),A={greeting:i.a.createElement("h1",{className:"heading"},"Hi! I'm ",i.a.createElement("strong",{className:"main-name"}," Prince Choudhary")),titles:["Data Scientist","Machine Learning Specialist","An AI Enthusiast with an Artistic touch :)","Backend Developer"],about:{start:"Like many others, My initial interest lay in web development. I started my career as a web developer after connecting with data analytical professionals. I realize my passion for Data Analytics.",exit:"Data Science has been my point of interest for about a year now and my major interest lies in Machine Learning.."},workTimeline:[{id:"work-3",title:"Web Application Developer",company:"SUREBOT",description:"Created Rest-APIs with Django-Rest, Database with mysql and also worked on Frontend with Bootstrap for HRMS Web App.",date:"March 2022 - May 2022",icon:i.a.createElement(C.a,null),tags:["Django","Python","HTML","CSS","Bootstrap","Postman"]}]},P=(a(78),function(){return i.a.createElement("section",null,i.a.createElement(d.a,{fluid:!0,className:"home-content",id:"home"},i.a.createElement(y.a,null,i.a.createElement(N.a,{className:"home-header"},i.a.createElement("div",null,A.greeting),i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement(S,{titles:A.titles})),i.a.createElement("div",null,i.a.createElement(_,{about:A.about}))))),i.a.createElement(d.a,{fluid:!0,className:"resume-content",id:"resume"},i.a.createElement("div",{className:"col-md-8 mx-auto"},i.a.createElement(j,{items:A.workTimeline}))))}),L=(a(30),function(e){return i.a.createElement("ul",{className:"card__footer"},e.item.links.map(function(t){return i.a.createElement("li",{key:e.item.id+t.name,title:t.name},i.a.createElement("a",{className:"card__btn",href:t.url,target:e.item.target,rel:"noopener noreferrer"},t.icon))}))}),F=function(e){return i.a.createElement("div",{className:"card",key:e.item.id},i.a.createElement("a",{style:{display:"flex"},href:e.item.links[0].url,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("div",{style:{backgroundImage:"url('"+e.item.image+"')"},className:"card__img",alt:e.item.title})),i.a.createElement("div",{className:"card__body"},i.a.createElement("h2",{className:"card__title"},i.a.createElement("strong",null,e.item.title)),i.a.createElement("p",{className:"card__description"},e.item.description),i.a.createElement("hr",{className:"card__line"}),i.a.createElement(L,{item:e.item})))},M=a(23),H=a(27),D=(a(45),a(81),a(82),a(83),a(84),[{id:"project-1",title:"Shopping Hub",links:[{name:"repo",url:"https://github.com/choudharyprince890/Shopping-Hub",icon:i.a.createElement(p.c,null)},{name:"fork",url:"https://github.com/choudharyprince890/Shopping-Hub/fork",icon:i.a.createElement(M.a,null)},{name:"subscription",url:"https://youtu.be/TcPWod_mKJY",icon:i.a.createElement(p.b,null)},{name:"docs",url:"https://github.com/choudharyprince890/Shopping-Hub#readme",icon:i.a.createElement(H.a,null)}],image:"https://raw.githubusercontent.com/choudharyprince890/Shopping-Hub/main/shopping_hub/uploads/gif%20for%20git.gif",description:"Shopping Hub, an advanced and innovative ecommerce platform, With technologies like Machine learning, Deep learning, Generative AI and computer vision.",target:"_blank"},{id:"project-2",title:"AI-Powered Project Food Hub",links:[{name:"repo",url:"https://github.com/choudharyprince890/Food-Hub",icon:i.a.createElement(p.c,null)},{name:"fork",url:"https://github.com/choudharyprince890/Food-Hub/fork",icon:i.a.createElement(M.a,null)},{name:"subscription",url:"https://youtu.be/inn7iNcB7U4",icon:i.a.createElement(p.b,null)},{name:"docs",url:"https://github.com/choudharyprince890/Food-Hub#readme",icon:i.a.createElement(H.a,null)}],image:"https://raw.githubusercontent.com/choudharyprince890/Food-Hub/main/uploads/ezgif.com-crop.gif",description:"Food Hub is an innovative project that leverages cutting-edge machine learning, deep learning and transformer techniques to provide a comprehensive food-related experience to users.",target:"_blank"},{id:"project-3",title:"T-20 Cricket Score Prediction",links:[{name:"repo",url:"https://github.com/choudharyprince890/T20-Cricket-Score-Prediction",icon:i.a.createElement(p.c,null)},{name:"fork",url:"https://github.com/choudharyprince890/T20-Cricket-Score-Prediction/fork",icon:i.a.createElement(M.a,null)},{name:"docs",url:"https://github.com/choudharyprince890/T20-Cricket-Score-Prediction#readme",icon:i.a.createElement(H.a,null)}],image:"https://sportsmintmedia.com/wp-content/uploads/2021/10/Tickets-to-go-on-sale-for-ICC-T20-World-Cup.jpg",description:"scikit-learn models hyperparameters tuning and feature selection, using evolutionary algorithms.",target:"_blank"},{id:"project-4",title:"Whatsapp Chat and SentimentAnalysis",links:[{name:"repo",url:"https://github.com/choudharyprince890/Whatsapp-Chat-and-Sentiment-Analysis",icon:i.a.createElement(p.c,null)},{name:"fork",url:"https://github.com/choudharyprince890/Whatsapp-Chat-and-Sentiment-Analysis/forks",icon:i.a.createElement(M.a,null)},{name:"subscription",url:"https://choudharyprince890-whatsapp-chat-and-sentiment-analy-app-wi00ls.streamlit.app",icon:i.a.createElement(p.b,null)},{name:"docs",url:"https://github.com/choudharyprince890/Whatsapp-Chat-and-Sentiment-Analysis/blob/main/README.md",icon:i.a.createElement(H.a,null)}],image:"https://user-images.githubusercontent.com/84410675/229070644-da623b77-4cd4-43f4-82e7-aeca9be8c7cd.png",description:"The WhatsApp Chat and Sentiment Analysis allows users to perform sentiment analysis on their chat history.",target:"_blank"},{id:"project-5",title:"Stroke Predition with Machine Learning",links:[{name:"repo",url:"https://github.com/choudharyprince890/Stroke-Prediction-with-ML",icon:i.a.createElement(p.c,null)},{name:"fork",url:"https://github.com/choudharyprince890/Stroke-Prediction-with-ML/forks",icon:i.a.createElement(M.a,null)},{name:"docs",url:"https://github.com/choudharyprince890/Stroke-Prediction-with-ML#readme",icon:i.a.createElement(H.a,null)}],image:"https://raw.githubusercontent.com/choudharyprince890/Stroke-Prediction-with-ML/main/screenshots/ss1.png",description:"This project is build with flask and bootstrap framework powered by machine learning model trained on Random Forrest Algoritham with the 95.6% accuracy.",target:"_blank"},{id:"project-6",title:"Thug Life Filter",links:[{name:"repo",url:"https://github.com/choudharyprince890/Thug-Life-Filter",icon:i.a.createElement(p.c,null)},{name:"fork",url:"https://github.com/choudharyprince890/Thug-Life-Filter/forks",icon:i.a.createElement(M.a,null)},{name:"subscription",url:"https://choudharyprince890.github.io/Thug-Life-Filter/",icon:i.a.createElement(p.b,null)}],image:"https://github.com/choudharyprince890/Thug-Life-Filter/blob/main/images/ezgif.com-crop.gif",description:"This project is build with flask and bootstrap framework powered by machine learning model trained on Random Forrest Algoritham with the 95.6% accuracy.",target:"_blank"}]),I=function(){return i.a.createElement("div",{className:"wrapper"},D.map(function(e){return i.a.createElement(F,{item:e})}))},R=a(43),B=(a(46),function(e){return i.a.createElement("ul",{className:"skill-icons"},e.config.map(function(e,t){return i.a.createElement("li",{className:e.className,key:e.id},e.icon,i.a.createElement("p",{className:e.className+"-text"},e.text))}))}),O=a(12),W={mainSkills:[{id:"skills-0",className:"skill-icon",icon:i.a.createElement(O.m,{size:50}),text:"Python"},{id:"skills-2",className:"skill-icon",icon:i.a.createElement(O.n,{size:50}),text:"Scikit-Learn"},{id:"skills-3",className:"skill-icon",icon:i.a.createElement(O.o,{size:50}),text:"Tensorflow"},{id:"skills-5",className:"skill-icon",icon:i.a.createElement(O.k,{size:50}),text:"Pandas"},{id:"skills-5",className:"skill-icon",icon:i.a.createElement(O.i,{size:50}),text:"Numpy"},{id:"skills-3",className:"skill-icon",icon:i.a.createElement(O.c,{size:50}),text:"Django"},{id:"skills-5",className:"skill-icon",icon:i.a.createElement(O.d,{size:50}),text:"Flask"},{id:"skills-1",className:"skill-icon",icon:i.a.createElement(f.a,{size:50}),text:"MySQL"},{id:"skills-11",className:"skill-icon",icon:i.a.createElement(O.b,{size:50}),text:"CSS 3"},{id:"skills-12",className:"skill-icon",icon:i.a.createElement(O.f,{size:50}),text:"HTML 5"},{id:"skills-4",className:"skill-icon",icon:i.a.createElement(O.e,{size:50}),text:"Github"}],complementarySkills:[{id:"skills-5",className:"skill-icon",icon:i.a.createElement(O.j,{size:50}),text:"Open CV"},{id:"skills-6",className:"skill-icon",icon:i.a.createElement(O.l,{size:50}),text:"Postman"},{id:"skills-7",className:"skill-icon",icon:i.a.createElement(O.h,{size:50}),text:"Mongodb"},{id:"skills-7",className:"skill-icon",icon:i.a.createElement(O.a,{size:50}),text:"Bootstrap"}]},U=function(){return i.a.createElement("section",{id:"skills"},i.a.createElement("div",null,i.a.createElement("div",{className:"skills-div"},i.a.createElement("h1",{className:"main-skills-h1"},i.a.createElement("span",{className:"main-skills"},i.a.createElement("strong",null,"Main Skills & Tools"))),i.a.createElement(R.a,{effect:"bounce"},i.a.createElement("div",{className:"main-skills"},i.a.createElement(B,{config:W.mainSkills}))),i.a.createElement("h1",{className:"complementary-skills-h1"},i.a.createElement("span",{className:"complementary-skills"},i.a.createElement("strong",null,"Complementary Skills & Tools"))),i.a.createElement(R.a,{effect:"bounce"},i.a.createElement("div",{className:"complementary-skills"},i.a.createElement(B,{config:W.complementarySkills}))))))},V=(a(89),[{id:"blog-8",title:"RandomForestClassifier vs tensorflow_decision_forests",links:[{name:"article",url:"https://medium.com/@choudharyprince890/randomforestclassifier-vs-tensorflow-decision-forests-7545b850951c",icon:i.a.createElement(O.g,null)}],image:"https://miro.medium.com/v2/resize:fit:720/0*sjxs_aLzlUlLowsB",description:"Although the Random Forest algorithm is implemented in both Tensorflow and Sk-Learn, they differ in terms of some features.",target:"_blank"}]),G=function(){return i.a.createElement("div",{className:"wrapper"},V.map(function(e){return i.a.createElement(F,{item:e})}))};var J=function(){var e=Object(o.e)().pathname;return Object(n.useEffect)(function(){window.scrollTo(0,0)},[e]),null},K=a(24),q={icons:[{id:"footer-0",url:"https://github.com/choudharyprince890",className:"social-icon",target:"_blank",icon:i.a.createElement(p.c,{size:50})},{id:"footer-1",url:"https://www.linkedin.com/in/prince-choudhary-b32431192/",className:"social-icon",target:"_blank",icon:i.a.createElement(K.b,{size:50})},{id:"footer-2",url:"https://medium.com/@choudharyprince890",className:"social-icon",target:"_blank",icon:i.a.createElement(E.a,{size:50})},{id:"footer-3",url:"https://www.kaggle.com/choudharyprince",className:"social-icon",target:"_blank",icon:i.a.createElement(K.a,{size:50})}]},Q=(a(48),function(){return i.a.createElement("div",{className:"social-icons"},q.icons.map(function(e){return i.a.createElement("a",{href:e.url,className:e.className,key:e.id,style:{color:"#f5f5f5"},target:e.target,rel:"noopener noreferrer"},e.icon)}))}),Y=function(){return i.a.createElement(d.a,{fluid:!0,className:"footer"},i.a.createElement(y.a,null,i.a.createElement(N.a,{className:"footer-body"},i.a.createElement(Q,null))))};a(91),a(93);"undefined"!==typeof Object({NODE_ENV:"production",PUBLIC_URL:"/portfolio"}).REACT_APP_TRACKING_ID&&s.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"/portfolio"}).REACT_APP_TRACKING_ID);var X=function(){return i.a.createElement(r.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(b,null),i.a.createElement(J,null),i.a.createElement(o.c,null,i.a.createElement(o.a,{path:"/portfolio",exact:!0,element:i.a.createElement(P,null)}),i.a.createElement(o.a,{path:"/projects",exact:!0,element:i.a.createElement(I,null)}),i.a.createElement(o.a,{path:"/blogs",exact:!0,element:i.a.createElement(G,null)}),i.a.createElement(o.a,{path:"/skills",exact:!0,element:i.a.createElement(U,null)})),i.a.createElement(Y,null)))};a(95);c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(X,null)),document.getElementById("root"))}},[[53,2,1]]]);
//# sourceMappingURL=main.612790f9.chunk.js.map