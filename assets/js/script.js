$(document).ready(function() {
	$('u').each(function(){
		$(this).replaceWith($('<pre class="code">' + this.innerHTML + '</pre>')); 
	});
	$('.alias').each(function(){
		$(this).html('Alias : <b>'+$(this).text()+'</b>'); 
	});
	$('pre.code').each(function(i, block) {
	    hljs.highlightBlock(block);
	});
	// Scrolling
	$('#sidebar a').click(function(e){
		e.preventDefault();
		$().zscrollTo(0,0);
		if($($(this).attr('href')).length){
			$().zscrollTo($($(this).attr('href')).offset().top - 200);
		}
	});

	$('#float').text($('#finished_percent').html()+'% Finished');
});
