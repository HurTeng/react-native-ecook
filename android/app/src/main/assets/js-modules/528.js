__d(function(e,t,l,a){'use strict';Object.defineProperty(a,"__esModule",{value:!0});var r=t(46),o=babelHelpers.interopRequireDefault(r),c=t(12),n=t(338),d=babelHelpers.interopRequireDefault(n),i=t(511),f=(function(e){function t(e){return babelHelpers.classCallCheck(this,t),babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"getClickEffect",value:function(){return c.Platform.Version>=21?c.TouchableNativeFeedback.Ripple('rgba(0,0,0,0.2)',!1):c.TouchableNativeFeedback.SelectableBackground()}},{key:"render",value:function(){return o.default.createElement(c.View,{style:{flex:1}},o.default.createElement(c.View,{style:s.personalInfo},o.default.createElement(c.View,{style:s.personalTop},o.default.createElement(c.Image,{style:s.userImg,source:{uri:'https://tvax4.sinaimg.cn/crop.0.0.480.480.180/768c39d5ly8fjje1d0teej20dc0dcq35.jpg'},resizeMode:"stretch"})),o.default.createElement(c.View,{style:s.personalBottom},o.default.createElement(c.View,{style:[s.personalItem,{borderRightWidth:(0,i.px2dp)(1),borderRightColor:'#8b8b8b'}]},o.default.createElement(c.Text,{style:s.itemNum},"0"),o.default.createElement(c.Text,{style:s.itemText},"\u52a8\u6001")),o.default.createElement(c.View,{style:[s.personalItem,{borderRightWidth:(0,i.px2dp)(1),borderRightColor:'#8b8b8b'}]},o.default.createElement(c.Text,{style:s.itemNum},"0"),o.default.createElement(c.Text,{style:s.itemText},"\u5173\u6ce8")),o.default.createElement(c.View,{style:s.personalItem},o.default.createElement(c.Text,{style:s.itemNum},"0"),o.default.createElement(c.Text,{style:s.itemText},"\u7c89\u4e1d")))),o.default.createElement(c.View,{style:s.selectBox},o.default.createElement(c.TouchableNativeFeedback,{background:this.getClickEffect()},o.default.createElement(c.View,{style:s.selectItem},o.default.createElement(d.default,{style:[s.selectIcon,{color:'#e3952b'}],name:"stars"}),o.default.createElement(c.Text,{style:s.selectText},"\u6536\u85cf"))),o.default.createElement(c.TouchableNativeFeedback,{background:this.getClickEffect()},o.default.createElement(c.View,{style:s.selectItem},o.default.createElement(d.default,{style:[s.selectIcon,{color:'#e66489'}],name:"history"}),o.default.createElement(c.Text,{style:s.selectText},"\u5386\u53f2"))),o.default.createElement(c.TouchableNativeFeedback,{background:this.getClickEffect()},o.default.createElement(c.View,{style:s.selectItem},o.default.createElement(d.default,{style:[s.selectIcon,{color:'#7d91fa'}],name:"lightbulb-outline"}),o.default.createElement(c.Text,{style:s.selectText},"\u591c\u95f4")))),o.default.createElement(c.TouchableNativeFeedback,{background:this.getClickEffect()},o.default.createElement(c.View,{style:[s.bar,{marginTop:(0,i.px2dp)(10)}]},o.default.createElement(c.Text,{style:s.barTitle},"\u6d88\u606f\u901a\u77e5"),o.default.createElement(d.default,{style:[s.barIcon,{color:'rgba(0,0,0,0.5)'}],name:"keyboard-arrow-right"}))),o.default.createElement(c.TouchableNativeFeedback,{background:this.getClickEffect()},o.default.createElement(c.View,{style:[s.bar,{marginTop:(0,i.px2dp)(10),borderBottomWidth:0}]},o.default.createElement(c.Text,{style:s.barTitle},"\u5934\u6761\u5546\u57ce"),o.default.createElement(d.default,{style:[s.barIcon,{color:'rgba(0,0,0,0.5)'}],name:"keyboard-arrow-right"}))),o.default.createElement(c.TouchableNativeFeedback,{background:this.getClickEffect()},o.default.createElement(c.View,{style:s.bar},o.default.createElement(c.Text,{style:s.barTitle},"\u4eac\u4e1c\u7279\u4f9b"),o.default.createElement(d.default,{style:[s.barIcon,{color:'rgba(0,0,0,0.5)'}],name:"keyboard-arrow-right"}))),o.default.createElement(c.TouchableNativeFeedback,{background:this.getClickEffect()},o.default.createElement(c.View,{style:[s.bar,{marginTop:(0,i.px2dp)(10),borderBottomWidth:0}]},o.default.createElement(c.Text,{style:s.barTitle},"\u7528\u6237\u53cd\u9988"),o.default.createElement(d.default,{style:[s.barIcon,{color:'rgba(0,0,0,0.5)'}],name:"keyboard-arrow-right"}))),o.default.createElement(c.TouchableNativeFeedback,{background:this.getClickEffect()},o.default.createElement(c.View,{style:s.bar},o.default.createElement(c.Text,{style:s.barTitle},"\u7cfb\u7edf\u8bbe\u7f6e"),o.default.createElement(d.default,{style:[s.barIcon,{color:'rgba(0,0,0,0.5)'}],name:"keyboard-arrow-right"}))))}}]),t})(r.Component);a.default=f;var s=c.StyleSheet.create({personalInfo:{height:(0,i.px2dp)(180),backgroundColor:'#3b3b3b',justifyContent:'flex-end',paddingBottom:(0,i.px2dp)(14)},personalTop:{flexDirection:'row',alignItems:'center',justifyContent:'center',paddingLeft:(0,i.px2dp)(20),height:(0,i.px2dp)(60),marginBottom:(0,i.px2dp)(22)},userImg:{width:(0,i.px2dp)(60),height:(0,i.px2dp)(60),borderRadius:(0,i.px2dp)(50)},userName:{marginLeft:(0,i.px2dp)(10),color:'white',fontSize:(0,i.px2dp)(16),textAlign:'center',paddingBottom:(0,i.px2dp)(5)},personalBottom:{flexDirection:'row',alignItems:'center',height:(0,i.px2dp)(40)},personalItem:{height:'100%',flex:1,justifyContent:'space-between',alignItems:'center'},itemNum:{color:'white',fontSize:(0,i.px2dp)(15)},itemText:{color:'#8b8b8b',fontSize:(0,i.px2dp)(13)},selectBox:{height:(0,i.px2dp)(60),flexDirection:'row',borderBottomWidth:(0,i.px2dp)(1),borderBottomColor:'#f5f3f3'},selectItem:{flex:1,height:(0,i.px2dp)(60),justifyContent:'center',alignItems:'center',backgroundColor:'white'},selectIcon:{fontSize:(0,i.px2dp)(20),marginBottom:(0,i.px2dp)(5)},selectText:{fontSize:(0,i.px2dp)(12)},bar:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',height:(0,i.px2dp)(50),paddingLeft:(0,i.px2dp)(16),paddingRight:(0,i.px2dp)(12),backgroundColor:'white',borderTopWidth:(0,i.px2dp)(1),borderBottomWidth:(0,i.px2dp)(1),borderTopColor:'#f5f3f3',borderBottomColor:'#f5f3f3'},barTitle:{color:'#212121',fontSize:(0,i.px2dp)(14)},barIcon:{fontSize:(0,i.px2dp)(20)}})},528);