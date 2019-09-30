/**
 * alert tag
 *
 * Syntax:
 *   {% container [class] %}
 *   content
 *   {% endcontainer %}
 */

module.exports = function(ctx) {
	return function containerTag(args, content) {
		var style = "container";
		args.forEach(function(arg) {
			style += " " + arg;
		});
		
		content = content.replace(/\n\n/g, "#n").replace(/\n/g, "").replace(/#n/g, "\n");
		
		content = ctx.render.renderSync({text: content, engine: 'markdown'}
		);
		
		return '<div class="' + style + '">' + content + '</div>';
	};
};
