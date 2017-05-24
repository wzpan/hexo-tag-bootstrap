hexo-tag-bootstrap
===

[![npm](https://img.shields.io/npm/v/hexo-generator-search.svg)](https://www.npmjs.com/package/hexo-generator-search)
[![npm](https://img.shields.io/npm/dm/hexo-tag-bootstrap.svg)](https://www.npmjs.com/package/hexo-tag-bootstrap)

## Intro ##

hexo-tag-bootstrap is a collections of Hexo tag plugins.

It wraps most [Twitter-Bootstrap](http://getbootstrap.com/) 3.1.1 components in a uniformed way. It can be used independently, though I highly recommend you to use it with [Freemind](http://github.com/wzpan/hexo-theme-freemind/), a Bootstrap theme for Hexo.

## Install ##

``` sh
$ npm install hexo-tag-bootstrap --save
```

## Components ##

* **textcolor** - Convey meaning through color with a handful of emphasis utility classes.
* **button** - Inserts a button with target links, text and specified color.
* **label** - Inserts a label with text and specified color.
* **badge** - Inserts a badge with text.
* **alert** - Inserts alert messages with text and specified color.

More info: http://wzpan.github.io/hexo-theme-freemind/2014/03/16/tag-plugins/

## Dependencies ##

* [Hexo](http://hexo.io) >= 3.0
* [Twitter-Bootstrap](http://getbootstrap.com/) >= 3.1.1  （Suggested. You can alternatively try a minimal CSS given bellow.）
* [FontAwesome](http://fortawesome.github.io/Font-Awesome/) >= 3.0

## Tips for non bootstrap-based theme ##

If you're using a Hexo theme that is not built on Twitter Bootstrap, you can have a try at [a minimal CSS](https://gist.github.com/wzpan/ad05a8bb162fbc560259) provided by @[shark-oxi](https://github.com/shark-oxi) which wraps all the neccessary stylesheets for the above plugins.
