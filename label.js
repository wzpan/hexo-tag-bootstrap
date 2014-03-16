/**
 * label tag
 *
 * Syntax:
 *   {% label text [color] %}
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
			return '<span class="label">' + text + '</span>';
		}
	} else {
		return '<span class="label">' + text + '</span>';
	}
	return '<span class="label label-' + style +'">' + text + '</span>';
};
