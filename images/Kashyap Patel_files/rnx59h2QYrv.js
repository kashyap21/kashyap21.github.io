if (self.CavalryLogger) { CavalryLogger.start_js(["VB4zT"]); }

__d("TagToken",["DOM","Token"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("Token"));g=c&&c.prototype;function a(a){"use strict";g.constructor.call(this,a,"tag")}a.prototype.createElement=function(){"use strict";var a=this.isFreeform(),c=b("DOM").create("span",{className:"separator"},", "),d=b("DOM").create(a?"span":"a",{className:"taggee","data-tag":this.getValue()},this.getText());a||(d.href=this.getInfo().path);return b("DOM").create("span",{className:"tagItem"},[c,d])};e.exports=a}),null);