if (self.CavalryLogger) { CavalryLogger.start_js(["J0u38"]); }

__d("AdsBulkValuePropTypes",["AdsEmptyValue","AdsMixedValue","AdsUniformValue","React"],(function(a,b,c,d,e,f){"use strict";a=b("React").PropTypes;c=a.oneOfType([a.instanceOf(b("AdsMixedValue")),a.instanceOf(b("AdsUniformValue")),a.instanceOf(b("AdsEmptyValue"))]);e.exports={bulkValue:c}}),null);
__d("PagesAdminInitPageInfoDataAction",["AdsDataAction"],(function(a,b,c,d,e,f){"use strict";a=b("AdsDataAction").create(function(){return[]},"PagesAdmin.INIT_PAGE_INFO_DATA");e.exports=a}),null);
__d("NotificationTokens",["CurrentUser"],(function(a,b,c,d,e,f){a={tokenizeIDs:function(a){return a.map(function(a){return b("CurrentUser").getID()+":"+a})},untokenizeIDs:function(a){return a.map(function(a){return a.split(":")[1]})}};e.exports=a}),null);
__d("XUIScrubberSubItem.react",["cx","fbt","DOMDimensions","Link.react","React","ReactDOM","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"XUIScrubberSubItem",statics:{handleSelect:function(a){a.onSelect&&!a.isDisabled&&a.onSelect()},handleClick:function(a){a.onClick&&!a.isDisabled&&a.onClick()}},propTypes:{count:a.number,maxCount:a.number,onSelect:a.func,onClick:a.func,isSelected:a.bool,isDisabled:a.bool},getDefaultProps:function(){return{maxCount:99}},getInitialState:function(){return{shouldCalculateWidth:!0,shouldLabelTruncate:!1}},render:function(){__p&&__p();var a=this.props.count,c=null,d=null;if(a>0){var e=this.props.maxCount;a=b("React").createElement("div",{className:"_5xdy",ref:"subItemCount"},h._("({subItemCount})",[h._param("subItemCount",a>e?e+"+":a)]));this.state.shouldLabelTruncate?d=a:c=a}e=b("React").createElement(b("Link.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"clearfix")}),d,b("React").createElement("div",{className:"_5xdz",ref:"subItemLabel"},this.props.children,c));a=this.props.isSelected&&!this.props.isDisabled;this.state.shouldCalculateWidth&&(a=!0);d="_5xd-"+(a?" _5xd_":"")+(this.props.isDisabled?" _4_-o":"")+(!this.state.shouldLabelTruncate||this.state.shouldCalculateWidth?" _2tqt":"");return b("React").createElement("li",{className:d},e)},componentDidMount:function(){this._setLabelWidths()},UNSAFE_componentWillReceiveProps:function(){this.setState(this.getInitialState())},componentDidUpdate:function(a){this.state.shouldCalculateWidth&&this._setLabelWidths()},_getRefWidth:function(a){a=a?this.refs[a]:this;return!a?0:b("DOMDimensions").getElementDimensions(b("ReactDOM").findDOMNode(a)).width},_setLabelWidths:function(){var a=this._getRefWidth(),b=this.props.count?this._getRefWidth("subItemCount"):0,c=this._getRefWidth("subItemLabel");this.setState({shouldCalculateWidth:!1,shouldLabelTruncate:c+b>a})}});e.exports=c}),null);
__d("XUIScrubberItem.react",["cx","Link.react","React","XUIBadge.react","XUICardSection.react","XUIScrubberSubItem.react","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").Component);h=d&&d.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=h.constructor).call.apply(a,[this].concat(d)),this.state={selected:this.props.defaultSelected},b}a.handleSelect=function(a){a.onSelect&&a.onSelect()};a.handleClick=function(a){a.onClick&&a.onClick()};a.prototype.render=function(){__p&&__p();var a=this.props.count;a>0?a=b("React").createElement(b("XUIBadge.react"),{className:"_5huh",count:a,maxcount:this.props.maxCount,type:this.props.bubbleType}):a=null;var c=[],d=[],e=null,f=this.getSelected(),g=!1;b("React").Children.forEach(this.props.children,function(a,e){if(!a)return;if(a.type===b("XUIScrubberSubItem.react")){var h=b("React").cloneElement(a,{onClick:this.handleChildClick.bind(this,a),isSelected:a.key===f&&this.props.isSelected,key:"scrubberitem"+(a.key||e)});d.push(h);g=!0}else c.push(b("React").createElement("span",{key:"scrubberitem"+e},a))},this);(this.props.isSelected||this.props.showAllSubItems)&&d.length&&(e=b("React").createElement("ul",{className:"_5hui"},d));var h="false";this.props.isSelected&&(h="page");h=b("React").createElement(b("Link.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"clearfix"),role:g?"button":null,target:this.props.target,"aria-current":h,"aria-expanded":g?this.props.isSelected:null}),a,b("React").createElement("div",{className:"_5hug"},c));a="_5hue"+(this.props.isSelected?" _5huf":"");return b("React").createElement(b("XUICardSection.react"),{className:a},h,e)};a.prototype.getSelected=function(){return this.props.selected||this.state.selected};a.prototype.handleChildClick=function(a){this.props.showAllSubItems&&!this.props.isSelected&&this.props.onClick(),this.getSelected()!==a.key&&(this.setState({selected:a.key}),a.type.handleSelect(a.props)),a.type.handleClick(a.props)};a.propTypes={count:c.number,maxCount:c.number,onSelect:c.func,onClick:c.func,selected:c.string,defaultSelected:c.string,isSelected:c.bool,bubbleType:c.oneOf(["regular","special"]),showAllSubItems:c.bool,target:c.string};a.defaultProps={bubbleType:"special",maxCount:99};e.exports=a}),null);
__d("XUIScrubber.react",["React","XUICard.react","XUIScrubberItem.react","XUIScrubberSubItem.react"],(function(a,b,c,d,e,f){__p&&__p();var g;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").Component);g=d&&d.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=g.constructor).call.apply(a,[this].concat(d)),this.state={selected:this.props.defaultSelected},this.getSelected=function(){return this.props.selected||this.state.selected}.bind(this),this.handleChildClick=function(a){this.getSelected()!==a.key&&(this.setState({selected:a.key}),a.type.handleSelect(a.props)),a.type.handleClick(a.props)}.bind(this),b}a.prototype.render=function(){"use strict";var a=this.getSelected(),c=b("React").Children.map(this.props.children,function(c,d){if(!c)return;return b("React").cloneElement(c,{onClick:this.handleChildClick.bind(this,c),isSelected:c.key===a,showAllSubItems:this.props.showAllSubItems,key:"scrubber"+(c.key||d)})},this);return b("React").createElement(b("XUICard.react"),this.props,c)};a.propTypes={selected:c.string,defaultSelected:c.string,showAllSubItems:c.bool};a.Item=b("XUIScrubberItem.react");a.SubItem=b("XUIScrubberSubItem.react");e.exports=a}),null);
__d("PagesAdminHelpTrayActionsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:PagesAdminHelpTrayActionsLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:PagesAdminHelpTrayActionsLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:PagesAdminHelpTrayActionsLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setHelpTrayEvent=function(a){this.$1.help_tray_event=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};var g={help_tray_event:!0,vc:!0};e.exports=a}),null);
__d("PagesSelectableListCheckbox.react",["cx","React","XUICheckboxInput.react","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(a,b){h.constructor.call(this,a,b),this.$1=function(event){this.props.onChange(event.target.checked)}.bind(this)}a.prototype.render=function(){var a=(this.props.checked===null?"_41g9":"")+" _41ga";a=b("joinClasses")(a,this.props.className);return b("React").createElement("div",{className:a},b("React").createElement(b("XUICheckboxInput.react"),{ref:"input",checked:this.props.checked===!0,className:"_41gb",onChange:this.$1}))};e.exports=a}),null);
__d("PagesDispatcher",["ExplicitRegistrationDispatcher"],(function(a,b,c,d,e,f){"use strict";e.exports=new(b("ExplicitRegistrationDispatcher"))({strict:!1})}),null);
__d("PagesAdminActionTypes",["keyMirrorRecursive"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirrorRecursive")({INIT_PAGE_INFO_DATA:null},"PagesAdmin");e.exports=a}),null);
__d("PagesAdminStore",["AdsDataAtom","FluxReduceStore","PagesAdminActionTypes","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h;g=babelHelpers.inherits(i,b("immutable").Record({accessTokens:null,canCreateAds:!1,fanCount:0,instagramAccountId:null,pageID:"",pageName:"",pageURI:"",shortName:"",userHash:"",userID:""}));g&&g.prototype;function i(){g.apply(this,arguments)}h=babelHelpers.inherits(a,b("FluxReduceStore"));h&&h.prototype;a.prototype.getInitialState=function(){return new i()};a.prototype.reduce=function(a,c){c=c.action;switch(c.type){case b("PagesAdminActionTypes").INIT_PAGE_INFO_DATA:return a.merge(c.data);default:return a}};a.prototype.getAccessToken=function(a){return this.getState().get("accessTokens").get(a)||""};function a(){h.apply(this,arguments)}a.__moduleID=e.id;e.exports=new a(b("AdsDataAtom"))}),null);
__d("PagesAdminActions",["AdsDataAtom","BoostedComponentInitUtils","PagesAdminInitPageInfoDataAction","PagesAdminStore"],(function(a,b,c,d,e,f){"use strict";a={init:function(a){b("AdsDataAtom").explicitlyRegisterStore(b("PagesAdminStore")),b("BoostedComponentInitUtils").registerBoostedComponentButtonStores(),b("BoostedComponentInitUtils").registerBoostedComponentDialogStores(),b("BoostedComponentInitUtils").registerBoostedAutomatedAdsStores(),b("PagesAdminInitPageInfoDataAction").dispatch({data:a},{line:"23",module:"PagesAdminActions.js"})}};e.exports=a}),null);
__d("PagesAdminHelpTrayDispatcher",["ExplicitRegistrationReactDispatcher"],(function(a,b,c,d,e,f){e.exports=new(b("ExplicitRegistrationReactDispatcher"))({strict:!0})}),null);
__d("XContextualHelpUFController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/support/help/contextual/uf/",{cms_id:{type:"Int",required:!0},pages_help_tray:{type:"Bool",defaultValue:!1}})}),null);
__d("XPagesAdminHelpTrayContentAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/admin_help_tray/ajax/help_content/",{cms_id:{type:"String"},type:{type:"String"}})}),null);
__d("XPagesAdminHelpTraySearchAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/admin_help_tray/search/",{})}),null);
__d("PagesAdminHelpTrayActions",["AsyncRequest","PagesAdminHelpTrayActionsTypedLogger","PagesAdminHelpTrayDispatcher","XContextualHelpUFController","XPagesAdminHelpTrayContentAsyncController","XPagesAdminHelpTraySearchAsyncController","keyMirror"],(function(a,b,c,d,e,f){__p&&__p();var g=b("keyMirror")({backButtonClicked:null,clearQuery:null,cmsLoaded:null,faqClicked:null,faqsLoaded:null,feedbackLoaded:null,initialRender:null,searchFired:null,searchReturned:null,setValue:null});a={Types:g,clearQuery:function(){b("PagesAdminHelpTrayDispatcher").dispatch({type:g.clearQuery,payload:{}})},queryChanged:function(event){var a=event.target.value;b("PagesAdminHelpTrayDispatcher").dispatch({type:g.setValue,payload:{key:"query",value:a}});a.length==0&&b("PagesAdminHelpTrayDispatcher").dispatch({type:g.clearQuery,payload:{}})},searchSubmitted:function(a){new(b("PagesAdminHelpTrayActionsTypedLogger"))().setHelpTrayEvent("search_submitted").addToExtraData("query",a).log();b("PagesAdminHelpTrayDispatcher").dispatch({type:g.searchFired,payload:{query:a}});var c=b("XPagesAdminHelpTraySearchAsyncController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(c).setData({query:a}).setHandler(function(b){return this.searchLoaded(b.payload,a)}.bind(this)).setErrorHandler(function(b){this.searchLoaded([],a)}.bind(this)).send()},searchLoaded:function(a,c){b("PagesAdminHelpTrayDispatcher").dispatch({type:g.searchReturned,payload:{searchResults:a,query:c}})},backButtonClicked:function(){b("PagesAdminHelpTrayDispatcher").dispatch({type:g.backButtonClicked,payload:{}})},feedbackLoaded:function(a){b("PagesAdminHelpTrayDispatcher").dispatch({type:g.feedbackLoaded,payload:{universalFeedback:a}})},initialRender:function(){b("PagesAdminHelpTrayDispatcher").dispatch({type:g.initialRender});var a=b("XPagesAdminHelpTrayContentAsyncController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(a).setMethod("GET").setReadOnly(!0).setData({type:"get_faqs"}).setHandler(function(a){this.faqsLoaded(a.payload)}.bind(this)).setErrorHandler(function(a){this.faqsLoaded([])}.bind(this)).send()},faqsLoaded:function(a){b("PagesAdminHelpTrayDispatcher").dispatch({type:g.faqsLoaded,payload:{faqResults:a}})},cmsLoaded:function(a,c,d){b("PagesAdminHelpTrayDispatcher").dispatch({type:g.cmsLoaded,payload:{cmsID:a,title:c,content:d}})},faqClicked:function(a){new(b("PagesAdminHelpTrayActionsTypedLogger"))().setHelpTrayEvent("article_clicked").addToExtraData("cms_id",a).log();b("PagesAdminHelpTrayDispatcher").dispatch({type:g.faqClicked,payload:{cms_id:a}});var c=b("XPagesAdminHelpTrayContentAsyncController").getURIBuilder().setString("cms_id",a).getURI(),d=b("XContextualHelpUFController").getURIBuilder().setInt("cms_id",a).setBool("pages_help_tray",!0).getURI();new(b("AsyncRequest"))().setURI(c).setMethod("GET").setReadOnly(!0).setHandler(function(b){this.cmsLoaded(a,b.payload.title,b.payload.content)}.bind(this)).send();new(b("AsyncRequest"))().setURI(d).setHandler(function(a){this.feedbackLoaded(a.payload.universal_feedback)}.bind(this)).send()}};e.exports=a}),null);
__d("PagesAdminHelpTrayState",["immutable"],(function(a,b,c,d,e,f){var g;c=b("immutable").List;g=babelHelpers.inherits(a,b("immutable").Record({query:"",lastQuery:"",faqs:c([]),faqsLoading:!0,searchResults:c([]),searchReturnedEmpty:!1,loadingSearch:!1,loadingArticle:!1,selectedCms:null,universalFeedback:null}));g&&g.prototype;function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);
__d("PagesAdminHelpTrayStore",["FluxReduceStore","immutable","PagesAdminHelpTrayDispatcher","PagesAdminHelpTrayActions","PagesAdminHelpTrayActionsTypedLogger","PagesAdminHelpTrayState"],(function(a,b,c,d,e,f){__p&&__p();var g,h=b("immutable").List,i=b("PagesAdminHelpTrayActions").Types;g=babelHelpers.inherits(a,b("FluxReduceStore"));g&&g.prototype;a.prototype.getInitialState=function(){"use strict";return new(b("PagesAdminHelpTrayState"))()};a.prototype.reduce=function(a,c){"use strict";__p&&__p();switch(c.type){case i.setValue:return a.set(c.payload.key,c.payload.value);case i.backButtonClicked:if(a.selectedCms!==null)return a.merge({selectedCms:null,universalFeedback:null});else if(a.searchResults)return a.merge({query:"",searchResults:h([]),searchReturnedEmpty:!1});return a;case i.clearQuery:return a.merge({query:"",searchResults:h([]),searchReturnedEmpty:!1});case i.faqClicked:return a.set("loadingArticle",!0);case i.cmsLoaded:var d={content:c.payload.content,summary:{title:c.payload.title,cmsID:c.payload.cmsID}};return a.set("loadingArticle",!1).set("selectedCms",d);case i.feedbackLoaded:return a.set("universalFeedback",c.payload.universalFeedback);case i.searchFired:return a.merge({loadingSearch:!0,searchResults:h([]),searchReturnedEmpty:!1,selectedCms:null,universalFeedback:null,lastQuery:c.payload.query});case i.initialRender:return a.merge({faqsLoading:!0});case i.faqsLoaded:return a.merge({faqsLoading:!1,faqs:h(c.payload.faqResults)});case i.searchReturned:a=a.merge({loadingSearch:!1,searchResults:h(c.payload.searchResults)});c.payload.searchResults.length==0&&(new(b("PagesAdminHelpTrayActionsTypedLogger"))().setHelpTrayEvent("no_result_search").addToExtraData("query",c.payload.query).log(),a=a.set("searchReturnedEmpty",!0));return a;default:return a}};function a(){"use strict";g.apply(this,arguments)}a.__moduleID=e.id;e.exports=new a(b("PagesAdminHelpTrayDispatcher"))}),null);
__d("PagesAdminHelpTrayFaqItem.react",["cx","React","ShimButton.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){return b("React").createElement(b("ShimButton.react"),{className:"_zza",onClick:this.props.onClick},b("React").createElement("div",{className:"_3oyq"},b("React").createElement("div",{className:"_zzb"},this.props.boldString?this.$1(this.props.cmsItem.title,this.props.boldString):this.props.cmsItem.title)),b("React").createElement("div",{className:"_zz-"}))};a.prototype.$1=function(a,c){var d=a.search(c);if(d<0)return b("React").createElement("div",null," ",a," ");var e=a.substring(0,d);a=a.substring(d+c.length);return b("React").createElement("div",null,e,b("React").createElement("b",{className:"_2o3b"},c),a)};function a(){h.apply(this,arguments)}e.exports=a}),null);
__d("PagesAdminHelpTrayHeaderLinks.react",["cx","fbt","Link.react","PagesAdminHelpTrayActionsTypedLogger","React"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.$1=function(a){return b("React").createElement(b("Link.react"),{className:"_zxd",href:a.link,onClick:function(){return this.$2(a.link)}.bind(this),target:"_blank"},b("React").createElement("div",{className:"_cis"},a.image,b("React").createElement("div",{className:"_zxu"},a.caption)))};a.prototype.$3=function(){var a={link:"/business/help/?ref=pages_help_tray",image:b("React").createElement("i",{className:"_cit _ci_"}),caption:h._("Advertising Help Center")};return this.$1(a)};a.prototype.$4=function(){var a={link:"/business/help/community?ref=pages_help_tray",image:b("React").createElement("i",{className:"_cit _cj0"}),caption:h._("Facebook Help Community")};return this.$1(a)};a.prototype.$5=function(){var a={link:"/help/contact/306836472662147?ref=pages_help_tray",image:b("React").createElement("i",{className:"_cit _cj9"}),caption:h._("Send Feedback")};return this.$1(a)};a.prototype.$2=function(a){new(b("PagesAdminHelpTrayActionsTypedLogger"))().setHelpTrayEvent("url_clicked").addToExtraData("target",a).log()};a.prototype.render=function(){return b("React").createElement("div",{className:"_3-8y"},this.$3(),this.$4(),this.$5())};function a(){i.apply(this,arguments)}e.exports=a}),null);
__d("PagesAdminHelpTrayView.react",["ix","cx","fbt","Image.react","PagesAdminHelpTrayActions","PagesAdminHelpTrayFaqItem.react","PagesAdminHelpTrayHeaderLinks.react","React","ReactDOM","XUICloseButton.react","XUISpinner.react","XUITextInput.react","fbglyph"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j;c=babelHelpers.inherits(a,b("React").Component);j=c&&c.prototype;function a(a){j.constructor.call(this,a),this.$5=function(){this.props.trayState.query.length>0&&b("PagesAdminHelpTrayActions").searchSubmitted(this.props.trayState.query)}.bind(this),this.$6=function(event){event.key=="Enter"&&this.$5()}.bind(this),this.$9=function(event){var a=b("ReactDOM").findDOMNode(this.refs.contentContainer);this.setState({showShadow:a.scrollTop>0})}.bind(this),this.state={showShadow:!1}}a.prototype.componentDidMount=function(){b("PagesAdminHelpTrayActions").initialRender()};a.prototype.$1=function(){return!(this.props.trayState.loadingSearch||this.props.trayState.loadingArticle||this.props.trayState.searchResults.count()>0||this.props.trayState.selectedCms)};a.prototype.$2=function(){if(this.$1())return b("React").createElement(b("PagesAdminHelpTrayHeaderLinks.react"),null);else return null};a.prototype.$3=function(){return this.props.trayState.searchResults.count()>0||this.props.trayState.searchReturnedEmpty||this.props.trayState.selectedCms};a.prototype.$4=function(){return b("React").createElement(b("Image.react"),{className:(this.$3()?"_zxv":"")+(this.$3()?"":" hidden_elem"),onClick:b("PagesAdminHelpTrayActions").backButtonClicked,src:g("141551")})};a.prototype.render=function(){var a=i._("Search...");return b("React").createElement("div",null,b("React").createElement("div",{className:((this.$1()||this.state.showShadow)&&!this.props.trayState.selectedCms?"_5o7b":"")+" _zxw"},b("React").createElement("div",{className:"_zxx"},b("React").createElement("div",null,this.$4(),b("React").createElement(b("XUITextInput.react"),{className:this.$3()?"_zy7":"_zy8",height:"tall",placeholder:a,value:this.props.trayState.query,onKeyUp:this.$6,onChange:b("PagesAdminHelpTrayActions").queryChanged}),b("React").createElement("div",{className:"_zyh"},this.$7())),this.$2())),this.$8())};a.prototype.$8=function(){__p&&__p();var a=this.props.trayState.loadingSearch||this.props.trayState.loadingArticle,c=!a&&!(this.props.trayState.searchResults.size>0||this.props.trayState.searchReturnedEmpty)&&!this.props.trayState.selectedCms,d=(this.props.trayState.searchResults.size>0||this.props.trayState.searchReturnedEmpty)&&!this.props.trayState.selectedCms,e=this.props.trayState.selectedCms!=null;if(c)if(this.props.trayState.faqsLoading)return b("React").createElement("div",{className:"_zyk"},b("React").createElement(b("XUISpinner.react"),{size:"large",className:"_zyv"}));else return b("React").createElement("div",{className:"_zyi",onScroll:this.$9,ref:"contentContainer"},b("React").createElement("div",{className:"_zyj"},i._("Frequently Asked Questions:")),this.props.trayState.faqs.map(function(a){return this.$10(a)}.bind(this)));else if(a)return b("React").createElement("div",{className:"_zyk"},b("React").createElement(b("XUISpinner.react"),{size:"large",className:"_zyv"}));else if(d)return b("React").createElement("div",{className:"_zyi"+(this.props.trayState.searchReturnedEmpty?" _5zid":""),onScroll:this.$9,ref:"contentContainer"},b("React").createElement("div",{className:"_zyj"},i._("Search Results:")),this.$11());else if(e)return this.$12();return b("React").createElement("div",null,"Error")};a.prototype.$11=function(){if(this.props.trayState.searchReturnedEmpty)return b("React").createElement("div",{className:"_5zf1"},i._("No results for {search_query}",[i._param("search_query",'"'+this.props.trayState.lastQuery+'".')]));else return b("React").createElement("div",null,this.props.trayState.searchResults.map(function(a){return this.$10(a,this.props.trayState.lastQuery)}.bind(this)))};a.prototype.$12=function(){return b("React").createElement("div",{className:"_14tc"},b("React").createElement("div",{className:"_14td"},this.props.trayState.selectedCms.summary.title),b("React").createElement("div",{className:"_14te",dangerouslySetInnerHTML:{__html:this.props.trayState.selectedCms.content.__html}}),this.props.trayState.universalFeedback!==null?b("React").createElement("div",null,b("React").createElement("div",{className:"_1hd6"}),b("React").createElement("div",{className:"_3c0b",dangerouslySetInnerHTML:{__html:this.props.trayState.universalFeedback.__html}})):null)};a.prototype.$10=function(a,c){return b("React").createElement(b("PagesAdminHelpTrayFaqItem.react"),{key:a.cmsID,cmsItem:a,boldString:c,onClick:function(){return b("PagesAdminHelpTrayActions").faqClicked(a.cmsID)}})};a.prototype.$7=function(){if(this.props.trayState.query)if(this.props.trayState.loadingSearch)return b("React").createElement(b("XUISpinner.react"),{className:"_zz_",size:"small"});else return b("React").createElement(b("XUICloseButton.react"),{className:"_zz_",onClick:b("PagesAdminHelpTrayActions").clearQuery});return b("React").createElement(b("Image.react"),{className:"_zz_",onClick:this.$5,src:g("142454")})};e.exports=a}),null);
__d("PagesAdminHelpTrayContainer.react",["FluxContainer","PagesAdminHelpTrayDispatcher","PagesAdminHelpTrayStore","PagesAdminHelpTrayView.react","React"],(function(a,b,c,d,e,f){__p&&__p();var g;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.getStores=function(){"use strict";return[b("PagesAdminHelpTrayStore")]};a.calculateState=function(a){"use strict";return{trayState:b("PagesAdminHelpTrayStore").getState()}};a.prototype.UNSAFE_componentWillMount=function(){"use strict";b("PagesAdminHelpTrayDispatcher").explicitlyRegisterStores([b("PagesAdminHelpTrayStore")])};a.prototype.render=function(){"use strict";return b("React").createElement(b("PagesAdminHelpTrayView.react"),{trayState:this.state.trayState,faqs:this.props.cmsItems})};function a(){"use strict";g.apply(this,arguments)}e.exports=b("FluxContainer").create(a)}),null);
__d("PagesManagerBarItemNUX.react",["ContextualLayerUpdateOnScroll","PagesCalloutActions","PagesCalloutDispatcher","PagesCalloutHelper","React","XUIAmbientNUX.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("React").Component);g=c&&c.prototype;function a(a){g.constructor.call(this,a),this.$2=function(){b("PagesCalloutHelper").logXout(this.props.configData.tip_id),this.setState({shown:!1})}.bind(this),this.state={shown:!1}}a.prototype.UNSAFE_componentWillMount=function(){this.props.configData!==null&&b("PagesCalloutDispatcher").dispatch({type:b("PagesCalloutActions").REGISTER_CALLOUT,data:{tip_id:this.props.configData.tip_id,showCallback:function(){return this.$1()}.bind(this),nux_id:this.props.configData.id}})};a.prototype.render=function(){return b("React").createElement(b("XUIAmbientNUX.react"),{behaviors:{ContextualLayerUpdateOnScroll:b("ContextualLayerUpdateOnScroll")},contextRef:this.props.contextRef,onCloseButtonClick:this.$2,position:this.props.position||"below",shown:this.state.shown,width:"auto"},this.props.configData.text)};a.prototype.$1=function(){this.setState({shown:!0})};e.exports=a}),null);
__d("XPagesManagerInboxDisableHighMPSController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/{page_token}/inbox/disabled_high_mps/",{page_token:{type:"String",required:!0},business_id:{type:"Int"}})}),null);
__d("PagesManagerBar.react",["cx","fbt","Arbiter","AsyncRequest","LayerFadeOnHide","Link.react","PagesAdminHelpTrayActionsTypedLogger","PagesAdminHelpTrayContainer.react","PagesCalloutActions","PagesCalloutDispatcher","PagesCalloutHelper","PagesManagerBarItemNUX.react","React","ResponsiveBlock.react","ViewportBounds","XBasicFBNuxDismissController","XBasicFBNuxViewController","XPagesManagerInboxDisableHighMPSController","XPagesManagerSettingsController","XUIAmbientNUX.react","XUIBadge.react","XUIContextualDialog.react","XUINotice.react","XUIPageNavigation.react","emptyFunction","goURI"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=b("XUIPageNavigation.react").Group,k=b("XUIPageNavigation.react").Item;c=babelHelpers.inherits(a,b("React").Component);i=c&&c.prototype;function a(a){i.constructor.call(this,a),this.$6=function(){var a=b("XPagesManagerInboxDisableHighMPSController").getURIBuilder().setString("page_token",this.props.pageToken).getURI();new(b("AsyncRequest"))().setURI(a).setMethod("POST").send()}.bind(this),this.$8=function(a,event){a=!this.state.showHelpTray;this.setState({showHelpTray:a})}.bind(this),this.$4=function(){new(b("PagesAdminHelpTrayActionsTypedLogger"))().setHelpTrayEvent("help_clicked").log()},this.state={height:0,width:0,showHelpTray:!1,isIcebreakersNuxHidden:!1}}a.prototype.componentDidMount=function(){this.$2(),setTimeout(this.refs.pageNavigation.resizeNavbarGroups,0)};a.prototype.componentDidUpdate=function(a,b){b.height!==this.state.height&&this.$2()};a.prototype.render=function(){var a=this.props,c=a.activeSection,d=a.primaryItems,e=a.secondaryItems,f=a.hasHighMpsEnabled;a=a.isMessagesSectionSelected;var g=e.length;g++;return b("React").createElement(b("ResponsiveBlock.react"),{onResize:function(a){return this.setState({width:a})}.bind(this),style:{height:this.state.height},className:"_2bv5"},b("React").createElement("div",{"aria-label":h._("Page Administration"),className:"_juy _zz9 fixed_elem _4kra",style:{height:this.state.height,width:this.state.width},role:"navigation"},b("React").createElement(b("ResponsiveBlock.react"),{onResize:function(a,b){return this.setState({height:b})}.bind(this)},b("React").createElement(b("XUIPageNavigation.react"),{ref:"pageNavigation",className:"_juz",defaultActiveTabKey:c,onTabClick:b("emptyFunction").thatReturnsFalse,scrollThreshold:null},b("React").createElement(j,{maxTabsVisible:6},this.$3(d)),b("React").createElement(j,{className:"uiContextualLayerParent",dropdownMenuAlignh:"right",maxTabsVisible:g,moreLabel:h._("Help"),onClick:this.$4},this.$3(e),this.$5())),b("React").createElement("div",{className:!f||!a?"hidden_elem":""},b("React").createElement(b("XUINotice.react"),{use:"warn"},h._("Your inbox has been disabled due to a high volume of incoming messages. {Link to enable inbox again} Note that some messages sent or received while the inbox was disabled may not appear.",[h._param("Link to enable inbox again",b("React").createElement(b("Link.react"),{href:"#",onClick:this.$6},"Turn on your inbox to receive new messages."))]))))))};a.prototype.$3=function(a){return a.map(function(a){return this.$7(a)}.bind(this))};a.prototype.$9=function(){return b("React").createElement("div",{className:"_yv-",style:{maxHeight:Math.max(window.innerHeight-100,100)}},b("React").createElement(b("PagesAdminHelpTrayContainer.react"),{cmsItems:this.props.helpTrayCMSItems}))};a.prototype.$5=function(){var a=h._("Help");return b("React").createElement(k,{className:"_ju-",ref:"help_ref",key:"PagesHelpTrayButton"},b("React").createElement("span",{"data-testid":a,key:"label",className:"_1b0",tabIndex:0,role:"button",onClick:this.$8,ref:"label"},a),b("React").createElement(b("XUIContextualDialog.react"),{hideOnEscape:!0,hideOnBlur:!0,contextRef:function(){return this.refs.help_ref}.bind(this),shown:this.state.showHelpTray,onClick:this.$8,position:"below",alignment:"right",autoFocus:!0,key:"contextualDialog"},this.$9()))};a.prototype.$7=function(a){var c=a.badgeCount,d=a.label,e=a.maxBadgeCount,f=a.nuxData,g=a.sectionKey,h=a.uri;a=a.uriRel;var i=b("React").createRef();return b("React").createElement(k,{className:"_ju-",href:h,key:g,rel:a},b("React").createElement("span",{"data-testid":d,key:"label",ref:i},d),c>0&&g!==this.props.activeSection?b("React").createElement(b("XUIBadge.react"),{className:"_ju_",count:c,maxcount:e,type:"special"}):null,f!==null?b("React").createElement(b("PagesManagerBarItemNUX.react"),{configData:f,contextRef:function(){return i.current}}):null)};a.prototype.$2=function(){this.$10(),this.$1=b("ViewportBounds").addTop(b("ViewportBounds").getTop()+this.state.height),b("Arbiter").inform("reflow")};a.prototype.$10=function(){this.$1&&this.$1.remove(),this.$1=null};e.exports=a}),null);