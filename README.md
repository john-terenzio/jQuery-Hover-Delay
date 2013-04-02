jQuery Hover Delay
==================

About
-----
This plugin "extends" the jQuery `.hover` method in a simple yet powerful way. Normally the `.hover` method takes two arguments, `handlerIn` and `handlerOut`, which are executed when the user mouses in and out of an element respectively (for a more detailed explaination of jQuery `.hover` visit the [jQuery docs](http://api.jquery.com/hover/)). This plugin enables the use of a third argument, `delay`, to be passed to the native jQuery method. If the delay argument (which should be an integer representing milliseconds) is detected, the hover in and out handlers will wait for that amount of time before they are triggered. This produces a more natural feel in certain situations and avoids triggering hovers accidentally during unrelated mouse movements that happen to pass over a hover-enabled element. Basically the mouse must be over the element for X milliseconds before `handlerIn` is called, and outside of the element for X milliseconds before `handlerOut` is called.

There is a similar and longstanding plugin that also solves this problem called [hoverIntent](http://cherne.net/brian/resources/jquery.hoverIntent.html). Not only does it have delay, but also some more advanced options. This plugin, however, aims to be smaller, lighter, faster, and easier to work with, since it does not introduce a new method to jQuery and does not have a lot of options to configure. This plugin is also compatble with jQuery 1.9.x and will not raise errors if one forgets to include it.

Usage
-----
```javascript
$.hover(handlerIn, handlerOut); // normal .hover
$.hover(handlerInOut); // normal .hover with same handler for in/out

$.hover(handlerIn, handlerOut, delay); // enhanced .hover with delay
$.hover(handlerInOut, delay); // enhanced .hover with delay and same handler for in/out
```

Resources
---------
  * DEMO: http://terenz.io/hover/demo.html
  * jQuery docs on the `.hover` method: http://api.jquery.com/hover/
  * hoverIntent Plugin: http://cherne.net/brian/resources/jquery.hoverIntent.html
