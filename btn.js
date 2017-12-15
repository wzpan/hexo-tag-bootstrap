/**
 * button tag
 *
 * Syntax:
 *   {% btn url text [color=primary] [size=def|sm|lg] [outline|block] %}
 */
var colors = {primary:true, secondary:true, success:true, danger:true, warning:true, info:true, light:true, dark:true, link:true};
var sizes = {sm:true, lg:true};
var types = {outline:true, block:true};

module.exports = function(args, content){
	var url = args[0];
	var text = args[1];
	var style = "secondary";
	var size;
	var type;
	
	for(var i = 2; i < args.length; i++) {
		var val = args[i];
		if(types[val])
			type = val;
		else if(sizes[val])
			size = val;
		else if(colors[val]) 
			style = val;
	}
	// btn-outline-primary
	if(type === "outline") {
		style = type + "-" + style;
	}
	if(type === "block") {
		style = style + " btn-block";
	}
	if(size) {
		style = style + " btn-" + size;
	}

	return '<a class="btn btn-' + style + '" href="' + url + '">' + text + '</a>'
};
