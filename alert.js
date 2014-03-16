var render = hexo.render;

/**
 * alert tag
 *
 * Syntax:
 *   {% alert [color] %}
 *   Alert string
 *   {% endalert %}
 */

module.exports = function(args, content){
	var color;
	if (args.length > 0)
		color = args[0];
	else
		color = 'green';

	var icon, style;

	switch(color){
		case 'green':
			style = 'success';
			icon = 'fa-lightbulb-o';
			break;
		case 'blue':
			style = 'info';
			icon = 'fa-info';
			break;
		case 'yellow':
			style = 'warning';
			icon = 'fa-bell';
			break;
		case 'red':
			style = 'error';
			icon = 'fa-bug';
			break;
		default:
			style = 'success';
			icon = 'fa-lightbulb-o';
			break;
	}

	content = render.renderSync({text: content, engine: 'markdown'});
	var text = '<div class="alert alert-' + style + '"><i class="fa ' + icon + '"></i>  ' + content + '</div>';

	return text;
};
