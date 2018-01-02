'use strict';
/**
 * carousel tag
 *
 * Syntax:
 *   {% carousel [col=12,sm-1,lg-3] nav indicators %}
 *     {img "path/to/img"}
 *     # First slide
 *     This is a text
 *     {img "path/to/img"}
 *     # Second slide
 *     This is a text
 *   }
 *   {% endcarousel %}
 */


function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"), 'g'), replace);
}

module.exports = function(ctx) {
  return function carouselTag(args, content) {
	var nav = false, indicators = false;
	var col;
	var i,j;
	
	for(i = 0; i < args.length; i++) {
		var idx = args[i].indexOf("=");
		if(idx == -1) {
			switch(args[i]) {
				case "col": col = "col"; break;
				case "controls":
				case "nav": nav = true; break;
				case "indicators": 
				case "lines": indicators = true; break;
			}
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
		}
	}
	
	
	content = ctx.render.renderSync({text: content, engine: 'markdown'}, { 
		breaks: true,
		smartLists: false
	});
	
	// splut the content at each img
	var imgBlock = [];
	
	content.split("<img").forEach(function(ct) {
		ct = replaceAll(ct, "<p></p>", "");
		// ignore empty block
		if(ct.indexOf("src=") == -1 || ct.length < 10) {
			return;
		}
		
		// split apart the img and the content
		var endImg = ct.indexOf(">");
		var rest = ct.substring(endImg+1);
		
		if(rest.length <= 5) {
			rest = '';
		} else {
			rest = '<div class="carousel-caption d-none d-md-block">' + rest + '</div>';
		}
		
		imgBlock.push(
			"<img" + ct.substring(0, endImg+1)
			+ rest
		);
	});
	
	
	var cid = "car_" + Math.round(Math.random() * 10000) + "_" + content.length;
	var card = '<div class="carousel slide" id="'+cid+'" data-ride="carousel">';
	if(indicators) {
		card += '\n<ol class="carousel-indicators">';
		for(var i = 0; i < imgBlock.length; i++) {
			card += '<li data-target="#'+cid+'" '+(i==0?'class="active"':'')+' data-slide-to="'+i+'"></li>';
		}
		card += '</ol>\n';
	}
	
	var first = true;
	imgBlock.forEach(function(block) {
		card += '<div class="carousel-item'+(first?' active':'')+'">';
		card += block;
		card += '</div>';
		first = false;
	});
	
	// add controls
	if(nav) {
		card += '\n<a class="carousel-control-prev" href="#'+cid+'" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a>';
		card += '<a class="carousel-control-next" href="#'+cid+'" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a>\n';
	}
	
	card +='</div>';	

	if(col) {
		return '<div class="' + col + '">' + card + '</div>';
	} else
		return card;
	};
};
