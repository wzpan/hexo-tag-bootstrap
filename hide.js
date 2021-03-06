
var rUrl = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[.\!\/\\w]*))?)/,
    rIndex = /([1-9][0-9]*)/;

/**
 * margin image tag
 *
 * Syntax:
 *   {% mimg url text %}
 */

module.exports = function(args, content)
{
	var url = args[0];
    var text = '';

	for (var i = 1, len = args.length; i < len; i++){
		var item = args[i];
		text = text.concat(' ', item);        
	}

	return "<hide><img src=" + url + " alt='" + text + "'></img></hide>"; 
};
