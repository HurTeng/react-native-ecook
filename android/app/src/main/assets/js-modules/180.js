__d(function(e,t,a,n){'use strict';var i=t(181),_=t(13),o=(function(){function e(){babelHelpers.classCallCheck(this,e)}return babelHelpers.createClass(e,[{key:"__attach",value:function(){}},{key:"__detach",value:function(){this.__isNative&&null!=this.__nativeTag&&(i.API.dropAnimatedNode(this.__nativeTag),this.__nativeTag=void 0)}},{key:"__getValue",value:function(){}},{key:"__getAnimatedValue",value:function(){return this.__getValue()}},{key:"__addChild",value:function(e){}},{key:"__removeChild",value:function(e){}},{key:"__getChildren",value:function(){return[]}},{key:"__makeNative",value:function(){if(!this.__isNative)throw new Error('This node cannot be made a "native" animated node')}},{key:"__getNativeTag",value:function(){if(i.assertNativeAnimatedModule(),_(this.__isNative,'Attempt to get native tag from node not marked as "native"'),null==this.__nativeTag){var e=i.generateNewNodeTag();i.API.createAnimatedNode(e,this.__getNativeConfig()),this.__nativeTag=e}return this.__nativeTag}},{key:"__getNativeConfig",value:function(){throw new Error('This JS animated node type cannot be used as native animated node')}},{key:"toJSON",value:function(){return this.__getValue()}}]),e})();a.exports=o},180);