(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function s(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerpolicy&&(u.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?u.credentials="include":c.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(c){if(c.ep)return;c.ep=!0;const u=s(c);fetch(c.href,u)}})();function rf(i,n){const s=Object.create(null),r=i.split(",");for(let c=0;c<r.length;c++)s[r[c]]=!0;return n?c=>!!s[c.toLowerCase()]:c=>!!s[c]}const W3="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",q3=rf(W3);function du(i){if(ye(i)){const n={};for(let s=0;s<i.length;s++){const r=i[s],c=Jn(r)?Q3(r):du(r);if(c)for(const u in c)n[u]=c[u]}return n}else{if(Jn(i))return i;if(Ln(i))return i}}const G3=/;(?![^(]*\))/g,Y3=/:([^]+)/,K3=/\/\*.*?\*\//gs;function Q3(i){const n={};return i.replace(K3,"").split(G3).forEach(s=>{if(s){const r=s.split(Y3);r.length>1&&(n[r[0].trim()]=r[1].trim())}}),n}function Jr(i){let n="";if(Jn(i))n=i;else if(ye(i))for(let s=0;s<i.length;s++){const r=Jr(i[s]);r&&(n+=r+" ")}else if(Ln(i))for(const s in i)i[s]&&(n+=s+" ");return n.trim()}function Z3(i){if(!i)return null;let{class:n,style:s}=i;return n&&!Jn(n)&&(i.class=Jr(n)),s&&(i.style=du(s)),i}const J3="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",X3=rf(J3);function DA(i){return!!i||i===""}function tI(i,n){if(i.length!==n.length)return!1;let s=!0;for(let r=0;s&&r<i.length;r++)s=Wa(i[r],n[r]);return s}function Wa(i,n){if(i===n)return!0;let s=ay(i),r=ay(n);if(s||r)return s&&r?i.getTime()===n.getTime():!1;if(s=Yd(i),r=Yd(n),s||r)return i===n;if(s=ye(i),r=ye(n),s||r)return s&&r?tI(i,n):!1;if(s=Ln(i),r=Ln(n),s||r){if(!s||!r)return!1;const c=Object.keys(i).length,u=Object.keys(n).length;if(c!==u)return!1;for(const f in i){const g=i.hasOwnProperty(f),p=n.hasOwnProperty(f);if(g&&!p||!g&&p||!Wa(i[f],n[f]))return!1}}return String(i)===String(n)}function af(i,n){return i.findIndex(s=>Wa(s,n))}const Qt=i=>Jn(i)?i:i==null?"":ye(i)||Ln(i)&&(i.toString===IA||!Fe(i.toString))?JSON.stringify(i,MA,2):String(i),MA=(i,n)=>n&&n.__v_isRef?MA(i,n.value):Lc(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((s,[r,c])=>(s[`${r} =>`]=c,s),{})}:ec(n)?{[`Set(${n.size})`]:[...n.values()]}:Ln(n)&&!ye(n)&&!PA(n)?String(n):n,Pn={},Oc=[],Os=()=>{},eI=()=>!1,nI=/^on[^a-z]/,uu=i=>nI.test(i),Rm=i=>i.startsWith("onUpdate:"),ni=Object.assign,zm=(i,n)=>{const s=i.indexOf(n);s>-1&&i.splice(s,1)},iI=Object.prototype.hasOwnProperty,cn=(i,n)=>iI.call(i,n),ye=Array.isArray,Lc=i=>hu(i)==="[object Map]",ec=i=>hu(i)==="[object Set]",ay=i=>hu(i)==="[object Date]",Fe=i=>typeof i=="function",Jn=i=>typeof i=="string",Yd=i=>typeof i=="symbol",Ln=i=>i!==null&&typeof i=="object",jm=i=>Ln(i)&&Fe(i.then)&&Fe(i.catch),IA=Object.prototype.toString,hu=i=>IA.call(i),oI=i=>hu(i).slice(8,-1),PA=i=>hu(i)==="[object Object]",Fm=i=>Jn(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Nd=rf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),lf=i=>{const n=Object.create(null);return s=>n[s]||(n[s]=i(s))},sI=/-(\w)/g,yo=lf(i=>i.replace(sI,(n,s)=>s?s.toUpperCase():"")),rI=/\B([A-Z])/g,ds=lf(i=>i.replace(rI,"-$1").toLowerCase()),fu=lf(i=>i.charAt(0).toUpperCase()+i.slice(1)),Od=lf(i=>i?`on${fu(i)}`:""),Vc=(i,n)=>!Object.is(i,n),Rc=(i,n)=>{for(let s=0;s<i.length;s++)i[s](n)},$h=(i,n,s)=>{Object.defineProperty(i,n,{configurable:!0,enumerable:!1,value:s})},na=i=>{const n=parseFloat(i);return isNaN(n)?i:n};let ly;const aI=()=>ly||(ly=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let No;class $m{constructor(n=!1){this.detached=n,this.active=!0,this.effects=[],this.cleanups=[],this.parent=No,!n&&No&&(this.index=(No.scopes||(No.scopes=[])).push(this)-1)}run(n){if(this.active){const s=No;try{return No=this,n()}finally{No=s}}}on(){No=this}off(){No=this.parent}stop(n){if(this.active){let s,r;for(s=0,r=this.effects.length;s<r;s++)this.effects[s].stop();for(s=0,r=this.cleanups.length;s<r;s++)this.cleanups[s]();if(this.scopes)for(s=0,r=this.scopes.length;s<r;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!n){const c=this.parent.scopes.pop();c&&c!==this&&(this.parent.scopes[this.index]=c,c.index=this.index)}this.parent=void 0,this.active=!1}}}function BA(i){return new $m(i)}function NA(i,n=No){n&&n.active&&n.effects.push(i)}function lI(){return No}function cI(i){No&&No.cleanups.push(i)}const Vm=i=>{const n=new Set(i);return n.w=0,n.n=0,n},OA=i=>(i.w&qa)>0,LA=i=>(i.n&qa)>0,dI=({deps:i})=>{if(i.length)for(let n=0;n<i.length;n++)i[n].w|=qa},uI=i=>{const{deps:n}=i;if(n.length){let s=0;for(let r=0;r<n.length;r++){const c=n[r];OA(c)&&!LA(c)?c.delete(i):n[s++]=c,c.w&=~qa,c.n&=~qa}n.length=s}},Qp=new WeakMap;let Md=0,qa=1;const Zp=30;let Bs;const Vl=Symbol(""),Jp=Symbol("");class gu{constructor(n,s=null,r){this.fn=n,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,NA(this,r)}run(){if(!this.active)return this.fn();let n=Bs,s=Va;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=Bs,Bs=this,Va=!0,qa=1<<++Md,Md<=Zp?dI(this):cy(this),this.fn()}finally{Md<=Zp&&uI(this),qa=1<<--Md,Bs=this.parent,Va=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Bs===this?this.deferStop=!0:this.active&&(cy(this),this.onStop&&this.onStop(),this.active=!1)}}function cy(i){const{deps:n}=i;if(n.length){for(let s=0;s<n.length;s++)n[s].delete(i);n.length=0}}function hI(i,n){i.effect&&(i=i.effect.fn);const s=new gu(i);n&&(ni(s,n),n.scope&&NA(s,n.scope)),(!n||!n.lazy)&&s.run();const r=s.run.bind(s);return r.effect=s,r}function fI(i){i.effect.stop()}let Va=!0;const RA=[];function Xc(){RA.push(Va),Va=!1}function td(){const i=RA.pop();Va=i===void 0?!0:i}function zo(i,n,s){if(Va&&Bs){let r=Qp.get(i);r||Qp.set(i,r=new Map);let c=r.get(s);c||r.set(s,c=Vm()),zA(c)}}function zA(i,n){let s=!1;Md<=Zp?LA(i)||(i.n|=qa,s=!OA(i)):s=!i.has(Bs),s&&(i.add(Bs),Bs.deps.push(i))}function ia(i,n,s,r,c,u){const f=Qp.get(i);if(!f)return;let g=[];if(n==="clear")g=[...f.values()];else if(s==="length"&&ye(i)){const p=na(r);f.forEach((k,C)=>{(C==="length"||C>=p)&&g.push(k)})}else switch(s!==void 0&&g.push(f.get(s)),n){case"add":ye(i)?Fm(s)&&g.push(f.get("length")):(g.push(f.get(Vl)),Lc(i)&&g.push(f.get(Jp)));break;case"delete":ye(i)||(g.push(f.get(Vl)),Lc(i)&&g.push(f.get(Jp)));break;case"set":Lc(i)&&g.push(f.get(Vl));break}if(g.length===1)g[0]&&Xp(g[0]);else{const p=[];for(const k of g)k&&p.push(...k);Xp(Vm(p))}}function Xp(i,n){const s=ye(i)?i:[...i];for(const r of s)r.computed&&dy(r);for(const r of s)r.computed||dy(r)}function dy(i,n){(i!==Bs||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const gI=rf("__proto__,__v_isRef,__isVue"),jA=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Yd)),pI=cf(),mI=cf(!1,!0),bI=cf(!0),kI=cf(!0,!0),uy=wI();function wI(){const i={};return["includes","indexOf","lastIndexOf"].forEach(n=>{i[n]=function(...s){const r=We(this);for(let u=0,f=this.length;u<f;u++)zo(r,"get",u+"");const c=r[n](...s);return c===-1||c===!1?r[n](...s.map(We)):c}}),["push","pop","shift","unshift","splice"].forEach(n=>{i[n]=function(...s){Xc();const r=We(this)[n].apply(this,s);return td(),r}}),i}function cf(i=!1,n=!1){return function(r,c,u){if(c==="__v_isReactive")return!i;if(c==="__v_isReadonly")return i;if(c==="__v_isShallow")return n;if(c==="__v_raw"&&u===(i?n?qA:WA:n?UA:HA).get(r))return r;const f=ye(r);if(!i&&f&&cn(uy,c))return Reflect.get(uy,c,u);const g=Reflect.get(r,c,u);return(Yd(c)?jA.has(c):gI(c))||(i||zo(r,"get",c),n)?g:Dn(g)?f&&Fm(c)?g:g.value:Ln(g)?i?Um(g):nc(g):g}}const _I=FA(),vI=FA(!0);function FA(i=!1){return function(s,r,c,u){let f=s[r];if(Yl(f)&&Dn(f)&&!Dn(c))return!1;if(!i&&(!Kd(c)&&!Yl(c)&&(f=We(f),c=We(c)),!ye(s)&&Dn(f)&&!Dn(c)))return f.value=c,!0;const g=ye(s)&&Fm(r)?Number(r)<s.length:cn(s,r),p=Reflect.set(s,r,c,u);return s===We(u)&&(g?Vc(c,f)&&ia(s,"set",r,c):ia(s,"add",r,c)),p}}function yI(i,n){const s=cn(i,n);i[n];const r=Reflect.deleteProperty(i,n);return r&&s&&ia(i,"delete",n,void 0),r}function CI(i,n){const s=Reflect.has(i,n);return(!Yd(n)||!jA.has(n))&&zo(i,"has",n),s}function AI(i){return zo(i,"iterate",ye(i)?"length":Vl),Reflect.ownKeys(i)}const $A={get:pI,set:_I,deleteProperty:yI,has:CI,ownKeys:AI},VA={get:bI,set(i,n){return!0},deleteProperty(i,n){return!0}},xI=ni({},$A,{get:mI,set:vI}),EI=ni({},VA,{get:kI}),Hm=i=>i,df=i=>Reflect.getPrototypeOf(i);function ah(i,n,s=!1,r=!1){i=i.__v_raw;const c=We(i),u=We(n);s||(n!==u&&zo(c,"get",n),zo(c,"get",u));const{has:f}=df(c),g=r?Hm:s?qm:Qd;if(f.call(c,n))return g(i.get(n));if(f.call(c,u))return g(i.get(u));i!==c&&i.get(n)}function lh(i,n=!1){const s=this.__v_raw,r=We(s),c=We(i);return n||(i!==c&&zo(r,"has",i),zo(r,"has",c)),i===c?s.has(i):s.has(i)||s.has(c)}function ch(i,n=!1){return i=i.__v_raw,!n&&zo(We(i),"iterate",Vl),Reflect.get(i,"size",i)}function hy(i){i=We(i);const n=We(this);return df(n).has.call(n,i)||(n.add(i),ia(n,"add",i,i)),this}function fy(i,n){n=We(n);const s=We(this),{has:r,get:c}=df(s);let u=r.call(s,i);u||(i=We(i),u=r.call(s,i));const f=c.call(s,i);return s.set(i,n),u?Vc(n,f)&&ia(s,"set",i,n):ia(s,"add",i,n),this}function gy(i){const n=We(this),{has:s,get:r}=df(n);let c=s.call(n,i);c||(i=We(i),c=s.call(n,i)),r&&r.call(n,i);const u=n.delete(i);return c&&ia(n,"delete",i,void 0),u}function py(){const i=We(this),n=i.size!==0,s=i.clear();return n&&ia(i,"clear",void 0,void 0),s}function dh(i,n){return function(r,c){const u=this,f=u.__v_raw,g=We(f),p=n?Hm:i?qm:Qd;return!i&&zo(g,"iterate",Vl),f.forEach((k,C)=>r.call(c,p(k),p(C),u))}}function uh(i,n,s){return function(...r){const c=this.__v_raw,u=We(c),f=Lc(u),g=i==="entries"||i===Symbol.iterator&&f,p=i==="keys"&&f,k=c[i](...r),C=s?Hm:n?qm:Qd;return!n&&zo(u,"iterate",p?Jp:Vl),{next(){const{value:x,done:v}=k.next();return v?{value:x,done:v}:{value:g?[C(x[0]),C(x[1])]:C(x),done:v}},[Symbol.iterator](){return this}}}}function Da(i){return function(...n){return i==="delete"?!1:this}}function SI(){const i={get(u){return ah(this,u)},get size(){return ch(this)},has:lh,add:hy,set:fy,delete:gy,clear:py,forEach:dh(!1,!1)},n={get(u){return ah(this,u,!1,!0)},get size(){return ch(this)},has:lh,add:hy,set:fy,delete:gy,clear:py,forEach:dh(!1,!0)},s={get(u){return ah(this,u,!0)},get size(){return ch(this,!0)},has(u){return lh.call(this,u,!0)},add:Da("add"),set:Da("set"),delete:Da("delete"),clear:Da("clear"),forEach:dh(!0,!1)},r={get(u){return ah(this,u,!0,!0)},get size(){return ch(this,!0)},has(u){return lh.call(this,u,!0)},add:Da("add"),set:Da("set"),delete:Da("delete"),clear:Da("clear"),forEach:dh(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(u=>{i[u]=uh(u,!1,!1),s[u]=uh(u,!0,!1),n[u]=uh(u,!1,!0),r[u]=uh(u,!0,!0)}),[i,s,n,r]}const[TI,DI,MI,II]=SI();function uf(i,n){const s=n?i?II:MI:i?DI:TI;return(r,c,u)=>c==="__v_isReactive"?!i:c==="__v_isReadonly"?i:c==="__v_raw"?r:Reflect.get(cn(s,c)&&c in r?s:r,c,u)}const PI={get:uf(!1,!1)},BI={get:uf(!1,!0)},NI={get:uf(!0,!1)},OI={get:uf(!0,!0)},HA=new WeakMap,UA=new WeakMap,WA=new WeakMap,qA=new WeakMap;function LI(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function RI(i){return i.__v_skip||!Object.isExtensible(i)?0:LI(oI(i))}function nc(i){return Yl(i)?i:hf(i,!1,$A,PI,HA)}function GA(i){return hf(i,!1,xI,BI,UA)}function Um(i){return hf(i,!0,VA,NI,WA)}function zI(i){return hf(i,!0,EI,OI,qA)}function hf(i,n,s,r,c){if(!Ln(i)||i.__v_raw&&!(n&&i.__v_isReactive))return i;const u=c.get(i);if(u)return u;const f=RI(i);if(f===0)return i;const g=new Proxy(i,f===2?r:s);return c.set(i,g),g}function Hl(i){return Yl(i)?Hl(i.__v_raw):!!(i&&i.__v_isReactive)}function Yl(i){return!!(i&&i.__v_isReadonly)}function Kd(i){return!!(i&&i.__v_isShallow)}function zc(i){return Hl(i)||Yl(i)}function We(i){const n=i&&i.__v_raw;return n?We(n):i}function Wm(i){return $h(i,"__v_skip",!0),i}const Qd=i=>Ln(i)?nc(i):i,qm=i=>Ln(i)?Um(i):i;function Gm(i){Va&&Bs&&(i=We(i),zA(i.dep||(i.dep=Vm())))}function ff(i,n){i=We(i),i.dep&&Xp(i.dep)}function Dn(i){return!!(i&&i.__v_isRef===!0)}function ue(i){return YA(i,!1)}function Ym(i){return YA(i,!0)}function YA(i,n){return Dn(i)?i:new jI(i,n)}class jI{constructor(n,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?n:We(n),this._value=s?n:Qd(n)}get value(){return Gm(this),this._value}set value(n){const s=this.__v_isShallow||Kd(n)||Yl(n);n=s?n:We(n),Vc(n,this._rawValue)&&(this._rawValue=n,this._value=s?n:Qd(n),ff(this))}}function FI(i){ff(i)}function rt(i){return Dn(i)?i.value:i}const $I={get:(i,n,s)=>rt(Reflect.get(i,n,s)),set:(i,n,s,r)=>{const c=i[n];return Dn(c)&&!Dn(s)?(c.value=s,!0):Reflect.set(i,n,s,r)}};function Km(i){return Hl(i)?i:new Proxy(i,$I)}class VI{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:r}=n(()=>Gm(this),()=>ff(this));this._get=s,this._set=r}get value(){return this._get()}set value(n){this._set(n)}}function HI(i){return new VI(i)}function UI(i){const n=ye(i)?new Array(i.length):{};for(const s in i)n[s]=KA(i,s);return n}class WI{constructor(n,s,r){this._object=n,this._key=s,this._defaultValue=r,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}}function KA(i,n,s){const r=i[n];return Dn(r)?r:new WI(i,n,s)}var QA;class qI{constructor(n,s,r,c){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this[QA]=!1,this._dirty=!0,this.effect=new gu(n,()=>{this._dirty||(this._dirty=!0,ff(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!c,this.__v_isReadonly=r}get value(){const n=We(this);return Gm(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}QA="__v_isReadonly";function GI(i,n,s=!1){let r,c;const u=Fe(i);return u?(r=i,c=Os):(r=i.get,c=i.set),new qI(r,c,u||!c,s)}function YI(i,...n){}function Xr(i,n,s,r){let c;try{c=r?i(...r):i()}catch(u){ic(u,n,s)}return c}function Ro(i,n,s,r){if(Fe(i)){const u=Xr(i,n,s,r);return u&&jm(u)&&u.catch(f=>{ic(f,n,s)}),u}const c=[];for(let u=0;u<i.length;u++)c.push(Ro(i[u],n,s,r));return c}function ic(i,n,s,r=!0){const c=n?n.vnode:null;if(n){let u=n.parent;const f=n.proxy,g=s;for(;u;){const k=u.ec;if(k){for(let C=0;C<k.length;C++)if(k[C](i,f,g)===!1)return}u=u.parent}const p=n.appContext.config.errorHandler;if(p){Xr(p,null,10,[i,f,g]);return}}KI(i,s,c,r)}function KI(i,n,s,r=!0){console.error(i)}let Zd=!1,tm=!1;const Ki=[];let br=0;const jc=[];let Kr=null,zl=0;const ZA=Promise.resolve();let Qm=null;function gf(i){const n=Qm||ZA;return i?n.then(this?i.bind(this):i):n}function QI(i){let n=br+1,s=Ki.length;for(;n<s;){const r=n+s>>>1;Jd(Ki[r])<i?n=r+1:s=r}return n}function pf(i){(!Ki.length||!Ki.includes(i,Zd&&i.allowRecurse?br+1:br))&&(i.id==null?Ki.push(i):Ki.splice(QI(i.id),0,i),JA())}function JA(){!Zd&&!tm&&(tm=!0,Qm=ZA.then(XA))}function ZI(i){const n=Ki.indexOf(i);n>br&&Ki.splice(n,1)}function Zm(i){ye(i)?jc.push(...i):(!Kr||!Kr.includes(i,i.allowRecurse?zl+1:zl))&&jc.push(i),JA()}function my(i,n=Zd?br+1:0){for(;n<Ki.length;n++){const s=Ki[n];s&&s.pre&&(Ki.splice(n,1),n--,s())}}function Vh(i){if(jc.length){const n=[...new Set(jc)];if(jc.length=0,Kr){Kr.push(...n);return}for(Kr=n,Kr.sort((s,r)=>Jd(s)-Jd(r)),zl=0;zl<Kr.length;zl++)Kr[zl]();Kr=null,zl=0}}const Jd=i=>i.id==null?1/0:i.id,JI=(i,n)=>{const s=Jd(i)-Jd(n);if(s===0){if(i.pre&&!n.pre)return-1;if(n.pre&&!i.pre)return 1}return s};function XA(i){tm=!1,Zd=!0,Ki.sort(JI);const n=Os;try{for(br=0;br<Ki.length;br++){const s=Ki[br];s&&s.active!==!1&&Xr(s,null,14)}}finally{br=0,Ki.length=0,Vh(),Zd=!1,Qm=null,(Ki.length||jc.length)&&XA()}}let Bc,hh=[];function t2(i,n){var s,r;Bc=i,Bc?(Bc.enabled=!0,hh.forEach(({event:c,args:u})=>Bc.emit(c,...u)),hh=[]):typeof window<"u"&&window.HTMLElement&&!(!((r=(s=window.navigator)===null||s===void 0?void 0:s.userAgent)===null||r===void 0)&&r.includes("jsdom"))?((n.__VUE_DEVTOOLS_HOOK_REPLAY__=n.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(u=>{t2(u,n)}),setTimeout(()=>{Bc||(n.__VUE_DEVTOOLS_HOOK_REPLAY__=null,hh=[])},3e3)):hh=[]}function XI(i,n,...s){if(i.isUnmounted)return;const r=i.vnode.props||Pn;let c=s;const u=n.startsWith("update:"),f=u&&n.slice(7);if(f&&f in r){const C=`${f==="modelValue"?"model":f}Modifiers`,{number:x,trim:v}=r[C]||Pn;v&&(c=s.map(M=>Jn(M)?M.trim():M)),x&&(c=s.map(na))}let g,p=r[g=Od(n)]||r[g=Od(yo(n))];!p&&u&&(p=r[g=Od(ds(n))]),p&&Ro(p,i,6,c);const k=r[g+"Once"];if(k){if(!i.emitted)i.emitted={};else if(i.emitted[g])return;i.emitted[g]=!0,Ro(k,i,6,c)}}function e2(i,n,s=!1){const r=n.emitsCache,c=r.get(i);if(c!==void 0)return c;const u=i.emits;let f={},g=!1;if(!Fe(i)){const p=k=>{const C=e2(k,n,!0);C&&(g=!0,ni(f,C))};!s&&n.mixins.length&&n.mixins.forEach(p),i.extends&&p(i.extends),i.mixins&&i.mixins.forEach(p)}return!u&&!g?(Ln(i)&&r.set(i,null),null):(ye(u)?u.forEach(p=>f[p]=null):ni(f,u),Ln(i)&&r.set(i,f),f)}function mf(i,n){return!i||!uu(n)?!1:(n=n.slice(2).replace(/Once$/,""),cn(i,n[0].toLowerCase()+n.slice(1))||cn(i,ds(n))||cn(i,n))}let zi=null,bf=null;function Xd(i){const n=zi;return zi=i,bf=i&&i.type.__scopeId||null,n}function tP(i){bf=i}function eP(){bf=null}const nP=i=>pi;function pi(i,n=zi,s){if(!n||i._n)return i;const r=(...c)=>{r._d&&lm(-1);const u=Xd(n);let f;try{f=i(...c)}finally{Xd(u),r._d&&lm(1)}return f};return r._n=!0,r._c=!0,r._d=!0,r}function Bh(i){const{type:n,vnode:s,proxy:r,withProxy:c,props:u,propsOptions:[f],slots:g,attrs:p,emit:k,render:C,renderCache:x,data:v,setupState:M,ctx:z,inheritAttrs:H}=i;let Z,U;const W=Xd(i);try{if(s.shapeFlag&4){const dt=c||r;Z=Lo(C.call(dt,dt,x,u,M,v,z)),U=p}else{const dt=n;Z=Lo(dt.length>1?dt(u,{attrs:p,slots:g,emit:k}):dt(u,null)),U=n.props?p:oP(p)}}catch(dt){jd.length=0,ic(dt,i,1),Z=He(Zi)}let tt=Z;if(U&&H!==!1){const dt=Object.keys(U),{shapeFlag:st}=tt;dt.length&&st&7&&(f&&dt.some(Rm)&&(U=sP(U,f)),tt=vr(tt,U))}return s.dirs&&(tt=vr(tt),tt.dirs=tt.dirs?tt.dirs.concat(s.dirs):s.dirs),s.transition&&(tt.transition=s.transition),Z=tt,Xd(W),Z}function iP(i){let n;for(let s=0;s<i.length;s++){const r=i[s];if(Ga(r)){if(r.type!==Zi||r.children==="v-if"){if(n)return;n=r}}else return}return n}const oP=i=>{let n;for(const s in i)(s==="class"||s==="style"||uu(s))&&((n||(n={}))[s]=i[s]);return n},sP=(i,n)=>{const s={};for(const r in i)(!Rm(r)||!(r.slice(9)in n))&&(s[r]=i[r]);return s};function rP(i,n,s){const{props:r,children:c,component:u}=i,{props:f,children:g,patchFlag:p}=n,k=u.emitsOptions;if(n.dirs||n.transition)return!0;if(s&&p>=0){if(p&1024)return!0;if(p&16)return r?by(r,f,k):!!f;if(p&8){const C=n.dynamicProps;for(let x=0;x<C.length;x++){const v=C[x];if(f[v]!==r[v]&&!mf(k,v))return!0}}}else return(c||g)&&(!g||!g.$stable)?!0:r===f?!1:r?f?by(r,f,k):!0:!!f;return!1}function by(i,n,s){const r=Object.keys(n);if(r.length!==Object.keys(i).length)return!0;for(let c=0;c<r.length;c++){const u=r[c];if(n[u]!==i[u]&&!mf(s,u))return!0}return!1}function Jm({vnode:i,parent:n},s){for(;n&&n.subTree===i;)(i=n.vnode).el=s,n=n.parent}const n2=i=>i.__isSuspense,aP={name:"Suspense",__isSuspense:!0,process(i,n,s,r,c,u,f,g,p,k){i==null?cP(n,s,r,c,u,f,g,p,k):dP(i,n,s,r,c,f,g,p,k)},hydrate:uP,create:Xm,normalize:hP},lP=aP;function tu(i,n){const s=i.props&&i.props[n];Fe(s)&&s()}function cP(i,n,s,r,c,u,f,g,p){const{p:k,o:{createElement:C}}=p,x=C("div"),v=i.suspense=Xm(i,c,r,n,x,s,u,f,g,p);k(null,v.pendingBranch=i.ssContent,x,null,r,v,u,f),v.deps>0?(tu(i,"onPending"),tu(i,"onFallback"),k(null,i.ssFallback,n,s,r,null,u,f),Fc(v,i.ssFallback)):v.resolve()}function dP(i,n,s,r,c,u,f,g,{p,um:k,o:{createElement:C}}){const x=n.suspense=i.suspense;x.vnode=n,n.el=i.el;const v=n.ssContent,M=n.ssFallback,{activeBranch:z,pendingBranch:H,isInFallback:Z,isHydrating:U}=x;if(H)x.pendingBranch=v,kr(v,H)?(p(H,v,x.hiddenContainer,null,c,x,u,f,g),x.deps<=0?x.resolve():Z&&(p(z,M,s,r,c,null,u,f,g),Fc(x,M))):(x.pendingId++,U?(x.isHydrating=!1,x.activeBranch=H):k(H,c,x),x.deps=0,x.effects.length=0,x.hiddenContainer=C("div"),Z?(p(null,v,x.hiddenContainer,null,c,x,u,f,g),x.deps<=0?x.resolve():(p(z,M,s,r,c,null,u,f,g),Fc(x,M))):z&&kr(v,z)?(p(z,v,s,r,c,x,u,f,g),x.resolve(!0)):(p(null,v,x.hiddenContainer,null,c,x,u,f,g),x.deps<=0&&x.resolve()));else if(z&&kr(v,z))p(z,v,s,r,c,x,u,f,g),Fc(x,v);else if(tu(n,"onPending"),x.pendingBranch=v,x.pendingId++,p(null,v,x.hiddenContainer,null,c,x,u,f,g),x.deps<=0)x.resolve();else{const{timeout:W,pendingId:tt}=x;W>0?setTimeout(()=>{x.pendingId===tt&&x.fallback(M)},W):W===0&&x.fallback(M)}}function Xm(i,n,s,r,c,u,f,g,p,k,C=!1){const{p:x,m:v,um:M,n:z,o:{parentNode:H,remove:Z}}=k,U=na(i.props&&i.props.timeout),W={vnode:i,parent:n,parentComponent:s,isSVG:f,container:r,hiddenContainer:c,anchor:u,deps:0,pendingId:0,timeout:typeof U=="number"?U:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:C,isUnmounted:!1,effects:[],resolve(tt=!1){const{vnode:dt,activeBranch:st,pendingBranch:I,pendingId:mt,effects:pt,parentComponent:_t,container:Et}=W;if(W.isHydrating)W.isHydrating=!1;else if(!tt){const Nt=st&&I.transition&&I.transition.mode==="out-in";Nt&&(st.transition.afterLeave=()=>{mt===W.pendingId&&v(I,Et,Bt,0)});let{anchor:Bt}=W;st&&(Bt=z(st),M(st,_t,W,!0)),Nt||v(I,Et,Bt,0)}Fc(W,I),W.pendingBranch=null,W.isInFallback=!1;let Lt=W.parent,X=!1;for(;Lt;){if(Lt.pendingBranch){Lt.effects.push(...pt),X=!0;break}Lt=Lt.parent}X||Zm(pt),W.effects=[],tu(dt,"onResolve")},fallback(tt){if(!W.pendingBranch)return;const{vnode:dt,activeBranch:st,parentComponent:I,container:mt,isSVG:pt}=W;tu(dt,"onFallback");const _t=z(st),Et=()=>{!W.isInFallback||(x(null,tt,mt,_t,I,null,pt,g,p),Fc(W,tt))},Lt=tt.transition&&tt.transition.mode==="out-in";Lt&&(st.transition.afterLeave=Et),W.isInFallback=!0,M(st,I,null,!0),Lt||Et()},move(tt,dt,st){W.activeBranch&&v(W.activeBranch,tt,dt,st),W.container=tt},next(){return W.activeBranch&&z(W.activeBranch)},registerDep(tt,dt){const st=!!W.pendingBranch;st&&W.deps++;const I=tt.vnode.el;tt.asyncDep.catch(mt=>{ic(mt,tt,0)}).then(mt=>{if(tt.isUnmounted||W.isUnmounted||W.pendingId!==tt.suspenseId)return;tt.asyncResolved=!0;const{vnode:pt}=tt;cm(tt,mt,!1),I&&(pt.el=I);const _t=!I&&tt.subTree.el;dt(tt,pt,H(I||tt.subTree.el),I?null:z(tt.subTree),W,f,p),_t&&Z(_t),Jm(tt,pt.el),st&&--W.deps===0&&W.resolve()})},unmount(tt,dt){W.isUnmounted=!0,W.activeBranch&&M(W.activeBranch,s,tt,dt),W.pendingBranch&&M(W.pendingBranch,s,tt,dt)}};return W}function uP(i,n,s,r,c,u,f,g,p){const k=n.suspense=Xm(n,r,s,i.parentNode,document.createElement("div"),null,c,u,f,g,!0),C=p(i,k.pendingBranch=n.ssContent,s,k,u,f);return k.deps===0&&k.resolve(),C}function hP(i){const{shapeFlag:n,children:s}=i,r=n&32;i.ssContent=ky(r?s.default:s),i.ssFallback=r?ky(s.fallback):He(Zi)}function ky(i){let n;if(Fe(i)){const s=Zl&&i._c;s&&(i._d=!1,at()),i=i(),s&&(i._d=!0,n=vo,T2())}return ye(i)&&(i=iP(i)),i=Lo(i),n&&!i.dynamicChildren&&(i.dynamicChildren=n.filter(s=>s!==i)),i}function i2(i,n){n&&n.pendingBranch?ye(i)?n.effects.push(...i):n.effects.push(i):Zm(i)}function Fc(i,n){i.activeBranch=n;const{vnode:s,parentComponent:r}=i,c=s.el=n.el;r&&r.subTree===s&&(r.vnode.el=c,Jm(r,c))}function Ld(i,n){if(ki){let s=ki.provides;const r=ki.parent&&ki.parent.provides;r===s&&(s=ki.provides=Object.create(r)),s[i]=n}}function gs(i,n,s=!1){const r=ki||zi;if(r){const c=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(c&&i in c)return c[i];if(arguments.length>1)return s&&Fe(n)?n.call(r.proxy):n}}function fP(i,n){return pu(i,null,n)}function o2(i,n){return pu(i,null,{flush:"post"})}function gP(i,n){return pu(i,null,{flush:"sync"})}const fh={};function Ls(i,n,s){return pu(i,n,s)}function pu(i,n,{immediate:s,deep:r,flush:c,onTrack:u,onTrigger:f}=Pn){const g=ki;let p,k=!1,C=!1;if(Dn(i)?(p=()=>i.value,k=Kd(i)):Hl(i)?(p=()=>i,r=!0):ye(i)?(C=!0,k=i.some(tt=>Hl(tt)||Kd(tt)),p=()=>i.map(tt=>{if(Dn(tt))return tt.value;if(Hl(tt))return Fl(tt);if(Fe(tt))return Xr(tt,g,2)})):Fe(i)?n?p=()=>Xr(i,g,2):p=()=>{if(!(g&&g.isUnmounted))return x&&x(),Ro(i,g,3,[v])}:p=Os,n&&r){const tt=p;p=()=>Fl(tt())}let x,v=tt=>{x=U.onStop=()=>{Xr(tt,g,4)}},M;if(Uc)if(v=Os,n?s&&Ro(n,g,3,[p(),C?[]:void 0,v]):p(),c==="sync"){const tt=$2();M=tt.__watcherHandles||(tt.__watcherHandles=[])}else return Os;let z=C?new Array(i.length).fill(fh):fh;const H=()=>{if(!!U.active)if(n){const tt=U.run();(r||k||(C?tt.some((dt,st)=>Vc(dt,z[st])):Vc(tt,z)))&&(x&&x(),Ro(n,g,3,[tt,z===fh?void 0:C&&z[0]===fh?[]:z,v]),z=tt)}else U.run()};H.allowRecurse=!!n;let Z;c==="sync"?Z=H:c==="post"?Z=()=>Ri(H,g&&g.suspense):(H.pre=!0,g&&(H.id=g.uid),Z=()=>pf(H));const U=new gu(p,Z);n?s?H():z=U.run():c==="post"?Ri(U.run.bind(U),g&&g.suspense):U.run();const W=()=>{U.stop(),g&&g.scope&&zm(g.scope.effects,U)};return M&&M.push(W),W}function pP(i,n,s){const r=this.proxy,c=Jn(i)?i.includes(".")?s2(r,i):()=>r[i]:i.bind(r,r);let u;Fe(n)?u=n:(u=n.handler,s=n);const f=ki;Ya(this);const g=pu(c,u.bind(r),s);return f?Ya(f):Ha(),g}function s2(i,n){const s=n.split(".");return()=>{let r=i;for(let c=0;c<s.length&&r;c++)r=r[s[c]];return r}}function Fl(i,n){if(!Ln(i)||i.__v_skip||(n=n||new Set,n.has(i)))return i;if(n.add(i),Dn(i))Fl(i.value,n);else if(ye(i))for(let s=0;s<i.length;s++)Fl(i[s],n);else if(ec(i)||Lc(i))i.forEach(s=>{Fl(s,n)});else if(PA(i))for(const s in i)Fl(i[s],n);return i}function tb(){const i={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Co(()=>{i.isMounted=!0}),bu(()=>{i.isUnmounting=!0}),i}const as=[Function,Array],mP={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:as,onEnter:as,onAfterEnter:as,onEnterCancelled:as,onBeforeLeave:as,onLeave:as,onAfterLeave:as,onLeaveCancelled:as,onBeforeAppear:as,onAppear:as,onAfterAppear:as,onAppearCancelled:as},setup(i,{slots:n}){const s=Ja(),r=tb();let c;return()=>{const u=n.default&&kf(n.default(),!0);if(!u||!u.length)return;let f=u[0];if(u.length>1){for(const H of u)if(H.type!==Zi){f=H;break}}const g=We(i),{mode:p}=g;if(r.isLeaving)return Cp(f);const k=wy(f);if(!k)return Cp(f);const C=Hc(k,g,r,s);Kl(k,C);const x=s.subTree,v=x&&wy(x);let M=!1;const{getTransitionKey:z}=k.type;if(z){const H=z();c===void 0?c=H:H!==c&&(c=H,M=!0)}if(v&&v.type!==Zi&&(!kr(k,v)||M)){const H=Hc(v,g,r,s);if(Kl(v,H),p==="out-in")return r.isLeaving=!0,H.afterLeave=()=>{r.isLeaving=!1,s.update.active!==!1&&s.update()},Cp(f);p==="in-out"&&k.type!==Zi&&(H.delayLeave=(Z,U,W)=>{const tt=r2(r,v);tt[String(v.key)]=v,Z._leaveCb=()=>{U(),Z._leaveCb=void 0,delete C.delayedLeave},C.delayedLeave=W})}return f}}},eb=mP;function r2(i,n){const{leavingVNodes:s}=i;let r=s.get(n.type);return r||(r=Object.create(null),s.set(n.type,r)),r}function Hc(i,n,s,r){const{appear:c,mode:u,persisted:f=!1,onBeforeEnter:g,onEnter:p,onAfterEnter:k,onEnterCancelled:C,onBeforeLeave:x,onLeave:v,onAfterLeave:M,onLeaveCancelled:z,onBeforeAppear:H,onAppear:Z,onAfterAppear:U,onAppearCancelled:W}=n,tt=String(i.key),dt=r2(s,i),st=(pt,_t)=>{pt&&Ro(pt,r,9,_t)},I=(pt,_t)=>{const Et=_t[1];st(pt,_t),ye(pt)?pt.every(Lt=>Lt.length<=1)&&Et():pt.length<=1&&Et()},mt={mode:u,persisted:f,beforeEnter(pt){let _t=g;if(!s.isMounted)if(c)_t=H||g;else return;pt._leaveCb&&pt._leaveCb(!0);const Et=dt[tt];Et&&kr(i,Et)&&Et.el._leaveCb&&Et.el._leaveCb(),st(_t,[pt])},enter(pt){let _t=p,Et=k,Lt=C;if(!s.isMounted)if(c)_t=Z||p,Et=U||k,Lt=W||C;else return;let X=!1;const Nt=pt._enterCb=Bt=>{X||(X=!0,Bt?st(Lt,[pt]):st(Et,[pt]),mt.delayedLeave&&mt.delayedLeave(),pt._enterCb=void 0)};_t?I(_t,[pt,Nt]):Nt()},leave(pt,_t){const Et=String(i.key);if(pt._enterCb&&pt._enterCb(!0),s.isUnmounting)return _t();st(x,[pt]);let Lt=!1;const X=pt._leaveCb=Nt=>{Lt||(Lt=!0,_t(),Nt?st(z,[pt]):st(M,[pt]),pt._leaveCb=void 0,dt[Et]===i&&delete dt[Et])};dt[Et]=i,v?I(v,[pt,X]):X()},clone(pt){return Hc(pt,n,s,r)}};return mt}function Cp(i){if(mu(i))return i=vr(i),i.children=null,i}function wy(i){return mu(i)?i.children?i.children[0]:void 0:i}function Kl(i,n){i.shapeFlag&6&&i.component?Kl(i.component.subTree,n):i.shapeFlag&128?(i.ssContent.transition=n.clone(i.ssContent),i.ssFallback.transition=n.clone(i.ssFallback)):i.transition=n}function kf(i,n=!1,s){let r=[],c=0;for(let u=0;u<i.length;u++){let f=i[u];const g=s==null?f.key:String(s)+String(f.key!=null?f.key:u);f.type===ve?(f.patchFlag&128&&c++,r=r.concat(kf(f.children,n,g))):(n||f.type!==Zi)&&r.push(g!=null?vr(f,{key:g}):f)}if(c>1)for(let u=0;u<r.length;u++)r[u].patchFlag=-2;return r}function ed(i){return Fe(i)?{setup:i,name:i.name}:i}const Ul=i=>!!i.type.__asyncLoader;function bP(i){Fe(i)&&(i={loader:i});const{loader:n,loadingComponent:s,errorComponent:r,delay:c=200,timeout:u,suspensible:f=!0,onError:g}=i;let p=null,k,C=0;const x=()=>(C++,p=null,v()),v=()=>{let M;return p||(M=p=n().catch(z=>{if(z=z instanceof Error?z:new Error(String(z)),g)return new Promise((H,Z)=>{g(z,()=>H(x()),()=>Z(z),C+1)});throw z}).then(z=>M!==p&&p?p:(z&&(z.__esModule||z[Symbol.toStringTag]==="Module")&&(z=z.default),k=z,z)))};return ed({name:"AsyncComponentWrapper",__asyncLoader:v,get __asyncResolved(){return k},setup(){const M=ki;if(k)return()=>Ap(k,M);const z=W=>{p=null,ic(W,M,13,!r)};if(f&&M.suspense||Uc)return v().then(W=>()=>Ap(W,M)).catch(W=>(z(W),()=>r?He(r,{error:W}):null));const H=ue(!1),Z=ue(),U=ue(!!c);return c&&setTimeout(()=>{U.value=!1},c),u!=null&&setTimeout(()=>{if(!H.value&&!Z.value){const W=new Error(`Async component timed out after ${u}ms.`);z(W),Z.value=W}},u),v().then(()=>{H.value=!0,M.parent&&mu(M.parent.vnode)&&pf(M.parent.update)}).catch(W=>{z(W),Z.value=W}),()=>{if(H.value&&k)return Ap(k,M);if(Z.value&&r)return He(r,{error:Z.value});if(s&&!U.value)return He(s)}}})}function Ap(i,n){const{ref:s,props:r,children:c,ce:u}=n.vnode,f=He(i,r,c);return f.ref=s,f.ce=u,delete n.vnode.ce,f}const mu=i=>i.type.__isKeepAlive,kP={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(i,{slots:n}){const s=Ja(),r=s.ctx;if(!r.renderer)return()=>{const W=n.default&&n.default();return W&&W.length===1?W[0]:W};const c=new Map,u=new Set;let f=null;const g=s.suspense,{renderer:{p,m:k,um:C,o:{createElement:x}}}=r,v=x("div");r.activate=(W,tt,dt,st,I)=>{const mt=W.component;k(W,tt,dt,0,g),p(mt.vnode,W,tt,dt,mt,g,st,W.slotScopeIds,I),Ri(()=>{mt.isDeactivated=!1,mt.a&&Rc(mt.a);const pt=W.props&&W.props.onVnodeMounted;pt&&wo(pt,mt.parent,W)},g)},r.deactivate=W=>{const tt=W.component;k(W,v,null,1,g),Ri(()=>{tt.da&&Rc(tt.da);const dt=W.props&&W.props.onVnodeUnmounted;dt&&wo(dt,tt.parent,W),tt.isDeactivated=!0},g)};function M(W){xp(W),C(W,s,g,!0)}function z(W){c.forEach((tt,dt)=>{const st=um(tt.type);st&&(!W||!W(st))&&H(dt)})}function H(W){const tt=c.get(W);!f||tt.type!==f.type?M(tt):f&&xp(f),c.delete(W),u.delete(W)}Ls(()=>[i.include,i.exclude],([W,tt])=>{W&&z(dt=>Id(W,dt)),tt&&z(dt=>!Id(tt,dt))},{flush:"post",deep:!0});let Z=null;const U=()=>{Z!=null&&c.set(Z,Ep(s.subTree))};return Co(U),_f(U),bu(()=>{c.forEach(W=>{const{subTree:tt,suspense:dt}=s,st=Ep(tt);if(W.type===st.type){xp(st);const I=st.component.da;I&&Ri(I,dt);return}M(W)})}),()=>{if(Z=null,!n.default)return null;const W=n.default(),tt=W[0];if(W.length>1)return f=null,W;if(!Ga(tt)||!(tt.shapeFlag&4)&&!(tt.shapeFlag&128))return f=null,tt;let dt=Ep(tt);const st=dt.type,I=um(Ul(dt)?dt.type.__asyncResolved||{}:st),{include:mt,exclude:pt,max:_t}=i;if(mt&&(!I||!Id(mt,I))||pt&&I&&Id(pt,I))return f=dt,tt;const Et=dt.key==null?st:dt.key,Lt=c.get(Et);return dt.el&&(dt=vr(dt),tt.shapeFlag&128&&(tt.ssContent=dt)),Z=Et,Lt?(dt.el=Lt.el,dt.component=Lt.component,dt.transition&&Kl(dt,dt.transition),dt.shapeFlag|=512,u.delete(Et),u.add(Et)):(u.add(Et),_t&&u.size>parseInt(_t,10)&&H(u.values().next().value)),dt.shapeFlag|=256,f=dt,n2(tt.type)?tt:dt}}},wP=kP;function Id(i,n){return ye(i)?i.some(s=>Id(s,n)):Jn(i)?i.split(",").includes(n):i.test?i.test(n):!1}function a2(i,n){c2(i,"a",n)}function l2(i,n){c2(i,"da",n)}function c2(i,n,s=ki){const r=i.__wdc||(i.__wdc=()=>{let c=s;for(;c;){if(c.isDeactivated)return;c=c.parent}return i()});if(wf(n,r,s),s){let c=s.parent;for(;c&&c.parent;)mu(c.parent.vnode)&&_P(r,n,s,c),c=c.parent}}function _P(i,n,s,r){const c=wf(n,i,r,!0);vf(()=>{zm(r[n],c)},s)}function xp(i){i.shapeFlag&=-257,i.shapeFlag&=-513}function Ep(i){return i.shapeFlag&128?i.ssContent:i}function wf(i,n,s=ki,r=!1){if(s){const c=s[i]||(s[i]=[]),u=n.__weh||(n.__weh=(...f)=>{if(s.isUnmounted)return;Xc(),Ya(s);const g=Ro(n,s,i,f);return Ha(),td(),g});return r?c.unshift(u):c.push(u),u}}const oa=i=>(n,s=ki)=>(!Uc||i==="sp")&&wf(i,(...r)=>n(...r),s),nb=oa("bm"),Co=oa("m"),d2=oa("bu"),_f=oa("u"),bu=oa("bum"),vf=oa("um"),u2=oa("sp"),h2=oa("rtg"),f2=oa("rtc");function g2(i,n=ki){wf("ec",i,n)}function Le(i,n){const s=zi;if(s===null)return i;const r=Cf(s)||s.proxy,c=i.dirs||(i.dirs=[]);for(let u=0;u<n.length;u++){let[f,g,p,k=Pn]=n[u];f&&(Fe(f)&&(f={mounted:f,updated:f}),f.deep&&Fl(g),c.push({dir:f,instance:r,value:g,oldValue:void 0,arg:p,modifiers:k}))}return i}function mr(i,n,s,r){const c=i.dirs,u=n&&n.dirs;for(let f=0;f<c.length;f++){const g=c[f];u&&(g.oldValue=u[f].value);let p=g.dir[r];p&&(Xc(),Ro(p,s,8,[i.el,g,i,n]),td())}}const ib="components",vP="directives";function ps(i,n){return ob(ib,i,!0,n)||i}const p2=Symbol();function yP(i){return Jn(i)?ob(ib,i,!1)||i:i||p2}function CP(i){return ob(vP,i)}function ob(i,n,s=!0,r=!1){const c=zi||ki;if(c){const u=c.type;if(i===ib){const g=um(u,!1);if(g&&(g===n||g===yo(n)||g===fu(yo(n))))return u}const f=_y(c[i]||u[i],n)||_y(c.appContext[i],n);return!f&&r?u:f}}function _y(i,n){return i&&(i[n]||i[yo(n)]||i[fu(yo(n))])}function $e(i,n,s,r){let c;const u=s&&s[r];if(ye(i)||Jn(i)){c=new Array(i.length);for(let f=0,g=i.length;f<g;f++)c[f]=n(i[f],f,void 0,u&&u[f])}else if(typeof i=="number"){c=new Array(i);for(let f=0;f<i;f++)c[f]=n(f+1,f,void 0,u&&u[f])}else if(Ln(i))if(i[Symbol.iterator])c=Array.from(i,(f,g)=>n(f,g,void 0,u&&u[g]));else{const f=Object.keys(i);c=new Array(f.length);for(let g=0,p=f.length;g<p;g++){const k=f[g];c[g]=n(i[k],k,g,u&&u[g])}}else c=[];return s&&(s[r]=c),c}function AP(i,n){for(let s=0;s<n.length;s++){const r=n[s];if(ye(r))for(let c=0;c<r.length;c++)i[r[c].name]=r[c].fn;else r&&(i[r.name]=r.key?(...c)=>{const u=r.fn(...c);return u&&(u.key=r.key),u}:r.fn)}return i}function em(i,n,s={},r,c){if(zi.isCE||zi.parent&&Ul(zi.parent)&&zi.parent.isCE)return n!=="default"&&(s.name=n),He("slot",s,r&&r());let u=i[n];u&&u._c&&(u._d=!1),at();const f=u&&m2(u(s)),g=hs(ve,{key:s.key||f&&f.key||`_${n}`},f||(r?r():[]),f&&i._===1?64:-2);return!c&&g.scopeId&&(g.slotScopeIds=[g.scopeId+"-s"]),u&&u._c&&(u._d=!0),g}function m2(i){return i.some(n=>Ga(n)?!(n.type===Zi||n.type===ve&&!m2(n.children)):!0)?i:null}function xP(i,n){const s={};for(const r in i)s[n&&/[A-Z]/.test(r)?`on:${r}`:Od(r)]=i[r];return s}const nm=i=>i?O2(i)?Cf(i)||i.proxy:nm(i.parent):null,Rd=ni(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>nm(i.parent),$root:i=>nm(i.root),$emit:i=>i.emit,$options:i=>sb(i),$forceUpdate:i=>i.f||(i.f=()=>pf(i.update)),$nextTick:i=>i.n||(i.n=gf.bind(i.proxy)),$watch:i=>pP.bind(i)}),Sp=(i,n)=>i!==Pn&&!i.__isScriptSetup&&cn(i,n),im={get({_:i},n){const{ctx:s,setupState:r,data:c,props:u,accessCache:f,type:g,appContext:p}=i;let k;if(n[0]!=="$"){const M=f[n];if(M!==void 0)switch(M){case 1:return r[n];case 2:return c[n];case 4:return s[n];case 3:return u[n]}else{if(Sp(r,n))return f[n]=1,r[n];if(c!==Pn&&cn(c,n))return f[n]=2,c[n];if((k=i.propsOptions[0])&&cn(k,n))return f[n]=3,u[n];if(s!==Pn&&cn(s,n))return f[n]=4,s[n];om&&(f[n]=0)}}const C=Rd[n];let x,v;if(C)return n==="$attrs"&&zo(i,"get",n),C(i);if((x=g.__cssModules)&&(x=x[n]))return x;if(s!==Pn&&cn(s,n))return f[n]=4,s[n];if(v=p.config.globalProperties,cn(v,n))return v[n]},set({_:i},n,s){const{data:r,setupState:c,ctx:u}=i;return Sp(c,n)?(c[n]=s,!0):r!==Pn&&cn(r,n)?(r[n]=s,!0):cn(i.props,n)||n[0]==="$"&&n.slice(1)in i?!1:(u[n]=s,!0)},has({_:{data:i,setupState:n,accessCache:s,ctx:r,appContext:c,propsOptions:u}},f){let g;return!!s[f]||i!==Pn&&cn(i,f)||Sp(n,f)||(g=u[0])&&cn(g,f)||cn(r,f)||cn(Rd,f)||cn(c.config.globalProperties,f)},defineProperty(i,n,s){return s.get!=null?i._.accessCache[n]=0:cn(s,"value")&&this.set(i,n,s.value,null),Reflect.defineProperty(i,n,s)}},EP=ni({},im,{get(i,n){if(n!==Symbol.unscopables)return im.get(i,n,i)},has(i,n){return n[0]!=="_"&&!q3(n)}});let om=!0;function SP(i){const n=sb(i),s=i.proxy,r=i.ctx;om=!1,n.beforeCreate&&vy(n.beforeCreate,i,"bc");const{data:c,computed:u,methods:f,watch:g,provide:p,inject:k,created:C,beforeMount:x,mounted:v,beforeUpdate:M,updated:z,activated:H,deactivated:Z,beforeDestroy:U,beforeUnmount:W,destroyed:tt,unmounted:dt,render:st,renderTracked:I,renderTriggered:mt,errorCaptured:pt,serverPrefetch:_t,expose:Et,inheritAttrs:Lt,components:X,directives:Nt,filters:Bt}=n;if(k&&TP(k,r,null,i.appContext.config.unwrapInjectedRef),f)for(const Wt in f){const Ce=f[Wt];Fe(Ce)&&(r[Wt]=Ce.bind(s))}if(c){const Wt=c.call(s,s);Ln(Wt)&&(i.data=nc(Wt))}if(om=!0,u)for(const Wt in u){const Ce=u[Wt],hn=Fe(Ce)?Ce.bind(s,s):Fe(Ce.get)?Ce.get.bind(s,s):Os,pn=!Fe(Ce)&&Fe(Ce.set)?Ce.set.bind(s):Os,Re=ai({get:hn,set:pn});Object.defineProperty(r,Wt,{enumerable:!0,configurable:!0,get:()=>Re.value,set:Je=>Re.value=Je})}if(g)for(const Wt in g)b2(g[Wt],r,s,Wt);if(p){const Wt=Fe(p)?p.call(s):p;Reflect.ownKeys(Wt).forEach(Ce=>{Ld(Ce,Wt[Ce])})}C&&vy(C,i,"c");function te(Wt,Ce){ye(Ce)?Ce.forEach(hn=>Wt(hn.bind(s))):Ce&&Wt(Ce.bind(s))}if(te(nb,x),te(Co,v),te(d2,M),te(_f,z),te(a2,H),te(l2,Z),te(g2,pt),te(f2,I),te(h2,mt),te(bu,W),te(vf,dt),te(u2,_t),ye(Et))if(Et.length){const Wt=i.exposed||(i.exposed={});Et.forEach(Ce=>{Object.defineProperty(Wt,Ce,{get:()=>s[Ce],set:hn=>s[Ce]=hn})})}else i.exposed||(i.exposed={});st&&i.render===Os&&(i.render=st),Lt!=null&&(i.inheritAttrs=Lt),X&&(i.components=X),Nt&&(i.directives=Nt)}function TP(i,n,s=Os,r=!1){ye(i)&&(i=sm(i));for(const c in i){const u=i[c];let f;Ln(u)?"default"in u?f=gs(u.from||c,u.default,!0):f=gs(u.from||c):f=gs(u),Dn(f)&&r?Object.defineProperty(n,c,{enumerable:!0,configurable:!0,get:()=>f.value,set:g=>f.value=g}):n[c]=f}}function vy(i,n,s){Ro(ye(i)?i.map(r=>r.bind(n.proxy)):i.bind(n.proxy),n,s)}function b2(i,n,s,r){const c=r.includes(".")?s2(s,r):()=>s[r];if(Jn(i)){const u=n[i];Fe(u)&&Ls(c,u)}else if(Fe(i))Ls(c,i.bind(s));else if(Ln(i))if(ye(i))i.forEach(u=>b2(u,n,s,r));else{const u=Fe(i.handler)?i.handler.bind(s):n[i.handler];Fe(u)&&Ls(c,u,i)}}function sb(i){const n=i.type,{mixins:s,extends:r}=n,{mixins:c,optionsCache:u,config:{optionMergeStrategies:f}}=i.appContext,g=u.get(n);let p;return g?p=g:!c.length&&!s&&!r?p=n:(p={},c.length&&c.forEach(k=>Hh(p,k,f,!0)),Hh(p,n,f)),Ln(n)&&u.set(n,p),p}function Hh(i,n,s,r=!1){const{mixins:c,extends:u}=n;u&&Hh(i,u,s,!0),c&&c.forEach(f=>Hh(i,f,s,!0));for(const f in n)if(!(r&&f==="expose")){const g=DP[f]||s&&s[f];i[f]=g?g(i[f],n[f]):n[f]}return i}const DP={data:yy,props:Ol,emits:Ol,methods:Ol,computed:Ol,beforeCreate:oo,created:oo,beforeMount:oo,mounted:oo,beforeUpdate:oo,updated:oo,beforeDestroy:oo,beforeUnmount:oo,destroyed:oo,unmounted:oo,activated:oo,deactivated:oo,errorCaptured:oo,serverPrefetch:oo,components:Ol,directives:Ol,watch:IP,provide:yy,inject:MP};function yy(i,n){return n?i?function(){return ni(Fe(i)?i.call(this,this):i,Fe(n)?n.call(this,this):n)}:n:i}function MP(i,n){return Ol(sm(i),sm(n))}function sm(i){if(ye(i)){const n={};for(let s=0;s<i.length;s++)n[i[s]]=i[s];return n}return i}function oo(i,n){return i?[...new Set([].concat(i,n))]:n}function Ol(i,n){return i?ni(ni(Object.create(null),i),n):n}function IP(i,n){if(!i)return n;if(!n)return i;const s=ni(Object.create(null),i);for(const r in n)s[r]=oo(i[r],n[r]);return s}function PP(i,n,s,r=!1){const c={},u={};$h(u,yf,1),i.propsDefaults=Object.create(null),k2(i,n,c,u);for(const f in i.propsOptions[0])f in c||(c[f]=void 0);s?i.props=r?c:GA(c):i.type.props?i.props=c:i.props=u,i.attrs=u}function BP(i,n,s,r){const{props:c,attrs:u,vnode:{patchFlag:f}}=i,g=We(c),[p]=i.propsOptions;let k=!1;if((r||f>0)&&!(f&16)){if(f&8){const C=i.vnode.dynamicProps;for(let x=0;x<C.length;x++){let v=C[x];if(mf(i.emitsOptions,v))continue;const M=n[v];if(p)if(cn(u,v))M!==u[v]&&(u[v]=M,k=!0);else{const z=yo(v);c[z]=rm(p,g,z,M,i,!1)}else M!==u[v]&&(u[v]=M,k=!0)}}}else{k2(i,n,c,u)&&(k=!0);let C;for(const x in g)(!n||!cn(n,x)&&((C=ds(x))===x||!cn(n,C)))&&(p?s&&(s[x]!==void 0||s[C]!==void 0)&&(c[x]=rm(p,g,x,void 0,i,!0)):delete c[x]);if(u!==g)for(const x in u)(!n||!cn(n,x)&&!0)&&(delete u[x],k=!0)}k&&ia(i,"set","$attrs")}function k2(i,n,s,r){const[c,u]=i.propsOptions;let f=!1,g;if(n)for(let p in n){if(Nd(p))continue;const k=n[p];let C;c&&cn(c,C=yo(p))?!u||!u.includes(C)?s[C]=k:(g||(g={}))[C]=k:mf(i.emitsOptions,p)||(!(p in r)||k!==r[p])&&(r[p]=k,f=!0)}if(u){const p=We(s),k=g||Pn;for(let C=0;C<u.length;C++){const x=u[C];s[x]=rm(c,p,x,k[x],i,!cn(k,x))}}return f}function rm(i,n,s,r,c,u){const f=i[s];if(f!=null){const g=cn(f,"default");if(g&&r===void 0){const p=f.default;if(f.type!==Function&&Fe(p)){const{propsDefaults:k}=c;s in k?r=k[s]:(Ya(c),r=k[s]=p.call(null,n),Ha())}else r=p}f[0]&&(u&&!g?r=!1:f[1]&&(r===""||r===ds(s))&&(r=!0))}return r}function w2(i,n,s=!1){const r=n.propsCache,c=r.get(i);if(c)return c;const u=i.props,f={},g=[];let p=!1;if(!Fe(i)){const C=x=>{p=!0;const[v,M]=w2(x,n,!0);ni(f,v),M&&g.push(...M)};!s&&n.mixins.length&&n.mixins.forEach(C),i.extends&&C(i.extends),i.mixins&&i.mixins.forEach(C)}if(!u&&!p)return Ln(i)&&r.set(i,Oc),Oc;if(ye(u))for(let C=0;C<u.length;C++){const x=yo(u[C]);Cy(x)&&(f[x]=Pn)}else if(u)for(const C in u){const x=yo(C);if(Cy(x)){const v=u[C],M=f[x]=ye(v)||Fe(v)?{type:v}:Object.assign({},v);if(M){const z=Ey(Boolean,M.type),H=Ey(String,M.type);M[0]=z>-1,M[1]=H<0||z<H,(z>-1||cn(M,"default"))&&g.push(x)}}}const k=[f,g];return Ln(i)&&r.set(i,k),k}function Cy(i){return i[0]!=="$"}function Ay(i){const n=i&&i.toString().match(/^\s*function (\w+)/);return n?n[1]:i===null?"null":""}function xy(i,n){return Ay(i)===Ay(n)}function Ey(i,n){return ye(n)?n.findIndex(s=>xy(s,i)):Fe(n)&&xy(n,i)?0:-1}const _2=i=>i[0]==="_"||i==="$stable",rb=i=>ye(i)?i.map(Lo):[Lo(i)],NP=(i,n,s)=>{if(n._n)return n;const r=pi((...c)=>rb(n(...c)),s);return r._c=!1,r},v2=(i,n,s)=>{const r=i._ctx;for(const c in i){if(_2(c))continue;const u=i[c];if(Fe(u))n[c]=NP(c,u,r);else if(u!=null){const f=rb(u);n[c]=()=>f}}},y2=(i,n)=>{const s=rb(n);i.slots.default=()=>s},OP=(i,n)=>{if(i.vnode.shapeFlag&32){const s=n._;s?(i.slots=We(n),$h(n,"_",s)):v2(n,i.slots={})}else i.slots={},n&&y2(i,n);$h(i.slots,yf,1)},LP=(i,n,s)=>{const{vnode:r,slots:c}=i;let u=!0,f=Pn;if(r.shapeFlag&32){const g=n._;g?s&&g===1?u=!1:(ni(c,n),!s&&g===1&&delete c._):(u=!n.$stable,v2(n,c)),f=n}else n&&(y2(i,n),f={default:1});if(u)for(const g in c)!_2(g)&&!(g in f)&&delete c[g]};function C2(){return{app:null,config:{isNativeTag:eI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let RP=0;function zP(i,n){return function(r,c=null){Fe(r)||(r=Object.assign({},r)),c!=null&&!Ln(c)&&(c=null);const u=C2(),f=new Set;let g=!1;const p=u.app={_uid:RP++,_component:r,_props:c,_container:null,_context:u,_instance:null,version:H2,get config(){return u.config},set config(k){},use(k,...C){return f.has(k)||(k&&Fe(k.install)?(f.add(k),k.install(p,...C)):Fe(k)&&(f.add(k),k(p,...C))),p},mixin(k){return u.mixins.includes(k)||u.mixins.push(k),p},component(k,C){return C?(u.components[k]=C,p):u.components[k]},directive(k,C){return C?(u.directives[k]=C,p):u.directives[k]},mount(k,C,x){if(!g){const v=He(r,c);return v.appContext=u,C&&n?n(v,k):i(v,k,x),g=!0,p._container=k,k.__vue_app__=p,Cf(v.component)||v.component.proxy}},unmount(){g&&(i(null,p._container),delete p._container.__vue_app__)},provide(k,C){return u.provides[k]=C,p}};return p}}function Uh(i,n,s,r,c=!1){if(ye(i)){i.forEach((v,M)=>Uh(v,n&&(ye(n)?n[M]:n),s,r,c));return}if(Ul(r)&&!c)return;const u=r.shapeFlag&4?Cf(r.component)||r.component.proxy:r.el,f=c?null:u,{i:g,r:p}=i,k=n&&n.r,C=g.refs===Pn?g.refs={}:g.refs,x=g.setupState;if(k!=null&&k!==p&&(Jn(k)?(C[k]=null,cn(x,k)&&(x[k]=null)):Dn(k)&&(k.value=null)),Fe(p))Xr(p,g,12,[f,C]);else{const v=Jn(p),M=Dn(p);if(v||M){const z=()=>{if(i.f){const H=v?cn(x,p)?x[p]:C[p]:p.value;c?ye(H)&&zm(H,u):ye(H)?H.includes(u)||H.push(u):v?(C[p]=[u],cn(x,p)&&(x[p]=C[p])):(p.value=[u],i.k&&(C[i.k]=p.value))}else v?(C[p]=f,cn(x,p)&&(x[p]=f)):M&&(p.value=f,i.k&&(C[i.k]=f))};f?(z.id=-1,Ri(z,s)):z()}}}let Ma=!1;const gh=i=>/svg/.test(i.namespaceURI)&&i.tagName!=="foreignObject",ph=i=>i.nodeType===8;function jP(i){const{mt:n,p:s,o:{patchProp:r,createText:c,nextSibling:u,parentNode:f,remove:g,insert:p,createComment:k}}=i,C=(U,W)=>{if(!W.hasChildNodes()){s(null,U,W),Vh(),W._vnode=U;return}Ma=!1,x(W.firstChild,U,null,null,null),Vh(),W._vnode=U,Ma&&console.error("Hydration completed but contains mismatches.")},x=(U,W,tt,dt,st,I=!1)=>{const mt=ph(U)&&U.data==="[",pt=()=>H(U,W,tt,dt,st,mt),{type:_t,ref:Et,shapeFlag:Lt,patchFlag:X}=W;let Nt=U.nodeType;W.el=U,X===-2&&(I=!1,W.dynamicChildren=null);let Bt=null;switch(_t){case Ql:Nt!==3?W.children===""?(p(W.el=c(""),f(U),U),Bt=U):Bt=pt():(U.data!==W.children&&(Ma=!0,U.data=W.children),Bt=u(U));break;case Zi:Nt!==8||mt?Bt=pt():Bt=u(U);break;case Wl:if(mt&&(U=u(U),Nt=U.nodeType),Nt===1||Nt===3){Bt=U;const Xt=!W.children.length;for(let te=0;te<W.staticCount;te++)Xt&&(W.children+=Bt.nodeType===1?Bt.outerHTML:Bt.data),te===W.staticCount-1&&(W.anchor=Bt),Bt=u(Bt);return mt?u(Bt):Bt}else pt();break;case ve:mt?Bt=z(U,W,tt,dt,st,I):Bt=pt();break;default:if(Lt&1)Nt!==1||W.type.toLowerCase()!==U.tagName.toLowerCase()?Bt=pt():Bt=v(U,W,tt,dt,st,I);else if(Lt&6){W.slotScopeIds=st;const Xt=f(U);if(n(W,Xt,null,tt,dt,gh(Xt),I),Bt=mt?Z(U):u(U),Bt&&ph(Bt)&&Bt.data==="teleport end"&&(Bt=u(Bt)),Ul(W)){let te;mt?(te=He(ve),te.anchor=Bt?Bt.previousSibling:Xt.lastChild):te=U.nodeType===3?gn(""):He("div"),te.el=U,W.component.subTree=te}}else Lt&64?Nt!==8?Bt=pt():Bt=W.type.hydrate(U,W,tt,dt,st,I,i,M):Lt&128&&(Bt=W.type.hydrate(U,W,tt,dt,gh(f(U)),st,I,i,x))}return Et!=null&&Uh(Et,null,dt,W),Bt},v=(U,W,tt,dt,st,I)=>{I=I||!!W.dynamicChildren;const{type:mt,props:pt,patchFlag:_t,shapeFlag:Et,dirs:Lt}=W,X=mt==="input"&&Lt||mt==="option";if(X||_t!==-1){if(Lt&&mr(W,null,tt,"created"),pt)if(X||!I||_t&48)for(const Bt in pt)(X&&Bt.endsWith("value")||uu(Bt)&&!Nd(Bt))&&r(U,Bt,null,pt[Bt],!1,void 0,tt);else pt.onClick&&r(U,"onClick",null,pt.onClick,!1,void 0,tt);let Nt;if((Nt=pt&&pt.onVnodeBeforeMount)&&wo(Nt,tt,W),Lt&&mr(W,null,tt,"beforeMount"),((Nt=pt&&pt.onVnodeMounted)||Lt)&&i2(()=>{Nt&&wo(Nt,tt,W),Lt&&mr(W,null,tt,"mounted")},dt),Et&16&&!(pt&&(pt.innerHTML||pt.textContent))){let Bt=M(U.firstChild,W,U,tt,dt,st,I);for(;Bt;){Ma=!0;const Xt=Bt;Bt=Bt.nextSibling,g(Xt)}}else Et&8&&U.textContent!==W.children&&(Ma=!0,U.textContent=W.children)}return U.nextSibling},M=(U,W,tt,dt,st,I,mt)=>{mt=mt||!!W.dynamicChildren;const pt=W.children,_t=pt.length;for(let Et=0;Et<_t;Et++){const Lt=mt?pt[Et]:pt[Et]=Lo(pt[Et]);if(U)U=x(U,Lt,dt,st,I,mt);else{if(Lt.type===Ql&&!Lt.children)continue;Ma=!0,s(null,Lt,tt,null,dt,st,gh(tt),I)}}return U},z=(U,W,tt,dt,st,I)=>{const{slotScopeIds:mt}=W;mt&&(st=st?st.concat(mt):mt);const pt=f(U),_t=M(u(U),W,pt,tt,dt,st,I);return _t&&ph(_t)&&_t.data==="]"?u(W.anchor=_t):(Ma=!0,p(W.anchor=k("]"),pt,_t),_t)},H=(U,W,tt,dt,st,I)=>{if(Ma=!0,W.el=null,I){const _t=Z(U);for(;;){const Et=u(U);if(Et&&Et!==_t)g(Et);else break}}const mt=u(U),pt=f(U);return g(U),s(null,W,pt,mt,tt,dt,gh(pt),st),mt},Z=U=>{let W=0;for(;U;)if(U=u(U),U&&ph(U)&&(U.data==="["&&W++,U.data==="]")){if(W===0)return u(U);W--}return U};return[C,x]}const Ri=i2;function A2(i){return E2(i)}function x2(i){return E2(i,jP)}function E2(i,n){const s=aI();s.__VUE__=!0;const{insert:r,remove:c,patchProp:u,createElement:f,createText:g,createComment:p,setText:k,setElementText:C,parentNode:x,nextSibling:v,setScopeId:M=Os,insertStaticContent:z}=i,H=(J,ut,xt,Dt=null,gt=null,jt=null,Jt=!1,$t=null,Vt=!!ut.dynamicChildren)=>{if(J===ut)return;J&&!kr(J,ut)&&(Dt=St(J),Je(J,gt,jt,!0),J=null),ut.patchFlag===-2&&(Vt=!1,ut.dynamicChildren=null);const{type:Pt,ref:ce,shapeFlag:ae}=ut;switch(Pt){case Ql:Z(J,ut,xt,Dt);break;case Zi:U(J,ut,xt,Dt);break;case Wl:J==null&&W(ut,xt,Dt,Jt);break;case ve:X(J,ut,xt,Dt,gt,jt,Jt,$t,Vt);break;default:ae&1?st(J,ut,xt,Dt,gt,jt,Jt,$t,Vt):ae&6?Nt(J,ut,xt,Dt,gt,jt,Jt,$t,Vt):(ae&64||ae&128)&&Pt.process(J,ut,xt,Dt,gt,jt,Jt,$t,Vt,de)}ce!=null&&gt&&Uh(ce,J&&J.ref,jt,ut||J,!ut)},Z=(J,ut,xt,Dt)=>{if(J==null)r(ut.el=g(ut.children),xt,Dt);else{const gt=ut.el=J.el;ut.children!==J.children&&k(gt,ut.children)}},U=(J,ut,xt,Dt)=>{J==null?r(ut.el=p(ut.children||""),xt,Dt):ut.el=J.el},W=(J,ut,xt,Dt)=>{[J.el,J.anchor]=z(J.children,ut,xt,Dt,J.el,J.anchor)},tt=({el:J,anchor:ut},xt,Dt)=>{let gt;for(;J&&J!==ut;)gt=v(J),r(J,xt,Dt),J=gt;r(ut,xt,Dt)},dt=({el:J,anchor:ut})=>{let xt;for(;J&&J!==ut;)xt=v(J),c(J),J=xt;c(ut)},st=(J,ut,xt,Dt,gt,jt,Jt,$t,Vt)=>{Jt=Jt||ut.type==="svg",J==null?I(ut,xt,Dt,gt,jt,Jt,$t,Vt):_t(J,ut,gt,jt,Jt,$t,Vt)},I=(J,ut,xt,Dt,gt,jt,Jt,$t)=>{let Vt,Pt;const{type:ce,props:ae,shapeFlag:Gt,transition:he,dirs:ee}=J;if(Vt=J.el=f(J.type,jt,ae&&ae.is,ae),Gt&8?C(Vt,J.children):Gt&16&&pt(J.children,Vt,null,Dt,gt,jt&&ce!=="foreignObject",Jt,$t),ee&&mr(J,null,Dt,"created"),ae){for(const Se in ae)Se!=="value"&&!Nd(Se)&&u(Vt,Se,null,ae[Se],jt,J.children,Dt,gt,bt);"value"in ae&&u(Vt,"value",null,ae.value),(Pt=ae.onVnodeBeforeMount)&&wo(Pt,Dt,J)}mt(Vt,J,J.scopeId,Jt,Dt),ee&&mr(J,null,Dt,"beforeMount");const Ie=(!gt||gt&&!gt.pendingBranch)&&he&&!he.persisted;Ie&&he.beforeEnter(Vt),r(Vt,ut,xt),((Pt=ae&&ae.onVnodeMounted)||Ie||ee)&&Ri(()=>{Pt&&wo(Pt,Dt,J),Ie&&he.enter(Vt),ee&&mr(J,null,Dt,"mounted")},gt)},mt=(J,ut,xt,Dt,gt)=>{if(xt&&M(J,xt),Dt)for(let jt=0;jt<Dt.length;jt++)M(J,Dt[jt]);if(gt){let jt=gt.subTree;if(ut===jt){const Jt=gt.vnode;mt(J,Jt,Jt.scopeId,Jt.slotScopeIds,gt.parent)}}},pt=(J,ut,xt,Dt,gt,jt,Jt,$t,Vt=0)=>{for(let Pt=Vt;Pt<J.length;Pt++){const ce=J[Pt]=$t?Ra(J[Pt]):Lo(J[Pt]);H(null,ce,ut,xt,Dt,gt,jt,Jt,$t)}},_t=(J,ut,xt,Dt,gt,jt,Jt)=>{const $t=ut.el=J.el;let{patchFlag:Vt,dynamicChildren:Pt,dirs:ce}=ut;Vt|=J.patchFlag&16;const ae=J.props||Pn,Gt=ut.props||Pn;let he;xt&&Il(xt,!1),(he=Gt.onVnodeBeforeUpdate)&&wo(he,xt,ut,J),ce&&mr(ut,J,xt,"beforeUpdate"),xt&&Il(xt,!0);const ee=gt&&ut.type!=="foreignObject";if(Pt?Et(J.dynamicChildren,Pt,$t,xt,Dt,ee,jt):Jt||Ce(J,ut,$t,null,xt,Dt,ee,jt,!1),Vt>0){if(Vt&16)Lt($t,ut,ae,Gt,xt,Dt,gt);else if(Vt&2&&ae.class!==Gt.class&&u($t,"class",null,Gt.class,gt),Vt&4&&u($t,"style",ae.style,Gt.style,gt),Vt&8){const Ie=ut.dynamicProps;for(let Se=0;Se<Ie.length;Se++){const rn=Ie[Se],Xe=ae[rn],ge=Gt[rn];(ge!==Xe||rn==="value")&&u($t,rn,Xe,ge,gt,J.children,xt,Dt,bt)}}Vt&1&&J.children!==ut.children&&C($t,ut.children)}else!Jt&&Pt==null&&Lt($t,ut,ae,Gt,xt,Dt,gt);((he=Gt.onVnodeUpdated)||ce)&&Ri(()=>{he&&wo(he,xt,ut,J),ce&&mr(ut,J,xt,"updated")},Dt)},Et=(J,ut,xt,Dt,gt,jt,Jt)=>{for(let $t=0;$t<ut.length;$t++){const Vt=J[$t],Pt=ut[$t],ce=Vt.el&&(Vt.type===ve||!kr(Vt,Pt)||Vt.shapeFlag&70)?x(Vt.el):xt;H(Vt,Pt,ce,null,Dt,gt,jt,Jt,!0)}},Lt=(J,ut,xt,Dt,gt,jt,Jt)=>{if(xt!==Dt){if(xt!==Pn)for(const $t in xt)!Nd($t)&&!($t in Dt)&&u(J,$t,xt[$t],null,Jt,ut.children,gt,jt,bt);for(const $t in Dt){if(Nd($t))continue;const Vt=Dt[$t],Pt=xt[$t];Vt!==Pt&&$t!=="value"&&u(J,$t,Pt,Vt,Jt,ut.children,gt,jt,bt)}"value"in Dt&&u(J,"value",xt.value,Dt.value)}},X=(J,ut,xt,Dt,gt,jt,Jt,$t,Vt)=>{const Pt=ut.el=J?J.el:g(""),ce=ut.anchor=J?J.anchor:g("");let{patchFlag:ae,dynamicChildren:Gt,slotScopeIds:he}=ut;he&&($t=$t?$t.concat(he):he),J==null?(r(Pt,xt,Dt),r(ce,xt,Dt),pt(ut.children,xt,ce,gt,jt,Jt,$t,Vt)):ae>0&&ae&64&&Gt&&J.dynamicChildren?(Et(J.dynamicChildren,Gt,xt,gt,jt,Jt,$t),(ut.key!=null||gt&&ut===gt.subTree)&&ab(J,ut,!0)):Ce(J,ut,xt,ce,gt,jt,Jt,$t,Vt)},Nt=(J,ut,xt,Dt,gt,jt,Jt,$t,Vt)=>{ut.slotScopeIds=$t,J==null?ut.shapeFlag&512?gt.ctx.activate(ut,xt,Dt,Jt,Vt):Bt(ut,xt,Dt,gt,jt,Jt,Vt):Xt(J,ut,Vt)},Bt=(J,ut,xt,Dt,gt,jt,Jt)=>{const $t=J.component=N2(J,Dt,gt);if(mu(J)&&($t.ctx.renderer=de),L2($t),$t.asyncDep){if(gt&&gt.registerDep($t,te),!J.el){const Vt=$t.subTree=He(Zi);U(null,Vt,ut,xt)}return}te($t,J,ut,xt,gt,jt,Jt)},Xt=(J,ut,xt)=>{const Dt=ut.component=J.component;if(rP(J,ut,xt))if(Dt.asyncDep&&!Dt.asyncResolved){Wt(Dt,ut,xt);return}else Dt.next=ut,ZI(Dt.update),Dt.update();else ut.el=J.el,Dt.vnode=ut},te=(J,ut,xt,Dt,gt,jt,Jt)=>{const $t=()=>{if(J.isMounted){let{next:ce,bu:ae,u:Gt,parent:he,vnode:ee}=J,Ie=ce,Se;Il(J,!1),ce?(ce.el=ee.el,Wt(J,ce,Jt)):ce=ee,ae&&Rc(ae),(Se=ce.props&&ce.props.onVnodeBeforeUpdate)&&wo(Se,he,ce,ee),Il(J,!0);const rn=Bh(J),Xe=J.subTree;J.subTree=rn,H(Xe,rn,x(Xe.el),St(Xe),J,gt,jt),ce.el=rn.el,Ie===null&&Jm(J,rn.el),Gt&&Ri(Gt,gt),(Se=ce.props&&ce.props.onVnodeUpdated)&&Ri(()=>wo(Se,he,ce,ee),gt)}else{let ce;const{el:ae,props:Gt}=ut,{bm:he,m:ee,parent:Ie}=J,Se=Ul(ut);if(Il(J,!1),he&&Rc(he),!Se&&(ce=Gt&&Gt.onVnodeBeforeMount)&&wo(ce,Ie,ut),Il(J,!0),ae&&xe){const rn=()=>{J.subTree=Bh(J),xe(ae,J.subTree,J,gt,null)};Se?ut.type.__asyncLoader().then(()=>!J.isUnmounted&&rn()):rn()}else{const rn=J.subTree=Bh(J);H(null,rn,xt,Dt,J,gt,jt),ut.el=rn.el}if(ee&&Ri(ee,gt),!Se&&(ce=Gt&&Gt.onVnodeMounted)){const rn=ut;Ri(()=>wo(ce,Ie,rn),gt)}(ut.shapeFlag&256||Ie&&Ul(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&J.a&&Ri(J.a,gt),J.isMounted=!0,ut=xt=Dt=null}},Vt=J.effect=new gu($t,()=>pf(Pt),J.scope),Pt=J.update=()=>Vt.run();Pt.id=J.uid,Il(J,!0),Pt()},Wt=(J,ut,xt)=>{ut.component=J;const Dt=J.vnode.props;J.vnode=ut,J.next=null,BP(J,ut.props,Dt,xt),LP(J,ut.children,xt),Xc(),my(),td()},Ce=(J,ut,xt,Dt,gt,jt,Jt,$t,Vt=!1)=>{const Pt=J&&J.children,ce=J?J.shapeFlag:0,ae=ut.children,{patchFlag:Gt,shapeFlag:he}=ut;if(Gt>0){if(Gt&128){pn(Pt,ae,xt,Dt,gt,jt,Jt,$t,Vt);return}else if(Gt&256){hn(Pt,ae,xt,Dt,gt,jt,Jt,$t,Vt);return}}he&8?(ce&16&&bt(Pt,gt,jt),ae!==Pt&&C(xt,ae)):ce&16?he&16?pn(Pt,ae,xt,Dt,gt,jt,Jt,$t,Vt):bt(Pt,gt,jt,!0):(ce&8&&C(xt,""),he&16&&pt(ae,xt,Dt,gt,jt,Jt,$t,Vt))},hn=(J,ut,xt,Dt,gt,jt,Jt,$t,Vt)=>{J=J||Oc,ut=ut||Oc;const Pt=J.length,ce=ut.length,ae=Math.min(Pt,ce);let Gt;for(Gt=0;Gt<ae;Gt++){const he=ut[Gt]=Vt?Ra(ut[Gt]):Lo(ut[Gt]);H(J[Gt],he,xt,null,gt,jt,Jt,$t,Vt)}Pt>ce?bt(J,gt,jt,!0,!1,ae):pt(ut,xt,Dt,gt,jt,Jt,$t,Vt,ae)},pn=(J,ut,xt,Dt,gt,jt,Jt,$t,Vt)=>{let Pt=0;const ce=ut.length;let ae=J.length-1,Gt=ce-1;for(;Pt<=ae&&Pt<=Gt;){const he=J[Pt],ee=ut[Pt]=Vt?Ra(ut[Pt]):Lo(ut[Pt]);if(kr(he,ee))H(he,ee,xt,null,gt,jt,Jt,$t,Vt);else break;Pt++}for(;Pt<=ae&&Pt<=Gt;){const he=J[ae],ee=ut[Gt]=Vt?Ra(ut[Gt]):Lo(ut[Gt]);if(kr(he,ee))H(he,ee,xt,null,gt,jt,Jt,$t,Vt);else break;ae--,Gt--}if(Pt>ae){if(Pt<=Gt){const he=Gt+1,ee=he<ce?ut[he].el:Dt;for(;Pt<=Gt;)H(null,ut[Pt]=Vt?Ra(ut[Pt]):Lo(ut[Pt]),xt,ee,gt,jt,Jt,$t,Vt),Pt++}}else if(Pt>Gt)for(;Pt<=ae;)Je(J[Pt],gt,jt,!0),Pt++;else{const he=Pt,ee=Pt,Ie=new Map;for(Pt=ee;Pt<=Gt;Pt++){const ii=ut[Pt]=Vt?Ra(ut[Pt]):Lo(ut[Pt]);ii.key!=null&&Ie.set(ii.key,Pt)}let Se,rn=0;const Xe=Gt-ee+1;let ge=!1,$i=0;const li=new Array(Xe);for(Pt=0;Pt<Xe;Pt++)li[Pt]=0;for(Pt=he;Pt<=ae;Pt++){const ii=J[Pt];if(rn>=Xe){Je(ii,gt,jt,!0);continue}let mn;if(ii.key!=null)mn=Ie.get(ii.key);else for(Se=ee;Se<=Gt;Se++)if(li[Se-ee]===0&&kr(ii,ut[Se])){mn=Se;break}mn===void 0?Je(ii,gt,jt,!0):(li[mn-ee]=Pt+1,mn>=$i?$i=mn:ge=!0,H(ii,ut[mn],xt,null,gt,jt,Jt,$t,Vt),rn++)}const Gn=ge?FP(li):Oc;for(Se=Gn.length-1,Pt=Xe-1;Pt>=0;Pt--){const ii=ee+Pt,mn=ut[ii],bn=ii+1<ce?ut[ii+1].el:Dt;li[Pt]===0?H(null,mn,xt,bn,gt,jt,Jt,$t,Vt):ge&&(Se<0||Pt!==Gn[Se]?Re(mn,xt,bn,2):Se--)}}},Re=(J,ut,xt,Dt,gt=null)=>{const{el:jt,type:Jt,transition:$t,children:Vt,shapeFlag:Pt}=J;if(Pt&6){Re(J.component.subTree,ut,xt,Dt);return}if(Pt&128){J.suspense.move(ut,xt,Dt);return}if(Pt&64){Jt.move(J,ut,xt,de);return}if(Jt===ve){r(jt,ut,xt);for(let ae=0;ae<Vt.length;ae++)Re(Vt[ae],ut,xt,Dt);r(J.anchor,ut,xt);return}if(Jt===Wl){tt(J,ut,xt);return}if(Dt!==2&&Pt&1&&$t)if(Dt===0)$t.beforeEnter(jt),r(jt,ut,xt),Ri(()=>$t.enter(jt),gt);else{const{leave:ae,delayLeave:Gt,afterLeave:he}=$t,ee=()=>r(jt,ut,xt),Ie=()=>{ae(jt,()=>{ee(),he&&he()})};Gt?Gt(jt,ee,Ie):Ie()}else r(jt,ut,xt)},Je=(J,ut,xt,Dt=!1,gt=!1)=>{const{type:jt,props:Jt,ref:$t,children:Vt,dynamicChildren:Pt,shapeFlag:ce,patchFlag:ae,dirs:Gt}=J;if($t!=null&&Uh($t,null,xt,J,!0),ce&256){ut.ctx.deactivate(J);return}const he=ce&1&&Gt,ee=!Ul(J);let Ie;if(ee&&(Ie=Jt&&Jt.onVnodeBeforeUnmount)&&wo(Ie,ut,J),ce&6)nt(J.component,xt,Dt);else{if(ce&128){J.suspense.unmount(xt,Dt);return}he&&mr(J,null,ut,"beforeUnmount"),ce&64?J.type.remove(J,ut,xt,gt,de,Dt):Pt&&(jt!==ve||ae>0&&ae&64)?bt(Pt,ut,xt,!1,!0):(jt===ve&&ae&384||!gt&&ce&16)&&bt(Vt,ut,xt),Dt&&sn(J)}(ee&&(Ie=Jt&&Jt.onVnodeUnmounted)||he)&&Ri(()=>{Ie&&wo(Ie,ut,J),he&&mr(J,null,ut,"unmounted")},xt)},sn=J=>{const{type:ut,el:xt,anchor:Dt,transition:gt}=J;if(ut===ve){re(xt,Dt);return}if(ut===Wl){dt(J);return}const jt=()=>{c(xt),gt&&!gt.persisted&&gt.afterLeave&&gt.afterLeave()};if(J.shapeFlag&1&&gt&&!gt.persisted){const{leave:Jt,delayLeave:$t}=gt,Vt=()=>Jt(xt,jt);$t?$t(J.el,jt,Vt):Vt()}else jt()},re=(J,ut)=>{let xt;for(;J!==ut;)xt=v(J),c(J),J=xt;c(ut)},nt=(J,ut,xt)=>{const{bum:Dt,scope:gt,update:jt,subTree:Jt,um:$t}=J;Dt&&Rc(Dt),gt.stop(),jt&&(jt.active=!1,Je(Jt,J,ut,xt)),$t&&Ri($t,ut),Ri(()=>{J.isUnmounted=!0},ut),ut&&ut.pendingBranch&&!ut.isUnmounted&&J.asyncDep&&!J.asyncResolved&&J.suspenseId===ut.pendingId&&(ut.deps--,ut.deps===0&&ut.resolve())},bt=(J,ut,xt,Dt=!1,gt=!1,jt=0)=>{for(let Jt=jt;Jt<J.length;Jt++)Je(J[Jt],ut,xt,Dt,gt)},St=J=>J.shapeFlag&6?St(J.component.subTree):J.shapeFlag&128?J.suspense.next():v(J.anchor||J.el),Yt=(J,ut,xt)=>{J==null?ut._vnode&&Je(ut._vnode,null,null,!0):H(ut._vnode||null,J,ut,null,null,null,xt),my(),Vh(),ut._vnode=J},de={p:H,um:Je,m:Re,r:sn,mt:Bt,mc:pt,pc:Ce,pbc:Et,n:St,o:i};let ze,xe;return n&&([ze,xe]=n(de)),{render:Yt,hydrate:ze,createApp:zP(Yt,ze)}}function Il({effect:i,update:n},s){i.allowRecurse=n.allowRecurse=s}function ab(i,n,s=!1){const r=i.children,c=n.children;if(ye(r)&&ye(c))for(let u=0;u<r.length;u++){const f=r[u];let g=c[u];g.shapeFlag&1&&!g.dynamicChildren&&((g.patchFlag<=0||g.patchFlag===32)&&(g=c[u]=Ra(c[u]),g.el=f.el),s||ab(f,g)),g.type===Ql&&(g.el=f.el)}}function FP(i){const n=i.slice(),s=[0];let r,c,u,f,g;const p=i.length;for(r=0;r<p;r++){const k=i[r];if(k!==0){if(c=s[s.length-1],i[c]<k){n[r]=c,s.push(r);continue}for(u=0,f=s.length-1;u<f;)g=u+f>>1,i[s[g]]<k?u=g+1:f=g;k<i[s[u]]&&(u>0&&(n[r]=s[u-1]),s[u]=r)}}for(u=s.length,f=s[u-1];u-- >0;)s[u]=f,f=n[f];return s}const $P=i=>i.__isTeleport,zd=i=>i&&(i.disabled||i.disabled===""),Sy=i=>typeof SVGElement<"u"&&i instanceof SVGElement,am=(i,n)=>{const s=i&&i.to;return Jn(s)?n?n(s):null:s},VP={__isTeleport:!0,process(i,n,s,r,c,u,f,g,p,k){const{mc:C,pc:x,pbc:v,o:{insert:M,querySelector:z,createText:H,createComment:Z}}=k,U=zd(n.props);let{shapeFlag:W,children:tt,dynamicChildren:dt}=n;if(i==null){const st=n.el=H(""),I=n.anchor=H("");M(st,s,r),M(I,s,r);const mt=n.target=am(n.props,z),pt=n.targetAnchor=H("");mt&&(M(pt,mt),f=f||Sy(mt));const _t=(Et,Lt)=>{W&16&&C(tt,Et,Lt,c,u,f,g,p)};U?_t(s,I):mt&&_t(mt,pt)}else{n.el=i.el;const st=n.anchor=i.anchor,I=n.target=i.target,mt=n.targetAnchor=i.targetAnchor,pt=zd(i.props),_t=pt?s:I,Et=pt?st:mt;if(f=f||Sy(I),dt?(v(i.dynamicChildren,dt,_t,c,u,f,g),ab(i,n,!0)):p||x(i,n,_t,Et,c,u,f,g,!1),U)pt||mh(n,s,st,k,1);else if((n.props&&n.props.to)!==(i.props&&i.props.to)){const Lt=n.target=am(n.props,z);Lt&&mh(n,Lt,null,k,0)}else pt&&mh(n,I,mt,k,1)}S2(n)},remove(i,n,s,r,{um:c,o:{remove:u}},f){const{shapeFlag:g,children:p,anchor:k,targetAnchor:C,target:x,props:v}=i;if(x&&u(C),(f||!zd(v))&&(u(k),g&16))for(let M=0;M<p.length;M++){const z=p[M];c(z,n,s,!0,!!z.dynamicChildren)}},move:mh,hydrate:HP};function mh(i,n,s,{o:{insert:r},m:c},u=2){u===0&&r(i.targetAnchor,n,s);const{el:f,anchor:g,shapeFlag:p,children:k,props:C}=i,x=u===2;if(x&&r(f,n,s),(!x||zd(C))&&p&16)for(let v=0;v<k.length;v++)c(k[v],n,s,2);x&&r(g,n,s)}function HP(i,n,s,r,c,u,{o:{nextSibling:f,parentNode:g,querySelector:p}},k){const C=n.target=am(n.props,p);if(C){const x=C._lpa||C.firstChild;if(n.shapeFlag&16)if(zd(n.props))n.anchor=k(f(i),n,g(i),s,r,c,u),n.targetAnchor=x;else{n.anchor=f(i);let v=x;for(;v;)if(v=f(v),v&&v.nodeType===8&&v.data==="teleport anchor"){n.targetAnchor=v,C._lpa=n.targetAnchor&&f(n.targetAnchor);break}k(x,n,C,s,r,c,u)}S2(n)}return n.anchor&&f(n.anchor)}const UP=VP;function S2(i){const n=i.ctx;if(n&&n.ut){let s=i.children[0].el;for(;s!==i.targetAnchor;)s.nodeType===1&&s.setAttribute("data-v-owner",n.uid),s=s.nextSibling;n.ut()}}const ve=Symbol(void 0),Ql=Symbol(void 0),Zi=Symbol(void 0),Wl=Symbol(void 0),jd=[];let vo=null;function at(i=!1){jd.push(vo=i?null:[])}function T2(){jd.pop(),vo=jd[jd.length-1]||null}let Zl=1;function lm(i){Zl+=i}function D2(i){return i.dynamicChildren=Zl>0?vo||Oc:null,T2(),Zl>0&&vo&&vo.push(i),i}function ht(i,n,s,r,c,u){return D2(E(i,n,s,r,c,u,!0))}function hs(i,n,s,r,c){return D2(He(i,n,s,r,c,!0))}function Ga(i){return i?i.__v_isVNode===!0:!1}function kr(i,n){return i.type===n.type&&i.key===n.key}function WP(i){}const yf="__vInternal",M2=({key:i})=>i!=null?i:null,Nh=({ref:i,ref_key:n,ref_for:s})=>i!=null?Jn(i)||Dn(i)||Fe(i)?{i:zi,r:i,k:n,f:!!s}:i:null;function E(i,n=null,s=null,r=0,c=null,u=i===ve?0:1,f=!1,g=!1){const p={__v_isVNode:!0,__v_skip:!0,type:i,props:n,key:n&&M2(n),ref:n&&Nh(n),scopeId:bf,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:u,patchFlag:r,dynamicProps:c,dynamicChildren:null,appContext:null,ctx:zi};return g?(lb(p,s),u&128&&i.normalize(p)):s&&(p.shapeFlag|=Jn(s)?8:16),Zl>0&&!f&&vo&&(p.patchFlag>0||u&6)&&p.patchFlag!==32&&vo.push(p),p}const He=qP;function qP(i,n=null,s=null,r=0,c=null,u=!1){if((!i||i===p2)&&(i=Zi),Ga(i)){const g=vr(i,n,!0);return s&&lb(g,s),Zl>0&&!u&&vo&&(g.shapeFlag&6?vo[vo.indexOf(i)]=g:vo.push(g)),g.patchFlag|=-2,g}if(XP(i)&&(i=i.__vccOpts),n){n=I2(n);let{class:g,style:p}=n;g&&!Jn(g)&&(n.class=Jr(g)),Ln(p)&&(zc(p)&&!ye(p)&&(p=ni({},p)),n.style=du(p))}const f=Jn(i)?1:n2(i)?128:$P(i)?64:Ln(i)?4:Fe(i)?2:0;return E(i,n,s,r,c,f,u,!0)}function I2(i){return i?zc(i)||yf in i?ni({},i):i:null}function vr(i,n,s=!1){const{props:r,ref:c,patchFlag:u,children:f}=i,g=n?B2(r||{},n):r;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:g,key:g&&M2(g),ref:n&&n.ref?s&&c?ye(c)?c.concat(Nh(n)):[c,Nh(n)]:Nh(n):c,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:f,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:n&&i.type!==ve?u===-1?16:u|16:u,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&vr(i.ssContent),ssFallback:i.ssFallback&&vr(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx}}function gn(i=" ",n=0){return He(Ql,null,i,n)}function P2(i,n){const s=He(Wl,null,i);return s.staticCount=n,s}function ne(i="",n=!1){return n?(at(),hs(Zi,null,i)):He(Zi,null,i)}function Lo(i){return i==null||typeof i=="boolean"?He(Zi):ye(i)?He(ve,null,i.slice()):typeof i=="object"?Ra(i):He(Ql,null,String(i))}function Ra(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:vr(i)}function lb(i,n){let s=0;const{shapeFlag:r}=i;if(n==null)n=null;else if(ye(n))s=16;else if(typeof n=="object")if(r&65){const c=n.default;c&&(c._c&&(c._d=!1),lb(i,c()),c._c&&(c._d=!0));return}else{s=32;const c=n._;!c&&!(yf in n)?n._ctx=zi:c===3&&zi&&(zi.slots._===1?n._=1:(n._=2,i.patchFlag|=1024))}else Fe(n)?(n={default:n,_ctx:zi},s=32):(n=String(n),r&64?(s=16,n=[gn(n)]):s=8);i.children=n,i.shapeFlag|=s}function B2(...i){const n={};for(let s=0;s<i.length;s++){const r=i[s];for(const c in r)if(c==="class")n.class!==r.class&&(n.class=Jr([n.class,r.class]));else if(c==="style")n.style=du([n.style,r.style]);else if(uu(c)){const u=n[c],f=r[c];f&&u!==f&&!(ye(u)&&u.includes(f))&&(n[c]=u?[].concat(u,f):f)}else c!==""&&(n[c]=r[c])}return n}function wo(i,n,s,r=null){Ro(i,n,7,[s,r])}const GP=C2();let YP=0;function N2(i,n,s){const r=i.type,c=(n?n.appContext:i.appContext)||GP,u={uid:YP++,vnode:i,type:r,parent:n,appContext:c,root:null,next:null,subTree:null,effect:null,update:null,scope:new $m(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(c.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:w2(r,c),emitsOptions:e2(r,c),emit:null,emitted:null,propsDefaults:Pn,inheritAttrs:r.inheritAttrs,ctx:Pn,data:Pn,props:Pn,attrs:Pn,slots:Pn,refs:Pn,setupState:Pn,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return u.ctx={_:u},u.root=n?n.root:u,u.emit=XI.bind(null,u),i.ce&&i.ce(u),u}let ki=null;const Ja=()=>ki||zi,Ya=i=>{ki=i,i.scope.on()},Ha=()=>{ki&&ki.scope.off(),ki=null};function O2(i){return i.vnode.shapeFlag&4}let Uc=!1;function L2(i,n=!1){Uc=n;const{props:s,children:r}=i.vnode,c=O2(i);PP(i,s,c,n),OP(i,r);const u=c?KP(i,n):void 0;return Uc=!1,u}function KP(i,n){const s=i.type;i.accessCache=Object.create(null),i.proxy=Wm(new Proxy(i.ctx,im));const{setup:r}=s;if(r){const c=i.setupContext=r.length>1?z2(i):null;Ya(i),Xc();const u=Xr(r,i,0,[i.props,c]);if(td(),Ha(),jm(u)){if(u.then(Ha,Ha),n)return u.then(f=>{cm(i,f,n)}).catch(f=>{ic(f,i,0)});i.asyncDep=u}else cm(i,u,n)}else R2(i,n)}function cm(i,n,s){Fe(n)?i.type.__ssrInlineRender?i.ssrRender=n:i.render=n:Ln(n)&&(i.setupState=Km(n)),R2(i,s)}let Wh,dm;function QP(i){Wh=i,dm=n=>{n.render._rc&&(n.withProxy=new Proxy(n.ctx,EP))}}const ZP=()=>!Wh;function R2(i,n,s){const r=i.type;if(!i.render){if(!n&&Wh&&!r.render){const c=r.template||sb(i).template;if(c){const{isCustomElement:u,compilerOptions:f}=i.appContext.config,{delimiters:g,compilerOptions:p}=r,k=ni(ni({isCustomElement:u,delimiters:g},f),p);r.render=Wh(c,k)}}i.render=r.render||Os,dm&&dm(i)}Ya(i),Xc(),SP(i),td(),Ha()}function JP(i){return new Proxy(i.attrs,{get(n,s){return zo(i,"get","$attrs"),n[s]}})}function z2(i){const n=r=>{i.exposed=r||{}};let s;return{get attrs(){return s||(s=JP(i))},slots:i.slots,emit:i.emit,expose:n}}function Cf(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(Km(Wm(i.exposed)),{get(n,s){if(s in n)return n[s];if(s in Rd)return Rd[s](i)},has(n,s){return s in n||s in Rd}}))}function um(i,n=!0){return Fe(i)?i.displayName||i.name:i.name||n&&i.__name}function XP(i){return Fe(i)&&"__vccOpts"in i}const ai=(i,n)=>GI(i,n,Uc);function t6(){return null}function e6(){return null}function n6(i){}function i6(i,n){return null}function o6(){return j2().slots}function s6(){return j2().attrs}function j2(){const i=Ja();return i.setupContext||(i.setupContext=z2(i))}function r6(i,n){const s=ye(i)?i.reduce((r,c)=>(r[c]={},r),{}):i;for(const r in n){const c=s[r];c?ye(c)||Fe(c)?s[r]={type:c,default:n[r]}:c.default=n[r]:c===null&&(s[r]={default:n[r]})}return s}function a6(i,n){const s={};for(const r in i)n.includes(r)||Object.defineProperty(s,r,{enumerable:!0,get:()=>i[r]});return s}function l6(i){const n=Ja();let s=i();return Ha(),jm(s)&&(s=s.catch(r=>{throw Ya(n),r})),[s,()=>Ya(n)]}function Wc(i,n,s){const r=arguments.length;return r===2?Ln(n)&&!ye(n)?Ga(n)?He(i,null,[n]):He(i,n):He(i,null,n):(r>3?s=Array.prototype.slice.call(arguments,2):r===3&&Ga(s)&&(s=[s]),He(i,n,s))}const F2=Symbol(""),$2=()=>gs(F2);function c6(){}function d6(i,n,s,r){const c=s[r];if(c&&V2(c,i))return c;const u=n();return u.memo=i.slice(),s[r]=u}function V2(i,n){const s=i.memo;if(s.length!=n.length)return!1;for(let r=0;r<s.length;r++)if(Vc(s[r],n[r]))return!1;return Zl>0&&vo&&vo.push(i),!0}const H2="3.2.45",u6={createComponentInstance:N2,setupComponent:L2,renderComponentRoot:Bh,setCurrentRenderingInstance:Xd,isVNode:Ga,normalizeVNode:Lo},h6=u6,f6=null,g6=null,p6="http://www.w3.org/2000/svg",jl=typeof document<"u"?document:null,Ty=jl&&jl.createElement("template"),m6={insert:(i,n,s)=>{n.insertBefore(i,s||null)},remove:i=>{const n=i.parentNode;n&&n.removeChild(i)},createElement:(i,n,s,r)=>{const c=n?jl.createElementNS(p6,i):jl.createElement(i,s?{is:s}:void 0);return i==="select"&&r&&r.multiple!=null&&c.setAttribute("multiple",r.multiple),c},createText:i=>jl.createTextNode(i),createComment:i=>jl.createComment(i),setText:(i,n)=>{i.nodeValue=n},setElementText:(i,n)=>{i.textContent=n},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>jl.querySelector(i),setScopeId(i,n){i.setAttribute(n,"")},insertStaticContent(i,n,s,r,c,u){const f=s?s.previousSibling:n.lastChild;if(c&&(c===u||c.nextSibling))for(;n.insertBefore(c.cloneNode(!0),s),!(c===u||!(c=c.nextSibling)););else{Ty.innerHTML=r?`<svg>${i}</svg>`:i;const g=Ty.content;if(r){const p=g.firstChild;for(;p.firstChild;)g.appendChild(p.firstChild);g.removeChild(p)}n.insertBefore(g,s)}return[f?f.nextSibling:n.firstChild,s?s.previousSibling:n.lastChild]}};function b6(i,n,s){const r=i._vtc;r&&(n=(n?[n,...r]:[...r]).join(" ")),n==null?i.removeAttribute("class"):s?i.setAttribute("class",n):i.className=n}function k6(i,n,s){const r=i.style,c=Jn(s);if(s&&!c){for(const u in s)hm(r,u,s[u]);if(n&&!Jn(n))for(const u in n)s[u]==null&&hm(r,u,"")}else{const u=r.display;c?n!==s&&(r.cssText=s):n&&i.removeAttribute("style"),"_vod"in i&&(r.display=u)}}const Dy=/\s*!important$/;function hm(i,n,s){if(ye(s))s.forEach(r=>hm(i,n,r));else if(s==null&&(s=""),n.startsWith("--"))i.setProperty(n,s);else{const r=w6(i,n);Dy.test(s)?i.setProperty(ds(r),s.replace(Dy,""),"important"):i[r]=s}}const My=["Webkit","Moz","ms"],Tp={};function w6(i,n){const s=Tp[n];if(s)return s;let r=yo(n);if(r!=="filter"&&r in i)return Tp[n]=r;r=fu(r);for(let c=0;c<My.length;c++){const u=My[c]+r;if(u in i)return Tp[n]=u}return n}const Iy="http://www.w3.org/1999/xlink";function _6(i,n,s,r,c){if(r&&n.startsWith("xlink:"))s==null?i.removeAttributeNS(Iy,n.slice(6,n.length)):i.setAttributeNS(Iy,n,s);else{const u=X3(n);s==null||u&&!DA(s)?i.removeAttribute(n):i.setAttribute(n,u?"":s)}}function v6(i,n,s,r,c,u,f){if(n==="innerHTML"||n==="textContent"){r&&f(r,c,u),i[n]=s==null?"":s;return}if(n==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=s;const p=s==null?"":s;(i.value!==p||i.tagName==="OPTION")&&(i.value=p),s==null&&i.removeAttribute(n);return}let g=!1;if(s===""||s==null){const p=typeof i[n];p==="boolean"?s=DA(s):s==null&&p==="string"?(s="",g=!0):p==="number"&&(s=0,g=!0)}try{i[n]=s}catch{}g&&i.removeAttribute(n)}function Zr(i,n,s,r){i.addEventListener(n,s,r)}function y6(i,n,s,r){i.removeEventListener(n,s,r)}function C6(i,n,s,r,c=null){const u=i._vei||(i._vei={}),f=u[n];if(r&&f)f.value=r;else{const[g,p]=A6(n);if(r){const k=u[n]=S6(r,c);Zr(i,g,k,p)}else f&&(y6(i,g,f,p),u[n]=void 0)}}const Py=/(?:Once|Passive|Capture)$/;function A6(i){let n;if(Py.test(i)){n={};let r;for(;r=i.match(Py);)i=i.slice(0,i.length-r[0].length),n[r[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):ds(i.slice(2)),n]}let Dp=0;const x6=Promise.resolve(),E6=()=>Dp||(x6.then(()=>Dp=0),Dp=Date.now());function S6(i,n){const s=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=s.attached)return;Ro(T6(r,s.value),n,5,[r])};return s.value=i,s.attached=E6(),s}function T6(i,n){if(ye(n)){const s=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0},n.map(r=>c=>!c._stopped&&r&&r(c))}else return n}const By=/^on[a-z]/,D6=(i,n,s,r,c=!1,u,f,g,p)=>{n==="class"?b6(i,r,c):n==="style"?k6(i,s,r):uu(n)?Rm(n)||C6(i,n,s,r,f):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):M6(i,n,r,c))?v6(i,n,r,u,f,g,p):(n==="true-value"?i._trueValue=r:n==="false-value"&&(i._falseValue=r),_6(i,n,r,c))};function M6(i,n,s,r){return r?!!(n==="innerHTML"||n==="textContent"||n in i&&By.test(n)&&Fe(s)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&i.tagName==="INPUT"||n==="type"&&i.tagName==="TEXTAREA"||By.test(n)&&Jn(s)?!1:n in i}function U2(i,n){const s=ed(i);class r extends Af{constructor(u){super(s,u,n)}}return r.def=s,r}const I6=i=>U2(i,ox),P6=typeof HTMLElement<"u"?HTMLElement:class{};class Af extends P6{constructor(n,s={},r){super(),this._def=n,this._props=s,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&r?r(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,gf(()=>{this._connected||(pm(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let r=0;r<this.attributes.length;r++)this._setAttr(this.attributes[r].name);new MutationObserver(r=>{for(const c of r)this._setAttr(c.attributeName)}).observe(this,{attributes:!0});const n=(r,c=!1)=>{const{props:u,styles:f}=r;let g;if(u&&!ye(u))for(const p in u){const k=u[p];(k===Number||k&&k.type===Number)&&(p in this._props&&(this._props[p]=na(this._props[p])),(g||(g=Object.create(null)))[yo(p)]=!0)}this._numberProps=g,c&&this._resolveProps(r),this._applyStyles(f),this._update()},s=this._def.__asyncLoader;s?s().then(r=>n(r,!0)):n(this._def)}_resolveProps(n){const{props:s}=n,r=ye(s)?s:Object.keys(s||{});for(const c of Object.keys(this))c[0]!=="_"&&r.includes(c)&&this._setProp(c,this[c],!0,!1);for(const c of r.map(yo))Object.defineProperty(this,c,{get(){return this._getProp(c)},set(u){this._setProp(c,u)}})}_setAttr(n){let s=this.getAttribute(n);const r=yo(n);this._numberProps&&this._numberProps[r]&&(s=na(s)),this._setProp(r,s,!1)}_getProp(n){return this._props[n]}_setProp(n,s,r=!0,c=!0){s!==this._props[n]&&(this._props[n]=s,c&&this._instance&&this._update(),r&&(s===!0?this.setAttribute(ds(n),""):typeof s=="string"||typeof s=="number"?this.setAttribute(ds(n),s+""):s||this.removeAttribute(ds(n))))}_update(){pm(this._createVNode(),this.shadowRoot)}_createVNode(){const n=He(this._def,ni({},this._props));return this._instance||(n.ce=s=>{this._instance=s,s.isCE=!0;const r=(u,f)=>{this.dispatchEvent(new CustomEvent(u,{detail:f}))};s.emit=(u,...f)=>{r(u,f),ds(u)!==u&&r(ds(u),f)};let c=this;for(;c=c&&(c.parentNode||c.host);)if(c instanceof Af){s.parent=c._instance,s.provides=c._instance.provides;break}}),n}_applyStyles(n){n&&n.forEach(s=>{const r=document.createElement("style");r.textContent=s,this.shadowRoot.appendChild(r)})}}function B6(i="$style"){{const n=Ja();if(!n)return Pn;const s=n.type.__cssModules;if(!s)return Pn;const r=s[i];return r||Pn}}function N6(i){const n=Ja();if(!n)return;const s=n.ut=(c=i(n.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${n.uid}"]`)).forEach(u=>gm(u,c))},r=()=>{const c=i(n.proxy);fm(n.subTree,c),s(c)};o2(r),Co(()=>{const c=new MutationObserver(r);c.observe(n.subTree.el.parentNode,{childList:!0}),vf(()=>c.disconnect())})}function fm(i,n){if(i.shapeFlag&128){const s=i.suspense;i=s.activeBranch,s.pendingBranch&&!s.isHydrating&&s.effects.push(()=>{fm(s.activeBranch,n)})}for(;i.component;)i=i.component.subTree;if(i.shapeFlag&1&&i.el)gm(i.el,n);else if(i.type===ve)i.children.forEach(s=>fm(s,n));else if(i.type===Wl){let{el:s,anchor:r}=i;for(;s&&(gm(s,n),s!==r);)s=s.nextSibling}}function gm(i,n){if(i.nodeType===1){const s=i.style;for(const r in n)s.setProperty(`--${r}`,n[r])}}const Ia="transition",_d="animation",cb=(i,{slots:n})=>Wc(eb,q2(i),n);cb.displayName="Transition";const W2={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},O6=cb.props=ni({},eb.props,W2),Pl=(i,n=[])=>{ye(i)?i.forEach(s=>s(...n)):i&&i(...n)},Ny=i=>i?ye(i)?i.some(n=>n.length>1):i.length>1:!1;function q2(i){const n={};for(const X in i)X in W2||(n[X]=i[X]);if(i.css===!1)return n;const{name:s="v",type:r,duration:c,enterFromClass:u=`${s}-enter-from`,enterActiveClass:f=`${s}-enter-active`,enterToClass:g=`${s}-enter-to`,appearFromClass:p=u,appearActiveClass:k=f,appearToClass:C=g,leaveFromClass:x=`${s}-leave-from`,leaveActiveClass:v=`${s}-leave-active`,leaveToClass:M=`${s}-leave-to`}=i,z=L6(c),H=z&&z[0],Z=z&&z[1],{onBeforeEnter:U,onEnter:W,onEnterCancelled:tt,onLeave:dt,onLeaveCancelled:st,onBeforeAppear:I=U,onAppear:mt=W,onAppearCancelled:pt=tt}=n,_t=(X,Nt,Bt)=>{La(X,Nt?C:g),La(X,Nt?k:f),Bt&&Bt()},Et=(X,Nt)=>{X._isLeaving=!1,La(X,x),La(X,M),La(X,v),Nt&&Nt()},Lt=X=>(Nt,Bt)=>{const Xt=X?mt:W,te=()=>_t(Nt,X,Bt);Pl(Xt,[Nt,te]),Oy(()=>{La(Nt,X?p:u),qr(Nt,X?C:g),Ny(Xt)||Ly(Nt,r,H,te)})};return ni(n,{onBeforeEnter(X){Pl(U,[X]),qr(X,u),qr(X,f)},onBeforeAppear(X){Pl(I,[X]),qr(X,p),qr(X,k)},onEnter:Lt(!1),onAppear:Lt(!0),onLeave(X,Nt){X._isLeaving=!0;const Bt=()=>Et(X,Nt);qr(X,x),Y2(),qr(X,v),Oy(()=>{!X._isLeaving||(La(X,x),qr(X,M),Ny(dt)||Ly(X,r,Z,Bt))}),Pl(dt,[X,Bt])},onEnterCancelled(X){_t(X,!1),Pl(tt,[X])},onAppearCancelled(X){_t(X,!0),Pl(pt,[X])},onLeaveCancelled(X){Et(X),Pl(st,[X])}})}function L6(i){if(i==null)return null;if(Ln(i))return[Mp(i.enter),Mp(i.leave)];{const n=Mp(i);return[n,n]}}function Mp(i){return na(i)}function qr(i,n){n.split(/\s+/).forEach(s=>s&&i.classList.add(s)),(i._vtc||(i._vtc=new Set)).add(n)}function La(i,n){n.split(/\s+/).forEach(r=>r&&i.classList.remove(r));const{_vtc:s}=i;s&&(s.delete(n),s.size||(i._vtc=void 0))}function Oy(i){requestAnimationFrame(()=>{requestAnimationFrame(i)})}let R6=0;function Ly(i,n,s,r){const c=i._endId=++R6,u=()=>{c===i._endId&&r()};if(s)return setTimeout(u,s);const{type:f,timeout:g,propCount:p}=G2(i,n);if(!f)return r();const k=f+"end";let C=0;const x=()=>{i.removeEventListener(k,v),u()},v=M=>{M.target===i&&++C>=p&&x()};setTimeout(()=>{C<p&&x()},g+1),i.addEventListener(k,v)}function G2(i,n){const s=window.getComputedStyle(i),r=z=>(s[z]||"").split(", "),c=r(`${Ia}Delay`),u=r(`${Ia}Duration`),f=Ry(c,u),g=r(`${_d}Delay`),p=r(`${_d}Duration`),k=Ry(g,p);let C=null,x=0,v=0;n===Ia?f>0&&(C=Ia,x=f,v=u.length):n===_d?k>0&&(C=_d,x=k,v=p.length):(x=Math.max(f,k),C=x>0?f>k?Ia:_d:null,v=C?C===Ia?u.length:p.length:0);const M=C===Ia&&/\b(transform|all)(,|$)/.test(r(`${Ia}Property`).toString());return{type:C,timeout:x,propCount:v,hasTransform:M}}function Ry(i,n){for(;i.length<n.length;)i=i.concat(i);return Math.max(...n.map((s,r)=>zy(s)+zy(i[r])))}function zy(i){return Number(i.slice(0,-1).replace(",","."))*1e3}function Y2(){return document.body.offsetHeight}const K2=new WeakMap,Q2=new WeakMap,z6={name:"TransitionGroup",props:ni({},O6,{tag:String,moveClass:String}),setup(i,{slots:n}){const s=Ja(),r=tb();let c,u;return _f(()=>{if(!c.length)return;const f=i.moveClass||`${i.name||"v"}-move`;if(!H6(c[0].el,s.vnode.el,f))return;c.forEach(F6),c.forEach($6);const g=c.filter(V6);Y2(),g.forEach(p=>{const k=p.el,C=k.style;qr(k,f),C.transform=C.webkitTransform=C.transitionDuration="";const x=k._moveCb=v=>{v&&v.target!==k||(!v||/transform$/.test(v.propertyName))&&(k.removeEventListener("transitionend",x),k._moveCb=null,La(k,f))};k.addEventListener("transitionend",x)})}),()=>{const f=We(i),g=q2(f);let p=f.tag||ve;c=u,u=n.default?kf(n.default()):[];for(let k=0;k<u.length;k++){const C=u[k];C.key!=null&&Kl(C,Hc(C,g,r,s))}if(c)for(let k=0;k<c.length;k++){const C=c[k];Kl(C,Hc(C,g,r,s)),K2.set(C,C.el.getBoundingClientRect())}return He(p,null,u)}}},j6=z6;function F6(i){const n=i.el;n._moveCb&&n._moveCb(),n._enterCb&&n._enterCb()}function $6(i){Q2.set(i,i.el.getBoundingClientRect())}function V6(i){const n=K2.get(i),s=Q2.get(i),r=n.left-s.left,c=n.top-s.top;if(r||c){const u=i.el.style;return u.transform=u.webkitTransform=`translate(${r}px,${c}px)`,u.transitionDuration="0s",i}}function H6(i,n,s){const r=i.cloneNode();i._vtc&&i._vtc.forEach(f=>{f.split(/\s+/).forEach(g=>g&&r.classList.remove(g))}),s.split(/\s+/).forEach(f=>f&&r.classList.add(f)),r.style.display="none";const c=n.nodeType===1?n:n.parentNode;c.appendChild(r);const{hasTransform:u}=G2(r);return c.removeChild(r),u}const Ka=i=>{const n=i.props["onUpdate:modelValue"]||!1;return ye(n)?s=>Rc(n,s):n};function U6(i){i.target.composing=!0}function jy(i){const n=i.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const en={created(i,{modifiers:{lazy:n,trim:s,number:r}},c){i._assign=Ka(c);const u=r||c.props&&c.props.type==="number";Zr(i,n?"change":"input",f=>{if(f.target.composing)return;let g=i.value;s&&(g=g.trim()),u&&(g=na(g)),i._assign(g)}),s&&Zr(i,"change",()=>{i.value=i.value.trim()}),n||(Zr(i,"compositionstart",U6),Zr(i,"compositionend",jy),Zr(i,"change",jy))},mounted(i,{value:n}){i.value=n==null?"":n},beforeUpdate(i,{value:n,modifiers:{lazy:s,trim:r,number:c}},u){if(i._assign=Ka(u),i.composing||document.activeElement===i&&i.type!=="range"&&(s||r&&i.value.trim()===n||(c||i.type==="number")&&na(i.value)===n))return;const f=n==null?"":n;i.value!==f&&(i.value=f)}},xf={deep:!0,created(i,n,s){i._assign=Ka(s),Zr(i,"change",()=>{const r=i._modelValue,c=qc(i),u=i.checked,f=i._assign;if(ye(r)){const g=af(r,c),p=g!==-1;if(u&&!p)f(r.concat(c));else if(!u&&p){const k=[...r];k.splice(g,1),f(k)}}else if(ec(r)){const g=new Set(r);u?g.add(c):g.delete(c),f(g)}else f(Z2(i,u))})},mounted:Fy,beforeUpdate(i,n,s){i._assign=Ka(s),Fy(i,n,s)}};function Fy(i,{value:n,oldValue:s},r){i._modelValue=n,ye(n)?i.checked=af(n,r.props.value)>-1:ec(n)?i.checked=n.has(r.props.value):n!==s&&(i.checked=Wa(n,Z2(i,!0)))}const db={created(i,{value:n},s){i.checked=Wa(n,s.props.value),i._assign=Ka(s),Zr(i,"change",()=>{i._assign(qc(i))})},beforeUpdate(i,{value:n,oldValue:s},r){i._assign=Ka(r),n!==s&&(i.checked=Wa(n,r.props.value))}},Ji={deep:!0,created(i,{value:n,modifiers:{number:s}},r){const c=ec(n);Zr(i,"change",()=>{const u=Array.prototype.filter.call(i.options,f=>f.selected).map(f=>s?na(qc(f)):qc(f));i._assign(i.multiple?c?new Set(u):u:u[0])}),i._assign=Ka(r)},mounted(i,{value:n}){$y(i,n)},beforeUpdate(i,n,s){i._assign=Ka(s)},updated(i,{value:n}){$y(i,n)}};function $y(i,n){const s=i.multiple;if(!(s&&!ye(n)&&!ec(n))){for(let r=0,c=i.options.length;r<c;r++){const u=i.options[r],f=qc(u);if(s)ye(n)?u.selected=af(n,f)>-1:u.selected=n.has(f);else if(Wa(qc(u),n)){i.selectedIndex!==r&&(i.selectedIndex=r);return}}!s&&i.selectedIndex!==-1&&(i.selectedIndex=-1)}}function qc(i){return"_value"in i?i._value:i.value}function Z2(i,n){const s=n?"_trueValue":"_falseValue";return s in i?i[s]:n}const J2={created(i,n,s){bh(i,n,s,null,"created")},mounted(i,n,s){bh(i,n,s,null,"mounted")},beforeUpdate(i,n,s,r){bh(i,n,s,r,"beforeUpdate")},updated(i,n,s,r){bh(i,n,s,r,"updated")}};function X2(i,n){switch(i){case"SELECT":return Ji;case"TEXTAREA":return en;default:switch(n){case"checkbox":return xf;case"radio":return db;default:return en}}}function bh(i,n,s,r,c){const f=X2(i.tagName,s.props&&s.props.type)[c];f&&f(i,n,s,r)}function W6(){en.getSSRProps=({value:i})=>({value:i}),db.getSSRProps=({value:i},n)=>{if(n.props&&Wa(n.props.value,i))return{checked:!0}},xf.getSSRProps=({value:i},n)=>{if(ye(i)){if(n.props&&af(i,n.props.value)>-1)return{checked:!0}}else if(ec(i)){if(n.props&&i.has(n.props.value))return{checked:!0}}else if(i)return{checked:!0}},J2.getSSRProps=(i,n)=>{if(typeof n.type!="string")return;const s=X2(n.type.toUpperCase(),n.props&&n.props.type);if(s.getSSRProps)return s.getSSRProps(i,n)}}const q6=["ctrl","shift","alt","meta"],G6={stop:i=>i.stopPropagation(),prevent:i=>i.preventDefault(),self:i=>i.target!==i.currentTarget,ctrl:i=>!i.ctrlKey,shift:i=>!i.shiftKey,alt:i=>!i.altKey,meta:i=>!i.metaKey,left:i=>"button"in i&&i.button!==0,middle:i=>"button"in i&&i.button!==1,right:i=>"button"in i&&i.button!==2,exact:(i,n)=>q6.some(s=>i[`${s}Key`]&&!n.includes(s))},yr=(i,n)=>(s,...r)=>{for(let c=0;c<n.length;c++){const u=G6[n[c]];if(u&&u(s,n))return}return i(s,...r)},Y6={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},K6=(i,n)=>s=>{if(!("key"in s))return;const r=ds(s.key);if(n.some(c=>c===r||Y6[c]===r))return i(s)},tx={beforeMount(i,{value:n},{transition:s}){i._vod=i.style.display==="none"?"":i.style.display,s&&n?s.beforeEnter(i):vd(i,n)},mounted(i,{value:n},{transition:s}){s&&n&&s.enter(i)},updated(i,{value:n,oldValue:s},{transition:r}){!n!=!s&&(r?n?(r.beforeEnter(i),vd(i,!0),r.enter(i)):r.leave(i,()=>{vd(i,!1)}):vd(i,n))},beforeUnmount(i,{value:n}){vd(i,n)}};function vd(i,n){i.style.display=n?i._vod:"none"}function Q6(){tx.getSSRProps=({value:i})=>{if(!i)return{style:{display:"none"}}}}const ex=ni({patchProp:D6},m6);let Fd,Vy=!1;function nx(){return Fd||(Fd=A2(ex))}function ix(){return Fd=Vy?Fd:x2(ex),Vy=!0,Fd}const pm=(...i)=>{nx().render(...i)},ox=(...i)=>{ix().hydrate(...i)},sx=(...i)=>{const n=nx().createApp(...i),{mount:s}=n;return n.mount=r=>{const c=rx(r);if(!c)return;const u=n._component;!Fe(u)&&!u.render&&!u.template&&(u.template=c.innerHTML),c.innerHTML="";const f=s(c,!1,c instanceof SVGElement);return c instanceof Element&&(c.removeAttribute("v-cloak"),c.setAttribute("data-v-app","")),f},n},Z6=(...i)=>{const n=ix().createApp(...i),{mount:s}=n;return n.mount=r=>{const c=rx(r);if(c)return s(c,!0,c instanceof SVGElement)},n};function rx(i){return Jn(i)?document.querySelector(i):i}let Hy=!1;const J6=()=>{Hy||(Hy=!0,W6(),Q6())},X6=()=>{},tB=Object.freeze(Object.defineProperty({__proto__:null,compile:X6,EffectScope:$m,ReactiveEffect:gu,customRef:HI,effect:hI,effectScope:BA,getCurrentScope:lI,isProxy:zc,isReactive:Hl,isReadonly:Yl,isRef:Dn,isShallow:Kd,markRaw:Wm,onScopeDispose:cI,proxyRefs:Km,reactive:nc,readonly:Um,ref:ue,shallowReactive:GA,shallowReadonly:zI,shallowRef:Ym,stop:fI,toRaw:We,toRef:KA,toRefs:UI,triggerRef:FI,unref:rt,camelize:yo,capitalize:fu,normalizeClass:Jr,normalizeProps:Z3,normalizeStyle:du,toDisplayString:Qt,toHandlerKey:Od,BaseTransition:eb,Comment:Zi,Fragment:ve,KeepAlive:wP,Static:Wl,Suspense:lP,Teleport:UP,Text:Ql,callWithAsyncErrorHandling:Ro,callWithErrorHandling:Xr,cloneVNode:vr,compatUtils:g6,computed:ai,createBlock:hs,createCommentVNode:ne,createElementBlock:ht,createElementVNode:E,createHydrationRenderer:x2,createPropsRestProxy:a6,createRenderer:A2,createSlots:AP,createStaticVNode:P2,createTextVNode:gn,createVNode:He,defineAsyncComponent:bP,defineComponent:ed,defineEmits:e6,defineExpose:n6,defineProps:t6,get devtools(){return Bc},getCurrentInstance:Ja,getTransitionRawChildren:kf,guardReactiveProps:I2,h:Wc,handleError:ic,initCustomFormatter:c6,inject:gs,isMemoSame:V2,isRuntimeOnly:ZP,isVNode:Ga,mergeDefaults:r6,mergeProps:B2,nextTick:gf,onActivated:a2,onBeforeMount:nb,onBeforeUnmount:bu,onBeforeUpdate:d2,onDeactivated:l2,onErrorCaptured:g2,onMounted:Co,onRenderTracked:f2,onRenderTriggered:h2,onServerPrefetch:u2,onUnmounted:vf,onUpdated:_f,openBlock:at,popScopeId:eP,provide:Ld,pushScopeId:tP,queuePostFlushCb:Zm,registerRuntimeCompiler:QP,renderList:$e,renderSlot:em,resolveComponent:ps,resolveDirective:CP,resolveDynamicComponent:yP,resolveFilter:f6,resolveTransitionHooks:Hc,setBlockTracking:lm,setDevtoolsHook:t2,setTransitionHooks:Kl,ssrContextKey:F2,ssrUtils:h6,toHandlers:xP,transformVNodeArgs:WP,useAttrs:s6,useSSRContext:$2,useSlots:o6,useTransitionState:tb,version:H2,warn:YI,watch:Ls,watchEffect:fP,watchPostEffect:o2,watchSyncEffect:gP,withAsyncContext:l6,withCtx:pi,withDefaults:i6,withDirectives:Le,withMemo:d6,withScopeId:nP,Transition:cb,TransitionGroup:j6,VueElement:Af,createApp:sx,createSSRApp:Z6,defineCustomElement:U2,defineSSRCustomElement:I6,hydrate:ox,initDirectivesForSSR:J6,render:pm,useCssModule:B6,useCssVars:N6,vModelCheckbox:xf,vModelDynamic:J2,vModelRadio:db,vModelSelect:Ji,vModelText:en,vShow:tx,withKeys:K6,withModifiers:yr},Symbol.toStringTag,{value:"Module"}));const eB={__name:"App",setup(i){return(n,s)=>{const r=ps("router-view");return at(),hs(r)}}};function nB(){return ax().__VUE_DEVTOOLS_GLOBAL_HOOK__}function ax(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const iB=typeof Proxy=="function",oB="devtools-plugin:setup",sB="plugin:settings:set";let Tc,mm;function rB(){var i;return Tc!==void 0||(typeof window<"u"&&window.performance?(Tc=!0,mm=window.performance):typeof global<"u"&&((i=global.perf_hooks)===null||i===void 0?void 0:i.performance)?(Tc=!0,mm=global.perf_hooks.performance):Tc=!1),Tc}function aB(){return rB()?mm.now():Date.now()}class lB{constructor(n,s){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=n,this.hook=s;const r={};if(n.settings)for(const f in n.settings){const g=n.settings[f];r[f]=g.defaultValue}const c=`__vue-devtools-plugin-settings__${n.id}`;let u=Object.assign({},r);try{const f=localStorage.getItem(c),g=JSON.parse(f);Object.assign(u,g)}catch{}this.fallbacks={getSettings(){return u},setSettings(f){try{localStorage.setItem(c,JSON.stringify(f))}catch{}u=f},now(){return aB()}},s&&s.on(sB,(f,g)=>{f===this.plugin.id&&this.fallbacks.setSettings(g)}),this.proxiedOn=new Proxy({},{get:(f,g)=>this.target?this.target.on[g]:(...p)=>{this.onQueue.push({method:g,args:p})}}),this.proxiedTarget=new Proxy({},{get:(f,g)=>this.target?this.target[g]:g==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(g)?(...p)=>(this.targetQueue.push({method:g,args:p,resolve:()=>{}}),this.fallbacks[g](...p)):(...p)=>new Promise(k=>{this.targetQueue.push({method:g,args:p,resolve:k})})})}async setRealTarget(n){this.target=n;for(const s of this.onQueue)this.target.on[s.method](...s.args);for(const s of this.targetQueue)s.resolve(await this.target[s.method](...s.args))}}function cB(i,n){const s=i,r=ax(),c=nB(),u=iB&&s.enableEarlyProxy;if(c&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!u))c.emit(oB,i,n);else{const f=u?new lB(s,c):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:s,setupFn:n,proxy:f}),f&&n(f.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Nc=typeof window<"u";function dB(i){return i.__esModule||i[Symbol.toStringTag]==="Module"}const Sn=Object.assign;function Ip(i,n){const s={};for(const r in n){const c=n[r];s[r]=Rs(c)?c.map(i):i(c)}return s}const $d=()=>{},Rs=Array.isArray,uB=/\/$/,hB=i=>i.replace(uB,"");function Pp(i,n,s="/"){let r,c={},u="",f="";const g=n.indexOf("#");let p=n.indexOf("?");return g<p&&g>=0&&(p=-1),p>-1&&(r=n.slice(0,p),u=n.slice(p+1,g>-1?g:n.length),c=i(u)),g>-1&&(r=r||n.slice(0,g),f=n.slice(g,n.length)),r=mB(r!=null?r:n,s),{fullPath:r+(u&&"?")+u+f,path:r,query:c,hash:f}}function fB(i,n){const s=n.query?i(n.query):"";return n.path+(s&&"?")+s+(n.hash||"")}function Uy(i,n){return!n||!i.toLowerCase().startsWith(n.toLowerCase())?i:i.slice(n.length)||"/"}function gB(i,n,s){const r=n.matched.length-1,c=s.matched.length-1;return r>-1&&r===c&&Gc(n.matched[r],s.matched[c])&&lx(n.params,s.params)&&i(n.query)===i(s.query)&&n.hash===s.hash}function Gc(i,n){return(i.aliasOf||i)===(n.aliasOf||n)}function lx(i,n){if(Object.keys(i).length!==Object.keys(n).length)return!1;for(const s in i)if(!pB(i[s],n[s]))return!1;return!0}function pB(i,n){return Rs(i)?Wy(i,n):Rs(n)?Wy(n,i):i===n}function Wy(i,n){return Rs(n)?i.length===n.length&&i.every((s,r)=>s===n[r]):i.length===1&&i[0]===n}function mB(i,n){if(i.startsWith("/"))return i;if(!i)return n;const s=n.split("/"),r=i.split("/");let c=s.length-1,u,f;for(u=0;u<r.length;u++)if(f=r[u],f!==".")if(f==="..")c>1&&c--;else break;return s.slice(0,c).join("/")+"/"+r.slice(u-(u===r.length?1:0)).join("/")}var eu;(function(i){i.pop="pop",i.push="push"})(eu||(eu={}));var Vd;(function(i){i.back="back",i.forward="forward",i.unknown=""})(Vd||(Vd={}));function bB(i){if(!i)if(Nc){const n=document.querySelector("base");i=n&&n.getAttribute("href")||"/",i=i.replace(/^\w+:\/\/[^\/]+/,"")}else i="/";return i[0]!=="/"&&i[0]!=="#"&&(i="/"+i),hB(i)}const kB=/^[^#]+#/;function wB(i,n){return i.replace(kB,"#")+n}function _B(i,n){const s=document.documentElement.getBoundingClientRect(),r=i.getBoundingClientRect();return{behavior:n.behavior,left:r.left-s.left-(n.left||0),top:r.top-s.top-(n.top||0)}}const Ef=()=>({left:window.pageXOffset,top:window.pageYOffset});function vB(i){let n;if("el"in i){const s=i.el,r=typeof s=="string"&&s.startsWith("#"),c=typeof s=="string"?r?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!c)return;n=_B(c,i)}else n=i;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function qy(i,n){return(history.state?history.state.position-n:-1)+i}const bm=new Map;function yB(i,n){bm.set(i,n)}function CB(i){const n=bm.get(i);return bm.delete(i),n}let AB=()=>location.protocol+"//"+location.host;function cx(i,n){const{pathname:s,search:r,hash:c}=n,u=i.indexOf("#");if(u>-1){let g=c.includes(i.slice(u))?i.slice(u).length:1,p=c.slice(g);return p[0]!=="/"&&(p="/"+p),Uy(p,"")}return Uy(s,i)+r+c}function xB(i,n,s,r){let c=[],u=[],f=null;const g=({state:v})=>{const M=cx(i,location),z=s.value,H=n.value;let Z=0;if(v){if(s.value=M,n.value=v,f&&f===z){f=null;return}Z=H?v.position-H.position:0}else r(M);c.forEach(U=>{U(s.value,z,{delta:Z,type:eu.pop,direction:Z?Z>0?Vd.forward:Vd.back:Vd.unknown})})};function p(){f=s.value}function k(v){c.push(v);const M=()=>{const z=c.indexOf(v);z>-1&&c.splice(z,1)};return u.push(M),M}function C(){const{history:v}=window;!v.state||v.replaceState(Sn({},v.state,{scroll:Ef()}),"")}function x(){for(const v of u)v();u=[],window.removeEventListener("popstate",g),window.removeEventListener("beforeunload",C)}return window.addEventListener("popstate",g),window.addEventListener("beforeunload",C),{pauseListeners:p,listen:k,destroy:x}}function Gy(i,n,s,r=!1,c=!1){return{back:i,current:n,forward:s,replaced:r,position:window.history.length,scroll:c?Ef():null}}function EB(i){const{history:n,location:s}=window,r={value:cx(i,s)},c={value:n.state};c.value||u(r.value,{back:null,current:r.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function u(p,k,C){const x=i.indexOf("#"),v=x>-1?(s.host&&document.querySelector("base")?i:i.slice(x))+p:AB()+i+p;try{n[C?"replaceState":"pushState"](k,"",v),c.value=k}catch(M){console.error(M),s[C?"replace":"assign"](v)}}function f(p,k){const C=Sn({},n.state,Gy(c.value.back,p,c.value.forward,!0),k,{position:c.value.position});u(p,C,!0),r.value=p}function g(p,k){const C=Sn({},c.value,n.state,{forward:p,scroll:Ef()});u(C.current,C,!0);const x=Sn({},Gy(r.value,p,null),{position:C.position+1},k);u(p,x,!1),r.value=p}return{location:r,state:c,push:g,replace:f}}function SB(i){i=bB(i);const n=EB(i),s=xB(i,n.state,n.location,n.replace);function r(u,f=!0){f||s.pauseListeners(),history.go(u)}const c=Sn({location:"",base:i,go:r,createHref:wB.bind(null,i)},n,s);return Object.defineProperty(c,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(c,"state",{enumerable:!0,get:()=>n.state.value}),c}function TB(i){return typeof i=="string"||i&&typeof i=="object"}function dx(i){return typeof i=="string"||typeof i=="symbol"}const Pa={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ux=Symbol("");var Yy;(function(i){i[i.aborted=4]="aborted",i[i.cancelled=8]="cancelled",i[i.duplicated=16]="duplicated"})(Yy||(Yy={}));function Yc(i,n){return Sn(new Error,{type:i,[ux]:!0},n)}function Ur(i,n){return i instanceof Error&&ux in i&&(n==null||!!(i.type&n))}const Ky="[^/]+?",DB={sensitive:!1,strict:!1,start:!0,end:!0},MB=/[.+*?^${}()[\]/\\]/g;function IB(i,n){const s=Sn({},DB,n),r=[];let c=s.start?"^":"";const u=[];for(const k of i){const C=k.length?[]:[90];s.strict&&!k.length&&(c+="/");for(let x=0;x<k.length;x++){const v=k[x];let M=40+(s.sensitive?.25:0);if(v.type===0)x||(c+="/"),c+=v.value.replace(MB,"\\$&"),M+=40;else if(v.type===1){const{value:z,repeatable:H,optional:Z,regexp:U}=v;u.push({name:z,repeatable:H,optional:Z});const W=U||Ky;if(W!==Ky){M+=10;try{new RegExp(`(${W})`)}catch(dt){throw new Error(`Invalid custom RegExp for param "${z}" (${W}): `+dt.message)}}let tt=H?`((?:${W})(?:/(?:${W}))*)`:`(${W})`;x||(tt=Z&&k.length<2?`(?:/${tt})`:"/"+tt),Z&&(tt+="?"),c+=tt,M+=20,Z&&(M+=-8),H&&(M+=-20),W===".*"&&(M+=-50)}C.push(M)}r.push(C)}if(s.strict&&s.end){const k=r.length-1;r[k][r[k].length-1]+=.7000000000000001}s.strict||(c+="/?"),s.end?c+="$":s.strict&&(c+="(?:/|$)");const f=new RegExp(c,s.sensitive?"":"i");function g(k){const C=k.match(f),x={};if(!C)return null;for(let v=1;v<C.length;v++){const M=C[v]||"",z=u[v-1];x[z.name]=M&&z.repeatable?M.split("/"):M}return x}function p(k){let C="",x=!1;for(const v of i){(!x||!C.endsWith("/"))&&(C+="/"),x=!1;for(const M of v)if(M.type===0)C+=M.value;else if(M.type===1){const{value:z,repeatable:H,optional:Z}=M,U=z in k?k[z]:"";if(Rs(U)&&!H)throw new Error(`Provided param "${z}" is an array but it is not repeatable (* or + modifiers)`);const W=Rs(U)?U.join("/"):U;if(!W)if(Z)v.length<2&&(C.endsWith("/")?C=C.slice(0,-1):x=!0);else throw new Error(`Missing required param "${z}"`);C+=W}}return C||"/"}return{re:f,score:r,keys:u,parse:g,stringify:p}}function PB(i,n){let s=0;for(;s<i.length&&s<n.length;){const r=n[s]-i[s];if(r)return r;s++}return i.length<n.length?i.length===1&&i[0]===40+40?-1:1:i.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function BB(i,n){let s=0;const r=i.score,c=n.score;for(;s<r.length&&s<c.length;){const u=PB(r[s],c[s]);if(u)return u;s++}if(Math.abs(c.length-r.length)===1){if(Qy(r))return 1;if(Qy(c))return-1}return c.length-r.length}function Qy(i){const n=i[i.length-1];return i.length>0&&n[n.length-1]<0}const NB={type:0,value:""},OB=/[a-zA-Z0-9_]/;function LB(i){if(!i)return[[]];if(i==="/")return[[NB]];if(!i.startsWith("/"))throw new Error(`Invalid path "${i}"`);function n(M){throw new Error(`ERR (${s})/"${k}": ${M}`)}let s=0,r=s;const c=[];let u;function f(){u&&c.push(u),u=[]}let g=0,p,k="",C="";function x(){!k||(s===0?u.push({type:0,value:k}):s===1||s===2||s===3?(u.length>1&&(p==="*"||p==="+")&&n(`A repeatable param (${k}) must be alone in its segment. eg: '/:ids+.`),u.push({type:1,value:k,regexp:C,repeatable:p==="*"||p==="+",optional:p==="*"||p==="?"})):n("Invalid state to consume buffer"),k="")}function v(){k+=p}for(;g<i.length;){if(p=i[g++],p==="\\"&&s!==2){r=s,s=4;continue}switch(s){case 0:p==="/"?(k&&x(),f()):p===":"?(x(),s=1):v();break;case 4:v(),s=r;break;case 1:p==="("?s=2:OB.test(p)?v():(x(),s=0,p!=="*"&&p!=="?"&&p!=="+"&&g--);break;case 2:p===")"?C[C.length-1]=="\\"?C=C.slice(0,-1)+p:s=3:C+=p;break;case 3:x(),s=0,p!=="*"&&p!=="?"&&p!=="+"&&g--,C="";break;default:n("Unknown state");break}}return s===2&&n(`Unfinished custom RegExp for param "${k}"`),x(),f(),c}function RB(i,n,s){const r=IB(LB(i.path),s),c=Sn(r,{record:i,parent:n,children:[],alias:[]});return n&&!c.record.aliasOf==!n.record.aliasOf&&n.children.push(c),c}function zB(i,n){const s=[],r=new Map;n=Xy({strict:!1,end:!0,sensitive:!1},n);function c(C){return r.get(C)}function u(C,x,v){const M=!v,z=jB(C);z.aliasOf=v&&v.record;const H=Xy(n,C),Z=[z];if("alias"in C){const tt=typeof C.alias=="string"?[C.alias]:C.alias;for(const dt of tt)Z.push(Sn({},z,{components:v?v.record.components:z.components,path:dt,aliasOf:v?v.record:z}))}let U,W;for(const tt of Z){const{path:dt}=tt;if(x&&dt[0]!=="/"){const st=x.record.path,I=st[st.length-1]==="/"?"":"/";tt.path=x.record.path+(dt&&I+dt)}if(U=RB(tt,x,H),v?v.alias.push(U):(W=W||U,W!==U&&W.alias.push(U),M&&C.name&&!Jy(U)&&f(C.name)),z.children){const st=z.children;for(let I=0;I<st.length;I++)u(st[I],U,v&&v.children[I])}v=v||U,(U.record.components&&Object.keys(U.record.components).length||U.record.name||U.record.redirect)&&p(U)}return W?()=>{f(W)}:$d}function f(C){if(dx(C)){const x=r.get(C);x&&(r.delete(C),s.splice(s.indexOf(x),1),x.children.forEach(f),x.alias.forEach(f))}else{const x=s.indexOf(C);x>-1&&(s.splice(x,1),C.record.name&&r.delete(C.record.name),C.children.forEach(f),C.alias.forEach(f))}}function g(){return s}function p(C){let x=0;for(;x<s.length&&BB(C,s[x])>=0&&(C.record.path!==s[x].record.path||!hx(C,s[x]));)x++;s.splice(x,0,C),C.record.name&&!Jy(C)&&r.set(C.record.name,C)}function k(C,x){let v,M={},z,H;if("name"in C&&C.name){if(v=r.get(C.name),!v)throw Yc(1,{location:C});H=v.record.name,M=Sn(Zy(x.params,v.keys.filter(W=>!W.optional).map(W=>W.name)),C.params&&Zy(C.params,v.keys.map(W=>W.name))),z=v.stringify(M)}else if("path"in C)z=C.path,v=s.find(W=>W.re.test(z)),v&&(M=v.parse(z),H=v.record.name);else{if(v=x.name?r.get(x.name):s.find(W=>W.re.test(x.path)),!v)throw Yc(1,{location:C,currentLocation:x});H=v.record.name,M=Sn({},x.params,C.params),z=v.stringify(M)}const Z=[];let U=v;for(;U;)Z.unshift(U.record),U=U.parent;return{name:H,path:z,params:M,matched:Z,meta:$B(Z)}}return i.forEach(C=>u(C)),{addRoute:u,resolve:k,removeRoute:f,getRoutes:g,getRecordMatcher:c}}function Zy(i,n){const s={};for(const r of n)r in i&&(s[r]=i[r]);return s}function jB(i){return{path:i.path,redirect:i.redirect,name:i.name,meta:i.meta||{},aliasOf:void 0,beforeEnter:i.beforeEnter,props:FB(i),children:i.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in i?i.components||null:i.component&&{default:i.component}}}function FB(i){const n={},s=i.props||!1;if("component"in i)n.default=s;else for(const r in i.components)n[r]=typeof s=="boolean"?s:s[r];return n}function Jy(i){for(;i;){if(i.record.aliasOf)return!0;i=i.parent}return!1}function $B(i){return i.reduce((n,s)=>Sn(n,s.meta),{})}function Xy(i,n){const s={};for(const r in i)s[r]=r in n?n[r]:i[r];return s}function hx(i,n){return n.children.some(s=>s===i||hx(i,s))}const fx=/#/g,VB=/&/g,HB=/\//g,UB=/=/g,WB=/\?/g,gx=/\+/g,qB=/%5B/g,GB=/%5D/g,px=/%5E/g,YB=/%60/g,mx=/%7B/g,KB=/%7C/g,bx=/%7D/g,QB=/%20/g;function ub(i){return encodeURI(""+i).replace(KB,"|").replace(qB,"[").replace(GB,"]")}function ZB(i){return ub(i).replace(mx,"{").replace(bx,"}").replace(px,"^")}function km(i){return ub(i).replace(gx,"%2B").replace(QB,"+").replace(fx,"%23").replace(VB,"%26").replace(YB,"`").replace(mx,"{").replace(bx,"}").replace(px,"^")}function JB(i){return km(i).replace(UB,"%3D")}function XB(i){return ub(i).replace(fx,"%23").replace(WB,"%3F")}function tN(i){return i==null?"":XB(i).replace(HB,"%2F")}function qh(i){try{return decodeURIComponent(""+i)}catch{}return""+i}function eN(i){const n={};if(i===""||i==="?")return n;const r=(i[0]==="?"?i.slice(1):i).split("&");for(let c=0;c<r.length;++c){const u=r[c].replace(gx," "),f=u.indexOf("="),g=qh(f<0?u:u.slice(0,f)),p=f<0?null:qh(u.slice(f+1));if(g in n){let k=n[g];Rs(k)||(k=n[g]=[k]),k.push(p)}else n[g]=p}return n}function tC(i){let n="";for(let s in i){const r=i[s];if(s=JB(s),r==null){r!==void 0&&(n+=(n.length?"&":"")+s);continue}(Rs(r)?r.map(u=>u&&km(u)):[r&&km(r)]).forEach(u=>{u!==void 0&&(n+=(n.length?"&":"")+s,u!=null&&(n+="="+u))})}return n}function nN(i){const n={};for(const s in i){const r=i[s];r!==void 0&&(n[s]=Rs(r)?r.map(c=>c==null?null:""+c):r==null?r:""+r)}return n}const iN=Symbol(""),eC=Symbol(""),Sf=Symbol(""),hb=Symbol(""),wm=Symbol("");function yd(){let i=[];function n(r){return i.push(r),()=>{const c=i.indexOf(r);c>-1&&i.splice(c,1)}}function s(){i=[]}return{add:n,list:()=>i,reset:s}}function za(i,n,s,r,c){const u=r&&(r.enterCallbacks[c]=r.enterCallbacks[c]||[]);return()=>new Promise((f,g)=>{const p=x=>{x===!1?g(Yc(4,{from:s,to:n})):x instanceof Error?g(x):TB(x)?g(Yc(2,{from:n,to:x})):(u&&r.enterCallbacks[c]===u&&typeof x=="function"&&u.push(x),f())},k=i.call(r&&r.instances[c],n,s,p);let C=Promise.resolve(k);i.length<3&&(C=C.then(p)),C.catch(x=>g(x))})}function Bp(i,n,s,r){const c=[];for(const u of i)for(const f in u.components){let g=u.components[f];if(!(n!=="beforeRouteEnter"&&!u.instances[f]))if(oN(g)){const k=(g.__vccOpts||g)[n];k&&c.push(za(k,s,r,u,f))}else{let p=g();c.push(()=>p.then(k=>{if(!k)return Promise.reject(new Error(`Couldn't resolve component "${f}" at "${u.path}"`));const C=dB(k)?k.default:k;u.components[f]=C;const v=(C.__vccOpts||C)[n];return v&&za(v,s,r,u,f)()}))}}return c}function oN(i){return typeof i=="object"||"displayName"in i||"props"in i||"__vccOpts"in i}function nC(i){const n=gs(Sf),s=gs(hb),r=ai(()=>n.resolve(rt(i.to))),c=ai(()=>{const{matched:p}=r.value,{length:k}=p,C=p[k-1],x=s.matched;if(!C||!x.length)return-1;const v=x.findIndex(Gc.bind(null,C));if(v>-1)return v;const M=iC(p[k-2]);return k>1&&iC(C)===M&&x[x.length-1].path!==M?x.findIndex(Gc.bind(null,p[k-2])):v}),u=ai(()=>c.value>-1&&lN(s.params,r.value.params)),f=ai(()=>c.value>-1&&c.value===s.matched.length-1&&lx(s.params,r.value.params));function g(p={}){return aN(p)?n[rt(i.replace)?"replace":"push"](rt(i.to)).catch($d):Promise.resolve()}return{route:r,href:ai(()=>r.value.href),isActive:u,isExactActive:f,navigate:g}}const sN=ed({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:nC,setup(i,{slots:n}){const s=nc(nC(i)),{options:r}=gs(Sf),c=ai(()=>({[oC(i.activeClass,r.linkActiveClass,"router-link-active")]:s.isActive,[oC(i.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const u=n.default&&n.default(s);return i.custom?u:Wc("a",{"aria-current":s.isExactActive?i.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:c.value},u)}}}),rN=sN;function aN(i){if(!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&!i.defaultPrevented&&!(i.button!==void 0&&i.button!==0)){if(i.currentTarget&&i.currentTarget.getAttribute){const n=i.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return i.preventDefault&&i.preventDefault(),!0}}function lN(i,n){for(const s in n){const r=n[s],c=i[s];if(typeof r=="string"){if(r!==c)return!1}else if(!Rs(c)||c.length!==r.length||r.some((u,f)=>u!==c[f]))return!1}return!0}function iC(i){return i?i.aliasOf?i.aliasOf.path:i.path:""}const oC=(i,n,s)=>i!=null?i:n!=null?n:s,cN=ed({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(i,{attrs:n,slots:s}){const r=gs(wm),c=ai(()=>i.route||r.value),u=gs(eC,0),f=ai(()=>{let k=rt(u);const{matched:C}=c.value;let x;for(;(x=C[k])&&!x.components;)k++;return k}),g=ai(()=>c.value.matched[f.value]);Ld(eC,ai(()=>f.value+1)),Ld(iN,g),Ld(wm,c);const p=ue();return Ls(()=>[p.value,g.value,i.name],([k,C,x],[v,M,z])=>{C&&(C.instances[x]=k,M&&M!==C&&k&&k===v&&(C.leaveGuards.size||(C.leaveGuards=M.leaveGuards),C.updateGuards.size||(C.updateGuards=M.updateGuards))),k&&C&&(!M||!Gc(C,M)||!v)&&(C.enterCallbacks[x]||[]).forEach(H=>H(k))},{flush:"post"}),()=>{const k=c.value,C=i.name,x=g.value,v=x&&x.components[C];if(!v)return sC(s.default,{Component:v,route:k});const M=x.props[C],z=M?M===!0?k.params:typeof M=="function"?M(k):M:null,Z=Wc(v,Sn({},z,n,{onVnodeUnmounted:U=>{U.component.isUnmounted&&(x.instances[C]=null)},ref:p}));return sC(s.default,{Component:Z,route:k})||Z}}});function sC(i,n){if(!i)return null;const s=i(n);return s.length===1?s[0]:s}const dN=cN;function uN(i){const n=zB(i.routes,i),s=i.parseQuery||eN,r=i.stringifyQuery||tC,c=i.history,u=yd(),f=yd(),g=yd(),p=Ym(Pa);let k=Pa;Nc&&i.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const C=Ip.bind(null,nt=>""+nt),x=Ip.bind(null,tN),v=Ip.bind(null,qh);function M(nt,bt){let St,Yt;return dx(nt)?(St=n.getRecordMatcher(nt),Yt=bt):Yt=nt,n.addRoute(Yt,St)}function z(nt){const bt=n.getRecordMatcher(nt);bt&&n.removeRoute(bt)}function H(){return n.getRoutes().map(nt=>nt.record)}function Z(nt){return!!n.getRecordMatcher(nt)}function U(nt,bt){if(bt=Sn({},bt||p.value),typeof nt=="string"){const J=Pp(s,nt,bt.path),ut=n.resolve({path:J.path},bt),xt=c.createHref(J.fullPath);return Sn(J,ut,{params:v(ut.params),hash:qh(J.hash),redirectedFrom:void 0,href:xt})}let St;if("path"in nt)St=Sn({},nt,{path:Pp(s,nt.path,bt.path).path});else{const J=Sn({},nt.params);for(const ut in J)J[ut]==null&&delete J[ut];St=Sn({},nt,{params:x(nt.params)}),bt.params=x(bt.params)}const Yt=n.resolve(St,bt),de=nt.hash||"";Yt.params=C(v(Yt.params));const ze=fB(r,Sn({},nt,{hash:ZB(de),path:Yt.path})),xe=c.createHref(ze);return Sn({fullPath:ze,hash:de,query:r===tC?nN(nt.query):nt.query||{}},Yt,{redirectedFrom:void 0,href:xe})}function W(nt){return typeof nt=="string"?Pp(s,nt,p.value.path):Sn({},nt)}function tt(nt,bt){if(k!==nt)return Yc(8,{from:bt,to:nt})}function dt(nt){return mt(nt)}function st(nt){return dt(Sn(W(nt),{replace:!0}))}function I(nt){const bt=nt.matched[nt.matched.length-1];if(bt&&bt.redirect){const{redirect:St}=bt;let Yt=typeof St=="function"?St(nt):St;return typeof Yt=="string"&&(Yt=Yt.includes("?")||Yt.includes("#")?Yt=W(Yt):{path:Yt},Yt.params={}),Sn({query:nt.query,hash:nt.hash,params:"path"in Yt?{}:nt.params},Yt)}}function mt(nt,bt){const St=k=U(nt),Yt=p.value,de=nt.state,ze=nt.force,xe=nt.replace===!0,J=I(St);if(J)return mt(Sn(W(J),{state:typeof J=="object"?Sn({},de,J.state):de,force:ze,replace:xe}),bt||St);const ut=St;ut.redirectedFrom=bt;let xt;return!ze&&gB(r,Yt,St)&&(xt=Yc(16,{to:ut,from:Yt}),pn(Yt,Yt,!0,!1)),(xt?Promise.resolve(xt):_t(ut,Yt)).catch(Dt=>Ur(Dt)?Ur(Dt,2)?Dt:hn(Dt):Wt(Dt,ut,Yt)).then(Dt=>{if(Dt){if(Ur(Dt,2))return mt(Sn({replace:xe},W(Dt.to),{state:typeof Dt.to=="object"?Sn({},de,Dt.to.state):de,force:ze}),bt||ut)}else Dt=Lt(ut,Yt,!0,xe,de);return Et(ut,Yt,Dt),Dt})}function pt(nt,bt){const St=tt(nt,bt);return St?Promise.reject(St):Promise.resolve()}function _t(nt,bt){let St;const[Yt,de,ze]=hN(nt,bt);St=Bp(Yt.reverse(),"beforeRouteLeave",nt,bt);for(const J of Yt)J.leaveGuards.forEach(ut=>{St.push(za(ut,nt,bt))});const xe=pt.bind(null,nt,bt);return St.push(xe),Dc(St).then(()=>{St=[];for(const J of u.list())St.push(za(J,nt,bt));return St.push(xe),Dc(St)}).then(()=>{St=Bp(de,"beforeRouteUpdate",nt,bt);for(const J of de)J.updateGuards.forEach(ut=>{St.push(za(ut,nt,bt))});return St.push(xe),Dc(St)}).then(()=>{St=[];for(const J of nt.matched)if(J.beforeEnter&&!bt.matched.includes(J))if(Rs(J.beforeEnter))for(const ut of J.beforeEnter)St.push(za(ut,nt,bt));else St.push(za(J.beforeEnter,nt,bt));return St.push(xe),Dc(St)}).then(()=>(nt.matched.forEach(J=>J.enterCallbacks={}),St=Bp(ze,"beforeRouteEnter",nt,bt),St.push(xe),Dc(St))).then(()=>{St=[];for(const J of f.list())St.push(za(J,nt,bt));return St.push(xe),Dc(St)}).catch(J=>Ur(J,8)?J:Promise.reject(J))}function Et(nt,bt,St){for(const Yt of g.list())Yt(nt,bt,St)}function Lt(nt,bt,St,Yt,de){const ze=tt(nt,bt);if(ze)return ze;const xe=bt===Pa,J=Nc?history.state:{};St&&(Yt||xe?c.replace(nt.fullPath,Sn({scroll:xe&&J&&J.scroll},de)):c.push(nt.fullPath,de)),p.value=nt,pn(nt,bt,St,xe),hn()}let X;function Nt(){X||(X=c.listen((nt,bt,St)=>{if(!re.listening)return;const Yt=U(nt),de=I(Yt);if(de){mt(Sn(de,{replace:!0}),Yt).catch($d);return}k=Yt;const ze=p.value;Nc&&yB(qy(ze.fullPath,St.delta),Ef()),_t(Yt,ze).catch(xe=>Ur(xe,12)?xe:Ur(xe,2)?(mt(xe.to,Yt).then(J=>{Ur(J,20)&&!St.delta&&St.type===eu.pop&&c.go(-1,!1)}).catch($d),Promise.reject()):(St.delta&&c.go(-St.delta,!1),Wt(xe,Yt,ze))).then(xe=>{xe=xe||Lt(Yt,ze,!1),xe&&(St.delta&&!Ur(xe,8)?c.go(-St.delta,!1):St.type===eu.pop&&Ur(xe,20)&&c.go(-1,!1)),Et(Yt,ze,xe)}).catch($d)}))}let Bt=yd(),Xt=yd(),te;function Wt(nt,bt,St){hn(nt);const Yt=Xt.list();return Yt.length?Yt.forEach(de=>de(nt,bt,St)):console.error(nt),Promise.reject(nt)}function Ce(){return te&&p.value!==Pa?Promise.resolve():new Promise((nt,bt)=>{Bt.add([nt,bt])})}function hn(nt){return te||(te=!nt,Nt(),Bt.list().forEach(([bt,St])=>nt?St(nt):bt()),Bt.reset()),nt}function pn(nt,bt,St,Yt){const{scrollBehavior:de}=i;if(!Nc||!de)return Promise.resolve();const ze=!St&&CB(qy(nt.fullPath,0))||(Yt||!St)&&history.state&&history.state.scroll||null;return gf().then(()=>de(nt,bt,ze)).then(xe=>xe&&vB(xe)).catch(xe=>Wt(xe,nt,bt))}const Re=nt=>c.go(nt);let Je;const sn=new Set,re={currentRoute:p,listening:!0,addRoute:M,removeRoute:z,hasRoute:Z,getRoutes:H,resolve:U,options:i,push:dt,replace:st,go:Re,back:()=>Re(-1),forward:()=>Re(1),beforeEach:u.add,beforeResolve:f.add,afterEach:g.add,onError:Xt.add,isReady:Ce,install(nt){const bt=this;nt.component("RouterLink",rN),nt.component("RouterView",dN),nt.config.globalProperties.$router=bt,Object.defineProperty(nt.config.globalProperties,"$route",{enumerable:!0,get:()=>rt(p)}),Nc&&!Je&&p.value===Pa&&(Je=!0,dt(c.location).catch(de=>{}));const St={};for(const de in Pa)St[de]=ai(()=>p.value[de]);nt.provide(Sf,bt),nt.provide(hb,nc(St)),nt.provide(wm,p);const Yt=nt.unmount;sn.add(nt),nt.unmount=function(){sn.delete(nt),sn.size<1&&(k=Pa,X&&X(),X=null,p.value=Pa,Je=!1,te=!1),Yt()}}};return re}function Dc(i){return i.reduce((n,s)=>n.then(()=>s()),Promise.resolve())}function hN(i,n){const s=[],r=[],c=[],u=Math.max(n.matched.length,i.matched.length);for(let f=0;f<u;f++){const g=n.matched[f];g&&(i.matched.find(k=>Gc(k,g))?r.push(g):s.push(g));const p=i.matched[f];p&&(n.matched.find(k=>Gc(k,p))||c.push(p))}return[s,r,c]}function _i(){return gs(Sf)}function Xa(){return gs(hb)}const fb=(i,n)=>{const s=i.__vccOpts||i;for(const[r,c]of n)s[r]=c;return s},fN={},gN={id:"header",class:"shadow"},pN={class:"mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8"},mN={id:"container",class:"mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"},bN={class:"px-4 py-6 sm:px-0 h-full"};function kN(i,n){return at(),ht("div",null,[E("header",gN,[E("div",pN,[em(i.$slots,"header")])]),E("main",null,[E("div",mN,[E("div",bN,[em(i.$slots,"default")])])])])}const gb=fb(fN,[["render",kN]]);const wN={class:"flex flex-col items-center py-4 px-6"},_N=["src"],vN={class:"flex"},yN=E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6"},[E("path",{"fill-rule":"evenodd",d:"M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z","clip-rule":"evenodd"})],-1),CN={class:"ml-3"},AN={class:"my-4"},Oh={__name:"GamesList",props:{game:Object},setup(i){return(n,s)=>{const r=ps("router-link");return at(),ht("div",wN,[E("img",{src:"http://localhost:8000/storage/images/games/"+i.game.thumb_image,alt:"",class:"w-40 h-40 object-cover rounded-xl"},null,8,_N),E("h4",null,Qt(i.game.tengame),1),E("span",vN,[yN,E("h5",CN,Qt(i.game.soluotchoi),1)]),E("div",AN,[He(r,{id:"choigame",to:{name:"GameView",params:{slug:i.game.slug}},class:"py-2 px-4 rounded text-white"},{default:pi(()=>[gn("Ch\u01A1i ngay")]),_:1},8,["to"])])])}}};/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var xN="store";function nd(i,n){Object.keys(i).forEach(function(s){return n(i[s],s)})}function EN(i){return i!==null&&typeof i=="object"}function SN(i){return i&&typeof i.then=="function"}function TN(i,n){return function(){return i(n)}}function kx(i,n,s){return n.indexOf(i)<0&&(s&&s.prepend?n.unshift(i):n.push(i)),function(){var r=n.indexOf(i);r>-1&&n.splice(r,1)}}function wx(i,n){i._actions=Object.create(null),i._mutations=Object.create(null),i._wrappedGetters=Object.create(null),i._modulesNamespaceMap=Object.create(null);var s=i.state;Tf(i,s,[],i._modules.root,!0),pb(i,s,n)}function pb(i,n,s){var r=i._state,c=i._scope;i.getters={},i._makeLocalGettersCache=Object.create(null);var u=i._wrappedGetters,f={},g={},p=BA(!0);p.run(function(){nd(u,function(k,C){f[C]=TN(k,i),g[C]=ai(function(){return f[C]()}),Object.defineProperty(i.getters,C,{get:function(){return g[C].value},enumerable:!0})})}),i._state=nc({data:n}),i._scope=p,i.strict&&BN(i),r&&s&&i._withCommit(function(){r.data=null}),c&&c.stop()}function Tf(i,n,s,r,c){var u=!s.length,f=i._modules.getNamespace(s);if(r.namespaced&&(i._modulesNamespaceMap[f],i._modulesNamespaceMap[f]=r),!u&&!c){var g=mb(n,s.slice(0,-1)),p=s[s.length-1];i._withCommit(function(){g[p]=r.state})}var k=r.context=DN(i,f,s);r.forEachMutation(function(C,x){var v=f+x;MN(i,v,C,k)}),r.forEachAction(function(C,x){var v=C.root?x:f+x,M=C.handler||C;IN(i,v,M,k)}),r.forEachGetter(function(C,x){var v=f+x;PN(i,v,C,k)}),r.forEachChild(function(C,x){Tf(i,n,s.concat(x),C,c)})}function DN(i,n,s){var r=n==="",c={dispatch:r?i.dispatch:function(u,f,g){var p=Gh(u,f,g),k=p.payload,C=p.options,x=p.type;return(!C||!C.root)&&(x=n+x),i.dispatch(x,k)},commit:r?i.commit:function(u,f,g){var p=Gh(u,f,g),k=p.payload,C=p.options,x=p.type;(!C||!C.root)&&(x=n+x),i.commit(x,k,C)}};return Object.defineProperties(c,{getters:{get:r?function(){return i.getters}:function(){return _x(i,n)}},state:{get:function(){return mb(i.state,s)}}}),c}function _x(i,n){if(!i._makeLocalGettersCache[n]){var s={},r=n.length;Object.keys(i.getters).forEach(function(c){if(c.slice(0,r)===n){var u=c.slice(r);Object.defineProperty(s,u,{get:function(){return i.getters[c]},enumerable:!0})}}),i._makeLocalGettersCache[n]=s}return i._makeLocalGettersCache[n]}function MN(i,n,s,r){var c=i._mutations[n]||(i._mutations[n]=[]);c.push(function(f){s.call(i,r.state,f)})}function IN(i,n,s,r){var c=i._actions[n]||(i._actions[n]=[]);c.push(function(f){var g=s.call(i,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:i.getters,rootState:i.state},f);return SN(g)||(g=Promise.resolve(g)),i._devtoolHook?g.catch(function(p){throw i._devtoolHook.emit("vuex:error",p),p}):g})}function PN(i,n,s,r){i._wrappedGetters[n]||(i._wrappedGetters[n]=function(u){return s(r.state,r.getters,u.state,u.getters)})}function BN(i){Ls(function(){return i._state.data},function(){},{deep:!0,flush:"sync"})}function mb(i,n){return n.reduce(function(s,r){return s[r]},i)}function Gh(i,n,s){return EN(i)&&i.type&&(s=n,n=i,i=i.type),{type:i,payload:n,options:s}}var NN="vuex bindings",rC="vuex:mutations",Np="vuex:actions",Mc="vuex",ON=0;function LN(i,n){cB({id:"org.vuejs.vuex",app:i,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[NN]},function(s){s.addTimelineLayer({id:rC,label:"Vuex Mutations",color:aC}),s.addTimelineLayer({id:Np,label:"Vuex Actions",color:aC}),s.addInspector({id:Mc,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),s.on.getInspectorTree(function(r){if(r.app===i&&r.inspectorId===Mc)if(r.filter){var c=[];Ax(c,n._modules.root,r.filter,""),r.rootNodes=c}else r.rootNodes=[Cx(n._modules.root,"")]}),s.on.getInspectorState(function(r){if(r.app===i&&r.inspectorId===Mc){var c=r.nodeId;_x(n,c),r.state=jN($N(n._modules,c),c==="root"?n.getters:n._makeLocalGettersCache,c)}}),s.on.editInspectorState(function(r){if(r.app===i&&r.inspectorId===Mc){var c=r.nodeId,u=r.path;c!=="root"&&(u=c.split("/").filter(Boolean).concat(u)),n._withCommit(function(){r.set(n._state.data,u,r.state.value)})}}),n.subscribe(function(r,c){var u={};r.payload&&(u.payload=r.payload),u.state=c,s.notifyComponentUpdate(),s.sendInspectorTree(Mc),s.sendInspectorState(Mc),s.addTimelineEvent({layerId:rC,event:{time:Date.now(),title:r.type,data:u}})}),n.subscribeAction({before:function(r,c){var u={};r.payload&&(u.payload=r.payload),r._id=ON++,r._time=Date.now(),u.state=c,s.addTimelineEvent({layerId:Np,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:u}})},after:function(r,c){var u={},f=Date.now()-r._time;u.duration={_custom:{type:"duration",display:f+"ms",tooltip:"Action duration",value:f}},r.payload&&(u.payload=r.payload),u.state=c,s.addTimelineEvent({layerId:Np,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:u}})}})})}var aC=8702998,RN=6710886,zN=16777215,vx={label:"namespaced",textColor:zN,backgroundColor:RN};function yx(i){return i&&i!=="root"?i.split("/").slice(-2,-1)[0]:"Root"}function Cx(i,n){return{id:n||"root",label:yx(n),tags:i.namespaced?[vx]:[],children:Object.keys(i._children).map(function(s){return Cx(i._children[s],n+s+"/")})}}function Ax(i,n,s,r){r.includes(s)&&i.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:n.namespaced?[vx]:[]}),Object.keys(n._children).forEach(function(c){Ax(i,n._children[c],s,r+c+"/")})}function jN(i,n,s){n=s==="root"?n:n[s];var r=Object.keys(n),c={state:Object.keys(i.state).map(function(f){return{key:f,editable:!0,value:i.state[f]}})};if(r.length){var u=FN(n);c.getters=Object.keys(u).map(function(f){return{key:f.endsWith("/")?yx(f):f,editable:!1,value:_m(function(){return u[f]})}})}return c}function FN(i){var n={};return Object.keys(i).forEach(function(s){var r=s.split("/");if(r.length>1){var c=n,u=r.pop();r.forEach(function(f){c[f]||(c[f]={_custom:{value:{},display:f,tooltip:"Module",abstract:!0}}),c=c[f]._custom.value}),c[u]=_m(function(){return i[s]})}else n[s]=_m(function(){return i[s]})}),n}function $N(i,n){var s=n.split("/").filter(function(r){return r});return s.reduce(function(r,c,u){var f=r[c];if(!f)throw new Error('Missing module "'+c+'" for path "'+n+'".');return u===s.length-1?f:f._children},n==="root"?i:i.root._children)}function _m(i){try{return i()}catch(n){return n}}var zs=function(n,s){this.runtime=s,this._children=Object.create(null),this._rawModule=n;var r=n.state;this.state=(typeof r=="function"?r():r)||{}},xx={namespaced:{configurable:!0}};xx.namespaced.get=function(){return!!this._rawModule.namespaced};zs.prototype.addChild=function(n,s){this._children[n]=s};zs.prototype.removeChild=function(n){delete this._children[n]};zs.prototype.getChild=function(n){return this._children[n]};zs.prototype.hasChild=function(n){return n in this._children};zs.prototype.update=function(n){this._rawModule.namespaced=n.namespaced,n.actions&&(this._rawModule.actions=n.actions),n.mutations&&(this._rawModule.mutations=n.mutations),n.getters&&(this._rawModule.getters=n.getters)};zs.prototype.forEachChild=function(n){nd(this._children,n)};zs.prototype.forEachGetter=function(n){this._rawModule.getters&&nd(this._rawModule.getters,n)};zs.prototype.forEachAction=function(n){this._rawModule.actions&&nd(this._rawModule.actions,n)};zs.prototype.forEachMutation=function(n){this._rawModule.mutations&&nd(this._rawModule.mutations,n)};Object.defineProperties(zs.prototype,xx);var oc=function(n){this.register([],n,!1)};oc.prototype.get=function(n){return n.reduce(function(s,r){return s.getChild(r)},this.root)};oc.prototype.getNamespace=function(n){var s=this.root;return n.reduce(function(r,c){return s=s.getChild(c),r+(s.namespaced?c+"/":"")},"")};oc.prototype.update=function(n){Ex([],this.root,n)};oc.prototype.register=function(n,s,r){var c=this;r===void 0&&(r=!0);var u=new zs(s,r);if(n.length===0)this.root=u;else{var f=this.get(n.slice(0,-1));f.addChild(n[n.length-1],u)}s.modules&&nd(s.modules,function(g,p){c.register(n.concat(p),g,r)})};oc.prototype.unregister=function(n){var s=this.get(n.slice(0,-1)),r=n[n.length-1],c=s.getChild(r);!c||!c.runtime||s.removeChild(r)};oc.prototype.isRegistered=function(n){var s=this.get(n.slice(0,-1)),r=n[n.length-1];return s?s.hasChild(r):!1};function Ex(i,n,s){if(n.update(s),s.modules)for(var r in s.modules){if(!n.getChild(r))return;Ex(i.concat(r),n.getChild(r),s.modules[r])}}function VN(i){return new Ao(i)}var Ao=function(n){var s=this;n===void 0&&(n={});var r=n.plugins;r===void 0&&(r=[]);var c=n.strict;c===void 0&&(c=!1);var u=n.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new oc(n),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=u;var f=this,g=this,p=g.dispatch,k=g.commit;this.dispatch=function(v,M){return p.call(f,v,M)},this.commit=function(v,M,z){return k.call(f,v,M,z)},this.strict=c;var C=this._modules.root.state;Tf(this,C,[],this._modules.root),pb(this,C),r.forEach(function(x){return x(s)})},bb={state:{configurable:!0}};Ao.prototype.install=function(n,s){n.provide(s||xN,this),n.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&LN(n,this)};bb.state.get=function(){return this._state.data};bb.state.set=function(i){};Ao.prototype.commit=function(n,s,r){var c=this,u=Gh(n,s,r),f=u.type,g=u.payload,p={type:f,payload:g},k=this._mutations[f];!k||(this._withCommit(function(){k.forEach(function(x){x(g)})}),this._subscribers.slice().forEach(function(C){return C(p,c.state)}))};Ao.prototype.dispatch=function(n,s){var r=this,c=Gh(n,s),u=c.type,f=c.payload,g={type:u,payload:f},p=this._actions[u];if(!!p){try{this._actionSubscribers.slice().filter(function(C){return C.before}).forEach(function(C){return C.before(g,r.state)})}catch{}var k=p.length>1?Promise.all(p.map(function(C){return C(f)})):p[0](f);return new Promise(function(C,x){k.then(function(v){try{r._actionSubscribers.filter(function(M){return M.after}).forEach(function(M){return M.after(g,r.state)})}catch{}C(v)},function(v){try{r._actionSubscribers.filter(function(M){return M.error}).forEach(function(M){return M.error(g,r.state,v)})}catch{}x(v)})})}};Ao.prototype.subscribe=function(n,s){return kx(n,this._subscribers,s)};Ao.prototype.subscribeAction=function(n,s){var r=typeof n=="function"?{before:n}:n;return kx(r,this._actionSubscribers,s)};Ao.prototype.watch=function(n,s,r){var c=this;return Ls(function(){return n(c.state,c.getters)},s,Object.assign({},r))};Ao.prototype.replaceState=function(n){var s=this;this._withCommit(function(){s._state.data=n})};Ao.prototype.registerModule=function(n,s,r){r===void 0&&(r={}),typeof n=="string"&&(n=[n]),this._modules.register(n,s),Tf(this,this.state,n,this._modules.get(n),r.preserveState),pb(this,this.state)};Ao.prototype.unregisterModule=function(n){var s=this;typeof n=="string"&&(n=[n]),this._modules.unregister(n),this._withCommit(function(){var r=mb(s.state,n.slice(0,-1));delete r[n[n.length-1]]}),wx(this)};Ao.prototype.hasModule=function(n){return typeof n=="string"&&(n=[n]),this._modules.isRegistered(n)};Ao.prototype.hotUpdate=function(n){this._modules.update(n),wx(this,!0)};Ao.prototype._withCommit=function(n){var s=this._committing;this._committing=!0,n(),this._committing=s};Object.defineProperties(Ao.prototype,bb);function Sx(i,n){return function(){return i.apply(n,arguments)}}const{toString:Tx}=Object.prototype,{getPrototypeOf:kb}=Object,wb=(i=>n=>{const s=Tx.call(n);return i[s]||(i[s]=s.slice(8,-1).toLowerCase())})(Object.create(null)),sa=i=>(i=i.toLowerCase(),n=>wb(n)===i),Df=i=>n=>typeof n===i,{isArray:id}=Array,nu=Df("undefined");function HN(i){return i!==null&&!nu(i)&&i.constructor!==null&&!nu(i.constructor)&&Jl(i.constructor.isBuffer)&&i.constructor.isBuffer(i)}const Dx=sa("ArrayBuffer");function UN(i){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(i):n=i&&i.buffer&&Dx(i.buffer),n}const WN=Df("string"),Jl=Df("function"),Mx=Df("number"),_b=i=>i!==null&&typeof i=="object",qN=i=>i===!0||i===!1,Lh=i=>{if(wb(i)!=="object")return!1;const n=kb(i);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in i)&&!(Symbol.iterator in i)},GN=sa("Date"),YN=sa("File"),KN=sa("Blob"),QN=sa("FileList"),ZN=i=>_b(i)&&Jl(i.pipe),JN=i=>{const n="[object FormData]";return i&&(typeof FormData=="function"&&i instanceof FormData||Tx.call(i)===n||Jl(i.toString)&&i.toString()===n)},XN=sa("URLSearchParams"),tO=i=>i.trim?i.trim():i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ku(i,n,{allOwnKeys:s=!1}={}){if(i===null||typeof i>"u")return;let r,c;if(typeof i!="object"&&(i=[i]),id(i))for(r=0,c=i.length;r<c;r++)n.call(null,i[r],r,i);else{const u=s?Object.getOwnPropertyNames(i):Object.keys(i),f=u.length;let g;for(r=0;r<f;r++)g=u[r],n.call(null,i[g],g,i)}}function Ix(i,n){n=n.toLowerCase();const s=Object.keys(i);let r=s.length,c;for(;r-- >0;)if(c=s[r],n===c.toLowerCase())return c;return null}const Px=typeof self>"u"?typeof global>"u"?globalThis:global:self,Bx=i=>!nu(i)&&i!==Px;function vm(){const{caseless:i}=Bx(this)&&this||{},n={},s=(r,c)=>{const u=i&&Ix(n,c)||c;Lh(n[u])&&Lh(r)?n[u]=vm(n[u],r):Lh(r)?n[u]=vm({},r):id(r)?n[u]=r.slice():n[u]=r};for(let r=0,c=arguments.length;r<c;r++)arguments[r]&&ku(arguments[r],s);return n}const eO=(i,n,s,{allOwnKeys:r}={})=>(ku(n,(c,u)=>{s&&Jl(c)?i[u]=Sx(c,s):i[u]=c},{allOwnKeys:r}),i),nO=i=>(i.charCodeAt(0)===65279&&(i=i.slice(1)),i),iO=(i,n,s,r)=>{i.prototype=Object.create(n.prototype,r),i.prototype.constructor=i,Object.defineProperty(i,"super",{value:n.prototype}),s&&Object.assign(i.prototype,s)},oO=(i,n,s,r)=>{let c,u,f;const g={};if(n=n||{},i==null)return n;do{for(c=Object.getOwnPropertyNames(i),u=c.length;u-- >0;)f=c[u],(!r||r(f,i,n))&&!g[f]&&(n[f]=i[f],g[f]=!0);i=s!==!1&&kb(i)}while(i&&(!s||s(i,n))&&i!==Object.prototype);return n},sO=(i,n,s)=>{i=String(i),(s===void 0||s>i.length)&&(s=i.length),s-=n.length;const r=i.indexOf(n,s);return r!==-1&&r===s},rO=i=>{if(!i)return null;if(id(i))return i;let n=i.length;if(!Mx(n))return null;const s=new Array(n);for(;n-- >0;)s[n]=i[n];return s},aO=(i=>n=>i&&n instanceof i)(typeof Uint8Array<"u"&&kb(Uint8Array)),lO=(i,n)=>{const r=(i&&i[Symbol.iterator]).call(i);let c;for(;(c=r.next())&&!c.done;){const u=c.value;n.call(i,u[0],u[1])}},cO=(i,n)=>{let s;const r=[];for(;(s=i.exec(n))!==null;)r.push(s);return r},dO=sa("HTMLFormElement"),uO=i=>i.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(s,r,c){return r.toUpperCase()+c}),lC=(({hasOwnProperty:i})=>(n,s)=>i.call(n,s))(Object.prototype),hO=sa("RegExp"),Nx=(i,n)=>{const s=Object.getOwnPropertyDescriptors(i),r={};ku(s,(c,u)=>{n(c,u,i)!==!1&&(r[u]=c)}),Object.defineProperties(i,r)},fO=i=>{Nx(i,(n,s)=>{if(Jl(i)&&["arguments","caller","callee"].indexOf(s)!==-1)return!1;const r=i[s];if(!!Jl(r)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+s+"'")})}})},gO=(i,n)=>{const s={},r=c=>{c.forEach(u=>{s[u]=!0})};return id(i)?r(i):r(String(i).split(n)),s},pO=()=>{},mO=(i,n)=>(i=+i,Number.isFinite(i)?i:n),bO=i=>{const n=new Array(10),s=(r,c)=>{if(_b(r)){if(n.indexOf(r)>=0)return;if(!("toJSON"in r)){n[c]=r;const u=id(r)?[]:{};return ku(r,(f,g)=>{const p=s(f,c+1);!nu(p)&&(u[g]=p)}),n[c]=void 0,u}}return r};return s(i,0)},Ft={isArray:id,isArrayBuffer:Dx,isBuffer:HN,isFormData:JN,isArrayBufferView:UN,isString:WN,isNumber:Mx,isBoolean:qN,isObject:_b,isPlainObject:Lh,isUndefined:nu,isDate:GN,isFile:YN,isBlob:KN,isRegExp:hO,isFunction:Jl,isStream:ZN,isURLSearchParams:XN,isTypedArray:aO,isFileList:QN,forEach:ku,merge:vm,extend:eO,trim:tO,stripBOM:nO,inherits:iO,toFlatObject:oO,kindOf:wb,kindOfTest:sa,endsWith:sO,toArray:rO,forEachEntry:lO,matchAll:cO,isHTMLForm:dO,hasOwnProperty:lC,hasOwnProp:lC,reduceDescriptors:Nx,freezeMethods:fO,toObjectSet:gO,toCamelCase:uO,noop:pO,toFiniteNumber:mO,findKey:Ix,global:Px,isContextDefined:Bx,toJSONObject:bO};function dn(i,n,s,r,c){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=i,this.name="AxiosError",n&&(this.code=n),s&&(this.config=s),r&&(this.request=r),c&&(this.response=c)}Ft.inherits(dn,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Ft.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ox=dn.prototype,Lx={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(i=>{Lx[i]={value:i}});Object.defineProperties(dn,Lx);Object.defineProperty(Ox,"isAxiosError",{value:!0});dn.from=(i,n,s,r,c,u)=>{const f=Object.create(Ox);return Ft.toFlatObject(i,f,function(p){return p!==Error.prototype},g=>g!=="isAxiosError"),dn.call(f,i.message,n,s,r,c),f.cause=i,f.name=i.name,u&&Object.assign(f,u),f};var Oo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Rx(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function kO(i){var n=i.default;if(typeof n=="function"){var s=function(){return n.apply(this,arguments)};s.prototype=n.prototype}else s={};return Object.defineProperty(s,"__esModule",{value:!0}),Object.keys(i).forEach(function(r){var c=Object.getOwnPropertyDescriptor(i,r);Object.defineProperty(s,r,c.get?c:{enumerable:!0,get:function(){return i[r]}})}),s}var wO=typeof self=="object"?self.FormData:window.FormData;const _O=wO;function ym(i){return Ft.isPlainObject(i)||Ft.isArray(i)}function zx(i){return Ft.endsWith(i,"[]")?i.slice(0,-2):i}function cC(i,n,s){return i?i.concat(n).map(function(c,u){return c=zx(c),!s&&u?"["+c+"]":c}).join(s?".":""):n}function vO(i){return Ft.isArray(i)&&!i.some(ym)}const yO=Ft.toFlatObject(Ft,{},null,function(n){return/^is[A-Z]/.test(n)});function CO(i){return i&&Ft.isFunction(i.append)&&i[Symbol.toStringTag]==="FormData"&&i[Symbol.iterator]}function Mf(i,n,s){if(!Ft.isObject(i))throw new TypeError("target must be an object");n=n||new(_O||FormData),s=Ft.toFlatObject(s,{metaTokens:!0,dots:!1,indexes:!1},!1,function(H,Z){return!Ft.isUndefined(Z[H])});const r=s.metaTokens,c=s.visitor||C,u=s.dots,f=s.indexes,p=(s.Blob||typeof Blob<"u"&&Blob)&&CO(n);if(!Ft.isFunction(c))throw new TypeError("visitor must be a function");function k(z){if(z===null)return"";if(Ft.isDate(z))return z.toISOString();if(!p&&Ft.isBlob(z))throw new dn("Blob is not supported. Use a Buffer instead.");return Ft.isArrayBuffer(z)||Ft.isTypedArray(z)?p&&typeof Blob=="function"?new Blob([z]):Buffer.from(z):z}function C(z,H,Z){let U=z;if(z&&!Z&&typeof z=="object"){if(Ft.endsWith(H,"{}"))H=r?H:H.slice(0,-2),z=JSON.stringify(z);else if(Ft.isArray(z)&&vO(z)||Ft.isFileList(z)||Ft.endsWith(H,"[]")&&(U=Ft.toArray(z)))return H=zx(H),U.forEach(function(tt,dt){!(Ft.isUndefined(tt)||tt===null)&&n.append(f===!0?cC([H],dt,u):f===null?H:H+"[]",k(tt))}),!1}return ym(z)?!0:(n.append(cC(Z,H,u),k(z)),!1)}const x=[],v=Object.assign(yO,{defaultVisitor:C,convertValue:k,isVisitable:ym});function M(z,H){if(!Ft.isUndefined(z)){if(x.indexOf(z)!==-1)throw Error("Circular reference detected in "+H.join("."));x.push(z),Ft.forEach(z,function(U,W){(!(Ft.isUndefined(U)||U===null)&&c.call(n,U,Ft.isString(W)?W.trim():W,H,v))===!0&&M(U,H?H.concat(W):[W])}),x.pop()}}if(!Ft.isObject(i))throw new TypeError("data must be an object");return M(i),n}function dC(i){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g,function(r){return n[r]})}function vb(i,n){this._pairs=[],i&&Mf(i,this,n)}const jx=vb.prototype;jx.append=function(n,s){this._pairs.push([n,s])};jx.toString=function(n){const s=n?function(r){return n.call(this,r,dC)}:dC;return this._pairs.map(function(c){return s(c[0])+"="+s(c[1])},"").join("&")};function AO(i){return encodeURIComponent(i).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Fx(i,n,s){if(!n)return i;const r=s&&s.encode||AO,c=s&&s.serialize;let u;if(c?u=c(n,s):u=Ft.isURLSearchParams(n)?n.toString():new vb(n,s).toString(r),u){const f=i.indexOf("#");f!==-1&&(i=i.slice(0,f)),i+=(i.indexOf("?")===-1?"?":"&")+u}return i}class xO{constructor(){this.handlers=[]}use(n,s,r){return this.handlers.push({fulfilled:n,rejected:s,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){Ft.forEach(this.handlers,function(r){r!==null&&n(r)})}}const uC=xO,$x={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},EO=typeof URLSearchParams<"u"?URLSearchParams:vb,SO=FormData,TO=(()=>{let i;return typeof navigator<"u"&&((i=navigator.product)==="ReactNative"||i==="NativeScript"||i==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),ta={isBrowser:!0,classes:{URLSearchParams:EO,FormData:SO,Blob},isStandardBrowserEnv:TO,protocols:["http","https","file","blob","url","data"]};function DO(i,n){return Mf(i,new ta.classes.URLSearchParams,Object.assign({visitor:function(s,r,c,u){return ta.isNode&&Ft.isBuffer(s)?(this.append(r,s.toString("base64")),!1):u.defaultVisitor.apply(this,arguments)}},n))}function MO(i){return Ft.matchAll(/\w+|\[(\w*)]/g,i).map(n=>n[0]==="[]"?"":n[1]||n[0])}function IO(i){const n={},s=Object.keys(i);let r;const c=s.length;let u;for(r=0;r<c;r++)u=s[r],n[u]=i[u];return n}function Vx(i){function n(s,r,c,u){let f=s[u++];const g=Number.isFinite(+f),p=u>=s.length;return f=!f&&Ft.isArray(c)?c.length:f,p?(Ft.hasOwnProp(c,f)?c[f]=[c[f],r]:c[f]=r,!g):((!c[f]||!Ft.isObject(c[f]))&&(c[f]=[]),n(s,r,c[f],u)&&Ft.isArray(c[f])&&(c[f]=IO(c[f])),!g)}if(Ft.isFormData(i)&&Ft.isFunction(i.entries)){const s={};return Ft.forEachEntry(i,(r,c)=>{n(MO(r),c,s,0)}),s}return null}const PO={"Content-Type":void 0};function BO(i,n,s){if(Ft.isString(i))try{return(n||JSON.parse)(i),Ft.trim(i)}catch(r){if(r.name!=="SyntaxError")throw r}return(s||JSON.stringify)(i)}const If={transitional:$x,adapter:["xhr","http"],transformRequest:[function(n,s){const r=s.getContentType()||"",c=r.indexOf("application/json")>-1,u=Ft.isObject(n);if(u&&Ft.isHTMLForm(n)&&(n=new FormData(n)),Ft.isFormData(n))return c&&c?JSON.stringify(Vx(n)):n;if(Ft.isArrayBuffer(n)||Ft.isBuffer(n)||Ft.isStream(n)||Ft.isFile(n)||Ft.isBlob(n))return n;if(Ft.isArrayBufferView(n))return n.buffer;if(Ft.isURLSearchParams(n))return s.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let g;if(u){if(r.indexOf("application/x-www-form-urlencoded")>-1)return DO(n,this.formSerializer).toString();if((g=Ft.isFileList(n))||r.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return Mf(g?{"files[]":n}:n,p&&new p,this.formSerializer)}}return u||c?(s.setContentType("application/json",!1),BO(n)):n}],transformResponse:[function(n){const s=this.transitional||If.transitional,r=s&&s.forcedJSONParsing,c=this.responseType==="json";if(n&&Ft.isString(n)&&(r&&!this.responseType||c)){const f=!(s&&s.silentJSONParsing)&&c;try{return JSON.parse(n)}catch(g){if(f)throw g.name==="SyntaxError"?dn.from(g,dn.ERR_BAD_RESPONSE,this,null,this.response):g}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ta.classes.FormData,Blob:ta.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};Ft.forEach(["delete","get","head"],function(n){If.headers[n]={}});Ft.forEach(["post","put","patch"],function(n){If.headers[n]=Ft.merge(PO)});const yb=If,NO=Ft.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),OO=i=>{const n={};let s,r,c;return i&&i.split(`
`).forEach(function(f){c=f.indexOf(":"),s=f.substring(0,c).trim().toLowerCase(),r=f.substring(c+1).trim(),!(!s||n[s]&&NO[s])&&(s==="set-cookie"?n[s]?n[s].push(r):n[s]=[r]:n[s]=n[s]?n[s]+", "+r:r)}),n},hC=Symbol("internals");function Cd(i){return i&&String(i).trim().toLowerCase()}function Rh(i){return i===!1||i==null?i:Ft.isArray(i)?i.map(Rh):String(i)}function LO(i){const n=Object.create(null),s=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=s.exec(i);)n[r[1]]=r[2];return n}function RO(i){return/^[-_a-zA-Z]+$/.test(i.trim())}function fC(i,n,s,r){if(Ft.isFunction(r))return r.call(this,n,s);if(!!Ft.isString(n)){if(Ft.isString(r))return n.indexOf(r)!==-1;if(Ft.isRegExp(r))return r.test(n)}}function zO(i){return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,s,r)=>s.toUpperCase()+r)}function jO(i,n){const s=Ft.toCamelCase(" "+n);["get","set","has"].forEach(r=>{Object.defineProperty(i,r+s,{value:function(c,u,f){return this[r].call(this,n,c,u,f)},configurable:!0})})}class Pf{constructor(n){n&&this.set(n)}set(n,s,r){const c=this;function u(g,p,k){const C=Cd(p);if(!C)throw new Error("header name must be a non-empty string");const x=Ft.findKey(c,C);(!x||c[x]===void 0||k===!0||k===void 0&&c[x]!==!1)&&(c[x||p]=Rh(g))}const f=(g,p)=>Ft.forEach(g,(k,C)=>u(k,C,p));return Ft.isPlainObject(n)||n instanceof this.constructor?f(n,s):Ft.isString(n)&&(n=n.trim())&&!RO(n)?f(OO(n),s):n!=null&&u(s,n,r),this}get(n,s){if(n=Cd(n),n){const r=Ft.findKey(this,n);if(r){const c=this[r];if(!s)return c;if(s===!0)return LO(c);if(Ft.isFunction(s))return s.call(this,c,r);if(Ft.isRegExp(s))return s.exec(c);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,s){if(n=Cd(n),n){const r=Ft.findKey(this,n);return!!(r&&(!s||fC(this,this[r],r,s)))}return!1}delete(n,s){const r=this;let c=!1;function u(f){if(f=Cd(f),f){const g=Ft.findKey(r,f);g&&(!s||fC(r,r[g],g,s))&&(delete r[g],c=!0)}}return Ft.isArray(n)?n.forEach(u):u(n),c}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(n){const s=this,r={};return Ft.forEach(this,(c,u)=>{const f=Ft.findKey(r,u);if(f){s[f]=Rh(c),delete s[u];return}const g=n?zO(u):String(u).trim();g!==u&&delete s[u],s[g]=Rh(c),r[g]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const s=Object.create(null);return Ft.forEach(this,(r,c)=>{r!=null&&r!==!1&&(s[c]=n&&Ft.isArray(r)?r.join(", "):r)}),s}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,s])=>n+": "+s).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static concat(n,...s){const r=new this(n);return s.forEach(c=>r.set(c)),r}static accessor(n){const r=(this[hC]=this[hC]={accessors:{}}).accessors,c=this.prototype;function u(f){const g=Cd(f);r[g]||(jO(c,f),r[g]=!0)}return Ft.isArray(n)?n.forEach(u):u(n),this}}Pf.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);Ft.freezeMethods(Pf.prototype);Ft.freezeMethods(Pf);const ea=Pf;function Op(i,n){const s=this||yb,r=n||s,c=ea.from(r.headers);let u=r.data;return Ft.forEach(i,function(g){u=g.call(s,u,c.normalize(),n?n.status:void 0)}),c.normalize(),u}function Hx(i){return!!(i&&i.__CANCEL__)}function wu(i,n,s){dn.call(this,i==null?"canceled":i,dn.ERR_CANCELED,n,s),this.name="CanceledError"}Ft.inherits(wu,dn,{__CANCEL__:!0});const FO=null;function $O(i,n,s){const r=s.config.validateStatus;!s.status||!r||r(s.status)?i(s):n(new dn("Request failed with status code "+s.status,[dn.ERR_BAD_REQUEST,dn.ERR_BAD_RESPONSE][Math.floor(s.status/100)-4],s.config,s.request,s))}const VO=ta.isStandardBrowserEnv?function(){return{write:function(s,r,c,u,f,g){const p=[];p.push(s+"="+encodeURIComponent(r)),Ft.isNumber(c)&&p.push("expires="+new Date(c).toGMTString()),Ft.isString(u)&&p.push("path="+u),Ft.isString(f)&&p.push("domain="+f),g===!0&&p.push("secure"),document.cookie=p.join("; ")},read:function(s){const r=document.cookie.match(new RegExp("(^|;\\s*)("+s+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(s){this.write(s,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function HO(i){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)}function UO(i,n){return n?i.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):i}function Ux(i,n){return i&&!HO(n)?UO(i,n):n}const WO=ta.isStandardBrowserEnv?function(){const n=/(msie|trident)/i.test(navigator.userAgent),s=document.createElement("a");let r;function c(u){let f=u;return n&&(s.setAttribute("href",f),f=s.href),s.setAttribute("href",f),{href:s.href,protocol:s.protocol?s.protocol.replace(/:$/,""):"",host:s.host,search:s.search?s.search.replace(/^\?/,""):"",hash:s.hash?s.hash.replace(/^#/,""):"",hostname:s.hostname,port:s.port,pathname:s.pathname.charAt(0)==="/"?s.pathname:"/"+s.pathname}}return r=c(window.location.href),function(f){const g=Ft.isString(f)?c(f):f;return g.protocol===r.protocol&&g.host===r.host}}():function(){return function(){return!0}}();function qO(i){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(i);return n&&n[1]||""}function GO(i,n){i=i||10;const s=new Array(i),r=new Array(i);let c=0,u=0,f;return n=n!==void 0?n:1e3,function(p){const k=Date.now(),C=r[u];f||(f=k),s[c]=p,r[c]=k;let x=u,v=0;for(;x!==c;)v+=s[x++],x=x%i;if(c=(c+1)%i,c===u&&(u=(u+1)%i),k-f<n)return;const M=C&&k-C;return M?Math.round(v*1e3/M):void 0}}function gC(i,n){let s=0;const r=GO(50,250);return c=>{const u=c.loaded,f=c.lengthComputable?c.total:void 0,g=u-s,p=r(g),k=u<=f;s=u;const C={loaded:u,total:f,progress:f?u/f:void 0,bytes:g,rate:p||void 0,estimated:p&&f&&k?(f-u)/p:void 0,event:c};C[n?"download":"upload"]=!0,i(C)}}const YO=typeof XMLHttpRequest<"u",KO=YO&&function(i){return new Promise(function(s,r){let c=i.data;const u=ea.from(i.headers).normalize(),f=i.responseType;let g;function p(){i.cancelToken&&i.cancelToken.unsubscribe(g),i.signal&&i.signal.removeEventListener("abort",g)}Ft.isFormData(c)&&ta.isStandardBrowserEnv&&u.setContentType(!1);let k=new XMLHttpRequest;if(i.auth){const M=i.auth.username||"",z=i.auth.password?unescape(encodeURIComponent(i.auth.password)):"";u.set("Authorization","Basic "+btoa(M+":"+z))}const C=Ux(i.baseURL,i.url);k.open(i.method.toUpperCase(),Fx(C,i.params,i.paramsSerializer),!0),k.timeout=i.timeout;function x(){if(!k)return;const M=ea.from("getAllResponseHeaders"in k&&k.getAllResponseHeaders()),H={data:!f||f==="text"||f==="json"?k.responseText:k.response,status:k.status,statusText:k.statusText,headers:M,config:i,request:k};$O(function(U){s(U),p()},function(U){r(U),p()},H),k=null}if("onloadend"in k?k.onloadend=x:k.onreadystatechange=function(){!k||k.readyState!==4||k.status===0&&!(k.responseURL&&k.responseURL.indexOf("file:")===0)||setTimeout(x)},k.onabort=function(){!k||(r(new dn("Request aborted",dn.ECONNABORTED,i,k)),k=null)},k.onerror=function(){r(new dn("Network Error",dn.ERR_NETWORK,i,k)),k=null},k.ontimeout=function(){let z=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const H=i.transitional||$x;i.timeoutErrorMessage&&(z=i.timeoutErrorMessage),r(new dn(z,H.clarifyTimeoutError?dn.ETIMEDOUT:dn.ECONNABORTED,i,k)),k=null},ta.isStandardBrowserEnv){const M=(i.withCredentials||WO(C))&&i.xsrfCookieName&&VO.read(i.xsrfCookieName);M&&u.set(i.xsrfHeaderName,M)}c===void 0&&u.setContentType(null),"setRequestHeader"in k&&Ft.forEach(u.toJSON(),function(z,H){k.setRequestHeader(H,z)}),Ft.isUndefined(i.withCredentials)||(k.withCredentials=!!i.withCredentials),f&&f!=="json"&&(k.responseType=i.responseType),typeof i.onDownloadProgress=="function"&&k.addEventListener("progress",gC(i.onDownloadProgress,!0)),typeof i.onUploadProgress=="function"&&k.upload&&k.upload.addEventListener("progress",gC(i.onUploadProgress)),(i.cancelToken||i.signal)&&(g=M=>{!k||(r(!M||M.type?new wu(null,i,k):M),k.abort(),k=null)},i.cancelToken&&i.cancelToken.subscribe(g),i.signal&&(i.signal.aborted?g():i.signal.addEventListener("abort",g)));const v=qO(C);if(v&&ta.protocols.indexOf(v)===-1){r(new dn("Unsupported protocol "+v+":",dn.ERR_BAD_REQUEST,i));return}k.send(c||null)})},zh={http:FO,xhr:KO};Ft.forEach(zh,(i,n)=>{if(i){try{Object.defineProperty(i,"name",{value:n})}catch{}Object.defineProperty(i,"adapterName",{value:n})}});const QO={getAdapter:i=>{i=Ft.isArray(i)?i:[i];const{length:n}=i;let s,r;for(let c=0;c<n&&(s=i[c],!(r=Ft.isString(s)?zh[s.toLowerCase()]:s));c++);if(!r)throw r===!1?new dn(`Adapter ${s} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(Ft.hasOwnProp(zh,s)?`Adapter '${s}' is not available in the build`:`Unknown adapter '${s}'`);if(!Ft.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:zh};function Lp(i){if(i.cancelToken&&i.cancelToken.throwIfRequested(),i.signal&&i.signal.aborted)throw new wu}function pC(i){return Lp(i),i.headers=ea.from(i.headers),i.data=Op.call(i,i.transformRequest),["post","put","patch"].indexOf(i.method)!==-1&&i.headers.setContentType("application/x-www-form-urlencoded",!1),QO.getAdapter(i.adapter||yb.adapter)(i).then(function(r){return Lp(i),r.data=Op.call(i,i.transformResponse,r),r.headers=ea.from(r.headers),r},function(r){return Hx(r)||(Lp(i),r&&r.response&&(r.response.data=Op.call(i,i.transformResponse,r.response),r.response.headers=ea.from(r.response.headers))),Promise.reject(r)})}const mC=i=>i instanceof ea?i.toJSON():i;function iu(i,n){n=n||{};const s={};function r(k,C,x){return Ft.isPlainObject(k)&&Ft.isPlainObject(C)?Ft.merge.call({caseless:x},k,C):Ft.isPlainObject(C)?Ft.merge({},C):Ft.isArray(C)?C.slice():C}function c(k,C,x){if(Ft.isUndefined(C)){if(!Ft.isUndefined(k))return r(void 0,k,x)}else return r(k,C,x)}function u(k,C){if(!Ft.isUndefined(C))return r(void 0,C)}function f(k,C){if(Ft.isUndefined(C)){if(!Ft.isUndefined(k))return r(void 0,k)}else return r(void 0,C)}function g(k,C,x){if(x in n)return r(k,C);if(x in i)return r(void 0,k)}const p={url:u,method:u,data:u,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutMessage:f,withCredentials:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,beforeRedirect:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,responseEncoding:f,validateStatus:g,headers:(k,C)=>c(mC(k),mC(C),!0)};return Ft.forEach(Object.keys(i).concat(Object.keys(n)),function(C){const x=p[C]||c,v=x(i[C],n[C],C);Ft.isUndefined(v)&&x!==g||(s[C]=v)}),s}const Wx="1.2.0",Cb={};["object","boolean","number","function","string","symbol"].forEach((i,n)=>{Cb[i]=function(r){return typeof r===i||"a"+(n<1?"n ":" ")+i}});const bC={};Cb.transitional=function(n,s,r){function c(u,f){return"[Axios v"+Wx+"] Transitional option '"+u+"'"+f+(r?". "+r:"")}return(u,f,g)=>{if(n===!1)throw new dn(c(f," has been removed"+(s?" in "+s:"")),dn.ERR_DEPRECATED);return s&&!bC[f]&&(bC[f]=!0,console.warn(c(f," has been deprecated since v"+s+" and will be removed in the near future"))),n?n(u,f,g):!0}};function ZO(i,n,s){if(typeof i!="object")throw new dn("options must be an object",dn.ERR_BAD_OPTION_VALUE);const r=Object.keys(i);let c=r.length;for(;c-- >0;){const u=r[c],f=n[u];if(f){const g=i[u],p=g===void 0||f(g,u,i);if(p!==!0)throw new dn("option "+u+" must be "+p,dn.ERR_BAD_OPTION_VALUE);continue}if(s!==!0)throw new dn("Unknown option "+u,dn.ERR_BAD_OPTION)}}const Cm={assertOptions:ZO,validators:Cb},Ba=Cm.validators;class Yh{constructor(n){this.defaults=n,this.interceptors={request:new uC,response:new uC}}request(n,s){typeof n=="string"?(s=s||{},s.url=n):s=n||{},s=iu(this.defaults,s);const{transitional:r,paramsSerializer:c,headers:u}=s;r!==void 0&&Cm.assertOptions(r,{silentJSONParsing:Ba.transitional(Ba.boolean),forcedJSONParsing:Ba.transitional(Ba.boolean),clarifyTimeoutError:Ba.transitional(Ba.boolean)},!1),c!==void 0&&Cm.assertOptions(c,{encode:Ba.function,serialize:Ba.function},!0),s.method=(s.method||this.defaults.method||"get").toLowerCase();let f;f=u&&Ft.merge(u.common,u[s.method]),f&&Ft.forEach(["delete","get","head","post","put","patch","common"],z=>{delete u[z]}),s.headers=ea.concat(f,u);const g=[];let p=!0;this.interceptors.request.forEach(function(H){typeof H.runWhen=="function"&&H.runWhen(s)===!1||(p=p&&H.synchronous,g.unshift(H.fulfilled,H.rejected))});const k=[];this.interceptors.response.forEach(function(H){k.push(H.fulfilled,H.rejected)});let C,x=0,v;if(!p){const z=[pC.bind(this),void 0];for(z.unshift.apply(z,g),z.push.apply(z,k),v=z.length,C=Promise.resolve(s);x<v;)C=C.then(z[x++],z[x++]);return C}v=g.length;let M=s;for(x=0;x<v;){const z=g[x++],H=g[x++];try{M=z(M)}catch(Z){H.call(this,Z);break}}try{C=pC.call(this,M)}catch(z){return Promise.reject(z)}for(x=0,v=k.length;x<v;)C=C.then(k[x++],k[x++]);return C}getUri(n){n=iu(this.defaults,n);const s=Ux(n.baseURL,n.url);return Fx(s,n.params,n.paramsSerializer)}}Ft.forEach(["delete","get","head","options"],function(n){Yh.prototype[n]=function(s,r){return this.request(iu(r||{},{method:n,url:s,data:(r||{}).data}))}});Ft.forEach(["post","put","patch"],function(n){function s(r){return function(u,f,g){return this.request(iu(g||{},{method:n,headers:r?{"Content-Type":"multipart/form-data"}:{},url:u,data:f}))}}Yh.prototype[n]=s(),Yh.prototype[n+"Form"]=s(!0)});const jh=Yh;class Ab{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let s;this.promise=new Promise(function(u){s=u});const r=this;this.promise.then(c=>{if(!r._listeners)return;let u=r._listeners.length;for(;u-- >0;)r._listeners[u](c);r._listeners=null}),this.promise.then=c=>{let u;const f=new Promise(g=>{r.subscribe(g),u=g}).then(c);return f.cancel=function(){r.unsubscribe(u)},f},n(function(u,f,g){r.reason||(r.reason=new wu(u,f,g),s(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const s=this._listeners.indexOf(n);s!==-1&&this._listeners.splice(s,1)}static source(){let n;return{token:new Ab(function(c){n=c}),cancel:n}}}const JO=Ab;function XO(i){return function(s){return i.apply(null,s)}}function tL(i){return Ft.isObject(i)&&i.isAxiosError===!0}function qx(i){const n=new jh(i),s=Sx(jh.prototype.request,n);return Ft.extend(s,jh.prototype,n,{allOwnKeys:!0}),Ft.extend(s,n,null,{allOwnKeys:!0}),s.create=function(c){return qx(iu(i,c))},s}const Fi=qx(yb);Fi.Axios=jh;Fi.CanceledError=wu;Fi.CancelToken=JO;Fi.isCancel=Hx;Fi.VERSION=Wx;Fi.toFormData=Mf;Fi.AxiosError=dn;Fi.Cancel=Fi.CanceledError;Fi.all=function(n){return Promise.all(n)};Fi.spread=XO;Fi.isAxiosError=tL;Fi.AxiosHeaders=ea;Fi.formToJSON=i=>Vx(Ft.isHTMLForm(i)?new FormData(i):i);Fi.default=Fi;const tl=Fi,me=tl.create({baseURL:"http://localhost:8000/api"});me.interceptors.request.use(i=>(i.headers.Authorization=`Bearer ${Zt.state.user.token}`,i));const Am=VN({state:{user:{data:Object,token:sessionStorage.getItem("TOKEN")},theloais:[],games:[],currentGame:[],gamesHot:[],comments:[],admin:{data:Object,token:sessionStorage.getItem("adminToken")},noProcessReport:""},getters:{},actions:{register({commit:i},n){return me.post("/registry",n).then(({data:s})=>(i("setUser",s),s))},login({commit:i},n){return me.post("/login",n).then(({data:s})=>(i("setUser",s),s))},loginFb({commit:i}){return me.get("/oauth/facebook")},logout({commit:i}){return me.post("/logout").then(n=>(i("logout"),n))},getUser({commit:i}){return me.get("/user").then(n=>(Am.state.user.data=n.data.data,n))},getTheLoais({commit:i}){return me.get("/theloai").then(n=>(i("setTheLoais",n.data),n))},getTheloaiPageSort({commit:i},n){return me.get(`/gettheloaipagesort/${n.sort}/${n.row}`).then(s=>s)},getTheloai({commit:i},n){return me.get(`/theloai/${n}`).then(s=>s)},getTheloaiBySlug({commit:i},n){return me.get(`/theloai_by_slug/${n}`).then(s=>s)},addTheloai({commit:i},n){return me.post("/theloai",n)},updateTheloai({commit:i},n){return me.patch(`/theloai/${n.id}`,n)},delTheloai({commit:i},n){return me.delete(`/theloai/${n}`)},getGame({commit:i},n){return me.get(`game/${n}`).then(s=>s)},getGameBySlug({commit:i},n){return me.get(`/get_game_by_slug/${n}`).then(s=>(i("setCurrentGame",s.data),s))},getGames({commit:i}){return me.get("game").then(n=>(i("setGames",n.data),n))},getGamesPageSort({commit:i},n){return me.get(`/games_page_sort/${n.sort}/${n.row}`).then(s=>s)},getGamesSortTheloai({commit:i},n){return me.get(`/games_sort_theloai/${n.id_theloai}/${n.sort}`).then(s=>(i("setGames",s.data),s))},getGamesSearchSort({commit:i},n){return me.get(`/games_search_sort/${n.keyword}/${n.sort}`).then(s=>(i("setGames",s.data),s))},getGames_TheLoai({commit:i},n){return me.get(`/games_theloai/${n}`).then(s=>(i("setGames",s.data),s))},getGamesHot({commit:i}){return me.get("games_hot").then(n=>(i("setGamesHot",n.data),n))},getGamesNew(){return me.get("games_new").then(i=>i)},getGamesRate(){return me.get("games_rate").then(i=>i)},getGames_luotchoi({commit:i},n){return me.get(`games_luotchoi/${n}`).then(s=>(i("setGames",s.data),s))},getGames_ten({commit:i},n){return me.get(`games_ten/${n}`).then(s=>(i("setGames",s.data),s))},getGames_danhgia({commit:i},n){return me.get(`games_danhgia/${n}`).then(s=>(i("setGames",s.data),s))},updateGame({commit:i},n){return me.put(`/game/${n.id}`,n)},search({commit:i},n){return me.get(`/game_search/${n}`).then(s=>(i("setGames",s.data),s))},getComments({commit:i},n){return me.get(`/get_comments/${n.id}/${n.num}`).then(s=>(i("setComments",s.data),s.data.remain))},postComment({commit:i},n){return me.post("/comment",n).then(s=>s)},delComment({commit:i},n){return me.delete(`/comment/${n}`)},updateUser({commit:i},n){return me.put(`/user/${n.id}`,n).then(s=>{i("updateUser",s.data)})},changePassword({commit:i},n){return me.post("/changepassword",n)},likeGame({commit:i},n){return me.post(`/likegame/${n}`)},unlikeGame({commit:i},n){return me.post(`/unlikegame/${n}`)},adminLogin({commit:i},n){return me.post("/admin_login",n).then(s=>{i("setAdmin",s.data)})},addGame({commit:i},n){return me.post("/game",n).then(s=>s)},delGame({commit:i},n){return me.delete(`/game/${n}`)},getUserPageSort({commit:i},n){return me.get(`user_page_sort/${n.sort}/${n.row}`).then(s=>s)},delUser({commit:i},n){return me.delete(`/user/${n}`)},sendReport({commit:i},n){return me.post("report",n)},getReportPageSort({commit:i},n){return me.get(`/report_page_sort/${n.sort}/${n.row}`)},delReport({commit:i},n){return me.delete(`report/${n}`)},getReport({commit:i},n){return me.get(`/report/${n}`).then(s=>s)},updateReport({commit:i},n){return me.put(`report/${n.id}`,n)},getNoProcessReport({commit:i}){return me.get("reportnoprocess").then(n=>(Am.state.noProcessReport=n.data.count[0].num_report,n))},getNumUser({commit:i}){return me.get("num_user").then(n=>n)},getNumGame({commit:i}){return me.get("num_game").then(n=>n)},getNumTheloai({commit:i}){return me.get("num_theloai").then(n=>n)},getNumReport(){return me.get("num_report").then(i=>i)},getPopularTheloai(){return me.get("/popular_theloai").then(i=>i)},calSumSlc(){return me.get("/get_sum_slc")},getStatistic(){return me.get("/get_statistic").then(i=>i)},postReply({commit:i},n){return me.post("/reply",n)},delReply({commit:i},n){return me.delete(`/reply/${n}`)},saveArticle({commit:i},n){return me.post("/article",n)},getArticlePageSort({commit:i},n){return me.get(`get_article_page_sort/${n.sort}/${n.row}`).then(s=>s)},getPopularArticle({commit:i}){return me.get("get_polular_article").then(n=>n)},getArticle({commit:i},n){return me.get(`article/${n}`).then(s=>s)},getArticleBySlug({commit:i},n){return me.get(`article_by_slug/${n}`).then(s=>s)},getArticleRelate(){return me.get("article_relate").then(i=>i)},updateArticle({commit:i},n){return me.put(`article/${n.id}`,n)},getNumArticle(){return me.get("article").then(i=>i)},getArticleView(){return me.get("get_article_view").then(i=>i)},getArticleNew(){return me.get("get_article_new").then(i=>i)}},mutations:{setUser:(i,n)=>{i.user.token=n.token,i.user.data=n.user,sessionStorage.setItem("TOKEN",n.token),sessionStorage.setItem("user_id",n.user.id),sessionStorage.setItem("avatar_url",n.user.avatar_url)},updateUser:(i,n)=>{i.user.data=n.data,sessionStorage.setItem("avatar_url",n.data.avatar_url)},logout:i=>{i.user.token=null,i.user.data={},i.user.type="",sessionStorage.removeItem("TOKEN"),sessionStorage.removeItem("user_id"),sessionStorage.removeItem("avatar_url")},setTheLoais:(i,n)=>{i.theloais=n.data},setGames:(i,n)=>{i.games=n.data},setCurrentGame:(i,n)=>{i.currentGame=n.data},setGamesHot:(i,n)=>{i.gamesHot=n.data},setComments:(i,n)=>{i.comments=n.data},setAdmin:(i,n)=>{i.admin.data=n.admin,i.admin.token=n.token,sessionStorage.setItem("adminToken",n.token)}},modules:{}}),Zt=Am;const eL=E("div",{class:"text-3xl font-bold tracking-tight text-gray-900 text-center"}," TRANG CH\u1EE6 ",-1),nL=E("div",{class:"flex"},[E("h1",{id:"game_hot_text",class:"text-xl mt-5 font-semibold text-white rounded-tl-lg rounded-tr-lg pt-2 px-10"},"GAME HOT")],-1),iL={class:"game_hot border-2 p-4"},oL={class:"grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4"},sL=E("div",{class:"flex"},[E("h1",{class:"text-xl games_new_title mt-20 font-semibold text-white rounded-tl-lg rounded-tr-lg pt-2 px-10"},"GAME M\u1EDAI")],-1),rL={class:"game_new p-4"},aL={class:"grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4"},lL={class:""},cL=E("div",{class:"flex"},[E("h1",{class:"text-xl games_foryou_title mt-20 font-semibold text-white rounded-tl-lg rounded-tr-lg pt-2 px-10"},"GAME D\xC0NH CHO B\u1EA0N")],-1),dL={class:"game_foryou"},uL={class:"grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4"},hL=E("h1",{class:"text-xl font-semibold mt-20 underline"},"TIN HAY",-1),fL={class:"grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 mt-5"},gL=["onClick"],pL=["src"],mL={__name:"Home",setup(i){const n=ai(()=>Zt.state.gamesHot),s=ue([]),r=ue([]),c=ue([]),u=_i();return Zt.dispatch("getGamesHot"),Zt.dispatch("getGamesNew").then(f=>{s.value=f.data.data}),Zt.dispatch("getGamesRate").then(f=>{r.value=f.data.data}),Zt.dispatch("getArticleView").then(f=>{c.value=f.data.data}),document.title="Chilly Gaming - Trang Ch\u1EE7",(f,g)=>(at(),hs(gb,null,{header:pi(()=>[eL]),default:pi(()=>[E("div",null,[E("div",null,[nL,E("div",iL,[E("div",oL,[(at(!0),ht(ve,null,$e(rt(n),p=>(at(),hs(Oh,{key:p.id,game:p},null,8,["game"]))),128))])])]),E("div",null,[sL,E("div",rL,[E("div",aL,[(at(!0),ht(ve,null,$e(s.value,p=>(at(),hs(Oh,{key:p.id,game:p},null,8,["game"]))),128))])])]),E("div",lL,[cL,E("div",dL,[E("div",uL,[(at(!0),ht(ve,null,$e(r.value,p=>(at(),hs(Oh,{key:p.id,game:p},null,8,["game"]))),128))])])])]),E("div",null,[E("div",null,[hL,E("div",fL,[(at(!0),ht(ve,null,$e(c.value,p=>(at(),ht("div",{onClick:k=>rt(u).push({name:"ArticleView",params:{slug:p.slug}}),class:"cursor-pointer",key:p.id},[E("img",{class:"w-full h-48 object-cover",src:"http://localhost:8000/storage/images/articles/"+p.thumb_image,alt:""},null,8,pL),E("div",null,Qt(p.title),1)],8,gL))),128))])])])]),_:1}))}},Gx="/assets/logo_text.b94e866c.png";var Yx={exports:{}};/*!
* sweetalert2 v11.6.13
* Released under the MIT License.
*/(function(i,n){(function(s,r){i.exports=r()})(Oo,function(){var s={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const r="swal2-",c=_=>{const S={};for(const R in _)S[_[R]]=r+_[R];return S},u=c(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),f=c(["success","warning","info","question","error"]),g="SweetAlert2:",p=_=>{const S=[];for(let R=0;R<_.length;R++)S.indexOf(_[R])===-1&&S.push(_[R]);return S},k=_=>_.charAt(0).toUpperCase()+_.slice(1),C=_=>{console.warn(`${g} ${typeof _=="object"?_.join(" "):_}`)},x=_=>{console.error(`${g} ${_}`)},v=[],M=_=>{v.includes(_)||(v.push(_),C(_))},z=(_,S)=>{M(`"${_}" is deprecated and will be removed in the next major release. Please use "${S}" instead.`)},H=_=>typeof _=="function"?_():_,Z=_=>_&&typeof _.toPromise=="function",U=_=>Z(_)?_.toPromise():Promise.resolve(_),W=_=>_&&Promise.resolve(_)===_,tt=()=>document.body.querySelector(`.${u.container}`),dt=_=>{const S=tt();return S?S.querySelector(_):null},st=_=>dt(`.${_}`),I=()=>st(u.popup),mt=()=>st(u.icon),pt=()=>st(u["icon-content"]),_t=()=>st(u.title),Et=()=>st(u["html-container"]),Lt=()=>st(u.image),X=()=>st(u["progress-steps"]),Nt=()=>st(u["validation-message"]),Bt=()=>dt(`.${u.actions} .${u.confirm}`),Xt=()=>dt(`.${u.actions} .${u.deny}`),te=()=>st(u["input-label"]),Wt=()=>dt(`.${u.loader}`),Ce=()=>dt(`.${u.actions} .${u.cancel}`),hn=()=>st(u.actions),pn=()=>st(u.footer),Re=()=>st(u["timer-progress-bar"]),Je=()=>st(u.close),sn=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,re=()=>{const _=Array.from(I().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((R,Q)=>{const vt=parseInt(R.getAttribute("tabindex")),le=parseInt(Q.getAttribute("tabindex"));return vt>le?1:vt<le?-1:0}),S=Array.from(I().querySelectorAll(sn)).filter(R=>R.getAttribute("tabindex")!=="-1");return p(_.concat(S)).filter(R=>Gt(R))},nt=()=>ze(document.body,u.shown)&&!ze(document.body,u["toast-shown"])&&!ze(document.body,u["no-backdrop"]),bt=()=>I()&&ze(I(),u.toast),St=()=>I().hasAttribute("data-loading"),Yt={previousBodyPadding:null},de=(_,S)=>{if(_.textContent="",S){const Q=new DOMParser().parseFromString(S,"text/html");Array.from(Q.querySelector("head").childNodes).forEach(vt=>{_.appendChild(vt)}),Array.from(Q.querySelector("body").childNodes).forEach(vt=>{vt instanceof HTMLVideoElement||vt instanceof HTMLAudioElement?_.appendChild(vt.cloneNode(!0)):_.appendChild(vt)})}},ze=(_,S)=>{if(!S)return!1;const R=S.split(/\s+/);for(let Q=0;Q<R.length;Q++)if(!_.classList.contains(R[Q]))return!1;return!0},xe=(_,S)=>{Array.from(_.classList).forEach(R=>{!Object.values(u).includes(R)&&!Object.values(f).includes(R)&&!Object.values(S.showClass).includes(R)&&_.classList.remove(R)})},J=(_,S,R)=>{if(xe(_,S),S.customClass&&S.customClass[R]){if(typeof S.customClass[R]!="string"&&!S.customClass[R].forEach){C(`Invalid type of customClass.${R}! Expected string or iterable object, got "${typeof S.customClass[R]}"`);return}gt(_,S.customClass[R])}},ut=(_,S)=>{if(!S)return null;switch(S){case"select":case"textarea":case"file":return _.querySelector(`.${u.popup} > .${u[S]}`);case"checkbox":return _.querySelector(`.${u.popup} > .${u.checkbox} input`);case"radio":return _.querySelector(`.${u.popup} > .${u.radio} input:checked`)||_.querySelector(`.${u.popup} > .${u.radio} input:first-child`);case"range":return _.querySelector(`.${u.popup} > .${u.range} input`);default:return _.querySelector(`.${u.popup} > .${u.input}`)}},xt=_=>{if(_.focus(),_.type!=="file"){const S=_.value;_.value="",_.value=S}},Dt=(_,S,R)=>{!_||!S||(typeof S=="string"&&(S=S.split(/\s+/).filter(Boolean)),S.forEach(Q=>{Array.isArray(_)?_.forEach(vt=>{R?vt.classList.add(Q):vt.classList.remove(Q)}):R?_.classList.add(Q):_.classList.remove(Q)}))},gt=(_,S)=>{Dt(_,S,!0)},jt=(_,S)=>{Dt(_,S,!1)},Jt=(_,S)=>{const R=Array.from(_.children);for(let Q=0;Q<R.length;Q++){const vt=R[Q];if(vt instanceof HTMLElement&&ze(vt,S))return vt}},$t=(_,S,R)=>{R===`${parseInt(R)}`&&(R=parseInt(R)),R||parseInt(R)===0?_.style[S]=typeof R=="number"?`${R}px`:R:_.style.removeProperty(S)},Vt=function(_){let S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";_.style.display=S},Pt=_=>{_.style.display="none"},ce=(_,S,R,Q)=>{const vt=_.querySelector(S);vt&&(vt.style[R]=Q)},ae=function(_,S){let R=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";S?Vt(_,R):Pt(_)},Gt=_=>!!(_&&(_.offsetWidth||_.offsetHeight||_.getClientRects().length)),he=()=>!Gt(Bt())&&!Gt(Xt())&&!Gt(Ce()),ee=_=>_.scrollHeight>_.clientHeight,Ie=_=>{const S=window.getComputedStyle(_),R=parseFloat(S.getPropertyValue("animation-duration")||"0"),Q=parseFloat(S.getPropertyValue("transition-duration")||"0");return R>0||Q>0},Se=function(_){let S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const R=Re();Gt(R)&&(S&&(R.style.transition="none",R.style.width="100%"),setTimeout(()=>{R.style.transition=`width ${_/1e3}s linear`,R.style.width="0%"},10))},rn=()=>{const _=Re(),S=parseInt(window.getComputedStyle(_).width);_.style.removeProperty("transition"),_.style.width="100%";const R=parseInt(window.getComputedStyle(_).width),Q=S/R*100;_.style.removeProperty("transition"),_.style.width=`${Q}%`},Xe=100,ge={},$i=()=>{ge.previousActiveElement instanceof HTMLElement?(ge.previousActiveElement.focus(),ge.previousActiveElement=null):document.body&&document.body.focus()},li=_=>new Promise(S=>{if(!_)return S();const R=window.scrollX,Q=window.scrollY;ge.restoreFocusTimeout=setTimeout(()=>{$i(),S()},Xe),window.scrollTo(R,Q)}),Gn=()=>typeof window>"u"||typeof document>"u",ii=`
 <div aria-labelledby="${u.title}" aria-describedby="${u["html-container"]}" class="${u.popup}" tabindex="-1">
   <button type="button" class="${u.close}"></button>
   <ul class="${u["progress-steps"]}"></ul>
   <div class="${u.icon}"></div>
   <img class="${u.image}" />
   <h2 class="${u.title}" id="${u.title}"></h2>
   <div class="${u["html-container"]}" id="${u["html-container"]}"></div>
   <input class="${u.input}" />
   <input type="file" class="${u.file}" />
   <div class="${u.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${u.select}"></select>
   <div class="${u.radio}"></div>
   <label for="${u.checkbox}" class="${u.checkbox}">
     <input type="checkbox" />
     <span class="${u.label}"></span>
   </label>
   <textarea class="${u.textarea}"></textarea>
   <div class="${u["validation-message"]}" id="${u["validation-message"]}"></div>
   <div class="${u.actions}">
     <div class="${u.loader}"></div>
     <button type="button" class="${u.confirm}"></button>
     <button type="button" class="${u.deny}"></button>
     <button type="button" class="${u.cancel}"></button>
   </div>
   <div class="${u.footer}"></div>
   <div class="${u["timer-progress-bar-container"]}">
     <div class="${u["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),mn=()=>{const _=tt();return _?(_.remove(),jt([document.documentElement,document.body],[u["no-backdrop"],u["toast-shown"],u["has-column"]]),!0):!1},bn=()=>{ge.currentInstance.resetValidationMessage()},jo=()=>{const _=I(),S=Jt(_,u.input),R=Jt(_,u.file),Q=_.querySelector(`.${u.range} input`),vt=_.querySelector(`.${u.range} output`),le=Jt(_,u.select),Ye=_.querySelector(`.${u.checkbox} input`),mi=Jt(_,u.textarea);S.oninput=bn,R.onchange=bn,le.onchange=bn,Ye.onchange=bn,mi.oninput=bn,Q.oninput=()=>{bn(),vt.value=Q.value},Q.onchange=()=>{bn(),vt.value=Q.value}},$s=_=>typeof _=="string"?document.querySelector(_):_,Cr=_=>{const S=I();S.setAttribute("role",_.toast?"alert":"dialog"),S.setAttribute("aria-live",_.toast?"polite":"assertive"),_.toast||S.setAttribute("aria-modal","true")},Vs=_=>{window.getComputedStyle(_).direction==="rtl"&&gt(tt(),u.rtl)},Ee=_=>{const S=mn();if(Gn()){x("SweetAlert2 requires document to initialize");return}const R=document.createElement("div");R.className=u.container,S&&gt(R,u["no-transition"]),de(R,ii);const Q=$s(_.target);Q.appendChild(R),Cr(_),Vs(Q),jo()},to=(_,S)=>{_ instanceof HTMLElement?S.appendChild(_):typeof _=="object"?nl(_,S):_&&de(S,_)},nl=(_,S)=>{_.jquery?vi(S,_):de(S,_.toString())},vi=(_,S)=>{if(_.textContent="",0 in S)for(let R=0;R in S;R++)_.appendChild(S[R].cloneNode(!0));else _.appendChild(S.cloneNode(!0))},so=(()=>{if(Gn())return!1;const _=document.createElement("div"),S={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const R in S)if(Object.prototype.hasOwnProperty.call(S,R)&&typeof _.style[R]<"u")return S[R];return!1})(),Ti=()=>{const _=document.createElement("div");_.className=u["scrollbar-measure"],document.body.appendChild(_);const S=_.getBoundingClientRect().width-_.clientWidth;return document.body.removeChild(_),S},il=(_,S)=>{const R=hn(),Q=Wt();!S.showConfirmButton&&!S.showDenyButton&&!S.showCancelButton?Pt(R):Vt(R),J(R,S,"actions"),ol(R,Q,S),de(Q,S.loaderHtml),J(Q,S,"loader")};function ol(_,S,R){const Q=Bt(),vt=Xt(),le=Ce();Vn(Q,"confirm",R),Vn(vt,"deny",R),Vn(le,"cancel",R),Ar(Q,vt,le,R),R.reverseButtons&&(R.toast?(_.insertBefore(le,Q),_.insertBefore(vt,Q)):(_.insertBefore(le,S),_.insertBefore(vt,S),_.insertBefore(Q,S)))}function Ar(_,S,R,Q){if(!Q.buttonsStyling){jt([_,S,R],u.styled);return}gt([_,S,R],u.styled),Q.confirmButtonColor&&(_.style.backgroundColor=Q.confirmButtonColor,gt(_,u["default-outline"])),Q.denyButtonColor&&(S.style.backgroundColor=Q.denyButtonColor,gt(S,u["default-outline"])),Q.cancelButtonColor&&(R.style.backgroundColor=Q.cancelButtonColor,gt(R,u["default-outline"]))}function Vn(_,S,R){ae(_,R[`show${k(S)}Button`],"inline-block"),de(_,R[`${S}ButtonText`]),_.setAttribute("aria-label",R[`${S}ButtonAriaLabel`]),_.className=u[S],J(_,R,`${S}Button`),gt(_,R[`${S}ButtonClass`])}const sl=(_,S)=>{const R=Je();de(R,S.closeButtonHtml),J(R,S,"closeButton"),ae(R,S.showCloseButton),R.setAttribute("aria-label",S.closeButtonAriaLabel)},Hs=(_,S)=>{const R=tt();!R||(xr(R,S.backdrop),ra(R,S.position),ci(R,S.grow),J(R,S,"container"))};function xr(_,S){typeof S=="string"?_.style.background=S:S||gt([document.documentElement,document.body],u["no-backdrop"])}function ra(_,S){S in u?gt(_,u[S]):(C('The "position" parameter is not valid, defaulting to "center"'),gt(_,u.center))}function ci(_,S){if(S&&typeof S=="string"){const R=`grow-${S}`;R in u&&gt(_,u[R])}}const fn=["input","file","range","select","radio","checkbox","textarea"],Er=(_,S)=>{const R=I(),Q=s.innerParams.get(_),vt=!Q||S.input!==Q.input;fn.forEach(le=>{const Ye=Jt(R,u[le]);ro(le,S.inputAttributes),Ye.className=u[le],vt&&Pt(Ye)}),S.input&&(vt&&bs(S),Sr(S))},bs=_=>{if(!Xn[_.input]){x(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${_.input}"`);return}const S=ao(_.input),R=Xn[_.input](S,_);Vt(S),setTimeout(()=>{xt(R)})},ks=_=>{for(let S=0;S<_.attributes.length;S++){const R=_.attributes[S].name;["type","value","style"].includes(R)||_.removeAttribute(R)}},ro=(_,S)=>{const R=ut(I(),_);if(!!R){ks(R);for(const Q in S)R.setAttribute(Q,S[Q])}},Sr=_=>{const S=ao(_.input);typeof _.customClass=="object"&&gt(S,_.customClass.input)},eo=(_,S)=>{(!_.placeholder||S.inputPlaceholder)&&(_.placeholder=S.inputPlaceholder)},Fo=(_,S,R)=>{if(R.inputLabel){_.id=u.input;const Q=document.createElement("label"),vt=u["input-label"];Q.setAttribute("for",_.id),Q.className=vt,typeof R.customClass=="object"&&gt(Q,R.customClass.inputLabel),Q.innerText=R.inputLabel,S.insertAdjacentElement("beforebegin",Q)}},ao=_=>Jt(I(),u[_]||u.input),Pe=(_,S)=>{["string","number"].includes(typeof S)?_.value=`${S}`:W(S)||C(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof S}"`)},Xn={};Xn.text=Xn.email=Xn.password=Xn.number=Xn.tel=Xn.url=(_,S)=>(Pe(_,S.inputValue),Fo(_,_,S),eo(_,S),_.type=S.input,_),Xn.file=(_,S)=>(Fo(_,_,S),eo(_,S),_),Xn.range=(_,S)=>{const R=_.querySelector("input"),Q=_.querySelector("output");return Pe(R,S.inputValue),R.type=S.input,Pe(Q,S.inputValue),Fo(R,_,S),_},Xn.select=(_,S)=>{if(_.textContent="",S.inputPlaceholder){const R=document.createElement("option");de(R,S.inputPlaceholder),R.value="",R.disabled=!0,R.selected=!0,_.appendChild(R)}return Fo(_,_,S),_},Xn.radio=_=>(_.textContent="",_),Xn.checkbox=(_,S)=>{const R=ut(I(),"checkbox");R.value="1",R.id=u.checkbox,R.checked=Boolean(S.inputValue);const Q=_.querySelector("span");return de(Q,S.inputPlaceholder),R},Xn.textarea=(_,S)=>{Pe(_,S.inputValue),eo(_,S),Fo(_,_,S);const R=Q=>parseInt(window.getComputedStyle(Q).marginLeft)+parseInt(window.getComputedStyle(Q).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const Q=parseInt(window.getComputedStyle(I()).width),vt=()=>{const le=_.offsetWidth+R(_);le>Q?I().style.width=`${le}px`:I().style.width=null};new MutationObserver(vt).observe(_,{attributes:!0,attributeFilter:["style"]})}}),_};const aa=(_,S)=>{const R=Et();J(R,S,"htmlContainer"),S.html?(to(S.html,R),Vt(R,"block")):S.text?(R.textContent=S.text,Vt(R,"block")):Pt(R),Er(_,S)},Us=(_,S)=>{const R=pn();ae(R,S.footer),S.footer&&to(S.footer,R),J(R,S,"footer")},rl=(_,S)=>{const R=s.innerParams.get(_),Q=mt();if(R&&S.icon===R.icon){xo(Q,S),Ws(Q,S);return}if(!S.icon&&!S.iconHtml){Pt(Q);return}if(S.icon&&Object.keys(f).indexOf(S.icon)===-1){x(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${S.icon}"`),Pt(Q);return}Vt(Q),xo(Q,S),Ws(Q,S),gt(Q,S.showClass.icon)},Ws=(_,S)=>{for(const R in f)S.icon!==R&&jt(_,f[R]);gt(_,f[S.icon]),jn(_,S),al(),J(_,S,"icon")},al=()=>{const _=I(),S=window.getComputedStyle(_).getPropertyValue("background-color"),R=_.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let Q=0;Q<R.length;Q++)R[Q].style.backgroundColor=S},lo=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,Vi=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,xo=(_,S)=>{let R=_.innerHTML,Q;S.iconHtml?Q=$o(S.iconHtml):S.icon==="success"?(Q=lo,R=R.replace(/ style=".*?"/g,"")):S.icon==="error"?Q=Vi:Q=$o({question:"?",warning:"!",info:"i"}[S.icon]),R.trim()!==Q.trim()&&de(_,Q)},jn=(_,S)=>{if(!!S.iconColor){_.style.color=S.iconColor,_.style.borderColor=S.iconColor;for(const R of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])ce(_,R,"backgroundColor",S.iconColor);ce(_,".swal2-success-ring","borderColor",S.iconColor)}},$o=_=>`<div class="${u["icon-content"]}">${_}</div>`,Fn=(_,S)=>{const R=Lt();if(!S.imageUrl){Pt(R);return}Vt(R,""),R.setAttribute("src",S.imageUrl),R.setAttribute("alt",S.imageAlt),$t(R,"width",S.imageWidth),$t(R,"height",S.imageHeight),R.className=u.image,J(R,S,"image")},Eo=(_,S)=>{const R=tt(),Q=I();S.toast?($t(R,"width",S.width),Q.style.width="100%",Q.insertBefore(Wt(),mt())):$t(Q,"width",S.width),$t(Q,"padding",S.padding),S.color&&(Q.style.color=S.color),S.background&&(Q.style.background=S.background),Pt(Nt()),Vo(Q,S)},Vo=(_,S)=>{_.className=`${u.popup} ${Gt(_)?S.showClass.popup:""}`,S.toast?(gt([document.documentElement,document.body],u["toast-shown"]),gt(_,u.toast)):gt(_,u.modal),J(_,S,"popup"),typeof S.customClass=="string"&&gt(_,S.customClass),S.icon&&gt(_,u[`icon-${S.icon}`])},an=(_,S)=>{const R=X();if(!S.progressSteps||S.progressSteps.length===0){Pt(R);return}Vt(R),R.textContent="",S.currentProgressStep>=S.progressSteps.length&&C("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),S.progressSteps.forEach((Q,vt)=>{const le=la(Q);if(R.appendChild(le),vt===S.currentProgressStep&&gt(le,u["active-progress-step"]),vt!==S.progressSteps.length-1){const Ye=Tr(S);R.appendChild(Ye)}})},la=_=>{const S=document.createElement("li");return gt(S,u["progress-step"]),de(S,_),S},Tr=_=>{const S=document.createElement("li");return gt(S,u["progress-step-line"]),_.progressStepsDistance&&$t(S,"width",_.progressStepsDistance),S},ca=(_,S)=>{const R=_t();ae(R,S.title||S.titleText,"block"),S.title&&to(S.title,R),S.titleText&&(R.innerText=S.titleText),J(R,S,"title")},So=(_,S)=>{Eo(_,S),Hs(_,S),an(_,S),rl(_,S),Fn(_,S),ca(_,S),sl(_,S),aa(_,S),il(_,S),Us(_,S),typeof S.didRender=="function"&&S.didRender(I())};function qs(){const _=s.innerParams.get(this);if(!_)return;const S=s.domCache.get(this);Pt(S.loader),bt()?_.icon&&Vt(mt()):Ae(S),jt([S.popup,S.actions],u.loading),S.popup.removeAttribute("aria-busy"),S.popup.removeAttribute("data-loading"),S.confirmButton.disabled=!1,S.denyButton.disabled=!1,S.cancelButton.disabled=!1}const Ae=_=>{const S=_.popup.getElementsByClassName(_.loader.getAttribute("data-button-to-replace"));S.length?Vt(S[0],"inline-block"):he()&&Pt(_.actions)};function Kt(_){const S=s.innerParams.get(_||this),R=s.domCache.get(_||this);return R?ut(R.popup,S.input):null}const yi=()=>Gt(I()),je=()=>Bt()&&Bt().click(),Ho=()=>Xt()&&Xt().click(),da=()=>Ce()&&Ce().click(),To=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Hi=_=>{_.keydownTarget&&_.keydownHandlerAdded&&(_.keydownTarget.removeEventListener("keydown",_.keydownHandler,{capture:_.keydownListenerCapture}),_.keydownHandlerAdded=!1)},co=(_,S,R,Q)=>{Hi(S),R.toast||(S.keydownHandler=vt=>Ir(_,vt,Q),S.keydownTarget=R.keydownListenerCapture?window:I(),S.keydownListenerCapture=R.keydownListenerCapture,S.keydownTarget.addEventListener("keydown",S.keydownHandler,{capture:S.keydownListenerCapture}),S.keydownHandlerAdded=!0)},Ui=(_,S,R)=>{const Q=re();if(Q.length)return S=S+R,S===Q.length?S=0:S===-1&&(S=Q.length-1),Q[S].focus();I().focus()},Dr=["ArrowRight","ArrowDown"],Mr=["ArrowLeft","ArrowUp"],Ir=(_,S,R)=>{const Q=s.innerParams.get(_);!Q||S.isComposing||S.keyCode===229||(Q.stopKeydownPropagation&&S.stopPropagation(),S.key==="Enter"?Yn(_,S,Q):S.key==="Tab"?ua(S,Q):[...Dr,...Mr].includes(S.key)?Uo(S.key):S.key==="Escape"&&ll(S,Q,R))},Yn=(_,S,R)=>{if(!!H(R.allowEnterKey)&&S.target&&_.getInput()&&S.target instanceof HTMLElement&&S.target.outerHTML===_.getInput().outerHTML){if(["textarea","file"].includes(R.input))return;je(),S.preventDefault()}},ua=(_,S)=>{const R=_.target,Q=re();let vt=-1;for(let le=0;le<Q.length;le++)if(R===Q[le]){vt=le;break}_.shiftKey?Ui(S,vt,-1):Ui(S,vt,1),_.stopPropagation(),_.preventDefault()},Uo=_=>{const S=Bt(),R=Xt(),Q=Ce();if(document.activeElement instanceof HTMLElement&&![S,R,Q].includes(document.activeElement))return;const vt=Dr.includes(_)?"nextElementSibling":"previousElementSibling";let le=document.activeElement;for(let Ye=0;Ye<hn().children.length;Ye++){if(le=le[vt],!le)return;if(le instanceof HTMLButtonElement&&Gt(le))break}le instanceof HTMLButtonElement&&le.focus()},ll=(_,S,R)=>{H(S.allowEscapeKey)&&(_.preventDefault(),R(To.esc))};var Wo={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const cl=()=>{Array.from(document.body.children).forEach(S=>{S===tt()||S.contains(tt())||(S.hasAttribute("aria-hidden")&&S.setAttribute("data-previous-aria-hidden",S.getAttribute("aria-hidden")),S.setAttribute("aria-hidden","true"))})},ha=()=>{Array.from(document.body.children).forEach(S=>{S.hasAttribute("data-previous-aria-hidden")?(S.setAttribute("aria-hidden",S.getAttribute("data-previous-aria-hidden")),S.removeAttribute("data-previous-aria-hidden")):S.removeAttribute("aria-hidden")})},Pr=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!ze(document.body,u.iosfix)){const S=document.body.scrollTop;document.body.style.top=`${S*-1}px`,gt(document.body,u.iosfix),ws(),Ci()}},Ci=()=>{const _=navigator.userAgent,S=!!_.match(/iPad/i)||!!_.match(/iPhone/i),R=!!_.match(/WebKit/i);S&&R&&!_.match(/CriOS/i)&&I().scrollHeight>window.innerHeight-44&&(tt().style.paddingBottom=`${44}px`)},ws=()=>{const _=tt();let S;_.ontouchstart=R=>{S=dl(R)},_.ontouchmove=R=>{S&&(R.preventDefault(),R.stopPropagation())}},dl=_=>{const S=_.target,R=tt();return ul(_)||hl(_)?!1:S===R||!ee(R)&&S instanceof HTMLElement&&S.tagName!=="INPUT"&&S.tagName!=="TEXTAREA"&&!(ee(Et())&&Et().contains(S))},ul=_=>_.touches&&_.touches.length&&_.touches[0].touchType==="stylus",hl=_=>_.touches&&_.touches.length>1,fl=()=>{if(ze(document.body,u.iosfix)){const _=parseInt(document.body.style.top,10);jt(document.body,u.iosfix),document.body.style.top="",document.body.scrollTop=_*-1}},_s=()=>{Yt.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(Yt.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Yt.previousBodyPadding+Ti()}px`)},qo=()=>{Yt.previousBodyPadding!==null&&(document.body.style.paddingRight=`${Yt.previousBodyPadding}px`,Yt.previousBodyPadding=null)};function Gs(_,S,R,Q){bt()?Nr(_,Q):(li(R).then(()=>Nr(_,Q)),Hi(ge)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(S.setAttribute("style","display:none !important"),S.removeAttribute("class"),S.innerHTML=""):S.remove(),nt()&&(qo(),fl(),ha()),fa()}function fa(){jt([document.documentElement,document.body],[u.shown,u["height-auto"],u["no-backdrop"],u["toast-shown"]])}function Go(_){_=Do(_);const S=Wo.swalPromiseResolve.get(this),R=pa(this);this.isAwaitingPromise()?_.isDismissed||(vs(this),S(_)):R&&S(_)}function ga(){return!!s.awaitingPromise.get(this)}const pa=_=>{const S=I();if(!S)return!1;const R=s.innerParams.get(_);if(!R||ze(S,R.hideClass.popup))return!1;jt(S,R.showClass.popup),gt(S,R.hideClass.popup);const Q=tt();return jt(Q,R.showClass.backdrop),gt(Q,R.hideClass.backdrop),ma(_,S,R),!0};function Br(_){const S=Wo.swalPromiseReject.get(this);vs(this),S&&S(_)}const vs=_=>{_.isAwaitingPromise()&&(s.awaitingPromise.delete(_),s.innerParams.get(_)||_._destroy())},Do=_=>typeof _>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},_),ma=(_,S,R)=>{const Q=tt(),vt=so&&Ie(S);typeof R.willClose=="function"&&R.willClose(S),vt?Yo(_,S,Q,R.returnFocus,R.didClose):Gs(_,Q,R.returnFocus,R.didClose)},Yo=(_,S,R,Q,vt)=>{ge.swalCloseEventFinishedCallback=Gs.bind(null,_,R,Q,vt),S.addEventListener(so,function(le){le.target===S&&(ge.swalCloseEventFinishedCallback(),delete ge.swalCloseEventFinishedCallback)})},Nr=(_,S)=>{setTimeout(()=>{typeof S=="function"&&S.bind(_.params)(),_._destroy()})};function Mo(_,S,R){const Q=s.domCache.get(_);S.forEach(vt=>{Q[vt].disabled=R})}function ba(_,S){if(!!_)if(_.type==="radio"){const Q=_.parentNode.parentNode.querySelectorAll("input");for(let vt=0;vt<Q.length;vt++)Q[vt].disabled=S}else _.disabled=S}function Ko(){Mo(this,["confirmButton","denyButton","cancelButton"],!1)}function gl(){Mo(this,["confirmButton","denyButton","cancelButton"],!0)}function w(){ba(this.getInput(),!1)}function T(){ba(this.getInput(),!0)}function B(_){const S=s.domCache.get(this),R=s.innerParams.get(this);de(S.validationMessage,_),S.validationMessage.className=u["validation-message"],R.customClass&&R.customClass.validationMessage&&gt(S.validationMessage,R.customClass.validationMessage),Vt(S.validationMessage);const Q=this.getInput();Q&&(Q.setAttribute("aria-invalid",!0),Q.setAttribute("aria-describedby",u["validation-message"]),xt(Q),gt(Q,u.inputerror))}function O(){const _=s.domCache.get(this);_.validationMessage&&Pt(_.validationMessage);const S=this.getInput();S&&(S.removeAttribute("aria-invalid"),S.removeAttribute("aria-describedby"),jt(S,u.inputerror))}const j={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},F=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],q={},lt=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],it=_=>Object.prototype.hasOwnProperty.call(j,_),wt=_=>F.indexOf(_)!==-1,At=_=>q[_],Ut=_=>{it(_)||C(`Unknown parameter "${_}"`)},Ct=_=>{lt.includes(_)&&C(`The parameter "${_}" is incompatible with toasts`)},Tt=_=>{At(_)&&z(_,At(_))},be=_=>{_.backdrop===!1&&_.allowOutsideClick&&C('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const S in _)Ut(S),_.toast&&Ct(S),Tt(S)};function Te(_){const S=I(),R=s.innerParams.get(this);if(!S||ze(S,R.hideClass.popup)){C("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const Q=pe(_),vt=Object.assign({},R,Q);So(this,vt),s.innerParams.set(this,vt),Object.defineProperties(this,{params:{value:Object.assign({},this.params,_),writable:!1,enumerable:!0}})}const pe=_=>{const S={};return Object.keys(_).forEach(R=>{wt(R)?S[R]=_[R]:C(`Invalid parameter to update: ${R}`)}),S};function Bn(){const _=s.domCache.get(this),S=s.innerParams.get(this);if(!S){di(this);return}_.popup&&ge.swalCloseEventFinishedCallback&&(ge.swalCloseEventFinishedCallback(),delete ge.swalCloseEventFinishedCallback),typeof S.didDestroy=="function"&&S.didDestroy(),_n(this)}const _n=_=>{di(_),delete _.params,delete ge.keydownHandler,delete ge.keydownTarget,delete ge.currentInstance},di=_=>{_.isAwaitingPromise()?(tn(s,_),s.awaitingPromise.set(_,!0)):(tn(Wo,_),tn(s,_))},tn=(_,S)=>{for(const R in _)_[R].delete(S)};var De=Object.freeze({__proto__:null,hideLoading:qs,disableLoading:qs,getInput:Kt,close:Go,isAwaitingPromise:ga,rejectPromise:Br,handleAwaitingPromise:vs,closePopup:Go,closeModal:Go,closeToast:Go,enableButtons:Ko,disableButtons:gl,enableInput:w,disableInput:T,showValidationMessage:B,resetValidationMessage:O,update:Te,_destroy:Bn});const vn=_=>{let S=I();S||new N,S=I();const R=Wt();bt()?Pt(mt()):Ue(S,_),Vt(R),S.setAttribute("data-loading","true"),S.setAttribute("aria-busy","true"),S.focus()},Ue=(_,S)=>{const R=hn(),Q=Wt();!S&&Gt(Bt())&&(S=Bt()),Vt(R),S&&(Pt(S),Q.setAttribute("data-button-to-replace",S.className)),Q.parentNode.insertBefore(Q,S),gt([_,R],u.loading)},yn=(_,S)=>{S.input==="select"||S.input==="radio"?no(_,S):["text","email","number","tel","textarea"].includes(S.input)&&(Z(S.inputValue)||W(S.inputValue))&&(vn(Bt()),hi(_,S))},Qo=(_,S)=>{const R=_.getInput();if(!R)return null;switch(S.input){case"checkbox":return ys(R);case"radio":return ui(R);case"file":return uo(R);default:return S.inputAutoTrim?R.value.trim():R.value}},ys=_=>_.checked?1:0,ui=_=>_.checked?_.value:null,uo=_=>_.files.length?_.getAttribute("multiple")!==null?_.files:_.files[0]:null,no=(_,S)=>{const R=I(),Q=vt=>{Ai[S.input](R,Kn(vt),S)};Z(S.inputOptions)||W(S.inputOptions)?(vn(Bt()),U(S.inputOptions).then(vt=>{_.hideLoading(),Q(vt)})):typeof S.inputOptions=="object"?Q(S.inputOptions):x(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof S.inputOptions}`)},hi=(_,S)=>{const R=_.getInput();Pt(R),U(S.inputValue).then(Q=>{R.value=S.input==="number"?`${parseFloat(Q)||0}`:`${Q}`,Vt(R),R.focus(),_.hideLoading()}).catch(Q=>{x(`Error in inputValue promise: ${Q}`),R.value="",Vt(R),R.focus(),_.hideLoading()})},Ai={select:(_,S,R)=>{const Q=Jt(_,u.select),vt=(le,Ye,mi)=>{const si=document.createElement("option");si.value=mi,de(si,Ye),si.selected=Di(mi,R.inputValue),le.appendChild(si)};S.forEach(le=>{const Ye=le[0],mi=le[1];if(Array.isArray(mi)){const si=document.createElement("optgroup");si.label=Ye,si.disabled=!1,Q.appendChild(si),mi.forEach(Ca=>vt(si,Ca[1],Ca[0]))}else vt(Q,mi,Ye)}),Q.focus()},radio:(_,S,R)=>{const Q=Jt(_,u.radio);S.forEach(le=>{const Ye=le[0],mi=le[1],si=document.createElement("input"),Ca=document.createElement("label");si.type="radio",si.name=u.radio,si.value=Ye,Di(Ye,R.inputValue)&&(si.checked=!0);const rc=document.createElement("span");de(rc,mi),rc.className=u.label,Ca.appendChild(si),Ca.appendChild(rc),Q.appendChild(Ca)});const vt=Q.querySelectorAll("input");vt.length&&vt[0].focus()}},Kn=_=>{const S=[];return typeof Map<"u"&&_ instanceof Map?_.forEach((R,Q)=>{let vt=R;typeof vt=="object"&&(vt=Kn(vt)),S.push([Q,vt])}):Object.keys(_).forEach(R=>{let Q=_[R];typeof Q=="object"&&(Q=Kn(Q)),S.push([R,Q])}),S},Di=(_,S)=>S&&S.toString()===_.toString(),Ys=_=>{const S=s.innerParams.get(_);_.disableButtons(),S.input?Qe(_,"confirm"):Zo(_,!0)},ho=_=>{const S=s.innerParams.get(_);_.disableButtons(),S.returnInputValueOnDeny?Qe(_,"deny"):Cs(_,!1)},Ks=(_,S)=>{_.disableButtons(),S(To.cancel)},Qe=(_,S)=>{const R=s.innerParams.get(_);if(!R.input){x(`The "input" parameter is needed to be set when using returnInputValueOn${k(S)}`);return}const Q=Qo(_,R);R.inputValidator?fo(_,Q,S):_.getInput().checkValidity()?S==="deny"?Cs(_,Q):Zo(_,Q):(_.enableButtons(),_.showValidationMessage(R.validationMessage))},fo=(_,S,R)=>{const Q=s.innerParams.get(_);_.disableInput(),Promise.resolve().then(()=>U(Q.inputValidator(S,Q.validationMessage))).then(le=>{_.enableButtons(),_.enableInput(),le?_.showValidationMessage(le):R==="deny"?Cs(_,S):Zo(_,S)})},Cs=(_,S)=>{const R=s.innerParams.get(_||void 0);R.showLoaderOnDeny&&vn(Xt()),R.preDeny?(s.awaitingPromise.set(_||void 0,!0),Promise.resolve().then(()=>U(R.preDeny(S,R.validationMessage))).then(vt=>{vt===!1?(_.hideLoading(),vs(_)):_.close({isDenied:!0,value:typeof vt>"u"?S:vt})}).catch(vt=>ka(_||void 0,vt))):_.close({isDenied:!0,value:S})},As=(_,S)=>{_.close({isConfirmed:!0,value:S})},ka=(_,S)=>{_.rejectPromise(S)},Zo=(_,S)=>{const R=s.innerParams.get(_||void 0);R.showLoaderOnConfirm&&vn(),R.preConfirm?(_.resetValidationMessage(),s.awaitingPromise.set(_||void 0,!0),Promise.resolve().then(()=>U(R.preConfirm(S,R.validationMessage))).then(vt=>{Gt(Nt())||vt===!1?(_.hideLoading(),vs(_)):As(_,typeof vt>"u"?S:vt)}).catch(vt=>ka(_||void 0,vt))):As(_,S)},pl=(_,S,R)=>{s.innerParams.get(_).toast?wa(_,S,R):(ml(S),Qs(S),Zs(_,S,R))},wa=(_,S,R)=>{S.popup.onclick=()=>{const Q=s.innerParams.get(_);Q&&(go(Q)||Q.timer||Q.input)||R(To.close)}},go=_=>_.showConfirmButton||_.showDenyButton||_.showCancelButton||_.showCloseButton;let io=!1;const ml=_=>{_.popup.onmousedown=()=>{_.container.onmouseup=function(S){_.container.onmouseup=void 0,S.target===_.container&&(io=!0)}}},Qs=_=>{_.container.onmousedown=()=>{_.popup.onmouseup=function(S){_.popup.onmouseup=void 0,(S.target===_.popup||_.popup.contains(S.target))&&(io=!0)}}},Zs=(_,S,R)=>{S.container.onclick=Q=>{const vt=s.innerParams.get(_);if(io){io=!1;return}Q.target===S.container&&H(vt.allowOutsideClick)&&R(To.backdrop)}},Js=_=>typeof _=="object"&&_.jquery,Xs=_=>_ instanceof Element||Js(_),xs=_=>{const S={};return typeof _[0]=="object"&&!Xs(_[0])?Object.assign(S,_[0]):["title","html","icon"].forEach((R,Q)=>{const vt=_[Q];typeof vt=="string"||Xs(vt)?S[R]=vt:vt!==void 0&&x(`Unexpected type of ${R}! Expected "string" or "Element", got ${typeof vt}`)}),S};function bl(){const _=this;for(var S=arguments.length,R=new Array(S),Q=0;Q<S;Q++)R[Q]=arguments[Q];return new _(...R)}function tr(_){class S extends this{_main(Q,vt){return super._main(Q,Object.assign({},_,vt))}}return S}const Mi=()=>ge.timeout&&ge.timeout.getTimerLeft(),Wi=()=>{if(ge.timeout)return rn(),ge.timeout.stop()},er=()=>{if(ge.timeout){const _=ge.timeout.start();return Se(_),_}},Jo=()=>{const _=ge.timeout;return _&&(_.running?Wi():er())},nr=_=>{if(ge.timeout){const S=ge.timeout.increase(_);return Se(S,!0),S}},kl=()=>ge.timeout&&ge.timeout.isRunning();let Ze=!1;const Xo={};function xi(){let _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";Xo[_]=this,Ze||(document.body.addEventListener("click",Ii),Ze=!0)}const Ii=_=>{for(let S=_.target;S&&S!==document;S=S.parentNode)for(const R in Xo){const Q=S.getAttribute(R);if(Q){Xo[R].fire({template:Q});return}}};var ir=Object.freeze({__proto__:null,isValidParameter:it,isUpdatableParameter:wt,isDeprecatedParameter:At,argsToParams:xs,getContainer:tt,getPopup:I,getTitle:_t,getHtmlContainer:Et,getImage:Lt,getIcon:mt,getIconContent:pt,getInputLabel:te,getCloseButton:Je,getActions:hn,getConfirmButton:Bt,getDenyButton:Xt,getCancelButton:Ce,getLoader:Wt,getFooter:pn,getTimerProgressBar:Re,getFocusableElements:re,getValidationMessage:Nt,getProgressSteps:X,isLoading:St,isVisible:yi,clickConfirm:je,clickDeny:Ho,clickCancel:da,fire:bl,mixin:tr,showLoading:vn,enableLoading:vn,getTimerLeft:Mi,stopTimer:Wi,resumeTimer:er,toggleTimer:Jo,increaseTimer:nr,isTimerRunning:kl,bindClickHandler:xi});class Or{constructor(S,R){this.callback=S,this.remaining=R,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(S){const R=this.running;return R&&this.stop(),this.remaining+=S,R&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const _a=["swal-title","swal-html","swal-footer"],va=_=>{const S=typeof _.template=="string"?document.querySelector(_.template):_.template;if(!S)return{};const R=S.content;return ya(R),Object.assign(or(R),po(R),nn(R),sr(R),Es(R),Pi(R),rr(R,_a))},or=_=>{const S={};return Array.from(_.querySelectorAll("swal-param")).forEach(Q=>{qi(Q,["name","value"]);const vt=Q.getAttribute("name"),le=Q.getAttribute("value");typeof j[vt]=="boolean"?S[vt]=le!=="false":typeof j[vt]=="object"?S[vt]=JSON.parse(le):S[vt]=le}),S},po=_=>{const S={};return Array.from(_.querySelectorAll("swal-function-param")).forEach(Q=>{const vt=Q.getAttribute("name"),le=Q.getAttribute("value");S[vt]=new Function(`return ${le}`)()}),S},nn=_=>{const S={};return Array.from(_.querySelectorAll("swal-button")).forEach(Q=>{qi(Q,["type","color","aria-label"]);const vt=Q.getAttribute("type");S[`${vt}ButtonText`]=Q.innerHTML,S[`show${k(vt)}Button`]=!0,Q.hasAttribute("color")&&(S[`${vt}ButtonColor`]=Q.getAttribute("color")),Q.hasAttribute("aria-label")&&(S[`${vt}ButtonAriaLabel`]=Q.getAttribute("aria-label"))}),S},sr=_=>{const S={},R=_.querySelector("swal-image");return R&&(qi(R,["src","width","height","alt"]),R.hasAttribute("src")&&(S.imageUrl=R.getAttribute("src")),R.hasAttribute("width")&&(S.imageWidth=R.getAttribute("width")),R.hasAttribute("height")&&(S.imageHeight=R.getAttribute("height")),R.hasAttribute("alt")&&(S.imageAlt=R.getAttribute("alt"))),S},Es=_=>{const S={},R=_.querySelector("swal-icon");return R&&(qi(R,["type","color"]),R.hasAttribute("type")&&(S.icon=R.getAttribute("type")),R.hasAttribute("color")&&(S.iconColor=R.getAttribute("color")),S.iconHtml=R.innerHTML),S},Pi=_=>{const S={},R=_.querySelector("swal-input");R&&(qi(R,["type","label","placeholder","value"]),S.input=R.getAttribute("type")||"text",R.hasAttribute("label")&&(S.inputLabel=R.getAttribute("label")),R.hasAttribute("placeholder")&&(S.inputPlaceholder=R.getAttribute("placeholder")),R.hasAttribute("value")&&(S.inputValue=R.getAttribute("value")));const Q=Array.from(_.querySelectorAll("swal-input-option"));return Q.length&&(S.inputOptions={},Q.forEach(vt=>{qi(vt,["value"]);const le=vt.getAttribute("value"),Ye=vt.innerHTML;S.inputOptions[le]=Ye})),S},rr=(_,S)=>{const R={};for(const Q in S){const vt=S[Q],le=_.querySelector(vt);le&&(qi(le,[]),R[vt.replace(/^swal-/,"")]=le.innerHTML.trim())}return R},ya=_=>{const S=_a.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(_.children).forEach(R=>{const Q=R.tagName.toLowerCase();S.includes(Q)||C(`Unrecognized element <${Q}>`)})},qi=(_,S)=>{Array.from(_.attributes).forEach(R=>{S.indexOf(R.name)===-1&&C([`Unrecognized attribute "${R.name}" on <${_.tagName.toLowerCase()}>.`,`${S.length?`Allowed attributes are: ${S.join(", ")}`:"To set the value, use HTML within the element."}`])})},oi=10,fi=_=>{const S=tt(),R=I();typeof _.willOpen=="function"&&_.willOpen(R);const vt=window.getComputedStyle(document.body).overflowY;ft(S,R,_),setTimeout(()=>{K(S,R)},oi),nt()&&(ot(S,_.scrollbarPadding,vt),cl()),!bt()&&!ge.previousActiveElement&&(ge.previousActiveElement=document.activeElement),typeof _.didOpen=="function"&&setTimeout(()=>_.didOpen(R)),jt(S,u["no-transition"])},ar=_=>{const S=I();if(_.target!==S)return;const R=tt();S.removeEventListener(so,ar),R.style.overflowY="auto"},K=(_,S)=>{so&&Ie(S)?(_.style.overflowY="hidden",S.addEventListener(so,ar)):_.style.overflowY="auto"},ot=(_,S,R)=>{Pr(),S&&R!=="hidden"&&_s(),setTimeout(()=>{_.scrollTop=0})},ft=(_,S,R)=>{gt(_,R.showClass.backdrop),S.style.setProperty("opacity","0","important"),Vt(S,"grid"),setTimeout(()=>{gt(S,R.showClass.popup),S.style.removeProperty("opacity")},oi),gt([document.documentElement,document.body],u.shown),R.heightAuto&&R.backdrop&&!R.toast&&gt([document.documentElement,document.body],u["height-auto"])};var Mt={email:(_,S)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(_)?Promise.resolve():Promise.resolve(S||"Invalid email address"),url:(_,S)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(_)?Promise.resolve():Promise.resolve(S||"Invalid URL")};function kt(_){_.inputValidator||Object.keys(Mt).forEach(S=>{_.input===S&&(_.inputValidator=Mt[S])})}function Ot(_){(!_.target||typeof _.target=="string"&&!document.querySelector(_.target)||typeof _.target!="string"&&!_.target.appendChild)&&(C('Target parameter is not valid, defaulting to "body"'),_.target="body")}function zt(_){kt(_),_.showLoaderOnConfirm&&!_.preConfirm&&C(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Ot(_),typeof _.title=="string"&&(_.title=_.title.split(`
`).join("<br />")),Ee(_)}let Ht;class ie{constructor(){if(typeof window>"u")return;Ht=this;for(var S=arguments.length,R=new Array(S),Q=0;Q<S;Q++)R[Q]=arguments[Q];const vt=Object.freeze(this.constructor.argsToParams(R));Object.defineProperties(this,{params:{value:vt,writable:!1,enumerable:!0,configurable:!0}});const le=Ht._main(Ht.params);s.promise.set(this,le)}_main(S){let R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};be(Object.assign({},R,S)),ge.currentInstance&&(ge.currentInstance._destroy(),nt()&&ha()),ge.currentInstance=Ht;const Q=oe(S,R);zt(Q),Object.freeze(Q),ge.timeout&&(ge.timeout.stop(),delete ge.timeout),clearTimeout(ge.restoreFocusTimeout);const vt=ke(Ht);return So(Ht,Q),s.innerParams.set(Ht,Q),we(Ht,vt,Q)}then(S){return s.promise.get(this).then(S)}finally(S){return s.promise.get(this).finally(S)}}const we=(_,S,R)=>new Promise((Q,vt)=>{const le=Ye=>{_.close({isDismissed:!0,dismiss:Ye})};Wo.swalPromiseResolve.set(_,Q),Wo.swalPromiseReject.set(_,vt),S.confirmButton.onclick=()=>{Ys(_)},S.denyButton.onclick=()=>{ho(_)},S.cancelButton.onclick=()=>{Ks(_,le)},S.closeButton.onclick=()=>{le(To.close)},pl(_,S,le),co(_,ge,R,le),yn(_,R),fi(R),Me(ge,R,le),Ve(S,R),setTimeout(()=>{S.container.scrollTop=0})}),oe=(_,S)=>{const R=va(_),Q=Object.assign({},j,S,R,_);return Q.showClass=Object.assign({},j.showClass,Q.showClass),Q.hideClass=Object.assign({},j.hideClass,Q.hideClass),Q},ke=_=>{const S={popup:I(),container:tt(),actions:hn(),confirmButton:Bt(),denyButton:Xt(),cancelButton:Ce(),loader:Wt(),closeButton:Je(),validationMessage:Nt(),progressSteps:X()};return s.domCache.set(_,S),S},Me=(_,S,R)=>{const Q=Re();Pt(Q),S.timer&&(_.timeout=new Or(()=>{R("timer"),delete _.timeout},S.timer),S.timerProgressBar&&(Vt(Q),J(Q,S,"timerProgressBar"),setTimeout(()=>{_.timeout&&_.timeout.running&&Se(S.timer)})))},Ve=(_,S)=>{if(!S.toast){if(!H(S.allowEnterKey)){P();return}_e(_,S)||Ui(S,-1,1)}},_e=(_,S)=>S.focusDeny&&Gt(_.denyButton)?(_.denyButton.focus(),!0):S.focusCancel&&Gt(_.cancelButton)?(_.cancelButton.focus(),!0):S.focusConfirm&&Gt(_.confirmButton)?(_.confirmButton.focus(),!0):!1,P=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|xn--p1ai)$/)){const _=new Date,S=localStorage.getItem("swal-initiation");S?(_.getTime()-Date.parse(S))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const R=document.createElement("audio");R.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",R.loop=!0,document.body.appendChild(R),setTimeout(()=>{R.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${_}`)}Object.assign(ie.prototype,De),Object.assign(ie,ir),Object.keys(De).forEach(_=>{ie[_]=function(){if(Ht)return Ht[_](...arguments)}}),ie.DismissReason=To,ie.version="11.6.13";const N=ie;return N.default=N,N}),typeof Oo<"u"&&Oo.Sweetalert2&&(Oo.swal=Oo.sweetAlert=Oo.Swal=Oo.SweetAlert=Oo.Sweetalert2),typeof document<"u"&&function(s,r){var c=s.createElement("style");if(s.getElementsByTagName("head")[0].appendChild(c),c.styleSheet)c.styleSheet.disabled||(c.styleSheet.cssText=r);else try{c.innerHTML=r}catch{c.innerText=r}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:rgba(0,0,0,0) !important}.swal2-container.swal2-top-start,.swal2-container.swal2-center-start,.swal2-container.swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}.swal2-container.swal2-top,.swal2-container.swal2-center,.swal2-container.swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}.swal2-container.swal2-top-end,.swal2-container.swal2-center-end,.swal2-container.swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-start>.swal2-popup,.swal2-container.swal2-center-left>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-start>.swal2-popup,.swal2-container.swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-row>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none !important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:none}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:none}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:rgba(0,0,0,0);color:#f27474}.swal2-close:focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-input,.swal2-file,.swal2-textarea,.swal2-select,.swal2-radio,.swal2-checkbox{margin:1em 2em 3px}.swal2-input,.swal2-file,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-input.swal2-inputerror,.swal2-file.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}.swal2-input:focus,.swal2-file:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-input::placeholder,.swal2-file::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-radio,.swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-radio label,.swal2-checkbox label{margin:0 .6em;font-size:1.125em}.swal2-radio input,.swal2-checkbox input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}')})(Yx);const Wn=Yx.exports,bL={id:"login_container",class:"flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"},kL=E("div",{class:"grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"},[E("img",{src:Gx,class:"w-full",alt:"Sample image"})],-1),wL={class:"xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0"},_L=["onSubmit"],vL=E("p",{class:"text-lg mb-0 mr-4"},"\u0110\u0103ng nh\u1EADp b\u1EB1ng",-1),yL=E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",class:"w-4 h-4"},[E("path",{fill:"currentColor",d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"})],-1),CL=[yL],AL=E("button",{type:"button","data-mdb-ripple":"true","data-mdb-ripple-color":"light",class:"inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"},[E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 488 512",class:"w-4 h-4"},[E("path",{fill:"currentColor",d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"})])],-1),xL=E("div",{class:"flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"},[E("p",{class:"text-center font-semibold mx-4 mb-0"},"Ho\u1EB7c")],-1),EL={class:"mb-6"},SL={class:"mb-6"},TL={key:0,class:"py-3 px-4 bg-red-500 text-white rounded"},DL={class:"flex justify-between items-center mb-6"},ML={class:"form-group form-check"},IL=E("label",{class:"form-check-label inline-block text-gray-800",for:"saveaccount"},"Nh\u1EDB t\xE0i kho\u1EA3n",-1),PL=E("a",{href:"#!",class:"text-gray-800"},"Qu\xEAn m\u1EADt kh\u1EA9u?",-1),BL={class:"text-center lg:text-left"},NL=E("button",{type:"submit",class:"inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"}," \u0110\u0103ng nh\u1EADp ",-1),OL={class:"text-sm font-semibold mt-2 pt-1 mb-0"},LL={__name:"Login",setup(i){const n={username:"",password:"",remember:!1},s=ue(""),r=_i();function c(){Zt.dispatch("login",n).then(()=>{r.push({name:"Home"}),Wn.fire({icon:"success",text:"\u0110\u0103ng nh\u1EADp th\xE0nh c\xF4ng"})}).catch(g=>{s.value=g.response.data.error})}function u(){const g=f("","Logging in");Zt.dispatch("loginFb").then(p=>{p.data.url&&(g.location.href=p.data.url)}).catch(p=>{s.value=p.response.data.error})}Co(()=>{window.addEventListener("message",g=>{if(g.origin!="http://localhost:8000"||!g.data.token)return;var p=document.createElement("textarea");p.innerHTML=g.data.user;const k=JSON.parse(p.value),C={token:g.data.token,user:k};Zt.commit("setUser",C),r.push({name:"Home"})},!1)});function f(g,p,k={}){typeof g=="object"&&(k=g,g=""),k={url:g,title:p,width:600,height:720,...k};const C=window.screenLeft!==void 0?window.screenLeft:window.screen.left,x=window.screenTop!==void 0?window.screenTop:window.screen.top,v=window.innerWidth||document.documentElement.clientWidth||window.screen.width,M=window.innerHeight||document.documentElement.clientHeight||window.screen.height;k.left=v/2-k.width/2+C,k.top=M/2-k.height/2+x;const z=Object.keys(k).reduce((Z,U)=>(Z.push(`${U}=${k[U]}`),Z),[]).join(","),H=window.open(g,p,z);return window.focus&&H.focus(),H}return document.title="\u0110\u0103ng nh\u1EADp",(g,p)=>{const k=ps("router-link");return at(),ht("div",bL,[kL,E("div",wL,[E("form",{onSubmit:yr(c,["prevent"])},[E("div",{class:"flex flex-row items-center justify-center lg:justify-start"},[vL,E("button",{onClick:u,type:"button","data-mdb-ripple":"true","data-mdb-ripple-color":"light",class:"inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"},CL),AL]),xL,E("div",EL,[Le(E("input",{"onUpdate:modelValue":p[0]||(p[0]=C=>n.username=C),type:"text",class:"form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",id:"username",placeholder:"Nh\u1EADp t\xEAn t\xE0i kho\u1EA3n"},null,512),[[en,n.username]])]),E("div",SL,[Le(E("input",{"onUpdate:modelValue":p[1]||(p[1]=C=>n.password=C),type:"password",class:"form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",id:"password",placeholder:"Nh\u1EADp m\u1EADt kh\u1EA9u"},null,512),[[en,n.password]])]),s.value?(at(),ht("div",TL,Qt(s.value),1)):ne("",!0),E("div",DL,[E("div",ML,[Le(E("input",{"onUpdate:modelValue":p[2]||(p[2]=C=>n.remember=C),type:"checkbox",class:"form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer",id:"saveaccount"},null,512),[[xf,n.remember]]),IL]),PL]),E("div",BL,[NL,E("p",OL,[gn(" Ch\u01B0a c\xF3 t\xE0i kho\u1EA3n? "),He(k,{to:{name:"Registry"},class:"text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"},{default:pi(()=>[gn("\u0110\u0103ng k\xFD ngay")]),_:1})])])],40,_L)])])}}},RL={class:"flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"},zL=E("div",{class:"grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"},[E("img",{src:Gx,class:"w-full",alt:"Sample image"})],-1),jL={class:"xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0"},FL=E("p",{class:"text-lg mb-0 mr-4"},"\u0110\u0103ng k\xFD b\u1EB1ng",-1),$L=E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",class:"w-4 h-4"},[E("path",{fill:"currentColor",d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"})],-1),VL=[$L],HL=E("button",{type:"button","data-mdb-ripple":"true","data-mdb-ripple-color":"light",class:"inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"},[E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 488 512",class:"w-4 h-4"},[E("path",{fill:"currentColor",d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"})])],-1),UL=E("div",{class:"flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"},[E("p",{class:"text-center font-semibold mx-4 mb-0"},"Ho\u1EB7c")],-1),WL={class:"mb-6"},qL={class:"mb-6"},GL={class:"mb-6"},YL={class:"mb-6"},KL={key:0,class:"py-3 px-4 m-auto mt-5 mb-5 bg-red-500 text-white rounded"},QL={key:0},ZL={key:1},JL={key:2},XL={class:"text-center lg:text-left"},t7=E("button",{type:"submit",class:"inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"}," \u0110\u0103ng k\xFD ",-1),e7={class:"text-sm font-semibold mt-2 pt-1 mb-0"},n7={__name:"Registry",setup(i){const n=_i(),s=ue(),r={username:"",email:"",password:"",password_confirmation:""};function c(g){g.preventDefault(),Zt.dispatch("register",r).then(p=>{n.push({name:"Home"})}).catch(p=>{s.value=p.response.data.errors})}function u(){const g=f("","Logging in");Zt.dispatch("loginFb").then(p=>{p.data.url&&(g.location.href=p.data.url)}).catch(p=>{s.value=p.response.data.error})}Co(()=>{window.addEventListener("message",g=>{if(g.origin!="http://localhost:8000"||!g.data.token)return;var p=document.createElement("textarea");p.innerHTML=g.data.user;const k=JSON.parse(p.value),C={token:g.data.token,user:k};Zt.commit("setUser",C),n.push({name:"Home"})},!1)});function f(g,p,k={}){typeof g=="object"&&(k=g,g=""),k={url:g,title:p,width:600,height:720,...k};const C=window.screenLeft!==void 0?window.screenLeft:window.screen.left,x=window.screenTop!==void 0?window.screenTop:window.screen.top,v=window.innerWidth||document.documentElement.clientWidth||window.screen.width,M=window.innerHeight||document.documentElement.clientHeight||window.screen.height;k.left=v/2-k.width/2+C,k.top=M/2-k.height/2+x;const z=Object.keys(k).reduce((Z,U)=>(Z.push(`${U}=${k[U]}`),Z),[]).join(","),H=window.open(g,p,z);return window.focus&&H.focus(),H}return document.title="\u0110\u0103ng k\xFD",(g,p)=>{const k=ps("router-link");return at(),ht("div",RL,[zL,E("div",jL,[E("form",{onSubmit:c},[E("div",{class:"flex flex-row items-center justify-center lg:justify-start"},[FL,E("button",{type:"button",onClick:u,"data-mdb-ripple":"true","data-mdb-ripple-color":"light",class:"inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"},VL),HL]),UL,E("div",WL,[Le(E("input",{"onUpdate:modelValue":p[0]||(p[0]=C=>r.email=C),type:"email",class:"form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",id:"username",required:"",placeholder:"Nh\u1EADp \u0111\u1ECBa ch\u1EC9 email"},null,512),[[en,r.email]])]),E("div",qL,[Le(E("input",{"onUpdate:modelValue":p[1]||(p[1]=C=>r.username=C),type:"text",class:"form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",id:"username",required:"",placeholder:"Nh\u1EADp t\xEAn t\xE0i kho\u1EA3n"},null,512),[[en,r.username]])]),E("div",GL,[Le(E("input",{"onUpdate:modelValue":p[2]||(p[2]=C=>r.password=C),type:"password",class:"form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",id:"password",required:"",placeholder:"Nh\u1EADp m\u1EADt kh\u1EA9u"},null,512),[[en,r.password]])]),E("div",YL,[Le(E("input",{"onUpdate:modelValue":p[3]||(p[3]=C=>r.password_confirmation=C),type:"password",class:"form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",id:"password_again",required:"",placeholder:"Nh\u1EADp l\u1EA1i m\u1EADt kh\u1EA9u"},null,512),[[en,r.password_confirmation]])]),rt(s)?(at(),ht("div",KL,[rt(s).email?(at(),ht("div",QL,[(at(!0),ht(ve,null,$e(rt(s).email,(C,x)=>(at(),ht("div",{key:x},[E("span",null,"* "+Qt(C.replace("email \u0111\xE3 t\u1ED3n t\u1EA1i, vui l\xF2ng ch\u1ECDn t\xEAn kh\xE1c ho\u1EB7c ch\u1EC9nh s\u1EEDa game c\u0169","Email \u0111\xE3 \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng, vui l\xF2ng s\u1EED d\u1EE5ng Email kh\xE1c")),1)]))),128))])):ne("",!0),rt(s).username?(at(),ht("div",ZL,[(at(!0),ht(ve,null,$e(rt(s).username,(C,x)=>(at(),ht("div",{key:x},[E("span",null,"* "+Qt(C.replace("username \u0111\xE3 t\u1ED3n t\u1EA1i, vui l\xF2ng ch\u1ECDn t\xEAn kh\xE1c ho\u1EB7c ch\u1EC9nh s\u1EEDa game c\u0169","T\xEAn t\xE0i kho\u1EA3n \u0111\xE3 t\u1ED3n t\u1EA1i, vui l\xF2ng ch\u1ECDn t\xEAn kh\xE1c ho\u1EB7c \u0111\u0103ng nh\u1EADp t\xE0i kho\u1EA3n")),1)]))),128))])):ne("",!0),rt(s).password?(at(),ht("div",JL,[(at(!0),ht(ve,null,$e(rt(s).password,(C,x)=>(at(),ht("div",{key:x},[E("span",null,"* "+Qt(C.replace("password","M\u1EADt kh\u1EA9u")),1)]))),128))])):ne("",!0)])):ne("",!0),E("div",XL,[t7,E("p",e7,[gn(" \u0110\xE3 c\xF3 t\xE0i kho\u1EA3n? "),He(k,{to:{name:"Login"},class:"text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"},{default:pi(()=>[gn("\u0110\u0103ng nh\u1EADp ngay")]),_:1})])])],32)])])}}},i7="/assets/logo_text_ngang.607e7b19.png",o7="/assets/logo_text_nonbg.b90a7534.png";const s7={setup(){const i=_i(),n=Xa();let s=ue(),r=ue(!1),c=ue(!1);function u(){r.value=!r.value}function f(){c.value=!c.value}function g(){Zt.dispatch("logout").then(()=>{Wn.fire({icon:"success",text:"\u0110\u0103ng xu\u1EA5t th\xE0nh c\xF4ng"}),n.name=="Profile"&&i.push({name:"Home"})})}const p={key:""};function k(){for(var v=p.key.trim(),M=0;M<v.length;M++)if(v[M]==" "&&v[M+1]==" "){for(var z=M+1;z<v.length-1;z++)v[z]=v[z+1];v[z+1]=" "}v=v.trim();for(var M=0;M<v.length;M++)v[M]==" "&&(v=v.replace(" ","+"));i.push({name:"Search",params:{keyword:v}}).then(()=>{p.key=""})}const C=ai(()=>Zt.state.user.data.avatar_url,()=>sessionStorage.getItem("avatar_url")),x=ai(()=>Zt.state.theloais);return Zt.dispatch("getTheLoais").then(()=>{s=parseInt(x.value.length)/5}),$("#game").on("mouseover",function(v){alert("dm"),$("#gameTable").addClass("hover")}),{open:r,menuopen:u,show:c,showuser:f,logout:g,store:Zt,router:i,theloais:x,route:n,keyword:p,search:k,avatar_url:C,length:s}}},r7={id:"navbar",class:"text-white border-gray-200 px-2 sm:px-4 py-2.5 rounded md:flex md:items-center relative"},a7=E("span",{class:"text-xl font-[Poppins] cursor-pointer"},[E("img",{class:"h-14 inline",src:i7,alt:""})],-1),l7=[a7],c7=E("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"},null,-1),d7=[c7],u7=E("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),h7=[u7],f7={class:"my-6 md:my-0"},g7={id:"game",class:"my-6 md:my-0 group relative"},p7={id:"gameTable",class:"absolute top-7 hidden pt-1 group-hover:block rounded z-50"},m7={class:"my-6 md:my-0"},b7={class:"my-6 md:my-0"},k7=E("button",{type:"submit",class:"flex absolute pl-3 py-3 cursor-pointer"},[E("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},[E("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})])],-1),w7={class:"cursor-pointer flex justify-end"},_7=["src"],v7={class:""},y7={class:""},C7={key:1},A7=E("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-7 h-7"},[E("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"})],-1),x7={key:2,class:"md:hidden block"},E7={key:3,class:"md:hidden block"},S7={key:4,class:"md:hidden block mx-8"},T7=P2('<div class="footer p-10 mt-20"><div class="flex"><div class="w-96"><img src="'+o7+'" alt=""></div><div class="ml-5"><div>ChillyGaming l\xE0 website ch\u01A1i game tr\u1EF1c tuy\u1EBFn mi\u1EC5n ph\xED v\u1EDBi \u0111a d\u1EA1ng c\xE1c t\u1EF1a game, c\xF9ng v\u1EDBi \u0111\xF3 l\xE0 tr\u1EA3i nghi\u1EC7m m\u01B0\u1EE3t m\xE0 mang \u0111\u1EBFn cho b\u1EA1n nh\u1EEFng gi\xE2y ph\xFAt gi\u1EA3i tr\xED tho\u1EA3i m\xE1i nh\u1EA5t. Ngo\xE0i ra, ChillyGaming c\xF2n cung c\u1EA5p nh\u1EEFng th\xF4ng tin v\u1EC1 Game m\u1EDBi nh\u1EA5t, \u0111\u1EA7y \u0111\u1EE7 nh\u1EA5t, gi\xFAp b\u1EA1n \u0111\u1ECDc n\u1EAFm b\u1EAFt \u0111\u01B0\u1EE3c nh\u1EEFng s\u1EF1 ki\u1EC7n n\xF3ng h\u1ED5i nh\u1EA5t. <br> S\u1EF1 h\xE0i l\xF2ng c\u1EE7a c\xE1c b\u1EA1n l\xE0 ni\u1EC1m vui c\u1EE7a ch\xFAng t\xF4i <span class="text-xl align-middle text-rose-600">\u2665</span></div><div class="flex items-center justify-between w-1/3 mt-5">Li\xEAn h\u1EC7 v\u1EDBi ch\xFAng t\xF4i: <a href="https://www.facebook.com/phongngo224"><svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" fill="#3b5998" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg></a><a href="mailto: phongnd.21ad@vku.udn.vn"><svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" fill="#dc4e41" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path></svg></a></div><div class="mt-5"> Make by Ng\xF4 Phong - Ph\u1EA1m Th\xFAy </div></div></div></div>',1);function D7(i,n,s,r,c,u){const f=ps("router-link"),g=ps("router-view");return at(),ht("div",null,[E("nav",r7,[E("div",{onClick:n[0]||(n[0]=p=>r.router.push({name:"Home"})),class:"mx-5 w-full md:w-1/5"},l7),E("span",{onClick:n[1]||(n[1]=p=>r.menuopen()),class:"border rounded absolute md:hidden right-6 top-4 cursor-pointer"},[(at(),ht("svg",{class:Jr([[r.open?"hidden":"block"],"w-6 h-6"]),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},d7,2)),(at(),ht("svg",{class:Jr([[r.open?"block":"hidden"],"w-6 h-6"]),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},h7,2))]),E("ul",{id:"ul_navbar",class:Jr(["p-4 md:p-0 my-2 md:my-0 md:flex md:items-center md:justify-between lg:ml-32 z-[999] rounded md:z-auto md:static absolute w-full top-12 duration-300 ease-in",[r.open?"left-0":"left-[-110%]"]])},[E("li",f7,[He(f,{to:{name:"Home"},class:"text-xl hover:text-cyan-500 duration-300","active-class":"active px-5 py-3 rounded"},{default:pi(()=>[gn("Trang ch\u1EE7")]),_:1})]),E("li",g7,[He(f,{to:{name:"Games"},class:"text-xl hover:text-cyan-500 duration-300","active-class":"px-5 py-3 rounded active"},{default:pi(()=>[gn("Games")]),_:1}),E("table",p7,[(at(!0),ht(ve,null,$e(parseInt(r.theloais.length/4)+1,p=>(at(),ht("tr",{key:p},[(at(!0),ht(ve,null,$e(r.theloais.slice((p-1)*4,p*4),k=>(at(),ht("td",{key:k.id},[He(f,{to:{name:"Games_TheLoai",params:{slug:k.slug}},class:"rounded text-center hover:bg-cyan-800 py-2 px-4 block whitespace-no-wrap"},{default:pi(()=>[gn(Qt(k.tentheloai),1)]),_:2},1032,["to"])]))),128))]))),128))])]),E("li",m7,[He(f,{to:{name:"Articles"},class:"text-xl hover:text-cyan-500 duration-300","active-class":"active px-5 py-3 rounded"},{default:pi(()=>[gn("Tin t\u1EE9c")]),_:1})]),E("li",b7,[E("form",{onSubmit:n[3]||(n[3]=yr((...p)=>r.search&&r.search(...p),["prevent"]))},[k7,Le(E("input",{type:"text","onUpdate:modelValue":n[2]||(n[2]=p=>r.keyword.key=p),class:"block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-sky-900 dark:border-sky-900 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"T\xECm ki\u1EBFm..."},null,512),[[en,r.keyword.key]])],32)]),r.store.state.user.token?(at(),ht("li",{key:0,onClick:n[5]||(n[5]=(...p)=>r.showuser&&r.showuser(...p)),class:"mx-10 md:mx-2 my-6 md:my-0 hidden md:block"},[E("div",w7,[E("img",{class:"rounded-full w-10 h-10 object-cover",src:"http://localhost:8000/storage/images/profile/"+r.avatar_url,alt:""},null,8,_7)]),E("ul",{id:"ul_user",class:Jr([[r.show?"block":"hidden"],"absolute right-0 top-15 dark:bg-gray-900 pt-1 rounded"])},[E("li",v7,[He(f,{to:{name:"Profile"},class:"rounded-t hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"},{default:pi(()=>[gn("H\u1ED3 s\u01A1 c\xE1 nh\xE2n")]),_:1})]),E("li",y7,[E("a",{onClick:n[4]||(n[4]=(...p)=>r.logout&&r.logout(...p)),class:"hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer"},"\u0110\u0103ng xu\u1EA5t")])],2)])):(at(),ht("li",C7,[He(f,{to:{name:"Login"},class:"mx-10 md:mx-4 my-6 md:my-0 hidden md:block"},{default:pi(()=>[A7]),_:1})])),r.store.state.user.token?(at(),ht("li",x7,[He(f,{to:{name:"Profile"},class:"rounded-t hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"},{default:pi(()=>[gn("H\u1ED3 s\u01A1 c\xE1 nh\xE2n")]),_:1})])):ne("",!0),r.store.state.user.token?(at(),ht("li",E7,[E("a",{onClick:n[6]||(n[6]=(...p)=>r.logout&&r.logout(...p)),class:"hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer"},"\u0110\u0103ng xu\u1EA5t")])):ne("",!0),r.store.state.user.token?ne("",!0):(at(),ht("li",S7,[E("span",{onClick:n[7]||(n[7]=p=>r.router.push({name:"Login"})),class:"mx-2 text-xl"},"\u0110\u0103ng nh\u1EADp")]))],2)]),(at(),hs(g,{key:r.route.path})),T7])}const M7=fb(s7,[["render",D7]]),I7={name:"AuthLayout"},P7={class:"h-screen"},B7={class:"px-6 h-full text-gray-800"};function N7(i,n,s,r,c,u){const f=ps("router-view");return at(),ht("section",P7,[E("div",B7,[He(f)])])}const O7=fb(I7,[["render",N7]]),L7={class:"text-3xl font-bold tracking-tight text-gray-900 text-center"},R7={key:0,class:"hidden md:block border-dashed border-2 border-sky-500 rounded-xl p-4 text-center mb-5"},z7={key:1,class:"flex justify-end items-center"},j7=E("span",{class:"mr-3"},"S\u1EAFp x\u1EBFp theo",-1),F7=["value"],$7={key:2,class:"text-center text-xl font-medium mt-2"},V7={class:"mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4"},H7={key:0,class:"mt-10"},U7={class:"flex items-center justify-evenly"},W7=E("input",{class:"hidden",type:"radio",name:"check",id:"first"},null,-1),q7=E("label",{class:"text-2xl border-2 px-3 rounded-xl",for:"first"},"\xAB",-1),G7=[W7,q7],Y7=["onClick"],K7=["id"],Q7=["for"],Z7=E("input",{class:"hidden",type:"radio",name:"check",id:"last"},null,-1),J7=E("label",{class:"text-2xl border-2 px-3 rounded-xl",for:"last"},"\xBB",-1),X7=[Z7,J7],Rp={__name:"Games",setup(i){const n=Xa();let s=ue([]),r=ue(""),c=ue(""),u=[{name:"L\u01B0\u1EE3t ch\u01A1i",value:"soluotchoi"},{name:"T\xEAn",value:"tengame"},{name:"\u0110\xE1nh gi\xE1",value:"danhgia"}],f=ue("id");const g=ue({});function p(){let C={sort:f.value,id_theloai:0};if(!n.params.keyword)n.params.slug?Zt.dispatch("getTheloaiBySlug",n.params.slug).then(x=>{r.value=x.data.data[0].tentheloai,c.value=x.data.data[0].mota,C.id_theloai=x.data.data[0].id}).then(()=>{Zt.dispatch("getGamesSortTheloai",C).then(x=>{s.value=x.data.data,g.value={last_page:x.data.meta.last_page,path_page:x.data.meta.path+"?page=",first_link:x.data.links.first,last_link:x.data.links.last}})}):(r.value="Games",c.value="",Zt.dispatch("getGamesSortTheloai",C).then(x=>{s.value=x.data.data,g.value={last_page:x.data.meta.last_page,path_page:x.data.meta.path+"?page=",first_link:x.data.links.first,last_link:x.data.links.last}}));else{let x={sort:f.value,keyword:n.params.keyword};Zt.dispatch("getGamesSearchSort",x).then(v=>{s.value=v.data.data,g.value={last_page:v.data.meta.last_page,path_page:v.data.meta.path+"?page=",first_link:v.data.links.first,last_link:v.data.links.last}})}}n.params.keyword?(Zt.dispatch("search",n.params.keyword).then(C=>{s.value=C.data.data,g.value={last_page:C.data.meta.last_page,path_page:C.data.meta.path+"?page=",first_link:C.data.links.first,last_link:C.data.links.last}}),r.value="Games",c.value=""):p();function k(C){tl.get(C).then(x=>{s.value=x.data.data})}return document.title="Chilly Gaming - Games",(C,x)=>(at(),hs(gb,null,{header:pi(()=>[E("h1",L7,Qt(rt(r)),1)]),default:pi(()=>[E("div",null,[rt(c)?(at(),ht("div",R7,Qt(rt(c)),1)):ne("",!0),rt(s).length!=0?(at(),ht("div",z7,[j7,Le(E("select",{onChange:p,"onUpdate:modelValue":x[0]||(x[0]=v=>Dn(f)?f.value=v:f=v),class:"px-4 py-0 w-32 bg-gray-200 rounded",name:"",id:""},[(at(!0),ht(ve,null,$e(rt(u),v=>(at(),ht("option",{value:v.value,key:v.value},Qt(v.name),9,F7))),128))],544),[[Ji,rt(f)]])])):ne("",!0),rt(s).length==0?(at(),ht("div",$7,"Kh\xF4ng t\xECm th\u1EA5y Game li\xEAn quan")):ne("",!0),E("div",V7,[(at(!0),ht(ve,null,$e(rt(s),v=>(at(),hs(Oh,{key:v.id,game:v},null,8,["game"]))),128))])]),g.value?(at(),ht("div",H7,[E("ul",U7,[E("li",null,[E("button",{onClick:x[1]||(x[1]=v=>k(g.value.first_link))},G7)]),(at(!0),ht(ve,null,$e(g.value.last_page,v=>(at(),ht("li",{key:v},[E("button",{onClick:M=>k(g.value.path_page+v)},[E("input",{class:"hidden",type:"radio",name:"check",id:v},null,8,K7),E("label",{class:"border-2 px-3 rounded-xl",for:v},Qt(v),9,Q7)],8,Y7)]))),128)),E("li",null,[E("button",{onClick:x[2]||(x[2]=v=>k(g.value.last_link))},X7)])])])):ne("",!0)]),_:1}))}};const tR={class:"flex items-center justify-between"},eR={class:"font-semibold text-xl"},nR={class:"text-xl relative"},iR=E("span",{class:"absolute bottom-2"},"+",-1),oR={class:"game_container border-y-2 border-sky-300"},sR={class:"iframe-container"},rR=["src"],aR={class:"chucnang pb-2 px-10"},lR={class:"feature_main flex justify-between mt-3"},cR=E("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"#00B2EE",class:"w-6 h-6"},[E("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"})],-1),dR=E("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"#00B2EE",class:"w-6 h-6"},[E("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"})],-1),uR=E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"#00FF00",class:"w-6 h-6"},[E("path",{"fill-rule":"evenodd",d:"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z","clip-rule":"evenodd"})],-1),hR=E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"#FFD700",class:"w-6 h-6"},[E("path",{"fill-rule":"evenodd",d:"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z","clip-rule":"evenodd"})],-1),fR=E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"#FFD700",class:"w-6 h-6"},[E("path",{"fill-rule":"evenodd",d:"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z","clip-rule":"evenodd"})],-1),gR=E("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#FF0000",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[E("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"})],-1),pR={class:"luotchoi mt-5"},mR={class:"flex items-center feature_others"},bR={class:"vote flex items-center justify-between w-1/2"},kR={class:"positive flex justify-around items-center"},wR=E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"#008B00",class:"w-6 h-6 ml-2"},[E("path",{d:"M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z"})],-1),_R={class:"mx-3"},vR={class:"negative flex justify-around items-center"},yR=E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"#FF3030",class:"w-6 h-6 ml-2"},[E("path",{d:"M15.73 5.25h1.035A7.465 7.465 0 0118 9.375a7.465 7.465 0 01-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 01-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.498 4.498 0 00-.322 1.672V21a.75.75 0 01-.75.75 2.25 2.25 0 01-2.25-2.25c0-1.152.26-2.243.723-3.218C7.74 15.724 7.366 15 6.748 15H3.622c-1.026 0-1.945-.694-2.054-1.715A12.134 12.134 0 011.5 12c0-2.848.992-5.464 2.649-7.521.388-.482.987-.729 1.605-.729H9.77a4.5 4.5 0 011.423.23l3.114 1.04a4.5 4.5 0 001.423.23zM21.669 13.773c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.959 8.959 0 01-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227z"})],-1),CR={class:"mx-3"},AR=["src"],xR={class:"game_information border-2 border-sky-300 rounded-xl mt-5 p-5"},ER=E("h4",{class:"font-semibold"},"CHI TI\u1EBET GAME",-1),SR=["innerHTML"],TR={class:"mt-5",id:"hinhanh"},DR={class:"relative w-4/5 mx-auto mt-5"},MR={class:"slide relative"},IR=["src"],PR={class:"slide relative"},BR=["src"],NR={class:"slide relative"},OR=["src"],LR={class:"slide relative"},RR=["src"],zR={class:"others flex border-2 border-sky-300 rounded-xl mt-5 p-5"},jR={class:"comment basis-3/4 pr-20"},FR={key:0,class:""},$R=E("h4",{class:"text-lg font-medium"},"\u0110\u1EC3 l\u1EA1i b\xECnh lu\u1EADn c\u1EE7a b\u1EA1n t\u1EA1i \u0111\xE2y",-1),VR={class:"rounded-lg mt-3 bg-gray-50 border border-gray-200"},HR={key:1},UR=E("div",{class:"flex justify-center"},[E("span",{class:"font-semibold text-lg"},"Vui l\xF2ng \u0111\u0103ng nh\u1EADp \u0111\u1EC3 b\xECnh lu\u1EADn")],-1),WR={class:"flex justify-center mt-2"},qR={class:"w-2/4 flex justify-around"},GR={class:"rounded bg-gray-50"},YR={class:"p-3 bg-gray-200"},KR={class:"w-1/5 flex justify-between items-center"},QR=["src"],ZR={key:0,class:"font-bold"},JR={key:1,class:"font-bold"},XR={class:"px-3 py-2"},t8={class:"flex justify-between items-center p-2"},e8={class:"font-semibold text-sm"},n8={class:"mr-5"},i8=["onClick"],o8=["onClick"],s8={class:"w-4/5 p-2 rounded-lg bg-gray-50 border border-sky-300"},r8={class:"flex w-1/5 justify-between items-center"},a8=["src"],l8={key:0,class:"font-bold"},c8={key:1,class:"font-bold"},d8={class:"mt-3 border-t-2 py-2 flex justify-between"},u8=["onClick"],h8={key:0,id:"reply",class:"mt-3 flex justify-end"},f8={class:"flex w-4/5 rounded-lg bg-gray-50 border border-gray-300"},g8={key:2,class:"text-center"},p8={class:"gamehot basis-1/4"},m8=E("h4",{class:"text-lg font-medium text-center"},"GAME HOT",-1),b8=["onClick","src"],k8={class:"basis-2/4 ml-2 flex flex-col items-center my-auto"},w8=["onClick"],_8={class:"flex"},v8=E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6"},[E("path",{"fill-rule":"evenodd",d:"M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z","clip-rule":"evenodd"})],-1),y8={class:"ml-3"},C8={class:"md:block hidden mt-10 border-2 border-sky-300 rounded-xl",id:"gameRecent"},A8=E("h3",{class:"text-center font-semibold p-2"},"C\xC1C GAME \u0110\xC3 CH\u01A0I G\u1EA6N \u0110\xC2Y",-1),x8={class:"flex justify-around mt-5 p-2"},E8=["onClick"],S8=["src"],T8={class:"text-center mt-1"},D8={key:0,class:"overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"},M8={class:"relative w-auto my-6 mx-auto"},I8={class:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"},P8=E("h3",{class:"text-2xl font-semibold"}," B\xE1o c\xE1o Game ",-1),B8=E("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"#F00000",class:"w-8 h-8"},[E("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),N8=[B8],O8={class:"relative p-6 flex"},L8=E("div",{class:"flex flex-col"},[E("label",{class:"mt-1",for:"tengame"},"T\xEAn game:"),E("label",{class:"mt-4",for:"hoten"},"Ng\u01B0\u1EDDi b\xE1o c\xE1o:"),E("label",{class:"mt-5",for:"email"},"Email:"),E("label",{class:"mt-4",for:"loi"},"L\u1ED7i game:"),E("label",{class:"mt-10",for:"motaloi"},"M\xF4 t\u1EA3 l\u1ED7i:")],-1),R8={class:"flex flex-col"},z8={key:1,class:"opacity-25 fixed inset-0 z-40 bg-black"},j8={__name:"GameView",setup(i){const n=Xa(),s=_i(),r=sessionStorage.getItem("user_id"),c=[];new Date().getDate();let f=ue({num:5,id:""}),g=ue(),p=ue({id:"",tengame:"",thumb_image:"",link_game:"",soluotchoi:"",mota:"",gh_dotuoi:"",image1:"",image2:"",image3:"",image4:"",like:"",unlike:""}),k=ue({game_id:"",tengame:"",name:"",email:"",loi:"",motaloi:""}),C=ue({likedGames:null,checked:!1});const x=ai(()=>Zt.state.gamesHot),v=ai(()=>Zt.state.comments);let M=ue({game_id:"",comment:""});const z={slug:n.params.slug,tengame:"",thumb_image:""};let H=ue({status:!1}),Z="https://www.facebook.com/plugins/share_button.php?href="+window.location.href+"&layout=button_count&size=large&appId=1455233224968219&width=138&height=28",U=ue(""),W=ue(!1),tt=ue({comment_id:"",reply:"",user_id:""}),dt=1;r&&(Zt.dispatch("getUser").then(()=>{C.value.likedGames=Zt.state.user.data.likedGames;for(let re=0;re<C.value.likedGames.length;re++)if(n.params.slug==C.value.likedGames[re].slug){C.value.checked=!0;break}}),tt.value.user_id=r),Zt.state.gamesHot.length==0&&Zt.dispatch("getGamesHot"),n.params.slug&&Zt.dispatch("getGameBySlug",n.params.slug).then(()=>{p.value=Zt.state.currentGame,p.value.soluotchoi=parseInt(p.value.soluotchoi)+1,Zt.dispatch("updateGame",p.value),f.value.id=p.value.id,Zt.dispatch("getComments",f.value).then(re=>{g.value=re}),document.title=p.value.tengame});function st(){p.value.like=parseInt(p.value.like)+1,Zt.dispatch("updateGame",p.value)}function I(){p.value.unlike=parseInt(p.value.unlike)+1,Zt.dispatch("updateGame",p.value)}function mt(){M.value.game_id=p.value.id,Zt.dispatch("postComment",M.value).then(()=>{M.value.comment="",Zt.dispatch("getComments",f.value)})}function pt(re){Zt.dispatch("delComment",re).then(()=>{Zt.dispatch("getComments",f.value),Wn.fire({icon:"success",text:"\u0110\xE3 x\xF3a b\xECnh lu\u1EADn"})})}function _t(){Zt.dispatch("likeGame",p.value.id).then(()=>{C.value.checked=!0,Wn.fire({icon:"success",text:"Y\xEAu th\xEDch game th\xE0nh c\xF4ng"})})}function Et(){Zt.dispatch("unlikeGame",p.value.id).then(()=>{C.value.checked=!1,Wn.fire({icon:"success",text:"\u0110\xE3 x\xF3a game kh\u1ECFi danh s\xE1ch y\xEAu th\xEDch"})})}function Lt(){Wn.fire({icon:"error",title:"Oops...",text:"Vui l\xF2ng \u0111\u0103ng nh\u1EADp \u0111\u1EC3 th\u1EF1c hi\u1EC7n ch\u1EE9c n\u0103ng n\xE0y"})}nb(()=>{localStorage.getItem("Game1")!=null&&(c[0]=JSON.parse(localStorage.getItem("Game1"))),localStorage.getItem("Game2")!=null&&(c[1]=JSON.parse(localStorage.getItem("Game2"))),localStorage.getItem("Game3")!=null&&(c[2]=JSON.parse(localStorage.getItem("Game3"))),localStorage.getItem("Game4")!=null&&(c[3]=JSON.parse(localStorage.getItem("Game4"))),localStorage.getItem("Game5")!=null&&(c[4]=JSON.parse(localStorage.getItem("Game5")))}),Ls(()=>p.value.tengame,()=>{z.tengame=p.value.tengame,z.thumb_image=p.value.thumb_image,localStorage.getItem("Game1")==null?X()||localStorage.setItem("Game1",JSON.stringify(z)):localStorage.getItem("Game2")==null?X()||(localStorage.setItem("Game2",localStorage.getItem("Game1")),localStorage.setItem("Game1",JSON.stringify(z))):localStorage.getItem("Game3")==null?X()||(localStorage.setItem("Game3",localStorage.getItem("Game2")),localStorage.setItem("Game2",localStorage.getItem("Game1")),localStorage.setItem("Game1",JSON.stringify(z))):localStorage.getItem("Game4")==null?X()||(localStorage.setItem("Game4",localStorage.getItem("Game3")),localStorage.setItem("Game3",localStorage.getItem("Game2")),localStorage.setItem("Game2",localStorage.getItem("Game1")),localStorage.setItem("Game1",JSON.stringify(z))):X()||(localStorage.setItem("Game5",localStorage.getItem("Game4")),localStorage.setItem("Game4",localStorage.getItem("Game3")),localStorage.setItem("Game3",localStorage.getItem("Game2")),localStorage.setItem("Game2",localStorage.getItem("Game1")),localStorage.setItem("Game1",JSON.stringify(z)))});function X(){var re,nt=!1;for(let bt=1;bt<=5;bt++)if(re=JSON.parse(localStorage.getItem("Game"+bt)),re!=null&&re.slug==z.slug){let St=localStorage.getItem("Game"+bt);for(let Yt=bt;Yt>1;Yt--)localStorage.setItem("Game"+Yt,localStorage.getItem("Game"+(Yt-1)));localStorage.setItem("Game1",St),nt=!0;break}return nt}function Nt(re){return re=re.slice(0,10),re}function Bt(){H.value.status=!H.value.status,H.value.status&&(k.value.game_id=p.value.id,k.value.tengame=p.value.tengame,r&&Zt.dispatch("getUser").then(re=>{k.value.email=re.data.data.email,re.data.data.name&&(k.value.name=re.data.data.name)}))}function Xt(){Zt.dispatch("sendReport",k.value).then(()=>{Bt(),Wn.fire({icon:"success",text:"\u0110\xE3 g\u1EEDi b\xE1o c\xE1o th\xE0nh c\xF4ng"})})}function te(){var re=document.getElementById("iframe");re.src=re.src}function Wt(){var re=document.getElementById("iframe");re.mozRequestFullScreen?re.mozRequestFullScreen():re.webkitRequestFullScreen&&re.webkitRequestFullScreen()}(function(re,nt,bt){var St,Yt=re.getElementsByTagName(nt)[0];re.getElementById(bt)||(St=re.createElement(nt),St.id=bt,St.src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0",Yt.parentNode.insertBefore(St,Yt))})(document,"script","facebook-jssdk");function Ce(){f.value.num+=10,Zt.dispatch("getComments",f.value).then(re=>{g.value=re})}function hn(re){U.value=re,tt.value.comment_id=re,W.value=!0}function pn(){Zt.dispatch("postReply",tt.value).then(()=>{Zt.dispatch("getComments",f.value).then(re=>{g.value=re}),tt.value.reply=""})}function Re(re){Zt.dispatch("delReply",re).then(()=>{Zt.dispatch("getComments",f.value).then(nt=>{g.value=nt})})}Co(()=>{sn(dt)});function Je(re){sn(dt+=re)}function sn(re){let nt;const bt=document.getElementsByClassName("slide");for(re>bt.length&&(dt=1),re<1&&(dt=bt.length),nt=0;nt<bt.length;nt++)bt[nt].classList.add("hidden");bt[dt-1].classList.remove("hidden")}return window.scrollTo(0,0),window.addEventListener("keydown",function(re){["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(re.code)>-1&&re.preventDefault()},!1),(re,nt)=>(at(),hs(gb,null,{header:pi(()=>[E("div",tR,[E("span",eR,Qt(rt(p).tengame),1),E("span",nR,[gn(Qt(rt(p).gh_dotuoi)+" ",1),iR])])]),default:pi(()=>[E("div",null,[E("div",oR,[E("div",sR,[E("iframe",{id:"iframe",iframe:"",src:rt(p).link_game,scrolling:"no",allowfullscreen:""},null,8,rR)]),E("div",aR,[E("div",lR,[E("div",{onClick:te,id:"reload",class:"flex flex-col items-center cursor-pointer"},[cR,gn(" T\u1EA3i l\u1EA1i ")]),E("div",{onClick:Wt,id:"fullscreen",class:"flex flex-col items-center cursor-pointer"},[dR,gn(" To\xE0n m\xE0n h\xECnh ")]),rt(r)&&rt(C).checked?(at(),ht("div",{key:0,onClick:nt[0]||(nt[0]=bt=>Et()),id:"like",class:"flex flex-col items-center cursor-pointer"},[uR,gn(" Y\xEAu th\xEDch ")])):ne("",!0),rt(r)&&!rt(C).checked?(at(),ht("div",{key:1,onClick:nt[1]||(nt[1]=bt=>_t()),class:"flex flex-col items-center cursor-pointer"},[hR,gn(" Y\xEAu th\xEDch ")])):ne("",!0),rt(r)?ne("",!0):(at(),ht("div",{key:2,onClick:nt[2]||(nt[2]=bt=>Lt()),id:"like",class:"flex flex-col items-center cursor-pointer"},[fR,gn(" Y\xEAu th\xEDch ")])),E("div",{onClick:Bt,id:"report",class:"flex flex-col items-center cursor-pointer"},[gR,gn(" B\xE1o c\xE1o ")])]),E("div",pR," L\u01B0\u1EE3t ch\u01A1i: "+Qt(rt(p).soluotchoi),1),E("div",mR,[E("div",bR,[gn(" \u0110\xE1nh gi\xE1 game "),E("div",kR,[E("button",{onClick:st,class:"flex border-stone-800 bg-gray-200 hover:bg-gray-300 rounded-xl p-2"},[gn(" Hay "),wR]),E("span",_R,Qt(rt(p).like),1)]),E("div",vR,[E("button",{onClick:I,class:"flex border rounded-xl p-2 bg-gray-200 hover:bg-gray-300"},[gn(" D\u1EDF "),yR]),E("span",CR,Qt(rt(p).unlike),1)]),E("iframe",{src:rt(Z),width:"138",height:"28",style:{border:"none",overflow:"hidden"},scrolling:"no",frameborder:"0",allowfullscreen:"true",allow:"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"},null,8,AR)])])])]),E("div",xR,[ER,E("div",{id:"mota",innerHTML:rt(p).mota},null,8,SR),E("div",TR,[E("h5",null,"M\u1ED9t s\u1ED1 h\xECnh \u1EA3nh trong game "+Qt(rt(p).tengame),1),E("div",DR,[E("div",MR,[E("img",{class:"w-full object-cover",src:"http://localhost:8000/storage/images/games/"+rt(p).image1},null,8,IR)]),E("div",PR,[E("img",{class:"w-full object-cover",src:"http://localhost:8000/storage/images/games/"+rt(p).image2},null,8,BR)]),E("div",NR,[E("img",{class:"w-full object-cover",src:"http://localhost:8000/storage/images/games/"+rt(p).image3},null,8,OR)]),E("div",LR,[E("img",{class:"w-full object-cover",src:"http://localhost:8000/storage/images/games/"+rt(p).image4},null,8,RR)]),E("a",{class:"absolute left-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer",onClick:nt[3]||(nt[3]=bt=>Je(-1))},"\u276E"),E("a",{class:"absolute right-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer",onClick:nt[4]||(nt[4]=bt=>Je(1))},"\u276F")])])]),E("div",zR,[E("div",jR,[rt(Zt).state.user.token?(at(),ht("div",FR,[$R,E("div",VR,[Le(E("textarea",{"onUpdate:modelValue":nt[5]||(nt[5]=bt=>rt(M).comment=bt),class:"border-0 w-full mt-1 bg-gray-50 focus:ring-0",name:"",id:"",rows:"3",required:"",placeholder:"Vi\u1EBFt b\xECnh lu\u1EADn..."},null,512),[[en,rt(M).comment]]),E("div",{class:"flex justify-end border-t p-2 bg-gray-200"},[E("button",{onClick:mt,class:"post px-4 py-1 text-lg text-white rounded-xl"},"\u0110\u0103ng")])])])):(at(),ht("div",HR,[E("div",null,[UR,E("div",WR,[E("div",qR,[E("button",{class:"bg-yellow-500 px-3 py-2 rounded-xl text-lg hover:bg-yellow-600",onClick:nt[6]||(nt[6]=bt=>rt(s).push({name:"Registry"}))},"\u0110\u0103ng k\xFD"),E("button",{class:"bg-green-500 px-3 py-2 rounded-xl text-lg hover:bg-green-600",onClick:nt[7]||(nt[7]=bt=>rt(s).push({name:"Login"}))},"\u0110\u0103ng nh\u1EADp")])])])])),(at(!0),ht(ve,null,$e(rt(v),bt=>(at(),ht("div",{class:"mt-5",key:bt.id},[E("div",GR,[E("div",YR,[E("div",KR,[E("img",{class:"rounded-full w-10 h-10 object-cover",src:"http://localhost:8000/storage/images/profile/"+bt.avatar,alt:""},null,8,QR),bt.name?(at(),ht("span",ZR,Qt(bt.name),1)):ne("",!0),bt.username?(at(),ht("span",JR,Qt(bt.username),1)):ne("",!0)])]),E("div",XR,Qt(bt.comment),1),E("div",t8,[E("span",e8,Qt(Nt(bt.created_at)),1),E("div",null,[E("span",n8,[rt(r)?(at(),ht("button",{key:0,onClick:St=>hn(bt.id),style:{"background-color":"#15576b",color:"white"},class:"bg-violet-300 px-3 py-1 rounded-xl"},"Tr\u1EA3 l\u1EDDi",8,i8)):ne("",!0)]),E("span",null,[bt.user_id==rt(r)?(at(),ht("button",{key:0,onClick:St=>pt(bt.id),class:"bg-red-500 px-3 py-1 rounded text-white cursor-pointer"},"X\xF3a",8,o8)):ne("",!0)])])]),(at(!0),ht(ve,null,$e(bt.replies,St=>(at(),ht("div",{class:"flex justify-end mt-2",key:St.id},[E("div",s8,[E("div",r8,[E("img",{class:"rounded-full w-10 h-10 object-cover",src:"http://localhost:8000/storage/images/profile/"+St.avatar,alt:""},null,8,a8),St.name?(at(),ht("span",l8,Qt(bt.name),1)):ne("",!0),St.username?(at(),ht("span",c8,Qt(bt.username),1)):ne("",!0)]),E("div",d8,[E("span",null,Qt(St.reply),1),E("span",null,[St.user_id==rt(r)?(at(),ht("button",{key:0,onClick:Yt=>Re(St.id),class:"bg-red-500 px-3 py-1 rounded text-white cursor-pointer"},"X\xF3a",8,u8)):ne("",!0)])])])]))),128))]),bt.id==rt(U)&&rt(W)?(at(),ht("div",h8,[E("div",f8,[Le(E("input",{"onUpdate:modelValue":nt[8]||(nt[8]=St=>rt(tt).reply=St),type:"text",class:"border-0 w-full mt-1 bg-gray-50 focus:ring-0",name:"",id:"",rows:"3",required:"",placeholder:"Vi\u1EBFt tr\u1EA3 l\u1EDDi..."},null,512),[[en,rt(tt).reply]]),E("div",{class:"p-2 bg-gray-200"},[E("button",{onClick:pn,class:"post px-4 py-1 text-white rounded-xl"},"\u0110\u0103ng")])])])):ne("",!0)]))),128)),rt(g)?(at(),ht("div",g8,[E("button",{onClick:Ce,class:"mt-5 px-10 py-2 rounded-xl bg-cyan-500"},"T\u1EA3i Th\xEAm B\xECnh Lu\u1EADn")])):ne("",!0)]),E("div",p8,[m8,(at(!0),ht(ve,null,$e(rt(x),bt=>(at(),ht("div",{key:bt.id,class:"md:flex mt-4 border rounded p-3 border-sky-300"},[E("img",{onClick:St=>rt(s).push({name:"GameView",params:{slug:bt.slug}}),src:"http://localhost:8000/storage/images/games/"+bt.thumb_image,alt:"",class:"w-24 h-24 object-cover cursor-pointer"},null,8,b8),E("div",k8,[E("div",{onClick:St=>rt(s).push({name:"GameView",params:{slug:bt.slug}}),class:"cursor-pointer"},Qt(bt.tengame),9,w8),E("div",_8,[v8,E("h5",y8,Qt(bt.soluotchoi),1)])])]))),128))])]),E("div",C8,[A8,E("div",x8,[(at(),ht(ve,null,$e(c,bt=>E("div",{onClick:St=>rt(s).push({name:"GameView",params:{slug:bt.slug}}),key:bt.slug},[E("img",{src:"http://localhost:8000/storage/images/games/"+bt.thumb_image,alt:"",class:"w-24 h-24 m-auto"},null,8,S8),E("div",T8,Qt(bt.tengame),1)],8,E8)),64))])])]),E("div",null,[rt(H).status?(at(),ht("div",D8,[E("div",M8,[E("div",I8,[E("div",{class:"flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t"},[P8,E("button",{class:"p-1 ml-auto bg-transparent border-0 leading-none font-semibold outline-none focus:outline-none",onClick:Bt},N8)]),E("div",O8,[L8,E("div",R8,[Le(E("input",{class:"mx-4 py-1 rounded-md",disabled:"","onUpdate:modelValue":nt[9]||(nt[9]=bt=>rt(k).tengame=bt),type:"text",name:"",id:"tengame",required:""},null,512),[[en,rt(k).tengame]]),Le(E("input",{class:"mx-4 py-1 mt-2 rounded-md","onUpdate:modelValue":nt[10]||(nt[10]=bt=>rt(k).name=bt),type:"text",name:"",id:"hoten",required:""},null,512),[[en,rt(k).name]]),Le(E("input",{class:"mx-4 py-1 mt-2 rounded-md","onUpdate:modelValue":nt[11]||(nt[11]=bt=>rt(k).email=bt),type:"email",name:"",id:"email",required:""},null,512),[[en,rt(k).email]]),Le(E("input",{class:"mx-4 py-1 mt-2 rounded-md","onUpdate:modelValue":nt[12]||(nt[12]=bt=>rt(k).loi=bt),type:"text",name:"",id:"loi",required:""},null,512),[[en,rt(k).loi]]),Le(E("textarea",{"onUpdate:modelValue":nt[13]||(nt[13]=bt=>rt(k).motaloi=bt),class:"mx-4 py-1 mt-2 rounded-md",name:"",id:"motaloi",cols:"50",rows:"3",required:""},null,512),[[en,rt(k).motaloi]])])]),E("div",{class:"flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b"},[E("button",{class:"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:Xt}," G\u1EEDi ")])])])])):ne("",!0),rt(H).status?(at(),ht("div",z8)):ne("",!0)])]),_:1}))}},F8={class:"p-5"},$8={class:"mt-20 p-5 border-2 border-sky-300 rounded-xl"},V8=E("h2",{class:"font-bold text-xl"},"TH\xD4NG TIN C\xC1 NH\xC2N",-1),H8={class:"flex flex-col items-center"},U8=["src"],W8={type:"button",class:"mt-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-md font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"},q8={class:"flex mt-10 justify-around"},G8=E("label",{for:"name",class:"font-semibold text-md"},"T\xEAn hi\u1EC3n th\u1ECB",-1),Y8=E("label",{for:"email",class:"font-semibold text-md"},"Email",-1),K8=E("div",{class:"flex justify-end mt-5"},[E("input",{id:"saveImageBt",style:{"background-color":"#3dc0b9"},class:"px-3 py-1 text-md border-2 rounded-xl cursor-pointer",type:"submit",value:"L\u01B0u"})],-1),Q8={class:"mt-20 p-5 border-2 border-sky-300 rounded-xl"},Z8=E("h2",{class:"font-bold text-xl"},"\u0110\u1ED4I M\u1EACT KH\u1EA8U",-1),J8={key:0},X8={key:1},tz={class:"flex justify-center"},ez=E("div",{class:"flex flex-col justify-around"},[E("label",{for:"oldPassword"},"Nh\u1EADp m\u1EADt kh\u1EA9u hi\u1EC7n t\u1EA1i"),E("label",{for:"newPassword"},"Nh\u1EADp m\u1EADt kh\u1EA9u m\u1EDBi"),E("label",{for:"oldPasswordConfirm"},"X\xE1c nh\u1EADn m\u1EADt kh\u1EA9u m\u1EDBi")],-1),nz={class:"flex flex-col"},iz={key:0,class:"py-3 px-4 w-1/2 m-auto mt-5 bg-red-500 text-white rounded"},oz={key:0},sz={key:1},rz=E("div",{class:"flex justify-center mt-5"},[E("input",{type:"submit",style:{"background-color":"#3dc0b9"},class:"border-2 px-3 py-1 text-xl rounded-xl",value:"X\xE1c nh\u1EADn"})],-1),az={class:"mt-20 p-5 border-2 border-sky-300 rounded-xl"},lz=E("h2",{class:"font-bold text-xl"},"C\xC1C GAME \u0110\xC3 TH\xCDCH",-1),cz={key:0},dz={class:"flex justify-around mt-5 p-2"},uz=["onClick"],hz=["src"],fz={class:"text-center mt-1"},gz={key:1},pz={__name:"Profile",setup(i){const n=_i(),s=ue({id:"",name:"",avatar_url:"",email:"",social_id:"",likedGames:[]}),r=ue({url:""}),c=ue({oldPass:"",newPass:"",newPass_confirmation:""}),u=ue("");Zt.dispatch("getUser").then(()=>{s.value=Zt.state.user.data,r.value.url="http://localhost:8000/storage/images/profile/"+s.value.avatar_url});function f(k){const C=k.target.files[0],x=new FileReader;x.onload=()=>{s.value.avatar_url=x.result,r.value.url=x.result},x.readAsDataURL(C)}function g(){Zt.dispatch("updateUser",s.value)}function p(){Zt.dispatch("changePassword",c.value).then(()=>{n.push({name:"Login"})}).catch(k=>{k.response.data.errors?u.value=k.response.data.errors.newPass:k.response.data.error&&(u.value=k.response.data.error)})}return document.title="Trang c\xE1 nh\xE2n",(k,C)=>(at(),ht("div",F8,[E("div",$8,[V8,E("form",{name:"imageForm",action:"",onSubmit:C[2]||(C[2]=yr(x=>g(),["prevent"]))},[E("div",H8,[E("img",{class:"rounded-full w-24 h-24 object-cover",src:rt(r).url,alt:""},null,8,U8),E("button",W8,[E("input",{onChange:f,type:"file",name:"",id:"",class:"absolute opacity-0 cursor-pointer"},null,32),gn(" Thay \u0111\u1ED5i ")])]),E("div",q8,[E("div",null,[G8,Le(E("input",{type:"text",required:"",class:"mx-5 rounded-xl",name:"name","onUpdate:modelValue":C[0]||(C[0]=x=>rt(s).name=x)},null,512),[[en,rt(s).name]])]),E("div",null,[Y8,Le(E("input",{type:"text",class:"mx-5 rounded-xl",size:"30",name:"email","onUpdate:modelValue":C[1]||(C[1]=x=>rt(s).email=x),disabled:""},null,512),[[en,rt(s).email]])])]),K8],32)]),E("div",Q8,[Z8,rt(s).social_id?(at(),ht("div",J8,"B\u1EA1n \u0111ang \u0111\u0103ng nh\u1EADp b\u1EB1ng t\xE0i kho\u1EA3n m\u1EA1ng x\xE3 h\u1ED9i, t\xEDnh n\u0103ng \u0111\u1ED5i m\u1EADt kh\u1EA9u hi\u1EC7n kh\xF4ng kh\u1EA3 d\u1EE5ng")):(at(),ht("div",X8,[E("form",{action:"",onSubmit:C[6]||(C[6]=yr(x=>p(),["prevent"]))},[E("div",tz,[ez,E("div",nz,[Le(E("input",{"onUpdate:modelValue":C[3]||(C[3]=x=>rt(c).oldPass=x),class:"mx-5 rounded-xl",type:"password",name:"oldPassword",required:"",placeholder:"M\u1EADt kh\u1EA9u hi\u1EC7n t\u1EA1i",id:""},null,512),[[en,rt(c).oldPass]]),Le(E("input",{"onUpdate:modelValue":C[4]||(C[4]=x=>rt(c).newPass=x),class:"mx-5 rounded-xl mt-2",type:"password",name:"newPassword",required:"",placeholder:"M\u1EADt kh\u1EA9u m\u1EDBi",id:""},null,512),[[en,rt(c).newPass]]),Le(E("input",{"onUpdate:modelValue":C[5]||(C[5]=x=>rt(c).newPass_confirmation=x),class:"mx-5 rounded-xl mt-2",type:"password",required:"",name:"oldPasswordConfirm",placeholder:"X\xE1c nh\u1EADn m\u1EADt kh\u1EA9u m\u1EDBi",id:""},null,512),[[en,rt(c).newPass_confirmation]])])]),rt(u)?(at(),ht("div",iz,[Array.isArray(rt(u))?(at(),ht("div",oz,[(at(!0),ht(ve,null,$e(rt(u),(x,v)=>(at(),ht("div",{key:v},[E("span",null,Qt(x.replace("new pass","M\u1EADt kh\u1EA9u m\u1EDBi")),1)]))),128))])):(at(),ht("div",sz,[E("span",null,Qt(rt(u)),1)]))])):ne("",!0),rz],32)]))]),E("div",az,[lz,rt(s).likedGames.length>0?(at(),ht("div",cz,[E("div",dz,[(at(!0),ht(ve,null,$e(rt(s).likedGames,x=>(at(),ht("div",{onClick:v=>rt(n).push({name:"GameView",params:{slug:x.slug}}),key:x.id,class:"cursor-pointer"},[E("img",{class:"w-24 h-24 object-cover m-auto",src:"http://localhost:8000/storage/images/games/"+x.thumb_image,alt:""},null,8,hz),E("div",fz,Qt(x.tengame),1)],8,uz))),128))])])):(at(),ht("div",gz," B\u1EA1n hi\u1EC7n ch\u01B0a y\xEAu th\xEDch t\u1EF1a game n\xE0o c\u1EA3! "))])]))}};const mz={id:"container_article",class:"m-auto mt-10"},bz=E("div",{class:"flex bg-slate-300"},[E("div",{class:"bg-slate-800 px-8 py-2 font-bold text-amber-600"},"N\u1ED4I B\u1EACT"),E("div",{id:"triangle-right"})],-1),kz={class:"mt-5 grid md:grid-cols-2 grid-cols-1 justify-between"},wz=["onClick"],_z={class:"relative"},vz=["src"],yz={class:"absolute px-3 font-bold text-slate-50 text-xl bottom-3"},Cz={class:"mt-10"},Az=E("div",{class:"flex border-b-2 border-rose-600"},[E("div",{class:"bg-rose-600 px-5 py-2 font-semibold text-slate-50"},"M\u1EDAI C\u1EACP NH\u1EACT")],-1),xz=["onClick"],Ez=["src"],Sz={class:"w-100 sm:w-2/3 mx-4"},Tz={key:0,class:"mt-10"},Dz={class:"flex items-center justify-evenly"},Mz=E("input",{class:"hidden",type:"radio",name:"check",id:"first"},null,-1),Iz=E("label",{class:"text-2xl border-2 px-3 rounded-xl",for:"first"},"\xAB",-1),Pz=[Mz,Iz],Bz=["onClick"],Nz=["id"],Oz=["for"],Lz=E("input",{class:"hidden",type:"radio",name:"check",id:"last"},null,-1),Rz=E("label",{class:"text-2xl border-2 px-3 rounded-xl",for:"last"},"\xBB",-1),zz=[Lz,Rz],jz={__name:"Articles",setup(i){const n=_i(),s=ue([]),r=ue([]),c=ue({});Zt.dispatch("getPopularArticle").then(f=>{r.value=f.data.data}),Zt.dispatch("getArticleNew").then(f=>{s.value=f.data.data,c.value={last_page:f.data.meta.last_page,path_page:f.data.meta.path+"?page=",first_link:f.data.links.first,last_link:f.data.links.last}});function u(f){tl.get(f).then(g=>{s.value=g.data.data})}return document.title="Chilly Gaming - Tin T\u1EE9c",(f,g)=>(at(),ht("div",mz,[E("div",null,[E("div",null,[bz,E("div",kz,[(at(!0),ht(ve,null,$e(rt(r),p=>(at(),ht("div",{onClick:k=>rt(n).push({name:"ArticleView",params:{slug:p.slug}}),class:"mt-5 mx-3 cursor-pointer",key:p.id},[E("div",_z,[E("img",{class:"w-full h-64 object-cover",src:"http://localhost:8000/storage/images/articles/"+p.thumb_image,alt:""},null,8,vz),E("span",yz,Qt(p.title),1)])],8,wz))),128))])]),E("div",Cz,[Az,E("div",null,[(at(!0),ht(ve,null,$e(rt(s),p=>(at(),ht("div",{onClick:k=>rt(n).push({name:"ArticleView",params:{slug:p.slug}}),class:"flex mt-5 cursor-pointer border-b border-sky-300 pb-2",key:p.id},[E("img",{class:"w-1/3 h-40 hidden sm:block",src:"http://localhost:8000/storage/images/articles/"+p.thumb_image,alt:""},null,8,Ez),E("span",Sz,Qt(p.title),1)],8,xz))),128))]),rt(c)?(at(),ht("div",Tz,[E("ul",Dz,[E("li",null,[E("button",{onClick:g[0]||(g[0]=p=>u(rt(c).first_link))},Pz)]),(at(!0),ht(ve,null,$e(rt(c).last_page,p=>(at(),ht("li",{key:p},[E("button",{onClick:k=>u(rt(c).path_page+p)},[E("input",{class:"hidden",type:"radio",name:"check",id:p},null,8,Nz),E("label",{class:"border-2 px-3 rounded-xl",for:p},Qt(p),9,Oz)],8,Bz)]))),128)),E("li",null,[E("button",{onClick:g[1]||(g[1]=p=>u(rt(c).last_link))},zz)])])])):ne("",!0)])])]))}};const Fz={id:"container_article",class:"m-auto mt-10 ck-content"},$z={class:"text-center font-bold text-2xl uppercase border-b-2 pb-5"},Vz={class:"flex mt-2 border-b-2 pb-2 px-2 justify-between"},Hz={class:"flex items-center"},Uz=E("div",{class:"mr-2"}," \u0110\xE1nh gi\xE1: ",-1),Wz=["onClick"],qz=E("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"},null,-1),Gz=[qz],Yz=["onClick"],Kz=E("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"},null,-1),Qz=[Kz],Zz={class:"italic text-sm mx-1"},Jz={class:"italic"},Xz=["innerHTML"],tj={class:"border-t-2 mt-10"},ej=E("div",{class:"bg-slate-300 border-l-8 border-rose-500"},[E("div",{class:"py-2 mx-2 text-lg"},"Tin li\xEAn quan")],-1),nj={class:"grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 mt-5 justify-around cursor-pointer"},ij=["onClick"],oj=["src"],sj={class:"text-center mt-1 sm:w-full w-2/4"},rj={__name:"ArticleView",setup(i){const n=ue({}),s=ue([]),r=ue(""),c=Xa(),u=_i();c.params.slug&&(Zt.dispatch("getArticleBySlug",c.params.slug).then(g=>{n.value=g.data.data,r.value=n.value.created.slice(0,10),n.value.luotxem+=1,Zt.dispatch("updateArticle",n.value),document.title=n.value.title}),Zt.dispatch("getArticleRelate").then(g=>{s.value=g.data.data}));function f(g){n.value.rate=(n.value.rate*n.value.soluotdanhgia+g)/(n.value.soluotdanhgia+1),n.value.soluotdanhgia+=1,Zt.dispatch("updateArticle",n.value)}return(g,p)=>(at(),ht("div",Fz,[E("div",$z,Qt(rt(n).title),1),E("div",Vz,[E("div",Hz,[Uz,(at(),ht(ve,null,$e(5,k=>E("div",{id:"starts",class:"cursor-pointer",key:k},[rt(n).rate>=k?(at(),ht("svg",{key:0,onClick:C=>f(k),xmlns:"http://www.w3.org/2000/svg",fill:"#FFCC00",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},Gz,8,Wz)):(at(),ht("svg",{key:1,xmlns:"http://www.w3.org/2000/svg",onClick:C=>f(k),fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},Qz,8,Yz))])),64)),E("div",Zz,Qt(rt(n).soluotdanhgia)+" l\u01B0\u1EE3t \u0111\xE1nh gi\xE1 ",1)]),E("div",Jz,Qt(rt(r)),1)]),E("div",{class:"mt-10",innerHTML:rt(n).content},null,8,Xz),E("div",tj,[ej,E("div",nj,[(at(!0),ht(ve,null,$e(rt(s),k=>(at(),ht("div",{onClick:C=>rt(u).push({name:"ArticleView",params:{slug:k.slug}}),class:"flex sm:block",key:k.id},[E("img",{class:"sm:w-full w-2/4 h-32",src:"http://localhost:8000/storage/images/articles/"+k.thumb_image,alt:""},null,8,oj),E("div",sj,Qt(k.title),1)],8,ij))),128))])])]))}},aj={class:"bg-gray-50 dark:bg-gray-900"},lj={class:"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"},cj=E("a",{href:"#",class:"flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"},[E("img",{class:"w-8 h-8 mr-2",src:"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg",alt:"logo"}),gn(" Webgame ")],-1),dj={class:"w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"},uj={class:"p-6 space-y-4 md:space-y-6 sm:p-8"},hj=E("h1",{class:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"}," \u0110\u0103ng nh\u1EADp v\xE0o t\xE0i kho\u1EA3n c\u1EE7a b\u1EA1n ",-1),fj=["onSubmit"],gj=E("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Email",-1),pj=E("label",{for:"password",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"M\u1EADt kh\u1EA9u",-1),mj=E("button",{type:"submit",class:"w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"},"\u0110\u0103ng nh\u1EADp",-1),bj={key:0,class:"py-3 px-4 m-auto mt-5 bg-red-500 text-white rounded"},kj={__name:"AdminLogin",setup(i){const n=_i(),s={email:"",password:""},r=ue("");function c(){Zt.dispatch("adminLogin",s).then(()=>{n.push({name:"AdminDashboard"})}).catch(u=>{r.value=u.response.data.error})}return(u,f)=>(at(),ht("section",aj,[E("div",lj,[cj,E("div",dj,[E("div",uj,[hj,E("form",{class:"space-y-4 md:space-y-6",onSubmit:yr(c,["prevent"])},[E("div",null,[gj,Le(E("input",{"onUpdate:modelValue":f[0]||(f[0]=g=>s.email=g),type:"email",name:"email",id:"email",class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@company.com",required:""},null,512),[[en,s.email]])]),E("div",null,[pj,Le(E("input",{"onUpdate:modelValue":f[1]||(f[1]=g=>s.password=g),type:"password",name:"password",id:"password",placeholder:"Nh\u1EADp m\u1EADt kh\u1EA9u",class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},null,512),[[en,s.password]])]),mj,r.value?(at(),ht("div",bj,[E("span",null,Qt(r.value),1)])):ne("",!0)],40,fj)])])])]))}},wj={style:{height:"auto","min-height":"100%"},class:"w-full left-0 h-full top-0 absolute bg-slate-300"},_j={class:"flex h-full flex-no-wrap"},vj={class:"w-64 sm:relative bg-gray-800 shadow h-full flex-col justify-between hidden sm:flex"},yj={class:"px-8"},Cj=E("div",{class:"h-16 w-full flex items-center"},[E("svg",{"aria-label":"Ripples. Logo",role:"img",xmlns:"http://www.w3.org/2000/svg",width:"144",height:"30",viewBox:"0 0 144 30"},[E("path",{fill:"#5F7DF2",d:"M80.544 9.48c1.177 0 2.194.306 3.053.92.86.614 1.513 1.45 1.962 2.507.448 1.058.673 2.247.673 3.568 0 1.303-.233 2.473-.699 3.51-.465 1.037-1.136 1.851-2.012 2.444-.876.592-1.885.888-3.028.888-1.405 0-2.704-.554-3.897-1.663v4.279h2.64v3.072h-9.14v-3.072h2.26V12.78H70.45V9.657h6.145v1.663l.209-.21c1.123-1.087 2.369-1.63 3.74-1.63zm17.675 0c1.176 0 2.194.306 3.053.92.859.614 1.513 1.45 1.961 2.507.449 1.058.673 2.247.673 3.568 0 1.303-.233 2.473-.698 3.51-.466 1.037-1.136 1.851-2.012 2.444-.876.592-1.886.888-3.028.888-1.405 0-2.704-.554-3.898-1.663v4.279h2.64v3.072h-9.14v-3.072h2.26V12.78h-1.904V9.657h6.144v1.663l.21-.21c1.122-1.087 2.368-1.63 3.739-1.63zM24.973 1c1.13 0 2.123.433 2.842 1.133 0 .004 0 .008.034.012 1.54 1.515 1.54 3.962-.034 5.472-.035.029-.069.058-.069.089-.719.65-1.712 1.05-2.773 1.05-.719 0-1.37.061-1.985.184-2.363.474-3.8 1.86-4.28 4.13-.114.489-.18 1.02-.2 1.59l-.003.176.001-.034.002.034c.022.505-.058 1.014-.239 1.495l-.076.182.064-.157c.106-.28.18-.575.217-.881l.008-.084-.026.195c-.286 1.797-1.858 3.188-3.754 3.282l-.204.005h-.103l-.103.002h-.034c-.65.012-1.232.072-1.78.181-2.328.473-3.765 1.863-4.279 4.139-.082.417-.142.863-.163 1.339l-.008.362v.23c0 2.02-1.603 3.681-3.661 3.861L4.16 29l-.48-.01c-.958-.073-1.849-.485-2.499-1.113-1.522-1.464-1.573-3.808-.152-5.33l.152-.154.103-.12c.719-.636 1.677-1.026 2.704-1.026.754 0 1.404-.062 2.02-.184 2.362-.475 3.8-1.86 4.28-4.126.136-.587.17-1.235.17-1.942 0-.991.411-1.896 1.027-2.583.069-.047.137-.097.172-.15.068-.051.102-.104.17-.159.633-.564 1.498-.925 2.408-.978l.229-.007h.034c.068 0 .171.003.274.009.616-.014 1.198-.074 1.746-.18 2.328-.474 3.766-1.863 4.279-4.135.082-.44.142-.912.163-1.418l.008-.385v-.132c0-2.138 1.78-3.872 4.005-3.877zm-.886 10c1.065 0 1.998.408 2.697 1.073.022.011.03.024.042.036l.025.017v.015c1.532 1.524 1.532 3.996 0 5.52-.034.03-.067.06-.067.09-.7.655-1.665 1.056-2.697 1.056-.7 0-1.332.062-1.932.186-2.298.477-3.696 1.873-4.163 4.157-.133.591-.2 1.242-.2 1.95 0 1.036-.399 1.975-1.032 2.674l-.1.084c-.676.679-1.551 1.055-2.441 1.13l-.223.012-.366-.006c-.633-.043-1.3-.254-1.865-.632-.156-.096-.296-.201-.432-.315l-.2-.177v-.012c-.734-.735-1.133-1.72-1.133-2.757 0-2.078 1.656-3.793 3.698-3.899l.198-.005h.133c.666-.007 1.266-.069 1.832-.185 2.265-.476 3.663-1.874 4.163-4.161.08-.442.139-.916.159-1.424l.008-.387v-.136c0-2.153 1.731-3.899 3.896-3.904zm3.882 11.025c1.375 1.367 1.375 3.583 0 4.95s-3.586 1.367-4.96 0c-1.345-1.367-1.345-3.583 0-4.95 1.374-1.367 3.585-1.367 4.96 0zm94.655-12.672c1.405 0 2.628.323 3.669.97 1.041.648 1.843 1.566 2.406 2.756.563 1.189.852 2.57.87 4.145h-9.954l.03.251c.132.906.476 1.633 1.03 2.18.605.596 1.386.895 2.343.895 1.058 0 2.09-.525 3.097-1.574l3.301 1.066-.203.291c-.69.947-1.524 1.67-2.501 2.166-1.075.545-2.349.818-3.821.818-1.473 0-2.774-.277-3.904-.831-1.13-.555-2.006-1.34-2.628-2.355-.622-1.016-.933-2.21-.933-3.58 0-1.354.324-2.582.971-3.682s1.523-1.961 2.628-2.583c1.104-.622 2.304-.933 3.599-.933zm13.955.126c1.202 0 2.314.216 3.339.648v-.47h3.034v3.91h-3.034l-.045-.137c-.317-.848-1.275-1.272-2.875-1.272-1.21 0-1.816.339-1.816 1.016 0 .296.161.516.483.66.321.144.791.262 1.409.355 1.735.22 3.102.536 4.1.946 1 .41 1.697.919 2.095 1.524.398.605.597 1.339.597 2.202 0 1.405-.48 2.5-1.441 3.282-.96.783-2.266 1.174-3.917 1.174-1.608 0-2.7-.321-3.275-.964V23h-3.098v-4.596h3.098l.032.187c.116.547.412.984.888 1.311.53.364 1.183.546 1.962.546.762 0 1.324-.087 1.688-.26.364-.174.546-.476.546-.908 0-.296-.076-.527-.228-.692-.153-.165-.447-.31-.883-.438-.435-.127-1.102-.27-2-.431-1.997-.313-3.433-.82-4.31-1.517-.875-.699-1.313-1.64-1.313-2.825 0-1.21.455-2.162 1.365-2.856.91-.695 2.11-1.042 3.599-1.042zm-69.164.178v10.27h1.98V23h-8.24v-3.072h2.032V12.78h-2.031V9.657h6.259zm-16.85-5.789l.37.005c1.94.05 3.473.494 4.6 1.335 1.198.892 1.797 2.185 1.797 3.878 0 1.168-.273 2.15-.819 2.945-.546.796-1.373 1.443-2.482 1.943l3.085 5.776h2.476V23h-5.827l-4.317-8.366h-2.183v5.116h2.4V23H39.646v-3.25h2.628V7.118h-2.628v-3.25h10.918zm61.329 0v16.06h1.892V23h-8.24v-3.072h2.082v-13h-2.082v-3.06h6.348zm-32.683 9.04c-.812 0-1.462.317-1.949.951-.486.635-.73 1.49-.73 2.565 0 1.007.252 1.847.756 2.52.503.673 1.161 1.01 1.974 1.01.838 0 1.481-.312 1.93-.934.448-.622.672-1.504.672-2.647 0-1.092-.228-1.942-.685-2.552-.457-.61-1.113-.914-1.968-.914zm17.675 0c-.813 0-1.463.317-1.95.951-.486.635-.73 1.49-.73 2.565 0 1.007.253 1.847.756 2.52.504.673 1.162 1.01 1.974 1.01.838 0 1.481-.312 1.93-.934.449-.622.673-1.504.673-2.647 0-1.092-.229-1.942-.686-2.552-.457-.61-1.113-.914-1.967-.914zM14.1 0C16.267 0 18 1.743 18 3.894v.01c0 2.155-1.733 3.903-3.9 3.903-4.166 0-6.3 2.133-6.3 6.293 0 2.103-1.667 3.817-3.734 3.9l-.5-.009c-.933-.075-1.8-.49-2.433-1.121C.4 16.134 0 15.143 0 14.1c0-2.144 1.733-3.903 3.9-3.903 4.166 0 6.3-2.133 6.3-6.294C10.2 1.751 11.934.005 14.1 0zm108.32 12.184c-.76 0-1.372.22-1.834.66-.46.44-.75 1.113-.87 2.018h5.561c-.118-.795-.442-1.44-.97-1.936-.53-.495-1.158-.742-1.886-.742zM49.525 7.118h-2.26v4.444h1.829c2.023 0 3.034-.754 3.034-2.26 0-.728-.233-1.274-.698-1.638-.466-.364-1.1-.546-1.905-.546zm15.821-3.593c.635 0 1.183.231 1.644.692.462.462.692 1.01.692 1.644 0 .677-.23 1.238-.692 1.682-.46.445-1.009.667-1.644.667-.643 0-1.195-.23-1.656-.692-.462-.461-.692-1.013-.692-1.657 0-.634.23-1.182.692-1.644.46-.461 1.013-.692 1.656-.692zM5.991 1.171c1.345 1.563 1.345 4.095 0 5.658-1.374 1.561-3.585 1.561-4.96 0-1.375-1.563-1.375-4.095 0-5.658 1.375-1.561 3.586-1.561 4.96 0z"})])],-1),Aj={class:"mt-12"},xj=E("a",{href:"javascript:void(0)",class:"flex items-center focus:outline-none focus:ring-2 focus:ring-white"},[E("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-grid",width:"18",height:"18",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[E("path",{stroke:"none",d:"M0 0h24v24H0z"}),E("rect",{x:"4",y:"4",width:"6",height:"6",rx:"1"}),E("rect",{x:"14",y:"4",width:"6",height:"6",rx:"1"}),E("rect",{x:"4",y:"14",width:"6",height:"6",rx:"1"}),E("rect",{x:"14",y:"14",width:"6",height:"6",rx:"1"})]),E("span",{class:"text-sm ml-2"},"TRANG CH\u1EE6")],-1),Ej=[xj],Sj=E("a",{href:"javascript:void(0)",class:"flex items-center focus:outline-none focus:ring-2 focus:ring-white"},[E("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-puzzle",width:"18",height:"18",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[E("path",{stroke:"none",d:"M0 0h24v24H0z"}),E("path",{d:"M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"})]),E("span",{class:"text-sm ml-2"},"QU\u1EA2N L\xDD GAMES")],-1),Tj=[Sj],Dj=E("a",{href:"javascript:void(0)",class:"flex items-center focus:outline-none focus:ring-2 focus:ring-white"},[E("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-compass",width:"18",height:"18",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[E("path",{stroke:"none",d:"M0 0h24v24H0z"}),E("polyline",{points:"8 16 10 10 16 8 14 14 8 16"}),E("circle",{cx:"12",cy:"12",r:"9"})]),E("span",{class:"text-sm ml-2"},"QU\u1EA2N L\xDD TH\u1EC2 LO\u1EA0I GAME")],-1),Mj=[Dj],Ij=E("a",{href:"javascript:void(0)",class:"flex items-center focus:outline-none focus:ring-2 focus:ring-white"},[E("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},[E("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"})]),E("span",{class:"text-sm ml-2"},"QU\u1EA2N L\xDD NG\u01AF\u1EDCI D\xD9NG")],-1),Pj=[Ij],Bj=E("a",{href:"javascript:void(0)",class:"flex items-center focus:outline-none focus:ring-2 focus:ring-white"},[E("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},[E("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"})]),E("span",{class:"text-sm ml-2"},"QU\u1EA2N L\xDD B\xC1O C\xC1O")],-1),Nj={key:0,class:"py-1 px-3 bg-rose-600 rounded-full font-semibold text-gray-300 flex items-center justify-center text-xs"},Oj=E("a",{href:"javascript:void(0)",class:"flex items-center focus:outline-none focus:ring-2 focus:ring-white"},[E("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-stack",width:"18",height:"18",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[E("path",{stroke:"none",d:"M0 0h24v24H0z"}),E("polyline",{points:"12 4 4 8 12 12 20 8 12 4"}),E("polyline",{points:"4 12 12 16 20 12"}),E("polyline",{points:"4 16 12 20 20 16"})]),E("span",{class:"text-sm ml-2"},"QU\u1EA2N L\xDD TIN T\u1EE8C")],-1),Lj=[Oj],Rj=E("div",{class:"flex justify-center mt-48 mb-4 w-full"},[E("div",{class:"relative"},[E("div",{class:"text-gray-300 absolute ml-4 inset-0 m-auto w-4 h-4"},[E("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-search",width:"16",height:"16",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[E("path",{stroke:"none",d:"M0 0h24v24H0z"}),E("circle",{cx:"10",cy:"10",r:"7"}),E("line",{x1:"21",y1:"21",x2:"15",y2:"15"})])]),E("input",{class:"bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-100 rounded w-full text-sm text-gray-300 placeholder-gray-400 bg-gray-100 pl-10 py-2",type:"text",placeholder:"Search"})])],-1),zj={class:"w-64 z-40 absolute bg-gray-800 shadow md:h-full flex-col justify-between sm:hidden transition duration-150 ease-in-out",id:"mobile-nav"},jj=E("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-adjustments",width:"20",height:"20",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"#FFFFFF",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[E("path",{stroke:"none",d:"M0 0h24v24H0z"}),E("circle",{cx:"6",cy:"10",r:"2"}),E("line",{x1:"6",y1:"4",x2:"6",y2:"8"}),E("line",{x1:"6",y1:"12",x2:"6",y2:"20"}),E("circle",{cx:"12",cy:"16",r:"2"}),E("line",{x1:"12",y1:"4",x2:"12",y2:"14"}),E("line",{x1:"12",y1:"18",x2:"12",y2:"20"}),E("circle",{cx:"18",cy:"7",r:"2"}),E("line",{x1:"18",y1:"4",x2:"18",y2:"5"}),E("line",{x1:"18",y1:"9",x2:"18",y2:"20"})],-1),Fj=[jj],$j=E("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-x",width:"20",height:"20",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[E("path",{stroke:"none",d:"M0 0h24v24H0z"}),E("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),E("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1),Vj=[$j],Hj={class:"px-8"},Uj=E("div",{class:"h-16 w-full flex items-center"},[E("svg",{"aria-label":"Ripples. Logo",role:"img",xmlns:"http://www.w3.org/2000/svg",width:"144",height:"30",viewBox:"0 0 144 30"},[E("path",{fill:"#5F7DF2",d:"M80.544 9.48c1.177 0 2.194.306 3.053.92.86.614 1.513 1.45 1.962 2.507.448 1.058.673 2.247.673 3.568 0 1.303-.233 2.473-.699 3.51-.465 1.037-1.136 1.851-2.012 2.444-.876.592-1.885.888-3.028.888-1.405 0-2.704-.554-3.897-1.663v4.279h2.64v3.072h-9.14v-3.072h2.26V12.78H70.45V9.657h6.145v1.663l.209-.21c1.123-1.087 2.369-1.63 3.74-1.63zm17.675 0c1.176 0 2.194.306 3.053.92.859.614 1.513 1.45 1.961 2.507.449 1.058.673 2.247.673 3.568 0 1.303-.233 2.473-.698 3.51-.466 1.037-1.136 1.851-2.012 2.444-.876.592-1.886.888-3.028.888-1.405 0-2.704-.554-3.898-1.663v4.279h2.64v3.072h-9.14v-3.072h2.26V12.78h-1.904V9.657h6.144v1.663l.21-.21c1.122-1.087 2.368-1.63 3.739-1.63zM24.973 1c1.13 0 2.123.433 2.842 1.133 0 .004 0 .008.034.012 1.54 1.515 1.54 3.962-.034 5.472-.035.029-.069.058-.069.089-.719.65-1.712 1.05-2.773 1.05-.719 0-1.37.061-1.985.184-2.363.474-3.8 1.86-4.28 4.13-.114.489-.18 1.02-.2 1.59l-.003.176.001-.034.002.034c.022.505-.058 1.014-.239 1.495l-.076.182.064-.157c.106-.28.18-.575.217-.881l.008-.084-.026.195c-.286 1.797-1.858 3.188-3.754 3.282l-.204.005h-.103l-.103.002h-.034c-.65.012-1.232.072-1.78.181-2.328.473-3.765 1.863-4.279 4.139-.082.417-.142.863-.163 1.339l-.008.362v.23c0 2.02-1.603 3.681-3.661 3.861L4.16 29l-.48-.01c-.958-.073-1.849-.485-2.499-1.113-1.522-1.464-1.573-3.808-.152-5.33l.152-.154.103-.12c.719-.636 1.677-1.026 2.704-1.026.754 0 1.404-.062 2.02-.184 2.362-.475 3.8-1.86 4.28-4.126.136-.587.17-1.235.17-1.942 0-.991.411-1.896 1.027-2.583.069-.047.137-.097.172-.15.068-.051.102-.104.17-.159.633-.564 1.498-.925 2.408-.978l.229-.007h.034c.068 0 .171.003.274.009.616-.014 1.198-.074 1.746-.18 2.328-.474 3.766-1.863 4.279-4.135.082-.44.142-.912.163-1.418l.008-.385v-.132c0-2.138 1.78-3.872 4.005-3.877zm-.886 10c1.065 0 1.998.408 2.697 1.073.022.011.03.024.042.036l.025.017v.015c1.532 1.524 1.532 3.996 0 5.52-.034.03-.067.06-.067.09-.7.655-1.665 1.056-2.697 1.056-.7 0-1.332.062-1.932.186-2.298.477-3.696 1.873-4.163 4.157-.133.591-.2 1.242-.2 1.95 0 1.036-.399 1.975-1.032 2.674l-.1.084c-.676.679-1.551 1.055-2.441 1.13l-.223.012-.366-.006c-.633-.043-1.3-.254-1.865-.632-.156-.096-.296-.201-.432-.315l-.2-.177v-.012c-.734-.735-1.133-1.72-1.133-2.757 0-2.078 1.656-3.793 3.698-3.899l.198-.005h.133c.666-.007 1.266-.069 1.832-.185 2.265-.476 3.663-1.874 4.163-4.161.08-.442.139-.916.159-1.424l.008-.387v-.136c0-2.153 1.731-3.899 3.896-3.904zm3.882 11.025c1.375 1.367 1.375 3.583 0 4.95s-3.586 1.367-4.96 0c-1.345-1.367-1.345-3.583 0-4.95 1.374-1.367 3.585-1.367 4.96 0zm94.655-12.672c1.405 0 2.628.323 3.669.97 1.041.648 1.843 1.566 2.406 2.756.563 1.189.852 2.57.87 4.145h-9.954l.03.251c.132.906.476 1.633 1.03 2.18.605.596 1.386.895 2.343.895 1.058 0 2.09-.525 3.097-1.574l3.301 1.066-.203.291c-.69.947-1.524 1.67-2.501 2.166-1.075.545-2.349.818-3.821.818-1.473 0-2.774-.277-3.904-.831-1.13-.555-2.006-1.34-2.628-2.355-.622-1.016-.933-2.21-.933-3.58 0-1.354.324-2.582.971-3.682s1.523-1.961 2.628-2.583c1.104-.622 2.304-.933 3.599-.933zm13.955.126c1.202 0 2.314.216 3.339.648v-.47h3.034v3.91h-3.034l-.045-.137c-.317-.848-1.275-1.272-2.875-1.272-1.21 0-1.816.339-1.816 1.016 0 .296.161.516.483.66.321.144.791.262 1.409.355 1.735.22 3.102.536 4.1.946 1 .41 1.697.919 2.095 1.524.398.605.597 1.339.597 2.202 0 1.405-.48 2.5-1.441 3.282-.96.783-2.266 1.174-3.917 1.174-1.608 0-2.7-.321-3.275-.964V23h-3.098v-4.596h3.098l.032.187c.116.547.412.984.888 1.311.53.364 1.183.546 1.962.546.762 0 1.324-.087 1.688-.26.364-.174.546-.476.546-.908 0-.296-.076-.527-.228-.692-.153-.165-.447-.31-.883-.438-.435-.127-1.102-.27-2-.431-1.997-.313-3.433-.82-4.31-1.517-.875-.699-1.313-1.64-1.313-2.825 0-1.21.455-2.162 1.365-2.856.91-.695 2.11-1.042 3.599-1.042zm-69.164.178v10.27h1.98V23h-8.24v-3.072h2.032V12.78h-2.031V9.657h6.259zm-16.85-5.789l.37.005c1.94.05 3.473.494 4.6 1.335 1.198.892 1.797 2.185 1.797 3.878 0 1.168-.273 2.15-.819 2.945-.546.796-1.373 1.443-2.482 1.943l3.085 5.776h2.476V23h-5.827l-4.317-8.366h-2.183v5.116h2.4V23H39.646v-3.25h2.628V7.118h-2.628v-3.25h10.918zm61.329 0v16.06h1.892V23h-8.24v-3.072h2.082v-13h-2.082v-3.06h6.348zm-32.683 9.04c-.812 0-1.462.317-1.949.951-.486.635-.73 1.49-.73 2.565 0 1.007.252 1.847.756 2.52.503.673 1.161 1.01 1.974 1.01.838 0 1.481-.312 1.93-.934.448-.622.672-1.504.672-2.647 0-1.092-.228-1.942-.685-2.552-.457-.61-1.113-.914-1.968-.914zm17.675 0c-.813 0-1.463.317-1.95.951-.486.635-.73 1.49-.73 2.565 0 1.007.253 1.847.756 2.52.504.673 1.162 1.01 1.974 1.01.838 0 1.481-.312 1.93-.934.449-.622.673-1.504.673-2.647 0-1.092-.229-1.942-.686-2.552-.457-.61-1.113-.914-1.967-.914zM14.1 0C16.267 0 18 1.743 18 3.894v.01c0 2.155-1.733 3.903-3.9 3.903-4.166 0-6.3 2.133-6.3 6.293 0 2.103-1.667 3.817-3.734 3.9l-.5-.009c-.933-.075-1.8-.49-2.433-1.121C.4 16.134 0 15.143 0 14.1c0-2.144 1.733-3.903 3.9-3.903 4.166 0 6.3-2.133 6.3-6.294C10.2 1.751 11.934.005 14.1 0zm108.32 12.184c-.76 0-1.372.22-1.834.66-.46.44-.75 1.113-.87 2.018h5.561c-.118-.795-.442-1.44-.97-1.936-.53-.495-1.158-.742-1.886-.742zM49.525 7.118h-2.26v4.444h1.829c2.023 0 3.034-.754 3.034-2.26 0-.728-.233-1.274-.698-1.638-.466-.364-1.1-.546-1.905-.546zm15.821-3.593c.635 0 1.183.231 1.644.692.462.462.692 1.01.692 1.644 0 .677-.23 1.238-.692 1.682-.46.445-1.009.667-1.644.667-.643 0-1.195-.23-1.656-.692-.462-.461-.692-1.013-.692-1.657 0-.634.23-1.182.692-1.644.46-.461 1.013-.692 1.656-.692zM5.991 1.171c1.345 1.563 1.345 4.095 0 5.658-1.374 1.561-3.585 1.561-4.96 0-1.375-1.563-1.375-4.095 0-5.658 1.375-1.561 3.586-1.561 4.96 0z"})])],-1),Wj={class:"mt-12"},qj=E("a",{href:"javascript:void(0)",class:"flex items-center focus:outline-none focus:ring-2 focus:ring-white"},[E("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-grid",width:"18",height:"18",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[E("path",{stroke:"none",d:"M0 0h24v24H0z"}),E("rect",{x:"4",y:"4",width:"6",height:"6",rx:"1"}),E("rect",{x:"14",y:"4",width:"6",height:"6",rx:"1"}),E("rect",{x:"4",y:"14",width:"6",height:"6",rx:"1"}),E("rect",{x:"14",y:"14",width:"6",height:"6",rx:"1"})]),E("span",{class:"text-sm ml-2"},"TRANG CH\u1EE6")],-1),Gj=E("div",{class:"py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs"},"5",-1),Yj=[qj,Gj],Kj=E("a",{href:"javascript:void(0)",class:"flex items-center focus:outline-none focus:ring-2 focus:ring-white"},[E("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-puzzle",width:"18",height:"18",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[E("path",{stroke:"none",d:"M0 0h24v24H0z"}),E("path",{d:"M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"})]),E("span",{class:"text-sm ml-2"},"QU\u1EA2N L\xDD GAMES")],-1),Qj=E("div",{class:"py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs"},"8",-1),Zj=[Kj,Qj],Jj=E("a",{href:"javascript:void(0)",class:"flex items-center focus:outline-none focus:ring-2 focus:ring-white"},[E("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-compass",width:"18",height:"18",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[E("path",{stroke:"none",d:"M0 0h24v24H0z"}),E("polyline",{points:"8 16 10 10 16 8 14 14 8 16"}),E("circle",{cx:"12",cy:"12",r:"9"})]),E("span",{class:"text-sm ml-2"},"QU\u1EA2N L\xDD TH\u1EC2 LO\u1EA0I GAME")],-1),Xj=[Jj],t9=E("a",{href:"javascript:void(0)",class:"flex items-center focus:outline-none focus:ring-2 focus:ring-white"},[E("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[E("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"})]),E("span",{class:"text-sm ml-2"},"QU\u1EA2N L\xDD NG\u01AF\u1EDCI D\xD9NG")],-1),e9=[t9],n9=E("a",{href:"javascript:void(0)",class:"flex items-center focus:outline-none focus:ring-2 focus:ring-white"},[E("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},[E("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"})]),E("span",{class:"text-sm ml-2"},"QU\u1EA2N L\xDD B\xC1O C\xC1O")],-1),i9={key:0,class:"py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs"},o9=E("a",{href:"javascript:void(0)",class:"flex items-center focus:outline-none focus:ring-2 focus:ring-white"},[E("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-stack",width:"18",height:"18",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[E("path",{stroke:"none",d:"M0 0h24v24H0z"}),E("polyline",{points:"12 4 4 8 12 12 20 8 12 4"}),E("polyline",{points:"4 12 12 16 20 12"}),E("polyline",{points:"4 16 12 20 20 16"})]),E("span",{class:"text-sm ml-2"},"QU\u1EA2N L\xDD TIN T\u1EE8C")],-1),s9=[o9],r9=E("div",{class:"flex justify-center mt-48 mb-4 w-full"},[E("div",{class:"relative"},[E("div",{class:"text-gray-300 absolute ml-4 inset-0 m-auto w-4 h-4"},[E("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-search",width:"16",height:"16",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[E("path",{stroke:"none",d:"M0 0h24v24H0z"}),E("circle",{cx:"10",cy:"10",r:"7"}),E("line",{x1:"21",y1:"21",x2:"15",y2:"15"})])]),E("input",{class:"bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-100 rounded w-full text-sm text-gray-300 placeholder-gray-400 bg-gray-100 pl-10 py-2",type:"text",placeholder:"Search"})])],-1),a9={class:"container mx-auto py-10 md:w-4/5 w-11/12 px-6"},l9={__name:"AdminLayout",setup(i){const n=_i();function s(c){c?(document.getElementById("mobile-nav").style.transform="translateX(0px)",document.getElementById("openSideBar").classList.add("hidden"),document.getElementById("closeSideBar").classList.remove("hidden")):(document.getElementById("mobile-nav").style.transform="translateX(-260px)",document.getElementById("closeSideBar").classList.add("hidden"),document.getElementById("openSideBar").classList.remove("hidden"))}let r=ai(()=>Zt.state.noProcessReport);return Zt.dispatch("getNoProcessReport"),(c,u)=>{const f=ps("router-view"),g=ps("dh-component");return at(),ht("div",wj,[He(g,null,{default:pi(()=>[E("div",_j,[E("div",vj,[E("div",yj,[Cj,E("ul",Aj,[E("li",{onClick:u[0]||(u[0]=p=>rt(n).push({name:"AdminDashboard"})),class:"flex w-full justify-between text-gray-300 cursor-pointer items-center mb-6"},Ej),E("li",{onClick:u[1]||(u[1]=p=>rt(n).push({name:"AdminGames"})),class:"flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6"},Tj),E("li",{onClick:u[2]||(u[2]=p=>rt(n).push({name:"AdminTheloai"})),class:"flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6"},Mj),E("li",{onClick:u[3]||(u[3]=p=>rt(n).push({name:"AdminUser"})),class:"flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6"},Pj),E("li",{onClick:u[4]||(u[4]=p=>rt(n).push({name:"AdminReport"})),class:"flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6"},[Bj,rt(r)>0?(at(),ht("div",Nj,Qt(rt(r)),1)):ne("",!0)]),E("li",{onClick:u[5]||(u[5]=p=>rt(n).push({name:"AdminArticle"})),class:"flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6"},Lj)]),Rj])]),E("div",zj,[E("button",{"aria-label":"toggle sidebar",id:"openSideBar",class:"h-10 w-10 bg-gray-800 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 rounded focus:ring-gray-800",onClick:u[6]||(u[6]=p=>s(!0))},Fj),E("button",{"aria-label":"Close sidebar",id:"closeSideBar",class:"flex h-10 w-10 bg-gray-800 absolute right-0 mt-16 -mr-10 items-center shadow rounded-tr rounded-br justify-center cursor-pointer text-white",onClick:u[7]||(u[7]=p=>s(!1))},Vj),E("div",Hj,[Uj,E("ul",Wj,[E("li",{onClick:u[8]||(u[8]=p=>rt(n).push({name:"AdminDashboard"})),class:"flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6"},Yj),E("li",{onClick:u[9]||(u[9]=p=>rt(n).push({name:"AdminGames"})),class:"flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6"},Zj),E("li",{onClick:u[10]||(u[10]=p=>rt(n).push({name:"AdminTheloai"})),class:"flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6"},Xj),E("li",{onClick:u[11]||(u[11]=p=>rt(n).push({name:"AdminUser"})),class:"flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6"},e9),E("li",{onClick:u[12]||(u[12]=p=>rt(n).push({name:"AdminReport"})),class:"flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6"},[n9,rt(r)>0?(at(),ht("div",i9,Qt(rt(r)),1)):ne("",!0)]),E("li",{onClick:u[13]||(u[13]=p=>rt(n).push({name:"AdminArticle"})),class:"flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6"},s9)]),r9])]),E("div",a9,[He(f)])])]),_:1})])}}};/*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */function Wr(){}const c9=function(){let i=0;return function(){return i++}}();function wn(i){return i===null||typeof i>"u"}function $n(i){if(Array.isArray&&Array.isArray(i))return!0;const n=Object.prototype.toString.call(i);return n.slice(0,7)==="[object"&&n.slice(-6)==="Array]"}function un(i){return i!==null&&Object.prototype.toString.call(i)==="[object Object]"}const ji=i=>(typeof i=="number"||i instanceof Number)&&isFinite(+i);function cs(i,n){return ji(i)?i:n}function Ge(i,n){return typeof i>"u"?n:i}const d9=(i,n)=>typeof i=="string"&&i.endsWith("%")?parseFloat(i)/100:i/n,Kx=(i,n)=>typeof i=="string"&&i.endsWith("%")?parseFloat(i)/100*n:+i;function zn(i,n,s){if(i&&typeof i.call=="function")return i.apply(s,n)}function Tn(i,n,s,r){let c,u,f;if($n(i))if(u=i.length,r)for(c=u-1;c>=0;c--)n.call(s,i[c],c);else for(c=0;c<u;c++)n.call(s,i[c],c);else if(un(i))for(f=Object.keys(i),u=f.length,c=0;c<u;c++)n.call(s,i[f[c]],f[c])}function Kh(i,n){let s,r,c,u;if(!i||!n||i.length!==n.length)return!1;for(s=0,r=i.length;s<r;++s)if(c=i[s],u=n[s],c.datasetIndex!==u.datasetIndex||c.index!==u.index)return!1;return!0}function Qh(i){if($n(i))return i.map(Qh);if(un(i)){const n=Object.create(null),s=Object.keys(i),r=s.length;let c=0;for(;c<r;++c)n[s[c]]=Qh(i[s[c]]);return n}return i}function Qx(i){return["__proto__","prototype","constructor"].indexOf(i)===-1}function u9(i,n,s,r){if(!Qx(i))return;const c=n[i],u=s[i];un(c)&&un(u)?ou(c,u,r):n[i]=Qh(u)}function ou(i,n,s){const r=$n(n)?n:[n],c=r.length;if(!un(i))return i;s=s||{};const u=s.merger||u9;for(let f=0;f<c;++f){if(n=r[f],!un(n))continue;const g=Object.keys(n);for(let p=0,k=g.length;p<k;++p)u(g[p],i,n,s)}return i}function Hd(i,n){return ou(i,n,{merger:h9})}function h9(i,n,s){if(!Qx(i))return;const r=n[i],c=s[i];un(r)&&un(c)?Hd(r,c):Object.prototype.hasOwnProperty.call(n,i)||(n[i]=Qh(c))}const kC={"":i=>i,x:i=>i.x,y:i=>i.y};function Qa(i,n){return(kC[n]||(kC[n]=f9(n)))(i)}function f9(i){const n=g9(i);return s=>{for(const r of n){if(r==="")break;s=s&&s[r]}return s}}function g9(i){const n=i.split("."),s=[];let r="";for(const c of n)r+=c,r.endsWith("\\")?r=r.slice(0,-1)+".":(s.push(r),r="");return s}function xb(i){return i.charAt(0).toUpperCase()+i.slice(1)}const ms=i=>typeof i<"u",Za=i=>typeof i=="function",wC=(i,n)=>{if(i.size!==n.size)return!1;for(const s of i)if(!n.has(s))return!1;return!0};function p9(i){return i.type==="mouseup"||i.type==="click"||i.type==="contextmenu"}const qn=Math.PI,On=2*qn,m9=On+qn,Zh=Number.POSITIVE_INFINITY,b9=qn/180,ei=qn/2,Ad=qn/4,_C=qn*2/3,us=Math.log10,_r=Math.sign;function vC(i){const n=Math.round(i);i=Ud(i,n,i/1e3)?n:i;const s=Math.pow(10,Math.floor(us(i))),r=i/s;return(r<=1?1:r<=2?2:r<=5?5:10)*s}function k9(i){const n=[],s=Math.sqrt(i);let r;for(r=1;r<s;r++)i%r===0&&(n.push(r),n.push(i/r));return s===(s|0)&&n.push(s),n.sort((c,u)=>c-u).pop(),n}function Kc(i){return!isNaN(parseFloat(i))&&isFinite(i)}function Ud(i,n,s){return Math.abs(i-n)<s}function w9(i,n){const s=Math.round(i);return s-n<=i&&s+n>=i}function Zx(i,n,s){let r,c,u;for(r=0,c=i.length;r<c;r++)u=i[r][s],isNaN(u)||(n.min=Math.min(n.min,u),n.max=Math.max(n.max,u))}function Ns(i){return i*(qn/180)}function Eb(i){return i*(180/qn)}function yC(i){if(!ji(i))return;let n=1,s=0;for(;Math.round(i*n)/n!==i;)n*=10,s++;return s}function Jx(i,n){const s=n.x-i.x,r=n.y-i.y,c=Math.sqrt(s*s+r*r);let u=Math.atan2(r,s);return u<-.5*qn&&(u+=On),{angle:u,distance:c}}function xm(i,n){return Math.sqrt(Math.pow(n.x-i.x,2)+Math.pow(n.y-i.y,2))}function _9(i,n){return(i-n+m9)%On-qn}function Ps(i){return(i%On+On)%On}function su(i,n,s,r){const c=Ps(i),u=Ps(n),f=Ps(s),g=Ps(u-c),p=Ps(f-c),k=Ps(c-u),C=Ps(c-f);return c===u||c===f||r&&u===f||g>p&&k<C}function Qi(i,n,s){return Math.max(n,Math.min(s,i))}function v9(i){return Qi(i,-32768,32767)}function ja(i,n,s,r=1e-6){return i>=Math.min(n,s)-r&&i<=Math.max(n,s)+r}function Sb(i,n,s){s=s||(f=>i[f]<n);let r=i.length-1,c=0,u;for(;r-c>1;)u=c+r>>1,s(u)?c=u:r=u;return{lo:c,hi:r}}const $l=(i,n,s,r)=>Sb(i,s,r?c=>i[c][n]<=s:c=>i[c][n]<s),y9=(i,n,s)=>Sb(i,s,r=>i[r][n]>=s);function C9(i,n,s){let r=0,c=i.length;for(;r<c&&i[r]<n;)r++;for(;c>r&&i[c-1]>s;)c--;return r>0||c<i.length?i.slice(r,c):i}const Xx=["push","pop","shift","splice","unshift"];function A9(i,n){if(i._chartjs){i._chartjs.listeners.push(n);return}Object.defineProperty(i,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[n]}}),Xx.forEach(s=>{const r="_onData"+xb(s),c=i[s];Object.defineProperty(i,s,{configurable:!0,enumerable:!1,value(...u){const f=c.apply(this,u);return i._chartjs.listeners.forEach(g=>{typeof g[r]=="function"&&g[r](...u)}),f}})})}function CC(i,n){const s=i._chartjs;if(!s)return;const r=s.listeners,c=r.indexOf(n);c!==-1&&r.splice(c,1),!(r.length>0)&&(Xx.forEach(u=>{delete i[u]}),delete i._chartjs)}function t5(i){const n=new Set;let s,r;for(s=0,r=i.length;s<r;++s)n.add(i[s]);return n.size===r?i:Array.from(n)}const e5=function(){return typeof window>"u"?function(i){return i()}:window.requestAnimationFrame}();function n5(i,n,s){const r=s||(f=>Array.prototype.slice.call(f));let c=!1,u=[];return function(...f){u=r(f),c||(c=!0,e5.call(window,()=>{c=!1,i.apply(n,u)}))}}function x9(i,n){let s;return function(...r){return n?(clearTimeout(s),s=setTimeout(i,n,r)):i.apply(this,r),n}}const Tb=i=>i==="start"?"left":i==="end"?"right":"center",Yi=(i,n,s)=>i==="start"?n:i==="end"?s:(n+s)/2,E9=(i,n,s,r)=>i===(r?"left":"right")?s:i==="center"?(n+s)/2:n;function i5(i,n,s){const r=n.length;let c=0,u=r;if(i._sorted){const{iScale:f,_parsed:g}=i,p=f.axis,{min:k,max:C,minDefined:x,maxDefined:v}=f.getUserBounds();x&&(c=Qi(Math.min($l(g,f.axis,k).lo,s?r:$l(n,p,f.getPixelForValue(k)).lo),0,r-1)),v?u=Qi(Math.max($l(g,f.axis,C,!0).hi+1,s?0:$l(n,p,f.getPixelForValue(C),!0).hi+1),c,r)-c:u=r-c}return{start:c,count:u}}function o5(i){const{xScale:n,yScale:s,_scaleRanges:r}=i,c={xmin:n.min,xmax:n.max,ymin:s.min,ymax:s.max};if(!r)return i._scaleRanges=c,!0;const u=r.xmin!==n.min||r.xmax!==n.max||r.ymin!==s.min||r.ymax!==s.max;return Object.assign(r,c),u}const kh=i=>i===0||i===1,AC=(i,n,s)=>-(Math.pow(2,10*(i-=1))*Math.sin((i-n)*On/s)),xC=(i,n,s)=>Math.pow(2,-10*i)*Math.sin((i-n)*On/s)+1,Wd={linear:i=>i,easeInQuad:i=>i*i,easeOutQuad:i=>-i*(i-2),easeInOutQuad:i=>(i/=.5)<1?.5*i*i:-.5*(--i*(i-2)-1),easeInCubic:i=>i*i*i,easeOutCubic:i=>(i-=1)*i*i+1,easeInOutCubic:i=>(i/=.5)<1?.5*i*i*i:.5*((i-=2)*i*i+2),easeInQuart:i=>i*i*i*i,easeOutQuart:i=>-((i-=1)*i*i*i-1),easeInOutQuart:i=>(i/=.5)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2),easeInQuint:i=>i*i*i*i*i,easeOutQuint:i=>(i-=1)*i*i*i*i+1,easeInOutQuint:i=>(i/=.5)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2),easeInSine:i=>-Math.cos(i*ei)+1,easeOutSine:i=>Math.sin(i*ei),easeInOutSine:i=>-.5*(Math.cos(qn*i)-1),easeInExpo:i=>i===0?0:Math.pow(2,10*(i-1)),easeOutExpo:i=>i===1?1:-Math.pow(2,-10*i)+1,easeInOutExpo:i=>kh(i)?i:i<.5?.5*Math.pow(2,10*(i*2-1)):.5*(-Math.pow(2,-10*(i*2-1))+2),easeInCirc:i=>i>=1?i:-(Math.sqrt(1-i*i)-1),easeOutCirc:i=>Math.sqrt(1-(i-=1)*i),easeInOutCirc:i=>(i/=.5)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1),easeInElastic:i=>kh(i)?i:AC(i,.075,.3),easeOutElastic:i=>kh(i)?i:xC(i,.075,.3),easeInOutElastic(i){return kh(i)?i:i<.5?.5*AC(i*2,.1125,.45):.5+.5*xC(i*2-1,.1125,.45)},easeInBack(i){return i*i*((1.70158+1)*i-1.70158)},easeOutBack(i){return(i-=1)*i*((1.70158+1)*i+1.70158)+1},easeInOutBack(i){let n=1.70158;return(i/=.5)<1?.5*(i*i*(((n*=1.525)+1)*i-n)):.5*((i-=2)*i*(((n*=1.525)+1)*i+n)+2)},easeInBounce:i=>1-Wd.easeOutBounce(1-i),easeOutBounce(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},easeInOutBounce:i=>i<.5?Wd.easeInBounce(i*2)*.5:Wd.easeOutBounce(i*2-1)*.5+.5};/*!
 * @kurkle/color v0.2.1
 * https://github.com/kurkle/color#readme
 * (c) 2022 Jukka Kurkela
 * Released under the MIT License
 */function _u(i){return i+.5|0}const Fa=(i,n,s)=>Math.max(Math.min(i,s),n);function Pd(i){return Fa(_u(i*2.55),0,255)}function Ua(i){return Fa(_u(i*255),0,255)}function Qr(i){return Fa(_u(i/2.55)/100,0,1)}function EC(i){return Fa(_u(i*100),0,100)}const ls={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Em=[..."0123456789ABCDEF"],S9=i=>Em[i&15],T9=i=>Em[(i&240)>>4]+Em[i&15],wh=i=>(i&240)>>4===(i&15),D9=i=>wh(i.r)&&wh(i.g)&&wh(i.b)&&wh(i.a);function M9(i){var n=i.length,s;return i[0]==="#"&&(n===4||n===5?s={r:255&ls[i[1]]*17,g:255&ls[i[2]]*17,b:255&ls[i[3]]*17,a:n===5?ls[i[4]]*17:255}:(n===7||n===9)&&(s={r:ls[i[1]]<<4|ls[i[2]],g:ls[i[3]]<<4|ls[i[4]],b:ls[i[5]]<<4|ls[i[6]],a:n===9?ls[i[7]]<<4|ls[i[8]]:255})),s}const I9=(i,n)=>i<255?n(i):"";function P9(i){var n=D9(i)?S9:T9;return i?"#"+n(i.r)+n(i.g)+n(i.b)+I9(i.a,n):void 0}const B9=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function s5(i,n,s){const r=n*Math.min(s,1-s),c=(u,f=(u+i/30)%12)=>s-r*Math.max(Math.min(f-3,9-f,1),-1);return[c(0),c(8),c(4)]}function N9(i,n,s){const r=(c,u=(c+i/60)%6)=>s-s*n*Math.max(Math.min(u,4-u,1),0);return[r(5),r(3),r(1)]}function O9(i,n,s){const r=s5(i,1,.5);let c;for(n+s>1&&(c=1/(n+s),n*=c,s*=c),c=0;c<3;c++)r[c]*=1-n-s,r[c]+=n;return r}function L9(i,n,s,r,c){return i===c?(n-s)/r+(n<s?6:0):n===c?(s-i)/r+2:(i-n)/r+4}function Db(i){const s=i.r/255,r=i.g/255,c=i.b/255,u=Math.max(s,r,c),f=Math.min(s,r,c),g=(u+f)/2;let p,k,C;return u!==f&&(C=u-f,k=g>.5?C/(2-u-f):C/(u+f),p=L9(s,r,c,C,u),p=p*60+.5),[p|0,k||0,g]}function Mb(i,n,s,r){return(Array.isArray(n)?i(n[0],n[1],n[2]):i(n,s,r)).map(Ua)}function Ib(i,n,s){return Mb(s5,i,n,s)}function R9(i,n,s){return Mb(O9,i,n,s)}function z9(i,n,s){return Mb(N9,i,n,s)}function r5(i){return(i%360+360)%360}function j9(i){const n=B9.exec(i);let s=255,r;if(!n)return;n[5]!==r&&(s=n[6]?Pd(+n[5]):Ua(+n[5]));const c=r5(+n[2]),u=+n[3]/100,f=+n[4]/100;return n[1]==="hwb"?r=R9(c,u,f):n[1]==="hsv"?r=z9(c,u,f):r=Ib(c,u,f),{r:r[0],g:r[1],b:r[2],a:s}}function F9(i,n){var s=Db(i);s[0]=r5(s[0]+n),s=Ib(s),i.r=s[0],i.g=s[1],i.b=s[2]}function $9(i){if(!i)return;const n=Db(i),s=n[0],r=EC(n[1]),c=EC(n[2]);return i.a<255?`hsla(${s}, ${r}%, ${c}%, ${Qr(i.a)})`:`hsl(${s}, ${r}%, ${c}%)`}const SC={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},TC={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function V9(){const i={},n=Object.keys(TC),s=Object.keys(SC);let r,c,u,f,g;for(r=0;r<n.length;r++){for(f=g=n[r],c=0;c<s.length;c++)u=s[c],g=g.replace(u,SC[u]);u=parseInt(TC[f],16),i[g]=[u>>16&255,u>>8&255,u&255]}return i}let _h;function H9(i){_h||(_h=V9(),_h.transparent=[0,0,0,0]);const n=_h[i.toLowerCase()];return n&&{r:n[0],g:n[1],b:n[2],a:n.length===4?n[3]:255}}const U9=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function W9(i){const n=U9.exec(i);let s=255,r,c,u;if(!!n){if(n[7]!==r){const f=+n[7];s=n[8]?Pd(f):Fa(f*255,0,255)}return r=+n[1],c=+n[3],u=+n[5],r=255&(n[2]?Pd(r):Fa(r,0,255)),c=255&(n[4]?Pd(c):Fa(c,0,255)),u=255&(n[6]?Pd(u):Fa(u,0,255)),{r,g:c,b:u,a:s}}}function q9(i){return i&&(i.a<255?`rgba(${i.r}, ${i.g}, ${i.b}, ${Qr(i.a)})`:`rgb(${i.r}, ${i.g}, ${i.b})`)}const zp=i=>i<=.0031308?i*12.92:Math.pow(i,1/2.4)*1.055-.055,Ic=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4);function G9(i,n,s){const r=Ic(Qr(i.r)),c=Ic(Qr(i.g)),u=Ic(Qr(i.b));return{r:Ua(zp(r+s*(Ic(Qr(n.r))-r))),g:Ua(zp(c+s*(Ic(Qr(n.g))-c))),b:Ua(zp(u+s*(Ic(Qr(n.b))-u))),a:i.a+s*(n.a-i.a)}}function vh(i,n,s){if(i){let r=Db(i);r[n]=Math.max(0,Math.min(r[n]+r[n]*s,n===0?360:1)),r=Ib(r),i.r=r[0],i.g=r[1],i.b=r[2]}}function a5(i,n){return i&&Object.assign(n||{},i)}function DC(i){var n={r:0,g:0,b:0,a:255};return Array.isArray(i)?i.length>=3&&(n={r:i[0],g:i[1],b:i[2],a:255},i.length>3&&(n.a=Ua(i[3]))):(n=a5(i,{r:0,g:0,b:0,a:1}),n.a=Ua(n.a)),n}function Y9(i){return i.charAt(0)==="r"?W9(i):j9(i)}class Jh{constructor(n){if(n instanceof Jh)return n;const s=typeof n;let r;s==="object"?r=DC(n):s==="string"&&(r=M9(n)||H9(n)||Y9(n)),this._rgb=r,this._valid=!!r}get valid(){return this._valid}get rgb(){var n=a5(this._rgb);return n&&(n.a=Qr(n.a)),n}set rgb(n){this._rgb=DC(n)}rgbString(){return this._valid?q9(this._rgb):void 0}hexString(){return this._valid?P9(this._rgb):void 0}hslString(){return this._valid?$9(this._rgb):void 0}mix(n,s){if(n){const r=this.rgb,c=n.rgb;let u;const f=s===u?.5:s,g=2*f-1,p=r.a-c.a,k=((g*p===-1?g:(g+p)/(1+g*p))+1)/2;u=1-k,r.r=255&k*r.r+u*c.r+.5,r.g=255&k*r.g+u*c.g+.5,r.b=255&k*r.b+u*c.b+.5,r.a=f*r.a+(1-f)*c.a,this.rgb=r}return this}interpolate(n,s){return n&&(this._rgb=G9(this._rgb,n._rgb,s)),this}clone(){return new Jh(this.rgb)}alpha(n){return this._rgb.a=Ua(n),this}clearer(n){const s=this._rgb;return s.a*=1-n,this}greyscale(){const n=this._rgb,s=_u(n.r*.3+n.g*.59+n.b*.11);return n.r=n.g=n.b=s,this}opaquer(n){const s=this._rgb;return s.a*=1+n,this}negate(){const n=this._rgb;return n.r=255-n.r,n.g=255-n.g,n.b=255-n.b,this}lighten(n){return vh(this._rgb,2,n),this}darken(n){return vh(this._rgb,2,-n),this}saturate(n){return vh(this._rgb,1,n),this}desaturate(n){return vh(this._rgb,1,-n),this}rotate(n){return F9(this._rgb,n),this}}function l5(i){return new Jh(i)}function c5(i){if(i&&typeof i=="object"){const n=i.toString();return n==="[object CanvasPattern]"||n==="[object CanvasGradient]"}return!1}function MC(i){return c5(i)?i:l5(i)}function jp(i){return c5(i)?i:l5(i).saturate(.5).darken(.1).hexString()}const Xl=Object.create(null),Sm=Object.create(null);function qd(i,n){if(!n)return i;const s=n.split(".");for(let r=0,c=s.length;r<c;++r){const u=s[r];i=i[u]||(i[u]=Object.create(null))}return i}function Fp(i,n,s){return typeof n=="string"?ou(qd(i,n),s):ou(qd(i,""),n)}class K9{constructor(n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=s=>s.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(s,r)=>jp(r.backgroundColor),this.hoverBorderColor=(s,r)=>jp(r.borderColor),this.hoverColor=(s,r)=>jp(r.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(n)}set(n,s){return Fp(this,n,s)}get(n){return qd(this,n)}describe(n,s){return Fp(Sm,n,s)}override(n,s){return Fp(Xl,n,s)}route(n,s,r,c){const u=qd(this,n),f=qd(this,r),g="_"+s;Object.defineProperties(u,{[g]:{value:u[s],writable:!0},[s]:{enumerable:!0,get(){const p=this[g],k=f[c];return un(p)?Object.assign({},k,p):Ge(p,k)},set(p){this[g]=p}}})}}var on=new K9({_scriptable:i=>!i.startsWith("on"),_indexable:i=>i!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}});function Q9(i){return!i||wn(i.size)||wn(i.family)?null:(i.style?i.style+" ":"")+(i.weight?i.weight+" ":"")+i.size+"px "+i.family}function Xh(i,n,s,r,c){let u=n[c];return u||(u=n[c]=i.measureText(c).width,s.push(c)),u>r&&(r=u),r}function Z9(i,n,s,r){r=r||{};let c=r.data=r.data||{},u=r.garbageCollect=r.garbageCollect||[];r.font!==n&&(c=r.data={},u=r.garbageCollect=[],r.font=n),i.save(),i.font=n;let f=0;const g=s.length;let p,k,C,x,v;for(p=0;p<g;p++)if(x=s[p],x!=null&&$n(x)!==!0)f=Xh(i,c,u,f,x);else if($n(x))for(k=0,C=x.length;k<C;k++)v=x[k],v!=null&&!$n(v)&&(f=Xh(i,c,u,f,v));i.restore();const M=u.length/2;if(M>s.length){for(p=0;p<M;p++)delete c[u[p]];u.splice(0,M)}return f}function Bl(i,n,s){const r=i.currentDevicePixelRatio,c=s!==0?Math.max(s/2,.5):0;return Math.round((n-c)*r)/r+c}function IC(i,n){n=n||i.getContext("2d"),n.save(),n.resetTransform(),n.clearRect(0,0,i.width,i.height),n.restore()}function Tm(i,n,s,r){d5(i,n,s,r,null)}function d5(i,n,s,r,c){let u,f,g,p,k,C;const x=n.pointStyle,v=n.rotation,M=n.radius;let z=(v||0)*b9;if(x&&typeof x=="object"&&(u=x.toString(),u==="[object HTMLImageElement]"||u==="[object HTMLCanvasElement]")){i.save(),i.translate(s,r),i.rotate(z),i.drawImage(x,-x.width/2,-x.height/2,x.width,x.height),i.restore();return}if(!(isNaN(M)||M<=0)){switch(i.beginPath(),x){default:c?i.ellipse(s,r,c/2,M,0,0,On):i.arc(s,r,M,0,On),i.closePath();break;case"triangle":i.moveTo(s+Math.sin(z)*M,r-Math.cos(z)*M),z+=_C,i.lineTo(s+Math.sin(z)*M,r-Math.cos(z)*M),z+=_C,i.lineTo(s+Math.sin(z)*M,r-Math.cos(z)*M),i.closePath();break;case"rectRounded":k=M*.516,p=M-k,f=Math.cos(z+Ad)*p,g=Math.sin(z+Ad)*p,i.arc(s-f,r-g,k,z-qn,z-ei),i.arc(s+g,r-f,k,z-ei,z),i.arc(s+f,r+g,k,z,z+ei),i.arc(s-g,r+f,k,z+ei,z+qn),i.closePath();break;case"rect":if(!v){p=Math.SQRT1_2*M,C=c?c/2:p,i.rect(s-C,r-p,2*C,2*p);break}z+=Ad;case"rectRot":f=Math.cos(z)*M,g=Math.sin(z)*M,i.moveTo(s-f,r-g),i.lineTo(s+g,r-f),i.lineTo(s+f,r+g),i.lineTo(s-g,r+f),i.closePath();break;case"crossRot":z+=Ad;case"cross":f=Math.cos(z)*M,g=Math.sin(z)*M,i.moveTo(s-f,r-g),i.lineTo(s+f,r+g),i.moveTo(s+g,r-f),i.lineTo(s-g,r+f);break;case"star":f=Math.cos(z)*M,g=Math.sin(z)*M,i.moveTo(s-f,r-g),i.lineTo(s+f,r+g),i.moveTo(s+g,r-f),i.lineTo(s-g,r+f),z+=Ad,f=Math.cos(z)*M,g=Math.sin(z)*M,i.moveTo(s-f,r-g),i.lineTo(s+f,r+g),i.moveTo(s+g,r-f),i.lineTo(s-g,r+f);break;case"line":f=c?c/2:Math.cos(z)*M,g=Math.sin(z)*M,i.moveTo(s-f,r-g),i.lineTo(s+f,r+g);break;case"dash":i.moveTo(s,r),i.lineTo(s+Math.cos(z)*M,r+Math.sin(z)*M);break}i.fill(),n.borderWidth>0&&i.stroke()}}function ru(i,n,s){return s=s||.5,!n||i&&i.x>n.left-s&&i.x<n.right+s&&i.y>n.top-s&&i.y<n.bottom+s}function Pb(i,n){i.save(),i.beginPath(),i.rect(n.left,n.top,n.right-n.left,n.bottom-n.top),i.clip()}function Bb(i){i.restore()}function J9(i,n,s,r,c){if(!n)return i.lineTo(s.x,s.y);if(c==="middle"){const u=(n.x+s.x)/2;i.lineTo(u,n.y),i.lineTo(u,s.y)}else c==="after"!=!!r?i.lineTo(n.x,s.y):i.lineTo(s.x,n.y);i.lineTo(s.x,s.y)}function X9(i,n,s,r){if(!n)return i.lineTo(s.x,s.y);i.bezierCurveTo(r?n.cp1x:n.cp2x,r?n.cp1y:n.cp2y,r?s.cp2x:s.cp1x,r?s.cp2y:s.cp1y,s.x,s.y)}function tc(i,n,s,r,c,u={}){const f=$n(n)?n:[n],g=u.strokeWidth>0&&u.strokeColor!=="";let p,k;for(i.save(),i.font=c.string,tF(i,u),p=0;p<f.length;++p)k=f[p],g&&(u.strokeColor&&(i.strokeStyle=u.strokeColor),wn(u.strokeWidth)||(i.lineWidth=u.strokeWidth),i.strokeText(k,s,r,u.maxWidth)),i.fillText(k,s,r,u.maxWidth),eF(i,s,r,k,u),r+=c.lineHeight;i.restore()}function tF(i,n){n.translation&&i.translate(n.translation[0],n.translation[1]),wn(n.rotation)||i.rotate(n.rotation),n.color&&(i.fillStyle=n.color),n.textAlign&&(i.textAlign=n.textAlign),n.textBaseline&&(i.textBaseline=n.textBaseline)}function eF(i,n,s,r,c){if(c.strikethrough||c.underline){const u=i.measureText(r),f=n-u.actualBoundingBoxLeft,g=n+u.actualBoundingBoxRight,p=s-u.actualBoundingBoxAscent,k=s+u.actualBoundingBoxDescent,C=c.strikethrough?(p+k)/2:k;i.strokeStyle=i.fillStyle,i.beginPath(),i.lineWidth=c.decorationWidth||2,i.moveTo(f,C),i.lineTo(g,C),i.stroke()}}function au(i,n){const{x:s,y:r,w:c,h:u,radius:f}=n;i.arc(s+f.topLeft,r+f.topLeft,f.topLeft,-ei,qn,!0),i.lineTo(s,r+u-f.bottomLeft),i.arc(s+f.bottomLeft,r+u-f.bottomLeft,f.bottomLeft,qn,ei,!0),i.lineTo(s+c-f.bottomRight,r+u),i.arc(s+c-f.bottomRight,r+u-f.bottomRight,f.bottomRight,ei,0,!0),i.lineTo(s+c,r+f.topRight),i.arc(s+c-f.topRight,r+f.topRight,f.topRight,0,-ei,!0),i.lineTo(s+f.topLeft,r)}const nF=new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),iF=new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);function oF(i,n){const s=(""+i).match(nF);if(!s||s[1]==="normal")return n*1.2;switch(i=+s[2],s[3]){case"px":return i;case"%":i/=100;break}return n*i}const sF=i=>+i||0;function Nb(i,n){const s={},r=un(n),c=r?Object.keys(n):n,u=un(i)?r?f=>Ge(i[f],i[n[f]]):f=>i[f]:()=>i;for(const f of c)s[f]=sF(u(f));return s}function u5(i){return Nb(i,{top:"y",right:"x",bottom:"y",left:"x"})}function ql(i){return Nb(i,["topLeft","topRight","bottomLeft","bottomRight"])}function Xi(i){const n=u5(i);return n.width=n.left+n.right,n.height=n.top+n.bottom,n}function wi(i,n){i=i||{},n=n||on.font;let s=Ge(i.size,n.size);typeof s=="string"&&(s=parseInt(s,10));let r=Ge(i.style,n.style);r&&!(""+r).match(iF)&&(console.warn('Invalid font style specified: "'+r+'"'),r="");const c={family:Ge(i.family,n.family),lineHeight:oF(Ge(i.lineHeight,n.lineHeight),s),size:s,style:r,weight:Ge(i.weight,n.weight),string:""};return c.string=Q9(c),c}function yh(i,n,s,r){let c=!0,u,f,g;for(u=0,f=i.length;u<f;++u)if(g=i[u],g!==void 0&&(n!==void 0&&typeof g=="function"&&(g=g(n),c=!1),s!==void 0&&$n(g)&&(g=g[s%g.length],c=!1),g!==void 0))return r&&!c&&(r.cacheable=!1),g}function rF(i,n,s){const{min:r,max:c}=i,u=Kx(n,(c-r)/2),f=(g,p)=>s&&g===0?0:g+p;return{min:f(r,-Math.abs(u)),max:f(c,u)}}function el(i,n){return Object.assign(Object.create(i),n)}function Ob(i,n=[""],s=i,r,c=()=>i[0]){ms(r)||(r=p5("_fallback",i));const u={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:i,_rootScopes:s,_fallback:r,_getTarget:c,override:f=>Ob([f,...i],n,s,r)};return new Proxy(u,{deleteProperty(f,g){return delete f[g],delete f._keys,delete i[0][g],!0},get(f,g){return f5(f,g,()=>gF(g,n,i,f))},getOwnPropertyDescriptor(f,g){return Reflect.getOwnPropertyDescriptor(f._scopes[0],g)},getPrototypeOf(){return Reflect.getPrototypeOf(i[0])},has(f,g){return BC(f).includes(g)},ownKeys(f){return BC(f)},set(f,g,p){const k=f._storage||(f._storage=c());return f[g]=k[g]=p,delete f._keys,!0}})}function Qc(i,n,s,r){const c={_cacheable:!1,_proxy:i,_context:n,_subProxy:s,_stack:new Set,_descriptors:h5(i,r),setContext:u=>Qc(i,u,s,r),override:u=>Qc(i.override(u),n,s,r)};return new Proxy(c,{deleteProperty(u,f){return delete u[f],delete i[f],!0},get(u,f,g){return f5(u,f,()=>lF(u,f,g))},getOwnPropertyDescriptor(u,f){return u._descriptors.allKeys?Reflect.has(i,f)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(i,f)},getPrototypeOf(){return Reflect.getPrototypeOf(i)},has(u,f){return Reflect.has(i,f)},ownKeys(){return Reflect.ownKeys(i)},set(u,f,g){return i[f]=g,delete u[f],!0}})}function h5(i,n={scriptable:!0,indexable:!0}){const{_scriptable:s=n.scriptable,_indexable:r=n.indexable,_allKeys:c=n.allKeys}=i;return{allKeys:c,scriptable:s,indexable:r,isScriptable:Za(s)?s:()=>s,isIndexable:Za(r)?r:()=>r}}const aF=(i,n)=>i?i+xb(n):n,Lb=(i,n)=>un(n)&&i!=="adapters"&&(Object.getPrototypeOf(n)===null||n.constructor===Object);function f5(i,n,s){if(Object.prototype.hasOwnProperty.call(i,n))return i[n];const r=s();return i[n]=r,r}function lF(i,n,s){const{_proxy:r,_context:c,_subProxy:u,_descriptors:f}=i;let g=r[n];return Za(g)&&f.isScriptable(n)&&(g=cF(n,g,i,s)),$n(g)&&g.length&&(g=dF(n,g,i,f.isIndexable)),Lb(n,g)&&(g=Qc(g,c,u&&u[n],f)),g}function cF(i,n,s,r){const{_proxy:c,_context:u,_subProxy:f,_stack:g}=s;if(g.has(i))throw new Error("Recursion detected: "+Array.from(g).join("->")+"->"+i);return g.add(i),n=n(u,f||r),g.delete(i),Lb(i,n)&&(n=Rb(c._scopes,c,i,n)),n}function dF(i,n,s,r){const{_proxy:c,_context:u,_subProxy:f,_descriptors:g}=s;if(ms(u.index)&&r(i))n=n[u.index%n.length];else if(un(n[0])){const p=n,k=c._scopes.filter(C=>C!==p);n=[];for(const C of p){const x=Rb(k,c,i,C);n.push(Qc(x,u,f&&f[i],g))}}return n}function g5(i,n,s){return Za(i)?i(n,s):i}const uF=(i,n)=>i===!0?n:typeof i=="string"?Qa(n,i):void 0;function hF(i,n,s,r,c){for(const u of n){const f=uF(s,u);if(f){i.add(f);const g=g5(f._fallback,s,c);if(ms(g)&&g!==s&&g!==r)return g}else if(f===!1&&ms(r)&&s!==r)return null}return!1}function Rb(i,n,s,r){const c=n._rootScopes,u=g5(n._fallback,s,r),f=[...i,...c],g=new Set;g.add(r);let p=PC(g,f,s,u||s,r);return p===null||ms(u)&&u!==s&&(p=PC(g,f,u,p,r),p===null)?!1:Ob(Array.from(g),[""],c,u,()=>fF(n,s,r))}function PC(i,n,s,r,c){for(;s;)s=hF(i,n,s,r,c);return s}function fF(i,n,s){const r=i._getTarget();n in r||(r[n]={});const c=r[n];return $n(c)&&un(s)?s:c}function gF(i,n,s,r){let c;for(const u of n)if(c=p5(aF(u,i),s),ms(c))return Lb(i,c)?Rb(s,r,i,c):c}function p5(i,n){for(const s of n){if(!s)continue;const r=s[i];if(ms(r))return r}}function BC(i){let n=i._keys;return n||(n=i._keys=pF(i._scopes)),n}function pF(i){const n=new Set;for(const s of i)for(const r of Object.keys(s).filter(c=>!c.startsWith("_")))n.add(r);return Array.from(n)}function m5(i,n,s,r){const{iScale:c}=i,{key:u="r"}=this._parsing,f=new Array(r);let g,p,k,C;for(g=0,p=r;g<p;++g)k=g+s,C=n[k],f[g]={r:c.parse(Qa(C,u),k)};return f}const mF=Number.EPSILON||1e-14,Zc=(i,n)=>n<i.length&&!i[n].skip&&i[n],b5=i=>i==="x"?"y":"x";function bF(i,n,s,r){const c=i.skip?n:i,u=n,f=s.skip?n:s,g=xm(u,c),p=xm(f,u);let k=g/(g+p),C=p/(g+p);k=isNaN(k)?0:k,C=isNaN(C)?0:C;const x=r*k,v=r*C;return{previous:{x:u.x-x*(f.x-c.x),y:u.y-x*(f.y-c.y)},next:{x:u.x+v*(f.x-c.x),y:u.y+v*(f.y-c.y)}}}function kF(i,n,s){const r=i.length;let c,u,f,g,p,k=Zc(i,0);for(let C=0;C<r-1;++C)if(p=k,k=Zc(i,C+1),!(!p||!k)){if(Ud(n[C],0,mF)){s[C]=s[C+1]=0;continue}c=s[C]/n[C],u=s[C+1]/n[C],g=Math.pow(c,2)+Math.pow(u,2),!(g<=9)&&(f=3/Math.sqrt(g),s[C]=c*f*n[C],s[C+1]=u*f*n[C])}}function wF(i,n,s="x"){const r=b5(s),c=i.length;let u,f,g,p=Zc(i,0);for(let k=0;k<c;++k){if(f=g,g=p,p=Zc(i,k+1),!g)continue;const C=g[s],x=g[r];f&&(u=(C-f[s])/3,g[`cp1${s}`]=C-u,g[`cp1${r}`]=x-u*n[k]),p&&(u=(p[s]-C)/3,g[`cp2${s}`]=C+u,g[`cp2${r}`]=x+u*n[k])}}function _F(i,n="x"){const s=b5(n),r=i.length,c=Array(r).fill(0),u=Array(r);let f,g,p,k=Zc(i,0);for(f=0;f<r;++f)if(g=p,p=k,k=Zc(i,f+1),!!p){if(k){const C=k[n]-p[n];c[f]=C!==0?(k[s]-p[s])/C:0}u[f]=g?k?_r(c[f-1])!==_r(c[f])?0:(c[f-1]+c[f])/2:c[f-1]:c[f]}kF(i,c,u),wF(i,u,n)}function Ch(i,n,s){return Math.max(Math.min(i,s),n)}function vF(i,n){let s,r,c,u,f,g=ru(i[0],n);for(s=0,r=i.length;s<r;++s)f=u,u=g,g=s<r-1&&ru(i[s+1],n),u&&(c=i[s],f&&(c.cp1x=Ch(c.cp1x,n.left,n.right),c.cp1y=Ch(c.cp1y,n.top,n.bottom)),g&&(c.cp2x=Ch(c.cp2x,n.left,n.right),c.cp2y=Ch(c.cp2y,n.top,n.bottom)))}function yF(i,n,s,r,c){let u,f,g,p;if(n.spanGaps&&(i=i.filter(k=>!k.skip)),n.cubicInterpolationMode==="monotone")_F(i,c);else{let k=r?i[i.length-1]:i[0];for(u=0,f=i.length;u<f;++u)g=i[u],p=bF(k,g,i[Math.min(u+1,f-(r?0:1))%f],n.tension),g.cp1x=p.previous.x,g.cp1y=p.previous.y,g.cp2x=p.next.x,g.cp2y=p.next.y,k=g}n.capBezierPoints&&vF(i,s)}function k5(){return typeof window<"u"&&typeof document<"u"}function zb(i){let n=i.parentNode;return n&&n.toString()==="[object ShadowRoot]"&&(n=n.host),n}function tf(i,n,s){let r;return typeof i=="string"?(r=parseInt(i,10),i.indexOf("%")!==-1&&(r=r/100*n.parentNode[s])):r=i,r}const Bf=i=>window.getComputedStyle(i,null);function CF(i,n){return Bf(i).getPropertyValue(n)}const AF=["top","right","bottom","left"];function Gl(i,n,s){const r={};s=s?"-"+s:"";for(let c=0;c<4;c++){const u=AF[c];r[u]=parseFloat(i[n+"-"+u+s])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}const xF=(i,n,s)=>(i>0||n>0)&&(!s||!s.shadowRoot);function EF(i,n){const s=i.touches,r=s&&s.length?s[0]:i,{offsetX:c,offsetY:u}=r;let f=!1,g,p;if(xF(c,u,i.target))g=c,p=u;else{const k=n.getBoundingClientRect();g=r.clientX-k.left,p=r.clientY-k.top,f=!0}return{x:g,y:p,box:f}}function Ll(i,n){if("native"in i)return i;const{canvas:s,currentDevicePixelRatio:r}=n,c=Bf(s),u=c.boxSizing==="border-box",f=Gl(c,"padding"),g=Gl(c,"border","width"),{x:p,y:k,box:C}=EF(i,s),x=f.left+(C&&g.left),v=f.top+(C&&g.top);let{width:M,height:z}=n;return u&&(M-=f.width+g.width,z-=f.height+g.height),{x:Math.round((p-x)/M*s.width/r),y:Math.round((k-v)/z*s.height/r)}}function SF(i,n,s){let r,c;if(n===void 0||s===void 0){const u=zb(i);if(!u)n=i.clientWidth,s=i.clientHeight;else{const f=u.getBoundingClientRect(),g=Bf(u),p=Gl(g,"border","width"),k=Gl(g,"padding");n=f.width-k.width-p.width,s=f.height-k.height-p.height,r=tf(g.maxWidth,u,"clientWidth"),c=tf(g.maxHeight,u,"clientHeight")}}return{width:n,height:s,maxWidth:r||Zh,maxHeight:c||Zh}}const $p=i=>Math.round(i*10)/10;function TF(i,n,s,r){const c=Bf(i),u=Gl(c,"margin"),f=tf(c.maxWidth,i,"clientWidth")||Zh,g=tf(c.maxHeight,i,"clientHeight")||Zh,p=SF(i,n,s);let{width:k,height:C}=p;if(c.boxSizing==="content-box"){const x=Gl(c,"border","width"),v=Gl(c,"padding");k-=v.width+x.width,C-=v.height+x.height}return k=Math.max(0,k-u.width),C=Math.max(0,r?Math.floor(k/r):C-u.height),k=$p(Math.min(k,f,p.maxWidth)),C=$p(Math.min(C,g,p.maxHeight)),k&&!C&&(C=$p(k/2)),{width:k,height:C}}function NC(i,n,s){const r=n||1,c=Math.floor(i.height*r),u=Math.floor(i.width*r);i.height=c/r,i.width=u/r;const f=i.canvas;return f.style&&(s||!f.style.height&&!f.style.width)&&(f.style.height=`${i.height}px`,f.style.width=`${i.width}px`),i.currentDevicePixelRatio!==r||f.height!==c||f.width!==u?(i.currentDevicePixelRatio=r,f.height=c,f.width=u,i.ctx.setTransform(r,0,0,r,0,0),!0):!1}const DF=function(){let i=!1;try{const n={get passive(){return i=!0,!1}};window.addEventListener("test",null,n),window.removeEventListener("test",null,n)}catch{}return i}();function OC(i,n){const s=CF(i,n),r=s&&s.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function Rl(i,n,s,r){return{x:i.x+s*(n.x-i.x),y:i.y+s*(n.y-i.y)}}function MF(i,n,s,r){return{x:i.x+s*(n.x-i.x),y:r==="middle"?s<.5?i.y:n.y:r==="after"?s<1?i.y:n.y:s>0?n.y:i.y}}function IF(i,n,s,r){const c={x:i.cp2x,y:i.cp2y},u={x:n.cp1x,y:n.cp1y},f=Rl(i,c,s),g=Rl(c,u,s),p=Rl(u,n,s),k=Rl(f,g,s),C=Rl(g,p,s);return Rl(k,C,s)}const LC=new Map;function PF(i,n){n=n||{};const s=i+JSON.stringify(n);let r=LC.get(s);return r||(r=new Intl.NumberFormat(i,n),LC.set(s,r)),r}function vu(i,n,s){return PF(n,s).format(i)}const BF=function(i,n){return{x(s){return i+i+n-s},setWidth(s){n=s},textAlign(s){return s==="center"?s:s==="right"?"left":"right"},xPlus(s,r){return s-r},leftForLtr(s,r){return s-r}}},NF=function(){return{x(i){return i},setWidth(i){},textAlign(i){return i},xPlus(i,n){return i+n},leftForLtr(i,n){return i}}};function $c(i,n,s){return i?BF(n,s):NF()}function w5(i,n){let s,r;(n==="ltr"||n==="rtl")&&(s=i.canvas.style,r=[s.getPropertyValue("direction"),s.getPropertyPriority("direction")],s.setProperty("direction",n,"important"),i.prevTextDirection=r)}function _5(i,n){n!==void 0&&(delete i.prevTextDirection,i.canvas.style.setProperty("direction",n[0],n[1]))}function v5(i){return i==="angle"?{between:su,compare:_9,normalize:Ps}:{between:ja,compare:(n,s)=>n-s,normalize:n=>n}}function RC({start:i,end:n,count:s,loop:r,style:c}){return{start:i%s,end:n%s,loop:r&&(n-i+1)%s===0,style:c}}function OF(i,n,s){const{property:r,start:c,end:u}=s,{between:f,normalize:g}=v5(r),p=n.length;let{start:k,end:C,loop:x}=i,v,M;if(x){for(k+=p,C+=p,v=0,M=p;v<M&&f(g(n[k%p][r]),c,u);++v)k--,C--;k%=p,C%=p}return C<k&&(C+=p),{start:k,end:C,loop:x,style:i.style}}function LF(i,n,s){if(!s)return[i];const{property:r,start:c,end:u}=s,f=n.length,{compare:g,between:p,normalize:k}=v5(r),{start:C,end:x,loop:v,style:M}=OF(i,n,s),z=[];let H=!1,Z=null,U,W,tt;const dt=()=>p(c,tt,U)&&g(c,tt)!==0,st=()=>g(u,U)===0||p(u,tt,U),I=()=>H||dt(),mt=()=>!H||st();for(let pt=C,_t=C;pt<=x;++pt)W=n[pt%f],!W.skip&&(U=k(W[r]),U!==tt&&(H=p(U,c,u),Z===null&&I()&&(Z=g(U,c)===0?pt:_t),Z!==null&&mt()&&(z.push(RC({start:Z,end:pt,loop:v,count:f,style:M})),Z=null),_t=pt,tt=U));return Z!==null&&z.push(RC({start:Z,end:x,loop:v,count:f,style:M})),z}function RF(i,n){const s=[],r=i.segments;for(let c=0;c<r.length;c++){const u=LF(r[c],i.points,n);u.length&&s.push(...u)}return s}function zF(i,n,s,r){let c=0,u=n-1;if(s&&!r)for(;c<n&&!i[c].skip;)c++;for(;c<n&&i[c].skip;)c++;for(c%=n,s&&(u+=c);u>c&&i[u%n].skip;)u--;return u%=n,{start:c,end:u}}function jF(i,n,s,r){const c=i.length,u=[];let f=n,g=i[n],p;for(p=n+1;p<=s;++p){const k=i[p%c];k.skip||k.stop?g.skip||(r=!1,u.push({start:n%c,end:(p-1)%c,loop:r}),n=f=k.stop?p:null):(f=p,g.skip&&(n=p)),g=k}return f!==null&&u.push({start:n%c,end:f%c,loop:r}),u}function FF(i,n){const s=i.points,r=i.options.spanGaps,c=s.length;if(!c)return[];const u=!!i._loop,{start:f,end:g}=zF(s,c,u,r);if(r===!0)return zC(i,[{start:f,end:g,loop:u}],s,n);const p=g<f?g+c:g,k=!!i._fullLoop&&f===0&&g===c-1;return zC(i,jF(s,f,p,k),s,n)}function zC(i,n,s,r){return!r||!r.setContext||!s?n:$F(i,n,s,r)}function $F(i,n,s,r){const c=i._chart.getContext(),u=jC(i.options),{_datasetIndex:f,options:{spanGaps:g}}=i,p=s.length,k=[];let C=u,x=n[0].start,v=x;function M(z,H,Z,U){const W=g?-1:1;if(z!==H){for(z+=p;s[z%p].skip;)z-=W;for(;s[H%p].skip;)H+=W;z%p!==H%p&&(k.push({start:z%p,end:H%p,loop:Z,style:U}),C=U,x=H%p)}}for(const z of n){x=g?x:z.start;let H=s[x%p],Z;for(v=x+1;v<=z.end;v++){const U=s[v%p];Z=jC(r.setContext(el(c,{type:"segment",p0:H,p1:U,p0DataIndex:(v-1)%p,p1DataIndex:v%p,datasetIndex:f}))),VF(Z,C)&&M(x,v-1,z.loop,C),H=U,C=Z}x<v-1&&M(x,v-1,z.loop,C)}return k}function jC(i){return{backgroundColor:i.backgroundColor,borderCapStyle:i.borderCapStyle,borderDash:i.borderDash,borderDashOffset:i.borderDashOffset,borderJoinStyle:i.borderJoinStyle,borderWidth:i.borderWidth,borderColor:i.borderColor}}function VF(i,n){return n&&JSON.stringify(i)!==JSON.stringify(n)}/*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */class HF{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(n,s,r,c){const u=s.listeners[c],f=s.duration;u.forEach(g=>g({chart:n,initial:s.initial,numSteps:f,currentStep:Math.min(r-s.start,f)}))}_refresh(){this._request||(this._running=!0,this._request=e5.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(n=Date.now()){let s=0;this._charts.forEach((r,c)=>{if(!r.running||!r.items.length)return;const u=r.items;let f=u.length-1,g=!1,p;for(;f>=0;--f)p=u[f],p._active?(p._total>r.duration&&(r.duration=p._total),p.tick(n),g=!0):(u[f]=u[u.length-1],u.pop());g&&(c.draw(),this._notify(c,r,n,"progress")),u.length||(r.running=!1,this._notify(c,r,n,"complete"),r.initial=!1),s+=u.length}),this._lastDate=n,s===0&&(this._running=!1)}_getAnims(n){const s=this._charts;let r=s.get(n);return r||(r={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},s.set(n,r)),r}listen(n,s,r){this._getAnims(n).listeners[s].push(r)}add(n,s){!s||!s.length||this._getAnims(n).items.push(...s)}has(n){return this._getAnims(n).items.length>0}start(n){const s=this._charts.get(n);!s||(s.running=!0,s.start=Date.now(),s.duration=s.items.reduce((r,c)=>Math.max(r,c._duration),0),this._refresh())}running(n){if(!this._running)return!1;const s=this._charts.get(n);return!(!s||!s.running||!s.items.length)}stop(n){const s=this._charts.get(n);if(!s||!s.items.length)return;const r=s.items;let c=r.length-1;for(;c>=0;--c)r[c].cancel();s.items=[],this._notify(n,s,Date.now(),"complete")}remove(n){return this._charts.delete(n)}}var Gr=new HF;const FC="transparent",UF={boolean(i,n,s){return s>.5?n:i},color(i,n,s){const r=MC(i||FC),c=r.valid&&MC(n||FC);return c&&c.valid?c.mix(r,s).hexString():n},number(i,n,s){return i+(n-i)*s}};class WF{constructor(n,s,r,c){const u=s[r];c=yh([n.to,c,u,n.from]);const f=yh([n.from,u,c]);this._active=!0,this._fn=n.fn||UF[n.type||typeof f],this._easing=Wd[n.easing]||Wd.linear,this._start=Math.floor(Date.now()+(n.delay||0)),this._duration=this._total=Math.floor(n.duration),this._loop=!!n.loop,this._target=s,this._prop=r,this._from=f,this._to=c,this._promises=void 0}active(){return this._active}update(n,s,r){if(this._active){this._notify(!1);const c=this._target[this._prop],u=r-this._start,f=this._duration-u;this._start=r,this._duration=Math.floor(Math.max(f,n.duration)),this._total+=u,this._loop=!!n.loop,this._to=yh([n.to,s,c,n.from]),this._from=yh([n.from,c,s])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(n){const s=n-this._start,r=this._duration,c=this._prop,u=this._from,f=this._loop,g=this._to;let p;if(this._active=u!==g&&(f||s<r),!this._active){this._target[c]=g,this._notify(!0);return}if(s<0){this._target[c]=u;return}p=s/r%2,p=f&&p>1?2-p:p,p=this._easing(Math.min(1,Math.max(0,p))),this._target[c]=this._fn(u,g,p)}wait(){const n=this._promises||(this._promises=[]);return new Promise((s,r)=>{n.push({res:s,rej:r})})}_notify(n){const s=n?"res":"rej",r=this._promises||[];for(let c=0;c<r.length;c++)r[c][s]()}}const qF=["x","y","borderWidth","radius","tension"],GF=["color","borderColor","backgroundColor"];on.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0});const YF=Object.keys(on.animation);on.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:i=>i!=="onProgress"&&i!=="onComplete"&&i!=="fn"});on.set("animations",{colors:{type:"color",properties:GF},numbers:{type:"number",properties:qF}});on.describe("animations",{_fallback:"animation"});on.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:i=>i|0}}}});class y5{constructor(n,s){this._chart=n,this._properties=new Map,this.configure(s)}configure(n){if(!un(n))return;const s=this._properties;Object.getOwnPropertyNames(n).forEach(r=>{const c=n[r];if(!un(c))return;const u={};for(const f of YF)u[f]=c[f];($n(c.properties)&&c.properties||[r]).forEach(f=>{(f===r||!s.has(f))&&s.set(f,u)})})}_animateOptions(n,s){const r=s.options,c=QF(n,r);if(!c)return[];const u=this._createAnimations(c,r);return r.$shared&&KF(n.options.$animations,r).then(()=>{n.options=r},()=>{}),u}_createAnimations(n,s){const r=this._properties,c=[],u=n.$animations||(n.$animations={}),f=Object.keys(s),g=Date.now();let p;for(p=f.length-1;p>=0;--p){const k=f[p];if(k.charAt(0)==="$")continue;if(k==="options"){c.push(...this._animateOptions(n,s));continue}const C=s[k];let x=u[k];const v=r.get(k);if(x)if(v&&x.active()){x.update(v,C,g);continue}else x.cancel();if(!v||!v.duration){n[k]=C;continue}u[k]=x=new WF(v,n,k,C),c.push(x)}return c}update(n,s){if(this._properties.size===0){Object.assign(n,s);return}const r=this._createAnimations(n,s);if(r.length)return Gr.add(this._chart,r),!0}}function KF(i,n){const s=[],r=Object.keys(n);for(let c=0;c<r.length;c++){const u=i[r[c]];u&&u.active()&&s.push(u.wait())}return Promise.all(s)}function QF(i,n){if(!n)return;let s=i.options;if(!s){i.options=n;return}return s.$shared&&(i.options=s=Object.assign({},s,{$shared:!1,$animations:{}})),s}function $C(i,n){const s=i&&i.options||{},r=s.reverse,c=s.min===void 0?n:0,u=s.max===void 0?n:0;return{start:r?u:c,end:r?c:u}}function ZF(i,n,s){if(s===!1)return!1;const r=$C(i,s),c=$C(n,s);return{top:c.end,right:r.end,bottom:c.start,left:r.start}}function JF(i){let n,s,r,c;return un(i)?(n=i.top,s=i.right,r=i.bottom,c=i.left):n=s=r=c=i,{top:n,right:s,bottom:r,left:c,disabled:i===!1}}function C5(i,n){const s=[],r=i._getSortedDatasetMetas(n);let c,u;for(c=0,u=r.length;c<u;++c)s.push(r[c].index);return s}function VC(i,n,s,r={}){const c=i.keys,u=r.mode==="single";let f,g,p,k;if(n!==null){for(f=0,g=c.length;f<g;++f){if(p=+c[f],p===s){if(r.all)continue;break}k=i.values[p],ji(k)&&(u||n===0||_r(n)===_r(k))&&(n+=k)}return n}}function XF(i){const n=Object.keys(i),s=new Array(n.length);let r,c,u;for(r=0,c=n.length;r<c;++r)u=n[r],s[r]={x:u,y:i[u]};return s}function HC(i,n){const s=i&&i.options.stacked;return s||s===void 0&&n.stack!==void 0}function t$(i,n,s){return`${i.id}.${n.id}.${s.stack||s.type}`}function e$(i){const{min:n,max:s,minDefined:r,maxDefined:c}=i.getUserBounds();return{min:r?n:Number.NEGATIVE_INFINITY,max:c?s:Number.POSITIVE_INFINITY}}function n$(i,n,s){const r=i[n]||(i[n]={});return r[s]||(r[s]={})}function UC(i,n,s,r){for(const c of n.getMatchingVisibleMetas(r).reverse()){const u=i[c.index];if(s&&u>0||!s&&u<0)return c.index}return null}function WC(i,n){const{chart:s,_cachedMeta:r}=i,c=s._stacks||(s._stacks={}),{iScale:u,vScale:f,index:g}=r,p=u.axis,k=f.axis,C=t$(u,f,r),x=n.length;let v;for(let M=0;M<x;++M){const z=n[M],{[p]:H,[k]:Z}=z,U=z._stacks||(z._stacks={});v=U[k]=n$(c,C,H),v[g]=Z,v._top=UC(v,f,!0,r.type),v._bottom=UC(v,f,!1,r.type)}}function Vp(i,n){const s=i.scales;return Object.keys(s).filter(r=>s[r].axis===n).shift()}function i$(i,n){return el(i,{active:!1,dataset:void 0,datasetIndex:n,index:n,mode:"default",type:"dataset"})}function o$(i,n,s){return el(i,{active:!1,dataIndex:n,parsed:void 0,raw:void 0,element:s,index:n,mode:"default",type:"data"})}function xd(i,n){const s=i.controller.index,r=i.vScale&&i.vScale.axis;if(!!r){n=n||i._parsed;for(const c of n){const u=c._stacks;if(!u||u[r]===void 0||u[r][s]===void 0)return;delete u[r][s]}}}const Hp=i=>i==="reset"||i==="none",qC=(i,n)=>n?i:Object.assign({},i),s$=(i,n,s)=>i&&!n.hidden&&n._stacked&&{keys:C5(s,!0),values:null};class js{constructor(n,s){this.chart=n,this._ctx=n.ctx,this.index=s,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.initialize()}initialize(){const n=this._cachedMeta;this.configure(),this.linkScales(),n._stacked=HC(n.vScale,n),this.addElements()}updateIndex(n){this.index!==n&&xd(this._cachedMeta),this.index=n}linkScales(){const n=this.chart,s=this._cachedMeta,r=this.getDataset(),c=(x,v,M,z)=>x==="x"?v:x==="r"?z:M,u=s.xAxisID=Ge(r.xAxisID,Vp(n,"x")),f=s.yAxisID=Ge(r.yAxisID,Vp(n,"y")),g=s.rAxisID=Ge(r.rAxisID,Vp(n,"r")),p=s.indexAxis,k=s.iAxisID=c(p,u,f,g),C=s.vAxisID=c(p,f,u,g);s.xScale=this.getScaleForId(u),s.yScale=this.getScaleForId(f),s.rScale=this.getScaleForId(g),s.iScale=this.getScaleForId(k),s.vScale=this.getScaleForId(C)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(n){return this.chart.scales[n]}_getOtherScale(n){const s=this._cachedMeta;return n===s.iScale?s.vScale:s.iScale}reset(){this._update("reset")}_destroy(){const n=this._cachedMeta;this._data&&CC(this._data,this),n._stacked&&xd(n)}_dataCheck(){const n=this.getDataset(),s=n.data||(n.data=[]),r=this._data;if(un(s))this._data=XF(s);else if(r!==s){if(r){CC(r,this);const c=this._cachedMeta;xd(c),c._parsed=[]}s&&Object.isExtensible(s)&&A9(s,this),this._syncList=[],this._data=s}}addElements(){const n=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(n.dataset=new this.datasetElementType)}buildOrUpdateElements(n){const s=this._cachedMeta,r=this.getDataset();let c=!1;this._dataCheck();const u=s._stacked;s._stacked=HC(s.vScale,s),s.stack!==r.stack&&(c=!0,xd(s),s.stack=r.stack),this._resyncElements(n),(c||u!==s._stacked)&&WC(this,s._parsed)}configure(){const n=this.chart.config,s=n.datasetScopeKeys(this._type),r=n.getOptionScopes(this.getDataset(),s,!0);this.options=n.createResolver(r,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(n,s){const{_cachedMeta:r,_data:c}=this,{iScale:u,_stacked:f}=r,g=u.axis;let p=n===0&&s===c.length?!0:r._sorted,k=n>0&&r._parsed[n-1],C,x,v;if(this._parsing===!1)r._parsed=c,r._sorted=!0,v=c;else{$n(c[n])?v=this.parseArrayData(r,c,n,s):un(c[n])?v=this.parseObjectData(r,c,n,s):v=this.parsePrimitiveData(r,c,n,s);const M=()=>x[g]===null||k&&x[g]<k[g];for(C=0;C<s;++C)r._parsed[C+n]=x=v[C],p&&(M()&&(p=!1),k=x);r._sorted=p}f&&WC(this,v)}parsePrimitiveData(n,s,r,c){const{iScale:u,vScale:f}=n,g=u.axis,p=f.axis,k=u.getLabels(),C=u===f,x=new Array(c);let v,M,z;for(v=0,M=c;v<M;++v)z=v+r,x[v]={[g]:C||u.parse(k[z],z),[p]:f.parse(s[z],z)};return x}parseArrayData(n,s,r,c){const{xScale:u,yScale:f}=n,g=new Array(c);let p,k,C,x;for(p=0,k=c;p<k;++p)C=p+r,x=s[C],g[p]={x:u.parse(x[0],C),y:f.parse(x[1],C)};return g}parseObjectData(n,s,r,c){const{xScale:u,yScale:f}=n,{xAxisKey:g="x",yAxisKey:p="y"}=this._parsing,k=new Array(c);let C,x,v,M;for(C=0,x=c;C<x;++C)v=C+r,M=s[v],k[C]={x:u.parse(Qa(M,g),v),y:f.parse(Qa(M,p),v)};return k}getParsed(n){return this._cachedMeta._parsed[n]}getDataElement(n){return this._cachedMeta.data[n]}applyStack(n,s,r){const c=this.chart,u=this._cachedMeta,f=s[n.axis],g={keys:C5(c,!0),values:s._stacks[n.axis]};return VC(g,f,u.index,{mode:r})}updateRangeFromParsed(n,s,r,c){const u=r[s.axis];let f=u===null?NaN:u;const g=c&&r._stacks[s.axis];c&&g&&(c.values=g,f=VC(c,u,this._cachedMeta.index)),n.min=Math.min(n.min,f),n.max=Math.max(n.max,f)}getMinMax(n,s){const r=this._cachedMeta,c=r._parsed,u=r._sorted&&n===r.iScale,f=c.length,g=this._getOtherScale(n),p=s$(s,r,this.chart),k={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:C,max:x}=e$(g);let v,M;function z(){M=c[v];const H=M[g.axis];return!ji(M[n.axis])||C>H||x<H}for(v=0;v<f&&!(!z()&&(this.updateRangeFromParsed(k,n,M,p),u));++v);if(u){for(v=f-1;v>=0;--v)if(!z()){this.updateRangeFromParsed(k,n,M,p);break}}return k}getAllParsedValues(n){const s=this._cachedMeta._parsed,r=[];let c,u,f;for(c=0,u=s.length;c<u;++c)f=s[c][n.axis],ji(f)&&r.push(f);return r}getMaxOverflow(){return!1}getLabelAndValue(n){const s=this._cachedMeta,r=s.iScale,c=s.vScale,u=this.getParsed(n);return{label:r?""+r.getLabelForValue(u[r.axis]):"",value:c?""+c.getLabelForValue(u[c.axis]):""}}_update(n){const s=this._cachedMeta;this.update(n||"default"),s._clip=JF(Ge(this.options.clip,ZF(s.xScale,s.yScale,this.getMaxOverflow())))}update(n){}draw(){const n=this._ctx,s=this.chart,r=this._cachedMeta,c=r.data||[],u=s.chartArea,f=[],g=this._drawStart||0,p=this._drawCount||c.length-g,k=this.options.drawActiveElementsOnTop;let C;for(r.dataset&&r.dataset.draw(n,u,g,p),C=g;C<g+p;++C){const x=c[C];x.hidden||(x.active&&k?f.push(x):x.draw(n,u))}for(C=0;C<f.length;++C)f[C].draw(n,u)}getStyle(n,s){const r=s?"active":"default";return n===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(r):this.resolveDataElementOptions(n||0,r)}getContext(n,s,r){const c=this.getDataset();let u;if(n>=0&&n<this._cachedMeta.data.length){const f=this._cachedMeta.data[n];u=f.$context||(f.$context=o$(this.getContext(),n,f)),u.parsed=this.getParsed(n),u.raw=c.data[n],u.index=u.dataIndex=n}else u=this.$context||(this.$context=i$(this.chart.getContext(),this.index)),u.dataset=c,u.index=u.datasetIndex=this.index;return u.active=!!s,u.mode=r,u}resolveDatasetElementOptions(n){return this._resolveElementOptions(this.datasetElementType.id,n)}resolveDataElementOptions(n,s){return this._resolveElementOptions(this.dataElementType.id,s,n)}_resolveElementOptions(n,s="default",r){const c=s==="active",u=this._cachedDataOpts,f=n+"-"+s,g=u[f],p=this.enableOptionSharing&&ms(r);if(g)return qC(g,p);const k=this.chart.config,C=k.datasetElementScopeKeys(this._type,n),x=c?[`${n}Hover`,"hover",n,""]:[n,""],v=k.getOptionScopes(this.getDataset(),C),M=Object.keys(on.elements[n]),z=()=>this.getContext(r,c),H=k.resolveNamedOptions(v,M,z,x);return H.$shared&&(H.$shared=p,u[f]=Object.freeze(qC(H,p))),H}_resolveAnimations(n,s,r){const c=this.chart,u=this._cachedDataOpts,f=`animation-${s}`,g=u[f];if(g)return g;let p;if(c.options.animation!==!1){const C=this.chart.config,x=C.datasetAnimationScopeKeys(this._type,s),v=C.getOptionScopes(this.getDataset(),x);p=C.createResolver(v,this.getContext(n,r,s))}const k=new y5(c,p&&p.animations);return p&&p._cacheable&&(u[f]=Object.freeze(k)),k}getSharedOptions(n){if(!!n.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},n))}includeOptions(n,s){return!s||Hp(n)||this.chart._animationsDisabled}_getSharedOptions(n,s){const r=this.resolveDataElementOptions(n,s),c=this._sharedOptions,u=this.getSharedOptions(r),f=this.includeOptions(s,u)||u!==c;return this.updateSharedOptions(u,s,r),{sharedOptions:u,includeOptions:f}}updateElement(n,s,r,c){Hp(c)?Object.assign(n,r):this._resolveAnimations(s,c).update(n,r)}updateSharedOptions(n,s,r){n&&!Hp(s)&&this._resolveAnimations(void 0,s).update(n,r)}_setStyle(n,s,r,c){n.active=c;const u=this.getStyle(s,c);this._resolveAnimations(s,r,c).update(n,{options:!c&&this.getSharedOptions(u)||u})}removeHoverStyle(n,s,r){this._setStyle(n,r,"active",!1)}setHoverStyle(n,s,r){this._setStyle(n,r,"active",!0)}_removeDatasetHoverStyle(){const n=this._cachedMeta.dataset;n&&this._setStyle(n,void 0,"active",!1)}_setDatasetHoverStyle(){const n=this._cachedMeta.dataset;n&&this._setStyle(n,void 0,"active",!0)}_resyncElements(n){const s=this._data,r=this._cachedMeta.data;for(const[g,p,k]of this._syncList)this[g](p,k);this._syncList=[];const c=r.length,u=s.length,f=Math.min(u,c);f&&this.parse(0,f),u>c?this._insertElements(c,u-c,n):u<c&&this._removeElements(u,c-u)}_insertElements(n,s,r=!0){const c=this._cachedMeta,u=c.data,f=n+s;let g;const p=k=>{for(k.length+=s,g=k.length-1;g>=f;g--)k[g]=k[g-s]};for(p(u),g=n;g<f;++g)u[g]=new this.dataElementType;this._parsing&&p(c._parsed),this.parse(n,s),r&&this.updateElements(u,n,s,"reset")}updateElements(n,s,r,c){}_removeElements(n,s){const r=this._cachedMeta;if(this._parsing){const c=r._parsed.splice(n,s);r._stacked&&xd(r,c)}r.data.splice(n,s)}_sync(n){if(this._parsing)this._syncList.push(n);else{const[s,r,c]=n;this[s](r,c)}this.chart._dataChanges.push([this.index,...n])}_onDataPush(){const n=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-n,n])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(n,s){s&&this._sync(["_removeElements",n,s]);const r=arguments.length-2;r&&this._sync(["_insertElements",n,r])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}js.defaults={};js.prototype.datasetElementType=null;js.prototype.dataElementType=null;function r$(i,n){if(!i._cache.$bar){const s=i.getMatchingVisibleMetas(n);let r=[];for(let c=0,u=s.length;c<u;c++)r=r.concat(s[c].controller.getAllParsedValues(i));i._cache.$bar=t5(r.sort((c,u)=>c-u))}return i._cache.$bar}function a$(i){const n=i.iScale,s=r$(n,i.type);let r=n._length,c,u,f,g;const p=()=>{f===32767||f===-32768||(ms(g)&&(r=Math.min(r,Math.abs(f-g)||r)),g=f)};for(c=0,u=s.length;c<u;++c)f=n.getPixelForValue(s[c]),p();for(g=void 0,c=0,u=n.ticks.length;c<u;++c)f=n.getPixelForTick(c),p();return r}function l$(i,n,s,r){const c=s.barThickness;let u,f;return wn(c)?(u=n.min*s.categoryPercentage,f=s.barPercentage):(u=c*r,f=1),{chunk:u/r,ratio:f,start:n.pixels[i]-u/2}}function c$(i,n,s,r){const c=n.pixels,u=c[i];let f=i>0?c[i-1]:null,g=i<c.length-1?c[i+1]:null;const p=s.categoryPercentage;f===null&&(f=u-(g===null?n.end-n.start:g-u)),g===null&&(g=u+u-f);const k=u-(u-Math.min(f,g))/2*p;return{chunk:Math.abs(g-f)/2*p/r,ratio:s.barPercentage,start:k}}function d$(i,n,s,r){const c=s.parse(i[0],r),u=s.parse(i[1],r),f=Math.min(c,u),g=Math.max(c,u);let p=f,k=g;Math.abs(f)>Math.abs(g)&&(p=g,k=f),n[s.axis]=k,n._custom={barStart:p,barEnd:k,start:c,end:u,min:f,max:g}}function A5(i,n,s,r){return $n(i)?d$(i,n,s,r):n[s.axis]=s.parse(i,r),n}function GC(i,n,s,r){const c=i.iScale,u=i.vScale,f=c.getLabels(),g=c===u,p=[];let k,C,x,v;for(k=s,C=s+r;k<C;++k)v=n[k],x={},x[c.axis]=g||c.parse(f[k],k),p.push(A5(v,x,u,k));return p}function Up(i){return i&&i.barStart!==void 0&&i.barEnd!==void 0}function u$(i,n,s){return i!==0?_r(i):(n.isHorizontal()?1:-1)*(n.min>=s?1:-1)}function h$(i){let n,s,r,c,u;return i.horizontal?(n=i.base>i.x,s="left",r="right"):(n=i.base<i.y,s="bottom",r="top"),n?(c="end",u="start"):(c="start",u="end"),{start:s,end:r,reverse:n,top:c,bottom:u}}function f$(i,n,s,r){let c=n.borderSkipped;const u={};if(!c){i.borderSkipped=u;return}if(c===!0){i.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:f,end:g,reverse:p,top:k,bottom:C}=h$(i);c==="middle"&&s&&(i.enableBorderRadius=!0,(s._top||0)===r?c=k:(s._bottom||0)===r?c=C:(u[YC(C,f,g,p)]=!0,c=k)),u[YC(c,f,g,p)]=!0,i.borderSkipped=u}function YC(i,n,s,r){return r?(i=g$(i,n,s),i=KC(i,s,n)):i=KC(i,n,s),i}function g$(i,n,s){return i===n?s:i===s?n:i}function KC(i,n,s){return i==="start"?n:i==="end"?s:i}function p$(i,{inflateAmount:n},s){i.inflateAmount=n==="auto"?s===1?.33:0:n}class Nf extends js{parsePrimitiveData(n,s,r,c){return GC(n,s,r,c)}parseArrayData(n,s,r,c){return GC(n,s,r,c)}parseObjectData(n,s,r,c){const{iScale:u,vScale:f}=n,{xAxisKey:g="x",yAxisKey:p="y"}=this._parsing,k=u.axis==="x"?g:p,C=f.axis==="x"?g:p,x=[];let v,M,z,H;for(v=r,M=r+c;v<M;++v)H=s[v],z={},z[u.axis]=u.parse(Qa(H,k),v),x.push(A5(Qa(H,C),z,f,v));return x}updateRangeFromParsed(n,s,r,c){super.updateRangeFromParsed(n,s,r,c);const u=r._custom;u&&s===this._cachedMeta.vScale&&(n.min=Math.min(n.min,u.min),n.max=Math.max(n.max,u.max))}getMaxOverflow(){return 0}getLabelAndValue(n){const s=this._cachedMeta,{iScale:r,vScale:c}=s,u=this.getParsed(n),f=u._custom,g=Up(f)?"["+f.start+", "+f.end+"]":""+c.getLabelForValue(u[c.axis]);return{label:""+r.getLabelForValue(u[r.axis]),value:g}}initialize(){this.enableOptionSharing=!0,super.initialize();const n=this._cachedMeta;n.stack=this.getDataset().stack}update(n){const s=this._cachedMeta;this.updateElements(s.data,0,s.data.length,n)}updateElements(n,s,r,c){const u=c==="reset",{index:f,_cachedMeta:{vScale:g}}=this,p=g.getBasePixel(),k=g.isHorizontal(),C=this._getRuler(),{sharedOptions:x,includeOptions:v}=this._getSharedOptions(s,c);for(let M=s;M<s+r;M++){const z=this.getParsed(M),H=u||wn(z[g.axis])?{base:p,head:p}:this._calculateBarValuePixels(M),Z=this._calculateBarIndexPixels(M,C),U=(z._stacks||{})[g.axis],W={horizontal:k,base:H.base,enableBorderRadius:!U||Up(z._custom)||f===U._top||f===U._bottom,x:k?H.head:Z.center,y:k?Z.center:H.head,height:k?Z.size:Math.abs(H.size),width:k?Math.abs(H.size):Z.size};v&&(W.options=x||this.resolveDataElementOptions(M,n[M].active?"active":c));const tt=W.options||n[M].options;f$(W,tt,U,f),p$(W,tt,C.ratio),this.updateElement(n[M],M,W,c)}}_getStacks(n,s){const{iScale:r}=this._cachedMeta,c=r.getMatchingVisibleMetas(this._type).filter(p=>p.controller.options.grouped),u=r.options.stacked,f=[],g=p=>{const k=p.controller.getParsed(s),C=k&&k[p.vScale.axis];if(wn(C)||isNaN(C))return!0};for(const p of c)if(!(s!==void 0&&g(p))&&((u===!1||f.indexOf(p.stack)===-1||u===void 0&&p.stack===void 0)&&f.push(p.stack),p.index===n))break;return f.length||f.push(void 0),f}_getStackCount(n){return this._getStacks(void 0,n).length}_getStackIndex(n,s,r){const c=this._getStacks(n,r),u=s!==void 0?c.indexOf(s):-1;return u===-1?c.length-1:u}_getRuler(){const n=this.options,s=this._cachedMeta,r=s.iScale,c=[];let u,f;for(u=0,f=s.data.length;u<f;++u)c.push(r.getPixelForValue(this.getParsed(u)[r.axis],u));const g=n.barThickness;return{min:g||a$(s),pixels:c,start:r._startPixel,end:r._endPixel,stackCount:this._getStackCount(),scale:r,grouped:n.grouped,ratio:g?1:n.categoryPercentage*n.barPercentage}}_calculateBarValuePixels(n){const{_cachedMeta:{vScale:s,_stacked:r},options:{base:c,minBarLength:u}}=this,f=c||0,g=this.getParsed(n),p=g._custom,k=Up(p);let C=g[s.axis],x=0,v=r?this.applyStack(s,g,r):C,M,z;v!==C&&(x=v-C,v=C),k&&(C=p.barStart,v=p.barEnd-p.barStart,C!==0&&_r(C)!==_r(p.barEnd)&&(x=0),x+=C);const H=!wn(c)&&!k?c:x;let Z=s.getPixelForValue(H);if(this.chart.getDataVisibility(n)?M=s.getPixelForValue(x+v):M=Z,z=M-Z,Math.abs(z)<u){z=u$(z,s,f)*u,C===f&&(Z-=z/2);const U=s.getPixelForDecimal(0),W=s.getPixelForDecimal(1),tt=Math.min(U,W),dt=Math.max(U,W);Z=Math.max(Math.min(Z,dt),tt),M=Z+z}if(Z===s.getPixelForValue(f)){const U=_r(z)*s.getLineWidthForValue(f)/2;Z+=U,z-=U}return{size:z,base:Z,head:M,center:M+z/2}}_calculateBarIndexPixels(n,s){const r=s.scale,c=this.options,u=c.skipNull,f=Ge(c.maxBarThickness,1/0);let g,p;if(s.grouped){const k=u?this._getStackCount(n):s.stackCount,C=c.barThickness==="flex"?c$(n,s,c,k):l$(n,s,c,k),x=this._getStackIndex(this.index,this._cachedMeta.stack,u?n:void 0);g=C.start+C.chunk*x+C.chunk/2,p=Math.min(f,C.chunk*C.ratio)}else g=r.getPixelForValue(this.getParsed(n)[r.axis],n),p=Math.min(f,s.min*s.ratio);return{base:g-p/2,head:g+p/2,center:g,size:p}}draw(){const n=this._cachedMeta,s=n.vScale,r=n.data,c=r.length;let u=0;for(;u<c;++u)this.getParsed(u)[s.axis]!==null&&r[u].draw(this._ctx)}}Nf.id="bar";Nf.defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}};Nf.overrides={scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};class jb extends js{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(n,s,r,c){const u=super.parsePrimitiveData(n,s,r,c);for(let f=0;f<u.length;f++)u[f]._custom=this.resolveDataElementOptions(f+r).radius;return u}parseArrayData(n,s,r,c){const u=super.parseArrayData(n,s,r,c);for(let f=0;f<u.length;f++){const g=s[r+f];u[f]._custom=Ge(g[2],this.resolveDataElementOptions(f+r).radius)}return u}parseObjectData(n,s,r,c){const u=super.parseObjectData(n,s,r,c);for(let f=0;f<u.length;f++){const g=s[r+f];u[f]._custom=Ge(g&&g.r&&+g.r,this.resolveDataElementOptions(f+r).radius)}return u}getMaxOverflow(){const n=this._cachedMeta.data;let s=0;for(let r=n.length-1;r>=0;--r)s=Math.max(s,n[r].size(this.resolveDataElementOptions(r))/2);return s>0&&s}getLabelAndValue(n){const s=this._cachedMeta,{xScale:r,yScale:c}=s,u=this.getParsed(n),f=r.getLabelForValue(u.x),g=c.getLabelForValue(u.y),p=u._custom;return{label:s.label,value:"("+f+", "+g+(p?", "+p:"")+")"}}update(n){const s=this._cachedMeta.data;this.updateElements(s,0,s.length,n)}updateElements(n,s,r,c){const u=c==="reset",{iScale:f,vScale:g}=this._cachedMeta,{sharedOptions:p,includeOptions:k}=this._getSharedOptions(s,c),C=f.axis,x=g.axis;for(let v=s;v<s+r;v++){const M=n[v],z=!u&&this.getParsed(v),H={},Z=H[C]=u?f.getPixelForDecimal(.5):f.getPixelForValue(z[C]),U=H[x]=u?g.getBasePixel():g.getPixelForValue(z[x]);H.skip=isNaN(Z)||isNaN(U),k&&(H.options=p||this.resolveDataElementOptions(v,M.active?"active":c),u&&(H.options.radius=0)),this.updateElement(M,v,H,c)}}resolveDataElementOptions(n,s){const r=this.getParsed(n);let c=super.resolveDataElementOptions(n,s);c.$shared&&(c=Object.assign({},c,{$shared:!1}));const u=c.radius;return s!=="active"&&(c.radius=0),c.radius+=Ge(r&&r._custom,u),c}}jb.id="bubble";jb.defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}};jb.overrides={scales:{x:{type:"linear"},y:{type:"linear"}},plugins:{tooltip:{callbacks:{title(){return""}}}}};function m$(i,n,s){let r=1,c=1,u=0,f=0;if(n<On){const g=i,p=g+n,k=Math.cos(g),C=Math.sin(g),x=Math.cos(p),v=Math.sin(p),M=(tt,dt,st)=>su(tt,g,p,!0)?1:Math.max(dt,dt*s,st,st*s),z=(tt,dt,st)=>su(tt,g,p,!0)?-1:Math.min(dt,dt*s,st,st*s),H=M(0,k,x),Z=M(ei,C,v),U=z(qn,k,x),W=z(qn+ei,C,v);r=(H-U)/2,c=(Z-W)/2,u=-(H+U)/2,f=-(Z+W)/2}return{ratioX:r,ratioY:c,offsetX:u,offsetY:f}}class yu extends js{constructor(n,s){super(n,s),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(n,s){const r=this.getDataset().data,c=this._cachedMeta;if(this._parsing===!1)c._parsed=r;else{let u=p=>+r[p];if(un(r[n])){const{key:p="value"}=this._parsing;u=k=>+Qa(r[k],p)}let f,g;for(f=n,g=n+s;f<g;++f)c._parsed[f]=u(f)}}_getRotation(){return Ns(this.options.rotation-90)}_getCircumference(){return Ns(this.options.circumference)}_getRotationExtents(){let n=On,s=-On;for(let r=0;r<this.chart.data.datasets.length;++r)if(this.chart.isDatasetVisible(r)){const c=this.chart.getDatasetMeta(r).controller,u=c._getRotation(),f=c._getCircumference();n=Math.min(n,u),s=Math.max(s,u+f)}return{rotation:n,circumference:s-n}}update(n){const s=this.chart,{chartArea:r}=s,c=this._cachedMeta,u=c.data,f=this.getMaxBorderWidth()+this.getMaxOffset(u)+this.options.spacing,g=Math.max((Math.min(r.width,r.height)-f)/2,0),p=Math.min(d9(this.options.cutout,g),1),k=this._getRingWeight(this.index),{circumference:C,rotation:x}=this._getRotationExtents(),{ratioX:v,ratioY:M,offsetX:z,offsetY:H}=m$(x,C,p),Z=(r.width-f)/v,U=(r.height-f)/M,W=Math.max(Math.min(Z,U)/2,0),tt=Kx(this.options.radius,W),dt=Math.max(tt*p,0),st=(tt-dt)/this._getVisibleDatasetWeightTotal();this.offsetX=z*tt,this.offsetY=H*tt,c.total=this.calculateTotal(),this.outerRadius=tt-st*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-st*k,0),this.updateElements(u,0,u.length,n)}_circumference(n,s){const r=this.options,c=this._cachedMeta,u=this._getCircumference();return s&&r.animation.animateRotate||!this.chart.getDataVisibility(n)||c._parsed[n]===null||c.data[n].hidden?0:this.calculateCircumference(c._parsed[n]*u/On)}updateElements(n,s,r,c){const u=c==="reset",f=this.chart,g=f.chartArea,k=f.options.animation,C=(g.left+g.right)/2,x=(g.top+g.bottom)/2,v=u&&k.animateScale,M=v?0:this.innerRadius,z=v?0:this.outerRadius,{sharedOptions:H,includeOptions:Z}=this._getSharedOptions(s,c);let U=this._getRotation(),W;for(W=0;W<s;++W)U+=this._circumference(W,u);for(W=s;W<s+r;++W){const tt=this._circumference(W,u),dt=n[W],st={x:C+this.offsetX,y:x+this.offsetY,startAngle:U,endAngle:U+tt,circumference:tt,outerRadius:z,innerRadius:M};Z&&(st.options=H||this.resolveDataElementOptions(W,dt.active?"active":c)),U+=tt,this.updateElement(dt,W,st,c)}}calculateTotal(){const n=this._cachedMeta,s=n.data;let r=0,c;for(c=0;c<s.length;c++){const u=n._parsed[c];u!==null&&!isNaN(u)&&this.chart.getDataVisibility(c)&&!s[c].hidden&&(r+=Math.abs(u))}return r}calculateCircumference(n){const s=this._cachedMeta.total;return s>0&&!isNaN(n)?On*(Math.abs(n)/s):0}getLabelAndValue(n){const s=this._cachedMeta,r=this.chart,c=r.data.labels||[],u=vu(s._parsed[n],r.options.locale);return{label:c[n]||"",value:u}}getMaxBorderWidth(n){let s=0;const r=this.chart;let c,u,f,g,p;if(!n){for(c=0,u=r.data.datasets.length;c<u;++c)if(r.isDatasetVisible(c)){f=r.getDatasetMeta(c),n=f.data,g=f.controller;break}}if(!n)return 0;for(c=0,u=n.length;c<u;++c)p=g.resolveDataElementOptions(c),p.borderAlign!=="inner"&&(s=Math.max(s,p.borderWidth||0,p.hoverBorderWidth||0));return s}getMaxOffset(n){let s=0;for(let r=0,c=n.length;r<c;++r){const u=this.resolveDataElementOptions(r);s=Math.max(s,u.offset||0,u.hoverOffset||0)}return s}_getRingWeightOffset(n){let s=0;for(let r=0;r<n;++r)this.chart.isDatasetVisible(r)&&(s+=this._getRingWeight(r));return s}_getRingWeight(n){return Math.max(Ge(this.chart.data.datasets[n].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}yu.id="doughnut";yu.defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"};yu.descriptors={_scriptable:i=>i!=="spacing",_indexable:i=>i!=="spacing"};yu.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(i){const n=i.data;if(n.labels.length&&n.datasets.length){const{labels:{pointStyle:s}}=i.legend.options;return n.labels.map((r,c)=>{const f=i.getDatasetMeta(0).controller.getStyle(c);return{text:r,fillStyle:f.backgroundColor,strokeStyle:f.borderColor,lineWidth:f.borderWidth,pointStyle:s,hidden:!i.getDataVisibility(c),index:c}})}return[]}},onClick(i,n,s){s.chart.toggleDataVisibility(n.index),s.chart.update()}},tooltip:{callbacks:{title(){return""},label(i){let n=i.label;const s=": "+i.formattedValue;return $n(n)?(n=n.slice(),n[0]+=s):n+=s,n}}}}};class Of extends js{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(n){const s=this._cachedMeta,{dataset:r,data:c=[],_dataset:u}=s,f=this.chart._animationsDisabled;let{start:g,count:p}=i5(s,c,f);this._drawStart=g,this._drawCount=p,o5(s)&&(g=0,p=c.length),r._chart=this.chart,r._datasetIndex=this.index,r._decimated=!!u._decimated,r.points=c;const k=this.resolveDatasetElementOptions(n);this.options.showLine||(k.borderWidth=0),k.segment=this.options.segment,this.updateElement(r,void 0,{animated:!f,options:k},n),this.updateElements(c,g,p,n)}updateElements(n,s,r,c){const u=c==="reset",{iScale:f,vScale:g,_stacked:p,_dataset:k}=this._cachedMeta,{sharedOptions:C,includeOptions:x}=this._getSharedOptions(s,c),v=f.axis,M=g.axis,{spanGaps:z,segment:H}=this.options,Z=Kc(z)?z:Number.POSITIVE_INFINITY,U=this.chart._animationsDisabled||u||c==="none";let W=s>0&&this.getParsed(s-1);for(let tt=s;tt<s+r;++tt){const dt=n[tt],st=this.getParsed(tt),I=U?dt:{},mt=wn(st[M]),pt=I[v]=f.getPixelForValue(st[v],tt),_t=I[M]=u||mt?g.getBasePixel():g.getPixelForValue(p?this.applyStack(g,st,p):st[M],tt);I.skip=isNaN(pt)||isNaN(_t)||mt,I.stop=tt>0&&Math.abs(st[v]-W[v])>Z,H&&(I.parsed=st,I.raw=k.data[tt]),x&&(I.options=C||this.resolveDataElementOptions(tt,dt.active?"active":c)),U||this.updateElement(dt,tt,I,c),W=st}}getMaxOverflow(){const n=this._cachedMeta,s=n.dataset,r=s.options&&s.options.borderWidth||0,c=n.data||[];if(!c.length)return r;const u=c[0].size(this.resolveDataElementOptions(0)),f=c[c.length-1].size(this.resolveDataElementOptions(c.length-1));return Math.max(r,u,f)/2}draw(){const n=this._cachedMeta;n.dataset.updateControlPoints(this.chart.chartArea,n.iScale.axis),super.draw()}}Of.id="line";Of.defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1};Of.overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};class Fb extends js{constructor(n,s){super(n,s),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(n){const s=this._cachedMeta,r=this.chart,c=r.data.labels||[],u=vu(s._parsed[n].r,r.options.locale);return{label:c[n]||"",value:u}}parseObjectData(n,s,r,c){return m5.bind(this)(n,s,r,c)}update(n){const s=this._cachedMeta.data;this._updateRadius(),this.updateElements(s,0,s.length,n)}getMinMax(){const n=this._cachedMeta,s={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return n.data.forEach((r,c)=>{const u=this.getParsed(c).r;!isNaN(u)&&this.chart.getDataVisibility(c)&&(u<s.min&&(s.min=u),u>s.max&&(s.max=u))}),s}_updateRadius(){const n=this.chart,s=n.chartArea,r=n.options,c=Math.min(s.right-s.left,s.bottom-s.top),u=Math.max(c/2,0),f=Math.max(r.cutoutPercentage?u/100*r.cutoutPercentage:1,0),g=(u-f)/n.getVisibleDatasetCount();this.outerRadius=u-g*this.index,this.innerRadius=this.outerRadius-g}updateElements(n,s,r,c){const u=c==="reset",f=this.chart,p=f.options.animation,k=this._cachedMeta.rScale,C=k.xCenter,x=k.yCenter,v=k.getIndexAngle(0)-.5*qn;let M=v,z;const H=360/this.countVisibleElements();for(z=0;z<s;++z)M+=this._computeAngle(z,c,H);for(z=s;z<s+r;z++){const Z=n[z];let U=M,W=M+this._computeAngle(z,c,H),tt=f.getDataVisibility(z)?k.getDistanceFromCenterForValue(this.getParsed(z).r):0;M=W,u&&(p.animateScale&&(tt=0),p.animateRotate&&(U=W=v));const dt={x:C,y:x,innerRadius:0,outerRadius:tt,startAngle:U,endAngle:W,options:this.resolveDataElementOptions(z,Z.active?"active":c)};this.updateElement(Z,z,dt,c)}}countVisibleElements(){const n=this._cachedMeta;let s=0;return n.data.forEach((r,c)=>{!isNaN(this.getParsed(c).r)&&this.chart.getDataVisibility(c)&&s++}),s}_computeAngle(n,s,r){return this.chart.getDataVisibility(n)?Ns(this.resolveDataElementOptions(n,s).angle||r):0}}Fb.id="polarArea";Fb.defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0};Fb.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(i){const n=i.data;if(n.labels.length&&n.datasets.length){const{labels:{pointStyle:s}}=i.legend.options;return n.labels.map((r,c)=>{const f=i.getDatasetMeta(0).controller.getStyle(c);return{text:r,fillStyle:f.backgroundColor,strokeStyle:f.borderColor,lineWidth:f.borderWidth,pointStyle:s,hidden:!i.getDataVisibility(c),index:c}})}return[]}},onClick(i,n,s){s.chart.toggleDataVisibility(n.index),s.chart.update()}},tooltip:{callbacks:{title(){return""},label(i){return i.chart.data.labels[i.dataIndex]+": "+i.formattedValue}}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};class x5 extends yu{}x5.id="pie";x5.defaults={cutout:0,rotation:0,circumference:360,radius:"100%"};class $b extends js{getLabelAndValue(n){const s=this._cachedMeta.vScale,r=this.getParsed(n);return{label:s.getLabels()[n],value:""+s.getLabelForValue(r[s.axis])}}parseObjectData(n,s,r,c){return m5.bind(this)(n,s,r,c)}update(n){const s=this._cachedMeta,r=s.dataset,c=s.data||[],u=s.iScale.getLabels();if(r.points=c,n!=="resize"){const f=this.resolveDatasetElementOptions(n);this.options.showLine||(f.borderWidth=0);const g={_loop:!0,_fullLoop:u.length===c.length,options:f};this.updateElement(r,void 0,g,n)}this.updateElements(c,0,c.length,n)}updateElements(n,s,r,c){const u=this._cachedMeta.rScale,f=c==="reset";for(let g=s;g<s+r;g++){const p=n[g],k=this.resolveDataElementOptions(g,p.active?"active":c),C=u.getPointPositionForValue(g,this.getParsed(g).r),x=f?u.xCenter:C.x,v=f?u.yCenter:C.y,M={x,y:v,angle:C.angle,skip:isNaN(x)||isNaN(v),options:k};this.updateElement(p,g,M,c)}}}$b.id="radar";$b.defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}};$b.overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};class Fs{constructor(){this.x=void 0,this.y=void 0,this.active=!1,this.options=void 0,this.$animations=void 0}tooltipPosition(n){const{x:s,y:r}=this.getProps(["x","y"],n);return{x:s,y:r}}hasValue(){return Kc(this.x)&&Kc(this.y)}getProps(n,s){const r=this.$animations;if(!s||!r)return this;const c={};return n.forEach(u=>{c[u]=r[u]&&r[u].active()?r[u]._to:this[u]}),c}}Fs.defaults={};Fs.defaultRoutes=void 0;const E5={values(i){return $n(i)?i:""+i},numeric(i,n,s){if(i===0)return"0";const r=this.chart.options.locale;let c,u=i;if(s.length>1){const k=Math.max(Math.abs(s[0].value),Math.abs(s[s.length-1].value));(k<1e-4||k>1e15)&&(c="scientific"),u=b$(i,s)}const f=us(Math.abs(u)),g=Math.max(Math.min(-1*Math.floor(f),20),0),p={notation:c,minimumFractionDigits:g,maximumFractionDigits:g};return Object.assign(p,this.options.ticks.format),vu(i,r,p)},logarithmic(i,n,s){if(i===0)return"0";const r=i/Math.pow(10,Math.floor(us(i)));return r===1||r===2||r===5?E5.numeric.call(this,i,n,s):""}};function b$(i,n){let s=n.length>3?n[2].value-n[1].value:n[1].value-n[0].value;return Math.abs(s)>=1&&i!==Math.floor(i)&&(s=i-Math.floor(i)),s}var Lf={formatters:E5};on.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",grace:0,grid:{display:!0,lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(i,n)=>n.lineWidth,tickColor:(i,n)=>n.color,offset:!1,borderDash:[],borderDashOffset:0,borderWidth:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Lf.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}});on.route("scale.ticks","color","","color");on.route("scale.grid","color","","borderColor");on.route("scale.grid","borderColor","","borderColor");on.route("scale.title","color","","color");on.describe("scale",{_fallback:!1,_scriptable:i=>!i.startsWith("before")&&!i.startsWith("after")&&i!=="callback"&&i!=="parser",_indexable:i=>i!=="borderDash"&&i!=="tickBorderDash"});on.describe("scales",{_fallback:"scale"});on.describe("scale.ticks",{_scriptable:i=>i!=="backdropPadding"&&i!=="callback",_indexable:i=>i!=="backdropPadding"});function k$(i,n){const s=i.options.ticks,r=s.maxTicksLimit||w$(i),c=s.major.enabled?v$(n):[],u=c.length,f=c[0],g=c[u-1],p=[];if(u>r)return y$(n,p,c,u/r),p;const k=_$(c,n,r);if(u>0){let C,x;const v=u>1?Math.round((g-f)/(u-1)):null;for(Ah(n,p,k,wn(v)?0:f-v,f),C=0,x=u-1;C<x;C++)Ah(n,p,k,c[C],c[C+1]);return Ah(n,p,k,g,wn(v)?n.length:g+v),p}return Ah(n,p,k),p}function w$(i){const n=i.options.offset,s=i._tickSize(),r=i._length/s+(n?0:1),c=i._maxLength/s;return Math.floor(Math.min(r,c))}function _$(i,n,s){const r=C$(i),c=n.length/s;if(!r)return Math.max(c,1);const u=k9(r);for(let f=0,g=u.length-1;f<g;f++){const p=u[f];if(p>c)return p}return Math.max(c,1)}function v$(i){const n=[];let s,r;for(s=0,r=i.length;s<r;s++)i[s].major&&n.push(s);return n}function y$(i,n,s,r){let c=0,u=s[0],f;for(r=Math.ceil(r),f=0;f<i.length;f++)f===u&&(n.push(i[f]),c++,u=s[c*r])}function Ah(i,n,s,r,c){const u=Ge(r,0),f=Math.min(Ge(c,i.length),i.length);let g=0,p,k,C;for(s=Math.ceil(s),c&&(p=c-r,s=p/Math.floor(p/s)),C=u;C<0;)g++,C=Math.round(u+g*s);for(k=Math.max(u,0);k<f;k++)k===C&&(n.push(i[k]),g++,C=Math.round(u+g*s))}function C$(i){const n=i.length;let s,r;if(n<2)return!1;for(r=i[0],s=1;s<n;++s)if(i[s]-i[s-1]!==r)return!1;return r}const A$=i=>i==="left"?"right":i==="right"?"left":i,QC=(i,n,s)=>n==="top"||n==="left"?i[n]+s:i[n]-s;function ZC(i,n){const s=[],r=i.length/n,c=i.length;let u=0;for(;u<c;u+=r)s.push(i[Math.floor(u)]);return s}function x$(i,n,s){const r=i.ticks.length,c=Math.min(n,r-1),u=i._startPixel,f=i._endPixel,g=1e-6;let p=i.getPixelForTick(c),k;if(!(s&&(r===1?k=Math.max(p-u,f-p):n===0?k=(i.getPixelForTick(1)-p)/2:k=(p-i.getPixelForTick(c-1))/2,p+=c<n?k:-k,p<u-g||p>f+g)))return p}function E$(i,n){Tn(i,s=>{const r=s.gc,c=r.length/2;let u;if(c>n){for(u=0;u<c;++u)delete s.data[r[u]];r.splice(0,c)}})}function Ed(i){return i.drawTicks?i.tickLength:0}function JC(i,n){if(!i.display)return 0;const s=wi(i.font,n),r=Xi(i.padding);return($n(i.text)?i.text.length:1)*s.lineHeight+r.height}function S$(i,n){return el(i,{scale:n,type:"scale"})}function T$(i,n,s){return el(i,{tick:s,index:n,type:"tick"})}function D$(i,n,s){let r=Tb(i);return(s&&n!=="right"||!s&&n==="right")&&(r=A$(r)),r}function M$(i,n,s,r){const{top:c,left:u,bottom:f,right:g,chart:p}=i,{chartArea:k,scales:C}=p;let x=0,v,M,z;const H=f-c,Z=g-u;if(i.isHorizontal()){if(M=Yi(r,u,g),un(s)){const U=Object.keys(s)[0],W=s[U];z=C[U].getPixelForValue(W)+H-n}else s==="center"?z=(k.bottom+k.top)/2+H-n:z=QC(i,s,n);v=g-u}else{if(un(s)){const U=Object.keys(s)[0],W=s[U];M=C[U].getPixelForValue(W)-Z+n}else s==="center"?M=(k.left+k.right)/2-Z+n:M=QC(i,s,n);z=Yi(r,f,c),x=s==="left"?-ei:ei}return{titleX:M,titleY:z,maxWidth:v,rotation:x}}class sc extends Fs{constructor(n){super(),this.id=n.id,this.type=n.type,this.options=void 0,this.ctx=n.ctx,this.chart=n.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(n){this.options=n.setContext(this.getContext()),this.axis=n.axis,this._userMin=this.parse(n.min),this._userMax=this.parse(n.max),this._suggestedMin=this.parse(n.suggestedMin),this._suggestedMax=this.parse(n.suggestedMax)}parse(n,s){return n}getUserBounds(){let{_userMin:n,_userMax:s,_suggestedMin:r,_suggestedMax:c}=this;return n=cs(n,Number.POSITIVE_INFINITY),s=cs(s,Number.NEGATIVE_INFINITY),r=cs(r,Number.POSITIVE_INFINITY),c=cs(c,Number.NEGATIVE_INFINITY),{min:cs(n,r),max:cs(s,c),minDefined:ji(n),maxDefined:ji(s)}}getMinMax(n){let{min:s,max:r,minDefined:c,maxDefined:u}=this.getUserBounds(),f;if(c&&u)return{min:s,max:r};const g=this.getMatchingVisibleMetas();for(let p=0,k=g.length;p<k;++p)f=g[p].controller.getMinMax(this,n),c||(s=Math.min(s,f.min)),u||(r=Math.max(r,f.max));return s=u&&s>r?r:s,r=c&&s>r?s:r,{min:cs(s,cs(r,s)),max:cs(r,cs(s,r))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const n=this.chart.data;return this.options.labels||(this.isHorizontal()?n.xLabels:n.yLabels)||n.labels||[]}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){zn(this.options.beforeUpdate,[this])}update(n,s,r){const{beginAtZero:c,grace:u,ticks:f}=this.options,g=f.sampleSize;this.beforeUpdate(),this.maxWidth=n,this.maxHeight=s,this._margins=r=Object.assign({left:0,right:0,top:0,bottom:0},r),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+r.left+r.right:this.height+r.top+r.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=rF(this,u,c),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const p=g<this.ticks.length;this._convertTicksToLabels(p?ZC(this.ticks,g):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),f.display&&(f.autoSkip||f.source==="auto")&&(this.ticks=k$(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),p&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let n=this.options.reverse,s,r;this.isHorizontal()?(s=this.left,r=this.right):(s=this.top,r=this.bottom,n=!n),this._startPixel=s,this._endPixel=r,this._reversePixels=n,this._length=r-s,this._alignToPixels=this.options.alignToPixels}afterUpdate(){zn(this.options.afterUpdate,[this])}beforeSetDimensions(){zn(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){zn(this.options.afterSetDimensions,[this])}_callHooks(n){this.chart.notifyPlugins(n,this.getContext()),zn(this.options[n],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){zn(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(n){const s=this.options.ticks;let r,c,u;for(r=0,c=n.length;r<c;r++)u=n[r],u.label=zn(s.callback,[u.value,r,n],this)}afterTickToLabelConversion(){zn(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){zn(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const n=this.options,s=n.ticks,r=this.ticks.length,c=s.minRotation||0,u=s.maxRotation;let f=c,g,p,k;if(!this._isVisible()||!s.display||c>=u||r<=1||!this.isHorizontal()){this.labelRotation=c;return}const C=this._getLabelSizes(),x=C.widest.width,v=C.highest.height,M=Qi(this.chart.width-x,0,this.maxWidth);g=n.offset?this.maxWidth/r:M/(r-1),x+6>g&&(g=M/(r-(n.offset?.5:1)),p=this.maxHeight-Ed(n.grid)-s.padding-JC(n.title,this.chart.options.font),k=Math.sqrt(x*x+v*v),f=Eb(Math.min(Math.asin(Qi((C.highest.height+6)/g,-1,1)),Math.asin(Qi(p/k,-1,1))-Math.asin(Qi(v/k,-1,1)))),f=Math.max(c,Math.min(u,f))),this.labelRotation=f}afterCalculateLabelRotation(){zn(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){zn(this.options.beforeFit,[this])}fit(){const n={width:0,height:0},{chart:s,options:{ticks:r,title:c,grid:u}}=this,f=this._isVisible(),g=this.isHorizontal();if(f){const p=JC(c,s.options.font);if(g?(n.width=this.maxWidth,n.height=Ed(u)+p):(n.height=this.maxHeight,n.width=Ed(u)+p),r.display&&this.ticks.length){const{first:k,last:C,widest:x,highest:v}=this._getLabelSizes(),M=r.padding*2,z=Ns(this.labelRotation),H=Math.cos(z),Z=Math.sin(z);if(g){const U=r.mirror?0:Z*x.width+H*v.height;n.height=Math.min(this.maxHeight,n.height+U+M)}else{const U=r.mirror?0:H*x.width+Z*v.height;n.width=Math.min(this.maxWidth,n.width+U+M)}this._calculatePadding(k,C,Z,H)}}this._handleMargins(),g?(this.width=this._length=s.width-this._margins.left-this._margins.right,this.height=n.height):(this.width=n.width,this.height=this._length=s.height-this._margins.top-this._margins.bottom)}_calculatePadding(n,s,r,c){const{ticks:{align:u,padding:f},position:g}=this.options,p=this.labelRotation!==0,k=g!=="top"&&this.axis==="x";if(this.isHorizontal()){const C=this.getPixelForTick(0)-this.left,x=this.right-this.getPixelForTick(this.ticks.length-1);let v=0,M=0;p?k?(v=c*n.width,M=r*s.height):(v=r*n.height,M=c*s.width):u==="start"?M=s.width:u==="end"?v=n.width:u!=="inner"&&(v=n.width/2,M=s.width/2),this.paddingLeft=Math.max((v-C+f)*this.width/(this.width-C),0),this.paddingRight=Math.max((M-x+f)*this.width/(this.width-x),0)}else{let C=s.height/2,x=n.height/2;u==="start"?(C=0,x=n.height):u==="end"&&(C=s.height,x=0),this.paddingTop=C+f,this.paddingBottom=x+f}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){zn(this.options.afterFit,[this])}isHorizontal(){const{axis:n,position:s}=this.options;return s==="top"||s==="bottom"||n==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(n){this.beforeTickToLabelConversion(),this.generateTickLabels(n);let s,r;for(s=0,r=n.length;s<r;s++)wn(n[s].label)&&(n.splice(s,1),r--,s--);this.afterTickToLabelConversion()}_getLabelSizes(){let n=this._labelSizes;if(!n){const s=this.options.ticks.sampleSize;let r=this.ticks;s<r.length&&(r=ZC(r,s)),this._labelSizes=n=this._computeLabelSizes(r,r.length)}return n}_computeLabelSizes(n,s){const{ctx:r,_longestTextCache:c}=this,u=[],f=[];let g=0,p=0,k,C,x,v,M,z,H,Z,U,W,tt;for(k=0;k<s;++k){if(v=n[k].label,M=this._resolveTickFontOptions(k),r.font=z=M.string,H=c[z]=c[z]||{data:{},gc:[]},Z=M.lineHeight,U=W=0,!wn(v)&&!$n(v))U=Xh(r,H.data,H.gc,U,v),W=Z;else if($n(v))for(C=0,x=v.length;C<x;++C)tt=v[C],!wn(tt)&&!$n(tt)&&(U=Xh(r,H.data,H.gc,U,tt),W+=Z);u.push(U),f.push(W),g=Math.max(U,g),p=Math.max(W,p)}E$(c,s);const dt=u.indexOf(g),st=f.indexOf(p),I=mt=>({width:u[mt]||0,height:f[mt]||0});return{first:I(0),last:I(s-1),widest:I(dt),highest:I(st),widths:u,heights:f}}getLabelForValue(n){return n}getPixelForValue(n,s){return NaN}getValueForPixel(n){}getPixelForTick(n){const s=this.ticks;return n<0||n>s.length-1?null:this.getPixelForValue(s[n].value)}getPixelForDecimal(n){this._reversePixels&&(n=1-n);const s=this._startPixel+n*this._length;return v9(this._alignToPixels?Bl(this.chart,s,0):s)}getDecimalForPixel(n){const s=(n-this._startPixel)/this._length;return this._reversePixels?1-s:s}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:n,max:s}=this;return n<0&&s<0?s:n>0&&s>0?n:0}getContext(n){const s=this.ticks||[];if(n>=0&&n<s.length){const r=s[n];return r.$context||(r.$context=T$(this.getContext(),n,r))}return this.$context||(this.$context=S$(this.chart.getContext(),this))}_tickSize(){const n=this.options.ticks,s=Ns(this.labelRotation),r=Math.abs(Math.cos(s)),c=Math.abs(Math.sin(s)),u=this._getLabelSizes(),f=n.autoSkipPadding||0,g=u?u.widest.width+f:0,p=u?u.highest.height+f:0;return this.isHorizontal()?p*r>g*c?g/r:p/c:p*c<g*r?p/r:g/c}_isVisible(){const n=this.options.display;return n!=="auto"?!!n:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(n){const s=this.axis,r=this.chart,c=this.options,{grid:u,position:f}=c,g=u.offset,p=this.isHorizontal(),C=this.ticks.length+(g?1:0),x=Ed(u),v=[],M=u.setContext(this.getContext()),z=M.drawBorder?M.borderWidth:0,H=z/2,Z=function(Xt){return Bl(r,Xt,z)};let U,W,tt,dt,st,I,mt,pt,_t,Et,Lt,X;if(f==="top")U=Z(this.bottom),I=this.bottom-x,pt=U-H,Et=Z(n.top)+H,X=n.bottom;else if(f==="bottom")U=Z(this.top),Et=n.top,X=Z(n.bottom)-H,I=U+H,pt=this.top+x;else if(f==="left")U=Z(this.right),st=this.right-x,mt=U-H,_t=Z(n.left)+H,Lt=n.right;else if(f==="right")U=Z(this.left),_t=n.left,Lt=Z(n.right)-H,st=U+H,mt=this.left+x;else if(s==="x"){if(f==="center")U=Z((n.top+n.bottom)/2+.5);else if(un(f)){const Xt=Object.keys(f)[0],te=f[Xt];U=Z(this.chart.scales[Xt].getPixelForValue(te))}Et=n.top,X=n.bottom,I=U+H,pt=I+x}else if(s==="y"){if(f==="center")U=Z((n.left+n.right)/2);else if(un(f)){const Xt=Object.keys(f)[0],te=f[Xt];U=Z(this.chart.scales[Xt].getPixelForValue(te))}st=U-H,mt=st-x,_t=n.left,Lt=n.right}const Nt=Ge(c.ticks.maxTicksLimit,C),Bt=Math.max(1,Math.ceil(C/Nt));for(W=0;W<C;W+=Bt){const Xt=u.setContext(this.getContext(W)),te=Xt.lineWidth,Wt=Xt.color,Ce=Xt.borderDash||[],hn=Xt.borderDashOffset,pn=Xt.tickWidth,Re=Xt.tickColor,Je=Xt.tickBorderDash||[],sn=Xt.tickBorderDashOffset;tt=x$(this,W,g),tt!==void 0&&(dt=Bl(r,tt,te),p?st=mt=_t=Lt=dt:I=pt=Et=X=dt,v.push({tx1:st,ty1:I,tx2:mt,ty2:pt,x1:_t,y1:Et,x2:Lt,y2:X,width:te,color:Wt,borderDash:Ce,borderDashOffset:hn,tickWidth:pn,tickColor:Re,tickBorderDash:Je,tickBorderDashOffset:sn}))}return this._ticksLength=C,this._borderValue=U,v}_computeLabelItems(n){const s=this.axis,r=this.options,{position:c,ticks:u}=r,f=this.isHorizontal(),g=this.ticks,{align:p,crossAlign:k,padding:C,mirror:x}=u,v=Ed(r.grid),M=v+C,z=x?-C:M,H=-Ns(this.labelRotation),Z=[];let U,W,tt,dt,st,I,mt,pt,_t,Et,Lt,X,Nt="middle";if(c==="top")I=this.bottom-z,mt=this._getXAxisLabelAlignment();else if(c==="bottom")I=this.top+z,mt=this._getXAxisLabelAlignment();else if(c==="left"){const Xt=this._getYAxisLabelAlignment(v);mt=Xt.textAlign,st=Xt.x}else if(c==="right"){const Xt=this._getYAxisLabelAlignment(v);mt=Xt.textAlign,st=Xt.x}else if(s==="x"){if(c==="center")I=(n.top+n.bottom)/2+M;else if(un(c)){const Xt=Object.keys(c)[0],te=c[Xt];I=this.chart.scales[Xt].getPixelForValue(te)+M}mt=this._getXAxisLabelAlignment()}else if(s==="y"){if(c==="center")st=(n.left+n.right)/2-M;else if(un(c)){const Xt=Object.keys(c)[0],te=c[Xt];st=this.chart.scales[Xt].getPixelForValue(te)}mt=this._getYAxisLabelAlignment(v).textAlign}s==="y"&&(p==="start"?Nt="top":p==="end"&&(Nt="bottom"));const Bt=this._getLabelSizes();for(U=0,W=g.length;U<W;++U){tt=g[U],dt=tt.label;const Xt=u.setContext(this.getContext(U));pt=this.getPixelForTick(U)+u.labelOffset,_t=this._resolveTickFontOptions(U),Et=_t.lineHeight,Lt=$n(dt)?dt.length:1;const te=Lt/2,Wt=Xt.color,Ce=Xt.textStrokeColor,hn=Xt.textStrokeWidth;let pn=mt;f?(st=pt,mt==="inner"&&(U===W-1?pn=this.options.reverse?"left":"right":U===0?pn=this.options.reverse?"right":"left":pn="center"),c==="top"?k==="near"||H!==0?X=-Lt*Et+Et/2:k==="center"?X=-Bt.highest.height/2-te*Et+Et:X=-Bt.highest.height+Et/2:k==="near"||H!==0?X=Et/2:k==="center"?X=Bt.highest.height/2-te*Et:X=Bt.highest.height-Lt*Et,x&&(X*=-1)):(I=pt,X=(1-Lt)*Et/2);let Re;if(Xt.showLabelBackdrop){const Je=Xi(Xt.backdropPadding),sn=Bt.heights[U],re=Bt.widths[U];let nt=I+X-Je.top,bt=st-Je.left;switch(Nt){case"middle":nt-=sn/2;break;case"bottom":nt-=sn;break}switch(mt){case"center":bt-=re/2;break;case"right":bt-=re;break}Re={left:bt,top:nt,width:re+Je.width,height:sn+Je.height,color:Xt.backdropColor}}Z.push({rotation:H,label:dt,font:_t,color:Wt,strokeColor:Ce,strokeWidth:hn,textOffset:X,textAlign:pn,textBaseline:Nt,translation:[st,I],backdrop:Re})}return Z}_getXAxisLabelAlignment(){const{position:n,ticks:s}=this.options;if(-Ns(this.labelRotation))return n==="top"?"left":"right";let c="center";return s.align==="start"?c="left":s.align==="end"?c="right":s.align==="inner"&&(c="inner"),c}_getYAxisLabelAlignment(n){const{position:s,ticks:{crossAlign:r,mirror:c,padding:u}}=this.options,f=this._getLabelSizes(),g=n+u,p=f.widest.width;let k,C;return s==="left"?c?(C=this.right+u,r==="near"?k="left":r==="center"?(k="center",C+=p/2):(k="right",C+=p)):(C=this.right-g,r==="near"?k="right":r==="center"?(k="center",C-=p/2):(k="left",C=this.left)):s==="right"?c?(C=this.left+u,r==="near"?k="right":r==="center"?(k="center",C-=p/2):(k="left",C-=p)):(C=this.left+g,r==="near"?k="left":r==="center"?(k="center",C+=p/2):(k="right",C=this.right)):k="right",{textAlign:k,x:C}}_computeLabelArea(){if(this.options.ticks.mirror)return;const n=this.chart,s=this.options.position;if(s==="left"||s==="right")return{top:0,left:this.left,bottom:n.height,right:this.right};if(s==="top"||s==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:n.width}}drawBackground(){const{ctx:n,options:{backgroundColor:s},left:r,top:c,width:u,height:f}=this;s&&(n.save(),n.fillStyle=s,n.fillRect(r,c,u,f),n.restore())}getLineWidthForValue(n){const s=this.options.grid;if(!this._isVisible()||!s.display)return 0;const c=this.ticks.findIndex(u=>u.value===n);return c>=0?s.setContext(this.getContext(c)).lineWidth:0}drawGrid(n){const s=this.options.grid,r=this.ctx,c=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(n));let u,f;const g=(p,k,C)=>{!C.width||!C.color||(r.save(),r.lineWidth=C.width,r.strokeStyle=C.color,r.setLineDash(C.borderDash||[]),r.lineDashOffset=C.borderDashOffset,r.beginPath(),r.moveTo(p.x,p.y),r.lineTo(k.x,k.y),r.stroke(),r.restore())};if(s.display)for(u=0,f=c.length;u<f;++u){const p=c[u];s.drawOnChartArea&&g({x:p.x1,y:p.y1},{x:p.x2,y:p.y2},p),s.drawTicks&&g({x:p.tx1,y:p.ty1},{x:p.tx2,y:p.ty2},{color:p.tickColor,width:p.tickWidth,borderDash:p.tickBorderDash,borderDashOffset:p.tickBorderDashOffset})}}drawBorder(){const{chart:n,ctx:s,options:{grid:r}}=this,c=r.setContext(this.getContext()),u=r.drawBorder?c.borderWidth:0;if(!u)return;const f=r.setContext(this.getContext(0)).lineWidth,g=this._borderValue;let p,k,C,x;this.isHorizontal()?(p=Bl(n,this.left,u)-u/2,k=Bl(n,this.right,f)+f/2,C=x=g):(C=Bl(n,this.top,u)-u/2,x=Bl(n,this.bottom,f)+f/2,p=k=g),s.save(),s.lineWidth=c.borderWidth,s.strokeStyle=c.borderColor,s.beginPath(),s.moveTo(p,C),s.lineTo(k,x),s.stroke(),s.restore()}drawLabels(n){if(!this.options.ticks.display)return;const r=this.ctx,c=this._computeLabelArea();c&&Pb(r,c);const u=this._labelItems||(this._labelItems=this._computeLabelItems(n));let f,g;for(f=0,g=u.length;f<g;++f){const p=u[f],k=p.font,C=p.label;p.backdrop&&(r.fillStyle=p.backdrop.color,r.fillRect(p.backdrop.left,p.backdrop.top,p.backdrop.width,p.backdrop.height));let x=p.textOffset;tc(r,C,0,x,k,p)}c&&Bb(r)}drawTitle(){const{ctx:n,options:{position:s,title:r,reverse:c}}=this;if(!r.display)return;const u=wi(r.font),f=Xi(r.padding),g=r.align;let p=u.lineHeight/2;s==="bottom"||s==="center"||un(s)?(p+=f.bottom,$n(r.text)&&(p+=u.lineHeight*(r.text.length-1))):p+=f.top;const{titleX:k,titleY:C,maxWidth:x,rotation:v}=M$(this,p,s,g);tc(n,r.text,0,0,u,{color:r.color,maxWidth:x,rotation:v,textAlign:D$(g,s,c),textBaseline:"middle",translation:[k,C]})}draw(n){!this._isVisible()||(this.drawBackground(),this.drawGrid(n),this.drawBorder(),this.drawTitle(),this.drawLabels(n))}_layers(){const n=this.options,s=n.ticks&&n.ticks.z||0,r=Ge(n.grid&&n.grid.z,-1);return!this._isVisible()||this.draw!==sc.prototype.draw?[{z:s,draw:c=>{this.draw(c)}}]:[{z:r,draw:c=>{this.drawBackground(),this.drawGrid(c),this.drawTitle()}},{z:r+1,draw:()=>{this.drawBorder()}},{z:s,draw:c=>{this.drawLabels(c)}}]}getMatchingVisibleMetas(n){const s=this.chart.getSortedVisibleDatasetMetas(),r=this.axis+"AxisID",c=[];let u,f;for(u=0,f=s.length;u<f;++u){const g=s[u];g[r]===this.id&&(!n||g.type===n)&&c.push(g)}return c}_resolveTickFontOptions(n){const s=this.options.ticks.setContext(this.getContext(n));return wi(s.font)}_maxDigits(){const n=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/n}}class xh{constructor(n,s,r){this.type=n,this.scope=s,this.override=r,this.items=Object.create(null)}isForType(n){return Object.prototype.isPrototypeOf.call(this.type.prototype,n.prototype)}register(n){const s=Object.getPrototypeOf(n);let r;B$(s)&&(r=this.register(s));const c=this.items,u=n.id,f=this.scope+"."+u;if(!u)throw new Error("class does not have id: "+n);return u in c||(c[u]=n,I$(n,f,r),this.override&&on.override(n.id,n.overrides)),f}get(n){return this.items[n]}unregister(n){const s=this.items,r=n.id,c=this.scope;r in s&&delete s[r],c&&r in on[c]&&(delete on[c][r],this.override&&delete Xl[r])}}function I$(i,n,s){const r=ou(Object.create(null),[s?on.get(s):{},on.get(n),i.defaults]);on.set(n,r),i.defaultRoutes&&P$(n,i.defaultRoutes),i.descriptors&&on.describe(n,i.descriptors)}function P$(i,n){Object.keys(n).forEach(s=>{const r=s.split("."),c=r.pop(),u=[i].concat(r).join("."),f=n[s].split("."),g=f.pop(),p=f.join(".");on.route(u,c,p,g)})}function B$(i){return"id"in i&&"defaults"in i}class N${constructor(){this.controllers=new xh(js,"datasets",!0),this.elements=new xh(Fs,"elements"),this.plugins=new xh(Object,"plugins"),this.scales=new xh(sc,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...n){this._each("register",n)}remove(...n){this._each("unregister",n)}addControllers(...n){this._each("register",n,this.controllers)}addElements(...n){this._each("register",n,this.elements)}addPlugins(...n){this._each("register",n,this.plugins)}addScales(...n){this._each("register",n,this.scales)}getController(n){return this._get(n,this.controllers,"controller")}getElement(n){return this._get(n,this.elements,"element")}getPlugin(n){return this._get(n,this.plugins,"plugin")}getScale(n){return this._get(n,this.scales,"scale")}removeControllers(...n){this._each("unregister",n,this.controllers)}removeElements(...n){this._each("unregister",n,this.elements)}removePlugins(...n){this._each("unregister",n,this.plugins)}removeScales(...n){this._each("unregister",n,this.scales)}_each(n,s,r){[...s].forEach(c=>{const u=r||this._getRegistryForType(c);r||u.isForType(c)||u===this.plugins&&c.id?this._exec(n,u,c):Tn(c,f=>{const g=r||this._getRegistryForType(f);this._exec(n,g,f)})})}_exec(n,s,r){const c=xb(n);zn(r["before"+c],[],r),s[n](r),zn(r["after"+c],[],r)}_getRegistryForType(n){for(let s=0;s<this._typedRegistries.length;s++){const r=this._typedRegistries[s];if(r.isForType(n))return r}return this.plugins}_get(n,s,r){const c=s.get(n);if(c===void 0)throw new Error('"'+n+'" is not a registered '+r+".");return c}}var wr=new N$;class Vb extends js{update(n){const s=this._cachedMeta,{data:r=[]}=s,c=this.chart._animationsDisabled;let{start:u,count:f}=i5(s,r,c);if(this._drawStart=u,this._drawCount=f,o5(s)&&(u=0,f=r.length),this.options.showLine){const{dataset:g,_dataset:p}=s;g._chart=this.chart,g._datasetIndex=this.index,g._decimated=!!p._decimated,g.points=r;const k=this.resolveDatasetElementOptions(n);k.segment=this.options.segment,this.updateElement(g,void 0,{animated:!c,options:k},n)}this.updateElements(r,u,f,n)}addElements(){const{showLine:n}=this.options;!this.datasetElementType&&n&&(this.datasetElementType=wr.getElement("line")),super.addElements()}updateElements(n,s,r,c){const u=c==="reset",{iScale:f,vScale:g,_stacked:p,_dataset:k}=this._cachedMeta,C=this.resolveDataElementOptions(s,c),x=this.getSharedOptions(C),v=this.includeOptions(c,x),M=f.axis,z=g.axis,{spanGaps:H,segment:Z}=this.options,U=Kc(H)?H:Number.POSITIVE_INFINITY,W=this.chart._animationsDisabled||u||c==="none";let tt=s>0&&this.getParsed(s-1);for(let dt=s;dt<s+r;++dt){const st=n[dt],I=this.getParsed(dt),mt=W?st:{},pt=wn(I[z]),_t=mt[M]=f.getPixelForValue(I[M],dt),Et=mt[z]=u||pt?g.getBasePixel():g.getPixelForValue(p?this.applyStack(g,I,p):I[z],dt);mt.skip=isNaN(_t)||isNaN(Et)||pt,mt.stop=dt>0&&Math.abs(I[M]-tt[M])>U,Z&&(mt.parsed=I,mt.raw=k.data[dt]),v&&(mt.options=x||this.resolveDataElementOptions(dt,st.active?"active":c)),W||this.updateElement(st,dt,mt,c),tt=I}this.updateSharedOptions(x,c,C)}getMaxOverflow(){const n=this._cachedMeta,s=n.data||[];if(!this.options.showLine){let g=0;for(let p=s.length-1;p>=0;--p)g=Math.max(g,s[p].size(this.resolveDataElementOptions(p))/2);return g>0&&g}const r=n.dataset,c=r.options&&r.options.borderWidth||0;if(!s.length)return c;const u=s[0].size(this.resolveDataElementOptions(0)),f=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(c,u,f)/2}}Vb.id="scatter";Vb.defaults={datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1};Vb.overrides={interaction:{mode:"point"},plugins:{tooltip:{callbacks:{title(){return""},label(i){return"("+i.label+", "+i.formattedValue+")"}}}},scales:{x:{type:"linear"},y:{type:"linear"}}};function Nl(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Dm{constructor(n){this.options=n||{}}init(n){}formats(){return Nl()}parse(n,s){return Nl()}format(n,s){return Nl()}add(n,s,r){return Nl()}diff(n,s,r){return Nl()}startOf(n,s,r){return Nl()}endOf(n,s){return Nl()}}Dm.override=function(i){Object.assign(Dm.prototype,i)};var O$={_date:Dm};function L$(i,n,s,r){const{controller:c,data:u,_sorted:f}=i,g=c._cachedMeta.iScale;if(g&&n===g.axis&&n!=="r"&&f&&u.length){const p=g._reversePixels?y9:$l;if(r){if(c._sharedOptions){const k=u[0],C=typeof k.getRange=="function"&&k.getRange(n);if(C){const x=p(u,n,s-C),v=p(u,n,s+C);return{lo:x.lo,hi:v.hi}}}}else return p(u,n,s)}return{lo:0,hi:u.length-1}}function Cu(i,n,s,r,c){const u=i.getSortedVisibleDatasetMetas(),f=s[n];for(let g=0,p=u.length;g<p;++g){const{index:k,data:C}=u[g],{lo:x,hi:v}=L$(u[g],n,f,c);for(let M=x;M<=v;++M){const z=C[M];z.skip||r(z,k,M)}}}function R$(i){const n=i.indexOf("x")!==-1,s=i.indexOf("y")!==-1;return function(r,c){const u=n?Math.abs(r.x-c.x):0,f=s?Math.abs(r.y-c.y):0;return Math.sqrt(Math.pow(u,2)+Math.pow(f,2))}}function Wp(i,n,s,r,c){const u=[];return!c&&!i.isPointInArea(n)||Cu(i,s,n,function(g,p,k){!c&&!ru(g,i.chartArea,0)||g.inRange(n.x,n.y,r)&&u.push({element:g,datasetIndex:p,index:k})},!0),u}function z$(i,n,s,r){let c=[];function u(f,g,p){const{startAngle:k,endAngle:C}=f.getProps(["startAngle","endAngle"],r),{angle:x}=Jx(f,{x:n.x,y:n.y});su(x,k,C)&&c.push({element:f,datasetIndex:g,index:p})}return Cu(i,s,n,u),c}function j$(i,n,s,r,c,u){let f=[];const g=R$(s);let p=Number.POSITIVE_INFINITY;function k(C,x,v){const M=C.inRange(n.x,n.y,c);if(r&&!M)return;const z=C.getCenterPoint(c);if(!(!!u||i.isPointInArea(z))&&!M)return;const Z=g(n,z);Z<p?(f=[{element:C,datasetIndex:x,index:v}],p=Z):Z===p&&f.push({element:C,datasetIndex:x,index:v})}return Cu(i,s,n,k),f}function qp(i,n,s,r,c,u){return!u&&!i.isPointInArea(n)?[]:s==="r"&&!r?z$(i,n,s,c):j$(i,n,s,r,c,u)}function XC(i,n,s,r,c){const u=[],f=s==="x"?"inXRange":"inYRange";let g=!1;return Cu(i,s,n,(p,k,C)=>{p[f](n[s],c)&&(u.push({element:p,datasetIndex:k,index:C}),g=g||p.inRange(n.x,n.y,c))}),r&&!g?[]:u}var F$={evaluateInteractionItems:Cu,modes:{index(i,n,s,r){const c=Ll(n,i),u=s.axis||"x",f=s.includeInvisible||!1,g=s.intersect?Wp(i,c,u,r,f):qp(i,c,u,!1,r,f),p=[];return g.length?(i.getSortedVisibleDatasetMetas().forEach(k=>{const C=g[0].index,x=k.data[C];x&&!x.skip&&p.push({element:x,datasetIndex:k.index,index:C})}),p):[]},dataset(i,n,s,r){const c=Ll(n,i),u=s.axis||"xy",f=s.includeInvisible||!1;let g=s.intersect?Wp(i,c,u,r,f):qp(i,c,u,!1,r,f);if(g.length>0){const p=g[0].datasetIndex,k=i.getDatasetMeta(p).data;g=[];for(let C=0;C<k.length;++C)g.push({element:k[C],datasetIndex:p,index:C})}return g},point(i,n,s,r){const c=Ll(n,i),u=s.axis||"xy",f=s.includeInvisible||!1;return Wp(i,c,u,r,f)},nearest(i,n,s,r){const c=Ll(n,i),u=s.axis||"xy",f=s.includeInvisible||!1;return qp(i,c,u,s.intersect,r,f)},x(i,n,s,r){const c=Ll(n,i);return XC(i,c,"x",s.intersect,r)},y(i,n,s,r){const c=Ll(n,i);return XC(i,c,"y",s.intersect,r)}}};const S5=["left","top","right","bottom"];function Sd(i,n){return i.filter(s=>s.pos===n)}function tA(i,n){return i.filter(s=>S5.indexOf(s.pos)===-1&&s.box.axis===n)}function Td(i,n){return i.sort((s,r)=>{const c=n?r:s,u=n?s:r;return c.weight===u.weight?c.index-u.index:c.weight-u.weight})}function $$(i){const n=[];let s,r,c,u,f,g;for(s=0,r=(i||[]).length;s<r;++s)c=i[s],{position:u,options:{stack:f,stackWeight:g=1}}=c,n.push({index:s,box:c,pos:u,horizontal:c.isHorizontal(),weight:c.weight,stack:f&&u+f,stackWeight:g});return n}function V$(i){const n={};for(const s of i){const{stack:r,pos:c,stackWeight:u}=s;if(!r||!S5.includes(c))continue;const f=n[r]||(n[r]={count:0,placed:0,weight:0,size:0});f.count++,f.weight+=u}return n}function H$(i,n){const s=V$(i),{vBoxMaxWidth:r,hBoxMaxHeight:c}=n;let u,f,g;for(u=0,f=i.length;u<f;++u){g=i[u];const{fullSize:p}=g.box,k=s[g.stack],C=k&&g.stackWeight/k.weight;g.horizontal?(g.width=C?C*r:p&&n.availableWidth,g.height=c):(g.width=r,g.height=C?C*c:p&&n.availableHeight)}return s}function U$(i){const n=$$(i),s=Td(n.filter(k=>k.box.fullSize),!0),r=Td(Sd(n,"left"),!0),c=Td(Sd(n,"right")),u=Td(Sd(n,"top"),!0),f=Td(Sd(n,"bottom")),g=tA(n,"x"),p=tA(n,"y");return{fullSize:s,leftAndTop:r.concat(u),rightAndBottom:c.concat(p).concat(f).concat(g),chartArea:Sd(n,"chartArea"),vertical:r.concat(c).concat(p),horizontal:u.concat(f).concat(g)}}function eA(i,n,s,r){return Math.max(i[s],n[s])+Math.max(i[r],n[r])}function T5(i,n){i.top=Math.max(i.top,n.top),i.left=Math.max(i.left,n.left),i.bottom=Math.max(i.bottom,n.bottom),i.right=Math.max(i.right,n.right)}function W$(i,n,s,r){const{pos:c,box:u}=s,f=i.maxPadding;if(!un(c)){s.size&&(i[c]-=s.size);const x=r[s.stack]||{size:0,count:1};x.size=Math.max(x.size,s.horizontal?u.height:u.width),s.size=x.size/x.count,i[c]+=s.size}u.getPadding&&T5(f,u.getPadding());const g=Math.max(0,n.outerWidth-eA(f,i,"left","right")),p=Math.max(0,n.outerHeight-eA(f,i,"top","bottom")),k=g!==i.w,C=p!==i.h;return i.w=g,i.h=p,s.horizontal?{same:k,other:C}:{same:C,other:k}}function q$(i){const n=i.maxPadding;function s(r){const c=Math.max(n[r]-i[r],0);return i[r]+=c,c}i.y+=s("top"),i.x+=s("left"),s("right"),s("bottom")}function G$(i,n){const s=n.maxPadding;function r(c){const u={left:0,top:0,right:0,bottom:0};return c.forEach(f=>{u[f]=Math.max(n[f],s[f])}),u}return r(i?["left","right"]:["top","bottom"])}function Bd(i,n,s,r){const c=[];let u,f,g,p,k,C;for(u=0,f=i.length,k=0;u<f;++u){g=i[u],p=g.box,p.update(g.width||n.w,g.height||n.h,G$(g.horizontal,n));const{same:x,other:v}=W$(n,s,g,r);k|=x&&c.length,C=C||v,p.fullSize||c.push(g)}return k&&Bd(c,n,s,r)||C}function Eh(i,n,s,r,c){i.top=s,i.left=n,i.right=n+r,i.bottom=s+c,i.width=r,i.height=c}function nA(i,n,s,r){const c=s.padding;let{x:u,y:f}=n;for(const g of i){const p=g.box,k=r[g.stack]||{count:1,placed:0,weight:1},C=g.stackWeight/k.weight||1;if(g.horizontal){const x=n.w*C,v=k.size||p.height;ms(k.start)&&(f=k.start),p.fullSize?Eh(p,c.left,f,s.outerWidth-c.right-c.left,v):Eh(p,n.left+k.placed,f,x,v),k.start=f,k.placed+=x,f=p.bottom}else{const x=n.h*C,v=k.size||p.width;ms(k.start)&&(u=k.start),p.fullSize?Eh(p,u,c.top,v,s.outerHeight-c.bottom-c.top):Eh(p,u,n.top+k.placed,v,x),k.start=u,k.placed+=x,u=p.right}}n.x=u,n.y=f}on.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}});var fs={addBox(i,n){i.boxes||(i.boxes=[]),n.fullSize=n.fullSize||!1,n.position=n.position||"top",n.weight=n.weight||0,n._layers=n._layers||function(){return[{z:0,draw(s){n.draw(s)}}]},i.boxes.push(n)},removeBox(i,n){const s=i.boxes?i.boxes.indexOf(n):-1;s!==-1&&i.boxes.splice(s,1)},configure(i,n,s){n.fullSize=s.fullSize,n.position=s.position,n.weight=s.weight},update(i,n,s,r){if(!i)return;const c=Xi(i.options.layout.padding),u=Math.max(n-c.width,0),f=Math.max(s-c.height,0),g=U$(i.boxes),p=g.vertical,k=g.horizontal;Tn(i.boxes,H=>{typeof H.beforeLayout=="function"&&H.beforeLayout()});const C=p.reduce((H,Z)=>Z.box.options&&Z.box.options.display===!1?H:H+1,0)||1,x=Object.freeze({outerWidth:n,outerHeight:s,padding:c,availableWidth:u,availableHeight:f,vBoxMaxWidth:u/2/C,hBoxMaxHeight:f/2}),v=Object.assign({},c);T5(v,Xi(r));const M=Object.assign({maxPadding:v,w:u,h:f,x:c.left,y:c.top},c),z=H$(p.concat(k),x);Bd(g.fullSize,M,x,z),Bd(p,M,x,z),Bd(k,M,x,z)&&Bd(p,M,x,z),q$(M),nA(g.leftAndTop,M,x,z),M.x+=M.w,M.y+=M.h,nA(g.rightAndBottom,M,x,z),i.chartArea={left:M.left,top:M.top,right:M.left+M.w,bottom:M.top+M.h,height:M.h,width:M.w},Tn(g.chartArea,H=>{const Z=H.box;Object.assign(Z,i.chartArea),Z.update(M.w,M.h,{left:0,top:0,right:0,bottom:0})})}};class D5{acquireContext(n,s){}releaseContext(n){return!1}addEventListener(n,s,r){}removeEventListener(n,s,r){}getDevicePixelRatio(){return 1}getMaximumSize(n,s,r,c){return s=Math.max(0,s||n.width),r=r||n.height,{width:s,height:Math.max(0,c?Math.floor(s/c):r)}}isAttached(n){return!0}updateConfig(n){}}class Y$ extends D5{acquireContext(n){return n&&n.getContext&&n.getContext("2d")||null}updateConfig(n){n.options.animation=!1}}const Fh="$chartjs",K$={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},iA=i=>i===null||i==="";function Q$(i,n){const s=i.style,r=i.getAttribute("height"),c=i.getAttribute("width");if(i[Fh]={initial:{height:r,width:c,style:{display:s.display,height:s.height,width:s.width}}},s.display=s.display||"block",s.boxSizing=s.boxSizing||"border-box",iA(c)){const u=OC(i,"width");u!==void 0&&(i.width=u)}if(iA(r))if(i.style.height==="")i.height=i.width/(n||2);else{const u=OC(i,"height");u!==void 0&&(i.height=u)}return i}const M5=DF?{passive:!0}:!1;function Z$(i,n,s){i.addEventListener(n,s,M5)}function J$(i,n,s){i.canvas.removeEventListener(n,s,M5)}function X$(i,n){const s=K$[i.type]||i.type,{x:r,y:c}=Ll(i,n);return{type:s,chart:n,native:i,x:r!==void 0?r:null,y:c!==void 0?c:null}}function ef(i,n){for(const s of i)if(s===n||s.contains(n))return!0}function tV(i,n,s){const r=i.canvas,c=new MutationObserver(u=>{let f=!1;for(const g of u)f=f||ef(g.addedNodes,r),f=f&&!ef(g.removedNodes,r);f&&s()});return c.observe(document,{childList:!0,subtree:!0}),c}function eV(i,n,s){const r=i.canvas,c=new MutationObserver(u=>{let f=!1;for(const g of u)f=f||ef(g.removedNodes,r),f=f&&!ef(g.addedNodes,r);f&&s()});return c.observe(document,{childList:!0,subtree:!0}),c}const lu=new Map;let oA=0;function I5(){const i=window.devicePixelRatio;i!==oA&&(oA=i,lu.forEach((n,s)=>{s.currentDevicePixelRatio!==i&&n()}))}function nV(i,n){lu.size||window.addEventListener("resize",I5),lu.set(i,n)}function iV(i){lu.delete(i),lu.size||window.removeEventListener("resize",I5)}function oV(i,n,s){const r=i.canvas,c=r&&zb(r);if(!c)return;const u=n5((g,p)=>{const k=c.clientWidth;s(g,p),k<c.clientWidth&&s()},window),f=new ResizeObserver(g=>{const p=g[0],k=p.contentRect.width,C=p.contentRect.height;k===0&&C===0||u(k,C)});return f.observe(c),nV(i,u),f}function Gp(i,n,s){s&&s.disconnect(),n==="resize"&&iV(i)}function sV(i,n,s){const r=i.canvas,c=n5(u=>{i.ctx!==null&&s(X$(u,i))},i,u=>{const f=u[0];return[f,f.offsetX,f.offsetY]});return Z$(r,n,c),c}class rV extends D5{acquireContext(n,s){const r=n&&n.getContext&&n.getContext("2d");return r&&r.canvas===n?(Q$(n,s),r):null}releaseContext(n){const s=n.canvas;if(!s[Fh])return!1;const r=s[Fh].initial;["height","width"].forEach(u=>{const f=r[u];wn(f)?s.removeAttribute(u):s.setAttribute(u,f)});const c=r.style||{};return Object.keys(c).forEach(u=>{s.style[u]=c[u]}),s.width=s.width,delete s[Fh],!0}addEventListener(n,s,r){this.removeEventListener(n,s);const c=n.$proxies||(n.$proxies={}),f={attach:tV,detach:eV,resize:oV}[s]||sV;c[s]=f(n,s,r)}removeEventListener(n,s){const r=n.$proxies||(n.$proxies={}),c=r[s];if(!c)return;({attach:Gp,detach:Gp,resize:Gp}[s]||J$)(n,s,c),r[s]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(n,s,r,c){return TF(n,s,r,c)}isAttached(n){const s=zb(n);return!!(s&&s.isConnected)}}function aV(i){return!k5()||typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas?Y$:rV}class lV{constructor(){this._init=[]}notify(n,s,r,c){s==="beforeInit"&&(this._init=this._createDescriptors(n,!0),this._notify(this._init,n,"install"));const u=c?this._descriptors(n).filter(c):this._descriptors(n),f=this._notify(u,n,s,r);return s==="afterDestroy"&&(this._notify(u,n,"stop"),this._notify(this._init,n,"uninstall")),f}_notify(n,s,r,c){c=c||{};for(const u of n){const f=u.plugin,g=f[r],p=[s,c,u.options];if(zn(g,p,f)===!1&&c.cancelable)return!1}return!0}invalidate(){wn(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(n){if(this._cache)return this._cache;const s=this._cache=this._createDescriptors(n);return this._notifyStateChanges(n),s}_createDescriptors(n,s){const r=n&&n.config,c=Ge(r.options&&r.options.plugins,{}),u=cV(r);return c===!1&&!s?[]:uV(n,u,c,s)}_notifyStateChanges(n){const s=this._oldCache||[],r=this._cache,c=(u,f)=>u.filter(g=>!f.some(p=>g.plugin.id===p.plugin.id));this._notify(c(s,r),n,"stop"),this._notify(c(r,s),n,"start")}}function cV(i){const n={},s=[],r=Object.keys(wr.plugins.items);for(let u=0;u<r.length;u++)s.push(wr.getPlugin(r[u]));const c=i.plugins||[];for(let u=0;u<c.length;u++){const f=c[u];s.indexOf(f)===-1&&(s.push(f),n[f.id]=!0)}return{plugins:s,localIds:n}}function dV(i,n){return!n&&i===!1?null:i===!0?{}:i}function uV(i,{plugins:n,localIds:s},r,c){const u=[],f=i.getContext();for(const g of n){const p=g.id,k=dV(r[p],c);k!==null&&u.push({plugin:g,options:hV(i.config,{plugin:g,local:s[p]},k,f)})}return u}function hV(i,{plugin:n,local:s},r,c){const u=i.pluginScopeKeys(n),f=i.getOptionScopes(r,u);return s&&n.defaults&&f.push(n.defaults),i.createResolver(f,c,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Mm(i,n){const s=on.datasets[i]||{};return((n.datasets||{})[i]||{}).indexAxis||n.indexAxis||s.indexAxis||"x"}function fV(i,n){let s=i;return i==="_index_"?s=n:i==="_value_"&&(s=n==="x"?"y":"x"),s}function gV(i,n){return i===n?"_index_":"_value_"}function pV(i){if(i==="top"||i==="bottom")return"x";if(i==="left"||i==="right")return"y"}function Im(i,n){return i==="x"||i==="y"?i:n.axis||pV(n.position)||i.charAt(0).toLowerCase()}function mV(i,n){const s=Xl[i.type]||{scales:{}},r=n.scales||{},c=Mm(i.type,n),u=Object.create(null),f=Object.create(null);return Object.keys(r).forEach(g=>{const p=r[g];if(!un(p))return console.error(`Invalid scale configuration for scale: ${g}`);if(p._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${g}`);const k=Im(g,p),C=gV(k,c),x=s.scales||{};u[k]=u[k]||g,f[g]=Hd(Object.create(null),[{axis:k},p,x[k],x[C]])}),i.data.datasets.forEach(g=>{const p=g.type||i.type,k=g.indexAxis||Mm(p,n),x=(Xl[p]||{}).scales||{};Object.keys(x).forEach(v=>{const M=fV(v,k),z=g[M+"AxisID"]||u[M]||M;f[z]=f[z]||Object.create(null),Hd(f[z],[{axis:M},r[z],x[v]])})}),Object.keys(f).forEach(g=>{const p=f[g];Hd(p,[on.scales[p.type],on.scale])}),f}function P5(i){const n=i.options||(i.options={});n.plugins=Ge(n.plugins,{}),n.scales=mV(i,n)}function B5(i){return i=i||{},i.datasets=i.datasets||[],i.labels=i.labels||[],i}function bV(i){return i=i||{},i.data=B5(i.data),P5(i),i}const sA=new Map,N5=new Set;function Sh(i,n){let s=sA.get(i);return s||(s=n(),sA.set(i,s),N5.add(s)),s}const Dd=(i,n,s)=>{const r=Qa(n,s);r!==void 0&&i.add(r)};class kV{constructor(n){this._config=bV(n),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(n){this._config.type=n}get data(){return this._config.data}set data(n){this._config.data=B5(n)}get options(){return this._config.options}set options(n){this._config.options=n}get plugins(){return this._config.plugins}update(){const n=this._config;this.clearCache(),P5(n)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(n){return Sh(n,()=>[[`datasets.${n}`,""]])}datasetAnimationScopeKeys(n,s){return Sh(`${n}.transition.${s}`,()=>[[`datasets.${n}.transitions.${s}`,`transitions.${s}`],[`datasets.${n}`,""]])}datasetElementScopeKeys(n,s){return Sh(`${n}-${s}`,()=>[[`datasets.${n}.elements.${s}`,`datasets.${n}`,`elements.${s}`,""]])}pluginScopeKeys(n){const s=n.id,r=this.type;return Sh(`${r}-plugin-${s}`,()=>[[`plugins.${s}`,...n.additionalOptionScopes||[]]])}_cachedScopes(n,s){const r=this._scopeCache;let c=r.get(n);return(!c||s)&&(c=new Map,r.set(n,c)),c}getOptionScopes(n,s,r){const{options:c,type:u}=this,f=this._cachedScopes(n,r),g=f.get(s);if(g)return g;const p=new Set;s.forEach(C=>{n&&(p.add(n),C.forEach(x=>Dd(p,n,x))),C.forEach(x=>Dd(p,c,x)),C.forEach(x=>Dd(p,Xl[u]||{},x)),C.forEach(x=>Dd(p,on,x)),C.forEach(x=>Dd(p,Sm,x))});const k=Array.from(p);return k.length===0&&k.push(Object.create(null)),N5.has(s)&&f.set(s,k),k}chartOptionScopes(){const{options:n,type:s}=this;return[n,Xl[s]||{},on.datasets[s]||{},{type:s},on,Sm]}resolveNamedOptions(n,s,r,c=[""]){const u={$shared:!0},{resolver:f,subPrefixes:g}=rA(this._resolverCache,n,c);let p=f;if(_V(f,s)){u.$shared=!1,r=Za(r)?r():r;const k=this.createResolver(n,r,g);p=Qc(f,r,k)}for(const k of s)u[k]=p[k];return u}createResolver(n,s,r=[""],c){const{resolver:u}=rA(this._resolverCache,n,r);return un(s)?Qc(u,s,void 0,c):u}}function rA(i,n,s){let r=i.get(n);r||(r=new Map,i.set(n,r));const c=s.join();let u=r.get(c);return u||(u={resolver:Ob(n,s),subPrefixes:s.filter(g=>!g.toLowerCase().includes("hover"))},r.set(c,u)),u}const wV=i=>un(i)&&Object.getOwnPropertyNames(i).reduce((n,s)=>n||Za(i[s]),!1);function _V(i,n){const{isScriptable:s,isIndexable:r}=h5(i);for(const c of n){const u=s(c),f=r(c),g=(f||u)&&i[c];if(u&&(Za(g)||wV(g))||f&&$n(g))return!0}return!1}var vV="3.9.1";const yV=["top","bottom","left","right","chartArea"];function aA(i,n){return i==="top"||i==="bottom"||yV.indexOf(i)===-1&&n==="x"}function lA(i,n){return function(s,r){return s[i]===r[i]?s[n]-r[n]:s[i]-r[i]}}function cA(i){const n=i.chart,s=n.options.animation;n.notifyPlugins("afterRender"),zn(s&&s.onComplete,[i],n)}function CV(i){const n=i.chart,s=n.options.animation;zn(s&&s.onProgress,[i],n)}function O5(i){return k5()&&typeof i=="string"?i=document.getElementById(i):i&&i.length&&(i=i[0]),i&&i.canvas&&(i=i.canvas),i}const nf={},L5=i=>{const n=O5(i);return Object.values(nf).filter(s=>s.canvas===n).pop()};function AV(i,n,s){const r=Object.keys(i);for(const c of r){const u=+c;if(u>=n){const f=i[c];delete i[c],(s>0||u>n)&&(i[u+s]=f)}}}function xV(i,n,s,r){return!s||i.type==="mouseout"?null:r?n:i}class cu{constructor(n,s){const r=this.config=new kV(s),c=O5(n),u=L5(c);if(u)throw new Error("Canvas is already in use. Chart with ID '"+u.id+"' must be destroyed before the canvas with ID '"+u.canvas.id+"' can be reused.");const f=r.createResolver(r.chartOptionScopes(),this.getContext());this.platform=new(r.platform||aV(c)),this.platform.updateConfig(r);const g=this.platform.acquireContext(c,f.aspectRatio),p=g&&g.canvas,k=p&&p.height,C=p&&p.width;if(this.id=c9(),this.ctx=g,this.canvas=p,this.width=C,this.height=k,this._options=f,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new lV,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=x9(x=>this.update(x),f.resizeDelay||0),this._dataChanges=[],nf[this.id]=this,!g||!p){console.error("Failed to create chart: can't acquire context from the given item");return}Gr.listen(this,"complete",cA),Gr.listen(this,"progress",CV),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:n,maintainAspectRatio:s},width:r,height:c,_aspectRatio:u}=this;return wn(n)?s&&u?u:c?r/c:null:n}get data(){return this.config.data}set data(n){this.config.data=n}get options(){return this._options}set options(n){this.config.options=n}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():NC(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return IC(this.canvas,this.ctx),this}stop(){return Gr.stop(this),this}resize(n,s){Gr.running(this)?this._resizeBeforeDraw={width:n,height:s}:this._resize(n,s)}_resize(n,s){const r=this.options,c=this.canvas,u=r.maintainAspectRatio&&this.aspectRatio,f=this.platform.getMaximumSize(c,n,s,u),g=r.devicePixelRatio||this.platform.getDevicePixelRatio(),p=this.width?"resize":"attach";this.width=f.width,this.height=f.height,this._aspectRatio=this.aspectRatio,NC(this,g,!0)&&(this.notifyPlugins("resize",{size:f}),zn(r.onResize,[this,f],this),this.attached&&this._doResize(p)&&this.render())}ensureScalesHaveIDs(){const s=this.options.scales||{};Tn(s,(r,c)=>{r.id=c})}buildOrUpdateScales(){const n=this.options,s=n.scales,r=this.scales,c=Object.keys(r).reduce((f,g)=>(f[g]=!1,f),{});let u=[];s&&(u=u.concat(Object.keys(s).map(f=>{const g=s[f],p=Im(f,g),k=p==="r",C=p==="x";return{options:g,dposition:k?"chartArea":C?"bottom":"left",dtype:k?"radialLinear":C?"category":"linear"}}))),Tn(u,f=>{const g=f.options,p=g.id,k=Im(p,g),C=Ge(g.type,f.dtype);(g.position===void 0||aA(g.position,k)!==aA(f.dposition))&&(g.position=f.dposition),c[p]=!0;let x=null;if(p in r&&r[p].type===C)x=r[p];else{const v=wr.getScale(C);x=new v({id:p,type:C,ctx:this.ctx,chart:this}),r[x.id]=x}x.init(g,n)}),Tn(c,(f,g)=>{f||delete r[g]}),Tn(r,f=>{fs.configure(this,f,f.options),fs.addBox(this,f)})}_updateMetasets(){const n=this._metasets,s=this.data.datasets.length,r=n.length;if(n.sort((c,u)=>c.index-u.index),r>s){for(let c=s;c<r;++c)this._destroyDatasetMeta(c);n.splice(s,r-s)}this._sortedMetasets=n.slice(0).sort(lA("order","index"))}_removeUnreferencedMetasets(){const{_metasets:n,data:{datasets:s}}=this;n.length>s.length&&delete this._stacks,n.forEach((r,c)=>{s.filter(u=>u===r._dataset).length===0&&this._destroyDatasetMeta(c)})}buildOrUpdateControllers(){const n=[],s=this.data.datasets;let r,c;for(this._removeUnreferencedMetasets(),r=0,c=s.length;r<c;r++){const u=s[r];let f=this.getDatasetMeta(r);const g=u.type||this.config.type;if(f.type&&f.type!==g&&(this._destroyDatasetMeta(r),f=this.getDatasetMeta(r)),f.type=g,f.indexAxis=u.indexAxis||Mm(g,this.options),f.order=u.order||0,f.index=r,f.label=""+u.label,f.visible=this.isDatasetVisible(r),f.controller)f.controller.updateIndex(r),f.controller.linkScales();else{const p=wr.getController(g),{datasetElementType:k,dataElementType:C}=on.datasets[g];Object.assign(p.prototype,{dataElementType:wr.getElement(C),datasetElementType:k&&wr.getElement(k)}),f.controller=new p(this,r),n.push(f.controller)}}return this._updateMetasets(),n}_resetElements(){Tn(this.data.datasets,(n,s)=>{this.getDatasetMeta(s).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(n){const s=this.config;s.update();const r=this._options=s.createResolver(s.chartOptionScopes(),this.getContext()),c=this._animationsDisabled=!r.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:n,cancelable:!0})===!1)return;const u=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let f=0;for(let k=0,C=this.data.datasets.length;k<C;k++){const{controller:x}=this.getDatasetMeta(k),v=!c&&u.indexOf(x)===-1;x.buildOrUpdateElements(v),f=Math.max(+x.getMaxOverflow(),f)}f=this._minPadding=r.layout.autoPadding?f:0,this._updateLayout(f),c||Tn(u,k=>{k.reset()}),this._updateDatasets(n),this.notifyPlugins("afterUpdate",{mode:n}),this._layers.sort(lA("z","_idx"));const{_active:g,_lastEvent:p}=this;p?this._eventHandler(p,!0):g.length&&this._updateHoverStyles(g,g,!0),this.render()}_updateScales(){Tn(this.scales,n=>{fs.removeBox(this,n)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const n=this.options,s=new Set(Object.keys(this._listeners)),r=new Set(n.events);(!wC(s,r)||!!this._responsiveListeners!==n.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:n}=this,s=this._getUniformDataChanges()||[];for(const{method:r,start:c,count:u}of s){const f=r==="_removeElements"?-u:u;AV(n,c,f)}}_getUniformDataChanges(){const n=this._dataChanges;if(!n||!n.length)return;this._dataChanges=[];const s=this.data.datasets.length,r=u=>new Set(n.filter(f=>f[0]===u).map((f,g)=>g+","+f.splice(1).join(","))),c=r(0);for(let u=1;u<s;u++)if(!wC(c,r(u)))return;return Array.from(c).map(u=>u.split(",")).map(u=>({method:u[1],start:+u[2],count:+u[3]}))}_updateLayout(n){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;fs.update(this,this.width,this.height,n);const s=this.chartArea,r=s.width<=0||s.height<=0;this._layers=[],Tn(this.boxes,c=>{r&&c.position==="chartArea"||(c.configure&&c.configure(),this._layers.push(...c._layers()))},this),this._layers.forEach((c,u)=>{c._idx=u}),this.notifyPlugins("afterLayout")}_updateDatasets(n){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:n,cancelable:!0})!==!1){for(let s=0,r=this.data.datasets.length;s<r;++s)this.getDatasetMeta(s).controller.configure();for(let s=0,r=this.data.datasets.length;s<r;++s)this._updateDataset(s,Za(n)?n({datasetIndex:s}):n);this.notifyPlugins("afterDatasetsUpdate",{mode:n})}}_updateDataset(n,s){const r=this.getDatasetMeta(n),c={meta:r,index:n,mode:s,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",c)!==!1&&(r.controller._update(s),c.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",c))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Gr.has(this)?this.attached&&!Gr.running(this)&&Gr.start(this):(this.draw(),cA({chart:this})))}draw(){let n;if(this._resizeBeforeDraw){const{width:r,height:c}=this._resizeBeforeDraw;this._resize(r,c),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const s=this._layers;for(n=0;n<s.length&&s[n].z<=0;++n)s[n].draw(this.chartArea);for(this._drawDatasets();n<s.length;++n)s[n].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(n){const s=this._sortedMetasets,r=[];let c,u;for(c=0,u=s.length;c<u;++c){const f=s[c];(!n||f.visible)&&r.push(f)}return r}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const n=this.getSortedVisibleDatasetMetas();for(let s=n.length-1;s>=0;--s)this._drawDataset(n[s]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(n){const s=this.ctx,r=n._clip,c=!r.disabled,u=this.chartArea,f={meta:n,index:n.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",f)!==!1&&(c&&Pb(s,{left:r.left===!1?0:u.left-r.left,right:r.right===!1?this.width:u.right+r.right,top:r.top===!1?0:u.top-r.top,bottom:r.bottom===!1?this.height:u.bottom+r.bottom}),n.controller.draw(),c&&Bb(s),f.cancelable=!1,this.notifyPlugins("afterDatasetDraw",f))}isPointInArea(n){return ru(n,this.chartArea,this._minPadding)}getElementsAtEventForMode(n,s,r,c){const u=F$.modes[s];return typeof u=="function"?u(this,n,r,c):[]}getDatasetMeta(n){const s=this.data.datasets[n],r=this._metasets;let c=r.filter(u=>u&&u._dataset===s).pop();return c||(c={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:s&&s.order||0,index:n,_dataset:s,_parsed:[],_sorted:!1},r.push(c)),c}getContext(){return this.$context||(this.$context=el(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(n){const s=this.data.datasets[n];if(!s)return!1;const r=this.getDatasetMeta(n);return typeof r.hidden=="boolean"?!r.hidden:!s.hidden}setDatasetVisibility(n,s){const r=this.getDatasetMeta(n);r.hidden=!s}toggleDataVisibility(n){this._hiddenIndices[n]=!this._hiddenIndices[n]}getDataVisibility(n){return!this._hiddenIndices[n]}_updateVisibility(n,s,r){const c=r?"show":"hide",u=this.getDatasetMeta(n),f=u.controller._resolveAnimations(void 0,c);ms(s)?(u.data[s].hidden=!r,this.update()):(this.setDatasetVisibility(n,r),f.update(u,{visible:r}),this.update(g=>g.datasetIndex===n?c:void 0))}hide(n,s){this._updateVisibility(n,s,!1)}show(n,s){this._updateVisibility(n,s,!0)}_destroyDatasetMeta(n){const s=this._metasets[n];s&&s.controller&&s.controller._destroy(),delete this._metasets[n]}_stop(){let n,s;for(this.stop(),Gr.remove(this),n=0,s=this.data.datasets.length;n<s;++n)this._destroyDatasetMeta(n)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:n,ctx:s}=this;this._stop(),this.config.clearCache(),n&&(this.unbindEvents(),IC(n,s),this.platform.releaseContext(s),this.canvas=null,this.ctx=null),this.notifyPlugins("destroy"),delete nf[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...n){return this.canvas.toDataURL(...n)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const n=this._listeners,s=this.platform,r=(u,f)=>{s.addEventListener(this,u,f),n[u]=f},c=(u,f,g)=>{u.offsetX=f,u.offsetY=g,this._eventHandler(u)};Tn(this.options.events,u=>r(u,c))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const n=this._responsiveListeners,s=this.platform,r=(p,k)=>{s.addEventListener(this,p,k),n[p]=k},c=(p,k)=>{n[p]&&(s.removeEventListener(this,p,k),delete n[p])},u=(p,k)=>{this.canvas&&this.resize(p,k)};let f;const g=()=>{c("attach",g),this.attached=!0,this.resize(),r("resize",u),r("detach",f)};f=()=>{this.attached=!1,c("resize",u),this._stop(),this._resize(0,0),r("attach",g)},s.isAttached(this.canvas)?g():f()}unbindEvents(){Tn(this._listeners,(n,s)=>{this.platform.removeEventListener(this,s,n)}),this._listeners={},Tn(this._responsiveListeners,(n,s)=>{this.platform.removeEventListener(this,s,n)}),this._responsiveListeners=void 0}updateHoverStyle(n,s,r){const c=r?"set":"remove";let u,f,g,p;for(s==="dataset"&&(u=this.getDatasetMeta(n[0].datasetIndex),u.controller["_"+c+"DatasetHoverStyle"]()),g=0,p=n.length;g<p;++g){f=n[g];const k=f&&this.getDatasetMeta(f.datasetIndex).controller;k&&k[c+"HoverStyle"](f.element,f.datasetIndex,f.index)}}getActiveElements(){return this._active||[]}setActiveElements(n){const s=this._active||[],r=n.map(({datasetIndex:u,index:f})=>{const g=this.getDatasetMeta(u);if(!g)throw new Error("No dataset found at index "+u);return{datasetIndex:u,element:g.data[f],index:f}});!Kh(r,s)&&(this._active=r,this._lastEvent=null,this._updateHoverStyles(r,s))}notifyPlugins(n,s,r){return this._plugins.notify(this,n,s,r)}_updateHoverStyles(n,s,r){const c=this.options.hover,u=(p,k)=>p.filter(C=>!k.some(x=>C.datasetIndex===x.datasetIndex&&C.index===x.index)),f=u(s,n),g=r?n:u(n,s);f.length&&this.updateHoverStyle(f,c.mode,!1),g.length&&c.mode&&this.updateHoverStyle(g,c.mode,!0)}_eventHandler(n,s){const r={event:n,replay:s,cancelable:!0,inChartArea:this.isPointInArea(n)},c=f=>(f.options.events||this.options.events).includes(n.native.type);if(this.notifyPlugins("beforeEvent",r,c)===!1)return;const u=this._handleEvent(n,s,r.inChartArea);return r.cancelable=!1,this.notifyPlugins("afterEvent",r,c),(u||r.changed)&&this.render(),this}_handleEvent(n,s,r){const{_active:c=[],options:u}=this,f=s,g=this._getActiveElements(n,c,r,f),p=p9(n),k=xV(n,this._lastEvent,r,p);r&&(this._lastEvent=null,zn(u.onHover,[n,g,this],this),p&&zn(u.onClick,[n,g,this],this));const C=!Kh(g,c);return(C||s)&&(this._active=g,this._updateHoverStyles(g,c,s)),this._lastEvent=k,C}_getActiveElements(n,s,r,c){if(n.type==="mouseout")return[];if(!r)return s;const u=this.options.hover;return this.getElementsAtEventForMode(n,u.mode,u,c)}}const dA=()=>Tn(cu.instances,i=>i._plugins.invalidate()),Na=!0;Object.defineProperties(cu,{defaults:{enumerable:Na,value:on},instances:{enumerable:Na,value:nf},overrides:{enumerable:Na,value:Xl},registry:{enumerable:Na,value:wr},version:{enumerable:Na,value:vV},getChart:{enumerable:Na,value:L5},register:{enumerable:Na,value:(...i)=>{wr.add(...i),dA()}},unregister:{enumerable:Na,value:(...i)=>{wr.remove(...i),dA()}}});function R5(i,n,s){const{startAngle:r,pixelMargin:c,x:u,y:f,outerRadius:g,innerRadius:p}=n;let k=c/g;i.beginPath(),i.arc(u,f,g,r-k,s+k),p>c?(k=c/p,i.arc(u,f,p,s+k,r-k,!0)):i.arc(u,f,c,s+ei,r-ei),i.closePath(),i.clip()}function EV(i){return Nb(i,["outerStart","outerEnd","innerStart","innerEnd"])}function SV(i,n,s,r){const c=EV(i.options.borderRadius),u=(s-n)/2,f=Math.min(u,r*n/2),g=p=>{const k=(s-Math.min(u,p))*r/2;return Qi(p,0,Math.min(u,k))};return{outerStart:g(c.outerStart),outerEnd:g(c.outerEnd),innerStart:Qi(c.innerStart,0,f),innerEnd:Qi(c.innerEnd,0,f)}}function Pc(i,n,s,r){return{x:s+i*Math.cos(n),y:r+i*Math.sin(n)}}function Pm(i,n,s,r,c,u){const{x:f,y:g,startAngle:p,pixelMargin:k,innerRadius:C}=n,x=Math.max(n.outerRadius+r+s-k,0),v=C>0?C+r+s+k:0;let M=0;const z=c-p;if(r){const Xt=C>0?C-r:0,te=x>0?x-r:0,Wt=(Xt+te)/2,Ce=Wt!==0?z*Wt/(Wt+r):z;M=(z-Ce)/2}const H=Math.max(.001,z*x-s/qn)/x,Z=(z-H)/2,U=p+Z+M,W=c-Z-M,{outerStart:tt,outerEnd:dt,innerStart:st,innerEnd:I}=SV(n,v,x,W-U),mt=x-tt,pt=x-dt,_t=U+tt/mt,Et=W-dt/pt,Lt=v+st,X=v+I,Nt=U+st/Lt,Bt=W-I/X;if(i.beginPath(),u){if(i.arc(f,g,x,_t,Et),dt>0){const Wt=Pc(pt,Et,f,g);i.arc(Wt.x,Wt.y,dt,Et,W+ei)}const Xt=Pc(X,W,f,g);if(i.lineTo(Xt.x,Xt.y),I>0){const Wt=Pc(X,Bt,f,g);i.arc(Wt.x,Wt.y,I,W+ei,Bt+Math.PI)}if(i.arc(f,g,v,W-I/v,U+st/v,!0),st>0){const Wt=Pc(Lt,Nt,f,g);i.arc(Wt.x,Wt.y,st,Nt+Math.PI,U-ei)}const te=Pc(mt,U,f,g);if(i.lineTo(te.x,te.y),tt>0){const Wt=Pc(mt,_t,f,g);i.arc(Wt.x,Wt.y,tt,U-ei,_t)}}else{i.moveTo(f,g);const Xt=Math.cos(_t)*x+f,te=Math.sin(_t)*x+g;i.lineTo(Xt,te);const Wt=Math.cos(Et)*x+f,Ce=Math.sin(Et)*x+g;i.lineTo(Wt,Ce)}i.closePath()}function TV(i,n,s,r,c){const{fullCircles:u,startAngle:f,circumference:g}=n;let p=n.endAngle;if(u){Pm(i,n,s,r,f+On,c);for(let k=0;k<u;++k)i.fill();isNaN(g)||(p=f+g%On,g%On===0&&(p+=On))}return Pm(i,n,s,r,p,c),i.fill(),p}function DV(i,n,s){const{x:r,y:c,startAngle:u,pixelMargin:f,fullCircles:g}=n,p=Math.max(n.outerRadius-f,0),k=n.innerRadius+f;let C;for(s&&R5(i,n,u+On),i.beginPath(),i.arc(r,c,k,u+On,u,!0),C=0;C<g;++C)i.stroke();for(i.beginPath(),i.arc(r,c,p,u,u+On),C=0;C<g;++C)i.stroke()}function MV(i,n,s,r,c,u){const{options:f}=n,{borderWidth:g,borderJoinStyle:p}=f,k=f.borderAlign==="inner";!g||(k?(i.lineWidth=g*2,i.lineJoin=p||"round"):(i.lineWidth=g,i.lineJoin=p||"bevel"),n.fullCircles&&DV(i,n,k),k&&R5(i,n,c),Pm(i,n,s,r,c,u),i.stroke())}class Hb extends Fs{constructor(n){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,n&&Object.assign(this,n)}inRange(n,s,r){const c=this.getProps(["x","y"],r),{angle:u,distance:f}=Jx(c,{x:n,y:s}),{startAngle:g,endAngle:p,innerRadius:k,outerRadius:C,circumference:x}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],r),v=this.options.spacing/2,z=Ge(x,p-g)>=On||su(u,g,p),H=ja(f,k+v,C+v);return z&&H}getCenterPoint(n){const{x:s,y:r,startAngle:c,endAngle:u,innerRadius:f,outerRadius:g}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius","circumference"],n),{offset:p,spacing:k}=this.options,C=(c+u)/2,x=(f+g+k+p)/2;return{x:s+Math.cos(C)*x,y:r+Math.sin(C)*x}}tooltipPosition(n){return this.getCenterPoint(n)}draw(n){const{options:s,circumference:r}=this,c=(s.offset||0)/2,u=(s.spacing||0)/2,f=s.circular;if(this.pixelMargin=s.borderAlign==="inner"?.33:0,this.fullCircles=r>On?Math.floor(r/On):0,r===0||this.innerRadius<0||this.outerRadius<0)return;n.save();let g=0;if(c){g=c/2;const k=(this.startAngle+this.endAngle)/2;n.translate(Math.cos(k)*g,Math.sin(k)*g),this.circumference>=qn&&(g=c)}n.fillStyle=s.backgroundColor,n.strokeStyle=s.borderColor;const p=TV(n,this,g,u,f);MV(n,this,g,u,p,f),n.restore()}}Hb.id="arc";Hb.defaults={borderAlign:"center",borderColor:"#fff",borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0};Hb.defaultRoutes={backgroundColor:"backgroundColor"};function z5(i,n,s=n){i.lineCap=Ge(s.borderCapStyle,n.borderCapStyle),i.setLineDash(Ge(s.borderDash,n.borderDash)),i.lineDashOffset=Ge(s.borderDashOffset,n.borderDashOffset),i.lineJoin=Ge(s.borderJoinStyle,n.borderJoinStyle),i.lineWidth=Ge(s.borderWidth,n.borderWidth),i.strokeStyle=Ge(s.borderColor,n.borderColor)}function IV(i,n,s){i.lineTo(s.x,s.y)}function PV(i){return i.stepped?J9:i.tension||i.cubicInterpolationMode==="monotone"?X9:IV}function j5(i,n,s={}){const r=i.length,{start:c=0,end:u=r-1}=s,{start:f,end:g}=n,p=Math.max(c,f),k=Math.min(u,g),C=c<f&&u<f||c>g&&u>g;return{count:r,start:p,loop:n.loop,ilen:k<p&&!C?r+k-p:k-p}}function BV(i,n,s,r){const{points:c,options:u}=n,{count:f,start:g,loop:p,ilen:k}=j5(c,s,r),C=PV(u);let{move:x=!0,reverse:v}=r||{},M,z,H;for(M=0;M<=k;++M)z=c[(g+(v?k-M:M))%f],!z.skip&&(x?(i.moveTo(z.x,z.y),x=!1):C(i,H,z,v,u.stepped),H=z);return p&&(z=c[(g+(v?k:0))%f],C(i,H,z,v,u.stepped)),!!p}function NV(i,n,s,r){const c=n.points,{count:u,start:f,ilen:g}=j5(c,s,r),{move:p=!0,reverse:k}=r||{};let C=0,x=0,v,M,z,H,Z,U;const W=dt=>(f+(k?g-dt:dt))%u,tt=()=>{H!==Z&&(i.lineTo(C,Z),i.lineTo(C,H),i.lineTo(C,U))};for(p&&(M=c[W(0)],i.moveTo(M.x,M.y)),v=0;v<=g;++v){if(M=c[W(v)],M.skip)continue;const dt=M.x,st=M.y,I=dt|0;I===z?(st<H?H=st:st>Z&&(Z=st),C=(x*C+dt)/++x):(tt(),i.lineTo(dt,st),z=I,x=0,H=Z=st),U=st}tt()}function Bm(i){const n=i.options,s=n.borderDash&&n.borderDash.length;return!i._decimated&&!i._loop&&!n.tension&&n.cubicInterpolationMode!=="monotone"&&!n.stepped&&!s?NV:BV}function OV(i){return i.stepped?MF:i.tension||i.cubicInterpolationMode==="monotone"?IF:Rl}function LV(i,n,s,r){let c=n._path;c||(c=n._path=new Path2D,n.path(c,s,r)&&c.closePath()),z5(i,n.options),i.stroke(c)}function RV(i,n,s,r){const{segments:c,options:u}=n,f=Bm(n);for(const g of c)z5(i,u,g.style),i.beginPath(),f(i,n,g,{start:s,end:s+r-1})&&i.closePath(),i.stroke()}const zV=typeof Path2D=="function";function jV(i,n,s,r){zV&&!n.options.segment?LV(i,n,s,r):RV(i,n,s,r)}class Au extends Fs{constructor(n){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,n&&Object.assign(this,n)}updateControlPoints(n,s){const r=this.options;if((r.tension||r.cubicInterpolationMode==="monotone")&&!r.stepped&&!this._pointsUpdated){const c=r.spanGaps?this._loop:this._fullLoop;yF(this._points,r,n,c,s),this._pointsUpdated=!0}}set points(n){this._points=n,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=FF(this,this.options.segment))}first(){const n=this.segments,s=this.points;return n.length&&s[n[0].start]}last(){const n=this.segments,s=this.points,r=n.length;return r&&s[n[r-1].end]}interpolate(n,s){const r=this.options,c=n[s],u=this.points,f=RF(this,{property:s,start:c,end:c});if(!f.length)return;const g=[],p=OV(r);let k,C;for(k=0,C=f.length;k<C;++k){const{start:x,end:v}=f[k],M=u[x],z=u[v];if(M===z){g.push(M);continue}const H=Math.abs((c-M[s])/(z[s]-M[s])),Z=p(M,z,H,r.stepped);Z[s]=n[s],g.push(Z)}return g.length===1?g[0]:g}pathSegment(n,s,r){return Bm(this)(n,this,s,r)}path(n,s,r){const c=this.segments,u=Bm(this);let f=this._loop;s=s||0,r=r||this.points.length-s;for(const g of c)f&=u(n,this,g,{start:s,end:s+r-1});return!!f}draw(n,s,r,c){const u=this.options||{};(this.points||[]).length&&u.borderWidth&&(n.save(),jV(n,this,r,c),n.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}Au.id="line";Au.defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0};Au.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};Au.descriptors={_scriptable:!0,_indexable:i=>i!=="borderDash"&&i!=="fill"};function uA(i,n,s,r){const c=i.options,{[s]:u}=i.getProps([s],r);return Math.abs(n-u)<c.radius+c.hitRadius}class Rf extends Fs{constructor(n){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,s,r){const c=this.options,{x:u,y:f}=this.getProps(["x","y"],r);return Math.pow(n-u,2)+Math.pow(s-f,2)<Math.pow(c.hitRadius+c.radius,2)}inXRange(n,s){return uA(this,n,"x",s)}inYRange(n,s){return uA(this,n,"y",s)}getCenterPoint(n){const{x:s,y:r}=this.getProps(["x","y"],n);return{x:s,y:r}}size(n){n=n||this.options||{};let s=n.radius||0;s=Math.max(s,s&&n.hoverRadius||0);const r=s&&n.borderWidth||0;return(s+r)*2}draw(n,s){const r=this.options;this.skip||r.radius<.1||!ru(this,s,this.size(r)/2)||(n.strokeStyle=r.borderColor,n.lineWidth=r.borderWidth,n.fillStyle=r.backgroundColor,Tm(n,r,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}Rf.id="point";Rf.defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0};Rf.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};function F5(i,n){const{x:s,y:r,base:c,width:u,height:f}=i.getProps(["x","y","base","width","height"],n);let g,p,k,C,x;return i.horizontal?(x=f/2,g=Math.min(s,c),p=Math.max(s,c),k=r-x,C=r+x):(x=u/2,g=s-x,p=s+x,k=Math.min(r,c),C=Math.max(r,c)),{left:g,top:k,right:p,bottom:C}}function $a(i,n,s,r){return i?0:Qi(n,s,r)}function FV(i,n,s){const r=i.options.borderWidth,c=i.borderSkipped,u=u5(r);return{t:$a(c.top,u.top,0,s),r:$a(c.right,u.right,0,n),b:$a(c.bottom,u.bottom,0,s),l:$a(c.left,u.left,0,n)}}function $V(i,n,s){const{enableBorderRadius:r}=i.getProps(["enableBorderRadius"]),c=i.options.borderRadius,u=ql(c),f=Math.min(n,s),g=i.borderSkipped,p=r||un(c);return{topLeft:$a(!p||g.top||g.left,u.topLeft,0,f),topRight:$a(!p||g.top||g.right,u.topRight,0,f),bottomLeft:$a(!p||g.bottom||g.left,u.bottomLeft,0,f),bottomRight:$a(!p||g.bottom||g.right,u.bottomRight,0,f)}}function VV(i){const n=F5(i),s=n.right-n.left,r=n.bottom-n.top,c=FV(i,s/2,r/2),u=$V(i,s/2,r/2);return{outer:{x:n.left,y:n.top,w:s,h:r,radius:u},inner:{x:n.left+c.l,y:n.top+c.t,w:s-c.l-c.r,h:r-c.t-c.b,radius:{topLeft:Math.max(0,u.topLeft-Math.max(c.t,c.l)),topRight:Math.max(0,u.topRight-Math.max(c.t,c.r)),bottomLeft:Math.max(0,u.bottomLeft-Math.max(c.b,c.l)),bottomRight:Math.max(0,u.bottomRight-Math.max(c.b,c.r))}}}}function Yp(i,n,s,r){const c=n===null,u=s===null,g=i&&!(c&&u)&&F5(i,r);return g&&(c||ja(n,g.left,g.right))&&(u||ja(s,g.top,g.bottom))}function HV(i){return i.topLeft||i.topRight||i.bottomLeft||i.bottomRight}function UV(i,n){i.rect(n.x,n.y,n.w,n.h)}function Kp(i,n,s={}){const r=i.x!==s.x?-n:0,c=i.y!==s.y?-n:0,u=(i.x+i.w!==s.x+s.w?n:0)-r,f=(i.y+i.h!==s.y+s.h?n:0)-c;return{x:i.x+r,y:i.y+c,w:i.w+u,h:i.h+f,radius:i.radius}}class zf extends Fs{constructor(n){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,n&&Object.assign(this,n)}draw(n){const{inflateAmount:s,options:{borderColor:r,backgroundColor:c}}=this,{inner:u,outer:f}=VV(this),g=HV(f.radius)?au:UV;n.save(),(f.w!==u.w||f.h!==u.h)&&(n.beginPath(),g(n,Kp(f,s,u)),n.clip(),g(n,Kp(u,-s,f)),n.fillStyle=r,n.fill("evenodd")),n.beginPath(),g(n,Kp(u,s)),n.fillStyle=c,n.fill(),n.restore()}inRange(n,s,r){return Yp(this,n,s,r)}inXRange(n,s){return Yp(this,n,null,s)}inYRange(n,s){return Yp(this,null,n,s)}getCenterPoint(n){const{x:s,y:r,base:c,horizontal:u}=this.getProps(["x","y","base","horizontal"],n);return{x:u?(s+c)/2:s,y:u?r:(r+c)/2}}getRange(n){return n==="x"?this.width/2:this.height/2}}zf.id="bar";zf.defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0};zf.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};const hA=(i,n)=>{let{boxHeight:s=n,boxWidth:r=n}=i;return i.usePointStyle&&(s=Math.min(s,n),r=i.pointStyleWidth||Math.min(r,n)),{boxWidth:r,boxHeight:s,itemHeight:Math.max(n,s)}},WV=(i,n)=>i!==null&&n!==null&&i.datasetIndex===n.datasetIndex&&i.index===n.index;class fA extends Fs{constructor(n){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=n.chart,this.options=n.options,this.ctx=n.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(n,s,r){this.maxWidth=n,this.maxHeight=s,this._margins=r,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const n=this.options.labels||{};let s=zn(n.generateLabels,[this.chart],this)||[];n.filter&&(s=s.filter(r=>n.filter(r,this.chart.data))),n.sort&&(s=s.sort((r,c)=>n.sort(r,c,this.chart.data))),this.options.reverse&&s.reverse(),this.legendItems=s}fit(){const{options:n,ctx:s}=this;if(!n.display){this.width=this.height=0;return}const r=n.labels,c=wi(r.font),u=c.size,f=this._computeTitleHeight(),{boxWidth:g,itemHeight:p}=hA(r,u);let k,C;s.font=c.string,this.isHorizontal()?(k=this.maxWidth,C=this._fitRows(f,u,g,p)+10):(C=this.maxHeight,k=this._fitCols(f,u,g,p)+10),this.width=Math.min(k,n.maxWidth||this.maxWidth),this.height=Math.min(C,n.maxHeight||this.maxHeight)}_fitRows(n,s,r,c){const{ctx:u,maxWidth:f,options:{labels:{padding:g}}}=this,p=this.legendHitBoxes=[],k=this.lineWidths=[0],C=c+g;let x=n;u.textAlign="left",u.textBaseline="middle";let v=-1,M=-C;return this.legendItems.forEach((z,H)=>{const Z=r+s/2+u.measureText(z.text).width;(H===0||k[k.length-1]+Z+2*g>f)&&(x+=C,k[k.length-(H>0?0:1)]=0,M+=C,v++),p[H]={left:0,top:M,row:v,width:Z,height:c},k[k.length-1]+=Z+g}),x}_fitCols(n,s,r,c){const{ctx:u,maxHeight:f,options:{labels:{padding:g}}}=this,p=this.legendHitBoxes=[],k=this.columnSizes=[],C=f-n;let x=g,v=0,M=0,z=0,H=0;return this.legendItems.forEach((Z,U)=>{const W=r+s/2+u.measureText(Z.text).width;U>0&&M+c+2*g>C&&(x+=v+g,k.push({width:v,height:M}),z+=v+g,H++,v=M=0),p[U]={left:z,top:M,col:H,width:W,height:c},v=Math.max(v,W),M+=c+g}),x+=v,k.push({width:v,height:M}),x}adjustHitBoxes(){if(!this.options.display)return;const n=this._computeTitleHeight(),{legendHitBoxes:s,options:{align:r,labels:{padding:c},rtl:u}}=this,f=$c(u,this.left,this.width);if(this.isHorizontal()){let g=0,p=Yi(r,this.left+c,this.right-this.lineWidths[g]);for(const k of s)g!==k.row&&(g=k.row,p=Yi(r,this.left+c,this.right-this.lineWidths[g])),k.top+=this.top+n+c,k.left=f.leftForLtr(f.x(p),k.width),p+=k.width+c}else{let g=0,p=Yi(r,this.top+n+c,this.bottom-this.columnSizes[g].height);for(const k of s)k.col!==g&&(g=k.col,p=Yi(r,this.top+n+c,this.bottom-this.columnSizes[g].height)),k.top=p,k.left+=this.left+c,k.left=f.leftForLtr(f.x(k.left),k.width),p+=k.height+c}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const n=this.ctx;Pb(n,this),this._draw(),Bb(n)}}_draw(){const{options:n,columnSizes:s,lineWidths:r,ctx:c}=this,{align:u,labels:f}=n,g=on.color,p=$c(n.rtl,this.left,this.width),k=wi(f.font),{color:C,padding:x}=f,v=k.size,M=v/2;let z;this.drawTitle(),c.textAlign=p.textAlign("left"),c.textBaseline="middle",c.lineWidth=.5,c.font=k.string;const{boxWidth:H,boxHeight:Z,itemHeight:U}=hA(f,v),W=function(mt,pt,_t){if(isNaN(H)||H<=0||isNaN(Z)||Z<0)return;c.save();const Et=Ge(_t.lineWidth,1);if(c.fillStyle=Ge(_t.fillStyle,g),c.lineCap=Ge(_t.lineCap,"butt"),c.lineDashOffset=Ge(_t.lineDashOffset,0),c.lineJoin=Ge(_t.lineJoin,"miter"),c.lineWidth=Et,c.strokeStyle=Ge(_t.strokeStyle,g),c.setLineDash(Ge(_t.lineDash,[])),f.usePointStyle){const Lt={radius:Z*Math.SQRT2/2,pointStyle:_t.pointStyle,rotation:_t.rotation,borderWidth:Et},X=p.xPlus(mt,H/2),Nt=pt+M;d5(c,Lt,X,Nt,f.pointStyleWidth&&H)}else{const Lt=pt+Math.max((v-Z)/2,0),X=p.leftForLtr(mt,H),Nt=ql(_t.borderRadius);c.beginPath(),Object.values(Nt).some(Bt=>Bt!==0)?au(c,{x:X,y:Lt,w:H,h:Z,radius:Nt}):c.rect(X,Lt,H,Z),c.fill(),Et!==0&&c.stroke()}c.restore()},tt=function(mt,pt,_t){tc(c,_t.text,mt,pt+U/2,k,{strikethrough:_t.hidden,textAlign:p.textAlign(_t.textAlign)})},dt=this.isHorizontal(),st=this._computeTitleHeight();dt?z={x:Yi(u,this.left+x,this.right-r[0]),y:this.top+x+st,line:0}:z={x:this.left+x,y:Yi(u,this.top+st+x,this.bottom-s[0].height),line:0},w5(this.ctx,n.textDirection);const I=U+x;this.legendItems.forEach((mt,pt)=>{c.strokeStyle=mt.fontColor||C,c.fillStyle=mt.fontColor||C;const _t=c.measureText(mt.text).width,Et=p.textAlign(mt.textAlign||(mt.textAlign=f.textAlign)),Lt=H+M+_t;let X=z.x,Nt=z.y;p.setWidth(this.width),dt?pt>0&&X+Lt+x>this.right&&(Nt=z.y+=I,z.line++,X=z.x=Yi(u,this.left+x,this.right-r[z.line])):pt>0&&Nt+I>this.bottom&&(X=z.x=X+s[z.line].width+x,z.line++,Nt=z.y=Yi(u,this.top+st+x,this.bottom-s[z.line].height));const Bt=p.x(X);W(Bt,Nt,mt),X=E9(Et,X+H+M,dt?X+Lt:this.right,n.rtl),tt(p.x(X),Nt,mt),dt?z.x+=Lt+x:z.y+=I}),_5(this.ctx,n.textDirection)}drawTitle(){const n=this.options,s=n.title,r=wi(s.font),c=Xi(s.padding);if(!s.display)return;const u=$c(n.rtl,this.left,this.width),f=this.ctx,g=s.position,p=r.size/2,k=c.top+p;let C,x=this.left,v=this.width;if(this.isHorizontal())v=Math.max(...this.lineWidths),C=this.top+k,x=Yi(n.align,x,this.right-v);else{const z=this.columnSizes.reduce((H,Z)=>Math.max(H,Z.height),0);C=k+Yi(n.align,this.top,this.bottom-z-n.labels.padding-this._computeTitleHeight())}const M=Yi(g,x,x+v);f.textAlign=u.textAlign(Tb(g)),f.textBaseline="middle",f.strokeStyle=s.color,f.fillStyle=s.color,f.font=r.string,tc(f,s.text,M,C,r)}_computeTitleHeight(){const n=this.options.title,s=wi(n.font),r=Xi(n.padding);return n.display?s.lineHeight+r.height:0}_getLegendItemAt(n,s){let r,c,u;if(ja(n,this.left,this.right)&&ja(s,this.top,this.bottom)){for(u=this.legendHitBoxes,r=0;r<u.length;++r)if(c=u[r],ja(n,c.left,c.left+c.width)&&ja(s,c.top,c.top+c.height))return this.legendItems[r]}return null}handleEvent(n){const s=this.options;if(!qV(n.type,s))return;const r=this._getLegendItemAt(n.x,n.y);if(n.type==="mousemove"||n.type==="mouseout"){const c=this._hoveredItem,u=WV(c,r);c&&!u&&zn(s.onLeave,[n,c,this],this),this._hoveredItem=r,r&&!u&&zn(s.onHover,[n,r,this],this)}else r&&zn(s.onClick,[n,r,this],this)}}function qV(i,n){return!!((i==="mousemove"||i==="mouseout")&&(n.onHover||n.onLeave)||n.onClick&&(i==="click"||i==="mouseup"))}var GV={id:"legend",_element:fA,start(i,n,s){const r=i.legend=new fA({ctx:i.ctx,options:s,chart:i});fs.configure(i,r,s),fs.addBox(i,r)},stop(i){fs.removeBox(i,i.legend),delete i.legend},beforeUpdate(i,n,s){const r=i.legend;fs.configure(i,r,s),r.options=s},afterUpdate(i){const n=i.legend;n.buildLabels(),n.adjustHitBoxes()},afterEvent(i,n){n.replay||i.legend.handleEvent(n.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(i,n,s){const r=n.datasetIndex,c=s.chart;c.isDatasetVisible(r)?(c.hide(r),n.hidden=!0):(c.show(r),n.hidden=!1)},onHover:null,onLeave:null,labels:{color:i=>i.chart.options.color,boxWidth:40,padding:10,generateLabels(i){const n=i.data.datasets,{labels:{usePointStyle:s,pointStyle:r,textAlign:c,color:u}}=i.legend.options;return i._getSortedDatasetMetas().map(f=>{const g=f.controller.getStyle(s?0:void 0),p=Xi(g.borderWidth);return{text:n[f.index].label,fillStyle:g.backgroundColor,fontColor:u,hidden:!f.visible,lineCap:g.borderCapStyle,lineDash:g.borderDash,lineDashOffset:g.borderDashOffset,lineJoin:g.borderJoinStyle,lineWidth:(p.width+p.height)/4,strokeStyle:g.borderColor,pointStyle:r||g.pointStyle,rotation:g.rotation,textAlign:c||g.textAlign,borderRadius:0,datasetIndex:f.index}},this)}},title:{color:i=>i.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:i=>!i.startsWith("on"),labels:{_scriptable:i=>!["generateLabels","filter","sort"].includes(i)}}};class $5 extends Fs{constructor(n){super(),this.chart=n.chart,this.options=n.options,this.ctx=n.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(n,s){const r=this.options;if(this.left=0,this.top=0,!r.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=n,this.height=this.bottom=s;const c=$n(r.text)?r.text.length:1;this._padding=Xi(r.padding);const u=c*wi(r.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=u:this.width=u}isHorizontal(){const n=this.options.position;return n==="top"||n==="bottom"}_drawArgs(n){const{top:s,left:r,bottom:c,right:u,options:f}=this,g=f.align;let p=0,k,C,x;return this.isHorizontal()?(C=Yi(g,r,u),x=s+n,k=u-r):(f.position==="left"?(C=r+n,x=Yi(g,c,s),p=qn*-.5):(C=u-n,x=Yi(g,s,c),p=qn*.5),k=c-s),{titleX:C,titleY:x,maxWidth:k,rotation:p}}draw(){const n=this.ctx,s=this.options;if(!s.display)return;const r=wi(s.font),u=r.lineHeight/2+this._padding.top,{titleX:f,titleY:g,maxWidth:p,rotation:k}=this._drawArgs(u);tc(n,s.text,0,0,r,{color:s.color,maxWidth:p,rotation:k,textAlign:Tb(s.align),textBaseline:"middle",translation:[f,g]})}}function YV(i,n){const s=new $5({ctx:i.ctx,options:n,chart:i});fs.configure(i,s,n),fs.addBox(i,s),i.titleBlock=s}var KV={id:"title",_element:$5,start(i,n,s){YV(i,s)},stop(i){const n=i.titleBlock;fs.removeBox(i,n),delete i.titleBlock},beforeUpdate(i,n,s){const r=i.titleBlock;fs.configure(i,r,s),r.options=s},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Gd={average(i){if(!i.length)return!1;let n,s,r=0,c=0,u=0;for(n=0,s=i.length;n<s;++n){const f=i[n].element;if(f&&f.hasValue()){const g=f.tooltipPosition();r+=g.x,c+=g.y,++u}}return{x:r/u,y:c/u}},nearest(i,n){if(!i.length)return!1;let s=n.x,r=n.y,c=Number.POSITIVE_INFINITY,u,f,g;for(u=0,f=i.length;u<f;++u){const p=i[u].element;if(p&&p.hasValue()){const k=p.getCenterPoint(),C=xm(n,k);C<c&&(c=C,g=p)}}if(g){const p=g.tooltipPosition();s=p.x,r=p.y}return{x:s,y:r}}};function pr(i,n){return n&&($n(n)?Array.prototype.push.apply(i,n):i.push(n)),i}function Yr(i){return(typeof i=="string"||i instanceof String)&&i.indexOf(`
`)>-1?i.split(`
`):i}function QV(i,n){const{element:s,datasetIndex:r,index:c}=n,u=i.getDatasetMeta(r).controller,{label:f,value:g}=u.getLabelAndValue(c);return{chart:i,label:f,parsed:u.getParsed(c),raw:i.data.datasets[r].data[c],formattedValue:g,dataset:u.getDataset(),dataIndex:c,datasetIndex:r,element:s}}function gA(i,n){const s=i.chart.ctx,{body:r,footer:c,title:u}=i,{boxWidth:f,boxHeight:g}=n,p=wi(n.bodyFont),k=wi(n.titleFont),C=wi(n.footerFont),x=u.length,v=c.length,M=r.length,z=Xi(n.padding);let H=z.height,Z=0,U=r.reduce((dt,st)=>dt+st.before.length+st.lines.length+st.after.length,0);if(U+=i.beforeBody.length+i.afterBody.length,x&&(H+=x*k.lineHeight+(x-1)*n.titleSpacing+n.titleMarginBottom),U){const dt=n.displayColors?Math.max(g,p.lineHeight):p.lineHeight;H+=M*dt+(U-M)*p.lineHeight+(U-1)*n.bodySpacing}v&&(H+=n.footerMarginTop+v*C.lineHeight+(v-1)*n.footerSpacing);let W=0;const tt=function(dt){Z=Math.max(Z,s.measureText(dt).width+W)};return s.save(),s.font=k.string,Tn(i.title,tt),s.font=p.string,Tn(i.beforeBody.concat(i.afterBody),tt),W=n.displayColors?f+2+n.boxPadding:0,Tn(r,dt=>{Tn(dt.before,tt),Tn(dt.lines,tt),Tn(dt.after,tt)}),W=0,s.font=C.string,Tn(i.footer,tt),s.restore(),Z+=z.width,{width:Z,height:H}}function ZV(i,n){const{y:s,height:r}=n;return s<r/2?"top":s>i.height-r/2?"bottom":"center"}function JV(i,n,s,r){const{x:c,width:u}=r,f=s.caretSize+s.caretPadding;if(i==="left"&&c+u+f>n.width||i==="right"&&c-u-f<0)return!0}function XV(i,n,s,r){const{x:c,width:u}=s,{width:f,chartArea:{left:g,right:p}}=i;let k="center";return r==="center"?k=c<=(g+p)/2?"left":"right":c<=u/2?k="left":c>=f-u/2&&(k="right"),JV(k,i,n,s)&&(k="center"),k}function pA(i,n,s){const r=s.yAlign||n.yAlign||ZV(i,s);return{xAlign:s.xAlign||n.xAlign||XV(i,n,s,r),yAlign:r}}function tH(i,n){let{x:s,width:r}=i;return n==="right"?s-=r:n==="center"&&(s-=r/2),s}function eH(i,n,s){let{y:r,height:c}=i;return n==="top"?r+=s:n==="bottom"?r-=c+s:r-=c/2,r}function mA(i,n,s,r){const{caretSize:c,caretPadding:u,cornerRadius:f}=i,{xAlign:g,yAlign:p}=s,k=c+u,{topLeft:C,topRight:x,bottomLeft:v,bottomRight:M}=ql(f);let z=tH(n,g);const H=eH(n,p,k);return p==="center"?g==="left"?z+=k:g==="right"&&(z-=k):g==="left"?z-=Math.max(C,v)+c:g==="right"&&(z+=Math.max(x,M)+c),{x:Qi(z,0,r.width-n.width),y:Qi(H,0,r.height-n.height)}}function Th(i,n,s){const r=Xi(s.padding);return n==="center"?i.x+i.width/2:n==="right"?i.x+i.width-r.right:i.x+r.left}function bA(i){return pr([],Yr(i))}function nH(i,n,s){return el(i,{tooltip:n,tooltipItems:s,type:"tooltip"})}function kA(i,n){const s=n&&n.dataset&&n.dataset.tooltip&&n.dataset.tooltip.callbacks;return s?i.override(s):i}class Nm extends Fs{constructor(n){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=n.chart||n._chart,this._chart=this.chart,this.options=n.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(n){this.options=n,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const n=this._cachedAnimations;if(n)return n;const s=this.chart,r=this.options.setContext(this.getContext()),c=r.enabled&&s.options.animation&&r.animations,u=new y5(this.chart,c);return c._cacheable&&(this._cachedAnimations=Object.freeze(u)),u}getContext(){return this.$context||(this.$context=nH(this.chart.getContext(),this,this._tooltipItems))}getTitle(n,s){const{callbacks:r}=s,c=r.beforeTitle.apply(this,[n]),u=r.title.apply(this,[n]),f=r.afterTitle.apply(this,[n]);let g=[];return g=pr(g,Yr(c)),g=pr(g,Yr(u)),g=pr(g,Yr(f)),g}getBeforeBody(n,s){return bA(s.callbacks.beforeBody.apply(this,[n]))}getBody(n,s){const{callbacks:r}=s,c=[];return Tn(n,u=>{const f={before:[],lines:[],after:[]},g=kA(r,u);pr(f.before,Yr(g.beforeLabel.call(this,u))),pr(f.lines,g.label.call(this,u)),pr(f.after,Yr(g.afterLabel.call(this,u))),c.push(f)}),c}getAfterBody(n,s){return bA(s.callbacks.afterBody.apply(this,[n]))}getFooter(n,s){const{callbacks:r}=s,c=r.beforeFooter.apply(this,[n]),u=r.footer.apply(this,[n]),f=r.afterFooter.apply(this,[n]);let g=[];return g=pr(g,Yr(c)),g=pr(g,Yr(u)),g=pr(g,Yr(f)),g}_createItems(n){const s=this._active,r=this.chart.data,c=[],u=[],f=[];let g=[],p,k;for(p=0,k=s.length;p<k;++p)g.push(QV(this.chart,s[p]));return n.filter&&(g=g.filter((C,x,v)=>n.filter(C,x,v,r))),n.itemSort&&(g=g.sort((C,x)=>n.itemSort(C,x,r))),Tn(g,C=>{const x=kA(n.callbacks,C);c.push(x.labelColor.call(this,C)),u.push(x.labelPointStyle.call(this,C)),f.push(x.labelTextColor.call(this,C))}),this.labelColors=c,this.labelPointStyles=u,this.labelTextColors=f,this.dataPoints=g,g}update(n,s){const r=this.options.setContext(this.getContext()),c=this._active;let u,f=[];if(!c.length)this.opacity!==0&&(u={opacity:0});else{const g=Gd[r.position].call(this,c,this._eventPosition);f=this._createItems(r),this.title=this.getTitle(f,r),this.beforeBody=this.getBeforeBody(f,r),this.body=this.getBody(f,r),this.afterBody=this.getAfterBody(f,r),this.footer=this.getFooter(f,r);const p=this._size=gA(this,r),k=Object.assign({},g,p),C=pA(this.chart,r,k),x=mA(r,k,C,this.chart);this.xAlign=C.xAlign,this.yAlign=C.yAlign,u={opacity:1,x:x.x,y:x.y,width:p.width,height:p.height,caretX:g.x,caretY:g.y}}this._tooltipItems=f,this.$context=void 0,u&&this._resolveAnimations().update(this,u),n&&r.external&&r.external.call(this,{chart:this.chart,tooltip:this,replay:s})}drawCaret(n,s,r,c){const u=this.getCaretPosition(n,r,c);s.lineTo(u.x1,u.y1),s.lineTo(u.x2,u.y2),s.lineTo(u.x3,u.y3)}getCaretPosition(n,s,r){const{xAlign:c,yAlign:u}=this,{caretSize:f,cornerRadius:g}=r,{topLeft:p,topRight:k,bottomLeft:C,bottomRight:x}=ql(g),{x:v,y:M}=n,{width:z,height:H}=s;let Z,U,W,tt,dt,st;return u==="center"?(dt=M+H/2,c==="left"?(Z=v,U=Z-f,tt=dt+f,st=dt-f):(Z=v+z,U=Z+f,tt=dt-f,st=dt+f),W=Z):(c==="left"?U=v+Math.max(p,C)+f:c==="right"?U=v+z-Math.max(k,x)-f:U=this.caretX,u==="top"?(tt=M,dt=tt-f,Z=U-f,W=U+f):(tt=M+H,dt=tt+f,Z=U+f,W=U-f),st=tt),{x1:Z,x2:U,x3:W,y1:tt,y2:dt,y3:st}}drawTitle(n,s,r){const c=this.title,u=c.length;let f,g,p;if(u){const k=$c(r.rtl,this.x,this.width);for(n.x=Th(this,r.titleAlign,r),s.textAlign=k.textAlign(r.titleAlign),s.textBaseline="middle",f=wi(r.titleFont),g=r.titleSpacing,s.fillStyle=r.titleColor,s.font=f.string,p=0;p<u;++p)s.fillText(c[p],k.x(n.x),n.y+f.lineHeight/2),n.y+=f.lineHeight+g,p+1===u&&(n.y+=r.titleMarginBottom-g)}}_drawColorBox(n,s,r,c,u){const f=this.labelColors[r],g=this.labelPointStyles[r],{boxHeight:p,boxWidth:k,boxPadding:C}=u,x=wi(u.bodyFont),v=Th(this,"left",u),M=c.x(v),z=p<x.lineHeight?(x.lineHeight-p)/2:0,H=s.y+z;if(u.usePointStyle){const Z={radius:Math.min(k,p)/2,pointStyle:g.pointStyle,rotation:g.rotation,borderWidth:1},U=c.leftForLtr(M,k)+k/2,W=H+p/2;n.strokeStyle=u.multiKeyBackground,n.fillStyle=u.multiKeyBackground,Tm(n,Z,U,W),n.strokeStyle=f.borderColor,n.fillStyle=f.backgroundColor,Tm(n,Z,U,W)}else{n.lineWidth=un(f.borderWidth)?Math.max(...Object.values(f.borderWidth)):f.borderWidth||1,n.strokeStyle=f.borderColor,n.setLineDash(f.borderDash||[]),n.lineDashOffset=f.borderDashOffset||0;const Z=c.leftForLtr(M,k-C),U=c.leftForLtr(c.xPlus(M,1),k-C-2),W=ql(f.borderRadius);Object.values(W).some(tt=>tt!==0)?(n.beginPath(),n.fillStyle=u.multiKeyBackground,au(n,{x:Z,y:H,w:k,h:p,radius:W}),n.fill(),n.stroke(),n.fillStyle=f.backgroundColor,n.beginPath(),au(n,{x:U,y:H+1,w:k-2,h:p-2,radius:W}),n.fill()):(n.fillStyle=u.multiKeyBackground,n.fillRect(Z,H,k,p),n.strokeRect(Z,H,k,p),n.fillStyle=f.backgroundColor,n.fillRect(U,H+1,k-2,p-2))}n.fillStyle=this.labelTextColors[r]}drawBody(n,s,r){const{body:c}=this,{bodySpacing:u,bodyAlign:f,displayColors:g,boxHeight:p,boxWidth:k,boxPadding:C}=r,x=wi(r.bodyFont);let v=x.lineHeight,M=0;const z=$c(r.rtl,this.x,this.width),H=function(pt){s.fillText(pt,z.x(n.x+M),n.y+v/2),n.y+=v+u},Z=z.textAlign(f);let U,W,tt,dt,st,I,mt;for(s.textAlign=f,s.textBaseline="middle",s.font=x.string,n.x=Th(this,Z,r),s.fillStyle=r.bodyColor,Tn(this.beforeBody,H),M=g&&Z!=="right"?f==="center"?k/2+C:k+2+C:0,dt=0,I=c.length;dt<I;++dt){for(U=c[dt],W=this.labelTextColors[dt],s.fillStyle=W,Tn(U.before,H),tt=U.lines,g&&tt.length&&(this._drawColorBox(s,n,dt,z,r),v=Math.max(x.lineHeight,p)),st=0,mt=tt.length;st<mt;++st)H(tt[st]),v=x.lineHeight;Tn(U.after,H)}M=0,v=x.lineHeight,Tn(this.afterBody,H),n.y-=u}drawFooter(n,s,r){const c=this.footer,u=c.length;let f,g;if(u){const p=$c(r.rtl,this.x,this.width);for(n.x=Th(this,r.footerAlign,r),n.y+=r.footerMarginTop,s.textAlign=p.textAlign(r.footerAlign),s.textBaseline="middle",f=wi(r.footerFont),s.fillStyle=r.footerColor,s.font=f.string,g=0;g<u;++g)s.fillText(c[g],p.x(n.x),n.y+f.lineHeight/2),n.y+=f.lineHeight+r.footerSpacing}}drawBackground(n,s,r,c){const{xAlign:u,yAlign:f}=this,{x:g,y:p}=n,{width:k,height:C}=r,{topLeft:x,topRight:v,bottomLeft:M,bottomRight:z}=ql(c.cornerRadius);s.fillStyle=c.backgroundColor,s.strokeStyle=c.borderColor,s.lineWidth=c.borderWidth,s.beginPath(),s.moveTo(g+x,p),f==="top"&&this.drawCaret(n,s,r,c),s.lineTo(g+k-v,p),s.quadraticCurveTo(g+k,p,g+k,p+v),f==="center"&&u==="right"&&this.drawCaret(n,s,r,c),s.lineTo(g+k,p+C-z),s.quadraticCurveTo(g+k,p+C,g+k-z,p+C),f==="bottom"&&this.drawCaret(n,s,r,c),s.lineTo(g+M,p+C),s.quadraticCurveTo(g,p+C,g,p+C-M),f==="center"&&u==="left"&&this.drawCaret(n,s,r,c),s.lineTo(g,p+x),s.quadraticCurveTo(g,p,g+x,p),s.closePath(),s.fill(),c.borderWidth>0&&s.stroke()}_updateAnimationTarget(n){const s=this.chart,r=this.$animations,c=r&&r.x,u=r&&r.y;if(c||u){const f=Gd[n.position].call(this,this._active,this._eventPosition);if(!f)return;const g=this._size=gA(this,n),p=Object.assign({},f,this._size),k=pA(s,n,p),C=mA(n,p,k,s);(c._to!==C.x||u._to!==C.y)&&(this.xAlign=k.xAlign,this.yAlign=k.yAlign,this.width=g.width,this.height=g.height,this.caretX=f.x,this.caretY=f.y,this._resolveAnimations().update(this,C))}}_willRender(){return!!this.opacity}draw(n){const s=this.options.setContext(this.getContext());let r=this.opacity;if(!r)return;this._updateAnimationTarget(s);const c={width:this.width,height:this.height},u={x:this.x,y:this.y};r=Math.abs(r)<.001?0:r;const f=Xi(s.padding),g=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;s.enabled&&g&&(n.save(),n.globalAlpha=r,this.drawBackground(u,n,c,s),w5(n,s.textDirection),u.y+=f.top,this.drawTitle(u,n,s),this.drawBody(u,n,s),this.drawFooter(u,n,s),_5(n,s.textDirection),n.restore())}getActiveElements(){return this._active||[]}setActiveElements(n,s){const r=this._active,c=n.map(({datasetIndex:g,index:p})=>{const k=this.chart.getDatasetMeta(g);if(!k)throw new Error("Cannot find a dataset at index "+g);return{datasetIndex:g,element:k.data[p],index:p}}),u=!Kh(r,c),f=this._positionChanged(c,s);(u||f)&&(this._active=c,this._eventPosition=s,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(n,s,r=!0){if(s&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const c=this.options,u=this._active||[],f=this._getActiveElements(n,u,s,r),g=this._positionChanged(f,n),p=s||!Kh(f,u)||g;return p&&(this._active=f,(c.enabled||c.external)&&(this._eventPosition={x:n.x,y:n.y},this.update(!0,s))),p}_getActiveElements(n,s,r,c){const u=this.options;if(n.type==="mouseout")return[];if(!c)return s;const f=this.chart.getElementsAtEventForMode(n,u.mode,u,r);return u.reverse&&f.reverse(),f}_positionChanged(n,s){const{caretX:r,caretY:c,options:u}=this,f=Gd[u.position].call(this,n,s);return f!==!1&&(r!==f.x||c!==f.y)}}Nm.positioners=Gd;var iH={id:"tooltip",_element:Nm,positioners:Gd,afterInit(i,n,s){s&&(i.tooltip=new Nm({chart:i,options:s}))},beforeUpdate(i,n,s){i.tooltip&&i.tooltip.initialize(s)},reset(i,n,s){i.tooltip&&i.tooltip.initialize(s)},afterDraw(i){const n=i.tooltip;if(n&&n._willRender()){const s={tooltip:n};if(i.notifyPlugins("beforeTooltipDraw",s)===!1)return;n.draw(i.ctx),i.notifyPlugins("afterTooltipDraw",s)}},afterEvent(i,n){if(i.tooltip){const s=n.replay;i.tooltip.handleEvent(n.event,s,n.inChartArea)&&(n.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(i,n)=>n.bodyFont.size,boxWidth:(i,n)=>n.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:{beforeTitle:Wr,title(i){if(i.length>0){const n=i[0],s=n.chart.data.labels,r=s?s.length:0;if(this&&this.options&&this.options.mode==="dataset")return n.dataset.label||"";if(n.label)return n.label;if(r>0&&n.dataIndex<r)return s[n.dataIndex]}return""},afterTitle:Wr,beforeBody:Wr,beforeLabel:Wr,label(i){if(this&&this.options&&this.options.mode==="dataset")return i.label+": "+i.formattedValue||i.formattedValue;let n=i.dataset.label||"";n&&(n+=": ");const s=i.formattedValue;return wn(s)||(n+=s),n},labelColor(i){const s=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{borderColor:s.borderColor,backgroundColor:s.backgroundColor,borderWidth:s.borderWidth,borderDash:s.borderDash,borderDashOffset:s.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(i){const s=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{pointStyle:s.pointStyle,rotation:s.rotation}},afterLabel:Wr,afterBody:Wr,beforeFooter:Wr,footer:Wr,afterFooter:Wr}},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:i=>i!=="filter"&&i!=="itemSort"&&i!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const oH=(i,n,s,r)=>(typeof n=="string"?(s=i.push(n)-1,r.unshift({index:s,label:n})):isNaN(n)&&(s=null),s);function sH(i,n,s,r){const c=i.indexOf(n);if(c===-1)return oH(i,n,s,r);const u=i.lastIndexOf(n);return c!==u?s:c}const rH=(i,n)=>i===null?null:Qi(Math.round(i),0,n);class of extends sc{constructor(n){super(n),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(n){const s=this._addedLabels;if(s.length){const r=this.getLabels();for(const{index:c,label:u}of s)r[c]===u&&r.splice(c,1);this._addedLabels=[]}super.init(n)}parse(n,s){if(wn(n))return null;const r=this.getLabels();return s=isFinite(s)&&r[s]===n?s:sH(r,n,Ge(s,n),this._addedLabels),rH(s,r.length-1)}determineDataLimits(){const{minDefined:n,maxDefined:s}=this.getUserBounds();let{min:r,max:c}=this.getMinMax(!0);this.options.bounds==="ticks"&&(n||(r=0),s||(c=this.getLabels().length-1)),this.min=r,this.max=c}buildTicks(){const n=this.min,s=this.max,r=this.options.offset,c=[];let u=this.getLabels();u=n===0&&s===u.length-1?u:u.slice(n,s+1),this._valueRange=Math.max(u.length-(r?0:1),1),this._startValue=this.min-(r?.5:0);for(let f=n;f<=s;f++)c.push({value:f});return c}getLabelForValue(n){const s=this.getLabels();return n>=0&&n<s.length?s[n]:n}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(n){return typeof n!="number"&&(n=this.parse(n)),n===null?NaN:this.getPixelForDecimal((n-this._startValue)/this._valueRange)}getPixelForTick(n){const s=this.ticks;return n<0||n>s.length-1?null:this.getPixelForValue(s[n].value)}getValueForPixel(n){return Math.round(this._startValue+this.getDecimalForPixel(n)*this._valueRange)}getBasePixel(){return this.bottom}}of.id="category";of.defaults={ticks:{callback:of.prototype.getLabelForValue}};function aH(i,n){const s=[],{bounds:c,step:u,min:f,max:g,precision:p,count:k,maxTicks:C,maxDigits:x,includeBounds:v}=i,M=u||1,z=C-1,{min:H,max:Z}=n,U=!wn(f),W=!wn(g),tt=!wn(k),dt=(Z-H)/(x+1);let st=vC((Z-H)/z/M)*M,I,mt,pt,_t;if(st<1e-14&&!U&&!W)return[{value:H},{value:Z}];_t=Math.ceil(Z/st)-Math.floor(H/st),_t>z&&(st=vC(_t*st/z/M)*M),wn(p)||(I=Math.pow(10,p),st=Math.ceil(st*I)/I),c==="ticks"?(mt=Math.floor(H/st)*st,pt=Math.ceil(Z/st)*st):(mt=H,pt=Z),U&&W&&u&&w9((g-f)/u,st/1e3)?(_t=Math.round(Math.min((g-f)/st,C)),st=(g-f)/_t,mt=f,pt=g):tt?(mt=U?f:mt,pt=W?g:pt,_t=k-1,st=(pt-mt)/_t):(_t=(pt-mt)/st,Ud(_t,Math.round(_t),st/1e3)?_t=Math.round(_t):_t=Math.ceil(_t));const Et=Math.max(yC(st),yC(mt));I=Math.pow(10,wn(p)?Et:p),mt=Math.round(mt*I)/I,pt=Math.round(pt*I)/I;let Lt=0;for(U&&(v&&mt!==f?(s.push({value:f}),mt<f&&Lt++,Ud(Math.round((mt+Lt*st)*I)/I,f,wA(f,dt,i))&&Lt++):mt<f&&Lt++);Lt<_t;++Lt)s.push({value:Math.round((mt+Lt*st)*I)/I});return W&&v&&pt!==g?s.length&&Ud(s[s.length-1].value,g,wA(g,dt,i))?s[s.length-1].value=g:s.push({value:g}):(!W||pt===g)&&s.push({value:pt}),s}function wA(i,n,{horizontal:s,minRotation:r}){const c=Ns(r),u=(s?Math.sin(c):Math.cos(c))||.001,f=.75*n*(""+i).length;return Math.min(n/u,f)}class sf extends sc{constructor(n){super(n),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(n,s){return wn(n)||(typeof n=="number"||n instanceof Number)&&!isFinite(+n)?null:+n}handleTickRangeOptions(){const{beginAtZero:n}=this.options,{minDefined:s,maxDefined:r}=this.getUserBounds();let{min:c,max:u}=this;const f=p=>c=s?c:p,g=p=>u=r?u:p;if(n){const p=_r(c),k=_r(u);p<0&&k<0?g(0):p>0&&k>0&&f(0)}if(c===u){let p=1;(u>=Number.MAX_SAFE_INTEGER||c<=Number.MIN_SAFE_INTEGER)&&(p=Math.abs(u*.05)),g(u+p),n||f(c-p)}this.min=c,this.max=u}getTickLimit(){const n=this.options.ticks;let{maxTicksLimit:s,stepSize:r}=n,c;return r?(c=Math.ceil(this.max/r)-Math.floor(this.min/r)+1,c>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${c} ticks. Limiting to 1000.`),c=1e3)):(c=this.computeTickLimit(),s=s||11),s&&(c=Math.min(s,c)),c}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const n=this.options,s=n.ticks;let r=this.getTickLimit();r=Math.max(2,r);const c={maxTicks:r,bounds:n.bounds,min:n.min,max:n.max,precision:s.precision,step:s.stepSize,count:s.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:s.minRotation||0,includeBounds:s.includeBounds!==!1},u=this._range||this,f=aH(c,u);return n.bounds==="ticks"&&Zx(f,this,"value"),n.reverse?(f.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),f}configure(){const n=this.ticks;let s=this.min,r=this.max;if(super.configure(),this.options.offset&&n.length){const c=(r-s)/Math.max(n.length-1,1)/2;s-=c,r+=c}this._startValue=s,this._endValue=r,this._valueRange=r-s}getLabelForValue(n){return vu(n,this.chart.options.locale,this.options.ticks.format)}}class Ub extends sf{determineDataLimits(){const{min:n,max:s}=this.getMinMax(!0);this.min=ji(n)?n:0,this.max=ji(s)?s:1,this.handleTickRangeOptions()}computeTickLimit(){const n=this.isHorizontal(),s=n?this.width:this.height,r=Ns(this.options.ticks.minRotation),c=(n?Math.sin(r):Math.cos(r))||.001,u=this._resolveTickFontOptions(0);return Math.ceil(s/Math.min(40,u.lineHeight/c))}getPixelForValue(n){return n===null?NaN:this.getPixelForDecimal((n-this._startValue)/this._valueRange)}getValueForPixel(n){return this._startValue+this.getDecimalForPixel(n)*this._valueRange}}Ub.id="linear";Ub.defaults={ticks:{callback:Lf.formatters.numeric}};function _A(i){return i/Math.pow(10,Math.floor(us(i)))===1}function lH(i,n){const s=Math.floor(us(n.max)),r=Math.ceil(n.max/Math.pow(10,s)),c=[];let u=cs(i.min,Math.pow(10,Math.floor(us(n.min)))),f=Math.floor(us(u)),g=Math.floor(u/Math.pow(10,f)),p=f<0?Math.pow(10,Math.abs(f)):1;do c.push({value:u,major:_A(u)}),++g,g===10&&(g=1,++f,p=f>=0?1:p),u=Math.round(g*Math.pow(10,f)*p)/p;while(f<s||f===s&&g<r);const k=cs(i.max,u);return c.push({value:k,major:_A(u)}),c}class V5 extends sc{constructor(n){super(n),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(n,s){const r=sf.prototype.parse.apply(this,[n,s]);if(r===0){this._zero=!0;return}return ji(r)&&r>0?r:null}determineDataLimits(){const{min:n,max:s}=this.getMinMax(!0);this.min=ji(n)?Math.max(0,n):null,this.max=ji(s)?Math.max(0,s):null,this.options.beginAtZero&&(this._zero=!0),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:n,maxDefined:s}=this.getUserBounds();let r=this.min,c=this.max;const u=p=>r=n?r:p,f=p=>c=s?c:p,g=(p,k)=>Math.pow(10,Math.floor(us(p))+k);r===c&&(r<=0?(u(1),f(10)):(u(g(r,-1)),f(g(c,1)))),r<=0&&u(g(c,-1)),c<=0&&f(g(r,1)),this._zero&&this.min!==this._suggestedMin&&r===g(this.min,0)&&u(g(r,-1)),this.min=r,this.max=c}buildTicks(){const n=this.options,s={min:this._userMin,max:this._userMax},r=lH(s,this);return n.bounds==="ticks"&&Zx(r,this,"value"),n.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}getLabelForValue(n){return n===void 0?"0":vu(n,this.chart.options.locale,this.options.ticks.format)}configure(){const n=this.min;super.configure(),this._startValue=us(n),this._valueRange=us(this.max)-us(n)}getPixelForValue(n){return(n===void 0||n===0)&&(n=this.min),n===null||isNaN(n)?NaN:this.getPixelForDecimal(n===this.min?0:(us(n)-this._startValue)/this._valueRange)}getValueForPixel(n){const s=this.getDecimalForPixel(n);return Math.pow(10,this._startValue+s*this._valueRange)}}V5.id="logarithmic";V5.defaults={ticks:{callback:Lf.formatters.logarithmic,major:{enabled:!0}}};function Om(i){const n=i.ticks;if(n.display&&i.display){const s=Xi(n.backdropPadding);return Ge(n.font&&n.font.size,on.font.size)+s.height}return 0}function cH(i,n,s){return s=$n(s)?s:[s],{w:Z9(i,n.string,s),h:s.length*n.lineHeight}}function vA(i,n,s,r,c){return i===r||i===c?{start:n-s/2,end:n+s/2}:i<r||i>c?{start:n-s,end:n}:{start:n,end:n+s}}function dH(i){const n={l:i.left+i._padding.left,r:i.right-i._padding.right,t:i.top+i._padding.top,b:i.bottom-i._padding.bottom},s=Object.assign({},n),r=[],c=[],u=i._pointLabels.length,f=i.options.pointLabels,g=f.centerPointLabels?qn/u:0;for(let p=0;p<u;p++){const k=f.setContext(i.getPointLabelContext(p));c[p]=k.padding;const C=i.getPointPosition(p,i.drawingArea+c[p],g),x=wi(k.font),v=cH(i.ctx,x,i._pointLabels[p]);r[p]=v;const M=Ps(i.getIndexAngle(p)+g),z=Math.round(Eb(M)),H=vA(z,C.x,v.w,0,180),Z=vA(z,C.y,v.h,90,270);uH(s,n,M,H,Z)}i.setCenterPoint(n.l-s.l,s.r-n.r,n.t-s.t,s.b-n.b),i._pointLabelItems=hH(i,r,c)}function uH(i,n,s,r,c){const u=Math.abs(Math.sin(s)),f=Math.abs(Math.cos(s));let g=0,p=0;r.start<n.l?(g=(n.l-r.start)/u,i.l=Math.min(i.l,n.l-g)):r.end>n.r&&(g=(r.end-n.r)/u,i.r=Math.max(i.r,n.r+g)),c.start<n.t?(p=(n.t-c.start)/f,i.t=Math.min(i.t,n.t-p)):c.end>n.b&&(p=(c.end-n.b)/f,i.b=Math.max(i.b,n.b+p))}function hH(i,n,s){const r=[],c=i._pointLabels.length,u=i.options,f=Om(u)/2,g=i.drawingArea,p=u.pointLabels.centerPointLabels?qn/c:0;for(let k=0;k<c;k++){const C=i.getPointPosition(k,g+f+s[k],p),x=Math.round(Eb(Ps(C.angle+ei))),v=n[k],M=pH(C.y,v.h,x),z=fH(x),H=gH(C.x,v.w,z);r.push({x:C.x,y:M,textAlign:z,left:H,top:M,right:H+v.w,bottom:M+v.h})}return r}function fH(i){return i===0||i===180?"center":i<180?"left":"right"}function gH(i,n,s){return s==="right"?i-=n:s==="center"&&(i-=n/2),i}function pH(i,n,s){return s===90||s===270?i-=n/2:(s>270||s<90)&&(i-=n),i}function mH(i,n){const{ctx:s,options:{pointLabels:r}}=i;for(let c=n-1;c>=0;c--){const u=r.setContext(i.getPointLabelContext(c)),f=wi(u.font),{x:g,y:p,textAlign:k,left:C,top:x,right:v,bottom:M}=i._pointLabelItems[c],{backdropColor:z}=u;if(!wn(z)){const H=ql(u.borderRadius),Z=Xi(u.backdropPadding);s.fillStyle=z;const U=C-Z.left,W=x-Z.top,tt=v-C+Z.width,dt=M-x+Z.height;Object.values(H).some(st=>st!==0)?(s.beginPath(),au(s,{x:U,y:W,w:tt,h:dt,radius:H}),s.fill()):s.fillRect(U,W,tt,dt)}tc(s,i._pointLabels[c],g,p+f.lineHeight/2,f,{color:u.color,textAlign:k,textBaseline:"middle"})}}function H5(i,n,s,r){const{ctx:c}=i;if(s)c.arc(i.xCenter,i.yCenter,n,0,On);else{let u=i.getPointPosition(0,n);c.moveTo(u.x,u.y);for(let f=1;f<r;f++)u=i.getPointPosition(f,n),c.lineTo(u.x,u.y)}}function bH(i,n,s,r){const c=i.ctx,u=n.circular,{color:f,lineWidth:g}=n;!u&&!r||!f||!g||s<0||(c.save(),c.strokeStyle=f,c.lineWidth=g,c.setLineDash(n.borderDash),c.lineDashOffset=n.borderDashOffset,c.beginPath(),H5(i,s,u,r),c.closePath(),c.stroke(),c.restore())}function kH(i,n,s){return el(i,{label:s,index:n,type:"pointLabel"})}class jf extends sf{constructor(n){super(n),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const n=this._padding=Xi(Om(this.options)/2),s=this.width=this.maxWidth-n.width,r=this.height=this.maxHeight-n.height;this.xCenter=Math.floor(this.left+s/2+n.left),this.yCenter=Math.floor(this.top+r/2+n.top),this.drawingArea=Math.floor(Math.min(s,r)/2)}determineDataLimits(){const{min:n,max:s}=this.getMinMax(!1);this.min=ji(n)&&!isNaN(n)?n:0,this.max=ji(s)&&!isNaN(s)?s:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Om(this.options))}generateTickLabels(n){sf.prototype.generateTickLabels.call(this,n),this._pointLabels=this.getLabels().map((s,r)=>{const c=zn(this.options.pointLabels.callback,[s,r],this);return c||c===0?c:""}).filter((s,r)=>this.chart.getDataVisibility(r))}fit(){const n=this.options;n.display&&n.pointLabels.display?dH(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(n,s,r,c){this.xCenter+=Math.floor((n-s)/2),this.yCenter+=Math.floor((r-c)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(n,s,r,c))}getIndexAngle(n){const s=On/(this._pointLabels.length||1),r=this.options.startAngle||0;return Ps(n*s+Ns(r))}getDistanceFromCenterForValue(n){if(wn(n))return NaN;const s=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-n)*s:(n-this.min)*s}getValueForDistanceFromCenter(n){if(wn(n))return NaN;const s=n/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-s:this.min+s}getPointLabelContext(n){const s=this._pointLabels||[];if(n>=0&&n<s.length){const r=s[n];return kH(this.getContext(),n,r)}}getPointPosition(n,s,r=0){const c=this.getIndexAngle(n)-ei+r;return{x:Math.cos(c)*s+this.xCenter,y:Math.sin(c)*s+this.yCenter,angle:c}}getPointPositionForValue(n,s){return this.getPointPosition(n,this.getDistanceFromCenterForValue(s))}getBasePosition(n){return this.getPointPositionForValue(n||0,this.getBaseValue())}getPointLabelPosition(n){const{left:s,top:r,right:c,bottom:u}=this._pointLabelItems[n];return{left:s,top:r,right:c,bottom:u}}drawBackground(){const{backgroundColor:n,grid:{circular:s}}=this.options;if(n){const r=this.ctx;r.save(),r.beginPath(),H5(this,this.getDistanceFromCenterForValue(this._endValue),s,this._pointLabels.length),r.closePath(),r.fillStyle=n,r.fill(),r.restore()}}drawGrid(){const n=this.ctx,s=this.options,{angleLines:r,grid:c}=s,u=this._pointLabels.length;let f,g,p;if(s.pointLabels.display&&mH(this,u),c.display&&this.ticks.forEach((k,C)=>{if(C!==0){g=this.getDistanceFromCenterForValue(k.value);const x=c.setContext(this.getContext(C-1));bH(this,x,g,u)}}),r.display){for(n.save(),f=u-1;f>=0;f--){const k=r.setContext(this.getPointLabelContext(f)),{color:C,lineWidth:x}=k;!x||!C||(n.lineWidth=x,n.strokeStyle=C,n.setLineDash(k.borderDash),n.lineDashOffset=k.borderDashOffset,g=this.getDistanceFromCenterForValue(s.ticks.reverse?this.min:this.max),p=this.getPointPosition(f,g),n.beginPath(),n.moveTo(this.xCenter,this.yCenter),n.lineTo(p.x,p.y),n.stroke())}n.restore()}}drawBorder(){}drawLabels(){const n=this.ctx,s=this.options,r=s.ticks;if(!r.display)return;const c=this.getIndexAngle(0);let u,f;n.save(),n.translate(this.xCenter,this.yCenter),n.rotate(c),n.textAlign="center",n.textBaseline="middle",this.ticks.forEach((g,p)=>{if(p===0&&!s.reverse)return;const k=r.setContext(this.getContext(p)),C=wi(k.font);if(u=this.getDistanceFromCenterForValue(this.ticks[p].value),k.showLabelBackdrop){n.font=C.string,f=n.measureText(g.label).width,n.fillStyle=k.backdropColor;const x=Xi(k.backdropPadding);n.fillRect(-f/2-x.left,-u-C.size/2-x.top,f+x.width,C.size+x.height)}tc(n,g.label,0,-u,C,{color:k.color})}),n.restore()}drawTitle(){}}jf.id="radialLinear";jf.defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Lf.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(i){return i},padding:5,centerPointLabels:!1}};jf.defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"};jf.descriptors={angleLines:{_fallback:"grid"}};const Ff={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},_o=Object.keys(Ff);function wH(i,n){return i-n}function yA(i,n){if(wn(n))return null;const s=i._adapter,{parser:r,round:c,isoWeekday:u}=i._parseOpts;let f=n;return typeof r=="function"&&(f=r(f)),ji(f)||(f=typeof r=="string"?s.parse(f,r):s.parse(f)),f===null?null:(c&&(f=c==="week"&&(Kc(u)||u===!0)?s.startOf(f,"isoWeek",u):s.startOf(f,c)),+f)}function CA(i,n,s,r){const c=_o.length;for(let u=_o.indexOf(i);u<c-1;++u){const f=Ff[_o[u]],g=f.steps?f.steps:Number.MAX_SAFE_INTEGER;if(f.common&&Math.ceil((s-n)/(g*f.size))<=r)return _o[u]}return _o[c-1]}function _H(i,n,s,r,c){for(let u=_o.length-1;u>=_o.indexOf(s);u--){const f=_o[u];if(Ff[f].common&&i._adapter.diff(c,r,f)>=n-1)return f}return _o[s?_o.indexOf(s):0]}function vH(i){for(let n=_o.indexOf(i)+1,s=_o.length;n<s;++n)if(Ff[_o[n]].common)return _o[n]}function AA(i,n,s){if(!s)i[n]=!0;else if(s.length){const{lo:r,hi:c}=Sb(s,n),u=s[r]>=n?s[r]:s[c];i[u]=!0}}function yH(i,n,s,r){const c=i._adapter,u=+c.startOf(n[0].value,r),f=n[n.length-1].value;let g,p;for(g=u;g<=f;g=+c.add(g,1,r))p=s[g],p>=0&&(n[p].major=!0);return n}function xA(i,n,s){const r=[],c={},u=n.length;let f,g;for(f=0;f<u;++f)g=n[f],c[g]=f,r.push({value:g,major:!1});return u===0||!s?r:yH(i,r,c,s)}class $f extends sc{constructor(n){super(n),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(n,s){const r=n.time||(n.time={}),c=this._adapter=new O$._date(n.adapters.date);c.init(s),Hd(r.displayFormats,c.formats()),this._parseOpts={parser:r.parser,round:r.round,isoWeekday:r.isoWeekday},super.init(n),this._normalized=s.normalized}parse(n,s){return n===void 0?null:yA(this,n)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const n=this.options,s=this._adapter,r=n.time.unit||"day";let{min:c,max:u,minDefined:f,maxDefined:g}=this.getUserBounds();function p(k){!f&&!isNaN(k.min)&&(c=Math.min(c,k.min)),!g&&!isNaN(k.max)&&(u=Math.max(u,k.max))}(!f||!g)&&(p(this._getLabelBounds()),(n.bounds!=="ticks"||n.ticks.source!=="labels")&&p(this.getMinMax(!1))),c=ji(c)&&!isNaN(c)?c:+s.startOf(Date.now(),r),u=ji(u)&&!isNaN(u)?u:+s.endOf(Date.now(),r)+1,this.min=Math.min(c,u-1),this.max=Math.max(c+1,u)}_getLabelBounds(){const n=this.getLabelTimestamps();let s=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;return n.length&&(s=n[0],r=n[n.length-1]),{min:s,max:r}}buildTicks(){const n=this.options,s=n.time,r=n.ticks,c=r.source==="labels"?this.getLabelTimestamps():this._generate();n.bounds==="ticks"&&c.length&&(this.min=this._userMin||c[0],this.max=this._userMax||c[c.length-1]);const u=this.min,f=this.max,g=C9(c,u,f);return this._unit=s.unit||(r.autoSkip?CA(s.minUnit,this.min,this.max,this._getLabelCapacity(u)):_H(this,g.length,s.minUnit,this.min,this.max)),this._majorUnit=!r.major.enabled||this._unit==="year"?void 0:vH(this._unit),this.initOffsets(c),n.reverse&&g.reverse(),xA(this,g,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(n=>+n.value))}initOffsets(n){let s=0,r=0,c,u;this.options.offset&&n.length&&(c=this.getDecimalForValue(n[0]),n.length===1?s=1-c:s=(this.getDecimalForValue(n[1])-c)/2,u=this.getDecimalForValue(n[n.length-1]),n.length===1?r=u:r=(u-this.getDecimalForValue(n[n.length-2]))/2);const f=n.length<3?.5:.25;s=Qi(s,0,f),r=Qi(r,0,f),this._offsets={start:s,end:r,factor:1/(s+1+r)}}_generate(){const n=this._adapter,s=this.min,r=this.max,c=this.options,u=c.time,f=u.unit||CA(u.minUnit,s,r,this._getLabelCapacity(s)),g=Ge(u.stepSize,1),p=f==="week"?u.isoWeekday:!1,k=Kc(p)||p===!0,C={};let x=s,v,M;if(k&&(x=+n.startOf(x,"isoWeek",p)),x=+n.startOf(x,k?"day":f),n.diff(r,s,f)>1e5*g)throw new Error(s+" and "+r+" are too far apart with stepSize of "+g+" "+f);const z=c.ticks.source==="data"&&this.getDataTimestamps();for(v=x,M=0;v<r;v=+n.add(v,g,f),M++)AA(C,v,z);return(v===r||c.bounds==="ticks"||M===1)&&AA(C,v,z),Object.keys(C).sort((H,Z)=>H-Z).map(H=>+H)}getLabelForValue(n){const s=this._adapter,r=this.options.time;return r.tooltipFormat?s.format(n,r.tooltipFormat):s.format(n,r.displayFormats.datetime)}_tickFormatFunction(n,s,r,c){const u=this.options,f=u.time.displayFormats,g=this._unit,p=this._majorUnit,k=g&&f[g],C=p&&f[p],x=r[s],v=p&&C&&x&&x.major,M=this._adapter.format(n,c||(v?C:k)),z=u.ticks.callback;return z?zn(z,[M,s,r],this):M}generateTickLabels(n){let s,r,c;for(s=0,r=n.length;s<r;++s)c=n[s],c.label=this._tickFormatFunction(c.value,s,n)}getDecimalForValue(n){return n===null?NaN:(n-this.min)/(this.max-this.min)}getPixelForValue(n){const s=this._offsets,r=this.getDecimalForValue(n);return this.getPixelForDecimal((s.start+r)*s.factor)}getValueForPixel(n){const s=this._offsets,r=this.getDecimalForPixel(n)/s.factor-s.end;return this.min+r*(this.max-this.min)}_getLabelSize(n){const s=this.options.ticks,r=this.ctx.measureText(n).width,c=Ns(this.isHorizontal()?s.maxRotation:s.minRotation),u=Math.cos(c),f=Math.sin(c),g=this._resolveTickFontOptions(0).size;return{w:r*u+g*f,h:r*f+g*u}}_getLabelCapacity(n){const s=this.options.time,r=s.displayFormats,c=r[s.unit]||r.millisecond,u=this._tickFormatFunction(n,0,xA(this,[n],this._majorUnit),c),f=this._getLabelSize(u),g=Math.floor(this.isHorizontal()?this.width/f.w:this.height/f.h)-1;return g>0?g:1}getDataTimestamps(){let n=this._cache.data||[],s,r;if(n.length)return n;const c=this.getMatchingVisibleMetas();if(this._normalized&&c.length)return this._cache.data=c[0].controller.getAllParsedValues(this);for(s=0,r=c.length;s<r;++s)n=n.concat(c[s].controller.getAllParsedValues(this));return this._cache.data=this.normalize(n)}getLabelTimestamps(){const n=this._cache.labels||[];let s,r;if(n.length)return n;const c=this.getLabels();for(s=0,r=c.length;s<r;++s)n.push(yA(this,c[s]));return this._cache.labels=this._normalized?n:this.normalize(n)}normalize(n){return t5(n.sort(wH))}}$f.id="time";$f.defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",major:{enabled:!1}}};function Dh(i,n,s){let r=0,c=i.length-1,u,f,g,p;s?(n>=i[r].pos&&n<=i[c].pos&&({lo:r,hi:c}=$l(i,"pos",n)),{pos:u,time:g}=i[r],{pos:f,time:p}=i[c]):(n>=i[r].time&&n<=i[c].time&&({lo:r,hi:c}=$l(i,"time",n)),{time:u,pos:g}=i[r],{time:f,pos:p}=i[c]);const k=f-u;return k?g+(p-g)*(n-u)/k:g}class U5 extends $f{constructor(n){super(n),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const n=this._getTimestampsForTable(),s=this._table=this.buildLookupTable(n);this._minPos=Dh(s,this.min),this._tableRange=Dh(s,this.max)-this._minPos,super.initOffsets(n)}buildLookupTable(n){const{min:s,max:r}=this,c=[],u=[];let f,g,p,k,C;for(f=0,g=n.length;f<g;++f)k=n[f],k>=s&&k<=r&&c.push(k);if(c.length<2)return[{time:s,pos:0},{time:r,pos:1}];for(f=0,g=c.length;f<g;++f)C=c[f+1],p=c[f-1],k=c[f],Math.round((C+p)/2)!==k&&u.push({time:k,pos:f/(g-1)});return u}_getTimestampsForTable(){let n=this._cache.all||[];if(n.length)return n;const s=this.getDataTimestamps(),r=this.getLabelTimestamps();return s.length&&r.length?n=this.normalize(s.concat(r)):n=s.length?s:r,n=this._cache.all=n,n}getDecimalForValue(n){return(Dh(this._table,n)-this._minPos)/this._tableRange}getValueForPixel(n){const s=this._offsets,r=this.getDecimalForPixel(n)/s.factor-s.end;return Dh(this._table,r*this._tableRange+this._minPos,!0)}}U5.id="timeseries";U5.defaults=$f.defaults;var Jc;(function(i){i.ChartRendered="chart:rendered",i.ChartUpdated="chart:updated",i.ChartDestroyed="chart:destroyed",i.LabelsUpdated="labels:updated"})(Jc||(Jc={}));function Mh(i,n,s,r){i(n,s),r!==void 0&&r.emit(Jc.ChartRendered)}function CH(i,n){i.update(),n!==void 0&&n.emit(Jc.ChartUpdated)}function Ih(i,n){i.destroy(),n!==void 0&&n.emit(Jc.ChartDestroyed)}function AH(i,n){const s={labels:typeof i.labels>"u"?[]:[...i.labels],datasets:[]};return W5(s,{...i},n),s}function W5(i,n,s){const r=[];i.datasets=n.datasets.map(c=>{const u=i.datasets.find(f=>f[s]===c[s]);return!u||!c.data||r.includes(u)?{...c}:(r.push(u),Object.assign(u,c),u)})}function xH(i,n,s){i.data.labels=n,s!==void 0&&s.emit(Jc.LabelsUpdated)}function EH(i,n){i.options={...n}}function SH(i,n){const s=i.datasets.map(c=>c.label),r=n.datasets.map(c=>c.label);return n.datasets.length===i.datasets.length&&s.every((c,u)=>c===r[u])}const TH="Please remove the <template></template> tags from your chart component. See https://vue-chartjs.org/guide/#vue-single-file-components",DH="Update ERROR: chart instance not found",q5=(i,n,s)=>ed({props:{chartData:{type:Object,required:!0},chartOptions:{type:Object,default:()=>{}},datasetIdKey:{type:String,default:"label"},chartId:{type:String,default:i},width:{type:Number,default:400},height:{type:Number,default:400},cssClasses:{type:String,default:""},styles:{type:Object,default:()=>{}},plugins:{type:Array,default:()=>[]}},setup(r,c){cu.register(s);const u=Ym(null),f=ue(null);function g(x,v){if(u.value!==null&&Ih(We(u.value),c),f.value===null)throw new Error(TH);{const M=AH(x,r.datasetIdKey),z=f.value.getContext("2d");z!==null&&(u.value=new cu(z,{type:n,data:zc(x)?new Proxy(M,{}):M,options:v,plugins:r.plugins}))}}function p(x,v){const M=zc(x)?We(x):{...x},z=zc(v)?We(v):{...v};if(Object.keys(z).length>0){const H=We(u.value);SH(M,z)&&H!==null?(W5(H==null?void 0:H.data,M,r.datasetIdKey),M.labels!==void 0&&xH(H,M.labels,c),C()):(H!==null&&Ih(H,c),Mh(g,r.chartData,r.chartOptions,c))}else u.value!==null&&Ih(We(u.value),c),Mh(g,r.chartData,r.chartOptions,c)}function k(x){const v=We(u.value);v!==null?(EH(v,x),C()):Mh(g,r.chartData,r.chartOptions,c)}function C(){const x=We(u.value);x!==null?CH(x,c):console.error(DH)}return Ls(()=>r.chartData,(x,v)=>p(x,v),{deep:!0}),Ls(()=>r.chartOptions,x=>k(x),{deep:!0}),Co(()=>{"datasets"in r.chartData&&r.chartData.datasets.length>0&&Mh(g,r.chartData,r.chartOptions,c)}),bu(()=>{u.value!==null&&Ih(We(u.value),c)}),c.expose({chart:u,updateChart:C}),()=>Wc("div",{style:r.styles,class:r.cssClasses},[Wc("canvas",{id:r.chartId,width:r.width,height:r.height,ref:f})])}}),MH=q5("bar-chart","bar",Nf),IH=q5("line-chart","line",Of),PH=E("div",{class:"bg-slate-50 p-5 rounded-xl flex justify-center items-center"},[E("h4",{class:"font-bold text-xl"},"TRANG QU\u1EA2N L\xDD WEBSITE CHILLYGAMING")],-1),BH={class:"md:grid-cols-5 grid-cols-3 gap-5 grid mt-10"},NH={class:"bg-slate-50 p-5 text-center rounded-xl"},OH=E("span",{class:"text-xl font-semibold"},"S\u1ED1 Game",-1),LH={class:"text-xl font-bold"},RH={class:"bg-slate-50 p-5 text-center rounded-xl"},zH=E("span",{class:"text-xl font-semibold"},"S\u1ED1 Th\u1EC3 Lo\u1EA1i",-1),jH={class:"text-xl font-bold"},FH={class:"bg-slate-50 p-5 text-center rounded-xl"},$H=E("span",{class:"text-xl font-semibold"},"S\u1ED1 Ng\u01B0\u1EDDi D\xF9ng",-1),VH={class:"text-xl font-bold"},HH={class:"bg-slate-50 p-5 text-center rounded-xl"},UH=E("span",{class:"text-xl font-semibold"},"S\u1ED1 B\xE1o C\xE1o",-1),WH={class:"text-xl font-bold"},qH={class:"bg-slate-50 p-5 text-center rounded-xl"},GH=E("span",{class:"text-xl font-semibold"},"S\u1ED1 B\xE0i Vi\u1EBFt",-1),YH={class:"text-xl font-bold"},KH={class:"grid grid-cols-1 md:grid-cols-2 gap-x-40 md:flex-row justify-between"},QH={key:0,class:"bg-slate-50 p-5 rounded-xl mt-10 text-center"},ZH=E("span",{class:"text-sm italic"},"Bi\u1EC3u \u0111\u1ED3 th\u1ED1ng k\xEA c\xE1c th\u1EC3 lo\u1EA1i game \u0111\u01B0\u1EE3c ch\u01A1i nhi\u1EC1u nh\u1EA5t",-1),JH={key:1,class:"bg-slate-50 p-5 rounded-xl mt-10 text-center"},XH=E("span",{class:"text-sm italic"},"Bi\u1EC3u \u0111\u1ED3 th\u1ED1ng k\xEA s\u1ED1 l\u01B0\u1EE3t ch\u01A1i game t\u1EA1i trang web trong c\xE1c th\xE1ng g\u1EA7n \u0111\xE2y",-1),tU={__name:"AdminDashboard",setup(i){cu.register(KV,iH,GV,Au,Rf,zf,of,Ub);const n=ue({numUser:"",numGame:"",numTheloai:"",numReport:"",numArticle:""});Zt.dispatch("getNumUser").then(c=>{n.value.numUser=c.data.num_user[0].num_user}),Zt.dispatch("getNumGame").then(c=>{n.value.numGame=c.data.num_game[0].num_game}),Zt.dispatch("getNumTheloai").then(c=>{n.value.numTheloai=c.data.num_theloai[0].num_theloai}),Zt.dispatch("getNumReport").then(c=>{n.value.numReport=c.data.num_report[0].num_report}),Zt.dispatch("getNumArticle").then(c=>{n.value.numArticle=c.data.count[0].count});let s=ue({labels:[],datasets:[{label:"S\u1ED1 l\u01B0\u1EE3t ch\u01A1i",backgroundColor:"#009900",data:[]}]}),r=ue({labels:[],datasets:[{label:"S\u1ED1 l\u01B0\u1EE3t ch\u01A1i",backgroundColor:"#009900",data:[]}]});return Zt.dispatch("getPopularTheloai").then(c=>{c.data.data.forEach(u=>{s.value.labels=s.value.labels.concat(u.tentheloai),s.value.datasets[0].data=s.value.datasets[0].data.concat(u.slc)})}),Zt.dispatch("calSumSlc").then(()=>{Zt.dispatch("getStatistic").then(c=>{c.data.data.forEach(u=>{r.value.labels=r.value.labels.concat(u.date),r.value.datasets[0].data=r.value.datasets[0].data.concat(u.tongsoluotchoi)}),r.value.labels=r.value.labels.reverse(),r.value.datasets[0].data=r.value.datasets[0].data.reverse()})}),document.title="Qu\u1EA3n l\xFD - Trang Ch\u1EE7",(c,u)=>(at(),ht("div",null,[PH,E("div",BH,[E("div",NH,[OH,E("div",LH,Qt(rt(n).numGame),1)]),E("div",RH,[zH,E("div",jH,Qt(rt(n).numTheloai),1)]),E("div",FH,[$H,E("div",VH,Qt(rt(n).numUser),1)]),E("div",HH,[UH,E("div",WH,Qt(rt(n).numReport),1)]),E("div",qH,[GH,E("div",YH,Qt(rt(n).numArticle),1)])]),E("div",KH,[rt(s).datasets[0].data?(at(),ht("div",QH,[He(rt(MH),{"chart-data":rt(s)},null,8,["chart-data"]),ZH])):ne("",!0),rt(r).datasets[0].data?(at(),ht("div",JH,[He(rt(IH),{"chart-data":rt(r)},null,8,["chart-data"]),XH])):ne("",!0)])]))}};const eU={class:"bg-slate-50 p-5 rounded-xl flex justify-between items-center"},nU=E("h4",{class:"font-bold text-xl"},"QU\u1EA2N L\xDD GAME",-1),iU=E("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[E("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),oU=E("span",{class:"mx-2"}," Th\xEAm Game M\u1EDBi ",-1),sU=[iU,oU],rU={class:"mt-5 bg-slate-50 p-5 rounded-xl"},aU=E("h4",{class:"text-center font-semibold text-lg"},"Danh s\xE1ch Game trong h\u1EC7 th\u1ED1ng",-1),lU={class:"flex justify-between"},cU=E("span",null,"Hi\u1EC3n th\u1ECB",-1),dU=["value"],uU=E("span",null,"S\u1EAFp x\u1EBFp theo",-1),hU=["value"],fU={class:"mt-8",style:{"min-height":"max-content"}},gU={key:0},pU={id:"tableGame",class:"table-fixed w-full border-collapse border-2"},mU=E("tr",{class:"border-2"},[E("th",{class:"border-2 w-1/12"},"ID Game"),E("th",{class:"border-2"},"T\xEAn Game"),E("th",{class:"border-2"},"H\xECnh \u1EA2nh"),E("th",{class:"border-2 w-1/3"},"Link Game"),E("th",{class:"border-2 w-1/12"},"S\u1ED1 L\u01B0\u1EE3t Ch\u01A1i"),E("th",{class:"border-2 w-1/12"},"Tr\u1EA1ng Th\xE1i"),E("th",{colspan:"2",class:"border-2 w-1/12"},"T\xF9y ch\u1ECDn")],-1),bU={class:"border-2"},kU={class:"border-2"},wU={class:"p-2 flex justify-center"},_U=["src"],vU={class:"border-2 overflow-hidden text-ellipsis"},yU={class:"border-2"},CU={key:0,class:"border-2"},AU={key:1,class:"border-2"},xU=["onClick"],EU=E("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"#CC9900",class:"w-6 h-6"},[E("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"})],-1),SU=[EU],TU=["onClick"],DU=E("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"#FF0000",class:"w-6 h-6"},[E("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1),MU=[DU],IU={key:0,class:"mt-10"},PU={class:"flex items-center justify-evenly"},BU=E("input",{class:"hidden",type:"radio",name:"check",id:"first"},null,-1),NU=E("label",{class:"text-2xl border-2 px-3 rounded-xl",for:"first"},"\xAB",-1),OU=[BU,NU],LU=["onClick"],RU=["id"],zU=["for"],jU=E("input",{class:"hidden",type:"radio",name:"check",id:"last"},null,-1),FU=E("label",{class:"text-2xl border-2 px-3 rounded-xl",for:"last"},"\xBB",-1),$U=[jU,FU],VU={__name:"AdminGames",setup(i){const n=ue([]),s=ue({}),r=_i();let c=ue(5),u=ue("id"),f=[{name:"5 D\xF2ng",value:5},{name:"10 D\xF2ng",value:10},{name:"15 D\xF2ng",value:15}],g=[{name:"ID",value:"id"},{name:"T\xEAn Game",value:"tengame"},{name:"S\u1ED1 L\u01B0\u1EE3t Ch\u01A1i",value:"soluotchoi"},{name:"Tr\u1EA1ng Th\xE1i",value:"trangthai"}];Co(()=>p());function p(){let x={row:c.value,sort:u.value};Zt.dispatch("getGamesPageSort",x).then(v=>{n.value=v.data.data,s.value={last_page:v.data.meta.last_page,path_page:v.data.meta.path+"?page=",first_link:v.data.links.first,last_link:v.data.links.last}})}function k(x){tl.get(x).then(v=>{n.value=v.data.data})}function C(x){Wn.fire({title:"B\u1EA1n ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a ch\u1EE9?",text:"B\u1EA1n kh\xF4ng th\u1EC3 ho\xE0n t\xE1c l\u1EA1i!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"C\xF3",cancelButtonText:"Kh\xF4ng"}).then(v=>{v.isConfirmed&&Zt.dispatch("delGame",x).then(()=>{Wn.fire("\u0110\xE3 x\xF3a!","Game \u0111\xE3 \u0111\u01B0\u1EE3c x\xF3a kh\u1ECFi h\u1EC7 th\u1ED1ng","success"),changeRow()})})}return document.title="Qu\u1EA3n l\xFD - Games",(x,v)=>(at(),ht("div",null,[E("div",eU,[nU,E("span",null,[E("button",{onClick:v[0]||(v[0]=M=>rt(r).push({name:"AddGame"})),class:"flex bg-green-500 text-white font-semibold px-3 py-2 rounded-lg"},sU)])]),E("div",rU,[aU,E("div",lU,[E("div",null,[cU,Le(E("select",{onClick:p,"onUpdate:modelValue":v[1]||(v[1]=M=>Dn(c)?c.value=M:c=M),class:"mx-2 py-0 rounded-md",name:"",id:""},[(at(!0),ht(ve,null,$e(rt(f),M=>(at(),ht("option",{key:M.value,value:M.value},Qt(M.name),9,dU))),128))],512),[[Ji,rt(c)]])]),E("div",null,[uU,Le(E("select",{onClick:p,"onUpdate:modelValue":v[2]||(v[2]=M=>Dn(u)?u.value=M:u=M),class:"mx-2 py-0 rounded-md",name:"",id:""},[(at(!0),ht(ve,null,$e(rt(g),M=>(at(),ht("option",{key:M.value,value:M.value},Qt(M.name),9,hU))),128))],512),[[Ji,rt(u)]])])]),E("div",fU,[rt(n)?(at(),ht("div",gU,[E("table",pU,[mU,(at(!0),ht(ve,null,$e(rt(n),M=>{var z;return at(),ht("tr",{class:"text-center border-2",key:M.id},[E("td",bU,Qt(M.id),1),E("td",kU,Qt(M.tengame),1),E("td",wU,[E("img",{class:"w-24",src:"http://localhost:8000/storage/images/games/"+M.thumb_image,alt:""},null,8,_U)]),E("td",vU,Qt(M.link_game),1),E("td",yU,Qt((z=M.soluotchoi)!=null?z:0),1),M.trangthai==1?(at(),ht("td",CU,"\u0110ang hi\u1EC3n th\u1ECB")):(at(),ht("td",AU,"\u0110\xE3 \u1EA9n")),E("td",null,[E("button",{onClick:H=>rt(r).push({name:"UpdateGame",params:{id:M.id}})},SU,8,xU)]),E("td",null,[E("button",{onClick:H=>C(M.id)},MU,8,TU)])])}),128))])])):ne("",!0)]),rt(s)?(at(),ht("div",IU,[E("ul",PU,[E("li",null,[E("button",{onClick:v[3]||(v[3]=M=>k(rt(s).first_link))},OU)]),(at(!0),ht(ve,null,$e(rt(s).last_page,M=>(at(),ht("li",{key:M},[E("button",{onClick:z=>k(rt(s).path_page+M)},[E("input",{class:"hidden",type:"radio",name:"check",id:M},null,8,RU),E("label",{class:"border-2 px-3 rounded-xl",for:M},Qt(M),9,zU)],8,LU)]))),128)),E("li",null,[E("button",{onClick:v[4]||(v[4]=M=>k(rt(s).last_link))},$U)])])])):ne("",!0)])]))}};var Lm={exports:{}};(function(i,n){(function(s){const r=s.en=s.en||{};r.dictionary=Object.assign(r.dictionary||{},{"%0 of %1":"%0 of %1",Aquamarine:"Aquamarine",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Break text":"Break text","Bulleted List":"Bulleted List",Cancel:"Cancel","Cannot upload file:":"Cannot upload file:","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Downloadable:"Downloadable","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Full size image":"Full size image",Green:"Green",Grey:"Grey","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Italic:"Italic","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link URL":"Link URL","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next","Numbered List":"Numbered List","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab",Orange:"Orange",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Rich Text Editor":"Rich Text Editor","Rich Text Editor, %0":"Rich Text Editor, %0","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically","Table toolbar":"Table toolbar","Text alternative":"Text alternative","The URL must not be empty.":"The URL must not be empty.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on",Turquoise:"Turquoise",Undo:"Undo",Unlink:"Unlink","Upload failed":"Upload failed","Upload in progress":"Upload in progress",White:"White","Widget toolbar":"Widget toolbar","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(s,r){i.exports=r()}(self,()=>(()=>{var s={636:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const M=v},390:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-clipboard/theme/clipboard.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CCzBF,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CA2DF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border)
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(var(--ck-clipboard-drop-target-dot-height) * -.5);

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	// Horizontal drop target (between blocks).
	& .ck.ck-clipboard-drop-target-position {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		margin: 0;
		text-align: initial;

		& .ck-clipboard-drop-target__line {
			position: absolute;
			width: 100%;
			height: 0;
			border: 1px solid var(--ck-clipboard-drop-target-color);
			margin-top: -1px;

			&::before {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
				border-width: var(--ck-clipboard-drop-target-dot-size) 0 var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size));
				border-style: solid;
			}

			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				right: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
				border-width: var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size)) var(--ck-clipboard-drop-target-dot-size) 0;
				border-style: solid;
			}
		}
	}
	*/

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}
`],sourceRoot:""}]);const M=v},3638:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-editor-classic/theme/classiceditor.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,gDCED,eDKC,CAPA,uICMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAIF,CAPA,gDAMC,qBACD,CAEA,iFACC,uBAAwB,CCR1B,eDaC,CANA,yMCHA,qCAAsC,CDOpC,eAEF,CAKF,yCAEC,0CAA2C,CCpB3C,eD8BD,CAZA,yHCdE,qCAAsC,CDmBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-modal);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-toolbar {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border-bottom-width: 0;
		}

		& .ck-sticky-panel__content_sticky .ck-toolbar {
			border-bottom-width: 1px;

			@mixin ck-rounded-corners {
				border-radius: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=v},8894:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-engine/theme/placeholder.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const M=v},4401:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const M=v},3230:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-heading/theme/heading.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const M=v},9048:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image-inline.ck-widget_selected,.ck.ck-editor__editable .image.ck-widget_selected{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBAuBD,CAbC,uBAEC,aAAc,CAGd,aAAc,CAGd,cAAe,CAGf,cACD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAWA,2GACC,SAUD,CAHC,qEACC,YACD,CAOA,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}


	/*
	 * Make sure the selected inline image always stays on top of its siblings.
	 * See https://github.com/ckeditor/ckeditor5/issues/9108.
	 */
	& .image.ck-widget_selected {
		z-index: 1;
	}

	& .image-inline.ck-widget_selected {
		z-index: 1;

		/*
		 * Make sure the native browser selection style is not displayed.
		 * Inline image widgets have their own styles for the selected state and
		 * leaving this up to the browser is asking for a visual collision.
		 */
		& ::selection {
			display: none;
		}
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const M=v},8662:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highligted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highligted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const M=v},4622:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const M=v},9899:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageuploadicon.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const M=v},9825:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageuploadloader.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const M=v},5870:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageuploadprogress.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const M=v},6831:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/textalternativeform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=v},399:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const M=v},9465:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-link/theme/linkactions.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCKA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDvDD,oCC2DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CD1ED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const M=v},4827:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical .ck-button{border:0;border-radius:0;border-top:1px solid var(--ck-color-base-border);margin:0;padding:var(--ck-spacing-standard);width:50%}[dir=ltr] .ck.ck-link-form_layout-vertical .ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{border:0;padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-link/theme/linkform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SA+CD,CA5CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,QAAS,CADT,eAAgB,CAEhB,gDAAiD,CAHjD,QAAS,CADT,kCAAmC,CAKnC,SAaD,CAnBA,4GAaE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAWD,CATC,wEACC,QAAS,CACT,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		border-radius: 0;
		border: 0;
		border-top: 1px solid var(--ck-color-base-border);
		width: 50%;

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			border: 0;
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const M=v},5777:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const M=v},952:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:block}@media (hover:none){.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:none}}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url:hover .ck-tooltip{opacity:1;visibility:visible}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAQC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAoBD,CCpBA,kFACC,aAqBD,CAHC,oBAnBD,kFAoBE,YAEF,CADC,CDlBA,sEAIC,cAAe,CAEf,iBAUD,CCoBD,wFAEC,SAAU,CADV,kBAED,CD3BE,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CElDA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css";

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			@mixin ck-tooltip_enabled;

			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			&:hover {
				@mixin ck-tooltip_visible;
			}

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read\u2013only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Enables the tooltip, which is the tooltip is in DOM but
 * not yet displayed.
 */
@define-mixin ck-tooltip_enabled {
	& .ck-tooltip {
		display: block;

		/*
		 * Don't display tooltips in devices which don't support :hover.
		 * In fact, it's all about iOS, which forces user to click UI elements twice to execute
		 * the primary action, when tooltips are enabled.
		 *
		 * Q: OK, but why not the following query?
		 *
		 *   @media (hover) {
		 *       display: block;
		 *   }
		 *
		 * A: Because FF does not support it and it would completely disable tooltips
		 * in that browser.
		 *
		 * More in https://github.com/ckeditor/ckeditor5/issues/920.
		 */
		@media (hover:none) {
			display: none;
		}
	}
}

/**
 * Disables the tooltip making it disappear from DOM.
 */
@define-mixin ck-tooltip_disabled {
	& .ck-tooltip {
		display: none;
	}
}

/**
 * Shows the tooltip, which is already in DOM.
 * Requires \`ck-tooltip_enabled\` first.
 */
@define-mixin ck-tooltip_visible {
	& .ck-tooltip {
		visibility: visible;
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const M=v},3525:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-media-embed/theme/mediaform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=v},8085:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;height:var(--ck-insert-table-dropdown-box-height);margin:var(--ck-insert-table-dropdown-box-margin);width:var(--ck-insert-table-dropdown-box-width)}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-table/theme/inserttable.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,qCACC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAHlB,iDAAkD,CAClD,iDAAkD,CAFlD,+CAUD,CAJC,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	width: var(--ck-insert-table-dropdown-box-width);
	height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const M=v},4104:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const M=v},4777:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,":root{--ck-color-table-focused-cell-background:rgba(158,207,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,6DACD,CAKE,8QAGC,wDAAyD,CAKzD,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-focused-cell-background: hsla(208, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-table-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const M=v},5593:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const M=v},4499:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,".ck.ck-button,a.ck.ck-button{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:block}@media (hover:none){.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:none}}.ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button:hover .ck-tooltip,a.ck.ck-button:hover .ck-tooltip{opacity:1;visibility:visible}.ck.ck-button:focus:not(:hover) .ck-tooltip,a.ck.ck-button:focus:not(:hover) .ck-tooltip{display:none}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-default-active-shadow)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-on-active-shadow)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-action-active-shadow)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/button/button.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAQA,6BCCC,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6BD,CE/BC,qDACC,aAqBD,CAHC,oBAnBD,qDAoBE,YAEF,CADC,CFvBF,6BAOC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBA4BD,CAvBC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEkBA,iEAEC,SAAU,CADV,kBAED,CAbA,yFACC,YACD,CC7BD,6BCAC,oDD0ID,CCvIE,6EACC,0DACD,CAEA,+EACC,2DAA4C,CAC5C,uEACD,CAID,qDACC,6DACD,CDhBD,6BEDC,eF2ID,CA1IA,wIEGE,qCFuIF,CA1IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAqID,CA3GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDiIA,CC9HC,yFACC,qDACD,CAEA,2FACC,sDAA4C,CAC5C,kEACD,CAID,iEACC,wDACD,CDmHA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC7IC,mDDkJD,CC/IE,2FACC,yDACD,CAEA,6FACC,0DAA4C,CAC5C,sEACD,CAID,mEACC,4DACD,CD6HD,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";
@import "../tooltip/mixins/_tooltip.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;
	@mixin ck-tooltip_enabled;

	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: left;

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}

	&:hover {
		@mixin ck-tooltip_visible;
	}

	/* Get rid of the native focus outline around the tooltip when focused (but not :hover). */
	&:focus:not(:hover) {
		@mixin ck-tooltip_disabled;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Enables the tooltip, which is the tooltip is in DOM but
 * not yet displayed.
 */
@define-mixin ck-tooltip_enabled {
	& .ck-tooltip {
		display: block;

		/*
		 * Don't display tooltips in devices which don't support :hover.
		 * In fact, it's all about iOS, which forces user to click UI elements twice to execute
		 * the primary action, when tooltips are enabled.
		 *
		 * Q: OK, but why not the following query?
		 *
		 *   @media (hover) {
		 *       display: block;
		 *   }
		 *
		 * A: Because FF does not support it and it would completely disable tooltips
		 * in that browser.
		 *
		 * More in https://github.com/ckeditor/ckeditor5/issues/920.
		 */
		@media (hover:none) {
			display: none;
		}
	}
}

/**
 * Disables the tooltip making it disappear from DOM.
 */
@define-mixin ck-tooltip_disabled {
	& .ck-tooltip {
		display: none;
	}
}

/**
 * Shows the tooltip, which is already in DOM.
 * Requires \`ck-tooltip_enabled\` first.
 */
@define-mixin ck-tooltip_visible {
	& .ck-tooltip {
		visibility: visible;
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
			box-shadow: inset 0 2px 2px var($(prefix)-active-shadow);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const M=v},9681:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:1.0769230769em;--ck-switch-button-toggle-spacing:1px;--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - var(--ck-switch-button-toggle-spacing)*2)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);transition:background .4s ease;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);margin:var(--ck-switch-button-toggle-spacing);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,mDAAoD,CACpD,qCAAsC,CACtC,gKAKD,CAGC,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDC3BA,eDoEA,CAzCA,yICvBC,qCDgED,CAzCA,2DAKE,gBAoCF,CAzCA,2DAUE,iBA+BF,CAzCA,iDAiBC,uDAAwD,CAHxD,8BAAiC,CAEjC,0CAyBD,CAtBC,2EC9CD,eD2DC,CAbA,6LC1CA,qCAAsC,CD4CpC,8CAWF,CAbA,2EASC,yDAA0D,CAD1D,gDAAiD,CAFjD,6CAA8C,CAM9C,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,+DACD,CAIF,6DExEA,kCF0EA,CAEA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating\u2013point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: 1.0769230769em;
	--ck-switch-button-toggle-spacing: 1px;
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2 * var(--ck-switch-button-toggle-spacing)
	);
}

.ck.ck-button.ck-switchbutton {
	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease;

		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			/* Leave some tiny bit of space around the inner part of the switch */
			margin: var(--ck-switch-button-toggle-spacing);
			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	&.ck-on .ck-button__toggle {
		background: var(--ck-color-switch-button-on-background);

		&:hover {
			background: var(--ck-color-switch-button-on-hover-background);
		}

		& .ck-button__toggle__inner {
			/*
			 * Move the toggle switch to the right. It will be animated.
			 */
			@mixin ck-dir ltr {
				transform: translateX( var( --ck-switch-button-translation ) );
			}

			@mixin ck-dir rtl {
				transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const M=v},4923:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#000}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,qCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,4DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(0, 0%, 0%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-table__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const M=v},3488:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on .ck-tooltip{display:none}.ck.ck-dropdown .ck-dropdown__panel{-webkit-backface-visibility:hidden;display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBAqFD,CAnFC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UAOD,CCUA,iEACC,YACD,CDVA,oCAGC,kCAAmC,CAEnC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CEhGA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eH8GD,CA5BA,qFG9EE,qCH0GF,CA5BA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAmBD,CAfC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../tooltip/mixins/_tooltip.css";

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;

		/* Disable main button's tooltip when the dropdown is open. Otherwise the panel may
		partially cover the tooltip */
		&.ck-on {
			@mixin ck-tooltip_disabled;
		}
	}

	& .ck-dropdown__panel {
		/* This is to get rid of flickering when the tooltip is shown under the panel,
		which looks like the panel moves vertically a pixel down and up. */
		-webkit-backface-visibility: hidden;

		display: none;
		z-index: var(--ck-z-modal);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-modal) + 1 );
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Enables the tooltip, which is the tooltip is in DOM but
 * not yet displayed.
 */
@define-mixin ck-tooltip_enabled {
	& .ck-tooltip {
		display: block;

		/*
		 * Don't display tooltips in devices which don't support :hover.
		 * In fact, it's all about iOS, which forces user to click UI elements twice to execute
		 * the primary action, when tooltips are enabled.
		 *
		 * Q: OK, but why not the following query?
		 *
		 *   @media (hover) {
		 *       display: block;
		 *   }
		 *
		 * A: Because FF does not support it and it would completely disable tooltips
		 * in that browser.
		 *
		 * More in https://github.com/ckeditor/ckeditor5/issues/920.
		 */
		@media (hover:none) {
			display: none;
		}
	}
}

/**
 * Disables the tooltip making it disappear from DOM.
 */
@define-mixin ck-tooltip_disabled {
	& .ck-tooltip {
		display: none;
	}
}

/**
 * Shows the tooltip, which is already in DOM.
 * Requires \`ck-tooltip_enabled\` first.
 */
@define-mixin ck-tooltip_visible {
	& .ck-tooltip {
		visibility: visible;
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;
			
			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=v},6875:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=v},66:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button .ck-tooltip{display:none}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,mBAEC,iBAUD,CARC,iDACC,qCACD,CC0BA,8DACC,YACD,CClCD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CASA,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCC7EA,eDuFA,CAVA,qHCzEC,qCDmFD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../tooltip/mixins/_tooltip.css";

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}

	/* Disable tooltips for the buttons when the button is "open" */
	&.ck-splitbutton_open > .ck-button {
		@mixin ck-tooltip_disabled;
	}
}

`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Enables the tooltip, which is the tooltip is in DOM but
 * not yet displayed.
 */
@define-mixin ck-tooltip_enabled {
	& .ck-tooltip {
		display: block;

		/*
		 * Don't display tooltips in devices which don't support :hover.
		 * In fact, it's all about iOS, which forces user to click UI elements twice to execute
		 * the primary action, when tooltips are enabled.
		 *
		 * Q: OK, but why not the following query?
		 *
		 *   @media (hover) {
		 *       display: block;
		 *   }
		 *
		 * A: Because FF does not support it and it would completely disable tooltips
		 * in that browser.
		 *
		 * More in https://github.com/ckeditor/ckeditor5/issues/920.
		 */
		@media (hover:none) {
			display: none;
		}
	}
}

/**
 * Disables the tooltip making it disappear from DOM.
 */
@define-mixin ck-tooltip_disabled {
	& .ck-tooltip {
		display: none;
	}
}

/**
 * Shows the tooltip, which is already in DOM.
 * Requires \`ck-tooltip_enabled\` first.
 */
@define-mixin ck-tooltip_visible {
	& .ck-tooltip {
		visibility: visible;
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=v},5075:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const M=v},4547:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,mDACD,CAIA,gEACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-base-foreground);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-base-foreground);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const M=v},5523:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BACD,CCNA,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-form-header-height: 38px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& .ck-form__header__label {
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const M=v},1174:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{color:inherit;cursor:inherit}.ck.ck-icon :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/icon/icon.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAY1B,qBAcD,CAZC,0BARA,aAAc,CAGd,cAgBA,CAJC,yBAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	color: inherit;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;

		/* Allows dynamic coloring of the icons. */
		color: inherit;

		&:not([fill]) {
			/* Needed by FF. */
			fill: currentColor;
		}
	}
}
`],sourceRoot:""}]);const M=v},6985:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const M=v},2751:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/label/label.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const M=v},8111:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-spacing-medium),calc(var(--ck-font-size-base)*.6)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-spacing-medium)*-1),calc(var(--ck-font-size-base)*.6)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,yEACD,CAEA,0BCHC,eD4GD,CAzGA,2FCCE,qCDwGF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,wFAYF,CAfA,oUAOE,iGAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
			}

			@mixin ck-dir rtl {
				right: 0px;
			}

			pointer-events: none;
			transform-origin: 0 0;

			/* By default, display the label scaled down above the field. */
			transform: translate(var(--ck-spacing-medium), -6px) scale(.75);

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-spacing-medium), calc(0.6 * var(--ck-font-size-base))) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-spacing-medium)), calc(0.6 * var(--ck-font-size-base))) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=v},1162:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/list/list.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,2DACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		text-align: left;
		border-radius: 0;

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding:
			calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
			calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=v},8245:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow))}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCJC,eD4ID,CAxIA,iFCAE,qCDwIF,CAxIA,qBAMC,2CAA4C,CAC5C,6CAA8C,CEb9C,oCAA8B,CFU9B,eAoID,CA9HE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EACD,CAEA,2CACC,iFAAkF,CAClF,yCACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDACD,CAEA,2CACC,iFAAkF,CAClF,4CACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-modal);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: var(--ck-balloon-arrow-offset);
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: var(--ck-balloon-arrow-offset);
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const M=v},1757:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const M=v},3553:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-modal) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const M=v},3609:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-modal); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const M=v},1590:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,'.ck-vertical-form .ck-button:after{bottom:var(--ck-spacing-small);content:"";position:absolute;right:-1px;top:var(--ck-spacing-small);width:0;z-index:1}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:var(--ck-spacing-small);content:"";position:absolute;right:-1px;top:var(--ck-spacing-small);width:0;z-index:1}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border:0;border-radius:0;border-top:1px solid var(--ck-color-base-border);margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after,[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAOA,mCAMC,8BAA+B,CAL/B,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,2BAA4B,CAH5B,OAAQ,CAKR,SACD,CCTC,oCDaC,wCAMC,8BAA+B,CAL/B,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,2BAA4B,CAH5B,OAAQ,CAKR,SACD,CCnBD,CCAD,qDACC,kDACD,CAEA,uBACC,+BAkED,CAhEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA6CF,CA3CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAID,iGAMC,QAAS,CADT,eAAgB,CAEhB,gDAAiD,CAJjD,kCAAmC,CADnC,kCAkBD,CApBA,0OAcE,aAMF,CAGC,yMACC,kDACD,CDpEF",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button::after {
	content: "";
	width: 0;
	position: absolute;
	right: -1px;
	top: var(--ck-spacing-small);
	bottom: var(--ck-spacing-small);
	z-index: 1;
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button::after {
			content: "";
			width: 0;
			position: absolute;
			right: -1px;
			top: var(--ck-spacing-small);
			bottom: var(--ck-spacing-small);
			z-index: 1;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);

			border-radius: 0;
			border: 0;
			border-top: 1px solid var(--ck-color-base-border);

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}

		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}
}
`],sourceRoot:""}]);const M=v},6706:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const M=v},5571:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border:0;border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eD0FD,CA7FA,qECOE,qCDsFF,CA7FA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAyFD,CAtFC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAgBD,CAbC,0DAWC,QAAS,CAHT,eAAgB,CAHhB,QAAS,CAHT,UAUD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAvFF,qCA2FE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;

			/* Items in a vertical toolbar span the entire width so any border is pointless. */
			border: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=v},9948:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,'.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{-webkit-backface-visibility:hidden;pointer-events:none;position:absolute}.ck.ck-tooltip{display:none;opacity:0;visibility:hidden;z-index:var(--ck-z-modal)}.ck.ck-tooltip .ck-tooltip__text{display:inline-block}.ck.ck-tooltip .ck-tooltip__text:after{content:"";height:0;width:0}:root{--ck-tooltip-arrow-size:5px}.ck.ck-tooltip{left:50%;top:0;transition:opacity .2s ease-in-out .2s}.ck.ck-tooltip .ck-tooltip__text{border-radius:0}.ck-rounded-corners .ck.ck-tooltip .ck-tooltip__text,.ck.ck-tooltip .ck-tooltip__text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-tooltip .ck-tooltip__text{background:var(--ck-color-tooltip-background);color:var(--ck-color-tooltip-text);font-size:.9em;left:-50%;line-height:1.5;padding:var(--ck-spacing-small) var(--ck-spacing-medium);position:relative}.ck.ck-tooltip .ck-tooltip__text:after{border-style:solid;left:50%;transition:opacity .2s ease-in-out .2s}.ck.ck-tooltip.ck-tooltip_s,.ck.ck-tooltip.ck-tooltip_se,.ck.ck-tooltip.ck-tooltip_sw{bottom:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateY(100%)}.ck.ck-tooltip.ck-tooltip_s .ck-tooltip__text:after,.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text:after,.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text:after{border-color:transparent transparent var(--ck-color-tooltip-background) transparent;border-width:0 var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size);top:calc(var(--ck-tooltip-arrow-size)*-1 + 1px);transform:translateX(-50%)}.ck.ck-tooltip.ck-tooltip_sw{left:auto;right:50%}.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text{left:auto;right:calc(var(--ck-tooltip-arrow-size)*-2)}.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text:after{left:auto;right:0}.ck.ck-tooltip.ck-tooltip_se{left:50%;right:auto}.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text{left:calc(var(--ck-tooltip-arrow-size)*-2);right:auto}.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text:after{left:0;right:auto;transform:translateX(50%)}.ck.ck-tooltip.ck-tooltip_n{top:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateY(-100%)}.ck.ck-tooltip.ck-tooltip_n .ck-tooltip__text:after{border-color:var(--ck-color-tooltip-background) transparent transparent transparent;border-width:var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0 var(--ck-tooltip-arrow-size);bottom:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateX(-50%)}.ck.ck-tooltip.ck-tooltip_e{left:calc(100% + var(--ck-tooltip-arrow-size));top:50%}.ck.ck-tooltip.ck-tooltip_e .ck-tooltip__text{left:0;transform:translateY(-50%)}.ck.ck-tooltip.ck-tooltip_e .ck-tooltip__text:after{border-color:transparent var(--ck-color-tooltip-background) transparent transparent;border-width:var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0;left:calc(var(--ck-tooltip-arrow-size)*-1);top:calc(50% - var(--ck-tooltip-arrow-size)*1)}.ck.ck-tooltip.ck-tooltip_w{left:auto;right:calc(100% + var(--ck-tooltip-arrow-size));top:50%}.ck.ck-tooltip.ck-tooltip_w .ck-tooltip__text{left:0;transform:translateY(-50%)}.ck.ck-tooltip.ck-tooltip_w .ck-tooltip__text:after{border-color:transparent transparent transparent var(--ck-color-tooltip-background);border-width:var(--ck-tooltip-arrow-size) 0 var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size);left:100%;top:calc(50% - var(--ck-tooltip-arrow-size)*1)}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,sDASC,kCAAmC,CAJnC,mBAAoB,CAHpB,iBAQD,CAEA,eAIC,YAAa,CADb,SAAU,CADV,iBAAkB,CAGlB,yBAWD,CATC,iCACC,oBAOD,CALC,uCACC,UAAW,CAEX,QAAS,CADT,OAED,CCxBF,MACC,2BACD,CAEA,eACC,QAAS,CAMT,KAAM,CAON,sCAwKD,CAtKC,iCChBA,eDqCA,CArBA,yGCZC,qCDiCD,CArBA,iCAOC,6CAA8C,CAF9C,kCAAmC,CAFnC,cAAe,CAMf,SAAU,CALV,eAAgB,CAEhB,wDAAyD,CAEzD,iBAaD,CAVC,uCAOC,kBAAmB,CACnB,QAAS,CAFT,sCAGD,CAYD,sFAGC,4CAA+C,CAC/C,0BASD,CAPC,8JAIC,mFAAoF,CACpF,qGAAsG,CAHtG,+CAAkD,CAClD,0BAGD,CAaD,6BAEC,SAAU,CADV,SAYD,CATC,+CACC,SAAU,CACV,2CACD,CAEA,qDACC,SAAU,CACV,OACD,CAYD,6BACC,QAAS,CACT,UAYD,CAVC,+CAEC,0CAA8C,CAD9C,UAED,CAEA,qDAEC,MAAO,CADP,UAAW,CAEX,yBACD,CAYD,4BACC,yCAA4C,CAC5C,2BAQD,CANC,oDAGC,mFAAoF,CACpF,qGAAsG,CAHtG,4CAA+C,CAC/C,0BAGD,CAUD,4BACC,8CAA+C,CAC/C,OAaD,CAXC,8CACC,MAAO,CACP,0BAQD,CANC,oDAGC,mFAAoF,CACpF,qGAAsG,CAHtG,0CAA6C,CAC7C,8CAGD,CAWF,4BAEC,SAAU,CADV,+CAAgD,CAEhD,OAaD,CAXC,8CACC,MAAO,CACP,0BAQD,CANC,oDAGC,mFAAoF,CACpF,qGAAsG,CAHtG,SAAU,CACV,8CAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-tooltip,
.ck.ck-tooltip .ck-tooltip__text::after {
	position: absolute;

	/* Without this, hovering the tooltip could keep it visible. */
	pointer-events: none;

	/* This is to get rid of flickering when transitioning opacity in Chrome.
	It's weird but it works. */
	-webkit-backface-visibility: hidden;
}

.ck.ck-tooltip {
	/* Tooltip is hidden by default. */
	visibility: hidden;
	opacity: 0;
	display: none;
	z-index: var(--ck-z-modal);

	& .ck-tooltip__text {
		display: inline-block;

		&::after {
			content: "";
			width: 0;
			height: 0;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-tooltip-arrow-size: 5px;
}

.ck.ck-tooltip {
	left: 50%;

	/*
	 * Prevent blurry tooltips in LoDPI environments.
	 * See https://github.com/ckeditor/ckeditor5/issues/1802.
	 */
	top: 0;

	/*
	 * For the transition to work, the tooltip must be controlled
	 * using visibility+opacity. A delay prevents a "tooltip avalanche"
	 * i.e. when scanning the toolbar with mouse cursor.
	 */
	transition: opacity .2s ease-in-out .2s;

	& .ck-tooltip__text {
		@mixin ck-rounded-corners;

		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
		padding: var(--ck-spacing-small) var(--ck-spacing-medium);
		background: var(--ck-color-tooltip-background);
		position: relative;
		left: -50%;

		&::after {
			/*
			 * For the transition to work, the tooltip must be controlled
			 * using visibility+opacity. A delay prevents a "tooltip avalanche"
			 * i.e. when scanning the toolbar with mouse cursor.
			 */
			transition: opacity .2s ease-in-out .2s;
			border-style: solid;
			left: 50%;
		}
	}

	/**
	 * A class that displays the tooltip south of the element.
	 *
	 *       [element]
	 *           ^
	 *     +-----------+
	 *     |  Tooltip  |
	 *     +-----------+
	 */
	&.ck-tooltip_s,
	&.ck-tooltip_sw,
	&.ck-tooltip_se {
		bottom: calc(-1 * var(--ck-tooltip-arrow-size));
		transform: translateY( 100% );

		& .ck-tooltip__text::after {
			/* 1px addresses gliches in rendering causing gap between the triangle and the text */
			top: calc(-1 * var(--ck-tooltip-arrow-size) + 1px);
			transform: translateX( -50% );
			border-color: transparent transparent var(--ck-color-tooltip-background) transparent;
			border-width: 0 var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size);
		}
	}

	/**
	 * A class that displays the tooltip south-west of the element.
	 *
	 *        [element]
	 *            ^
	 *  +-----------+
	 *  |  Tooltip  |
	 *  +-----------+
	 */

	&.ck-tooltip_sw {
		right: 50%;
		left: auto;

		& .ck-tooltip__text {
			left: auto;
			right: calc( -2 * var(--ck-tooltip-arrow-size));
		}

		& .ck-tooltip__text::after {
			left: auto;
			right: 0;
		}
	}

	/**
	 * A class that displays the tooltip south-east of the element.
	 *
	 *  [element]
	 *      ^
	 *    +-----------+
	 *    |  Tooltip  |
	 *    +-----------+
	 */
	&.ck-tooltip_se {
		left: 50%;
		right: auto;

		& .ck-tooltip__text {
			right: auto;
			left: calc( -2 * var(--ck-tooltip-arrow-size));
		}

		& .ck-tooltip__text::after {
			right: auto;
			left: 0;
			transform: translateX( 50% );
		}
	}

	/**
	 * A class that displays the tooltip north of the element.
	 *
	 *     +-----------+
	 *     |  Tooltip  |
	 *     +-----------+
	 *           V
	 *       [element]
	 */
	&.ck-tooltip_n {
		top: calc(-1 * var(--ck-tooltip-arrow-size));
		transform: translateY( -100% );

		& .ck-tooltip__text::after {
			bottom: calc(-1 * var(--ck-tooltip-arrow-size));
			transform: translateX( -50% );
			border-color: var(--ck-color-tooltip-background) transparent transparent transparent;
			border-width: var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0 var(--ck-tooltip-arrow-size);
		}
	}

	/**
	 * A class that displays the tooltip east of the element.
	 *
	 *                +----------+
	 *    [element] < |   east   |
	 *                +----------+
	 */
	&.ck-tooltip_e {
		left: calc(100% + var(--ck-tooltip-arrow-size));
		top: 50%;

		& .ck-tooltip__text {
			left: 0;
			transform: translateY( -50% );

			&::after {
				left: calc(-1 * var(--ck-tooltip-arrow-size));
				top: calc(50% - 1 * var(--ck-tooltip-arrow-size));
				border-color: transparent var(--ck-color-tooltip-background) transparent transparent;
				border-width: var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0;
			}
		}
	}

	/**
	 * A class that displays the tooltip west of the element.
	 *
	 *    +----------+
	 *    |   west   | > [element]
	 *    +----------+
	 */
	&.ck-tooltip_w {
		right: calc(100% + var(--ck-tooltip-arrow-size));
		left: auto;
		top: 50%;

		& .ck-tooltip__text {
			left: 0;
			transform: translateY( -50% );

			&::after {
				left: 100%;
				top: calc(50% - 1 * var(--ck-tooltip-arrow-size));
				border-color: transparent transparent transparent var(--ck-color-tooltip-background);
				border-width: var(--ck-tooltip-arrow-size) 0 var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=v},6150:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#c4c4c4;--ck-color-base-action:#61b045;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#198cf0;--ck-color-base-active-focus:#0e7fe1;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:208,79%,51%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#bcdefb;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#e6e6e6;--ck-color-button-default-active-background:#d9d9d9;--ck-color-button-default-active-shadow:#bfbfbf;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#dedede;--ck-color-button-on-hover-background:#c4c4c4;--ck-color-button-on-active-background:#bababa;--ck-color-button-on-active-shadow:#a1a1a1;--ck-color-button-on-disabled-background:#dedede;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#579e3d;--ck-color-button-action-active-background:#53973b;--ck-color-button-action-active-shadow:#498433;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#b0b0b0;--ck-color-switch-button-off-hover-background:#a3a3a3;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#579e3d;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:#c7c7c7;--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:#c7c7c7;--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-base-active);--ck-color-list-button-on-background-focus:var(--ck-color-base-active-focus);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-foreground);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_hidden.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_reset.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_zindex.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_transition.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAgD,CAChD,8BAAmD,CACnD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAmD,CACnD,oCAAuD,CACvD,6BAAkD,CAIlD,+CAAwD,CACxD,qEAA+E,CAC/E,qCAAwD,CACxD,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAA+D,CAC/D,mDAAgE,CAChE,+CAA6D,CAC7D,yDAA8D,CAE9D,uCAAuD,CACvD,6CAA4D,CAC5D,8CAA4D,CAC5D,0CAAyD,CACzD,gDAA8D,CAE9D,+DAAsE,CACtE,iDAAkE,CAClE,kDAAkE,CAClE,8CAA+D,CAC/D,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA4D,CAC5D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAmE,CACnE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,+BAAiD,CACjD,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,wCAAwD,CACxD,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,gEAAuE,CACvE,4EAAiF,CACjF,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CCpGhE,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJoGD,CI9FA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-modal: calc( var(--ck-z-default) + 999 );
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(0, 0%, 77%);
	--ck-color-base-action: 									hsl(104, 44%, 48%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(208, 88%, 52%);
	--ck-color-base-active-focus:								hsl(208, 88%, 47%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						208, 79%, 51%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(207, 89%, 86%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 90%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 85%);
	--ck-color-button-default-active-shadow: 					hsl(0, 0%, 75%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(0, 0%, 87%);
	--ck-color-button-on-hover-background: 						hsl(0, 0%, 77%);
	--ck-color-button-on-active-background: 					hsl(0, 0%, 73%);
	--ck-color-button-on-active-shadow: 						hsl(0, 0%, 63%);
	--ck-color-button-on-disabled-background: 					hsl(0, 0%, 87%);

	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 44%, 43%);
	--ck-color-button-action-active-background: 				hsl(104, 44%, 41%);
	--ck-color-button-action-active-shadow: 					hsl(104, 44%, 36%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 69%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 64%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 44%, 43%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									hsl(0, 0%, 78%);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							hsl(0, 0%, 78%);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-base-active);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-base-active-focus);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-foreground);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const M=v},6507:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-widget/theme/widget.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const M=v},2263:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-widget/theme/widgetresize.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const M=v},5137:(f,g,p)=>{p.d(g,{Z:()=>M});var k=p(4015),C=p.n(k),x=p(3645),v=p.n(x)()(C());v.push([f.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-widget/theme/widgettypearound.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const M=v},3645:f=>{f.exports=function(g){var p=[];return p.toString=function(){return this.map(function(k){var C=g(k);return k[2]?"@media ".concat(k[2]," {").concat(C,"}"):C}).join("")},p.i=function(k,C,x){typeof k=="string"&&(k=[[null,k,""]]);var v={};if(x)for(var M=0;M<this.length;M++){var z=this[M][0];z!=null&&(v[z]=!0)}for(var H=0;H<k.length;H++){var Z=[].concat(k[H]);x&&v[Z[0]]||(C&&(Z[2]?Z[2]="".concat(C," and ").concat(Z[2]):Z[2]=C),p.push(Z))}},p}},4015:f=>{function g(k,C){return function(x){if(Array.isArray(x))return x}(k)||function(x,v){var M=x&&(typeof Symbol<"u"&&x[Symbol.iterator]||x["@@iterator"]);if(M!=null){var z,H,Z=[],U=!0,W=!1;try{for(M=M.call(x);!(U=(z=M.next()).done)&&(Z.push(z.value),!v||Z.length!==v);U=!0);}catch(tt){W=!0,H=tt}finally{try{U||M.return==null||M.return()}finally{if(W)throw H}}return Z}}(k,C)||function(x,v){if(!!x){if(typeof x=="string")return p(x,v);var M=Object.prototype.toString.call(x).slice(8,-1);if(M==="Object"&&x.constructor&&(M=x.constructor.name),M==="Map"||M==="Set")return Array.from(x);if(M==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M))return p(x,v)}}(k,C)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function p(k,C){(C==null||C>k.length)&&(C=k.length);for(var x=0,v=new Array(C);x<C;x++)v[x]=k[x];return v}f.exports=function(k){var C=g(k,4),x=C[1],v=C[3];if(!v)return x;if(typeof btoa=="function"){var M=btoa(unescape(encodeURIComponent(JSON.stringify(v)))),z="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(M),H="/*# ".concat(z," */"),Z=v.sources.map(function(U){return"/*# sourceURL=".concat(v.sourceRoot||"").concat(U," */")});return[x].concat(Z).concat([H]).join(`
`)}return[x].join(`
`)}},3379:(f,g,p)=>{var k,C=function(){return k===void 0&&(k=Boolean(window&&document&&document.all&&!window.atob)),k},x=function(){var mt={};return function(pt){if(mt[pt]===void 0){var _t=document.querySelector(pt);if(window.HTMLIFrameElement&&_t instanceof window.HTMLIFrameElement)try{_t=_t.contentDocument.head}catch{_t=null}mt[pt]=_t}return mt[pt]}}(),v=[];function M(mt){for(var pt=-1,_t=0;_t<v.length;_t++)if(v[_t].identifier===mt){pt=_t;break}return pt}function z(mt,pt){for(var _t={},Et=[],Lt=0;Lt<mt.length;Lt++){var X=mt[Lt],Nt=pt.base?X[0]+pt.base:X[0],Bt=_t[Nt]||0,Xt="".concat(Nt," ").concat(Bt);_t[Nt]=Bt+1;var te=M(Xt),Wt={css:X[1],media:X[2],sourceMap:X[3]};te!==-1?(v[te].references++,v[te].updater(Wt)):v.push({identifier:Xt,updater:I(Wt,pt),references:1}),Et.push(Xt)}return Et}function H(mt){var pt=document.createElement("style"),_t=mt.attributes||{};if(_t.nonce===void 0){var Et=p.nc;Et&&(_t.nonce=Et)}if(Object.keys(_t).forEach(function(X){pt.setAttribute(X,_t[X])}),typeof mt.insert=="function")mt.insert(pt);else{var Lt=x(mt.insert||"head");if(!Lt)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");Lt.appendChild(pt)}return pt}var Z,U=(Z=[],function(mt,pt){return Z[mt]=pt,Z.filter(Boolean).join(`
`)});function W(mt,pt,_t,Et){var Lt=_t?"":Et.media?"@media ".concat(Et.media," {").concat(Et.css,"}"):Et.css;if(mt.styleSheet)mt.styleSheet.cssText=U(pt,Lt);else{var X=document.createTextNode(Lt),Nt=mt.childNodes;Nt[pt]&&mt.removeChild(Nt[pt]),Nt.length?mt.insertBefore(X,Nt[pt]):mt.appendChild(X)}}function tt(mt,pt,_t){var Et=_t.css,Lt=_t.media,X=_t.sourceMap;if(Lt?mt.setAttribute("media",Lt):mt.removeAttribute("media"),X&&typeof btoa<"u"&&(Et+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(X))))," */")),mt.styleSheet)mt.styleSheet.cssText=Et;else{for(;mt.firstChild;)mt.removeChild(mt.firstChild);mt.appendChild(document.createTextNode(Et))}}var dt=null,st=0;function I(mt,pt){var _t,Et,Lt;if(pt.singleton){var X=st++;_t=dt||(dt=H(pt)),Et=W.bind(null,_t,X,!1),Lt=W.bind(null,_t,X,!0)}else _t=H(pt),Et=tt.bind(null,_t,pt),Lt=function(){(function(Nt){if(Nt.parentNode===null)return!1;Nt.parentNode.removeChild(Nt)})(_t)};return Et(mt),function(Nt){if(Nt){if(Nt.css===mt.css&&Nt.media===mt.media&&Nt.sourceMap===mt.sourceMap)return;Et(mt=Nt)}else Lt()}}f.exports=function(mt,pt){(pt=pt||{}).singleton||typeof pt.singleton=="boolean"||(pt.singleton=C());var _t=z(mt=mt||[],pt);return function(Et){if(Et=Et||[],Object.prototype.toString.call(Et)==="[object Array]"){for(var Lt=0;Lt<_t.length;Lt++){var X=M(_t[Lt]);v[X].references--}for(var Nt=z(Et,pt),Bt=0;Bt<_t.length;Bt++){var Xt=M(_t[Bt]);v[Xt].references===0&&(v[Xt].updater(),v.splice(Xt,1))}_t=Nt}}}}},r={};function c(f){var g=r[f];if(g!==void 0)return g.exports;var p=r[f]={id:f,exports:{}};return s[f](p,p.exports,c),p.exports}c.n=f=>{var g=f&&f.__esModule?()=>f.default:()=>f;return c.d(g,{a:g}),g},c.d=(f,g)=>{for(var p in g)c.o(g,p)&&!c.o(f,p)&&Object.defineProperty(f,p,{enumerable:!0,get:g[p]})},c.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),c.o=(f,g)=>Object.prototype.hasOwnProperty.call(f,g),c.nc=void 0;var u={};return(()=>{c.d(u,{default:()=>yp});const f=function(){return function l(){l.called=!0}};class g{constructor(t,e){this.source=t,this.name=e,this.path=[],this.stop=f(),this.off=f()}}const p=new Array(256).fill().map((l,t)=>("0"+t.toString(16)).slice(-2));function k(){const l=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,o=4294967296*Math.random()>>>0;return"e"+p[l>>0&255]+p[l>>8&255]+p[l>>16&255]+p[l>>24&255]+p[t>>0&255]+p[t>>8&255]+p[t>>16&255]+p[t>>24&255]+p[e>>0&255]+p[e>>8&255]+p[e>>16&255]+p[e>>24&255]+p[o>>0&255]+p[o>>8&255]+p[o>>16&255]+p[o>>24&255]}const C={get(l){return typeof l!="number"?this[l]||this.normal:l},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function x(l,t){const e=C.get(t.priority);for(let o=0;o<l.length;o++)if(C.get(l[o].priority)<e)return void l.splice(o,0,t);l.push(t)}class v extends Error{constructor(t,e,o){super(function(a,d){const h=new WeakSet,m=(A,D)=>{if(typeof D=="object"&&D!==null){if(h.has(D))return`[object ${D.constructor.name}]`;h.add(D)}return D},b=d?` ${JSON.stringify(d,m)}`:"",y=z(a);return a+b+y}(t,o)),this.name="CKEditorError",this.context=e,this.data=o}is(t){return t==="CKEditorError"}static rethrowUnexpectedError(t,e){if(t.is&&t.is("CKEditorError"))throw t;const o=new v(t.message,e);throw o.stack=t.stack,o}}function M(l,t){console.warn(...H(l,t))}function z(l){return`
`;else{let e=null;for(const o of l.getChildren()){const a=Zw(o);e&&(e.is("containerElement")||o.is("containerElement"))&&(Qw.includes(e.name)||Qw.includes(o.name)?t+=`
`:t+=`

* sweetalert2 v11.4.0
* Released under the MIT License.
*/(function(i,n){(function(s,r){i.exports=r()})(Oa,function(){const s="SweetAlert2:",r=P=>{const N=[];for(let _=0;_<P.length;_++)N.indexOf(P[_])===-1&&N.push(P[_]);return N},c=P=>P.charAt(0).toUpperCase()+P.slice(1),u=P=>Array.prototype.slice.call(P),f=P=>{console.warn("".concat(s," ").concat(typeof P=="object"?P.join(" "):P))},g=P=>{console.error("".concat(s," ").concat(P))},p=[],k=P=>{p.includes(P)||(p.push(P),f(P))},C=(P,N)=>{k('"'.concat(P,'" is deprecated and will be removed in the next major release. Please use "').concat(N,'" instead.'))},x=P=>typeof P=="function"?P():P,v=P=>P&&typeof P.toPromise=="function",M=P=>v(P)?P.toPromise():Promise.resolve(P),z=P=>P&&Promise.resolve(P)===P,H={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},Z=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],U={},W=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],tt=P=>Object.prototype.hasOwnProperty.call(H,P),dt=P=>Z.indexOf(P)!==-1,st=P=>U[P],I=P=>{tt(P)||f('Unknown parameter "'.concat(P,'"'))},mt=P=>{W.includes(P)&&f('The parameter "'.concat(P,'" is incompatible with toasts'))},pt=P=>{st(P)&&C(P,st(P))},_t=P=>{!P.backdrop&&P.allowOutsideClick&&f('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const N in P)I(N),P.toast&&mt(N),pt(N)},Et="swal2-",Lt=P=>{const N={};for(const _ in P)N[P[_]]=Et+P[_];return N},X=Lt(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),Nt=Lt(["success","warning","info","question","error"]),Bt=()=>document.body.querySelector(".".concat(X.container)),Xt=P=>{const N=Bt();return N?N.querySelector(P):null},te=P=>Xt(".".concat(P)),Wt=()=>te(X.popup),Ce=()=>te(X.icon),hn=()=>te(X.title),pn=()=>te(X["html-container"]),Re=()=>te(X.image),Je=()=>te(X["progress-steps"]),sn=()=>te(X["validation-message"]),re=()=>Xt(".".concat(X.actions," .").concat(X.confirm)),nt=()=>Xt(".".concat(X.actions," .").concat(X.deny)),bt=()=>te(X["input-label"]),St=()=>Xt(".".concat(X.loader)),Yt=()=>Xt(".".concat(X.actions," .").concat(X.cancel)),de=()=>te(X.actions),ze=()=>te(X.footer),xe=()=>te(X["timer-progress-bar"]),J=()=>te(X.close),ut=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,xt=()=>{const P=u(Wt().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((_,S)=>{const R=parseInt(_.getAttribute("tabindex")),Q=parseInt(S.getAttribute("tabindex"));return R>Q?1:R<Q?-1:0}),N=u(Wt().querySelectorAll(ut)).filter(_=>_.getAttribute("tabindex")!=="-1");return r(P.concat(N)).filter(_=>Gn(_))},Dt=()=>!Vt(document.body,X["toast-shown"])&&!Vt(document.body,X["no-backdrop"]),gt=()=>Wt()&&Vt(Wt(),X.toast),jt=()=>Wt().hasAttribute("data-loading"),Jt={previousBodyPadding:null},$t=(P,N)=>{if(P.textContent="",N){const S=new DOMParser().parseFromString(N,"text/html");u(S.querySelector("head").childNodes).forEach(R=>{P.appendChild(R)}),u(S.querySelector("body").childNodes).forEach(R=>{P.appendChild(R)})}},Vt=(P,N)=>{if(!N)return!1;const _=N.split(/\s+/);for(let S=0;S<_.length;S++)if(!P.classList.contains(_[S]))return!1;return!0},Pt=(P,N)=>{u(P.classList).forEach(_=>{!Object.values(X).includes(_)&&!Object.values(Nt).includes(_)&&!Object.values(N.showClass).includes(_)&&P.classList.remove(_)})},ce=(P,N,_)=>{if(Pt(P,N),N.customClass&&N.customClass[_]){if(typeof N.customClass[_]!="string"&&!N.customClass[_].forEach)return f("Invalid type of customClass.".concat(_,'! Expected string or iterable object, got "').concat(typeof N.customClass[_],'"'));ee(P,N.customClass[_])}},ae=(P,N)=>{if(!N)return null;switch(N){case"select":case"textarea":case"file":return P.querySelector(".".concat(X.popup," > .").concat(X[N]));case"checkbox":return P.querySelector(".".concat(X.popup," > .").concat(X.checkbox," input"));case"radio":return P.querySelector(".".concat(X.popup," > .").concat(X.radio," input:checked"))||P.querySelector(".".concat(X.popup," > .").concat(X.radio," input:first-child"));case"range":return P.querySelector(".".concat(X.popup," > .").concat(X.range," input"));default:return P.querySelector(".".concat(X.popup," > .").concat(X.input))}},Gt=P=>{if(P.focus(),P.type!=="file"){const N=P.value;P.value="",P.value=N}},he=(P,N,_)=>{!P||!N||(typeof N=="string"&&(N=N.split(/\s+/).filter(Boolean)),N.forEach(S=>{Array.isArray(P)?P.forEach(R=>{_?R.classList.add(S):R.classList.remove(S)}):_?P.classList.add(S):P.classList.remove(S)}))},ee=(P,N)=>{he(P,N,!0)},Ie=(P,N)=>{he(P,N,!1)},Se=(P,N)=>{const _=u(P.childNodes);for(let S=0;S<_.length;S++)if(Vt(_[S],N))return _[S]},rn=(P,N,_)=>{_==="".concat(parseInt(_))&&(_=parseInt(_)),_||parseInt(_)===0?P.style[N]=typeof _=="number"?"".concat(_,"px"):_:P.style.removeProperty(N)},Xe=function(P){let N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";P.style.display=N},ge=P=>{P.style.display="none"},$i=(P,N,_,S)=>{const R=P.querySelector(N);R&&(R.style[_]=S)},li=(P,N,_)=>{N?Xe(P,_):ge(P)},Gn=P=>!!(P&&(P.offsetWidth||P.offsetHeight||P.getClientRects().length)),ii=()=>!Gn(re())&&!Gn(nt())&&!Gn(Yt()),mn=P=>P.scrollHeight>P.clientHeight,bn=P=>{const N=window.getComputedStyle(P),_=parseFloat(N.getPropertyValue("animation-duration")||"0"),S=parseFloat(N.getPropertyValue("transition-duration")||"0");return _>0||S>0},jo=function(P){let N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const _=xe();Gn(_)&&(N&&(_.style.transition="none",_.style.width="100%"),setTimeout(()=>{_.style.transition="width ".concat(P/1e3,"s linear"),_.style.width="0%"},10))},$s=()=>{const P=xe(),N=parseInt(window.getComputedStyle(P).width);P.style.removeProperty("transition"),P.style.width="100%";const _=parseInt(window.getComputedStyle(P).width),S=N/_*100;P.style.removeProperty("transition"),P.style.width="".concat(S,"%")},Cr=()=>typeof window>"u"||typeof document>"u",Vs=100,Ee={},to=()=>{Ee.previousActiveElement&&Ee.previousActiveElement.focus?(Ee.previousActiveElement.focus(),Ee.previousActiveElement=null):document.body&&document.body.focus()},nl=P=>new Promise(N=>{if(!P)return N();const _=window.scrollX,S=window.scrollY;Ee.restoreFocusTimeout=setTimeout(()=>{to(),N()},Vs),window.scrollTo(_,S)}),vi=`
 <div aria-labelledby="`.concat(X.title,'" aria-describedby="').concat(X["html-container"],'" class="').concat(X.popup,`" tabindex="-1">
   <button type="button" class="`).concat(X.close,`"></button>
   <ul class="`).concat(X["progress-steps"],`"></ul>
   <div class="`).concat(X.icon,`"></div>
   <img class="`).concat(X.image,`" />
   <h2 class="`).concat(X.title,'" id="').concat(X.title,`"></h2>
   <div class="`).concat(X["html-container"],'" id="').concat(X["html-container"],`"></div>
   <input class="`).concat(X.input,`" />
   <input type="file" class="`).concat(X.file,`" />
   <div class="`).concat(X.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(X.select,`"></select>
   <div class="`).concat(X.radio,`"></div>
   <label for="`).concat(X.checkbox,'" class="').concat(X.checkbox,`">
     <input type="checkbox" />
     <span class="`).concat(X.label,`"></span>
   </label>
   <textarea class="`).concat(X.textarea,`"></textarea>
   <div class="`).concat(X["validation-message"],'" id="').concat(X["validation-message"],`"></div>
   <div class="`).concat(X.actions,`">
     <div class="`).concat(X.loader,`"></div>
     <button type="button" class="`).concat(X.confirm,`"></button>
     <button type="button" class="`).concat(X.deny,`"></button>
     <button type="button" class="`).concat(X.cancel,`"></button>
   </div>
   <div class="`).concat(X.footer,`"></div>
   <div class="`).concat(X["timer-progress-bar-container"],`">
     <div class="`).concat(X["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),so=()=>{const P=Bt();return P?(P.remove(),Ie([document.documentElement,document.body],[X["no-backdrop"],X["toast-shown"],X["has-column"]]),!0):!1},Ti=()=>{Ee.currentInstance.resetValidationMessage()},il=()=>{const P=Wt(),N=Se(P,X.input),_=Se(P,X.file),S=P.querySelector(".".concat(X.range," input")),R=P.querySelector(".".concat(X.range," output")),Q=Se(P,X.select),vt=P.querySelector(".".concat(X.checkbox," input")),le=Se(P,X.textarea);N.oninput=Ti,_.onchange=Ti,Q.onchange=Ti,vt.onchange=Ti,le.oninput=Ti,S.oninput=()=>{Ti(),R.value=S.value},S.onchange=()=>{Ti(),S.nextSibling.value=S.value}},ol=P=>typeof P=="string"?document.querySelector(P):P,Ar=P=>{const N=Wt();N.setAttribute("role",P.toast?"alert":"dialog"),N.setAttribute("aria-live",P.toast?"polite":"assertive"),P.toast||N.setAttribute("aria-modal","true")},Vn=P=>{window.getComputedStyle(P).direction==="rtl"&&ee(Bt(),X.rtl)},sl=P=>{const N=so();if(Cr()){g("SweetAlert2 requires document to initialize");return}const _=document.createElement("div");_.className=X.container,N&&ee(_,X["no-transition"]),$t(_,vi);const S=ol(P.target);S.appendChild(_),Ar(P),Vn(S),il()},Hs=(P,N)=>{P instanceof HTMLElement?N.appendChild(P):typeof P=="object"?xr(P,N):P&&$t(N,P)},xr=(P,N)=>{P.jquery?ra(N,P):$t(N,P.toString())},ra=(P,N)=>{if(P.textContent="",0 in N)for(let _=0;_ in N;_++)P.appendChild(N[_].cloneNode(!0));else P.appendChild(N.cloneNode(!0))},ci=(()=>{if(Cr())return!1;const P=document.createElement("div"),N={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const _ in N)if(Object.prototype.hasOwnProperty.call(N,_)&&typeof P.style[_]<"u")return N[_];return!1})(),fn=()=>{const P=document.createElement("div");P.className=X["scrollbar-measure"],document.body.appendChild(P);const N=P.getBoundingClientRect().width-P.clientWidth;return document.body.removeChild(P),N},Er=(P,N)=>{const _=de(),S=St();!N.showConfirmButton&&!N.showDenyButton&&!N.showCancelButton?ge(_):Xe(_),ce(_,N,"actions"),bs(_,S,N),$t(S,N.loaderHtml),ce(S,N,"loader")};function bs(P,N,_){const S=re(),R=nt(),Q=Yt();ro(S,"confirm",_),ro(R,"deny",_),ro(Q,"cancel",_),ks(S,R,Q,_),_.reverseButtons&&(_.toast?(P.insertBefore(Q,S),P.insertBefore(R,S)):(P.insertBefore(Q,N),P.insertBefore(R,N),P.insertBefore(S,N)))}function ks(P,N,_,S){if(!S.buttonsStyling)return Ie([P,N,_],X.styled);ee([P,N,_],X.styled),S.confirmButtonColor&&(P.style.backgroundColor=S.confirmButtonColor,ee(P,X["default-outline"])),S.denyButtonColor&&(N.style.backgroundColor=S.denyButtonColor,ee(N,X["default-outline"])),S.cancelButtonColor&&(_.style.backgroundColor=S.cancelButtonColor,ee(_,X["default-outline"]))}function ro(P,N,_){li(P,_["show".concat(c(N),"Button")],"inline-block"),$t(P,_["".concat(N,"ButtonText")]),P.setAttribute("aria-label",_["".concat(N,"ButtonAriaLabel")]),P.className=X[N],ce(P,_,"".concat(N,"Button")),ee(P,_["".concat(N,"ButtonClass")])}function Sr(P,N){typeof N=="string"?P.style.background=N:N||ee([document.documentElement,document.body],X["no-backdrop"])}function eo(P,N){N in X?ee(P,X[N]):(f('The "position" parameter is not valid, defaulting to "center"'),ee(P,X.center))}function Fo(P,N){if(N&&typeof N=="string"){const _="grow-".concat(N);_ in X&&ee(P,X[_])}}const ao=(P,N)=>{const _=Bt();!_||(Sr(_,N.backdrop),eo(_,N.position),Fo(_,N.grow),ce(_,N,"container"))};var Pe={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const Xn=["input","file","range","select","radio","checkbox","textarea"],aa=(P,N)=>{const _=Wt(),S=Pe.innerParams.get(P),R=!S||N.input!==S.input;Xn.forEach(Q=>{const vt=X[Q],le=Se(_,vt);Ws(Q,N.inputAttributes),le.className=vt,R&&ge(le)}),N.input&&(R&&Us(N),al(N))},Us=P=>{if(!jn[P.input])return g('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(P.input,'"'));const N=xo(P.input),_=jn[P.input](N,P);Xe(_),setTimeout(()=>{Gt(_)})},rl=P=>{for(let N=0;N<P.attributes.length;N++){const _=P.attributes[N].name;["type","value","style"].includes(_)||P.removeAttribute(_)}},Ws=(P,N)=>{const _=ae(Wt(),P);if(!!_){rl(_);for(const S in N)_.setAttribute(S,N[S])}},al=P=>{const N=xo(P.input);P.customClass&&ee(N,P.customClass.input)},lo=(P,N)=>{(!P.placeholder||N.inputPlaceholder)&&(P.placeholder=N.inputPlaceholder)},Vi=(P,N,_)=>{if(_.inputLabel){P.id=X.input;const S=document.createElement("label"),R=X["input-label"];S.setAttribute("for",P.id),S.className=R,ee(S,_.customClass.inputLabel),S.innerText=_.inputLabel,N.insertAdjacentElement("beforebegin",S)}},xo=P=>{const N=X[P]?X[P]:X.input;return Se(Wt(),N)},jn={};jn.text=jn.email=jn.password=jn.number=jn.tel=jn.url=(P,N)=>(typeof N.inputValue=="string"||typeof N.inputValue=="number"?P.value=N.inputValue:z(N.inputValue)||f('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof N.inputValue,'"')),Vi(P,P,N),lo(P,N),P.type=N.input,P),jn.file=(P,N)=>(Vi(P,P,N),lo(P,N),P),jn.range=(P,N)=>{const _=P.querySelector("input"),S=P.querySelector("output");return _.value=N.inputValue,_.type=N.input,S.value=N.inputValue,Vi(_,P,N),P},jn.select=(P,N)=>{if(P.textContent="",N.inputPlaceholder){const _=document.createElement("option");$t(_,N.inputPlaceholder),_.value="",_.disabled=!0,_.selected=!0,P.appendChild(_)}return Vi(P,P,N),P},jn.radio=P=>(P.textContent="",P),jn.checkbox=(P,N)=>{const _=ae(Wt(),"checkbox");_.value="1",_.id=X.checkbox,_.checked=Boolean(N.inputValue);const S=P.querySelector("span");return $t(S,N.inputPlaceholder),P},jn.textarea=(P,N)=>{P.value=N.inputValue,lo(P,N),Vi(P,P,N);const _=S=>parseInt(window.getComputedStyle(S).marginLeft)+parseInt(window.getComputedStyle(S).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const S=parseInt(window.getComputedStyle(Wt()).width),R=()=>{const Q=P.offsetWidth+_(P);Q>S?Wt().style.width="".concat(Q,"px"):Wt().style.width=null};new MutationObserver(R).observe(P,{attributes:!0,attributeFilter:["style"]})}}),P};const $o=(P,N)=>{const _=pn();ce(_,N,"htmlContainer"),N.html?(Hs(N.html,_),Xe(_,"block")):N.text?(_.textContent=N.text,Xe(_,"block")):ge(_),aa(P,N)},Fn=(P,N)=>{const _=ze();li(_,N.footer),N.footer&&Hs(N.footer,_),ce(_,N,"footer")},Eo=(P,N)=>{const _=J();$t(_,N.closeButtonHtml),ce(_,N,"closeButton"),li(_,N.showCloseButton),_.setAttribute("aria-label",N.closeButtonAriaLabel)},Vo=(P,N)=>{const _=Pe.innerParams.get(P),S=Ce();if(_&&N.icon===_.icon){So(S,N),an(S,N);return}if(!N.icon&&!N.iconHtml)return ge(S);if(N.icon&&Object.keys(Nt).indexOf(N.icon)===-1)return g('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(N.icon,'"')),ge(S);Xe(S),So(S,N),an(S,N),ee(S,N.showClass.icon)},an=(P,N)=>{for(const _ in Nt)N.icon!==_&&Ie(P,Nt[_]);ee(P,Nt[N.icon]),qs(P,N),la(),ce(P,N,"icon")},la=()=>{const P=Wt(),N=window.getComputedStyle(P).getPropertyValue("background-color"),_=P.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let S=0;S<_.length;S++)_[S].style.backgroundColor=N},Tr=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,ca=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,So=(P,N)=>{P.textContent="",N.iconHtml?$t(P,Ae(N.iconHtml)):N.icon==="success"?$t(P,Tr):N.icon==="error"?$t(P,ca):$t(P,Ae({question:"?",warning:"!",info:"i"}[N.icon]))},qs=(P,N)=>{if(!!N.iconColor){P.style.color=N.iconColor,P.style.borderColor=N.iconColor;for(const _ of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])$i(P,_,"backgroundColor",N.iconColor);$i(P,".swal2-success-ring","borderColor",N.iconColor)}},Ae=P=>'<div class="'.concat(X["icon-content"],'">').concat(P,"</div>"),Kt=(P,N)=>{const _=Re();if(!N.imageUrl)return ge(_);Xe(_,""),_.setAttribute("src",N.imageUrl),_.setAttribute("alt",N.imageAlt),rn(_,"width",N.imageWidth),rn(_,"height",N.imageHeight),_.className=X.image,ce(_,N,"image")},yi=P=>{const N=document.createElement("li");return ee(N,X["progress-step"]),$t(N,P),N},je=P=>{const N=document.createElement("li");return ee(N,X["progress-step-line"]),P.progressStepsDistance&&(N.style.width=P.progressStepsDistance),N},Ho=(P,N)=>{const _=Je();if(!N.progressSteps||N.progressSteps.length===0)return ge(_);Xe(_),_.textContent="",N.currentProgressStep>=N.progressSteps.length&&f("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),N.progressSteps.forEach((S,R)=>{const Q=yi(S);if(_.appendChild(Q),R===N.currentProgressStep&&ee(Q,X["active-progress-step"]),R!==N.progressSteps.length-1){const vt=je(N);_.appendChild(vt)}})},da=(P,N)=>{const _=hn();li(_,N.title||N.titleText,"block"),N.title&&Hs(N.title,_),N.titleText&&(_.innerText=N.titleText),ce(_,N,"title")},To=(P,N)=>{const _=Bt(),S=Wt();N.toast?(rn(_,"width",N.width),S.style.width="100%",S.insertBefore(St(),Ce())):rn(S,"width",N.width),rn(S,"padding",N.padding),N.color&&(S.style.color=N.color),N.background&&(S.style.background=N.background),ge(sn()),Hi(S,N)},Hi=(P,N)=>{P.className="".concat(X.popup," ").concat(Gn(P)?N.showClass.popup:""),N.toast?(ee([document.documentElement,document.body],X["toast-shown"]),ee(P,X.toast)):ee(P,X.modal),ce(P,N,"popup"),typeof N.customClass=="string"&&ee(P,N.customClass),N.icon&&ee(P,X["icon-".concat(N.icon)])},co=(P,N)=>{To(P,N),ao(P,N),Ho(P,N),Vo(P,N),Kt(P,N),da(P,N),Eo(P,N),$o(P,N),Er(P,N),Fn(P,N),typeof N.didRender=="function"&&N.didRender(Wt())},Ui=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Dr=()=>{u(document.body.children).forEach(N=>{N===Bt()||N.contains(Bt())||(N.hasAttribute("aria-hidden")&&N.setAttribute("data-previous-aria-hidden",N.getAttribute("aria-hidden")),N.setAttribute("aria-hidden","true"))})},Mr=()=>{u(document.body.children).forEach(N=>{N.hasAttribute("data-previous-aria-hidden")?(N.setAttribute("aria-hidden",N.getAttribute("data-previous-aria-hidden")),N.removeAttribute("data-previous-aria-hidden")):N.removeAttribute("aria-hidden")})},Ir=["swal-title","swal-html","swal-footer"],Yn=P=>{const N=typeof P.template=="string"?document.querySelector(P.template):P.template;if(!N)return{};const _=N.content;return Pr(_),Object.assign(ua(_),Uo(_),ll(_),Wo(_),cl(_),ha(_,Ir))},ua=P=>{const N={};return u(P.querySelectorAll("swal-param")).forEach(_=>{Ci(_,["name","value"]);const S=_.getAttribute("name"),R=_.getAttribute("value");typeof H[S]=="boolean"&&R==="false"&&(N[S]=!1),typeof H[S]=="object"&&(N[S]=JSON.parse(R))}),N},Uo=P=>{const N={};return u(P.querySelectorAll("swal-button")).forEach(_=>{Ci(_,["type","color","aria-label"]);const S=_.getAttribute("type");N["".concat(S,"ButtonText")]=_.innerHTML,N["show".concat(c(S),"Button")]=!0,_.hasAttribute("color")&&(N["".concat(S,"ButtonColor")]=_.getAttribute("color")),_.hasAttribute("aria-label")&&(N["".concat(S,"ButtonAriaLabel")]=_.getAttribute("aria-label"))}),N},ll=P=>{const N={},_=P.querySelector("swal-image");return _&&(Ci(_,["src","width","height","alt"]),_.hasAttribute("src")&&(N.imageUrl=_.getAttribute("src")),_.hasAttribute("width")&&(N.imageWidth=_.getAttribute("width")),_.hasAttribute("height")&&(N.imageHeight=_.getAttribute("height")),_.hasAttribute("alt")&&(N.imageAlt=_.getAttribute("alt"))),N},Wo=P=>{const N={},_=P.querySelector("swal-icon");return _&&(Ci(_,["type","color"]),_.hasAttribute("type")&&(N.icon=_.getAttribute("type")),_.hasAttribute("color")&&(N.iconColor=_.getAttribute("color")),N.iconHtml=_.innerHTML),N},cl=P=>{const N={},_=P.querySelector("swal-input");_&&(Ci(_,["type","label","placeholder","value"]),N.input=_.getAttribute("type")||"text",_.hasAttribute("label")&&(N.inputLabel=_.getAttribute("label")),_.hasAttribute("placeholder")&&(N.inputPlaceholder=_.getAttribute("placeholder")),_.hasAttribute("value")&&(N.inputValue=_.getAttribute("value")));const S=P.querySelectorAll("swal-input-option");return S.length&&(N.inputOptions={},u(S).forEach(R=>{Ci(R,["value"]);const Q=R.getAttribute("value"),vt=R.innerHTML;N.inputOptions[Q]=vt})),N},ha=(P,N)=>{const _={};for(const S in N){const R=N[S],Q=P.querySelector(R);Q&&(Ci(Q,[]),_[R.replace(/^swal-/,"")]=Q.innerHTML.trim())}return _},Pr=P=>{const N=Ir.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);u(P.children).forEach(_=>{const S=_.tagName.toLowerCase();N.indexOf(S)===-1&&f("Unrecognized element <".concat(S,">"))})},Ci=(P,N)=>{u(P.attributes).forEach(_=>{N.indexOf(_.name)===-1&&f(['Unrecognized attribute "'.concat(_.name,'" on <').concat(P.tagName.toLowerCase(),">."),"".concat(N.length?"Allowed attributes are: ".concat(N.join(", ")):"To set the value, use HTML within the element.")])})};var ws={email:(P,N)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(P)?Promise.resolve():Promise.resolve(N||"Invalid email address"),url:(P,N)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(P)?Promise.resolve():Promise.resolve(N||"Invalid URL")};function dl(P){P.inputValidator||Object.keys(ws).forEach(N=>{P.input===N&&(P.inputValidator=ws[N])})}function ul(P){(!P.target||typeof P.target=="string"&&!document.querySelector(P.target)||typeof P.target!="string"&&!P.target.appendChild)&&(f('Target parameter is not valid, defaulting to "body"'),P.target="body")}function hl(P){dl(P),P.showLoaderOnConfirm&&!P.preConfirm&&f(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),ul(P),typeof P.title=="string"&&(P.title=P.title.split(`
`).join("<br />")),sl(P)}class fl{constructor(N,_){this.callback=N,this.remaining=_,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(N){const _=this.running;return _&&this.stop(),this.remaining+=N,_&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const _s=()=>{Jt.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(Jt.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(Jt.previousBodyPadding+fn(),"px"))},qo=()=>{Jt.previousBodyPadding!==null&&(document.body.style.paddingRight="".concat(Jt.previousBodyPadding,"px"),Jt.previousBodyPadding=null)},Gs=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!Vt(document.body,X.iosfix)){const N=document.body.scrollTop;document.body.style.top="".concat(N*-1,"px"),ee(document.body,X.iosfix),Go(),fa()}},fa=()=>{const P=navigator.userAgent,N=!!P.match(/iPad/i)||!!P.match(/iPhone/i),_=!!P.match(/WebKit/i);N&&_&&!P.match(/CriOS/i)&&Wt().scrollHeight>window.innerHeight-44&&(Bt().style.paddingBottom="".concat(44,"px"))},Go=()=>{const P=Bt();let N;P.ontouchstart=_=>{N=ga(_)},P.ontouchmove=_=>{N&&(_.preventDefault(),_.stopPropagation())}},ga=P=>{const N=P.target,_=Bt();return pa(P)||Br(P)?!1:N===_||!mn(_)&&N.tagName!=="INPUT"&&N.tagName!=="TEXTAREA"&&!(mn(pn())&&pn().contains(N))},pa=P=>P.touches&&P.touches.length&&P.touches[0].touchType==="stylus",Br=P=>P.touches&&P.touches.length>1,vs=()=>{if(Vt(document.body,X.iosfix)){const P=parseInt(document.body.style.top,10);Ie(document.body,X.iosfix),document.body.style.top="",document.body.scrollTop=P*-1}},Do=10,ma=P=>{const N=Bt(),_=Wt();typeof P.willOpen=="function"&&P.willOpen(_);const R=window.getComputedStyle(document.body).overflowY;ba(N,_,P),setTimeout(()=>{Nr(N,_)},Do),Dt()&&(Mo(N,P.scrollbarPadding,R),Dr()),!gt()&&!Ee.previousActiveElement&&(Ee.previousActiveElement=document.activeElement),typeof P.didOpen=="function"&&setTimeout(()=>P.didOpen(_)),Ie(N,X["no-transition"])},Yo=P=>{const N=Wt();if(P.target!==N)return;const _=Bt();N.removeEventListener(ci,Yo),_.style.overflowY="auto"},Nr=(P,N)=>{ci&&bn(N)?(P.style.overflowY="hidden",N.addEventListener(ci,Yo)):P.style.overflowY="auto"},Mo=(P,N,_)=>{Gs(),N&&_!=="hidden"&&_s(),setTimeout(()=>{P.scrollTop=0})},ba=(P,N,_)=>{ee(P,_.showClass.backdrop),N.style.setProperty("opacity","0","important"),Xe(N,"grid"),setTimeout(()=>{ee(N,_.showClass.popup),N.style.removeProperty("opacity")},Do),ee([document.documentElement,document.body],X.shown),_.heightAuto&&_.backdrop&&!_.toast&&ee([document.documentElement,document.body],X["height-auto"])},Ko=P=>{let N=Wt();N||new _e,N=Wt();const _=St();gt()?ge(Ce()):gl(N,P),Xe(_),N.setAttribute("data-loading",!0),N.setAttribute("aria-busy",!0),N.focus()},gl=(P,N)=>{const _=de(),S=St();!N&&Gn(re())&&(N=re()),Xe(_),N&&(ge(N),S.setAttribute("data-button-to-replace",N.className)),S.parentNode.insertBefore(S,N),ee([P,_],X.loading)},w=(P,N)=>{N.input==="select"||N.input==="radio"?F(P,N):["text","email","number","tel","textarea"].includes(N.input)&&(v(N.inputValue)||z(N.inputValue))&&(Ko(re()),q(P,N))},T=(P,N)=>{const _=P.getInput();if(!_)return null;switch(N.input){case"checkbox":return B(_);case"radio":return O(_);case"file":return j(_);default:return N.inputAutoTrim?_.value.trim():_.value}},B=P=>P.checked?1:0,O=P=>P.checked?P.value:null,j=P=>P.files.length?P.getAttribute("multiple")!==null?P.files:P.files[0]:null,F=(P,N)=>{const _=Wt(),S=R=>lt[N.input](_,it(R),N);v(N.inputOptions)||z(N.inputOptions)?(Ko(re()),M(N.inputOptions).then(R=>{P.hideLoading(),S(R)})):typeof N.inputOptions=="object"?S(N.inputOptions):g("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof N.inputOptions))},q=(P,N)=>{const _=P.getInput();ge(_),M(N.inputValue).then(S=>{_.value=N.input==="number"?parseFloat(S)||0:"".concat(S),Xe(_),_.focus(),P.hideLoading()}).catch(S=>{g("Error in inputValue promise: ".concat(S)),_.value="",Xe(_),_.focus(),P.hideLoading()})},lt={select:(P,N,_)=>{const S=Se(P,X.select),R=(Q,vt,le)=>{const Ye=document.createElement("option");Ye.value=le,$t(Ye,vt),Ye.selected=wt(le,_.inputValue),Q.appendChild(Ye)};N.forEach(Q=>{const vt=Q[0],le=Q[1];if(Array.isArray(le)){const Ye=document.createElement("optgroup");Ye.label=vt,Ye.disabled=!1,S.appendChild(Ye),le.forEach(mi=>R(Ye,mi[1],mi[0]))}else R(S,le,vt)}),S.focus()},radio:(P,N,_)=>{const S=Se(P,X.radio);N.forEach(Q=>{const vt=Q[0],le=Q[1],Ye=document.createElement("input"),mi=document.createElement("label");Ye.type="radio",Ye.name=X.radio,Ye.value=vt,wt(vt,_.inputValue)&&(Ye.checked=!0);const si=document.createElement("span");$t(si,le),si.className=X.label,mi.appendChild(Ye),mi.appendChild(si),S.appendChild(mi)});const R=S.querySelectorAll("input");R.length&&R[0].focus()}},it=P=>{const N=[];return typeof Map<"u"&&P instanceof Map?P.forEach((_,S)=>{let R=_;typeof R=="object"&&(R=it(R)),N.push([S,R])}):Object.keys(P).forEach(_=>{let S=P[_];typeof S=="object"&&(S=it(S)),N.push([_,S])}),N},wt=(P,N)=>N&&N.toString()===P.toString(),At=P=>{const N=Pe.innerParams.get(P);P.disableButtons(),N.input?Tt(P,"confirm"):_n(P,!0)},Ut=P=>{const N=Pe.innerParams.get(P);P.disableButtons(),N.returnInputValueOnDeny?Tt(P,"deny"):Te(P,!1)},Ct=(P,N)=>{P.disableButtons(),N(Ui.cancel)},Tt=(P,N)=>{const _=Pe.innerParams.get(P);if(!_.input)return g('The "input" parameter is needed to be set when using returnInputValueOn'.concat(c(N)));const S=T(P,_);_.inputValidator?be(P,S,N):P.getInput().checkValidity()?N==="deny"?Te(P,S):_n(P,S):(P.enableButtons(),P.showValidationMessage(_.validationMessage))},be=(P,N,_)=>{const S=Pe.innerParams.get(P);P.disableInput(),Promise.resolve().then(()=>M(S.inputValidator(N,S.validationMessage))).then(Q=>{P.enableButtons(),P.enableInput(),Q?P.showValidationMessage(Q):_==="deny"?Te(P,N):_n(P,N)})},Te=(P,N)=>{const _=Pe.innerParams.get(P||void 0);_.showLoaderOnDeny&&Ko(nt()),_.preDeny?(Pe.awaitingPromise.set(P||void 0,!0),Promise.resolve().then(()=>M(_.preDeny(N,_.validationMessage))).then(R=>{R===!1?P.hideLoading():P.closePopup({isDenied:!0,value:typeof R>"u"?N:R})}).catch(R=>Bn(P||void 0,R))):P.closePopup({isDenied:!0,value:N})},pe=(P,N)=>{P.closePopup({isConfirmed:!0,value:N})},Bn=(P,N)=>{P.rejectPromise(N)},_n=(P,N)=>{const _=Pe.innerParams.get(P||void 0);_.showLoaderOnConfirm&&Ko(),_.preConfirm?(P.resetValidationMessage(),Pe.awaitingPromise.set(P||void 0,!0),Promise.resolve().then(()=>M(_.preConfirm(N,_.validationMessage))).then(R=>{Gn(sn())||R===!1?P.hideLoading():pe(P,typeof R>"u"?N:R)}).catch(R=>Bn(P||void 0,R))):pe(P,N)},di=(P,N,_)=>{Pe.innerParams.get(P).toast?tn(P,N,_):(Ue(N),yn(N),Qo(P,N,_))},tn=(P,N,_)=>{N.popup.onclick=()=>{const S=Pe.innerParams.get(P);S&&(De(S)||S.timer||S.input)||_(Ui.close)}},De=P=>P.showConfirmButton||P.showDenyButton||P.showCancelButton||P.showCloseButton;let vn=!1;const Ue=P=>{P.popup.onmousedown=()=>{P.container.onmouseup=function(N){P.container.onmouseup=void 0,N.target===P.container&&(vn=!0)}}},yn=P=>{P.container.onmousedown=()=>{P.popup.onmouseup=function(N){P.popup.onmouseup=void 0,(N.target===P.popup||P.popup.contains(N.target))&&(vn=!0)}}},Qo=(P,N,_)=>{N.container.onclick=S=>{const R=Pe.innerParams.get(P);if(vn){vn=!1;return}S.target===N.container&&x(R.allowOutsideClick)&&_(Ui.backdrop)}},ys=()=>Gn(Wt()),ui=()=>re()&&re().click(),uo=()=>nt()&&nt().click(),no=()=>Yt()&&Yt().click(),hi=(P,N,_,S)=>{N.keydownTarget&&N.keydownHandlerAdded&&(N.keydownTarget.removeEventListener("keydown",N.keydownHandler,{capture:N.keydownListenerCapture}),N.keydownHandlerAdded=!1),_.toast||(N.keydownHandler=R=>Ys(P,R,S),N.keydownTarget=_.keydownListenerCapture?window:Wt(),N.keydownListenerCapture=_.keydownListenerCapture,N.keydownTarget.addEventListener("keydown",N.keydownHandler,{capture:N.keydownListenerCapture}),N.keydownHandlerAdded=!0)},Ai=(P,N,_)=>{const S=xt();if(S.length)return N=N+_,N===S.length?N=0:N===-1&&(N=S.length-1),S[N].focus();Wt().focus()},Kn=["ArrowRight","ArrowDown"],Di=["ArrowLeft","ArrowUp"],Ys=(P,N,_)=>{const S=Pe.innerParams.get(P);!S||(S.stopKeydownPropagation&&N.stopPropagation(),N.key==="Enter"?ho(P,N,S):N.key==="Tab"?Ks(N,S):[...Kn,...Di].includes(N.key)?Qe(N.key):N.key==="Escape"&&fo(N,S,_))},ho=(P,N,_)=>{if(!(!x(_.allowEnterKey)||N.isComposing)&&N.target&&P.getInput()&&N.target.outerHTML===P.getInput().outerHTML){if(["textarea","file"].includes(_.input))return;ui(),N.preventDefault()}},Ks=(P,N)=>{const _=P.target,S=xt();let R=-1;for(let Q=0;Q<S.length;Q++)if(_===S[Q]){R=Q;break}P.shiftKey?Ai(N,R,-1):Ai(N,R,1),P.stopPropagation(),P.preventDefault()},Qe=P=>{const N=re(),_=nt(),S=Yt();if(![N,_,S].includes(document.activeElement))return;const R=Kn.includes(P)?"nextElementSibling":"previousElementSibling",Q=document.activeElement[R];Q instanceof HTMLElement&&Q.focus()},fo=(P,N,_)=>{x(N.allowEscapeKey)&&(P.preventDefault(),_(Ui.esc))},Cs=P=>typeof P=="object"&&P.jquery,As=P=>P instanceof Element||Cs(P),ka=P=>{const N={};return typeof P[0]=="object"&&!As(P[0])?Object.assign(N,P[0]):["title","html","icon"].forEach((_,S)=>{const R=P[S];typeof R=="string"||As(R)?N[_]=R:R!==void 0&&g("Unexpected type of ".concat(_,'! Expected "string" or "Element", got ').concat(typeof R))}),N};function Zo(){const P=this;for(var N=arguments.length,_=new Array(N),S=0;S<N;S++)_[S]=arguments[S];return new P(..._)}function pl(P){class N extends this{_main(S,R){return super._main(S,Object.assign({},P,R))}}return N}const wa=()=>Ee.timeout&&Ee.timeout.getTimerLeft(),go=()=>{if(Ee.timeout)return $s(),Ee.timeout.stop()},io=()=>{if(Ee.timeout){const P=Ee.timeout.start();return jo(P),P}},ml=()=>{const P=Ee.timeout;return P&&(P.running?go():io())},Qs=P=>{if(Ee.timeout){const N=Ee.timeout.increase(P);return jo(N,!0),N}},Zs=()=>Ee.timeout&&Ee.timeout.isRunning();let Js=!1;const Xs={};function xs(){let P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";Xs[P]=this,Js||(document.body.addEventListener("click",bl),Js=!0)}const bl=P=>{for(let N=P.target;N&&N!==document;N=N.parentNode)for(const _ in Xs){const S=N.getAttribute(_);if(S){Xs[_].fire({template:S});return}}};var tr=Object.freeze({isValidParameter:tt,isUpdatableParameter:dt,isDeprecatedParameter:st,argsToParams:ka,isVisible:ys,clickConfirm:ui,clickDeny:uo,clickCancel:no,getContainer:Bt,getPopup:Wt,getTitle:hn,getHtmlContainer:pn,getImage:Re,getIcon:Ce,getInputLabel:bt,getCloseButton:J,getActions:de,getConfirmButton:re,getDenyButton:nt,getCancelButton:Yt,getLoader:St,getFooter:ze,getTimerProgressBar:xe,getFocusableElements:xt,getValidationMessage:sn,isLoading:jt,fire:Zo,mixin:pl,showLoading:Ko,enableLoading:Ko,getTimerLeft:wa,stopTimer:go,resumeTimer:io,toggleTimer:ml,increaseTimer:Qs,isTimerRunning:Zs,bindClickHandler:xs});function Mi(){const P=Pe.innerParams.get(this);if(!P)return;const N=Pe.domCache.get(this);ge(N.loader),gt()?P.icon&&Xe(Ce()):Wi(N),Ie([N.popup,N.actions],X.loading),N.popup.removeAttribute("aria-busy"),N.popup.removeAttribute("data-loading"),N.confirmButton.disabled=!1,N.denyButton.disabled=!1,N.cancelButton.disabled=!1}const Wi=P=>{const N=P.popup.getElementsByClassName(P.loader.getAttribute("data-button-to-replace"));N.length?Xe(N[0],"inline-block"):ii()&&ge(P.actions)};function er(P){const N=Pe.innerParams.get(P||this),_=Pe.domCache.get(P||this);return _?ae(_.popup,N.input):null}var Jo={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};function nr(P,N,_,S){gt()?or(P,S):(nl(_).then(()=>or(P,S)),Ee.keydownTarget.removeEventListener("keydown",Ee.keydownHandler,{capture:Ee.keydownListenerCapture}),Ee.keydownHandlerAdded=!1),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(N.setAttribute("style","display:none !important"),N.removeAttribute("class"),N.innerHTML=""):N.remove(),Dt()&&(qo(),vs(),Mr()),kl()}function kl(){Ie([document.documentElement,document.body],[X.shown,X["height-auto"],X["no-backdrop"],X["toast-shown"]])}function Ze(P){P=Or(P);const N=Jo.swalPromiseResolve.get(this),_=xi(this);this.isAwaitingPromise()?P.isDismissed||(ir(this),N(P)):_&&N(P)}function Xo(){return!!Pe.awaitingPromise.get(this)}const xi=P=>{const N=Wt();if(!N)return!1;const _=Pe.innerParams.get(P);if(!_||Vt(N,_.hideClass.popup))return!1;Ie(N,_.showClass.popup),ee(N,_.hideClass.popup);const S=Bt();return Ie(S,_.showClass.backdrop),ee(S,_.hideClass.backdrop),_a(P,N,_),!0};function Ii(P){const N=Jo.swalPromiseReject.get(this);ir(this),N&&N(P)}const ir=P=>{P.isAwaitingPromise()&&(Pe.awaitingPromise.delete(P),Pe.innerParams.get(P)||P._destroy())},Or=P=>typeof P>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},P),_a=(P,N,_)=>{const S=Bt(),R=ci&&bn(N);typeof _.willClose=="function"&&_.willClose(N),R?va(P,N,S,_.returnFocus,_.didClose):nr(P,S,_.returnFocus,_.didClose)},va=(P,N,_,S,R)=>{Ee.swalCloseEventFinishedCallback=nr.bind(null,P,_,S,R),N.addEventListener(ci,function(Q){Q.target===N&&(Ee.swalCloseEventFinishedCallback(),delete Ee.swalCloseEventFinishedCallback)})},or=(P,N)=>{setTimeout(()=>{typeof N=="function"&&N.bind(P.params)(),P._destroy()})};function po(P,N,_){const S=Pe.domCache.get(P);N.forEach(R=>{S[R].disabled=_})}function nn(P,N){if(!P)return!1;if(P.type==="radio"){const S=P.parentNode.parentNode.querySelectorAll("input");for(let R=0;R<S.length;R++)S[R].disabled=N}else P.disabled=N}function sr(){po(this,["confirmButton","denyButton","cancelButton"],!1)}function Es(){po(this,["confirmButton","denyButton","cancelButton"],!0)}function Pi(){return nn(this.getInput(),!1)}function rr(){return nn(this.getInput(),!0)}function ya(P){const N=Pe.domCache.get(this),_=Pe.innerParams.get(this);$t(N.validationMessage,P),N.validationMessage.className=X["validation-message"],_.customClass&&_.customClass.validationMessage&&ee(N.validationMessage,_.customClass.validationMessage),Xe(N.validationMessage);const S=this.getInput();S&&(S.setAttribute("aria-invalid",!0),S.setAttribute("aria-describedby",X["validation-message"]),Gt(S),ee(S,X.inputerror))}function qi(){const P=Pe.domCache.get(this);P.validationMessage&&ge(P.validationMessage);const N=this.getInput();N&&(N.removeAttribute("aria-invalid"),N.removeAttribute("aria-describedby"),Ie(N,X.inputerror))}function oi(){return Pe.domCache.get(this).progressSteps}function fi(P){const N=Wt(),_=Pe.innerParams.get(this);if(!N||Vt(N,_.hideClass.popup))return f("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const S=ar(P),R=Object.assign({},_,S);co(this,R),Pe.innerParams.set(this,R),Object.defineProperties(this,{params:{value:Object.assign({},this.params,P),writable:!1,enumerable:!0}})}const ar=P=>{const N={};return Object.keys(P).forEach(_=>{dt(_)?N[_]=P[_]:f('Invalid parameter to update: "'.concat(_,`". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`))}),N};function K(){const P=Pe.domCache.get(this),N=Pe.innerParams.get(this);if(!N){ft(this);return}P.popup&&Ee.swalCloseEventFinishedCallback&&(Ee.swalCloseEventFinishedCallback(),delete Ee.swalCloseEventFinishedCallback),Ee.deferDisposalTimer&&(clearTimeout(Ee.deferDisposalTimer),delete Ee.deferDisposalTimer),typeof N.didDestroy=="function"&&N.didDestroy(),ot(this)}const ot=P=>{ft(P),delete P.params,delete Ee.keydownHandler,delete Ee.keydownTarget,delete Ee.currentInstance},ft=P=>{P.isAwaitingPromise()?(Mt(Pe,P),Pe.awaitingPromise.set(P,!0)):(Mt(Jo,P),Mt(Pe,P))},Mt=(P,N)=>{for(const _ in P)P[_].delete(N)};var kt=Object.freeze({hideLoading:Mi,disableLoading:Mi,getInput:er,close:Ze,isAwaitingPromise:Xo,rejectPromise:Ii,closePopup:Ze,closeModal:Ze,closeToast:Ze,enableButtons:sr,disableButtons:Es,enableInput:Pi,disableInput:rr,showValidationMessage:ya,resetValidationMessage:qi,getProgressSteps:oi,update:fi,_destroy:K});let Ot;class zt{constructor(){if(typeof window>"u")return;Ot=this;for(var N=arguments.length,_=new Array(N),S=0;S<N;S++)_[S]=arguments[S];const R=Object.freeze(this.constructor.argsToParams(_));Object.defineProperties(this,{params:{value:R,writable:!1,enumerable:!0,configurable:!0}});const Q=this._main(this.params);Pe.promise.set(this,Q)}_main(N){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};_t(Object.assign({},_,N)),Ee.currentInstance&&(Ee.currentInstance._destroy(),Dt()&&Mr()),Ee.currentInstance=this;const S=ie(N,_);hl(S),Object.freeze(S),Ee.timeout&&(Ee.timeout.stop(),delete Ee.timeout),clearTimeout(Ee.restoreFocusTimeout);const R=we(this);return co(this,S),Pe.innerParams.set(this,S),Ht(this,R,S)}then(N){return Pe.promise.get(this).then(N)}finally(N){return Pe.promise.get(this).finally(N)}}const Ht=(P,N,_)=>new Promise((S,R)=>{const Q=vt=>{P.closePopup({isDismissed:!0,dismiss:vt})};Jo.swalPromiseResolve.set(P,S),Jo.swalPromiseReject.set(P,R),N.confirmButton.onclick=()=>At(P),N.denyButton.onclick=()=>Ut(P),N.cancelButton.onclick=()=>Ct(P,Q),N.closeButton.onclick=()=>Q(Ui.close),di(P,N,Q),hi(P,Ee,_,Q),w(P,_),ma(_),oe(Ee,_,Q),ke(N,_),setTimeout(()=>{N.container.scrollTop=0})}),ie=(P,N)=>{const _=Yn(P),S=Object.assign({},H,N,_,P);return S.showClass=Object.assign({},H.showClass,S.showClass),S.hideClass=Object.assign({},H.hideClass,S.hideClass),S},we=P=>{const N={popup:Wt(),container:Bt(),actions:de(),confirmButton:re(),denyButton:nt(),cancelButton:Yt(),loader:St(),closeButton:J(),validationMessage:sn(),progressSteps:Je()};return Pe.domCache.set(P,N),N},oe=(P,N,_)=>{const S=xe();ge(S),N.timer&&(P.timeout=new fl(()=>{_("timer"),delete P.timeout},N.timer),N.timerProgressBar&&(Xe(S),ce(S,N,"timerProgressBar"),setTimeout(()=>{P.timeout&&P.timeout.running&&jo(N.timer)})))},ke=(P,N)=>{if(!N.toast){if(!x(N.allowEnterKey))return Ve();Me(P,N)||Ai(N,-1,1)}},Me=(P,N)=>N.focusDeny&&Gn(P.denyButton)?(P.denyButton.focus(),!0):N.focusCancel&&Gn(P.cancelButton)?(P.cancelButton.focus(),!0):N.focusConfirm&&Gn(P.confirmButton)?(P.confirmButton.focus(),!0):!1,Ve=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Object.assign(zt.prototype,kt),Object.assign(zt,tr),Object.keys(kt).forEach(P=>{zt[P]=function(){if(Ot)return Ot[P](...arguments)}}),zt.DismissReason=Ui,zt.version="11.4.0";const _e=zt;return _e.default=_e,_e}),typeof Oa<"u"&&Oa.Sweetalert2&&(Oa.swal=Oa.sweetAlert=Oa.Swal=Oa.SweetAlert=Oa.Sweetalert2)})(K5);var Ph=K5.exports;class wZ{static install(n,s={}){var r;const c=Ph.mixin(s),u=function(...f){return c.fire.call(c,...f)};Object.assign(u,Ph),Object.keys(Ph).filter(f=>typeof Ph[f]=="function").forEach(f=>{u[f]=c[f].bind(c)}),((r=n.config)==null?void 0:r.globalProperties)&&!n.config.globalProperties.$swal?(n.config.globalProperties.$swal=u,n.provide("$swal",u)):Object.prototype.hasOwnProperty.call(n,"$swal")||(n.prototype.$swal=u,n.swal=u)}}var Q5={exports:{}};const _Z=kO(tB);/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(i,n){(function(s,r){i.exports=r(_Z)})(window,function(s){return function(r){var c={};function u(f){if(c[f])return c[f].exports;var g=c[f]={i:f,l:!1,exports:{}};return r[f].call(g.exports,g,g.exports,u),g.l=!0,g.exports}return u.m=r,u.c=c,u.d=function(f,g,p){u.o(f,g)||Object.defineProperty(f,g,{enumerable:!0,get:p})},u.r=function(f){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(f,"__esModule",{value:!0})},u.t=function(f,g){if(1&g&&(f=u(f)),8&g||4&g&&typeof f=="object"&&f&&f.__esModule)return f;var p=Object.create(null);if(u.r(p),Object.defineProperty(p,"default",{enumerable:!0,value:f}),2&g&&typeof f!="string")for(var k in f)u.d(p,k,function(C){return f[C]}.bind(null,k));return p},u.n=function(f){var g=f&&f.__esModule?function(){return f.default}:function(){return f};return u.d(g,"a",g),g},u.o=function(f,g){return Object.prototype.hasOwnProperty.call(f,g)},u.p="",u(u.s=3)}([function(r,c){r.exports=s},function(r,c,u){(function(f){var g=typeof f=="object"&&f&&f.Object===Object&&f;c.a=g}).call(this,u(2))},function(r,c){var u;u=function(){return this}();try{u=u||new Function("return this")()}catch{typeof window=="object"&&(u=window)}r.exports=u},function(r,c,u){u.r(c);var f=u(0),g=u.n(f),p=function(nt){var bt=typeof nt;return nt!=null&&(bt=="object"||bt=="function")},k=u(1),C=typeof self=="object"&&self&&self.Object===Object&&self,x=k.a||C||Function("return this")(),v=function(){return x.Date.now()},M=/\s/,z=function(nt){for(var bt=nt.length;bt--&&M.test(nt.charAt(bt)););return bt},H=/^\s+/,Z=function(nt){return nt&&nt.slice(0,z(nt)+1).replace(H,"")},U=x.Symbol,W=Object.prototype,tt=W.hasOwnProperty,dt=W.toString,st=U?U.toStringTag:void 0,I=function(nt){var bt=tt.call(nt,st),St=nt[st];try{nt[st]=void 0;var Yt=!0}catch{}var de=dt.call(nt);return Yt&&(bt?nt[st]=St:delete nt[st]),de},mt=Object.prototype.toString,pt=function(nt){return mt.call(nt)},_t=U?U.toStringTag:void 0,Et=function(nt){return nt==null?nt===void 0?"[object Undefined]":"[object Null]":_t&&_t in Object(nt)?I(nt):pt(nt)},Lt=function(nt){return nt!=null&&typeof nt=="object"},X=function(nt){return typeof nt=="symbol"||Lt(nt)&&Et(nt)=="[object Symbol]"},Nt=/^[-+]0x[0-9a-f]+$/i,Bt=/^0b[01]+$/i,Xt=/^0o[0-7]+$/i,te=parseInt,Wt=function(nt){if(typeof nt=="number")return nt;if(X(nt))return NaN;if(p(nt)){var bt=typeof nt.valueOf=="function"?nt.valueOf():nt;nt=p(bt)?bt+"":bt}if(typeof nt!="string")return nt===0?nt:+nt;nt=Z(nt);var St=Bt.test(nt);return St||Xt.test(nt)?te(nt.slice(2),St?2:8):Nt.test(nt)?NaN:+nt},Ce=Math.max,hn=Math.min,pn=function(nt,bt,St){var Yt,de,ze,xe,J,ut,xt=0,Dt=!1,gt=!1,jt=!0;if(typeof nt!="function")throw new TypeError("Expected a function");function Jt(Gt){var he=Yt,ee=de;return Yt=de=void 0,xt=Gt,xe=nt.apply(ee,he)}function $t(Gt){return xt=Gt,J=setTimeout(Pt,bt),Dt?Jt(Gt):xe}function Vt(Gt){var he=Gt-ut;return ut===void 0||he>=bt||he<0||gt&&Gt-xt>=ze}function Pt(){var Gt=v();if(Vt(Gt))return ce(Gt);J=setTimeout(Pt,function(he){var ee=bt-(he-ut);return gt?hn(ee,ze-(he-xt)):ee}(Gt))}function ce(Gt){return J=void 0,jt&&Yt?Jt(Gt):(Yt=de=void 0,xe)}function ae(){var Gt=v(),he=Vt(Gt);if(Yt=arguments,de=this,ut=Gt,he){if(J===void 0)return $t(ut);if(gt)return clearTimeout(J),J=setTimeout(Pt,bt),Jt(ut)}return J===void 0&&(J=setTimeout(Pt,bt)),xe}return bt=Wt(bt)||0,p(St)&&(Dt=!!St.leading,ze=(gt="maxWait"in St)?Ce(Wt(St.maxWait)||0,bt):ze,jt="trailing"in St?!!St.trailing:jt),ae.cancel=function(){J!==void 0&&clearTimeout(J),xt=0,Yt=ut=de=J=void 0},ae.flush=function(){return J===void 0?xe:ce(v())},ae},Re={name:"ckeditor",created(){const{CKEDITOR_VERSION:nt}=window;if(nt){const[bt]=nt.split(".").map(Number);bt<34&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 34 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')},render(){return Object(f.h)(this.tagName)},model:{prop:"modelValue",event:"update:modelValue"},props:{editor:{type:Function,default:null},modelValue:{type:String,default:""},config:{type:Object,default:()=>({})},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1}},data:()=>({instance:null,lastEditorData:{type:String,default:""}}),mounted(){const nt=Object.assign({},this.config);this.modelValue&&(nt.initialData=this.modelValue),this.editor.create(this.$el,nt).then(bt=>{this.instance=Object(f.markRaw)(bt),this.setUpEditorEvents(),this.modelValue!==nt.initialData&&bt.setData(this.modelValue),this.disabled&&bt.enableReadOnlyMode("Integration Sample"),this.$emit("ready",bt)}).catch(bt=>{console.error(bt)})},beforeUnmount(){this.instance&&(this.instance.destroy(),this.instance=null),this.$emit("destroy",this.instance)},watch:{modelValue(nt){this.instance&&nt!==this.lastEditorData&&this.instance.setData(nt)},disabled(nt){nt?this.instance.enableReadOnlyMode("Integration Sample"):this.instance.disableReadOnlyMode("Integration Sample")}},methods:{setUpEditorEvents(){const nt=this.instance,bt=pn(St=>{const Yt=this.lastEditorData=nt.getData();this.$emit("update:modelValue",Yt,St,nt),this.$emit("input",Yt,St,nt)},300,{leading:!0});nt.model.document.on("change:data",bt),nt.editing.view.document.on("focus",St=>{this.$emit("focus",St,nt)}),nt.editing.view.document.on("blur",St=>{this.$emit("blur",St,nt)})}}};const Je=g.a?g.a.version:f.version,[sn]=Je.split(".").map(nt=>parseInt(nt,10));if(sn<3)throw new Error("The CKEditor plugin works only with Vue 3+. For more information, please refer to https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html");const re={install(nt){nt.component("ckeditor",Re)},component:Re};c.default=re}]).default})})(Q5);const vZ=Rx(Q5.exports);var Z5={exports:{}};/*!
 * jQuery JavaScript Library v3.6.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2022-08-26T17:52Z
 */(function(i){(function(n,s){i.exports=n.document?s(n,!0):function(r){if(!r.document)throw new Error("jQuery requires a window with a document");return s(r)}})(typeof window<"u"?window:Oo,function(n,s){var r=[],c=Object.getPrototypeOf,u=r.slice,f=r.flat?function(w){return r.flat.call(w)}:function(w){return r.concat.apply([],w)},g=r.push,p=r.indexOf,k={},C=k.toString,x=k.hasOwnProperty,v=x.toString,M=v.call(Object),z={},H=function(T){return typeof T=="function"&&typeof T.nodeType!="number"&&typeof T.item!="function"},Z=function(T){return T!=null&&T===T.window},U=n.document,W={type:!0,src:!0,nonce:!0,noModule:!0};function tt(w,T,B){B=B||U;var O,j,F=B.createElement("script");if(F.text=w,T)for(O in W)j=T[O]||T.getAttribute&&T.getAttribute(O),j&&F.setAttribute(O,j);B.head.appendChild(F).parentNode.removeChild(F)}function dt(w){return w==null?w+"":typeof w=="object"||typeof w=="function"?k[C.call(w)]||"object":typeof w}var st="3.6.1",I=function(w,T){return new I.fn.init(w,T)};I.fn=I.prototype={jquery:st,constructor:I,length:0,toArray:function(){return u.call(this)},get:function(w){return w==null?u.call(this):w<0?this[w+this.length]:this[w]},pushStack:function(w){var T=I.merge(this.constructor(),w);return T.prevObject=this,T},each:function(w){return I.each(this,w)},map:function(w){return this.pushStack(I.map(this,function(T,B){return w.call(T,B,T)}))},slice:function(){return this.pushStack(u.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(I.grep(this,function(w,T){return(T+1)%2}))},odd:function(){return this.pushStack(I.grep(this,function(w,T){return T%2}))},eq:function(w){var T=this.length,B=+w+(w<0?T:0);return this.pushStack(B>=0&&B<T?[this[B]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:r.sort,splice:r.splice},I.extend=I.fn.extend=function(){var w,T,B,O,j,F,q=arguments[0]||{},lt=1,it=arguments.length,wt=!1;for(typeof q=="boolean"&&(wt=q,q=arguments[lt]||{},lt++),typeof q!="object"&&!H(q)&&(q={}),lt===it&&(q=this,lt--);lt<it;lt++)if((w=arguments[lt])!=null)for(T in w)O=w[T],!(T==="__proto__"||q===O)&&(wt&&O&&(I.isPlainObject(O)||(j=Array.isArray(O)))?(B=q[T],j&&!Array.isArray(B)?F=[]:!j&&!I.isPlainObject(B)?F={}:F=B,j=!1,q[T]=I.extend(wt,F,O)):O!==void 0&&(q[T]=O));return q},I.extend({expando:"jQuery"+(st+Math.random()).replace(/\D/g,""),isReady:!0,error:function(w){throw new Error(w)},noop:function(){},isPlainObject:function(w){var T,B;return!w||C.call(w)!=="[object Object]"?!1:(T=c(w),T?(B=x.call(T,"constructor")&&T.constructor,typeof B=="function"&&v.call(B)===M):!0)},isEmptyObject:function(w){var T;for(T in w)return!1;return!0},globalEval:function(w,T,B){tt(w,{nonce:T&&T.nonce},B)},each:function(w,T){var B,O=0;if(mt(w))for(B=w.length;O<B&&T.call(w[O],O,w[O])!==!1;O++);else for(O in w)if(T.call(w[O],O,w[O])===!1)break;return w},makeArray:function(w,T){var B=T||[];return w!=null&&(mt(Object(w))?I.merge(B,typeof w=="string"?[w]:w):g.call(B,w)),B},inArray:function(w,T,B){return T==null?-1:p.call(T,w,B)},merge:function(w,T){for(var B=+T.length,O=0,j=w.length;O<B;O++)w[j++]=T[O];return w.length=j,w},grep:function(w,T,B){for(var O,j=[],F=0,q=w.length,lt=!B;F<q;F++)O=!T(w[F],F),O!==lt&&j.push(w[F]);return j},map:function(w,T,B){var O,j,F=0,q=[];if(mt(w))for(O=w.length;F<O;F++)j=T(w[F],F,B),j!=null&&q.push(j);else for(F in w)j=T(w[F],F,B),j!=null&&q.push(j);return f(q)},guid:1,support:z}),typeof Symbol=="function"&&(I.fn[Symbol.iterator]=r[Symbol.iterator]),I.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(w,T){k["[object "+T+"]"]=T.toLowerCase()});function mt(w){var T=!!w&&"length"in w&&w.length,B=dt(w);return H(w)||Z(w)?!1:B==="array"||T===0||typeof T=="number"&&T>0&&T-1 in w}var pt=function(w){var T,B,O,j,F,q,lt,it,wt,At,Ut,Ct,Tt,be,Te,pe,Bn,_n,di,tn="sizzle"+1*new Date,De=w.document,vn=0,Ue=0,yn=Xo(),Qo=Xo(),ys=Xo(),ui=Xo(),uo=function(K,ot){return K===ot&&(Ut=!0),0},no={}.hasOwnProperty,hi=[],Ai=hi.pop,Kn=hi.push,Di=hi.push,Ys=hi.slice,ho=function(K,ot){for(var ft=0,Mt=K.length;ft<Mt;ft++)if(K[ft]===ot)return ft;return-1},Ks="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Qe="[\\x20\\t\\r\\n\\f]",fo="(?:\\\\[\\da-fA-F]{1,6}"+Qe+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Cs="\\["+Qe+"*("+fo+")(?:"+Qe+"*([*^$|!~]?=)"+Qe+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+fo+"))|)"+Qe+"*\\]",As=":("+fo+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Cs+")*)|.*)\\)|)",ka=new RegExp(Qe+"+","g"),Zo=new RegExp("^"+Qe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Qe+"+$","g"),pl=new RegExp("^"+Qe+"*,"+Qe+"*"),wa=new RegExp("^"+Qe+"*([>+~]|"+Qe+")"+Qe+"*"),go=new RegExp(Qe+"|>"),io=new RegExp(As),ml=new RegExp("^"+fo+"$"),Qs={ID:new RegExp("^#("+fo+")"),CLASS:new RegExp("^\\.("+fo+")"),TAG:new RegExp("^("+fo+"|[*])"),ATTR:new RegExp("^"+Cs),PSEUDO:new RegExp("^"+As),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+Qe+"*(even|odd|(([+-]|)(\\d*)n|)"+Qe+"*(?:([+-]|)"+Qe+"*(\\d+)|))"+Qe+"*\\)|)","i"),bool:new RegExp("^(?:"+Ks+")$","i"),needsContext:new RegExp("^"+Qe+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+Qe+"*((?:-\\d)?\\d*)"+Qe+"*\\)|)(?=[^-]|$)","i")},Zs=/HTML$/i,Js=/^(?:input|select|textarea|button)$/i,Xs=/^h\d$/i,xs=/^[^{]+\{\s*\[native \w/,bl=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,tr=/[+~]/,Mi=new RegExp("\\\\[\\da-fA-F]{1,6}"+Qe+"?|\\\\([^\\r\\n\\f])","g"),Wi=function(K,ot){var ft="0x"+K.slice(1)-65536;return ot||(ft<0?String.fromCharCode(ft+65536):String.fromCharCode(ft>>10|55296,ft&1023|56320))},er=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,Jo=function(K,ot){return ot?K==="\0"?"\uFFFD":K.slice(0,-1)+"\\"+K.charCodeAt(K.length-1).toString(16)+" ":"\\"+K},nr=function(){Ct()},kl=Pi(function(K){return K.disabled===!0&&K.nodeName.toLowerCase()==="fieldset"},{dir:"parentNode",next:"legend"});try{Di.apply(hi=Ys.call(De.childNodes),De.childNodes),hi[De.childNodes.length].nodeType}catch{Di={apply:hi.length?function(ot,ft){Kn.apply(ot,Ys.call(ft))}:function(ot,ft){for(var Mt=ot.length,kt=0;ot[Mt++]=ft[kt++];);ot.length=Mt-1}}}function Ze(K,ot,ft,Mt){var kt,Ot,zt,Ht,ie,we,oe,ke=ot&&ot.ownerDocument,Me=ot?ot.nodeType:9;if(ft=ft||[],typeof K!="string"||!K||Me!==1&&Me!==9&&Me!==11)return ft;if(!Mt&&(Ct(ot),ot=ot||Tt,Te)){if(Me!==11&&(ie=bl.exec(K)))if(kt=ie[1]){if(Me===9)if(zt=ot.getElementById(kt)){if(zt.id===kt)return ft.push(zt),ft}else return ft;else if(ke&&(zt=ke.getElementById(kt))&&di(ot,zt)&&zt.id===kt)return ft.push(zt),ft}else{if(ie[2])return Di.apply(ft,ot.getElementsByTagName(K)),ft;if((kt=ie[3])&&B.getElementsByClassName&&ot.getElementsByClassName)return Di.apply(ft,ot.getElementsByClassName(kt)),ft}if(B.qsa&&!ui[K+" "]&&(!pe||!pe.test(K))&&(Me!==1||ot.nodeName.toLowerCase()!=="object")){if(oe=K,ke=ot,Me===1&&(go.test(K)||wa.test(K))){for(ke=tr.test(K)&&nn(ot.parentNode)||ot,(ke!==ot||!B.scope)&&((Ht=ot.getAttribute("id"))?Ht=Ht.replace(er,Jo):ot.setAttribute("id",Ht=tn)),we=q(K),Ot=we.length;Ot--;)we[Ot]=(Ht?"#"+Ht:":scope")+" "+Es(we[Ot]);oe=we.join(",")}try{return Di.apply(ft,ke.querySelectorAll(oe)),ft}catch{ui(K,!0)}finally{Ht===tn&&ot.removeAttribute("id")}}}return it(K.replace(Zo,"$1"),ot,ft,Mt)}function Xo(){var K=[];function ot(ft,Mt){return K.push(ft+" ")>O.cacheLength&&delete ot[K.shift()],ot[ft+" "]=Mt}return ot}function xi(K){return K[tn]=!0,K}function Ii(K){var ot=Tt.createElement("fieldset");try{return!!K(ot)}catch{return!1}finally{ot.parentNode&&ot.parentNode.removeChild(ot),ot=null}}function ir(K,ot){for(var ft=K.split("|"),Mt=ft.length;Mt--;)O.attrHandle[ft[Mt]]=ot}function Or(K,ot){var ft=ot&&K,Mt=ft&&K.nodeType===1&&ot.nodeType===1&&K.sourceIndex-ot.sourceIndex;if(Mt)return Mt;if(ft){for(;ft=ft.nextSibling;)if(ft===ot)return-1}return K?1:-1}function _a(K){return function(ot){var ft=ot.nodeName.toLowerCase();return ft==="input"&&ot.type===K}}function va(K){return function(ot){var ft=ot.nodeName.toLowerCase();return(ft==="input"||ft==="button")&&ot.type===K}}function or(K){return function(ot){return"form"in ot?ot.parentNode&&ot.disabled===!1?"label"in ot?"label"in ot.parentNode?ot.parentNode.disabled===K:ot.disabled===K:ot.isDisabled===K||ot.isDisabled!==!K&&kl(ot)===K:ot.disabled===K:"label"in ot?ot.disabled===K:!1}}function po(K){return xi(function(ot){return ot=+ot,xi(function(ft,Mt){for(var kt,Ot=K([],ft.length,ot),zt=Ot.length;zt--;)ft[kt=Ot[zt]]&&(ft[kt]=!(Mt[kt]=ft[kt]))})})}function nn(K){return K&&typeof K.getElementsByTagName<"u"&&K}B=Ze.support={},F=Ze.isXML=function(K){var ot=K&&K.namespaceURI,ft=K&&(K.ownerDocument||K).documentElement;return!Zs.test(ot||ft&&ft.nodeName||"HTML")},Ct=Ze.setDocument=function(K){var ot,ft,Mt=K?K.ownerDocument||K:De;return Mt==Tt||Mt.nodeType!==9||!Mt.documentElement||(Tt=Mt,be=Tt.documentElement,Te=!F(Tt),De!=Tt&&(ft=Tt.defaultView)&&ft.top!==ft&&(ft.addEventListener?ft.addEventListener("unload",nr,!1):ft.attachEvent&&ft.attachEvent("onunload",nr)),B.scope=Ii(function(kt){return be.appendChild(kt).appendChild(Tt.createElement("div")),typeof kt.querySelectorAll<"u"&&!kt.querySelectorAll(":scope fieldset div").length}),B.attributes=Ii(function(kt){return kt.className="i",!kt.getAttribute("className")}),B.getElementsByTagName=Ii(function(kt){return kt.appendChild(Tt.createComment("")),!kt.getElementsByTagName("*").length}),B.getElementsByClassName=xs.test(Tt.getElementsByClassName),B.getById=Ii(function(kt){return be.appendChild(kt).id=tn,!Tt.getElementsByName||!Tt.getElementsByName(tn).length}),B.getById?(O.filter.ID=function(kt){var Ot=kt.replace(Mi,Wi);return function(zt){return zt.getAttribute("id")===Ot}},O.find.ID=function(kt,Ot){if(typeof Ot.getElementById<"u"&&Te){var zt=Ot.getElementById(kt);return zt?[zt]:[]}}):(O.filter.ID=function(kt){var Ot=kt.replace(Mi,Wi);return function(zt){var Ht=typeof zt.getAttributeNode<"u"&&zt.getAttributeNode("id");return Ht&&Ht.value===Ot}},O.find.ID=function(kt,Ot){if(typeof Ot.getElementById<"u"&&Te){var zt,Ht,ie,we=Ot.getElementById(kt);if(we){if(zt=we.getAttributeNode("id"),zt&&zt.value===kt)return[we];for(ie=Ot.getElementsByName(kt),Ht=0;we=ie[Ht++];)if(zt=we.getAttributeNode("id"),zt&&zt.value===kt)return[we]}return[]}}),O.find.TAG=B.getElementsByTagName?function(kt,Ot){if(typeof Ot.getElementsByTagName<"u")return Ot.getElementsByTagName(kt);if(B.qsa)return Ot.querySelectorAll(kt)}:function(kt,Ot){var zt,Ht=[],ie=0,we=Ot.getElementsByTagName(kt);if(kt==="*"){for(;zt=we[ie++];)zt.nodeType===1&&Ht.push(zt);return Ht}return we},O.find.CLASS=B.getElementsByClassName&&function(kt,Ot){if(typeof Ot.getElementsByClassName<"u"&&Te)return Ot.getElementsByClassName(kt)},Bn=[],pe=[],(B.qsa=xs.test(Tt.querySelectorAll))&&(Ii(function(kt){var Ot;be.appendChild(kt).innerHTML="<a id='"+tn+"'></a><select id='"+tn+"-\r\\' msallowcapture=''><option selected=''></option></select>",kt.querySelectorAll("[msallowcapture^='']").length&&pe.push("[*^$]="+Qe+`*(?:''|"")`),kt.querySelectorAll("[selected]").length||pe.push("\\["+Qe+"*(?:value|"+Ks+")"),kt.querySelectorAll("[id~="+tn+"-]").length||pe.push("~="),Ot=Tt.createElement("input"),Ot.setAttribute("name",""),kt.appendChild(Ot),kt.querySelectorAll("[name='']").length||pe.push("\\["+Qe+"*name"+Qe+"*="+Qe+`*(?:''|"")`),kt.querySelectorAll(":checked").length||pe.push(":checked"),kt.querySelectorAll("a#"+tn+"+*").length||pe.push(".#.+[+~]"),kt.querySelectorAll("\\\f"),pe.push("[\\r\\n\\f]")}),Ii(function(kt){kt.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var Ot=Tt.createElement("input");Ot.setAttribute("type","hidden"),kt.appendChild(Ot).setAttribute("name","D"),kt.querySelectorAll("[name=d]").length&&pe.push("name"+Qe+"*[*^$|!~]?="),kt.querySelectorAll(":enabled").length!==2&&pe.push(":enabled",":disabled"),be.appendChild(kt).disabled=!0,kt.querySelectorAll(":disabled").length!==2&&pe.push(":enabled",":disabled"),kt.querySelectorAll("*,:x"),pe.push(",.*:")})),(B.matchesSelector=xs.test(_n=be.matches||be.webkitMatchesSelector||be.mozMatchesSelector||be.oMatchesSelector||be.msMatchesSelector))&&Ii(function(kt){B.disconnectedMatch=_n.call(kt,"*"),_n.call(kt,"[s!='']:x"),Bn.push("!=",As)}),pe=pe.length&&new RegExp(pe.join("|")),Bn=Bn.length&&new RegExp(Bn.join("|")),ot=xs.test(be.compareDocumentPosition),di=ot||xs.test(be.contains)?function(kt,Ot){var zt=kt.nodeType===9?kt.documentElement:kt,Ht=Ot&&Ot.parentNode;return kt===Ht||!!(Ht&&Ht.nodeType===1&&(zt.contains?zt.contains(Ht):kt.compareDocumentPosition&&kt.compareDocumentPosition(Ht)&16))}:function(kt,Ot){if(Ot){for(;Ot=Ot.parentNode;)if(Ot===kt)return!0}return!1},uo=ot?function(kt,Ot){if(kt===Ot)return Ut=!0,0;var zt=!kt.compareDocumentPosition-!Ot.compareDocumentPosition;return zt||(zt=(kt.ownerDocument||kt)==(Ot.ownerDocument||Ot)?kt.compareDocumentPosition(Ot):1,zt&1||!B.sortDetached&&Ot.compareDocumentPosition(kt)===zt?kt==Tt||kt.ownerDocument==De&&di(De,kt)?-1:Ot==Tt||Ot.ownerDocument==De&&di(De,Ot)?1:At?ho(At,kt)-ho(At,Ot):0:zt&4?-1:1)}:function(kt,Ot){if(kt===Ot)return Ut=!0,0;var zt,Ht=0,ie=kt.parentNode,we=Ot.parentNode,oe=[kt],ke=[Ot];if(!ie||!we)return kt==Tt?-1:Ot==Tt?1:ie?-1:we?1:At?ho(At,kt)-ho(At,Ot):0;if(ie===we)return Or(kt,Ot);for(zt=kt;zt=zt.parentNode;)oe.unshift(zt);for(zt=Ot;zt=zt.parentNode;)ke.unshift(zt);for(;oe[Ht]===ke[Ht];)Ht++;return Ht?Or(oe[Ht],ke[Ht]):oe[Ht]==De?-1:ke[Ht]==De?1:0}),Tt},Ze.matches=function(K,ot){return Ze(K,null,null,ot)},Ze.matchesSelector=function(K,ot){if(Ct(K),B.matchesSelector&&Te&&!ui[ot+" "]&&(!Bn||!Bn.test(ot))&&(!pe||!pe.test(ot)))try{var ft=_n.call(K,ot);if(ft||B.disconnectedMatch||K.document&&K.document.nodeType!==11)return ft}catch{ui(ot,!0)}return Ze(ot,Tt,null,[K]).length>0},Ze.contains=function(K,ot){return(K.ownerDocument||K)!=Tt&&Ct(K),di(K,ot)},Ze.attr=function(K,ot){(K.ownerDocument||K)!=Tt&&Ct(K);var ft=O.attrHandle[ot.toLowerCase()],Mt=ft&&no.call(O.attrHandle,ot.toLowerCase())?ft(K,ot,!Te):void 0;return Mt!==void 0?Mt:B.attributes||!Te?K.getAttribute(ot):(Mt=K.getAttributeNode(ot))&&Mt.specified?Mt.value:null},Ze.escape=function(K){return(K+"").replace(er,Jo)},Ze.error=function(K){throw new Error("Syntax error, unrecognized expression: "+K)},Ze.uniqueSort=function(K){var ot,ft=[],Mt=0,kt=0;if(Ut=!B.detectDuplicates,At=!B.sortStable&&K.slice(0),K.sort(uo),Ut){for(;ot=K[kt++];)ot===K[kt]&&(Mt=ft.push(kt));for(;Mt--;)K.splice(ft[Mt],1)}return At=null,K},j=Ze.getText=function(K){var ot,ft="",Mt=0,kt=K.nodeType;if(kt){if(kt===1||kt===9||kt===11){if(typeof K.textContent=="string")return K.textContent;for(K=K.firstChild;K;K=K.nextSibling)ft+=j(K)}else if(kt===3||kt===4)return K.nodeValue}else for(;ot=K[Mt++];)ft+=j(ot);return ft},O=Ze.selectors={cacheLength:50,createPseudo:xi,match:Qs,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(K){return K[1]=K[1].replace(Mi,Wi),K[3]=(K[3]||K[4]||K[5]||"").replace(Mi,Wi),K[2]==="~="&&(K[3]=" "+K[3]+" "),K.slice(0,4)},CHILD:function(K){return K[1]=K[1].toLowerCase(),K[1].slice(0,3)==="nth"?(K[3]||Ze.error(K[0]),K[4]=+(K[4]?K[5]+(K[6]||1):2*(K[3]==="even"||K[3]==="odd")),K[5]=+(K[7]+K[8]||K[3]==="odd")):K[3]&&Ze.error(K[0]),K},PSEUDO:function(K){var ot,ft=!K[6]&&K[2];return Qs.CHILD.test(K[0])?null:(K[3]?K[2]=K[4]||K[5]||"":ft&&io.test(ft)&&(ot=q(ft,!0))&&(ot=ft.indexOf(")",ft.length-ot)-ft.length)&&(K[0]=K[0].slice(0,ot),K[2]=ft.slice(0,ot)),K.slice(0,3))}},filter:{TAG:function(K){var ot=K.replace(Mi,Wi).toLowerCase();return K==="*"?function(){return!0}:function(ft){return ft.nodeName&&ft.nodeName.toLowerCase()===ot}},CLASS:function(K){var ot=yn[K+" "];return ot||(ot=new RegExp("(^|"+Qe+")"+K+"("+Qe+"|$)"))&&yn(K,function(ft){return ot.test(typeof ft.className=="string"&&ft.className||typeof ft.getAttribute<"u"&&ft.getAttribute("class")||"")})},ATTR:function(K,ot,ft){return function(Mt){var kt=Ze.attr(Mt,K);return kt==null?ot==="!=":ot?(kt+="",ot==="="?kt===ft:ot==="!="?kt!==ft:ot==="^="?ft&&kt.indexOf(ft)===0:ot==="*="?ft&&kt.indexOf(ft)>-1:ot==="$="?ft&&kt.slice(-ft.length)===ft:ot==="~="?(" "+kt.replace(ka," ")+" ").indexOf(ft)>-1:ot==="|="?kt===ft||kt.slice(0,ft.length+1)===ft+"-":!1):!0}},CHILD:function(K,ot,ft,Mt,kt){var Ot=K.slice(0,3)!=="nth",zt=K.slice(-4)!=="last",Ht=ot==="of-type";return Mt===1&&kt===0?function(ie){return!!ie.parentNode}:function(ie,we,oe){var ke,Me,Ve,_e,P,N,_=Ot!==zt?"nextSibling":"previousSibling",S=ie.parentNode,R=Ht&&ie.nodeName.toLowerCase(),Q=!oe&&!Ht,vt=!1;if(S){if(Ot){for(;_;){for(_e=ie;_e=_e[_];)if(Ht?_e.nodeName.toLowerCase()===R:_e.nodeType===1)return!1;N=_=K==="only"&&!N&&"nextSibling"}return!0}if(N=[zt?S.firstChild:S.lastChild],zt&&Q){for(_e=S,Ve=_e[tn]||(_e[tn]={}),Me=Ve[_e.uniqueID]||(Ve[_e.uniqueID]={}),ke=Me[K]||[],P=ke[0]===vn&&ke[1],vt=P&&ke[2],_e=P&&S.childNodes[P];_e=++P&&_e&&_e[_]||(vt=P=0)||N.pop();)if(_e.nodeType===1&&++vt&&_e===ie){Me[K]=[vn,P,vt];break}}else if(Q&&(_e=ie,Ve=_e[tn]||(_e[tn]={}),Me=Ve[_e.uniqueID]||(Ve[_e.uniqueID]={}),ke=Me[K]||[],P=ke[0]===vn&&ke[1],vt=P),vt===!1)for(;(_e=++P&&_e&&_e[_]||(vt=P=0)||N.pop())&&!((Ht?_e.nodeName.toLowerCase()===R:_e.nodeType===1)&&++vt&&(Q&&(Ve=_e[tn]||(_e[tn]={}),Me=Ve[_e.uniqueID]||(Ve[_e.uniqueID]={}),Me[K]=[vn,vt]),_e===ie)););return vt-=kt,vt===Mt||vt%Mt===0&&vt/Mt>=0}}},PSEUDO:function(K,ot){var ft,Mt=O.pseudos[K]||O.setFilters[K.toLowerCase()]||Ze.error("unsupported pseudo: "+K);return Mt[tn]?Mt(ot):Mt.length>1?(ft=[K,K,"",ot],O.setFilters.hasOwnProperty(K.toLowerCase())?xi(function(kt,Ot){for(var zt,Ht=Mt(kt,ot),ie=Ht.length;ie--;)zt=ho(kt,Ht[ie]),kt[zt]=!(Ot[zt]=Ht[ie])}):function(kt){return Mt(kt,0,ft)}):Mt}},pseudos:{not:xi(function(K){var ot=[],ft=[],Mt=lt(K.replace(Zo,"$1"));return Mt[tn]?xi(function(kt,Ot,zt,Ht){for(var ie,we=Mt(kt,null,Ht,[]),oe=kt.length;oe--;)(ie=we[oe])&&(kt[oe]=!(Ot[oe]=ie))}):function(kt,Ot,zt){return ot[0]=kt,Mt(ot,null,zt,ft),ot[0]=null,!ft.pop()}}),has:xi(function(K){return function(ot){return Ze(K,ot).length>0}}),contains:xi(function(K){return K=K.replace(Mi,Wi),function(ot){return(ot.textContent||j(ot)).indexOf(K)>-1}}),lang:xi(function(K){return ml.test(K||"")||Ze.error("unsupported lang: "+K),K=K.replace(Mi,Wi).toLowerCase(),function(ot){var ft;do if(ft=Te?ot.lang:ot.getAttribute("xml:lang")||ot.getAttribute("lang"))return ft=ft.toLowerCase(),ft===K||ft.indexOf(K+"-")===0;while((ot=ot.parentNode)&&ot.nodeType===1);return!1}}),target:function(K){var ot=w.location&&w.location.hash;return ot&&ot.slice(1)===K.id},root:function(K){return K===be},focus:function(K){return K===Tt.activeElement&&(!Tt.hasFocus||Tt.hasFocus())&&!!(K.type||K.href||~K.tabIndex)},enabled:or(!1),disabled:or(!0),checked:function(K){var ot=K.nodeName.toLowerCase();return ot==="input"&&!!K.checked||ot==="option"&&!!K.selected},selected:function(K){return K.parentNode&&K.parentNode.selectedIndex,K.selected===!0},empty:function(K){for(K=K.firstChild;K;K=K.nextSibling)if(K.nodeType<6)return!1;return!0},parent:function(K){return!O.pseudos.empty(K)},header:function(K){return Xs.test(K.nodeName)},input:function(K){return Js.test(K.nodeName)},button:function(K){var ot=K.nodeName.toLowerCase();return ot==="input"&&K.type==="button"||ot==="button"},text:function(K){var ot;return K.nodeName.toLowerCase()==="input"&&K.type==="text"&&((ot=K.getAttribute("type"))==null||ot.toLowerCase()==="text")},first:po(function(){return[0]}),last:po(function(K,ot){return[ot-1]}),eq:po(function(K,ot,ft){return[ft<0?ft+ot:ft]}),even:po(function(K,ot){for(var ft=0;ft<ot;ft+=2)K.push(ft);return K}),odd:po(function(K,ot){for(var ft=1;ft<ot;ft+=2)K.push(ft);return K}),lt:po(function(K,ot,ft){for(var Mt=ft<0?ft+ot:ft>ot?ot:ft;--Mt>=0;)K.push(Mt);return K}),gt:po(function(K,ot,ft){for(var Mt=ft<0?ft+ot:ft;++Mt<ot;)K.push(Mt);return K})}},O.pseudos.nth=O.pseudos.eq;for(T in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})O.pseudos[T]=_a(T);for(T in{submit:!0,reset:!0})O.pseudos[T]=va(T);function sr(){}sr.prototype=O.filters=O.pseudos,O.setFilters=new sr,q=Ze.tokenize=function(K,ot){var ft,Mt,kt,Ot,zt,Ht,ie,we=Qo[K+" "];if(we)return ot?0:we.slice(0);for(zt=K,Ht=[],ie=O.preFilter;zt;){(!ft||(Mt=pl.exec(zt)))&&(Mt&&(zt=zt.slice(Mt[0].length)||zt),Ht.push(kt=[])),ft=!1,(Mt=wa.exec(zt))&&(ft=Mt.shift(),kt.push({value:ft,type:Mt[0].replace(Zo," ")}),zt=zt.slice(ft.length));for(Ot in O.filter)(Mt=Qs[Ot].exec(zt))&&(!ie[Ot]||(Mt=ie[Ot](Mt)))&&(ft=Mt.shift(),kt.push({value:ft,type:Ot,matches:Mt}),zt=zt.slice(ft.length));if(!ft)break}return ot?zt.length:zt?Ze.error(K):Qo(K,Ht).slice(0)};function Es(K){for(var ot=0,ft=K.length,Mt="";ot<ft;ot++)Mt+=K[ot].value;return Mt}function Pi(K,ot,ft){var Mt=ot.dir,kt=ot.next,Ot=kt||Mt,zt=ft&&Ot==="parentNode",Ht=Ue++;return ot.first?function(ie,we,oe){for(;ie=ie[Mt];)if(ie.nodeType===1||zt)return K(ie,we,oe);return!1}:function(ie,we,oe){var ke,Me,Ve,_e=[vn,Ht];if(oe){for(;ie=ie[Mt];)if((ie.nodeType===1||zt)&&K(ie,we,oe))return!0}else for(;ie=ie[Mt];)if(ie.nodeType===1||zt)if(Ve=ie[tn]||(ie[tn]={}),Me=Ve[ie.uniqueID]||(Ve[ie.uniqueID]={}),kt&&kt===ie.nodeName.toLowerCase())ie=ie[Mt]||ie;else{if((ke=Me[Ot])&&ke[0]===vn&&ke[1]===Ht)return _e[2]=ke[2];if(Me[Ot]=_e,_e[2]=K(ie,we,oe))return!0}return!1}}function rr(K){return K.length>1?function(ot,ft,Mt){for(var kt=K.length;kt--;)if(!K[kt](ot,ft,Mt))return!1;return!0}:K[0]}function ya(K,ot,ft){for(var Mt=0,kt=ot.length;Mt<kt;Mt++)Ze(K,ot[Mt],ft);return ft}function qi(K,ot,ft,Mt,kt){for(var Ot,zt=[],Ht=0,ie=K.length,we=ot!=null;Ht<ie;Ht++)(Ot=K[Ht])&&(!ft||ft(Ot,Mt,kt))&&(zt.push(Ot),we&&ot.push(Ht));return zt}function oi(K,ot,ft,Mt,kt,Ot){return Mt&&!Mt[tn]&&(Mt=oi(Mt)),kt&&!kt[tn]&&(kt=oi(kt,Ot)),xi(function(zt,Ht,ie,we){var oe,ke,Me,Ve=[],_e=[],P=Ht.length,N=zt||ya(ot||"*",ie.nodeType?[ie]:ie,[]),_=K&&(zt||!ot)?qi(N,Ve,K,ie,we):N,S=ft?kt||(zt?K:P||Mt)?[]:Ht:_;if(ft&&ft(_,S,ie,we),Mt)for(oe=qi(S,_e),Mt(oe,[],ie,we),ke=oe.length;ke--;)(Me=oe[ke])&&(S[_e[ke]]=!(_[_e[ke]]=Me));if(zt){if(kt||K){if(kt){for(oe=[],ke=S.length;ke--;)(Me=S[ke])&&oe.push(_[ke]=Me);kt(null,S=[],oe,we)}for(ke=S.length;ke--;)(Me=S[ke])&&(oe=kt?ho(zt,Me):Ve[ke])>-1&&(zt[oe]=!(Ht[oe]=Me))}}else S=qi(S===Ht?S.splice(P,S.length):S),kt?kt(null,Ht,S,we):Di.apply(Ht,S)})}function fi(K){for(var ot,ft,Mt,kt=K.length,Ot=O.relative[K[0].type],zt=Ot||O.relative[" "],Ht=Ot?1:0,ie=Pi(function(ke){return ke===ot},zt,!0),we=Pi(function(ke){return ho(ot,ke)>-1},zt,!0),oe=[function(ke,Me,Ve){var _e=!Ot&&(Ve||Me!==wt)||((ot=Me).nodeType?ie(ke,Me,Ve):we(ke,Me,Ve));return ot=null,_e}];Ht<kt;Ht++)if(ft=O.relative[K[Ht].type])oe=[Pi(rr(oe),ft)];else{if(ft=O.filter[K[Ht].type].apply(null,K[Ht].matches),ft[tn]){for(Mt=++Ht;Mt<kt&&!O.relative[K[Mt].type];Mt++);return oi(Ht>1&&rr(oe),Ht>1&&Es(K.slice(0,Ht-1).concat({value:K[Ht-2].type===" "?"*":""})).replace(Zo,"$1"),ft,Ht<Mt&&fi(K.slice(Ht,Mt)),Mt<kt&&fi(K=K.slice(Mt)),Mt<kt&&Es(K))}oe.push(ft)}return rr(oe)}function ar(K,ot){var ft=ot.length>0,Mt=K.length>0,kt=function(Ot,zt,Ht,ie,we){var oe,ke,Me,Ve=0,_e="0",P=Ot&&[],N=[],_=wt,S=Ot||Mt&&O.find.TAG("*",we),R=vn+=_==null?1:Math.random()||.1,Q=S.length;for(we&&(wt=zt==Tt||zt||we);_e!==Q&&(oe=S[_e])!=null;_e++){if(Mt&&oe){for(ke=0,!zt&&oe.ownerDocument!=Tt&&(Ct(oe),Ht=!Te);Me=K[ke++];)if(Me(oe,zt||Tt,Ht)){ie.push(oe);break}we&&(vn=R)}ft&&((oe=!Me&&oe)&&Ve--,Ot&&P.push(oe))}if(Ve+=_e,ft&&_e!==Ve){for(ke=0;Me=ot[ke++];)Me(P,N,zt,Ht);if(Ot){if(Ve>0)for(;_e--;)P[_e]||N[_e]||(N[_e]=Ai.call(ie));N=qi(N)}Di.apply(ie,N),we&&!Ot&&N.length>0&&Ve+ot.length>1&&Ze.uniqueSort(ie)}return we&&(vn=R,wt=_),P};return ft?xi(kt):kt}return lt=Ze.compile=function(K,ot){var ft,Mt=[],kt=[],Ot=ys[K+" "];if(!Ot){for(ot||(ot=q(K)),ft=ot.length;ft--;)Ot=fi(ot[ft]),Ot[tn]?Mt.push(Ot):kt.push(Ot);Ot=ys(K,ar(kt,Mt)),Ot.selector=K}return Ot},it=Ze.select=function(K,ot,ft,Mt){var kt,Ot,zt,Ht,ie,we=typeof K=="function"&&K,oe=!Mt&&q(K=we.selector||K);if(ft=ft||[],oe.length===1){if(Ot=oe[0]=oe[0].slice(0),Ot.length>2&&(zt=Ot[0]).type==="ID"&&ot.nodeType===9&&Te&&O.relative[Ot[1].type]){if(ot=(O.find.ID(zt.matches[0].replace(Mi,Wi),ot)||[])[0],ot)we&&(ot=ot.parentNode);else return ft;K=K.slice(Ot.shift().value.length)}for(kt=Qs.needsContext.test(K)?0:Ot.length;kt--&&(zt=Ot[kt],!O.relative[Ht=zt.type]);)if((ie=O.find[Ht])&&(Mt=ie(zt.matches[0].replace(Mi,Wi),tr.test(Ot[0].type)&&nn(ot.parentNode)||ot))){if(Ot.splice(kt,1),K=Mt.length&&Es(Ot),!K)return Di.apply(ft,Mt),ft;break}}return(we||lt(K,oe))(Mt,ot,!Te,ft,!ot||tr.test(K)&&nn(ot.parentNode)||ot),ft},B.sortStable=tn.split("").sort(uo).join("")===tn,B.detectDuplicates=!!Ut,Ct(),B.sortDetached=Ii(function(K){return K.compareDocumentPosition(Tt.createElement("fieldset"))&1}),Ii(function(K){return K.innerHTML="<a href='#'></a>",K.firstChild.getAttribute("href")==="#"})||ir("type|href|height|width",function(K,ot,ft){if(!ft)return K.getAttribute(ot,ot.toLowerCase()==="type"?1:2)}),(!B.attributes||!Ii(function(K){return K.innerHTML="<input/>",K.firstChild.setAttribute("value",""),K.firstChild.getAttribute("value")===""}))&&ir("value",function(K,ot,ft){if(!ft&&K.nodeName.toLowerCase()==="input")return K.defaultValue}),Ii(function(K){return K.getAttribute("disabled")==null})||ir(Ks,function(K,ot,ft){var Mt;if(!ft)return K[ot]===!0?ot.toLowerCase():(Mt=K.getAttributeNode(ot))&&Mt.specified?Mt.value:null}),Ze}(n);I.find=pt,I.expr=pt.selectors,I.expr[":"]=I.expr.pseudos,I.uniqueSort=I.unique=pt.uniqueSort,I.text=pt.getText,I.isXMLDoc=pt.isXML,I.contains=pt.contains,I.escapeSelector=pt.escape;var _t=function(w,T,B){for(var O=[],j=B!==void 0;(w=w[T])&&w.nodeType!==9;)if(w.nodeType===1){if(j&&I(w).is(B))break;O.push(w)}return O},Et=function(w,T){for(var B=[];w;w=w.nextSibling)w.nodeType===1&&w!==T&&B.push(w);return B},Lt=I.expr.match.needsContext;function X(w,T){return w.nodeName&&w.nodeName.toLowerCase()===T.toLowerCase()}var Nt=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Bt(w,T,B){return H(T)?I.grep(w,function(O,j){return!!T.call(O,j,O)!==B}):T.nodeType?I.grep(w,function(O){return O===T!==B}):typeof T!="string"?I.grep(w,function(O){return p.call(T,O)>-1!==B}):I.filter(T,w,B)}I.filter=function(w,T,B){var O=T[0];return B&&(w=":not("+w+")"),T.length===1&&O.nodeType===1?I.find.matchesSelector(O,w)?[O]:[]:I.find.matches(w,I.grep(T,function(j){return j.nodeType===1}))},I.fn.extend({find:function(w){var T,B,O=this.length,j=this;if(typeof w!="string")return this.pushStack(I(w).filter(function(){for(T=0;T<O;T++)if(I.contains(j[T],this))return!0}));for(B=this.pushStack([]),T=0;T<O;T++)I.find(w,j[T],B);return O>1?I.uniqueSort(B):B},filter:function(w){return this.pushStack(Bt(this,w||[],!1))},not:function(w){return this.pushStack(Bt(this,w||[],!0))},is:function(w){return!!Bt(this,typeof w=="string"&&Lt.test(w)?I(w):w||[],!1).length}});var Xt,te=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Wt=I.fn.init=function(w,T,B){var O,j;if(!w)return this;if(B=B||Xt,typeof w=="string")if(w[0]==="<"&&w[w.length-1]===">"&&w.length>=3?O=[null,w,null]:O=te.exec(w),O&&(O[1]||!T))if(O[1]){if(T=T instanceof I?T[0]:T,I.merge(this,I.parseHTML(O[1],T&&T.nodeType?T.ownerDocument||T:U,!0)),Nt.test(O[1])&&I.isPlainObject(T))for(O in T)H(this[O])?this[O](T[O]):this.attr(O,T[O]);return this}else return j=U.getElementById(O[2]),j&&(this[0]=j,this.length=1),this;else return!T||T.jquery?(T||B).find(w):this.constructor(T).find(w);else{if(w.nodeType)return this[0]=w,this.length=1,this;if(H(w))return B.ready!==void 0?B.ready(w):w(I)}return I.makeArray(w,this)};Wt.prototype=I.fn,Xt=I(U);var Ce=/^(?:parents|prev(?:Until|All))/,hn={children:!0,contents:!0,next:!0,prev:!0};I.fn.extend({has:function(w){var T=I(w,this),B=T.length;return this.filter(function(){for(var O=0;O<B;O++)if(I.contains(this,T[O]))return!0})},closest:function(w,T){var B,O=0,j=this.length,F=[],q=typeof w!="string"&&I(w);if(!Lt.test(w)){for(;O<j;O++)for(B=this[O];B&&B!==T;B=B.parentNode)if(B.nodeType<11&&(q?q.index(B)>-1:B.nodeType===1&&I.find.matchesSelector(B,w))){F.push(B);break}}return this.pushStack(F.length>1?I.uniqueSort(F):F)},index:function(w){return w?typeof w=="string"?p.call(I(w),this[0]):p.call(this,w.jquery?w[0]:w):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(w,T){return this.pushStack(I.uniqueSort(I.merge(this.get(),I(w,T))))},addBack:function(w){return this.add(w==null?this.prevObject:this.prevObject.filter(w))}});function pn(w,T){for(;(w=w[T])&&w.nodeType!==1;);return w}I.each({parent:function(w){var T=w.parentNode;return T&&T.nodeType!==11?T:null},parents:function(w){return _t(w,"parentNode")},parentsUntil:function(w,T,B){return _t(w,"parentNode",B)},next:function(w){return pn(w,"nextSibling")},prev:function(w){return pn(w,"previousSibling")},nextAll:function(w){return _t(w,"nextSibling")},prevAll:function(w){return _t(w,"previousSibling")},nextUntil:function(w,T,B){return _t(w,"nextSibling",B)},prevUntil:function(w,T,B){return _t(w,"previousSibling",B)},siblings:function(w){return Et((w.parentNode||{}).firstChild,w)},children:function(w){return Et(w.firstChild)},contents:function(w){return w.contentDocument!=null&&c(w.contentDocument)?w.contentDocument:(X(w,"template")&&(w=w.content||w),I.merge([],w.childNodes))}},function(w,T){I.fn[w]=function(B,O){var j=I.map(this,T,B);return w.slice(-5)!=="Until"&&(O=B),O&&typeof O=="string"&&(j=I.filter(O,j)),this.length>1&&(hn[w]||I.uniqueSort(j),Ce.test(w)&&j.reverse()),this.pushStack(j)}});var Re=/[^\x20\t\r\n\f]+/g;function Je(w){var T={};return I.each(w.match(Re)||[],function(B,O){T[O]=!0}),T}I.Callbacks=function(w){w=typeof w=="string"?Je(w):I.extend({},w);var T,B,O,j,F=[],q=[],lt=-1,it=function(){for(j=j||w.once,O=T=!0;q.length;lt=-1)for(B=q.shift();++lt<F.length;)F[lt].apply(B[0],B[1])===!1&&w.stopOnFalse&&(lt=F.length,B=!1);w.memory||(B=!1),T=!1,j&&(B?F=[]:F="")},wt={add:function(){return F&&(B&&!T&&(lt=F.length-1,q.push(B)),function At(Ut){I.each(Ut,function(Ct,Tt){H(Tt)?(!w.unique||!wt.has(Tt))&&F.push(Tt):Tt&&Tt.length&&dt(Tt)!=="string"&&At(Tt)})}(arguments),B&&!T&&it()),this},remove:function(){return I.each(arguments,function(At,Ut){for(var Ct;(Ct=I.inArray(Ut,F,Ct))>-1;)F.splice(Ct,1),Ct<=lt&&lt--}),this},has:function(At){return At?I.inArray(At,F)>-1:F.length>0},empty:function(){return F&&(F=[]),this},disable:function(){return j=q=[],F=B="",this},disabled:function(){return!F},lock:function(){return j=q=[],!B&&!T&&(F=B=""),this},locked:function(){return!!j},fireWith:function(At,Ut){return j||(Ut=Ut||[],Ut=[At,Ut.slice?Ut.slice():Ut],q.push(Ut),T||it()),this},fire:function(){return wt.fireWith(this,arguments),this},fired:function(){return!!O}};return wt};function sn(w){return w}function re(w){throw w}function nt(w,T,B,O){var j;try{w&&H(j=w.promise)?j.call(w).done(T).fail(B):w&&H(j=w.then)?j.call(w,T,B):T.apply(void 0,[w].slice(O))}catch(F){B.apply(void 0,[F])}}I.extend({Deferred:function(w){var T=[["notify","progress",I.Callbacks("memory"),I.Callbacks("memory"),2],["resolve","done",I.Callbacks("once memory"),I.Callbacks("once memory"),0,"resolved"],["reject","fail",I.Callbacks("once memory"),I.Callbacks("once memory"),1,"rejected"]],B="pending",O={state:function(){return B},always:function(){return j.done(arguments).fail(arguments),this},catch:function(F){return O.then(null,F)},pipe:function(){var F=arguments;return I.Deferred(function(q){I.each(T,function(lt,it){var wt=H(F[it[4]])&&F[it[4]];j[it[1]](function(){var At=wt&&wt.apply(this,arguments);At&&H(At.promise)?At.promise().progress(q.notify).done(q.resolve).fail(q.reject):q[it[0]+"With"](this,wt?[At]:arguments)})}),F=null}).promise()},then:function(F,q,lt){var it=0;function wt(At,Ut,Ct,Tt){return function(){var be=this,Te=arguments,pe=function(){var _n,di;if(!(At<it)){if(_n=Ct.apply(be,Te),_n===Ut.promise())throw new TypeError("Thenable self-resolution");di=_n&&(typeof _n=="object"||typeof _n=="function")&&_n.then,H(di)?Tt?di.call(_n,wt(it,Ut,sn,Tt),wt(it,Ut,re,Tt)):(it++,di.call(_n,wt(it,Ut,sn,Tt),wt(it,Ut,re,Tt),wt(it,Ut,sn,Ut.notifyWith))):(Ct!==sn&&(be=void 0,Te=[_n]),(Tt||Ut.resolveWith)(be,Te))}},Bn=Tt?pe:function(){try{pe()}catch(_n){I.Deferred.exceptionHook&&I.Deferred.exceptionHook(_n,Bn.stackTrace),At+1>=it&&(Ct!==re&&(be=void 0,Te=[_n]),Ut.rejectWith(be,Te))}};At?Bn():(I.Deferred.getStackHook&&(Bn.stackTrace=I.Deferred.getStackHook()),n.setTimeout(Bn))}}return I.Deferred(function(At){T[0][3].add(wt(0,At,H(lt)?lt:sn,At.notifyWith)),T[1][3].add(wt(0,At,H(F)?F:sn)),T[2][3].add(wt(0,At,H(q)?q:re))}).promise()},promise:function(F){return F!=null?I.extend(F,O):O}},j={};return I.each(T,function(F,q){var lt=q[2],it=q[5];O[q[1]]=lt.add,it&&lt.add(function(){B=it},T[3-F][2].disable,T[3-F][3].disable,T[0][2].lock,T[0][3].lock),lt.add(q[3].fire),j[q[0]]=function(){return j[q[0]+"With"](this===j?void 0:this,arguments),this},j[q[0]+"With"]=lt.fireWith}),O.promise(j),w&&w.call(j,j),j},when:function(w){var T=arguments.length,B=T,O=Array(B),j=u.call(arguments),F=I.Deferred(),q=function(lt){return function(it){O[lt]=this,j[lt]=arguments.length>1?u.call(arguments):it,--T||F.resolveWith(O,j)}};if(T<=1&&(nt(w,F.done(q(B)).resolve,F.reject,!T),F.state()==="pending"||H(j[B]&&j[B].then)))return F.then();for(;B--;)nt(j[B],q(B),F.reject);return F.promise()}});var bt=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;I.Deferred.exceptionHook=function(w,T){n.console&&n.console.warn&&w&&bt.test(w.name)&&n.console.warn("jQuery.Deferred exception: "+w.message,w.stack,T)},I.readyException=function(w){n.setTimeout(function(){throw w})};var St=I.Deferred();I.fn.ready=function(w){return St.then(w).catch(function(T){I.readyException(T)}),this},I.extend({isReady:!1,readyWait:1,ready:function(w){(w===!0?--I.readyWait:I.isReady)||(I.isReady=!0,!(w!==!0&&--I.readyWait>0)&&St.resolveWith(U,[I]))}}),I.ready.then=St.then;function Yt(){U.removeEventListener("DOMContentLoaded",Yt),n.removeEventListener("load",Yt),I.ready()}U.readyState==="complete"||U.readyState!=="loading"&&!U.documentElement.doScroll?n.setTimeout(I.ready):(U.addEventListener("DOMContentLoaded",Yt),n.addEventListener("load",Yt));var de=function(w,T,B,O,j,F,q){var lt=0,it=w.length,wt=B==null;if(dt(B)==="object"){j=!0;for(lt in B)de(w,T,lt,B[lt],!0,F,q)}else if(O!==void 0&&(j=!0,H(O)||(q=!0),wt&&(q?(T.call(w,O),T=null):(wt=T,T=function(At,Ut,Ct){return wt.call(I(At),Ct)})),T))for(;lt<it;lt++)T(w[lt],B,q?O:O.call(w[lt],lt,T(w[lt],B)));return j?w:wt?T.call(w):it?T(w[0],B):F},ze=/^-ms-/,xe=/-([a-z])/g;function J(w,T){return T.toUpperCase()}function ut(w){return w.replace(ze,"ms-").replace(xe,J)}var xt=function(w){return w.nodeType===1||w.nodeType===9||!+w.nodeType};function Dt(){this.expando=I.expando+Dt.uid++}Dt.uid=1,Dt.prototype={cache:function(w){var T=w[this.expando];return T||(T={},xt(w)&&(w.nodeType?w[this.expando]=T:Object.defineProperty(w,this.expando,{value:T,configurable:!0}))),T},set:function(w,T,B){var O,j=this.cache(w);if(typeof T=="string")j[ut(T)]=B;else for(O in T)j[ut(O)]=T[O];return j},get:function(w,T){return T===void 0?this.cache(w):w[this.expando]&&w[this.expando][ut(T)]},access:function(w,T,B){return T===void 0||T&&typeof T=="string"&&B===void 0?this.get(w,T):(this.set(w,T,B),B!==void 0?B:T)},remove:function(w,T){var B,O=w[this.expando];if(O!==void 0){if(T!==void 0)for(Array.isArray(T)?T=T.map(ut):(T=ut(T),T=T in O?[T]:T.match(Re)||[]),B=T.length;B--;)delete O[T[B]];(T===void 0||I.isEmptyObject(O))&&(w.nodeType?w[this.expando]=void 0:delete w[this.expando])}},hasData:function(w){var T=w[this.expando];return T!==void 0&&!I.isEmptyObject(T)}};var gt=new Dt,jt=new Dt,Jt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,$t=/[A-Z]/g;function Vt(w){return w==="true"?!0:w==="false"?!1:w==="null"?null:w===+w+""?+w:Jt.test(w)?JSON.parse(w):w}function Pt(w,T,B){var O;if(B===void 0&&w.nodeType===1)if(O="data-"+T.replace($t,"-$&").toLowerCase(),B=w.getAttribute(O),typeof B=="string"){try{B=Vt(B)}catch{}jt.set(w,T,B)}else B=void 0;return B}I.extend({hasData:function(w){return jt.hasData(w)||gt.hasData(w)},data:function(w,T,B){return jt.access(w,T,B)},removeData:function(w,T){jt.remove(w,T)},_data:function(w,T,B){return gt.access(w,T,B)},_removeData:function(w,T){gt.remove(w,T)}}),I.fn.extend({data:function(w,T){var B,O,j,F=this[0],q=F&&F.attributes;if(w===void 0){if(this.length&&(j=jt.get(F),F.nodeType===1&&!gt.get(F,"hasDataAttrs"))){for(B=q.length;B--;)q[B]&&(O=q[B].name,O.indexOf("data-")===0&&(O=ut(O.slice(5)),Pt(F,O,j[O])));gt.set(F,"hasDataAttrs",!0)}return j}return typeof w=="object"?this.each(function(){jt.set(this,w)}):de(this,function(lt){var it;if(F&&lt===void 0)return it=jt.get(F,w),it!==void 0||(it=Pt(F,w),it!==void 0)?it:void 0;this.each(function(){jt.set(this,w,lt)})},null,T,arguments.length>1,null,!0)},removeData:function(w){return this.each(function(){jt.remove(this,w)})}}),I.extend({queue:function(w,T,B){var O;if(w)return T=(T||"fx")+"queue",O=gt.get(w,T),B&&(!O||Array.isArray(B)?O=gt.access(w,T,I.makeArray(B)):O.push(B)),O||[]},dequeue:function(w,T){T=T||"fx";var B=I.queue(w,T),O=B.length,j=B.shift(),F=I._queueHooks(w,T),q=function(){I.dequeue(w,T)};j==="inprogress"&&(j=B.shift(),O--),j&&(T==="fx"&&B.unshift("inprogress"),delete F.stop,j.call(w,q,F)),!O&&F&&F.empty.fire()},_queueHooks:function(w,T){var B=T+"queueHooks";return gt.get(w,B)||gt.access(w,B,{empty:I.Callbacks("once memory").add(function(){gt.remove(w,[T+"queue",B])})})}}),I.fn.extend({queue:function(w,T){var B=2;return typeof w!="string"&&(T=w,w="fx",B--),arguments.length<B?I.queue(this[0],w):T===void 0?this:this.each(function(){var O=I.queue(this,w,T);I._queueHooks(this,w),w==="fx"&&O[0]!=="inprogress"&&I.dequeue(this,w)})},dequeue:function(w){return this.each(function(){I.dequeue(this,w)})},clearQueue:function(w){return this.queue(w||"fx",[])},promise:function(w,T){var B,O=1,j=I.Deferred(),F=this,q=this.length,lt=function(){--O||j.resolveWith(F,[F])};for(typeof w!="string"&&(T=w,w=void 0),w=w||"fx";q--;)B=gt.get(F[q],w+"queueHooks"),B&&B.empty&&(O++,B.empty.add(lt));return lt(),j.promise(T)}});var ce=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ae=new RegExp("^(?:([+-])=|)("+ce+")([a-z%]*)$","i"),Gt=["Top","Right","Bottom","Left"],he=U.documentElement,ee=function(w){return I.contains(w.ownerDocument,w)},Ie={composed:!0};he.getRootNode&&(ee=function(w){return I.contains(w.ownerDocument,w)||w.getRootNode(Ie)===w.ownerDocument});var Se=function(w,T){return w=T||w,w.style.display==="none"||w.style.display===""&&ee(w)&&I.css(w,"display")==="none"};function rn(w,T,B,O){var j,F,q=20,lt=O?function(){return O.cur()}:function(){return I.css(w,T,"")},it=lt(),wt=B&&B[3]||(I.cssNumber[T]?"":"px"),At=w.nodeType&&(I.cssNumber[T]||wt!=="px"&&+it)&&ae.exec(I.css(w,T));if(At&&At[3]!==wt){for(it=it/2,wt=wt||At[3],At=+it||1;q--;)I.style(w,T,At+wt),(1-F)*(1-(F=lt()/it||.5))<=0&&(q=0),At=At/F;At=At*2,I.style(w,T,At+wt),B=B||[]}return B&&(At=+At||+it||0,j=B[1]?At+(B[1]+1)*B[2]:+B[2],O&&(O.unit=wt,O.start=At,O.end=j)),j}var Xe={};function ge(w){var T,B=w.ownerDocument,O=w.nodeName,j=Xe[O];return j||(T=B.body.appendChild(B.createElement(O)),j=I.css(T,"display"),T.parentNode.removeChild(T),j==="none"&&(j="block"),Xe[O]=j,j)}function $i(w,T){for(var B,O,j=[],F=0,q=w.length;F<q;F++)O=w[F],O.style&&(B=O.style.display,T?(B==="none"&&(j[F]=gt.get(O,"display")||null,j[F]||(O.style.display="")),O.style.display===""&&Se(O)&&(j[F]=ge(O))):B!=="none"&&(j[F]="none",gt.set(O,"display",B)));for(F=0;F<q;F++)j[F]!=null&&(w[F].style.display=j[F]);return w}I.fn.extend({show:function(){return $i(this,!0)},hide:function(){return $i(this)},toggle:function(w){return typeof w=="boolean"?w?this.show():this.hide():this.each(function(){Se(this)?I(this).show():I(this).hide()})}});var li=/^(?:checkbox|radio)$/i,Gn=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,ii=/^$|^module$|\/(?:java|ecma)script/i;(function(){var w=U.createDocumentFragment(),T=w.appendChild(U.createElement("div")),B=U.createElement("input");B.setAttribute("type","radio"),B.setAttribute("checked","checked"),B.setAttribute("name","t"),T.appendChild(B),z.checkClone=T.cloneNode(!0).cloneNode(!0).lastChild.checked,T.innerHTML="<textarea>x</textarea>",z.noCloneChecked=!!T.cloneNode(!0).lastChild.defaultValue,T.innerHTML="<option></option>",z.option=!!T.lastChild})();var mn={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};mn.tbody=mn.tfoot=mn.colgroup=mn.caption=mn.thead,mn.th=mn.td,z.option||(mn.optgroup=mn.option=[1,"<select multiple='multiple'>","</select>"]);function bn(w,T){var B;return typeof w.getElementsByTagName<"u"?B=w.getElementsByTagName(T||"*"):typeof w.querySelectorAll<"u"?B=w.querySelectorAll(T||"*"):B=[],T===void 0||T&&X(w,T)?I.merge([w],B):B}function jo(w,T){for(var B=0,O=w.length;B<O;B++)gt.set(w[B],"globalEval",!T||gt.get(T[B],"globalEval"))}var $s=/<|&#?\w+;/;function Cr(w,T,B,O,j){for(var F,q,lt,it,wt,At,Ut=T.createDocumentFragment(),Ct=[],Tt=0,be=w.length;Tt<be;Tt++)if(F=w[Tt],F||F===0)if(dt(F)==="object")I.merge(Ct,F.nodeType?[F]:F);else if(!$s.test(F))Ct.push(T.createTextNode(F));else{for(q=q||Ut.appendChild(T.createElement("div")),lt=(Gn.exec(F)||["",""])[1].toLowerCase(),it=mn[lt]||mn._default,q.innerHTML=it[1]+I.htmlPrefilter(F)+it[2],At=it[0];At--;)q=q.lastChild;I.merge(Ct,q.childNodes),q=Ut.firstChild,q.textContent=""}for(Ut.textContent="",Tt=0;F=Ct[Tt++];){if(O&&I.inArray(F,O)>-1){j&&j.push(F);continue}if(wt=ee(F),q=bn(Ut.appendChild(F),"script"),wt&&jo(q),B)for(At=0;F=q[At++];)ii.test(F.type||"")&&B.push(F)}return Ut}var Vs=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function to(){return!1}function nl(w,T){return w===vi()==(T==="focus")}function vi(){try{return U.activeElement}catch{}}function so(w,T,B,O,j,F){var q,lt;if(typeof T=="object"){typeof B!="string"&&(O=O||B,B=void 0);for(lt in T)so(w,lt,B,O,T[lt],F);return w}if(O==null&&j==null?(j=B,O=B=void 0):j==null&&(typeof B=="string"?(j=O,O=void 0):(j=O,O=B,B=void 0)),j===!1)j=to;else if(!j)return w;return F===1&&(q=j,j=function(it){return I().off(it),q.apply(this,arguments)},j.guid=q.guid||(q.guid=I.guid++)),w.each(function(){I.event.add(this,T,j,O,B)})}I.event={global:{},add:function(w,T,B,O,j){var F,q,lt,it,wt,At,Ut,Ct,Tt,be,Te,pe=gt.get(w);if(!!xt(w))for(B.handler&&(F=B,B=F.handler,j=F.selector),j&&I.find.matchesSelector(he,j),B.guid||(B.guid=I.guid++),(it=pe.events)||(it=pe.events=Object.create(null)),(q=pe.handle)||(q=pe.handle=function(Bn){return typeof I<"u"&&I.event.triggered!==Bn.type?I.event.dispatch.apply(w,arguments):void 0}),T=(T||"").match(Re)||[""],wt=T.length;wt--;)lt=Vs.exec(T[wt])||[],Tt=Te=lt[1],be=(lt[2]||"").split(".").sort(),Tt&&(Ut=I.event.special[Tt]||{},Tt=(j?Ut.delegateType:Ut.bindType)||Tt,Ut=I.event.special[Tt]||{},At=I.extend({type:Tt,origType:Te,data:O,handler:B,guid:B.guid,selector:j,needsContext:j&&I.expr.match.needsContext.test(j),namespace:be.join(".")},F),(Ct=it[Tt])||(Ct=it[Tt]=[],Ct.delegateCount=0,(!Ut.setup||Ut.setup.call(w,O,be,q)===!1)&&w.addEventListener&&w.addEventListener(Tt,q)),Ut.add&&(Ut.add.call(w,At),At.handler.guid||(At.handler.guid=B.guid)),j?Ct.splice(Ct.delegateCount++,0,At):Ct.push(At),I.event.global[Tt]=!0)},remove:function(w,T,B,O,j){var F,q,lt,it,wt,At,Ut,Ct,Tt,be,Te,pe=gt.hasData(w)&&gt.get(w);if(!(!pe||!(it=pe.events))){for(T=(T||"").match(Re)||[""],wt=T.length;wt--;){if(lt=Vs.exec(T[wt])||[],Tt=Te=lt[1],be=(lt[2]||"").split(".").sort(),!Tt){for(Tt in it)I.event.remove(w,Tt+T[wt],B,O,!0);continue}for(Ut=I.event.special[Tt]||{},Tt=(O?Ut.delegateType:Ut.bindType)||Tt,Ct=it[Tt]||[],lt=lt[2]&&new RegExp("(^|\\.)"+be.join("\\.(?:.*\\.|)")+"(\\.|$)"),q=F=Ct.length;F--;)At=Ct[F],(j||Te===At.origType)&&(!B||B.guid===At.guid)&&(!lt||lt.test(At.namespace))&&(!O||O===At.selector||O==="**"&&At.selector)&&(Ct.splice(F,1),At.selector&&Ct.delegateCount--,Ut.remove&&Ut.remove.call(w,At));q&&!Ct.length&&((!Ut.teardown||Ut.teardown.call(w,be,pe.handle)===!1)&&I.removeEvent(w,Tt,pe.handle),delete it[Tt])}I.isEmptyObject(it)&&gt.remove(w,"handle events")}},dispatch:function(w){var T,B,O,j,F,q,lt=new Array(arguments.length),it=I.event.fix(w),wt=(gt.get(this,"events")||Object.create(null))[it.type]||[],At=I.event.special[it.type]||{};for(lt[0]=it,T=1;T<arguments.length;T++)lt[T]=arguments[T];if(it.delegateTarget=this,!(At.preDispatch&&At.preDispatch.call(this,it)===!1)){for(q=I.event.handlers.call(this,it,wt),T=0;(j=q[T++])&&!it.isPropagationStopped();)for(it.currentTarget=j.elem,B=0;(F=j.handlers[B++])&&!it.isImmediatePropagationStopped();)(!it.rnamespace||F.namespace===!1||it.rnamespace.test(F.namespace))&&(it.handleObj=F,it.data=F.data,O=((I.event.special[F.origType]||{}).handle||F.handler).apply(j.elem,lt),O!==void 0&&(it.result=O)===!1&&(it.preventDefault(),it.stopPropagation()));return At.postDispatch&&At.postDispatch.call(this,it),it.result}},handlers:function(w,T){var B,O,j,F,q,lt=[],it=T.delegateCount,wt=w.target;if(it&&wt.nodeType&&!(w.type==="click"&&w.button>=1)){for(;wt!==this;wt=wt.parentNode||this)if(wt.nodeType===1&&!(w.type==="click"&&wt.disabled===!0)){for(F=[],q={},B=0;B<it;B++)O=T[B],j=O.selector+" ",q[j]===void 0&&(q[j]=O.needsContext?I(j,this).index(wt)>-1:I.find(j,this,null,[wt]).length),q[j]&&F.push(O);F.length&&lt.push({elem:wt,handlers:F})}}return wt=this,it<T.length&&lt.push({elem:wt,handlers:T.slice(it)}),lt},addProp:function(w,T){Object.defineProperty(I.Event.prototype,w,{enumerable:!0,configurable:!0,get:H(T)?function(){if(this.originalEvent)return T(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[w]},set:function(B){Object.defineProperty(this,w,{enumerable:!0,configurable:!0,writable:!0,value:B})}})},fix:function(w){return w[I.expando]?w:new I.Event(w)},special:{load:{noBubble:!0},click:{setup:function(w){var T=this||w;return li.test(T.type)&&T.click&&X(T,"input")&&Ti(T,"click",Ee),!1},trigger:function(w){var T=this||w;return li.test(T.type)&&T.click&&X(T,"input")&&Ti(T,"click"),!0},_default:function(w){var T=w.target;return li.test(T.type)&&T.click&&X(T,"input")&&gt.get(T,"click")||X(T,"a")}},beforeunload:{postDispatch:function(w){w.result!==void 0&&w.originalEvent&&(w.originalEvent.returnValue=w.result)}}}};function Ti(w,T,B){if(!B){gt.get(w,T)===void 0&&I.event.add(w,T,Ee);return}gt.set(w,T,!1),I.event.add(w,T,{namespace:!1,handler:function(O){var j,F,q=gt.get(this,T);if(O.isTrigger&1&&this[T]){if(q.length)(I.event.special[T]||{}).delegateType&&O.stopPropagation();else if(q=u.call(arguments),gt.set(this,T,q),j=B(this,T),this[T](),F=gt.get(this,T),q!==F||j?gt.set(this,T,!1):F={},q!==F)return O.stopImmediatePropagation(),O.preventDefault(),F&&F.value}else q.length&&(gt.set(this,T,{value:I.event.trigger(I.extend(q[0],I.Event.prototype),q.slice(1),this)}),O.stopImmediatePropagation())}})}I.removeEvent=function(w,T,B){w.removeEventListener&&w.removeEventListener(T,B)},I.Event=function(w,T){if(!(this instanceof I.Event))return new I.Event(w,T);w&&w.type?(this.originalEvent=w,this.type=w.type,this.isDefaultPrevented=w.defaultPrevented||w.defaultPrevented===void 0&&w.returnValue===!1?Ee:to,this.target=w.target&&w.target.nodeType===3?w.target.parentNode:w.target,this.currentTarget=w.currentTarget,this.relatedTarget=w.relatedTarget):this.type=w,T&&I.extend(this,T),this.timeStamp=w&&w.timeStamp||Date.now(),this[I.expando]=!0},I.Event.prototype={constructor:I.Event,isDefaultPrevented:to,isPropagationStopped:to,isImmediatePropagationStopped:to,isSimulated:!1,preventDefault:function(){var w=this.originalEvent;this.isDefaultPrevented=Ee,w&&!this.isSimulated&&w.preventDefault()},stopPropagation:function(){var w=this.originalEvent;this.isPropagationStopped=Ee,w&&!this.isSimulated&&w.stopPropagation()},stopImmediatePropagation:function(){var w=this.originalEvent;this.isImmediatePropagationStopped=Ee,w&&!this.isSimulated&&w.stopImmediatePropagation(),this.stopPropagation()}},I.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},I.event.addProp),I.each({focus:"focusin",blur:"focusout"},function(w,T){I.event.special[w]={setup:function(){return Ti(this,w,nl),!1},trigger:function(){return Ti(this,w),!0},_default:function(B){return gt.get(B.target,w)},delegateType:T}}),I.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(w,T){I.event.special[w]={delegateType:T,bindType:T,handle:function(B){var O,j=this,F=B.relatedTarget,q=B.handleObj;return(!F||F!==j&&!I.contains(j,F))&&(B.type=q.origType,O=q.handler.apply(this,arguments),B.type=T),O}}}),I.fn.extend({on:function(w,T,B,O){return so(this,w,T,B,O)},one:function(w,T,B,O){return so(this,w,T,B,O,1)},off:function(w,T,B){var O,j;if(w&&w.preventDefault&&w.handleObj)return O=w.handleObj,I(w.delegateTarget).off(O.namespace?O.origType+"."+O.namespace:O.origType,O.selector,O.handler),this;if(typeof w=="object"){for(j in w)this.off(j,T,w[j]);return this}return(T===!1||typeof T=="function")&&(B=T,T=void 0),B===!1&&(B=to),this.each(function(){I.event.remove(this,w,B,T)})}});var il=/<script|<style|<link/i,ol=/checked\s*(?:[^=]|=\s*.checked.)/i,Ar=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Vn(w,T){return X(w,"table")&&X(T.nodeType!==11?T:T.firstChild,"tr")&&I(w).children("tbody")[0]||w}function sl(w){return w.type=(w.getAttribute("type")!==null)+"/"+w.type,w}function Hs(w){return(w.type||"").slice(0,5)==="true/"?w.type=w.type.slice(5):w.removeAttribute("type"),w}function xr(w,T){var B,O,j,F,q,lt,it;if(T.nodeType===1){if(gt.hasData(w)&&(F=gt.get(w),it=F.events,it)){gt.remove(T,"handle events");for(j in it)for(B=0,O=it[j].length;B<O;B++)I.event.add(T,j,it[j][B])}jt.hasData(w)&&(q=jt.access(w),lt=I.extend({},q),jt.set(T,lt))}}function ra(w,T){var B=T.nodeName.toLowerCase();B==="input"&&li.test(w.type)?T.checked=w.checked:(B==="input"||B==="textarea")&&(T.defaultValue=w.defaultValue)}function ci(w,T,B,O){T=f(T);var j,F,q,lt,it,wt,At=0,Ut=w.length,Ct=Ut-1,Tt=T[0],be=H(Tt);if(be||Ut>1&&typeof Tt=="string"&&!z.checkClone&&ol.test(Tt))return w.each(function(Te){var pe=w.eq(Te);be&&(T[0]=Tt.call(this,Te,pe.html())),ci(pe,T,B,O)});if(Ut&&(j=Cr(T,w[0].ownerDocument,!1,w,O),F=j.firstChild,j.childNodes.length===1&&(j=F),F||O)){for(q=I.map(bn(j,"script"),sl),lt=q.length;At<Ut;At++)it=j,At!==Ct&&(it=I.clone(it,!0,!0),lt&&I.merge(q,bn(it,"script"))),B.call(w[At],it,At);if(lt)for(wt=q[q.length-1].ownerDocument,I.map(q,Hs),At=0;At<lt;At++)it=q[At],ii.test(it.type||"")&&!gt.access(it,"globalEval")&&I.contains(wt,it)&&(it.src&&(it.type||"").toLowerCase()!=="module"?I._evalUrl&&!it.noModule&&I._evalUrl(it.src,{nonce:it.nonce||it.getAttribute("nonce")},wt):tt(it.textContent.replace(Ar,""),it,wt))}return w}function fn(w,T,B){for(var O,j=T?I.filter(T,w):w,F=0;(O=j[F])!=null;F++)!B&&O.nodeType===1&&I.cleanData(bn(O)),O.parentNode&&(B&&ee(O)&&jo(bn(O,"script")),O.parentNode.removeChild(O));return w}I.extend({htmlPrefilter:function(w){return w},clone:function(w,T,B){var O,j,F,q,lt=w.cloneNode(!0),it=ee(w);if(!z.noCloneChecked&&(w.nodeType===1||w.nodeType===11)&&!I.isXMLDoc(w))for(q=bn(lt),F=bn(w),O=0,j=F.length;O<j;O++)ra(F[O],q[O]);if(T)if(B)for(F=F||bn(w),q=q||bn(lt),O=0,j=F.length;O<j;O++)xr(F[O],q[O]);else xr(w,lt);return q=bn(lt,"script"),q.length>0&&jo(q,!it&&bn(w,"script")),lt},cleanData:function(w){for(var T,B,O,j=I.event.special,F=0;(B=w[F])!==void 0;F++)if(xt(B)){if(T=B[gt.expando]){if(T.events)for(O in T.events)j[O]?I.event.remove(B,O):I.removeEvent(B,O,T.handle);B[gt.expando]=void 0}B[jt.expando]&&(B[jt.expando]=void 0)}}}),I.fn.extend({detach:function(w){return fn(this,w,!0)},remove:function(w){return fn(this,w)},text:function(w){return de(this,function(T){return T===void 0?I.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=T)})},null,w,arguments.length)},append:function(){return ci(this,arguments,function(w){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var T=Vn(this,w);T.appendChild(w)}})},prepend:function(){return ci(this,arguments,function(w){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var T=Vn(this,w);T.insertBefore(w,T.firstChild)}})},before:function(){return ci(this,arguments,function(w){this.parentNode&&this.parentNode.insertBefore(w,this)})},after:function(){return ci(this,arguments,function(w){this.parentNode&&this.parentNode.insertBefore(w,this.nextSibling)})},empty:function(){for(var w,T=0;(w=this[T])!=null;T++)w.nodeType===1&&(I.cleanData(bn(w,!1)),w.textContent="");return this},clone:function(w,T){return w=w==null?!1:w,T=T==null?w:T,this.map(function(){return I.clone(this,w,T)})},html:function(w){return de(this,function(T){var B=this[0]||{},O=0,j=this.length;if(T===void 0&&B.nodeType===1)return B.innerHTML;if(typeof T=="string"&&!il.test(T)&&!mn[(Gn.exec(T)||["",""])[1].toLowerCase()]){T=I.htmlPrefilter(T);try{for(;O<j;O++)B=this[O]||{},B.nodeType===1&&(I.cleanData(bn(B,!1)),B.innerHTML=T);B=0}catch{}}B&&this.empty().append(T)},null,w,arguments.length)},replaceWith:function(){var w=[];return ci(this,arguments,function(T){var B=this.parentNode;I.inArray(this,w)<0&&(I.cleanData(bn(this)),B&&B.replaceChild(T,this))},w)}}),I.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(w,T){I.fn[w]=function(B){for(var O,j=[],F=I(B),q=F.length-1,lt=0;lt<=q;lt++)O=lt===q?this:this.clone(!0),I(F[lt])[T](O),g.apply(j,O.get());return this.pushStack(j)}});var Er=new RegExp("^("+ce+")(?!px)[a-z%]+$","i"),bs=/^--/,ks=function(w){var T=w.ownerDocument.defaultView;return(!T||!T.opener)&&(T=n),T.getComputedStyle(w)},ro=function(w,T,B){var O,j,F={};for(j in T)F[j]=w.style[j],w.style[j]=T[j];O=B.call(w);for(j in T)w.style[j]=F[j];return O},Sr=new RegExp(Gt.join("|"),"i"),eo="[\\x20\\t\\r\\n\\f]",Fo=new RegExp("^"+eo+"+|((?:^|[^\\\\])(?:\\\\.)*)"+eo+"+$","g");(function(){function w(){if(!!wt){it.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",wt.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",he.appendChild(it).appendChild(wt);var At=n.getComputedStyle(wt);B=At.top!=="1%",lt=T(At.marginLeft)===12,wt.style.right="60%",F=T(At.right)===36,O=T(At.width)===36,wt.style.position="absolute",j=T(wt.offsetWidth/3)===12,he.removeChild(it),wt=null}}function T(At){return Math.round(parseFloat(At))}var B,O,j,F,q,lt,it=U.createElement("div"),wt=U.createElement("div");!wt.style||(wt.style.backgroundClip="content-box",wt.cloneNode(!0).style.backgroundClip="",z.clearCloneStyle=wt.style.backgroundClip==="content-box",I.extend(z,{boxSizingReliable:function(){return w(),O},pixelBoxStyles:function(){return w(),F},pixelPosition:function(){return w(),B},reliableMarginLeft:function(){return w(),lt},scrollboxSize:function(){return w(),j},reliableTrDimensions:function(){var At,Ut,Ct,Tt;return q==null&&(At=U.createElement("table"),Ut=U.createElement("tr"),Ct=U.createElement("div"),At.style.cssText="position:absolute;left:-11111px;border-collapse:separate",Ut.style.cssText="border:1px solid",Ut.style.height="1px",Ct.style.height="9px",Ct.style.display="block",he.appendChild(At).appendChild(Ut).appendChild(Ct),Tt=n.getComputedStyle(Ut),q=parseInt(Tt.height,10)+parseInt(Tt.borderTopWidth,10)+parseInt(Tt.borderBottomWidth,10)===Ut.offsetHeight,he.removeChild(At)),q}}))})();function ao(w,T,B){var O,j,F,q,lt=bs.test(T),it=w.style;return B=B||ks(w),B&&(q=B.getPropertyValue(T)||B[T],lt&&(q=q.replace(Fo,"$1")),q===""&&!ee(w)&&(q=I.style(w,T)),!z.pixelBoxStyles()&&Er.test(q)&&Sr.test(T)&&(O=it.width,j=it.minWidth,F=it.maxWidth,it.minWidth=it.maxWidth=it.width=q,q=B.width,it.width=O,it.minWidth=j,it.maxWidth=F)),q!==void 0?q+"":q}function Pe(w,T){return{get:function(){if(w()){delete this.get;return}return(this.get=T).apply(this,arguments)}}}var Xn=["Webkit","Moz","ms"],aa=U.createElement("div").style,Us={};function rl(w){for(var T=w[0].toUpperCase()+w.slice(1),B=Xn.length;B--;)if(w=Xn[B]+T,w in aa)return w}function Ws(w){var T=I.cssProps[w]||Us[w];return T||(w in aa?w:Us[w]=rl(w)||w)}var al=/^(none|table(?!-c[ea]).+)/,lo={position:"absolute",visibility:"hidden",display:"block"},Vi={letterSpacing:"0",fontWeight:"400"};function xo(w,T,B){var O=ae.exec(T);return O?Math.max(0,O[2]-(B||0))+(O[3]||"px"):T}function jn(w,T,B,O,j,F){var q=T==="width"?1:0,lt=0,it=0;if(B===(O?"border":"content"))return 0;for(;q<4;q+=2)B==="margin"&&(it+=I.css(w,B+Gt[q],!0,j)),O?(B==="content"&&(it-=I.css(w,"padding"+Gt[q],!0,j)),B!=="margin"&&(it-=I.css(w,"border"+Gt[q]+"Width",!0,j))):(it+=I.css(w,"padding"+Gt[q],!0,j),B!=="padding"?it+=I.css(w,"border"+Gt[q]+"Width",!0,j):lt+=I.css(w,"border"+Gt[q]+"Width",!0,j));return!O&&F>=0&&(it+=Math.max(0,Math.ceil(w["offset"+T[0].toUpperCase()+T.slice(1)]-F-it-lt-.5))||0),it}function $o(w,T,B){var O=ks(w),j=!z.boxSizingReliable()||B,F=j&&I.css(w,"boxSizing",!1,O)==="border-box",q=F,lt=ao(w,T,O),it="offset"+T[0].toUpperCase()+T.slice(1);if(Er.test(lt)){if(!B)return lt;lt="auto"}return(!z.boxSizingReliable()&&F||!z.reliableTrDimensions()&&X(w,"tr")||lt==="auto"||!parseFloat(lt)&&I.css(w,"display",!1,O)==="inline")&&w.getClientRects().length&&(F=I.css(w,"boxSizing",!1,O)==="border-box",q=it in w,q&&(lt=w[it])),lt=parseFloat(lt)||0,lt+jn(w,T,B||(F?"border":"content"),q,O,lt)+"px"}I.extend({cssHooks:{opacity:{get:function(w,T){if(T){var B=ao(w,"opacity");return B===""?"1":B}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(w,T,B,O){if(!(!w||w.nodeType===3||w.nodeType===8||!w.style)){var j,F,q,lt=ut(T),it=bs.test(T),wt=w.style;if(it||(T=Ws(lt)),q=I.cssHooks[T]||I.cssHooks[lt],B!==void 0){if(F=typeof B,F==="string"&&(j=ae.exec(B))&&j[1]&&(B=rn(w,T,j),F="number"),B==null||B!==B)return;F==="number"&&!it&&(B+=j&&j[3]||(I.cssNumber[lt]?"":"px")),!z.clearCloneStyle&&B===""&&T.indexOf("background")===0&&(wt[T]="inherit"),(!q||!("set"in q)||(B=q.set(w,B,O))!==void 0)&&(it?wt.setProperty(T,B):wt[T]=B)}else return q&&"get"in q&&(j=q.get(w,!1,O))!==void 0?j:wt[T]}},css:function(w,T,B,O){var j,F,q,lt=ut(T),it=bs.test(T);return it||(T=Ws(lt)),q=I.cssHooks[T]||I.cssHooks[lt],q&&"get"in q&&(j=q.get(w,!0,B)),j===void 0&&(j=ao(w,T,O)),j==="normal"&&T in Vi&&(j=Vi[T]),B===""||B?(F=parseFloat(j),B===!0||isFinite(F)?F||0:j):j}}),I.each(["height","width"],function(w,T){I.cssHooks[T]={get:function(B,O,j){if(O)return al.test(I.css(B,"display"))&&(!B.getClientRects().length||!B.getBoundingClientRect().width)?ro(B,lo,function(){return $o(B,T,j)}):$o(B,T,j)},set:function(B,O,j){var F,q=ks(B),lt=!z.scrollboxSize()&&q.position==="absolute",it=lt||j,wt=it&&I.css(B,"boxSizing",!1,q)==="border-box",At=j?jn(B,T,j,wt,q):0;return wt&&lt&&(At-=Math.ceil(B["offset"+T[0].toUpperCase()+T.slice(1)]-parseFloat(q[T])-jn(B,T,"border",!1,q)-.5)),At&&(F=ae.exec(O))&&(F[3]||"px")!=="px"&&(B.style[T]=O,O=I.css(B,T)),xo(B,O,At)}}}),I.cssHooks.marginLeft=Pe(z.reliableMarginLeft,function(w,T){if(T)return(parseFloat(ao(w,"marginLeft"))||w.getBoundingClientRect().left-ro(w,{marginLeft:0},function(){return w.getBoundingClientRect().left}))+"px"}),I.each({margin:"",padding:"",border:"Width"},function(w,T){I.cssHooks[w+T]={expand:function(B){for(var O=0,j={},F=typeof B=="string"?B.split(" "):[B];O<4;O++)j[w+Gt[O]+T]=F[O]||F[O-2]||F[0];return j}},w!=="margin"&&(I.cssHooks[w+T].set=xo)}),I.fn.extend({css:function(w,T){return de(this,function(B,O,j){var F,q,lt={},it=0;if(Array.isArray(O)){for(F=ks(B),q=O.length;it<q;it++)lt[O[it]]=I.css(B,O[it],!1,F);return lt}return j!==void 0?I.style(B,O,j):I.css(B,O)},w,T,arguments.length>1)}});function Fn(w,T,B,O,j){return new Fn.prototype.init(w,T,B,O,j)}I.Tween=Fn,Fn.prototype={constructor:Fn,init:function(w,T,B,O,j,F){this.elem=w,this.prop=B,this.easing=j||I.easing._default,this.options=T,this.start=this.now=this.cur(),this.end=O,this.unit=F||(I.cssNumber[B]?"":"px")},cur:function(){var w=Fn.propHooks[this.prop];return w&&w.get?w.get(this):Fn.propHooks._default.get(this)},run:function(w){var T,B=Fn.propHooks[this.prop];return this.options.duration?this.pos=T=I.easing[this.easing](w,this.options.duration*w,0,1,this.options.duration):this.pos=T=w,this.now=(this.end-this.start)*T+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),B&&B.set?B.set(this):Fn.propHooks._default.set(this),this}},Fn.prototype.init.prototype=Fn.prototype,Fn.propHooks={_default:{get:function(w){var T;return w.elem.nodeType!==1||w.elem[w.prop]!=null&&w.elem.style[w.prop]==null?w.elem[w.prop]:(T=I.css(w.elem,w.prop,""),!T||T==="auto"?0:T)},set:function(w){I.fx.step[w.prop]?I.fx.step[w.prop](w):w.elem.nodeType===1&&(I.cssHooks[w.prop]||w.elem.style[Ws(w.prop)]!=null)?I.style(w.elem,w.prop,w.now+w.unit):w.elem[w.prop]=w.now}}},Fn.propHooks.scrollTop=Fn.propHooks.scrollLeft={set:function(w){w.elem.nodeType&&w.elem.parentNode&&(w.elem[w.prop]=w.now)}},I.easing={linear:function(w){return w},swing:function(w){return .5-Math.cos(w*Math.PI)/2},_default:"swing"},I.fx=Fn.prototype.init,I.fx.step={};var Eo,Vo,an=/^(?:toggle|show|hide)$/,la=/queueHooks$/;function Tr(){Vo&&(U.hidden===!1&&n.requestAnimationFrame?n.requestAnimationFrame(Tr):n.setTimeout(Tr,I.fx.interval),I.fx.tick())}function ca(){return n.setTimeout(function(){Eo=void 0}),Eo=Date.now()}function So(w,T){var B,O=0,j={height:w};for(T=T?1:0;O<4;O+=2-T)B=Gt[O],j["margin"+B]=j["padding"+B]=w;return T&&(j.opacity=j.width=w),j}function qs(w,T,B){for(var O,j=(yi.tweeners[T]||[]).concat(yi.tweeners["*"]),F=0,q=j.length;F<q;F++)if(O=j[F].call(B,T,w))return O}function Ae(w,T,B){var O,j,F,q,lt,it,wt,At,Ut="width"in T||"height"in T,Ct=this,Tt={},be=w.style,Te=w.nodeType&&Se(w),pe=gt.get(w,"fxshow");B.queue||(q=I._queueHooks(w,"fx"),q.unqueued==null&&(q.unqueued=0,lt=q.empty.fire,q.empty.fire=function(){q.unqueued||lt()}),q.unqueued++,Ct.always(function(){Ct.always(function(){q.unqueued--,I.queue(w,"fx").length||q.empty.fire()})}));for(O in T)if(j=T[O],an.test(j)){if(delete T[O],F=F||j==="toggle",j===(Te?"hide":"show"))if(j==="show"&&pe&&pe[O]!==void 0)Te=!0;else continue;Tt[O]=pe&&pe[O]||I.style(w,O)}if(it=!I.isEmptyObject(T),!(!it&&I.isEmptyObject(Tt))){Ut&&w.nodeType===1&&(B.overflow=[be.overflow,be.overflowX,be.overflowY],wt=pe&&pe.display,wt==null&&(wt=gt.get(w,"display")),At=I.css(w,"display"),At==="none"&&(wt?At=wt:($i([w],!0),wt=w.style.display||wt,At=I.css(w,"display"),$i([w]))),(At==="inline"||At==="inline-block"&&wt!=null)&&I.css(w,"float")==="none"&&(it||(Ct.done(function(){be.display=wt}),wt==null&&(At=be.display,wt=At==="none"?"":At)),be.display="inline-block")),B.overflow&&(be.overflow="hidden",Ct.always(function(){be.overflow=B.overflow[0],be.overflowX=B.overflow[1],be.overflowY=B.overflow[2]})),it=!1;for(O in Tt)it||(pe?"hidden"in pe&&(Te=pe.hidden):pe=gt.access(w,"fxshow",{display:wt}),F&&(pe.hidden=!Te),Te&&$i([w],!0),Ct.done(function(){Te||$i([w]),gt.remove(w,"fxshow");for(O in Tt)I.style(w,O,Tt[O])})),it=qs(Te?pe[O]:0,O,Ct),O in pe||(pe[O]=it.start,Te&&(it.end=it.start,it.start=0))}}function Kt(w,T){var B,O,j,F,q;for(B in w)if(O=ut(B),j=T[O],F=w[B],Array.isArray(F)&&(j=F[1],F=w[B]=F[0]),B!==O&&(w[O]=F,delete w[B]),q=I.cssHooks[O],q&&"expand"in q){F=q.expand(F),delete w[O];for(B in F)B in w||(w[B]=F[B],T[B]=j)}else T[O]=j}function yi(w,T,B){var O,j,F=0,q=yi.prefilters.length,lt=I.Deferred().always(function(){delete it.elem}),it=function(){if(j)return!1;for(var Ut=Eo||ca(),Ct=Math.max(0,wt.startTime+wt.duration-Ut),Tt=Ct/wt.duration||0,be=1-Tt,Te=0,pe=wt.tweens.length;Te<pe;Te++)wt.tweens[Te].run(be);return lt.notifyWith(w,[wt,be,Ct]),be<1&&pe?Ct:(pe||lt.notifyWith(w,[wt,1,0]),lt.resolveWith(w,[wt]),!1)},wt=lt.promise({elem:w,props:I.extend({},T),opts:I.extend(!0,{specialEasing:{},easing:I.easing._default},B),originalProperties:T,originalOptions:B,startTime:Eo||ca(),duration:B.duration,tweens:[],createTween:function(Ut,Ct){var Tt=I.Tween(w,wt.opts,Ut,Ct,wt.opts.specialEasing[Ut]||wt.opts.easing);return wt.tweens.push(Tt),Tt},stop:function(Ut){var Ct=0,Tt=Ut?wt.tweens.length:0;if(j)return this;for(j=!0;Ct<Tt;Ct++)wt.tweens[Ct].run(1);return Ut?(lt.notifyWith(w,[wt,1,0]),lt.resolveWith(w,[wt,Ut])):lt.rejectWith(w,[wt,Ut]),this}}),At=wt.props;for(Kt(At,wt.opts.specialEasing);F<q;F++)if(O=yi.prefilters[F].call(wt,w,At,wt.opts),O)return H(O.stop)&&(I._queueHooks(wt.elem,wt.opts.queue).stop=O.stop.bind(O)),O;return I.map(At,qs,wt),H(wt.opts.start)&&wt.opts.start.call(w,wt),wt.progress(wt.opts.progress).done(wt.opts.done,wt.opts.complete).fail(wt.opts.fail).always(wt.opts.always),I.fx.timer(I.extend(it,{elem:w,anim:wt,queue:wt.opts.queue})),wt}I.Animation=I.extend(yi,{tweeners:{"*":[function(w,T){var B=this.createTween(w,T);return rn(B.elem,w,ae.exec(T),B),B}]},tweener:function(w,T){H(w)?(T=w,w=["*"]):w=w.match(Re);for(var B,O=0,j=w.length;O<j;O++)B=w[O],yi.tweeners[B]=yi.tweeners[B]||[],yi.tweeners[B].unshift(T)},prefilters:[Ae],prefilter:function(w,T){T?yi.prefilters.unshift(w):yi.prefilters.push(w)}}),I.speed=function(w,T,B){var O=w&&typeof w=="object"?I.extend({},w):{complete:B||!B&&T||H(w)&&w,duration:w,easing:B&&T||T&&!H(T)&&T};return I.fx.off?O.duration=0:typeof O.duration!="number"&&(O.duration in I.fx.speeds?O.duration=I.fx.speeds[O.duration]:O.duration=I.fx.speeds._default),(O.queue==null||O.queue===!0)&&(O.queue="fx"),O.old=O.complete,O.complete=function(){H(O.old)&&O.old.call(this),O.queue&&I.dequeue(this,O.queue)},O},I.fn.extend({fadeTo:function(w,T,B,O){return this.filter(Se).css("opacity",0).show().end().animate({opacity:T},w,B,O)},animate:function(w,T,B,O){var j=I.isEmptyObject(w),F=I.speed(T,B,O),q=function(){var lt=yi(this,I.extend({},w),F);(j||gt.get(this,"finish"))&&lt.stop(!0)};return q.finish=q,j||F.queue===!1?this.each(q):this.queue(F.queue,q)},stop:function(w,T,B){var O=function(j){var F=j.stop;delete j.stop,F(B)};return typeof w!="string"&&(B=T,T=w,w=void 0),T&&this.queue(w||"fx",[]),this.each(function(){var j=!0,F=w!=null&&w+"queueHooks",q=I.timers,lt=gt.get(this);if(F)lt[F]&&lt[F].stop&&O(lt[F]);else for(F in lt)lt[F]&&lt[F].stop&&la.test(F)&&O(lt[F]);for(F=q.length;F--;)q[F].elem===this&&(w==null||q[F].queue===w)&&(q[F].anim.stop(B),j=!1,q.splice(F,1));(j||!B)&&I.dequeue(this,w)})},finish:function(w){return w!==!1&&(w=w||"fx"),this.each(function(){var T,B=gt.get(this),O=B[w+"queue"],j=B[w+"queueHooks"],F=I.timers,q=O?O.length:0;for(B.finish=!0,I.queue(this,w,[]),j&&j.stop&&j.stop.call(this,!0),T=F.length;T--;)F[T].elem===this&&F[T].queue===w&&(F[T].anim.stop(!0),F.splice(T,1));for(T=0;T<q;T++)O[T]&&O[T].finish&&O[T].finish.call(this);delete B.finish})}}),I.each(["toggle","show","hide"],function(w,T){var B=I.fn[T];I.fn[T]=function(O,j,F){return O==null||typeof O=="boolean"?B.apply(this,arguments):this.animate(So(T,!0),O,j,F)}}),I.each({slideDown:So("show"),slideUp:So("hide"),slideToggle:So("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(w,T){I.fn[w]=function(B,O,j){return this.animate(T,B,O,j)}}),I.timers=[],I.fx.tick=function(){var w,T=0,B=I.timers;for(Eo=Date.now();T<B.length;T++)w=B[T],!w()&&B[T]===w&&B.splice(T--,1);B.length||I.fx.stop(),Eo=void 0},I.fx.timer=function(w){I.timers.push(w),I.fx.start()},I.fx.interval=13,I.fx.start=function(){Vo||(Vo=!0,Tr())},I.fx.stop=function(){Vo=null},I.fx.speeds={slow:600,fast:200,_default:400},I.fn.delay=function(w,T){return w=I.fx&&I.fx.speeds[w]||w,T=T||"fx",this.queue(T,function(B,O){var j=n.setTimeout(B,w);O.stop=function(){n.clearTimeout(j)}})},function(){var w=U.createElement("input"),T=U.createElement("select"),B=T.appendChild(U.createElement("option"));w.type="checkbox",z.checkOn=w.value!=="",z.optSelected=B.selected,w=U.createElement("input"),w.value="t",w.type="radio",z.radioValue=w.value==="t"}();var je,Ho=I.expr.attrHandle;I.fn.extend({attr:function(w,T){return de(this,I.attr,w,T,arguments.length>1)},removeAttr:function(w){return this.each(function(){I.removeAttr(this,w)})}}),I.extend({attr:function(w,T,B){var O,j,F=w.nodeType;if(!(F===3||F===8||F===2)){if(typeof w.getAttribute>"u")return I.prop(w,T,B);if((F!==1||!I.isXMLDoc(w))&&(j=I.attrHooks[T.toLowerCase()]||(I.expr.match.bool.test(T)?je:void 0)),B!==void 0){if(B===null){I.removeAttr(w,T);return}return j&&"set"in j&&(O=j.set(w,B,T))!==void 0?O:(w.setAttribute(T,B+""),B)}return j&&"get"in j&&(O=j.get(w,T))!==null?O:(O=I.find.attr(w,T),O==null?void 0:O)}},attrHooks:{type:{set:function(w,T){if(!z.radioValue&&T==="radio"&&X(w,"input")){var B=w.value;return w.setAttribute("type",T),B&&(w.value=B),T}}}},removeAttr:function(w,T){var B,O=0,j=T&&T.match(Re);if(j&&w.nodeType===1)for(;B=j[O++];)w.removeAttribute(B)}}),je={set:function(w,T,B){return T===!1?I.removeAttr(w,B):w.setAttribute(B,B),B}},I.each(I.expr.match.bool.source.match(/\w+/g),function(w,T){var B=Ho[T]||I.find.attr;Ho[T]=function(O,j,F){var q,lt,it=j.toLowerCase();return F||(lt=Ho[it],Ho[it]=q,q=B(O,j,F)!=null?it:null,Ho[it]=lt),q}});var da=/^(?:input|select|textarea|button)$/i,To=/^(?:a|area)$/i;I.fn.extend({prop:function(w,T){return de(this,I.prop,w,T,arguments.length>1)},removeProp:function(w){return this.each(function(){delete this[I.propFix[w]||w]})}}),I.extend({prop:function(w,T,B){var O,j,F=w.nodeType;if(!(F===3||F===8||F===2))return(F!==1||!I.isXMLDoc(w))&&(T=I.propFix[T]||T,j=I.propHooks[T]),B!==void 0?j&&"set"in j&&(O=j.set(w,B,T))!==void 0?O:w[T]=B:j&&"get"in j&&(O=j.get(w,T))!==null?O:w[T]},propHooks:{tabIndex:{get:function(w){var T=I.find.attr(w,"tabindex");return T?parseInt(T,10):da.test(w.nodeName)||To.test(w.nodeName)&&w.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),z.optSelected||(I.propHooks.selected={get:function(w){var T=w.parentNode;return T&&T.parentNode&&T.parentNode.selectedIndex,null},set:function(w){var T=w.parentNode;T&&(T.selectedIndex,T.parentNode&&T.parentNode.selectedIndex)}}),I.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){I.propFix[this.toLowerCase()]=this});function Hi(w){var T=w.match(Re)||[];return T.join(" ")}function co(w){return w.getAttribute&&w.getAttribute("class")||""}function Ui(w){return Array.isArray(w)?w:typeof w=="string"?w.match(Re)||[]:[]}I.fn.extend({addClass:function(w){var T,B,O,j,F,q;return H(w)?this.each(function(lt){I(this).addClass(w.call(this,lt,co(this)))}):(T=Ui(w),T.length?this.each(function(){if(O=co(this),B=this.nodeType===1&&" "+Hi(O)+" ",B){for(F=0;F<T.length;F++)j=T[F],B.indexOf(" "+j+" ")<0&&(B+=j+" ");q=Hi(B),O!==q&&this.setAttribute("class",q)}}):this)},removeClass:function(w){var T,B,O,j,F,q;return H(w)?this.each(function(lt){I(this).removeClass(w.call(this,lt,co(this)))}):arguments.length?(T=Ui(w),T.length?this.each(function(){if(O=co(this),B=this.nodeType===1&&" "+Hi(O)+" ",B){for(F=0;F<T.length;F++)for(j=T[F];B.indexOf(" "+j+" ")>-1;)B=B.replace(" "+j+" "," ");q=Hi(B),O!==q&&this.setAttribute("class",q)}}):this):this.attr("class","")},toggleClass:function(w,T){var B,O,j,F,q=typeof w,lt=q==="string"||Array.isArray(w);return H(w)?this.each(function(it){I(this).toggleClass(w.call(this,it,co(this),T),T)}):typeof T=="boolean"&&lt?T?this.addClass(w):this.removeClass(w):(B=Ui(w),this.each(function(){if(lt)for(F=I(this),j=0;j<B.length;j++)O=B[j],F.hasClass(O)?F.removeClass(O):F.addClass(O);else(w===void 0||q==="boolean")&&(O=co(this),O&&gt.set(this,"__className__",O),this.setAttribute&&this.setAttribute("class",O||w===!1?"":gt.get(this,"__className__")||""))}))},hasClass:function(w){var T,B,O=0;for(T=" "+w+" ";B=this[O++];)if(B.nodeType===1&&(" "+Hi(co(B))+" ").indexOf(T)>-1)return!0;return!1}});var Dr=/\r/g;I.fn.extend({val:function(w){var T,B,O,j=this[0];return arguments.length?(O=H(w),this.each(function(F){var q;this.nodeType===1&&(O?q=w.call(this,F,I(this).val()):q=w,q==null?q="":typeof q=="number"?q+="":Array.isArray(q)&&(q=I.map(q,function(lt){return lt==null?"":lt+""})),T=I.valHooks[this.type]||I.valHooks[this.nodeName.toLowerCase()],(!T||!("set"in T)||T.set(this,q,"value")===void 0)&&(this.value=q))})):j?(T=I.valHooks[j.type]||I.valHooks[j.nodeName.toLowerCase()],T&&"get"in T&&(B=T.get(j,"value"))!==void 0?B:(B=j.value,typeof B=="string"?B.replace(Dr,""):B==null?"":B)):void 0}}),I.extend({valHooks:{option:{get:function(w){var T=I.find.attr(w,"value");return T!=null?T:Hi(I.text(w))}},select:{get:function(w){var T,B,O,j=w.options,F=w.selectedIndex,q=w.type==="select-one",lt=q?null:[],it=q?F+1:j.length;for(F<0?O=it:O=q?F:0;O<it;O++)if(B=j[O],(B.selected||O===F)&&!B.disabled&&(!B.parentNode.disabled||!X(B.parentNode,"optgroup"))){if(T=I(B).val(),q)return T;lt.push(T)}return lt},set:function(w,T){for(var B,O,j=w.options,F=I.makeArray(T),q=j.length;q--;)O=j[q],(O.selected=I.inArray(I.valHooks.option.get(O),F)>-1)&&(B=!0);return B||(w.selectedIndex=-1),F}}}}),I.each(["radio","checkbox"],function(){I.valHooks[this]={set:function(w,T){if(Array.isArray(T))return w.checked=I.inArray(I(w).val(),T)>-1}},z.checkOn||(I.valHooks[this].get=function(w){return w.getAttribute("value")===null?"on":w.value})}),z.focusin="onfocusin"in n;var Mr=/^(?:focusinfocus|focusoutblur)$/,Ir=function(w){w.stopPropagation()};I.extend(I.event,{trigger:function(w,T,B,O){var j,F,q,lt,it,wt,At,Ut,Ct=[B||U],Tt=x.call(w,"type")?w.type:w,be=x.call(w,"namespace")?w.namespace.split("."):[];if(F=Ut=q=B=B||U,!(B.nodeType===3||B.nodeType===8)&&!Mr.test(Tt+I.event.triggered)&&(Tt.indexOf(".")>-1&&(be=Tt.split("."),Tt=be.shift(),be.sort()),it=Tt.indexOf(":")<0&&"on"+Tt,w=w[I.expando]?w:new I.Event(Tt,typeof w=="object"&&w),w.isTrigger=O?2:3,w.namespace=be.join("."),w.rnamespace=w.namespace?new RegExp("(^|\\.)"+be.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,w.result=void 0,w.target||(w.target=B),T=T==null?[w]:I.makeArray(T,[w]),At=I.event.special[Tt]||{},!(!O&&At.trigger&&At.trigger.apply(B,T)===!1))){if(!O&&!At.noBubble&&!Z(B)){for(lt=At.delegateType||Tt,Mr.test(lt+Tt)||(F=F.parentNode);F;F=F.parentNode)Ct.push(F),q=F;q===(B.ownerDocument||U)&&Ct.push(q.defaultView||q.parentWindow||n)}for(j=0;(F=Ct[j++])&&!w.isPropagationStopped();)Ut=F,w.type=j>1?lt:At.bindType||Tt,wt=(gt.get(F,"events")||Object.create(null))[w.type]&&gt.get(F,"handle"),wt&&wt.apply(F,T),wt=it&&F[it],wt&&wt.apply&&xt(F)&&(w.result=wt.apply(F,T),w.result===!1&&w.preventDefault());return w.type=Tt,!O&&!w.isDefaultPrevented()&&(!At._default||At._default.apply(Ct.pop(),T)===!1)&&xt(B)&&it&&H(B[Tt])&&!Z(B)&&(q=B[it],q&&(B[it]=null),I.event.triggered=Tt,w.isPropagationStopped()&&Ut.addEventListener(Tt,Ir),B[Tt](),w.isPropagationStopped()&&Ut.removeEventListener(Tt,Ir),I.event.triggered=void 0,q&&(B[it]=q)),w.result}},simulate:function(w,T,B){var O=I.extend(new I.Event,B,{type:w,isSimulated:!0});I.event.trigger(O,null,T)}}),I.fn.extend({trigger:function(w,T){return this.each(function(){I.event.trigger(w,T,this)})},triggerHandler:function(w,T){var B=this[0];if(B)return I.event.trigger(w,T,B,!0)}}),z.focusin||I.each({focus:"focusin",blur:"focusout"},function(w,T){var B=function(O){I.event.simulate(T,O.target,I.event.fix(O))};I.event.special[T]={setup:function(){var O=this.ownerDocument||this.document||this,j=gt.access(O,T);j||O.addEventListener(w,B,!0),gt.access(O,T,(j||0)+1)},teardown:function(){var O=this.ownerDocument||this.document||this,j=gt.access(O,T)-1;j?gt.access(O,T,j):(O.removeEventListener(w,B,!0),gt.remove(O,T))}}});var Yn=n.location,ua={guid:Date.now()},Uo=/\?/;I.parseXML=function(w){var T,B;if(!w||typeof w!="string")return null;try{T=new n.DOMParser().parseFromString(w,"text/xml")}catch{}return B=T&&T.getElementsByTagName("parsererror")[0],(!T||B)&&I.error("Invalid XML: "+(B?I.map(B.childNodes,function(O){return O.textContent}).join(`
`):w)),T};var ll=/\[\]$/,Wo=/\r?\n/g,cl=/^(?:submit|button|image|reset|file)$/i,ha=/^(?:input|select|textarea|keygen)/i;function Pr(w,T,B,O){var j;if(Array.isArray(T))I.each(T,function(F,q){B||ll.test(w)?O(w,q):Pr(w+"["+(typeof q=="object"&&q!=null?F:"")+"]",q,B,O)});else if(!B&&dt(T)==="object")for(j in T)Pr(w+"["+j+"]",T[j],B,O);else O(w,T)}I.param=function(w,T){var B,O=[],j=function(F,q){var lt=H(q)?q():q;O[O.length]=encodeURIComponent(F)+"="+encodeURIComponent(lt==null?"":lt)};if(w==null)return"";if(Array.isArray(w)||w.jquery&&!I.isPlainObject(w))I.each(w,function(){j(this.name,this.value)});else for(B in w)Pr(B,w[B],T,j);return O.join("&")},I.fn.extend({serialize:function(){return I.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var w=I.prop(this,"elements");return w?I.makeArray(w):this}).filter(function(){var w=this.type;return this.name&&!I(this).is(":disabled")&&ha.test(this.nodeName)&&!cl.test(w)&&(this.checked||!li.test(w))}).map(function(w,T){var B=I(this).val();return B==null?null:Array.isArray(B)?I.map(B,function(O){return{name:T.name,value:O.replace(Wo,`\r
`)}}):{name:T.name,value:B.replace(Wo,`\r
`)}}).get()}});var Ci=/%20/g,ws=/#.*$/,dl=/([?&])_=[^&]*/,ul=/^(.*?):[ \t]*([^\r\n]*)$/mg,hl=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,fl=/^(?:GET|HEAD)$/,_s=/^\/\//,qo={},Gs={},fa="*/".concat("*"),Go=U.createElement("a");Go.href=Yn.href;function ga(w){return function(T,B){typeof T!="string"&&(B=T,T="*");var O,j=0,F=T.toLowerCase().match(Re)||[];if(H(B))for(;O=F[j++];)O[0]==="+"?(O=O.slice(1)||"*",(w[O]=w[O]||[]).unshift(B)):(w[O]=w[O]||[]).push(B)}}function pa(w,T,B,O){var j={},F=w===Gs;function q(lt){var it;return j[lt]=!0,I.each(w[lt]||[],function(wt,At){var Ut=At(T,B,O);if(typeof Ut=="string"&&!F&&!j[Ut])return T.dataTypes.unshift(Ut),q(Ut),!1;if(F)return!(it=Ut)}),it}return q(T.dataTypes[0])||!j["*"]&&q("*")}function Br(w,T){var B,O,j=I.ajaxSettings.flatOptions||{};for(B in T)T[B]!==void 0&&((j[B]?w:O||(O={}))[B]=T[B]);return O&&I.extend(!0,w,O),w}function vs(w,T,B){for(var O,j,F,q,lt=w.contents,it=w.dataTypes;it[0]==="*";)it.shift(),O===void 0&&(O=w.mimeType||T.getResponseHeader("Content-Type"));if(O){for(j in lt)if(lt[j]&&lt[j].test(O)){it.unshift(j);break}}if(it[0]in B)F=it[0];else{for(j in B){if(!it[0]||w.converters[j+" "+it[0]]){F=j;break}q||(q=j)}F=F||q}if(F)return F!==it[0]&&it.unshift(F),B[F]}function Do(w,T,B,O){var j,F,q,lt,it,wt={},At=w.dataTypes.slice();if(At[1])for(q in w.converters)wt[q.toLowerCase()]=w.converters[q];for(F=At.shift();F;)if(w.responseFields[F]&&(B[w.responseFields[F]]=T),!it&&O&&w.dataFilter&&(T=w.dataFilter(T,w.dataType)),it=F,F=At.shift(),F){if(F==="*")F=it;else if(it!=="*"&&it!==F){if(q=wt[it+" "+F]||wt["* "+F],!q){for(j in wt)if(lt=j.split(" "),lt[1]===F&&(q=wt[it+" "+lt[0]]||wt["* "+lt[0]],q)){q===!0?q=wt[j]:wt[j]!==!0&&(F=lt[0],At.unshift(lt[1]));break}}if(q!==!0)if(q&&w.throws)T=q(T);else try{T=q(T)}catch(Ut){return{state:"parsererror",error:q?Ut:"No conversion from "+it+" to "+F}}}}return{state:"success",data:T}}I.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Yn.href,type:"GET",isLocal:hl.test(Yn.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":fa,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":I.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(w,T){return T?Br(Br(w,I.ajaxSettings),T):Br(I.ajaxSettings,w)},ajaxPrefilter:ga(qo),ajaxTransport:ga(Gs),ajax:function(w,T){typeof w=="object"&&(T=w,w=void 0),T=T||{};var B,O,j,F,q,lt,it,wt,At,Ut,Ct=I.ajaxSetup({},T),Tt=Ct.context||Ct,be=Ct.context&&(Tt.nodeType||Tt.jquery)?I(Tt):I.event,Te=I.Deferred(),pe=I.Callbacks("once memory"),Bn=Ct.statusCode||{},_n={},di={},tn="canceled",De={readyState:0,getResponseHeader:function(Ue){var yn;if(it){if(!F)for(F={};yn=ul.exec(j);)F[yn[1].toLowerCase()+" "]=(F[yn[1].toLowerCase()+" "]||[]).concat(yn[2]);yn=F[Ue.toLowerCase()+" "]}return yn==null?null:yn.join(", ")},getAllResponseHeaders:function(){return it?j:null},setRequestHeader:function(Ue,yn){return it==null&&(Ue=di[Ue.toLowerCase()]=di[Ue.toLowerCase()]||Ue,_n[Ue]=yn),this},overrideMimeType:function(Ue){return it==null&&(Ct.mimeType=Ue),this},statusCode:function(Ue){var yn;if(Ue)if(it)De.always(Ue[De.status]);else for(yn in Ue)Bn[yn]=[Bn[yn],Ue[yn]];return this},abort:function(Ue){var yn=Ue||tn;return B&&B.abort(yn),vn(0,yn),this}};if(Te.promise(De),Ct.url=((w||Ct.url||Yn.href)+"").replace(_s,Yn.protocol+"//"),Ct.type=T.method||T.type||Ct.method||Ct.type,Ct.dataTypes=(Ct.dataType||"*").toLowerCase().match(Re)||[""],Ct.crossDomain==null){lt=U.createElement("a");try{lt.href=Ct.url,lt.href=lt.href,Ct.crossDomain=Go.protocol+"//"+Go.host!=lt.protocol+"//"+lt.host}catch{Ct.crossDomain=!0}}if(Ct.data&&Ct.processData&&typeof Ct.data!="string"&&(Ct.data=I.param(Ct.data,Ct.traditional)),pa(qo,Ct,T,De),it)return De;wt=I.event&&Ct.global,wt&&I.active++===0&&I.event.trigger("ajaxStart"),Ct.type=Ct.type.toUpperCase(),Ct.hasContent=!fl.test(Ct.type),O=Ct.url.replace(ws,""),Ct.hasContent?Ct.data&&Ct.processData&&(Ct.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(Ct.data=Ct.data.replace(Ci,"+")):(Ut=Ct.url.slice(O.length),Ct.data&&(Ct.processData||typeof Ct.data=="string")&&(O+=(Uo.test(O)?"&":"?")+Ct.data,delete Ct.data),Ct.cache===!1&&(O=O.replace(dl,"$1"),Ut=(Uo.test(O)?"&":"?")+"_="+ua.guid+++Ut),Ct.url=O+Ut),Ct.ifModified&&(I.lastModified[O]&&De.setRequestHeader("If-Modified-Since",I.lastModified[O]),I.etag[O]&&De.setRequestHeader("If-None-Match",I.etag[O])),(Ct.data&&Ct.hasContent&&Ct.contentType!==!1||T.contentType)&&De.setRequestHeader("Content-Type",Ct.contentType),De.setRequestHeader("Accept",Ct.dataTypes[0]&&Ct.accepts[Ct.dataTypes[0]]?Ct.accepts[Ct.dataTypes[0]]+(Ct.dataTypes[0]!=="*"?", "+fa+"; q=0.01":""):Ct.accepts["*"]);for(At in Ct.headers)De.setRequestHeader(At,Ct.headers[At]);if(Ct.beforeSend&&(Ct.beforeSend.call(Tt,De,Ct)===!1||it))return De.abort();if(tn="abort",pe.add(Ct.complete),De.done(Ct.success),De.fail(Ct.error),B=pa(Gs,Ct,T,De),!B)vn(-1,"No Transport");else{if(De.readyState=1,wt&&be.trigger("ajaxSend",[De,Ct]),it)return De;Ct.async&&Ct.timeout>0&&(q=n.setTimeout(function(){De.abort("timeout")},Ct.timeout));try{it=!1,B.send(_n,vn)}catch(Ue){if(it)throw Ue;vn(-1,Ue)}}function vn(Ue,yn,Qo,ys){var ui,uo,no,hi,Ai,Kn=yn;it||(it=!0,q&&n.clearTimeout(q),B=void 0,j=ys||"",De.readyState=Ue>0?4:0,ui=Ue>=200&&Ue<300||Ue===304,Qo&&(hi=vs(Ct,De,Qo)),!ui&&I.inArray("script",Ct.dataTypes)>-1&&I.inArray("json",Ct.dataTypes)<0&&(Ct.converters["text script"]=function(){}),hi=Do(Ct,hi,De,ui),ui?(Ct.ifModified&&(Ai=De.getResponseHeader("Last-Modified"),Ai&&(I.lastModified[O]=Ai),Ai=De.getResponseHeader("etag"),Ai&&(I.etag[O]=Ai)),Ue===204||Ct.type==="HEAD"?Kn="nocontent":Ue===304?Kn="notmodified":(Kn=hi.state,uo=hi.data,no=hi.error,ui=!no)):(no=Kn,(Ue||!Kn)&&(Kn="error",Ue<0&&(Ue=0))),De.status=Ue,De.statusText=(yn||Kn)+"",ui?Te.resolveWith(Tt,[uo,Kn,De]):Te.rejectWith(Tt,[De,Kn,no]),De.statusCode(Bn),Bn=void 0,wt&&be.trigger(ui?"ajaxSuccess":"ajaxError",[De,Ct,ui?uo:no]),pe.fireWith(Tt,[De,Kn]),wt&&(be.trigger("ajaxComplete",[De,Ct]),--I.active||I.event.trigger("ajaxStop")))}return De},getJSON:function(w,T,B){return I.get(w,T,B,"json")},getScript:function(w,T){return I.get(w,void 0,T,"script")}}),I.each(["get","post"],function(w,T){I[T]=function(B,O,j,F){return H(O)&&(F=F||j,j=O,O=void 0),I.ajax(I.extend({url:B,type:T,dataType:F,data:O,success:j},I.isPlainObject(B)&&B))}}),I.ajaxPrefilter(function(w){var T;for(T in w.headers)T.toLowerCase()==="content-type"&&(w.contentType=w.headers[T]||"")}),I._evalUrl=function(w,T,B){return I.ajax({url:w,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(O){I.globalEval(O,T,B)}})},I.fn.extend({wrapAll:function(w){var T;return this[0]&&(H(w)&&(w=w.call(this[0])),T=I(w,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&T.insertBefore(this[0]),T.map(function(){for(var B=this;B.firstElementChild;)B=B.firstElementChild;return B}).append(this)),this},wrapInner:function(w){return H(w)?this.each(function(T){I(this).wrapInner(w.call(this,T))}):this.each(function(){var T=I(this),B=T.contents();B.length?B.wrapAll(w):T.append(w)})},wrap:function(w){var T=H(w);return this.each(function(B){I(this).wrapAll(T?w.call(this,B):w)})},unwrap:function(w){return this.parent(w).not("body").each(function(){I(this).replaceWith(this.childNodes)}),this}}),I.expr.pseudos.hidden=function(w){return!I.expr.pseudos.visible(w)},I.expr.pseudos.visible=function(w){return!!(w.offsetWidth||w.offsetHeight||w.getClientRects().length)},I.ajaxSettings.xhr=function(){try{return new n.XMLHttpRequest}catch{}};var ma={0:200,1223:204},Yo=I.ajaxSettings.xhr();z.cors=!!Yo&&"withCredentials"in Yo,z.ajax=Yo=!!Yo,I.ajaxTransport(function(w){var T,B;if(z.cors||Yo&&!w.crossDomain)return{send:function(O,j){var F,q=w.xhr();if(q.open(w.type,w.url,w.async,w.username,w.password),w.xhrFields)for(F in w.xhrFields)q[F]=w.xhrFields[F];w.mimeType&&q.overrideMimeType&&q.overrideMimeType(w.mimeType),!w.crossDomain&&!O["X-Requested-With"]&&(O["X-Requested-With"]="XMLHttpRequest");for(F in O)q.setRequestHeader(F,O[F]);T=function(lt){return function(){T&&(T=B=q.onload=q.onerror=q.onabort=q.ontimeout=q.onreadystatechange=null,lt==="abort"?q.abort():lt==="error"?typeof q.status!="number"?j(0,"error"):j(q.status,q.statusText):j(ma[q.status]||q.status,q.statusText,(q.responseType||"text")!=="text"||typeof q.responseText!="string"?{binary:q.response}:{text:q.responseText},q.getAllResponseHeaders()))}},q.onload=T(),B=q.onerror=q.ontimeout=T("error"),q.onabort!==void 0?q.onabort=B:q.onreadystatechange=function(){q.readyState===4&&n.setTimeout(function(){T&&B()})},T=T("abort");try{q.send(w.hasContent&&w.data||null)}catch(lt){if(T)throw lt}},abort:function(){T&&T()}}}),I.ajaxPrefilter(function(w){w.crossDomain&&(w.contents.script=!1)}),I.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(w){return I.globalEval(w),w}}}),I.ajaxPrefilter("script",function(w){w.cache===void 0&&(w.cache=!1),w.crossDomain&&(w.type="GET")}),I.ajaxTransport("script",function(w){if(w.crossDomain||w.scriptAttrs){var T,B;return{send:function(O,j){T=I("<script>").attr(w.scriptAttrs||{}).prop({charset:w.scriptCharset,src:w.url}).on("load error",B=function(F){T.remove(),B=null,F&&j(F.type==="error"?404:200,F.type)}),U.head.appendChild(T[0])},abort:function(){B&&B()}}}});var Nr=[],Mo=/(=)\?(?=&|$)|\?\?/;I.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var w=Nr.pop()||I.expando+"_"+ua.guid++;return this[w]=!0,w}}),I.ajaxPrefilter("json jsonp",function(w,T,B){var O,j,F,q=w.jsonp!==!1&&(Mo.test(w.url)?"url":typeof w.data=="string"&&(w.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Mo.test(w.data)&&"data");if(q||w.dataTypes[0]==="jsonp")return O=w.jsonpCallback=H(w.jsonpCallback)?w.jsonpCallback():w.jsonpCallback,q?w[q]=w[q].replace(Mo,"$1"+O):w.jsonp!==!1&&(w.url+=(Uo.test(w.url)?"&":"?")+w.jsonp+"="+O),w.converters["script json"]=function(){return F||I.error(O+" was not called"),F[0]},w.dataTypes[0]="json",j=n[O],n[O]=function(){F=arguments},B.always(function(){j===void 0?I(n).removeProp(O):n[O]=j,w[O]&&(w.jsonpCallback=T.jsonpCallback,Nr.push(O)),F&&H(j)&&j(F[0]),F=j=void 0}),"script"}),z.createHTMLDocument=function(){var w=U.implementation.createHTMLDocument("").body;return w.innerHTML="<form></form><form></form>",w.childNodes.length===2}(),I.parseHTML=function(w,T,B){if(typeof w!="string")return[];typeof T=="boolean"&&(B=T,T=!1);var O,j,F;return T||(z.createHTMLDocument?(T=U.implementation.createHTMLDocument(""),O=T.createElement("base"),O.href=U.location.href,T.head.appendChild(O)):T=U),j=Nt.exec(w),F=!B&&[],j?[T.createElement(j[1])]:(j=Cr([w],T,F),F&&F.length&&I(F).remove(),I.merge([],j.childNodes))},I.fn.load=function(w,T,B){var O,j,F,q=this,lt=w.indexOf(" ");return lt>-1&&(O=Hi(w.slice(lt)),w=w.slice(0,lt)),H(T)?(B=T,T=void 0):T&&typeof T=="object"&&(j="POST"),q.length>0&&I.ajax({url:w,type:j||"GET",dataType:"html",data:T}).done(function(it){F=arguments,q.html(O?I("<div>").append(I.parseHTML(it)).find(O):it)}).always(B&&function(it,wt){q.each(function(){B.apply(this,F||[it.responseText,wt,it])})}),this},I.expr.pseudos.animated=function(w){return I.grep(I.timers,function(T){return w===T.elem}).length},I.offset={setOffset:function(w,T,B){var O,j,F,q,lt,it,wt,At=I.css(w,"position"),Ut=I(w),Ct={};At==="static"&&(w.style.position="relative"),lt=Ut.offset(),F=I.css(w,"top"),it=I.css(w,"left"),wt=(At==="absolute"||At==="fixed")&&(F+it).indexOf("auto")>-1,wt?(O=Ut.position(),q=O.top,j=O.left):(q=parseFloat(F)||0,j=parseFloat(it)||0),H(T)&&(T=T.call(w,B,I.extend({},lt))),T.top!=null&&(Ct.top=T.top-lt.top+q),T.left!=null&&(Ct.left=T.left-lt.left+j),"using"in T?T.using.call(w,Ct):Ut.css(Ct)}},I.fn.extend({offset:function(w){if(arguments.length)return w===void 0?this:this.each(function(j){I.offset.setOffset(this,w,j)});var T,B,O=this[0];if(!!O)return O.getClientRects().length?(T=O.getBoundingClientRect(),B=O.ownerDocument.defaultView,{top:T.top+B.pageYOffset,left:T.left+B.pageXOffset}):{top:0,left:0}},position:function(){if(!!this[0]){var w,T,B,O=this[0],j={top:0,left:0};if(I.css(O,"position")==="fixed")T=O.getBoundingClientRect();else{for(T=this.offset(),B=O.ownerDocument,w=O.offsetParent||B.documentElement;w&&(w===B.body||w===B.documentElement)&&I.css(w,"position")==="static";)w=w.parentNode;w&&w!==O&&w.nodeType===1&&(j=I(w).offset(),j.top+=I.css(w,"borderTopWidth",!0),j.left+=I.css(w,"borderLeftWidth",!0))}return{top:T.top-j.top-I.css(O,"marginTop",!0),left:T.left-j.left-I.css(O,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var w=this.offsetParent;w&&I.css(w,"position")==="static";)w=w.offsetParent;return w||he})}}),I.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(w,T){var B=T==="pageYOffset";I.fn[w]=function(O){return de(this,function(j,F,q){var lt;if(Z(j)?lt=j:j.nodeType===9&&(lt=j.defaultView),q===void 0)return lt?lt[T]:j[F];lt?lt.scrollTo(B?lt.pageXOffset:q,B?q:lt.pageYOffset):j[F]=q},w,O,arguments.length)}}),I.each(["top","left"],function(w,T){I.cssHooks[T]=Pe(z.pixelPosition,function(B,O){if(O)return O=ao(B,T),Er.test(O)?I(B).position()[T]+"px":O})}),I.each({Height:"height",Width:"width"},function(w,T){I.each({padding:"inner"+w,content:T,"":"outer"+w},function(B,O){I.fn[O]=function(j,F){var q=arguments.length&&(B||typeof j!="boolean"),lt=B||(j===!0||F===!0?"margin":"border");return de(this,function(it,wt,At){var Ut;return Z(it)?O.indexOf("outer")===0?it["inner"+w]:it.document.documentElement["client"+w]:it.nodeType===9?(Ut=it.documentElement,Math.max(it.body["scroll"+w],Ut["scroll"+w],it.body["offset"+w],Ut["offset"+w],Ut["client"+w])):At===void 0?I.css(it,wt,lt):I.style(it,wt,At,lt)},T,q?j:void 0,q)}})}),I.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(w,T){I.fn[T]=function(B){return this.on(T,B)}}),I.fn.extend({bind:function(w,T,B){return this.on(w,null,T,B)},unbind:function(w,T){return this.off(w,null,T)},delegate:function(w,T,B,O){return this.on(T,w,B,O)},undelegate:function(w,T,B){return arguments.length===1?this.off(w,"**"):this.off(T,w||"**",B)},hover:function(w,T){return this.mouseenter(w).mouseleave(T||w)}}),I.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(w,T){I.fn[T]=function(B,O){return arguments.length>0?this.on(T,null,B,O):this.trigger(T)}});var ba=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;I.proxy=function(w,T){var B,O,j;if(typeof T=="string"&&(B=w[T],T=w,w=B),!!H(w))return O=u.call(arguments,2),j=function(){return w.apply(T||this,O.concat(u.call(arguments)))},j.guid=w.guid=w.guid||I.guid++,j},I.holdReady=function(w){w?I.readyWait++:I.ready(!0)},I.isArray=Array.isArray,I.parseJSON=JSON.parse,I.nodeName=X,I.isFunction=H,I.isWindow=Z,I.camelCase=ut,I.type=dt,I.now=Date.now,I.isNumeric=function(w){var T=I.type(w);return(T==="number"||T==="string")&&!isNaN(w-parseFloat(w))},I.trim=function(w){return w==null?"":(w+"").replace(ba,"$1")};var Ko=n.jQuery,gl=n.$;return I.noConflict=function(w){return n.$===I&&(n.$=gl),w&&n.jQuery===I&&(n.jQuery=Ko),I},typeof s>"u"&&(n.jQuery=n.$=I),I})})(Z5);const yZ=Z5.exports;window.$=window.jQuery=yZ;sx(eB).use(Zt).use(Y5).use(wZ).use(vZ).mount("#app");