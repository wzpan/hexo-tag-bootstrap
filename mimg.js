
var rUrl = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[.\!\/\\w]*))?)/,
    rIndex = /([1-9][0-9]*)/;

/**
 * margin image tag
 *
 * Syntax:
 *   {% mimg index url text %}
 */

module.exports = function(args, content)
{
	var index = args[0];
	var url = args[1];
	var text = '';

	for (var i = 2, len = args.length; i < len; i++){
		var item = args[i];
		text = text.concat(' ', item);
	}

	return "<span class='block margin-div-outer'><span class='block margin-div-inner'><span class='block margin-note'><img src=" + url + " alt='" + text + "'></img><b>附图 " + index + "</b> " + text + "</span></span></span>"; 
};
