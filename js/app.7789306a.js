(function(e){function a(a){for(var n,o,c=a[0],s=a[1],l=a[2],d=0,u=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(t,o)&&t[o]&&u.push(t[o][0]),t[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);m&&m(a);while(u.length)u.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var e,a=0;a<r.length;a++){for(var i=r[a],n=!0,o=1;o<i.length;o++){var c=i[o];0!==t[c]&&(n=!1)}n&&(r.splice(a--,1),e=s(s.s=i[0]))}return e}var n={},o={app:0},t={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",intro:"intro",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"bf23245d",intro:"59d0e5ee",sintesis:"7e97bf83",tema1:"1af5fe51",tema2:"7a3ad4f1",tema3:"9c9d4aca"}[e]+".js"}function s(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.e=function(e){var a=[],i={actividad:1};o[e]?a.push(o[e]):0!==o[e]&&i[e]&&a.push(o[e]=new Promise((function(a,i){for(var n="css/"+({actividad:"actividad",intro:"intro",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"2f1ec4d4",intro:"31d6cfe0",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",t=s.p+n,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===n||d===t))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],d=l.getAttribute("data-href");if(d===n||d===t)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var n=a&&a.target&&a.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete o[e],m.parentNode.removeChild(m),i(r)},m.href=t;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){o[e]=0})));var n=t[e];if(0!==n)if(n)a.push(n[2]);else{var r=new Promise((function(a,i){n=t[e]=[a,i]}));a.push(n[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(m);var i=t[e];if(0!==i){if(i){var n=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,i[1](u)}t[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},s.m=e,s.c=n,s.d=function(e,a,i){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)s.d(i,n,function(a){return e[a]}.bind(null,n));return i},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var m=d;r.push([0,"chunk-vendors"]),i()})({0:function(e,a,i){e.exports=i("56d7")},1430:function(e,a,i){e.exports=i.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,i){"use strict";i.r(a);var n=i("2b0e"),o=function(){var e=this,a=e._self._c;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view")],1)],1),a("BarraAvance")],1)},t=[],r={name:"App",data:()=>({menuOpen:!1}),computed:{menuState(){return this.$store.getters.isMenuOpen}},mounted(){this.$aos.init({offset:100})}},c=r,s=i("2877"),l=Object(s["a"])(c,o,t,!1,null,null,null),d=l.exports,u=i("8c4f"),m=i("8237"),p=i("e844"),f=i("32d3"),g=i("b154"),v=i("0a9a"),b=i("58f7");n["a"].use(u["a"]);const h=new u["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:()=>i.e("intro").then(i.bind(null,"5167"))},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:()=>i.e("tema1").then(i.bind(null,"02c8"))},{path:"tema2",name:"tema2",component:()=>i.e("tema2").then(i.bind(null,"fd11"))},{path:"tema3",name:"tema3",component:()=>i.e("tema3").then(i.bind(null,"eb46"))}]},{path:"/actividad",name:"actividad",component:()=>i.e("actividad").then(i.bind(null,"4298"))},{path:"/glosario",name:"glosario",component:f["a"]},{path:"/complementario",name:"complementario",component:b["a"]},{path:"/referencias",name:"referencias",component:g["a"]},{path:"/sintesis",name:"sintesis",component:()=>i.e("sintesis").then(i.bind(null,"15a3"))},{path:"/creditos",name:"creditos",component:v["a"]}],scrollBehavior(e,a){if(e.hash){const i={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?i:new Promise(e=>{setTimeout(()=>{e(i)},500)})}setTimeout(()=>{window.scrollTo({left:0,top:0,behavior:"auto"})},100)}});var w=h,y=i("2f62");n["a"].use(y["a"]);var C=new y["a"].Store({state:{loading:0,menuOpen:!1},getters:{isLoading:e=>!!e.loading,isMenuOpen:e=>e.menuOpen},mutations:{toggleMenu(e,a){e.menuOpen=a},increment(e){e.loading++},decrease(e){e.loading--}},actions:{toggleMenu({commit:e},a){e("toggleMenu",a)},increment({commit:e}){e("increment")},decrease({commit:e}){e("decrease")}}}),S=i("9ea5"),A={global:{Name:"Calidad de las señales analógicas",Description:"Los sistemas de comunicaciones analógicas requieren procesos de modulación y filtros para transmitir señales con calidad. Parámetros como el ruido, la relación señal a ruido, y la impedancia son fundamentales. La modulación AM y FM y los filtros para diversas frecuencias permiten una transmisión eficiente y minimizan interferencias, mejorando así la fidelidad de la señal transmitida.",imagenBannerPrincipal:i("74b5"),fondoBannerPrincipal:i("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:i("71f8")},{clases:["banner-principal-decorativo-2"],imagen:i("8f04")},{clases:["banner-principal-decorativo-3"],imagen:i("7d72")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Parámetros de calidad y transmisión",desarrolloContenidos:!0},{nombreRuta:"tema2",numero:"2",titulo:"Modulación",desarrolloContenidos:!0},{nombreRuta:"tema3",numero:"3",titulo:"Filtros y receptores de radiofrecuencia",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/83240110_CF03_DU.pdf"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Parámetros de calidad y transmisión",referencia:"javier6 diaz. (2024). Parámetros de Calidad de transmisión. [Archivo de video] YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=VjCrAjOcYB8&ab_channel=javier6diaz"},{tema:"Modulación",referencia:"Universitat Politécnica de Valéncia - UPV. (2021). Introducción a las radiocomunicaciones. Modulaciones analógicas | 35/97 | UPV. [Archivo de video] YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=W-4hvDam7Uo&ab_channel=UniversitatPolit%C3%A8cnicadeVal%C3%A8ncia-UPV"},{tema:"Filtros y receptores de radiofrecuencia",referencia:"Universitat Politécnica de Valéncia - UPV. (2021). Emisores y receptores. Modulación de frecuencia (FM) | | UPV [Archivo de video] YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=tgf3CuUuBj4&ab_channel=UniversitatPolit%C3%A8cnicadeVal%C3%A8ncia-UPV"}],glosario:[{termino:"Amplificador de señal",significado:"dispositivo que incrementa la potencia de una señal eléctrica, utilizado para mejorar la transmisión en sistemas de comunicación."},{termino:"Ecualizador",significado:"dispositivo o filtro que ajusta la amplitud de las frecuencias de una señal para mejorar su calidad o adaptarla a un propósito específico."},{termino:"Filtro <em>antialiasing</em>",significado:"filtro que evita la distorsión en señales digitalizadas, eliminando frecuencias superiores al doble de la frecuencia de muestreo antes de la conversión digital."},{termino:"Filtro pasa altos",significado:"filtro que permite el paso de frecuencias altas y atenúa las frecuencias por debajo de la frecuencia de corte."},{termino:"Filtro pasa bajos",significado:"tipo de filtro que permite el paso de frecuencias bajas y atenúa las altas a partir de la frecuencia de corte."},{termino:"Frecuencia de corte",significado:"punto en el que un filtro empieza a atenuar significativamente las frecuencias superiores o inferiores en un sistema de filtrado."},{termino:"Impedancia",significado:"oposición de un circuito de corriente alterna al cambio de la corriente o voltaje, con magnitud y fase."},{termino:"Modulación",significado:"proceso mediante el cual se altera la señal portadora en amplitud o frecuencia para transmitir información en comunicaciones analógicas."},{termino:"Onda portadora",significado:"señal que se utiliza para transportar la información en sistemas de modulación, ya sea en frecuencia o amplitud."},{termino:"Relación señal a ruido",significado:"medida que compara la potencia de la señal deseada con la potencia del ruido de fondo, afectando la claridad de la comunicación."}],referencias:[{referencia:"Departamento de Ingeniería Telemática. (2004). <em>Transmisión y digitalización</em>.",link:""},{referencia:"Franco, M. (2016). <em>Filtros analógicos</em>. Universidad Complutense de Madrid.",link:""},{referencia:"Couch, L. W. (2008). <em>Sistemas de comunicación digitales y analógicos</em>. Prentice Hall.",link:""},{referencia:"Molina, C. E. (s. f.). <em>Factores que afectan la transmisión de señales</em>.",link:""},{referencia:"Pérez Vega, C. (s. f.). <em>Ruido</em>.",link:""},{referencia:"Santa Cruz, Ó. M. (2010). <em>Transmisión de modulación de amplitud</em>.",link:""},{referencia:"Sabando, M. V. (2014). <em>Transformadas de Fourier y telecomunicaciones</em>.",link:""},{referencia:"Universidad Tecnológica Nacional. (s. f.). <em>Receptores de RF</em>.",link:""},{referencia:"Wayne, T. (2003). <em>Sistemas de comunicaciones electrónicas</em>. Pearson Educación.",link:""}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Responsable del ecosistema",centro:"Dirección General"},{nombre:"Olga Constanza Bermúdez Jaimes",cargo:"Responsable de línea de producción",centro:"Centro de Servicios de Salud - Regional Antioquia"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Fabio Enrique Combariza",cargo:"Experto temático",centro:"Equipo de Adecuación Gráfica y Didáctica de Recursos Educativos - Regional Risaralda"},{nombre:"Paola Alexandra Moya Peralta",cargo:"Evaluadora instruccional",centro:"Centro de Servicios de Salud - Regional Antioquia"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Carlos Julián Ramírez Benítez",cargo:"Diseñador de contenidos digitales",centro:"Centro de Servicios de Salud - Regional Antioquia"},{nombre:"Edwin Sneider Velandia Suárez",cargo:"Desarrollador <i>full stack</i>",centro:"Centro de Servicios de Salud - Regional Antioquia"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Luis Gabriel Urueta Álvarez",cargo:"Validador de recursos educativos digitales",centro:"Centro de Servicios de Salud - Regional Antioquia"},{nombre:"Margarita Marcela Medrano Gómez",cargo:"Evaluador para contenidos inclusivos y accesibles",centro:"Centro de Servicios de Salud - Regional Antioquia"},{nombre:"Daniel Ricardo Mutis Gómez",cargo:"Evaluador para contenidos inclusivos y accesibles",centro:"Centro de Servicios de Salud - Regional Antioquia"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}};i("a3a0");const R=i("9224");n["a"].use(S["a"],{config:A,packageJson:R}),new n["a"]({router:w,store:C,render:e=>e(d)}).$mount("#app")},"5ccd":function(e,a,i){e.exports=i.p+"img/audio.058779f0.svg"},"71f8":function(e,a,i){e.exports=i.p+"img/banner-principal-decorativo-1.0b1cb34d.svg"},"74b5":function(e,a,i){e.exports=i.p+"img/banner-princiapal.7256a6bd.png"},"7a82":function(e,a,i){e.exports=i.p+"img/aumentar.4890ae42.svg"},"7d72":function(e,a,i){e.exports=i.p+"img/banner-principal-decorativo-3.12b8af3c.svg"},"8f04":function(e,a,i){e.exports=i.p+"img/banner-principal-decorativo-2.d6d82f3f.svg"},9224:function(e){e.exports=JSON.parse('{"name":"SENA-2025","version":"1.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"@fortawesome/fontawesome-free":"^6.5.1","@popperjs/core":"^2.11.8","aos":"^2.3.4","bootstrap":"^5.3.2","font-awesome":"^4.7.0","ecored-pkg-fliz":"0.0.4","vue":"^2.7.14","vue-router":"^3.6.5","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.19","@vue/cli-plugin-eslint":"^4.5.19","@vue/cli-plugin-router":"^4.5.19","@vue/cli-plugin-vuex":"^4.5.19","@vue/cli-service":"^4.5.19","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.7.14"}}')},a3a0:function(e,a,i){},a724:function(e,a,i){e.exports=i.p+"img/reducir.68fb49e8.svg"},ce7c:function(e,a,i){e.exports=i.p+"img/fondo-banner-principal.ed529605.png"},e1f5:function(e,a,i){e.exports=i.p+"img/creditos-cc.4836eb56.svg"},ef52:function(e,a,i){e.exports=i.p+"img/creditos-img.689712e2.svg"},f034:function(e,a,i){e.exports=i.p+"img/pause.8df843e4.svg"},f5ad:function(e,a,i){e.exports=i.p+"img/logo-sena.47d29d11.svg"}});
//# sourceMappingURL=app.7789306a.js.map