var render = hexo.render;

/**
 * alert tag
 *
 * Syntax:
 *   {% textcolor [color] %}
 *   text string
 *   {% endalert %}
 */

module.exports = function(args, content){
	var style, icon;
	if (args.length > 0)
		style = args[0];
	else
		style = 'info';

	content = render.renderSync({text: content, engine: 'markdown'});
	var text = '<p class="text-' + style + '">' + content + '</p>';

	return text;
};
