# Scrolling Gradient

## Overview

A simple way to change the colour of your background when you scroll down the page.
Currently you can only add 2 colours.

## How to use it
1. Link the `gradientScroll.js` to your HTML file.
2. Add your desired CSS to startColour and endColour. The plugin will generate the necessary HTML for you.

		var startColour = $('<div>').addClass('.colour1').css({
			//Add CSS
			width: 100%;
			height: 100%;
		 });
		 
		var endColour = $('<div>').addClass('.colour2').css({
			//Add CSS
			width: 100%;
			height: 100%;
		});

3. If your div's are not a child element of `.container`, change the following to the name of the parent element.

		$('parent element').append(startColour);
	
		startColour = $('parent element').children().last();
		
		$('parent element').append(endColour);
 
   
3. In your main javascript file, add the following code to call the function:

		$(function() {
			$(document).gradientScroll('colour1', 'colour2');
		});

4. You can pass a HEX value or a RGB / RGBA value. 

### [View the demo](http://samchun.github.io/scrolling-gradient/)