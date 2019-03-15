/*20130604 by LEE */
$("#header .nav-btn").toggle(function(){
	  $("#nav").slideDown('fast');
	},function(){
	  $("#nav").slideUp('fast');	
	});


$('.gotop').click(function(){
	$("html,body").animate({scrollTop: 0},500);
});