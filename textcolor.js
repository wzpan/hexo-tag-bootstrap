var Hexo = require('hexo');
var hexo = new Hexo(process.cwd(), {});
/**
 * alert tag
 *
 * Syntax:
 *   {% textcolor [color] %}
 *   text string
 *   {% endalert %}
 */

module.exports = function(args, content){
	
	var style;
	if (args.length > 0)
		style = args[0];
	else
		style = 'info';

	
	var text = '<p class="text-' + style + '">' + content + '</p>';

	text = hexo.render.renderSync({text: text, engine: 'markdown'});
	
	return text;
};
