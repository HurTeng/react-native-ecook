__d(function(r,t,e,a){'use strict';var n=t(15).Vibration;t(23);var i={vibrate:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:400,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if('number'==typeof r)n.vibrate(r);else{if(!Array.isArray(r))throw new Error('Vibration pattern should be a number or array');n.vibrateByPattern(r,t?0:-1)}},cancel:function(){n.cancel()}};e.exports=i},296);