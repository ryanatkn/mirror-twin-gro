function e(){}function t(e){return e()}function n(){return Object.create(null)}function i(e){e.forEach(t)}function r(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t}function s(t,...n){if(null==t)return e;const i=t.subscribe(...n);return i.unsubscribe?()=>i.unsubscribe():i}function a(e,t,n){e.$$.on_destroy.push(s(t,n))}globalThis.gro=new class{constructor(){this.style_elements_by_path=new Map,this.head=document.getElementsByTagName("head")[0]}register_css(e){if(this.style_elements_by_path.has(e))return;const t=document.createElement("link");this.style_elements_by_path.set(e,t),t.rel="stylesheet",t.href=e,this.head.appendChild(t)}};let l,h=!1;function c(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function d(e,t){h?(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;const t=e.childNodes,n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let e=0;e<t.length;e++){const o=c(1,r+1,(e=>t[n[e]].claim_order),t[e].claim_order)-1;i[e]=n[o]+1;const s=o+1;n[s]=e,r=Math.max(s,r)}const o=[],s=[];let a=t.length-1;for(let e=n[r]+1;0!=e;e=i[e-1]){for(o.push(t[e-1]);a>=e;a--)s.push(t[a]);a--}for(;a>=0;a--)s.push(t[a]);o.reverse(),s.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<s.length;t++){for(;n<o.length&&s[t].claim_order>=o[n].claim_order;)n++;const i=n<o.length?o[n]:null;e.insertBefore(s[t],i)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild),t!==e.actual_end_child?e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling):t.parentNode!==e&&e.appendChild(t)}function g(e,t,n){h&&!n?d(e,t):(t.parentNode!==e||n&&t.nextSibling!==n)&&e.insertBefore(t,n||null)}function u(e){e.parentNode.removeChild(e)}function _(e){return document.createElement(e)}function m(e){return document.createTextNode(e)}function p(){return m(" ")}function f(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function $(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function w(e,t,n,i){e.style.setProperty(t,n,i?"important":"")}function x(e,t,n){e.classList[n?"add":"remove"](t)}function y(e){l=e}const v=[],b=[],k=[],z=[],M=Promise.resolve();let E=!1;function A(e){k.push(e)}let C=!1;const X=new Set;function Y(){if(!C){C=!0;do{for(let e=0;e<v.length;e+=1){const t=v[e];y(t),q(t.$$)}for(y(null),v.length=0;b.length;)b.pop()();for(let e=0;e<k.length;e+=1){const t=k[e];X.has(t)||(X.add(t),t())}k.length=0}while(v.length);for(;z.length;)z.pop()();E=!1,C=!1,X.clear()}}function q(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(A)}}const T=new Set;let N;function S(e,t){e&&e.i&&(T.delete(e),e.i(t))}function j(e,t,n,i){if(e&&e.o){if(T.has(e))return;T.add(e),N.c.push((()=>{T.delete(e),i&&(n&&e.d(1),i())})),e.o(t)}}const B="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function L(e,t){e.d(1),t.delete(e.key)}function O(e){e&&e.c()}function I(e,n,o,s){const{fragment:a,on_mount:l,on_destroy:h,after_update:c}=e.$$;a&&a.m(n,o),s||A((()=>{const n=l.map(t).filter(r);h?h.push(...n):i(n),e.$$.on_mount=[]})),c.forEach(A)}function P(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function U(e,t){-1===e.$$.dirty[0]&&(v.push(e),E||(E=!0,M.then(Y)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function H(t,r,o,s,a,c,d=[-1]){const g=l;y(t);const _=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(g?g.$$.context:r.context||[]),callbacks:n(),dirty:d,skip_bound:!1};let m=!1;if(_.ctx=o?o(t,r.props||{},((e,n,...i)=>{const r=i.length?i[0]:n;return _.ctx&&a(_.ctx[e],_.ctx[e]=r)&&(!_.skip_bound&&_.bound[e]&&_.bound[e](r),m&&U(t,e)),n})):[],_.update(),m=!0,i(_.before_update),_.fragment=!!s&&s(_.ctx),r.target){if(r.hydrate){h=!0;const e=function(e){return Array.from(e.childNodes)}(r.target);_.fragment&&_.fragment.l(e),e.forEach(u)}else _.fragment&&_.fragment.c();r.intro&&S(t.$$.fragment),I(t,r.target,r.anchor,r.customElement),h=!1,Y()}y(g)}class K{$destroy(){P(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const W=[];function D(t,n=e){let i;const r=[];function o(e){if(o=e,((n=t)!=n?o==o:n!==o||n&&"object"==typeof n||"function"==typeof n)&&(t=e,i)){const e=!W.length;for(let e=0;e<r.length;e+=1){const n=r[e];n[1](),W.push(n,t)}if(e){for(let e=0;e<W.length;e+=2)W[e][0](W[e+1]);W.length=0}}var n,o}return{set:o,update:function(e){o(e(t))},subscribe:function(s,a=e){const l=[s,a];return r.push(l),1===r.length&&(i=n(o)||e),s(t),()=>{const e=r.indexOf(l);-1!==e&&r.splice(e,1),0===r.length&&(i(),i=null)}}}}function F(t,n,o){const a=!Array.isArray(t),l=a?[t]:t,h=n.length<2;return{subscribe:D(o,(t=>{let o=!1;const c=[];let d=0,g=e;const u=()=>{if(d)return;g();const i=n(a?c[0]:c,t);h?t(i):g=r(i)?i:e},_=l.map(((e,t)=>s(e,(e=>{c[t]=e,d&=~(1<<t),o&&u()}),(()=>{d|=1<<t}))));return o=!0,u(),function(){i(_),g()}})).subscribe}}function R(t){let n,i,r;return{c(){n=_("div"),$(n,"class","handle svelte-zwbyqo"),w(n,"transform","translate3d("+t[3]+"px, "+t[4]+"px, 0)"),w(n,"width",t[2]+"px"),w(n,"height",t[2]+"px"),x(n,"hovering",t[0]),x(n,"dragging",t[1])},m(e,o){g(e,n,o),i||(r=f(n,"mousedown",t[5]),i=!0)},p(e,[t]){24&t&&w(n,"transform","translate3d("+e[3]+"px, "+e[4]+"px, 0)"),4&t&&w(n,"width",e[2]+"px"),4&t&&w(n,"height",e[2]+"px"),1&t&&x(n,"hovering",e[0]),2&t&&x(n,"dragging",e[1])},i:e,o:e,d(e){e&&u(n),i=!1,r()}}}function G(e,t,n){let i,r,{x_handle:o}=t,{y_handle:s}=t,{handles:a}=t,{start_dragging:l}=t,{hovering:h}=t,{dragging:c}=t,{size:d}=t;return e.$$set=e=>{"x_handle"in e&&n(6,o=e.x_handle),"y_handle"in e&&n(7,s=e.y_handle),"handles"in e&&n(8,a=e.handles),"start_dragging"in e&&n(9,l=e.start_dragging),"hovering"in e&&n(0,h=e.hovering),"dragging"in e&&n(1,c=e.dragging),"size"in e&&n(2,d=e.size)},e.$$.update=()=>{324&e.$$.dirty&&n(3,i=a[o]-d/2),388&e.$$.dirty&&n(4,r=a[s]-d/2)},[h,c,d,i,r,e=>{l(e,o,s)},o,s,a,l]}class J extends K{constructor(e){super(),H(this,e,G,R,o,{x_handle:6,y_handle:7,handles:8,start_dragging:9,hovering:0,dragging:1,size:2})}}function Q(t){let n,r,o;return{c(){n=_("div"),$(n,"class","side-handle svelte-3u81yk"),$(n,"style",t[4])},m(e,i){g(e,n,i),r||(o=[f(n,"mousedown",t[9]),f(n,"mouseenter",t[10]),f(n,"mouseleave",t[11])],r=!0)},p(e,[t]){16&t&&$(n,"style",e[4])},i:e,o:e,d(e){e&&u(n),r=!1,i(o)}}}function V(e,t,n){let i,{handle:r}=t,{handles:o}=t,{size:s}=t,{container_width:a}=t,{container_height:l}=t,{start_dragging:h}=t,{hover:c}=t,{unhover:d}=t;return e.$$set=e=>{"handle"in e&&n(0,r=e.handle),"handles"in e&&n(5,o=e.handles),"size"in e&&n(6,s=e.size),"container_width"in e&&n(7,a=e.container_width),"container_height"in e&&n(8,l=e.container_height),"start_dragging"in e&&n(1,h=e.start_dragging),"hover"in e&&n(2,c=e.hover),"unhover"in e&&n(3,d=e.unhover)},e.$$.update=()=>{97&e.$$.dirty&&n(4,i=((e,t,n)=>{let i,r,o,s;switch(e){case"x1":i=n,r=t.y2-t.y1,o=t.x1-n/2,s=t.y1;break;case"x2":i=n,r=t.y2-t.y1,o=t.x2-n/2,s=t.y1;break;case"y1":i=t.x2-t.x1,r=n,o=t.x1,s=t.y1-n/2;break;case"y2":i=t.x2-t.x1,r=n,o=t.x1,s=t.y2-n/2;break;default:throw new Error(`Unknown handle ${e}`)}return`width: ${i}px; height: ${r}px; transform: translate3d(${o}px, ${s}px, 0);`})(r,o,s))},[r,h,c,d,i,o,s,a,l,e=>h(e,r),()=>c(r),()=>d(r)]}class Z extends K{constructor(e){super(),H(this,e,V,Q,o,{handle:0,handles:5,size:6,container_width:7,container_height:8,start_dragging:1,hover:2,unhover:3})}}function ee(t){let n,r,o;return{c(){n=_("div"),$(n,"class","pan-handle svelte-1s7s7yu"),$(n,"style",t[3])},m(e,i){g(e,n,i),r||(o=[f(n,"mousedown",t[5]),f(n,"mouseenter",t[6]),f(n,"mouseleave",t[7])],r=!0)},p(e,[t]){8&t&&$(n,"style",e[3])},i:e,o:e,d(e){e&&u(n),r=!1,i(o)}}}function te(e,t,n){let i,{handles:r}=t,{start_panning:o}=t,{hover:s}=t,{unhover:a}=t;return e.$$set=e=>{"handles"in e&&n(4,r=e.handles),"start_panning"in e&&n(0,o=e.start_panning),"hover"in e&&n(1,s=e.hover),"unhover"in e&&n(2,a=e.unhover)},e.$$.update=()=>{var t;16&e.$$.dirty&&n(3,i=`width: ${(t=r).x2-t.x1}px; height: ${t.y2-t.y1}px; transform: translate3d(${t.x1}px, ${t.y1}px, 0);`)},[o,s,a,i,r,e=>o(e),()=>s(),()=>a()]}class ne extends K{constructor(e){super(),H(this,e,te,ee,o,{handles:4,start_panning:0,hover:1,unhover:2})}}function ie(t){let n,r,o,s,a,l,h,c,m,x;return{c(){n=_("div"),r=_("div"),r.textContent="↞",o=p(),s=_("div"),s.textContent="←",a=p(),l=_("div"),l.textContent="→",h=p(),c=_("div"),c.textContent="↠",$(r,"class","pan-button svelte-158tfeh"),$(s,"class","pan-button svelte-158tfeh"),$(l,"class","pan-button svelte-158tfeh"),$(c,"class","pan-button svelte-158tfeh"),$(n,"class","pan-buttons svelte-158tfeh"),w(n,"top","-60px")},m(e,i){g(e,n,i),d(n,r),d(n,o),d(n,s),d(n,a),d(n,l),d(n,h),d(n,c),m||(x=[f(window,"keydown",t[4]),f(r,"click",t[7]),f(s,"click",t[8]),f(l,"click",t[9]),f(c,"click",t[10])],m=!0)},p:e,i:e,o:e,d(e){e&&u(n),m=!1,i(x)}}}function re(e,t,n){let{pan_left:i}=t,{pan_right:r}=t,{pan_up:o}=t,{pan_down:s}=t,{small_movement_distance:a=1}=t,{large_movement_distance:l=5}=t;const h=e=>{switch(e.key){case"ArrowLeft":return i;case"ArrowRight":return r;case"ArrowUp":return o;case"ArrowDown":return s}return null};return e.$$set=e=>{"pan_left"in e&&n(0,i=e.pan_left),"pan_right"in e&&n(1,r=e.pan_right),"pan_up"in e&&n(5,o=e.pan_up),"pan_down"in e&&n(6,s=e.pan_down),"small_movement_distance"in e&&n(2,a=e.small_movement_distance),"large_movement_distance"in e&&n(3,l=e.large_movement_distance)},[i,r,a,l,e=>{const t=h(e);if(t){t(e.ctrlKey?l:a),e.stopPropagation()}},o,s,()=>i(l),()=>i(a),()=>r(a),()=>r(l)]}class oe extends K{constructor(e){super(),H(this,e,re,ie,o,{pan_left:0,pan_right:1,pan_up:5,pan_down:6,small_movement_distance:2,large_movement_distance:3})}}function se(e){let t,n,r,o,s,a,l,h,c,m,w,x,y,v,b,k,z,M,E,A,C,X,Y;return n=new ne({props:{handles:e[0],start_panning:e[16],hover:e[22],unhover:e[23]}}),o=new oe({props:{pan_left:e[10],pan_right:e[11],pan_up:e[12],pan_down:e[13]}}),a=new Z({props:{handle:"x1",handles:e[0],size:e[3],container_width:e[1],container_height:e[2],start_dragging:e[15],hover:e[19],unhover:e[20]}}),h=new Z({props:{handle:"x2",handles:e[0],size:e[3],container_width:e[1],container_height:e[2],start_dragging:e[15],hover:e[19],unhover:e[20]}}),m=new Z({props:{handle:"y1",handles:e[0],size:e[3],container_width:e[1],container_height:e[2],start_dragging:e[15],hover:e[19],unhover:e[20]}}),x=new Z({props:{handle:"y2",handles:e[0],size:e[3],container_width:e[1],container_height:e[2],start_dragging:e[15],hover:e[19],unhover:e[20]}}),v=new J({props:{x_handle:"x1",y_handle:"y1",handles:e[0],start_dragging:e[14],size:e[3],dragging:e[4]||"x1"===e[5]&&"y1"===e[6]||"x1"===e[7]||"y1"===e[7],hovering:e[9]||"x1"===e[8]||"y1"===e[8]}}),k=new J({props:{x_handle:"x2",y_handle:"y1",handles:e[0],start_dragging:e[14],size:e[3],dragging:e[4]||"x2"===e[5]&&"y1"===e[6]||"x2"===e[7]||"y1"===e[7],hovering:e[9]||"x2"===e[8]||"y1"===e[8]}}),M=new J({props:{x_handle:"x1",y_handle:"y2",handles:e[0],start_dragging:e[14],size:e[3],dragging:e[4]||"x1"===e[5]&&"y2"===e[6]||"x1"===e[7]||"y2"===e[7],hovering:e[9]||"x1"===e[8]||"y2"===e[8]}}),A=new J({props:{x_handle:"x2",y_handle:"y2",handles:e[0],start_dragging:e[14],size:e[3],dragging:e[4]||"x2"===e[5]&&"y2"===e[6]||"x2"===e[7]||"y2"===e[7],hovering:e[9]||"x2"===e[8]||"y2"===e[8]}}),{c(){t=_("div"),O(n.$$.fragment),r=p(),O(o.$$.fragment),s=p(),O(a.$$.fragment),l=p(),O(h.$$.fragment),c=p(),O(m.$$.fragment),w=p(),O(x.$$.fragment),y=p(),O(v.$$.fragment),b=p(),O(k.$$.fragment),z=p(),O(M.$$.fragment),E=p(),O(A.$$.fragment),$(t,"class","image-handles svelte-1f45cb4")},m(i,u){g(i,t,u),I(n,t,null),d(t,r),I(o,t,null),d(t,s),I(a,t,null),d(t,l),I(h,t,null),d(t,c),I(m,t,null),d(t,w),I(x,t,null),d(t,y),I(v,t,null),d(t,b),I(k,t,null),d(t,z),I(M,t,null),d(t,E),I(A,t,null),C=!0,X||(Y=[f(window,"mouseup",e[17]),f(window,"mousemove",e[18]),f(window,"mouseleave",e[17])],X=!0)},p(e,[t]){const i={};1&t&&(i.handles=e[0]),512&t&&(i.hover=e[22]),512&t&&(i.unhover=e[23]),n.$set(i);const r={};1&t&&(r.handles=e[0]),8&t&&(r.size=e[3]),2&t&&(r.container_width=e[1]),4&t&&(r.container_height=e[2]),a.$set(r);const o={};1&t&&(o.handles=e[0]),8&t&&(o.size=e[3]),2&t&&(o.container_width=e[1]),4&t&&(o.container_height=e[2]),h.$set(o);const s={};1&t&&(s.handles=e[0]),8&t&&(s.size=e[3]),2&t&&(s.container_width=e[1]),4&t&&(s.container_height=e[2]),m.$set(s);const l={};1&t&&(l.handles=e[0]),8&t&&(l.size=e[3]),2&t&&(l.container_width=e[1]),4&t&&(l.container_height=e[2]),x.$set(l);const c={};1&t&&(c.handles=e[0]),8&t&&(c.size=e[3]),240&t&&(c.dragging=e[4]||"x1"===e[5]&&"y1"===e[6]||"x1"===e[7]||"y1"===e[7]),768&t&&(c.hovering=e[9]||"x1"===e[8]||"y1"===e[8]),v.$set(c);const d={};1&t&&(d.handles=e[0]),8&t&&(d.size=e[3]),240&t&&(d.dragging=e[4]||"x2"===e[5]&&"y1"===e[6]||"x2"===e[7]||"y1"===e[7]),768&t&&(d.hovering=e[9]||"x2"===e[8]||"y1"===e[8]),k.$set(d);const g={};1&t&&(g.handles=e[0]),8&t&&(g.size=e[3]),240&t&&(g.dragging=e[4]||"x1"===e[5]&&"y2"===e[6]||"x1"===e[7]||"y2"===e[7]),768&t&&(g.hovering=e[9]||"x1"===e[8]||"y2"===e[8]),M.$set(g);const u={};1&t&&(u.handles=e[0]),8&t&&(u.size=e[3]),240&t&&(u.dragging=e[4]||"x2"===e[5]&&"y2"===e[6]||"x2"===e[7]||"y2"===e[7]),768&t&&(u.hovering=e[9]||"x2"===e[8]||"y2"===e[8]),A.$set(u)},i(e){C||(S(n.$$.fragment,e),S(o.$$.fragment,e),S(a.$$.fragment,e),S(h.$$.fragment,e),S(m.$$.fragment,e),S(x.$$.fragment,e),S(v.$$.fragment,e),S(k.$$.fragment,e),S(M.$$.fragment,e),S(A.$$.fragment,e),C=!0)},o(e){j(n.$$.fragment,e),j(o.$$.fragment,e),j(a.$$.fragment,e),j(h.$$.fragment,e),j(m.$$.fragment,e),j(x.$$.fragment,e),j(v.$$.fragment,e),j(k.$$.fragment,e),j(M.$$.fragment,e),j(A.$$.fragment,e),C=!1},d(e){e&&u(t),P(n),P(o),P(a),P(h),P(m),P(x),P(v),P(k),P(M),P(A),X=!1,i(Y)}}}function ae(e,t,n){let{handles:i}=t,{move_handles:r}=t,{container_width:o}=t,{container_height:s}=t,{size:a=40}=t,l=!1,h=!1,c=null,d=null,g=null,u=null,_=!1,m=null,p=null;const f=(e,t)=>{let n=null;e?n=t?[["x1",e],["x2",e],["y1",t],["y2",t]]:[["x1",e],["x2",e]]:t&&(n=[["y1",t],["y2",t]]),n&&r(n)};return e.$$set=e=>{"handles"in e&&n(0,i=e.handles),"move_handles"in e&&n(21,r=e.move_handles),"container_width"in e&&n(1,o=e.container_width),"container_height"in e&&n(2,s=e.container_height),"size"in e&&n(3,a=e.size)},[i,o,s,a,h,c,d,g,u,_,e=>f(-e,0),e=>f(e,0),e=>f(0,-e),e=>f(0,e),(e,t,i)=>{l=!0,n(5,c=t),n(6,d=i),m=e.clientX,p=e.clientY},(e,t)=>{l=!0,n(7,g=t),m=e.clientX,p=e.clientY},e=>{l=!0,n(4,h=!0),m=e.clientX,p=e.clientY},e=>{l&&(l=!1,n(4,h=!1),n(6,d=null),n(6,d=null),n(7,g=null),m=null,p=null)},e=>{if(l)if(h){const t=e.clientX-m,n=e.clientY-p;f(t,n),m=e.clientX,p=e.clientY}else if("x1"===g||"x2"===g){const t=e.clientX-m;r([[g,t]]),m=e.clientX}else if("y1"===g||"y2"===g){const t=e.clientY-p;r([[g,t]]),p=e.clientY}else{const t=e.clientX-m,n=e.clientY-p;r([[c,t],[d,n]]),m=e.clientX,p=e.clientY}},e=>{n(8,u=e)},e=>{n(8,u=null)},r,()=>n(9,_=!0),()=>n(9,_=!1)]}class le extends K{constructor(e){super(),H(this,e,ae,se,o,{handles:0,move_handles:21,container_width:1,container_height:2,size:3})}}function he(e,t,n){const i=e.slice();return i[9]=t[n],i}function ce(e){let t;return{c(){t=_("div"),$(t,"class","bg-rect svelte-1q7iaud"),w(t,"left",e[9].left+"px"),w(t,"top",e[9].top+"px"),w(t,"width",e[9].width+"px"),w(t,"height",e[9].height+"px")},m(e,n){g(e,t,n)},p(e,n){256&n&&w(t,"left",e[9].left+"px"),256&n&&w(t,"top",e[9].top+"px"),256&n&&w(t,"width",e[9].width+"px"),256&n&&w(t,"height",e[9].height+"px")},d(e){e&&u(t)}}}function de(e){let t,n,i,r,o,s,a=e[8],l=[];for(let t=0;t<a.length;t+=1)l[t]=ce(he(e,a,t));return o=new le({props:{handles:e[6],move_handles:e[7],container_width:e[1],container_height:e[2]}}),{c(){t=_("div"),n=_("div"),i=p();for(let e=0;e<l.length;e+=1)l[e].c();r=p(),O(o.$$.fragment),$(n,"class","image svelte-1q7iaud"),w(n,"width",e[0].width+"px"),w(n,"height",e[0].height+"px"),w(n,"background-image","url("+e[0].url+")"),w(n,"transform","scale3d("+e[3]+", "+e[3]+", 1)"),$(t,"class","source-image svelte-1q7iaud"),w(t,"width",e[1]+"px"),w(t,"height",e[2]+"px"),w(t,"left",e[4]+"px"),w(t,"top",e[5]+"px")},m(e,a){g(e,t,a),d(t,n),d(t,i);for(let e=0;e<l.length;e+=1)l[e].m(t,null);d(t,r),I(o,t,null),s=!0},p(e,[i]){if((!s||1&i)&&w(n,"width",e[0].width+"px"),(!s||1&i)&&w(n,"height",e[0].height+"px"),(!s||1&i)&&w(n,"background-image","url("+e[0].url+")"),(!s||8&i)&&w(n,"transform","scale3d("+e[3]+", "+e[3]+", 1)"),256&i){let n;for(a=e[8],n=0;n<a.length;n+=1){const o=he(e,a,n);l[n]?l[n].p(o,i):(l[n]=ce(o),l[n].c(),l[n].m(t,r))}for(;n<l.length;n+=1)l[n].d(1);l.length=a.length}const h={};64&i&&(h.handles=e[6]),128&i&&(h.move_handles=e[7]),2&i&&(h.container_width=e[1]),4&i&&(h.container_height=e[2]),o.$set(h),(!s||2&i)&&w(t,"width",e[1]+"px"),(!s||4&i)&&w(t,"height",e[2]+"px"),(!s||16&i)&&w(t,"left",e[4]+"px"),(!s||32&i)&&w(t,"top",e[5]+"px")},i(e){s||(S(o.$$.fragment,e),s=!0)},o(e){j(o.$$.fragment,e),s=!1},d(e){e&&u(t),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(l,e),P(o)}}}function ge(e,t,n){let i,{image:r}=t,{width:o}=t,{height:s}=t,{scale:a}=t,{left:l}=t,{top:h}=t,{handles:c}=t,{move_handles:d}=t;return e.$$set=e=>{"image"in e&&n(0,r=e.image),"width"in e&&n(1,o=e.width),"height"in e&&n(2,s=e.height),"scale"in e&&n(3,a=e.scale),"left"in e&&n(4,l=e.left),"top"in e&&n(5,h=e.top),"handles"in e&&n(6,c=e.handles),"move_handles"in e&&n(7,d=e.move_handles)},e.$$.update=()=>{70&e.$$.dirty&&n(8,i=[{left:0,top:0,width:c.x1,height:s},{left:c.x2,top:0,width:o-c.x2,height:s},{left:c.x1,top:0,width:c.x2-c.x1,height:c.y1},{left:c.x1,top:c.y2,width:c.x2-c.x1,height:s-c.y2}])},[r,o,s,a,l,h,c,d,i]}class ue extends K{constructor(e){super(),H(this,e,ge,de,o,{image:0,width:1,height:2,scale:3,left:4,top:5,handles:6,move_handles:7})}}function _e(t){let n,i,r,o;return{c(){n=_("div"),i=_("div"),r=p(),o=_("div"),$(i,"style",t[1]),$(o,"style",t[2]),$(n,"class","mirror-image svelte-1xd7821"),$(n,"style",t[0])},m(e,t){g(e,n,t),d(n,i),d(n,r),d(n,o)},p(e,[t]){2&t&&$(i,"style",e[1]),4&t&&$(o,"style",e[2]),1&t&&$(n,"style",e[0])},i:e,o:e,d(e){e&&u(n)}}}function me(e,t,n){let i,r,o,{image:s}=t,{selection_x:a}=t,{selection_y:l}=t,{selection_width:h}=t,{selection_height:c}=t,{is_left:d}=t;const g=(e,t,n,i,r,o,s)=>{let a,l;return e?(a=t?"":"transform: rotate3d(0, 1, 0, 180deg);",l=t?`background-position: ${n.width-i}px ${-r}px;`:`background-position: ${n.width-i-o/2}px ${-r}px;`):(a=t?"transform: rotate3d(0, 1, 0, 180deg);":"",l=t?`background-position: ${n.width-i}px ${-r}px;`:`background-position: ${n.width-i-o/2}px ${-r}px;`),`width: ${o/2}px; height: ${s}px; background-image: url(${n.url}); ${l} ${a}`};return e.$$set=e=>{"image"in e&&n(3,s=e.image),"selection_x"in e&&n(4,a=e.selection_x),"selection_y"in e&&n(5,l=e.selection_y),"selection_width"in e&&n(6,h=e.selection_width),"selection_height"in e&&n(7,c=e.selection_height),"is_left"in e&&n(8,d=e.is_left)},e.$$.update=()=>{192&e.$$.dirty&&n(0,i=`width: ${h}px; height: ${c}px;`),504&e.$$.dirty&&n(1,r=g(!0,d,s,a,l,h,c)),504&e.$$.dirty&&n(2,o=g(!1,d,s,a,l,h,c))},[i,r,o,s,a,l,h,c,d]}class pe extends K{constructor(e){super(),H(this,e,me,_e,o,{image:3,selection_x:4,selection_y:5,selection_width:6,selection_height:7,is_left:8})}}function fe(e){let t,n,i,r,o;return n=new pe({props:{image:e[0],selection_x:e[1],selection_y:e[2],selection_width:e[3],selection_height:e[4],is_left:!0}}),r=new pe({props:{image:e[0],selection_x:e[1],selection_y:e[2],selection_width:e[3],selection_height:e[4],is_left:!1}}),{c(){t=_("div"),O(n.$$.fragment),i=p(),O(r.$$.fragment),$(t,"class","mirror-images svelte-1p0b9ky"),$(t,"style",e[5])},m(e,s){g(e,t,s),I(n,t,null),d(t,i),I(r,t,null),o=!0},p(e,[i]){const s={};1&i&&(s.image=e[0]),2&i&&(s.selection_x=e[1]),4&i&&(s.selection_y=e[2]),8&i&&(s.selection_width=e[3]),16&i&&(s.selection_height=e[4]),n.$set(s);const a={};1&i&&(a.image=e[0]),2&i&&(a.selection_x=e[1]),4&i&&(a.selection_y=e[2]),8&i&&(a.selection_width=e[3]),16&i&&(a.selection_height=e[4]),r.$set(a),(!o||32&i)&&$(t,"style",e[5])},i(e){o||(S(n.$$.fragment,e),S(r.$$.fragment,e),o=!0)},o(e){j(n.$$.fragment,e),j(r.$$.fragment,e),o=!1},d(e){e&&u(t),P(n),P(r)}}}function $e(e,t,n){let i,{image:r}=t,{container_width:o}=t,{selection_x:s}=t,{selection_y:a}=t,{selection_width:l}=t,{selection_height:h}=t,{rendered_width:c}=t,{rendered_height:d}=t,{scale:g}=t;return e.$$set=e=>{"image"in e&&n(0,r=e.image),"container_width"in e&&n(6,o=e.container_width),"selection_x"in e&&n(1,s=e.selection_x),"selection_y"in e&&n(2,a=e.selection_y),"selection_width"in e&&n(3,l=e.selection_width),"selection_height"in e&&n(4,h=e.selection_height),"rendered_width"in e&&n(7,c=e.rendered_width),"rendered_height"in e&&n(8,d=e.rendered_height),"scale"in e&&n(9,g=e.scale)},e.$$.update=()=>{728&e.$$.dirty&&n(5,i=`left: ${Math.floor(o/2-c)}px; transform: scale3d(${g}, ${g}, 1); width: ${2*l}px; height: ${h}px;`)},[r,s,a,l,h,i,o,c,d,g]}class we extends K{constructor(e){super(),H(this,e,$e,fe,o,{image:0,container_width:6,selection_x:1,selection_y:2,selection_width:3,selection_height:4,rendered_width:7,rendered_height:8,scale:9})}}function xe(e){let t,n,i,r,o,s,a;return i=new ue({props:{image:e[5],handles:e[6],move_handles:e[7],width:e[2].width,height:e[2].height,scale:e[2].scale,left:e[2].x1,top:e[2].y1}}),s=new we({props:{image:e[5],container_width:e[1].mirror_container_width,selection_x:e[3].x1,selection_y:e[3].y1,selection_width:e[3].width,selection_height:e[3].height,rendered_width:e[4].image_width,rendered_height:e[4].image_height,scale:e[4].scale}}),{c(){t=_("div"),n=_("div"),O(i.$$.fragment),r=p(),o=_("div"),O(s.$$.fragment),$(n,"class","source-image-wrapper svelte-1w77c6q"),w(n,"height",e[1].source_container_height+"px"),$(o,"class","mirror-images-wrapper svelte-1w77c6q"),w(o,"height",e[1].mirror_container_height+"px"),$(t,"class","mirror-twin-images svelte-1w77c6q"),w(t,"height",e[0]+"px")},m(e,l){g(e,t,l),d(t,n),I(i,n,null),d(t,r),d(t,o),I(s,o,null),a=!0},p(e,[r]){const l={};32&r&&(l.image=e[5]),64&r&&(l.handles=e[6]),128&r&&(l.move_handles=e[7]),4&r&&(l.width=e[2].width),4&r&&(l.height=e[2].height),4&r&&(l.scale=e[2].scale),4&r&&(l.left=e[2].x1),4&r&&(l.top=e[2].y1),i.$set(l),(!a||2&r)&&w(n,"height",e[1].source_container_height+"px");const h={};32&r&&(h.image=e[5]),2&r&&(h.container_width=e[1].mirror_container_width),8&r&&(h.selection_x=e[3].x1),8&r&&(h.selection_y=e[3].y1),8&r&&(h.selection_width=e[3].width),8&r&&(h.selection_height=e[3].height),16&r&&(h.rendered_width=e[4].image_width),16&r&&(h.rendered_height=e[4].image_height),16&r&&(h.scale=e[4].scale),s.$set(h),(!a||2&r)&&w(o,"height",e[1].mirror_container_height+"px"),(!a||1&r)&&w(t,"height",e[0]+"px")},i(e){a||(S(i.$$.fragment,e),S(s.$$.fragment,e),a=!0)},o(e){j(i.$$.fragment,e),j(s.$$.fragment,e),a=!1},d(e){e&&u(t),P(i),P(s)}}}function ye(e,t,n){let{height:i}=t,{layout:r}=t,{source_image_layout:o}=t,{source_image_selection:s}=t,{mirror_images_layout:a}=t,{image:l}=t,{handles:h}=t,{move_handles:c}=t;return e.$$set=e=>{"height"in e&&n(0,i=e.height),"layout"in e&&n(1,r=e.layout),"source_image_layout"in e&&n(2,o=e.source_image_layout),"source_image_selection"in e&&n(3,s=e.source_image_selection),"mirror_images_layout"in e&&n(4,a=e.mirror_images_layout),"image"in e&&n(5,l=e.image),"handles"in e&&n(6,h=e.handles),"move_handles"in e&&n(7,c=e.move_handles)},[i,r,o,s,a,l,h,c]}class ve extends K{constructor(e){super(),H(this,e,ye,xe,o,{height:0,layout:1,source_image_layout:2,source_image_selection:3,mirror_images_layout:4,image:5,handles:6,move_handles:7})}}const be=(e,t,n)=>{if(null===e.width)throw Error(`Cannot compute layout with unloaded image data: ${e.name}`);const i=e.width,r=e.height,o=t,s=Math.round(.5*n);return{width:t,height:n,image_width:i,image_height:r,source_container_width:o,source_container_height:s,mirror_container_width:t,mirror_container_height:n-s}};class ke extends Error{constructor(e,t=`Unreachable case: ${e}`){super(t)}}const ze=(e,t)=>({name:e,url:t,el:null,width:null,height:null}),Me=[ze("Ada Lovelace","images/ada_lovelace.png"),ze("Alan Turing","images/alan_turing.jpg"),ze("Frida Kahlo","images/frida_kahlo.jpg"),ze("custom image url","")];function Ee(e,t,n){const i=e.slice();return i[6]=t[n],i}function Ae(e){let t,n=e[6].name+"";return{c(){t=m(n)},m(e,n){g(e,t,n)},p(e,i){32&i&&n!==(n=e[6].name+"")&&function(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}(t,n)},d(e){e&&u(t)}}}function Ce(e){let t,n,r,o;function s(...t){return e[24](e[6],...t)}return{c(){t=_("input"),$(t,"class","url svelte-4hm7a9"),$(t,"type","text"),$(t,"placeholder",n=e[6].name)},m(n,i){g(n,t,i),r||(o=[f(t,"input",s),f(t,"focus",e[25])],r=!0)},p(i,r){e=i,32&r&&n!==(n=e[6].name)&&$(t,"placeholder",n)},d(e){e&&u(t),r=!1,i(o)}}}function Xe(e,t){let n,i,r,o,s;function a(e,t){return"custom image url"===e[6].name?Ce:Ae}let l=a(t),h=l(t);return{key:e,first:null,c(){n=_("label"),i=_("input"),h.c(),$(i,"type","radio"),i.__value=r=t[6].name,i.value=i.__value,t[23][0].push(i),$(n,"class","control svelte-4hm7a9"),x(n,"selected",t[6].name===t[3]),this.first=n},m(e,r){g(e,n,r),d(n,i),i.checked=i.__value===t[3],h.m(n,null),o||(s=f(i,"change",t[22]),o=!0)},p(e,o){t=e,32&o&&r!==(r=t[6].name)&&(i.__value=r,i.value=i.__value),8&o&&(i.checked=i.__value===t[3]),l===(l=a(t))&&h?h.p(t,o):(h.d(1),h=l(t),h&&(h.c(),h.m(n,null))),40&o&&x(n,"selected",t[6].name===t[3])},d(e){e&&u(n),t[23][0].splice(t[23][0].indexOf(i),1),h.d(),o=!1,s()}}}function Ye(e){let t,n;return t=new ve({props:{image:e[6],height:e[4],layout:e[7],handles:e[11],source_image_layout:e[8],source_image_selection:e[9],mirror_images_layout:e[10],move_handles:e[14].move}}),{c(){O(t.$$.fragment)},m(e,i){I(t,e,i),n=!0},p(e,n){const i={};64&n&&(i.image=e[6]),16&n&&(i.height=e[4]),128&n&&(i.layout=e[7]),2048&n&&(i.handles=e[11]),256&n&&(i.source_image_layout=e[8]),512&n&&(i.source_image_selection=e[9]),1024&n&&(i.mirror_images_layout=e[10]),t.$set(i)},i(e){n||(S(t.$$.fragment,e),n=!0)},o(e){j(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function qe(e){let t,n,r,o,s,a=[],l=new Map,h=e[5];const c=e=>e[6].name;for(let t=0;t<h.length;t+=1){let n=Ee(e,h,t),i=c(n);l.set(i,a[t]=Xe(i,n))}let m=e[7]&&e[6]&&e[8]&&e[9]&&e[10]&&Ye(e);return{c(){t=_("div"),n=_("div"),r=_("form");for(let e=0;e<a.length;e+=1)a[e].c();o=p(),m&&m.c(),$(r,"class","svelte-4hm7a9"),$(n,"class","controls svelte-4hm7a9"),w(n,"height",Te+"px"),$(t,"class","mirror-twins svelte-4hm7a9"),w(t,"height",e[1]+"px"),w(t,"width",e[0]+"px")},m(e,i){g(e,t,i),d(t,n),d(n,r);for(let e=0;e<a.length;e+=1)a[e].m(r,null);d(t,o),m&&m.m(t,null),s=!0},p(e,[n]){44&n&&(h=e[5],a=function(e,t,n,i,r,o,s,a,l,h,c,d){let g=e.length,u=o.length,_=g;const m={};for(;_--;)m[e[_].key]=_;const p=[],f=new Map,$=new Map;for(_=u;_--;){const e=d(r,o,_),a=n(e);let l=s.get(a);l?i&&l.p(e,t):(l=h(a,e),l.c()),f.set(a,p[_]=l),a in m&&$.set(a,Math.abs(_-m[a]))}const w=new Set,x=new Set;function y(e){S(e,1),e.m(a,c),s.set(e.key,e),c=e.first,u--}for(;g&&u;){const t=p[u-1],n=e[g-1],i=t.key,r=n.key;t===n?(c=t.first,g--,u--):f.has(r)?!s.has(i)||w.has(i)?y(t):x.has(r)?g--:$.get(i)>$.get(r)?(x.add(i),y(t)):(w.add(r),g--):(l(n,s),g--)}for(;g--;){const t=e[g];f.has(t.key)||l(t,s)}for(;u;)y(p[u-1]);return p}(a,n,c,1,e,h,l,r,L,Xe,null,Ee)),e[7]&&e[6]&&e[8]&&e[9]&&e[10]?m?(m.p(e,n),1984&n&&S(m,1)):(m=Ye(e),m.c(),S(m,1),m.m(t,null)):m&&(N={r:0,c:[],p:N},j(m,1,1,(()=>{m=null})),N.r||i(N.c),N=N.p),(!s||2&n)&&w(t,"height",e[1]+"px"),(!s||1&n)&&w(t,"width",e[0]+"px")},i(e){s||(S(m),s=!0)},o(e){j(m),s=!1},d(e){e&&u(t);for(let e=0;e<a.length;e+=1)a[e].d();m&&m.d()}}}const Te=130;function Ne(t,n,i){let r,o,l,h,c,d,g,u,_,m,p,f,$,w=e,x=()=>(w(),w=s(b,(e=>i(5,u=e))),b);t.$$.on_destroy.push((()=>w()));let{width:y}=n,{height:v}=n,{images:b}=n;x();let k=u[2].name;const z=(()=>{const{subscribe:e,set:t}=D(null);return{subscribe:e,compute:(e,n,i)=>{const r=be(e,n,i);t(r)}}})();a(t,z,(e=>i(18,_=e)));const M=(e=>{const{subscribe:t}=F(e,(e=>{if(!e)return null;const t=e.source_container_width-20-20,n=e.source_container_height-60-0,i=Math.min(1,t/e.image_width,n/e.image_height),r=Math.floor(e.image_width*i),o=Math.floor(e.image_height*i),s=Math.floor(e.source_container_width/2-r/2+0),a=s+r,l=e.source_container_height-o;return{scale:i,width:r,height:o,x1:s,x2:a,y1:l,y2:l+o}}));return{subscribe:t}})(z);a(t,M,(e=>i(19,m=e)));const E=(e=>{let t,n,i,r;const{subscribe:o}=F(e,((e,o)=>{t=o,n=e.width,i=e.height,r={width:e.width,height:e.height,x1:0,x2:e.width,y1:0,y2:e.height},o(r)}),void 0);return{subscribe:o,move:e=>{const o={...r};for(const[t,r]of e)switch(t){case"x1":o.x1=Math.min(Math.max(o.x1+r,0),o.x2);break;case"x2":o.x2=Math.max(Math.min(o.x2+r,n),o.x1);break;case"y1":o.y1=Math.min(Math.max(o.y1+r,0),o.y2);break;case"y2":o.y2=Math.max(Math.min(o.y2+r,i),o.y1);break;default:throw new ke(t)}o.width=o.x2-o.x1,o.height=o.y2-o.y1,r=o,t(o)}}})(F(M,(e=>({width:e&&e.width||0,height:e&&e.height||0}))));a(t,E,(e=>i(11,$=e)));const A=((e,t)=>{const{subscribe:n}=F([e,t],(([e,t])=>{if(!e)return null;const{scale:n}=e,i=Math.round(t.x1/n),r=Math.round(t.x2/n),o=Math.round(t.y1/n),s=Math.round(t.y2/n);return{width:r-i,height:s-o,x1:i,x2:r,y1:o,y2:s}}));return{subscribe:n}})(M,E);a(t,A,(e=>i(20,p=e)));const C=((e,t,n)=>{const{subscribe:i}=F([e,t,n],(([e,t,n])=>{if(!e||!t||!n)return null;const i=Math.min(1,e.mirror_container_width/2/n.width,e.mirror_container_height/n.height),r=Math.floor(n.width*i);return{scale:i,image_height:Math.floor(n.height*i),image_width:r}}));return{subscribe:i}})(z,M,A);a(t,C,(e=>i(21,f=e)));return t.$$set=e=>{"width"in e&&i(0,y=e.width),"height"in e&&i(1,v=e.height),"images"in e&&x(i(2,b=e.images))},t.$$.update=()=>{2&t.$$.dirty&&i(4,r=v-Te),44&t.$$.dirty&&i(6,o=u&&b.find_by_name(k)),12&t.$$.dirty&&b.load(k),64&t.$$.dirty&&i(17,l=!(!o||null===o.width)),131153&t.$$.dirty&&l&&z.compute(o,y,r),262144&t.$$.dirty&&i(7,h=_),524288&t.$$.dirty&&i(8,c=m),1048576&t.$$.dirty&&i(9,d=p),2097152&t.$$.dirty&&i(10,g=f)},[y,v,b,k,r,u,o,h,c,d,g,$,z,M,E,A,C,l,_,m,p,f,function(){k=this.__value,i(3,k)},[[]],(e,t)=>b.update_one(e.name,{url:t.currentTarget.value}),()=>{"custom image url"!==k&&i(3,k="custom image url")}]}class Se extends K{constructor(e){super(),H(this,e,Ne,qe,o,{width:0,height:1,images:2})}}const{window:je}=B;function Be(e){let t,n,i,r,o,s;return A(e[4]),document.title=t=e[0],i=new Se({props:{images:e[3],width:e[1],height:e[2]}}),{c(){n=p(),O(i.$$.fragment)},m(t,a){g(t,n,a),I(i,t,a),r=!0,o||(s=f(je,"resize",e[4]),o=!0)},p(e,[n]){(!r||1&n)&&t!==(t=e[0])&&(document.title=t);const o={};2&n&&(o.width=e[1]),4&n&&(o.height=e[2]),i.$set(o)},i(e){r||(S(i.$$.fragment,e),r=!0)},o(e){j(i.$$.fragment,e),r=!1},d(e){e&&u(n),P(i,e),o=!1,s()}}}function Le(e,t,n){let{name:i}=t;const r=(e=>{const{subscribe:t,update:n}=D(e);let i;t((e=>{i=e}));const r=e=>i.find((t=>t.name===e)),o=(e,t)=>{n((n=>n.map((n=>n.name===e?{...n,...t}:n))))};return{subscribe:t,update_one:o,find_by_name:r,load:e=>{const t=r(e);if(!t)throw Error(`Cannot find image with name ${e}`);if(t.el)return t;const n=new Image;return o(e,{el:n}),n.src=t.url,n.onload=()=>{o(e,{width:n.width,height:n.height})},t}}})(Me);let o=window.innerWidth,s=window.innerHeight;return e.$$set=e=>{"name"in e&&n(0,i=e.name)},[i,o,s,r,function(){n(2,s=je.innerHeight),n(1,o=je.innerWidth)}]}const Oe=document.getElementById("root");if(!Oe)throw Error("Cannot find app target element with id 'root'");const Ie=new class extends K{constructor(e){super(),H(this,e,Le,Be,o,{name:0})}}({target:Oe,props:{name:"mirror-twin-gro"}});window.app=Ie;export{Ie as app};
