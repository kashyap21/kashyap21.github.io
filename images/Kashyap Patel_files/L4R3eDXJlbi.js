if (self.CavalryLogger) { CavalryLogger.start_js(["kEytS"]); }

__d("NotificationBucket.react",["cx","BootloadedComponent.react","NotificationBucketGeneric.react","NotificationBucketUtils","NotificationJewelListBucketHeader.react","React","XUISpinner.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.$1=function(){var a=this.props.bucket,c=a.bucketType;a=a.title;return b("React").createElement("div",null,b("React").createElement(b("NotificationJewelListBucketHeader.react"),{title:a,bucketType:c}),b("React").createElement(b("XUISpinner.react"),{className:"_1e00"}))};a.prototype.render=function(){var a=this.props,c=a.bucket,d=a.listRenderer;a=a.startIndex;var e=c.bucketType;e=b("NotificationBucketUtils").getCustomModuleForType(e);return!e?b("React").createElement(b("NotificationBucketGeneric.react"),babelHelpers["extends"]({},c,{listRenderer:d,startIndex:a})):b("React").createElement(b("BootloadedComponent.react"),babelHelpers["extends"]({bootloadLoader:e,bootloadPlaceholder:this.$1()},c))};function a(){h.apply(this,arguments)}e.exports=a}),null);