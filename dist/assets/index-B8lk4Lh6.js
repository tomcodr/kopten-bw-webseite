(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ve={},$r=[],wn=()=>{},gg=()=>!1,za=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Wa=t=>t.startsWith("onUpdate:"),dt=Object.assign,vu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},sE=Object.prototype.hasOwnProperty,Pe=(t,e)=>sE.call(t,e),oe=Array.isArray,gr=t=>oo(t)==="[object Map]",Ns=t=>oo(t)==="[object Set]",Sd=t=>oo(t)==="[object Date]",pe=t=>typeof t=="function",Qe=t=>typeof t=="string",kn=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",mg=t=>(Oe(t)||pe(t))&&pe(t.then)&&pe(t.catch),_g=Object.prototype.toString,oo=t=>_g.call(t),iE=t=>oo(t).slice(8,-1),yg=t=>oo(t)==="[object Object]",Eu=t=>Qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,bi=yu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qa=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},oE=/-\w/g,kt=Qa(t=>t.replace(oE,e=>e.slice(1).toUpperCase())),aE=/\B([A-Z])/g,ns=Qa(t=>t.replace(aE,"-$1").toLowerCase()),Ja=Qa(t=>t.charAt(0).toUpperCase()+t.slice(1)),zl=Qa(t=>t?`on${Ja(t)}`:""),En=(t,e)=>!Object.is(t,e),ea=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},vg=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Tu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Pd;const Xa=()=>Pd||(Pd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ya(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Qe(r)?hE(r):Ya(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Qe(t)||Oe(t))return t}const lE=/;(?![^(]*\))/g,cE=/:([^]+)/,uE=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function hE(t){const e={};return t.replace(uE,n=>n.startsWith("/*")?"":n).split(lE).forEach(n=>{if(n){const r=n.split(cE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ao(t){let e="";if(Qe(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const r=ao(t[n]);r&&(e+=r+" ")}else if(Oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const dE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",fE=yu(dE);function Eg(t){return!!t||t===""}function pE(t,e,n){if(t.length!==e.length)return!1;let r=!0;for(let s=0;r&&s<t.length;s++)r=Hs(t[s],e[s],n);return r}function Cd(t,e,n){if(t.size!==e.size)return!1;const r=Array.from(e),s=new Uint8Array(r.length);for(const i of t){let o=-1;for(let l=0;l<r.length;l++)if(!s[l]&&Hs(i,r[l],n)){o=l;break}if(o<0)return!1;s[o]=1}return!0}function gE(t,e,n){let r=gr(t),s=gr(e);if(r||s||(r=Ns(t),s=Ns(e),r||s))return r&&s?Cd(t,e,n):!1;const i=Object.keys(t).length,o=Object.keys(e).length;if(i!==o)return!1;for(const l in t){const c=t.hasOwnProperty(l),u=e.hasOwnProperty(l);if(c&&!u||!c&&u||!Hs(t[l],e[l],n))return!1}return String(t)===String(e)}function kd(t,e,n,r){n||(n=[new Map,new Map]);const[s,i]=n;if(s.has(t)||i.has(e))return s.get(t)===e&&i.get(e)===t;s.set(t,e),i.set(e,t);const o=r(t,e,n);return s.delete(t),i.delete(e),o}function Hs(t,e,n){if(t===e)return!0;let r=Sd(t),s=Sd(e);return r||s?r&&s?t.getTime()===e.getTime():!1:(r=kn(t),s=kn(e),r||s?t===e:(r=oe(t),s=oe(e),r||s?r&&s?kd(t,e,n,pE):!1:(r=Oe(t),s=Oe(e),r||s?!r||!s?!1:kd(t,e,n,gE):String(t)===String(e))))}function Tg(t,e){return t.findIndex(n=>Hs(n,e))}const wg=t=>!!(t&&t.__v_isRef===!0),_e=t=>Qe(t)?t:t==null?"":oe(t)||Oe(t)&&(t.toString===_g||!pe(t.toString))?wg(t)?_e(t.value):JSON.stringify(t,Ig,2):String(t),Ig=(t,e)=>wg(e)?Ig(t,e.value):gr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Wl(r,i)+" =>"]=s,n),{})}:Ns(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Wl(n))}:kn(e)?Wl(e):Oe(e)&&!oe(e)&&!yg(e)?String(e):e,Wl=(t,e="")=>{var n;return kn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ct;class mE{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&ct&&(ct.active?(this.parent=ct,this.index=(ct.scopes||(ct.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const r=this.scopes.slice();for(e=0,n=r.length;e<n;e++)r[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}const r=this.effects.slice();for(e=0,n=r.length;e<n;e++)r[e].resume()}}run(e){if(this._active){const n=ct;try{return ct=this,e()}finally{ct=n}}}on(){++this._on===1&&(this.prevScope=ct,ct=this)}off(){if(this._on>0&&--this._on===0){if(ct===this)ct=this.prevScope;else{let e=ct;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,r=s.length;n<r;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function _E(){return ct}let Me;const Ql=new WeakSet;class Ag{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ct&&(ct.active?ct.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ql.has(this)&&(Ql.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Rg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Nd(this),Sg(this);const e=Me,n=on;Me=this,on=!0;try{return this.fn()}finally{Pg(this),Me=e,on=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Au(e);this.deps=this.depsTail=void 0,Nd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ql.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ac(this)&&this.run()}get dirty(){return Ac(this)}}let bg=0,Ri,Si;function Rg(t,e=!1){if(t.flags|=8,e){t.next=Si,Si=t;return}t.next=Ri,Ri=t}function wu(){bg++}function Iu(){if(--bg>0)return;if(Si){let e=Si;for(Si=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ri;){let e=Ri;for(Ri=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Sg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Pg(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Au(r),yE(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Ac(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Cg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Cg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Bi)||(t.globalVersion=Bi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ac(t))))return;t.flags|=2;const e=t.dep,n=Me,r=on;Me=t,on=!0;try{Sg(t);const s=t.fn(t._value);(e.version===0||En(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Me=n,on=r,Pg(t),t.flags&=-3}}function Au(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Au(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function yE(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let on=!0;const kg=[];function Nn(){kg.push(on),on=!1}function On(){const t=kg.pop();on=t===void 0?!0:t}function Nd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Me;Me=void 0;try{e()}finally{Me=n}}}let Bi=0;class vE{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class bu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Me||!on||Me===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Me)n=this.activeLink=new vE(Me,this),Me.deps?(n.prevDep=Me.depsTail,Me.depsTail.nextDep=n,Me.depsTail=n):Me.deps=Me.depsTail=n,Ng(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Me.depsTail,n.nextDep=void 0,Me.depsTail.nextDep=n,Me.depsTail=n,Me.deps===n&&(Me.deps=r)}return n}trigger(e){this.version++,Bi++,this.notify(e)}notify(e){wu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Iu()}}}function Ng(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Ng(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const bc=new WeakMap,zr=Symbol(""),Rc=Symbol(""),ji=Symbol("");function vt(t,e,n){if(on&&Me){let r=bc.get(t);r||bc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new bu),s.map=r,s.key=n),s.track()}}function qn(t,e,n,r,s,i){const o=bc.get(t);if(!o){Bi++;return}const l=c=>{c&&c.trigger()};if(wu(),e==="clear")o.forEach(l);else{const c=oe(t),u=c&&Eu(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,g)=>{(g==="length"||g===ji||!kn(g)&&g>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(ji)),e){case"add":c?u&&l(o.get("length")):(l(o.get(zr)),gr(t)&&l(o.get(Rc)));break;case"delete":c||(l(o.get(zr)),gr(t)&&l(o.get(Rc)));break;case"set":gr(t)&&l(o.get(zr));break}}Iu()}function ps(t){const e=ke(t);return e===t||(vt(e,"iterate",ji),Xt(t))?e:Dn(t)?mr(t)?e.map(n=>Ir(Yt(n))):e.map(Ir):e.map(Yt)}function Za(t){return vt(t=ke(t),"iterate",ji),t}function _n(t,e){return Dn(t)?Ir(mr(t)?Yt(e):e):Yt(e)}const EE={__proto__:null,[Symbol.iterator](){return Jl(this,Symbol.iterator,t=>_n(this,t))},concat(...t){return ps(this).concat(...t.map(e=>oe(e)?ps(e):e))},entries(){return Jl(this,"entries",t=>(t[1]=_n(this,t[1]),t))},every(t,e){return Fn(this,"every",t,e,void 0,arguments)},filter(t,e){return Fn(this,"filter",t,e,n=>n.map(r=>_n(this,r)),arguments)},find(t,e){return Fn(this,"find",t,e,n=>_n(this,n),arguments)},findIndex(t,e){return Fn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Fn(this,"findLast",t,e,n=>_n(this,n),arguments)},findLastIndex(t,e){return Fn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Fn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Xl(this,"includes",t)},indexOf(...t){return Xl(this,"indexOf",t)},join(t){return ps(this).join(t)},lastIndexOf(...t){return Xl(this,"lastIndexOf",t)},map(t,e){return Fn(this,"map",t,e,void 0,arguments)},pop(){return fi(this,"pop")},push(...t){return fi(this,"push",t)},reduce(t,...e){return Dd(this,"reduce",t,e)},reduceRight(t,...e){return Dd(this,"reduceRight",t,e)},shift(){return fi(this,"shift")},some(t,e){return Fn(this,"some",t,e,void 0,arguments)},splice(...t){return fi(this,"splice",t)},toReversed(){return ps(this).toReversed()},toSorted(t){return ps(this).toSorted(t)},toSpliced(...t){return ps(this).toSpliced(...t)},unshift(...t){return fi(this,"unshift",t)},values(){return Jl(this,"values",t=>_n(this,t))}};function Jl(t,e,n){const r=Za(t),s=r[e],i=s.call(r);if(r!==t&&!Xt(t)){if(i[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(i));return o.next=()=>Od(i.next(),n),s!==Og[e]&&Object.defineProperties(o,{return:{get(){const l=i.return;return typeof l=="function"?l.bind(i):l}},throw:{get(){const l=i.throw;return typeof l=="function"?l.bind(i):l}}}),o}i._next=i.next,i.next=()=>Od(i._next(),n)}return i}function Od(t,e){return t.done||(t.value=e(t.value)),t}const Og=Array.prototype;function Fn(t,e,n,r,s,i){const o=Za(t),l=o!==t&&!Xt(t),c=o[e];if(c!==Og[e]){const p=c.apply(t,i);return l?Yt(p):p}let u=n;o!==t&&(l?u=function(p,g){return n.call(this,_n(t,p),g,t)}:n.length>2&&(u=function(p,g){return n.call(this,p,g,t)}));const d=c.call(o,u,r);return l&&s?s(d):d}function Dd(t,e,n,r){const s=Za(t),i=s!==t&&!Xt(t);let o=n,l=!1;s!==t&&(i?(l=r.length===0,o=function(u,d,p){return l&&(l=!1,u=_n(t,u)),n.call(this,u,_n(t,d),p,t)}):n.length>3&&(o=function(u,d,p){return n.call(this,u,d,p,t)}));const c=s[e](o,...r);return l?_n(t,c):c}function Xl(t,e,n){const r=ke(t);vt(r,"iterate",ji);const s=r[e](...n);return(s===-1||s===!1)&&Pu(n[0])?(n[0]=ke(n[0]),r[e](...n)):s}function fi(t,e,n=[]){Nn(),wu();const r=ke(t)[e].apply(t,n);return Iu(),On(),r}const TE=yu("__proto__,__v_isRef,__isVue"),Dg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(kn));function wE(t){kn(t)||(t=String(t));const e=ke(this);return vt(e,"has",t),e.hasOwnProperty(t)}class Vg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?OE:Ug:i?Lg:Mg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=oe(e);if(!s){let c;if(o&&(c=EE[n]))return c;if(n==="hasOwnProperty")return wE}const l=Reflect.get(e,n,wt(e)?e:r);if((kn(n)?Dg.has(n):TE(n))||(s||vt(e,"get",n),i))return l;if(wt(l)){const c=o&&Eu(n)?l:l.value;return s&&Oe(c)?Pc(c):c}return Oe(l)?s?Pc(l):lo(l):l}}class xg extends Vg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=oe(e)&&Eu(n);if(!this._isShallow){const u=Dn(i);if(!Xt(r)&&!Dn(r)&&(i=ke(i),r=ke(r)),!o&&wt(i)&&!wt(r))return u||(i.value=r),!0}const l=o?Number(n)<e.length:Pe(e,n),c=Reflect.set(e,n,r,wt(e)?e:s);return e===ke(s)&&c&&(l?En(r,i)&&qn(e,"set",n,r):qn(e,"add",n,r)),c}deleteProperty(e,n){const r=Pe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&qn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!kn(n)||!Dg.has(n))&&vt(e,"has",n),r}ownKeys(e){return vt(e,"iterate",oe(e)?"length":zr),Reflect.ownKeys(e)}}class IE extends Vg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const AE=new xg,bE=new IE,RE=new xg(!0);const Sc=t=>t,Fo=t=>Reflect.getPrototypeOf(t);function SE(t,e,n){return function(...r){const s=this.__v_raw,i=ke(s),o=gr(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),d=n?Sc:e?Ir:Yt;return!e&&vt(i,"iterate",c?Rc:zr),dt(Object.create(u),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:l?[d(p[0]),d(p[1])]:d(p),done:g}}})}}function Bo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function PE(t,e){const n={get(s){const i=this.__v_raw,o=ke(i),l=ke(s);t||(En(s,l)&&vt(o,"get",s),vt(o,"get",l));const{has:c}=Fo(o),u=e?Sc:t?Ir:Yt;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&vt(ke(s),"iterate",zr),s.size},has(s){const i=this.__v_raw,o=ke(i),l=ke(s);return t||(En(s,l)&&vt(o,"has",s),vt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=ke(l),u=e?Sc:t?Ir:Yt;return!t&&vt(c,"iterate",zr),l.forEach((d,p)=>s.call(i,u(d),u(p),o))}};return dt(n,t?{add:Bo("add"),set:Bo("set"),delete:Bo("delete"),clear:Bo("clear")}:{add(s){const i=ke(this),o=Fo(i),l=ke(s),c=!e&&!Xt(s)&&!Dn(s)?l:s;return o.has.call(i,c)||En(s,c)&&o.has.call(i,s)||En(l,c)&&o.has.call(i,l)||(i.add(c),qn(i,"add",c,c)),this},set(s,i){!e&&!Xt(i)&&!Dn(i)&&(i=ke(i));const o=ke(this),{has:l,get:c}=Fo(o);let u=l.call(o,s);u||(s=ke(s),u=l.call(o,s));const d=c.call(o,s);return o.set(s,i),u?En(i,d)&&qn(o,"set",s,i):qn(o,"add",s,i),this},delete(s){const i=ke(this),{has:o,get:l}=Fo(i);let c=o.call(i,s);c||(s=ke(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&qn(i,"delete",s,void 0),u},clear(){const s=ke(this),i=s.size!==0,o=s.clear();return i&&qn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=SE(s,t,e)}),n}function Ru(t,e){const n=PE(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_isShallow"?e:s==="__v_raw"?r:Reflect.get(Pe(n,s)&&s in r?n:r,s,i)}const CE={get:Ru(!1,!1)},kE={get:Ru(!1,!0)},NE={get:Ru(!0,!1)};const Mg=new WeakMap,Lg=new WeakMap,Ug=new WeakMap,OE=new WeakMap;function DE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lo(t){return Dn(t)?t:Su(t,!1,AE,CE,Mg)}function Fg(t){return Su(t,!1,RE,kE,Lg)}function Pc(t){return Su(t,!0,bE,NE,Ug)}function Su(t,e,n,r,s){if(!Oe(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=s.get(t);if(i)return i;const o=DE(iE(t));if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function mr(t){return Dn(t)?mr(t.__v_raw):!!(t&&t.__v_isReactive)}function Dn(t){return!!(t&&t.__v_isReadonly)}function Xt(t){return!!(t&&t.__v_isShallow)}function Pu(t){return t?!!t.__v_raw:!1}function ke(t){const e=t&&t.__v_raw;return e?ke(e):t}function VE(t){return!Pe(t,"__v_skip")&&Object.isExtensible(t)&&vg(t,"__v_skip",!0),t}const Yt=t=>Oe(t)?lo(t):t,Ir=t=>Oe(t)?Pc(t):t;function wt(t){return t?t.__v_isRef===!0:!1}function We(t){return Bg(t,!1)}function xE(t){return Bg(t,!0)}function Bg(t,e){return wt(t)?t:new ME(t,e)}class ME{constructor(e,n){this.dep=new bu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ke(e),this._value=n?e:Yt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Xt(e)||Dn(e);e=r?e:ke(e),En(e,n)&&(this._rawValue=e,this._value=r?e:Yt(e),this.dep.trigger())}}function Wr(t){return wt(t)?t.value:t}const LE={get:(t,e,n)=>e==="__v_raw"?t:Wr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return wt(s)&&!wt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function jg(t){return mr(t)?t:new Proxy(t,LE)}class UE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new bu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Bi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Me!==this)return Rg(this,!0),!0}get value(){const e=this.dep.track();return Cg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function FE(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new UE(r,s,n)}const jo={},ga=new WeakMap;let Fr;function BE(t,e=!1,n=Fr){if(n){let r=ga.get(n);r||ga.set(n,r=[]),r.push(t)}}function jE(t,e,n=Ve){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=H=>s?H:Xt(H)||s===!1||s===0?Hn(H,1):Hn(H);let d,p,g,v,k=!1,O=!1;if(wt(t)?(p=()=>t.value,k=Xt(t)):mr(t)?(p=()=>u(t),k=!0):oe(t)?(O=!0,k=t.some(H=>mr(H)||Xt(H)),p=()=>t.map(H=>{if(wt(H))return H.value;if(mr(H))return u(H);if(pe(H))return c?c(H,2):H()})):pe(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){Nn();try{g()}finally{On()}}const H=Fr;Fr=d;try{return c?c(t,3,[v]):t(v)}finally{Fr=H}}:p=wn,e&&s){const H=p,ue=s===!0?1/0:s;p=()=>Hn(H(),ue)}const V=_E(),B=()=>{d.stop(),V&&V.active&&vu(V.effects,d)};if(i&&e){const H=e;e=(...ue)=>{try{return H(...ue)}finally{B()}}}let N=O?new Array(t.length).fill(jo):jo;const L=H=>{if(!(!(d.flags&1)||!d.dirty&&!H))if(e){const ue=d.run();if(H||s||k||(O?ue.some((me,A)=>En(me,N[A])):En(ue,N))){const me=Fr;Nn();try{g&&g(),Fr=d;const A=[ue,N===jo?void 0:O&&N[0]===jo?[]:N,v];N=ue,c?c(e,3,A):e(...A)}finally{Fr=me,On()}}}else d.run()};return l&&l(L),d=new Ag(p),d.scheduler=o?()=>o(L,!1):L,v=H=>BE(H,!1,d),g=d.onStop=()=>{const H=ga.get(d);if(H){if(c)c(H,4);else for(const ue of H)ue();ga.delete(d)}},e?r?L(!0):N=d.run():o?o(L.bind(null,!0),!0):d.run(),B.pause=d.pause.bind(d),B.resume=d.resume.bind(d),B.stop=B,B}function Hn(t,e=1/0,n){if(e<=0||!Oe(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,wt(t))Hn(t.value,e,n);else if(oe(t))for(let r=0;r<t.length;r++)Hn(t[r],e,n);else if(Ns(t)||gr(t))t.forEach(r=>{Hn(r,e,n)});else if(yg(t)){for(const r in t)Hn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Hn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function co(t,e,n,r){try{return r?t(...r):t()}catch(s){el(s,e,n)}}function an(t,e,n,r){if(pe(t)){const s=co(t,e,n,r);return s&&mg(s)&&s.catch(i=>{el(i,e,n)}),s}if(oe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(an(t[i],e,n,r));return s}}function el(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ve;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,u)===!1)return}l=l.parent}if(i){Nn(),co(i,null,10,[t,c,u]),On();return}}$E(t,n,s,r,o)}function $E(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ct=[];let nn=-1;const yn=[];let or=null,gs=0;const $g=Promise.resolve();let ma=null;function Cu(t){const e=ma||$g;return t?e.then(this?t.bind(this):t):e}function qE(t){let e=nn+1,n=Ct.length;for(;e<n;){const r=e+n>>>1,s=Ct[r],i=$i(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function ku(t){if(!(t.flags&1)){const e=$i(t),n=Ct[Ct.length-1];!n||!(t.flags&2)&&e>=$i(n)?Ct.push(t):Ct.splice(qE(e),0,t),t.flags|=1,qg()}}function qg(){ma||(ma=$g.then(Kg))}function HE(t){if(!oe(t))or&&t.id===-1?or.splice(gs+1,0,t):t.flags&1||(yn.push(t),t.flags|=1);else for(let e=0;e<t.length;e++)yn.push(t[e]);qg()}function Hg(t,e,n,r=nn+1){for(;r<Ct.length;r++){const s=Ct[r];if(s&&s.flags&2){if(t&&s.id!==t.uid||e!==void 0&&!(s.id>=e))continue;Ct.splice(r,1),r=t?r-1:nn,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Gg(t,e,n=0){if(yn.length){let r=yn,s=0;if(e){r=[];for(let o=0;o<yn.length;o++){const l=yn[o];(l.i!==void 0?!l.i||l.i.uid<n:e.has(l))?yn[s++]=l:r.push(l)}}const i=[...new Set(r)].sort((o,l)=>$i(o)-$i(l));if(yn.length=s,or){for(let o=0;o<i.length;o++)or.push(i[o]);return}for(or=i,gs=0;gs<or.length;gs++){const o=or[gs];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}or=null,gs=0}}let Yl=!1;function GE(t,e){if(Yl){t();return}const n=e===void 0?void 0:new Set(yn);t(),Yl=!0;try{Hg(void 0,e),Gg(void 0,n,e)}finally{Yl=!1}}const $i=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Kg(t){try{for(nn=0;nn<Ct.length;nn++){const e=Ct[nn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),co(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;nn<Ct.length;nn++){const e=Ct[nn];e&&(e.flags&=-2)}nn=-1,Ct.length=0,Gg(),ma=null,(Ct.length||yn.length)&&Kg()}}let $t=null,zg=null;function _a(t){const e=$t;return $t=t,zg=t&&t.type.__scopeId||null,e}function xe(t,e=$t,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&wa(-1);const i=_a(e),o=Qr.length;let l;try{l=t(...s)}finally{for(let c=Qr.length;c>o;c--)ym();_a(i),r._d&&wa(1)}return l};return r._n=!0,r._c=!0,r._d=!0,r}function lr(t,e){if($t===null)return t;const n=ol($t),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Ve]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&Hn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Lr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Nn(),an(c,n,8,[t.el,l,t,e]),On())}}function ta(t,e){if(Tt){let n=Tt.provides;const r=Tt.parent&&Tt.parent.provides;r===n&&(n=Tt.provides=Object.create(r)),n[t]=e}}function Wn(t,e,n=!1){const r=HT();if(r||As){let s=As?As._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}const KE=Symbol.for("v-scx"),zE=()=>Wn(KE);function Is(t,e,n){return Wg(t,e,n)}function Wg(t,e,n=Ve){const{immediate:r,deep:s,flush:i,once:o}=n,l=dt({},n),c=e&&r||!e&&i!=="post";let u;if(Ki){if(i==="sync"){const v=zE();u=v.__watcherHandles||(v.__watcherHandles=[])}else if(!c){const v=()=>{};return v.stop=wn,v.resume=wn,v.pause=wn,v}}const d=Tt;l.call=(v,k,O)=>an(v,d,k,O);let p=!1;i==="post"?l.scheduler=v=>{v.i=d,Dt(v,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(v,k)=>{k?v():ku(v)}),l.augmentJob=v=>{e&&(v.flags|=4),p&&(v.flags|=2,d&&(v.id=d.uid,v.i=d))};const g=jE(t,e,l);return Ki&&(u?u.push(g):c&&g()),g}function WE(t,e,n){const r=this.proxy,s=Qe(t)?t.includes(".")?Qg(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=uo(this),l=Wg(s,i.bind(r),n);return o(),l}function Qg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const QE=Symbol("_vte"),tl=t=>t.__isTeleport,Zl=Symbol("_leaveCb");function JE(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==ln){e=n;break}}return e}function Jg(t){if(!Nu(t))return tl(t.type)&&t.children?JE(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&pe(n.default))return n.default()}}function ya(t,e){if(t.shapeFlag&6&&t.component){t.transition=e;const n=t.component.subTree;ya(tl(n.type)&&Jg(n)||n,e)}else if(t.shapeFlag&128)t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback);else if(t.transition=e,t.type===Le&&oe(t.children)){const n=im(t.children,!1);n&&ya(n,e)}}function Cc(t){if(t.component)return Cc(t.component.subTree);if(t.type===Le){const e=oe(t.children)&&im(t.children,!1);return e?Cc(e):void 0}if(t.type!==ln)return t}function Xg(t,e){return pe(t)?dt({name:t.name},e,{setup:t}):t}function Yg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Vd(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const va=new WeakMap;function Pi(t,e,n,r,s=!1){if(oe(t)){t.forEach((O,V)=>Pi(O,e&&(oe(e)?e[V]:e),n,r,s));return}if(Ci(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Pi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ol(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,d=l.refs===Ve?l.refs={}:l.refs,p=l.setupState,g=ke(p),v=p===Ve?gg:O=>Vd(d,O)?!1:Pe(g,O),k=(O,V)=>!(V&&Vd(d,V));if(u!=null&&u!==c){if(xd(e),Qe(u))d[u]=null,v(u)&&(p[u]=null);else if(wt(u)){const O=e;k(u,O.k)&&(u.value=null),O.k&&(d[O.k]=null)}}if(pe(c))co(c,l,12,[o,d]);else{const O=Qe(c),V=wt(c);if(O||V){const B=()=>{if(t.f){const N=O?v(c)?p[c]:d[c]:k()||!t.k?c.value:d[t.k];if(s)oe(N)&&vu(N,i);else if(oe(N))N.includes(i)||N.push(i);else if(O)d[c]=[i],v(c)&&(p[c]=d[c]);else{const L=[i];k(c,t.k)&&(c.value=L),t.k&&(d[t.k]=L)}}else O?(d[c]=o,v(c)&&(p[c]=o)):V&&(k(c,t.k)&&(c.value=o),t.k&&(d[t.k]=o))};if(o){const N=()=>{B(),va.delete(t)};N.id=-1,va.set(t,N),Dt(N,n)}else xd(t),B()}}}function xd(t){const e=va.get(t);e&&(e.flags|=8,va.delete(t))}Xa().requestIdleCallback;Xa().cancelIdleCallback;const Ci=t=>!!t.type.__asyncLoader,Nu=t=>t.type.__isKeepAlive;function XE(t,e){Zg(t,"a",e)}function YE(t,e){Zg(t,"da",e)}function Zg(t,e,n=Tt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(nl(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Nu(s.parent.vnode)&&ZE(r,e,n,s),s=s.parent}}function ZE(t,e,n,r){const s=nl(e,t,r,!0);rl(()=>{vu(r[e],s)},n)}function nl(t,e,n=Tt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Nn();const l=uo(n),c=an(e,n,t,o);return l(),On(),c});return r?s.unshift(i):s.push(i),i}}const Zn=t=>(e,n=Tt)=>{(!Ki||t==="sp")&&nl(t,(...r)=>e(...r),n)},eT=Zn("bm"),Gs=Zn("m"),tT=Zn("bu"),nT=Zn("u"),em=Zn("bum"),rl=Zn("um"),rT=Zn("sp"),sT=Zn("rtg"),iT=Zn("rtc");function oT(t,e=Tt){nl("ec",t,e)}const aT="components";function Ea(t,e){return cT(aT,t,!0,e)||t}const lT=Symbol.for("v-ndc");function cT(t,e,n=!0,r=!1){const s=$t||Tt;if(s){const i=s.type;{const l=QT(i,!1);if(l&&(l===e||l===kt(e)||l===Ja(kt(e))))return i}const o=Md(s[t]||i[t],e)||Md(s.appContext[t],e);return!o&&r?i:o}}function Md(t,e){return t&&(t[e]||t[kt(e)]||t[Ja(kt(e))])}function Gn(t,e,n,r){let s;const i=n,o=oe(t);if(o||Qe(t)){const l=o&&mr(t);let c=!1,u=!1;l&&(c=!Xt(t),u=Dn(t),t=Za(t)),s=new Array(t.length);for(let d=0,p=t.length;d<p;d++)s[d]=e(c?u?Ir(Yt(t[d])):Yt(t[d]):t[d],d,void 0,i)}else if(typeof t=="number")if(!Number.isInteger(t)||t<0)s=[];else{s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Oe(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}const kc=t=>t?wm(t)?ol(t):kc(t.parent):null,ki=dt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>kc(t.parent),$root:t=>kc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>nm(t),$forceUpdate:t=>t.f||(t.f=()=>{ku(t.update)}),$nextTick:t=>t.n||(t.n=Cu.bind(t.proxy)),$watch:t=>WE.bind(t)}),ec=(t,e)=>t!==Ve&&!t.__isScriptSetup&&Pe(t,e),uT={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ec(r,e))return o[e]=1,r[e];if(s!==Ve&&Pe(s,e))return o[e]=2,s[e];if(Pe(i,e))return o[e]=3,i[e];if(n!==Ve&&Pe(n,e))return o[e]=4,n[e];Nc&&(o[e]=0)}}const u=ki[e];let d,p;if(u)return e==="$attrs"&&vt(t.attrs,"get",""),u(t);if((d=l.__cssModules)&&(d=d[e]))return d;if(n!==Ve&&Pe(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Pe(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ec(s,e)?(s[e]=n,!0):r!==Ve&&Pe(r,e)?(r[e]=n,!0):Pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},l){let c;return!!(n[l]||t!==Ve&&l[0]!=="$"&&Pe(t,l)||ec(e,l)||Pe(i,l)||Pe(r,l)||Pe(ki,l)||Pe(s.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ld(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Nc=!0;function hT(t){const e=nm(t),n=t.proxy,r=t.ctx;Nc=!1,e.beforeCreate&&Ud(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:g,beforeUpdate:v,updated:k,activated:O,deactivated:V,beforeDestroy:B,beforeUnmount:N,destroyed:L,unmounted:H,render:ue,renderTracked:me,renderTriggered:A,errorCaptured:E,serverPrefetch:w,expose:b,inheritAttrs:R,components:P,directives:T,filters:At}=e;if(u&&dT(u,r,null),o)for(const Ae in o){const ve=o[Ae];pe(ve)&&(r[Ae]=ve.bind(n))}if(s){const Ae=s.call(n,n);Oe(Ae)&&(t.data=lo(Ae))}if(Nc=!0,i)for(const Ae in i){const ve=i[Ae],Lt=pe(ve)?ve.bind(n,n):pe(ve.get)?ve.get.bind(n,n):wn,Zt=!pe(ve)&&pe(ve.set)?ve.set.bind(n):wn,zt=xt({get:Lt,set:Zt});Object.defineProperty(r,Ae,{enumerable:!0,configurable:!0,get:()=>zt.value,set:$e=>zt.value=$e})}if(l)for(const Ae in l)tm(l[Ae],r,n,Ae);if(c){const Ae=pe(c)?c.call(n):c;Reflect.ownKeys(Ae).forEach(ve=>{ta(ve,Ae[ve])})}d&&Ud(d,t,"c");function Ze(Ae,ve){oe(ve)?ve.forEach(Lt=>Ae(Lt.bind(n))):ve&&Ae(ve.bind(n))}if(Ze(eT,p),Ze(Gs,g),Ze(tT,v),Ze(nT,k),Ze(XE,O),Ze(YE,V),Ze(oT,E),Ze(iT,me),Ze(sT,A),Ze(em,N),Ze(rl,H),Ze(rT,w),oe(b))if(b.length){const Ae=t.exposed||(t.exposed={});b.forEach(ve=>{Object.defineProperty(Ae,ve,{get:()=>n[ve],set:Lt=>n[ve]=Lt,enumerable:!0})})}else t.exposed||(t.exposed={});ue&&t.render===wn&&(t.render=ue),R!=null&&(t.inheritAttrs=R),P&&(t.components=P),T&&(t.directives=T),w&&Yg(t)}function dT(t,e,n=wn){oe(t)&&(t=Oc(t));for(const r in t){const s=t[r];let i;Oe(s)?"default"in s?i=Wn(s.from||r,s.default,!0):i=Wn(s.from||r):i=Wn(s),wt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ud(t,e,n){an(oe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function tm(t,e,n,r){let s=r.includes(".")?Qg(n,r):()=>n[r];if(Qe(t)){const i=e[t];pe(i)&&Is(s,i)}else if(pe(t))Is(s,t.bind(n));else if(Oe(t))if(oe(t))t.forEach(i=>tm(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&Is(s,i,t)}}function nm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Ta(c,u,o,!0)),Ta(c,e,o)),Oe(e)&&i.set(e,c),c}function Ta(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ta(t,i,n,!0),s&&s.forEach(o=>Ta(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=fT[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const fT={data:Fd,props:Bd,emits:Bd,methods:_i,computed:_i,beforeCreate:St,created:St,beforeMount:St,mounted:St,beforeUpdate:St,updated:St,beforeDestroy:St,beforeUnmount:St,destroyed:St,unmounted:St,activated:St,deactivated:St,errorCaptured:St,serverPrefetch:St,components:_i,directives:_i,watch:gT,provide:Fd,inject:pT};function Fd(t,e){return e?t?function(){return dt(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function pT(t,e){return _i(Oc(t),Oc(e))}function Oc(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function St(t,e){return t?[...new Set([].concat(t,e))]:e}function _i(t,e){return t?dt(Object.create(null),t,e):e}function Bd(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:dt(Object.create(null),Ld(t),Ld(e??{})):e}function gT(t,e){if(!t)return e;if(!e)return t;const n=dt(Object.create(null),t);for(const r in e)n[r]=St(t[r],e[r]);return n}function rm(){return{app:null,config:{isNativeTag:gg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mT=0;function _T(t,e){return function(r,s=null){pe(r)||(r=dt({},r)),s!=null&&!Oe(s)&&(s=null);const i=rm(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:mT++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:XT,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&pe(d.install)?(o.add(d),d.install(u,...p)):pe(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,g){if(!c){const v=u._ceVNode||ce(r,s);return v.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(v,d,g),c=!0,u._container=d,d.__vue_app__=u,ol(v.component)}},onUnmount(d){l.push(d)},unmount(){c&&(an(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=As;As=u;try{return d()}finally{As=p}}};return u}}let As=null;const yT=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${kt(e)}Modifiers`]||t[`${ns(e)}Modifiers`];function vT(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ve;let s=n;const i=e.startsWith("update:"),o=i&&yT(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>Qe(d)?d.trim():d)),o.number&&(s=s.map(Tu)));let l,c=r[l=zl(e)]||r[l=zl(kt(e))];!c&&i&&(c=r[l=zl(ns(e))]),c&&an(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,an(u,t,6,s)}}const ET=new WeakMap;function sm(t,e,n=!1){const r=n?ET:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!pe(t)){const c=u=>{const d=sm(u,e,!0);d&&(l=!0,dt(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Oe(t)&&r.set(t,null),null):(oe(i)?i.forEach(c=>o[c]=null):dt(o,i),Oe(t)&&r.set(t,o),o)}function sl(t,e){return!t||!za(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Pe(t,e[0].toLowerCase()+e.slice(1))||Pe(t,ns(e))||Pe(t,e))}function jd(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:g,setupState:v,ctx:k,inheritAttrs:O}=t,V=_a(t);let B,N;try{if(n.shapeFlag&4){const H=s||r,ue=H;B=vn(u.call(ue,H,d,p,v,g,k)),N=l}else{const H=e;B=vn(H.length>1?H(p,{attrs:l,slots:o,emit:c}):H(p,null)),N=e.props?l:TT(l)}}catch(H){Qr.length=0,el(H,t,1),B=ce(ln)}let L=B;if(N&&O!==!1){const H=Object.keys(N),{shapeFlag:ue}=L;H.length&&ue&7&&(i&&H.some(Wa)&&(N=wT(N,i)),L=Os(L,N,!1,!0))}if(n.dirs&&(L=Os(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition){const H=tl(L.type)&&Jg(L)||L;ya(H,n.transition)}return B=L,_a(V),B}function im(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(Hi(s)){if(s.type!==ln||s.children==="v-if"){if(n)return;n=s}}else return}return n}const TT=t=>{let e;for(const n in t)(n==="class"||n==="style"||za(n))&&((e||(e={}))[n]=t[n]);return e},wT=(t,e)=>{const n={};for(const r in t)(!Wa(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function IT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?$d(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(om(o,r,g)&&!sl(u,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?$d(r,o,u):!0:!!o;return!1}function $d(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(!Pe(t,i)||om(e,t,i)&&!sl(n,i))return!0}return!1}function om(t,e,n){const r=t[n],s=e[n];return n==="style"&&Oe(r)&&Oe(s)?!Hs(r,s):r!==s}function AT({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const am={},lm=()=>Object.create(am),cm=t=>Object.getPrototypeOf(t)===am;function bT(t,e,n,r=!1){const s={},i=lm();t.propsDefaults=Object.create(null),um(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Fg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function RT(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=ke(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(sl(t.emitsOptions,g))continue;const v=e[g];if(c)if(Pe(i,g))v!==i[g]&&(i[g]=v,u=!0);else{const k=kt(g);s[k]=Dc(c,l,k,v,t,!1)}else v!==i[g]&&(i[g]=v,u=!0)}}}else{um(t,e,s,i)&&(u=!0);let d;for(const p in l)(!e||!Pe(e,p)&&((d=ns(p))===p||!Pe(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Dc(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Pe(e,p))&&(delete i[p],u=!0)}u&&qn(t.attrs,"set","")}function um(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(bi(c))continue;const u=e[c];let d;s&&Pe(s,d=kt(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:sl(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=ke(n),u=l||Ve;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Dc(s,c,p,u[p],t,!Pe(u,p))}}return o}function Dc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Pe(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&pe(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=uo(s);r=u[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===ns(n))&&(r=!0))}return r}const ST=new WeakMap;function hm(t,e,n=!1){const r=n?ST:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!pe(t)){const d=p=>{c=!0;const[g,v]=hm(p,e,!0);dt(o,g),v&&l.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Oe(t)&&r.set(t,$r),$r;if(oe(i))for(let d=0;d<i.length;d++){const p=kt(i[d]);qd(p)&&(o[p]=Ve)}else if(i)for(const d in i){const p=kt(d);if(qd(p)){const g=i[d],v=o[p]=oe(g)||pe(g)?{type:g}:dt({},g),k=v.type;let O=!1,V=!0;if(oe(k))for(let B=0;B<k.length;++B){const N=k[B],L=pe(N)&&N.name;if(L==="Boolean"){O=!0;break}else L==="String"&&(V=!1)}else O=pe(k)&&k.name==="Boolean";v[0]=O,v[1]=V,(O||Pe(v,"default"))&&l.push(p)}}const u=[o,l];return Oe(t)&&r.set(t,u),u}function qd(t){return t[0]!=="$"&&!bi(t)}const Ou=t=>t==="_"||t==="_ctx"||t==="$stable",Du=t=>oe(t)?t.map(vn):[vn(t)],PT=(t,e,n)=>{if(e._n)return e;const r=xe((...s)=>Du(e(...s)),n);return r._c=!1,r},dm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ou(s))continue;const i=t[s];if(pe(i))e[s]=PT(s,i,r);else if(i!=null){const o=Du(i);e[s]=()=>o}}},fm=(t,e)=>{const n=Du(e);t.slots.default=()=>n},pm=(t,e,n)=>{for(const r in e)(n||!Ou(r))&&(t[r]=e[r])},CT=(t,e,n)=>{const r=t.slots=lm();if(t.vnode.shapeFlag&32){const s=e._;s?(pm(r,e,n),n&&vg(r,"_",s,!0)):dm(e,r)}else e&&fm(t,e)},kT=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ve;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:pm(s,e,n):(i=!e.$stable,dm(e,s)),o=e}else e&&(fm(t,e),o={default:1});if(i)for(const l in s)!Ou(l)&&o[l]==null&&delete s[l]},Dt=xT;function NT(t){return OT(t)}function OT(t,e){const n=Xa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:g,setScopeId:v=wn,insertStaticContent:k}=t,O=(_,I,S,D=null,M=null,j=null,G=void 0,z=null,K=!!I.dynamicChildren)=>{if(_===I)return;_&&!pi(_,I)&&(D=U(_),$e(_,M,j,!0),_=null),I.patchFlag===-2&&(K=!1,I.dynamicChildren=null),I.dynamicChildren&&_&&_.dynamicChildren&&_.dynamicChildren.hasOnce&&(I.dynamicChildren===$r&&(I.dynamicChildren=[]),I.dynamicChildren.hasOnce=!0);const{type:q,ref:ee,shapeFlag:J}=I;switch(q){case il:V(_,I,S,D);break;case ln:B(_,I,S,D);break;case na:_==null&&N(I,S,D,G);break;case Le:P(_,I,S,D,M,j,G,z,K);break;default:J&1?ue(_,I,S,D,M,j,G,z,K):J&6?T(_,I,S,D,M,j,G,z,K):(J&64||J&128)&&q.process(_,I,S,D,M,j,G,z,K,Q)}ee!=null&&M?Pi(ee,_&&_.ref,j,I||_,!I):ee==null&&_&&_.ref!=null&&Pi(_.ref,null,j,_,!0)},V=(_,I,S,D)=>{if(_==null)r(I.el=l(I.children),S,D);else{const M=I.el=_.el;I.children!==_.children&&u(M,I.children)}},B=(_,I,S,D)=>{_==null?r(I.el=c(I.children||""),S,D):I.el=_.el},N=(_,I,S,D)=>{[_.el,_.anchor]=k(_.children,I,S,D,_.el,_.anchor)},L=({el:_,anchor:I},S,D)=>{let M;for(;_&&_!==I;)M=g(_),r(_,S,D),_=M;r(I,S,D)},H=({el:_,anchor:I})=>{let S;for(;_&&_!==I;)S=g(_),s(_),_=S;s(I)},ue=(_,I,S,D,M,j,G,z,K)=>{if(I.type==="svg"?G="svg":I.type==="math"&&(G="mathml"),_==null)me(I,S,D,M,j,G,z,K);else{const q=_.el&&_.el._isVueCE?_.el:null;try{q&&q._beginPatch(),w(_,I,M,j,G,z,K)}finally{q&&q._endPatch()}}},me=(_,I,S,D,M,j,G,z)=>{let K,q;const{props:ee,shapeFlag:J,transition:te,dirs:ie}=_;if(K=_.el=o(_.type,j,ee&&ee.is,ee),J&8?d(K,_.children):J&16&&E(_.children,K,null,D,M,tc(_,j),G,z),ie&&Lr(_,null,D,"created"),A(K,_,_.scopeId,G,D),ee){for(const de in ee)de!=="value"&&!bi(de)&&i(K,de,null,ee[de],j,D);"value"in ee&&i(K,"value",null,ee.value,j),(q=ee.onVnodeBeforeMount)&&gn(q,D,_)}ie&&Lr(_,null,D,"beforeMount");const Ee=DT(M,te);Ee&&te.beforeEnter(K),r(K,I,S),((q=ee&&ee.onVnodeMounted)||Ee||ie)&&Dt(()=>{try{q&&gn(q,D,_),Ee&&te.enter(K),ie&&Lr(_,null,D,"mounted")}finally{}},M)},A=(_,I,S,D,M)=>{if(S&&v(_,S),D)for(let j=0;j<D.length;j++)v(_,D[j]);if(M){let j=M.subTree;if(I===j||_m(j.type)&&(j.ssContent===I||j.ssFallback===I)){const G=M.vnode;A(_,G,G.scopeId,G.slotScopeIds,M.parent)}}},E=(_,I,S,D,M,j,G,z,K=0)=>{for(let q=K;q<_.length;q++){const ee=_[q]=z?$n(_[q]):vn(_[q]);O(null,ee,I,S,D,M,j,G,z)}},w=(_,I,S,D,M,j,G)=>{const z=I.el=_.el;let{patchFlag:K,dynamicChildren:q,dirs:ee}=I;K|=_.patchFlag&16;const J=_.props||Ve,te=I.props||Ve;let ie;if(S&&Ur(S,!1),(ie=te.onVnodeBeforeUpdate)&&gn(ie,S,I,_),ee&&Lr(I,_,S,"beforeUpdate"),S&&Ur(S,!0),q&&(!_.dynamicChildren||_.dynamicChildren.length!==q.length)&&(K=0,G=!1,q=null),(J.innerHTML&&te.innerHTML==null||J.textContent&&te.textContent==null)&&d(z,""),q?b(_.dynamicChildren,q,z,S,D,tc(I,M),j):G||ve(_,I,z,null,S,D,tc(I,M),j,!1),K>0){if(K&16)R(z,J,te,S,M);else if(K&2&&J.class!==te.class&&i(z,"class",null,te.class,M),K&4&&i(z,"style",J.style,te.style,M),K&8){const Ee=I.dynamicProps;for(let de=0;de<Ee.length;de++){const fe=Ee[de],Fe=J[fe],et=te[fe];(et!==Fe||fe==="value")&&i(z,fe,Fe,et,M,S)}}K&1&&_.children!==I.children&&d(z,I.children)}else!G&&q==null&&R(z,J,te,S,M);((ie=te.onVnodeUpdated)||ee)&&Dt(()=>{ie&&gn(ie,S,I,_),ee&&Lr(I,_,S,"updated")},D)},b=(_,I,S,D,M,j,G)=>{for(let z=0;z<I.length;z++){const K=_[z],q=I[z],ee=K.el||Vc(K),J=ee&&(K.type===Le||!pi(K,q)||K.shapeFlag&198)?p(ee):S;O(K,q,J,null,D,M,j,G,!0)}},R=(_,I,S,D,M)=>{if(I!==S){if(I!==Ve)for(const j in I)!bi(j)&&!(j in S)&&i(_,j,I[j],null,M,D);for(const j in S){if(bi(j))continue;const G=S[j],z=I[j];G!==z&&j!=="value"&&i(_,j,z,G,M,D)}"value"in S&&i(_,"value",I.value,S.value,M)}},P=(_,I,S,D,M,j,G,z,K)=>{const q=I.el=_?_.el:l(""),ee=I.anchor=_?_.anchor:l("");let{patchFlag:J,dynamicChildren:te,slotScopeIds:ie}=I;ie&&(z=z?z.concat(ie):ie),_==null?(r(q,S,D),r(ee,S,D),E(I.children||[],S,ee,M,j,G,z,K)):J>0&&J&64&&te&&_.dynamicChildren&&_.dynamicChildren.length===te.length?(b(_.dynamicChildren,te,S,M,j,G,z),(I.key!=null||M&&I===M.subTree)&&gm(_,I,!0)):ve(_,I,S,ee,M,j,G,z,K)},T=(_,I,S,D,M,j,G,z,K)=>{I.slotScopeIds=z,_==null?I.shapeFlag&512?M.ctx.activate(I,S,D,G,K):At(I,S,D,M,j,G,K):Kt(_,I,K)},At=(_,I,S,D,M,j,G)=>{const z=_.component=qT(_,D,M);if(Nu(_)&&(z.ctx.renderer=Q),GT(z,!1,G),z.asyncDep){if(M&&M.registerDep(z,Ze,G,j),!_.el){const K=z.subTree=ce(ln);B(null,K,I,S),_.placeholder=K.el}}else Ze(z,_,I,S,M,j,G)},Kt=(_,I,S)=>{const D=I.component=_.component;if(IT(_,I,S))if(D.asyncDep&&!D.asyncResolved){I.el=_.el,I.placeholder=_.placeholder,Ae(D,I,S);return}else D.next=I,D.update();else I.el=_.el,I.placeholder=_.placeholder,D.vnode=I},Ze=(_,I,S,D,M,j,G)=>{const z=()=>{if(_.isMounted){let{next:J,bu:te,u:ie,parent:Ee,vnode:de}=_;{const Wt=mm(_);if(Wt){J&&(J.el=de.el,Ae(_,J,G)),Wt.asyncDep.then(()=>{Dt(()=>{_.isUnmounted||q()},M)});return}}let fe=J,Fe;Ur(_,!1),J?(J.el=de.el,Ae(_,J,G)):J=de,te&&ea(te),(Fe=J.props&&J.props.onVnodeBeforeUpdate)&&gn(Fe,Ee,J,de),Ur(_,!0);const et=jd(_),Ft=_.subTree;_.subTree=et,O(Ft,et,p(Ft.el),U(Ft),_,M,j),J.el=et.el,fe===null&&AT(_,et.el),ie&&Dt(ie,M),(Fe=J.props&&J.props.onVnodeUpdated)&&Dt(()=>gn(Fe,Ee,J,de),M)}else{let J;const{el:te,props:ie}=I,{bm:Ee,m:de,parent:fe,root:Fe,type:et}=_,Ft=Ci(I);Ur(_,!1),Ee&&ea(Ee),!Ft&&(J=ie&&ie.onVnodeBeforeMount)&&gn(J,fe,I),Ur(_,!0);{Fe.ce&&Fe.ce._hasShadowRoot()&&Fe.ce._injectChildStyle(et,_.parent?_.parent.type:void 0);const Wt=_.subTree=jd(_);O(null,Wt,S,D,_,M,j),I.el=Wt.el}if(de&&Dt(de,M),!Ft&&(J=ie&&ie.onVnodeMounted)){const Wt=I;Dt(()=>gn(J,fe,Wt),M)}(I.shapeFlag&256||fe&&Ci(fe.vnode)&&fe.vnode.shapeFlag&256)&&_.a&&Dt(_.a,M),_.isMounted=!0,I=S=D=null}};_.scope.on();const K=_.effect=new Ag(z);_.scope.off();const q=_.update=K.run.bind(K),ee=_.job=K.runIfDirty.bind(K);ee.i=_,ee.id=_.uid,K.scheduler=()=>ku(ee),Ur(_,!0),q()},Ae=(_,I,S)=>{I.component=_;const D=_.vnode.props;_.vnode=I,_.next=null,RT(_,I.props,D,S),kT(_,I.children,S),Nn(),Hg(_),On()},ve=(_,I,S,D,M,j,G,z,K=!1)=>{const q=_&&_.children,ee=_?_.shapeFlag:0,J=I.children,{patchFlag:te,shapeFlag:ie}=I;if(te>0){if(te&128){Zt(q,J,S,D,M,j,G,z,K);return}else if(te&256){Lt(q,J,S,D,M,j,G,z,K);return}}ie&8?(ee&16&&Nt(q,M,j),J!==q&&d(S,J)):ee&16?ie&16?Zt(q,J,S,D,M,j,G,z,K):Nt(q,M,j,!0):(ee&8&&d(S,""),ie&16&&E(J,S,D,M,j,G,z,K))},Lt=(_,I,S,D,M,j,G,z,K)=>{_=_||$r,I=I||$r;const q=_.length,ee=I.length,J=Math.min(q,ee);let te;for(te=0;te<J;te++){const ie=I[te]=K?$n(I[te]):vn(I[te]);O(_[te],ie,S,null,M,j,G,z,K)}q>ee?Nt(_,M,j,!0,!1,J):E(I,S,D,M,j,G,z,K,J)},Zt=(_,I,S,D,M,j,G,z,K)=>{let q=0;const ee=I.length;let J=_.length-1,te=ee-1;for(;q<=J&&q<=te;){const ie=_[q],Ee=I[q]=K?$n(I[q]):vn(I[q]);if(pi(ie,Ee))O(ie,Ee,S,null,M,j,G,z,K);else break;q++}for(;q<=J&&q<=te;){const ie=_[J],Ee=I[te]=K?$n(I[te]):vn(I[te]);if(pi(ie,Ee))O(ie,Ee,S,null,M,j,G,z,K);else break;J--,te--}if(q>J){if(q<=te){const ie=te+1,Ee=ie<ee?I[ie].el:D;for(;q<=te;)O(null,I[q]=K?$n(I[q]):vn(I[q]),S,Ee,M,j,G,z,K),q++}}else if(q>te)for(;q<=J;)$e(_[q],M,j,!0),q++;else{const ie=q,Ee=q,de=new Map;for(q=Ee;q<=te;q++){const pt=I[q]=K?$n(I[q]):vn(I[q]);pt.key!=null&&de.set(pt.key,q)}let fe,Fe=0;const et=te-Ee+1;let Ft=!1,Wt=0;const en=new Array(et);for(q=0;q<et;q++)en[q]=0;for(q=ie;q<=J;q++){const pt=_[q];if(Fe>=et){$e(pt,M,j,!0);continue}let Ot;if(pt.key!=null)Ot=de.get(pt.key);else for(fe=Ee;fe<=te;fe++)if(en[fe-Ee]===0&&pi(pt,I[fe])){Ot=fe;break}Ot===void 0?$e(pt,M,j,!0):(en[Ot-Ee]=q+1,Ot>=Wt?Wt=Ot:Ft=!0,O(pt,I[Ot],S,null,M,j,G,z,K),Fe++)}const ei=Ft?VT(en):$r;for(fe=ei.length-1,q=et-1;q>=0;q--){const pt=Ee+q,Ot=I[pt],wo=I[pt+1],Io=pt+1<ee?wo.el||Vc(wo):D;en[q]===0?O(null,Ot,S,Io,M,j,G,z,K):Ft&&(fe<0||q!==ei[fe]?zt(Ot,S,Io,2):fe--)}}},zt=(_,I,S,D,M=null)=>{const{el:j,type:G,transition:z,children:K,shapeFlag:q}=_;if(q&6){zt(_.component.subTree,I,S,D);return}if(q&128){_.suspense.move(I,S,D);return}if(q&64){G.move(_,I,S,Q);return}if(G===Le){r(j,I,S);for(let J=0;J<K.length;J++)zt(K[J],I,S,D);r(_.anchor,I,S);return}if(G===na){L(_,I,S);return}if(D!==2&&q&1&&z)if(D===0)z.persisted&&!j[Zl]?r(j,I,S):(z.beforeEnter(j),r(j,I,S),Dt(()=>z.enter(j),M));else{const{leave:J,delayLeave:te,afterLeave:ie}=z,Ee=()=>{_.ctx.isUnmounted?s(j):r(j,I,S)},de=()=>{const fe=j._isLeaving||!!j[Zl];j._isLeaving&&j[Zl](!0),z.persisted&&!fe?Ee():J(j,()=>{Ee(),ie&&ie()})};te?te(j,Ee,de):de()}else r(j,I,S)},$e=(_,I,S,D=!1,M=!1)=>{const{type:j,props:G,ref:z,children:K,dynamicChildren:q,shapeFlag:ee,patchFlag:J,dirs:te,cacheIndex:ie,memo:Ee}=_;if((J===-2||q&&q.hasOnce)&&(M=!1),z!=null&&(Nn(),Pi(z,null,S,_,!0),On()),ie!=null&&(!_.ctx||_.ctx===I)&&(I.renderCache[ie]=void 0),ee&256){I.ctx.deactivate(_);return}const de=ee&1&&te,fe=!Ci(_);let Fe;if(fe&&(Fe=G&&G.onVnodeBeforeUnmount)&&gn(Fe,I,_),ee&6)Ut(_.component,S,D);else{if(ee&128){_.suspense.unmount(S,D);return}de&&Lr(_,null,I,"beforeUnmount"),ee&64?_.type.remove(_,I,S,Q,D):q&&!q.hasOnce&&(j!==Le||J>0&&J&64)?Nt(q,I,S,!1,!0):(j===Le&&J&384||!M&&ee&16)&&Nt(K,I,S),D&&qe(_)}const et=Ee!=null&&ie==null;(fe&&(Fe=G&&G.onVnodeUnmounted)||de||et)&&Dt(()=>{Fe&&gn(Fe,I,_),de&&Lr(_,null,I,"unmounted"),et&&(_.el=null)},S)},qe=_=>{const{type:I,el:S,anchor:D,transition:M}=_,j=I===Le;if(j&&!M){Mn(S,D);return}if(I===na){H(_),M&&!M.persisted&&M.afterLeave&&M.afterLeave();return}const G=j?Cc(_):_,z=()=>{j?p(S)&&Mn(S,D):s(S),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(G&&G.shapeFlag&1&&M&&!M.persisted){const{leave:K,delayLeave:q}=M,ee=G.el,J=()=>K(ee,z);q?q(ee,z,J):J()}else z()},Mn=(_,I)=>{let S;for(;_!==I;)S=g(_),s(_),_=S;s(I)},Ut=(_,I,S)=>{const{bum:D,scope:M,job:j,subTree:G,um:z,m:K,a:q}=_;Hd(K),Hd(q),D&&ea(D),M.stop(),j?(j.flags|=8,$e(G,_,I,S)):_.vnode.el&&G&&(G.transition=_.vnode.transition,$e(G,_,I,S)),z&&Dt(z,I),Dt(()=>{_.isUnmounted=!0},I)},Nt=(_,I,S,D=!1,M=!1,j=0)=>{for(let G=j;G<_.length;G++)$e(_[G],I,S,D,M)},U=_=>{if(_.shapeFlag&6)return U(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const I=g(_.anchor||_.el),S=I&&I[QE];return S?g(S):I},Z=(_,I,S)=>{const D=_&&I._vnode?void 0:_&&_.component?_.component.uid:$T();GE(()=>{_==null?I._vnode&&$e(I._vnode,null,null,!0):O(I._vnode||null,_,I,null,null,null,S),I._vnode=_},D)},Q={p:O,um:$e,m:zt,r:qe,mt:At,mc:E,pc:ve,pbc:b,n:U,o:t};return{render:Z,hydrate:void 0,createApp:_T(Z)}}function tc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ur({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function DT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function gm(t,e,n=!1){const r=t.children,s=e.children;if(oe(r)&&oe(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=$n(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&gm(o,l)),l.type===il&&(l.patchFlag===-1&&(l=s[i]=$n(l)),l.el=o.el),l.type===ln&&!l.el&&(l.el=o.el)}}function VT(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function mm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:mm(e)}function Hd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Vc(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Vc(e.subTree):null}const _m=t=>t.__isSuspense;function xT(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):HE(t)}const Le=Symbol.for("v-fgt"),il=Symbol.for("v-txt"),ln=Symbol.for("v-cmt"),na=Symbol.for("v-stc"),Qr=[];let qt=null;function Ie(t=!1){Qr.push(qt=t?null:[])}function ym(){Qr.pop(),qt=Qr[Qr.length-1]||null}let qi=1;function wa(t,e=!1){qi+=t,t<0&&qt&&e&&(qt.hasOnce=!0)}function vm(t){return t.dynamicChildren=qi>0?qt||$r:null,ym(),qi>0&&qt&&qt.push(t),t}function Re(t,e,n,r,s,i){return vm(y(t,e,n,r,s,i,!0))}function MT(t,e,n,r,s){return vm(ce(t,e,n,r,s,!0))}function Hi(t){return t?t.__v_isVNode===!0:!1}function pi(t,e){return t.type===e.type&&t.key===e.key}const Em=({key:t})=>t??null,ra=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Qe(t)||wt(t)||pe(t)?{i:$t,r:t,k:e,f:!!n}:t:null);function y(t,e=null,n=null,r=0,s=null,i=t===Le?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Em(e),ref:e&&ra(e),scopeId:zg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:$t};return l?(Ia(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Qe(n)?8:16),qi>0&&!o&&qt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&qt.push(c),c}const ce=LT;function LT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===lT)&&(t=ln),Hi(t)){const l=Os(t,e,!0);return n&&Ia(l,n),qi>0&&!i&&qt&&(l.shapeFlag&6?qt[qt.indexOf(t)]=l:qt.push(l)),l.patchFlag=-2,l}if(JT(t)&&(t=t.__vccOpts),e){e=UT(e);let{class:l,style:c}=e;l&&!Qe(l)&&(e.class=ao(l)),Oe(c)&&(Pu(c)&&!oe(c)&&(c=dt({},c)),e.style=Ya(c))}const o=Qe(t)?1:_m(t)?128:tl(t)?64:Oe(t)?4:pe(t)?2:0;return y(t,e,n,r,s,o,i,!0)}function UT(t){return t?Pu(t)||cm(t)?dt({},t):t:null}function Os(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?BT(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Em(u),ref:e&&e.ref?n&&i?oe(i)?i.concat(ra(e)):[i,ra(e)]:ra(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Le?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Os(t.ssContent),ssFallback:t.ssFallback&&Os(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce,cacheIndex:t.cacheIndex};return c&&r&&ya(d,c.clone(d)),d}function se(t=" ",e=0){return ce(il,null,t,e)}function FT(t,e){const n=ce(na,null,t);return n.staticCount=e,n}function Ds(t="",e=!1){return e?(Ie(),MT(ln,null,t)):ce(ln,null,t)}function vn(t){return t==null||typeof t=="boolean"?ce(ln):oe(t)?ce(Le,null,t.slice()):Hi(t)?$n(t):ce(il,null,String(t))}function $n(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Os(t)}function Ia(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ia(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!cm(e)?e._ctx=$t:s===3&&$t&&($t.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(pe(e)){if(r&65){Ia(t,{default:e});return}e={default:e,_ctx:$t},n=32}else e=String(e),r&64?(n=16,e=[se(e)]):n=8;t.children=e,t.shapeFlag|=n}function BT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ao([e.class,r.class]));else if(s==="style")e.style=Ya([e.style,r.style]);else if(za(s)){const i=e[s],o=r[s];o&&i!==o&&!(oe(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!Wa(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function gn(t,e,n,r=null){an(t,e,7,[n,r])}const jT=rm();let Tm=0;function $T(){return Tm}function qT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||jT,i={uid:Tm++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new mE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hm(r,s),emitsOptions:sm(r,s),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:r.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=vT.bind(null,i),t.ce&&t.ce(i),i}let Tt=null;const HT=()=>Tt||$t;let Aa,Gi;{const t=Xa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Aa=e("__VUE_INSTANCE_SETTERS__",n=>Tt=n),Gi=e("__VUE_SSR_SETTERS__",n=>Ki=n)}const uo=t=>{const e=Tt;return Aa(t),t.scope.on(),()=>{t.scope.off(),Aa(e)}},Gd=()=>{Tt&&Tt.scope.off(),Aa(null)};function wm(t){return t.vnode.shapeFlag&4}let Ki=!1;function GT(t,e=!1,n=!1){e&&Gi(e);const{props:r,children:s}=t.vnode,i=wm(t);bT(t,r,i,e),CT(t,s,n||e);const o=i?KT(t,e):void 0;return e&&Gi(!1),o}function KT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,uT);const{setup:r}=n;if(r){Nn();const s=t.setupContext=r.length>1?WT(t):null,i=uo(t),o=co(r,t,0,[t.props,s]),l=mg(o);if(On(),i(),(l||t.sp)&&!Ci(t)&&Yg(t),l){if(o.then(Gd,Gd),e)return o.then(c=>{Gi(!0);try{Kd(t,c,e)}finally{Gi(!1)}}).catch(c=>{el(c,t,0)});t.asyncDep=o}else Kd(t,o)}else Im(t)}function Kd(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Oe(e)&&(t.setupState=jg(e)),Im(t)}function Im(t,e,n){const r=t.type;t.render||(t.render=r.render||wn);{const s=uo(t);Nn();try{hT(t)}finally{On(),s()}}}const zT={get(t,e){return vt(t,"get",""),t[e]}};function WT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,zT),slots:t.slots,emit:t.emit,expose:e}}function ol(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(jg(VE(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ki)return ki[n](t)},has(e,n){return n in e||n in ki}})):t.proxy}function QT(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function JT(t){return pe(t)&&"__vccOpts"in t}const xt=(t,e)=>FE(t,e,Ki);function Am(t,e,n){try{wa(-1);const r=arguments.length;return r===2?Oe(e)&&!oe(e)?Hi(e)?ce(t,null,[e]):ce(t,e):ce(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Hi(n)&&(n=[n]),ce(t,e,n))}finally{wa(1)}}const XT="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xc;const zd=typeof window<"u"&&window.trustedTypes;if(zd)try{xc=zd.createPolicy("vue",{createHTML:t=>t})}catch{}const bm=xc?t=>xc.createHTML(t):t=>t,YT="http://www.w3.org/2000/svg",ZT="http://www.w3.org/1998/Math/MathML",jn=typeof document<"u"?document:null,Wd=jn&&jn.createElement("template"),ew={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?jn.createElementNS(YT,t):e==="mathml"?jn.createElementNS(ZT,t):n?jn.createElement(t,{is:n}):jn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>jn.createTextNode(t),createComment:t=>jn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>jn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Wd.innerHTML=bm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Wd.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},tw=Symbol("_vtc");function nw(t,e,n){const r=t[tw];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Qd=Symbol("_vod"),rw=Symbol("_vsh"),sw=Symbol(""),iw=/(?:^|;)\s*display\s*:/;function ow(t,e,n){const r=t.style,s=Qe(n);let i=!1;if(n&&!s){if(e)if(Qe(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&yi(r,l,"")}else for(const o in e)n[o]==null&&yi(r,o,"");for(const o in n){o==="display"&&(i=!0);const l=n[o];l!=null?lw(t,o,!Qe(e)&&e?e[o]:void 0,l)||yi(r,o,l):yi(r,o,"")}}else if(s){if(e!==n){const o=r[sw];o&&(n+=";"+o),r.cssText=n,i=iw.test(n)}}else e&&t.removeAttribute("style");Qd in t&&((!s||e!==n)&&(t[Qd]=i?r.display:""),t[rw]&&(r.display="none"))}const $o=/\s*!important$/;function yi(t,e,n){if(oe(n))n.forEach(r=>yi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))$o.test(n)?t.setProperty(e,n.replace($o,""),"important"):t.setProperty(e,n);else{const r=aw(t,e);$o.test(n)?t.setProperty(ns(r),n.replace($o,""),"important"):t[r]=n}}const Jd=["Webkit","Moz","ms"],nc={};function aw(t,e){const n=nc[e];if(n)return n;let r=kt(e);if(r!=="filter"&&r in t)return nc[e]=r;r=Ja(r);for(let s=0;s<Jd.length;s++){const i=Jd[s]+r;if(i in t)return nc[e]=i}return e}function lw(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Qe(r)&&n===r}const Xd="http://www.w3.org/1999/xlink";function Yd(t,e,n,r,s,i=fE(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Xd,e.slice(6,e.length)):t.setAttributeNS(Xd,e,n):n==null||i&&!Eg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":kn(n)?String(n):n)}function Zd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?bm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Eg(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function jr(t,e,n,r){t.addEventListener(e,n,r)}function cw(t,e,n,r){t.removeEventListener(e,n,r)}const ef=Symbol("_vei");function uw(t,e,n,r,s=null){const i=t[ef]||(t[ef]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=fw(e);if(r){const u=i[e]=mw(r,s);jr(t,l,u,c)}else o&&(cw(t,l,o,c),i[e]=void 0)}}const hw=/(Once|Passive|Capture)$/,dw=/^on:?(?:Once|Passive|Capture)$/;function fw(t){let e,n;for(;(n=t.match(hw))&&!dw.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):ns(t.slice(2)),e]}let rc=0;const pw=Promise.resolve(),gw=()=>rc||(pw.then(()=>rc=0),rc=Date.now());function mw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(oe(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const o=s.slice(),l=[r];for(let c=0;c<o.length&&!r._stopped;c++){const u=o[c];u&&an(u,e,5,l)}}else an(s,e,5,[r])};return n.value=t,n.attached=gw(),n}const tf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,_w=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?nw(t,r,o):e==="style"?ow(t,n,r):za(e)?Wa(e)||uw(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):yw(t,e,r,o))?(Zd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Yd(t,e,r,o,i,e!=="value")):t._isVueCE&&(vw(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Qe(r)))?Zd(t,kt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Yd(t,e,r,o))};function yw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&tf(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return tf(e)&&Qe(n)?!1:e in t}function vw(t,e){const n=t._def.props;if(!n)return!1;const r=kt(e);return Array.isArray(n)?n.some(s=>kt(s)===r):Object.keys(n).some(s=>kt(s)===r)}const ba=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>ea(e,n):e};function Ew(t){t.target.composing=!0}function nf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const qr=Symbol("_assign"),qo=Symbol("_initialValue");function sc(t,e,n){return e&&(t=t.trim()),n&&(t=Tu(t)),t}const Hr={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t.parentNode&&(t.type==="text"?t[qo]=t.defaultValue.replace(/[\r\n]/g,""):t.type==="textarea"&&(t[qo]=t.defaultValue.replace(/\r\n?/g,`
`))),t[qr]=ba(s);const i=r||s.props&&s.props.type==="number";jr(t,e?"change":"input",o=>{o.target.composing||t[qr](sc(t.value,n,i))}),(n||i)&&jr(t,"change",()=>{t.value=sc(t.value,n,i)}),e||(jr(t,"compositionstart",Ew),jr(t,"compositionend",nf),jr(t,"change",nf))},mounted(t,{value:e,modifiers:{trim:n,number:r}}){const s=e??"",i=t[qo];delete t[qo],i!==void 0&&(t.type==="text"||t.type==="textarea")&&t.value!==i?t[qr](sc(t.value,n,r)):t.value=s},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[qr]=ba(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Tu(t.value):t.value,c=e??"";if(l===c)return;const u=t.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c)}},Tw={deep:!0,created(t,e,n){t[qr]=ba(n),jr(t,"change",()=>{const r=t._modelValue,s=ww(t),i=t.checked,o=t[qr];if(oe(r)){const l=Tg(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(Ns(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(Rm(t,i))})},mounted:rf,beforeUpdate(t,e,n){t[qr]=ba(n),rf(t,e,n)}};function rf(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(oe(e))s=Tg(e,r.props.value)>-1;else if(Ns(e))s=e.has(r.props.value);else{if(e===n)return;s=Hs(e,Rm(t,!0))}t.checked!==s&&(t.checked=s)}function ww(t){return"_value"in t?t._value:t.value}function Rm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Iw=["ctrl","shift","alt","meta"],Aw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Iw.some(n=>t[`${n}Key`]&&!e.includes(n))},Sm=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const l=Aw[e[o]];if(l&&l(s,e))return}return t(s,...i)}))},bw=dt({patchProp:_w},ew);let sf;function Rw(){return sf||(sf=NT(bw))}const Sw=((...t)=>{const e=Rw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Cw(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Pw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function Pw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Cw(t){return Qe(t)?document.querySelector(t):t}const ic="/images/logo/logo1.png",kw={class:"site-shell"},Nw={class:"header"},Ow={class:"wrap nav-wrap"},Dw={class:"header-actions"},Vw=["aria-expanded"],xw=["aria-hidden"],Mw={class:"wrap"},Lw={class:"menu-top"},Uw={class:"menu-body"},Fw={class:"menu-main","aria-label":"Seiten"},Bw={class:"menu-side"},jw={class:"footer"},$w={class:"wrap footer-grid"},qw={class:"footer-about"},Hw={class:"footer-links"},Gw={class:"wrap footer-bottom"},Kw={__name:"App",setup(t){const e=We(!1),n=We(null);function r(){e.value=!0,Cu(()=>{var o;return(o=n.value)==null?void 0:o.focus()})}function s(){e.value=!1}Is(e,o=>{document.body.style.overflow=o?"hidden":""});function i(o){o.key==="Escape"&&s()}return Gs(()=>window.addEventListener("keydown",i)),em(()=>{window.removeEventListener("keydown",i),document.body.style.overflow=""}),(o,l)=>{const c=Ea("RouterLink"),u=Ea("RouterView");return Ie(),Re("div",kw,[y("header",Nw,[y("div",Ow,[ce(c,{to:"/",class:"brand","aria-label":"Koptisch-Orthodoxe Kirche Baden-Württemberg – Startseite",onClick:s},{default:xe(()=>[...l[0]||(l[0]=[y("img",{src:ic,alt:"Ikone des heiligen Georg",class:"brand-logo",width:"81",height:"58"},null,-1),y("span",{class:"brand-text"},[y("b",null,[se("KOPTEN "),y("span",{class:"brand-accent"},"BW")]),y("small",null,"Koptisch-Orthodoxe Kirche")],-1)])]),_:1}),y("div",Dw,[ce(c,{class:"header-link",to:"/veranstaltungen"},{default:xe(()=>[...l[1]||(l[1]=[se("Gottesdienste",-1)])]),_:1}),ce(c,{class:"header-link",to:"/kontakt"},{default:xe(()=>[...l[2]||(l[2]=[se("Kontakt",-1)])]),_:1}),y("button",{class:"menu-toggle",type:"button","aria-expanded":e.value,"aria-controls":"main-navigation","aria-label":"Menü öffnen",onClick:r},[...l[3]||(l[3]=[y("span",{class:"menu-label"},"Menü",-1),y("span",{class:"menu-icon","aria-hidden":"true"},[y("span"),y("span"),y("span")],-1)])],8,Vw)])])]),y("div",{id:"main-navigation",class:ao(["menu-overlay",{open:e.value}]),role:"dialog","aria-modal":"true","aria-label":"Hauptnavigation","aria-hidden":!e.value},[y("div",Mw,[y("div",Lw,[ce(c,{to:"/",class:"brand",onClick:s},{default:xe(()=>[...l[4]||(l[4]=[y("img",{src:ic,alt:"",class:"brand-logo",width:"81",height:"58"},null,-1),y("span",{class:"brand-text"},[y("b",null,[se("KOPTEN "),y("span",{class:"brand-accent"},"BW")])],-1)])]),_:1}),y("button",{ref_key:"closeBtn",ref:n,class:"menu-close",type:"button",onClick:s},[...l[5]||(l[5]=[se(" Schließen ",-1),y("span",{"aria-hidden":"true"},"✕",-1)])],512)]),y("div",Uw,[y("nav",Fw,[ce(c,{to:"/",onClick:s},{default:xe(()=>[...l[6]||(l[6]=[y("small",null,"01",-1),se(" Startseite",-1)])]),_:1}),ce(c,{to:"/veranstaltungen",onClick:s},{default:xe(()=>[...l[7]||(l[7]=[y("small",null,"02",-1),se(" Gottesdienste & Termine",-1)])]),_:1}),ce(c,{to:"/galerie",onClick:s},{default:xe(()=>[...l[8]||(l[8]=[y("small",null,"03",-1),se(" Galerie",-1)])]),_:1}),ce(c,{to:"/kontakt",onClick:s},{default:xe(()=>[...l[9]||(l[9]=[y("small",null,"04",-1),se(" Kontakt",-1)])]),_:1})]),y("aside",Bw,[l[13]||(l[13]=y("h3",null,"Unsere Gemeinden",-1)),ce(c,{class:"menu-church",to:"/veranstaltungen",onClick:s},{default:xe(()=>[...l[10]||(l[10]=[y("b",null,"Stuttgart · St. Georg",-1),y("span",null,"Jeden Sonntag · 09:30 Uhr",-1)])]),_:1}),ce(c,{class:"menu-church",to:"/veranstaltungen",onClick:s},{default:xe(()=>[...l[11]||(l[11]=[y("b",null,"Ulm · St. Michael",-1),y("span",null,"Jeden 4. Samstag · 09:30 Uhr",-1)])]),_:1}),ce(c,{class:"menu-church",to:"/veranstaltungen",onClick:s},{default:xe(()=>[...l[12]||(l[12]=[y("b",null,"Tuttlingen · St. Mina & Abraam",-1),y("span",null,"Jeden 2. Samstag · 09:30 Uhr",-1)])]),_:1}),l[14]||(l[14]=y("div",{class:"menu-contact"},[se(" Wurmlinger Str. 49 · 70597 Stuttgart "),y("a",{href:"tel:+49711604252"},"0711 604252"),y("a",{href:"mailto:info@st-georg.com"},"info@st-georg.com")],-1))])])])],10,xw),y("main",null,[ce(u)]),y("footer",jw,[y("div",$w,[y("div",qw,[ce(c,{to:"/",class:"footer-brand"},{default:xe(()=>[...l[15]||(l[15]=[y("img",{src:ic,alt:"",width:"90",height:"64"},null,-1),y("span",null,[se("KOPTEN "),y("span",null,"BW")],-1)])]),_:1}),l[16]||(l[16]=y("p",null," Eine lebendige Glaubensgemeinschaft in Baden-Württemberg. Wir freuen uns, Sie willkommen zu heißen. ",-1))]),y("div",Hw,[l[21]||(l[21]=y("h3",null,"Entdecken",-1)),ce(c,{to:"/"},{default:xe(()=>[...l[17]||(l[17]=[se("Startseite",-1)])]),_:1}),ce(c,{to:"/veranstaltungen"},{default:xe(()=>[...l[18]||(l[18]=[se("Gottesdienste & Termine",-1)])]),_:1}),ce(c,{to:"/galerie"},{default:xe(()=>[...l[19]||(l[19]=[se("Galerie",-1)])]),_:1}),ce(c,{to:"/kontakt"},{default:xe(()=>[...l[20]||(l[20]=[se("Kontakt",-1)])]),_:1})]),l[22]||(l[22]=y("div",{class:"footer-contact"},[y("h3",null,"Kontakt & Besuch"),y("p",null,[se(" St. Georg Koptisch-Orthodoxe Kirche"),y("br"),se(" Wurmlinger Str. 49"),y("br"),se(" 70597 Stuttgart ")]),y("a",{href:"tel:+49711604252"},"0711 604252"),y("a",{href:"mailto:info@st-georg.com"},"info@st-georg.com")],-1))]),y("div",Gw,[y("span",null,"© "+_e(new Date().getFullYear())+" Koptisch-Orthodoxe Kirche Baden-Württemberg",1),ce(c,{to:"/admin"},{default:xe(()=>[...l[23]||(l[23]=[se("Administration",-1)])]),_:1})])])])}}};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const ms=typeof document<"u";function Pm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function zw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Pm(t.default)}const Ce=Object.assign;function oc(t,e){const n={};for(const r in e){const s=e[r];n[r]=cn(s)?s.map(t):t(s)}return n}const Ni=()=>{},cn=Array.isArray;function of(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const Cm=/#/g,Ww=/&/g,Qw=/\//g,Jw=/=/g,Xw=/\?/g,km=/\+/g,Yw=/%5B/g,Zw=/%5D/g,Nm=/%5E/g,eI=/%60/g,Om=/%7B/g,tI=/%7C/g,Dm=/%7D/g,nI=/%20/g;function Vu(t){return t==null?"":encodeURI(""+t).replace(tI,"|").replace(Yw,"[").replace(Zw,"]")}function rI(t){return Vu(t).replace(Om,"{").replace(Dm,"}").replace(Nm,"^")}function Mc(t){return Vu(t).replace(km,"%2B").replace(nI,"+").replace(Cm,"%23").replace(Ww,"%26").replace(eI,"`").replace(Om,"{").replace(Dm,"}").replace(Nm,"^")}function sI(t){return Mc(t).replace(Jw,"%3D")}function iI(t){return Vu(t).replace(Cm,"%23").replace(Xw,"%3F")}function oI(t){return iI(t).replace(Qw,"%2F")}function zi(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const aI=/\/$/,lI=t=>t.replace(aI,"");function ac(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(r=e.slice(0,c),i=e.slice(c,l>0?l:e.length),s=t(i.slice(1))),l>=0&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=dI(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:zi(o)}}function cI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function af(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function uI(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Vs(e.matched[r],n.matched[s])&&Vm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Vs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Vm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!hI(t[n],e[n]))return!1;return!0}function hI(t,e){return cn(t)?lf(t,e):cn(e)?lf(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function lf(t,e){return cn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function dI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const sr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Lc=(function(t){return t.pop="pop",t.push="push",t})({}),lc=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function fI(t){if(!t)if(ms){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),lI(t)}const pI=/^[^#]+#/;function gI(t,e){return t.replace(pI,"#")+e}function mI(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const al=()=>({left:window.scrollX,top:window.scrollY});function _I(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=mI(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function cf(t,e){return(history.state?history.state.position-e:-1)+t}const Uc=new Map;function yI(t,e){Uc.set(t,e)}function vI(t){const e=Uc.get(t);return Uc.delete(t),e}function EI(t){return typeof t=="string"||t&&typeof t=="object"}function xm(t){return typeof t=="string"||typeof t=="symbol"}let ze=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const Mm=Symbol("");ze.MATCHER_NOT_FOUND+"",ze.NAVIGATION_GUARD_REDIRECT+"",ze.NAVIGATION_ABORTED+"",ze.NAVIGATION_CANCELLED+"",ze.NAVIGATION_DUPLICATED+"";function xs(t,e){return Ce(new Error,{type:t,[Mm]:!0},e)}function Bn(t,e){return t instanceof Error&&Mm in t&&(e==null||!!(t.type&e))}const TI=["params","query","hash"];function wI(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of TI)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function II(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(km," "),i=s.indexOf("="),o=zi(i<0?s:s.slice(0,i)),l=i<0?null:zi(s.slice(i+1));if(o in e){let c=e[o];cn(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function uf(t){let e="";for(let n in t){const r=t[n];if(n=sI(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(cn(r)?r.map(s=>s&&Mc(s)):[r&&Mc(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function AI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=cn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const bI=Symbol(""),hf=Symbol(""),xu=Symbol(""),Lm=Symbol(""),Fc=Symbol("");function gi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ar(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=g=>{g===!1?c(xs(ze.NAVIGATION_ABORTED,{from:n,to:e})):g instanceof Error?c(g):EI(g)?c(xs(ze.NAVIGATION_GUARD_REDIRECT,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),l())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(g=>c(g))})}function cc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Pm(c)){const u=(c.__vccOpts||c)[e];u&&i.push(ar(u,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=zw(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const g=(p.__vccOpts||p)[e];return g&&ar(g,n,r,o,l,s)()}))}}return i}function RI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>Vs(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Vs(u,c))||s.push(c))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let SI=()=>location.protocol+"//"+location.host;function Um(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(o);return l[0]!=="/"&&(l="/"+l),af(l,"")}return af(n,t)+r+s}function PI(t,e,n,r){let s=[],i=[],o=null;const l=({state:g})=>{const v=Um(t,location),k=n.value,O=e.value;let V=0;if(g){if(n.value=v,e.value=g,o&&o===k){o=null;return}V=O?g.position-O.position:0}else r(v);s.forEach(B=>{B(n.value,k,{delta:V,type:Lc.pop,direction:V?V>0?lc.forward:lc.back:lc.unknown})})};function c(){o=n.value}function u(g){s.push(g);const v=()=>{const k=s.indexOf(g);k>-1&&s.splice(k,1)};return i.push(v),v}function d(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(Ce({},g.state,{scroll:al()}),"")}}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:c,listen:u,destroy:p}}function df(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?al():null}}function CI(t){const{history:e,location:n}=window,r={value:Um(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:SI()+t+c;try{e[d?"replaceState":"pushState"](u,"",g),s.value=u}catch(v){console.error(v),n[d?"replace":"assign"](g)}}function o(c,u){i(c,Ce({},e.state,df(s.value.back,c,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=c}function l(c,u){const d=Ce({},s.value,e.state,{forward:c,scroll:al()});i(d.current,d,!0),i(c,Ce({},df(r.value,c,null),{position:d.position+1},u),!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function kI(t){t=fI(t);const e=CI(t),n=PI(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ce({location:"",base:t,go:r,createHref:gI.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let Gr=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var st=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(st||{});const NI={type:Gr.Static,value:""},OI=/[a-zA-Z0-9_]/;function DI(t){if(!t)return[[]];if(t==="/")return[[NI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=st.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",d="";function p(){u&&(n===st.Static?i.push({type:Gr.Static,value:u}):n===st.Param||n===st.ParamRegExp||n===st.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Gr.Param,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==st.ParamRegExp){r=n,n=st.EscapeNext;continue}switch(n){case st.Static:c==="/"?(u&&p(),o()):c===":"?(p(),n=st.Param):g();break;case st.EscapeNext:g(),n=r;break;case st.Param:c==="("?n=st.ParamRegExp:OI.test(c)?g():(p(),n=st.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case st.ParamRegExp:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=st.ParamRegExpEnd:d+=c;break;case st.ParamRegExpEnd:p(),n=st.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===st.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}const ff="[^/]+?",VI={sensitive:!1,strict:!1,start:!0,end:!0};var Pt=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(Pt||{});const xI=/[.+*?^${}()[\]/\\]/g;function MI(t,e){const n=Ce({},VI,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[Pt.Root];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let v=Pt.Segment+(n.sensitive?Pt.BonusCaseSensitive:0);if(g.type===Gr.Static)p||(s+="/"),s+=g.value.replace(xI,"\\$&"),v+=Pt.Static;else if(g.type===Gr.Param){const{value:k,repeatable:O,optional:V,regexp:B}=g;i.push({name:k,repeatable:O,optional:V});const N=B||ff;if(N!==ff){v+=Pt.BonusCustomRegExp;try{`${N}`}catch(H){throw new Error(`Invalid custom RegExp for param "${k}" (${N}): `+H.message)}}let L=O?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;p||(L=V&&u.length<2?`(?:/${L})`:"/"+L),V&&(L+="?"),s+=L,v+=Pt.Dynamic,V&&(v+=Pt.BonusOptional),O&&(v+=Pt.BonusRepeatable),N===".*"&&(v+=Pt.BonusWildcard)}d.push(v)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=Pt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const d=u.match(o),p={};if(!d)return null;for(let g=1;g<d.length;g++){const v=d[g]||"",k=i[g-1];p[k.name]=v&&k.repeatable?v.split("/"):v}return p}function c(u){let d="",p=!1;for(const g of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const v of g)if(v.type===Gr.Static)d+=v.value;else if(v.type===Gr.Param){const{value:k,repeatable:O,optional:V}=v,B=k in u?u[k]:"";if(cn(B)&&!O)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const N=cn(B)?B.join("/"):B;if(!N)if(V)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${k}"`);d+=N}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function LI(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===Pt.Static+Pt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Pt.Static+Pt.Segment?1:-1:0}function Fm(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=LI(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(pf(r))return 1;if(pf(s))return-1}return s.length-r.length}function pf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const UI={strict:!1,end:!0,sensitive:!1};function FI(t,e,n){const r=MI(DI(t.path),n),s=Ce(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function BI(t,e){const n=[],r=new Map;e=of(UI,e);function s(p){return r.get(p)}function i(p,g,v){const k=!v,O=mf(p);O.aliasOf=v&&v.record;const V=of(e,p),B=[O];if("alias"in p){const H=typeof p.alias=="string"?[p.alias]:p.alias;for(const ue of H)B.push(mf(Ce({},O,{components:v?v.record.components:O.components,path:ue,aliasOf:v?v.record:O})))}let N,L;for(const H of B){const{path:ue}=H;if(g&&ue[0]!=="/"){const me=g.record.path,A=me[me.length-1]==="/"?"":"/";H.path=g.record.path+(ue&&A+ue)}if(N=FI(H,g,V),v?v.alias.push(N):(L=L||N,L!==N&&L.alias.push(N),k&&p.name&&!_f(N)&&o(p.name)),Bm(N)&&c(N),O.children){const me=O.children;for(let A=0;A<me.length;A++)i(me[A],N,v&&v.children[A])}v=v||N}return L?()=>{o(L)}:Ni}function o(p){if(xm(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const g=qI(p,n);n.splice(g,0,p),p.record.name&&!_f(p)&&r.set(p.record.name,p)}function u(p,g){let v,k={},O,V;if("name"in p&&p.name){if(v=r.get(p.name),!v)throw xs(ze.MATCHER_NOT_FOUND,{location:p});V=v.record.name,k=Ce(gf(g.params,v.keys.filter(L=>!L.optional).concat(v.parent?v.parent.keys.filter(L=>L.optional):[]).map(L=>L.name)),p.params&&gf(p.params,v.keys.map(L=>L.name))),O=v.stringify(k)}else if(p.path!=null)O=p.path,v=n.find(L=>L.re.test(O)),v&&(k=v.parse(O),V=v.record.name);else{if(v=g.name?r.get(g.name):n.find(L=>L.re.test(g.path)),!v)throw xs(ze.MATCHER_NOT_FOUND,{location:p,currentLocation:g});V=v.record.name,k=Ce({},g.params,p.params),O=v.stringify(k)}const B=[];let N=v;for(;N;)B.unshift(N.record),N=N.parent;return{name:V,path:O,params:k,matched:B,meta:$I(B)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function gf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function mf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:jI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function jI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function _f(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function $I(t){return t.reduce((e,n)=>Ce(e,n.meta),{})}function qI(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Fm(t,e[i])<0?r=i:n=i+1}const s=HI(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function HI(t){let e=t;for(;e=e.parent;)if(Bm(e)&&Fm(t,e)===0)return e}function Bm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function yf(t){const e=Wn(xu),n=Wn(Lm),r=xt(()=>{const c=Wr(t.to);return e.resolve(c)}),s=xt(()=>{const{matched:c}=r.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(Vs.bind(null,d));if(g>-1)return g;const v=vf(c[u-2]);return u>1&&vf(d)===v&&p[p.length-1].path!==v?p.findIndex(Vs.bind(null,c[u-2])):g}),i=xt(()=>s.value>-1&&QI(n.params,r.value.params)),o=xt(()=>s.value>-1&&s.value===n.matched.length-1&&Vm(n.params,r.value.params));function l(c={}){if(WI(c)){const u=e[Wr(t.replace)?"replace":"push"](Wr(t.to)).catch(Ni);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:xt(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function GI(t){return t.length===1?t[0]:t}const KI=Xg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:yf,setup(t,{slots:e}){const n=lo(yf(t)),{options:r}=Wn(xu),s=xt(()=>({[Ef(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ef(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&GI(e.default(n));return t.custom?i:Am("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),zI=KI;function WI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function QI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!cn(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function vf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ef=(t,e,n)=>t??e??n,JI=Xg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Wn(Fc),s=xt(()=>t.route||r.value),i=Wn(hf,0),o=xt(()=>{let u=Wr(i);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=xt(()=>s.value.matched[o.value]);ta(hf,xt(()=>o.value+1)),ta(bI,l),ta(Fc,s);const c=We();return Is(()=>[c.value,l.value,t.name],([u,d,p],[g,v,k])=>{d&&(d.instances[p]=u,v&&v!==d&&u&&u===g&&(d.leaveGuards.size||(d.leaveGuards=v.leaveGuards),d.updateGuards.size||(d.updateGuards=v.updateGuards))),u&&d&&(!v||!Vs(d,v)||!g)&&(d.enterCallbacks[p]||[]).forEach(O=>O(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,p=l.value,g=p&&p.components[d];if(!g)return Tf(n.default,{Component:g,route:u});const v=p.props[d],k=v?v===!0?u.params:typeof v=="function"?v(u):v:null,V=Am(g,Ce({},k,e,{onVnodeUnmounted:B=>{B.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return Tf(n.default,{Component:V,route:u})||V}}});function Tf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const XI=JI;function YI(t){const e=BI(t.routes,t),n=t.parseQuery||II,r=t.stringifyQuery||uf,s=t.history,i=gi(),o=gi(),l=gi(),c=xE(sr);let u=sr;ms&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=oc.bind(null,U=>""+U),p=oc.bind(null,oI),g=oc.bind(null,zi);function v(U,Z){let Q,re;return xm(U)?(Q=e.getRecordMatcher(U),re=Z):re=U,e.addRoute(re,Q)}function k(U){const Z=e.getRecordMatcher(U);Z&&e.removeRoute(Z)}function O(){return e.getRoutes().map(U=>U.record)}function V(U){return!!e.getRecordMatcher(U)}function B(U,Z){if(Z=Ce({},Z||c.value),typeof U=="string"){const D=ac(n,U,Z.path),M=e.resolve({path:D.path},Z),j=s.createHref(D.fullPath);return Ce(D,M,{params:g(M.params),hash:zi(D.hash),redirectedFrom:void 0,href:j})}let Q;if(U.path!=null)Q=Ce({},U,{path:ac(n,U.path,Z.path).path});else{const D=Ce({},U.params);for(const M in D)D[M]==null&&delete D[M];Q=Ce({},U,{params:p(D)}),Z.params=p(Z.params)}const re=e.resolve(Q,Z),_=U.hash||"";re.params=d(g(re.params));const I=cI(r,Ce({},U,{hash:rI(_),path:re.path})),S=s.createHref(I);return Ce({fullPath:I,hash:_,query:r===uf?AI(U.query):U.query||{}},re,{redirectedFrom:void 0,href:S})}function N(U){return typeof U=="string"?ac(n,U,c.value.path):Ce({},U)}function L(U,Z){if(u!==U)return xs(ze.NAVIGATION_CANCELLED,{from:Z,to:U})}function H(U){return A(U)}function ue(U){return H(Ce(N(U),{replace:!0}))}function me(U,Z){const Q=U.matched[U.matched.length-1];if(Q&&Q.redirect){const{redirect:re}=Q;let _=typeof re=="function"?re(U,Z):re;return typeof _=="string"&&(_=_.includes("?")||_.includes("#")?_=N(_):{path:_},_.params={}),Ce({query:U.query,hash:U.hash,params:_.path!=null?{}:U.params},_)}}function A(U,Z){const Q=u=B(U),re=c.value,_=U.state,I=U.force,S=U.replace===!0,D=me(Q,re);if(D)return A(Ce(N(D),{state:typeof D=="object"?Ce({},_,D.state):_,force:I,replace:S}),Z||Q);const M=Q;M.redirectedFrom=Z;let j;return!I&&uI(r,re,Q)&&(j=xs(ze.NAVIGATION_DUPLICATED,{to:M,from:re}),zt(re,re,!0,!1)),(j?Promise.resolve(j):b(M,re)).catch(G=>Bn(G)?Bn(G,ze.NAVIGATION_GUARD_REDIRECT)?G:Zt(G):ve(G,M,re)).then(G=>{if(G){if(Bn(G,ze.NAVIGATION_GUARD_REDIRECT))return A(Ce({replace:S},N(G.to),{state:typeof G.to=="object"?Ce({},_,G.to.state):_,force:I}),Z||M)}else G=P(M,re,!0,S,_);return R(M,re,G),G})}function E(U,Z){const Q=L(U,Z);return Q?Promise.reject(Q):Promise.resolve()}function w(U){const Z=Mn.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(U):U()}function b(U,Z){let Q;const[re,_,I]=RI(U,Z);Q=cc(re.reverse(),"beforeRouteLeave",U,Z);for(const D of re)D.leaveGuards.forEach(M=>{Q.push(ar(M,U,Z))});const S=E.bind(null,U,Z);return Q.push(S),Nt(Q).then(()=>{Q=[];for(const D of i.list())Q.push(ar(D,U,Z));return Q.push(S),Nt(Q)}).then(()=>{Q=cc(_,"beforeRouteUpdate",U,Z);for(const D of _)D.updateGuards.forEach(M=>{Q.push(ar(M,U,Z))});return Q.push(S),Nt(Q)}).then(()=>{Q=[];for(const D of I)if(D.beforeEnter)if(cn(D.beforeEnter))for(const M of D.beforeEnter)Q.push(ar(M,U,Z));else Q.push(ar(D.beforeEnter,U,Z));return Q.push(S),Nt(Q)}).then(()=>(U.matched.forEach(D=>D.enterCallbacks={}),Q=cc(I,"beforeRouteEnter",U,Z,w),Q.push(S),Nt(Q))).then(()=>{Q=[];for(const D of o.list())Q.push(ar(D,U,Z));return Q.push(S),Nt(Q)}).catch(D=>Bn(D,ze.NAVIGATION_CANCELLED)?D:Promise.reject(D))}function R(U,Z,Q){l.list().forEach(re=>w(()=>re(U,Z,Q)))}function P(U,Z,Q,re,_){const I=L(U,Z);if(I)return I;const S=Z===sr,D=ms?history.state:{};Q&&(re||S?s.replace(U.fullPath,Ce({scroll:S&&D&&D.scroll},_)):s.push(U.fullPath,_)),c.value=U,zt(U,Z,Q,S),Zt()}let T;function At(){T||(T=s.listen((U,Z,Q)=>{if(!Ut.listening)return;const re=B(U),_=me(re,Ut.currentRoute.value);if(_){A(Ce(_,{replace:!0,force:!0}),re).catch(Ni);return}u=re;const I=c.value;ms&&yI(cf(I.fullPath,Q.delta),al()),b(re,I).catch(S=>Bn(S,ze.NAVIGATION_ABORTED|ze.NAVIGATION_CANCELLED)?S:Bn(S,ze.NAVIGATION_GUARD_REDIRECT)?(A(Ce(N(S.to),{force:!0}),re).then(D=>{Bn(D,ze.NAVIGATION_ABORTED|ze.NAVIGATION_DUPLICATED)&&!Q.delta&&Q.type===Lc.pop&&s.go(-1,!1)}).catch(Ni),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),ve(S,re,I))).then(S=>{S=S||P(re,I,!1),S&&(Q.delta&&!Bn(S,ze.NAVIGATION_CANCELLED)?s.go(-Q.delta,!1):Q.type===Lc.pop&&Bn(S,ze.NAVIGATION_ABORTED|ze.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),R(re,I,S)}).catch(Ni)}))}let Kt=gi(),Ze=gi(),Ae;function ve(U,Z,Q){Zt(U);const re=Ze.list();return re.length?re.forEach(_=>_(U,Z,Q)):console.error(U),Promise.reject(U)}function Lt(){return Ae&&c.value!==sr?Promise.resolve():new Promise((U,Z)=>{Kt.add([U,Z])})}function Zt(U){return Ae||(Ae=!U,At(),Kt.list().forEach(([Z,Q])=>U?Q(U):Z()),Kt.reset()),U}function zt(U,Z,Q,re){const{scrollBehavior:_}=t;if(!ms||!_)return Promise.resolve();const I=!Q&&vI(cf(U.fullPath,0))||(re||!Q)&&history.state&&history.state.scroll||null;return Cu().then(()=>_(U,Z,I)).then(S=>S&&_I(S)).catch(S=>ve(S,U,Z))}const $e=U=>s.go(U);let qe;const Mn=new Set,Ut={currentRoute:c,listening:!0,addRoute:v,removeRoute:k,clearRoutes:e.clearRoutes,hasRoute:V,getRoutes:O,resolve:B,options:t,push:H,replace:ue,go:$e,back:()=>$e(-1),forward:()=>$e(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Ze.add,isReady:Lt,install(U){U.component("RouterLink",zI),U.component("RouterView",XI),U.config.globalProperties.$router=Ut,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>Wr(c)}),ms&&!qe&&c.value===sr&&(qe=!0,H(s.location).catch(re=>{}));const Z={};for(const re in sr)Object.defineProperty(Z,re,{get:()=>c.value[re],enumerable:!0});U.provide(xu,Ut),U.provide(Lm,Fg(Z)),U.provide(Fc,c);const Q=U.unmount;Mn.add(U),U.unmount=function(){Mn.delete(U),Mn.size<1&&(u=sr,T&&T(),T=null,c.value=sr,qe=!1,Ae=!1),Q()}}};function Nt(U){return U.reduce((Z,Q)=>Z.then(()=>w(Q)),Promise.resolve())}return Ut}const ZI="/images/hero/hero-gemeinde.jpg",eA=["src","alt"],tA={key:1,class:"icon-placeholder"},Ts={__name:"IconImage",props:{src:{type:String,required:!0},title:{type:String,required:!0},ratio:{type:String,default:"3 / 4"},size:{type:String,default:"900 × 1200 px"}},setup(t){const e=t,n=We(!1);return Is(()=>e.src,()=>{n.value=!1}),(r,s)=>(Ie(),Re("div",{class:"icon-image",style:Ya({aspectRatio:t.ratio})},[n.value?Ds("",!0):(Ie(),Re("img",{key:0,src:t.src,alt:t.title,loading:"lazy",onError:s[0]||(s[0]=i=>n.value=!0)},null,40,eA)),n.value?(Ie(),Re("div",tA,[s[1]||(s[1]=y("span",{class:"placeholder-cross"},"✝",-1)),y("strong",null,_e(t.title),1),y("code",null,_e(t.src),1),y("small",null,_e(t.size)+" · Ratio "+_e(t.ratio),1)])):Ds("",!0)],4))}};function jm(){let t;Gs(()=>{const e=document.querySelectorAll(".reveal");if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||!("IntersectionObserver"in window)){e.forEach(n=>n.classList.add("is-visible"));return}t=new IntersectionObserver(n=>n.forEach(r=>{r.isIntersecting&&(r.target.classList.add("is-visible"),t.unobserve(r.target))}),{threshold:.12,rootMargin:"0px 0px -30px 0px"}),e.forEach(n=>t.observe(n))}),rl(()=>t==null?void 0:t.disconnect())}const nA={class:"home-page"},rA={class:"hero"},sA={class:"wrap hero-grid"},iA={class:"hero-text"},oA={class:"hero-actions"},aA={class:"hero-card","aria-label":"Nächste Gottesdienste"},lA={class:"next-date"},cA={class:"next-info"},uA={class:"times-section"},hA={class:"wrap section reveal"},dA={class:"times-list"},fA={class:"time-day"},pA={class:"time-church"},gA=["href"],mA={class:"churches-section"},_A={class:"wrap section"},yA={class:"church-grid"},vA={class:"church-visual"},EA={class:"church-num"},TA={class:"church-body"},wA={class:"church-saint"},IA={class:"church-meta"},AA=["href"],bA={class:"map-section"},RA={class:"wrap section reveal"},SA={class:"map-layout"},PA={class:"map-tabs"},CA=["onClick"],kA=["href"],NA={class:"map-frame"},OA=["src"],DA={key:1,class:"map-consent"},VA={class:"gallery-preview"},xA={class:"wrap section"},MA={class:"section-heading reveal"},LA={class:"preview-grid reveal"},UA={class:"cta-band"},FA={class:"wrap cta-inner"},BA={__name:"HomeView",setup(t){jm();const e=[{city:"Stuttgart",saint:"St. Georg",rhythm:"Jede Woche",day:"Sonntag",address:"Wurmlinger Str. 49, 70597 Stuttgart",icon:"/images/icons/st-georg.jpg",route:"https://maps.google.com/?q=Wurmlinger+Strasse+49+70597+Stuttgart",matches:l=>l.getDay()===0},{city:"Ulm",saint:"St. Michael · Kreuzkirche",rhythm:"Monatlich",day:"4. Samstag",address:"Abt-Ulrich-Str. 2, 89079 Ulm",icon:"/images/icons/st-michael-ulm.jpg",route:"https://maps.google.com/?q=Abt-Ulrich-Str+2+Ulm",matches:l=>l.getDay()===6&&Math.ceil(l.getDate()/7)===4},{city:"Tuttlingen",saint:"St. Mina und Abraam",rhythm:"Monatlich",day:"2. Samstag",address:"Kolonie Str. 21, 78532 Tuttlingen",icon:"/images/icons/st-mina-abraam-tuttlingen.jpg",route:"https://maps.google.com/?q=Kolonie+Strasse+21+Tuttlingen",matches:l=>l.getDay()===6&&Math.ceil(l.getDate()/7)===2}];function n(l){const c=new Date;for(let u=0;u<70;u++){if(u===0&&c.getHours()>=12)continue;const d=new Date(c.getFullYear(),c.getMonth(),c.getDate()+u);if(l(d))return d}return null}const r=xt(()=>e.map(l=>({city:l.city,date:n(l.matches)})).filter(l=>l.date).sort((l,c)=>l.date-c.date).map(l=>({city:l.city,day:l.date.getDate(),month:l.date.toLocaleDateString("de-DE",{month:"short"}).replace(".",""),weekday:l.date.toLocaleDateString("de-DE",{weekday:"long"})}))),s=We(0),i=We(!1),o=xt(()=>`https://maps.google.com/maps?q=${encodeURIComponent(e[s.value].address)}&z=15&output=embed`);return(l,c)=>{const u=Ea("RouterLink");return Ie(),Re("div",nA,[y("section",rA,[c[8]||(c[8]=y("div",{class:"hero-bg","aria-hidden":"true"},[y("img",{src:ZI,alt:""})],-1)),c[9]||(c[9]=y("div",{class:"hero-shade","aria-hidden":"true"},null,-1)),y("div",sA,[y("div",iA,[c[3]||(c[3]=y("span",{class:"eyebrow light"},"Koptisch-Orthodoxe Kirche",-1)),c[4]||(c[4]=y("h1",null,[se("Koptisch-Orthodoxe Kirche "),y("em",null,"Baden-Württemberg")],-1)),c[5]||(c[5]=y("p",{class:"hero-lead"}," Gottesdienste und Informationen unserer Gemeinden in Stuttgart, Ulm und Tuttlingen. Seien Sie herzlich willkommen. ",-1)),y("div",oA,[ce(u,{class:"btn btn-gold",to:"/veranstaltungen"},{default:xe(()=>[...c[1]||(c[1]=[se("Gottesdienstzeiten ",-1),y("span",null,"→",-1)])]),_:1}),c[2]||(c[2]=y("a",{class:"text-link light-link",href:"https://kopten.de/kalender.html",target:"_blank",rel:"noopener noreferrer"},"Koptischer Kalender ↗",-1))])]),y("aside",aA,[c[7]||(c[7]=y("h2",null,"Nächste Gottesdienste",-1)),(Ie(!0),Re(Le,null,Gn(r.value,d=>(Ie(),Re("div",{key:d.city,class:"next-row"},[y("div",lA,[y("b",null,_e(d.day),1),y("span",null,_e(d.month),1)]),y("div",cA,[y("b",null,_e(d.city),1),y("span",null,_e(d.weekday)+" · 09:30 Uhr",1)])]))),128)),ce(u,{class:"text-link light-link",to:"/veranstaltungen"},{default:xe(()=>[...c[6]||(c[6]=[se("Alle Termine →",-1)])]),_:1})])]),c[10]||(c[10]=y("span",{class:"scroll-hint","aria-hidden":"true"},null,-1))]),y("section",uA,[y("div",hA,[c[12]||(c[12]=y("div",{class:"section-heading"},[y("div",null,[y("span",{class:"eyebrow"},"Gottesdienstzeiten"),y("h2",null,[se("Wann wir "),y("em",null,"zusammenkommen")])]),y("p",{class:"muted"},"Die Göttliche Liturgie feiern wir an drei Orten in Baden-Württemberg.")],-1)),y("div",dA,[(Ie(),Re(Le,null,Gn(e,d=>y("article",{key:d.city,class:"time-row"},[y("div",fA,[y("small",null,_e(d.rhythm),1),y("b",null,_e(d.day),1)]),c[11]||(c[11]=y("div",{class:"time-clock"},[se("09:30 "),y("small",null,"UHR")],-1)),y("div",pA,[y("h3",null,_e(d.city)+" · "+_e(d.saint),1),y("p",null,_e(d.address),1)]),y("a",{class:"text-link",target:"_blank",rel:"noopener noreferrer",href:d.route},"Route ↗",8,gA)])),64))]),c[13]||(c[13]=y("p",{class:"schedule-note"},"Bitte beachten Sie mögliche Änderungen an Feiertagen. Aktuelle Termine finden Sie unter Gottesdienste & Termine.",-1))])]),y("section",mA,[y("div",_A,[c[15]||(c[15]=y("div",{class:"section-heading reveal"},[y("div",null,[y("span",{class:"eyebrow light"},"Unsere Gemeinden"),y("h2",null,[se("Drei Orte, "),y("em",null,"ein Glaube")])]),y("p",{class:"muted"},"Jede Gemeinde ist einem Heiligen anvertraut – dessen Ikone Sie hier sehen.")],-1)),y("div",yA,[(Ie(),Re(Le,null,Gn(e,(d,p)=>y("article",{key:d.city,class:"church-card reveal"},[y("div",vA,[y("span",EA,"0"+_e(p+1),1),ce(Ts,{src:d.icon,title:`Ikone · ${d.saint}`,ratio:"3 / 5",size:"800 × 1400 px"},null,8,["src","title"])]),y("div",TA,[c[14]||(c[14]=y("span",{class:"church-name"},"Koptisch-Orthodoxe Gemeinde",-1)),y("h3",null,_e(d.city),1),y("p",wA,_e(d.saint),1),y("div",IA,[y("b",null,_e(d.day)+" · 09:30 Uhr",1),se(_e(d.address),1)]),y("a",{class:"text-link church-route",target:"_blank",rel:"noopener noreferrer",href:d.route},"Route planen ↗",8,AA)])])),64))])])]),y("section",bA,[y("div",RA,[y("div",SA,[y("div",null,[c[16]||(c[16]=y("span",{class:"eyebrow"},"Standorte",-1)),c[17]||(c[17]=y("h2",{class:"map-title"},[se("So finden Sie "),y("em",null,"zu uns")],-1)),y("div",PA,[(Ie(),Re(Le,null,Gn(e,(d,p)=>y("button",{key:d.city,type:"button",class:ao(["map-tab",{active:s.value===p}]),onClick:g=>s.value=p},[y("b",null,_e(d.city)+" · "+_e(d.saint),1),y("span",null,_e(d.address),1)],10,CA)),64))]),y("a",{class:"text-link",target:"_blank",rel:"noopener noreferrer",href:e[s.value].route},"In Google Maps öffnen ↗",8,kA)]),y("div",NA,[i.value?(Ie(),Re("iframe",{key:s.value,src:o.value,title:"Karte",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade",allowfullscreen:""},null,8,OA)):(Ie(),Re("div",DA,[c[18]||(c[18]=y("span",{class:"pin","aria-hidden":"true"},"⌖",-1)),c[19]||(c[19]=y("p",null,"Beim Laden der Karte werden Daten an Google übertragen. Möchten Sie die Karte anzeigen?",-1)),y("button",{type:"button",class:"btn btn-dark",onClick:c[0]||(c[0]=d=>i.value=!0)},"Karte laden")]))])])])]),c[27]||(c[27]=y("section",{class:"verse-band"},[y("div",{class:"wrap reveal"},[y("div",{class:"ornament","aria-hidden":"true"},"✠"),y("blockquote",null,"„Ich freute mich, als man mir sagte: Lasst uns zum Haus des Herrn gehen.“"),y("small",null,"Psalm 122,1")])],-1)),y("section",VA,[y("div",xA,[y("div",MA,[c[21]||(c[21]=y("div",null,[y("span",{class:"eyebrow"},"Einblicke"),y("h2",null,[se("Unser Gemeindeleben "),y("em",null,"in Bildern")])],-1)),ce(u,{class:"text-link",to:"/galerie"},{default:xe(()=>[...c[20]||(c[20]=[se("Alle Bilder ansehen →",-1)])]),_:1})]),y("div",LA,[ce(u,{class:"preview-photo photo-one",to:"/galerie"},{default:xe(()=>[ce(Ts,{src:"/images/churches/st-georg-interior.jpg",title:"Kircheninnenraum",ratio:"4 / 3",size:"1600 × 1200 px"}),c[22]||(c[22]=y("span",null,"Unsere Kirchen",-1))]),_:1}),ce(u,{class:"preview-photo photo-two",to:"/galerie"},{default:xe(()=>[ce(Ts,{src:"/images/hero/hero-gemeinde.jpg",title:"Altarraum",ratio:"4 / 3",size:"1600 × 1200 px"}),c[23]||(c[23]=y("span",null,"Glaube & Tradition",-1))]),_:1}),ce(u,{class:"preview-photo photo-three",to:"/galerie"},{default:xe(()=>[ce(Ts,{src:"/images/gallery/gemeindefest.jpg",title:"Gemeindefest",ratio:"4 / 3",size:"1600 × 1200 px"}),c[24]||(c[24]=y("span",null,"Gemeinschaft erleben",-1))]),_:1})])])]),y("section",UA,[y("div",FA,[c[26]||(c[26]=y("div",null,[y("h2",null,[se("Besuchen Sie uns – "),y("em",null,"Sie sind willkommen.")]),y("p",null,"Haben Sie Fragen zu den Gottesdiensten oder möchten Sie uns kennenlernen? Wir helfen Ihnen gerne weiter.")],-1)),ce(u,{class:"btn btn-dark",to:"/kontakt"},{default:xe(()=>[...c[25]||(c[25]=[se("Kontakt aufnehmen →",-1)])]),_:1})])])])}}},jA=()=>{};var wf={};/**
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
 */const $m=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},$A=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Mu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|u>>6,v=u&63;c||(v=64,o||(g=64)),r.push(n[d],n[p],n[g],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($m(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$A(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new qA;const g=i<<2|l>>4;if(r.push(g),u!==64){const v=l<<4&240|u>>2;if(r.push(v),p!==64){const k=u<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const HA=function(t){const e=$m(t);return Mu.encodeByteArray(e,!0)},Ra=function(t){return HA(t).replace(/\./g,"")},qm=function(t){try{return Mu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function GA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const KA=()=>GA().__FIREBASE_DEFAULTS__,zA=()=>{if(typeof process>"u"||typeof wf>"u")return;const t=wf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},WA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&qm(t[1]);return e&&JSON.parse(e)},ll=()=>{try{return jA()||KA()||zA()||WA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hm=t=>{var e,n;return(n=(e=ll())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Lu=t=>{const e=Hm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Gm=()=>{var t;return(t=ll())===null||t===void 0?void 0:t.config},Km=t=>{var e;return(e=ll())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Bc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function er(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function cl(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function zm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ra(JSON.stringify(n)),Ra(JSON.stringify(o)),""].join(".")}const Oi={};function QA(){const t={prod:[],emulator:[]};for(const e of Object.keys(Oi))Oi[e]?t.emulator.push(e):t.prod.push(e);return t}function JA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let If=!1;function ul(t,e){if(typeof window>"u"||typeof document>"u"||!er(window.location.host)||Oi[t]===e||Oi[t]||If)return;Oi[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=QA().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,v){g.setAttribute("width","24"),g.setAttribute("id",v),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{If=!0,o()},g}function d(g,v){g.setAttribute("id",v),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=JA(r),v=n("text"),k=document.getElementById(v)||document.createElement("span"),O=n("learnmore"),V=document.getElementById(O)||document.createElement("a"),B=n("preprendIcon"),N=document.getElementById(B)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const L=g.element;l(L),d(V,O);const H=u();c(N,B),L.append(N,k,V,H),document.body.appendChild(L)}i?(k.innerText="Preview backend disconnected.",N.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function XA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function YA(){var t;const e=(t=ll())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ZA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function eb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nb(){const t=It();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rb(){return!YA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Wm(){try{return typeof indexedDB=="object"}catch{return!1}}function sb(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const ib="FirebaseError";class pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ib,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ks.prototype.create)}}class Ks{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ob(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new pn(s,l,r)}}function ob(t,e){return t.replace(ab,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ab=/\{\$([^}]+)}/g;function lb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Af(i)&&Af(o)){if(!Xr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Af(t){return t!==null&&typeof t=="object"}/**
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
 */function ho(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function vi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ei(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function cb(t,e){const n=new ub(t,e);return n.subscribe.bind(n)}class ub{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");hb(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=uc),s.error===void 0&&(s.error=uc),s.complete===void 0&&(s.complete=uc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function uc(){}/**
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
 */function He(t){return t&&t._delegate?t._delegate:t}class un{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class db{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Bc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pb(e))try{this.getOrInitializeService({instanceIdentifier:Br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Br){return this.instances.has(e)}getOptions(e=Br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Br){return this.component?this.component.multipleInstances?e:Br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fb(t){return t===Br?void 0:t}function pb(t){return t.instantiationMode==="EAGER"}/**
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
 */class gb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new db(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const mb={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},_b=Te.INFO,yb={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},vb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=yb[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hl{constructor(e){this.name=e,this._logLevel=_b,this._logHandler=vb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const Eb=(t,e)=>e.some(n=>t instanceof n);let bf,Rf;function Tb(){return bf||(bf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wb(){return Rf||(Rf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qm=new WeakMap,jc=new WeakMap,Jm=new WeakMap,hc=new WeakMap,Uu=new WeakMap;function Ib(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(_r(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Qm.set(n,t)}).catch(()=>{}),Uu.set(e,t),e}function Ab(t){if(jc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});jc.set(t,e)}let $c={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return jc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Jm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _r(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bb(t){$c=t($c)}function Rb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(dc(this),e,...n);return Jm.set(r,e.sort?e.sort():[e]),_r(r)}:wb().includes(t)?function(...e){return t.apply(dc(this),e),_r(Qm.get(this))}:function(...e){return _r(t.apply(dc(this),e))}}function Sb(t){return typeof t=="function"?Rb(t):(t instanceof IDBTransaction&&Ab(t),Eb(t,Tb())?new Proxy(t,$c):t)}function _r(t){if(t instanceof IDBRequest)return Ib(t);if(hc.has(t))return hc.get(t);const e=Sb(t);return e!==t&&(hc.set(t,e),Uu.set(e,t)),e}const dc=t=>Uu.get(t);function Pb(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=_r(o);return r&&o.addEventListener("upgradeneeded",c=>{r(_r(o.result),c.oldVersion,c.newVersion,_r(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Cb=["get","getKey","getAll","getAllKeys","count"],kb=["put","add","delete","clear"],fc=new Map;function Sf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fc.get(e))return fc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=kb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Cb.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return fc.set(e,i),i}bb(t=>({...t,get:(e,n,r)=>Sf(e,n)||t.get(e,n,r),has:(e,n)=>!!Sf(e,n)||t.has(e,n)}));/**
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
 */class Nb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ob(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ob(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qc="@firebase/app",Pf="0.13.2";/**
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
 */const Qn=new hl("@firebase/app"),Db="@firebase/app-compat",Vb="@firebase/analytics-compat",xb="@firebase/analytics",Mb="@firebase/app-check-compat",Lb="@firebase/app-check",Ub="@firebase/auth",Fb="@firebase/auth-compat",Bb="@firebase/database",jb="@firebase/data-connect",$b="@firebase/database-compat",qb="@firebase/functions",Hb="@firebase/functions-compat",Gb="@firebase/installations",Kb="@firebase/installations-compat",zb="@firebase/messaging",Wb="@firebase/messaging-compat",Qb="@firebase/performance",Jb="@firebase/performance-compat",Xb="@firebase/remote-config",Yb="@firebase/remote-config-compat",Zb="@firebase/storage",eR="@firebase/storage-compat",tR="@firebase/firestore",nR="@firebase/ai",rR="@firebase/firestore-compat",sR="firebase",iR="11.10.0";/**
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
 */const Hc="[DEFAULT]",oR={[qc]:"fire-core",[Db]:"fire-core-compat",[xb]:"fire-analytics",[Vb]:"fire-analytics-compat",[Lb]:"fire-app-check",[Mb]:"fire-app-check-compat",[Ub]:"fire-auth",[Fb]:"fire-auth-compat",[Bb]:"fire-rtdb",[jb]:"fire-data-connect",[$b]:"fire-rtdb-compat",[qb]:"fire-fn",[Hb]:"fire-fn-compat",[Gb]:"fire-iid",[Kb]:"fire-iid-compat",[zb]:"fire-fcm",[Wb]:"fire-fcm-compat",[Qb]:"fire-perf",[Jb]:"fire-perf-compat",[Xb]:"fire-rc",[Yb]:"fire-rc-compat",[Zb]:"fire-gcs",[eR]:"fire-gcs-compat",[tR]:"fire-fst",[rR]:"fire-fst-compat",[nR]:"fire-vertex","fire-js":"fire-js",[sR]:"fire-js-all"};/**
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
 */const Sa=new Map,aR=new Map,Gc=new Map;function Cf(t,e){try{t.container.addComponent(e)}catch(n){Qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vn(t){const e=t.name;if(Gc.has(e))return Qn.debug(`There were multiple attempts to register component ${e}.`),!1;Gc.set(e,t);for(const n of Sa.values())Cf(n,t);for(const n of aR.values())Cf(n,t);return!0}function fo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function jt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const lR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yr=new Ks("app","Firebase",lR);/**
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
 */class cR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yr.create("app-deleted",{appName:this._name})}}/**
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
 */const rs=iR;function Xm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Hc,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw yr.create("bad-app-name",{appName:String(s)});if(n||(n=Gm()),!n)throw yr.create("no-options");const i=Sa.get(s);if(i){if(Xr(n,i.options)&&Xr(r,i.config))return i;throw yr.create("duplicate-app",{appName:s})}const o=new gb(s);for(const c of Gc.values())o.addComponent(c);const l=new cR(n,r,o);return Sa.set(s,l),l}function dl(t=Hc){const e=Sa.get(t);if(!e&&t===Hc&&Gm())return Xm();if(!e)throw yr.create("no-app",{appName:t});return e}function Gt(t,e,n){var r;let s=(r=oR[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qn.warn(l.join(" "));return}Vn(new un(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const uR="firebase-heartbeat-database",hR=1,Wi="firebase-heartbeat-store";let pc=null;function Ym(){return pc||(pc=Pb(uR,hR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Wi)}catch(n){console.warn(n)}}}}).catch(t=>{throw yr.create("idb-open",{originalErrorMessage:t.message})})),pc}async function dR(t){try{const n=(await Ym()).transaction(Wi),r=await n.objectStore(Wi).get(Zm(t));return await n.done,r}catch(e){if(e instanceof pn)Qn.warn(e.message);else{const n=yr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qn.warn(n.message)}}}async function kf(t,e){try{const r=(await Ym()).transaction(Wi,"readwrite");await r.objectStore(Wi).put(e,Zm(t)),await r.done}catch(n){if(n instanceof pn)Qn.warn(n.message);else{const r=yr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qn.warn(r.message)}}}function Zm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const fR=1024,pR=30;class gR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _R(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Nf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>pR){const o=yR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Qn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Nf(),{heartbeatsToSend:r,unsentEntries:s}=mR(this._heartbeatsCache.heartbeats),i=Ra(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Qn.warn(n),""}}}function Nf(){return new Date().toISOString().substring(0,10)}function mR(t,e=fR){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Of(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Of(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _R{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wm()?sb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await dR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return kf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return kf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Of(t){return Ra(JSON.stringify({version:2,heartbeats:t})).length}function yR(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function vR(t){Vn(new un("platform-logger",e=>new Nb(e),"PRIVATE")),Vn(new un("heartbeat",e=>new gR(e),"PRIVATE")),Gt(qc,Pf,t),Gt(qc,Pf,"esm2017"),Gt("fire-js","")}vR("");var Df=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vr,e_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,E){function w(){}w.prototype=E.prototype,A.D=E.prototype,A.prototype=new w,A.prototype.constructor=A,A.C=function(b,R,P){for(var T=Array(arguments.length-2),At=2;At<arguments.length;At++)T[At-2]=arguments[At];return E.prototype[R].apply(b,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,E,w){w||(w=0);var b=Array(16);if(typeof E=="string")for(var R=0;16>R;++R)b[R]=E.charCodeAt(w++)|E.charCodeAt(w++)<<8|E.charCodeAt(w++)<<16|E.charCodeAt(w++)<<24;else for(R=0;16>R;++R)b[R]=E[w++]|E[w++]<<8|E[w++]<<16|E[w++]<<24;E=A.g[0],w=A.g[1],R=A.g[2];var P=A.g[3],T=E+(P^w&(R^P))+b[0]+3614090360&4294967295;E=w+(T<<7&4294967295|T>>>25),T=P+(R^E&(w^R))+b[1]+3905402710&4294967295,P=E+(T<<12&4294967295|T>>>20),T=R+(w^P&(E^w))+b[2]+606105819&4294967295,R=P+(T<<17&4294967295|T>>>15),T=w+(E^R&(P^E))+b[3]+3250441966&4294967295,w=R+(T<<22&4294967295|T>>>10),T=E+(P^w&(R^P))+b[4]+4118548399&4294967295,E=w+(T<<7&4294967295|T>>>25),T=P+(R^E&(w^R))+b[5]+1200080426&4294967295,P=E+(T<<12&4294967295|T>>>20),T=R+(w^P&(E^w))+b[6]+2821735955&4294967295,R=P+(T<<17&4294967295|T>>>15),T=w+(E^R&(P^E))+b[7]+4249261313&4294967295,w=R+(T<<22&4294967295|T>>>10),T=E+(P^w&(R^P))+b[8]+1770035416&4294967295,E=w+(T<<7&4294967295|T>>>25),T=P+(R^E&(w^R))+b[9]+2336552879&4294967295,P=E+(T<<12&4294967295|T>>>20),T=R+(w^P&(E^w))+b[10]+4294925233&4294967295,R=P+(T<<17&4294967295|T>>>15),T=w+(E^R&(P^E))+b[11]+2304563134&4294967295,w=R+(T<<22&4294967295|T>>>10),T=E+(P^w&(R^P))+b[12]+1804603682&4294967295,E=w+(T<<7&4294967295|T>>>25),T=P+(R^E&(w^R))+b[13]+4254626195&4294967295,P=E+(T<<12&4294967295|T>>>20),T=R+(w^P&(E^w))+b[14]+2792965006&4294967295,R=P+(T<<17&4294967295|T>>>15),T=w+(E^R&(P^E))+b[15]+1236535329&4294967295,w=R+(T<<22&4294967295|T>>>10),T=E+(R^P&(w^R))+b[1]+4129170786&4294967295,E=w+(T<<5&4294967295|T>>>27),T=P+(w^R&(E^w))+b[6]+3225465664&4294967295,P=E+(T<<9&4294967295|T>>>23),T=R+(E^w&(P^E))+b[11]+643717713&4294967295,R=P+(T<<14&4294967295|T>>>18),T=w+(P^E&(R^P))+b[0]+3921069994&4294967295,w=R+(T<<20&4294967295|T>>>12),T=E+(R^P&(w^R))+b[5]+3593408605&4294967295,E=w+(T<<5&4294967295|T>>>27),T=P+(w^R&(E^w))+b[10]+38016083&4294967295,P=E+(T<<9&4294967295|T>>>23),T=R+(E^w&(P^E))+b[15]+3634488961&4294967295,R=P+(T<<14&4294967295|T>>>18),T=w+(P^E&(R^P))+b[4]+3889429448&4294967295,w=R+(T<<20&4294967295|T>>>12),T=E+(R^P&(w^R))+b[9]+568446438&4294967295,E=w+(T<<5&4294967295|T>>>27),T=P+(w^R&(E^w))+b[14]+3275163606&4294967295,P=E+(T<<9&4294967295|T>>>23),T=R+(E^w&(P^E))+b[3]+4107603335&4294967295,R=P+(T<<14&4294967295|T>>>18),T=w+(P^E&(R^P))+b[8]+1163531501&4294967295,w=R+(T<<20&4294967295|T>>>12),T=E+(R^P&(w^R))+b[13]+2850285829&4294967295,E=w+(T<<5&4294967295|T>>>27),T=P+(w^R&(E^w))+b[2]+4243563512&4294967295,P=E+(T<<9&4294967295|T>>>23),T=R+(E^w&(P^E))+b[7]+1735328473&4294967295,R=P+(T<<14&4294967295|T>>>18),T=w+(P^E&(R^P))+b[12]+2368359562&4294967295,w=R+(T<<20&4294967295|T>>>12),T=E+(w^R^P)+b[5]+4294588738&4294967295,E=w+(T<<4&4294967295|T>>>28),T=P+(E^w^R)+b[8]+2272392833&4294967295,P=E+(T<<11&4294967295|T>>>21),T=R+(P^E^w)+b[11]+1839030562&4294967295,R=P+(T<<16&4294967295|T>>>16),T=w+(R^P^E)+b[14]+4259657740&4294967295,w=R+(T<<23&4294967295|T>>>9),T=E+(w^R^P)+b[1]+2763975236&4294967295,E=w+(T<<4&4294967295|T>>>28),T=P+(E^w^R)+b[4]+1272893353&4294967295,P=E+(T<<11&4294967295|T>>>21),T=R+(P^E^w)+b[7]+4139469664&4294967295,R=P+(T<<16&4294967295|T>>>16),T=w+(R^P^E)+b[10]+3200236656&4294967295,w=R+(T<<23&4294967295|T>>>9),T=E+(w^R^P)+b[13]+681279174&4294967295,E=w+(T<<4&4294967295|T>>>28),T=P+(E^w^R)+b[0]+3936430074&4294967295,P=E+(T<<11&4294967295|T>>>21),T=R+(P^E^w)+b[3]+3572445317&4294967295,R=P+(T<<16&4294967295|T>>>16),T=w+(R^P^E)+b[6]+76029189&4294967295,w=R+(T<<23&4294967295|T>>>9),T=E+(w^R^P)+b[9]+3654602809&4294967295,E=w+(T<<4&4294967295|T>>>28),T=P+(E^w^R)+b[12]+3873151461&4294967295,P=E+(T<<11&4294967295|T>>>21),T=R+(P^E^w)+b[15]+530742520&4294967295,R=P+(T<<16&4294967295|T>>>16),T=w+(R^P^E)+b[2]+3299628645&4294967295,w=R+(T<<23&4294967295|T>>>9),T=E+(R^(w|~P))+b[0]+4096336452&4294967295,E=w+(T<<6&4294967295|T>>>26),T=P+(w^(E|~R))+b[7]+1126891415&4294967295,P=E+(T<<10&4294967295|T>>>22),T=R+(E^(P|~w))+b[14]+2878612391&4294967295,R=P+(T<<15&4294967295|T>>>17),T=w+(P^(R|~E))+b[5]+4237533241&4294967295,w=R+(T<<21&4294967295|T>>>11),T=E+(R^(w|~P))+b[12]+1700485571&4294967295,E=w+(T<<6&4294967295|T>>>26),T=P+(w^(E|~R))+b[3]+2399980690&4294967295,P=E+(T<<10&4294967295|T>>>22),T=R+(E^(P|~w))+b[10]+4293915773&4294967295,R=P+(T<<15&4294967295|T>>>17),T=w+(P^(R|~E))+b[1]+2240044497&4294967295,w=R+(T<<21&4294967295|T>>>11),T=E+(R^(w|~P))+b[8]+1873313359&4294967295,E=w+(T<<6&4294967295|T>>>26),T=P+(w^(E|~R))+b[15]+4264355552&4294967295,P=E+(T<<10&4294967295|T>>>22),T=R+(E^(P|~w))+b[6]+2734768916&4294967295,R=P+(T<<15&4294967295|T>>>17),T=w+(P^(R|~E))+b[13]+1309151649&4294967295,w=R+(T<<21&4294967295|T>>>11),T=E+(R^(w|~P))+b[4]+4149444226&4294967295,E=w+(T<<6&4294967295|T>>>26),T=P+(w^(E|~R))+b[11]+3174756917&4294967295,P=E+(T<<10&4294967295|T>>>22),T=R+(E^(P|~w))+b[2]+718787259&4294967295,R=P+(T<<15&4294967295|T>>>17),T=w+(P^(R|~E))+b[9]+3951481745&4294967295,A.g[0]=A.g[0]+E&4294967295,A.g[1]=A.g[1]+(R+(T<<21&4294967295|T>>>11))&4294967295,A.g[2]=A.g[2]+R&4294967295,A.g[3]=A.g[3]+P&4294967295}r.prototype.u=function(A,E){E===void 0&&(E=A.length);for(var w=E-this.blockSize,b=this.B,R=this.h,P=0;P<E;){if(R==0)for(;P<=w;)s(this,A,P),P+=this.blockSize;if(typeof A=="string"){for(;P<E;)if(b[R++]=A.charCodeAt(P++),R==this.blockSize){s(this,b),R=0;break}}else for(;P<E;)if(b[R++]=A[P++],R==this.blockSize){s(this,b),R=0;break}}this.h=R,this.o+=E},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var E=1;E<A.length-8;++E)A[E]=0;var w=8*this.o;for(E=A.length-8;E<A.length;++E)A[E]=w&255,w/=256;for(this.u(A),A=Array(16),E=w=0;4>E;++E)for(var b=0;32>b;b+=8)A[w++]=this.g[E]>>>b&255;return A};function i(A,E){var w=l;return Object.prototype.hasOwnProperty.call(w,A)?w[A]:w[A]=E(A)}function o(A,E){this.h=E;for(var w=[],b=!0,R=A.length-1;0<=R;R--){var P=A[R]|0;b&&P==E||(w[R]=P,b=!1)}this.g=w}var l={};function c(A){return-128<=A&&128>A?i(A,function(E){return new o([E|0],0>E?-1:0)}):new o([A|0],0>A?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return V(u(-A));for(var E=[],w=1,b=0;A>=w;b++)E[b]=A/w|0,w*=4294967296;return new o(E,0)}function d(A,E){if(A.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(A.charAt(0)=="-")return V(d(A.substring(1),E));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=u(Math.pow(E,8)),b=p,R=0;R<A.length;R+=8){var P=Math.min(8,A.length-R),T=parseInt(A.substring(R,R+P),E);8>P?(P=u(Math.pow(E,P)),b=b.j(P).add(u(T))):(b=b.j(w),b=b.add(u(T)))}return b}var p=c(0),g=c(1),v=c(16777216);t=o.prototype,t.m=function(){if(O(this))return-V(this).m();for(var A=0,E=1,w=0;w<this.g.length;w++){var b=this.i(w);A+=(0<=b?b:4294967296+b)*E,E*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(k(this))return"0";if(O(this))return"-"+V(this).toString(A);for(var E=u(Math.pow(A,6)),w=this,b="";;){var R=H(w,E).g;w=B(w,R.j(E));var P=((0<w.g.length?w.g[0]:w.h)>>>0).toString(A);if(w=R,k(w))return P+b;for(;6>P.length;)P="0"+P;b=P+b}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function k(A){if(A.h!=0)return!1;for(var E=0;E<A.g.length;E++)if(A.g[E]!=0)return!1;return!0}function O(A){return A.h==-1}t.l=function(A){return A=B(this,A),O(A)?-1:k(A)?0:1};function V(A){for(var E=A.g.length,w=[],b=0;b<E;b++)w[b]=~A.g[b];return new o(w,~A.h).add(g)}t.abs=function(){return O(this)?V(this):this},t.add=function(A){for(var E=Math.max(this.g.length,A.g.length),w=[],b=0,R=0;R<=E;R++){var P=b+(this.i(R)&65535)+(A.i(R)&65535),T=(P>>>16)+(this.i(R)>>>16)+(A.i(R)>>>16);b=T>>>16,P&=65535,T&=65535,w[R]=T<<16|P}return new o(w,w[w.length-1]&-2147483648?-1:0)};function B(A,E){return A.add(V(E))}t.j=function(A){if(k(this)||k(A))return p;if(O(this))return O(A)?V(this).j(V(A)):V(V(this).j(A));if(O(A))return V(this.j(V(A)));if(0>this.l(v)&&0>A.l(v))return u(this.m()*A.m());for(var E=this.g.length+A.g.length,w=[],b=0;b<2*E;b++)w[b]=0;for(b=0;b<this.g.length;b++)for(var R=0;R<A.g.length;R++){var P=this.i(b)>>>16,T=this.i(b)&65535,At=A.i(R)>>>16,Kt=A.i(R)&65535;w[2*b+2*R]+=T*Kt,N(w,2*b+2*R),w[2*b+2*R+1]+=P*Kt,N(w,2*b+2*R+1),w[2*b+2*R+1]+=T*At,N(w,2*b+2*R+1),w[2*b+2*R+2]+=P*At,N(w,2*b+2*R+2)}for(b=0;b<E;b++)w[b]=w[2*b+1]<<16|w[2*b];for(b=E;b<2*E;b++)w[b]=0;return new o(w,0)};function N(A,E){for(;(A[E]&65535)!=A[E];)A[E+1]+=A[E]>>>16,A[E]&=65535,E++}function L(A,E){this.g=A,this.h=E}function H(A,E){if(k(E))throw Error("division by zero");if(k(A))return new L(p,p);if(O(A))return E=H(V(A),E),new L(V(E.g),V(E.h));if(O(E))return E=H(A,V(E)),new L(V(E.g),E.h);if(30<A.g.length){if(O(A)||O(E))throw Error("slowDivide_ only works with positive integers.");for(var w=g,b=E;0>=b.l(A);)w=ue(w),b=ue(b);var R=me(w,1),P=me(b,1);for(b=me(b,2),w=me(w,2);!k(b);){var T=P.add(b);0>=T.l(A)&&(R=R.add(w),P=T),b=me(b,1),w=me(w,1)}return E=B(A,R.j(E)),new L(R,E)}for(R=p;0<=A.l(E);){for(w=Math.max(1,Math.floor(A.m()/E.m())),b=Math.ceil(Math.log(w)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),P=u(w),T=P.j(E);O(T)||0<T.l(A);)w-=b,P=u(w),T=P.j(E);k(P)&&(P=g),R=R.add(P),A=B(A,T)}return new L(R,A)}t.A=function(A){return H(this,A).h},t.and=function(A){for(var E=Math.max(this.g.length,A.g.length),w=[],b=0;b<E;b++)w[b]=this.i(b)&A.i(b);return new o(w,this.h&A.h)},t.or=function(A){for(var E=Math.max(this.g.length,A.g.length),w=[],b=0;b<E;b++)w[b]=this.i(b)|A.i(b);return new o(w,this.h|A.h)},t.xor=function(A){for(var E=Math.max(this.g.length,A.g.length),w=[],b=0;b<E;b++)w[b]=this.i(b)^A.i(b);return new o(w,this.h^A.h)};function ue(A){for(var E=A.g.length+1,w=[],b=0;b<E;b++)w[b]=A.i(b)<<1|A.i(b-1)>>>31;return new o(w,A.h)}function me(A,E){var w=E>>5;E%=32;for(var b=A.g.length-w,R=[],P=0;P<b;P++)R[P]=0<E?A.i(P+w)>>>E|A.i(P+w+1)<<32-E:A.i(P+w);return new o(R,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,e_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,vr=o}).apply(typeof Df<"u"?Df:typeof self<"u"?self:typeof window<"u"?window:{});var Ho=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var t_,Ti,n_,sa,Kc,r_,s_,i_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ho=="object"&&Ho];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var C=a[m];if(!(C in f))break e;f=f[C]}a=a[a.length-1],m=f[a],h=h(m),h!=m&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,m=!1,C={next:function(){if(!m&&f<a.length){var x=f++;return{value:h(x,a[x]),done:!1}}return m=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,m),a.apply(h,C)}}return function(){return a.apply(h,arguments)}}function g(a,h,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function v(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function k(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(m,C,x){for(var W=Array(arguments.length-2),De=2;De<arguments.length;De++)W[De-2]=arguments[De];return h.prototype[C].apply(m,W)}}function O(a){const h=a.length;if(0<h){const f=Array(h);for(let m=0;m<h;m++)f[m]=a[m];return f}return[]}function V(a,h){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(c(m)){const C=a.length||0,x=m.length||0;a.length=C+x;for(let W=0;W<x;W++)a[C+W]=m[W]}else a.push(m)}}class B{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function N(a){return/^[\s\xa0]*$/.test(a)}function L(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function H(a){return H[" "](a),a}H[" "]=function(){};var ue=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function me(a,h,f){for(const m in a)h.call(f,a[m],m,a)}function A(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function E(a){const h={};for(const f in a)h[f]=a[f];return h}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(a,h){let f,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(f in m)a[f]=m[f];for(let x=0;x<w.length;x++)f=w[x],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function R(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function P(a){l.setTimeout(()=>{throw a},0)}function T(){var a=Lt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class At{constructor(){this.h=this.g=null}add(h,f){const m=Kt.get();m.set(h,f),this.h?this.h.next=m:this.g=m,this.h=m}}var Kt=new B(()=>new Ze,a=>a.reset());class Ze{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ae,ve=!1,Lt=new At,Zt=()=>{const a=l.Promise.resolve(void 0);Ae=()=>{a.then(zt)}};var zt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(f){P(f)}var h=Kt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}ve=!1};function $e(){this.s=this.s,this.C=this.C}$e.prototype.s=!1,$e.prototype.ma=function(){this.s||(this.s=!0,this.N())},$e.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function qe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}qe.prototype.h=function(){this.defaultPrevented=!0};var Mn=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a})();function Ut(a,h){if(qe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(ue){e:{try{H(h.nodeName);var C=!0;break e}catch{}C=!1}C||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Nt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ut.aa.h.call(this)}}k(Ut,qe);var Nt={2:"touch",3:"pen",4:"mouse"};Ut.prototype.h=function(){Ut.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var U="closure_listenable_"+(1e6*Math.random()|0),Z=0;function Q(a,h,f,m,C){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!m,this.ha=C,this.key=++Z,this.da=this.fa=!1}function re(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function _(a){this.src=a,this.g={},this.h=0}_.prototype.add=function(a,h,f,m,C){var x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);var W=S(a,h,m,C);return-1<W?(h=a[W],f||(h.fa=!1)):(h=new Q(h,this.src,x,!!m,C),h.fa=f,a.push(h)),h};function I(a,h){var f=h.type;if(f in a.g){var m=a.g[f],C=Array.prototype.indexOf.call(m,h,void 0),x;(x=0<=C)&&Array.prototype.splice.call(m,C,1),x&&(re(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function S(a,h,f,m){for(var C=0;C<a.length;++C){var x=a[C];if(!x.da&&x.listener==h&&x.capture==!!f&&x.ha==m)return C}return-1}var D="closure_lm_"+(1e6*Math.random()|0),M={};function j(a,h,f,m,C){if(Array.isArray(h)){for(var x=0;x<h.length;x++)j(a,h[x],f,m,C);return null}return f=Ee(f),a&&a[U]?a.K(h,f,u(m)?!!m.capture:!1,C):G(a,h,f,!1,m,C)}function G(a,h,f,m,C,x){if(!h)throw Error("Invalid event type");var W=u(C)?!!C.capture:!!C,De=te(a);if(De||(a[D]=De=new _(a)),f=De.add(h,f,m,W,x),f.proxy)return f;if(m=z(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)Mn||(C=W),C===void 0&&(C=!1),a.addEventListener(h.toString(),m,C);else if(a.attachEvent)a.attachEvent(ee(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function z(){function a(f){return h.call(a.src,a.listener,f)}const h=J;return a}function K(a,h,f,m,C){if(Array.isArray(h))for(var x=0;x<h.length;x++)K(a,h[x],f,m,C);else m=u(m)?!!m.capture:!!m,f=Ee(f),a&&a[U]?(a=a.i,h=String(h).toString(),h in a.g&&(x=a.g[h],f=S(x,f,m,C),-1<f&&(re(x[f]),Array.prototype.splice.call(x,f,1),x.length==0&&(delete a.g[h],a.h--)))):a&&(a=te(a))&&(h=a.g[h.toString()],a=-1,h&&(a=S(h,f,m,C)),(f=-1<a?h[a]:null)&&q(f))}function q(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[U])I(h.i,a);else{var f=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(f,m,a.capture):h.detachEvent?h.detachEvent(ee(f),m):h.addListener&&h.removeListener&&h.removeListener(m),(f=te(h))?(I(f,a),f.h==0&&(f.src=null,h[D]=null)):re(a)}}}function ee(a){return a in M?M[a]:M[a]="on"+a}function J(a,h){if(a.da)a=!0;else{h=new Ut(h,this);var f=a.listener,m=a.ha||a.src;a.fa&&q(a),a=f.call(m,h)}return a}function te(a){return a=a[D],a instanceof _?a:null}var ie="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ee(a){return typeof a=="function"?a:(a[ie]||(a[ie]=function(h){return a.handleEvent(h)}),a[ie])}function de(){$e.call(this),this.i=new _(this),this.M=this,this.F=null}k(de,$e),de.prototype[U]=!0,de.prototype.removeEventListener=function(a,h,f,m){K(this,a,h,f,m)};function fe(a,h){var f,m=a.F;if(m)for(f=[];m;m=m.F)f.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new qe(h,a);else if(h instanceof qe)h.target=h.target||a;else{var C=h;h=new qe(m,a),b(h,C)}if(C=!0,f)for(var x=f.length-1;0<=x;x--){var W=h.g=f[x];C=Fe(W,m,!0,h)&&C}if(W=h.g=a,C=Fe(W,m,!0,h)&&C,C=Fe(W,m,!1,h)&&C,f)for(x=0;x<f.length;x++)W=h.g=f[x],C=Fe(W,m,!1,h)&&C}de.prototype.N=function(){if(de.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],m=0;m<f.length;m++)re(f[m]);delete a.g[h],a.h--}}this.F=null},de.prototype.K=function(a,h,f,m){return this.i.add(String(a),h,!1,f,m)},de.prototype.L=function(a,h,f,m){return this.i.add(String(a),h,!0,f,m)};function Fe(a,h,f,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var C=!0,x=0;x<h.length;++x){var W=h[x];if(W&&!W.da&&W.capture==f){var De=W.listener,lt=W.ha||W.src;W.fa&&I(a.i,W),C=De.call(lt,m)!==!1&&C}}return C&&!m.defaultPrevented}function et(a,h,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Ft(a){a.g=et(()=>{a.g=null,a.i&&(a.i=!1,Ft(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Wt extends $e{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ft(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function en(a){$e.call(this),this.h=a,this.g={}}k(en,$e);var ei=[];function pt(a){me(a.g,function(h,f){this.g.hasOwnProperty(f)&&q(h)},a),a.g={}}en.prototype.N=function(){en.aa.N.call(this),pt(this)},en.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ot=l.JSON.stringify,wo=l.JSON.parse,Io=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ol(){}Ol.prototype.h=null;function Mh(a){return a.h||(a.h=a.i())}function Lh(){}var ti={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Dl(){qe.call(this,"d")}k(Dl,qe);function Vl(){qe.call(this,"c")}k(Vl,qe);var Dr={},Uh=null;function Ao(){return Uh=Uh||new de}Dr.La="serverreachability";function Fh(a){qe.call(this,Dr.La,a)}k(Fh,qe);function ni(a){const h=Ao();fe(h,new Fh(h))}Dr.STAT_EVENT="statevent";function Bh(a,h){qe.call(this,Dr.STAT_EVENT,a),this.stat=h}k(Bh,qe);function bt(a){const h=Ao();fe(h,new Bh(h,a))}Dr.Ma="timingevent";function jh(a,h){qe.call(this,Dr.Ma,a),this.size=h}k(jh,qe);function ri(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function si(){this.g=!0}si.prototype.xa=function(){this.g=!1};function xv(a,h,f,m,C,x){a.info(function(){if(a.g)if(x)for(var W="",De=x.split("&"),lt=0;lt<De.length;lt++){var Se=De[lt].split("=");if(1<Se.length){var gt=Se[0];Se=Se[1];var mt=gt.split("_");W=2<=mt.length&&mt[1]=="type"?W+(gt+"="+Se+"&"):W+(gt+"=redacted&")}}else W=null;else W=x;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+h+`
`+f+`
`+W})}function Mv(a,h,f,m,C,x,W){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+h+`
`+f+`
`+x+" "+W})}function us(a,h,f,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Uv(a,f)+(m?" "+m:"")})}function Lv(a,h){a.info(function(){return"TIMEOUT: "+h})}si.prototype.info=function(){};function Uv(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var m=f[a];if(!(2>m.length)){var C=m[1];if(Array.isArray(C)&&!(1>C.length)){var x=C[0];if(x!="noop"&&x!="stop"&&x!="close")for(var W=1;W<C.length;W++)C[W]=""}}}}return Ot(f)}catch{return h}}var bo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$h={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},xl;function Ro(){}k(Ro,Ol),Ro.prototype.g=function(){return new XMLHttpRequest},Ro.prototype.i=function(){return{}},xl=new Ro;function tr(a,h,f,m){this.j=a,this.i=h,this.l=f,this.R=m||1,this.U=new en(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new qh}function qh(){this.i=null,this.g="",this.h=!1}var Hh={},Ml={};function Ll(a,h,f){a.L=1,a.v=ko(Ln(h)),a.m=f,a.P=!0,Gh(a,null)}function Gh(a,h){a.F=Date.now(),So(a),a.A=Ln(a.v);var f=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),id(f.i,"t",m),a.C=0,f=a.j.J,a.h=new qh,a.g=Id(a.j,f?h:null,!a.m),0<a.O&&(a.M=new Wt(g(a.Y,a,a.g),a.O)),h=a.U,f=a.g,m=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(ei[0]=C.toString()),C=ei);for(var x=0;x<C.length;x++){var W=j(f,C[x],m||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=a.H?E(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ni(),xv(a.i,a.u,a.A,a.l,a.R,a.m)}tr.prototype.ca=function(a){a=a.target;const h=this.M;h&&Un(a)==3?h.j():this.Y(a)},tr.prototype.Y=function(a){try{if(a==this.g)e:{const mt=Un(this.g);var h=this.g.Ba();const fs=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||dd(this.g)))){this.J||mt!=4||h==7||(h==8||0>=fs?ni(3):ni(2)),Ul(this);var f=this.g.Z();this.X=f;t:if(Kh(this)){var m=dd(this.g);a="";var C=m.length,x=Un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vr(this),ii(this);var W="";break t}this.h.i=new l.TextDecoder}for(h=0;h<C;h++)this.h.h=!0,a+=this.h.i.decode(m[h],{stream:!(x&&h==C-1)});m.length=0,this.h.g+=a,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=f==200,Mv(this.i,this.u,this.A,this.l,this.R,mt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var De,lt=this.g;if((De=lt.g?lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(De)){var Se=De;break t}}Se=null}if(f=Se)us(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fl(this,f);else{this.o=!1,this.s=3,bt(12),Vr(this),ii(this);break e}}if(this.P){f=!0;let tn;for(;!this.J&&this.C<W.length;)if(tn=Fv(this,W),tn==Ml){mt==4&&(this.s=4,bt(14),f=!1),us(this.i,this.l,null,"[Incomplete Response]");break}else if(tn==Hh){this.s=4,bt(15),us(this.i,this.l,W,"[Invalid Chunk]"),f=!1;break}else us(this.i,this.l,tn,null),Fl(this,tn);if(Kh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||W.length!=0||this.h.h||(this.s=1,bt(16),f=!1),this.o=this.o&&f,!f)us(this.i,this.l,W,"[Invalid Chunked Response]"),Vr(this),ii(this);else if(0<W.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),Gl(gt),gt.M=!0,bt(11))}}else us(this.i,this.l,W,null),Fl(this,W);mt==4&&Vr(this),this.o&&!this.J&&(mt==4?vd(this.j,this):(this.o=!1,So(this)))}else nE(this.g),f==400&&0<W.indexOf("Unknown SID")?(this.s=3,bt(12)):(this.s=0,bt(13)),Vr(this),ii(this)}}}catch{}finally{}};function Kh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Fv(a,h){var f=a.C,m=h.indexOf(`
`,f);return m==-1?Ml:(f=Number(h.substring(f,m)),isNaN(f)?Hh:(m+=1,m+f>h.length?Ml:(h=h.slice(m,m+f),a.C=m+f,h)))}tr.prototype.cancel=function(){this.J=!0,Vr(this)};function So(a){a.S=Date.now()+a.I,zh(a,a.I)}function zh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ri(g(a.ba,a),h)}function Ul(a){a.B&&(l.clearTimeout(a.B),a.B=null)}tr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Lv(this.i,this.A),this.L!=2&&(ni(),bt(17)),Vr(this),this.s=2,ii(this)):zh(this,this.S-a)};function ii(a){a.j.G==0||a.J||vd(a.j,a)}function Vr(a){Ul(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,pt(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Fl(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Bl(f.h,a))){if(!a.K&&Bl(f.h,a)&&f.G==3){try{var m=f.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Mo(f),Vo(f);else break e;Hl(f),bt(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=ri(g(f.Za,f),6e3));if(1>=Jh(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Mr(f,11)}else if((a.K||f.g==a)&&Mo(f),!N(h))for(C=f.Da.g.parse(h),h=0;h<C.length;h++){let Se=C[h];if(f.T=Se[0],Se=Se[1],f.G==2)if(Se[0]=="c"){f.K=Se[1],f.ia=Se[2];const gt=Se[3];gt!=null&&(f.la=gt,f.j.info("VER="+f.la));const mt=Se[4];mt!=null&&(f.Aa=mt,f.j.info("SVER="+f.Aa));const fs=Se[5];fs!=null&&typeof fs=="number"&&0<fs&&(m=1.5*fs,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const tn=a.g;if(tn){const Uo=tn.g?tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Uo){var x=m.h;x.g||Uo.indexOf("spdy")==-1&&Uo.indexOf("quic")==-1&&Uo.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(jl(x,x.h),x.h=null))}if(m.D){const Kl=tn.g?tn.g.getResponseHeader("X-HTTP-Session-Id"):null;Kl&&(m.ya=Kl,Be(m.I,m.D,Kl))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var W=a;if(m.qa=wd(m,m.J?m.ia:null,m.W),W.K){Xh(m.h,W);var De=W,lt=m.L;lt&&(De.I=lt),De.B&&(Ul(De),So(De)),m.g=W}else _d(m);0<f.i.length&&xo(f)}else Se[0]!="stop"&&Se[0]!="close"||Mr(f,7);else f.G==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?Mr(f,7):ql(f):Se[0]!="noop"&&f.l&&f.l.ta(Se),f.v=0)}}ni(4)}catch{}}var Bv=class{constructor(a,h){this.g=a,this.map=h}};function Wh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Jh(a){return a.h?1:a.g?a.g.size:0}function Bl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function jl(a,h){a.g?a.g.add(h):a.h=h}function Xh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Wh.prototype.cancel=function(){if(this.i=Yh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Yh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return O(a.i)}function jv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,m=0;m<f;m++)h.push(a[m]);return h}h=[],f=0;for(m in a)h[f++]=a[m];return h}function $v(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const m in a)h[f++]=m;return h}}}function Zh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=$v(a),m=jv(a),C=m.length,x=0;x<C;x++)h.call(void 0,m[x],f&&f[x],a)}var ed=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qv(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var m=a[f].indexOf("="),C=null;if(0<=m){var x=a[f].substring(0,m);C=a[f].substring(m+1)}else x=a[f];h(x,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function xr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof xr){this.h=a.h,Po(this,a.j),this.o=a.o,this.g=a.g,Co(this,a.s),this.l=a.l;var h=a.i,f=new li;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),td(this,f),this.m=a.m}else a&&(h=String(a).match(ed))?(this.h=!1,Po(this,h[1]||"",!0),this.o=oi(h[2]||""),this.g=oi(h[3]||"",!0),Co(this,h[4]),this.l=oi(h[5]||"",!0),td(this,h[6]||"",!0),this.m=oi(h[7]||"")):(this.h=!1,this.i=new li(null,this.h))}xr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ai(h,nd,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ai(h,nd,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(ai(f,f.charAt(0)=="/"?Kv:Gv,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",ai(f,Wv)),a.join("")};function Ln(a){return new xr(a)}function Po(a,h,f){a.j=f?oi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Co(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function td(a,h,f){h instanceof li?(a.i=h,Qv(a.i,a.h)):(f||(h=ai(h,zv)),a.i=new li(h,a.h))}function Be(a,h,f){a.i.set(h,f)}function ko(a){return Be(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function oi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ai(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,Hv),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Hv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var nd=/[#\/\?@]/g,Gv=/[#\?:]/g,Kv=/[#\?]/g,zv=/[#\?@]/g,Wv=/#/g;function li(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function nr(a){a.g||(a.g=new Map,a.h=0,a.i&&qv(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=li.prototype,t.add=function(a,h){nr(this),this.i=null,a=hs(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function rd(a,h){nr(a),h=hs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function sd(a,h){return nr(a),h=hs(a,h),a.g.has(h)}t.forEach=function(a,h){nr(this),this.g.forEach(function(f,m){f.forEach(function(C){a.call(h,C,m,this)},this)},this)},t.na=function(){nr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let m=0;m<h.length;m++){const C=a[m];for(let x=0;x<C.length;x++)f.push(h[m])}return f},t.V=function(a){nr(this);let h=[];if(typeof a=="string")sd(this,a)&&(h=h.concat(this.g.get(hs(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return nr(this),this.i=null,a=hs(this,a),sd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function id(a,h,f){rd(a,h),0<f.length&&(a.i=null,a.g.set(hs(a,h),O(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var m=h[f];const x=encodeURIComponent(String(m)),W=this.V(m);for(m=0;m<W.length;m++){var C=x;W[m]!==""&&(C+="="+encodeURIComponent(String(W[m]))),a.push(C)}}return this.i=a.join("&")};function hs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Qv(a,h){h&&!a.j&&(nr(a),a.i=null,a.g.forEach(function(f,m){var C=m.toLowerCase();m!=C&&(rd(this,m),id(this,C,f))},a)),a.j=h}function Jv(a,h){const f=new si;if(l.Image){const m=new Image;m.onload=v(rr,f,"TestLoadImage: loaded",!0,h,m),m.onerror=v(rr,f,"TestLoadImage: error",!1,h,m),m.onabort=v(rr,f,"TestLoadImage: abort",!1,h,m),m.ontimeout=v(rr,f,"TestLoadImage: timeout",!1,h,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function Xv(a,h){const f=new si,m=new AbortController,C=setTimeout(()=>{m.abort(),rr(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(x=>{clearTimeout(C),x.ok?rr(f,"TestPingServer: ok",!0,h):rr(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),rr(f,"TestPingServer: error",!1,h)})}function rr(a,h,f,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(f)}catch{}}function Yv(){this.g=new Io}function Zv(a,h,f){const m=f||"";try{Zh(a,function(C,x){let W=C;u(C)&&(W=Ot(C)),h.push(m+x+"="+encodeURIComponent(W))})}catch(C){throw h.push(m+"type="+encodeURIComponent("_badmap")),C}}function No(a){this.l=a.Ub||null,this.j=a.eb||!1}k(No,Ol),No.prototype.g=function(){return new Oo(this.l,this.j)},No.prototype.i=(function(a){return function(){return a}})({});function Oo(a,h){de.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Oo,de),t=Oo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ui(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ci(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ui(this)),this.g&&(this.readyState=3,ui(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;od(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function od(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ci(this):ui(this),this.readyState==3&&od(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ci(this))},t.Qa=function(a){this.g&&(this.response=a,ci(this))},t.ga=function(){this.g&&ci(this)};function ci(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ui(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function ui(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Oo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ad(a){let h="";return me(a,function(f,m){h+=m,h+=":",h+=f,h+=`\r
`}),h}function $l(a,h,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=ad(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Be(a,h,f))}function Ke(a){de.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Ke,de);var eE=/^https?$/i,tE=["POST","PUT"];t=Ke.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():xl.g(),this.v=this.o?Mh(this.o):Mh(xl),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(x){ld(this,x);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)f.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const x of m.keys())f.set(x,m.get(x));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(x=>x.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(tE,h,void 0))||m||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,W]of f)this.g.setRequestHeader(x,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{hd(this),this.u=!0,this.g.send(a),this.u=!1}catch(x){ld(this,x)}};function ld(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,cd(a),Do(a)}function cd(a){a.A||(a.A=!0,fe(a,"complete"),fe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,fe(this,"complete"),fe(this,"abort"),Do(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Do(this,!0)),Ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ud(this):this.bb())},t.bb=function(){ud(this)};function ud(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Un(a)!=4||a.Z()!=2)){if(a.u&&Un(a)==4)et(a.Ea,0,a);else if(fe(a,"readystatechange"),Un(a)==4){a.h=!1;try{const W=a.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var m;if(m=W===0){var C=String(a.D).match(ed)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),m=!eE.test(C?C.toLowerCase():"")}f=m}if(f)fe(a,"complete"),fe(a,"success");else{a.m=6;try{var x=2<Un(a)?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.Z()+"]",cd(a)}}finally{Do(a)}}}}function Do(a,h){if(a.g){hd(a);const f=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||fe(a,"ready");try{f.onreadystatechange=m}catch{}}}function hd(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Un(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Un(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),wo(h)}};function dd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function nE(a){const h={};a=(a.g&&2<=Un(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(N(a[m]))continue;var f=R(a[m]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const x=h[C]||[];h[C]=x,x.push(f)}A(h,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function hi(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function fd(a){this.Aa=0,this.i=[],this.j=new si,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=hi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=hi("baseRetryDelayMs",5e3,a),this.cb=hi("retryDelaySeedMs",1e4,a),this.Wa=hi("forwardChannelMaxRetries",2,a),this.wa=hi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Wh(a&&a.concurrentRequestLimit),this.Da=new Yv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=fd.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,m){bt(0),this.W=a,this.H=h||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=wd(this,null,this.W),xo(this)};function ql(a){if(pd(a),a.G==3){var h=a.U++,f=Ln(a.I);if(Be(f,"SID",a.K),Be(f,"RID",h),Be(f,"TYPE","terminate"),di(a,f),h=new tr(a,a.j,h),h.L=2,h.v=ko(Ln(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Id(h.j,null),h.g.ea(h.v)),h.F=Date.now(),So(h)}Td(a)}function Vo(a){a.g&&(Gl(a),a.g.cancel(),a.g=null)}function pd(a){Vo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Mo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function xo(a){if(!Qh(a.h)&&!a.s){a.s=!0;var h=a.Ga;Ae||Zt(),ve||(Ae(),ve=!0),Lt.add(h,a),a.B=0}}function rE(a,h){return Jh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ri(g(a.Ga,a,h),Ed(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new tr(this,this.j,a);let x=this.o;if(this.S&&(x?(x=E(x),b(x,this.S)):x=this.S),this.m!==null||this.O||(C.H=x,x=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=md(this,C,h),f=Ln(this.I),Be(f,"RID",a),Be(f,"CVER",22),this.D&&Be(f,"X-HTTP-Session-Id",this.D),di(this,f),x&&(this.O?h="headers="+encodeURIComponent(String(ad(x)))+"&"+h:this.m&&$l(f,this.m,x)),jl(this.h,C),this.Ua&&Be(f,"TYPE","init"),this.P?(Be(f,"$req",h),Be(f,"SID","null"),C.T=!0,Ll(C,f,null)):Ll(C,f,h),this.G=2}}else this.G==3&&(a?gd(this,a):this.i.length==0||Qh(this.h)||gd(this))};function gd(a,h){var f;h?f=h.l:f=a.U++;const m=Ln(a.I);Be(m,"SID",a.K),Be(m,"RID",f),Be(m,"AID",a.T),di(a,m),a.m&&a.o&&$l(m,a.m,a.o),f=new tr(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=md(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),jl(a.h,f),Ll(f,m,h)}function di(a,h){a.H&&me(a.H,function(f,m){Be(h,m,f)}),a.l&&Zh({},function(f,m){Be(h,m,f)})}function md(a,h,f){f=Math.min(a.i.length,f);var m=a.l?g(a.l.Na,a.l,a):null;e:{var C=a.i;let x=-1;for(;;){const W=["count="+f];x==-1?0<f?(x=C[0].g,W.push("ofs="+x)):x=0:W.push("ofs="+x);let De=!0;for(let lt=0;lt<f;lt++){let Se=C[lt].g;const gt=C[lt].map;if(Se-=x,0>Se)x=Math.max(0,C[lt].g-100),De=!1;else try{Zv(gt,W,"req"+Se+"_")}catch{m&&m(gt)}}if(De){m=W.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,m}function _d(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Ae||Zt(),ve||(Ae(),ve=!0),Lt.add(h,a),a.v=0}}function Hl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ri(g(a.Fa,a),Ed(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,yd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ri(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,bt(10),Vo(this),yd(this))};function Gl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function yd(a){a.g=new tr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Ln(a.qa);Be(h,"RID","rpc"),Be(h,"SID",a.K),Be(h,"AID",a.T),Be(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Be(h,"TO",a.ja),Be(h,"TYPE","xmlhttp"),di(a,h),a.m&&a.o&&$l(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=ko(Ln(h)),f.m=null,f.P=!0,Gh(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Vo(this),Hl(this),bt(19))};function Mo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function vd(a,h){var f=null;if(a.g==h){Mo(a),Gl(a),a.g=null;var m=2}else if(Bl(a.h,h))f=h.D,Xh(a.h,h),m=1;else return;if(a.G!=0){if(h.o)if(m==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var C=a.B;m=Ao(),fe(m,new jh(m,f)),xo(a)}else _d(a);else if(C=h.s,C==3||C==0&&0<h.X||!(m==1&&rE(a,h)||m==2&&Hl(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),C){case 1:Mr(a,5);break;case 4:Mr(a,10);break;case 3:Mr(a,6);break;default:Mr(a,2)}}}function Ed(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Mr(a,h){if(a.j.info("Error code "+h),h==2){var f=g(a.fb,a),m=a.Xa;const C=!m;m=new xr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Po(m,"https"),ko(m),C?Jv(m.toString(),f):Xv(m.toString(),f)}else bt(2);a.G=0,a.l&&a.l.sa(h),Td(a),pd(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function Td(a){if(a.G=0,a.ka=[],a.l){const h=Yh(a.h);(h.length!=0||a.i.length!=0)&&(V(a.ka,h),V(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function wd(a,h,f){var m=f instanceof xr?Ln(f):new xr(f);if(m.g!="")h&&(m.g=h+"."+m.g),Co(m,m.s);else{var C=l.location;m=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;var x=new xr(null);m&&Po(x,m),h&&(x.g=h),C&&Co(x,C),f&&(x.l=f),m=x}return f=a.D,h=a.ya,f&&h&&Be(m,f,h),Be(m,"VER",a.la),di(a,m),m}function Id(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ke(new No({eb:f})):new Ke(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ad(){}t=Ad.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Lo(){}Lo.prototype.g=function(a,h){return new Bt(a,h)};function Bt(a,h){de.call(this),this.g=new fd(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!N(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!N(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ds(this)}k(Bt,de),Bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Bt.prototype.close=function(){ql(this.g)},Bt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Ot(a),a=f);h.i.push(new Bv(h.Ya++,a)),h.G==3&&xo(h)},Bt.prototype.N=function(){this.g.l=null,delete this.j,ql(this.g),delete this.g,Bt.aa.N.call(this)};function bd(a){Dl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}k(bd,Dl);function Rd(){Vl.call(this),this.status=1}k(Rd,Vl);function ds(a){this.g=a}k(ds,Ad),ds.prototype.ua=function(){fe(this.g,"a")},ds.prototype.ta=function(a){fe(this.g,new bd(a))},ds.prototype.sa=function(a){fe(this.g,new Rd)},ds.prototype.ra=function(){fe(this.g,"b")},Lo.prototype.createWebChannel=Lo.prototype.g,Bt.prototype.send=Bt.prototype.o,Bt.prototype.open=Bt.prototype.m,Bt.prototype.close=Bt.prototype.close,i_=function(){return new Lo},s_=function(){return Ao()},r_=Dr,Kc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},bo.NO_ERROR=0,bo.TIMEOUT=8,bo.HTTP_ERROR=6,sa=bo,$h.COMPLETE="complete",n_=$h,Lh.EventType=ti,ti.OPEN="a",ti.CLOSE="b",ti.ERROR="c",ti.MESSAGE="d",de.prototype.listen=de.prototype.K,Ti=Lh,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,t_=Ke}).apply(typeof Ho<"u"?Ho:typeof self<"u"?self:typeof window<"u"?window:{});const Vf="@firebase/firestore",xf="4.8.0";/**
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
 */let zs="11.10.0";/**
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
 */const Yr=new hl("@firebase/firestore");function _s(){return Yr.logLevel}function Y(t,...e){if(Yr.logLevel<=Te.DEBUG){const n=e.map(Fu);Yr.debug(`Firestore (${zs}): ${t}`,...n)}}function Jn(t,...e){if(Yr.logLevel<=Te.ERROR){const n=e.map(Fu);Yr.error(`Firestore (${zs}): ${t}`,...n)}}function Ar(t,...e){if(Yr.logLevel<=Te.WARN){const n=e.map(Fu);Yr.warn(`Firestore (${zs}): ${t}`,...n)}}function Fu(t){if(typeof t=="string")return t;try{/**
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
 */function le(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,o_(t,r,n)}function o_(t,e,n){let r=`FIRESTORE (${zs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Jn(r),new Error(r)}function Ne(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||o_(e,s,r)}function ge(t,e){return t}/**
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
 */class a_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ER{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(yt.UNAUTHENTICATED)))}shutdown(){}}class TR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class wR{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ne(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Er;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Er,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},l=c=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Er)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string",31837,{l:r}),new a_(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string",2055,{h:e}),new yt(e)}}class IR{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class AR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new IR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(yt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Mf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,jt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ne(this.o===void 0,3512);const r=i=>{i.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Mf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Ne(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Mf(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function RR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function l_(){return new TextEncoder}/**
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
 */class Bu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=RR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function zc(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ye(r,s);{const i=l_(),o=SR(i.encode(Lf(t,n)),i.encode(Lf(e,n)));return o!==0?o:ye(r,s)}}n+=r>65535?2:1}return ye(t.length,e.length)}function Lf(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function SR(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ye(t[n],e[n]);return ye(t.length,e.length)}function Ms(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
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
 */const Uf="__name__";class mn{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&le(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return mn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof mn?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=mn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ye(e.length,n.length)}static compareSegments(e,n){const r=mn.isNumericId(e),s=mn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?mn.extractNumericId(e).compare(mn.extractNumericId(n)):zc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return vr.fromString(e.substring(4,e.length-2))}}class Ue extends mn{construct(e,n,r){return new Ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Ue(n)}static emptyPath(){return new Ue([])}}const PR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends mn{construct(e,n,r){return new ht(e,n,r)}static isValidIdentifier(e){return PR.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Uf}static keyField(){return new ht([Uf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new X(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new X(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new X(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
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
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(Ue.fromString(e))}static fromName(e){return new ne(Ue.fromString(e).popFirst(5))}static empty(){return new ne(Ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new Ue(e.slice()))}}/**
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
 */function c_(t,e,n){if(!n)throw new X(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function CR(t,e,n,r){if(e===!0&&r===!0)throw new X(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ff(t){if(!ne.isDocumentKey(t))throw new X(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Bf(t){if(ne.isDocumentKey(t))throw new X(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function u_(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function fl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le(12329,{type:typeof t})}function Qi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fl(t);throw new X(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function rt(t,e){const n={typeString:t};return e&&(n.value=e),n}function po(t,e){if(!u_(t))throw new X(F.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new X(F.INVALID_ARGUMENT,n);return!0}/**
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
 */const jf=-62135596800,$f=1e6;class je{static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*$f);return new je(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<jf)throw new X(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/$f}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:je._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(po(e,je._jsonSchema))return new je(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-jf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}je._jsonSchemaVersion="firestore/timestamp/1.0",je._jsonSchema={type:rt("string",je._jsonSchemaVersion),seconds:rt("number"),nanoseconds:rt("number")};/**
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
 */class he{static fromTimestamp(e){return new he(e)}static min(){return new he(new je(0,0))}static max(){return new he(new je(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ji=-1;function kR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new je(n+1,0):new je(n,r));return new br(s,ne.empty(),e)}function NR(t){return new br(t.readTime,t.key,Ji)}class br{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new br(he.min(),ne.empty(),Ji)}static max(){return new br(he.max(),ne.empty(),Ji)}}function OR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
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
 */const DR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class VR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Ws(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==DR)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):$.reject(n)}static resolve(e){return new $(((n,r)=>{n(e)}))}static reject(e){return new $(((n,r)=>{r(e)}))}static waitFor(e){return new $(((n,r)=>{let s=0,i=0,o=!1;e.forEach((l=>{++s,l.next((()=>{++i,o&&i===s&&n()}),(c=>r(c)))})),o=!0,i===s&&n()}))}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next((s=>s?$.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new $(((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next((d=>{o[u]=d,++l,l===i&&r(o)}),(d=>s(d)))}}))}static doWhile(e,n){return new $(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function xR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Qs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */const ju=-1;function gl(t){return t==null}function Pa(t){return t===0&&1/t==-1/0}function MR(t){return typeof t=="number"&&Number.isInteger(t)&&!Pa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const h_="";function LR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=qf(e)),e=UR(t.get(n),e);return qf(e)}function UR(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case h_:n+="";break;default:n+=i}}return n}function qf(t){return t+h_+""}/**
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
 */function Hf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ss(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function d_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ge{constructor(e,n){this.comparator=e,this.root=n||ut.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ut.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Go(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Go(this.root,e,this.comparator,!1)}getReverseIterator(){return new Go(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Go(this.root,e,this.comparator,!0)}}class Go{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ut{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ut.RED,this.left=s??ut.EMPTY,this.right=i??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ut(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ut.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw le(43730,{key:this.key,value:this.value});if(this.right.isRed())throw le(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw le(27949);return e+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw le(57766)}get value(){throw le(16141)}get color(){throw le(16727)}get left(){throw le(29726)}get right(){throw le(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new ut(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class it{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Gf(this.data.getIterator())}getIteratorFrom(e){return new Gf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof it)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new it(this.comparator);return n.data=e,n}}class Gf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class rn{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new rn([])}unionWith(e){let n=new it(ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new rn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ms(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class f_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new f_("Invalid base64 string: "+i):i}})(e);return new ft(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const FR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rr(t){if(Ne(!!t,39018),typeof t=="string"){let e=0;const n=FR.exec(t);if(Ne(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Sr(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
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
 */const p_="server_timestamp",g_="__type__",m_="__previous_value__",__="__local_write_time__";function $u(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[g_])===null||n===void 0?void 0:n.stringValue)===p_}function ml(t){const e=t.mapValue.fields[m_];return $u(e)?ml(e):e}function Xi(t){const e=Rr(t.mapValue.fields[__].timestampValue);return new je(e.seconds,e.nanos)}/**
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
 */class BR{constructor(e,n,r,s,i,o,l,c,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=d}}const Ca="(default)";class Yi{constructor(e,n){this.projectId=e,this.database=n||Ca}static empty(){return new Yi("","")}get isDefaultDatabase(){return this.database===Ca}isEqual(e){return e instanceof Yi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const y_="__type__",jR="__max__",Ko={mapValue:{}},v_="__vector__",ka="value";function Pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$u(t)?4:qR(t)?9007199254740991:$R(t)?10:11:le(28295,{value:t})}function xn(t,e){if(t===e)return!0;const n=Pr(t);if(n!==Pr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Xi(t).isEqual(Xi(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Rr(s.timestampValue),l=Rr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return Sr(s.bytesValue).isEqual(Sr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return Ye(s.geoPointValue.latitude)===Ye(i.geoPointValue.latitude)&&Ye(s.geoPointValue.longitude)===Ye(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Ye(s.integerValue)===Ye(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ye(s.doubleValue),l=Ye(i.doubleValue);return o===l?Pa(o)===Pa(l):isNaN(o)&&isNaN(l)}return!1})(t,e);case 9:return Ms(t.arrayValue.values||[],e.arrayValue.values||[],xn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Hf(o)!==Hf(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!xn(o[c],l[c])))return!1;return!0})(t,e);default:return le(52216,{left:t})}}function Zi(t,e){return(t.values||[]).find((n=>xn(n,e)))!==void 0}function Ls(t,e){if(t===e)return 0;const n=Pr(t),r=Pr(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const l=Ye(i.integerValue||i.doubleValue),c=Ye(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return Kf(t.timestampValue,e.timestampValue);case 4:return Kf(Xi(t),Xi(e));case 5:return zc(t.stringValue,e.stringValue);case 6:return(function(i,o){const l=Sr(i),c=Sr(o);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=ye(l[u],c[u]);if(d!==0)return d}return ye(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const l=ye(Ye(i.latitude),Ye(o.latitude));return l!==0?l:ye(Ye(i.longitude),Ye(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return zf(t.arrayValue,e.arrayValue);case 10:return(function(i,o){var l,c,u,d;const p=i.fields||{},g=o.fields||{},v=(l=p[ka])===null||l===void 0?void 0:l.arrayValue,k=(c=g[ka])===null||c===void 0?void 0:c.arrayValue,O=ye(((u=v==null?void 0:v.values)===null||u===void 0?void 0:u.length)||0,((d=k==null?void 0:k.values)===null||d===void 0?void 0:d.length)||0);return O!==0?O:zf(v,k)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Ko.mapValue&&o===Ko.mapValue)return 0;if(i===Ko.mapValue)return 1;if(o===Ko.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const g=zc(c[p],d[p]);if(g!==0)return g;const v=Ls(l[c[p]],u[d[p]]);if(v!==0)return v}return ye(c.length,d.length)})(t.mapValue,e.mapValue);default:throw le(23264,{le:n})}}function Kf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=Rr(t),r=Rr(e),s=ye(n.seconds,r.seconds);return s!==0?s:ye(n.nanos,r.nanos)}function zf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ls(n[s],r[s]);if(i)return i}return ye(n.length,r.length)}function Us(t){return Wc(t)}function Wc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=Rr(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Sr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return ne.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Wc(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Wc(n.fields[o])}`;return s+"}"})(t.mapValue):le(61005,{value:t})}function ia(t){switch(Pr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ml(t);return e?16+ia(e):16;case 5:return 2*t.stringValue.length;case 6:return Sr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+ia(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return ss(r.fields,((i,o)=>{s+=i.length+ia(o)})),s})(t.mapValue);default:throw le(13486,{value:t})}}function Wf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Qc(t){return!!t&&"integerValue"in t}function qu(t){return!!t&&"arrayValue"in t}function Qf(t){return!!t&&"nullValue"in t}function Jf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function oa(t){return!!t&&"mapValue"in t}function $R(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[y_])===null||n===void 0?void 0:n.stringValue)===v_}function Di(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ss(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Di(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Di(t.arrayValue.values[n]);return e}return Object.assign({},t)}function qR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===jR}/**
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
 */class Qt{constructor(e){this.value=e}static empty(){return new Qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!oa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Di(n)}setAll(e){let n=ht.emptyPath(),r={},s=[];e.forEach(((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Di(o):s.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());oa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return xn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];oa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ss(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Qt(Di(this.value))}}function E_(t){const e=[];return ss(t.fields,((n,r)=>{const s=new ht([n]);if(oa(r)){const i=E_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new rn(e)}/**
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
 */class Et{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Et(e,0,he.min(),he.min(),he.min(),Qt.empty(),0)}static newFoundDocument(e,n,r,s){return new Et(e,1,n,he.min(),r,s,0)}static newNoDocument(e,n){return new Et(e,2,n,he.min(),he.min(),Qt.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,he.min(),he.min(),Qt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Na{constructor(e,n){this.position=e,this.inclusive=n}}function Xf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ne.comparator(ne.fromName(o.referenceValue),n.key):r=Ls(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Yf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!xn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class eo{constructor(e,n="asc"){this.field=e,this.dir=n}}function HR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class T_{}class nt extends T_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new KR(e,n,r):n==="array-contains"?new QR(e,r):n==="in"?new JR(e,r):n==="not-in"?new XR(e,r):n==="array-contains-any"?new YR(e,r):new nt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new zR(e,r):new WR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ls(n,this.value)):n!==null&&Pr(this.value)===Pr(n)&&this.matchesComparison(Ls(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hn extends T_{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new hn(e,n)}matches(e){return w_(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function w_(t){return t.op==="and"}function I_(t){return GR(t)&&w_(t)}function GR(t){for(const e of t.filters)if(e instanceof hn)return!1;return!0}function Jc(t){if(t instanceof nt)return t.field.canonicalString()+t.op.toString()+Us(t.value);if(I_(t))return t.filters.map((e=>Jc(e))).join(",");{const e=t.filters.map((n=>Jc(n))).join(",");return`${t.op}(${e})`}}function A_(t,e){return t instanceof nt?(function(r,s){return s instanceof nt&&r.op===s.op&&r.field.isEqual(s.field)&&xn(r.value,s.value)})(t,e):t instanceof hn?(function(r,s){return s instanceof hn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,l)=>i&&A_(o,s.filters[l])),!0):!1})(t,e):void le(19439)}function b_(t){return t instanceof nt?(function(n){return`${n.field.canonicalString()} ${n.op} ${Us(n.value)}`})(t):t instanceof hn?(function(n){return n.op.toString()+" {"+n.getFilters().map(b_).join(" ,")+"}"})(t):"Filter"}class KR extends nt{constructor(e,n,r){super(e,n,r),this.key=ne.fromName(r.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class zR extends nt{constructor(e,n){super(e,"in",n),this.keys=R_("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class WR extends nt{constructor(e,n){super(e,"not-in",n),this.keys=R_("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function R_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map((r=>ne.fromName(r.referenceValue)))}class QR extends nt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return qu(n)&&Zi(n.arrayValue,this.value)}}class JR extends nt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Zi(this.value.arrayValue,n)}}class XR extends nt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Zi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Zi(this.value.arrayValue,n)}}class YR extends nt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!qu(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Zi(this.value.arrayValue,r)))}}/**
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
 */class ZR{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Pe=null}}function Zf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new ZR(t,e,n,r,s,i,o)}function Hu(t){const e=ge(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>Jc(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),gl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Us(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Us(r))).join(",")),e.Pe=n}return e.Pe}function Gu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!HR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!A_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Yf(t.startAt,e.startAt)&&Yf(t.endAt,e.endAt)}function Xc(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Js{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function e0(t,e,n,r,s,i,o,l){return new Js(t,e,n,r,s,i,o,l)}function S_(t){return new Js(t)}function ep(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function P_(t){return t.collectionGroup!==null}function Vi(t){const e=ge(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new it(ht.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(l=l.add(u.field))}))})),l})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new eo(i,r))})),n.has(ht.keyField().canonicalString())||e.Te.push(new eo(ht.keyField(),r))}return e.Te}function In(t){const e=ge(t);return e.Ie||(e.Ie=t0(e,Vi(t))),e.Ie}function t0(t,e){if(t.limitType==="F")return Zf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new eo(s.field,i)}));const n=t.endAt?new Na(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Na(t.startAt.position,t.startAt.inclusive):null;return Zf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Yc(t,e){const n=t.filters.concat([e]);return new Js(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Zc(t,e,n){return new Js(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function _l(t,e){return Gu(In(t),In(e))&&t.limitType===e.limitType}function C_(t){return`${Hu(In(t))}|lt:${t.limitType}`}function ys(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>b_(s))).join(", ")}]`),gl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Us(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Us(s))).join(",")),`Target(${r})`})(In(t))}; limitType=${t.limitType})`}function yl(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ne.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of Vi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,l,c){const u=Xf(o,l,c);return o.inclusive?u<=0:u<0})(r.startAt,Vi(r),s)||r.endAt&&!(function(o,l,c){const u=Xf(o,l,c);return o.inclusive?u>=0:u>0})(r.endAt,Vi(r),s))})(t,e)}function n0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function k_(t){return(e,n)=>{let r=!1;for(const s of Vi(t)){const i=r0(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function r0(t,e,n){const r=t.field.isKeyField()?ne.comparator(e.key,n.key):(function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Ls(c,u):le(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le(19790,{direction:t.dir})}}/**
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
 */class is{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ss(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return d_(this.inner)}size(){return this.innerSize}}/**
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
 */const s0=new Ge(ne.comparator);function Xn(){return s0}const N_=new Ge(ne.comparator);function wi(...t){let e=N_;for(const n of t)e=e.insert(n.key,n);return e}function O_(t){let e=N_;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Kr(){return xi()}function D_(){return xi()}function xi(){return new is((t=>t.toString()),((t,e)=>t.isEqual(e)))}const i0=new Ge(ne.comparator),o0=new it(ne.comparator);function we(...t){let e=o0;for(const n of t)e=e.add(n);return e}const a0=new it(ye);function l0(){return a0}/**
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
 */function Ku(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pa(e)?"-0":e}}function V_(t){return{integerValue:""+t}}function c0(t,e){return MR(e)?V_(e):Ku(t,e)}/**
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
 */class vl{constructor(){this._=void 0}}function u0(t,e,n){return t instanceof to?(function(s,i){const o={fields:{[g_]:{stringValue:p_},[__]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&$u(i)&&(i=ml(i)),i&&(o.fields[m_]=i),{mapValue:o}})(n,e):t instanceof no?M_(t,e):t instanceof ro?L_(t,e):(function(s,i){const o=x_(s,i),l=tp(o)+tp(s.Ee);return Qc(o)&&Qc(s.Ee)?V_(l):Ku(s.serializer,l)})(t,e)}function h0(t,e,n){return t instanceof no?M_(t,e):t instanceof ro?L_(t,e):n}function x_(t,e){return t instanceof Oa?(function(r){return Qc(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class to extends vl{}class no extends vl{constructor(e){super(),this.elements=e}}function M_(t,e){const n=U_(e);for(const r of t.elements)n.some((s=>xn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class ro extends vl{constructor(e){super(),this.elements=e}}function L_(t,e){let n=U_(e);for(const r of t.elements)n=n.filter((s=>!xn(s,r)));return{arrayValue:{values:n}}}class Oa extends vl{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function tp(t){return Ye(t.integerValue||t.doubleValue)}function U_(t){return qu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class d0{constructor(e,n){this.field=e,this.transform=n}}function f0(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof no&&s instanceof no||r instanceof ro&&s instanceof ro?Ms(r.elements,s.elements,xn):r instanceof Oa&&s instanceof Oa?xn(r.Ee,s.Ee):r instanceof to&&s instanceof to})(t.transform,e.transform)}class p0{constructor(e,n){this.version=e,this.transformResults=n}}class An{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new An}static exists(e){return new An(void 0,e)}static updateTime(e){return new An(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function aa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class El{}function F_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new zu(t.key,An.none()):new go(t.key,t.data,An.none());{const n=t.data,r=Qt.empty();let s=new it(ht.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new os(t.key,r,new rn(s.toArray()),An.none())}}function g0(t,e,n){t instanceof go?(function(s,i,o){const l=s.value.clone(),c=rp(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):t instanceof os?(function(s,i,o){if(!aa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=rp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(B_(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Mi(t,e,n,r){return t instanceof go?(function(i,o,l,c){if(!aa(i.precondition,o))return l;const u=i.value.clone(),d=sp(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof os?(function(i,o,l,c){if(!aa(i.precondition,o))return l;const u=sp(i.fieldTransforms,c,o),d=o.data;return d.setAll(B_(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,l){return aa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(t,e,n)}function m0(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=x_(r.transform,s||null);i!=null&&(n===null&&(n=Qt.empty()),n.set(r.field,i))}return n||null}function np(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ms(r,s,((i,o)=>f0(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class go extends El{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class os extends El{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function B_(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function rp(t,e,n){const r=new Map;Ne(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,h0(o,l,n[s]))}return r}function sp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,u0(i,o,e))}return r}class zu extends El{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _0 extends El{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class y0{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&g0(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Mi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Mi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=D_();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=F_(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(he.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),we())}isEqual(e){return this.batchId===e.batchId&&Ms(this.mutations,e.mutations,((n,r)=>np(n,r)))&&Ms(this.baseMutations,e.baseMutations,((n,r)=>np(n,r)))}}class Wu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ne(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return i0})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Wu(e,n,r,s)}}/**
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
 */class v0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class E0{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var tt,be;function T0(t){switch(t){case F.OK:return le(64938);case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return le(15467,{code:t})}}function j_(t){if(t===void 0)return Jn("GRPC error has no .code"),F.UNKNOWN;switch(t){case tt.OK:return F.OK;case tt.CANCELLED:return F.CANCELLED;case tt.UNKNOWN:return F.UNKNOWN;case tt.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case tt.INTERNAL:return F.INTERNAL;case tt.UNAVAILABLE:return F.UNAVAILABLE;case tt.UNAUTHENTICATED:return F.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case tt.NOT_FOUND:return F.NOT_FOUND;case tt.ALREADY_EXISTS:return F.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return F.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case tt.ABORTED:return F.ABORTED;case tt.OUT_OF_RANGE:return F.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return F.UNIMPLEMENTED;case tt.DATA_LOSS:return F.DATA_LOSS;default:return le(39323,{code:t})}}(be=tt||(tt={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const w0=new vr([4294967295,4294967295],0);function ip(t){const e=l_().encode(t),n=new e_;return n.update(e),new Uint8Array(n.digest())}function op(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new vr([n,r],0),new vr([s,i],0)]}class Qu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ii(`Invalid padding: ${n}`);if(r<0)throw new Ii(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ii(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ii(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=vr.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(vr.fromNumber(r)));return s.compare(w0)===1&&(s=new vr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=ip(e),[r,s]=op(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);if(!this.ye(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Qu(i,s,n);return r.forEach((l=>o.insert(l))),o}insert(e){if(this.fe===0)return;const n=ip(e),[r,s]=op(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ii extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Tl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,mo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Tl(he.min(),s,new Ge(ye),Xn(),we())}}class mo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new mo(r,n,we(),we(),we())}}/**
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
 */class la{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class $_{constructor(e,n){this.targetId=e,this.De=n}}class q_{constructor(e,n,r=ft.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class ap{constructor(){this.ve=0,this.Ce=lp(),this.Fe=ft.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=we(),n=we(),r=we();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:le(38017,{changeType:i})}})),new mo(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=lp()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ne(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class I0{constructor(e){this.We=e,this.Ge=new Map,this.ze=Xn(),this.je=zo(),this.Je=zo(),this.He=new Ge(ye)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,(n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:le(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach(((r,s)=>{this.nt(s)&&n(s)}))}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(Xc(i))if(r===0){const o=new ne(i.path);this.Xe(n,o,Et.newNoDocument(o,he.min()))}else Ne(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),c=l?this.ut(l,e,o):1;if(c!==0){this.rt(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,u)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Sr(r).toUint8Array()}catch(c){if(c instanceof f_)return Ar("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Qu(o,s,i)}catch(c){return Ar(c instanceof Ii?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,i,null),s++)})),s}Pt(e){const n=new Map;this.Ge.forEach(((i,o)=>{const l=this.st(o);if(l){if(i.current&&Xc(l.target)){const c=new ne(l.target.path);this.Tt(c).has(o)||this.It(o,c)||this.Xe(o,c,Et.newNoDocument(c,e))}i.Ne&&(n.set(o,i.Le()),i.ke())}}));let r=we();this.Je.forEach(((i,o)=>{let l=!0;o.forEachWhile((c=>{const u=this.st(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.ze.forEach(((i,o)=>o.setReadTime(e)));const s=new Tl(e,n,this.He,this.ze,r);return this.ze=Xn(),this.je=zo(),this.Je=zo(),this.He=new Ge(ye),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new ap,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new it(ye),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new it(ye),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new ap),this.We.getRemoteKeysForTarget(e).forEach((n=>{this.Xe(e,n,null)}))}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function zo(){return new Ge(ne.comparator)}function lp(){return new Ge(ne.comparator)}const A0={asc:"ASCENDING",desc:"DESCENDING"},b0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},R0={and:"AND",or:"OR"};class S0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function eu(t,e){return t.useProto3Json||gl(e)?e:{value:e}}function Da(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function H_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function P0(t,e){return Da(t,e.toTimestamp())}function bn(t){return Ne(!!t,49232),he.fromTimestamp((function(n){const r=Rr(n);return new je(r.seconds,r.nanos)})(t))}function Ju(t,e){return tu(t,e).canonicalString()}function tu(t,e){const n=(function(s){return new Ue(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function G_(t){const e=Ue.fromString(t);return Ne(J_(e),10190,{key:e.toString()}),e}function nu(t,e){return Ju(t.databaseId,e.path)}function gc(t,e){const n=G_(e);if(n.get(1)!==t.databaseId.projectId)throw new X(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(z_(n))}function K_(t,e){return Ju(t.databaseId,e)}function C0(t){const e=G_(t);return e.length===4?Ue.emptyPath():z_(e)}function ru(t){return new Ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function z_(t){return Ne(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function cp(t,e,n){return{name:nu(t,e),fields:n.value.mapValue.fields}}function k0(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:le(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,d){return u.useProto3Json?(Ne(d===void 0||typeof d=="string",58123),ft.fromBase64String(d||"")):(Ne(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),ft.fromUint8Array(d||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(u){const d=u.code===void 0?F.UNKNOWN:j_(u.code);return new X(d,u.message||"")})(o);n=new q_(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=gc(t,r.document.name),i=bn(r.document.updateTime),o=r.document.createTime?bn(r.document.createTime):he.min(),l=new Qt({mapValue:{fields:r.document.fields}}),c=Et.newFoundDocument(s,i,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];n=new la(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=gc(t,r.document),i=r.readTime?bn(r.readTime):he.min(),o=Et.newNoDocument(s,i),l=r.removedTargetIds||[];n=new la([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=gc(t,r.document),i=r.removedTargetIds||[];n=new la([],i,s,null)}else{if(!("filter"in e))return le(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new E0(s,i),l=r.targetId;n=new $_(l,o)}}return n}function N0(t,e){let n;if(e instanceof go)n={update:cp(t,e.key,e.value)};else if(e instanceof zu)n={delete:nu(t,e.key)};else if(e instanceof os)n={update:cp(t,e.key,e.data),updateMask:B0(e.fieldMask)};else{if(!(e instanceof _0))return le(16599,{Rt:e.type});n={verify:nu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const l=o.transform;if(l instanceof to)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof no)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ro)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Oa)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw le(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:P0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:le(27497)})(t,e.precondition)),n}function O0(t,e){return t&&t.length>0?(Ne(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?bn(s.updateTime):bn(i);return o.isEqual(he.min())&&(o=bn(i)),new p0(o,s.transformResults||[])})(n,e)))):[]}function D0(t,e){return{documents:[K_(t,e.path)]}}function V0(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=K_(t,s);const i=(function(u){if(u.length!==0)return Q_(hn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((d=>(function(g){return{field:vs(g.field),direction:L0(g.dir)}})(d)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=eu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{Vt:n,parent:s}}function x0(t){let e=C0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ne(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=(function(p){const g=W_(p);return g instanceof hn&&I_(g)?g.getFilters():[g]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((g=>(function(k){return new eo(Es(k.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(k.direction))})(g)))})(n.orderBy));let l=null;n.limit&&(l=(function(p){let g;return g=typeof p=="object"?p.value:p,gl(g)?null:g})(n.limit));let c=null;n.startAt&&(c=(function(p){const g=!!p.before,v=p.values||[];return new Na(v,g)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const g=!p.before,v=p.values||[];return new Na(v,g)})(n.endAt)),e0(e,s,o,i,l,"F",c,u)}function M0(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function W_(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Es(n.unaryFilter.field);return nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Es(n.unaryFilter.field);return nt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Es(n.unaryFilter.field);return nt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Es(n.unaryFilter.field);return nt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return le(61313);default:return le(60726)}})(t):t.fieldFilter!==void 0?(function(n){return nt.create(Es(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return le(58110);default:return le(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return hn.create(n.compositeFilter.filters.map((r=>W_(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return le(1026)}})(n.compositeFilter.op))})(t):le(30097,{filter:t})}function L0(t){return A0[t]}function U0(t){return b0[t]}function F0(t){return R0[t]}function vs(t){return{fieldPath:t.canonicalString()}}function Es(t){return ht.fromServerFormat(t.fieldPath)}function Q_(t){return t instanceof nt?(function(n){if(n.op==="=="){if(Jf(n.value))return{unaryFilter:{field:vs(n.field),op:"IS_NAN"}};if(Qf(n.value))return{unaryFilter:{field:vs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Jf(n.value))return{unaryFilter:{field:vs(n.field),op:"IS_NOT_NAN"}};if(Qf(n.value))return{unaryFilter:{field:vs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vs(n.field),op:U0(n.op),value:n.value}}})(t):t instanceof hn?(function(n){const r=n.getFilters().map((s=>Q_(s)));return r.length===1?r[0]:{compositeFilter:{op:F0(n.op),filters:r}}})(t):le(54877,{filter:t})}function B0(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function J_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class pr{constructor(e,n,r,s,i=he.min(),o=he.min(),l=ft.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new pr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class j0{constructor(e){this.gt=e}}function $0(t){const e=x0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Zc(e,e.limit,"L"):e}/**
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
 */class q0{constructor(){this.Dn=new H0}addToCollectionParentIndex(e,n){return this.Dn.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(br.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(br.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class H0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new it(Ue.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new it(Ue.comparator)).toArray()}}/**
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
 */const up={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},X_=41943040;class Vt{static withCacheSize(e){return new Vt(e,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Vt.DEFAULT_COLLECTION_PERCENTILE=10,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Vt.DEFAULT=new Vt(X_,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Vt.DISABLED=new Vt(-1,0,0);/**
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
 */class Fs{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Fs(0)}static ur(){return new Fs(-1)}}/**
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
 */const hp="LruGarbageCollector",G0=1048576;function dp([t,e],[n,r]){const s=ye(t,n);return s===0?ye(e,r):s}class K0{constructor(e){this.Tr=e,this.buffer=new it(dp),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();dp(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class z0{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){Y(hp,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Qs(n)?Y(hp,"Ignoring IndexedDB error during garbage collection: ",n):await Ws(n)}await this.Rr(3e5)}))}}class W0{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return $.resolve(pl.ue);const r=new K0(n);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Y("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(up)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(Y("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),up):this.pr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(Y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,l=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),_s()<=Te.DEBUG&&Y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function Q0(t,e){return new W0(t,e)}/**
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
 */class J0{constructor(){this.changes=new is((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class X0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Y0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&Mi(r.mutation,s,rn.empty(),je.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,we()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=we()){const s=Kr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=wi();return i.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=Kr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,we())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,l)=>{n.set(o,l)}))}))}computeViews(e,n,r,s){let i=Xn();const o=xi(),l=(function(){return xi()})();return n.forEach(((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof os)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Mi(d.mutation,u,d.mutation.getFieldMask(),je.now())):o.set(u.key,rn.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((u,d)=>o.set(u,d))),n.forEach(((u,d)=>{var p;return l.set(u,new X0(d,(p=o.get(u))!==null&&p!==void 0?p:null))})),l)))}recalculateAndSaveOverlays(e,n){const r=xi();let s=new Ge(((o,l)=>o-l)),i=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const l of o)l.keys().forEach((c=>{const u=n.get(c);if(u===null)return;let d=r.get(c)||rn.empty();d=l.applyToLocalView(u,d),r.set(c,d);const p=(s.get(l.batchId)||we()).add(c);s=s.insert(l.batchId,p)}))})).next((()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=D_();d.forEach((g=>{if(!i.has(g)){const v=F_(n.get(g),r.get(g));v!==null&&p.set(g,v),i=i.add(g)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return $.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return ne.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):P_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):$.resolve(Kr());let l=Ji,c=i;return o.next((u=>$.forEach(u,((d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?$.resolve():this.remoteDocumentCache.getEntry(e,d).next((g=>{c=c.insert(d,g)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,c,u,we()))).next((d=>({batchId:l,changes:O_(d)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next((r=>{let s=wi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=wi();return this.indexManager.getCollectionParents(e,i).next((l=>$.forEach(l,(c=>{const u=(function(p,g){return new Js(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((d=>{d.forEach(((p,g)=>{o=o.insert(p,g)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,Et.newInvalidDocument(d)))}));let l=wi();return o.forEach(((c,u)=>{const d=i.get(c);d!==void 0&&Mi(d.mutation,u,rn.empty(),je.now()),yl(n,u)&&(l=l.insert(c,u))})),l}))}}/**
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
 */class Z0{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return $.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:bn(s.createTime)}})(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,(function(s){return{name:s.name,query:$0(s.bundledQuery),readTime:bn(s.readTime)}})(n)),$.resolve()}}/**
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
 */class eS{constructor(){this.overlays=new Ge(ne.comparator),this.kr=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Kr();return $.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.wt(e,n,i)})),$.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const s=Kr(),i=n.length+1,o=new ne(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return $.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ge(((u,d)=>u-d));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Kr(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=Kr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,d)=>l.set(u,d))),!(l.size()>=s)););return $.resolve(l)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new v0(n,r));let i=this.kr.get(n);i===void 0&&(i=we(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
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
 */class tS{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
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
 */class Xu{constructor(){this.qr=new it(ot.Qr),this.$r=new it(ot.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new ot(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Wr(new ot(e,n))}Gr(e,n){e.forEach((r=>this.removeReference(r,n)))}zr(e){const n=new ne(new Ue([])),r=new ot(n,e),s=new ot(n,e+1),i=[];return this.$r.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new ne(new Ue([])),r=new ot(n,e),s=new ot(n,e+1);let i=we();return this.$r.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new ot(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ot{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return ne.comparator(e.key,n.key)||ye(e.Hr,n.Hr)}static Ur(e,n){return ye(e.Hr,n.Hr)||ne.comparator(e.key,n.key)}}/**
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
 */class nS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new it(ot.Qr)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new y0(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Yr=this.Yr.add(new ot(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return $.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?ju:this.er-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ot(n,0),s=new ot(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(o=>{const l=this.Zr(o.Hr);i.push(l)})),$.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new it(ye);return n.forEach((s=>{const i=new ot(s,0),o=new ot(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],(l=>{r=r.add(l.Hr)}))})),$.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ne.isDocumentKey(i)||(i=i.child(""));const o=new ot(new ne(i),0);let l=new it(ye);return this.Yr.forEachWhile((c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Hr)),!0)}),o),$.resolve(this.ei(l))}ei(e){const n=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Ne(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return $.forEach(n.mutations,(s=>{const i=new ot(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,n){const r=new ot(n,0),s=this.Yr.firstAfterOrEqual(r);return $.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class rS{constructor(e){this.ni=e,this.docs=(function(){return new Ge(ne.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let r=Xn();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Et.newInvalidDocument(s))})),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Xn();const o=n.path,l=new ne(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||OR(NR(d),r)<=0||(s.has(d.key)||yl(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return $.resolve(i)}getAllFromCollectionGroup(e,n,r,s){le(9500)}ri(e,n){return $.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new sS(this)}getSize(e){return $.resolve(this.size)}}class sS extends J0{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),$.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
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
 */class iS{constructor(e){this.persistence=e,this.ii=new is((n=>Hu(n)),Gu),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.si=0,this.oi=new Xu,this.targetCount=0,this._i=Fs.ar()}forEachTarget(e,n){return this.ii.forEach(((r,s)=>n(s))),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),$.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new Fs(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.hr(n),$.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach(((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),$.waitFor(i).next((()=>s))}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),$.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.oi.containsKey(n))}}/**
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
 */class Y_{constructor(e,n){this.ai={},this.overlays={},this.ui=new pl(0),this.ci=!1,this.ci=!0,this.li=new tS,this.referenceDelegate=e(this),this.hi=new iS(this),this.indexManager=new q0,this.remoteDocumentCache=(function(s){return new rS(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new j0(n),this.Ti=new Z0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new eS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new nS(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const s=new oS(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,n){return $.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,n))))}}class oS extends VR{constructor(e){super(),this.currentSequenceNumber=e}}class Yu{constructor(e){this.persistence=e,this.Ai=new Xu,this.Ri=null}static Vi(e){return new Yu(e)}get mi(){if(this.Ri)return this.Ri;throw le(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),$.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.mi,(r=>{const s=ne.fromPath(r);return this.fi(e,s).next((i=>{i||n.removeEntry(s,he.min())}))})).next((()=>(this.Ri=null,n.apply(e))))}updateLimboDocument(e,n){return this.fi(e,n).next((r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())}))}Pi(e){return 0}fi(e,n){return $.or([()=>$.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Va{constructor(e,n){this.persistence=e,this.gi=new is((r=>LR(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Q0(this,n)}static Vi(e,n){return new Va(e,n)}Ii(){}di(e){return $.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}yr(e){let n=0;return this.gr(e,(r=>{n++})).next((()=>n))}gr(e,n){return $.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?$.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(o=>this.Sr(e,o,n).next((l=>{l||(r++,i.removeEntry(o,he.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),$.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),$.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),$.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ia(e.data.value)),n}Sr(e,n,r){return $.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return $.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Zu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=we(),s=we();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Zu(e,n.fromCache,r,s)}}/**
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
 */class aS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class lS{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return rb()?8:xR(It())>0?6:4})()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ys(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new aS;return this.ws(e,n,o).next((l=>{if(i.result=l,this.Rs)return this.Ss(e,n,o,l.size)}))})).next((()=>i.result))}Ss(e,n,r,s){return r.documentReadCount<this.Vs?(_s()<=Te.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",ys(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),$.resolve()):(_s()<=Te.DEBUG&&Y("QueryEngine","Query:",ys(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(_s()<=Te.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",ys(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,In(n))):$.resolve())}ps(e,n){if(ep(n))return $.resolve(null);let r=In(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=Zc(n,null,"F"),r=In(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=we(...i);return this.gs.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const u=this.bs(n,l);return this.Ds(n,u,o,c.readTime)?this.ps(e,Zc(n,null,"F")):this.vs(e,u,n,c)}))))})))))}ys(e,n,r,s){return ep(n)||s.isEqual(he.min())?$.resolve(null):this.gs.getDocuments(e,r).next((i=>{const o=this.bs(n,i);return this.Ds(n,o,r,s)?$.resolve(null):(_s()<=Te.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ys(n)),this.vs(e,o,n,kR(s,Ji)).next((l=>l)))}))}bs(e,n){let r=new it(k_(e));return n.forEach(((s,i)=>{yl(e,i)&&(r=r.add(i))})),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return _s()<=Te.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",ys(n)),this.gs.getDocumentsMatchingQuery(e,n,br.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
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
 */const eh="LocalStore",cS=3e8;class uS{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new Ge(ye),this.Ms=new is((i=>Hu(i)),Gu),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Y0(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Fs)))}}function hS(t,e,n,r){return new uS(t,e,n,r)}async function Z_(t,e){const n=ge(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],l=[];let c=we();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next((u=>({Bs:u,removedBatchIds:o,addedBatchIds:l})))}))}))}function dS(t,e){const n=ge(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return(function(l,c,u,d){const p=u.batch,g=p.keys();let v=$.resolve();return g.forEach((k=>{v=v.next((()=>d.getEntry(c,k))).next((O=>{const V=u.docVersions.get(k);Ne(V!==null,48541),O.version.compareTo(V)<0&&(p.applyToRemoteDocument(O,u),O.isValidDocument()&&(O.setReadTime(u.commitVersion),d.addEntry(O)))}))})),v.next((()=>l.mutationQueue.removeMutationBatch(c,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let c=we();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function ey(t){const e=ge(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.hi.getLastRemoteSnapshotVersion(n)))}function fS(t,e){const n=ge(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const l=[];e.targetChanges.forEach(((d,p)=>{const g=s.get(p);if(!g)return;l.push(n.hi.removeMatchingKeys(i,d.removedDocuments,p).next((()=>n.hi.addMatchingKeys(i,d.addedDocuments,p))));let v=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(ft.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),s=s.insert(p,v),(function(O,V,B){return O.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=cS?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0})(g,v,d)&&l.push(n.hi.updateTargetData(i,v))}));let c=Xn(),u=we();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))})),l.push(pS(i,o,e.documentUpdates).next((d=>{c=d.Ls,u=d.ks}))),!r.isEqual(he.min())){const d=n.hi.getLastRemoteSnapshotVersion(i).next((p=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(d)}return $.waitFor(l).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,u))).next((()=>c))})).then((i=>(n.Fs=s,i)))}function pS(t,e,n){let r=we(),s=we();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=Xn();return n.forEach(((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(he.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):Y(eh,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)})),{Ls:o,ks:s}}))}function gS(t,e){const n=ge(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=ju),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function mS(t,e){const n=ge(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.hi.getTargetData(r,e).next((i=>i?(s=i,$.resolve(s)):n.hi.allocateTargetId(r).next((o=>(s=new pr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r}))}async function su(t,e,n){const r=ge(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Qs(o))throw o;Y(eh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function fp(t,e,n){const r=ge(t);let s=he.min(),i=we();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,d){const p=ge(c),g=p.Ms.get(d);return g!==void 0?$.resolve(p.Fs.get(g)):p.hi.getTargetData(u,d)})(r,o,In(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next((c=>{i=c}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:he.min(),n?i:we()))).next((l=>(_S(r,n0(e),l),{documents:l,qs:i})))))}function _S(t,e,n){let r=t.xs.get(e)||he.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.xs.set(e,r)}class pp{constructor(){this.activeTargetIds=l0()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yS{constructor(){this.Fo=new pp,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new pp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class vS{xo(e){}shutdown(){}}/**
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
 */const gp="ConnectivityMonitor";class mp{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){Y(gp,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){Y(gp,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Wo=null;function iu(){return Wo===null?Wo=(function(){return 268435456+Math.round(2147483648*Math.random())})():Wo++,"0x"+Wo.toString(16)}/**
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
 */const mc="RestConnection",ES={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class TS{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Ca?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=iu(),l=this.Go(e,n.toUriEncodedString());Y(mc,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,s,i);const{host:u}=new URL(l),d=er(u);return this.jo(e,l,c,r,d).then((p=>(Y(mc,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Ar(mc,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p}))}Jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+zs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,n){const r=ES[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
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
 */class wS{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const _t="WebChannelConnection";class IS extends TS{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const o=iu();return new Promise(((l,c)=>{const u=new t_;u.setWithCredentials(!0),u.listenOnce(n_.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case sa.NO_ERROR:const p=u.getResponseJson();Y(_t,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case sa.TIMEOUT:Y(_t,`RPC '${e}' ${o} timed out`),c(new X(F.DEADLINE_EXCEEDED,"Request time out"));break;case sa.HTTP_ERROR:const g=u.getStatus();if(Y(_t,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const k=v==null?void 0:v.error;if(k&&k.status&&k.message){const O=(function(B){const N=B.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(N)>=0?N:F.UNKNOWN})(k.status);c(new X(O,k.message))}else c(new X(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new X(F.UNAVAILABLE,"Connection failed."));break;default:le(9055,{c_:e,streamId:o,l_:u.getLastErrorCode(),h_:u.getLastError()})}}finally{Y(_t,`RPC '${e}' ${o} completed.`)}}));const d=JSON.stringify(s);Y(_t,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",d,r,15)}))}P_(e,n,r){const s=iu(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=i_(),l=s_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");Y(_t,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);this.T_(p);let g=!1,v=!1;const k=new wS({Ho:V=>{v?Y(_t,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(g||(Y(_t,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),Y(_t,`RPC '${e}' stream ${s} sending:`,V),p.send(V))},Yo:()=>p.close()}),O=(V,B,N)=>{V.listen(B,(L=>{try{N(L)}catch(H){setTimeout((()=>{throw H}),0)}}))};return O(p,Ti.EventType.OPEN,(()=>{v||(Y(_t,`RPC '${e}' stream ${s} transport opened.`),k.s_())})),O(p,Ti.EventType.CLOSE,(()=>{v||(v=!0,Y(_t,`RPC '${e}' stream ${s} transport closed`),k.__(),this.I_(p))})),O(p,Ti.EventType.ERROR,(V=>{v||(v=!0,Ar(_t,`RPC '${e}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),k.__(new X(F.UNAVAILABLE,"The operation could not be completed")))})),O(p,Ti.EventType.MESSAGE,(V=>{var B;if(!v){const N=V.data[0];Ne(!!N,16349);const L=N,H=(L==null?void 0:L.error)||((B=L[0])===null||B===void 0?void 0:B.error);if(H){Y(_t,`RPC '${e}' stream ${s} received error:`,H);const ue=H.status;let me=(function(w){const b=tt[w];if(b!==void 0)return j_(b)})(ue),A=H.message;me===void 0&&(me=F.INTERNAL,A="Unknown error status: "+ue+" with message "+H.message),v=!0,k.__(new X(me,A)),p.close()}else Y(_t,`RPC '${e}' stream ${s} received:`,N),k.a_(N)}})),O(l,r_.STAT_EVENT,(V=>{V.stat===Kc.PROXY?Y(_t,`RPC '${e}' stream ${s} detected buffering proxy`):V.stat===Kc.NOPROXY&&Y(_t,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{k.o_()}),0),k}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((n=>n===e))}}function _c(){return typeof document<"u"?document:null}/**
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
 */function wl(t){return new S0(t,!0)}/**
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
 */class ty{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&Y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const _p="PersistentStream";class ny{constructor(e,n,r,s,i,o,l,c){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new ty(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Jn(n.toString()),Jn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===n&&this.W_(r,s)}),(r=>{e((()=>{const s=new X(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return Y(_p,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget((()=>this.b_===e?n():(Y(_p,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class AS extends ny{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=k0(this.serializer,e),r=(function(i){if(!("targetChange"in i))return he.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?bn(o.readTime):he.min()})(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=ru(this.serializer),n.addTarget=(function(i,o){let l;const c=o.target;if(l=Xc(c)?{documents:D0(i,c)}:{query:V0(i,c).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=H_(i,o.resumeToken);const u=eu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(he.min())>0){l.readTime=Da(i,o.snapshotVersion.toTimestamp());const u=eu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l})(this.serializer,e);const r=M0(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=ru(this.serializer),n.removeTarget=e,this.k_(n)}}class bS extends ny{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return Ne(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ne(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ne(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=O0(e.writeResults,e.commitTime),r=bn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=ru(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>N0(this.serializer,r)))};this.k_(n)}}/**
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
 */class RS{}class SS extends RS{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new X(F.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,tu(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(F.UNKNOWN,i.toString())}))}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Jo(e,tu(n,r),s,o,l,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X(F.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class PS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Jn(n),this._a=!1):Y("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Zr="RemoteStore";class CS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((o=>{r.enqueueAndForget((async()=>{as(this)&&(Y(Zr,"Restarting streams for network reachability change."),await(async function(c){const u=ge(c);u.Ia.add(4),await _o(u),u.Aa.set("Unknown"),u.Ia.delete(4),await Il(u)})(this))}))})),this.Aa=new PS(r,s)}}async function Il(t){if(as(t))for(const e of t.da)await e(!0)}async function _o(t){for(const e of t.da)await e(!1)}function ry(t,e){const n=ge(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),sh(n)?rh(n):Xs(n).x_()&&nh(n,e))}function th(t,e){const n=ge(t),r=Xs(n);n.Ta.delete(e),r.x_()&&sy(n,e),n.Ta.size===0&&(r.x_()?r.B_():as(n)&&n.Aa.set("Unknown"))}function nh(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Xs(t).H_(e)}function sy(t,e){t.Ra.$e(e),Xs(t).Y_(e)}function rh(t){t.Ra=new I0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Xs(t).start(),t.Aa.aa()}function sh(t){return as(t)&&!Xs(t).M_()&&t.Ta.size>0}function as(t){return ge(t).Ia.size===0}function iy(t){t.Ra=void 0}async function kS(t){t.Aa.set("Online")}async function NS(t){t.Ta.forEach(((e,n)=>{nh(t,e)}))}async function OS(t,e){iy(t),sh(t)?(t.Aa.la(e),rh(t)):t.Aa.set("Unknown")}async function DS(t,e,n){if(t.Aa.set("Online"),e instanceof q_&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ta.delete(l),s.Ra.removeTarget(l))})(t,e)}catch(r){Y(Zr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xa(t,r)}else if(e instanceof la?t.Ra.Ye(e):e instanceof $_?t.Ra.it(e):t.Ra.et(e),!n.isEqual(he.min()))try{const r=await ey(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const l=i.Ra.Pt(o);return l.targetChanges.forEach(((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.Ta.get(u);d&&i.Ta.set(u,d.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,u)=>{const d=i.Ta.get(c);if(!d)return;i.Ta.set(c,d.withResumeToken(ft.EMPTY_BYTE_STRING,d.snapshotVersion)),sy(i,c);const p=new pr(d.target,c,u,d.sequenceNumber);nh(i,p)})),i.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(r){Y(Zr,"Failed to raise snapshot:",r),await xa(t,r)}}async function xa(t,e,n){if(!Qs(e))throw e;t.Ia.add(1),await _o(t),t.Aa.set("Offline"),n||(n=()=>ey(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Y(Zr,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Il(t)}))}function oy(t,e){return e().catch((n=>xa(t,n,e)))}async function Al(t){const e=ge(t),n=Cr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:ju;for(;VS(e);)try{const s=await gS(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,xS(e,s)}catch(s){await xa(e,s)}ay(e)&&ly(e)}function VS(t){return as(t)&&t.Pa.length<10}function xS(t,e){t.Pa.push(e);const n=Cr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function ay(t){return as(t)&&!Cr(t).M_()&&t.Pa.length>0}function ly(t){Cr(t).start()}async function MS(t){Cr(t).na()}async function LS(t){const e=Cr(t);for(const n of t.Pa)e.X_(n.mutations)}async function US(t,e,n){const r=t.Pa.shift(),s=Wu.from(r,e,n);await oy(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Al(t)}async function FS(t,e){e&&Cr(t).Z_&&await(async function(r,s){if((function(o){return T0(o)&&o!==F.ABORTED})(s.code)){const i=r.Pa.shift();Cr(r).N_(),await oy(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Al(r)}})(t,e),ay(t)&&ly(t)}async function yp(t,e){const n=ge(t);n.asyncQueue.verifyOperationInProgress(),Y(Zr,"RemoteStore received new credentials");const r=as(n);n.Ia.add(3),await _o(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Il(n)}async function BS(t,e){const n=ge(t);e?(n.Ia.delete(2),await Il(n)):e||(n.Ia.add(2),await _o(n),n.Aa.set("Unknown"))}function Xs(t){return t.Va||(t.Va=(function(n,r,s){const i=ge(n);return i.ia(),new AS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:kS.bind(null,t),e_:NS.bind(null,t),n_:OS.bind(null,t),J_:DS.bind(null,t)}),t.da.push((async e=>{e?(t.Va.N_(),sh(t)?rh(t):t.Aa.set("Unknown")):(await t.Va.stop(),iy(t))}))),t.Va}function Cr(t){return t.ma||(t.ma=(function(n,r,s){const i=ge(n);return i.ia(),new bS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:MS.bind(null,t),n_:FS.bind(null,t),ea:LS.bind(null,t),ta:US.bind(null,t)}),t.da.push((async e=>{e?(t.ma.N_(),await Al(t)):(await t.ma.stop(),t.Pa.length>0&&(Y(Zr,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))}))),t.ma}/**
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
 */class ih{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Er,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new ih(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oh(t,e){if(Jn("AsyncQueue",`${e}: ${t}`),Qs(t))return new X(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class bs{static emptySet(e){return new bs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ne.comparator(n.key,r.key):(n,r)=>ne.comparator(n.key,r.key),this.keyedMap=wi(),this.sortedSet=new Ge(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new bs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class vp{constructor(){this.fa=new Ge(ne.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):le(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Bs{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((l=>{o.push({type:0,doc:l})})),new Bs(e,n,bs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_l(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class jS{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class $S{constructor(){this.queries=Ep(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=ge(n),i=s.queries;s.queries=Ep(),i.forEach(((o,l)=>{for(const c of l.wa)c.onError(r)}))})(this,new X(F.ABORTED,"Firestore shutting down"))}}function Ep(){return new is((t=>C_(t)),_l)}async function qS(t,e){const n=ge(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new jS,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=oh(o,`Initialization of query '${ys(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&ah(n)}async function HS(t,e){const n=ge(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function GS(t,e){const n=ge(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.wa)l.Ca(s)&&(r=!0);o.ya=s}}r&&ah(n)}function KS(t,e,n){const r=ge(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function ah(t){t.Da.forEach((e=>{e.next()}))}var ou,Tp;(Tp=ou||(ou={})).Fa="default",Tp.Cache="cache";class zS{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Bs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=Bs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==ou.Cache}}/**
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
 */class cy{constructor(e){this.key=e}}class uy{constructor(e){this.key=e}}class WS{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=we(),this.mutatedKeys=we(),this.Xa=k_(e),this.eu=new bs(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new vp,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((d,p)=>{const g=s.get(d),v=yl(this.query,p)?p:null,k=!!g&&this.mutatedKeys.has(g.key),O=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let V=!1;g&&v?g.data.isEqual(v.data)?k!==O&&(r.track({type:3,doc:v}),V=!0):this.iu(g,v)||(r.track({type:2,doc:v}),V=!0,(c&&this.Xa(v,c)>0||u&&this.Xa(v,u)<0)&&(l=!0)):!g&&v?(r.track({type:0,doc:v}),V=!0):g&&!v&&(r.track({type:1,doc:g}),V=!0,(c||u)&&(l=!0)),V&&(v?(o=o.add(v),i=O?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{eu:o,ru:r,Ds:l,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort(((d,p)=>(function(v,k){const O=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le(20277,{At:V})}};return O(v)-O(k)})(d.type,p.type)||this.Xa(d.doc,p.doc))),this.su(r),s=s!=null&&s;const l=n&&!s?this.ou():[],c=this.Za.size===0&&this.current&&!s?1:0,u=c!==this.Ya;return this.Ya=c,o.length!==0||u?{snapshot:new Bs(this.query,e.eu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new vp,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((n=>this.Ha=this.Ha.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ha=this.Ha.delete(n))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=we(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const n=[];return e.forEach((r=>{this.Za.has(r)||n.push(new uy(r))})),this.Za.forEach((r=>{e.has(r)||n.push(new cy(r))})),n}uu(e){this.Ha=e.qs,this.Za=we();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return Bs.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const lh="SyncEngine";class QS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class JS{constructor(e){this.key=e,this.lu=!1}}class XS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new is((l=>C_(l)),_l),this.Tu=new Map,this.Iu=new Set,this.du=new Ge(ne.comparator),this.Eu=new Map,this.Au=new Xu,this.Ru={},this.Vu=new Map,this.mu=Fs.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function YS(t,e,n=!0){const r=my(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await hy(r,e,n,!0),s}async function ZS(t,e){const n=my(t);await hy(n,e,!0,!1)}async function hy(t,e,n,r){const s=await mS(t.localStore,In(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await eP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&ry(t.remoteStore,s),l}async function eP(t,e,n,r,s){t.gu=(p,g,v)=>(async function(O,V,B,N){let L=V.view.nu(B);L.Ds&&(L=await fp(O.localStore,V.query,!1).then((({documents:A})=>V.view.nu(A,L))));const H=N&&N.targetChanges.get(V.targetId),ue=N&&N.targetMismatches.get(V.targetId)!=null,me=V.view.applyChanges(L,O.isPrimaryClient,H,ue);return Ip(O,V.targetId,me._u),me.snapshot})(t,p,g,v);const i=await fp(t.localStore,e,!0),o=new WS(e,i.qs),l=o.nu(i.documents),c=mo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);Ip(t,n,u._u);const d=new QS(e,n,o);return t.Pu.set(e,d),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),u.snapshot}async function tP(t,e,n){const r=ge(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((o=>!_l(o,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await su(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&th(r.remoteStore,s.targetId),au(r,s.targetId)})).catch(Ws)):(au(r,s.targetId),await su(r.localStore,s.targetId,!0))}async function nP(t,e){const n=ge(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),th(n.remoteStore,r.targetId))}async function rP(t,e,n){const r=uP(t);try{const s=await(function(o,l){const c=ge(o),u=je.now(),d=l.reduce(((v,k)=>v.add(k.key)),we());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",(v=>{let k=Xn(),O=we();return c.Os.getEntries(v,d).next((V=>{k=V,k.forEach(((B,N)=>{N.isValidDocument()||(O=O.add(B))}))})).next((()=>c.localDocuments.getOverlayedDocuments(v,k))).next((V=>{p=V;const B=[];for(const N of l){const L=m0(N,p.get(N.key).overlayedDocument);L!=null&&B.push(new os(N.key,L,E_(L.value.mapValue),An.exists(!0)))}return c.mutationQueue.addMutationBatch(v,u,B,l)})).next((V=>{g=V;const B=V.applyToLocalDocumentSet(p,O);return c.documentOverlayCache.saveOverlays(v,V.batchId,B)}))})).then((()=>({batchId:g.batchId,changes:O_(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,l,c){let u=o.Ru[o.currentUser.toKey()];u||(u=new Ge(ye)),u=u.insert(l,c),o.Ru[o.currentUser.toKey()]=u})(r,s.batchId,n),await yo(r,s.changes),await Al(r.remoteStore)}catch(s){const i=oh(s,"Failed to persist write");n.reject(i)}}async function dy(t,e){const n=ge(t);try{const r=await fS(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Eu.get(i);o&&(Ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?Ne(o.lu,14607):s.removedDocuments.size>0&&(Ne(o.lu,42227),o.lu=!1))})),await yo(n,r,e)}catch(r){await Ws(r)}}function wp(t,e,n){const r=ge(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach(((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(o,l){const c=ge(o);c.onlineState=l;let u=!1;c.queries.forEach(((d,p)=>{for(const g of p.wa)g.va(l)&&(u=!0)})),u&&ah(c)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function sP(t,e,n){const r=ge(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new Ge(ne.comparator);o=o.insert(i,Et.newNoDocument(i,he.min()));const l=we().add(i),c=new Tl(he.min(),new Map,new Ge(ye),o,l);await dy(r,c),r.du=r.du.remove(i),r.Eu.delete(e),ch(r)}else await su(r.localStore,e,!1).then((()=>au(r,e,n))).catch(Ws)}async function iP(t,e){const n=ge(t),r=e.batch.batchId;try{const s=await dS(n.localStore,e);py(n,r,null),fy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await yo(n,s)}catch(s){await Ws(s)}}async function oP(t,e,n){const r=ge(t);try{const s=await(function(o,l){const c=ge(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next((p=>(Ne(p!==null,37113),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d))).next((()=>c.localDocuments.getDocuments(u,d)))}))})(r.localStore,e);py(r,e,n),fy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await yo(r,s)}catch(s){await Ws(s)}}function fy(t,e){(t.Vu.get(e)||[]).forEach((n=>{n.resolve()})),t.Vu.delete(e)}function py(t,e,n){const r=ge(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function au(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach((r=>{t.Au.containsKey(r)||gy(t,r)}))}function gy(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(th(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),ch(t))}function Ip(t,e,n){for(const r of n)r instanceof cy?(t.Au.addReference(r.key,e),aP(t,r)):r instanceof uy?(Y(lh,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||gy(t,r.key)):le(19791,{yu:r})}function aP(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(Y(lh,"New document in limbo: "+n),t.Iu.add(r),ch(t))}function ch(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new ne(Ue.fromString(e)),r=t.mu.next();t.Eu.set(r,new JS(n)),t.du=t.du.insert(n,r),ry(t.remoteStore,new pr(In(S_(n.path)),r,"TargetPurposeLimboResolution",pl.ue))}}async function yo(t,e,n){const r=ge(t),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach(((l,c)=>{o.push(r.gu(c,e,n).then((u=>{var d;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Zu.Es(c.targetId,u);i.push(p)}})))})),await Promise.all(o),r.hu.J_(s),await(async function(c,u){const d=ge(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>$.forEach(u,(g=>$.forEach(g.Is,(v=>d.persistence.referenceDelegate.addReference(p,g.targetId,v))).next((()=>$.forEach(g.ds,(v=>d.persistence.referenceDelegate.removeReference(p,g.targetId,v)))))))))}catch(p){if(!Qs(p))throw p;Y(eh,"Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const v=d.Fs.get(g),k=v.snapshotVersion,O=v.withLastLimboFreeSnapshotVersion(k);d.Fs=d.Fs.insert(g,O)}}})(r.localStore,i))}async function lP(t,e){const n=ge(t);if(!n.currentUser.isEqual(e)){Y(lh,"User change. New user:",e.toKey());const r=await Z_(n.localStore,e);n.currentUser=e,(function(i,o){i.Vu.forEach((l=>{l.forEach((c=>{c.reject(new X(F.CANCELLED,o))}))})),i.Vu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await yo(n,r.Bs)}}function cP(t,e){const n=ge(t),r=n.Eu.get(e);if(r&&r.lu)return we().add(r.key);{let s=we();const i=n.Tu.get(e);if(!i)return s;for(const o of i){const l=n.Pu.get(o);s=s.unionWith(l.view.tu)}return s}}function my(t){const e=ge(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=dy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sP.bind(null,e),e.hu.J_=GS.bind(null,e.eventManager),e.hu.pu=KS.bind(null,e.eventManager),e}function uP(t){const e=ge(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=iP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oP.bind(null,e),e}class Ma{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=wl(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return hS(this.persistence,new lS,e.initialUser,this.serializer)}Du(e){return new Y_(Yu.Vi,this.serializer)}bu(e){return new yS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ma.provider={build:()=>new Ma};class hP extends Ma{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){Ne(this.persistence.referenceDelegate instanceof Va,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new z0(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?Vt.withCacheSize(this.cacheSizeBytes):Vt.DEFAULT;return new Y_((r=>Va.Vi(r,n)),this.serializer)}}class lu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>wp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=lP.bind(null,this.syncEngine),await BS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new $S})()}createDatastore(e){const n=wl(e.databaseInfo.databaseId),r=(function(i){return new IS(i)})(e.databaseInfo);return(function(i,o,l,c){return new SS(i,o,l,c)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,l){return new CS(r,s,i,o,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>wp(this.syncEngine,n,0)),(function(){return mp.C()?new mp:new vS})())}createSyncEngine(e,n){return(function(s,i,o,l,c,u,d){const p=new XS(s,i,o,l,c,u);return d&&(p.fu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=ge(s);Y(Zr,"RemoteStore shutting down."),i.Ia.add(5),await _o(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}lu.provider={build:()=>new lu};/**
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
 */class dP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Jn("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const kr="FirestoreClient";class fP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=yt.UNAUTHENTICATED,this.clientId=Bu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{Y(kr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(Y(kr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Er;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=oh(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function yc(t,e){t.asyncQueue.verifyOperationInProgress(),Y(kr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Z_(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Ar("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then((()=>{Y("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Ar("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),t._offlineComponents=e}async function Ap(t,e){t.asyncQueue.verifyOperationInProgress();const n=await pP(t);Y(kr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>yp(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>yp(e.remoteStore,s))),t._onlineComponents=e}async function pP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y(kr,"Using user provided OfflineComponentProvider");try{await yc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Ar("Error using user provided cache. Falling back to memory cache: "+n),await yc(t,new Ma)}}else Y(kr,"Using default OfflineComponentProvider"),await yc(t,new hP(void 0));return t._offlineComponents}async function _y(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y(kr,"Using user provided OnlineComponentProvider"),await Ap(t,t._uninitializedComponentsProvider._online)):(Y(kr,"Using default OnlineComponentProvider"),await Ap(t,new lu))),t._onlineComponents}function gP(t){return _y(t).then((e=>e.syncEngine))}async function mP(t){const e=await _y(t),n=e.eventManager;return n.onListen=YS.bind(null,e.syncEngine),n.onUnlisten=tP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=ZS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=nP.bind(null,e.syncEngine),n}function _P(t,e,n={}){const r=new Er;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,u){const d=new dP({next:g=>{d.Ou(),o.enqueueAndForget((()=>HS(i,p))),g.fromCache&&c.source==="server"?u.reject(new X(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new zS(l,d,{includeMetadataChanges:!0,ka:!0});return qS(i,p)})(await mP(t),t.asyncQueue,e,n,r))),r.promise}/**
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
 */function yy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const bp=new Map;/**
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
 */const vy="firestore.googleapis.com",Rp=!0;class Sp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new X(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=vy,this.ssl=Rp}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Rp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=X_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<G0)throw new X(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}CR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new X(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new X(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new X(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class bl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new ER;switch(r.type){case"firstParty":return new AR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=bp.get(n);r&&(Y("ComponentProvider","Removing Datastore"),bp.delete(n),r.terminate())})(this),Promise.resolve()}}function yP(t,e,n,r={}){var s;t=Qi(t,bl);const i=er(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(cl(`https://${c}`),ul("Firestore",!0)),o.host!==vy&&o.host!==c&&Ar("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:r});if(!Xr(u,l)&&(t._setSettings(u),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=yt.MOCK_USER;else{d=zm(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new X(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new yt(g)}t._authCredentials=new TR(new a_(d,p))}}/**
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
 */class ls{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ls(this.firestore,e,this._query)}}class at{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new at(this.firestore,e,this._key)}toJSON(){return{type:at._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(po(n,at._jsonSchema))return new at(e,r||null,new ne(Ue.fromString(n.referencePath)))}}at._jsonSchemaVersion="firestore/documentReference/1.0",at._jsonSchema={type:rt("string",at._jsonSchemaVersion),referencePath:rt("string")};class Tr extends ls{constructor(e,n,r){super(e,n,S_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new at(this.firestore,null,new ne(e))}withConverter(e){return new Tr(this.firestore,e,this._path)}}function cu(t,e,...n){if(t=He(t),c_("collection","path",e),t instanceof bl){const r=Ue.fromString(e,...n);return Bf(r),new Tr(t,null,r)}{if(!(t instanceof at||t instanceof Tr))throw new X(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return Bf(r),new Tr(t.firestore,null,r)}}function Ey(t,e,...n){if(t=He(t),arguments.length===1&&(e=Bu.newId()),c_("doc","path",e),t instanceof bl){const r=Ue.fromString(e,...n);return Ff(r),new at(t,null,new ne(r))}{if(!(t instanceof at||t instanceof Tr))throw new X(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return Ff(r),new at(t.firestore,t instanceof Tr?t.converter:null,new ne(r))}}/**
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
 */const Pp="AsyncQueue";class Cp{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new ty(this,"async_queue_retry"),this.oc=()=>{const r=_c();r&&Y(Pp,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=_c();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=_c();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const n=new Er;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Qs(e))throw e;Y(Pp,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const n=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Jn("INTERNAL UNHANDLED ERROR: ",kp(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=ih.createAndSchedule(this,e,n,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&le(47125,{hc:kp(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function kp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Rl extends bl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Cp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Cp(e),this._firestoreClient=void 0,await e}}}function vP(t,e){const n=typeof t=="object"?t:dl(),r=typeof t=="string"?t:Ca,s=fo(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Lu("firestore");i&&yP(s,...i)}return s}function Ty(t){if(t._terminated)throw new X(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||EP(t),t._firestoreClient}function EP(t){var e,n,r;const s=t._freezeSettings(),i=(function(l,c,u,d){return new BR(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,yy(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new fP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&(function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}})(t._componentsProvider))}/**
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
 */class Jt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jt(ft.fromBase64String(e))}catch(n){throw new X(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Jt(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Jt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(po(e,Jt._jsonSchema))return Jt.fromBase64String(e.bytes)}}Jt._jsonSchemaVersion="firestore/bytes/1.0",Jt._jsonSchema={type:rt("string",Jt._jsonSchemaVersion),bytes:rt("string")};/**
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
 */class uh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class hh{constructor(e){this._methodName=e}}/**
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
 */class Rn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Rn._jsonSchemaVersion}}static fromJSON(e){if(po(e,Rn._jsonSchema))return new Rn(e.latitude,e.longitude)}}Rn._jsonSchemaVersion="firestore/geoPoint/1.0",Rn._jsonSchema={type:rt("string",Rn._jsonSchemaVersion),latitude:rt("number"),longitude:rt("number")};/**
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
 */class Sn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Sn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(po(e,Sn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Sn(e.vectorValues);throw new X(F.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Sn._jsonSchemaVersion="firestore/vectorValue/1.0",Sn._jsonSchema={type:rt("string",Sn._jsonSchemaVersion),vectorValues:rt("object")};/**
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
 */const TP=/^__.*__$/;class wP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new os(e,this.data,this.fieldMask,n,this.fieldTransforms):new go(e,this.data,n,this.fieldTransforms)}}function wy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le(40011,{Ec:t})}}class dh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new dh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return La(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(wy(this.Ec)&&TP.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class IP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||wl(e)}Dc(e,n,r,s=!1){return new dh({Ec:e,methodName:n,bc:r,path:ht.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Iy(t){const e=t._freezeSettings(),n=wl(t._databaseId);return new IP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function AP(t,e,n,r,s,i={}){const o=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);Ry("Data must be an object, but it was:",o,r);const l=Ay(r,o);let c,u;if(i.merge)c=new rn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=RP(e,p,n);if(!o.contains(g))throw new X(F.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);PP(d,g)||d.push(g)}c=new rn(d),u=o.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,u=o.fieldTransforms;return new wP(new Qt(l),c,u)}class fh extends hh{_toFieldTransform(e){return new d0(e.path,new to)}isEqual(e){return e instanceof fh}}function bP(t,e,n,r=!1){return ph(n,t.Dc(r?4:3,e))}function ph(t,e){if(by(t=He(t)))return Ry("Unsupported field value:",e,t),Ay(t,e);if(t instanceof hh)return(function(r,s){if(!wy(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const l of r){let c=ph(l,s.yc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=He(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return c0(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=je.fromDate(r);return{timestampValue:Da(s.serializer,i)}}if(r instanceof je){const i=new je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Da(s.serializer,i)}}if(r instanceof Rn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Jt)return{bytesValue:H_(s.serializer,r._byteString)};if(r instanceof at){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ju(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Sn)return(function(o,l){return{mapValue:{fields:{[y_]:{stringValue:v_},[ka]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw l.wc("VectorValues must only contain numeric values.");return Ku(l.serializer,u)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${fl(r)}`)})(t,e)}function Ay(t,e){const n={};return d_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ss(t,((r,s)=>{const i=ph(s,e.Vc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function by(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof je||t instanceof Rn||t instanceof Jt||t instanceof at||t instanceof hh||t instanceof Sn)}function Ry(t,e,n){if(!by(n)||!u_(n)){const r=fl(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function RP(t,e,n){if((e=He(e))instanceof uh)return e._internalPath;if(typeof e=="string")return Sy(t,e);throw La("Field path arguments must be of type string or ",t,!1,void 0,n)}const SP=new RegExp("[~\\*/\\[\\]]");function Sy(t,e,n){if(e.search(SP)>=0)throw La(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new uh(...e.split("."))._internalPath}catch{throw La(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function La(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new X(F.INVALID_ARGUMENT,l+t+c)}function PP(t,e){return t.some((n=>n.isEqual(e)))}/**
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
 */class Py{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new CP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(gh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class CP extends Py{data(){return super.data()}}function gh(t,e){return typeof e=="string"?Sy(t,e):e instanceof uh?e._internalPath:e._delegate._internalPath}/**
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
 */function kP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mh{}class Cy extends mh{}function ky(t,e,...n){let r=[];e instanceof mh&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((c=>c instanceof yh)).length,l=i.filter((c=>c instanceof _h)).length;if(o>1||o>0&&l>0)throw new X(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class _h extends Cy{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new _h(e,n,r)}_apply(e){const n=this._parse(e);return Oy(e._query,n),new ls(e.firestore,e.converter,Yc(e._query,n))}_parse(e){const n=Iy(e.firestore);return(function(i,o,l,c,u,d,p){let g;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new X(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Op(p,d);const k=[];for(const O of p)k.push(Np(c,i,O));g={arrayValue:{values:k}}}else g=Np(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Op(p,d),g=bP(l,o,p,d==="in"||d==="not-in");return nt.create(u,d,g)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class yh extends mh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new yh(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:hn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)Oy(o,c),o=Yc(o,c)})(e._query,n),new ls(e.firestore,e.converter,Yc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class vh extends Cy{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new vh(e,n)}_apply(e){const n=(function(s,i,o){if(s.startAt!==null)throw new X(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new X(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new eo(i,o)})(e._query,this._field,this._direction);return new ls(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new Js(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,n))}}function Ny(t,e="asc"){const n=e,r=gh("orderBy",t);return vh._create(r,n)}function Np(t,e,n){if(typeof(n=He(n))=="string"){if(n==="")throw new X(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!P_(e)&&n.indexOf("/")!==-1)throw new X(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ue.fromString(n));if(!ne.isDocumentKey(r))throw new X(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Wf(t,new ne(r))}if(n instanceof at)return Wf(t,n._key);throw new X(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fl(n)}.`)}function Op(t,e){if(!Array.isArray(t)||t.length===0)throw new X(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Oy(t,e){const n=(function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new X(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new X(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class NP{convertValue(e,n="none"){switch(Pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Sr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw le(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ss(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[ka].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((o=>Ye(o.doubleValue)));return new Sn(i)}convertGeoPoint(e){return new Rn(Ye(e.latitude),Ye(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ml(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Xi(e));default:return null}}convertTimestamp(e){const n=Rr(e);return new je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ue.fromString(e);Ne(J_(r),9688,{name:e});const s=new Yi(r.get(1),r.get(3)),i=new ne(r.popFirst(5));return s.isEqual(n)||Jn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function OP(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Qo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Rs extends Py{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ca(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(gh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new X(F.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Rs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Rs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Rs._jsonSchema={type:rt("string",Rs._jsonSchemaVersion),bundleSource:rt("string","DocumentSnapshot"),bundleName:rt("string"),bundle:rt("string")};class ca extends Rs{data(e={}){return super.data(e)}}class Ss{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Qo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new ca(this._firestore,this._userDataWriter,r.key,r,new Qo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((l=>{const c=new ca(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Qo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new ca(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Qo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:DP(l.type),doc:c,oldIndex:u,newIndex:d}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new X(F.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ss._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Bu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function DP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le(61501,{type:t})}}Ss._jsonSchemaVersion="firestore/querySnapshot/1.0",Ss._jsonSchema={type:rt("string",Ss._jsonSchemaVersion),bundleSource:rt("string","QuerySnapshot"),bundleName:rt("string"),bundle:rt("string")};class VP extends NP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new at(this.firestore,null,n)}}function Dy(t){t=Qi(t,ls);const e=Qi(t.firestore,Rl),n=Ty(e),r=new VP(e);return kP(t._query),_P(n,t._query).then((s=>new Ss(e,r,t,s)))}function xP(t){return Vy(Qi(t.firestore,Rl),[new zu(t._key,An.none())])}function MP(t,e){const n=Qi(t.firestore,Rl),r=Ey(t),s=OP(t.converter,e);return Vy(n,[AP(Iy(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,An.exists(!1))]).then((()=>r))}function Vy(t,e){return(function(r,s){const i=new Er;return r.asyncQueue.enqueueAndForget((async()=>rP(await gP(r),s,i))),i.promise})(Ty(t),e)}function LP(){return new fh("serverTimestamp")}(function(e,n=!0){(function(s){zs=s})(rs),Vn(new un("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Rl(new wR(r.getProvider("auth-internal")),new bR(o,r.getProvider("app-check-internal")),(function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new X(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yi(u.options.projectId,d)})(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),Gt(Vf,xf,e),Gt(Vf,xf,"esm2017")})();var UP="firebase",FP="11.10.0";/**
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
 */Gt(UP,FP,"app");/**
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
 */const BP=new Map,jP={activated:!1,tokenObservers:[]};function dn(t){return BP.get(t)||Object.assign({},jP)}const Dp={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:960*1e3};/**
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
 */class $P{constructor(e,n,r,s,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Bc,this.pending.promise.catch(n=>{}),await qP(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Bc,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function qP(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const HP={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},Ua=new Ks("appCheck","AppCheck",HP);function xy(t){if(!dn(t).activated)throw Ua.create("use-before-activation",{appName:t.name})}/**
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
 */const GP="firebase-app-check-database",KP=1,uu="firebase-app-check-store";let Jo=null;function zP(){return Jo||(Jo=new Promise((t,e)=>{try{const n=indexedDB.open(GP,KP);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;e(Ua.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(uu,{keyPath:"compositeKey"})}}}catch(n){e(Ua.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Jo)}function WP(t,e){return QP(JP(t),e)}async function QP(t,e){const r=(await zP()).transaction(uu,"readwrite"),i=r.objectStore(uu).put({compositeKey:t,value:e});return new Promise((o,l)=>{i.onsuccess=c=>{o()},r.onerror=c=>{var u;l(Ua.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}function JP(t){return`${t.options.appId}-${t.name}`}/**
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
 */const hu=new hl("@firebase/app-check");function Vp(t,e){return Wm()?WP(t,e).catch(n=>{hu.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const XP={error:"UNKNOWN_ERROR"};function YP(t){return Mu.encodeString(JSON.stringify(t),!1)}async function du(t,e=!1,n=!1){const r=t.app;xy(r);const s=dn(r);let i=s.token,o;if(i&&!Ai(i)&&(s.token=void 0,i=void 0),!i){const u=await s.cachedTokenPromise;u&&(Ai(u)?i=u:await Vp(r,void 0))}if(!e&&i&&Ai(i))return{token:i.token};let l=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),l=!0),i=await dn(r).exchangeTokenPromise}catch(u){u.code==="appCheck/throttled"||u.code==="appCheck/initial-throttle"?hu.warn(u.message):n&&hu.error(u),o=u}let c;return i?o?Ai(i)?c={token:i.token,internalError:o}:c=Mp(o):(c={token:i.token},s.token=i,await Vp(r,i)):c=Mp(o),l&&nC(r,c),c}async function ZP(t){const e=t.app;xy(e);const{provider:n}=dn(e);{const{token:r}=await n.getToken();return{token:r}}}function eC(t,e,n,r){const{app:s}=t,i=dn(s),o={next:n,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&Ai(i.token)){const l=i.token;Promise.resolve().then(()=>{n({token:l.token}),xp(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>xp(t))}function My(t,e){const n=dn(t),r=n.tokenObservers.filter(s=>s.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function xp(t){const{app:e}=t,n=dn(e);let r=n.tokenRefresher;r||(r=tC(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function tC(t){const{app:e}=t;return new $P(async()=>{const n=dn(e);let r;if(n.token?r=await du(t,!0):r=await du(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=dn(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-300*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},Dp.RETRIAL_MIN_WAIT,Dp.RETRIAL_MAX_WAIT)}function nC(t,e){const n=dn(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function Ai(t){return t.expireTimeMillis-Date.now()>0}function Mp(t){return{token:YP(XP),error:t}}/**
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
 */class rC{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=dn(this.app);for(const n of e)My(this.app,n.next);return Promise.resolve()}}function sC(t,e){return new rC(t,e)}function iC(t){return{getToken:e=>du(t,e),getLimitedUseToken:()=>ZP(t),addTokenListener:e=>eC(t,"INTERNAL",e),removeTokenListener:e=>My(t.app,e)}}const oC="@firebase/app-check",aC="0.10.1",lC="app-check",Lp="app-check-internal";function cC(){Vn(new un(lC,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return sC(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Lp).initialize()})),Vn(new un(Lp,t=>{const e=t.getProvider("app-check").getImmediate();return iC(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Gt(oC,aC)}cC();function Eh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Ly(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uC=Ly,Uy=new Ks("auth","Firebase",Ly());/**
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
 */const Fa=new hl("@firebase/auth");function hC(t,...e){Fa.logLevel<=Te.WARN&&Fa.warn(`Auth (${rs}): ${t}`,...e)}function ua(t,...e){Fa.logLevel<=Te.ERROR&&Fa.error(`Auth (${rs}): ${t}`,...e)}/**
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
 */function fn(t,...e){throw Th(t,...e)}function Pn(t,...e){return Th(t,...e)}function Fy(t,e,n){const r=Object.assign(Object.assign({},uC()),{[e]:n});return new Ks("auth","Firebase",r).create(e,{appName:t.name})}function wr(t){return Fy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Th(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Uy.create(t,...e)}function ae(t,e,...n){if(!t)throw Th(e,...n)}function Kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ua(e),new Error(e)}function Yn(t,e){t||Kn(e)}/**
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
 */function fu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function dC(){return Up()==="http:"||Up()==="https:"}function Up(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function fC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dC()||eb()||"connection"in navigator)?navigator.onLine:!0}function pC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class vo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yn(n>e,"Short delay should be less than long delay!"),this.isMobile=XA()||tb()}get(){return fC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function wh(t,e){Yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class By{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const gC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const mC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],_C=new vo(3e4,6e4);function cs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Or(t,e,n,r,s={}){return jy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=ho(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return ZA()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&er(t.emulatorConfig.host)&&(u.credentials="include"),By.fetch()(await $y(t,t.config.apiHost,n,l),u)})}async function jy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},gC),e);try{const s=new vC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Xo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Xo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Xo(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Fy(t,d,u);fn(t,d)}}catch(s){if(s instanceof pn)throw s;fn(t,"network-request-failed",{message:String(s)})}}async function Sl(t,e,n,r,s={}){const i=await Or(t,e,n,r,s);return"mfaPendingCredential"in i&&fn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function $y(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?wh(t.config,s):`${t.config.apiScheme}://${s}`;return mC.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function yC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Pn(this.auth,"network-request-failed")),_C.get())})}}function Xo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Pn(t,e,r);return s.customData._tokenResponse=n,s}function Fp(t){return t!==void 0&&t.enterprise!==void 0}class EC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return yC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function TC(t,e){return Or(t,"GET","/v2/recaptchaConfig",cs(t,e))}/**
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
 */async function wC(t,e){return Or(t,"POST","/v1/accounts:delete",e)}async function Ba(t,e){return Or(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Li(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function IC(t,e=!1){const n=He(t),r=await n.getIdToken(e),s=Ih(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Li(vc(s.auth_time)),issuedAtTime:Li(vc(s.iat)),expirationTime:Li(vc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function vc(t){return Number(t)*1e3}function Ih(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ua("JWT malformed, contained fewer than 3 sections"),null;try{const s=qm(n);return s?JSON.parse(s):(ua("Failed to decode base64 JWT payload"),null)}catch(s){return ua("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Bp(t){const e=Ih(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function so(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof pn&&AC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function AC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class bC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class pu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Li(this.lastLoginAt),this.creationTime=Li(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ja(t){var e;const n=t.auth,r=await t.getIdToken(),s=await so(t,Ba(n,{idToken:r}));ae(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?qy(i.providerUserInfo):[],l=SC(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new pu(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function RC(t){const e=He(t);await ja(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function SC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function qy(t){return t.map(e=>{var{providerId:n}=e,r=Eh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function PC(t,e){const n=await jy(t,{},async()=>{const r=ho({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await $y(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&er(t.emulatorConfig.host)&&(c.credentials="include"),By.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function CC(t,e){return Or(t,"POST","/v2/accounts:revokeToken",cs(t,e))}/**
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
 */class Ps{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=Bp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await PC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ps;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ps,this.toJSON())}_performRefresh(){return Kn("not implemented")}}/**
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
 */function ir(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class sn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Eh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new pu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await so(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return IC(this,e)}reload(){return RC(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new sn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ja(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(jt(this.auth.app))return Promise.reject(wr(this.auth));const e=await this.getIdToken();return await so(this,wC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,k=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(l=n.tenantId)!==null&&l!==void 0?l:void 0,V=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,B=(u=n.createdAt)!==null&&u!==void 0?u:void 0,N=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:L,emailVerified:H,isAnonymous:ue,providerData:me,stsTokenManager:A}=n;ae(L&&A,e,"internal-error");const E=Ps.fromJSON(this.name,A);ae(typeof L=="string",e,"internal-error"),ir(p,e.name),ir(g,e.name),ae(typeof H=="boolean",e,"internal-error"),ae(typeof ue=="boolean",e,"internal-error"),ir(v,e.name),ir(k,e.name),ir(O,e.name),ir(V,e.name),ir(B,e.name),ir(N,e.name);const w=new sn({uid:L,auth:e,email:g,emailVerified:H,displayName:p,isAnonymous:ue,photoURL:k,phoneNumber:v,tenantId:O,stsTokenManager:E,createdAt:B,lastLoginAt:N});return me&&Array.isArray(me)&&(w.providerData=me.map(b=>Object.assign({},b))),V&&(w._redirectEventId=V),w}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ps;s.updateFromServerResponse(n);const i=new sn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ja(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ae(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?qy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ps;l.updateFromIdToken(r);const c=new sn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new pu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const jp=new Map;function zn(t){Yn(t instanceof Function,"Expected a class definition");let e=jp.get(t);return e?(Yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jp.set(t,e),e)}/**
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
 */class Hy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Hy.type="NONE";const $p=Hy;/**
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
 */function ha(t,e,n){return`firebase:${t}:${e}:${n}`}class Cs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ha(this.userKey,s.apiKey,i),this.fullPersistenceKey=ha("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ba(this.auth,{idToken:e}).catch(()=>{});return n?sn._fromGetAccountInfoResponse(this.auth,n,e):null}return sn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Cs(zn($p),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||zn($p);const o=ha(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){let p;if(typeof d=="string"){const g=await Ba(e,{idToken:d}).catch(()=>{});if(!g)break;p=await sn._fromGetAccountInfoResponse(e,g,d)}else p=sn._fromJSON(e,d);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Cs(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Cs(i,e,r))}}/**
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
 */function qp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jy(e))return"Blackberry";if(Xy(e))return"Webos";if(Ky(e))return"Safari";if((e.includes("chrome/")||zy(e))&&!e.includes("edge/"))return"Chrome";if(Qy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Gy(t=It()){return/firefox\//i.test(t)}function Ky(t=It()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zy(t=It()){return/crios\//i.test(t)}function Wy(t=It()){return/iemobile/i.test(t)}function Qy(t=It()){return/android/i.test(t)}function Jy(t=It()){return/blackberry/i.test(t)}function Xy(t=It()){return/webos/i.test(t)}function Ah(t=It()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function kC(t=It()){var e;return Ah(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function NC(){return nb()&&document.documentMode===10}function Yy(t=It()){return Ah(t)||Qy(t)||Xy(t)||Jy(t)||/windows phone/i.test(t)||Wy(t)}/**
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
 */function Zy(t,e=[]){let n;switch(t){case"Browser":n=qp(It());break;case"Worker":n=`${qp(It())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${rs}/${r}`}/**
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
 */class OC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function DC(t,e={}){return Or(t,"GET","/v2/passwordPolicy",cs(t,e))}/**
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
 */const VC=6;class xC{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:VC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class MC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hp(this),this.idTokenSubscription=new Hp(this),this.beforeStateQueue=new OC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Uy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Cs.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ba(this,{idToken:e}),r=await sn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(jt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ja(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(jt(this.app))return Promise.reject(wr(this));const n=e?He(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return jt(this.app)?Promise.reject(wr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return jt(this.app)?Promise.reject(wr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await DC(this),n=new xC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ks("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await CC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zn(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await Cs.create(this,[zn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(jt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&hC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ys(t){return He(t)}class Hp{constructor(e){this.auth=e,this.observer=null,this.addObserver=cb(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Pl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function LC(t){Pl=t}function ev(t){return Pl.loadJS(t)}function UC(){return Pl.recaptchaEnterpriseScript}function FC(){return Pl.gapiScript}function BC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class jC{constructor(){this.enterprise=new $C}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class $C{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const qC="recaptcha-enterprise",tv="NO_RECAPTCHA";class HC{constructor(e){this.type=qC,this.auth=Ys(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{TC(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new EC(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Fp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(tv)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new jC().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Fp(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=UC();c.length!==0&&(c+=l),ev(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Gp(t,e,n,r=!1,s=!1){const i=new HC(t);let o;if(s)o=tv;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Kp(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Gp(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Gp(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function GC(t,e){const n=fo(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Xr(i,e??{}))return s;fn(s,"already-initialized")}return n.initialize({options:e})}function KC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(zn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zC(t,e,n){const r=Ys(t);ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=nv(e),{host:o,port:l}=WC(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ae(Xr(u,r.config.emulator)&&Xr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,er(o)?(cl(`${i}//${o}${c}`),ul("Auth",!0)):QC()}function nv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function WC(t){const e=nv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:zp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:zp(o)}}}function zp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function QC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class bh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Kn("not implemented")}_getIdTokenResponse(e){return Kn("not implemented")}_linkToIdToken(e,n){return Kn("not implemented")}_getReauthenticationResolver(e){return Kn("not implemented")}}async function JC(t,e){return Or(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function XC(t,e){return Sl(t,"POST","/v1/accounts:signInWithPassword",cs(t,e))}/**
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
 */async function YC(t,e){return Sl(t,"POST","/v1/accounts:signInWithEmailLink",cs(t,e))}async function ZC(t,e){return Sl(t,"POST","/v1/accounts:signInWithEmailLink",cs(t,e))}/**
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
 */class io extends bh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new io(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new io(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kp(e,n,"signInWithPassword",XC);case"emailLink":return YC(e,{email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kp(e,r,"signUpPassword",JC);case"emailLink":return ZC(e,{idToken:n,email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ks(t,e){return Sl(t,"POST","/v1/accounts:signInWithIdp",cs(t,e))}/**
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
 */const e1="http://localhost";class es extends bh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new es(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Eh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new es(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ks(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ks(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ks(e,n)}buildRequest(){const e={requestUri:e1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ho(n)}return e}}/**
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
 */function t1(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function n1(t){const e=vi(Ei(t)).link,n=e?vi(Ei(e)).deep_link_id:null,r=vi(Ei(t)).deep_link_id;return(r?vi(Ei(r)).link:null)||r||n||e||t}class Rh{constructor(e){var n,r,s,i,o,l;const c=vi(Ei(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=t1((s=c.mode)!==null&&s!==void 0?s:null);ae(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=n1(e);try{return new Rh(n)}catch{return null}}}/**
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
 */class Zs{constructor(){this.providerId=Zs.PROVIDER_ID}static credential(e,n){return io._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Rh.parseLink(n);return ae(r,"argument-error"),io._fromEmailAndCode(e,r.code,r.tenantId)}}Zs.PROVIDER_ID="password";Zs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class rv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Eo extends rv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class js{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await sn._fromIdTokenResponse(e,r,s),o=Wp(r);return new js({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Wp(r);return new js({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Wp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class $a extends pn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,$a.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new $a(e,n,r,s)}}function sv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?$a._fromErrorAndOperation(t,i,e,r):i})}async function r1(t,e,n=!1){const r=await so(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return js._forOperation(t,"link",r)}/**
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
 */async function s1(t,e,n=!1){const{auth:r}=t;if(jt(r.app))return Promise.reject(wr(r));const s="reauthenticate";try{const i=await so(t,sv(r,s,e,t),n);ae(i.idToken,r,"internal-error");const o=Ih(i.idToken);ae(o,r,"internal-error");const{sub:l}=o;return ae(t.uid===l,r,"user-mismatch"),js._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&fn(r,"user-mismatch"),i}}/**
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
 */async function iv(t,e,n=!1){if(jt(t.app))return Promise.reject(wr(t));const r="signIn",s=await sv(t,r,e),i=await js._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function i1(t,e){return iv(Ys(t),e)}/**
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
 */async function o1(t){const e=Ys(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function a1(t,e,n){return jt(t.app)?Promise.reject(wr(t)):i1(He(t),Zs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&o1(t),r})}function l1(t,e,n,r){return He(t).onIdTokenChanged(e,n,r)}function c1(t,e,n){return He(t).beforeAuthStateChanged(e,n)}function u1(t,e,n,r){return He(t).onAuthStateChanged(e,n,r)}function h1(t){return He(t).signOut()}const qa="__sak";/**
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
 */class ov{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qa,"1"),this.storage.removeItem(qa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const d1=1e3,f1=10;class av extends ov{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Yy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);NC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,f1):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},d1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}av.type="LOCAL";const p1=av;/**
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
 */class lv extends ov{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}lv.type="SESSION";const cv=lv;/**
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
 */function g1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Cl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Cl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await g1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cl.receivers=[];/**
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
 */function Sh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class m1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Sh("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Cn(){return window}function _1(t){Cn().location.href=t}/**
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
 */function uv(){return typeof Cn().WorkerGlobalScope<"u"&&typeof Cn().importScripts=="function"}async function y1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function v1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function E1(){return uv()?self:null}/**
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
 */const hv="firebaseLocalStorageDb",T1=1,Ha="firebaseLocalStorage",dv="fbase_key";class To{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kl(t,e){return t.transaction([Ha],e?"readwrite":"readonly").objectStore(Ha)}function w1(){const t=indexedDB.deleteDatabase(hv);return new To(t).toPromise()}function gu(){const t=indexedDB.open(hv,T1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ha,{keyPath:dv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ha)?e(r):(r.close(),await w1(),e(await gu()))})})}async function Qp(t,e,n){const r=kl(t,!0).put({[dv]:e,value:n});return new To(r).toPromise()}async function I1(t,e){const n=kl(t,!1).get(e),r=await new To(n).toPromise();return r===void 0?null:r.value}function Jp(t,e){const n=kl(t,!0).delete(e);return new To(n).toPromise()}const A1=800,b1=3;class fv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>b1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cl._getInstance(E1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await y1(),!this.activeServiceWorker)return;this.sender=new m1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||v1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gu();return await Qp(e,qa,"1"),await Jp(e,qa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>I1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=kl(s,!1).getAll();return new To(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),A1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fv.type="LOCAL";const R1=fv;new vo(3e4,6e4);/**
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
 */function S1(t,e){return e?zn(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ph extends bh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ks(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ks(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ks(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function P1(t){return iv(t.auth,new Ph(t),t.bypassAuthState)}function C1(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),s1(n,new Ph(t),t.bypassAuthState)}async function k1(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),r1(n,new Ph(t),t.bypassAuthState)}/**
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
 */class pv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return P1;case"linkViaPopup":case"linkViaRedirect":return k1;case"reauthViaPopup":case"reauthViaRedirect":return C1;default:fn(this.auth,"internal-error")}}resolve(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const N1=new vo(2e3,1e4);class ws extends pv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ws.currentPopupAction&&ws.currentPopupAction.cancel(),ws.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){Yn(this.filter.length===1,"Popup operations only handle one event");const e=Sh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ws.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,N1.get())};e()}}ws.currentPopupAction=null;/**
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
 */const O1="pendingRedirect",da=new Map;class D1 extends pv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=da.get(this.auth._key());if(!e){try{const r=await V1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}da.set(this.auth._key(),e)}return this.bypassAuthState||da.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function V1(t,e){const n=L1(e),r=M1(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function x1(t,e){da.set(t._key(),e)}function M1(t){return zn(t._redirectPersistence)}function L1(t){return ha(O1,t.config.apiKey,t.name)}async function U1(t,e,n=!1){if(jt(t.app))return Promise.reject(wr(t));const r=Ys(t),s=S1(r,e),o=await new D1(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const F1=600*1e3;class B1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!j1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!gv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=F1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xp(e))}saveEventToCache(e){this.cachedEventUids.add(Xp(e)),this.lastProcessedEventTime=Date.now()}}function Xp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function j1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gv(t);default:return!1}}/**
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
 */async function $1(t,e={}){return Or(t,"GET","/v1/projects",e)}/**
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
 */const q1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,H1=/^https?/;async function G1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $1(t);for(const n of e)try{if(K1(n))return}catch{}fn(t,"unauthorized-domain")}function K1(t){const e=fu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!H1.test(n))return!1;if(q1.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const z1=new vo(3e4,6e4);function Yp(){const t=Cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function W1(t){return new Promise((e,n)=>{var r,s,i;function o(){Yp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yp(),n(Pn(t,"network-request-failed"))},timeout:z1.get()})}if(!((s=(r=Cn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Cn().gapi)===null||i===void 0)&&i.load)o();else{const l=BC("iframefcb");return Cn()[l]=()=>{gapi.load?o():n(Pn(t,"network-request-failed"))},ev(`${FC()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw fa=null,e})}let fa=null;function Q1(t){return fa=fa||W1(t),fa}/**
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
 */const J1=new vo(5e3,15e3),X1="__/auth/iframe",Y1="emulator/auth/iframe",Z1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ek=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tk(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wh(e,Y1):`https://${t.config.authDomain}/${X1}`,r={apiKey:e.apiKey,appName:t.name,v:rs},s=ek.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ho(r).slice(1)}`}async function nk(t){const e=await Q1(t),n=Cn().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:tk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Z1,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Pn(t,"network-request-failed"),l=Cn().setTimeout(()=>{i(o)},J1.get());function c(){Cn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const rk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sk=500,ik=600,ok="_blank",ak="http://localhost";class Zp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lk(t,e,n,r=sk,s=ik){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},rk),{width:r.toString(),height:s.toString(),top:i,left:o}),u=It().toLowerCase();n&&(l=zy(u)?ok:n),Gy(u)&&(e=e||ak,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[v,k])=>`${g}${v}=${k},`,"");if(kC(u)&&l!=="_self")return ck(e||"",l),new Zp(null);const p=window.open(e||"",l,d);ae(p,t,"popup-blocked");try{p.focus()}catch{}return new Zp(p)}function ck(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const uk="__/auth/handler",hk="emulator/auth/handler",dk=encodeURIComponent("fac");async function eg(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:rs,eventId:s};if(e instanceof rv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",lb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Eo){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${dk}=${encodeURIComponent(c)}`:"";return`${fk(t)}?${ho(l).slice(1)}${u}`}function fk({config:t}){return t.emulator?wh(t,hk):`https://${t.authDomain}/${uk}`}/**
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
 */const Ec="webStorageSupport";class pk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cv,this._completeRedirectFn=U1,this._overrideRedirectResult=x1}async _openPopup(e,n,r,s){var i;Yn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await eg(e,n,r,fu(),s);return lk(e,o,Sh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await eg(e,n,r,fu(),s);return _1(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Yn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await nk(e),r=new B1(e);return n.register("authEvent",s=>(ae(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ec,{type:Ec},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ec];o!==void 0&&n(!!o),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=G1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Yy()||Ky()||Ah()}}const gk=pk;var tg="@firebase/auth",ng="1.10.8";/**
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
 */class mk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _k(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yk(t){Vn(new un("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zy(t)},u=new MC(r,s,i,c);return KC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vn(new un("auth-internal",e=>{const n=Ys(e.getProvider("auth").getImmediate());return(r=>new mk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(tg,ng,_k(t)),Gt(tg,ng,"esm2017")}/**
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
 */const vk=300,Ek=Km("authIdTokenMaxAge")||vk;let rg=null;const Tk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ek)return;const s=n==null?void 0:n.token;rg!==s&&(rg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function wk(t=dl()){const e=fo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=GC(t,{popupRedirectResolver:gk,persistence:[R1,p1,cv]}),r=Km("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Tk(i.toString());c1(n,o,()=>o(n.currentUser)),l1(n,l=>o(l))}}const s=Hm("auth");return s&&zC(n,`http://${s}`),n}function Ik(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}LC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Pn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Ik().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yk("Browser");/**
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
 */const mv="firebasestorage.googleapis.com",_v="storageBucket",Ak=120*1e3,bk=600*1e3;/**
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
 */class Xe extends pn{constructor(e,n,r=0){super(Tc(e),`Firebase Storage: ${n} (${Tc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Xe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Tc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Je;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Je||(Je={}));function Tc(t){return"storage/"+t}function Ch(){const t="An unknown error occurred, please check the error payload for server response.";return new Xe(Je.UNKNOWN,t)}function Rk(t){return new Xe(Je.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Sk(t){return new Xe(Je.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Pk(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Xe(Je.UNAUTHENTICATED,t)}function Ck(){return new Xe(Je.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function kk(t){return new Xe(Je.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Nk(){return new Xe(Je.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Ok(){return new Xe(Je.CANCELED,"User canceled the upload/download.")}function Dk(t){return new Xe(Je.INVALID_URL,"Invalid URL '"+t+"'.")}function Vk(t){return new Xe(Je.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function xk(){return new Xe(Je.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+_v+"' property when initializing the app?")}function Mk(){return new Xe(Je.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Lk(){return new Xe(Je.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Uk(t){return new Xe(Je.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function mu(t){return new Xe(Je.INVALID_ARGUMENT,t)}function yv(){return new Xe(Je.APP_DELETED,"The Firebase app was deleted.")}function Fk(t){return new Xe(Je.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ui(t,e){return new Xe(Je.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function mi(t){throw new Xe(Je.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Ht{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ht.makeFromUrl(e,n)}catch{return new Ht(e,"")}if(r.path==="")return r;throw Vk(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(H){H.path.charAt(H.path.length-1)==="/"&&(H.path_=H.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(H){H.path_=decodeURIComponent(H.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",v=new RegExp(`^https?://${p}/${d}/b/${s}/o${g}`,"i"),k={bucket:1,path:3},O=n===mv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,V="([^?#]*)",B=new RegExp(`^https?://${O}/${s}/${V}`,"i"),L=[{regex:l,indices:c,postModify:i},{regex:v,indices:k,postModify:u},{regex:B,indices:{bucket:1,path:2},postModify:u}];for(let H=0;H<L.length;H++){const ue=L[H],me=ue.regex.exec(e);if(me){const A=me[ue.indices.bucket];let E=me[ue.indices.path];E||(E=""),r=new Ht(A,E),ue.postModify(r);break}}if(r==null)throw Dk(e);return r}}class Bk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function jk(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function d(...V){u||(u=!0,e.apply(null,V))}function p(V){s=setTimeout(()=>{s=null,t(v,c())},V)}function g(){i&&clearTimeout(i)}function v(V,...B){if(u){g();return}if(V){g(),d.call(null,V,...B);return}if(c()||o){g(),d.call(null,V,...B);return}r<64&&(r*=2);let L;l===1?(l=2,L=0):L=(r+Math.random())*1e3,p(L)}let k=!1;function O(V){k||(k=!0,g(),!u&&(s!==null?(V||(l=2),clearTimeout(s),p(0)):V||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,O(!0)},n),O}function $k(t){t(!1)}/**
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
 */function qk(t){return t!==void 0}function Hk(t){return typeof t=="object"&&!Array.isArray(t)}function kh(t){return typeof t=="string"||t instanceof String}function sg(t){return Nh()&&t instanceof Blob}function Nh(){return typeof Blob<"u"}function ig(t,e,n,r){if(r<e)throw mu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw mu(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Nl(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function vv(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Jr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Jr||(Jr={}));/**
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
 */function Gk(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class Kk{constructor(e,n,r,s,i,o,l,c,u,d,p,g=!0,v=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=p,this.retry=g,this.isUsingEmulator=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,O)=>{this.resolve_=k,this.reject_=O,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Yo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Jr.NO_ERROR,c=i.getStatus();if(!l||Gk(c,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===Jr.ABORT;r(!1,new Yo(!1,null,d));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new Yo(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());qk(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=Ch();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?yv():Ok();o(c)}else{const c=Nk();o(c)}};this.canceled_?n(!1,new Yo(!1,null,!0)):this.backoffId_=jk(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&$k(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Yo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function zk(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Wk(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Qk(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Jk(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Xk(t,e,n,r,s,i,o=!0,l=!1){const c=vv(t.urlParams),u=t.url+c,d=Object.assign({},t.headers);return Qk(d,e),zk(d,n),Wk(d,i),Jk(d,r),new Kk(u,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
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
 */function Yk(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Zk(...t){const e=Yk();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Nh())return new Blob(t);throw new Xe(Je.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function eN(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function tN(t){if(typeof atob>"u")throw Uk("base-64");return atob(t)}/**
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
 */const Tn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class wc{constructor(e,n){this.data=e,this.contentType=n||null}}function nN(t,e){switch(t){case Tn.RAW:return new wc(Ev(e));case Tn.BASE64:case Tn.BASE64URL:return new wc(Tv(t,e));case Tn.DATA_URL:return new wc(sN(e),iN(e))}throw Ch()}function Ev(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function rN(t){let e;try{e=decodeURIComponent(t)}catch{throw Ui(Tn.DATA_URL,"Malformed data URL.")}return Ev(e)}function Tv(t,e){switch(t){case Tn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Ui(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Tn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Ui(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=tN(e)}catch(s){throw s.message.includes("polyfill")?s:Ui(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class wv{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ui(Tn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=oN(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function sN(t){const e=new wv(t);return e.base64?Tv(Tn.BASE64,e.rest):rN(e.rest)}function iN(t){return new wv(t).contentType}function oN(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class fr{constructor(e,n){let r=0,s="";sg(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(sg(this.data_)){const r=this.data_,s=eN(r,e,n);return s===null?null:new fr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new fr(r,!0)}}static getBlob(...e){if(Nh()){const n=e.map(r=>r instanceof fr?r.data_:r);return new fr(Zk.apply(null,n))}else{const n=e.map(o=>kh(o)?nN(Tn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new fr(s,!0)}}uploadData(){return this.data_}}/**
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
 */function Iv(t){let e;try{e=JSON.parse(t)}catch{return null}return Hk(e)?e:null}/**
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
 */function aN(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function lN(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Av(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function cN(t,e){return e}class Rt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||cN}}let Zo=null;function uN(t){return!kh(t)||t.length<2?t:Av(t)}function bv(){if(Zo)return Zo;const t=[];t.push(new Rt("bucket")),t.push(new Rt("generation")),t.push(new Rt("metageneration")),t.push(new Rt("name","fullPath",!0));function e(i,o){return uN(o)}const n=new Rt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Rt("size");return s.xform=r,t.push(s),t.push(new Rt("timeCreated")),t.push(new Rt("updated")),t.push(new Rt("md5Hash",null,!0)),t.push(new Rt("cacheControl",null,!0)),t.push(new Rt("contentDisposition",null,!0)),t.push(new Rt("contentEncoding",null,!0)),t.push(new Rt("contentLanguage",null,!0)),t.push(new Rt("contentType",null,!0)),t.push(new Rt("metadata","customMetadata",!0)),Zo=t,Zo}function hN(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Ht(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function dN(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return hN(r,t),r}function Rv(t,e,n){const r=Iv(e);return r===null?null:dN(t,r,n)}function fN(t,e,n,r){const s=Iv(e);if(s===null||!kh(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const d=t.bucket,p=t.fullPath,g="/b/"+o(d)+"/o/"+o(p),v=Nl(g,n,r),k=vv({alt:"media",token:u});return v+k})[0]}function pN(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Oh{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Sv(t){if(!t)throw Ch()}function gN(t,e){function n(r,s){const i=Rv(t,s,e);return Sv(i!==null),i}return n}function mN(t,e){function n(r,s){const i=Rv(t,s,e);return Sv(i!==null),fN(i,s,t.host,t._protocol)}return n}function Pv(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=Ck():s=Pk():n.getStatus()===402?s=Sk(t.bucket):n.getStatus()===403?s=kk(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Cv(t){const e=Pv(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=Rk(t.path)),i.serverResponse=s.serverResponse,i}return n}function _N(t,e,n){const r=e.fullServerUrl(),s=Nl(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new Oh(s,i,mN(t,n),o);return l.errorHandler=Cv(e),l}function yN(t,e){const n=e.fullServerUrl(),r=Nl(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(c,u){}const l=new Oh(r,s,o,i);return l.successCodes=[200,204],l.errorHandler=Cv(e),l}function vN(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function EN(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=vN(null,e)),r}function TN(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let L="";for(let H=0;H<2;H++)L=L+Math.random().toString().slice(2);return L}const c=l();o["Content-Type"]="multipart/related; boundary="+c;const u=EN(e,r,s),d=pN(u,n),p="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,g=`\r
--`+c+"--",v=fr.getBlob(p,r,g);if(v===null)throw Mk();const k={name:u.fullPath},O=Nl(i,t.host,t._protocol),V="POST",B=t.maxUploadRetryTime,N=new Oh(O,V,gN(t,n),B);return N.urlParams=k,N.headers=o,N.body=v.uploadData(),N.errorHandler=Pv(e),N}class wN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Jr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Jr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Jr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw mi("cannot .send() more than once");if(er(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw mi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw mi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw mi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw mi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class IN extends wN{initXhr(){this.xhr_.responseType="text"}}function Dh(){return new IN}/**
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
 */class ts{constructor(e,n){this._service=e,n instanceof Ht?this._location=n:this._location=Ht.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ts(e,n)}get root(){const e=new Ht(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Av(this._location.path)}get storage(){return this._service}get parent(){const e=aN(this._location.path);if(e===null)return null;const n=new Ht(this._location.bucket,e);return new ts(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Fk(e)}}function AN(t,e,n){t._throwIfRoot("uploadBytes");const r=TN(t.storage,t._location,bv(),new fr(e,!0),n);return t.storage.makeRequestWithTokens(r,Dh).then(s=>({metadata:s,ref:t}))}function bN(t){t._throwIfRoot("getDownloadURL");const e=_N(t.storage,t._location,bv());return t.storage.makeRequestWithTokens(e,Dh).then(n=>{if(n===null)throw Lk();return n})}function RN(t){t._throwIfRoot("deleteObject");const e=yN(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Dh)}function SN(t,e){const n=lN(t._location.path,e),r=new Ht(t._location.bucket,n);return new ts(t.storage,r)}/**
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
 */function PN(t){return/^[A-Za-z]+:\/\//.test(t)}function CN(t,e){return new ts(t,e)}function kv(t,e){if(t instanceof Vh){const n=t;if(n._bucket==null)throw xk();const r=new ts(n,n._bucket);return e!=null?kv(r,e):r}else return e!==void 0?SN(t,e):t}function kN(t,e){if(e&&PN(e)){if(t instanceof Vh)return CN(t,e);throw mu("To use ref(service, url), the first argument must be a Storage instance.")}else return kv(t,e)}function og(t,e){const n=e==null?void 0:e[_v];return n==null?null:Ht.makeFromBucketSpec(n,t)}function NN(t,e,n,r={}){t.host=`${e}:${n}`;const s=er(e);s&&(cl(`https://${t.host}/b`),ul("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:zm(i,t.app.options.projectId))}class Vh{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=mv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ak,this._maxUploadRetryTime=bk,this._requests=new Set,s!=null?this._bucket=Ht.makeFromBucketSpec(s,this._host):this._bucket=og(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ht.makeFromBucketSpec(this._url,e):this._bucket=og(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ig("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ig("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(jt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ts(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new Bk(yv());{const o=Xk(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const ag="@firebase/storage",lg="0.13.14";/**
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
 */const Nv="storage";function ON(t,e,n){return t=He(t),AN(t,e,n)}function DN(t){return t=He(t),bN(t)}function VN(t){return t=He(t),RN(t)}function cg(t,e){return t=He(t),kN(t,e)}function xN(t=dl(),e){t=He(t);const r=fo(t,Nv).getImmediate({identifier:e}),s=Lu("storage");return s&&MN(r,...s),r}function MN(t,e,n,r={}){NN(t,e,n,r)}function LN(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Vh(n,r,s,e,rs)}function UN(){Vn(new un(Nv,LN,"PUBLIC").setMultipleInstances(!0)),Gt(ag,lg,""),Gt(ag,lg,"esm2017")}UN();/**
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
 */const FN="type.googleapis.com/google.protobuf.Int64Value",BN="type.googleapis.com/google.protobuf.UInt64Value";function Ov(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function Ga(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>Ga(e));if(typeof t=="function"||typeof t=="object")return Ov(t,e=>Ga(e));throw new Error("Data cannot be encoded in JSON: "+t)}function $s(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case FN:case BN:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>$s(e)):typeof t=="function"||typeof t=="object"?Ov(t,e=>$s(e)):t}/**
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
 */const xh="functions";/**
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
 */const ug={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Mt extends pn{constructor(e,n,r){super(`${xh}/${e}`,n||""),this.details=r,Object.setPrototypeOf(this,Mt.prototype)}}function jN(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Ka(t,e){let n=jN(t),r=n,s;try{const i=e&&e.error;if(i){const o=i.status;if(typeof o=="string"){if(!ug[o])return new Mt("internal","internal");n=ug[o],r=o}const l=i.message;typeof l=="string"&&(r=l),s=i.details,s!==void 0&&(s=$s(s))}}catch{}return n==="ok"?null:new Mt(n,r,s)}/**
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
 */class $N{constructor(e,n,r,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,jt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||n.get().then(i=>this.auth=i,()=>{}),this.messaging||r.get().then(i=>this.messaging=i,()=>{}),this.appCheck||s==null||s.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:s}}}/**
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
 */const _u="us-central1",qN=/^data: (.*?)(?:\n|$)/;function HN(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new Mt("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class GN{constructor(e,n,r,s,i=_u,o=(...l)=>fetch(...l)){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new $N(e,n,r,s),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(i);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=_u}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function KN(t,e,n){const r=er(e);t.emulatorOrigin=`http${r?"s":""}://${e}:${n}`,r&&(cl(t.emulatorOrigin),ul("Functions",!0))}function zN(t,e,n){const r=s=>QN(t,e,s,{});return r.stream=(s,i)=>XN(t,e,s,i),r}async function WN(t,e,n,r){n["Content-Type"]="application/json";let s;try{s=await r(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let i=null;try{i=await s.json()}catch{}return{status:s.status,json:i}}async function Dv(t,e){const n={},r=await t.contextProvider.getContext(e.limitedUseAppCheckTokens);return r.authToken&&(n.Authorization="Bearer "+r.authToken),r.messagingToken&&(n["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(n["X-Firebase-AppCheck"]=r.appCheckToken),n}function QN(t,e,n,r){const s=t._url(e);return JN(t,s,n,r)}async function JN(t,e,n,r){n=Ga(n);const s={data:n},i=await Dv(t,r),o=r.timeout||7e4,l=HN(o),c=await Promise.race([WN(e,s,i,t.fetchImpl),l.promise,t.cancelAllRequests]);if(l.cancel(),!c)throw new Mt("cancelled","Firebase Functions instance was deleted.");const u=Ka(c.status,c.json);if(u)throw u;if(!c.json)throw new Mt("internal","Response is not valid JSON object.");let d=c.json.data;if(typeof d>"u"&&(d=c.json.result),typeof d>"u")throw new Mt("internal","Response is missing data field.");return{data:$s(d)}}function XN(t,e,n,r){const s=t._url(e);return YN(t,s,n,r||{})}async function YN(t,e,n,r){var s;n=Ga(n);const i={data:n},o=await Dv(t,r);o["Content-Type"]="application/json",o.Accept="text/event-stream";let l;try{l=await t.fetchImpl(e,{method:"POST",body:JSON.stringify(i),headers:o,signal:r==null?void 0:r.signal})}catch(v){if(v instanceof Error&&v.name==="AbortError"){const O=new Mt("cancelled","Request was cancelled.");return{data:Promise.reject(O),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(O)}}}}}}const k=Ka(0,null);return{data:Promise.reject(k),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(k)}}}}}}let c,u;const d=new Promise((v,k)=>{c=v,u=k});(s=r==null?void 0:r.signal)===null||s===void 0||s.addEventListener("abort",()=>{const v=new Mt("cancelled","Request was cancelled.");u(v)});const p=l.body.getReader(),g=ZN(p,c,u,r==null?void 0:r.signal);return{stream:{[Symbol.asyncIterator](){const v=g.getReader();return{async next(){const{value:k,done:O}=await v.read();return{value:k,done:O}},async return(){return await v.cancel(),{done:!0,value:void 0}}}}},data:d}}function ZN(t,e,n,r){const s=(o,l)=>{const c=o.match(qN);if(!c)return;const u=c[1];try{const d=JSON.parse(u);if("result"in d){e($s(d.result));return}if("message"in d){l.enqueue($s(d.message));return}if("error"in d){const p=Ka(0,d);l.error(p),n(p);return}}catch(d){if(d instanceof Mt){l.error(d),n(d);return}}},i=new TextDecoder;return new ReadableStream({start(o){let l="";return c();async function c(){if(r!=null&&r.aborted){const u=new Mt("cancelled","Request was cancelled");return o.error(u),n(u),Promise.resolve()}try{const{value:u,done:d}=await t.read();if(d){l.trim()&&s(l.trim(),o),o.close();return}if(r!=null&&r.aborted){const g=new Mt("cancelled","Request was cancelled");o.error(g),n(g),await t.cancel();return}l+=i.decode(u,{stream:!0});const p=l.split(`
`);l=p.pop()||"";for(const g of p)g.trim()&&s(g.trim(),o);return c()}catch(u){const d=u instanceof Mt?u:Ka(0,null);o.error(d),n(d)}}},cancel(){return t.cancel()}})}const hg="@firebase/functions",dg="0.12.9";/**
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
 */const eO="auth-internal",tO="app-check-internal",nO="messaging-internal";function rO(t){const e=(n,{instanceIdentifier:r})=>{const s=n.getProvider("app").getImmediate(),i=n.getProvider(eO),o=n.getProvider(nO),l=n.getProvider(tO);return new GN(s,i,o,l,r)};Vn(new un(xh,e,"PUBLIC").setMultipleInstances(!0)),Gt(hg,dg,t),Gt(hg,dg,"esm2017")}/**
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
 */function sO(t=dl(),e=_u){const r=fo(He(t),xh).getImmediate({identifier:e}),s=Lu("functions");return s&&iO(r,...s),r}function iO(t,e,n){KN(He(t),e,n)}function oO(t,e,n){return zN(He(t),e)}rO();const pa={apiKey:"AIzaSyAEJhyrN6BAdA3w1u0wuQGPj0LVQH-7eqs",authDomain:"kopten-bw-323f7.firebaseapp.com",projectId:"kopten-bw-323f7",storageBucket:"kopten-bw-323f7.firebasestorage.app",messagingSenderId:"722544059410",appId:"1:722544059410:web:48f9bb9b5339824366a4cb"},qs=!!(pa.apiKey&&pa.projectId&&pa.appId),Nr=qs?Xm(pa):null,Ic=Nr?wk(Nr):null,Fi=Nr?vP(Nr):null,fg=Nr?xN(Nr):null,pg=Nr?sO(Nr,"europe-west3"):null,aO={class:"wrap section"},lO={key:0,class:"notice"},cO={key:1,class:"notice"},uO={class:"gallery-grid"},hO=["src","alt"],dO={__name:"GalleryView",setup(t){const e=We([]),n=We(!0),r=We(""),s=[{title:"ST. MARKUS",file:"st-markus.jpg",src:"/images/gallery/st-markus.jpg",ratio:"4:3",size:"1200 × 900 px",caption:"Kirche St. Markus"},{title:"ST. GEORG",file:"st-georg-interior.jpg",src:"/images/churches/st-georg-interior.jpg",ratio:"4:3",size:"1200 × 900 px",caption:"Kirche St. Georg"},{title:"ST. MICHAEL · ULM",file:"st-michael-ulm.jpg",src:"/images/churches/st-michael-ulm.jpg",ratio:"4:3",size:"1200 × 900 px",caption:"Kirche St. Michael in Ulm"},{title:"ST. MINA · TUTTLINGEN",file:"st-mina-tuttlingen.jpg",src:"/images/churches/st-mina-tuttlingen.jpg",ratio:"4:3",size:"1200 × 900 px",caption:"St. Mina und Abraam"},{title:"GEMEINDEFEST",file:"gemeindefest.jpg",src:"/images/gallery/gemeindefest.jpg",ratio:"4:3",size:"1200 × 900 px",caption:"Gemeindefest"},{title:"OSTERN",file:"ostern.jpg",src:"/images/gallery/ostern.jpg",ratio:"4:3",size:"1200 × 900 px",caption:"Osterfeier"}];return Gs(async()=>{try{if(qs&&Fi){const i=ky(cu(Fi,"gallery"),Ny("createdAt","desc"));e.value=(await Dy(i)).docs.map(o=>({id:o.id,...o.data()}))}}catch{r.value="Die Online-Galerie ist momentan nicht erreichbar. Die Bild-Platzhalter bleiben sichtbar."}finally{n.value=!1}}),(i,o)=>(Ie(),Re(Le,null,[o[0]||(o[0]=y("section",{class:"page-hero"},[y("div",{class:"wrap"},[y("span",{class:"eyebrow light"},"EINBLICKE & ERINNERUNGEN"),y("h1",null,[se("Unsere "),y("em",null,"Galerie")]),y("p",null,"Bilder aus unserem Gemeindeleben, unserer Tradition und unseren gemeinsamen Festen."),y("div",{class:"image-note"},[se("Hintergrund später: "),y("b",null,"hero-gemeinde.jpg"),se(" · Ratio 16:9 · 2400 × 1350 px")])])],-1)),y("section",aO,[n.value?(Ie(),Re("div",lO,"Galerie wird geladen …")):r.value?(Ie(),Re("div",cO,_e(r.value),1)):Ds("",!0),y("div",uO,[(Ie(!0),Re(Le,null,Gn(e.value,l=>(Ie(),Re("figure",{key:l.id},[y("img",{src:l.url,alt:l.title||"Einblick in das Gemeindeleben",loading:"lazy"},null,8,hO),y("figcaption",null,_e(l.title||"Aus unserem Gemeindeleben"),1)]))),128)),(Ie(),Re(Le,null,Gn(s,l=>y("figure",{key:l.file,class:"gallery-placeholder"},[ce(Ts,{src:l.src,title:l.caption,ratio:l.ratio,size:l.size},null,8,["src","title","ratio","size"]),y("figcaption",null,_e(l.caption)+" · "+_e(l.file),1)])),64))])])],64))}},fO={class:"wrap section reveal"},pO={class:"event-list"},gO={class:"event-main"},mO={class:"event-time"},_O=["href"],yO={class:"calendar-section section reveal"},vO={class:"wrap"},EO={class:"calendar-grid"},TO={class:"feast-info"},wO={class:"feast-date"},IO={class:"wrap section reveal"},AO={class:"info-panel"},bO={__name:"EventsView",setup(t){jm();const e=[{city:"Stuttgart",church:"St. Georg Koptisch-Orthodoxe Kirche",address:"Wurmlinger Str. 49, 70597 Stuttgart",day:"Jeden Sonntag",time:"09:30 Uhr",map:"https://maps.google.com/?q=Wurmlinger+Strasse+49+70597+Stuttgart"},{city:"Ulm",church:"St. Michael – zu Gast in der Kreuzkirche",address:"Abt-Ulrich-Str. 2, 89079 Ulm",day:"Jeder 4. Samstag im Monat",time:"09:30 Uhr",map:"https://maps.google.com/?q=Abt-Ulrich-Str+2+Ulm"},{city:"Tuttlingen",church:"St. Mina und Abraam Koptisch-Orthodoxe Kirche",address:"Kolonie Str. 21, 78532 Tuttlingen",day:"Jeder 2. Samstag im Monat",time:"09:30 Uhr",map:"https://maps.google.com/?q=Kolonie+Strasse+21+Tuttlingen"}],n=[{date:"7. Januar",title:"Geburt Christi",file:"geburt-christi.jpg",note:"Weihnachten nach dem koptischen Kalender"},{date:"19. Januar",title:"Taufe Christi",file:"taufe-christi.jpg",note:"Epiphanie / Theophanie"},{date:"Februar–April",title:"Große Fastenzeit",file:"fastenzeit.jpg",note:"Zeit der Vorbereitung auf Pascha"},{date:"5. April",title:"Palmsonntag",file:"einzug-jerusalem.jpg",note:"Einzug Christi in Jerusalem"},{date:"10. April",title:"Karfreitag",file:"kreuzigung.jpg",note:"Kreuzigung Christi"},{date:"12. April",title:"Auferstehung Christi",file:"auferstehung.jpg",note:"Pascha / Ostern 2026"},{date:"19. April",title:"Thomas-Sonntag",file:"thomas-sonntag.jpg",note:"Der Apostel Thomas begegnet dem Auferstandenen"},{date:"21. Mai",title:"Christi Himmelfahrt",file:"himmelfahrt.jpg",note:"Himmelfahrt des Herrn"},{date:"31. Mai",title:"Pfingsten",file:"pfingsten.jpg",note:"Herabkunft des Heiligen Geistes"},{date:"12. Juli",title:"Petrus und Paulus",file:"apostel-petrus-paulus.jpg",note:"Fest der heiligen Apostel"},{date:"19. August",title:"Verklärung Christi",file:"verklaerung-christi.jpg",note:"Christus auf dem Berg Tabor"},{date:"11. September",title:"Neyrouz",file:"neyrouz.jpg",note:"Koptisches Neujahr und Märtyrer"},{date:"November–Januar",title:"Weihnachtsfasten",file:"weihnachtsfasten.jpg",note:"Vorbereitung auf das Fest der Geburt Christi"}];return(r,s)=>{const i=Ea("RouterLink");return Ie(),Re(Le,null,[s[8]||(s[8]=y("section",{class:"page-hero"},[y("div",{class:"wrap"},[y("span",{class:"eyebrow light"},"GEMEINSAM FEIERN & BETEN"),y("h1",null,[se("Gottesdienste & "),y("em",null,"Kirchenjahr")]),y("p",null,"Gottesdienstzeiten unserer Gemeinden und eine Auswahl wichtiger koptischer Festtage.")])],-1)),y("section",fO,[s[1]||(s[1]=y("div",{class:"section-heading"},[y("div",null,[y("span",{class:"eyebrow"},"REGELMÄSSIGE GOTTESDIENSTE"),y("h2",null,[se("Unsere "),y("em",null,"Gemeinden")])])],-1)),y("div",pO,[(Ie(),Re(Le,null,Gn(e,o=>y("article",{key:o.city,class:"event-row"},[s[0]||(s[0]=y("div",{class:"event-symbol"},"✦",-1)),y("div",gO,[y("h3",null,_e(o.city),1),y("p",null,_e(o.church),1),y("span",null,_e(o.address),1)]),y("div",mO,[y("b",null,_e(o.day),1),y("span",null,_e(o.time),1)]),y("a",{class:"text-link",target:"_blank",rel:"noreferrer",href:o.map},"Route ↗",8,_O)])),64))])]),y("section",yO,[y("div",vO,[s[2]||(s[2]=y("div",{class:"section-heading"},[y("div",null,[y("span",{class:"eyebrow"},"DAS KIRCHENJAHR"),y("h2",null,[se("Koptischer "),y("em",null,"Kalender 2026")]),y("p",{class:"muted"},"Ikonen und Platzhalter für wichtige Feste. Termine bitte vor Veröffentlichung mit dem offiziellen Kalender abgleichen.")]),y("a",{class:"btn btn-dark",href:"https://kopten.de/kalender.html",target:"_blank",rel:"noopener noreferrer"},"Offiziellen Kalender öffnen ↗")],-1)),y("div",EO,[(Ie(),Re(Le,null,Gn(n,o=>y("article",{key:o.file,class:"feast-card"},[ce(Ts,{src:`/images/icons/${o.file}`,title:o.title,ratio:"3 / 4",size:"900 × 1200 px"},null,8,["src","title"]),y("div",TO,[y("span",wO,_e(o.date),1),y("h3",null,_e(o.title),1),y("p",null,_e(o.note),1)])])),64))]),s[3]||(s[3]=y("p",{class:"calendar-source"},[se("Kalenderquelle und weitere Festtage: "),y("a",{href:"https://kopten.de/kalender.html",target:"_blank",rel:"noopener noreferrer"},"kopten.de/kalender.html ↗")],-1))])]),y("section",IO,[y("div",AO,[s[5]||(s[5]=y("span",{class:"eyebrow"},"HINWEIS",-1)),s[6]||(s[6]=y("h3",null,"Änderungen an Feiertagen",-1)),s[7]||(s[7]=y("p",null,"Gottesdienstzeiten können an kirchlichen Feiertagen und während der Fastenzeit abweichen. Bitte prüfe aktuelle Hinweise direkt bei der Gemeinde.",-1)),ce(i,{class:"btn btn-dark",to:"/kontakt"},{default:xe(()=>[...s[4]||(s[4]=[se("Kontakt aufnehmen →",-1)])]),_:1})])])],64)}}},RO={class:"wrap section contact-layout"},SO={class:"consent"},PO={key:0,class:"captcha-placeholder"},CO={key:1,class:"captcha-box"},kO=["disabled"],NO={key:2,class:"form-status",role:"status"},OO={__name:"ContactView",setup(t){const e=lo({name:"",email:"",subject:"",message:"",consent:!1}),n=We(!1),r=We(""),s=We(""),i=We(null),o="6Leux_wtAAAAAOQNv8HTnVFSm4sMSPwtBvl1q3l6",l=xt(()=>!!(qs&&pg&&o));Gs(()=>{if(!l.value)return;const u=document.createElement("script");u.src="https://www.google.com/recaptcha/api.js?onload=onRecaptchaReady&render=explicit",u.async=!0,u.defer=!0,window.onRecaptchaReady=()=>{window.grecaptcha&&document.getElementById("recaptcha-container")&&(i.value=window.grecaptcha.render("recaptcha-container",{sitekey:o,callback:d=>s.value=d,"expired-callback":()=>s.value="","error-callback":()=>s.value=""}))},document.head.appendChild(u)});async function c(){if(r.value="",!e.consent)return r.value="Bitte bestätigen Sie die Datenschutzhinweise.";if(!s.value)return r.value="Bitte bestätigen Sie zuerst reCAPTCHA.";if(!qs)return r.value="Der Nachrichtendienst ist noch nicht konfiguriert.";n.value=!0;try{await oO(pg,"submitContactMessage")({...e,captchaToken:s.value}),r.value="Vielen Dank! Ihre Nachricht wurde sicher übermittelt.",Object.assign(e,{name:"",email:"",subject:"",message:"",consent:!1}),s.value="",i.value!==null&&window.grecaptcha.reset(i.value)}catch{r.value="Die Nachricht konnte gerade nicht gesendet werden. Bitte versuchen Sie es später erneut.",s.value="",i.value!==null&&window.grecaptcha.reset(i.value)}finally{n.value=!1}}return(u,d)=>(Ie(),Re(Le,null,[d[15]||(d[15]=y("section",{class:"page-hero"},[y("div",{class:"wrap"},[y("span",{class:"eyebrow light"},"WIR SIND GERNE FÜR SIE DA"),y("h1",null,[se("Nehmen Sie "),y("em",null,"Kontakt auf")]),y("p",null,"Sie haben Fragen oder möchten uns besuchen? Schreiben Sie uns.")])],-1)),y("section",RO,[d[14]||(d[14]=FT('<div class="contact-info"><span class="eyebrow">KONTAKT &amp; ANFAHRT</span><h2>Wir freuen uns,<br><em>von Ihnen zu hören.</em></h2><p>Ob Fragen zu Gottesdiensten, unserer Gemeinde oder einfach ein erstes Kennenlernen – wir helfen Ihnen gerne weiter.</p><div class="contact-item"><span>⌖</span><div><b>Adresse</b><p>St. Georg Koptisch-Orthodoxe Kirche<br>Wurmlinger Str. 49<br>70597 Stuttgart</p><a href="https://maps.google.com/?q=Wurmlinger+Strasse+49+70597+Stuttgart" target="_blank" rel="noreferrer">Route planen ↗</a></div></div><div class="contact-item"><span>☎</span><div><b>Telefon</b><p><a href="tel:+49711604252">0711 604252</a></p></div></div><div class="contact-item"><span>✉</span><div><b>E-Mail</b><p><a href="mailto:info@st-georg.com">info@st-georg.com</a></p></div></div></div>',1)),y("form",{class:"contact-form",onSubmit:Sm(c,["prevent"])},[d[11]||(d[11]=y("h2",null,"Schreiben Sie uns",-1)),d[12]||(d[12]=y("p",{class:"muted"},"Alle mit * markierten Felder sind erforderlich.",-1)),y("label",null,[d[5]||(d[5]=se("Ihr Name *",-1)),lr(y("input",{"onUpdate:modelValue":d[0]||(d[0]=p=>e.name=p),required:"",maxlength:"100",autocomplete:"name",placeholder:"Vor- und Nachname"},null,512),[[Hr,e.name,void 0,{trim:!0}]])]),y("label",null,[d[6]||(d[6]=se("E-Mail-Adresse *",-1)),lr(y("input",{"onUpdate:modelValue":d[1]||(d[1]=p=>e.email=p),required:"",type:"email",maxlength:"254",autocomplete:"email",placeholder:"name@beispiel.de"},null,512),[[Hr,e.email,void 0,{trim:!0}]])]),y("label",null,[d[7]||(d[7]=se("Betreff",-1)),lr(y("input",{"onUpdate:modelValue":d[2]||(d[2]=p=>e.subject=p),maxlength:"150",placeholder:"Worum geht es?"},null,512),[[Hr,e.subject,void 0,{trim:!0}]])]),y("label",null,[d[8]||(d[8]=se("Ihre Nachricht *",-1)),lr(y("textarea",{"onUpdate:modelValue":d[3]||(d[3]=p=>e.message=p),required:"",maxlength:"5000",rows:"5",placeholder:"Wie können wir Ihnen helfen?"},null,512),[[Hr,e.message,void 0,{trim:!0}]])]),y("label",SO,[lr(y("input",{type:"checkbox","onUpdate:modelValue":d[4]||(d[4]=p=>e.consent=p),required:""},null,512),[[Tw,e.consent]]),d[9]||(d[9]=se(" Ich stimme zu, dass meine Angaben zur Bearbeitung meiner Anfrage verarbeitet werden. *",-1))]),l.value?(Ie(),Re("div",CO,[...d[10]||(d[10]=[y("div",{id:"recaptcha-container"},null,-1),y("small",null,"Spam-Schutz durch Google reCAPTCHA.",-1)])])):(Ie(),Re("div",PO,"Vor dem Livegang bitte den reCAPTCHA Site Key in der .env eintragen und die Domain in der Google reCAPTCHA-Konsole freischalten.")),y("button",{class:"btn btn-dark",disabled:n.value||!l.value},_e(n.value?"Wird gesendet …":"Nachricht sicher senden →"),9,kO),r.value?(Ie(),Re("p",NO,_e(r.value),1)):Ds("",!0),d[13]||(d[13]=y("p",{class:"privacy-note"},"Bitte senden Sie über dieses Formular keine vertraulichen oder besonders sensiblen Informationen.",-1))],32)])],64))}},DO={class:"wrap section admin-wrap"},VO={key:0,class:"info-panel"},xO={key:1,class:"admin-card"},MO=["disabled"],LO={class:"admin-head"},UO={class:"muted"},FO={class:"upload-panel"},BO={class:"file-picker"},jO=["disabled"],$O={key:0,class:"form-status",role:"status"},qO={class:"admin-gallery"},HO=["src","alt"],GO=["onClick"],KO={key:2,class:"form-status error"},zO={__name:"AdminView",setup(t){const e=We(null),n=We(""),r=We(""),s=We(""),i=We([]),o=We([]),l=We(!1),c=We(""),u=We("");let d=()=>{};Gs(()=>{qs&&(d=u1(Ic,async B=>{e.value=B,B&&await k()}))}),rl(()=>d());function p(B){i.value=Array.from(B.target.files||[]),c.value="",u.value=""}async function g(){l.value=!0,u.value="";try{await a1(Ic,n.value,r.value)}catch{u.value="Anmeldung fehlgeschlagen. Bitte Zugangsdaten prüfen."}finally{l.value=!1}}async function v(){await h1(Ic),o.value=[]}async function k(){try{const B=ky(cu(Fi,"gallery"),Ny("createdAt","desc"));o.value=(await Dy(B)).docs.map(N=>({id:N.id,...N.data()}))}catch{u.value="Galerie konnte nicht geladen werden. Bitte Firestore-Regeln prüfen."}}async function O(){if(i.value.length){l.value=!0,c.value="",u.value="";try{for(const B of i.value){if(!["image/jpeg","image/png","image/webp"].includes(B.type)||B.size>8*1024*1024)throw new Error("Bitte nur JPEG-, PNG- oder WebP-Dateien bis 8 MB auswählen.");const N=`gallery/${e.value.uid}/${Date.now()}-${crypto.randomUUID()}-${B.name.replace(/[^a-zA-Z0-9._-]/g,"_")}`,L=cg(fg,N);await ON(L,B,{contentType:B.type});const H=await DN(L);await MP(cu(Fi,"gallery"),{title:s.value||B.name,url:H,storagePath:N,createdAt:LP(),createdBy:e.value.uid})}c.value="Bilder erfolgreich hochgeladen.",i.value=[],s.value="",await k()}catch(B){u.value=B.message||"Upload fehlgeschlagen. Prüfe deine Firebase-Regeln."}finally{l.value=!1}}}async function V(B){if(confirm(`„${B.title||"Dieses Bild"}“ wirklich löschen?`)){l.value=!0;try{await xP(Ey(Fi,"gallery",B.id)),B.storagePath&&await VN(cg(fg,B.storagePath)),o.value=o.value.filter(N=>N.id!==B.id),c.value="Bild gelöscht."}catch{u.value="Löschen fehlgeschlagen. Bitte Firebase-Regeln prüfen."}finally{l.value=!1}}}return(B,N)=>(Ie(),Re(Le,null,[N[13]||(N[13]=y("section",{class:"page-hero"},[y("div",{class:"wrap"},[y("span",{class:"eyebrow light"},"GESCHÜTZTER BEREICH"),y("h1",null,[se("Gemeinde-"),y("em",null,"Administration")]),y("p",null,"Verwalten Sie die Bilder unserer Online-Galerie.")])],-1)),y("section",DO,[Wr(qs)?(Ie(),Re("div",xO,[e.value?(Ie(),Re(Le,{key:1},[y("div",LO,[y("div",null,[N[8]||(N[8]=y("span",{class:"eyebrow"},"ANGEMELDET",-1)),N[9]||(N[9]=y("h2",null,"Galerie verwalten",-1)),y("p",UO,_e(e.value.email),1)]),y("button",{class:"btn btn-outline",onClick:v},"Abmelden")]),y("div",FO,[y("label",null,[N[10]||(N[10]=se("Bildtitel",-1)),lr(y("input",{"onUpdate:modelValue":N[2]||(N[2]=L=>s.value=L),maxlength:"120",placeholder:"z. B. Gemeindefest"},null,512),[[Hr,s.value,void 0,{trim:!0}]])]),y("label",BO,[N[11]||(N[11]=se("Bilder auswählen",-1)),y("input",{type:"file",accept:"image/jpeg,image/png,image/webp",multiple:"",onChange:p},null,32)]),N[12]||(N[12]=y("p",{class:"muted"},"JPEG, PNG oder WebP · max. 8 MB pro Bild. Funktioniert auch auf dem Smartphone.",-1)),y("button",{class:"btn btn-dark",disabled:!i.value.length||l.value,onClick:O},_e(l.value?"Wird verarbeitet …":` ${i.value.length} Bild(er) hochladen →`),9,jO)]),c.value?(Ie(),Re("p",$O,_e(c.value),1)):Ds("",!0),y("div",qO,[(Ie(!0),Re(Le,null,Gn(o.value,L=>(Ie(),Re("article",{key:L.id},[y("img",{src:L.url,alt:L.title},null,8,HO),y("div",null,[y("b",null,_e(L.title||"Ohne Titel"),1),y("button",{class:"delete-btn",onClick:H=>V(L)},"Löschen",8,GO)])]))),128))])],64)):(Ie(),Re(Le,{key:0},[N[6]||(N[6]=y("h2",null,"Admin-Anmeldung",-1)),N[7]||(N[7]=y("p",{class:"muted"},"Nur autorisierte Gemeindeadministratoren haben Zugriff.",-1)),y("form",{onSubmit:Sm(g,["prevent"])},[y("label",null,[N[4]||(N[4]=se("E-Mail-Adresse",-1)),lr(y("input",{"onUpdate:modelValue":N[0]||(N[0]=L=>n.value=L),type:"email",required:"",autocomplete:"username"},null,512),[[Hr,n.value,void 0,{trim:!0}]])]),y("label",null,[N[5]||(N[5]=se("Passwort",-1)),lr(y("input",{"onUpdate:modelValue":N[1]||(N[1]=L=>r.value=L),type:"password",required:"",autocomplete:"current-password"},null,512),[[Hr,r.value]])]),y("button",{class:"btn btn-dark",disabled:l.value},_e(l.value?"Bitte warten …":"Anmelden →"),9,MO)],32)],64)),u.value?(Ie(),Re("p",KO,_e(u.value),1)):Ds("",!0)])):(Ie(),Re("div",VO,[...N[3]||(N[3]=[y("h3",null,"Firebase noch nicht verbunden",-1),y("p",null,"Lege eine .env-Datei anhand der .env.example an und trage deine Firebase-Projektdaten ein. Danach kannst du dich hier anmelden.",-1)])]))])],64))}},Vv=YI({history:kI(),scrollBehavior:()=>({top:0}),routes:[{path:"/",component:BA,meta:{title:"Startseite"}},{path:"/galerie",component:dO,meta:{title:"Galerie"}},{path:"/veranstaltungen",component:bO,meta:{title:"Veranstaltungen"}},{path:"/kontakt",component:OO,meta:{title:"Kontakt"}},{path:"/admin",component:zO,meta:{title:"Administration"}},{path:"/:pathMatch(.*)*",redirect:"/"}]});Vv.afterEach(t=>{document.title=`${t.meta.title||"Kirche"} · Koptisch-Orthodoxe Kirche Baden-Württemberg`});Sw(Kw).use(Vv).mount("#app");
