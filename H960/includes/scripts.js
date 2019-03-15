$(document).ready(function() {

	/* Slideshow Control */	
	$("#slider").simplecarousel({
		width: 320,
		height: 165,
		visible: 1,
		auto: 8000,
		next: $('.next'),
		prev: $('.previous'),
		pagination: true
	});
	
	/* Sidebar Control */
	$(".controls a").click(function() {
		$("#content").toggleClass("open");
		$(".controls").toggleClass("active");
	}); 
	
	/* Initializes Twitter Feed */
	$(function($){
		$(".feed").tweet({
			join_text: "auto",
			username: "indiqo",
			count: 10,
			auto_join_text_default: "I said,",
			auto_join_text_ed: "I",
			auto_join_text_ing: "I was",
			auto_join_text_reply: "I replied",
			auto_join_text_url: "I shared",
			loading_text: "Loading Tweets.."
		});
	});
	
	/* Scrolling Areas */
	if (!!('ontouchstart' in window)) {
		$('.content-scroll').touchScroll();
		$('.sidebar-scroll').touchScroll();
	}

});