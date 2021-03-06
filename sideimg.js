var Hexo = require('hexo');
var hexo = new Hexo(process.cwd(), {});
var render = hexo.render;

var rUrl = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[.\!\/\\w]*))?)/,
    rIndex = /([1-9][0-9]*)/,
    rAuthor = /(.+)/;

/**
 * side image tag
 *
 * Syntax:
 *   {% sideimg url [index] %}
 *      Side image text
 *   {% endsideimg %}
 */

module.exports = function(args, content)
{
	var index;
	var url = args[0];

	var text = render.renderSync({text: content, engine: 'markdown'});
	text = text.substring(3, text.length-5);
	
	if (args.length > 1) {
		index = args[1];
		note = "<span class='block margin-div-outer'><span class='block margin-div-inner'><span class='block margin-note'><img src=" + url + " alt='" + text + "'></img><b>Fig " + index + "</b> " + text + "</span></span></span>"; 
	} else {
		note = "<span class='block margin-div-outer'><span class='block margin-div-inner'><span class='block margin-note'><img src=" + url + " alt='" + text + "'></img>" + text + "</span></span></span>"; 
	}

	return note;
};
