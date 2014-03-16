hexo.extend.tag.register('label', require('./label'));
hexo.extend.tag.register('badge', require('./badge'));
hexo.extend.tag.register('btn', require('./btn'));

var sidenote = require('./sidenote');
hexo.extend.tag.register('sidenote', sidenote, true);

var sideimg = require('./sideimg');
hexo.extend.tag.register('sideimg', sideimg, true);

var alert = require('./alert');
hexo.extend.tag.register('alert', alert, true);
