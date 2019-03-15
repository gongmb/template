// JavaScript Document
$(document).ready(function(){
	//var $arrayWH = null;
	var $player = $('#player');
	var $timeLine = $('#preloader div');
	var $slider = $('#fullscreen-slider');
	var $speedAnimate = 900;
	var $delay = $sliderDelay;
	var $count = $slider.find('a').length;
	var $index = 0;
	var $frame = 0;
	var $sliderLoad = false;
	var $sliderPause = false;
	var $preloader = $('<div class="slider-preloader"><span></span></div>').css('opacity', 0.7);
	
	var $windowWidth = $(window).width();
	var $windowHeight = $(window).height();
	
	$player.find('div').css('display', 'none');
	$preloader.appendTo($player);
	
	$slider.find('a').each(function(){
		var $src = $(this).attr('href');		
			
		 jQuery("<img>").attr("src", $src).load(function(){
				$(this).css({'opacity' : 0, 'display' : 'block'}).appendTo($slider);
				resizeImage($(this));
				
				if($index == 0) {
					$timeLine.css('width', '0');
					$(this).css('display', 'block').animate({opacity : 1}, $speedAnimate);
				}
				
				if($index == ($count - 1)) {
					$preloader.remove();
					$player.find('div').css('display', 'block');
					$sliderLoad = true;
					sliderPlay();	
				}
				
				$index ++;				
			});
	})		
	
	$player.find('a.next').bind('click', function(event){
		sliderNext();
		
		event.preventDefault();																						
	});
	
	$player.find('a.prev').bind('click', function(event){
		sliderPrev();
		
		event.preventDefault();																						
	});
	
	$player.find('a.play-and-pause').bind('click', function(event){
		if($sliderPause == false) {
			$sliderPause = true;
			$(this).removeClass('pause').addClass('play');
			sliderStop();
		}
		else {
			$sliderPause = false;
			$(this).removeClass('play').addClass('pause');
			sliderPlay(true);
		}
		
		event.preventDefault();
	});
	
	function sliderPrev() {
		sliderStop();
		
		hideFrame();
		
		choicePrevFrame();
		
		showFrame();
	}
	
	function sliderNext() {
		sliderStop();
		
		hideFrame();
		
		choiceNextFrame();
		
		showFrame();
	}
	
	function sliderStop() {
		$timeLine.stop(true, false);
	}
	
	function choiceNextFrame() {
		if($frame < ($count - 1)) {
			$frame ++;
		}
		else {
			$frame = 0;
		}	
				
		return $frame;
	}	
	
	function choicePrevFrame() {
		if($frame > 0) {
			$frame --;
		}
		else {
			$frame = $count - 1;
		}	
				
		return $frame;
	}
		
	function sliderPlay($pause) {		
		if($count > 1) {
			var $time = $delay;
			if($pause == true) {
				$time = parseInt($delay * (100 - (parseInt($timeLine.css('width')) * 100 / parseInt($timeLine.parent().width()) )) / 100);
			}
			
			$timeLine.animate({width : '100%'}, $time, function(){
				//hide current frame
				hideFrame();
				
				choiceNextFrame();
				
				//show next frame
				showFrame();
			})			
		}
	}
	
	function hideFrame() {
		$slider.find('img').eq($frame).animate({opacity : 0 }, $speedAnimate);	
	}
	
	function showFrame() {
		$slider.find('img').eq($frame).animate({opacity : 1 }, $speedAnimate, function(){
			if($sliderPause == false)	{																																					 
				$timeLine.css('width', 0);
				sliderPlay();
			}
		});	
	}
	
	function resizeImage($jq_obj) {						
		var $kw = parseFloat($windowWidth / $jq_obj.width());
		var $kh = parseFloat($windowHeight / $jq_obj.height());
		
		var $k = $kw;
		if($kh > $kw) {$k = $kh;}
		
		var $w = parseInt($jq_obj.width() * $k);
		var $h = parseInt($jq_obj.height() * $k);
		
		if($w < $windowWidth) {$w = $windowWidth;}
		if($h < $windowHeight) {$h = $windowHeight;}
		
		$jq_obj.css({'width' : $w, 'margin-left' : 0});
		$jq_obj.css({'height' : $h, 'margin-top' : 0});	
		
		if($w > $windowWidth) {
			$kw = -Math.ceil($w - $windowWidth)/2 + 1;			
			if(($kw + $w) < $windowWidth) {$kw = 0;}
			$jq_obj.css('margin-left', $kw);
		}
		
		if($h > $windowHeight) {
			$kh = -Math.ceil($h - $windowHeight)/2 + 1;
			if(($kh + $h) < $windowHeight) {$kh = 0;}
			$jq_obj.css('margin-top', $kh);
		}
	}
	
	function resizeAll(){
		$slider.find('img').each(function(){
			resizeImage($(this));
		})
	}
	
	$(window).resize(function(){
		$windowWidth = $(window).width();
		$windowHeight = $(window).height();
	
		resizeAll();
	})
})