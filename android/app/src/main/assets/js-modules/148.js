__d(function(e,r,t,n){'use strict';function s(e){switch(e){case.75:return'ldpi';case 1:return'mdpi';case 1.5:return'hdpi';case 2:return'xhdpi';case 3:return'xxhdpi';case 4:return'xxxhdpi'}throw new Error('no such scale')}var a=new Set(['gif','jpeg','jpg','png','svg','webp','xml']);function i(e){var r=e.httpServerLocation;return'/'===r[0]&&(r=r.substr(1)),r}t.exports={getAndroidAssetSuffix:s,getAndroidResourceFolderName:function(e,r){if(!a.has(e.type))return'raw';var t=s(r);if(!t)throw new Error('Don\'t know which android drawable suffix to use for asset: '+JSON.stringify(e));return'drawable-'+t},getAndroidResourceIdentifier:function(e){return(i(e)+'/'+e.name).toLowerCase().replace(/\//g,'_').replace(/([^a-z0-9_])/g,'').replace(/^assets_/,'')},getBasePath:i}},148);