	$(document).ready(function() {
		//config
		$float_speed=1500; //milliseconds
		$float_easing="easeOutQuint";
		$menu_fade_speed=500; //milliseconds
		$closed_menu_opacity=0.75;

		//cache vars
		$side_menu=$("#side_menu");
		$side_menu_menu=$("#side_menu .menu");
		$side_menu_label=$("#side_menu .label");

		$(window).load(function() {
			menuPosition=$('#side_menu').position().top;
			FloatMenu();
			$side_menu.hover(
				function(){ //mouse over
					$side_menu_label.fadeTo($menu_fade_speed, 1);
					$side_menu_menu.fadeIn($menu_fade_speed);
				}
			);
		});

		$(window).scroll(function () { 
			FloatMenu();
		});

		function FloatMenu(){
			var scrollAmount=$(document).scrollTop();
			var newPosition=menuPosition+scrollAmount;
			if($(window).height()<$side_menu.height()+$side_menu_menu.height()){
				$side_menu.css("top",menuPosition);
			} else {
				$side_menu.stop().animate({top: newPosition}, $float_speed, $float_easing);
			}
		}
	});
	
	
	$(document).ready(function() {
	/* Image hover */
		$('.work_image img').hover(function(){
			$(this).animate({"opacity": "0.5"},{queue:true,duration:300});
		}, function() {
			$(this).animate({"opacity": "1"},{queue:true,duration:300});
		});

	});

	
		/* portfolio categories */
	$(document).ready(function() {

		//When page loads...
		$(".cat_content").hide(); //Hide all content
		$("ul.pf_categories li:first").addClass("active").show();
		$(".cat_content:first").show(); //Show first category content

		//On Click Event
		$("ul.pf_categories li").click(function() {

			$("ul.pf_categories li").removeClass("active"); //Remove any "active" class
			$(this).addClass("active"); //Add "active" class to selected category
			$(".cat_content").hide(); //Hide all content

			var activeCat = $(this).find("a").attr("href"); //Find the href attribute value to identify the active category + content
			$(activeCat).fadeIn(); //Fade in the active ID content
			return false;
		});

	});

