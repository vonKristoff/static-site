/**
* $custom jQuery plug-in
* Text Colour Truffle Shuffle
*
* @author Jean-Christophe Nicolas <mrjcnicolas@gmail.com>
* @homepage http://bite-software.co.uk/$plugin/
* @version 1.0.0
* @license MIT http://opensource.org/licenses/MIT
* @date 22-05-2013
*/
(function($) {

$.fn.program_name = function(options){
	
	var el = $(this),
		mobile = isMobile.any(),	
	
		process = new Plugin(me,options);

	window.addEventListener( 'resize', process.resize, false );
			
	return this.el;	
}

var Plugin = function(me,options){

	var config = {	
		effect: 'slideToggle',
		speed: 500 
	}
	$.extend(config,options);

	this.el = me;
	this.something = config.value;
	
	this.init();
}

Plugin.prototype.init = function(){

}

Plugin.prototype.resize = function(){

}

Plugin.prototype.hsl = function(rgb){

	var r1 = rgb[0] / 255;
	var g1 = rgb[1] / 255;
	var b1 = rgb[2] / 255;
	var maxColor = Math.max(r1,g1,b1);
	var minColor = Math.min(r1,g1,b1);
	//Calculate L:
	var L = (maxColor + minColor) / 2 ;
	var S = 0;
	var H = 0;
	if(maxColor != minColor){
	    //Calculate S:
	    if(L < 0.5){
	        S = (maxColor - minColor) / (maxColor + minColor);
	    }else{
	        S = (maxColor - minColor) / (2.0 - maxColor - minColor);
	    }
	    //Calculate H:
	    if(r1 == maxColor){
	        H = (g1-b1) / (maxColor - minColor);
	    }else if(g1 == maxColor){
	        H = 2.0 + (b1 - r1) / (maxColor - minColor);
	    }else{
	        H = 4.0 + (r1 - g1) / (maxColor - minColor);
	    }
	}

	L = L * 100;
	S = S * 100;
	H = H * 60;
	if(H<0){
	    H += 360;
	}

	var result = [H, S, L];
	return result;
	
}
Plugin.prototype.rgb = function(hsl){
	var h = hsl[0];
	var s = hsl[1];
	var l = hsl[2];
	
	var m1, m2, hue;
	var r, g, b;
	s /=100;
	l /= 100;
	if (s == 0)
		r = g = b = (l * 255);
	else {
		if (l <= 0.5)
			m2 = l * (s + 1);
		else
			m2 = l + s - l * s;
		m1 = l * 2 - m2;
		hue = h / 360;
		r = this.hue2rgb(m1, m2, hue + 1/3);
		g = this.hue2rgb(m1, m2, hue);
		b = this.hue2rgb(m1, m2, hue - 1/3);
	}
	return [Math.round(r), Math.round(g), Math.round(b)];
}
Plugin.prototype.hue2rgb = function(m1, m2, hue) {
	var v;
	if (hue < 0)
		hue += 1;
	else if (hue > 1)
		hue -= 1;

	if (6 * hue < 1)
		v = m1 + (m2 - m1) * hue * 6;
	else if (2 * hue < 1)
		v = m2;
	else if (3 * hue < 2)
		v = m1 + (m2 - m1) * (2/3 - hue) * 6;
	else
		v = m1;

	return 255 * v;
};

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

})(jQuery);