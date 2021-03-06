// Based on: https://raw.github.com/imathis/octopress/master/plugins/blockquote.rb

var rFullCiteWithTitle = /(\S.*)\s+(https?:\/\/)(\S+)\s+(.+)/i,
  rFullCite = /(\S.*)\s+(https?:\/\/)(\S+)/i,
  rAuthorTitle = /([^,]+),\s*([^,]+)/,
  rAuthor = /(.+)/;

/**
* Blockquote tag
*
* Syntax:
*   {% blockquote [author[, source]] [link] [source_link_title] %}
*   Quote string
*   {% endblockquote %}
*/

module.exports = ctx => function(args, content){
  var str = args.join(' '),
    author = '',
    source = '',
    title = '',
    footer = '',
    match;

  if (str){
    if (rFullCiteWithTitle.test(str)){
      match = str.match(rFullCiteWithTitle);
      author = match[1];
      source = match[2] + match[3];
      title = match[4];
    } else if (rFullCite.test(str)){
      match = str.match(rFullCite);
      author = match[1];
      source = match[2] + match[3];
    } else if (rAuthorTitle.test(str)){
      match = str.match(rAuthorTitle);
      author = match[1];
      title = match[2];
    } else if (rAuthor.test(str)){
      match = str.match(rAuthor);
      author = match[1];
    }

    if (author) footer += '<strong>' + author + '</strong>';

    if (source){
      var url = source.match(/https?:\/\/(.+)/)[1],
        parts = url.split('/'),
        link = '';

      for (var i = 0, len = parts.length; i < len; i++){
        var nextLink = link + parts[i];

        if (nextLink.length < 32){
          link = nextLink + '/';
        } else {
          break;
        }
      }

      if (url.replace(/\/?$/, '/') !== link) link += '&hellip;';

      footer += '<cite><a href="' + source + '">' + (title ? title : link) + '</a></cite>';
    } else if (title){
      footer += '<cite>' + title + '</cite>';
    }
  }

  var out = '';

  out += '<blockquote>\n\n';
  content = ctx.render.renderSync({text: content, engine: 'markdown'});
  out += content + '\n\n';
  out += (footer ? '<footer>' + footer + '</footer>' : '') + '</blockquote>\n';

  return out;
};
