(this["webpackJsonplights-out"]=this["webpackJsonplights-out"]||[]).push([[0],[,,,,,,,,,function(t,e,i){},function(t,e,i){},function(t,e,i){},,function(t,e,i){},,function(t,e,i){"use strict";i.r(e);var c=i(1),n=i.n(c),s=i(4),a=i.n(s),l=(i(9),i(10),i(11),i(0));var r=function(){return Object(l.jsx)("div",{style:{height:"20vh"},className:"d-flex align-items-end justify-content-center",children:Object(l.jsx)("h1",{children:Object(l.jsx)("span",{id:"title",className:"cursive glow",children:"Lights Out"})})})},o=i(2);var j=function(t){var e=t.isLit,i=t.location,c=t.setLocation;return Object(l.jsx)("div",{className:e?"bg-light":"bg-secondary",style:{width:"100%",paddingTop:"100%",position:"relative",cursor:"pointer"},onClick:function(){return c(i)}})};i(13);var x=function(t){var e=t.size,i=Object(c.useState)(),n=Object(o.a)(i,2),s=n[0],a=n[1],r=Object(c.useState)(),x=Object(o.a)(r,2),d=x[0],u=x[1],h=Object(c.useState)(!1),b=Object(o.a)(h,2),v=b[0],f=b[1];Object(c.useEffect)((function(){O()}),[]),Object(c.useEffect)((function(){d&&(m(d),p()&&g())}),[d]);var O=function(){e=e.split("x");for(var t=[],i=0;i<e[0];i++){for(var c=[],n=0;n<e[1];n++){var s=Math.random()<.5;c.push({isLit:s})}t.push(c)}a(t)},m=function(t){var e=t.x,i=t.y;s[e][i].isLit=!s[e][i].isLit,s[e].length-1>e&&(s[e+1][i].isLit=!s[e+1][i].isLit),s[i].length-1>i&&(s[e][i+1].isLit=!s[e][i+1].isLit),0!=e&&(s[e-1][i].isLit=!s[e-1][i].isLit),0!=i&&(s[e][i-1].isLit=!s[e][i-1].isLit),a(s),u(null)},p=function(){return!s.map((function(t){if(t.some((function(t){return t.isLit})))return!1})).includes(!1)},g=function(){document.getElementById("title").classList.remove("glow"),N()},N=function(){var t=document.getElementById("title"),e="0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6";setTimeout((function(){return t.style.textShadow=e}),600),setTimeout((function(){return t.style.textShadow="none"}),800),setTimeout((function(){return t.style.textShadow=e}),1400),setTimeout((function(){var i=setInterval((function(){t.style.textShadow=e,setTimeout((function(){t.style.textShadow="none"}),200)}),200);setTimeout((function(){clearInterval(i),t.classList.add("fade-dark"),f(!0)}),1500)}),1800)};return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("table",{className:"board h-100 w-100 mt-3",style:{maxHeight:"650px"},children:s?s.map((function(t,e){var i=t.length/100;return Object(l.jsx)("tr",{className:"w-100",children:t.map((function(t,c){return Object(l.jsx)("td",{style:{width:i,height:i},children:Object(l.jsx)(j,{isLit:t.isLit,location:{x:e,y:c},setLocation:u})})}))})})):null}),v?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"show-win text-light",children:[Object(l.jsx)("p",{className:"slide-up glow-up",children:"YOU"}),Object(l.jsx)("p",{className:"flip-up glow-up",zzz:!0,children:"WON"})]}),Object(l.jsxs)("div",{id:"confettis",children:[Object(l.jsx)("div",{class:"confetti"}),Object(l.jsx)("div",{class:"confetti"}),Object(l.jsx)("div",{class:"confetti"}),Object(l.jsx)("div",{class:"confetti"}),Object(l.jsx)("div",{class:"confetti"}),Object(l.jsx)("div",{class:"confetti"}),Object(l.jsx)("div",{class:"confetti"}),Object(l.jsx)("div",{class:"confetti"}),Object(l.jsx)("div",{class:"confetti"})]})]}):null]})};var d=function(){var t=Object(c.useState)("5x5"),e=Object(o.a)(t,2),i=e[0],n=e[1],s=function(t){n(t.target.innerHTML)};return Object(l.jsxs)("div",{id:"tabs",className:"h-100",style:{width:"80%",maxWidth:"650px"},children:[Object(l.jsxs)("ul",{className:"nav nav-tabs",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("p",{className:"nav-link text-light ".concat("5x5"==i?"active text-dark":null),onClick:s,children:"5x5"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("p",{className:"nav-link text-light ".concat("6x6"==i?"active text-dark":null),onClick:s,children:"6x6"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("p",{className:"nav-link text-light ".concat("7x7"==i?"active text-dark":null),onClick:s,children:"7x7"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("p",{className:"nav-link text-light ".concat("8x8"==i?"active text-dark":null),onClick:s,children:"8x8"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("p",{className:"nav-link text-light ".concat("9x9"==i?"active text-dark":null),onClick:s,children:"9x9"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("p",{className:"nav-link text-light ".concat("10x10"==i?"active text-dark":null),onClick:s,children:"10x10"})})]}),Object(l.jsx)(x,{size:i},i)]})};var u=function(){return Object(l.jsxs)("div",{className:"App bg-dark",children:[Object(l.jsx)(r,{}),Object(l.jsx)("div",{className:"board-container d-flex justify-content-center",style:{minHeight:"80vh",width:"100vw"},children:Object(l.jsx)(d,{})})]})};i(14);a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.6369597b.chunk.js.map