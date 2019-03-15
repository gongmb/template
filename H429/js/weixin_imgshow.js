// JavaScript Document

//弹出框中图片的切换
if (window.addEventListener) {
    window.addEventListener('load',
    function() {
        var imgs = document.getElementsByTagName('img'),
        imgsSrc = [],
        minWidth = 0;
        for (var i = 0,
        l = imgs.length; i < l; i++) {
            var img = imgs.item(i);
            var src = img.getAttribute('data-src') || img.getAttribute('src');
            src = "http//" + location.host + "/wcyhtml/" + src;

            if (src) {
                imgsSrc.push(src); (function(src) {
                    img.addEventListener('click',
                    function() {
                        reviewImage(src);
                    });
                })(src);
            }
        }

        function reviewImage(src) {

            //alert(src);
            if (typeof window.WeixinJSBridge != 'undefined') {

                //WeixinJSBridge.invoke('imagePreview',{ 'current':list[0], 'urls':list} );   
                WeixinJSBridge.invoke('imagePreview', {
                    'current': src,
                    'urls': imgsSrc,

                });
            }
        }
    },
    false);
}

