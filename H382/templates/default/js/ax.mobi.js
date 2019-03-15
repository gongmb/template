/**
* jqMobi is a query selector class for HTML5 mobile apps on a WebkitBrowser.
* Since most mobile devices (Android, iOS, webOS) use a WebKit browser, you only need to target one browser.
* We are able to increase the speed greatly by removing support for legacy desktop browsers and taking advantage of browser features, like native JSON parsing and querySelectorAll


* MIT License
* @author AppMobi
* @api private
*/

/****************
*公用函数
****************/

//新窗口打开
function newWinOpen(jobUrl) {
    window.open(jobUrl);
}
//读取表单
function getFormQueryString(frmID) {
    var frmID = document.getElementById(frmID);
    var i, queryString = "", and = "";
    var item;
    var itemValue;
    var form_data = [];
    for (i = 0; i < frmID.length; i++) {
        item = frmID[i];
        if (item.name != '') {
            if (item.type == 'select-one') {
                itemValue = item.options[item.selectedIndex].value;
            }
            else if (item.type == 'checkbox' || item.type == 'radio') {
                if (item.checked == false) {
                    continue;
                }
                itemValue = item.value;
            }
            else if (item.type == 'button' || item.type == 'submit' || item.type == 'reset' || item.type == 'image') {
                continue;
            }
            else {
                itemValue = item.value;
            }
            //itemValue = escape(itemValue);
            queryString += and + item.name + ':' + '"' + itemValue + '"';
            and = ",";
        }
    }
    queryString = "[{ " + queryString + " }]"
    //alert(queryString);
    form_data = eval(queryString);
    return form_data[0];

}


/****************
*功能插件
****************/
//页面滑动
var swipeView = function () {
    var ajaxLoadPage = function (pageId, title, url, swipe) {
        if (pageId == '')
            return;
        var thisLoad = $("#" + pageId);
        if (thisLoad.length > 0) {
            $.ui.loadContent(pageId, false, swipe, 'slide')
        } else {
            $.ajax({
                beforeSend: function () { $.ui.showMask() },
                url: url,
                success: function (data) {
                    $.ui.addContentDiv(pageId, data, title);
                    $.ui.hideMask();
                    $.ui.loadContent(pageId, false, swipe, 'slide')

                }
            });
        };
    };
    window.setTimeout(function () {

        $("#" + $.ui.activeDiv.id).swipePrevNext({
            vthreshold: 100,
            hthreshold: 80,
            callBack: function (dir) {
                var arr = eval($("#" + $.ui.activeDiv.id + " .pvernextarr").text());
                if (dir.left & dir.up == false & dir.down == false) {
                    ajaxLoadPage(arr.next.id, arr.next.title, arr.next.url, false);
                }
                else if (dir.right & dir.up == false & dir.down == false) {
                    ajaxLoadPage(arr.pver.id, arr.pver.title, arr.pver.url, true);
                };
            }
        });
    }, 1000)
};

//详细页多图
var piclistpop = function (url) {
    var carousel;
    function piclist_carousel() {
        carousel = $("#piclist_content").carousel({
            pagingDiv: "piclist_dots",
            pagingCssName: "piclist_paging",
            pagingCssNameSelected: "piclist_paging_selected",
            preventDefaults: false
        });
    }
    piclist_carousel()
};




//评论信息提交

//AJAX载入(添加)
var ajaxApp = function (box, url) {
    $.ajax({
        beforeSend: function () { },
        type: "get",
        url: url,
        success: function (data) {
            $(box).append(data);
        }
    })
};

//列表加载更多
var applist = function (url) {
    $.ajax({
        beforeSend: function () { $.ui.showMask(); },
        dataType: "text",
        url: url,
        success: function (data) {
            $("#" + $.ui.activeDiv.id + " .appList").append($(data).find(".appList>*"));
            $("#" + $.ui.activeDiv.id + " .appMore").html("").append($(data).find(".appMore>*"));
            $.ui.hideMask();
        }
    })
};

//显示分类
function showNavSortbar(el) {
    var $el = $("#" + $.ui.activeDiv.id + " .sortbar")
    if ($el.length > 0) {
        $el.toggle();
    } else {
        var $that = $("#" + $.ui.activeDiv.id), arr = eval($("#" + $.ui.activeDiv.id + " .pvernextarr").text());
        $.ajax({
            beforeSend: function () { $.ui.showMask() },
            url: arr.this.sort,
            success: function (data) {
                $that.append(data);
                $.ui.hideMask();
            }
        });
    };
};

//加载详细信息参数与内容
var viewAjax = function (el, url) {
    var $that = $("#" + $.ui.activeDiv.id + " .remark"), btn = $(el);
    btn.siblings().removeClass("on");
    btn.addClass("on");
    $.ajax({
        beforeSend: function () { $.ui.showMask() },
        dataType: "html",
        url: url,
        cache: false,
        success: function (data) {
            $that.html(data);
            $.ui.hideMask()
        }
    });
};

/*TAB列表*/
function tabList(el) {
    var btn = $(el + " .tabButtons>*"), con = $(el + " .tabContent > *");
    // $(document).delegate('a', 'click',
    btn.bind('click', function () {
        var that = $(this), index = $(this).index();
        that.addClass("on").siblings().removeClass("on");
        con.eq(index).show().siblings().hide();

    });
};


/*列表属性显示*/
var attributeItems = function (obj, menuid, itemid) {
    if (obj.className != "on") {
        $("#" + $.ui.activeDiv.id + " .list li>i").removeClass("on");
        obj.className = "on";
    }
    else {
        obj.className = "";
    }
};





//评论信息提交
var commentsFormSubmit = function (formId, checkUrl) {
    var form_data = [getFormQueryString(formId)];
    $.post(checkUrl, form_data[0],
        function (data) {
            //var queryString = "[{ " + data + " }]"
            var arr = eval("[{ " + data + " }]");
            if (arr[0][1]) {
                alert(arr[0][1]);
            } else {
                //alert(arr[0][0]);
                //提交内容为空时,出错信息没有正确返回
                alert(data);
            };
        })
};
//我喜欢
var shareLike = function (obj, menuid, itemid, text) {
    if (obj.className != "on") {
        obj.className = "share on";
        form_data = eval('[{chk:"yes",viewurlpath:"",menuid:"' + menuid + '",itemid:"' + itemid + '",username:"本站网友",commentstopic:"本站网友",commentsinfos:"' + text + '"}]');
        $.post('api_plus/comments_check.asp', form_data[0],
            function (data) {
                var arr = eval("[{ " + data + " }]");
                if (arr[0][1]) {

                } else {
                    //alert(arr[0][0]);
                    //提交内容为空时,出错信息没有正确返回
                    alert(data);
                };
            });
    }

};
//留言信息提交
var gbookFormSubmit = function (formId, checkUrl) {
    var form_data = [getFormQueryString(formId)];
    $.post(checkUrl, form_data[0],
        function (data) {
            var queryString = "[{ " + data + " }]"
            arr = eval(queryString);
            if (arr[0][1]) {
                alert(arr[0][1]);
            } else {
                alert(arr[0][0]);
            };
        })
};
//调查信息提交
var surveyFormSubmit = function (formId, checkUrl) {
    var form_data = [getFormQueryString(formId)];
    $.post(checkUrl, form_data[0],
        function (data) {
            var queryString = "[{ " + data + " }]"
            arr = eval(queryString);
            if (arr[0][1]) {
                alert(arr[0][1]);
            } else {
                if (arr[0][0]) {
                    alert(arr[0][0]);
                } else {
                    alert("您已经投票过了!");
                };

            };
        })
};








/****************
*页面初始化函数
****************/

//浏览器标识为空
//if (!$.os.webkit ? "Webkit" : $.os.fennec ? "Moz" : $.os.ie ? "ms" : $.os.opera ? "O" : "") {





if ($.os.webkit ? false : true && $.os.fennec ? false : true && $.os.ie ? false : true && $.os.opera ? false : true) {
    $.os.webkit = true;
    $.feat.cssPrefix = $.os.webkit ? "Webkit" : "";
}


//非触摸平台
if (!((window.DocumentTouch && document instanceof DocumentTouch) || 'ontouchstart' in window)) {
    var script = document.createElement("script");

    script.src = "templates/default/js/plugins/jq.desktopBrowsers.js";
    var tag = $("head").append(script);
    var ie9 = navigator.userAgent.match(/MSIE 9.0/i) ? true : false;
    if (ie9) {
        $.os.ie = true;
        $.os.desktop = true;
        $.feat.nativeTouchScroll = true;
    }
}
var oldElem = "default";
function setActiveStyleSheet(title) {
    var a = document.getElementsByTagName("link");
    var currElem;

    if (title == oldElem.getAttribute("title") || oldElem == "default")
        return;
    for (i = 0; i < a.length; i++) {

        if (a[i].getAttribute("title") == title) {
            currElem = a[i];
        }
        else if (!a[i].getAttribute("disabled") && a[i].getAttribute("title"))
            oldElem = a[i];
    }

    currElem.removeAttribute("disabled");
    jq.ui.showMask();
    window.setTimeout(function () {
        jq.ui.hideMask();
        oldElem.setAttribute("disabled", "true");
    }, 500);
}
$(document).ready(function () {
    oldElem = document.getElementsByTagName("link")[0];

});










/*测试代码*/



/* 点击显示/隐藏*/
function showHide(obj, objToHide) {
    var el = $("#" + objToHide)[0];

    if (obj.className == "expanded") {
        obj.className = "collapsed";
    }
    else {
        obj.className = "expanded";
    }
    $(el).toggle();

}





