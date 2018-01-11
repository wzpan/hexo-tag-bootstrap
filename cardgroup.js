/**
 * row tag
 *
 * Syntax:
 *   {% cardgroup %}
 *     {% card %}
 *        text string
 *     {% endcard%}
 *     {% card %}
 *        text string
 *     {% endcard%}
 *   {% endcardgroup %}
 */

module.exports = function(ctx) {
	return function rowTag(args, content) {
		content = ctx.render.renderSync({text: content, engine: 'markdown'});
		return '<div class="card-group">\n' + content + '\n</div>';
	};
};
