if (self.CavalryLogger) { CavalryLogger.start_js(["gnqrf"]); }

__d("PhotosButtonTooltips",["Arbiter","DOMDimensions","Style","Tooltip"],(function(a,b,c,d,e,f){__p&&__p();var g=[],h=[],i;function j(a,c){__p&&__p();if(!a||!a.length||!c||!c.length||a.length!=c.length)throw new Error("Incorrect arguments passed in from PHP for photo button cropping");var d=0,e=[],f=!1;for(d=0;d<a.length;d++)e.push(b("DOMDimensions").getElementDimensions(a[d]).width),e[d]&&(f=!0);if(f){a.forEach(function(a){b("Style").set(a,"max-width","100%")});for(d=0;d<a.length;d++){var g=a[d],i=e[d];if(i){var j=b("DOMDimensions").getElementDimensions(g).width;j>i&&(b("Tooltip").set(g,c[d]),h.push(g))}}a.forEach(function(a){b("Style").set(a,"max-width","")})}return f}function k(){g.forEach(function(a){a.unsubscribe()}),g=[],h.forEach(b("Tooltip").remove),h=[]}function l(a,c,d){this.arbiterToken=b("Arbiter").subscribe(a,function(){j(c,d)&&(this.arbiterToken&&this.arbiterToken.unsubscribe())}.bind(this))}a={init:function(){i||(i=b("Arbiter").subscribe("PhotoSnowlift.CLOSE",k))},registerButtonsOnPaging:function(a,b){g.push(new l("PhotoSnowlift.DATA_CHANGE",a,b).arbiterToken)},registerButtonsOnTaggingOn:function(a,b){g.push(new l("PhotoTagger.START_TAGGING",a,b).arbiterToken)},registerButtonsOnTaggingOff:function(a,b){g.push(new l("PhotoTagger.STOP_TAGGING",a,b).arbiterToken)}};e.exports=a}),null);