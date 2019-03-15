// JavaScript Document

/*------------------------------ */
/* START Tweet									 */
/*------------------------------ */

jQuery(function($){													
 	$(".tweet").tweet({
   	username: $tweetUserName,
    page: 1,
    avatar_size: 15,
    count: $tweetCount,
    loading_text: "loading ..."
    }).bind("loaded", function() {
			var ul = $(this).find(".tweet_list");
      var ticker = function() {
				setTimeout(function() {
					ul.animate({marginTop: '-=23px'}, 1500, function() {
						if(Math.abs(parseInt(ul.css('marginTop'))) > parseInt(ul.innerHeight())) {
							ul.css('marginTop', 0);
						}
						ticker();
					});  
				}, 5000);
      };
      ticker();
    });
});		

/*------------------------------ */
/* START countDown, contactForm	 */
/*------------------------------ */

$(document).ready(function(){
	//var $site = '../../round.jfthemes.home/';															 
															 
	// --- Setup and Start --> Count Down
	/*
	$day = 123;
	$hour = 0;
	$minute = 0;
	$seconds = 0;
	*/
			
	var countDown = new jfCountDown($day, $hour, $minute, $seconds);
			
	// --- Setup and Start --> Subscribe Form
	var subscribeForm = new jfSubscribeForm('#subscribe', $site);
	var subscribeFormBottom = new jfSubscribeForm('#subscribe-bottom', $site);
			
	// --- Setup and Start --> Contact Form
	var contactForm = new jfContactForm($site);
});	