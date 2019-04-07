__d(function(e,t,n,a){'use strict';var o=t(114),s=t(35),r=t(112),i=t(109),l=t(39),d=t(150),p=t(59),c=t(152),g=t(113),u=t(125),h=t(132),b=t(127),m=t(142),v='webview',f=h({IDLE:null,LOADING:null,ERROR:null}),C=(function(e){function t(){var e,n,a,o;babelHelpers.classCallCheck(this,t);for(var s=arguments.length,r=Array(s),i=0;i<s;i++)r[i]=arguments[i];return n=a=babelHelpers.possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),a.state={viewState:f.IDLE,lastErrorEvent:null,startInLoadingState:!0},a.goForward=function(){p.dispatchViewManagerCommand(a.getWebViewHandle(),p.RCTWebView.Commands.goForward,null)},a.goBack=function(){p.dispatchViewManagerCommand(a.getWebViewHandle(),p.RCTWebView.Commands.goBack,null)},a.reload=function(){a.setState({viewState:f.LOADING}),p.dispatchViewManagerCommand(a.getWebViewHandle(),p.RCTWebView.Commands.reload,null)},a.stopLoading=function(){p.dispatchViewManagerCommand(a.getWebViewHandle(),p.RCTWebView.Commands.stopLoading,null)},a.postMessage=function(e){p.dispatchViewManagerCommand(a.getWebViewHandle(),p.RCTWebView.Commands.postMessage,[String(e)])},a.injectJavaScript=function(e){p.dispatchViewManagerCommand(a.getWebViewHandle(),p.RCTWebView.Commands.injectJavaScript,[e])},a.updateNavigationState=function(e){a.props.onNavigationStateChange&&a.props.onNavigationStateChange(e.nativeEvent)},a.getWebViewHandle=function(){return l.findNodeHandle(a.refs[v])},a.onLoadingStart=function(e){var t=a.props.onLoadStart;t&&t(e),a.updateNavigationState(e)},a.onLoadingError=function(e){e.persist();var t=a.props,n=t.onError,o=t.onLoadEnd;n&&n(e),o&&o(e),console.warn('Encountered an error loading page',e.nativeEvent),a.setState({lastErrorEvent:e.nativeEvent,viewState:f.ERROR})},a.onLoadingFinish=function(e){var t=a.props,n=t.onLoad,o=t.onLoadEnd;n&&n(e),o&&o(e),a.setState({viewState:f.IDLE}),a.updateNavigationState(e)},a.onMessage=function(e){var t=a.props.onMessage;t&&t(e)},o=n,babelHelpers.possibleConstructorReturn(a,o)}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"componentWillMount",value:function(){this.props.startInLoadingState&&this.setState({viewState:f.LOADING})}},{key:"render",value:function(){var e=null;if(this.state.viewState===f.LOADING)e=(this.props.renderLoading||function(){return r.createElement(c,{style:E.loadingView},r.createElement(s,{style:E.loadingProgressBar}))})();else if(this.state.viewState===f.ERROR){var t=this.state.lastErrorEvent;e=this.props.renderError&&this.props.renderError(t.domain,t.code,t.description)}else this.state.viewState!==f.IDLE&&console.error('RCTWebView invalid state encountered: '+this.state.loading);var n=[E.container,this.props.style];this.state.viewState!==f.LOADING&&this.state.viewState!==f.ERROR||n.push(E.hidden);var a=this.props.source||{};this.props.html?a.html=this.props.html:this.props.url&&(a.uri=this.props.url),'POST'===a.method&&a.headers?console.warn('WebView: `source.headers` is not supported when using POST.'):'GET'===a.method&&a.body&&console.warn('WebView: `source.body` is not supported when using GET.');var o=this.props.nativeConfig||{},i=o.component||w,l=r.createElement(i,babelHelpers.extends({ref:v,key:"webViewKey",style:n,source:m(a),scalesPageToFit:this.props.scalesPageToFit,injectedJavaScript:this.props.injectedJavaScript,userAgent:this.props.userAgent,javaScriptEnabled:this.props.javaScriptEnabled,thirdPartyCookiesEnabled:this.props.thirdPartyCookiesEnabled,domStorageEnabled:this.props.domStorageEnabled,messagingEnabled:'function'==typeof this.props.onMessage,onMessage:this.onMessage,contentInset:this.props.contentInset,automaticallyAdjustContentInsets:this.props.automaticallyAdjustContentInsets,onContentSizeChange:this.props.onContentSizeChange,onLoadingStart:this.onLoadingStart,onLoadingFinish:this.onLoadingFinish,onLoadingError:this.onLoadingError,testID:this.props.testID,mediaPlaybackRequiresUserAction:this.props.mediaPlaybackRequiresUserAction,allowUniversalAccessFromFileURLs:this.props.allowUniversalAccessFromFileURLs,mixedContentMode:this.props.mixedContentMode,saveFormDataDisabled:this.props.saveFormDataDisabled,urlPrefixesForDefaultIntent:this.props.urlPrefixesForDefaultIntent},o.props));return r.createElement(c,{style:E.container},l,e)}}],[{key:"extraNativeComponentConfig",get:function(){return{nativeOnly:{messagingEnabled:i.bool}}}}]),t})(r.Component);C.propTypes=babelHelpers.extends({},g,{renderError:i.func,renderLoading:i.func,onLoad:i.func,onLoadEnd:i.func,onLoadStart:i.func,onError:i.func,automaticallyAdjustContentInsets:i.bool,contentInset:o,onNavigationStateChange:i.func,onMessage:i.func,onContentSizeChange:i.func,startInLoadingState:i.bool,style:g.style,html:u(i.string,'Use the `source` prop instead.'),url:u(i.string,'Use the `source` prop instead.'),source:i.oneOfType([i.shape({uri:i.string,method:i.oneOf(['GET','POST']),headers:i.object,body:i.string}),i.shape({html:i.string,baseUrl:i.string}),i.number]),javaScriptEnabled:i.bool,thirdPartyCookiesEnabled:i.bool,domStorageEnabled:i.bool,injectedJavaScript:i.string,scalesPageToFit:i.bool,userAgent:i.string,testID:i.string,mediaPlaybackRequiresUserAction:i.bool,allowUniversalAccessFromFileURLs:i.bool,injectJavaScript:i.func,mixedContentMode:i.oneOf(['never','always','compatibility']),saveFormDataDisabled:i.bool,nativeConfig:i.shape({component:i.any,props:i.object,viewManager:i.object}),urlPrefixesForDefaultIntent:i.arrayOf(i.string)}),C.defaultProps={javaScriptEnabled:!0,thirdPartyCookiesEnabled:!0,scalesPageToFit:!0,saveFormDataDisabled:!1};var w=b('RCTWebView',C,C.extraNativeComponentConfig),E=d.create({container:{flex:1},hidden:{height:0,flex:0},loadingView:{flex:1,justifyContent:'center',alignItems:'center'},loadingProgressBar:{height:20}});n.exports=C},274);