$.zscrollToTop = function(el, to, duration ){
	duration =  duration ? parseInt(duration) : null; 
	if ( !duration || duration < 1) {
		duration = 200;
	};
	if ( !el || el.length ) {
		el = $(window);
	}else{
		el = el[0];
	};
	if ( !to ) {
		return;
	}
	function _scrollTo(el,to, duration ){
		if(duration < 0){return};
		var difference = to - $(window).scrollTop();
		var perTick = difference / duration * 10;
		this.scrollToTimerCache = setTimeout(function() {
			if (!isNaN(parseInt(perTick, 10))) {
				window.scrollTo(0, $(window).scrollTop() + perTick);
				_scrollTo(el, to, duration - 10);
			}
		}.bind(this), 10);
	};
	_scrollTo(el,to,duration);
	return $(el);
};

$.fn.zscrollTo = function(to, duration)  {
	return $.zscrollToTop(this, to, duration);
};
