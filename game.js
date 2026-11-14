var Nc=Object.defineProperty;var Uc=(s,t,e)=>t in s?Nc(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var R=(s,t,e)=>Uc(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ha="187",Fc=0,Co=1,Oc=2,qs=1,Bc=2,jn=3,Yi=0,Ze=1,pe=2,on=0,es=1,He=2,Po=3,Lo=4,kc=5,Pn=100,zc=101,Hc=102,Gc=103,Vc=104,Wc=200,Xc=201,qc=202,Yc=203,Bl=204,kl=205,$c=206,Kc=207,Zc=208,Jc=209,Qc=210,jc=211,th=212,eh=213,ih=214,Zr=0,Jr=1,Qr=2,ns=3,jr=4,ta=5,ea=6,ia=7,zl=0,nh=1,sh=2,Ii=0,Ga=1,Va=2,Wa=3,dr=4,Xa=5,qa=6,Ya=7,Hl=300,In=301,ss=302,vr=303,Mr=304,er=1e3,Di=1001,na=1002,Ne=1003,rh=1004,gs=1005,$e=1006,yr=1007,Wi=1008,ii=1009,Gl=1010,Vl=1011,rs=1012,$a=1013,Ei=1014,yi=1015,Je=1016,Ka=1017,Za=1018,Nn=1020,Wl=35902,Xl=35899,ql=1021,Yl=1022,Si=1023,$i=1026,Xi=1027,$l=1028,Ja=1029,ln=1030,Qa=1031,ja=1033,Ys=33776,$s=33777,Ks=33778,Zs=33779,sa=35840,ra=35841,aa=35842,oa=35843,la=36196,ca=37492,ha=37496,da=37488,ua=37489,ir=37490,fa=37491,pa=37808,ma=37809,ga=37810,_a=37811,xa=37812,va=37813,Ma=37814,ya=37815,Sa=37816,ba=37817,Ea=37818,wa=37819,Ta=37820,Aa=37821,Ra=36492,Ca=36494,Pa=36495,La=36283,Da=36284,nr=36285,Ia=36286,ah=3200,Na=0,oh=1,Vi="",Ie="srgb",sr="srgb-linear",rr="linear",jt="srgb",Sr=7680,lh=519,ch=512,hh=513,dh=514,Kl=515,uh=516,fh=517,Zl=518,Jl=519,Ql=35044,_s=35048,Do="300 es",mi=2e3,as=2001;function ph(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function os(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function mh(){const s=os("canvas");return s.style.display="block",s}const Io={};function ar(...s){const t="THREE."+s.shift();console.log(t,...s)}function jl(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Nt(...s){s=jl(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Jt(...s){s=jl(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Js(...s){const t=s.join(" ");t in Io||(Io[t]=!0,Nt(...s))}function gh(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const _h={[Zr]:Zr,[Qr]:ea,[jr]:jr,[ns]:ta,[Jr]:Jr,[ea]:Qr,[ia]:ia,[ta]:ns};class cn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],br=Math.PI/180,Ua=180/Math.PI;function hn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ke[s&255]+ke[s>>8&255]+ke[s>>16&255]+ke[s>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]).toLowerCase()}function Kt(s,t,e){return Math.max(t,Math.min(e,s))}function xh(s,t){return(s%t+t)%t}function Er(s,t,e){return(1-e)*s+e*t}function vh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ur(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function tc(s,t){if(t.constructor===Float32Array)return s;const e=ur(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function ec(s,t){if(t.constructor===Float32Array)return s;const e=ur(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}const po=class po{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};po.prototype.isVector2=!0;let Rt=po;class zn{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],u=r[a+0],f=r[a+1],_=r[a+2],y=r[a+3];if(d!==y||l!==u||c!==f||h!==_){let m=l*u+c*f+h*_+d*y;m<0&&(u=-u,f=-f,_=-_,y=-y,m=-m);let p=1-o;if(m<.9995){const M=Math.acos(m),T=Math.sin(M);p=Math.sin(p*M)/T,o=Math.sin(o*M)/T,l=l*p+u*o,c=c*p+f*o,h=h*p+_*o,d=d*p+y*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+_*o,d=d*p+y*o;const M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,r,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=r[a],u=r[a+1],f=r[a+2],_=r[a+3];return t[e]=o*_+h*d+l*f-c*u,t[e+1]=l*_+h*u+c*d-o*f,t[e+2]=c*_+h*f+o*u-l*d,t[e+3]=h*_-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),d=o(r/2),u=l(i/2),f=l(n/2),_=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"YXZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"ZXY":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"ZYX":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"YZX":this._x=u*h*d+c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d-u*f*_;break;case"XZY":this._x=u*h*d-c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d+u*f*_;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-n)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const mo=class mo{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(No.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(No.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-r*n),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=n+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return wr.copy(this).projectOnVector(t),this.sub(wr)}reflect(t){return this.sub(wr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};mo.prototype.isVector3=!0;let F=mo;const wr=new F,No=new zn,go=class go{constructor(t,e,i,n,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c)}set(t,e,i,n,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],_=i[8],y=n[0],m=n[3],p=n[6],M=n[1],T=n[4],b=n[7],A=n[2],w=n[5],g=n[8];return r[0]=a*y+o*M+l*A,r[3]=a*m+o*T+l*w,r[6]=a*p+o*b+l*g,r[1]=c*y+h*M+d*A,r[4]=c*m+h*T+d*w,r[7]=c*p+h*b+d*g,r[2]=u*y+f*M+_*A,r[5]=u*m+f*T+_*w,r[8]=u*p+f*b+_*g,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,_=e*d+i*u+n*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return t[0]=d*y,t[1]=(n*c-h*i)*y,t[2]=(o*i-n*a)*y,t[3]=u*y,t[4]=(h*e-n*l)*y,t[5]=(n*r-o*e)*y,t[6]=f*y,t[7]=(i*l-c*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Js("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Tr.makeScale(t,e)),this}rotate(t){return Js("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Tr.makeRotation(-t)),this}translate(t,e){return Js("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Tr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};go.prototype.isMatrix3=!0;let Ot=go;const Tr=new Ot,Uo=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fo=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mh(){const s={enabled:!0,workingColorSpace:sr,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===jt&&(n.r=Ni(n.r),n.g=Ni(n.g),n.b=Ni(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===jt&&(n.r=Dn(n.r),n.g=Dn(n.g),n.b=Dn(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Vi?rr:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[sr]:{primaries:t,whitePoint:i,transfer:rr,toXYZ:Uo,fromXYZ:Fo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:i,transfer:jt,toXYZ:Uo,fromXYZ:Fo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),s}const $t=Mh();function Ni(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Dn(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let un;class yh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{un===void 0&&(un=os("canvas")),un.width=t.width,un.height=t.height;const n=un.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=un}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=os("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=Ni(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ni(e[i]/255)*255):e[i]=Ni(e[i]);return{data:e,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Sh=0;class to{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=hn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(Ar(n[a].image)):r.push(Ar(n[a]))}else r=Ar(n);i.url=r}return e||(t.images[this.uuid]=i),i}}function Ar(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?yh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}let bh=0;const Rr=new F;class Ue extends cn{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,i=Di,n=Di,r=$e,a=Wi,o=Si,l=ii,c=Ue.DEFAULT_ANISOTROPY,h=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=hn(),this.name="",this.source=new to(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Rr).x}get height(){return this.source.getSize(Rr).y}get depth(){return this.source.getSize(Rr).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Nt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Nt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case er:t.x=t.x-Math.floor(t.x);break;case Di:t.x=t.x<0?0:1;break;case na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case er:t.y=t.y-Math.floor(t.y);break;case Di:t.y=t.y<0?0:1;break;case na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=Hl;Ue.DEFAULT_ANISOTROPY=1;const _o=class _o{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],_=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,b=(f+1)/2,A=(p+1)/2,w=(h+u)/4,g=(d+y)/4,S=(_+m)/4;return T>b&&T>A?T<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(T),n=w/i,r=g/i):b>A?b<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(b),i=w/n,r=S/n):A<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(A),i=g/r,n=S/r),this.set(i,n,r,e),this}let M=Math.sqrt((m-_)*(m-_)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(d-y)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_o.prototype.isVector4=!0;let me=_o;class Eh extends cn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e),this.textures=[];const n=i.count;for(let r=0;r<n;r++)this.textures[r]=new Ue({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:$e,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new to(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qe extends Eh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class ic extends Ue{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class wh extends Ue{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const hr=class hr{constructor(t,e,i,n,r,a,o,l,c,h,d,u,f,_,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c,h,d,u,f,_,y,m)}set(t,e,i,n,r,a,o,l,c,h,d,u,f,_,y,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=_,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hr().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,n=1/fn.setFromMatrixColumn(t,0).length(),r=1/fn.setFromMatrixColumn(t,1).length(),a=1/fn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,f=a*d,_=o*h,y=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+_*c,e[5]=u-y*c,e[9]=-o*l,e[2]=y-u*c,e[6]=_+f*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,_=c*h,y=c*d;e[0]=u+y*o,e[4]=_*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-_,e[6]=y+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,_=c*h,y=c*d;e[0]=u-y*o,e[4]=-a*d,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,f=a*d,_=o*h,y=o*d;e[0]=l*h,e[4]=_*c-f,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=f*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,f=a*c,_=o*l,y=o*c;e[0]=l*h,e[4]=y-u*d,e[8]=_*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+_,e[10]=u-y*d}else if(t.order==="XZY"){const u=a*l,f=a*c,_=o*l,y=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=a*h,e[9]=f*d-_,e[2]=_*d-f,e[6]=o*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Th,t,Ah)}lookAt(t,e,i){const n=this.elements;return ti.subVectors(t,e),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Oi.crossVectors(i,ti),Oi.lengthSq()===0&&(Math.abs(i.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Oi.crossVectors(i,ti)),Oi.normalize(),xs.crossVectors(ti,Oi),n[0]=Oi.x,n[4]=xs.x,n[8]=ti.x,n[1]=Oi.y,n[5]=xs.y,n[9]=ti.y,n[2]=Oi.z,n[6]=xs.z,n[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],_=i[2],y=i[6],m=i[10],p=i[14],M=i[3],T=i[7],b=i[11],A=i[15],w=n[0],g=n[4],S=n[8],N=n[12],P=n[1],I=n[5],O=n[9],W=n[13],D=n[2],G=n[6],$=n[10],H=n[14],nt=n[3],q=n[7],j=n[11],et=n[15];return r[0]=a*w+o*P+l*D+c*nt,r[4]=a*g+o*I+l*G+c*q,r[8]=a*S+o*O+l*$+c*j,r[12]=a*N+o*W+l*H+c*et,r[1]=h*w+d*P+u*D+f*nt,r[5]=h*g+d*I+u*G+f*q,r[9]=h*S+d*O+u*$+f*j,r[13]=h*N+d*W+u*H+f*et,r[2]=_*w+y*P+m*D+p*nt,r[6]=_*g+y*I+m*G+p*q,r[10]=_*S+y*O+m*$+p*j,r[14]=_*N+y*W+m*H+p*et,r[3]=M*w+T*P+b*D+A*nt,r[7]=M*g+T*I+b*G+A*q,r[11]=M*S+T*O+b*$+A*j,r[15]=M*N+T*W+b*H+A*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],_=t[3],y=t[7],m=t[11],p=t[15],M=l*f-c*u,T=o*f-c*d,b=o*u-l*d,A=a*f-c*h,w=a*u-l*h,g=a*d-o*h;return e*(y*M-m*T+p*b)-i*(_*M-m*A+p*w)+n*(_*T-y*A+p*g)-r*(_*b-y*w+m*g)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+n*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],_=t[12],y=t[13],m=t[14],p=t[15],M=e*o-i*a,T=e*l-n*a,b=e*c-r*a,A=i*l-n*o,w=i*c-r*o,g=n*c-r*l,S=h*y-d*_,N=h*m-u*_,P=h*p-f*_,I=d*m-u*y,O=d*p-f*y,W=u*p-f*m,D=M*W-T*O+b*I+A*P-w*N+g*S;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/D;return t[0]=(o*W-l*O+c*I)*G,t[1]=(n*O-i*W-r*I)*G,t[2]=(y*g-m*w+p*A)*G,t[3]=(u*w-d*g-f*A)*G,t[4]=(l*P-a*W-c*N)*G,t[5]=(e*W-n*P+r*N)*G,t[6]=(m*b-_*g-p*T)*G,t[7]=(h*g-u*b+f*T)*G,t[8]=(a*O-o*P+c*S)*G,t[9]=(i*P-e*O-r*S)*G,t[10]=(_*w-y*b+p*M)*G,t[11]=(d*b-h*w-f*M)*G,t[12]=(o*N-a*I-l*S)*G,t[13]=(e*I-i*N+n*S)*G,t[14]=(y*T-_*A-m*M)*G,t[15]=(h*A-d*T+u*M)*G,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,_=r*d,y=a*h,m=a*d,p=o*d,M=l*c,T=l*h,b=l*d,A=i.x,w=i.y,g=i.z;return n[0]=(1-(y+p))*A,n[1]=(f+b)*A,n[2]=(_-T)*A,n[3]=0,n[4]=(f-b)*w,n[5]=(1-(u+p))*w,n[6]=(m+M)*w,n[7]=0,n[8]=(_+T)*g,n[9]=(m-M)*g,n[10]=(1-(u+y))*g,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=fn.set(n[0],n[1],n[2]).length();const o=fn.set(n[4],n[5],n[6]).length(),l=fn.set(n[8],n[9],n[10]).length();r<0&&(a=-a),ui.copy(this);const c=1/a,h=1/o,d=1/l;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=h,ui.elements[5]*=h,ui.elements[6]*=h,ui.elements[8]*=d,ui.elements[9]*=d,ui.elements[10]*=d,e.setFromRotationMatrix(ui),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,n,r,a,o=mi,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(i-n),u=(e+t)/(e-t),f=(i+n)/(i-n);let _,y;if(l)_=r/(a-r),y=a*r/(a-r);else if(o===mi)_=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===as)_=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=mi,l=!1){const c=this.elements,h=2/(e-t),d=2/(i-n),u=-(e+t)/(e-t),f=-(i+n)/(i-n);let _,y;if(l)_=1/(a-r),y=a/(a-r);else if(o===mi)_=-2/(a-r),y=-(a+r)/(a-r);else if(o===as)_=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};hr.prototype.isMatrix4=!0;let le=hr;const fn=new F,ui=new le,Th=new F(0,0,0),Ah=new F(1,1,1),Oi=new F,xs=new F,ti=new F,Oo=new le,Bo=new zn;class Ki{constructor(t=0,e=0,i=0,n=Ki.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Oo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Oo,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bo.setFromEuler(this),this.setFromQuaternion(Bo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ki.DEFAULT_ORDER="XYZ";class nc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Rh=0;const ko=new F,pn=new zn,Ai=new le,vs=new F,Xn=new F,Ch=new F,Ph=new zn,zo=new F(1,0,0),Ho=new F(0,1,0),Go=new F(0,0,1),Vo={type:"added"},Lh={type:"removed"},mn={type:"childadded",child:null},Cr={type:"childremoved",child:null};class be extends cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new F,e=new Ki,i=new zn,n=new F(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new le},normalMatrix:{value:new Ot}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pn.setFromAxisAngle(t,e),this.quaternion.multiply(pn),this}rotateOnWorldAxis(t,e){return pn.setFromAxisAngle(t,e),this.quaternion.premultiply(pn),this}rotateX(t){return this.rotateOnAxis(zo,t)}rotateY(t){return this.rotateOnAxis(Ho,t)}rotateZ(t){return this.rotateOnAxis(Go,t)}translateOnAxis(t,e){return ko.copy(t).applyQuaternion(this.quaternion),this.position.add(ko.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zo,t)}translateY(t){return this.translateOnAxis(Ho,t)}translateZ(t){return this.translateOnAxis(Go,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?vs.copy(t):vs.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Xn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Xn,vs,this.up):Ai.lookAt(vs,Xn,this.up),this.quaternion.setFromRotationMatrix(Ai),n&&(Ai.extractRotation(n.matrixWorld),pn.setFromRotationMatrix(Ai),this.quaternion.premultiply(pn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vo),mn.child=t,this.dispatchEvent(mn),mn.child=null):Jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lh),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vo),mn.child=t,this.dispatchEvent(mn),mn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xn,t,Ch),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xn,Ph,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,n=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*n,r[13]+=i-r[1]*e-r[5]*i-r[9]*n,r[14]+=n-r[2]*e-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}be.DEFAULT_UP=new F(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ht extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dh={type:"move"};class Pr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const y of t.hand.values()){const m=e.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&u>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dh)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ht;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const sc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function Lr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ut{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=$t.workingColorSpace){return this.r=t,this.g=e,this.b=i,$t.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=$t.workingColorSpace){if(t=xh(t,1),e=Kt(e,0,1),i=Kt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Lr(a,r,t+1/3),this.g=Lr(a,r,t),this.b=Lr(a,r,t-1/3)}return $t.colorSpaceToWorking(this,n),this}setStyle(t,e=Ie){function i(r){r!==void 0&&parseFloat(r)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Nt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){const i=sc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}copyLinearToSRGB(t){return this.r=Dn(t.r),this.g=Dn(t.g),this.b=Dn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return $t.workingToColorSpace(ze.copy(this),t),Math.round(Kt(ze.r*255,0,255))*65536+Math.round(Kt(ze.g*255,0,255))*256+Math.round(Kt(ze.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.workingToColorSpace(ze.copy(this),e);const i=ze.r,n=ze.g,r=ze.b,a=Math.max(i,n,r),o=Math.min(i,n,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(n-r)/d+(n<r?6:0);break;case n:l=(r-i)/d+2;break;case r:l=(i-n)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.workingToColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=Ie){$t.workingToColorSpace(ze.copy(this),t);const e=ze.r,i=ze.g,n=ze.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Bi),this.setHSL(Bi.h+t,Bi.s+e,Bi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Bi),t.getHSL(Ms);const i=Er(Bi.h,Ms.h,e),n=Er(Bi.s,Ms.s,e),r=Er(Bi.l,Ms.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ze=new Ut;Ut.NAMES=sc;class eo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ut(t),this.density=e}clone(){return new eo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Fa extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const fi=new F,Ri=new F,Dr=new F,Ci=new F,gn=new F,_n=new F,Wo=new F,Ir=new F,Nr=new F,Ur=new F,Fr=new me,Or=new me,Br=new me;class ci{constructor(t=new F,e=new F,i=new F){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),fi.subVectors(t,e),n.cross(fi);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){fi.subVectors(n,e),Ri.subVectors(i,e),Dr.subVectors(t,e);const a=fi.dot(fi),o=fi.dot(Ri),l=fi.dot(Dr),c=Ri.dot(Ri),h=Ri.dot(Dr),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,_=(a*h-o*l)*u;return r.set(1-f-_,_,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ci.x),l.addScaledVector(a,Ci.y),l.addScaledVector(o,Ci.z),l)}static getInterpolatedAttribute(t,e,i,n,r,a){return Fr.setScalar(0),Or.setScalar(0),Br.setScalar(0),Fr.fromBufferAttribute(t,e),Or.fromBufferAttribute(t,i),Br.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(Fr,r.x),a.addScaledVector(Or,r.y),a.addScaledVector(Br,r.z),a}static isFrontFacing(t,e,i,n){return fi.subVectors(i,e),Ri.subVectors(t,e),fi.cross(Ri).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fi.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),fi.cross(Ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ci.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return ci.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let a,o;gn.subVectors(n,i),_n.subVectors(r,i),Ir.subVectors(t,i);const l=gn.dot(Ir),c=_n.dot(Ir);if(l<=0&&c<=0)return e.copy(i);Nr.subVectors(t,n);const h=gn.dot(Nr),d=_n.dot(Nr);if(h>=0&&d<=h)return e.copy(n);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(i).addScaledVector(gn,a);Ur.subVectors(t,r);const f=gn.dot(Ur),_=_n.dot(Ur);if(_>=0&&f<=_)return e.copy(r);const y=f*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(i).addScaledVector(_n,o);const m=h*_-f*d;if(m<=0&&d-h>=0&&f-_>=0)return Wo.subVectors(r,n),o=(d-h)/(d-h+(f-_)),e.copy(n).addScaledVector(Wo,o);const p=1/(m+y+u);return a=y*p,o=u*p,e.copy(i).addScaledVector(gn,a).addScaledVector(_n,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class us{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(pi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(pi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=pi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,pi):pi.fromBufferAttribute(r,a),pi.applyMatrix4(t.matrixWorld),this.expandByPoint(pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ys.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ys.copy(i.boundingBox)),ys.applyMatrix4(t.matrixWorld),this.union(ys)}const n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pi),pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qn),Ss.subVectors(this.max,qn),xn.subVectors(t.a,qn),vn.subVectors(t.b,qn),Mn.subVectors(t.c,qn),ki.subVectors(vn,xn),zi.subVectors(Mn,vn),en.subVectors(xn,Mn);let e=[0,-ki.z,ki.y,0,-zi.z,zi.y,0,-en.z,en.y,ki.z,0,-ki.x,zi.z,0,-zi.x,en.z,0,-en.x,-ki.y,ki.x,0,-zi.y,zi.x,0,-en.y,en.x,0];return!kr(e,xn,vn,Mn,Ss)||(e=[1,0,0,0,1,0,0,0,1],!kr(e,xn,vn,Mn,Ss))?!1:(bs.crossVectors(ki,zi),e=[bs.x,bs.y,bs.z],kr(e,xn,vn,Mn,Ss))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Pi=[new F,new F,new F,new F,new F,new F,new F,new F],pi=new F,ys=new us,xn=new F,vn=new F,Mn=new F,ki=new F,zi=new F,en=new F,qn=new F,Ss=new F,bs=new F,nn=new F;function kr(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){nn.fromArray(s,r);const o=n.x*Math.abs(nn.x)+n.y*Math.abs(nn.y)+n.z*Math.abs(nn.z),l=t.dot(nn),c=e.dot(nn),h=i.dot(nn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const ve=new F,Es=new Rt;let Ih=0;class hi extends cn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ih++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ql,this.updateRanges=[],this.gpuType=yi,this.version=0,this._normalizationScale=t!==void 0?ur(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Es.fromBufferAttribute(this,e),Es.applyMatrix3(t),this.setXY(e,Es.x,Es.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):tc(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):ec(t,this.array)}}class rc extends hi{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class ac extends hi{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ie extends hi{constructor(t,e,i){super(new Float32Array(t),e,i)}}const Nh=new us,Yn=new F,zr=new F;class fr{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Nh.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yn.subVectors(t,this.center);const e=Yn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Yn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yn.copy(t.center).add(zr)),this.expandByPoint(Yn.copy(t.center).sub(zr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Uh=0;const oi=new le,Hr=new be,yn=new F,ei=new us,$n=new us,Ce=new F;class Fe extends cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ph(t)?ac:rc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ot().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return oi.makeRotationFromQuaternion(t),this.applyMatrix4(oi),this}rotateX(t){return oi.makeRotationX(t),this.applyMatrix4(oi),this}rotateY(t){return oi.makeRotationY(t),this.applyMatrix4(oi),this}rotateZ(t){return oi.makeRotationZ(t),this.applyMatrix4(oi),this}translate(t,e,i){return oi.makeTranslation(t,e,i),this.applyMatrix4(oi),this}scale(t,e,i){return oi.makeScale(t,e,i),this.applyMatrix4(oi),this}lookAt(t){return Hr.lookAt(t),Hr.updateMatrix(),this.applyMatrix4(Hr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yn).negate(),this.translate(yn.x,yn.y,yn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,r=t.length;n<r;n++){const a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ie(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];ei.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const i=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];$n.setFromBufferAttribute(o),this.morphTargetsRelative?(Ce.addVectors(ei.min,$n.min),ei.expandByPoint(Ce),Ce.addVectors(ei.max,$n.max),ei.expandByPoint(Ce)):(ei.expandByPoint($n.min),ei.expandByPoint($n.max))}ei.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Ce.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Ce));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ce.fromBufferAttribute(o,c),l&&(yn.fromBufferAttribute(t,c),Ce.add(yn)),n=Math.max(n,i.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new hi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let N=0;N<i.count;N++)o[N]=new F,l[N]=new F;const h=new F,d=new F,u=new F,f=new Rt,_=new Rt,y=new Rt,m=new F,p=new F;function M(N,P,I){c[N]=c[P]=c[I]=1,h.fromBufferAttribute(i,N),d.fromBufferAttribute(i,P),u.fromBufferAttribute(i,I),f.fromBufferAttribute(r,N),_.fromBufferAttribute(r,P),y.fromBufferAttribute(r,I),d.sub(h),u.sub(h),_.sub(f),y.sub(f);const O=1/(_.x*y.y-y.x*_.y);isFinite(O)&&(m.copy(d).multiplyScalar(y.y).addScaledVector(u,-_.y).multiplyScalar(O),p.copy(u).multiplyScalar(_.x).addScaledVector(d,-y.x).multiplyScalar(O),o[N].add(m),o[P].add(m),o[I].add(m),l[N].add(p),l[P].add(p),l[I].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let N=0,P=T.length;N<P;++N){const I=T[N],O=I.start,W=I.count;for(let D=O,G=O+W;D<G;D+=3)M(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const b=new F,A=new F,w=new F,g=new F;function S(N){w.fromBufferAttribute(n,N),g.copy(w);const P=o[N];b.copy(P),b.sub(w.multiplyScalar(w.dot(P))).normalize(),A.crossVectors(g,P);const O=A.dot(l[N])<0?-1:1;a.setXYZW(N,b.x,b.y,b.z,O)}for(let N=0,P=i.count;N<P;++N)c[N]&&S(N);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new hi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const n=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,d=new F;if(t)for(let u=0,f=t.count;u<f;u+=3){const _=t.getX(u+0),y=t.getX(u+1),m=t.getX(u+2);n.fromBufferAttribute(e,_),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(n,r),h.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)n.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(n,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,_=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let p=0;p<h;p++)u[_++]=c[f++]}return new hi(u,h,d)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fe,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fh{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ql,this.updateRanges=[],this.version=0,this.uuid=hn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=Xo(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[e]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=Xo(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function Xo(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=hn()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const Ve=new F;class or{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n,this._normalizationScale=t!==void 0?ur(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ar("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new hi(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new or(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ar("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):tc(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):ec(t,this.data.array)}}const Gr=new F,Oh=new F,Bh=new Ot;class Gi{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Gr.subVectors(i,e).cross(Oh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const n=t.delta(Gr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Bh.getNormalMatrix(t),n=this.coplanarPoint(Gr).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let kh=0;class dn extends cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=hn(),this.name="",this.type="Material",this.blending=es,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bl,this.blendDst=kl,this.blendEquation=Pn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Nt(`Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Nt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ut().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Gi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Rt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Rt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ls extends dn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Sn;const Kn=new F,bn=new F,En=new F,wn=new Rt,Zn=new Rt,oc=new le,ws=new F,Jn=new F,Ts=new F,qo=new Rt,Vr=new Rt,Yo=new Rt;class qi extends be{constructor(t=new ls){if(super(),this.isSprite=!0,this.type="Sprite",Sn===void 0){Sn=new Fe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Fh(e,5);Sn.setIndex([0,1,2,0,2,3]),Sn.setAttribute("position",new or(i,3,0,!1)),Sn.setAttribute("uv",new or(i,2,3,!1))}this.geometry=Sn,this.material=t,this.center=new Rt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Jt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bn.setFromMatrixScale(this.matrixWorld),oc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),En.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bn.multiplyScalar(-En.z);const i=this.material.rotation;let n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));const a=this.center;As(ws.set(-.5,-.5,0),En,a,bn,n,r),As(Jn.set(.5,-.5,0),En,a,bn,n,r),As(Ts.set(.5,.5,0),En,a,bn,n,r),qo.set(0,0),Vr.set(1,0),Yo.set(1,1);let o=t.ray.intersectTriangle(ws,Jn,Ts,!1,Kn);if(o===null&&(As(Jn.set(-.5,.5,0),En,a,bn,n,r),Vr.set(0,1),o=t.ray.intersectTriangle(ws,Ts,Jn,!1,Kn),o===null))return;const l=t.ray.origin.distanceTo(Kn);l<t.near||l>t.far||e.push({distance:l,point:Kn.clone(),uv:ci.getInterpolation(Kn,ws,Jn,Ts,qo,Vr,Yo,new Rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){const e=super.toJSON(t);return e.object.center=this.center.toArray(),e}}function As(s,t,e,i,n,r){wn.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(Zn.x=r*wn.x-n*wn.y,Zn.y=n*wn.x+r*wn.y):Zn.copy(wn),s.copy(t),s.x+=Zn.x,s.y+=Zn.y,s.applyMatrix4(oc)}const Li=new F,Wr=new F,Rs=new F,Cs=new F;class lc{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Li.copy(this.origin).addScaledVector(this.direction,e),Li.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Wr.copy(t).add(e).multiplyScalar(.5),Rs.copy(e).sub(t).normalize(),Cs.copy(this.origin).sub(Wr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Rs),o=Cs.dot(this.direction),l=-Cs.dot(Rs),c=Cs.lengthSq(),h=Math.abs(1-a*a);let d,u,f,_;if(h>0)if(d=a*l-o,u=a*o-l,_=r*h,d>=0)if(u>=-_)if(u<=_){const y=1/h;d*=y,u*=y,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Wr).addScaledVector(Rs,u),f}intersectSphere(t,e){if(t.radius<0)return null;Li.subVectors(t.center,this.origin);const i=Li.dot(this.direction),n=Li.dot(Li)-i*i,r=t.radius*t.radius;if(n>r)return null;const a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,n=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,n=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Li)!==null}intersectTriangle(t,e,i,n,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,_=e.x-a.x,y=e.y-a.y,m=e.z-a.z,p=i.x-a.x,M=i.y-a.y,T=i.z-a.z,b=Math.abs(l),A=Math.abs(c),w=Math.abs(h);let g,S,N,P,I,O,W,D,G,$,H,nt;if(b>=A&&b>=w?(N=l,O=d,G=_,nt=p,l>=0?(g=c,S=h,P=u,I=f,W=y,D=m,$=M,H=T):(g=h,S=c,P=f,I=u,W=m,D=y,$=T,H=M)):A>=w?(N=c,O=u,G=y,nt=M,c>=0?(g=h,S=l,P=f,I=d,W=m,D=_,$=T,H=p):(g=l,S=h,P=d,I=f,W=_,D=m,$=p,H=T)):(N=h,O=f,G=m,nt=T,h>=0?(g=l,S=c,P=d,I=u,W=_,D=y,$=p,H=M):(g=c,S=l,P=u,I=d,W=y,D=_,$=M,H=p)),N===0)return null;const q=g/N,j=S/N,et=1/N,wt=P-q*O,Bt=I-j*O,Z=W-q*G,_t=D-j*G,St=$-q*nt,Lt=H-j*nt,xt=St*_t-Lt*Z,zt=wt*Lt-Bt*St,_e=Z*Bt-_t*wt;if(n){if(xt<0||zt<0||_e<0)return null}else if((xt<0||zt<0||_e<0)&&(xt>0||zt>0||_e>0))return null;const It=xt+zt+_e;if(It===0)return null;const te=et*(xt*O+zt*G+_e*nt);return(It>0?te<0:te>0)?null:this.at(te/It,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe extends dn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const $o=new le,sn=new lc,Ps=new fr,Ko=new F,Ls=new F,Ds=new F,Is=new F,Xr=new F,Ns=new F,Zo=new F,Us=new F;class Mt extends be{constructor(t=new Fe,e=new oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(r&&o){Ns.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Xr.fromBufferAttribute(d,t),a?Ns.addScaledVector(Xr,h):Ns.addScaledVector(Xr.sub(e),h))}e.add(Ns)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ps.copy(i.boundingSphere),Ps.applyMatrix4(r),sn.copy(t.ray).recast(t.near),!(Ps.containsPoint(sn.origin)===!1&&(sn.intersectSphere(Ps,Ko)===null||sn.origin.distanceToSquared(Ko)>(t.far-t.near)**2))&&($o.copy(r).invert(),sn.copy(t.ray).applyMatrix4($o),!(i.boundingBox!==null&&sn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,sn)))}_computeIntersections(t,e,i){let n;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=u.length;_<y;_++){const m=u[_],p=a[m.materialIndex],M=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=M,A=T;b<A;b+=3){const w=o.getX(b),g=o.getX(b+1),S=o.getX(b+2);n=Fs(this,p,t,i,c,h,d,w,g,S),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const _=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=_,p=y;m<p;m+=3){const M=o.getX(m),T=o.getX(m+1),b=o.getX(m+2);n=Fs(this,a,t,i,c,h,d,M,T,b),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=u.length;_<y;_++){const m=u[_],p=a[m.materialIndex],M=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=M,A=T;b<A;b+=3){const w=b,g=b+1,S=b+2;n=Fs(this,p,t,i,c,h,d,w,g,S),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const _=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=_,p=y;m<p;m+=3){const M=m,T=m+1,b=m+2;n=Fs(this,a,t,i,c,h,d,M,T,b),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}}function zh(s,t,e,i,n,r,a,o){let l;if(t.side===Ze?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,t.side===Yi,o),l===null)return null;Us.copy(o),Us.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Us);return c<e.near||c>e.far?null:{distance:c,point:Us.clone(),object:s}}function Fs(s,t,e,i,n,r,a,o,l,c){s.getVertexPosition(o,Ls),s.getVertexPosition(l,Ds),s.getVertexPosition(c,Is);const h=zh(s,t,e,i,Ls,Ds,Is,Zo);if(h){const d=new F;ci.getBarycoord(Zo,Ls,Ds,Is,d),n&&(h.uv=ci.getInterpolatedAttribute(n,o,l,c,d,new Rt)),r&&(h.uv1=ci.getInterpolatedAttribute(r,o,l,c,d,new Rt)),a&&(h.normal=ci.getInterpolatedAttribute(a,o,l,c,d,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new F,materialIndex:0};ci.getNormal(Ls,Ds,Is,u.normal),h.face=u,h.barycoord=d}return h}class Hh extends Ue{constructor(t=null,e=1,i=1,n,r,a,o,l,c=Ne,h=Ne,d,u){super(null,a,o,l,c,h,n,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rn=new fr,Gh=new Rt(.5,.5),Os=new F;class cs{constructor(t=new Gi,e=new Gi,i=new Gi,n=new Gi,r=new Gi,a=new Gi){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=mi,i=!1){const n=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],_=r[8],y=r[9],m=r[10],p=r[11],M=r[12],T=r[13],b=r[14],A=r[15];if(n[0].setComponents(c-a,f-h,p-_,A-M).normalize(),n[1].setComponents(c+a,f+h,p+_,A+M).normalize(),n[2].setComponents(c+o,f+d,p+y,A+T).normalize(),n[3].setComponents(c-o,f-d,p-y,A-T).normalize(),i)n[4].setComponents(l,u,m,b).normalize(),n[5].setComponents(c-l,f-u,p-m,A-b).normalize();else if(n[4].setComponents(c-l,f-u,p-m,A-b).normalize(),e===mi)n[5].setComponents(c+l,f+u,p+m,A+b).normalize();else if(e===as)n[5].setComponents(l,u,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rn)}intersectsSprite(t){rn.center.set(0,0,0);const e=Gh.distanceTo(t.center);return rn.radius=.7071067811865476+e,rn.applyMatrix4(t.matrixWorld),this.intersectsSphere(rn)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Os.x=n.normal.x>0?t.max.x:t.min.x,Os.y=n.normal.y>0?t.max.y:t.min.y,Os.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Os)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Jo=new le;class io{constructor(){this.coordinateSystem=mi,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,i=this._frustums;for(let n=0;n<e.length;n++){const r=e[n];Jo.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0&&(i[n]=new cs),i[n].setFromProjectionMatrix(Jo,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,i=t._frustums;for(let n=0;n<t._count;n++)e[n]===void 0&&(e[n]=new cs),e[n].copy(i[n]);return this._count=t._count,this}clone(){return new io().copy(this)}}class Vh extends dn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Qo=new le,Oa=new lc,Bs=new fr,ks=new F;class Wh extends be{constructor(t=new Fe,e=new Vh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bs.copy(i.boundingSphere),Bs.applyMatrix4(n),Bs.radius+=r,t.ray.intersectsSphere(Bs)===!1)return;Qo.copy(n).invert(),Oa.copy(t.ray).applyMatrix4(Qo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let _=u,y=f;_<y;_++){const m=c.getX(_);ks.fromBufferAttribute(d,m),jo(ks,m,l,n,t,e,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let _=u,y=f;_<y;_++)ks.fromBufferAttribute(d,_),jo(ks,_,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function jo(s,t,e,i,n,r,a){const o=Oa.distanceSqToPoint(s);if(o<e){const l=new F;Oa.closestPointToPoint(s,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class cc extends Ue{constructor(t=[],e=In,i,n,r,a,o,l,c,h){super(t,e,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class no extends Ue{constructor(t,e,i,n,r,a,o,l,c){super(t,e,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Un extends Ue{constructor(t,e,i=Ei,n,r,a,o=Ne,l=Ne,c,h=$i,d=1){if(h!==$i&&h!==Xi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new to(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class hc extends Un{constructor(t,e=Ei,i=In,n,r,a=Ne,o=Ne,l,c=$i){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,n,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class dc extends Ue{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Zi extends Fe{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;_("z","y","x",-1,-1,i,e,t,a,r,0),_("z","y","x",1,-1,i,e,-t,a,r,1),_("x","z","y",1,1,t,i,e,n,a,2),_("x","z","y",1,-1,t,i,-e,n,a,3),_("x","y","z",1,-1,t,e,i,n,r,4),_("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(d,2));function _(y,m,p,M,T,b,A,w,g,S,N){const P=b/g,I=A/S,O=b/2,W=A/2,D=w/2,G=g+1,$=S+1;let H=0,nt=0;const q=new F;for(let j=0;j<$;j++){const et=j*I-W;for(let wt=0;wt<G;wt++){const Bt=wt*P-O;q[y]=Bt*M,q[m]=et*T,q[p]=D,c.push(q.x,q.y,q.z),q[y]=0,q[m]=0,q[p]=w>0?1:-1,h.push(q.x,q.y,q.z),d.push(wt/g),d.push(1-j/S),H+=1}}for(let j=0;j<S;j++)for(let et=0;et<g;et++){const wt=u+et+G*j,Bt=u+et+G*(j+1),Z=u+(et+1)+G*(j+1),_t=u+(et+1)+G*j;l.push(wt,Bt,_t),l.push(Bt,Z,_t),nt+=6}o.addGroup(f,nt,N),f+=nt,u+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class so extends Fe{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new F,h=new Rt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=i+d/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(o,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new so(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ji extends Fe{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),r=Math.floor(r);const h=[],d=[],u=[],f=[];let _=0;const y=[],m=i/2;let p=0;M(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new ie(d,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(f,2));function M(){const b=new F,A=new F;let w=0;const g=(e-t)/i;for(let S=0;S<=r;S++){const N=[],P=S/r,I=P*(e-t)+t;for(let O=0;O<=n;O++){const W=O/n,D=W*l+o,G=Math.sin(D),$=Math.cos(D);A.x=I*G,A.y=-P*i+m,A.z=I*$,d.push(A.x,A.y,A.z),b.set(G,g,$).normalize(),u.push(b.x,b.y,b.z),f.push(W,1-P),N.push(_++)}y.push(N)}for(let S=0;S<n;S++)for(let N=0;N<r;N++){const P=y[N][S],I=y[N+1][S],O=y[N+1][S+1],W=y[N][S+1];(t>0||N!==0)&&(h.push(P,I,W),w+=3),(e>0||N!==r-1)&&(h.push(I,O,W),w+=3)}c.addGroup(p,w,0),p+=w}function T(b){const A=_,w=new Rt,g=new F;let S=0;const N=b===!0?t:e,P=b===!0?1:-1;for(let O=1;O<=n;O++)d.push(0,m*P,0),u.push(0,P,0),f.push(.5,.5),_++;const I=_;for(let O=0;O<=n;O++){const D=O/n*l+o,G=Math.cos(D),$=Math.sin(D);g.x=N*$,g.y=m*P,g.z=N*G,d.push(g.x,g.y,g.z),u.push(0,P,0),w.x=G*.5+.5,w.y=$*.5*P+.5,f.push(w.x,w.y),_++}for(let O=0;O<n;O++){const W=A+O,D=I+O;b===!0?h.push(D,D+1,W):h.push(D+1,D,W),S+=3}c.addGroup(p,S,b===!0?1:2),p+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ji(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ge extends Ji{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ge(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pr extends Fe{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const r=[],a=[];o(n),c(i),h(),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(r.slice(),3)),this.setAttribute("uv",new ie(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const T=new F,b=new F,A=new F;for(let w=0;w<e.length;w+=3)f(e[w+0],T),f(e[w+1],b),f(e[w+2],A),l(T,b,A,M)}function l(M,T,b,A){const w=A+1,g=[];for(let S=0;S<=w;S++){g[S]=[];const N=M.clone().lerp(b,S/w),P=T.clone().lerp(b,S/w),I=w-S;for(let O=0;O<=I;O++)O===0&&S===w?g[S][O]=N:g[S][O]=N.clone().lerp(P,O/I)}for(let S=0;S<w;S++)for(let N=0;N<2*(w-S)-1;N++){const P=Math.floor(N/2);N%2===0?(u(g[S][P+1]),u(g[S+1][P]),u(g[S][P])):(u(g[S][P+1]),u(g[S+1][P+1]),u(g[S+1][P]))}}function c(M){const T=new F;for(let b=0;b<r.length;b+=3)T.x=r[b+0],T.y=r[b+1],T.z=r[b+2],T.normalize().multiplyScalar(M),r[b+0]=T.x,r[b+1]=T.y,r[b+2]=T.z}function h(){const M=new F;for(let T=0;T<r.length;T+=3){M.x=r[T+0],M.y=r[T+1],M.z=r[T+2];const b=m(M)/2/Math.PI+.5,A=p(M)/Math.PI+.5;a.push(b,1-A)}_(),d()}function d(){for(let M=0;M<a.length;M+=6){const T=a[M+0],b=a[M+2],A=a[M+4],w=Math.max(T,b,A),g=Math.min(T,b,A);w>.9&&g<.1&&(T<.2&&(a[M+0]+=1),b<.2&&(a[M+2]+=1),A<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,T){const b=M*3;T.x=t[b+0],T.y=t[b+1],T.z=t[b+2]}function _(){const M=new F,T=new F,b=new F,A=new F,w=new Rt,g=new Rt,S=new Rt;for(let N=0,P=0;N<r.length;N+=9,P+=6){M.set(r[N+0],r[N+1],r[N+2]),T.set(r[N+3],r[N+4],r[N+5]),b.set(r[N+6],r[N+7],r[N+8]),w.set(a[P+0],a[P+1]),g.set(a[P+2],a[P+3]),S.set(a[P+4],a[P+5]),A.copy(M).add(T).add(b).divideScalar(3);const I=m(A);y(w,P+0,M,I),y(g,P+2,T,I),y(S,P+4,b,I)}}function y(M,T,b,A){A<0&&M.x===1&&(a[T]=M.x-1),b.x===0&&b.z===0&&(a[T]=A/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pr(t.vertices,t.indices,t.radius,t.detail)}}class ro extends pr{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ro(t.radius,t.detail)}}class Fn extends pr{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Fn(t.radius,t.detail)}}class wi extends Fe{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=t/o,u=e/l,f=[],_=[],y=[],m=[];for(let p=0;p<h;p++){const M=p*u-a;for(let T=0;T<c;T++){const b=T*d-r;_.push(b,-M,0),y.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const T=M+c*p,b=M+c*(p+1),A=M+1+c*(p+1),w=M+1+c*p;f.push(T,b,w),f.push(b,A,w)}this.setIndex(f),this.setAttribute("position",new ie(_,3)),this.setAttribute("normal",new ie(y,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wi(t.width,t.height,t.widthSegments,t.heightSegments)}}class bi extends Fe{constructor(t=.5,e=1,i=32,n=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],c=[],h=[];let d=t;const u=(e-t)/n,f=new F,_=new Rt;for(let y=0;y<=n;y++){for(let m=0;m<=i;m++){const p=r+m/i*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),_.x=(f.x/e+1)/2,_.y=(f.y/e+1)/2,h.push(_.x,_.y)}d+=u}for(let y=0;y<n;y++){const m=y*(i+1);for(let p=0;p<i;p++){const M=p+m,T=M,b=M+i+1,A=M+i+2,w=M+1;o.push(T,b,w),o.push(b,A,w)}}this.setIndex(o),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bi(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class je extends Fe{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new F,u=new F,f=[],_=[],y=[],m=[];for(let p=0;p<=i;p++){const M=[],T=p/i,b=a+T*o,A=t*Math.cos(b),w=Math.sqrt(t*t-A*A);let g=0;p===0&&a===0?g=.5/e:p===i&&l===Math.PI&&(g=-.5/e);for(let S=0;S<=e;S++){const N=S/e,P=n+N*r;d.x=-w*Math.cos(P),d.y=A,d.z=w*Math.sin(P),_.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(N+g,1-T),M.push(c++)}h.push(M)}for(let p=0;p<i;p++)for(let M=0;M<e;M++){const T=h[p][M+1],b=h[p][M],A=h[p+1][M],w=h[p+1][M+1];(p!==0||a>0)&&f.push(T,b,w),(p!==i-1||l<Math.PI)&&f.push(b,A,w)}this.setIndex(f),this.setAttribute("position",new ie(_,3)),this.setAttribute("normal",new ie(y,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new je(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class lr extends Fe{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);const l=[],c=[],h=[],d=[],u=new F,f=new F,_=new F;for(let y=0;y<=i;y++){const m=a+y/i*o;for(let p=0;p<=n;p++){const M=p/n*r;f.x=(t+e*Math.cos(m))*Math.cos(M),f.y=(t+e*Math.cos(m))*Math.sin(M),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),_.subVectors(f,u).normalize(),h.push(_.x,_.y,_.z),d.push(p/n),d.push(y/i)}}for(let y=1;y<=i;y++)for(let m=1;m<=n;m++){const p=(n+1)*y+m-1,M=(n+1)*(y-1)+m-1,T=(n+1)*(y-1)+m,b=(n+1)*y+m;l.push(p,M,b),l.push(M,T,b)}this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function On(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];if(tl(n))n.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(tl(n[0])){const r=[];for(let a=0,o=n.length;a<o;a++)r[a]=n[a].clone();t[e][i]=r}else t[e][i]=n.slice();else t[e][i]=n}}return t}function We(s){const t={};for(let e=0;e<s.length;e++){const i=On(s[e]);for(const n in i)t[n]=i[n]}return t}function tl(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Xh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function uc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const hs={clone:On,merge:We};var qh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ke extends dn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qh,this.fragmentShader=Yh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=On(t.uniforms),this.uniformsGroups=Xh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new Ut().setHex(n.value);break;case"v2":this.uniforms[i].value=new Rt().fromArray(n.value);break;case"v3":this.uniforms[i].value=new F().fromArray(n.value);break;case"v4":this.uniforms[i].value=new me().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Ot().fromArray(n.value);break;case"m4":this.uniforms[i].value=new le().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class fc extends Ke{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ao extends dn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Na,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $h extends dn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Kh extends dn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const qr={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(el(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!el(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function el(s){try{const t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Zh{constructor(t,e,i){const n=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],_=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Jh=new Zh;class oo{constructor(t){this.manager=t!==void 0?t:Jh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}oo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Tn=new WeakMap;class Qh extends oo{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=qr.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=Tn.get(a);d===void 0&&(d=[],Tn.set(a,d)),d.push({onLoad:e,onError:n})}return a}const o=os("img");function l(){h(),e&&e(this);const d=Tn.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}Tn.delete(this),r.manager.itemEnd(t)}function c(d){h(),n&&n(d),qr.remove(`image:${t}`);const u=Tn.get(this)||[];for(let f=0;f<u.length;f++){const _=u[f];_.onError&&_.onError(d)}Tn.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),qr.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}}class jh extends oo{constructor(t){super(t)}load(t,e,i,n){const r=new Ue,a=new Qh(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,n),r}}class lo extends be{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class td extends lo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Yr=new le,il=new F,nl=new F;class pc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.mapType=ii,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cs,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;il.setFromMatrixPosition(t.matrixWorld),e.position.copy(il),nl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nl),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){Yr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Yr,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=n?n.z/r.x:1,o=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;t.coordinateSystem===as||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Yr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const zs=new F,Hs=new zn,xi=new F;class mc extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(zs,Hs,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zs,Hs,xi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(zs,Hs,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zs,Hs,xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new F,sl=new Rt,rl=new Rt;class li extends mc{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ua*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ua*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z)}getViewSize(t,e){return this.getViewBounds(t,sl,rl),e.subVectors(rl,sl)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(br*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class ed extends pc{constructor(){super(new li(90,1,.5,500)),this.isPointLightShadow=!0}}class Ba extends lo{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new ed}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class co extends mc{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class id extends pc{constructor(){super(new co(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class al extends lo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new id}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const An=-90,Rn=1;class ka extends be{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new li(An,Rn,t,e);n.layers=this.layers,this.add(n);const r=new li(An,Rn,t,e);r.layers=this.layers,this.add(r);const a=new li(An,Rn,t,e);a.layers=this.layers,this.add(a);const o=new li(An,Rn,t,e);o.layers=this.layers,this.add(o);const l=new li(An,Rn,t,e);l.layers=this.layers,this.add(l);const c=new li(An,Rn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===mi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===as)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=y,t.setRenderTarget(i,5,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class nd extends li{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class sd{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=rd.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function rd(){this._document.hidden===!1&&this.reset()}function ol(s,t,e,i){const n=ad(i);switch(e){case ql:return s*t;case $l:return s*t/n.components*n.byteLength;case Ja:return s*t/n.components*n.byteLength;case ln:return s*t*2/n.components*n.byteLength;case Qa:return s*t*2/n.components*n.byteLength;case Yl:return s*t*3/n.components*n.byteLength;case Si:return s*t*4/n.components*n.byteLength;case ja:return s*t*4/n.components*n.byteLength;case Ys:case $s:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ks:case Zs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ra:case oa:return Math.max(s,16)*Math.max(t,8)/4;case sa:case aa:return Math.max(s,8)*Math.max(t,8)/2;case la:case ca:case da:case ua:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ha:case ir:case fa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case pa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ma:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ga:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case _a:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case xa:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case va:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ma:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ya:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Sa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ba:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ea:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case wa:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ta:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Aa:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ra:case Ca:case Pa:return Math.ceil(s/4)*Math.ceil(t/4)*16;case La:case Da:return Math.ceil(s/4)*Math.ceil(t/4)*8;case nr:case Ia:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ad(s){switch(s){case ii:case Gl:return{byteLength:1,components:1};case rs:case Vl:case Je:return{byteLength:2,components:1};case Ka:case Za:return{byteLength:2,components:4};case Ei:case $a:case yi:return{byteLength:4,components:1};case Wl:case Xl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ha}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ha);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gc(){let s=null,t=!1,e=null,i=null;function n(r,a){i=s.requestAnimationFrame(n),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function od(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,_)=>f.start-_.start);let u=0;for(let f=1;f<d.length;f++){const _=d[u],y=d[f];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,_=d.length;f<_;f++){const y=d[f];s.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var ld=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ud=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,md=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,_d=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Md=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ad=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Pd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ld=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Dd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Id=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ud=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Od="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,zd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Hd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$d=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,jd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,tu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,su=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ru=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,au=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ou=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cu=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,hu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,du=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_u=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yu=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Su=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Eu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Tu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Au=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ru=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Pu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Lu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Du=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Iu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Uu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ou=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ku=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Wu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$u=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ku=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ju=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ju=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ef=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,of=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,df=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ff=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_f=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ef=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Af=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Df=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,If=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ff=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Of=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:ld,alphahash_pars_fragment:cd,alphamap_fragment:hd,alphamap_pars_fragment:dd,alphatest_fragment:ud,alphatest_pars_fragment:fd,aomap_fragment:pd,aomap_pars_fragment:md,batching_pars_vertex:gd,batching_vertex:_d,begin_vertex:xd,beginnormal_vertex:vd,bsdfs:Md,iridescence_fragment:yd,bumpmap_pars_fragment:Sd,clipping_planes_fragment:bd,clipping_planes_pars_fragment:Ed,clipping_planes_pars_vertex:wd,clipping_planes_vertex:Td,color_fragment:Ad,color_pars_fragment:Rd,color_pars_vertex:Cd,color_vertex:Pd,common:Ld,defaultnormal_vertex:Dd,displacementmap_pars_vertex:Id,displacementmap_vertex:Nd,emissivemap_fragment:Ud,emissivemap_pars_fragment:Fd,colorspace_fragment:Od,colorspace_pars_fragment:Bd,envmap_fragment:kd,envmap_common_pars_fragment:zd,envmap_pars_fragment:Hd,envmap_pars_vertex:Gd,envmap_physical_pars_fragment:jd,envmap_vertex:Vd,fog_vertex:Wd,fog_pars_vertex:Xd,fog_fragment:qd,fog_pars_fragment:Yd,gradientmap_pars_fragment:$d,lightmap_pars_fragment:Kd,lights_lambert_fragment:Zd,lights_lambert_pars_fragment:Jd,lights_pars_begin:Qd,lights_toon_fragment:tu,lights_toon_pars_fragment:eu,lights_phong_fragment:iu,lights_phong_pars_fragment:nu,lights_physical_fragment:su,lights_physical_pars_fragment:ru,lights_fragment_begin:au,lights_fragment_maps:ou,lights_fragment_end:lu,lightprobes_pars_fragment:cu,logdepthbuf_fragment:hu,logdepthbuf_pars_fragment:du,logdepthbuf_pars_vertex:uu,logdepthbuf_vertex:fu,map_fragment:pu,map_pars_fragment:mu,map_particle_fragment:gu,map_particle_pars_fragment:_u,metalnessmap_fragment:xu,metalnessmap_pars_fragment:vu,morphinstance_vertex:Mu,morphcolor_vertex:yu,morphnormal_vertex:Su,morphtarget_pars_vertex:bu,morphtarget_vertex:Eu,normal_fragment_begin:wu,normal_fragment_maps:Tu,normal_pars_fragment:Au,normal_pars_vertex:Ru,normal_vertex:Cu,normalmap_pars_fragment:Pu,clearcoat_normal_fragment_begin:Lu,clearcoat_normal_fragment_maps:Du,clearcoat_pars_fragment:Iu,iridescence_pars_fragment:Nu,opaque_fragment:Uu,packing:Fu,premultiplied_alpha_fragment:Ou,project_vertex:Bu,dithering_fragment:ku,dithering_pars_fragment:zu,roughnessmap_fragment:Hu,roughnessmap_pars_fragment:Gu,shadowmap_pars_fragment:Vu,shadowmap_pars_vertex:Wu,shadowmap_vertex:Xu,shadowmask_pars_fragment:qu,skinbase_vertex:Yu,skinning_pars_vertex:$u,skinning_vertex:Ku,skinnormal_vertex:Zu,specularmap_fragment:Ju,specularmap_pars_fragment:Qu,tonemapping_fragment:ju,tonemapping_pars_fragment:tf,transmission_fragment:ef,transmission_pars_fragment:nf,uv_pars_fragment:sf,uv_pars_vertex:rf,uv_vertex:af,worldpos_vertex:of,background_vert:lf,background_frag:cf,backgroundCube_vert:hf,backgroundCube_frag:df,cube_vert:uf,cube_frag:ff,depth_vert:pf,depth_frag:mf,distance_vert:gf,distance_frag:_f,equirect_vert:xf,equirect_frag:vf,linedashed_vert:Mf,linedashed_frag:yf,meshbasic_vert:Sf,meshbasic_frag:bf,meshlambert_vert:Ef,meshlambert_frag:wf,meshmatcap_vert:Tf,meshmatcap_frag:Af,meshnormal_vert:Rf,meshnormal_frag:Cf,meshphong_vert:Pf,meshphong_frag:Lf,meshphysical_vert:Df,meshphysical_frag:If,meshtoon_vert:Nf,meshtoon_frag:Uf,points_vert:Ff,points_frag:Of,shadow_vert:Bf,shadow_frag:kf,sprite_vert:zf,sprite_frag:Hf},gt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Mi={basic:{uniforms:We([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:We([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:We([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:We([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:We([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:We([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:We([gt.points,gt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:We([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:We([gt.common,gt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:We([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:We([gt.sprite,gt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distance:{uniforms:We([gt.common,gt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distance_vert,fragmentShader:Wt.distance_frag},shadow:{uniforms:We([gt.lights,gt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Mi.physical={uniforms:We([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const Gs={r:0,b:0,g:0},Gf=new le,_c=new Ot;_c.set(-1,0,0,0,1,0,0,0,1);function Vf(s,t,e,i,n,r){const a=new Ut(0);let o=n===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){const b=M.backgroundBlurriness>0;T=t.get(T,b)}return T}function _(M){let T=!1;const b=f(M);b===null?m(a,o):b&&b.isColor&&(m(b,1),T=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(M,T){const b=f(T);b&&b.isCubeTexture?(c===void 0&&(c=new Mt(new Zi(1,1,1),new Ke({name:"BackgroundCubeMaterial",uniforms:On(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Gf.makeRotationFromEuler(T.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_c),c.material.toneMapped=$t.getTransfer(b.colorSpace)!==jt,(h!==b||d!==b.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,u=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Mt(new wi(2,2),new Ke({name:"BackgroundMaterial",uniforms:On(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=$t.getTransfer(b.colorSpace)!==jt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,u=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,T){M.getRGB(Gs,uc(s)),e.buffers.color.setClear(Gs.r,Gs.g,Gs.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,T=1){a.set(M),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:_,addToRenderList:y,dispose:p}}function Wf(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=u(null);let r=n,a=!1;function o(I,O,W,D,G){let $=!1;const H=d(I,D,W,O);r!==H&&(r=H,c(r.object)),$=f(I,D,W,G),$&&_(I,D,W,G),G!==null&&t.update(G,s.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,b(I,O,W,D),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return s.createVertexArray()}function c(I){return s.bindVertexArray(I)}function h(I){return s.deleteVertexArray(I)}function d(I,O,W,D){const G=D.wireframe===!0;let $=i[O.id];$===void 0&&($={},i[O.id]=$);const H=I.isInstancedMesh===!0?I.id:0;let nt=$[H];nt===void 0&&(nt={},$[H]=nt);let q=nt[W.id];q===void 0&&(q={},nt[W.id]=q);let j=q[G];return j===void 0&&(j=u(l()),q[G]=j),j}function u(I){const O=[],W=[],D=[];for(let G=0;G<e;G++)O[G]=0,W[G]=0,D[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:W,attributeDivisors:D,object:I,attributes:{},index:null}}function f(I,O,W,D){const G=r.attributes,$=O.attributes;let H=0;const nt=W.getAttributes();for(const q in nt)if(nt[q].location>=0){const et=G[q];let wt=$[q];if(wt===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(wt=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(wt=I.instanceColor)),et===void 0||et.attribute!==wt||wt&&et.data!==wt.data)return!0;H++}return r.attributesNum!==H||r.index!==D}function _(I,O,W,D){const G={},$=O.attributes;let H=0;const nt=W.getAttributes();for(const q in nt)if(nt[q].location>=0){let et=$[q];et===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(et=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(et=I.instanceColor));const wt={};wt.attribute=et,et&&et.data&&(wt.data=et.data),G[q]=wt,H++}r.attributes=G,r.attributesNum=H,r.index=D}function y(){const I=r.newAttributes;for(let O=0,W=I.length;O<W;O++)I[O]=0}function m(I){p(I,0)}function p(I,O){const W=r.newAttributes,D=r.enabledAttributes,G=r.attributeDivisors;W[I]=1,D[I]===0&&(s.enableVertexAttribArray(I),D[I]=1),G[I]!==O&&(s.vertexAttribDivisor(I,O),G[I]=O)}function M(){const I=r.newAttributes,O=r.enabledAttributes;for(let W=0,D=O.length;W<D;W++)O[W]!==I[W]&&(s.disableVertexAttribArray(W),O[W]=0)}function T(I,O,W,D,G,$,H){H===!0?s.vertexAttribIPointer(I,O,W,G,$):s.vertexAttribPointer(I,O,W,D,G,$)}function b(I,O,W,D){y();const G=D.attributes,$=W.getAttributes(),H=O.defaultAttributeValues;for(const nt in $){const q=$[nt];if(q.location>=0){let j=G[nt];if(j===void 0&&(nt==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),nt==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),j!==void 0){const et=j.normalized,wt=j.itemSize,Bt=t.get(j);if(Bt===void 0)continue;const Z=Bt.buffer,_t=Bt.type,St=Bt.bytesPerElement,Lt=_t===s.INT||_t===s.UNSIGNED_INT||j.gpuType===$a;if(j.isInterleavedBufferAttribute){const xt=j.data,zt=xt.isInterleavedBuffer===!0?xt.stride:xt.itemSize,_e=j.offset;if(xt.isInstancedInterleavedBuffer||xt.isInstancedBufferAttribute){for(let It=0;It<q.locationSize;It++)p(q.location+It,xt.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let It=0;It<q.locationSize;It++)m(q.location+It);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let It=0;It<q.locationSize;It++)T(q.location+It,wt/q.locationSize,_t,et,zt*St,(_e+wt/q.locationSize*It)*St,Lt)}else{if(j.isInstancedBufferAttribute){for(let xt=0;xt<q.locationSize;xt++)p(q.location+xt,j.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let xt=0;xt<q.locationSize;xt++)m(q.location+xt);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let xt=0;xt<q.locationSize;xt++)T(q.location+xt,wt/q.locationSize,_t,et,wt*St,wt/q.locationSize*xt*St,Lt)}}else if(H!==void 0){const et=H[nt];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv(q.location,et);break;case 3:s.vertexAttrib3fv(q.location,et);break;case 4:s.vertexAttrib4fv(q.location,et);break;default:s.vertexAttrib1fv(q.location,et)}}}}M()}function A(){N();for(const I in i){const O=i[I];for(const W in O){const D=O[W];for(const G in D){const $=D[G];for(const H in $)h($[H].object),delete $[H];delete D[G]}}delete i[I]}}function w(I){if(i[I.id]===void 0)return;const O=i[I.id];for(const W in O){const D=O[W];for(const G in D){const $=D[G];for(const H in $)h($[H].object),delete $[H];delete D[G]}}delete i[I.id]}function g(I){for(const O in i){const W=i[O];for(const D in W){const G=W[D];if(G[I.id]===void 0)continue;const $=G[I.id];for(const H in $)h($[H].object),delete $[H];delete G[I.id]}}}function S(I){for(const O in i){const W=i[O],D=I.isInstancedMesh===!0?I.id:0,G=W[D];if(G!==void 0){for(const $ in G){const H=G[$];for(const nt in H)h(H[nt].object),delete H[nt];delete G[$]}delete W[D],Object.keys(W).length===0&&delete i[O]}}}function N(){P(),a=!0,r!==n&&(r=n,c(r.object))}function P(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:N,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:g,initAttributes:y,enableAttribute:m,disableUnusedAttributes:M}}function Xf(s,t,e){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function qf(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const g=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(g){return!(g!==Si&&i.convert(g)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){const S=g===Je&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==ii&&g!==yi&&!S&&i.convert(g)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Nt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Nt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:b,maxSamples:A,samples:w}}function Yf(s){const t=this;let e=null,i=0,n=!1,r=!1;const a=new Gi,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const _=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!n||_===null||_.length===0||r&&!m)r?h(null):c();else{const M=r?0:i,T=M*4;let b=p.clippingState||null;l.value=b,b=h(_,u,T,f);for(let A=0;A!==T;++A)b[A]=e[A];p.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,_){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const p=f+y*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,b=f;T!==y;++T,b+=4)a.copy(d[T]).applyMatrix4(M,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}class ho extends Qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new cc(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Zi(5,5,5),r=new Ke({name:"CubemapFromEquirect",uniforms:On(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ze,blending:on});r.uniforms.tEquirect.value=e;const a=new Mt(n,r),o=e.minFilter;return e.minFilter===Wi&&(e.minFilter=$e),new ka(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}}const ll=256,$f=3,Kf=20,xc=256,vc=16,Zf=3,Jf=new F,Qf=new Ut;class cr{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ka(1,10,null),this._boxMesh=new Mt(new Zi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,n=100,r={}){const{size:a=256,position:o=Jf}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,_=l.autoClearStencil,y=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(t.background=l.getClearColor(Qf));const m=new ka(i,n,h);return m.position.copy(o),m.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=_,t.background=y,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(ll,vh(t))}_fromTexture(t,e){t.mapping===In||t.mapping===ss?this._setSize(t.image.length===0?ll:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){const t=this._cubeSize,e=cl(t,!1,!1),i=Math.log2(t)-$f;for(let n=0;n<=i;n++)e.texture.mipmaps.push({width:t>>n,height:t>>n});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=cl(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){const n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,n),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===In||t.mapping===ss?(this._cubemapMaterial===null&&(this._cubemapMaterial=dl()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=hl()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=jf(),this._integrationMaterial=tp());const e=this._cubeSize,i=t.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/vc);for(let a=0;a<=i;a++){const o=cr.lodToRoughness(a,i);if(a>i-Zf)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(xc*Math.pow(o,4)))+.5:0;n.roughness.value=o,n.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=ep());const i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(t,0,i),n.envMap.value=t.texture,this._renderCube(r,0,i)}}function cl(s,t,e){return new ho(s,{minFilter:Wi,generateMipmaps:t,type:Je,colorSpace:sr,depthBuffer:e})}function fs(s,t,e){return new Ke({name:s,uniforms:t,vertexShader:Wt.cube_vert,fragmentShader:e,side:Ze,blending:on,depthTest:!1,depthWrite:!1})}function jf(){return fs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${xc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function tp(){return fs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:vc}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ep(){return fs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Kf}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function hl(){return fs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function dl(){return fs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ip(s){let t=new WeakMap,e=new WeakMap,i=null;function n(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===vr||f===Mr)if(t.has(u)){const _=t.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const y=new ho(_.height);return y.fromEquirectangularTexture(s,u),t.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const f=u.mapping,_=f===vr||f===Mr,y=f===In||f===ss;if(_||y){let m=e.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new cr(s)),m=_?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const M=u.image;return _&&M&&M.height>0||y&&M&&l(M)?(i===null&&(i=new cr(s)),m=_?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===vr?u.mapping=In:f===Mr&&(u.mapping=ss),u}function l(u){let f=0;const _=6;for(let y=0;y<_;y++)u[y]!==void 0&&f++;return f===_}function c(u){const f=u.target;f.removeEventListener("dispose",c);const _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function np(s){const t={};function e(i){if(t[i]!==void 0)return t[i];const n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&Js("WebGLRenderer: "+i+" extension not supported."),n}}}function sp(s,t,e,i){const n={},r=new WeakMap,a=new FinalizationRegistry(_=>delete n[_]);function o(_){l(_.target)}function l(_){_.index!==null&&t.remove(_.index);for(const m in _.attributes)t.remove(_.attributes[m]);_.removeEventListener("dispose",o),delete n[_.id],a.unregister(_);const y=r.get(_);y&&(t.remove(y),r.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function c(_,y){return n[y.id]!==void 0||(y.addEventListener("dispose",o),n[y.id]=new WeakRef(y),a.register(y,y.id,y),e.memory.geometries++),y}function h(_){const y=_.attributes;for(const m in y)t.update(y[m],s.ARRAY_BUFFER)}function d(_){const y=_.index,m=_.attributes.position;let p=0;if(m===void 0)return;const M=y!==null?y.array.length:m.array.length/3-1,T=m.count>=65535?ac:rc,b=new T(Math.ceil(M/3)*6,1),A=b.array;if(y!==null){const g=y.array;p=y.version;for(let S=0,N=0;S<M;S+=3){const P=g[S+0],I=g[S+1],O=g[S+2];A[N++]=P,A[N++]=I,A[N++]=I,A[N++]=O,A[N++]=O,A[N++]=P}}else{p=m.version;for(let g=0,S=0;g<M;g+=3){const N=g+0,P=g+1,I=g+2;A[S++]=N,A[S++]=P,A[S++]=P,A[S++]=I,A[S++]=I,A[S++]=N}}b.version=p;const w=r.get(_);w&&t.remove(w),r.set(_,b)}function u(_){const y=r.get(_);if(y){const m=_.index;m!==null&&y.version<m.version&&d(_)}else d(_);return r.get(_)}function f(){for(const _ in n){const y=n[_].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function rp(s,t,e){let i;function n(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){s.drawElements(i,u,r,d*a),e.update(u,i,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(i,u,r,d*a,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let y=0;for(let m=0;m<f;m++)y+=u[m];e.update(y,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ap(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Jt("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function op(s,t,e){const i=new WeakMap,n=new me;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let P=function(){S.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var f=P;u!==void 0&&u.texture.dispose();const _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let b=0;_===!0&&(b=1),y===!0&&(b=2),m===!0&&(b=3);let A=o.attributes.position.count*b,w=1;A>t.maxTextureSize&&(w=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const g=new Float32Array(A*w*4*d),S=new ic(g,A,w,d);S.type=yi,S.needsUpdate=!0;const N=b*4;for(let I=0;I<d;I++){const O=p[I],W=M[I],D=T[I],G=A*w*4*I;for(let $=0;$<O.count;$++){const H=$*N;_===!0&&(n.fromBufferAttribute(O,$),g[G+H+0]=n.x,g[G+H+1]=n.y,g[G+H+2]=n.z,g[G+H+3]=0),y===!0&&(n.fromBufferAttribute(W,$),g[G+H+4]=n.x,g[G+H+5]=n.y,g[G+H+6]=n.z,g[G+H+7]=0),m===!0&&(n.fromBufferAttribute(D,$),g[G+H+8]=n.x,g[G+H+9]=n.y,g[G+H+10]=n.z,g[G+H+11]=D.itemSize===4?n.w:1)}}u={count:d,texture:S,size:new Rt(A,w)},i.set(o,u),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const y=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(s,"morphTargetBaseInfluence",y),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function lp(s,t,e,i,n){let r=new WeakMap;function a(c){const h=n.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const cp={[Ga]:"LINEAR_TONE_MAPPING",[Va]:"REINHARD_TONE_MAPPING",[Wa]:"CINEON_TONE_MAPPING",[dr]:"ACES_FILMIC_TONE_MAPPING",[qa]:"AGX_TONE_MAPPING",[Ya]:"NEUTRAL_TONE_MAPPING",[Xa]:"CUSTOM_TONE_MAPPING"};function hp(s,t,e,i,n,r){const a=new Qe(t,e,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new Fe;h.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ie([0,2,0,0,2,0],2));const d=new fc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Mt(h,d),f=new co(-1,1,1,-1,0,1);let _=null,y=null,m=!1,p,M=null,T=[],b=!1;this.setSize=function(A,w){a.setSize(A,w),o!==null&&o.setSize(A,w),l!==null&&l.setSize(A,w);for(let g=0;g<T.length;g++){const S=T[g];S.setSize&&S.setSize(A,w)}},this.setEffects=function(A){T=A,b=T.length>0&&T[0].isRenderPass===!0;const w=a.width,g=a.height;T.length>0&&o===null&&(o=new Qe(w,g,{type:Je,depthBuffer:!1,stencilBuffer:!1}),l=new Qe(w,g,{type:Je,depthBuffer:!1,stencilBuffer:!1}));const S=n===!0&&T.some(N=>N.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new Un(w,g),r===!0&&(c.format=Xi,c.type=Nn)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let N=0;N<T.length;N++){const P=T[N];P.setSize&&P.setSize(w,g),S&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(A,w){if(m||A.toneMapping===Ii&&T.length===0)return!1;if(M=w,w!==null){const g=w.width,S=w.height;(a.width!==g||a.height!==S)&&this.setSize(g,S)}return b===!1&&A.setRenderTarget(a),p=A.toneMapping,A.toneMapping=Ii,!0},this.hasRenderPass=function(){return b},this.end=function(A,w){A.toneMapping=p,m=!0;let g=a,S=o;for(let N=0;N<T.length;N++){const P=T[N];P.enabled!==!1&&(P.render(A,S,g,w),P.needsSwap!==!1&&(g=S,S=S===o?l:o))}if(_!==A.outputColorSpace||y!==A.toneMapping){_=A.outputColorSpace,y=A.toneMapping,d.defines={},$t.getTransfer(_)===jt&&(d.defines.SRGB_TRANSFER="");const N=cp[y];N&&(d.defines[N]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=g.texture,A.setRenderTarget(M),A.render(u,f),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}const Mc=new Ue,yc=new Un(1,1),Sc=new hc(1),bc=new ic,Ec=new wh,wc=new cc,ul=[],fl=[],pl=new Float32Array(16),ml=new Float32Array(9),gl=new Float32Array(4);function Hn(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let r=ul[n];if(r===void 0&&(r=new Float32Array(n),ul[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ee(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function we(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function mr(s,t){let e=fl[t];e===void 0&&(e=new Int32Array(t),fl[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function dp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function up(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2fv(this.addr,t),we(e,t)}}function fp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;s.uniform3fv(this.addr,t),we(e,t)}}function pp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4fv(this.addr,t),we(e,t)}}function mp(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,i))return;gl.set(i),s.uniformMatrix2fv(this.addr,!1,gl),we(e,i)}}function gp(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,i))return;ml.set(i),s.uniformMatrix3fv(this.addr,!1,ml),we(e,i)}}function _p(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,i))return;pl.set(i),s.uniformMatrix4fv(this.addr,!1,pl),we(e,i)}}function xp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function vp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2iv(this.addr,t),we(e,t)}}function Mp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3iv(this.addr,t),we(e,t)}}function yp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4iv(this.addr,t),we(e,t)}}function Sp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function bp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2uiv(this.addr,t),we(e,t)}}function Ep(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3uiv(this.addr,t),we(e,t)}}function wp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4uiv(this.addr,t),we(e,t)}}function gr(s){return s.version===0&&(s.compareFunction=Jl,s.needsUpdate=!0),s}function Tp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?r=gr(yc):r=Mc,e.setTexture2D(t||r,n)}function Ap(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Ec,n)}function Rp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=gr(Sc):r=wc,e.setTextureCube(t||r,n)}function Cp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||bc,n)}function Pp(s){switch(s){case 5126:return dp;case 35664:return up;case 35665:return fp;case 35666:return pp;case 35674:return mp;case 35675:return gp;case 35676:return _p;case 5124:case 35670:return xp;case 35667:case 35671:return vp;case 35668:case 35672:return Mp;case 35669:case 35673:return yp;case 5125:return Sp;case 36294:return bp;case 36295:return Ep;case 36296:return wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Tp;case 35679:case 36299:case 36307:return Ap;case 35680:case 36300:case 36308:case 36293:return Rp;case 36289:case 36303:case 36311:case 36292:return Cp}}function Lp(s,t){s.uniform1fv(this.addr,t)}function Dp(s,t){const e=Hn(t,this.size,2);s.uniform2fv(this.addr,e)}function Ip(s,t){const e=Hn(t,this.size,3);s.uniform3fv(this.addr,e)}function Np(s,t){const e=Hn(t,this.size,4);s.uniform4fv(this.addr,e)}function Up(s,t){const e=Hn(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Fp(s,t){const e=Hn(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Op(s,t){const e=Hn(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Bp(s,t){s.uniform1iv(this.addr,t)}function kp(s,t){s.uniform2iv(this.addr,t)}function zp(s,t){s.uniform3iv(this.addr,t)}function Hp(s,t){s.uniform4iv(this.addr,t)}function Gp(s,t){s.uniform1uiv(this.addr,t)}function Vp(s,t){s.uniform2uiv(this.addr,t)}function Wp(s,t){s.uniform3uiv(this.addr,t)}function Xp(s,t){s.uniform4uiv(this.addr,t)}function qp(s,t,e){const i=this.cache,n=t.length,r=mr(e,n);Ee(i,r)||(s.uniform1iv(this.addr,r),we(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=gr(yc):a=Mc;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,r[o])}function Yp(s,t,e){const i=this.cache,n=t.length,r=mr(e,n);Ee(i,r)||(s.uniform1iv(this.addr,r),we(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Ec,r[a])}function $p(s,t,e){const i=this.cache,n=t.length,r=mr(e,n);Ee(i,r)||(s.uniform1iv(this.addr,r),we(i,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=gr(Sc):a=wc;for(let o=0;o!==n;++o)e.setTextureCube(t[o]||a,r[o])}function Kp(s,t,e){const i=this.cache,n=t.length,r=mr(e,n);Ee(i,r)||(s.uniform1iv(this.addr,r),we(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||bc,r[a])}function Zp(s){switch(s){case 5126:return Lp;case 35664:return Dp;case 35665:return Ip;case 35666:return Np;case 35674:return Up;case 35675:return Fp;case 35676:return Op;case 5124:case 35670:return Bp;case 35667:case 35671:return kp;case 35668:case 35672:return zp;case 35669:case 35673:return Hp;case 5125:return Gp;case 36294:return Vp;case 36295:return Wp;case 36296:return Xp;case 35678:case 36198:case 36298:case 36306:case 35682:return qp;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return $p;case 36289:case 36303:case 36311:case 36292:return Kp}}class Jp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Pp(e.type)}}class Qp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zp(e.type)}}class jp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(t,e[o.id],i)}}}const $r=/(\w+)(\])?(\[|\.)?/g;function _l(s,t){s.seq.push(t),s.map[t.id]=t}function tm(s,t,e){const i=s.name,n=i.length;for($r.lastIndex=0;;){const r=$r.exec(i),a=$r.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){_l(e,c===void 0?new Jp(o,s,t):new Qp(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new jp(o),_l(e,d)),e=d}}}class Qs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);tm(o,l,this)}const n=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function xl(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const em=37297;let im=0;function nm(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const vl=new Ot;function sm(s){$t._getMatrix(vl,$t.workingColorSpace,s);const t=`mat3( ${vl.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(s)){case rr:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ml(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+nm(s.getShaderSource(t),o)}else return r}function rm(s,t){const e=sm(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const am={[Ga]:"Linear",[Va]:"Reinhard",[Wa]:"Cineon",[dr]:"ACESFilmic",[qa]:"AgX",[Ya]:"Neutral",[Xa]:"Custom"};function om(s,t){const e=am[t];return e===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Vs=new F;function lm(){$t.getLuminanceCoefficients(Vs);const s=Vs.x.toFixed(4),t=Vs.y.toFixed(4),e=Vs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ts).join(`
`)}function hm(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function dm(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(t,n),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function ts(s){return s!==""}function yl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Sl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const um=/^[ \t]*#include +<([\w\d./]+)>/gm;function za(s){return s.replace(um,fm)}function fm(s,t){const e=Wt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return za(e)}const pm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bl(s){return s.replace(pm,mm)}function mm(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function El(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const gm={[qs]:"SHADOWMAP_TYPE_PCF",[jn]:"SHADOWMAP_TYPE_VSM"};function _m(s){return gm[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const xm={[ss]:"ENVMAP_MODE_REFRACTION"};function vm(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":xm[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Mm={[zl]:"ENVMAP_BLENDING_MULTIPLY",[nh]:"ENVMAP_BLENDING_MIX",[sh]:"ENVMAP_BLENDING_ADD"};function ym(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Mm[s.combine]||"ENVMAP_BLENDING_NONE"}function Sm(s,t,e,i){const n=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=_m(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=vm(e),d=ym(e),u=cm(e),f=hm(r),_=n.createProgram();let y,m,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(ts).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(ts).join(`
`),m.length>0&&(m+=`
`)):(y=[El(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ts).join(`
`),m=[El(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ii?"#define TONE_MAPPING":"",e.toneMapping!==Ii?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Ii?om("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,rm("linearToOutputTexel",e.outputColorSpace),lm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ts).join(`
`)),a=za(a),a=yl(a,e),a=Sl(a,e),o=za(o),o=yl(o,e),o=Sl(o,e),a=bl(a),o=bl(o),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,y=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",e.glslVersion===Do?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Do?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=p+y+a,T=p+m+o,b=xl(n,n.VERTEX_SHADER,M),A=xl(n,n.FRAGMENT_SHADER,T);n.attachShader(_,b),n.attachShader(_,A),e.index0AttributeName!==void 0?n.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function w(P){if(s.debug.checkShaderErrors){const I=n.getProgramInfoLog(_)||"",O=n.getShaderInfoLog(b)||"",W=n.getShaderInfoLog(A)||"",D=I.trim(),G=O.trim(),$=W.trim();let H=!0,nt=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,_,b,A);else{const q=Ml(n,b,"vertex"),j=Ml(n,A,"fragment");Jt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+q+`
`+j)}else D!==""?Nt("WebGLProgram: Program Info Log:",D):(G===""||$==="")&&(nt=!1);nt&&(P.diagnostics={runnable:H,programLog:D,vertexShader:{log:G,prefix:y},fragmentShader:{log:$,prefix:m}})}n.deleteShader(b),n.deleteShader(A),g=new Qs(n,_),S=dm(n,_)}let g;this.getUniforms=function(){return g===void 0&&w(this),g};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=n.getProgramParameter(_,em)),N},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=im++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=A,this}let bm=0;class Em{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new wm(t),e.set(t,i)),i}}class wm{constructor(t){this.id=bm++,this.code=t,this.usedTimes=0}}function Tm(s){return s===ln||s===ir||s===nr}function Am(s,t,e,i,n,r){const a=new nc,o=new Em,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,S,N,P,I,O){const W=P.fog,D=I.geometry,G=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?P.environment:null,$=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,H=t.get(g.envMap||G,$),nt=u[g.type];let q=i.precision;g.precision!==null&&(q=i.getMaxPrecision(g.precision),q!==g.precision&&Nt("WebGLProgram.getParameters:",g.precision,"not supported, using",q,"instead."));const j=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,et=j!==void 0?j.length:0;let wt=0;D.morphAttributes.position!==void 0&&(wt=1),D.morphAttributes.normal!==void 0&&(wt=2),D.morphAttributes.color!==void 0&&(wt=3);let Bt,Z,_t,St;if(nt){const mt=Mi[nt];Bt=mt.vertexShader,Z=mt.fragmentShader}else{Bt=g.vertexShader,Z=g.fragmentShader;const mt=o.getVertexShaderStage(g),ee=o.getFragmentShaderStage(g);o.update(g,mt,ee),_t=mt.id,St=ee.id}const Lt=s.getRenderTarget(),xt=s.state.buffers.depth.getReversed(),zt=I.isInstancedMesh===!0,_e=I.isBatchedMesh===!0,It=!!g.map,te=!!g.matcap,se=!!H,Xt=se&&H.isPMREMTexture===!0,Le=!!g.aoMap,ye=!!g.lightMap,Ye=!!g.bumpMap&&g.wireframe===!1,de=!!g.normalMap,_i=!!g.displacementMap,Te=!!g.emissiveMap,ni=!!g.metalnessMap,si=!!g.roughnessMap,ri=g.anisotropy>0,U=g.clearcoat>0,ai=g.diffuseRoughness>0,ce=g.dispersion>0,he=g.retroreflectivity>0,pt=g.iridescence>0,Se=g.sheen>0,Dt=g.transmission>0,Ft=ri&&!!g.anisotropyMap,E=U&&!!g.clearcoatMap,x=U&&!!g.clearcoatNormalMap,k=U&&!!g.clearcoatRoughnessMap,it=ai&&!!g.diffuseRoughnessMap,Q=pt&&!!g.iridescenceMap,ot=pt&&!!g.iridescenceThicknessMap,ut=Se&&!!g.sheenColorMap,Y=Se&&!!g.sheenRoughnessMap,K=!!g.specularMap,ct=!!g.specularColorMap,C=!!g.specularIntensityMap,J=Dt&&!!g.transmissionMap,X=Dt&&!!g.thicknessMap,ht=!!g.gradientMap,rt=!!g.alphaMap,lt=g.alphaTest>0,Ct=!!g.alphaHash,Vt=!!g.extensions;let st=Ii;g.toneMapped&&(Lt===null||Lt.isXRRenderTarget===!0)&&(st=s.toneMapping);const Pt=Xt?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Gt={shaderID:nt,shaderType:g.type,shaderName:g.name,vertexShader:Bt,fragmentShader:Z,defines:g.defines,customVertexShaderID:_t,customFragmentShaderID:St,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:q,batching:_e,batchingColor:_e&&I._colorsTexture!==null,instancing:zt,instancingColor:zt&&I.instanceColor!==null,instancingMorph:zt&&I.morphTexture!==null,outputColorSpace:Lt===null?s.outputColorSpace:Lt.isXRRenderTarget===!0?Lt.texture.colorSpace:$t.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:It,matcap:te,envMap:se,envMapMode:se&&H.mapping,envMapPMREM:Xt,envMapMaxLod:Xt?Pt.length-1:null,envMapSize:Xt?Pt[0].width:null,aoMap:Le,lightMap:ye,bumpMap:Ye,normalMap:de,displacementMap:_i,emissiveMap:Te,normalMapObjectSpace:de&&g.normalMapType===oh,normalMapTangentSpace:de&&g.normalMapType===Na,packedNormalMap:de&&g.normalMapType===Na&&Tm(g.normalMap.format),metalnessMap:ni,roughnessMap:si,anisotropy:ri,anisotropyMap:Ft,clearcoat:U,clearcoatMap:E,clearcoatNormalMap:x,clearcoatRoughnessMap:k,diffuseRoughness:ai,diffuseRoughnessMap:it,dispersion:ce,retroreflection:he,iridescence:pt,iridescenceMap:Q,iridescenceThicknessMap:ot,sheen:Se,sheenColorMap:ut,sheenRoughnessMap:Y,specularMap:K,specularColorMap:ct,specularIntensityMap:C,transmission:Dt,transmissionMap:J,thicknessMap:X,gradientMap:ht,opaque:g.transparent===!1&&g.blending===es&&g.alphaToCoverage===!1,alphaMap:rt,alphaTest:lt,alphaHash:Ct,combine:g.combine,mapUv:It&&f(g.map.channel),aoMapUv:Le&&f(g.aoMap.channel),lightMapUv:ye&&f(g.lightMap.channel),bumpMapUv:Ye&&f(g.bumpMap.channel),normalMapUv:de&&f(g.normalMap.channel),displacementMapUv:_i&&f(g.displacementMap.channel),emissiveMapUv:Te&&f(g.emissiveMap.channel),metalnessMapUv:ni&&f(g.metalnessMap.channel),roughnessMapUv:si&&f(g.roughnessMap.channel),anisotropyMapUv:Ft&&f(g.anisotropyMap.channel),clearcoatMapUv:E&&f(g.clearcoatMap.channel),clearcoatNormalMapUv:x&&f(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&f(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:it&&f(g.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&f(g.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&f(g.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&f(g.sheenColorMap.channel),sheenRoughnessMapUv:Y&&f(g.sheenRoughnessMap.channel),specularMapUv:K&&f(g.specularMap.channel),specularColorMapUv:ct&&f(g.specularColorMap.channel),specularIntensityMapUv:C&&f(g.specularIntensityMap.channel),transmissionMapUv:J&&f(g.transmissionMap.channel),thicknessMapUv:X&&f(g.thicknessMap.channel),alphaMapUv:rt&&f(g.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(de||ri),vertexNormals:!!D.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!D.attributes.uv&&(It||rt),fog:!!W,useFog:g.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||D.attributes.normal===void 0&&de===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xt,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:wt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:O.filter(mt=>mt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:st,decodeVideoTexture:It&&g.map.isVideoTexture===!0&&$t.getTransfer(g.map.colorSpace)===jt,decodeVideoTextureEmissive:Te&&g.emissiveMap.isVideoTexture===!0&&$t.getTransfer(g.emissiveMap.colorSpace)===jt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===pe,flipSided:g.side===Ze,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Vt&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&g.extensions.multiDraw===!0||_e)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Gt.vertexUv1s=l.has(1),Gt.vertexUv2s=l.has(2),Gt.vertexUv3s=l.has(3),l.clear(),Gt}function y(g){const S=[];if(g.shaderID?S.push(g.shaderID):(S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID)),g.defines!==void 0)for(const N in g.defines)S.push(N),S.push(g.defines[N]);return g.isRawShaderMaterial===!1&&(m(S,g),p(S,g),S.push(s.outputColorSpace)),S.push(g.customProgramCacheKey),S.join()}function m(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapPMREM),g.push(S.envMapMaxLod),g.push(S.envMapSize),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.diffuseRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.numSunLights),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numSunLightShadows),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.numLightProbeGrids),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function p(g,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function M(g){const S=u[g.type];let N;if(S){const P=Mi[S];N=hs.clone(P.uniforms)}else N=g.uniforms;return N}function T(g,S){let N=h.get(S);return N!==void 0?++N.usedTimes:(N=new Sm(s,S,g,n),c.push(N),h.set(S,N)),N}function b(g){if(--g.usedTimes===0){const S=c.indexOf(g);c[S]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function A(g){o.remove(g)}function w(){o.dispose()}return{getParameters:_,getProgramCacheKey:y,getUniforms:M,acquireProgram:T,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:w}}function Rm(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function Cm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function wl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Tl(){const s=[];let t=0;const e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,_,y,m,p){let M=s[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:_,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:p},s[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=_,M.materialVariant=a(u),M.groupOrder=y,M.renderOrder=u.renderOrder,M.z=m,M.group=p),t++,M}function l(u,f,_,y,m,p,M){M.reversedDepth===!0&&(m=-m);const T=o(u,f,_,y,m,p);_.transmission>0?i.push(T):_.transparent===!0?n.push(T):e.push(T)}function c(u,f,_,y,m,p){const M=o(u,f,_,y,m,p);_.transmission>0?i.unshift(M):_.transparent===!0?n.unshift(M):e.unshift(M)}function h(u,f){e.length>1&&e.sort(u||Cm),i.length>1&&i.sort(f||wl),n.length>1&&n.sort(f||wl)}function d(){for(let u=t,f=s.length;u<f;u++){const _=s[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:d,sort:h}}function Pm(){let s=new WeakMap;function t(i,n){const r=s.get(i);let a;return r===void 0?(a=new Tl,s.set(i,[a])):n>=r.length?(a=new Tl,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Lm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new Ut};break;case"SpotLight":e={position:new F,direction:new F,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new F,halfWidth:new F,halfHeight:new F};break}return s[t.id]=e,e}}}function Dm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Im=0;function Nm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Um(s){const t=new Lm,e=Dm(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const n=new F,r=new le,a=new le;function o(c){let h=0,d=0,u=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let f=0,_=0,y=0,m=0,p=0,M=0,T=0,b=0,A=0,w=0,g=0,S=0,N=0,P=0;c.sort(Nm);for(let O=0,W=c.length;O<W;O++){const D=c[O],G=D.color,$=D.intensity,H=D.distance;let nt=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ln?nt=D.shadow.map.texture:nt=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=G.r*$,d+=G.g*$,u+=G.b*$;else if(D.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(D.sh.coefficients[q],$);P++}else if(D.isSunLight){const q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const j=D.shadow,et=e.get(D);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[_]=et,i.sunShadowMap[_]=nt;const wt=j.getViewportCount();for(let Bt=0;Bt<wt;Bt++)i.sunShadowMatrix[y+Bt]=j.getMatrix(Bt),i.sunShadowCascade[y+Bt]=j._cascadeData[Bt];y+=wt,_++}i.sun[f]=q,f++}else if(D.isDirectionalLight){const q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const j=D.shadow,et=e.get(D);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,i.directionalShadow[m]=et,i.directionalShadowMap[m]=nt,i.directionalShadowMatrix[m]=D.shadow.matrix,A++}i.directional[m]=q,m++}else if(D.isSpotLight){const q=t.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(G).multiplyScalar($),q.distance=H,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,i.spot[M]=q;const j=D.shadow;if(D.map&&(i.spotLightMap[S]=D.map,S++,j.updateMatrices(D),D.castShadow&&N++),i.spotLightMatrix[M]=j.matrix,D.castShadow){const et=e.get(D);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,i.spotShadow[M]=et,i.spotShadowMap[M]=nt,g++}M++}else if(D.isRectAreaLight){const q=t.get(D);q.color.copy(G).multiplyScalar($),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),i.rectArea[T]=q,T++}else if(D.isPointLight){const q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){const j=D.shadow,et=e.get(D);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,et.shadowCameraNear=j.camera.near,et.shadowCameraFar=j.camera.far,i.pointShadow[p]=et,i.pointShadowMap[p]=nt,i.pointShadowMatrix[p]=D.shadow.matrix,w++}i.point[p]=q,p++}else if(D.isHemisphereLight){const q=t.get(D);q.skyColor.copy(D.color).multiplyScalar($),q.groundColor.copy(D.groundColor).multiplyScalar($),i.hemi[b]=q,b++}}T>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const I=i.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==M||I.rectAreaLength!==T||I.hemiLength!==b||I.numSunShadows!==_||I.numDirectionalShadows!==A||I.numPointShadows!==w||I.numSpotShadows!==g||I.numSpotMaps!==S||I.numLightProbes!==P)&&(i.sun.length=f,i.directional.length=m,i.spot.length=M,i.rectArea.length=T,i.point.length=p,i.hemi.length=b,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+S-N,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=P,I.sunLength=f,I.directionalLength=m,I.pointLength=p,I.spotLength=M,I.rectAreaLength=T,I.hemiLength=b,I.numSunShadows=_,I.numDirectionalShadows=A,I.numPointShadows=w,I.numSpotShadows=g,I.numSpotMaps=S,I.numLightProbes=P,i.version=Im++)}function l(c,h){let d=0,u=0,f=0,_=0,y=0,m=0;const p=h.matrixWorldInverse;for(let M=0,T=c.length;M<T;M++){const b=c[M];if(b.isSunLight){const A=i.sun[d];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(p),d++}else if(b.isDirectionalLight){const A=i.directional[u];A.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(n),A.direction.transformDirection(p),u++}else if(b.isSpotLight){const A=i.spot[_];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(n),A.direction.transformDirection(p),_++}else if(b.isRectAreaLight){const A=i.rectArea[y];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),y++}else if(b.isPointLight){const A=i.point[f];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const A=i.hemi[m];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function Al(s){const t=new Um(s),e=[],i=[],n=[];function r(d){h.camera=d,e.length=0,i.length=0,n.length=0}function a(d){d.isLightProbeGrid?n.push(d):e.push(d)}function o(d){i.push(d)}function l(){t.setup(e),n.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Fm(s){let t=new WeakMap;function e(n,r=0){const a=t.get(n);let o;return a===void 0?(o=new Al(s),t.set(n,[o])):r>=a.length?(o=new Al(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const Om=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,km=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],zm=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Rl=new le,Qn=new F,Kr=new F;function Hm(s,t,e){let i=new cs;const n=new Rt,r=new Rt,a=new me,o=new $h,l=new Kh,c={},h=e.maxTextureSize,d={[Yi]:Ze,[Ze]:Yi,[pe]:pe},u=new Ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:Om,fragmentShader:Bm}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const _=new Fe;_.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Mt(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qs;let p=this.type;this.render=function(w,g,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Bc&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=qs);const N=s.getRenderTarget(),P=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),O=s.state;O.setBlending(on),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const W=p!==this.type;W&&g.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(G=>G.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,G=w.length;D<G;D++){const $=w[D],H=$.shadow;if(H===void 0){Nt("WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);const nt=H.getFrameExtents();n.multiply(nt),r.copy(H.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/nt.x),n.x=r.x*nt.x,H.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/nt.y),n.y=r.y*nt.y,H.mapSize.y=r.y));const q=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=q,H.map===null||W===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===jn){if($.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Qe(n.x,n.y,{format:ln,type:Je,minFilter:$e,magFilter:$e,generateMipmaps:!1}),H.map.texture.name=$.name+".shadowMap",H.map.depthTexture=new Un(n.x,n.y,yi),H.map.depthTexture.name=$.name+".shadowMapDepth",H.map.depthTexture.format=$i,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ne,H.map.depthTexture.magFilter=Ne}else $.isPointLight?(H.map=new ho(n.x),H.map.depthTexture=new hc(n.x,Ei)):(H.map=new Qe(n.x,n.y),H.map.depthTexture=new Un(n.x,n.y,Ei)),H.map.depthTexture.name=$.name+".shadowMap",H.map.depthTexture.format=$i,this.type===qs?(H.map.depthTexture.compareFunction=q?Zl:Kl,H.map.depthTexture.minFilter=$e,H.map.depthTexture.magFilter=$e):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ne,H.map.depthTexture.magFilter=Ne);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==n.x||H.map.height!==n.y)&&H.map.setSize(n.x,n.y);const j=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();$.isPointLight!==!0&&H.updateMatrices($,S);const et=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:S.layers;for(let wt=0;wt<j;wt++){const Bt=H.getCamera(wt);if($.isPointLight){const Z=H.camera,_t=H.matrix,St=$.distance||Z.far;St!==Z.far&&(Z.far=St,Z.updateProjectionMatrix()),Qn.setFromMatrixPosition($.matrixWorld),Z.position.copy(Qn),Kr.copy(Z.position),Kr.add(km[wt]),Z.up.copy(zm[wt]),Z.lookAt(Kr),Z.updateMatrixWorld(),_t.makeTranslation(-Qn.x,-Qn.y,-Qn.z),Rl.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Rl,Z.coordinateSystem,Z.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,wt),s.clear();else{wt===0&&(s.setRenderTarget(H.map),s.clear());const Z=H.getViewport(wt);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),O.viewport(a)}i=H.getFrustum(wt),b(g,S,Bt,$,et,this.type)}H.isPointLightShadow!==!0&&this.type===jn&&M(H,S),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(N,P,I)};function M(w,g){const S=t.update(y);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Qe(n.x,n.y,{format:ln,type:Je}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(g,null,S,u,y,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(g,null,S,f,y,null)}function T(w,g,S,N){let P=null;const I=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)P=I;else if(P=S.isPointLight===!0?l:o,s.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const O=P.uuid,W=g.uuid;let D=c[O];D===void 0&&(D={},c[O]=D);let G=D[W];G===void 0&&(G=P.clone(),D[W]=G,g.addEventListener("dispose",A)),P=G}if(P.visible=g.visible,P.wireframe=g.wireframe,N===jn?P.side=g.shadowSide!==null?g.shadowSide:g.side:P.side=g.shadowSide!==null?g.shadowSide:d[g.side],P.alphaMap=g.alphaMap,P.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,P.map=g.map,P.clipShadows=g.clipShadows,P.clippingPlanes=g.clippingPlanes,P.clipIntersection=g.clipIntersection,P.displacementMap=g.displacementMap,P.displacementScale=g.displacementScale,P.displacementBias=g.displacementBias,P.wireframeLinewidth=g.wireframeLinewidth,P.linewidth=g.linewidth,S.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const O=s.properties.get(P);O.light=S}return P}function b(w,g,S,N,P,I){if(w.visible===!1)return;if(w.layers.test(P)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&I===jn)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);const D=t.update(w),G=w.material;if(Array.isArray(G)){const $=D.groups;for(let H=0,nt=$.length;H<nt;H++){const q=$[H],j=G[q.materialIndex];if(j&&j.visible){const et=T(w,j,N,I);w.onBeforeShadow(s,w,g,S,D,et,q),s.renderBufferDirect(S,null,D,et,w,q),w.onAfterShadow(s,w,g,S,D,et,q)}}}else if(G.visible){const $=T(w,G,N,I);w.onBeforeShadow(s,w,g,S,D,$,null),s.renderBufferDirect(S,null,D,$,w,null),w.onAfterShadow(s,w,g,S,D,$,null)}}const W=w.children;for(let D=0,G=W.length;D<G;D++)b(W[D],g,S,N,P,I)}function A(w){w.target.removeEventListener("dispose",A);for(const S in c){const N=c[S],P=w.target.uuid;P in N&&(N[P].dispose(),delete N[P])}}}function Gm(s,t){function e(){let C=!1;const J=new me;let X=null;const ht=new me(0,0,0,0);return{setMask:function(rt){X!==rt&&!C&&(s.colorMask(rt,rt,rt,rt),X=rt)},setLocked:function(rt){C=rt},setClear:function(rt,lt,Ct,Vt,st){st===!0&&(rt*=Vt,lt*=Vt,Ct*=Vt),J.set(rt,lt,Ct,Vt),ht.equals(J)===!1&&(s.clearColor(rt,lt,Ct,Vt),ht.copy(J))},reset:function(){C=!1,X=null,ht.set(-1,0,0,0)}}}function i(){let C=!1,J=!1,X=null,ht=null,rt=null;return{setReversed:function(lt){if(J!==lt){const Ct=t.get("EXT_clip_control");lt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),J=lt;const Vt=rt;rt=null,this.setClear(Vt)}},getReversed:function(){return J},setTest:function(lt){lt?xt(s.DEPTH_TEST):zt(s.DEPTH_TEST)},setMask:function(lt){X!==lt&&!C&&(s.depthMask(lt),X=lt)},setFunc:function(lt){if(J&&(lt=_h[lt]),ht!==lt){switch(lt){case Zr:s.depthFunc(s.NEVER);break;case Jr:s.depthFunc(s.ALWAYS);break;case Qr:s.depthFunc(s.LESS);break;case ns:s.depthFunc(s.LEQUAL);break;case jr:s.depthFunc(s.EQUAL);break;case ta:s.depthFunc(s.GEQUAL);break;case ea:s.depthFunc(s.GREATER);break;case ia:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ht=lt}},setLocked:function(lt){C=lt},setClear:function(lt){rt!==lt&&(rt=lt,J&&(lt=1-lt),s.clearDepth(lt))},reset:function(){C=!1,X=null,ht=null,rt=null,J=!1}}}function n(){let C=!1,J=null,X=null,ht=null,rt=null,lt=null,Ct=null,Vt=null,st=null;return{setTest:function(Pt){C||(Pt?xt(s.STENCIL_TEST):zt(s.STENCIL_TEST))},setMask:function(Pt){J!==Pt&&!C&&(s.stencilMask(Pt),J=Pt)},setFunc:function(Pt,Gt,mt){(X!==Pt||ht!==Gt||rt!==mt)&&(s.stencilFunc(Pt,Gt,mt),X=Pt,ht=Gt,rt=mt)},setOp:function(Pt,Gt,mt){(lt!==Pt||Ct!==Gt||Vt!==mt)&&(s.stencilOp(Pt,Gt,mt),lt=Pt,Ct=Gt,Vt=mt)},setLocked:function(Pt){C=Pt},setClear:function(Pt){st!==Pt&&(s.clearStencil(Pt),st=Pt)},reset:function(){C=!1,J=null,X=null,ht=null,rt=null,lt=null,Ct=null,Vt=null,st=null}}}const r=new e,a=new i,o=new n;let l={};const c=new WeakMap;let h={},d={},u={},f=new WeakMap,_=[],y=null,m=!1,p=null,M=null,T=null,b=null,A=null,w=null,g=null,S=new Ut(0,0,0),N=0,P=!1,I=null,O=null,W=null,D=null,G=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,nt=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=nt>=1):q.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=nt>=2);let j=null,et={};const wt=s.getParameter(s.SCISSOR_BOX),Bt=s.getParameter(s.VIEWPORT),Z=new me().fromArray(wt),_t=new me().fromArray(Bt);function St(C,J,X,ht){const rt=new Uint8Array(4),lt=s.createTexture();s.bindTexture(C,lt),s.texParameteri(C,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(C,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ct=0;Ct<X;Ct++)C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY?s.texImage3D(J,0,s.RGBA,1,1,ht,0,s.RGBA,s.UNSIGNED_BYTE,rt):s.texImage2D(J+Ct,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,rt);return lt}const Lt={};Lt[s.TEXTURE_2D]=St(s.TEXTURE_2D,s.TEXTURE_2D,1),Lt[s.TEXTURE_CUBE_MAP]=St(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Lt[s.TEXTURE_2D_ARRAY]=St(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Lt[s.TEXTURE_3D]=St(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xt(s.DEPTH_TEST),a.setFunc(ns),Ye(!1),de(Co),xt(s.CULL_FACE),Le(on);function xt(C){h[C]!==!0&&(s.enable(C),h[C]=!0)}function zt(C){h[C]!==!1&&(s.disable(C),h[C]=!1)}function _e(C,J){return u[C]!==J?(s.bindFramebuffer(C,J),u[C]=J,C===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=J),C===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=J),!0):!1}function It(C,J){let X=_,ht=!1;if(C){X=f.get(J),X===void 0&&(X=[],f.set(J,X));const rt=C.textures;if(X.length!==rt.length||X[0]!==s.COLOR_ATTACHMENT0){for(let lt=0,Ct=rt.length;lt<Ct;lt++)X[lt]=s.COLOR_ATTACHMENT0+lt;X.length=rt.length,ht=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,ht=!0);ht&&s.drawBuffers(X)}function te(C){return y!==C?(s.useProgram(C),y=C,!0):!1}const se={[Pn]:s.FUNC_ADD,[zc]:s.FUNC_SUBTRACT,[Hc]:s.FUNC_REVERSE_SUBTRACT};se[Gc]=s.MIN,se[Vc]=s.MAX;const Xt={[Wc]:s.ZERO,[Xc]:s.ONE,[qc]:s.SRC_COLOR,[Bl]:s.SRC_ALPHA,[Qc]:s.SRC_ALPHA_SATURATE,[Zc]:s.DST_COLOR,[$c]:s.DST_ALPHA,[Yc]:s.ONE_MINUS_SRC_COLOR,[kl]:s.ONE_MINUS_SRC_ALPHA,[Jc]:s.ONE_MINUS_DST_COLOR,[Kc]:s.ONE_MINUS_DST_ALPHA,[jc]:s.CONSTANT_COLOR,[th]:s.ONE_MINUS_CONSTANT_COLOR,[eh]:s.CONSTANT_ALPHA,[ih]:s.ONE_MINUS_CONSTANT_ALPHA};function Le(C,J,X,ht,rt,lt,Ct,Vt,st,Pt){if(C===on){m===!0&&(zt(s.BLEND),m=!1);return}if(m===!1&&(xt(s.BLEND),m=!0),C!==kc){if(C!==p||Pt!==P){if((M!==Pn||A!==Pn)&&(s.blendEquation(s.FUNC_ADD),M=Pn,A=Pn),Pt)switch(C){case es:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case He:s.blendFunc(s.ONE,s.ONE);break;case Po:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Lo:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Jt("WebGLState: Invalid blending: ",C);break}else switch(C){case es:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case He:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Po:Jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lo:Jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Jt("WebGLState: Invalid blending: ",C);break}T=null,b=null,w=null,g=null,S.set(0,0,0),N=0,p=C,P=Pt}return}rt=rt||J,lt=lt||X,Ct=Ct||ht,(J!==M||rt!==A)&&(s.blendEquationSeparate(se[J],se[rt]),M=J,A=rt),(X!==T||ht!==b||lt!==w||Ct!==g)&&(s.blendFuncSeparate(Xt[X],Xt[ht],Xt[lt],Xt[Ct]),T=X,b=ht,w=lt,g=Ct),(Vt.equals(S)===!1||st!==N)&&(s.blendColor(Vt.r,Vt.g,Vt.b,st),S.copy(Vt),N=st),p=C,P=!1}function ye(C,J){C.side===pe?zt(s.CULL_FACE):xt(s.CULL_FACE);let X=C.side===Ze;J&&(X=!X),Ye(X),C.blending===es&&C.transparent===!1?Le(on):Le(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);const ht=C.stencilWrite;o.setTest(ht),ht&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Te(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?xt(s.SAMPLE_ALPHA_TO_COVERAGE):zt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(C){I!==C&&(C?s.frontFace(s.CW):s.frontFace(s.CCW),I=C)}function de(C){C!==Fc?(xt(s.CULL_FACE),C!==O&&(C===Co?s.cullFace(s.BACK):C===Oc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):zt(s.CULL_FACE),O=C}function _i(C){C!==W&&(H&&s.lineWidth(C),W=C)}function Te(C,J,X){C?(xt(s.POLYGON_OFFSET_FILL),(D!==J||G!==X)&&(D=J,G=X,a.getReversed()&&(J=-J,X=-X),s.polygonOffset(J,X))):zt(s.POLYGON_OFFSET_FILL)}function ni(C){C?xt(s.SCISSOR_TEST):zt(s.SCISSOR_TEST)}function si(C){C===void 0&&(C=s.TEXTURE0+$-1),j!==C&&(s.activeTexture(C),j=C)}function ri(C,J,X){X===void 0&&(j===null?X=s.TEXTURE0+$-1:X=j);let ht=et[X];ht===void 0&&(ht={type:void 0,texture:void 0},et[X]=ht),(ht.type!==C||ht.texture!==J)&&(j!==X&&(s.activeTexture(X),j=X),s.bindTexture(C,J||Lt[C]),ht.type=C,ht.texture=J)}function U(){const C=et[j];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ai(){try{s.compressedTexImage2D(...arguments)}catch(C){Jt("WebGLState:",C)}}function ce(){try{s.compressedTexImage3D(...arguments)}catch(C){Jt("WebGLState:",C)}}function he(){try{s.texSubImage2D(...arguments)}catch(C){Jt("WebGLState:",C)}}function pt(){try{s.texSubImage3D(...arguments)}catch(C){Jt("WebGLState:",C)}}function Se(){try{s.compressedTexSubImage2D(...arguments)}catch(C){Jt("WebGLState:",C)}}function Dt(){try{s.compressedTexSubImage3D(...arguments)}catch(C){Jt("WebGLState:",C)}}function Ft(){try{s.texStorage2D(...arguments)}catch(C){Jt("WebGLState:",C)}}function E(){try{s.texStorage3D(...arguments)}catch(C){Jt("WebGLState:",C)}}function x(){try{s.texImage2D(...arguments)}catch(C){Jt("WebGLState:",C)}}function k(){try{s.texImage3D(...arguments)}catch(C){Jt("WebGLState:",C)}}function it(C){return d[C]!==void 0?d[C]:s.getParameter(C)}function Q(C,J){d[C]!==J&&(s.pixelStorei(C,J),d[C]=J)}function ot(C){Z.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),Z.copy(C))}function ut(C){_t.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),_t.copy(C))}function Y(C,J){let X=c.get(J);X===void 0&&(X=new WeakMap,c.set(J,X));let ht=X.get(C);ht===void 0&&(ht=s.getUniformBlockIndex(J,C.name),s.uniformBlockBinding(J,ht,ht),X.set(C,ht))}function K(C,J,X){const rt=c.get(J).get(C);l[rt]!==X&&(s.bindBufferBase(s.UNIFORM_BUFFER,rt,X),l[rt]=X)}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},j=null,et={},u={},l={},f=new WeakMap,_=[],y=null,m=!1,p=null,M=null,T=null,b=null,A=null,w=null,g=null,S=new Ut(0,0,0),N=0,P=!1,I=null,O=null,W=null,D=null,G=null,Z.set(0,0,s.canvas.width,s.canvas.height),_t.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:xt,disable:zt,bindFramebuffer:_e,drawBuffers:It,useProgram:te,setBlending:Le,setMaterial:ye,setFlipSided:Ye,setCullFace:de,setLineWidth:_i,setPolygonOffset:Te,setScissorTest:ni,activeTexture:si,bindTexture:ri,unbindTexture:U,compressedTexImage2D:ai,compressedTexImage3D:ce,texImage2D:x,texImage3D:k,pixelStorei:Q,getParameter:it,updateUBOMapping:Y,uniformBlockBinding:K,texStorage2D:Ft,texStorage3D:E,texSubImage2D:he,texSubImage3D:pt,compressedTexSubImage2D:Se,compressedTexSubImage3D:Dt,scissor:ot,viewport:ut,reset:ct}}function Vm(s,t,e,i,n,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Rt,h=new WeakMap,d=new Set;let u;const f=new WeakMap,_=new Set,y=new FinalizationRegistry(E=>_.delete(E));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(E,x){return m?new OffscreenCanvas(E,x):os("canvas")}function M(E,x,k){let it=1;const Q=Ft(E);if((Q.width>k||Q.height>k)&&(it=k/Math.max(Q.width,Q.height)),it<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const ot=Math.floor(it*Q.width),ut=Math.floor(it*Q.height);u===void 0&&(u=p(ot,ut));const Y=x?p(ot,ut):u;return Y.width=ot,Y.height=ut,Y.getContext("2d").drawImage(E,0,0,ot,ut),Nt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ot+"x"+ut+")."),Y}else return"data"in E&&Nt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function T(E){return E.generateMipmaps}function b(E){s.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(E,x,k,it,Q,ot=!1){if(E!==null){if(s[E]!==void 0)return s[E];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ut;it&&(ut=t.get("EXT_texture_norm16"),ut||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===s.RED&&(k===s.FLOAT&&(Y=s.R32F),k===s.HALF_FLOAT&&(Y=s.R16F),k===s.UNSIGNED_BYTE&&(Y=s.R8),k===s.UNSIGNED_SHORT&&ut&&(Y=ut.R16_EXT),k===s.SHORT&&ut&&(Y=ut.R16_SNORM_EXT)),x===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(Y=s.R8UI),k===s.UNSIGNED_SHORT&&(Y=s.R16UI),k===s.UNSIGNED_INT&&(Y=s.R32UI),k===s.BYTE&&(Y=s.R8I),k===s.SHORT&&(Y=s.R16I),k===s.INT&&(Y=s.R32I)),x===s.RG&&(k===s.FLOAT&&(Y=s.RG32F),k===s.HALF_FLOAT&&(Y=s.RG16F),k===s.UNSIGNED_BYTE&&(Y=s.RG8),k===s.UNSIGNED_SHORT&&ut&&(Y=ut.RG16_EXT),k===s.SHORT&&ut&&(Y=ut.RG16_SNORM_EXT)),x===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(Y=s.RG8UI),k===s.UNSIGNED_SHORT&&(Y=s.RG16UI),k===s.UNSIGNED_INT&&(Y=s.RG32UI),k===s.BYTE&&(Y=s.RG8I),k===s.SHORT&&(Y=s.RG16I),k===s.INT&&(Y=s.RG32I)),x===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),k===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),k===s.UNSIGNED_INT&&(Y=s.RGB32UI),k===s.BYTE&&(Y=s.RGB8I),k===s.SHORT&&(Y=s.RGB16I),k===s.INT&&(Y=s.RGB32I)),x===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),k===s.UNSIGNED_INT&&(Y=s.RGBA32UI),k===s.BYTE&&(Y=s.RGBA8I),k===s.SHORT&&(Y=s.RGBA16I),k===s.INT&&(Y=s.RGBA32I)),x===s.RGB&&(k===s.UNSIGNED_SHORT&&ut&&(Y=ut.RGB16_EXT),k===s.SHORT&&ut&&(Y=ut.RGB16_SNORM_EXT),k===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),x===s.RGBA){const K=ot?rr:$t.getTransfer(Q);k===s.FLOAT&&(Y=s.RGBA32F),k===s.HALF_FLOAT&&(Y=s.RGBA16F),k===s.UNSIGNED_BYTE&&(Y=K===jt?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT&&ut&&(Y=ut.RGBA16_EXT),k===s.SHORT&&ut&&(Y=ut.RGBA16_SNORM_EXT),k===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function g(E,x){let k;return E?x===null||x===Ei||x===Nn?k=s.DEPTH24_STENCIL8:x===yi?k=s.DEPTH32F_STENCIL8:x===rs&&(k=s.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ei||x===Nn?k=s.DEPTH_COMPONENT24:x===yi?k=s.DEPTH_COMPONENT32F:x===rs&&(k=s.DEPTH_COMPONENT16),k}function S(E,x){return T(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ne&&E.minFilter!==$e?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function N(E){const x=new WeakRef(E);i.get(E).__ref=x,_.add(x),y.register(E,x,x)}function P(E){const x=i.get(E).__ref;x!==void 0&&(_.delete(x),y.unregister(x))}function I(E){W(E.target)}function O(E){D(E.target)}function W(E){E.removeEventListener("dispose",I),P(E),$(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&d.delete(E)}function D(E){E.removeEventListener("dispose",O),P(E),nt(E)}function G(){for(const E of _){const x=E.deref();x!==void 0&&(x.isRenderTarget===!0?D(x):W(x))}_.clear(),d.clear()}function $(E){const x=i.get(E);if(x.__webglInit===void 0)return;const k=E.source,it=f.get(k);if(it){const Q=it[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&H(E),Object.keys(it).length===0&&f.delete(k)}i.remove(E)}function H(E){const x=i.get(E);s.deleteTexture(x.__webglTexture);const k=E.source,it=f.get(k);delete it[x.__cacheKey],a.memory.textures--}function nt(E){const x=i.get(E);x.__depthDisposeCallback&&x.__depthDisposeCallback();const k=E.depthTexture;if(k&&k.renderTarget===E&&W(k),E.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(x.__webglFramebuffer[Q]))for(let ot=0;ot<x.__webglFramebuffer[Q].length;ot++)s.deleteFramebuffer(x.__webglFramebuffer[Q][ot]);else s.deleteFramebuffer(x.__webglFramebuffer[Q]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[Q])}else{if(Array.isArray(x.__webglFramebuffer))for(let Q=0;Q<x.__webglFramebuffer.length;Q++)s.deleteFramebuffer(x.__webglFramebuffer[Q]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Q=0;Q<x.__webglColorRenderbuffer.length;Q++)x.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[Q]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const it=E.textures;for(let Q=0,ot=it.length;Q<ot;Q++){const ut=i.get(it[Q]);ut.__webglTexture&&(s.deleteTexture(ut.__webglTexture),a.memory.textures--),i.remove(it[Q])}i.remove(E)}let q=0;function j(){q=0}function et(){return q}function wt(E){q=E}function Bt(){const E=q;return E>=n.maxTextures&&Nt("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+n.maxTextures),q+=1,E}function Z(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.mipmapsAutoUpdate),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function _t(E,x){const k=i.get(E);if(E.isVideoTexture&&Se(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&k.__version!==E.version){const it=E.image;if(it===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(k,E,x);return}}else E.isExternalTexture&&(k.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+x)}function St(E,x){const k=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){ye(k,E,x);return}else E.isExternalTexture&&(k.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+x)}function Lt(E,x){const k=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){ye(k,E,x);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+x)}function xt(E,x){const k=i.get(E);if(E.version>0&&k.__version!==E.version){Ye(k,E,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+x)}const zt={[er]:s.REPEAT,[Di]:s.CLAMP_TO_EDGE,[na]:s.MIRRORED_REPEAT},_e={[Ne]:s.NEAREST,[rh]:s.NEAREST_MIPMAP_NEAREST,[gs]:s.NEAREST_MIPMAP_LINEAR,[$e]:s.LINEAR,[yr]:s.LINEAR_MIPMAP_NEAREST,[Wi]:s.LINEAR_MIPMAP_LINEAR},It={[ch]:s.NEVER,[Jl]:s.ALWAYS,[hh]:s.LESS,[Kl]:s.LEQUAL,[dh]:s.EQUAL,[Zl]:s.GEQUAL,[uh]:s.GREATER,[fh]:s.NOTEQUAL};function te(E,x){if(x.type===yi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===$e||x.magFilter===yr||x.magFilter===gs||x.magFilter===Wi||x.minFilter===$e||x.minFilter===yr||x.minFilter===gs||x.minFilter===Wi)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,zt[x.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,zt[x.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,zt[x.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,_e[x.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,_e[x.minFilter]),x.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,It[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ne||x.minFilter!==gs&&x.minFilter!==Wi||x.type===yi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(E,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,n.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function se(E,x){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",I),N(x));const it=x.source;let Q=f.get(it);Q===void 0&&(Q={},f.set(it,Q));const ot=Z(x);if(ot!==E.__cacheKey){Q[ot]===void 0&&(Q[ot]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Q[ot].usedTimes++;const ut=Q[E.__cacheKey];ut!==void 0&&(Q[E.__cacheKey].usedTimes--,ut.usedTimes===0&&H(x)),E.__cacheKey=ot,E.__webglTexture=Q[ot].texture}return k}function Xt(E,x,k){return Math.floor(Math.floor(E/k)/x)}function Le(E,x,k,it){const ot=E.updateRanges;if(ot.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,k,it,x.data);else{ot.sort((C,J)=>C.start-J.start);let ut=0;for(let C=1;C<ot.length;C++){const J=ot[ut],X=ot[C],ht=J.start+J.count,rt=Xt(X.start,x.width,4),lt=Xt(J.start,x.width,4);X.start<=ht+1&&rt===lt&&Xt(X.start+X.count-1,x.width,4)===rt?J.count=Math.max(J.count,X.start+X.count-J.start):(++ut,ot[ut]=X)}ot.length=ut+1;const Y=e.getParameter(s.UNPACK_ROW_LENGTH),K=e.getParameter(s.UNPACK_SKIP_PIXELS),ct=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let C=0,J=ot.length;C<J;C++){const X=ot[C],ht=Math.floor(X.start/4),rt=Math.ceil(X.count/4),lt=ht%x.width,Ct=Math.floor(ht/x.width),Vt=rt,st=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(s.UNPACK_SKIP_ROWS,Ct),e.texSubImage2D(s.TEXTURE_2D,0,lt,Ct,Vt,st,k,it,x.data)}E.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,Y),e.pixelStorei(s.UNPACK_SKIP_PIXELS,K),e.pixelStorei(s.UNPACK_SKIP_ROWS,ct)}}function ye(E,x,k){let it=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(it=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(it=s.TEXTURE_3D);const Q=se(E,x),ot=x.source;e.bindTexture(it,E.__webglTexture,s.TEXTURE0+k);const ut=i.get(ot);if(ot.version!==ut.__version||Q===!0){if(e.activeTexture(s.TEXTURE0+k),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const st=$t.getPrimaries($t.workingColorSpace),Pt=x.colorSpace===Vi?null:$t.getPrimaries(x.colorSpace),Gt=x.colorSpace===Vi||st===Pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt)}e.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment);let K=M(x.image,!1,n.maxTextureSize);K=Dt(x,K);const ct=r.convert(x.format,x.colorSpace),C=r.convert(x.type);let J=w(x.internalFormat,ct,C,x.normalized,x.colorSpace,x.isVideoTexture);te(it,x);let X;const ht=x.mipmaps,rt=x.isVideoTexture!==!0,lt=ut.__version===void 0||Q===!0,Ct=ot.dataReady,Vt=S(x,K);if(x.isDepthTexture)J=g(x.format===Xi,x.type),lt&&(rt?e.texStorage2D(s.TEXTURE_2D,1,J,K.width,K.height):e.texImage2D(s.TEXTURE_2D,0,J,K.width,K.height,0,ct,C,null));else if(x.isDataTexture)if(ht.length>0){rt&&lt&&e.texStorage2D(s.TEXTURE_2D,Vt,J,ht[0].width,ht[0].height);for(let st=0,Pt=ht.length;st<Pt;st++)X=ht[st],rt?Ct&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,X.width,X.height,ct,C,X.data):e.texImage2D(s.TEXTURE_2D,st,J,X.width,X.height,0,ct,C,X.data);x.generateMipmaps=!1}else rt?(lt&&e.texStorage2D(s.TEXTURE_2D,Vt,J,K.width,K.height),Ct&&Le(x,K,ct,C)):e.texImage2D(s.TEXTURE_2D,0,J,K.width,K.height,0,ct,C,K.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){rt&&lt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Vt,J,ht[0].width,ht[0].height,K.depth);for(let st=0,Pt=ht.length;st<Pt;st++)if(X=ht[st],x.format!==Si)if(ct!==null)if(rt){if(Ct)if(x.layerUpdates.size>0){const Gt=ol(X.width,X.height,x.format,x.type);for(const mt of x.layerUpdates){const ee=X.data.subarray(mt*Gt/X.data.BYTES_PER_ELEMENT,(mt+1)*Gt/X.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,mt,X.width,X.height,1,ct,ee)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,X.width,X.height,K.depth,ct,X.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,st,J,X.width,X.height,K.depth,0,X.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?Ct&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,X.width,X.height,K.depth,ct,C,X.data):e.texImage3D(s.TEXTURE_2D_ARRAY,st,J,X.width,X.height,K.depth,0,ct,C,X.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{rt&&lt&&e.texStorage2D(s.TEXTURE_2D,Vt,J,ht[0].width,ht[0].height);for(let st=0,Pt=ht.length;st<Pt;st++)X=ht[st],x.format!==Si?ct!==null?rt?Ct&&e.compressedTexSubImage2D(s.TEXTURE_2D,st,0,0,X.width,X.height,ct,X.data):e.compressedTexImage2D(s.TEXTURE_2D,st,J,X.width,X.height,0,X.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?Ct&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,X.width,X.height,ct,C,X.data):e.texImage2D(s.TEXTURE_2D,st,J,X.width,X.height,0,ct,C,X.data)}else if(x.isDataArrayTexture)if(rt){if(lt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Vt,J,K.width,K.height,K.depth),Ct)if(x.layerUpdates.size>0){const st=ol(K.width,K.height,x.format,x.type);for(const Pt of x.layerUpdates){const Gt=K.data.subarray(Pt*st/K.data.BYTES_PER_ELEMENT,(Pt+1)*st/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Pt,K.width,K.height,1,ct,C,Gt)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ct,C,K.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,J,K.width,K.height,K.depth,0,ct,C,K.data);else if(x.isData3DTexture)rt?(lt&&e.texStorage3D(s.TEXTURE_3D,Vt,J,K.width,K.height,K.depth),Ct&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ct,C,K.data)):e.texImage3D(s.TEXTURE_3D,0,J,K.width,K.height,K.depth,0,ct,C,K.data);else if(x.isFramebufferTexture){if(lt)if(rt)e.texStorage2D(s.TEXTURE_2D,Vt,J,K.width,K.height);else{let st=K.width,Pt=K.height;for(let Gt=0;Gt<Vt;Gt++)e.texImage2D(s.TEXTURE_2D,Gt,J,st,Pt,0,ct,C,null),st>>=1,Pt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in s){const st=s.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),K.parentNode!==st){st.appendChild(K),d.add(x),st.onpaint=Pt=>{const Gt=Pt.changedElements;for(const mt of d)Gt.includes(mt.image)&&(mt.needsUpdate=!0)},st.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,K);else{const Gt=s.RGBA,mt=s.RGBA,ee=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Gt,mt,ee,K)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ht.length>0){if(rt&&lt){const st=Ft(ht[0]);e.texStorage2D(s.TEXTURE_2D,Vt,J,st.width,st.height)}for(let st=0,Pt=ht.length;st<Pt;st++)X=ht[st],rt?Ct&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,ct,C,X):e.texImage2D(s.TEXTURE_2D,st,J,ct,C,X);x.generateMipmaps=!1}else if(rt){if(lt){const st=Ft(K);e.texStorage2D(s.TEXTURE_2D,Vt,J,st.width,st.height)}Ct&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ct,C,K)}else e.texImage2D(s.TEXTURE_2D,0,J,ct,C,K);T(x)&&x.mipmapsAutoUpdate===!0&&b(it),ut.__version=ot.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Ye(E,x,k){if(x.image.length!==6)return;const it=se(E,x),Q=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+k);const ot=i.get(Q);if(Q.version!==ot.__version||it===!0){e.activeTexture(s.TEXTURE0+k);const ut=$t.getPrimaries($t.workingColorSpace),Y=x.colorSpace===Vi?null:$t.getPrimaries(x.colorSpace),K=x.colorSpace===Vi||ut===Y?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const ct=x.isCompressedTexture||x.image[0].isCompressedTexture,C=x.image[0]&&x.image[0].isDataTexture,J=[];for(let mt=0;mt<6;mt++)!ct&&!C?J[mt]=M(x.image[mt],!0,n.maxCubemapSize):J[mt]=C?x.image[mt].image:x.image[mt],J[mt]=Dt(x,J[mt]);const X=J[0],ht=r.convert(x.format,x.colorSpace),rt=r.convert(x.type);let lt=w(x.internalFormat,ht,rt,x.normalized,x.colorSpace);const Ct=x.isVideoTexture!==!0,Vt=ot.__version===void 0||it===!0,st=Q.dataReady;let Pt=S(x,X);te(s.TEXTURE_CUBE_MAP,x);let Gt;if(x.isDepthTexture){if(lt=g(x.format===Xi,x.type),Vt)if(Ct)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,lt,X.width,X.height);else for(let mt=0;mt<6;mt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,lt,X.width,X.height,0,ht,rt,null)}else if(ct){Ct&&Vt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,lt,X.width,X.height);for(let mt=0;mt<6;mt++){Gt=J[mt].mipmaps;for(let ee=0;ee<Gt.length;ee++){const Ae=Gt[ee];x.format!==Si?ht!==null?Ct?st&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ee,0,0,Ae.width,Ae.height,ht,Ae.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ee,lt,Ae.width,Ae.height,0,Ae.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ct?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ee,0,0,Ae.width,Ae.height,ht,rt,Ae.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ee,lt,Ae.width,Ae.height,0,ht,rt,Ae.data)}}}else{if(Gt=x.mipmaps,Ct&&Vt){Gt.length>0&&Pt++;const mt=Ft(J[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,lt,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(C){Ct?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,J[mt].width,J[mt].height,ht,rt,J[mt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,lt,J[mt].width,J[mt].height,0,ht,rt,J[mt].data);for(let ee=0;ee<Gt.length;ee++){const Ui=Gt[ee].image[mt].image;Ct?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ee+1,0,0,Ui.width,Ui.height,ht,rt,Ui.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ee+1,lt,Ui.width,Ui.height,0,ht,rt,Ui.data)}}else{Ct?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,ht,rt,J[mt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,lt,ht,rt,J[mt]);for(let ee=0;ee<Gt.length;ee++){const Ae=Gt[ee];Ct?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ee+1,0,0,ht,rt,Ae.image[mt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ee+1,lt,ht,rt,Ae.image[mt])}}}T(x)&&x.mipmapsAutoUpdate===!0&&b(s.TEXTURE_CUBE_MAP),ot.__version=Q.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function de(E,x,k,it,Q,ot){const ut=r.convert(k.format,k.colorSpace),Y=r.convert(k.type),K=w(k.internalFormat,ut,Y,k.normalized,k.colorSpace),ct=i.get(x),C=i.get(k);if(C.__renderTarget=x,!ct.__hasExternalTextures){const J=Math.max(1,x.width>>ot),X=Math.max(1,x.height>>ot);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,ot,K,J,X,x.depth,0,ut,Y,null):e.texImage2D(Q,ot,K,J,X,0,ut,Y,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),pt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,Q,C.__webglTexture,0,he(x)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,it,Q,C.__webglTexture,ot),e.bindFramebuffer(s.FRAMEBUFFER,null)}function _i(E,x,k){if(s.bindRenderbuffer(s.RENDERBUFFER,E),x.depthBuffer){const it=x.depthTexture,Q=it&&it.isDepthTexture?it.type:null,ot=g(x.stencilBuffer,Q),ut=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;pt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,he(x),ot,x.width,x.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,he(x),ot,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,ot,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ut,s.RENDERBUFFER,E)}else{const it=x.textures;for(let Q=0;Q<it.length;Q++){const ot=it[Q],ut=r.convert(ot.format,ot.colorSpace),Y=r.convert(ot.type),K=w(ot.internalFormat,ut,Y,ot.normalized,ot.colorSpace);pt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,he(x),K,x.width,x.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,he(x),K,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,K,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Te(E,x,k){const it=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(x.depthTexture);Q.__renderTarget=x;const ot=it?x.depthTexture.image[0]:x.depthTexture.image;(!Q.__webglTexture||ot.width!==x.width||ot.height!==x.height)&&(ot.width=x.width,ot.height=x.height,x.depthTexture.needsUpdate=!0),it?xt(x.depthTexture,0):_t(x.depthTexture,0);const ut=Q.__webglTexture,Y=he(x),K=it?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,ct=x.depthTexture.format===Xi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(x.depthTexture.format===$i)pt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,K,ut,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,ct,K,ut,0);else if(x.depthTexture.format===Xi)pt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,K,ut,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,ct,K,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ni(E){const x=i.get(E),k=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){const it=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),it){const Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,it.removeEventListener("dispose",Q)};it.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=it}if(E.depthTexture&&!x.__autoAllocateDepthBuffer)if(k)for(let it=0;it<6;it++)Te(x.__webglFramebuffer[it],E,it);else E.texture.mipmaps.length>0?Te(x.__webglFramebuffer[0],E,0):Te(x.__webglFramebuffer,E,0);else if(k){x.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[it]),x.__webglDepthbuffer[it]===void 0)x.__webglDepthbuffer[it]=s.createRenderbuffer(),_i(x.__webglDepthbuffer[it],E,!1);else{const Q=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=x.__webglDepthbuffer[it];s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,ot)}}else if(E.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),_i(x.__webglDepthbuffer,E,!1);else{const Q=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,ot)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function si(E,x,k){const it=i.get(E);x!==void 0&&de(it.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&ni(E)}function ri(E){const x=E.texture,k=i.get(E),it=i.get(x);E.addEventListener("dispose",O),N(E);const Q=E.textures,ot=E.isWebGLCubeRenderTarget===!0,ut=Q.length>1;if(ut||(it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture()),it.__version=x.version,a.memory.textures++),ot){k.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0){k.__webglFramebuffer[Y]=[];for(let K=0;K<x.mipmaps.length;K++)k.__webglFramebuffer[Y][K]=s.createFramebuffer()}else k.__webglFramebuffer[Y]=s.createFramebuffer()}else{if(x.mipmaps.length>0){k.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)k.__webglFramebuffer[Y]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(ut)for(let Y=0,K=Q.length;Y<K;Y++){const ct=i.get(Q[Y]);ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture(),a.memory.textures++)}if(E.samples>0&&pt(E)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Y=0;Y<Q.length;Y++){const K=Q[Y];k.__webglColorRenderbuffer[Y]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[Y]);const ct=r.convert(K.format,K.colorSpace),C=r.convert(K.type),J=w(K.internalFormat,ct,C,K.normalized,K.colorSpace,E.isXRRenderTarget===!0),X=he(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,X,J,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Y,s.RENDERBUFFER,k.__webglColorRenderbuffer[Y])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),_i(k.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ot){e.bindTexture(s.TEXTURE_CUBE_MAP,it.__webglTexture),te(s.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)de(k.__webglFramebuffer[Y][K],E,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,K);else de(k.__webglFramebuffer[Y],E,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);T(x)?b(s.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}else if(ut){for(let Y=0,K=Q.length;Y<K;Y++){const ct=Q[Y],C=i.get(ct);let J=s.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(J=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(J,C.__webglTexture),te(J,ct),de(k.__webglFramebuffer,E,ct,s.COLOR_ATTACHMENT0+Y,J,0),T(ct)&&b(J)}e.unbindTexture()}else{let Y=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Y=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Y,it.__webglTexture),te(Y,x),x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)de(k.__webglFramebuffer[K],E,x,s.COLOR_ATTACHMENT0,Y,K);else de(k.__webglFramebuffer,E,x,s.COLOR_ATTACHMENT0,Y,0);T(x)?b(Y):x.mipmaps.length>0&&s.texParameteri(Y,s.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}E.depthBuffer&&ni(E)}function U(E){const x=E.textures;for(let k=0,it=x.length;k<it;k++){const Q=x[k];if(T(Q)&&Q.mipmapsAutoUpdate===!0){const ot=A(E),ut=i.get(Q).__webglTexture;e.bindTexture(ot,ut),b(ot),e.unbindTexture()}}}const ai=[];function ce(E){if(E.samples>0){if(pt(E)===!1){const x=E.textures,k=E.width,it=E.height;let Q=s.COLOR_BUFFER_BIT;const ot=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=i.get(E),Y=x.length>1;if(Y)for(let ct=0;ct<x.length;ct++)e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let ct=0;ct<x.length;ct++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),Y){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ut.__webglColorRenderbuffer[ct]);const C=i.get(x[ct]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,C,0)}s.blitFramebuffer(0,0,k,it,0,0,k,it,Q,s.NEAREST),l===!0&&(ai.length=0,ai.push(s.COLOR_ATTACHMENT0+ct),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&ai.push(ot),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ai))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Y)for(let ct=0;ct<x.length;ct++){e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,ut.__webglColorRenderbuffer[ct]);const C=i.get(x[ct]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,C,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){const x=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function he(E){return Math.min(n.maxSamples,E.samples)}function pt(E){const x=i.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Se(E){const x=a.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function Dt(E,x){const k=E.colorSpace,it=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||k!==sr&&k!==Vi&&($t.getTransfer(k)===jt?(it!==Si||Q!==ii)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Jt("WebGLTextures: Unsupported texture color space:",k)),x}function Ft(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=Bt,this.resetTextureUnits=j,this.getTextureUnits=et,this.setTextureUnits=wt,this.setTexture2D=_t,this.setTexture2DArray=St,this.setTexture3D=Lt,this.setTextureCube=xt,this.rebindTextures=si,this.setupRenderTarget=ri,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=ni,this.setupFrameBufferTexture=de,this.useMultisampledRTT=pt,this.dispose=G}function Wm(s,t){function e(i,n=Vi){let r;const a=$t.getTransfer(n);if(i===ii)return s.UNSIGNED_BYTE;if(i===Ka)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Za)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Wl)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Xl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Gl)return s.BYTE;if(i===Vl)return s.SHORT;if(i===rs)return s.UNSIGNED_SHORT;if(i===$a)return s.INT;if(i===Ei)return s.UNSIGNED_INT;if(i===yi)return s.FLOAT;if(i===Je)return s.HALF_FLOAT;if(i===ql)return s.ALPHA;if(i===Yl)return s.RGB;if(i===Si)return s.RGBA;if(i===$i)return s.DEPTH_COMPONENT;if(i===Xi)return s.DEPTH_STENCIL;if(i===$l)return s.RED;if(i===Ja)return s.RED_INTEGER;if(i===ln)return s.RG;if(i===Qa)return s.RG_INTEGER;if(i===ja)return s.RGBA_INTEGER;if(i===Ys||i===$s||i===Ks||i===Zs)if(a===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ys)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ys)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$s)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ks)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sa||i===ra||i===aa||i===oa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===sa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ra)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===aa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===oa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===la||i===ca||i===ha||i===da||i===ua||i===ir||i===fa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===la||i===ca)return a===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ha)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===da)return r.COMPRESSED_R11_EAC;if(i===ua)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ir)return r.COMPRESSED_RG11_EAC;if(i===fa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===pa||i===ma||i===ga||i===_a||i===xa||i===va||i===Ma||i===ya||i===Sa||i===ba||i===Ea||i===wa||i===Ta||i===Aa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===pa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ma)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ga)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_a)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===va)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ma)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ya)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ba)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ea)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ta)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Aa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ra||i===Ca||i===Pa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ra)return a===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ca)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Pa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===La||i===Da||i===nr||i===Ia)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===La)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Da)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ia)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Nn?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}const Xm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ym{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new dc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ke({vertexShader:Xm,fragmentShader:qm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Mt(new wi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $m extends cn{constructor(t,e){super();const i=this;let n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,_=null;const y=typeof XRWebGLBinding<"u",m=new Ym,p={},M=e.getContextAttributes();let T=null,b=null;const A=[],w=[],g=new Rt;let S=null,N=null;const P=new li;P.viewport=new me;const I=new li;I.viewport=new me;const O=[P,I],W=new nd;let D=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let _t=A[Z];return _t===void 0&&(_t=new Pr,A[Z]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(Z){let _t=A[Z];return _t===void 0&&(_t=new Pr,A[Z]=_t),_t.getGripSpace()},this.getHand=function(Z){let _t=A[Z];return _t===void 0&&(_t=new Pr,A[Z]=_t),_t.getHandSpace()};function $(Z){const _t=w.indexOf(Z.inputSource);if(_t===-1)return;const St=A[_t];St!==void 0&&(St.update(Z.inputSource,Z.frame,c||a),St.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){n.removeEventListener("select",$),n.removeEventListener("selectstart",$),n.removeEventListener("selectend",$),n.removeEventListener("squeeze",$),n.removeEventListener("squeezestart",$),n.removeEventListener("squeezeend",$),n.removeEventListener("end",H),n.removeEventListener("inputsourceschange",nt);for(let Z=0;Z<A.length;Z++){const _t=w[Z];_t!==null&&(w[Z]=null,A[Z].disconnect(_t))}D=null,G=null,m.reset();for(const Z in p)delete p[Z];if(t.setRenderTarget(T),f=null,u=null,d=null,n=null,b=null,Bt.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(g.width,g.height,!1),N!==null){const Z=N.camera;Z.fov=N.fov,Z.zoom=N.zoom,Z.updateProjectionMatrix(),N=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(n,e)),d},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=async function(Z){if(n=Z,n!==null){if(T=t.getRenderTarget(),n.addEventListener("select",$),n.addEventListener("selectstart",$),n.addEventListener("selectend",$),n.addEventListener("squeeze",$),n.addEventListener("squeezestart",$),n.addEventListener("squeezeend",$),n.addEventListener("end",H),n.addEventListener("inputsourceschange",nt),M.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(g),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Lt=null,xt=null;M.depth&&(xt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=M.stencil?Xi:$i,Lt=M.stencil?Nn:Ei);const zt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(zt),n.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new Qe(u.textureWidth,u.textureHeight,{format:Si,type:ii,depthTexture:new Un(u.textureWidth,u.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const St={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,St),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Qe(f.framebufferWidth,f.framebufferHeight,{format:Si,type:ii,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Bt.setContext(n),Bt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(Z){for(let _t=0;_t<Z.removed.length;_t++){const St=Z.removed[_t],Lt=w.indexOf(St);Lt>=0&&(w[Lt]=null,A[Lt].disconnect(St))}for(let _t=0;_t<Z.added.length;_t++){const St=Z.added[_t];let Lt=w.indexOf(St);if(Lt===-1){for(let zt=0;zt<A.length;zt++)if(zt>=w.length){w.push(St),Lt=zt;break}else if(w[zt]===null){w[zt]=St,Lt=zt;break}if(Lt===-1)break}const xt=A[Lt];xt&&xt.connect(St)}}function q(Z,_t){_t===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(_t.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(n===null)return;let _t=Z.near,St=Z.far;m.texture!==null&&(m.depthNear>0&&(_t=m.depthNear),m.depthFar>0&&(St=m.depthFar)),W.near=I.near=P.near=_t,W.far=I.far=P.far=St,(D!==W.near||G!==W.far)&&(n.updateRenderState({depthNear:W.near,depthFar:W.far}),D=W.near,G=W.far),W.layers.mask=Z.layers.mask|6,P.layers.mask=W.layers.mask&-5,I.layers.mask=W.layers.mask&-3;const Lt=Z.parent,xt=W.cameras;q(W,Lt);for(let zt=0;zt<xt.length;zt++)q(xt[zt],Lt);W.projectionMatrix.copy(P.projectionMatrix),W.projectionMatrixInverse.copy(P.projectionMatrixInverse),N===null&&Z.isPerspectiveCamera&&(N={camera:Z,fov:Z.fov,zoom:Z.zoom}),j(Z,W,Lt)};function j(Z,_t,St){St===null?Z.matrix.copy(_t.matrixWorld):(Z.matrix.copy(St.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(_t.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(_t.projectionMatrix),Z.projectionMatrixInverse.copy(_t.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ua*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(Z){return p[Z]};let et=null;function wt(Z,_t){if(h=_t.getViewerPose(c||a),_=_t,h!==null){const St=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let Lt=!1;St.length!==W.cameras.length&&(W.cameras.length=0,Lt=!0);for(let It=0;It<St.length;It++){const te=St[It];let se=null;if(f!==null)se=f.getViewport(te);else{const Le=d.getViewSubImage(u,te);se=Le.viewport,It===0&&(t.setRenderTargetTextures(b,Le.colorTexture,Le.depthStencilTexture),t.setRenderTarget(b))}let Xt=O[It];Xt===void 0&&(Xt=new li,Xt.layers.enable(It),Xt.viewport=new me,O[It]=Xt),Xt.matrix.fromArray(te.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(te.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(se.x,se.y,se.width,se.height),It===0&&(W.matrix.copy(Xt.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Lt===!0&&W.cameras.push(Xt)}const xt=n.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&y){d=i.getBinding();const It=d.getDepthInformation(St[0]);It&&It.isValid&&It.texture&&m.init(It,n.renderState)}if(xt&&xt.includes("camera-access")&&y){t.state.unbindTexture(),d=i.getBinding();for(let It=0;It<St.length;It++){const te=St[It].camera;if(te){let se=p[te];se||(se=new dc,p[te]=se);const Xt=d.getCameraImage(te);se.sourceTexture=Xt}}}}for(let St=0;St<A.length;St++){const Lt=w[St],xt=A[St];Lt!==null&&xt!==void 0&&xt.update(Lt,_t,c||a)}et&&et(Z,_t),_t.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_t}),_=null}const Bt=new gc;Bt.setAnimationLoop(wt),this.setAnimationLoop=function(Z){et=Z},this.dispose=function(){}}}const Km=new le,Tc=new Ot;Tc.set(-1,0,0,0,1,0,0,0,1);function Zm(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,uc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,M,T,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),T=M.envMap,b=M.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(Km.makeRotationFromEuler(b)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Tc),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=T*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ze&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Jm(s,t,e,i){let n={},r={};function a(M,T){const b=T.program;i.uniformBlockBinding(M,b,n[M.id])}function o(M,T){let b=n[M.id];b===void 0&&(_(M),b=l(M),n[M.id]=b,M.addEventListener("dispose",m));const A=T.program;i.updateUBOMapping(M,A);const w=t.render.frame;r[M.id]!==w&&(c(M),r[M.id]=w)}function l(M){const T=s.createBuffer(),b=M.__size,A=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,b,A),s.bindBuffer(s.UNIFORM_BUFFER,null),T}function c(M){const T=n[M.id],b=M.uniforms,A=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let w=0,g=b.length;w<g;w++){const S=b[w];if(Array.isArray(S))for(let N=0,P=S.length;N<P;N++)h(S[N],w,N,A);else h(S,w,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(M,T,b,A){if(u(M,T,b,A)===!0){const w=M.__offset,g=M.value;if(Array.isArray(g)){let S=0;for(let N=0;N<g.length;N++){const P=g[N],I=y(P,!0);d(P,M.__data,S),S+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else d(g,M.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,M.__data)}}function d(M,T,b){typeof M=="number"||typeof M=="boolean"?T[b]=M:M.isMatrix3?(T[b]=M.elements[0],T[b+1]=M.elements[1],T[b+2]=M.elements[2],T[b+3]=0,T[b+4]=M.elements[3],T[b+5]=M.elements[4],T[b+6]=M.elements[5],T[b+7]=0,T[b+8]=M.elements[6],T[b+9]=M.elements[7],T[b+10]=M.elements[8],T[b+11]=0):ArrayBuffer.isView(M)?T.set(M.subarray(0,T.length-b),b):M.toArray(T,b)}function u(M,T,b,A){const w=M.value,g=T+"_"+b;if(Array.isArray(w)){A[g]===void 0&&(A[g]=[]);const S=A[g];let N=!1;for(let P=0;P<w.length;P++)f(w[P],S,P)===!0&&(N=!0);return N}return f(w,A,g)}function f(M,T,b){if(T[b]===void 0)return typeof M=="number"||typeof M=="boolean"?T[b]=M:ArrayBuffer.isView(M)?T[b]=M.slice():T[b]=M.clone(),!0;{const A=T[b];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return T[b]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(A.equals(M)===!1)return A.copy(M),!0}}return!1}function _(M){const T=M.uniforms;let b=0;const A=16;for(let g=0,S=T.length;g<S;g++){const N=Array.isArray(T[g])?T[g]:[T[g]];for(let P=0,I=N.length;P<I;P++){const O=N[P],W=Array.isArray(O.value)?O.value:[O.value],D=Array.isArray(T[g])||Array.isArray(O.value);let G=b;for(let H=0,nt=W.length;H<nt;H++){const q=W[H],j=y(q,D),et=b%A,wt=et%j.boundary,Bt=et+wt;b+=wt,Bt!==0&&A-Bt<j.storage&&(b+=A-Bt),H===0&&(G=b),b+=j.storage}const $=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new $((b-G)/Float32Array.BYTES_PER_ELEMENT),O.__offset=G}}const w=b%A;return w>0&&(b+=A-w),M.__size=b,M.__cache={},this}function y(M,T){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=16,b.storage=48):M.isMatrix4?(b.boundary=16,b.storage=64):M.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",M),T===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function m(M){const T=M.target;T.removeEventListener("dispose",m),s.deleteBuffer(n[T.id]),delete n[T.id],delete r[T.id]}function p(){for(const M in n)s.deleteBuffer(n[M]);n={},r={}}return{bind:a,update:o,dispose:p}}const Qm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let vi=null;function jm(){return vi===null&&(vi=new Hh(Qm,16,16,ln,Je),vi.name="DFG_LUT",vi.minFilter=$e,vi.magFilter=$e,vi.wrapS=Di,vi.wrapT=Di,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}class Cl{constructor(t={}){const{canvas:e=mh(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=ii}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const y=f,m=new Set([ja,Qa,Ja]),p=new Set([ii,Ei,rs,Nn,Ka,Za]),M=new Uint32Array(4),T=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]};let A=null,w=null;const g=[],S=[];let N=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let I=!1,O=null,W=null,D=null,G=null;this._outputColorSpace=Ie;let $=0,H=0,nt=null,q=-1,j=null;const et=new me,wt=new me;let Bt=null;const Z=new Ut(0);let _t=0,St=e.width,Lt=e.height,xt=1,zt=null,_e=null;const It=new me(0,0,St,Lt),te=new me(0,0,St,Lt);let se=!1;const Xt=new cs,Le=new io;let ye=!1,Ye=!1;const de=new le,_i=new F,Te=new me,ni={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let si=!1;function ri(){return nt===null?xt:1}let U=i;function ai(v,L){return e.getContext(v,L)}let ce,he,pt,Se,Dt,Ft,E,x,k,it,Q,ot,ut,Y,K,ct,C,J,X,ht,rt,lt,Ct;try{const v={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ha}`),e.addEventListener("webglcontextlost",Pt,!1),e.addEventListener("webglcontextrestored",Gt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),U===null){const L="webgl2";if(U=ai(L,v),U===null)throw ai(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(v){throw e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",Gt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),Jt("WebGLRenderer: "+v.message),v}function Vt(){ce=new np(U),ce.init(),rt=new Wm(U,ce),he=new qf(U,ce,t,rt),pt=new Gm(U,ce),he.reversedDepthBuffer&&u&&pt.buffers.depth.setReversed(!0),W=U.createFramebuffer(),D=U.createFramebuffer(),G=U.createFramebuffer(),Se=new ap(U),Dt=new Rm,Ft=new Vm(U,ce,pt,Dt,he,rt,Se),E=new ip(P),x=new od(U),lt=new Wf(U,x),k=new sp(U,x,Se,lt),it=new lp(U,k,x,lt,Se),J=new op(U,he,Ft),K=new Yf(Dt),Q=new Am(P,E,ce,he,lt,K),ot=new Zm(P,Dt),ut=new Pm,Y=new Fm(ce),C=new Vf(P,E,pt,it,_,l),ct=new Hm(P,it,he),Ct=new Jm(U,Se,he,pt),X=new Xf(U,ce,Se),ht=new rp(U,ce,Se),Se.programs=Q.programs,P.capabilities=he,P.extensions=ce,P.properties=Dt,P.renderLists=ut,P.shadowMap=ct,P.state=pt,P.info=Se}y!==ii&&(N=new hp(y,e.width,e.height,o,n,r));const st=new $m(P,U);this.xr=st,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const v=ce.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=ce.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(v){v!==void 0&&(xt=v,this.setSize(St,Lt,!1))},this.getSize=function(v){return v.set(St,Lt)},this.setSize=function(v,L,V=!0){if(st.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}St=v,Lt=L,e.width=Math.floor(v*xt),e.height=Math.floor(L*xt),V===!0&&(e.style.width=v+"px",e.style.height=L+"px"),N!==null&&N.setSize(e.width,e.height),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(St*xt,Lt*xt).floor()},this.setDrawingBufferSize=function(v,L,V){St=v,Lt=L,xt=V,e.width=Math.floor(v*V),e.height=Math.floor(L*V),this.setViewport(0,0,v,L)},this.setEffects=function(v){if(y===ii){Jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let L=0;L<v.length;L++)if(v[L].isOutputPass===!0){Nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(et)},this.getViewport=function(v){return v.copy(It)},this.setViewport=function(v,L,V,B){v.isVector4?It.set(v.x,v.y,v.z,v.w):It.set(v,L,V,B),pt.viewport(et.copy(It).multiplyScalar(ri()).round())},this.getScissor=function(v){return v.copy(te)},this.setScissor=function(v,L,V,B){v.isVector4?te.set(v.x,v.y,v.z,v.w):te.set(v,L,V,B),pt.scissor(wt.copy(te).multiplyScalar(ri()).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(v){pt.setScissorTest(se=v)},this.setOpaqueSort=function(v){zt=v},this.setTransparentSort=function(v){_e=v},this.getClearColor=function(v){return v.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(v=!0,L=!0,V=!0){let B=0;if(v){let z=!1;if(nt!==null){const ft=nt.texture.format;z=m.has(ft)}if(z){const ft=nt.texture.type,yt=p.has(ft),dt=C.getClearColor(),vt=C.getClearAlpha(),Tt=dt.r,kt=dt.g,qt=dt.b;yt?(M[0]=Tt,M[1]=kt,M[2]=qt,M[3]=vt,U.clearBufferuiv(U.COLOR,0,M)):(T[0]=Tt,T[1]=kt,T[2]=qt,T[3]=vt,U.clearBufferiv(U.COLOR,0,T))}else B|=U.COLOR_BUFFER_BIT}L&&(B|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),O=v},this.dispose=function(){e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",Gt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),C.dispose(),ut.dispose(),Y.dispose(),Ft.dispose(),Dt.dispose(),E.dispose(),it.dispose(),k.dispose(),lt.dispose(),Ct.dispose(),Q.dispose(),st.dispose(),st.removeEventListener("sessionstart",vo),st.removeEventListener("sessionend",Mo),Qi.stop()};function Pt(v){v.preventDefault(),ar("WebGLRenderer: Context Lost."),I=!0}function Gt(){ar("WebGLRenderer: Context Restored."),I=!1;const v=Se.autoReset,L=ct.enabled,V=ct.autoUpdate,B=ct.needsUpdate,z=ct.type;Vt(),Se.autoReset=v,ct.enabled=L,ct.autoUpdate=V,ct.needsUpdate=B,ct.type=z}function mt(v){Jt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function ee(v){const L=v.target;L.removeEventListener("dispose",ee),Ae(L)}function Ae(v){Ui(v),Dt.remove(v)}function Ui(v){const L=Dt.get(v).programs;L!==void 0&&(L.forEach(function(V){Q.releaseProgram(V)}),v.isShaderMaterial&&Q.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,V,B,z,ft){L===null&&(L=ni);const yt=z.isMesh&&z.matrixWorld.determinantAffine()<0,dt=Lc(v,L,V,B,z);pt.setMaterial(B,yt);let vt=V.index,Tt=1;if(B.wireframe===!0){if(vt=k.getWireframeAttribute(V),vt===void 0)return;Tt=2}const kt=V.drawRange,qt=V.attributes.position;let bt=kt.start*Tt,Yt=(kt.start+kt.count)*Tt;ft!==null&&(bt=Math.max(bt,ft.start*Tt),Yt=Math.min(Yt,(ft.start+ft.count)*Tt)),vt!==null?(bt=Math.max(bt,0),Yt=Math.min(Yt,vt.count)):qt!=null&&(bt=Math.max(bt,0),Yt=Math.min(Yt,qt.count));const xe=Yt-bt;if(xe<0||xe===1/0)return;lt.setup(z,B,dt,V,vt);let ae,re=X;if(vt!==null&&(ae=x.get(vt),re=ht,re.setIndex(ae)),z.isMesh)B.wireframe===!0?(pt.setLineWidth(B.wireframeLinewidth*ri()),re.setMode(U.LINES)):re.setMode(U.TRIANGLES);else if(z.isLine){let Oe=B.linewidth;Oe===void 0&&(Oe=1),pt.setLineWidth(Oe*ri()),z.isLineSegments?re.setMode(U.LINES):z.isLineLoop?re.setMode(U.LINE_LOOP):re.setMode(U.LINE_STRIP)}else z.isPoints?re.setMode(U.POINTS):z.isSprite&&re.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(ce.get("WEBGL_multi_draw"))re.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Oe=z._multiDrawStarts,Et=z._multiDrawCounts,Ge=z._multiDrawCount,Qt=vt?x.get(vt).bytesPerElement:1,ji=Dt.get(B).currentProgram.getUniforms();for(let Be=0;Be<Ge;Be++)ji.setValue(U,"_gl_DrawID",Be),re.render(Oe[Be]/Qt,Et[Be])}else if(z.isInstancedMesh)re.renderInstances(bt,xe,z.count);else if(V.isInstancedBufferGeometry){const Oe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Et=Math.min(V.instanceCount,Oe);re.renderInstances(bt,xe,Et)}else re.render(bt,xe)};function xo(v,L,V,B){O!==null&&v.isNodeMaterial&&O.setObject(B,v),ye===!0&&K.setState(v,V,!1),v.transparent===!0&&v.side===pe&&v.forceSinglePass===!1?(v.side=Ze,v.needsUpdate=!0,Wn(v,L,B),v.side=Yi,v.needsUpdate=!0,Wn(v,L,B),v.side=pe):Wn(v,L,B)}this.compile=function(v,L,V=null){V===null&&(V=v),O!==null&&O.renderStart(v,L,V),w=Y.get(V),w.init(L),S.push(w),V.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),v!==V&&v.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),w.setupLights(),O!==null&&O.updateLights(w.state.lightsArray),Ye=this.localClippingEnabled,ye=K.init(this.clippingPlanes,Ye),ye===!0&&K.setGlobalState(this.clippingPlanes,L),O!==null&&ct.render(w.state.shadowsArray,V,L);const B=new Set;return v.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ft=z.material;if(ft)if(Array.isArray(ft))for(let yt=0;yt<ft.length;yt++){const dt=ft[yt];xo(dt,V,L,z),B.add(dt)}else xo(ft,V,L,z),B.add(ft)}),w=S.pop(),O!==null&&O.renderEnd(),B},this.compileAsync=function(v,L,V=null){const B=this.compile(v,L,V);return new Promise(z=>{function ft(){if(B.forEach(function(yt){const vt=Dt.get(yt).currentProgram;(vt===void 0||vt.isReady())&&B.delete(yt)}),B.size===0){z(v);return}setTimeout(ft,10)}ce.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let _r=null;function Cc(v){_r&&_r(v)}function vo(){Qi.stop()}function Mo(){Qi.start()}const Qi=new gc;Qi.setAnimationLoop(Cc),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(v){_r=v,st.setAnimationLoop(v),v===null?Qi.stop():Qi.start()},st.addEventListener("sessionstart",vo),st.addEventListener("sessionend",Mo),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){Jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;O!==null&&O.renderStart(v,L);const V=st.enabled===!0&&st.isPresenting===!0,B=N!==null&&(nt===null||V)&&N.begin(P,nt);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(L),L=st.getCamera()),v.isScene===!0&&v.onBeforeRender(P,v,L,nt),w=Y.get(v,S.length),w.init(L),w.state.textureUnits=Ft.getTextureUnits(),S.push(w),de.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?Le.setFromArrayCamera(L):Xt.setFromProjectionMatrix(de,mi,L.reversedDepth),Ye=this.localClippingEnabled,ye=K.init(this.clippingPlanes,Ye),A=ut.get(v,g.length),A.init(),g.push(A),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){const yt=P.xr.getDepthSensingMesh();yt!==null&&xr(yt,L,-1/0,P.sortObjects)}xr(v,L,0,P.sortObjects),A.finish(),O!==null&&O.updateLights(w.state.lightsArray),P.sortObjects===!0&&A.sort(zt,_e),si=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,si&&C.addToRenderList(A,v),this.info.autoReset===!0&&this.info.reset(),ye===!0&&K.beginShadows();const z=w.state.shadowsArray;if(ct.render(z,v,L),ye===!0&&K.endShadows(),(B&&N.hasRenderPass())===!1){const yt=A.opaque,dt=A.transmissive;if(w.setupLights(),L.isArrayCamera){const vt=L.cameras;if(dt.length>0)for(let Tt=0,kt=vt.length;Tt<kt;Tt++){const qt=vt[Tt];So(yt,dt,v,qt)}si&&C.render(v);for(let Tt=0,kt=vt.length;Tt<kt;Tt++){const qt=vt[Tt];yo(A,v,qt,qt.viewport)}}else dt.length>0&&So(yt,dt,v,L),si&&C.render(v),yo(A,v,L)}nt!==null&&H===0&&(Ft.updateMultisampleRenderTarget(nt),Ft.updateRenderTargetMipmap(nt)),B&&N.end(P),v.isScene===!0&&v.onAfterRender(P,v,L),lt.resetDefaultState(),q=-1,j=null,S.pop(),S.length>0?(w=S[S.length-1],Ft.setTextureUnits(w.state.textureUnits),ye===!0&&K.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,g.pop(),g.length>0?A=g[g.length-1]:A=null,O!==null&&O.renderEnd()};function xr(v,L,V,B){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)V=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLight)w.pushLight(v),v.castShadow&&w.pushShadow(v);else if(v.isSprite){const yt=L.isArrayCamera?Le:Xt;if(!v.frustumCulled||v.intersectsFrustum(yt)){B&&Te.setFromMatrixPosition(v.matrixWorld).applyMatrix4(de);const dt=it.update(v),vt=v.material;vt.visible&&A.push(v,dt,vt,V,Te.z,null,L)}}else if(v.isMesh||v.isLine||v.isPoints){const yt=L.isArrayCamera?Le:Xt;if(!v.frustumCulled||v.intersectsFrustum(yt)){const dt=it.update(v),vt=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Te.copy(v.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Te.copy(dt.boundingSphere.center)),Te.applyMatrix4(v.matrixWorld).applyMatrix4(de)),Array.isArray(vt)){const Tt=dt.groups;for(let kt=0,qt=Tt.length;kt<qt;kt++){const bt=Tt[kt],Yt=vt[bt.materialIndex];Yt&&Yt.visible&&A.push(v,dt,Yt,V,Te.z,bt,L)}}else vt.visible&&A.push(v,dt,vt,V,Te.z,null,L)}}}const ft=v.children;for(let yt=0,dt=ft.length;yt<dt;yt++)xr(ft[yt],L,V,B)}function yo(v,L,V,B){const{opaque:z,transmissive:ft,transparent:yt}=v;w.setupLightsView(V),ye===!0&&K.setGlobalState(P.clippingPlanes,V),B&&pt.viewport(et.copy(B)),z.length>0&&ps(z,L,V),ft.length>0&&ps(ft,L,V),yt.length>0&&ps(yt,L,V),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function So(v,L,V,B){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[B.id]===void 0){const bt=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[B.id]=new Qe(1,1,{generateMipmaps:!0,type:bt?Je:ii,minFilter:Wi,samples:Math.max(4,he.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$t.workingColorSpace})}const ft=w.state.transmissionRenderTarget[B.id],yt=B.viewport||et;ft.setSize(yt.z*P.transmissionResolutionScale,yt.w*P.transmissionResolutionScale);const dt=P.getRenderTarget(),vt=P.getActiveCubeFace(),Tt=P.getActiveMipmapLevel();P.setRenderTarget(ft),P.getClearColor(Z),_t=P.getClearAlpha(),_t<1&&P.setClearColor(16777215,.5),P.clear(),si&&C.render(V);const kt=P.toneMapping;P.toneMapping=Ii;const qt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),w.setupLightsView(B),ye===!0&&K.setGlobalState(P.clippingPlanes,B),ps(v,V,B),Ft.updateMultisampleRenderTarget(ft),Ft.updateRenderTargetMipmap(ft),ce.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let Yt=0,xe=L.length;Yt<xe;Yt++){const ae=L[Yt],{object:re,geometry:Oe,material:Et,group:Ge}=ae;if(Et.side===pe&&re.layers.test(B.layers)){const Qt=Et.side;Et.side=Ze,Et.needsUpdate=!0,bo(re,V,B,Oe,Et,Ge),Et.side=Qt,Et.needsUpdate=!0,bt=!0}}bt===!0&&(Ft.updateMultisampleRenderTarget(ft),Ft.updateRenderTargetMipmap(ft))}P.setRenderTarget(dt,vt,Tt),P.setClearColor(Z,_t),qt!==void 0&&(B.viewport=qt),P.toneMapping=kt}function ps(v,L,V){const B=L.isScene===!0?L.overrideMaterial:null;for(let z=0,ft=v.length;z<ft;z++){const yt=v[z],{object:dt,geometry:vt,group:Tt}=yt;let kt=yt.material;kt.allowOverride===!0&&B!==null&&(kt=B),dt.layers.test(V.layers)&&bo(dt,L,V,vt,kt,Tt)}}function bo(v,L,V,B,z,ft){O!==null&&z.isNodeMaterial&&O.setObject(v,z),v.onBeforeRender(P,L,V,B,z,ft),v.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),z.onBeforeRender(P,L,V,B,v,ft),z.transparent===!0&&z.side===pe&&z.forceSinglePass===!1?(z.side=Ze,z.needsUpdate=!0,P.renderBufferDirect(V,L,B,z,v,ft),z.side=Yi,z.needsUpdate=!0,P.renderBufferDirect(V,L,B,z,v,ft),z.side=pe):P.renderBufferDirect(V,L,B,z,v,ft),v.onAfterRender(P,L,V,B,z,ft)}function Eo(v){let L=0;for(const V of v)V.texture!==null&&L++;return L}function Wn(v,L,V){L.isScene!==!0&&(L=ni);const B=Dt.get(v),z=w.state.lights,ft=w.state.shadowsArray,yt=z.state.version,dt=Q.getParameters(v,z.state,ft,L,V,w.state.lightProbeGridArray),vt=Q.getProgramCacheKey(dt);let Tt=B.programs;B.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,B.fog=L.fog;const kt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;B.envMap=E.get(v.envMap||B.environment,kt),B.envMapRotation=B.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,Tt===void 0&&(v.addEventListener("dispose",ee),Tt=new Map,B.programs=Tt,B.programVariants=new Map);let qt=Tt.get(vt);if(qt!==void 0){if(B.currentProgram===qt&&B.lightsStateVersion===yt)return To(v,dt),qt}else dt.uniforms=Q.getUniforms(v),O!==null&&v.isNodeMaterial&&O.build(v,V,dt),v.onBeforeCompile(dt,P),qt=Q.acquireProgram(dt,vt),Tt.set(vt,qt),B.uniforms=dt.uniforms;const bt=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(bt.clippingPlanes=K.uniform),To(v,dt),B.needsLights=Ic(v),B.lightsStateVersion=yt,B.needsLights&&(bt.ambientLightColor.value=z.state.ambient,bt.lightProbe.value=z.state.probe,bt.sunLights.value=z.state.sun,bt.sunLightShadows.value=z.state.sunShadow,bt.directionalLights.value=z.state.directional,bt.directionalLightShadows.value=z.state.directionalShadow,bt.spotLights.value=z.state.spot,bt.spotLightShadows.value=z.state.spotShadow,bt.rectAreaLights.value=z.state.rectArea,bt.ltc_1.value=z.state.rectAreaLTC1,bt.ltc_2.value=z.state.rectAreaLTC2,bt.pointLights.value=z.state.point,bt.pointLightShadows.value=z.state.pointShadow,bt.hemisphereLights.value=z.state.hemi,bt.sunShadowMatrix.value=z.state.sunShadowMatrix,bt.sunShadowCascade.value=z.state.sunShadowCascade,bt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,bt.spotLightMatrix.value=z.state.spotLightMatrix,bt.spotLightMap.value=z.state.spotLightMap,bt.pointShadowMatrix.value=z.state.pointShadowMatrix),B.numLightProbeGrids=Eo(w.state.lightProbeGridArray),B.currentProgram=qt,B.uniformsList=null,qt}function Pc(v,L,V,B,z){const ft=Dt.get(v),yt=ft.currentProgram.id+","+B+","+z;let dt=ft.programVariants.get(yt);return dt===void 0?(dt=Wn(v,L,V),ft.programVariants.set(yt,dt)):(ft.currentProgram=dt,ft.uniformsList=null,ft.outputColorSpace=B,ft.toneMapping=z),dt}function wo(v){if(v.uniformsList===null){const L=v.currentProgram.getUniforms();v.uniformsList=Qs.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function To(v,L){const V=Dt.get(v);V.outputColorSpace=L.outputColorSpace,V.batching=L.batching,V.batchingColor=L.batchingColor,V.instancing=L.instancing,V.instancingColor=L.instancingColor,V.instancingMorph=L.instancingMorph,V.skinning=L.skinning,V.morphTargets=L.morphTargets,V.morphNormals=L.morphNormals,V.morphColors=L.morphColors,V.morphTargetsCount=L.morphTargetsCount,V.numClippingPlanes=L.numClippingPlanes,V.numIntersection=L.numClipIntersection,V.vertexAlphas=L.vertexAlphas,V.vertexTangents=L.vertexTangents,V.toneMapping=L.toneMapping}function Lc(v,L,V,B,z){L.isScene!==!0&&(L=ni),Ft.resetTextureUnits();const ft=L.fog,yt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?L.environment:null,dt=nt===null?P.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:$t.workingColorSpace,vt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Tt=E.get(B.envMap||yt,vt),kt=B.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,qt=!!V.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),bt=!!V.morphAttributes.position,Yt=!!V.morphAttributes.normal,xe=!!V.morphAttributes.color;let ae=Ii;B.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ae=P.toneMapping);const re=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Oe=re!==void 0?re.length:0,Et=Dt.get(B),Ge=w.state.lights;if(ye===!0&&(Ye===!0||v!==j)){const ue=v===j&&B.id===q;K.setState(B,v,ue)}let Qt=!1,ji=!1;B.version===Et.__version?Et.needsLights&&Et.lightsStateVersion!==Ge.state.version||z.isBatchedMesh&&Et.batching===!1||!z.isBatchedMesh&&Et.batching===!0||z.isBatchedMesh&&Et.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Et.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Et.instancing===!1||!z.isInstancedMesh&&Et.instancing===!0||z.isSkinnedMesh&&Et.skinning===!1||!z.isSkinnedMesh&&Et.skinning===!0||z.isInstancedMesh&&Et.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Et.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Et.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Et.instancingMorph===!1&&z.morphTexture!==null||Et.envMap!==Tt||B.fog===!0&&Et.fog!==ft||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==K.numPlanes||Et.numIntersection!==K.numIntersection)||Et.vertexAlphas!==kt||Et.vertexTangents!==qt||Et.morphTargets!==bt||Et.morphNormals!==Yt||Et.morphColors!==xe||Et.morphTargetsCount!==Oe||Et.numLightProbeGrids!==Eo(w.state.lightProbeGridArray)?Qt=!0:(Et.outputColorSpace!==dt||Et.toneMapping!==ae)&&(ji=!0):(Qt=!0,Et.__version=B.version);let Be=Et.currentProgram;(Qt===!0||ji===!0)&&(Be=ji===!0?Pc(B,L,z,dt,ae):Wn(B,L,z),O&&B.isNodeMaterial&&O.onUpdateProgram(B,Be,Et));let ms=!1,Fi=!1,tn=!1;const Zt=Be.getUniforms(),De=Et.uniforms;if(pt.useProgram(Be.program)&&(ms=!0,Fi=!0,tn=!0),B.id!==q&&(q=B.id,Fi=!0),ms||j!==v){pt.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Zt.setValue(U,"projectionMatrix",v.projectionMatrix),Zt.setValue(U,"viewMatrix",v.matrixWorldInverse);const Re=Zt.map.cameraPosition;Re!==void 0&&Re.setValue(U,_i.setFromMatrixPosition(v.matrixWorld)),he.logarithmicDepthBuffer&&Zt.setValue(U,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Zt.setValue(U,"isOrthographic",v.isOrthographicCamera===!0),j!==v&&(j=v,Fi=!0,tn=!0)}if(Et.needsLights&&(Ge.state.sunShadowMap.length>0&&Zt.setValue(U,"sunShadowMap",Ge.state.sunShadowMap,Ft),Ge.state.directionalShadowMap.length>0&&Zt.setValue(U,"directionalShadowMap",Ge.state.directionalShadowMap,Ft),Ge.state.spotShadowMap.length>0&&Zt.setValue(U,"spotShadowMap",Ge.state.spotShadowMap,Ft),Ge.state.pointShadowMap.length>0&&Zt.setValue(U,"pointShadowMap",Ge.state.pointShadowMap,Ft)),z.isSkinnedMesh){Zt.setOptional(U,z,"bindMatrix"),Zt.setOptional(U,z,"bindMatrixInverse");const ue=z.skeleton;ue&&(ue.boneTexture===null&&ue.computeBoneTexture(),Zt.setValue(U,"boneTexture",ue.boneTexture,Ft))}z.isBatchedMesh&&(Zt.setOptional(U,z,"batchingTexture"),Zt.setValue(U,"batchingTexture",z._matricesTexture,Ft),Zt.setOptional(U,z,"batchingIdTexture"),Zt.setValue(U,"batchingIdTexture",z._indirectTexture,Ft),Zt.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&Zt.setValue(U,"batchingColorTexture",z._colorsTexture,Ft));const di=V.morphAttributes;if((di.position!==void 0||di.normal!==void 0||di.color!==void 0)&&J.update(z,V,Be),(Fi||Et.receiveShadow!==z.receiveShadow)&&(Et.receiveShadow=z.receiveShadow,Zt.setValue(U,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&L.environment!==null&&(De.envMapIntensity.value=L.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=jm()),Fi){if(Zt.setValue(U,"toneMappingExposure",P.toneMappingExposure),Et.needsLights&&Dc(De,tn),ft&&B.fog===!0&&ot.refreshFogUniforms(De,ft),ot.refreshMaterialUniforms(De,B,xt,Lt,w.state.transmissionRenderTarget[v.id]),Et.needsLights&&Et.numLightProbeGrids>0){const ue=b;let Re=0;for(const Ti of w.state.lightProbeGridArray)Ti.texture!==null&&(ue.textures[Re]=Ti.texture,ue.min[Re]=Ti.boundingBox.min,ue.max[Re]=Ti.boundingBox.max,ue.resolution[Re]=Ti.resolution,Re++);for(const Ti in ue)ue[Ti].length=Re;De.probesSH.value=ue.textures,De.probesMin.value=ue.min,De.probesMax.value=ue.max,De.probesResolution.value=ue.resolution}Qs.upload(U,wo(Et),De,Ft)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Qs.upload(U,wo(Et),De,Ft),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Zt.setValue(U,"center",z.center),Zt.setValue(U,"modelViewMatrix",z.modelViewMatrix),Zt.setValue(U,"normalMatrix",z.normalMatrix),Zt.setValue(U,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){const ue=B.uniformsGroups;for(let Re=0,Ti=ue.length;Re<Ti;Re++){const Ro=ue[Re];Ct.update(Ro,Be),Ct.bind(Ro,Be)}}return Be}function Dc(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.sunLights.needsUpdate=L,v.sunLightShadows.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function Ic(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(v,L,V){const B=Dt.get(v);B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Dt.get(v.texture).__webglTexture=L,Dt.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:V,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,L){const V=Dt.get(v);V.__webglFramebuffer=L,V.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(v,L=0,V=0){nt=v,$=L,H=V;let B=null,z=!1,ft=!1;if(v){const dt=Dt.get(v);if(dt.__useDefaultFramebuffer!==void 0){pt.bindFramebuffer(U.FRAMEBUFFER,dt.__webglFramebuffer),et.copy(v.viewport),wt.copy(v.scissor),Bt=v.scissorTest,pt.viewport(et),pt.scissor(wt),pt.setScissorTest(Bt),q=-1;return}else if(dt.__webglFramebuffer===void 0)Ft.setupRenderTarget(v);else if(dt.__hasExternalTextures)Ft.rebindTextures(v,Dt.get(v.texture).__webglTexture,Dt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const kt=v.depthTexture;if(dt.__boundDepthTexture!==kt){if(kt!==null&&Dt.has(kt)&&(v.width!==kt.image.width||v.height!==kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ft.setupDepthRenderbuffer(v)}}const vt=v.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(ft=!0);const Tt=Dt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Tt[L])?B=Tt[L][V]:B=Tt[L],z=!0):v.samples>0&&Ft.useMultisampledRTT(v)===!1?B=Dt.get(v).__webglMultisampledFramebuffer:Array.isArray(Tt)?B=Tt[V]:B=Tt,et.copy(v.viewport),wt.copy(v.scissor),Bt=v.scissorTest}else et.copy(It).multiplyScalar(xt).floor(),wt.copy(te).multiplyScalar(xt).floor(),Bt=se;if(V!==0&&(B=W),pt.bindFramebuffer(U.FRAMEBUFFER,B)&&pt.drawBuffers(v,B),pt.viewport(et),pt.scissor(wt),pt.setScissorTest(Bt),z){const dt=Dt.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,dt.__webglTexture,V)}else if(ft){const dt=L;for(let vt=0;vt<v.textures.length;vt++){const Tt=Dt.get(v.textures[vt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+vt,Tt.__webglTexture,V,dt)}}else if(v!==null&&V!==0){const dt=Dt.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,dt.__webglTexture,V)}q=-1};function Ao(v){const L=Dt.get(v);return(L.__readFormat!==v.format||L.__readType!==v.type)&&(L.__readFormat=v.format,L.__readType=v.type,L.__formatReadable=he.textureFormatReadable(v.format),L.__typeReadable=he.textureTypeReadable(v.type)),L}this.readRenderTargetPixels=function(v,L,V,B,z,ft,yt,dt=0){if(!(v&&v.isWebGLRenderTarget)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Dt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&yt!==void 0&&(vt=vt[yt],Array.isArray(vt)&&(vt=vt[0])),vt){pt.bindFramebuffer(U.FRAMEBUFFER,vt);try{const Tt=v.textures[dt],kt=Tt.format,qt=Tt.type;v.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+dt);const bt=Ao(Tt);if(bt.__formatReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(bt.__typeReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-B&&V>=0&&V<=v.height-z&&U.readPixels(L,V,B,z,rt.convert(kt),rt.convert(qt),ft)}finally{const Tt=nt!==null?Dt.get(nt).__webglFramebuffer:null;pt.bindFramebuffer(U.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(v,L,V,B,z,ft,yt,dt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Dt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&yt!==void 0&&(vt=vt[yt],Array.isArray(vt)&&(vt=vt[0])),vt)if(L>=0&&L<=v.width-B&&V>=0&&V<=v.height-z){pt.bindFramebuffer(U.FRAMEBUFFER,vt);const Tt=v.textures[dt],kt=Tt.format,qt=Tt.type;v.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+dt);const bt=Ao(Tt);if(bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Yt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Yt),U.bufferData(U.PIXEL_PACK_BUFFER,ft.byteLength,U.STREAM_READ),U.readPixels(L,V,B,z,rt.convert(kt),rt.convert(qt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const xe=nt!==null?Dt.get(nt).__webglFramebuffer:null;pt.bindFramebuffer(U.FRAMEBUFFER,xe);const ae=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await gh(U,ae,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Yt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ft),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Yt),U.deleteSync(ae),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,L=null,V=0){const B=Math.pow(2,-V),z=Math.floor(v.image.width*B),ft=Math.floor(v.image.height*B),yt=L!==null?L.x:0,dt=L!==null?L.y:0;Ft.setTexture2D(v,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,yt,dt,z,ft),pt.unbindTexture()},this.copyTextureToTexture=function(v,L,V=null,B=null,z=0,ft=0){let yt,dt,vt,Tt,kt,qt,bt,Yt,xe;const ae=v.isCompressedTexture?v.mipmaps[ft]:v.image;if(V!==null)yt=V.max.x-V.min.x,dt=V.max.y-V.min.y,vt=V.isBox3?V.max.z-V.min.z:1,Tt=V.min.x,kt=V.min.y,qt=V.isBox3?V.min.z:0;else{const Zt=Math.pow(2,-z);yt=Math.floor(ae.width*Zt),dt=Math.floor(ae.height*Zt),v.isDataArrayTexture?vt=ae.depth:v.isData3DTexture?vt=Math.floor(ae.depth*Zt):vt=1,Tt=0,kt=0,qt=0}B!==null?(bt=B.x,Yt=B.y,xe=B.z):(bt=0,Yt=0,xe=0);const re=rt.convert(L.format),Oe=rt.convert(L.type);let Et;L.isData3DTexture?(Ft.setTexture3D(L,0),Et=U.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Ft.setTexture2DArray(L,0),Et=U.TEXTURE_2D_ARRAY):(Ft.setTexture2D(L,0),Et=U.TEXTURE_2D),pt.activeTexture(U.TEXTURE0),pt.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,L.flipY),pt.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),pt.pixelStorei(U.UNPACK_ALIGNMENT,L.unpackAlignment);const Ge=pt.getParameter(U.UNPACK_ROW_LENGTH),Qt=pt.getParameter(U.UNPACK_IMAGE_HEIGHT),ji=pt.getParameter(U.UNPACK_SKIP_PIXELS),Be=pt.getParameter(U.UNPACK_SKIP_ROWS),ms=pt.getParameter(U.UNPACK_SKIP_IMAGES);pt.pixelStorei(U.UNPACK_ROW_LENGTH,ae.width),pt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ae.height),pt.pixelStorei(U.UNPACK_SKIP_PIXELS,Tt),pt.pixelStorei(U.UNPACK_SKIP_ROWS,kt),pt.pixelStorei(U.UNPACK_SKIP_IMAGES,qt);const Fi=v.isDataArrayTexture||v.isData3DTexture,tn=L.isDataArrayTexture||L.isData3DTexture;if(v.isDepthTexture){const Zt=Dt.get(v),De=Dt.get(L),di=Dt.get(Zt.__renderTarget),ue=Dt.get(De.__renderTarget);pt.bindFramebuffer(U.READ_FRAMEBUFFER,di.__webglFramebuffer),pt.bindFramebuffer(U.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Re=0;Re<vt;Re++)Fi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Dt.get(v).__webglTexture,z,qt+Re),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Dt.get(L).__webglTexture,ft,xe+Re)),U.blitFramebuffer(Tt,kt,Tt+yt,kt+dt,bt,Yt,bt+yt,Yt+dt,U.DEPTH_BUFFER_BIT,U.NEAREST);pt.bindFramebuffer(U.READ_FRAMEBUFFER,null),pt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(z!==0||v.isRenderTargetTexture||Dt.has(v)){const Zt=Dt.get(v),De=Dt.get(L);pt.bindFramebuffer(U.READ_FRAMEBUFFER,D),pt.bindFramebuffer(U.DRAW_FRAMEBUFFER,G);for(let di=0;di<vt;di++)Fi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Zt.__webglTexture,z,qt+di):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Zt.__webglTexture,z),tn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,De.__webglTexture,ft,xe+di):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,De.__webglTexture,ft),z!==0?U.blitFramebuffer(Tt,kt,Tt+yt,kt+dt,bt,Yt,bt+yt,Yt+dt,U.COLOR_BUFFER_BIT,U.NEAREST):tn?U.copyTexSubImage3D(Et,ft,bt,Yt,xe+di,Tt,kt,yt,dt):U.copyTexSubImage2D(Et,ft,bt,Yt,Tt,kt,yt,dt);pt.bindFramebuffer(U.READ_FRAMEBUFFER,null),pt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else tn?v.isDataTexture||v.isData3DTexture?U.texSubImage3D(Et,ft,bt,Yt,xe,yt,dt,vt,re,Oe,ae.data):L.isCompressedArrayTexture?U.compressedTexSubImage3D(Et,ft,bt,Yt,xe,yt,dt,vt,re,ae.data):U.texSubImage3D(Et,ft,bt,Yt,xe,yt,dt,vt,re,Oe,ae):v.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ft,bt,Yt,yt,dt,re,Oe,ae.data):v.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ft,bt,Yt,ae.width,ae.height,re,ae.data):U.texSubImage2D(U.TEXTURE_2D,ft,bt,Yt,yt,dt,re,Oe,ae);pt.pixelStorei(U.UNPACK_ROW_LENGTH,Ge),pt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Qt),pt.pixelStorei(U.UNPACK_SKIP_PIXELS,ji),pt.pixelStorei(U.UNPACK_SKIP_ROWS,Be),pt.pixelStorei(U.UNPACK_SKIP_IMAGES,ms),ft===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&U.generateMipmap(Et),pt.unbindTexture()},this.initRenderTarget=function(v){Dt.get(v).__webglFramebuffer===void 0&&Ft.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Ft.setTextureCube(v,0):v.isData3DTexture?Ft.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Ft.setTexture2DArray(v,0):Ft.setTexture2D(v,0),pt.unbindTexture()},this.resetState=function(){$=0,H=0,nt=null,pt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}const js={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Gn{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const t0=new co(-1,1,1,-1,0,1);class e0 extends Fe{constructor(){super(),this.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ie([0,2,0,0,2,0],2))}}const i0=new e0;class uo{constructor(t){this._mesh=new Mt(i0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,t0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class n0 extends Gn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ke?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=hs.clone(t.uniforms),this.material=new Ke({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new uo(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Pl extends Gn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}}class s0 extends Gn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class r0{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new Rt);this._width=i.width,this._height=i.height,e=new Qe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Je}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new n0(js),this.copyPass.material.blending=on,this.timer=new sd}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let n=0,r=this.passes.length;n<r;n++){const a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Pl!==void 0&&(a instanceof Pl?i=!0:a instanceof s0&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Rt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class a0 extends Gn{constructor(t,e,i=null,n=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ut}render(t,e,i){const n=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=n}}const o0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ut(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Bn extends Gn{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new Rt(t.x,t.y):new Rt(256,256),this.clearColor=new Ut(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Qe(r,a,{type:Je,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new Qe(r,a,{type:Je,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new Qe(r,a,{type:Je,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}const o=o0;this.highPassUniforms=hs.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ke({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Rt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=hs.clone(js.uniforms),this.blendMaterial=new Ke({uniforms:this.copyUniforms,vertexShader:js.vertexShader,fragmentShader:js.fragmentShader,premultipliedAlpha:!0,blending:He,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ut,this._oldClearAlpha=1,this._basic=new oe,this._fsQuad=new uo(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new Rt(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Bn.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Bn.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[],i=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(i*i))/i);const n=[],r=[];for(let a=1;a<t;a+=2){const o=e[a],l=a+1<t?e[a+1]:0,c=o+l;n.push((a*o+(a+1)*l)/c),r.push(c)}return new Ke({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new Rt(.5,.5)},direction:{value:new Rt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:n},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Ke({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Bn.BlurDirectionX=new Rt(1,0);Bn.BlurDirectionY=new Rt(0,1);const Ws={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class l0 extends Gn{constructor(){super(),this.isOutputPass=!0,this.uniforms=hs.clone(Ws.uniforms),this.material=new fc({name:Ws.name,uniforms:this.uniforms,vertexShader:Ws.vertexShader,fragmentShader:Ws.fragmentShader}),this._fsQuad=new uo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},$t.getTransfer(this._outputColorSpace)===jt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ga?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Va?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Wa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===dr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===qa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ya?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Xa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class c0{constructor(t){R(this,"keys",new Set);R(this,"pressed",new Set);R(this,"mouse",{x:0,y:0,down:!1,clicked:!1});R(this,"canvas");this.canvas=t,this.bind()}bind(){window.addEventListener("keydown",t=>{["Space","Tab","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&t.preventDefault(),this.keys.has(t.code)||this.pressed.add(t.code),this.keys.add(t.code)}),window.addEventListener("keyup",t=>{this.keys.delete(t.code)}),window.addEventListener("blur",()=>{this.keys.clear(),this.mouse.down=!1}),document.addEventListener("visibilitychange",()=>{document.hidden&&(this.keys.clear(),this.mouse.down=!1)}),this.canvas.addEventListener("pointermove",t=>{const e=this.canvas.getBoundingClientRect();this.mouse.x=t.clientX-e.left,this.mouse.y=t.clientY-e.top}),this.canvas.addEventListener("pointerdown",t=>{if(t.button!==0)return;const e=this.canvas.getBoundingClientRect();this.mouse.x=t.clientX-e.left,this.mouse.y=t.clientY-e.top,this.mouse.down=!0,this.mouse.clicked=!0}),window.addEventListener("pointerup",t=>{t.button===0&&(this.mouse.down=!1)}),this.canvas.addEventListener("contextmenu",t=>t.preventDefault())}isDown(t){return this.keys.has(t)}wasPressed(t){return this.pressed.has(t)}wasAnyPressed(t){return t.some(e=>this.pressed.has(e))}get moveX(){return(this.isDown("KeyD")||this.isDown("ArrowRight")?1:0)-(this.isDown("KeyA")||this.isDown("ArrowLeft")?1:0)}get moveY(){return(this.isDown("KeyS")||this.isDown("ArrowDown")?1:0)-(this.isDown("KeyW")||this.isDown("ArrowUp")?1:0)}get moveVec(){const t=this.moveX,e=this.moveY,i=Math.hypot(t,e);return i>0?{x:t/i,y:e/i,len:i}:{x:0,y:0,len:0}}endFrame(){this.pressed.clear(),this.mouse.clicked=!1}}class h0{constructor(){R(this,"ctx",null);R(this,"master",null);R(this,"noiseBuf",null);R(this,"muted",!1);R(this,"drone",null)}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.42,this.master.connect(this.ctx.destination);const e=Math.floor(this.ctx.sampleRate*1.2),i=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=i.getChannelData(0);for(let r=0;r<e;r++)n[r]=Math.random()*2-1;this.noiseBuf=i}get now(){return this.ctx?this.ctx.currentTime:0}setMuted(t){this.muted=t,this.master&&this.ctx&&this.master.gain.setTargetAtTime(t?0:.42,this.ctx.currentTime,.05)}tone(t,e,i,n,r,a=0){if(!this.ctx||!this.master)return;const o=this.ctx.currentTime+a,l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type=i,l.frequency.setValueAtTime(Math.max(20,t),o),r!==void 0&&l.frequency.exponentialRampToValueAtTime(Math.max(20,r),o+e),c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(Math.max(2e-4,n),o+.012),c.gain.exponentialRampToValueAtTime(1e-4,o+e),l.connect(c),c.connect(this.master),l.start(o),l.stop(o+e+.02)}noise(t,e,i,n,r=1,a,o=0){if(!this.ctx||!this.master||!this.noiseBuf)return;const l=this.ctx.currentTime+o,c=this.ctx.createBufferSource();c.buffer=this.noiseBuf;const h=this.ctx.createBiquadFilter();h.type=i,h.Q.value=r,h.frequency.setValueAtTime(Math.max(30,n),l),a!==void 0&&h.frequency.exponentialRampToValueAtTime(Math.max(30,a),l+t);const d=this.ctx.createGain();d.gain.setValueAtTime(1e-4,l),d.gain.exponentialRampToValueAtTime(Math.max(2e-4,e),l+.01),d.gain.exponentialRampToValueAtTime(1e-4,l+t),c.connect(h),h.connect(d),d.connect(this.master),c.start(l,Math.random()*.2),c.stop(l+t+.02)}swing(){this.noise(.14,.09,"bandpass",2600,1.2,500)}hit(t=!1){this.noise(.1,.16,"lowpass",900,.8,120),this.tone(t?160:110,.09,"square",.08,45)}skill1(){this.noise(.28,.2,"bandpass",3200,1.5,300),this.tone(880,.3,"sawtooth",.1,180),this.tone(1320,.18,"triangle",.06,520,.02)}skill2(){this.tone(1180,.25,"triangle",.09,940),this.noise(.4,.12,"highpass",2e3,.7,600),this.tone(590,.4,"sine",.07,300,.05)}skill3(){this.tone(90,.9,"sine",.24,38),this.noise(.9,.24,"lowpass",1200,.8,80),this.tone(240,.5,"sawtooth",.09,60,.06),this.noise(.5,.1,"highpass",2600,1,400,.08)}dodge(){this.noise(.22,.1,"highpass",900,.8,2400)}perfect(){this.tone(880,.35,"sine",.1,880),this.tone(1320,.45,"sine",.07,1320,.02),this.tone(1760,.5,"triangle",.05,1760,.04),this.noise(.3,.07,"highpass",3e3,1,1200)}hurt(){this.tone(190,.22,"sawtooth",.1,70),this.noise(.16,.1,"lowpass",700,.6,120)}pickup(){this.tone(660,.1,"sine",.06,990),this.tone(990,.12,"triangle",.04,1320,.03)}ui(){this.tone(520,.06,"sine",.05)}buy(){this.tone(740,.08,"square",.04),this.tone(1100,.12,"sine",.05,1320,.05)}deny(){this.tone(180,.12,"square",.05,140)}heal(){this.tone(440,.3,"sine",.06,660),this.tone(660,.4,"sine",.04,880,.08)}bossRoar(){this.tone(64,1.2,"sawtooth",.18,40),this.tone(96,1,"square",.06,48),this.noise(1,.16,"lowpass",500,1,90)}death(){this.tone(220,1.4,"sine",.12,55),this.noise(1.2,.1,"lowpass",500,.8,60)}victory(){[392,523,659,784,1046].forEach((e,i)=>{this.tone(e,.7,"sine",.07,e,i*.16),this.tone(e*.5,.7,"triangle",.04,e*.5,i*.16)})}gate(){this.tone(300,.5,"sine",.06,180),this.noise(.5,.08,"bandpass",800,1,300)}startDrone(){if(!this.ctx||!this.master||this.drone)return;const t=a=>{const o=this.ctx.createOscillator();o.type="sawtooth",o.frequency.value=a;const l=this.ctx.createGain();return l.gain.value=.02,o.connect(l),{o,g:l}},e=t(55),i=t(82.4),n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=220,n.Q.value=.8;const r=this.ctx.createGain();r.gain.value=.5,e.g.connect(n),i.g.connect(n),n.connect(r),r.connect(this.master),e.o.start(),i.o.start(),this.drone={a:e.o,b:i.o,filter:n}}setRegionMood(t){if(!this.ctx||!this.drone)return;const e=[220,180,150,120];this.drone.filter.frequency.setTargetAtTime(e[Math.max(0,Math.min(3,t))],this.ctx.currentTime,1.5)}}const Xe={herb:{id:"herb",name:"青灵草",type:"material",desc:"枯木林与古寺之间生长的灵草，叶脉泛着微光，是炼丹的主药。",price:12,color:"#6fc98a"},bloodsand:{id:"bloodsand",name:"血砂",type:"material",desc:"浸过血的赤色矿砂，药性与煞气并存，慎用。",price:16,color:"#c2483f"},bone:{id:"bone",name:"兽骨",type:"material",desc:"影狼的骨头，坚硬而带着野性，可入药，也可炼器。",price:10,color:"#e6ddc4"},ghostfire:{id:"ghostfire",name:"幽火",type:"material",desc:"鬼火凝成的冷焰，触手不烫，却能镇住神魂。",price:22,color:"#55e2cf"},pill_heal:{id:"pill_heal",name:"回春丹",type:"pill",desc:"服下回复 45 点气血。行走江湖，必备之物。",price:30,color:"#d95a4c"},pill_chi:{id:"pill_chi",name:"凝神散",type:"pill",desc:"服下回复 55 点内力，让刀意重新流遍全身。",price:26,color:"#6aa7e8"},pill_speed:{id:"pill_speed",name:"清风散",type:"pill",desc:"10 秒内身法与出招速度提升，步伐如风。",price:36,color:"#8ed6a2"},pill_guard:{id:"pill_guard",name:"金刚散",type:"pill",desc:"8 秒内受到的伤害减半，气血如铁。",price:42,color:"#e3c073"},key:{id:"key",name:"残破佛钥",type:"key",desc:"守钥僧怀中的青铜钥匙。断崖佛门，只认此物。",color:"#c9a34f"},talisman:{id:"talisman",name:"幽火令",type:"key",desc:"从影狼群中夺回的黑色令牌，背面刻着两个字：无面。",color:"#b3382f"}},Ac=[{id:"pill_heal",price:30},{id:"pill_chi",price:26},{id:"pill_speed",price:36},{id:"pill_guard",price:42},{id:"herb",price:12},{id:"bloodsand",price:16}],Rc=[{out:"pill_heal",count:1,need:[["herb",2],["bloodsand",1]]},{out:"pill_chi",count:1,need:[["herb",1],["ghostfire",1]]},{out:"pill_speed",count:1,need:[["herb",3],["bone",1]]},{out:"pill_guard",count:1,need:[["bloodsand",2],["bone",2]]}];class d0{constructor(){R(this,"map",new Map)}count(t){return this.map.get(t)??0}add(t,e=1){this.map.set(t,this.count(t)+e)}remove(t,e=1){const i=this.count(t);return i<e?!1:(i===e?this.map.delete(t):this.map.set(t,i-e),!0)}has(t,e=1){return this.count(t)>=e}entries(){return["pill_heal","pill_chi","pill_speed","pill_guard","herb","bloodsand","bone","ghostfire","key","talisman"].filter(e=>this.count(e)>0).map(e=>[e,this.count(e)])}}const gi=Math.PI*2,Ln=(s,t,e)=>s<t?t:s>e?e:s;function Pe(s,t){return s+Math.random()*(t-s)}function u0(s,t){return Math.floor(Pe(s,t+1))}function Me(s,t,e,i){return Math.hypot(e-s,i-t)}function qe(s,t,e,i){return Math.atan2(i-t,e-s)}function is(s,t){let e=(s-t)%gi;return e>Math.PI&&(e-=gi),e<-Math.PI&&(e+=gi),e}function Ll(s,t,e){return s+is(t,s)*e}function f0(s){let t=s>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function p0(s,t,e){const i=e/32;s.save(),s.scale(i,i),s.imageSmoothingEnabled=!1;const n=(r,a,o,l,c)=>{s.fillStyle=c,s.fillRect(Math.round(r),Math.round(a),Math.round(o),Math.round(l))};switch(t){case"herb":{n(14,6,3,22,"#2f6b46"),n(8,10,7,3,"#4d9c63"),n(8,10,3,8,"#4d9c63"),n(18,14,7,3,"#66b878"),n(22,14,3,8,"#66b878"),n(12,24,7,4,"#8c5a3c"),n(10,28,12,3,"#6d4227");break}case"bloodsand":{n(9,14,14,13,"#5b2b2b"),n(7,12,18,4,"#7a3a34"),n(10,7,3,8,"#a33b36"),n(15,4,3,11,"#c2483f"),n(20,8,3,7,"#8f302e"),n(12,27,8,3,"#3d1c1c"),n(13,17,6,3,"#d95a4c");break}case"bone":{n(8,20,5,5,"#e6ddc4"),n(12,16,4,4,"#d8cfb4"),n(15,13,9,4,"#efe8d2"),n(22,10,5,5,"#e6ddc4"),n(6,22,3,3,"#c9bfa4");break}case"ghostfire":{n(13,8,6,16,"#2fc6b5"),n(10,13,4,10,"#2fc6b5"),n(18,12,4,11,"#2fc6b5"),n(14,5,4,8,"#8af7e6"),n(12,16,8,8,"#55e2cf"),n(14,12,4,6,"#d8fffa"),n(10,19,4,4,"#1d8b80"),n(18,19,4,4,"#1d8b80");break}case"pill_heal":{n(11,9,10,16,"#e8e2d2"),n(9,7,14,4,"#b7a98d"),n(12,13,8,10,"#c23c40"),n(13,14,3,3,"#f0a0a0"),n(12,23,8,3,"#8f2b2e");break}case"pill_chi":{n(11,9,10,16,"#dfe6ef"),n(9,7,14,4,"#8d9aae"),n(12,13,8,10,"#356fb8"),n(13,14,2,3,"#9cc6f2"),n(12,23,8,3,"#234c85");break}case"pill_speed":{n(6,12,12,4,"#3c8a5a"),n(10,8,12,4,"#4fa96d"),n(14,16,12,4,"#6fc98a"),n(20,12,5,3,"#2f6b46"),n(8,20,6,3,"#9ad9ad");break}case"pill_guard":{n(10,6,12,4,"#c8a24a"),n(8,10,16,12,"#9a7526"),n(11,12,10,8,"#e3c073"),n(14,14,4,4,"#6b4f16"),n(12,22,8,3,"#7d5d1d");break}case"key":{n(8,10,7,7,"#b08a3e"),n(10,12,3,3,"#1a1d24"),n(14,13,12,3,"#c9a34f"),n(22,16,3,5,"#c9a34f"),n(17,16,3,4,"#c9a34f");break}case"talisman":{n(12,5,9,22,"#25222a"),n(10,7,13,3,"#8f2b2e"),n(10,24,13,3,"#8f2b2e"),n(14,11,5,11,"#b3382f"),n(15,13,3,7,"#f0c05a");break}}s.restore()}const m0=window.__INK_ASSETS__??{};function fo(s,t){return m0[`${s}/${t}`]??`./assets/${s}/${t}.jpg`}const tr=[{key:"1",name:"裂空·一闪",cost:22,cd:6,desc:"瞬身突进，斩出一道裂空刀光。"},{key:"2",name:"回风·刃轮",cost:32,cd:9,desc:"旋身引刃，八道刀气环身回旋。"},{key:"3",name:"烬灭·斩",cost:45,cd:15,desc:"蓄势引爆刀意，焚尽周身之敌。"}];class g0{constructor(t,e){R(this,"root");R(this,"hooks");R(this,"titleEl");R(this,"hudEl");R(this,"panelEl");R(this,"dialogueEl");R(this,"deathEl");R(this,"victoryEl");R(this,"fadeEl");R(this,"promptEl");R(this,"toastEl");R(this,"bannerEl");R(this,"bossEl");R(this,"buffEl");R(this,"titleVisible",!0);R(this,"panelOpen",!1);R(this,"panelKind",null);R(this,"dialogueOpen",!1);R(this,"deadOpen",!1);R(this,"victoryOpen",!1);R(this,"dialogLines",[]);R(this,"dialogIndex",0);R(this,"dialogChars",0);R(this,"dialogDone",!1);R(this,"dialogTimer",null);R(this,"dialogOnDone",null);R(this,"dialogSpeakerEl");R(this,"dialogTextEl");R(this,"dialogPortraitEl");R(this,"snapshot",{money:0,counts:{}});R(this,"iconCache",new Map);R(this,"bannerTimer",null);this.root=t,this.hooks=e,this.build(),this.bind()}build(){this.root.innerHTML=`
      <div class="hud" id="hud">
        <div class="hud-tl">
          <div class="region-name" id="region-name">青石镇</div>
          <div class="objective"><span class="obj-mark"></span><span id="obj-text">……</span></div>
        </div>
        <div class="hud-tr">
          <div class="money"><span class="coin"></span><b id="money-val">0</b><span class="unit">文</span></div>
          <div class="hud-hint">Tab 行囊 · H 帮助 · M 静音</div>
        </div>

        <div class="boss-bar hidden" id="boss-bar">
          <div class="boss-top"><span class="boss-name">无面</span><span class="boss-phase" id="boss-phase">一相</span></div>
          <div class="boss-track"><div class="boss-fill" id="boss-fill"></div></div>
        </div>

        <div class="hud-bl">
          <div class="bars">
            <div class="bar hp"><div class="fill" id="hp-fill"></div><span class="bar-label">气血</span><span class="bar-num" id="hp-num">120/120</span></div>
            <div class="bar chi"><div class="fill" id="chi-fill"></div><span class="bar-label">内力</span><span class="bar-num" id="chi-num">100/100</span></div>
            <div class="bar st"><div class="fill" id="st-fill"></div><span class="bar-label">气力</span><span class="bar-num" id="st-num">100/100</span></div>
          </div>
          <div class="skills" id="skills"></div>
        </div>

        <div class="hud-br">
          <div class="quick" data-item="pill_heal">
            <span class="quick-key">Q</span><span class="quick-icon" data-icon="pill_heal"></span>
            <div class="quick-meta"><span class="quick-name">回春丹</span><span class="quick-count" id="quick-heal">0</span></div>
          </div>
          <div class="quick" data-item="pill_chi">
            <span class="quick-key">R</span><span class="quick-icon" data-icon="pill_chi"></span>
            <div class="quick-meta"><span class="quick-name">凝神散</span><span class="quick-count" id="quick-chi">0</span></div>
          </div>
        </div>

        <div class="buff-row" id="buff-row"></div>
        <div class="interact-prompt hidden" id="prompt"><span class="key">E</span><span id="prompt-text">交谈</span></div>
        <div class="toast-area" id="toast-area"></div>
        <div class="banner hidden" id="banner"><div class="banner-line"></div><div class="banner-title" id="banner-title"></div><div class="banner-sub" id="banner-sub"></div><div class="banner-line"></div></div>
      </div>

      <div class="dialogue hidden" id="dialogue">
        <div class="dlg-portrait" id="dlg-portrait"></div>
        <div class="dlg-body">
          <div class="dlg-speaker" id="dlg-speaker"></div>
          <div class="dlg-text" id="dlg-text"></div>
          <div class="dlg-hint"><span class="key">空格</span> 继续</div>
        </div>
      </div>

      <div class="panel-wrap hidden" id="panel-wrap">
        <div class="panel" id="panel"></div>
      </div>

      <div class="title-screen" id="title-screen">
        <div class="title-bg"></div>
        <div class="title-shade"></div>
        <div class="title-content">
          <div class="title-kicker">3D 低多边形 · 第一 / 第三人称可切换 · 动作冒险</div>
          <h1 class="game-title">烬影<span>·</span>墨刃</h1>
          <p class="title-sub">师父死了，凶手没有脸。<br />你带着他的刀，走进这场红雨。</p>
          <div class="title-buttons">
            <button class="btn primary" data-action="start">踏 入 江 湖</button>
            <button class="btn" data-action="title-help">操 作 说 明</button>
          </div>
          <div class="title-controls hidden" id="title-controls">
            <div><b>点击画面</b> 锁定视角 · <b>移动鼠标</b> 转动镜头</div>
            <div><b>WASD</b> 相对镜头移动</div>
            <div><b>鼠标左键 / J</b> 挥刀（朝镜头方向）</div>
            <div><b>1 2 3</b> 三段武学</div>
            <div><b>空格 / Shift</b> 翻滚闪避（有完美闪避判定）</div>
            <div><b>Q / R</b> 快速服丹</div>
            <div><b>E</b> 交谈 / 采集 / 开门</div>
            <div><b>Tab</b> 行囊 · <b>H</b> 帮助 · <b>Esc</b> 暂停</div>
          </div>
          <div class="title-foot">气质参考：黑神话：悟空 · 影之刃零　|　建议戴上耳机</div>
        </div>
      </div>

      <div class="end-screen hidden" id="death-screen">
        <div class="end-inner">
          <div class="end-kicker">刀 折 · 人 亡</div>
          <h2 class="end-title">红雨又落了一场</h2>
          <p class="end-sub">你在青石镇的灯下醒来。伤还在，路也还在。</p>
          <div class="end-buttons">
            <button class="btn primary" data-action="respawn">在青石镇醒来</button>
            <button class="btn" data-action="title">回到标题</button>
          </div>
        </div>
      </div>

      <div class="end-screen victory-screen hidden" id="victory-screen">
        <div class="end-inner">
          <div class="end-kicker">第 一 章 · 烬</div>
          <h2 class="end-title">红雨停了</h2>
          <div class="ending-lines" id="ending-lines"></div>
          <div class="end-stats" id="end-stats"></div>
          <div class="end-buttons">
            <button class="btn primary" data-action="restart">再 战 一 场</button>
            <button class="btn" data-action="title">回到标题</button>
          </div>
        </div>
      </div>

      <div class="fade" id="fade"></div>
    `;const t=e=>this.root.querySelector(e);this.titleEl=t("#title-screen"),this.hudEl=t("#hud"),this.panelEl=t("#panel"),this.dialogueEl=t("#dialogue"),this.deathEl=t("#death-screen"),this.victoryEl=t("#victory-screen"),this.fadeEl=t("#fade"),this.promptEl=t("#prompt"),this.toastEl=t("#toast-area"),this.bannerEl=t("#banner"),this.bossEl=t("#boss-bar"),this.buffEl=t("#buff-row"),this.dialogSpeakerEl=t("#dlg-speaker"),this.dialogTextEl=t("#dlg-text"),this.dialogPortraitEl=t("#dlg-portrait"),this.buildSkills(),this.hudEl.classList.add("hidden")}buildSkills(){const t=this.root.querySelector("#skills");t.innerHTML=tr.map((e,i)=>`
        <div class="skill" data-skill="${i}">
          <span class="skill-key">${e.key}</span>
          <span class="skill-glyph">${["裂","回","烬"][i]}</span>
          <span class="skill-name">${e.name.split("·")[1]??e.name}</span>
          <div class="cd-mask" id="cd-${i}"></div>
          <div class="cd-num" id="cdnum-${i}"></div>
        </div>`).join("")+`<div class="skill dodge">
         <span class="skill-key">空格</span>
         <span class="skill-glyph">闪</span>
         <span class="skill-name">翻滚</span>
         <div class="cd-mask" id="cd-dodge"></div>
       </div>`}bind(){window.addEventListener("keydown",t=>{this.dialogueOpen&&(t.code==="Space"||t.code==="KeyE"||t.code==="Enter")&&(t.preventDefault(),t.stopPropagation(),this.advanceDialog())}),this.root.addEventListener("click",t=>{const i=t.target.closest("[data-action]");if(!i)return;const n=i.dataset.action;n&&(n==="start"?(this.titleVisible=!1,this.titleEl.classList.add("hidden"),this.hudEl.classList.remove("hidden"),this.hooks.onStart()):n==="title-help"?this.root.querySelector("#title-controls")?.classList.toggle("hidden"):n==="respawn"?(this.deadOpen=!1,this.deathEl.classList.add("hidden"),this.hooks.onRespawn()):n==="restart"?(this.victoryOpen=!1,this.victoryEl.classList.add("hidden"),this.hooks.onRestart()):n==="title"?(this.deadOpen=!1,this.victoryOpen=!1,this.deathEl.classList.add("hidden"),this.victoryEl.classList.add("hidden"),this.hooks.onTitle()):n==="resume"?(this.closePanel(),this.hooks.onResume()):n==="close"?(this.closePanel(),this.hooks.onClosePanel()):n==="tab"?this.renderPanel(i.dataset.tab==="craft"?"craft":"buy"):n==="use"?this.hooks.onUseItem(i.dataset.id):n==="buy"?this.hooks.onBuy(i.dataset.id):n==="craft"&&this.hooks.onCraft(Number(i.dataset.index)))})}isOpen(){return this.dialogueOpen||this.panelOpen||this.titleVisible||this.deadOpen||this.victoryOpen}isDialogueOpen(){return this.dialogueOpen}isPanelOpen(){return this.panelOpen}showTitle(){this.titleVisible=!0,this.titleEl.classList.remove("hidden"),this.hudEl.classList.add("hidden"),this.dialogueEl.classList.add("hidden"),this.panelEl.parentElement?.classList.add("hidden"),this.deathEl.classList.add("hidden"),this.victoryEl.classList.add("hidden"),this.bossEl.classList.add("hidden")}setRegion(t){const e=this.root.querySelector("#region-name");e.textContent=t}setObjective(t){const e=this.root.querySelector("#obj-text");e.textContent=t}setVitals(t){const e=Math.max(0,t.hp/t.maxHp);this.root.querySelector("#hp-fill").style.width=`${e*100}%`,this.root.querySelector("#chi-fill").style.width=`${t.chi/t.maxChi*100}%`,this.root.querySelector("#st-fill").style.width=`${t.stamina/t.maxStamina*100}%`,this.root.querySelector("#hp-num").textContent=`${Math.ceil(t.hp)}/${t.maxHp}`,this.root.querySelector("#chi-num").textContent=`${Math.floor(t.chi)}/${t.maxChi}`,this.root.querySelector("#st-num").textContent=`${Math.floor(t.stamina)}/${t.maxStamina}`,this.root.querySelector(".bar.hp")?.classList.toggle("low",e<.3)}setMoney(t){const e=this.root.querySelector("#money-val");e&&(e.textContent=String(t))}updateSkills(t,e,i){for(let r=0;r<3;r++){const a=this.root.querySelector(`#cd-${r}`),o=this.root.querySelector(`#cdnum-${r}`),l=this.root.querySelector(`[data-skill="${r}"]`);if(!a||!o||!l)continue;const c=Math.min(1,t[r]/tr[r].cd);a.style.height=`${c*100}%`,o.textContent=t[r]>.1?t[r].toFixed(1):"",l.classList.toggle("unaffordable",e<tr[r].cost)}const n=this.root.querySelector("#cd-dodge");n&&(n.style.height=`${Math.min(1,i/.45)*100}%`)}updateQuick(t,e){const i=this.root.querySelector("#quick-heal"),n=this.root.querySelector("#quick-chi");i&&(i.textContent=String(t)),n&&(n.textContent=String(e)),this.setQuickIcon("pill_heal"),this.setQuickIcon("pill_chi")}setQuickIcon(t){const e=this.root.querySelector(`[data-icon="${t}"]`);e&&(e.dataset.filled||(e.style.backgroundImage=`url(${this.icon(t)})`,e.dataset.filled="1"))}setPrompt(t){if(!t)this.promptEl.classList.add("hidden");else{this.promptEl.classList.remove("hidden");const e=this.root.querySelector("#prompt-text");e&&(e.textContent=t)}}setBuffs(t){const e=[];t.crit>0&&e.push(`<span class="buff crit">刀意·破 ${t.crit.toFixed(1)}s</span>`),t.speed>0&&e.push(`<span class="buff speed">清风 ${t.speed.toFixed(1)}s</span>`),t.guard>0&&e.push(`<span class="buff guard">金刚 ${t.guard.toFixed(1)}s</span>`),this.buffEl.innerHTML=e.join("")}showBoss(t,e,i,n){this.bossEl.classList.remove("hidden");const r=this.bossEl.querySelector(".boss-name");r&&(r.textContent=t),this.root.querySelector("#boss-fill").style.width=`${Math.max(0,e/i*100)}%`;const a=this.root.querySelector("#boss-phase");a&&(a.textContent=n===1?"一相":n===2?"二相":"三相")}hideBoss(){this.bossEl.classList.add("hidden")}toast(t){const e=document.createElement("div");e.className="toast",e.textContent=t,this.toastEl.appendChild(e),requestAnimationFrame(()=>e.classList.add("show")),setTimeout(()=>{e.classList.remove("show"),setTimeout(()=>e.remove(),300)},2400)}banner(t,e=""){const i=this.root.querySelector("#banner-title"),n=this.root.querySelector("#banner-sub");i&&(i.textContent=t),n&&(n.textContent=e),this.bannerEl.classList.remove("hidden"),this.bannerEl.classList.add("show"),this.bannerTimer&&window.clearTimeout(this.bannerTimer),this.bannerTimer=window.setTimeout(()=>{this.bannerEl.classList.remove("show"),this.bannerEl.classList.add("hidden")},2400)}showDialogue(t,e){this.dialogLines=t,this.dialogIndex=0,this.dialogDone=!1,this.dialogOnDone=e,this.dialogueOpen=!0,this.dialogueEl.classList.remove("hidden"),this.setPrompt(null),this.renderDialogLine()}renderDialogLine(){const t=this.dialogLines[this.dialogIndex];t&&(this.dialogSpeakerEl.textContent=t.speaker,this.dialogTextEl.textContent="",this.dialogPortraitEl.className="dlg-portrait",this.dialogPortraitEl.style.backgroundImage=t.portrait?`url(${fo("art",t.portrait)})`:"",t.portrait&&this.dialogPortraitEl.classList.add("has-art"),this.dialogChars=0,this.dialogDone=!1,this.dialogTimer&&window.clearInterval(this.dialogTimer),this.dialogTimer=window.setInterval(()=>{this.dialogChars+=1,this.dialogTextEl.textContent=t.text.slice(0,this.dialogChars),this.dialogChars>=t.text.length&&(this.dialogTimer&&window.clearInterval(this.dialogTimer),this.dialogTimer=null,this.dialogDone=!0)},26))}advanceDialog(){if(this.dialogueOpen){if(!this.dialogDone){const t=this.dialogLines[this.dialogIndex];this.dialogTextEl.textContent=t.text,this.dialogChars=t.text.length,this.dialogDone=!0,this.dialogTimer&&window.clearInterval(this.dialogTimer),this.dialogTimer=null;return}if(this.dialogIndex+=1,this.dialogIndex>=this.dialogLines.length){this.finishDialog();return}this.renderDialogLine()}}finishDialog(){if(!this.dialogueOpen)return;this.dialogueOpen=!1,this.dialogueEl.classList.add("hidden"),this.dialogTimer&&window.clearInterval(this.dialogTimer),this.dialogTimer=null,this.hooks.onDialogueEnd?.();const t=this.dialogOnDone;this.dialogOnDone=null,t&&t()}openInventory(t){this.snapshot=t,this.panelOpen=!0,this.panelKind="inventory",this.panelEl.parentElement?.classList.remove("hidden"),this.renderInventory()}openShop(t,e){this.snapshot=t,this.panelOpen=!0,this.panelKind="shop",this.panelEl.parentElement?.classList.remove("hidden"),this.panelEl.classList.add("shop-panel"),this.renderPanel("buy")}refreshPanel(t){if(this.snapshot=t,!!this.panelOpen){if(this.panelKind==="inventory")this.renderInventory();else if(this.panelKind==="shop"){const e=this.panelEl.querySelector(".tab.active");this.renderPanel(e?.dataset.tab==="craft"?"craft":"buy")}}}refreshShop(t){this.refreshPanel(t)}openHelp(){this.panelOpen=!0,this.panelKind="help",this.panelEl.parentElement?.classList.remove("hidden"),this.panelEl.classList.remove("shop-panel"),this.panelEl.innerHTML=`
      <div class="panel-head"><div class="panel-title">刀谱 · 操作</div><button class="close-btn" data-action="close">×</button></div>
      <div class="help-grid">
        <div><span class="key">点击画面</span> 锁定视角，移动鼠标转动镜头；O 键切换第一 / 第三人称</div>
        <div><span class="key">W A S D</span> 相对镜头移动</div>
        <div><span class="key">鼠标左键 / J</span> 三段普攻（朝镜头方向）</div>
        <div><span class="key">1</span> 裂空·一闪：突进斩，突进期间无敌</div>
        <div><span class="key">2</span> 回风·刃轮：环身刀气，持续伤害</div>
        <div><span class="key">3</span> 烬灭·斩：蓄力后大范围爆发</div>
        <div><span class="key">空格 / Shift</span> 翻滚闪避，消耗气力</div>
        <div><span class="key">完美闪避</span> 在受击前 0.16 秒内翻滚：触发时缓、回内力气力、获得「刀意·破」增伤</div>
        <div><span class="key">Q / R</span> 快速服用回春丹 / 凝神散</div>
        <div><span class="key">E</span> 交谈、采集、开箱、过门</div>
        <div><span class="key">Tab</span> 行囊　<span class="key">H</span> 帮助　<span class="key">Esc</span> 暂停</div>
      </div>
      <div class="panel-hint">药材来自野外采集与敌人掉落；在药铺可购买与炼制。</div>
      <div class="panel-foot"><button class="btn small" data-action="close">关 闭</button></div>
    `}openPause(){this.panelOpen=!0,this.panelKind="pause",this.panelEl.parentElement?.classList.remove("hidden"),this.panelEl.classList.remove("shop-panel"),this.panelEl.innerHTML=`
      <div class="panel-head"><div class="panel-title">暂 停</div><button class="close-btn" data-action="resume">×</button></div>
      <div class="pause-body">
        <p>红雨未停，刀锋未冷。</p>
        <div class="pause-keys">
          <span><b>Tab</b> 行囊</span><span><b>H</b> 刀谱</span><span><b>M</b> 静音</span>
        </div>
      </div>
      <div class="panel-foot">
        <button class="btn primary small" data-action="resume">继 续</button>
        <button class="btn small" data-action="title">回到标题</button>
      </div>
    `}closePanel(){this.panelOpen=!1,this.panelKind=null,this.panelEl.parentElement?.classList.add("hidden"),this.panelEl.classList.remove("shop-panel")}icon(t){let e=this.iconCache.get(t);if(e)return e;const i=document.createElement("canvas");i.width=48,i.height=48;const n=i.getContext("2d");return p0(n,t,48),e=i.toDataURL(),this.iconCache.set(t,e),e}renderInventory(){const t=this.snapshot.counts,i=Object.keys(Xe).filter(n=>(t[n]??0)>0).map(n=>{const r=Xe[n],a=t[n]??0,o=r.type==="pill";return`
        <div class="item-card ${r.type}">
          <div class="item-icon" style="background-image:url(${this.icon(n)})"></div>
          <div class="item-main">
            <div class="item-name">${r.name}<span class="item-count">×${a}</span></div>
            <div class="item-desc">${r.desc}</div>
          </div>
          ${o?`<button class="btn tiny" data-action="use" data-id="${n}">服用</button>`:`<div class="item-tag">${r.type==="key"?"信物":"材料"}</div>`}
        </div>`}).join("");this.panelEl.classList.remove("shop-panel"),this.panelEl.innerHTML=`
      <div class="panel-head">
        <div class="panel-title">行 囊</div>
        <button class="close-btn" data-action="close">×</button>
      </div>
      <div class="panel-meta">铜钱 <b>${this.snapshot.money}</b> 文 · 战斗中可按 Q / R 快速服丹</div>
      <div class="item-grid">
        ${i||'<div class="empty">行囊空空，去野外采些药材吧。</div>'}
      </div>
      <div class="panel-foot"><span class="panel-hint">Tab / Esc 关闭</span></div>
    `}renderPanel(t){const e=this.snapshot.counts,i=this.snapshot.money,n=`
      <div class="tabs">
        <button class="tab ${t==="buy"?"active":""}" data-action="tab" data-tab="buy">购 买</button>
        <button class="tab ${t==="craft"?"active":""}" data-action="tab" data-tab="craft">炼 制</button>
      </div>`;let r="";t==="buy"?r=Ac.map(a=>{const o=Xe[a.id],l=i>=a.price;return`
          <div class="shop-row">
            <div class="item-icon" style="background-image:url(${this.icon(a.id)})"></div>
            <div class="shop-main">
              <div class="shop-name">${o.name}<span class="own">持有 ${e[a.id]??0}</span></div>
              <div class="shop-desc">${o.desc}</div>
            </div>
            <button class="btn tiny ${l?"":"disabled"}" ${l?"":"disabled"} data-action="buy" data-id="${a.id}">
              <span class="price">${a.price}</span> 文
            </button>
          </div>`}).join(""):r=Rc.map((a,o)=>{const l=Xe[a.out],c=a.need.every(([d,u])=>(e[d]??0)>=u),h=a.need.map(([d,u])=>{const f=e[d]??0;return`<span class="need ${f>=u?"ok":"lack"}">${Xe[d].name} ${f}/${u}</span>`}).join('<span class="sep">·</span>');return`
          <div class="shop-row">
            <div class="item-icon" style="background-image:url(${this.icon(a.out)})"></div>
            <div class="shop-main">
              <div class="shop-name">${l.name}<span class="own">持有 ${e[a.out]??0}</span></div>
              <div class="need-row">${h}</div>
              <div class="shop-desc">${l.desc}</div>
            </div>
            <button class="btn tiny ${c?"":"disabled"}" ${c?"":"disabled"} data-action="craft" data-index="${o}">炼 制</button>
          </div>`}).join(""),this.panelEl.innerHTML=`
      <div class="panel-head">
        <div class="panel-title">葛九药铺</div>
        <div class="panel-money">铜钱 <b>${i}</b> 文</div>
        <button class="close-btn" data-action="close">×</button>
      </div>
      ${n}
      <div class="shop-list">${r}</div>
      <div class="panel-foot"><span class="panel-hint">Esc 离开药铺 · 药材来自野外采集与敌人掉落</span></div>
    `}showDeath(){this.deadOpen=!0,this.deathEl.classList.remove("hidden")}showVictory(t,e){this.victoryOpen=!0,this.hudEl.classList.add("hidden"),this.bossEl.classList.add("hidden");const i=this.root.querySelector("#ending-lines");i.innerHTML=e.map((r,a)=>`<p style="animation-delay:${a*.5+.2}s">${r}</p>`).join("");const n=this.root.querySelector("#end-stats");n.innerHTML=`<span>历时 ${t.time}</span><span>斩敌 ${t.kills}</span><span>余财 ${t.money} 文</span>`,this.victoryEl.classList.remove("hidden")}hideDeath(){this.deadOpen=!1,this.deathEl.classList.add("hidden")}showHUD(){this.hudEl.classList.remove("hidden")}fade(t){this.fadeEl.classList.add("on"),window.setTimeout(()=>{t(),window.setTimeout(()=>this.fadeEl.classList.remove("on"),80)},260)}hideVictory(){this.victoryOpen=!1,this.victoryEl.classList.add("hidden")}}function kn(s,t,e,i,n,r,a={}){const o=f0(s),l=[],c=a.margin??90;let h=0;for(;l.length<t&&h<t*40;){h++;const d=c+o()*(e-c*2),u=c+o()*(i-c*2);if(r.some(_=>Math.hypot(_.x-d,_.y-u)<_.r)||l.some(_=>Math.hypot(_.x-d,_.y-u)<58))continue;const f=n[Math.floor(o()*n.length)];l.push({x:d,y:u,kind:f,solid:a.solid??!0,scale:(a.scaleMin??.9)+o()*((a.scaleMax??1.3)-(a.scaleMin??.9)),w:a.wRange?a.wRange[0]+o()*(a.wRange[1]-a.wRange[0]):void 0,h:a.hRange?a.hRange[0]+o()*(a.hRange[1]-a.hRange[0]):void 0,variant:Math.floor(o()*4)})}return l}const Dl=[{id:"storyteller",name:"说书人·柳三弦",role:"酒楼檐下",x:880,y:640,color:"#7b6ea8"},{id:"merchant",name:"药铺掌柜·葛九",role:"药铺",x:620,y:820,portrait:"merchant",color:"#3f7a58"},{id:"blacksmith",name:"铁匠·陈铁山",role:"铁匠铺",x:1340,y:780,color:"#8a5a3b"},{id:"guard",name:"守门人·老秦",role:"东门",x:1780,y:820,color:"#5d6b78"}];function _0(){const e=[{x:420,y:330,kind:"house",solid:!0,w:300,h:176,variant:0},{x:880,y:300,kind:"house",solid:!0,w:260,h:156,variant:1},{x:1340,y:320,kind:"house",solid:!0,w:300,h:176,variant:2},{x:1740,y:360,kind:"house",solid:!0,w:250,h:146,variant:3},{x:640,y:700,kind:"stall",solid:!0,w:150,h:70},{x:1380,y:690,kind:"stall",solid:!0,w:130,h:62},{x:1080,y:830,kind:"well",solid:!0,w:66,h:46},{x:1990,y:800,kind:"gate",solid:!1,w:150,h:40},{x:500,y:800,kind:"lantern",solid:!0,w:14,h:10},{x:760,y:780,kind:"lantern",solid:!0,w:14,h:10},{x:1220,y:800,kind:"lantern",solid:!0,w:14,h:10},{x:1560,y:800,kind:"lantern",solid:!0,w:14,h:10},{x:1900,y:830,kind:"lantern",solid:!0,w:14,h:10},{x:980,y:600,kind:"banner",solid:!1,w:20,h:56},{x:380,y:620,kind:"banner",solid:!1,w:20,h:56},{x:1600,y:640,kind:"banner",solid:!1,w:20,h:56},{x:1100,y:1030,kind:"bones",solid:!1,variant:1}],i=[{x:1060,y:1020,r:120},{x:1990,y:800,r:180},...Dl.map(r=>({x:r.x,y:r.y,r:100})),...e.map(r=>({x:r.x,y:r.y,r:Math.max(60,(r.w??40)/2+24)}))],n=kn(11,44,2100,1500,["tree","bamboo","rock","grass"],i,{solid:!0,scaleMin:.85,scaleMax:1.35,margin:60}).map(r=>({...r,solid:r.kind!=="grass"}));return{id:"town",name:"青石镇",w:2100,h:1500,ground:"town",dark:.5,tint:"rgba(60,80,96,0.10)",portals:[{x:1990,y:800,to:"forest",tx:220,ty:850,label:"枯木林",hint:"东门之外，便是枯木林。"}],npcs:Dl,props:[...e,...n],spawns:[],nodes:[],chests:[{id:"town_chest",x:300,y:1120,money:40,item:"herb",count:2}],spawn:{x:1060,y:1020}}}function x0(){const e=[{x:120,y:850,kind:"gate",solid:!1,w:130,h:36},{x:2280,y:800,kind:"gate",solid:!1,w:130,h:36},{x:420,y:850,kind:"torch",solid:!0,w:12,h:10},{x:820,y:820,kind:"torch",solid:!0,w:12,h:10},{x:1260,y:800,kind:"torch",solid:!0,w:12,h:10},{x:1700,y:800,kind:"torch",solid:!0,w:12,h:10},{x:2120,y:810,kind:"torch",solid:!0,w:12,h:10},{x:1500,y:1260,kind:"bones",solid:!1,variant:0},{x:900,y:480,kind:"bones",solid:!1,variant:2},{x:1900,y:1180,kind:"bones",solid:!1,variant:3}],i=[{x:220,y:850,r:160},{x:2280,y:800,r:160},{x:620,y:560,r:120},{x:1180,y:1120,r:120},{x:1760,y:520,r:120},{x:1960,y:1180,r:120}],n=kn(23,62,2400,1700,["tree","deadwood","bamboo","rock"],i,{solid:!0,scaleMin:.9,scaleMax:1.5,margin:50}),r=kn(24,52,2400,1700,["grass"],i,{solid:!1,scaleMin:.7,scaleMax:1.3,margin:30});return{id:"forest",name:"枯木林",w:2400,h:1700,ground:"forest",dark:.64,tint:"rgba(36,86,66,0.10)",portals:[{x:120,y:850,to:"town",tx:1900,ty:800,label:"青石镇"},{x:2280,y:800,to:"temple",tx:220,ty:860,label:"荒寺",need:"forest_cleared",hint:"林间煞气未散，影狼还在盯着你。先斩尽六头影狼。"}],npcs:[],props:[...e,...n,...r],spawns:[{kind:"wolf",x:620,y:560,count:2,radius:160,respawn:!0},{kind:"wolf",x:1180,y:1120,count:2,radius:190,respawn:!0},{kind:"wolf",x:1760,y:520,count:2,radius:180,respawn:!0},{kind:"ghost",x:1960,y:1180,count:2,radius:150,respawn:!0}],nodes:[{id:"f_herb1",x:480,y:1180,item:"herb",count:1},{id:"f_herb2",x:1020,y:420,item:"herb",count:1},{id:"f_herb3",x:1420,y:1080,item:"herb",count:1},{id:"f_herb4",x:2020,y:460,item:"herb",count:1},{id:"f_herb5",x:860,y:1380,item:"herb",count:1},{id:"f_herb6",x:1780,y:1400,item:"herb",count:1}],chests:[{id:"forest_chest",x:2160,y:1420,money:60,item:"bloodsand",count:2}],spawn:{x:220,y:850}}}function v0(){const e=[{x:120,y:860,kind:"gate",solid:!1,w:130,h:36},{x:2080,y:700,kind:"gate",solid:!1,w:150,h:40},{x:1080,y:780,kind:"shrine",solid:!0,w:56,h:38},{x:1080,y:360,kind:"statue",solid:!0,w:54,h:38},{x:620,y:380,kind:"pillar",solid:!0,w:30,h:26},{x:900,y:380,kind:"pillar",solid:!0,w:30,h:26},{x:1260,y:380,kind:"pillar",solid:!0,w:30,h:26},{x:1540,y:380,kind:"pillar",solid:!0,w:30,h:26},{x:620,y:1120,kind:"pillar",solid:!0,w:30,h:26},{x:900,y:1120,kind:"pillar",solid:!0,w:30,h:26},{x:1260,y:1120,kind:"pillar",solid:!0,w:30,h:26},{x:1540,y:1120,kind:"pillar",solid:!0,w:30,h:26},{x:780,y:760,kind:"brazier",solid:!0,w:34,h:24},{x:1380,y:760,kind:"brazier",solid:!0,w:34,h:24},{x:1080,y:1e3,kind:"censer",solid:!0,w:40,h:28},{x:420,y:600,kind:"banner",solid:!1,w:22,h:60},{x:1760,y:600,kind:"banner",solid:!1,w:22,h:60},{x:1850,y:900,kind:"banner",solid:!1,w:22,h:60},{x:1620,y:470,kind:"banner",solid:!1,w:22,h:60}],i=[{x:220,y:860,r:150},{x:2080,y:700,r:170},{x:1080,y:780,r:150},{x:1780,y:720,r:160},{x:1080,y:360,r:120},...e.map(a=>({x:a.x,y:a.y,r:Math.max(50,(a.w??30)/2+18)}))],n=kn(31,26,2200,1500,["rock","deadwood","bones"],i,{solid:!0,scaleMin:.8,scaleMax:1.3,margin:80}),r=kn(32,24,2200,1500,["grass"],i,{solid:!1,margin:40});return{id:"temple",name:"荒寺",w:2200,h:1500,ground:"temple",dark:.6,tint:"rgba(50,86,110,0.10)",portals:[{x:120,y:860,to:"forest",tx:2180,ty:800,label:"枯木林"},{x:2080,y:700,to:"cliff",tx:240,ty:1160,label:"断崖",need:"key",hint:"佛门紧闭，门上的凹槽像是一枚钥匙的形状。"}],npcs:[],props:[...e,...n,...r],spawns:[{kind:"monk",x:780,y:520,count:1,radius:80,respawn:!0},{kind:"monk",x:1500,y:1050,count:1,radius:100,respawn:!0},{kind:"ghost",x:1850,y:460,count:1,radius:100,respawn:!0},{kind:"ghost",x:620,y:1280,count:1,radius:100,respawn:!0},{kind:"monk",x:1780,y:720,count:1,radius:0,elite:!0,name:"守钥僧",key:"key",respawn:!1}],nodes:[{id:"t_herb1",x:500,y:980,item:"herb",count:1},{id:"t_herb2",x:1620,y:1320,item:"herb",count:1},{id:"t_ghost1",x:1850,y:1150,item:"ghostfire",count:1},{id:"t_ghost2",x:320,y:420,item:"ghostfire",count:1}],chests:[{id:"temple_chest",x:1980,y:1320,money:80,item:"ghostfire",count:2}],shrine:{x:1080,y:780},spawn:{x:220,y:860}}}function M0(){const e=[{x:120,y:1160,kind:"gate",solid:!1,w:130,h:36},{x:440,y:1160,kind:"shrine",solid:!0,w:56,h:38},{x:780,y:980,kind:"brazier",solid:!0,w:34,h:24},{x:1520,y:980,kind:"brazier",solid:!0,w:34,h:24},{x:700,y:420,kind:"brazier",solid:!0,w:34,h:24},{x:1600,y:420,kind:"brazier",solid:!0,w:34,h:24},{x:1160,y:240,kind:"statue",solid:!0,w:54,h:38},{x:300,y:500,kind:"rock",solid:!0,scale:1.6},{x:1680,y:700,kind:"rock",solid:!0,scale:1.5},{x:980,y:1240,kind:"bones",solid:!1,variant:0},{x:1400,y:700,kind:"bones",solid:!1,variant:1},{x:520,y:700,kind:"deadwood",solid:!0,scale:1.3}],i=[{x:240,y:1160,r:150},{x:440,y:1160,r:120},{x:1150,y:650,r:260},...e.map(r=>({x:r.x,y:r.y,r:Math.max(50,(r.w??40)/2+16)}))],n=kn(41,24,1900,1400,["rock","deadwood","bones"],i,{solid:!0,scaleMin:.8,scaleMax:1.4,margin:90});return{id:"cliff",name:"断崖",w:1900,h:1400,ground:"cliff",dark:.66,tint:"rgba(120,36,30,0.12)",portals:[{x:120,y:1160,to:"temple",tx:1980,ty:720,label:"荒寺"}],npcs:[],props:[...e,...n],spawns:[],nodes:[],chests:[],shrine:{x:440,y:1160},spawn:{x:240,y:1160},boss:{x:1150,y:650,triggerX:700}}}const y0={town:_0,forest:x0,temple:v0,cliff:M0};function Il(s){return y0[s]()}function S0(s,t){return s==="storyteller"?t.has("story")?t.has("key")?t.has("boss_dead")?{action:"story",lines:[{speaker:"说书人·柳三弦",text:"红雨停了。你听，镇外的风都轻了。"},{speaker:"说书人·柳三弦",text:"可你回来后，一句话也没说。……罢了，酒还温着。"}]}:{action:"story",lines:[{speaker:"说书人·柳三弦",text:"佛钥到手了？崖上风大，别让刀冻住。"},{speaker:"说书人·柳三弦",text:"无面没有脸。记住这句话——见着他时，用得上。"}]}:{action:"story",lines:[{speaker:"说书人·柳三弦",text:"枯木林的狼嚎昨夜又密了些。它们闻得见你身上的恨。"},{speaker:"说书人·柳三弦",text:"斩够六头，剩下的自会退。狼这东西，最识得强弱。"}]}:{action:"story",lines:[{speaker:"说书人·柳三弦",text:"客官这把刀……杀气太重。坐，听我讲段旧事。"},{speaker:"说书人·柳三弦",text:"三日前，断崖古寺的方向下了一场红雨。那夜之后，烬门便只剩你一人。"},{speaker:"说书人·柳三弦",text:"凶手自称「无面」。他要的不是命，是你师父护着的那盏灯。"},{speaker:"说书人·柳三弦",text:"去荒寺吧。佛钥在守钥僧手中，断崖的门只认那枚钥匙。"},{speaker:"说书人·柳三弦",text:"出镇往东，是枯木林。林中影狼被煞气养得凶，先清出条路来。"}]}:s==="merchant"?t.has("supplies")?t.has("key")?{action:"merchant",lines:[{speaker:"药铺掌柜·葛九",text:"佛钥都拿到了，还来买药？……好，好。多带两枚回春丹吧。"}]}:{action:"merchant",lines:[{speaker:"药铺掌柜·葛九",text:"又来了？血砂带够没有？炼丹讲究火候，也讲究舍得。"}]}:{action:"merchant",lines:[{speaker:"药铺掌柜·葛九",text:"哟，烬门的刀客。脸色比纸还白，坐下让我瞧瞧。"},{speaker:"药铺掌柜·葛九",text:"这三枚回春丹拿去，算老夫给故人上的一炷香。"},{speaker:"药铺掌柜·葛九",text:"要买要炼，只管开口。青灵草、血砂，林子和古寺里都有。"},{speaker:"药铺掌柜·葛九",text:"记住：丹能回春，回不了命。别把命全押在药上。"}]}:s==="blacksmith"?t.has("forge")?{action:"forge",lines:[{speaker:"铁匠·陈铁山",text:"刀口卷了？拿来。……算了，你师父的刀，我修不好，只能你自己养。"},{speaker:"铁匠·陈铁山",text:"兽骨配血砂，金刚散。记住了。"}]}:{action:"forge",lines:[{speaker:"铁匠·陈铁山",text:"你师父的刀……我打的。刀还在，人没了。"},{speaker:"铁匠·陈铁山",text:"这几块兽骨拿去。配血砂能炼金刚散，挨打时比什么都实在。"},{speaker:"铁匠·陈铁山",text:"别急着送死。刀要养，人也要养。"}]}:{action:"guard",lines:[{speaker:"守门人·老秦",text:"东门外就是枯木林。这几日狼嚎整夜不停，镇里没人敢走。"},{speaker:"守门人·老秦",text:"真要过林，先斩够六头影狼。剩下的才不敢跟着你。"},{speaker:"守门人·老秦",text:"过了林是荒寺。寺里有灯，也有不干净的东西。"}]}}const b0=[{speaker:"无面",portrait:"boss",text:"你终于来了。"},{speaker:"无面",portrait:"boss",text:"你师父临死前，也是这么看着我的。"},{speaker:"无面",portrait:"boss",text:"想知道面具下面是谁？——赢我。"}],E0=["面具碎了。","底下是一张与你一模一样的脸。","他笑了，像你小时候照镜子。","红雨停了。断崖上只剩一把刀，和一盏未熄的灯。"],at=1/32,w0=(()=>{let s=null;return()=>{if(s)return s;const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d"),i=e.createRadialGradient(32,32,0,32,32,32);return i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.35,"rgba(255,255,255,0.55)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.fillRect(0,0,64,64),s=new no(t),s.colorSpace=Ie,s.userData.shared=!0,s}})();function tt(s,t={}){return new ao({color:s,roughness:t.rough??.86,metalness:t.metal??.04,flatShading:t.flat??!0,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??1,transparent:t.transparent??!1,opacity:t.opacity??1,side:t.side??Yi})}function fe(s,t=1,e=1){const i=new ls({map:w0(),color:s,blending:He,transparent:!0,depthWrite:!1,opacity:e}),n=new qi(i);return n.scale.setScalar(t),n}function At(s,t,e,i,n=0,r=0,a=0){const o=new Mt(new Zi(s,t,e),i);return o.position.set(n,r,a),o}function ne(s,t,e,i,n=7,r=0,a=0,o=0){const l=new Mt(new Ji(s,t,e,n),i);return l.position.set(r,a,o),l}function Vn(s,t=.34){const e=new Mt(new so(s,20),new oe({color:0,transparent:!0,opacity:t,depthWrite:!1}));return e.rotation.x=-Math.PI/2,e.position.y=.02,e}function T0(){const s=new Ht;s.add(Vn(.55));const t=new Ht;s.add(t);const e=new Ba(10470655,7,7,2);e.position.set(-1.1,2.1,.4),s.add(e);const i=tt("#252b38"),n=tt("#323a4c"),r=tt("#9c3039",{rough:.7}),a=tt("#d8b28c",{rough:.8}),o=tt("#181b23"),l=tt("#dce6f2",{metal:.75,rough:.3,flat:!1}),c=new Ht;c.position.set(0,.8,.14),c.add(At(.17,.74,.19,o,0,-.37,0));const h=new Ht;h.position.set(0,.8,-.14),h.add(At(.17,.74,.19,o,0,-.37,0)),t.add(c,h);const d=new Ht;d.position.y=.8;const u=ne(.2,.31,.7,n,6,0,.35,0);d.add(u),d.add(At(.42,.1,.34,r,0,.1,0)),d.add(At(.54,.13,.4,i,0,.68,0)),d.add(At(.1,.5,.08,r,-.02,.7,.22)),t.add(d);const f=new Mt(new wi(.62,.92,1,1),tt("#1d212b",{side:pe,rough:.95}));f.position.set(-.3,1.02,0),f.rotation.y=Math.PI/2,f.rotation.z=.08,t.add(f);const _=new Ht;_.position.y=1.56;const y=new Mt(new je(.175,8,7),a);_.add(y),_.add(At(.03,.05,.2,tt("#14161b"),.12,.04,0));const m=new Ht,p=new Mt(new Ji(.36,.4,.06,10),tt("#3a382f",{rough:1}));p.position.y=.13;const M=new Mt(new ge(.18,.2,8),tt("#2a2923",{rough:1}));M.position.y=.25,m.add(p,M),_.add(m),t.add(_);const T=new Ht;T.position.set(0,1.32,.25),T.add(At(.12,.5,.12,i,0,-.24,0));const b=new Ht;b.position.set(0,1.32,-.25),b.add(At(.12,.46,.12,n,0,-.2,0)),t.add(T,b);const A=new Ht;A.position.set(.04,1.16,-.32),A.rotation.y=-.4;const w=At(.07,.07,.2,tt("#2c3038",{metal:.5,rough:.5}),.02,0,0),g=At(.04,.05,.22,r,.09,0,0),S=At(1.02,.035,.055,l,.6,0,0),N=At(1,.012,.02,tt("#ffffff",{emissive:"#ffffff",emissiveIntensity:.5}),.6,.028,0);A.add(w,g,S,N),t.add(A);const P=new Mt(new bi(.48,.62,40),new oe({color:"#ff4d5a",transparent:!0,opacity:.55,blending:He,depthWrite:!1,side:pe}));P.rotation.x=-Math.PI/2,P.position.y=.06,P.visible=!1,s.add(P);const I=new Ht;I.position.y=.8,I.visible=!1;const O=new oe({color:"#9fe4ff",transparent:!0,opacity:.85,blending:He,depthWrite:!1});for(let W=0;W<8;W++){const D=W/8*Math.PI*2,G=new Ht;G.rotation.y=-D;const $=new Mt(new Zi(.34,.03,.05),O);$.position.x=2.7,G.add($),I.add(G)}return s.add(I),{group:s,spin:t,legL:c,legR:h,armL:T,armR:b,swordPivot:A,torso:d,head:_,hat:m,aura:P,bladeWheel:I,cape:f}}function A0(s){const t=new Ht,e=s?1.32:1,i=new Ht;i.scale.setScalar(e),t.add(Vn(.62*e)),t.add(i);const n=tt(s?"#2e2620":"#1d2026",{rough:1}),r=tt(s?"#4a3a2a":"#262a32",{rough:1}),a=tt("#121418",{rough:1});i.add(At(.95,.42,.44,n,0,.62,0)),i.add(At(.34,.36,.4,r,.56,.68,0)),i.add(At(.24,.16,.22,a,.8,.58,0));for(const h of[-.13,.13]){const d=new Mt(new ge(.08,.2,4),a);d.position.set(.5,.92,h),i.add(d)}for(const h of[-.1,.1]){const d=new Mt(new je(.035,6,5),new oe({color:"#ff4d3a"}));d.position.set(.7,.74,h),i.add(d)}const o=[],l=[[.32,.17],[.32,-.17],[-.34,.17],[-.34,-.17]];for(const[h,d]of l){const u=new Ht;u.position.set(h,.48,d),u.add(At(.13,.5,.13,a,0,-.24,0)),i.add(u),o.push(u)}const c=new Mt(new ge(.08,.7,5),n);if(c.position.set(-.52,.7,0),c.rotation.z=Math.PI/2.4,i.add(c),s){const h=fe("#e0b85a",1.4,.5);h.position.set(0,1.3,0),i.add(h)}return{group:t,body:i,legs:o,head:i.children[1]??i}}function R0(){const s=new Ht,t=new Ht;s.add(t);const e=tt("#111820",{transparent:!0,opacity:.92,side:pe,rough:1}),i=new Mt(new ge(.44,1.25,7,1,!0),e);i.position.y=.88,t.add(i);const n=new Mt(new je(.16,8,7),new oe({color:"#55e2cf",transparent:!0,opacity:.95}));n.position.y=1.02,t.add(n);const r=new Mt(new je(.19,8,7),tt("#e8e2d2",{rough:.6}));r.scale.set(1,1.18,.55),r.position.set(.2,1.32,0),t.add(r);for(const o of[-.07,.07])t.add(At(.03,.025,.05,tt("#15171c"),.36,1.35,o));t.add(At(.025,.06,.04,tt("#8f2b33"),.37,1.24,0));const a=fe("#55e2cf",1.7,.5);return a.position.y=.9,t.add(a),s.add(Vn(.4,.18)),{group:s,body:t,legs:[],head:r,extra:n}}function C0(s){const t=new Ht,e=new Ht,i=s?1.18:1;e.scale.setScalar(i),t.add(Vn(.58*i)),t.add(e);const n=tt(s?"#4a3a2a":"#2c2a26",{rough:1}),r=tt(s?"#a8843e":"#5d4432",{rough:.8}),a=tt("#8a8070",{rough:.9});e.add(ne(.24,.42,1.3,n,7,0,.68,0)),e.add(At(.72,.12,.6,r,0,.9,0));const o=new Mt(new je(.2,8,7),a);o.position.y=1.48,e.add(o),e.add(At(.34,.18,.32,tt("#3a3228"),0,1.58,0)),e.add(At(.38,.08,.1,tt("#d8cdb0"),.14,1.47,0));const l=new Mt(new lr(.28,.035,5,14),tt("#6a4a32"));l.position.y=1.12,l.rotation.x=Math.PI/2,e.add(l);const c=new Ht;c.position.set(.05,.9,-.36),c.rotation.z=-.1,c.add(ne(.035,.035,1.9,tt("#5a4632"),5,0,.1,0));const h=new Mt(new lr(.14,.03,5,12),tt(s?"#e0b85a":"#8c7a50",{metal:.6}));if(h.position.y=1.08,c.add(h),e.add(c),s){const d=fe("#e0b85a",1.8,.45);d.position.y=1.1,e.add(d)}return{group:t,body:e,legs:[],head:o}}function P0(){const s=new Ht;s.add(Vn(1.15,.45));const t=new Ht;t.scale.setScalar(1.28),s.add(t);const e=tt("#1e1d24",{rough:.7,metal:.25}),i=tt("#2b2a33",{rough:.7,metal:.2}),n=tt("#8f2b33",{emissive:"#4a0d10",emissiveIntensity:.8}),r=tt("#c8b49a",{rough:.8});t.add(ne(.34,.52,1.15,e,7,0,.72,0)),t.add(At(.95,.18,.62,i,0,1.28,0)),t.add(At(.66,.08,.5,n,0,1.02,0));for(const _ of[-.42,.42]){const y=new Mt(new ge(.2,.34,4),i);y.position.set(0,1.36,_),y.rotation.z=Math.PI,t.add(y)}const a=new Ht;a.position.y=1.62,a.add(new Mt(new je(.23,8,7),r));const o=new Mt(new je(.235,8,7),tt("#e9e4d6",{rough:.5}));o.scale.set(.86,1,.7),o.position.x=.12,a.add(o);for(const _ of[-.08,.08])a.add(At(.05,.03,.06,tt("#121014"),.31,.03,_));a.add(At(.03,.09,.05,n,.32,-.09,0));for(const _ of[-.13,.13]){const y=new Mt(new ge(.055,.34,4),tt("#c9bfa8"));y.position.set(.02,.28,_),y.rotation.z=-.45,y.rotation.x=_>0?.3:-.3,a.add(y)}t.add(a);const l=tt("#141318",{side:pe,rough:1}),c=new Mt(new wi(.75,1.55),l);c.position.set(-.34,.86,.34),c.rotation.y=Math.PI/2,c.rotation.z=.14;const h=c.clone();h.position.z=-.34,h.rotation.z=-.14,t.add(c,h);const d=new Ht;d.position.set(.1,1.05,-.55),d.rotation.y=-.35,d.add(At(.1,.1,.28,tt("#2c3038",{metal:.5}),.02,0,0)),d.add(At(.06,.07,.3,n,.1,0,0)),d.add(At(1.55,.06,.1,tt("#c9ccd4",{metal:.85,rough:.28,flat:!1}),.86,0,0)),d.add(At(1.5,.02,.03,tt("#ff6a4a",{emissive:"#ff3a2a",emissiveIntensity:1.6}),.86,.045,0)),t.add(d);const u=new Mt(new bi(.9,1.16,48),new oe({color:"#ff4a3a",transparent:!0,opacity:.5,blending:He,depthWrite:!1,side:pe}));u.rotation.x=-Math.PI/2,u.position.y=.06,s.add(u);const f=fe("#ff3a2a",3.4,.35);return f.position.y=1.4,s.add(f),{group:s,body:t,head:a,sword:d,capeL:c,capeR:h,aura:u,glow:f}}function L0(s){const t=new Ht;t.add(Vn(.48));const e=new Ht;t.add(e);const i=tt(s,{rough:1}),n=tt(new Ut(s).offsetHSL(0,-.05,.08).getStyle(),{rough:1});e.add(ne(.22,.4,1.15,i,7,0,.62,0)),e.add(At(.55,.1,.42,n,0,.92,0));const r=new Mt(new je(.18,8,7),tt("#d8b28c"));r.position.y=1.38,e.add(r);const a=new Mt(new Ji(.32,.36,.06,10),tt("#2a2923"));a.position.y=1.51,e.add(a),e.add(ne(.12,.16,.14,tt("#2a2923"),8,0,1.58,0));const o=fe("#ffcf8a",.7,.18);return o.position.y=1.4,e.add(o),{group:t,body:e,head:r}}function D0(s,t=1,e=0,i=0,n=0){const r=new Ht,a=e%4;switch(s){case"tree":{const o=ne(.14,.24,1.9+a*.18,tt("#2a211c",{rough:1}),6,0,(1.9+a*.18)/2,0);r.add(o);const l=["#16241d","#1b2c22","#202f25","#132019"];for(let c=0;c<3;c++){const h=(1.05-c*.22)*(.9+a%2*.16),d=new Mt(new Fn(h,0),tt(l[(a+c)%l.length],{rough:1}));d.position.set(Math.cos(c*2.1)*.18,1.95+c*.62,Math.sin(c*2.1)*.18),d.scale.y=.82,r.add(d)}break}case"deadwood":{const o=ne(.1,.22,2.5,tt("#2b2520",{rough:1}),5,0,1.25,0);o.rotation.z=.06,r.add(o);for(let l=0;l<3;l++){const c=ne(.04,.09,.9,tt("#2b2520",{rough:1}),4,0,1.4+l*.4,0);c.rotation.z=.75+l*.15,c.rotation.y=l*2.1,c.position.x=Math.cos(l*2.1)*.35,c.position.z=Math.sin(l*2.1)*.35,r.add(c)}break}case"rock":case"boulder":{const o=s==="boulder"?1.25:.72,l=new Mt(new Fn(o*(.8+a*.08),0),tt(["#2b2b2e","#323236","#25262a","#35322f"][a],{rough:1}));l.position.y=o*.62,l.scale.set(1.15,.78,1),l.rotation.y=a,r.add(l);break}case"lantern":{r.add(ne(.04,.05,1.55,tt("#2b2520"),5,0,.78,0));const o=At(.28,.4,.28,tt("#3a2f24",{emissive:"#ffb45a",emissiveIntensity:.55}),0,1.68,0);r.add(o);const l=fe("#ffb45a",1.25,.55);l.position.y=1.68,r.add(l);break}case"torch":{r.add(ne(.035,.045,1.3,tt("#30261f"),5,0,.65,0));const o=new Mt(new ge(.12,.34,6),new oe({color:"#ffb45a"}));o.position.y=1.45,r.add(o);const l=fe("#ff9a4a",1.5,.7);l.position.y=1.45,r.add(l);break}case"bamboo":{for(let o=0;o<4;o++){const l=2.2+o%3*.45,c=ne(.035,.05,l,tt("#2e4a34",{rough:1}),5,Math.cos(o*1.7)*.28,l/2,Math.sin(o*1.7)*.28);c.rotation.z=Math.sin(o*2.3)*.08,r.add(c);for(let h=0;h<2;h++){const d=new Mt(new ge(.12,.35,4),tt("#33543a",{rough:1}));d.position.set(c.position.x+(h?.15:-.15),l*.62+h*.5,c.position.z),d.rotation.z=h?1.2:-1.2,r.add(d)}}break}case"grass":{for(let o=0;o<5;o++){const l=new Mt(new ge(.05,.36+a*.03,3),tt("#26382b",{rough:1}));l.position.set(Math.cos(o*1.9)*.22,.18,Math.sin(o*1.9)*.22),l.rotation.z=Math.cos(o*1.9)*.35,r.add(l)}break}case"statue":{r.add(At(.9,.3,.9,tt("#2f3035"),0,.15,0)),r.add(At(.55,.5,.55,tt("#3a3b40"),0,.55,0)),r.add(ne(.2,.3,.9,tt("#45464c"),7,0,1.2,0));const o=new Mt(new je(.2,7,6),tt("#4d4e54"));o.position.y=1.8,r.add(o),r.add(fe("#7fd8ff",.8,.16));break}case"pillar":{r.add(At(.5,.24,.5,tt("#33343a"),0,.12,0)),r.add(ne(.17,.21,2.3,tt("#3d3e45"),6,0,1.38,0)),r.add(At(.5,.18,.5,tt("#2b2c31"),0,2.55,0));break}case"banner":{r.add(ne(.035,.045,2.2,tt("#2b2520"),5,0,1.1,0));const o=new Mt(new wi(.52,1.15),tt("#7a2226",{side:pe,rough:1,emissive:"#2a0708",emissiveIntensity:.4}));o.position.set(.28,1.55,0),o.rotation.y=Math.PI/2,r.add(o);break}case"well":{r.add(ne(.72,.78,.7,tt("#33343a"),10,0,.35,0)),r.add(ne(.58,.58,.72,tt("#10151c"),10,0,.38,0)),r.add(ne(.08,.1,1.5,tt("#2b2520"),5,.55,1.3,0)),r.add(ne(.08,.1,1.5,tt("#2b2520"),5,-.55,1.3,0)),r.add(At(1.4,.1,.3,tt("#2b2520"),0,2.05,0));break}case"stall":{const o=i?i*at:3.6,l=n?n*at:1.6;r.add(At(o,.9,l,tt("#3a2c22"),0,.45,0)),r.add(At(o*.95,.08,l*1.05,tt("#5a4030"),0,.92,0));const c=new Mt(new ge(o*.7,.5,4),tt("#5e2a28",{rough:1}));c.position.y=2.1,c.rotation.y=Math.PI/4,c.scale.z=l/o,r.add(c);for(const h of[-o*.45,o*.45])for(const d of[-l*.45,l*.45])r.add(ne(.05,.05,1.7,tt("#2b211a"),4,h,1.05,d));break}case"bones":{const o=tt("#cfc6ad",{rough:.95});for(let c=0;c<6;c++){const h=At(.1+c%3*.08,.06,.06,o,Math.cos(c*1.6)*.36,.05,Math.sin(c*1.6)*.3);h.rotation.y=c*.9,r.add(h)}const l=new Mt(new je(.14,6,5),o);l.position.set(.18,.12,.12),l.scale.y=.75,r.add(l);break}case"shrine":{r.add(At(.8,.22,.8,tt("#33343a"),0,.11,0)),r.add(At(.52,.7,.52,tt("#3d3e45"),0,.55,0));const o=new Mt(new ge(.5,.3,4),tt("#2b2c31"));o.position.y=1.05,o.rotation.y=Math.PI/4,r.add(o);const l=At(.18,.2,.18,tt("#ffcf8a",{emissive:"#ffae4a",emissiveIntensity:1.4}),0,.72,.3);r.add(l);const c=fe("#ffcf8a",.9,.4);c.position.set(0,.75,.3),r.add(c);break}case"censer":{r.add(ne(.32,.4,.5,tt("#3b3c42"),8,0,.45,0)),r.add(ne(.06,.06,.45,tt("#2b2c31"),5,0,.12,0));const o=new Mt(new ge(.16,.3,5),new oe({color:"#ff9a4a"}));o.position.y=.86,r.add(o);const l=fe("#ff9a4a",1.1,.5);l.position.y=.88,r.add(l);break}case"brazier":{r.add(ne(.3,.42,.45,tt("#33343a"),8,0,.36,0)),r.add(ne(.05,.05,.3,tt("#2b2c31"),4,0,.12,0));const o=new Mt(new ge(.2,.55,6),new oe({color:"#ff7a3a"}));o.position.y=.85,r.add(o);const l=fe("#ff7a3a",1.7,.65);l.position.y=.88,r.add(l);break}case"gate":{const o=i?i*at:4.6;for(const c of[-o/2,o/2])r.add(ne(.16,.2,3.1,tt("#4a1e20"),6,c,1.55,0));r.add(At(o+.7,.22,.28,tt("#5a2426"),0,2.95,0)),r.add(At(o+.2,.16,.2,tt("#3a1618"),0,2.6,0));const l=fe("#ff7a4a",o*.8,.22);l.position.y=2.2,r.add(l);break}case"fence":{for(let l=0;l<=4;l++)r.add(At(.08,.9,.08,tt("#33291f"),-3.6/2+l/4*3.6,.45,0));r.add(At(3.6,.08,.06,tt("#3f3326"),0,.68,0)),r.add(At(3.6,.08,.06,tt("#3f3326"),0,.36,0));break}case"house":{const o=i?i*at:7,l=n?n*at:4.4,c=tt(["#26262b","#2a2622","#252a2c","#2c2724"][a],{rough:1});r.add(At(o,2.5,l,c,0,1.25,0)),r.add(At(o*.99,.16,l*.99,tt("#3a2c22"),0,2.56,0));const h=new Mt(new ge(o*.78,1.5,4),tt(["#1c2026","#241f1c","#202528","#231f22"][a],{rough:1}));h.position.y=3.35,h.rotation.y=Math.PI/4,h.scale.z=l*1.22/(o*1.1),r.add(h);for(const d of[-o*.26,o*.26]){const u=At(.5,.55,.04,tt("#ffb45a",{emissive:"#ff9a3a",emissiveIntensity:1.15}),d,1.5,l/2+.02);r.add(u);const f=fe("#ffb45a",1,.32);f.position.set(d,1.5,l/2+.15),r.add(f)}r.add(At(.9,1.45,.08,tt("#181410"),0,.73,l/2+.03));break}default:{const o=new Mt(new ro(.6,0),tt("#2b2b2e"));o.position.y=.6,r.add(o)}}return r.scale.setScalar(t),r}function I0(s){const t=new Ht;if(s==="ghostfire"){const e=new Mt(new Fn(.18,0),new oe({color:"#63e8d6"}));e.position.y=.55,e.userData.spin=!0,t.add(e);const i=fe("#63e8d6",1.35,.7);i.position.y=.55,t.add(i);for(let n=0;n<3;n++){const r=new Mt(new ge(.06,.24,4),new oe({color:"#a8fff4"}));r.position.set(Math.cos(n*2.1)*.22,.3+n*.14,Math.sin(n*2.1)*.22),t.add(r)}}else{for(let i=0;i<5;i++){const n=new Mt(new ge(.09,.52,4),tt("#4d9c63",{emissive:"#123a20",emissiveIntensity:.5}));n.position.set(Math.cos(i*1.5)*.14,.26,Math.sin(i*1.5)*.14),n.rotation.z=Math.cos(i*1.5)*.5,n.rotation.x=Math.sin(i*1.5)*.5,t.add(n)}const e=fe("#7ad08e",.75,.35);e.position.y=.45,t.add(e)}return t}function N0(){const s=new Ht,t=tt("#3a2a1e",{rough:.95}),e=tt("#b08a3e",{metal:.65,rough:.4,emissive:"#2a1c06",emissiveIntensity:.6});s.add(At(.78,.44,.56,t,0,.22,0));for(const a of[-.28,.28])s.add(At(.82,.08,.04,e,0,.24,a));const i=new Ht;i.position.set(-.39,.44,0);const n=At(.78,.12,.56,t,.39,.06,0);i.add(n),i.add(At(.82,.05,.05,e,.39,.1,.28)),s.add(i),s.add(At(.12,.14,.06,e,0,.36,.29));const r=fe("#e8c86a",1,.28);return r.position.y=.55,s.add(r),{group:s,lid:i}}function U0(){const s=new Ht,t=tt("#3b3c42",{rough:1});s.add(At(1.1,.28,1.1,t,0,.14,0)),s.add(ne(.26,.34,.9,t,7,0,.7,0));const e=new Mt(new ge(.72,.42,4),tt("#2b2c31"));e.position.y=1.34,e.rotation.y=Math.PI/4,s.add(e);const i=new Mt(new ge(.12,.3,6),new oe({color:"#ffcf8a"}));i.position.y=1.66,s.add(i);const n=fe("#ffcf8a",2.2,.5);return n.position.y=1.7,s.add(n),s}function F0(s){const t=new Ht,e=tt("#5a2426",{rough:.85}),i=tt("#2b2520",{rough:1}),n=3.4;for(const c of[-n/2,n/2])t.add(ne(.15,.19,3.4,e,6,c,1.7,0)),t.add(ne(.1,.1,.5,i,5,c,.25,0));t.add(At(n+.9,.24,.32,e,0,3.35,0));const r=new Mt(new wi(1.2,.42),new oe({color:"#0f1115",side:pe}));r.position.set(0,3.05,0),t.add(r);const a=new oe({color:"#ffb45a",transparent:!0,opacity:.5,blending:He,depthWrite:!1,side:pe}),o=new Mt(new bi(1.05,1.22,40),a);o.position.set(0,1.85,0),o.userData.portalRing=!0,t.add(o);const l=fe("#ffb45a",3,.35);return l.position.y=1.85,l.userData.portalGlow=!0,t.add(l),t.userData.label=s,t}function O0(s,t){const e=new Ht;if(s){const n={pill_heal:"#d95a4c",pill_chi:"#6aa7e8",pill_speed:"#8ed6a2",pill_guard:"#e3c073",herb:"#6fc98a",bloodsand:"#c2483f",bone:"#e6ddc4",ghostfire:"#55e2cf",key:"#c9a34f",talisman:"#b3382f"}[s]??"#e8c86a",r=new Mt(new Fn(.13,0),new oe({color:n}));r.position.y=.16,e.add(r);const a=fe(n,.7,.8);a.position.y=.16,e.add(a)}else{const i=new Mt(new Ji(.12,.12,.04,10),tt("#e8c86a",{metal:.8,rough:.35,emissive:"#3a2a06",emissiveIntensity:.8}));i.position.y=.15,i.rotation.x=Math.PI/2,e.add(i);const n=fe("#e8c86a",.6,.7);n.position.y=.15,e.add(n)}return e.userData.money=t,e}function ds(s){s.traverse(t=>{const e=t;e.geometry&&!(t instanceof qi)&&e.geometry.dispose();const i=e.material,n=Array.isArray(i)?i:i?[i]:[];for(const r of n)r.dispose()})}const Nl={town:{sky:857120,fog:725273,fogDensity:.024,hemiSky:10334924,hemiGround:2892826,hemiI:1.2,dir:11979746,dirI:1.9},forest:{sky:594704,fog:463118,fogDensity:.033,hemiSky:8561556,hemiGround:1712919,hemiI:1,dir:11062191,dirI:1.5},temple:{sky:725017,fog:593429,fogDensity:.029,hemiSky:9280957,hemiGround:2038310,hemiI:1.05,dir:11649244,dirI:1.65},cliff:{sky:1313548,fog:1050633,fogDensity:.029,hemiSky:12096656,hemiGround:2888720,hemiI:1.05,dir:14067874,dirI:1.8}},B0={tree:[48,48],deadwood:[38,38],rock:[58,58],boulder:[88,88],bamboo:[38,38],lantern:[26,26],torch:[22,22],grass:[0,0],statue:[64,64],pillar:[40,40],banner:[26,26],well:[86,86],stall:[0,0],bones:[0,0],shrine:[68,68],censer:[52,52],brazier:[46,46],gate:[0,0],fence:[130,24],house:[0,0]},Cn=(s,t,e)=>s<t?t:s>e?e:s;class k0{constructor(t,e,i){R(this,"scene",new Fa);R(this,"region");R(this,"solids",[]);R(this,"nodes",[]);R(this,"chests",[]);R(this,"npcGroups",new Map);R(this,"portals",[]);R(this,"shrineGroup",null);R(this,"groundTex",null);R(this,"time",0);R(this,"extraLights",[]);this.region=t;const n=Nl[t.id]??Nl.town;this.scene.background=new Ut(n.sky),this.scene.fog=new eo(n.fog,n.fogDensity);const r=new td(n.hemiSky,n.hemiGround,n.hemiI);this.scene.add(r);const a=new al(n.dir,n.dirI);a.position.set(16,26,-12),this.scene.add(a);const o=new al(n.hemiSky,.35);o.position.set(-18,10,14),this.scene.add(o),this.buildGround(),this.buildProps(),this.buildNpcs(),this.buildPortals(),this.buildNodes(i),this.buildChests(e),this.buildShrine(),this.scene.add(fe(t.id==="cliff"?"#ff5a3a":"#7fa8d8",42,.07).translateY(24))}buildGround(){const t=this.region,e=new jh().load(fo("tiles",t.ground));e.colorSpace=Ie,e.wrapS=e.wrapT=er,e.repeat.set(Math.max(2,t.w/240),Math.max(2,t.h/240)),e.anisotropy=4,this.groundTex=e;const i=new ao({map:e,color:t.id==="forest"?8361352:t.id==="cliff"?10123890:9410472,roughness:1,metalness:0}),n=new Mt(new wi(t.w*at+8,t.h*at+8),i);n.rotation.x=-Math.PI/2,n.position.set(t.w*at/2,0,t.h*at/2),this.scene.add(n);const r=new oe({color:t.id==="cliff"?2756626:658706,transparent:!0,opacity:.55,side:pe,depthWrite:!1}),a=2.4,o=t.w*at,l=t.h*at,c=[[o/2,0,o,a,0],[o/2,l,o,a,0],[0,l/2,l,a,1],[o,l/2,l,a,1]];for(const[h,d,u,f,_]of c){const y=new Mt(new wi(u,f),r);y.position.set(h,f/2,d),y.rotation.y=_?Math.PI/2:0,this.scene.add(y)}}buildProps(){const t=this.region;t.props.forEach((i,n)=>{const r=D0(i.kind,i.scale??1,i.variant??n,i.w,i.h);if(r.position.set(i.x*at,0,i.y*at),this.scene.add(r),i.solid===!1)return;const a=B0[i.kind]??[40,40];let o=a[0],l=a[1];i.kind==="house"?(o=i.w??300,l=i.h??170):i.kind==="stall"?(o=i.w??140,l=i.h??64):(o=Math.max(o,i.w??0),l=Math.max(l,i.h??0));const c=i.scale??1;o*=c,l*=c,!(o<4||l<4)&&this.solids.push({x:i.x-o/2,y:i.y-l/2,w:o,h:l})});const e=[];for(const i of t.props)(i.kind==="torch"||i.kind==="brazier"||i.kind==="censer")&&e.length<6&&e.push([i.x,i.y]);for(const[i,n]of e){const r=new Ba(t.id==="forest"?16751178:16757850,26,11,2);r.position.set(i*at,1.7,n*at),this.scene.add(r),this.extraLights.push(r)}}buildNpcs(){for(const t of this.region.npcs){const e=L0(t.color);e.group.position.set(t.x*at,0,t.y*at),this.scene.add(e.group),this.npcGroups.set(t.id,e.group),this.solids.push({x:t.x-18,y:t.y-18,w:36,h:36})}}buildPortals(){for(const t of this.region.portals){const e=F0(t.label);e.position.set(t.x*at,0,t.y*at),this.scene.add(e);const i=e.children.find(r=>r.userData.portalRing),n=e.children.find(r=>r.userData.portalGlow);this.portals.push({def:t,group:e,ring:i,glow:n,unlocked:!0})}}buildNodes(t){for(const e of this.region.nodes){const i=I0(e.item);i.position.set(e.x*at,0,e.y*at);const n=!t.has(e.id);i.visible=n,this.scene.add(i),this.nodes.push({def:e,alive:n,timer:0,group:i})}}buildChests(t){for(const e of this.region.chests){const i=N0();i.group.position.set(e.x*at,0,e.y*at);const n=t.has(e.id);if(i.lid.rotation.z=n?-1.15:0,this.scene.add(i.group),this.chests.push({def:e,opened:n,lid:i.lid,group:i.group}),!n){const r=fe("#e8c86a",1,.28);r.position.y=.55,i.group.add(r)}}}buildShrine(){const t=this.region.shrine;if(!t)return;const e=U0();e.position.set(t.x*at,0,t.y*at),this.scene.add(e),this.shrineGroup=e;const i=new Ba(16764810,18,9,2);i.position.set(t.x*at,2,t.y*at),this.scene.add(i),this.extraLights.push(i)}setPortalUnlocked(t,e){const i=this.portals.find(r=>r.def===t);if(!i)return;i.unlocked=e,i.ring.material.color.set(e?"#ffb45a":"#5a2828"),i.glow.material.color.set(e?"#ffb45a":"#7a2a22")}setNodeVisible(t,e){t.alive=e,t.group.visible=e}openChest(t){t.opened=!0}collide(t,e,i){const n=this.region;let r=Cn(t,i,n.w-i),a=Cn(e,i,n.h-i);for(let o=0;o<2;o++){for(const l of this.solids){const c=Cn(r,l.x,l.x+l.w),h=Cn(a,l.y,l.y+l.h);let d=r-c,u=a-h;const f=d*d+u*u;if(!(f>=i*i))if(f>1e-4){const _=Math.sqrt(f),y=i-_;r+=d/_*y,a+=u/_*y}else{const _=r-l.x,y=l.x+l.w-r,m=a-l.y,p=l.y+l.h-a,M=Math.min(_,y,m,p);M===_?r=l.x-i:M===y?r=l.x+l.w+i:M===m?a=l.y-i:a=l.y+l.h+i}}r=Cn(r,i,n.w-i),a=Cn(a,i,n.h-i)}return{x:r,y:a}}pointBlocked(t,e){for(const i of this.solids)if(t>i.x&&t<i.x+i.w&&e>i.y&&e<i.y+i.h)return!0;return!1}update(t){this.time+=t;const e=this.time;for(const i of this.portals){i.ring.rotation.z=e*.4;const n=1+Math.sin(e*2+i.def.x)*.04;i.ring.scale.setScalar(n);const r=i.ring.material;r.opacity=i.unlocked?.35+Math.sin(e*2.4)*.14:.18,i.glow.material.opacity=i.unlocked?.26+Math.sin(e*2)*.08:.12}for(const i of this.nodes){if(!i.alive)continue;i.group.position.y=Math.sin(e*1.8+i.def.x*.01)*.06;const n=i.group.children.find(r=>r.userData.spin);n&&(n.rotation.y=e*1.6,n.rotation.x=e*.9)}for(const i of this.chests)i.opened&&i.lid.rotation.z>-1.15&&(i.lid.rotation.z=Math.max(-1.15,i.lid.rotation.z-t*4.5));this.shrineGroup&&(this.shrineGroup.rotation.y=Math.sin(e*.6)*.03);for(let i=0;i<this.extraLights.length;i++){const n=this.extraLights[i];n.intensity=(n.userData.base??(n.userData.base=n.intensity))*(.86+Math.sin(e*7+i*1.7)*.14)}}dispose(){this.scene.traverse(t=>{const e=t;e.geometry&&!(t instanceof qi)&&e.geometry.dispose();const i=e.material;if(i){const n=Array.isArray(i)?i:[i];for(const r of n)r.dispose()}}),this.groundTex&&this.groundTex.dispose(),this.scene.clear(),this.solids.length=0,this.nodes.length=0,this.chests.length=0,this.portals.length=0,this.extraLights.length=0}}const an=2600,Ul=new Map;function z0(s,t,e){const i=`${s}|${t}|${e}`,n=Ul.get(i);if(n)return n;const r=document.createElement("canvas");r.width=256,r.height=96;const a=r.getContext("2d");a.clearRect(0,0,256,96),a.font=`bold ${Math.round(46+e)}px "Noto Serif SC","Songti SC",serif`,a.textAlign="center",a.textBaseline="middle",a.shadowColor=t,a.shadowBlur=18,a.fillStyle=t,a.fillText(s,128,50),a.shadowBlur=0,a.fillStyle="rgba(255,255,255,0.85)",a.fillText(s,128,50);const o=new no(r);return o.colorSpace=Ie,o.userData.shared=!0,Ul.set(i,o),o}class H0{constructor(t){R(this,"root",new Ht);R(this,"parts",[]);R(this,"points");R(this,"posAttr");R(this,"colorAttr");R(this,"sizeAttr");R(this,"alphaAttr");R(this,"effects",[]);t.add(this.root);const e=new Fe;this.posAttr=new hi(new Float32Array(an*3),3).setUsage(_s),this.colorAttr=new hi(new Float32Array(an*3),3).setUsage(_s),this.sizeAttr=new hi(new Float32Array(an),1).setUsage(_s),this.alphaAttr=new hi(new Float32Array(an),1).setUsage(_s),e.setAttribute("position",this.posAttr),e.setAttribute("aColor",this.colorAttr),e.setAttribute("aSize",this.sizeAttr),e.setAttribute("aAlpha",this.alphaAttr),e.setDrawRange(0,0);const i=new Ke({transparent:!0,depthWrite:!1,blending:He,vertexShader:`
        attribute vec3 aColor;
        attribute float aSize;
        attribute float aAlpha;
        varying vec3 vC;
        varying float vA;
        void main() {
          vC = aColor;
          vA = aAlpha;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = clamp(aSize * (165.0 / max(0.5, -mv.z)), 1.0, 44.0);
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        varying vec3 vC;
        varying float vA;
        void main() {
          vec2 uv = gl_PointCoord - 0.5;
          float d = length(uv);
          if (d > 0.5) discard;
          float a = smoothstep(0.5, 0.0, d);
          gl_FragColor = vec4(vC, a * vA);
        }
      `});this.points=new Wh(e,i),this.points.frustumCulled=!1,this.root.add(this.points)}burst(t,e,i={}){const n=Math.min(i.count??12,220),r=new Ut(i.color??"#ff8a5a"),a=new Ut(i.color2??i.color??"#fff0c8"),o=i.angle??Math.random()*Math.PI*2,l=i.spread??Math.PI*2;for(let c=0;c<n&&!(this.parts.length>=an);c++){const h=o+(Math.random()-.5)*l,d=(i.speed??120)*(.35+Math.random()*.9),u=(i.life??.6)*(.65+Math.random()*.7);this.parts.push({x:t*at,y:i.y??.6,z:e*at,vx:Math.cos(h)*d*at,vy:(Math.random()*.6+.1)*(i.grav&&i.grav>0?.3:1.4),vz:Math.sin(h)*d*at,life:u,max:u,size:(i.size??2.4)*(.75+Math.random()*.65),color:r.clone().lerp(a,Math.random()),grav:(i.grav??-40)*at,drag:i.drag??1.6})}}embers(t,e,i=8,n="#ff8a4a"){for(let r=0;r<i&&!(this.parts.length>=an);r++){const a=.5+Math.random()*.8;this.parts.push({x:(t+(Math.random()-.5)*30)*at,y:.15+Math.random()*.9,z:(e+(Math.random()-.5)*30)*at,vx:(Math.random()-.5)*.9,vy:.8+Math.random()*1.6,vz:(Math.random()-.5)*.9,life:a,max:a,size:.75+Math.random()*1,color:new Ut(n).offsetHSL(0,0,(Math.random()-.5)*.12),grav:.6,drag:.8})}}slash(t,e,i,n,r,a=1.2,o=8,l=.4){const c=Math.max(.4,n*at),h=Math.max(.05,c-o*at*2.2),d=new bi(h,c,28,1,-a,a*2);d.rotateX(-Math.PI/2);const u=new oe({color:r,transparent:!0,opacity:.95,blending:He,side:pe,depthWrite:!1}),f=new Mt(d,u);f.position.set(t*at,.72,e*at),f.rotation.y=-i,this.root.add(f),this.effects.push({obj:f,t:0,max:l,update:(_,y)=>{_.scale.setScalar(.72+y*.4),_.position.y=.72+y*.28,_.rotation.y=-i+y*.16,u.opacity=.95*(1-y)**1.4}})}ring(t,e,i,n,r,a=4,o=.5){const l=new bi(.93,1,56);l.rotateX(-Math.PI/2);const c=new oe({color:r,transparent:!0,opacity:.9,blending:He,side:pe,depthWrite:!1}),h=new Mt(l,c);h.position.set(t*at,.08,e*at),h.scale.setScalar(Math.max(.08,i*at)),this.root.add(h),this.effects.push({obj:h,t:0,max:o,update:(d,u)=>{const f=(i+(n-i)*(1-(1-u)**2))*at;d.scale.setScalar(f),c.opacity=.9*(1-u)*Math.min(1,.3+a*.1)}})}rune(t,e,i,n,r=.8){const a=new Ht;a.position.set(t*at,.06,e*at);const o=new oe({color:n,transparent:!0,opacity:.7,blending:He,side:pe,depthWrite:!1}),l=new bi(.9,1,48);l.rotateX(-Math.PI/2);const c=new Mt(l,o);c.scale.setScalar(i*at);const h=new Mt(l,o.clone());h.scale.setScalar(i*at*.68),a.add(c,h);const d=new oe({color:n,transparent:!0,opacity:.85,blending:He,depthWrite:!1}),u=new Zi(.04,.01,.24);for(let _=0;_<12;_++){const y=_/12*Math.PI*2,m=new Mt(u,d);m.position.set(Math.cos(y)*i*at*.86,.02,Math.sin(y)*i*at*.86),m.rotation.y=-y,a.add(m)}this.root.add(a);const f=[o,h.material,d];this.effects.push({obj:a,t:0,max:r,update:(_,y)=>{_.rotation.y=y*2.2,_.scale.setScalar(.8+y*.35);for(const m of f)m.opacity=(.85-y*.8)*(1-y*.2)}})}ghost(t,e,i,n){const r=new Ht,a=new oe({color:n,transparent:!0,opacity:.5,blending:He,depthWrite:!1}),o=new Mt(new Ji(.26,.34,1.1,6),a);o.position.y=.75;const l=new Mt(new je(.16,6,5),a);l.position.y=1.5,r.add(o,l),r.position.set(t*at,0,e*at),r.rotation.y=-i,r.scale.y=.7,this.root.add(r),this.effects.push({obj:r,t:0,max:.34,update:(c,h)=>{a.opacity=.45*(1-h),c.scale.set(1-h*.25,.7-h*.3,1-h*.25)}})}text(t,e,i,n="#ffffff",r=16){const a=z0(i,n,r),o=new ls({map:a,transparent:!0,depthWrite:!1,depthTest:!1}),l=new qi(o),c=.9+r*.05;l.scale.set(c*1.35,c*.52,1),l.position.set((t+(Math.random()-.5)*16)*at,1.85,e*at),l.renderOrder=20,this.root.add(l),this.effects.push({obj:l,t:0,max:.85,update:(h,d)=>{h.position.y=1.85+d*1.15,o.opacity=1-d**2;const u=1+d*.25;l.scale.set(c*1.35*u,c*.52*u,1)}})}update(t){let e=0;const i=this.posAttr.array,n=this.colorAttr.array,r=this.sizeAttr.array,a=this.alphaAttr.array;for(let o=this.parts.length-1;o>=0;o--){const l=this.parts[o];if(l.life-=t,l.life<=0){this.parts.splice(o,1);continue}l.vy-=l.grav*t;const c=Math.max(0,1-l.drag*t);l.vx*=c,l.vz*=c,l.x+=l.vx*t,l.y+=l.vy*t,l.z+=l.vz*t,l.y<.03&&(l.y=.03,l.vy=Math.abs(l.vy)*.25)}for(let o=0;o<this.parts.length;o++){const l=this.parts[o];if(e>=an)break;const c=l.life/l.max;i[e*3]=l.x,i[e*3+1]=l.y,i[e*3+2]=l.z,n[e*3]=l.color.r,n[e*3+1]=l.color.g,n[e*3+2]=l.color.b,r[e]=l.size*(.6+c*.6),a[e]=Math.min(1,c*1.8),e++}this.posAttr.needsUpdate=!0,this.colorAttr.needsUpdate=!0,this.sizeAttr.needsUpdate=!0,this.alphaAttr.needsUpdate=!0,this.points.geometry.setDrawRange(0,e);for(let o=this.effects.length-1;o>=0;o--){const l=this.effects[o];l.t+=t;const c=Math.min(1,l.t/l.max);l.update(l.obj,c,t),l.t>=l.max&&(this.root.remove(l.obj),l.obj.traverse(h=>{const d=h;d.geometry&&!(h instanceof qi)&&d.geometry.dispose();const u=d.material;if(u){const f=Array.isArray(u)?u:[u];for(const _ of f){const y=_;y.map&&!y.map.userData.shared&&y.map.dispose(),_.dispose()}}}),this.effects.splice(o,1))}}clear(){this.parts.length=0;for(const t of this.effects)this.root.remove(t.obj),t.obj.traverse(e=>{const i=e;i.geometry&&!(e instanceof qi)&&i.geometry.dispose();const n=i.material;if(n){const r=Array.isArray(n)?n:[n];for(const a of r)a.dispose()}});this.effects.length=0}dispose(){this.clear(),this.parts.length=0,this.root.removeFromParent(),this.points.geometry.dispose(),this.points.material.dispose()}}class Fl{constructor(t,e){R(this,"x",0);R(this,"y",0);R(this,"r",13);R(this,"hp",120);R(this,"maxHp",120);R(this,"chi",100);R(this,"maxChi",100);R(this,"stamina",100);R(this,"maxStamina",100);R(this,"money",80);R(this,"inv",new d0);R(this,"speed",215);R(this,"facing",0);R(this,"dead",!1);R(this,"moving",!1);R(this,"animT",0);R(this,"invuln",0);R(this,"hurtT",0);R(this,"dodgeT",0);R(this,"dodgeMax",.3);R(this,"dodgeCd",0);R(this,"dodgeDir",0);R(this,"perfectWindow",0);R(this,"ghostTimer",0);R(this,"dashT",0);R(this,"dashDir",0);R(this,"dashStruck",!1);R(this,"atkCd",0);R(this,"atkBuffer",0);R(this,"comboWindow",0);R(this,"comboStep",0);R(this,"swingT",0);R(this,"swingMax",.2);R(this,"swingDir",0);R(this,"skillCd",[0,0,0]);R(this,"channel",0);R(this,"channelMax",.5);R(this,"bladeT",0);R(this,"bladeTick",0);R(this,"bladeAngle",0);R(this,"buffs",{crit:0,speed:0,guard:0});R(this,"kbx",0);R(this,"kby",0);R(this,"model",T0());this.reset(t,e)}reset(t,e){this.x=t,this.y=e,this.dead=!1,this.hp=this.maxHp,this.chi=this.maxChi,this.stamina=this.maxStamina,this.invuln=1,this.dodgeT=0,this.dashT=0,this.channel=0,this.bladeT=0,this.hurtT=0,this.buffs={crit:0,speed:0,guard:0},this.ghostTimer=0,this.model.spin.rotation.z=0,this.model.spin.position.y=0,this.syncModel()}dmgMult(){return 1+(this.buffs.crit>0?.5:0)}update(t,e,i,n){if(this.dead){this.syncModel();return}this.facing=i,this.invuln=Math.max(0,this.invuln-t),this.hurtT=Math.max(0,this.hurtT-t),this.dodgeCd=Math.max(0,this.dodgeCd-t),this.atkCd=Math.max(0,this.atkCd-t),this.atkBuffer=Math.max(0,this.atkBuffer-t),this.comboWindow=Math.max(0,this.comboWindow-t),this.swingT=Math.max(0,this.swingT-t),this.perfectWindow=Math.max(0,this.perfectWindow-t),this.ghostTimer=Math.max(0,this.ghostTimer-t);for(let l=0;l<3;l++)this.skillCd[l]=Math.max(0,this.skillCd[l]-t);if(this.buffs.crit=Math.max(0,this.buffs.crit-t),this.buffs.speed=Math.max(0,this.buffs.speed-t),this.buffs.guard=Math.max(0,this.buffs.guard-t),this.comboWindow<=0&&(this.comboStep=0),this.channel<=0&&(this.chi=Math.min(this.maxChi,this.chi+9*t)),this.stamina=Math.min(this.maxStamina,this.stamina+24*t),(Math.abs(this.kbx)>1||Math.abs(this.kby)>1)&&(this.moveBy(this.kbx*t,this.kby*t,n),this.kbx*=1-Math.min(1,t*9),this.kby*=1-Math.min(1,t*9)),this.dodgeT>0){this.dodgeT-=t;const c=560*(1-(1-this.dodgeT/this.dodgeMax)*.55);this.moveBy(Math.cos(this.dodgeDir)*c*t,Math.sin(this.dodgeDir)*c*t,n),this.ghostTimer<=0&&(this.ghostTimer=.045,n.fx.ghost(this.x,this.y,this.facing,"rgba(120,220,255,0.4)")),this.dodgeT<=0&&(this.dodgeCd=.16),this.syncModel();return}if(this.channel>0){this.channel-=t,n.fx.embers(this.x,this.y,2,"#ff8a4a"),this.channel<=0&&this.releaseSkill3(n),this.syncModel();return}if(this.dashT>0){this.dashT-=t;const l=900;if(this.moveBy(Math.cos(this.dashDir)*l*t,Math.sin(this.dashDir)*l*t,n),this.ghostTimer<=0&&(this.ghostTimer=.04,n.fx.ghost(this.x,this.y,this.dashDir,"rgba(255,90,90,0.5)"),n.fx.embers(this.x,this.y,1,"#ff6a4a")),!this.dashStruck&&this.dashT<=0){this.dashStruck=!0;const c=48*this.dmgMult(),h=n.hitEnemies(this.x,this.y,this.dashDir,118,1.35,c,260);n.fx.slash(this.x,this.y,this.dashDir,130,"#ff5766",1.35,12,.5),n.fx.slash(this.x,this.y,this.dashDir+.1,108,"#ffe6c0",1.1,5,.42),n.fx.ring(this.x,this.y,20,95,"rgba(255,120,90,0.85)",4,.45),n.fx.burst(this.x+Math.cos(this.dashDir)*60,this.y+Math.sin(this.dashDir)*60,{count:24,color:"#ff5a5a",color2:"#ffd27a",speed:260,size:3,life:.6,angle:this.dashDir,spread:2.2}),n.shake(h>0?12:6),n.punchZoom(h>0?5:3),h>0&&n.audio.hit(!0)}this.syncModel();return}const r=e.len>0;if(this.moving=r,r){const l=this.speed*(this.buffs.speed>0?1.28:1);this.moveBy(e.x*l*t,e.y*l*t,n),this.animT+=t*(this.buffs.speed>0?1.25:1)}const a=n.input;if((a.mouse.down||a.mouse.clicked||a.isDown("KeyJ")||a.wasPressed("KeyJ"))&&(this.atkBuffer=.18),this.atkBuffer>0&&this.atkCd<=0&&(this.atkBuffer=0,this.basicAttack(n,i)),a.wasAnyPressed(["Space","ShiftLeft","ShiftRight"])&&this.tryDodge(e,n,i),a.wasPressed("Digit1")&&this.castSkill(0,n,i),a.wasPressed("Digit2")&&this.castSkill(1,n,i),a.wasPressed("Digit3")&&this.castSkill(2,n,i),this.bladeT>0&&(this.bladeT-=t,this.bladeAngle+=t*9,this.bladeTick-=t,this.bladeTick<=0)){this.bladeTick=.15;const l=9*this.dmgMult();n.areaEnemies(this.x,this.y,132,l,40),n.fx.ring(this.x,this.y,60,132,"rgba(140,220,255,0.55)",2,.22)}this.syncModel()}syncModel(){const t=this.model;t.group.position.set(this.x*at,0,this.y*at),t.group.rotation.y=-this.facing;let e=0,i=0;this.dodgeT>0&&(e=(1-this.dodgeT/this.dodgeMax)*gi,i=.14),t.spin.rotation.y=e,t.spin.position.y=i;const n=this.moving?.62:.04,r=Math.sin(this.animT*12);if(t.legL.rotation.z=r*n,t.legR.rotation.z=-r*n,t.armL.rotation.z=-r*n*.7,t.armR.rotation.z=r*n*.5,this.swingT>0){const a=1-this.swingT/this.swingMax;t.swordPivot.rotation.y=-1.25+a*2.7,t.swordPivot.rotation.z=.16}else this.channel>0?(t.swordPivot.rotation.y=-1.7,t.swordPivot.rotation.z=1.15):this.dashT>0?(t.swordPivot.rotation.y=.35,t.swordPivot.rotation.z=.1):(t.swordPivot.rotation.y=-.5+Math.sin(performance.now()*.002)*.045,t.swordPivot.rotation.z=.05);if(t.aura.visible=this.buffs.crit>0,t.aura.visible){const a=performance.now()*.006;t.aura.rotation.z=a,t.aura.material.opacity=.38+Math.sin(a*3)*.16}t.bladeWheel.visible=this.bladeT>0,t.bladeWheel.visible&&(t.bladeWheel.rotation.y=this.bladeAngle,t.bladeWheel.position.y=.8+Math.sin(this.bladeAngle*2)*.08)}moveBy(t,e,i){const n=i.world.collide(this.x+t,this.y+e,this.r);this.x=n.x,this.y=n.y}basicAttack(t,e){if(this.stamina<8){t.toast("气力不足");return}this.stamina-=8,this.comboStep=this.comboWindow>0?(this.comboStep+1)%3:0;const i=[12,14,22][this.comboStep]*this.dmgMult(),n=[74,78,96][this.comboStep],r=[1.9,2,2.6][this.comboStep];e=t.aimAssist(this.x,this.y,e,n+12,.95);const a=t.hitEnemies(this.x,this.y,e,n,r,i,90+this.comboStep*30);this.atkCd=.27,this.comboWindow=.55,this.swingT=.2,this.swingMax=.2,this.swingDir=e;const o=this.comboStep===2?"#ffd7a0":"#ff6b6b";t.fx.slash(this.x,this.y,e,n*.95,o,r,this.comboStep===2?10:7,.34),t.audio.swing(),a>0&&(t.fx.burst(this.x+Math.cos(e)*n*.7,this.y+Math.sin(e)*n*.7,{count:10,color:"#ff8a7a",color2:"#fff0c8",speed:210,size:2.6,life:.34,angle:e,spread:1.6}),t.audio.hit(this.comboStep===2),t.shake(3+this.comboStep),t.punchZoom(this.comboStep===2?2.2:.8)),this.x+=Math.cos(e)*5,this.y+=Math.sin(e)*5}tryDodge(t,e,i){if(!(this.dodgeT>0||this.dodgeCd>0)){if(this.stamina<25){e.toast("气力不足，无法翻滚");return}this.stamina-=25,this.dodgeT=this.dodgeMax,this.dodgeDir=t.len>0?Math.atan2(t.y,t.x):i,this.invuln=Math.max(this.invuln,.24),this.perfectWindow=.16,this.ghostTimer=0,e.audio.dodge(),e.fx.burst(this.x,this.y,{count:12,color:"rgba(180,190,200,0.8)",color2:"rgba(255,220,180,0.6)",speed:90,size:3,life:.35})}}castSkill(t,e,i){if(this.dead||this.channel>0||this.dashT>0)return;const n=tr[t];if(this.skillCd[t]>0){e.toast(`${n.name} 尚在调息`);return}if(this.chi<n.cost){e.toast("内力不足"),e.audio.deny();return}this.chi-=n.cost,this.skillCd[t]=n.cd,t===0?(this.dashT=.18,this.dashDir=i,this.dashStruck=!1,this.invuln=Math.max(this.invuln,.42),this.ghostTimer=0,e.audio.skill1(),e.fx.rune(this.x,this.y,34,"#ff7a5a",.5),e.fx.ring(this.x,this.y,10,50,"rgba(255,120,80,0.75)",3,.35)):t===1?(this.bladeT=1.15,this.bladeTick=0,this.bladeAngle=Math.random()*gi,e.audio.skill2(),e.fx.rune(this.x,this.y,56,"#7fd8ff",.9),e.fx.ring(this.x,this.y,20,140,"rgba(150,220,255,0.6)",3,.5)):(this.channel=this.channelMax,this.invuln=Math.max(this.invuln,.3),e.audio.skill3(),e.fx.rune(this.x,this.y,96,"#ff9a52",.65),e.fx.ring(this.x,this.y,20,190,"rgba(255,140,70,0.45)",4,.55),e.shake(4))}releaseSkill3(t){const e=95*this.dmgMult(),i=t.areaEnemies(this.x,this.y,220,e,340);t.fx.ring(this.x,this.y,30,250,"rgba(255,190,120,0.95)",8,.65),t.fx.ring(this.x,this.y,10,200,"rgba(255,90,60,0.85)",5,.5),t.fx.ring(this.x,this.y,60,150,"rgba(255,240,200,0.9)",2,.32);for(let n=0;n<4;n++)t.fx.slash(this.x,this.y,n/4*gi+.4,150,"#ff6a4a",1.3,12,.62);t.fx.burst(this.x,this.y,{count:80,color:"#ff6a3a",color2:"#ffd27a",speed:420,size:3.6,life:.95,grav:-60}),t.fx.embers(this.x,this.y,36,"#ff8a4a"),t.shake(i>0?22:14),t.punchZoom(9),t.flash("#ffd296",.55),t.slowmo(.24,.28),t.audio.hit(i>0)}perfectDodge(t){this.perfectWindow=0,this.buffs.crit=5,this.chi=Math.min(this.maxChi,this.chi+25),this.stamina=Math.min(this.maxStamina,this.stamina+40),t.slowmo(.55,.3),t.shake(10),t.flash("#96e6ff",.4),t.fx.ring(this.x,this.y,16,130,"rgba(150,235,255,0.9)",4,.55),t.fx.text(this.x,this.y-20,"完美闪避","#9ef2ff",20),t.fx.text(this.x,this.y-40,"刀意·破","#ffd889",14),t.audio.perfect(),t.onPerfectDodge()}takeDamage(t,e,i,n){if(this.dead)return;if(this.invuln>0||this.dodgeT>0||this.dashT>0){this.perfectWindow>0&&(this.perfectWindow=0,this.perfectDodge(n));return}let r=t;this.buffs.guard>0&&(r*=.5),r=Math.max(1,Math.round(r)),this.hp=Math.max(0,this.hp-r),this.hurtT=.35,this.invuln=.7;const a=Math.atan2(this.y-i,this.x-e);this.kbx+=Math.cos(a)*240,this.kby+=Math.sin(a)*240,n.fx.text(this.x,this.y-20,`-${r}`,"#ff6b6b",18),n.fx.burst(this.x,this.y,{count:16,color:"#c23c3c",color2:"#ff9a7a",speed:190,size:3,life:.5}),n.shake(9),n.audio.hurt(),this.hp<=0&&(this.dead=!0,this.model.spin.rotation.z=-Math.PI/2,this.model.spin.position.y=.24,n.onPlayerDeath())}heal(t,e){const i=this.hp;this.hp=Math.min(this.maxHp,this.hp+t),e.fx.text(this.x,this.y-24,`+${Math.round(this.hp-i)}`,"#8ef0a0",16),e.fx.burst(this.x,this.y,{count:14,color:"#7be08a",color2:"#d8ffcf",speed:60,size:2.6,life:.8,grav:-40}),e.audio.heal()}restoreChi(t,e){this.chi=Math.min(this.maxChi,this.chi+t),e.fx.text(this.x,this.y-24,`内力 +${t}`,"#8ec8ff",15),e.fx.burst(this.x,this.y,{count:14,color:"#6aa7e8",color2:"#d8f0ff",speed:80,size:2.4,life:.7,grav:-30}),e.audio.heal()}}const G0={wolf:{hp:54,speed:142,r:13,damage:11,aggro:330,range:58,windup:.38,recover:.5,cd:1.25,money:[6,13],drops:[["bone",.62,1],["bloodsand",.18,1]]},ghost:{hp:44,speed:78,r:14,damage:10,aggro:400,range:320,windup:.6,recover:.6,cd:2.1,money:[10,18],drops:[["ghostfire",.6,1]],keepDistance:210},monk:{hp:118,speed:70,r:17,damage:19,aggro:270,range:76,windup:.72,recover:.7,cd:1.9,money:[16,26],drops:[["bloodsand",.55,1],["bone",.4,1],["herb",.18,1]]}};let Xs=null;function V0(){if(!Xs){const s=document.createElement("canvas");s.width=2,s.height=2;const t=s.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,2,2),Xs=new no(s),Xs.colorSpace=Ie}return Xs}class W0{constructor(t,e,i,n=!1,r,a){R(this,"kind");R(this,"x");R(this,"y");R(this,"homeX");R(this,"homeY");R(this,"r");R(this,"hp");R(this,"maxHp");R(this,"speed");R(this,"damage");R(this,"aggro");R(this,"attackRange");R(this,"windupT");R(this,"recoverT");R(this,"attackCd");R(this,"money");R(this,"drops");R(this,"keepDistance",0);R(this,"elite");R(this,"name");R(this,"key");R(this,"dead",!1);R(this,"state","idle");R(this,"t",0);R(this,"cd",Pe(.4,1.2));R(this,"facing",0);R(this,"hurtT",0);R(this,"kbx",0);R(this,"kby",0);R(this,"wanderT",0);R(this,"wanderAngle",Math.random()*gi);R(this,"lockAngle",0);R(this,"lockX",0);R(this,"lockY",0);R(this,"struck",!1);R(this,"animT",Math.random()*10);R(this,"group");R(this,"body");R(this,"legs");R(this,"telegraph");R(this,"tMat");R(this,"hpBg");R(this,"hpFill");const o=G0[t];if(this.kind=t,this.x=e,this.y=i,this.homeX=e,this.homeY=i,this.r=o.r*(n?1.3:1),this.maxHp=o.hp*(n?2.2:1),this.hp=this.maxHp,this.speed=o.speed*(n?.9:1),this.damage=o.damage*(n?1.35:1),this.aggro=o.aggro,this.attackRange=o.range,this.windupT=o.windup,this.recoverT=o.recover,this.attackCd=o.cd,this.money=o.money,this.drops=o.drops,this.keepDistance=o.keepDistance??0,this.elite=n,this.name=r,this.key=a,t==="wolf"){const d=A0(n);this.group=d.group,this.body=d.body,this.legs=d.legs}else if(t==="ghost"){const d=R0();this.group=d.group,this.body=d.body,this.legs=[]}else{const d=C0(n);this.group=d.group,this.body=d.body,this.legs=[]}const l=new bi(.9,1,40);l.rotateX(-Math.PI/2),this.tMat=new oe({color:t==="ghost"?"#63e0cf":"#ff6a4a",transparent:!0,opacity:.45,blending:He,side:pe,depthWrite:!1}),this.telegraph=new Mt(l,this.tMat),this.telegraph.visible=!1,this.telegraph.position.y=.07,this.group.add(this.telegraph);const c=t==="wolf"?1.3+(n?.2:0):t==="ghost"?2.55:2.85+(n?.2:0),h=V0();this.hpBg=new qi(new ls({map:h,color:658189,transparent:!0,opacity:.72,depthWrite:!1})),this.hpBg.scale.set(.92,.1,1),this.hpBg.position.y=c,this.hpBg.renderOrder=8,this.hpBg.visible=!1,this.group.add(this.hpBg),this.hpFill=new qi(new ls({map:h,color:n?16767113:16734794,transparent:!0,depthWrite:!1})),this.hpFill.center.set(0,.5),this.hpFill.scale.set(.84,.055,1),this.hpFill.position.set(-.42,c,0),this.hpFill.renderOrder=9,this.hpFill.visible=!1,this.group.add(this.hpFill),this.sync()}update(t,e){if(this.dead)return;if(this.animT+=t,this.hurtT=Math.max(0,this.hurtT-t),this.updateHpBar(e),Math.abs(this.kbx)>1||Math.abs(this.kby)>1){const a=e.world.collide(this.x+this.kbx*t,this.y+this.kby*t,this.r);this.x=a.x,this.y=a.y,this.kbx*=1-Math.min(1,t*10),this.kby*=1-Math.min(1,t*10)}const i=e.player;if(i.dead){this.state="idle",this.sync();return}const n=Me(this.x,this.y,i.x,i.y),r=qe(this.x,this.y,i.x,i.y);switch(this.state){case"idle":{if(this.wanderT-=t,this.wanderT<=0&&(this.wanderT=Pe(1.4,3.4),this.wanderAngle=Math.random()*gi),n<this.aggro){this.state="chase";break}Me(this.x,this.y,this.homeX,this.homeY)>120&&(this.wanderAngle=qe(this.x,this.y,this.homeX,this.homeY)),this.move(this.wanderAngle,this.speed*.32,t,e);break}case"chase":{if(this.facing=r,this.cd-=t,this.keepDistance>0)if(n<this.keepDistance*.8)this.move(r+Math.PI,this.speed,t,e);else if(n>this.keepDistance*1.15)this.move(r,this.speed,t,e);else{const a=this.animT%4<2?1:-1;this.move(r+Math.PI/2*a,this.speed*.5,t,e)}else this.move(r,this.speed,t,e);n<this.attackRange&&this.cd<=0&&(this.state="windup",this.t=this.windupT,this.lockAngle=r,this.lockX=i.x,this.lockY=i.y,this.struck=!1);break}case"windup":{this.facing=this.lockAngle,this.t-=t,this.kind==="ghost"&&(this.facing=qe(this.x,this.y,i.x,i.y),this.lockX=i.x,this.lockY=i.y),this.t<=0&&this.strike(e);break}case"strike":{this.t-=t,this.kind==="wolf"&&(this.move(this.lockAngle,470,t,e),!this.struck&&Me(this.x,this.y,i.x,i.y)<this.r+i.r+14&&(this.struck=!0,i.takeDamage(this.damage,this.x,this.y,e))),this.t<=0&&(this.state="recover",this.t=this.recoverT,this.cd=this.attackCd);break}case"recover":{this.t-=t,this.t<=0&&(this.state="chase");break}}this.x=Ln(this.x,this.r,e.region.w-this.r),this.y=Ln(this.y,this.r,e.region.h-this.r),this.sync()}move(t,e,i,n){const r=n.world.collide(this.x+Math.cos(t)*e*i,this.y+Math.sin(t)*e*i,this.r);this.x=r.x,this.y=r.y}strike(t){const e=t.player;if(this.kind==="wolf"){this.state="strike",this.t=.22,this.struck=!1,t.fx.slash(this.x,this.y,this.lockAngle,62,"#ff6a5a",1.2,5,.3),t.audio.swing();return}if(this.kind==="monk"){t.fx.ring(this.lockX,this.lockY,10,88,"rgba(255,120,80,0.7)",4,.4),t.fx.burst(this.lockX,this.lockY,{count:18,color:"#c9a06a",color2:"#ff9a6a",speed:180,size:3,life:.5}),t.shake(6),t.audio.hit(),Me(this.lockX,this.lockY,e.x,e.y)<88+e.r&&e.takeDamage(this.damage,this.lockX,this.lockY,t),this.state="recover",this.t=this.recoverT,this.cd=this.attackCd;return}const i=qe(this.x,this.y-18,this.lockX,this.lockY);t.spawnProjectile(this.x,this.y-18,i,300,this.damage,"fire"),t.fx.burst(this.x,this.y-18,{count:12,color:"#63e0cf",color2:"#d8fffa",speed:90,size:2.6,life:.5}),t.audio.swing(),this.state="recover",this.t=this.recoverT,this.cd=this.attackCd}takeDamage(t,e,i){if(this.dead)return;const n=Math.max(1,Math.round(t));this.hp-=n,this.hurtT=.16,this.kbx+=Math.cos(e)*150,this.kby+=Math.sin(e)*150,i.fx.text(this.x+Pe(-6,6),this.y-20,`${n}`,this.elite?"#ffd889":"#ffffff",this.elite?18:15),i.fx.burst(this.x,this.y,{count:6,color:"#ff8a6a",color2:"#ffe6c8",speed:150,size:2.2,life:.3,angle:e,spread:1.8}),this.state="chase",this.cd=Math.max(this.cd,.35),this.hp<=0&&(this.hp=0,this.die(i))}updateHpBar(t){const e=this.maxHp>0?this.hp/this.maxHp:0,i=!this.dead&&e<.999&&Me(this.x,this.y,t.player.x,t.player.y)<1400;this.hpBg.visible=i,this.hpFill.visible=i,i&&(this.hpFill.scale.x=.84*Math.max(0,e))}die(t){this.dead=!0,this.hpBg.visible=!1,this.hpFill.visible=!1,t.fx.burst(this.x,this.y,{count:this.elite?46:22,color:this.kind==="ghost"?"#63e0cf":"#c94a3f",color2:"#ffd0a0",speed:this.elite?260:180,size:3,life:.9,grav:-30}),t.fx.ring(this.x,this.y,8,this.elite?110:54,"rgba(255,160,110,0.6)",3,.5),t.onEnemyKilled(this)}sync(){if(this.group.position.set(this.x*at,0,this.y*at),this.group.rotation.y=-this.facing,this.hurtT>0?this.body.position.x=Math.sin(this.hurtT*70)*.05:this.body.position.x=0,this.kind==="wolf"){const e=this.state==="chase"||this.state==="strike"?1:.25,i=Math.sin(this.animT*15)*.55*e;for(let n=0;n<this.legs.length;n++)this.legs[n].rotation.z=n%2===0?i:-i;this.body.rotation.z=this.state==="windup"?-.2:this.state==="strike"?.22:0,this.body.position.y=Math.abs(Math.sin(this.animT*15))*.04*e}else this.kind==="ghost"?(this.body.position.y=.3+Math.sin(this.animT*2.2)*.12,this.body.rotation.z=Math.sin(this.animT*1.3)*.06):this.body.rotation.z=this.state==="windup"?-.12:0;const t=this.state==="windup";if(this.telegraph.visible=t,t){const e=this.kind==="monk"?this.lockX:this.x+Math.cos(this.lockAngle)*34,i=this.kind==="monk"?this.lockY:this.y+Math.sin(this.lockAngle)*34;this.telegraph.position.set((e-this.x)*at,.07,(i-this.y)*at);const n=(this.kind==="monk"?88:62)*at;this.telegraph.scale.setScalar(n);const r=1-this.t/Math.max(.001,this.windupT);this.tMat.opacity=.25+r*.35,this.telegraph.rotation.y=-this.animT*1.5}}dispose(){ds(this.group),this.group.removeFromParent()}}class X0{constructor(t,e,i,n,r,a){R(this,"x");R(this,"y");R(this,"vx");R(this,"vy");R(this,"damage");R(this,"kind");R(this,"life",4);R(this,"dead",!1);R(this,"group");R(this,"glow");this.x=t,this.y=e,this.vx=Math.cos(i)*n,this.vy=Math.sin(i)*n,this.damage=r,this.kind=a;const o=a==="fire"?"#ff6a4a":"#63e0cf";this.group=new Ht;const l=new Mt(new je(.16,8,7),new oe({color:o}));this.group.add(l),this.glow=fe(o,1.1,.85),this.group.add(this.glow),this.group.position.set(t*at,.8,e*at)}update(t,e){if(this.dead)return;this.life-=t,this.x+=this.vx*t,this.y+=this.vy*t;const i=.65+Math.sin(this.life*18)*.06;if(this.group.position.set(this.x*at,i,this.y*at),e.fx.embers(this.x,this.y,1,this.kind==="fire"?"#ff8a4a":"#63e0cf"),this.life<=0||this.x<0||this.y<0||this.x>e.region.w||this.y>e.region.h){this.dead=!0;return}if(e.world.pointBlocked(this.x,this.y)){this.dead=!0,e.fx.burst(this.x,this.y,{count:14,color:this.kind==="fire"?"#ff8a4a":"#63e0cf",color2:"#ffe6c8",speed:170,size:2.4,life:.4});return}const n=e.player;!n.dead&&Me(this.x,this.y,n.x,n.y)<n.r+13&&(n.takeDamage(this.damage,this.x,this.y,e),this.dead=!0,e.fx.burst(this.x,this.y,{count:18,color:this.kind==="fire"?"#ff8a4a":"#63e0cf",color2:"#fff0d8",speed:200,size:2.8,life:.5}))}dispose(){ds(this.group),this.group.removeFromParent()}}const q0={dash:.72,combo:.48,ring:.95,spikes:.6,summon:.75,ultimate:1.05};class Ol{constructor(t,e){R(this,"x");R(this,"y");R(this,"r",30);R(this,"hp",1e3);R(this,"maxHp",1e3);R(this,"phase",1);R(this,"dead",!1);R(this,"state","intro");R(this,"t",1.6);R(this,"cd",1.4);R(this,"facing",0);R(this,"attack","");R(this,"lockAngle",0);R(this,"invuln",1.4);R(this,"hurtT",0);R(this,"animT",0);R(this,"ringR",60);R(this,"ringHit",!1);R(this,"dashHit",!1);R(this,"comboFlags",[!0,!0,!0]);R(this,"spikes",[]);R(this,"ultTimer",0);R(this,"ultWave",0);R(this,"summonCount",0);R(this,"model");R(this,"ringTick",0);R(this,"comboVisual",0);this.x=t,this.y=e,this.facing=Math.PI/2,this.model=P0(),this.model.group.position.set(t*at,0,e*at),this.model.group.rotation.y=-this.facing}update(t,e){if(this.dead)return;this.animT+=t,this.hurtT=Math.max(0,this.hurtT-t),this.invuln=Math.max(0,this.invuln-t),this.comboVisual=Math.max(0,this.comboVisual-t);for(const a of this.spikes)if(a.triggered){if(a.life-=t,a.shards){const o=Math.max(0,a.life/.45);a.shards.scale.set(1,.4+o*.6,1),a.shards.position.y=(1-o)*-1.4}}else{if(a.t-=t,a.warn){const o=1-a.t/a.max;a.warn.scale.setScalar(a.r*at);const l=a.warn.material;l.opacity=.2+Math.sin(o*24)*.1+o*.22}a.t<=0&&(a.triggered=!0,a.life=.45,a.warn&&(a.warn.visible=!1),this.buildShards(a,e),e.fx.ring(a.x,a.y,8,a.r+10,"rgba(255,90,60,0.9)",5,.35),e.fx.burst(a.x,a.y,{count:20,color:"#ff5a3a",color2:"#ffd27a",speed:240,size:3,life:.6,grav:-60}),e.shake(7),e.audio.hit(),Me(a.x,a.y,e.player.x,e.player.y)<a.r+e.player.r&&e.player.takeDamage(20,a.x,a.y,e))}for(let a=this.spikes.length-1;a>=0;a--){const o=this.spikes[a];o.triggered&&o.life<=0&&(this.cleanSpike(o),this.spikes.splice(a,1))}const i=e.player;if(i.dead){this.state="idle",this.sync(t);return}const n=Me(this.x,this.y,i.x,i.y),r=qe(this.x,this.y,i.x,i.y);switch(this.state!=="dash"&&this.state!=="combo"&&(this.facing=Ll(this.facing,r,Math.min(1,t*2.4))),this.state){case"intro":this.t-=t,this.t<=0&&(this.state="idle",this.cd=1);break;case"idle":{n>300?this.move(r,92,t,e):n<140&&this.move(r+Math.PI,64,t,e),this.cd-=t,this.cd<=0&&this.chooseAttack(e);break}case"windup":{this.t-=t,this.t<=0&&this.execute(e);break}case"dash":{this.t-=t,this.move(this.lockAngle,820,t,e),e.fx.embers(this.x,this.y,2,"#ff4a3a");const a=Me(this.x,this.y,i.x,i.y);!this.dashHit&&a<this.r+i.r+14&&(this.dashHit=!0,i.takeDamage(24,this.x,this.y,e),e.fx.slash(this.x,this.y,this.lockAngle,90,"#ff4a3a",2.4,12,.6)),this.t<=0&&this.recover(.55);break}case"combo":{this.t-=t;const a=[1.02,.68,.34];for(let o=0;o<3;o++)if(!this.comboFlags[o]&&this.t<=a[o]){this.comboFlags[o]=!0,this.comboVisual=.26;const l=qe(this.x,this.y,i.x,i.y);this.facing=Ll(this.facing,l,.55),e.fx.slash(this.x+Math.cos(this.facing)*30,this.y+Math.sin(this.facing)*30,this.facing,120,"#ff4a4a",2.2,12,.7),e.shake(6),e.audio.swing(),n<145&&Math.abs(is(this.facing,l))<1.5&&i.takeDamage(15,this.x,this.y,e)}this.t<=0&&this.recover(.5);break}case"ring":{this.t-=t,this.ringR+=560*t,this.ringTick-=t,this.ringTick<=0&&(this.ringTick=.07,e.fx.ring(this.x,this.y,this.ringR,this.ringR+18,"rgba(255,80,60,0.55)",3,.3)),!this.ringHit&&Math.abs(n-this.ringR)<30&&(this.ringHit=!0,i.takeDamage(20,this.x,this.y,e)),this.t<=0&&this.recover(.55);break}case"ultimate":{if(this.t-=t,this.ultTimer-=t,this.ultTimer<=0&&this.ultWave<3){this.ultTimer=.34;const a=this.ultWave*.18;for(let o=0;o<12;o++){const l=o/12*gi+a+this.animT;e.spawnProjectile(this.x,this.y-10,l,240,12,"soul")}this.ultWave++,e.shake(8),e.audio.skill2()}this.t<=0&&this.recover(.7);break}case"phase":{this.t-=t,this.t<=0&&(this.state="idle",this.cd=.9);break}case"recover":{this.t-=t,this.t<=0&&(this.state="idle",this.cd=.5);break}}this.sync(t)}buildShards(t,e){const i=new Ht,n=new ao({color:"#3a2a26",roughness:1,flatShading:!0});for(let r=0;r<6;r++){const a=r/6*gi,o=new Mt(new ge(.28,1.3,4),n);o.position.set(Math.cos(a)*.55,.55,Math.sin(a)*.55),o.rotation.z=Math.cos(a)*.4,o.rotation.x=-Math.sin(a)*.4,i.add(o)}i.position.set(t.x*at,0,t.y*at),i.scale.set(t.r/48,.4,t.r/48),e.world.scene.add(i),t.shards=i}cleanSpike(t){t.warn&&(t.warn.removeFromParent(),t.warn.geometry.dispose(),t.warn.material.dispose(),t.warn=void 0),t.shards&&(ds(t.shards),t.shards.removeFromParent(),t.shards=void 0)}move(t,e,i,n){const r=n.world.collide(this.x+Math.cos(t)*e*i,this.y+Math.sin(t)*e*i,this.r);this.x=r.x,this.y=r.y}recover(t){this.state="recover",this.t=t}chooseAttack(t){const e=Math.random();let i;this.phase===1?i=e<.36?"dash":e<.7?"combo":"ring":this.phase===2?i=e<.24?"dash":e<.48?"combo":e<.68?"ring":e<.87?"spikes":"summon":i=e<.18?"dash":e<.36?"combo":e<.52?"ring":e<.72?"spikes":e<.88?"summon":"ultimate",i==="summon"&&this.summonCount>=3&&(i="combo"),this.attack=i,this.state="windup",this.t=q0[i]??.7,this.lockAngle=qe(this.x,this.y,t.player.x,t.player.y),t.audio.bossRoar()}execute(t){const e=t.player;if(this.attack==="dash")this.state="dash",this.t=.3,this.dashHit=!1,this.lockAngle=qe(this.x,this.y,e.x,e.y),t.audio.skill1();else if(this.attack==="combo")this.state="combo",this.t=1.3,this.comboFlags=[!1,!1,!1],t.audio.skill1();else if(this.attack==="ring")this.state="ring",this.t=.7,this.ringR=60,this.ringHit=!1,this.ringTick=0,t.audio.skill3(),t.fx.ring(this.x,this.y,50,90,"rgba(255,80,60,0.6)",4,.4);else if(this.attack==="spikes"){for(let i=0;i<3;i++){const n=e.x+Pe(-26,26)*i,r=e.y+Pe(-26,26)*i,a={x:n,y:r,t:.5+i*.3,max:.5+i*.3,r:48,triggered:!1,life:0},o=new bi(.9,1,40);o.rotateX(-Math.PI/2);const l=new oe({color:"#ff5a3a",transparent:!0,opacity:.35,blending:He,side:pe,depthWrite:!1}),c=new Mt(o,l);c.position.set(n*at,.06,r*at),c.scale.setScalar(48*at),t.world.scene.add(c),a.warn=c,this.spikes.push(a)}t.audio.bossRoar(),this.recover(1.15)}else if(this.attack==="summon"){this.summonCount++;for(let i=0;i<2;i++){const n=Math.random()*gi;t.spawnEnemy("ghost",this.x+Math.cos(n)*90,this.y+Math.sin(n)*90)}t.fx.rune(this.x,this.y,100,"#ff5a4a",.8),t.fx.ring(this.x,this.y,30,140,"rgba(255,70,60,0.7)",4,.6),t.audio.bossRoar(),this.recover(1)}else this.attack==="ultimate"?(this.state="ultimate",this.t=1.5,this.ultWave=0,this.ultTimer=.05,t.audio.bossRoar(),t.shake(12)):this.recover(.6)}takeDamage(t,e,i){if(this.dead||this.invuln>0)return;const n=Math.max(1,Math.round(t));if(this.hp-=n,this.hurtT=.14,i.fx.text(this.x+Pe(-10,10),this.y-40,`${n}`,"#ffe0b0",17),i.fx.burst(this.x,this.y,{count:8,color:"#ff6a4a",color2:"#ffd8a0",speed:180,size:2.6,life:.4,angle:e,spread:2}),this.hp<=0){this.hp=0,this.die(i);return}const r=this.hp/this.maxHp;this.phase===1&&r<=.66?this.enterPhase(2,i):this.phase===2&&r<=.33&&this.enterPhase(3,i)}enterPhase(t,e){this.phase=t,this.state="phase",this.t=1.15,this.invuln=1.3;for(const i of this.spikes)this.cleanSpike(i);this.spikes=[],e.shake(20),e.flash("#ff4632",.45),e.slowmo(.5,.35),e.audio.bossRoar(),e.fx.ring(this.x,this.y,30,260,"rgba(255,70,50,0.9)",7,.7),e.fx.ring(this.x,this.y,10,200,"rgba(255,220,160,0.8)",3,.55),e.fx.burst(this.x,this.y,{count:60,color:"#ff4a3a",color2:"#ffcf8a",speed:380,size:3.4,life:1}),e.banner(t===2?"无面 · 二相":"无面 · 三相",t===2?"「你的刀，开始像他了。」":"「看清楚——面具下面是谁。」"),t===2&&(e.spawnEnemy("ghost",this.x+110,this.y),e.spawnEnemy("ghost",this.x-110,this.y))}die(t){this.dead=!0,this.model.body.rotation.z=-1.35,this.model.body.position.y=.25,this.model.aura.visible=!1,t.fx.burst(this.x,this.y,{count:90,color:"#ff4a3a",color2:"#ffe2b0",speed:380,size:4,life:1.4,grav:-20}),t.fx.ring(this.x,this.y,20,320,"rgba(255,90,60,0.9)",8,1),t.shake(24),t.flash("#fff0dc",.8),t.audio.bossRoar(),t.onBossDefeated()}sync(t){const e=this.model;e.group.position.set(this.x*at,0,this.y*at),e.group.rotation.y=-this.facing;const i=Math.sin(this.animT*2)*.04;if(e.body.position.y=i+(this.hurtT>0?Math.sin(this.hurtT*80)*.03:0),e.capeL.rotation.z=.14+Math.sin(this.animT*2)*.05,e.capeR.rotation.z=-.14+Math.sin(this.animT*2+1)*.05,this.state==="combo"&&this.comboVisual>0){const a=1-this.comboVisual/.26;e.sword.rotation.y=-.9+a*2.2}else this.state==="windup"?e.sword.rotation.y=-1.35:this.state==="dash"?e.sword.rotation.y=.4:e.sword.rotation.y=-.35+Math.sin(this.animT*1.4)*.05;const n=e.aura.material;n.opacity=.35+Math.sin(this.animT*4)*.12+(this.phase-1)*.1,e.aura.rotation.z+=t*(.6+this.phase*.3);const r=e.glow.material;r.opacity=.28+(this.phase-1)*.14+Math.sin(this.animT*5)*.06,e.glow.scale.setScalar(3.2+(this.phase-1)*.8+Math.sin(this.animT*3)*.2)}dispose(){for(const t of this.spikes)this.cleanSpike(t);this.spikes.length=0,ds(this.model.group),this.model.group.removeFromParent()}}class Y0{constructor(t){R(this,"canvas");R(this,"renderer");R(this,"camera");R(this,"composer");R(this,"renderPass");R(this,"bloom");R(this,"ui");R(this,"input");R(this,"audio",new h0);R(this,"fx");R(this,"world");R(this,"region",Il("town"));R(this,"player",new Fl(1060,1020));R(this,"enemies",[]);R(this,"boss",null);R(this,"projectiles",[]);R(this,"pickups",[]);R(this,"flags",new Set);R(this,"mode","title");R(this,"time",0);R(this,"last",0);R(this,"elapsed",0);R(this,"slowT",0);R(this,"slowScale",1);R(this,"flashAlpha",0);R(this,"flashColor","#ffffff");R(this,"shakeAmp",0);R(this,"punch",0);R(this,"victoryDelay",0);R(this,"bossTriggered",!1);R(this,"promptTarget",null);R(this,"ambientT",0);R(this,"openedChests",new Set);R(this,"goneNodes",new Set);R(this,"kills",{wolf:0,ghost:0,monk:0,total:0});R(this,"perfectDodges",0);R(this,"spawnPoint",{region:"town",x:1060,y:1020});R(this,"yaw",-Math.PI/2);R(this,"pitch",.42);R(this,"camDist",9.6);R(this,"camDistCur",9.6);R(this,"camTarget",new F);R(this,"dragging",!1);R(this,"locked",!1);R(this,"flashEl");R(this,"crosshair");R(this,"frame",t=>{const e=this.last?Math.min(.05,(t-this.last)/1e3):.016;if(this.last=t,this.time+=e,this.mode==="playing"&&!this.ui.isOpen()){this.victoryDelay>0&&(this.victoryDelay-=e,this.victoryDelay<=0&&this.showVictory());const i=e*(this.slowT>0?this.slowScale:1);this.slowT>0&&(this.slowT-=e),this.update(i,e),this.elapsed+=e}this.fx&&this.fx.update(e),this.world&&this.world.update(e),this.flashAlpha=Math.max(0,this.flashAlpha-e*2.6),this.flashEl.style.opacity=String(Math.min(1,this.flashAlpha)),this.updateCamera(e),this.crosshair&&this.crosshair.classList.toggle("on",this.locked&&this.mode==="playing"&&!this.ui.isOpen()),this.composer.render(),this.input.endFrame(),requestAnimationFrame(this.frame)});this.canvas=t,this.renderer=this.createRenderer(t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.25)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=Ie,this.renderer.toneMapping=dr,this.renderer.toneMappingExposure=1.16,this.camera=new li(56,window.innerWidth/window.innerHeight,.1,240),this.camera.position.set(0,10,10),this.composer=new r0(this.renderer),this.renderPass=new a0(this.region?new Fa:new Fa,this.camera),this.composer.addPass(this.renderPass),this.bloom=new Bn(new Rt(window.innerWidth,window.innerHeight),.58,.55,.8),this.composer.addPass(this.bloom),this.composer.addPass(new l0),this.flashEl=document.getElementById("flash3d"),this.crosshair=document.getElementById("crosshair"),this.input=new c0(t),this.ui=new g0(document.getElementById("ui"),{onStart:()=>this.startRun(),onRespawn:()=>this.respawn(),onRestart:()=>{this.ui.hideVictory(),this.startRun()},onTitle:()=>this.toTitle(),onUseItem:e=>{this.useItem(e),this.ui.refreshPanel(this.snapshot())},onBuy:e=>this.buy(e),onCraft:e=>this.craft(e),onClosePanel:()=>{this.ui.setPrompt(null),this.input.mouse.down=!1,this.requestLock()},onResume:()=>{this.audio.ui(),this.input.mouse.down=!1,this.requestLock()},onDialogueEnd:()=>{this.input.pressed.clear(),this.input.mouse.clicked=!1,this.requestLock()}}),this.loadRegion("town",1060,1020,!1),this.bindCameraControls(),window.addEventListener("resize",()=>this.resize()),window.addEventListener("keydown",e=>this.onGlobalKey(e)),this.requestFrame()}createRenderer(t){try{return new Cl({canvas:t,antialias:!0,powerPreference:"high-performance"})}catch(e){console.warn("[烬影·墨刃] 高性能 WebGL 初始化失败，尝试兼容模式",e);try{return new Cl({canvas:t,antialias:!1,powerPreference:"default",stencil:!1})}catch{throw new Error("当前环境无法创建 WebGL 上下文。请开启浏览器硬件加速，或使用 Chrome / Edge 打开。")}}}startRun(){this.audio.init(),this.audio.startDrone(),this.flags.clear(),this.openedChests.clear(),this.goneNodes.clear(),this.kills={wolf:0,ghost:0,monk:0,total:0},this.perfectDodges=0,this.player=new Fl(1060,1020),this.player.money=80,this.player.inv.add("pill_heal",3),this.player.inv.add("pill_chi",1),this.mode="playing",this.elapsed=0,this.slowT=0,this.flashAlpha=0,this.spawnPoint={region:"town",x:1060,y:1020},this.ui.showHUD(),this.loadRegion("town",1060,1020,!0),this.ui.setMoney(this.player.money),this.ui.toast("点击画面锁定视角 · WASD 移动 · 左键挥刀 · 1/2/3 武学"),this.updateObjective(),this.openDialogue([{speaker:"旁白",text:"三日前，烬门在一场红雨里灭了。"},{speaker:"旁白",text:"师父把刀塞进你手里，只说了最后一句话——「别相信脸」。"},{speaker:"旁白",text:"你追着凶手的痕迹，来到青石镇。"}],()=>this.ui.toast("去找镇中的说书人问问吧"))}toTitle(){this.mode="title",this.ui.hideDeath(),this.ui.hideVictory(),this.ui.showTitle(),this.audio.setRegionMood(0),this.input.mouse.down=!1,document.exitPointerLock?.(),this.loadRegion("town",1060,1020,!1)}respawn(){const t=Math.floor(this.player.money*.2);this.player.money-=t;const e=this.spawnPoint;this.player.reset(e.x,e.y),this.mode="playing",this.slowT=0,this.flashAlpha=0,this.ui.hideDeath(),this.ui.showHUD(),this.loadRegion(e.region,e.x,e.y,!0),t>0&&this.ui.toast(`散落铜钱 ${t} 文`),this.ui.setMoney(this.player.money),this.snapCamera(),this.requestLock()}loadRegion(t,e,i,n){this.world&&(this.fx?.dispose(),this.world.scene.remove(this.player.model.group),this.world.dispose()),this.enemies=[],this.boss=null,this.projectiles=[],this.pickups=[],this.bossTriggered=!1,this.victoryDelay=0,this.promptTarget=null,this.ui.setPrompt(null),this.ui.hideBoss(),this.region=Il(t),this.world=new k0(this.region,this.openedChests,this.goneNodes),this.renderPass.scene=this.world.scene,this.fx=new H0(this.world.scene),this.player.x=e,this.player.y=i,this.player.kbx=0,this.player.kby=0,this.player.dodgeT=0,this.player.dashT=0,this.player.channel=0,this.player.bladeT=0,this.player.invuln=Math.max(this.player.invuln,.6),this.player.dead=!1,this.player.model.spin.rotation.z=0,this.player.model.spin.position.y=0,this.world.scene.add(this.player.model.group);for(const o of this.region.spawns)if(!(o.key&&this.flags.has(o.key)))for(let l=0;l<o.count;l++){const c=o.count===1?0:Pe(-o.radius,o.radius),h=o.count===1?0:Pe(-o.radius,o.radius),d=this.world.collide(o.x+c,o.y+h,16);this.spawnEnemy(o.kind,d.x,d.y,o.elite,o.name,o.key)}this.refreshPortals();const r=this.region.w/2,a=this.region.h/2;if(this.yaw=qe(e,i,r,a),this.pitch=.42,this.snapCamera(),this.ui.setRegion(this.region.name),this.audio.setRegionMood(["town","forest","temple","cliff"].indexOf(this.region.id)),this.updateObjective(),n){const o={town:"红雨之后，你回来了",forest:"枯木成林，狼嚎不止",temple:"佛前残灯，照不亮所有角落",cliff:"风很冷，像刀"};this.ui.banner(this.region.name,o[this.region.id])}}refreshPortals(){for(const t of this.world.portals){const e=!t.def.need||this.flags.has(t.def.need);this.world.setPortalUnlocked(t.def,e)}}snapCamera(){this.camTarget.set(this.player.x*at,1.15,this.player.y*at),this.camDistCur=this.camDist}resize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.composer.setSize(t,e)}bindCameraControls(){this.canvas.addEventListener("pointerdown",t=>{if(t.button===2){this.dragging=!0;return}t.button===0&&(this.mode!=="playing"||this.ui.isOpen()||document.pointerLockElement!==this.canvas&&this.requestLock())}),window.addEventListener("pointerup",t=>{t.button===2&&(this.dragging=!1)}),window.addEventListener("mousemove",t=>{this.mode!=="playing"||this.ui.isOpen()||!this.locked&&!this.dragging||(this.yaw+=t.movementX*.0026,this.pitch=Ln(this.pitch-t.movementY*.0019,.07,1.05))}),document.addEventListener("pointerlockchange",()=>{const t=this.locked;this.locked=document.pointerLockElement===this.canvas,this.crosshair.classList.toggle("on",this.locked&&this.mode==="playing"),t&&!this.locked&&this.mode==="playing"&&!this.ui.isOpen()&&(this.audio.ui(),this.input.mouse.down=!1,this.ui.setPrompt(null),this.ui.openPause())}),document.addEventListener("pointerlockerror",()=>{this.locked=!1,this.crosshair.classList.remove("on")}),this.canvas.addEventListener("wheel",t=>{this.mode!=="playing"||this.ui.isOpen()||(this.camDist=Ln(this.camDist+Math.sign(t.deltaY)*.8,5.5,16))},{passive:!0}),this.canvas.addEventListener("contextmenu",t=>t.preventDefault())}requestLock(){if(!(this.mode!=="playing"||this.ui.isOpen())&&document.pointerLockElement!==this.canvas)try{const t=this.canvas.requestPointerLock();t&&typeof t.catch=="function"&&t.catch(()=>{})}catch{}}onGlobalKey(t){this.mode!=="playing"||this.ui.isDialogueOpen()||(t.code==="Tab"?(t.preventDefault(),this.ui.isPanelOpen()?(this.ui.closePanel(),this.requestLock()):(this.audio.ui(),this.input.mouse.down=!1,this.ui.setPrompt(null),document.exitPointerLock?.(),this.ui.openInventory(this.snapshot()))):t.code==="Escape"?(t.preventDefault(),this.ui.isPanelOpen()?(this.ui.closePanel(),this.requestLock()):(this.audio.ui(),this.input.mouse.down=!1,this.ui.setPrompt(null),document.exitPointerLock?.(),this.ui.openPause())):t.code==="KeyH"?this.ui.isPanelOpen()?(this.ui.closePanel(),this.requestLock()):(this.audio.ui(),this.ui.setPrompt(null),document.exitPointerLock?.(),this.ui.openHelp()):t.code==="KeyM"&&(this.audio.setMuted(!this.audio.muted),this.ui.toast(this.audio.muted?"已静音":"已恢复声音")))}openDialogue(t,e){this.input.mouse.down=!1,this.ui.setPrompt(null),document.exitPointerLock?.(),this.ui.showDialogue(t,()=>{this.input.pressed.clear(),this.input.mouse.clicked=!1,e(),this.requestLock()})}requestFrame(){requestAnimationFrame(this.frame)}update(t,e){const i=this.input.moveX,n=this.input.moveY,r=Math.cos(this.yaw),a=Math.sin(this.yaw),o=-Math.sin(this.yaw),l=Math.cos(this.yaw);let c=r*-n+o*i,h=a*-n+l*i;const d=Math.hypot(c,h);d>0&&(c/=d,h/=d),this.player.update(t,{x:c,y:h,len:Math.min(1,d)},this.yaw,this);for(const u of this.enemies)u.update(t,this);for(let u=this.enemies.length-1;u>=0;u--)this.enemies[u].dead&&(this.enemies[u].dispose(),this.enemies.splice(u,1));this.boss&&(this.boss.dead||this.boss.update(t,this));for(const u of this.projectiles)u.update(t,this);for(let u=this.projectiles.length-1;u>=0;u--)this.projectiles[u].dead&&(this.projectiles[u].dispose(),this.projectiles.splice(u,1));this.updatePickups(t),this.spawnAmbient(e),this.region.boss&&!this.bossTriggered&&!this.flags.has("boss_dead")&&this.player.x>this.region.boss.triggerX&&this.triggerBoss(),this.promptTarget=this.findInteractable(),this.promptTarget?(this.ui.setPrompt(this.promptText(this.promptTarget)),this.input.wasPressed("KeyE")&&this.interact(this.promptTarget)):this.ui.setPrompt(null),this.input.wasPressed("KeyQ")&&this.useItem("pill_heal"),this.input.wasPressed("KeyR")&&this.useItem("pill_chi"),this.syncHud(),this.boss&&!this.boss.dead?this.ui.showBoss("无面",this.boss.hp,this.boss.maxHp,this.boss.phase):this.ui.hideBoss()}updateCamera(t){if(this.mode==="title"||!this.world){const u=this.region.w*at/2,f=this.region.h*at/2,_=this.time*.07+.7,y=22;this.camera.position.set(u+Math.cos(_)*y,11.5,f+Math.sin(_)*y),this.camera.lookAt(u,1.2,f);return}this.camTarget.lerp(new F(this.player.x*at,1.15,this.player.y*at),1-Math.exp(-9*t)),this.shakeAmp*=Math.exp(-t*7),this.punch*=Math.exp(-t*6);const e=this.camDist-this.punch*.055,i=Math.cos(this.pitch),n=Math.sin(this.pitch),r=Math.cos(this.yaw),a=Math.sin(this.yaw);let o=e;const l=18;for(let u=1;u<=l;u++){const f=u/l,_=this.camTarget.x-r*i*e*f,y=this.camTarget.z-a*i*e*f;if(this.world.pointBlocked(_/at,y/at)){o=Math.max(3.1,e*(u-1)/l-.3);break}}o<this.camDistCur?this.camDistCur=o:this.camDistCur+=(o-this.camDistCur)*(1-Math.exp(-3.2*t));const c=this.camDistCur,h=new F(this.camTarget.x-r*i*c,this.camTarget.y+n*c,this.camTarget.z-a*i*c);if(h.x=Ln(h.x,.4,this.region.w*at-.4),h.z=Ln(h.z,.4,this.region.h*at-.4),h.y=Math.max(h.y,.9),this.shakeAmp>.01){const u=this.shakeAmp*.02;h.x+=(Math.random()-.5)*u,h.y+=(Math.random()-.5)*u,h.z+=(Math.random()-.5)*u}this.camera.position.copy(h);const d=new F(this.camTarget.x+r*2.2,this.camTarget.y+.15,this.camTarget.z+a*2.2);this.shakeAmp>.01&&(d.x+=(Math.random()-.5)*this.shakeAmp*.012,d.y+=(Math.random()-.5)*this.shakeAmp*.012),this.camera.lookAt(d)}findInteractable(){const t=this.player.x,e=this.player.y;let i=null;const n=r=>{(!i||r.d<i.d)&&(i=r)};for(const r of this.region.npcs){const a=Me(t,e,r.x,r.y);a<96&&n({kind:"npc",npc:r,d:a})}for(const r of this.region.portals){const a=Me(t,e,r.x,r.y);a<130&&n({kind:"portal",portal:r,d:a})}for(const r of this.world.nodes){if(!r.alive)continue;const a=Me(t,e,r.def.x,r.def.y);a<84&&n({kind:"node",node:r,d:a})}for(const r of this.world.chests){if(r.opened)continue;const a=Me(t,e,r.def.x,r.def.y);a<86&&n({kind:"chest",chest:r,d:a})}if(this.region.shrine){const r=Me(t,e,this.region.shrine.x,this.region.shrine.y);r<96&&n({kind:"shrine",x:this.region.shrine.x,y:this.region.shrine.y,d:r})}return i}promptText(t){switch(t.kind){case"npc":return`交谈 · ${t.npc.name}`;case"portal":return!t.portal.need||this.flags.has(t.portal.need)?`前往 ${t.portal.label}`:`${t.portal.label} · 封闭`;case"node":return`采集 ${Xe[t.node.def.item].name}`;case"chest":return"开启木箱";case"shrine":return"调息 · 记录重生点"}}interact(t){if(t.kind==="npc"){this.openNpc(t.npc);return}if(t.kind==="portal"){if(t.portal.need&&!this.flags.has(t.portal.need)){this.ui.toast(t.portal.hint??"此路不通"),this.audio.deny();return}this.audio.gate(),this.ui.setPrompt(null),this.input.mouse.down=!1,this.ui.fade(()=>this.loadRegion(t.portal.to,t.portal.tx,t.portal.ty,!0));return}if(t.kind==="node"){const e=t.node.def;t.node.alive=!1,t.node.timer=45,this.world.setNodeVisible(t.node,!1),this.goneNodes.add(e.id),this.player.inv.add(e.item,e.count),this.audio.pickup(),this.ui.toast(`获得 ${Xe[e.item].name} ×${e.count}`),this.fx.burst(e.x,e.y-10,{count:20,color:e.item==="ghostfire"?"#63e8d6":"#7ad08e",color2:"#e8ffdc",speed:110,size:2.6,life:.8,grav:-40}),window.setTimeout(()=>this.goneNodes.delete(e.id),45e3);return}if(t.kind==="chest"){const e=t.chest;e.opened=!0,this.world.openChest(e),this.openedChests.add(e.def.id),e.def.money&&(this.player.money+=e.def.money),e.def.item&&this.player.inv.add(e.def.item,e.def.count??1),this.audio.buy();const i=[];e.def.money&&i.push(`${e.def.money} 文`),e.def.item&&i.push(`${Xe[e.def.item].name} ×${e.def.count??1}`),this.ui.toast(`开箱：${i.join(" · ")}`),this.fx.burst(e.def.x,e.def.y-16,{count:30,color:"#e8c86a",color2:"#fff4c8",speed:160,size:3,life:.85,grav:-50}),this.fx.ring(e.def.x,e.def.y,8,70,"rgba(255,210,120,0.6)",3,.5),this.ui.setMoney(this.player.money);return}this.player.hp=this.player.maxHp,this.player.chi=this.player.maxChi,this.player.stamina=this.player.maxStamina,this.spawnPoint={region:this.region.id,x:t.x+30,y:t.y+40},this.audio.heal(),this.ui.banner("残灯不灭","气血与内力已复原，此处可作重生之地"),this.fx.ring(t.x,t.y,10,100,"rgba(255,200,120,0.7)",3,.8),this.fx.burst(t.x,t.y,{count:30,color:"#ffd27a",color2:"#fff6dc",speed:90,size:2.6,life:1.2,grav:-30})}openNpc(t){const e=S0(t.id,this.flags);this.audio.ui(),this.openDialogue(e.lines,()=>this.afterDialog(t.id))}afterDialog(t){t==="storyteller"&&!this.flags.has("story")&&(this.flags.add("story"),this.ui.banner("江湖路远","新目标：穿过东门，前往枯木林"),this.ui.toast("说书人提到了「无面」与断崖古寺")),t==="merchant"&&(this.flags.has("supplies")||(this.flags.add("supplies"),this.player.inv.add("pill_heal",3),this.ui.banner("故人一炷香","获得 回春丹 ×3")),this.openShop()),t==="blacksmith"&&!this.flags.has("forge")&&(this.flags.add("forge"),this.player.inv.add("bone",3),this.ui.banner("刀要养，人也要养","获得 兽骨 ×3")),t==="guard"&&this.ui.toast("老秦：斩够六头影狼，其余的不敢跟。"),this.updateObjective()}openShop(){this.audio.ui(),this.ui.setPrompt(null),document.exitPointerLock?.(),this.ui.openShop(this.snapshot(),this.player.money)}useItem(t){if(!this.player.inv.has(t)){this.ui.toast(`没有${Xe[t].name}`),this.audio.deny();return}if(t==="pill_heal"){if(this.player.hp>=this.player.maxHp){this.ui.toast("气血充盈");return}this.player.inv.remove(t,1),this.player.heal(45,this),this.ui.toast("服下回春丹")}else if(t==="pill_chi"){if(this.player.chi>=this.player.maxChi){this.ui.toast("内力已满");return}this.player.inv.remove(t,1),this.player.restoreChi(55,this),this.ui.toast("服下凝神丹")}else if(t==="pill_speed")this.player.inv.remove(t,1),this.player.buffs.speed=10,this.audio.heal(),this.ui.toast("清风入体，身法加快");else if(t==="pill_guard")this.player.inv.remove(t,1),this.player.buffs.guard=8,this.audio.heal(),this.ui.toast("金刚护体，伤害减半");else{this.ui.toast("此物无法直接使用");return}this.syncHud()}buy(t){const e=Ac.find(i=>i.id===t);if(e){if(this.player.money<e.price){this.ui.toast("铜钱不够"),this.audio.deny();return}this.player.money-=e.price,this.player.inv.add(t,1),this.audio.buy(),this.ui.toast(`买下 ${Xe[t].name}`),this.ui.refreshPanel(this.snapshot()),this.syncHud()}}craft(t){const e=Rc[t];if(e){for(const[i,n]of e.need)if(!this.player.inv.has(i,n)){this.ui.toast(`缺少 ${Xe[i].name}`),this.audio.deny();return}for(const[i,n]of e.need)this.player.inv.remove(i,n);this.player.inv.add(e.out,e.count),this.audio.buy(),this.ui.toast(`炼成 ${Xe[e.out].name} ×${e.count}`),this.ui.refreshPanel(this.snapshot()),this.syncHud()}}triggerBoss(){this.bossTriggered=!0,this.audio.bossRoar(),this.ui.setPrompt(null),this.input.mouse.down=!1,this.openDialogue(b0,()=>{this.region.boss&&(this.boss=new Ol(this.region.boss.x,this.region.boss.y),this.world.scene.add(this.boss.model.group),this.ui.showBoss("无面",this.boss.hp,this.boss.maxHp,1),this.ui.banner("无 面","「赢我。」"),this.shake(12),this.audio.bossRoar(),this.fx.rune(this.region.boss.x,this.region.boss.y,140,"#ff4a3a",1.2))})}showVictory(){this.mode="victory",this.ui.hideBoss();const t=Math.floor(this.elapsed),e=`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`;this.ui.showVictory({time:e,kills:this.kills.total,money:this.player.money},E0),this.audio.victory(),this.ui.setPrompt(null),document.exitPointerLock?.()}aimAssist(t,e,i,n,r){let a=n,o=i,l=!1;const c=(h,d,u)=>{const f=Math.max(0,Me(t,e,h,d)-u);if(f>a)return;const _=qe(t,e,h,d);Math.abs(is(_,i))>r||(a=f,o=_,l=!0)};for(const h of this.enemies)h.dead||c(h.x,h.y,h.r);return this.boss&&!this.boss.dead&&c(this.boss.x,this.boss.y,this.boss.r),l?o:i}hitEnemies(t,e,i,n,r,a,o=0){let l=0;for(const c of this.enemies){if(c.dead||Me(t,e,c.x,c.y)>n+c.r)continue;const d=qe(t,e,c.x,c.y);Math.abs(is(d,i))>r||(c.takeDamage(a,d,this),o>0&&(c.kbx+=Math.cos(d)*o,c.kby+=Math.sin(d)*o),l++)}if(this.boss&&!this.boss.dead&&Me(t,e,this.boss.x,this.boss.y)<n+this.boss.r){const h=qe(t,e,this.boss.x,this.boss.y);Math.abs(is(h,i))<r+.35&&(this.boss.takeDamage(a,h,this),l++)}return l}areaEnemies(t,e,i,n,r=0){let a=0;for(const o of this.enemies){if(o.dead||Me(t,e,o.x,o.y)>i+o.r)continue;const c=qe(t,e,o.x,o.y);o.takeDamage(n,c,this),r>0&&(o.kbx+=Math.cos(c)*r*.6,o.kby+=Math.sin(c)*r*.6),a++}return this.boss&&!this.boss.dead&&Me(t,e,this.boss.x,this.boss.y)<i+this.boss.r&&(this.boss.takeDamage(n,qe(t,e,this.boss.x,this.boss.y),this),a++),a}damagePlayer(t,e,i){this.player.takeDamage(t,e,i,this)}shake(t){this.shakeAmp=Math.min(34,this.shakeAmp+t)}slowmo(t,e){this.slowT=Math.max(this.slowT,t),this.slowScale=e}punchZoom(t){this.punch=Math.min(16,this.punch+t)}flash(t,e){this.flashColor=t,this.flashAlpha=Math.max(this.flashAlpha,e),this.flashEl.style.backgroundColor=this.flashColor}spawnProjectile(t,e,i,n,r,a){const o=new X0(t,e,i,n,r,a);this.projectiles.push(o),this.world.scene.add(o.group)}spawnEnemy(t,e,i,n=!1,r,a){if(t==="boss"){this.boss=new Ol(e,i),this.world.scene.add(this.boss.model.group);return}const o=new W0(t,e,i,n,r,a);this.enemies.push(o),this.world.scene.add(o.group),this.fx.burst(e,i,{count:10,color:"rgba(150,140,130,0.6)",color2:"rgba(255,220,180,0.4)",speed:70,size:2.4,life:.4,grav:-20})}spawnPickup(t){const e=O0(t.item,t.money??0);this.world.scene.add(e),this.pickups.push({x:t.x,y:t.y,vx:Pe(-60,60),vy:Pe(-80,-20),item:t.item,money:t.money,count:t.count??1,life:18,t:0,group:e})}updatePickups(t){const e=this.player;for(const i of this.pickups){i.t+=t,i.life-=t;const n=Me(i.x,i.y,e.x,e.y);if(n<120&&!e.dead){const a=qe(i.x,i.y,e.x,e.y),o=780*(1-n/120)+120;i.vx+=Math.cos(a)*o*t,i.vy+=Math.sin(a)*o*t}const r=Math.max(0,1-t*2.2);i.vx*=r,i.vy*=r,i.x+=i.vx*t,i.y+=i.vy*t,i.group.position.set(i.x*at,.32+Math.sin(i.t*4)*.09,i.y*at),i.group.rotation.y+=t*1.8,!e.dead&&n<34&&(i.money&&(e.money+=i.money,this.fx.text(i.x,i.y-10,`+${i.money}`,"#ffd889",13),this.audio.pickup()),i.item&&(e.inv.add(i.item,i.count),this.ui.toast(`获得 ${Xe[i.item].name} ×${i.count}`),this.audio.pickup()),i.life=0)}for(let i=this.pickups.length-1;i>=0;i--){const n=this.pickups[i];n.life<=0&&(ds(n.group),n.group.removeFromParent(),this.pickups.splice(i,1))}}spawnAmbient(t){if(this.ambientT-=t,this.ambientT>0)return;this.ambientT=.12;const e=this.player;this.region.id==="cliff"?this.fx.embers(e.x+Pe(-260,260),e.y+Pe(-200,200),1,"#ff7a4a"):this.region.id==="forest"?this.fx.burst(e.x+Pe(-300,300),e.y+Pe(-240,240),{count:1,color:"rgba(140,70,60,0.5)",color2:"rgba(190,110,80,0.36)",speed:10,size:.85,life:5,grav:16,drag:.1,y:2.6}):this.fx.burst(e.x+Pe(-300,300),e.y+Pe(-240,240),{count:1,color:"rgba(190,180,150,0.3)",color2:"rgba(220,210,180,0.22)",speed:6,size:.7,life:5,grav:-8,drag:.2,y:1.6+Math.random()*1.6})}toast(t){this.ui.toast(t)}banner(t,e){this.ui.banner(t,e)}addMoney(t){this.player.money+=t,this.syncHud()}grantItem(t,e,i=!0){this.player.inv.add(t,e),i&&this.ui.toast(`获得 ${Xe[t].name} ×${e}`),this.syncHud()}onPerfectDodge(){this.perfectDodges++,this.flags.has("taught_perfect")||(this.flags.add("taught_perfect"),this.ui.banner("完美闪避","时缓 · 回复内力与气力 · 刀意·破：伤害提升"))}onEnemyKilled(t){this.kills.total++,t.kind==="wolf"&&this.kills.wolf++,t.kind==="ghost"&&this.kills.ghost++,t.kind==="monk"&&this.kills.monk++,this.audio.hit();const e=u0(t.money[0],t.money[1]);this.spawnPickup({x:t.x,y:t.y-8,money:e});for(const[i,n,r]of t.drops)Math.random()<n&&this.spawnPickup({x:t.x+Pe(-10,10),y:t.y-8,item:i,count:r});t.key&&(this.flags.add(t.key),t.key==="key"&&(this.player.inv.add("key",1),this.ui.banner("残破佛钥","断崖佛门已可开启"),this.fx.ring(t.x,t.y,10,150,"rgba(230,190,100,0.9)",4,.9)),this.refreshPortals()),t.kind==="wolf"&&this.kills.wolf>=6&&!this.flags.has("forest_cleared")&&(this.flags.add("forest_cleared"),this.player.inv.add("talisman",1),this.ui.banner("狼嚎渐息","东侧通往荒寺的路开了"),this.audio.gate(),this.fx.ring(this.player.x,this.player.y,20,210,"rgba(255,170,90,0.5)",3,1),this.refreshPortals()),this.updateObjective()}onPlayerDeath(){this.mode==="playing"&&(this.mode="dead",this.audio.death(),this.slowmo(1.2,.25),this.ui.setPrompt(null),this.ui.showDeath(),document.exitPointerLock?.())}onBossDefeated(){this.flags.add("boss_dead"),this.ui.hideBoss(),this.ui.banner("无 面 · 已 斩","红雨，停了。"),this.shake(24),this.flash("#fff0dc",.9),this.slowmo(1.6,.25),this.victoryDelay=3.4,this.updateObjective()}updateObjective(){let t;this.flags.has("story")?this.flags.has("forest_cleared")?this.flags.has("key")?this.flags.has("boss_dead")?t="红雨停了。断崖上只剩一把刀，和一盏未熄的灯。":t="带着佛钥登上断崖，直面无面":t="进入荒寺，击败守钥僧，夺回佛钥":t=`穿过东门，斩尽枯木林中的影狼（${Math.min(6,this.kills.wolf)}/6）`:t="与镇中说书人交谈，问明仇人去向",this.ui.setObjective(t)}snapshot(){const t={};for(const e of Object.keys(Xe)){const i=this.player.inv.count(e);i>0&&(t[e]=i)}return{money:this.player.money,counts:t}}syncHud(){const t=this.player;this.ui.setVitals({hp:t.hp,maxHp:t.maxHp,chi:t.chi,maxChi:t.maxChi,stamina:t.stamina,maxStamina:t.maxStamina}),this.ui.updateSkills(t.skillCd,t.chi,t.dodgeCd),this.ui.updateQuick(t.inv.count("pill_heal"),t.inv.count("pill_chi")),this.ui.setMoney(t.money),this.ui.setBuffs(t.buffs)}}function $0(){const s=document.getElementById("game"),t=document.getElementById("ui");if(!s||!t)throw new Error("页面缺少 #game 或 #ui 节点");const e=new Y0(s),i=document.querySelector(".title-bg");i&&(i.style.backgroundImage=`url('${fo("art","title")}')`),window.__game=e}try{$0()}catch(s){console.error("[烬影·墨刃] 启动失败",s);const t=document.getElementById("ui");t&&(t.innerHTML=`
      <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;
        flex-direction:column;gap:12px;color:#e8e2d4;font-family:system-ui,sans-serif;text-align:center;padding:24px;">
        <h1 style="font-size:22px;letter-spacing:4px;">游戏未能启动</h1>
        <p style="opacity:.7;font-size:13px;max-width:520px;line-height:1.7;">
          请确认通过本地服务器访问（如 <code>npm run dev</code>），而不是直接双击打开 HTML 文件。<br/>
          错误信息：${String(s)}
        </p>
      </div>`)}

