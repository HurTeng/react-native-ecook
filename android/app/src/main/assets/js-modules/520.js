__d(function(e,t,a,i){'use strict';Object.defineProperty(i,"__esModule",{value:!0});var r=t(46),n=babelHelpers.interopRequireDefault(r),l=t(12),o=t(338),s=babelHelpers.interopRequireDefault(o),d=t(515),u=babelHelpers.interopRequireDefault(d),c=t(521),m=babelHelpers.interopRequireDefault(c),h=t(518),p=t(511),f=(function(e){function t(e){babelHelpers.classCallCheck(this,t);var a=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={data:[],isFreshing:!1},a}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"componentDidMount",value:function(){this.getHomeData(10)}},{key:"getClickEffect",value:function(){return l.Platform.Version>=21?l.TouchableNativeFeedback.Ripple('rgba(0,0,0,0.2)',!1):l.TouchableNativeFeedback.SelectableBackground()}},{key:"getHomeData",value:function(e){var t=this;(0,h.getHomeData)(e).then(function(e){var a=[];e.map(function(e, t){a.push({key:e.id,id:e.id,url:e.url,image:e.image_info.url,text:e.title,summary:e.summary,authorImage:e.authors[0].avatar.normal||'https://1-im.guokr.com/TL27-S81EuoahCN7pVlXlzCI6I07ORoBQCo7fDv5EUqgAAAAoAAAAFBO.png?imageView2/1/w/48/h/48',authorName:e.authors[0].nickname,commentNum:Math.floor(200*Math.random()),likeNum:Math.floor(200*Math.random())})});var i=t.state.data.slice();i.push.apply(i,a),t.setState({data:i})}).catch(function(e){l.ToastAndroid.show(e,l.ToastAndroid.SHORT)})}},{key:"loadMore",value:function(){this.state.data.length<=0||this.getHomeData(this.state.data.length+10)}},{key:"refreshHandle",value:function(){var e=this;this.setState({data:[]},function(){e.getHomeData(10)})}},{key:"navTo",value:function(e){for(var t='',a=0; a<this.state.data.length; a++)if(this.state.data[a].id===e){t=this.state.data[a].url;break}this.props.navigator.push({component:u.default,args:{uri:t}})}},{key:"renderSwiper",value:function(){return n.default.createElement(m.default,{data:this.state.data.slice(0,5),height:(0,p.px2dp)(200),activeColor:"#fa4747",pressHandle:this.navTo.bind(this)})}},{key:"render",value:function(){var e=this;return n.default.createElement(l.View,{style:{flex:1}},n.default.createElement(l.FlatList,{ref:"dataList",data:this.state.data.length>0?this.state.data.slice(5):[],onEndReached:this.loadMore.bind(this),onEndReachedThreshold:.2,extraData:this.state.data,ListHeaderComponent:this.renderSwiper(),renderItem:function(t){var a=t.item;t.separators;return n.default.createElement(l.TouchableNativeFeedback,{background:e.getClickEffect(),onPress:e.navTo.bind(e,a.id)},n.default.createElement(l.View,{style:g.itemBox},n.default.createElement(l.View,{style:g.itemMain},n.default.createElement(l.View,{style:g.mainLeft},n.default.createElement(l.Text,{numberOfLines:2,style:g.title},a.text),n.default.createElement(l.Text,{numberOfLines:2,style:g.summary},a.summary)),n.default.createElement(l.Image,{style:g.mainRight,source:{uri:a.image},resizeMode:"stretch"})),n.default.createElement(l.View,{style:g.itemTips},n.default.createElement(l.View,{style:g.tipsLeft},n.default.createElement(l.Image,{style:g.authorImg,source:{uri:a.authorImage},resizeMode:"stretch"}),n.default.createElement(l.Text,{style:g.authorName},a.authorName)),n.default.createElement(l.View,{style:g.tipsRight},n.default.createElement(s.default,{style:g.icon,name:"comment"}),n.default.createElement(l.Text,{style:g.num},a.commentNum+''),n.default.createElement(s.default,{style:g.icon,name:"thumb-up"}),n.default.createElement(l.Text,{style:g.num},a.likeNum+'')))))},refreshControl:n.default.createElement(l.RefreshControl,{refreshing:this.state.isFreshing,onRefresh:this.refreshHandle.bind(this),colors:['red','#ffd500','#0080ff','#99e600'],tintColor:"red",title:"Loading...",titleColor:"red"})}))}}]),t})(r.Component);i.default=f;var g=l.StyleSheet.create({itemBox:{height:(0,p.px2dp)(150),paddingTop:(0,p.px2dp)(15),paddingLeft:(0,p.px2dp)(10),paddingRight:(0,p.px2dp)(10),justifyContent:'space-between',backgroundColor:'white'},itemMain:{flexDirection:'row',justifyContent:'space-between'},mainLeft:{width:(0,p.px2dp)(220)},title:{color:'black'},summary:{color:'#b4b4b4',marginTop:(0,p.px2dp)(6),fontSize:(0,p.px2dp)(12)},mainRight:{width:(0,p.px2dp)(120),height:(0,p.px2dp)(100)},itemTips:{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:(0,p.px2dp)(.8),borderBottomColor:'rgba(0,0,0,0.1)',paddingBottom:(0,p.px2dp)(10)},tipsLeft:{flexDirection:'row',alignItems:'center'},authorImg:{width:(0,p.px2dp)(20),height:(0,p.px2dp)(20),borderRadius:(0,p.px2dp)(50)},authorName:{marginLeft:(0,p.px2dp)(10),fontSize:(0,p.px2dp)(12)},tipsRight:{flexDirection:'row',alignItems:'center'},icon:{marginRight:(0,p.px2dp)(2),marginLeft:(0,p.px2dp)(10),color:'#b4b4b4'},num:{fontSize:(0,p.px2dp)(12),color:'#b4b4b4'}})},520);