function e(){}function t(e){return e()}function n(){return Object.create(null)}function i(e){e.forEach(t)}function r(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t}function s(t,...n){if(null==t)return e;const i=t.subscribe(...n);return i.unsubscribe?()=>i.unsubscribe():i}function a(e,t,n){e.$$.on_destroy.push(s(t,n))}globalThis.gro=new class{constructor(){this.style_elements_by_path=new Map,this.head=document.getElementsByTagName("head")[0]}register_css(e){if(this.style_elements_by_path.has(e))return;const t=document.createElement("link");this.style_elements_by_path.set(e,t),t.rel="stylesheet",t.href=e,this.head.appendChild(t)}};let l,c=!1;function h(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function d(e,t){c?(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;const t=e.childNodes,n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let e=0;e<t.length;e++){const o=h(1,r+1,(e=>t[n[e]].claim_order),t[e].claim_order)-1;i[e]=n[o]+1;const s=o+1;n[s]=e,r=Math.max(s,r)}const o=[],s=[];let a=t.length-1;for(let e=n[r]+1;0!=e;e=i[e-1]){for(o.push(t[e-1]);a>=e;a--)s.push(t[a]);a--}for(;a>=0;a--)s.push(t[a]);o.reverse(),s.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<s.length;t++){for(;n<o.length&&s[t].claim_order>=o[n].claim_order;)n++;const i=n<o.length?o[n]:null;e.insertBefore(s[t],i)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild),t!==e.actual_end_child?e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling):t.parentNode!==e&&e.appendChild(t)}function g(e,t,n){c&&!n?d(e,t):(t.parentNode!==e||n&&t.nextSibling!==n)&&e.insertBefore(t,n||null)}function u(e){e.parentNode.removeChild(e)}function m(e){return document.createElement(e)}function f(e){return document.createTextNode(e)}function p(){return f(" ")}function $(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function x(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function y(e,t,n,i){e.style.setProperty(t,n,i?"important":"")}function w(e,t,n){e.classList[n?"add":"remove"](t)}function v(e){l=e}const b=[],H=[],_=[],W=[],k=Promise.resolve();let M=!1;function z(e){_.push(e)}let D=!1;const L=new Set;function C(){if(!D){D=!0;do{for(let e=0;e<b.length;e+=1){const t=b[e];v(t),X(t.$$)}for(v(null),b.length=0;H.length;)H.pop()();for(let e=0;e<_.length;e+=1){const t=_[e];L.has(t)||(L.add(t),t())}_.length=0}while(b.length);for(;W.length;)W.pop()();M=!1,D=!1,L.clear()}}function X(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(z)}}const Y=new Set;let I;function E(e,t){e&&e.i&&(Y.delete(e),e.i(t))}function A(e,t,n,i){if(e&&e.o){if(Y.has(e))return;Y.add(e),I.c.push((()=>{Y.delete(e),i&&(n&&e.d(1),i())})),e.o(t)}}const S="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function N(e,t){e.d(1),t.delete(e.key)}function q(e){e&&e.c()}function P(e,n,o,s){const{fragment:a,on_mount:l,on_destroy:c,after_update:h}=e.$$;a&&a.m(n,o),s||z((()=>{const n=l.map(t).filter(r);c?c.push(...n):i(n),e.$$.on_mount=[]})),h.forEach(z)}function T(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function B(e,t){-1===e.$$.dirty[0]&&(b.push(e),M||(M=!0,k.then(C)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function O(t,r,o,s,a,h,d=[-1]){const g=l;v(t);const m=t.$$={fragment:null,ctx:null,props:h,update:e,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(g?g.$$.context:r.context||[]),callbacks:n(),dirty:d,skip_bound:!1};let f=!1;if(m.ctx=o?o(t,r.props||{},((e,n,...i)=>{const r=i.length?i[0]:n;return m.ctx&&a(m.ctx[e],m.ctx[e]=r)&&(!m.skip_bound&&m.bound[e]&&m.bound[e](r),f&&B(t,e)),n})):[],m.update(),f=!0,i(m.before_update),m.fragment=!!s&&s(m.ctx),r.target){if(r.hydrate){c=!0;const e=function(e){return Array.from(e.childNodes)}(r.target);m.fragment&&m.fragment.l(e),e.forEach(u)}else m.fragment&&m.fragment.c();r.intro&&E(t.$$.fragment),P(t,r.target,r.anchor,r.customElement),c=!1,C()}v(g)}class U{$destroy(){T(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function R(){}function j(e){return e()}const K=[];function F(e,t=R){let n;const i=[];function r(t){if(o=t,((r=e)!=r?o==o:r!==o||r&&"object"==typeof r||"function"==typeof r)&&(e=t,n)){const t=!K.length;for(let t=0;t<i.length;t+=1){const n=i[t];n[1](),K.push(n,e)}if(t){for(let e=0;e<K.length;e+=2)K[e][0](K[e+1]);K.length=0}}var r,o}return{set:r,update:function(t){r(t(e))},subscribe:function(o,s=R){const a=[o,s];return i.push(a),1===i.length&&(n=t(r)||R),o(e),()=>{const e=i.indexOf(a);-1!==e&&i.splice(e,1),0===i.length&&(n(),n=null)}}}}function G(e,t,n){const i=!Array.isArray(e),r=i?[e]:e,o=t.length<2;return{subscribe:F(n,(e=>{let n=!1;const s=[];let a=0,l=R;const c=()=>{if(a)return;l();const n=t(i?s[0]:s,e);o?e(n):l="function"==typeof n?n:R},h=r.map(((e,t)=>function(e,...t){if(null==e)return R;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}(e,(e=>{s[t]=e,a&=~(1<<t),n&&c()}),(()=>{a|=1<<t}))));return n=!0,c(),function(){h.forEach(j),l()}})).subscribe}}function J(t){let n,i,r;return{c(){n=m("div"),x(n,"class","handle svelte-zwbyqo"),y(n,"transform","translate3d("+t[3]+"px, "+t[4]+"px, 0)"),y(n,"width",t[2]+"px"),y(n,"height",t[2]+"px"),w(n,"hovering",t[0]),w(n,"dragging",t[1])},m(e,o){g(e,n,o),i||(r=$(n,"mousedown",t[5]),i=!0)},p(e,[t]){24&t&&y(n,"transform","translate3d("+e[3]+"px, "+e[4]+"px, 0)"),4&t&&y(n,"width",e[2]+"px"),4&t&&y(n,"height",e[2]+"px"),1&t&&w(n,"hovering",e[0]),2&t&&w(n,"dragging",e[1])},i:e,o:e,d(e){e&&u(n),i=!1,r()}}}function Q(e,t,n){let i,r,{xHandle:o}=t,{yHandle:s}=t,{handles:a}=t,{startDragging:l}=t,{hovering:c}=t,{dragging:h}=t,{size:d}=t;return e.$$set=e=>{"xHandle"in e&&n(6,o=e.xHandle),"yHandle"in e&&n(7,s=e.yHandle),"handles"in e&&n(8,a=e.handles),"startDragging"in e&&n(9,l=e.startDragging),"hovering"in e&&n(0,c=e.hovering),"dragging"in e&&n(1,h=e.dragging),"size"in e&&n(2,d=e.size)},e.$$.update=()=>{324&e.$$.dirty&&n(3,i=a[o]-d/2),388&e.$$.dirty&&n(4,r=a[s]-d/2)},[c,h,d,i,r,e=>{l(e,o,s)},o,s,a,l]}class V extends U{constructor(e){super(),O(this,e,Q,J,o,{xHandle:6,yHandle:7,handles:8,startDragging:9,hovering:0,dragging:1,size:2})}}function Z(t){let n,r,o;return{c(){n=m("div"),x(n,"class","side-handle svelte-3u81yk"),x(n,"style",t[4])},m(e,i){g(e,n,i),r||(o=[$(n,"mousedown",t[9]),$(n,"mouseenter",t[10]),$(n,"mouseleave",t[11])],r=!0)},p(e,[t]){16&t&&x(n,"style",e[4])},i:e,o:e,d(e){e&&u(n),r=!1,i(o)}}}function ee(e,t,n){let i,{handle:r}=t,{handles:o}=t,{size:s}=t,{containerWidth:a}=t,{containerHeight:l}=t,{startDragging:c}=t,{hover:h}=t,{unhover:d}=t;return e.$$set=e=>{"handle"in e&&n(0,r=e.handle),"handles"in e&&n(5,o=e.handles),"size"in e&&n(6,s=e.size),"containerWidth"in e&&n(7,a=e.containerWidth),"containerHeight"in e&&n(8,l=e.containerHeight),"startDragging"in e&&n(1,c=e.startDragging),"hover"in e&&n(2,h=e.hover),"unhover"in e&&n(3,d=e.unhover)},e.$$.update=()=>{97&e.$$.dirty&&n(4,i=((e,t,n)=>{let i,r,o,s;switch(e){case"x1":i=n,r=t.y2-t.y1,o=t.x1-n/2,s=t.y1;break;case"x2":i=n,r=t.y2-t.y1,o=t.x2-n/2,s=t.y1;break;case"y1":i=t.x2-t.x1,r=n,o=t.x1,s=t.y1-n/2;break;case"y2":i=t.x2-t.x1,r=n,o=t.x1,s=t.y2-n/2;break;default:throw new Error(`Unknown handle ${e}`)}return`width: ${i}px; height: ${r}px; transform: translate3d(${o}px, ${s}px, 0);`})(r,o,s))},[r,c,h,d,i,o,s,a,l,e=>c(e,r),()=>h(r),()=>d(r)]}class te extends U{constructor(e){super(),O(this,e,ee,Z,o,{handle:0,handles:5,size:6,containerWidth:7,containerHeight:8,startDragging:1,hover:2,unhover:3})}}function ne(t){let n,r,o;return{c(){n=m("div"),x(n,"class","pan-handle svelte-1s7s7yu"),x(n,"style",t[3])},m(e,i){g(e,n,i),r||(o=[$(n,"mousedown",t[5]),$(n,"mouseenter",t[6]),$(n,"mouseleave",t[7])],r=!0)},p(e,[t]){8&t&&x(n,"style",e[3])},i:e,o:e,d(e){e&&u(n),r=!1,i(o)}}}function ie(e,t,n){let i,{handles:r}=t,{startPanning:o}=t,{hover:s}=t,{unhover:a}=t;return e.$$set=e=>{"handles"in e&&n(4,r=e.handles),"startPanning"in e&&n(0,o=e.startPanning),"hover"in e&&n(1,s=e.hover),"unhover"in e&&n(2,a=e.unhover)},e.$$.update=()=>{var t;16&e.$$.dirty&&n(3,i=`width: ${(t=r).x2-t.x1}px; height: ${t.y2-t.y1}px; transform: translate3d(${t.x1}px, ${t.y1}px, 0);`)},[o,s,a,i,r,e=>o(e),()=>s(),()=>a()]}class re extends U{constructor(e){super(),O(this,e,ie,ne,o,{handles:4,startPanning:0,hover:1,unhover:2})}}function oe(t){let n,r,o,s,a,l,c,h,f,w;return{c(){n=m("div"),r=m("div"),r.textContent="↞",o=p(),s=m("div"),s.textContent="←",a=p(),l=m("div"),l.textContent="→",c=p(),h=m("div"),h.textContent="↠",x(r,"class","pan-button svelte-158tfeh"),x(s,"class","pan-button svelte-158tfeh"),x(l,"class","pan-button svelte-158tfeh"),x(h,"class","pan-button svelte-158tfeh"),x(n,"class","pan-buttons svelte-158tfeh"),y(n,"top","-60px")},m(e,i){g(e,n,i),d(n,r),d(n,o),d(n,s),d(n,a),d(n,l),d(n,c),d(n,h),f||(w=[$(window,"keydown",t[4]),$(r,"click",t[7]),$(s,"click",t[8]),$(l,"click",t[9]),$(h,"click",t[10])],f=!0)},p:e,i:e,o:e,d(e){e&&u(n),f=!1,i(w)}}}function se(e,t,n){let{panLeft:i}=t,{panRight:r}=t,{panUp:o}=t,{panDown:s}=t,{smallMovementDistance:a=1}=t,{largeMovementDistance:l=5}=t;const c=e=>{switch(e.key){case"ArrowLeft":return i;case"ArrowRight":return r;case"ArrowUp":return o;case"ArrowDown":return s}return null};return e.$$set=e=>{"panLeft"in e&&n(0,i=e.panLeft),"panRight"in e&&n(1,r=e.panRight),"panUp"in e&&n(5,o=e.panUp),"panDown"in e&&n(6,s=e.panDown),"smallMovementDistance"in e&&n(2,a=e.smallMovementDistance),"largeMovementDistance"in e&&n(3,l=e.largeMovementDistance)},[i,r,a,l,e=>{const t=c(e);if(t){t(e.ctrlKey?l:a),e.stopPropagation()}},o,s,()=>i(l),()=>i(a),()=>r(a),()=>r(l)]}class ae extends U{constructor(e){super(),O(this,e,se,oe,o,{panLeft:0,panRight:1,panUp:5,panDown:6,smallMovementDistance:2,largeMovementDistance:3})}}function le(e){let t,n,r,o,s,a,l,c,h,f,y,w,v,b,H,_,W,k,M,z,D,L,C;return n=new re({props:{handles:e[0],startPanning:e[16],hover:e[22],unhover:e[23]}}),o=new ae({props:{panLeft:e[10],panRight:e[11],panUp:e[12],panDown:e[13]}}),a=new te({props:{handle:"x1",handles:e[0],size:e[3],containerWidth:e[1],containerHeight:e[2],startDragging:e[15],hover:e[19],unhover:e[20]}}),c=new te({props:{handle:"x2",handles:e[0],size:e[3],containerWidth:e[1],containerHeight:e[2],startDragging:e[15],hover:e[19],unhover:e[20]}}),f=new te({props:{handle:"y1",handles:e[0],size:e[3],containerWidth:e[1],containerHeight:e[2],startDragging:e[15],hover:e[19],unhover:e[20]}}),w=new te({props:{handle:"y2",handles:e[0],size:e[3],containerWidth:e[1],containerHeight:e[2],startDragging:e[15],hover:e[19],unhover:e[20]}}),b=new V({props:{xHandle:"x1",yHandle:"y1",handles:e[0],startDragging:e[14],size:e[3],dragging:e[4]||"x1"===e[5]&&"y1"===e[6]||"x1"===e[7]||"y1"===e[7],hovering:e[9]||"x1"===e[8]||"y1"===e[8]}}),_=new V({props:{xHandle:"x2",yHandle:"y1",handles:e[0],startDragging:e[14],size:e[3],dragging:e[4]||"x2"===e[5]&&"y1"===e[6]||"x2"===e[7]||"y1"===e[7],hovering:e[9]||"x2"===e[8]||"y1"===e[8]}}),k=new V({props:{xHandle:"x1",yHandle:"y2",handles:e[0],startDragging:e[14],size:e[3],dragging:e[4]||"x1"===e[5]&&"y2"===e[6]||"x1"===e[7]||"y2"===e[7],hovering:e[9]||"x1"===e[8]||"y2"===e[8]}}),z=new V({props:{xHandle:"x2",yHandle:"y2",handles:e[0],startDragging:e[14],size:e[3],dragging:e[4]||"x2"===e[5]&&"y2"===e[6]||"x2"===e[7]||"y2"===e[7],hovering:e[9]||"x2"===e[8]||"y2"===e[8]}}),{c(){t=m("div"),q(n.$$.fragment),r=p(),q(o.$$.fragment),s=p(),q(a.$$.fragment),l=p(),q(c.$$.fragment),h=p(),q(f.$$.fragment),y=p(),q(w.$$.fragment),v=p(),q(b.$$.fragment),H=p(),q(_.$$.fragment),W=p(),q(k.$$.fragment),M=p(),q(z.$$.fragment),x(t,"class","image-handles svelte-1f45cb4")},m(i,u){g(i,t,u),P(n,t,null),d(t,r),P(o,t,null),d(t,s),P(a,t,null),d(t,l),P(c,t,null),d(t,h),P(f,t,null),d(t,y),P(w,t,null),d(t,v),P(b,t,null),d(t,H),P(_,t,null),d(t,W),P(k,t,null),d(t,M),P(z,t,null),D=!0,L||(C=[$(window,"mouseup",e[17]),$(window,"mousemove",e[18]),$(window,"mouseleave",e[17])],L=!0)},p(e,[t]){const i={};1&t&&(i.handles=e[0]),512&t&&(i.hover=e[22]),512&t&&(i.unhover=e[23]),n.$set(i);const r={};1&t&&(r.handles=e[0]),8&t&&(r.size=e[3]),2&t&&(r.containerWidth=e[1]),4&t&&(r.containerHeight=e[2]),a.$set(r);const o={};1&t&&(o.handles=e[0]),8&t&&(o.size=e[3]),2&t&&(o.containerWidth=e[1]),4&t&&(o.containerHeight=e[2]),c.$set(o);const s={};1&t&&(s.handles=e[0]),8&t&&(s.size=e[3]),2&t&&(s.containerWidth=e[1]),4&t&&(s.containerHeight=e[2]),f.$set(s);const l={};1&t&&(l.handles=e[0]),8&t&&(l.size=e[3]),2&t&&(l.containerWidth=e[1]),4&t&&(l.containerHeight=e[2]),w.$set(l);const h={};1&t&&(h.handles=e[0]),8&t&&(h.size=e[3]),240&t&&(h.dragging=e[4]||"x1"===e[5]&&"y1"===e[6]||"x1"===e[7]||"y1"===e[7]),768&t&&(h.hovering=e[9]||"x1"===e[8]||"y1"===e[8]),b.$set(h);const d={};1&t&&(d.handles=e[0]),8&t&&(d.size=e[3]),240&t&&(d.dragging=e[4]||"x2"===e[5]&&"y1"===e[6]||"x2"===e[7]||"y1"===e[7]),768&t&&(d.hovering=e[9]||"x2"===e[8]||"y1"===e[8]),_.$set(d);const g={};1&t&&(g.handles=e[0]),8&t&&(g.size=e[3]),240&t&&(g.dragging=e[4]||"x1"===e[5]&&"y2"===e[6]||"x1"===e[7]||"y2"===e[7]),768&t&&(g.hovering=e[9]||"x1"===e[8]||"y2"===e[8]),k.$set(g);const u={};1&t&&(u.handles=e[0]),8&t&&(u.size=e[3]),240&t&&(u.dragging=e[4]||"x2"===e[5]&&"y2"===e[6]||"x2"===e[7]||"y2"===e[7]),768&t&&(u.hovering=e[9]||"x2"===e[8]||"y2"===e[8]),z.$set(u)},i(e){D||(E(n.$$.fragment,e),E(o.$$.fragment,e),E(a.$$.fragment,e),E(c.$$.fragment,e),E(f.$$.fragment,e),E(w.$$.fragment,e),E(b.$$.fragment,e),E(_.$$.fragment,e),E(k.$$.fragment,e),E(z.$$.fragment,e),D=!0)},o(e){A(n.$$.fragment,e),A(o.$$.fragment,e),A(a.$$.fragment,e),A(c.$$.fragment,e),A(f.$$.fragment,e),A(w.$$.fragment,e),A(b.$$.fragment,e),A(_.$$.fragment,e),A(k.$$.fragment,e),A(z.$$.fragment,e),D=!1},d(e){e&&u(t),T(n),T(o),T(a),T(c),T(f),T(w),T(b),T(_),T(k),T(z),L=!1,i(C)}}}function ce(e,t,n){let{handles:i}=t,{moveHandles:r}=t,{containerWidth:o}=t,{containerHeight:s}=t,{size:a=40}=t,l=!1,c=!1,h=null,d=null,g=null,u=null,m=!1,f=null,p=null;const $=(e,t)=>{let n=null;e?n=t?[["x1",e],["x2",e],["y1",t],["y2",t]]:[["x1",e],["x2",e]]:t&&(n=[["y1",t],["y2",t]]),n&&r(n)};return e.$$set=e=>{"handles"in e&&n(0,i=e.handles),"moveHandles"in e&&n(21,r=e.moveHandles),"containerWidth"in e&&n(1,o=e.containerWidth),"containerHeight"in e&&n(2,s=e.containerHeight),"size"in e&&n(3,a=e.size)},[i,o,s,a,c,h,d,g,u,m,e=>$(-e,0),e=>$(e,0),e=>$(0,-e),e=>$(0,e),(e,t,i)=>{l=!0,n(5,h=t),n(6,d=i),f=e.clientX,p=e.clientY},(e,t)=>{l=!0,n(7,g=t),f=e.clientX,p=e.clientY},e=>{l=!0,n(4,c=!0),f=e.clientX,p=e.clientY},e=>{l&&(l=!1,n(4,c=!1),n(6,d=null),n(6,d=null),n(7,g=null),f=null,p=null)},e=>{if(l)if(c){const t=e.clientX-f,n=e.clientY-p;$(t,n),f=e.clientX,p=e.clientY}else if("x1"===g||"x2"===g){const t=e.clientX-f;r([[g,t]]),f=e.clientX}else if("y1"===g||"y2"===g){const t=e.clientY-p;r([[g,t]]),p=e.clientY}else{const t=e.clientX-f,n=e.clientY-p;r([[h,t],[d,n]]),f=e.clientX,p=e.clientY}},e=>{n(8,u=e)},e=>{n(8,u=null)},r,()=>n(9,m=!0),()=>n(9,m=!1)]}class he extends U{constructor(e){super(),O(this,e,ce,le,o,{handles:0,moveHandles:21,containerWidth:1,containerHeight:2,size:3})}}function de(e,t,n){const i=e.slice();return i[9]=t[n],i}function ge(e){let t;return{c(){t=m("div"),x(t,"class","bg-rect svelte-1q7iaud"),y(t,"left",e[9].left+"px"),y(t,"top",e[9].top+"px"),y(t,"width",e[9].width+"px"),y(t,"height",e[9].height+"px")},m(e,n){g(e,t,n)},p(e,n){256&n&&y(t,"left",e[9].left+"px"),256&n&&y(t,"top",e[9].top+"px"),256&n&&y(t,"width",e[9].width+"px"),256&n&&y(t,"height",e[9].height+"px")},d(e){e&&u(t)}}}function ue(e){let t,n,i,r,o,s,a=e[8],l=[];for(let t=0;t<a.length;t+=1)l[t]=ge(de(e,a,t));return o=new he({props:{handles:e[6],moveHandles:e[7],containerWidth:e[1],containerHeight:e[2]}}),{c(){t=m("div"),n=m("div"),i=p();for(let e=0;e<l.length;e+=1)l[e].c();r=p(),q(o.$$.fragment),x(n,"class","image svelte-1q7iaud"),y(n,"width",e[0].width+"px"),y(n,"height",e[0].height+"px"),y(n,"background-image","url("+e[0].url+")"),y(n,"transform","scale3d("+e[3]+", "+e[3]+", 1)"),x(t,"class","source-image svelte-1q7iaud"),y(t,"width",e[1]+"px"),y(t,"height",e[2]+"px"),y(t,"left",e[4]+"px"),y(t,"top",e[5]+"px")},m(e,a){g(e,t,a),d(t,n),d(t,i);for(let e=0;e<l.length;e+=1)l[e].m(t,null);d(t,r),P(o,t,null),s=!0},p(e,[i]){if((!s||1&i)&&y(n,"width",e[0].width+"px"),(!s||1&i)&&y(n,"height",e[0].height+"px"),(!s||1&i)&&y(n,"background-image","url("+e[0].url+")"),(!s||8&i)&&y(n,"transform","scale3d("+e[3]+", "+e[3]+", 1)"),256&i){let n;for(a=e[8],n=0;n<a.length;n+=1){const o=de(e,a,n);l[n]?l[n].p(o,i):(l[n]=ge(o),l[n].c(),l[n].m(t,r))}for(;n<l.length;n+=1)l[n].d(1);l.length=a.length}const c={};64&i&&(c.handles=e[6]),128&i&&(c.moveHandles=e[7]),2&i&&(c.containerWidth=e[1]),4&i&&(c.containerHeight=e[2]),o.$set(c),(!s||2&i)&&y(t,"width",e[1]+"px"),(!s||4&i)&&y(t,"height",e[2]+"px"),(!s||16&i)&&y(t,"left",e[4]+"px"),(!s||32&i)&&y(t,"top",e[5]+"px")},i(e){s||(E(o.$$.fragment,e),s=!0)},o(e){A(o.$$.fragment,e),s=!1},d(e){e&&u(t),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(l,e),T(o)}}}function me(e,t,n){let i,{image:r}=t,{width:o}=t,{height:s}=t,{scale:a}=t,{left:l}=t,{top:c}=t,{handles:h}=t,{moveHandles:d}=t;return e.$$set=e=>{"image"in e&&n(0,r=e.image),"width"in e&&n(1,o=e.width),"height"in e&&n(2,s=e.height),"scale"in e&&n(3,a=e.scale),"left"in e&&n(4,l=e.left),"top"in e&&n(5,c=e.top),"handles"in e&&n(6,h=e.handles),"moveHandles"in e&&n(7,d=e.moveHandles)},e.$$.update=()=>{70&e.$$.dirty&&n(8,i=[{left:0,top:0,width:h.x1,height:s},{left:h.x2,top:0,width:o-h.x2,height:s},{left:h.x1,top:0,width:h.x2-h.x1,height:h.y1},{left:h.x1,top:h.y2,width:h.x2-h.x1,height:s-h.y2}])},[r,o,s,a,l,c,h,d,i]}class fe extends U{constructor(e){super(),O(this,e,me,ue,o,{image:0,width:1,height:2,scale:3,left:4,top:5,handles:6,moveHandles:7})}}function pe(t){let n,i,r,o;return{c(){n=m("div"),i=m("div"),r=p(),o=m("div"),x(i,"style",t[1]),x(o,"style",t[2]),x(n,"class","mirror-image svelte-1xd7821"),x(n,"style",t[0])},m(e,t){g(e,n,t),d(n,i),d(n,r),d(n,o)},p(e,[t]){2&t&&x(i,"style",e[1]),4&t&&x(o,"style",e[2]),1&t&&x(n,"style",e[0])},i:e,o:e,d(e){e&&u(n)}}}function $e(e,t,n){let i,r,o,{image:s}=t,{selectionX:a}=t,{selectionY:l}=t,{selectionWidth:c}=t,{selectionHeight:h}=t,{isLeft:d}=t;const g=(e,t,n,i,r,o,s)=>{let a,l;return e?(a=t?"":"transform: rotate3d(0, 1, 0, 180deg);",l=t?`background-position: ${n.width-i}px ${-r}px;`:`background-position: ${n.width-i-o/2}px ${-r}px;`):(a=t?"transform: rotate3d(0, 1, 0, 180deg);":"",l=t?`background-position: ${n.width-i}px ${-r}px;`:`background-position: ${n.width-i-o/2}px ${-r}px;`),`width: ${o/2}px; height: ${s}px; background-image: url(${n.url}); ${l} ${a}`};return e.$$set=e=>{"image"in e&&n(3,s=e.image),"selectionX"in e&&n(4,a=e.selectionX),"selectionY"in e&&n(5,l=e.selectionY),"selectionWidth"in e&&n(6,c=e.selectionWidth),"selectionHeight"in e&&n(7,h=e.selectionHeight),"isLeft"in e&&n(8,d=e.isLeft)},e.$$.update=()=>{192&e.$$.dirty&&n(0,i=`width: ${c}px; height: ${h}px;`),504&e.$$.dirty&&n(1,r=g(!0,d,s,a,l,c,h)),504&e.$$.dirty&&n(2,o=g(!1,d,s,a,l,c,h))},[i,r,o,s,a,l,c,h,d]}class xe extends U{constructor(e){super(),O(this,e,$e,pe,o,{image:3,selectionX:4,selectionY:5,selectionWidth:6,selectionHeight:7,isLeft:8})}}function ye(e){let t,n,i,r,o;return n=new xe({props:{image:e[0],selectionX:e[1],selectionY:e[2],selectionWidth:e[3],selectionHeight:e[4],isLeft:!0}}),r=new xe({props:{image:e[0],selectionX:e[1],selectionY:e[2],selectionWidth:e[3],selectionHeight:e[4],isLeft:!1}}),{c(){t=m("div"),q(n.$$.fragment),i=p(),q(r.$$.fragment),x(t,"class","mirror-images svelte-1p0b9ky"),x(t,"style",e[5])},m(e,s){g(e,t,s),P(n,t,null),d(t,i),P(r,t,null),o=!0},p(e,[i]){const s={};1&i&&(s.image=e[0]),2&i&&(s.selectionX=e[1]),4&i&&(s.selectionY=e[2]),8&i&&(s.selectionWidth=e[3]),16&i&&(s.selectionHeight=e[4]),n.$set(s);const a={};1&i&&(a.image=e[0]),2&i&&(a.selectionX=e[1]),4&i&&(a.selectionY=e[2]),8&i&&(a.selectionWidth=e[3]),16&i&&(a.selectionHeight=e[4]),r.$set(a),(!o||32&i)&&x(t,"style",e[5])},i(e){o||(E(n.$$.fragment,e),E(r.$$.fragment,e),o=!0)},o(e){A(n.$$.fragment,e),A(r.$$.fragment,e),o=!1},d(e){e&&u(t),T(n),T(r)}}}function we(e,t,n){let i,{image:r}=t,{containerWidth:o}=t,{selectionX:s}=t,{selectionY:a}=t,{selectionWidth:l}=t,{selectionHeight:c}=t,{renderedWidth:h}=t,{renderedHeight:d}=t,{scale:g}=t;return e.$$set=e=>{"image"in e&&n(0,r=e.image),"containerWidth"in e&&n(6,o=e.containerWidth),"selectionX"in e&&n(1,s=e.selectionX),"selectionY"in e&&n(2,a=e.selectionY),"selectionWidth"in e&&n(3,l=e.selectionWidth),"selectionHeight"in e&&n(4,c=e.selectionHeight),"renderedWidth"in e&&n(7,h=e.renderedWidth),"renderedHeight"in e&&n(8,d=e.renderedHeight),"scale"in e&&n(9,g=e.scale)},e.$$.update=()=>{728&e.$$.dirty&&n(5,i=`left: ${Math.floor(o/2-h)}px; transform: scale3d(${g}, ${g}, 1); width: ${2*l}px; height: ${c}px;`)},[r,s,a,l,c,i,o,h,d,g]}class ve extends U{constructor(e){super(),O(this,e,we,ye,o,{image:0,containerWidth:6,selectionX:1,selectionY:2,selectionWidth:3,selectionHeight:4,renderedWidth:7,renderedHeight:8,scale:9})}}function be(e){let t,n,i,r,o,s,a;return i=new fe({props:{image:e[5],handles:e[6],moveHandles:e[7],width:e[2].width,height:e[2].height,scale:e[2].scale,left:e[2].x1,top:e[2].y1}}),s=new ve({props:{image:e[5],containerWidth:e[1].mirrorContainerWidth,selectionX:e[3].x1,selectionY:e[3].y1,selectionWidth:e[3].width,selectionHeight:e[3].height,renderedWidth:e[4].imageWidth,renderedHeight:e[4].imageHeight,scale:e[4].scale}}),{c(){t=m("div"),n=m("div"),q(i.$$.fragment),r=p(),o=m("div"),q(s.$$.fragment),x(n,"class","source-image-wrapper svelte-1w77c6q"),y(n,"height",e[1].sourceContainerHeight+"px"),x(o,"class","mirror-images-wrapper svelte-1w77c6q"),y(o,"height",e[1].mirrorContainerHeight+"px"),x(t,"class","mirror-twin-images svelte-1w77c6q"),y(t,"height",e[0]+"px")},m(e,l){g(e,t,l),d(t,n),P(i,n,null),d(t,r),d(t,o),P(s,o,null),a=!0},p(e,[r]){const l={};32&r&&(l.image=e[5]),64&r&&(l.handles=e[6]),128&r&&(l.moveHandles=e[7]),4&r&&(l.width=e[2].width),4&r&&(l.height=e[2].height),4&r&&(l.scale=e[2].scale),4&r&&(l.left=e[2].x1),4&r&&(l.top=e[2].y1),i.$set(l),(!a||2&r)&&y(n,"height",e[1].sourceContainerHeight+"px");const c={};32&r&&(c.image=e[5]),2&r&&(c.containerWidth=e[1].mirrorContainerWidth),8&r&&(c.selectionX=e[3].x1),8&r&&(c.selectionY=e[3].y1),8&r&&(c.selectionWidth=e[3].width),8&r&&(c.selectionHeight=e[3].height),16&r&&(c.renderedWidth=e[4].imageWidth),16&r&&(c.renderedHeight=e[4].imageHeight),16&r&&(c.scale=e[4].scale),s.$set(c),(!a||2&r)&&y(o,"height",e[1].mirrorContainerHeight+"px"),(!a||1&r)&&y(t,"height",e[0]+"px")},i(e){a||(E(i.$$.fragment,e),E(s.$$.fragment,e),a=!0)},o(e){A(i.$$.fragment,e),A(s.$$.fragment,e),a=!1},d(e){e&&u(t),T(i),T(s)}}}function He(e,t,n){let{height:i}=t,{layout:r}=t,{sourceImageLayout:o}=t,{sourceImageSelection:s}=t,{mirrorImagesLayout:a}=t,{image:l}=t,{handles:c}=t,{moveHandles:h}=t;return e.$$set=e=>{"height"in e&&n(0,i=e.height),"layout"in e&&n(1,r=e.layout),"sourceImageLayout"in e&&n(2,o=e.sourceImageLayout),"sourceImageSelection"in e&&n(3,s=e.sourceImageSelection),"mirrorImagesLayout"in e&&n(4,a=e.mirrorImagesLayout),"image"in e&&n(5,l=e.image),"handles"in e&&n(6,c=e.handles),"moveHandles"in e&&n(7,h=e.moveHandles)},[i,r,o,s,a,l,c,h]}class _e extends U{constructor(e){super(),O(this,e,He,be,o,{height:0,layout:1,sourceImageLayout:2,sourceImageSelection:3,mirrorImagesLayout:4,image:5,handles:6,moveHandles:7})}}const We=(e,t,n)=>{if(null===e.width)throw Error(`Cannot compute layout with unloaded image data: ${e.name}`);const i=e.width,r=e.height,o=t,s=Math.round(.5*n);return{width:t,height:n,imageWidth:i,imageHeight:r,sourceContainerWidth:o,sourceContainerHeight:s,mirrorContainerWidth:t,mirrorContainerHeight:n-s}},ke=(e,t)=>({name:e,url:t,el:null,width:null,height:null}),Me=[ke("Ada Lovelace","images/ada_lovelace.png"),ke("Alan Turing","images/alan_turing.jpg"),ke("Frida Kahlo","images/frida_kahlo.jpg"),ke("custom image url","")];function ze(e,t,n){const i=e.slice();return i[6]=t[n],i}function De(e){let t,n=e[6].name+"";return{c(){t=f(n)},m(e,n){g(e,t,n)},p(e,i){32&i&&n!==(n=e[6].name+"")&&function(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}(t,n)},d(e){e&&u(t)}}}function Le(e){let t,n,r,o;function s(...t){return e[24](e[6],...t)}return{c(){t=m("input"),x(t,"class","url svelte-4hm7a9"),x(t,"type","text"),x(t,"placeholder",n=e[6].name)},m(n,i){g(n,t,i),r||(o=[$(t,"input",s),$(t,"focus",e[25])],r=!0)},p(i,r){e=i,32&r&&n!==(n=e[6].name)&&x(t,"placeholder",n)},d(e){e&&u(t),r=!1,i(o)}}}function Ce(e,t){let n,i,r,o,s;function a(e,t){return"custom image url"===e[6].name?Le:De}let l=a(t),c=l(t);return{key:e,first:null,c(){n=m("label"),i=m("input"),c.c(),x(i,"type","radio"),i.__value=r=t[6].name,i.value=i.__value,t[23][0].push(i),x(n,"class","control svelte-4hm7a9"),w(n,"selected",t[6].name===t[3]),this.first=n},m(e,r){g(e,n,r),d(n,i),i.checked=i.__value===t[3],c.m(n,null),o||(s=$(i,"change",t[22]),o=!0)},p(e,o){t=e,32&o&&r!==(r=t[6].name)&&(i.__value=r,i.value=i.__value),8&o&&(i.checked=i.__value===t[3]),l===(l=a(t))&&c?c.p(t,o):(c.d(1),c=l(t),c&&(c.c(),c.m(n,null))),40&o&&w(n,"selected",t[6].name===t[3])},d(e){e&&u(n),t[23][0].splice(t[23][0].indexOf(i),1),c.d(),o=!1,s()}}}function Xe(e){let t,n;return t=new _e({props:{image:e[6],height:e[4],layout:e[7],handles:e[11],sourceImageLayout:e[8],sourceImageSelection:e[9],mirrorImagesLayout:e[10],moveHandles:e[14].move}}),{c(){q(t.$$.fragment)},m(e,i){P(t,e,i),n=!0},p(e,n){const i={};64&n&&(i.image=e[6]),16&n&&(i.height=e[4]),128&n&&(i.layout=e[7]),2048&n&&(i.handles=e[11]),256&n&&(i.sourceImageLayout=e[8]),512&n&&(i.sourceImageSelection=e[9]),1024&n&&(i.mirrorImagesLayout=e[10]),t.$set(i)},i(e){n||(E(t.$$.fragment,e),n=!0)},o(e){A(t.$$.fragment,e),n=!1},d(e){T(t,e)}}}function Ye(e){let t,n,r,o,s,a=[],l=new Map,c=e[5];const h=e=>e[6].name;for(let t=0;t<c.length;t+=1){let n=ze(e,c,t),i=h(n);l.set(i,a[t]=Ce(i,n))}let f=e[7]&&e[6]&&e[8]&&e[9]&&e[10]&&Xe(e);return{c(){t=m("div"),n=m("div"),r=m("form");for(let e=0;e<a.length;e+=1)a[e].c();o=p(),f&&f.c(),x(r,"class","svelte-4hm7a9"),x(n,"class","controls svelte-4hm7a9"),y(n,"height",Ie+"px"),x(t,"class","mirror-twins svelte-4hm7a9"),y(t,"height",e[1]+"px"),y(t,"width",e[0]+"px")},m(e,i){g(e,t,i),d(t,n),d(n,r);for(let e=0;e<a.length;e+=1)a[e].m(r,null);d(t,o),f&&f.m(t,null),s=!0},p(e,[n]){44&n&&(c=e[5],a=function(e,t,n,i,r,o,s,a,l,c,h,d){let g=e.length,u=o.length,m=g;const f={};for(;m--;)f[e[m].key]=m;const p=[],$=new Map,x=new Map;for(m=u;m--;){const e=d(r,o,m),a=n(e);let l=s.get(a);l?i&&l.p(e,t):(l=c(a,e),l.c()),$.set(a,p[m]=l),a in f&&x.set(a,Math.abs(m-f[a]))}const y=new Set,w=new Set;function v(e){E(e,1),e.m(a,h),s.set(e.key,e),h=e.first,u--}for(;g&&u;){const t=p[u-1],n=e[g-1],i=t.key,r=n.key;t===n?(h=t.first,g--,u--):$.has(r)?!s.has(i)||y.has(i)?v(t):w.has(r)?g--:x.get(i)>x.get(r)?(w.add(i),v(t)):(y.add(r),g--):(l(n,s),g--)}for(;g--;){const t=e[g];$.has(t.key)||l(t,s)}for(;u;)v(p[u-1]);return p}(a,n,h,1,e,c,l,r,N,Ce,null,ze)),e[7]&&e[6]&&e[8]&&e[9]&&e[10]?f?(f.p(e,n),1984&n&&E(f,1)):(f=Xe(e),f.c(),E(f,1),f.m(t,null)):f&&(I={r:0,c:[],p:I},A(f,1,1,(()=>{f=null})),I.r||i(I.c),I=I.p),(!s||2&n)&&y(t,"height",e[1]+"px"),(!s||1&n)&&y(t,"width",e[0]+"px")},i(e){s||(E(f),s=!0)},o(e){A(f),s=!1},d(e){e&&u(t);for(let e=0;e<a.length;e+=1)a[e].d();f&&f.d()}}}const Ie=130;function Ee(t,n,i){let r,o,l,c,h,d,g,u,m,f,p,$,x,y=e,w=()=>(y(),y=s(H,(e=>i(5,u=e))),H);t.$$.on_destroy.push((()=>y()));let{width:v}=n,{height:b}=n,{images:H}=n;w();let _=u[2].name;const W=(()=>{const{subscribe:e,set:t}=F(null);return{subscribe:e,compute:(e,n,i)=>{const r=We(e,n,i);t(r)}}})();a(t,W,(e=>i(18,m=e)));const k=(e=>{const{subscribe:t}=G(e,(e=>{if(!e)return null;const t=e.sourceContainerWidth-20-20,n=e.sourceContainerHeight-60-0,i=Math.min(1,t/e.imageWidth,n/e.imageHeight),r=Math.floor(e.imageWidth*i),o=Math.floor(e.imageHeight*i),s=Math.floor(e.sourceContainerWidth/2-r/2+0),a=s+r,l=e.sourceContainerHeight-o;return{scale:i,width:r,height:o,x1:s,x2:a,y1:l,y2:l+o}}));return{subscribe:t}})(W);a(t,k,(e=>i(19,f=e)));const M=(e=>{let t,n,i,r;const{subscribe:o}=G(e,((e,o)=>{t=o,n=e.width,i=e.height,r={width:e.width,height:e.height,x1:0,x2:e.width,y1:0,y2:e.height},o(r)}),void 0);return{subscribe:o,move:e=>{const o={...r};for(const[t,r]of e)switch(t){case"x1":o.x1=Math.min(Math.max(o.x1+r,0),o.x2);break;case"x2":o.x2=Math.max(Math.min(o.x2+r,n),o.x1);break;case"y1":o.y1=Math.min(Math.max(o.y1+r,0),o.y2);break;case"y2":o.y2=Math.max(Math.min(o.y2+r,i),o.y1)}o.width=o.x2-o.x1,o.height=o.y2-o.y1,r=o,t(o)}}})(G(k,(e=>({width:e&&e.width||0,height:e&&e.height||0}))));a(t,M,(e=>i(11,x=e)));const z=((e,t)=>{const{subscribe:n}=G([e,t],(([e,t])=>{if(!e)return null;const{scale:n}=e,i=Math.round(t.x1/n),r=Math.round(t.x2/n),o=Math.round(t.y1/n),s=Math.round(t.y2/n);return{width:r-i,height:s-o,x1:i,x2:r,y1:o,y2:s}}));return{subscribe:n}})(k,M);a(t,z,(e=>i(20,p=e)));const D=((e,t,n)=>{const{subscribe:i}=G([e,t,n],(([e,t,n])=>{if(!e||!t||!n)return null;const i=Math.min(1,e.mirrorContainerWidth/2/n.width,e.mirrorContainerHeight/n.height),r=Math.floor(n.width*i);return{scale:i,imageHeight:Math.floor(n.height*i),imageWidth:r}}));return{subscribe:i}})(W,k,z);a(t,D,(e=>i(21,$=e)));return t.$$set=e=>{"width"in e&&i(0,v=e.width),"height"in e&&i(1,b=e.height),"images"in e&&w(i(2,H=e.images))},t.$$.update=()=>{2&t.$$.dirty&&i(4,r=b-Ie),44&t.$$.dirty&&i(6,o=u&&H.findByName(_)),12&t.$$.dirty&&H.load(_),64&t.$$.dirty&&i(17,l=!(!o||null===o.width)),131153&t.$$.dirty&&l&&W.compute(o,v,r),262144&t.$$.dirty&&i(7,c=m),524288&t.$$.dirty&&i(8,h=f),1048576&t.$$.dirty&&i(9,d=p),2097152&t.$$.dirty&&i(10,g=$)},[v,b,H,_,r,u,o,c,h,d,g,x,W,k,M,z,D,l,m,f,p,$,function(){_=this.__value,i(3,_)},[[]],(e,t)=>H.updateOne(e.name,{url:t.currentTarget.value}),()=>{"custom image url"!==_&&i(3,_="custom image url")}]}class Ae extends U{constructor(e){super(),O(this,e,Ee,Ye,o,{width:0,height:1,images:2})}}const{window:Se}=S;function Ne(e){let t,n,i,r,o,s;return z(e[4]),document.title=t=e[0],i=new Ae({props:{images:e[3],width:e[1],height:e[2]}}),{c(){n=p(),q(i.$$.fragment)},m(t,a){g(t,n,a),P(i,t,a),r=!0,o||(s=$(Se,"resize",e[4]),o=!0)},p(e,[n]){(!r||1&n)&&t!==(t=e[0])&&(document.title=t);const o={};2&n&&(o.width=e[1]),4&n&&(o.height=e[2]),i.$set(o)},i(e){r||(E(i.$$.fragment,e),r=!0)},o(e){A(i.$$.fragment,e),r=!1},d(e){e&&u(n),T(i,e),o=!1,s()}}}function qe(e,t,n){let{name:i}=t;const r=(e=>{const{subscribe:t,update:n}=F(e);let i;t((e=>{i=e}));const r=e=>i.find((t=>t.name===e)),o=(e,t)=>{n((n=>n.map((n=>n.name===e?{...n,...t}:n))))};return{subscribe:t,updateOne:o,findByName:r,load:e=>{const t=r(e);if(!t)throw Error(`Cannot find image with name ${e}`);if(t.el)return t;const n=new Image;return o(e,{el:n}),n.src=t.url,n.onload=()=>{o(e,{width:n.width,height:n.height})},t}}})(Me);let o=window.innerWidth,s=window.innerHeight;return e.$$set=e=>{"name"in e&&n(0,i=e.name)},[i,o,s,r,function(){n(2,s=Se.innerHeight),n(1,o=Se.innerWidth)}]}const Pe=document.getElementById("root");if(!Pe)throw Error("Cannot find app target element with id 'root'");const Te=new class extends U{constructor(e){super(),O(this,e,qe,Ne,o,{name:0})}}({target:Pe,props:{name:"mirror-twin-gro"}});window.app=Te;export{Te as app};
