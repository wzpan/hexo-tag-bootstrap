/**
 * button tag
 *
 * Syntax:
 *   {% btn url text [color] %}
 */

module.exports = function(args, content){
	var url = args[0];
	var text = args[1];
	var style;

	var color;
	
	if (args.length > 2){
		color = args[2];
		switch(color){
		case 'green':
			style = 'success';
			break;
		case 'blue':
			style = 'primary';
			break;
		case 'yellow':
			style = 'warning';
			break;
		case 'red':
			style = 'danger';
			break;
		case 'black':
			style = 'inverse';
			break;	
		default:
			return '<a class="btn" href="' + url + '">' + text + '</a>'
			break;
		}
		return '<a class="btn btn-' + style +'" href="' + url + '">' + text + '</a>'
	} else {
		return '<a class="btn" href="' + url + '">' + text + '</a>'
	}
};
