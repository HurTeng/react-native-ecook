__d(function(e,s,t,o){'use strict';var n=s(114),i=s(112),r=s(109),p=s(172),a=s(163),l=s(154),c=s(173),h=s(27),u=s(126),d=u.AccessibilityComponentTypes,y=u.AccessibilityTraits,b={top:20,left:20,right:20,bottom:30},f=l({displayName:'TouchableWithoutFeedback',mixins:[p,a.Mixin],propTypes:{accessible:r.bool,accessibilityComponentType:r.oneOf(d),accessibilityTraits:r.oneOfType([r.oneOf(y),r.arrayOf(r.oneOf(y))]),disabled:r.bool,onPress:r.func,onPressIn:r.func,onPressOut:r.func,onLayout:r.func,onLongPress:r.func,delayPressIn:r.number,delayPressOut:r.number,delayLongPress:r.number,pressRetentionOffset:n,hitSlop:n},getInitialState:function(){return this.touchableGetInitialState()},componentDidMount:function(){c(this.props)},componentWillReceiveProps:function(e){c(e)},touchableHandlePress:function(e){this.props.onPress&&this.props.onPress(e)},touchableHandleActivePressIn:function(e){this.props.onPressIn&&this.props.onPressIn(e)},touchableHandleActivePressOut:function(e){this.props.onPressOut&&this.props.onPressOut(e)},touchableHandleLongPress:function(e){this.props.onLongPress&&this.props.onLongPress(e)},touchableGetPressRectOffset:function(){return this.props.pressRetentionOffset||b},touchableGetHitSlop:function(){return this.props.hitSlop},touchableGetHighlightDelayMS:function(){return this.props.delayPressIn||0},touchableGetLongPressDelayMS:function(){return 0===this.props.delayLongPress?0:this.props.delayLongPress||500},touchableGetPressOutDelayMS:function(){return this.props.delayPressOut||0},render:function(){var e=i.Children.only(this.props.children),s=e.props.children;h(!e.type||'Text'!==e.type.displayName,'TouchableWithoutFeedback does not work well with Text children. Wrap children in a View instead. See '+(e._owner&&e._owner.getName&&e._owner.getName()||'<unknown>')),a.TOUCH_TARGET_DEBUG&&e.type&&'View'===e.type.displayName&&(s=i.Children.toArray(s)).push(a.renderDebugView({color:'red',hitSlop:this.props.hitSlop}));var t=a.TOUCH_TARGET_DEBUG&&e.type&&'Text'===e.type.displayName?[e.props.style,{color:'red'}]:e.props.style;return i.cloneElement(e,{accessible:!1!==this.props.accessible,accessibilityLabel:this.props.accessibilityLabel,accessibilityComponentType:this.props.accessibilityComponentType,accessibilityTraits:this.props.accessibilityTraits,nativeID:this.props.nativeID,testID:this.props.testID,onLayout:this.props.onLayout,hitSlop:this.props.hitSlop,onStartShouldSetResponder:this.touchableHandleStartShouldSetResponder,onResponderTerminationRequest:this.touchableHandleResponderTerminationRequest,onResponderGrant:this.touchableHandleResponderGrant,onResponderMove:this.touchableHandleResponderMove,onResponderRelease:this.touchableHandleResponderRelease,onResponderTerminate:this.touchableHandleResponderTerminate,style:t,children:s})}});t.exports=f},171);