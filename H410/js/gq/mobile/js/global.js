/**
 * jQuery touchwipe Plugin
 */
 
(function($) { 
   $.fn.touchwipe = function(settings) {
     var config = {
            min_move_x: 50,
            min_move_y: 20,
            wipeLeft: function() { },
            wipeRight: function() { },
            wipeUp: function() { },
            wipeDown: function() { },
            preventDefaultEvents: false
     };
     
     if (settings) $.extend(config, settings);
 
     this.each(function() {
         var startX;
         var startY;
         var isMoving = false;
         var directionLocked = null;

         function cancelTouch() {
             this.removeEventListener('touchmove', onTouchMove);
             startX = null;
             isMoving = false;
             directionLocked = false;
         }  
         
         function onTouchMove(e) {
             if(config.preventDefaultEvents) {
                 e.preventDefault();
             }
             if(isMoving) {
                 var x = e.changedTouches ? e.changedTouches[0].clientX: e.clientX;
                 var y = e.changedTouches ? e.changedTouches[0].clientY: e.clientY;
                 var dx = startX - x;
                 var dy = startY - y;
                 
                var absDistX = Math.abs(dx);
                var absDistY = Math.abs(dy);

                if (directionLocked === "y") {
                    return
                } else {
                    if (directionLocked === "x") {
                        e.preventDefault()
                    } else {
                        absDistX = Math.abs(dx);
                        absDistY = Math.abs(dy);
                        if (absDistX < 4) {
                            return
                        }
                        if (absDistY > absDistX ) {
                            dx = 0;
                            directionLocked = "y";
                            return
                        } else {
                            e.preventDefault();
                            directionLocked = "x"
                        }
                    }
                }

                if(absDistX >= config.min_move_x) {
                    cancelTouch();
                    if(dx > 0) {
                        config.wipeLeft();
                    }
                    else {
                        config.wipeRight();
                    }
                 }
             }
         }
         
         function onTouchStart(e)
         {
             if (e.touches.length == 1) {
                 startX = e.changedTouches ? e.changedTouches[0].clientX: e.clientX;
                 startY = e.changedTouches ? e.changedTouches[0].clientY: e.clientY;
                 isMoving = true;
                 directionLocked = false;
                 this.addEventListener('touchmove', onTouchMove, false);
             }
         }       
         if ('ontouchstart' in document.documentElement) {
             this.addEventListener('touchstart', onTouchStart, false);
         }
     });
 
     return this;
   };
   
 })(Zepto);
 
var isIphoneSafari = /iPhone/ig.test(navigator.userAgent) && /Safari/ig.test(navigator.userAgent) && !/QQBrowser/ig.test(navigator.userAgent);
/*ga统计*/
var _gaq = _gaq || [];
function _trackPageview(url){
    _gaq.push(['gqTracker._trackPageview', url.split("com.cn")[1]]);
}
function trackPageview(pindex,name){
    var baseUrl = window.location.href;
    window.location.href = (baseUrl.split('#')[0] + '#'+ name +'=' + pindex);
    _trackPageview(window.location.href);
}
/*分享*/
function share()
{
    var url = window.location.href, shareBtn = $("#sina-share");
    var weiboUrl = "../service.weibo.com/share/share.php@appkey=3335939300&";
    weiboUrl += "&title=" + encodeURIComponent(shareBtn.attr("data-title"));
    weiboUrl += "&pic=" + encodeURIComponent(shareBtn.attr("data-pic"));
    weiboUrl += "&url=" + encodeURIComponent(window.location.href);
    window.open(weiboUrl);
}
/*设置cookie*/
function setCookie(name, value, expires, path, domain, secure){
    document.cookie= name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires.toGMTString() : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
}

/*添加主屏幕*/
var  AddIphoneFav = {
    init: function(){
        var userAgent = navigator.userAgent, self = this;
        if( !isIphoneSafari ){
            return ;
        }

        var isVisited = localStorage.getItem('isVisited');
        self.tips = $('#iphone-fav-tips');
        self.closeBtn = $("#iphone-fav-tips-close");

        if( !isVisited ){
            self.tips.show();
            localStorage.setItem('isVisited', "true");
        }

        self.closeBtn.click(function(){
            self.tips.hide();
        });
    }       
}

/*点击模块链接*/
function bindDataUrl() {

    $("[data-url]").off('click');
    $("[data-url]").each(function(i,e){
        var thisElement = $(e);
        thisElement.on('click',function(){
            if($(this).attr('data-url')=='none'){
               return false;
            }

            var classname = thisElement.attr('after-class');

            if(!classname){
                classname='on';
            }
            thisElement.find('.bgG').each(function(index,e){
                $(this).removeClass('bgG').addClass('bgQ');
            });
            if(thisElement.hasClass('bgG')){
                thisElement.removeClass('bgG');
            }
            thisElement.addClass(classname);

            setTimeout(function(){
                window.location.href = thisElement.attr("data-url");
                thisElement.removeClass(classname);
                thisElement.find('.bgQ').each(function(index,e){
                    $(this).removeClass('bgQ').addClass('bgG');
                })
            },300);
        })
    });
}

(function($){
    //iphone app链接处理
    function iphoneAppFit(){
        if(isIphoneSafari){
            var links=document.getElementsByTagName("a");
            for(var i=0;i<links.length;i++) {
                links[i].onclick=function() {
                    window.location=this.getAttribute("href");
                    return false
                }
            }   
        }   
    }
    window.iphoneAppFit = iphoneAppFit;
    iphoneAppFit();
});

$(document).ready(function(){
    /*隐藏iphone默认地址栏*/
    addEventListener('load', function() {
        setTimeout(function() {
          window.scrollTo(0, 1);
        }, 100);
    });
	/*nav*/
    var getTop = 0; /*记录上一个top值*/
    $(window).scroll(function(){
        if(document.body.scrollTop < getTop)
        { 
            $('header').css({"position":"fixed", "-webkit-animation" : "fadeInDown 0.5s 0s ease both"});
            $('.navList').css('height',0);
        }
        else if(document.body.scrollTop > getTop)
        {
            $('header').css({"position":"relative"});
            $('.navList').css('height',0);
        }
        getTop=document.body.scrollTop;
    });

    $('.navMenu').click(function(){
        var isOpen = $('.navList').height();
        if(isOpen)
        {
            $('.navList').css('height',0);
        }
        else{
            $('.navList').css('height','auto');
            var height = $('.navList').height();
            $('.navList').css('height',height);
        }
    });

    /*data-url*/
    bindDataUrl();
	
    /*返回顶部*/
	$('#gotop').click(function(){
		//window.scroll(0,0);
        var valTop=document.body.scrollTop;
        function scroll(){ 
            valTop = valTop-30;
            if(valTop>=0){
                document.body.scrollTop = valTop;
                setTimeout(scroll,1);
            }else{
                document.body.scrollTop = 0;
            }
        }
        scroll();
    });
    
    /*跳转*/
    $(".goto-www").click(function(){
       setCookie("visitWWW", "visited", "", "default.htm", "gq.com.cn");
    });
});