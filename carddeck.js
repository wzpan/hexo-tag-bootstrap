/**
 * card deck
 *
 * Syntax:
 *   {% carddeck %}
 *     {% card %}
 *        text string
 *     {% endcard%}
 *     {% card %}
 *        text string
 *     {% endcard%}
 *   {% endcarddeck %}
 */

module.exports = function(ctx) {
	return function rowTag(args, content) {
		content = ctx.render.renderSync({text: content, engine: 'markdown'});
		return '<div class="card-deck">\n' + content + '\n</div>';
	};
};
