$.fn.shine = function(options) {
	if(options) {
		var shineColor = '#fff';
		var textColor = '#222';

		if(options.shineColor) shineColour = options.shineColor
		if(options.textColor) textColor = options.shineColor;

		var background = '-webkit-gradient(linear, left top, right top, from('+textColor+'), to('+textColor+'), color-stop(0.5, '+shineColour+')) 0 0 no-repeat';
		this.css({background: background, 'background-color' : textColor, '-webkit-background-clip': 'text', '-webkit-background-size': '125px'});
	}
    this.addClass('shine');
};