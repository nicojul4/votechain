(()=>{var eM=Object.create;var o0=Object.defineProperty;var nM=Object.getOwnPropertyDescriptor;var iM=Object.getOwnPropertyNames;var aM=Object.getPrototypeOf,sM=Object.prototype.hasOwnProperty;var xa=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var rM=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of iM(t))!sM.call(e,a)&&a!==n&&o0(e,a,{get:()=>t[a],enumerable:!(i=nM(t,a))||i.enumerable});return e};var bc=(e,t,n)=>(n=e!=null?eM(aM(e)):{},rM(t||!e||!e.__esModule?o0(n,"default",{value:e,enumerable:!0}):n,e));var y0=xa(Vt=>{"use strict";var Zf=Symbol.for("react.transitional.element"),oM=Symbol.for("react.portal"),lM=Symbol.for("react.fragment"),cM=Symbol.for("react.strict_mode"),uM=Symbol.for("react.profiler"),hM=Symbol.for("react.consumer"),fM=Symbol.for("react.context"),dM=Symbol.for("react.forward_ref"),pM=Symbol.for("react.suspense"),mM=Symbol.for("react.memo"),f0=Symbol.for("react.lazy"),gM=Symbol.for("react.activity"),l0=Symbol.iterator;function vM(e){return e===null||typeof e!="object"?null:(e=l0&&e[l0]||e["@@iterator"],typeof e=="function"?e:null)}var d0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},p0=Object.assign,m0={};function cr(e,t,n){this.props=e,this.context=t,this.refs=m0,this.updater=n||d0}cr.prototype.isReactComponent={};cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function g0(){}g0.prototype=cr.prototype;function Kf(e,t,n){this.props=e,this.context=t,this.refs=m0,this.updater=n||d0}var Jf=Kf.prototype=new g0;Jf.constructor=Kf;p0(Jf,cr.prototype);Jf.isPureReactComponent=!0;var c0=Array.isArray;function Yf(){}var Te={H:null,A:null,T:null,S:null},v0=Object.prototype.hasOwnProperty;function Qf(e,t,n){var i=n.ref;return{$$typeof:Zf,type:e,key:t,ref:i!==void 0?i:null,props:n}}function yM(e,t){return Qf(e.type,t,e.props)}function jf(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zf}function _M(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var u0=/\/+/g;function qf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?_M(""+e.key):t.toString(36)}function xM(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Yf,Yf):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function lr(e,t,n,i,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Zf:case oM:r=!0;break;case f0:return r=e._init,lr(r(e._payload),t,n,i,a)}}if(r)return a=a(e),r=i===""?"."+qf(e,0):i,c0(a)?(n="",r!=null&&(n=r.replace(u0,"$&/")+"/"),lr(a,t,n,"",function(c){return c})):a!=null&&(jf(a)&&(a=yM(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(u0,"$&/")+"/")+r)),t.push(a)),1;r=0;var o=i===""?".":i+":";if(c0(e))for(var l=0;l<e.length;l++)i=e[l],s=o+qf(i,l),r+=lr(i,t,n,s,a);else if(l=vM(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,s=o+qf(i,l++),r+=lr(i,t,n,s,a);else if(s==="object"){if(typeof e.then=="function")return lr(xM(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Sc(e,t,n){if(e==null)return e;var i=[],a=0;return lr(e,i,"","",function(s){return t.call(n,s,a++)}),i}function bM(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var h0=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},SM={map:Sc,forEach:function(e,t,n){Sc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Sc(e,function(){t++}),t},toArray:function(e){return Sc(e,function(t){return t})||[]},only:function(e){if(!jf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Vt.Activity=gM;Vt.Children=SM;Vt.Component=cr;Vt.Fragment=lM;Vt.Profiler=uM;Vt.PureComponent=Kf;Vt.StrictMode=cM;Vt.Suspense=pM;Vt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Te;Vt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Te.H.useMemoCache(e)}};Vt.cache=function(e){return function(){return e.apply(null,arguments)}};Vt.cacheSignal=function(){return null};Vt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=p0({},e.props),a=e.key;if(t!=null)for(s in t.key!==void 0&&(a=""+t.key),t)!v0.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];i.children=r}return Qf(e.type,a,i)};Vt.createContext=function(e){return e={$$typeof:fM,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:hM,_context:e},e};Vt.createElement=function(e,t,n){var i,a={},s=null;if(t!=null)for(i in t.key!==void 0&&(s=""+t.key),t)v0.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return Qf(e,s,a)};Vt.createRef=function(){return{current:null}};Vt.forwardRef=function(e){return{$$typeof:dM,render:e}};Vt.isValidElement=jf;Vt.lazy=function(e){return{$$typeof:f0,_payload:{_status:-1,_result:e},_init:bM}};Vt.memo=function(e,t){return{$$typeof:mM,type:e,compare:t===void 0?null:t}};Vt.startTransition=function(e){var t=Te.T,n={};Te.T=n;try{var i=e(),a=Te.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Yf,h0)}catch(s){h0(s)}finally{t!==null&&n.types!==null&&(t.types=n.types),Te.T=t}};Vt.unstable_useCacheRefresh=function(){return Te.H.useCacheRefresh()};Vt.use=function(e){return Te.H.use(e)};Vt.useActionState=function(e,t,n){return Te.H.useActionState(e,t,n)};Vt.useCallback=function(e,t){return Te.H.useCallback(e,t)};Vt.useContext=function(e){return Te.H.useContext(e)};Vt.useDebugValue=function(){};Vt.useDeferredValue=function(e,t){return Te.H.useDeferredValue(e,t)};Vt.useEffect=function(e,t){return Te.H.useEffect(e,t)};Vt.useEffectEvent=function(e){return Te.H.useEffectEvent(e)};Vt.useId=function(){return Te.H.useId()};Vt.useImperativeHandle=function(e,t,n){return Te.H.useImperativeHandle(e,t,n)};Vt.useInsertionEffect=function(e,t){return Te.H.useInsertionEffect(e,t)};Vt.useLayoutEffect=function(e,t){return Te.H.useLayoutEffect(e,t)};Vt.useMemo=function(e,t){return Te.H.useMemo(e,t)};Vt.useOptimistic=function(e,t){return Te.H.useOptimistic(e,t)};Vt.useReducer=function(e,t,n){return Te.H.useReducer(e,t,n)};Vt.useRef=function(e){return Te.H.useRef(e)};Vt.useState=function(e){return Te.H.useState(e)};Vt.useSyncExternalStore=function(e,t,n){return Te.H.useSyncExternalStore(e,t,n)};Vt.useTransition=function(){return Te.H.useTransition()};Vt.version="19.2.8"});var ur=xa((DR,_0)=>{"use strict";_0.exports=y0()});var R0=xa(De=>{"use strict";function nd(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,a=e[i];if(0<Mc(a,t))e[i]=t,e[n]=a,n=i;else break t}}function Ai(e){return e.length===0?null:e[0]}function Tc(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,a=e.length,s=a>>>1;i<s;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>Mc(o,n))l<a&&0>Mc(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<a&&0>Mc(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Mc(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}De.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(x0=performance,De.unstable_now=function(){return x0.now()}):($f=Date,b0=$f.now(),De.unstable_now=function(){return $f.now()-b0});var x0,$f,b0,Vi=[],ba=[],MM=1,Qn=null,dn=3,id=!1,Bo=!1,zo=!1,ad=!1,E0=typeof setTimeout=="function"?setTimeout:null,T0=typeof clearTimeout=="function"?clearTimeout:null,S0=typeof setImmediate<"u"?setImmediate:null;function Ec(e){for(var t=Ai(ba);t!==null;){if(t.callback===null)Tc(ba);else if(t.startTime<=e)Tc(ba),t.sortIndex=t.expirationTime,nd(Vi,t);else break;t=Ai(ba)}}function sd(e){if(zo=!1,Ec(e),!Bo)if(Ai(Vi)!==null)Bo=!0,fr||(fr=!0,hr());else{var t=Ai(ba);t!==null&&rd(sd,t.startTime-e)}}var fr=!1,Fo=-1,A0=5,w0=-1;function C0(){return ad?!0:!(De.unstable_now()-w0<A0)}function td(){if(ad=!1,fr){var e=De.unstable_now();w0=e;var t=!0;try{t:{Bo=!1,zo&&(zo=!1,T0(Fo),Fo=-1),id=!0;var n=dn;try{e:{for(Ec(e),Qn=Ai(Vi);Qn!==null&&!(Qn.expirationTime>e&&C0());){var i=Qn.callback;if(typeof i=="function"){Qn.callback=null,dn=Qn.priorityLevel;var a=i(Qn.expirationTime<=e);if(e=De.unstable_now(),typeof a=="function"){Qn.callback=a,Ec(e),t=!0;break e}Qn===Ai(Vi)&&Tc(Vi),Ec(e)}else Tc(Vi);Qn=Ai(Vi)}if(Qn!==null)t=!0;else{var s=Ai(ba);s!==null&&rd(sd,s.startTime-e),t=!1}}break t}finally{Qn=null,dn=n,id=!1}t=void 0}}finally{t?hr():fr=!1}}}var hr;typeof S0=="function"?hr=function(){S0(td)}:typeof MessageChannel<"u"?(ed=new MessageChannel,M0=ed.port2,ed.port1.onmessage=td,hr=function(){M0.postMessage(null)}):hr=function(){E0(td,0)};var ed,M0;function rd(e,t){Fo=E0(function(){e(De.unstable_now())},t)}De.unstable_IdlePriority=5;De.unstable_ImmediatePriority=1;De.unstable_LowPriority=4;De.unstable_NormalPriority=3;De.unstable_Profiling=null;De.unstable_UserBlockingPriority=2;De.unstable_cancelCallback=function(e){e.callback=null};De.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A0=0<e?Math.floor(1e3/e):5};De.unstable_getCurrentPriorityLevel=function(){return dn};De.unstable_next=function(e){switch(dn){case 1:case 2:case 3:var t=3;break;default:t=dn}var n=dn;dn=t;try{return e()}finally{dn=n}};De.unstable_requestPaint=function(){ad=!0};De.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=dn;dn=e;try{return t()}finally{dn=n}};De.unstable_scheduleCallback=function(e,t,n){var i=De.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return a=n+a,e={id:MM++,callback:t,priorityLevel:e,startTime:n,expirationTime:a,sortIndex:-1},n>i?(e.sortIndex=n,nd(ba,e),Ai(Vi)===null&&e===Ai(ba)&&(zo?(T0(Fo),Fo=-1):zo=!0,rd(sd,n-i))):(e.sortIndex=a,nd(Vi,e),Bo||id||(Bo=!0,fr||(fr=!0,hr()))),e};De.unstable_shouldYield=C0;De.unstable_wrapCallback=function(e){var t=dn;return function(){var n=dn;dn=t;try{return e.apply(this,arguments)}finally{dn=n}}}});var U0=xa((NR,D0)=>{"use strict";D0.exports=R0()});var L0=xa(_n=>{"use strict";var EM=ur();function N0(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Sa(){}var yn={d:{f:Sa,r:function(){throw Error(N0(522))},D:Sa,C:Sa,L:Sa,m:Sa,X:Sa,S:Sa,M:Sa},p:0,findDOMNode:null},TM=Symbol.for("react.portal");function AM(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:TM,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Ho=EM.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ac(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}_n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=yn;_n.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(N0(299));return AM(e,t,null,n)};_n.flushSync=function(e){var t=Ho.T,n=yn.p;try{if(Ho.T=null,yn.p=2,e)return e()}finally{Ho.T=t,yn.p=n,yn.d.f()}};_n.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,yn.d.C(e,t))};_n.prefetchDNS=function(e){typeof e=="string"&&yn.d.D(e)};_n.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Ac(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,s=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?yn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&yn.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};_n.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Ac(t.as,t.crossOrigin);yn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&yn.d.M(e)};_n.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Ac(n,t.crossOrigin);yn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};_n.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Ac(t.as,t.crossOrigin);yn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else yn.d.m(e)};_n.requestFormReset=function(e){yn.d.r(e)};_n.unstable_batchedUpdates=function(e,t){return e(t)};_n.useFormState=function(e,t,n){return Ho.H.useFormState(e,t,n)};_n.useFormStatus=function(){return Ho.H.useHostTransitionStatus()};_n.version="19.2.8"});var P0=xa((IR,O0)=>{"use strict";function I0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(I0)}catch(e){console.error(e)}}I0(),O0.exports=L0()});var Zx=xa(Qu=>{"use strict";var Ze=U0(),ly=ur(),wM=P0();function j(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function cy(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Al(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function uy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function hy(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function B0(e){if(Al(e)!==e)throw Error(j(188))}function CM(e){var t=e.alternate;if(!t){if(t=Al(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return B0(a),e;if(s===i)return B0(a),t;s=s.sibling}throw Error(j(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error(j(189))}}if(n.alternate!==i)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function fy(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=fy(e),t!==null)return t;e=e.sibling}return null}var Ce=Object.assign,RM=Symbol.for("react.element"),wc=Symbol.for("react.transitional.element"),Zo=Symbol.for("react.portal"),yr=Symbol.for("react.fragment"),dy=Symbol.for("react.strict_mode"),Hd=Symbol.for("react.profiler"),py=Symbol.for("react.consumer"),Ki=Symbol.for("react.context"),Op=Symbol.for("react.forward_ref"),Vd=Symbol.for("react.suspense"),kd=Symbol.for("react.suspense_list"),Pp=Symbol.for("react.memo"),Ma=Symbol.for("react.lazy"),Gd=Symbol.for("react.activity"),DM=Symbol.for("react.memo_cache_sentinel"),z0=Symbol.iterator;function Vo(e){return e===null||typeof e!="object"?null:(e=z0&&e[z0]||e["@@iterator"],typeof e=="function"?e:null)}var UM=Symbol.for("react.client.reference");function Xd(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===UM?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case yr:return"Fragment";case Hd:return"Profiler";case dy:return"StrictMode";case Vd:return"Suspense";case kd:return"SuspenseList";case Gd:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Zo:return"Portal";case Ki:return e.displayName||"Context";case py:return(e._context.displayName||"Context")+".Consumer";case Op:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Pp:return t=e.displayName||null,t!==null?t:Xd(e.type)||"Memo";case Ma:t=e._payload,e=e._init;try{return Xd(e(t))}catch{}}return null}var Ko=Array.isArray,Pt=ly.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce=wM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,xs={pending:!1,data:null,method:null,action:null},Wd=[],_r=-1;function Ui(e){return{current:e}}function en(e){0>_r||(e.current=Wd[_r],Wd[_r]=null,_r--)}function Se(e,t){_r++,Wd[_r]=e.current,e.current=t}var Di=Ui(null),fl=Ui(null),Ia=Ui(null),ru=Ui(null);function ou(e,t){switch(Se(Ia,t),Se(fl,e),Se(Di,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Wv(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Wv(t),e=Ix(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}en(Di),Se(Di,e)}function Br(){en(Di),en(fl),en(Ia)}function qd(e){e.memoizedState!==null&&Se(ru,e);var t=Di.current,n=Ix(t,e.type);t!==n&&(Se(fl,e),Se(Di,n))}function lu(e){fl.current===e&&(en(Di),en(fl)),ru.current===e&&(en(ru),Ml._currentValue=xs)}var od,F0;function gs(e){if(od===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);od=t&&t[1]||"",F0=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+od+e+F0}var ld=!1;function cd(e,t){if(!e||ld)return"";ld=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(p){var h=p}Reflect.construct(e,[],d)}else{try{d.call()}catch(p){h=p}e.call(d.prototype)}}else{try{throw Error()}catch(p){h=p}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(p){if(p&&h&&typeof p.stack=="string")return[p.stack,h.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var f=`
`+l[i].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=i&&0<=a);break}}}finally{ld=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?gs(n):""}function NM(e,t){switch(e.tag){case 26:case 27:case 5:return gs(e.type);case 16:return gs("Lazy");case 13:return e.child!==t&&t!==null?gs("Suspense Fallback"):gs("Suspense");case 19:return gs("SuspenseList");case 0:case 15:return cd(e.type,!1);case 11:return cd(e.type.render,!1);case 1:return cd(e.type,!0);case 31:return gs("Activity");default:return""}}function H0(e){try{var t="",n=null;do t+=NM(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Yd=Object.prototype.hasOwnProperty,Bp=Ze.unstable_scheduleCallback,ud=Ze.unstable_cancelCallback,LM=Ze.unstable_shouldYield,IM=Ze.unstable_requestPaint,zn=Ze.unstable_now,OM=Ze.unstable_getCurrentPriorityLevel,my=Ze.unstable_ImmediatePriority,gy=Ze.unstable_UserBlockingPriority,cu=Ze.unstable_NormalPriority,PM=Ze.unstable_LowPriority,vy=Ze.unstable_IdlePriority,BM=Ze.log,zM=Ze.unstable_setDisableYieldValue,wl=null,Fn=null;function Ra(e){if(typeof BM=="function"&&zM(e),Fn&&typeof Fn.setStrictMode=="function")try{Fn.setStrictMode(wl,e)}catch{}}var Hn=Math.clz32?Math.clz32:VM,FM=Math.log,HM=Math.LN2;function VM(e){return e>>>=0,e===0?32:31-(FM(e)/HM|0)|0}var Cc=256,Rc=262144,Dc=4194304;function vs(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ou(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=vs(i):(r&=o,r!==0?a=vs(r):n||(n=o&~e,n!==0&&(a=vs(n))))):(o=i&~s,o!==0?a=vs(o):r!==0?a=vs(r):n||(n=i&~e,n!==0&&(a=vs(n)))),a===0?0:t!==0&&t!==a&&(t&s)===0&&(s=a&-a,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:a}function Cl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function kM(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yy(){var e=Dc;return Dc<<=1,(Dc&62914560)===0&&(Dc=4194304),e}function hd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Rl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function GM(e,t,n,i,a,s){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var f=31-Hn(n),d=1<<f;o[f]=0,l[f]=-1;var h=c[f];if(h!==null)for(c[f]=null,f=0;f<h.length;f++){var p=h[f];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&_y(e,i,0),s!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~t))}function _y(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Hn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function xy(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Hn(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function by(e,t){var n=t&-t;return n=(n&42)!==0?1:zp(n),(n&(e.suspendedLanes|t))!==0?0:n}function zp(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Fp(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Sy(){var e=ce.p;return e!==0?e:(e=window.event,e===void 0?32:Wx(e.type))}function V0(e,t){var n=ce.p;try{return ce.p=e,t()}finally{ce.p=n}}var Ya=Math.random().toString(36).slice(2),on="__reactFiber$"+Ya,Dn="__reactProps$"+Ya,Zr="__reactContainer$"+Ya,Zd="__reactEvents$"+Ya,XM="__reactListeners$"+Ya,WM="__reactHandles$"+Ya,k0="__reactResources$"+Ya,Dl="__reactMarker$"+Ya;function Hp(e){delete e[on],delete e[Dn],delete e[Zd],delete e[XM],delete e[WM]}function xr(e){var t=e[on];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Zr]||n[on]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Jv(e);e!==null;){if(n=e[on])return n;e=Jv(e)}return t}e=n,n=e.parentNode}return null}function Kr(e){if(e=e[on]||e[Zr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Jo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(j(33))}function Dr(e){var t=e[k0];return t||(t=e[k0]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function tn(e){e[Dl]=!0}var My=new Set,Ey={};function Ds(e,t){zr(e,t),zr(e+"Capture",t)}function zr(e,t){for(Ey[e]=t,e=0;e<t.length;e++)My.add(t[e])}var qM=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),G0={},X0={};function YM(e){return Yd.call(X0,e)?!0:Yd.call(G0,e)?!1:qM.test(e)?X0[e]=!0:(G0[e]=!0,!1)}function Wc(e,t,n){if(YM(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Uc(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function ki(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function $n(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ty(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ZM(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Kd(e){if(!e._valueTracker){var t=Ty(e)?"checked":"value";e._valueTracker=ZM(e,t,""+e[t])}}function Ay(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Ty(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function uu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var KM=/[\n"\\]/g;function ni(e){return e.replace(KM,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Jd(e,t,n,i,a,s,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+$n(t)):e.value!==""+$n(t)&&(e.value=""+$n(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Qd(e,r,$n(t)):n!=null?Qd(e,r,$n(n)):i!=null&&e.removeAttribute("value"),a==null&&s!=null&&(e.defaultChecked=!!s),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+$n(o):e.removeAttribute("name")}function wy(e,t,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){Kd(e);return}n=n!=null?""+$n(n):"",t=t!=null?""+$n(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Kd(e)}function Qd(e,t,n){t==="number"&&uu(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Ur(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+$n(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Cy(e,t,n){if(t!=null&&(t=""+$n(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+$n(n):""}function Ry(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(j(92));if(Ko(i)){if(1<i.length)throw Error(j(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=$n(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Kd(e)}function Fr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var JM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function W0(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||JM.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Dy(e,t,n){if(t!=null&&typeof t!="object")throw Error(j(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&W0(e,a,i)}else for(var s in t)t.hasOwnProperty(s)&&W0(e,s,t[s])}function Vp(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var QM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qc(e){return jM.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ji(){}var jd=null;function kp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var br=null,Nr=null;function q0(e){var t=Kr(e);if(t&&(e=t.stateNode)){var n=e[Dn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Jd(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ni(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[Dn]||null;if(!a)throw Error(j(90));Jd(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Ay(i)}break t;case"textarea":Cy(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Ur(e,!!n.multiple,t,!1)}}}var fd=!1;function Uy(e,t,n){if(fd)return e(t,n);fd=!0;try{var i=e(t);return i}finally{if(fd=!1,(br!==null||Nr!==null)&&(Yu(),br&&(t=br,e=Nr,Nr=br=null,q0(t),e)))for(t=0;t<e.length;t++)q0(e[t])}}function dl(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Dn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$d=!1;if(ea)try{dr={},Object.defineProperty(dr,"passive",{get:function(){$d=!0}}),window.addEventListener("test",dr,dr),window.removeEventListener("test",dr,dr)}catch{$d=!1}var dr,Da=null,Gp=null,Yc=null;function Ny(){if(Yc)return Yc;var e,t=Gp,n=t.length,i,a="value"in Da?Da.value:Da.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===a[s-i];i++);return Yc=a.slice(e,1<i?1-i:void 0)}function Zc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nc(){return!0}function Y0(){return!1}function Un(e){function t(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Nc:Y0,this.isPropagationStopped=Y0,this}return Ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nc)},persist:function(){},isPersistent:Nc}),t}var Us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pu=Un(Us),Ul=Ce({},Us,{view:0,detail:0}),$M=Un(Ul),dd,pd,ko,Bu=Ce({},Ul,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ko&&(ko&&e.type==="mousemove"?(dd=e.screenX-ko.screenX,pd=e.screenY-ko.screenY):pd=dd=0,ko=e),dd)},movementY:function(e){return"movementY"in e?e.movementY:pd}}),Z0=Un(Bu),t1=Ce({},Bu,{dataTransfer:0}),e1=Un(t1),n1=Ce({},Ul,{relatedTarget:0}),md=Un(n1),i1=Ce({},Us,{animationName:0,elapsedTime:0,pseudoElement:0}),a1=Un(i1),s1=Ce({},Us,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),r1=Un(s1),o1=Ce({},Us,{data:0}),K0=Un(o1),l1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},u1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=u1[e])?!!t[e]:!1}function Xp(){return h1}var f1=Ce({},Ul,{key:function(e){if(e.key){var t=l1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?c1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xp,charCode:function(e){return e.type==="keypress"?Zc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),d1=Un(f1),p1=Ce({},Bu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),J0=Un(p1),m1=Ce({},Ul,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xp}),g1=Un(m1),v1=Ce({},Us,{propertyName:0,elapsedTime:0,pseudoElement:0}),y1=Un(v1),_1=Ce({},Bu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),x1=Un(_1),b1=Ce({},Us,{newState:0,oldState:0}),S1=Un(b1),M1=[9,13,27,32],Wp=ea&&"CompositionEvent"in window,$o=null;ea&&"documentMode"in document&&($o=document.documentMode);var E1=ea&&"TextEvent"in window&&!$o,Ly=ea&&(!Wp||$o&&8<$o&&11>=$o),Q0=" ",j0=!1;function Iy(e,t){switch(e){case"keyup":return M1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Oy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sr=!1;function T1(e,t){switch(e){case"compositionend":return Oy(t);case"keypress":return t.which!==32?null:(j0=!0,Q0);case"textInput":return e=t.data,e===Q0&&j0?null:e;default:return null}}function A1(e,t){if(Sr)return e==="compositionend"||!Wp&&Iy(e,t)?(e=Ny(),Yc=Gp=Da=null,Sr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ly&&t.locale!=="ko"?null:t.data;default:return null}}var w1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!w1[e.type]:t==="textarea"}function Py(e,t,n,i){br?Nr?Nr.push(i):Nr=[i]:br=i,t=Cu(t,"onChange"),0<t.length&&(n=new Pu("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var tl=null,pl=null;function C1(e){Ux(e,0)}function zu(e){var t=Jo(e);if(Ay(t))return e}function tv(e,t){if(e==="change")return t}var By=!1;ea&&(ea?(Ic="oninput"in document,Ic||(gd=document.createElement("div"),gd.setAttribute("oninput","return;"),Ic=typeof gd.oninput=="function"),Lc=Ic):Lc=!1,By=Lc&&(!document.documentMode||9<document.documentMode));var Lc,Ic,gd;function ev(){tl&&(tl.detachEvent("onpropertychange",zy),pl=tl=null)}function zy(e){if(e.propertyName==="value"&&zu(pl)){var t=[];Py(t,pl,e,kp(e)),Uy(C1,t)}}function R1(e,t,n){e==="focusin"?(ev(),tl=t,pl=n,tl.attachEvent("onpropertychange",zy)):e==="focusout"&&ev()}function D1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zu(pl)}function U1(e,t){if(e==="click")return zu(t)}function N1(e,t){if(e==="input"||e==="change")return zu(t)}function L1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kn=typeof Object.is=="function"?Object.is:L1;function ml(e,t){if(kn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!Yd.call(t,a)||!kn(e[a],t[a]))return!1}return!0}function nv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function iv(e,t){var n=nv(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=nv(n)}}function Fy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hy(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=uu(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=uu(e.document)}return t}function qp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var I1=ea&&"documentMode"in document&&11>=document.documentMode,Mr=null,tp=null,el=null,ep=!1;function av(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ep||Mr==null||Mr!==uu(i)||(i=Mr,"selectionStart"in i&&qp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),el&&ml(el,i)||(el=i,i=Cu(tp,"onSelect"),0<i.length&&(t=new Pu("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Mr)))}function ms(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Er={animationend:ms("Animation","AnimationEnd"),animationiteration:ms("Animation","AnimationIteration"),animationstart:ms("Animation","AnimationStart"),transitionrun:ms("Transition","TransitionRun"),transitionstart:ms("Transition","TransitionStart"),transitioncancel:ms("Transition","TransitionCancel"),transitionend:ms("Transition","TransitionEnd")},vd={},Vy={};ea&&(Vy=document.createElement("div").style,"AnimationEvent"in window||(delete Er.animationend.animation,delete Er.animationiteration.animation,delete Er.animationstart.animation),"TransitionEvent"in window||delete Er.transitionend.transition);function Ns(e){if(vd[e])return vd[e];if(!Er[e])return e;var t=Er[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vy)return vd[e]=t[n];return e}var ky=Ns("animationend"),Gy=Ns("animationiteration"),Xy=Ns("animationstart"),O1=Ns("transitionrun"),P1=Ns("transitionstart"),B1=Ns("transitioncancel"),Wy=Ns("transitionend"),qy=new Map,np="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");np.push("scrollEnd");function pi(e,t){qy.set(e,t),Ds(t,[e])}var hu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},jn=[],Tr=0,Yp=0;function Fu(){for(var e=Tr,t=Yp=Tr=0;t<e;){var n=jn[t];jn[t++]=null;var i=jn[t];jn[t++]=null;var a=jn[t];jn[t++]=null;var s=jn[t];if(jn[t++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&Yy(n,a,s)}}function Hu(e,t,n,i){jn[Tr++]=e,jn[Tr++]=t,jn[Tr++]=n,jn[Tr++]=i,Yp|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Zp(e,t,n,i){return Hu(e,t,n,i),fu(e)}function Ls(e,t){return Hu(e,null,null,t),fu(e)}function Yy(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(a=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,a&&t!==null&&(a=31-Hn(n),e=s.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),s):null}function fu(e){if(50<ul)throw ul=0,Mp=null,Error(j(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ar={};function z1(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(e,t,n,i){return new z1(e,t,n,i)}function Kp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ji(e,t){var n=e.alternate;return n===null?(n=Pn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Zy(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Kc(e,t,n,i,a,s){var r=0;if(i=e,typeof e=="function")Kp(e)&&(r=1);else if(typeof e=="string")r=VE(e,n,Di.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case Gd:return e=Pn(31,n,t,a),e.elementType=Gd,e.lanes=s,e;case yr:return bs(n.children,a,s,t);case dy:r=8,a|=24;break;case Hd:return e=Pn(12,n,t,a|2),e.elementType=Hd,e.lanes=s,e;case Vd:return e=Pn(13,n,t,a),e.elementType=Vd,e.lanes=s,e;case kd:return e=Pn(19,n,t,a),e.elementType=kd,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ki:r=10;break t;case py:r=9;break t;case Op:r=11;break t;case Pp:r=14;break t;case Ma:r=16,i=null;break t}r=29,n=Error(j(130,e===null?"null":typeof e,"")),i=null}return t=Pn(r,n,t,a),t.elementType=e,t.type=i,t.lanes=s,t}function bs(e,t,n,i){return e=Pn(7,e,i,t),e.lanes=n,e}function yd(e,t,n){return e=Pn(6,e,null,t),e.lanes=n,e}function Ky(e){var t=Pn(18,null,null,0);return t.stateNode=e,t}function _d(e,t,n){return t=Pn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var sv=new WeakMap;function ii(e,t){if(typeof e=="object"&&e!==null){var n=sv.get(e);return n!==void 0?n:(t={value:e,source:t,stack:H0(t)},sv.set(e,t),t)}return{value:e,source:t,stack:H0(t)}}var wr=[],Cr=0,du=null,gl=0,ti=[],ei=0,Ga=null,wi=1,Ci="";function Yi(e,t){wr[Cr++]=gl,wr[Cr++]=du,du=e,gl=t}function Jy(e,t,n){ti[ei++]=wi,ti[ei++]=Ci,ti[ei++]=Ga,Ga=e;var i=wi;e=Ci;var a=32-Hn(i)-1;i&=~(1<<a),n+=1;var s=32-Hn(t)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,wi=1<<32-Hn(t)+a|n<<a|i,Ci=s+e}else wi=1<<s|n<<a|i,Ci=e}function Jp(e){e.return!==null&&(Yi(e,1),Jy(e,1,0))}function Qp(e){for(;e===du;)du=wr[--Cr],wr[Cr]=null,gl=wr[--Cr],wr[Cr]=null;for(;e===Ga;)Ga=ti[--ei],ti[ei]=null,Ci=ti[--ei],ti[ei]=null,wi=ti[--ei],ti[ei]=null}function Qy(e,t){ti[ei++]=wi,ti[ei++]=Ci,ti[ei++]=Ga,wi=t.id,Ci=t.overflow,Ga=e}var ln=null,we=null,ae=!1,Oa=null,ai=!1,ip=Error(j(519));function Xa(e){var t=Error(j(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw vl(ii(t,e)),ip}function rv(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[on]=e,t[Dn]=i,n){case"dialog":$t("cancel",t),$t("close",t);break;case"iframe":case"object":case"embed":$t("load",t);break;case"video":case"audio":for(n=0;n<bl.length;n++)$t(bl[n],t);break;case"source":$t("error",t);break;case"img":case"image":case"link":$t("error",t),$t("load",t);break;case"details":$t("toggle",t);break;case"input":$t("invalid",t),wy(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":$t("invalid",t);break;case"textarea":$t("invalid",t),Ry(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Lx(t.textContent,n)?(i.popover!=null&&($t("beforetoggle",t),$t("toggle",t)),i.onScroll!=null&&$t("scroll",t),i.onScrollEnd!=null&&$t("scrollend",t),i.onClick!=null&&(t.onclick=Ji),t=!0):t=!1,t||Xa(e,!0)}function ov(e){for(ln=e.return;ln;)switch(ln.tag){case 5:case 31:case 13:ai=!1;return;case 27:case 3:ai=!0;return;default:ln=ln.return}}function pr(e){if(e!==ln)return!1;if(!ae)return ov(e),ae=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Cp(e.type,e.memoizedProps)),n=!n),n&&we&&Xa(e),ov(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));we=Kv(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));we=Kv(e)}else t===27?(t=we,Za(e.type)?(e=Np,Np=null,we=e):we=t):we=ln?ri(e.stateNode.nextSibling):null;return!0}function Ts(){we=ln=null,ae=!1}function xd(){var e=Oa;return e!==null&&(Cn===null?Cn=e:Cn.push.apply(Cn,e),Oa=null),e}function vl(e){Oa===null?Oa=[e]:Oa.push(e)}var ap=Ui(null),Is=null,Qi=null;function Ta(e,t,n){Se(ap,t._currentValue),t._currentValue=n}function $i(e){e._currentValue=ap.current,en(ap)}function sp(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function rp(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;t:for(;s!==null;){var o=s;s=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),sp(s.return,n,e),i||(r=null);break t}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(j(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),sp(r,n,e),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function Jr(e,t,n,i){e=null;for(var a=t,s=!1;a!==null;){if(!s){if((a.flags&524288)!==0)s=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(j(387));if(r=r.memoizedProps,r!==null){var o=a.type;kn(a.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(a===ru.current){if(r=a.alternate,r===null)throw Error(j(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Ml):e=[Ml])}a=a.return}e!==null&&rp(t,e,n,i),t.flags|=262144}function pu(e){for(e=e.firstContext;e!==null;){if(!kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function As(e){Is=e,Qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function cn(e){return jy(Is,e)}function Oc(e,t){return Is===null&&As(e),jy(e,t)}function jy(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Qi===null){if(e===null)throw Error(j(308));Qi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Qi=Qi.next=t;return n}var F1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},H1=Ze.unstable_scheduleCallback,V1=Ze.unstable_NormalPriority,ke={$$typeof:Ki,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function jp(){return{controller:new F1,data:new Map,refCount:0}}function Nl(e){e.refCount--,e.refCount===0&&H1(V1,function(){e.controller.abort()})}var nl=null,op=0,Hr=0,Lr=null;function k1(e,t){if(nl===null){var n=nl=[];op=0,Hr=Mm(),Lr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return op++,t.then(lv,lv),t}function lv(){if(--op===0&&nl!==null){Lr!==null&&(Lr.status="fulfilled");var e=nl;nl=null,Hr=0,Lr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function G1(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var cv=Pt.S;Pt.S=function(e,t){fx=zn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&k1(e,t),cv!==null&&cv(e,t)};var Ss=Ui(null);function $p(){var e=Ss.current;return e!==null?e:xe.pooledCache}function Jc(e,t){t===null?Se(Ss,Ss.current):Se(Ss,t.pool)}function $y(){var e=$p();return e===null?null:{parent:ke._currentValue,pool:e}}var Qr=Error(j(460)),tm=Error(j(474)),Vu=Error(j(542)),mu={then:function(){}};function uv(e){return e=e.status,e==="fulfilled"||e==="rejected"}function t_(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ji,Ji),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,fv(e),e;default:if(typeof t.status=="string")t.then(Ji,Ji);else{if(e=xe,e!==null&&100<e.shellSuspendCounter)throw Error(j(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,fv(e),e}throw Ms=t,Qr}}function ys(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ms=n,Qr):n}}var Ms=null;function hv(){if(Ms===null)throw Error(j(459));var e=Ms;return Ms=null,e}function fv(e){if(e===Qr||e===Vu)throw Error(j(483))}var Ir=null,yl=0;function Pc(e){var t=yl;return yl+=1,Ir===null&&(Ir=[]),t_(Ir,e,t)}function Go(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Bc(e,t){throw t.$$typeof===RM?Error(j(525)):(e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function e_(e){function t(u,g){if(e){var _=u.deletions;_===null?(u.deletions=[g],u.flags|=16):_.push(g)}}function n(u,g){if(!e)return null;for(;g!==null;)t(u,g),g=g.sibling;return null}function i(u){for(var g=new Map;u!==null;)u.key!==null?g.set(u.key,u):g.set(u.index,u),u=u.sibling;return g}function a(u,g){return u=ji(u,g),u.index=0,u.sibling=null,u}function s(u,g,_){return u.index=_,e?(_=u.alternate,_!==null?(_=_.index,_<g?(u.flags|=67108866,g):_):(u.flags|=67108866,g)):(u.flags|=1048576,g)}function r(u){return e&&u.alternate===null&&(u.flags|=67108866),u}function o(u,g,_,y){return g===null||g.tag!==6?(g=yd(_,u.mode,y),g.return=u,g):(g=a(g,_),g.return=u,g)}function l(u,g,_,y){var T=_.type;return T===yr?f(u,g,_.props.children,y,_.key):g!==null&&(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ma&&ys(T)===g.type)?(g=a(g,_.props),Go(g,_),g.return=u,g):(g=Kc(_.type,_.key,_.props,null,u.mode,y),Go(g,_),g.return=u,g)}function c(u,g,_,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=_d(_,u.mode,y),g.return=u,g):(g=a(g,_.children||[]),g.return=u,g)}function f(u,g,_,y,T){return g===null||g.tag!==7?(g=bs(_,u.mode,y,T),g.return=u,g):(g=a(g,_),g.return=u,g)}function d(u,g,_){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=yd(""+g,u.mode,_),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case wc:return _=Kc(g.type,g.key,g.props,null,u.mode,_),Go(_,g),_.return=u,_;case Zo:return g=_d(g,u.mode,_),g.return=u,g;case Ma:return g=ys(g),d(u,g,_)}if(Ko(g)||Vo(g))return g=bs(g,u.mode,_,null),g.return=u,g;if(typeof g.then=="function")return d(u,Pc(g),_);if(g.$$typeof===Ki)return d(u,Oc(u,g),_);Bc(u,g)}return null}function h(u,g,_,y){var T=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return T!==null?null:o(u,g,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case wc:return _.key===T?l(u,g,_,y):null;case Zo:return _.key===T?c(u,g,_,y):null;case Ma:return _=ys(_),h(u,g,_,y)}if(Ko(_)||Vo(_))return T!==null?null:f(u,g,_,y,null);if(typeof _.then=="function")return h(u,g,Pc(_),y);if(_.$$typeof===Ki)return h(u,g,Oc(u,_),y);Bc(u,_)}return null}function p(u,g,_,y,T){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return u=u.get(_)||null,o(g,u,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case wc:return u=u.get(y.key===null?_:y.key)||null,l(g,u,y,T);case Zo:return u=u.get(y.key===null?_:y.key)||null,c(g,u,y,T);case Ma:return y=ys(y),p(u,g,_,y,T)}if(Ko(y)||Vo(y))return u=u.get(_)||null,f(g,u,y,T,null);if(typeof y.then=="function")return p(u,g,_,Pc(y),T);if(y.$$typeof===Ki)return p(u,g,_,Oc(g,y),T);Bc(g,y)}return null}function v(u,g,_,y){for(var T=null,w=null,A=g,D=g=0,M=null;A!==null&&D<_.length;D++){A.index>D?(M=A,A=null):M=A.sibling;var S=h(u,A,_[D],y);if(S===null){A===null&&(A=M);break}e&&A&&S.alternate===null&&t(u,A),g=s(S,g,D),w===null?T=S:w.sibling=S,w=S,A=M}if(D===_.length)return n(u,A),ae&&Yi(u,D),T;if(A===null){for(;D<_.length;D++)A=d(u,_[D],y),A!==null&&(g=s(A,g,D),w===null?T=A:w.sibling=A,w=A);return ae&&Yi(u,D),T}for(A=i(A);D<_.length;D++)M=p(A,u,D,_[D],y),M!==null&&(e&&M.alternate!==null&&A.delete(M.key===null?D:M.key),g=s(M,g,D),w===null?T=M:w.sibling=M,w=M);return e&&A.forEach(function(N){return t(u,N)}),ae&&Yi(u,D),T}function x(u,g,_,y){if(_==null)throw Error(j(151));for(var T=null,w=null,A=g,D=g=0,M=null,S=_.next();A!==null&&!S.done;D++,S=_.next()){A.index>D?(M=A,A=null):M=A.sibling;var N=h(u,A,S.value,y);if(N===null){A===null&&(A=M);break}e&&A&&N.alternate===null&&t(u,A),g=s(N,g,D),w===null?T=N:w.sibling=N,w=N,A=M}if(S.done)return n(u,A),ae&&Yi(u,D),T;if(A===null){for(;!S.done;D++,S=_.next())S=d(u,S.value,y),S!==null&&(g=s(S,g,D),w===null?T=S:w.sibling=S,w=S);return ae&&Yi(u,D),T}for(A=i(A);!S.done;D++,S=_.next())S=p(A,u,D,S.value,y),S!==null&&(e&&S.alternate!==null&&A.delete(S.key===null?D:S.key),g=s(S,g,D),w===null?T=S:w.sibling=S,w=S);return e&&A.forEach(function(P){return t(u,P)}),ae&&Yi(u,D),T}function m(u,g,_,y){if(typeof _=="object"&&_!==null&&_.type===yr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case wc:t:{for(var T=_.key;g!==null;){if(g.key===T){if(T=_.type,T===yr){if(g.tag===7){n(u,g.sibling),y=a(g,_.props.children),y.return=u,u=y;break t}}else if(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ma&&ys(T)===g.type){n(u,g.sibling),y=a(g,_.props),Go(y,_),y.return=u,u=y;break t}n(u,g);break}else t(u,g);g=g.sibling}_.type===yr?(y=bs(_.props.children,u.mode,y,_.key),y.return=u,u=y):(y=Kc(_.type,_.key,_.props,null,u.mode,y),Go(y,_),y.return=u,u=y)}return r(u);case Zo:t:{for(T=_.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(u,g.sibling),y=a(g,_.children||[]),y.return=u,u=y;break t}else{n(u,g);break}else t(u,g);g=g.sibling}y=_d(_,u.mode,y),y.return=u,u=y}return r(u);case Ma:return _=ys(_),m(u,g,_,y)}if(Ko(_))return v(u,g,_,y);if(Vo(_)){if(T=Vo(_),typeof T!="function")throw Error(j(150));return _=T.call(_),x(u,g,_,y)}if(typeof _.then=="function")return m(u,g,Pc(_),y);if(_.$$typeof===Ki)return m(u,g,Oc(u,_),y);Bc(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,g!==null&&g.tag===6?(n(u,g.sibling),y=a(g,_),y.return=u,u=y):(n(u,g),y=yd(_,u.mode,y),y.return=u,u=y),r(u)):n(u,g)}return function(u,g,_,y){try{yl=0;var T=m(u,g,_,y);return Ir=null,T}catch(A){if(A===Qr||A===Vu)throw A;var w=Pn(29,A,null,u.mode);return w.lanes=y,w.return=u,w}}}var ws=e_(!0),n_=e_(!1),Ea=!1;function em(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(le&2)!==0){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=fu(e),Yy(e,null,n),t}return Hu(e,i,t,n),fu(e)}function il(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,xy(e,n)}}function bd(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var cp=!1;function al(){if(cp){var e=Lr;if(e!==null)throw e}}function sl(e,t,n,i){cp=!1;var a=e.updateQueue;Ea=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?s=c:r.next=c,r=l;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==r&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=a.baseState;r=0,f=c=l=null,o=s;do{var h=o.lane&-536870913,p=h!==o.lane;if(p?(ie&h)===h:(i&h)===h){h!==0&&h===Hr&&(cp=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var v=e,x=o;h=t;var m=n;switch(x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(m,d,h);break t}d=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,h=typeof v=="function"?v.call(m,d,h):v,h==null)break t;d=Ce({},d,h);break t;case 2:Ea=!0}}h=o.callback,h!==null&&(e.flags|=64,p&&(e.flags|=8192),p=a.callbacks,p===null?a.callbacks=[h]:p.push(h))}else p={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=p,l=d):f=f.next=p,r|=h;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);f===null&&(l=d),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=f,s===null&&(a.shared.lanes=0),qa|=r,e.lanes=r,e.memoizedState=d}}function i_(e,t){if(typeof e!="function")throw Error(j(191,e));e.call(t)}function a_(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)i_(n[e],t)}var Vr=Ui(null),gu=Ui(0);function dv(e,t){e=sa,Se(gu,e),Se(Vr,t),sa=e|t.baseLanes}function up(){Se(gu,sa),Se(Vr,Vr.current)}function nm(){sa=gu.current,en(Vr),en(gu)}var Gn=Ui(null),si=null;function Aa(e){var t=e.alternate;Se(ze,ze.current&1),Se(Gn,e),si===null&&(t===null||Vr.current!==null||t.memoizedState!==null)&&(si=e)}function hp(e){Se(ze,ze.current),Se(Gn,e),si===null&&(si=e)}function s_(e){e.tag===22?(Se(ze,ze.current),Se(Gn,e),si===null&&(si=e)):wa(e)}function wa(){Se(ze,ze.current),Se(Gn,Gn.current)}function On(e){en(Gn),si===e&&(si=null),en(ze)}var ze=Ui(0);function vu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Dp(n)||Up(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var na=0,Xt=null,ve=null,He=null,yu=!1,Or=!1,Cs=!1,_u=0,_l=0,Pr=null,X1=0;function Pe(){throw Error(j(321))}function im(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kn(e[n],t[n]))return!1;return!0}function am(e,t,n,i,a,s){return na=s,Xt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pt.H=e===null||e.memoizedState===null?P_:mm,Cs=!1,s=n(i,a),Cs=!1,Or&&(s=o_(t,n,i,a)),r_(e),s}function r_(e){Pt.H=xl;var t=ve!==null&&ve.next!==null;if(na=0,He=ve=Xt=null,yu=!1,_l=0,Pr=null,t)throw Error(j(300));e===null||Ge||(e=e.dependencies,e!==null&&pu(e)&&(Ge=!0))}function o_(e,t,n,i){Xt=e;var a=0;do{if(Or&&(Pr=null),_l=0,Or=!1,25<=a)throw Error(j(301));if(a+=1,He=ve=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Pt.H=B_,s=t(n,i)}while(Or);return s}function W1(){var e=Pt.H,t=e.useState()[0];return t=typeof t.then=="function"?Ll(t):t,e=e.useState()[0],(ve!==null?ve.memoizedState:null)!==e&&(Xt.flags|=1024),t}function sm(){var e=_u!==0;return _u=0,e}function rm(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function om(e){if(yu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yu=!1}na=0,He=ve=Xt=null,Or=!1,_l=_u=0,Pr=null}function xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Xt.memoizedState=He=e:He=He.next=e,He}function Fe(){if(ve===null){var e=Xt.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=He===null?Xt.memoizedState:He.next;if(t!==null)He=t,ve=e;else{if(e===null)throw Xt.alternate===null?Error(j(467)):Error(j(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},He===null?Xt.memoizedState=He=e:He=He.next=e}return He}function ku(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ll(e){var t=_l;return _l+=1,Pr===null&&(Pr=[]),e=t_(Pr,e,t),t=Xt,(He===null?t.memoizedState:He.next)===null&&(t=t.alternate,Pt.H=t===null||t.memoizedState===null?P_:mm),e}function Gu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ll(e);if(e.$$typeof===Ki)return cn(e)}throw Error(j(438,String(e)))}function lm(e){var t=null,n=Xt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Xt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ku(),Xt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=DM;return t.index++,n}function ia(e,t){return typeof t=="function"?t(e):t}function Qc(e){var t=Fe();return cm(t,ve,e)}function cm(e,t,n){var i=e.queue;if(i===null)throw Error(j(311));i.lastRenderedReducer=n;var a=e.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}t.baseQueue=a=s,i.pending=null}if(s=e.baseState,a===null)e.memoizedState=s;else{t=a.next;var o=r=null,l=null,c=t,f=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(ie&d)===d:(na&d)===d){var h=c.revertLane;if(h===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===Hr&&(f=!0);else if((na&h)===h){c=c.next,h===Hr&&(f=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=s):l=l.next=d,Xt.lanes|=h,qa|=h;d=c.action,Cs&&n(s,d),s=c.hasEagerState?c.eagerState:n(s,d)}else h={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,r=s):l=l.next=h,Xt.lanes|=d,qa|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=s:l.next=o,!kn(s,e.memoizedState)&&(Ge=!0,f&&(n=Lr,n!==null)))throw n;e.memoizedState=s,e.baseState=r,e.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Sd(e){var t=Fe(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=e(s,r.action),r=r.next;while(r!==a);kn(s,t.memoizedState)||(Ge=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function l_(e,t,n){var i=Xt,a=Fe(),s=ae;if(s){if(n===void 0)throw Error(j(407));n=n()}else n=t();var r=!kn((ve||a).memoizedState,n);if(r&&(a.memoizedState=n,Ge=!0),a=a.queue,um(h_.bind(null,i,a,e),[e]),a.getSnapshot!==t||r||He!==null&&He.memoizedState.tag&1){if(i.flags|=2048,kr(9,{destroy:void 0},u_.bind(null,i,a,n,t),null),xe===null)throw Error(j(349));s||(na&127)!==0||c_(i,t,n)}return n}function c_(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Xt.updateQueue,t===null?(t=ku(),Xt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function u_(e,t,n,i){t.value=n,t.getSnapshot=i,f_(t)&&d_(e)}function h_(e,t,n){return n(function(){f_(t)&&d_(e)})}function f_(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kn(e,n)}catch{return!0}}function d_(e){var t=Ls(e,2);t!==null&&Rn(t,e,2)}function fp(e){var t=xn();if(typeof e=="function"){var n=e;if(e=n(),Cs){Ra(!0);try{n()}finally{Ra(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:e},t}function p_(e,t,n,i){return e.baseState=n,cm(e,ve,typeof i=="function"?i:ia)}function q1(e,t,n,i,a){if(Wu(e))throw Error(j(485));if(e=t.action,e!==null){var s={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Pt.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,m_(t,s)):(s.next=n.next,t.pending=n.next=s)}}function m_(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var s=Pt.T,r={};Pt.T=r;try{var o=n(a,i),l=Pt.S;l!==null&&l(r,o),pv(e,t,o)}catch(c){dp(e,t,c)}finally{s!==null&&r.types!==null&&(s.types=r.types),Pt.T=s}}else try{s=n(a,i),pv(e,t,s)}catch(c){dp(e,t,c)}}function pv(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){mv(e,t,i)},function(i){return dp(e,t,i)}):mv(e,t,n)}function mv(e,t,n){t.status="fulfilled",t.value=n,g_(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,m_(e,n)))}function dp(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,g_(t),t=t.next;while(t!==i)}e.action=null}function g_(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function v_(e,t){return t}function gv(e,t){if(ae){var n=xe.formState;if(n!==null){t:{var i=Xt;if(ae){if(we){e:{for(var a=we,s=ai;a.nodeType!==8;){if(!s){a=null;break e}if(a=ri(a.nextSibling),a===null){a=null;break e}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){we=ri(a.nextSibling),i=a.data==="F!";break t}}Xa(i)}i=!1}i&&(t=n[0])}}return n=xn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:v_,lastRenderedState:t},n.queue=i,n=L_.bind(null,Xt,i),i.dispatch=n,i=fp(!1),s=pm.bind(null,Xt,!1,i.queue),i=xn(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=q1.bind(null,Xt,a,s,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function vv(e){var t=Fe();return y_(t,ve,e)}function y_(e,t,n){if(t=cm(e,t,v_)[0],e=Qc(ia)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Ll(t)}catch(r){throw r===Qr?Vu:r}else i=t;t=Fe();var a=t.queue,s=a.dispatch;return n!==t.memoizedState&&(Xt.flags|=2048,kr(9,{destroy:void 0},Y1.bind(null,a,n),null)),[i,s,e]}function Y1(e,t){e.action=t}function yv(e){var t=Fe(),n=ve;if(n!==null)return y_(t,n,e);Fe(),t=t.memoizedState,n=Fe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function kr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Xt.updateQueue,t===null&&(t=ku(),Xt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function __(){return Fe().memoizedState}function jc(e,t,n,i){var a=xn();Xt.flags|=e,a.memoizedState=kr(1|t,{destroy:void 0},n,i===void 0?null:i)}function Xu(e,t,n,i){var a=Fe();i=i===void 0?null:i;var s=a.memoizedState.inst;ve!==null&&i!==null&&im(i,ve.memoizedState.deps)?a.memoizedState=kr(t,s,n,i):(Xt.flags|=e,a.memoizedState=kr(1|t,s,n,i))}function _v(e,t){jc(8390656,8,e,t)}function um(e,t){Xu(2048,8,e,t)}function Z1(e){Xt.flags|=4;var t=Xt.updateQueue;if(t===null)t=ku(),Xt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function x_(e){var t=Fe().memoizedState;return Z1({ref:t,nextImpl:e}),function(){if((le&2)!==0)throw Error(j(440));return t.impl.apply(void 0,arguments)}}function b_(e,t){return Xu(4,2,e,t)}function S_(e,t){return Xu(4,4,e,t)}function M_(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function E_(e,t,n){n=n!=null?n.concat([e]):null,Xu(4,4,M_.bind(null,t,e),n)}function hm(){}function T_(e,t){var n=Fe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&im(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function A_(e,t){var n=Fe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&im(t,i[1]))return i[0];if(i=e(),Cs){Ra(!0);try{e()}finally{Ra(!1)}}return n.memoizedState=[i,t],i}function fm(e,t,n){return n===void 0||(na&1073741824)!==0&&(ie&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=px(),Xt.lanes|=e,qa|=e,n)}function w_(e,t,n,i){return kn(n,t)?n:Vr.current!==null?(e=fm(e,n,i),kn(e,t)||(Ge=!0),e):(na&42)===0||(na&1073741824)!==0&&(ie&261930)===0?(Ge=!0,e.memoizedState=n):(e=px(),Xt.lanes|=e,qa|=e,t)}function C_(e,t,n,i,a){var s=ce.p;ce.p=s!==0&&8>s?s:8;var r=Pt.T,o={};Pt.T=o,pm(e,!1,t,n);try{var l=a(),c=Pt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=G1(l,i);rl(e,t,f,Vn(e))}else rl(e,t,i,Vn(e))}catch(d){rl(e,t,{then:function(){},status:"rejected",reason:d},Vn())}finally{ce.p=s,r!==null&&o.types!==null&&(r.types=o.types),Pt.T=r}}function K1(){}function pp(e,t,n,i){if(e.tag!==5)throw Error(j(476));var a=R_(e).queue;C_(e,a,t,xs,n===null?K1:function(){return D_(e),n(i)})}function R_(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:xs,baseState:xs,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:xs},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function D_(e){var t=R_(e);t.next===null&&(t=e.alternate.memoizedState),rl(e,t.next.queue,{},Vn())}function dm(){return cn(Ml)}function U_(){return Fe().memoizedState}function N_(){return Fe().memoizedState}function J1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Vn();e=Pa(n);var i=Ba(t,e,n);i!==null&&(Rn(i,t,n),il(i,t,n)),t={cache:jp()},e.payload=t;return}t=t.return}}function Q1(e,t,n){var i=Vn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Wu(e)?I_(t,n):(n=Zp(e,t,n,i),n!==null&&(Rn(n,e,i),O_(n,t,i)))}function L_(e,t,n){var i=Vn();rl(e,t,n,i)}function rl(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wu(e))I_(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,kn(o,r))return Hu(e,t,a,0),xe===null&&Fu(),!1}catch{}if(n=Zp(e,t,a,i),n!==null)return Rn(n,e,i),O_(n,t,i),!0}return!1}function pm(e,t,n,i){if(i={lane:2,revertLane:Mm(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Wu(e)){if(t)throw Error(j(479))}else t=Zp(e,n,i,2),t!==null&&Rn(t,e,2)}function Wu(e){var t=e.alternate;return e===Xt||t!==null&&t===Xt}function I_(e,t){Or=yu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function O_(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,xy(e,n)}}var xl={readContext:cn,use:Gu,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useLayoutEffect:Pe,useInsertionEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useSyncExternalStore:Pe,useId:Pe,useHostTransitionStatus:Pe,useFormState:Pe,useActionState:Pe,useOptimistic:Pe,useMemoCache:Pe,useCacheRefresh:Pe};xl.useEffectEvent=Pe;var P_={readContext:cn,use:Gu,useCallback:function(e,t){return xn().memoizedState=[e,t===void 0?null:t],e},useContext:cn,useEffect:_v,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,jc(4194308,4,M_.bind(null,t,e),n)},useLayoutEffect:function(e,t){return jc(4194308,4,e,t)},useInsertionEffect:function(e,t){jc(4,2,e,t)},useMemo:function(e,t){var n=xn();t=t===void 0?null:t;var i=e();if(Cs){Ra(!0);try{e()}finally{Ra(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=xn();if(n!==void 0){var a=n(t);if(Cs){Ra(!0);try{n(t)}finally{Ra(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=Q1.bind(null,Xt,e),[i.memoizedState,e]},useRef:function(e){var t=xn();return e={current:e},t.memoizedState=e},useState:function(e){e=fp(e);var t=e.queue,n=L_.bind(null,Xt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:hm,useDeferredValue:function(e,t){var n=xn();return fm(n,e,t)},useTransition:function(){var e=fp(!1);return e=C_.bind(null,Xt,e.queue,!0,!1),xn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Xt,a=xn();if(ae){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),xe===null)throw Error(j(349));(ie&127)!==0||c_(i,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,_v(h_.bind(null,i,s,e),[e]),i.flags|=2048,kr(9,{destroy:void 0},u_.bind(null,i,s,n,t),null),n},useId:function(){var e=xn(),t=xe.identifierPrefix;if(ae){var n=Ci,i=wi;n=(i&~(1<<32-Hn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=_u++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=X1++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:dm,useFormState:gv,useActionState:gv,useOptimistic:function(e){var t=xn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=pm.bind(null,Xt,!0,n),n.dispatch=t,[e,t]},useMemoCache:lm,useCacheRefresh:function(){return xn().memoizedState=J1.bind(null,Xt)},useEffectEvent:function(e){var t=xn(),n={impl:e};return t.memoizedState=n,function(){if((le&2)!==0)throw Error(j(440));return n.impl.apply(void 0,arguments)}}},mm={readContext:cn,use:Gu,useCallback:T_,useContext:cn,useEffect:um,useImperativeHandle:E_,useInsertionEffect:b_,useLayoutEffect:S_,useMemo:A_,useReducer:Qc,useRef:__,useState:function(){return Qc(ia)},useDebugValue:hm,useDeferredValue:function(e,t){var n=Fe();return w_(n,ve.memoizedState,e,t)},useTransition:function(){var e=Qc(ia)[0],t=Fe().memoizedState;return[typeof e=="boolean"?e:Ll(e),t]},useSyncExternalStore:l_,useId:U_,useHostTransitionStatus:dm,useFormState:vv,useActionState:vv,useOptimistic:function(e,t){var n=Fe();return p_(n,ve,e,t)},useMemoCache:lm,useCacheRefresh:N_};mm.useEffectEvent=x_;var B_={readContext:cn,use:Gu,useCallback:T_,useContext:cn,useEffect:um,useImperativeHandle:E_,useInsertionEffect:b_,useLayoutEffect:S_,useMemo:A_,useReducer:Sd,useRef:__,useState:function(){return Sd(ia)},useDebugValue:hm,useDeferredValue:function(e,t){var n=Fe();return ve===null?fm(n,e,t):w_(n,ve.memoizedState,e,t)},useTransition:function(){var e=Sd(ia)[0],t=Fe().memoizedState;return[typeof e=="boolean"?e:Ll(e),t]},useSyncExternalStore:l_,useId:U_,useHostTransitionStatus:dm,useFormState:yv,useActionState:yv,useOptimistic:function(e,t){var n=Fe();return ve!==null?p_(n,ve,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:lm,useCacheRefresh:N_};B_.useEffectEvent=x_;function Md(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var mp={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Vn(),a=Pa(i);a.payload=t,n!=null&&(a.callback=n),t=Ba(e,a,i),t!==null&&(Rn(t,e,i),il(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Vn(),a=Pa(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Ba(e,a,i),t!==null&&(Rn(t,e,i),il(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Vn(),i=Pa(n);i.tag=2,t!=null&&(i.callback=t),t=Ba(e,i,n),t!==null&&(Rn(t,e,n),il(t,e,n))}};function xv(e,t,n,i,a,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,r):t.prototype&&t.prototype.isPureReactComponent?!ml(n,i)||!ml(a,s):!0}function bv(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&mp.enqueueReplaceState(t,t.state,null)}function Rs(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Ce({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function z_(e){hu(e)}function F_(e){console.error(e)}function H_(e){hu(e)}function xu(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Sv(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function gp(e,t,n){return n=Pa(n),n.tag=3,n.payload={element:null},n.callback=function(){xu(e,t)},n}function V_(e){return e=Pa(e),e.tag=3,e}function k_(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;e.payload=function(){return a(s)},e.callback=function(){Sv(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Sv(t,n,i),typeof a!="function"&&(za===null?za=new Set([this]):za.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function j1(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Jr(t,n,a,!0),n=Gn.current,n!==null){switch(n.tag){case 31:case 13:return si===null?Tu():n.alternate===null&&Be===0&&(Be=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===mu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Id(e,i,a)),!1;case 22:return n.flags|=65536,i===mu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Id(e,i,a)),!1}throw Error(j(435,n.tag))}return Id(e,i,a),Tu(),!1}if(ae)return t=Gn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==ip&&(e=Error(j(422),{cause:i}),vl(ii(e,n)))):(i!==ip&&(t=Error(j(423),{cause:i}),vl(ii(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=ii(i,n),a=gp(e.stateNode,i,a),bd(e,a),Be!==4&&(Be=2)),!1;var s=Error(j(520),{cause:i});if(s=ii(s,n),cl===null?cl=[s]:cl.push(s),Be!==4&&(Be=2),t===null)return!0;i=ii(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=gp(n.stateNode,i,e),bd(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(za===null||!za.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=V_(a),k_(a,e,n,i),bd(n,a),!1}n=n.return}while(n!==null);return!1}var gm=Error(j(461)),Ge=!1;function rn(e,t,n,i){t.child=e===null?n_(t,null,n,i):ws(t,e.child,n,i)}function Mv(e,t,n,i,a){n=n.render;var s=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return As(t),i=am(e,t,n,r,s,a),o=sm(),e!==null&&!Ge?(rm(e,t,a),aa(e,t,a)):(ae&&o&&Jp(t),t.flags|=1,rn(e,t,i,a),t.child)}function Ev(e,t,n,i,a){if(e===null){var s=n.type;return typeof s=="function"&&!Kp(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,G_(e,t,s,i,a)):(e=Kc(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!vm(e,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:ml,n(r,i)&&e.ref===t.ref)return aa(e,t,a)}return t.flags|=1,e=ji(s,i),e.ref=t.ref,e.return=t,t.child=e}function G_(e,t,n,i,a){if(e!==null){var s=e.memoizedProps;if(ml(s,i)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=i=s,vm(e,a))(e.flags&131072)!==0&&(Ge=!0);else return t.lanes=e.lanes,aa(e,t,a)}return vp(e,t,n,i,a)}function X_(e,t,n,i){var a=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,t.child=null;return Tv(e,t,s,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Jc(t,s!==null?s.cachePool:null),s!==null?dv(t,s):up(),s_(t);else return i=t.lanes=536870912,Tv(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(Jc(t,s.cachePool),dv(t,s),wa(t),t.memoizedState=null):(e!==null&&Jc(t,null),up(),wa(t));return rn(e,t,a,n),t.child}function Qo(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Tv(e,t,n,i,a){var s=$p();return s=s===null?null:{parent:ke._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&Jc(t,null),up(),s_(t),e!==null&&Jr(e,t,i,!0),t.childLanes=a,null}function $c(e,t){return t=bu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Av(e,t,n){return ws(t,e.child,null,n),e=$c(t,t.pendingProps),e.flags|=2,On(t),t.memoizedState=null,e}function $1(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ae){if(i.mode==="hidden")return e=$c(t,i),t.lanes=536870912,Qo(null,e);if(hp(t),(e=we)?(e=Px(e,ai),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ga!==null?{id:wi,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},n=Ky(e),n.return=t,t.child=n,ln=t,we=null)):e=null,e===null)throw Xa(t);return t.lanes=536870912,null}return $c(t,i)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(hp(t),a)if(t.flags&256)t.flags&=-257,t=Av(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(j(558));else if(Ge||Jr(e,t,n,!1),a=(n&e.childLanes)!==0,Ge||a){if(i=xe,i!==null&&(r=by(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,Ls(e,r),Rn(i,e,r),gm;Tu(),t=Av(e,t,n)}else e=s.treeContext,we=ri(r.nextSibling),ln=t,ae=!0,Oa=null,ai=!1,e!==null&&Qy(t,e),t=$c(t,i),t.flags|=4096;return t}return e=ji(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function tu(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(j(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function vp(e,t,n,i,a){return As(t),n=am(e,t,n,i,void 0,a),i=sm(),e!==null&&!Ge?(rm(e,t,a),aa(e,t,a)):(ae&&i&&Jp(t),t.flags|=1,rn(e,t,n,a),t.child)}function wv(e,t,n,i,a,s){return As(t),t.updateQueue=null,n=o_(t,i,n,a),r_(e),i=sm(),e!==null&&!Ge?(rm(e,t,s),aa(e,t,s)):(ae&&i&&Jp(t),t.flags|=1,rn(e,t,n,s),t.child)}function Cv(e,t,n,i,a){if(As(t),t.stateNode===null){var s=Ar,r=n.contextType;typeof r=="object"&&r!==null&&(s=cn(r)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=mp,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},em(t),r=n.contextType,s.context=typeof r=="object"&&r!==null?cn(r):Ar,s.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Md(t,n,r,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&mp.enqueueReplaceState(s,s.state,null),sl(t,i,s,a),al(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var o=t.memoizedProps,l=Rs(n,o);s.props=l;var c=s.context,f=n.contextType;r=Ar,typeof f=="object"&&f!==null&&(r=cn(f));var d=n.getDerivedStateFromProps;f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==r)&&bv(t,s,i,r),Ea=!1;var h=t.memoizedState;s.state=h,sl(t,i,s,a),al(),c=t.memoizedState,o||h!==c||Ea?(typeof d=="function"&&(Md(t,n,d,i),c=t.memoizedState),(l=Ea||xv(t,n,l,i,h,c,r))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),s.props=i,s.state=c,s.context=r,i=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,lp(e,t),r=t.memoizedProps,f=Rs(n,r),s.props=f,d=t.pendingProps,h=s.context,c=n.contextType,l=Ar,typeof c=="object"&&c!==null&&(l=cn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==d||h!==l)&&bv(t,s,i,l),Ea=!1,h=t.memoizedState,s.state=h,sl(t,i,s,a),al();var p=t.memoizedState;r!==d||h!==p||Ea||e!==null&&e.dependencies!==null&&pu(e.dependencies)?(typeof o=="function"&&(Md(t,n,o,i),p=t.memoizedState),(f=Ea||xv(t,n,f,i,h,p,l)||e!==null&&e.dependencies!==null&&pu(e.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,p,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,p,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),s.props=i,s.state=p,s.context=l,i=f):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,tu(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=ws(t,e.child,null,a),t.child=ws(t,null,n,a)):rn(e,t,n,a),t.memoizedState=s.state,e=t.child):e=aa(e,t,a),e}function Rv(e,t,n,i){return Ts(),t.flags|=256,rn(e,t,n,i),t.child}var Ed={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Td(e){return{baseLanes:e,cachePool:$y()}}function Ad(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Bn),e}function W_(e,t,n){var i=t.pendingProps,a=!1,s=(t.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(ze.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ae){if(a?Aa(t):wa(t),(e=we)?(e=Px(e,ai),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ga!==null?{id:wi,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},n=Ky(e),n.return=t,t.child=n,ln=t,we=null)):e=null,e===null)throw Xa(t);return Up(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,a?(wa(t),a=t.mode,o=bu({mode:"hidden",children:o},a),i=bs(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=Td(n),i.childLanes=Ad(e,r,n),t.memoizedState=Ed,Qo(null,i)):(Aa(t),yp(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(s)t.flags&256?(Aa(t),t.flags&=-257,t=wd(e,t,n)):t.memoizedState!==null?(wa(t),t.child=e.child,t.flags|=128,t=null):(wa(t),o=i.fallback,a=t.mode,i=bu({mode:"visible",children:i.children},a),o=bs(o,a,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,ws(t,e.child,null,n),i=t.child,i.memoizedState=Td(n),i.childLanes=Ad(e,r,n),t.memoizedState=Ed,t=Qo(null,i));else if(Aa(t),Up(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(j(419)),i.stack="",i.digest=r,vl({value:i,source:null,stack:null}),t=wd(e,t,n)}else if(Ge||Jr(e,t,n,!1),r=(n&e.childLanes)!==0,Ge||r){if(r=xe,r!==null&&(i=by(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,Ls(e,i),Rn(r,e,i),gm;Dp(o)||Tu(),t=wd(e,t,n)}else Dp(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,we=ri(o.nextSibling),ln=t,ae=!0,Oa=null,ai=!1,e!==null&&Qy(t,e),t=yp(t,i.children),t.flags|=4096);return t}return a?(wa(t),o=i.fallback,a=t.mode,l=e.child,c=l.sibling,i=ji(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=ji(c,o):(o=bs(o,a,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,Qo(null,i),i=t.child,o=e.child.memoizedState,o===null?o=Td(n):(a=o.cachePool,a!==null?(l=ke._currentValue,a=a.parent!==l?{parent:l,pool:l}:a):a=$y(),o={baseLanes:o.baseLanes|n,cachePool:a}),i.memoizedState=o,i.childLanes=Ad(e,r,n),t.memoizedState=Ed,Qo(e.child,i)):(Aa(t),n=e.child,e=n.sibling,n=ji(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function yp(e,t){return t=bu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function bu(e,t){return e=Pn(22,e,null,t),e.lanes=0,e}function wd(e,t,n){return ws(t,e.child,null,n),e=yp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dv(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),sp(e.return,t,n)}function Cd(e,t,n,i,a,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function q_(e,t,n){var i=t.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=ze.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Se(ze,r),rn(e,t,i,n),i=ae?gl:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dv(e,n,t);else if(e.tag===19)Dv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&vu(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Cd(t,!1,a,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&vu(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Cd(t,!0,n,null,s,i);break;case"together":Cd(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function aa(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qa|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Jr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=ji(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ji(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vm(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&pu(e)))}function tE(e,t,n){switch(t.tag){case 3:ou(t,t.stateNode.containerInfo),Ta(t,ke,e.memoizedState.cache),Ts();break;case 27:case 5:qd(t);break;case 4:ou(t,t.stateNode.containerInfo);break;case 10:Ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,hp(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Aa(t),t.flags|=128,null):(n&t.child.childLanes)!==0?W_(e,t,n):(Aa(t),e=aa(e,t,n),e!==null?e.sibling:null);Aa(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Jr(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return q_(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Se(ze,ze.current),i)break;return null;case 22:return t.lanes=0,X_(e,t,n,t.pendingProps);case 24:Ta(t,ke,e.memoizedState.cache)}return aa(e,t,n)}function Y_(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ge=!0;else{if(!vm(e,n)&&(t.flags&128)===0)return Ge=!1,tE(e,t,n);Ge=(e.flags&131072)!==0}else Ge=!1,ae&&(t.flags&1048576)!==0&&Jy(t,gl,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=ys(t.elementType),t.type=e,typeof e=="function")Kp(e)?(i=Rs(e,i),t.tag=1,t=Cv(null,t,e,i,n)):(t.tag=0,t=vp(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===Op){t.tag=11,t=Mv(null,t,e,i,n);break t}else if(a===Pp){t.tag=14,t=Ev(null,t,e,i,n);break t}}throw t=Xd(e)||e,Error(j(306,t,""))}}return t;case 0:return vp(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=Rs(i,t.pendingProps),Cv(e,t,i,a,n);case 3:t:{if(ou(t,t.stateNode.containerInfo),e===null)throw Error(j(387));i=t.pendingProps;var s=t.memoizedState;a=s.element,lp(e,t),sl(t,i,null,n);var r=t.memoizedState;if(i=r.cache,Ta(t,ke,i),i!==s.cache&&rp(t,[ke],n,!0),al(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Rv(e,t,i,n);break t}else if(i!==a){a=ii(Error(j(424)),t),vl(a),t=Rv(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,we=ri(e.firstChild),ln=t,ae=!0,Oa=null,ai=!0,n=n_(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ts(),i===a){t=aa(e,t,n);break t}rn(e,t,i,n)}t=t.child}return t;case 26:return tu(e,t),e===null?(n=jv(t.type,null,t.pendingProps,null))?t.memoizedState=n:ae||(n=t.type,e=t.pendingProps,i=Ru(Ia.current).createElement(n),i[on]=t,i[Dn]=e,un(i,n,e),tn(i),t.stateNode=i):t.memoizedState=jv(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return qd(t),e===null&&ae&&(i=t.stateNode=Bx(t.type,t.pendingProps,Ia.current),ln=t,ai=!0,a=we,Za(t.type)?(Np=a,we=ri(i.firstChild)):we=a),rn(e,t,t.pendingProps.children,n),tu(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ae&&((a=i=we)&&(i=CE(i,t.type,t.pendingProps,ai),i!==null?(t.stateNode=i,ln=t,we=ri(i.firstChild),ai=!1,a=!0):a=!1),a||Xa(t)),qd(t),a=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,i=s.children,Cp(a,s)?i=null:r!==null&&Cp(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=am(e,t,W1,null,null,n),Ml._currentValue=a),tu(e,t),rn(e,t,i,n),t.child;case 6:return e===null&&ae&&((e=n=we)&&(n=RE(n,t.pendingProps,ai),n!==null?(t.stateNode=n,ln=t,we=null,e=!0):e=!1),e||Xa(t)),null;case 13:return W_(e,t,n);case 4:return ou(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ws(t,null,i,n):rn(e,t,i,n),t.child;case 11:return Mv(e,t,t.type,t.pendingProps,n);case 7:return rn(e,t,t.pendingProps,n),t.child;case 8:return rn(e,t,t.pendingProps.children,n),t.child;case 12:return rn(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Ta(t,t.type,i.value),rn(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,As(t),a=cn(a),i=i(a),t.flags|=1,rn(e,t,i,n),t.child;case 14:return Ev(e,t,t.type,t.pendingProps,n);case 15:return G_(e,t,t.type,t.pendingProps,n);case 19:return q_(e,t,n);case 31:return $1(e,t,n);case 22:return X_(e,t,n,t.pendingProps);case 24:return As(t),i=cn(ke),e===null?(a=$p(),a===null&&(a=xe,s=jp(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),t.memoizedState={parent:i,cache:a},em(t),Ta(t,ke,a)):((e.lanes&n)!==0&&(lp(e,t),sl(t,null,null,n),al()),a=e.memoizedState,s=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Ta(t,ke,i)):(i=s.cache,Ta(t,ke,i),i!==a.cache&&rp(t,[ke],n,!0))),rn(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(j(156,t.tag))}function Gi(e){e.flags|=4}function Rd(e,t,n,i,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(vx())e.flags|=8192;else throw Ms=mu,tm}else e.flags&=-16777217}function Uv(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Hx(t))if(vx())e.flags|=8192;else throw Ms=mu,tm}function zc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?yy():536870912,e.lanes|=t,Gr|=t)}function Xo(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function eE(e,t,n){var i=t.pendingProps;switch(Qp(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return Ae(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),$i(ke),Br(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(pr(t)?Gi(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,xd())),Ae(t),null;case 26:var a=t.type,s=t.memoizedState;return e===null?(Gi(t),s!==null?(Ae(t),Uv(t,s)):(Ae(t),Rd(t,a,null,i,n))):s?s!==e.memoizedState?(Gi(t),Ae(t),Uv(t,s)):(Ae(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Gi(t),Ae(t),Rd(t,a,e,i,n)),null;case 27:if(lu(t),n=Ia.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Gi(t);else{if(!i){if(t.stateNode===null)throw Error(j(166));return Ae(t),null}e=Di.current,pr(t)?rv(t,e):(e=Bx(a,i,n),t.stateNode=e,Gi(t))}return Ae(t),null;case 5:if(lu(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Gi(t);else{if(!i){if(t.stateNode===null)throw Error(j(166));return Ae(t),null}if(s=Di.current,pr(t))rv(t,s);else{var r=Ru(Ia.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[on]=t,s[Dn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=s;t:switch(un(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Gi(t)}}return Ae(t),Rd(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Gi(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(j(166));if(e=Ia.current,pr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=ln,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[on]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Lx(e.nodeValue,n)),e||Xa(t,!0)}else e=Ru(e).createTextNode(i),e[on]=t,t.stateNode=e}return Ae(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=pr(t),n!==null){if(e===null){if(!i)throw Error(j(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(557));e[on]=t}else Ts(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),e=!1}else n=xd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(On(t),t):(On(t),null);if((t.flags&128)!==0)throw Error(j(558))}return Ae(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=pr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(j(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(j(317));a[on]=t}else Ts(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),a=!1}else a=xd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(On(t),t):(On(t),null)}return On(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),zc(t,t.updateQueue),Ae(t),null);case 4:return Br(),e===null&&Em(t.stateNode.containerInfo),Ae(t),null;case 10:return $i(t.type),Ae(t),null;case 19:if(en(ze),i=t.memoizedState,i===null)return Ae(t),null;if(a=(t.flags&128)!==0,s=i.rendering,s===null)if(a)Xo(i,!1);else{if(Be!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=vu(e),s!==null){for(t.flags|=128,Xo(i,!1),e=s.updateQueue,t.updateQueue=e,zc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Zy(n,e),n=n.sibling;return Se(ze,ze.current&1|2),ae&&Yi(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&zn()>Mu&&(t.flags|=128,a=!0,Xo(i,!1),t.lanes=4194304)}else{if(!a)if(e=vu(s),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,zc(t,e),Xo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!ae)return Ae(t),null}else 2*zn()-i.renderingStartTime>Mu&&n!==536870912&&(t.flags|=128,a=!0,Xo(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=zn(),e.sibling=null,n=ze.current,Se(ze,a?n&1|2:n&1),ae&&Yi(t,i.treeForkCount),e):(Ae(t),null);case 22:case 23:return On(t),nm(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),n=t.updateQueue,n!==null&&zc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&en(Ss),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),$i(ke),Ae(t),null;case 25:return null;case 30:return null}throw Error(j(156,t.tag))}function nE(e,t){switch(Qp(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $i(ke),Br(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return lu(t),null;case 31:if(t.memoizedState!==null){if(On(t),t.alternate===null)throw Error(j(340));Ts()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(On(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));Ts()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return en(ze),null;case 4:return Br(),null;case 10:return $i(t.type),null;case 22:case 23:return On(t),nm(),e!==null&&en(Ss),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return $i(ke),null;case 25:return null;default:return null}}function Z_(e,t){switch(Qp(t),t.tag){case 3:$i(ke),Br();break;case 26:case 27:case 5:lu(t);break;case 4:Br();break;case 31:t.memoizedState!==null&&On(t);break;case 13:On(t);break;case 19:en(ze);break;case 10:$i(t.type);break;case 22:case 23:On(t),nm(),e!==null&&en(Ss);break;case 24:$i(ke)}}function Il(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){fe(t,t.return,o)}}function Wa(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(f){fe(a,l,f)}}}i=i.next}while(i!==s)}}catch(f){fe(t,t.return,f)}}function K_(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{a_(t,n)}catch(i){fe(e,e.return,i)}}}function J_(e,t,n){n.props=Rs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){fe(e,t,i)}}function ol(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){fe(e,t,a)}}function Ri(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){fe(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){fe(e,t,a)}else n.current=null}function Q_(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){fe(e,e.return,a)}}function Dd(e,t,n){try{var i=e.stateNode;SE(i,e.type,n,t),i[Dn]=t}catch(a){fe(e,e.return,a)}}function j_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Za(e.type)||e.tag===4}function Ud(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||j_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Za(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _p(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ji));else if(i!==4&&(i===27&&Za(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(_p(e,t,n),e=e.sibling;e!==null;)_p(e,t,n),e=e.sibling}function Su(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Za(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Su(e,t,n),e=e.sibling;e!==null;)Su(e,t,n),e=e.sibling}function $_(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);un(t,i,n),t[on]=e,t[Dn]=n}catch(s){fe(e,e.return,s)}}var Zi=!1,Ve=!1,Nd=!1,Nv=typeof WeakSet=="function"?WeakSet:Set,$e=null;function iE(e,t){if(e=e.containerInfo,Ap=Lu,e=Hy(e),qp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,f=0,d=e,h=null;e:for(;;){for(var p;d!==n||a!==0&&d.nodeType!==3||(o=r+a),d!==s||i!==0&&d.nodeType!==3||(l=r+i),d.nodeType===3&&(r+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===e)break e;if(h===n&&++c===a&&(o=r),h===s&&++f===i&&(l=r),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(wp={focusedElem:e,selectionRange:n},Lu=!1,$e=t;$e!==null;)if(t=$e,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$e=e;else for(;$e!==null;){switch(t=$e,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,a=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var v=Rs(n.type,a);e=i.getSnapshotBeforeUpdate(v,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(x){fe(n,n.return,x)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Rp(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Rp(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(j(163))}if(e=t.sibling,e!==null){e.return=t.return,$e=e;break}$e=t.return}}function tx(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Wi(e,n),i&4&&Il(5,n);break;case 1:if(Wi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){fe(n,n.return,r)}else{var a=Rs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){fe(n,n.return,r)}}i&64&&K_(n),i&512&&ol(n,n.return);break;case 3:if(Wi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{a_(e,t)}catch(r){fe(n,n.return,r)}}break;case 27:t===null&&i&4&&$_(n);case 26:case 5:Wi(e,n),t===null&&i&4&&Q_(n),i&512&&ol(n,n.return);break;case 12:Wi(e,n);break;case 31:Wi(e,n),i&4&&ix(e,n);break;case 13:Wi(e,n),i&4&&ax(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=fE.bind(null,n),DE(e,n))));break;case 22:if(i=n.memoizedState!==null||Zi,!i){t=t!==null&&t.memoizedState!==null||Ve,a=Zi;var s=Ve;Zi=i,(Ve=t)&&!s?qi(e,n,(n.subtreeFlags&8772)!==0):Wi(e,n),Zi=a,Ve=s}break;case 30:break;default:Wi(e,n)}}function ex(e){var t=e.alternate;t!==null&&(e.alternate=null,ex(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Hp(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ue=null,wn=!1;function Xi(e,t,n){for(n=n.child;n!==null;)nx(e,t,n),n=n.sibling}function nx(e,t,n){if(Fn&&typeof Fn.onCommitFiberUnmount=="function")try{Fn.onCommitFiberUnmount(wl,n)}catch{}switch(n.tag){case 26:Ve||Ri(n,t),Xi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ve||Ri(n,t);var i=Ue,a=wn;Za(n.type)&&(Ue=n.stateNode,wn=!1),Xi(e,t,n),hl(n.stateNode),Ue=i,wn=a;break;case 5:Ve||Ri(n,t);case 6:if(i=Ue,a=wn,Ue=null,Xi(e,t,n),Ue=i,wn=a,Ue!==null)if(wn)try{(Ue.nodeType===9?Ue.body:Ue.nodeName==="HTML"?Ue.ownerDocument.body:Ue).removeChild(n.stateNode)}catch(s){fe(n,t,s)}else try{Ue.removeChild(n.stateNode)}catch(s){fe(n,t,s)}break;case 18:Ue!==null&&(wn?(e=Ue,Yv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Yr(e)):Yv(Ue,n.stateNode));break;case 4:i=Ue,a=wn,Ue=n.stateNode.containerInfo,wn=!0,Xi(e,t,n),Ue=i,wn=a;break;case 0:case 11:case 14:case 15:Wa(2,n,t),Ve||Wa(4,n,t),Xi(e,t,n);break;case 1:Ve||(Ri(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&J_(n,t,i)),Xi(e,t,n);break;case 21:Xi(e,t,n);break;case 22:Ve=(i=Ve)||n.memoizedState!==null,Xi(e,t,n),Ve=i;break;default:Xi(e,t,n)}}function ix(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Yr(e)}catch(n){fe(t,t.return,n)}}}function ax(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Yr(e)}catch(n){fe(t,t.return,n)}}function aE(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Nv),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Nv),t;default:throw Error(j(435,e.tag))}}function Fc(e,t){var n=aE(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=dE.bind(null,e,i);i.then(a,a)}})}function Tn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],s=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(Za(o.type)){Ue=o.stateNode,wn=!1;break t}break;case 5:Ue=o.stateNode,wn=!1;break t;case 3:case 4:Ue=o.stateNode.containerInfo,wn=!0;break t}o=o.return}if(Ue===null)throw Error(j(160));nx(s,r,a),Ue=null,wn=!1,s=a.alternate,s!==null&&(s.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)sx(t,e),t=t.sibling}var di=null;function sx(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Tn(t,e),An(e),i&4&&(Wa(3,e,e.return),Il(3,e),Wa(5,e,e.return));break;case 1:Tn(t,e),An(e),i&512&&(Ve||n===null||Ri(n,n.return)),i&64&&Zi&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=di;if(Tn(t,e),An(e),i&512&&(Ve||n===null||Ri(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":s=a.getElementsByTagName("title")[0],(!s||s[Dl]||s[on]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=a.createElement(i),a.head.insertBefore(s,a.querySelector("head > title"))),un(s,i,n),s[on]=e,tn(s),i=s;break t;case"link":var r=ty("link","href",a).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}s=a.createElement(i),un(s,i,n),a.head.appendChild(s);break;case"meta":if(r=ty("meta","content",a).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}s=a.createElement(i),un(s,i,n),a.head.appendChild(s);break;default:throw Error(j(468,i))}s[on]=e,tn(s),i=s}e.stateNode=i}else ey(a,e.type,e.stateNode);else e.stateNode=$v(a,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?ey(a,e.type,e.stateNode):$v(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Dd(e,e.memoizedProps,n.memoizedProps)}break;case 27:Tn(t,e),An(e),i&512&&(Ve||n===null||Ri(n,n.return)),n!==null&&i&4&&Dd(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Tn(t,e),An(e),i&512&&(Ve||n===null||Ri(n,n.return)),e.flags&32){a=e.stateNode;try{Fr(a,"")}catch(v){fe(e,e.return,v)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,Dd(e,a,n!==null?n.memoizedProps:a)),i&1024&&(Nd=!0);break;case 6:if(Tn(t,e),An(e),i&4){if(e.stateNode===null)throw Error(j(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(v){fe(e,e.return,v)}}break;case 3:if(iu=null,a=di,di=Du(t.containerInfo),Tn(t,e),di=a,An(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Yr(t.containerInfo)}catch(v){fe(e,e.return,v)}Nd&&(Nd=!1,rx(e));break;case 4:i=di,di=Du(e.stateNode.containerInfo),Tn(t,e),An(e),di=i;break;case 12:Tn(t,e),An(e);break;case 31:Tn(t,e),An(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Fc(e,i)));break;case 13:Tn(t,e),An(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(qu=zn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Fc(e,i)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Zi,f=Ve;if(Zi=c||a,Ve=f||l,Tn(t,e),Ve=f,Zi=c,An(e),i&8192)t:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Zi||Ve||_s(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(s=l.stateNode,a)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var d=l.memoizedProps.style,h=d!=null&&d.hasOwnProperty("display")?d.display:null;o.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(v){fe(l,l.return,v)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(v){fe(l,l.return,v)}}}else if(t.tag===18){if(n===null){l=t;try{var p=l.stateNode;a?Zv(p,!0):Zv(l.stateNode,!1)}catch(v){fe(l,l.return,v)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Fc(e,n))));break;case 19:Tn(t,e),An(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Fc(e,i)));break;case 30:break;case 21:break;default:Tn(t,e),An(e)}}function An(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(j_(i)){n=i;break}i=i.return}if(n==null)throw Error(j(160));switch(n.tag){case 27:var a=n.stateNode,s=Ud(e);Su(e,s,a);break;case 5:var r=n.stateNode;n.flags&32&&(Fr(r,""),n.flags&=-33);var o=Ud(e);Su(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Ud(e);_p(e,c,l);break;default:throw Error(j(161))}}catch(f){fe(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function rx(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;rx(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Wi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)tx(e,t.alternate,t),t=t.sibling}function _s(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wa(4,t,t.return),_s(t);break;case 1:Ri(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&J_(t,t.return,n),_s(t);break;case 27:hl(t.stateNode);case 26:case 5:Ri(t,t.return),_s(t);break;case 22:t.memoizedState===null&&_s(t);break;case 30:_s(t);break;default:_s(t)}e=e.sibling}}function qi(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,s=t,r=s.flags;switch(s.tag){case 0:case 11:case 15:qi(a,s,n),Il(4,s);break;case 1:if(qi(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){fe(i,i.return,c)}if(i=s,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)i_(l[a],o)}catch(c){fe(i,i.return,c)}}n&&r&64&&K_(s),ol(s,s.return);break;case 27:$_(s);case 26:case 5:qi(a,s,n),n&&i===null&&r&4&&Q_(s),ol(s,s.return);break;case 12:qi(a,s,n);break;case 31:qi(a,s,n),n&&r&4&&ix(a,s);break;case 13:qi(a,s,n),n&&r&4&&ax(a,s);break;case 22:s.memoizedState===null&&qi(a,s,n),ol(s,s.return);break;case 30:break;default:qi(a,s,n)}t=t.sibling}}function ym(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Nl(n))}function _m(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Nl(e))}function fi(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ox(e,t,n,i),t=t.sibling}function ox(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:fi(e,t,n,i),a&2048&&Il(9,t);break;case 1:fi(e,t,n,i);break;case 3:fi(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Nl(e)));break;case 12:if(a&2048){fi(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){fe(t,t.return,l)}}else fi(e,t,n,i);break;case 31:fi(e,t,n,i);break;case 13:fi(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,r=t.alternate,t.memoizedState!==null?s._visibility&2?fi(e,t,n,i):ll(e,t):s._visibility&2?fi(e,t,n,i):(s._visibility|=2,gr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),a&2048&&ym(r,t);break;case 24:fi(e,t,n,i),a&2048&&_m(t.alternate,t);break;default:fi(e,t,n,i)}}function gr(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:gr(s,r,o,l,a),Il(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&2?gr(s,r,o,l,a):ll(s,r):(f._visibility|=2,gr(s,r,o,l,a)),a&&c&2048&&ym(r.alternate,r);break;case 24:gr(s,r,o,l,a),a&&c&2048&&_m(r.alternate,r);break;default:gr(s,r,o,l,a)}t=t.sibling}}function ll(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:ll(n,i),a&2048&&ym(i.alternate,i);break;case 24:ll(n,i),a&2048&&_m(i.alternate,i);break;default:ll(n,i)}t=t.sibling}}var jo=8192;function mr(e,t,n){if(e.subtreeFlags&jo)for(e=e.child;e!==null;)lx(e,t,n),e=e.sibling}function lx(e,t,n){switch(e.tag){case 26:mr(e,t,n),e.flags&jo&&e.memoizedState!==null&&kE(n,di,e.memoizedState,e.memoizedProps);break;case 5:mr(e,t,n);break;case 3:case 4:var i=di;di=Du(e.stateNode.containerInfo),mr(e,t,n),di=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=jo,jo=16777216,mr(e,t,n),jo=i):mr(e,t,n));break;default:mr(e,t,n)}}function cx(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Wo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];$e=i,hx(i,e)}cx(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ux(e),e=e.sibling}function ux(e){switch(e.tag){case 0:case 11:case 15:Wo(e),e.flags&2048&&Wa(9,e,e.return);break;case 3:Wo(e);break;case 12:Wo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,eu(e)):Wo(e);break;default:Wo(e)}}function eu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];$e=i,hx(i,e)}cx(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wa(8,t,t.return),eu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,eu(t));break;default:eu(t)}e=e.sibling}}function hx(e,t){for(;$e!==null;){var n=$e;switch(n.tag){case 0:case 11:case 15:Wa(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Nl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,$e=i;else t:for(n=e;$e!==null;){i=$e;var a=i.sibling,s=i.return;if(ex(i),i===n){$e=null;break t}if(a!==null){a.return=s,$e=a;break t}$e=s}}}var sE={getCacheForType:function(e){var t=cn(ke),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return cn(ke).controller.signal}},rE=typeof WeakMap=="function"?WeakMap:Map,le=0,xe=null,te=null,ie=0,he=0,In=null,Ua=!1,jr=!1,xm=!1,sa=0,Be=0,qa=0,Es=0,bm=0,Bn=0,Gr=0,cl=null,Cn=null,xp=!1,qu=0,fx=0,Mu=1/0,Eu=null,za=null,Ye=0,Fa=null,Xr=null,ta=0,bp=0,Sp=null,dx=null,ul=0,Mp=null;function Vn(){return(le&2)!==0&&ie!==0?ie&-ie:Pt.T!==null?Mm():Sy()}function px(){if(Bn===0)if((ie&536870912)===0||ae){var e=Rc;Rc<<=1,(Rc&3932160)===0&&(Rc=262144),Bn=e}else Bn=536870912;return e=Gn.current,e!==null&&(e.flags|=32),Bn}function Rn(e,t,n){(e===xe&&(he===2||he===9)||e.cancelPendingCommit!==null)&&(Wr(e,0),Na(e,ie,Bn,!1)),Rl(e,n),((le&2)===0||e!==xe)&&(e===xe&&((le&2)===0&&(Es|=n),Be===4&&Na(e,ie,Bn,!1)),Ni(e))}function mx(e,t,n){if((le&6)!==0)throw Error(j(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Cl(e,t),a=i?cE(e,t):Ld(e,t,!0),s=i;do{if(a===0){jr&&!i&&Na(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!oE(n)){a=Ld(e,t,!1),s=!1;continue}if(a===2){if(s=t,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;a=cl;var l=o.current.memoizedState.isDehydrated;if(l&&(Wr(o,r).flags|=256),r=Ld(o,r,!1),r!==2){if(xm&&!l){o.errorRecoveryDisabledLanes|=s,Es|=s,a=4;break t}s=Cn,Cn=a,s!==null&&(Cn===null?Cn=s:Cn.push.apply(Cn,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){Wr(e,0),Na(e,t,0,!0);break}t:{switch(i=e,s=a,s){case 0:case 1:throw Error(j(345));case 4:if((t&4194048)!==t)break;case 6:Na(i,t,Bn,!Ua);break t;case 2:Cn=null;break;case 3:case 5:break;default:throw Error(j(329))}if((t&62914560)===t&&(a=qu+300-zn(),10<a)){if(Na(i,t,Bn,!Ua),Ou(i,0,!0)!==0)break t;ta=t,i.timeoutHandle=Ox(Lv.bind(null,i,n,Cn,Eu,xp,t,Bn,Es,Gr,Ua,s,"Throttled",-0,0),a);break t}Lv(i,n,Cn,Eu,xp,t,Bn,Es,Gr,Ua,s,null,-0,0)}}break}while(!0);Ni(e)}function Lv(e,t,n,i,a,s,r,o,l,c,f,d,h,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)===16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ji},lx(t,s,d);var v=(s&62914560)===s?qu-zn():(s&4194048)===s?fx-zn():0;if(v=GE(d,v),v!==null){ta=s,e.cancelPendingCommit=v(Ov.bind(null,e,t,s,n,i,a,r,o,l,f,d,null,h,p)),Na(e,s,r,!c);return}}Ov(e,t,s,n,i,a,r,o,l)}function oE(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!kn(s(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Na(e,t,n,i){t&=~bm,t&=~Es,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var s=31-Hn(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&_y(e,n,t)}function Yu(){return(le&6)===0?(Ol(0,!1),!1):!0}function Sm(){if(te!==null){if(he===0)var e=te.return;else e=te,Qi=Is=null,om(e),Ir=null,yl=0,e=te;for(;e!==null;)Z_(e.alternate,e),e=e.return;te=null}}function Wr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,TE(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ta=0,Sm(),xe=e,te=n=ji(e.current,null),ie=t,he=0,In=null,Ua=!1,jr=Cl(e,t),xm=!1,Gr=Bn=bm=Es=qa=Be=0,Cn=cl=null,xp=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-Hn(i),s=1<<a;t|=e[a],i&=~s}return sa=t,Fu(),n}function gx(e,t){Xt=null,Pt.H=xl,t===Qr||t===Vu?(t=hv(),he=3):t===tm?(t=hv(),he=4):he=t===gm?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,In=t,te===null&&(Be=1,xu(e,ii(t,e.current)))}function vx(){var e=Gn.current;return e===null?!0:(ie&4194048)===ie?si===null:(ie&62914560)===ie||(ie&536870912)!==0?e===si:!1}function yx(){var e=Pt.H;return Pt.H=xl,e===null?xl:e}function _x(){var e=Pt.A;return Pt.A=sE,e}function Tu(){Be=4,Ua||(ie&4194048)!==ie&&Gn.current!==null||(jr=!0),(qa&134217727)===0&&(Es&134217727)===0||xe===null||Na(xe,ie,Bn,!1)}function Ld(e,t,n){var i=le;le|=2;var a=yx(),s=_x();(xe!==e||ie!==t)&&(Eu=null,Wr(e,t)),t=!1;var r=Be;t:do try{if(he!==0&&te!==null){var o=te,l=In;switch(he){case 8:Sm(),r=6;break t;case 3:case 2:case 9:case 6:Gn.current===null&&(t=!0);var c=he;if(he=0,In=null,Rr(e,o,l,c),n&&jr){r=0;break t}break;default:c=he,he=0,In=null,Rr(e,o,l,c)}}lE(),r=Be;break}catch(f){gx(e,f)}while(!0);return t&&e.shellSuspendCounter++,Qi=Is=null,le=i,Pt.H=a,Pt.A=s,te===null&&(xe=null,ie=0,Fu()),r}function lE(){for(;te!==null;)xx(te)}function cE(e,t){var n=le;le|=2;var i=yx(),a=_x();xe!==e||ie!==t?(Eu=null,Mu=zn()+500,Wr(e,t)):jr=Cl(e,t);t:do try{if(he!==0&&te!==null){t=te;var s=In;e:switch(he){case 1:he=0,In=null,Rr(e,t,s,1);break;case 2:case 9:if(uv(s)){he=0,In=null,Iv(t);break}t=function(){he!==2&&he!==9||xe!==e||(he=7),Ni(e)},s.then(t,t);break t;case 3:he=7;break t;case 4:he=5;break t;case 7:uv(s)?(he=0,In=null,Iv(t)):(he=0,In=null,Rr(e,t,s,7));break;case 5:var r=null;switch(te.tag){case 26:r=te.memoizedState;case 5:case 27:var o=te;if(r?Hx(r):o.stateNode.complete){he=0,In=null;var l=o.sibling;if(l!==null)te=l;else{var c=o.return;c!==null?(te=c,Zu(c)):te=null}break e}}he=0,In=null,Rr(e,t,s,5);break;case 6:he=0,In=null,Rr(e,t,s,6);break;case 8:Sm(),Be=6;break t;default:throw Error(j(462))}}uE();break}catch(f){gx(e,f)}while(!0);return Qi=Is=null,Pt.H=i,Pt.A=a,le=n,te!==null?0:(xe=null,ie=0,Fu(),Be)}function uE(){for(;te!==null&&!LM();)xx(te)}function xx(e){var t=Y_(e.alternate,e,sa);e.memoizedProps=e.pendingProps,t===null?Zu(e):te=t}function Iv(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=wv(n,t,t.pendingProps,t.type,void 0,ie);break;case 11:t=wv(n,t,t.pendingProps,t.type.render,t.ref,ie);break;case 5:om(t);default:Z_(n,t),t=te=Zy(t,sa),t=Y_(n,t,sa)}e.memoizedProps=e.pendingProps,t===null?Zu(e):te=t}function Rr(e,t,n,i){Qi=Is=null,om(t),Ir=null,yl=0;var a=t.return;try{if(j1(e,a,t,n,ie)){Be=1,xu(e,ii(n,e.current)),te=null;return}}catch(s){if(a!==null)throw te=a,s;Be=1,xu(e,ii(n,e.current)),te=null;return}t.flags&32768?(ae||i===1?e=!0:jr||(ie&536870912)!==0?e=!1:(Ua=e=!0,(i===2||i===9||i===3||i===6)&&(i=Gn.current,i!==null&&i.tag===13&&(i.flags|=16384))),bx(t,e)):Zu(t)}function Zu(e){var t=e;do{if((t.flags&32768)!==0){bx(t,Ua);return}e=t.return;var n=eE(t.alternate,t,sa);if(n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);Be===0&&(Be=5)}function bx(e,t){do{var n=nE(e.alternate,e);if(n!==null){n.flags&=32767,te=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){te=e;return}te=e=n}while(e!==null);Be=6,te=null}function Ov(e,t,n,i,a,s,r,o,l){e.cancelPendingCommit=null;do Ku();while(Ye!==0);if((le&6)!==0)throw Error(j(327));if(t!==null){if(t===e.current)throw Error(j(177));if(s=t.lanes|t.childLanes,s|=Yp,GM(e,n,s,r,o,l),e===xe&&(te=xe=null,ie=0),Xr=t,Fa=e,ta=n,bp=s,Sp=a,dx=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,pE(cu,function(){return Ax(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Pt.T,Pt.T=null,a=ce.p,ce.p=2,r=le,le|=4;try{iE(e,t,n)}finally{le=r,ce.p=a,Pt.T=i}}Ye=1,Sx(),Mx(),Ex()}}function Sx(){if(Ye===1){Ye=0;var e=Fa,t=Xr,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=Pt.T,Pt.T=null;var i=ce.p;ce.p=2;var a=le;le|=4;try{sx(t,e);var s=wp,r=Hy(e.containerInfo),o=s.focusedElem,l=s.selectionRange;if(r!==o&&o&&o.ownerDocument&&Fy(o.ownerDocument.documentElement,o)){if(l!==null&&qp(o)){var c=l.start,f=l.end;if(f===void 0&&(f=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(f,o.value.length);else{var d=o.ownerDocument||document,h=d&&d.defaultView||window;if(h.getSelection){var p=h.getSelection(),v=o.textContent.length,x=Math.min(l.start,v),m=l.end===void 0?x:Math.min(l.end,v);!p.extend&&x>m&&(r=m,m=x,x=r);var u=iv(o,x),g=iv(o,m);if(u&&g&&(p.rangeCount!==1||p.anchorNode!==u.node||p.anchorOffset!==u.offset||p.focusNode!==g.node||p.focusOffset!==g.offset)){var _=d.createRange();_.setStart(u.node,u.offset),p.removeAllRanges(),x>m?(p.addRange(_),p.extend(g.node,g.offset)):(_.setEnd(g.node,g.offset),p.addRange(_))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var y=d[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}Lu=!!Ap,wp=Ap=null}finally{le=a,ce.p=i,Pt.T=n}}e.current=t,Ye=2}}function Mx(){if(Ye===2){Ye=0;var e=Fa,t=Xr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Pt.T,Pt.T=null;var i=ce.p;ce.p=2;var a=le;le|=4;try{tx(e,t.alternate,t)}finally{le=a,ce.p=i,Pt.T=n}}Ye=3}}function Ex(){if(Ye===4||Ye===3){Ye=0,IM();var e=Fa,t=Xr,n=ta,i=dx;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ye=5:(Ye=0,Xr=Fa=null,Tx(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(za=null),Fp(n),t=t.stateNode,Fn&&typeof Fn.onCommitFiberRoot=="function")try{Fn.onCommitFiberRoot(wl,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Pt.T,a=ce.p,ce.p=2,Pt.T=null;try{for(var s=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];s(o.value,{componentStack:o.stack})}}finally{Pt.T=t,ce.p=a}}(ta&3)!==0&&Ku(),Ni(e),a=e.pendingLanes,(n&261930)!==0&&(a&42)!==0?e===Mp?ul++:(ul=0,Mp=e):ul=0,Ol(0,!1)}}function Tx(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Nl(t)))}function Ku(){return Sx(),Mx(),Ex(),Ax()}function Ax(){if(Ye!==5)return!1;var e=Fa,t=bp;bp=0;var n=Fp(ta),i=Pt.T,a=ce.p;try{ce.p=32>n?32:n,Pt.T=null,n=Sp,Sp=null;var s=Fa,r=ta;if(Ye=0,Xr=Fa=null,ta=0,(le&6)!==0)throw Error(j(331));var o=le;if(le|=4,ux(s.current),ox(s,s.current,r,n),le=o,Ol(0,!1),Fn&&typeof Fn.onPostCommitFiberRoot=="function")try{Fn.onPostCommitFiberRoot(wl,s)}catch{}return!0}finally{ce.p=a,Pt.T=i,Tx(e,t)}}function Pv(e,t,n){t=ii(n,t),t=gp(e.stateNode,t,2),e=Ba(e,t,2),e!==null&&(Rl(e,2),Ni(e))}function fe(e,t,n){if(e.tag===3)Pv(e,e,n);else for(;t!==null;){if(t.tag===3){Pv(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(za===null||!za.has(i))){e=ii(n,e),n=V_(2),i=Ba(t,n,2),i!==null&&(k_(n,i,t,e),Rl(i,2),Ni(i));break}}t=t.return}}function Id(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new rE;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(xm=!0,a.add(n),e=hE.bind(null,e,t,n),t.then(e,e))}function hE(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,xe===e&&(ie&n)===n&&(Be===4||Be===3&&(ie&62914560)===ie&&300>zn()-qu?(le&2)===0&&Wr(e,0):bm|=n,Gr===ie&&(Gr=0)),Ni(e)}function wx(e,t){t===0&&(t=yy()),e=Ls(e,t),e!==null&&(Rl(e,t),Ni(e))}function fE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wx(e,n)}function dE(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(j(314))}i!==null&&i.delete(t),wx(e,n)}function pE(e,t){return Bp(e,t)}var Au=null,vr=null,Ep=!1,wu=!1,Od=!1,La=0;function Ni(e){e!==vr&&e.next===null&&(vr===null?Au=vr=e:vr=vr.next=e),wu=!0,Ep||(Ep=!0,gE())}function Ol(e,t){if(!Od&&wu){Od=!0;do for(var n=!1,i=Au;i!==null;){if(!t)if(e!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-Hn(42|e)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,Bv(i,s))}else s=ie,s=Ou(i,i===xe?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(s&3)===0||Cl(i,s)||(n=!0,Bv(i,s));i=i.next}while(n);Od=!1}}function mE(){Cx()}function Cx(){wu=Ep=!1;var e=0;La!==0&&EE()&&(e=La);for(var t=zn(),n=null,i=Au;i!==null;){var a=i.next,s=Rx(i,t);s===0?(i.next=null,n===null?Au=a:n.next=a,a===null&&(vr=n)):(n=i,(e!==0||(s&3)!==0)&&(wu=!0)),i=a}Ye!==0&&Ye!==5||Ol(e,!1),La!==0&&(La=0)}function Rx(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-Hn(s),o=1<<r,l=a[r];l===-1?((o&n)===0||(o&i)!==0)&&(a[r]=kM(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}if(t=xe,n=ie,n=Ou(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(he===2||he===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&ud(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Cl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&ud(i),Fp(n)){case 2:case 8:n=gy;break;case 32:n=cu;break;case 268435456:n=vy;break;default:n=cu}return i=Dx.bind(null,e),n=Bp(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&ud(i),e.callbackPriority=2,e.callbackNode=null,2}function Dx(e,t){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ku()&&e.callbackNode!==n)return null;var i=ie;return i=Ou(e,e===xe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(mx(e,i,t),Rx(e,zn()),e.callbackNode!=null&&e.callbackNode===n?Dx.bind(null,e):null)}function Bv(e,t){if(Ku())return null;mx(e,t,!0)}function gE(){AE(function(){(le&6)!==0?Bp(my,mE):Cx()})}function Mm(){if(La===0){var e=Hr;e===0&&(e=Cc,Cc<<=1,(Cc&261888)===0&&(Cc=256)),La=e}return La}function zv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:qc(""+e)}function Fv(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function vE(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var s=zv((a[Dn]||null).action),r=i.submitter;r&&(t=(t=r[Dn]||null)?zv(t.formAction):r.getAttribute("formAction"),t!==null&&(s=t,r=null));var o=new Pu("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(La!==0){var l=r?Fv(a,r):new FormData(a);pp(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=r?Fv(a,r):new FormData(a),pp(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(Hc=0;Hc<np.length;Hc++)Vc=np[Hc],Hv=Vc.toLowerCase(),Vv=Vc[0].toUpperCase()+Vc.slice(1),pi(Hv,"on"+Vv);var Vc,Hv,Vv,Hc;pi(ky,"onAnimationEnd");pi(Gy,"onAnimationIteration");pi(Xy,"onAnimationStart");pi("dblclick","onDoubleClick");pi("focusin","onFocus");pi("focusout","onBlur");pi(O1,"onTransitionRun");pi(P1,"onTransitionStart");pi(B1,"onTransitionCancel");pi(Wy,"onTransitionEnd");zr("onMouseEnter",["mouseout","mouseover"]);zr("onMouseLeave",["mouseout","mouseover"]);zr("onPointerEnter",["pointerout","pointerover"]);zr("onPointerLeave",["pointerout","pointerover"]);Ds("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ds("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ds("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ds("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ds("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ds("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bl));function Ux(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var s=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(f){hu(f)}a.currentTarget=null,s=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(f){hu(f)}a.currentTarget=null,s=l}}}}function $t(e,t){var n=t[Zd];n===void 0&&(n=t[Zd]=new Set);var i=e+"__bubble";n.has(i)||(Nx(t,e,2,!1),n.add(i))}function Pd(e,t,n){var i=0;t&&(i|=4),Nx(n,e,i,t)}var kc="_reactListening"+Math.random().toString(36).slice(2);function Em(e){if(!e[kc]){e[kc]=!0,My.forEach(function(n){n!=="selectionchange"&&(yE.has(n)||Pd(n,!1,e),Pd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[kc]||(t[kc]=!0,Pd("selectionchange",!1,t))}}function Nx(e,t,n,i){switch(Wx(t)){case 2:var a=qE;break;case 8:a=YE;break;default:a=Cm}n=a.bind(null,t,n,e),a=void 0,!$d||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Bd(e,t,n,i,a){var s=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=xr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=s=r;continue t}o=o.parentNode}}i=i.return}Uy(function(){var c=s,f=kp(n),d=[];t:{var h=qy.get(e);if(h!==void 0){var p=Pu,v=e;switch(e){case"keypress":if(Zc(n)===0)break t;case"keydown":case"keyup":p=d1;break;case"focusin":v="focus",p=md;break;case"focusout":v="blur",p=md;break;case"beforeblur":case"afterblur":p=md;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Z0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=e1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=g1;break;case ky:case Gy:case Xy:p=a1;break;case Wy:p=y1;break;case"scroll":case"scrollend":p=$M;break;case"wheel":p=x1;break;case"copy":case"cut":case"paste":p=r1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=J0;break;case"toggle":case"beforetoggle":p=S1}var x=(t&4)!==0,m=!x&&(e==="scroll"||e==="scrollend"),u=x?h!==null?h+"Capture":null:h;x=[];for(var g=c,_;g!==null;){var y=g;if(_=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||_===null||u===null||(y=dl(g,u),y!=null&&x.push(Sl(g,y,_))),m)break;g=g.return}0<x.length&&(h=new p(h,v,null,n,f),d.push({event:h,listeners:x}))}}if((t&7)===0){t:{if(h=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",h&&n!==jd&&(v=n.relatedTarget||n.fromElement)&&(xr(v)||v[Zr]))break t;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?xr(v):null,v!==null&&(m=Al(v),x=v.tag,v!==m||x!==5&&x!==27&&x!==6)&&(v=null)):(p=null,v=c),p!==v)){if(x=Z0,y="onMouseLeave",u="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(x=J0,y="onPointerLeave",u="onPointerEnter",g="pointer"),m=p==null?h:Jo(p),_=v==null?h:Jo(v),h=new x(y,g+"leave",p,n,f),h.target=m,h.relatedTarget=_,y=null,xr(f)===c&&(x=new x(u,g+"enter",v,n,f),x.target=_,x.relatedTarget=m,y=x),m=y,p&&v)e:{for(x=_E,u=p,g=v,_=0,y=u;y;y=x(y))_++;y=0;for(var T=g;T;T=x(T))y++;for(;0<_-y;)u=x(u),_--;for(;0<y-_;)g=x(g),y--;for(;_--;){if(u===g||g!==null&&u===g.alternate){x=u;break e}u=x(u),g=x(g)}x=null}else x=null;p!==null&&kv(d,h,p,x,!1),v!==null&&m!==null&&kv(d,m,v,x,!0)}}t:{if(h=c?Jo(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var w=tv;else if($0(h))if(By)w=N1;else{w=D1;var A=R1}else p=h.nodeName,!p||p.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?c&&Vp(c.elementType)&&(w=tv):w=U1;if(w&&(w=w(e,c))){Py(d,w,n,f);break t}A&&A(e,h,c),e==="focusout"&&c&&h.type==="number"&&c.memoizedProps.value!=null&&Qd(h,"number",h.value)}switch(A=c?Jo(c):window,e){case"focusin":($0(A)||A.contentEditable==="true")&&(Mr=A,tp=c,el=null);break;case"focusout":el=tp=Mr=null;break;case"mousedown":ep=!0;break;case"contextmenu":case"mouseup":case"dragend":ep=!1,av(d,n,f);break;case"selectionchange":if(I1)break;case"keydown":case"keyup":av(d,n,f)}var D;if(Wp)t:{switch(e){case"compositionstart":var M="onCompositionStart";break t;case"compositionend":M="onCompositionEnd";break t;case"compositionupdate":M="onCompositionUpdate";break t}M=void 0}else Sr?Iy(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(Ly&&n.locale!=="ko"&&(Sr||M!=="onCompositionStart"?M==="onCompositionEnd"&&Sr&&(D=Ny()):(Da=f,Gp="value"in Da?Da.value:Da.textContent,Sr=!0)),A=Cu(c,M),0<A.length&&(M=new K0(M,e,null,n,f),d.push({event:M,listeners:A}),D?M.data=D:(D=Oy(n),D!==null&&(M.data=D)))),(D=E1?T1(e,n):A1(e,n))&&(M=Cu(c,"onBeforeInput"),0<M.length&&(A=new K0("onBeforeInput","beforeinput",null,n,f),d.push({event:A,listeners:M}),A.data=D)),vE(d,e,c,n,f)}Ux(d,t)})}function Sl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Cu(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=dl(e,n),a!=null&&i.unshift(Sl(e,a,s)),a=dl(e,t),a!=null&&i.push(Sl(e,a,s))),e.tag===3)return i;e=e.return}return[]}function _E(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function kv(e,t,n,i,a){for(var s=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=dl(n,s),c!=null&&r.unshift(Sl(n,c,l))):a||(c=dl(n,s),c!=null&&r.push(Sl(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var xE=/\r\n?/g,bE=/\u0000|\uFFFD/g;function Gv(e){return(typeof e=="string"?e:""+e).replace(xE,`
`).replace(bE,"")}function Lx(e,t){return t=Gv(t),Gv(e)===t}function ge(e,t,n,i,a,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Fr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Fr(e,""+i);break;case"className":Uc(e,"class",i);break;case"tabIndex":Uc(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Uc(e,n,i);break;case"style":Dy(e,i,s);break;case"data":if(t!=="object"){Uc(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=qc(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&ge(e,t,"name",a.name,a,null),ge(e,t,"formEncType",a.formEncType,a,null),ge(e,t,"formMethod",a.formMethod,a,null),ge(e,t,"formTarget",a.formTarget,a,null)):(ge(e,t,"encType",a.encType,a,null),ge(e,t,"method",a.method,a,null),ge(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=qc(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Ji);break;case"onScroll":i!=null&&$t("scroll",e);break;case"onScrollEnd":i!=null&&$t("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(j(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(j(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=qc(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":$t("beforetoggle",e),$t("toggle",e),Wc(e,"popover",i);break;case"xlinkActuate":ki(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ki(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ki(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ki(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ki(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ki(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ki(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ki(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ki(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Wc(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=QM.get(n)||n,Wc(e,n,i))}}function Tp(e,t,n,i,a,s){switch(n){case"style":Dy(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(j(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(j(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Fr(e,i):(typeof i=="number"||typeof i=="bigint")&&Fr(e,""+i);break;case"onScroll":i!=null&&$t("scroll",e);break;case"onScrollEnd":i!=null&&$t("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ey.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),s=e[Dn]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,a),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Wc(e,n,i)}}}function un(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":$t("error",e),$t("load",e);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(j(137,t));default:ge(e,t,s,r,n,null)}}a&&ge(e,t,"srcSet",n.srcSet,n,null),i&&ge(e,t,"src",n.src,n,null);return;case"input":$t("invalid",e);var o=s=r=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":a=f;break;case"type":r=f;break;case"checked":l=f;break;case"defaultChecked":c=f;break;case"value":s=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(j(137,t));break;default:ge(e,t,i,f,n,null)}}wy(e,s,o,l,c,r,a,!1);return;case"select":$t("invalid",e),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:ge(e,t,a,o,n,null)}t=s,n=r,e.multiple=!!i,t!=null?Ur(e,!!i,t,!1):n!=null&&Ur(e,!!i,n,!0);return;case"textarea":$t("invalid",e),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(j(91));break;default:ge(e,t,r,o,n,null)}Ry(e,i,a,s);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":ge(e,t,l,i,n,null));return;case"dialog":$t("beforetoggle",e),$t("toggle",e),$t("cancel",e),$t("close",e);break;case"iframe":case"object":$t("load",e);break;case"video":case"audio":for(i=0;i<bl.length;i++)$t(bl[i],e);break;case"image":$t("error",e),$t("load",e);break;case"details":$t("toggle",e);break;case"embed":case"source":case"link":$t("error",e),$t("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(j(137,t));default:ge(e,t,c,i,n,null)}return;default:if(Vp(t)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&Tp(e,t,f,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ge(e,t,o,i,n,null))}function SE(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,l=null,c=null,f=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||ge(e,t,p,null,i,d)}}for(var h in i){var p=i[h];if(d=n[h],i.hasOwnProperty(h)&&(p!=null||d!=null))switch(h){case"type":s=p;break;case"name":a=p;break;case"checked":c=p;break;case"defaultChecked":f=p;break;case"value":r=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(j(137,t));break;default:p!==d&&ge(e,t,h,p,i,d)}}Jd(e,r,o,l,c,f,s,a);return;case"select":p=r=o=h=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(s)||ge(e,t,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":h=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==l&&ge(e,t,a,s,i,l)}t=o,n=r,i=p,h!=null?Ur(e,!!n,h,!1):!!i!=!!n&&(t!=null?Ur(e,!!n,t,!0):Ur(e,!!n,n?[]:"",!1));return;case"textarea":p=h=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ge(e,t,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":h=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(j(91));break;default:a!==s&&ge(e,t,r,a,i,s)}Cy(e,h,p);return;case"option":for(var v in n)h=n[v],n.hasOwnProperty(v)&&h!=null&&!i.hasOwnProperty(v)&&(v==="selected"?e.selected=!1:ge(e,t,v,null,i,h));for(l in i)h=i[l],p=n[l],i.hasOwnProperty(l)&&h!==p&&(h!=null||p!=null)&&(l==="selected"?e.selected=h&&typeof h!="function"&&typeof h!="symbol":ge(e,t,l,h,i,p));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var x in n)h=n[x],n.hasOwnProperty(x)&&h!=null&&!i.hasOwnProperty(x)&&ge(e,t,x,null,i,h);for(c in i)if(h=i[c],p=n[c],i.hasOwnProperty(c)&&h!==p&&(h!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(j(137,t));break;default:ge(e,t,c,h,i,p)}return;default:if(Vp(t)){for(var m in n)h=n[m],n.hasOwnProperty(m)&&h!==void 0&&!i.hasOwnProperty(m)&&Tp(e,t,m,void 0,i,h);for(f in i)h=i[f],p=n[f],!i.hasOwnProperty(f)||h===p||h===void 0&&p===void 0||Tp(e,t,f,h,i,p);return}}for(var u in n)h=n[u],n.hasOwnProperty(u)&&h!=null&&!i.hasOwnProperty(u)&&ge(e,t,u,null,i,h);for(d in i)h=i[d],p=n[d],!i.hasOwnProperty(d)||h===p||h==null&&p==null||ge(e,t,d,h,i,p)}function Xv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ME(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,o=a.duration;if(s&&o&&Xv(r)){for(r=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var f=l.transferSize,d=l.initiatorType;f&&Xv(d)&&(l=l.responseEnd,r+=f*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(s+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ap=null,wp=null;function Ru(e){return e.nodeType===9?e:e.ownerDocument}function Wv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ix(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Cp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zd=null;function EE(){var e=window.event;return e&&e.type==="popstate"?e===zd?!1:(zd=e,!0):(zd=null,!1)}var Ox=typeof setTimeout=="function"?setTimeout:void 0,TE=typeof clearTimeout=="function"?clearTimeout:void 0,qv=typeof Promise=="function"?Promise:void 0,AE=typeof queueMicrotask=="function"?queueMicrotask:typeof qv<"u"?function(e){return qv.resolve(null).then(e).catch(wE)}:Ox;function wE(e){setTimeout(function(){throw e})}function Za(e){return e==="head"}function Yv(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),Yr(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")hl(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,hl(n);for(var s=n.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[Dl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&hl(e.ownerDocument.body);n=a}while(n);Yr(t)}function Zv(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Rp(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Rp(n),Hp(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function CE(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Dl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=ri(e.nextSibling),e===null)break}return null}function RE(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ri(e.nextSibling),e===null))return null;return e}function Px(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ri(e.nextSibling),e===null))return null;return e}function Dp(e){return e.data==="$?"||e.data==="$~"}function Up(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function DE(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function ri(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Np=null;function Kv(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return ri(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Jv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Bx(e,t,n){switch(t=Ru(n),e){case"html":if(e=t.documentElement,!e)throw Error(j(452));return e;case"head":if(e=t.head,!e)throw Error(j(453));return e;case"body":if(e=t.body,!e)throw Error(j(454));return e;default:throw Error(j(451))}}function hl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Hp(e)}var oi=new Map,Qv=new Set;function Du(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ra=ce.d;ce.d={f:UE,r:NE,D:LE,C:IE,L:OE,m:PE,X:zE,S:BE,M:FE};function UE(){var e=ra.f(),t=Yu();return e||t}function NE(e){var t=Kr(e);t!==null&&t.tag===5&&t.type==="form"?D_(t):ra.r(e)}var $r=typeof document>"u"?null:document;function zx(e,t,n){var i=$r;if(i&&typeof t=="string"&&t){var a=ni(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Qv.has(a)||(Qv.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),un(t,"link",e),tn(t),i.head.appendChild(t)))}}function LE(e){ra.D(e),zx("dns-prefetch",e,null)}function IE(e,t){ra.C(e,t),zx("preconnect",e,t)}function OE(e,t,n){ra.L(e,t,n);var i=$r;if(i&&e&&t){var a='link[rel="preload"][as="'+ni(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+ni(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+ni(n.imageSizes)+'"]')):a+='[href="'+ni(e)+'"]';var s=a;switch(t){case"style":s=qr(e);break;case"script":s=to(e)}oi.has(s)||(e=Ce({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),oi.set(s,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(Pl(s))||t==="script"&&i.querySelector(Bl(s))||(t=i.createElement("link"),un(t,"link",e),tn(t),i.head.appendChild(t)))}}function PE(e,t){ra.m(e,t);var n=$r;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+ni(i)+'"][href="'+ni(e)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=to(e)}if(!oi.has(s)&&(e=Ce({rel:"modulepreload",href:e},t),oi.set(s,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Bl(s)))return}i=n.createElement("link"),un(i,"link",e),tn(i),n.head.appendChild(i)}}}function BE(e,t,n){ra.S(e,t,n);var i=$r;if(i&&e){var a=Dr(i).hoistableStyles,s=qr(e);t=t||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Pl(s)))o.loading=5;else{e=Ce({rel:"stylesheet",href:e,"data-precedence":t},n),(n=oi.get(s))&&Tm(e,n);var l=r=i.createElement("link");tn(l),un(l,"link",e),l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,nu(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function zE(e,t){ra.X(e,t);var n=$r;if(n&&e){var i=Dr(n).hoistableScripts,a=to(e),s=i.get(a);s||(s=n.querySelector(Bl(a)),s||(e=Ce({src:e,async:!0},t),(t=oi.get(a))&&Am(e,t),s=n.createElement("script"),tn(s),un(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function FE(e,t){ra.M(e,t);var n=$r;if(n&&e){var i=Dr(n).hoistableScripts,a=to(e),s=i.get(a);s||(s=n.querySelector(Bl(a)),s||(e=Ce({src:e,async:!0,type:"module"},t),(t=oi.get(a))&&Am(e,t),s=n.createElement("script"),tn(s),un(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function jv(e,t,n,i){var a=(a=Ia.current)?Du(a):null;if(!a)throw Error(j(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=qr(n.href),n=Dr(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=qr(n.href);var s=Dr(a).hoistableStyles,r=s.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=a.querySelector(Pl(e)))&&!s._p&&(r.instance=s,r.state.loading=5),oi.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},oi.set(e,n),s||HE(a,e,n,r.state))),t&&i===null)throw Error(j(528,""));return r}if(t&&i!==null)throw Error(j(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=to(n),n=Dr(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(j(444,e))}}function qr(e){return'href="'+ni(e)+'"'}function Pl(e){return'link[rel="stylesheet"]['+e+"]"}function Fx(e){return Ce({},e,{"data-precedence":e.precedence,precedence:null})}function HE(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),un(t,"link",n),tn(t),e.head.appendChild(t))}function to(e){return'[src="'+ni(e)+'"]'}function Bl(e){return"script[async]"+e}function $v(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+ni(n.href)+'"]');if(i)return t.instance=i,tn(i),i;var a=Ce({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),tn(i),un(i,"style",a),nu(i,n.precedence,e),t.instance=i;case"stylesheet":a=qr(n.href);var s=e.querySelector(Pl(a));if(s)return t.state.loading|=4,t.instance=s,tn(s),s;i=Fx(n),(a=oi.get(a))&&Tm(i,a),s=(e.ownerDocument||e).createElement("link"),tn(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),un(s,"link",i),t.state.loading|=4,nu(s,n.precedence,e),t.instance=s;case"script":return s=to(n.src),(a=e.querySelector(Bl(s)))?(t.instance=a,tn(a),a):(i=n,(a=oi.get(s))&&(i=Ce({},n),Am(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),tn(a),un(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(j(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,nu(i,n.precedence,e));return t.instance}function nu(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Tm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Am(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var iu=null;function ty(e,t,n){if(iu===null){var i=new Map,a=iu=new Map;a.set(n,i)}else a=iu,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var s=n[a];if(!(s[Dl]||s[on]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function ey(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function VE(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Hx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function kE(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=qr(i.href),s=t.querySelector(Pl(a));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Uu.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,tn(s);return}s=t.ownerDocument||t,i=Fx(i),(a=oi.get(a))&&Tm(i,a),s=s.createElement("link"),tn(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),un(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Uu.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Fd=0;function GE(e,t){return e.stylesheets&&e.count===0&&au(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&au(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Fd===0&&(Fd=62500*ME());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&au(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Fd?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function Uu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)au(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Nu=null;function au(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Nu=new Map,t.forEach(XE,e),Nu=null,Uu.call(e))}function XE(e,t){if(!(t.state.loading&4)){var n=Nu.get(e);if(n)var i=n.get(null);else{n=new Map,Nu.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=t.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=Uu.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Ml={$$typeof:Ki,Provider:null,Consumer:null,_currentValue:xs,_currentValue2:xs,_threadCount:0};function WE(e,t,n,i,a,s,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=hd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hd(0),this.hiddenUpdates=hd(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function Vx(e,t,n,i,a,s,r,o,l,c,f,d){return e=new WE(e,t,n,r,l,c,f,d,o),t=1,s===!0&&(t|=24),s=Pn(3,null,null,t),e.current=s,s.stateNode=e,t=jp(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},em(s),e}function kx(e){return e?(e=Ar,e):Ar}function Gx(e,t,n,i,a,s){a=kx(a),i.context===null?i.context=a:i.pendingContext=a,i=Pa(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Ba(e,i,t),n!==null&&(Rn(n,e,t),il(n,e,t))}function ny(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wm(e,t){ny(e,t),(e=e.alternate)&&ny(e,t)}function Xx(e){if(e.tag===13||e.tag===31){var t=Ls(e,67108864);t!==null&&Rn(t,e,67108864),wm(e,67108864)}}function iy(e){if(e.tag===13||e.tag===31){var t=Vn();t=zp(t);var n=Ls(e,t);n!==null&&Rn(n,e,t),wm(e,t)}}var Lu=!0;function qE(e,t,n,i){var a=Pt.T;Pt.T=null;var s=ce.p;try{ce.p=2,Cm(e,t,n,i)}finally{ce.p=s,Pt.T=a}}function YE(e,t,n,i){var a=Pt.T;Pt.T=null;var s=ce.p;try{ce.p=8,Cm(e,t,n,i)}finally{ce.p=s,Pt.T=a}}function Cm(e,t,n,i){if(Lu){var a=Lp(i);if(a===null)Bd(e,t,i,Iu,n),ay(e,i);else if(KE(a,e,t,n,i))i.stopPropagation();else if(ay(e,i),t&4&&-1<ZE.indexOf(e)){for(;a!==null;){var s=Kr(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=vs(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Hn(r);o.entanglements[1]|=l,r&=~l}Ni(s),(le&6)===0&&(Mu=zn()+500,Ol(0,!1))}}break;case 31:case 13:o=Ls(s,2),o!==null&&Rn(o,s,2),Yu(),wm(s,2)}if(s=Lp(i),s===null&&Bd(e,t,i,Iu,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else Bd(e,t,i,null,n)}}function Lp(e){return e=kp(e),Rm(e)}var Iu=null;function Rm(e){if(Iu=null,e=xr(e),e!==null){var t=Al(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=uy(t),e!==null)return e;e=null}else if(n===31){if(e=hy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Iu=e,null}function Wx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(OM()){case my:return 2;case gy:return 8;case cu:case PM:return 32;case vy:return 268435456;default:return 32}default:return 32}}var Ip=!1,Ha=null,Va=null,ka=null,El=new Map,Tl=new Map,Ca=[],ZE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ay(e,t){switch(e){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":Va=null;break;case"mouseover":case"mouseout":ka=null;break;case"pointerover":case"pointerout":El.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tl.delete(t.pointerId)}}function qo(e,t,n,i,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},t!==null&&(t=Kr(t),t!==null&&Xx(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function KE(e,t,n,i,a){switch(t){case"focusin":return Ha=qo(Ha,e,t,n,i,a),!0;case"dragenter":return Va=qo(Va,e,t,n,i,a),!0;case"mouseover":return ka=qo(ka,e,t,n,i,a),!0;case"pointerover":var s=a.pointerId;return El.set(s,qo(El.get(s)||null,e,t,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,Tl.set(s,qo(Tl.get(s)||null,e,t,n,i,a)),!0}return!1}function qx(e){var t=xr(e.target);if(t!==null){var n=Al(t);if(n!==null){if(t=n.tag,t===13){if(t=uy(n),t!==null){e.blockedOn=t,V0(e.priority,function(){iy(n)});return}}else if(t===31){if(t=hy(n),t!==null){e.blockedOn=t,V0(e.priority,function(){iy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function su(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Lp(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);jd=i,n.target.dispatchEvent(i),jd=null}else return t=Kr(n),t!==null&&Xx(t),e.blockedOn=n,!1;t.shift()}return!0}function sy(e,t,n){su(e)&&n.delete(t)}function JE(){Ip=!1,Ha!==null&&su(Ha)&&(Ha=null),Va!==null&&su(Va)&&(Va=null),ka!==null&&su(ka)&&(ka=null),El.forEach(sy),Tl.forEach(sy)}function Gc(e,t){e.blockedOn===t&&(e.blockedOn=null,Ip||(Ip=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,JE)))}var Xc=null;function ry(e){Xc!==e&&(Xc=e,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,function(){Xc===e&&(Xc=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(Rm(i||n)===null)continue;break}var s=Kr(n);s!==null&&(e.splice(t,3),t-=3,pp(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Yr(e){function t(l){return Gc(l,e)}Ha!==null&&Gc(Ha,e),Va!==null&&Gc(Va,e),ka!==null&&Gc(ka,e),El.forEach(t),Tl.forEach(t);for(var n=0;n<Ca.length;n++){var i=Ca[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ca.length&&(n=Ca[0],n.blockedOn===null);)qx(n),n.blockedOn===null&&Ca.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[Dn]||null;if(typeof s=="function")r||ry(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[Dn]||null)o=r.formAction;else if(Rm(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),ry(n)}}}function Yx(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Dm(e){this._internalRoot=e}Ju.prototype.render=Dm.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));var n=t.current,i=Vn();Gx(n,i,e,t,null,null)};Ju.prototype.unmount=Dm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gx(e.current,2,null,e,null,null),Yu(),t[Zr]=null}};function Ju(e){this._internalRoot=e}Ju.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ca.length&&t!==0&&t<Ca[n].priority;n++);Ca.splice(n,0,e),n===0&&qx(e)}};var oy=ly.version;if(oy!=="19.2.8")throw Error(j(527,oy,"19.2.8"));ce.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=CM(t),e=e!==null?fy(e):null,e=e===null?null:e.stateNode,e};var QE={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:Pt,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Yo=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Yo.isDisabled&&Yo.supportsFiber))try{wl=Yo.inject(QE),Fn=Yo}catch{}var Yo;Qu.createRoot=function(e,t){if(!cy(e))throw Error(j(299));var n=!1,i="",a=z_,s=F_,r=H_;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Vx(e,1,!1,null,null,n,i,null,a,s,r,Yx),e[Zr]=t.current,Em(e),new Dm(t)};Qu.hydrateRoot=function(e,t,n){if(!cy(e))throw Error(j(299));var i=!1,a="",s=z_,r=F_,o=H_,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=Vx(e,1,!0,t,n??null,i,a,l,s,r,o,Yx),t.context=kx(null),n=t.current,i=Vn(),i=zp(i),a=Pa(i),a.callback=null,Ba(n,a,i),n=i,t.current.lanes=n,Rl(t,n),Ni(t),e[Zr]=t.current,Em(e),new Ju(t)};Qu.version="19.2.8"});var Qx=xa((PR,Jx)=>{"use strict";function Kx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kx)}catch(e){console.error(e)}}Kx(),Jx.exports=Zx()});var R=bc(ur(),1),ZS=bc(Qx(),1);var fs=bc(ur(),1);var Tb=0,fg=1,Ab=2;var dg=1,wb=2,Bi=3,da=0,Mn=1,ui=2,va=0,Hs=1,pg=2,mg=3,gg=4,Cb=5,is=100,Rb=101,Db=102,Ub=103,Nb=104,Lb=200,Ib=201,Ob=202,Pb=203,bh=204,Sh=205,Bb=206,zb=207,Fb=208,Hb=209,Vb=210,kb=211,Gb=212,Xb=213,Wb=214,Yh=0,Zh=1,Kh=2,Vs=3,Jh=4,Qh=5,jh=6,$h=7,vg=0,qb=1,Yb=2,ya=0,Zb=1,Kb=2,Jb=3,Qb=4,jb=5,$b=6,tS=7;var yg=300,$s=301,tr=302,tf=303,ef=304,uc=306,Mh=1e3,ns=1001,Eh=1002,ci=1003,eS=1004;var hc=1005;var _i=1006,nf=1007;var us=1008;var Mi=1009,_g=1010,xg=1011,Ao=1012,af=1013,hs=1014,zi=1015,wo=1016,sf=1017,rf=1018,Co=1020,bg=35902,Sg=35899,Mg=1021,Eg=1022,hi=1023,go=1026,Ro=1027,Tg=1028,of=1029,Ag=1030,lf=1031;var cf=1033,fc=33776,dc=33777,pc=33778,mc=33779,uf=35840,hf=35841,ff=35842,df=35843,pf=36196,mf=37492,gf=37496,vf=37808,yf=37809,_f=37810,xf=37811,bf=37812,Sf=37813,Mf=37814,Ef=37815,Tf=37816,Af=37817,wf=37818,Cf=37819,Rf=37820,Df=37821,Uf=36492,Nf=36494,Lf=36495,If=36283,Of=36284,Pf=36285,Bf=36286;var ql=2300,Th=2301,xh=2302,ng=2400,ig=2401,ag=2402;var nS=3200,iS=3201;var wg=0,aS=1,_a="",hn="srgb",ks="srgb-linear",Yl="linear",pe="srgb";var Fs=7680;var sg=519,sS=512,rS=513,oS=514,Cg=515,lS=516,cS=517,uS=518,hS=519,rg=35044;var Rg="300 es",yi=2e3,Zl=2001;var pa=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let a=i[t];if(a!==void 0){let s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,t);t.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jx=1234567,Xl=Math.PI/180,vo=180/Math.PI;function Do(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[e&255]+pn[e>>8&255]+pn[e>>16&255]+pn[e>>24&255]+"-"+pn[t&255]+pn[t>>8&255]+"-"+pn[t>>16&15|64]+pn[t>>24&255]+"-"+pn[n&63|128]+pn[n>>8&255]+"-"+pn[n>>16&255]+pn[n>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function Jt(e,t,n){return Math.max(t,Math.min(n,e))}function Dg(e,t){return(e%t+t)%t}function jE(e,t,n,i,a){return i+(e-t)*(a-i)/(n-t)}function $E(e,t,n){return e!==t?(n-e)/(t-e):0}function Wl(e,t,n){return(1-n)*e+n*t}function tT(e,t,n,i){return Wl(e,t,1-Math.exp(-n*i))}function eT(e,t=1){return t-Math.abs(Dg(e,t*2)-t)}function nT(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function iT(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function aT(e,t){return e+Math.floor(Math.random()*(t-e+1))}function sT(e,t){return e+Math.random()*(t-e)}function rT(e){return e*(.5-Math.random())}function oT(e){e!==void 0&&(jx=e);let t=jx+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function lT(e){return e*Xl}function cT(e){return e*vo}function uT(e){return(e&e-1)===0&&e!==0}function hT(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function fT(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function dT(e,t,n,i,a){let s=Math.cos,r=Math.sin,o=s(n/2),l=r(n/2),c=s((t+i)/2),f=r((t+i)/2),d=s((t-i)/2),h=r((t-i)/2),p=s((i-t)/2),v=r((i-t)/2);switch(a){case"XYX":e.set(o*f,l*d,l*h,o*c);break;case"YZY":e.set(l*h,o*f,l*d,o*c);break;case"ZXZ":e.set(l*d,l*h,o*f,o*c);break;case"XZX":e.set(o*f,l*v,l*p,o*c);break;case"YXY":e.set(l*p,o*f,l*v,o*c);break;case"ZYZ":e.set(l*v,l*p,o*f,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function po(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function bn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var Ug={DEG2RAD:Xl,RAD2DEG:vo,generateUUID:Do,clamp:Jt,euclideanModulo:Dg,mapLinear:jE,inverseLerp:$E,lerp:Wl,damp:tT,pingpong:eT,smoothstep:nT,smootherstep:iT,randInt:aT,randFloat:sT,randFloatSpread:rT,seededRandom:oT,degToRad:lT,radToDeg:cT,isPowerOfTwo:uT,ceilPowerOfTwo:hT,floorPowerOfTwo:fT,setQuaternionFromProperEuler:dT,normalize:bn,denormalize:po},kt=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Jt(this.x,t.x,n.x),this.y=Jt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Jt(this.x,t,n),this.y=Jt(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),a=Math.sin(n),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*a+t.x,this.y=s*a+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ma=class{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,s,r,o){let l=i[a+0],c=i[a+1],f=i[a+2],d=i[a+3],h=s[r+0],p=s[r+1],v=s[r+2],x=s[r+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=f,t[n+3]=d;return}if(o===1){t[n+0]=h,t[n+1]=p,t[n+2]=v,t[n+3]=x;return}if(d!==x||l!==h||c!==p||f!==v){let m=1-o,u=l*h+c*p+f*v+d*x,g=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){let T=Math.sqrt(_),w=Math.atan2(T,u*g);m=Math.sin(m*w)/T,o=Math.sin(o*w)/T}let y=o*g;if(l=l*m+h*y,c=c*m+p*y,f=f*m+v*y,d=d*m+x*y,m===1-o){let T=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=T,c*=T,f*=T,d*=T}}t[n]=l,t[n+1]=c,t[n+2]=f,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,a,s,r){let o=i[a],l=i[a+1],c=i[a+2],f=i[a+3],d=s[r],h=s[r+1],p=s[r+2],v=s[r+3];return t[n]=o*v+f*d+l*p-c*h,t[n+1]=l*v+f*h+c*d-o*p,t[n+2]=c*v+f*p+o*h-l*d,t[n+3]=f*v-o*d-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,a=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(a/2),d=o(s/2),h=l(i/2),p=l(a/2),v=l(s/2);switch(r){case"XYZ":this._x=h*f*d+c*p*v,this._y=c*p*d-h*f*v,this._z=c*f*v+h*p*d,this._w=c*f*d-h*p*v;break;case"YXZ":this._x=h*f*d+c*p*v,this._y=c*p*d-h*f*v,this._z=c*f*v-h*p*d,this._w=c*f*d+h*p*v;break;case"ZXY":this._x=h*f*d-c*p*v,this._y=c*p*d+h*f*v,this._z=c*f*v+h*p*d,this._w=c*f*d-h*p*v;break;case"ZYX":this._x=h*f*d-c*p*v,this._y=c*p*d+h*f*v,this._z=c*f*v-h*p*d,this._w=c*f*d+h*p*v;break;case"YZX":this._x=h*f*d+c*p*v,this._y=c*p*d+h*f*v,this._z=c*f*v-h*p*d,this._w=c*f*d-h*p*v;break;case"XZY":this._x=h*f*d-c*p*v,this._y=c*p*d-h*f*v,this._z=c*f*v+h*p*d,this._w=c*f*d+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+o+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(r-a)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(f-l)/p,this._x=.25*p,this._y=(a+r)/p,this._z=(s+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(a+r)/p,this._y=.25*p,this._z=(l+f)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(r-a)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,a=t._y,s=t._z,r=t._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+r*o+a*c-s*l,this._y=a*f+r*l+s*o-i*c,this._z=s*f+r*c+i*l-a*o,this._w=r*f-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);let i=this._x,a=this._y,s=this._z,r=this._w,o=r*t._w+i*t._x+a*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=a,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-n;return this._w=p*r+n*this._w,this._x=p*i+n*this._x,this._y=p*a+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}let c=Math.sqrt(l),f=Math.atan2(c,o),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=r*d+this._w*h,this._x=i*d+this._x*h,this._y=a*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion($x.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion($x.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,a=this.z,s=t.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,a=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*a-o*i),f=2*(o*n-s*a),d=2*(s*i-r*n);return this.x=n+l*c+r*d-o*f,this.y=i+l*f+o*c-s*d,this.z=a+l*d+s*f-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Jt(this.x,t.x,n.x),this.y=Jt(this.y,t.y,n.y),this.z=Jt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Jt(this.x,t,n),this.y=Jt(this.y,t,n),this.z=Jt(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,a=t.y,s=t.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Um.copy(this).projectOnVector(t),this.sub(Um)}reflect(t){return this.sub(Um.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Um=new L,$x=new ma,Wt=class e{constructor(t,n,i,a,s,r,o,l,c){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c)}set(t,n,i,a,s,r,o,l,c){let f=this.elements;return f[0]=t,f[1]=a,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=r,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],p=i[5],v=i[8],x=a[0],m=a[3],u=a[6],g=a[1],_=a[4],y=a[7],T=a[2],w=a[5],A=a[8];return s[0]=r*x+o*g+l*T,s[3]=r*m+o*_+l*w,s[6]=r*u+o*y+l*A,s[1]=c*x+f*g+d*T,s[4]=c*m+f*_+d*w,s[7]=c*u+f*y+d*A,s[2]=h*x+p*g+v*T,s[5]=h*m+p*_+v*w,s[8]=h*u+p*y+v*A,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return n*r*f-n*o*c-i*s*f+i*o*l+a*s*c-a*r*l}invert(){let t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],d=f*r-o*c,h=o*l-f*s,p=c*s-r*l,v=n*d+i*h+a*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/v;return t[0]=d*x,t[1]=(a*c-f*i)*x,t[2]=(o*i-a*r)*x,t[3]=h*x,t[4]=(f*n-a*l)*x,t[5]=(a*s-o*n)*x,t[6]=p*x,t[7]=(i*l-c*n)*x,t[8]=(r*n-i*s)*x,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,s,r,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-a*c,a*l,-a*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(Nm.makeScale(t,n)),this}rotate(t){return this.premultiply(Nm.makeRotation(-t)),this}translate(t,n){return this.premultiply(Nm.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Nm=new Wt;function Ng(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Kl(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function fS(){let e=Kl("canvas");return e.style.display="block",e}var tb={};function yo(e){e in tb||(tb[e]=!0,console.warn(e))}function dS(e,t,n){return new Promise(function(i,a){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}var eb=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nb=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pT(){let e={enabled:!0,workingColorSpace:ks,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===pe&&(a.r=fa(a.r),a.g=fa(a.g),a.b=fa(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===pe&&(a.r=mo(a.r),a.g=mo(a.g),a.b=mo(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===_a?Yl:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return yo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return yo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,s)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[ks]:{primaries:t,whitePoint:i,transfer:Yl,toXYZ:eb,fromXYZ:nb,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:t,whitePoint:i,transfer:pe,toXYZ:eb,fromXYZ:nb,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),e}var re=pT();function fa(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function mo(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var eo,Ah=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{eo===void 0&&(eo=Kl("canvas")),eo.width=t.width,eo.height=t.height;let a=eo.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=eo}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Kl("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let a=i.getImageData(0,0,t.width,t.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=fa(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(fa(n[i]/255)*255):n[i]=fa(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},mT=0,_o=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mT++}),this.uuid=Do(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(Lm(a[r].image)):s.push(Lm(a[r]))}else s=Lm(a);i.url=s}return n||(t.images[this.uuid]=i),i}};function Lm(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Ah.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var gT=0,Im=new L,Yn=class e extends pa{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=ns,a=ns,s=_i,r=us,o=hi,l=Mi,c=e.DEFAULT_ANISOTROPY,f=_a){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gT++}),this.uuid=Do(),this.name="",this.source=new _o(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Im).x}get height(){return this.source.getSize(Im).y}get depth(){return this.source.getSize(Im).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let a=this[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mh:t.x=t.x-Math.floor(t.x);break;case ns:t.x=t.x<0?0:1;break;case Eh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mh:t.y=t.y-Math.floor(t.y);break;case ns:t.y=t.y<0?0:1;break;case Eh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=yg;Yn.DEFAULT_ANISOTROPY=1;var de=class e{constructor(t=0,n=0,i=0,a=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,a=this.z,s=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,s,l=t.elements,c=l[0],f=l[4],d=l[8],h=l[1],p=l[5],v=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let _=(c+1)/2,y=(p+1)/2,T=(u+1)/2,w=(f+h)/4,A=(d+x)/4,D=(v+m)/4;return _>y&&_>T?_<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(_),a=w/i,s=A/i):y>T?y<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(y),i=w/a,s=D/a):T<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(T),i=A/s,a=D/s),this.set(i,a,s,n),this}let g=Math.sqrt((m-v)*(m-v)+(d-x)*(d-x)+(h-f)*(h-f));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(d-x)/g,this.z=(h-f)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Jt(this.x,t.x,n.x),this.y=Jt(this.y,t.y,n.y),this.z=Jt(this.z,t.z,n.z),this.w=Jt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Jt(this.x,t,n),this.y=Jt(this.y,t,n),this.z=Jt(this.z,t,n),this.w=Jt(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wh=class extends pa{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new de(0,0,t,n),this.scissorTest=!1,this.viewport=new de(0,0,t,n);let a={width:t,height:n,depth:i.depth},s=new Yn(a);this.textures=[];let r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let n={minFilter:_i,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let a=Object.assign({},t.textures[n].image);this.textures[n].source=new _o(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ii=class extends wh{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Jl=class extends Yn{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=ci,this.minFilter=ci,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ch=class extends Yn{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=ci,this.minFilter=ci,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var as=class{constructor(t=new L(1/0,1/0,1/0),n=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(mi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(mi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=mi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,mi):mi.fromBufferAttribute(s,r),mi.applyMatrix4(t.matrixWorld),this.expandByPoint(mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ju.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ju.copy(i.boundingBox)),ju.applyMatrix4(t.matrixWorld),this.union(ju)}let a=t.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mi),mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zl),$u.subVectors(this.max,zl),no.subVectors(t.a,zl),io.subVectors(t.b,zl),ao.subVectors(t.c,zl),Ka.subVectors(io,no),Ja.subVectors(ao,io),Os.subVectors(no,ao);let n=[0,-Ka.z,Ka.y,0,-Ja.z,Ja.y,0,-Os.z,Os.y,Ka.z,0,-Ka.x,Ja.z,0,-Ja.x,Os.z,0,-Os.x,-Ka.y,Ka.x,0,-Ja.y,Ja.x,0,-Os.y,Os.x,0];return!Om(n,no,io,ao,$u)||(n=[1,0,0,0,1,0,0,0,1],!Om(n,no,io,ao,$u))?!1:(th.crossVectors(Ka,Ja),n=[th.x,th.y,th.z],Om(n,no,io,ao,$u))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},oa=[new L,new L,new L,new L,new L,new L,new L,new L],mi=new L,ju=new as,no=new L,io=new L,ao=new L,Ka=new L,Ja=new L,Os=new L,zl=new L,$u=new L,th=new L,Ps=new L;function Om(e,t,n,i,a){for(let s=0,r=e.length-3;s<=r;s+=3){Ps.fromArray(e,s);let o=a.x*Math.abs(Ps.x)+a.y*Math.abs(Ps.y)+a.z*Math.abs(Ps.z),l=t.dot(Ps),c=n.dot(Ps),f=i.dot(Ps);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}var vT=new as,Fl=new L,Pm=new L,ss=class{constructor(t=new L,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):vT.setFromPoints(t).getCenter(i);let a=0;for(let s=0,r=t.length;s<r;s++)a=Math.max(a,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fl.subVectors(t,this.center);let n=Fl.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Fl,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Pm.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fl.copy(t.center).add(Pm)),this.expandByPoint(Fl.copy(t.center).sub(Pm))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},la=new L,Bm=new L,eh=new L,Qa=new L,zm=new L,nh=new L,Fm=new L,Gs=class{constructor(t=new L,n=new L(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,la)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=la.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(la.copy(this.origin).addScaledVector(this.direction,n),la.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){Bm.copy(t).add(n).multiplyScalar(.5),eh.copy(n).sub(t).normalize(),Qa.copy(this.origin).sub(Bm);let s=t.distanceTo(n)*.5,r=-this.direction.dot(eh),o=Qa.dot(this.direction),l=-Qa.dot(eh),c=Qa.lengthSq(),f=Math.abs(1-r*r),d,h,p,v;if(f>0)if(d=r*l-o,h=r*o-l,v=s*f,d>=0)if(h>=-v)if(h<=v){let x=1/f;d*=x,h*=x,p=d*(d+r*h+2*o)+h*(r*d+h+2*l)+c}else h=s,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-v?(d=Math.max(0,-(-r*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=v?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(r*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=r>0?-s:s,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(Bm).addScaledVector(eh,h),p}intersectSphere(t,n){la.subVectors(t.center,this.origin);let i=la.dot(this.direction),a=la.dot(la)-i*i,s=t.radius*t.radius;if(a>s)return null;let r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,s,r,o,l,c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,a=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,a=(t.min.x-h.x)*c),f>=0?(s=(t.min.y-h.y)*f,r=(t.max.y-h.y)*f):(s=(t.max.y-h.y)*f,r=(t.min.y-h.y)*f),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,la)!==null}intersectTriangle(t,n,i,a,s){zm.subVectors(n,t),nh.subVectors(i,t),Fm.crossVectors(zm,nh);let r=this.direction.dot(Fm),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Qa.subVectors(this.origin,t);let l=o*this.direction.dot(nh.crossVectors(Qa,nh));if(l<0)return null;let c=o*this.direction.dot(zm.cross(Qa));if(c<0||l+c>r)return null;let f=-o*Qa.dot(Fm);return f<0?null:this.at(f/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Me=class e{constructor(t,n,i,a,s,r,o,l,c,f,d,h,p,v,x,m){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c,f,d,h,p,v,x,m)}set(t,n,i,a,s,r,o,l,c,f,d,h,p,v,x,m){let u=this.elements;return u[0]=t,u[4]=n,u[8]=i,u[12]=a,u[1]=s,u[5]=r,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=p,u[7]=v,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){let n=this.elements,i=t.elements,a=1/so.setFromMatrixColumn(t,0).length(),s=1/so.setFromMatrixColumn(t,1).length(),r=1/so.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,a=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),f=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let h=r*f,p=r*d,v=o*f,x=o*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=h-x*c,n[9]=-o*l,n[2]=x-h*c,n[6]=v+p*c,n[10]=r*l}else if(t.order==="YXZ"){let h=l*f,p=l*d,v=c*f,x=c*d;n[0]=h+x*o,n[4]=v*o-p,n[8]=r*c,n[1]=r*d,n[5]=r*f,n[9]=-o,n[2]=p*o-v,n[6]=x+h*o,n[10]=r*l}else if(t.order==="ZXY"){let h=l*f,p=l*d,v=c*f,x=c*d;n[0]=h-x*o,n[4]=-r*d,n[8]=v+p*o,n[1]=p+v*o,n[5]=r*f,n[9]=x-h*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let h=r*f,p=r*d,v=o*f,x=o*d;n[0]=l*f,n[4]=v*c-p,n[8]=h*c+x,n[1]=l*d,n[5]=x*c+h,n[9]=p*c-v,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let h=r*l,p=r*c,v=o*l,x=o*c;n[0]=l*f,n[4]=x-h*d,n[8]=v*d+p,n[1]=d,n[5]=r*f,n[9]=-o*f,n[2]=-c*f,n[6]=p*d+v,n[10]=h-x*d}else if(t.order==="XZY"){let h=r*l,p=r*c,v=o*l,x=o*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+x,n[5]=r*f,n[9]=p*d-v,n[2]=v*d-p,n[6]=o*f,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yT,t,_T)}lookAt(t,n,i){let a=this.elements;return Xn.subVectors(t,n),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),ja.crossVectors(i,Xn),ja.lengthSq()===0&&(Math.abs(i.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),ja.crossVectors(i,Xn)),ja.normalize(),ih.crossVectors(Xn,ja),a[0]=ja.x,a[4]=ih.x,a[8]=Xn.x,a[1]=ja.y,a[5]=ih.y,a[9]=Xn.y,a[2]=ja.z,a[6]=ih.z,a[10]=Xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],p=i[13],v=i[2],x=i[6],m=i[10],u=i[14],g=i[3],_=i[7],y=i[11],T=i[15],w=a[0],A=a[4],D=a[8],M=a[12],S=a[1],N=a[5],P=a[9],k=a[13],X=a[2],Y=a[6],q=a[10],at=a[14],G=a[3],lt=a[7],dt=a[11],Et=a[15];return s[0]=r*w+o*S+l*X+c*G,s[4]=r*A+o*N+l*Y+c*lt,s[8]=r*D+o*P+l*q+c*dt,s[12]=r*M+o*k+l*at+c*Et,s[1]=f*w+d*S+h*X+p*G,s[5]=f*A+d*N+h*Y+p*lt,s[9]=f*D+d*P+h*q+p*dt,s[13]=f*M+d*k+h*at+p*Et,s[2]=v*w+x*S+m*X+u*G,s[6]=v*A+x*N+m*Y+u*lt,s[10]=v*D+x*P+m*q+u*dt,s[14]=v*M+x*k+m*at+u*Et,s[3]=g*w+_*S+y*X+T*G,s[7]=g*A+_*N+y*Y+T*lt,s[11]=g*D+_*P+y*q+T*dt,s[15]=g*M+_*k+y*at+T*Et,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],a=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],f=t[2],d=t[6],h=t[10],p=t[14],v=t[3],x=t[7],m=t[11],u=t[15];return v*(+s*l*d-a*c*d-s*o*h+i*c*h+a*o*p-i*l*p)+x*(+n*l*p-n*c*h+s*r*h-a*r*p+a*c*f-s*l*f)+m*(+n*c*d-n*o*p-s*r*d+i*r*p+s*o*f-i*c*f)+u*(-a*o*f-n*l*d+n*o*h+a*r*d-i*r*h+i*l*f)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],d=t[9],h=t[10],p=t[11],v=t[12],x=t[13],m=t[14],u=t[15],g=d*m*c-x*h*c+x*l*p-o*m*p-d*l*u+o*h*u,_=v*h*c-f*m*c-v*l*p+r*m*p+f*l*u-r*h*u,y=f*x*c-v*d*c+v*o*p-r*x*p-f*o*u+r*d*u,T=v*d*l-f*x*l-v*o*h+r*x*h+f*o*m-r*d*m,w=n*g+i*_+a*y+s*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/w;return t[0]=g*A,t[1]=(x*h*s-d*m*s-x*a*p+i*m*p+d*a*u-i*h*u)*A,t[2]=(o*m*s-x*l*s+x*a*c-i*m*c-o*a*u+i*l*u)*A,t[3]=(d*l*s-o*h*s-d*a*c+i*h*c+o*a*p-i*l*p)*A,t[4]=_*A,t[5]=(f*m*s-v*h*s+v*a*p-n*m*p-f*a*u+n*h*u)*A,t[6]=(v*l*s-r*m*s-v*a*c+n*m*c+r*a*u-n*l*u)*A,t[7]=(r*h*s-f*l*s+f*a*c-n*h*c-r*a*p+n*l*p)*A,t[8]=y*A,t[9]=(v*d*s-f*x*s-v*i*p+n*x*p+f*i*u-n*d*u)*A,t[10]=(r*x*s-v*o*s+v*i*c-n*x*c-r*i*u+n*o*u)*A,t[11]=(f*o*s-r*d*s-f*i*c+n*d*c+r*i*p-n*o*p)*A,t[12]=T*A,t[13]=(f*x*a-v*d*a+v*i*h-n*x*h-f*i*m+n*d*m)*A,t[14]=(v*o*a-r*x*a-v*i*l+n*x*l+r*i*m-n*o*m)*A,t[15]=(r*d*a-f*o*a+f*i*l-n*d*l-r*i*h+n*o*h)*A,this}scale(t){let n=this.elements,i=t.x,a=t.y,s=t.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),a=Math.sin(n),s=1-i,r=t.x,o=t.y,l=t.z,c=s*r,f=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,f*o+i,f*l-a*r,0,c*l-a*o,f*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,s,r){return this.set(1,i,s,0,t,1,r,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){let a=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,f=r+r,d=o+o,h=s*c,p=s*f,v=s*d,x=r*f,m=r*d,u=o*d,g=l*c,_=l*f,y=l*d,T=i.x,w=i.y,A=i.z;return a[0]=(1-(x+u))*T,a[1]=(p+y)*T,a[2]=(v-_)*T,a[3]=0,a[4]=(p-y)*w,a[5]=(1-(h+u))*w,a[6]=(m+g)*w,a[7]=0,a[8]=(v+_)*A,a[9]=(m-g)*A,a[10]=(1-(h+x))*A,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){let a=this.elements,s=so.set(a[0],a[1],a[2]).length(),r=so.set(a[4],a[5],a[6]).length(),o=so.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),t.x=a[12],t.y=a[13],t.z=a[14],gi.copy(this);let c=1/s,f=1/r,d=1/o;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=f,gi.elements[5]*=f,gi.elements[6]*=f,gi.elements[8]*=d,gi.elements[9]*=d,gi.elements[10]*=d,n.setFromRotationMatrix(gi),i.x=s,i.y=r,i.z=o,this}makePerspective(t,n,i,a,s,r,o=yi,l=!1){let c=this.elements,f=2*s/(n-t),d=2*s/(i-a),h=(n+t)/(n-t),p=(i+a)/(i-a),v,x;if(l)v=s/(r-s),x=r*s/(r-s);else if(o===yi)v=-(r+s)/(r-s),x=-2*r*s/(r-s);else if(o===Zl)v=-r/(r-s),x=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,a,s,r,o=yi,l=!1){let c=this.elements,f=2/(n-t),d=2/(i-a),h=-(n+t)/(n-t),p=-(i+a)/(i-a),v,x;if(l)v=1/(r-s),x=r/(r-s);else if(o===yi)v=-2/(r-s),x=-(r+s)/(r-s);else if(o===Zl)v=-1/(r-s),x=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},so=new L,gi=new Me,yT=new L(0,0,0),_T=new L(1,1,1),ja=new L,ih=new L,Xn=new L,ib=new Me,ab=new ma,xi=class e{constructor(t=0,n=0,i=0,a=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let a=t.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],f=a[9],d=a[2],h=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Jt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return ib.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ib,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return ab.setFromEuler(this),this.setFromQuaternion(ab,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xi.DEFAULT_ORDER="XYZ";var xo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},xT=0,sb=new L,ro=new ma,ca=new Me,ah=new L,Hl=new L,bT=new L,ST=new ma,rb=new L(1,0,0),ob=new L(0,1,0),lb=new L(0,0,1),cb={type:"added"},MT={type:"removed"},oo={type:"childadded",child:null},Hm={type:"childremoved",child:null},an=class e extends pa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xT++}),this.uuid=Do(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new L,n=new xi,i=new ma,a=new L(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Me},normalMatrix:{value:new Wt}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return ro.setFromAxisAngle(t,n),this.quaternion.multiply(ro),this}rotateOnWorldAxis(t,n){return ro.setFromAxisAngle(t,n),this.quaternion.premultiply(ro),this}rotateX(t){return this.rotateOnAxis(rb,t)}rotateY(t){return this.rotateOnAxis(ob,t)}rotateZ(t){return this.rotateOnAxis(lb,t)}translateOnAxis(t,n){return sb.copy(t).applyQuaternion(this.quaternion),this.position.add(sb.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(rb,t)}translateY(t){return this.translateOnAxis(ob,t)}translateZ(t){return this.translateOnAxis(lb,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ca.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?ah.copy(t):ah.set(t,n,i);let a=this.parent;this.updateWorldMatrix(!0,!1),Hl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ca.lookAt(Hl,ah,this.up):ca.lookAt(ah,Hl,this.up),this.quaternion.setFromRotationMatrix(ca),a&&(ca.extractRotation(a.matrixWorld),ro.setFromRotationMatrix(ca),this.quaternion.premultiply(ro.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cb),oo.child=t,this.dispatchEvent(oo),oo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(MT),Hm.child=t,this.dispatchEvent(Hm),Hm.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ca.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ca.multiply(t.parent.matrixWorld)),t.applyMatrix4(ca),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cb),oo.child=t,this.dispatchEvent(oo),oo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hl,t,bT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hl,ST,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(s(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),f=r(t.images),d=r(t.shapes),h=r(t.skeletons),p=r(t.animations),v=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=a,i;function r(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let a=t.children[i];this.add(a.clone())}return this}};an.DEFAULT_UP=new L(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vi=new L,ua=new L,Vm=new L,ha=new L,lo=new L,co=new L,ub=new L,km=new L,Gm=new L,Xm=new L,Wm=new de,qm=new de,Ym=new de,es=class e{constructor(t=new L,n=new L,i=new L){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),vi.subVectors(t,n),a.cross(vi);let s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,n,i,a,s){vi.subVectors(a,n),ua.subVectors(i,n),Vm.subVectors(t,n);let r=vi.dot(vi),o=vi.dot(ua),l=vi.dot(Vm),c=ua.dot(ua),f=ua.dot(Vm),d=r*c-o*o;if(d===0)return s.set(0,0,0),null;let h=1/d,p=(c*l-o*f)*h,v=(r*f-o*l)*h;return s.set(1-p-v,v,p)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,ha)===null?!1:ha.x>=0&&ha.y>=0&&ha.x+ha.y<=1}static getInterpolation(t,n,i,a,s,r,o,l){return this.getBarycoord(t,n,i,a,ha)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ha.x),l.addScaledVector(r,ha.y),l.addScaledVector(o,ha.z),l)}static getInterpolatedAttribute(t,n,i,a,s,r){return Wm.setScalar(0),qm.setScalar(0),Ym.setScalar(0),Wm.fromBufferAttribute(t,n),qm.fromBufferAttribute(t,i),Ym.fromBufferAttribute(t,a),r.setScalar(0),r.addScaledVector(Wm,s.x),r.addScaledVector(qm,s.y),r.addScaledVector(Ym,s.z),r}static isFrontFacing(t,n,i,a){return vi.subVectors(i,n),ua.subVectors(t,n),vi.cross(ua).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vi.subVectors(this.c,this.b),ua.subVectors(this.a,this.b),vi.cross(ua).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,s){return e.getInterpolation(t,this.a,this.b,this.c,n,i,a,s)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,a=this.b,s=this.c,r,o;lo.subVectors(a,i),co.subVectors(s,i),km.subVectors(t,i);let l=lo.dot(km),c=co.dot(km);if(l<=0&&c<=0)return n.copy(i);Gm.subVectors(t,a);let f=lo.dot(Gm),d=co.dot(Gm);if(f>=0&&d<=f)return n.copy(a);let h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return r=l/(l-f),n.copy(i).addScaledVector(lo,r);Xm.subVectors(t,s);let p=lo.dot(Xm),v=co.dot(Xm);if(v>=0&&p<=v)return n.copy(s);let x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(co,o);let m=f*v-p*d;if(m<=0&&d-f>=0&&p-v>=0)return ub.subVectors(s,a),o=(d-f)/(d-f+(p-v)),n.copy(a).addScaledVector(ub,o);let u=1/(m+x+h);return r=x*u,o=h*u,n.copy(i).addScaledVector(lo,r).addScaledVector(co,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},pS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$a={h:0,s:0,l:0},sh={h:0,s:0,l:0};function Zm(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Qt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=re.workingColorSpace){return this.r=t,this.g=n,this.b=i,re.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=re.workingColorSpace){if(t=Dg(t,1),n=Jt(n,0,1),i=Jt(i,0,1),n===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=Zm(r,s,t+1/3),this.g=Zm(r,s,t),this.b=Zm(r,s,t-1/3)}return re.colorSpaceToWorking(this,a),this}setStyle(t,n=hn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=hn){let i=pS[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fa(t.r),this.g=fa(t.g),this.b=fa(t.b),this}copyLinearToSRGB(t){return this.r=mo(t.r),this.g=mo(t.g),this.b=mo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return re.workingToColorSpace(mn.copy(this),t),Math.round(Jt(mn.r*255,0,255))*65536+Math.round(Jt(mn.g*255,0,255))*256+Math.round(Jt(mn.b*255,0,255))}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=re.workingColorSpace){re.workingToColorSpace(mn.copy(this),n);let i=mn.r,a=mn.g,s=mn.b,r=Math.max(i,a,s),o=Math.min(i,a,s),l,c,f=(o+r)/2;if(o===r)l=0,c=0;else{let d=r-o;switch(c=f<=.5?d/(r+o):d/(2-r-o),r){case i:l=(a-s)/d+(a<s?6:0);break;case a:l=(s-i)/d+2;break;case s:l=(i-a)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,n=re.workingColorSpace){return re.workingToColorSpace(mn.copy(this),n),t.r=mn.r,t.g=mn.g,t.b=mn.b,t}getStyle(t=hn){re.workingToColorSpace(mn.copy(this),t);let n=mn.r,i=mn.g,a=mn.b;return t!==hn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL($a),this.setHSL($a.h+t,$a.s+n,$a.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL($a),t.getHSL(sh);let i=Wl($a.h,sh.h,n),a=Wl($a.s,sh.s,n),s=Wl($a.l,sh.l,n);return this.setHSL(i,a,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,a=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new Qt;Qt.NAMES=pS;var ET=0,Oi=class extends pa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ET++}),this.uuid=Do(),this.name="",this.type="Material",this.blending=Hs,this.side=da,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bh,this.blendDst=Sh,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(i.blending=this.blending),this.side!==da&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bh&&(i.blendSrc=this.blendSrc),this.blendDst!==Sh&&(i.blendDst=this.blendDst),this.blendEquation!==is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){let r=[];for(let o in s){let l=s[o];delete l.metadata,r.push(l)}return r}if(n){let s=a(t.textures),r=a(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},We=class extends Oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=vg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Xe=new L,rh=new kt,TT=0,qn=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:TT++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=rg,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)rh.fromBufferAttribute(this,n),rh.applyMatrix3(t),this.setXY(n,rh.x,rh.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Xe.fromBufferAttribute(this,n),Xe.applyMatrix3(t),this.setXYZ(n,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Xe.fromBufferAttribute(this,n),Xe.applyMatrix4(t),this.setXYZ(n,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Xe.fromBufferAttribute(this,n),Xe.applyNormalMatrix(t),this.setXYZ(n,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Xe.fromBufferAttribute(this,n),Xe.transformDirection(t),this.setXYZ(n,Xe.x,Xe.y,Xe.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=po(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=bn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=po(n,this.array)),n}setX(t,n){return this.normalized&&(n=bn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=po(n,this.array)),n}setY(t,n){return this.normalized&&(n=bn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=po(n,this.array)),n}setZ(t,n){return this.normalized&&(n=bn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=po(n,this.array)),n}setW(t,n){return this.normalized&&(n=bn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=bn(n,this.array),i=bn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=bn(n,this.array),i=bn(i,this.array),a=bn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t*=this.itemSize,this.normalized&&(n=bn(n,this.array),i=bn(i,this.array),a=bn(a,this.array),s=bn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rg&&(t.usage=this.usage),t}};var Ql=class extends qn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var jl=class extends qn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var ye=class extends qn{constructor(t,n,i){super(new Float32Array(t),n,i)}},AT=0,li=new Me,Km=new an,uo=new L,Wn=new as,Vl=new as,nn=new L,qe=class e extends pa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AT++}),this.uuid=Do(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ng(t)?jl:Ql)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Wt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return li.makeRotationFromQuaternion(t),this.applyMatrix4(li),this}rotateX(t){return li.makeRotationX(t),this.applyMatrix4(li),this}rotateY(t){return li.makeRotationY(t),this.applyMatrix4(li),this}rotateZ(t){return li.makeRotationZ(t),this.applyMatrix4(li),this}translate(t,n,i){return li.makeTranslation(t,n,i),this.applyMatrix4(li),this}scale(t,n,i){return li.makeScale(t,n,i),this.applyMatrix4(li),this}lookAt(t){return Km.lookAt(t),Km.updateMatrix(),this.applyMatrix4(Km.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(uo).negate(),this.translate(uo.x,uo.y,uo.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let a=0,s=t.length;a<s;a++){let r=t[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ye(i,3))}else{let i=Math.min(t.length,n.count);for(let a=0;a<i;a++){let s=t[a];n.setXYZ(a,s.x,s.y,s.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){let s=n[i];Wn.setFromBufferAttribute(s),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let i=this.boundingSphere.center;if(Wn.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){let o=n[s];Vl.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(Wn.min,Vl.min),Wn.expandByPoint(nn),nn.addVectors(Wn.max,Vl.max),Wn.expandByPoint(nn)):(Wn.expandByPoint(Vl.min),Wn.expandByPoint(Vl.max))}Wn.getCenter(i);let a=0;for(let s=0,r=t.count;s<r;s++)nn.fromBufferAttribute(t,s),a=Math.max(a,i.distanceToSquared(nn));if(n)for(let s=0,r=n.length;s<r;s++){let o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)nn.fromBufferAttribute(o,c),l&&(uo.fromBufferAttribute(t,c),nn.add(uo)),a=Math.max(a,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,a=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new L,l[D]=new L;let c=new L,f=new L,d=new L,h=new kt,p=new kt,v=new kt,x=new L,m=new L;function u(D,M,S){c.fromBufferAttribute(i,D),f.fromBufferAttribute(i,M),d.fromBufferAttribute(i,S),h.fromBufferAttribute(s,D),p.fromBufferAttribute(s,M),v.fromBufferAttribute(s,S),f.sub(c),d.sub(c),p.sub(h),v.sub(h);let N=1/(p.x*v.y-v.x*p.y);isFinite(N)&&(x.copy(f).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(N),m.copy(d).multiplyScalar(p.x).addScaledVector(f,-v.x).multiplyScalar(N),o[D].add(x),o[M].add(x),o[S].add(x),l[D].add(m),l[M].add(m),l[S].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:t.count}]);for(let D=0,M=g.length;D<M;++D){let S=g[D],N=S.start,P=S.count;for(let k=N,X=N+P;k<X;k+=3)u(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let _=new L,y=new L,T=new L,w=new L;function A(D){T.fromBufferAttribute(a,D),w.copy(T);let M=o[D];_.copy(M),_.sub(T.multiplyScalar(T.dot(M))).normalize(),y.crossVectors(w,M);let N=y.dot(l[D])<0?-1:1;r.setXYZW(D,_.x,_.y,_.z,N)}for(let D=0,M=g.length;D<M;++D){let S=g[D],N=S.start,P=S.count;for(let k=N,X=N+P;k<X;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let a=new L,s=new L,r=new L,o=new L,l=new L,c=new L,f=new L,d=new L;if(t)for(let h=0,p=t.count;h<p;h+=3){let v=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);a.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),r.fromBufferAttribute(n,m),f.subVectors(r,s),d.subVectors(a,s),f.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)a.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),r.fromBufferAttribute(n,h+2),f.subVectors(r,s),d.subVectors(a,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)nn.fromBufferAttribute(t,n),nn.normalize(),t.setXYZ(n,nn.x,nn.y,nn.z)}toNonIndexed(){function t(o,l){let c=o.array,f=o.itemSize,d=o.normalized,h=new c.constructor(l.length*f),p=0,v=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*f;for(let u=0;u<f;u++)h[v++]=c[p++]}return new qn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,a=this.attributes;for(let o in a){let l=a[o],c=t(l,i);n.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let f=0,d=c.length;f<d;f++){let h=c[f],p=t(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let a={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];f.push(p.toJSON(t.data))}f.length>0&&(a[l]=f,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let a=t.attributes;for(let c in a){let f=a[c];this.setAttribute(c,f.clone(n))}let s=t.morphAttributes;for(let c in s){let f=[],d=s[c];for(let h=0,p=d.length;h<p;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,f=r.length;c<f;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hb=new Me,Bs=new Gs,oh=new ss,fb=new L,lh=new L,ch=new L,uh=new L,Jm=new L,hh=new L,db=new L,fh=new L,Lt=class extends an{constructor(t=new qe,n=new We){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){let o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,n){let i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,t);let o=this.morphTargetInfluences;if(s&&o){hh.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let f=o[l],d=s[l];f!==0&&(Jm.fromBufferAttribute(d,t),r?hh.addScaledVector(Jm,f):hh.addScaledVector(Jm.sub(n),f))}n.add(hh)}return n}raycast(t,n){let i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oh.copy(i.boundingSphere),oh.applyMatrix4(s),Bs.copy(t.ray).recast(t.near),!(oh.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(oh,fb)===null||Bs.origin.distanceToSquared(fb)>(t.far-t.near)**2))&&(hb.copy(s).invert(),Bs.copy(t.ray).applyMatrix4(hb),!(i.boundingBox!==null&&Bs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Bs)))}_computeIntersections(t,n,i){let a,s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,x=h.length;v<x;v++){let m=h[v],u=r[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,T=_;y<T;y+=3){let w=o.getX(y),A=o.getX(y+1),D=o.getX(y+2);a=dh(this,u,t,i,c,f,d,w,A,D),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{let v=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=v,u=x;m<u;m+=3){let g=o.getX(m),_=o.getX(m+1),y=o.getX(m+2);a=dh(this,r,t,i,c,f,d,g,_,y),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,x=h.length;v<x;v++){let m=h[v],u=r[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,T=_;y<T;y+=3){let w=y,A=y+1,D=y+2;a=dh(this,u,t,i,c,f,d,w,A,D),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{let v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,u=x;m<u;m+=3){let g=m,_=m+1,y=m+2;a=dh(this,r,t,i,c,f,d,g,_,y),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}};function wT(e,t,n,i,a,s,r,o){let l;if(t.side===Mn?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,t.side===da,o),l===null)return null;fh.copy(o),fh.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(fh);return c<n.near||c>n.far?null:{distance:c,point:fh.clone(),object:e}}function dh(e,t,n,i,a,s,r,o,l,c){e.getVertexPosition(o,lh),e.getVertexPosition(l,ch),e.getVertexPosition(c,uh);let f=wT(e,t,n,i,lh,ch,uh,db);if(f){let d=new L;es.getBarycoord(db,lh,ch,uh,d),a&&(f.uv=es.getInterpolatedAttribute(a,o,l,c,d,new kt)),s&&(f.uv1=es.getInterpolatedAttribute(s,o,l,c,d,new kt)),r&&(f.normal=es.getInterpolatedAttribute(r,o,l,c,d,new L),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new L,materialIndex:0};es.getNormal(lh,ch,uh,h.normal),f.face=h,f.barycoord=d}return f}var sn=class e extends qe{constructor(t=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};let o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);let l=[],c=[],f=[],d=[],h=0,p=0;v("z","y","x",-1,-1,i,n,t,r,s,0),v("z","y","x",1,-1,i,n,-t,r,s,1),v("x","z","y",1,1,t,i,n,a,r,2),v("x","z","y",1,-1,t,i,-n,a,r,3),v("x","y","z",1,-1,t,n,i,a,s,4),v("x","y","z",-1,-1,t,n,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(f,3)),this.setAttribute("uv",new ye(d,2));function v(x,m,u,g,_,y,T,w,A,D,M){let S=y/A,N=T/D,P=y/2,k=T/2,X=w/2,Y=A+1,q=D+1,at=0,G=0,lt=new L;for(let dt=0;dt<q;dt++){let Et=dt*N-k;for(let Ft=0;Ft<Y;Ft++){let ee=Ft*S-P;lt[x]=ee*g,lt[m]=Et*_,lt[u]=X,c.push(lt.x,lt.y,lt.z),lt[x]=0,lt[m]=0,lt[u]=w>0?1:-1,f.push(lt.x,lt.y,lt.z),d.push(Ft/A),d.push(1-dt/D),at+=1}}for(let dt=0;dt<D;dt++)for(let Et=0;Et<A;Et++){let Ft=h+Et+Y*dt,ee=h+Et+Y*(dt+1),se=h+(Et+1)+Y*(dt+1),Yt=h+(Et+1)+Y*dt;l.push(Ft,ee,Yt),l.push(ee,se,Yt),G+=6}o.addGroup(p,G,M),p+=G,h+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function er(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let a=e[n][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone():Array.isArray(a)?t[n][i]=a.slice():t[n][i]=a}}return t}function gn(e){let t={};for(let n=0;n<e.length;n++){let i=er(e[n]);for(let a in i)t[a]=i[a]}return t}function CT(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Lg(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var mS={clone:er,merge:gn},RT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bi=class extends Oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=RT,this.fragmentShader=DT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=er(t.uniforms),this.uniformsGroups=CT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let a in this.uniforms){let r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},$l=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ts=new L,pb=new kt,mb=new kt,Ke=class extends $l{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=vo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Xl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vo*2*Math.atan(Math.tan(Xl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ts.x,ts.y).multiplyScalar(-t/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ts.x,ts.y).multiplyScalar(-t/ts.z)}getViewSize(t,n){return this.getViewBounds(t,pb,mb),n.subVectors(mb,pb)}setViewOffset(t,n,i,a,s,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Xl*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,n-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},ho=-90,fo=1,Rh=class extends an{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let a=new Ke(ho,fo,t,n);a.layers=this.layers,this.add(a);let s=new Ke(ho,fo,t,n);s.layers=this.layers,this.add(s);let r=new Ke(ho,fo,t,n);r.layers=this.layers,this.add(r);let o=new Ke(ho,fo,t,n);o.layers=this.layers,this.add(o);let l=new Ke(ho,fo,t,n);l.layers=this.layers,this.add(l);let c=new Ke(ho,fo,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,l]=n;for(let c of n)this.remove(c);if(t===yi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Zl)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,r,o,l,c,f]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,a),t.render(n,s),t.setRenderTarget(i,1,a),t.render(n,r),t.setRenderTarget(i,2,a),t.render(n,o),t.setRenderTarget(i,3,a),t.render(n,l),t.setRenderTarget(i,4,a),t.render(n,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,a),t.render(n,f),t.setRenderTarget(d,h,p),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},tc=class extends Yn{constructor(t=[],n=$s,i,a,s,r,o,l,c,f){super(t,n,i,a,s,r,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Dh=class extends Ii{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new tc(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new sn(5,5,5),s=new bi({name:"CubemapFromEquirect",uniforms:er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:va});s.uniforms.tEquirect.value=n;let r=new Lt(a,s),o=n.minFilter;return n.minFilter===us&&(n.minFilter=_i),new Rh(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,a);t.setRenderTarget(s)}},fn=class extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}},UT={type:"move"},bo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,s=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let x of t.hand.values()){let m=n.getJointPose(x,i),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(UT)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new fn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},Xs=class e{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Qt(t),this.density=n}clone(){return new e(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ws=class extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var Qm=new L,NT=new L,LT=new Wt,Li=class{constructor(t=new L(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let a=Qm.subVectors(i,n).cross(NT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta(Qm),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:n.copy(t.start).addScaledVector(i,s)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||LT.getNormalMatrix(t),a=this.coplanarPoint(Qm).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},zs=new ss,IT=new kt(.5,.5),ph=new L,So=class{constructor(t=new Li,n=new Li,i=new Li,a=new Li,s=new Li,r=new Li){this.planes=[t,n,i,a,s,r]}set(t,n,i,a,s,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=yi,i=!1){let a=this.planes,s=t.elements,r=s[0],o=s[1],l=s[2],c=s[3],f=s[4],d=s[5],h=s[6],p=s[7],v=s[8],x=s[9],m=s[10],u=s[11],g=s[12],_=s[13],y=s[14],T=s[15];if(a[0].setComponents(c-r,p-f,u-v,T-g).normalize(),a[1].setComponents(c+r,p+f,u+v,T+g).normalize(),a[2].setComponents(c+o,p+d,u+x,T+_).normalize(),a[3].setComponents(c-o,p-d,u-x,T-_).normalize(),i)a[4].setComponents(l,h,m,y).normalize(),a[5].setComponents(c-l,p-h,u-m,T-y).normalize();else if(a[4].setComponents(c-l,p-h,u-m,T-y).normalize(),n===yi)a[5].setComponents(c+l,p+h,u+m,T+y).normalize();else if(n===Zl)a[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(t){zs.center.set(0,0,0);let n=IT.distanceTo(t.center);return zs.radius=.7071067811865476+n,zs.applyMatrix4(t.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(t){let n=this.planes,i=t.center,a=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let a=n[i];if(ph.x=a.normal.x>0?t.max.x:t.min.x,ph.y=a.normal.y>0?t.max.y:t.min.y,ph.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(ph)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var rs=class extends Oi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Uh=new L,Nh=new L,gb=new Me,kl=new Gs,mh=new ss,jm=new L,vb=new L,qs=class extends an{constructor(t=new qe,n=new rs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let n=t.attributes.position,i=[0];for(let a=1,s=n.count;a<s;a++)Uh.fromBufferAttribute(n,a-1),Nh.fromBufferAttribute(n,a),i[a]=i[a-1],i[a]+=Uh.distanceTo(Nh);t.setAttribute("lineDistance",new ye(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){let i=this.geometry,a=this.matrixWorld,s=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mh.copy(i.boundingSphere),mh.applyMatrix4(a),mh.radius+=s,t.ray.intersectsSphere(mh)===!1)return;gb.copy(a).invert(),kl.copy(t.ray).applyMatrix4(gb);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){let p=Math.max(0,r.start),v=Math.min(f.count,r.start+r.count);for(let x=p,m=v-1;x<m;x+=c){let u=f.getX(x),g=f.getX(x+1),_=gh(this,t,kl,l,u,g,x);_&&n.push(_)}if(this.isLineLoop){let x=f.getX(v-1),m=f.getX(p),u=gh(this,t,kl,l,x,m,v-1);u&&n.push(u)}}else{let p=Math.max(0,r.start),v=Math.min(h.count,r.start+r.count);for(let x=p,m=v-1;x<m;x+=c){let u=gh(this,t,kl,l,x,x+1,x);u&&n.push(u)}if(this.isLineLoop){let x=gh(this,t,kl,l,v-1,p,v-1);x&&n.push(x)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){let o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function gh(e,t,n,i,a,s,r){let o=e.geometry.attributes.position;if(Uh.fromBufferAttribute(o,a),Nh.fromBufferAttribute(o,s),n.distanceSqToSegment(Uh,Nh,jm,vb)>i)return;jm.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(jm);if(!(c<t.near||c>t.far))return{distance:c,point:vb.clone().applyMatrix4(e.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:e}}var Mo=class extends Oi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},yb=new Me,og=new Gs,vh=new ss,yh=new L,ec=class extends an{constructor(t=new qe,n=new Mo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){let i=this.geometry,a=this.matrixWorld,s=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vh.copy(i.boundingSphere),vh.applyMatrix4(a),vh.radius+=s,t.ray.intersectsSphere(vh)===!1)return;yb.copy(a).invert(),og.copy(t.ray).applyMatrix4(yb);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let v=h,x=p;v<x;v++){let m=c.getX(v);yh.fromBufferAttribute(d,m),_b(yh,m,l,a,t,n,this)}}else{let h=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let v=h,x=p;v<x;v++)yh.fromBufferAttribute(d,v),_b(yh,v,l,a,t,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){let o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function _b(e,t,n,i,a,s,r){let o=og.distanceSqToPoint(e);if(o<n){let l=new L;og.closestPointToPoint(e,l),l.applyMatrix4(i);let c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}var nc=class extends Yn{constructor(t,n,i=hs,a,s,r,o=ci,l=ci,c,f=go,d=1){if(f!==go&&f!==Ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:n,depth:d};super(h,a,s,r,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new _o(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},ic=class extends Yn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var ac=class e extends qe{constructor(t=1,n=32,i=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:i,thetaLength:a},n=Math.max(3,n);let s=[],r=[],o=[],l=[],c=new L,f=new kt;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=n;d++,h+=3){let p=i+d/n*a;c.x=t*Math.cos(p),c.y=t*Math.sin(p),r.push(c.x,c.y,c.z),o.push(0,0,1),f.x=(r[h]/t+1)/2,f.y=(r[h+1]/t+1)/2,l.push(f.x,f.y)}for(let d=1;d<=n;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new ye(r,3)),this.setAttribute("normal",new ye(o,3)),this.setAttribute("uv",new ye(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Sn=class e extends qe{constructor(t=1,n=1,i=1,a=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:a,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};let c=this;a=Math.floor(a),s=Math.floor(s);let f=[],d=[],h=[],p=[],v=0,x=[],m=i/2,u=0;g(),r===!1&&(t>0&&_(!0),n>0&&_(!1)),this.setIndex(f),this.setAttribute("position",new ye(d,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(p,2));function g(){let y=new L,T=new L,w=0,A=(n-t)/i;for(let D=0;D<=s;D++){let M=[],S=D/s,N=S*(n-t)+t;for(let P=0;P<=a;P++){let k=P/a,X=k*l+o,Y=Math.sin(X),q=Math.cos(X);T.x=N*Y,T.y=-S*i+m,T.z=N*q,d.push(T.x,T.y,T.z),y.set(Y,A,q).normalize(),h.push(y.x,y.y,y.z),p.push(k,1-S),M.push(v++)}x.push(M)}for(let D=0;D<a;D++)for(let M=0;M<s;M++){let S=x[M][D],N=x[M+1][D],P=x[M+1][D+1],k=x[M][D+1];(t>0||M!==0)&&(f.push(S,N,k),w+=3),(n>0||M!==s-1)&&(f.push(N,P,k),w+=3)}c.addGroup(u,w,0),u+=w}function _(y){let T=v,w=new kt,A=new L,D=0,M=y===!0?t:n,S=y===!0?1:-1;for(let P=1;P<=a;P++)d.push(0,m*S,0),h.push(0,S,0),p.push(.5,.5),v++;let N=v;for(let P=0;P<=a;P++){let X=P/a*l+o,Y=Math.cos(X),q=Math.sin(X);A.x=M*q,A.y=m*S,A.z=M*Y,d.push(A.x,A.y,A.z),h.push(0,S,0),w.x=Y*.5+.5,w.y=q*.5*S+.5,p.push(w.x,w.y),v++}for(let P=0;P<a;P++){let k=T+P,X=N+P;y===!0?f.push(X,X+1,k):f.push(X+1,X,k),D+=3}c.addGroup(u,D,y===!0?1:2),u+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ys=class e extends Sn{constructor(t=1,n=1,i=32,a=1,s=!1,r=0,o=Math.PI*2){super(0,t,n,i,a,s,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:i,heightSegments:a,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Eo=class e extends qe{constructor(t=[],n=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:i,detail:a};let s=[],r=[];o(a),c(i),f(),this.setAttribute("position",new ye(s,3)),this.setAttribute("normal",new ye(s.slice(),3)),this.setAttribute("uv",new ye(r,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(g){let _=new L,y=new L,T=new L;for(let w=0;w<n.length;w+=3)p(n[w+0],_),p(n[w+1],y),p(n[w+2],T),l(_,y,T,g)}function l(g,_,y,T){let w=T+1,A=[];for(let D=0;D<=w;D++){A[D]=[];let M=g.clone().lerp(y,D/w),S=_.clone().lerp(y,D/w),N=w-D;for(let P=0;P<=N;P++)P===0&&D===w?A[D][P]=M:A[D][P]=M.clone().lerp(S,P/N)}for(let D=0;D<w;D++)for(let M=0;M<2*(w-D)-1;M++){let S=Math.floor(M/2);M%2===0?(h(A[D][S+1]),h(A[D+1][S]),h(A[D][S])):(h(A[D][S+1]),h(A[D+1][S+1]),h(A[D+1][S]))}}function c(g){let _=new L;for(let y=0;y<s.length;y+=3)_.x=s[y+0],_.y=s[y+1],_.z=s[y+2],_.normalize().multiplyScalar(g),s[y+0]=_.x,s[y+1]=_.y,s[y+2]=_.z}function f(){let g=new L;for(let _=0;_<s.length;_+=3){g.x=s[_+0],g.y=s[_+1],g.z=s[_+2];let y=m(g)/2/Math.PI+.5,T=u(g)/Math.PI+.5;r.push(y,1-T)}v(),d()}function d(){for(let g=0;g<r.length;g+=6){let _=r[g+0],y=r[g+2],T=r[g+4],w=Math.max(_,y,T),A=Math.min(_,y,T);w>.9&&A<.1&&(_<.2&&(r[g+0]+=1),y<.2&&(r[g+2]+=1),T<.2&&(r[g+4]+=1))}}function h(g){s.push(g.x,g.y,g.z)}function p(g,_){let y=g*3;_.x=t[y+0],_.y=t[y+1],_.z=t[y+2]}function v(){let g=new L,_=new L,y=new L,T=new L,w=new kt,A=new kt,D=new kt;for(let M=0,S=0;M<s.length;M+=9,S+=6){g.set(s[M+0],s[M+1],s[M+2]),_.set(s[M+3],s[M+4],s[M+5]),y.set(s[M+6],s[M+7],s[M+8]),w.set(r[S+0],r[S+1]),A.set(r[S+2],r[S+3]),D.set(r[S+4],r[S+5]),T.copy(g).add(_).add(y).divideScalar(3);let N=m(T);x(w,S+0,g,N),x(A,S+2,_,N),x(D,S+4,y,N)}}function x(g,_,y,T){T<0&&g.x===1&&(r[_]=g.x-1),y.x===0&&y.z===0&&(r[_]=T/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function u(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.details)}},sc=class e extends Eo{constructor(t=1,n=0){let i=(1+Math.sqrt(5))/2,a=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-i,0,-a,i,0,a,-i,0,a,i,-a,-i,0,-a,i,0,a,-i,0,a,i,0,-i,0,-a,i,0,-a,-i,0,a,i,0,a],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,t,n),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new e(t.radius,t.detail)}};var Lh=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,n){let i=this.getUtoTmapping(t);return this.getPoint(i,n)}getPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return n}getSpacedPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPointAt(i/t));return n}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,a=this.getPoint(0),s=0;n.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),s+=i.distanceTo(a),n.push(s),a=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){let i=this.getLengths(),a=0,s=i.length,r;n?r=n:r=t*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(a=Math.floor(o+(l-o)/2),c=i[a]-r,c<0)o=a+1;else if(c>0)l=a-1;else{l=a;break}if(a=l,i[a]===r)return a/(s-1);let f=i[a],h=i[a+1]-f,p=(r-f)/h;return(a+p)/(s-1)}getTangent(t,n){let a=t-1e-4,s=t+1e-4;a<0&&(a=0),s>1&&(s=1);let r=this.getPoint(a),o=this.getPoint(s),l=n||(r.isVector2?new kt:new L);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,n){let i=this.getUtoTmapping(t);return this.getTangent(i,n)}computeFrenetFrames(t,n=!1){let i=new L,a=[],s=[],r=[],o=new L,l=new Me;for(let p=0;p<=t;p++){let v=p/t;a[p]=this.getTangentAt(v,new L)}s[0]=new L,r[0]=new L;let c=Number.MAX_VALUE,f=Math.abs(a[0].x),d=Math.abs(a[0].y),h=Math.abs(a[0].z);f<=c&&(c=f,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(a[0],i).normalize(),s[0].crossVectors(a[0],o),r[0].crossVectors(a[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),r[p]=r[p-1].clone(),o.crossVectors(a[p-1],a[p]),o.length()>Number.EPSILON){o.normalize();let v=Math.acos(Jt(a[p-1].dot(a[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,v))}r[p].crossVectors(a[p],s[p])}if(n===!0){let p=Math.acos(Jt(s[0].dot(s[t]),-1,1));p/=t,a[0].dot(o.crossVectors(s[0],s[t]))>0&&(p=-p);for(let v=1;v<=t;v++)s[v].applyMatrix4(l.makeRotationAxis(a[v],p*v)),r[v].crossVectors(a[v],s[v])}return{tangents:a,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}};function OT(e,t){let n=1-e;return n*n*t}function PT(e,t){return 2*(1-e)*e*t}function BT(e,t){return e*e*t}function $m(e,t,n,i){return OT(e,t)+PT(e,n)+BT(e,i)}var rc=class extends Lh{constructor(t=new L,n=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new L){let i=n,a=this.v0,s=this.v1,r=this.v2;return i.set($m(t,a.x,s.x,r.x),$m(t,a.y,s.y,r.y),$m(t,a.z,s.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}};var oc=class e extends Eo{constructor(t=1,n=0){let i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,s,t,n),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new e(t.radius,t.detail)}};var Zs=class e extends Eo{constructor(t=1,n=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,a,t,n),this.type="OctahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new e(t.radius,t.detail)}},ga=class e extends qe{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};let s=t/2,r=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,f=l+1,d=t/o,h=n/l,p=[],v=[],x=[],m=[];for(let u=0;u<f;u++){let g=u*h-r;for(let _=0;_<c;_++){let y=_*d-s;v.push(y,-g,0),x.push(0,0,1),m.push(_/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){let _=g+c*u,y=g+c*(u+1),T=g+1+c*(u+1),w=g+1+c*u;p.push(_,y,w),p.push(y,T,w)}this.setIndex(p),this.setAttribute("position",new ye(v,3)),this.setAttribute("normal",new ye(x,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var os=class e extends qe{constructor(t=1,n=32,i=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(r+o,Math.PI),c=0,f=[],d=new L,h=new L,p=[],v=[],x=[],m=[];for(let u=0;u<=i;u++){let g=[],_=u/i,y=0;u===0&&r===0?y=.5/n:u===i&&l===Math.PI&&(y=-.5/n);for(let T=0;T<=n;T++){let w=T/n;d.x=-t*Math.cos(a+w*s)*Math.sin(r+_*o),d.y=t*Math.cos(r+_*o),d.z=t*Math.sin(a+w*s)*Math.sin(r+_*o),v.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),m.push(w+y,1-_),g.push(c++)}f.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){let _=f[u][g+1],y=f[u][g],T=f[u+1][g],w=f[u+1][g+1];(u!==0||r>0)&&p.push(_,y,w),(u!==i-1||l<Math.PI)&&p.push(y,T,w)}this.setIndex(p),this.setAttribute("position",new ye(v,3)),this.setAttribute("normal",new ye(x,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Si=class e extends qe{constructor(t=1,n=.4,i=12,a=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:a,arc:s},i=Math.floor(i),a=Math.floor(a);let r=[],o=[],l=[],c=[],f=new L,d=new L,h=new L;for(let p=0;p<=i;p++)for(let v=0;v<=a;v++){let x=v/a*s,m=p/i*Math.PI*2;d.x=(t+n*Math.cos(m))*Math.cos(x),d.y=(t+n*Math.cos(m))*Math.sin(x),d.z=n*Math.sin(m),o.push(d.x,d.y,d.z),f.x=t*Math.cos(x),f.y=t*Math.sin(x),h.subVectors(d,f).normalize(),l.push(h.x,h.y,h.z),c.push(v/a),c.push(p/i)}for(let p=1;p<=i;p++)for(let v=1;v<=a;v++){let x=(a+1)*p+v-1,m=(a+1)*(p-1)+v-1,u=(a+1)*(p-1)+v,g=(a+1)*p+v;r.push(x,m,g),r.push(m,u,g)}this.setIndex(r),this.setAttribute("position",new ye(o,3)),this.setAttribute("normal",new ye(l,3)),this.setAttribute("uv",new ye(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Je=class extends Oi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wg,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ih=class extends Oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Oh=class extends Oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function _h(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function zT(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Ks=class{constructor(t,n,i,a){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,a=n[i],s=n[i-1];t:{e:{let r;n:{i:if(!(t<a)){for(let o=i+2;;){if(a===void 0){if(t<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=a,a=n[++i],t<a)break e}r=n.length;break n}if(!(t>=s)){let o=n[1];t<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(a=s,s=n[--i-1],t>=s)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(a=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,a)}return this.interpolate_(i,s,t,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,a=this.valueSize,s=t*a;for(let r=0;r!==a;++r)n[r]=i[s+r];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ph=class extends Ks{constructor(t,n,i,a){super(t,n,i,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ng,endingEnd:ng}}intervalChanged_(t,n,i){let a=this.parameterPositions,s=t-2,r=t+1,o=a[s],l=a[r];if(o===void 0)switch(this.getSettings_().endingStart){case ig:s=t,o=2*n-i;break;case ag:s=a.length-2,o=n+a[s]-a[s+1];break;default:s=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ig:r=t,l=2*i-n;break;case ag:r=1,l=i+a[1]-a[0];break;default:r=t-1,l=n}let c=(i-n)*.5,f=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=s*f,this._offsetNext=r*f}interpolate_(t,n,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,v=(i-n)/(a-n),x=v*v,m=x*v,u=-h*m+2*h*x-h*v,g=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*v+1,_=(-1-p)*m+(1.5+p)*x+.5*v,y=p*m-p*x;for(let T=0;T!==o;++T)s[T]=u*r[f+T]+g*r[c+T]+_*r[l+T]+y*r[d+T];return s}},Bh=class extends Ks{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t,n,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=(i-n)/(a-n),d=1-f;for(let h=0;h!==o;++h)s[h]=r[c+h]*d+r[l+h]*f;return s}},zh=class extends Ks{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t){return this.copySampleValue_(t-1)}},Zn=class{constructor(t,n,i,a){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=_h(n,this.TimeBufferType),this.values=_h(i,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:_h(t.times,Array),values:_h(t.values,Array)};let a=t.getInterpolation();a!==t.DefaultInterpolation&&(i.interpolation=a)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new zh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Bh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ph(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case ql:n=this.InterpolantFactoryMethodDiscrete;break;case Th:n=this.InterpolantFactoryMethodLinear;break;case xh:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ql;case this.InterpolantFactoryMethodLinear:return Th;case this.InterpolantFactoryMethodSmooth:return xh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,a=n.length;i!==a;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,a=n.length;i!==a;++i)n[i]*=t}return this}trim(t,n){let i=this.times,a=i.length,s=0,r=a-1;for(;s!==a&&i[s]<t;)++s;for(;r!==-1&&i[r]>n;)--r;if(++r,s!==0||r!==a){s>=r&&(r=Math.max(r,1),s=r-1);let o=this.getValueSize();this.times=i.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,a=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(a!==void 0&&zT(a))for(let o=0,l=a.length;o!==l;++o){let c=a[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),a=this.getInterpolation()===xh,s=t.length-1,r=1;for(let o=1;o<s;++o){let l=!1,c=t[o],f=t[o+1];if(c!==f&&(o!==1||c!==t[0]))if(a)l=!0;else{let d=o*i,h=d-i,p=d+i;for(let v=0;v!==i;++v){let x=n[d+v];if(x!==n[h+v]||x!==n[p+v]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let d=o*i,h=r*i;for(let p=0;p!==i;++p)n[h+p]=n[d+p]}++r}}if(s>0){t[r]=t[s];for(let o=s*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,a=new i(this.name,t,n);return a.createInterpolant=this.createInterpolant,a}};Zn.prototype.ValueTypeName="";Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=Th;var ls=class extends Zn{constructor(t,n,i){super(t,n,i)}};ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=ql;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Fh=class extends Zn{constructor(t,n,i,a){super(t,n,i,a)}};Fh.prototype.ValueTypeName="color";var Hh=class extends Zn{constructor(t,n,i,a){super(t,n,i,a)}};Hh.prototype.ValueTypeName="number";var Vh=class extends Ks{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t,n,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(a-n),c=t*o;for(let f=c+o;c!==f;c+=4)ma.slerpFlat(s,0,r,c-o,r,c,l);return s}},lc=class extends Zn{constructor(t,n,i,a){super(t,n,i,a)}InterpolantFactoryMethodLinear(t){return new Vh(this.times,this.values,this.getValueSize(),t)}};lc.prototype.ValueTypeName="quaternion";lc.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends Zn{constructor(t,n,i){super(t,n,i)}};cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=ql;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var kh=class extends Zn{constructor(t,n,i,a){super(t,n,i,a)}};kh.prototype.ValueTypeName="vector";var Gh=class{constructor(t,n,i){let a=this,s=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(f){o++,s===!1&&a.onStart!==void 0&&a.onStart(f,r,o),s=!0},this.itemEnd=function(f){r++,a.onProgress!==void 0&&a.onProgress(f,r,o),r===o&&(s=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(f){a.onError!==void 0&&a.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,d){return c.push(f,d),this},this.removeHandler=function(f){let d=c.indexOf(f);return d!==-1&&c.splice(d,2),this},this.getHandler=function(f){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],v=c[d+1];if(p.global&&(p.lastIndex=0),p.test(f))return v}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},gS=new Gh,Xh=class{constructor(t){this.manager=t!==void 0?t:gS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let i=this;return new Promise(function(a,s){i.load(t,a,n,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Xh.DEFAULT_MATERIAL_NAME="__DEFAULT";var To=class extends an{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}},Js=class extends To{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}},tg=new Me,xb=new L,bb=new L,Wh=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.mapType=Mi,this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new So,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera,i=this.matrix;xb.setFromMatrixPosition(t.matrixWorld),n.position.copy(xb),bb.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(bb),n.updateMatrixWorld(),tg.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tg,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(tg)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Sb=new Me,Gl=new L,eg=new L,lg=class extends Wh{constructor(){super(new Ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new kt(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,n=0){let i=this.camera,a=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Gl.setFromMatrixPosition(t.matrixWorld),i.position.copy(Gl),eg.copy(i.position),eg.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(eg),i.updateMatrixWorld(),a.makeTranslation(-Gl.x,-Gl.y,-Gl.z),Sb.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sb,i.coordinateSystem,i.reversedDepth)}},Pi=class extends To{constructor(t,n,i=0,a=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new lg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},cc=class extends $l{constructor(t=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2,s=i-t,r=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},cg=class extends Wh{constructor(){super(new cc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qs=class extends To{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new cg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var qh=class extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Ig="\\[\\]\\.:\\/",FT=new RegExp("["+Ig+"]","g"),Og="[^"+Ig+"]",HT="[^"+Ig.replace("\\.","")+"]",VT=/((?:WC+[\/:])*)/.source.replace("WC",Og),kT=/(WCOD+)?/.source.replace("WCOD",HT),GT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Og),XT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Og),WT=new RegExp("^"+VT+kT+GT+XT+"$"),qT=["material","materials","bones","map"],ug=class{constructor(t,n,i){let a=i||Re.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,a)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,a=this._bindings[i];a!==void 0&&a.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let a=this._targetGroup.nCachedObjects_,s=i.length;a!==s;++a)i[a].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Re=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(FT,"")}static parseTrackName(t){let n=WT.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let s=i.nodeName.substring(a+1);qT.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},a=i(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)t[n++]=i[a]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,a=n.propertyName,s=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[a];if(r===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Re.Composite=ug;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var BR=new Float32Array(1);var Mb=new Me,js=class{constructor(t,n,i=0,a=1/0){this.ray=new Gs(t,n),this.near=i,this.far=a,this.camera=null,this.layers=new xo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return Mb.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mb),this}intersectObject(t,n=!0,i=[]){return hg(t,this,i,n),i.sort(Eb),i}intersectObjects(t,n=!0,i=[]){for(let a=0,s=t.length;a<s;a++)hg(t[a],this,i,n);return i.sort(Eb),i}};function Eb(e,t){return e.distance-t.distance}function hg(e,t,n,i){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(a=!1),a===!0&&i===!0){let s=e.children;for(let r=0,o=s.length;r<o;r++)hg(s[r],t,n,!0)}}function Pg(e,t,n,i){let a=YT(i);switch(n){case Mg:return e*t;case Tg:return e*t/a.components*a.byteLength;case of:return e*t/a.components*a.byteLength;case Ag:return e*t*2/a.components*a.byteLength;case lf:return e*t*2/a.components*a.byteLength;case Eg:return e*t*3/a.components*a.byteLength;case hi:return e*t*4/a.components*a.byteLength;case cf:return e*t*4/a.components*a.byteLength;case fc:case dc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case pc:case mc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case hf:case df:return Math.max(e,16)*Math.max(t,8)/4;case uf:case ff:return Math.max(e,8)*Math.max(t,8)/2;case pf:case mf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case gf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case vf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case yf:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case _f:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case xf:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case bf:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Sf:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Mf:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ef:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Tf:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Af:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case wf:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Cf:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Rf:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Df:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Uf:case Nf:case Lf:return Math.ceil(e/4)*Math.ceil(t/4)*16;case If:case Of:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Pf:case Bf:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function YT(e){switch(e){case Mi:case _g:return{byteLength:1,components:1};case Ao:case xg:case wo:return{byteLength:2,components:1};case sf:case rf:return{byteLength:2,components:4};case hs:case af:case zi:return{byteLength:4,components:1};case bg:case Sg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function HS(){let e=null,t=!1,n=null,i=null;function a(s,r){n(s,r),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function KT(e){let t=new WeakMap;function n(o,l){let c=o.array,f=o.usage,d=c.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,c,f),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let f=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,f);else{d.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<d.length;p++){let v=d[h],x=d[p];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++h,d[h]=x)}d.length=h+1;for(let p=0,v=d.length;p<v;p++){let x=d[p];e.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}var JT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QT=`#ifdef USE_ALPHAHASH
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
#endif`,jT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$T=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nA=`#ifdef USE_AOMAP
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
#endif`,iA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aA=`#ifdef USE_BATCHING
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
#endif`,sA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cA=`#ifdef USE_IRIDESCENCE
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
#endif`,uA=`#ifdef USE_BUMPMAP
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
#endif`,hA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yA=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_A=`#define PI 3.141592653589793
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
} // validated`,xA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bA=`vec3 transformedNormal = objectNormal;
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
#endif`,SA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,MA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,EA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AA="gl_FragColor = linearToOutputTexel( gl_FragColor );",wA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,CA=`#ifdef USE_ENVMAP
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
#endif`,RA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,DA=`#ifdef USE_ENVMAP
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
#endif`,UA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NA=`#ifdef USE_ENVMAP
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
#endif`,LA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BA=`#ifdef USE_GRADIENTMAP
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
}`,zA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VA=`uniform bool receiveShadow;
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
#endif`,kA=`#ifdef USE_ENVMAP
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
#endif`,GA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YA=`PhysicalMaterial material;
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
#endif`,ZA=`struct PhysicalMaterial {
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
}`,KA=`
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
#endif`,JA=`#if defined( RE_IndirectDiffuse )
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
#endif`,QA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$A=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ew=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sw=`#if defined( USE_POINTS_UV )
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
#endif`,rw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ow=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hw=`#ifdef USE_MORPHTARGETS
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
#endif`,fw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yw=`#ifdef USE_NORMALMAP
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
#endif`,_w=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ew=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Aw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ww=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,Nw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Iw=`float getShadowMask() {
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
}`,Ow=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pw=`#ifdef USE_SKINNING
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
#endif`,Bw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zw=`#ifdef USE_SKINNING
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
#endif`,Fw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gw=`#ifdef USE_TRANSMISSION
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
#endif`,Xw=`#ifdef USE_TRANSMISSION
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
#endif`,Ww=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Kw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jw=`uniform sampler2D t2D;
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
}`,Qw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$w=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e2=`#include <common>
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
}`,n2=`#if DEPTH_PACKING == 3200
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
}`,i2=`#define DISTANCE
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
}`,a2=`#define DISTANCE
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
}`,s2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,r2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o2=`uniform float scale;
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
}`,l2=`uniform vec3 diffuse;
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
}`,c2=`#include <common>
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
}`,u2=`uniform vec3 diffuse;
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
}`,h2=`#define LAMBERT
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
}`,f2=`#define LAMBERT
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
}`,d2=`#define MATCAP
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
}`,p2=`#define MATCAP
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
}`,m2=`#define NORMAL
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
}`,g2=`#define NORMAL
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
}`,v2=`#define PHONG
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
}`,y2=`#define PHONG
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
}`,_2=`#define STANDARD
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
}`,x2=`#define STANDARD
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
}`,b2=`#define TOON
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
}`,S2=`#define TOON
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
}`,M2=`uniform float size;
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
}`,E2=`uniform vec3 diffuse;
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
}`,T2=`#include <common>
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
}`,A2=`uniform vec3 color;
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
}`,w2=`uniform float rotation;
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
}`,C2=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:JT,alphahash_pars_fragment:QT,alphamap_fragment:jT,alphamap_pars_fragment:$T,alphatest_fragment:tA,alphatest_pars_fragment:eA,aomap_fragment:nA,aomap_pars_fragment:iA,batching_pars_vertex:aA,batching_vertex:sA,begin_vertex:rA,beginnormal_vertex:oA,bsdfs:lA,iridescence_fragment:cA,bumpmap_pars_fragment:uA,clipping_planes_fragment:hA,clipping_planes_pars_fragment:fA,clipping_planes_pars_vertex:dA,clipping_planes_vertex:pA,color_fragment:mA,color_pars_fragment:gA,color_pars_vertex:vA,color_vertex:yA,common:_A,cube_uv_reflection_fragment:xA,defaultnormal_vertex:bA,displacementmap_pars_vertex:SA,displacementmap_vertex:MA,emissivemap_fragment:EA,emissivemap_pars_fragment:TA,colorspace_fragment:AA,colorspace_pars_fragment:wA,envmap_fragment:CA,envmap_common_pars_fragment:RA,envmap_pars_fragment:DA,envmap_pars_vertex:UA,envmap_physical_pars_fragment:kA,envmap_vertex:NA,fog_vertex:LA,fog_pars_vertex:IA,fog_fragment:OA,fog_pars_fragment:PA,gradientmap_pars_fragment:BA,lightmap_pars_fragment:zA,lights_lambert_fragment:FA,lights_lambert_pars_fragment:HA,lights_pars_begin:VA,lights_toon_fragment:GA,lights_toon_pars_fragment:XA,lights_phong_fragment:WA,lights_phong_pars_fragment:qA,lights_physical_fragment:YA,lights_physical_pars_fragment:ZA,lights_fragment_begin:KA,lights_fragment_maps:JA,lights_fragment_end:QA,logdepthbuf_fragment:jA,logdepthbuf_pars_fragment:$A,logdepthbuf_pars_vertex:tw,logdepthbuf_vertex:ew,map_fragment:nw,map_pars_fragment:iw,map_particle_fragment:aw,map_particle_pars_fragment:sw,metalnessmap_fragment:rw,metalnessmap_pars_fragment:ow,morphinstance_vertex:lw,morphcolor_vertex:cw,morphnormal_vertex:uw,morphtarget_pars_vertex:hw,morphtarget_vertex:fw,normal_fragment_begin:dw,normal_fragment_maps:pw,normal_pars_fragment:mw,normal_pars_vertex:gw,normal_vertex:vw,normalmap_pars_fragment:yw,clearcoat_normal_fragment_begin:_w,clearcoat_normal_fragment_maps:xw,clearcoat_pars_fragment:bw,iridescence_pars_fragment:Sw,opaque_fragment:Mw,packing:Ew,premultiplied_alpha_fragment:Tw,project_vertex:Aw,dithering_fragment:ww,dithering_pars_fragment:Cw,roughnessmap_fragment:Rw,roughnessmap_pars_fragment:Dw,shadowmap_pars_fragment:Uw,shadowmap_pars_vertex:Nw,shadowmap_vertex:Lw,shadowmask_pars_fragment:Iw,skinbase_vertex:Ow,skinning_pars_vertex:Pw,skinning_vertex:Bw,skinnormal_vertex:zw,specularmap_fragment:Fw,specularmap_pars_fragment:Hw,tonemapping_fragment:Vw,tonemapping_pars_fragment:kw,transmission_fragment:Gw,transmission_pars_fragment:Xw,uv_pars_fragment:Ww,uv_pars_vertex:qw,uv_vertex:Yw,worldpos_vertex:Zw,background_vert:Kw,background_frag:Jw,backgroundCube_vert:Qw,backgroundCube_frag:jw,cube_vert:$w,cube_frag:t2,depth_vert:e2,depth_frag:n2,distanceRGBA_vert:i2,distanceRGBA_frag:a2,equirect_vert:s2,equirect_frag:r2,linedashed_vert:o2,linedashed_frag:l2,meshbasic_vert:c2,meshbasic_frag:u2,meshlambert_vert:h2,meshlambert_frag:f2,meshmatcap_vert:d2,meshmatcap_frag:p2,meshnormal_vert:m2,meshnormal_frag:g2,meshphong_vert:v2,meshphong_frag:y2,meshphysical_vert:_2,meshphysical_frag:x2,meshtoon_vert:b2,meshtoon_frag:S2,points_vert:M2,points_frag:E2,shadow_vert:T2,shadow_frag:A2,sprite_vert:w2,sprite_frag:C2},ft={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Fi={basic:{uniforms:gn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:gn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:gn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:gn([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:gn([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:gn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:gn([ft.points,ft.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:gn([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:gn([ft.common,ft.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:gn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:gn([ft.sprite,ft.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:gn([ft.common,ft.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:gn([ft.lights,ft.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Fi.physical={uniforms:gn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var zf={r:0,b:0,g:0},nr=new xi,R2=new Me;function D2(e,t,n,i,a,s,r){let o=new Qt(0),l=s===!0?0:1,c,f,d=null,h=0,p=null;function v(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?n:t).get(y)),y}function x(_){let y=!1,T=v(_);T===null?u(o,l):T&&T.isColor&&(u(T,1),y=!0);let w=e.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(_,y){let T=v(y);T&&(T.isCubeTexture||T.mapping===uc)?(f===void 0&&(f=new Lt(new sn(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:er(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(w,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(f)),nr.copy(y.backgroundRotation),nr.x*=-1,nr.y*=-1,nr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),f.material.uniforms.envMap.value=T,f.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(R2.makeRotationFromEuler(nr)),f.material.toneMapped=re.getTransfer(T.colorSpace)!==pe,(d!==T||h!==T.version||p!==e.toneMapping)&&(f.material.needsUpdate=!0,d=T,h=T.version,p=e.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Lt(new ga(2,2),new bi({name:"BackgroundMaterial",uniforms:er(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:da,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=re.getTransfer(T.colorSpace)!==pe,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||h!==T.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,d=T,h=T.version,p=e.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,y){_.getRGB(zf,Lg(e)),i.buffers.color.setClear(zf.r,zf.g,zf.b,y,r)}function g(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),l=y,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(o,l)},render:x,addToRenderList:m,dispose:g}}function U2(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=h(null),s=a,r=!1;function o(S,N,P,k,X){let Y=!1,q=d(k,P,N);s!==q&&(s=q,c(s.object)),Y=p(S,k,P,X),Y&&v(S,k,P,X),X!==null&&t.update(X,e.ELEMENT_ARRAY_BUFFER),(Y||r)&&(r=!1,y(S,N,P,k),X!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return e.createVertexArray()}function c(S){return e.bindVertexArray(S)}function f(S){return e.deleteVertexArray(S)}function d(S,N,P){let k=P.wireframe===!0,X=i[S.id];X===void 0&&(X={},i[S.id]=X);let Y=X[N.id];Y===void 0&&(Y={},X[N.id]=Y);let q=Y[k];return q===void 0&&(q=h(l()),Y[k]=q),q}function h(S){let N=[],P=[],k=[];for(let X=0;X<n;X++)N[X]=0,P[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:P,attributeDivisors:k,object:S,attributes:{},index:null}}function p(S,N,P,k){let X=s.attributes,Y=N.attributes,q=0,at=P.getAttributes();for(let G in at)if(at[G].location>=0){let dt=X[G],Et=Y[G];if(Et===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(Et=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(Et=S.instanceColor)),dt===void 0||dt.attribute!==Et||Et&&dt.data!==Et.data)return!0;q++}return s.attributesNum!==q||s.index!==k}function v(S,N,P,k){let X={},Y=N.attributes,q=0,at=P.getAttributes();for(let G in at)if(at[G].location>=0){let dt=Y[G];dt===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(dt=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(dt=S.instanceColor));let Et={};Et.attribute=dt,dt&&dt.data&&(Et.data=dt.data),X[G]=Et,q++}s.attributes=X,s.attributesNum=q,s.index=k}function x(){let S=s.newAttributes;for(let N=0,P=S.length;N<P;N++)S[N]=0}function m(S){u(S,0)}function u(S,N){let P=s.newAttributes,k=s.enabledAttributes,X=s.attributeDivisors;P[S]=1,k[S]===0&&(e.enableVertexAttribArray(S),k[S]=1),X[S]!==N&&(e.vertexAttribDivisor(S,N),X[S]=N)}function g(){let S=s.newAttributes,N=s.enabledAttributes;for(let P=0,k=N.length;P<k;P++)N[P]!==S[P]&&(e.disableVertexAttribArray(P),N[P]=0)}function _(S,N,P,k,X,Y,q){q===!0?e.vertexAttribIPointer(S,N,P,X,Y):e.vertexAttribPointer(S,N,P,k,X,Y)}function y(S,N,P,k){x();let X=k.attributes,Y=P.getAttributes(),q=N.defaultAttributeValues;for(let at in Y){let G=Y[at];if(G.location>=0){let lt=X[at];if(lt===void 0&&(at==="instanceMatrix"&&S.instanceMatrix&&(lt=S.instanceMatrix),at==="instanceColor"&&S.instanceColor&&(lt=S.instanceColor)),lt!==void 0){let dt=lt.normalized,Et=lt.itemSize,Ft=t.get(lt);if(Ft===void 0)continue;let ee=Ft.buffer,se=Ft.type,Yt=Ft.bytesPerElement,J=se===e.INT||se===e.UNSIGNED_INT||lt.gpuType===af;if(lt.isInterleavedBufferAttribute){let tt=lt.data,_t=tt.stride,Ut=lt.offset;if(tt.isInstancedInterleavedBuffer){for(let bt=0;bt<G.locationSize;bt++)u(G.location+bt,tt.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let bt=0;bt<G.locationSize;bt++)m(G.location+bt);e.bindBuffer(e.ARRAY_BUFFER,ee);for(let bt=0;bt<G.locationSize;bt++)_(G.location+bt,Et/G.locationSize,se,dt,_t*Yt,(Ut+Et/G.locationSize*bt)*Yt,J)}else{if(lt.isInstancedBufferAttribute){for(let tt=0;tt<G.locationSize;tt++)u(G.location+tt,lt.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let tt=0;tt<G.locationSize;tt++)m(G.location+tt);e.bindBuffer(e.ARRAY_BUFFER,ee);for(let tt=0;tt<G.locationSize;tt++)_(G.location+tt,Et/G.locationSize,se,dt,Et*Yt,Et/G.locationSize*tt*Yt,J)}}else if(q!==void 0){let dt=q[at];if(dt!==void 0)switch(dt.length){case 2:e.vertexAttrib2fv(G.location,dt);break;case 3:e.vertexAttrib3fv(G.location,dt);break;case 4:e.vertexAttrib4fv(G.location,dt);break;default:e.vertexAttrib1fv(G.location,dt)}}}}g()}function T(){D();for(let S in i){let N=i[S];for(let P in N){let k=N[P];for(let X in k)f(k[X].object),delete k[X];delete N[P]}delete i[S]}}function w(S){if(i[S.id]===void 0)return;let N=i[S.id];for(let P in N){let k=N[P];for(let X in k)f(k[X].object),delete k[X];delete N[P]}delete i[S.id]}function A(S){for(let N in i){let P=i[N];if(P[S.id]===void 0)continue;let k=P[S.id];for(let X in k)f(k[X].object),delete k[X];delete P[S.id]}}function D(){M(),r=!0,s!==a&&(s=a,c(s.object))}function M(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:D,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:g}}function N2(e,t,n){let i;function a(c){i=c}function s(c,f){e.drawArrays(i,c,f),n.update(f,i,1)}function r(c,f,d){d!==0&&(e.drawArraysInstanced(i,c,f,d),n.update(f,i,d))}function o(c,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,d);let p=0;for(let v=0;v<d;v++)p+=f[v];n.update(p,i,1)}function l(c,f,d,h){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)r(c[v],f[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,d);let v=0;for(let x=0;x<d;x++)v+=f[x]*h[x];n.update(v,i,1)}}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function L2(e,t,n,i){let a;function s(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(A){return!(A!==hi&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let D=A===wo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Mi&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==zi&&!D)}function l(A){if(A==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),u=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=v>0,w=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:T,maxSamples:w}}function I2(e){let t=this,n=null,i=0,a=!1,s=!1,r=new Li,o=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||a;return a=h,i=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,p){let v=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,u=e.get(d);if(!a||v===null||v.length===0||s&&!m)s?f(null):c();else{let g=s?0:i,_=g*4,y=u.clippingState||null;l.value=y,y=f(v,h,_,p);for(let T=0;T!==_;++T)y[T]=n[T];u.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(d,h,p,v){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,v!==!0||m===null){let u=p+x*4,g=h.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let _=0,y=p;_!==x;++_,y+=4)r.copy(d[_]).applyMatrix4(g,o),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function O2(e){let t=new WeakMap;function n(r,o){return o===tf?r.mapping=$s:o===ef&&(r.mapping=tr),r}function i(r){if(r&&r.isTexture){let o=r.mapping;if(o===tf||o===ef)if(t.has(r)){let l=t.get(r).texture;return n(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new Dh(l.height);return c.fromEquirectangularTexture(e,r),t.set(r,c),r.addEventListener("dispose",a),n(c.texture,r.mapping)}else return null}}return r}function a(r){let o=r.target;o.removeEventListener("dispose",a);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var No=4,vS=[.125,.215,.35,.446,.526,.582],sr=20,Bg=new cc,yS=new Qt,zg=null,Fg=0,Hg=0,Vg=!1,ar=(1+Math.sqrt(5))/2,Uo=1/ar,_S=[new L(-ar,Uo,0),new L(ar,Uo,0),new L(-Uo,0,ar),new L(Uo,0,ar),new L(0,ar,-Uo),new L(0,ar,Uo),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],P2=new L,Vf=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,a=100,s={}){let{size:r=256,position:o=P2}=s;zg=this._renderer.getRenderTarget(),Fg=this._renderer.getActiveCubeFace(),Hg=this._renderer.getActiveMipmapLevel(),Vg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=SS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(zg,Fg,Hg),this._renderer.xr.enabled=Vg,t.scissorTest=!1,Ff(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===$s||t.mapping===tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zg=this._renderer.getRenderTarget(),Fg=this._renderer.getActiveCubeFace(),Hg=this._renderer.getActiveMipmapLevel(),Vg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:wo,format:hi,colorSpace:ks,depthBuffer:!1},a=xS(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xS(t,n,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=B2(s)),this._blurMaterial=z2(s,t,n)}return a}_compileMaterial(t){let n=new Lt(this._lodPlanes[0],t);this._renderer.compile(n,Bg)}_sceneToCubeUV(t,n,i,a,s){let l=new Ke(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(yS),d.toneMapping=ya,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(a),d.clearDepth(),d.setRenderTarget(null));let x=new We({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),m=new Lt(new sn,x),u=!1,g=t.background;g?g.isColor&&(x.color.copy(g),t.background=null,u=!0):(x.color.copy(yS),u=!0);for(let _=0;_<6;_++){let y=_%3;y===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[_],s.y,s.z)):y===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[_]));let T=this._cubeSize;Ff(a,y*T,_>2?T:0,T,T),d.setRenderTarget(a),u&&d.render(m,l),d.render(t,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=h,t.background=g}_textureToCubeUV(t,n){let i=this._renderer,a=t.mapping===$s||t.mapping===tr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=SS()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bS());let s=a?this._cubemapMaterial:this._equirectMaterial,r=new Lt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let l=this._cubeSize;Ff(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,Bg)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let a=this._lodPlanes.length;for(let s=1;s<a;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=_S[(a-s-1)%_S.length];this._blur(t,s-1,s,r,o)}n.autoClear=i}_blur(t,n,i,a,s){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,a,"latitudinal",s),this._halfBlur(r,t,i,i,a,"longitudinal",s)}_halfBlur(t,n,i,a,s,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let f=3,d=new Lt(this._lodPlanes[a],c),h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*sr-1),x=s/v,m=isFinite(s)?1+Math.floor(f*x):sr;m>sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${sr}`);let u=[],g=0;for(let A=0;A<sr;++A){let D=A/x,M=Math.exp(-D*D/2);u.push(M),A===0?g+=M:A<m&&(g+=2*M)}for(let A=0;A<u.length;A++)u[A]=u[A]/g;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=r==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:_}=this;h.dTheta.value=v,h.mipInt.value=_-i;let y=this._sizeLods[a],T=3*y*(a>_-No?a-_+No:0),w=4*(this._cubeSize-y);Ff(n,T,w,3*y,2*y),l.setRenderTarget(n),l.render(d,Bg)}};function B2(e){let t=[],n=[],i=[],a=e,s=e-No+1+vS.length;for(let r=0;r<s;r++){let o=Math.pow(2,a);n.push(o);let l=1/o;r>e-No?l=vS[r-e+No-1]:r===0&&(l=0),i.push(l);let c=1/(o-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,v=6,x=3,m=2,u=1,g=new Float32Array(x*v*p),_=new Float32Array(m*v*p),y=new Float32Array(u*v*p);for(let w=0;w<p;w++){let A=w%3*2/3-1,D=w>2?0:-1,M=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];g.set(M,x*v*w),_.set(h,m*v*w);let S=[w,w,w,w,w,w];y.set(S,u*v*w)}let T=new qe;T.setAttribute("position",new qn(g,x)),T.setAttribute("uv",new qn(_,m)),T.setAttribute("faceIndex",new qn(y,u)),t.push(T),a>No&&a--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function xS(e,t,n){let i=new Ii(e,t,n);return i.texture.mapping=uc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ff(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function z2(e,t,n){let i=new Float32Array(sr),a=new L(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Qg(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function bS(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qg(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function SS(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function Qg(){return`

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
	`}function F2(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===tf||l===ef,f=l===$s||l===tr;if(c||f){let d=t.get(o),h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new Vf(e)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||f&&p&&a(p)?(n===null&&(n=new Vf(e)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function a(o){let l=0,c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function H2(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(i)}return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let a=n(i);return a===null&&yo("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function V2(e,t,n,i){let a={},s=new WeakMap;function r(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let v in h.attributes)t.remove(h.attributes[v]);h.removeEventListener("dispose",r),delete a[h.id];let p=s.get(h);p&&(t.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return a[h.id]===!0||(h.addEventListener("dispose",r),a[h.id]=!0,n.memory.geometries++),h}function l(d){let h=d.attributes;for(let p in h)t.update(h[p],e.ARRAY_BUFFER)}function c(d){let h=[],p=d.index,v=d.attributes.position,x=0;if(p!==null){let g=p.array;x=p.version;for(let _=0,y=g.length;_<y;_+=3){let T=g[_+0],w=g[_+1],A=g[_+2];h.push(T,w,w,A,A,T)}}else if(v!==void 0){let g=v.array;x=v.version;for(let _=0,y=g.length/3-1;_<y;_+=3){let T=_+0,w=_+1,A=_+2;h.push(T,w,w,A,A,T)}}else return;let m=new(Ng(h)?jl:Ql)(h,1);m.version=x;let u=s.get(d);u&&t.remove(u),s.set(d,m)}function f(d){let h=s.get(d);if(h){let p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:f}}function k2(e,t,n){let i;function a(h){i=h}let s,r;function o(h){s=h.type,r=h.bytesPerElement}function l(h,p){e.drawElements(i,p,s,h*r),n.update(p,i,1)}function c(h,p,v){v!==0&&(e.drawElementsInstanced(i,p,s,h*r,v),n.update(p,i,v))}function f(h,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,v);let m=0;for(let u=0;u<v;u++)m+=p[u];n.update(m,i,1)}function d(h,p,v,x){if(v===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<h.length;u++)c(h[u]/r,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,x,0,v);let u=0;for(let g=0;g<v;g++)u+=p[g]*x[g];n.update(u,i,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function G2(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function X2(e,t,n){let i=new WeakMap,a=new de;function s(r,o,l){let c=r.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=f!==void 0?f.length:0,h=i.get(o);if(h===void 0||h.count!==d){let M=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],g=o.morphAttributes.color||[],_=0;p===!0&&(_=1),v===!0&&(_=2),x===!0&&(_=3);let y=o.attributes.position.count*_,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*T*4*d),A=new Jl(w,y,T,d);A.type=zi,A.needsUpdate=!0;let D=_*4;for(let S=0;S<d;S++){let N=m[S],P=u[S],k=g[S],X=y*T*4*S;for(let Y=0;Y<N.count;Y++){let q=Y*D;p===!0&&(a.fromBufferAttribute(N,Y),w[X+q+0]=a.x,w[X+q+1]=a.y,w[X+q+2]=a.z,w[X+q+3]=0),v===!0&&(a.fromBufferAttribute(P,Y),w[X+q+4]=a.x,w[X+q+5]=a.y,w[X+q+6]=a.z,w[X+q+7]=0),x===!0&&(a.fromBufferAttribute(k,Y),w[X+q+8]=a.x,w[X+q+9]=a.y,w[X+q+10]=a.z,w[X+q+11]=k.itemSize===4?a.w:1)}}h={count:d,texture:A,size:new kt(y,T)},i.set(o,h),o.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:s}}function W2(e,t,n,i){let a=new WeakMap;function s(l){let c=i.render.frame,f=l.geometry,d=t.get(l,f);if(a.get(d)!==c&&(t.update(d),a.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;a.get(h)!==c&&(h.update(),a.set(h,c))}return d}function r(){a=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:r}}var VS=new Yn,MS=new nc(1,1),kS=new Jl,GS=new Ch,XS=new tc,ES=[],TS=[],AS=new Float32Array(16),wS=new Float32Array(9),CS=new Float32Array(4);function Oo(e,t,n){let i=e[0];if(i<=0||i>0)return e;let a=t*n,s=ES[a];if(s===void 0&&(s=new Float32Array(a),ES[a]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(s,o)}return s}function Qe(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function je(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function kf(e,t){let n=TS[t];n===void 0&&(n=new Int32Array(t),TS[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function q2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Y2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qe(n,t))return;e.uniform2fv(this.addr,t),je(n,t)}}function Z2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Qe(n,t))return;e.uniform3fv(this.addr,t),je(n,t)}}function K2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qe(n,t))return;e.uniform4fv(this.addr,t),je(n,t)}}function J2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Qe(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),je(n,t)}else{if(Qe(n,i))return;CS.set(i),e.uniformMatrix2fv(this.addr,!1,CS),je(n,i)}}function Q2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Qe(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),je(n,t)}else{if(Qe(n,i))return;wS.set(i),e.uniformMatrix3fv(this.addr,!1,wS),je(n,i)}}function j2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Qe(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),je(n,t)}else{if(Qe(n,i))return;AS.set(i),e.uniformMatrix4fv(this.addr,!1,AS),je(n,i)}}function $2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function tC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qe(n,t))return;e.uniform2iv(this.addr,t),je(n,t)}}function eC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Qe(n,t))return;e.uniform3iv(this.addr,t),je(n,t)}}function nC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qe(n,t))return;e.uniform4iv(this.addr,t),je(n,t)}}function iC(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function aC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qe(n,t))return;e.uniform2uiv(this.addr,t),je(n,t)}}function sC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Qe(n,t))return;e.uniform3uiv(this.addr,t),je(n,t)}}function rC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qe(n,t))return;e.uniform4uiv(this.addr,t),je(n,t)}}function oC(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let s;this.type===e.SAMPLER_2D_SHADOW?(MS.compareFunction=Cg,s=MS):s=VS,n.setTexture2D(t||s,a)}function lC(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||GS,a)}function cC(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||XS,a)}function uC(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||kS,a)}function hC(e){switch(e){case 5126:return q2;case 35664:return Y2;case 35665:return Z2;case 35666:return K2;case 35674:return J2;case 35675:return Q2;case 35676:return j2;case 5124:case 35670:return $2;case 35667:case 35671:return tC;case 35668:case 35672:return eC;case 35669:case 35673:return nC;case 5125:return iC;case 36294:return aC;case 36295:return sC;case 36296:return rC;case 35678:case 36198:case 36298:case 36306:case 35682:return oC;case 35679:case 36299:case 36307:return lC;case 35680:case 36300:case 36308:case 36293:return cC;case 36289:case 36303:case 36311:case 36292:return uC}}function fC(e,t){e.uniform1fv(this.addr,t)}function dC(e,t){let n=Oo(t,this.size,2);e.uniform2fv(this.addr,n)}function pC(e,t){let n=Oo(t,this.size,3);e.uniform3fv(this.addr,n)}function mC(e,t){let n=Oo(t,this.size,4);e.uniform4fv(this.addr,n)}function gC(e,t){let n=Oo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function vC(e,t){let n=Oo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function yC(e,t){let n=Oo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function _C(e,t){e.uniform1iv(this.addr,t)}function xC(e,t){e.uniform2iv(this.addr,t)}function bC(e,t){e.uniform3iv(this.addr,t)}function SC(e,t){e.uniform4iv(this.addr,t)}function MC(e,t){e.uniform1uiv(this.addr,t)}function EC(e,t){e.uniform2uiv(this.addr,t)}function TC(e,t){e.uniform3uiv(this.addr,t)}function AC(e,t){e.uniform4uiv(this.addr,t)}function wC(e,t,n){let i=this.cache,a=t.length,s=kf(n,a);Qe(i,s)||(e.uniform1iv(this.addr,s),je(i,s));for(let r=0;r!==a;++r)n.setTexture2D(t[r]||VS,s[r])}function CC(e,t,n){let i=this.cache,a=t.length,s=kf(n,a);Qe(i,s)||(e.uniform1iv(this.addr,s),je(i,s));for(let r=0;r!==a;++r)n.setTexture3D(t[r]||GS,s[r])}function RC(e,t,n){let i=this.cache,a=t.length,s=kf(n,a);Qe(i,s)||(e.uniform1iv(this.addr,s),je(i,s));for(let r=0;r!==a;++r)n.setTextureCube(t[r]||XS,s[r])}function DC(e,t,n){let i=this.cache,a=t.length,s=kf(n,a);Qe(i,s)||(e.uniform1iv(this.addr,s),je(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(t[r]||kS,s[r])}function UC(e){switch(e){case 5126:return fC;case 35664:return dC;case 35665:return pC;case 35666:return mC;case 35674:return gC;case 35675:return vC;case 35676:return yC;case 5124:case 35670:return _C;case 35667:case 35671:return xC;case 35668:case 35672:return bC;case 35669:case 35673:return SC;case 5125:return MC;case 36294:return EC;case 36295:return TC;case 36296:return AC;case 35678:case 36198:case 36298:case 36306:case 35682:return wC;case 35679:case 36299:case 36307:return CC;case 35680:case 36300:case 36308:case 36293:return RC;case 36289:case 36303:case 36311:case 36292:return DC}}var Gg=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=hC(n.type)}},Xg=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=UC(n.type)}},Wg=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let a=this.seq;for(let s=0,r=a.length;s!==r;++s){let o=a[s];o.setValue(t,n[o.id],i)}}},kg=/(\w+)(\])?(\[|\.)?/g;function RS(e,t){e.seq.push(t),e.map[t.id]=t}function NC(e,t,n){let i=e.name,a=i.length;for(kg.lastIndex=0;;){let s=kg.exec(i),r=kg.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){RS(n,c===void 0?new Gg(o,e,t):new Xg(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new Wg(o),RS(n,d)),n=d}}}var Lo=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let s=t.getActiveUniform(n,a),r=t.getUniformLocation(n,s.name);NC(s,r,this)}}setValue(t,n,i,a){let s=this.map[n];s!==void 0&&s.setValue(t,i,a)}setOptional(t,n,i){let a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let s=0,r=n.length;s!==r;++s){let o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){let i=[];for(let a=0,s=t.length;a!==s;++a){let r=t[a];r.id in n&&i.push(r)}return i}};function DS(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var LC=37297,IC=0;function OC(e,t){let n=e.split(`
`),i=[],a=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let r=a;r<s;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var US=new Wt;function PC(e){re._getMatrix(US,re.workingColorSpace,e);let t=`mat3( ${US.elements.map(n=>n.toFixed(4))} )`;switch(re.getTransfer(e)){case Yl:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function NS(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+OC(e.getShaderSource(t),o)}else return s}function BC(e,t){let n=PC(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function zC(e,t){let n;switch(t){case Zb:n="Linear";break;case Kb:n="Reinhard";break;case Jb:n="Cineon";break;case Qb:n="ACESFilmic";break;case $b:n="AgX";break;case tS:n="Neutral";break;case jb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Hf=new L;function FC(){re.getLuminanceCoefficients(Hf);let e=Hf.x.toFixed(4),t=Hf.y.toFixed(4),n=Hf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HC(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gc).join(`
`)}function VC(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function kC(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){let s=e.getActiveAttrib(t,a),r=s.name,o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function gc(e){return e!==""}function LS(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function IS(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var GC=/^[ \t]*#include +<([\w\d./]+)>/gm;function qg(e){return e.replace(GC,WC)}var XC=new Map;function WC(e,t){let n=Zt[t];if(n===void 0){let i=XC.get(t);if(i!==void 0)n=Zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return qg(n)}var qC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function OS(e){return e.replace(qC,YC)}function YC(e,t,n,i){let a="";for(let s=parseInt(t);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function PS(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ZC(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===dg?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===wb?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Bi&&(t="SHADOWMAP_TYPE_VSM"),t}function KC(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case $s:case tr:t="ENVMAP_TYPE_CUBE";break;case uc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function JC(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===tr&&(t="ENVMAP_MODE_REFRACTION"),t}function QC(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case vg:t="ENVMAP_BLENDING_MULTIPLY";break;case qb:t="ENVMAP_BLENDING_MIX";break;case Yb:t="ENVMAP_BLENDING_ADD";break}return t}function jC(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function $C(e,t,n,i){let a=e.getContext(),s=n.defines,r=n.vertexShader,o=n.fragmentShader,l=ZC(n),c=KC(n),f=JC(n),d=QC(n),h=jC(n),p=HC(n),v=VC(s),x=a.createProgram(),m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(gc).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(gc).join(`
`),u.length>0&&(u+=`
`)):(m=[PS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gc).join(`
`),u=[PS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ya?"#define TONE_MAPPING":"",n.toneMapping!==ya?Zt.tonemapping_pars_fragment:"",n.toneMapping!==ya?zC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,BC("linearToOutputTexel",n.outputColorSpace),FC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(gc).join(`
`)),r=qg(r),r=LS(r,n),r=IS(r,n),o=qg(o),o=LS(o,n),o=IS(o,n),r=OS(r),o=OS(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Rg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Rg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let _=g+m+r,y=g+u+o,T=DS(a,a.VERTEX_SHADER,_),w=DS(a,a.FRAGMENT_SHADER,y);a.attachShader(x,T),a.attachShader(x,w),n.index0AttributeName!==void 0?a.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function A(N){if(e.debug.checkShaderErrors){let P=a.getProgramInfoLog(x)||"",k=a.getShaderInfoLog(T)||"",X=a.getShaderInfoLog(w)||"",Y=P.trim(),q=k.trim(),at=X.trim(),G=!0,lt=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(G=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,x,T,w);else{let dt=NS(a,T,"vertex"),Et=NS(a,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+Y+`
`+dt+`
`+Et)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(q===""||at==="")&&(lt=!1);lt&&(N.diagnostics={runnable:G,programLog:Y,vertexShader:{log:q,prefix:m},fragmentShader:{log:at,prefix:u}})}a.deleteShader(T),a.deleteShader(w),D=new Lo(a,x),M=kC(a,x)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=a.getProgramParameter(x,LC)),S},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=IC++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=w,this}var tR=0,Yg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new Zg(t),n.set(t,i)),i}},Zg=class{constructor(t){this.id=tR++,this.code=t,this.usedTimes=0}};function eR(e,t,n,i,a,s,r){let o=new xo,l=new Yg,c=new Set,f=[],d=a.logarithmicDepthBuffer,h=a.vertexTextures,p=a.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,S,N,P,k){let X=P.fog,Y=k.geometry,q=M.isMeshStandardMaterial?P.environment:null,at=(M.isMeshStandardMaterial?n:t).get(M.envMap||q),G=at&&at.mapping===uc?at.image.height:null,lt=v[M.type];M.precision!==null&&(p=a.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let dt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Et=dt!==void 0?dt.length:0,Ft=0;Y.morphAttributes.position!==void 0&&(Ft=1),Y.morphAttributes.normal!==void 0&&(Ft=2),Y.morphAttributes.color!==void 0&&(Ft=3);let ee,se,Yt,J;if(lt){let ue=Fi[lt];ee=ue.vertexShader,se=ue.fragmentShader}else ee=M.vertexShader,se=M.fragmentShader,l.update(M),Yt=l.getVertexShaderID(M),J=l.getFragmentShaderID(M);let tt=e.getRenderTarget(),_t=e.state.buffers.depth.getReversed(),Ut=k.isInstancedMesh===!0,bt=k.isBatchedMesh===!0,Gt=!!M.map,Ie=!!M.matcap,U=!!at,F=!!M.aoMap,W=!!M.lightMap,ct=!!M.bumpMap,K=!!M.normalMap,pt=!!M.displacementMap,ot=!!M.emissiveMap,yt=!!M.metalnessMap,Kt=!!M.roughnessMap,jt=M.anisotropy>0,C=M.clearcoat>0,b=M.dispersion>0,z=M.iridescence>0,Q=M.sheen>0,et=M.transmission>0,Z=jt&&!!M.anisotropyMap,Rt=C&&!!M.clearcoatMap,ut=C&&!!M.clearcoatNormalMap,At=C&&!!M.clearcoatRoughnessMap,wt=z&&!!M.iridescenceMap,st=z&&!!M.iridescenceThicknessMap,vt=Q&&!!M.sheenColorMap,Ot=Q&&!!M.sheenRoughnessMap,Ct=!!M.specularMap,mt=!!M.specularColorMap,qt=!!M.specularIntensityMap,I=et&&!!M.transmissionMap,rt=et&&!!M.thicknessMap,ht=!!M.gradientMap,St=!!M.alphaMap,nt=M.alphaTest>0,$=!!M.alphaHash,Tt=!!M.extensions,Ht=ya;M.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Ht=e.toneMapping);let be={shaderID:lt,shaderType:M.type,shaderName:M.name,vertexShader:ee,fragmentShader:se,defines:M.defines,customVertexShaderID:Yt,customFragmentShaderID:J,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:bt,batchingColor:bt&&k._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&k.instanceColor!==null,instancingMorph:Ut&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:tt===null?e.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:ks,alphaToCoverage:!!M.alphaToCoverage,map:Gt,matcap:Ie,envMap:U,envMapMode:U&&at.mapping,envMapCubeUVHeight:G,aoMap:F,lightMap:W,bumpMap:ct,normalMap:K,displacementMap:h&&pt,emissiveMap:ot,normalMapObjectSpace:K&&M.normalMapType===aS,normalMapTangentSpace:K&&M.normalMapType===wg,metalnessMap:yt,roughnessMap:Kt,anisotropy:jt,anisotropyMap:Z,clearcoat:C,clearcoatMap:Rt,clearcoatNormalMap:ut,clearcoatRoughnessMap:At,dispersion:b,iridescence:z,iridescenceMap:wt,iridescenceThicknessMap:st,sheen:Q,sheenColorMap:vt,sheenRoughnessMap:Ot,specularMap:Ct,specularColorMap:mt,specularIntensityMap:qt,transmission:et,transmissionMap:I,thicknessMap:rt,gradientMap:ht,opaque:M.transparent===!1&&M.blending===Hs&&M.alphaToCoverage===!1,alphaMap:St,alphaTest:nt,alphaHash:$,combine:M.combine,mapUv:Gt&&x(M.map.channel),aoMapUv:F&&x(M.aoMap.channel),lightMapUv:W&&x(M.lightMap.channel),bumpMapUv:ct&&x(M.bumpMap.channel),normalMapUv:K&&x(M.normalMap.channel),displacementMapUv:pt&&x(M.displacementMap.channel),emissiveMapUv:ot&&x(M.emissiveMap.channel),metalnessMapUv:yt&&x(M.metalnessMap.channel),roughnessMapUv:Kt&&x(M.roughnessMap.channel),anisotropyMapUv:Z&&x(M.anisotropyMap.channel),clearcoatMapUv:Rt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ut&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:st&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&x(M.sheenRoughnessMap.channel),specularMapUv:Ct&&x(M.specularMap.channel),specularColorMapUv:mt&&x(M.specularColorMap.channel),specularIntensityMapUv:qt&&x(M.specularIntensityMap.channel),transmissionMapUv:I&&x(M.transmissionMap.channel),thicknessMapUv:rt&&x(M.thicknessMap.channel),alphaMapUv:St&&x(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(K||jt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Y.attributes.uv&&(Gt||St),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_t,skinning:k.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Ft,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:e.shadowMap.enabled&&N.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Gt&&M.map.isVideoTexture===!0&&re.getTransfer(M.map.colorSpace)===pe,decodeVideoTextureEmissive:ot&&M.emissiveMap.isVideoTexture===!0&&re.getTransfer(M.emissiveMap.colorSpace)===pe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ui,flipSided:M.side===Mn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Tt&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&M.extensions.multiDraw===!0||bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return be.vertexUv1s=c.has(1),be.vertexUv2s=c.has(2),be.vertexUv3s=c.has(3),c.clear(),be}function u(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let N in M.defines)S.push(N),S.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(g(S,M),_(S,M),S.push(e.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function g(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function _(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function y(M){let S=v[M.type],N;if(S){let P=Fi[S];N=mS.clone(P.uniforms)}else N=M.uniforms;return N}function T(M,S){let N;for(let P=0,k=f.length;P<k;P++){let X=f[P];if(X.cacheKey===S){N=X,++N.usedTimes;break}}return N===void 0&&(N=new $C(e,S,M,s),f.push(N)),N}function w(M){if(--M.usedTimes===0){let S=f.indexOf(M);f[S]=f[f.length-1],f.pop(),M.destroy()}}function A(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:T,releaseProgram:w,releaseShaderCache:A,programs:f,dispose:D}}function nR(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function a(r,o,l){e.get(r)[o]=l}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:s}}function iR(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function BS(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function zS(){let e=[],t=0,n=[],i=[],a=[];function s(){t=0,n.length=0,i.length=0,a.length=0}function r(d,h,p,v,x,m){let u=e[t];return u===void 0?(u={id:d.id,object:d,geometry:h,material:p,groupOrder:v,renderOrder:d.renderOrder,z:x,group:m},e[t]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=p,u.groupOrder=v,u.renderOrder=d.renderOrder,u.z=x,u.group=m),t++,u}function o(d,h,p,v,x,m){let u=r(d,h,p,v,x,m);p.transmission>0?i.push(u):p.transparent===!0?a.push(u):n.push(u)}function l(d,h,p,v,x,m){let u=r(d,h,p,v,x,m);p.transmission>0?i.unshift(u):p.transparent===!0?a.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||iR),i.length>1&&i.sort(h||BS),a.length>1&&a.sort(h||BS)}function f(){for(let d=t,h=e.length;d<h;d++){let p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:o,unshift:l,finish:f,sort:c}}function aR(){let e=new WeakMap;function t(i,a){let s=e.get(i),r;return s===void 0?(r=new zS,e.set(i,[r])):a>=s.length?(r=new zS,s.push(r)):r=s[a],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function sR(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new L,color:new Qt};break;case"SpotLight":n={position:new L,direction:new L,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new L,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new L,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":n={color:new Qt,position:new L,halfWidth:new L,halfHeight:new L};break}return e[t.id]=n,n}}}function rR(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var oR=0;function lR(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function cR(e){let t=new sR,n=rR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let a=new L,s=new Me,r=new Me;function o(c){let f=0,d=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,v=0,x=0,m=0,u=0,g=0,_=0,y=0,T=0,w=0,A=0;c.sort(lR);for(let M=0,S=c.length;M<S;M++){let N=c[M],P=N.color,k=N.intensity,X=N.distance,Y=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=P.r*k,d+=P.g*k,h+=P.b*k;else if(N.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(N.sh.coefficients[q],k);A++}else if(N.isDirectionalLight){let q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let at=N.shadow,G=n.get(N);G.shadowIntensity=at.intensity,G.shadowBias=at.bias,G.shadowNormalBias=at.normalBias,G.shadowRadius=at.radius,G.shadowMapSize=at.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=N.shadow.matrix,g++}i.directional[p]=q,p++}else if(N.isSpotLight){let q=t.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(P).multiplyScalar(k),q.distance=X,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,i.spot[x]=q;let at=N.shadow;if(N.map&&(i.spotLightMap[T]=N.map,T++,at.updateMatrices(N),N.castShadow&&w++),i.spotLightMatrix[x]=at.matrix,N.castShadow){let G=n.get(N);G.shadowIntensity=at.intensity,G.shadowBias=at.bias,G.shadowNormalBias=at.normalBias,G.shadowRadius=at.radius,G.shadowMapSize=at.mapSize,i.spotShadow[x]=G,i.spotShadowMap[x]=Y,y++}x++}else if(N.isRectAreaLight){let q=t.get(N);q.color.copy(P).multiplyScalar(k),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=q,m++}else if(N.isPointLight){let q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),q.distance=N.distance,q.decay=N.decay,N.castShadow){let at=N.shadow,G=n.get(N);G.shadowIntensity=at.intensity,G.shadowBias=at.bias,G.shadowNormalBias=at.normalBias,G.shadowRadius=at.radius,G.shadowMapSize=at.mapSize,G.shadowCameraNear=at.camera.near,G.shadowCameraFar=at.camera.far,i.pointShadow[v]=G,i.pointShadowMap[v]=Y,i.pointShadowMatrix[v]=N.shadow.matrix,_++}i.point[v]=q,v++}else if(N.isHemisphereLight){let q=t.get(N);q.skyColor.copy(N.color).multiplyScalar(k),q.groundColor.copy(N.groundColor).multiplyScalar(k),i.hemi[u]=q,u++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;let D=i.hash;(D.directionalLength!==p||D.pointLength!==v||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==u||D.numDirectionalShadows!==g||D.numPointShadows!==_||D.numSpotShadows!==y||D.numSpotMaps!==T||D.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+T-w,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,D.directionalLength=p,D.pointLength=v,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=u,D.numDirectionalShadows=g,D.numPointShadows=_,D.numSpotShadows=y,D.numSpotMaps=T,D.numLightProbes=A,i.version=oR++)}function l(c,f){let d=0,h=0,p=0,v=0,x=0,m=f.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){let _=c[u];if(_.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(m),d++}else if(_.isSpotLight){let y=i.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let y=i.rectArea[v];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),r.identity(),s.copy(_.matrixWorld),s.premultiply(m),r.extractRotation(s),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),v++}else if(_.isPointLight){let y=i.point[h];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function FS(e){let t=new cR(e),n=[],i=[];function a(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function r(f){i.push(f)}function o(){t.setup(n)}function l(f){t.setupView(n,f)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:r}}function uR(e){let t=new WeakMap;function n(a,s=0){let r=t.get(a),o;return r===void 0?(o=new FS(e),t.set(a,[o])):s>=r.length?(o=new FS(e),r.push(o)):o=r[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var hR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fR=`uniform sampler2D shadow_pass;
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
}`;function dR(e,t,n){let i=new So,a=new kt,s=new kt,r=new de,o=new Ih({depthPacking:iS}),l=new Oh,c={},f=n.maxTextureSize,d={[da]:Mn,[Mn]:da,[ui]:ui},h=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:hR,fragmentShader:fR}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let v=new qe;v.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Lt(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dg;let u=this.type;this.render=function(w,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let M=e.getRenderTarget(),S=e.getActiveCubeFace(),N=e.getActiveMipmapLevel(),P=e.state;P.setBlending(va),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let k=u!==Bi&&this.type===Bi,X=u===Bi&&this.type!==Bi;for(let Y=0,q=w.length;Y<q;Y++){let at=w[Y],G=at.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);let lt=G.getFrameExtents();if(a.multiply(lt),s.copy(G.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/lt.x),a.x=s.x*lt.x,G.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/lt.y),a.y=s.y*lt.y,G.mapSize.y=s.y)),G.map===null||k===!0||X===!0){let Et=this.type!==Bi?{minFilter:ci,magFilter:ci}:{};G.map!==null&&G.map.dispose(),G.map=new Ii(a.x,a.y,Et),G.map.texture.name=at.name+".shadowMap",G.camera.updateProjectionMatrix()}e.setRenderTarget(G.map),e.clear();let dt=G.getViewportCount();for(let Et=0;Et<dt;Et++){let Ft=G.getViewport(Et);r.set(s.x*Ft.x,s.y*Ft.y,s.x*Ft.z,s.y*Ft.w),P.viewport(r),G.updateMatrices(at,Et),i=G.getFrustum(),y(A,D,G.camera,at,this.type)}G.isPointLightShadow!==!0&&this.type===Bi&&g(G,D),G.needsUpdate=!1}u=this.type,m.needsUpdate=!1,e.setRenderTarget(M,S,N)};function g(w,A){let D=t.update(x);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ii(a.x,a.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(A,null,D,h,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(A,null,D,p,x,null)}function _(w,A,D,M){let S=null,N=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)S=N;else if(S=D.isPointLight===!0?l:o,e.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let P=S.uuid,k=A.uuid,X=c[P];X===void 0&&(X={},c[P]=X);let Y=X[k];Y===void 0&&(Y=S.clone(),X[k]=Y,A.addEventListener("dispose",T)),S=Y}if(S.visible=A.visible,S.wireframe=A.wireframe,M===Bi?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:d[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let P=e.properties.get(S);P.light=D}return S}function y(w,A,D,M,S){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Bi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);let k=t.update(w),X=w.material;if(Array.isArray(X)){let Y=k.groups;for(let q=0,at=Y.length;q<at;q++){let G=Y[q],lt=X[G.materialIndex];if(lt&&lt.visible){let dt=_(w,lt,M,S);w.onBeforeShadow(e,w,A,D,k,dt,G),e.renderBufferDirect(D,null,k,dt,w,G),w.onAfterShadow(e,w,A,D,k,dt,G)}}}else if(X.visible){let Y=_(w,X,M,S);w.onBeforeShadow(e,w,A,D,k,Y,null),e.renderBufferDirect(D,null,k,Y,w,null),w.onAfterShadow(e,w,A,D,k,Y,null)}}let P=w.children;for(let k=0,X=P.length;k<X;k++)y(P[k],A,D,M,S)}function T(w){w.target.removeEventListener("dispose",T);for(let D in c){let M=c[D],S=w.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}var pR={[Yh]:Zh,[Kh]:jh,[Jh]:$h,[Vs]:Qh,[Zh]:Yh,[jh]:Kh,[$h]:Jh,[Qh]:Vs};function mR(e,t){function n(){let I=!1,rt=new de,ht=null,St=new de(0,0,0,0);return{setMask:function(nt){ht!==nt&&!I&&(e.colorMask(nt,nt,nt,nt),ht=nt)},setLocked:function(nt){I=nt},setClear:function(nt,$,Tt,Ht,be){be===!0&&(nt*=Ht,$*=Ht,Tt*=Ht),rt.set(nt,$,Tt,Ht),St.equals(rt)===!1&&(e.clearColor(nt,$,Tt,Ht),St.copy(rt))},reset:function(){I=!1,ht=null,St.set(-1,0,0,0)}}}function i(){let I=!1,rt=!1,ht=null,St=null,nt=null;return{setReversed:function($){if(rt!==$){let Tt=t.get("EXT_clip_control");$?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),rt=$;let Ht=nt;nt=null,this.setClear(Ht)}},getReversed:function(){return rt},setTest:function($){$?tt(e.DEPTH_TEST):_t(e.DEPTH_TEST)},setMask:function($){ht!==$&&!I&&(e.depthMask($),ht=$)},setFunc:function($){if(rt&&($=pR[$]),St!==$){switch($){case Yh:e.depthFunc(e.NEVER);break;case Zh:e.depthFunc(e.ALWAYS);break;case Kh:e.depthFunc(e.LESS);break;case Vs:e.depthFunc(e.LEQUAL);break;case Jh:e.depthFunc(e.EQUAL);break;case Qh:e.depthFunc(e.GEQUAL);break;case jh:e.depthFunc(e.GREATER);break;case $h:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}St=$}},setLocked:function($){I=$},setClear:function($){nt!==$&&(rt&&($=1-$),e.clearDepth($),nt=$)},reset:function(){I=!1,ht=null,St=null,nt=null,rt=!1}}}function a(){let I=!1,rt=null,ht=null,St=null,nt=null,$=null,Tt=null,Ht=null,be=null;return{setTest:function(ue){I||(ue?tt(e.STENCIL_TEST):_t(e.STENCIL_TEST))},setMask:function(ue){rt!==ue&&!I&&(e.stencilMask(ue),rt=ue)},setFunc:function(ue,Hi,Ti){(ht!==ue||St!==Hi||nt!==Ti)&&(e.stencilFunc(ue,Hi,Ti),ht=ue,St=Hi,nt=Ti)},setOp:function(ue,Hi,Ti){($!==ue||Tt!==Hi||Ht!==Ti)&&(e.stencilOp(ue,Hi,Ti),$=ue,Tt=Hi,Ht=Ti)},setLocked:function(ue){I=ue},setClear:function(ue){be!==ue&&(e.clearStencil(ue),be=ue)},reset:function(){I=!1,rt=null,ht=null,St=null,nt=null,$=null,Tt=null,Ht=null,be=null}}}let s=new n,r=new i,o=new a,l=new WeakMap,c=new WeakMap,f={},d={},h=new WeakMap,p=[],v=null,x=!1,m=null,u=null,g=null,_=null,y=null,T=null,w=null,A=new Qt(0,0,0),D=0,M=!1,S=null,N=null,P=null,k=null,X=null,Y=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,at=0,G=e.getParameter(e.VERSION);G.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(G)[1]),q=at>=1):G.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),q=at>=2);let lt=null,dt={},Et=e.getParameter(e.SCISSOR_BOX),Ft=e.getParameter(e.VIEWPORT),ee=new de().fromArray(Et),se=new de().fromArray(Ft);function Yt(I,rt,ht,St){let nt=new Uint8Array(4),$=e.createTexture();e.bindTexture(I,$),e.texParameteri(I,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(I,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Tt=0;Tt<ht;Tt++)I===e.TEXTURE_3D||I===e.TEXTURE_2D_ARRAY?e.texImage3D(rt,0,e.RGBA,1,1,St,0,e.RGBA,e.UNSIGNED_BYTE,nt):e.texImage2D(rt+Tt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,nt);return $}let J={};J[e.TEXTURE_2D]=Yt(e.TEXTURE_2D,e.TEXTURE_2D,1),J[e.TEXTURE_CUBE_MAP]=Yt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[e.TEXTURE_2D_ARRAY]=Yt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),J[e.TEXTURE_3D]=Yt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),tt(e.DEPTH_TEST),r.setFunc(Vs),ct(!1),K(fg),tt(e.CULL_FACE),F(va);function tt(I){f[I]!==!0&&(e.enable(I),f[I]=!0)}function _t(I){f[I]!==!1&&(e.disable(I),f[I]=!1)}function Ut(I,rt){return d[I]!==rt?(e.bindFramebuffer(I,rt),d[I]=rt,I===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=rt),I===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=rt),!0):!1}function bt(I,rt){let ht=p,St=!1;if(I){ht=h.get(rt),ht===void 0&&(ht=[],h.set(rt,ht));let nt=I.textures;if(ht.length!==nt.length||ht[0]!==e.COLOR_ATTACHMENT0){for(let $=0,Tt=nt.length;$<Tt;$++)ht[$]=e.COLOR_ATTACHMENT0+$;ht.length=nt.length,St=!0}}else ht[0]!==e.BACK&&(ht[0]=e.BACK,St=!0);St&&e.drawBuffers(ht)}function Gt(I){return v!==I?(e.useProgram(I),v=I,!0):!1}let Ie={[is]:e.FUNC_ADD,[Rb]:e.FUNC_SUBTRACT,[Db]:e.FUNC_REVERSE_SUBTRACT};Ie[Ub]=e.MIN,Ie[Nb]=e.MAX;let U={[Lb]:e.ZERO,[Ib]:e.ONE,[Ob]:e.SRC_COLOR,[bh]:e.SRC_ALPHA,[Vb]:e.SRC_ALPHA_SATURATE,[Fb]:e.DST_COLOR,[Bb]:e.DST_ALPHA,[Pb]:e.ONE_MINUS_SRC_COLOR,[Sh]:e.ONE_MINUS_SRC_ALPHA,[Hb]:e.ONE_MINUS_DST_COLOR,[zb]:e.ONE_MINUS_DST_ALPHA,[kb]:e.CONSTANT_COLOR,[Gb]:e.ONE_MINUS_CONSTANT_COLOR,[Xb]:e.CONSTANT_ALPHA,[Wb]:e.ONE_MINUS_CONSTANT_ALPHA};function F(I,rt,ht,St,nt,$,Tt,Ht,be,ue){if(I===va){x===!0&&(_t(e.BLEND),x=!1);return}if(x===!1&&(tt(e.BLEND),x=!0),I!==Cb){if(I!==m||ue!==M){if((u!==is||y!==is)&&(e.blendEquation(e.FUNC_ADD),u=is,y=is),ue)switch(I){case Hs:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case pg:e.blendFunc(e.ONE,e.ONE);break;case mg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case gg:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Hs:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case pg:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case mg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}g=null,_=null,T=null,w=null,A.set(0,0,0),D=0,m=I,M=ue}return}nt=nt||rt,$=$||ht,Tt=Tt||St,(rt!==u||nt!==y)&&(e.blendEquationSeparate(Ie[rt],Ie[nt]),u=rt,y=nt),(ht!==g||St!==_||$!==T||Tt!==w)&&(e.blendFuncSeparate(U[ht],U[St],U[$],U[Tt]),g=ht,_=St,T=$,w=Tt),(Ht.equals(A)===!1||be!==D)&&(e.blendColor(Ht.r,Ht.g,Ht.b,be),A.copy(Ht),D=be),m=I,M=!1}function W(I,rt){I.side===ui?_t(e.CULL_FACE):tt(e.CULL_FACE);let ht=I.side===Mn;rt&&(ht=!ht),ct(ht),I.blending===Hs&&I.transparent===!1?F(va):F(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),s.setMask(I.colorWrite);let St=I.stencilWrite;o.setTest(St),St&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ot(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?tt(e.SAMPLE_ALPHA_TO_COVERAGE):_t(e.SAMPLE_ALPHA_TO_COVERAGE)}function ct(I){S!==I&&(I?e.frontFace(e.CW):e.frontFace(e.CCW),S=I)}function K(I){I!==Tb?(tt(e.CULL_FACE),I!==N&&(I===fg?e.cullFace(e.BACK):I===Ab?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):_t(e.CULL_FACE),N=I}function pt(I){I!==P&&(q&&e.lineWidth(I),P=I)}function ot(I,rt,ht){I?(tt(e.POLYGON_OFFSET_FILL),(k!==rt||X!==ht)&&(e.polygonOffset(rt,ht),k=rt,X=ht)):_t(e.POLYGON_OFFSET_FILL)}function yt(I){I?tt(e.SCISSOR_TEST):_t(e.SCISSOR_TEST)}function Kt(I){I===void 0&&(I=e.TEXTURE0+Y-1),lt!==I&&(e.activeTexture(I),lt=I)}function jt(I,rt,ht){ht===void 0&&(lt===null?ht=e.TEXTURE0+Y-1:ht=lt);let St=dt[ht];St===void 0&&(St={type:void 0,texture:void 0},dt[ht]=St),(St.type!==I||St.texture!==rt)&&(lt!==ht&&(e.activeTexture(ht),lt=ht),e.bindTexture(I,rt||J[I]),St.type=I,St.texture=rt)}function C(){let I=dt[lt];I!==void 0&&I.type!==void 0&&(e.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function b(){try{e.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function z(){try{e.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{e.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{e.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{e.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(){try{e.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(){try{e.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{e.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function wt(){try{e.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{e.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(I){ee.equals(I)===!1&&(e.scissor(I.x,I.y,I.z,I.w),ee.copy(I))}function Ot(I){se.equals(I)===!1&&(e.viewport(I.x,I.y,I.z,I.w),se.copy(I))}function Ct(I,rt){let ht=c.get(rt);ht===void 0&&(ht=new WeakMap,c.set(rt,ht));let St=ht.get(I);St===void 0&&(St=e.getUniformBlockIndex(rt,I.name),ht.set(I,St))}function mt(I,rt){let St=c.get(rt).get(I);l.get(rt)!==St&&(e.uniformBlockBinding(rt,St,I.__bindingPointIndex),l.set(rt,St))}function qt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),f={},lt=null,dt={},d={},h=new WeakMap,p=[],v=null,x=!1,m=null,u=null,g=null,_=null,y=null,T=null,w=null,A=new Qt(0,0,0),D=0,M=!1,S=null,N=null,P=null,k=null,X=null,ee.set(0,0,e.canvas.width,e.canvas.height),se.set(0,0,e.canvas.width,e.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:tt,disable:_t,bindFramebuffer:Ut,drawBuffers:bt,useProgram:Gt,setBlending:F,setMaterial:W,setFlipSided:ct,setCullFace:K,setLineWidth:pt,setPolygonOffset:ot,setScissorTest:yt,activeTexture:Kt,bindTexture:jt,unbindTexture:C,compressedTexImage2D:b,compressedTexImage3D:z,texImage2D:wt,texImage3D:st,updateUBOMapping:Ct,uniformBlockBinding:mt,texStorage2D:ut,texStorage3D:At,texSubImage2D:Q,texSubImage3D:et,compressedTexSubImage2D:Z,compressedTexSubImage3D:Rt,scissor:vt,viewport:Ot,reset:qt}}function gR(e,t,n,i,a,s,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new kt,f=new WeakMap,d,h=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,b){return p?new OffscreenCanvas(C,b):Kl("canvas")}function x(C,b,z){let Q=1,et=jt(C);if((et.width>z||et.height>z)&&(Q=z/Math.max(et.width,et.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Z=Math.floor(Q*et.width),Rt=Math.floor(Q*et.height);d===void 0&&(d=v(Z,Rt));let ut=b?v(Z,Rt):d;return ut.width=Z,ut.height=Rt,ut.getContext("2d").drawImage(C,0,0,Z,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Z+"x"+Rt+")."),ut}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),C;return C}function m(C){return C.generateMipmaps}function u(C){e.generateMipmap(C)}function g(C){return C.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?e.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function _(C,b,z,Q,et=!1){if(C!==null){if(e[C]!==void 0)return e[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=b;if(b===e.RED&&(z===e.FLOAT&&(Z=e.R32F),z===e.HALF_FLOAT&&(Z=e.R16F),z===e.UNSIGNED_BYTE&&(Z=e.R8)),b===e.RED_INTEGER&&(z===e.UNSIGNED_BYTE&&(Z=e.R8UI),z===e.UNSIGNED_SHORT&&(Z=e.R16UI),z===e.UNSIGNED_INT&&(Z=e.R32UI),z===e.BYTE&&(Z=e.R8I),z===e.SHORT&&(Z=e.R16I),z===e.INT&&(Z=e.R32I)),b===e.RG&&(z===e.FLOAT&&(Z=e.RG32F),z===e.HALF_FLOAT&&(Z=e.RG16F),z===e.UNSIGNED_BYTE&&(Z=e.RG8)),b===e.RG_INTEGER&&(z===e.UNSIGNED_BYTE&&(Z=e.RG8UI),z===e.UNSIGNED_SHORT&&(Z=e.RG16UI),z===e.UNSIGNED_INT&&(Z=e.RG32UI),z===e.BYTE&&(Z=e.RG8I),z===e.SHORT&&(Z=e.RG16I),z===e.INT&&(Z=e.RG32I)),b===e.RGB_INTEGER&&(z===e.UNSIGNED_BYTE&&(Z=e.RGB8UI),z===e.UNSIGNED_SHORT&&(Z=e.RGB16UI),z===e.UNSIGNED_INT&&(Z=e.RGB32UI),z===e.BYTE&&(Z=e.RGB8I),z===e.SHORT&&(Z=e.RGB16I),z===e.INT&&(Z=e.RGB32I)),b===e.RGBA_INTEGER&&(z===e.UNSIGNED_BYTE&&(Z=e.RGBA8UI),z===e.UNSIGNED_SHORT&&(Z=e.RGBA16UI),z===e.UNSIGNED_INT&&(Z=e.RGBA32UI),z===e.BYTE&&(Z=e.RGBA8I),z===e.SHORT&&(Z=e.RGBA16I),z===e.INT&&(Z=e.RGBA32I)),b===e.RGB&&(z===e.UNSIGNED_INT_5_9_9_9_REV&&(Z=e.RGB9_E5),z===e.UNSIGNED_INT_10F_11F_11F_REV&&(Z=e.R11F_G11F_B10F)),b===e.RGBA){let Rt=et?Yl:re.getTransfer(Q);z===e.FLOAT&&(Z=e.RGBA32F),z===e.HALF_FLOAT&&(Z=e.RGBA16F),z===e.UNSIGNED_BYTE&&(Z=Rt===pe?e.SRGB8_ALPHA8:e.RGBA8),z===e.UNSIGNED_SHORT_4_4_4_4&&(Z=e.RGBA4),z===e.UNSIGNED_SHORT_5_5_5_1&&(Z=e.RGB5_A1)}return(Z===e.R16F||Z===e.R32F||Z===e.RG16F||Z===e.RG32F||Z===e.RGBA16F||Z===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function y(C,b){let z;return C?b===null||b===hs||b===Co?z=e.DEPTH24_STENCIL8:b===zi?z=e.DEPTH32F_STENCIL8:b===Ao&&(z=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===hs||b===Co?z=e.DEPTH_COMPONENT24:b===zi?z=e.DEPTH_COMPONENT32F:b===Ao&&(z=e.DEPTH_COMPONENT16),z}function T(C,b){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==ci&&C.minFilter!==_i?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function w(C){let b=C.target;b.removeEventListener("dispose",w),D(b),b.isVideoTexture&&f.delete(b)}function A(C){let b=C.target;b.removeEventListener("dispose",A),S(b)}function D(C){let b=i.get(C);if(b.__webglInit===void 0)return;let z=C.source,Q=h.get(z);if(Q){let et=Q[b.__cacheKey];et.usedTimes--,et.usedTimes===0&&M(C),Object.keys(Q).length===0&&h.delete(z)}i.remove(C)}function M(C){let b=i.get(C);e.deleteTexture(b.__webglTexture);let z=C.source,Q=h.get(z);delete Q[b.__cacheKey],r.memory.textures--}function S(C){let b=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(b.__webglFramebuffer[Q]))for(let et=0;et<b.__webglFramebuffer[Q].length;et++)e.deleteFramebuffer(b.__webglFramebuffer[Q][et]);else e.deleteFramebuffer(b.__webglFramebuffer[Q]);b.__webglDepthbuffer&&e.deleteRenderbuffer(b.__webglDepthbuffer[Q])}else{if(Array.isArray(b.__webglFramebuffer))for(let Q=0;Q<b.__webglFramebuffer.length;Q++)e.deleteFramebuffer(b.__webglFramebuffer[Q]);else e.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&e.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&e.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Q=0;Q<b.__webglColorRenderbuffer.length;Q++)b.__webglColorRenderbuffer[Q]&&e.deleteRenderbuffer(b.__webglColorRenderbuffer[Q]);b.__webglDepthRenderbuffer&&e.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let z=C.textures;for(let Q=0,et=z.length;Q<et;Q++){let Z=i.get(z[Q]);Z.__webglTexture&&(e.deleteTexture(Z.__webglTexture),r.memory.textures--),i.remove(z[Q])}i.remove(C)}let N=0;function P(){N=0}function k(){let C=N;return C>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+a.maxTextures),N+=1,C}function X(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function Y(C,b){let z=i.get(C);if(C.isVideoTexture&&yt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){let Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(z,C,b);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,z.__webglTexture,e.TEXTURE0+b)}function q(C,b){let z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){J(z,C,b);return}n.bindTexture(e.TEXTURE_2D_ARRAY,z.__webglTexture,e.TEXTURE0+b)}function at(C,b){let z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){J(z,C,b);return}n.bindTexture(e.TEXTURE_3D,z.__webglTexture,e.TEXTURE0+b)}function G(C,b){let z=i.get(C);if(C.version>0&&z.__version!==C.version){tt(z,C,b);return}n.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture,e.TEXTURE0+b)}let lt={[Mh]:e.REPEAT,[ns]:e.CLAMP_TO_EDGE,[Eh]:e.MIRRORED_REPEAT},dt={[ci]:e.NEAREST,[eS]:e.NEAREST_MIPMAP_NEAREST,[hc]:e.NEAREST_MIPMAP_LINEAR,[_i]:e.LINEAR,[nf]:e.LINEAR_MIPMAP_NEAREST,[us]:e.LINEAR_MIPMAP_LINEAR},Et={[sS]:e.NEVER,[hS]:e.ALWAYS,[rS]:e.LESS,[Cg]:e.LEQUAL,[oS]:e.EQUAL,[uS]:e.GEQUAL,[lS]:e.GREATER,[cS]:e.NOTEQUAL};function Ft(C,b){if(b.type===zi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===_i||b.magFilter===nf||b.magFilter===hc||b.magFilter===us||b.minFilter===_i||b.minFilter===nf||b.minFilter===hc||b.minFilter===us)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(C,e.TEXTURE_WRAP_S,lt[b.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,lt[b.wrapT]),(C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)&&e.texParameteri(C,e.TEXTURE_WRAP_R,lt[b.wrapR]),e.texParameteri(C,e.TEXTURE_MAG_FILTER,dt[b.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,dt[b.minFilter]),b.compareFunction&&(e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,Et[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ci||b.minFilter!==hc&&b.minFilter!==us||b.type===zi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,a.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function ee(C,b){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",w));let Q=b.source,et=h.get(Q);et===void 0&&(et={},h.set(Q,et));let Z=X(b);if(Z!==C.__cacheKey){et[Z]===void 0&&(et[Z]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,z=!0),et[Z].usedTimes++;let Rt=et[C.__cacheKey];Rt!==void 0&&(et[C.__cacheKey].usedTimes--,Rt.usedTimes===0&&M(b)),C.__cacheKey=Z,C.__webglTexture=et[Z].texture}return z}function se(C,b,z){return Math.floor(Math.floor(C/z)/b)}function Yt(C,b,z,Q){let Z=C.updateRanges;if(Z.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,b.width,b.height,z,Q,b.data);else{Z.sort((st,vt)=>st.start-vt.start);let Rt=0;for(let st=1;st<Z.length;st++){let vt=Z[Rt],Ot=Z[st],Ct=vt.start+vt.count,mt=se(Ot.start,b.width,4),qt=se(vt.start,b.width,4);Ot.start<=Ct+1&&mt===qt&&se(Ot.start+Ot.count-1,b.width,4)===mt?vt.count=Math.max(vt.count,Ot.start+Ot.count-vt.start):(++Rt,Z[Rt]=Ot)}Z.length=Rt+1;let ut=e.getParameter(e.UNPACK_ROW_LENGTH),At=e.getParameter(e.UNPACK_SKIP_PIXELS),wt=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,b.width);for(let st=0,vt=Z.length;st<vt;st++){let Ot=Z[st],Ct=Math.floor(Ot.start/4),mt=Math.ceil(Ot.count/4),qt=Ct%b.width,I=Math.floor(Ct/b.width),rt=mt,ht=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,qt),e.pixelStorei(e.UNPACK_SKIP_ROWS,I),n.texSubImage2D(e.TEXTURE_2D,0,qt,I,rt,ht,z,Q,b.data)}C.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ut),e.pixelStorei(e.UNPACK_SKIP_PIXELS,At),e.pixelStorei(e.UNPACK_SKIP_ROWS,wt)}}function J(C,b,z){let Q=e.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Q=e.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Q=e.TEXTURE_3D);let et=ee(C,b),Z=b.source;n.bindTexture(Q,C.__webglTexture,e.TEXTURE0+z);let Rt=i.get(Z);if(Z.version!==Rt.__version||et===!0){n.activeTexture(e.TEXTURE0+z);let ut=re.getPrimaries(re.workingColorSpace),At=b.colorSpace===_a?null:re.getPrimaries(b.colorSpace),wt=b.colorSpace===_a||ut===At?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let st=x(b.image,!1,a.maxTextureSize);st=Kt(b,st);let vt=s.convert(b.format,b.colorSpace),Ot=s.convert(b.type),Ct=_(b.internalFormat,vt,Ot,b.colorSpace,b.isVideoTexture);Ft(Q,b);let mt,qt=b.mipmaps,I=b.isVideoTexture!==!0,rt=Rt.__version===void 0||et===!0,ht=Z.dataReady,St=T(b,st);if(b.isDepthTexture)Ct=y(b.format===Ro,b.type),rt&&(I?n.texStorage2D(e.TEXTURE_2D,1,Ct,st.width,st.height):n.texImage2D(e.TEXTURE_2D,0,Ct,st.width,st.height,0,vt,Ot,null));else if(b.isDataTexture)if(qt.length>0){I&&rt&&n.texStorage2D(e.TEXTURE_2D,St,Ct,qt[0].width,qt[0].height);for(let nt=0,$=qt.length;nt<$;nt++)mt=qt[nt],I?ht&&n.texSubImage2D(e.TEXTURE_2D,nt,0,0,mt.width,mt.height,vt,Ot,mt.data):n.texImage2D(e.TEXTURE_2D,nt,Ct,mt.width,mt.height,0,vt,Ot,mt.data);b.generateMipmaps=!1}else I?(rt&&n.texStorage2D(e.TEXTURE_2D,St,Ct,st.width,st.height),ht&&Yt(b,st,vt,Ot)):n.texImage2D(e.TEXTURE_2D,0,Ct,st.width,st.height,0,vt,Ot,st.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){I&&rt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,St,Ct,qt[0].width,qt[0].height,st.depth);for(let nt=0,$=qt.length;nt<$;nt++)if(mt=qt[nt],b.format!==hi)if(vt!==null)if(I){if(ht)if(b.layerUpdates.size>0){let Tt=Pg(mt.width,mt.height,b.format,b.type);for(let Ht of b.layerUpdates){let be=mt.data.subarray(Ht*Tt/mt.data.BYTES_PER_ELEMENT,(Ht+1)*Tt/mt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,nt,0,0,Ht,mt.width,mt.height,1,vt,be)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,nt,0,0,0,mt.width,mt.height,st.depth,vt,mt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,nt,Ct,mt.width,mt.height,st.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ht&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,nt,0,0,0,mt.width,mt.height,st.depth,vt,Ot,mt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,nt,Ct,mt.width,mt.height,st.depth,0,vt,Ot,mt.data)}else{I&&rt&&n.texStorage2D(e.TEXTURE_2D,St,Ct,qt[0].width,qt[0].height);for(let nt=0,$=qt.length;nt<$;nt++)mt=qt[nt],b.format!==hi?vt!==null?I?ht&&n.compressedTexSubImage2D(e.TEXTURE_2D,nt,0,0,mt.width,mt.height,vt,mt.data):n.compressedTexImage2D(e.TEXTURE_2D,nt,Ct,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ht&&n.texSubImage2D(e.TEXTURE_2D,nt,0,0,mt.width,mt.height,vt,Ot,mt.data):n.texImage2D(e.TEXTURE_2D,nt,Ct,mt.width,mt.height,0,vt,Ot,mt.data)}else if(b.isDataArrayTexture)if(I){if(rt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,St,Ct,st.width,st.height,st.depth),ht)if(b.layerUpdates.size>0){let nt=Pg(st.width,st.height,b.format,b.type);for(let $ of b.layerUpdates){let Tt=st.data.subarray($*nt/st.data.BYTES_PER_ELEMENT,($+1)*nt/st.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,$,st.width,st.height,1,vt,Ot,Tt)}b.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,vt,Ot,st.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Ct,st.width,st.height,st.depth,0,vt,Ot,st.data);else if(b.isData3DTexture)I?(rt&&n.texStorage3D(e.TEXTURE_3D,St,Ct,st.width,st.height,st.depth),ht&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,vt,Ot,st.data)):n.texImage3D(e.TEXTURE_3D,0,Ct,st.width,st.height,st.depth,0,vt,Ot,st.data);else if(b.isFramebufferTexture){if(rt)if(I)n.texStorage2D(e.TEXTURE_2D,St,Ct,st.width,st.height);else{let nt=st.width,$=st.height;for(let Tt=0;Tt<St;Tt++)n.texImage2D(e.TEXTURE_2D,Tt,Ct,nt,$,0,vt,Ot,null),nt>>=1,$>>=1}}else if(qt.length>0){if(I&&rt){let nt=jt(qt[0]);n.texStorage2D(e.TEXTURE_2D,St,Ct,nt.width,nt.height)}for(let nt=0,$=qt.length;nt<$;nt++)mt=qt[nt],I?ht&&n.texSubImage2D(e.TEXTURE_2D,nt,0,0,vt,Ot,mt):n.texImage2D(e.TEXTURE_2D,nt,Ct,vt,Ot,mt);b.generateMipmaps=!1}else if(I){if(rt){let nt=jt(st);n.texStorage2D(e.TEXTURE_2D,St,Ct,nt.width,nt.height)}ht&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,vt,Ot,st)}else n.texImage2D(e.TEXTURE_2D,0,Ct,vt,Ot,st);m(b)&&u(Q),Rt.__version=Z.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function tt(C,b,z){if(b.image.length!==6)return;let Q=ee(C,b),et=b.source;n.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+z);let Z=i.get(et);if(et.version!==Z.__version||Q===!0){n.activeTexture(e.TEXTURE0+z);let Rt=re.getPrimaries(re.workingColorSpace),ut=b.colorSpace===_a?null:re.getPrimaries(b.colorSpace),At=b.colorSpace===_a||Rt===ut?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let wt=b.isCompressedTexture||b.image[0].isCompressedTexture,st=b.image[0]&&b.image[0].isDataTexture,vt=[];for(let $=0;$<6;$++)!wt&&!st?vt[$]=x(b.image[$],!0,a.maxCubemapSize):vt[$]=st?b.image[$].image:b.image[$],vt[$]=Kt(b,vt[$]);let Ot=vt[0],Ct=s.convert(b.format,b.colorSpace),mt=s.convert(b.type),qt=_(b.internalFormat,Ct,mt,b.colorSpace),I=b.isVideoTexture!==!0,rt=Z.__version===void 0||Q===!0,ht=et.dataReady,St=T(b,Ot);Ft(e.TEXTURE_CUBE_MAP,b);let nt;if(wt){I&&rt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,St,qt,Ot.width,Ot.height);for(let $=0;$<6;$++){nt=vt[$].mipmaps;for(let Tt=0;Tt<nt.length;Tt++){let Ht=nt[Tt];b.format!==hi?Ct!==null?I?ht&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Tt,0,0,Ht.width,Ht.height,Ct,Ht.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Tt,qt,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ht&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Tt,0,0,Ht.width,Ht.height,Ct,mt,Ht.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Tt,qt,Ht.width,Ht.height,0,Ct,mt,Ht.data)}}}else{if(nt=b.mipmaps,I&&rt){nt.length>0&&St++;let $=jt(vt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,St,qt,$.width,$.height)}for(let $=0;$<6;$++)if(st){I?ht&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,vt[$].width,vt[$].height,Ct,mt,vt[$].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,qt,vt[$].width,vt[$].height,0,Ct,mt,vt[$].data);for(let Tt=0;Tt<nt.length;Tt++){let be=nt[Tt].image[$].image;I?ht&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Tt+1,0,0,be.width,be.height,Ct,mt,be.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Tt+1,qt,be.width,be.height,0,Ct,mt,be.data)}}else{I?ht&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ct,mt,vt[$]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,qt,Ct,mt,vt[$]);for(let Tt=0;Tt<nt.length;Tt++){let Ht=nt[Tt];I?ht&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Tt+1,0,0,Ct,mt,Ht.image[$]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Tt+1,qt,Ct,mt,Ht.image[$])}}}m(b)&&u(e.TEXTURE_CUBE_MAP),Z.__version=et.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function _t(C,b,z,Q,et,Z){let Rt=s.convert(z.format,z.colorSpace),ut=s.convert(z.type),At=_(z.internalFormat,Rt,ut,z.colorSpace),wt=i.get(b),st=i.get(z);if(st.__renderTarget=b,!wt.__hasExternalTextures){let vt=Math.max(1,b.width>>Z),Ot=Math.max(1,b.height>>Z);et===e.TEXTURE_3D||et===e.TEXTURE_2D_ARRAY?n.texImage3D(et,Z,At,vt,Ot,b.depth,0,Rt,ut,null):n.texImage2D(et,Z,At,vt,Ot,0,Rt,ut,null)}n.bindFramebuffer(e.FRAMEBUFFER,C),ot(b)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Q,et,st.__webglTexture,0,pt(b)):(et===e.TEXTURE_2D||et>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Q,et,st.__webglTexture,Z),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ut(C,b,z){if(e.bindRenderbuffer(e.RENDERBUFFER,C),b.depthBuffer){let Q=b.depthTexture,et=Q&&Q.isDepthTexture?Q.type:null,Z=y(b.stencilBuffer,et),Rt=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ut=pt(b);ot(b)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ut,Z,b.width,b.height):z?e.renderbufferStorageMultisample(e.RENDERBUFFER,ut,Z,b.width,b.height):e.renderbufferStorage(e.RENDERBUFFER,Z,b.width,b.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Rt,e.RENDERBUFFER,C)}else{let Q=b.textures;for(let et=0;et<Q.length;et++){let Z=Q[et],Rt=s.convert(Z.format,Z.colorSpace),ut=s.convert(Z.type),At=_(Z.internalFormat,Rt,ut,Z.colorSpace),wt=pt(b);z&&ot(b)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,wt,At,b.width,b.height):ot(b)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,wt,At,b.width,b.height):e.renderbufferStorage(e.RENDERBUFFER,At,b.width,b.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function bt(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=i.get(b.depthTexture);Q.__renderTarget=b,(!Q.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y(b.depthTexture,0);let et=Q.__webglTexture,Z=pt(b);if(b.depthTexture.format===go)ot(b)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,et,0,Z):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,et,0);else if(b.depthTexture.format===Ro)ot(b)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,et,0,Z):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Gt(C){let b=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){let Q=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Q){let et=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Q.removeEventListener("dispose",et)};Q.addEventListener("dispose",et),b.__depthDisposeCallback=et}b.__boundDepthTexture=Q}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let Q=C.texture.mipmaps;Q&&Q.length>0?bt(b.__webglFramebuffer[0],C):bt(b.__webglFramebuffer,C)}else if(z){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]===void 0)b.__webglDepthbuffer[Q]=e.createRenderbuffer(),Ut(b.__webglDepthbuffer[Q],C,!1);else{let et=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer[Q];e.bindRenderbuffer(e.RENDERBUFFER,Z),e.framebufferRenderbuffer(e.FRAMEBUFFER,et,e.RENDERBUFFER,Z)}}else{let Q=C.texture.mipmaps;if(Q&&Q.length>0?n.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=e.createRenderbuffer(),Ut(b.__webglDepthbuffer,C,!1);else{let et=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,Z),e.framebufferRenderbuffer(e.FRAMEBUFFER,et,e.RENDERBUFFER,Z)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ie(C,b,z){let Q=i.get(C);b!==void 0&&_t(Q.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),z!==void 0&&Gt(C)}function U(C){let b=C.texture,z=i.get(C),Q=i.get(b);C.addEventListener("dispose",A);let et=C.textures,Z=C.isWebGLCubeRenderTarget===!0,Rt=et.length>1;if(Rt||(Q.__webglTexture===void 0&&(Q.__webglTexture=e.createTexture()),Q.__version=b.version,r.memory.textures++),Z){z.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[ut]=[];for(let At=0;At<b.mipmaps.length;At++)z.__webglFramebuffer[ut][At]=e.createFramebuffer()}else z.__webglFramebuffer[ut]=e.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let ut=0;ut<b.mipmaps.length;ut++)z.__webglFramebuffer[ut]=e.createFramebuffer()}else z.__webglFramebuffer=e.createFramebuffer();if(Rt)for(let ut=0,At=et.length;ut<At;ut++){let wt=i.get(et[ut]);wt.__webglTexture===void 0&&(wt.__webglTexture=e.createTexture(),r.memory.textures++)}if(C.samples>0&&ot(C)===!1){z.__webglMultisampledFramebuffer=e.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ut=0;ut<et.length;ut++){let At=et[ut];z.__webglColorRenderbuffer[ut]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,z.__webglColorRenderbuffer[ut]);let wt=s.convert(At.format,At.colorSpace),st=s.convert(At.type),vt=_(At.internalFormat,wt,st,At.colorSpace,C.isXRRenderTarget===!0),Ot=pt(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ot,vt,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.RENDERBUFFER,z.__webglColorRenderbuffer[ut])}e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=e.createRenderbuffer(),Ut(z.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(Z){n.bindTexture(e.TEXTURE_CUBE_MAP,Q.__webglTexture),Ft(e.TEXTURE_CUBE_MAP,b);for(let ut=0;ut<6;ut++)if(b.mipmaps&&b.mipmaps.length>0)for(let At=0;At<b.mipmaps.length;At++)_t(z.__webglFramebuffer[ut][At],C,b,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ut,At);else _t(z.__webglFramebuffer[ut],C,b,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(b)&&u(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Rt){for(let ut=0,At=et.length;ut<At;ut++){let wt=et[ut],st=i.get(wt),vt=e.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(vt=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(vt,st.__webglTexture),Ft(vt,wt),_t(z.__webglFramebuffer,C,wt,e.COLOR_ATTACHMENT0+ut,vt,0),m(wt)&&u(vt)}n.unbindTexture()}else{let ut=e.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ut=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ut,Q.__webglTexture),Ft(ut,b),b.mipmaps&&b.mipmaps.length>0)for(let At=0;At<b.mipmaps.length;At++)_t(z.__webglFramebuffer[At],C,b,e.COLOR_ATTACHMENT0,ut,At);else _t(z.__webglFramebuffer,C,b,e.COLOR_ATTACHMENT0,ut,0);m(b)&&u(ut),n.unbindTexture()}C.depthBuffer&&Gt(C)}function F(C){let b=C.textures;for(let z=0,Q=b.length;z<Q;z++){let et=b[z];if(m(et)){let Z=g(C),Rt=i.get(et).__webglTexture;n.bindTexture(Z,Rt),u(Z),n.unbindTexture()}}}let W=[],ct=[];function K(C){if(C.samples>0){if(ot(C)===!1){let b=C.textures,z=C.width,Q=C.height,et=e.COLOR_BUFFER_BIT,Z=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Rt=i.get(C),ut=b.length>1;if(ut)for(let wt=0;wt<b.length;wt++)n.bindFramebuffer(e.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+wt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Rt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+wt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer);let At=C.texture.mipmaps;At&&At.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let wt=0;wt<b.length;wt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(et|=e.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(et|=e.STENCIL_BUFFER_BIT)),ut){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Rt.__webglColorRenderbuffer[wt]);let st=i.get(b[wt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,st,0)}e.blitFramebuffer(0,0,z,Q,0,0,z,Q,et,e.NEAREST),l===!0&&(W.length=0,ct.length=0,W.push(e.COLOR_ATTACHMENT0+wt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(W.push(Z),ct.push(Z),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ct)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,W))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ut)for(let wt=0;wt<b.length;wt++){n.bindFramebuffer(e.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+wt,e.RENDERBUFFER,Rt.__webglColorRenderbuffer[wt]);let st=i.get(b[wt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Rt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+wt,e.TEXTURE_2D,st,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let b=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[b])}}}function pt(C){return Math.min(a.maxSamples,C.samples)}function ot(C){let b=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function yt(C){let b=r.render.frame;f.get(C)!==b&&(f.set(C,b),C.update())}function Kt(C,b){let z=C.colorSpace,Q=C.format,et=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==ks&&z!==_a&&(re.getTransfer(z)===pe?(Q!==hi||et!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function jt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=P,this.setTexture2D=Y,this.setTexture2DArray=q,this.setTexture3D=at,this.setTextureCube=G,this.rebindTextures=Ie,this.setupRenderTarget=U,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=ot}function vR(e,t){function n(i,a=_a){let s,r=re.getTransfer(a);if(i===Mi)return e.UNSIGNED_BYTE;if(i===sf)return e.UNSIGNED_SHORT_4_4_4_4;if(i===rf)return e.UNSIGNED_SHORT_5_5_5_1;if(i===bg)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Sg)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===_g)return e.BYTE;if(i===xg)return e.SHORT;if(i===Ao)return e.UNSIGNED_SHORT;if(i===af)return e.INT;if(i===hs)return e.UNSIGNED_INT;if(i===zi)return e.FLOAT;if(i===wo)return e.HALF_FLOAT;if(i===Mg)return e.ALPHA;if(i===Eg)return e.RGB;if(i===hi)return e.RGBA;if(i===go)return e.DEPTH_COMPONENT;if(i===Ro)return e.DEPTH_STENCIL;if(i===Tg)return e.RED;if(i===of)return e.RED_INTEGER;if(i===Ag)return e.RG;if(i===lf)return e.RG_INTEGER;if(i===cf)return e.RGBA_INTEGER;if(i===fc||i===dc||i===pc||i===mc)if(r===pe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===fc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===dc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===fc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===dc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===uf||i===hf||i===ff||i===df)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===uf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ff)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===df)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pf||i===mf||i===gf)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===pf||i===mf)return r===pe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===gf)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===vf||i===yf||i===_f||i===xf||i===bf||i===Sf||i===Mf||i===Ef||i===Tf||i===Af||i===wf||i===Cf||i===Rf||i===Df)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===vf)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yf)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_f)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xf)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bf)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sf)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Mf)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ef)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Tf)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Af)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wf)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Cf)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Rf)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Df)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Uf||i===Nf||i===Lf)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Uf)return r===pe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Lf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===If||i===Of||i===Pf||i===Bf)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===If)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Of)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Co?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var yR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_R=`
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

}`,Kg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new ic(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new bi({vertexShader:yR,fragmentShader:_R,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Lt(new ga(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jg=class extends pa{constructor(t,n){super();let i=this,a=null,s=1,r=null,o="local-floor",l=1,c=null,f=null,d=null,h=null,p=null,v=null,x=typeof XRWebGLBinding<"u",m=new Kg,u={},g=n.getContextAttributes(),_=null,y=null,T=[],w=[],A=new kt,D=null,M=new Ke;M.viewport=new de;let S=new Ke;S.viewport=new de;let N=[M,S],P=new qh,k=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let tt=T[J];return tt===void 0&&(tt=new bo,T[J]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(J){let tt=T[J];return tt===void 0&&(tt=new bo,T[J]=tt),tt.getGripSpace()},this.getHand=function(J){let tt=T[J];return tt===void 0&&(tt=new bo,T[J]=tt),tt.getHandSpace()};function Y(J){let tt=w.indexOf(J.inputSource);if(tt===-1)return;let _t=T[tt];_t!==void 0&&(_t.update(J.inputSource,J.frame,c||r),_t.dispatchEvent({type:J.type,data:J.inputSource}))}function q(){a.removeEventListener("select",Y),a.removeEventListener("selectstart",Y),a.removeEventListener("selectend",Y),a.removeEventListener("squeeze",Y),a.removeEventListener("squeezestart",Y),a.removeEventListener("squeezeend",Y),a.removeEventListener("end",q),a.removeEventListener("inputsourceschange",at);for(let J=0;J<T.length;J++){let tt=w[J];tt!==null&&(w[J]=null,T[J].disconnect(tt))}k=null,X=null,m.reset();for(let J in u)delete u[J];t.setRenderTarget(_),p=null,h=null,d=null,a=null,y=null,Yt.stop(),i.isPresenting=!1,t.setPixelRatio(D),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(a,n)),d},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(J){if(a=J,a!==null){if(_=t.getRenderTarget(),a.addEventListener("select",Y),a.addEventListener("selectstart",Y),a.addEventListener("selectend",Y),a.addEventListener("squeeze",Y),a.addEventListener("squeezestart",Y),a.addEventListener("squeezeend",Y),a.addEventListener("end",q),a.addEventListener("inputsourceschange",at),g.xrCompatible!==!0&&await n.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Ut=null,bt=null;g.depth&&(bt=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,_t=g.stencil?Ro:go,Ut=g.stencil?Co:hs);let Gt={colorFormat:n.RGBA8,depthFormat:bt,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Gt),a.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new Ii(h.textureWidth,h.textureHeight,{format:hi,type:Mi,depthTexture:new nc(h.textureWidth,h.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let _t={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(a,n,_t),a.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Ii(p.framebufferWidth,p.framebufferHeight,{format:hi,type:Mi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),Yt.setContext(a),Yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function at(J){for(let tt=0;tt<J.removed.length;tt++){let _t=J.removed[tt],Ut=w.indexOf(_t);Ut>=0&&(w[Ut]=null,T[Ut].disconnect(_t))}for(let tt=0;tt<J.added.length;tt++){let _t=J.added[tt],Ut=w.indexOf(_t);if(Ut===-1){for(let Gt=0;Gt<T.length;Gt++)if(Gt>=w.length){w.push(_t),Ut=Gt;break}else if(w[Gt]===null){w[Gt]=_t,Ut=Gt;break}if(Ut===-1)break}let bt=T[Ut];bt&&bt.connect(_t)}}let G=new L,lt=new L;function dt(J,tt,_t){G.setFromMatrixPosition(tt.matrixWorld),lt.setFromMatrixPosition(_t.matrixWorld);let Ut=G.distanceTo(lt),bt=tt.projectionMatrix.elements,Gt=_t.projectionMatrix.elements,Ie=bt[14]/(bt[10]-1),U=bt[14]/(bt[10]+1),F=(bt[9]+1)/bt[5],W=(bt[9]-1)/bt[5],ct=(bt[8]-1)/bt[0],K=(Gt[8]+1)/Gt[0],pt=Ie*ct,ot=Ie*K,yt=Ut/(-ct+K),Kt=yt*-ct;if(tt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Kt),J.translateZ(yt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),bt[10]===-1)J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let jt=Ie+yt,C=U+yt,b=pt-Kt,z=ot+(Ut-Kt),Q=F*U/C*jt,et=W*U/C*jt;J.projectionMatrix.makePerspective(b,z,Q,et,jt,C),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Et(J,tt){tt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(tt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(a===null)return;let tt=J.near,_t=J.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(_t=m.depthFar)),P.near=S.near=M.near=tt,P.far=S.far=M.far=_t,(k!==P.near||X!==P.far)&&(a.updateRenderState({depthNear:P.near,depthFar:P.far}),k=P.near,X=P.far),P.layers.mask=J.layers.mask|6,M.layers.mask=P.layers.mask&3,S.layers.mask=P.layers.mask&5;let Ut=J.parent,bt=P.cameras;Et(P,Ut);for(let Gt=0;Gt<bt.length;Gt++)Et(bt[Gt],Ut);bt.length===2?dt(P,M,S):P.projectionMatrix.copy(M.projectionMatrix),Ft(J,P,Ut)};function Ft(J,tt,_t){_t===null?J.matrix.copy(tt.matrixWorld):(J.matrix.copy(_t.matrixWorld),J.matrix.invert(),J.matrix.multiply(tt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=vo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function(J){return u[J]};let ee=null;function se(J,tt){if(f=tt.getViewerPose(c||r),v=tt,f!==null){let _t=f.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Ut=!1;_t.length!==P.cameras.length&&(P.cameras.length=0,Ut=!0);for(let U=0;U<_t.length;U++){let F=_t[U],W=null;if(p!==null)W=p.getViewport(F);else{let K=d.getViewSubImage(h,F);W=K.viewport,U===0&&(t.setRenderTargetTextures(y,K.colorTexture,K.depthStencilTexture),t.setRenderTarget(y))}let ct=N[U];ct===void 0&&(ct=new Ke,ct.layers.enable(U),ct.viewport=new de,N[U]=ct),ct.matrix.fromArray(F.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(F.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(W.x,W.y,W.width,W.height),U===0&&(P.matrix.copy(ct.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Ut===!0&&P.cameras.push(ct)}let bt=a.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let U=d.getDepthInformation(_t[0]);U&&U.isValid&&U.texture&&m.init(U,a.renderState)}if(bt&&bt.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let U=0;U<_t.length;U++){let F=_t[U].camera;if(F){let W=u[F];W||(W=new ic,u[F]=W);let ct=d.getCameraImage(F);W.sourceTexture=ct}}}}for(let _t=0;_t<T.length;_t++){let Ut=w[_t],bt=T[_t];Ut!==null&&bt!==void 0&&bt.update(Ut,tt,c||r)}ee&&ee(J,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),v=null}let Yt=new HS;Yt.setAnimationLoop(se),this.setAnimationLoop=function(J){ee=J},this.dispose=function(){}}},ir=new xi,xR=new Me;function bR(e,t){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Lg(e)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function a(m,u,g,_,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),f(m,u)):u.isMeshStandardMaterial?(s(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,y)):u.isMeshMatcapMaterial?(s(m,u),v(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,g,_):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Mn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Mn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let g=t.get(u),_=g.envMap,y=g.envMapRotation;_&&(m.envMap.value=_,ir.copy(y),ir.x*=-1,ir.y*=-1,ir.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ir.y*=-1,ir.z*=-1),m.envMapRotation.value.setFromMatrix4(xR.makeRotationFromEuler(ir)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,_){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=_*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Mn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){let g=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function SR(e,t,n,i){let a={},s={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){let y=_.program;i.uniformBlockBinding(g,y)}function c(g,_){let y=a[g.id];y===void 0&&(v(g),y=f(g),a[g.id]=y,g.addEventListener("dispose",m));let T=_.program;i.updateUBOMapping(g,T);let w=t.render.frame;s[g.id]!==w&&(h(g),s[g.id]=w)}function f(g){let _=d();g.__bindingPointIndex=_;let y=e.createBuffer(),T=g.__size,w=g.usage;return e.bindBuffer(e.UNIFORM_BUFFER,y),e.bufferData(e.UNIFORM_BUFFER,T,w),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,y),y}function d(){for(let g=0;g<o;g++)if(r.indexOf(g)===-1)return r.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){let _=a[g.id],y=g.uniforms,T=g.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let w=0,A=y.length;w<A;w++){let D=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,S=D.length;M<S;M++){let N=D[M];if(p(N,w,M,T)===!0){let P=N.__offset,k=Array.isArray(N.value)?N.value:[N.value],X=0;for(let Y=0;Y<k.length;Y++){let q=k[Y],at=x(q);typeof q=="number"||typeof q=="boolean"?(N.__data[0]=q,e.bufferSubData(e.UNIFORM_BUFFER,P+X,N.__data)):q.isMatrix3?(N.__data[0]=q.elements[0],N.__data[1]=q.elements[1],N.__data[2]=q.elements[2],N.__data[3]=0,N.__data[4]=q.elements[3],N.__data[5]=q.elements[4],N.__data[6]=q.elements[5],N.__data[7]=0,N.__data[8]=q.elements[6],N.__data[9]=q.elements[7],N.__data[10]=q.elements[8],N.__data[11]=0):(q.toArray(N.__data,X),X+=at.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,P,N.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(g,_,y,T){let w=g.value,A=_+"_"+y;if(T[A]===void 0)return typeof w=="number"||typeof w=="boolean"?T[A]=w:T[A]=w.clone(),!0;{let D=T[A];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return T[A]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function v(g){let _=g.uniforms,y=0,T=16;for(let A=0,D=_.length;A<D;A++){let M=Array.isArray(_[A])?_[A]:[_[A]];for(let S=0,N=M.length;S<N;S++){let P=M[S],k=Array.isArray(P.value)?P.value:[P.value];for(let X=0,Y=k.length;X<Y;X++){let q=k[X],at=x(q),G=y%T,lt=G%at.boundary,dt=G+lt;y+=lt,dt!==0&&T-dt<at.storage&&(y+=T-dt),P.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=y,y+=at.storage}}}let w=y%T;return w>0&&(y+=T-w),g.__size=y,g.__cache={},this}function x(g){let _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){let _=g.target;_.removeEventListener("dispose",m);let y=r.indexOf(_.__bindingPointIndex);r.splice(y,1),e.deleteBuffer(a[_.id]),delete a[_.id],delete s[_.id]}function u(){for(let g in a)e.deleteBuffer(a[g]);r=[],a={},s={}}return{bind:l,update:c,dispose:u}}var Io=class{constructor(t={}){let{canvas:n=fS(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;let v=new Uint32Array(4),x=new Int32Array(4),m=null,u=null,g=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ya,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,T=!1;this._outputColorSpace=hn;let w=0,A=0,D=null,M=-1,S=null,N=new de,P=new de,k=null,X=new Qt(0),Y=0,q=n.width,at=n.height,G=1,lt=null,dt=null,Et=new de(0,0,q,at),Ft=new de(0,0,q,at),ee=!1,se=new So,Yt=!1,J=!1,tt=new Me,_t=new L,Ut=new de,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function Ie(){return D===null?G:1}let U=i;function F(E,O){return n.getContext(E,O)}try{let E={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"180"}`),n.addEventListener("webglcontextlost",ht,!1),n.addEventListener("webglcontextrestored",St,!1),n.addEventListener("webglcontextcreationerror",nt,!1),U===null){let O="webgl2";if(U=F(O,E),U===null)throw F(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let W,ct,K,pt,ot,yt,Kt,jt,C,b,z,Q,et,Z,Rt,ut,At,wt,st,vt,Ot,Ct,mt,qt;function I(){W=new H2(U),W.init(),Ct=new vR(U,W),ct=new L2(U,W,t,Ct),K=new mR(U,W),ct.reversedDepthBuffer&&h&&K.buffers.depth.setReversed(!0),pt=new G2(U),ot=new nR,yt=new gR(U,W,K,ot,ct,Ct,pt),Kt=new O2(y),jt=new F2(y),C=new KT(U),mt=new U2(U,C),b=new V2(U,C,pt,mt),z=new W2(U,b,C,pt),st=new X2(U,ct,yt),ut=new I2(ot),Q=new eR(y,Kt,jt,W,ct,mt,ut),et=new bR(y,ot),Z=new aR,Rt=new uR(W),wt=new D2(y,Kt,jt,K,z,p,l),At=new dR(y,z,ct),qt=new SR(U,pt,ct,K),vt=new N2(U,W,pt),Ot=new k2(U,W,pt),pt.programs=Q.programs,y.capabilities=ct,y.extensions=W,y.properties=ot,y.renderLists=Z,y.shadowMap=At,y.state=K,y.info=pt}I();let rt=new Jg(y,U);this.xr=rt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let E=W.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=W.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(q,at,!1))},this.getSize=function(E){return E.set(q,at)},this.setSize=function(E,O,H=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=E,at=O,n.width=Math.floor(E*G),n.height=Math.floor(O*G),H===!0&&(n.style.width=E+"px",n.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(q*G,at*G).floor()},this.setDrawingBufferSize=function(E,O,H){q=E,at=O,G=H,n.width=Math.floor(E*H),n.height=Math.floor(O*H),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(N)},this.getViewport=function(E){return E.copy(Et)},this.setViewport=function(E,O,H,V){E.isVector4?Et.set(E.x,E.y,E.z,E.w):Et.set(E,O,H,V),K.viewport(N.copy(Et).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(Ft)},this.setScissor=function(E,O,H,V){E.isVector4?Ft.set(E.x,E.y,E.z,E.w):Ft.set(E,O,H,V),K.scissor(P.copy(Ft).multiplyScalar(G).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(E){K.setScissorTest(ee=E)},this.setOpaqueSort=function(E){lt=E},this.setTransparentSort=function(E){dt=E},this.getClearColor=function(E){return E.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor(...arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,H=!0){let V=0;if(E){let B=!1;if(D!==null){let it=D.texture.format;B=it===cf||it===lf||it===of}if(B){let it=D.texture.type,gt=it===Mi||it===hs||it===Ao||it===Co||it===sf||it===rf,Mt=wt.getClearColor(),xt=wt.getClearAlpha(),It=Mt.r,Bt=Mt.g,Dt=Mt.b;gt?(v[0]=It,v[1]=Bt,v[2]=Dt,v[3]=xt,U.clearBufferuiv(U.COLOR,0,v)):(x[0]=It,x[1]=Bt,x[2]=Dt,x[3]=xt,U.clearBufferiv(U.COLOR,0,x))}else V|=U.COLOR_BUFFER_BIT}O&&(V|=U.DEPTH_BUFFER_BIT),H&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ht,!1),n.removeEventListener("webglcontextrestored",St,!1),n.removeEventListener("webglcontextcreationerror",nt,!1),wt.dispose(),Z.dispose(),Rt.dispose(),ot.dispose(),Kt.dispose(),jt.dispose(),z.dispose(),mt.dispose(),qt.dispose(),Q.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Ti),rt.removeEventListener("sessionend",e0),ds.stop()};function ht(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let E=pt.autoReset,O=At.enabled,H=At.autoUpdate,V=At.needsUpdate,B=At.type;I(),pt.autoReset=E,At.enabled=O,At.autoUpdate=H,At.needsUpdate=V,At.type=B}function nt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function $(E){let O=E.target;O.removeEventListener("dispose",$),Tt(O)}function Tt(E){Ht(E),ot.remove(E)}function Ht(E){let O=ot.get(E).programs;O!==void 0&&(O.forEach(function(H){Q.releaseProgram(H)}),E.isShaderMaterial&&Q.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,H,V,B,it){O===null&&(O=bt);let gt=B.isMesh&&B.matrixWorld.determinant()<0,Mt=KS(E,O,H,V,B);K.setMaterial(V,gt);let xt=H.index,It=1;if(V.wireframe===!0){if(xt=b.getWireframeAttribute(H),xt===void 0)return;It=2}let Bt=H.drawRange,Dt=H.attributes.position,ne=Bt.start*It,me=(Bt.start+Bt.count)*It;it!==null&&(ne=Math.max(ne,it.start*It),me=Math.min(me,(it.start+it.count)*It)),xt!==null?(ne=Math.max(ne,0),me=Math.min(me,xt.count)):Dt!=null&&(ne=Math.max(ne,0),me=Math.min(me,Dt.count));let Oe=me-ne;if(Oe<0||Oe===1/0)return;mt.setup(B,V,Mt,H,xt);let Ee,_e=vt;if(xt!==null&&(Ee=C.get(xt),_e=Ot,_e.setIndex(Ee)),B.isMesh)V.wireframe===!0?(K.setLineWidth(V.wireframeLinewidth*Ie()),_e.setMode(U.LINES)):_e.setMode(U.TRIANGLES);else if(B.isLine){let Nt=V.linewidth;Nt===void 0&&(Nt=1),K.setLineWidth(Nt*Ie()),B.isLineSegments?_e.setMode(U.LINES):B.isLineLoop?_e.setMode(U.LINE_LOOP):_e.setMode(U.LINE_STRIP)}else B.isPoints?_e.setMode(U.POINTS):B.isSprite&&_e.setMode(U.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)yo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(W.get("WEBGL_multi_draw"))_e.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Nt=B._multiDrawStarts,Ne=B._multiDrawCounts,oe=B._multiDrawCount,Nn=xt?C.get(xt).bytesPerElement:1,or=ot.get(V).currentProgram.getUniforms();for(let Ln=0;Ln<oe;Ln++)or.setValue(U,"_gl_DrawID",Ln),_e.render(Nt[Ln]/Nn,Ne[Ln])}else if(B.isInstancedMesh)_e.renderInstances(ne,Oe,B.count);else if(H.isInstancedBufferGeometry){let Nt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ne=Math.min(H.instanceCount,Nt);_e.renderInstances(ne,Oe,Ne)}else _e.render(ne,Oe)};function be(E,O,H){E.transparent===!0&&E.side===ui&&E.forceSinglePass===!1?(E.side=Mn,E.needsUpdate=!0,xc(E,O,H),E.side=da,E.needsUpdate=!0,xc(E,O,H),E.side=ui):xc(E,O,H)}this.compile=function(E,O,H=null){H===null&&(H=E),u=Rt.get(H),u.init(O),_.push(u),H.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),E!==H&&E.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),u.setupLights();let V=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let it=B.material;if(it)if(Array.isArray(it))for(let gt=0;gt<it.length;gt++){let Mt=it[gt];be(Mt,H,B),V.add(Mt)}else be(it,H,B),V.add(it)}),u=_.pop(),V},this.compileAsync=function(E,O,H=null){let V=this.compile(E,O,H);return new Promise(B=>{function it(){if(V.forEach(function(gt){ot.get(gt).currentProgram.isReady()&&V.delete(gt)}),V.size===0){B(E);return}setTimeout(it,10)}W.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let ue=null;function Hi(E){ue&&ue(E)}function Ti(){ds.stop()}function e0(){ds.start()}let ds=new HS;ds.setAnimationLoop(Hi),typeof self<"u"&&ds.setContext(self),this.setAnimationLoop=function(E){ue=E,rt.setAnimationLoop(E),E===null?ds.stop():ds.start()},rt.addEventListener("sessionstart",Ti),rt.addEventListener("sessionend",e0),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(O),O=rt.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,O,D),u=Rt.get(E,_.length),u.init(O),_.push(u),tt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),se.setFromProjectionMatrix(tt,yi,O.reversedDepth),J=this.localClippingEnabled,Yt=ut.init(this.clippingPlanes,J),m=Z.get(E,g.length),m.init(),g.push(m),rt.enabled===!0&&rt.isPresenting===!0){let it=y.xr.getDepthSensingMesh();it!==null&&Xf(it,O,-1/0,y.sortObjects)}Xf(E,O,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(lt,dt),Gt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Gt&&wt.addToRenderList(m,E),this.info.render.frame++,Yt===!0&&ut.beginShadows();let H=u.state.shadowsArray;At.render(H,E,O),Yt===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,B=m.transmissive;if(u.setupLights(),O.isArrayCamera){let it=O.cameras;if(B.length>0)for(let gt=0,Mt=it.length;gt<Mt;gt++){let xt=it[gt];i0(V,B,E,xt)}Gt&&wt.render(E);for(let gt=0,Mt=it.length;gt<Mt;gt++){let xt=it[gt];n0(m,E,xt,xt.viewport)}}else B.length>0&&i0(V,B,E,O),Gt&&wt.render(E),n0(m,E,O);D!==null&&A===0&&(yt.updateMultisampleRenderTarget(D),yt.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(y,E,O),mt.resetDefaultState(),M=-1,S=null,_.pop(),_.length>0?(u=_[_.length-1],Yt===!0&&ut.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function Xf(E,O,H,V){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||se.intersectsSprite(E)){V&&Ut.setFromMatrixPosition(E.matrixWorld).applyMatrix4(tt);let gt=z.update(E),Mt=E.material;Mt.visible&&m.push(E,gt,Mt,H,Ut.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||se.intersectsObject(E))){let gt=z.update(E),Mt=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ut.copy(E.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Ut.copy(gt.boundingSphere.center)),Ut.applyMatrix4(E.matrixWorld).applyMatrix4(tt)),Array.isArray(Mt)){let xt=gt.groups;for(let It=0,Bt=xt.length;It<Bt;It++){let Dt=xt[It],ne=Mt[Dt.materialIndex];ne&&ne.visible&&m.push(E,gt,ne,H,Ut.z,Dt)}}else Mt.visible&&m.push(E,gt,Mt,H,Ut.z,null)}}let it=E.children;for(let gt=0,Mt=it.length;gt<Mt;gt++)Xf(it[gt],O,H,V)}function n0(E,O,H,V){let B=E.opaque,it=E.transmissive,gt=E.transparent;u.setupLightsView(H),Yt===!0&&ut.setGlobalState(y.clippingPlanes,H),V&&K.viewport(N.copy(V)),B.length>0&&_c(B,O,H),it.length>0&&_c(it,O,H),gt.length>0&&_c(gt,O,H),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function i0(E,O,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[V.id]===void 0&&(u.state.transmissionRenderTarget[V.id]=new Ii(1,1,{generateMipmaps:!0,type:W.has("EXT_color_buffer_half_float")||W.has("EXT_color_buffer_float")?wo:Mi,minFilter:us,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));let it=u.state.transmissionRenderTarget[V.id],gt=V.viewport||N;it.setSize(gt.z*y.transmissionResolutionScale,gt.w*y.transmissionResolutionScale);let Mt=y.getRenderTarget(),xt=y.getActiveCubeFace(),It=y.getActiveMipmapLevel();y.setRenderTarget(it),y.getClearColor(X),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),Gt&&wt.render(H);let Bt=y.toneMapping;y.toneMapping=ya;let Dt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),u.setupLightsView(V),Yt===!0&&ut.setGlobalState(y.clippingPlanes,V),_c(E,H,V),yt.updateMultisampleRenderTarget(it),yt.updateRenderTargetMipmap(it),W.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let me=0,Oe=O.length;me<Oe;me++){let Ee=O[me],_e=Ee.object,Nt=Ee.geometry,Ne=Ee.material,oe=Ee.group;if(Ne.side===ui&&_e.layers.test(V.layers)){let Nn=Ne.side;Ne.side=Mn,Ne.needsUpdate=!0,a0(_e,H,V,Nt,Ne,oe),Ne.side=Nn,Ne.needsUpdate=!0,ne=!0}}ne===!0&&(yt.updateMultisampleRenderTarget(it),yt.updateRenderTargetMipmap(it))}y.setRenderTarget(Mt,xt,It),y.setClearColor(X,Y),Dt!==void 0&&(V.viewport=Dt),y.toneMapping=Bt}function _c(E,O,H){let V=O.isScene===!0?O.overrideMaterial:null;for(let B=0,it=E.length;B<it;B++){let gt=E[B],Mt=gt.object,xt=gt.geometry,It=gt.group,Bt=gt.material;Bt.allowOverride===!0&&V!==null&&(Bt=V),Mt.layers.test(H.layers)&&a0(Mt,O,H,xt,Bt,It)}}function a0(E,O,H,V,B,it){E.onBeforeRender(y,O,H,V,B,it),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(y,O,H,V,E,it),B.transparent===!0&&B.side===ui&&B.forceSinglePass===!1?(B.side=Mn,B.needsUpdate=!0,y.renderBufferDirect(H,O,V,B,E,it),B.side=da,B.needsUpdate=!0,y.renderBufferDirect(H,O,V,B,E,it),B.side=ui):y.renderBufferDirect(H,O,V,B,E,it),E.onAfterRender(y,O,H,V,B,it)}function xc(E,O,H){O.isScene!==!0&&(O=bt);let V=ot.get(E),B=u.state.lights,it=u.state.shadowsArray,gt=B.state.version,Mt=Q.getParameters(E,B.state,it,O,H),xt=Q.getProgramCacheKey(Mt),It=V.programs;V.environment=E.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(E.isMeshStandardMaterial?jt:Kt).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,It===void 0&&(E.addEventListener("dispose",$),It=new Map,V.programs=It);let Bt=It.get(xt);if(Bt!==void 0){if(V.currentProgram===Bt&&V.lightsStateVersion===gt)return r0(E,Mt),Bt}else Mt.uniforms=Q.getUniforms(E),E.onBeforeCompile(Mt,y),Bt=Q.acquireProgram(Mt,xt),It.set(xt,Bt),V.uniforms=Mt.uniforms;let Dt=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Dt.clippingPlanes=ut.uniform),r0(E,Mt),V.needsLights=QS(E),V.lightsStateVersion=gt,V.needsLights&&(Dt.ambientLightColor.value=B.state.ambient,Dt.lightProbe.value=B.state.probe,Dt.directionalLights.value=B.state.directional,Dt.directionalLightShadows.value=B.state.directionalShadow,Dt.spotLights.value=B.state.spot,Dt.spotLightShadows.value=B.state.spotShadow,Dt.rectAreaLights.value=B.state.rectArea,Dt.ltc_1.value=B.state.rectAreaLTC1,Dt.ltc_2.value=B.state.rectAreaLTC2,Dt.pointLights.value=B.state.point,Dt.pointLightShadows.value=B.state.pointShadow,Dt.hemisphereLights.value=B.state.hemi,Dt.directionalShadowMap.value=B.state.directionalShadowMap,Dt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Dt.spotShadowMap.value=B.state.spotShadowMap,Dt.spotLightMatrix.value=B.state.spotLightMatrix,Dt.spotLightMap.value=B.state.spotLightMap,Dt.pointShadowMap.value=B.state.pointShadowMap,Dt.pointShadowMatrix.value=B.state.pointShadowMatrix),V.currentProgram=Bt,V.uniformsList=null,Bt}function s0(E){if(E.uniformsList===null){let O=E.currentProgram.getUniforms();E.uniformsList=Lo.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function r0(E,O){let H=ot.get(E);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function KS(E,O,H,V,B){O.isScene!==!0&&(O=bt),yt.resetTextureUnits();let it=O.fog,gt=V.isMeshStandardMaterial?O.environment:null,Mt=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ks,xt=(V.isMeshStandardMaterial?jt:Kt).get(V.envMap||gt),It=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Bt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Dt=!!H.morphAttributes.position,ne=!!H.morphAttributes.normal,me=!!H.morphAttributes.color,Oe=ya;V.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Oe=y.toneMapping);let Ee=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,_e=Ee!==void 0?Ee.length:0,Nt=ot.get(V),Ne=u.state.lights;if(Yt===!0&&(J===!0||E!==S)){let vn=E===S&&V.id===M;ut.setState(V,E,vn)}let oe=!1;V.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Ne.state.version||Nt.outputColorSpace!==Mt||B.isBatchedMesh&&Nt.batching===!1||!B.isBatchedMesh&&Nt.batching===!0||B.isBatchedMesh&&Nt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Nt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Nt.instancing===!1||!B.isInstancedMesh&&Nt.instancing===!0||B.isSkinnedMesh&&Nt.skinning===!1||!B.isSkinnedMesh&&Nt.skinning===!0||B.isInstancedMesh&&Nt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Nt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Nt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Nt.instancingMorph===!1&&B.morphTexture!==null||Nt.envMap!==xt||V.fog===!0&&Nt.fog!==it||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==ut.numPlanes||Nt.numIntersection!==ut.numIntersection)||Nt.vertexAlphas!==It||Nt.vertexTangents!==Bt||Nt.morphTargets!==Dt||Nt.morphNormals!==ne||Nt.morphColors!==me||Nt.toneMapping!==Oe||Nt.morphTargetsCount!==_e)&&(oe=!0):(oe=!0,Nt.__version=V.version);let Nn=Nt.currentProgram;oe===!0&&(Nn=xc(V,O,B));let or=!1,Ln=!1,Po=!1,Le=Nn.getUniforms(),Kn=Nt.uniforms;if(K.useProgram(Nn.program)&&(or=!0,Ln=!0,Po=!0),V.id!==M&&(M=V.id,Ln=!0),or||S!==E){K.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Le.setValue(U,"projectionMatrix",E.projectionMatrix),Le.setValue(U,"viewMatrix",E.matrixWorldInverse);let En=Le.map.cameraPosition;En!==void 0&&En.setValue(U,_t.setFromMatrixPosition(E.matrixWorld)),ct.logarithmicDepthBuffer&&Le.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Le.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,Ln=!0,Po=!0)}if(B.isSkinnedMesh){Le.setOptional(U,B,"bindMatrix"),Le.setOptional(U,B,"bindMatrixInverse");let vn=B.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Le.setValue(U,"boneTexture",vn.boneTexture,yt))}B.isBatchedMesh&&(Le.setOptional(U,B,"batchingTexture"),Le.setValue(U,"batchingTexture",B._matricesTexture,yt),Le.setOptional(U,B,"batchingIdTexture"),Le.setValue(U,"batchingIdTexture",B._indirectTexture,yt),Le.setOptional(U,B,"batchingColorTexture"),B._colorsTexture!==null&&Le.setValue(U,"batchingColorTexture",B._colorsTexture,yt));let Jn=H.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&st.update(B,H,Nn),(Ln||Nt.receiveShadow!==B.receiveShadow)&&(Nt.receiveShadow=B.receiveShadow,Le.setValue(U,"receiveShadow",B.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Kn.envMap.value=xt,Kn.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&O.environment!==null&&(Kn.envMapIntensity.value=O.environmentIntensity),Ln&&(Le.setValue(U,"toneMappingExposure",y.toneMappingExposure),Nt.needsLights&&JS(Kn,Po),it&&V.fog===!0&&et.refreshFogUniforms(Kn,it),et.refreshMaterialUniforms(Kn,V,G,at,u.state.transmissionRenderTarget[E.id]),Lo.upload(U,s0(Nt),Kn,yt)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Lo.upload(U,s0(Nt),Kn,yt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Le.setValue(U,"center",B.center),Le.setValue(U,"modelViewMatrix",B.modelViewMatrix),Le.setValue(U,"normalMatrix",B.normalMatrix),Le.setValue(U,"modelMatrix",B.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let vn=V.uniformsGroups;for(let En=0,Wf=vn.length;En<Wf;En++){let ps=vn[En];qt.update(ps,Nn),qt.bind(ps,Nn)}}return Nn}function JS(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function QS(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,O,H){let V=ot.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),ot.get(E.texture).__webglTexture=O,ot.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:H,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){let H=ot.get(E);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0};let jS=U.createFramebuffer();this.setRenderTarget=function(E,O=0,H=0){D=E,w=O,A=H;let V=!0,B=null,it=!1,gt=!1;if(E){let xt=ot.get(E);if(xt.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(U.FRAMEBUFFER,null),V=!1;else if(xt.__webglFramebuffer===void 0)yt.setupRenderTarget(E);else if(xt.__hasExternalTextures)yt.rebindTextures(E,ot.get(E.texture).__webglTexture,ot.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Dt=E.depthTexture;if(xt.__boundDepthTexture!==Dt){if(Dt!==null&&ot.has(Dt)&&(E.width!==Dt.image.width||E.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");yt.setupDepthRenderbuffer(E)}}let It=E.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(gt=!0);let Bt=ot.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Bt[O])?B=Bt[O][H]:B=Bt[O],it=!0):E.samples>0&&yt.useMultisampledRTT(E)===!1?B=ot.get(E).__webglMultisampledFramebuffer:Array.isArray(Bt)?B=Bt[H]:B=Bt,N.copy(E.viewport),P.copy(E.scissor),k=E.scissorTest}else N.copy(Et).multiplyScalar(G).floor(),P.copy(Ft).multiplyScalar(G).floor(),k=ee;if(H!==0&&(B=jS),K.bindFramebuffer(U.FRAMEBUFFER,B)&&V&&K.drawBuffers(E,B),K.viewport(N),K.scissor(P),K.setScissorTest(k),it){let xt=ot.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,xt.__webglTexture,H)}else if(gt){let xt=O;for(let It=0;It<E.textures.length;It++){let Bt=ot.get(E.textures[It]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+It,Bt.__webglTexture,H,xt)}}else if(E!==null&&H!==0){let xt=ot.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,xt.__webglTexture,H)}M=-1},this.readRenderTargetPixels=function(E,O,H,V,B,it,gt,Mt=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=ot.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&gt!==void 0&&(xt=xt[gt]),xt){K.bindFramebuffer(U.FRAMEBUFFER,xt);try{let It=E.textures[Mt],Bt=It.format,Dt=It.type;if(!ct.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-V&&H>=0&&H<=E.height-B&&(E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Mt),U.readPixels(O,H,V,B,Ct.convert(Bt),Ct.convert(Dt),it))}finally{let It=D!==null?ot.get(D).__webglFramebuffer:null;K.bindFramebuffer(U.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(E,O,H,V,B,it,gt,Mt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=ot.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&gt!==void 0&&(xt=xt[gt]),xt)if(O>=0&&O<=E.width-V&&H>=0&&H<=E.height-B){K.bindFramebuffer(U.FRAMEBUFFER,xt);let It=E.textures[Mt],Bt=It.format,Dt=It.type;if(!ct.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ne=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ne),U.bufferData(U.PIXEL_PACK_BUFFER,it.byteLength,U.STREAM_READ),E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Mt),U.readPixels(O,H,V,B,Ct.convert(Bt),Ct.convert(Dt),0);let me=D!==null?ot.get(D).__webglFramebuffer:null;K.bindFramebuffer(U.FRAMEBUFFER,me);let Oe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await dS(U,Oe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ne),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,it),U.deleteBuffer(ne),U.deleteSync(Oe),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,H=0){let V=Math.pow(2,-H),B=Math.floor(E.image.width*V),it=Math.floor(E.image.height*V),gt=O!==null?O.x:0,Mt=O!==null?O.y:0;yt.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,H,0,0,gt,Mt,B,it),K.unbindTexture()};let $S=U.createFramebuffer(),tM=U.createFramebuffer();this.copyTextureToTexture=function(E,O,H=null,V=null,B=0,it=null){it===null&&(B!==0?(yo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),it=B,B=0):it=0);let gt,Mt,xt,It,Bt,Dt,ne,me,Oe,Ee=E.isCompressedTexture?E.mipmaps[it]:E.image;if(H!==null)gt=H.max.x-H.min.x,Mt=H.max.y-H.min.y,xt=H.isBox3?H.max.z-H.min.z:1,It=H.min.x,Bt=H.min.y,Dt=H.isBox3?H.min.z:0;else{let Jn=Math.pow(2,-B);gt=Math.floor(Ee.width*Jn),Mt=Math.floor(Ee.height*Jn),E.isDataArrayTexture?xt=Ee.depth:E.isData3DTexture?xt=Math.floor(Ee.depth*Jn):xt=1,It=0,Bt=0,Dt=0}V!==null?(ne=V.x,me=V.y,Oe=V.z):(ne=0,me=0,Oe=0);let _e=Ct.convert(O.format),Nt=Ct.convert(O.type),Ne;O.isData3DTexture?(yt.setTexture3D(O,0),Ne=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(yt.setTexture2DArray(O,0),Ne=U.TEXTURE_2D_ARRAY):(yt.setTexture2D(O,0),Ne=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);let oe=U.getParameter(U.UNPACK_ROW_LENGTH),Nn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),or=U.getParameter(U.UNPACK_SKIP_PIXELS),Ln=U.getParameter(U.UNPACK_SKIP_ROWS),Po=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ee.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ee.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,It),U.pixelStorei(U.UNPACK_SKIP_ROWS,Bt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Dt);let Le=E.isDataArrayTexture||E.isData3DTexture,Kn=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){let Jn=ot.get(E),vn=ot.get(O),En=ot.get(Jn.__renderTarget),Wf=ot.get(vn.__renderTarget);K.bindFramebuffer(U.READ_FRAMEBUFFER,En.__webglFramebuffer),K.bindFramebuffer(U.DRAW_FRAMEBUFFER,Wf.__webglFramebuffer);for(let ps=0;ps<xt;ps++)Le&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ot.get(E).__webglTexture,B,Dt+ps),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ot.get(O).__webglTexture,it,Oe+ps)),U.blitFramebuffer(It,Bt,gt,Mt,ne,me,gt,Mt,U.DEPTH_BUFFER_BIT,U.NEAREST);K.bindFramebuffer(U.READ_FRAMEBUFFER,null),K.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(B!==0||E.isRenderTargetTexture||ot.has(E)){let Jn=ot.get(E),vn=ot.get(O);K.bindFramebuffer(U.READ_FRAMEBUFFER,$S),K.bindFramebuffer(U.DRAW_FRAMEBUFFER,tM);for(let En=0;En<xt;En++)Le?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Jn.__webglTexture,B,Dt+En):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Jn.__webglTexture,B),Kn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,vn.__webglTexture,it,Oe+En):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,vn.__webglTexture,it),B!==0?U.blitFramebuffer(It,Bt,gt,Mt,ne,me,gt,Mt,U.COLOR_BUFFER_BIT,U.NEAREST):Kn?U.copyTexSubImage3D(Ne,it,ne,me,Oe+En,It,Bt,gt,Mt):U.copyTexSubImage2D(Ne,it,ne,me,It,Bt,gt,Mt);K.bindFramebuffer(U.READ_FRAMEBUFFER,null),K.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Kn?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Ne,it,ne,me,Oe,gt,Mt,xt,_e,Nt,Ee.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Ne,it,ne,me,Oe,gt,Mt,xt,_e,Ee.data):U.texSubImage3D(Ne,it,ne,me,Oe,gt,Mt,xt,_e,Nt,Ee):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,it,ne,me,gt,Mt,_e,Nt,Ee.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,it,ne,me,Ee.width,Ee.height,_e,Ee.data):U.texSubImage2D(U.TEXTURE_2D,it,ne,me,gt,Mt,_e,Nt,Ee);U.pixelStorei(U.UNPACK_ROW_LENGTH,oe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Nn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,or),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ln),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Po),it===0&&O.generateMipmaps&&U.generateMipmap(Ne),K.unbindTexture()},this.initRenderTarget=function(E){ot.get(E).__webglFramebuffer===void 0&&yt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?yt.setTextureCube(E,0):E.isData3DTexture?yt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?yt.setTexture2DArray(E,0):yt.setTexture2D(E,0),K.unbindTexture()},this.resetState=function(){w=0,A=0,D=null,K.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),n.unpackColorSpace=re._getUnpackColorSpace()}};var jg=7,vc={active:5826259,faulty:16740741,offline:7504282},MR=["KPU Pusat","Bawaslu","Komdigi","Universitas A","Universitas B","Auditor A","Auditor B"];function Ei(e,t={}){return new Je({color:e,roughness:.74,metalness:.06,...t})}function Gf({statuses:e,onToggleNode:t}){let n=(0,fs.useRef)(null),i=(0,fs.useRef)(t),a=(0,fs.useRef)(e);return i.current=t,a.current=e,(0,fs.useEffect)(()=>{let s=n.current;if(!s)return;let r;try{r=new Io({antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{s.dataset.webgl="unavailable";return}let o=new Ws;o.fog=new Xs(527639,.035);let l=new Ke(38,1,.1,80);l.position.set(0,4.9,12.6),l.lookAt(0,.55,0),r.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),r.setClearColor(0,0),r.outputColorSpace=hn,s.appendChild(r.domElement),o.add(new Js(10078207,1516602,2));let c=new Qs(8450789,2.7);c.position.set(-4,8,6),o.add(c);let f=new Pi(16760173,28,16);f.position.set(0,3.8,1),o.add(f);let d=new Pi(5537023,24,20);d.position.set(5,-1,-4),o.add(d);let h=[],p=17,v=()=>(p=p*16807%2147483647,(p-1)/2147483646);for(let F=0;F<150;F++)h.push((v()-.5)*24,v()*12-1,-5-v()*11);let x=new qe;x.setAttribute("position",new ye(h,3)),o.add(new ec(x,new Mo({color:10205658,size:.025,transparent:!0,opacity:.65})));let m=new fn;o.add(m);let u=new oc(3.8,2),g=u.attributes.position;for(let F=0;F<g.count;F++){let W=g.getX(F),ct=g.getY(F),K=g.getZ(F),pt=1+.055*Math.sin(W*7+K*3)*Math.cos(ct*6-K*4);g.setXYZ(F,W*pt,ct*pt*.22,K*pt*.86)}u.computeVertexNormals();let _=new Lt(u,Ei(2372426,{flatShading:!0,roughness:1}));_.position.y=-.95,m.add(_);let y=new Lt(new Sn(3.65,3.15,.38,10,1),Ei(2505803,{flatShading:!0}));y.position.y=-.28,m.add(y);let T=new Lt(new Sn(3.64,3.64,.13,10),Ei(3232840,{roughness:.94}));T.position.y=-.06,m.add(T);let w=new Lt(new ac(3.58,10),new Je({color:2705471,roughness:1,side:ui}));w.rotation.x=-Math.PI/2,w.position.y=.012,m.add(w);let A=new Lt(new Si(4,.012,6,96),new We({color:5627599,transparent:!0,opacity:.34}));A.rotation.x=Math.PI/2,A.position.y=-.16,m.add(A);let D=new fn;m.add(D);let M=new Lt(new Sn(1.1,1.25,.16,8),Ei(2505296,{metalness:.22}));M.position.y=.1,D.add(M);let S=Ei(1321785,{emissive:743502,emissiveIntensity:.62,metalness:.35,roughness:.28}),N=[];for(let F=0;F<3;F++){let W=new Lt(new sn(.88-F*.09,.32,.68),S.clone());W.position.set(F%2?.08:-.08,.37+F*.34,0),W.rotation.y=(F-1)*.13,D.add(W),N.push(W)}let P=new Lt(new Si(1.02,.016,6,64),new We({color:6403327,transparent:!0,opacity:.78}));P.rotation.x=Math.PI/2,P.position.y=.19,D.add(P);let k=[],X=[];for(let F=0;F<jg;F++){let W=Math.PI*2*F/jg-Math.PI/2,ct=new L(Math.cos(W)*2.82,.06,Math.sin(W)*2.45);X.push(ct);let K=new fn;K.position.copy(ct),m.add(K);let pt=new Lt(new Sn(.4,.46,.14,6),Ei(3229787));pt.position.y=.1,K.add(pt);let ot=new Lt(new sn(.42,.48,.37),Ei(3229530));ot.position.y=.39,K.add(ot);let yt=new Lt(new Ys(.38,.25,5),Ei(vc.active,{emissive:vc.active,emissiveIntensity:.15,roughness:.45}));yt.position.y=.76,yt.rotation.y=Math.PI/5,K.add(yt);let Kt=Ei(7727323,{emissive:3323562,emissiveIntensity:.8,roughness:.3});for(let b=0;b<2;b++){let z=new Lt(new sn(.07,.12,.025),Kt);z.position.set(b?.11:-.11,.42,.196),K.add(z)}let jt=new Lt(new os(.51,12,10),new We({transparent:!0,opacity:0,depthWrite:!1}));jt.position.y=.44,jt.userData.nodeIndex=F,K.add(jt);let C=new Lt(new Si(.5,.013,5,28),new We({color:F===0?16762731:vc.active,transparent:!0,opacity:F===0?.88:.42}));C.position.y=.45,C.rotation.x=Math.PI/2,K.add(C),k.push({station:K,roof:yt,halo:C,hit:jt})}let Y=new fn;Y.position.set(.22,.02,3.78),Y.rotation.y=-.12,m.add(Y);let q=new Lt(new sn(.7,.16,.55),Ei(3426138));q.position.y=.08,Y.add(q);let at=new Lt(new sn(.44,.58,.2),Ei(1846850,{metalness:.2}));at.position.y=.43,Y.add(at);let G=new Lt(new ga(.29,.3),new We({color:5432276}));G.position.set(0,.48,.107),Y.add(G);let lt=new Lt(new Zs(.11,0),new We({color:13041653}));m.add(lt);let dt=new rs({color:6477775,transparent:!0,opacity:.38});X.forEach(F=>{let W=[new L(0,.17,0),new L(F.x,F.y+.18,F.z)];m.add(new qs(new qe().setFromPoints(W),dt))});let Et=[];for(let F=0;F<7;F++){let W=new Lt(new os(.035,8,8),new We({color:F===0?16767373:11862005}));m.add(W),Et.push(W)}let Ft=new js,ee=new kt,se=!1,Yt=!1,J={x:0,y:0},tt=0,_t=()=>{let F=Math.max(1,s.clientWidth),W=Math.max(250,s.clientHeight);r.setSize(F,W,!1),l.aspect=F/W,l.position.z=F<500?14.8:F<820?13.7:12.6,l.lookAt(0,.55,0),l.updateProjectionMatrix()},Ut=F=>{se=!0,Yt=!1,J={x:F.clientX,y:F.clientY},r.domElement.setPointerCapture(F.pointerId)},bt=F=>{if(!se)return;let W=F.clientX-J.x,ct=F.clientY-J.y;Math.abs(W)+Math.abs(ct)>2&&(Yt=!0),m.rotation.y+=W*.006,m.rotation.x=Ug.clamp(m.rotation.x+ct*.0025,-.2,.2),J={x:F.clientX,y:F.clientY}},Gt=F=>{if(se&&!Yt){let W=r.domElement.getBoundingClientRect();ee.x=(F.clientX-W.left)/W.width*2-1,ee.y=-((F.clientY-W.top)/W.height)*2+1,Ft.setFromCamera(ee,l);let ct=Ft.intersectObjects(k.map(K=>K.hit),!1)[0];ct&&i.current(ct.object.userData.nodeIndex)}se=!1};r.domElement.addEventListener("pointerdown",Ut),r.domElement.addEventListener("pointermove",bt),r.domElement.addEventListener("pointerup",Gt),r.domElement.addEventListener("pointercancel",Gt);let Ie=new ResizeObserver(_t);Ie.observe(s),_t();let U=()=>{tt=requestAnimationFrame(U);let F=performance.now()*.001;m.rotation.y+=se?0:65e-5,m.position.y=Math.sin(F*.7)*.09,D.position.y=Math.sin(F*1.3)*.035,P.rotation.z+=.003,N.forEach((ct,K)=>{ct.material.emissiveIntensity=.55+Math.sin(F*1.8+K)*.16});let W=F*.15%1;lt.position.set(.22*(1-W),.62+Math.sin(F*3)*.045,3.78*(1-W)),Et.forEach((ct,K)=>{let pt=(F*.12+K/jg)%1,ot=X[K];ct.position.set(ot.x*(1-pt),.28+.12*Math.sin(pt*Math.PI),ot.z*(1-pt))}),k.forEach(({roof:ct,halo:K},pt)=>{let ot=a.current[pt]??"active",yt=ot==="active"?pt===0?16762731:vc.active:vc[ot];ct.material.color.setHex(yt),ct.material.emissive.setHex(yt),ct.material.emissiveIntensity=ot==="active"?.24+Math.sin(F*2+pt)*.1:.06,K.material.color.setHex(yt),K.material.opacity=ot==="active"?.55+Math.sin(F*2+pt)*.12:.8}),r.render(o,l)};return U(),()=>{cancelAnimationFrame(tt),Ie.disconnect(),r.domElement.removeEventListener("pointerdown",Ut),r.domElement.removeEventListener("pointermove",bt),r.domElement.removeEventListener("pointerup",Gt),r.domElement.removeEventListener("pointercancel",Gt),o.traverse(F=>{F.geometry?.dispose(),Array.isArray(F.material)?F.material.forEach(W=>W.dispose()):F.material?.dispose()}),r.dispose(),r.domElement.remove()}},[]),fs.default.createElement("div",{className:"three-scene",ref:n,role:"img","aria-label":`Pulau jaringan VoteChain dengan tujuh validator: ${MR.join(", ")}. Seret untuk memutar dan pilih stasiun untuk mengubah kondisinya.`})}var zt=bc(ur(),1);var ER=["KPU","Bawaslu","Komdigi","Kampus A","Kampus B","Audit A","Audit B"],yc={active:5628882,faulty:16740741,offline:7701659},rr=[{title:"Periksa kelayakan",icon:"\u25C9"},{title:"Terbitkan credential",icon:"\u25C7"},{title:"Kirim ballot rahasia",icon:"\u25A3"},{title:"Sepakati dengan PBFT",icon:"\u2318"},{title:"Catat ke ledger",icon:"\u25A4"},{title:"Hitung & audit hasil",icon:"\u25EB"}];function TR({stage:e,statuses:t,onToggle:n}){let i=(0,zt.useRef)(null),a=(0,zt.useRef)(e),s=(0,zt.useRef)(t),r=(0,zt.useRef)(n);return a.current=e,s.current=t,r.current=n,(0,zt.useEffect)(()=>{let o=i.current;if(!o)return;let l;try{l=new Io({antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{o.dataset.webgl="unavailable";return}let c=new Ws;c.fog=new Xs(528669,.038);let f=new Ke(37,1,.1,80);f.position.set(0,8.6,13.4),f.lookAt(0,.35,0),l.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),l.setClearColor(0,0),l.outputColorSpace=hn,o.appendChild(l.domElement),c.add(new Js(10930159,1780020,1.85));let d=new Qs(10156009,2.7);d.position.set(-5,9,7),c.add(d);let h=new Pi(16760171,30,11);h.position.set(-4.1,2.1,.6),c.add(h);let p=new Pi(5692106,45,8);p.position.set(0,2.4,0),c.add(p);let v=new Pi(7707391,22,8);v.position.set(4.1,2.1,-.2),c.add(v);let x=new fn;c.add(x);let m=new Lt(new Sn(5.7,5.25,.42,12),new Je({color:1649463,roughness:.76,metalness:.12}));m.position.y=-.28,x.add(m);let u=new Lt(new Sn(5.58,5.58,.09,12),new Je({color:1981501,roughness:.9}));u.position.y=-.025,x.add(u);let g=new Lt(new Si(5.57,.018,5,100),new We({color:6152401,transparent:!0,opacity:.4}));g.rotation.x=Math.PI/2,g.position.y=.015,x.add(g);let _=[],y=(F,W,ct,K)=>{let pt=new fn;pt.position.set(F,.02,W),x.add(pt);let ot=new Lt(new Sn(.55,.63,.16,8),new Je({color:2900820,roughness:.55}));ot.position.y=.08,pt.add(ot);let yt=new Lt(new sn(.56,.66,.4),new Je({color:2242634,metalness:.16,roughness:.42}));yt.position.y=.48,pt.add(yt);let Kt=new Lt(new ga(K==="result"?.68:.3,K==="result"?.47:.35),new We({color:ct,transparent:!0,opacity:.78}));Kt.position.set(0,K==="result"?.55:.51,.205),pt.add(Kt);let jt=new Lt(new sn(.68,.08,.48),new Je({color:ct,emissive:ct,emissiveIntensity:.17,roughness:.4}));return jt.position.y=.86,pt.add(jt),{group:pt,panel:Kt,cap:jt}},T=y(-4,-.45,16762731,"identity"),w=y(-4.18,2.05,7445759,"voter"),A=y(4.06,-.55,7184895,"result"),D=[];for(let F=0;F<3;F++){let W=new Lt(new sn(.1,.2,.035),new We({color:[5826259,7904511,16762731][F],transparent:!0,opacity:0}));W.position.set(3.83+F*.22,.5,.218),x.add(W),D.push(W)}let M=[],S=[],N=[];for(let F=0;F<7;F++){let W=Math.PI*2*F/7-Math.PI/2,ct=new L(Math.cos(W)*2.62,.02,Math.sin(W)*2.32);M.push(ct);let K=new fn;K.position.copy(ct),x.add(K);let pt=new Lt(new Sn(.33,.39,.14,6),new Je({color:3295063}));pt.position.y=.09,K.add(pt);let ot=new Lt(new sn(.39,.43,.33),new Je({color:2571597,roughness:.48}));ot.position.y=.37,K.add(ot);let yt=new Lt(new Ys(.34,.23,5),new Je({color:yc.active,emissive:yc.active,emissiveIntensity:.2,roughness:.44}));yt.position.y=.7,K.add(yt);let Kt=new Lt(new Si(.43,.014,5,28),new We({color:yc.active,transparent:!0,opacity:.42}));Kt.position.y=.41,Kt.rotation.x=Math.PI/2,K.add(Kt);let jt=new Lt(new os(.48,10,8),new We({transparent:!0,opacity:0,depthWrite:!1}));jt.position.y=.4,jt.userData.index=F,K.add(jt),S.push({group:K,roof:yt,halo:Kt}),N.push(jt)}let P=new fn;P.position.set(0,0,0),x.add(P);let k=new Lt(new Sn(.88,1.02,.14,8),new Je({color:3493979,metalness:.2}));k.position.y=.12,P.add(k);let X=[];for(let F=0;F<5;F++){let W=new Lt(new sn(.62,.25,.52),new Je({color:1587523,emissive:1809290,emissiveIntensity:.48,metalness:.26,roughness:.33}));W.position.set(F%2?.12:-.12,.34+F*.29,0),W.rotation.y=F%2?-.08:.08,P.add(W),X.push(W)}let Y=new Lt(new Si(.97,.016,5,64),new We({color:6670335,transparent:!0,opacity:.7}));Y.rotation.x=Math.PI/2,Y.position.y=.2,P.add(Y);let q=[],at=new rs({color:6019790,transparent:!0,opacity:.22}),G=(F,W)=>{let ct=new rc(new L(F.x,.23,F.z),new L((F.x+W.x)/2,.88,(F.z+W.z)/2),new L(W.x,.25,W.z)),K=ct.getPoints(32),pt=new qs(new qe().setFromPoints(K),at.clone());x.add(pt),q.push({curve:ct,line:pt})};G(new L(-4,0,-.45),new L(-4.18,0,2.05)),G(new L(-4.18,0,2.05),M[0]),M.forEach(F=>G(F,new L(0,0,0))),G(new L(0,0,0),new L(4.06,0,-.55));let lt=new Lt(new Zs(.13,0),new Je({color:14024696,emissive:5628882,emissiveIntensity:1.2,metalness:.12}));x.add(lt);let dt=new Lt(new sc(.16,0),new Je({color:16766346,emissive:16756040,emissiveIntensity:1.1,metalness:.3}));x.add(dt);let Et=new js,Ft=new kt,ee=!1,se=!1,Yt={x:0,y:0},J=0,tt=()=>{let F=Math.max(o.clientWidth,1),W=Math.max(o.clientHeight,260);l.setSize(F,W,!1),f.aspect=F/W,f.position.set(0,F<560?10.5:8.6,F<560?16.5:13.4),f.lookAt(0,.35,0),f.updateProjectionMatrix()},_t=F=>{ee=!0,se=!1,Yt={x:F.clientX,y:F.clientY},l.domElement.setPointerCapture(F.pointerId)},Ut=F=>{ee&&(Math.abs(F.clientX-Yt.x)+Math.abs(F.clientY-Yt.y)>4&&(se=!0),x.rotation.y+=(F.clientX-Yt.x)*8e-4,Yt={x:F.clientX,y:F.clientY})},bt=F=>{if(ee&&!se){let W=l.domElement.getBoundingClientRect();Ft.set((F.clientX-W.left)/W.width*2-1,-((F.clientY-W.top)/W.height)*2+1),Et.setFromCamera(Ft,f);let ct=Et.intersectObjects(N,!1)[0];ct&&r.current(ct.object.userData.index)}ee=!1};l.domElement.addEventListener("pointerdown",_t),l.domElement.addEventListener("pointermove",Ut),l.domElement.addEventListener("pointerup",bt),l.domElement.addEventListener("pointercancel",bt);let Gt=new ResizeObserver(tt);Gt.observe(o),tt();let Ie=(F,W)=>{F.visible=W},U=()=>{J=requestAnimationFrame(U);let F=performance.now()*.001,W=a.current,ct=W===3?F*.9%1:0;if(x.position.y=Math.sin(F*.65)*.045,x.rotation.y+=ee?0:Math.sin(F*.18)*8e-5,Y.rotation.z+=.004,T.cap.material.emissiveIntensity=W===0?.55+Math.sin(F*4)*.35:.12,w.cap.material.emissiveIntensity=W===2?.7+Math.sin(F*5)*.25:.13,A.cap.material.emissiveIntensity=W===5?.65+Math.sin(F*3)*.25:.12,Ie(dt,W===1),W===1&&(dt.position.set(-4.02+Math.sin(F*1.6)*.13,1.2+Math.sin(F*2)*.1,.35),dt.rotation.y+=.025),Ie(lt,W===2||W===3),W===2){let K=F*.19%1;lt.position.set(-4.1+4.1*K,.8+Math.sin(K*Math.PI)*.85,2.05*(1-K)),lt.rotation.x+=.035,lt.rotation.y+=.045}else if(W===3){let K=M[0];lt.position.set(K.x*(1-ct),.7+Math.sin(ct*Math.PI)*.55,K.z*(1-ct)),lt.rotation.y+=.05}X.forEach((K,pt)=>{let ot=s.current.filter(Kt=>Kt!=="active").length>=3,yt=W>=4&&!ot?4:W===3&&!ot&&pt<2?2:0;K.visible=pt<yt,K.material.emissiveIntensity=.38+Math.sin(F*1.8+pt)*.1}),q.forEach(({line:K},pt)=>{let ot=W===0||W===1?pt===0:W===2?pt===1:W===3?pt>=2&&pt<=8:W>=4?pt===9:!1;K.material.opacity=ot?.78+Math.sin(F*5+pt)*.18:.14,K.material.color.setHex(ot?W===3?16762731:6678999:4744054)}),S.forEach(({group:K,roof:pt,halo:ot},yt)=>{let Kt=s.current[yt],jt=Kt==="faulty",C=Kt==="active"?yc.active:yc[Kt];W===3&&Kt==="active"&&yt/7<=ct&&(C=7987876),pt.material.color.setHex(C),pt.material.emissive.setHex(C),pt.material.emissiveIntensity=Kt==="active"?.18+(W===3?Math.sin(F*8+yt)*.45+.5:Math.sin(F*2+yt)*.1):.04,ot.material.color.setHex(jt?16740741:C),ot.material.opacity=Kt==="active"?.45+Math.sin(F*2+yt)*.1:.82,K.position.y=.02+(Kt==="active"?Math.sin(F*1.6+yt)*.035:0)}),D.forEach((K,pt)=>{let ot=W===5;K.material.opacity+=((ot?.9:0)-K.material.opacity)*.06,K.visible=K.material.opacity>.025;let yt=[.37,.23,.16];K.scale.y=yt[pt]/.2,K.position.y=.28+yt[pt]/2}),l.render(c,f)};return U(),()=>{cancelAnimationFrame(J),Gt.disconnect(),l.domElement.removeEventListener("pointerdown",_t),l.domElement.removeEventListener("pointermove",Ut),l.domElement.removeEventListener("pointerup",bt),l.domElement.removeEventListener("pointercancel",bt),c.traverse(F=>{F.geometry?.dispose(),Array.isArray(F.material)?F.material.forEach(W=>W.dispose()):F.material?.dispose()}),l.dispose(),l.domElement.remove()}},[]),zt.default.createElement("div",{className:"demo-canvas",ref:i,role:"img","aria-label":"Animasi 3D demo proses pemilihan VoteChain"})}function $g(){let[e,t]=(0,zt.useState)(-1),[n,i]=(0,zt.useState)(!1),[a,s]=(0,zt.useState)(Array(7).fill("active")),r=a.filter(v=>v!=="active").length;(0,zt.useEffect)(()=>{if(r>=3&&e>=3){n&&i(!1),e>3&&t(3);return}if(!n)return;let v=window.setTimeout(()=>{e>=rr.length-1?i(!1):t(x=>x+1)},2850);return()=>window.clearTimeout(v)},[n,e,r]);let o=v=>s(x=>x.map((m,u)=>u!==v?m:m==="active"?"faulty":m==="faulty"?"offline":"active")),l=()=>{(e<0||e===rr.length-1)&&t(0),i(!0)},c=()=>{i(!1),t(-1),s(Array(7).fill("active"))},f=()=>{i(!1),t(v=>Math.min(rr.length-1,Math.max(0,v+1)))},d=()=>{i(!1),t(v=>Math.max(0,v-1))},h=Math.max(e,0),p=r>=3&&e>=3;return zt.default.createElement("section",{className:"demo-game","aria-label":"Demo animasi sistem VoteChain"},zt.default.createElement("div",{className:"demo-head"},zt.default.createElement("div",null,zt.default.createElement("div",{className:"demo-eyebrow"},"DEMO INTERAKTIF \xB7 3D"),zt.default.createElement("h2",null,e<0?"Satu suara melewati jaringan.":p?"Quorum terputus.":rr[h].title+".")),zt.default.createElement("div",{className:"demo-count"},e<0?"SIAP":`0${h+1} / 06`)),zt.default.createElement("div",{className:"demo-stage-wrap"},zt.default.createElement(TR,{stage:e,statuses:a,onToggle:o}),zt.default.createElement("div",{className:"demo-actor-tag tag-identity"},zt.default.createElement("span",null,"\u25C9")," IDENTITAS"),zt.default.createElement("div",{className:"demo-actor-tag tag-voter"},zt.default.createElement("span",null,"\u25A3")," PEMILIH"),zt.default.createElement("div",{className:"demo-actor-tag tag-ledger"},zt.default.createElement("span",null,"\u25C8")," LEDGER"),zt.default.createElement("div",{className:"demo-actor-tag tag-result"},zt.default.createElement("span",null,"\u25EB")," HASIL"),zt.default.createElement("div",{className:`demo-toast ${p?"warning":""}`},e<0?"Putar pulau \xB7 klik validator \xB7 jalankan alur":p?"3 node bermasalah \xB7 di luar asumsi PBFT":rr[h].icon+"  "+rr[h].title)),zt.default.createElement("div",{className:"demo-footer"},zt.default.createElement("div",{className:"demo-timeline","aria-label":"Tahap demo"},rr.map((v,x)=>zt.default.createElement("button",{key:v.title,className:x===e?"selected":x<e?"passed":"","aria-label":`Tahap ${x+1}: ${v.title}`,disabled:r>=3&&x>3,onClick:()=>{i(!1),t(x)}}))),zt.default.createElement("div",{className:"demo-controls"},zt.default.createElement("button",{className:"demo-icon-button",onClick:d,"aria-label":"Tahap sebelumnya",disabled:e<=0},"\u2190"),zt.default.createElement("button",{className:"demo-play-button",onClick:n?()=>i(!1):l,disabled:!n&&p},n?"\u2161  Jeda":p?"Perbaiki node dahulu":e<0||e===5?"\u25B6  Jalankan demo":"\u25B6  Lanjutkan"),zt.default.createElement("button",{className:"demo-icon-button",onClick:f,"aria-label":"Tahap berikutnya",disabled:e>=5||p},"\u2192"),zt.default.createElement("button",{className:"demo-reset",onClick:c},"Reset \u21BA"))),zt.default.createElement("div",{className:"demo-node-strip"},zt.default.createElement("span",{className:"strip-hint"},"Klik node 3D atau tombol untuk mengubah kondisi:"),ER.map((v,x)=>zt.default.createElement("button",{key:v,onClick:()=>o(x),className:`demo-node-pill ${a[x]}`},zt.default.createElement("i",null),v)),zt.default.createElement("span",{className:`fault-counter ${r>=3?"over":""}`},r,"/7 gangguan")))}var AR=["Pertama, Mark Justin Gunawan \u2014 2410101017","Kedua, Nicolas Julian Kurnia P \u2014 2410101011","Ketiga, Bentley Arshavin \u2014 2410101006"],t0=Array.from({length:7},(e,t)=>({name:["KPU Pusat","Bawaslu","Komdigi","Universitas A","Universitas B","Auditor A","Auditor B"][t],status:"active"})),qS={active:"Aktif",faulty:"Byzantine",offline:"Mati"},YS=["Pre-prepare","Prepare","Commit"];function wR(){let[e,t]=(0,R.useState)(t0),[n,i]=(0,R.useState)(-1),a=e.filter(d=>d.status!=="active").length,s=3*a+1,r=s<=e.length,o=e.filter(d=>d.status==="active").length,l=d=>t(h=>h.map((p,v)=>v===d?{...p,status:p.status==="active"?"faulty":p.status==="faulty"?"offline":"active"}:p)),c=()=>{t(t0),i(-1)},f=()=>document.querySelector("#simulasi")?.scrollIntoView({behavior:"smooth"});return R.default.createElement(R.default.Fragment,null,R.default.createElement("header",{className:"topbar"},R.default.createElement("a",{className:"wordmark",href:"#top"},R.default.createElement("span",{className:"mark"},"\u25C8")," VoteChain"),R.default.createElement("nav",{"aria-label":"Navigasi halaman"},R.default.createElement("a",{href:"#rancangan"},"Rancangan"),R.default.createElement("a",{href:"#konsensus"},"Konsensus"),R.default.createElement("a",{href:"#aktor"},"Aktor"),R.default.createElement("a",{href:"#privasi"},"Privasi"),R.default.createElement("a",{href:"#risiko"},"Risiko")),R.default.createElement("button",{className:"top-cta",onClick:f},"Masuk ke game ",R.default.createElement("span",null,"\u2197"))),R.default.createElement("main",{id:"top"},R.default.createElement("section",{className:"hero wrap"},R.default.createElement("div",{className:"hero-copy"},R.default.createElement("div",{className:"eyebrow"},R.default.createElement("span",{className:"live-dot"})," RANCANGAN EDUKATIF \xB7 E-VOTING INDONESIA"),R.default.createElement("h1",null,"Suara tercatat.",R.default.createElement("br",null),R.default.createElement("em",null,"Kepercayaan")," dibagi."),R.default.createElement("p",{className:"hero-lead"},"VoteChain adalah rancangan pemilihan digital berbasis permissioned blockchain. Validator dari domain berbeda menyepakati catatan yang sama, sementara pilihan pemilih tetap terlindungi."),R.default.createElement("div",{className:"hero-actions"},R.default.createElement("button",{className:"button primary",onClick:f},"Jelajahi simulasi ",R.default.createElement("span",null,"\u2193")),R.default.createElement("a",{className:"button ghost",href:"#rancangan"},"Lihat arsitektur")),R.default.createElement("div",{className:"micro-proof"},R.default.createElement("span",null,"\u25C9")," 7 seat validator ",R.default.createElement("b",null,"\xB7")," PBFT ",R.default.createElement("b",null,"\xB7")," finalitas bersama"),R.default.createElement("div",{className:"teamline"},AR.map(d=>R.default.createElement("span",{key:d},d)))),R.default.createElement("div",{className:"hero-visual"},R.default.createElement("div",{className:"visual-glow"}),R.default.createElement(Gf,{statuses:e.map(d=>d.status),onToggleNode:l}),R.default.createElement("div",{className:"visual-caption"},R.default.createElement("span",{className:"legend-dot mint"})," ledger bersama ",R.default.createElement("span",{className:"legend-dot amber"})," leader PBFT"),R.default.createElement("div",{className:"floating-label label-top"},R.default.createElement("span",null,"\u25C8")," Konsensus aktif ",R.default.createElement("b",null,o,"/7")),R.default.createElement("div",{className:"floating-label label-bottom"},R.default.createElement("span",{className:"signal"})," Jaringan permissioned ",R.default.createElement("small",null,"seret untuk putar \xB7 klik node")))),R.default.createElement("section",{className:"disclaimer wrap"},R.default.createElement("b",null,"Rancangan kelompok, bukan sistem resmi.")," Nama VoteChain juga digunakan karya lain. Ini usulan konseptual untuk presentasi, bukan klaim sebagai karya pertama atau aplikasi pemilu siap pakai. ",R.default.createElement("a",{href:"#referensi"},"Lihat referensi \u2197")),R.default.createElement("section",{className:"section wrap",id:"rancangan"},R.default.createElement("div",{className:"section-head"},R.default.createElement("div",null,R.default.createElement("div",{className:"eyebrow"},"01 / MASALAH & SOLUSI"),R.default.createElement("h2",null,"Satu hasil. Banyak pihak yang perlu percaya.")),R.default.createElement("p",null,"Blockchain tidak otomatis wajib. Ia menarik saat beberapa lembaga perlu memeriksa riwayat bersama tanpa satu operator menguasai satu-satunya catatan.")),R.default.createElement("div",{className:"compare-grid"},R.default.createElement("article",{className:"compare-card muted-card"},R.default.createElement("div",{className:"card-icon"},"\u25A4"),R.default.createElement("div",{className:"eyebrow"},"DATABASE TERPUSAT"),R.default.createElement("h3",null,"Satu operator memegang catatan utama"),R.default.createElement("p",null,"Lebih sederhana untuk dikelola, tetapi audit dan pemulihan bergantung pada kontrol, log, serta prosedur operator tersebut."),R.default.createElement("div",{className:"thin-rule"}),R.default.createElement("div",{className:"compare-foot"},R.default.createElement("span",null,"Titik kendali"),R.default.createElement("b",null,"Satu organisasi"))),R.default.createElement("article",{className:"compare-card chain-card"},R.default.createElement("div",{className:"card-icon"},"\u25C8"),R.default.createElement("div",{className:"eyebrow"},"PERMISSIONED LEDGER"),R.default.createElement("h3",null,"Catatan disepakati lintas institusi"),R.default.createElement("p",null,"Validator berizin menyimpan salinan dan menyepakati urutan transaksi. Perubahan riwayat lama dapat dibandingkan dan diaudit."),R.default.createElement("div",{className:"thin-rule"}),R.default.createElement("div",{className:"compare-foot"},R.default.createElement("span",null,"Titik kendali"),R.default.createElement("b",null,"Aturan + beberapa validator"))),R.default.createElement("article",{className:"why-card"},R.default.createElement("div",{className:"eyebrow"},"KENAPA BUKAN DATABASE SAJA?"),R.default.createElement("h3",null,"Ketika kepercayaan harus dibagi."),R.default.createElement("p",null,"Jika satu pengelola tepercaya sudah memadai, database biasa bisa lebih murah dan mudah. VoteChain mengeksplorasi kebutuhan audit bersama dan checks and balances."),R.default.createElement("a",{href:"#simulasi"},"Lihat demo VoteChain ",R.default.createElement("span",null,"\u2192"))))),R.default.createElement("section",{className:"section dark-section",id:"konsensus"},R.default.createElement("div",{className:"wrap"},R.default.createElement("div",{className:"section-head"},R.default.createElement("div",null,R.default.createElement("div",{className:"eyebrow"},"02 / ALGORITMA KONSENSUS"),R.default.createElement("h2",null,"PBFT: sepakat tanpa mining.")),R.default.createElement("p",null,"Jaringan mengenal para validator. Pada tujuh seat, PBFT dirancang menoleransi hingga dua node Byzantine\u2014dengan asumsi independensi dan jaringan yang memadai.")),R.default.createElement("div",{className:"consensus-layout"},R.default.createElement("div",{className:"scene-panel"},R.default.createElement("div",{className:"scene-label"},R.default.createElement("span",{className:"live-dot"})," SIMULATOR 3D \xB7 7 VALIDATOR ",R.default.createElement("span",{className:"drag-hint"},"seret untuk putar")),R.default.createElement(Gf,{statuses:e.map(d=>d.status),onToggleNode:l}),R.default.createElement("div",{className:"scene-controls"},e.map((d,h)=>R.default.createElement("button",{className:`node-control ${d.status}`,onClick:()=>l(h),key:d.name,"aria-label":`${d.name}: ${qS[d.status]}. Klik untuk ubah kondisi.`},R.default.createElement("span",{className:"node-index"},"0",h+1),R.default.createElement("span",{className:"node-name"},d.name),R.default.createElement("b",null,qS[d.status])))),R.default.createElement("div",{className:"scene-bottom"},R.default.createElement("span",null,a," node bermasalah"),R.default.createElement("button",{onClick:c},"Reset node \u21BA"))),R.default.createElement("div",{className:"consensus-aside"},R.default.createElement("div",{className:"eyebrow"},"BATAS TOLERANSI"),R.default.createElement("div",{className:"formula"},"n \u2265 3f + 1"),R.default.createElement("div",{className:`formula-result ${r?"safe":"unsafe"}`},"7 ",r?"\u2265":"<"," ",s," ",R.default.createElement("span",null,r?"\u2713 dalam batas asumsi":"\xD7 di luar jaminan PBFT")),R.default.createElement("div",{className:"quorum-row"},R.default.createElement("div",null,R.default.createElement("strong",null,"2f+1"),R.default.createElement("small",null,"kuorum commit")),R.default.createElement("div",{className:"quorum-dots"},Array.from({length:7},(d,h)=>R.default.createElement("i",{className:h<5?"quorum-on":"",key:h}))),R.default.createElement("b",null,"5 / 7")),R.default.createElement("p",{className:"explain","aria-live":"polite"},r?`${a} node bermasalah. Dengan f \u2264 2, protokol masih berada dalam batas toleransi teoritis; lima pesan commit diperlukan.`:`${a} node bermasalah. Untuk menoleransi f=${a}, sistem memerlukan n \u2265 ${s}; tujuh node sudah di luar asumsi jaminan PBFT.`),R.default.createElement("div",{className:"phase-list"},YS.map((d,h)=>R.default.createElement("button",{className:`phase-button ${n===h?"current":n>h?"complete":""}`,key:d,onClick:()=>i(h)},R.default.createElement("span",null,"0",h+1),d,n>=h&&R.default.createElement("b",null,"\u2713")))),R.default.createElement("button",{className:"button primary run-phase",onClick:()=>i((n+1)%YS.length)},n<0?"Jalankan fase PBFT":n===2?"Ulangi simulasi":"Fase berikutnya \u2192"),R.default.createElement("p",{className:"fineprint"},"PBFT memberi finalitas cepat dan hemat energi dibanding PoW, tetapi komunikasi meningkat kuadratik seiring jumlah validator. Ini model edukatif, bukan benchmark."))))),R.default.createElement("section",{className:"section wrap",id:"aktor"},R.default.createElement("div",{className:"section-head"},R.default.createElement("div",null,R.default.createElement("div",{className:"eyebrow"},"03 / AKTOR & JARINGAN"),R.default.createElement("h2",null,"Tujuh seat. Lima rumpun kandidat.")),R.default.createElement("p",null,"Komposisi ini hipotesis presentasi. Perlu mandat, tata kelola, serta pemisahan operasi nyata sebelum dapat disebut desain implementasi.")),R.default.createElement("div",{className:"actor-grid"},R.default.createElement("div",{className:"actor-main"},R.default.createElement("div",{className:"seat-map"},t0.map((d,h)=>R.default.createElement("div",{className:"seat",key:d.name},R.default.createElement("span",null,"0",h+1),R.default.createElement("div",null,R.default.createElement("b",null,d.name),R.default.createElement("small",null,h===0?"Penyelenggara":h===1?"Pengawas":h===2?"Infrastruktur digital":h<5?"Rumpun akademik":"Audit independen")),R.default.createElement("i",null,"Validator")))),R.default.createElement("div",{className:"actor-note"},R.default.createElement("b",null,"Catatan kemandirian"),R.default.createElement("span",null,"Dua seat dari satu rumpun hanya dihitung independen bila operator, pendanaan, dan kendali kuncinya memang terpisah."))),R.default.createElement("div",{className:"role-stack"},R.default.createElement("article",null,R.default.createElement("span",{className:"role-symbol mint-text"},"\u25C9"),R.default.createElement("div",null,R.default.createElement("b",null,"Node operasional"),R.default.createElement("p",null,"KPU Provinsi/Daerah/TPS meneruskan proses dan menyimpan replika sesuai akses."))),R.default.createElement("article",null,R.default.createElement("span",{className:"role-symbol blue-text"},"\u2301"),R.default.createElement("div",null,R.default.createElement("b",null,"Sumber kelayakan"),R.default.createElement("p",null,"Dukcapil memeriksa kelayakan lewat jalur terlindungi; identitas mentah tidak masuk ledger."))),R.default.createElement("article",null,R.default.createElement("span",{className:"role-symbol amber-text"},"\u25CE"),R.default.createElement("div",null,R.default.createElement("b",null,"Pengamat & klien"),R.default.createElement("p",null,"Saksi, LSM, dan media memeriksa bukti agregat. Pemilih memakai aplikasi sebagai klien."))),R.default.createElement("article",null,R.default.createElement("span",{className:"role-symbol pink-text"},"\u2696"),R.default.createElement("div",null,R.default.createElement("b",null,"Penyelesaian sengketa"),R.default.createElement("p",null,"MK tetap di luar konsensus agar fungsi adjudikasi tidak bercampur dengan operasi validator.")))))),R.default.createElement("section",{className:"section privacy-section",id:"privasi"},R.default.createElement("div",{className:"wrap"},R.default.createElement("div",{className:"section-head"},R.default.createElement("div",null,R.default.createElement("div",{className:"eyebrow"},"04 / ALUR & PRIVASI SUARA"),R.default.createElement("h2",null,"Buktikan suara sah. Jangan buka pilihan.")),R.default.createElement("p",null,"Identitas dan pilihan harus dipisahkan. Hash saja tidak membuat data anonim; rancangan ini mengusulkan mekanisme kriptografi khusus.")),R.default.createElement("div",{className:"flowline"},[["01","Cek kelayakan","KPU/Dukcapil memeriksa hak pilih di luar ledger."],["02","Kredensial anonim","Penerbit memberi blind signature pada credential satu kali."],["03","Ballot terlindungi","Perangkat mengenkripsi pilihan dan membuat nullifier khusus pemilu."],["04","Proof & validasi","ZKP membuktikan credential sah dan ballot valid tanpa membuka pilihan."],["05","Konsensus PBFT","Validator menolak nullifier ganda dan menyepakati transaksi sah."],["06","Agregat & audit","Kunci ambang membuka hasil agregat; auditor memeriksa bukti."]].map(([d,h,p])=>R.default.createElement("article",{className:"flow-step",key:d},R.default.createElement("span",null,d),R.default.createElement("div",{className:"flow-connector"}),R.default.createElement("h3",null,h),R.default.createElement("p",null,p)))),R.default.createElement("div",{className:"data-boundary"},R.default.createElement("div",null,R.default.createElement("span",{className:"eyebrow"},"ON-CHAIN"),R.default.createElement("p",null,"Ciphertext ballot, nullifier per pemilu, proof validasi, status transaksi, dan agregat audit.")),R.default.createElement("div",{className:"boundary-arrow"},"\u21E2"),R.default.createElement("div",null,R.default.createElement("span",{className:"eyebrow"},"OFF-CHAIN / TERLINDUNGI"),R.default.createElement("p",null,"Identitas Dukcapil, pemetaan pemilih-kredensial, dan kunci rahasia."))),R.default.createElement("div",{className:"concept-warning"},R.default.createElement("span",null,"!"),R.default.createElement("p",null,R.default.createElement("b",null,"Asumsi riset, belum diimplementasikan.")," Blind signature, zero-knowledge proof, dan dekripsi agregat membutuhkan protokol serta pengelolaan kunci yang ditinjau ahli. Demo ini hanya menjelaskan rancangan, bukan membuktikan keamanan kriptografinya.")))),R.default.createElement("section",{className:"section wrap",id:"risiko"},R.default.createElement("div",{className:"section-head"},R.default.createElement("div",null,R.default.createElement("div",{className:"eyebrow"},"05 / RISIKO KEAMANAN"),R.default.createElement("h2",null,"Kontrol membantu. Tidak menjamin.")),R.default.createElement("p",null,"Ancaman paling kritis pada rancangan ini adalah kolusi yang melewati ambang toleransi validator.")),R.default.createElement("div",{className:"risk-grid"},R.default.createElement("article",null,R.default.createElement("span",{className:"risk-number"},"01"),R.default.createElement("div",{className:"eyebrow"},"RISIKO UTAMA"),R.default.createElement("h3",null,"Kolusi > 1/3 validator"),R.default.createElement("p",null,"Untuk n=7, f=2. Tiga validator Byzantine sudah berada di luar jaminan PBFT."),R.default.createElement("b",null,"Respons: seat lintas domain + audit publik"),R.default.createElement("small",null,"Audit membantu deteksi dan akuntabilitas; tidak mengembalikan jaminan konsensus yang sudah terlampaui.")),R.default.createElement("article",null,R.default.createElement("span",{className:"risk-number"},"02"),R.default.createElement("div",{className:"eyebrow"},"KETERSEDIAAN"),R.default.createElement("h3",null,"DoS pada hari-H"),R.default.createElement("p",null,"Trafik serangan atau lonjakan pemilih dapat membuat layanan sulit dijangkau."),R.default.createElement("b",null,"Respons: rate limiting + multi-region"),R.default.createElement("small",null,"Perlu latihan failover, kapasitas cadangan, dan rute layanan alternatif.")),R.default.createElement("article",null,R.default.createElement("span",{className:"risk-number"},"03"),R.default.createElement("div",{className:"eyebrow"},"PRIVASI & PAKSAAN"),R.default.createElement("h3",null,"Coercion / kebocoran"),R.default.createElement("p",null,"Pemilih bisa ditekan atau pilihan terhubung dengan identitas."),R.default.createElement("b",null,"Respons: ballot rahasia + kebijakan re-vote"),R.default.createElement("small",null,"Re-vote bukan solusi tunggal; sistem digital tidak otomatis menghilangkan paksaan di lingkungan pemilih.")),R.default.createElement("article",null,R.default.createElement("span",{className:"risk-number"},"04"),R.default.createElement("div",{className:"eyebrow"},"KELAYAKAN PEMILIH"),R.default.createElement("h3",null,"Identitas palsu / ganda"),R.default.createElement("p",null,"Kredensial tidak sah mencoba membuat lebih dari satu suara."),R.default.createElement("b",null,"Respons: verifikasi kelayakan + nullifier unik"),R.default.createElement("small",null,"Bagikan bukti minimum, bukan NIK atau identitas mentah ke jaringan.")))),R.default.createElement("section",{className:"section sources wrap",id:"referensi"},R.default.createElement("div",null,R.default.createElement("div",{className:"eyebrow"},"CATATAN NAMA & SUMBER"),R.default.createElement("h2",null,"VoteChain adalah nama yang sudah digunakan karya lain."),R.default.createElement("p",null,"Rancangan kelompok ini dibedakan lewat konteks Indonesia, jaringan permissioned, dan argumen PBFT; bukan klaim sebagai proyek pertama.")),R.default.createElement("div",{className:"source-links"},R.default.createElement("a",{href:"https://www.mdpi.com/1999-5903/16/11/388",target:"_blank",rel:"noreferrer"},"VoteChain \xB7 konteks Palestina (2024) ",R.default.createElement("span",null,"\u2197")),R.default.createElement("a",{href:"https://cris.bgu.ac.il/en/publications/eos-blockchain-based-electronic-voting-system/",target:"_blank",rel:"noreferrer"},"VoteChain \xB7 EOS / BRAINS (2024) ",R.default.createElement("span",null,"\u2197")),R.default.createElement("a",{href:"https://link.springer.com/article/10.1007/s43926-026-00471-y",target:"_blank",rel:"noreferrer"},"HCE-VoteChain \xB7 Hyperledger Fabric (2026) ",R.default.createElement("span",null,"\u2197")))),R.default.createElement("section",{className:"game-section",id:"simulasi"},R.default.createElement($g,null))),R.default.createElement("footer",null,R.default.createElement("a",{className:"wordmark",href:"#top"},R.default.createElement("span",{className:"mark"},"\u25C8")," VoteChain"),R.default.createElement("span",null,"Rancangan edukatif kelompok \xB7 Blockchain UTS"),R.default.createElement("a",{href:"#top"},"Kembali ke atas \u2191")))}(0,ZS.createRoot)(document.getElementById("root")).render(R.default.createElement(wR,null));})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
