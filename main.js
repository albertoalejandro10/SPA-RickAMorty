!function(n){var e={};function t(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return n[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,a){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:a})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(a,r,function(e){return n[e]}.bind(null,r));return a},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);var a=()=>'\n        <div class="Header-main">\n            <div class="Header-">\n                <h1>\n                    <a href="/">\n                        100tifi.com\n                    </a>\n                </h1>\n            </div>\n            <div class="Header-nav">\n                <a href="#/about">\n                    About\n                </a>\n            </div>\n        </div>\n    ';const r="https://rickandmortyapi.com/api/character/";var i=async n=>{const e=n?`${r}${n}`:r;try{const n=await fetch(e);return await n.json()}catch(n){console.log("Fetch Error",n)}};var c=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/";var s=()=>'\n        <div class="Error404">\n            <h2>Error 404</h2>\n        </div>\n    ';var o=n=>{if(n.length<3){return"/"===n?n:"/:id"}return"/"+n};const l={"/":async()=>`\n        <div class="Characters">\n            ${(await i()).results.map(n=>`\n                <article class="Character-item">\n                    <a href="#/${n.id}/">\n                        <img src="${n.image}" alt="${n.name}">\n                        <h2>${n.name}</h2>\n                    </a>\n                </article>\n            `).join("")}\n        </div>\n    `,"/:id":async()=>{const n=c(),e=await i(n),{image:t,name:a,episode:r,status:s,species:o,gender:l,origin:d,location:u}=e;return`\n        <div class="Characters-in">\n            <article class="Characters-card">\n                <img src="${t}" alt="${a}">\n                <h2>${a}</h2>\n            </article>\n            <article class="Characters-card">\n                <h3>Episodes: <span>${r.length}</span></h3>\n                <h3>Status:  <span>${s}</span></h3>\n                <h3>Species: <span>${o}</span></h3>\n                <h3>Gender:  <span>${l}</span></h3>\n                <h3>Origin:  <span>${d}</span></h3>\n                <h3>Last Location: ${u.name}</h3>\n            </article>\n        </div>\n    `},"/contact":"Contact"};var d=async()=>{const n=document.getElementById("header"),e=document.getElementById("content");n.innerHTML=await a();let t=c(),r=await o(t),i=l[r]?l[r]:s;e.innerHTML=await i()};window.addEventListener("load",d),window.addEventListener("hashchange",d)}]);