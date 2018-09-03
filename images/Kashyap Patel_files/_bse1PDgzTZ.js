if (self.CavalryLogger) { CavalryLogger.start_js(["Ph4CL"]); }

__d("ReactComposerPlayWithFriendsTaggerComponent.react",["cx","fbt","GamesTypeahead.react","Grid.react","InstantGamesFeedEvent","InstantGamesFeedEventSection","InstantGamesFeedTypedLogger","React","ReactComposerContextTypes","ReactComposerStore"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=b("Grid.react").GridItem;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.componentDidMount=function(){var a=b("ReactComposerStore").getTargetType(this.context.composerID);new(b("InstantGamesFeedTypedLogger"))().setEvent(b("InstantGamesFeedEvent").PLAY_WITH_FRIENDS_COMPOSER_TAGGER_OPENED).setUISurface(b("InstantGamesFeedEventSection").PLAY_WITH_FRIENDS_ATTACHMENT).setGroupID(a=="group"?this.context.targetID:null).log()};a.prototype.render=function(){return b("React").createElement(b("Grid.react"),{className:"_5esl",cols:2},b("React").createElement(j,{className:"_5esm",key:"label"},h._("Playing")),b("React").createElement(j,{className:"_5esw",key:"tokenizer"},b("React").createElement(b("GamesTypeahead.react"),{className:"_5esx",clearOnSelect:!0,filterVideoTags:!1,focusOnMount:!0,includeSeries:!1,onGameSelect:this.props.onSelect,queryInstantGames:!0,showEntriesOnFocus:!0})))};function a(){i.apply(this,arguments)}a.contextTypes=b("ReactComposerContextTypes");e.exports=a}),null);