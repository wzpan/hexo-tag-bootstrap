/**
 * jumbotron
 *
 * Syntax:
 *   {% jumbo %}
 *   text string
 *   {% endjumbo %}
 */

module.exports = function(ctx) {
	return function jumboTag(args, content) {
		return '<div class="jumbotron jumbotron-fluid">' + ctx.render.renderSync({text: content, engine: 'markdown'}) + '</div>\n';
	};
};
