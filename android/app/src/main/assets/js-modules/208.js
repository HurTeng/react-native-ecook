__d(function(e,t,o,r){'use strict';var g=t(15),a=t(13),n={setGlobalOptions:function(e){void 0!==e.debug&&a(g.FrameRateLogger,'Trying to debug FrameRateLogger without the native module!'),g.FrameRateLogger&&g.FrameRateLogger.setGlobalOptions(e)},setContext:function(e){g.FrameRateLogger&&g.FrameRateLogger.setContext(e)},beginScroll:function(){g.FrameRateLogger&&g.FrameRateLogger.beginScroll()},endScroll:function(){g.FrameRateLogger&&g.FrameRateLogger.endScroll()}};o.exports=n},208);