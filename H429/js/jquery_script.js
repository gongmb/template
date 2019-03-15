// JavaScript Document

$(document).ready(function() {
	
  $(function(){
    new FastClick(document.body);
   })
   
	
/*选菜*/
   $.setheight=(function(){
	 var gao=$(window).height()-96;
    $(".caidan_left").css("height",gao);
     
	});
	
   $.setheight();
   
   $(window).resize(function(e) {
    $.setheight();
   });

  $("#lm,.zhezhao").tap(function(){
	  
	  $(".submenu").toggle();
	  $(".zhezhao").toggle();
	  
	})
	
 $(".caidan_right li img").tap(function(){
	 
	 $(".tc_box").show();
	 
	 })
$("#closebtn").tap(function(){
	$(".tc_box").hide();
	
	})



/*banner*/
  $.banner=(function(){  
	
	var active=0,
	as=document.getElementById('pagenav').getElementsByTagName('a');
		
	for(var i=0;i<as.length;i++){
		(function(){
			var j=i;
			as[i].onclick=function(){
				t2.slide(j);
				return false;
			}
		})();
	}
		
	var t2=new TouchSlider({id:'slider', speed:600, timeout:6000, before:function(index){
			as[active].className='';
			active=index;
			as[active].className='active';
	      }
	  });
		  
  });

  $.banner();
 
  

	
	
});
