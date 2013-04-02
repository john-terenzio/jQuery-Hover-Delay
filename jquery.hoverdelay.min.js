// jQuery Hover Delay 1.1.0 (20130401)
// By John Terenzio | http://terenz.io/ | MIT License
(function(b){var e=b.fn.hover,d=function(a,d,e){return this.each(function(){var c;b(this).on("mouseenter mouseleave",function(b){var f=this,g="mouseenter"===b.type?a:d;c=c?window.clearTimeout(c):window.setTimeout(function(){c=void 0;g.call(f,b)},e)})})};b.fn.hover=function(){var a=Array.prototype.slice.call(arguments);return 3===a.length&&"number"===typeof a[2]?d.apply(this,a):2===a.length&&"number"===typeof a[1]?d.call(this,a[0],a[0],a[1]):e.apply(this,a)}})(window.jQuery);
