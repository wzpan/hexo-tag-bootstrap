'use strict';
/**
 * card tag
 *
 * Syntax:
 *   {% card [header] [title=title] [subtitle=] [img=src] [imgalt=alt] [col=12,sm-1,lg-3]%}
 *   Alert string
 *   {% endcard %}
 */

var marked = require('marked');
var renderer = new marked.Renderer();

/**
 * level 1-3: title
 * 4-*: subtitle (muted)
 */
renderer.heading = function(text, level) {
	// adjust level
	level += 2;
	if(level < 5) {
		return '<h' + level + ' class="card-title">' + text + '</h' + level + '>';
	} 
	return '<h' + level + ' class="card-subtitle mb-2 text-muted">' + text + '</h' + level + '>';
}

renderer.list = function(body, ordered) {
	var type = ordered ? 'ol' : 'ul';
	return '</div><' + type + ' class="list-group list-group-flush">\n' + body + '</' + type + '>\n<div class="card-body">';
}

renderer.listitem = function(text) {
	return '<li class="list-group-item">' + text + '</li>';
}

renderer.paragraph = function(text){
	return '<p class="card-text">' + text + '</p>';
}
renderer.br = function() {
	return "";
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"), 'g'), replace);
}
module.exports = function(ctx) {
  return function cardTag(args, content) {
	var header, subtitle, title, img, imgAlt;
	var col;
	var i,j;

	content = content.replace(/\n\n/g, "#n").replace(/\n/g, "").replace(/#n/g, "\n");

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
		renderer: renderer,
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
