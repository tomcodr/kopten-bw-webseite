(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _u(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const De={},$r=[],wn=()=>{},fg=()=>!1,Ka=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Wa=t=>t.startsWith("onUpdate:"),dt=Object.assign,yu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},rE=Object.prototype.hasOwnProperty,be=(t,e)=>rE.call(t,e),ie=Array.isArray,gr=t=>ao(t)==="[object Map]",Cs=t=>ao(t)==="[object Set]",bd=t=>ao(t)==="[object Date]",fe=t=>typeof t=="function",Ke=t=>typeof t=="string",kn=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",pg=t=>(Ce(t)||fe(t))&&fe(t.then)&&fe(t.catch),gg=Object.prototype.toString,ao=t=>gg.call(t),sE=t=>ao(t).slice(8,-1),mg=t=>ao(t)==="[object Object]",vu=t=>Ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ii=_u(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qa=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},iE=/-\w/g,kt=Qa(t=>t.replace(iE,e=>e.slice(1).toUpperCase())),oE=/\B([A-Z])/g,ns=Qa(t=>t.replace(oE,"-$1").toLowerCase()),Ja=Qa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Kl=Qa(t=>t?`on${Ja(t)}`:""),En=(t,e)=>!Object.is(t,e),ea=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},_g=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Eu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Rd;const Xa=()=>Rd||(Rd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ya(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ke(r)?uE(r):Ya(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ke(t)||Ce(t))return t}const aE=/;(?![^(]*\))/g,lE=/:([^]+)/,cE=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function uE(t){const e={};return t.replace(cE,n=>n.startsWith("/*")?"":n).split(aE).forEach(n=>{if(n){const r=n.split(lE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Fi(t){let e="";if(Ke(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const r=Fi(t[n]);r&&(e+=r+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const hE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",dE=_u(hE);function yg(t){return!!t||t===""}function fE(t,e,n){if(t.length!==e.length)return!1;let r=!0;for(let s=0;r&&s<t.length;s++)r=$s(t[s],e[s],n);return r}function Sd(t,e,n){if(t.size!==e.size)return!1;const r=Array.from(e),s=new Uint8Array(r.length);for(const i of t){let o=-1;for(let l=0;l<r.length;l++)if(!s[l]&&$s(i,r[l],n)){o=l;break}if(o<0)return!1;s[o]=1}return!0}function pE(t,e,n){let r=gr(t),s=gr(e);if(r||s||(r=Cs(t),s=Cs(e),r||s))return r&&s?Sd(t,e,n):!1;const i=Object.keys(t).length,o=Object.keys(e).length;if(i!==o)return!1;for(const l in t){const c=t.hasOwnProperty(l),u=e.hasOwnProperty(l);if(c&&!u||!c&&u||!$s(t[l],e[l],n))return!1}return String(t)===String(e)}function Pd(t,e,n,r){n||(n=[new Map,new Map]);const[s,i]=n;if(s.has(t)||i.has(e))return s.get(t)===e&&i.get(e)===t;s.set(t,e),i.set(e,t);const o=r(t,e,n);return s.delete(t),i.delete(e),o}function $s(t,e,n){if(t===e)return!0;let r=bd(t),s=bd(e);return r||s?r&&s?t.getTime()===e.getTime():!1:(r=kn(t),s=kn(e),r||s?t===e:(r=ie(t),s=ie(e),r||s?r&&s?Pd(t,e,n,fE):!1:(r=Ce(t),s=Ce(e),r||s?!r||!s?!1:Pd(t,e,n,pE):String(t)===String(e))))}function vg(t,e){return t.findIndex(n=>$s(n,e))}const Eg=t=>!!(t&&t.__v_isRef===!0),xe=t=>Ke(t)?t:t==null?"":ie(t)||Ce(t)&&(t.toString===gg||!fe(t.toString))?Eg(t)?xe(t.value):JSON.stringify(t,Tg,2):String(t),Tg=(t,e)=>Eg(e)?Tg(t,e.value):gr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Wl(r,i)+" =>"]=s,n),{})}:Cs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Wl(n))}:kn(e)?Wl(e):Ce(e)&&!ie(e)&&!mg(e)?String(e):e,Wl=(t,e="")=>{var n;return kn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let lt;class gE{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&lt&&(lt.active?(this.parent=lt,this.index=(lt.scopes||(lt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const r=this.scopes.slice();for(e=0,n=r.length;e<n;e++)r[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}const r=this.effects.slice();for(e=0,n=r.length;e<n;e++)r[e].resume()}}run(e){if(this._active){const n=lt;try{return lt=this,e()}finally{lt=n}}}on(){++this._on===1&&(this.prevScope=lt,lt=this)}off(){if(this._on>0&&--this._on===0){if(lt===this)lt=this.prevScope;else{let e=lt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,r=s.length;n<r;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function mE(){return lt}let Ve;const Ql=new WeakSet;class wg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,lt&&(lt.active?lt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ql.has(this)&&(Ql.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ag(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Cd(this),bg(this);const e=Ve,n=on;Ve=this,on=!0;try{return this.fn()}finally{Rg(this),Ve=e,on=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Iu(e);this.deps=this.depsTail=void 0,Cd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ql.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ic(this)&&this.run()}get dirty(){return Ic(this)}}let Ig=0,Ai,bi;function Ag(t,e=!1){if(t.flags|=8,e){t.next=bi,bi=t;return}t.next=Ai,Ai=t}function Tu(){Ig++}function wu(){if(--Ig>0)return;if(bi){let e=bi;for(bi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ai;){let e=Ai;for(Ai=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function bg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Rg(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Iu(r),_E(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Ic(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Sg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Sg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Bi)||(t.globalVersion=Bi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ic(t))))return;t.flags|=2;const e=t.dep,n=Ve,r=on;Ve=t,on=!0;try{bg(t);const s=t.fn(t._value);(e.version===0||En(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ve=n,on=r,Rg(t),t.flags&=-3}}function Iu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Iu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function _E(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let on=!0;const Pg=[];function Nn(){Pg.push(on),on=!1}function On(){const t=Pg.pop();on=t===void 0?!0:t}function Cd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ve;Ve=void 0;try{e()}finally{Ve=n}}}let Bi=0;class yE{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Au{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ve||!on||Ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ve)n=this.activeLink=new yE(Ve,this),Ve.deps?(n.prevDep=Ve.depsTail,Ve.depsTail.nextDep=n,Ve.depsTail=n):Ve.deps=Ve.depsTail=n,Cg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ve.depsTail,n.nextDep=void 0,Ve.depsTail.nextDep=n,Ve.depsTail=n,Ve.deps===n&&(Ve.deps=r)}return n}trigger(e){this.version++,Bi++,this.notify(e)}notify(e){Tu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{wu()}}}function Cg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Cg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ac=new WeakMap,Kr=Symbol(""),bc=Symbol(""),ji=Symbol("");function vt(t,e,n){if(on&&Ve){let r=Ac.get(t);r||Ac.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Au),s.map=r,s.key=n),s.track()}}function qn(t,e,n,r,s,i){const o=Ac.get(t);if(!o){Bi++;return}const l=c=>{c&&c.trigger()};if(Tu(),e==="clear")o.forEach(l);else{const c=ie(t),u=c&&vu(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,g)=>{(g==="length"||g===ji||!kn(g)&&g>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(ji)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Kr)),gr(t)&&l(o.get(bc)));break;case"delete":c||(l(o.get(Kr)),gr(t)&&l(o.get(bc)));break;case"set":gr(t)&&l(o.get(Kr));break}}wu()}function ps(t){const e=Se(t);return e===t||(vt(e,"iterate",ji),Xt(t))?e:Dn(t)?mr(t)?e.map(n=>Ir(Yt(n))):e.map(Ir):e.map(Yt)}function Za(t){return vt(t=Se(t),"iterate",ji),t}function _n(t,e){return Dn(t)?Ir(mr(t)?Yt(e):e):Yt(e)}const vE={__proto__:null,[Symbol.iterator](){return Jl(this,Symbol.iterator,t=>_n(this,t))},concat(...t){return ps(this).concat(...t.map(e=>ie(e)?ps(e):e))},entries(){return Jl(this,"entries",t=>(t[1]=_n(this,t[1]),t))},every(t,e){return Fn(this,"every",t,e,void 0,arguments)},filter(t,e){return Fn(this,"filter",t,e,n=>n.map(r=>_n(this,r)),arguments)},find(t,e){return Fn(this,"find",t,e,n=>_n(this,n),arguments)},findIndex(t,e){return Fn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Fn(this,"findLast",t,e,n=>_n(this,n),arguments)},findLastIndex(t,e){return Fn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Fn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Xl(this,"includes",t)},indexOf(...t){return Xl(this,"indexOf",t)},join(t){return ps(this).join(t)},lastIndexOf(...t){return Xl(this,"lastIndexOf",t)},map(t,e){return Fn(this,"map",t,e,void 0,arguments)},pop(){return hi(this,"pop")},push(...t){return hi(this,"push",t)},reduce(t,...e){return Nd(this,"reduce",t,e)},reduceRight(t,...e){return Nd(this,"reduceRight",t,e)},shift(){return hi(this,"shift")},some(t,e){return Fn(this,"some",t,e,void 0,arguments)},splice(...t){return hi(this,"splice",t)},toReversed(){return ps(this).toReversed()},toSorted(t){return ps(this).toSorted(t)},toSpliced(...t){return ps(this).toSpliced(...t)},unshift(...t){return hi(this,"unshift",t)},values(){return Jl(this,"values",t=>_n(this,t))}};function Jl(t,e,n){const r=Za(t),s=r[e],i=s.call(r);if(r!==t&&!Xt(t)){if(i[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(i));return o.next=()=>kd(i.next(),n),s!==kg[e]&&Object.defineProperties(o,{return:{get(){const l=i.return;return typeof l=="function"?l.bind(i):l}},throw:{get(){const l=i.throw;return typeof l=="function"?l.bind(i):l}}}),o}i._next=i.next,i.next=()=>kd(i._next(),n)}return i}function kd(t,e){return t.done||(t.value=e(t.value)),t}const kg=Array.prototype;function Fn(t,e,n,r,s,i){const o=Za(t),l=o!==t&&!Xt(t),c=o[e];if(c!==kg[e]){const p=c.apply(t,i);return l?Yt(p):p}let u=n;o!==t&&(l?u=function(p,g){return n.call(this,_n(t,p),g,t)}:n.length>2&&(u=function(p,g){return n.call(this,p,g,t)}));const d=c.call(o,u,r);return l&&s?s(d):d}function Nd(t,e,n,r){const s=Za(t),i=s!==t&&!Xt(t);let o=n,l=!1;s!==t&&(i?(l=r.length===0,o=function(u,d,p){return l&&(l=!1,u=_n(t,u)),n.call(this,u,_n(t,d),p,t)}):n.length>3&&(o=function(u,d,p){return n.call(this,u,d,p,t)}));const c=s[e](o,...r);return l?_n(t,c):c}function Xl(t,e,n){const r=Se(t);vt(r,"iterate",ji);const s=r[e](...n);return(s===-1||s===!1)&&Su(n[0])?(n[0]=Se(n[0]),r[e](...n)):s}function hi(t,e,n=[]){Nn(),Tu();const r=Se(t)[e].apply(t,n);return wu(),On(),r}const EE=_u("__proto__,__v_isRef,__isVue"),Ng=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(kn));function TE(t){kn(t)||(t=String(t));const e=Se(this);return vt(e,"has",t),e.hasOwnProperty(t)}class Og{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?NE:Mg:i?xg:Vg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ie(e);if(!s){let c;if(o&&(c=vE[n]))return c;if(n==="hasOwnProperty")return TE}const l=Reflect.get(e,n,wt(e)?e:r);if((kn(n)?Ng.has(n):EE(n))||(s||vt(e,"get",n),i))return l;if(wt(l)){const c=o&&vu(n)?l:l.value;return s&&Ce(c)?Sc(c):c}return Ce(l)?s?Sc(l):lo(l):l}}class Dg extends Og{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=ie(e)&&vu(n);if(!this._isShallow){const u=Dn(i);if(!Xt(r)&&!Dn(r)&&(i=Se(i),r=Se(r)),!o&&wt(i)&&!wt(r))return u||(i.value=r),!0}const l=o?Number(n)<e.length:be(e,n),c=Reflect.set(e,n,r,wt(e)?e:s);return e===Se(s)&&c&&(l?En(r,i)&&qn(e,"set",n,r):qn(e,"add",n,r)),c}deleteProperty(e,n){const r=be(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&qn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!kn(n)||!Ng.has(n))&&vt(e,"has",n),r}ownKeys(e){return vt(e,"iterate",ie(e)?"length":Kr),Reflect.ownKeys(e)}}class wE extends Og{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const IE=new Dg,AE=new wE,bE=new Dg(!0);const Rc=t=>t,Fo=t=>Reflect.getPrototypeOf(t);function RE(t,e,n){return function(...r){const s=this.__v_raw,i=Se(s),o=gr(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),d=n?Rc:e?Ir:Yt;return!e&&vt(i,"iterate",c?bc:Kr),dt(Object.create(u),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:l?[d(p[0]),d(p[1])]:d(p),done:g}}})}}function Bo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function SE(t,e){const n={get(s){const i=this.__v_raw,o=Se(i),l=Se(s);t||(En(s,l)&&vt(o,"get",s),vt(o,"get",l));const{has:c}=Fo(o),u=e?Rc:t?Ir:Yt;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&vt(Se(s),"iterate",Kr),s.size},has(s){const i=this.__v_raw,o=Se(i),l=Se(s);return t||(En(s,l)&&vt(o,"has",s),vt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Se(l),u=e?Rc:t?Ir:Yt;return!t&&vt(c,"iterate",Kr),l.forEach((d,p)=>s.call(i,u(d),u(p),o))}};return dt(n,t?{add:Bo("add"),set:Bo("set"),delete:Bo("delete"),clear:Bo("clear")}:{add(s){const i=Se(this),o=Fo(i),l=Se(s),c=!e&&!Xt(s)&&!Dn(s)?l:s;return o.has.call(i,c)||En(s,c)&&o.has.call(i,s)||En(l,c)&&o.has.call(i,l)||(i.add(c),qn(i,"add",c,c)),this},set(s,i){!e&&!Xt(i)&&!Dn(i)&&(i=Se(i));const o=Se(this),{has:l,get:c}=Fo(o);let u=l.call(o,s);u||(s=Se(s),u=l.call(o,s));const d=c.call(o,s);return o.set(s,i),u?En(i,d)&&qn(o,"set",s,i):qn(o,"add",s,i),this},delete(s){const i=Se(this),{has:o,get:l}=Fo(i);let c=o.call(i,s);c||(s=Se(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&qn(i,"delete",s,void 0),u},clear(){const s=Se(this),i=s.size!==0,o=s.clear();return i&&qn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=RE(s,t,e)}),n}function bu(t,e){const n=SE(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_isShallow"?e:s==="__v_raw"?r:Reflect.get(be(n,s)&&s in r?n:r,s,i)}const PE={get:bu(!1,!1)},CE={get:bu(!1,!0)},kE={get:bu(!0,!1)};const Vg=new WeakMap,xg=new WeakMap,Mg=new WeakMap,NE=new WeakMap;function OE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lo(t){return Dn(t)?t:Ru(t,!1,IE,PE,Vg)}function Lg(t){return Ru(t,!1,bE,CE,xg)}function Sc(t){return Ru(t,!0,AE,kE,Mg)}function Ru(t,e,n,r,s){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=s.get(t);if(i)return i;const o=OE(sE(t));if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function mr(t){return Dn(t)?mr(t.__v_raw):!!(t&&t.__v_isReactive)}function Dn(t){return!!(t&&t.__v_isReadonly)}function Xt(t){return!!(t&&t.__v_isShallow)}function Su(t){return t?!!t.__v_raw:!1}function Se(t){const e=t&&t.__v_raw;return e?Se(e):t}function DE(t){return!be(t,"__v_skip")&&Object.isExtensible(t)&&_g(t,"__v_skip",!0),t}const Yt=t=>Ce(t)?lo(t):t,Ir=t=>Ce(t)?Sc(t):t;function wt(t){return t?t.__v_isRef===!0:!1}function rt(t){return Ug(t,!1)}function VE(t){return Ug(t,!0)}function Ug(t,e){return wt(t)?t:new xE(t,e)}class xE{constructor(e,n){this.dep=new Au,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Se(e),this._value=n?e:Yt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Xt(e)||Dn(e);e=r?e:Se(e),En(e,n)&&(this._rawValue=e,this._value=r?e:Yt(e),this.dep.trigger())}}function Wr(t){return wt(t)?t.value:t}const ME={get:(t,e,n)=>e==="__v_raw"?t:Wr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return wt(s)&&!wt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Fg(t){return mr(t)?t:new Proxy(t,ME)}class LE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Au(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Bi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ve!==this)return Ag(this,!0),!0}get value(){const e=this.dep.track();return Sg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function UE(t,e,n=!1){let r,s;return fe(t)?r=t:(r=t.get,s=t.set),new LE(r,s,n)}const jo={},ga=new WeakMap;let Fr;function FE(t,e=!1,n=Fr){if(n){let r=ga.get(n);r||ga.set(n,r=[]),r.push(t)}}function BE(t,e,n=De){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=H=>s?H:Xt(H)||s===!1||s===0?Hn(H,1):Hn(H);let d,p,g,y,k=!1,O=!1;if(wt(t)?(p=()=>t.value,k=Xt(t)):mr(t)?(p=()=>u(t),k=!0):ie(t)?(O=!0,k=t.some(H=>mr(H)||Xt(H)),p=()=>t.map(H=>{if(wt(H))return H.value;if(mr(H))return u(H);if(fe(H))return c?c(H,2):H()})):fe(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){Nn();try{g()}finally{On()}}const H=Fr;Fr=d;try{return c?c(t,3,[y]):t(y)}finally{Fr=H}}:p=wn,e&&s){const H=p,le=s===!0?1/0:s;p=()=>Hn(H(),le)}const V=mE(),B=()=>{d.stop(),V&&V.active&&yu(V.effects,d)};if(i&&e){const H=e;e=(...le)=>{try{return H(...le)}finally{B()}}}let N=O?new Array(t.length).fill(jo):jo;const L=H=>{if(!(!(d.flags&1)||!d.dirty&&!H))if(e){const le=d.run();if(H||s||k||(O?le.some((ge,A)=>En(ge,N[A])):En(le,N))){const ge=Fr;Nn();try{g&&g(),Fr=d;const A=[le,N===jo?void 0:O&&N[0]===jo?[]:N,y];N=le,c?c(e,3,A):e(...A)}finally{Fr=ge,On()}}}else d.run()};return l&&l(L),d=new wg(p),d.scheduler=o?()=>o(L,!1):L,y=H=>FE(H,!1,d),g=d.onStop=()=>{const H=ga.get(d);if(H){if(c)c(H,4);else for(const le of H)le();ga.delete(d)}},e?r?L(!0):N=d.run():o?o(L.bind(null,!0),!0):d.run(),B.pause=d.pause.bind(d),B.resume=d.resume.bind(d),B.stop=B,B}function Hn(t,e=1/0,n){if(e<=0||!Ce(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,wt(t))Hn(t.value,e,n);else if(ie(t))for(let r=0;r<t.length;r++)Hn(t[r],e,n);else if(Cs(t)||gr(t))t.forEach(r=>{Hn(r,e,n)});else if(mg(t)){for(const r in t)Hn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Hn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function co(t,e,n,r){try{return r?t(...r):t()}catch(s){el(s,e,n)}}function an(t,e,n,r){if(fe(t)){const s=co(t,e,n,r);return s&&pg(s)&&s.catch(i=>{el(i,e,n)}),s}if(ie(t)){const s=[];for(let i=0;i<t.length;i++)s.push(an(t[i],e,n,r));return s}}function el(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||De;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,u)===!1)return}l=l.parent}if(i){Nn(),co(i,null,10,[t,c,u]),On();return}}jE(t,n,s,r,o)}function jE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ct=[];let nn=-1;const yn=[];let ir=null,gs=0;const Bg=Promise.resolve();let ma=null;function jg(t){const e=ma||Bg;return t?e.then(this?t.bind(this):t):e}function $E(t){let e=nn+1,n=Ct.length;for(;e<n;){const r=e+n>>>1,s=Ct[r],i=$i(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Pu(t){if(!(t.flags&1)){const e=$i(t),n=Ct[Ct.length-1];!n||!(t.flags&2)&&e>=$i(n)?Ct.push(t):Ct.splice($E(e),0,t),t.flags|=1,$g()}}function $g(){ma||(ma=Bg.then(Gg))}function qE(t){if(!ie(t))ir&&t.id===-1?ir.splice(gs+1,0,t):t.flags&1||(yn.push(t),t.flags|=1);else for(let e=0;e<t.length;e++)yn.push(t[e]);$g()}function qg(t,e,n,r=nn+1){for(;r<Ct.length;r++){const s=Ct[r];if(s&&s.flags&2){if(t&&s.id!==t.uid||e!==void 0&&!(s.id>=e))continue;Ct.splice(r,1),r=t?r-1:nn,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Hg(t,e,n=0){if(yn.length){let r=yn,s=0;if(e){r=[];for(let o=0;o<yn.length;o++){const l=yn[o];(l.i!==void 0?!l.i||l.i.uid<n:e.has(l))?yn[s++]=l:r.push(l)}}const i=[...new Set(r)].sort((o,l)=>$i(o)-$i(l));if(yn.length=s,ir){for(let o=0;o<i.length;o++)ir.push(i[o]);return}for(ir=i,gs=0;gs<ir.length;gs++){const o=ir[gs];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}ir=null,gs=0}}let Yl=!1;function HE(t,e){if(Yl){t();return}const n=e===void 0?void 0:new Set(yn);t(),Yl=!0;try{qg(void 0,e),Hg(void 0,n,e)}finally{Yl=!1}}const $i=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Gg(t){try{for(nn=0;nn<Ct.length;nn++){const e=Ct[nn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),co(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;nn<Ct.length;nn++){const e=Ct[nn];e&&(e.flags&=-2)}nn=-1,Ct.length=0,Hg(),ma=null,(Ct.length||yn.length)&&Gg()}}let jt=null,zg=null;function _a(t){const e=jt;return jt=t,zg=t&&t.type.__scopeId||null,e}function ct(t,e=jt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&wa(-1);const i=_a(e),o=Qr.length;let l;try{l=t(...s)}finally{for(let c=Qr.length;c>o;c--)_m();_a(i),r._d&&wa(1)}return l};return r._n=!0,r._c=!0,r._d=!0,r}function lr(t,e){if(jt===null)return t;const n=ol(jt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=De]=e[s];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&Hn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Lr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Nn(),an(c,n,8,[t.el,l,t,e]),On())}}function ta(t,e){if(Tt){let n=Tt.provides;const r=Tt.parent&&Tt.parent.provides;r===n&&(n=Tt.provides=Object.create(r)),n[t]=e}}function Kn(t,e,n=!1){const r=qT();if(r||ws){let s=ws?ws._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}const GE=Symbol.for("v-scx"),zE=()=>Kn(GE);function Ri(t,e,n){return Kg(t,e,n)}function Kg(t,e,n=De){const{immediate:r,deep:s,flush:i,once:o}=n,l=dt({},n),c=e&&r||!e&&i!=="post";let u;if(Ki){if(i==="sync"){const y=zE();u=y.__watcherHandles||(y.__watcherHandles=[])}else if(!c){const y=()=>{};return y.stop=wn,y.resume=wn,y.pause=wn,y}}const d=Tt;l.call=(y,k,O)=>an(y,d,k,O);let p=!1;i==="post"?l.scheduler=y=>{y.i=d,Dt(y,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(y,k)=>{k?y():Pu(y)}),l.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,d&&(y.id=d.uid,y.i=d))};const g=BE(t,e,l);return Ki&&(u?u.push(g):c&&g()),g}function KE(t,e,n){const r=this.proxy,s=Ke(t)?t.includes(".")?Wg(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const o=uo(this),l=Kg(s,i.bind(r),n);return o(),l}function Wg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const WE=Symbol("_vte"),tl=t=>t.__isTeleport,Zl=Symbol("_leaveCb");function QE(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==ln){e=n;break}}return e}function Qg(t){if(!Cu(t))return tl(t.type)&&t.children?QE(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&fe(n.default))return n.default()}}function ya(t,e){if(t.shapeFlag&6&&t.component){t.transition=e;const n=t.component.subTree;ya(tl(n.type)&&Qg(n)||n,e)}else if(t.shapeFlag&128)t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback);else if(t.transition=e,t.type===ze&&ie(t.children)){const n=sm(t.children,!1);n&&ya(n,e)}}function Pc(t){if(t.component)return Pc(t.component.subTree);if(t.type===ze){const e=ie(t.children)&&sm(t.children,!1);return e?Pc(e):void 0}if(t.type!==ln)return t}function Jg(t,e){return fe(t)?dt({name:t.name},e,{setup:t}):t}function Xg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Od(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const va=new WeakMap;function Si(t,e,n,r,s=!1){if(ie(t)){t.forEach((O,V)=>Si(O,e&&(ie(e)?e[V]:e),n,r,s));return}if(Pi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Si(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ol(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,d=l.refs===De?l.refs={}:l.refs,p=l.setupState,g=Se(p),y=p===De?fg:O=>Od(d,O)?!1:be(g,O),k=(O,V)=>!(V&&Od(d,V));if(u!=null&&u!==c){if(Dd(e),Ke(u))d[u]=null,y(u)&&(p[u]=null);else if(wt(u)){const O=e;k(u,O.k)&&(u.value=null),O.k&&(d[O.k]=null)}}if(fe(c))co(c,l,12,[o,d]);else{const O=Ke(c),V=wt(c);if(O||V){const B=()=>{if(t.f){const N=O?y(c)?p[c]:d[c]:k()||!t.k?c.value:d[t.k];if(s)ie(N)&&yu(N,i);else if(ie(N))N.includes(i)||N.push(i);else if(O)d[c]=[i],y(c)&&(p[c]=d[c]);else{const L=[i];k(c,t.k)&&(c.value=L),t.k&&(d[t.k]=L)}}else O?(d[c]=o,y(c)&&(p[c]=o)):V&&(k(c,t.k)&&(c.value=o),t.k&&(d[t.k]=o))};if(o){const N=()=>{B(),va.delete(t)};N.id=-1,va.set(t,N),Dt(N,n)}else Dd(t),B()}}}function Dd(t){const e=va.get(t);e&&(e.flags|=8,va.delete(t))}Xa().requestIdleCallback;Xa().cancelIdleCallback;const Pi=t=>!!t.type.__asyncLoader,Cu=t=>t.type.__isKeepAlive;function JE(t,e){Yg(t,"a",e)}function XE(t,e){Yg(t,"da",e)}function Yg(t,e,n=Tt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(nl(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Cu(s.parent.vnode)&&YE(r,e,n,s),s=s.parent}}function YE(t,e,n,r){const s=nl(e,t,r,!0);rl(()=>{yu(r[e],s)},n)}function nl(t,e,n=Tt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Nn();const l=uo(n),c=an(e,n,t,o);return l(),On(),c});return r?s.unshift(i):s.push(i),i}}const Yn=t=>(e,n=Tt)=>{(!Ki||t==="sp")&&nl(t,(...r)=>e(...r),n)},ZE=Yn("bm"),qs=Yn("m"),eT=Yn("bu"),tT=Yn("u"),Zg=Yn("bum"),rl=Yn("um"),nT=Yn("sp"),rT=Yn("rtg"),sT=Yn("rtc");function iT(t,e=Tt){nl("ec",t,e)}const oT="components";function Ea(t,e){return lT(oT,t,!0,e)||t}const aT=Symbol.for("v-ndc");function lT(t,e,n=!0,r=!1){const s=jt||Tt;if(s){const i=s.type;{const l=WT(i,!1);if(l&&(l===e||l===kt(e)||l===Ja(kt(e))))return i}const o=Vd(s[t]||i[t],e)||Vd(s.appContext[t],e);return!o&&r?i:o}}function Vd(t,e){return t&&(t[e]||t[kt(e)]||t[Ja(kt(e))])}function qi(t,e,n,r){let s;const i=n,o=ie(t);if(o||Ke(t)){const l=o&&mr(t);let c=!1,u=!1;l&&(c=!Xt(t),u=Dn(t),t=Za(t)),s=new Array(t.length);for(let d=0,p=t.length;d<p;d++)s[d]=e(c?u?Ir(Yt(t[d])):Yt(t[d]):t[d],d,void 0,i)}else if(typeof t=="number")if(!Number.isInteger(t)||t<0)s=[];else{s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Ce(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}const Cc=t=>t?Tm(t)?ol(t):Cc(t.parent):null,Ci=dt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Cc(t.parent),$root:t=>Cc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>tm(t),$forceUpdate:t=>t.f||(t.f=()=>{Pu(t.update)}),$nextTick:t=>t.n||(t.n=jg.bind(t.proxy)),$watch:t=>KE.bind(t)}),ec=(t,e)=>t!==De&&!t.__isScriptSetup&&be(t,e),cT={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ec(r,e))return o[e]=1,r[e];if(s!==De&&be(s,e))return o[e]=2,s[e];if(be(i,e))return o[e]=3,i[e];if(n!==De&&be(n,e))return o[e]=4,n[e];kc&&(o[e]=0)}}const u=Ci[e];let d,p;if(u)return e==="$attrs"&&vt(t.attrs,"get",""),u(t);if((d=l.__cssModules)&&(d=d[e]))return d;if(n!==De&&be(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,be(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ec(s,e)?(s[e]=n,!0):r!==De&&be(r,e)?(r[e]=n,!0):be(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},l){let c;return!!(n[l]||t!==De&&l[0]!=="$"&&be(t,l)||ec(e,l)||be(i,l)||be(r,l)||be(Ci,l)||be(s.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:be(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function xd(t){return ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let kc=!0;function uT(t){const e=tm(t),n=t.proxy,r=t.ctx;kc=!1,e.beforeCreate&&Md(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:g,beforeUpdate:y,updated:k,activated:O,deactivated:V,beforeDestroy:B,beforeUnmount:N,destroyed:L,unmounted:H,render:le,renderTracked:ge,renderTriggered:A,errorCaptured:v,serverPrefetch:T,expose:b,inheritAttrs:R,components:P,directives:E,filters:At}=e;if(u&&hT(u,r,null),o)for(const we in o){const ye=o[we];fe(ye)&&(r[we]=ye.bind(n))}if(s){const we=s.call(n,n);Ce(we)&&(t.data=lo(we))}if(kc=!0,i)for(const we in i){const ye=i[we],Mt=fe(ye)?ye.bind(n,n):fe(ye.get)?ye.get.bind(n,n):wn,Zt=!fe(ye)&&fe(ye.set)?ye.set.bind(n):wn,zt=Wt({get:Mt,set:Zt});Object.defineProperty(r,we,{enumerable:!0,configurable:!0,get:()=>zt.value,set:Be=>zt.value=Be})}if(l)for(const we in l)em(l[we],r,n,we);if(c){const we=fe(c)?c.call(n):c;Reflect.ownKeys(we).forEach(ye=>{ta(ye,we[ye])})}d&&Md(d,t,"c");function Xe(we,ye){ie(ye)?ye.forEach(Mt=>we(Mt.bind(n))):ye&&we(ye.bind(n))}if(Xe(ZE,p),Xe(qs,g),Xe(eT,y),Xe(tT,k),Xe(JE,O),Xe(XE,V),Xe(iT,v),Xe(sT,ge),Xe(rT,A),Xe(Zg,N),Xe(rl,H),Xe(nT,T),ie(b))if(b.length){const we=t.exposed||(t.exposed={});b.forEach(ye=>{Object.defineProperty(we,ye,{get:()=>n[ye],set:Mt=>n[ye]=Mt,enumerable:!0})})}else t.exposed||(t.exposed={});le&&t.render===wn&&(t.render=le),R!=null&&(t.inheritAttrs=R),P&&(t.components=P),E&&(t.directives=E),T&&Xg(t)}function hT(t,e,n=wn){ie(t)&&(t=Nc(t));for(const r in t){const s=t[r];let i;Ce(s)?"default"in s?i=Kn(s.from||r,s.default,!0):i=Kn(s.from||r):i=Kn(s),wt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Md(t,e,n){an(ie(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function em(t,e,n,r){let s=r.includes(".")?Wg(n,r):()=>n[r];if(Ke(t)){const i=e[t];fe(i)&&Ri(s,i)}else if(fe(t))Ri(s,t.bind(n));else if(Ce(t))if(ie(t))t.forEach(i=>em(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&Ri(s,i,t)}}function tm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Ta(c,u,o,!0)),Ta(c,e,o)),Ce(e)&&i.set(e,c),c}function Ta(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ta(t,i,n,!0),s&&s.forEach(o=>Ta(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=dT[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const dT={data:Ld,props:Ud,emits:Ud,methods:gi,computed:gi,beforeCreate:St,created:St,beforeMount:St,mounted:St,beforeUpdate:St,updated:St,beforeDestroy:St,beforeUnmount:St,destroyed:St,unmounted:St,activated:St,deactivated:St,errorCaptured:St,serverPrefetch:St,components:gi,directives:gi,watch:pT,provide:Ld,inject:fT};function Ld(t,e){return e?t?function(){return dt(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function fT(t,e){return gi(Nc(t),Nc(e))}function Nc(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function St(t,e){return t?[...new Set([].concat(t,e))]:e}function gi(t,e){return t?dt(Object.create(null),t,e):e}function Ud(t,e){return t?ie(t)&&ie(e)?[...new Set([...t,...e])]:dt(Object.create(null),xd(t),xd(e??{})):e}function pT(t,e){if(!t)return e;if(!e)return t;const n=dt(Object.create(null),t);for(const r in e)n[r]=St(t[r],e[r]);return n}function nm(){return{app:null,config:{isNativeTag:fg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gT=0;function mT(t,e){return function(r,s=null){fe(r)||(r=dt({},r)),s!=null&&!Ce(s)&&(s=null);const i=nm(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:gT++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:JT,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&fe(d.install)?(o.add(d),d.install(u,...p)):fe(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,g){if(!c){const y=u._ceVNode||me(r,s);return y.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(y,d,g),c=!0,u._container=d,d.__vue_app__=u,ol(y.component)}},onUnmount(d){l.push(d)},unmount(){c&&(an(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=ws;ws=u;try{return d()}finally{ws=p}}};return u}}let ws=null;const _T=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${kt(e)}Modifiers`]||t[`${ns(e)}Modifiers`];function yT(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||De;let s=n;const i=e.startsWith("update:"),o=i&&_T(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>Ke(d)?d.trim():d)),o.number&&(s=s.map(Eu)));let l,c=r[l=Kl(e)]||r[l=Kl(kt(e))];!c&&i&&(c=r[l=Kl(ns(e))]),c&&an(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,an(u,t,6,s)}}const vT=new WeakMap;function rm(t,e,n=!1){const r=n?vT:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!fe(t)){const c=u=>{const d=rm(u,e,!0);d&&(l=!0,dt(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Ce(t)&&r.set(t,null),null):(ie(i)?i.forEach(c=>o[c]=null):dt(o,i),Ce(t)&&r.set(t,o),o)}function sl(t,e){return!t||!Ka(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),be(t,e[0].toLowerCase()+e.slice(1))||be(t,ns(e))||be(t,e))}function Fd(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:g,setupState:y,ctx:k,inheritAttrs:O}=t,V=_a(t);let B,N;try{if(n.shapeFlag&4){const H=s||r,le=H;B=vn(u.call(le,H,d,p,y,g,k)),N=l}else{const H=e;B=vn(H.length>1?H(p,{attrs:l,slots:o,emit:c}):H(p,null)),N=e.props?l:ET(l)}}catch(H){Qr.length=0,el(H,t,1),B=me(ln)}let L=B;if(N&&O!==!1){const H=Object.keys(N),{shapeFlag:le}=L;H.length&&le&7&&(i&&H.some(Wa)&&(N=TT(N,i)),L=ks(L,N,!1,!0))}if(n.dirs&&(L=ks(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition){const H=tl(L.type)&&Qg(L)||L;ya(H,n.transition)}return B=L,_a(V),B}function sm(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(Gi(s)){if(s.type!==ln||s.children==="v-if"){if(n)return;n=s}}else return}return n}const ET=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ka(n))&&((e||(e={}))[n]=t[n]);return e},TT=(t,e)=>{const n={};for(const r in t)(!Wa(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function wT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Bd(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(im(o,r,g)&&!sl(u,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Bd(r,o,u):!0:!!o;return!1}function Bd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(!be(t,i)||im(e,t,i)&&!sl(n,i))return!0}return!1}function im(t,e,n){const r=t[n],s=e[n];return n==="style"&&Ce(r)&&Ce(s)?!$s(r,s):r!==s}function IT({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const om={},am=()=>Object.create(om),lm=t=>Object.getPrototypeOf(t)===om;function AT(t,e,n,r=!1){const s={},i=am();t.propsDefaults=Object.create(null),cm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Lg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function bT(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Se(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(sl(t.emitsOptions,g))continue;const y=e[g];if(c)if(be(i,g))y!==i[g]&&(i[g]=y,u=!0);else{const k=kt(g);s[k]=Oc(c,l,k,y,t,!1)}else y!==i[g]&&(i[g]=y,u=!0)}}}else{cm(t,e,s,i)&&(u=!0);let d;for(const p in l)(!e||!be(e,p)&&((d=ns(p))===p||!be(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Oc(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!be(e,p))&&(delete i[p],u=!0)}u&&qn(t.attrs,"set","")}function cm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Ii(c))continue;const u=e[c];let d;s&&be(s,d=kt(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:sl(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Se(n),u=l||De;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Oc(s,c,p,u[p],t,!be(u,p))}}return o}function Oc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=be(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&fe(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=uo(s);r=u[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===ns(n))&&(r=!0))}return r}const RT=new WeakMap;function um(t,e,n=!1){const r=n?RT:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!fe(t)){const d=p=>{c=!0;const[g,y]=um(p,e,!0);dt(o,g),y&&l.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Ce(t)&&r.set(t,$r),$r;if(ie(i))for(let d=0;d<i.length;d++){const p=kt(i[d]);jd(p)&&(o[p]=De)}else if(i)for(const d in i){const p=kt(d);if(jd(p)){const g=i[d],y=o[p]=ie(g)||fe(g)?{type:g}:dt({},g),k=y.type;let O=!1,V=!0;if(ie(k))for(let B=0;B<k.length;++B){const N=k[B],L=fe(N)&&N.name;if(L==="Boolean"){O=!0;break}else L==="String"&&(V=!1)}else O=fe(k)&&k.name==="Boolean";y[0]=O,y[1]=V,(O||be(y,"default"))&&l.push(p)}}const u=[o,l];return Ce(t)&&r.set(t,u),u}function jd(t){return t[0]!=="$"&&!Ii(t)}const ku=t=>t==="_"||t==="_ctx"||t==="$stable",Nu=t=>ie(t)?t.map(vn):[vn(t)],ST=(t,e,n)=>{if(e._n)return e;const r=ct((...s)=>Nu(e(...s)),n);return r._c=!1,r},hm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ku(s))continue;const i=t[s];if(fe(i))e[s]=ST(s,i,r);else if(i!=null){const o=Nu(i);e[s]=()=>o}}},dm=(t,e)=>{const n=Nu(e);t.slots.default=()=>n},fm=(t,e,n)=>{for(const r in e)(n||!ku(r))&&(t[r]=e[r])},PT=(t,e,n)=>{const r=t.slots=am();if(t.vnode.shapeFlag&32){const s=e._;s?(fm(r,e,n),n&&_g(r,"_",s,!0)):hm(e,r)}else e&&dm(t,e)},CT=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=De;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:fm(s,e,n):(i=!e.$stable,hm(e,s)),o=e}else e&&(dm(t,e),o={default:1});if(i)for(const l in s)!ku(l)&&o[l]==null&&delete s[l]},Dt=VT;function kT(t){return NT(t)}function NT(t,e){const n=Xa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:g,setScopeId:y=wn,insertStaticContent:k}=t,O=(_,I,S,D=null,M=null,j=null,G=void 0,K=null,z=!!I.dynamicChildren)=>{if(_===I)return;_&&!di(_,I)&&(D=U(_),Be(_,M,j,!0),_=null),I.patchFlag===-2&&(z=!1,I.dynamicChildren=null),I.dynamicChildren&&_&&_.dynamicChildren&&_.dynamicChildren.hasOnce&&(I.dynamicChildren===$r&&(I.dynamicChildren=[]),I.dynamicChildren.hasOnce=!0);const{type:q,ref:ee,shapeFlag:J}=I;switch(q){case il:V(_,I,S,D);break;case ln:B(_,I,S,D);break;case na:_==null&&N(I,S,D,G);break;case ze:P(_,I,S,D,M,j,G,K,z);break;default:J&1?le(_,I,S,D,M,j,G,K,z):J&6?E(_,I,S,D,M,j,G,K,z):(J&64||J&128)&&q.process(_,I,S,D,M,j,G,K,z,Q)}ee!=null&&M?Si(ee,_&&_.ref,j,I||_,!I):ee==null&&_&&_.ref!=null&&Si(_.ref,null,j,_,!0)},V=(_,I,S,D)=>{if(_==null)r(I.el=l(I.children),S,D);else{const M=I.el=_.el;I.children!==_.children&&u(M,I.children)}},B=(_,I,S,D)=>{_==null?r(I.el=c(I.children||""),S,D):I.el=_.el},N=(_,I,S,D)=>{[_.el,_.anchor]=k(_.children,I,S,D,_.el,_.anchor)},L=({el:_,anchor:I},S,D)=>{let M;for(;_&&_!==I;)M=g(_),r(_,S,D),_=M;r(I,S,D)},H=({el:_,anchor:I})=>{let S;for(;_&&_!==I;)S=g(_),s(_),_=S;s(I)},le=(_,I,S,D,M,j,G,K,z)=>{if(I.type==="svg"?G="svg":I.type==="math"&&(G="mathml"),_==null)ge(I,S,D,M,j,G,K,z);else{const q=_.el&&_.el._isVueCE?_.el:null;try{q&&q._beginPatch(),T(_,I,M,j,G,K,z)}finally{q&&q._endPatch()}}},ge=(_,I,S,D,M,j,G,K)=>{let z,q;const{props:ee,shapeFlag:J,transition:te,dirs:se}=_;if(z=_.el=o(_.type,j,ee&&ee.is,ee),J&8?d(z,_.children):J&16&&v(_.children,z,null,D,M,tc(_,j),G,K),se&&Lr(_,null,D,"created"),A(z,_,_.scopeId,G,D),ee){for(const ue in ee)ue!=="value"&&!Ii(ue)&&i(z,ue,null,ee[ue],j,D);"value"in ee&&i(z,"value",null,ee.value,j),(q=ee.onVnodeBeforeMount)&&gn(q,D,_)}se&&Lr(_,null,D,"beforeMount");const ve=OT(M,te);ve&&te.beforeEnter(z),r(z,I,S),((q=ee&&ee.onVnodeMounted)||ve||se)&&Dt(()=>{try{q&&gn(q,D,_),ve&&te.enter(z),se&&Lr(_,null,D,"mounted")}finally{}},M)},A=(_,I,S,D,M)=>{if(S&&y(_,S),D)for(let j=0;j<D.length;j++)y(_,D[j]);if(M){let j=M.subTree;if(I===j||mm(j.type)&&(j.ssContent===I||j.ssFallback===I)){const G=M.vnode;A(_,G,G.scopeId,G.slotScopeIds,M.parent)}}},v=(_,I,S,D,M,j,G,K,z=0)=>{for(let q=z;q<_.length;q++){const ee=_[q]=K?$n(_[q]):vn(_[q]);O(null,ee,I,S,D,M,j,G,K)}},T=(_,I,S,D,M,j,G)=>{const K=I.el=_.el;let{patchFlag:z,dynamicChildren:q,dirs:ee}=I;z|=_.patchFlag&16;const J=_.props||De,te=I.props||De;let se;if(S&&Ur(S,!1),(se=te.onVnodeBeforeUpdate)&&gn(se,S,I,_),ee&&Lr(I,_,S,"beforeUpdate"),S&&Ur(S,!0),q&&(!_.dynamicChildren||_.dynamicChildren.length!==q.length)&&(z=0,G=!1,q=null),(J.innerHTML&&te.innerHTML==null||J.textContent&&te.textContent==null)&&d(K,""),q?b(_.dynamicChildren,q,K,S,D,tc(I,M),j):G||ye(_,I,K,null,S,D,tc(I,M),j,!1),z>0){if(z&16)R(K,J,te,S,M);else if(z&2&&J.class!==te.class&&i(K,"class",null,te.class,M),z&4&&i(K,"style",J.style,te.style,M),z&8){const ve=I.dynamicProps;for(let ue=0;ue<ve.length;ue++){const he=ve[ue],Le=J[he],Ye=te[he];(Ye!==Le||he==="value")&&i(K,he,Le,Ye,M,S)}}z&1&&_.children!==I.children&&d(K,I.children)}else!G&&q==null&&R(K,J,te,S,M);((se=te.onVnodeUpdated)||ee)&&Dt(()=>{se&&gn(se,S,I,_),ee&&Lr(I,_,S,"updated")},D)},b=(_,I,S,D,M,j,G)=>{for(let K=0;K<I.length;K++){const z=_[K],q=I[K],ee=z.el||Dc(z),J=ee&&(z.type===ze||!di(z,q)||z.shapeFlag&198)?p(ee):S;O(z,q,J,null,D,M,j,G,!0)}},R=(_,I,S,D,M)=>{if(I!==S){if(I!==De)for(const j in I)!Ii(j)&&!(j in S)&&i(_,j,I[j],null,M,D);for(const j in S){if(Ii(j))continue;const G=S[j],K=I[j];G!==K&&j!=="value"&&i(_,j,K,G,M,D)}"value"in S&&i(_,"value",I.value,S.value,M)}},P=(_,I,S,D,M,j,G,K,z)=>{const q=I.el=_?_.el:l(""),ee=I.anchor=_?_.anchor:l("");let{patchFlag:J,dynamicChildren:te,slotScopeIds:se}=I;se&&(K=K?K.concat(se):se),_==null?(r(q,S,D),r(ee,S,D),v(I.children||[],S,ee,M,j,G,K,z)):J>0&&J&64&&te&&_.dynamicChildren&&_.dynamicChildren.length===te.length?(b(_.dynamicChildren,te,S,M,j,G,K),(I.key!=null||M&&I===M.subTree)&&pm(_,I,!0)):ye(_,I,S,ee,M,j,G,K,z)},E=(_,I,S,D,M,j,G,K,z)=>{I.slotScopeIds=K,_==null?I.shapeFlag&512?M.ctx.activate(I,S,D,G,z):At(I,S,D,M,j,G,z):Gt(_,I,z)},At=(_,I,S,D,M,j,G)=>{const K=_.component=$T(_,D,M);if(Cu(_)&&(K.ctx.renderer=Q),HT(K,!1,G),K.asyncDep){if(M&&M.registerDep(K,Xe,G,j),!_.el){const z=K.subTree=me(ln);B(null,z,I,S),_.placeholder=z.el}}else Xe(K,_,I,S,M,j,G)},Gt=(_,I,S)=>{const D=I.component=_.component;if(wT(_,I,S))if(D.asyncDep&&!D.asyncResolved){I.el=_.el,I.placeholder=_.placeholder,we(D,I,S);return}else D.next=I,D.update();else I.el=_.el,I.placeholder=_.placeholder,D.vnode=I},Xe=(_,I,S,D,M,j,G)=>{const K=()=>{if(_.isMounted){let{next:J,bu:te,u:se,parent:ve,vnode:ue}=_;{const Kt=gm(_);if(Kt){J&&(J.el=ue.el,we(_,J,G)),Kt.asyncDep.then(()=>{Dt(()=>{_.isUnmounted||q()},M)});return}}let he=J,Le;Ur(_,!1),J?(J.el=ue.el,we(_,J,G)):J=ue,te&&ea(te),(Le=J.props&&J.props.onVnodeBeforeUpdate)&&gn(Le,ve,J,ue),Ur(_,!0);const Ye=Fd(_),Ut=_.subTree;_.subTree=Ye,O(Ut,Ye,p(Ut.el),U(Ut),_,M,j),J.el=Ye.el,he===null&&IT(_,Ye.el),se&&Dt(se,M),(Le=J.props&&J.props.onVnodeUpdated)&&Dt(()=>gn(Le,ve,J,ue),M)}else{let J;const{el:te,props:se}=I,{bm:ve,m:ue,parent:he,root:Le,type:Ye}=_,Ut=Pi(I);Ur(_,!1),ve&&ea(ve),!Ut&&(J=se&&se.onVnodeBeforeMount)&&gn(J,he,I),Ur(_,!0);{Le.ce&&Le.ce._hasShadowRoot()&&Le.ce._injectChildStyle(Ye,_.parent?_.parent.type:void 0);const Kt=_.subTree=Fd(_);O(null,Kt,S,D,_,M,j),I.el=Kt.el}if(ue&&Dt(ue,M),!Ut&&(J=se&&se.onVnodeMounted)){const Kt=I;Dt(()=>gn(J,he,Kt),M)}(I.shapeFlag&256||he&&Pi(he.vnode)&&he.vnode.shapeFlag&256)&&_.a&&Dt(_.a,M),_.isMounted=!0,I=S=D=null}};_.scope.on();const z=_.effect=new wg(K);_.scope.off();const q=_.update=z.run.bind(z),ee=_.job=z.runIfDirty.bind(z);ee.i=_,ee.id=_.uid,z.scheduler=()=>Pu(ee),Ur(_,!0),q()},we=(_,I,S)=>{I.component=_;const D=_.vnode.props;_.vnode=I,_.next=null,bT(_,I.props,D,S),CT(_,I.children,S),Nn(),qg(_),On()},ye=(_,I,S,D,M,j,G,K,z=!1)=>{const q=_&&_.children,ee=_?_.shapeFlag:0,J=I.children,{patchFlag:te,shapeFlag:se}=I;if(te>0){if(te&128){Zt(q,J,S,D,M,j,G,K,z);return}else if(te&256){Mt(q,J,S,D,M,j,G,K,z);return}}se&8?(ee&16&&Nt(q,M,j),J!==q&&d(S,J)):ee&16?se&16?Zt(q,J,S,D,M,j,G,K,z):Nt(q,M,j,!0):(ee&8&&d(S,""),se&16&&v(J,S,D,M,j,G,K,z))},Mt=(_,I,S,D,M,j,G,K,z)=>{_=_||$r,I=I||$r;const q=_.length,ee=I.length,J=Math.min(q,ee);let te;for(te=0;te<J;te++){const se=I[te]=z?$n(I[te]):vn(I[te]);O(_[te],se,S,null,M,j,G,K,z)}q>ee?Nt(_,M,j,!0,!1,J):v(I,S,D,M,j,G,K,z,J)},Zt=(_,I,S,D,M,j,G,K,z)=>{let q=0;const ee=I.length;let J=_.length-1,te=ee-1;for(;q<=J&&q<=te;){const se=_[q],ve=I[q]=z?$n(I[q]):vn(I[q]);if(di(se,ve))O(se,ve,S,null,M,j,G,K,z);else break;q++}for(;q<=J&&q<=te;){const se=_[J],ve=I[te]=z?$n(I[te]):vn(I[te]);if(di(se,ve))O(se,ve,S,null,M,j,G,K,z);else break;J--,te--}if(q>J){if(q<=te){const se=te+1,ve=se<ee?I[se].el:D;for(;q<=te;)O(null,I[q]=z?$n(I[q]):vn(I[q]),S,ve,M,j,G,K,z),q++}}else if(q>te)for(;q<=J;)Be(_[q],M,j,!0),q++;else{const se=q,ve=q,ue=new Map;for(q=ve;q<=te;q++){const pt=I[q]=z?$n(I[q]):vn(I[q]);pt.key!=null&&ue.set(pt.key,q)}let he,Le=0;const Ye=te-ve+1;let Ut=!1,Kt=0;const en=new Array(Ye);for(q=0;q<Ye;q++)en[q]=0;for(q=se;q<=J;q++){const pt=_[q];if(Le>=Ye){Be(pt,M,j,!0);continue}let Ot;if(pt.key!=null)Ot=ue.get(pt.key);else for(he=ve;he<=te;he++)if(en[he-ve]===0&&di(pt,I[he])){Ot=he;break}Ot===void 0?Be(pt,M,j,!0):(en[Ot-ve]=q+1,Ot>=Kt?Kt=Ot:Ut=!0,O(pt,I[Ot],S,null,M,j,G,K,z),Le++)}const Ys=Ut?DT(en):$r;for(he=Ys.length-1,q=Ye-1;q>=0;q--){const pt=ve+q,Ot=I[pt],wo=I[pt+1],Io=pt+1<ee?wo.el||Dc(wo):D;en[q]===0?O(null,Ot,S,Io,M,j,G,K,z):Ut&&(he<0||q!==Ys[he]?zt(Ot,S,Io,2):he--)}}},zt=(_,I,S,D,M=null)=>{const{el:j,type:G,transition:K,children:z,shapeFlag:q}=_;if(q&6){zt(_.component.subTree,I,S,D);return}if(q&128){_.suspense.move(I,S,D);return}if(q&64){G.move(_,I,S,Q);return}if(G===ze){r(j,I,S);for(let J=0;J<z.length;J++)zt(z[J],I,S,D);r(_.anchor,I,S);return}if(G===na){L(_,I,S);return}if(D!==2&&q&1&&K)if(D===0)K.persisted&&!j[Zl]?r(j,I,S):(K.beforeEnter(j),r(j,I,S),Dt(()=>K.enter(j),M));else{const{leave:J,delayLeave:te,afterLeave:se}=K,ve=()=>{_.ctx.isUnmounted?s(j):r(j,I,S)},ue=()=>{const he=j._isLeaving||!!j[Zl];j._isLeaving&&j[Zl](!0),K.persisted&&!he?ve():J(j,()=>{ve(),se&&se()})};te?te(j,ve,ue):ue()}else r(j,I,S)},Be=(_,I,S,D=!1,M=!1)=>{const{type:j,props:G,ref:K,children:z,dynamicChildren:q,shapeFlag:ee,patchFlag:J,dirs:te,cacheIndex:se,memo:ve}=_;if((J===-2||q&&q.hasOnce)&&(M=!1),K!=null&&(Nn(),Si(K,null,S,_,!0),On()),se!=null&&(!_.ctx||_.ctx===I)&&(I.renderCache[se]=void 0),ee&256){I.ctx.deactivate(_);return}const ue=ee&1&&te,he=!Pi(_);let Le;if(he&&(Le=G&&G.onVnodeBeforeUnmount)&&gn(Le,I,_),ee&6)Lt(_.component,S,D);else{if(ee&128){_.suspense.unmount(S,D);return}ue&&Lr(_,null,I,"beforeUnmount"),ee&64?_.type.remove(_,I,S,Q,D):q&&!q.hasOnce&&(j!==ze||J>0&&J&64)?Nt(q,I,S,!1,!0):(j===ze&&J&384||!M&&ee&16)&&Nt(z,I,S),D&&je(_)}const Ye=ve!=null&&se==null;(he&&(Le=G&&G.onVnodeUnmounted)||ue||Ye)&&Dt(()=>{Le&&gn(Le,I,_),ue&&Lr(_,null,I,"unmounted"),Ye&&(_.el=null)},S)},je=_=>{const{type:I,el:S,anchor:D,transition:M}=_,j=I===ze;if(j&&!M){Mn(S,D);return}if(I===na){H(_),M&&!M.persisted&&M.afterLeave&&M.afterLeave();return}const G=j?Pc(_):_,K=()=>{j?p(S)&&Mn(S,D):s(S),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(G&&G.shapeFlag&1&&M&&!M.persisted){const{leave:z,delayLeave:q}=M,ee=G.el,J=()=>z(ee,K);q?q(ee,K,J):J()}else K()},Mn=(_,I)=>{let S;for(;_!==I;)S=g(_),s(_),_=S;s(I)},Lt=(_,I,S)=>{const{bum:D,scope:M,job:j,subTree:G,um:K,m:z,a:q}=_;$d(z),$d(q),D&&ea(D),M.stop(),j?(j.flags|=8,Be(G,_,I,S)):_.vnode.el&&G&&(G.transition=_.vnode.transition,Be(G,_,I,S)),K&&Dt(K,I),Dt(()=>{_.isUnmounted=!0},I)},Nt=(_,I,S,D=!1,M=!1,j=0)=>{for(let G=j;G<_.length;G++)Be(_[G],I,S,D,M)},U=_=>{if(_.shapeFlag&6)return U(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const I=g(_.anchor||_.el),S=I&&I[WE];return S?g(S):I},Z=(_,I,S)=>{const D=_&&I._vnode?void 0:_&&_.component?_.component.uid:jT();HE(()=>{_==null?I._vnode&&Be(I._vnode,null,null,!0):O(I._vnode||null,_,I,null,null,null,S),I._vnode=_},D)},Q={p:O,um:Be,m:zt,r:je,mt:At,mc:v,pc:ye,pbc:b,n:U,o:t};return{render:Z,hydrate:void 0,createApp:mT(Z)}}function tc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ur({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function OT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function pm(t,e,n=!1){const r=t.children,s=e.children;if(ie(r)&&ie(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=$n(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&pm(o,l)),l.type===il&&(l.patchFlag===-1&&(l=s[i]=$n(l)),l.el=o.el),l.type===ln&&!l.el&&(l.el=o.el)}}function DT(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function gm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:gm(e)}function $d(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Dc(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Dc(e.subTree):null}const mm=t=>t.__isSuspense;function VT(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):qE(t)}const ze=Symbol.for("v-fgt"),il=Symbol.for("v-txt"),ln=Symbol.for("v-cmt"),na=Symbol.for("v-stc"),Qr=[];let $t=null;function ke(t=!1){Qr.push($t=t?null:[])}function _m(){Qr.pop(),$t=Qr[Qr.length-1]||null}let Hi=1;function wa(t,e=!1){Hi+=t,t<0&&$t&&e&&($t.hasOnce=!0)}function ym(t){return t.dynamicChildren=Hi>0?$t||$r:null,_m(),Hi>0&&$t&&$t.push(t),t}function Oe(t,e,n,r,s,i){return ym(w(t,e,n,r,s,i,!0))}function xT(t,e,n,r,s){return ym(me(t,e,n,r,s,!0))}function Gi(t){return t?t.__v_isVNode===!0:!1}function di(t,e){return t.type===e.type&&t.key===e.key}const vm=({key:t})=>t??null,ra=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ke(t)||wt(t)||fe(t)?{i:jt,r:t,k:e,f:!!n}:t:null);function w(t,e=null,n=null,r=0,s=null,i=t===ze?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&vm(e),ref:e&&ra(e),scopeId:zg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:jt};return l?(Ia(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ke(n)?8:16),Hi>0&&!o&&$t&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&$t.push(c),c}const me=MT;function MT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===aT)&&(t=ln),Gi(t)){const l=ks(t,e,!0);return n&&Ia(l,n),Hi>0&&!i&&$t&&(l.shapeFlag&6?$t[$t.indexOf(t)]=l:$t.push(l)),l.patchFlag=-2,l}if(QT(t)&&(t=t.__vccOpts),e){e=LT(e);let{class:l,style:c}=e;l&&!Ke(l)&&(e.class=Fi(l)),Ce(c)&&(Su(c)&&!ie(c)&&(c=dt({},c)),e.style=Ya(c))}const o=Ke(t)?1:mm(t)?128:tl(t)?64:Ce(t)?4:fe(t)?2:0;return w(t,e,n,r,s,o,i,!0)}function LT(t){return t?Su(t)||lm(t)?dt({},t):t:null}function ks(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?FT(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&vm(u),ref:e&&e.ref?n&&i?ie(i)?i.concat(ra(e)):[i,ra(e)]:ra(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ze?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ks(t.ssContent),ssFallback:t.ssFallback&&ks(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce,cacheIndex:t.cacheIndex};return c&&r&&ya(d,c.clone(d)),d}function de(t=" ",e=0){return me(il,null,t,e)}function UT(t,e){const n=me(na,null,t);return n.staticCount=e,n}function Ns(t="",e=!1){return e?(ke(),xT(ln,null,t)):me(ln,null,t)}function vn(t){return t==null||typeof t=="boolean"?me(ln):ie(t)?me(ze,null,t.slice()):Gi(t)?$n(t):me(il,null,String(t))}function $n(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ks(t)}function Ia(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ia(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!lm(e)?e._ctx=jt:s===3&&jt&&(jt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(fe(e)){if(r&65){Ia(t,{default:e});return}e={default:e,_ctx:jt},n=32}else e=String(e),r&64?(n=16,e=[de(e)]):n=8;t.children=e,t.shapeFlag|=n}function FT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Fi([e.class,r.class]));else if(s==="style")e.style=Ya([e.style,r.style]);else if(Ka(s)){const i=e[s],o=r[s];o&&i!==o&&!(ie(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!Wa(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function gn(t,e,n,r=null){an(t,e,7,[n,r])}const BT=nm();let Em=0;function jT(){return Em}function $T(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||BT,i={uid:Em++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new gE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:um(r,s),emitsOptions:rm(r,s),emit:null,emitted:null,propsDefaults:De,inheritAttrs:r.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=yT.bind(null,i),t.ce&&t.ce(i),i}let Tt=null;const qT=()=>Tt||jt;let Aa,zi;{const t=Xa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Aa=e("__VUE_INSTANCE_SETTERS__",n=>Tt=n),zi=e("__VUE_SSR_SETTERS__",n=>Ki=n)}const uo=t=>{const e=Tt;return Aa(t),t.scope.on(),()=>{t.scope.off(),Aa(e)}},qd=()=>{Tt&&Tt.scope.off(),Aa(null)};function Tm(t){return t.vnode.shapeFlag&4}let Ki=!1;function HT(t,e=!1,n=!1){e&&zi(e);const{props:r,children:s}=t.vnode,i=Tm(t);AT(t,r,i,e),PT(t,s,n||e);const o=i?GT(t,e):void 0;return e&&zi(!1),o}function GT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,cT);const{setup:r}=n;if(r){Nn();const s=t.setupContext=r.length>1?KT(t):null,i=uo(t),o=co(r,t,0,[t.props,s]),l=pg(o);if(On(),i(),(l||t.sp)&&!Pi(t)&&Xg(t),l){if(o.then(qd,qd),e)return o.then(c=>{zi(!0);try{Hd(t,c,e)}finally{zi(!1)}}).catch(c=>{el(c,t,0)});t.asyncDep=o}else Hd(t,o)}else wm(t)}function Hd(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=Fg(e)),wm(t)}function wm(t,e,n){const r=t.type;t.render||(t.render=r.render||wn);{const s=uo(t);Nn();try{uT(t)}finally{On(),s()}}}const zT={get(t,e){return vt(t,"get",""),t[e]}};function KT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,zT),slots:t.slots,emit:t.emit,expose:e}}function ol(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Fg(DE(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ci)return Ci[n](t)},has(e,n){return n in e||n in Ci}})):t.proxy}function WT(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function QT(t){return fe(t)&&"__vccOpts"in t}const Wt=(t,e)=>UE(t,e,Ki);function Im(t,e,n){try{wa(-1);const r=arguments.length;return r===2?Ce(e)&&!ie(e)?Gi(e)?me(t,null,[e]):me(t,e):me(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Gi(n)&&(n=[n]),me(t,e,n))}finally{wa(1)}}const JT="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Vc;const Gd=typeof window<"u"&&window.trustedTypes;if(Gd)try{Vc=Gd.createPolicy("vue",{createHTML:t=>t})}catch{}const Am=Vc?t=>Vc.createHTML(t):t=>t,XT="http://www.w3.org/2000/svg",YT="http://www.w3.org/1998/Math/MathML",jn=typeof document<"u"?document:null,zd=jn&&jn.createElement("template"),ZT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?jn.createElementNS(XT,t):e==="mathml"?jn.createElementNS(YT,t):n?jn.createElement(t,{is:n}):jn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>jn.createTextNode(t),createComment:t=>jn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>jn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{zd.innerHTML=Am(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=zd.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ew=Symbol("_vtc");function tw(t,e,n){const r=t[ew];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Kd=Symbol("_vod"),nw=Symbol("_vsh"),rw=Symbol(""),sw=/(?:^|;)\s*display\s*:/;function iw(t,e,n){const r=t.style,s=Ke(n);let i=!1;if(n&&!s){if(e)if(Ke(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&mi(r,l,"")}else for(const o in e)n[o]==null&&mi(r,o,"");for(const o in n){o==="display"&&(i=!0);const l=n[o];l!=null?aw(t,o,!Ke(e)&&e?e[o]:void 0,l)||mi(r,o,l):mi(r,o,"")}}else if(s){if(e!==n){const o=r[rw];o&&(n+=";"+o),r.cssText=n,i=sw.test(n)}}else e&&t.removeAttribute("style");Kd in t&&((!s||e!==n)&&(t[Kd]=i?r.display:""),t[nw]&&(r.display="none"))}const $o=/\s*!important$/;function mi(t,e,n){if(ie(n))n.forEach(r=>mi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))$o.test(n)?t.setProperty(e,n.replace($o,""),"important"):t.setProperty(e,n);else{const r=ow(t,e);$o.test(n)?t.setProperty(ns(r),n.replace($o,""),"important"):t[r]=n}}const Wd=["Webkit","Moz","ms"],nc={};function ow(t,e){const n=nc[e];if(n)return n;let r=kt(e);if(r!=="filter"&&r in t)return nc[e]=r;r=Ja(r);for(let s=0;s<Wd.length;s++){const i=Wd[s]+r;if(i in t)return nc[e]=i}return e}function aw(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Ke(r)&&n===r}const Qd="http://www.w3.org/1999/xlink";function Jd(t,e,n,r,s,i=dE(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Qd,e.slice(6,e.length)):t.setAttributeNS(Qd,e,n):n==null||i&&!yg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":kn(n)?String(n):n)}function Xd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Am(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=yg(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function jr(t,e,n,r){t.addEventListener(e,n,r)}function lw(t,e,n,r){t.removeEventListener(e,n,r)}const Yd=Symbol("_vei");function cw(t,e,n,r,s=null){const i=t[Yd]||(t[Yd]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=dw(e);if(r){const u=i[e]=gw(r,s);jr(t,l,u,c)}else o&&(lw(t,l,o,c),i[e]=void 0)}}const uw=/(Once|Passive|Capture)$/,hw=/^on:?(?:Once|Passive|Capture)$/;function dw(t){let e,n;for(;(n=t.match(uw))&&!hw.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):ns(t.slice(2)),e]}let rc=0;const fw=Promise.resolve(),pw=()=>rc||(fw.then(()=>rc=0),rc=Date.now());function gw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(ie(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const o=s.slice(),l=[r];for(let c=0;c<o.length&&!r._stopped;c++){const u=o[c];u&&an(u,e,5,l)}}else an(s,e,5,[r])};return n.value=t,n.attached=pw(),n}const Zd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,mw=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?tw(t,r,o):e==="style"?iw(t,n,r):Ka(e)?Wa(e)||cw(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):_w(t,e,r,o))?(Xd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Jd(t,e,r,o,i,e!=="value")):t._isVueCE&&(yw(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Ke(r)))?Xd(t,kt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Jd(t,e,r,o))};function _w(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Zd(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Zd(e)&&Ke(n)?!1:e in t}function yw(t,e){const n=t._def.props;if(!n)return!1;const r=kt(e);return Array.isArray(n)?n.some(s=>kt(s)===r):Object.keys(n).some(s=>kt(s)===r)}const ba=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ie(e)?n=>ea(e,n):e};function vw(t){t.target.composing=!0}function ef(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const qr=Symbol("_assign"),qo=Symbol("_initialValue");function sc(t,e,n){return e&&(t=t.trim()),n&&(t=Eu(t)),t}const Hr={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t.parentNode&&(t.type==="text"?t[qo]=t.defaultValue.replace(/[\r\n]/g,""):t.type==="textarea"&&(t[qo]=t.defaultValue.replace(/\r\n?/g,`
`))),t[qr]=ba(s);const i=r||s.props&&s.props.type==="number";jr(t,e?"change":"input",o=>{o.target.composing||t[qr](sc(t.value,n,i))}),(n||i)&&jr(t,"change",()=>{t.value=sc(t.value,n,i)}),e||(jr(t,"compositionstart",vw),jr(t,"compositionend",ef),jr(t,"change",ef))},mounted(t,{value:e,modifiers:{trim:n,number:r}}){const s=e??"",i=t[qo];delete t[qo],i!==void 0&&(t.type==="text"||t.type==="textarea")&&t.value!==i?t[qr](sc(t.value,n,r)):t.value=s},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[qr]=ba(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Eu(t.value):t.value,c=e??"";if(l===c)return;const u=t.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c)}},Ew={deep:!0,created(t,e,n){t[qr]=ba(n),jr(t,"change",()=>{const r=t._modelValue,s=Tw(t),i=t.checked,o=t[qr];if(ie(r)){const l=vg(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(Cs(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(bm(t,i))})},mounted:tf,beforeUpdate(t,e,n){t[qr]=ba(n),tf(t,e,n)}};function tf(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ie(e))s=vg(e,r.props.value)>-1;else if(Cs(e))s=e.has(r.props.value);else{if(e===n)return;s=$s(e,bm(t,!0))}t.checked!==s&&(t.checked=s)}function Tw(t){return"_value"in t?t._value:t.value}function bm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const ww=["ctrl","shift","alt","meta"],Iw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ww.some(n=>t[`${n}Key`]&&!e.includes(n))},Rm=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const l=Iw[e[o]];if(l&&l(s,e))return}return t(s,...i)}))},Aw=dt({patchProp:mw},ZT);let nf;function bw(){return nf||(nf=kT(Aw))}const Rw=((...t)=>{const e=bw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Pw(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Sw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function Sw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Pw(t){return Ke(t)?document.querySelector(t):t}const Cw="/images/logo/logo.png",kw={class:"site-shell"},Nw={class:"header"},Ow={class:"wrap nav-wrap"},Dw=["aria-expanded","aria-label"],Vw={class:"footer"},xw={class:"wrap footer-grid"},Mw={class:"footer-about"},Lw={class:"footer-links"},Uw={class:"wrap footer-bottom"},Fw={__name:"App",setup(t){const e=rt(!1);function n(){e.value=!e.value}function r(){e.value=!1}function s(){window.innerWidth>900&&r()}function i(o){o.key==="Escape"&&r()}return qs(()=>{window.addEventListener("resize",s),window.addEventListener("keydown",i)}),Zg(()=>{window.removeEventListener("resize",s),window.removeEventListener("keydown",i)}),(o,l)=>{const c=Ea("RouterLink"),u=Ea("RouterView");return ke(),Oe("div",kw,[w("header",Nw,[w("div",Ow,[me(c,{to:"/",class:"brand","aria-label":"Koptisch-Orthodoxe Kirche Baden-Württemberg – Startseite",onClick:r},{default:ct(()=>[...l[0]||(l[0]=[w("img",{src:Cw,alt:"Ikone des heiligen Georg",class:"brand-logo",width:"54",height:"64"},null,-1),w("span",{class:"brand-text"},[w("b",null,[de("KOPTEN "),w("span",{class:"brand-accent"},"BW")]),w("small",null,"Koptisch-Orthodoxe Kirche")],-1)])]),_:1}),w("button",{class:Fi(["menu-toggle",{"is-open":e.value}]),type:"button","aria-expanded":e.value,"aria-controls":"main-navigation","aria-label":e.value?"Menü schließen":"Menü öffnen",onClick:n},[...l[1]||(l[1]=[w("span",{class:"menu-icon","aria-hidden":"true"},[w("span"),w("span"),w("span")],-1)])],10,Dw),w("nav",{id:"main-navigation",class:Fi(["main-nav",{open:e.value}]),"aria-label":"Hauptnavigation"},[me(c,{to:"/",onClick:r},{default:ct(()=>[...l[2]||(l[2]=[de(" Startseite ",-1)])]),_:1}),me(c,{to:"/veranstaltungen",onClick:r},{default:ct(()=>[...l[3]||(l[3]=[de(" Gottesdienste & Termine ",-1)])]),_:1}),me(c,{to:"/galerie",onClick:r},{default:ct(()=>[...l[4]||(l[4]=[de(" Galerie ",-1)])]),_:1}),me(c,{to:"/kontakt",onClick:r},{default:ct(()=>[...l[5]||(l[5]=[de(" Kontakt ",-1)])]),_:1})],2)])]),w("main",null,[me(u)]),w("footer",Vw,[w("div",xw,[w("div",Mw,[me(c,{to:"/",class:"footer-brand"},{default:ct(()=>[...l[6]||(l[6]=[de(" KOPTEN ",-1),w("span",null,"BW",-1)])]),_:1}),l[7]||(l[7]=w("p",null," Eine lebendige Glaubensgemeinschaft in Baden-Württemberg. Wir freuen uns, Sie willkommen zu heißen. ",-1))]),w("div",Lw,[l[11]||(l[11]=w("h3",null,"Entdecken",-1)),me(c,{to:"/"},{default:ct(()=>[...l[8]||(l[8]=[de("Startseite",-1)])]),_:1}),me(c,{to:"/veranstaltungen"},{default:ct(()=>[...l[9]||(l[9]=[de(" Gottesdienste & Termine ",-1)])]),_:1}),me(c,{to:"/galerie"},{default:ct(()=>[...l[10]||(l[10]=[de("Galerie",-1)])]),_:1})]),l[12]||(l[12]=w("div",{class:"footer-contact"},[w("h3",null,"Kontakt & Besuch"),w("p",null,[de(" St. Georg Koptisch-Orthodoxe Kirche"),w("br"),de(" Wurmlinger Str. 49"),w("br"),de(" 70597 Stuttgart ")]),w("a",{href:"tel:+49711604252"},"0711 604252"),w("a",{href:"mailto:info@st-georg.com"},"info@st-georg.com")],-1))]),w("div",Uw,[w("span",null," © "+xe(new Date().getFullYear())+" Koptisch-Orthodoxe Kirche Baden-Württemberg ",1),me(c,{to:"/admin"},{default:ct(()=>[...l[13]||(l[13]=[de("Administration",-1)])]),_:1})])])])}}};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const ms=typeof document<"u";function Sm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Bw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Sm(t.default)}const Re=Object.assign;function ic(t,e){const n={};for(const r in e){const s=e[r];n[r]=cn(s)?s.map(t):t(s)}return n}const ki=()=>{},cn=Array.isArray;function rf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const Pm=/#/g,jw=/&/g,$w=/\//g,qw=/=/g,Hw=/\?/g,Cm=/\+/g,Gw=/%5B/g,zw=/%5D/g,km=/%5E/g,Kw=/%60/g,Nm=/%7B/g,Ww=/%7C/g,Om=/%7D/g,Qw=/%20/g;function Ou(t){return t==null?"":encodeURI(""+t).replace(Ww,"|").replace(Gw,"[").replace(zw,"]")}function Jw(t){return Ou(t).replace(Nm,"{").replace(Om,"}").replace(km,"^")}function xc(t){return Ou(t).replace(Cm,"%2B").replace(Qw,"+").replace(Pm,"%23").replace(jw,"%26").replace(Kw,"`").replace(Nm,"{").replace(Om,"}").replace(km,"^")}function Xw(t){return xc(t).replace(qw,"%3D")}function Yw(t){return Ou(t).replace(Pm,"%23").replace(Hw,"%3F")}function Zw(t){return Yw(t).replace($w,"%2F")}function Wi(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const eI=/\/$/,tI=t=>t.replace(eI,"");function oc(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(r=e.slice(0,c),i=e.slice(c,l>0?l:e.length),s=t(i.slice(1))),l>=0&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=iI(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:Wi(o)}}function nI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function sf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function rI(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Os(e.matched[r],n.matched[s])&&Dm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Os(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Dm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!sI(t[n],e[n]))return!1;return!0}function sI(t,e){return cn(t)?of(t,e):cn(e)?of(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function of(t,e){return cn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function iI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const rr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Mc=(function(t){return t.pop="pop",t.push="push",t})({}),ac=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function oI(t){if(!t)if(ms){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),tI(t)}const aI=/^[^#]+#/;function lI(t,e){return t.replace(aI,"#")+e}function cI(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const al=()=>({left:window.scrollX,top:window.scrollY});function uI(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=cI(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function af(t,e){return(history.state?history.state.position-e:-1)+t}const Lc=new Map;function hI(t,e){Lc.set(t,e)}function dI(t){const e=Lc.get(t);return Lc.delete(t),e}function fI(t){return typeof t=="string"||t&&typeof t=="object"}function Vm(t){return typeof t=="string"||typeof t=="symbol"}let Ge=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const xm=Symbol("");Ge.MATCHER_NOT_FOUND+"",Ge.NAVIGATION_GUARD_REDIRECT+"",Ge.NAVIGATION_ABORTED+"",Ge.NAVIGATION_CANCELLED+"",Ge.NAVIGATION_DUPLICATED+"";function Ds(t,e){return Re(new Error,{type:t,[xm]:!0},e)}function Bn(t,e){return t instanceof Error&&xm in t&&(e==null||!!(t.type&e))}const pI=["params","query","hash"];function gI(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of pI)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function mI(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Cm," "),i=s.indexOf("="),o=Wi(i<0?s:s.slice(0,i)),l=i<0?null:Wi(s.slice(i+1));if(o in e){let c=e[o];cn(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function lf(t){let e="";for(let n in t){const r=t[n];if(n=Xw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(cn(r)?r.map(s=>s&&xc(s)):[r&&xc(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function _I(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=cn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const yI=Symbol(""),cf=Symbol(""),Du=Symbol(""),Mm=Symbol(""),Uc=Symbol("");function fi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function or(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=g=>{g===!1?c(Ds(Ge.NAVIGATION_ABORTED,{from:n,to:e})):g instanceof Error?c(g):fI(g)?c(Ds(Ge.NAVIGATION_GUARD_REDIRECT,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),l())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(g=>c(g))})}function lc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Sm(c)){const u=(c.__vccOpts||c)[e];u&&i.push(or(u,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=Bw(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const g=(p.__vccOpts||p)[e];return g&&or(g,n,r,o,l,s)()}))}}return i}function vI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>Os(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Os(u,c))||s.push(c))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let EI=()=>location.protocol+"//"+location.host;function Lm(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(o);return l[0]!=="/"&&(l="/"+l),sf(l,"")}return sf(n,t)+r+s}function TI(t,e,n,r){let s=[],i=[],o=null;const l=({state:g})=>{const y=Lm(t,location),k=n.value,O=e.value;let V=0;if(g){if(n.value=y,e.value=g,o&&o===k){o=null;return}V=O?g.position-O.position:0}else r(y);s.forEach(B=>{B(n.value,k,{delta:V,type:Mc.pop,direction:V?V>0?ac.forward:ac.back:ac.unknown})})};function c(){o=n.value}function u(g){s.push(g);const y=()=>{const k=s.indexOf(g);k>-1&&s.splice(k,1)};return i.push(y),y}function d(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(Re({},g.state,{scroll:al()}),"")}}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:c,listen:u,destroy:p}}function uf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?al():null}}function wI(t){const{history:e,location:n}=window,r={value:Lm(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:EI()+t+c;try{e[d?"replaceState":"pushState"](u,"",g),s.value=u}catch(y){console.error(y),n[d?"replace":"assign"](g)}}function o(c,u){i(c,Re({},e.state,uf(s.value.back,c,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=c}function l(c,u){const d=Re({},s.value,e.state,{forward:c,scroll:al()});i(d.current,d,!0),i(c,Re({},uf(r.value,c,null),{position:d.position+1},u),!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function II(t){t=oI(t);const e=wI(t),n=TI(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Re({location:"",base:t,go:r,createHref:lI.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let Gr=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var nt=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(nt||{});const AI={type:Gr.Static,value:""},bI=/[a-zA-Z0-9_]/;function RI(t){if(!t)return[[]];if(t==="/")return[[AI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=nt.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",d="";function p(){u&&(n===nt.Static?i.push({type:Gr.Static,value:u}):n===nt.Param||n===nt.ParamRegExp||n===nt.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Gr.Param,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==nt.ParamRegExp){r=n,n=nt.EscapeNext;continue}switch(n){case nt.Static:c==="/"?(u&&p(),o()):c===":"?(p(),n=nt.Param):g();break;case nt.EscapeNext:g(),n=r;break;case nt.Param:c==="("?n=nt.ParamRegExp:bI.test(c)?g():(p(),n=nt.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case nt.ParamRegExp:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=nt.ParamRegExpEnd:d+=c;break;case nt.ParamRegExpEnd:p(),n=nt.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===nt.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}const hf="[^/]+?",SI={sensitive:!1,strict:!1,start:!0,end:!0};var Pt=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(Pt||{});const PI=/[.+*?^${}()[\]/\\]/g;function CI(t,e){const n=Re({},SI,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[Pt.Root];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let y=Pt.Segment+(n.sensitive?Pt.BonusCaseSensitive:0);if(g.type===Gr.Static)p||(s+="/"),s+=g.value.replace(PI,"\\$&"),y+=Pt.Static;else if(g.type===Gr.Param){const{value:k,repeatable:O,optional:V,regexp:B}=g;i.push({name:k,repeatable:O,optional:V});const N=B||hf;if(N!==hf){y+=Pt.BonusCustomRegExp;try{`${N}`}catch(H){throw new Error(`Invalid custom RegExp for param "${k}" (${N}): `+H.message)}}let L=O?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;p||(L=V&&u.length<2?`(?:/${L})`:"/"+L),V&&(L+="?"),s+=L,y+=Pt.Dynamic,V&&(y+=Pt.BonusOptional),O&&(y+=Pt.BonusRepeatable),N===".*"&&(y+=Pt.BonusWildcard)}d.push(y)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=Pt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const d=u.match(o),p={};if(!d)return null;for(let g=1;g<d.length;g++){const y=d[g]||"",k=i[g-1];p[k.name]=y&&k.repeatable?y.split("/"):y}return p}function c(u){let d="",p=!1;for(const g of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const y of g)if(y.type===Gr.Static)d+=y.value;else if(y.type===Gr.Param){const{value:k,repeatable:O,optional:V}=y,B=k in u?u[k]:"";if(cn(B)&&!O)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const N=cn(B)?B.join("/"):B;if(!N)if(V)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${k}"`);d+=N}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function kI(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===Pt.Static+Pt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Pt.Static+Pt.Segment?1:-1:0}function Um(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=kI(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(df(r))return 1;if(df(s))return-1}return s.length-r.length}function df(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const NI={strict:!1,end:!0,sensitive:!1};function OI(t,e,n){const r=CI(RI(t.path),n),s=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function DI(t,e){const n=[],r=new Map;e=rf(NI,e);function s(p){return r.get(p)}function i(p,g,y){const k=!y,O=pf(p);O.aliasOf=y&&y.record;const V=rf(e,p),B=[O];if("alias"in p){const H=typeof p.alias=="string"?[p.alias]:p.alias;for(const le of H)B.push(pf(Re({},O,{components:y?y.record.components:O.components,path:le,aliasOf:y?y.record:O})))}let N,L;for(const H of B){const{path:le}=H;if(g&&le[0]!=="/"){const ge=g.record.path,A=ge[ge.length-1]==="/"?"":"/";H.path=g.record.path+(le&&A+le)}if(N=OI(H,g,V),y?y.alias.push(N):(L=L||N,L!==N&&L.alias.push(N),k&&p.name&&!gf(N)&&o(p.name)),Fm(N)&&c(N),O.children){const ge=O.children;for(let A=0;A<ge.length;A++)i(ge[A],N,y&&y.children[A])}y=y||N}return L?()=>{o(L)}:ki}function o(p){if(Vm(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const g=MI(p,n);n.splice(g,0,p),p.record.name&&!gf(p)&&r.set(p.record.name,p)}function u(p,g){let y,k={},O,V;if("name"in p&&p.name){if(y=r.get(p.name),!y)throw Ds(Ge.MATCHER_NOT_FOUND,{location:p});V=y.record.name,k=Re(ff(g.params,y.keys.filter(L=>!L.optional).concat(y.parent?y.parent.keys.filter(L=>L.optional):[]).map(L=>L.name)),p.params&&ff(p.params,y.keys.map(L=>L.name))),O=y.stringify(k)}else if(p.path!=null)O=p.path,y=n.find(L=>L.re.test(O)),y&&(k=y.parse(O),V=y.record.name);else{if(y=g.name?r.get(g.name):n.find(L=>L.re.test(g.path)),!y)throw Ds(Ge.MATCHER_NOT_FOUND,{location:p,currentLocation:g});V=y.record.name,k=Re({},g.params,p.params),O=y.stringify(k)}const B=[];let N=y;for(;N;)B.unshift(N.record),N=N.parent;return{name:V,path:O,params:k,matched:B,meta:xI(B)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function ff(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function pf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:VI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function VI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function gf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function xI(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function MI(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Um(t,e[i])<0?r=i:n=i+1}const s=LI(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function LI(t){let e=t;for(;e=e.parent;)if(Fm(e)&&Um(t,e)===0)return e}function Fm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function mf(t){const e=Kn(Du),n=Kn(Mm),r=Wt(()=>{const c=Wr(t.to);return e.resolve(c)}),s=Wt(()=>{const{matched:c}=r.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(Os.bind(null,d));if(g>-1)return g;const y=_f(c[u-2]);return u>1&&_f(d)===y&&p[p.length-1].path!==y?p.findIndex(Os.bind(null,c[u-2])):g}),i=Wt(()=>s.value>-1&&$I(n.params,r.value.params)),o=Wt(()=>s.value>-1&&s.value===n.matched.length-1&&Dm(n.params,r.value.params));function l(c={}){if(jI(c)){const u=e[Wr(t.replace)?"replace":"push"](Wr(t.to)).catch(ki);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Wt(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function UI(t){return t.length===1?t[0]:t}const FI=Jg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:mf,setup(t,{slots:e}){const n=lo(mf(t)),{options:r}=Kn(Du),s=Wt(()=>({[yf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[yf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&UI(e.default(n));return t.custom?i:Im("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),BI=FI;function jI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function $I(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!cn(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function _f(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const yf=(t,e,n)=>t??e??n,qI=Jg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Kn(Uc),s=Wt(()=>t.route||r.value),i=Kn(cf,0),o=Wt(()=>{let u=Wr(i);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=Wt(()=>s.value.matched[o.value]);ta(cf,Wt(()=>o.value+1)),ta(yI,l),ta(Uc,s);const c=rt();return Ri(()=>[c.value,l.value,t.name],([u,d,p],[g,y,k])=>{d&&(d.instances[p]=u,y&&y!==d&&u&&u===g&&(d.leaveGuards.size||(d.leaveGuards=y.leaveGuards),d.updateGuards.size||(d.updateGuards=y.updateGuards))),u&&d&&(!y||!Os(d,y)||!g)&&(d.enterCallbacks[p]||[]).forEach(O=>O(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,p=l.value,g=p&&p.components[d];if(!g)return vf(n.default,{Component:g,route:u});const y=p.props[d],k=y?y===!0?u.params:typeof y=="function"?y(u):y:null,V=Im(g,Re({},k,e,{onVnodeUnmounted:B=>{B.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return vf(n.default,{Component:V,route:u})||V}}});function vf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const HI=qI;function GI(t){const e=DI(t.routes,t),n=t.parseQuery||mI,r=t.stringifyQuery||lf,s=t.history,i=fi(),o=fi(),l=fi(),c=VE(rr);let u=rr;ms&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=ic.bind(null,U=>""+U),p=ic.bind(null,Zw),g=ic.bind(null,Wi);function y(U,Z){let Q,re;return Vm(U)?(Q=e.getRecordMatcher(U),re=Z):re=U,e.addRoute(re,Q)}function k(U){const Z=e.getRecordMatcher(U);Z&&e.removeRoute(Z)}function O(){return e.getRoutes().map(U=>U.record)}function V(U){return!!e.getRecordMatcher(U)}function B(U,Z){if(Z=Re({},Z||c.value),typeof U=="string"){const D=oc(n,U,Z.path),M=e.resolve({path:D.path},Z),j=s.createHref(D.fullPath);return Re(D,M,{params:g(M.params),hash:Wi(D.hash),redirectedFrom:void 0,href:j})}let Q;if(U.path!=null)Q=Re({},U,{path:oc(n,U.path,Z.path).path});else{const D=Re({},U.params);for(const M in D)D[M]==null&&delete D[M];Q=Re({},U,{params:p(D)}),Z.params=p(Z.params)}const re=e.resolve(Q,Z),_=U.hash||"";re.params=d(g(re.params));const I=nI(r,Re({},U,{hash:Jw(_),path:re.path})),S=s.createHref(I);return Re({fullPath:I,hash:_,query:r===lf?_I(U.query):U.query||{}},re,{redirectedFrom:void 0,href:S})}function N(U){return typeof U=="string"?oc(n,U,c.value.path):Re({},U)}function L(U,Z){if(u!==U)return Ds(Ge.NAVIGATION_CANCELLED,{from:Z,to:U})}function H(U){return A(U)}function le(U){return H(Re(N(U),{replace:!0}))}function ge(U,Z){const Q=U.matched[U.matched.length-1];if(Q&&Q.redirect){const{redirect:re}=Q;let _=typeof re=="function"?re(U,Z):re;return typeof _=="string"&&(_=_.includes("?")||_.includes("#")?_=N(_):{path:_},_.params={}),Re({query:U.query,hash:U.hash,params:_.path!=null?{}:U.params},_)}}function A(U,Z){const Q=u=B(U),re=c.value,_=U.state,I=U.force,S=U.replace===!0,D=ge(Q,re);if(D)return A(Re(N(D),{state:typeof D=="object"?Re({},_,D.state):_,force:I,replace:S}),Z||Q);const M=Q;M.redirectedFrom=Z;let j;return!I&&rI(r,re,Q)&&(j=Ds(Ge.NAVIGATION_DUPLICATED,{to:M,from:re}),zt(re,re,!0,!1)),(j?Promise.resolve(j):b(M,re)).catch(G=>Bn(G)?Bn(G,Ge.NAVIGATION_GUARD_REDIRECT)?G:Zt(G):ye(G,M,re)).then(G=>{if(G){if(Bn(G,Ge.NAVIGATION_GUARD_REDIRECT))return A(Re({replace:S},N(G.to),{state:typeof G.to=="object"?Re({},_,G.to.state):_,force:I}),Z||M)}else G=P(M,re,!0,S,_);return R(M,re,G),G})}function v(U,Z){const Q=L(U,Z);return Q?Promise.reject(Q):Promise.resolve()}function T(U){const Z=Mn.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(U):U()}function b(U,Z){let Q;const[re,_,I]=vI(U,Z);Q=lc(re.reverse(),"beforeRouteLeave",U,Z);for(const D of re)D.leaveGuards.forEach(M=>{Q.push(or(M,U,Z))});const S=v.bind(null,U,Z);return Q.push(S),Nt(Q).then(()=>{Q=[];for(const D of i.list())Q.push(or(D,U,Z));return Q.push(S),Nt(Q)}).then(()=>{Q=lc(_,"beforeRouteUpdate",U,Z);for(const D of _)D.updateGuards.forEach(M=>{Q.push(or(M,U,Z))});return Q.push(S),Nt(Q)}).then(()=>{Q=[];for(const D of I)if(D.beforeEnter)if(cn(D.beforeEnter))for(const M of D.beforeEnter)Q.push(or(M,U,Z));else Q.push(or(D.beforeEnter,U,Z));return Q.push(S),Nt(Q)}).then(()=>(U.matched.forEach(D=>D.enterCallbacks={}),Q=lc(I,"beforeRouteEnter",U,Z,T),Q.push(S),Nt(Q))).then(()=>{Q=[];for(const D of o.list())Q.push(or(D,U,Z));return Q.push(S),Nt(Q)}).catch(D=>Bn(D,Ge.NAVIGATION_CANCELLED)?D:Promise.reject(D))}function R(U,Z,Q){l.list().forEach(re=>T(()=>re(U,Z,Q)))}function P(U,Z,Q,re,_){const I=L(U,Z);if(I)return I;const S=Z===rr,D=ms?history.state:{};Q&&(re||S?s.replace(U.fullPath,Re({scroll:S&&D&&D.scroll},_)):s.push(U.fullPath,_)),c.value=U,zt(U,Z,Q,S),Zt()}let E;function At(){E||(E=s.listen((U,Z,Q)=>{if(!Lt.listening)return;const re=B(U),_=ge(re,Lt.currentRoute.value);if(_){A(Re(_,{replace:!0,force:!0}),re).catch(ki);return}u=re;const I=c.value;ms&&hI(af(I.fullPath,Q.delta),al()),b(re,I).catch(S=>Bn(S,Ge.NAVIGATION_ABORTED|Ge.NAVIGATION_CANCELLED)?S:Bn(S,Ge.NAVIGATION_GUARD_REDIRECT)?(A(Re(N(S.to),{force:!0}),re).then(D=>{Bn(D,Ge.NAVIGATION_ABORTED|Ge.NAVIGATION_DUPLICATED)&&!Q.delta&&Q.type===Mc.pop&&s.go(-1,!1)}).catch(ki),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),ye(S,re,I))).then(S=>{S=S||P(re,I,!1),S&&(Q.delta&&!Bn(S,Ge.NAVIGATION_CANCELLED)?s.go(-Q.delta,!1):Q.type===Mc.pop&&Bn(S,Ge.NAVIGATION_ABORTED|Ge.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),R(re,I,S)}).catch(ki)}))}let Gt=fi(),Xe=fi(),we;function ye(U,Z,Q){Zt(U);const re=Xe.list();return re.length?re.forEach(_=>_(U,Z,Q)):console.error(U),Promise.reject(U)}function Mt(){return we&&c.value!==rr?Promise.resolve():new Promise((U,Z)=>{Gt.add([U,Z])})}function Zt(U){return we||(we=!U,At(),Gt.list().forEach(([Z,Q])=>U?Q(U):Z()),Gt.reset()),U}function zt(U,Z,Q,re){const{scrollBehavior:_}=t;if(!ms||!_)return Promise.resolve();const I=!Q&&dI(af(U.fullPath,0))||(re||!Q)&&history.state&&history.state.scroll||null;return jg().then(()=>_(U,Z,I)).then(S=>S&&uI(S)).catch(S=>ye(S,U,Z))}const Be=U=>s.go(U);let je;const Mn=new Set,Lt={currentRoute:c,listening:!0,addRoute:y,removeRoute:k,clearRoutes:e.clearRoutes,hasRoute:V,getRoutes:O,resolve:B,options:t,push:H,replace:le,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Xe.add,isReady:Mt,install(U){U.component("RouterLink",BI),U.component("RouterView",HI),U.config.globalProperties.$router=Lt,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>Wr(c)}),ms&&!je&&c.value===rr&&(je=!0,H(s.location).catch(re=>{}));const Z={};for(const re in rr)Object.defineProperty(Z,re,{get:()=>c.value[re],enumerable:!0});U.provide(Du,Lt),U.provide(Mm,Lg(Z)),U.provide(Uc,c);const Q=U.unmount;Mn.add(U),U.unmount=function(){Mn.delete(U),Mn.size<1&&(u=rr,E&&E(),E=null,c.value=rr,je=!1,we=!1),Q()}}};function Nt(U){return U.reduce((Z,Q)=>Z.then(()=>T(Q)),Promise.resolve())}return Lt}const zI=["src","alt"],KI={key:1,class:"icon-placeholder"},ar={__name:"IconImage",props:{src:{type:String,required:!0},title:{type:String,required:!0},ratio:{type:String,default:"3 / 4"},size:{type:String,default:"900 × 1200 px"}},setup(t){const e=t,n=rt(!1);return Ri(()=>e.src,()=>{n.value=!1}),(r,s)=>(ke(),Oe("div",{class:"icon-image",style:Ya({aspectRatio:t.ratio})},[n.value?Ns("",!0):(ke(),Oe("img",{key:0,src:t.src,alt:t.title,loading:"lazy",onError:s[0]||(s[0]=i=>n.value=!0)},null,40,zI)),n.value?(ke(),Oe("div",KI,[s[1]||(s[1]=w("span",{class:"placeholder-cross"},"✝",-1)),w("strong",null,xe(t.title),1),w("code",null,xe(t.src),1),w("small",null,xe(t.size)+" · Ratio "+xe(t.ratio),1)])):Ns("",!0)],4))}};function Bm(){let t;qs(()=>{const e=document.querySelectorAll(".reveal");if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||!("IntersectionObserver"in window)){e.forEach(n=>n.classList.add("is-visible"));return}t=new IntersectionObserver(n=>n.forEach(r=>{r.isIntersecting&&(r.target.classList.add("is-visible"),t.unobserve(r.target))}),{threshold:.12,rootMargin:"0px 0px -30px 0px"}),e.forEach(n=>t.observe(n))}),rl(()=>t==null?void 0:t.disconnect())}const WI={class:"home-page"},QI={class:"hero"},JI={class:"wrap hero-content"},XI={class:"hero-actions"},YI={class:"services-section churches-section"},ZI={class:"wrap section"},eA={class:"service-grid"},tA={class:"service-card church-card"},nA={class:"church-card-heading"},rA={class:"saint-logo saint-george"},sA={class:"service-card church-card"},iA={class:"church-card-heading"},oA={class:"saint-logo"},aA={class:"service-card church-card"},lA={class:"church-card-heading"},cA={class:"saint-logo"},uA={class:"gallery-preview wrap section"},hA={class:"section-heading"},dA={class:"preview-grid"},fA={__name:"HomeView",setup(t){return Bm(),(e,n)=>{const r=Ea("RouterLink");return ke(),Oe("div",WI,[w("section",QI,[n[5]||(n[5]=w("div",{class:"hero-shade","aria-hidden":"true"},null,-1)),w("div",JI,[n[2]||(n[2]=w("span",{class:"eyebrow light"},"KOPTISCH-ORTHODOXE KIRCHE",-1)),n[3]||(n[3]=w("h1",null,[de("Koptisch-Orthodoxe Kirche "),w("em",null,"Baden-Württemberg")],-1)),n[4]||(n[4]=w("p",null,"Gottesdienste und Informationen unserer Gemeinden in Stuttgart, Ulm und Tuttlingen.",-1)),w("div",XI,[me(r,{class:"btn btn-gold",to:"/veranstaltungen"},{default:ct(()=>[...n[0]||(n[0]=[de("Gottesdienstzeiten ",-1),w("span",null,"→",-1)])]),_:1}),n[1]||(n[1]=w("a",{class:"text-link light-link",href:"https://kopten.de/kalender.html",target:"_blank",rel:"noopener noreferrer"},"Koptischer Kalender ↗",-1))])])]),w("section",YI,[w("div",ZI,[n[18]||(n[18]=w("div",{class:"section-heading"},[w("div",null,[w("span",{class:"eyebrow"},"GOTTESDIENSTE & GEMEINDEN"),w("h2",null,[de("Wir feiern gemeinsam "),w("em",null,"Gottesdienst")])]),w("p",{class:"church-intro"},"Hier finden Sie die Gottesdienstzeiten und Informationen zu unseren Gemeinden.")],-1)),w("div",eA,[w("article",tA,[w("div",nA,[n[6]||(n[6]=w("div",null,[w("span",{class:"church-name"},"Koptisch-Orthodoxe Gemeinde"),w("h3",null,"Stuttgart"),w("p",null,"St. Georg")],-1)),w("div",rA,[me(ar,{src:"/images/icons/st-georg.jpg",title:"Ikone · St. Georg",ratio:"1 / 1",size:"800 × 800 px"})])]),n[7]||(n[7]=w("div",{class:"service-meta"},[de("Gottesdienst "),w("b",null,"Sonntags · 09:30 Uhr")],-1)),n[8]||(n[8]=w("small",null,"Wurmlinger Str. 49, 70597 Stuttgart",-1)),n[9]||(n[9]=w("a",{class:"church-route",target:"_blank",rel:"noopener noreferrer",href:"https://maps.google.com/?q=Wurmlinger+Strasse+49+70597+Stuttgart"},"Route planen ↗",-1))]),w("article",sA,[w("div",iA,[n[10]||(n[10]=w("div",null,[w("span",{class:"church-name"},"Koptisch-Orthodoxe Gemeinde"),w("h3",null,"Ulm"),w("p",null,"St. Michael · Kreuzkirche")],-1)),w("div",oA,[me(ar,{src:"/images/icons/st-michael-ulm.jpg",title:"Ikone · St. Michael",ratio:"1 / 1",size:"800 × 800 px"})])]),n[11]||(n[11]=w("div",{class:"service-meta"},[de("Gottesdienst "),w("b",null,"Jeden 4. Samstag · 09:30 Uhr")],-1)),n[12]||(n[12]=w("small",null,"Abt-Ulrich-Str. 2, 89079 Ulm",-1)),n[13]||(n[13]=w("a",{class:"church-route",target:"_blank",rel:"noopener noreferrer",href:"https://maps.google.com/?q=Abt-Ulrich-Str+2+Ulm"},"Route planen ↗",-1))]),w("article",aA,[w("div",lA,[n[14]||(n[14]=w("div",null,[w("span",{class:"church-name"},"Koptisch-Orthodoxe Gemeinde"),w("h3",null,"Tuttlingen"),w("p",null,"St. Mina und Abraam")],-1)),w("div",cA,[me(ar,{src:"/images/icons/st-mina-abraam-tuttlingen.jpg",title:"Ikonen · St. Mina & Abraam",ratio:"1 / 1",size:"800 × 800 px"})])]),n[15]||(n[15]=w("div",{class:"service-meta"},[de("Gottesdienst "),w("b",null,"Jeden 2. Samstag · 09:30 Uhr")],-1)),n[16]||(n[16]=w("small",null,"Kolonie Str. 21, 78532 Tuttlingen",-1)),n[17]||(n[17]=w("a",{class:"church-route",target:"_blank",rel:"noopener noreferrer",href:"https://maps.google.com/?q=Kolonie+Strasse+21+Tuttlingen"},"Route planen ↗",-1))])]),n[19]||(n[19]=w("p",{class:"schedule-note"},"Bitte beachten Sie mögliche Änderungen an Feiertagen. Aktuelle Termine finden Sie unter Gottesdienste & Termine.",-1))])]),w("section",uA,[w("div",hA,[n[21]||(n[21]=w("div",null,[w("span",{class:"eyebrow"},"EINBLICKE"),w("h2",null,[de("Unser Gemeindeleben "),w("em",null,"in Bildern")])],-1)),me(r,{class:"text-link",to:"/galerie"},{default:ct(()=>[...n[20]||(n[20]=[de("Alle Bilder ansehen →",-1)])]),_:1})]),w("div",dA,[me(r,{class:"preview-photo photo-one",to:"/galerie"},{default:ct(()=>[me(ar,{src:"/images/churches/st-georg-interior.jpg",title:"Kircheninnenraum",ratio:"4 / 3",size:"1600 × 1200 px"}),n[22]||(n[22]=w("span",null,[de("Unsere Kirchen "),w("small",null,"/images/churches/st-georg-interior.jpg · 4:3")],-1))]),_:1}),me(r,{class:"preview-photo photo-two",to:"/galerie"},{default:ct(()=>[me(ar,{src:"/images/gallery/gemeindefest.jpg",title:"Gemeindefest",ratio:"4 / 3",size:"1600 × 1200 px"}),n[23]||(n[23]=w("span",null,[de("Gemeinschaft erleben "),w("small",null,"/images/gallery/gemeindefest.jpg · 4:3")],-1))]),_:1}),me(r,{class:"preview-photo photo-three",to:"/galerie"},{default:ct(()=>[me(ar,{src:"/images/gallery/ostern.jpg",title:"Glaube und Tradition",ratio:"4 / 3",size:"1600 × 1200 px"}),n[24]||(n[24]=w("span",null,[de("Glaube & Tradition "),w("small",null,"/images/gallery/ostern.jpg · 4:3")],-1))]),_:1})])])])}}},pA=()=>{};var Ef={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},gA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Vu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|u>>6,y=u&63;c||(y=64,o||(g=64)),r.push(n[d],n[p],n[g],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new mA;const g=i<<2|l>>4;if(r.push(g),u!==64){const y=l<<4&240|u>>2;if(r.push(y),p!==64){const k=u<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class mA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _A=function(t){const e=jm(t);return Vu.encodeByteArray(e,!0)},Ra=function(t){return _A(t).replace(/\./g,"")},$m=function(t){try{return Vu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA=()=>yA().__FIREBASE_DEFAULTS__,EA=()=>{if(typeof process>"u"||typeof Ef>"u")return;const t=Ef.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},TA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$m(t[1]);return e&&JSON.parse(e)},ll=()=>{try{return pA()||vA()||EA()||TA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qm=t=>{var e,n;return(n=(e=ll())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},xu=t=>{const e=qm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Hm=()=>{var t;return(t=ll())===null||t===void 0?void 0:t.config},Gm=t=>{var e;return(e=ll())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function cl(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ra(JSON.stringify(n)),Ra(JSON.stringify(o)),""].join(".")}const Ni={};function wA(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ni))Ni[e]?t.emulator.push(e):t.prod.push(e);return t}function IA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Tf=!1;function ul(t,e){if(typeof window>"u"||typeof document>"u"||!Zn(window.location.host)||Ni[t]===e||Ni[t]||Tf)return;Ni[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=wA().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,y){g.setAttribute("width","24"),g.setAttribute("id",y),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Tf=!0,o()},g}function d(g,y){g.setAttribute("id",y),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=IA(r),y=n("text"),k=document.getElementById(y)||document.createElement("span"),O=n("learnmore"),V=document.getElementById(O)||document.createElement("a"),B=n("preprendIcon"),N=document.getElementById(B)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const L=g.element;l(L),d(V,O);const H=u();c(N,B),L.append(N,k,V,H),document.body.appendChild(L)}i?(k.innerText="Preview backend disconnected.",N.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(N.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function AA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function bA(){var t;const e=(t=ll())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function RA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function SA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function PA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function CA(){const t=It();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function kA(){return!bA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Km(){try{return typeof indexedDB=="object"}catch{return!1}}function NA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA="FirebaseError";class pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=OA,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hs.prototype.create)}}class Hs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?DA(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new pn(s,l,r)}}function DA(t,e){return t.replace(VA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const VA=/\{\$([^}]+)}/g;function xA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(wf(i)&&wf(o)){if(!Xr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function wf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _i(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function yi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function MA(t,e){const n=new LA(t,e);return n.subscribe.bind(n)}class LA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");UA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=cc),s.error===void 0&&(s.error=cc),s.complete===void 0&&(s.complete=cc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function cc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t){return t&&t._delegate?t._delegate:t}class un{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Fc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jA(e))try{this.getOrInitializeService({instanceIdentifier:Br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Br){return this.instances.has(e)}getOptions(e=Br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:BA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Br){return this.component?this.component.multipleInstances?e:Br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BA(t){return t===Br?void 0:t}function jA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new FA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const qA={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},HA=Ee.INFO,GA={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},zA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=GA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hl{constructor(e){this.name=e,this._logLevel=HA,this._logHandler=zA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const KA=(t,e)=>e.some(n=>t instanceof n);let If,Af;function WA(){return If||(If=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QA(){return Af||(Af=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wm=new WeakMap,Bc=new WeakMap,Qm=new WeakMap,uc=new WeakMap,Mu=new WeakMap;function JA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(_r(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Wm.set(n,t)}).catch(()=>{}),Mu.set(e,t),e}function XA(t){if(Bc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Bc.set(t,e)}let jc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _r(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function YA(t){jc=t(jc)}function ZA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hc(this),e,...n);return Qm.set(r,e.sort?e.sort():[e]),_r(r)}:QA().includes(t)?function(...e){return t.apply(hc(this),e),_r(Wm.get(this))}:function(...e){return _r(t.apply(hc(this),e))}}function eb(t){return typeof t=="function"?ZA(t):(t instanceof IDBTransaction&&XA(t),KA(t,WA())?new Proxy(t,jc):t)}function _r(t){if(t instanceof IDBRequest)return JA(t);if(uc.has(t))return uc.get(t);const e=eb(t);return e!==t&&(uc.set(t,e),Mu.set(e,t)),e}const hc=t=>Mu.get(t);function tb(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=_r(o);return r&&o.addEventListener("upgradeneeded",c=>{r(_r(o.result),c.oldVersion,c.newVersion,_r(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const nb=["get","getKey","getAll","getAllKeys","count"],rb=["put","add","delete","clear"],dc=new Map;function bf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(dc.get(e))return dc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=rb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||nb.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return dc.set(e,i),i}YA(t=>({...t,get:(e,n,r)=>bf(e,n)||t.get(e,n,r),has:(e,n)=>!!bf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ib(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ib(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $c="@firebase/app",Rf="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=new hl("@firebase/app"),ob="@firebase/app-compat",ab="@firebase/analytics-compat",lb="@firebase/analytics",cb="@firebase/app-check-compat",ub="@firebase/app-check",hb="@firebase/auth",db="@firebase/auth-compat",fb="@firebase/database",pb="@firebase/data-connect",gb="@firebase/database-compat",mb="@firebase/functions",_b="@firebase/functions-compat",yb="@firebase/installations",vb="@firebase/installations-compat",Eb="@firebase/messaging",Tb="@firebase/messaging-compat",wb="@firebase/performance",Ib="@firebase/performance-compat",Ab="@firebase/remote-config",bb="@firebase/remote-config-compat",Rb="@firebase/storage",Sb="@firebase/storage-compat",Pb="@firebase/firestore",Cb="@firebase/ai",kb="@firebase/firestore-compat",Nb="firebase",Ob="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc="[DEFAULT]",Db={[$c]:"fire-core",[ob]:"fire-core-compat",[lb]:"fire-analytics",[ab]:"fire-analytics-compat",[ub]:"fire-app-check",[cb]:"fire-app-check-compat",[hb]:"fire-auth",[db]:"fire-auth-compat",[fb]:"fire-rtdb",[pb]:"fire-data-connect",[gb]:"fire-rtdb-compat",[mb]:"fire-fn",[_b]:"fire-fn-compat",[yb]:"fire-iid",[vb]:"fire-iid-compat",[Eb]:"fire-fcm",[Tb]:"fire-fcm-compat",[wb]:"fire-perf",[Ib]:"fire-perf-compat",[Ab]:"fire-rc",[bb]:"fire-rc-compat",[Rb]:"fire-gcs",[Sb]:"fire-gcs-compat",[Pb]:"fire-fst",[kb]:"fire-fst-compat",[Cb]:"fire-vertex","fire-js":"fire-js",[Nb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=new Map,Vb=new Map,Hc=new Map;function Sf(t,e){try{t.container.addComponent(e)}catch(n){Wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vn(t){const e=t.name;if(Hc.has(e))return Wn.debug(`There were multiple attempts to register component ${e}.`),!1;Hc.set(e,t);for(const n of Sa.values())Sf(n,t);for(const n of Vb.values())Sf(n,t);return!0}function fo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Bt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yr=new Hs("app","Firebase",xb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=Ob;function Jm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:qc,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw yr.create("bad-app-name",{appName:String(s)});if(n||(n=Hm()),!n)throw yr.create("no-options");const i=Sa.get(s);if(i){if(Xr(n,i.options)&&Xr(r,i.config))return i;throw yr.create("duplicate-app",{appName:s})}const o=new $A(s);for(const c of Hc.values())o.addComponent(c);const l=new Mb(n,r,o);return Sa.set(s,l),l}function dl(t=qc){const e=Sa.get(t);if(!e&&t===qc&&Hm())return Jm();if(!e)throw yr.create("no-app",{appName:t});return e}function Ht(t,e,n){var r;let s=(r=Db[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wn.warn(l.join(" "));return}Vn(new un(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb="firebase-heartbeat-database",Ub=1,Qi="firebase-heartbeat-store";let fc=null;function Xm(){return fc||(fc=tb(Lb,Ub,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Qi)}catch(n){console.warn(n)}}}}).catch(t=>{throw yr.create("idb-open",{originalErrorMessage:t.message})})),fc}async function Fb(t){try{const n=(await Xm()).transaction(Qi),r=await n.objectStore(Qi).get(Ym(t));return await n.done,r}catch(e){if(e instanceof pn)Wn.warn(e.message);else{const n=yr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wn.warn(n.message)}}}async function Pf(t,e){try{const r=(await Xm()).transaction(Qi,"readwrite");await r.objectStore(Qi).put(e,Ym(t)),await r.done}catch(n){if(n instanceof pn)Wn.warn(n.message);else{const r=yr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wn.warn(r.message)}}}function Ym(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb=1024,jb=30;class $b{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Hb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Cf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>jb){const o=Gb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Wn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Cf(),{heartbeatsToSend:r,unsentEntries:s}=qb(this._heartbeatsCache.heartbeats),i=Ra(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Wn.warn(n),""}}}function Cf(){return new Date().toISOString().substring(0,10)}function qb(t,e=Bb){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),kf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),kf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Hb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Km()?NA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Fb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Pf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Pf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function kf(t){return Ra(JSON.stringify({version:2,heartbeats:t})).length}function Gb(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(t){Vn(new un("platform-logger",e=>new sb(e),"PRIVATE")),Vn(new un("heartbeat",e=>new $b(e),"PRIVATE")),Ht($c,Rf,t),Ht($c,Rf,"esm2017"),Ht("fire-js","")}zb("");var Nf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vr,Zm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,v){function T(){}T.prototype=v.prototype,A.D=v.prototype,A.prototype=new T,A.prototype.constructor=A,A.C=function(b,R,P){for(var E=Array(arguments.length-2),At=2;At<arguments.length;At++)E[At-2]=arguments[At];return v.prototype[R].apply(b,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,v,T){T||(T=0);var b=Array(16);if(typeof v=="string")for(var R=0;16>R;++R)b[R]=v.charCodeAt(T++)|v.charCodeAt(T++)<<8|v.charCodeAt(T++)<<16|v.charCodeAt(T++)<<24;else for(R=0;16>R;++R)b[R]=v[T++]|v[T++]<<8|v[T++]<<16|v[T++]<<24;v=A.g[0],T=A.g[1],R=A.g[2];var P=A.g[3],E=v+(P^T&(R^P))+b[0]+3614090360&4294967295;v=T+(E<<7&4294967295|E>>>25),E=P+(R^v&(T^R))+b[1]+3905402710&4294967295,P=v+(E<<12&4294967295|E>>>20),E=R+(T^P&(v^T))+b[2]+606105819&4294967295,R=P+(E<<17&4294967295|E>>>15),E=T+(v^R&(P^v))+b[3]+3250441966&4294967295,T=R+(E<<22&4294967295|E>>>10),E=v+(P^T&(R^P))+b[4]+4118548399&4294967295,v=T+(E<<7&4294967295|E>>>25),E=P+(R^v&(T^R))+b[5]+1200080426&4294967295,P=v+(E<<12&4294967295|E>>>20),E=R+(T^P&(v^T))+b[6]+2821735955&4294967295,R=P+(E<<17&4294967295|E>>>15),E=T+(v^R&(P^v))+b[7]+4249261313&4294967295,T=R+(E<<22&4294967295|E>>>10),E=v+(P^T&(R^P))+b[8]+1770035416&4294967295,v=T+(E<<7&4294967295|E>>>25),E=P+(R^v&(T^R))+b[9]+2336552879&4294967295,P=v+(E<<12&4294967295|E>>>20),E=R+(T^P&(v^T))+b[10]+4294925233&4294967295,R=P+(E<<17&4294967295|E>>>15),E=T+(v^R&(P^v))+b[11]+2304563134&4294967295,T=R+(E<<22&4294967295|E>>>10),E=v+(P^T&(R^P))+b[12]+1804603682&4294967295,v=T+(E<<7&4294967295|E>>>25),E=P+(R^v&(T^R))+b[13]+4254626195&4294967295,P=v+(E<<12&4294967295|E>>>20),E=R+(T^P&(v^T))+b[14]+2792965006&4294967295,R=P+(E<<17&4294967295|E>>>15),E=T+(v^R&(P^v))+b[15]+1236535329&4294967295,T=R+(E<<22&4294967295|E>>>10),E=v+(R^P&(T^R))+b[1]+4129170786&4294967295,v=T+(E<<5&4294967295|E>>>27),E=P+(T^R&(v^T))+b[6]+3225465664&4294967295,P=v+(E<<9&4294967295|E>>>23),E=R+(v^T&(P^v))+b[11]+643717713&4294967295,R=P+(E<<14&4294967295|E>>>18),E=T+(P^v&(R^P))+b[0]+3921069994&4294967295,T=R+(E<<20&4294967295|E>>>12),E=v+(R^P&(T^R))+b[5]+3593408605&4294967295,v=T+(E<<5&4294967295|E>>>27),E=P+(T^R&(v^T))+b[10]+38016083&4294967295,P=v+(E<<9&4294967295|E>>>23),E=R+(v^T&(P^v))+b[15]+3634488961&4294967295,R=P+(E<<14&4294967295|E>>>18),E=T+(P^v&(R^P))+b[4]+3889429448&4294967295,T=R+(E<<20&4294967295|E>>>12),E=v+(R^P&(T^R))+b[9]+568446438&4294967295,v=T+(E<<5&4294967295|E>>>27),E=P+(T^R&(v^T))+b[14]+3275163606&4294967295,P=v+(E<<9&4294967295|E>>>23),E=R+(v^T&(P^v))+b[3]+4107603335&4294967295,R=P+(E<<14&4294967295|E>>>18),E=T+(P^v&(R^P))+b[8]+1163531501&4294967295,T=R+(E<<20&4294967295|E>>>12),E=v+(R^P&(T^R))+b[13]+2850285829&4294967295,v=T+(E<<5&4294967295|E>>>27),E=P+(T^R&(v^T))+b[2]+4243563512&4294967295,P=v+(E<<9&4294967295|E>>>23),E=R+(v^T&(P^v))+b[7]+1735328473&4294967295,R=P+(E<<14&4294967295|E>>>18),E=T+(P^v&(R^P))+b[12]+2368359562&4294967295,T=R+(E<<20&4294967295|E>>>12),E=v+(T^R^P)+b[5]+4294588738&4294967295,v=T+(E<<4&4294967295|E>>>28),E=P+(v^T^R)+b[8]+2272392833&4294967295,P=v+(E<<11&4294967295|E>>>21),E=R+(P^v^T)+b[11]+1839030562&4294967295,R=P+(E<<16&4294967295|E>>>16),E=T+(R^P^v)+b[14]+4259657740&4294967295,T=R+(E<<23&4294967295|E>>>9),E=v+(T^R^P)+b[1]+2763975236&4294967295,v=T+(E<<4&4294967295|E>>>28),E=P+(v^T^R)+b[4]+1272893353&4294967295,P=v+(E<<11&4294967295|E>>>21),E=R+(P^v^T)+b[7]+4139469664&4294967295,R=P+(E<<16&4294967295|E>>>16),E=T+(R^P^v)+b[10]+3200236656&4294967295,T=R+(E<<23&4294967295|E>>>9),E=v+(T^R^P)+b[13]+681279174&4294967295,v=T+(E<<4&4294967295|E>>>28),E=P+(v^T^R)+b[0]+3936430074&4294967295,P=v+(E<<11&4294967295|E>>>21),E=R+(P^v^T)+b[3]+3572445317&4294967295,R=P+(E<<16&4294967295|E>>>16),E=T+(R^P^v)+b[6]+76029189&4294967295,T=R+(E<<23&4294967295|E>>>9),E=v+(T^R^P)+b[9]+3654602809&4294967295,v=T+(E<<4&4294967295|E>>>28),E=P+(v^T^R)+b[12]+3873151461&4294967295,P=v+(E<<11&4294967295|E>>>21),E=R+(P^v^T)+b[15]+530742520&4294967295,R=P+(E<<16&4294967295|E>>>16),E=T+(R^P^v)+b[2]+3299628645&4294967295,T=R+(E<<23&4294967295|E>>>9),E=v+(R^(T|~P))+b[0]+4096336452&4294967295,v=T+(E<<6&4294967295|E>>>26),E=P+(T^(v|~R))+b[7]+1126891415&4294967295,P=v+(E<<10&4294967295|E>>>22),E=R+(v^(P|~T))+b[14]+2878612391&4294967295,R=P+(E<<15&4294967295|E>>>17),E=T+(P^(R|~v))+b[5]+4237533241&4294967295,T=R+(E<<21&4294967295|E>>>11),E=v+(R^(T|~P))+b[12]+1700485571&4294967295,v=T+(E<<6&4294967295|E>>>26),E=P+(T^(v|~R))+b[3]+2399980690&4294967295,P=v+(E<<10&4294967295|E>>>22),E=R+(v^(P|~T))+b[10]+4293915773&4294967295,R=P+(E<<15&4294967295|E>>>17),E=T+(P^(R|~v))+b[1]+2240044497&4294967295,T=R+(E<<21&4294967295|E>>>11),E=v+(R^(T|~P))+b[8]+1873313359&4294967295,v=T+(E<<6&4294967295|E>>>26),E=P+(T^(v|~R))+b[15]+4264355552&4294967295,P=v+(E<<10&4294967295|E>>>22),E=R+(v^(P|~T))+b[6]+2734768916&4294967295,R=P+(E<<15&4294967295|E>>>17),E=T+(P^(R|~v))+b[13]+1309151649&4294967295,T=R+(E<<21&4294967295|E>>>11),E=v+(R^(T|~P))+b[4]+4149444226&4294967295,v=T+(E<<6&4294967295|E>>>26),E=P+(T^(v|~R))+b[11]+3174756917&4294967295,P=v+(E<<10&4294967295|E>>>22),E=R+(v^(P|~T))+b[2]+718787259&4294967295,R=P+(E<<15&4294967295|E>>>17),E=T+(P^(R|~v))+b[9]+3951481745&4294967295,A.g[0]=A.g[0]+v&4294967295,A.g[1]=A.g[1]+(R+(E<<21&4294967295|E>>>11))&4294967295,A.g[2]=A.g[2]+R&4294967295,A.g[3]=A.g[3]+P&4294967295}r.prototype.u=function(A,v){v===void 0&&(v=A.length);for(var T=v-this.blockSize,b=this.B,R=this.h,P=0;P<v;){if(R==0)for(;P<=T;)s(this,A,P),P+=this.blockSize;if(typeof A=="string"){for(;P<v;)if(b[R++]=A.charCodeAt(P++),R==this.blockSize){s(this,b),R=0;break}}else for(;P<v;)if(b[R++]=A[P++],R==this.blockSize){s(this,b),R=0;break}}this.h=R,this.o+=v},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var v=1;v<A.length-8;++v)A[v]=0;var T=8*this.o;for(v=A.length-8;v<A.length;++v)A[v]=T&255,T/=256;for(this.u(A),A=Array(16),v=T=0;4>v;++v)for(var b=0;32>b;b+=8)A[T++]=this.g[v]>>>b&255;return A};function i(A,v){var T=l;return Object.prototype.hasOwnProperty.call(T,A)?T[A]:T[A]=v(A)}function o(A,v){this.h=v;for(var T=[],b=!0,R=A.length-1;0<=R;R--){var P=A[R]|0;b&&P==v||(T[R]=P,b=!1)}this.g=T}var l={};function c(A){return-128<=A&&128>A?i(A,function(v){return new o([v|0],0>v?-1:0)}):new o([A|0],0>A?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return V(u(-A));for(var v=[],T=1,b=0;A>=T;b++)v[b]=A/T|0,T*=4294967296;return new o(v,0)}function d(A,v){if(A.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(A.charAt(0)=="-")return V(d(A.substring(1),v));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=u(Math.pow(v,8)),b=p,R=0;R<A.length;R+=8){var P=Math.min(8,A.length-R),E=parseInt(A.substring(R,R+P),v);8>P?(P=u(Math.pow(v,P)),b=b.j(P).add(u(E))):(b=b.j(T),b=b.add(u(E)))}return b}var p=c(0),g=c(1),y=c(16777216);t=o.prototype,t.m=function(){if(O(this))return-V(this).m();for(var A=0,v=1,T=0;T<this.g.length;T++){var b=this.i(T);A+=(0<=b?b:4294967296+b)*v,v*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(k(this))return"0";if(O(this))return"-"+V(this).toString(A);for(var v=u(Math.pow(A,6)),T=this,b="";;){var R=H(T,v).g;T=B(T,R.j(v));var P=((0<T.g.length?T.g[0]:T.h)>>>0).toString(A);if(T=R,k(T))return P+b;for(;6>P.length;)P="0"+P;b=P+b}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function k(A){if(A.h!=0)return!1;for(var v=0;v<A.g.length;v++)if(A.g[v]!=0)return!1;return!0}function O(A){return A.h==-1}t.l=function(A){return A=B(this,A),O(A)?-1:k(A)?0:1};function V(A){for(var v=A.g.length,T=[],b=0;b<v;b++)T[b]=~A.g[b];return new o(T,~A.h).add(g)}t.abs=function(){return O(this)?V(this):this},t.add=function(A){for(var v=Math.max(this.g.length,A.g.length),T=[],b=0,R=0;R<=v;R++){var P=b+(this.i(R)&65535)+(A.i(R)&65535),E=(P>>>16)+(this.i(R)>>>16)+(A.i(R)>>>16);b=E>>>16,P&=65535,E&=65535,T[R]=E<<16|P}return new o(T,T[T.length-1]&-2147483648?-1:0)};function B(A,v){return A.add(V(v))}t.j=function(A){if(k(this)||k(A))return p;if(O(this))return O(A)?V(this).j(V(A)):V(V(this).j(A));if(O(A))return V(this.j(V(A)));if(0>this.l(y)&&0>A.l(y))return u(this.m()*A.m());for(var v=this.g.length+A.g.length,T=[],b=0;b<2*v;b++)T[b]=0;for(b=0;b<this.g.length;b++)for(var R=0;R<A.g.length;R++){var P=this.i(b)>>>16,E=this.i(b)&65535,At=A.i(R)>>>16,Gt=A.i(R)&65535;T[2*b+2*R]+=E*Gt,N(T,2*b+2*R),T[2*b+2*R+1]+=P*Gt,N(T,2*b+2*R+1),T[2*b+2*R+1]+=E*At,N(T,2*b+2*R+1),T[2*b+2*R+2]+=P*At,N(T,2*b+2*R+2)}for(b=0;b<v;b++)T[b]=T[2*b+1]<<16|T[2*b];for(b=v;b<2*v;b++)T[b]=0;return new o(T,0)};function N(A,v){for(;(A[v]&65535)!=A[v];)A[v+1]+=A[v]>>>16,A[v]&=65535,v++}function L(A,v){this.g=A,this.h=v}function H(A,v){if(k(v))throw Error("division by zero");if(k(A))return new L(p,p);if(O(A))return v=H(V(A),v),new L(V(v.g),V(v.h));if(O(v))return v=H(A,V(v)),new L(V(v.g),v.h);if(30<A.g.length){if(O(A)||O(v))throw Error("slowDivide_ only works with positive integers.");for(var T=g,b=v;0>=b.l(A);)T=le(T),b=le(b);var R=ge(T,1),P=ge(b,1);for(b=ge(b,2),T=ge(T,2);!k(b);){var E=P.add(b);0>=E.l(A)&&(R=R.add(T),P=E),b=ge(b,1),T=ge(T,1)}return v=B(A,R.j(v)),new L(R,v)}for(R=p;0<=A.l(v);){for(T=Math.max(1,Math.floor(A.m()/v.m())),b=Math.ceil(Math.log(T)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),P=u(T),E=P.j(v);O(E)||0<E.l(A);)T-=b,P=u(T),E=P.j(v);k(P)&&(P=g),R=R.add(P),A=B(A,E)}return new L(R,A)}t.A=function(A){return H(this,A).h},t.and=function(A){for(var v=Math.max(this.g.length,A.g.length),T=[],b=0;b<v;b++)T[b]=this.i(b)&A.i(b);return new o(T,this.h&A.h)},t.or=function(A){for(var v=Math.max(this.g.length,A.g.length),T=[],b=0;b<v;b++)T[b]=this.i(b)|A.i(b);return new o(T,this.h|A.h)},t.xor=function(A){for(var v=Math.max(this.g.length,A.g.length),T=[],b=0;b<v;b++)T[b]=this.i(b)^A.i(b);return new o(T,this.h^A.h)};function le(A){for(var v=A.g.length+1,T=[],b=0;b<v;b++)T[b]=A.i(b)<<1|A.i(b-1)>>>31;return new o(T,A.h)}function ge(A,v){var T=v>>5;v%=32;for(var b=A.g.length-T,R=[],P=0;P<b;P++)R[P]=0<v?A.i(P+T)>>>v|A.i(P+T+1)<<32-v:A.i(P+T);return new o(R,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Zm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,vr=o}).apply(typeof Nf<"u"?Nf:typeof self<"u"?self:typeof window<"u"?window:{});var Ho=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var e_,vi,t_,sa,Gc,n_,r_,s_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ho=="object"&&Ho];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var C=a[m];if(!(C in f))break e;f=f[C]}a=a[a.length-1],m=f[a],h=h(m),h!=m&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,m=!1,C={next:function(){if(!m&&f<a.length){var x=f++;return{value:h(x,a[x]),done:!1}}return m=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,m),a.apply(h,C)}}return function(){return a.apply(h,arguments)}}function g(a,h,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function y(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function k(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(m,C,x){for(var W=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)W[Ne-2]=arguments[Ne];return h.prototype[C].apply(m,W)}}function O(a){const h=a.length;if(0<h){const f=Array(h);for(let m=0;m<h;m++)f[m]=a[m];return f}return[]}function V(a,h){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(c(m)){const C=a.length||0,x=m.length||0;a.length=C+x;for(let W=0;W<x;W++)a[C+W]=m[W]}else a.push(m)}}class B{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function N(a){return/^[\s\xa0]*$/.test(a)}function L(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function H(a){return H[" "](a),a}H[" "]=function(){};var le=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function ge(a,h,f){for(const m in a)h.call(f,a[m],m,a)}function A(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function v(a){const h={};for(const f in a)h[f]=a[f];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(a,h){let f,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(f in m)a[f]=m[f];for(let x=0;x<T.length;x++)f=T[x],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function R(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function P(a){l.setTimeout(()=>{throw a},0)}function E(){var a=Mt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class At{constructor(){this.h=this.g=null}add(h,f){const m=Gt.get();m.set(h,f),this.h?this.h.next=m:this.g=m,this.h=m}}var Gt=new B(()=>new Xe,a=>a.reset());class Xe{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let we,ye=!1,Mt=new At,Zt=()=>{const a=l.Promise.resolve(void 0);we=()=>{a.then(zt)}};var zt=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(f){P(f)}var h=Gt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}ye=!1};function Be(){this.s=this.s,this.C=this.C}Be.prototype.s=!1,Be.prototype.ma=function(){this.s||(this.s=!0,this.N())},Be.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function je(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}je.prototype.h=function(){this.defaultPrevented=!0};var Mn=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a})();function Lt(a,h){if(je.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(le){e:{try{H(h.nodeName);var C=!0;break e}catch{}C=!1}C||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Nt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Lt.aa.h.call(this)}}k(Lt,je);var Nt={2:"touch",3:"pen",4:"mouse"};Lt.prototype.h=function(){Lt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var U="closure_listenable_"+(1e6*Math.random()|0),Z=0;function Q(a,h,f,m,C){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!m,this.ha=C,this.key=++Z,this.da=this.fa=!1}function re(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function _(a){this.src=a,this.g={},this.h=0}_.prototype.add=function(a,h,f,m,C){var x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);var W=S(a,h,m,C);return-1<W?(h=a[W],f||(h.fa=!1)):(h=new Q(h,this.src,x,!!m,C),h.fa=f,a.push(h)),h};function I(a,h){var f=h.type;if(f in a.g){var m=a.g[f],C=Array.prototype.indexOf.call(m,h,void 0),x;(x=0<=C)&&Array.prototype.splice.call(m,C,1),x&&(re(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function S(a,h,f,m){for(var C=0;C<a.length;++C){var x=a[C];if(!x.da&&x.listener==h&&x.capture==!!f&&x.ha==m)return C}return-1}var D="closure_lm_"+(1e6*Math.random()|0),M={};function j(a,h,f,m,C){if(Array.isArray(h)){for(var x=0;x<h.length;x++)j(a,h[x],f,m,C);return null}return f=ve(f),a&&a[U]?a.K(h,f,u(m)?!!m.capture:!1,C):G(a,h,f,!1,m,C)}function G(a,h,f,m,C,x){if(!h)throw Error("Invalid event type");var W=u(C)?!!C.capture:!!C,Ne=te(a);if(Ne||(a[D]=Ne=new _(a)),f=Ne.add(h,f,m,W,x),f.proxy)return f;if(m=K(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)Mn||(C=W),C===void 0&&(C=!1),a.addEventListener(h.toString(),m,C);else if(a.attachEvent)a.attachEvent(ee(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function K(){function a(f){return h.call(a.src,a.listener,f)}const h=J;return a}function z(a,h,f,m,C){if(Array.isArray(h))for(var x=0;x<h.length;x++)z(a,h[x],f,m,C);else m=u(m)?!!m.capture:!!m,f=ve(f),a&&a[U]?(a=a.i,h=String(h).toString(),h in a.g&&(x=a.g[h],f=S(x,f,m,C),-1<f&&(re(x[f]),Array.prototype.splice.call(x,f,1),x.length==0&&(delete a.g[h],a.h--)))):a&&(a=te(a))&&(h=a.g[h.toString()],a=-1,h&&(a=S(h,f,m,C)),(f=-1<a?h[a]:null)&&q(f))}function q(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[U])I(h.i,a);else{var f=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(f,m,a.capture):h.detachEvent?h.detachEvent(ee(f),m):h.addListener&&h.removeListener&&h.removeListener(m),(f=te(h))?(I(f,a),f.h==0&&(f.src=null,h[D]=null)):re(a)}}}function ee(a){return a in M?M[a]:M[a]="on"+a}function J(a,h){if(a.da)a=!0;else{h=new Lt(h,this);var f=a.listener,m=a.ha||a.src;a.fa&&q(a),a=f.call(m,h)}return a}function te(a){return a=a[D],a instanceof _?a:null}var se="__closure_events_fn_"+(1e9*Math.random()>>>0);function ve(a){return typeof a=="function"?a:(a[se]||(a[se]=function(h){return a.handleEvent(h)}),a[se])}function ue(){Be.call(this),this.i=new _(this),this.M=this,this.F=null}k(ue,Be),ue.prototype[U]=!0,ue.prototype.removeEventListener=function(a,h,f,m){z(this,a,h,f,m)};function he(a,h){var f,m=a.F;if(m)for(f=[];m;m=m.F)f.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new je(h,a);else if(h instanceof je)h.target=h.target||a;else{var C=h;h=new je(m,a),b(h,C)}if(C=!0,f)for(var x=f.length-1;0<=x;x--){var W=h.g=f[x];C=Le(W,m,!0,h)&&C}if(W=h.g=a,C=Le(W,m,!0,h)&&C,C=Le(W,m,!1,h)&&C,f)for(x=0;x<f.length;x++)W=h.g=f[x],C=Le(W,m,!1,h)&&C}ue.prototype.N=function(){if(ue.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],m=0;m<f.length;m++)re(f[m]);delete a.g[h],a.h--}}this.F=null},ue.prototype.K=function(a,h,f,m){return this.i.add(String(a),h,!1,f,m)},ue.prototype.L=function(a,h,f,m){return this.i.add(String(a),h,!0,f,m)};function Le(a,h,f,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var C=!0,x=0;x<h.length;++x){var W=h[x];if(W&&!W.da&&W.capture==f){var Ne=W.listener,at=W.ha||W.src;W.fa&&I(a.i,W),C=Ne.call(at,m)!==!1&&C}}return C&&!m.defaultPrevented}function Ye(a,h,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Ut(a){a.g=Ye(()=>{a.g=null,a.i&&(a.i=!1,Ut(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Kt extends Be{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ut(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function en(a){Be.call(this),this.h=a,this.g={}}k(en,Be);var Ys=[];function pt(a){ge(a.g,function(h,f){this.g.hasOwnProperty(f)&&q(h)},a),a.g={}}en.prototype.N=function(){en.aa.N.call(this),pt(this)},en.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ot=l.JSON.stringify,wo=l.JSON.parse,Io=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ol(){}Ol.prototype.h=null;function Vh(a){return a.h||(a.h=a.i())}function xh(){}var Zs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Dl(){je.call(this,"d")}k(Dl,je);function Vl(){je.call(this,"c")}k(Vl,je);var Dr={},Mh=null;function Ao(){return Mh=Mh||new ue}Dr.La="serverreachability";function Lh(a){je.call(this,Dr.La,a)}k(Lh,je);function ei(a){const h=Ao();he(h,new Lh(h))}Dr.STAT_EVENT="statevent";function Uh(a,h){je.call(this,Dr.STAT_EVENT,a),this.stat=h}k(Uh,je);function bt(a){const h=Ao();he(h,new Uh(h,a))}Dr.Ma="timingevent";function Fh(a,h){je.call(this,Dr.Ma,a),this.size=h}k(Fh,je);function ti(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function ni(){this.g=!0}ni.prototype.xa=function(){this.g=!1};function Vv(a,h,f,m,C,x){a.info(function(){if(a.g)if(x)for(var W="",Ne=x.split("&"),at=0;at<Ne.length;at++){var Ae=Ne[at].split("=");if(1<Ae.length){var gt=Ae[0];Ae=Ae[1];var mt=gt.split("_");W=2<=mt.length&&mt[1]=="type"?W+(gt+"="+Ae+"&"):W+(gt+"=redacted&")}}else W=null;else W=x;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+h+`
`+f+`
`+W})}function xv(a,h,f,m,C,x,W){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+h+`
`+f+`
`+x+" "+W})}function us(a,h,f,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Lv(a,f)+(m?" "+m:"")})}function Mv(a,h){a.info(function(){return"TIMEOUT: "+h})}ni.prototype.info=function(){};function Lv(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var m=f[a];if(!(2>m.length)){var C=m[1];if(Array.isArray(C)&&!(1>C.length)){var x=C[0];if(x!="noop"&&x!="stop"&&x!="close")for(var W=1;W<C.length;W++)C[W]=""}}}}return Ot(f)}catch{return h}}var bo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Bh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},xl;function Ro(){}k(Ro,Ol),Ro.prototype.g=function(){return new XMLHttpRequest},Ro.prototype.i=function(){return{}},xl=new Ro;function er(a,h,f,m){this.j=a,this.i=h,this.l=f,this.R=m||1,this.U=new en(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new jh}function jh(){this.i=null,this.g="",this.h=!1}var $h={},Ml={};function Ll(a,h,f){a.L=1,a.v=ko(Ln(h)),a.m=f,a.P=!0,qh(a,null)}function qh(a,h){a.F=Date.now(),So(a),a.A=Ln(a.v);var f=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),rd(f.i,"t",m),a.C=0,f=a.j.J,a.h=new jh,a.g=Td(a.j,f?h:null,!a.m),0<a.O&&(a.M=new Kt(g(a.Y,a,a.g),a.O)),h=a.U,f=a.g,m=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(Ys[0]=C.toString()),C=Ys);for(var x=0;x<C.length;x++){var W=j(f,C[x],m||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ei(),Vv(a.i,a.u,a.A,a.l,a.R,a.m)}er.prototype.ca=function(a){a=a.target;const h=this.M;h&&Un(a)==3?h.j():this.Y(a)},er.prototype.Y=function(a){try{if(a==this.g)e:{const mt=Un(this.g);var h=this.g.Ba();const fs=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||ud(this.g)))){this.J||mt!=4||h==7||(h==8||0>=fs?ei(3):ei(2)),Ul(this);var f=this.g.Z();this.X=f;t:if(Hh(this)){var m=ud(this.g);a="";var C=m.length,x=Un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vr(this),ri(this);var W="";break t}this.h.i=new l.TextDecoder}for(h=0;h<C;h++)this.h.h=!0,a+=this.h.i.decode(m[h],{stream:!(x&&h==C-1)});m.length=0,this.h.g+=a,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=f==200,xv(this.i,this.u,this.A,this.l,this.R,mt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ne,at=this.g;if((Ne=at.g?at.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(Ne)){var Ae=Ne;break t}}Ae=null}if(f=Ae)us(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fl(this,f);else{this.o=!1,this.s=3,bt(12),Vr(this),ri(this);break e}}if(this.P){f=!0;let tn;for(;!this.J&&this.C<W.length;)if(tn=Uv(this,W),tn==Ml){mt==4&&(this.s=4,bt(14),f=!1),us(this.i,this.l,null,"[Incomplete Response]");break}else if(tn==$h){this.s=4,bt(15),us(this.i,this.l,W,"[Invalid Chunk]"),f=!1;break}else us(this.i,this.l,tn,null),Fl(this,tn);if(Hh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||W.length!=0||this.h.h||(this.s=1,bt(16),f=!1),this.o=this.o&&f,!f)us(this.i,this.l,W,"[Invalid Chunked Response]"),Vr(this),ri(this);else if(0<W.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),Gl(gt),gt.M=!0,bt(11))}}else us(this.i,this.l,W,null),Fl(this,W);mt==4&&Vr(this),this.o&&!this.J&&(mt==4?_d(this.j,this):(this.o=!1,So(this)))}else tE(this.g),f==400&&0<W.indexOf("Unknown SID")?(this.s=3,bt(12)):(this.s=0,bt(13)),Vr(this),ri(this)}}}catch{}finally{}};function Hh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Uv(a,h){var f=a.C,m=h.indexOf(`
`,f);return m==-1?Ml:(f=Number(h.substring(f,m)),isNaN(f)?$h:(m+=1,m+f>h.length?Ml:(h=h.slice(m,m+f),a.C=m+f,h)))}er.prototype.cancel=function(){this.J=!0,Vr(this)};function So(a){a.S=Date.now()+a.I,Gh(a,a.I)}function Gh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ti(g(a.ba,a),h)}function Ul(a){a.B&&(l.clearTimeout(a.B),a.B=null)}er.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Mv(this.i,this.A),this.L!=2&&(ei(),bt(17)),Vr(this),this.s=2,ri(this)):Gh(this,this.S-a)};function ri(a){a.j.G==0||a.J||_d(a.j,a)}function Vr(a){Ul(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,pt(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Fl(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Bl(f.h,a))){if(!a.K&&Bl(f.h,a)&&f.G==3){try{var m=f.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Mo(f),Vo(f);else break e;Hl(f),bt(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=ti(g(f.Za,f),6e3));if(1>=Wh(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Mr(f,11)}else if((a.K||f.g==a)&&Mo(f),!N(h))for(C=f.Da.g.parse(h),h=0;h<C.length;h++){let Ae=C[h];if(f.T=Ae[0],Ae=Ae[1],f.G==2)if(Ae[0]=="c"){f.K=Ae[1],f.ia=Ae[2];const gt=Ae[3];gt!=null&&(f.la=gt,f.j.info("VER="+f.la));const mt=Ae[4];mt!=null&&(f.Aa=mt,f.j.info("SVER="+f.Aa));const fs=Ae[5];fs!=null&&typeof fs=="number"&&0<fs&&(m=1.5*fs,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const tn=a.g;if(tn){const Uo=tn.g?tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Uo){var x=m.h;x.g||Uo.indexOf("spdy")==-1&&Uo.indexOf("quic")==-1&&Uo.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(jl(x,x.h),x.h=null))}if(m.D){const zl=tn.g?tn.g.getResponseHeader("X-HTTP-Session-Id"):null;zl&&(m.ya=zl,Ue(m.I,m.D,zl))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var W=a;if(m.qa=Ed(m,m.J?m.ia:null,m.W),W.K){Qh(m.h,W);var Ne=W,at=m.L;at&&(Ne.I=at),Ne.B&&(Ul(Ne),So(Ne)),m.g=W}else gd(m);0<f.i.length&&xo(f)}else Ae[0]!="stop"&&Ae[0]!="close"||Mr(f,7);else f.G==3&&(Ae[0]=="stop"||Ae[0]=="close"?Ae[0]=="stop"?Mr(f,7):ql(f):Ae[0]!="noop"&&f.l&&f.l.ta(Ae),f.v=0)}}ei(4)}catch{}}var Fv=class{constructor(a,h){this.g=a,this.map=h}};function zh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Kh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Wh(a){return a.h?1:a.g?a.g.size:0}function Bl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function jl(a,h){a.g?a.g.add(h):a.h=h}function Qh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}zh.prototype.cancel=function(){if(this.i=Jh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Jh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return O(a.i)}function Bv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,m=0;m<f;m++)h.push(a[m]);return h}h=[],f=0;for(m in a)h[f++]=a[m];return h}function jv(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const m in a)h[f++]=m;return h}}}function Xh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=jv(a),m=Bv(a),C=m.length,x=0;x<C;x++)h.call(void 0,m[x],f&&f[x],a)}var Yh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $v(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var m=a[f].indexOf("="),C=null;if(0<=m){var x=a[f].substring(0,m);C=a[f].substring(m+1)}else x=a[f];h(x,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function xr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof xr){this.h=a.h,Po(this,a.j),this.o=a.o,this.g=a.g,Co(this,a.s),this.l=a.l;var h=a.i,f=new oi;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Zh(this,f),this.m=a.m}else a&&(h=String(a).match(Yh))?(this.h=!1,Po(this,h[1]||"",!0),this.o=si(h[2]||""),this.g=si(h[3]||"",!0),Co(this,h[4]),this.l=si(h[5]||"",!0),Zh(this,h[6]||"",!0),this.m=si(h[7]||"")):(this.h=!1,this.i=new oi(null,this.h))}xr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ii(h,ed,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ii(h,ed,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(ii(f,f.charAt(0)=="/"?Gv:Hv,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",ii(f,Kv)),a.join("")};function Ln(a){return new xr(a)}function Po(a,h,f){a.j=f?si(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Co(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Zh(a,h,f){h instanceof oi?(a.i=h,Wv(a.i,a.h)):(f||(h=ii(h,zv)),a.i=new oi(h,a.h))}function Ue(a,h,f){a.i.set(h,f)}function ko(a){return Ue(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function si(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ii(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,qv),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function qv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ed=/[#\/\?@]/g,Hv=/[#\?:]/g,Gv=/[#\?]/g,zv=/[#\?@]/g,Kv=/#/g;function oi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function tr(a){a.g||(a.g=new Map,a.h=0,a.i&&$v(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=oi.prototype,t.add=function(a,h){tr(this),this.i=null,a=hs(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function td(a,h){tr(a),h=hs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function nd(a,h){return tr(a),h=hs(a,h),a.g.has(h)}t.forEach=function(a,h){tr(this),this.g.forEach(function(f,m){f.forEach(function(C){a.call(h,C,m,this)},this)},this)},t.na=function(){tr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let m=0;m<h.length;m++){const C=a[m];for(let x=0;x<C.length;x++)f.push(h[m])}return f},t.V=function(a){tr(this);let h=[];if(typeof a=="string")nd(this,a)&&(h=h.concat(this.g.get(hs(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return tr(this),this.i=null,a=hs(this,a),nd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function rd(a,h,f){td(a,h),0<f.length&&(a.i=null,a.g.set(hs(a,h),O(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var m=h[f];const x=encodeURIComponent(String(m)),W=this.V(m);for(m=0;m<W.length;m++){var C=x;W[m]!==""&&(C+="="+encodeURIComponent(String(W[m]))),a.push(C)}}return this.i=a.join("&")};function hs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Wv(a,h){h&&!a.j&&(tr(a),a.i=null,a.g.forEach(function(f,m){var C=m.toLowerCase();m!=C&&(td(this,m),rd(this,C,f))},a)),a.j=h}function Qv(a,h){const f=new ni;if(l.Image){const m=new Image;m.onload=y(nr,f,"TestLoadImage: loaded",!0,h,m),m.onerror=y(nr,f,"TestLoadImage: error",!1,h,m),m.onabort=y(nr,f,"TestLoadImage: abort",!1,h,m),m.ontimeout=y(nr,f,"TestLoadImage: timeout",!1,h,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function Jv(a,h){const f=new ni,m=new AbortController,C=setTimeout(()=>{m.abort(),nr(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(x=>{clearTimeout(C),x.ok?nr(f,"TestPingServer: ok",!0,h):nr(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),nr(f,"TestPingServer: error",!1,h)})}function nr(a,h,f,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(f)}catch{}}function Xv(){this.g=new Io}function Yv(a,h,f){const m=f||"";try{Xh(a,function(C,x){let W=C;u(C)&&(W=Ot(C)),h.push(m+x+"="+encodeURIComponent(W))})}catch(C){throw h.push(m+"type="+encodeURIComponent("_badmap")),C}}function No(a){this.l=a.Ub||null,this.j=a.eb||!1}k(No,Ol),No.prototype.g=function(){return new Oo(this.l,this.j)},No.prototype.i=(function(a){return function(){return a}})({});function Oo(a,h){ue.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Oo,ue),t=Oo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,li(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ai(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,li(this)),this.g&&(this.readyState=3,li(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sd(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function sd(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ai(this):li(this),this.readyState==3&&sd(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ai(this))},t.Qa=function(a){this.g&&(this.response=a,ai(this))},t.ga=function(){this.g&&ai(this)};function ai(a){a.readyState=4,a.l=null,a.j=null,a.v=null,li(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function li(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Oo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function id(a){let h="";return ge(a,function(f,m){h+=m,h+=":",h+=f,h+=`\r
`}),h}function $l(a,h,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=id(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Ue(a,h,f))}function He(a){ue.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(He,ue);var Zv=/^https?$/i,eE=["POST","PUT"];t=He.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():xl.g(),this.v=this.o?Vh(this.o):Vh(xl),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(x){od(this,x);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)f.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const x of m.keys())f.set(x,m.get(x));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(x=>x.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(eE,h,void 0))||m||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,W]of f)this.g.setRequestHeader(x,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{cd(this),this.u=!0,this.g.send(a),this.u=!1}catch(x){od(this,x)}};function od(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,ad(a),Do(a)}function ad(a){a.A||(a.A=!0,he(a,"complete"),he(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,he(this,"complete"),he(this,"abort"),Do(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Do(this,!0)),He.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ld(this):this.bb())},t.bb=function(){ld(this)};function ld(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Un(a)!=4||a.Z()!=2)){if(a.u&&Un(a)==4)Ye(a.Ea,0,a);else if(he(a,"readystatechange"),Un(a)==4){a.h=!1;try{const W=a.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var m;if(m=W===0){var C=String(a.D).match(Yh)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),m=!Zv.test(C?C.toLowerCase():"")}f=m}if(f)he(a,"complete"),he(a,"success");else{a.m=6;try{var x=2<Un(a)?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.Z()+"]",ad(a)}}finally{Do(a)}}}}function Do(a,h){if(a.g){cd(a);const f=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||he(a,"ready");try{f.onreadystatechange=m}catch{}}}function cd(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Un(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Un(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),wo(h)}};function ud(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function tE(a){const h={};a=(a.g&&2<=Un(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(N(a[m]))continue;var f=R(a[m]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const x=h[C]||[];h[C]=x,x.push(f)}A(h,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ci(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function hd(a){this.Aa=0,this.i=[],this.j=new ni,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ci("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ci("baseRetryDelayMs",5e3,a),this.cb=ci("retryDelaySeedMs",1e4,a),this.Wa=ci("forwardChannelMaxRetries",2,a),this.wa=ci("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new zh(a&&a.concurrentRequestLimit),this.Da=new Xv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=hd.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,m){bt(0),this.W=a,this.H=h||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=Ed(this,null,this.W),xo(this)};function ql(a){if(dd(a),a.G==3){var h=a.U++,f=Ln(a.I);if(Ue(f,"SID",a.K),Ue(f,"RID",h),Ue(f,"TYPE","terminate"),ui(a,f),h=new er(a,a.j,h),h.L=2,h.v=ko(Ln(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Td(h.j,null),h.g.ea(h.v)),h.F=Date.now(),So(h)}vd(a)}function Vo(a){a.g&&(Gl(a),a.g.cancel(),a.g=null)}function dd(a){Vo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Mo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function xo(a){if(!Kh(a.h)&&!a.s){a.s=!0;var h=a.Ga;we||Zt(),ye||(we(),ye=!0),Mt.add(h,a),a.B=0}}function nE(a,h){return Wh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ti(g(a.Ga,a,h),yd(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new er(this,this.j,a);let x=this.o;if(this.S&&(x?(x=v(x),b(x,this.S)):x=this.S),this.m!==null||this.O||(C.H=x,x=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=pd(this,C,h),f=Ln(this.I),Ue(f,"RID",a),Ue(f,"CVER",22),this.D&&Ue(f,"X-HTTP-Session-Id",this.D),ui(this,f),x&&(this.O?h="headers="+encodeURIComponent(String(id(x)))+"&"+h:this.m&&$l(f,this.m,x)),jl(this.h,C),this.Ua&&Ue(f,"TYPE","init"),this.P?(Ue(f,"$req",h),Ue(f,"SID","null"),C.T=!0,Ll(C,f,null)):Ll(C,f,h),this.G=2}}else this.G==3&&(a?fd(this,a):this.i.length==0||Kh(this.h)||fd(this))};function fd(a,h){var f;h?f=h.l:f=a.U++;const m=Ln(a.I);Ue(m,"SID",a.K),Ue(m,"RID",f),Ue(m,"AID",a.T),ui(a,m),a.m&&a.o&&$l(m,a.m,a.o),f=new er(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=pd(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),jl(a.h,f),Ll(f,m,h)}function ui(a,h){a.H&&ge(a.H,function(f,m){Ue(h,m,f)}),a.l&&Xh({},function(f,m){Ue(h,m,f)})}function pd(a,h,f){f=Math.min(a.i.length,f);var m=a.l?g(a.l.Na,a.l,a):null;e:{var C=a.i;let x=-1;for(;;){const W=["count="+f];x==-1?0<f?(x=C[0].g,W.push("ofs="+x)):x=0:W.push("ofs="+x);let Ne=!0;for(let at=0;at<f;at++){let Ae=C[at].g;const gt=C[at].map;if(Ae-=x,0>Ae)x=Math.max(0,C[at].g-100),Ne=!1;else try{Yv(gt,W,"req"+Ae+"_")}catch{m&&m(gt)}}if(Ne){m=W.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,m}function gd(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;we||Zt(),ye||(we(),ye=!0),Mt.add(h,a),a.v=0}}function Hl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ti(g(a.Fa,a),yd(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,md(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ti(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,bt(10),Vo(this),md(this))};function Gl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function md(a){a.g=new er(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Ln(a.qa);Ue(h,"RID","rpc"),Ue(h,"SID",a.K),Ue(h,"AID",a.T),Ue(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ue(h,"TO",a.ja),Ue(h,"TYPE","xmlhttp"),ui(a,h),a.m&&a.o&&$l(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=ko(Ln(h)),f.m=null,f.P=!0,qh(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Vo(this),Hl(this),bt(19))};function Mo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function _d(a,h){var f=null;if(a.g==h){Mo(a),Gl(a),a.g=null;var m=2}else if(Bl(a.h,h))f=h.D,Qh(a.h,h),m=1;else return;if(a.G!=0){if(h.o)if(m==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var C=a.B;m=Ao(),he(m,new Fh(m,f)),xo(a)}else gd(a);else if(C=h.s,C==3||C==0&&0<h.X||!(m==1&&nE(a,h)||m==2&&Hl(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),C){case 1:Mr(a,5);break;case 4:Mr(a,10);break;case 3:Mr(a,6);break;default:Mr(a,2)}}}function yd(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Mr(a,h){if(a.j.info("Error code "+h),h==2){var f=g(a.fb,a),m=a.Xa;const C=!m;m=new xr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Po(m,"https"),ko(m),C?Qv(m.toString(),f):Jv(m.toString(),f)}else bt(2);a.G=0,a.l&&a.l.sa(h),vd(a),dd(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function vd(a){if(a.G=0,a.ka=[],a.l){const h=Jh(a.h);(h.length!=0||a.i.length!=0)&&(V(a.ka,h),V(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function Ed(a,h,f){var m=f instanceof xr?Ln(f):new xr(f);if(m.g!="")h&&(m.g=h+"."+m.g),Co(m,m.s);else{var C=l.location;m=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;var x=new xr(null);m&&Po(x,m),h&&(x.g=h),C&&Co(x,C),f&&(x.l=f),m=x}return f=a.D,h=a.ya,f&&h&&Ue(m,f,h),Ue(m,"VER",a.la),ui(a,m),m}function Td(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new He(new No({eb:f})):new He(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function wd(){}t=wd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Lo(){}Lo.prototype.g=function(a,h){return new Ft(a,h)};function Ft(a,h){ue.call(this),this.g=new hd(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!N(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!N(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ds(this)}k(Ft,ue),Ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ft.prototype.close=function(){ql(this.g)},Ft.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Ot(a),a=f);h.i.push(new Fv(h.Ya++,a)),h.G==3&&xo(h)},Ft.prototype.N=function(){this.g.l=null,delete this.j,ql(this.g),delete this.g,Ft.aa.N.call(this)};function Id(a){Dl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}k(Id,Dl);function Ad(){Vl.call(this),this.status=1}k(Ad,Vl);function ds(a){this.g=a}k(ds,wd),ds.prototype.ua=function(){he(this.g,"a")},ds.prototype.ta=function(a){he(this.g,new Id(a))},ds.prototype.sa=function(a){he(this.g,new Ad)},ds.prototype.ra=function(){he(this.g,"b")},Lo.prototype.createWebChannel=Lo.prototype.g,Ft.prototype.send=Ft.prototype.o,Ft.prototype.open=Ft.prototype.m,Ft.prototype.close=Ft.prototype.close,s_=function(){return new Lo},r_=function(){return Ao()},n_=Dr,Gc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},bo.NO_ERROR=0,bo.TIMEOUT=8,bo.HTTP_ERROR=6,sa=bo,Bh.COMPLETE="complete",t_=Bh,xh.EventType=Zs,Zs.OPEN="a",Zs.CLOSE="b",Zs.ERROR="c",Zs.MESSAGE="d",ue.prototype.listen=ue.prototype.K,vi=xh,He.prototype.listenOnce=He.prototype.L,He.prototype.getLastError=He.prototype.Ka,He.prototype.getLastErrorCode=He.prototype.Ba,He.prototype.getStatus=He.prototype.Z,He.prototype.getResponseJson=He.prototype.Oa,He.prototype.getResponseText=He.prototype.oa,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Ha,e_=He}).apply(typeof Ho<"u"?Ho:typeof self<"u"?self:typeof window<"u"?window:{});const Of="@firebase/firestore",Df="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gs="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=new hl("@firebase/firestore");function _s(){return Yr.logLevel}function Y(t,...e){if(Yr.logLevel<=Ee.DEBUG){const n=e.map(Lu);Yr.debug(`Firestore (${Gs}): ${t}`,...n)}}function Qn(t,...e){if(Yr.logLevel<=Ee.ERROR){const n=e.map(Lu);Yr.error(`Firestore (${Gs}): ${t}`,...n)}}function Ar(t,...e){if(Yr.logLevel<=Ee.WARN){const n=e.map(Lu);Yr.warn(`Firestore (${Gs}): ${t}`,...n)}}function Lu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,i_(t,r,n)}function i_(t,e,n){let r=`FIRESTORE (${Gs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Qn(r),new Error(r)}function Pe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||i_(e,s,r)}function pe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends pn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Kb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(yt.UNAUTHENTICATED)))}shutdown(){}}class Wb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class Qb{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Pe(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Er;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Er,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},l=c=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Er)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Pe(typeof r.accessToken=="string",31837,{l:r}),new o_(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string",2055,{h:e}),new yt(e)}}class Jb{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Xb{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Jb(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(yt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Vf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yb{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Bt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Pe(this.o===void 0,3512);const r=i=>{i.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Vf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Pe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Vf(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Zb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function _e(t,e){return t<e?-1:t>e?1:0}function zc(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return _e(r,s);{const i=a_(),o=eR(i.encode(xf(t,n)),i.encode(xf(e,n)));return o!==0?o:_e(r,s)}}n+=r>65535?2:1}return _e(t.length,e.length)}function xf(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function eR(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return _e(t[n],e[n]);return _e(t.length,e.length)}function Vs(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf="__name__";class mn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ae(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ae(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return mn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof mn?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=mn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return _e(e.length,n.length)}static compareSegments(e,n){const r=mn.isNumericId(e),s=mn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?mn.extractNumericId(e).compare(mn.extractNumericId(n)):zc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return vr.fromString(e.substring(4,e.length-2))}}class Me extends mn{construct(e,n,r){return new Me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Me(n)}static emptyPath(){return new Me([])}}const tR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends mn{construct(e,n,r){return new ht(e,n,r)}static isValidIdentifier(e){return tR.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Mf}static keyField(){return new ht([Mf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new X(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new X(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new X(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(Me.fromString(e))}static fromName(e){return new ne(Me.fromString(e).popFirst(5))}static empty(){return new ne(Me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new Me(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(t,e,n){if(!n)throw new X(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nR(t,e,n,r){if(e===!0&&r===!0)throw new X(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Lf(t){if(!ne.isDocumentKey(t))throw new X(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Uf(t){if(ne.isDocumentKey(t))throw new X(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function c_(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function fl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae(12329,{type:typeof t})}function Ji(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fl(t);throw new X(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(t,e){const n={typeString:t};return e&&(n.value=e),n}function po(t,e){if(!c_(t))throw new X(F.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new X(F.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff=-62135596800,Bf=1e6;class Fe{static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Bf);return new Fe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Ff)throw new X(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Bf}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(po(e,Fe._jsonSchema))return new Fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ff;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Fe._jsonSchemaVersion="firestore/timestamp/1.0",Fe._jsonSchema={type:tt("string",Fe._jsonSchemaVersion),seconds:tt("number"),nanoseconds:tt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{static fromTimestamp(e){return new ce(e)}static min(){return new ce(new Fe(0,0))}static max(){return new ce(new Fe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=-1;function rR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ce.fromTimestamp(r===1e9?new Fe(n+1,0):new Fe(n,r));return new br(s,ne.empty(),e)}function sR(t){return new br(t.readTime,t.key,Xi)}class br{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new br(ce.min(),ne.empty(),Xi)}static max(){return new br(ce.max(),ne.empty(),Xi)}}function iR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class aR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zs(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==oR)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):$.reject(n)}static resolve(e){return new $(((n,r)=>{n(e)}))}static reject(e){return new $(((n,r)=>{r(e)}))}static waitFor(e){return new $(((n,r)=>{let s=0,i=0,o=!1;e.forEach((l=>{++s,l.next((()=>{++i,o&&i===s&&n()}),(c=>r(c)))})),o=!0,i===s&&n()}))}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next((s=>s?$.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new $(((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next((d=>{o[u]=d,++l,l===i&&r(o)}),(d=>s(d)))}}))}static doWhile(e,n){return new $(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function lR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ks(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}pl.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu=-1;function gl(t){return t==null}function Pa(t){return t===0&&1/t==-1/0}function cR(t){return typeof t=="number"&&Number.isInteger(t)&&!Pa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_="";function uR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=jf(e)),e=hR(t.get(n),e);return jf(e)}function hR(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case u_:n+="";break;default:n+=i}}return n}function jf(t){return t+u_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ss(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function h_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n){this.comparator=e,this.root=n||ut.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ut.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Go(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Go(this.root,e,this.comparator,!1)}getReverseIterator(){return new Go(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Go(this.root,e,this.comparator,!0)}}class Go{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ut{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ut.RED,this.left=s??ut.EMPTY,this.right=i??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ut(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ut.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ae(27949);return e+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw ae(57766)}get value(){throw ae(16141)}get color(){throw ae(16727)}get left(){throw ae(29726)}get right(){throw ae(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new ut(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new qf(this.data.getIterator())}getIteratorFrom(e){return new qf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof st)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new st(this.comparator);return n.data=e,n}}class qf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new rn([])}unionWith(e){let n=new st(ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new rn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Vs(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new d_("Invalid base64 string: "+i):i}})(e);return new ft(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const dR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rr(t){if(Pe(!!t,39018),typeof t=="string"){let e=0;const n=dR.exec(t);if(Pe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Je(t.seconds),nanos:Je(t.nanos)}}function Je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Sr(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_="server_timestamp",p_="__type__",g_="__previous_value__",m_="__local_write_time__";function Bu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[p_])===null||n===void 0?void 0:n.stringValue)===f_}function ml(t){const e=t.mapValue.fields[g_];return Bu(e)?ml(e):e}function Yi(t){const e=Rr(t.mapValue.fields[m_].timestampValue);return new Fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e,n,r,s,i,o,l,c,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=d}}const Ca="(default)";class Zi{constructor(e,n){this.projectId=e,this.database=n||Ca}static empty(){return new Zi("","")}get isDefaultDatabase(){return this.database===Ca}isEqual(e){return e instanceof Zi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __="__type__",pR="__max__",zo={mapValue:{}},y_="__vector__",ka="value";function Pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Bu(t)?4:mR(t)?9007199254740991:gR(t)?10:11:ae(28295,{value:t})}function xn(t,e){if(t===e)return!0;const n=Pr(t);if(n!==Pr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Yi(t).isEqual(Yi(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Rr(s.timestampValue),l=Rr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return Sr(s.bytesValue).isEqual(Sr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return Je(s.geoPointValue.latitude)===Je(i.geoPointValue.latitude)&&Je(s.geoPointValue.longitude)===Je(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Je(s.integerValue)===Je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Je(s.doubleValue),l=Je(i.doubleValue);return o===l?Pa(o)===Pa(l):isNaN(o)&&isNaN(l)}return!1})(t,e);case 9:return Vs(t.arrayValue.values||[],e.arrayValue.values||[],xn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if($f(o)!==$f(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!xn(o[c],l[c])))return!1;return!0})(t,e);default:return ae(52216,{left:t})}}function eo(t,e){return(t.values||[]).find((n=>xn(n,e)))!==void 0}function xs(t,e){if(t===e)return 0;const n=Pr(t),r=Pr(e);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const l=Je(i.integerValue||i.doubleValue),c=Je(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return Hf(t.timestampValue,e.timestampValue);case 4:return Hf(Yi(t),Yi(e));case 5:return zc(t.stringValue,e.stringValue);case 6:return(function(i,o){const l=Sr(i),c=Sr(o);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=_e(l[u],c[u]);if(d!==0)return d}return _e(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const l=_e(Je(i.latitude),Je(o.latitude));return l!==0?l:_e(Je(i.longitude),Je(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return Gf(t.arrayValue,e.arrayValue);case 10:return(function(i,o){var l,c,u,d;const p=i.fields||{},g=o.fields||{},y=(l=p[ka])===null||l===void 0?void 0:l.arrayValue,k=(c=g[ka])===null||c===void 0?void 0:c.arrayValue,O=_e(((u=y==null?void 0:y.values)===null||u===void 0?void 0:u.length)||0,((d=k==null?void 0:k.values)===null||d===void 0?void 0:d.length)||0);return O!==0?O:Gf(y,k)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===zo.mapValue&&o===zo.mapValue)return 0;if(i===zo.mapValue)return 1;if(o===zo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const g=zc(c[p],d[p]);if(g!==0)return g;const y=xs(l[c[p]],u[d[p]]);if(y!==0)return y}return _e(c.length,d.length)})(t.mapValue,e.mapValue);default:throw ae(23264,{le:n})}}function Hf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=Rr(t),r=Rr(e),s=_e(n.seconds,r.seconds);return s!==0?s:_e(n.nanos,r.nanos)}function Gf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=xs(n[s],r[s]);if(i)return i}return _e(n.length,r.length)}function Ms(t){return Kc(t)}function Kc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=Rr(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Sr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return ne.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Kc(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Kc(n.fields[o])}`;return s+"}"})(t.mapValue):ae(61005,{value:t})}function ia(t){switch(Pr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ml(t);return e?16+ia(e):16;case 5:return 2*t.stringValue.length;case 6:return Sr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+ia(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return ss(r.fields,((i,o)=>{s+=i.length+ia(o)})),s})(t.mapValue);default:throw ae(13486,{value:t})}}function zf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Wc(t){return!!t&&"integerValue"in t}function ju(t){return!!t&&"arrayValue"in t}function Kf(t){return!!t&&"nullValue"in t}function Wf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function oa(t){return!!t&&"mapValue"in t}function gR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[__])===null||n===void 0?void 0:n.stringValue)===y_}function Oi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ss(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Oi(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Oi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function mR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===pR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.value=e}static empty(){return new Qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!oa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Oi(n)}setAll(e){let n=ht.emptyPath(),r={},s=[];e.forEach(((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Oi(o):s.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());oa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return xn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];oa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ss(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Qt(Oi(this.value))}}function v_(t){const e=[];return ss(t.fields,((n,r)=>{const s=new ht([n]);if(oa(r)){const i=v_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new rn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Et(e,0,ce.min(),ce.min(),ce.min(),Qt.empty(),0)}static newFoundDocument(e,n,r,s){return new Et(e,1,n,ce.min(),r,s,0)}static newNoDocument(e,n){return new Et(e,2,n,ce.min(),ce.min(),Qt.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,ce.min(),ce.min(),Qt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n){this.position=e,this.inclusive=n}}function Qf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ne.comparator(ne.fromName(o.referenceValue),n.key):r=xs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Jf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!xn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n="asc"){this.field=e,this.dir=n}}function _R(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{}class et extends E_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new vR(e,n,r):n==="array-contains"?new wR(e,r):n==="in"?new IR(e,r):n==="not-in"?new AR(e,r):n==="array-contains-any"?new bR(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new ER(e,r):new TR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(xs(n,this.value)):n!==null&&Pr(this.value)===Pr(n)&&this.matchesComparison(xs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hn extends E_{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new hn(e,n)}matches(e){return T_(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function T_(t){return t.op==="and"}function w_(t){return yR(t)&&T_(t)}function yR(t){for(const e of t.filters)if(e instanceof hn)return!1;return!0}function Qc(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+Ms(t.value);if(w_(t))return t.filters.map((e=>Qc(e))).join(",");{const e=t.filters.map((n=>Qc(n))).join(",");return`${t.op}(${e})`}}function I_(t,e){return t instanceof et?(function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&xn(r.value,s.value)})(t,e):t instanceof hn?(function(r,s){return s instanceof hn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,l)=>i&&I_(o,s.filters[l])),!0):!1})(t,e):void ae(19439)}function A_(t){return t instanceof et?(function(n){return`${n.field.canonicalString()} ${n.op} ${Ms(n.value)}`})(t):t instanceof hn?(function(n){return n.op.toString()+" {"+n.getFilters().map(A_).join(" ,")+"}"})(t):"Filter"}class vR extends et{constructor(e,n,r){super(e,n,r),this.key=ne.fromName(r.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class ER extends et{constructor(e,n){super(e,"in",n),this.keys=b_("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class TR extends et{constructor(e,n){super(e,"not-in",n),this.keys=b_("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function b_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map((r=>ne.fromName(r.referenceValue)))}class wR extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ju(n)&&eo(n.arrayValue,this.value)}}class IR extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&eo(this.value.arrayValue,n)}}class AR extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(eo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!eo(this.value.arrayValue,n)}}class bR extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ju(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>eo(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Pe=null}}function Xf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new RR(t,e,n,r,s,i,o)}function $u(t){const e=pe(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>Qc(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),gl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Ms(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Ms(r))).join(",")),e.Pe=n}return e.Pe}function qu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!_R(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!I_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Jf(t.startAt,e.startAt)&&Jf(t.endAt,e.endAt)}function Jc(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function SR(t,e,n,r,s,i,o,l){return new Ws(t,e,n,r,s,i,o,l)}function R_(t){return new Ws(t)}function Yf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function S_(t){return t.collectionGroup!==null}function Di(t){const e=pe(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new st(ht.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(l=l.add(u.field))}))})),l})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new to(i,r))})),n.has(ht.keyField().canonicalString())||e.Te.push(new to(ht.keyField(),r))}return e.Te}function In(t){const e=pe(t);return e.Ie||(e.Ie=PR(e,Di(t))),e.Ie}function PR(t,e){if(t.limitType==="F")return Xf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new to(s.field,i)}));const n=t.endAt?new Na(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Na(t.startAt.position,t.startAt.inclusive):null;return Xf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Xc(t,e){const n=t.filters.concat([e]);return new Ws(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Yc(t,e,n){return new Ws(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function _l(t,e){return qu(In(t),In(e))&&t.limitType===e.limitType}function P_(t){return`${$u(In(t))}|lt:${t.limitType}`}function ys(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>A_(s))).join(", ")}]`),gl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Ms(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Ms(s))).join(",")),`Target(${r})`})(In(t))}; limitType=${t.limitType})`}function yl(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ne.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of Di(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,l,c){const u=Qf(o,l,c);return o.inclusive?u<=0:u<0})(r.startAt,Di(r),s)||r.endAt&&!(function(o,l,c){const u=Qf(o,l,c);return o.inclusive?u>=0:u>0})(r.endAt,Di(r),s))})(t,e)}function CR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function C_(t){return(e,n)=>{let r=!1;for(const s of Di(t)){const i=kR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function kR(t,e,n){const r=t.field.isKeyField()?ne.comparator(e.key,n.key):(function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?xs(c,u):ae(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ae(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ss(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return h_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR=new qe(ne.comparator);function Jn(){return NR}const k_=new qe(ne.comparator);function Ei(...t){let e=k_;for(const n of t)e=e.insert(n.key,n);return e}function N_(t){let e=k_;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function zr(){return Vi()}function O_(){return Vi()}function Vi(){return new is((t=>t.toString()),((t,e)=>t.isEqual(e)))}const OR=new qe(ne.comparator),DR=new st(ne.comparator);function Te(...t){let e=DR;for(const n of t)e=e.add(n);return e}const VR=new st(_e);function xR(){return VR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pa(e)?"-0":e}}function D_(t){return{integerValue:""+t}}function MR(t,e){return cR(e)?D_(e):Hu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(){this._=void 0}}function LR(t,e,n){return t instanceof no?(function(s,i){const o={fields:{[p_]:{stringValue:f_},[m_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Bu(i)&&(i=ml(i)),i&&(o.fields[g_]=i),{mapValue:o}})(n,e):t instanceof ro?x_(t,e):t instanceof so?M_(t,e):(function(s,i){const o=V_(s,i),l=Zf(o)+Zf(s.Ee);return Wc(o)&&Wc(s.Ee)?D_(l):Hu(s.serializer,l)})(t,e)}function UR(t,e,n){return t instanceof ro?x_(t,e):t instanceof so?M_(t,e):n}function V_(t,e){return t instanceof Oa?(function(r){return Wc(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class no extends vl{}class ro extends vl{constructor(e){super(),this.elements=e}}function x_(t,e){const n=L_(e);for(const r of t.elements)n.some((s=>xn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class so extends vl{constructor(e){super(),this.elements=e}}function M_(t,e){let n=L_(e);for(const r of t.elements)n=n.filter((s=>!xn(s,r)));return{arrayValue:{values:n}}}class Oa extends vl{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Zf(t){return Je(t.integerValue||t.doubleValue)}function L_(t){return ju(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,n){this.field=e,this.transform=n}}function BR(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof ro&&s instanceof ro||r instanceof so&&s instanceof so?Vs(r.elements,s.elements,xn):r instanceof Oa&&s instanceof Oa?xn(r.Ee,s.Ee):r instanceof no&&s instanceof no})(t.transform,e.transform)}class jR{constructor(e,n){this.version=e,this.transformResults=n}}class An{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new An}static exists(e){return new An(void 0,e)}static updateTime(e){return new An(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function aa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class El{}function U_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Gu(t.key,An.none()):new go(t.key,t.data,An.none());{const n=t.data,r=Qt.empty();let s=new st(ht.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new os(t.key,r,new rn(s.toArray()),An.none())}}function $R(t,e,n){t instanceof go?(function(s,i,o){const l=s.value.clone(),c=tp(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):t instanceof os?(function(s,i,o){if(!aa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=tp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(F_(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function xi(t,e,n,r){return t instanceof go?(function(i,o,l,c){if(!aa(i.precondition,o))return l;const u=i.value.clone(),d=np(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof os?(function(i,o,l,c){if(!aa(i.precondition,o))return l;const u=np(i.fieldTransforms,c,o),d=o.data;return d.setAll(F_(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,l){return aa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(t,e,n)}function qR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=V_(r.transform,s||null);i!=null&&(n===null&&(n=Qt.empty()),n.set(r.field,i))}return n||null}function ep(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Vs(r,s,((i,o)=>BR(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class go extends El{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class os extends El{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function F_(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function tp(t,e,n){const r=new Map;Pe(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,UR(o,l,n[s]))}return r}function np(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,LR(i,o,e))}return r}class Gu extends El{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class HR extends El{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&$R(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=xi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=xi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=O_();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=U_(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ce.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Te())}isEqual(e){return this.batchId===e.batchId&&Vs(this.mutations,e.mutations,((n,r)=>ep(n,r)))&&Vs(this.baseMutations,e.baseMutations,((n,r)=>ep(n,r)))}}class zu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Pe(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return OR})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new zu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ze,Ie;function WR(t){switch(t){case F.OK:return ae(64938);case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return ae(15467,{code:t})}}function B_(t){if(t===void 0)return Qn("GRPC error has no .code"),F.UNKNOWN;switch(t){case Ze.OK:return F.OK;case Ze.CANCELLED:return F.CANCELLED;case Ze.UNKNOWN:return F.UNKNOWN;case Ze.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Ze.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Ze.INTERNAL:return F.INTERNAL;case Ze.UNAVAILABLE:return F.UNAVAILABLE;case Ze.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Ze.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Ze.NOT_FOUND:return F.NOT_FOUND;case Ze.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Ze.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Ze.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Ze.ABORTED:return F.ABORTED;case Ze.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Ze.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Ze.DATA_LOSS:return F.DATA_LOSS;default:return ae(39323,{code:t})}}(Ie=Ze||(Ze={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR=new vr([4294967295,4294967295],0);function rp(t){const e=a_().encode(t),n=new Zm;return n.update(e),new Uint8Array(n.digest())}function sp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new vr([n,r],0),new vr([s,i],0)]}class Ku{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ti(`Invalid padding: ${n}`);if(r<0)throw new Ti(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ti(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ti(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=vr.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(vr.fromNumber(r)));return s.compare(QR)===1&&(s=new vr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=rp(e),[r,s]=sp(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);if(!this.ye(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ku(i,s,n);return r.forEach((l=>o.insert(l))),o}insert(e){if(this.fe===0)return;const n=rp(e),[r,s]=sp(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ti extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,mo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Tl(ce.min(),s,new qe(_e),Jn(),Te())}}class mo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new mo(r,n,Te(),Te(),Te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class j_{constructor(e,n){this.targetId=e,this.De=n}}class $_{constructor(e,n,r=ft.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class ip{constructor(){this.ve=0,this.Ce=op(),this.Fe=ft.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Te(),n=Te(),r=Te();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ae(38017,{changeType:i})}})),new mo(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=op()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Pe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class JR{constructor(e){this.We=e,this.Ge=new Map,this.ze=Jn(),this.je=Ko(),this.Je=Ko(),this.He=new qe(_e)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,(n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:ae(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach(((r,s)=>{this.nt(s)&&n(s)}))}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(Jc(i))if(r===0){const o=new ne(i.path);this.Xe(n,o,Et.newNoDocument(o,ce.min()))}else Pe(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),c=l?this.ut(l,e,o):1;if(c!==0){this.rt(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,u)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Sr(r).toUint8Array()}catch(c){if(c instanceof d_)return Ar("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Ku(o,s,i)}catch(c){return Ar(c instanceof Ti?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,i,null),s++)})),s}Pt(e){const n=new Map;this.Ge.forEach(((i,o)=>{const l=this.st(o);if(l){if(i.current&&Jc(l.target)){const c=new ne(l.target.path);this.Tt(c).has(o)||this.It(o,c)||this.Xe(o,c,Et.newNoDocument(c,e))}i.Ne&&(n.set(o,i.Le()),i.ke())}}));let r=Te();this.Je.forEach(((i,o)=>{let l=!0;o.forEachWhile((c=>{const u=this.st(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.ze.forEach(((i,o)=>o.setReadTime(e)));const s=new Tl(e,n,this.He,this.ze,r);return this.ze=Jn(),this.je=Ko(),this.Je=Ko(),this.He=new qe(_e),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new ip,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new st(_e),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new st(_e),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new ip),this.We.getRemoteKeysForTarget(e).forEach((n=>{this.Xe(e,n,null)}))}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function Ko(){return new qe(ne.comparator)}function op(){return new qe(ne.comparator)}const XR={asc:"ASCENDING",desc:"DESCENDING"},YR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ZR={and:"AND",or:"OR"};class e0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Zc(t,e){return t.useProto3Json||gl(e)?e:{value:e}}function Da(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function q_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function t0(t,e){return Da(t,e.toTimestamp())}function bn(t){return Pe(!!t,49232),ce.fromTimestamp((function(n){const r=Rr(n);return new Fe(r.seconds,r.nanos)})(t))}function Wu(t,e){return eu(t,e).canonicalString()}function eu(t,e){const n=(function(s){return new Me(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function H_(t){const e=Me.fromString(t);return Pe(Q_(e),10190,{key:e.toString()}),e}function tu(t,e){return Wu(t.databaseId,e.path)}function pc(t,e){const n=H_(e);if(n.get(1)!==t.databaseId.projectId)throw new X(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(z_(n))}function G_(t,e){return Wu(t.databaseId,e)}function n0(t){const e=H_(t);return e.length===4?Me.emptyPath():z_(e)}function nu(t){return new Me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function z_(t){return Pe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function ap(t,e,n){return{name:tu(t,e),fields:n.value.mapValue.fields}}function r0(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ae(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,d){return u.useProto3Json?(Pe(d===void 0||typeof d=="string",58123),ft.fromBase64String(d||"")):(Pe(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),ft.fromUint8Array(d||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(u){const d=u.code===void 0?F.UNKNOWN:B_(u.code);return new X(d,u.message||"")})(o);n=new $_(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=pc(t,r.document.name),i=bn(r.document.updateTime),o=r.document.createTime?bn(r.document.createTime):ce.min(),l=new Qt({mapValue:{fields:r.document.fields}}),c=Et.newFoundDocument(s,i,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];n=new la(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=pc(t,r.document),i=r.readTime?bn(r.readTime):ce.min(),o=Et.newNoDocument(s,i),l=r.removedTargetIds||[];n=new la([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=pc(t,r.document),i=r.removedTargetIds||[];n=new la([],i,s,null)}else{if(!("filter"in e))return ae(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new KR(s,i),l=r.targetId;n=new j_(l,o)}}return n}function s0(t,e){let n;if(e instanceof go)n={update:ap(t,e.key,e.value)};else if(e instanceof Gu)n={delete:tu(t,e.key)};else if(e instanceof os)n={update:ap(t,e.key,e.data),updateMask:f0(e.fieldMask)};else{if(!(e instanceof HR))return ae(16599,{Rt:e.type});n={verify:tu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const l=o.transform;if(l instanceof no)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ro)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof so)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Oa)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw ae(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:t0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ae(27497)})(t,e.precondition)),n}function i0(t,e){return t&&t.length>0?(Pe(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?bn(s.updateTime):bn(i);return o.isEqual(ce.min())&&(o=bn(i)),new jR(o,s.transformResults||[])})(n,e)))):[]}function o0(t,e){return{documents:[G_(t,e.path)]}}function a0(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=G_(t,s);const i=(function(u){if(u.length!==0)return W_(hn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((d=>(function(g){return{field:vs(g.field),direction:u0(g.dir)}})(d)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Zc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{Vt:n,parent:s}}function l0(t){let e=n0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Pe(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=(function(p){const g=K_(p);return g instanceof hn&&w_(g)?g.getFilters():[g]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((g=>(function(k){return new to(Es(k.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(k.direction))})(g)))})(n.orderBy));let l=null;n.limit&&(l=(function(p){let g;return g=typeof p=="object"?p.value:p,gl(g)?null:g})(n.limit));let c=null;n.startAt&&(c=(function(p){const g=!!p.before,y=p.values||[];return new Na(y,g)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const g=!p.before,y=p.values||[];return new Na(y,g)})(n.endAt)),SR(e,s,o,i,l,"F",c,u)}function c0(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function K_(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Es(n.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Es(n.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Es(n.unaryFilter.field);return et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Es(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ae(61313);default:return ae(60726)}})(t):t.fieldFilter!==void 0?(function(n){return et.create(Es(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ae(58110);default:return ae(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return hn.create(n.compositeFilter.filters.map((r=>K_(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ae(1026)}})(n.compositeFilter.op))})(t):ae(30097,{filter:t})}function u0(t){return XR[t]}function h0(t){return YR[t]}function d0(t){return ZR[t]}function vs(t){return{fieldPath:t.canonicalString()}}function Es(t){return ht.fromServerFormat(t.fieldPath)}function W_(t){return t instanceof et?(function(n){if(n.op==="=="){if(Wf(n.value))return{unaryFilter:{field:vs(n.field),op:"IS_NAN"}};if(Kf(n.value))return{unaryFilter:{field:vs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Wf(n.value))return{unaryFilter:{field:vs(n.field),op:"IS_NOT_NAN"}};if(Kf(n.value))return{unaryFilter:{field:vs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vs(n.field),op:h0(n.op),value:n.value}}})(t):t instanceof hn?(function(n){const r=n.getFilters().map((s=>W_(s)));return r.length===1?r[0]:{compositeFilter:{op:d0(n.op),filters:r}}})(t):ae(54877,{filter:t})}function f0(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function Q_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n,r,s,i=ce.min(),o=ce.min(),l=ft.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new pr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e){this.gt=e}}function g0(t){const e=l0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Yc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(){this.Dn=new _0}addToCollectionParentIndex(e,n){return this.Dn.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(br.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(br.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class _0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new st(Me.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new st(Me.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},J_=41943040;class Vt{static withCacheSize(e){return new Vt(e,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vt.DEFAULT_COLLECTION_PERCENTILE=10,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Vt.DEFAULT=new Vt(J_,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Vt.DISABLED=new Vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Ls(0)}static ur(){return new Ls(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp="LruGarbageCollector",y0=1048576;function up([t,e],[n,r]){const s=_e(t,n);return s===0?_e(e,r):s}class v0{constructor(e){this.Tr=e,this.buffer=new st(up),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();up(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class E0{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){Y(cp,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ks(n)?Y(cp,"Ignoring IndexedDB error during garbage collection: ",n):await zs(n)}await this.Rr(3e5)}))}}class T0{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return $.resolve(pl.ue);const r=new v0(n);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Y("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(lp)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(Y("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),lp):this.pr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(Y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,l=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),_s()<=Ee.DEBUG&&Y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function w0(t,e){return new T0(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(){this.changes=new is((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&xi(r.mutation,s,rn.empty(),Fe.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,Te()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=Te()){const s=zr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=Ei();return i.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=zr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,Te())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,l)=>{n.set(o,l)}))}))}computeViews(e,n,r,s){let i=Jn();const o=Vi(),l=(function(){return Vi()})();return n.forEach(((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof os)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),xi(d.mutation,u,d.mutation.getFieldMask(),Fe.now())):o.set(u.key,rn.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((u,d)=>o.set(u,d))),n.forEach(((u,d)=>{var p;return l.set(u,new A0(d,(p=o.get(u))!==null&&p!==void 0?p:null))})),l)))}recalculateAndSaveOverlays(e,n){const r=Vi();let s=new qe(((o,l)=>o-l)),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const l of o)l.keys().forEach((c=>{const u=n.get(c);if(u===null)return;let d=r.get(c)||rn.empty();d=l.applyToLocalView(u,d),r.set(c,d);const p=(s.get(l.batchId)||Te()).add(c);s=s.insert(l.batchId,p)}))})).next((()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=O_();d.forEach((g=>{if(!i.has(g)){const y=U_(n.get(g),r.get(g));y!==null&&p.set(g,y),i=i.add(g)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return $.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return ne.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):S_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):$.resolve(zr());let l=Xi,c=i;return o.next((u=>$.forEach(u,((d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?$.resolve():this.remoteDocumentCache.getEntry(e,d).next((g=>{c=c.insert(d,g)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,c,u,Te()))).next((d=>({batchId:l,changes:N_(d)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next((r=>{let s=Ei();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ei();return this.indexManager.getCollectionParents(e,i).next((l=>$.forEach(l,(c=>{const u=(function(p,g){return new Ws(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((d=>{d.forEach(((p,g)=>{o=o.insert(p,g)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,Et.newInvalidDocument(d)))}));let l=Ei();return o.forEach(((c,u)=>{const d=i.get(c);d!==void 0&&xi(d.mutation,u,rn.empty(),Fe.now()),yl(n,u)&&(l=l.insert(c,u))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return $.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:bn(s.createTime)}})(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,(function(s){return{name:s.name,query:g0(s.bundledQuery),readTime:bn(s.readTime)}})(n)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(){this.overlays=new qe(ne.comparator),this.kr=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=zr();return $.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.wt(e,n,i)})),$.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const s=zr(),i=n.length+1,o=new ne(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return $.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new qe(((u,d)=>u-d));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=zr(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=zr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,d)=>l.set(u,d))),!(l.size()>=s)););return $.resolve(l)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new zR(n,r));let i=this.kr.get(n);i===void 0&&(i=Te(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(){this.qr=new st(it.Qr),this.$r=new st(it.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new it(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Wr(new it(e,n))}Gr(e,n){e.forEach((r=>this.removeReference(r,n)))}zr(e){const n=new ne(new Me([])),r=new it(n,e),s=new it(n,e+1),i=[];return this.$r.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new ne(new Me([])),r=new it(n,e),s=new it(n,e+1);let i=Te();return this.$r.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new it(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return ne.comparator(e.key,n.key)||_e(e.Hr,n.Hr)}static Ur(e,n){return _e(e.Hr,n.Hr)||ne.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new st(it.Qr)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new GR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Yr=this.Yr.add(new it(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return $.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?Fu:this.er-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new it(n,0),s=new it(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(o=>{const l=this.Zr(o.Hr);i.push(l)})),$.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new st(_e);return n.forEach((s=>{const i=new it(s,0),o=new it(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],(l=>{r=r.add(l.Hr)}))})),$.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ne.isDocumentKey(i)||(i=i.child(""));const o=new it(new ne(i),0);let l=new st(_e);return this.Yr.forEachWhile((c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Hr)),!0)}),o),$.resolve(this.ei(l))}ei(e){const n=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Pe(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return $.forEach(n.mutations,(s=>{const i=new it(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,n){const r=new it(n,0),s=this.Yr.firstAfterOrEqual(r);return $.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e){this.ni=e,this.docs=(function(){return new qe(ne.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let r=Jn();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Et.newInvalidDocument(s))})),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Jn();const o=n.path,l=new ne(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||iR(sR(d),r)<=0||(s.has(d.key)||yl(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return $.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ae(9500)}ri(e,n){return $.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new N0(this)}getSize(e){return $.resolve(this.size)}}class N0 extends I0{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),$.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e){this.persistence=e,this.ii=new is((n=>$u(n)),qu),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.si=0,this.oi=new Qu,this.targetCount=0,this._i=Ls.ar()}forEachTarget(e,n){return this.ii.forEach(((r,s)=>n(s))),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),$.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new Ls(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.hr(n),$.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach(((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),$.waitFor(i).next((()=>s))}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),$.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e,n){this.ai={},this.overlays={},this.ui=new pl(0),this.ci=!1,this.ci=!0,this.li=new P0,this.referenceDelegate=e(this),this.hi=new O0(this),this.indexManager=new m0,this.remoteDocumentCache=(function(s){return new k0(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new p0(n),this.Ti=new R0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new S0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new C0(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const s=new D0(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,n){return $.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,n))))}}class D0 extends aR{constructor(e){super(),this.currentSequenceNumber=e}}class Ju{constructor(e){this.persistence=e,this.Ai=new Qu,this.Ri=null}static Vi(e){return new Ju(e)}get mi(){if(this.Ri)return this.Ri;throw ae(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),$.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.mi,(r=>{const s=ne.fromPath(r);return this.fi(e,s).next((i=>{i||n.removeEntry(s,ce.min())}))})).next((()=>(this.Ri=null,n.apply(e))))}updateLimboDocument(e,n){return this.fi(e,n).next((r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())}))}Pi(e){return 0}fi(e,n){return $.or([()=>$.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Va{constructor(e,n){this.persistence=e,this.gi=new is((r=>uR(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=w0(this,n)}static Vi(e,n){return new Va(e,n)}Ii(){}di(e){return $.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}yr(e){let n=0;return this.gr(e,(r=>{n++})).next((()=>n))}gr(e,n){return $.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?$.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(o=>this.Sr(e,o,n).next((l=>{l||(r++,i.removeEntry(o,ce.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),$.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),$.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),$.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ia(e.data.value)),n}Sr(e,n,r){return $.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return $.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=Te(),s=Te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Xu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return kA()?8:lR(It())>0?6:4})()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ys(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new V0;return this.ws(e,n,o).next((l=>{if(i.result=l,this.Rs)return this.Ss(e,n,o,l.size)}))})).next((()=>i.result))}Ss(e,n,r,s){return r.documentReadCount<this.Vs?(_s()<=Ee.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",ys(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),$.resolve()):(_s()<=Ee.DEBUG&&Y("QueryEngine","Query:",ys(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(_s()<=Ee.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",ys(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,In(n))):$.resolve())}ps(e,n){if(Yf(n))return $.resolve(null);let r=In(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=Yc(n,null,"F"),r=In(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=Te(...i);return this.gs.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const u=this.bs(n,l);return this.Ds(n,u,o,c.readTime)?this.ps(e,Yc(n,null,"F")):this.vs(e,u,n,c)}))))})))))}ys(e,n,r,s){return Yf(n)||s.isEqual(ce.min())?$.resolve(null):this.gs.getDocuments(e,r).next((i=>{const o=this.bs(n,i);return this.Ds(n,o,r,s)?$.resolve(null):(_s()<=Ee.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ys(n)),this.vs(e,o,n,rR(s,Xi)).next((l=>l)))}))}bs(e,n){let r=new st(C_(e));return n.forEach(((s,i)=>{yl(e,i)&&(r=r.add(i))})),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return _s()<=Ee.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",ys(n)),this.gs.getDocumentsMatchingQuery(e,n,br.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu="LocalStore",M0=3e8;class L0{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new qe(_e),this.Ms=new is((i=>$u(i)),qu),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new b0(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Fs)))}}function U0(t,e,n,r){return new L0(t,e,n,r)}async function Y_(t,e){const n=pe(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],l=[];let c=Te();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next((u=>({Bs:u,removedBatchIds:o,addedBatchIds:l})))}))}))}function F0(t,e){const n=pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return(function(l,c,u,d){const p=u.batch,g=p.keys();let y=$.resolve();return g.forEach((k=>{y=y.next((()=>d.getEntry(c,k))).next((O=>{const V=u.docVersions.get(k);Pe(V!==null,48541),O.version.compareTo(V)<0&&(p.applyToRemoteDocument(O,u),O.isValidDocument()&&(O.setReadTime(u.commitVersion),d.addEntry(O)))}))})),y.next((()=>l.mutationQueue.removeMutationBatch(c,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let c=Te();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function Z_(t){const e=pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.hi.getLastRemoteSnapshotVersion(n)))}function B0(t,e){const n=pe(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const l=[];e.targetChanges.forEach(((d,p)=>{const g=s.get(p);if(!g)return;l.push(n.hi.removeMatchingKeys(i,d.removedDocuments,p).next((()=>n.hi.addMatchingKeys(i,d.addedDocuments,p))));let y=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(ft.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),s=s.insert(p,y),(function(O,V,B){return O.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=M0?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0})(g,y,d)&&l.push(n.hi.updateTargetData(i,y))}));let c=Jn(),u=Te();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))})),l.push(j0(i,o,e.documentUpdates).next((d=>{c=d.Ls,u=d.ks}))),!r.isEqual(ce.min())){const d=n.hi.getLastRemoteSnapshotVersion(i).next((p=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(d)}return $.waitFor(l).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,u))).next((()=>c))})).then((i=>(n.Fs=s,i)))}function j0(t,e,n){let r=Te(),s=Te();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=Jn();return n.forEach(((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ce.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):Y(Yu,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)})),{Ls:o,ks:s}}))}function $0(t,e){const n=pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Fu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function q0(t,e){const n=pe(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.hi.getTargetData(r,e).next((i=>i?(s=i,$.resolve(s)):n.hi.allocateTargetId(r).next((o=>(s=new pr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r}))}async function ru(t,e,n){const r=pe(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Ks(o))throw o;Y(Yu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function hp(t,e,n){const r=pe(t);let s=ce.min(),i=Te();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,d){const p=pe(c),g=p.Ms.get(d);return g!==void 0?$.resolve(p.Fs.get(g)):p.hi.getTargetData(u,d)})(r,o,In(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next((c=>{i=c}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:ce.min(),n?i:Te()))).next((l=>(H0(r,CR(e),l),{documents:l,qs:i})))))}function H0(t,e,n){let r=t.xs.get(e)||ce.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.xs.set(e,r)}class dp{constructor(){this.activeTargetIds=xR()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class G0{constructor(){this.Fo=new dp,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new dp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp="ConnectivityMonitor";class pp{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){Y(fp,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){Y(fp,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wo=null;function su(){return Wo===null?Wo=(function(){return 268435456+Math.round(2147483648*Math.random())})():Wo++,"0x"+Wo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc="RestConnection",K0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class W0{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Ca?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=su(),l=this.Go(e,n.toUriEncodedString());Y(gc,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,s,i);const{host:u}=new URL(l),d=Zn(u);return this.jo(e,l,c,r,d).then((p=>(Y(gc,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Ar(gc,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p}))}Jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Gs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,n){const r=K0[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="WebChannelConnection";class J0 extends W0{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const o=su();return new Promise(((l,c)=>{const u=new e_;u.setWithCredentials(!0),u.listenOnce(t_.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case sa.NO_ERROR:const p=u.getResponseJson();Y(_t,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case sa.TIMEOUT:Y(_t,`RPC '${e}' ${o} timed out`),c(new X(F.DEADLINE_EXCEEDED,"Request time out"));break;case sa.HTTP_ERROR:const g=u.getStatus();if(Y(_t,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const k=y==null?void 0:y.error;if(k&&k.status&&k.message){const O=(function(B){const N=B.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(N)>=0?N:F.UNKNOWN})(k.status);c(new X(O,k.message))}else c(new X(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new X(F.UNAVAILABLE,"Connection failed."));break;default:ae(9055,{c_:e,streamId:o,l_:u.getLastErrorCode(),h_:u.getLastError()})}}finally{Y(_t,`RPC '${e}' ${o} completed.`)}}));const d=JSON.stringify(s);Y(_t,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",d,r,15)}))}P_(e,n,r){const s=su(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=s_(),l=r_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");Y(_t,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);this.T_(p);let g=!1,y=!1;const k=new Q0({Ho:V=>{y?Y(_t,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(g||(Y(_t,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),Y(_t,`RPC '${e}' stream ${s} sending:`,V),p.send(V))},Yo:()=>p.close()}),O=(V,B,N)=>{V.listen(B,(L=>{try{N(L)}catch(H){setTimeout((()=>{throw H}),0)}}))};return O(p,vi.EventType.OPEN,(()=>{y||(Y(_t,`RPC '${e}' stream ${s} transport opened.`),k.s_())})),O(p,vi.EventType.CLOSE,(()=>{y||(y=!0,Y(_t,`RPC '${e}' stream ${s} transport closed`),k.__(),this.I_(p))})),O(p,vi.EventType.ERROR,(V=>{y||(y=!0,Ar(_t,`RPC '${e}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),k.__(new X(F.UNAVAILABLE,"The operation could not be completed")))})),O(p,vi.EventType.MESSAGE,(V=>{var B;if(!y){const N=V.data[0];Pe(!!N,16349);const L=N,H=(L==null?void 0:L.error)||((B=L[0])===null||B===void 0?void 0:B.error);if(H){Y(_t,`RPC '${e}' stream ${s} received error:`,H);const le=H.status;let ge=(function(T){const b=Ze[T];if(b!==void 0)return B_(b)})(le),A=H.message;ge===void 0&&(ge=F.INTERNAL,A="Unknown error status: "+le+" with message "+H.message),y=!0,k.__(new X(ge,A)),p.close()}else Y(_t,`RPC '${e}' stream ${s} received:`,N),k.a_(N)}})),O(l,n_.STAT_EVENT,(V=>{V.stat===Gc.PROXY?Y(_t,`RPC '${e}' stream ${s} detected buffering proxy`):V.stat===Gc.NOPROXY&&Y(_t,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{k.o_()}),0),k}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((n=>n===e))}}function mc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(t){return new e0(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&Y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp="PersistentStream";class ty{constructor(e,n,r,s,i,o,l,c){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new ey(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Qn(n.toString()),Qn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===n&&this.W_(r,s)}),(r=>{e((()=>{const s=new X(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return Y(gp,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget((()=>this.b_===e?n():(Y(gp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class X0 extends ty{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=r0(this.serializer,e),r=(function(i){if(!("targetChange"in i))return ce.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ce.min():o.readTime?bn(o.readTime):ce.min()})(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=nu(this.serializer),n.addTarget=(function(i,o){let l;const c=o.target;if(l=Jc(c)?{documents:o0(i,c)}:{query:a0(i,c).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=q_(i,o.resumeToken);const u=Zc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(ce.min())>0){l.readTime=Da(i,o.snapshotVersion.toTimestamp());const u=Zc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l})(this.serializer,e);const r=c0(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=nu(this.serializer),n.removeTarget=e,this.k_(n)}}class Y0 extends ty{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return Pe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Pe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Pe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=i0(e.writeResults,e.commitTime),r=bn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=nu(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>s0(this.serializer,r)))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{}class eS extends Z0{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new X(F.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,eu(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(F.UNKNOWN,i.toString())}))}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Jo(e,eu(n,r),s,o,l,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X(F.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class tS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Qn(n),this._a=!1):Y("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr="RemoteStore";class nS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((o=>{r.enqueueAndForget((async()=>{as(this)&&(Y(Zr,"Restarting streams for network reachability change."),await(async function(c){const u=pe(c);u.Ia.add(4),await _o(u),u.Aa.set("Unknown"),u.Ia.delete(4),await Il(u)})(this))}))})),this.Aa=new tS(r,s)}}async function Il(t){if(as(t))for(const e of t.da)await e(!0)}async function _o(t){for(const e of t.da)await e(!1)}function ny(t,e){const n=pe(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),nh(n)?th(n):Qs(n).x_()&&eh(n,e))}function Zu(t,e){const n=pe(t),r=Qs(n);n.Ta.delete(e),r.x_()&&ry(n,e),n.Ta.size===0&&(r.x_()?r.B_():as(n)&&n.Aa.set("Unknown"))}function eh(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Qs(t).H_(e)}function ry(t,e){t.Ra.$e(e),Qs(t).Y_(e)}function th(t){t.Ra=new JR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Qs(t).start(),t.Aa.aa()}function nh(t){return as(t)&&!Qs(t).M_()&&t.Ta.size>0}function as(t){return pe(t).Ia.size===0}function sy(t){t.Ra=void 0}async function rS(t){t.Aa.set("Online")}async function sS(t){t.Ta.forEach(((e,n)=>{eh(t,e)}))}async function iS(t,e){sy(t),nh(t)?(t.Aa.la(e),th(t)):t.Aa.set("Unknown")}async function oS(t,e,n){if(t.Aa.set("Online"),e instanceof $_&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ta.delete(l),s.Ra.removeTarget(l))})(t,e)}catch(r){Y(Zr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xa(t,r)}else if(e instanceof la?t.Ra.Ye(e):e instanceof j_?t.Ra.it(e):t.Ra.et(e),!n.isEqual(ce.min()))try{const r=await Z_(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const l=i.Ra.Pt(o);return l.targetChanges.forEach(((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.Ta.get(u);d&&i.Ta.set(u,d.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,u)=>{const d=i.Ta.get(c);if(!d)return;i.Ta.set(c,d.withResumeToken(ft.EMPTY_BYTE_STRING,d.snapshotVersion)),ry(i,c);const p=new pr(d.target,c,u,d.sequenceNumber);eh(i,p)})),i.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(r){Y(Zr,"Failed to raise snapshot:",r),await xa(t,r)}}async function xa(t,e,n){if(!Ks(e))throw e;t.Ia.add(1),await _o(t),t.Aa.set("Offline"),n||(n=()=>Z_(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Y(Zr,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Il(t)}))}function iy(t,e){return e().catch((n=>xa(t,n,e)))}async function Al(t){const e=pe(t),n=Cr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Fu;for(;aS(e);)try{const s=await $0(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,lS(e,s)}catch(s){await xa(e,s)}oy(e)&&ay(e)}function aS(t){return as(t)&&t.Pa.length<10}function lS(t,e){t.Pa.push(e);const n=Cr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function oy(t){return as(t)&&!Cr(t).M_()&&t.Pa.length>0}function ay(t){Cr(t).start()}async function cS(t){Cr(t).na()}async function uS(t){const e=Cr(t);for(const n of t.Pa)e.X_(n.mutations)}async function hS(t,e,n){const r=t.Pa.shift(),s=zu.from(r,e,n);await iy(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Al(t)}async function dS(t,e){e&&Cr(t).Z_&&await(async function(r,s){if((function(o){return WR(o)&&o!==F.ABORTED})(s.code)){const i=r.Pa.shift();Cr(r).N_(),await iy(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Al(r)}})(t,e),oy(t)&&ay(t)}async function mp(t,e){const n=pe(t);n.asyncQueue.verifyOperationInProgress(),Y(Zr,"RemoteStore received new credentials");const r=as(n);n.Ia.add(3),await _o(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Il(n)}async function fS(t,e){const n=pe(t);e?(n.Ia.delete(2),await Il(n)):e||(n.Ia.add(2),await _o(n),n.Aa.set("Unknown"))}function Qs(t){return t.Va||(t.Va=(function(n,r,s){const i=pe(n);return i.ia(),new X0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:rS.bind(null,t),e_:sS.bind(null,t),n_:iS.bind(null,t),J_:oS.bind(null,t)}),t.da.push((async e=>{e?(t.Va.N_(),nh(t)?th(t):t.Aa.set("Unknown")):(await t.Va.stop(),sy(t))}))),t.Va}function Cr(t){return t.ma||(t.ma=(function(n,r,s){const i=pe(n);return i.ia(),new Y0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:cS.bind(null,t),n_:dS.bind(null,t),ea:uS.bind(null,t),ta:hS.bind(null,t)}),t.da.push((async e=>{e?(t.ma.N_(),await Al(t)):(await t.ma.stop(),t.Pa.length>0&&(Y(Zr,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))}))),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Er,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new rh(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sh(t,e){if(Qn("AsyncQueue",`${e}: ${t}`),Ks(t))return new X(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{static emptySet(e){return new Is(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ne.comparator(n.key,r.key):(n,r)=>ne.comparator(n.key,r.key),this.keyedMap=Ei(),this.sortedSet=new qe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Is)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Is;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(){this.fa=new qe(ne.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):ae(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Us{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((l=>{o.push({type:0,doc:l})})),new Us(e,n,Is.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_l(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class gS{constructor(){this.queries=yp(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=pe(n),i=s.queries;s.queries=yp(),i.forEach(((o,l)=>{for(const c of l.wa)c.onError(r)}))})(this,new X(F.ABORTED,"Firestore shutting down"))}}function yp(){return new is((t=>P_(t)),_l)}async function mS(t,e){const n=pe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new pS,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=sh(o,`Initialization of query '${ys(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&ih(n)}async function _S(t,e){const n=pe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function yS(t,e){const n=pe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.wa)l.Ca(s)&&(r=!0);o.ya=s}}r&&ih(n)}function vS(t,e,n){const r=pe(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function ih(t){t.Da.forEach((e=>{e.next()}))}var iu,vp;(vp=iu||(iu={})).Fa="default",vp.Cache="cache";class ES{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Us(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=Us.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==iu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e){this.key=e}}class cy{constructor(e){this.key=e}}class TS{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Te(),this.mutatedKeys=Te(),this.Xa=C_(e),this.eu=new Is(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new _p,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((d,p)=>{const g=s.get(d),y=yl(this.query,p)?p:null,k=!!g&&this.mutatedKeys.has(g.key),O=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let V=!1;g&&y?g.data.isEqual(y.data)?k!==O&&(r.track({type:3,doc:y}),V=!0):this.iu(g,y)||(r.track({type:2,doc:y}),V=!0,(c&&this.Xa(y,c)>0||u&&this.Xa(y,u)<0)&&(l=!0)):!g&&y?(r.track({type:0,doc:y}),V=!0):g&&!y&&(r.track({type:1,doc:g}),V=!0,(c||u)&&(l=!0)),V&&(y?(o=o.add(y),i=O?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{eu:o,ru:r,Ds:l,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort(((d,p)=>(function(y,k){const O=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae(20277,{At:V})}};return O(y)-O(k)})(d.type,p.type)||this.Xa(d.doc,p.doc))),this.su(r),s=s!=null&&s;const l=n&&!s?this.ou():[],c=this.Za.size===0&&this.current&&!s?1:0,u=c!==this.Ya;return this.Ya=c,o.length!==0||u?{snapshot:new Us(this.query,e.eu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new _p,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((n=>this.Ha=this.Ha.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ha=this.Ha.delete(n))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Te(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const n=[];return e.forEach((r=>{this.Za.has(r)||n.push(new cy(r))})),this.Za.forEach((r=>{e.has(r)||n.push(new ly(r))})),n}uu(e){this.Ha=e.qs,this.Za=Te();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return Us.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const oh="SyncEngine";class wS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class IS{constructor(e){this.key=e,this.lu=!1}}class AS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new is((l=>P_(l)),_l),this.Tu=new Map,this.Iu=new Set,this.du=new qe(ne.comparator),this.Eu=new Map,this.Au=new Qu,this.Ru={},this.Vu=new Map,this.mu=Ls.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function bS(t,e,n=!0){const r=gy(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await uy(r,e,n,!0),s}async function RS(t,e){const n=gy(t);await uy(n,e,!0,!1)}async function uy(t,e,n,r){const s=await q0(t.localStore,In(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await SS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&ny(t.remoteStore,s),l}async function SS(t,e,n,r,s){t.gu=(p,g,y)=>(async function(O,V,B,N){let L=V.view.nu(B);L.Ds&&(L=await hp(O.localStore,V.query,!1).then((({documents:A})=>V.view.nu(A,L))));const H=N&&N.targetChanges.get(V.targetId),le=N&&N.targetMismatches.get(V.targetId)!=null,ge=V.view.applyChanges(L,O.isPrimaryClient,H,le);return Tp(O,V.targetId,ge._u),ge.snapshot})(t,p,g,y);const i=await hp(t.localStore,e,!0),o=new TS(e,i.qs),l=o.nu(i.documents),c=mo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);Tp(t,n,u._u);const d=new wS(e,n,o);return t.Pu.set(e,d),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),u.snapshot}async function PS(t,e,n){const r=pe(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((o=>!_l(o,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ru(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Zu(r.remoteStore,s.targetId),ou(r,s.targetId)})).catch(zs)):(ou(r,s.targetId),await ru(r.localStore,s.targetId,!0))}async function CS(t,e){const n=pe(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Zu(n.remoteStore,r.targetId))}async function kS(t,e,n){const r=LS(t);try{const s=await(function(o,l){const c=pe(o),u=Fe.now(),d=l.reduce(((y,k)=>y.add(k.key)),Te());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",(y=>{let k=Jn(),O=Te();return c.Os.getEntries(y,d).next((V=>{k=V,k.forEach(((B,N)=>{N.isValidDocument()||(O=O.add(B))}))})).next((()=>c.localDocuments.getOverlayedDocuments(y,k))).next((V=>{p=V;const B=[];for(const N of l){const L=qR(N,p.get(N.key).overlayedDocument);L!=null&&B.push(new os(N.key,L,v_(L.value.mapValue),An.exists(!0)))}return c.mutationQueue.addMutationBatch(y,u,B,l)})).next((V=>{g=V;const B=V.applyToLocalDocumentSet(p,O);return c.documentOverlayCache.saveOverlays(y,V.batchId,B)}))})).then((()=>({batchId:g.batchId,changes:N_(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,l,c){let u=o.Ru[o.currentUser.toKey()];u||(u=new qe(_e)),u=u.insert(l,c),o.Ru[o.currentUser.toKey()]=u})(r,s.batchId,n),await yo(r,s.changes),await Al(r.remoteStore)}catch(s){const i=sh(s,"Failed to persist write");n.reject(i)}}async function hy(t,e){const n=pe(t);try{const r=await B0(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Eu.get(i);o&&(Pe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?Pe(o.lu,14607):s.removedDocuments.size>0&&(Pe(o.lu,42227),o.lu=!1))})),await yo(n,r,e)}catch(r){await zs(r)}}function Ep(t,e,n){const r=pe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach(((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(o,l){const c=pe(o);c.onlineState=l;let u=!1;c.queries.forEach(((d,p)=>{for(const g of p.wa)g.va(l)&&(u=!0)})),u&&ih(c)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function NS(t,e,n){const r=pe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new qe(ne.comparator);o=o.insert(i,Et.newNoDocument(i,ce.min()));const l=Te().add(i),c=new Tl(ce.min(),new Map,new qe(_e),o,l);await hy(r,c),r.du=r.du.remove(i),r.Eu.delete(e),ah(r)}else await ru(r.localStore,e,!1).then((()=>ou(r,e,n))).catch(zs)}async function OS(t,e){const n=pe(t),r=e.batch.batchId;try{const s=await F0(n.localStore,e);fy(n,r,null),dy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await yo(n,s)}catch(s){await zs(s)}}async function DS(t,e,n){const r=pe(t);try{const s=await(function(o,l){const c=pe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next((p=>(Pe(p!==null,37113),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d))).next((()=>c.localDocuments.getDocuments(u,d)))}))})(r.localStore,e);fy(r,e,n),dy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await yo(r,s)}catch(s){await zs(s)}}function dy(t,e){(t.Vu.get(e)||[]).forEach((n=>{n.resolve()})),t.Vu.delete(e)}function fy(t,e,n){const r=pe(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function ou(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach((r=>{t.Au.containsKey(r)||py(t,r)}))}function py(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Zu(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),ah(t))}function Tp(t,e,n){for(const r of n)r instanceof ly?(t.Au.addReference(r.key,e),VS(t,r)):r instanceof cy?(Y(oh,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||py(t,r.key)):ae(19791,{yu:r})}function VS(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(Y(oh,"New document in limbo: "+n),t.Iu.add(r),ah(t))}function ah(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new ne(Me.fromString(e)),r=t.mu.next();t.Eu.set(r,new IS(n)),t.du=t.du.insert(n,r),ny(t.remoteStore,new pr(In(R_(n.path)),r,"TargetPurposeLimboResolution",pl.ue))}}async function yo(t,e,n){const r=pe(t),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach(((l,c)=>{o.push(r.gu(c,e,n).then((u=>{var d;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Xu.Es(c.targetId,u);i.push(p)}})))})),await Promise.all(o),r.hu.J_(s),await(async function(c,u){const d=pe(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>$.forEach(u,(g=>$.forEach(g.Is,(y=>d.persistence.referenceDelegate.addReference(p,g.targetId,y))).next((()=>$.forEach(g.ds,(y=>d.persistence.referenceDelegate.removeReference(p,g.targetId,y)))))))))}catch(p){if(!Ks(p))throw p;Y(Yu,"Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const y=d.Fs.get(g),k=y.snapshotVersion,O=y.withLastLimboFreeSnapshotVersion(k);d.Fs=d.Fs.insert(g,O)}}})(r.localStore,i))}async function xS(t,e){const n=pe(t);if(!n.currentUser.isEqual(e)){Y(oh,"User change. New user:",e.toKey());const r=await Y_(n.localStore,e);n.currentUser=e,(function(i,o){i.Vu.forEach((l=>{l.forEach((c=>{c.reject(new X(F.CANCELLED,o))}))})),i.Vu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await yo(n,r.Bs)}}function MS(t,e){const n=pe(t),r=n.Eu.get(e);if(r&&r.lu)return Te().add(r.key);{let s=Te();const i=n.Tu.get(e);if(!i)return s;for(const o of i){const l=n.Pu.get(o);s=s.unionWith(l.view.tu)}return s}}function gy(t){const e=pe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=hy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=MS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=NS.bind(null,e),e.hu.J_=yS.bind(null,e.eventManager),e.hu.pu=vS.bind(null,e.eventManager),e}function LS(t){const e=pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=OS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=DS.bind(null,e),e}class Ma{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=wl(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return U0(this.persistence,new x0,e.initialUser,this.serializer)}Du(e){return new X_(Ju.Vi,this.serializer)}bu(e){return new G0}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ma.provider={build:()=>new Ma};class US extends Ma{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){Pe(this.persistence.referenceDelegate instanceof Va,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new E0(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?Vt.withCacheSize(this.cacheSizeBytes):Vt.DEFAULT;return new X_((r=>Va.Vi(r,n)),this.serializer)}}class au{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ep(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xS.bind(null,this.syncEngine),await fS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new gS})()}createDatastore(e){const n=wl(e.databaseInfo.databaseId),r=(function(i){return new J0(i)})(e.databaseInfo);return(function(i,o,l,c){return new eS(i,o,l,c)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,l){return new nS(r,s,i,o,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>Ep(this.syncEngine,n,0)),(function(){return pp.C()?new pp:new z0})())}createSyncEngine(e,n){return(function(s,i,o,l,c,u,d){const p=new AS(s,i,o,l,c,u);return d&&(p.fu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=pe(s);Y(Zr,"RemoteStore shutting down."),i.Ia.add(5),await _o(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}au.provider={build:()=>new au};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Qn("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr="FirestoreClient";class BS{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=yt.UNAUTHENTICATED,this.clientId=Uu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{Y(kr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(Y(kr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Er;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=sh(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function _c(t,e){t.asyncQueue.verifyOperationInProgress(),Y(kr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Y_(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Ar("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then((()=>{Y("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Ar("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),t._offlineComponents=e}async function wp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await jS(t);Y(kr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>mp(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>mp(e.remoteStore,s))),t._onlineComponents=e}async function jS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y(kr,"Using user provided OfflineComponentProvider");try{await _c(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Ar("Error using user provided cache. Falling back to memory cache: "+n),await _c(t,new Ma)}}else Y(kr,"Using default OfflineComponentProvider"),await _c(t,new US(void 0));return t._offlineComponents}async function my(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y(kr,"Using user provided OnlineComponentProvider"),await wp(t,t._uninitializedComponentsProvider._online)):(Y(kr,"Using default OnlineComponentProvider"),await wp(t,new au))),t._onlineComponents}function $S(t){return my(t).then((e=>e.syncEngine))}async function qS(t){const e=await my(t),n=e.eventManager;return n.onListen=bS.bind(null,e.syncEngine),n.onUnlisten=PS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=RS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=CS.bind(null,e.syncEngine),n}function HS(t,e,n={}){const r=new Er;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,u){const d=new FS({next:g=>{d.Ou(),o.enqueueAndForget((()=>_S(i,p))),g.fromCache&&c.source==="server"?u.reject(new X(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new ES(l,d,{includeMetadataChanges:!0,ka:!0});return mS(i,p)})(await qS(t),t.asyncQueue,e,n,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy="firestore.googleapis.com",Ap=!0;class bp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new X(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=yy,this.ssl=Ap}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Ap;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=J_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<y0)throw new X(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_y((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new X(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new X(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new X(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class bl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Kb;switch(r.type){case"firstParty":return new Xb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Ip.get(n);r&&(Y("ComponentProvider","Removing Datastore"),Ip.delete(n),r.terminate())})(this),Promise.resolve()}}function GS(t,e,n,r={}){var s;t=Ji(t,bl);const i=Zn(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(cl(`https://${c}`),ul("Firestore",!0)),o.host!==yy&&o.host!==c&&Ar("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:r});if(!Xr(u,l)&&(t._setSettings(u),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=yt.MOCK_USER;else{d=zm(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new X(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new yt(g)}t._authCredentials=new Wb(new o_(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ls(this.firestore,e,this._query)}}class ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}toJSON(){return{type:ot._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(po(n,ot._jsonSchema))return new ot(e,r||null,new ne(Me.fromString(n.referencePath)))}}ot._jsonSchemaVersion="firestore/documentReference/1.0",ot._jsonSchema={type:tt("string",ot._jsonSchemaVersion),referencePath:tt("string")};class Tr extends ls{constructor(e,n,r){super(e,n,R_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new ne(e))}withConverter(e){return new Tr(this.firestore,e,this._path)}}function lu(t,e,...n){if(t=$e(t),l_("collection","path",e),t instanceof bl){const r=Me.fromString(e,...n);return Uf(r),new Tr(t,null,r)}{if(!(t instanceof ot||t instanceof Tr))throw new X(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return Uf(r),new Tr(t.firestore,null,r)}}function vy(t,e,...n){if(t=$e(t),arguments.length===1&&(e=Uu.newId()),l_("doc","path",e),t instanceof bl){const r=Me.fromString(e,...n);return Lf(r),new ot(t,null,new ne(r))}{if(!(t instanceof ot||t instanceof Tr))throw new X(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return Lf(r),new ot(t.firestore,t instanceof Tr?t.converter:null,new ne(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp="AsyncQueue";class Sp{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new ey(this,"async_queue_retry"),this.oc=()=>{const r=mc();r&&Y(Rp,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=mc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=mc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const n=new Er;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Ks(e))throw e;Y(Rp,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const n=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Qn("INTERNAL UNHANDLED ERROR: ",Pp(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=rh.createAndSchedule(this,e,n,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&ae(47125,{hc:Pp(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Pp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Rl extends bl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Sp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Sp(e),this._firestoreClient=void 0,await e}}}function zS(t,e){const n=typeof t=="object"?t:dl(),r=typeof t=="string"?t:Ca,s=fo(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=xu("firestore");i&&GS(s,...i)}return s}function Ey(t){if(t._terminated)throw new X(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||KS(t),t._firestoreClient}function KS(t){var e,n,r;const s=t._freezeSettings(),i=(function(l,c,u,d){return new fR(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,_y(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new BS(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&(function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jt(ft.fromBase64String(e))}catch(n){throw new X(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Jt(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Jt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(po(e,Jt._jsonSchema))return Jt.fromBase64String(e.bytes)}}Jt._jsonSchemaVersion="firestore/bytes/1.0",Jt._jsonSchema={type:tt("string",Jt._jsonSchemaVersion),bytes:tt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Rn._jsonSchemaVersion}}static fromJSON(e){if(po(e,Rn._jsonSchema))return new Rn(e.latitude,e.longitude)}}Rn._jsonSchemaVersion="firestore/geoPoint/1.0",Rn._jsonSchema={type:tt("string",Rn._jsonSchemaVersion),latitude:tt("number"),longitude:tt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Sn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(po(e,Sn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Sn(e.vectorValues);throw new X(F.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Sn._jsonSchemaVersion="firestore/vectorValue/1.0",Sn._jsonSchema={type:tt("string",Sn._jsonSchemaVersion),vectorValues:tt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS=/^__.*__$/;class QS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new os(e,this.data,this.fieldMask,n,this.fieldTransforms):new go(e,this.data,n,this.fieldTransforms)}}function Ty(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae(40011,{Ec:t})}}class uh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new uh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return La(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Ty(this.Ec)&&WS.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class JS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||wl(e)}Dc(e,n,r,s=!1){return new uh({Ec:e,methodName:n,bc:r,path:ht.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wy(t){const e=t._freezeSettings(),n=wl(t._databaseId);return new JS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function XS(t,e,n,r,s,i={}){const o=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);by("Data must be an object, but it was:",o,r);const l=Iy(r,o);let c,u;if(i.merge)c=new rn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=ZS(e,p,n);if(!o.contains(g))throw new X(F.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);tP(d,g)||d.push(g)}c=new rn(d),u=o.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,u=o.fieldTransforms;return new QS(new Qt(l),c,u)}class hh extends ch{_toFieldTransform(e){return new FR(e.path,new no)}isEqual(e){return e instanceof hh}}function YS(t,e,n,r=!1){return dh(n,t.Dc(r?4:3,e))}function dh(t,e){if(Ay(t=$e(t)))return by("Unsupported field value:",e,t),Iy(t,e);if(t instanceof ch)return(function(r,s){if(!Ty(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const l of r){let c=dh(l,s.yc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=$e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return MR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Fe.fromDate(r);return{timestampValue:Da(s.serializer,i)}}if(r instanceof Fe){const i=new Fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Da(s.serializer,i)}}if(r instanceof Rn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Jt)return{bytesValue:q_(s.serializer,r._byteString)};if(r instanceof ot){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Wu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Sn)return(function(o,l){return{mapValue:{fields:{[__]:{stringValue:y_},[ka]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw l.wc("VectorValues must only contain numeric values.");return Hu(l.serializer,u)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${fl(r)}`)})(t,e)}function Iy(t,e){const n={};return h_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ss(t,((r,s)=>{const i=dh(s,e.Vc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function Ay(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof Rn||t instanceof Jt||t instanceof ot||t instanceof ch||t instanceof Sn)}function by(t,e,n){if(!Ay(n)||!c_(n)){const r=fl(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function ZS(t,e,n){if((e=$e(e))instanceof lh)return e._internalPath;if(typeof e=="string")return Ry(t,e);throw La("Field path arguments must be of type string or ",t,!1,void 0,n)}const eP=new RegExp("[~\\*/\\[\\]]");function Ry(t,e,n){if(e.search(eP)>=0)throw La(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new lh(...e.split("."))._internalPath}catch{throw La(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function La(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new X(F.INVALID_ARGUMENT,l+t+c)}function tP(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(fh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class nP extends Sy{data(){return super.data()}}function fh(t,e){return typeof e=="string"?Ry(t,e):e instanceof lh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ph{}class Py extends ph{}function Cy(t,e,...n){let r=[];e instanceof ph&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((c=>c instanceof mh)).length,l=i.filter((c=>c instanceof gh)).length;if(o>1||o>0&&l>0)throw new X(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class gh extends Py{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new gh(e,n,r)}_apply(e){const n=this._parse(e);return Ny(e._query,n),new ls(e.firestore,e.converter,Xc(e._query,n))}_parse(e){const n=wy(e.firestore);return(function(i,o,l,c,u,d,p){let g;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new X(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){kp(p,d);const k=[];for(const O of p)k.push(Cp(c,i,O));g={arrayValue:{values:k}}}else g=Cp(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||kp(p,d),g=YS(l,o,p,d==="in"||d==="not-in");return et.create(u,d,g)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class mh extends ph{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new mh(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:hn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)Ny(o,c),o=Xc(o,c)})(e._query,n),new ls(e.firestore,e.converter,Xc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class _h extends Py{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new _h(e,n)}_apply(e){const n=(function(s,i,o){if(s.startAt!==null)throw new X(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new X(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new to(i,o)})(e._query,this._field,this._direction);return new ls(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new Ws(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,n))}}function ky(t,e="asc"){const n=e,r=fh("orderBy",t);return _h._create(r,n)}function Cp(t,e,n){if(typeof(n=$e(n))=="string"){if(n==="")throw new X(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!S_(e)&&n.indexOf("/")!==-1)throw new X(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Me.fromString(n));if(!ne.isDocumentKey(r))throw new X(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zf(t,new ne(r))}if(n instanceof ot)return zf(t,n._key);throw new X(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fl(n)}.`)}function kp(t,e){if(!Array.isArray(t)||t.length===0)throw new X(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ny(t,e){const n=(function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new X(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new X(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class sP{convertValue(e,n="none"){switch(Pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Sr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ae(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ss(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[ka].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((o=>Je(o.doubleValue)));return new Sn(i)}convertGeoPoint(e){return new Rn(Je(e.latitude),Je(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ml(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Yi(e));default:return null}}convertTimestamp(e){const n=Rr(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Me.fromString(e);Pe(Q_(r),9688,{name:e});const s=new Zi(r.get(1),r.get(3)),i=new ne(r.popFirst(5));return s.isEqual(n)||Qn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iP(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Qo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class As extends Sy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ca(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(fh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new X(F.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=As._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}As._jsonSchemaVersion="firestore/documentSnapshot/1.0",As._jsonSchema={type:tt("string",As._jsonSchemaVersion),bundleSource:tt("string","DocumentSnapshot"),bundleName:tt("string"),bundle:tt("string")};class ca extends As{data(e={}){return super.data(e)}}class bs{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Qo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new ca(this._firestore,this._userDataWriter,r.key,r,new Qo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((l=>{const c=new ca(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Qo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new ca(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Qo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:oP(l.type),doc:c,oldIndex:u,newIndex:d}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new X(F.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=bs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Uu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function oP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae(61501,{type:t})}}bs._jsonSchemaVersion="firestore/querySnapshot/1.0",bs._jsonSchema={type:tt("string",bs._jsonSchemaVersion),bundleSource:tt("string","QuerySnapshot"),bundleName:tt("string"),bundle:tt("string")};class aP extends sP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,n)}}function Oy(t){t=Ji(t,ls);const e=Ji(t.firestore,Rl),n=Ey(e),r=new aP(e);return rP(t._query),HS(n,t._query).then((s=>new bs(e,r,t,s)))}function lP(t){return Dy(Ji(t.firestore,Rl),[new Gu(t._key,An.none())])}function cP(t,e){const n=Ji(t.firestore,Rl),r=vy(t),s=iP(t.converter,e);return Dy(n,[XS(wy(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,An.exists(!1))]).then((()=>r))}function Dy(t,e){return(function(r,s){const i=new Er;return r.asyncQueue.enqueueAndForget((async()=>kS(await $S(r),s,i))),i.promise})(Ey(t),e)}function uP(){return new hh("serverTimestamp")}(function(e,n=!0){(function(s){Gs=s})(rs),Vn(new un("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Rl(new Qb(r.getProvider("auth-internal")),new Yb(o,r.getProvider("app-check-internal")),(function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new X(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zi(u.options.projectId,d)})(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),Ht(Of,Df,e),Ht(Of,Df,"esm2017")})();var hP="firebase",dP="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ht(hP,dP,"app");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP=new Map,pP={activated:!1,tokenObservers:[]};function dn(t){return fP.get(t)||Object.assign({},pP)}const Np={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:960*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(e,n,r,s,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Fc,this.pending.promise.catch(n=>{}),await mP(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Fc,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function mP(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},Ua=new Hs("appCheck","AppCheck",_P);function Vy(t){if(!dn(t).activated)throw Ua.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP="firebase-app-check-database",vP=1,cu="firebase-app-check-store";let Jo=null;function EP(){return Jo||(Jo=new Promise((t,e)=>{try{const n=indexedDB.open(yP,vP);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;e(Ua.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(cu,{keyPath:"compositeKey"})}}}catch(n){e(Ua.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Jo)}function TP(t,e){return wP(IP(t),e)}async function wP(t,e){const r=(await EP()).transaction(cu,"readwrite"),i=r.objectStore(cu).put({compositeKey:t,value:e});return new Promise((o,l)=>{i.onsuccess=c=>{o()},r.onerror=c=>{var u;l(Ua.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}function IP(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=new hl("@firebase/app-check");function Op(t,e){return Km()?TP(t,e).catch(n=>{uu.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP={error:"UNKNOWN_ERROR"};function bP(t){return Vu.encodeString(JSON.stringify(t),!1)}async function hu(t,e=!1,n=!1){const r=t.app;Vy(r);const s=dn(r);let i=s.token,o;if(i&&!wi(i)&&(s.token=void 0,i=void 0),!i){const u=await s.cachedTokenPromise;u&&(wi(u)?i=u:await Op(r,void 0))}if(!e&&i&&wi(i))return{token:i.token};let l=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),l=!0),i=await dn(r).exchangeTokenPromise}catch(u){u.code==="appCheck/throttled"||u.code==="appCheck/initial-throttle"?uu.warn(u.message):n&&uu.error(u),o=u}let c;return i?o?wi(i)?c={token:i.token,internalError:o}:c=Vp(o):(c={token:i.token},s.token=i,await Op(r,i)):c=Vp(o),l&&CP(r,c),c}async function RP(t){const e=t.app;Vy(e);const{provider:n}=dn(e);{const{token:r}=await n.getToken();return{token:r}}}function SP(t,e,n,r){const{app:s}=t,i=dn(s),o={next:n,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&wi(i.token)){const l=i.token;Promise.resolve().then(()=>{n({token:l.token}),Dp(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>Dp(t))}function xy(t,e){const n=dn(t),r=n.tokenObservers.filter(s=>s.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function Dp(t){const{app:e}=t,n=dn(e);let r=n.tokenRefresher;r||(r=PP(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function PP(t){const{app:e}=t;return new gP(async()=>{const n=dn(e);let r;if(n.token?r=await hu(t,!0):r=await hu(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=dn(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-300*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},Np.RETRIAL_MIN_WAIT,Np.RETRIAL_MAX_WAIT)}function CP(t,e){const n=dn(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function wi(t){return t.expireTimeMillis-Date.now()>0}function Vp(t){return{token:bP(AP),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=dn(this.app);for(const n of e)xy(this.app,n.next);return Promise.resolve()}}function NP(t,e){return new kP(t,e)}function OP(t){return{getToken:e=>hu(t,e),getLimitedUseToken:()=>RP(t),addTokenListener:e=>SP(t,"INTERNAL",e),removeTokenListener:e=>xy(t.app,e)}}const DP="@firebase/app-check",VP="0.10.1",xP="app-check",xp="app-check-internal";function MP(){Vn(new un(xP,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return NP(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(xp).initialize()})),Vn(new un(xp,t=>{const e=t.getProvider("app-check").getImmediate();return OP(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Ht(DP,VP)}MP();function yh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function My(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const LP=My,Ly=new Hs("auth","Firebase",My());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=new hl("@firebase/auth");function UP(t,...e){Fa.logLevel<=Ee.WARN&&Fa.warn(`Auth (${rs}): ${t}`,...e)}function ua(t,...e){Fa.logLevel<=Ee.ERROR&&Fa.error(`Auth (${rs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,...e){throw vh(t,...e)}function Pn(t,...e){return vh(t,...e)}function Uy(t,e,n){const r=Object.assign(Object.assign({},LP()),{[e]:n});return new Hs("auth","Firebase",r).create(e,{appName:t.name})}function wr(t){return Uy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function vh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ly.create(t,...e)}function oe(t,e,...n){if(!t)throw vh(e,...n)}function Gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ua(e),new Error(e)}function Xn(t,e){t||Gn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function FP(){return Mp()==="http:"||Mp()==="https:"}function Mp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FP()||SA()||"connection"in navigator)?navigator.onLine:!0}function jP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xn(n>e,"Short delay should be less than long delay!"),this.isMobile=AA()||PA()}get(){return BP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(t,e){Xn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],HP=new vo(3e4,6e4);function cs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Or(t,e,n,r,s={}){return By(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=ho(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return RA()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Zn(t.emulatorConfig.host)&&(u.credentials="include"),Fy.fetch()(await jy(t,t.config.apiHost,n,l),u)})}async function By(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},$P),e);try{const s=new zP(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Xo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Xo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Xo(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Uy(t,d,u);fn(t,d)}}catch(s){if(s instanceof pn)throw s;fn(t,"network-request-failed",{message:String(s)})}}async function Sl(t,e,n,r,s={}){const i=await Or(t,e,n,r,s);return"mfaPendingCredential"in i&&fn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function jy(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Eh(t.config,s):`${t.config.apiScheme}://${s}`;return qP.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function GP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Pn(this.auth,"network-request-failed")),HP.get())})}}function Xo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Pn(t,e,r);return s.customData._tokenResponse=n,s}function Lp(t){return t!==void 0&&t.enterprise!==void 0}class KP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return GP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function WP(t,e){return Or(t,"GET","/v2/recaptchaConfig",cs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QP(t,e){return Or(t,"POST","/v1/accounts:delete",e)}async function Ba(t,e){return Or(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function JP(t,e=!1){const n=$e(t),r=await n.getIdToken(e),s=Th(r);oe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Mi(yc(s.auth_time)),issuedAtTime:Mi(yc(s.iat)),expirationTime:Mi(yc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function yc(t){return Number(t)*1e3}function Th(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ua("JWT malformed, contained fewer than 3 sections"),null;try{const s=$m(n);return s?JSON.parse(s):(ua("Failed to decode base64 JWT payload"),null)}catch(s){return ua("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Up(t){const e=Th(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function io(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof pn&&XP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function XP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mi(this.lastLoginAt),this.creationTime=Mi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ja(t){var e;const n=t.auth,r=await t.getIdToken(),s=await io(t,Ba(n,{idToken:r}));oe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?$y(i.providerUserInfo):[],l=eC(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new fu(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function ZP(t){const e=$e(t);await ja(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function $y(t){return t.map(e=>{var{providerId:n}=e,r=yh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tC(t,e){const n=await By(t,{},async()=>{const r=ho({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await jy(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&Zn(t.emulatorConfig.host)&&(c.credentials="include"),Fy.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function nC(t,e){return Or(t,"POST","/v2/accounts:revokeToken",cs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Up(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const n=Up(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await tC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Rs;return r&&(oe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(oe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(oe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rs,this.toJSON())}_performRefresh(){return Gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class sn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=yh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new YP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new fu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await io(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return JP(this,e)}reload(){return ZP(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new sn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ja(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Bt(this.auth.app))return Promise.reject(wr(this.auth));const e=await this.getIdToken();return await io(this,QP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,k=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(l=n.tenantId)!==null&&l!==void 0?l:void 0,V=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,B=(u=n.createdAt)!==null&&u!==void 0?u:void 0,N=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:L,emailVerified:H,isAnonymous:le,providerData:ge,stsTokenManager:A}=n;oe(L&&A,e,"internal-error");const v=Rs.fromJSON(this.name,A);oe(typeof L=="string",e,"internal-error"),sr(p,e.name),sr(g,e.name),oe(typeof H=="boolean",e,"internal-error"),oe(typeof le=="boolean",e,"internal-error"),sr(y,e.name),sr(k,e.name),sr(O,e.name),sr(V,e.name),sr(B,e.name),sr(N,e.name);const T=new sn({uid:L,auth:e,email:g,emailVerified:H,displayName:p,isAnonymous:le,photoURL:k,phoneNumber:y,tenantId:O,stsTokenManager:v,createdAt:B,lastLoginAt:N});return ge&&Array.isArray(ge)&&(T.providerData=ge.map(b=>Object.assign({},b))),V&&(T._redirectEventId=V),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new Rs;s.updateFromServerResponse(n);const i=new sn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ja(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];oe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?$y(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Rs;l.updateFromIdToken(r);const c=new sn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new fu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp=new Map;function zn(t){Xn(t instanceof Function,"Expected a class definition");let e=Fp.get(t);return e?(Xn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Fp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qy.type="NONE";const Bp=qy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(t,e,n){return`firebase:${t}:${e}:${n}`}class Ss{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ha(this.userKey,s.apiKey,i),this.fullPersistenceKey=ha("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ba(this.auth,{idToken:e}).catch(()=>{});return n?sn._fromGetAccountInfoResponse(this.auth,n,e):null}return sn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ss(zn(Bp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||zn(Bp);const o=ha(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){let p;if(typeof d=="string"){const g=await Ba(e,{idToken:d}).catch(()=>{});if(!g)break;p=await sn._fromGetAccountInfoResponse(e,g,d)}else p=sn._fromJSON(e,d);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ss(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ss(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ky(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qy(e))return"Blackberry";if(Jy(e))return"Webos";if(Gy(e))return"Safari";if((e.includes("chrome/")||zy(e))&&!e.includes("edge/"))return"Chrome";if(Wy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Hy(t=It()){return/firefox\//i.test(t)}function Gy(t=It()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zy(t=It()){return/crios\//i.test(t)}function Ky(t=It()){return/iemobile/i.test(t)}function Wy(t=It()){return/android/i.test(t)}function Qy(t=It()){return/blackberry/i.test(t)}function Jy(t=It()){return/webos/i.test(t)}function wh(t=It()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rC(t=It()){var e;return wh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sC(){return CA()&&document.documentMode===10}function Xy(t=It()){return wh(t)||Wy(t)||Jy(t)||Qy(t)||/windows phone/i.test(t)||Ky(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(t,e=[]){let n;switch(t){case"Browser":n=jp(It());break;case"Worker":n=`${jp(It())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${rs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oC(t,e={}){return Or(t,"GET","/v2/passwordPolicy",cs(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC=6;class lC{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:aC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $p(this),this.idTokenSubscription=new $p(this),this.beforeStateQueue=new iC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ly,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Ss.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ba(this,{idToken:e}),r=await sn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Bt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ja(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Bt(this.app))return Promise.reject(wr(this));const n=e?$e(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Bt(this.app)?Promise.reject(wr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Bt(this.app)?Promise.reject(wr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await oC(this),n=new lC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Hs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await nC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zn(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await Ss.create(this,[zn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Bt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&UP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Js(t){return $e(t)}class $p{constructor(e){this.auth=e,this.observer=null,this.addObserver=MA(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uC(t){Pl=t}function Zy(t){return Pl.loadJS(t)}function hC(){return Pl.recaptchaEnterpriseScript}function dC(){return Pl.gapiScript}function fC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class pC{constructor(){this.enterprise=new gC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class gC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const mC="recaptcha-enterprise",ev="NO_RECAPTCHA";class _C{constructor(e){this.type=mC,this.auth=Js(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{WP(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new KP(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Lp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(ev)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new pC().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Lp(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=hC();c.length!==0&&(c+=l),Zy(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function qp(t,e,n,r=!1,s=!1){const i=new _C(t);let o;if(s)o=ev;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Hp(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await qp(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await qp(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(t,e){const n=fo(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Xr(i,e??{}))return s;fn(s,"already-initialized")}return n.initialize({options:e})}function vC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(zn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function EC(t,e,n){const r=Js(t);oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=tv(e),{host:o,port:l}=TC(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){oe(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),oe(Xr(u,r.config.emulator)&&Xr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Zn(o)?(cl(`${i}//${o}${c}`),ul("Auth",!0)):wC()}function tv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function TC(t){const e=tv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Gp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Gp(o)}}}function Gp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Gn("not implemented")}_getIdTokenResponse(e){return Gn("not implemented")}_linkToIdToken(e,n){return Gn("not implemented")}_getReauthenticationResolver(e){return Gn("not implemented")}}async function IC(t,e){return Or(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AC(t,e){return Sl(t,"POST","/v1/accounts:signInWithPassword",cs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bC(t,e){return Sl(t,"POST","/v1/accounts:signInWithEmailLink",cs(t,e))}async function RC(t,e){return Sl(t,"POST","/v1/accounts:signInWithEmailLink",cs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo extends Ih{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new oo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new oo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hp(e,n,"signInWithPassword",AC);case"emailLink":return bC(e,{email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hp(e,r,"signUpPassword",IC);case"emailLink":return RC(e,{idToken:n,email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ps(t,e){return Sl(t,"POST","/v1/accounts:signInWithIdp",cs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC="http://localhost";class es extends Ih{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new es(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=yh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new es(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ps(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ps(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ps(e,n)}buildRequest(){const e={requestUri:SC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ho(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function CC(t){const e=_i(yi(t)).link,n=e?_i(yi(e)).deep_link_id:null,r=_i(yi(t)).deep_link_id;return(r?_i(yi(r)).link:null)||r||n||e||t}class Ah{constructor(e){var n,r,s,i,o,l;const c=_i(yi(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=PC((s=c.mode)!==null&&s!==void 0?s:null);oe(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=CC(e);try{return new Ah(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(){this.providerId=Xs.PROVIDER_ID}static credential(e,n){return oo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ah.parseLink(n);return oe(r,"argument-error"),oo._fromEmailAndCode(e,r.code,r.tenantId)}}Xs.PROVIDER_ID="password";Xs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo extends nv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends Eo{constructor(){super("facebook.com")}static credential(e){return es._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";cr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends Eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return es._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ur.credential(n,r)}catch{return null}}}ur.GOOGLE_SIGN_IN_METHOD="google.com";ur.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends Eo{constructor(){super("github.com")}static credential(e){return es._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.GITHUB_SIGN_IN_METHOD="github.com";hr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Eo{constructor(){super("twitter.com")}static credential(e,n){return es._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.TWITTER_SIGN_IN_METHOD="twitter.com";dr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await sn._fromIdTokenResponse(e,r,s),o=zp(r);return new Fs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=zp(r);return new Fs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function zp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a extends pn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,$a.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new $a(e,n,r,s)}}function rv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?$a._fromErrorAndOperation(t,i,e,r):i})}async function kC(t,e,n=!1){const r=await io(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Fs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NC(t,e,n=!1){const{auth:r}=t;if(Bt(r.app))return Promise.reject(wr(r));const s="reauthenticate";try{const i=await io(t,rv(r,s,e,t),n);oe(i.idToken,r,"internal-error");const o=Th(i.idToken);oe(o,r,"internal-error");const{sub:l}=o;return oe(t.uid===l,r,"user-mismatch"),Fs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&fn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sv(t,e,n=!1){if(Bt(t.app))return Promise.reject(wr(t));const r="signIn",s=await rv(t,r,e),i=await Fs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function OC(t,e){return sv(Js(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DC(t){const e=Js(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function VC(t,e,n){return Bt(t.app)?Promise.reject(wr(t)):OC($e(t),Xs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&DC(t),r})}function xC(t,e,n,r){return $e(t).onIdTokenChanged(e,n,r)}function MC(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}function LC(t,e,n,r){return $e(t).onAuthStateChanged(e,n,r)}function UC(t){return $e(t).signOut()}const qa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qa,"1"),this.storage.removeItem(qa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC=1e3,BC=10;class ov extends iv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Xy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);sC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,BC):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},FC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ov.type="LOCAL";const jC=ov;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av extends iv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}av.type="SESSION";const lv=av;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Cl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await $C(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=bh("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(){return window}function HC(t){Cn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv(){return typeof Cn().WorkerGlobalScope<"u"&&typeof Cn().importScripts=="function"}async function GC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function KC(){return cv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv="firebaseLocalStorageDb",WC=1,Ha="firebaseLocalStorage",hv="fbase_key";class To{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kl(t,e){return t.transaction([Ha],e?"readwrite":"readonly").objectStore(Ha)}function QC(){const t=indexedDB.deleteDatabase(uv);return new To(t).toPromise()}function pu(){const t=indexedDB.open(uv,WC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ha,{keyPath:hv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ha)?e(r):(r.close(),await QC(),e(await pu()))})})}async function Kp(t,e,n){const r=kl(t,!0).put({[hv]:e,value:n});return new To(r).toPromise()}async function JC(t,e){const n=kl(t,!1).get(e),r=await new To(n).toPromise();return r===void 0?null:r.value}function Wp(t,e){const n=kl(t,!0).delete(e);return new To(n).toPromise()}const XC=800,YC=3;class dv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>YC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cl._getInstance(KC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await GC(),!this.activeServiceWorker)return;this.sender=new qC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pu();return await Kp(e,qa,"1"),await Wp(e,qa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>JC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=kl(s,!1).getAll();return new To(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dv.type="LOCAL";const ZC=dv;new vo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(t,e){return e?zn(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh extends Ih{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function t1(t){return sv(t.auth,new Rh(t),t.bypassAuthState)}function n1(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),NC(n,new Rh(t),t.bypassAuthState)}async function r1(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),kC(n,new Rh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return t1;case"linkViaPopup":case"linkViaRedirect":return r1;case"reauthViaPopup":case"reauthViaRedirect":return n1;default:fn(this.auth,"internal-error")}}resolve(e){Xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1=new vo(2e3,1e4);class Ts extends fv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ts.currentPopupAction&&Ts.currentPopupAction.cancel(),Ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){Xn(this.filter.length===1,"Popup operations only handle one event");const e=bh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,s1.get())};e()}}Ts.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1="pendingRedirect",da=new Map;class o1 extends fv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=da.get(this.auth._key());if(!e){try{const r=await a1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}da.set(this.auth._key(),e)}return this.bypassAuthState||da.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function a1(t,e){const n=u1(e),r=c1(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function l1(t,e){da.set(t._key(),e)}function c1(t){return zn(t._redirectPersistence)}function u1(t){return ha(i1,t.config.apiKey,t.name)}async function h1(t,e,n=!1){if(Bt(t.app))return Promise.reject(wr(t));const r=Js(t),s=e1(r,e),o=await new o1(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1=600*1e3;class f1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!p1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!pv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=d1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qp(e))}saveEventToCache(e){this.cachedEventUids.add(Qp(e)),this.lastProcessedEventTime=Date.now()}}function Qp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function p1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g1(t,e={}){return Or(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_1=/^https?/;async function y1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await g1(t);for(const n of e)try{if(v1(n))return}catch{}fn(t,"unauthorized-domain")}function v1(t){const e=du(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!_1.test(n))return!1;if(m1.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1=new vo(3e4,6e4);function Jp(){const t=Cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function T1(t){return new Promise((e,n)=>{var r,s,i;function o(){Jp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jp(),n(Pn(t,"network-request-failed"))},timeout:E1.get()})}if(!((s=(r=Cn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Cn().gapi)===null||i===void 0)&&i.load)o();else{const l=fC("iframefcb");return Cn()[l]=()=>{gapi.load?o():n(Pn(t,"network-request-failed"))},Zy(`${dC()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw fa=null,e})}let fa=null;function w1(t){return fa=fa||T1(t),fa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1=new vo(5e3,15e3),A1="__/auth/iframe",b1="emulator/auth/iframe",R1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},S1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function P1(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Eh(e,b1):`https://${t.config.authDomain}/${A1}`,r={apiKey:e.apiKey,appName:t.name,v:rs},s=S1.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ho(r).slice(1)}`}async function C1(t){const e=await w1(t),n=Cn().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:P1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:R1,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Pn(t,"network-request-failed"),l=Cn().setTimeout(()=>{i(o)},I1.get());function c(){Cn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},N1=500,O1=600,D1="_blank",V1="http://localhost";class Xp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function x1(t,e,n,r=N1,s=O1){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},k1),{width:r.toString(),height:s.toString(),top:i,left:o}),u=It().toLowerCase();n&&(l=zy(u)?D1:n),Hy(u)&&(e=e||V1,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[y,k])=>`${g}${y}=${k},`,"");if(rC(u)&&l!=="_self")return M1(e||"",l),new Xp(null);const p=window.open(e||"",l,d);oe(p,t,"popup-blocked");try{p.focus()}catch{}return new Xp(p)}function M1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1="__/auth/handler",U1="emulator/auth/handler",F1=encodeURIComponent("fac");async function Yp(t,e,n,r,s,i){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:rs,eventId:s};if(e instanceof nv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",xA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Eo){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${F1}=${encodeURIComponent(c)}`:"";return`${B1(t)}?${ho(l).slice(1)}${u}`}function B1({config:t}){return t.emulator?Eh(t,U1):`https://${t.authDomain}/${L1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc="webStorageSupport";class j1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lv,this._completeRedirectFn=h1,this._overrideRedirectResult=l1}async _openPopup(e,n,r,s){var i;Xn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Yp(e,n,r,du(),s);return x1(e,o,bh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Yp(e,n,r,du(),s);return HC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Xn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await C1(e),r=new f1(e);return n.register("authEvent",s=>(oe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vc,{type:vc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[vc];o!==void 0&&n(!!o),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=y1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Xy()||Gy()||wh()}}const $1=j1;var Zp="@firebase/auth",eg="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function G1(t){Vn(new un("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;oe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yy(t)},u=new cC(r,s,i,c);return vC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vn(new un("auth-internal",e=>{const n=Js(e.getProvider("auth").getImmediate());return(r=>new q1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ht(Zp,eg,H1(t)),Ht(Zp,eg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1=300,K1=Gm("authIdTokenMaxAge")||z1;let tg=null;const W1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>K1)return;const s=n==null?void 0:n.token;tg!==s&&(tg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Q1(t=dl()){const e=fo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=yC(t,{popupRedirectResolver:$1,persistence:[ZC,jC,lv]}),r=Gm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=W1(i.toString());MC(n,o,()=>o(n.currentUser)),xC(n,l=>o(l))}}const s=qm("auth");return s&&EC(n,`http://${s}`),n}function J1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}uC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Pn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",J1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});G1("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv="firebasestorage.googleapis.com",mv="storageBucket",X1=120*1e3,Y1=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends pn{constructor(e,n,r=0){super(Ec(e),`Firebase Storage: ${n} (${Ec(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Qe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ec(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var We;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(We||(We={}));function Ec(t){return"storage/"+t}function Sh(){const t="An unknown error occurred, please check the error payload for server response.";return new Qe(We.UNKNOWN,t)}function Z1(t){return new Qe(We.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function ek(t){return new Qe(We.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function tk(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Qe(We.UNAUTHENTICATED,t)}function nk(){return new Qe(We.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function rk(t){return new Qe(We.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function sk(){return new Qe(We.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ik(){return new Qe(We.CANCELED,"User canceled the upload/download.")}function ok(t){return new Qe(We.INVALID_URL,"Invalid URL '"+t+"'.")}function ak(t){return new Qe(We.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function lk(){return new Qe(We.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+mv+"' property when initializing the app?")}function ck(){return new Qe(We.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function uk(){return new Qe(We.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function hk(t){return new Qe(We.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function gu(t){return new Qe(We.INVALID_ARGUMENT,t)}function _v(){return new Qe(We.APP_DELETED,"The Firebase app was deleted.")}function dk(t){return new Qe(We.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Li(t,e){return new Qe(We.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function pi(t){throw new Qe(We.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=qt.makeFromUrl(e,n)}catch{return new qt(e,"")}if(r.path==="")return r;throw ak(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(H){H.path.charAt(H.path.length-1)==="/"&&(H.path_=H.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(H){H.path_=decodeURIComponent(H.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",y=new RegExp(`^https?://${p}/${d}/b/${s}/o${g}`,"i"),k={bucket:1,path:3},O=n===gv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,V="([^?#]*)",B=new RegExp(`^https?://${O}/${s}/${V}`,"i"),L=[{regex:l,indices:c,postModify:i},{regex:y,indices:k,postModify:u},{regex:B,indices:{bucket:1,path:2},postModify:u}];for(let H=0;H<L.length;H++){const le=L[H],ge=le.regex.exec(e);if(ge){const A=ge[le.indices.bucket];let v=ge[le.indices.path];v||(v=""),r=new qt(A,v),le.postModify(r);break}}if(r==null)throw ok(e);return r}}class fk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pk(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function d(...V){u||(u=!0,e.apply(null,V))}function p(V){s=setTimeout(()=>{s=null,t(y,c())},V)}function g(){i&&clearTimeout(i)}function y(V,...B){if(u){g();return}if(V){g(),d.call(null,V,...B);return}if(c()||o){g(),d.call(null,V,...B);return}r<64&&(r*=2);let L;l===1?(l=2,L=0):L=(r+Math.random())*1e3,p(L)}let k=!1;function O(V){k||(k=!0,g(),!u&&(s!==null?(V||(l=2),clearTimeout(s),p(0)):V||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,O(!0)},n),O}function gk(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(t){return t!==void 0}function _k(t){return typeof t=="object"&&!Array.isArray(t)}function Ph(t){return typeof t=="string"||t instanceof String}function ng(t){return Ch()&&t instanceof Blob}function Ch(){return typeof Blob<"u"}function rg(t,e,n,r){if(r<e)throw gu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw gu(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function yv(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Jr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Jr||(Jr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yk(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e,n,r,s,i,o,l,c,u,d,p,g=!0,y=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=p,this.retry=g,this.isUsingEmulator=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,O)=>{this.resolve_=k,this.reject_=O,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Yo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Jr.NO_ERROR,c=i.getStatus();if(!l||yk(c,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===Jr.ABORT;r(!1,new Yo(!1,null,d));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new Yo(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());mk(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=Sh();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?_v():ik();o(c)}else{const c=sk();o(c)}};this.canceled_?n(!1,new Yo(!1,null,!0)):this.backoffId_=pk(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&gk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Yo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Ek(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Tk(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function wk(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Ik(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Ak(t,e,n,r,s,i,o=!0,l=!1){const c=yv(t.urlParams),u=t.url+c,d=Object.assign({},t.headers);return wk(d,e),Ek(d,n),Tk(d,i),Ik(d,r),new vk(u,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bk(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Rk(...t){const e=bk();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Ch())return new Blob(t);throw new Qe(We.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Sk(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(t){if(typeof atob>"u")throw hk("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Tc{constructor(e,n){this.data=e,this.contentType=n||null}}function Ck(t,e){switch(t){case Tn.RAW:return new Tc(vv(e));case Tn.BASE64:case Tn.BASE64URL:return new Tc(Ev(t,e));case Tn.DATA_URL:return new Tc(Nk(e),Ok(e))}throw Sh()}function vv(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function kk(t){let e;try{e=decodeURIComponent(t)}catch{throw Li(Tn.DATA_URL,"Malformed data URL.")}return vv(e)}function Ev(t,e){switch(t){case Tn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Li(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Tn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Li(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Pk(e)}catch(s){throw s.message.includes("polyfill")?s:Li(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Tv{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Li(Tn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Dk(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Nk(t){const e=new Tv(t);return e.base64?Ev(Tn.BASE64,e.rest):kk(e.rest)}function Ok(t){return new Tv(t).contentType}function Dk(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n){let r=0,s="";ng(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(ng(this.data_)){const r=this.data_,s=Sk(r,e,n);return s===null?null:new fr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new fr(r,!0)}}static getBlob(...e){if(Ch()){const n=e.map(r=>r instanceof fr?r.data_:r);return new fr(Rk.apply(null,n))}else{const n=e.map(o=>Ph(o)?Ck(Tn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new fr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(t){let e;try{e=JSON.parse(t)}catch{return null}return _k(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vk(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function xk(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Iv(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(t,e){return e}class Rt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||Mk}}let Zo=null;function Lk(t){return!Ph(t)||t.length<2?t:Iv(t)}function Av(){if(Zo)return Zo;const t=[];t.push(new Rt("bucket")),t.push(new Rt("generation")),t.push(new Rt("metageneration")),t.push(new Rt("name","fullPath",!0));function e(i,o){return Lk(o)}const n=new Rt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Rt("size");return s.xform=r,t.push(s),t.push(new Rt("timeCreated")),t.push(new Rt("updated")),t.push(new Rt("md5Hash",null,!0)),t.push(new Rt("cacheControl",null,!0)),t.push(new Rt("contentDisposition",null,!0)),t.push(new Rt("contentEncoding",null,!0)),t.push(new Rt("contentLanguage",null,!0)),t.push(new Rt("contentType",null,!0)),t.push(new Rt("metadata","customMetadata",!0)),Zo=t,Zo}function Uk(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new qt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Fk(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return Uk(r,t),r}function bv(t,e,n){const r=wv(e);return r===null?null:Fk(t,r,n)}function Bk(t,e,n,r){const s=wv(e);if(s===null||!Ph(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const d=t.bucket,p=t.fullPath,g="/b/"+o(d)+"/o/"+o(p),y=Nl(g,n,r),k=yv({alt:"media",token:u});return y+k})[0]}function jk(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class kh{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(t){if(!t)throw Sh()}function $k(t,e){function n(r,s){const i=bv(t,s,e);return Rv(i!==null),i}return n}function qk(t,e){function n(r,s){const i=bv(t,s,e);return Rv(i!==null),Bk(i,s,t.host,t._protocol)}return n}function Sv(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=nk():s=tk():n.getStatus()===402?s=ek(t.bucket):n.getStatus()===403?s=rk(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Pv(t){const e=Sv(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=Z1(t.path)),i.serverResponse=s.serverResponse,i}return n}function Hk(t,e,n){const r=e.fullServerUrl(),s=Nl(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new kh(s,i,qk(t,n),o);return l.errorHandler=Pv(e),l}function Gk(t,e){const n=e.fullServerUrl(),r=Nl(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(c,u){}const l=new kh(r,s,o,i);return l.successCodes=[200,204],l.errorHandler=Pv(e),l}function zk(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Kk(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=zk(null,e)),r}function Wk(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let L="";for(let H=0;H<2;H++)L=L+Math.random().toString().slice(2);return L}const c=l();o["Content-Type"]="multipart/related; boundary="+c;const u=Kk(e,r,s),d=jk(u,n),p="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,g=`\r
--`+c+"--",y=fr.getBlob(p,r,g);if(y===null)throw ck();const k={name:u.fullPath},O=Nl(i,t.host,t._protocol),V="POST",B=t.maxUploadRetryTime,N=new kh(O,V,$k(t,n),B);return N.urlParams=k,N.headers=o,N.body=y.uploadData(),N.errorHandler=Sv(e),N}class Qk{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Jr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Jr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Jr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw pi("cannot .send() more than once");if(Zn(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw pi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw pi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw pi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw pi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Jk extends Qk{initXhr(){this.xhr_.responseType="text"}}function Nh(){return new Jk}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,n){this._service=e,n instanceof qt?this._location=n:this._location=qt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ts(e,n)}get root(){const e=new qt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Iv(this._location.path)}get storage(){return this._service}get parent(){const e=Vk(this._location.path);if(e===null)return null;const n=new qt(this._location.bucket,e);return new ts(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw dk(e)}}function Xk(t,e,n){t._throwIfRoot("uploadBytes");const r=Wk(t.storage,t._location,Av(),new fr(e,!0),n);return t.storage.makeRequestWithTokens(r,Nh).then(s=>({metadata:s,ref:t}))}function Yk(t){t._throwIfRoot("getDownloadURL");const e=Hk(t.storage,t._location,Av());return t.storage.makeRequestWithTokens(e,Nh).then(n=>{if(n===null)throw uk();return n})}function Zk(t){t._throwIfRoot("deleteObject");const e=Gk(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Nh)}function eN(t,e){const n=xk(t._location.path,e),r=new qt(t._location.bucket,n);return new ts(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tN(t){return/^[A-Za-z]+:\/\//.test(t)}function nN(t,e){return new ts(t,e)}function Cv(t,e){if(t instanceof Oh){const n=t;if(n._bucket==null)throw lk();const r=new ts(n,n._bucket);return e!=null?Cv(r,e):r}else return e!==void 0?eN(t,e):t}function rN(t,e){if(e&&tN(e)){if(t instanceof Oh)return nN(t,e);throw gu("To use ref(service, url), the first argument must be a Storage instance.")}else return Cv(t,e)}function sg(t,e){const n=e==null?void 0:e[mv];return n==null?null:qt.makeFromBucketSpec(n,t)}function sN(t,e,n,r={}){t.host=`${e}:${n}`;const s=Zn(e);s&&(cl(`https://${t.host}/b`),ul("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:zm(i,t.app.options.projectId))}class Oh{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=gv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=X1,this._maxUploadRetryTime=Y1,this._requests=new Set,s!=null?this._bucket=qt.makeFromBucketSpec(s,this._host):this._bucket=sg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=qt.makeFromBucketSpec(this._url,e):this._bucket=sg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){rg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){rg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Bt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ts(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new fk(_v());{const o=Ak(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const ig="@firebase/storage",og="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv="storage";function iN(t,e,n){return t=$e(t),Xk(t,e,n)}function oN(t){return t=$e(t),Yk(t)}function aN(t){return t=$e(t),Zk(t)}function ag(t,e){return t=$e(t),rN(t,e)}function lN(t=dl(),e){t=$e(t);const r=fo(t,kv).getImmediate({identifier:e}),s=xu("storage");return s&&cN(r,...s),r}function cN(t,e,n,r={}){sN(t,e,n,r)}function uN(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Oh(n,r,s,e,rs)}function hN(){Vn(new un(kv,uN,"PUBLIC").setMultipleInstances(!0)),Ht(ig,og,""),Ht(ig,og,"esm2017")}hN();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dN="type.googleapis.com/google.protobuf.Int64Value",fN="type.googleapis.com/google.protobuf.UInt64Value";function Nv(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function Ga(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>Ga(e));if(typeof t=="function"||typeof t=="object")return Nv(t,e=>Ga(e));throw new Error("Data cannot be encoded in JSON: "+t)}function Bs(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case dN:case fN:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>Bs(e)):typeof t=="function"||typeof t=="object"?Nv(t,e=>Bs(e)):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class xt extends pn{constructor(e,n,r){super(`${Dh}/${e}`,n||""),this.details=r,Object.setPrototypeOf(this,xt.prototype)}}function pN(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function za(t,e){let n=pN(t),r=n,s;try{const i=e&&e.error;if(i){const o=i.status;if(typeof o=="string"){if(!lg[o])return new xt("internal","internal");n=lg[o],r=o}const l=i.message;typeof l=="string"&&(r=l),s=i.details,s!==void 0&&(s=Bs(s))}}catch{}return n==="ok"?null:new xt(n,r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(e,n,r,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,Bt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||n.get().then(i=>this.auth=i,()=>{}),this.messaging||r.get().then(i=>this.messaging=i,()=>{}),this.appCheck||s==null||s.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:s}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu="us-central1",mN=/^data: (.*?)(?:\n|$)/;function _N(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new xt("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class yN{constructor(e,n,r,s,i=mu,o=(...l)=>fetch(...l)){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new gN(e,n,r,s),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(i);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=mu}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function vN(t,e,n){const r=Zn(e);t.emulatorOrigin=`http${r?"s":""}://${e}:${n}`,r&&(cl(t.emulatorOrigin),ul("Functions",!0))}function EN(t,e,n){const r=s=>wN(t,e,s,{});return r.stream=(s,i)=>AN(t,e,s,i),r}async function TN(t,e,n,r){n["Content-Type"]="application/json";let s;try{s=await r(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let i=null;try{i=await s.json()}catch{}return{status:s.status,json:i}}async function Ov(t,e){const n={},r=await t.contextProvider.getContext(e.limitedUseAppCheckTokens);return r.authToken&&(n.Authorization="Bearer "+r.authToken),r.messagingToken&&(n["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(n["X-Firebase-AppCheck"]=r.appCheckToken),n}function wN(t,e,n,r){const s=t._url(e);return IN(t,s,n,r)}async function IN(t,e,n,r){n=Ga(n);const s={data:n},i=await Ov(t,r),o=r.timeout||7e4,l=_N(o),c=await Promise.race([TN(e,s,i,t.fetchImpl),l.promise,t.cancelAllRequests]);if(l.cancel(),!c)throw new xt("cancelled","Firebase Functions instance was deleted.");const u=za(c.status,c.json);if(u)throw u;if(!c.json)throw new xt("internal","Response is not valid JSON object.");let d=c.json.data;if(typeof d>"u"&&(d=c.json.result),typeof d>"u")throw new xt("internal","Response is missing data field.");return{data:Bs(d)}}function AN(t,e,n,r){const s=t._url(e);return bN(t,s,n,r||{})}async function bN(t,e,n,r){var s;n=Ga(n);const i={data:n},o=await Ov(t,r);o["Content-Type"]="application/json",o.Accept="text/event-stream";let l;try{l=await t.fetchImpl(e,{method:"POST",body:JSON.stringify(i),headers:o,signal:r==null?void 0:r.signal})}catch(y){if(y instanceof Error&&y.name==="AbortError"){const O=new xt("cancelled","Request was cancelled.");return{data:Promise.reject(O),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(O)}}}}}}const k=za(0,null);return{data:Promise.reject(k),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(k)}}}}}}let c,u;const d=new Promise((y,k)=>{c=y,u=k});(s=r==null?void 0:r.signal)===null||s===void 0||s.addEventListener("abort",()=>{const y=new xt("cancelled","Request was cancelled.");u(y)});const p=l.body.getReader(),g=RN(p,c,u,r==null?void 0:r.signal);return{stream:{[Symbol.asyncIterator](){const y=g.getReader();return{async next(){const{value:k,done:O}=await y.read();return{value:k,done:O}},async return(){return await y.cancel(),{done:!0,value:void 0}}}}},data:d}}function RN(t,e,n,r){const s=(o,l)=>{const c=o.match(mN);if(!c)return;const u=c[1];try{const d=JSON.parse(u);if("result"in d){e(Bs(d.result));return}if("message"in d){l.enqueue(Bs(d.message));return}if("error"in d){const p=za(0,d);l.error(p),n(p);return}}catch(d){if(d instanceof xt){l.error(d),n(d);return}}},i=new TextDecoder;return new ReadableStream({start(o){let l="";return c();async function c(){if(r!=null&&r.aborted){const u=new xt("cancelled","Request was cancelled");return o.error(u),n(u),Promise.resolve()}try{const{value:u,done:d}=await t.read();if(d){l.trim()&&s(l.trim(),o),o.close();return}if(r!=null&&r.aborted){const g=new xt("cancelled","Request was cancelled");o.error(g),n(g),await t.cancel();return}l+=i.decode(u,{stream:!0});const p=l.split(`
`);l=p.pop()||"";for(const g of p)g.trim()&&s(g.trim(),o);return c()}catch(u){const d=u instanceof xt?u:za(0,null);o.error(d),n(d)}}},cancel(){return t.cancel()}})}const cg="@firebase/functions",ug="0.12.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN="auth-internal",PN="app-check-internal",CN="messaging-internal";function kN(t){const e=(n,{instanceIdentifier:r})=>{const s=n.getProvider("app").getImmediate(),i=n.getProvider(SN),o=n.getProvider(CN),l=n.getProvider(PN);return new yN(s,i,o,l,r)};Vn(new un(Dh,e,"PUBLIC").setMultipleInstances(!0)),Ht(cg,ug,t),Ht(cg,ug,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NN(t=dl(),e=mu){const r=fo($e(t),Dh).getImmediate({identifier:e}),s=xu("functions");return s&&ON(r,...s),r}function ON(t,e,n){vN($e(t),e,n)}function DN(t,e,n){return EN($e(t),e)}kN();const pa={apiKey:"AIzaSyAEJhyrN6BAdA3w1u0wuQGPj0LVQH-7eqs",authDomain:"kopten-bw-323f7.firebaseapp.com",projectId:"kopten-bw-323f7",storageBucket:"kopten-bw-323f7.firebasestorage.app",messagingSenderId:"722544059410",appId:"1:722544059410:web:48f9bb9b5339824366a4cb"},js=!!(pa.apiKey&&pa.projectId&&pa.appId),Nr=js?Jm(pa):null,wc=Nr?Q1(Nr):null,Ui=Nr?zS(Nr):null,hg=Nr?lN(Nr):null,dg=Nr?NN(Nr,"europe-west3"):null,VN={class:"wrap section"},xN={key:0,class:"notice"},MN={key:1,class:"notice"},LN={class:"gallery-grid"},UN=["src","alt"],FN={__name:"GalleryView",setup(t){const e=rt([]),n=rt(!0),r=rt(""),s=[{title:"ST. MARKUS",file:"st-markus.jpg",src:"/images/gallery/st-markus.jpg",ratio:"4:3",size:"1200 × 900 px",caption:"Kirche St. Markus"},{title:"ST. GEORG",file:"st-georg-interior.jpg",src:"/images/churches/st-georg-interior.jpg",ratio:"4:3",size:"1200 × 900 px",caption:"Kirche St. Georg"},{title:"ST. MICHAEL · ULM",file:"st-michael-ulm.jpg",src:"/images/churches/st-michael-ulm.jpg",ratio:"4:3",size:"1200 × 900 px",caption:"Kirche St. Michael in Ulm"},{title:"ST. MINA · TUTTLINGEN",file:"st-mina-tuttlingen.jpg",src:"/images/churches/st-mina-tuttlingen.jpg",ratio:"4:3",size:"1200 × 900 px",caption:"St. Mina und Abraam"},{title:"GEMEINDEFEST",file:"gemeindefest.jpg",src:"/images/gallery/gemeindefest.jpg",ratio:"4:3",size:"1200 × 900 px",caption:"Gemeindefest"},{title:"OSTERN",file:"ostern.jpg",src:"/images/gallery/ostern.jpg",ratio:"4:3",size:"1200 × 900 px",caption:"Osterfeier"}];return qs(async()=>{try{if(js&&Ui){const i=Cy(lu(Ui,"gallery"),ky("createdAt","desc"));e.value=(await Oy(i)).docs.map(o=>({id:o.id,...o.data()}))}}catch{r.value="Die Online-Galerie ist momentan nicht erreichbar. Die Bild-Platzhalter bleiben sichtbar."}finally{n.value=!1}}),(i,o)=>(ke(),Oe(ze,null,[o[0]||(o[0]=w("section",{class:"page-hero"},[w("div",{class:"wrap"},[w("span",{class:"eyebrow light"},"EINBLICKE & ERINNERUNGEN"),w("h1",null,[de("Unsere "),w("em",null,"Galerie")]),w("p",null,"Bilder aus unserem Gemeindeleben, unserer Tradition und unseren gemeinsamen Festen."),w("div",{class:"image-note"},[de("Hintergrund später: "),w("b",null,"hero-gemeinde.jpg"),de(" · Ratio 16:9 · 2400 × 1350 px")])])],-1)),w("section",VN,[n.value?(ke(),Oe("div",xN,"Galerie wird geladen …")):r.value?(ke(),Oe("div",MN,xe(r.value),1)):Ns("",!0),w("div",LN,[(ke(!0),Oe(ze,null,qi(e.value,l=>(ke(),Oe("figure",{key:l.id},[w("img",{src:l.url,alt:l.title||"Einblick in das Gemeindeleben",loading:"lazy"},null,8,UN),w("figcaption",null,xe(l.title||"Aus unserem Gemeindeleben"),1)]))),128)),(ke(),Oe(ze,null,qi(s,l=>w("figure",{key:l.file,class:"gallery-placeholder"},[me(ar,{src:l.src,title:l.caption,ratio:l.ratio,size:l.size},null,8,["src","title","ratio","size"]),w("figcaption",null,xe(l.caption)+" · "+xe(l.file),1)])),64))])])],64))}},BN={class:"wrap section reveal"},jN={class:"event-list"},$N={class:"event-main"},qN={class:"event-time"},HN=["href"],GN={class:"calendar-section section reveal"},zN={class:"wrap"},KN={class:"calendar-grid"},WN={class:"feast-info"},QN={class:"feast-date"},JN={class:"wrap section reveal"},XN={class:"info-panel"},YN={__name:"EventsView",setup(t){Bm();const e=[{city:"Stuttgart",church:"St. Georg Koptisch-Orthodoxe Kirche",address:"Wurmlinger Str. 49, 70597 Stuttgart",day:"Jeden Sonntag",time:"09:30 Uhr",map:"https://maps.google.com/?q=Wurmlinger+Strasse+49+70597+Stuttgart"},{city:"Ulm",church:"St. Michael – zu Gast in der Kreuzkirche",address:"Abt-Ulrich-Str. 2, 89079 Ulm",day:"Jeder 4. Samstag im Monat",time:"09:30 Uhr",map:"https://maps.google.com/?q=Abt-Ulrich-Str+2+Ulm"},{city:"Tuttlingen",church:"St. Mina und Abraam Koptisch-Orthodoxe Kirche",address:"Kolonie Str. 21, 78532 Tuttlingen",day:"Jeder 2. Samstag im Monat",time:"09:30 Uhr",map:"https://maps.google.com/?q=Kolonie+Strasse+21+Tuttlingen"}],n=[{date:"7. Januar",title:"Geburt Christi",file:"geburt-christi.jpg",note:"Weihnachten nach dem koptischen Kalender"},{date:"19. Januar",title:"Taufe Christi",file:"taufe-christi.jpg",note:"Epiphanie / Theophanie"},{date:"Februar–April",title:"Große Fastenzeit",file:"fastenzeit.jpg",note:"Zeit der Vorbereitung auf Pascha"},{date:"5. April",title:"Palmsonntag",file:"einzug-jerusalem.jpg",note:"Einzug Christi in Jerusalem"},{date:"10. April",title:"Karfreitag",file:"kreuzigung.jpg",note:"Kreuzigung Christi"},{date:"12. April",title:"Auferstehung Christi",file:"auferstehung.jpg",note:"Pascha / Ostern 2026"},{date:"19. April",title:"Thomas-Sonntag",file:"thomas-sonntag.jpg",note:"Der Apostel Thomas begegnet dem Auferstandenen"},{date:"21. Mai",title:"Christi Himmelfahrt",file:"himmelfahrt.jpg",note:"Himmelfahrt des Herrn"},{date:"31. Mai",title:"Pfingsten",file:"pfingsten.jpg",note:"Herabkunft des Heiligen Geistes"},{date:"12. Juli",title:"Petrus und Paulus",file:"apostel-petrus-paulus.jpg",note:"Fest der heiligen Apostel"},{date:"19. August",title:"Verklärung Christi",file:"verklaerung-christi.jpg",note:"Christus auf dem Berg Tabor"},{date:"11. September",title:"Neyrouz",file:"neyrouz.jpg",note:"Koptisches Neujahr und Märtyrer"},{date:"November–Januar",title:"Weihnachtsfasten",file:"weihnachtsfasten.jpg",note:"Vorbereitung auf das Fest der Geburt Christi"}];return(r,s)=>{const i=Ea("RouterLink");return ke(),Oe(ze,null,[s[8]||(s[8]=w("section",{class:"page-hero"},[w("div",{class:"wrap"},[w("span",{class:"eyebrow light"},"GEMEINSAM FEIERN & BETEN"),w("h1",null,[de("Gottesdienste & "),w("em",null,"Kirchenjahr")]),w("p",null,"Gottesdienstzeiten unserer Gemeinden und eine Auswahl wichtiger koptischer Festtage.")])],-1)),w("section",BN,[s[1]||(s[1]=w("div",{class:"section-heading"},[w("div",null,[w("span",{class:"eyebrow"},"REGELMÄSSIGE GOTTESDIENSTE"),w("h2",null,[de("Unsere "),w("em",null,"Gemeinden")])])],-1)),w("div",jN,[(ke(),Oe(ze,null,qi(e,o=>w("article",{key:o.city,class:"event-row"},[s[0]||(s[0]=w("div",{class:"event-symbol"},"✦",-1)),w("div",$N,[w("h3",null,xe(o.city),1),w("p",null,xe(o.church),1),w("span",null,xe(o.address),1)]),w("div",qN,[w("b",null,xe(o.day),1),w("span",null,xe(o.time),1)]),w("a",{class:"text-link",target:"_blank",rel:"noreferrer",href:o.map},"Route ↗",8,HN)])),64))])]),w("section",GN,[w("div",zN,[s[2]||(s[2]=w("div",{class:"section-heading"},[w("div",null,[w("span",{class:"eyebrow"},"DAS KIRCHENJAHR"),w("h2",null,[de("Koptischer "),w("em",null,"Kalender 2026")]),w("p",{class:"muted"},"Ikonen und Platzhalter für wichtige Feste. Termine bitte vor Veröffentlichung mit dem offiziellen Kalender abgleichen.")]),w("a",{class:"btn btn-dark",href:"https://kopten.de/kalender.html",target:"_blank",rel:"noopener noreferrer"},"Offiziellen Kalender öffnen ↗")],-1)),w("div",KN,[(ke(),Oe(ze,null,qi(n,o=>w("article",{key:o.file,class:"feast-card"},[me(ar,{src:`/images/icons/${o.file}`,title:o.title,ratio:"3 / 4",size:"900 × 1200 px"},null,8,["src","title"]),w("div",WN,[w("span",QN,xe(o.date),1),w("h3",null,xe(o.title),1),w("p",null,xe(o.note),1)])])),64))]),s[3]||(s[3]=w("p",{class:"calendar-source"},[de("Kalenderquelle und weitere Festtage: "),w("a",{href:"https://kopten.de/kalender.html",target:"_blank",rel:"noopener noreferrer"},"kopten.de/kalender.html ↗")],-1))])]),w("section",JN,[w("div",XN,[s[5]||(s[5]=w("span",{class:"eyebrow"},"HINWEIS",-1)),s[6]||(s[6]=w("h3",null,"Änderungen an Feiertagen",-1)),s[7]||(s[7]=w("p",null,"Gottesdienstzeiten können an kirchlichen Feiertagen und während der Fastenzeit abweichen. Bitte prüfe aktuelle Hinweise direkt bei der Gemeinde.",-1)),me(i,{class:"btn btn-dark",to:"/kontakt"},{default:ct(()=>[...s[4]||(s[4]=[de("Kontakt aufnehmen →",-1)])]),_:1})])])],64)}}},ZN={class:"wrap section contact-layout"},eO={class:"consent"},tO={key:0,class:"captcha-placeholder"},nO={key:1,class:"captcha-box"},rO=["disabled"],sO={key:2,class:"form-status",role:"status"},iO={__name:"ContactView",setup(t){const e=lo({name:"",email:"",subject:"",message:"",consent:!1}),n=rt(!1),r=rt(""),s=rt(""),i=rt(null),o="6Leux_wtAAAAAOQNv8HTnVFSm4sMSPwtBvl1q3l6",l=Wt(()=>!!(js&&dg&&o));qs(()=>{if(!l.value)return;const u=document.createElement("script");u.src="https://www.google.com/recaptcha/api.js?onload=onRecaptchaReady&render=explicit",u.async=!0,u.defer=!0,window.onRecaptchaReady=()=>{window.grecaptcha&&document.getElementById("recaptcha-container")&&(i.value=window.grecaptcha.render("recaptcha-container",{sitekey:o,callback:d=>s.value=d,"expired-callback":()=>s.value="","error-callback":()=>s.value=""}))},document.head.appendChild(u)});async function c(){if(r.value="",!e.consent)return r.value="Bitte bestätigen Sie die Datenschutzhinweise.";if(!s.value)return r.value="Bitte bestätigen Sie zuerst reCAPTCHA.";if(!js)return r.value="Der Nachrichtendienst ist noch nicht konfiguriert.";n.value=!0;try{await DN(dg,"submitContactMessage")({...e,captchaToken:s.value}),r.value="Vielen Dank! Ihre Nachricht wurde sicher übermittelt.",Object.assign(e,{name:"",email:"",subject:"",message:"",consent:!1}),s.value="",i.value!==null&&window.grecaptcha.reset(i.value)}catch{r.value="Die Nachricht konnte gerade nicht gesendet werden. Bitte versuchen Sie es später erneut.",s.value="",i.value!==null&&window.grecaptcha.reset(i.value)}finally{n.value=!1}}return(u,d)=>(ke(),Oe(ze,null,[d[15]||(d[15]=w("section",{class:"page-hero"},[w("div",{class:"wrap"},[w("span",{class:"eyebrow light"},"WIR SIND GERNE FÜR SIE DA"),w("h1",null,[de("Nehmen Sie "),w("em",null,"Kontakt auf")]),w("p",null,"Sie haben Fragen oder möchten uns besuchen? Schreiben Sie uns.")])],-1)),w("section",ZN,[d[14]||(d[14]=UT('<div class="contact-info"><span class="eyebrow">KONTAKT &amp; ANFAHRT</span><h2>Wir freuen uns,<br><em>von Ihnen zu hören.</em></h2><p>Ob Fragen zu Gottesdiensten, unserer Gemeinde oder einfach ein erstes Kennenlernen – wir helfen Ihnen gerne weiter.</p><div class="contact-item"><span>⌖</span><div><b>Adresse</b><p>St. Georg Koptisch-Orthodoxe Kirche<br>Wurmlinger Str. 49<br>70597 Stuttgart</p><a href="https://maps.google.com/?q=Wurmlinger+Strasse+49+70597+Stuttgart" target="_blank" rel="noreferrer">Route planen ↗</a></div></div><div class="contact-item"><span>☎</span><div><b>Telefon</b><p><a href="tel:+49711604252">0711 604252</a></p></div></div><div class="contact-item"><span>✉</span><div><b>E-Mail</b><p><a href="mailto:info@st-georg.com">info@st-georg.com</a></p></div></div></div>',1)),w("form",{class:"contact-form",onSubmit:Rm(c,["prevent"])},[d[11]||(d[11]=w("h2",null,"Schreiben Sie uns",-1)),d[12]||(d[12]=w("p",{class:"muted"},"Alle mit * markierten Felder sind erforderlich.",-1)),w("label",null,[d[5]||(d[5]=de("Ihr Name *",-1)),lr(w("input",{"onUpdate:modelValue":d[0]||(d[0]=p=>e.name=p),required:"",maxlength:"100",autocomplete:"name",placeholder:"Vor- und Nachname"},null,512),[[Hr,e.name,void 0,{trim:!0}]])]),w("label",null,[d[6]||(d[6]=de("E-Mail-Adresse *",-1)),lr(w("input",{"onUpdate:modelValue":d[1]||(d[1]=p=>e.email=p),required:"",type:"email",maxlength:"254",autocomplete:"email",placeholder:"name@beispiel.de"},null,512),[[Hr,e.email,void 0,{trim:!0}]])]),w("label",null,[d[7]||(d[7]=de("Betreff",-1)),lr(w("input",{"onUpdate:modelValue":d[2]||(d[2]=p=>e.subject=p),maxlength:"150",placeholder:"Worum geht es?"},null,512),[[Hr,e.subject,void 0,{trim:!0}]])]),w("label",null,[d[8]||(d[8]=de("Ihre Nachricht *",-1)),lr(w("textarea",{"onUpdate:modelValue":d[3]||(d[3]=p=>e.message=p),required:"",maxlength:"5000",rows:"5",placeholder:"Wie können wir Ihnen helfen?"},null,512),[[Hr,e.message,void 0,{trim:!0}]])]),w("label",eO,[lr(w("input",{type:"checkbox","onUpdate:modelValue":d[4]||(d[4]=p=>e.consent=p),required:""},null,512),[[Ew,e.consent]]),d[9]||(d[9]=de(" Ich stimme zu, dass meine Angaben zur Bearbeitung meiner Anfrage verarbeitet werden. *",-1))]),l.value?(ke(),Oe("div",nO,[...d[10]||(d[10]=[w("div",{id:"recaptcha-container"},null,-1),w("small",null,"Spam-Schutz durch Google reCAPTCHA.",-1)])])):(ke(),Oe("div",tO,"Vor dem Livegang bitte den reCAPTCHA Site Key in der .env eintragen und die Domain in der Google reCAPTCHA-Konsole freischalten.")),w("button",{class:"btn btn-dark",disabled:n.value||!l.value},xe(n.value?"Wird gesendet …":"Nachricht sicher senden →"),9,rO),r.value?(ke(),Oe("p",sO,xe(r.value),1)):Ns("",!0),d[13]||(d[13]=w("p",{class:"privacy-note"},"Bitte senden Sie über dieses Formular keine vertraulichen oder besonders sensiblen Informationen.",-1))],32)])],64))}},oO={class:"wrap section admin-wrap"},aO={key:0,class:"info-panel"},lO={key:1,class:"admin-card"},cO=["disabled"],uO={class:"admin-head"},hO={class:"muted"},dO={class:"upload-panel"},fO={class:"file-picker"},pO=["disabled"],gO={key:0,class:"form-status",role:"status"},mO={class:"admin-gallery"},_O=["src","alt"],yO=["onClick"],vO={key:2,class:"form-status error"},EO={__name:"AdminView",setup(t){const e=rt(null),n=rt(""),r=rt(""),s=rt(""),i=rt([]),o=rt([]),l=rt(!1),c=rt(""),u=rt("");let d=()=>{};qs(()=>{js&&(d=LC(wc,async B=>{e.value=B,B&&await k()}))}),rl(()=>d());function p(B){i.value=Array.from(B.target.files||[]),c.value="",u.value=""}async function g(){l.value=!0,u.value="";try{await VC(wc,n.value,r.value)}catch{u.value="Anmeldung fehlgeschlagen. Bitte Zugangsdaten prüfen."}finally{l.value=!1}}async function y(){await UC(wc),o.value=[]}async function k(){try{const B=Cy(lu(Ui,"gallery"),ky("createdAt","desc"));o.value=(await Oy(B)).docs.map(N=>({id:N.id,...N.data()}))}catch{u.value="Galerie konnte nicht geladen werden. Bitte Firestore-Regeln prüfen."}}async function O(){if(i.value.length){l.value=!0,c.value="",u.value="";try{for(const B of i.value){if(!["image/jpeg","image/png","image/webp"].includes(B.type)||B.size>8*1024*1024)throw new Error("Bitte nur JPEG-, PNG- oder WebP-Dateien bis 8 MB auswählen.");const N=`gallery/${e.value.uid}/${Date.now()}-${crypto.randomUUID()}-${B.name.replace(/[^a-zA-Z0-9._-]/g,"_")}`,L=ag(hg,N);await iN(L,B,{contentType:B.type});const H=await oN(L);await cP(lu(Ui,"gallery"),{title:s.value||B.name,url:H,storagePath:N,createdAt:uP(),createdBy:e.value.uid})}c.value="Bilder erfolgreich hochgeladen.",i.value=[],s.value="",await k()}catch(B){u.value=B.message||"Upload fehlgeschlagen. Prüfe deine Firebase-Regeln."}finally{l.value=!1}}}async function V(B){if(confirm(`„${B.title||"Dieses Bild"}“ wirklich löschen?`)){l.value=!0;try{await lP(vy(Ui,"gallery",B.id)),B.storagePath&&await aN(ag(hg,B.storagePath)),o.value=o.value.filter(N=>N.id!==B.id),c.value="Bild gelöscht."}catch{u.value="Löschen fehlgeschlagen. Bitte Firebase-Regeln prüfen."}finally{l.value=!1}}}return(B,N)=>(ke(),Oe(ze,null,[N[13]||(N[13]=w("section",{class:"page-hero"},[w("div",{class:"wrap"},[w("span",{class:"eyebrow light"},"GESCHÜTZTER BEREICH"),w("h1",null,[de("Gemeinde-"),w("em",null,"Administration")]),w("p",null,"Verwalten Sie die Bilder unserer Online-Galerie.")])],-1)),w("section",oO,[Wr(js)?(ke(),Oe("div",lO,[e.value?(ke(),Oe(ze,{key:1},[w("div",uO,[w("div",null,[N[8]||(N[8]=w("span",{class:"eyebrow"},"ANGEMELDET",-1)),N[9]||(N[9]=w("h2",null,"Galerie verwalten",-1)),w("p",hO,xe(e.value.email),1)]),w("button",{class:"btn btn-outline",onClick:y},"Abmelden")]),w("div",dO,[w("label",null,[N[10]||(N[10]=de("Bildtitel",-1)),lr(w("input",{"onUpdate:modelValue":N[2]||(N[2]=L=>s.value=L),maxlength:"120",placeholder:"z. B. Gemeindefest"},null,512),[[Hr,s.value,void 0,{trim:!0}]])]),w("label",fO,[N[11]||(N[11]=de("Bilder auswählen",-1)),w("input",{type:"file",accept:"image/jpeg,image/png,image/webp",multiple:"",onChange:p},null,32)]),N[12]||(N[12]=w("p",{class:"muted"},"JPEG, PNG oder WebP · max. 8 MB pro Bild. Funktioniert auch auf dem Smartphone.",-1)),w("button",{class:"btn btn-dark",disabled:!i.value.length||l.value,onClick:O},xe(l.value?"Wird verarbeitet …":` ${i.value.length} Bild(er) hochladen →`),9,pO)]),c.value?(ke(),Oe("p",gO,xe(c.value),1)):Ns("",!0),w("div",mO,[(ke(!0),Oe(ze,null,qi(o.value,L=>(ke(),Oe("article",{key:L.id},[w("img",{src:L.url,alt:L.title},null,8,_O),w("div",null,[w("b",null,xe(L.title||"Ohne Titel"),1),w("button",{class:"delete-btn",onClick:H=>V(L)},"Löschen",8,yO)])]))),128))])],64)):(ke(),Oe(ze,{key:0},[N[6]||(N[6]=w("h2",null,"Admin-Anmeldung",-1)),N[7]||(N[7]=w("p",{class:"muted"},"Nur autorisierte Gemeindeadministratoren haben Zugriff.",-1)),w("form",{onSubmit:Rm(g,["prevent"])},[w("label",null,[N[4]||(N[4]=de("E-Mail-Adresse",-1)),lr(w("input",{"onUpdate:modelValue":N[0]||(N[0]=L=>n.value=L),type:"email",required:"",autocomplete:"username"},null,512),[[Hr,n.value,void 0,{trim:!0}]])]),w("label",null,[N[5]||(N[5]=de("Passwort",-1)),lr(w("input",{"onUpdate:modelValue":N[1]||(N[1]=L=>r.value=L),type:"password",required:"",autocomplete:"current-password"},null,512),[[Hr,r.value]])]),w("button",{class:"btn btn-dark",disabled:l.value},xe(l.value?"Bitte warten …":"Anmelden →"),9,cO)],32)],64)),u.value?(ke(),Oe("p",vO,xe(u.value),1)):Ns("",!0)])):(ke(),Oe("div",aO,[...N[3]||(N[3]=[w("h3",null,"Firebase noch nicht verbunden",-1),w("p",null,"Lege eine .env-Datei anhand der .env.example an und trage deine Firebase-Projektdaten ein. Danach kannst du dich hier anmelden.",-1)])]))])],64))}},Dv=GI({history:II(),scrollBehavior:()=>({top:0}),routes:[{path:"/",component:fA,meta:{title:"Startseite"}},{path:"/galerie",component:FN,meta:{title:"Galerie"}},{path:"/veranstaltungen",component:YN,meta:{title:"Veranstaltungen"}},{path:"/kontakt",component:iO,meta:{title:"Kontakt"}},{path:"/admin",component:EO,meta:{title:"Administration"}},{path:"/:pathMatch(.*)*",redirect:"/"}]});Dv.afterEach(t=>{document.title=`${t.meta.title||"Kirche"} · Koptisch-Orthodoxe Kirche Baden-Württemberg`});Rw(Fw).use(Dv).mount("#app");
