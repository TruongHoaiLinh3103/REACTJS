import{i as l}from"./preview.odIbT5DC.js";import{o as h}from"./hoisted.DGXgjkj7.js";function p(){document.querySelectorAll("[data-js-no-preview]").forEach(t=>{l()&&(t.parentNode.removeChild(t),document.documentElement.classList.add("PreviewMode"))})}const r={rule:"h2[id]",className:"local-anchor anchor",text:"#",shouldAppend:!0};function f(){document.querySelectorAll("[data-js-anchors]").forEach(t=>{const e=JSON.parse(t.getAttribute("data-js-anchors")||"{}"),n=Array.isArray(e)?e.length?e:[r]:[Object.assign({},r,e)];for(const{rule:o,className:c,text:d,shouldAppend:a}of n)for(const i of t.querySelectorAll(o)){if(!i.hasAttribute("id"))continue;const u=i.getAttribute("id"),s=document.createElement("a");s.setAttribute("href",`#${u}`),s.setAttribute("class",c),s.setAttribute("aria-hidden","true"),s.innerText=String(d||r.text),a?i.appendChild(s):m(i,s)}})}function m(t,e){t.firstChild?t.insertBefore(e,t.firstChild):t.appendChild(e)}p();f();function A(t){b(t),j(t)}function b(t){const e=document,n=e.createElement("script");n.src=`https://${t}/embed.js`,n.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(n)}function j(t){const e=document,n=e.createElement("script");n.src=`https://${t}/count.js`,n.id="dsq-count-scr",n.async=!0,(e.head||e.body).appendChild(n)}function q(){document.querySelectorAll("[data-js-disqus]").forEach(t=>{const e=JSON.parse(t.getAttribute("data-js-disqus")),n=t.parentNode;h(n,()=>{g(e,n)})})}function g(t,e){e.setAttribute("hidden",!0),window.disqus_config=function(){this.page.url=t.url,this.page.identifier=t.identifier},A(t.host),e.removeAttribute("hidden")}q();