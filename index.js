hexo.extend.tag.register('label', require('./label'));
hexo.extend.tag.register('badge', require('./badge'));
hexo.extend.tag.register('btn', require('./btn'));
hexo.extend.tag.register('pill', require('./pill'));

var alert = require('./alert');
hexo.extend.tag.register('alert', alert, true);

var textcolor = require('./textcolor');
hexo.extend.tag.register('textcolor', textcolor, true);
