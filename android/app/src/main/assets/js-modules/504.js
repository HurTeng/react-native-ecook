__d(function(e,t,r,o){'use strict';Object.defineProperty(o,"__esModule",{value:!0});var i=t(46),a=babelHelpers.interopRequireDefault(i),l=t(12),n=t(505),s=babelHelpers.interopRequireDefault(n),u=(function(e){function t(e,r){babelHelpers.classCallCheck(this,t);var o=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r));return o.state={computedSize:null},o._handleLayout=o._handleLayout.bind(o),o}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"render",value:function(){var e=this.state.computedSize,t={};return e?t.width=Math.max(e.height,e.width):t.opacity=0,a.default.createElement(l.Text,babelHelpers.extends({},this.props,{numberOfLines:1,onLayout:this._handleLayout,style:[h.container,this.props.style,t]}),this.props.children)}},{key:"_handleLayout",value:function(e){var t=e.nativeEvent.layout,r=t.width,o=t.height,i=this.state.computedSize;i&&i.height===o&&i.width===r||(this.setState({computedSize:{width:r,height:o}}),this.props.onLayout&&this.props.onLayout(e))}}]),t})(a.default.Component);u.propTypes=l.Text.propTypes,o.default=u;var h=l.StyleSheet.create({container:{fontSize:12,color:'#fff',backgroundColor:'rgb(0, 122, 255)',lineHeight:15,textAlign:'center',borderWidth:1+s.default.pixel,borderColor:'#fefefe',borderRadius:8.5,overflow:'hidden'}})},504);