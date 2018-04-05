/**
 * modal button tag
 *
 * Syntax:
 *   {% modalbtn customModalId text [color=primary] [size=def|sm|lg] [outline|block] %}
 */
var colors = {primary:true, secondary:true, success:true, danger:true, warning:true, info:true, light:true, dark:true, link:true};
var sizes = {sm:true, lg:true};
var types = {outline:true, block:true};

module.exports = function(args, content) {
	var id = args[0];
	var text = args[1];	
	var style = "secondary";
	var size;
	var type;
	
	for (var i = 2; i < args.length; i++) {
		var val = args[i];
		if (types[val]) {
			type = val;
		} else if(sizes[val]) {
			size = val;
		} else if(colors[val]) { 
			style = val;
		}
	}
	// btn-outline-primary
	if (type === "outline") {
		style = type + "-" + style;
	}
	if (type === "block") {
		style = style + " btn-block";
	}
	if (size) {
		style = style + " btn-" + size;
	}

	return '<button class="btn btn-' + style + '" data-toggle="modal" data-target="#' + id + '">' + text + '</button>'
};
