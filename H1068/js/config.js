// JavaScript Document

//Dropdown hover
$(document).ready(function(){
    $("#nav li").hover(
         function() { $('ul', this).fadeIn(300);
		
		},
        
		function() { $('ul', this).fadeOut(300);
    });				
});


//Dropdown hover animation 
$(document).ready(function(){
	$("#nav li ul li").not('.active').hover(
  function () {
    $(this).animate({textIndent:"14px"},150);
  },
  function () {
   $(this).animate({textIndent:"0"});
  }
);
});


//slider
$(document).ready(function(){
	$('#slider').plusSlider({
			sliderEasing: 'easeInOutExpo', // Anything other than 'linear' and 'swing' requires the easing plugin
			fullWidth: true,
			sliderType: 'fader' // Choose whether the carousel is a 'slider' or a 'fader'
		});
});


/*slider hover arrows - not needed anymore
$(document).ready(function(){
	$("#pic-pattern").hover(
  function () {
    $(".plusslider-arrows li").fadeIn(300);
  },
  function () {
    $(".plusslider-arrows li").fadeOut(300);
  }
);
});*/


$(document).ready(function() {
        //move he last list item before the first item. The purpose of this is if the user clicks to slide left he will be able to see the last item.
        $('#carousel_ul li:first').before($('#carousel_ul li:last')); 
        
        
        //when user clicks the image for sliding right        
        $('#sp-carouselNext').click(function(){
        
            //get the width of the items ( i like making the jquery part dynamic, so if you change the width in the css you won't have o change it here too ) '
            var item_width = $('#carousel_ul li').outerWidth() + 10;
            
            //calculae the new left indent of the unordered list
            var left_indent = parseInt($('#carousel_ul').css('left')) - item_width;
            
            //make the sliding effect using jquery's animate function '
            $('#carousel_ul:not(:animated)').animate({'left' : left_indent},500,function(){    
                
                //get the first list item and put it after the last list item (that's how the infinite effects is made) '
                $('#carousel_ul li:last').after($('#carousel_ul li:first')); 
                
                //and get the left indent to the default -210px
                $('#carousel_ul').css({'left' : '-85px'});
            }); 
        });
        
        //when user clicks the image for sliding left
        $('#sp-carouselPrev').click(function(){
            
            var item_width = $('#carousel_ul li').outerWidth() + 10;
            
            /* same as for sliding right except that it's current left indent + the item width (for the sliding right it's - item_width) */
            var left_indent = parseInt($('#carousel_ul').css('left')) + item_width;
            
            $('#carousel_ul:not(:animated)').animate({'left' : left_indent},500,function(){    
            
            /* when sliding to left we are moving the last item before the first list item */            
            $('#carousel_ul li:first').before($('#carousel_ul li:last')); 
            
            /* and again, when we make that change we are setting the left indent of our unordered list to the default -210px */
            $('#carousel_ul').css({'left' : '-85px'});
            });
            
            
        });
  });
  
  
  
/* solution partners hover effect */
$(document).ready(function(){
	$("#carousel_ul li img").hover(
	function() {
	$(this).stop().animate({"opacity": "1"});
	},
	function() {
	$(this).stop().animate({"opacity": ".7"});
});
 
});


/* recent works hover effect */
$(document).ready(function(){
	$("#rw-pro li").hover(
	function() {
	$(this).find('img').stop().animate({"opacity": ".7"});
	},
	function() {
	$(this).find('img').stop().animate({"opacity": "1"});
});
 
});


/* testimonials home slider */
$(document).ready(function(){
	$('#testimonial-slider').plusSlider({
			sliderEasing: 'easeInOutExpo', // Anything other than 'linear' and 'swing' requires the easing plugin
			fullWidth: true,
			speed: 200,
			autoPlay: false,
			createPagination: false,
			sliderType: 'fader' // Choose whether the carousel is a 'slider' or a 'fader'
		});
});

/* social bar hover effect */
$(document).ready(function(){
	$("#social li").hover(
	function() {
	$(this).stop().animate({"opacity": "1"});
	},
	function() {
	$(this).stop().animate({"opacity": ".55"});
});
 
});


/* Tooltip @ Social bar */
$(window).load(function() {
	$(".social-centered li a[title]").bt({
		  positions: 'top',
		  padding:5,
		  spikeLength: 7,
		  spikeGirth: 8,
		  cornerRadius: 0,
		  fill: 'rgba(50, 50, 50, 1)',
		  strokeWidth:0,
		  strokeStyle: '#777',
		  animate: true,
		  cssStyles: {width: 'auto', height:'20px', color: '#ddd', fontSize:'10px', lineHeight:'33px', textAlign:'center' , fontWeight:'normal', position:"absolute", top:'-15px', paddingTop:'6px', paddingBottom:'6px'}
		
	});
});


/* footer blog read more link hover effect */
$(document).ready(function(){
	$(".footer-readmore a").hover(
	function() {
	$(this).stop().animate({"opacity": "1"});
	},
	function() {
	$(this).stop().animate({"opacity": ".6"});
});
 
});


/* Tweets */
jQuery(function($) {
		getTwitters('tweets', { 
							id: 'akin_g',  
							prefix: '', 
							clearContents: false, // leave the original message in place
							count: 3, 
							withFriends: true,
							ignoreReplies: false,
							newwindow: true,
							template: '<span class="twitterStatus">%text%</span> <em class="twitterTime"><a href="http//twitter.com/%user_screen_name%/statuses/%id_str%/">%time%</a></em></span>'
					});
	});


//Flickr Feed
$.getJSON("http//api.flickr.com/services/feeds/photos_public.gne?id=52617155@N08&lang=en-us&format=json&jsoncallback=?",					        
function(data){
	$.each(data.items, function(i,item){
	var sourceSquare = (item.media.m).replace("_m.jpg", "_s.jpg");							
	$("<img/>").attr("src", sourceSquare).appendTo("#flickr-i")
	.wrap("<a href='" + item.link + "' + title='" + item.title + "' target='_blank'></a>");
	if ( i == 11) return false;
	});
});




// Tooltip permalink @ recent works
$(window).load(function() {
	$("a.project-single").bt('<img src="images/permalink.png" width="20" height="20">',
	
	{  	  
	      positions:'top',
		  padding:0,
		  spikeLength: 0,
		  spikeGirth: 9,
		  cornerRadius: 0,
		  fill: 'rgba(0, 0, 0, 1)',
		  strokeWidth:1,
		  strokeStyle: '#333',
		  animate: true,
		  cssStyles: {width: '0', height:'0px', color: '#ddd', fontSize:'10px', lineHeight:'33px', textAlign:'center', fontWeight:'normal', paddingTop:'12px',paddingBottom:'5px',position:'absolute', top:'-32px', left:'-22px'}
		
	});
});


// Tooltip magnifier @ recent works
$(window).load(function() {
	$("a.rw-pp").bt('<img src="images/magnifier.png" width="20" height="20">',
	
	{  	  
	      positions:'top',
		  padding:0,
		  spikeLength: 0,
		  spikeGirth: 9,
		  cornerRadius: 0,
		  fill: 'rgba(0, 0, 0, 1)',
		  strokeWidth:1,
		  strokeStyle: '#333',
		  animate: true,
		  cssStyles: {width: '0', height:'0px', color: '#ddd', fontSize:'10px', lineHeight:'33px', textAlign:'center', fontWeight:'normal', paddingTop:'12px',paddingBottom:'5px',position:'absolute', top:'-58px', left:'-10px'}
		
	});
});



//Pretty Photo
$(document).ready(function() {
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: '<div class="pp_social"><div class="twitter"><a href="http//twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http//platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="http//www.facebook.com/plugins/like.php?locale=en_US&href='+location.href+'&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div></div>' /* html or false to disable */
		});
});



//go to top script
$(document).ready(function() {
			
			var defaults = {
	  			containerID: 'moccaUItoTop', // fading element id
				containerHoverClass: 'moccaUIhover', // fading element hover class
				scrollSpeed: 1200,
				easingType: 'linear' 
	 		};
			
			$().UItoTop({scrollSpeed: 300});
			
		});
		
		
//go to top bt hover
$(document).ready(function(){
	$("a#toTop").hover(
	function() {
	$(this).stop().animate({"opacity": ".8"});
	},
	function() {
	$(this).stop().animate({"opacity": ".4"});
});
 
});


// portfolio pics hover 
$(document).ready(function(){
	$(".port-img-wrap").hover(
	function() {
	$(this).find('img').stop().animate({"opacity": ".7"});
	},
	function() {
	$(this).find('img').stop().animate({"opacity": "1"});
});
 
});


// Tooltip magnifier @ portfolio
$(window).load(function() {
	$("a.port-pp").bt('<img src="images/magnifier.png" width="20" height="20">',
	
	{  	  
	      positions:'top',
		  padding:0,
		  spikeLength: 0,
		  spikeGirth: 9,
		  cornerRadius: 0,
		  fill: 'rgba(0, 0, 0, 1)',
		  strokeWidth:1,
		  strokeStyle: '#333',
		  animate: true,
		  cssStyles: {width: '0', height:'0px', color: '#ddd', fontSize:'10px', lineHeight:'33px', textAlign:'center', fontWeight:'normal', paddingTop:'12px',paddingBottom:'5px',position:'absolute', top:'150px', left:'-10px'}
		
	});
});

	
// Tooltip permalink @ portfolio
$(window).load(function() {
	$(".port-img-wrap a.project-single").bt('<img src="images/permalink.png" width="20" height="20">',
	
	{  	  
	      positions:'top',
		  padding:0,
		  spikeLength: 0,
		  spikeGirth: 9,
		  cornerRadius: 0,
		  fill: 'rgba(0, 0, 0, 1)',
		  strokeWidth:1,
		  strokeStyle: '#333',
		  animate: true,
		  cssStyles: {width: '0', height:'0px', color: '#ddd', fontSize:'10px', lineHeight:'33px', textAlign:'center', fontWeight:'normal', paddingTop:'12px',paddingBottom:'5px',position:'absolute', top:'-32px', left:'-21px'}
		
	});
});



// portfolio 2-3-4 col hover 
$(document).ready(function(){
	$(".filteredcontent li").hover(
	function() {
	$(this).find('img').stop().animate({"opacity": ".65"});
	},
	function() {
	$(this).find('img').stop().animate({"opacity": "1"});
});
 
});


// Tooltip magnifier @ port2col
$(window).load(function() {
	$("a.twocol-pp").bt('<img src="images/magnifier.png" width="20" height="20">',
	
	{  	  
	      positions:'top',
		  padding:0,
		  spikeLength: 0,
		  spikeGirth: 9,
		  cornerRadius: 0,
		  fill: 'rgba(0, 0, 0, 1)',
		  strokeWidth:1,
		  strokeStyle: '#333',
		  animate: true,
		  cssStyles: {width: '0', height:'0px', color: '#ddd', fontSize:'10px', lineHeight:'33px', textAlign:'center', fontWeight:'normal', paddingTop:'12px',paddingBottom:'5px',position:'absolute', top:'-215px', left:'-118px'}
		
	});
});

	
/* Tooltip permalink @ port2col
$(window).load(function() {
	$("#port2col a.project-single").bt('<img src="images/permalink.png" width="20" height="20">',
	
	{  	  
	      positions:'top',
		  padding:0,
		  spikeLength: 0,
		  spikeGirth: 9,
		  cornerRadius: 0,
		  fill: 'rgba(0, 0, 0, 1)',
		  strokeWidth:1,
		  strokeStyle: '#333',
		  animate: true,
		  cssStyles: {width: '0', height:'0px', color: '#ddd', fontSize:'10px', lineHeight:'33px', textAlign:'center', fontWeight:'normal', paddingTop:'12px',paddingBottom:'5px',position:'absolute', top:'-157px', left:'-19px', left:'[0px;]'}
		
	});
});*/



// Tooltip magnifier @ port3col
$(window).load(function() {
	$("a.threecol-pp").bt('<img src="images/magnifier.png" width="20" height="20">',
	
	{  	  
	      positions:'top',
		  padding:0,
		  spikeLength: 0,
		  spikeGirth: 9,
		  cornerRadius: 0,
		  fill: 'rgba(0, 0, 0, 1)',
		  strokeWidth:1,
		  strokeStyle: '#333',
		  animate: true,
		  cssStyles: {width: '0', height:'0px', color: '#ddd', fontSize:'10px', lineHeight:'33px', textAlign:'center', fontWeight:'normal', paddingTop:'12px',paddingBottom:'5px',position:'absolute', top:'-140px', left:'-77px'}
		
	});
});

	
/* Tooltip permalink @ port3col
$(window).load(function() {
	$("#port3col a.project-single").bt('<img src="images/permalink.png" width="20" height="20">',
	
	{  	  
	      positions:'top',
		  padding:0,
		  spikeLength: 0,
		  spikeGirth: 9,
		  cornerRadius: 0,
		  fill: 'rgba(0, 0, 0, 1)',
		  strokeWidth:1,
		  strokeStyle: '#333',
		  animate: true,
		  cssStyles: {width: '0', height:'0px', color: '#ddd', fontSize:'10px', lineHeight:'33px', textAlign:'center', fontWeight:'normal', paddingTop:'12px',paddingBottom:'5px',position:'absolute', top:'-82px', left:'-24px'}
		
	});
});*/


// Tooltip magnifier @ port4col
$(window).load(function() {
	$("a.fourcol-pp").bt('<img src="images/magnifier.png" width="20" height="20">',
	
	{  	  
	      positions:'top',
		  padding:0,
		  spikeLength: 0,
		  spikeGirth: 9,
		  cornerRadius: 0,
		  fill: 'rgba(0, 0, 0, 1)',
		  strokeWidth:1,
		  strokeStyle: '#333',
		  animate: true,
		  cssStyles: {width: '0', height:'0px', color: '#ddd', fontSize:'10px', lineHeight:'33px', textAlign:'center', fontWeight:'normal', paddingTop:'12px',paddingBottom:'5px',position:'absolute', top:'-104px', left:'-71px'}
		
	});
});

	
/* Tooltip permalink @ port4col
$(window).load(function() {
	$("#port4col a.project-single").bt('<img src="images/permalink.png" width="20" height="20">',
	
	{  	  
	      positions:'top',
		  padding:0,
		  spikeLength: 0,
		  spikeGirth: 9,
		  cornerRadius: 0,
		  fill: 'rgba(0, 0, 0, 1)',
		  strokeWidth:1,
		  strokeStyle: '#333',
		  animate: true,
		  cssStyles: {width: '0', height:'0px', color: '#ddd', fontSize:'10px', lineHeight:'33px', textAlign:'center', fontWeight:'normal', paddingTop:'12px',paddingBottom:'5px',position:'absolute', top:'-70px', left:'-25px'}
		
	});
});*/



//Portfolio-Filter
$(document).ready(function() {
	$('ul#filter a').click(function() {
		$(this).css('outline','none');
		$('ul#filter .current').removeClass('current');
		$(this).parent().addClass('current');
		
		var filterVal = $(this).text().toLowerCase().replace(' ','-');
				
		if(filterVal == 'all') {
			$('ul.filteredcontent li.hidden').fadeIn('slow').removeClass('hidden');
		} else {
			
			$('ul.filteredcontent li').each(function() {
				if(!$(this).hasClass(filterVal)) {
					$(this).fadeOut('normal').addClass('hidden');
				} else {
					$(this).fadeIn('slow').removeClass('hidden');
				}
			});
		}
		
		return false;
	});
});



/* side-clients hover */
$(document).ready(function(){
	$("#side-clients li a").hover(
	function() {
	$(this).stop().animate({"opacity": "1"});
	},
	function() {
	$(this).stop().animate({"opacity": ".6"});
});
 
});



//nivo slider @ portfolio-single page
$(window).load(function() {
        $('#slider-port-single').nivoSlider({
			controlNavThumbs: true,
			effect: 'fade',
			manualAdvance: true
		});
});


/* portfolio-single thumbnails hover */
$(document).ready(function(){
	$("#port-single-side-tns li a").hover(
	function() {
	$(this).stop().animate({"opacity": ".6"});
	},
	function() {
	$(this).stop().animate({"opacity": "1"});
});

});


// Tooltip permalink @ portfolio-single
$(window).load(function() {
	$("#port-single-protitle a").bt('<img src="images/permalink.png" width="20" height="20">',
	
	{  	  
	      positions:'top',
		  padding:0,
		  spikeLength: 0,
		  spikeGirth: 9,
		  cornerRadius: 0,
		  fill: 'rgba(0, 0, 0, 1)',
		  strokeWidth:1,
		  strokeStyle: '#333',
		  animate: true,
		  cssStyles: {width: '0', height:'0px', color: '#ddd', fontSize:'10px', lineHeight:'33px', textAlign:'center', fontWeight:'normal', paddingTop:'12px',paddingBottom:'5px',position:'absolute', top:'-32px', left:'-60px'}
		
	});
});


//related portfolio entries hover
$(document).ready(function(){
	$("#related-port li a").hover(
	function() {
	$(this).stop().animate({"opacity": ".6"});
	},
	function() {
	$(this).stop().animate({"opacity": "1"});
});

});


// Tooltip @ Related portfolio entries 
$(window).load(function() {
	$("#related-port li a").bt({
		  positions: 'top',
		  padding:5,
		  spikeLength: 7,
		  spikeGirth: 8,
		  cornerRadius: 0,
		  fill: 'rgba(50, 50, 50, 1)',
		  strokeWidth:0,
		  strokeStyle: '#777',
		  animate: true,
		  cssStyles: {width: 'auto', height:'7px', background:'#323232', color: '#ddd', fontSize:'10px', lineHeight:'5px', textAlign:'center' , fontWeight:'normal', position:"absolute", top:'-62px', left:'-52px', paddingTop:'6px', paddingBottom:'6px'}
		
	});
});


// about staff-social bar hover effect 
$(document).ready(function(){
	$(".about-right .social-centered li img").hover(
	function() {
	$(this).stop().animate({"opacity": "1"});
	},
	function() {
	$(this).stop().animate({"opacity": ".55"});
});
 
});


/* blog imgs hover */
$(document).ready(function(){
	$(".blog-img-inner img").hover(
	function() {
	$(this).stop().animate({"opacity": ".7"});
	},
	function() {
	$(this).stop().animate({"opacity": "1"});
});

});







