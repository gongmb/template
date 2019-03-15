$(document).ready(function(){
$("#first").flexslider({selector:"#showList > li",animation:"slide",slideshow:false,itemWidth:100,itemMargin:6,maxItems:12,minItems:1,start:function(){$("html, body").scroll()},after:function(){$("html, body").scroll()}});

$("#showWall").flexslider({selector:"#showList2 > li",namespace:"flex1-",animation:"slide",slideshow:true,controlNav:false,itemWidth:110,itemMargin:15,maxItems:18,minItems:1,start:function(){$("html, body").scroll()},after:function(){$("html, body").scroll()}});

$("#showWall2").flexslider({selector:"#showList3 > li",namespace:"flex1-",animation:"slide",slideshow:true,controlNav:false,itemWidth:82,itemMargin:15,maxItems:18,minItems:1,start:function(){$("html, body").scroll()},after:function(){$("html, body").scroll()}});

$("#showWall3").flexslider({selector:"#showList4 > li",namespace:"flex1-",animation:"slide",slideshow:true,controlNav:false,itemWidth:320,itemMargin:20,maxItems:18,minItems:1,start:function(){$("html, body").scroll()},after:function(){$("html, body").scroll()}});

$("#showWall4").flexslider({selector:"#showList5 > li",namespace:"flex1-",animation:"slide",slideshow:true,controlNav:false,itemWidth:320,itemMargin:20,maxItems:18,minItems:1,start:function(){$("html, body").scroll()},after:function(){$("html, body").scroll()}});

$("#showWall5").flexslider({selector:"#showList6 > li",namespace:"flex1-",animation:"slide",slideshow:true,controlNav:false,itemWidth:480,itemMargin:20,maxItems:18,minItems:1,start:function(){$("html, body").scroll()},after:function(){$("html, body").scroll()}});

$("#bannerIn").carouFredSel({next:"#banner_next",prev:"#banner_prev",circular:true,infinite:true,items:1,auto:true});

$("#banner").touchwipe({wipeLeft:function(){$("#banner_next").trigger("click")},wipeRight:function(){$("#banner_prev").trigger("click")},min_move_x:20,preventDefaultEvents:true});

$("#a1").click(function(){popup()});

$("#a3").click(function(){popup3()});

$("#moreBoxClose").click(function(){popup3_1()});

$("#firstA").click(function(){box1()});

$("#secondA").click(function(){box2()});

$("#secondA").one("click",function(){box2Event()});

$("#thirdA").click(function(){box3()})});function popup(){if($("#searchBox").is(":hidden")){$("#a1").addClass("a1_on");$("#popup_overlay").show();

$("#searchBox").show();

$("#moreBox").hide();$("#popup_overlay2").hide()}else{if($("#searchBox").is(":visible")){$("#a1").removeClass("a1_on");$("#popup_overlay").hide();

$("#searchBox").hide()}}}function popup3(){if($("#moreBox").is(":hidden")){$("#a3").addClass("a3_on");

$("#popup_overlay2").show();$("#moreBox").show();$("#searchBox").hide();

$("#popup_overlay").hide()}else{if($("#moreBox").is(":visible")){$("#a3").removeClass("a3_on");

$("#popup_overlay2").hide();$("#moreBox").hide()}}}function popup3_1(){if($("#moreBox").is(":visible")){$("#a3").removeClass("a3_on");

$("#popup_overlay2").hide();$("#moreBox").hide()}}function box1(){$("#firstA").addClass("select");

$("#first").show();$("#secondA").removeClass("select");

$("#second").hide();$("#thirdA").removeClass("select");

$("#third").hide()}function box2(){$("#firstA").removeClass("select");

$("#first").hide();

$("#secondA").addClass("select");

$("#second").show();$("#thirdA").removeClass("select");

$("#third").hide()}function box2Event(){$("#second").flexslider({selector:"#showList4 > li",animation:"slide",slideshow:false,itemWidth:320,maxItems:4,minItems:1,start:function(){$("html, body").scroll()},after:function(){$("html, body").scroll()}})}function box3(){$("#firstA").removeClass("select");

$("#first").hide();$("#secondA").removeClass("select");

$("#second").hide();$("#thirdA").addClass("select");$("#third").show()};