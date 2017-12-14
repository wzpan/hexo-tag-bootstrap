/**
 * text color tag
 *
 * Syntax:
 *   {% textcolor [color] %}
 *   text string
 *   {% endtextcolor %}
 */

module.exports = function(ctx) {
	return function textColorTag(args, content) {
		
		var style;
		if (args.length > 0)
			style = args[0];
		else
			style = 'info';

		return '<p class="text-' + style + '">' + ctx.render.renderSync({text: content, engine: 'markdown'}) + '</p>\n';
	};
};
