__d(function(e,o,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,o){var t,n;return n=t=(function(e){function t(){return babelHelpers.classCallCheck(this,t),babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"componentWillMount",value:function(){this.updateIconSources(this.props)}},{key:"componentWillReceiveProps",value:function(e){var o=this,n=Object.keys(t.propTypes);if(!(0,a.default)((0,i.default)(e,n),(0,i.default)(this.props,n))){var r={};e.logoName||(r.logo=void 0),e.navIconName||(r.navIcon=void 0),e.overflowIconName||(r.overflowIcon=void 0),this.state&&Object.keys(r).length?this.setState(r,function(){return o.updateIconSources(e)}):this.updateIconSources(e)}}},{key:"updateIconSources",value:function(e){var t=this,n=e.iconSize,r=e.iconColor||e.titleColor;e.logoName&&o(e.logoName,n,r).then(function(e){return t.setState({logo:e})}),e.navIconName&&o(e.navIconName,n,r).then(function(e){return t.setState({navIcon:e})}),e.overflowIconName&&o(e.overflowIconName,n,r).then(function(e){return t.setState({overflowIcon:e})}),Promise.all((e.actions||[]).map(function(e){return e.iconName?o(e.iconName,e.iconSize||n,e.iconColor||r).then(function(o){return babelHelpers.extends({},e,{icon:o})}):Promise.resolve(e)})).then(function(e){return t.setState({actions:e})})}},{key:"render",value:function(){return s.default.createElement(p.ToolbarAndroid,babelHelpers.extends({},this.props,this.state))}}]),t})(u.PureComponent),t.propTypes={logoName:e,navIconName:e,overflowIconName:e,actions:f.default.arrayOf(f.default.shape({title:f.default.string.isRequired,iconName:e,iconSize:f.default.number,iconColor:f.default.oneOfType([f.default.string,f.default.number]),show:f.default.oneOf(['always','ifRoom','never']),showWithText:f.default.bool})),iconSize:f.default.number,iconColor:f.default.oneOfType([f.default.string,f.default.number])},t.defaultProps={iconSize:24},n};var r=o(487),a=babelHelpers.interopRequireDefault(r),l=o(479),i=babelHelpers.interopRequireDefault(l),u=o(46),s=babelHelpers.interopRequireDefault(u),c=o(49),f=babelHelpers.interopRequireDefault(c),p=o(340)},500);