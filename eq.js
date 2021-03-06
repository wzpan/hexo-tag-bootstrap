/**
 * equation tag
 *
 * Syntax:
 *   {% eq num %}
 */

module.exports = function(args, content){
	var num = args[0];
	return '<div class="label-anchor"><span>eq: ' + num +' »</span></div>';
};
