"use strict";(self.webpackChunkalosaur_docs=self.webpackChunkalosaur_docs||[]).push([[407],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(t),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return t?n.createElement(f,i(i({ref:r},l),{},{components:t})):n.createElement(f,i({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3240:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={sidebar_position:4},c="CORS",u={unversionedId:"techniques/CORS",id:"techniques/CORS",isDocsHomePage:!1,title:"CORS",description:"Cross-Origin Resource Sharing (CORS) \u2014 \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0438\u0439 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 HTTP-\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438, \u0447\u0442\u043e\u0431\u044b \u0434\u0430\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0430\u0433\u0435\u043d\u0442\u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043d\u0430 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u043c \u0440\u0435\u0441\u0443\u0440\u0441\u0430\u043c \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043d\u0430 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0435 (\u0434\u043e\u043c\u0435\u043d\u0435), \u043e\u0442\u043b\u0438\u0447\u043d\u043e\u043c \u043e\u0442 \u0442\u043e\u0433\u043e, \u0447\u0442\u043e \u0441\u0430\u0439\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0432 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442. \u0413\u043e\u0432\u043e\u0440\u044f\u0442, \u0447\u0442\u043e \u0430\u0433\u0435\u043d\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0434\u0435\u043b\u0430\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441 \u0441 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430 (cross-origin HTTP request), \u0435\u0441\u043b\u0438 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u043e\u0442\u043b\u0438\u0447\u0430\u0435\u0442\u0441\u044f \u043e\u0442 \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c\u043e\u0433\u043e \u0440\u0435\u0441\u0443\u0440\u0441\u0430 \u0434\u043e\u043c\u0435\u043d\u043e\u043c, \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u043e\u043c \u0438\u043b\u0438 \u043f\u043e\u0440\u0442\u043e\u043c.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/techniques/CORS.md",sourceDirName:"techniques",slug:"/techniques/CORS",permalink:"/ru/docs/techniques/CORS",editUrl:"https://github.com/alosaur/alosaur.github.io/edit/master/docs/techniques/CORS.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"SPA (Single page application)",permalink:"/ru/docs/techniques/SPA"},next:{title:"Microservice",permalink:"/ru/docs/techniques/Microservice"}},l=[],p={toc:l};function m(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cors"},"CORS"),(0,a.kt)("p",null,"Cross-Origin Resource Sharing (CORS) \u2014 \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0438\u0439 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 HTTP-\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438, \u0447\u0442\u043e\u0431\u044b \u0434\u0430\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0430\u0433\u0435\u043d\u0442\u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043d\u0430 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u043c \u0440\u0435\u0441\u0443\u0440\u0441\u0430\u043c \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043d\u0430 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0435 (\u0434\u043e\u043c\u0435\u043d\u0435), \u043e\u0442\u043b\u0438\u0447\u043d\u043e\u043c \u043e\u0442 \u0442\u043e\u0433\u043e, \u0447\u0442\u043e \u0441\u0430\u0439\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0432 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442. \u0413\u043e\u0432\u043e\u0440\u044f\u0442, \u0447\u0442\u043e \u0430\u0433\u0435\u043d\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0434\u0435\u043b\u0430\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441 \u0441 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430 (cross-origin HTTP request), \u0435\u0441\u043b\u0438 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u043e\u0442\u043b\u0438\u0447\u0430\u0435\u0442\u0441\u044f \u043e\u0442 \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c\u043e\u0433\u043e \u0440\u0435\u0441\u0443\u0440\u0441\u0430 \u0434\u043e\u043c\u0435\u043d\u043e\u043c, \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u043e\u043c \u0438\u043b\u0438 \u043f\u043e\u0440\u0442\u043e\u043c."),(0,a.kt)("p",null,"\u0412 Alosaur \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u043c Middleware - CorsBuilder, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442\u044c \u043e\u0442\u0434\u0430\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 \u043a\u0430\u043a \u0434\u043b\u044f \u043e\u0434\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0433\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { HomeArea } from "./areas/home/home.area.ts";\nimport { App, CorsBuilder } from "alosaur/mod.ts";\n\nconst app = new App({\n  areas: [HomeArea],\n});\n\n// Accept any headers\napp.useCors(\n  new CorsBuilder()\n    .AllowAnyOrigin()\n    .AllowAnyMethod()\n    .AllowAnyHeader(),\n);\n\n// Specific config\n// app.useCors(\n//   new CorsBuilder()\n//     .WithOrigins("origin")  // Access-Control-Allow-Origin\n//     .WithMethods("GET")     // Access-Control-Allow-Methods\n//     .WithHeaders("Header"), // Access-Control-Allow-Headers\n// );\n\napp.listen();\n')),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Example")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/alosaur/alosaur/tree/master/examples/cors"},"https://github.com/alosaur/alosaur/tree/master/examples/cors")))))}m.isMDXComponent=!0}}]);