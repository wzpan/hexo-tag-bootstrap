/**
 * wiki thoughts tag
 *
 * Syntax:
 *   {% wthought [author] %}
 *   Text
 *   {% endwthought %}
 */

module.exports = ctx => function(args, content){
	var author = 'Anonymous';
	if (args){
		author = args.join(' ');
	}
	content = ctx.render.renderSync({text: content, engine: 'markdown'});
	var text = '<div class="left"><div class="bubble-green"><div class="bubble-avatar">' + author + '</div>' + conten + '</div></div>';
	
	return text;
};
