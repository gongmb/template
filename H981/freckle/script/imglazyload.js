var scrollLoad = (function (options)
{
    var defaults = (arguments.length == 0) ? {
        src : 'jk-Src', time : 50, offsetLoad : 200
    }
     : {
        src : options.src || 'jk-Src', time : options.time || 50
    };
    var camelize = function (s)
    {
        return s.replace(/-(\w)/g, function (strMatch, p1)
        {
            return p1.toUpperCase();
        });
    };
    this.getStyle = function (element, property)
    {
        if (arguments.length != 2) {
            return false;
        }
        var value = element.style[camelize(property)];
        if (!value)
        {
            if (document.defaultView && document.defaultView.getComputedStyle)
            {
                var css = document.defaultView.getComputedStyle(element, null);
                value = css ? css.getPropertyValue(property) : null;
            }
            else if (element.currentStyle) {
                value = element.currentStyle[camelize(property)];
            }
        }
        return value == 'auto' ? '' : value;
    }; 



    var _init = function (){  
        var offsetPage = window.pageYOffset ? window.pageYOffset : window.document.documentElement.scrollTop;
        var offsetPageLoad = offsetPage-defaults.offsetLoad;//在页面以上offsetLoad像素加载
        var offsetWindow = offsetPage + Number(window.innerHeight ? window.innerHeight : document.documentElement.clientHeight);
        var offsetForLoad = offsetWindow +defaults.offsetLoad;//在页面以下offsetLoad像素加载
        var docImg = document.images;
        var _len = docImg.length;
        if (!_len) {
            return false;
        }
        for (var i = 0; i < _len; i++)
        {

            var attrSrc = docImg[i].getAttribute(defaults.src);
            if (!attrSrc) continue;
            o = docImg[i], tag = o.nodeName.toLowerCase();
            if (o)
            {
                var postPage = o.getBoundingClientRect().top + window.document.documentElement.scrollTop + window.document.body.scrollTop;
                var postWindow = postPage + Number(this.getStyle(o, 'height').replace('px', ''));
                if ((postPage > offsetPageLoad && postPage < offsetForLoad) || (postWindow > offsetPageLoad && postWindow < offsetForLoad)) {
                    if (tag === "img" && attrSrc !== null) {
                        o.setAttribute("src", attrSrc);
                        o.removeAttribute(defaults.src);
                    }
                    o = null;
                }
            }
        };

        window.onscroll = function ()
        {
            setTimeout(function ()
            {
                _init();
            },
            defaults.time);
        }
    };
    return _init();
});
scrollLoad();
