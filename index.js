hexo.extend.tag.register('label', require('./label')(hexo));
hexo.extend.tag.register('badge', require('./badge'));
hexo.extend.tag.register('btn', require('./btn'));
hexo.extend.tag.register('mimg', require('./mimg'));
hexo.extend.tag.register('hide', require('./hide'));
hexo.extend.tag.register('slides', require('./slides'));
hexo.extend.tag.register('eq', require('./eq'));

var alert = require('./alert')(hexo);
hexo.extend.tag.register('alert', alert, true);

var textcolor = require('./textcolor')(hexo);
hexo.extend.tag.register('textcolor', textcolor, true);

var mnote = require('./mnote')(hexo);
hexo.extend.tag.register('mnote', mnote, true);

var wthought = require('./wthought')(hexo);
hexo.extend.tag.register('wthought', wthought, true);

var quote = require('./quote')(hexo);
hexo.extend.tag.register('quote', quote, true);

