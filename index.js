'use strict';

var ctx = hexo;
var tag = ctx.extend.tag;

tag.register('label', require('./label'));
tag.register('badge', require('./badge'));
tag.register('btn', require('./btn'));
tag.register('pill', require('./pill'));

tag.register('row', require('./row')(ctx), true);
tag.register('col', require('./col')(ctx), true);
tag.register('alert', require('./alert')(ctx), true);
tag.register('card', require('./card')(ctx), true);
tag.register('textcolor', require('./textcolor')(ctx), true);
