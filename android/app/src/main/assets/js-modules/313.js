__d(function(s,e,i,t){'use strict';var r=e(308),n=(function(){function s(){babelHelpers.classCallCheck(this,s),this._subscriptionsForType={},this._currentSubscription=null}return babelHelpers.createClass(s,[{key:"addSubscription",value:function(s,e){r(e.subscriber===this,'The subscriber of the subscription is incorrectly set.'),this._subscriptionsForType[s]||(this._subscriptionsForType[s]=[]);var i=this._subscriptionsForType[s].length;return this._subscriptionsForType[s].push(e),e.eventType=s,e.key=i,e}},{key:"removeAllSubscriptions",value:function(s){void 0===s?this._subscriptionsForType={}:delete this._subscriptionsForType[s]}},{key:"removeSubscription",value:function(s){var e=s.eventType,i=s.key,t=this._subscriptionsForType[e];t&&delete t[i]}},{key:"getSubscriptionsForType",value:function(s){return this._subscriptionsForType[s]}}]),s})();i.exports=n},313);