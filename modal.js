/**
 * modal tag
 *
 * Syntax:
 *   {% modal customModalId [size=sm|lg] %}
 *   ...
 *   {% endmodal %}
 */

module.exports = function(ctx) {
	return function rowTag(args, content) {
		var sizes = {sm:true, lg:true};

		content = ctx.render.renderSync({text: content, engine: 'markdown'});
		var id = args[0];
		var size;
		
		for (var i = 1; i < args.length; i++) {
			var val = args[i];
			if (sizes[val]) {
				size = val;
			}
		}
		
		return 	'<div id="' + id + '" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">' +
			'<div class="modal-dialog modal-' + size + '">' +
				'<div class="modal-content">' +
					'<button type="button" class="close" data-dismiss="modal" aria-label="Close" onclick="$(\'#' + id + '\').modal(\'toggle\');">' +
		        		'<span aria-hidden="true">&times;</span>' +
		        	'</button>' +
					content +
				'</div>' +
		'</div>';
	};		
};
