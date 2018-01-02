'use strict';
/**
 * card tag
 * Only basic functionality.
 * Syntax:
 *   {% card [header] [title=title] [subtitle=] [img=src] [imgalt=alt] [col=12,sm-1,lg-3]%}
 *   content
 *   {% endcard %}
 */



function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"), 'g'), replace);
}
module.exports = function(ctx) {
  return function cardTag(args, content) {
	var header, subtitle, title, img, imgAlt;
	var col;
	var i,j;
	
	for(i = 0; i < args.length; i++) {
		var idx = args[i].indexOf("=");
		if(idx == -1) {
			if(args[i] === "col") {
				col = "col";
			}
			else
				header = args[i];
			continue;
		}
		
		switch(args[i].substring(0, idx).toLowerCase()) {
			case "col": 
				col = "";
				var param = args[i].substring(idx+1).split(",");
				for(j = 0; j < param.length; j++) {
					col+=" col-" + param[j];
				}
				if(param.length == 0) {
					col = "col";
				}
				break;
			case "title": title = args[i].substring(idx+1); break;
			case "subtitle": subtitle = args[i].substring(idx+1); break;
			case "img": img = args[i].substring(idx+1); break;
			case "imgalt": imgAlt = args[i].substring(idx+1); break;
			default:
				header = args[i];
				break;
		}
	}
	
	
	content = ctx.render.renderSync({text: content, engine: 'markdown'}, { 
		breaks: true,
		smartLists: false
	});
	// clean up some "bad" end-of card rendering
	if(content.lastIndexOf('<div class="card-body">') !== -1)
		content = content.substring(0, content.length - 34);
	else
		content += "</div>";
	content = replaceAll(content, "</p><br>", "</p>");
	
	var card = '<div class="card">' + 
		(header?'<div class="card-header">' + header + '</div>':'') + 
		(img?('<img class="card-img-top" src="' + img + '"'+(imgAlt?(' alt="'+imgAlt+'"'):'')+'/>'):'') + 
		'<div class="card-body">'+ 
			(title?'<h4 class="card-title">' + title + '</h4>':'') + 
			(subtitle?'<h6 class="card-subtitle mb-2 text-mited">' + subtitle + '</h6>':'') + 
			content + 
		'</div>';	

	if(col) {
		return '<div class="' + col + '">' + card + '</div>';
	} else
		return card;
	};
};
