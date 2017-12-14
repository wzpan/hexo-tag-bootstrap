hexo-tag-bootstrap
===

## Intro ##

hexo-tag-bootstrap is a collections of Hexo tag plugins.

It wraps most [Twitter-Bootstrap](http://getbootstrap.com/) 4 components in a uniformed way. It can be used independently, though I highly recommend you to use it with [Freemind](http://github.com/wzpan/hexo-theme-freemind/), a Bootstrap theme for Hexo.

## Install ##

``` sh
$ npm install hexo-tag-bootstrap --save
```

## Components ##

* **textcolor** - Convey meaning through color with a handful of emphasis utility classes.
* **button** - Inserts a button with target links, text and specified color.
** {% btn url text (color=primary) (size=def|sm|lg) (outline|block) %}
* **label** - Inserts a label with text and specified color.
* **pill** - Inserts a label with text and specified color.
** {% badge color text %}
* **badge** - Inserts a badge with text.
* **alert** - Inserts alert messages with text and specified color.

For most options like style (primary, secondary, success, danger, warning, info, light, dark) simply set the option, the order normally does not matter

More info: http://wzpan.github.io/hexo-theme-freemind/2014/03/16/tag-plugins/

### Samples ###
```
{%btn http://www.google.com "Lets visit Google" danger lg outline%}
{%pill test%}
{%pill success Successfull!!!%}
```

## Dependencies ##

* [Hexo](http://hexo.io) >= 3.0
* [Twitter-Bootstrap](http://getbootstrap.com/) >= 4  （Suggested. You can alternatively try a minimal CSS given bellow.）
* [FontAwesome](http://fortawesome.github.io/Font-Awesome/) >= 3.0

## Tips for non bootstrap-based theme ##

If you're using a Hexo theme that is not built on Twitter Bootstrap, you can have a try at [a minimal CSS](https://gist.github.com/wzpan/ad05a8bb162fbc560259) provided by @[shark-oxi](https://github.com/shark-oxi) which wraps all the neccessary stylesheets for the above plugins.
