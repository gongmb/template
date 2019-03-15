$(document).ready(function(){
    /* 价格条箭头点击事件 */
    $(".priceBar i").toggle(function () {
        $(this).parent().parent().next().slideDown(50);
        $(this).css({backgroundPosition:"0 100%"});
    }, function () {
        $(this).parent().parent().next().slideUp(50);
        $(this).css({backgroundPosition:"0 0"});
    });

    var ua = navigator.userAgent.toLowerCase();

    var iphonePopupKey = "iphone_popups_count";
    if(ua.match(/iphone os/i) && ua.match(/safari/i)){
        var count = parseInt($.cookie(iphonePopupKey) || '3');

        if(count > 0){
            count -= 1;
            $.cookie(iphonePopupKey, count, {expires: 3600, path: 'default.htm'});
        }

        if(count > 0){
            /* 底部弹出框 */
            $(".popup").show(10, function(){
                var popupFO = setInterval(function () {
                    $(".popup").fadeOut();
                    clearInterval(popupFO)
                }, 5000);
            });
        }
    }

    $(".remainTime").each(function(index){
        var sRTFn = null;
        var mills = $(this).attr("data-time-remain");
        sRTFn = window.setInterval(function(){
            setRemainTime(mills--,sRTFn,index);
        }, 1000);
    });

    /* 倒计时 */
    function setRemainTime(sysSecond, sRTFn, index){
        if (sysSecond > 0) {
            sysSecond = sysSecond - 1;
            var second = Math.floor(sysSecond % 60);
            var minite = Math.floor((sysSecond / 60) % 60);
            var hour = Math.floor((sysSecond / 3600) % 24);
            var day = Math.floor((sysSecond / 3600) / 24);

            var timeStr = "";
            if(day > 0){
                timeStr += day + "天";
            }

            timeStr += (hour + "小时" + minite + "分" + second + "秒");

            $(".remainTime").eq(index).html(timeStr);
        }else{
            $(".remainTime").eq(index).html("已过期");
            window.clearInterval(sRTFn);
        };
    };

});