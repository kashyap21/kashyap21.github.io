if (self.CavalryLogger) { CavalryLogger.start_js(["\/yWhv"]); }

__d("PhotoViewerInitPagelet",["DOM","PhotoSnowlift","PhotoTagApproval","PhotoTagger","PhotoTags","ge"],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";__p&&__p();b("PhotoSnowlift").attachTagger(a.tagging,a.tokenizer,a.ufi);var c=b("PhotoSnowlift").getInstance(),d=c.getRoot();new(b("PhotoTags"))([b("ge")("fbPhotoSnowliftAuthorName"),b("DOM").find(d,"span.fbPhotoTagList"),b("DOM").find(d,"div.fbPhotoProductsTagList"),b("DOM").find(d,"div.fbCommerceProductMiniListHscroll")],b("ge")("fbPhotoSnowliftTagBoxes"),a.version);if(a.setupPhotoTagger){d=new(b("PhotoTagger"))(c);d.initSnowlift(a.tagging,a.tokenizer,a.userId,a.ufi);d.setQueueName(a.queueName)}new(b("PhotoTagApproval"))(c)}e.exports=a}),null);