/**
 * alert tag
 *
 * Syntax:
 *   {% alert [color] %}
 *   Alert string
 *   {% endalert %}
 */

module.exports = ctx => function(args, content){
	var style, icon;
	if (args.length > 0)
		style = args[0];
	else
		style = 'info';

	switch(style){
		case 'success':
			icon = 'fas fa-lightbulb';
			break;
		case 'info':
			icon = 'fas fa-info';
			break;
		case 'warning':
			icon = 'far fa-bell';
			break;
		case 'danger':
			icon = 'fas fa-bug';
			break;
		default:
			icon = 'fas fa-lightbulb';
			break;
	}

	content = ctx.render.renderSync({text: content, engine: 'markdown'});
	var text = '<div class="alert alert-' + style + '"><i class="'+icon+'"></i>  ' + content + '</div>';

	return text;
};
