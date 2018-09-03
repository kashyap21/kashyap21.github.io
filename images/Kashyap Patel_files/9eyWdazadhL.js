if (self.CavalryLogger) { CavalryLogger.start_js(["2X5Xt"]); }

__d("TabBarItem.react",["cx","Event","Focus","Keys","React","ReactDOM","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h,i;d=b("React").PropTypes;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";return b("React").createElement("li",this.props,this.props.children)};function a(){"use strict";h.apply(this,arguments)}f=babelHelpers.inherits(c,b("React").Component);i=f&&f.prototype;function c(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.focus=function(){this.props.focused&&b("Focus").set(this.refs.tab)}.bind(this),this.onKeyDown=function(event){var a=b("Event").getKeyCode(event);a===b("Keys").SPACE&&this.refs.tab&&(b("ReactDOM").findDOMNode(this.refs.tab).click(),b("Event").prevent(event))}.bind(this),c}c.prototype.render=function(){"use strict";var a=this.props,c=a.selected,d=a.hideFocusRing;a=a.shouldWrapTab;c="_45hc"+(c?" _1hqh":"");d="_3m1v"+(d?" _468f":"");return a?this.$1(c,d):this.$2(b("joinClasses")(c,d))};c.prototype.$1=function(a,c){"use strict";__p&&__p();var d=this.props,e=d.className,f=d.href,g=d.ajaxify,h=d.tabIndex,i=d.rel,j=d.target,k=d.selected,l=d.wrapper,m=d.mockSpacebarClick;d=babelHelpers.objectWithoutProperties(d,["className","href","ajaxify","tabIndex","rel","target","selected","wrapper","mockSpacebarClick"]);f=f||"#";var n={};m&&(n.onKeyDown=this.onKeyDown);m=b("React").createElement("a",{ref:"tab",ajaxify:g,href:f,role:"tab",rel:i,target:j,tabIndex:h,className:c,"aria-selected":k},this.props.children);delete d.focused;delete d.hideFocusRing;delete d.shouldWrapTab;return b("React").createElement(l,babelHelpers["extends"]({},d,{tabIndex:null,className:b("joinClasses")(e,a),role:"presentation"}),b("React").cloneElement(m,n))};c.prototype.$2=function(a){"use strict";__p&&__p();var c=this.props,d=c.className,e=c.href,f=c.selected,g=c.mockSpacebarClick;c=babelHelpers.objectWithoutProperties(c,["className","href","selected","mockSpacebarClick"]);e=e||"#";var h={};g&&(h.onKeyDown=this.onKeyDown);delete c.menuAlignh;delete c.menuClassName;delete c.tabComponent;delete c.maxDropdownHeight;delete c.focused;delete c.hideFocusRing;delete c.wrapper;delete c.shouldWrapTab;g=b("React").createElement("a",babelHelpers["extends"]({},c,{href:e,ref:"tab",role:"tab",className:b("joinClasses")(d,a),"aria-selected":f}),this.props.children);return b("React").cloneElement(g,h)};c.prototype.componentDidMount=function(){"use strict";this.focus()};c.prototype.componentDidUpdate=function(){"use strict";this.focus()};c.propTypes={wrapper:d.func.isRequired,shouldWrapTab:d.bool,tabIndex:d.oneOf([-1,0]),selected:d.bool,focused:d.bool,hideFocusRing:d.bool,mockSpacebarClick:d.bool};c.defaultProps={wrapper:a,shouldWrapTab:!0,tabIndex:-1,selected:!1,focused:!1,hideFocusRing:!1,mockSpacebarClick:!0};e.exports=c}),null);
__d("TabBarItemWrapper.react",["React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.getComponent=function(a){return a.component};a.prototype.render=function(){return this.props.component};function a(){g.apply(this,arguments)}e.exports=a}),null);
__d("TabBar.react",["cx","fbt","invariant","BootloadedComponent.react","Event","JSResource","React","ReactDOM","RTLKeys","TabBarItem.react","TabBarItemWrapper.react","clearTimeout","emptyFunction","joinClasses","setTimeout"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();a=b("React").PropTypes;var j=h._("More"),k=b("React").createClass({displayName:"TabBar",_blurTimeout:null,propTypes:{activeTabKey:a.string,alwaysShowActive:a.bool,className:a.string,defaultActiveTabKey:a.string,dropdownMenuAlignh:a.string,dropdownMenuClassName:a.string,maxTabsVisible:a.number.isRequired,moreLabel:a.node,onTabClick:a.func.isRequired,orientation:a.oneOf(["horizontal","vertical"]).isRequired,dropdownTabComponent:a.func.isRequired,onWidthCalculated:a.func.isRequired,onHeightCalculated:a.func.isRequired,shouldCalculateVisibleTabs:a.bool,maxDropdownHeight:a.number},getDefaultProps:function(){return{alwaysShowActive:!0,className:"",dropdownTabComponent:b("TabBarItem.react"),maxTabsVisible:Infinity,moreLabel:j,onTabClick:b("emptyFunction").thatReturnsTrue,onHeightCalculated:b("emptyFunction"),onWidthCalculated:b("emptyFunction"),orientation:"horizontal",shouldCalculateVisibleTabs:!0}},getInitialState:function(){return{activeTabKey:this.props.activeTabKey||this.props.defaultActiveTabKey,focusedTabKey:null,previousFocusedTabKey:null,visibleTabsCount:0,shouldCalculateVisibleTabs:!0,hideFocusRing:!0}},setWidth:function(a){b("ReactDOM").findDOMNode(this).style.width=a,this.setState({shouldCalculateVisibleTabs:!0})},setHeight:function(a){b("ReactDOM").findDOMNode(this).style.height=a,this.setState({shouldCalculateVisibleTabs:!0})},render:function(){__p&&__p();var a=this.getTabs(),c=a.length,d=this.getActiveTabIndex();d=a[d];var e=this.getActiveTabIndex(!0),f;d&&(f=d.key);var g=this.props.dropdownTabComponent;g=b("React").createElement(g,{key:"_dropdown",ref:"more",className:"_45hd _2pik"},b("React").createElement("span",{className:"_1b0"},this.props.moreLabel));if(this.state.shouldCalculateVisibleTabs)a=a.map(function(a,b){return this._wrapTab(a,b,f,null,e,!1,!1)}.bind(this)),c>2&&a.push(g);else{c=this._groupTabsByVisibility();a=c.visibleTabs;c=c.extraTabs;var h=this._isDropdownSelected(),i=this.state.visibleTabsCount,j=this.state.focusedTabKey;j=j&&this.getFocusedTabIndex()===-1?k.MORE_TAB_KEY:j;a=a.map(function(a,b){return this._wrapTab(a,b,f,j,e,!0,!0)}.bind(this));c=c.map(function(a,b){return this._wrapTab(a,b,f,null,e,!0,!1)}.bind(this));if(c.length){var l;i===0&&d&&(l=d);d=l&&l.props.children||this.props.moreLabel;var m="_dropdown";g=b("React").createElement(b("BootloadedComponent.react"),{bootloadLoader:b("JSResource")("TabBarDropdownItem.react").__setRef("TabBar.react"),bootloadPlaceholder:g,menuAlignh:this.props.dropdownMenuAlignh,menuClassName:this.props.dropdownMenuClassName,selected:h,focused:j===k.MORE_TAB_KEY,hideFocusRing:this.state.hideFocusRing,onMouseDown:this.onMouseDown,onFocus:this.onFocus.bind(this,m),onBlur:this.onBlur,key:m,ref:"more",label:d,tabComponent:this.props.dropdownTabComponent,maxDropdownHeight:this.props.maxDropdownHeight},c);i===0?a=g:a.push(g)}}h=Object.assign({},this.props);delete h.moreLabel;delete h.maxTabsVisible;delete h.onTabClick;delete h.activeTabKey;delete h.onHeightCalculated;delete h.onWidthCalculated;delete h.orientation;delete h.alwaysShowActive;delete h.dropdownTabComponent;delete h.shouldCalculateVisibleTabs;return b("React").createElement("ul",babelHelpers["extends"]({},h,{className:b("joinClasses")(this.props.className,"_43o4"+(this.props.orientation==="horizontal"?" _4470":"")+(this.props.orientation==="vertical"?" _4471":"")),role:"tablist",onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp}),a)},componentDidMount:function(){this._calculateVisibleTabs(),this._calculateDimensions()},componentWillUnmount:function(){b("clearTimeout")(this._blurTimeout)},UNSAFE_componentWillReceiveProps:function(a){this.setState({shouldCalculateVisibleTabs:!0,activeTabKey:a.activeTabKey||this.state.activeTabKey})},shouldComponentUpdate:function(a,b){if(this.state.focusedTabKey&&!b.focusedTabKey)return!1;return!this.state.focusedTabKey&&!b.focusedTabKey&&this.state.previousFocusedTabKey&&!b.previousFocusedTabKey?!1:!0},componentDidUpdate:function(){this.state.shouldCalculateVisibleTabs&&this._calculateVisibleTabs(),this._calculateDimensions()},_calculateDimensions:function(){this.props.orientation==="vertical"?this._calculateWidth():this._calculateHeight()},_calculateWidth:function(){this.props.onWidthCalculated(b("ReactDOM").findDOMNode(this).clientWidth)},_calculateHeight:function(){this.props.onHeightCalculated(b("ReactDOM").findDOMNode(this).clientHeight)},_calculateVisibleTabs:function(){__p&&__p();var a=this.getTabs(),b=a.length,c=Object.keys(this.refs).map(function(a){return this._measure(this.refs[a])}.bind(this)),d=this._measure(this),e=this._measure(this.refs.more),f=Math.min(b,this.props.maxTabsVisible);if(!this.props.shouldCalculateVisibleTabs){this.setState({visibleTabsCount:f,shouldCalculateVisibleTabs:!1});return}var g=this.getActiveTabIndex();this.props.alwaysShowActive&&g!==-1&&(a.unshift(a.splice(g,1)[0]),c.unshift(c.splice(g,1)[0]));f=0;g=0;for(var h=0;h<b;h++){var i=c[h],j=a[h].key||"";if(g+i>d&&!j.startsWith("visual_poll_")){if(f>0&&b>2)while(f>0&&(g+e>d||b-f<2))f--,g-=c[f];else f=0;break}f++;g+=i}this.setState({visibleTabsCount:Math.min(f,this.props.maxTabsVisible),shouldCalculateVisibleTabs:!1})},_measure:function(a){a=b("ReactDOM").findDOMNode(a);return!a||!(a instanceof HTMLElement)?0:this.props.orientation==="vertical"?a.offsetHeight:a.offsetWidth},getActiveTabIndex:function(a){__p&&__p();a===void 0&&(a=!1);var b=this.state.activeTabKey;[];if(a){a=this._groupTabsByVisibility();a=a.visibleTabs;a=a}else a=this.getTabs();return a.findIndex(function(a){return b!=null&&a&&a.key===b})},getFocusedTabIndex:function(){var a=this.state.focusedTabKey||this.state.previousFocusedTabKey,b=this._groupTabsByVisibility();b=b.visibleTabs;return b.findIndex(function(b){return a!=null&&b&&b.key===a})},getFocusedTab:function(){var a=this.state.focusedTabKey,b=this._groupTabsByVisibility();b=b.visibleTabs;var c=b.findIndex(function(b){return a!=null&&b&&b.key===a});return b[c]},onClick:function(a,event){var b=this.props.onTabClick(a,event);b!==!1&&this.isMounted()&&this.activateTab(a)},onMouseDown:function(){this.setState({hideFocusRing:!0})},onKeyDown:function(event){__p&&__p();var a=b("Event").getKeyCode(event);switch(a){case b("RTLKeys").UP:case b("RTLKeys").getRight():case b("RTLKeys").DOWN:case b("RTLKeys").getLeft():var c,d=this._groupTabsByVisibility();d=d.visibleTabs;a=a===b("RTLKeys").UP||a===b("RTLKeys").getLeft();var e=a?-1:1,f=a?0:d.length-1,g=this.getFocusedTabIndex();g===-1&&e===-1&&(g=d.length);g===-1?c=null:g===f&&e===1?c=k.MORE_TAB_KEY:(a=a?Math.max:Math.min,a=a(g+e,f),c=d[a].key);c&&this.setState({focusedTabKey:c,hideFocusRing:!1});break;case b("RTLKeys").RETURN:g=this.getFocusedTab();if(g){e=g.key;f=this.props.onTabClick(e,event);f!==!1&&this.isMounted()&&this.activateTab(e)}break}},onKeyUp:function(event){b("Event").getKeyCode(event)===b("RTLKeys").TAB&&this.state.hideFocusRing&&this.setState({hideFocusRing:!1})},onFocus:function(a,event){b("clearTimeout")(this._blurTimeout),a!==this.state.focusedTabKey&&(this.setState({focusedTabKey:a,previousFocusedTabKey:null}),event.preventDefault(),event.stopPropagation())},onBlur:function(){this.setState({previousFocusedTabKey:this.state.focusedTabKey,focusedTabKey:null}),this._blurTimeout=b("setTimeout")(function(){this.setState({previousFocusedTabKey:null})}.bind(this),k.BLUR_TIMEOUT)},_wrapTab:function(a,c,d,e,f,g,h){a.key!==k.MORE_TAB_KEY||i(0,undefined);d=d!=null&&d===a.key;e=e!=null&&e===a.key;e={selected:d,focused:e,tabIndex:d||f===-1&&c===0?0:-1,hideFocusRing:this.state.hideFocusRing};g?(e.onClick=this.onClick.bind(this,a.key),e.onMouseDown=this.onMouseDown):e.mockSpacebarClick=!1;h&&(e.onFocus=this.onFocus.bind(this,a.key),e.onBlur=this.onBlur);a=b("React").cloneElement(a,e);return b("React").createElement(b("TabBarItemWrapper.react"),{key:a.key,component:a,ref:c})},activateTab:function(a){a&&this.setState({activeTabKey:a,focusedTabKey:a,shouldCalculateVisibleTabs:!0})},getTabs:function(){var a=[];b("React").Children.forEach(this.props.children,function(b){b&&a.push(b)});return a},_groupTabsByVisibility:function(){__p&&__p();var a=this.state.visibleTabsCount,b=this.getTabs(),c=this.getActiveTabIndex(),d,e;if(!this.props.alwaysShowActive||c<a||a===0)e=b.slice(a),d=b.slice(0,a);else{c=b.splice(c,1)[0];a=a>0?a-1:0;e=b.slice(a);d=b.slice(0,a);d.push(c)}return{visibleTabs:d,extraTabs:e}},_isDropdownSelected:function(){var a=this.state.visibleTabsCount,b=this.getActiveTabIndex();a=!this.props.alwaysShowActive&&b>=a||a===0&&b>-1;return a}});k.MORE_TAB_KEY="_moreTab";k.BLUR_TIMEOUT=120;k.Tab=b("TabBarItem.react");e.exports=k}),null);
__d("XUIPageNavigationItem.react",["cx","AsyncRequest","React","TabBarItem.react","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").Component);h=d&&d.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.onClick=function(a,event){this.props.ajaxify&&this.props.rel==="async"&&new(b("AsyncRequest"))(this.props.ajaxify).send();return this.props.onClick?this.props.onClick(a,event):!0}.bind(this),c}a.prototype.render=function(){"use strict";__p&&__p();var a="_5vwz"+(this.props.selected?" _5vwy":""),c=this.props;if(c.ajaxify&&c.rel==="async"){var d=c;d.ajaxify;d.rel;d=babelHelpers.objectWithoutProperties(d,["ajaxify","rel"]);c=d;c.onClick=this.onClick}d=this.props.children;var e,f=typeof d==="string"?d:b("React").isValidElement(d)&&d.props.children&&d.props.children.textContent;f&&(d=b("React").createElement("div",{className:"_4xjz"},d),e=b("React").createElement("div",{className:"_4xj-","aria-hidden":!0},f));return b("React").createElement(b("TabBarItem.react"),babelHelpers["extends"]({},c,{className:b("joinClasses")(this.props.className,a)}),b("React").createElement("div",{className:"_4jq5"},d,e),b("React").createElement("span",{className:"_13xf"}))};a.propTypes={selected:c.bool};a.defaultProps={selected:!1};e.exports=a}),null);
__d("XUIPageNavigationGroup.react",["React","TabBar.react","XUIPageNavigationItem.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=b("React").PropTypes;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.componentDidUpdate=function(){this.refs.bar.setWidth(this.props.width)};a.prototype.componentDidMount=function(){this.refs.bar.setWidth(this.props.width)};a.prototype.render=function(){return b("React").createElement(b("TabBar.react"),babelHelpers["extends"]({},this.props,{ref:"bar"}),this.props.children)};function a(){g.apply(this,arguments)}a.Item=b("XUIPageNavigationItem.react");a.propTypes={moreLabel:c.string,maxTabsVisible:function(a,b,c){a=a[b];if(a!=null&&!(typeof a==="number"&&a>=0))throw new Error("Invalid `"+b+"` supplied to `"+c+"`, expected positive integer.")},width:c.string};a.defaultProps={maxTabsVisible:Infinity};e.exports=a}),null);
__d("XUIPageNavigation.react",["csx","cx","invariant","Arbiter","CSS","DOMQuery","Event","LeftRight.react","React","ReactDOM","Run","SubscriptionsHandler","UITinyViewportAction","Vector","ViewportBounds","XUIPageNavigationGroup.react","joinClasses","killswitch","throttle"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j;c=b("React").PropTypes;var k=15;d=babelHelpers.inherits(a,b("React").PureComponent);j=d&&d.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=j.constructor).call.apply(a,[this].concat(e)),this.state={activeTabKey:undefined,leftWidth:null},this.onTabClick=function(a,event){if(this.props.onTabClick){var c=this.props.onTabClick(a,event);if(!c)return c}b("Arbiter").inform("pageNavigation/tabChanged");event.button===0&&this.setState({activeTabKey:a});return!0}.bind(this),this.resizeNavbarGroups=function(){__p&&__p();if(!this.refs.left)return;var a=b("ReactDOM").findDOMNode(this).clientWidth;if(isNaN(a)||a===0)return;if(!isNaN(this.$7)&&this.refs.right){var c;c=a-this.$7-k;this.$7<c&&(c=this.$7-k);this.setState({rightWidth:c+"px"})}if(!isNaN(this.$6)){c=a-this.$6-k;c<this.$6&&(c=this.$6+k);this.setState({leftWidth:c+"px"})}else this.refs.right||this.setState({leftWidth:a+"px"})}.bind(this),c}a.prototype.componentDidMount=function(){"use strict";__p&&__p();this.$1=new(b("SubscriptionsHandler"))();this.resizeNavbarGroups();this.$2();var a="^.fixed_elem._5vx1";this.wrapper=b("DOMQuery").scry(b("ReactDOM").findDOMNode(this),a)[0];this.wrapper&&(this.$3(),b("killswitch")("SEARCH_WWW_XUIPAGENAVIGATION_AUGMENT_FIXED_POSITION")||b("Run").onCleanupOrLeave(this.wrapper,function(){this.$4!=null&&this.$4.remove()}.bind(this)),b("killswitch")("SEARCH_WWW_XUIPAGENAVIGATION_AUGMENT_FIXED_POSITION")||b("UITinyViewportAction").isTiny()&&b("CSS").removeClass(this.wrapper,"fixed_elem"),this.$1.addSubscriptions(b("UITinyViewportAction").subscribe("change",function(){this.$4.remove(),b("UITinyViewportAction").isTiny()?b("killswitch")("SEARCH_WWW_XUIPAGENAVIGATION_AUGMENT_FIXED_POSITION")||b("CSS").removeClass(this.wrapper,"fixed_elem"):(b("killswitch")("SEARCH_WWW_XUIPAGENAVIGATION_AUGMENT_FIXED_POSITION")||b("CSS").addClass(this.wrapper,"fixed_elem"),this.$3())}.bind(this))));this.props.showDropShadowOnScroll&&(this.wrapper||b("DOMQuery").scry(b("ReactDOM").findDOMNode(this),"^._k").length)&&this.props.scrollThreshold!==null&&this.$5()};a.prototype.componentWillUnmount=function(){"use strict";this.$1.release()};a.prototype.onWidthCalculated=function(a,b){"use strict";a?this.$6=b:this.$7=b};a.prototype.render=function(){"use strict";__p&&__p();var a="_5vx2 _5vx4";a=b("joinClasses")(a,this.props.className);var c=[],d=this.props.activeTabKey||this.state.activeTabKey||this.props.defaultActiveTabKey;b("React").Children.forEach(this.props.children,function(a,e){if(a===null)return;var f={onTabClick:this.onTabClick,activeTabKey:d,onWidthCalculated:this.onWidthCalculated.bind(this,e),ref:e?"right":"left",key:e};e===0&&(f.width=this.state.leftWidth);c.push(b("React").cloneElement(a,f))}.bind(this));c.length===1||c.length===2||i(0,undefined,c.length);return b("React").createElement("div",{className:a},b("React").createElement(b("LeftRight.react"),{className:"_5vx7",direction:this.props.floatDirection},c))};a.prototype.$3=function(){"use strict";var a=this.wrapper.offsetHeight,c=b("ViewportBounds").getTop();this.$4=b("ViewportBounds").addTop(c+a);b("killswitch")("SEARCH_WWW_XUIPAGENAVIGATION_AUGMENT_FIXED_POSITION")&&b("Arbiter").subscribe("page_transition",function(){this.$4.remove()})};a.prototype.$2=function(){"use strict";this.$1.addSubscriptions(b("Event").listen(window,"resize",b("throttle")(this.resizeNavbarGroups,30)))};a.prototype.$5=function(){"use strict";this.$1.addSubscriptions(b("Event").listen(window,"scroll",function(){var a=b("Vector").getScrollPosition().y>this.props.scrollThreshold;if(this.$8===a)return;this.$8=a;b("CSS").conditionClass(b("ReactDOM").findDOMNode(this),"_51j8",a)}.bind(this)))};a.propTypes={onTabClick:c.func,showDropShadowOnScroll:c.bool,scrollThreshold:c.number,floatDirection:c.oneOf(["left","right","both"])};a.defaultProps={showDropShadowOnScroll:!0,scrollThreshold:0,floatDirection:"both"};a.Group=b("XUIPageNavigationGroup.react");a.Item=b("XUIPageNavigationGroup.react").Item;e.exports=a}),null);
__d("InputSelection",["DOM","Focus"],(function(a,b,c,d,e,f){__p&&__p();a={get:function(a){__p&&__p();try{if(typeof a.selectionStart==="number")return{start:a.selectionStart,end:a.selectionEnd}}catch(a){return{start:0,end:0}}if(!document.selection)return{start:0,end:0};var c=document.selection.createRange();if(c.parentElement()!==a)return{start:0,end:0};var d=a.value.length;if(b("DOM").isNodeOfType(a,"input"))return{start:-c.moveStart("character",-d),end:-c.moveEnd("character",-d)};else{var e=c.duplicate();e.moveToElementText(a);e.setEndPoint("StartToEnd",c);a=d-e.text.length;e.setEndPoint("StartToStart",c);return{start:d-e.text.length,end:a}}},set:function(a,c,d){__p&&__p();typeof d==="undefined"&&(d=c);if(document.selection){if(a.tagName=="TEXTAREA"){var e=(a.value.slice(0,c).match(/\r/g)||[]).length,f=(a.value.slice(c,d).match(/\r/g)||[]).length;c-=e;d-=e+f}e=a.createTextRange();e.collapse(!0);e.moveStart("character",c);e.moveEnd("character",d-c);e.select()}else a.selectionStart=c,a.selectionEnd=Math.min(d,a.value.length),b("Focus").set(a)}};e.exports=a}),null);
__d("KeyboardShortcutToken",["KeyEventController"],(function(a,b,c,d,e,f){__p&&__p();function a(a,b,c){"use strict";this.$1=!0,this.key=a,this.handler=b,this.filter=c.filter,this.persistOnTransition=c.persistOnTransition,this.shortcutInfo=c.shortcutInfo,this.register()}a.prototype.register=function(){"use strict";if(!this.$1)return;this.token=b("KeyEventController").registerKey(this.key,this.handler,this.filter,!1,function(){return this.persistOnTransition}.bind(this))};a.prototype.remove=function(){"use strict";this.token.remove(),this.$1=!1};a.prototype.unregister=function(){"use strict";this.token.remove()};a.prototype.isActive=function(){"use strict";return this.$1};a.prototype.getKey=function(){"use strict";return this.key};a.prototype.getShortcutInfo=function(){"use strict";return this.shortcutInfo};e.exports=a}),null);
__d("translateKey",["fbt","invariant"],(function(a,b,c,d,e,f,g,h){var i={alt:g._("alt"),enter:g._("enter"),"delete":g._("delete"),shift:g._("shift"),opt:g._("opt"),ctrl:g._("ctrl"),cmd:g._("cmd"),esc:g._("esc"),tab:g._("tab"),up:g._("up"),down:g._("down"),right:g._("right"),left:g._("left"),page_up:g._("page up"),page_down:g._("page down"),home:g._("home"),end:g._("end")};function a(a){if(Object.prototype.hasOwnProperty.call(i,a))return i[a];a.length===1||h(0,undefined);return a}e.exports=a}),null);
__d("KeyboardShortcuts",["csx","cx","fbt","Arbiter","BasicFBNux","ContextualDialog","CSS","Dock","KeyboardShortcutToken","KeyEventController","Layer","ModalLayer","NavigationMessage","PageTransitions","Run","emptyFunction","translateKey"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();a={_arbiter:null,_hasTriggeredShortcut:!1,_flyoutNub:null,_nubNux:null,_nubNuxID:null,_tokenLayers:[],showInfo:b("emptyFunction"),register:function(a,c,d){__p&&__p();var e=d?d:{};d=function(event,a){c.call(this,event,a),e.allowDefault||event.prevent(),this._hasTriggeredShortcut||this._handleFirstShortcutTriggered()}.bind(this);var f=e.baseFilters||[b("KeyEventController").defaultFilter],g=function(event,a){__p&&__p();for(var b=f,c=Array.isArray(b),d=0,b=c?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(c){if(d>=b.length)break;g=b[d++]}else{d=b.next();if(d.done)break;g=d.value}g=g;if(!g(event,a))return!1}return!e.filter||e.filter(event,a)};a=new(b("KeyboardShortcutToken"))(a,d,{filter:g,persistOnTransition:e.persistOnTransition,shortcutInfo:e.shortcutInfo});this._tokenLayers.length||this._tokenLayers.push([]);this._tokenLayers[this._tokenLayers.length-1].push(a);this.inform("token_added");return a},init:function(){this._cleanup=this._cleanup.bind(this),b("Run").onLeave(this._cleanup),b("Arbiter").subscribe(b("NavigationMessage").NAVIGATION_BEGIN,this._cleanup),b("Layer").subscribe("show",function(a,c){c.hasBehavior(b("ModalLayer"))&&this.pushLayer()}.bind(this)),b("Layer").subscribe("hide",function(a,c){c.hasBehavior(b("ModalLayer"))&&this.popLayer()}.bind(this)),this.register("SLASH",function(){var a=this._getFlyoutNub();a&&b("Dock").toggle(a)}.bind(this),{filter:function(event,a){return event.getModifiers().shift},persistOnTransition:!0,shortcutInfo:{displayKeys:[b("translateKey")("?")],description:i._("Show this help dialog")}})},_cleanup:function(){__p&&__p();var a=[];this._tokenLayers.forEach(function(b){var c=[];b.forEach(function(a){a.isActive()&&c.push(a)});c.length&&a.push(c)});this._tokenLayers=a;this.inform("cleanup");b("PageTransitions").registerCompletionCallback(function(){b("Run").onLeave(this._cleanup),b("Arbiter").subscribe(b("NavigationMessage").NAVIGATION_BEGIN,this._cleanup)}.bind(this))},pushLayer:function(){var a=this._getTopLayer();a&&a.forEach(function(a){a.unregister()});this._tokenLayers.push([])},popLayer:function(){if(this._tokenLayers.length===0)return;var a=this._tokenLayers.pop();a.forEach(function(a){a.remove()});a=this._getTopLayer();a&&a.forEach(function(a){a.register()})},_getTopLayer:function(){return!this._tokenLayers.length?null:this._tokenLayers[this._tokenLayers.length-1]},_getBaseLayer:function(){return!this._tokenLayers.length?null:this._tokenLayers[0]},getShortcutInfos:function(){var a=[],b=this._getBaseLayer();b&&b.forEach(function(b){var c=b.getShortcutInfo();b.isActive()&&c!=null&&a.push(c)});return a},_getArbiterInstance:function(){this._arbiter||(this._arbiter=new(b("Arbiter"))());return this._arbiter},inform:function(a,b,c){return this._getArbiterInstance().inform(a,b,c)},subscribe:function(a,b,c){return this._getArbiterInstance().subscribe(a,b,c)},unsubscribe:function(a){this._getArbiterInstance().unsubscribe(a)},_handleFirstShortcutTriggered:function(){this._hasTriggeredShortcut=!0;var a=this._getFlyoutNub();a&&(b("CSS").removeClass(a,"_ur5"),this._nubNux&&this._nubNuxID&&(this._nubNux.show(),b("BasicFBNux").onView(this._nubNuxID),this._nubNux.subscribe("hide",b("BasicFBNux").onDismiss.bind(this,this._nubNuxID))))},_getFlyoutNub:function(){this._flyoutNub||(this._flyoutNub=document.querySelector("#pagelet_dock ._rz3"));return this._flyoutNub},showShortcutFlyout:function(){this._hasTriggeredShortcut||this._handleFirstShortcutTriggered();var a=this._getFlyoutNub();a&&b("Dock").show(a)},hasFlyoutToShow:function(){return this._getFlyoutNub()!=null&&this.getShortcutInfos().length>0},initNUXEvent:function(a,b){this._nubNux=a,this._nubNuxID=b}};a.init();e.exports=a}),null);
__d("DockingElement",["cx","AbstractDockingElement","Arbiter","CSS","DOM","DOMDimensions","Style","UIGridColumnsConfig","UITinyViewportAction","UserAgent","getElementPosition"],(function(a,b,c,d,e,f,g){__p&&__p();var h=b("UserAgent").isBrowser("Safari")||b("UserAgent").isBrowser("Mobile Safari < 11");function a(a){"use strict";this.$12=a,this.$9=b("DOM").create("div"),b("CSS").addClass(this.$9,"_1pfm"),b("Style").set(this.$9,"position","relative"),b("DOM").replace(this.$12,this.$9),b("DOM").appendContent(this.$9,this.$12),this.$8=0,this.register(),this.update()}a.prototype.register=function(){"use strict";b("AbstractDockingElement").register(this.getRoot(),this.__queryDOM.bind(this),this.__updateWithCache.bind(this))};a.prototype.subscribe=function(event,a,c){"use strict";this.$1||(this.$1=new(b("Arbiter"))());return this.$1.subscribe(event,a,c)};a.prototype.__queryDOM=function(){"use strict";this.$11=b("getElementPosition")(this.getPlaceholder()),this.$5=b("DOMDimensions").getElementDimensions(this.$12)};a.prototype.__updateWithCache=function(){"use strict";__p&&__p();var a=this.$8,c=this.getPlaceholder(),d=!b("UIGridColumnsConfig").responsive_rhc_when_narrow&&b("UITinyViewportAction").isTiny();if(!d&&this.$11.y<=a){!this.$7&&this.$12.parentNode&&(b("CSS").addClass(this.$12,"fixed_elem"),this.$7=!0);var e;this.$4!==a&&(e={},e.top=a+"px",this.$4=a);d=this.$5.width;d!==this.$3&&(e=e||{},e.width=d+"px",this.$3=d);if(h){a=this.$11.x;a!==this.$2&&(e=e||{},e.left=a+"px",this.$2=a)}e&&b("Style").apply(this.$12,e);d=this.$5.height;b("Style").set(c,"height",d+"px");(d+1<this.$10||d-1>this.$10)&&(this.$10=d,this.$1&&this.$1.inform("changedheight"))}else this.$7&&(b("Style").set(c,"height",""),b("Style").apply(this.$12,{left:"",top:"",width:""}),b("CSS").removeClass(this.$12,"fixed_elem"),this.$7=!1,this.$2=null,this.$3=null,this.$4=null)};a.prototype.update=function(){"use strict";this.__queryDOM(),this.__updateWithCache()};a.prototype.getPlaceholder=function(){"use strict";return this.$9};a.prototype.getRoot=function(){"use strict";return this.$12};a.prototype.setOffset=function(a){"use strict";this.$8=a;this.update();return this};e.exports=a}),null);
__d("FacebarPlaceholderShortcut",["fbt","KeyboardShortcuts","translateKey"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a){this._input=a,this._listener=null}a.prototype.enable=function(){this._registerListener()};a.prototype._registerListener=function(){this._listener&&this._listener.remove(),this._listener=b("KeyboardShortcuts").register("SLASH",this._handleKeydown.bind(this),{filter:function(a,b){return!a.getModifiers().shift},persistOnTransition:!0,shortcutInfo:{displayKeys:[b("translateKey")("/")],description:g._("Search")}})};a.prototype.disable=function(){this._listener&&this._listener.remove(),this._listener=null};a.prototype._handleKeydown=function(a){this._input.focus();return!1};e.exports=a}),null);
__d("XFacebarBootloadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/typeahead/search/facebar/bootload/",{placeholder_id:{type:"String"}})}),null);
__d("FacebarBootloader",["AsyncRequest","BanzaiODS","CSS","Event","FacebarPlaceholderShortcut","Run","SubscriptionsHandler","XFacebarBootloadController","getActiveElement"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="facebar_bootloader",h=g+"_";a={isRequested:!1,isFocused:!1,isInitialized:!1,init:function(a,c,d,e){this.reset(),this.subscriptions=new(b("SubscriptionsHandler"))(),this.placeholder=d,this.searchInput=a,this.shortcutHandler=new(b("FacebarPlaceholderShortcut"))(a),this.loadingIndicator=c,this.shortcutHandler.enable(),this.subscriptions.addSubscriptions(b("Event").listen(a,"focus",function(){this.requestSearch(),this.showLoadingIndicator()}.bind(this)),b("Event").listen(d,"mouseover",this.requestSearch.bind(this)),b("Event").listen(a,"invalid",function(event){return event.preventDefault()})),e&&this.subscriptions.addSubscriptions(b("Event").listen(window,"load",this.requestSearch.bind(this))),b("Run").onUnload(this.reset.bind(this)),this.isInitialized=!0,(a.value||b("getActiveElement")()==a)&&(this.requestSearch(),this.showLoadingIndicator())},showLoadingIndicator:function(){this.loadingIndicator&&b("CSS").show(this.loadingIndicator)},reset:function(){this.subscriptions&&this.subscriptions.release(),this.shortcutHandler&&this.shortcutHandler.disable(),this.searchInput=this.subscriptions=this.shortcutHandler=null,this.loadingIndicator=null,this.isRequested=!1,this.isFocused=!1,this.isInitialized=!1},requestSearch:function(){b("getActiveElement")()==this.searchInput&&!this.isFocused&&(this.isFocused=!0,this.focusTime=Date.now());if(this.isRequested||!this.isInitialized)return;this.isRequested=!0;var a=b("XFacebarBootloadController").getURIBuilder().setString("placeholder_id",this.placeholder.getAttribute("id")).getURI(),c=new(b("AsyncRequest"))();c.setURI(a).setMethod("GET").setReadOnly(!0).setAllowCrossPageTransition(!0).setErrorHandler(function(a){b("BanzaiODS").bumpEntityKey(g,h+"request_failed"),a&&a.errorSummary?b("BanzaiODS").bumpEntityKey(g,h+"request_failed_"+a.errorSummary):b("BanzaiODS").bumpEntityKey(g,h+"request_failed_no_error_summary"),this.isRequested=!1}).send()},setFocus:function(a,c,d){if(!this.searchInput)return;b("BanzaiODS").bumpEntityKey(g,h+"response_arrived");(this.searchInput.value||this.isFocused)&&(a.getCore().isFocused=!0,a.getCore().input.setValue(d.fromString(this.searchInput.value),!0),a.getCore().setStartTime(this.focusTime),c.focus(),c.setSelection({length:this.searchInput.selectionEnd-this.searchInput.selectionStart,offset:this.searchInput.selectionStart}),c.togglePlaceHolder&&c.togglePlaceholder());this.reset()}};e.exports=a}),null);
__d("FacebarStructuredFragment",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a,b){if(a&&b)return a.toLowerCase()==b.toLowerCase();else return!a&&!b}var h=new RegExp("[\\u0590-\\u07bf\\u08a0-\\u08ff\\ufb1d-\\ufb4f\\ufb50-\\ufefc\\u200e-\\u200f\\u202a-\\u202e]");function a(a){this._text=String(a.text),this._uid=a.uid?String(a.uid):null,this._type=a.type?String(a.type):null,this._typeParts=null,this._isLocal=Boolean(a.isLocal),this._categoryName=a.categoryName?a.categoryName:null}a.prototype.getText=function(){return this._text};a.prototype.getUID=function(){return this._uid};a.prototype.getType=function(){return this._type};a.prototype.getTypePart=function(a){return this._getTypeParts()[a]};a.prototype.getLength=function(){return this._text.length};a.prototype.isType=function(a){for(var b=0;b<arguments.length;b++)if(!g(arguments[b],this.getTypePart(b)))return!1;return!0};a.prototype.isLocal=function(){return this._isLocal};a.prototype.getCategoryName=function(){return this._categoryName};a.prototype.isWhitespace=function(){return/^\s*$/.test(this._text)};a.prototype.hasRTL=function(){return h.test(this._text)};a.prototype.toStruct=function(){return{text:this._text,type:this._type,uid:this._uid,isLocal:this._isLocal,categoryName:this._categoryName}};a.prototype.getHash=function(a){a=a!=null?this._getTypeParts().slice(0,a).join(":"):this._type;return String(a)+"::"+this._text};a.prototype._getTypeParts=function(){var a=this._typeParts;a==null&&(a=this._type!=null?this._type.split(":"):[],this._typeParts=a);return a};e.exports=a}),null);
__d("FacebarStructuredText",["FacebarStructuredFragment","createArrayFromMixed"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=/\s+$/;function h(a){if(!a)return[];else if(a instanceof k)return a.toArray();else return b("createArrayFromMixed")(a).map(function(a){return new(b("FacebarStructuredFragment"))(a)})}function i(a){return new(b("FacebarStructuredFragment"))({text:a,type:"text"})}function j(a,c,d){var e=a.getText();c=e.replace(c,d);if(e!=c)return new(b("FacebarStructuredFragment"))({text:c,type:a.getType(),uid:a.getUID()});else return a}function k(a){this._fragments=a||[],this._hash=null}k.prototype.matches=function(a,b){if(a){var c=this._fragments,d=a._fragments;return c.length==d.length&&!c.some(function(a,c){var e;!b&&a.getUID()?e=a.getUID()!=d[c].getUID():e=a.getText()!=d[c].getText()||a.getType()!=d[c].getType();return e||a.isLocal()!=d[c].isLocal()})}return!1};k.prototype.trim=function(){var a=null,b=null;this.forEach(function(c,d){c.isWhitespace()||(a===null&&(a=d),b=d)});if(b!==null){var c=this._fragments.slice(a,b+1);c.push(j(c.pop(),g,""));return new k(c)}else return new k([])};k.prototype.pad=function(){var a=this.getFragment(-1);if(a&&!g.test(a.getText())&&a.getText()!=="")return new k(this._fragments.concat(i(" ")));else return this};k.prototype.forEach=function(a){this._fragments.forEach(a);return this};k.prototype.matchType=function(a){var b=null;for(var c=0;c<this._fragments.length;c++){var d=this._fragments[c],e=d.isType.apply(d,arguments);if(e&&!b)b=d;else if(e||!d.isWhitespace())return null}return b};k.prototype.hasType=function(a){var b=arguments;return this._fragments.some(function(a){return!a.isWhitespace()&&a.isType.apply(a,b)})};k.prototype.isLocal=function(){return this._fragments.some(function(a){return a.isLocal()})};k.prototype.getCategoryName=function(){var a=this._fragments.filter(function(a){return a.getCategoryName()});return a.length>0?a[0].getCategoryName():null};k.prototype.endsOnType=function(a){var b=arguments,c=this._fragments[this._fragments.length-1];return!!c&&!c.isWhitespace()&&c.isType.apply(c,b)};k.prototype.isEmptyOrWhitespace=function(){return!this._fragments.some(function(a){return!a.isWhitespace()})};k.prototype.hasRTL=function(){return this._fragments.some(function(a){return a.hasRTL()})};k.prototype.isEmpty=function(){return this.getLength()===0};k.prototype.getFragment=function(a){return this._fragments[a>=0?a:this._fragments.length+a]};k.prototype.getCount=function(){return this._fragments.length};k.prototype.getLength=function(){return this._fragments.reduce(function(a,b){return a+b.getLength()},0)};k.prototype.toStruct=function(){return this._fragments.map(function(a){return a.toStruct()})};k.prototype.toArray=function(){return this._fragments.slice()};k.prototype.toString=function(){return this._fragments.map(function(a){return a.getText()}).join("")};k.prototype.getHash=function(){this._hash===null&&(this._hash=this._fragments.map(function(a){if(a.getUID())return"[["+a.getHash(1)+"]]";else return a.getText()}).join(""));return this._hash};k.fromStruct=function(a){return new k(h(a))};k.fromString=function(a){return new k([i(a.toString())])};e.exports=k}),null);
__d("FacebarNavigation",["csx","Arbiter","DOMQuery","FacebarBootloader","FacebarStructuredText","FlipDirection","Input","QueryHistory","URI"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=null,i=null,j=null,k=!1,l=!0,m=!1;function n(a,b){m||(j=a),m=!1,k=b,l=!1,o()}function o(){if(l)return;else i?(k&&i.pageTransition(),i.setPageQuery(j),l=!0):h&&j&&!b("Input").getValue(h)&&b("Input").setValue(h,j.structure.toString()+" ");h!=null&&(b("FlipDirection").setDirection(h),h.blur())}b("Arbiter").subscribe("page_transition",function(a,c){!p.isTopControlTransition(c.uri)&&!p.isTimelineAbout(c.uri)&&n(b("QueryHistory").get(c.uri),!0)});b("Arbiter").subscribe("save_facebar_query",function(a,b){m=!0});var p={registerInput:function(a){h=b("DOMQuery").scry(a,"._586f")[0],h==null&&(h=b("DOMQuery").scry(a,"._1frb")[0]),o()},registerBehavior:function(a){i=a,o()},setPageQuery:function(a){b("QueryHistory").set(b("URI").getNextURI(),a),a.structure instanceof b("FacebarStructuredText")||(a.structure=b("FacebarStructuredText").fromStruct(a.structure)),n(a,!1),b("FacebarBootloader").requestSearch()},isTopControlTransition:function(a){return String(a.getPath()).startsWith("/search/")&&a.getQueryData().ref==="top_filter"&&!a.getQueryData().hard_refresh},isTimelineAbout:function(a){return/\/about$/.test(a.getPath())&&!a.getQueryData().hard_refresh}};e.exports=p}),null);
__d("XUIPageNavigationShim",["DOMContainer.react","PagesEventObserver","PagesEventType","React","isNode"],(function(a,b,c,d,e,f){__p&&__p();var g,h=function(){var a=0;return function(){return"XUIPageNavigationShim-"+a++}}();function i(a){__p&&__p();var c;a.children&&(c=a.children.map(function(a){if(typeof a==="object"&&typeof a.ctor==="function")return i(a);else if(b("isNode")(a))return b("React").createElement(b("DOMContainer.react"),{key:h()},a);else return a}),c.length===1&&(c=c[0]));var d=a.ctor;a.props.ignoreTabClick?a.props.onTabClick=function(){return!1}:a.props.pageid&&(a.props.onTabClick=function(c,event){b("PagesEventObserver").notify(b("PagesEventType").ADMIN_NAV_TAB_CLICK,a.props.pageid,{tab:c})});return b("React").createElement(d,babelHelpers["extends"]({key:h()},a.props),c)}g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.render=function(){"use strict";return i(this.props)};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);