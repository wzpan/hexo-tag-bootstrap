/**
 * slides tag
 *
 * Syntax:
 *   {% slides url %}
 */

module.exports = function(args, content){
	var url = args[0];
	
	return '<iframe src="' + url + '?raw=true&embedded=true" width="100%" height="480" frameborder="0"></iframe>'
};
