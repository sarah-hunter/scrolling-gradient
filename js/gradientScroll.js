$.fn.gradientScroll = function(colour1, colour2){
	var startColour = $('<div>').addClass('.colour1').css({
		position: 'absolute',
	 	width: '100%',
	 	height: '100%',
	 	'z-index': 1,
	 	background: colour1
	 });
	$('.container').append(startColour);
	
	startColour = $('.container').children().last();

	var endColour = $('<div>').addClass('.colour2').css({
		position: 'absolute',
	 	width: '100%',
	 	height: '100%',
	 	background: colour2
	 });
	$('.container').append(endColour);

	//FINDS HEIGHT OF STARTCOLOUR
	var startColourHeight = startColour.outerHeight();


	$(this).scroll(function(){

	//THIS CALCULATES THE OPACITY PERCENTAGE
	var scrollPercent = (startColourHeight - window.scrollY - window.outerHeight) / (startColourHeight - window.outerHeight);
		if(scrollPercent >= 0){
			startColour.css('opacity', scrollPercent);
		}
	});
};