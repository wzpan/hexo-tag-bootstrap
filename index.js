'use strict';

var ctx = hexo;
var tag = ctx.extend.tag;


tag.register('label', require('./label')(ctx));
tag.register('badge', require('./badge'));
tag.register('btn', require('./btn'));
tag.register('pill', require('./pill'));

tag.register('modal', require('./modal')(ctx), true);
tag.register('modalbtn', require('./modalbtn'));
tag.register('input', require('./input'));

tag.register('container', require('./container')(ctx), true);
tag.register('carddeck', require('./carddeck')(ctx), true);
tag.register('cardgroup', require('./cardgroup')(ctx), true);
tag.register('row', require('./row')(ctx), true);
tag.register('col', require('./col')(ctx), true);
tag.register('alert', require('./alert')(ctx), true);
tag.register('jumbo', require('./jumbo')(ctx), true);
tag.register('jumbotron', require('./jumbo')(ctx), true);
tag.register('textcolor', require('./textcolor')(ctx), true);

// load modules requiring marked
try {
	// try to resolve marked to load the advanced card and carousel
	require.resolve("marked");
	tag.register('card', require('./card')(ctx), true);
	tag.register('carousel', require('./carousel')(ctx), true);
} catch(ex) {
	// marked not available
    tag.register('card', require('./card-simple')(ctx), true);
	tag.register('carousel', require('./carousel-simple')(ctx), true);
}

