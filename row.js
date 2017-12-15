/**
 * row tag
 *
 * Syntax:
 *   {% row %}
 *     {% col %}
 *        text string
 *     {% endcol%}
 *     {% col %}
 *        text string
 *     {% endcol%}
 *   {% endrow %}
 *   {% row %}
 *     {% col sm-10 md-8 %}
 *        text string
 *     {% endcol%}
 *     {% col sm-2 md-4 %}
 *        text string
 *     {% endcol%}
 *   {% endrow %}
 */

module.exports = function(ctx) {
	return function rowTag(args, content) {
		content = ctx.render.renderSync({text: content, engine: 'markdown'});
		return '<div class="row">\n' + content + '\n</div>';
	};
};
