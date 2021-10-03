/**
 * form input tag
 *
 * Syntax:
 *   {% input name "label" "placeholder" "help" textarea|email|password|select sm|lg required  %}
 */

// <div class="form-group">
// 	<label for="name" class="required">Name</label>	
// 	<input id="name" type="text" name="name">
// </div>


var sizes = {sm:true, lg:true};
var types = {textarea:true, email:true, password: true, select:true};

module.exports = function(args, content){
	var name = args[0];
	var label = args[1];
	var placeholder = args[2];
	var help = "";
	var style = "form-control";
	var required = false;
	var size;
	var type;
	var control = "input";
	var controlEnd = "</input>";
	
	for(var i = 2; i < args.length; i++) {
		var val = args[i];
		if(val === "required")
			required = true;
		else if(types[val])
			type = val;
		else if(sizes[val])
			size = val;
		else 
			help = val;
	}
	
	
	if(size) {
		style = style + " form-control-" + size;
	}
	
	if(help.length > 0) {
		help = '<small class="form-text text-muted">'+help+'</small>';
	}
	
	if(type === "textarea") {
			control = 'textarea rows="3"';
			controlEnd = "</textarea>";
	} else if(type = "checkbox") {
	}

	return '<div class="form-group"><label for="formCtrl'+name+'"></label><'+control+' id="formCtrl'+name+'" style="'+style+'" name="'+name+'" type="'+type+'" >'+controlEnd + help+'</div>'
};
