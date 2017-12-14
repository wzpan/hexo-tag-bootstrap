/**
 * pill tag
 *
 * Syntax:
 *   {% pill type text %}
 */
var types = {primary:true, secondary:true, success:true, danger:true, warning:true, info:true, light:true, dark:true};
module.exports = function(args, content){
	var text, type = 'secondary';
	if(args.length == 1) {
		text = args[0];
	} else {
		type = args[0];
		text = args[1];
	}

	if(!types[type])
		type = 'secondary';

	return '<span class="badge badge-pill badge-'+type+'">' + text + '</span>';
};
