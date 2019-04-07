__d(function(n,t,e,i){'use strict';var r=t(177),o=r.AnimatedEvent,a=r.attachNativeEvent,u=t(185),s=t(186),c=t(187),f=t(179),v=t(188),p=t(189),l=t(180),d=t(190),g=t(193),h=t(178),m=t(194),_=t(195),N=t(197),w=t(199),y=t(202),E=function(n,t){return n&&t.onComplete?function(){t.onComplete&&t.onComplete.apply(t,arguments),n&&n.apply(void 0,arguments)}:n||t.onComplete},L=function(n,t,e){if(n instanceof m){var i=babelHelpers.extends({},t),r=babelHelpers.extends({},t);for(var o in t){var a=t[o],u=a.x,s=a.y;void 0!==u&&void 0!==s&&(i[o]=u,r[o]=s)}var c=e(n.x,i),f=e(n.y,r);return b([c,f],{stopTogether:!1})}return null},A=function n(t,e){var i=function(n,t,e){e=E(e,t);var i=n,r=t;i.stopTracking(),t.toValue instanceof l?i.track(new g(i,t.toValue,w,r,e)):i.animate(new w(r),e)};return L(t,e,n)||{start:(function(n){function t(t){return n.apply(this,arguments)}return t.toString=function(){return n.toString()},t})(function(n){i(t,e,n)}),stop:function(){t.stopAnimation()},reset:function(){t.resetAnimation()},_startNativeLoop:function(n){var r=babelHelpers.extends({},e,{iterations:n});i(t,r)},_isUsingNativeDriver:function(){return e.useNativeDriver||!1}}},D=function(n){var t=0;return{start:function(e){0===n.length?e&&e({finished:!0}):n[t].start(function i(r){r.finished&&++t!==n.length?n[t].start(i):e&&e(r)})},stop:function(){t<n.length&&n[t].stop()},reset:function(){n.forEach(function(n,e){e<=t&&n.reset()}),t=0},_startNativeLoop:function(){throw new Error('Loops run using the native driver cannot contain Animated.sequence animations')},_isUsingNativeDriver:function(){return!1}}},b=function(n,t){var e=0,i={},r=!(t&&!1===t.stopTogether),o={start:function(t){e!==n.length?n.forEach(function(a,u){var s=function(a){if(i[u]=!0,++e===n.length)return e=0,void(t&&t(a));!a.finished&&r&&o.stop()};a?a.start(s):s({finished:!0})}):t&&t({finished:!0})},stop:function(){n.forEach(function(n,t){!i[t]&&n.stop(),i[t]=!0})},reset:function(){n.forEach(function(n,t){n.reset(),i[t]=!1,e=0})},_startNativeLoop:function(){throw new Error('Loops run using the native driver cannot contain Animated.parallel animations')},_isUsingNativeDriver:function(){return!1}};return o},x=function(n){return A(new h(0),{toValue:0,delay:n,duration:0})};e.exports={Value:h,ValueXY:m,Interpolation:f,Node:l,decay:function n(t,e){var i=function(n,t,e){e=E(e,t);var i=n,r=t;i.stopTracking(),i.animate(new _(r),e)};return L(t,e,n)||{start:(function(n){function t(t){return n.apply(this,arguments)}return t.toString=function(){return n.toString()},t})(function(n){i(t,e,n)}),stop:function(){t.stopAnimation()},reset:function(){t.resetAnimation()},_startNativeLoop:function(n){var r=babelHelpers.extends({},e,{iterations:n});i(t,r)},_isUsingNativeDriver:function(){return e.useNativeDriver||!1}}},timing:A,spring:function n(t,e){var i=function(n,t,e){e=E(e,t);var i=n,r=t;i.stopTracking(),t.toValue instanceof l?i.track(new g(i,t.toValue,N,r,e)):i.animate(new N(r),e)};return L(t,e,n)||{start:(function(n){function t(t){return n.apply(this,arguments)}return t.toString=function(){return n.toString()},t})(function(n){i(t,e,n)}),stop:function(){t.stopAnimation()},reset:function(){t.resetAnimation()},_startNativeLoop:function(n){var r=babelHelpers.extends({},e,{iterations:n});i(t,r)},_isUsingNativeDriver:function(){return e.useNativeDriver||!1}}},add:function(n,t){return new u(n,t)},divide:function(n,t){return new c(n,t)},multiply:function(n,t){return new p(n,t)},modulo:function(n,t){return new v(n,t)},diffClamp:function(n,t,e){return new s(n,t,e)},delay:x,sequence:D,parallel:b,stagger:function(n,t){return b(t.map(function(t,e){return D([x(n*e),t])}))},loop:function(n){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).iterations,e=void 0===t?-1:t,i=!1,r=0;return{start:function(t){n&&0!==e?n._isUsingNativeDriver()?n._startNativeLoop(e):(function o(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{finished:!0};i||r===e||!1===a.finished?t&&t(a):(r++,n.reset(),n.start(o))})():t&&t({finished:!0})},stop:function(){i=!0,n.stop()},reset:function(){r=0,i=!1,n.reset()},_startNativeLoop:function(){throw new Error('Loops run using the native driver cannot contain Animated.loop animations')},_isUsingNativeDriver:function(){return n._isUsingNativeDriver()}}},event:function(n,t){var e=new o(n,t);return e.__isNative?e:e.__getHandler()},createAnimatedComponent:y,attachNativeEvent:a,forkEvent:function(n,t){return n?n instanceof o?(n.__addListener(t),n):function(){'function'==typeof n&&n.apply(void 0,arguments),t.apply(void 0,arguments)}:t},unforkEvent:function(n,t){n&&n instanceof o&&n.__removeListener(t)},__PropsOnlyForTests:d}},176);