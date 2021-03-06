/**
 * margin note tag
 *
 * Syntax:
 *   {% mnote index %}
 *   Margin note string
 *   {% endmnote %}
 */

module.exports = ctx => function(args, content){

    if (args && args.length > 0){
	var index = args[0];
	mnote = `<span class="margin-note-marker"><sup>${index}</sup></span><span class="block margin-div-outer"><span class="block margin-div-inner"><span class="block margin-note"><span class="margin-note-marker">${index}</span>${content}</span></span></span>`;
    } else {
	mnote = `<span class="block margin-div-outer"><span class="block margin-div-inner"><span class="block margin-note">${content}</span></span></span>`;
    }
    return mnote;

};
