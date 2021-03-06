/**
 * label tag
 *
 * Syntax:
 *   {% label text [color] %}
 */

module.exports = ctx => function(args, content){
	var text = args[0];
	var style;
	if (args.length > 1) {
		style = args[1];
	} else {
		style = 'default';
	}
    text = ctx.render.renderSync({text: text, engine: 'markdown'});
	return '<span class="label label-' + style +'">' + text + '</span>';
};
