__d(function(e,t,n,a){'use strict';Object.defineProperty(a,"__esModule",{value:!0});var r=t(46),i=babelHelpers.interopRequireDefault(r),s=t(12),l=t(338),o=babelHelpers.interopRequireDefault(l),c=t(513),d=babelHelpers.interopRequireDefault(c),u=t(514),h=babelHelpers.interopRequireDefault(u),f=t(515),p=babelHelpers.interopRequireDefault(f),m=t(517),g=babelHelpers.interopRequireDefault(m),x=t(518),b=t(511),w=(function(e){function t(e){babelHelpers.classCallCheck(this,t);var n=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isFreshing:!1,menuList:[],curChannelIndex:0,channelInfo:[{id:'news_hot',name:'\u70ed\u70b9'},{id:'news_society',name:'\u793e\u4f1a'},{id:'news_entertainment',name:'\u5a31\u4e50'},{id:'news_tech',name:'\u79d1\u6280'},{id:'news_car',name:'\u6c7d\u8f66'},{id:'news_sports',name:'\u4f53\u80b2'},{id:'news_finance',name:'\u8d22\u7ecf'},{id:'news_military',name:'\u519b\u4e8b'},{id:'news_world',name:'\u56fd\u9645'},{id:'essay_joke',name:'\u6bb5\u5b50'},{id:'question_and_answer',name:'\u95ee\u7b54'},{id:'image_funny',name:'\u8da3\u56fe'},{id:'\u7ec4\u56fe',name:'\u56fe\u7247'}]},n}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"getItemTitles",value:function(){var e=[];return this.state.channelInfo.forEach(function(t){e.push(t.name)}),e}},{key:"getCurrentChannel",value:function(){var e=this.state.curChannelIndex;return this.state.channelInfo[e].id}},{key:"getCurrentNews",value:function(){var e=this.getCurrentChannel();return this.getMenuData(e,1,10)}},{key:"componentDidMount",value:function(){this.getCurrentNews()}},{key:"navToSearch",value:function(){this.props.navigator.push({component:g.default,args:{}})}},{key:"chooseNews",value:function(e){console.log('url:'+e),this.props.navigator.push({component:p.default,args:{uri:e}})}},{key:"changeChannel",value:function(e){var t=this;this.setState({menuList:[],curChannelIndex:e},function(){t.getCurrentNews(),t.refs.newsList.scrollToOffset({x:0,y:0,animated:!1})})}},{key:"getMenuData",value:function(e, t, n){var a=this;(0,x.getNewsByChannel)(e,t,n).then(function(e){var t=a.state.menuList.slice();t.push.apply(t,babelHelpers.toConsumableArray(e)),a.setState({menuList:t}),console.log(t)}).catch(function(e){s.ToastAndroid.show(e,s.ToastAndroid.SHORT)})}},{key:"loadMore",value:function(){if(!(this.state.menuList.length<=0)){var e=this.getCurrentChannel(),t=this.state.menuList.length+2,n=this.state.menuList.length+12;this.getMenuData(e,t,n)}}},{key:"refreshHandle",value:function(){var e=this;this.setState({menuList:[]},function(){e.getCurrentNews()})}},{key:"backToTop",value:function(){this.refs.newsList.scrollToOffset({x:0,y:0,animated:!0})}},{key:"render",value:function(){var e=this;return i.default.createElement(s.View,{style:{flex:1}},i.default.createElement(s.View,{style:y.headerBar},i.default.createElement(s.Text,{style:y.headerTitle},"\u70ed\u70b9\u5934\u6761"),i.default.createElement(s.TouchableOpacity,{activeOpacity:.9,style:y.searchBox,onPress:this.navToSearch.bind(this)},i.default.createElement(o.default,{style:y.searchIcon,name:"search"}),i.default.createElement(s.Text,{style:y.searchText},"\u641c\u4f60\u60f3\u641c\u7684"))),i.default.createElement(h.default,{items:this.getItemTitles(),selectHandle:this.changeChannel.bind(this)}),i.default.createElement(s.FlatList,{ref:"newsList",ItemSeparatorComponent:function(){return i.default.createElement(s.View,{style:y.line})},data:this.state.menuList,onEndReached:this.loadMore.bind(this),onEndReachedThreshold:.2,keyExtractor:function(e, t){return t.toString()},renderItem:function(t){var n=t.item;t.separators;return i.default.createElement(s.TouchableHighlight,{onPress:e.chooseNews.bind(e,n.url)},i.default.createElement(s.View,{style:y.newsItem},i.default.createElement(s.Text,{style:y.itemTitle},n.title),i.default.createElement(s.Text,{style:y.itemAbstract},n.abstract),i.default.createElement(s.View,{style:y.imgBox},n.image_list?n.image_list.map(function(e,t){return i.default.createElement(s.Image,{style:1===n.image_list.length?y.oneImg:n.image_list.length-1===t?y.lastImg:y.itemImg,source:{uri:e.url},resizeMode:"stretch",key:t})}):[]),i.default.createElement(s.View,{style:y.tipsBox},i.default.createElement(s.Text,{style:y.stick_label},n.stick_label),i.default.createElement(s.Text,{style:y.tips},n.source),i.default.createElement(s.Text,{style:y.tips},(n.comment_count||0)+'\u8bc4\u8bba'))))},refreshControl:i.default.createElement(s.RefreshControl,{refreshing:this.state.isFreshing,onRefresh:this.refreshHandle.bind(this),colors:['red','#ffd500','#0080ff','#99e600'],tintColor:"red",title:"Loading...",titleColor:"red"})}),i.default.createElement(d.default,{pressHandle:this.backToTop.bind(this)}))}}]),t})(r.Component);a.default=w;var y=s.StyleSheet.create({headerBar:{height:(0,b.px2dp)(40),backgroundColor:'#d33d3c',flexDirection:'row',paddingLeft:(0,b.px2dp)(10),paddingRight:(0,b.px2dp)(10),alignItems:'center'},headerTitle:{fontWeight:'bold',fontSize:(0,b.px2dp)(18),color:'white'},searchBox:{backgroundColor:'#f5f5f3',flex:1,marginLeft:(0,b.px2dp)(15),height:(0,b.px2dp)(25),borderRadius:(0,b.px2dp)(3),padding:(0,b.px2dp)(3),flexDirection:'row',alignItems:'center'},searchIcon:{fontSize:(0,b.px2dp)(18)},searchText:{fontSize:(0,b.px2dp)(13)},line:{backgroundColor:'#f5f5f3',height:(0,b.px2dp)(1)},newsItem:{backgroundColor:'white',padding:(0,b.px2dp)(10)},itemTitle:{fontSize:(0,b.px2dp)(16),color:'black'},itemAbstract:{fontSize:(0,b.px2dp)(12),color:'gray',paddingTop:(0,b.px2dp)(5)},stick_label:{fontSize:(0,b.px2dp)(10),color:'red'},imgBox:{flexDirection:'row',marginTop:(0,b.px2dp)(6)},itemImg:{flex:1,marginRight:(0,b.px2dp)(4),height:(0,b.px2dp)(70)},lastImg:{flex:1,marginRight:0,height:(0,b.px2dp)(70)},oneImg:{flex:1,height:(0,b.px2dp)(180)},tipsBox:{flexDirection:'row',marginTop:(0,b.px2dp)(6)},tips:{fontSize:(0,b.px2dp)(12),marginRight:(0,b.px2dp)(6)}})},512);