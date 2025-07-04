(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const bf="modulepreload",Af=function(n){return"/EleVis/"+n},Ql={},Sa=function(t,e,i){let r=Promise.resolve();if(e&&e.length>0){let c=function(u){return Promise.all(u.map(h=>Promise.resolve(h).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};var a=c;document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");r=c(e.map(u=>{if(u=Af(u),u in Ql)return;Ql[u]=!0;const h=u.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":bf,h||(d.as="script"),d.crossOrigin="",d.href=u,l&&d.setAttribute("nonce",l),document.head.appendChild(d),h)return new Promise((_,v)=>{d.addEventListener("load",_),d.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return r.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bl="178",Xi={ROTATE:0,DOLLY:1,PAN:2},Hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rf=0,tc=1,Cf=2,Yu=1,Pf=2,En=3,Gn=0,Pe=1,ln=2,zn=0,$i=1,ec=2,nc=3,ic=4,Df=5,ii=100,Lf=101,If=102,Uf=103,Nf=104,Ff=200,Of=201,Bf=202,zf=203,po=204,mo=205,kf=206,Hf=207,Vf=208,Gf=209,Wf=210,Xf=211,$f=212,Yf=213,qf=214,_o=0,go=1,vo=2,Qi=3,xo=4,Mo=5,yo=6,So=7,Al=0,Zf=1,Kf=2,kn=0,jf=1,Jf=2,Qf=3,td=4,ed=5,nd=6,id=7,qu=300,tr=301,er=302,Eo=303,wo=304,fa=306,To=1e3,ai=1001,bo=1002,nn=1003,rd=1004,jr=1005,fn=1006,Ea=1007,oi=1008,Rn=1009,Zu=1010,Ku=1011,Or=1012,Rl=1013,ui=1014,Tn=1015,$r=1016,Cl=1017,Pl=1018,Br=1020,ju=35902,Ju=1021,Qu=1022,tn=1023,zr=1026,kr=1027,th=1028,Dl=1029,eh=1030,Ll=1031,Il=1033,Cs=33776,Ps=33777,Ds=33778,Ls=33779,Ao=35840,Ro=35841,Co=35842,Po=35843,Do=36196,Lo=37492,Io=37496,Uo=37808,No=37809,Fo=37810,Oo=37811,Bo=37812,zo=37813,ko=37814,Ho=37815,Vo=37816,Go=37817,Wo=37818,Xo=37819,$o=37820,Yo=37821,Is=36492,qo=36494,Zo=36495,nh=36283,Ko=36284,jo=36285,Jo=36286,sd=3200,ad=3201,Ul=0,od=1,Bn="",Ge="srgb",nr="srgb-linear",Vs="linear",te="srgb",xi=7680,rc=519,ld=512,cd=513,ud=514,ih=515,hd=516,fd=517,dd=518,pd=519,Qo=35044,sc="300 es",bn=2e3,Gs=2001;class _i{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Us=Math.PI/180,tl=180/Math.PI;function Hn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xe[n&255]+xe[n>>8&255]+xe[n>>16&255]+xe[n>>24&255]+"-"+xe[t&255]+xe[t>>8&255]+"-"+xe[t>>16&15|64]+xe[t>>24&255]+"-"+xe[e&63|128]+xe[e>>8&255]+"-"+xe[e>>16&255]+xe[e>>24&255]+xe[i&255]+xe[i>>8&255]+xe[i>>16&255]+xe[i>>24&255]).toLowerCase()}function $t(n,t,e){return Math.max(t,Math.min(e,n))}function md(n,t){return(n%t+t)%t}function wa(n,t,e){return(1-e)*n+e*t}function cn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ee(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const _d={DEG2RAD:Us};class Ut{constructor(t=0,e=0){Ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hi{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[a+0],d=s[a+1],_=s[a+2],v=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=v;return}if(h!==v||l!==f||c!==d||u!==_){let m=1-o;const p=l*f+c*d+u*_+h*v,E=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const D=Math.sqrt(T),P=Math.atan2(D,p*E);m=Math.sin(m*P)/D,o=Math.sin(o*P)/D}const y=o*E;if(l=l*m+f*y,c=c*m+d*y,u=u*m+_*y,h=h*m+v*y,m===1-o){const D=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=D,c*=D,u*=D,h*=D}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],f=s[a+1],d=s[a+2],_=s[a+3];return t[e]=o*_+u*h+l*d-c*f,t[e+1]=l*_+u*f+c*h-o*d,t[e+2]=c*_+u*d+o*f-l*h,t[e+3]=u*_-o*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),f=l(i/2),d=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(i>o&&i>h){const d=2*Math.sqrt(1+i-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-i-h);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*i+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,i=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ac.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ac.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*i),u=2*(o*e-s*r),h=2*(s*i-a*e);return this.x=e+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ta.copy(this).projectOnVector(t),this.sub(Ta)}reflect(t){return this.sub(Ta.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ta=new N,ac=new hi;class Ht{constructor(t,e,i,r,s,a,o,l,c){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c)}set(t,e,i,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],_=i[8],v=r[0],m=r[3],p=r[6],E=r[1],T=r[4],y=r[7],D=r[2],P=r[5],A=r[8];return s[0]=a*v+o*E+l*D,s[3]=a*m+o*T+l*P,s[6]=a*p+o*y+l*A,s[1]=c*v+u*E+h*D,s[4]=c*m+u*T+h*P,s[7]=c*p+u*y+h*A,s[2]=f*v+d*E+_*D,s[5]=f*m+d*T+_*P,s[8]=f*p+d*y+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*s,d=c*s-a*l,_=e*h+i*f+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=h*v,t[1]=(r*c-u*i)*v,t[2]=(o*i-r*a)*v,t[3]=f*v,t[4]=(u*e-r*l)*v,t[5]=(r*s-o*e)*v,t[6]=d*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ba.makeScale(t,e)),this}rotate(t){return this.premultiply(ba.makeRotation(-t)),this}translate(t,e){return this.premultiply(ba.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ba=new Ht;function rh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ws(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function gd(){const n=Ws("canvas");return n.style.display="block",n}const oc={};function Yi(n){n in oc||(oc[n]=!0,console.warn(n))}function vd(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function xd(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Md(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const lc=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cc=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yd(){const n={enabled:!0,workingColorSpace:nr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===te&&(r.r=An(r.r),r.g=An(r.g),r.b=An(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===te&&(r.r=qi(r.r),r.g=qi(r.g),r.b=qi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Bn?Vs:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Yi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Yi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[nr]:{primaries:t,whitePoint:i,transfer:Vs,toXYZ:lc,fromXYZ:cc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:t,whitePoint:i,transfer:te,toXYZ:lc,fromXYZ:cc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}}),n}const jt=yd();function An(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Mi;class Sd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Mi===void 0&&(Mi=Ws("canvas")),Mi.width=t.width,Mi.height=t.height;const r=Mi.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Mi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ws("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=An(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(An(e[i]/255)*255):e[i]=An(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ed=0;class Nl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Hn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Aa(r[a].image)):s.push(Aa(r[a]))}else s=Aa(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Aa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Sd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wd=0;const Ra=new N;class Te extends _i{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,i=ai,r=ai,s=fn,a=oi,o=tn,l=Rn,c=Te.DEFAULT_ANISOTROPY,u=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Hn(),this.name="",this.source=new Nl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ra).x}get height(){return this.source.getSize(Ra).y}get depth(){return this.source.getSize(Ra).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case To:t.x=t.x-Math.floor(t.x);break;case ai:t.x=t.x<0?0:1;break;case bo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case To:t.y=t.y-Math.floor(t.y);break;case ai:t.y=t.y<0?0:1;break;case bo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=qu;Te.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,i=0,r=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,y=(d+1)/2,D=(p+1)/2,P=(u+f)/4,A=(h+v)/4,C=(_+m)/4;return T>y&&T>D?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=P/i,s=A/i):y>D?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=P/r,s=C/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=A/s,r=C/s),this.set(i,r,s,e),this}let E=Math.sqrt((m-_)*(m-_)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(h-v)/E,this.z=(f-u)/E,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Td extends _i{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const r={width:t,height:e,depth:i.depth},s=new Te(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Nl(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fi extends Td{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class sh extends Te{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class bd extends Te{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ur{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,qe):qe.fromBufferAttribute(s,a),qe.applyMatrix4(t.matrixWorld),this.expandByPoint(qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Jr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jr.copy(i.boundingBox)),Jr.applyMatrix4(t.matrixWorld),this.union(Jr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qe),qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mr),Qr.subVectors(this.max,mr),yi.subVectors(t.a,mr),Si.subVectors(t.b,mr),Ei.subVectors(t.c,mr),Pn.subVectors(Si,yi),Dn.subVectors(Ei,Si),qn.subVectors(yi,Ei);let e=[0,-Pn.z,Pn.y,0,-Dn.z,Dn.y,0,-qn.z,qn.y,Pn.z,0,-Pn.x,Dn.z,0,-Dn.x,qn.z,0,-qn.x,-Pn.y,Pn.x,0,-Dn.y,Dn.x,0,-qn.y,qn.x,0];return!Ca(e,yi,Si,Ei,Qr)||(e=[1,0,0,0,1,0,0,0,1],!Ca(e,yi,Si,Ei,Qr))?!1:(ts.crossVectors(Pn,Dn),e=[ts.x,ts.y,ts.z],Ca(e,yi,Si,Ei,Qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const _n=[new N,new N,new N,new N,new N,new N,new N,new N],qe=new N,Jr=new ur,yi=new N,Si=new N,Ei=new N,Pn=new N,Dn=new N,qn=new N,mr=new N,Qr=new N,ts=new N,Zn=new N;function Ca(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Zn.fromArray(n,s);const o=r.x*Math.abs(Zn.x)+r.y*Math.abs(Zn.y)+r.z*Math.abs(Zn.z),l=t.dot(Zn),c=e.dot(Zn),u=i.dot(Zn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ad=new ur,_r=new N,Pa=new N;class da{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Ad.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_r.subVectors(t,this.center);const e=_r.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(_r,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Pa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_r.copy(t.center).add(Pa)),this.expandByPoint(_r.copy(t.center).sub(Pa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const gn=new N,Da=new N,es=new N,Ln=new N,La=new N,ns=new N,Ia=new N;class Fl{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gn.copy(this.origin).addScaledVector(this.direction,e),gn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Da.copy(t).add(e).multiplyScalar(.5),es.copy(e).sub(t).normalize(),Ln.copy(this.origin).sub(Da);const s=t.distanceTo(e)*.5,a=-this.direction.dot(es),o=Ln.dot(this.direction),l=-Ln.dot(es),c=Ln.lengthSq(),u=Math.abs(1-a*a);let h,f,d,_;if(u>0)if(h=a*l-o,f=a*o-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const v=1/u;h*=v,f*=v,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Da).addScaledVector(es,f),d}intersectSphere(t,e){gn.subVectors(t.center,this.origin);const i=gn.dot(this.direction),r=gn.dot(gn)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,gn)!==null}intersectTriangle(t,e,i,r,s){La.subVectors(e,t),ns.subVectors(i,t),Ia.crossVectors(La,ns);let a=this.direction.dot(Ia),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ln.subVectors(this.origin,t);const l=o*this.direction.dot(ns.crossVectors(Ln,ns));if(l<0)return null;const c=o*this.direction.dot(La.cross(Ln));if(c<0||l+c>a)return null;const u=-o*Ln.dot(Ia);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,i,r,s,a,o,l,c,u,h,f,d,_,v,m){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c,u,h,f,d,_,v,m)}set(t,e,i,r,s,a,o,l,c,u,h,f,d,_,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/wi.setFromMatrixColumn(t,0).length(),s=1/wi.setFromMatrixColumn(t,1).length(),a=1/wi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=a*u,d=a*h,_=o*u,v=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+_*c,e[5]=f-v*c,e[9]=-o*l,e[2]=v-f*c,e[6]=_+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,_=c*u,v=c*h;e[0]=f+v*o,e[4]=_*o-d,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=d*o-_,e[6]=v+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,_=c*u,v=c*h;e[0]=f-v*o,e[4]=-a*h,e[8]=_+d*o,e[1]=d+_*o,e[5]=a*u,e[9]=v-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,d=a*h,_=o*u,v=o*h;e[0]=l*u,e[4]=_*c-d,e[8]=f*c+v,e[1]=l*h,e[5]=v*c+f,e[9]=d*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,_=o*l,v=o*c;e[0]=l*u,e[4]=v-f*h,e[8]=_*h+d,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*h+_,e[10]=f-v*h}else if(t.order==="XZY"){const f=a*l,d=a*c,_=o*l,v=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+v,e[5]=a*u,e[9]=d*h-_,e[2]=_*h-d,e[6]=o*u,e[10]=v*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rd,t,Cd)}lookAt(t,e,i){const r=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),In.crossVectors(i,Ne),In.lengthSq()===0&&(Math.abs(i.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),In.crossVectors(i,Ne)),In.normalize(),is.crossVectors(Ne,In),r[0]=In.x,r[4]=is.x,r[8]=Ne.x,r[1]=In.y,r[5]=is.y,r[9]=Ne.y,r[2]=In.z,r[6]=is.z,r[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],_=i[2],v=i[6],m=i[10],p=i[14],E=i[3],T=i[7],y=i[11],D=i[15],P=r[0],A=r[4],C=r[8],S=r[12],x=r[1],b=r[5],z=r[9],O=r[13],K=r[2],J=r[6],Z=r[10],nt=r[14],$=r[3],G=r[7],it=r[11],B=r[15];return s[0]=a*P+o*x+l*K+c*$,s[4]=a*A+o*b+l*J+c*G,s[8]=a*C+o*z+l*Z+c*it,s[12]=a*S+o*O+l*nt+c*B,s[1]=u*P+h*x+f*K+d*$,s[5]=u*A+h*b+f*J+d*G,s[9]=u*C+h*z+f*Z+d*it,s[13]=u*S+h*O+f*nt+d*B,s[2]=_*P+v*x+m*K+p*$,s[6]=_*A+v*b+m*J+p*G,s[10]=_*C+v*z+m*Z+p*it,s[14]=_*S+v*O+m*nt+p*B,s[3]=E*P+T*x+y*K+D*$,s[7]=E*A+T*b+y*J+D*G,s[11]=E*C+T*z+y*Z+D*it,s[15]=E*S+T*O+y*nt+D*B,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],_=t[3],v=t[7],m=t[11],p=t[15];return _*(+s*l*h-r*c*h-s*o*f+i*c*f+r*o*d-i*l*d)+v*(+e*l*d-e*c*f+s*a*f-r*a*d+r*c*u-s*l*u)+m*(+e*c*h-e*o*d-s*a*h+i*a*d+s*o*u-i*c*u)+p*(-r*o*u-e*l*h+e*o*f+r*a*h-i*a*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],_=t[12],v=t[13],m=t[14],p=t[15],E=h*m*c-v*f*c+v*l*d-o*m*d-h*l*p+o*f*p,T=_*f*c-u*m*c-_*l*d+a*m*d+u*l*p-a*f*p,y=u*v*c-_*h*c+_*o*d-a*v*d-u*o*p+a*h*p,D=_*h*l-u*v*l-_*o*f+a*v*f+u*o*m-a*h*m,P=e*E+i*T+r*y+s*D;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/P;return t[0]=E*A,t[1]=(v*f*s-h*m*s-v*r*d+i*m*d+h*r*p-i*f*p)*A,t[2]=(o*m*s-v*l*s+v*r*c-i*m*c-o*r*p+i*l*p)*A,t[3]=(h*l*s-o*f*s-h*r*c+i*f*c+o*r*d-i*l*d)*A,t[4]=T*A,t[5]=(u*m*s-_*f*s+_*r*d-e*m*d-u*r*p+e*f*p)*A,t[6]=(_*l*s-a*m*s-_*r*c+e*m*c+a*r*p-e*l*p)*A,t[7]=(a*f*s-u*l*s+u*r*c-e*f*c-a*r*d+e*l*d)*A,t[8]=y*A,t[9]=(_*h*s-u*v*s-_*i*d+e*v*d+u*i*p-e*h*p)*A,t[10]=(a*v*s-_*o*s+_*i*c-e*v*c-a*i*p+e*o*p)*A,t[11]=(u*o*s-a*h*s-u*i*c+e*h*c+a*i*d-e*o*d)*A,t[12]=D*A,t[13]=(u*v*r-_*h*r+_*i*f-e*v*f-u*i*m+e*h*m)*A,t[14]=(_*o*r-a*v*r-_*i*l+e*v*l+a*i*m-e*o*m)*A,t[15]=(a*h*r-u*o*r+u*i*l-e*h*l-a*i*f+e*o*f)*A,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,f=s*c,d=s*u,_=s*h,v=a*u,m=a*h,p=o*h,E=l*c,T=l*u,y=l*h,D=i.x,P=i.y,A=i.z;return r[0]=(1-(v+p))*D,r[1]=(d+y)*D,r[2]=(_-T)*D,r[3]=0,r[4]=(d-y)*P,r[5]=(1-(f+p))*P,r[6]=(m+E)*P,r[7]=0,r[8]=(_+T)*A,r[9]=(m-E)*A,r[10]=(1-(f+v))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=wi.set(r[0],r[1],r[2]).length();const a=wi.set(r[4],r[5],r[6]).length(),o=wi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Ze.copy(this);const c=1/s,u=1/a,h=1/o;return Ze.elements[0]*=c,Ze.elements[1]*=c,Ze.elements[2]*=c,Ze.elements[4]*=u,Ze.elements[5]*=u,Ze.elements[6]*=u,Ze.elements[8]*=h,Ze.elements[9]*=h,Ze.elements[10]*=h,e.setFromRotationMatrix(Ze),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=bn){const l=this.elements,c=2*s/(e-t),u=2*s/(i-r),h=(e+t)/(e-t),f=(i+r)/(i-r);let d,_;if(o===bn)d=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Gs)d=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=bn){const l=this.elements,c=1/(e-t),u=1/(i-r),h=1/(a-s),f=(e+t)*c,d=(i+r)*u;let _,v;if(o===bn)_=(a+s)*h,v=-2*h;else if(o===Gs)_=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const wi=new N,Ze=new ce,Rd=new N(0,0,0),Cd=new N(1,1,1),In=new N,is=new N,Ne=new N,uc=new ce,hc=new hi;class rn{constructor(t=0,e=0,i=0,r=rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return uc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hc.setFromEuler(this),this.setFromQuaternion(hc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rn.DEFAULT_ORDER="XYZ";class ah{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Pd=0;const fc=new N,Ti=new hi,vn=new ce,rs=new N,gr=new N,Dd=new N,Ld=new hi,dc=new N(1,0,0),pc=new N(0,1,0),mc=new N(0,0,1),_c={type:"added"},Id={type:"removed"},bi={type:"childadded",child:null},Ua={type:"childremoved",child:null};class ve extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new N,e=new rn,i=new hi,r=new N(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ce},normalMatrix:{value:new Ht}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.premultiply(Ti),this}rotateX(t){return this.rotateOnAxis(dc,t)}rotateY(t){return this.rotateOnAxis(pc,t)}rotateZ(t){return this.rotateOnAxis(mc,t)}translateOnAxis(t,e){return fc.copy(t).applyQuaternion(this.quaternion),this.position.add(fc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(dc,t)}translateY(t){return this.translateOnAxis(pc,t)}translateZ(t){return this.translateOnAxis(mc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?rs.copy(t):rs.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(gr,rs,this.up):vn.lookAt(rs,gr,this.up),this.quaternion.setFromRotationMatrix(vn),r&&(vn.extractRotation(r.matrixWorld),Ti.setFromRotationMatrix(vn),this.quaternion.premultiply(Ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_c),bi.child=t,this.dispatchEvent(bi),bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Id),Ua.child=t,this.dispatchEvent(Ua),Ua.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_c),bi.child=t,this.dispatchEvent(bi),bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,t,Dd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,Ld,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),d=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}ve.DEFAULT_UP=new N(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ke=new N,xn=new N,Na=new N,Mn=new N,Ai=new N,Ri=new N,gc=new N,Fa=new N,Oa=new N,Ba=new N,za=new he,ka=new he,Ha=new he;class We{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Ke.subVectors(t,e),r.cross(Ke);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Ke.subVectors(r,e),xn.subVectors(i,e),Na.subVectors(t,e);const a=Ke.dot(Ke),o=Ke.dot(xn),l=Ke.dot(Na),c=xn.dot(xn),u=xn.dot(Na),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,_=(a*u-o*l)*f;return s.set(1-d-_,_,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(t,e,i,r,s,a,o,l){return this.getBarycoord(t,e,i,r,Mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Mn.x),l.addScaledVector(a,Mn.y),l.addScaledVector(o,Mn.z),l)}static getInterpolatedAttribute(t,e,i,r,s,a){return za.setScalar(0),ka.setScalar(0),Ha.setScalar(0),za.fromBufferAttribute(t,e),ka.fromBufferAttribute(t,i),Ha.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(za,s.x),a.addScaledVector(ka,s.y),a.addScaledVector(Ha,s.z),a}static isFrontFacing(t,e,i,r){return Ke.subVectors(i,e),xn.subVectors(t,e),Ke.cross(xn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),Ke.cross(xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return We.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return We.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return We.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return We.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return We.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;Ai.subVectors(r,i),Ri.subVectors(s,i),Fa.subVectors(t,i);const l=Ai.dot(Fa),c=Ri.dot(Fa);if(l<=0&&c<=0)return e.copy(i);Oa.subVectors(t,r);const u=Ai.dot(Oa),h=Ri.dot(Oa);if(u>=0&&h<=u)return e.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(Ai,a);Ba.subVectors(t,s);const d=Ai.dot(Ba),_=Ri.dot(Ba);if(_>=0&&d<=_)return e.copy(s);const v=d*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(i).addScaledVector(Ri,o);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return gc.subVectors(s,r),o=(h-u)/(h-u+(d-_)),e.copy(r).addScaledVector(gc,o);const p=1/(m+v+f);return a=v*p,o=f*p,e.copy(i).addScaledVector(Ai,a).addScaledVector(Ri,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},ss={h:0,s:0,l:0};function Va(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}let Yt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,jt.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=jt.workingColorSpace){if(t=md(t,1),e=$t(e,0,1),i=$t(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Va(a,s,t+1/3),this.g=Va(a,s,t),this.b=Va(a,s,t-1/3)}return jt.colorSpaceToWorking(this,r),this}setStyle(t,e=Ge){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){const i=oh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=An(t.r),this.g=An(t.g),this.b=An(t.b),this}copyLinearToSRGB(t){return this.r=qi(t.r),this.g=qi(t.g),this.b=qi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return jt.workingToColorSpace(Me.copy(this),t),Math.round($t(Me.r*255,0,255))*65536+Math.round($t(Me.g*255,0,255))*256+Math.round($t(Me.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(Me.copy(this),e);const i=Me.r,r=Me.g,s=Me.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=Ge){jt.workingToColorSpace(Me.copy(this),t);const e=Me.r,i=Me.g,r=Me.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Un),this.setHSL(Un.h+t,Un.s+e,Un.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Un),t.getHSL(ss);const i=wa(Un.h,ss.h,e),r=wa(Un.s,ss.s,e),s=wa(Un.l,ss.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Me=new Yt;Yt.NAMES=oh;let Ud=0;class Xn extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=$i,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=po,this.blendDst=mo,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(i.blending=this.blending),this.side!==Gn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==po&&(i.blendSrc=this.blendSrc),this.blendDst!==mo&&(i.blendDst=this.blendDst),this.blendEquation!==ii&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class pa extends Xn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=Al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new N,as=new Ut;let Nd=0;class $e{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Qo,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)as.fromBufferAttribute(this,e),as.applyMatrix3(t),this.setXY(e,as.x,as.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=cn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ee(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),i=ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),i=ee(i,this.array),r=ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),i=ee(i,this.array),r=ee(r,this.array),s=ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qo&&(t.usage=this.usage),t}}class lh extends $e{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class ch extends $e{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ye extends $e{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Fd=0;const Ve=new ce,Ga=new ve,Ci=new N,Fe=new ur,vr=new ur,ge=new N;class Be extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rh(t)?ch:lh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ht().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ve.makeRotationFromQuaternion(t),this.applyMatrix4(Ve),this}rotateX(t){return Ve.makeRotationX(t),this.applyMatrix4(Ve),this}rotateY(t){return Ve.makeRotationY(t),this.applyMatrix4(Ve),this}rotateZ(t){return Ve.makeRotationZ(t),this.applyMatrix4(Ve),this}translate(t,e,i){return Ve.makeTranslation(t,e,i),this.applyMatrix4(Ve),this}scale(t,e,i){return Ve.makeScale(t,e,i),this.applyMatrix4(Ve),this}lookAt(t){return Ga.lookAt(t),Ga.updateMatrix(),this.applyMatrix4(Ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ye(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ur);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Fe.setFromBufferAttribute(s),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new da);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const i=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];vr.setFromBufferAttribute(o),this.morphTargetsRelative?(ge.addVectors(Fe.min,vr.min),Fe.expandByPoint(ge),ge.addVectors(Fe.max,vr.max),Fe.expandByPoint(ge)):(Fe.expandByPoint(vr.min),Fe.expandByPoint(vr.max))}Fe.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)ge.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(ge));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ge.fromBufferAttribute(o,c),l&&(Ci.fromBufferAttribute(t,c),ge.add(Ci)),r=Math.max(r,i.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new N,l[C]=new N;const c=new N,u=new N,h=new N,f=new Ut,d=new Ut,_=new Ut,v=new N,m=new N;function p(C,S,x){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,x),f.fromBufferAttribute(s,C),d.fromBufferAttribute(s,S),_.fromBufferAttribute(s,x),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const b=1/(d.x*_.y-_.x*d.y);isFinite(b)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(b),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(b),o[C].add(v),o[S].add(v),o[x].add(v),l[C].add(m),l[S].add(m),l[x].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let C=0,S=E.length;C<S;++C){const x=E[C],b=x.start,z=x.count;for(let O=b,K=b+z;O<K;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const T=new N,y=new N,D=new N,P=new N;function A(C){D.fromBufferAttribute(r,C),P.copy(D);const S=o[C];T.copy(S),T.sub(D.multiplyScalar(D.dot(S))).normalize(),y.crossVectors(P,S);const b=y.dot(l[C])<0?-1:1;a.setXYZW(C,T.x,T.y,T.z,b)}for(let C=0,S=E.length;C<S;++C){const x=E[C],b=x.start,z=x.count;for(let O=b,K=b+z;O<K;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,u=new N,h=new N;if(t)for(let f=0,d=t.count;f<d;f+=3){const _=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*u;for(let p=0;p<u;p++)f[_++]=c[d++]}return new $e(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Be,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vc=new ce,Kn=new Fl,os=new da,xc=new N,ls=new N,cs=new N,us=new N,Wa=new N,hs=new N,Mc=new N,fs=new N;class Oe extends ve{constructor(t=new Be,e=new pa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){hs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Wa.fromBufferAttribute(h,t),a?hs.addScaledVector(Wa,u):hs.addScaledVector(Wa.sub(e),u))}e.add(hs)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),os.copy(i.boundingSphere),os.applyMatrix4(s),Kn.copy(t.ray).recast(t.near),!(os.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(os,xc)===null||Kn.origin.distanceToSquared(xc)>(t.far-t.near)**2))&&(vc.copy(s).invert(),Kn.copy(t.ray).applyMatrix4(vc),!(i.boundingBox!==null&&Kn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Kn)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const m=f[_],p=a[m.materialIndex],E=Math.max(m.start,d.start),T=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=E,D=T;y<D;y+=3){const P=o.getX(y),A=o.getX(y+1),C=o.getX(y+2);r=ds(this,p,t,i,c,u,h,P,A,C),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=_,p=v;m<p;m+=3){const E=o.getX(m),T=o.getX(m+1),y=o.getX(m+2);r=ds(this,a,t,i,c,u,h,E,T,y),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const m=f[_],p=a[m.materialIndex],E=Math.max(m.start,d.start),T=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=E,D=T;y<D;y+=3){const P=y,A=y+1,C=y+2;r=ds(this,p,t,i,c,u,h,P,A,C),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=_,p=v;m<p;m+=3){const E=m,T=m+1,y=m+2;r=ds(this,a,t,i,c,u,h,E,T,y),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Od(n,t,e,i,r,s,a,o){let l;if(t.side===Pe?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,t.side===Gn,o),l===null)return null;fs.copy(o),fs.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(fs);return c<e.near||c>e.far?null:{distance:c,point:fs.clone(),object:n}}function ds(n,t,e,i,r,s,a,o,l,c){n.getVertexPosition(o,ls),n.getVertexPosition(l,cs),n.getVertexPosition(c,us);const u=Od(n,t,e,i,ls,cs,us,Mc);if(u){const h=new N;We.getBarycoord(Mc,ls,cs,us,h),r&&(u.uv=We.getInterpolatedAttribute(r,o,l,c,h,new Ut)),s&&(u.uv1=We.getInterpolatedAttribute(s,o,l,c,h,new Ut)),a&&(u.normal=We.getInterpolatedAttribute(a,o,l,c,h,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new N,materialIndex:0};We.getNormal(ls,cs,us,f.normal),u.face=f,u.barycoord=h}return u}class hr extends Be{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,i,e,t,a,s,0),_("z","y","x",1,-1,i,e,-t,a,s,1),_("x","z","y",1,1,t,i,e,r,a,2),_("x","z","y",1,-1,t,i,-e,r,a,3),_("x","y","z",1,-1,t,e,i,r,s,4),_("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(u,3)),this.setAttribute("uv",new Ye(h,2));function _(v,m,p,E,T,y,D,P,A,C,S){const x=y/A,b=D/C,z=y/2,O=D/2,K=P/2,J=A+1,Z=C+1;let nt=0,$=0;const G=new N;for(let it=0;it<Z;it++){const B=it*b-O;for(let ut=0;ut<J;ut++){const At=ut*x-z;G[v]=At*E,G[m]=B*T,G[p]=K,c.push(G.x,G.y,G.z),G[v]=0,G[m]=0,G[p]=P>0?1:-1,u.push(G.x,G.y,G.z),h.push(ut/A),h.push(1-it/C),nt+=1}}for(let it=0;it<C;it++)for(let B=0;B<A;B++){const ut=f+B+J*it,At=f+B+J*(it+1),Y=f+(B+1)+J*(it+1),rt=f+(B+1)+J*it;l.push(ut,At,rt),l.push(At,Y,rt),$+=6}o.addGroup(d,$,S),d+=$,f+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ir(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function we(n){const t={};for(let e=0;e<n.length;e++){const i=ir(n[e]);for(const r in i)t[r]=i[r]}return t}function Bd(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function uh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const zd={clone:ir,merge:we};var kd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends Xn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kd,this.fragmentShader=Hd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ir(t.uniforms),this.uniformsGroups=Bd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class hh extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nn=new N,yc=new Ut,Sc=new Ut;class je extends hh{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=tl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Us*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return tl*2*Math.atan(Math.tan(Us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z)}getViewSize(t,e){return this.getViewBounds(t,yc,Sc),e.subVectors(Sc,yc)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Us*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Pi=-90,Di=1;class Vd extends ve{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new je(Pi,Di,t,e);r.layers=this.layers,this.add(r);const s=new je(Pi,Di,t,e);s.layers=this.layers,this.add(s);const a=new je(Pi,Di,t,e);a.layers=this.layers,this.add(a);const o=new je(Pi,Di,t,e);o.layers=this.layers,this.add(o);const l=new je(Pi,Di,t,e);l.layers=this.layers,this.add(l);const c=new je(Pi,Di,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===bn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Gs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,a),t.setRenderTarget(i,2,r),t.render(e,o),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class fh extends Te{constructor(t=[],e=tr,i,r,s,a,o,l,c,u){super(t,e,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Gd extends fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new fh(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new hr(5,5,5),s=new Wn({name:"CubemapFromEquirect",uniforms:ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pe,blending:zn});s.uniforms.tEquirect.value=e;const a=new Oe(r,s),o=e.minFilter;return e.minFilter===oi&&(e.minFilter=fn),new Vd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}class Ar extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wd={type:"move"};class Xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ar,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ar,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ar,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wd)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ar;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Xd extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class $d{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Qo,this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ee=new N;class Xs{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=cn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ee(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=cn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=cn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=cn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=cn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),i=ee(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),i=ee(i,this.array),r=ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),i=ee(i,this.array),r=ee(r,this.array),s=ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new $e(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Xs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class dh extends Xn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Li;const xr=new N,Ii=new N,Ui=new N,Ni=new Ut,Mr=new Ut,ph=new ce,ps=new N,yr=new N,ms=new N,Ec=new Ut,$a=new Ut,wc=new Ut;class Yd extends ve{constructor(t=new dh){if(super(),this.isSprite=!0,this.type="Sprite",Li===void 0){Li=new Be;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new $d(e,5);Li.setIndex([0,1,2,0,2,3]),Li.setAttribute("position",new Xs(i,3,0,!1)),Li.setAttribute("uv",new Xs(i,2,3,!1))}this.geometry=Li,this.material=t,this.center=new Ut(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ii.setFromMatrixScale(this.matrixWorld),ph.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ui.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ii.multiplyScalar(-Ui.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;_s(ps.set(-.5,-.5,0),Ui,a,Ii,r,s),_s(yr.set(.5,-.5,0),Ui,a,Ii,r,s),_s(ms.set(.5,.5,0),Ui,a,Ii,r,s),Ec.set(0,0),$a.set(1,0),wc.set(1,1);let o=t.ray.intersectTriangle(ps,yr,ms,!1,xr);if(o===null&&(_s(yr.set(-.5,.5,0),Ui,a,Ii,r,s),$a.set(0,1),o=t.ray.intersectTriangle(ps,ms,yr,!1,xr),o===null))return;const l=t.ray.origin.distanceTo(xr);l<t.near||l>t.far||e.push({distance:l,point:xr.clone(),uv:We.getInterpolation(xr,ps,yr,ms,Ec,$a,wc,new Ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function _s(n,t,e,i,r,s){Ni.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(Mr.x=s*Ni.x-r*Ni.y,Mr.y=r*Ni.x+s*Ni.y):Mr.copy(Ni),n.copy(t),n.x+=Mr.x,n.y+=Mr.y,n.applyMatrix4(ph)}const Ya=new N,qd=new N,Zd=new Ht;class Fn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Ya.subVectors(i,e).cross(qd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ya),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Zd.getNormalMatrix(t),r=this.coplanarPoint(Ya).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jn=new da,Kd=new Ut(.5,.5),gs=new N;class mh{constructor(t=new Fn,e=new Fn,i=new Fn,r=new Fn,s=new Fn,a=new Fn){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=bn){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],d=r[8],_=r[9],v=r[10],m=r[11],p=r[12],E=r[13],T=r[14],y=r[15];if(i[0].setComponents(l-s,f-c,m-d,y-p).normalize(),i[1].setComponents(l+s,f+c,m+d,y+p).normalize(),i[2].setComponents(l+a,f+u,m+_,y+E).normalize(),i[3].setComponents(l-a,f-u,m-_,y-E).normalize(),i[4].setComponents(l-o,f-h,m-v,y-T).normalize(),e===bn)i[5].setComponents(l+o,f+h,m+v,y+T).normalize();else if(e===Gs)i[5].setComponents(o,h,v,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(jn)}intersectsSprite(t){jn.center.set(0,0,0);const e=Kd.distanceTo(t.center);return jn.radius=.7071067811865476+e,jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(gs.x=r.normal.x>0?t.max.x:t.min.x,gs.y=r.normal.y>0?t.max.y:t.min.y,gs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(gs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class el extends Xn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const $s=new N,Ys=new N,Tc=new ce,Sr=new Fl,vs=new da,qa=new N,bc=new N;class Ac extends ve{constructor(t=new Be,e=new el){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)$s.fromBufferAttribute(e,r-1),Ys.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=$s.distanceTo(Ys);t.setAttribute("lineDistance",new Ye(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vs.copy(i.boundingSphere),vs.applyMatrix4(r),vs.radius+=s,t.ray.intersectsSphere(vs)===!1)return;Tc.copy(r).invert(),Sr.copy(t.ray).applyMatrix4(Tc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let v=d,m=_-1;v<m;v+=c){const p=u.getX(v),E=u.getX(v+1),T=xs(this,t,Sr,l,p,E,v);T&&e.push(T)}if(this.isLineLoop){const v=u.getX(_-1),m=u.getX(d),p=xs(this,t,Sr,l,v,m,_-1);p&&e.push(p)}}else{const d=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let v=d,m=_-1;v<m;v+=c){const p=xs(this,t,Sr,l,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){const v=xs(this,t,Sr,l,_-1,d,_-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function xs(n,t,e,i,r,s,a){const o=n.geometry.attributes.position;if($s.fromBufferAttribute(o,r),Ys.fromBufferAttribute(o,s),e.distanceSqToSegment($s,Ys,qa,bc)>i)return;qa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(qa);if(!(c<t.near||c>t.far))return{distance:c,point:bc.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class jd extends Te{constructor(t,e,i,r,s,a,o,l,c){super(t,e,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _h extends Te{constructor(t,e,i=ui,r,s,a,o=nn,l=nn,c,u=zr,h=1){if(u!==zr&&u!==kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:h};super(f,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Nl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ma extends Be{constructor(t=1,e=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],d=[];let _=0;const v=[],m=i/2;let p=0;E(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new Ye(h,3)),this.setAttribute("normal",new Ye(f,3)),this.setAttribute("uv",new Ye(d,2));function E(){const y=new N,D=new N;let P=0;const A=(e-t)/i;for(let C=0;C<=s;C++){const S=[],x=C/s,b=x*(e-t)+t;for(let z=0;z<=r;z++){const O=z/r,K=O*l+o,J=Math.sin(K),Z=Math.cos(K);D.x=b*J,D.y=-x*i+m,D.z=b*Z,h.push(D.x,D.y,D.z),y.set(J,A,Z).normalize(),f.push(y.x,y.y,y.z),d.push(O,1-x),S.push(_++)}v.push(S)}for(let C=0;C<r;C++)for(let S=0;S<s;S++){const x=v[S][C],b=v[S+1][C],z=v[S+1][C+1],O=v[S][C+1];(t>0||S!==0)&&(u.push(x,b,O),P+=3),(e>0||S!==s-1)&&(u.push(b,z,O),P+=3)}c.addGroup(p,P,0),p+=P}function T(y){const D=_,P=new Ut,A=new N;let C=0;const S=y===!0?t:e,x=y===!0?1:-1;for(let z=1;z<=r;z++)h.push(0,m*x,0),f.push(0,x,0),d.push(.5,.5),_++;const b=_;for(let z=0;z<=r;z++){const K=z/r*l+o,J=Math.cos(K),Z=Math.sin(K);A.x=S*Z,A.y=m*x,A.z=S*J,h.push(A.x,A.y,A.z),f.push(0,x,0),P.x=J*.5+.5,P.y=Z*.5*x+.5,d.push(P.x,P.y),_++}for(let z=0;z<r;z++){const O=D+z,K=b+z;y===!0?u.push(K,K+1,O):u.push(K+1,K,O),C+=3}c.addGroup(p,C,y===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ma(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _a extends Be{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=t/o,f=e/l,d=[],_=[],v=[],m=[];for(let p=0;p<u;p++){const E=p*f-a;for(let T=0;T<c;T++){const y=T*h-s;_.push(y,-E,0),v.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){const T=E+c*p,y=E+c*(p+1),D=E+1+c*(p+1),P=E+1+c*p;d.push(T,y,P),d.push(y,D,P)}this.setIndex(d),this.setAttribute("position",new Ye(_,3)),this.setAttribute("normal",new Ye(v,3)),this.setAttribute("uv",new Ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _a(t.width,t.height,t.widthSegments,t.heightSegments)}}class Jd extends Xn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ul,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qd extends Xn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ul,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=Al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class tp extends Xn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ep extends Xn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class np extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ip extends np{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}class gh extends hh{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class rp extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Rc{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=$t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos($t(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class sp extends _i{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Cc(n,t,e,i){const r=ap(i);switch(e){case Ju:return n*t;case th:return n*t/r.components*r.byteLength;case Dl:return n*t/r.components*r.byteLength;case eh:return n*t*2/r.components*r.byteLength;case Ll:return n*t*2/r.components*r.byteLength;case Qu:return n*t*3/r.components*r.byteLength;case tn:return n*t*4/r.components*r.byteLength;case Il:return n*t*4/r.components*r.byteLength;case Cs:case Ps:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ds:case Ls:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ro:case Po:return Math.max(n,16)*Math.max(t,8)/4;case Ao:case Co:return Math.max(n,8)*Math.max(t,8)/2;case Do:case Lo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Io:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Uo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case No:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Oo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case zo:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ko:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ho:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Vo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Go:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Wo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Xo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case $o:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Yo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Is:case qo:case Zo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case nh:case Ko:return Math.ceil(n/4)*Math.ceil(t/4)*8;case jo:case Jo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ap(n){switch(n){case Rn:case Zu:return{byteLength:1,components:1};case Or:case Ku:case $r:return{byteLength:2,components:1};case Cl:case Pl:return{byteLength:2,components:4};case ui:case Rl:case Tn:return{byteLength:4,components:1};case ju:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vh(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function op(n){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],v=h[d];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,h[f]=v)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const v=h[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var lp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cp=`#ifdef USE_ALPHAHASH
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
#endif`,up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pp=`#ifdef USE_AOMAP
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
#endif`,mp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_p=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yp=`#ifdef USE_IRIDESCENCE
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
#endif`,Sp=`#ifdef USE_BUMPMAP
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
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Dp=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Lp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ip=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bp="gl_FragColor = linearToOutputTexel( gl_FragColor );",zp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$p=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zp=`#ifdef USE_GRADIENTMAP
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
}`,Kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qp=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,tm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,em=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,im=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,am=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,om=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,um=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_m=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gm=`#if defined( USE_POINTS_UV )
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
#endif`,vm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ym=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Em=`#ifdef USE_MORPHTARGETS
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
#endif`,wm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pm=`#ifdef USE_NORMALMAP
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
#endif`,Dm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Im=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,$m=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Ym=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qm=`#ifdef USE_SKINNING
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
#endif`,Zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Km=`#ifdef USE_SKINNING
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
#endif`,jm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,e_=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,n_=`#ifdef USE_TRANSMISSION
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
#endif`,i_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const o_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l_=`uniform sampler2D t2D;
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
}`,c_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d_=`#include <common>
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
}`,p_=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,m_=`#define DISTANCE
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
}`,__=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,g_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x_=`uniform float scale;
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
}`,M_=`uniform vec3 diffuse;
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
}`,y_=`#include <common>
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
}`,S_=`uniform vec3 diffuse;
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
}`,E_=`#define LAMBERT
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
}`,w_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,T_=`#define MATCAP
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
}`,b_=`#define MATCAP
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
}`,A_=`#define NORMAL
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
}`,R_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,C_=`#define PHONG
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
}`,P_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,D_=`#define STANDARD
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
}`,L_=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,I_=`#define TOON
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
}`,U_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,N_=`uniform float size;
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
}`,F_=`uniform vec3 diffuse;
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
}`,O_=`#include <common>
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
}`,B_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,z_=`uniform float rotation;
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
}`,k_=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:lp,alphahash_pars_fragment:cp,alphamap_fragment:up,alphamap_pars_fragment:hp,alphatest_fragment:fp,alphatest_pars_fragment:dp,aomap_fragment:pp,aomap_pars_fragment:mp,batching_pars_vertex:_p,batching_vertex:gp,begin_vertex:vp,beginnormal_vertex:xp,bsdfs:Mp,iridescence_fragment:yp,bumpmap_pars_fragment:Sp,clipping_planes_fragment:Ep,clipping_planes_pars_fragment:wp,clipping_planes_pars_vertex:Tp,clipping_planes_vertex:bp,color_fragment:Ap,color_pars_fragment:Rp,color_pars_vertex:Cp,color_vertex:Pp,common:Dp,cube_uv_reflection_fragment:Lp,defaultnormal_vertex:Ip,displacementmap_pars_vertex:Up,displacementmap_vertex:Np,emissivemap_fragment:Fp,emissivemap_pars_fragment:Op,colorspace_fragment:Bp,colorspace_pars_fragment:zp,envmap_fragment:kp,envmap_common_pars_fragment:Hp,envmap_pars_fragment:Vp,envmap_pars_vertex:Gp,envmap_physical_pars_fragment:tm,envmap_vertex:Wp,fog_vertex:Xp,fog_pars_vertex:$p,fog_fragment:Yp,fog_pars_fragment:qp,gradientmap_pars_fragment:Zp,lightmap_pars_fragment:Kp,lights_lambert_fragment:jp,lights_lambert_pars_fragment:Jp,lights_pars_begin:Qp,lights_toon_fragment:em,lights_toon_pars_fragment:nm,lights_phong_fragment:im,lights_phong_pars_fragment:rm,lights_physical_fragment:sm,lights_physical_pars_fragment:am,lights_fragment_begin:om,lights_fragment_maps:lm,lights_fragment_end:cm,logdepthbuf_fragment:um,logdepthbuf_pars_fragment:hm,logdepthbuf_pars_vertex:fm,logdepthbuf_vertex:dm,map_fragment:pm,map_pars_fragment:mm,map_particle_fragment:_m,map_particle_pars_fragment:gm,metalnessmap_fragment:vm,metalnessmap_pars_fragment:xm,morphinstance_vertex:Mm,morphcolor_vertex:ym,morphnormal_vertex:Sm,morphtarget_pars_vertex:Em,morphtarget_vertex:wm,normal_fragment_begin:Tm,normal_fragment_maps:bm,normal_pars_fragment:Am,normal_pars_vertex:Rm,normal_vertex:Cm,normalmap_pars_fragment:Pm,clearcoat_normal_fragment_begin:Dm,clearcoat_normal_fragment_maps:Lm,clearcoat_pars_fragment:Im,iridescence_pars_fragment:Um,opaque_fragment:Nm,packing:Fm,premultiplied_alpha_fragment:Om,project_vertex:Bm,dithering_fragment:zm,dithering_pars_fragment:km,roughnessmap_fragment:Hm,roughnessmap_pars_fragment:Vm,shadowmap_pars_fragment:Gm,shadowmap_pars_vertex:Wm,shadowmap_vertex:Xm,shadowmask_pars_fragment:$m,skinbase_vertex:Ym,skinning_pars_vertex:qm,skinning_vertex:Zm,skinnormal_vertex:Km,specularmap_fragment:jm,specularmap_pars_fragment:Jm,tonemapping_fragment:Qm,tonemapping_pars_fragment:t_,transmission_fragment:e_,transmission_pars_fragment:n_,uv_pars_fragment:i_,uv_pars_vertex:r_,uv_vertex:s_,worldpos_vertex:a_,background_vert:o_,background_frag:l_,backgroundCube_vert:c_,backgroundCube_frag:u_,cube_vert:h_,cube_frag:f_,depth_vert:d_,depth_frag:p_,distanceRGBA_vert:m_,distanceRGBA_frag:__,equirect_vert:g_,equirect_frag:v_,linedashed_vert:x_,linedashed_frag:M_,meshbasic_vert:y_,meshbasic_frag:S_,meshlambert_vert:E_,meshlambert_frag:w_,meshmatcap_vert:T_,meshmatcap_frag:b_,meshnormal_vert:A_,meshnormal_frag:R_,meshphong_vert:C_,meshphong_frag:P_,meshphysical_vert:D_,meshphysical_frag:L_,meshtoon_vert:I_,meshtoon_frag:U_,points_vert:N_,points_frag:F_,shadow_vert:O_,shadow_frag:B_,sprite_vert:z_,sprite_frag:k_},mt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},on={basic:{uniforms:we([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:we([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:we([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:we([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:we([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:we([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:we([mt.points,mt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:we([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:we([mt.common,mt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:we([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:we([mt.sprite,mt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:we([mt.common,mt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:we([mt.lights,mt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};on.physical={uniforms:we([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Ms={r:0,b:0,g:0},Jn=new rn,H_=new ce;function V_(n,t,e,i,r,s,a){const o=new Yt(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function _(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?e:t).get(y)),y}function v(T){let y=!1;const D=_(T);D===null?p(o,l):D&&D.isColor&&(p(D,1),y=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,y){const D=_(y);D&&(D.isCubeTexture||D.mapping===fa)?(u===void 0&&(u=new Oe(new hr(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:ir(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Jn.copy(y.backgroundRotation),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),u.material.uniforms.envMap.value=D,u.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(H_.makeRotationFromEuler(Jn)),u.material.toneMapped=jt.getTransfer(D.colorSpace)!==te,(h!==D||f!==D.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=D,f=D.version,d=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new Oe(new _a(2,2),new Wn({name:"BackgroundMaterial",uniforms:ir(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=jt.getTransfer(D.colorSpace)!==te,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(h!==D||f!==D.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=D,f=D.version,d=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,y){T.getRGB(Ms,uh(n)),i.buffers.color.setClear(Ms.r,Ms.g,Ms.b,y,a)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,y=1){o.set(T),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(o,l)},render:v,addToRenderList:m,dispose:E}}function G_(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(x,b,z,O,K){let J=!1;const Z=h(O,z,b);s!==Z&&(s=Z,c(s.object)),J=d(x,O,z,K),J&&_(x,O,z,K),K!==null&&t.update(K,n.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,y(x,b,z,O),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function h(x,b,z){const O=z.wireframe===!0;let K=i[x.id];K===void 0&&(K={},i[x.id]=K);let J=K[b.id];J===void 0&&(J={},K[b.id]=J);let Z=J[O];return Z===void 0&&(Z=f(l()),J[O]=Z),Z}function f(x){const b=[],z=[],O=[];for(let K=0;K<e;K++)b[K]=0,z[K]=0,O[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:z,attributeDivisors:O,object:x,attributes:{},index:null}}function d(x,b,z,O){const K=s.attributes,J=b.attributes;let Z=0;const nt=z.getAttributes();for(const $ in nt)if(nt[$].location>=0){const it=K[$];let B=J[$];if(B===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(B=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(B=x.instanceColor)),it===void 0||it.attribute!==B||B&&it.data!==B.data)return!0;Z++}return s.attributesNum!==Z||s.index!==O}function _(x,b,z,O){const K={},J=b.attributes;let Z=0;const nt=z.getAttributes();for(const $ in nt)if(nt[$].location>=0){let it=J[$];it===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(it=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(it=x.instanceColor));const B={};B.attribute=it,it&&it.data&&(B.data=it.data),K[$]=B,Z++}s.attributes=K,s.attributesNum=Z,s.index=O}function v(){const x=s.newAttributes;for(let b=0,z=x.length;b<z;b++)x[b]=0}function m(x){p(x,0)}function p(x,b){const z=s.newAttributes,O=s.enabledAttributes,K=s.attributeDivisors;z[x]=1,O[x]===0&&(n.enableVertexAttribArray(x),O[x]=1),K[x]!==b&&(n.vertexAttribDivisor(x,b),K[x]=b)}function E(){const x=s.newAttributes,b=s.enabledAttributes;for(let z=0,O=b.length;z<O;z++)b[z]!==x[z]&&(n.disableVertexAttribArray(z),b[z]=0)}function T(x,b,z,O,K,J,Z){Z===!0?n.vertexAttribIPointer(x,b,z,K,J):n.vertexAttribPointer(x,b,z,O,K,J)}function y(x,b,z,O){v();const K=O.attributes,J=z.getAttributes(),Z=b.defaultAttributeValues;for(const nt in J){const $=J[nt];if($.location>=0){let G=K[nt];if(G===void 0&&(nt==="instanceMatrix"&&x.instanceMatrix&&(G=x.instanceMatrix),nt==="instanceColor"&&x.instanceColor&&(G=x.instanceColor)),G!==void 0){const it=G.normalized,B=G.itemSize,ut=t.get(G);if(ut===void 0)continue;const At=ut.buffer,Y=ut.type,rt=ut.bytesPerElement,at=Y===n.INT||Y===n.UNSIGNED_INT||G.gpuType===Rl;if(G.isInterleavedBufferAttribute){const st=G.data,ft=st.stride,Tt=G.offset;if(st.isInstancedInterleavedBuffer){for(let _t=0;_t<$.locationSize;_t++)p($.location+_t,st.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let _t=0;_t<$.locationSize;_t++)m($.location+_t);n.bindBuffer(n.ARRAY_BUFFER,At);for(let _t=0;_t<$.locationSize;_t++)T($.location+_t,B/$.locationSize,Y,it,ft*rt,(Tt+B/$.locationSize*_t)*rt,at)}else{if(G.isInstancedBufferAttribute){for(let st=0;st<$.locationSize;st++)p($.location+st,G.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let st=0;st<$.locationSize;st++)m($.location+st);n.bindBuffer(n.ARRAY_BUFFER,At);for(let st=0;st<$.locationSize;st++)T($.location+st,B/$.locationSize,Y,it,B*rt,B/$.locationSize*st*rt,at)}}else if(Z!==void 0){const it=Z[nt];if(it!==void 0)switch(it.length){case 2:n.vertexAttrib2fv($.location,it);break;case 3:n.vertexAttrib3fv($.location,it);break;case 4:n.vertexAttrib4fv($.location,it);break;default:n.vertexAttrib1fv($.location,it)}}}}E()}function D(){C();for(const x in i){const b=i[x];for(const z in b){const O=b[z];for(const K in O)u(O[K].object),delete O[K];delete b[z]}delete i[x]}}function P(x){if(i[x.id]===void 0)return;const b=i[x.id];for(const z in b){const O=b[z];for(const K in O)u(O[K].object),delete O[K];delete b[z]}delete i[x.id]}function A(x){for(const b in i){const z=i[b];if(z[x.id]===void 0)continue;const O=z[x.id];for(const K in O)u(O[K].object),delete O[K];delete z[x.id]}}function C(){S(),a=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:P,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function W_(n,t,e){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];e.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)a(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let _=0;for(let v=0;v<h;v++)_+=u[v]*f[v];e.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function X_(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==tn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const C=A===$r&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Rn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Tn&&!C)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=_>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:y,vertexTextures:D,maxSamples:P}}function $_(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new Fn,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const E=s?0:i,T=E*4;let y=p.clippingState||null;l.value=y,y=u(_,f,T,d);for(let D=0;D!==T;++D)y[D]=e[D];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,_){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const p=d+v*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,y=d;T!==v;++T,y+=4)a.copy(h[T]).applyMatrix4(E,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Y_(n){let t=new WeakMap;function e(a,o){return o===Eo?a.mapping=tr:o===wo&&(a.mapping=er),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Eo||o===wo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Gd(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const Vi=4,Pc=[.125,.215,.35,.446,.526,.582],ri=20,Za=new gh,Dc=new Yt;let Ka=null,ja=0,Ja=0,Qa=!1;const ei=(1+Math.sqrt(5))/2,Fi=1/ei,Lc=[new N(-ei,Fi,0),new N(ei,Fi,0),new N(-Fi,0,ei),new N(Fi,0,ei),new N(0,ei,-Fi),new N(0,ei,Fi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],q_=new N;class Ic{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100,s={}){const{size:a=256,position:o=q_}=s;Ka=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ka,ja,Ja),this._renderer.xr.enabled=Qa,t.scissorTest=!1,ys(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===tr||t.mapping===er?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ka=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:$r,format:tn,colorSpace:nr,depthBuffer:!1},r=Uc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uc(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Z_(s)),this._blurMaterial=K_(s,t,e)}return r}_compileMaterial(t){const e=new Oe(this._lodPlanes[0],t);this._renderer.compile(e,Za)}_sceneToCubeUV(t,e,i,r,s){const l=new je(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Dc),h.toneMapping=kn,h.autoClear=!1;const _=new pa({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),v=new Oe(new hr,_);let m=!1;const p=t.background;p?p.isColor&&(_.color.copy(p),t.background=null,m=!0):(_.color.copy(Dc),m=!0);for(let E=0;E<6;E++){const T=E%3;T===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[E],s.y,s.z)):T===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[E]));const y=this._cubeSize;ys(r,T*y,E>2?y:0,y,y),h.setRenderTarget(r),m&&h.render(v,l),h.render(t,l)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===tr||t.mapping===er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Oe(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;ys(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Za)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Lc[(r-s-1)%Lc.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Oe(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ri-1),v=s/_,m=isFinite(s)?1+Math.floor(u*v):ri;m>ri&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ri}`);const p=[];let E=0;for(let A=0;A<ri;++A){const C=A/v,S=Math.exp(-C*C/2);p.push(S),A===0?E+=S:A<m&&(E+=2*S)}for(let A=0;A<p.length;A++)p[A]=p[A]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=_,f.mipInt.value=T-i;const y=this._sizeLods[r],D=3*y*(r>T-Vi?r-T+Vi:0),P=4*(this._cubeSize-y);ys(e,D,P,3*y,2*y),l.setRenderTarget(e),l.render(h,Za)}}function Z_(n){const t=[],e=[],i=[];let r=n;const s=n-Vi+1+Pc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-Vi?l=Pc[a-n+Vi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,v=3,m=2,p=1,E=new Float32Array(v*_*d),T=new Float32Array(m*_*d),y=new Float32Array(p*_*d);for(let P=0;P<d;P++){const A=P%3*2/3-1,C=P>2?0:-1,S=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];E.set(S,v*_*P),T.set(f,m*_*P);const x=[P,P,P,P,P,P];y.set(x,p*_*P)}const D=new Be;D.setAttribute("position",new $e(E,v)),D.setAttribute("uv",new $e(T,m)),D.setAttribute("faceIndex",new $e(y,p)),t.push(D),r>Vi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Uc(n,t,e){const i=new fi(n,t,e);return i.texture.mapping=fa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ys(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function K_(n,t,e){const i=new Float32Array(ri),r=new N(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Nc(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Fc(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Ol(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function j_(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Eo||l===wo,u=l===tr||l===er;if(c||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Ic(n)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&r(d)?(e===null&&(e=new Ic(n)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function J_(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Yi("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Q_(n,t,e,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete r[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)t.update(f[d],n.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,_=h.attributes.position;let v=0;if(d!==null){const E=d.array;v=d.version;for(let T=0,y=E.length;T<y;T+=3){const D=E[T+0],P=E[T+1],A=E[T+2];f.push(D,P,P,A,A,D)}}else if(_!==void 0){const E=_.array;v=_.version;for(let T=0,y=E.length/3-1;T<y;T+=3){const D=T+0,P=T+1,A=T+2;f.push(D,P,P,A,A,D)}}else return;const m=new(rh(f)?ch:lh)(f,1);m.version=v;const p=s.get(h);p&&t.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function tg(n,t,e){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){n.drawElements(i,d,s,f*a),e.update(d,i,1)}function c(f,d,_){_!==0&&(n.drawElementsInstanced(i,d,s,f*a,_),e.update(d,i,_))}function u(f,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];e.update(m,i,1)}function h(f,d,_,v){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,v,0,_);let p=0;for(let E=0;E<_;E++)p+=d[E]*v[E];e.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function eg(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function ng(n,t,e){const i=new WeakMap,r=new he;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let x=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",x)};var d=x;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let y=0;_===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let D=o.attributes.position.count*y,P=1;D>t.maxTextureSize&&(P=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const A=new Float32Array(D*P*4*h),C=new sh(A,D,P,h);C.type=Tn,C.needsUpdate=!0;const S=y*4;for(let b=0;b<h;b++){const z=p[b],O=E[b],K=T[b],J=D*P*4*b;for(let Z=0;Z<z.count;Z++){const nt=Z*S;_===!0&&(r.fromBufferAttribute(z,Z),A[J+nt+0]=r.x,A[J+nt+1]=r.y,A[J+nt+2]=r.z,A[J+nt+3]=0),v===!0&&(r.fromBufferAttribute(O,Z),A[J+nt+4]=r.x,A[J+nt+5]=r.y,A[J+nt+6]=r.z,A[J+nt+7]=0),m===!0&&(r.fromBufferAttribute(K,Z),A[J+nt+8]=r.x,A[J+nt+9]=r.y,A[J+nt+10]=r.z,A[J+nt+11]=K.itemSize===4?r.w:1)}}f={count:h,texture:C,size:new Ut(D,P)},i.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function ig(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const xh=new Te,Oc=new _h(1,1),Mh=new sh,yh=new bd,Sh=new fh,Bc=[],zc=[],kc=new Float32Array(16),Hc=new Float32Array(9),Vc=new Float32Array(4);function fr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Bc[r];if(s===void 0&&(s=new Float32Array(r),Bc[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function me(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function _e(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ga(n,t){let e=zc[t];e===void 0&&(e=new Int32Array(t),zc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function rg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function sg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;n.uniform2fv(this.addr,t),_e(e,t)}}function ag(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;n.uniform3fv(this.addr,t),_e(e,t)}}function og(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;n.uniform4fv(this.addr,t),_e(e,t)}}function lg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(me(e,i))return;Vc.set(i),n.uniformMatrix2fv(this.addr,!1,Vc),_e(e,i)}}function cg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(me(e,i))return;Hc.set(i),n.uniformMatrix3fv(this.addr,!1,Hc),_e(e,i)}}function ug(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(me(e,i))return;kc.set(i),n.uniformMatrix4fv(this.addr,!1,kc),_e(e,i)}}function hg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function fg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;n.uniform2iv(this.addr,t),_e(e,t)}}function dg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;n.uniform3iv(this.addr,t),_e(e,t)}}function pg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;n.uniform4iv(this.addr,t),_e(e,t)}}function mg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function _g(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;n.uniform2uiv(this.addr,t),_e(e,t)}}function gg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;n.uniform3uiv(this.addr,t),_e(e,t)}}function vg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;n.uniform4uiv(this.addr,t),_e(e,t)}}function xg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Oc.compareFunction=ih,s=Oc):s=xh,e.setTexture2D(t||s,r)}function Mg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||yh,r)}function yg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Sh,r)}function Sg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Mh,r)}function Eg(n){switch(n){case 5126:return rg;case 35664:return sg;case 35665:return ag;case 35666:return og;case 35674:return lg;case 35675:return cg;case 35676:return ug;case 5124:case 35670:return hg;case 35667:case 35671:return fg;case 35668:case 35672:return dg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return _g;case 36295:return gg;case 36296:return vg;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return yg;case 36289:case 36303:case 36311:case 36292:return Sg}}function wg(n,t){n.uniform1fv(this.addr,t)}function Tg(n,t){const e=fr(t,this.size,2);n.uniform2fv(this.addr,e)}function bg(n,t){const e=fr(t,this.size,3);n.uniform3fv(this.addr,e)}function Ag(n,t){const e=fr(t,this.size,4);n.uniform4fv(this.addr,e)}function Rg(n,t){const e=fr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Cg(n,t){const e=fr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Pg(n,t){const e=fr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Dg(n,t){n.uniform1iv(this.addr,t)}function Lg(n,t){n.uniform2iv(this.addr,t)}function Ig(n,t){n.uniform3iv(this.addr,t)}function Ug(n,t){n.uniform4iv(this.addr,t)}function Ng(n,t){n.uniform1uiv(this.addr,t)}function Fg(n,t){n.uniform2uiv(this.addr,t)}function Og(n,t){n.uniform3uiv(this.addr,t)}function Bg(n,t){n.uniform4uiv(this.addr,t)}function zg(n,t,e){const i=this.cache,r=t.length,s=ga(e,r);me(i,s)||(n.uniform1iv(this.addr,s),_e(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||xh,s[a])}function kg(n,t,e){const i=this.cache,r=t.length,s=ga(e,r);me(i,s)||(n.uniform1iv(this.addr,s),_e(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||yh,s[a])}function Hg(n,t,e){const i=this.cache,r=t.length,s=ga(e,r);me(i,s)||(n.uniform1iv(this.addr,s),_e(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Sh,s[a])}function Vg(n,t,e){const i=this.cache,r=t.length,s=ga(e,r);me(i,s)||(n.uniform1iv(this.addr,s),_e(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Mh,s[a])}function Gg(n){switch(n){case 5126:return wg;case 35664:return Tg;case 35665:return bg;case 35666:return Ag;case 35674:return Rg;case 35675:return Cg;case 35676:return Pg;case 5124:case 35670:return Dg;case 35667:case 35671:return Lg;case 35668:case 35672:return Ig;case 35669:case 35673:return Ug;case 5125:return Ng;case 36294:return Fg;case 36295:return Og;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return Vg}}class Wg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Eg(e.type)}}class Xg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gg(e.type)}}class $g{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const to=/(\w+)(\])?(\[|\.)?/g;function Gc(n,t){n.seq.push(t),n.map[t.id]=t}function Yg(n,t,e){const i=n.name,r=i.length;for(to.lastIndex=0;;){const s=to.exec(i),a=to.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Gc(e,c===void 0?new Wg(o,n,t):new Xg(o,n,t));break}else{let h=e.map[o];h===void 0&&(h=new $g(o),Gc(e,h)),e=h}}}class Ns{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);Yg(s,a,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function Wc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const qg=37297;let Zg=0;function Kg(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Xc=new Ht;function jg(n){jt._getMatrix(Xc,jt.workingColorSpace,n);const t=`mat3( ${Xc.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(n)){case Vs:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function $c(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Kg(n.getShaderSource(t),a)}else return r}function Jg(n,t){const e=jg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Qg(n,t){let e;switch(t){case jf:e="Linear";break;case Jf:e="Reinhard";break;case Qf:e="Cineon";break;case td:e="ACESFilmic";break;case nd:e="AgX";break;case id:e="Neutral";break;case ed:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ss=new N;function t0(){jt.getLuminanceCoefficients(Ss);const n=Ss.x.toFixed(4),t=Ss.y.toFixed(4),e=Ss.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function n0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function i0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Rr(n){return n!==""}function Yc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const r0=/^[ \t]*#include +<([\w\d./]+)>/gm;function nl(n){return n.replace(r0,a0)}const s0=new Map;function a0(n,t){let e=Vt[t];if(e===void 0){const i=s0.get(t);if(i!==void 0)e=Vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return nl(e)}const o0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zc(n){return n.replace(o0,l0)}function l0(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Kc(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function c0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Yu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Pf?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===En&&(t="SHADOWMAP_TYPE_VSM"),t}function u0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case tr:case er:t="ENVMAP_TYPE_CUBE";break;case fa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function h0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case er:t="ENVMAP_MODE_REFRACTION";break}return t}function f0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Al:t="ENVMAP_BLENDING_MULTIPLY";break;case Zf:t="ENVMAP_BLENDING_MIX";break;case Kf:t="ENVMAP_BLENDING_ADD";break}return t}function d0(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function p0(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=c0(e),c=u0(e),u=h0(e),h=f0(e),f=d0(e),d=e0(e),_=n0(s),v=r.createProgram();let m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Rr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Rr).join(`
`),p.length>0&&(p+=`
`)):(m=[Kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),p=[Kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==kn?Qg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,Jg("linearToOutputTexel",e.outputColorSpace),t0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rr).join(`
`)),a=nl(a),a=Yc(a,e),a=qc(a,e),o=nl(o),o=Yc(o,e),o=qc(o,e),a=Zc(a),o=Zc(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=E+m+a,y=E+p+o,D=Wc(r,r.VERTEX_SHADER,T),P=Wc(r,r.FRAGMENT_SHADER,y);r.attachShader(v,D),r.attachShader(v,P),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(b){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(v).trim(),O=r.getShaderInfoLog(D).trim(),K=r.getShaderInfoLog(P).trim();let J=!0,Z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,D,P);else{const nt=$c(r,D,"vertex"),$=$c(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+z+`
`+nt+`
`+$)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||K==="")&&(Z=!1);Z&&(b.diagnostics={runnable:J,programLog:z,vertexShader:{log:O,prefix:m},fragmentShader:{log:K,prefix:p}})}r.deleteShader(D),r.deleteShader(P),C=new Ns(r,v),S=i0(r,v)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(v,qg)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=P,this}let m0=0;class _0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new g0(t),e.set(t,i)),i}}class g0{constructor(t){this.id=m0++,this.code=t,this.usedTimes=0}}function v0(n,t,e,i,r,s,a){const o=new ah,l=new _0,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,x,b,z,O){const K=z.fog,J=O.geometry,Z=S.isMeshStandardMaterial?z.environment:null,nt=(S.isMeshStandardMaterial?e:t).get(S.envMap||Z),$=nt&&nt.mapping===fa?nt.image.height:null,G=_[S.type];S.precision!==null&&(d=r.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const it=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,B=it!==void 0?it.length:0;let ut=0;J.morphAttributes.position!==void 0&&(ut=1),J.morphAttributes.normal!==void 0&&(ut=2),J.morphAttributes.color!==void 0&&(ut=3);let At,Y,rt,at;if(G){const Jt=on[G];At=Jt.vertexShader,Y=Jt.fragmentShader}else At=S.vertexShader,Y=S.fragmentShader,l.update(S),rt=l.getVertexShaderID(S),at=l.getFragmentShaderID(S);const st=n.getRenderTarget(),ft=n.state.buffers.depth.getReversed(),Tt=O.isInstancedMesh===!0,_t=O.isBatchedMesh===!0,Xt=!!S.map,qt=!!S.matcap,kt=!!nt,R=!!S.aoMap,Gt=!!S.lightMap,Nt=!!S.bumpMap,Wt=!!S.normalMap,tt=!!S.displacementMap,Rt=!!S.emissiveMap,H=!!S.metalnessMap,j=!!S.roughnessMap,xt=S.anisotropy>0,w=S.clearcoat>0,g=S.dispersion>0,L=S.iridescence>0,k=S.sheen>0,q=S.transmission>0,V=xt&&!!S.anisotropyMap,gt=w&&!!S.clearcoatMap,dt=w&&!!S.clearcoatNormalMap,pt=w&&!!S.clearcoatRoughnessMap,Mt=L&&!!S.iridescenceMap,et=L&&!!S.iridescenceThicknessMap,St=k&&!!S.sheenColorMap,Lt=k&&!!S.sheenRoughnessMap,Pt=!!S.specularMap,ot=!!S.specularColorMap,Ft=!!S.specularIntensityMap,I=q&&!!S.transmissionMap,vt=q&&!!S.thicknessMap,lt=!!S.gradientMap,Et=!!S.alphaMap,ct=S.alphaTest>0,Q=!!S.alphaHash,bt=!!S.extensions;let Bt=kn;S.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Bt=n.toneMapping);const ie={shaderID:G,shaderType:S.type,shaderName:S.name,vertexShader:At,fragmentShader:Y,defines:S.defines,customVertexShaderID:rt,customFragmentShaderID:at,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:_t,batchingColor:_t&&O._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&O.instanceColor!==null,instancingMorph:Tt&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:st===null?n.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:nr,alphaToCoverage:!!S.alphaToCoverage,map:Xt,matcap:qt,envMap:kt,envMapMode:kt&&nt.mapping,envMapCubeUVHeight:$,aoMap:R,lightMap:Gt,bumpMap:Nt,normalMap:Wt,displacementMap:f&&tt,emissiveMap:Rt,normalMapObjectSpace:Wt&&S.normalMapType===od,normalMapTangentSpace:Wt&&S.normalMapType===Ul,metalnessMap:H,roughnessMap:j,anisotropy:xt,anisotropyMap:V,clearcoat:w,clearcoatMap:gt,clearcoatNormalMap:dt,clearcoatRoughnessMap:pt,dispersion:g,iridescence:L,iridescenceMap:Mt,iridescenceThicknessMap:et,sheen:k,sheenColorMap:St,sheenRoughnessMap:Lt,specularMap:Pt,specularColorMap:ot,specularIntensityMap:Ft,transmission:q,transmissionMap:I,thicknessMap:vt,gradientMap:lt,opaque:S.transparent===!1&&S.blending===$i&&S.alphaToCoverage===!1,alphaMap:Et,alphaTest:ct,alphaHash:Q,combine:S.combine,mapUv:Xt&&v(S.map.channel),aoMapUv:R&&v(S.aoMap.channel),lightMapUv:Gt&&v(S.lightMap.channel),bumpMapUv:Nt&&v(S.bumpMap.channel),normalMapUv:Wt&&v(S.normalMap.channel),displacementMapUv:tt&&v(S.displacementMap.channel),emissiveMapUv:Rt&&v(S.emissiveMap.channel),metalnessMapUv:H&&v(S.metalnessMap.channel),roughnessMapUv:j&&v(S.roughnessMap.channel),anisotropyMapUv:V&&v(S.anisotropyMap.channel),clearcoatMapUv:gt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:dt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:et&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:St&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&v(S.sheenRoughnessMap.channel),specularMapUv:Pt&&v(S.specularMap.channel),specularColorMapUv:ot&&v(S.specularColorMap.channel),specularIntensityMapUv:Ft&&v(S.specularIntensityMap.channel),transmissionMapUv:I&&v(S.transmissionMap.channel),thicknessMapUv:vt&&v(S.thicknessMap.channel),alphaMapUv:Et&&v(S.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Wt||xt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!J.attributes.uv&&(Xt||Et),fog:!!K,useFog:S.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ft,skinning:O.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:ut,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&b.length>0,shadowMapType:n.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Xt&&S.map.isVideoTexture===!0&&jt.getTransfer(S.map.colorSpace)===te,decodeVideoTextureEmissive:Rt&&S.emissiveMap.isVideoTexture===!0&&jt.getTransfer(S.emissiveMap.colorSpace)===te,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ln,flipSided:S.side===Pe,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:bt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&S.extensions.multiDraw===!0||_t)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ie.vertexUv1s=c.has(1),ie.vertexUv2s=c.has(2),ie.vertexUv3s=c.has(3),c.clear(),ie}function p(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const b in S.defines)x.push(b),x.push(S.defines[b]);return S.isRawShaderMaterial===!1&&(E(x,S),T(x,S),x.push(n.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function E(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function T(S,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){const x=_[S.type];let b;if(x){const z=on[x];b=zd.clone(z.uniforms)}else b=S.uniforms;return b}function D(S,x){let b;for(let z=0,O=u.length;z<O;z++){const K=u[z];if(K.cacheKey===x){b=K,++b.usedTimes;break}}return b===void 0&&(b=new p0(n,x,S,s),u.push(b)),b}function P(S){if(--S.usedTimes===0){const x=u.indexOf(S);u[x]=u[u.length-1],u.pop(),S.destroy()}}function A(S){l.remove(S)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:D,releaseProgram:P,releaseShaderCache:A,programs:u,dispose:C}}function x0(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function M0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function jc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Jc(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(h,f,d,_,v,m){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:v,group:m},n[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=v,p.group=m),t++,p}function o(h,f,d,_,v,m){const p=a(h,f,d,_,v,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):e.push(p)}function l(h,f,d,_,v,m){const p=a(h,f,d,_,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||M0),i.length>1&&i.sort(f||jc),r.length>1&&r.sort(f||jc)}function u(){for(let h=t,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function y0(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new Jc,n.set(i,[a])):r>=s.length?(a=new Jc,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function S0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Yt};break;case"SpotLight":e={position:new N,direction:new N,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function E0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let w0=0;function T0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function b0(n){const t=new S0,e=E0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new ce,a=new ce;function o(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let d=0,_=0,v=0,m=0,p=0,E=0,T=0,y=0,D=0,P=0,A=0;c.sort(T0);for(let S=0,x=c.length;S<x;S++){const b=c[S],z=b.color,O=b.intensity,K=b.distance,J=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=z.r*O,h+=z.g*O,f+=z.b*O;else if(b.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(b.sh.coefficients[Z],O);A++}else if(b.isDirectionalLight){const Z=t.get(b);if(Z.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const nt=b.shadow,$=e.get(b);$.shadowIntensity=nt.intensity,$.shadowBias=nt.bias,$.shadowNormalBias=nt.normalBias,$.shadowRadius=nt.radius,$.shadowMapSize=nt.mapSize,i.directionalShadow[d]=$,i.directionalShadowMap[d]=J,i.directionalShadowMatrix[d]=b.shadow.matrix,E++}i.directional[d]=Z,d++}else if(b.isSpotLight){const Z=t.get(b);Z.position.setFromMatrixPosition(b.matrixWorld),Z.color.copy(z).multiplyScalar(O),Z.distance=K,Z.coneCos=Math.cos(b.angle),Z.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),Z.decay=b.decay,i.spot[v]=Z;const nt=b.shadow;if(b.map&&(i.spotLightMap[D]=b.map,D++,nt.updateMatrices(b),b.castShadow&&P++),i.spotLightMatrix[v]=nt.matrix,b.castShadow){const $=e.get(b);$.shadowIntensity=nt.intensity,$.shadowBias=nt.bias,$.shadowNormalBias=nt.normalBias,$.shadowRadius=nt.radius,$.shadowMapSize=nt.mapSize,i.spotShadow[v]=$,i.spotShadowMap[v]=J,y++}v++}else if(b.isRectAreaLight){const Z=t.get(b);Z.color.copy(z).multiplyScalar(O),Z.halfWidth.set(b.width*.5,0,0),Z.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=Z,m++}else if(b.isPointLight){const Z=t.get(b);if(Z.color.copy(b.color).multiplyScalar(b.intensity),Z.distance=b.distance,Z.decay=b.decay,b.castShadow){const nt=b.shadow,$=e.get(b);$.shadowIntensity=nt.intensity,$.shadowBias=nt.bias,$.shadowNormalBias=nt.normalBias,$.shadowRadius=nt.radius,$.shadowMapSize=nt.mapSize,$.shadowCameraNear=nt.camera.near,$.shadowCameraFar=nt.camera.far,i.pointShadow[_]=$,i.pointShadowMap[_]=J,i.pointShadowMatrix[_]=b.shadow.matrix,T++}i.point[_]=Z,_++}else if(b.isHemisphereLight){const Z=t.get(b);Z.skyColor.copy(b.color).multiplyScalar(O),Z.groundColor.copy(b.groundColor).multiplyScalar(O),i.hemi[p]=Z,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const C=i.hash;(C.directionalLength!==d||C.pointLength!==_||C.spotLength!==v||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==E||C.numPointShadows!==T||C.numSpotShadows!==y||C.numSpotMaps!==D||C.numLightProbes!==A)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=y+D-P,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=A,C.directionalLength=d,C.pointLength=_,C.spotLength=v,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=E,C.numPointShadows=T,C.numSpotShadows=y,C.numSpotMaps=D,C.numLightProbes=A,i.version=w0++)}function l(c,u){let h=0,f=0,d=0,_=0,v=0;const m=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const T=c[p];if(T.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(T.isSpotLight){const y=i.spot[d];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(T.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(T.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function Qc(n){const t=new b0(n),e=[],i=[];function r(u){c.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function A0(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Qc(n),t.set(r,[o])):s>=a.length?(o=new Qc(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const R0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function P0(n,t,e){let i=new mh;const r=new Ut,s=new Ut,a=new he,o=new tp({depthPacking:ad}),l=new ep,c={},u=e.maxTextureSize,h={[Gn]:Pe,[Pe]:Gn,[ln]:ln},f=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:R0,fragmentShader:C0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Be;_.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Oe(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yu;let p=this.type;this.render=function(P,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const S=n.getRenderTarget(),x=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),z=n.state;z.setBlending(zn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=p!==En&&this.type===En,K=p===En&&this.type!==En;for(let J=0,Z=P.length;J<Z;J++){const nt=P[J],$=nt.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const G=$.getFrameExtents();if(r.multiply(G),s.copy($.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/G.x),r.x=s.x*G.x,$.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/G.y),r.y=s.y*G.y,$.mapSize.y=s.y)),$.map===null||O===!0||K===!0){const B=this.type!==En?{minFilter:nn,magFilter:nn}:{};$.map!==null&&$.map.dispose(),$.map=new fi(r.x,r.y,B),$.map.texture.name=nt.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const it=$.getViewportCount();for(let B=0;B<it;B++){const ut=$.getViewport(B);a.set(s.x*ut.x,s.y*ut.y,s.x*ut.z,s.y*ut.w),z.viewport(a),$.updateMatrices(nt,B),i=$.getFrustum(),y(A,C,$.camera,nt,this.type)}$.isPointLightShadow!==!0&&this.type===En&&E($,C),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,x,b)};function E(P,A){const C=t.update(v);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new fi(r.x,r.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(A,null,C,f,v,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(A,null,C,d,v,null)}function T(P,A,C,S){let x=null;const b=C.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(b!==void 0)x=b;else if(x=C.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const z=x.uuid,O=A.uuid;let K=c[z];K===void 0&&(K={},c[z]=K);let J=K[O];J===void 0&&(J=x.clone(),K[O]=J,A.addEventListener("dispose",D)),x=J}if(x.visible=A.visible,x.wireframe=A.wireframe,S===En?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:h[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=n.properties.get(x);z.light=C}return x}function y(P,A,C,S,x){if(P.visible===!1)return;if(P.layers.test(A.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&x===En)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,P.matrixWorld);const O=t.update(P),K=P.material;if(Array.isArray(K)){const J=O.groups;for(let Z=0,nt=J.length;Z<nt;Z++){const $=J[Z],G=K[$.materialIndex];if(G&&G.visible){const it=T(P,G,S,x);P.onBeforeShadow(n,P,A,C,O,it,$),n.renderBufferDirect(C,null,O,it,P,$),P.onAfterShadow(n,P,A,C,O,it,$)}}}else if(K.visible){const J=T(P,K,S,x);P.onBeforeShadow(n,P,A,C,O,J,null),n.renderBufferDirect(C,null,O,J,P,null),P.onAfterShadow(n,P,A,C,O,J,null)}}const z=P.children;for(let O=0,K=z.length;O<K;O++)y(z[O],A,C,S,x)}function D(P){P.target.removeEventListener("dispose",D);for(const C in c){const S=c[C],x=P.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const D0={[_o]:go,[vo]:yo,[xo]:So,[Qi]:Mo,[go]:_o,[yo]:vo,[So]:xo,[Mo]:Qi};function L0(n,t){function e(){let I=!1;const vt=new he;let lt=null;const Et=new he(0,0,0,0);return{setMask:function(ct){lt!==ct&&!I&&(n.colorMask(ct,ct,ct,ct),lt=ct)},setLocked:function(ct){I=ct},setClear:function(ct,Q,bt,Bt,ie){ie===!0&&(ct*=Bt,Q*=Bt,bt*=Bt),vt.set(ct,Q,bt,Bt),Et.equals(vt)===!1&&(n.clearColor(ct,Q,bt,Bt),Et.copy(vt))},reset:function(){I=!1,lt=null,Et.set(-1,0,0,0)}}}function i(){let I=!1,vt=!1,lt=null,Et=null,ct=null;return{setReversed:function(Q){if(vt!==Q){const bt=t.get("EXT_clip_control");Q?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT),vt=Q;const Bt=ct;ct=null,this.setClear(Bt)}},getReversed:function(){return vt},setTest:function(Q){Q?st(n.DEPTH_TEST):ft(n.DEPTH_TEST)},setMask:function(Q){lt!==Q&&!I&&(n.depthMask(Q),lt=Q)},setFunc:function(Q){if(vt&&(Q=D0[Q]),Et!==Q){switch(Q){case _o:n.depthFunc(n.NEVER);break;case go:n.depthFunc(n.ALWAYS);break;case vo:n.depthFunc(n.LESS);break;case Qi:n.depthFunc(n.LEQUAL);break;case xo:n.depthFunc(n.EQUAL);break;case Mo:n.depthFunc(n.GEQUAL);break;case yo:n.depthFunc(n.GREATER);break;case So:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Et=Q}},setLocked:function(Q){I=Q},setClear:function(Q){ct!==Q&&(vt&&(Q=1-Q),n.clearDepth(Q),ct=Q)},reset:function(){I=!1,lt=null,Et=null,ct=null,vt=!1}}}function r(){let I=!1,vt=null,lt=null,Et=null,ct=null,Q=null,bt=null,Bt=null,ie=null;return{setTest:function(Jt){I||(Jt?st(n.STENCIL_TEST):ft(n.STENCIL_TEST))},setMask:function(Jt){vt!==Jt&&!I&&(n.stencilMask(Jt),vt=Jt)},setFunc:function(Jt,ue,De){(lt!==Jt||Et!==ue||ct!==De)&&(n.stencilFunc(Jt,ue,De),lt=Jt,Et=ue,ct=De)},setOp:function(Jt,ue,De){(Q!==Jt||bt!==ue||Bt!==De)&&(n.stencilOp(Jt,ue,De),Q=Jt,bt=ue,Bt=De)},setLocked:function(Jt){I=Jt},setClear:function(Jt){ie!==Jt&&(n.clearStencil(Jt),ie=Jt)},reset:function(){I=!1,vt=null,lt=null,Et=null,ct=null,Q=null,bt=null,Bt=null,ie=null}}}const s=new e,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],_=null,v=!1,m=null,p=null,E=null,T=null,y=null,D=null,P=null,A=new Yt(0,0,0),C=0,S=!1,x=null,b=null,z=null,O=null,K=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,nt=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec($)[1]),Z=nt>=1):$.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Z=nt>=2);let G=null,it={};const B=n.getParameter(n.SCISSOR_BOX),ut=n.getParameter(n.VIEWPORT),At=new he().fromArray(B),Y=new he().fromArray(ut);function rt(I,vt,lt,Et){const ct=new Uint8Array(4),Q=n.createTexture();n.bindTexture(I,Q),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let bt=0;bt<lt;bt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(vt,0,n.RGBA,1,1,Et,0,n.RGBA,n.UNSIGNED_BYTE,ct):n.texImage2D(vt+bt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ct);return Q}const at={};at[n.TEXTURE_2D]=rt(n.TEXTURE_2D,n.TEXTURE_2D,1),at[n.TEXTURE_CUBE_MAP]=rt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[n.TEXTURE_2D_ARRAY]=rt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),at[n.TEXTURE_3D]=rt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(n.DEPTH_TEST),a.setFunc(Qi),Nt(!1),Wt(tc),st(n.CULL_FACE),R(zn);function st(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function ft(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Tt(I,vt){return h[I]!==vt?(n.bindFramebuffer(I,vt),h[I]=vt,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=vt),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=vt),!0):!1}function _t(I,vt){let lt=d,Et=!1;if(I){lt=f.get(vt),lt===void 0&&(lt=[],f.set(vt,lt));const ct=I.textures;if(lt.length!==ct.length||lt[0]!==n.COLOR_ATTACHMENT0){for(let Q=0,bt=ct.length;Q<bt;Q++)lt[Q]=n.COLOR_ATTACHMENT0+Q;lt.length=ct.length,Et=!0}}else lt[0]!==n.BACK&&(lt[0]=n.BACK,Et=!0);Et&&n.drawBuffers(lt)}function Xt(I){return _!==I?(n.useProgram(I),_=I,!0):!1}const qt={[ii]:n.FUNC_ADD,[Lf]:n.FUNC_SUBTRACT,[If]:n.FUNC_REVERSE_SUBTRACT};qt[Uf]=n.MIN,qt[Nf]=n.MAX;const kt={[Ff]:n.ZERO,[Of]:n.ONE,[Bf]:n.SRC_COLOR,[po]:n.SRC_ALPHA,[Wf]:n.SRC_ALPHA_SATURATE,[Vf]:n.DST_COLOR,[kf]:n.DST_ALPHA,[zf]:n.ONE_MINUS_SRC_COLOR,[mo]:n.ONE_MINUS_SRC_ALPHA,[Gf]:n.ONE_MINUS_DST_COLOR,[Hf]:n.ONE_MINUS_DST_ALPHA,[Xf]:n.CONSTANT_COLOR,[$f]:n.ONE_MINUS_CONSTANT_COLOR,[Yf]:n.CONSTANT_ALPHA,[qf]:n.ONE_MINUS_CONSTANT_ALPHA};function R(I,vt,lt,Et,ct,Q,bt,Bt,ie,Jt){if(I===zn){v===!0&&(ft(n.BLEND),v=!1);return}if(v===!1&&(st(n.BLEND),v=!0),I!==Df){if(I!==m||Jt!==S){if((p!==ii||y!==ii)&&(n.blendEquation(n.FUNC_ADD),p=ii,y=ii),Jt)switch(I){case $i:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ec:n.blendFunc(n.ONE,n.ONE);break;case nc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ic:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case $i:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ec:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case nc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ic:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,T=null,D=null,P=null,A.set(0,0,0),C=0,m=I,S=Jt}return}ct=ct||vt,Q=Q||lt,bt=bt||Et,(vt!==p||ct!==y)&&(n.blendEquationSeparate(qt[vt],qt[ct]),p=vt,y=ct),(lt!==E||Et!==T||Q!==D||bt!==P)&&(n.blendFuncSeparate(kt[lt],kt[Et],kt[Q],kt[bt]),E=lt,T=Et,D=Q,P=bt),(Bt.equals(A)===!1||ie!==C)&&(n.blendColor(Bt.r,Bt.g,Bt.b,ie),A.copy(Bt),C=ie),m=I,S=!1}function Gt(I,vt){I.side===ln?ft(n.CULL_FACE):st(n.CULL_FACE);let lt=I.side===Pe;vt&&(lt=!lt),Nt(lt),I.blending===$i&&I.transparent===!1?R(zn):R(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const Et=I.stencilWrite;o.setTest(Et),Et&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Rt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?st(n.SAMPLE_ALPHA_TO_COVERAGE):ft(n.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(I){x!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),x=I)}function Wt(I){I!==Rf?(st(n.CULL_FACE),I!==b&&(I===tc?n.cullFace(n.BACK):I===Cf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ft(n.CULL_FACE),b=I}function tt(I){I!==z&&(Z&&n.lineWidth(I),z=I)}function Rt(I,vt,lt){I?(st(n.POLYGON_OFFSET_FILL),(O!==vt||K!==lt)&&(n.polygonOffset(vt,lt),O=vt,K=lt)):ft(n.POLYGON_OFFSET_FILL)}function H(I){I?st(n.SCISSOR_TEST):ft(n.SCISSOR_TEST)}function j(I){I===void 0&&(I=n.TEXTURE0+J-1),G!==I&&(n.activeTexture(I),G=I)}function xt(I,vt,lt){lt===void 0&&(G===null?lt=n.TEXTURE0+J-1:lt=G);let Et=it[lt];Et===void 0&&(Et={type:void 0,texture:void 0},it[lt]=Et),(Et.type!==I||Et.texture!==vt)&&(G!==lt&&(n.activeTexture(lt),G=lt),n.bindTexture(I,vt||at[I]),Et.type=I,Et.texture=vt)}function w(){const I=it[G];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function k(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function St(I){At.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),At.copy(I))}function Lt(I){Y.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Y.copy(I))}function Pt(I,vt){let lt=c.get(vt);lt===void 0&&(lt=new WeakMap,c.set(vt,lt));let Et=lt.get(I);Et===void 0&&(Et=n.getUniformBlockIndex(vt,I.name),lt.set(I,Et))}function ot(I,vt){const Et=c.get(vt).get(I);l.get(vt)!==Et&&(n.uniformBlockBinding(vt,Et,I.__bindingPointIndex),l.set(vt,Et))}function Ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},G=null,it={},h={},f=new WeakMap,d=[],_=null,v=!1,m=null,p=null,E=null,T=null,y=null,D=null,P=null,A=new Yt(0,0,0),C=0,S=!1,x=null,b=null,z=null,O=null,K=null,At.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:st,disable:ft,bindFramebuffer:Tt,drawBuffers:_t,useProgram:Xt,setBlending:R,setMaterial:Gt,setFlipSided:Nt,setCullFace:Wt,setLineWidth:tt,setPolygonOffset:Rt,setScissorTest:H,activeTexture:j,bindTexture:xt,unbindTexture:w,compressedTexImage2D:g,compressedTexImage3D:L,texImage2D:Mt,texImage3D:et,updateUBOMapping:Pt,uniformBlockBinding:ot,texStorage2D:dt,texStorage3D:pt,texSubImage2D:k,texSubImage3D:q,compressedTexSubImage2D:V,compressedTexSubImage3D:gt,scissor:St,viewport:Lt,reset:Ft}}function I0(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ut,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,g){return d?new OffscreenCanvas(w,g):Ws("canvas")}function v(w,g,L){let k=1;const q=xt(w);if((q.width>L||q.height>L)&&(k=L/Math.max(q.width,q.height)),k<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const V=Math.floor(k*q.width),gt=Math.floor(k*q.height);h===void 0&&(h=_(V,gt));const dt=g?_(V,gt):h;return dt.width=V,dt.height=gt,dt.getContext("2d").drawImage(w,0,0,V,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+V+"x"+gt+")."),dt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){n.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(w,g,L,k,q=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let V=g;if(g===n.RED&&(L===n.FLOAT&&(V=n.R32F),L===n.HALF_FLOAT&&(V=n.R16F),L===n.UNSIGNED_BYTE&&(V=n.R8)),g===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(V=n.R8UI),L===n.UNSIGNED_SHORT&&(V=n.R16UI),L===n.UNSIGNED_INT&&(V=n.R32UI),L===n.BYTE&&(V=n.R8I),L===n.SHORT&&(V=n.R16I),L===n.INT&&(V=n.R32I)),g===n.RG&&(L===n.FLOAT&&(V=n.RG32F),L===n.HALF_FLOAT&&(V=n.RG16F),L===n.UNSIGNED_BYTE&&(V=n.RG8)),g===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(V=n.RG8UI),L===n.UNSIGNED_SHORT&&(V=n.RG16UI),L===n.UNSIGNED_INT&&(V=n.RG32UI),L===n.BYTE&&(V=n.RG8I),L===n.SHORT&&(V=n.RG16I),L===n.INT&&(V=n.RG32I)),g===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(V=n.RGB8UI),L===n.UNSIGNED_SHORT&&(V=n.RGB16UI),L===n.UNSIGNED_INT&&(V=n.RGB32UI),L===n.BYTE&&(V=n.RGB8I),L===n.SHORT&&(V=n.RGB16I),L===n.INT&&(V=n.RGB32I)),g===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),L===n.UNSIGNED_INT&&(V=n.RGBA32UI),L===n.BYTE&&(V=n.RGBA8I),L===n.SHORT&&(V=n.RGBA16I),L===n.INT&&(V=n.RGBA32I)),g===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),g===n.RGBA){const gt=q?Vs:jt.getTransfer(k);L===n.FLOAT&&(V=n.RGBA32F),L===n.HALF_FLOAT&&(V=n.RGBA16F),L===n.UNSIGNED_BYTE&&(V=gt===te?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function y(w,g){let L;return w?g===null||g===ui||g===Br?L=n.DEPTH24_STENCIL8:g===Tn?L=n.DEPTH32F_STENCIL8:g===Or&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===ui||g===Br?L=n.DEPTH_COMPONENT24:g===Tn?L=n.DEPTH_COMPONENT32F:g===Or&&(L=n.DEPTH_COMPONENT16),L}function D(w,g){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==nn&&w.minFilter!==fn?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function P(w){const g=w.target;g.removeEventListener("dispose",P),C(g),g.isVideoTexture&&u.delete(g)}function A(w){const g=w.target;g.removeEventListener("dispose",A),x(g)}function C(w){const g=i.get(w);if(g.__webglInit===void 0)return;const L=w.source,k=f.get(L);if(k){const q=k[g.__cacheKey];q.usedTimes--,q.usedTimes===0&&S(w),Object.keys(k).length===0&&f.delete(L)}i.remove(w)}function S(w){const g=i.get(w);n.deleteTexture(g.__webglTexture);const L=w.source,k=f.get(L);delete k[g.__cacheKey],a.memory.textures--}function x(w){const g=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(g.__webglFramebuffer[k]))for(let q=0;q<g.__webglFramebuffer[k].length;q++)n.deleteFramebuffer(g.__webglFramebuffer[k][q]);else n.deleteFramebuffer(g.__webglFramebuffer[k]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[k])}else{if(Array.isArray(g.__webglFramebuffer))for(let k=0;k<g.__webglFramebuffer.length;k++)n.deleteFramebuffer(g.__webglFramebuffer[k]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let k=0;k<g.__webglColorRenderbuffer.length;k++)g.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[k]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const L=w.textures;for(let k=0,q=L.length;k<q;k++){const V=i.get(L[k]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),a.memory.textures--),i.remove(L[k])}i.remove(w)}let b=0;function z(){b=0}function O(){const w=b;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),b+=1,w}function K(w){const g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function J(w,g){const L=i.get(w);if(w.isVideoTexture&&H(w),w.isRenderTargetTexture===!1&&w.version>0&&L.__version!==w.version){const k=w.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(L,w,g);return}}e.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+g)}function Z(w,g){const L=i.get(w);if(w.version>0&&L.__version!==w.version){at(L,w,g);return}e.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+g)}function nt(w,g){const L=i.get(w);if(w.version>0&&L.__version!==w.version){at(L,w,g);return}e.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+g)}function $(w,g){const L=i.get(w);if(w.version>0&&L.__version!==w.version){st(L,w,g);return}e.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+g)}const G={[To]:n.REPEAT,[ai]:n.CLAMP_TO_EDGE,[bo]:n.MIRRORED_REPEAT},it={[nn]:n.NEAREST,[rd]:n.NEAREST_MIPMAP_NEAREST,[jr]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[Ea]:n.LINEAR_MIPMAP_NEAREST,[oi]:n.LINEAR_MIPMAP_LINEAR},B={[ld]:n.NEVER,[pd]:n.ALWAYS,[cd]:n.LESS,[ih]:n.LEQUAL,[ud]:n.EQUAL,[dd]:n.GEQUAL,[hd]:n.GREATER,[fd]:n.NOTEQUAL};function ut(w,g){if(g.type===Tn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===fn||g.magFilter===Ea||g.magFilter===jr||g.magFilter===oi||g.minFilter===fn||g.minFilter===Ea||g.minFilter===jr||g.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,G[g.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,G[g.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,G[g.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,it[g.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,it[g.minFilter]),g.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,B[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===nn||g.minFilter!==jr&&g.minFilter!==oi||g.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const L=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function At(w,g){let L=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",P));const k=g.source;let q=f.get(k);q===void 0&&(q={},f.set(k,q));const V=K(g);if(V!==w.__cacheKey){q[V]===void 0&&(q[V]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,L=!0),q[V].usedTimes++;const gt=q[w.__cacheKey];gt!==void 0&&(q[w.__cacheKey].usedTimes--,gt.usedTimes===0&&S(g)),w.__cacheKey=V,w.__webglTexture=q[V].texture}return L}function Y(w,g,L){return Math.floor(Math.floor(w/L)/g)}function rt(w,g,L,k){const V=w.updateRanges;if(V.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,L,k,g.data);else{V.sort((et,St)=>et.start-St.start);let gt=0;for(let et=1;et<V.length;et++){const St=V[gt],Lt=V[et],Pt=St.start+St.count,ot=Y(Lt.start,g.width,4),Ft=Y(St.start,g.width,4);Lt.start<=Pt+1&&ot===Ft&&Y(Lt.start+Lt.count-1,g.width,4)===ot?St.count=Math.max(St.count,Lt.start+Lt.count-St.start):(++gt,V[gt]=Lt)}V.length=gt+1;const dt=n.getParameter(n.UNPACK_ROW_LENGTH),pt=n.getParameter(n.UNPACK_SKIP_PIXELS),Mt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let et=0,St=V.length;et<St;et++){const Lt=V[et],Pt=Math.floor(Lt.start/4),ot=Math.ceil(Lt.count/4),Ft=Pt%g.width,I=Math.floor(Pt/g.width),vt=ot,lt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ft),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),e.texSubImage2D(n.TEXTURE_2D,0,Ft,I,vt,lt,L,k,g.data)}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,dt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,pt),n.pixelStorei(n.UNPACK_SKIP_ROWS,Mt)}}function at(w,g,L){let k=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(k=n.TEXTURE_3D);const q=At(w,g),V=g.source;e.bindTexture(k,w.__webglTexture,n.TEXTURE0+L);const gt=i.get(V);if(V.version!==gt.__version||q===!0){e.activeTexture(n.TEXTURE0+L);const dt=jt.getPrimaries(jt.workingColorSpace),pt=g.colorSpace===Bn?null:jt.getPrimaries(g.colorSpace),Mt=g.colorSpace===Bn||dt===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let et=v(g.image,!1,r.maxTextureSize);et=j(g,et);const St=s.convert(g.format,g.colorSpace),Lt=s.convert(g.type);let Pt=T(g.internalFormat,St,Lt,g.colorSpace,g.isVideoTexture);ut(k,g);let ot;const Ft=g.mipmaps,I=g.isVideoTexture!==!0,vt=gt.__version===void 0||q===!0,lt=V.dataReady,Et=D(g,et);if(g.isDepthTexture)Pt=y(g.format===kr,g.type),vt&&(I?e.texStorage2D(n.TEXTURE_2D,1,Pt,et.width,et.height):e.texImage2D(n.TEXTURE_2D,0,Pt,et.width,et.height,0,St,Lt,null));else if(g.isDataTexture)if(Ft.length>0){I&&vt&&e.texStorage2D(n.TEXTURE_2D,Et,Pt,Ft[0].width,Ft[0].height);for(let ct=0,Q=Ft.length;ct<Q;ct++)ot=Ft[ct],I?lt&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,ot.width,ot.height,St,Lt,ot.data):e.texImage2D(n.TEXTURE_2D,ct,Pt,ot.width,ot.height,0,St,Lt,ot.data);g.generateMipmaps=!1}else I?(vt&&e.texStorage2D(n.TEXTURE_2D,Et,Pt,et.width,et.height),lt&&rt(g,et,St,Lt)):e.texImage2D(n.TEXTURE_2D,0,Pt,et.width,et.height,0,St,Lt,et.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){I&&vt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Et,Pt,Ft[0].width,Ft[0].height,et.depth);for(let ct=0,Q=Ft.length;ct<Q;ct++)if(ot=Ft[ct],g.format!==tn)if(St!==null)if(I){if(lt)if(g.layerUpdates.size>0){const bt=Cc(ot.width,ot.height,g.format,g.type);for(const Bt of g.layerUpdates){const ie=ot.data.subarray(Bt*bt/ot.data.BYTES_PER_ELEMENT,(Bt+1)*bt/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,Bt,ot.width,ot.height,1,St,ie)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,ot.width,ot.height,et.depth,St,ot.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ct,Pt,ot.width,ot.height,et.depth,0,ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?lt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,ot.width,ot.height,et.depth,St,Lt,ot.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ct,Pt,ot.width,ot.height,et.depth,0,St,Lt,ot.data)}else{I&&vt&&e.texStorage2D(n.TEXTURE_2D,Et,Pt,Ft[0].width,Ft[0].height);for(let ct=0,Q=Ft.length;ct<Q;ct++)ot=Ft[ct],g.format!==tn?St!==null?I?lt&&e.compressedTexSubImage2D(n.TEXTURE_2D,ct,0,0,ot.width,ot.height,St,ot.data):e.compressedTexImage2D(n.TEXTURE_2D,ct,Pt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?lt&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,ot.width,ot.height,St,Lt,ot.data):e.texImage2D(n.TEXTURE_2D,ct,Pt,ot.width,ot.height,0,St,Lt,ot.data)}else if(g.isDataArrayTexture)if(I){if(vt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Et,Pt,et.width,et.height,et.depth),lt)if(g.layerUpdates.size>0){const ct=Cc(et.width,et.height,g.format,g.type);for(const Q of g.layerUpdates){const bt=et.data.subarray(Q*ct/et.data.BYTES_PER_ELEMENT,(Q+1)*ct/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,et.width,et.height,1,St,Lt,bt)}g.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,St,Lt,et.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Pt,et.width,et.height,et.depth,0,St,Lt,et.data);else if(g.isData3DTexture)I?(vt&&e.texStorage3D(n.TEXTURE_3D,Et,Pt,et.width,et.height,et.depth),lt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,St,Lt,et.data)):e.texImage3D(n.TEXTURE_3D,0,Pt,et.width,et.height,et.depth,0,St,Lt,et.data);else if(g.isFramebufferTexture){if(vt)if(I)e.texStorage2D(n.TEXTURE_2D,Et,Pt,et.width,et.height);else{let ct=et.width,Q=et.height;for(let bt=0;bt<Et;bt++)e.texImage2D(n.TEXTURE_2D,bt,Pt,ct,Q,0,St,Lt,null),ct>>=1,Q>>=1}}else if(Ft.length>0){if(I&&vt){const ct=xt(Ft[0]);e.texStorage2D(n.TEXTURE_2D,Et,Pt,ct.width,ct.height)}for(let ct=0,Q=Ft.length;ct<Q;ct++)ot=Ft[ct],I?lt&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,St,Lt,ot):e.texImage2D(n.TEXTURE_2D,ct,Pt,St,Lt,ot);g.generateMipmaps=!1}else if(I){if(vt){const ct=xt(et);e.texStorage2D(n.TEXTURE_2D,Et,Pt,ct.width,ct.height)}lt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,St,Lt,et)}else e.texImage2D(n.TEXTURE_2D,0,Pt,St,Lt,et);m(g)&&p(k),gt.__version=V.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function st(w,g,L){if(g.image.length!==6)return;const k=At(w,g),q=g.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+L);const V=i.get(q);if(q.version!==V.__version||k===!0){e.activeTexture(n.TEXTURE0+L);const gt=jt.getPrimaries(jt.workingColorSpace),dt=g.colorSpace===Bn?null:jt.getPrimaries(g.colorSpace),pt=g.colorSpace===Bn||gt===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Mt=g.isCompressedTexture||g.image[0].isCompressedTexture,et=g.image[0]&&g.image[0].isDataTexture,St=[];for(let Q=0;Q<6;Q++)!Mt&&!et?St[Q]=v(g.image[Q],!0,r.maxCubemapSize):St[Q]=et?g.image[Q].image:g.image[Q],St[Q]=j(g,St[Q]);const Lt=St[0],Pt=s.convert(g.format,g.colorSpace),ot=s.convert(g.type),Ft=T(g.internalFormat,Pt,ot,g.colorSpace),I=g.isVideoTexture!==!0,vt=V.__version===void 0||k===!0,lt=q.dataReady;let Et=D(g,Lt);ut(n.TEXTURE_CUBE_MAP,g);let ct;if(Mt){I&&vt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,Ft,Lt.width,Lt.height);for(let Q=0;Q<6;Q++){ct=St[Q].mipmaps;for(let bt=0;bt<ct.length;bt++){const Bt=ct[bt];g.format!==tn?Pt!==null?I?lt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,bt,0,0,Bt.width,Bt.height,Pt,Bt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,bt,Ft,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,bt,0,0,Bt.width,Bt.height,Pt,ot,Bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,bt,Ft,Bt.width,Bt.height,0,Pt,ot,Bt.data)}}}else{if(ct=g.mipmaps,I&&vt){ct.length>0&&Et++;const Q=xt(St[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,Ft,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(et){I?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,St[Q].width,St[Q].height,Pt,ot,St[Q].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ft,St[Q].width,St[Q].height,0,Pt,ot,St[Q].data);for(let bt=0;bt<ct.length;bt++){const ie=ct[bt].image[Q].image;I?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,bt+1,0,0,ie.width,ie.height,Pt,ot,ie.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,bt+1,Ft,ie.width,ie.height,0,Pt,ot,ie.data)}}else{I?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Pt,ot,St[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ft,Pt,ot,St[Q]);for(let bt=0;bt<ct.length;bt++){const Bt=ct[bt];I?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,bt+1,0,0,Pt,ot,Bt.image[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,bt+1,Ft,Pt,ot,Bt.image[Q])}}}m(g)&&p(n.TEXTURE_CUBE_MAP),V.__version=q.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function ft(w,g,L,k,q,V){const gt=s.convert(L.format,L.colorSpace),dt=s.convert(L.type),pt=T(L.internalFormat,gt,dt,L.colorSpace),Mt=i.get(g),et=i.get(L);if(et.__renderTarget=g,!Mt.__hasExternalTextures){const St=Math.max(1,g.width>>V),Lt=Math.max(1,g.height>>V);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?e.texImage3D(q,V,pt,St,Lt,g.depth,0,gt,dt,null):e.texImage2D(q,V,pt,St,Lt,0,gt,dt,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),Rt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,q,et.__webglTexture,0,tt(g)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,q,et.__webglTexture,V),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Tt(w,g,L){if(n.bindRenderbuffer(n.RENDERBUFFER,w),g.depthBuffer){const k=g.depthTexture,q=k&&k.isDepthTexture?k.type:null,V=y(g.stencilBuffer,q),gt=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=tt(g);Rt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt,V,g.width,g.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,V,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,V,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,gt,n.RENDERBUFFER,w)}else{const k=g.textures;for(let q=0;q<k.length;q++){const V=k[q],gt=s.convert(V.format,V.colorSpace),dt=s.convert(V.type),pt=T(V.internalFormat,gt,dt,V.colorSpace),Mt=tt(g);L&&Rt(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt,pt,g.width,g.height):Rt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Mt,pt,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,pt,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function _t(w,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const k=i.get(g.depthTexture);k.__renderTarget=g,(!k.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),J(g.depthTexture,0);const q=k.__webglTexture,V=tt(g);if(g.depthTexture.format===zr)Rt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0);else if(g.depthTexture.format===kr)Rt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Xt(w){const g=i.get(w),L=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){const k=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),k){const q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,k.removeEventListener("dispose",q)};k.addEventListener("dispose",q),g.__depthDisposeCallback=q}g.__boundDepthTexture=k}if(w.depthTexture&&!g.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");const k=w.texture.mipmaps;k&&k.length>0?_t(g.__webglFramebuffer[0],w):_t(g.__webglFramebuffer,w)}else if(L){g.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[k]),g.__webglDepthbuffer[k]===void 0)g.__webglDepthbuffer[k]=n.createRenderbuffer(),Tt(g.__webglDepthbuffer[k],w,!1);else{const q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=g.__webglDepthbuffer[k];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,V)}}else{const k=w.texture.mipmaps;if(k&&k.length>0?e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Tt(g.__webglDepthbuffer,w,!1);else{const q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,V)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function qt(w,g,L){const k=i.get(w);g!==void 0&&ft(k.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&Xt(w)}function kt(w){const g=w.texture,L=i.get(w),k=i.get(g);w.addEventListener("dispose",A);const q=w.textures,V=w.isWebGLCubeRenderTarget===!0,gt=q.length>1;if(gt||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=g.version,a.memory.textures++),V){L.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[dt]=[];for(let pt=0;pt<g.mipmaps.length;pt++)L.__webglFramebuffer[dt][pt]=n.createFramebuffer()}else L.__webglFramebuffer[dt]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let dt=0;dt<g.mipmaps.length;dt++)L.__webglFramebuffer[dt]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(gt)for(let dt=0,pt=q.length;dt<pt;dt++){const Mt=i.get(q[dt]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&Rt(w)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let dt=0;dt<q.length;dt++){const pt=q[dt];L.__webglColorRenderbuffer[dt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[dt]);const Mt=s.convert(pt.format,pt.colorSpace),et=s.convert(pt.type),St=T(pt.internalFormat,Mt,et,pt.colorSpace,w.isXRRenderTarget===!0),Lt=tt(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt,St,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,L.__webglColorRenderbuffer[dt])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),Tt(L.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),ut(n.TEXTURE_CUBE_MAP,g);for(let dt=0;dt<6;dt++)if(g.mipmaps&&g.mipmaps.length>0)for(let pt=0;pt<g.mipmaps.length;pt++)ft(L.__webglFramebuffer[dt][pt],w,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,pt);else ft(L.__webglFramebuffer[dt],w,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(g)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let dt=0,pt=q.length;dt<pt;dt++){const Mt=q[dt],et=i.get(Mt);e.bindTexture(n.TEXTURE_2D,et.__webglTexture),ut(n.TEXTURE_2D,Mt),ft(L.__webglFramebuffer,w,Mt,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,0),m(Mt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let dt=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(dt=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(dt,k.__webglTexture),ut(dt,g),g.mipmaps&&g.mipmaps.length>0)for(let pt=0;pt<g.mipmaps.length;pt++)ft(L.__webglFramebuffer[pt],w,g,n.COLOR_ATTACHMENT0,dt,pt);else ft(L.__webglFramebuffer,w,g,n.COLOR_ATTACHMENT0,dt,0);m(g)&&p(dt),e.unbindTexture()}w.depthBuffer&&Xt(w)}function R(w){const g=w.textures;for(let L=0,k=g.length;L<k;L++){const q=g[L];if(m(q)){const V=E(w),gt=i.get(q).__webglTexture;e.bindTexture(V,gt),p(V),e.unbindTexture()}}}const Gt=[],Nt=[];function Wt(w){if(w.samples>0){if(Rt(w)===!1){const g=w.textures,L=w.width,k=w.height;let q=n.COLOR_BUFFER_BIT;const V=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=i.get(w),dt=g.length>1;if(dt)for(let Mt=0;Mt<g.length;Mt++)e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer);const pt=w.texture.mipmaps;pt&&pt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let Mt=0;Mt<g.length;Mt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),dt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,gt.__webglColorRenderbuffer[Mt]);const et=i.get(g[Mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,et,0)}n.blitFramebuffer(0,0,L,k,0,0,L,k,q,n.NEAREST),l===!0&&(Gt.length=0,Nt.length=0,Gt.push(n.COLOR_ATTACHMENT0+Mt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Gt.push(V),Nt.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Nt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Gt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),dt)for(let Mt=0;Mt<g.length;Mt++){e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,gt.__webglColorRenderbuffer[Mt]);const et=i.get(g[Mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,et,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const g=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function tt(w){return Math.min(r.maxSamples,w.samples)}function Rt(w){const g=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function H(w){const g=a.render.frame;u.get(w)!==g&&(u.set(w,g),w.update())}function j(w,g){const L=w.colorSpace,k=w.format,q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||L!==nr&&L!==Bn&&(jt.getTransfer(L)===te?(k!==tn||q!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),g}function xt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=J,this.setTexture2DArray=Z,this.setTexture3D=nt,this.setTextureCube=$,this.rebindTextures=qt,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=Rt}function U0(n,t){function e(i,r=Bn){let s;const a=jt.getTransfer(r);if(i===Rn)return n.UNSIGNED_BYTE;if(i===Cl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Pl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ju)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zu)return n.BYTE;if(i===Ku)return n.SHORT;if(i===Or)return n.UNSIGNED_SHORT;if(i===Rl)return n.INT;if(i===ui)return n.UNSIGNED_INT;if(i===Tn)return n.FLOAT;if(i===$r)return n.HALF_FLOAT;if(i===Ju)return n.ALPHA;if(i===Qu)return n.RGB;if(i===tn)return n.RGBA;if(i===zr)return n.DEPTH_COMPONENT;if(i===kr)return n.DEPTH_STENCIL;if(i===th)return n.RED;if(i===Dl)return n.RED_INTEGER;if(i===eh)return n.RG;if(i===Ll)return n.RG_INTEGER;if(i===Il)return n.RGBA_INTEGER;if(i===Cs||i===Ps||i===Ds||i===Ls)if(a===te)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Cs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Cs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ps)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ds)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ls)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ao||i===Ro||i===Co||i===Po)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ao)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ro)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Co)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Po)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Do||i===Lo||i===Io)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Do||i===Lo)return a===te?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Io)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Uo||i===No||i===Fo||i===Oo||i===Bo||i===zo||i===ko||i===Ho||i===Vo||i===Go||i===Wo||i===Xo||i===$o||i===Yo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Uo)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===No)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fo)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Oo)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bo)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zo)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ko)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ho)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vo)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Go)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wo)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xo)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$o)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yo)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Is||i===qo||i===Zo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Is)return a===te?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nh||i===Ko||i===jo||i===Jo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Is)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ko)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Br?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const N0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F0=`
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

}`;class O0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Te,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Wn({vertexShader:N0,fragmentShader:F0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Oe(new _a(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class B0 extends _i{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const v=new O0,m=e.getContextAttributes();let p=null,E=null;const T=[],y=[],D=new Ut;let P=null;const A=new je;A.viewport=new he;const C=new je;C.viewport=new he;const S=[A,C],x=new rp;let b=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let rt=T[Y];return rt===void 0&&(rt=new Xa,T[Y]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(Y){let rt=T[Y];return rt===void 0&&(rt=new Xa,T[Y]=rt),rt.getGripSpace()},this.getHand=function(Y){let rt=T[Y];return rt===void 0&&(rt=new Xa,T[Y]=rt),rt.getHandSpace()};function O(Y){const rt=y.indexOf(Y.inputSource);if(rt===-1)return;const at=T[rt];at!==void 0&&(at.update(Y.inputSource,Y.frame,c||a),at.dispatchEvent({type:Y.type,data:Y.inputSource}))}function K(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",J);for(let Y=0;Y<T.length;Y++){const rt=y[Y];rt!==null&&(y[Y]=null,T[Y].disconnect(rt))}b=null,z=null,v.reset(),t.setRenderTarget(p),d=null,f=null,h=null,r=null,E=null,At.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",K),r.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(D),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let at=null,st=null,ft=null;m.depth&&(ft=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=m.stencil?kr:zr,st=m.stencil?Br:ui);const Tt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:s};h=new XRWebGLBinding(r,e),f=h.createProjectionLayer(Tt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new fi(f.textureWidth,f.textureHeight,{format:tn,type:Rn,depthTexture:new _h(f.textureWidth,f.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const at={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,at),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new fi(d.framebufferWidth,d.framebufferHeight,{format:tn,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),At.setContext(r),At.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function J(Y){for(let rt=0;rt<Y.removed.length;rt++){const at=Y.removed[rt],st=y.indexOf(at);st>=0&&(y[st]=null,T[st].disconnect(at))}for(let rt=0;rt<Y.added.length;rt++){const at=Y.added[rt];let st=y.indexOf(at);if(st===-1){for(let Tt=0;Tt<T.length;Tt++)if(Tt>=y.length){y.push(at),st=Tt;break}else if(y[Tt]===null){y[Tt]=at,st=Tt;break}if(st===-1)break}const ft=T[st];ft&&ft.connect(at)}}const Z=new N,nt=new N;function $(Y,rt,at){Z.setFromMatrixPosition(rt.matrixWorld),nt.setFromMatrixPosition(at.matrixWorld);const st=Z.distanceTo(nt),ft=rt.projectionMatrix.elements,Tt=at.projectionMatrix.elements,_t=ft[14]/(ft[10]-1),Xt=ft[14]/(ft[10]+1),qt=(ft[9]+1)/ft[5],kt=(ft[9]-1)/ft[5],R=(ft[8]-1)/ft[0],Gt=(Tt[8]+1)/Tt[0],Nt=_t*R,Wt=_t*Gt,tt=st/(-R+Gt),Rt=tt*-R;if(rt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Rt),Y.translateZ(tt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ft[10]===-1)Y.projectionMatrix.copy(rt.projectionMatrix),Y.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const H=_t+tt,j=Xt+tt,xt=Nt-Rt,w=Wt+(st-Rt),g=qt*Xt/j*H,L=kt*Xt/j*H;Y.projectionMatrix.makePerspective(xt,w,g,L,H,j),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function G(Y,rt){rt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(rt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let rt=Y.near,at=Y.far;v.texture!==null&&(v.depthNear>0&&(rt=v.depthNear),v.depthFar>0&&(at=v.depthFar)),x.near=C.near=A.near=rt,x.far=C.far=A.far=at,(b!==x.near||z!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),b=x.near,z=x.far),A.layers.mask=Y.layers.mask|2,C.layers.mask=Y.layers.mask|4,x.layers.mask=A.layers.mask|C.layers.mask;const st=Y.parent,ft=x.cameras;G(x,st);for(let Tt=0;Tt<ft.length;Tt++)G(ft[Tt],st);ft.length===2?$(x,A,C):x.projectionMatrix.copy(A.projectionMatrix),it(Y,x,st)};function it(Y,rt,at){at===null?Y.matrix.copy(rt.matrixWorld):(Y.matrix.copy(at.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(rt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(rt.projectionMatrix),Y.projectionMatrixInverse.copy(rt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=tl*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let B=null;function ut(Y,rt){if(u=rt.getViewerPose(c||a),_=rt,u!==null){const at=u.views;d!==null&&(t.setRenderTargetFramebuffer(E,d.framebuffer),t.setRenderTarget(E));let st=!1;at.length!==x.cameras.length&&(x.cameras.length=0,st=!0);for(let _t=0;_t<at.length;_t++){const Xt=at[_t];let qt=null;if(d!==null)qt=d.getViewport(Xt);else{const R=h.getViewSubImage(f,Xt);qt=R.viewport,_t===0&&(t.setRenderTargetTextures(E,R.colorTexture,R.depthStencilTexture),t.setRenderTarget(E))}let kt=S[_t];kt===void 0&&(kt=new je,kt.layers.enable(_t),kt.viewport=new he,S[_t]=kt),kt.matrix.fromArray(Xt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Xt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(qt.x,qt.y,qt.width,qt.height),_t===0&&(x.matrix.copy(kt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),st===!0&&x.cameras.push(kt)}const ft=r.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&h){const _t=h.getDepthInformation(at[0]);_t&&_t.isValid&&_t.texture&&v.init(t,_t,r.renderState)}}for(let at=0;at<T.length;at++){const st=y[at],ft=T[at];st!==null&&ft!==void 0&&ft.update(st,rt,c||a)}B&&B(Y,rt),rt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:rt}),_=null}const At=new vh;At.setAnimationLoop(ut),this.setAnimationLoop=function(Y){B=Y},this.dispose=function(){}}}const Qn=new rn,z0=new ce;function k0(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,uh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,E,T,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Pe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Pe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),T=E.envMap,y=E.envMapRotation;T&&(m.envMap.value=T,Qn.copy(y),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),m.envMapRotation.value.setFromMatrix4(z0.makeRotationFromEuler(Qn)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=T*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Pe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function H0(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,T){const y=T.program;i.uniformBlockBinding(E,y)}function c(E,T){let y=r[E.id];y===void 0&&(_(E),y=u(E),r[E.id]=y,E.addEventListener("dispose",m));const D=T.program;i.updateUBOMapping(E,D);const P=t.render.frame;s[E.id]!==P&&(f(E),s[E.id]=P)}function u(E){const T=h();E.__bindingPointIndex=T;const y=n.createBuffer(),D=E.__size,P=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,D,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,y),y}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const T=r[E.id],y=E.uniforms,D=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let P=0,A=y.length;P<A;P++){const C=Array.isArray(y[P])?y[P]:[y[P]];for(let S=0,x=C.length;S<x;S++){const b=C[S];if(d(b,P,S,D)===!0){const z=b.__offset,O=Array.isArray(b.value)?b.value:[b.value];let K=0;for(let J=0;J<O.length;J++){const Z=O[J],nt=v(Z);typeof Z=="number"||typeof Z=="boolean"?(b.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,z+K,b.__data)):Z.isMatrix3?(b.__data[0]=Z.elements[0],b.__data[1]=Z.elements[1],b.__data[2]=Z.elements[2],b.__data[3]=0,b.__data[4]=Z.elements[3],b.__data[5]=Z.elements[4],b.__data[6]=Z.elements[5],b.__data[7]=0,b.__data[8]=Z.elements[6],b.__data[9]=Z.elements[7],b.__data[10]=Z.elements[8],b.__data[11]=0):(Z.toArray(b.__data,K),K+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(E,T,y,D){const P=E.value,A=T+"_"+y;if(D[A]===void 0)return typeof P=="number"||typeof P=="boolean"?D[A]=P:D[A]=P.clone(),!0;{const C=D[A];if(typeof P=="number"||typeof P=="boolean"){if(C!==P)return D[A]=P,!0}else if(C.equals(P)===!1)return C.copy(P),!0}return!1}function _(E){const T=E.uniforms;let y=0;const D=16;for(let A=0,C=T.length;A<C;A++){const S=Array.isArray(T[A])?T[A]:[T[A]];for(let x=0,b=S.length;x<b;x++){const z=S[x],O=Array.isArray(z.value)?z.value:[z.value];for(let K=0,J=O.length;K<J;K++){const Z=O[K],nt=v(Z),$=y%D,G=$%nt.boundary,it=$+G;y+=G,it!==0&&D-it<nt.storage&&(y+=D-it),z.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=nt.storage}}}const P=y%D;return P>0&&(y+=D-P),E.__size=y,E.__cache={},this}function v(E){const T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),T}function m(E){const T=E.target;T.removeEventListener("dispose",m);const y=a.indexOf(T.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function p(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class V0{constructor(t={}){const{canvas:e=gd(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const E=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let D=!1;this._outputColorSpace=Ge;let P=0,A=0,C=null,S=-1,x=null;const b=new he,z=new he;let O=null;const K=new Yt(0);let J=0,Z=e.width,nt=e.height,$=1,G=null,it=null;const B=new he(0,0,Z,nt),ut=new he(0,0,Z,nt);let At=!1;const Y=new mh;let rt=!1,at=!1;const st=new ce,ft=new ce,Tt=new N,_t=new he,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function kt(){return C===null?$:1}let R=i;function Gt(M,U){return e.getContext(M,U)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${bl}`),e.addEventListener("webglcontextlost",Et,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",Q,!1),R===null){const U="webgl2";if(R=Gt(U,M),R===null)throw Gt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Nt,Wt,tt,Rt,H,j,xt,w,g,L,k,q,V,gt,dt,pt,Mt,et,St,Lt,Pt,ot,Ft,I;function vt(){Nt=new J_(R),Nt.init(),ot=new U0(R,Nt),Wt=new X_(R,Nt,t,ot),tt=new L0(R,Nt),Wt.reverseDepthBuffer&&f&&tt.buffers.depth.setReversed(!0),Rt=new eg(R),H=new x0,j=new I0(R,Nt,tt,H,Wt,ot,Rt),xt=new Y_(y),w=new j_(y),g=new op(R),Ft=new G_(R,g),L=new Q_(R,g,Rt,Ft),k=new ig(R,L,g,Rt),St=new ng(R,Wt,j),pt=new $_(H),q=new v0(y,xt,w,Nt,Wt,Ft,pt),V=new k0(y,H),gt=new y0,dt=new A0(Nt),et=new V_(y,xt,w,tt,k,d,l),Mt=new P0(y,k,Wt),I=new H0(R,Rt,Wt,tt),Lt=new W_(R,Nt,Rt),Pt=new tg(R,Nt,Rt),Rt.programs=q.programs,y.capabilities=Wt,y.extensions=Nt,y.properties=H,y.renderLists=gt,y.shadowMap=Mt,y.state=tt,y.info=Rt}vt();const lt=new B0(y,R);this.xr=lt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const M=Nt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Nt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(M){M!==void 0&&($=M,this.setSize(Z,nt,!1))},this.getSize=function(M){return M.set(Z,nt)},this.setSize=function(M,U,W=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=M,nt=U,e.width=Math.floor(M*$),e.height=Math.floor(U*$),W===!0&&(e.style.width=M+"px",e.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(Z*$,nt*$).floor()},this.setDrawingBufferSize=function(M,U,W){Z=M,nt=U,$=W,e.width=Math.floor(M*W),e.height=Math.floor(U*W),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(b)},this.getViewport=function(M){return M.copy(B)},this.setViewport=function(M,U,W,X){M.isVector4?B.set(M.x,M.y,M.z,M.w):B.set(M,U,W,X),tt.viewport(b.copy(B).multiplyScalar($).round())},this.getScissor=function(M){return M.copy(ut)},this.setScissor=function(M,U,W,X){M.isVector4?ut.set(M.x,M.y,M.z,M.w):ut.set(M,U,W,X),tt.scissor(z.copy(ut).multiplyScalar($).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(M){tt.setScissorTest(At=M)},this.setOpaqueSort=function(M){G=M},this.setTransparentSort=function(M){it=M},this.getClearColor=function(M){return M.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,W=!0){let X=0;if(M){let F=!1;if(C!==null){const ht=C.texture.format;F=ht===Il||ht===Ll||ht===Dl}if(F){const ht=C.texture.type,yt=ht===Rn||ht===ui||ht===Or||ht===Br||ht===Cl||ht===Pl,Ct=et.getClearColor(),wt=et.getClearAlpha(),Ot=Ct.r,zt=Ct.g,Dt=Ct.b;yt?(_[0]=Ot,_[1]=zt,_[2]=Dt,_[3]=wt,R.clearBufferuiv(R.COLOR,0,_)):(v[0]=Ot,v[1]=zt,v[2]=Dt,v[3]=wt,R.clearBufferiv(R.COLOR,0,v))}else X|=R.COLOR_BUFFER_BIT}U&&(X|=R.DEPTH_BUFFER_BIT),W&&(X|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Et,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",Q,!1),et.dispose(),gt.dispose(),dt.dispose(),H.dispose(),xt.dispose(),w.dispose(),k.dispose(),Ft.dispose(),I.dispose(),q.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",$n),lt.removeEventListener("sessionend",dr),an.stop()};function Et(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const M=Rt.autoReset,U=Mt.enabled,W=Mt.autoUpdate,X=Mt.needsUpdate,F=Mt.type;vt(),Rt.autoReset=M,Mt.enabled=U,Mt.autoUpdate=W,Mt.needsUpdate=X,Mt.type=F}function Q(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function bt(M){const U=M.target;U.removeEventListener("dispose",bt),Bt(U)}function Bt(M){ie(M),H.remove(M)}function ie(M){const U=H.get(M).programs;U!==void 0&&(U.forEach(function(W){q.releaseProgram(W)}),M.isShaderMaterial&&q.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,W,X,F,ht){U===null&&(U=Xt);const yt=F.isMesh&&F.matrixWorld.determinant()<0,Ct=Mf(M,U,W,X,F);tt.setMaterial(X,yt);let wt=W.index,Ot=1;if(X.wireframe===!0){if(wt=L.getWireframeAttribute(W),wt===void 0)return;Ot=2}const zt=W.drawRange,Dt=W.attributes.position;let Zt=zt.start*Ot,Qt=(zt.start+zt.count)*Ot;ht!==null&&(Zt=Math.max(Zt,ht.start*Ot),Qt=Math.min(Qt,(ht.start+ht.count)*Ot)),wt!==null?(Zt=Math.max(Zt,0),Qt=Math.min(Qt,wt.count)):Dt!=null&&(Zt=Math.max(Zt,0),Qt=Math.min(Qt,Dt.count));const le=Qt-Zt;if(le<0||le===1/0)return;Ft.setup(F,X,Ct,W,wt);let se,re=Lt;if(wt!==null&&(se=g.get(wt),re=Pt,re.setIndex(se)),F.isMesh)X.wireframe===!0?(tt.setLineWidth(X.wireframeLinewidth*kt()),re.setMode(R.LINES)):re.setMode(R.TRIANGLES);else if(F.isLine){let It=X.linewidth;It===void 0&&(It=1),tt.setLineWidth(It*kt()),F.isLineSegments?re.setMode(R.LINES):F.isLineLoop?re.setMode(R.LINE_LOOP):re.setMode(R.LINE_STRIP)}else F.isPoints?re.setMode(R.POINTS):F.isSprite&&re.setMode(R.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Yi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),re.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Nt.get("WEBGL_multi_draw"))re.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const It=F._multiDrawStarts,oe=F._multiDrawCounts,Kt=F._multiDrawCount,Ie=wt?g.get(wt).bytesPerElement:1,vi=H.get(X).currentProgram.getUniforms();for(let Ue=0;Ue<Kt;Ue++)vi.setValue(R,"_gl_DrawID",Ue),re.render(It[Ue]/Ie,oe[Ue])}else if(F.isInstancedMesh)re.renderInstances(Zt,le,F.count);else if(W.isInstancedBufferGeometry){const It=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,oe=Math.min(W.instanceCount,It);re.renderInstances(Zt,le,oe)}else re.render(Zt,le)};function Jt(M,U,W){M.transparent===!0&&M.side===ln&&M.forceSinglePass===!1?(M.side=Pe,M.needsUpdate=!0,Kr(M,U,W),M.side=Gn,M.needsUpdate=!0,Kr(M,U,W),M.side=ln):Kr(M,U,W)}this.compile=function(M,U,W=null){W===null&&(W=M),p=dt.get(W),p.init(U),T.push(p),W.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),M!==W&&M.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const X=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ht=F.material;if(ht)if(Array.isArray(ht))for(let yt=0;yt<ht.length;yt++){const Ct=ht[yt];Jt(Ct,W,F),X.add(Ct)}else Jt(ht,W,F),X.add(ht)}),p=T.pop(),X},this.compileAsync=function(M,U,W=null){const X=this.compile(M,U,W);return new Promise(F=>{function ht(){if(X.forEach(function(yt){H.get(yt).currentProgram.isReady()&&X.delete(yt)}),X.size===0){F(M);return}setTimeout(ht,10)}Nt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let ue=null;function De(M){ue&&ue(M)}function $n(){an.stop()}function dr(){an.start()}const an=new vh;an.setAnimationLoop(De),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(M){ue=M,lt.setAnimationLoop(M),M===null?an.stop():an.start()},lt.addEventListener("sessionstart",$n),lt.addEventListener("sessionend",dr),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(U),U=lt.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,U,C),p=dt.get(M,T.length),p.init(U),T.push(p),ft.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(ft),at=this.localClippingEnabled,rt=pt.init(this.clippingPlanes,at),m=gt.get(M,E.length),m.init(),E.push(m),lt.enabled===!0&&lt.isPresenting===!0){const ht=y.xr.getDepthSensingMesh();ht!==null&&de(ht,U,-1/0,y.sortObjects)}de(M,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(G,it),qt=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,qt&&et.addToRenderList(m,M),this.info.render.frame++,rt===!0&&pt.beginShadows();const W=p.state.shadowsArray;Mt.render(W,M,U),rt===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,F=m.transmissive;if(p.setupLights(),U.isArrayCamera){const ht=U.cameras;if(F.length>0)for(let yt=0,Ct=ht.length;yt<Ct;yt++){const wt=ht[yt];gi(X,F,M,wt)}qt&&et.render(M);for(let yt=0,Ct=ht.length;yt<Ct;yt++){const wt=ht[yt];Le(m,M,wt,wt.viewport)}}else F.length>0&&gi(X,F,M,U),qt&&et.render(M),Le(m,M,U);C!==null&&A===0&&(j.updateMultisampleRenderTarget(C),j.updateRenderTargetMipmap(C)),M.isScene===!0&&M.onAfterRender(y,M,U),Ft.resetDefaultState(),S=-1,x=null,T.pop(),T.length>0?(p=T[T.length-1],rt===!0&&pt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function de(M,U,W,X){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Y.intersectsSprite(M)){X&&_t.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ft);const yt=k.update(M),Ct=M.material;Ct.visible&&m.push(M,yt,Ct,W,_t.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Y.intersectsObject(M))){const yt=k.update(M),Ct=M.material;if(X&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),_t.copy(M.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),_t.copy(yt.boundingSphere.center)),_t.applyMatrix4(M.matrixWorld).applyMatrix4(ft)),Array.isArray(Ct)){const wt=yt.groups;for(let Ot=0,zt=wt.length;Ot<zt;Ot++){const Dt=wt[Ot],Zt=Ct[Dt.materialIndex];Zt&&Zt.visible&&m.push(M,yt,Zt,W,_t.z,Dt)}}else Ct.visible&&m.push(M,yt,Ct,W,_t.z,null)}}const ht=M.children;for(let yt=0,Ct=ht.length;yt<Ct;yt++)de(ht[yt],U,W,X)}function Le(M,U,W,X){const F=M.opaque,ht=M.transmissive,yt=M.transparent;p.setupLightsView(W),rt===!0&&pt.setGlobalState(y.clippingPlanes,W),X&&tt.viewport(b.copy(X)),F.length>0&&Zr(F,U,W),ht.length>0&&Zr(ht,U,W),yt.length>0&&Zr(yt,U,W),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function gi(M,U,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new fi(1,1,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float")?$r:Rn,minFilter:oi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const ht=p.state.transmissionRenderTarget[X.id],yt=X.viewport||b;ht.setSize(yt.z*y.transmissionResolutionScale,yt.w*y.transmissionResolutionScale);const Ct=y.getRenderTarget(),wt=y.getActiveCubeFace(),Ot=y.getActiveMipmapLevel();y.setRenderTarget(ht),y.getClearColor(K),J=y.getClearAlpha(),J<1&&y.setClearColor(16777215,.5),y.clear(),qt&&et.render(W);const zt=y.toneMapping;y.toneMapping=kn;const Dt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),rt===!0&&pt.setGlobalState(y.clippingPlanes,X),Zr(M,W,X),j.updateMultisampleRenderTarget(ht),j.updateRenderTargetMipmap(ht),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Qt=0,le=U.length;Qt<le;Qt++){const se=U[Qt],re=se.object,It=se.geometry,oe=se.material,Kt=se.group;if(oe.side===ln&&re.layers.test(X.layers)){const Ie=oe.side;oe.side=Pe,oe.needsUpdate=!0,Kl(re,W,X,It,oe,Kt),oe.side=Ie,oe.needsUpdate=!0,Zt=!0}}Zt===!0&&(j.updateMultisampleRenderTarget(ht),j.updateRenderTargetMipmap(ht))}y.setRenderTarget(Ct,wt,Ot),y.setClearColor(K,J),Dt!==void 0&&(X.viewport=Dt),y.toneMapping=zt}function Zr(M,U,W){const X=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ht=M.length;F<ht;F++){const yt=M[F],Ct=yt.object,wt=yt.geometry,Ot=yt.group;let zt=yt.material;zt.allowOverride===!0&&X!==null&&(zt=X),Ct.layers.test(W.layers)&&Kl(Ct,U,W,wt,zt,Ot)}}function Kl(M,U,W,X,F,ht){M.onBeforeRender(y,U,W,X,F,ht),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(y,U,W,X,M,ht),F.transparent===!0&&F.side===ln&&F.forceSinglePass===!1?(F.side=Pe,F.needsUpdate=!0,y.renderBufferDirect(W,U,X,F,M,ht),F.side=Gn,F.needsUpdate=!0,y.renderBufferDirect(W,U,X,F,M,ht),F.side=ln):y.renderBufferDirect(W,U,X,F,M,ht),M.onAfterRender(y,U,W,X,F,ht)}function Kr(M,U,W){U.isScene!==!0&&(U=Xt);const X=H.get(M),F=p.state.lights,ht=p.state.shadowsArray,yt=F.state.version,Ct=q.getParameters(M,F.state,ht,U,W),wt=q.getProgramCacheKey(Ct);let Ot=X.programs;X.environment=M.isMeshStandardMaterial?U.environment:null,X.fog=U.fog,X.envMap=(M.isMeshStandardMaterial?w:xt).get(M.envMap||X.environment),X.envMapRotation=X.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Ot===void 0&&(M.addEventListener("dispose",bt),Ot=new Map,X.programs=Ot);let zt=Ot.get(wt);if(zt!==void 0){if(X.currentProgram===zt&&X.lightsStateVersion===yt)return Jl(M,Ct),zt}else Ct.uniforms=q.getUniforms(M),M.onBeforeCompile(Ct,y),zt=q.acquireProgram(Ct,wt),Ot.set(wt,zt),X.uniforms=Ct.uniforms;const Dt=X.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Dt.clippingPlanes=pt.uniform),Jl(M,Ct),X.needsLights=Sf(M),X.lightsStateVersion=yt,X.needsLights&&(Dt.ambientLightColor.value=F.state.ambient,Dt.lightProbe.value=F.state.probe,Dt.directionalLights.value=F.state.directional,Dt.directionalLightShadows.value=F.state.directionalShadow,Dt.spotLights.value=F.state.spot,Dt.spotLightShadows.value=F.state.spotShadow,Dt.rectAreaLights.value=F.state.rectArea,Dt.ltc_1.value=F.state.rectAreaLTC1,Dt.ltc_2.value=F.state.rectAreaLTC2,Dt.pointLights.value=F.state.point,Dt.pointLightShadows.value=F.state.pointShadow,Dt.hemisphereLights.value=F.state.hemi,Dt.directionalShadowMap.value=F.state.directionalShadowMap,Dt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Dt.spotShadowMap.value=F.state.spotShadowMap,Dt.spotLightMatrix.value=F.state.spotLightMatrix,Dt.spotLightMap.value=F.state.spotLightMap,Dt.pointShadowMap.value=F.state.pointShadowMap,Dt.pointShadowMatrix.value=F.state.pointShadowMatrix),X.currentProgram=zt,X.uniformsList=null,zt}function jl(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=Ns.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Jl(M,U){const W=H.get(M);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Mf(M,U,W,X,F){U.isScene!==!0&&(U=Xt),j.resetTextureUnits();const ht=U.fog,yt=X.isMeshStandardMaterial?U.environment:null,Ct=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:nr,wt=(X.isMeshStandardMaterial?w:xt).get(X.envMap||yt),Ot=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,zt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Dt=!!W.morphAttributes.position,Zt=!!W.morphAttributes.normal,Qt=!!W.morphAttributes.color;let le=kn;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(le=y.toneMapping);const se=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,re=se!==void 0?se.length:0,It=H.get(X),oe=p.state.lights;if(rt===!0&&(at===!0||M!==x)){const Se=M===x&&X.id===S;pt.setState(X,M,Se)}let Kt=!1;X.version===It.__version?(It.needsLights&&It.lightsStateVersion!==oe.state.version||It.outputColorSpace!==Ct||F.isBatchedMesh&&It.batching===!1||!F.isBatchedMesh&&It.batching===!0||F.isBatchedMesh&&It.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&It.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&It.instancing===!1||!F.isInstancedMesh&&It.instancing===!0||F.isSkinnedMesh&&It.skinning===!1||!F.isSkinnedMesh&&It.skinning===!0||F.isInstancedMesh&&It.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&It.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&It.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&It.instancingMorph===!1&&F.morphTexture!==null||It.envMap!==wt||X.fog===!0&&It.fog!==ht||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==pt.numPlanes||It.numIntersection!==pt.numIntersection)||It.vertexAlphas!==Ot||It.vertexTangents!==zt||It.morphTargets!==Dt||It.morphNormals!==Zt||It.morphColors!==Qt||It.toneMapping!==le||It.morphTargetsCount!==re)&&(Kt=!0):(Kt=!0,It.__version=X.version);let Ie=It.currentProgram;Kt===!0&&(Ie=Kr(X,U,F));let vi=!1,Ue=!1,pr=!1;const ae=Ie.getUniforms(),ke=It.uniforms;if(tt.useProgram(Ie.program)&&(vi=!0,Ue=!0,pr=!0),X.id!==S&&(S=X.id,Ue=!0),vi||x!==M){tt.buffers.depth.getReversed()?(st.copy(M.projectionMatrix),xd(st),Md(st),ae.setValue(R,"projectionMatrix",st)):ae.setValue(R,"projectionMatrix",M.projectionMatrix),ae.setValue(R,"viewMatrix",M.matrixWorldInverse);const be=ae.map.cameraPosition;be!==void 0&&be.setValue(R,Tt.setFromMatrixPosition(M.matrixWorld)),Wt.logarithmicDepthBuffer&&ae.setValue(R,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ae.setValue(R,"isOrthographic",M.isOrthographicCamera===!0),x!==M&&(x=M,Ue=!0,pr=!0)}if(F.isSkinnedMesh){ae.setOptional(R,F,"bindMatrix"),ae.setOptional(R,F,"bindMatrixInverse");const Se=F.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),ae.setValue(R,"boneTexture",Se.boneTexture,j))}F.isBatchedMesh&&(ae.setOptional(R,F,"batchingTexture"),ae.setValue(R,"batchingTexture",F._matricesTexture,j),ae.setOptional(R,F,"batchingIdTexture"),ae.setValue(R,"batchingIdTexture",F._indirectTexture,j),ae.setOptional(R,F,"batchingColorTexture"),F._colorsTexture!==null&&ae.setValue(R,"batchingColorTexture",F._colorsTexture,j));const He=W.morphAttributes;if((He.position!==void 0||He.normal!==void 0||He.color!==void 0)&&St.update(F,W,Ie),(Ue||It.receiveShadow!==F.receiveShadow)&&(It.receiveShadow=F.receiveShadow,ae.setValue(R,"receiveShadow",F.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ke.envMap.value=wt,ke.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&U.environment!==null&&(ke.envMapIntensity.value=U.environmentIntensity),Ue&&(ae.setValue(R,"toneMappingExposure",y.toneMappingExposure),It.needsLights&&yf(ke,pr),ht&&X.fog===!0&&V.refreshFogUniforms(ke,ht),V.refreshMaterialUniforms(ke,X,$,nt,p.state.transmissionRenderTarget[M.id]),Ns.upload(R,jl(It),ke,j)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ns.upload(R,jl(It),ke,j),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ae.setValue(R,"center",F.center),ae.setValue(R,"modelViewMatrix",F.modelViewMatrix),ae.setValue(R,"normalMatrix",F.normalMatrix),ae.setValue(R,"modelMatrix",F.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Se=X.uniformsGroups;for(let be=0,ya=Se.length;be<ya;be++){const Yn=Se[be];I.update(Yn,Ie),I.bind(Yn,Ie)}}return Ie}function yf(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Sf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(M,U,W){const X=H.get(M);X.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),H.get(M.texture).__webglTexture=U,H.get(M.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){const W=H.get(M);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0};const Ef=R.createFramebuffer();this.setRenderTarget=function(M,U=0,W=0){C=M,P=U,A=W;let X=!0,F=null,ht=!1,yt=!1;if(M){const wt=H.get(M);if(wt.__useDefaultFramebuffer!==void 0)tt.bindFramebuffer(R.FRAMEBUFFER,null),X=!1;else if(wt.__webglFramebuffer===void 0)j.setupRenderTarget(M);else if(wt.__hasExternalTextures)j.rebindTextures(M,H.get(M.texture).__webglTexture,H.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Dt=M.depthTexture;if(wt.__boundDepthTexture!==Dt){if(Dt!==null&&H.has(Dt)&&(M.width!==Dt.image.width||M.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(M)}}const Ot=M.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(yt=!0);const zt=H.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(zt[U])?F=zt[U][W]:F=zt[U],ht=!0):M.samples>0&&j.useMultisampledRTT(M)===!1?F=H.get(M).__webglMultisampledFramebuffer:Array.isArray(zt)?F=zt[W]:F=zt,b.copy(M.viewport),z.copy(M.scissor),O=M.scissorTest}else b.copy(B).multiplyScalar($).floor(),z.copy(ut).multiplyScalar($).floor(),O=At;if(W!==0&&(F=Ef),tt.bindFramebuffer(R.FRAMEBUFFER,F)&&X&&tt.drawBuffers(M,F),tt.viewport(b),tt.scissor(z),tt.setScissorTest(O),ht){const wt=H.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,wt.__webglTexture,W)}else if(yt){const wt=H.get(M.texture),Ot=U;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,wt.__webglTexture,W,Ot)}else if(M!==null&&W!==0){const wt=H.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,wt.__webglTexture,W)}S=-1},this.readRenderTargetPixels=function(M,U,W,X,F,ht,yt,Ct=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&yt!==void 0&&(wt=wt[yt]),wt){tt.bindFramebuffer(R.FRAMEBUFFER,wt);try{const Ot=M.textures[Ct],zt=Ot.format,Dt=Ot.type;if(!Wt.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-X&&W>=0&&W<=M.height-F&&(M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ct),R.readPixels(U,W,X,F,ot.convert(zt),ot.convert(Dt),ht))}finally{const Ot=C!==null?H.get(C).__webglFramebuffer:null;tt.bindFramebuffer(R.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(M,U,W,X,F,ht,yt,Ct=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&yt!==void 0&&(wt=wt[yt]),wt)if(U>=0&&U<=M.width-X&&W>=0&&W<=M.height-F){tt.bindFramebuffer(R.FRAMEBUFFER,wt);const Ot=M.textures[Ct],zt=Ot.format,Dt=Ot.type;if(!Wt.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Zt),R.bufferData(R.PIXEL_PACK_BUFFER,ht.byteLength,R.STREAM_READ),M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ct),R.readPixels(U,W,X,F,ot.convert(zt),ot.convert(Dt),0);const Qt=C!==null?H.get(C).__webglFramebuffer:null;tt.bindFramebuffer(R.FRAMEBUFFER,Qt);const le=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await vd(R,le,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Zt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ht),R.deleteBuffer(Zt),R.deleteSync(le),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,W=0){const X=Math.pow(2,-W),F=Math.floor(M.image.width*X),ht=Math.floor(M.image.height*X),yt=U!==null?U.x:0,Ct=U!==null?U.y:0;j.setTexture2D(M,0),R.copyTexSubImage2D(R.TEXTURE_2D,W,0,0,yt,Ct,F,ht),tt.unbindTexture()};const wf=R.createFramebuffer(),Tf=R.createFramebuffer();this.copyTextureToTexture=function(M,U,W=null,X=null,F=0,ht=null){ht===null&&(F!==0?(Yi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ht=F,F=0):ht=0);let yt,Ct,wt,Ot,zt,Dt,Zt,Qt,le;const se=M.isCompressedTexture?M.mipmaps[ht]:M.image;if(W!==null)yt=W.max.x-W.min.x,Ct=W.max.y-W.min.y,wt=W.isBox3?W.max.z-W.min.z:1,Ot=W.min.x,zt=W.min.y,Dt=W.isBox3?W.min.z:0;else{const He=Math.pow(2,-F);yt=Math.floor(se.width*He),Ct=Math.floor(se.height*He),M.isDataArrayTexture?wt=se.depth:M.isData3DTexture?wt=Math.floor(se.depth*He):wt=1,Ot=0,zt=0,Dt=0}X!==null?(Zt=X.x,Qt=X.y,le=X.z):(Zt=0,Qt=0,le=0);const re=ot.convert(U.format),It=ot.convert(U.type);let oe;U.isData3DTexture?(j.setTexture3D(U,0),oe=R.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(j.setTexture2DArray(U,0),oe=R.TEXTURE_2D_ARRAY):(j.setTexture2D(U,0),oe=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const Kt=R.getParameter(R.UNPACK_ROW_LENGTH),Ie=R.getParameter(R.UNPACK_IMAGE_HEIGHT),vi=R.getParameter(R.UNPACK_SKIP_PIXELS),Ue=R.getParameter(R.UNPACK_SKIP_ROWS),pr=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,se.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,se.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ot),R.pixelStorei(R.UNPACK_SKIP_ROWS,zt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Dt);const ae=M.isDataArrayTexture||M.isData3DTexture,ke=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const He=H.get(M),Se=H.get(U),be=H.get(He.__renderTarget),ya=H.get(Se.__renderTarget);tt.bindFramebuffer(R.READ_FRAMEBUFFER,be.__webglFramebuffer),tt.bindFramebuffer(R.DRAW_FRAMEBUFFER,ya.__webglFramebuffer);for(let Yn=0;Yn<wt;Yn++)ae&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,H.get(M).__webglTexture,F,Dt+Yn),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,H.get(U).__webglTexture,ht,le+Yn)),R.blitFramebuffer(Ot,zt,yt,Ct,Zt,Qt,yt,Ct,R.DEPTH_BUFFER_BIT,R.NEAREST);tt.bindFramebuffer(R.READ_FRAMEBUFFER,null),tt.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(F!==0||M.isRenderTargetTexture||H.has(M)){const He=H.get(M),Se=H.get(U);tt.bindFramebuffer(R.READ_FRAMEBUFFER,wf),tt.bindFramebuffer(R.DRAW_FRAMEBUFFER,Tf);for(let be=0;be<wt;be++)ae?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,He.__webglTexture,F,Dt+be):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,He.__webglTexture,F),ke?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Se.__webglTexture,ht,le+be):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Se.__webglTexture,ht),F!==0?R.blitFramebuffer(Ot,zt,yt,Ct,Zt,Qt,yt,Ct,R.COLOR_BUFFER_BIT,R.NEAREST):ke?R.copyTexSubImage3D(oe,ht,Zt,Qt,le+be,Ot,zt,yt,Ct):R.copyTexSubImage2D(oe,ht,Zt,Qt,Ot,zt,yt,Ct);tt.bindFramebuffer(R.READ_FRAMEBUFFER,null),tt.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else ke?M.isDataTexture||M.isData3DTexture?R.texSubImage3D(oe,ht,Zt,Qt,le,yt,Ct,wt,re,It,se.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(oe,ht,Zt,Qt,le,yt,Ct,wt,re,se.data):R.texSubImage3D(oe,ht,Zt,Qt,le,yt,Ct,wt,re,It,se):M.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ht,Zt,Qt,yt,Ct,re,It,se.data):M.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ht,Zt,Qt,se.width,se.height,re,se.data):R.texSubImage2D(R.TEXTURE_2D,ht,Zt,Qt,yt,Ct,re,It,se);R.pixelStorei(R.UNPACK_ROW_LENGTH,Kt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ie),R.pixelStorei(R.UNPACK_SKIP_PIXELS,vi),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ue),R.pixelStorei(R.UNPACK_SKIP_IMAGES,pr),ht===0&&U.generateMipmaps&&R.generateMipmap(oe),tt.unbindTexture()},this.copyTextureToTexture3D=function(M,U,W=null,X=null,F=0){return Yi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,U,W,X,F)},this.initRenderTarget=function(M){H.get(M).__webglFramebuffer===void 0&&j.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?j.setTextureCube(M,0):M.isData3DTexture?j.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?j.setTexture2DArray(M,0):j.setTexture2D(M,0),tt.unbindTexture()},this.resetState=function(){P=0,A=0,C=null,tt.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}const tu={type:"change"},Bl={type:"start"},Eh={type:"end"},Es=new Fl,eu=new Fn,G0=Math.cos(70*_d.DEG2RAD),pe=new N,Ae=2*Math.PI,ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},eo=1e-6;class W0 extends sp{constructor(t,e=null){super(t,e),this.state=ne.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xi.ROTATE,MIDDLE:Xi.DOLLY,RIGHT:Xi.PAN},this.touches={ONE:Hi.ROTATE,TWO:Hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new hi,this._lastTargetPosition=new N,this._quat=new hi().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Rc,this._sphericalDelta=new Rc,this._scale=1,this._panOffset=new N,this._rotateStart=new Ut,this._rotateEnd=new Ut,this._rotateDelta=new Ut,this._panStart=new Ut,this._panEnd=new Ut,this._panDelta=new Ut,this._dollyStart=new Ut,this._dollyEnd=new Ut,this._dollyDelta=new Ut,this._dollyDirection=new N,this._mouse=new Ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$0.bind(this),this._onPointerDown=X0.bind(this),this._onPointerUp=Y0.bind(this),this._onContextMenu=tv.bind(this),this._onMouseWheel=K0.bind(this),this._onKeyDown=j0.bind(this),this._onTouchStart=J0.bind(this),this._onTouchMove=Q0.bind(this),this._onMouseDown=q0.bind(this),this._onMouseMove=Z0.bind(this),this._interceptControlDown=ev.bind(this),this._interceptControlUp=nv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(tu),this.update(),this.state=ne.NONE}update(t=null){const e=this.object.position;pe.copy(e).sub(this.target),pe.applyQuaternion(this._quat),this._spherical.setFromVector3(pe),this.autoRotate&&this.state===ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Ae:i>Math.PI&&(i-=Ae),r<-Math.PI?r+=Ae:r>Math.PI&&(r-=Ae),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(pe.setFromSpherical(this._spherical),pe.applyQuaternion(this._quatInverse),e.copy(this.target).add(pe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=pe.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new N(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=pe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Es.origin.copy(this.object.position),Es.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Es.direction))<G0?this.object.lookAt(this.target):(eu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Es.intersectPlane(eu,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>eo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>eo||this._lastTargetPosition.distanceToSquared(this.target)>eo?(this.dispatchEvent(tu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ae/60*this.autoRotateSpeed*t:Ae/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){pe.setFromMatrixColumn(e,0),pe.multiplyScalar(-t),this._panOffset.add(pe)}_panUp(t,e){this.screenSpacePanning===!0?pe.setFromMatrixColumn(e,1):(pe.setFromMatrixColumn(e,0),pe.crossVectors(this.object.up,pe)),pe.multiplyScalar(t),this._panOffset.add(pe)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;pe.copy(r).sub(this.target);let s=pe.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ae*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ae*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ae*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ae*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ae*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ae*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ae*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ae*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ut,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function X0(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function $0(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Y0(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Eh),this.state=ne.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function q0(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Xi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ne.DOLLY;break;case Xi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ne.ROTATE}break;case Xi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ne.PAN}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(Bl)}function Z0(n){switch(this.state){case ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function K0(n){this.enabled===!1||this.enableZoom===!1||this.state!==ne.NONE||(n.preventDefault(),this.dispatchEvent(Bl),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Eh))}function j0(n){this.enabled!==!1&&this._handleKeyDown(n)}function J0(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Hi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ne.TOUCH_ROTATE;break;case Hi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ne.TOUCH_PAN;break;default:this.state=ne.NONE}break;case 2:switch(this.touches.TWO){case Hi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ne.TOUCH_DOLLY_PAN;break;case Hi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ne.TOUCH_DOLLY_ROTATE;break;default:this.state=ne.NONE}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(Bl)}function Q0(n){switch(this._trackPointer(n),this.state){case ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ne.NONE}}function tv(n){this.enabled!==!1&&n.preventDefault()}function ev(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function nv(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Fs(n,t){return n==null||t==null?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function iv(n,t){return n==null||t==null?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function wh(n){let t,e,i;n.length!==2?(t=Fs,e=(o,l)=>Fs(n(o),l),i=(o,l)=>n(o)-l):(t=n===Fs||n===iv?n:rv,e=n,i=n);function r(o,l,c=0,u=o.length){if(c<u){if(t(l,l)!==0)return u;do{const h=c+u>>>1;e(o[h],l)<0?c=h+1:u=h}while(c<u)}return c}function s(o,l,c=0,u=o.length){if(c<u){if(t(l,l)!==0)return u;do{const h=c+u>>>1;e(o[h],l)<=0?c=h+1:u=h}while(c<u)}return c}function a(o,l,c=0,u=o.length){const h=r(o,l,c,u-1);return h>c&&i(o[h-1],l)>-i(o[h],l)?h-1:h}return{left:r,center:a,right:s}}function rv(){return 0}function sv(n){return n===null?NaN:+n}const av=wh(Fs),ov=av.right;wh(sv).center;const lv=cv(uv);function cv(n){return function(t,e,i=e){if(!((e=+e)>=0))throw new RangeError("invalid rx");if(!((i=+i)>=0))throw new RangeError("invalid ry");let{data:r,width:s,height:a}=t;if(!((s=Math.floor(s))>=0))throw new RangeError("invalid width");if(!((a=Math.floor(a!==void 0?a:r.length/s))>=0))throw new RangeError("invalid height");if(!s||!a||!e&&!i)return t;const o=e&&n(e),l=i&&n(i),c=r.slice();return o&&l?(Oi(o,c,r,s,a),Oi(o,r,c,s,a),Oi(o,c,r,s,a),Bi(l,r,c,s,a),Bi(l,c,r,s,a),Bi(l,r,c,s,a)):o?(Oi(o,r,c,s,a),Oi(o,c,r,s,a),Oi(o,r,c,s,a)):l&&(Bi(l,r,c,s,a),Bi(l,c,r,s,a),Bi(l,r,c,s,a)),t}}function Oi(n,t,e,i,r){for(let s=0,a=i*r;s<a;)n(t,e,s,s+=i,1)}function Bi(n,t,e,i,r){for(let s=0,a=i*r;s<i;++s)n(t,e,s,s+a,i)}function uv(n){const t=Math.floor(n);if(t===n)return hv(n);const e=n-t,i=2*n+1;return(r,s,a,o,l)=>{if(!((o-=l)>=a))return;let c=t*s[a];const u=l*t,h=u+l;for(let f=a,d=a+u;f<d;f+=l)c+=s[Math.min(o,f)];for(let f=a,d=o;f<=d;f+=l)c+=s[Math.min(o,f+u)],r[f]=(c+e*(s[Math.max(a,f-h)]+s[Math.min(o,f+h)]))/i,c-=s[Math.max(a,f-u)]}}function hv(n){const t=2*n+1;return(e,i,r,s,a)=>{if(!((s-=a)>=r))return;let o=n*i[r];const l=a*n;for(let c=r,u=r+l;c<u;c+=a)o+=i[Math.min(s,c)];for(let c=r,u=s;c<=u;c+=a)o+=i[Math.min(s,c+l)],e[c]=o/t,o-=i[Math.max(r,c-l)]}}function fv(n,t){let e=0;for(let i of n)i!=null&&(i=+i)>=i&&++e;return e}function il(n,t){let e,i;if(t===void 0)for(const r of n)r!=null&&(e===void 0?r>=r&&(e=i=r):(e>r&&(e=r),i<r&&(i=r)));else{let r=-1;for(let s of n)(s=t(s,++r,n))!=null&&(e===void 0?s>=s&&(e=i=s):(e>s&&(e=s),i<s&&(i=s)))}return[e,i]}class rr{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){const e=this._partials;let i=0;for(let r=0;r<this._n&&r<32;r++){const s=e[r],a=t+s,o=Math.abs(t)<Math.abs(s)?t-(a-s):s-(a-t);o&&(e[i++]=o),t=a}return e[i]=t,this._n=i+1,this}valueOf(){const t=this._partials;let e=this._n,i,r,s,a=0;if(e>0){for(a=t[--e];e>0&&(i=a,r=t[--e],a=i+r,s=r-(a-i),!s););e>0&&(s<0&&t[e-1]<0||s>0&&t[e-1]>0)&&(r=s*2,i=a+r,r==i-a&&(a=i))}return a}}class dv extends Map{constructor(t,e=_v){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:e}}),t!=null)for(const[i,r]of t)this.set(i,r)}get(t){return super.get(nu(this,t))}has(t){return super.has(nu(this,t))}set(t,e){return super.set(pv(this,t),e)}delete(t){return super.delete(mv(this,t))}}function nu({_intern:n,_key:t},e){const i=t(e);return n.has(i)?n.get(i):e}function pv({_intern:n,_key:t},e){const i=t(e);return n.has(i)?n.get(i):(n.set(i,e),e)}function mv({_intern:n,_key:t},e){const i=t(e);return n.has(i)&&(e=n.get(i),n.delete(i)),e}function _v(n){return n!==null&&typeof n=="object"?n.valueOf():n}function iu(n){return n}function ru(n,...t){return gv(n,iu,iu,t)}function gv(n,t,e,i){return function r(s,a){if(a>=i.length)return e(s);const o=new dv,l=i[a++];let c=-1;for(const u of s){const h=l(u,++c,s),f=o.get(h);f?f.push(u):o.set(h,[u])}for(const[u,h]of o)o.set(u,r(h,a));return t(o)}(n,0)}const vv=Math.sqrt(50),xv=Math.sqrt(10),Mv=Math.sqrt(2);function qs(n,t,e){const i=(t-n)/Math.max(0,e),r=Math.floor(Math.log10(i)),s=i/Math.pow(10,r),a=s>=vv?10:s>=xv?5:s>=Mv?2:1;let o,l,c;return r<0?(c=Math.pow(10,-r)/a,o=Math.round(n*c),l=Math.round(t*c),o/c<n&&++o,l/c>t&&--l,c=-c):(c=Math.pow(10,r)*a,o=Math.round(n/c),l=Math.round(t/c),o*c<n&&++o,l*c>t&&--l),l<o&&.5<=e&&e<2?qs(n,t,e*2):[o,l,c]}function zl(n,t,e){if(t=+t,n=+n,e=+e,!(e>0))return[];if(n===t)return[n];const i=t<n,[r,s,a]=i?qs(t,n,e):qs(n,t,e);if(!(s>=r))return[];const o=s-r+1,l=new Array(o);if(i)if(a<0)for(let c=0;c<o;++c)l[c]=(s-c)/-a;else for(let c=0;c<o;++c)l[c]=(s-c)*a;else if(a<0)for(let c=0;c<o;++c)l[c]=(r+c)/-a;else for(let c=0;c<o;++c)l[c]=(r+c)*a;return l}function Zs(n,t,e){return t=+t,n=+n,e=+e,qs(n,t,e)[2]}function yv(n,t,e){t=+t,n=+n,e=+e;const i=t<n,r=i?Zs(t,n,e):Zs(n,t,e);return(i?-1:1)*(r<0?1/-r:r)}function Sv(n,t,e){let i;for(;;){const r=Zs(n,t,e);if(r===i||r===0||!isFinite(r))return[n,t];r>0?(n=Math.floor(n/r)*r,t=Math.ceil(t/r)*r):r<0&&(n=Math.ceil(n*r)/r,t=Math.floor(t*r)/r),i=r}}function Ev(n){return Math.max(1,Math.ceil(Math.log(fv(n))/Math.LN2)+1)}function dn(n,t){let e;if(t===void 0)for(const i of n)i!=null&&(e<i||e===void 0&&i>=i)&&(e=i);else{let i=-1;for(let r of n)(r=t(r,++i,n))!=null&&(e<r||e===void 0&&r>=r)&&(e=r)}return e}function rl(n,t){let e;if(t===void 0)for(const i of n)i!=null&&(e>i||e===void 0&&i>=i)&&(e=i);else{let i=-1;for(let r of n)(r=t(r,++i,n))!=null&&(e>r||e===void 0&&r>=r)&&(e=r)}return e}function Ks(n,t){let e=0,i=0;if(t===void 0)for(let r of n)r!=null&&(r=+r)>=r&&(++e,i+=r);else{let r=-1;for(let s of n)(s=t(s,++r,n))!=null&&(s=+s)>=s&&(++e,i+=s)}if(e)return i/e}function wv(n){return n}var no=1,io=2,sl=3,Cr=4,su=1e-6;function Tv(n){return"translate("+n+",0)"}function bv(n){return"translate(0,"+n+")"}function Av(n){return t=>+n(t)}function Rv(n,t){return t=Math.max(0,n.bandwidth()-t*2)/2,n.round()&&(t=Math.round(t)),e=>+n(e)+t}function Cv(){return!this.__axis}function Th(n,t){var e=[],i=null,r=null,s=6,a=6,o=3,l=typeof window<"u"&&window.devicePixelRatio>1?0:.5,c=n===no||n===Cr?-1:1,u=n===Cr||n===io?"x":"y",h=n===no||n===sl?Tv:bv;function f(d){var _=i??(t.ticks?t.ticks.apply(t,e):t.domain()),v=r??(t.tickFormat?t.tickFormat.apply(t,e):wv),m=Math.max(s,0)+o,p=t.range(),E=+p[0]+l,T=+p[p.length-1]+l,y=(t.bandwidth?Rv:Av)(t.copy(),l),D=d.selection?d.selection():d,P=D.selectAll(".domain").data([null]),A=D.selectAll(".tick").data(_,t).order(),C=A.exit(),S=A.enter().append("g").attr("class","tick"),x=A.select("line"),b=A.select("text");P=P.merge(P.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),A=A.merge(S),x=x.merge(S.append("line").attr("stroke","currentColor").attr(u+"2",c*s)),b=b.merge(S.append("text").attr("fill","currentColor").attr(u,c*m).attr("dy",n===no?"0em":n===sl?"0.71em":"0.32em")),d!==D&&(P=P.transition(d),A=A.transition(d),x=x.transition(d),b=b.transition(d),C=C.transition(d).attr("opacity",su).attr("transform",function(z){return isFinite(z=y(z))?h(z+l):this.getAttribute("transform")}),S.attr("opacity",su).attr("transform",function(z){var O=this.parentNode.__axis;return h((O&&isFinite(O=O(z))?O:y(z))+l)})),C.remove(),P.attr("d",n===Cr||n===io?a?"M"+c*a+","+E+"H"+l+"V"+T+"H"+c*a:"M"+l+","+E+"V"+T:a?"M"+E+","+c*a+"V"+l+"H"+T+"V"+c*a:"M"+E+","+l+"H"+T),A.attr("opacity",1).attr("transform",function(z){return h(y(z)+l)}),x.attr(u+"2",c*s),b.attr(u,c*m).text(v),D.filter(Cv).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",n===io?"start":n===Cr?"end":"middle"),D.each(function(){this.__axis=y})}return f.scale=function(d){return arguments.length?(t=d,f):t},f.ticks=function(){return e=Array.from(arguments),f},f.tickArguments=function(d){return arguments.length?(e=d==null?[]:Array.from(d),f):e.slice()},f.tickValues=function(d){return arguments.length?(i=d==null?null:Array.from(d),f):i&&i.slice()},f.tickFormat=function(d){return arguments.length?(r=d,f):r},f.tickSize=function(d){return arguments.length?(s=a=+d,f):s},f.tickSizeInner=function(d){return arguments.length?(s=+d,f):s},f.tickSizeOuter=function(d){return arguments.length?(a=+d,f):a},f.tickPadding=function(d){return arguments.length?(o=+d,f):o},f.offset=function(d){return arguments.length?(l=+d,f):l},f}function Pv(n){return Th(sl,n)}function Dv(n){return Th(Cr,n)}var Lv={value:()=>{}};function bh(){for(var n=0,t=arguments.length,e={},i;n<t;++n){if(!(i=arguments[n]+"")||i in e||/[\s.]/.test(i))throw new Error("illegal type: "+i);e[i]=[]}return new Os(e)}function Os(n){this._=n}function Iv(n,t){return n.trim().split(/^|\s+/).map(function(e){var i="",r=e.indexOf(".");if(r>=0&&(i=e.slice(r+1),e=e.slice(0,r)),e&&!t.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:i}})}Os.prototype=bh.prototype={constructor:Os,on:function(n,t){var e=this._,i=Iv(n+"",e),r,s=-1,a=i.length;if(arguments.length<2){for(;++s<a;)if((r=(n=i[s]).type)&&(r=Uv(e[r],n.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++s<a;)if(r=(n=i[s]).type)e[r]=au(e[r],n.name,t);else if(t==null)for(r in e)e[r]=au(e[r],n.name,null);return this},copy:function(){var n={},t=this._;for(var e in t)n[e]=t[e].slice();return new Os(n)},call:function(n,t){if((r=arguments.length-2)>0)for(var e=new Array(r),i=0,r,s;i<r;++i)e[i]=arguments[i+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(s=this._[n],i=0,r=s.length;i<r;++i)s[i].value.apply(t,e)},apply:function(n,t,e){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var i=this._[n],r=0,s=i.length;r<s;++r)i[r].value.apply(t,e)}};function Uv(n,t){for(var e=0,i=n.length,r;e<i;++e)if((r=n[e]).name===t)return r.value}function au(n,t,e){for(var i=0,r=n.length;i<r;++i)if(n[i].name===t){n[i]=Lv,n=n.slice(0,i).concat(n.slice(i+1));break}return e!=null&&n.push({name:t,value:e}),n}var al="http://www.w3.org/1999/xhtml";const ou={svg:"http://www.w3.org/2000/svg",xhtml:al,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function va(n){var t=n+="",e=t.indexOf(":");return e>=0&&(t=n.slice(0,e))!=="xmlns"&&(n=n.slice(e+1)),ou.hasOwnProperty(t)?{space:ou[t],local:n}:n}function Nv(n){return function(){var t=this.ownerDocument,e=this.namespaceURI;return e===al&&t.documentElement.namespaceURI===al?t.createElement(n):t.createElementNS(e,n)}}function Fv(n){return function(){return this.ownerDocument.createElementNS(n.space,n.local)}}function Ah(n){var t=va(n);return(t.local?Fv:Nv)(t)}function Ov(){}function kl(n){return n==null?Ov:function(){return this.querySelector(n)}}function Bv(n){typeof n!="function"&&(n=kl(n));for(var t=this._groups,e=t.length,i=new Array(e),r=0;r<e;++r)for(var s=t[r],a=s.length,o=i[r]=new Array(a),l,c,u=0;u<a;++u)(l=s[u])&&(c=n.call(l,l.__data__,u,s))&&("__data__"in l&&(c.__data__=l.__data__),o[u]=c);return new ze(i,this._parents)}function zv(n){return n==null?[]:Array.isArray(n)?n:Array.from(n)}function kv(){return[]}function Rh(n){return n==null?kv:function(){return this.querySelectorAll(n)}}function Hv(n){return function(){return zv(n.apply(this,arguments))}}function Vv(n){typeof n=="function"?n=Hv(n):n=Rh(n);for(var t=this._groups,e=t.length,i=[],r=[],s=0;s<e;++s)for(var a=t[s],o=a.length,l,c=0;c<o;++c)(l=a[c])&&(i.push(n.call(l,l.__data__,c,a)),r.push(l));return new ze(i,r)}function Ch(n){return function(){return this.matches(n)}}function Ph(n){return function(t){return t.matches(n)}}var Gv=Array.prototype.find;function Wv(n){return function(){return Gv.call(this.children,n)}}function Xv(){return this.firstElementChild}function $v(n){return this.select(n==null?Xv:Wv(typeof n=="function"?n:Ph(n)))}var Yv=Array.prototype.filter;function qv(){return Array.from(this.children)}function Zv(n){return function(){return Yv.call(this.children,n)}}function Kv(n){return this.selectAll(n==null?qv:Zv(typeof n=="function"?n:Ph(n)))}function jv(n){typeof n!="function"&&(n=Ch(n));for(var t=this._groups,e=t.length,i=new Array(e),r=0;r<e;++r)for(var s=t[r],a=s.length,o=i[r]=[],l,c=0;c<a;++c)(l=s[c])&&n.call(l,l.__data__,c,s)&&o.push(l);return new ze(i,this._parents)}function Dh(n){return new Array(n.length)}function Jv(){return new ze(this._enter||this._groups.map(Dh),this._parents)}function js(n,t){this.ownerDocument=n.ownerDocument,this.namespaceURI=n.namespaceURI,this._next=null,this._parent=n,this.__data__=t}js.prototype={constructor:js,appendChild:function(n){return this._parent.insertBefore(n,this._next)},insertBefore:function(n,t){return this._parent.insertBefore(n,t)},querySelector:function(n){return this._parent.querySelector(n)},querySelectorAll:function(n){return this._parent.querySelectorAll(n)}};function Qv(n){return function(){return n}}function tx(n,t,e,i,r,s){for(var a=0,o,l=t.length,c=s.length;a<c;++a)(o=t[a])?(o.__data__=s[a],i[a]=o):e[a]=new js(n,s[a]);for(;a<l;++a)(o=t[a])&&(r[a]=o)}function ex(n,t,e,i,r,s,a){var o,l,c=new Map,u=t.length,h=s.length,f=new Array(u),d;for(o=0;o<u;++o)(l=t[o])&&(f[o]=d=a.call(l,l.__data__,o,t)+"",c.has(d)?r[o]=l:c.set(d,l));for(o=0;o<h;++o)d=a.call(n,s[o],o,s)+"",(l=c.get(d))?(i[o]=l,l.__data__=s[o],c.delete(d)):e[o]=new js(n,s[o]);for(o=0;o<u;++o)(l=t[o])&&c.get(f[o])===l&&(r[o]=l)}function nx(n){return n.__data__}function ix(n,t){if(!arguments.length)return Array.from(this,nx);var e=t?ex:tx,i=this._parents,r=this._groups;typeof n!="function"&&(n=Qv(n));for(var s=r.length,a=new Array(s),o=new Array(s),l=new Array(s),c=0;c<s;++c){var u=i[c],h=r[c],f=h.length,d=rx(n.call(u,u&&u.__data__,c,i)),_=d.length,v=o[c]=new Array(_),m=a[c]=new Array(_),p=l[c]=new Array(f);e(u,h,v,m,p,d,t);for(var E=0,T=0,y,D;E<_;++E)if(y=v[E]){for(E>=T&&(T=E+1);!(D=m[T])&&++T<_;);y._next=D||null}}return a=new ze(a,i),a._enter=o,a._exit=l,a}function rx(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function sx(){return new ze(this._exit||this._groups.map(Dh),this._parents)}function ax(n,t,e){var i=this.enter(),r=this,s=this.exit();return typeof n=="function"?(i=n(i),i&&(i=i.selection())):i=i.append(n+""),t!=null&&(r=t(r),r&&(r=r.selection())),e==null?s.remove():e(s),i&&r?i.merge(r).order():r}function ox(n){for(var t=n.selection?n.selection():n,e=this._groups,i=t._groups,r=e.length,s=i.length,a=Math.min(r,s),o=new Array(r),l=0;l<a;++l)for(var c=e[l],u=i[l],h=c.length,f=o[l]=new Array(h),d,_=0;_<h;++_)(d=c[_]||u[_])&&(f[_]=d);for(;l<r;++l)o[l]=e[l];return new ze(o,this._parents)}function lx(){for(var n=this._groups,t=-1,e=n.length;++t<e;)for(var i=n[t],r=i.length-1,s=i[r],a;--r>=0;)(a=i[r])&&(s&&a.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(a,s),s=a);return this}function cx(n){n||(n=ux);function t(h,f){return h&&f?n(h.__data__,f.__data__):!h-!f}for(var e=this._groups,i=e.length,r=new Array(i),s=0;s<i;++s){for(var a=e[s],o=a.length,l=r[s]=new Array(o),c,u=0;u<o;++u)(c=a[u])&&(l[u]=c);l.sort(t)}return new ze(r,this._parents).order()}function ux(n,t){return n<t?-1:n>t?1:n>=t?0:NaN}function hx(){var n=arguments[0];return arguments[0]=this,n.apply(null,arguments),this}function fx(){return Array.from(this)}function dx(){for(var n=this._groups,t=0,e=n.length;t<e;++t)for(var i=n[t],r=0,s=i.length;r<s;++r){var a=i[r];if(a)return a}return null}function px(){let n=0;for(const t of this)++n;return n}function mx(){return!this.node()}function _x(n){for(var t=this._groups,e=0,i=t.length;e<i;++e)for(var r=t[e],s=0,a=r.length,o;s<a;++s)(o=r[s])&&n.call(o,o.__data__,s,r);return this}function gx(n){return function(){this.removeAttribute(n)}}function vx(n){return function(){this.removeAttributeNS(n.space,n.local)}}function xx(n,t){return function(){this.setAttribute(n,t)}}function Mx(n,t){return function(){this.setAttributeNS(n.space,n.local,t)}}function yx(n,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttribute(n):this.setAttribute(n,e)}}function Sx(n,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}}function Ex(n,t){var e=va(n);if(arguments.length<2){var i=this.node();return e.local?i.getAttributeNS(e.space,e.local):i.getAttribute(e)}return this.each((t==null?e.local?vx:gx:typeof t=="function"?e.local?Sx:yx:e.local?Mx:xx)(e,t))}function Lh(n){return n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView}function wx(n){return function(){this.style.removeProperty(n)}}function Tx(n,t,e){return function(){this.style.setProperty(n,t,e)}}function bx(n,t,e){return function(){var i=t.apply(this,arguments);i==null?this.style.removeProperty(n):this.style.setProperty(n,i,e)}}function Ax(n,t,e){return arguments.length>1?this.each((t==null?wx:typeof t=="function"?bx:Tx)(n,t,e??"")):sr(this.node(),n)}function sr(n,t){return n.style.getPropertyValue(t)||Lh(n).getComputedStyle(n,null).getPropertyValue(t)}function Rx(n){return function(){delete this[n]}}function Cx(n,t){return function(){this[n]=t}}function Px(n,t){return function(){var e=t.apply(this,arguments);e==null?delete this[n]:this[n]=e}}function Dx(n,t){return arguments.length>1?this.each((t==null?Rx:typeof t=="function"?Px:Cx)(n,t)):this.node()[n]}function Ih(n){return n.trim().split(/^|\s+/)}function Hl(n){return n.classList||new Uh(n)}function Uh(n){this._node=n,this._names=Ih(n.getAttribute("class")||"")}Uh.prototype={add:function(n){var t=this._names.indexOf(n);t<0&&(this._names.push(n),this._node.setAttribute("class",this._names.join(" ")))},remove:function(n){var t=this._names.indexOf(n);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(n){return this._names.indexOf(n)>=0}};function Nh(n,t){for(var e=Hl(n),i=-1,r=t.length;++i<r;)e.add(t[i])}function Fh(n,t){for(var e=Hl(n),i=-1,r=t.length;++i<r;)e.remove(t[i])}function Lx(n){return function(){Nh(this,n)}}function Ix(n){return function(){Fh(this,n)}}function Ux(n,t){return function(){(t.apply(this,arguments)?Nh:Fh)(this,n)}}function Nx(n,t){var e=Ih(n+"");if(arguments.length<2){for(var i=Hl(this.node()),r=-1,s=e.length;++r<s;)if(!i.contains(e[r]))return!1;return!0}return this.each((typeof t=="function"?Ux:t?Lx:Ix)(e,t))}function Fx(){this.textContent=""}function Ox(n){return function(){this.textContent=n}}function Bx(n){return function(){var t=n.apply(this,arguments);this.textContent=t??""}}function zx(n){return arguments.length?this.each(n==null?Fx:(typeof n=="function"?Bx:Ox)(n)):this.node().textContent}function kx(){this.innerHTML=""}function Hx(n){return function(){this.innerHTML=n}}function Vx(n){return function(){var t=n.apply(this,arguments);this.innerHTML=t??""}}function Gx(n){return arguments.length?this.each(n==null?kx:(typeof n=="function"?Vx:Hx)(n)):this.node().innerHTML}function Wx(){this.nextSibling&&this.parentNode.appendChild(this)}function Xx(){return this.each(Wx)}function $x(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Yx(){return this.each($x)}function qx(n){var t=typeof n=="function"?n:Ah(n);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function Zx(){return null}function Kx(n,t){var e=typeof n=="function"?n:Ah(n),i=t==null?Zx:typeof t=="function"?t:kl(t);return this.select(function(){return this.insertBefore(e.apply(this,arguments),i.apply(this,arguments)||null)})}function jx(){var n=this.parentNode;n&&n.removeChild(this)}function Jx(){return this.each(jx)}function Qx(){var n=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(n,this.nextSibling):n}function tM(){var n=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(n,this.nextSibling):n}function eM(n){return this.select(n?tM:Qx)}function nM(n){return arguments.length?this.property("__data__",n):this.node().__data__}function iM(n){return function(t){n.call(this,t,this.__data__)}}function rM(n){return n.trim().split(/^|\s+/).map(function(t){var e="",i=t.indexOf(".");return i>=0&&(e=t.slice(i+1),t=t.slice(0,i)),{type:t,name:e}})}function sM(n){return function(){var t=this.__on;if(t){for(var e=0,i=-1,r=t.length,s;e<r;++e)s=t[e],(!n.type||s.type===n.type)&&s.name===n.name?this.removeEventListener(s.type,s.listener,s.options):t[++i]=s;++i?t.length=i:delete this.__on}}}function aM(n,t,e){return function(){var i=this.__on,r,s=iM(t);if(i){for(var a=0,o=i.length;a<o;++a)if((r=i[a]).type===n.type&&r.name===n.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=s,r.options=e),r.value=t;return}}this.addEventListener(n.type,s,e),r={type:n.type,name:n.name,value:t,listener:s,options:e},i?i.push(r):this.__on=[r]}}function oM(n,t,e){var i=rM(n+""),r,s=i.length,a;if(arguments.length<2){var o=this.node().__on;if(o){for(var l=0,c=o.length,u;l<c;++l)for(r=0,u=o[l];r<s;++r)if((a=i[r]).type===u.type&&a.name===u.name)return u.value}return}for(o=t?aM:sM,r=0;r<s;++r)this.each(o(i[r],t,e));return this}function Oh(n,t,e){var i=Lh(n),r=i.CustomEvent;typeof r=="function"?r=new r(t,e):(r=i.document.createEvent("Event"),e?(r.initEvent(t,e.bubbles,e.cancelable),r.detail=e.detail):r.initEvent(t,!1,!1)),n.dispatchEvent(r)}function lM(n,t){return function(){return Oh(this,n,t)}}function cM(n,t){return function(){return Oh(this,n,t.apply(this,arguments))}}function uM(n,t){return this.each((typeof t=="function"?cM:lM)(n,t))}function*hM(){for(var n=this._groups,t=0,e=n.length;t<e;++t)for(var i=n[t],r=0,s=i.length,a;r<s;++r)(a=i[r])&&(yield a)}var Bh=[null];function ze(n,t){this._groups=n,this._parents=t}function Yr(){return new ze([[document.documentElement]],Bh)}function fM(){return this}ze.prototype=Yr.prototype={constructor:ze,select:Bv,selectAll:Vv,selectChild:$v,selectChildren:Kv,filter:jv,data:ix,enter:Jv,exit:sx,join:ax,merge:ox,selection:fM,order:lx,sort:cx,call:hx,nodes:fx,node:dx,size:px,empty:mx,each:_x,attr:Ex,style:Ax,property:Dx,classed:Nx,text:zx,html:Gx,raise:Xx,lower:Yx,append:qx,insert:Kx,remove:Jx,clone:eM,datum:nM,on:oM,dispatch:uM,[Symbol.iterator]:hM};function Vn(n){return typeof n=="string"?new ze([[document.querySelector(n)]],[document.documentElement]):new ze([[n]],Bh)}function Vl(n,t,e){n.prototype=t.prototype=e,e.constructor=n}function zh(n,t){var e=Object.create(n.prototype);for(var i in t)e[i]=t[i];return e}function qr(){}var Hr=.7,Js=1/Hr,Zi="\\s*([+-]?\\d+)\\s*",Vr="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",pn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",dM=/^#([0-9a-f]{3,8})$/,pM=new RegExp(`^rgb\\(${Zi},${Zi},${Zi}\\)$`),mM=new RegExp(`^rgb\\(${pn},${pn},${pn}\\)$`),_M=new RegExp(`^rgba\\(${Zi},${Zi},${Zi},${Vr}\\)$`),gM=new RegExp(`^rgba\\(${pn},${pn},${pn},${Vr}\\)$`),vM=new RegExp(`^hsl\\(${Vr},${pn},${pn}\\)$`),xM=new RegExp(`^hsla\\(${Vr},${pn},${pn},${Vr}\\)$`),lu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Vl(qr,di,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:cu,formatHex:cu,formatHex8:MM,formatHsl:yM,formatRgb:uu,toString:uu});function cu(){return this.rgb().formatHex()}function MM(){return this.rgb().formatHex8()}function yM(){return kh(this).formatHsl()}function uu(){return this.rgb().formatRgb()}function di(n){var t,e;return n=(n+"").trim().toLowerCase(),(t=dM.exec(n))?(e=t[1].length,t=parseInt(t[1],16),e===6?hu(t):e===3?new Ce(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):e===8?ws(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):e===4?ws(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=pM.exec(n))?new Ce(t[1],t[2],t[3],1):(t=mM.exec(n))?new Ce(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=_M.exec(n))?ws(t[1],t[2],t[3],t[4]):(t=gM.exec(n))?ws(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=vM.exec(n))?pu(t[1],t[2]/100,t[3]/100,1):(t=xM.exec(n))?pu(t[1],t[2]/100,t[3]/100,t[4]):lu.hasOwnProperty(n)?hu(lu[n]):n==="transparent"?new Ce(NaN,NaN,NaN,0):null}function hu(n){return new Ce(n>>16&255,n>>8&255,n&255,1)}function ws(n,t,e,i){return i<=0&&(n=t=e=NaN),new Ce(n,t,e,i)}function SM(n){return n instanceof qr||(n=di(n)),n?(n=n.rgb(),new Ce(n.r,n.g,n.b,n.opacity)):new Ce}function ol(n,t,e,i){return arguments.length===1?SM(n):new Ce(n,t,e,i??1)}function Ce(n,t,e,i){this.r=+n,this.g=+t,this.b=+e,this.opacity=+i}Vl(Ce,ol,zh(qr,{brighter(n){return n=n==null?Js:Math.pow(Js,n),new Ce(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?Hr:Math.pow(Hr,n),new Ce(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new Ce(ci(this.r),ci(this.g),ci(this.b),Qs(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:fu,formatHex:fu,formatHex8:EM,formatRgb:du,toString:du}));function fu(){return`#${li(this.r)}${li(this.g)}${li(this.b)}`}function EM(){return`#${li(this.r)}${li(this.g)}${li(this.b)}${li((isNaN(this.opacity)?1:this.opacity)*255)}`}function du(){const n=Qs(this.opacity);return`${n===1?"rgb(":"rgba("}${ci(this.r)}, ${ci(this.g)}, ${ci(this.b)}${n===1?")":`, ${n})`}`}function Qs(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function ci(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function li(n){return n=ci(n),(n<16?"0":"")+n.toString(16)}function pu(n,t,e,i){return i<=0?n=t=e=NaN:e<=0||e>=1?n=t=NaN:t<=0&&(n=NaN),new Qe(n,t,e,i)}function kh(n){if(n instanceof Qe)return new Qe(n.h,n.s,n.l,n.opacity);if(n instanceof qr||(n=di(n)),!n)return new Qe;if(n instanceof Qe)return n;n=n.rgb();var t=n.r/255,e=n.g/255,i=n.b/255,r=Math.min(t,e,i),s=Math.max(t,e,i),a=NaN,o=s-r,l=(s+r)/2;return o?(t===s?a=(e-i)/o+(e<i)*6:e===s?a=(i-t)/o+2:a=(t-e)/o+4,o/=l<.5?s+r:2-s-r,a*=60):o=l>0&&l<1?0:a,new Qe(a,o,l,n.opacity)}function wM(n,t,e,i){return arguments.length===1?kh(n):new Qe(n,t,e,i??1)}function Qe(n,t,e,i){this.h=+n,this.s=+t,this.l=+e,this.opacity=+i}Vl(Qe,wM,zh(qr,{brighter(n){return n=n==null?Js:Math.pow(Js,n),new Qe(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?Hr:Math.pow(Hr,n),new Qe(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,t=isNaN(n)||isNaN(this.s)?0:this.s,e=this.l,i=e+(e<.5?e:1-e)*t,r=2*e-i;return new Ce(ro(n>=240?n-240:n+120,r,i),ro(n,r,i),ro(n<120?n+240:n-120,r,i),this.opacity)},clamp(){return new Qe(mu(this.h),Ts(this.s),Ts(this.l),Qs(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const n=Qs(this.opacity);return`${n===1?"hsl(":"hsla("}${mu(this.h)}, ${Ts(this.s)*100}%, ${Ts(this.l)*100}%${n===1?")":`, ${n})`}`}}));function mu(n){return n=(n||0)%360,n<0?n+360:n}function Ts(n){return Math.max(0,Math.min(1,n||0))}function ro(n,t,e){return(n<60?t+(e-t)*n/60:n<180?e:n<240?t+(e-t)*(240-n)/60:t)*255}const Gl=n=>()=>n;function TM(n,t){return function(e){return n+e*t}}function bM(n,t,e){return n=Math.pow(n,e),t=Math.pow(t,e)-n,e=1/e,function(i){return Math.pow(n+i*t,e)}}function AM(n){return(n=+n)==1?Hh:function(t,e){return e-t?bM(t,e,n):Gl(isNaN(t)?e:t)}}function Hh(n,t){var e=t-n;return e?TM(n,e):Gl(isNaN(n)?t:n)}const ta=function n(t){var e=AM(t);function i(r,s){var a=e((r=ol(r)).r,(s=ol(s)).r),o=e(r.g,s.g),l=e(r.b,s.b),c=Hh(r.opacity,s.opacity);return function(u){return r.r=a(u),r.g=o(u),r.b=l(u),r.opacity=c(u),r+""}}return i.gamma=n,i}(1);function RM(n,t){t||(t=[]);var e=n?Math.min(t.length,n.length):0,i=t.slice(),r;return function(s){for(r=0;r<e;++r)i[r]=n[r]*(1-s)+t[r]*s;return i}}function CM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function PM(n,t){var e=t?t.length:0,i=n?Math.min(e,n.length):0,r=new Array(i),s=new Array(e),a;for(a=0;a<i;++a)r[a]=Wl(n[a],t[a]);for(;a<e;++a)s[a]=t[a];return function(o){for(a=0;a<i;++a)s[a]=r[a](o);return s}}function DM(n,t){var e=new Date;return n=+n,t=+t,function(i){return e.setTime(n*(1-i)+t*i),e}}function Je(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}function LM(n,t){var e={},i={},r;(n===null||typeof n!="object")&&(n={}),(t===null||typeof t!="object")&&(t={});for(r in t)r in n?e[r]=Wl(n[r],t[r]):i[r]=t[r];return function(s){for(r in e)i[r]=e[r](s);return i}}var ll=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,so=new RegExp(ll.source,"g");function IM(n){return function(){return n}}function UM(n){return function(t){return n(t)+""}}function Vh(n,t){var e=ll.lastIndex=so.lastIndex=0,i,r,s,a=-1,o=[],l=[];for(n=n+"",t=t+"";(i=ll.exec(n))&&(r=so.exec(t));)(s=r.index)>e&&(s=t.slice(e,s),o[a]?o[a]+=s:o[++a]=s),(i=i[0])===(r=r[0])?o[a]?o[a]+=r:o[++a]=r:(o[++a]=null,l.push({i:a,x:Je(i,r)})),e=so.lastIndex;return e<t.length&&(s=t.slice(e),o[a]?o[a]+=s:o[++a]=s),o.length<2?l[0]?UM(l[0].x):IM(t):(t=l.length,function(c){for(var u=0,h;u<t;++u)o[(h=l[u]).i]=h.x(c);return o.join("")})}function Wl(n,t){var e=typeof t,i;return t==null||e==="boolean"?Gl(t):(e==="number"?Je:e==="string"?(i=di(t))?(t=i,ta):Vh:t instanceof di?ta:t instanceof Date?DM:CM(t)?RM:Array.isArray(t)?PM:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?LM:Je)(n,t)}function NM(n,t){return n=+n,t=+t,function(e){return Math.round(n*(1-e)+t*e)}}var _u=180/Math.PI,cl={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Gh(n,t,e,i,r,s){var a,o,l;return(a=Math.sqrt(n*n+t*t))&&(n/=a,t/=a),(l=n*e+t*i)&&(e-=n*l,i-=t*l),(o=Math.sqrt(e*e+i*i))&&(e/=o,i/=o,l/=o),n*i<t*e&&(n=-n,t=-t,l=-l,a=-a),{translateX:r,translateY:s,rotate:Math.atan2(t,n)*_u,skewX:Math.atan(l)*_u,scaleX:a,scaleY:o}}var bs;function FM(n){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(n+"");return t.isIdentity?cl:Gh(t.a,t.b,t.c,t.d,t.e,t.f)}function OM(n){return n==null||(bs||(bs=document.createElementNS("http://www.w3.org/2000/svg","g")),bs.setAttribute("transform",n),!(n=bs.transform.baseVal.consolidate()))?cl:(n=n.matrix,Gh(n.a,n.b,n.c,n.d,n.e,n.f))}function Wh(n,t,e,i){function r(c){return c.length?c.pop()+" ":""}function s(c,u,h,f,d,_){if(c!==h||u!==f){var v=d.push("translate(",null,t,null,e);_.push({i:v-4,x:Je(c,h)},{i:v-2,x:Je(u,f)})}else(h||f)&&d.push("translate("+h+t+f+e)}function a(c,u,h,f){c!==u?(c-u>180?u+=360:u-c>180&&(c+=360),f.push({i:h.push(r(h)+"rotate(",null,i)-2,x:Je(c,u)})):u&&h.push(r(h)+"rotate("+u+i)}function o(c,u,h,f){c!==u?f.push({i:h.push(r(h)+"skewX(",null,i)-2,x:Je(c,u)}):u&&h.push(r(h)+"skewX("+u+i)}function l(c,u,h,f,d,_){if(c!==h||u!==f){var v=d.push(r(d)+"scale(",null,",",null,")");_.push({i:v-4,x:Je(c,h)},{i:v-2,x:Je(u,f)})}else(h!==1||f!==1)&&d.push(r(d)+"scale("+h+","+f+")")}return function(c,u){var h=[],f=[];return c=n(c),u=n(u),s(c.translateX,c.translateY,u.translateX,u.translateY,h,f),a(c.rotate,u.rotate,h,f),o(c.skewX,u.skewX,h,f),l(c.scaleX,c.scaleY,u.scaleX,u.scaleY,h,f),c=u=null,function(d){for(var _=-1,v=f.length,m;++_<v;)h[(m=f[_]).i]=m.x(d);return h.join("")}}}var BM=Wh(FM,"px, ","px)","deg)"),zM=Wh(OM,", ",")",")"),ar=0,Pr=0,Er=0,Xh=1e3,ea,Dr,na=0,pi=0,xa=0,Gr=typeof performance=="object"&&performance.now?performance:Date,$h=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function Xl(){return pi||($h(kM),pi=Gr.now()+xa)}function kM(){pi=0}function ia(){this._call=this._time=this._next=null}ia.prototype=Yh.prototype={constructor:ia,restart:function(n,t,e){if(typeof n!="function")throw new TypeError("callback is not a function");e=(e==null?Xl():+e)+(t==null?0:+t),!this._next&&Dr!==this&&(Dr?Dr._next=this:ea=this,Dr=this),this._call=n,this._time=e,ul()},stop:function(){this._call&&(this._call=null,this._time=1/0,ul())}};function Yh(n,t,e){var i=new ia;return i.restart(n,t,e),i}function HM(){Xl(),++ar;for(var n=ea,t;n;)(t=pi-n._time)>=0&&n._call.call(void 0,t),n=n._next;--ar}function gu(){pi=(na=Gr.now())+xa,ar=Pr=0;try{HM()}finally{ar=0,GM(),pi=0}}function VM(){var n=Gr.now(),t=n-na;t>Xh&&(xa-=t,na=n)}function GM(){for(var n,t=ea,e,i=1/0;t;)t._call?(i>t._time&&(i=t._time),n=t,t=t._next):(e=t._next,t._next=null,t=n?n._next=e:ea=e);Dr=n,ul(i)}function ul(n){if(!ar){Pr&&(Pr=clearTimeout(Pr));var t=n-pi;t>24?(n<1/0&&(Pr=setTimeout(gu,n-Gr.now()-xa)),Er&&(Er=clearInterval(Er))):(Er||(na=Gr.now(),Er=setInterval(VM,Xh)),ar=1,$h(gu))}}function vu(n,t,e){var i=new ia;return t=t==null?0:+t,i.restart(r=>{i.stop(),n(r+t)},t,e),i}var WM=bh("start","end","cancel","interrupt"),XM=[],qh=0,xu=1,hl=2,Bs=3,Mu=4,fl=5,zs=6;function Ma(n,t,e,i,r,s){var a=n.__transition;if(!a)n.__transition={};else if(e in a)return;$M(n,e,{name:t,index:i,group:r,on:WM,tween:XM,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:qh})}function $l(n,t){var e=sn(n,t);if(e.state>qh)throw new Error("too late; already scheduled");return e}function mn(n,t){var e=sn(n,t);if(e.state>Bs)throw new Error("too late; already running");return e}function sn(n,t){var e=n.__transition;if(!e||!(e=e[t]))throw new Error("transition not found");return e}function $M(n,t,e){var i=n.__transition,r;i[t]=e,e.timer=Yh(s,0,e.time);function s(c){e.state=xu,e.timer.restart(a,e.delay,e.time),e.delay<=c&&a(c-e.delay)}function a(c){var u,h,f,d;if(e.state!==xu)return l();for(u in i)if(d=i[u],d.name===e.name){if(d.state===Bs)return vu(a);d.state===Mu?(d.state=zs,d.timer.stop(),d.on.call("interrupt",n,n.__data__,d.index,d.group),delete i[u]):+u<t&&(d.state=zs,d.timer.stop(),d.on.call("cancel",n,n.__data__,d.index,d.group),delete i[u])}if(vu(function(){e.state===Bs&&(e.state=Mu,e.timer.restart(o,e.delay,e.time),o(c))}),e.state=hl,e.on.call("start",n,n.__data__,e.index,e.group),e.state===hl){for(e.state=Bs,r=new Array(f=e.tween.length),u=0,h=-1;u<f;++u)(d=e.tween[u].value.call(n,n.__data__,e.index,e.group))&&(r[++h]=d);r.length=h+1}}function o(c){for(var u=c<e.duration?e.ease.call(null,c/e.duration):(e.timer.restart(l),e.state=fl,1),h=-1,f=r.length;++h<f;)r[h].call(n,u);e.state===fl&&(e.on.call("end",n,n.__data__,e.index,e.group),l())}function l(){e.state=zs,e.timer.stop(),delete i[t];for(var c in i)return;delete n.__transition}}function YM(n,t){var e=n.__transition,i,r,s=!0,a;if(e){t=t==null?null:t+"";for(a in e){if((i=e[a]).name!==t){s=!1;continue}r=i.state>hl&&i.state<fl,i.state=zs,i.timer.stop(),i.on.call(r?"interrupt":"cancel",n,n.__data__,i.index,i.group),delete e[a]}s&&delete n.__transition}}function qM(n){return this.each(function(){YM(this,n)})}function ZM(n,t){var e,i;return function(){var r=mn(this,n),s=r.tween;if(s!==e){i=e=s;for(var a=0,o=i.length;a<o;++a)if(i[a].name===t){i=i.slice(),i.splice(a,1);break}}r.tween=i}}function KM(n,t,e){var i,r;if(typeof e!="function")throw new Error;return function(){var s=mn(this,n),a=s.tween;if(a!==i){r=(i=a).slice();for(var o={name:t,value:e},l=0,c=r.length;l<c;++l)if(r[l].name===t){r[l]=o;break}l===c&&r.push(o)}s.tween=r}}function jM(n,t){var e=this._id;if(n+="",arguments.length<2){for(var i=sn(this.node(),e).tween,r=0,s=i.length,a;r<s;++r)if((a=i[r]).name===n)return a.value;return null}return this.each((t==null?ZM:KM)(e,n,t))}function Yl(n,t,e){var i=n._id;return n.each(function(){var r=mn(this,i);(r.value||(r.value={}))[t]=e.apply(this,arguments)}),function(r){return sn(r,i).value[t]}}function Zh(n,t){var e;return(typeof t=="number"?Je:t instanceof di?ta:(e=di(t))?(t=e,ta):Vh)(n,t)}function JM(n){return function(){this.removeAttribute(n)}}function QM(n){return function(){this.removeAttributeNS(n.space,n.local)}}function ty(n,t,e){var i,r=e+"",s;return function(){var a=this.getAttribute(n);return a===r?null:a===i?s:s=t(i=a,e)}}function ey(n,t,e){var i,r=e+"",s;return function(){var a=this.getAttributeNS(n.space,n.local);return a===r?null:a===i?s:s=t(i=a,e)}}function ny(n,t,e){var i,r,s;return function(){var a,o=e(this),l;return o==null?void this.removeAttribute(n):(a=this.getAttribute(n),l=o+"",a===l?null:a===i&&l===r?s:(r=l,s=t(i=a,o)))}}function iy(n,t,e){var i,r,s;return function(){var a,o=e(this),l;return o==null?void this.removeAttributeNS(n.space,n.local):(a=this.getAttributeNS(n.space,n.local),l=o+"",a===l?null:a===i&&l===r?s:(r=l,s=t(i=a,o)))}}function ry(n,t){var e=va(n),i=e==="transform"?zM:Zh;return this.attrTween(n,typeof t=="function"?(e.local?iy:ny)(e,i,Yl(this,"attr."+n,t)):t==null?(e.local?QM:JM)(e):(e.local?ey:ty)(e,i,t))}function sy(n,t){return function(e){this.setAttribute(n,t.call(this,e))}}function ay(n,t){return function(e){this.setAttributeNS(n.space,n.local,t.call(this,e))}}function oy(n,t){var e,i;function r(){var s=t.apply(this,arguments);return s!==i&&(e=(i=s)&&ay(n,s)),e}return r._value=t,r}function ly(n,t){var e,i;function r(){var s=t.apply(this,arguments);return s!==i&&(e=(i=s)&&sy(n,s)),e}return r._value=t,r}function cy(n,t){var e="attr."+n;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;var i=va(n);return this.tween(e,(i.local?oy:ly)(i,t))}function uy(n,t){return function(){$l(this,n).delay=+t.apply(this,arguments)}}function hy(n,t){return t=+t,function(){$l(this,n).delay=t}}function fy(n){var t=this._id;return arguments.length?this.each((typeof n=="function"?uy:hy)(t,n)):sn(this.node(),t).delay}function dy(n,t){return function(){mn(this,n).duration=+t.apply(this,arguments)}}function py(n,t){return t=+t,function(){mn(this,n).duration=t}}function my(n){var t=this._id;return arguments.length?this.each((typeof n=="function"?dy:py)(t,n)):sn(this.node(),t).duration}function _y(n,t){if(typeof t!="function")throw new Error;return function(){mn(this,n).ease=t}}function gy(n){var t=this._id;return arguments.length?this.each(_y(t,n)):sn(this.node(),t).ease}function vy(n,t){return function(){var e=t.apply(this,arguments);if(typeof e!="function")throw new Error;mn(this,n).ease=e}}function xy(n){if(typeof n!="function")throw new Error;return this.each(vy(this._id,n))}function My(n){typeof n!="function"&&(n=Ch(n));for(var t=this._groups,e=t.length,i=new Array(e),r=0;r<e;++r)for(var s=t[r],a=s.length,o=i[r]=[],l,c=0;c<a;++c)(l=s[c])&&n.call(l,l.__data__,c,s)&&o.push(l);return new Cn(i,this._parents,this._name,this._id)}function yy(n){if(n._id!==this._id)throw new Error;for(var t=this._groups,e=n._groups,i=t.length,r=e.length,s=Math.min(i,r),a=new Array(i),o=0;o<s;++o)for(var l=t[o],c=e[o],u=l.length,h=a[o]=new Array(u),f,d=0;d<u;++d)(f=l[d]||c[d])&&(h[d]=f);for(;o<i;++o)a[o]=t[o];return new Cn(a,this._parents,this._name,this._id)}function Sy(n){return(n+"").trim().split(/^|\s+/).every(function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||t==="start"})}function Ey(n,t,e){var i,r,s=Sy(t)?$l:mn;return function(){var a=s(this,n),o=a.on;o!==i&&(r=(i=o).copy()).on(t,e),a.on=r}}function wy(n,t){var e=this._id;return arguments.length<2?sn(this.node(),e).on.on(n):this.each(Ey(e,n,t))}function Ty(n){return function(){var t=this.parentNode;for(var e in this.__transition)if(+e!==n)return;t&&t.removeChild(this)}}function by(){return this.on("end.remove",Ty(this._id))}function Ay(n){var t=this._name,e=this._id;typeof n!="function"&&(n=kl(n));for(var i=this._groups,r=i.length,s=new Array(r),a=0;a<r;++a)for(var o=i[a],l=o.length,c=s[a]=new Array(l),u,h,f=0;f<l;++f)(u=o[f])&&(h=n.call(u,u.__data__,f,o))&&("__data__"in u&&(h.__data__=u.__data__),c[f]=h,Ma(c[f],t,e,f,c,sn(u,e)));return new Cn(s,this._parents,t,e)}function Ry(n){var t=this._name,e=this._id;typeof n!="function"&&(n=Rh(n));for(var i=this._groups,r=i.length,s=[],a=[],o=0;o<r;++o)for(var l=i[o],c=l.length,u,h=0;h<c;++h)if(u=l[h]){for(var f=n.call(u,u.__data__,h,l),d,_=sn(u,e),v=0,m=f.length;v<m;++v)(d=f[v])&&Ma(d,t,e,v,f,_);s.push(f),a.push(u)}return new Cn(s,a,t,e)}var Cy=Yr.prototype.constructor;function Py(){return new Cy(this._groups,this._parents)}function Dy(n,t){var e,i,r;return function(){var s=sr(this,n),a=(this.style.removeProperty(n),sr(this,n));return s===a?null:s===e&&a===i?r:r=t(e=s,i=a)}}function Kh(n){return function(){this.style.removeProperty(n)}}function Ly(n,t,e){var i,r=e+"",s;return function(){var a=sr(this,n);return a===r?null:a===i?s:s=t(i=a,e)}}function Iy(n,t,e){var i,r,s;return function(){var a=sr(this,n),o=e(this),l=o+"";return o==null&&(l=o=(this.style.removeProperty(n),sr(this,n))),a===l?null:a===i&&l===r?s:(r=l,s=t(i=a,o))}}function Uy(n,t){var e,i,r,s="style."+t,a="end."+s,o;return function(){var l=mn(this,n),c=l.on,u=l.value[s]==null?o||(o=Kh(t)):void 0;(c!==e||r!==u)&&(i=(e=c).copy()).on(a,r=u),l.on=i}}function Ny(n,t,e){var i=(n+="")=="transform"?BM:Zh;return t==null?this.styleTween(n,Dy(n,i)).on("end.style."+n,Kh(n)):typeof t=="function"?this.styleTween(n,Iy(n,i,Yl(this,"style."+n,t))).each(Uy(this._id,n)):this.styleTween(n,Ly(n,i,t),e).on("end.style."+n,null)}function Fy(n,t,e){return function(i){this.style.setProperty(n,t.call(this,i),e)}}function Oy(n,t,e){var i,r;function s(){var a=t.apply(this,arguments);return a!==r&&(i=(r=a)&&Fy(n,a,e)),i}return s._value=t,s}function By(n,t,e){var i="style."+(n+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(t==null)return this.tween(i,null);if(typeof t!="function")throw new Error;return this.tween(i,Oy(n,t,e??""))}function zy(n){return function(){this.textContent=n}}function ky(n){return function(){var t=n(this);this.textContent=t??""}}function Hy(n){return this.tween("text",typeof n=="function"?ky(Yl(this,"text",n)):zy(n==null?"":n+""))}function Vy(n){return function(t){this.textContent=n.call(this,t)}}function Gy(n){var t,e;function i(){var r=n.apply(this,arguments);return r!==e&&(t=(e=r)&&Vy(r)),t}return i._value=n,i}function Wy(n){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(n==null)return this.tween(t,null);if(typeof n!="function")throw new Error;return this.tween(t,Gy(n))}function Xy(){for(var n=this._name,t=this._id,e=jh(),i=this._groups,r=i.length,s=0;s<r;++s)for(var a=i[s],o=a.length,l,c=0;c<o;++c)if(l=a[c]){var u=sn(l,t);Ma(l,n,e,c,a,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new Cn(i,this._parents,n,e)}function $y(){var n,t,e=this,i=e._id,r=e.size();return new Promise(function(s,a){var o={value:a},l={value:function(){--r===0&&s()}};e.each(function(){var c=mn(this,i),u=c.on;u!==n&&(t=(n=u).copy(),t._.cancel.push(o),t._.interrupt.push(o),t._.end.push(l)),c.on=t}),r===0&&s()})}var Yy=0;function Cn(n,t,e,i){this._groups=n,this._parents=t,this._name=e,this._id=i}function jh(){return++Yy}var yn=Yr.prototype;Cn.prototype={constructor:Cn,select:Ay,selectAll:Ry,selectChild:yn.selectChild,selectChildren:yn.selectChildren,filter:My,merge:yy,selection:Py,transition:Xy,call:yn.call,nodes:yn.nodes,node:yn.node,size:yn.size,empty:yn.empty,each:yn.each,on:wy,attr:ry,attrTween:cy,style:Ny,styleTween:By,text:Hy,textTween:Wy,remove:by,tween:jM,delay:fy,duration:my,ease:gy,easeVarying:xy,end:$y,[Symbol.iterator]:yn[Symbol.iterator]};function qy(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}var Zy=Math.PI;function Ky(n){return(1-Math.cos(Zy*n))/2}var jy={time:null,delay:0,duration:250,ease:qy};function Jy(n,t){for(var e;!(e=n.__transition)||!(e=e[t]);)if(!(n=n.parentNode))throw new Error(`transition ${t} not found`);return e}function Qy(n){var t,e;n instanceof Cn?(t=n._id,n=n._name):(t=jh(),(e=jy).time=Xl(),n=n==null?null:n+"");for(var i=this._groups,r=i.length,s=0;s<r;++s)for(var a=i[s],o=a.length,l,c=0;c<o;++c)(l=a[c])&&Ma(l,n,t,c,a,e||Jy(l,t));return new Cn(i,this._parents,n,t)}Yr.prototype.interrupt=qM;Yr.prototype.transition=Qy;const dl=Math.PI,pl=2*dl,ni=1e-6,tS=pl-ni;function Jh(n){this._+=n[0];for(let t=1,e=n.length;t<e;++t)this._+=arguments[t]+n[t]}function eS(n){let t=Math.floor(n);if(!(t>=0))throw new Error(`invalid digits: ${n}`);if(t>15)return Jh;const e=10**t;return function(i){this._+=i[0];for(let r=1,s=i.length;r<s;++r)this._+=Math.round(arguments[r]*e)/e+i[r]}}class nS{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?Jh:eS(t)}moveTo(t,e){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,e){this._append`L${this._x1=+t},${this._y1=+e}`}quadraticCurveTo(t,e,i,r){this._append`Q${+t},${+e},${this._x1=+i},${this._y1=+r}`}bezierCurveTo(t,e,i,r,s,a){this._append`C${+t},${+e},${+i},${+r},${this._x1=+s},${this._y1=+a}`}arcTo(t,e,i,r,s){if(t=+t,e=+e,i=+i,r=+r,s=+s,s<0)throw new Error(`negative radius: ${s}`);let a=this._x1,o=this._y1,l=i-t,c=r-e,u=a-t,h=o-e,f=u*u+h*h;if(this._x1===null)this._append`M${this._x1=t},${this._y1=e}`;else if(f>ni)if(!(Math.abs(h*l-c*u)>ni)||!s)this._append`L${this._x1=t},${this._y1=e}`;else{let d=i-a,_=r-o,v=l*l+c*c,m=d*d+_*_,p=Math.sqrt(v),E=Math.sqrt(f),T=s*Math.tan((dl-Math.acos((v+f-m)/(2*p*E)))/2),y=T/E,D=T/p;Math.abs(y-1)>ni&&this._append`L${t+y*u},${e+y*h}`,this._append`A${s},${s},0,0,${+(h*d>u*_)},${this._x1=t+D*l},${this._y1=e+D*c}`}}arc(t,e,i,r,s,a){if(t=+t,e=+e,i=+i,a=!!a,i<0)throw new Error(`negative radius: ${i}`);let o=i*Math.cos(r),l=i*Math.sin(r),c=t+o,u=e+l,h=1^a,f=a?r-s:s-r;this._x1===null?this._append`M${c},${u}`:(Math.abs(this._x1-c)>ni||Math.abs(this._y1-u)>ni)&&this._append`L${c},${u}`,i&&(f<0&&(f=f%pl+pl),f>tS?this._append`A${i},${i},0,1,${h},${t-o},${e-l}A${i},${i},0,1,${h},${this._x1=c},${this._y1=u}`:f>ni&&this._append`A${i},${i},0,${+(f>=dl)},${h},${this._x1=t+i*Math.cos(s)},${this._y1=e+i*Math.sin(s)}`)}rect(t,e,i,r){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}h${i=+i}v${+r}h${-i}Z`}toString(){return this._}}var iS=Array.prototype,Qh=iS.slice;function rS(n,t){return n-t}function sS(n){for(var t=0,e=n.length,i=n[e-1][1]*n[0][0]-n[e-1][0]*n[0][1];++t<e;)i+=n[t-1][1]*n[t][0]-n[t-1][0]*n[t][1];return i}const On=n=>()=>n;function aS(n,t){for(var e=-1,i=t.length,r;++e<i;)if(r=oS(n,t[e]))return r;return 0}function oS(n,t){for(var e=t[0],i=t[1],r=-1,s=0,a=n.length,o=a-1;s<a;o=s++){var l=n[s],c=l[0],u=l[1],h=n[o],f=h[0],d=h[1];if(lS(l,h,t))return 0;u>i!=d>i&&e<(f-c)*(i-u)/(d-u)+c&&(r=-r)}return r}function lS(n,t,e){var i;return cS(n,t,e)&&uS(n[i=+(n[0]===t[0])],e[i],t[i])}function cS(n,t,e){return(t[0]-n[0])*(e[1]-n[1])===(e[0]-n[0])*(t[1]-n[1])}function uS(n,t,e){return n<=t&&t<=e||e<=t&&t<=n}function hS(){}var Sn=[[],[[[1,1.5],[.5,1]]],[[[1.5,1],[1,1.5]]],[[[1.5,1],[.5,1]]],[[[1,.5],[1.5,1]]],[[[1,1.5],[.5,1]],[[1,.5],[1.5,1]]],[[[1,.5],[1,1.5]]],[[[1,.5],[.5,1]]],[[[.5,1],[1,.5]]],[[[1,1.5],[1,.5]]],[[[.5,1],[1,.5]],[[1.5,1],[1,1.5]]],[[[1.5,1],[1,.5]]],[[[.5,1],[1.5,1]]],[[[1,1.5],[1.5,1]]],[[[.5,1],[1,1.5]]],[]];function yu(){var n=1,t=1,e=Ev,i=l;function r(c){var u=e(c);if(Array.isArray(u))u=u.slice().sort(rS);else{const h=il(c,fS);for(u=zl(...Sv(h[0],h[1],u),u);u[u.length-1]>=h[1];)u.pop();for(;u[1]<h[0];)u.shift()}return u.map(h=>s(c,h))}function s(c,u){const h=u==null?NaN:+u;if(isNaN(h))throw new Error(`invalid value: ${u}`);var f=[],d=[];return a(c,h,function(_){i(_,c,h),sS(_)>0?f.push([_]):d.push(_)}),d.forEach(function(_){for(var v=0,m=f.length,p;v<m;++v)if(aS((p=f[v])[0],_)!==-1){p.push(_);return}}),{type:"MultiPolygon",value:u,coordinates:f}}function a(c,u,h){var f=new Array,d=new Array,_,v,m,p,E,T;for(_=v=-1,p=ti(c[0],u),Sn[p<<1].forEach(y);++_<n-1;)m=p,p=ti(c[_+1],u),Sn[m|p<<1].forEach(y);for(Sn[p<<0].forEach(y);++v<t-1;){for(_=-1,p=ti(c[v*n+n],u),E=ti(c[v*n],u),Sn[p<<1|E<<2].forEach(y);++_<n-1;)m=p,p=ti(c[v*n+n+_+1],u),T=E,E=ti(c[v*n+_+1],u),Sn[m|p<<1|E<<2|T<<3].forEach(y);Sn[p|E<<3].forEach(y)}for(_=-1,E=c[v*n]>=u,Sn[E<<2].forEach(y);++_<n-1;)T=E,E=ti(c[v*n+_+1],u),Sn[E<<2|T<<3].forEach(y);Sn[E<<3].forEach(y);function y(D){var P=[D[0][0]+_,D[0][1]+v],A=[D[1][0]+_,D[1][1]+v],C=o(P),S=o(A),x,b;(x=d[C])?(b=f[S])?(delete d[x.end],delete f[b.start],x===b?(x.ring.push(A),h(x.ring)):f[x.start]=d[b.end]={start:x.start,end:b.end,ring:x.ring.concat(b.ring)}):(delete d[x.end],x.ring.push(A),d[x.end=S]=x):(x=f[S])?(b=d[C])?(delete f[x.start],delete d[b.end],x===b?(x.ring.push(A),h(x.ring)):f[b.start]=d[x.end]={start:b.start,end:x.end,ring:b.ring.concat(x.ring)}):(delete f[x.start],x.ring.unshift(P),f[x.start=C]=x):f[C]=d[S]={start:C,end:S,ring:[P,A]}}}function o(c){return c[0]*2+c[1]*(n+1)*4}function l(c,u,h){c.forEach(function(f){var d=f[0],_=f[1],v=d|0,m=_|0,p=ao(u[m*n+v]);d>0&&d<n&&v===d&&(f[0]=Su(d,ao(u[m*n+v-1]),p,h)),_>0&&_<t&&m===_&&(f[1]=Su(_,ao(u[(m-1)*n+v]),p,h))})}return r.contour=s,r.size=function(c){if(!arguments.length)return[n,t];var u=Math.floor(c[0]),h=Math.floor(c[1]);if(!(u>=0&&h>=0))throw new Error("invalid size");return n=u,t=h,r},r.thresholds=function(c){return arguments.length?(e=typeof c=="function"?c:Array.isArray(c)?On(Qh.call(c)):On(c),r):e},r.smooth=function(c){return arguments.length?(i=c?l:hS,r):i===l},r}function fS(n){return isFinite(n)?n:NaN}function ti(n,t){return n==null?!1:+n>=t}function ao(n){return n==null||isNaN(n=+n)?-1/0:n}function Su(n,t,e,i){const r=i-t,s=e-t,a=isFinite(r)||isFinite(s)?r/s:Math.sign(r)/Math.sign(s);return isNaN(a)?n:n+a-.5}function dS(n){return n[0]}function pS(n){return n[1]}function mS(){return 1}function tf(){var n=dS,t=pS,e=mS,i=960,r=500,s=20,a=2,o=s*3,l=i+o*2>>a,c=r+o*2>>a,u=On(20);function h(E){var T=new Float32Array(l*c),y=Math.pow(2,-a),D=-1;for(const O of E){var P=(n(O,++D,E)+o)*y,A=(t(O,D,E)+o)*y,C=+e(O,D,E);if(C&&P>=0&&P<l&&A>=0&&A<c){var S=Math.floor(P),x=Math.floor(A),b=P-S-.5,z=A-x-.5;T[S+x*l]+=(1-b)*(1-z)*C,T[S+1+x*l]+=b*(1-z)*C,T[S+1+(x+1)*l]+=b*z*C,T[S+(x+1)*l]+=(1-b)*z*C}}return lv({data:T,width:l,height:c},s*y),T}function f(E){var T=h(E),y=u(T),D=Math.pow(2,2*a);return Array.isArray(y)||(y=zl(Number.MIN_VALUE,dn(T)/D,y)),yu().size([l,c]).thresholds(y.map(P=>P*D))(T).map((P,A)=>(P.value=+y[A],d(P)))}f.contours=function(E){var T=h(E),y=yu().size([l,c]),D=Math.pow(2,2*a),P=A=>{A=+A;var C=d(y.contour(T,A*D));return C.value=A,C};return Object.defineProperty(P,"max",{get:()=>dn(T)/D}),P};function d(E){return E.coordinates.forEach(_),E}function _(E){E.forEach(v)}function v(E){E.forEach(m)}function m(E){E[0]=E[0]*Math.pow(2,a)-o,E[1]=E[1]*Math.pow(2,a)-o}function p(){return o=s*3,l=i+o*2>>a,c=r+o*2>>a,f}return f.x=function(E){return arguments.length?(n=typeof E=="function"?E:On(+E),f):n},f.y=function(E){return arguments.length?(t=typeof E=="function"?E:On(+E),f):t},f.weight=function(E){return arguments.length?(e=typeof E=="function"?E:On(+E),f):e},f.size=function(E){if(!arguments.length)return[i,r];var T=+E[0],y=+E[1];if(!(T>=0&&y>=0))throw new Error("invalid size");return i=T,r=y,p()},f.cellSize=function(E){if(!arguments.length)return 1<<a;if(!((E=+E)>=1))throw new Error("invalid cell size");return a=Math.floor(Math.log(E)/Math.LN2),p()},f.thresholds=function(E){return arguments.length?(u=typeof E=="function"?E:Array.isArray(E)?On(Qh.call(E)):On(E),f):u},f.bandwidth=function(E){if(!arguments.length)return Math.sqrt(s*(s+1));if(!((E=+E)>=0))throw new Error("invalid bandwidth");return s=(Math.sqrt(4*E*E+1)-1)/2,p()},f}var Eu={},oo={},lo=34,wr=10,co=13;function ef(n){return new Function("d","return {"+n.map(function(t,e){return JSON.stringify(t)+": d["+e+'] || ""'}).join(",")+"}")}function _S(n,t){var e=ef(n);return function(i,r){return t(e(i),r,n)}}function wu(n){var t=Object.create(null),e=[];return n.forEach(function(i){for(var r in i)r in t||e.push(t[r]=r)}),e}function Re(n,t){var e=n+"",i=e.length;return i<t?new Array(t-i+1).join(0)+e:e}function gS(n){return n<0?"-"+Re(-n,6):n>9999?"+"+Re(n,6):Re(n,4)}function vS(n){var t=n.getUTCHours(),e=n.getUTCMinutes(),i=n.getUTCSeconds(),r=n.getUTCMilliseconds();return isNaN(n)?"Invalid Date":gS(n.getUTCFullYear())+"-"+Re(n.getUTCMonth()+1,2)+"-"+Re(n.getUTCDate(),2)+(r?"T"+Re(t,2)+":"+Re(e,2)+":"+Re(i,2)+"."+Re(r,3)+"Z":i?"T"+Re(t,2)+":"+Re(e,2)+":"+Re(i,2)+"Z":e||t?"T"+Re(t,2)+":"+Re(e,2)+"Z":"")}function xS(n){var t=new RegExp('["'+n+`
\r]`),e=n.charCodeAt(0);function i(h,f){var d,_,v=r(h,function(m,p){if(d)return d(m,p-1);_=m,d=f?_S(m,f):ef(m)});return v.columns=_||[],v}function r(h,f){var d=[],_=h.length,v=0,m=0,p,E=_<=0,T=!1;h.charCodeAt(_-1)===wr&&--_,h.charCodeAt(_-1)===co&&--_;function y(){if(E)return oo;if(T)return T=!1,Eu;var P,A=v,C;if(h.charCodeAt(A)===lo){for(;v++<_&&h.charCodeAt(v)!==lo||h.charCodeAt(++v)===lo;);return(P=v)>=_?E=!0:(C=h.charCodeAt(v++))===wr?T=!0:C===co&&(T=!0,h.charCodeAt(v)===wr&&++v),h.slice(A+1,P-1).replace(/""/g,'"')}for(;v<_;){if((C=h.charCodeAt(P=v++))===wr)T=!0;else if(C===co)T=!0,h.charCodeAt(v)===wr&&++v;else if(C!==e)continue;return h.slice(A,P)}return E=!0,h.slice(A,_)}for(;(p=y())!==oo;){for(var D=[];p!==Eu&&p!==oo;)D.push(p),p=y();f&&(D=f(D,m++))==null||d.push(D)}return d}function s(h,f){return h.map(function(d){return f.map(function(_){return u(d[_])}).join(n)})}function a(h,f){return f==null&&(f=wu(h)),[f.map(u).join(n)].concat(s(h,f)).join(`
`)}function o(h,f){return f==null&&(f=wu(h)),s(h,f).join(`
`)}function l(h){return h.map(c).join(`
`)}function c(h){return h.map(u).join(n)}function u(h){return h==null?"":h instanceof Date?vS(h):t.test(h+="")?'"'+h.replace(/"/g,'""')+'"':h}return{parse:i,parseRows:r,format:a,formatBody:o,formatRows:l,formatRow:c,formatValue:u}}var MS=xS(","),yS=MS.parse;function SS(n){if(!n.ok)throw new Error(n.status+" "+n.statusText);return n.text()}function ES(n,t){return fetch(n,t).then(SS)}function wS(n){return function(t,e,i){return arguments.length===2&&typeof e=="function"&&(i=e,e=void 0),ES(t,e).then(function(r){return n(r,i)})}}var As=wS(yS);function TS(n){if(!n.ok)throw new Error(n.status+" "+n.statusText);if(!(n.status===204||n.status===205))return n.json()}function bS(n,t){return fetch(n,t).then(TS)}function AS(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function ra(n,t){if((e=(n=t?n.toExponential(t-1):n.toExponential()).indexOf("e"))<0)return null;var e,i=n.slice(0,e);return[i.length>1?i[0]+i.slice(2):i,+n.slice(e+1)]}function or(n){return n=ra(Math.abs(n)),n?n[1]:NaN}function RS(n,t){return function(e,i){for(var r=e.length,s=[],a=0,o=n[0],l=0;r>0&&o>0&&(l+o+1>i&&(o=Math.max(1,i-l)),s.push(e.substring(r-=o,r+o)),!((l+=o+1)>i));)o=n[a=(a+1)%n.length];return s.reverse().join(t)}}function CS(n){return function(t){return t.replace(/[0-9]/g,function(e){return n[+e]})}}var PS=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function sa(n){if(!(t=PS.exec(n)))throw new Error("invalid format: "+n);var t;return new ql({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}sa.prototype=ql.prototype;function ql(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}ql.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function DS(n){t:for(var t=n.length,e=1,i=-1,r;e<t;++e)switch(n[e]){case".":i=r=e;break;case"0":i===0&&(i=e),r=e;break;default:if(!+n[e])break t;i>0&&(i=0);break}return i>0?n.slice(0,i)+n.slice(r+1):n}var nf;function LS(n,t){var e=ra(n,t);if(!e)return n+"";var i=e[0],r=e[1],s=r-(nf=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,a=i.length;return s===a?i:s>a?i+new Array(s-a+1).join("0"):s>0?i.slice(0,s)+"."+i.slice(s):"0."+new Array(1-s).join("0")+ra(n,Math.max(0,t+s-1))[0]}function Tu(n,t){var e=ra(n,t);if(!e)return n+"";var i=e[0],r=e[1];return r<0?"0."+new Array(-r).join("0")+i:i.length>r+1?i.slice(0,r+1)+"."+i.slice(r+1):i+new Array(r-i.length+2).join("0")}const bu={"%":(n,t)=>(n*100).toFixed(t),b:n=>Math.round(n).toString(2),c:n=>n+"",d:AS,e:(n,t)=>n.toExponential(t),f:(n,t)=>n.toFixed(t),g:(n,t)=>n.toPrecision(t),o:n=>Math.round(n).toString(8),p:(n,t)=>Tu(n*100,t),r:Tu,s:LS,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function Au(n){return n}var Ru=Array.prototype.map,Cu=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function IS(n){var t=n.grouping===void 0||n.thousands===void 0?Au:RS(Ru.call(n.grouping,Number),n.thousands+""),e=n.currency===void 0?"":n.currency[0]+"",i=n.currency===void 0?"":n.currency[1]+"",r=n.decimal===void 0?".":n.decimal+"",s=n.numerals===void 0?Au:CS(Ru.call(n.numerals,String)),a=n.percent===void 0?"%":n.percent+"",o=n.minus===void 0?"−":n.minus+"",l=n.nan===void 0?"NaN":n.nan+"";function c(h){h=sa(h);var f=h.fill,d=h.align,_=h.sign,v=h.symbol,m=h.zero,p=h.width,E=h.comma,T=h.precision,y=h.trim,D=h.type;D==="n"?(E=!0,D="g"):bu[D]||(T===void 0&&(T=12),y=!0,D="g"),(m||f==="0"&&d==="=")&&(m=!0,f="0",d="=");var P=v==="$"?e:v==="#"&&/[boxX]/.test(D)?"0"+D.toLowerCase():"",A=v==="$"?i:/[%p]/.test(D)?a:"",C=bu[D],S=/[defgprs%]/.test(D);T=T===void 0?6:/[gprs]/.test(D)?Math.max(1,Math.min(21,T)):Math.max(0,Math.min(20,T));function x(b){var z=P,O=A,K,J,Z;if(D==="c")O=C(b)+O,b="";else{b=+b;var nt=b<0||1/b<0;if(b=isNaN(b)?l:C(Math.abs(b),T),y&&(b=DS(b)),nt&&+b==0&&_!=="+"&&(nt=!1),z=(nt?_==="("?_:o:_==="-"||_==="("?"":_)+z,O=(D==="s"?Cu[8+nf/3]:"")+O+(nt&&_==="("?")":""),S){for(K=-1,J=b.length;++K<J;)if(Z=b.charCodeAt(K),48>Z||Z>57){O=(Z===46?r+b.slice(K+1):b.slice(K))+O,b=b.slice(0,K);break}}}E&&!m&&(b=t(b,1/0));var $=z.length+b.length+O.length,G=$<p?new Array(p-$+1).join(f):"";switch(E&&m&&(b=t(G+b,G.length?p-O.length:1/0),G=""),d){case"<":b=z+b+O+G;break;case"=":b=z+G+b+O;break;case"^":b=G.slice(0,$=G.length>>1)+z+b+O+G.slice($);break;default:b=G+z+b+O;break}return s(b)}return x.toString=function(){return h+""},x}function u(h,f){var d=c((h=sa(h),h.type="f",h)),_=Math.max(-8,Math.min(8,Math.floor(or(f)/3)))*3,v=Math.pow(10,-_),m=Cu[8+_/3];return function(p){return d(v*p)+m}}return{format:c,formatPrefix:u}}var Rs,rf,sf;US({thousands:",",grouping:[3],currency:["$",""]});function US(n){return Rs=IS(n),rf=Rs.format,sf=Rs.formatPrefix,Rs}function NS(n){return Math.max(0,-or(Math.abs(n)))}function FS(n,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(or(t)/3)))*3-or(Math.abs(n)))}function OS(n,t){return n=Math.abs(n),t=Math.abs(t)-n,Math.max(0,or(t)-or(n))+1}var BS=Math.PI,zS=BS*2,kS=Math.abs,Zl=Math.sqrt;function en(){}function aa(n,t){n&&Du.hasOwnProperty(n.type)&&Du[n.type](n,t)}var Pu={Feature:function(n,t){aa(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,i=-1,r=e.length;++i<r;)aa(e[i].geometry,t)}},Du={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,i=-1,r=e.length;++i<r;)n=e[i],t.point(n[0],n[1],n[2])},LineString:function(n,t){ml(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,i=-1,r=e.length;++i<r;)ml(e[i],t,0)},Polygon:function(n,t){Lu(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,i=-1,r=e.length;++i<r;)Lu(e[i],t)},GeometryCollection:function(n,t){for(var e=n.geometries,i=-1,r=e.length;++i<r;)aa(e[i],t)}};function ml(n,t,e){var i=-1,r=n.length-e,s;for(t.lineStart();++i<r;)s=n[i],t.point(s[0],s[1],s[2]);t.lineEnd()}function Lu(n,t){var e=-1,i=n.length;for(t.polygonStart();++e<i;)ml(n[e],t,1);t.polygonEnd()}function Tr(n,t){n&&Pu.hasOwnProperty(n.type)?Pu[n.type](n,t):aa(n,t)}const HS=n=>n;var uo=new rr,_l=new rr,af,of,gl,vl,wn={point:en,lineStart:en,lineEnd:en,polygonStart:function(){wn.lineStart=VS,wn.lineEnd=WS},polygonEnd:function(){wn.lineStart=wn.lineEnd=wn.point=en,uo.add(kS(_l)),_l=new rr},result:function(){var n=uo/2;return uo=new rr,n}};function VS(){wn.point=GS}function GS(n,t){wn.point=lf,af=gl=n,of=vl=t}function lf(n,t){_l.add(vl*n-gl*t),gl=n,vl=t}function WS(){lf(af,of)}var lr=1/0,oa=lr,Wr=-lr,la=Wr,Iu={point:XS,lineStart:en,lineEnd:en,polygonStart:en,polygonEnd:en,result:function(){var n=[[lr,oa],[Wr,la]];return Wr=la=-(oa=lr=1/0),n}};function XS(n,t){n<lr&&(lr=n),n>Wr&&(Wr=n),t<oa&&(oa=t),t>la&&(la=t)}var xl=0,Ml=0,Lr=0,ca=0,ua=0,Gi=0,yl=0,Sl=0,Ir=0,cf,uf,un,hn,Xe={point:mi,lineStart:Uu,lineEnd:Nu,polygonStart:function(){Xe.lineStart=qS,Xe.lineEnd=ZS},polygonEnd:function(){Xe.point=mi,Xe.lineStart=Uu,Xe.lineEnd=Nu},result:function(){var n=Ir?[yl/Ir,Sl/Ir]:Gi?[ca/Gi,ua/Gi]:Lr?[xl/Lr,Ml/Lr]:[NaN,NaN];return xl=Ml=Lr=ca=ua=Gi=yl=Sl=Ir=0,n}};function mi(n,t){xl+=n,Ml+=t,++Lr}function Uu(){Xe.point=$S}function $S(n,t){Xe.point=YS,mi(un=n,hn=t)}function YS(n,t){var e=n-un,i=t-hn,r=Zl(e*e+i*i);ca+=r*(un+n)/2,ua+=r*(hn+t)/2,Gi+=r,mi(un=n,hn=t)}function Nu(){Xe.point=mi}function qS(){Xe.point=KS}function ZS(){hf(cf,uf)}function KS(n,t){Xe.point=hf,mi(cf=un=n,uf=hn=t)}function hf(n,t){var e=n-un,i=t-hn,r=Zl(e*e+i*i);ca+=r*(un+n)/2,ua+=r*(hn+t)/2,Gi+=r,r=hn*n-un*t,yl+=r*(un+n),Sl+=r*(hn+t),Ir+=r*3,mi(un=n,hn=t)}function ff(n){this._context=n}ff.prototype={_radius:4.5,pointRadius:function(n){return this._radius=n,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(n,t){switch(this._point){case 0:{this._context.moveTo(n,t),this._point=1;break}case 1:{this._context.lineTo(n,t);break}default:{this._context.moveTo(n+this._radius,t),this._context.arc(n,t,this._radius,0,zS);break}}},result:en};var El=new rr,ho,df,pf,Ur,Nr,Xr={point:en,lineStart:function(){Xr.point=jS},lineEnd:function(){ho&&mf(df,pf),Xr.point=en},polygonStart:function(){ho=!0},polygonEnd:function(){ho=null},result:function(){var n=+El;return El=new rr,n}};function jS(n,t){Xr.point=mf,df=Ur=n,pf=Nr=t}function mf(n,t){Ur-=n,Nr-=t,El.add(Zl(Ur*Ur+Nr*Nr)),Ur=n,Nr=t}let Fu,ha,Ou,Bu;class zu{constructor(t){this._append=t==null?_f:JS(t),this._radius=4.5,this._=""}pointRadius(t){return this._radius=+t,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(t,e){switch(this._point){case 0:{this._append`M${t},${e}`,this._point=1;break}case 1:{this._append`L${t},${e}`;break}default:{if(this._append`M${t},${e}`,this._radius!==Ou||this._append!==ha){const i=this._radius,r=this._;this._="",this._append`m0,${i}a${i},${i} 0 1,1 0,${-2*i}a${i},${i} 0 1,1 0,${2*i}z`,Ou=i,ha=this._append,Bu=this._,this._=r}this._+=Bu;break}}}result(){const t=this._;return this._="",t.length?t:null}}function _f(n){let t=1;this._+=n[0];for(const e=n.length;t<e;++t)this._+=arguments[t]+n[t]}function JS(n){const t=Math.floor(n);if(!(t>=0))throw new RangeError(`invalid digits: ${n}`);if(t>15)return _f;if(t!==Fu){const e=10**t;Fu=t,ha=function(r){let s=1;this._+=r[0];for(const a=r.length;s<a;++s)this._+=Math.round(arguments[s]*e)/e+r[s]}}return ha}function gf(n,t){let e=3,i=4.5,r,s;function a(o){return o&&(typeof i=="function"&&s.pointRadius(+i.apply(this,arguments)),Tr(o,r(s))),s.result()}return a.area=function(o){return Tr(o,r(wn)),wn.result()},a.measure=function(o){return Tr(o,r(Xr)),Xr.result()},a.bounds=function(o){return Tr(o,r(Iu)),Iu.result()},a.centroid=function(o){return Tr(o,r(Xe)),Xe.result()},a.projection=function(o){return arguments.length?(r=o==null?(n=null,HS):(n=o).stream,a):n},a.context=function(o){return arguments.length?(s=o==null?(t=null,new zu(e)):new ff(t=o),typeof i!="function"&&s.pointRadius(i),a):t},a.pointRadius=function(o){return arguments.length?(i=typeof o=="function"?o:(s.pointRadius(+o),+o),a):i},a.digits=function(o){if(!arguments.length)return e;if(o==null)e=null;else{const l=Math.floor(o);if(!(l>=0))throw new RangeError(`invalid digits: ${o}`);e=l}return t===null&&(s=new zu(e)),a},a.projection(n).digits(e).context(t)}function QS(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}function tE(n,t){return n[0]-t[0]||n[1]-t[1]}function ku(n){const t=n.length,e=[0,1];let i=2,r;for(r=2;r<t;++r){for(;i>1&&QS(n[e[i-2]],n[e[i-1]],n[r])<=0;)--i;e[i++]=r}return e.slice(0,i)}function Hu(n){if((e=n.length)<3)return null;var t,e,i=new Array(e),r=new Array(e);for(t=0;t<e;++t)i[t]=[+n[t][0],+n[t][1],t];for(i.sort(tE),t=0;t<e;++t)r[t]=[i[t][0],-i[t][1]];var s=ku(i),a=ku(r),o=a[0]===s[0],l=a[a.length-1]===s[s.length-1],c=[];for(t=s.length-1;t>=0;--t)c.push(n[i[s[t]][2]]);for(t=+o;t<a.length-l;++t)c.push(n[i[a[t]][2]]);return c}function eE(n,t){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(t).domain(n);break}return this}function nE(n){return function(){return n}}function iE(n){return+n}var Vu=[0,1];function Wi(n){return n}function wl(n,t){return(t-=n=+n)?function(e){return(e-n)/t}:nE(isNaN(t)?NaN:.5)}function rE(n,t){var e;return n>t&&(e=n,n=t,t=e),function(i){return Math.max(n,Math.min(t,i))}}function sE(n,t,e){var i=n[0],r=n[1],s=t[0],a=t[1];return r<i?(i=wl(r,i),s=e(a,s)):(i=wl(i,r),s=e(s,a)),function(o){return s(i(o))}}function aE(n,t,e){var i=Math.min(n.length,t.length)-1,r=new Array(i),s=new Array(i),a=-1;for(n[i]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++a<i;)r[a]=wl(n[a],n[a+1]),s[a]=e(t[a],t[a+1]);return function(o){var l=ov(n,o,1,i)-1;return s[l](r[l](o))}}function oE(n,t){return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function lE(){var n=Vu,t=Vu,e=Wl,i,r,s,a=Wi,o,l,c;function u(){var f=Math.min(n.length,t.length);return a!==Wi&&(a=rE(n[0],n[f-1])),o=f>2?aE:sE,l=c=null,h}function h(f){return f==null||isNaN(f=+f)?s:(l||(l=o(n.map(i),t,e)))(i(a(f)))}return h.invert=function(f){return a(r((c||(c=o(t,n.map(i),Je)))(f)))},h.domain=function(f){return arguments.length?(n=Array.from(f,iE),u()):n.slice()},h.range=function(f){return arguments.length?(t=Array.from(f),u()):t.slice()},h.rangeRound=function(f){return t=Array.from(f),e=NM,u()},h.clamp=function(f){return arguments.length?(a=f?!0:Wi,u()):a!==Wi},h.interpolate=function(f){return arguments.length?(e=f,u()):e},h.unknown=function(f){return arguments.length?(s=f,h):s},function(f,d){return i=f,r=d,u()}}function cE(){return lE()(Wi,Wi)}function uE(n,t,e,i){var r=yv(n,t,e),s;switch(i=sa(i??",f"),i.type){case"s":{var a=Math.max(Math.abs(n),Math.abs(t));return i.precision==null&&!isNaN(s=FS(r,a))&&(i.precision=s),sf(i,a)}case"":case"e":case"g":case"p":case"r":{i.precision==null&&!isNaN(s=OS(r,Math.max(Math.abs(n),Math.abs(t))))&&(i.precision=s-(i.type==="e"));break}case"f":case"%":{i.precision==null&&!isNaN(s=NS(r))&&(i.precision=s-(i.type==="%")*2);break}}return rf(i)}function hE(n){var t=n.domain;return n.ticks=function(e){var i=t();return zl(i[0],i[i.length-1],e??10)},n.tickFormat=function(e,i){var r=t();return uE(r[0],r[r.length-1],e??10,i)},n.nice=function(e){e==null&&(e=10);var i=t(),r=0,s=i.length-1,a=i[r],o=i[s],l,c,u=10;for(o<a&&(c=a,a=o,o=c,c=r,r=s,s=c);u-- >0;){if(c=Zs(a,o,e),c===l)return i[r]=a,i[s]=o,t(i);if(c>0)a=Math.floor(a/c)*c,o=Math.ceil(o/c)*c;else if(c<0)a=Math.ceil(a*c)/c,o=Math.floor(o*c)/c;else break;l=c}return n},n}function Ki(){var n=cE();return n.copy=function(){return oE(n,Ki())},eE.apply(n,arguments),hE(n)}function zi(n){return function(){return n}}function fE(n){let t=3;return n.digits=function(e){if(!arguments.length)return t;if(e==null)t=null;else{const i=Math.floor(e);if(!(i>=0))throw new RangeError(`invalid digits: ${e}`);t=i}return n},()=>new nS(t)}function dE(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function vf(n){this._context=n}vf.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(n,t){switch(n=+n,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(n,t):this._context.moveTo(n,t);break;case 1:this._point=2;default:this._context.lineTo(n,t);break}}};function pE(n){return new vf(n)}function mE(n){return n[0]}function _E(n){return n[1]}function gE(n,t){var e=zi(!0),i=null,r=pE,s=null,a=fE(o);n=typeof n=="function"?n:n===void 0?mE:zi(n),t=typeof t=="function"?t:t===void 0?_E:zi(t);function o(l){var c,u=(l=dE(l)).length,h,f=!1,d;for(i==null&&(s=r(d=a())),c=0;c<=u;++c)!(c<u&&e(h=l[c],c,l))===f&&((f=!f)?s.lineStart():s.lineEnd()),f&&s.point(+n(h,c,l),+t(h,c,l));if(d)return s=null,d+""||null}return o.x=function(l){return arguments.length?(n=typeof l=="function"?l:zi(+l),o):n},o.y=function(l){return arguments.length?(t=typeof l=="function"?l:zi(+l),o):t},o.defined=function(l){return arguments.length?(e=typeof l=="function"?l:zi(!!l),o):e},o.curve=function(l){return arguments.length?(r=l,i!=null&&(s=r(i)),o):r},o.context=function(l){return arguments.length?(l==null?i=s=null:s=r(i=l),o):i},o}function Fr(n,t,e){this.k=n,this.x=t,this.y=e}Fr.prototype={constructor:Fr,scale:function(n){return n===1?this:new Fr(this.k*n,this.x,this.y)},translate:function(n,t){return n===0&t===0?this:new Fr(this.k,this.x+this.k*n,this.y+this.k*t)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};Fr.prototype;const si="/EleVis/",Gu="mesh_frames_",ks=.034,vE=5,br=[["elephant_Trunk4_bone","elephant_Snout_bone"],["elephant_Trunk2_bone","elephant_Trunk4_bone"],["elephant_Snout_bone","elephant_Head_bone"],["elephant_Head_bone","elephant_Neck_bone"],["elephant_Neck_bone","elephant_Spine3_bone"],["elephant_Spine3_bone","elephant_Spine2_bone"],["elephant_Spine2_bone","elephant_Pelvis_bone"],["elephant_Pelvis_bone","elephant_Tail2_bone"],["elephant_Head_bone","elephant_r_Ear1_bone"],["elephant_r_Ear1_bone","elephant_r_Ear4_bone"],["elephant_Head_bone","elephant_l_Ear1_bone"],["elephant_l_Ear1_bone","elephant_l_Ear4_bone"],["elephant_Neck_bone","elephant_r_Humerus_bone"],["elephant_Neck_bone","elephant_l_Humerus_bone"],["elephant_Pelvis_bone","elephant_r_Femur_bone"],["elephant_Pelvis_bone","elephant_l_Femur_bone"]];let ye=null,Wu=0,ji=10,cr=()=>{},Ji=null,Hs=[],Tl=null,ki=!1;window.globalTrackCSV=Ji;window.globalCollCSV=Tl;window.dwellThreshold=ji;window.computeDwellZones=xf;function xE(){if(document.getElementById("dashboard"))return;const n=document.createElement("div");n.id="dashboard",n.style.cssText=`
    display:flex; gap:16px; align-items:flex-start;
    flex-wrap:nowrap; overflow-x:auto;
  `;const t=document.getElementById("viz")||(()=>{const a=document.createElementNS("http://www.w3.org/2000/svg","svg");return a.id="viz",a.setAttribute("width",1e3),a.setAttribute("height",1e3),a})(),e=document.createElement("div");e.style.cssText=`
    border-radius:16px; overflow:hidden; box-shadow:0 0 0 1px #ccc;
    flex-shrink:0; width:1000px; height:1000px;
  `,t.parentElement&&t.parentElement.removeChild(t),e.appendChild(t);const i=document.createElement("div");i.style.cssText=`
    display:flex; flex-direction:column; gap:16px;
    flex-shrink:1; min-width:0;
  `;const r=document.createElement("div");r.id="viewer3DContainer",r.style.cssText=`
    width:1000px; height:784px; background:#222; border-radius:8px;
    position:relative; overflow:hidden;
  `,i.appendChild(r);const s=document.body;n.appendChild(e),n.appendChild(i),s.appendChild(n)}function ME(n,t,e,i,r,s){const a=r-e,o=s-i;if(a===0&&o===0)return Math.hypot(n-e,t-i);const l=((n-e)*a+(t-i)*o)/(a*a+o*o),c=Math.max(0,Math.min(1,l)),u=e+c*a,h=i+c*o;return Math.hypot(n-u,t-h)}function yE(n,t){const e=document.createElement("canvas"),i=e.getContext("2d");i.font="bold 52px sans-serif";const r=i.measureText(n).width;e.width=r+40,e.height=80,i.fillStyle="#fff",i.strokeStyle="#ccc",i.lineWidth=3,i.beginPath(),i.roundRect(2,2,e.width-4,e.height-4,12),i.fill(),i.stroke(),i.font="bold 52px sans-serif",i.fillStyle="black",i.fillText(n,20,60);const s=new jd(e);s.needsUpdate=!0;const a=new dh({map:s,transparent:!0,depthTest:!1,depthWrite:!1}),o=new Yd(a),l=1;o.scale.set(e.width/100*l,e.height/100*l,1);const c=t.clone().add(new N(0,5,0));o.position.copy(c),o.name="dwellText",ye.group.add(o);function u(h,f,d=.01,_=3355443){const v=new N().subVectors(f,h),m=v.length(),p=new N().addVectors(h,f).multiplyScalar(.5),E=new ma(d,d,m,8),T=new pa({color:_}),y=new Oe(E,T);y.name="dwellLeaderLine";const D=new N(0,1,0);y.quaternion.setFromUnitVectors(D,v.clone().normalize()),y.position.copy(p),ye.group.add(y)}u(t,c,.005,3355443),console.log("✅ 3D dwell label + leader line added")}function xf(n,t=.03,e=1){const i=new Map;return n.forEach(r=>{const s=+r.centroidA_x,a=+r.centroidA_z,o=+r.time;if(!isFinite(s)||!isFinite(a))return;const l=`${s/t|0},${a/t|0}`;i.has(l)||i.set(l,[]),i.get(l).push({x:s,z:a,t:o})}),Array.from(i.values()).filter(r=>r.length>=e).map(r=>{const s=Ks(r,l=>l.x),a=Ks(r,l=>l.z),o=dn(r,l=>Math.hypot(l.x-s,l.z-a))||t;return{cx:s,cz:a,centroid:[s,a],radius:o,frames:r.map(l=>l.t)}})}function SE(n,t,e,i,r=1e3,s=1e3){const a=Vn("#viz").selectAll("g#layer-heatmap").data([null]).join("g").attr("id","layer-heatmap").lower();a.selectAll("*").remove();const o=n.map(u=>({x:+u.contact_x,z:+u.contact_z||+u.contact_y})).filter(u=>isFinite(u.x)&&isFinite(u.z));if(!o.length){console.warn("No collision coords");return}const l=tf().x(u=>e(u.x)).y(u=>i(u.z)).size([r,s]).bandwidth(30)(o),c=dn(l,u=>u.value);a.selectAll("path").data(l).enter().append("path").attr("d",gf()).attr("fill","red").attr("fill-opacity",u=>u.value/c).attr("stroke","none")}function fo(n,t,e,i=1e3,r=1e3){const s=Vn("#viz").selectAll("g#layer-dwell-heatmap").data([null]).join("g").attr("id","layer-dwell-heatmap").lower();if(s.selectAll("*").remove(),!n?.length){console.warn("No dwell zones provided.");return}const a=n.map(({cx:c,cz:u})=>({x:+c,z:+u})).filter(c=>isFinite(c.x)&&isFinite(c.z));if(!a.length)return;const o=tf().x(c=>t(c.x)).y(c=>e(c.z)).size([i,r]).bandwidth(30)(a),l=dn(o,c=>c.value);s.selectAll("path").data(o).enter().append("path").attr("d",gf()).attr("fill","purple").attr("fill-opacity",c=>c.value/l).attr("stroke","none")}document.addEventListener("DOMContentLoaded",()=>{xE();let n=document.getElementById("overlay-line-layer");n||(n=document.createElementNS("http://www.w3.org/2000/svg","svg"),n.id="overlay-line-layer",n.setAttribute("width","100%"),n.setAttribute("height","100%"),Object.assign(n.style,{position:"absolute",inset:0,pointerEvents:"none",overflow:"visible",background:"transparent",zIndex:9998}),document.body.appendChild(n));const t=Object.assign({"/public/skeleton_tracking_20250626_094312.csv":()=>Sa(()=>import("./skeleton_tracking_20250626_094312-mk7Ol7QD.js"),[]).then(u=>u.default),"/public/skeleton_tracking_20250701_113425.csv":()=>Sa(()=>import("./skeleton_tracking_20250701_113425-CZfE7OGE.js"),[]).then(u=>u.default),"/public/skeleton_tracking_20250703_165735.csv":()=>Sa(()=>import("./skeleton_tracking_20250703_165735-C45-Qlt3.js"),[]).then(u=>u.default)}),e=Object.keys(t).map(u=>{const h=u.match(/skeleton_tracking_(\d{8}_\d{6})\.csv$/);return h?h[1]:null}).filter(Boolean).sort().reverse();e.length||(alert("No datasets found in /public"),console.warn("datasetUrls",t));const i=document.createElement("select");i.id="datasetSelect",i.style="margin:10px 0;padding:6px;font-size:14px;",e.forEach(u=>{const h=document.createElement("option");h.value=u,h.textContent=u,i.appendChild(h)}),document.body.insertBefore(i,document.getElementById("dashboard")),i.addEventListener("change",()=>Xu(i.value)),e.length&&Xu(e[0]);const s=1/.1,a=document.createElement("label");a.innerHTML='Dwell Threshold (s): <span id="dwellValue">1.0</span>',a.style="margin-left:20px;margin-right:5px;font-size:14px;",i.after(a);const o=document.createElement("input");o.type="range",o.min=.5,o.max=10,o.value=3.5,o.step=.1,o.style="vertical-align:middle",o.disabled=!0,a.appendChild(o),o.oninput=()=>{const u=+o.value;if(document.getElementById("dwellValue").textContent=u.toFixed(1),ji=Math.round(u*s),typeof cr=="function"){const h=+document.getElementById("stepSlider").value||0,f=+document.getElementById("skeletonSlider").value||1;cr(h,f)}typeof window.refreshSliderTicks=="function"&&window.refreshSliderTicks()},o.oninput();const l=document.createElement("button");l.textContent="Toggle Interaction Heat-map",l.style="margin-left:8px;padding:6px 12px",l.disabled=!0,l.id="toggleHeatmap",i.after(l);const c=document.createElement("button");c.id="toggleDwellHeatmap",c.textContent="Toggle Dwell Heat-map",c.style="margin-left:8px;padding:6px 12px",c.disabled=!0,l.after(c)});function EE(n,t,e,i,r){if(!n||!t||!e||!i){console.warn("⛔ buildTimeline: Missing data:",{trackCSV:n,collCSV:t,dwellZones:e,rects3D:i,skelCSV:r});return}const s=30,a=30,o=5,l=document.getElementById("viewer3DContainer")?.parentElement;if(!l){console.warn("⛔ Timeline container not found");return}const c=document.getElementById("stepSlider");+c.max||n.length-1;const u=1e3,h=200,f={l:40,r:10,t:20,b:55};Vn(l).select("#timeline").remove();const d=Vn(l).insert("svg","#viewer3DContainer").attr("id","timeline").attr("width",u).attr("height",h).style("display","block").style("border-radius","16px").style("box-shadow","0 0 0 1px #ccc").style("flex-shrink","0").style("margin","0"),_=n.map((B,ut,At)=>{const Y=+B.centroidA_x,rt=+B.centroidA_z,at=+B.time,st=At[ut-1],ft=st?Math.hypot(Y-+st.centroidA_x,rt-+st.centroidA_z):0;return{t:at,x:Y,z:rt,stepDist:ft}});let v=0;_.forEach(B=>{v+=B.stepDist,B.cumDist=v});const m=_.map(B=>B.t),p=Ki().domain(il(m)).range([f.l,u-f.r]),E=Ki().domain([0,dn(_,B=>B.cumDist)]).nice().range([h-f.b,f.t]),T=Ki().domain(il(t.map(B=>+B.collision_time))).range([f.l,u-f.r]);d.append("g").attr("transform",`translate(0,${h-f.b})`).call(Pv(p).ticks(6)),d.append("g").attr("transform",`translate(${f.l},0)`).call(Dv(E).ticks(4)),d.append("path").datum(_).attr("d",gE().x(B=>p(B.t)).y(B=>E(B.cumDist))).attr("fill","none").attr("stroke","pink").attr("stroke-width",3);const y=d.append("g").attr("id","scrubberLayer"),D=y.append("circle").attr("class","scrubHandle").attr("r",12).attr("fill","#fff").attr("stroke","#ff1493").attr("stroke-width",2).style("pointer-events","none").style("display","none");y.append("rect").attr("x",f.l).attr("y",f.t).attr("width",u-f.l-f.r).attr("height",h-f.t-f.b).attr("fill","transparent").style("cursor","crosshair").on("mousemove",A).on("mouseleave",()=>D.style("display","none")).on("click",C);const P=new Map(_.map(B=>[B.t,{x:p(B.t),y:E(B.cumDist)}]));function A(B){const ut=d.node().getBoundingClientRect(),At=B.clientX-ut.left,Y=Math.max(f.l,Math.min(u-f.r,At)),rt=p.invert(Y);let at=0,st=1/0;for(let Tt=0;Tt<r.length;Tt++){const _t=Math.abs(+r[Tt].time-rt);_t<st&&(st=_t,at=Tt)}const ft=P.get(+r[at].time);ft&&D.attr("cx",ft.x).attr("cy",ft.y).style("display",null)}function C(B){const ut=d.node().getBoundingClientRect(),At=B.clientX-ut.left,Y=Math.max(f.l,Math.min(u-f.r,At)),rt=p.invert(Y);let at=0,st=1/0;for(let _t=0;_t<r.length;_t++){const Xt=Math.abs(+r[_t].time-rt);Xt<st&&(st=Xt,at=_t)}const ft=+r[at].time,Tt=at/(n.length-1)*100;console.log(`🟣 Timeline click → ${Tt.toFixed(1)} % of path`),console.log(`    ↳ frame index: ${at}   |   time: ${ft}`),c.value=at,c.dispatchEvent(new Event("input"))}const S=e.filter(B=>B.centroid?.length===2).map(B=>{const ut=_.filter(At=>Math.hypot(At.x-B.centroid[0],At.z-B.centroid[1])<=B.radius);return{t0:rl(ut,At=>At.t),t1:dn(ut,At=>At.t)}}).filter(B=>isFinite(B.t0)&&isFinite(B.t1));d.append("g").selectAll("rect").data(S).enter().append("rect").attr("x",B=>p(B.t0)).attr("width",B=>p(B.t1)-p(B.t0)).attr("y",f.t).attr("height",h-f.t-f.b).attr("fill","orange").attr("fill-opacity",.25).style("pointer-events","none");const x=new Set(t.map(B=>+B.collision_time)),b=_.filter(B=>x.has(B.t)),z=.025;d.append("defs").append("radialGradient").attr("id","collGlow").attr("r","100%").selectAll("stop").data([{offset:"50%",color:"red"},{offset:"100%",color:"white"}]).enter().append("stop").attr("offset",B=>B.offset).attr("stop-color",B=>B.color),d.append("g").selectAll("circle").data(b).enter().append("circle").attr("cx",B=>p(B.t)).attr("cy",B=>E(B.cumDist)).attr("r",20).attr("fill","url(#collGlow)").attr("opacity",z).style("pointer-events","none");const O=B=>{const ut=B.collider_b?.match(/cube\s*\((\d+)\)/);return ut?+ut[1]:B.collider_b==="cube"?0:null},J=[...new Set(t.map(O).filter(B=>B!==null))].map(B=>i[B]).filter(Boolean),Z=d.append("g").attr("id","hitBoxes"),nt=d.append("g").attr("id","leaderLines"),$=d.append("g").attr("id","leaderDots");function G(B){const ut=i.indexOf(B);return+t.find(At=>O(At)===ut)?.collision_time||0}Z.selectAll("rect").data(J).enter().append("rect").attr("x",B=>(it(G(B))?.x??T(G(B)))-s/2).attr("y",h-f.b+o).attr("width",s).attr("height",a).attr("fill","hotpink").attr("stroke","#333").attr("stroke-width",.5).append("title").text((B,ut)=>`Box ${ut} first hit`),nt.selectAll("line").data(J).enter().append("line").attr("x1",B=>it(G(B)).x).attr("y1",h-f.b+o).attr("x2",B=>it(G(B)).x).attr("y2",B=>it(G(B)).y).attr("stroke","hotpink").attr("stroke-width",1.5).attr("stroke-dasharray","3,2"),$.selectAll("circle").data(J).enter().append("circle").attr("cx",B=>it(G(B)).x).attr("cy",B=>it(G(B)).y).attr("r",3.5).attr("fill","black");function it(B){let ut=1/0,At=null;for(const[Y,rt]of P){const at=Math.abs(B-Y);at<ut&&(ut=at,At=rt)}return At}}function Xu(n){ye=null,Vn("#viz").selectAll("*").remove(),document.getElementById("viewer3DContainer").innerHTML="",Promise.all([As(`${si}skeleton_tracking_${n}.csv`),As(`${si}centroid_data_${n}_tracking.csv`),As(`${si}centroid_data_${n}_collisions.csv`),bS(`${si}skeleton_hierarchy_${n}.json`),As(`${si}behaviours.csv`)]).then(([t,e,i,r,s])=>{Ji=e,Tl=i,window.globalTrackCSV=e,window.globalCollCSV=i,window.dwellThreshold=ji,Hs=s.map(c=>({name:c[Object.keys(c)[1]],description:c[Object.keys(c)[2]]})),wE(t,e,i,r,n),typeof dwellSlider<"u"&&dwellSlider.oninput&&dwellSlider.oninput();const a=xf(e,ks,vE);window._dwellZones=a,a?.length&&window._rects3D&&EE(Ji,Tl,a,window._rects3D,t),ki&&window._dwellZones.length&&typeof window._scaleX=="function"&&typeof window._scaleZ=="function"&&fo(window._dwellZones,window._scaleX,window._scaleZ),ki&&a.length&&typeof window._scaleX=="function"&&typeof window._scaleZ=="function"&&fo(a,window._scaleX,window._scaleZ);const o=document.getElementById("toggleHeatmap");if(o){o.disabled=!1;let c=!1;o.onclick=()=>{c=!c,o.textContent="Toggle Interaction Heat-map",c?SE(i,window._rects3D,window._scaleX,window._scaleZ):Vn("#layer-heatmap").remove()}}const l=document.getElementById("toggleDwellHeatmap");if(l&&(l.disabled=!1,l.onclick=()=>{ki=!ki,l.textContent="Toggle Dwell Heat-map",ki?fo(window._dwellZones,window._scaleX,window._scaleZ):Vn("#layer-dwell-heatmap").remove()}),typeof dwellSlider<"u"&&dwellSlider.oninput&&dwellSlider.oninput(),typeof window.refreshSliderTicks=="function"&&window.refreshSliderTicks(),typeof cr=="function"){const c=+document.getElementById("stepSlider")?.value||0,u=+document.getElementById("skeletonSlider")?.value||1;cr(c,u)}}).catch(t=>{alert("Failed to load data (see console)"),console.error(t)})}function $u(){if(ye)return ye;const n=document.getElementById("viewer3DContainer");if(!n){console.warn("viewer3DContainer missing");return}const t=new Xd,e=new V0({antialias:!0});e.setSize(n.clientWidth,n.clientHeight),n.appendChild(e.domElement),t.background=new Yt(16777215);const i=new gh,r=new W0(i,e.domElement);r.enablePan=!0,r.enableZoom=!0,r.enableRotate=!0,t.add(new ip(16777215,3355443,1));const s=new Ar;return t.add(s),ye={scene:t,group:s,cam:i,renderer:e,controls:r,dwellAnims:[]},function a(){requestAnimationFrame(a),r.update(),e.render(t,i)}(),ye}function wE(n,t,e,i,r){document.querySelector("input[type=range][disabled]")?.removeAttribute("disabled");const s=document.getElementById("stepSlider"),a=document.getElementById("skeletonSlider");document.getElementById("stepValue"),document.getElementById("skeletonValue");function o(G,it){window.refreshSliderTicks=()=>{const rt=(()=>{const at=new Set,st=Ji.map(Tt=>({x:+Tt.centroidA_x,z:+Tt.centroidA_z,t:Tt.time})).filter(Tt=>isFinite(Tt.x)&&isFinite(Tt.z)),ft=new Set;for(let Tt=0;Tt<st.length;Tt++){const{x:_t,z:Xt,t:qt}=st[Tt];if(ft.has(qt))continue;const kt=st.filter(R=>Math.hypot(R.x-_t,R.z-Xt)<=ks&&!ft.has(R.t));kt.length<ji||kt.forEach(R=>{at.add(R.t),ft.add(R.t)})}return at})();document.querySelectorAll("#collisionTicks, #dwellTicks").forEach(at=>at.remove()),o(G,rt)};const B=document.createElement("div");B.id="hullSliderWrapper",B.style.cssText=`
      position:relative;
      width:1000px;
      height:60px;
      margin-top:6px;
    `,s.parentNode.insertBefore(B,s),B.appendChild(s),s.style.width="100%",s.style.margin="0",s.style.position="relative",s.style.zIndex="1";const ut=rt=>{const at=document.createElement("div");return at.dataset.tickLayer="yes",at.style.cssText=`
        position:absolute;
        left:0; top:${rt}px;
        width:100%; height:12px;
        pointer-events:none;
        z-index:2;
      `,B.appendChild(at),at},At=ut(22);At.id="collisionTicks";const Y=ut(38);Y.id="dwellTicks",z.forEach((rt,at)=>{const st=at/(z.length-1)*100;if(G.has(rt)){const ft=document.createElement("div");ft.style.cssText=`
          position:absolute;
          left:${st}%;
          top:0;
          width:2px; height:100%;
          background:red;
          transform:translateX(-50%);
          cursor:pointer;
          pointer-events:auto;
        `,ft.title=`Collision @ frame ${at}`,ft.onclick=()=>{s.value=at,s.dispatchEvent(new Event("input"))},At.appendChild(ft)}if(it.has(rt)){const ft=document.createElement("div");ft.style.cssText=`
          position:absolute;
          left:${st}%;
          top:0;
          width:2px; height:100%;
          background:gold;
          transform:translateX(-50%);
          cursor:pointer;
          pointer-events:auto;
        `,ft.title=`Dwell zone @ frame ${at}`,ft.onclick=()=>{s.value=at,s.dispatchEvent(new Event("input"))},Y.appendChild(ft)}})}const l=i.keys.map((G,it)=>[i.values[it],G]).filter(([G])=>G&&G!=="null"),u=ru(t,G=>G.time).get(t[0].time).map(G=>({x0:+G.boundsB_min_world_x,x1:+G.boundsB_max_world_x,z0:+G.boundsB_min_world_z,z1:+G.boundsB_max_world_z,height:+G.boundsB_max_world_y||.01}));let h=[],f=[];t.forEach(G=>{h.push(+G.centroidA_x),f.push(+G.centroidA_z)}),n.forEach(G=>{i.keys.forEach(it=>{h.push(+G[`${it}_x`]),f.push(+G[`${it}_z`])})}),u.forEach(({x0:G,x1:it,z0:B,z1:ut})=>{h.push(G,it),f.push(B,ut)});const d=rl(h),_=dn(h),v=rl(f),m=dn(f),E=Math.max(_-d,m-v)+1*2,T=(d+_)/2,y=(v+m)/2,D=[T-E/2,T+E/2],P=[y-E/2,y+E/2],A=Vn("#viz").attr("width",1e3).attr("height",1e3),C=Ki().domain(D).range([0,1e3]),S=Ki().domain(P).range([0,1e3]);window._rects3D=u,window._scaleX=C,window._scaleZ=S,A.append("g").attr("id","layer-static-boxes"),A.append("g").attr("id","layer-gray-skeletons"),A.append("g").attr("id","layer-blue-skeletons"),A.append("g").attr("id","layer-dwell-circles"),A.append("g").attr("id","layer-mesh"),A.append("g").attr("id","layer-hull-lines");const x=A.select("#layer-static-boxes");x.selectAll("*").remove(),u.forEach(({x0:G,x1:it,z0:B,z1:ut})=>{x.append("rect").attr("x",C(G)).attr("y",S(B)).attr("width",C(it)-C(G)).attr("height",S(ut)-S(B)).attr("fill","pink").attr("fill-opacity",.4).attr("stroke","gray").attr("stroke-width",.5)});const b=ru(n,G=>G.time),z=[...b.keys()].sort((G,it)=>+G-+it),O=new Set(e.map(G=>G.collision_time)),K=(()=>{const G=new Set,it=t.map(ut=>({x:+ut.centroidA_x,z:+ut.centroidA_z,t:ut.time})).filter(ut=>isFinite(ut.x)&&isFinite(ut.z)),B=new Set;for(let ut=0;ut<it.length;ut++){const{x:At,z:Y,t:rt}=it[ut];if(B.has(rt))continue;const at=it.filter(st=>Math.hypot(st.x-At,st.z-Y)<=ks&&!B.has(st.t));at.length<ji||at.forEach(st=>{G.add(st.t),B.add(st.t)})}return G})();o(O,K),[...new Set(e.map(G=>G.collision_time))].filter(G=>{const it=b.get(G)?.[0];if(!it)return!1;const B=i.keys.map(ut=>{const At=it[`${ut}_x`],Y=it[`${ut}_z`];return At&&Y?[+At,+Y]:null}).filter(Boolean);return B.length>=3&&Hu(B)}),s.max=z.length-1,s.oninput=a.oninput=function(){const G=+s.value,it=+a.value;if(cr(G,it),ye&&window.globalSkelCSV){const B=globalSkelCSV[G];B&&nt(B,u,i,br,currentTimestamp,window._dwellZones)}};function J(G,it){A.selectAll("path,line,circle").remove();const B=(()=>{const H=[],j=t.map(w=>({x:+w.centroidA_x,z:+w.centroidA_z,t:w.time})).filter(w=>isFinite(w.x)&&isFinite(w.z)),xt=new Set;for(let w=0;w<j.length;w++){const{x:g,z:L,t:k}=j[w];if(xt.has(k))continue;const q=j.filter(({x:pt,z:Mt,t:et})=>Math.hypot(pt-g,Mt-L)<=ks&&!xt.has(et));if(q.length<ji)continue;q.forEach(({t:pt})=>xt.add(pt));const V=[];for(const{t:pt}of q){const Mt=n.find(et=>et.time===pt);Mt&&i.keys.forEach(et=>{const St=+Mt[`${et}_x`],Lt=+Mt[`${et}_z`];isFinite(St)&&isFinite(Lt)&&V.push([St,Lt])})}const gt=[Ks(V,pt=>pt[0]),Ks(V,pt=>pt[1])],dt=dn(V,([pt,Mt])=>Math.hypot(pt-gt[0],Mt-gt[1]));H.push({centroid:gt,radius:dt})}return H})();for(let H=0;H<z.length;H+=it){const j=b.get(z[H])?.[0];if(!j)continue;const xt={};br.flat().forEach(L=>{j[`${L}_x`]&&(xt[L]=[+j[`${L}_x`],+j[`${L}_z`]])}),!(Object.values(xt).filter(([L,k])=>B.some(({centroid:[q,V],radius:gt})=>Math.hypot(L-q,k-V)<=gt)).length>=15)&&br.forEach(([L,k])=>{xt[L]&&xt[k]&&A.select("#layer-gray-skeletons").append("line").attr("x1",C(xt[L][0])).attr("y1",S(xt[L][1])).attr("x2",C(xt[k][0])).attr("y2",S(xt[k][1])).attr("stroke","lightpink").attr("stroke-width",1).lower()})}for(let H=0;H<z.length;H+=it){const j=b.get(z[H])?.[0];if(!j)continue;const xt={};br.flat().forEach(L=>{j[`${L}_x`]&&(xt[L]=[+j[`${L}_x`],+j[`${L}_z`]])}),Object.values(xt).filter(([L,k])=>B.some(({centroid:[q,V],radius:gt})=>Math.hypot(L-q,k-V)<=gt)).length>=10&&br.forEach(([L,k])=>{xt[L]&&xt[k]&&A.select("#layer-blue-skeletons").append("line").attr("x1",C(xt[L][0])).attr("y1",S(xt[L][1])).attr("x2",C(xt[k][0])).attr("y2",S(xt[k][1])).attr("stroke","purple").attr("stroke-width",1)})}const ut=[];window.addEventListener("scroll",()=>ut.forEach(H=>H.updateLine())),window.addEventListener("resize",()=>ut.forEach(H=>H.updateLine()));function At(H,j){return!(H.right<j.left||H.left>j.right||H.bottom<j.top||H.top>j.bottom)}function Y(H,j=10){let xt=0;for(;xt++<100;){const w=H.getBoundingClientRect();if(!ut.find(L=>At(w,L.div.getBoundingClientRect())))return;H.style.left=`${w.left+40}px`,H.style.top=`${w.top+40}px`}}function rt(H){const j=document.getElementById("viz").getBoundingClientRect(),xt=H.getBoundingClientRect(),w=j.left,g=j.right-xt.width,L=j.top,k=j.bottom-xt.height;let q=Math.min(Math.max(xt.left,w),g),V=Math.min(Math.max(xt.top,L),k);H.style.left=`${q}px`,H.style.top=`${V}px`}function at(H,j=10){let xt=0,w=!0;for(;w&&xt++<100;){w=!1;const g=H.getBoundingClientRect();for(const L of ut){if(L.div===H)continue;const k=L.div.getBoundingClientRect();if(!At(g,k))continue;const q=g.left-k.right-j,V=g.right-k.left+j,gt=g.top-k.bottom-j,dt=g.bottom-k.top+j,pt=Math.abs(q)<Math.abs(V)?q:V,Mt=Math.abs(gt)<Math.abs(dt)?gt:dt;Math.abs(pt)<Math.abs(Mt)?L.div.style.left=`${L.div.offsetLeft+pt}px`:L.div.style.top=`${L.div.offsetTop+Mt}px`,w=!0,requestAnimationFrame(L.updateLine)}}}B.forEach(({centroid:[H,j],radius:xt})=>{const w=Hs.length?Hs[Math.floor(Math.random()*Hs.length)]:{name:"Unknown",description:"No behavior data loaded."},g=A.select("#layer-dwell-circles").append("circle").attr("cx",C(H)).attr("cy",S(j)).attr("r",0).attr("fill","orange").attr("fill-opacity",.12).style("cursor","pointer").on("click",function(){const k=this,q=document.getElementById("viz").getBoundingClientRect(),V=q.left+window.scrollX,gt=q.top+window.scrollY,dt=V+q.width,pt=gt+q.height,Mt=k.getBoundingClientRect(),et=Mt.left+window.scrollX+Mt.width/2,St=Mt.top+window.scrollY+Mt.height/2,Pt=+k.getAttribute("r")*1.1,ot=document.createElement("div");ot.className="dwell-popup",ot.innerHTML=`<b>${w.name}</b><br>${w.description}`,Object.assign(ot.style,{position:"absolute",left:"-9999px",top:"-9999px",maxWidth:"300px",padding:"10px",background:"#fff",border:"1px solid #ccc",borderRadius:"6px",fontSize:"13px",color:"#333",boxShadow:"0 2px 8px rgba(0,0,0,0.25)",cursor:"move",zIndex:9999}),document.body.appendChild(ot);const Ft=ot.getBoundingClientRect(),I=Ft.width,vt=Ft.height;let lt=et+Pt,Et=St+Pt/2;const ct=10,Q=V+ct,bt=dt-I-ct,Bt=gt+ct,ie=pt-vt-ct;lt=Math.min(Math.max(lt,Q),bt),Et=Math.min(Math.max(Et,Bt),ie),ot.style.left=`${lt}px`,ot.style.top=`${Et}px`,requestAnimationFrame(()=>{ot.scrollIntoView({behavior:"smooth",block:"nearest"})});const Jt=document.getElementById("overlay-line-layer"),ue=document.createElementNS("http://www.w3.org/2000/svg","line");if(ue.setAttribute("stroke","#333"),ue.setAttribute("stroke-width","1.5"),ue.setAttribute("stroke-dasharray","4 2"),Jt.appendChild(ue),ye){ye.group.children=ye.group.children.filter(Le=>Le.name==="dwellText"?(ye.group.remove(Le),!1):!0);const de=new N(H,.2,j);yE(w.name,de)}function De(){const de=k.getBoundingClientRect(),Le=de.left+window.scrollX+de.width*.5,gi=de.top+window.scrollY+de.height*.5;ue.setAttribute("x1",Le),ue.setAttribute("y1",gi),ue.setAttribute("x2",ot.offsetLeft),ue.setAttribute("y2",ot.offsetTop+ot.offsetHeight*.5)}requestAnimationFrame(()=>{Y(ot),rt(ot),at(ot),rt(ot),De(),ut.push({div:ot,line:ue,circle:k,updateLine:De})});let $n=!1,dr=0,an=0;ot.addEventListener("mousedown",de=>{$n=!0,dr=de.clientX-ot.offsetLeft,an=de.clientY-ot.offsetTop,de.preventDefault()}),document.addEventListener("mousemove",de=>{$n&&(ot.style.left=`${de.clientX-dr}px`,ot.style.top=`${de.clientY-an}px`,requestAnimationFrame(De))}),document.addEventListener("mouseup",()=>{$n&&($n=!1,at(ot),rt(ot))}),document.addEventListener("keydown",de=>{de.key==="Escape"&&(ut.forEach(({div:Le,line:gi})=>{Le.remove(),gi.remove()}),ut.length=0,ye.group.children=ye.group.children.filter(Le=>Le.name==="dwellText"||Le.name==="dwellLeaderLine"?(ye.group.remove(Le),!1):!0))})}),L=C(H+xt)-C(H);g.transition().duration(800).attr("r",L).transition().duration(500).ease(Ky).attr("r",L*1.05).transition().duration(500).attr("r",L)});const ft=[...b.keys()].sort((H,j)=>+H-+j)[G],Tt=b.get(ft)?.[0];if(!Tt)return;const _t=+Tt.centroidA_x,Xt=+Tt.centroidA_z;B.some(({centroid:[H,j],radius:xt})=>Math.hypot(_t-H,Xt-j)<=xt);const qt=e.some(H=>H.collision_time===ft),kt=$(Tt.time),R=`${si}${Gu}${r}/${kt}`;fetch(R).then(H=>H.ok?H.json():Promise.reject("mesh missing")).then(H=>Z(A,C,S,H,1.5,Tt,r,u,B,qt)).catch(H=>console.warn("2D mesh load error:",H));const Gt=i.keys.map(H=>{const j=Tt[`${H}_x`],xt=Tt[`${H}_z`];return j&&xt?[+j,+xt]:null}).filter(Boolean),Nt=Hu(Gt);if(!Nt)return;Nt.push(Nt[0]);const Wt=[];for(let H=0;H<Nt.length-1;H++)Wt.push([Nt[H],Nt[H+1]]);const tt=[];A.selectAll("rect").each(function(){const H=this.getBBox(),j=C.invert(H.x+H.width/2),xt=S.invert(H.y+H.height/2);for(const[w,g]of Wt){const L=ME(j,xt,w[0],w[1],g[0],g[1]);tt.push({edge:[w,g],dist:L,rect:H})}});const Rt=tt.sort((H,j)=>H.dist-j.dist).slice(0,2);qt&&Rt.forEach(({edge:H,rect:j})=>{H.forEach(([xt,w])=>{const g=[C.invert(Math.max(j.x,Math.min(C(xt),j.x+j.width))),S.invert(Math.max(j.y,Math.min(S(w),j.y+j.height)))],L=Math.hypot(xt-g[0],w-g[1]),k=[(xt+g[0])/2,(w+g[1])/2];A.append("circle").attr("cx",C(g[0])).attr("cy",S(g[1])).attr("r",5).attr("fill","black").raise(),A.select("#layer-hull-lines").append("circle").attr("cx",C(k[0])).attr("cy",S(k[1])).attr("r",0).attr("fill","none").attr("stroke","red").attr("stroke-width",1.5).transition().duration(1e3).attr("r",C(L/2)-C(0)).selection().raise()}),A.select("#layer-hull-lines").append("line").attr("x1",C(H[0][0])).attr("y1",S(H[0][1])).attr("x2",C(H[1][0])).attr("y2",S(H[1][1])).attr("stroke","black").attr("stroke-width",3).raise()}),ye&&nt(Tt,u,i,l,r,B)}cr=J,$u(),J(0,+document.getElementById("skeletonSlider").value||1);function Z(G,it,B,ut,At=1.5,Y,rt,at,st,ft=!1){const Tt=G.select("#layer-mesh");Tt.selectAll("*").remove();const _t=ut.vertices,Xt=ut.triangles;let qt=[],kt=0;if(ft){const R=at.map(Gt=>({x:(Gt.x0+Gt.x1)/2,z:(Gt.z0+Gt.z1)/2}));for(let Gt=0;Gt<_t.length;Gt+=3){const Nt=_t[Gt],Wt=_t[Gt+2];let tt=1/0;for(const{x:Rt,z:H}of R){const j=Math.hypot(Nt-Rt,Wt-H);j<tt&&(tt=j)}qt.push(tt),tt>kt&&(kt=tt)}}for(let R=0;R<Xt.length;R+=3){const Gt=Xt[R],Nt=Xt[R+1],Wt=Xt[R+2],tt=_t[Gt*3+1],Rt=_t[Nt*3+1],H=_t[Wt*3+1];if(Math.min(tt,Rt,H)<At)continue;const j=it(_t[Gt*3]),xt=B(_t[Gt*3+2]),w=it(_t[Nt*3]),g=B(_t[Nt*3+2]),L=it(_t[Wt*3]),k=B(_t[Wt*3+2]);let q="gray";if(ft){const V=qt[Gt],gt=qt[Nt],dt=qt[Wt],pt=1-(V+gt+dt)/(3*kt);q=`rgb(255,${Math.pow(1-pt,3.5)*255},0)`}Tt.append("path").attr("d",`M${j},${xt} L${w},${g} L${L},${k} Z`).attr("fill",q).attr("fill-opacity",.75)}}function nt(G,it,B,ut,At,Y=[]){const rt=$u();if(!rt)return;const{group:at,cam:st,controls:ft,renderer:Tt}=rt;at.clear(),rt.dwellAnims.length=0;const _t=new pa({color:16753920,transparent:!0,opacity:.5,side:ln});Y.forEach(({centroid:[tt,Rt],radius:H})=>{const xt=new ma(H,H,.2,32,1,!1),w=new Oe(xt,_t);w.position.set(tt,.2/2,Rt),at.add(w)});const Xt=++Wu,qt=$(G.time),kt=`${si}${Gu}${At}/${qt}`;fetch(kt).then(tt=>tt.ok?tt.json():Promise.reject(`404 ${qt}`)).then(tt=>{if(Xt!==Wu)return;const Rt=new Be;Rt.setAttribute("position",new Ye(tt.vertices,3)),Rt.setIndex(tt.triangles),Rt.computeVertexNormals();const H=new Float32Array(tt.vertices.length),j=it[0],xt=new N((j.x0+j.x1)/2,j.height/2,(j.z0+j.z1)/2),w=[];let g=0;for(let k=0;k<tt.vertices.length;k+=3){const V=new N(tt.vertices[k],tt.vertices[k+1],tt.vertices[k+2]).distanceTo(xt);w.push(V),V>g&&(g=V)}w.forEach((k,q)=>{const V=1-k/g,gt=1,dt=Math.pow(1-V,3.5),pt=0;H[q*3]=gt,H[q*3+1]=dt,H[q*3+2]=pt}),Rt.setAttribute("color",new $e(H,3));const L=new Oe(Rt,new Jd({vertexColors:!0,metalness:.1,roughness:.75,transparent:!0,opacity:.9}));at.add(L),Wt()}).catch(tt=>console.warn("Mesh load:",tt));const R=new Qd({color:16224767,transparent:!0,opacity:.75,depthWrite:!1});it.forEach(tt=>{const Rt=new hr(tt.x1-tt.x0,tt.height,tt.z1-tt.z0),H=new Oe(Rt,R);H.position.set(tt.x0+(tt.x1-tt.x0)/2,tt.height/2,tt.z0+(tt.z1-tt.z0)/2),at.add(H)});const Gt={};B.keys.forEach(tt=>{const Rt=+G[`${tt}_x`],H=+G[`${tt}_y`],j=+G[`${tt}_z`];isFinite(Rt)&&isFinite(H)&&isFinite(j)&&(Gt[tt]=new N(Rt,H,j))});const Nt=new el({color:16777215});if(ut.forEach(([tt,Rt])=>{Gt[tt]&&Gt[Rt]&&at.add(new Ac(new Be().setFromPoints([Gt[tt],Gt[Rt]]),Nt))}),Ji?.length>1){const tt=Ji.map(j=>new N(+j.centroidA_x,.01,+j.centroidA_z)).filter(j=>isFinite(j.x)&&isFinite(j.z)),Rt=new Be().setFromPoints(tt),H=new el({color:16711680});at.add(new Ac(Rt,H))}function Wt(){const tt=new ur().setFromObject(at),Rt=tt.getCenter(new N),H=tt.getSize(new N),j=Math.max(H.x,H.y,H.z)*.6,xt=Tt.domElement.width/Tt.domElement.height;st.left=-j*xt,st.right=j*xt,st.top=j,st.bottom=-j,st.near=.1,st.far=1e3,st.updateProjectionMatrix();const w=j*2.5;st.position.set(Rt.x+w,Rt.y+w,Rt.z+w),st.lookAt(Rt),ft.target.copy(Rt),ft.update()}}function $(G){const[it,B="0"]=G.split("."),ut=parseInt(it,10).toString(),At=B.padEnd(2,"0").slice(0,2);return`mesh_${ut}_${At}.json`}}
