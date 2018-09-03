if (self.CavalryLogger) { CavalryLogger.start_js(["wkrkr"]); }

__d("AbstractErrorSignal",["invariant","BanzaiODS","ScriptPath","SessionName","SiteData"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=!0;function i(){this.constructor!==i||g(0,undefined)}i.prototype.logJSError=function(a,c){__p&&__p();c=c||{};c.svn_rev=b("SiteData").client_revision;c.push_phase=b("SiteData").push_phase;c.script_path=b("ScriptPath").getScriptPath();c.extra=c.extra||{};c.extra.hrm=b("SiteData").be_mode;var d=c.extra.type||"error";h&&a==="onerror"&&d==="error"&&(c.extra.extra=c.extra.extra||[],c.extra.extra.push("first_error"),h=!1);d=(b("SessionName").getName()||"-")+"/-";this.performCounterLogging("javascript_error");this.performSignalLogging("javascript_error",{c:a,a:d,m:c})};i.prototype.performCounterLogging=function(a){b("BanzaiODS").bumpEntityKey("js_error_reporting","error_signal.category."+a),a==="javascript_error"&&b("BanzaiODS").bumpEntityKey("js_error_reporting","error_signal.sent")};i.prototype.performSignalLogging=function(a,b){g(0,undefined)};e.exports=i}),null);
__d("XJavaScriptLogviewSiteCategory",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({MBASIC:"m_basic",MTOUCH:"m_touch",WWW:"www"})}),null);
__d("ErrorSignal",["AbstractErrorSignal","AsyncSignal","Banzai","BanzaiODS","ErrorSignalConfig","XJavaScriptLogviewSiteCategory","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h,i="js_error_logging";g=babelHelpers.inherits(c,b("AbstractErrorSignal"));h=g&&g.prototype;c.prototype.performCounterLogging=function(a){h.performCounterLogging.call(this,a),a==="javascript_error"&&b("BanzaiODS").bumpEntityKey("js_error_reporting","error_signal."+b("XJavaScriptLogviewSiteCategory").WWW+".sent")};c.prototype.performSignalLogging=function(a,c){b("gkx")("AT62Qfye-sgsYoL_O9bZPRJT6jN8PE-zabHwEoClspTZbYQrtc9jOblGZfAFttbXVhFOFzFWDnaLP8Tm92W-qRAJ")?b("Banzai").post(i,c):new(b("AsyncSignal"))(b("ErrorSignalConfig").uri,{c:a,m:JSON.stringify(c)}).send()};function c(){g.apply(this,arguments)}d=new c();e.exports=d;a.ErrorSignal=d}),null);
__d("XWebPerformanceDeviceInfoController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/perf/device/full_perf_info/",{})}),null);
__d("WebPerformanceDeviceInfo",["AsyncRequest","WebDevicePerfClassData","XWebPerformanceDeviceInfoController"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){navigator&&navigator.hardwareConcurrency!==undefined&&(a.cpu_cores=navigator.hardwareConcurrency),navigator&&navigator.deviceMemory!==undefined&&(a.ram=navigator.deviceMemory),new(b("AsyncRequest"))().setURI(b("XWebPerformanceDeviceInfoController").getURIBuilder().getURI()).setData(a).setMethod("POST").send()}a={baseHardwareLog:function(){g({})},fullHardwareLog:function(){__p&&__p();var a=document.createElement("canvas");a=a.getContext("webgl")||a.getContext("experimental-webgl");if(!a)return;var b=a.getExtension("WEBGL_debug_renderer_info");if(!b)return;var c=a.getParameter(b.UNMASKED_RENDERER_WEBGL);a=a.getParameter(b.UNMASKED_VENDOR_WEBGL);b={};b.gpu_vendor=a;b.gpu_renderer=c;g(b)},getDeviceLevel:function(){return b("WebDevicePerfClassData").deviceLevel}};e.exports=a}),null);
__d("ResourceTimingMetricsEnumJS",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({START_TIME:"startTime",REDIRECT_START:"redirectStart",REDIRECT_END:"redirectEnd",FETCH_START:"fetchStart",DOMAIN_LOOKUP_START:"domainLookupStart",DOMAIN_LOOKUP_END:"domainLookupEnd",CONNECT_START:"connectStart",SECURE_CONNECTION_START:"secureConnectionStart",CONNECT_END:"connectEnd",REQUEST_START:"requestStart",RESPONSE_START:"responseStart",RESPONSE_END:"responseEnd"})}),null);
__d("TimelineViewportTrackingLogType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({IMPRESSION:"impression",DURATION:"duration"})}),null);
__d("ErrorLogging",["ErrorSignal","ErrorUtils","JSErrorExtra","JSErrorLoggingConfig","JSErrorPlatformColumns","performanceNow","throttle"],(function(a,b,c,d,e,f){__p&&__p();function g(a){var c=a.extra||{},d={};Object.keys(b("JSErrorExtra")).forEach(function(a){b("JSErrorExtra")[a]&&(d[a]=!0)});Object.keys(c).forEach(function(a){c[a]?d[a]=!0:d[a]&&delete d[a]});a.extra=Object.keys(d)}function h(a){b("JSErrorPlatformColumns").app_id!==undefined&&(a.app_id=b("JSErrorPlatformColumns").app_id),b("JSErrorPlatformColumns").access_token!==undefined&&(a.access_token=b("JSErrorPlatformColumns").access_token)}function i(a){g(a);h(a);var c=a.category||"onerror";b("ErrorSignal").logJSError(c,{error:a.name||a.message,extra:a})}function a(){__p&&__p();var a=b("performanceNow")();for(var c=k,d=Array.isArray(c),e=0,c=d?c:c[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=c.length)break;f=c[e++]}else{e=c.next();if(e.done)break;f=e.value}f=f;var g=f[0];f=f[1];f<a&&k["delete"](g)}}var j=b("JSErrorLoggingConfig").reportInterval,k=new Map(),l=b("throttle")(a,500,null);function c(a){if(a.message&&a.message.toLowerCase().startsWith("script error"))return;var c=a.name+a.message+a.type,d=k.get(c),e=b("performanceNow")();(d==null||d+j<e)&&(k.set(c,e),l(),i(a))}b("ErrorUtils").addListener(c);e.exports={defaultJSErrorHandler:c}}),null);
__d("ImageTimingHelper",["Arbiter","BigPipe","URI"],(function(a,b,c,d,e,f){__p&&__p();var g={},h={};function i(a){__p&&__p();var c=a.lid,d=a.pagelet,e=a.images,f=a.timeslice,i=a.ts,j=g[c];j||(j=g[c]=[]);e.forEach(function(a){try{var c=new(b("URI"))(a);a=c.setFragment("").toString()}catch(a){return}if(h[a])return;h[a]=!0;j.push({pagelet:d,timeslice:f,ts:i,uri:a})})}b("Arbiter").subscribe(b("BigPipe").Events.init,function(a,b){b.lid&&b.lid!=="0"&&b.arbiter.subscribe("images_displayed",function(a,b){i(b)})});b("Arbiter").subscribe("MRenderingScheduler/images_displayed",function(a,b){i(b)});e.exports.getImageTimings=function(a){return g[a]||[]}}),null);
__d("PageletEventsHelper",["Arbiter","PageletEventConstsJS"],(function(a,b,c,d,e,f){__p&&__p();var g="BigPipe/init",h="MRenderingScheduler/init",i="pagelet_event",j="phase_begin",k={},l=[],m=!1;function n(){return{pagelets:{},categories:{},phase_start:{},display_resources:{},all_resources:{}}}function o(a,b,c,d){k[d]==undefined&&(k[d]=n()),k[d].pagelets[b]==undefined&&(k[d].pagelets[b]={}),k[d].pagelets[b][a]=c}function p(a){__p&&__p();a.subscribe(i,function(a,c){__p&&__p();var event=c.event,d=c.ts;a=c.id;var e=c.lid,f=c.phase,g=c.categories,h=c.allResources;c=c.displayResources;o(event,a,d,e);var i=k[e],j=i.pagelets[a];event===b("PageletEventConstsJS").ARRIVE_END&&(j.phase=f,i.all_resources[a]=h,i.display_resources[a]=c);(event===b("PageletEventConstsJS").ONLOAD_END||event===b("PageletEventConstsJS").DISPLAY_END)&&g&&g.forEach(function(a){i.categories[a]==undefined&&(i.categories[a]={}),i.categories[a][event]=d});for(var j=0,f=l.length;j<f;j++)l[j](a,event,d,e)}),a.subscribe(j,function(event,a){k[a.lid].phase_start[a.phase]=a.ts})}a={init:function(){__p&&__p();if(m)return;b("Arbiter").subscribe(g,function(event,a){var b=a.lid;a=a.arbiter;k[b]=n();p(a)});b("Arbiter").subscribe(h,function(event,a){var b=a.lid;a=a.arbiter;k[b]=n();p(a)});m=!0},getMetrics:function(a){return k[a]?JSON.parse(JSON.stringify(k[a])):null},subscribeToPageletEvents:function(a){l.push(a);return{remove:function(){l.splice(0,l.indexOf(a))}}}};e.exports=a}),null);
__d("ResourceTimingBootloaderHelper",["Bootloader","ErrorUtils","ImageTimingHelper","ResourceTimingMetricsEnumJS","ResourceTimingsStore","ResourceTypes","URI","forEachObject","isEmpty","performance"],(function(a,b,c,d,e,f){__p&&__p();var g=500,h=[],i={},j={},k={},l=[".mp4",".m4v",".mpd","m4a"],m=new Set(["bootload","js_exec","start_bootload","tag_bootload"]);function n(a){for(var b=0;b<l.length;b++){var c=l[b];if(a.endsWith(c))return!0}return!1}function o(a){__p&&__p();var c=new Map();b("ResourceTimingsStore").getMapFor(a).forEach(function(a){if(a.requestSent!=null){var b=c.get(a.uri);b!=null?b.push(a):c.set(a.uri,[a])}});c.forEach(function(a){return a.sort(function(a,b){return a.requestSent-b.requestSent})});return c}function p(a,b,c,d){__p&&__p();var e=a.get(b);if(e==null){var f=b.indexOf("?");if(f!==-1){b=b.substring(0,f);e=a.get(b)}}if(e!=null)for(var f=0;f<e.length;f++){a=e[f];b=a.requestSent;a=a.responseReceived;if((c==null||b!=null&&b<=c)&&(d==null||a!=null&&a>=d))return e.splice(f,1)[0]}return null}function q(a,c,d,e,f,g,h){__p&&__p();if(!b("performance").timing||!b("performance").getEntriesByType)return null;var i={},l=b("performance").timing.navigationStart;d&&(i=b("ImageTimingHelper").getImageTimings(e).sort(function(a,b){return a.ts-b.ts}).reduce(function(a,b){if(a[b.uri])return a;a[b.uri]=b.pagelet;return a},{}));d=Array.from(b("performance").getEntriesByType("resource"));e=d.filter(function(a){return a.duration>=0&&a.startTime!=null&&a.startTime+l>c&&(f==null||a.responseEnd==null||a.responseEnd+l<f)});e.sort(function(a,b){return a.startTime-b.startTime});d=e.length;var m=0,q=0,u=0,v=0,w=0,x=o(b("ResourceTypes").XHR),y=o(b("ResourceTypes").CSS),z=o(b("ResourceTypes").JS);for(var A=0;A<e.length;A++){var B=e[A],C="",D="",E=void 0,F=B.initiatorType;switch(F){case"css":case"link":case"script":F=b("ResourceTimingsStore").parseMakeHasteURL(B.name);if(!F)continue;var G=F[0];F=F[1];if(F==="css"||F==="js"){var H=F==="css"?y:z;E=p(H,B.name,B.startTime+l,B.responseEnd+l);if(E!=null&&h){D=F;C=E.uid;break}else{D=F;H=k[B.name]||u++;C=H+"_"+G}}else{F=t(B.name);H=F[0];D=F[1];C=q+++"_"+H}break;case"img":C=q+++"_"+r(B.name);D="img";break;case"iframe":C=v+++"_"+r(B.name)+s(B.name);D="iframe";break;case"xmlhttprequest":if(g){G=r(B.name);F=s(B.name);if(n(F)){C=w+++"_"+G+F;D="video";break}else{E=p(x,B.name,B.startTime+l,B.responseEnd+l);if(E!=null){D=b("ResourceTypes").XHR;C=E.uid;break}}}default:continue}H={};G=Object.keys(b("ResourceTimingMetricsEnumJS"));for(var F=0;F<G.length;F++){var I=b("ResourceTimingMetricsEnumJS")[G[F]],J=B[I];J&&(H[I]=J+b("performance").timing.navigationStart)}if(E!=null){I=E;J=I.requestSent;F=I.responseReceived;if(c!=null&&J!=null&&J<c||f!=null&&F!=null&&F>f)continue;H.requestSent=J;H.responseReceived=F}H.type=D;H.desc=C;if(E!=null&&(D===b("ResourceTypes").JS||D===b("ResourceTypes").CSS||D===b("ResourceTypes").XHR)){G=b("ResourceTimingsStore").getAnnotationsFor(D,E.uid);G!=null&&(H.annotations=G)}D=="img"&&Object.prototype.hasOwnProperty.call(i,B.name)&&(H.pagelet=i[B.name]);H.transferSize=B.transferSize;H.encodedBodySize=B.encodedBodySize;a[B.name]==undefined&&(a[B.name]=[]);m++;a[B.name].push(H)}return h?{numValidEntries:d,numSuccessfulMetrics:m}:null}function r(a){a=new(b("URI"))(a).getDomain();return a}function s(a){a=new(b("URI"))(a).getPath();return a}function t(a){return[r(a),"img"]}function u(a){__p&&__p();var b=Object.keys(a).filter(function(a){return a.startsWith("start_bootload/")}).sort(function(b,c){return a[b]-a[c]}).map(function(a){return a.substring(a.indexOf("/")+1)});b.forEach(function(b){return m.forEach(function(c){c=c+"/"+b;a[c]!=null&&(i[c]=a[c])})});h=h.concat(b);if(h.length>g){b=h.splice(0,h.length-g);b.forEach(function(a){return m.forEach(function(b){i[b+"/"+a]&&delete i[b+"/"+a]})})}}a={addPastBootloaderMetricsToResourceTimings:function(c,d){__p&&__p();c===void 0&&(c={});d===void 0&&(d={});var a=b("Bootloader").getURLToHashMap();b("forEachObject")(c,function(b,c){__p&&__p();var e=a[c];if(!e)return;var f=new Map();f.set("bootloader_hash",e);m.forEach(function(a){var b=a+"/"+e;b=d[b]||i[b];b!=null&&f.set(a,b)});f.size>0&&b.forEach(function(a){if(a.requestSent||a.responseReceived)return;f.forEach(function(b,c){return a[c]=b})})})},mergeBootloaderMetricsAndResourceTimings:function(a,c,d){__p&&__p();a===void 0&&(a={});c===void 0&&(c={});d===void 0&&(d=!0);b("isEmpty")(k)&&(k=b("Bootloader").getURLToHashMap());var e=new Map();b("forEachObject")(k,function(a,b){e.set(a,b)});var f=[];b("forEachObject")(c,function(b,c){__p&&__p();var d=c.indexOf("/");if(d===-1)return;var g=c.substring(0,d);if(!m.has(g))return;f.push(c);var h=c.substring(d+1);c=e.get(h);if(!c){c=h;h=k[c];if(!h)return}c.startsWith("data:")&&(c="inlined resource: "+h);a[c]==null&&(a[c]=[{}]);a[c].forEach(function(a){a.bootloader_hash=h,a[g]=b})});d||(u(c),f.forEach(function(a){return delete c[a]}));return a},getLastTTIAndE2EImageResponseEnds:function(a,c,d){__p&&__p();var e={TTI:a,E2E:c};if(!b("performance").timing)return e;var f=d.filter(function(b){return b.ts<=a}).map(function(a){return a.uri}).reduce(function(b,a){b[a]=!0;return b},{}),g=d.map(function(a){return a.uri}).reduce(function(b,a){b[a]=!0;return b},{});for(var h in j)j[h].forEach(function(a){a.type==="img"&&(f[h]&&(e.TTI=Math.max(e.TTI,a.responseEnd)),g[h]&&(e.E2E=Math.max(e.E2E,a.responseEnd)))});return e},getMetrics:function(a,c,d,e,f,g){j={};b("isEmpty")(k)&&(k=b("Bootloader").getURLToHashMap());a=q(j,a,c,d,e,f,g);return{data:j,diagnostics:a}}};e.exports=a}),null);