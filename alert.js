/**
 * alert tag
 *
 * Syntax:
 *   {% alert [color] [noicon] [2-4x]%}
 *   Alert string
 *   {% endalert %}
 */

module.exports = function(ctx) {
	return function alertTag(args, content) {
		var style = "primary", icon = null, size= "";
		args.forEach(function(arg) {
			switch(arg){
				case '2x': size = 'fa-2x'; break;
				case '3x': size = 'fa-3x'; break;
				case '4x': size = 'fa-4x'; break;
				case 'noicon':
					icon = false;
					break;
				case 'primary': 
				case 'secondary':
				case 'light': 
				case 'dark': 
					style = arg;
					break;
				case 'success':
					if(icon === null)
						icon = 'fa-lightbulb-o';
					style = arg;
					break;
				case 'info':
					if(icon === null)
						icon = 'fa-info';
					style = arg;
					break;
				case 'warning':
					if(icon === null)
						icon = 'fa-bell';
					style = arg;
					break;
				case 'danger':
					if(icon === null)
						icon = 'fa-bug';
					style = arg;
					break;
			}
		});
		
		if(style === "primary" && icon === null)
			icon = 'fa-lightbulb-o';

		content = ctx.render.renderSync({text: content, engine: 'markdown'});
		if(icon)
			return '<div class="alert alert-' + style + '"><i class="fa ' + icon + ' ' + size +' float-left"></i>  ' + content + '</div>';
		return '<div class="alert alert-' + style + '">' + content + '</div>';	
	};
};
