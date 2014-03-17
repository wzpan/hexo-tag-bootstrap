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

	if (args.length > 2){
		style = args[2];
	} else {
		style = 'default';
	}
	return '<a class="btn btn-' + style +'" href="' + url + '">' + text + '</a>'
};
