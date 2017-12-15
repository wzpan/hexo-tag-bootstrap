/**
 * col tag
 *
 * Syntax:
 *   {% row %}
 *     {% col 3%}
 *        text string
 *     {% endcol%}
 *     {% col 9%}
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
	return function colTag(args, content) {
		var add = "", num = 0;
		for(var i = 0; i < args.length; i++) {
			if(!isNaN(args[i])) {
				num = Number(args[i]);
			}
			else {
				add += " col-" + args[i];
			}
		}
		var content = ctx.render.renderSync({text: content, engine: 'markdown'});
		return '<div class="col'+(num>0?'-'+num:'')+add+'">\n' + content + '\n</div>';
	};
};
