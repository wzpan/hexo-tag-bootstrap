/**
 * badge tag
 *
 * Syntax:
 *   {% badge text [color] %}
 */

module.exports = function(args, content){
	var text = args[0];
	var style;
	var color;
	if (args.length > 1) {
		color = args[1];
		switch(color){
		case 'green':
			style = 'success';
			break;
		case 'blue':
			style = 'info';
			break;
		case 'yellow':
			style = 'warning';
			break;
		case 'red':
			style = 'important';
			break;
		case 'black':
			style = 'inverse';
			break;
		default:
			return '<span class="badge">' + text + '</span>';
		}
	} else {
		return '<span class="badge">' + text + '</span>';
	}
	return '<span class="badge badge-' + style +'">' + text + '</span>';
};
