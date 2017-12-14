var Hexo = require('hexo');
var hexo = new Hexo(process.cwd(), {});

/**
 * alert tag
 *
 * Syntax:
 *   {% alert [color] %}
 *   Alert string
 *   {% endalert %}
 */

module.exports = function(args, content){
	var style, icon;
	if (args.length > 0)
		style = args[0];
	else
		style = 'info';

	switch(style){
		case 'primary': break;
		case 'secondary': break;
		case 'light': break;
		case 'dark': break;
		case 'success':
			icon = 'fa-lightbulb-o';
			break;
		case 'info':
			icon = 'fa-info';
			break;
		case 'warning':
			icon = 'fa-bell';
			break;
		case 'danger':
			icon = 'fa-bug';
			break;
		default:
			style = 'primary';
			icon = 'fa-lightbulb-o';
			break;
	}

	content = hexo.render.renderSync({text: content, engine: 'markdown'});
	if(icon)
		return '<div class="alert alert-' + style + '"><i class="fa ' + icon + '"></i>  ' + content + '</div>';
	return '<div class="alert alert-' + style + '">' + content + '</div>';	
};
