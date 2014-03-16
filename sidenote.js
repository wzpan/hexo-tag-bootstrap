var render = hexo.render;

/**
 * side note tag
 *
 * Syntax:
 *   {% sidenote [index] %}
 *   Side note string
 *   {% endsidenote %}
 */

module.exports = function(args, content){

	var text = render.renderSync({text: content, engine: 'markdown'});
	text = text.substring(3, text.length-5);

	if (args){
		var index = args[0];
		note = '<span class="margin-note-marker"><sup>' + index + '</sup></span> <span class="block margin-div-outer"><span class="block margin-div-inner"><span class="block margin-note"><span class="margin-note-marker">' + index + '</span>' + text + '</span></span></span>';
	} else {
		note = '<span class="block margin-div-outer"><span class="block margin-div-inner"><span class="block margin-note">' + text + '</span></span></span>';
	}	

	return note;
};
