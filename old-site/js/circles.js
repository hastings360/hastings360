/**
 * @author Larry
 */

var main = function(){
	$('#top-left-in').click(function(){
		$(this).toggleClass('center-circle');
		$(this).animate({left: '62%',top: '50%'},2);
	});
};

$(document).ready(main);
