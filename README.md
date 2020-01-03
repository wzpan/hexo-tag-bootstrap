hexo-tag-bootstrap
===

[![npm](https://img.shields.io/npm/v/hexo-tag-bootstrap.svg)](https://www.npmjs.com/package/hexo-tag-bootstrap)
[![npm](https://img.shields.io/npm/dm/hexo-tag-bootstrap.svg)](https://www.npmjs.com/package/hexo-tag-bootstrap)

## Intro ##

hexo-tag-bootstrap is a collections of Hexo tag plugins.

It wraps most [Twitter-Bootstrap](http://getbootstrap.com/) 4 components in a uniformed way. It can be used independently, though I highly recommend you to use it with [Freemind](http://github.com/wzpan/hexo-theme-freemind/), a Bootstrap theme for Hexo.

## Install ##

``` sh
$ npm install hexo-tag-bootstrap --save
```

Make sure to have the bootstrap css in you template before using any of these!

## Components ##

* **textcolor** - Convey meaning through color with a handful of emphasis utility classes.
* **button** - Inserts a button with target links, text and specified color.
** {% btn url text (color=primary) (size=def|sm|lg) (outline|block) %}
* **label** - Inserts a label with text and specified color.
* **pill** - Inserts a label with text and specified color.
** {% badge color text %}
* **badge** - Inserts a badge with text.
* **alert** - Inserts alert messages with text and specified color.
* **card** - Add a card control
** *carddeck* - use with cards to combine multiples
** *cardgroup* - similar to carddeck
* **jumbo** - jumbotron
* **carousel** - carousel tag - each img within will create a new "slide"
* **row** - add a grid row
* **col** - add a column within a grid row

For most options like style (primary, secondary, success, danger, warning, info, light, dark) simply set the option, the order normally does not matter.

Other components in the content (i.e. images) can be applied using classes and the information on http://getbootstrap.com/docs/4.0/content/images/


More info: http://wzpan.github.io/hexo-theme-freemind-blog/2014/03/16/tag-plugins/

### Grid ###

The bootstrap grid is best explained at http://getbootstrap.com/docs/4.0/layout/grid/

To use it with hexo, simply add a row and within add cols
```
{% row %}
  {% col  %}
    a column
  {% endcol  %}
{% endrow %}
```

you can add any number of sm/md/lg/xl classes to adjus the colos (you can omit the .col-:
```
{% row %}
  {% col md-4 xl-4 %} col a {% endcol %} 
  {% col md-6 xl-4 %} col b {% endcol %} 
  {% col md-2 xl-4 %} col c {% endcol %} 
{% endrow %}
```

The card also supports col directly, by simply adding *col* or *col=4* (you can use the same class prefixes as above):

```
{% row %}
  {% col md-4 %}  a column  {% endcol  %}
  {% card col=md-4 "Cool card" %} a column  {% endcard  %}
  {% col md-4 %}  a column  {% endcol  %}
{% endrow %}
```


## Samples ##
```
{%btn http://www.google.com "Lets visit Google" danger lg outline%}
{%pill test%}
{%pill success Successfull!!!%}
```

Row with 3 entrieS: 2 card and one col
```
{% row %}

{% col md-4 %}
This is a test
* One
* Two
* Three
{% endcol %}

{% card col=md-4 "Cool card" %}
Our cool stuff:
* coole Features
* something else
{% endcard %}

{% card col=md-4  %}
# heading 1
### sub heading 
This is Some content
* pos 1
* pos 2
{% endcard %}

{% endrow %}
```

Carousel (with 2 images, first with caption)
```
{% carousel nav indicators %}
{% img d-block w-100 /stock/img1.jpg %}
# First Slide
This is a label for the slide :) 
{% img d-block w-100 /stock/img2.jpg %}
{% endcarousel %}
```


## Dependencies ##

* [Hexo](http://hexo.io) >= 3.0
* [Twitter-Bootstrap](http://getbootstrap.com/) >= 4  （Suggested. You can alternatively try a minimal CSS given bellow.）
* [FontAwesome](http://fortawesome.github.io/Font-Awesome/) >= 3.0

## Tips for non bootstrap-based theme ##

If you're using a Hexo theme that is not built on Twitter Bootstrap, you can have a try at [a minimal CSS](https://gist.github.com/noraj/378b7aa01cc4f4c079120e6c2e2e3593) provided by @[noraj1337](https://github.com/noraj1337) which wraps all the neccessary stylesheets for the above plugins. For example for stylus theme templates include `tag.css` like this `@import "tag.css"` at the end of `themes/theme_name/source/css/style.styl` and place `tag.css` in `themes/theme_name/source/css/`.
