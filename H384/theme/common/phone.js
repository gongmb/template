$(document).ready(function(){
$(".top").click(function (){$("html,body").animate({ scrollTop:0},1000)});
$(".linkPf a").click(function () {$(this).parent().hide();});
var userAgentInfo = navigator.userAgent;if (userAgentInfo.indexOf("iPhone") > 0 && userAgentInfo.indexOf("Safari") > 0) {$(".linkPf").show();}else { $(".linkPf").hide();}
$(window).resize(function(){resizes();});
function resizes(){
bodyW=$(window).width()-10;
var imgh=bodyW*275/640;
$(".newsimg").css({"height":imgh});
}
resizes();

(function(){
var li=$(".newsimg .bigbox li");
var LIBOTTOM=$(".newsimg .smallbox li");
var n=li.length;
var i=0;	
if(n>1){
li.not(li.eq(0)).hide();		
li.eq(0).addClass("hover");
LIBOTTOM.eq(0).addClass("hover");
var workstabs=function(){
var tabs=function(m,i){
			 li.eq(m).fadeOut(800);
			 li.eq(i).fadeIn(800);
			 LIBOTTOM.removeClass("hover");
			 LIBOTTOM.eq(i).addClass("hover");
           };
 nextclick=function(){
	if(i==n-1){
	li.eq(i).removeClass("hover");
	li.eq(0).addClass("hover");
	m=i;
	i=0;
	tabs(m,i);
	}else{
		li.eq(i).removeClass("hover");
	    li.eq(i+1).addClass("hover");
		m=i;
	    i++;
	    tabs(m,i);
	}
		}
 
 LIBOTTOM.click(function(){m=i;i=LIBOTTOM.index($(this));tabs(m,i);});  	   			
};
autobase=window.setInterval(function(){nextclick()},3000);
LIBOTTOM.hover(function(){window.clearInterval(autobase)},function(){autobase=window.setInterval(function(){nextclick()},3000);});
workstabs();
}
})();



$(".DropDownMenu ins").click(function(){
	var cla=$(".DropDownMenu").attr("class");
	if(cla=="DropDownMenu"){
		$(".DropDownMenu").addClass("hover");
		var ulH=$(".DropDownMenu ul li").size()*26;
		$(".DropDownMenu ul").stop().animate({"height":ulH},500);
		var cla=$(".DropDownMenu").attr("class");
		if(cla=="DropDownMenu hover"){
		setTimeout("animatetop()",8000);
		}
		}else{
		animatetop();
		}
	
	});









});

function animatetop(){
	$(".DropDownMenu").removeClass("hover");
	$(".DropDownMenu ul").stop().animate({"height":0},500);	
	}
