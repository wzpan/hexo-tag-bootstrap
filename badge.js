/**
 * badge tag
 *
 * Syntax:
 *   {% badge text %}
 */

module.exports = function(args, content){
	var text = args[0];
	return '<span class="badge">' + text + '</span>';
};
