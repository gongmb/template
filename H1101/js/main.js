// JavaScript Document

$(document).ready(function(){	
	var $heightWindow = $(window).height();
	var $content = $('#content');
	var $top = $('#top');
	var $footer = $('#footer');
	var $subscribe = $('#subscribe');
	var $subscribeBottom = $('#subscribe-bottom');
	var $player = $('#player');
	var $menuA = $('#menu-style-a');
	var $menuB = $('#menu-style-b');
	var $twitterTop = $('#twitter-top');
	var $logo = $('#logo');
	var $offsetBottom = 30;
	var $openTabId = null;
	var $contentHeight = 0;
	
	var $topHeight = {
			'class-1' : 420,
			'class-2' : 420,
			'class-3' : 645,
			'class-4' : 645,
			'class-5' : 379
		}
	
	var $classWidth = null;
	var $activeMenu = null;
	var $flagInit = false;
	var $defaultBottom = {
			'class-1' : {
								'close' : {'subscribe' : 51, 'player' : 70, 'menu' : 26},
								'open' : {'subscribe' : 21, 'player' : 40, 'menu' : -4}
								},
			'class-3' : {
								'default' : {'subscribe' : 0, 'player' : 0}
								},
			'class-4' : {
								'default' : {'subscribe' : 0, 'player' : 0}
								},
			'class-5' : {
								'default' : {'player' : 0}
								}
		};												

	/* --- BEGIN for all resolution --- */
	$(window).resize(function(){
	  $heightWindow = $(window).height();													
		resizeTemplate();
	});	
	
	$menuA.find('a').bind('mouseover', function(event){
		if(!$(this).hasClass('active')) {
			$(this).addClass('move-up').animate({'top': '-=8px'}, 300);
		}
		event.preventDefault();
	});
	
	$menuA.find('a').bind('mouseout', function(event){
		if($(this).hasClass('move-up')) {
			$(this).removeClass('move-up').animate({'top': 0}, 300);
		}
		
		event.preventDefault();
	});
	
	$menuA.find('a').bind('click', function(event){
		$activeMenu = 'nav-a';
		
		if($(this).hasClass('move-up')) {
			$(this).removeClass('move-up').animate({'top': 0}, 300, function() {
				openTab($(this));
			});
		}
		else {
			openTab($(this));
		}
						
		event.preventDefault();
	});
	
	$top.find('#wrap-menu-style-b a.menu-tab').bind('click', function(event) {
		$activeMenu = 'nav-b';				
		
		if($menuB.hasClass('open')) {
			closeMenu_B();
			closeTab();
			$(this).removeClass('active');
		}
		else {
			openMenu_B();
			$(this).addClass('active');
		}
		
		event.preventDefault();
	});	
	
	$top.find('#wrap-menu-style-b a.subscribe-tab').bind('click', function(event){
		showToggleSubscribe();
		
		event.preventDefault();
	});
	
	$subscribeBottom.find('a.cancel').bind('click', function(event){
		showToggleSubscribe();
		
		event.preventDefault();
	});
	
	$menuB.find('ul.menu li a').bind('click', function(event) {
		$activeMenu = 'nav-b';
		
		openTab($(this));
		
		event.preventDefault();
	});
	
	$content.children('section.page').each(function(){
		$(this).css({'display' : 'none'}).animate({opacity: 0}, 0);
	});
	
	$content.find('.button-close').bind('click', function(event){
		closeTab();																																				
		
		event.preventDefault();
	});
	
	$content.find('.button-top').bind('click', function(event){
		var href = $(this).attr('href');
    var destination = $(href).offset().top - 126;
		if(destination < 0) {destination = 0;}
		
		var str = 'html';
    if($.browser.safari) { str = 'body';}
		$(str).animate( { scrollTop: destination}, 900);			
	    			
		event.preventDefault();
	});
	
	$('#twitter-top .button-twitter').bind('click', function(event){
		slideToggleTwitterTop();
			
		event.preventDefault();
	})
	
	$menuB.css('display', 'none');	
	
	resizeTemplate();
	/* --- END for all resolution --- */
	
	/*--- BEGIN declaration functions ------------------------------------------------------*/	
	
	function showToggleSubscribe($command) {
		if($subscribeBottom.hasClass('open-subscribe')) {						

			$subscribeBottom.slideUp('slow', function(){
				$subscribeBottom.removeClass('open-subscribe');
				$top.find('#wrap-menu-style-b a.subscribe-tab').removeClass('active');
			});
		}
		else {
			if($command != 'close') {				
				$subscribeBottom.addClass('open-subscribe');
				$subscribeBottom.slideDown('slow');
				closeMenu_B();
				$top.find('#wrap-menu-style-b a.subscribe-tab').addClass('active');
				$top.find('#wrap-menu-style-b a.menu-tab').removeClass('active');
			}
		}
	}
	
	function slideToggleTwitterTop($slide) {
		if($slide == 'up') {
			$twitterTop.removeClass('open');	
			$twitterTop.find('article').slideUp('slow');
		}
		else {
			var $znak = 1;
			if($twitterTop.hasClass('open')) {		
				$znak = -1;
			}
			
			$twitterTop.toggleClass('open');
			$twitterTop.find('article').slideToggle('slow');
		}
	}
	
	function resizeTemplate() {
		init();		
		
		if($openTabId == null) {
			var $height = $heightWindow;
			
			switch($classWidth) {
				case 1:
				case 2:			
					$height = $heightWindow - $footer.height();
					break;
				case 3:
				case 4:
				case 5:					
					$height = $heightWindow - 1;
					break;
			}
			
			$top.css('height', $height);
		}	
	}
	
	function changeClass() {
		var $tabStatus = 'close'; 
		if($openTabId != null) {
			$tabStatus = 'open';
		}
		
		showToggleSubscribe('close');
		slideToggleTwitterTop('up');
		
			if($openTabId) {
				//alignment of the height of the current #top height
				//$top.animate({height: $topHeight['class-' + $classWidth]}, 'slow');
			
				//alignment of the height of the current #content height
				contentHeight($content.children($openTabId).innerHeight());
			}	
			
			switch($classWidth) {
				case 1:
					//default Desktop
				case 2:
					//default Desktop		
					$activeMenu = 'nav-a';
					animateCssBottom($menuA, $defaultBottom['class-1'][$tabStatus]['menu']);
					animateCssBottom($player, $defaultBottom['class-1'][$tabStatus]['player']);
					animateCssBottom($subscribe, $defaultBottom['class-1'][$tabStatus]['subscribe']);
					break;
				case 3:
					// 600	
					$activeMenu = 'nav-b';
					animateCssBottom($player, $defaultBottom['class-3']['default']['player']);
					animateCssBottom($subscribe, $defaultBottom['class-3']['default']['subscribe']);
					break;
				case 4:
					// 480
					$activeMenu = 'nav-b';
					animateCssBottom($player, $defaultBottom['class-4']['default']['player']);
					animateCssBottom($subscribe, $defaultBottom['class-4']['default']['subscribe']);
					break;
				case 5:
					// 320
					$activeMenu = 'nav-b';
					animateCssBottom($player, $defaultBottom['class-5']['default']['player']);
					break;					
			}		
	}
	
	function init() {
		var $width = $(window).width();
		var $flag = false;		
		
		if($width > 930) {
			// desktop DEFAULT - class = 1
			if($classWidth != 1) {
				$flag = true;
				$classWidth = 1;
			}
		}
		else if($width > 860){
			// 800 - class = 2
			if($classWidth != 2) {
				$flag = true;
				$classWidth = 2;
			}
		}
		else if($width > 510) {
			// 600 - class = 3
			if($classWidth != 3) {
				$flag = true;
				$classWidth = 3;
			}			
		}
		else if($width > 450) {
			// 480 - class = 4
			if($classWidth != 4) {
				$flag = true;
				$classWidth = 4;
			}
		}
		else {
			// 320 - class = 5
			if($classWidth != 5) {
				$flag = true;
				$classWidth = 5;
			}
		}
		
		if($flag) {
			changeClass();			
		}
	}
	
	function animateCssBottom($jq_obj, $bottom) {
		$jq_obj.animate({bottom : $bottom}, 'slow');	
	}
	
	function openTab($jq_obj) {			
		
		var $id = $jq_obj.attr('href');
		var $tab = $content.children($id);				
		var $flag = true;
		
		if($tab) {						
			if($openTabId == null) {
				openMenu_A($jq_obj);
				openMenu_B();
				
				$top.animate({height: $topHeight['class-' + $classWidth]}, 'slow', function(){
					selectMenu_A($id);
					toggleShowButtonTop($tab);
				});
				
				$tab.css({'display' : 'block'}).animate({opacity: 1}, 'slow');
			} 
			else if($id != $openTabId) {
				selectMenu_A($id);
				toggleShowButtonTop($tab)
				
				$content.children($openTabId).animate({opacity: 0}, 'fast', function(){
					$(this).css({'display' : 'none'});
					$tab.css({'display' : 'block'}).animate({opacity: 1}, 'slow');
				});
			}
			else {
				$flag = false;
				closeTab();
				return true;
			}
			
			if($flag) {
				$openTabId = $id;

				contentHeight($tab.innerHeight());
			}
		}
		
	}
	
	function toggleShowButtonTop($tab) {
		if(($top.innerHeight() + $tab.innerHeight()) < $(window).height() + parseInt($heightWindow * 20 / 100)) {
			$tab.find('.button-top').css('display', 'none');
		}
		else {
			$tab.find('.button-top').css('display', 'block');
		}
	}
	
	function openMenu_A() {	
		$menuA.addClass('open');
			
		animateCssBottom($menuA, $defaultBottom['class-1']['open']['menu']);
		if($activeMenu == 'nav-a') {
			animateCssBottom($player, $defaultBottom['class-1']['open']['player']);
			animateCssBottom($subscribe, $defaultBottom['class-1']['open']['subscribe']);	
		}
	}
	
	function closeMenu_A() {
		animateCssBottom($menuA, $defaultBottom['class-1']['close']['menu']);
		animateCssBottom($player, $defaultBottom['class-1']['close']['player']);
		animateCssBottom($subscribe, $defaultBottom['class-1']['close']['subscribe']);
					
		$menuA.removeClass('open');
	}
	
	function selectMenu_A($id) {
		$menuA.find('a').removeClass('active');

		$menuA.find('a[href=' + $id + ']').addClass('active');
	}
	
	function closeMenu_B() {
		$menuB.removeClass('open');
		$menuB.slideUp('slow');	
	}
	
	function openMenu_B() {
		showToggleSubscribe('close');
		$menuB.addClass('open');
		$menuB.slideDown('slow');
	}
	
	function contentHeight($height) {
		var $h = 72;
		var $fh = $footer.height();
		
		$contentHeight = $height;
			
			if(($contentHeight + $topHeight['class-' + $classWidth]) < $heightWindow) {
				switch($classWidth) {
					case 3:
					case 4:
					case 5:
						$fh = 0;
						$h = 0;
						break;
				}
				
				$contentHeight = $heightWindow - $topHeight['class-' + $classWidth] - $fh;
				$content.children($openTabId).children('article').css({'height' : ($contentHeight - 90 - $h)});
			}
			
			$content.animate({height: $contentHeight}, 'slow');	
	}
	
	function closeTab(){
		$content.children($openTabId).animate({opacity: 0}, 'fast', function(){

				$(this).css({'display' : 'none'});			
				$openTabId = null;
				
				$menuA.find('a').removeClass('active');
				
				var $height = $heightWindow - $footer.height();
				if($classWidth >= 3) {
					$height = $heightWindow - 1;
				}		
							
				$top.animate({height : $height }, 'slow', function(){
					if($menuA.hasClass('open') && $activeMenu == 'nav-a') {
						closeMenu_A();					
					}
					
					$content.animate({height: 0}, 'slow');
				});

		});	
	}
	/*--- END declaration functions ------------------------------------------------------*/			
})