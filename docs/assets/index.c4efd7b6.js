const R=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};R();function y(){}function q(e){return e()}function M(){return Object.create(null)}function L(e){e.forEach(q)}function D(e){return typeof e=="function"}function B(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let b;function G(e,t){return b||(b=document.createElement("a")),b.href=t,e===b.href}function J(e){return Object.keys(e).length===0}function d(e,t){e.appendChild(t)}function I(e,t,n){e.insertBefore(t,n||null)}function N(e){e.parentNode.removeChild(e)}function p(e){return document.createElement(e)}function C(e){return document.createTextNode(e)}function $(){return C(" ")}function Q(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function m(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function W(e){return Array.from(e.childNodes)}function X(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let j;function v(e){j=e}const _=[],H=[],k=[],T=[],Y=Promise.resolve();let O=!1;function Z(){O||(O=!0,Y.then(P))}function A(e){k.push(e)}const S=new Set;let w=0;function P(){const e=j;do{for(;w<_.length;){const t=_[w];w++,v(t),ee(t.$$)}for(v(null),_.length=0,w=0;H.length;)H.pop()();for(let t=0;t<k.length;t+=1){const n=k[t];S.has(n)||(S.add(n),n())}k.length=0}while(_.length);for(;T.length;)T.pop()();O=!1,S.clear(),v(e)}function ee(e){if(e.fragment!==null){e.update(),L(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(A)}}const E=new Set;let te;function z(e,t){e&&e.i&&(E.delete(e),e.i(t))}function ne(e,t,n,o){if(e&&e.o){if(E.has(e))return;E.add(e),te.c.push(()=>{E.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}}function re(e){e&&e.c()}function F(e,t,n,o){const{fragment:r,on_mount:i,on_destroy:l,after_update:a}=e.$$;r&&r.m(t,n),o||A(()=>{const u=i.map(q).filter(D);l?l.push(...u):L(u),e.$$.on_mount=[]}),a.forEach(A)}function K(e,t){const n=e.$$;n.fragment!==null&&(L(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function oe(e,t){e.$$.dirty[0]===-1&&(_.push(e),Z(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function U(e,t,n,o,r,i,l,a=[-1]){const u=j;v(e);const s=e.$$={fragment:null,ctx:null,props:i,update:y,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:M(),dirty:a,skip_bound:!1,root:t.target||u.$$.root};l&&l(s.root);let g=!1;if(s.ctx=n?n(e,t.props||{},(c,h,...f)=>{const x=f.length?f[0]:h;return s.ctx&&r(s.ctx[c],s.ctx[c]=x)&&(!s.skip_bound&&s.bound[c]&&s.bound[c](x),g&&oe(e,c)),h}):[],s.update(),g=!0,L(s.before_update),s.fragment=o?o(s.ctx):!1,t.target){if(t.hydrate){const c=W(t.target);s.fragment&&s.fragment.l(c),c.forEach(N)}else s.fragment&&s.fragment.c();t.intro&&z(e.$$.fragment),F(e,t.target,t.anchor,t.customElement),P()}v(u)}class V{$destroy(){K(this,1),this.$destroy=y}$on(t,n){const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!J(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var ie="https://delbertina.github.io/delbertina-homepage/assets/svelte.d72399d3.png";function se(e){let t,n,o,r,i;return{c(){t=p("button"),n=C("Clicks: "),o=C(e[0]),m(t,"class","svelte-1c7643s")},m(l,a){I(l,t,a),d(t,n),d(t,o),r||(i=Q(t,"click",e[1]),r=!0)},p(l,[a]){a&1&&X(o,l[0])},i:y,o:y,d(l){l&&N(t),r=!1,i()}}}function le(e,t,n){let o=0;return[o,()=>{n(0,o+=1)}]}class ae extends V{constructor(t){super(),U(this,t,le,se,B,{})}}function ce(e){let t,n,o,r,i,l,a,u,s,g,c,h;return a=new ae({}),{c(){t=p("main"),n=p("img"),r=$(),i=p("h1"),i.textContent="Hello world!",l=$(),re(a.$$.fragment),u=$(),s=p("p"),s.innerHTML=`Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
    apps.`,g=$(),c=p("p"),c.innerHTML=`Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
    the officially supported framework, also powered by Vite!`,G(n.src,o=ie)||m(n,"src",o),m(n,"alt","Svelte Logo"),m(n,"class","svelte-1fm71xa"),m(i,"class","svelte-1fm71xa"),m(s,"class","svelte-1fm71xa"),m(c,"class","svelte-1fm71xa"),m(t,"class","svelte-1fm71xa")},m(f,x){I(f,t,x),d(t,n),d(t,r),d(t,i),d(t,l),F(a,t,null),d(t,u),d(t,s),d(t,g),d(t,c),h=!0},p:y,i(f){h||(z(a.$$.fragment,f),h=!0)},o(f){ne(a.$$.fragment,f),h=!1},d(f){f&&N(t),K(a)}}}class ue extends V{constructor(t){super(),U(this,t,null,ce,B,{})}}new ue({target:document.getElementById("app")});