// jQuery Hover Delay 1.0.2 (20110922)
// By John Terenzio | http://terenz.io/ | MIT License
(function($){

	var

	// original jQuery hover method
	oldHover = $.fn.hover,

	// new hover method with delay
	newHover = function(handlerIn, handlerOut, delay){
		return $(this).each(function(){

			// the timeout
			var timeout;

			// bind to original hover, but use delay
			oldHover.call($(this), function(e){
				if (timeout) {
					timeout = clearTimeout(timeout);
				} else {
					var element = this;
					timeout = setTimeout(function(){
						timeout = undefined;
						handlerIn.call(element, e); // pass original event object to handler
					}, delay);
				}
			}, function(e){
				if (timeout) {
					timeout = clearTimeout(timeout);
				} else  {
					var element = this;
					timeout = setTimeout(function(){
						timeout = undefined;
						handlerOut.call(element, e); // pass original event object to handler
					}, delay);
				}
			});

		});
	};

	// hack original jQuery hover method to use old or new depending on whether or not a delay is passed
	$.fn.hover = function(handlerIn, handlerOut, delay){
		if (typeof delay === 'number') {
			newHover.call(this, handlerIn, handlerOut, delay);
		} else {
			oldHover.call(this, handlerIn, handlerOut);
		}
	};

})(jQuery);
