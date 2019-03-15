//var basePath = "http//gamma.m.buy.qq.com";
//var whiteList = ["mwg.paipaioa.com"];
//var topHost = top.location.host;
// 濡傛灉褰撳墠鐨刪ost涓嶅湪鐧藉悕鍗曚腑
//if($.inArray(topHost, whiteList) == -1) {
//	if(top != self) {
//		top.location = self.location;
//	}
//}

function ajax(url,type,params,dataType, handler) {
	
    $.ajax( {
        url : url,
        data: params,
        type: type,
        timeout : 5000,
        dataType : dataType,
        cache : false,
        error : function(textStatus, errorThrown) {
    		showBubble("璇锋眰鍙戠敓閿欒,璇风◢鍚庨噸璇�");
        },
        complete: function() {
        	//closeBubble();
        },
        beforeSend : function() {
        	//openBubble("璇锋眰姝ｅ湪杩涜,璇风◢鍊�");
        },
        success : handler
    });
}


function checkIsNotEmpty(str)
{
    if(null ==str || Trim(str) == "" || Trim(str).lenght<=0){
        return false;
    }else{
        return true;
    }

}

/*

==================================================================

Trim(string):鍘婚櫎鍓嶅悗绌烘牸

==================================================================

*/

function Trim(str)
{
    return RTrim(LTrim(str));
}




/*

==================================================================

LTrim(string):鍘婚櫎宸﹁竟鐨勭┖鏍�

==================================================================

*/

function LTrim(str)
{
    var whitespace = new String(" \t\n\r");
    var s = new String(str);   
    if (whitespace.indexOf(s.charAt(0)) != -1)
    {
        var j=0, i = s.length;
        while (j < i && whitespace.indexOf(s.charAt(j)) != -1)
        {
            j++;
        }
        s = s.substring(j, i);
    }
    return s;
}

/*
==================================================================
RTrim(string):鍘婚櫎鍙宠竟鐨勭┖鏍�
==================================================================
*/

function RTrim(str)
{

    var whitespace = new String(" \t\n\r");

    var s = new String(str);

 

    if (whitespace.indexOf(s.charAt(s.length-1)) != -1)

    {

        var i = s.length - 1;

        while (i >= 0 && whitespace.indexOf(s.charAt(i)) != -1)

        {

            i--;

        }

        s = s.substring(0, i+1);

    }

    return s;

}

function getPriceStr(longPrice) {
	var total = parseFloat(longPrice);
	var totalF = division(total,100);
	return totalF.toFixed(2);
}

/* 绮剧‘闄ゆ硶 */
function division(arg1,arg2){   
    var t1=0,t2=0,r1,r2;   
    try{t1=arg1.toString().split(".")[1].length}catch(e){}   
    try{t2=arg2.toString().split(".")[1].length}catch(e){}   
    with(Math){   
        r1=Number(arg1.toString().replace(".",""));   
        r2=Number(arg2.toString().replace(".",""));    
        return (r1/r2)*pow(10,t2-t1);   
    }   
}

function showBubble(content,parent) {
	var element = $("#bb");
	var body = $(document.body);
	//濡傛灉鍏冪礌瀛樺湪锛岀洿鎺ヤ娇鐢ㄨ鍏冪礌
	if(element.length != 0) {
		element.html(content);
		element.show("fast").delay(1000).fadeOut("slow");
	} else {
		// 鍒涘缓涓€涓柊鍏冪礌
		var divNode=$('<div>' + content +'</div>');
	    divNode.attr('id','bb');        //缁欑埗div璁剧疆id
	    divNode.addClass('bubble');    //娣诲姞css鏍峰紡
	    var offset = body.offset();
	    var fontWidth = 14 * content.length /2;
	    divNode.css("left", offset.left + body.width()/2 - fontWidth);
	    divNode.css("top",$(parent).offset().top - 20);
		body.append(divNode);
		divNode.show(1000).delay(1000).fadeOut("slow");
	}
}

function getTimeDistance(ts){
	//鏍规嵁鏃堕棿宸绠楀墿浣欑殑鏃堕棿锛岃繑鍥瀃澶╋紝灏忔椂锛屽垎锛岀]
	  var timeLeft=[0,0,0,0];//缁撴瀯锛氬ぉ銆佸皬鏃躲€佸垎銆佺
	  timeLeft[0]=(ts>86400)?parseInt(ts/86400):0;
	  ts=ts - timeLeft[0] * 86400;
	  timeLeft[1]=(ts>3600)?parseInt(ts/3600):0;
	  ts=ts - timeLeft[1] * 3600;
	  timeLeft[2]=(ts>60)?parseInt(ts/60):0;
	  timeLeft[3]=ts - timeLeft[2] * 60;
	  return timeLeft;
}
//杩斿洖涓枃鐨勫勾鏈堟棩 鏃跺垎绉�
function getChineseDate(date) {
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var day = date.getDate();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();
	month = month < 10 ? "0"+month : month;
	day = day < 10 ? "0"+day : day;
	hour = hour < 10 ? "0"+hour : hour;
	minute = minute < 10 ? "0"+minute : minute;
	second = second < 10 ? "0"+second : second;
	return year+"骞�"+month+"鏈�"+day+"鏃� "+hour+":"+minute+":"+second;
}

function namespace(str) {
    var arr = str.split(',');
    for (var i = 0, len = arr.length; i < len; i++) {
        // 灏嗗懡鍚嶇┖闂村垏鎴怤閮ㄥ垎, 姣斿mini銆乧ommon绛�
        var arrJ = arr[i].split("."),
            parent = {};
        for (var j = 0, jLen = arrJ.length; j < jLen; j++) {
            var name = arrJ[j],
                child = parent[name];
            j === 0 ? eval('(typeof ' + name + ')==="undefined"?(' + name + '={}):"";parent=' + name) : (parent = parent[name] = (typeof child) === 'undefined' ? {} : child);
        };
    }
}

/**
 * 宸ㄦ棤闇歌疆鎾�
 */
$.fn.loopSlider = function(option) {
    function config(opt) {
        var setting = {
            // 榛樿鏄剧ず鐨勯『搴�
            initIndex: 1,
            // 鍔犲湪title鑺傜偣涓婄殑鏍峰紡
            className: "current",
            // 杞挱鏂瑰悜锛岄粯璁や负x杞存柟鍚戣疆鎾�
            direct: "x",
            // 涓婁竴寮犳寜閽�
            prevBtn: "",
            // 涓嬩竴寮犳寜閽�
            nextBtn: "",
            // 涓婁笅缈婚〉鎸夐挳绂佺敤鐨勬牱寮�
            btnDisable: "disable",
            // 鎸夐挳鎸変笅鐨勬牱寮�
            btnTouchClass: "",
            // 鑷姩杞挱
            auto: false,
            // 鑷姩杞挱鏃堕棿闂撮殧
            timeFlag: 4000,
            // 杞挱鏁堟灉鏃堕棿
            scrollTime: 350,
            // 杞挱鏁堟灉
            effect: "scroll",
            // 鍦ㄥ彧鏈変竴涓疆鎾厓绱犵殑鏃跺€欐槸鍚﹂殣钘忔粦鍔ㄦ寜閽�
            hideBtn: true,
            // 鏄惁寰幆杞挱
            cycle: true,
            // 杞挱鐨勫唴瀹瑰尯鐨勫鍣ㄨ矾寰�
            contentContainer: "",
            // 杞挱鐨勫唴瀹瑰尯鐨勮妭鐐�
            contentChildTag: "",
            // 鏍囬杞挱鍖哄煙鐨勫鍣ㄨ矾寰�
            titleContainer: "",
            // 鏍囬杞挱鍖哄煙鐨勮妭鐐�
            titleChildTag: "",
            // 杞挱鐨勫唴瀹瑰尯鐨勬暟缁�
            cont: [],
            // 杞挱鐨勬爣棰樺尯鐨勬暟缁�
            tabs: [],
            // 褰撳墠杞挱搴忓彿
            current: 0,
            // 瀹氭椂鍣�
            ptr: "",
            // 杞挱鍥炶皟鍑芥暟锛屾瘡娆¤疆鎾皟鐢紝鍙傛暟涓哄綋鍓嶈疆鎾殑搴忓彿
            callback: function () {
                return true;
            }
        }
        $.extend(setting, opt);
        return setting;
    }
    var boss = $(this);
    var nodeList = [];
    boss.each(function(index) {		
        nodeList[index] = {
            node : $(this),
            setting : config(option)
        }
       handleScroll(nodeList[index]);       
    });
  return {
		get : function(index) {
			  if(nodeList[index]) {
				return nodeList[index];
			  } else {
				return false;
			  }
		} 	
  };
    function handleScroll(obj) {
        var setting = obj.setting;
        var node = obj.node;		
        // 鍒濆鍖栧綋鍓嶈皟鐢ㄧ被鍨嬬殑鍑芥暟
        setting.currentMethod = function() {
            return true;
        }
        // 濡傛灉涓嶆槸绗竴涓厓绱犲厛杞挱
        if (setting.initIndex != 1) {
            setting.current = setting.initIndex - 1;
        }
        // 鑾峰彇杞挱鐨勮妭鐐瑰垪琛�
        var childList = node.find(setting.contentContainer + " " + setting.contentChildTag);
        // 鑾峰彇杞挱鏍囬鑺傜偣鍒楄〃
        var titleList = node.find(setting.titleContainer + " " + setting.titleChildTag);
        // 淇濆瓨鍐呭鍖烘瘡涓€涓疆鎾妭鐐�
        setting.cont = childList;
        // 淇濆瓨鏍囬鐨勮疆鎾妭鐐�
        setting.tabs = titleList;
        // 濡傛灉娌℃湁闇€瑕佽疆鎾殑鍐呭锛岀洿鎺ヨ繑鍥�
        if(setting.cont.length == 0) {
            return;
        }		
        var withtitle = setting.titleContainer && setting.tabs.length > 0;
        // 缁欏唴瀹瑰尯鍜屾爣棰樺尯璁剧疆index灞炴€�
        childList.each(function (index) {
            $(this).attr("index", index);
            // 璁剧疆浜唗itle锛屼絾鏄唴瀹逛笉瓒筹紝琛ュ叏
            if(withtitle && !setting.tabs[index]) {
            	var first = titleList.eq(0);
                var cloneNode = first.clone();
                first.parent().append(cloneNode);
                cloneNode.attr("index",index);               
            }
            titleList.eq(index).attr("index", index);
        });
        if(withtitle && setting.tabs.length != setting.cont.length) {
          titleList = node.find(setting.titleContainer + " " + setting.titleChildTag);
          setting.tabs = titleList;
        }        
        // 涓婁笅绠ご
        var nextBtn = node.find(setting.nextBtn);
        var prevBtn = node.find(setting.prevBtn);
        // 闀垮害
        var counts = childList.length;		
        // 杞挱瀹瑰櫒鐨勭埗鑺傜偣
        var childParent = childList.parent();
        var titleParent = titleList.parent();
        if (childList.length < setting.initIndex) {
            setting.current = 0;
        }
        // 鍒濆鍖�
        doInit();
        if (childList.length == 1) {
            return;
        }
        /**
         * 澶勭悊鏃犳晥鏋滅殑鍒囨崲
         */
        var doScrollNone = {
            process: function (i) {
                childList.eq(i).css("display", "block").siblings().css("display", "none"); 
                titleList.eq(i).addClass(setting.className).siblings().removeClass(setting.className);
                // 璁板綍褰撳墠鏄剧ず鐨勮妭鐐�
                setting.current = i;
                // 璋冪敤鍥炶皟鍑芥暟
                setting.callback(setting.current);
            },
            init: function () {
                setting.currentMethod = doScrollNone;
                bindEvent();
                // 鑷姩杞挱
                if (setting.auto) {
                    processAuto();
                }
                // 鍒濆鍖栫殑鏃跺€欎篃璋冪敤鍥炶皟鍑芥暟
                setting.callback(setting.current);
            }
        };
        var doScrollXY = {
            c_width: 0,
            c_height: 0,
            init: function () {
                // 杞挱鍏冪礌鐨勫搴�
                this.c_width = childList.width();
                // 杞挱鍏冪礌鐨勯珮搴�
                this.c_height = childList.height();
                // x杞存柟鍚戣疆鎾�
                if (setting.direct == "x") {
                    childParent.width(this.c_width * (childList.length > 1 ? counts + 1 : counts));
                    childParent.css("left", - this.c_width * (setting.current));
                } else {
                    childParent.height(this.c_height * (childList.length > 1 ? counts + 1 : counts));
                    childParent.css("top", - this.c_height * (setting.current));
                }
                titleList.eq(setting.current).addClass(setting.className).siblings().removeClass(setting.className);
                setting.currentMethod = doScrollXY;
                // 缁戝畾浜嬩欢
                bindEvent();
                // 鍒濆鍖栫殑鏃跺€欎篃璋冪敤鍥炶皟鍑芥暟
                setting.callback(setting.current);
                // 鑷姩杞挱
                if (setting.auto) {
                    processAuto();
                }
            },
            process: function (i, needFast) {
                setting.current = i;
                if (setting.direct == "x") {
                    // 鎵ц鏁堟灉鍔ㄧ敾
                    childParent.animate({
                        left: "-" + (this.c_width * i)
                    }, (needFast ? 50 : setting.scrollTime), function () {
                        if (setting.current == counts) {
                            doScrollXY.processMove("left", $(this));
                        }
                        if (setting.auto) {
                            processAuto();
                        }
                    });
                } else {
                    childParent.animate({
                        top: "-" + (this.c_height * i)
                    }, (needFast ? 50 : setting.scrollTime), function () {
                        if (setting.current == counts && setting.cycle) {
                            doScrollXY.processMove("top", $(this));
                        }
                        if (setting.auto) {
                            processAuto();
                        }
                    });
                }
                if (i == counts) {
                    i = 0;
                }
					if(i == 0 && !setting.cycle) {
						setting.prevBtn && prevBtn.addClass(setting.btnDisable);
					  } else {
						setting.prevBtn && prevBtn.removeClass(setting.btnDisable);
					  }
					  if(i == counts - 1 && !setting.cycle) {
						setting.nextBtn && nextBtn.addClass(setting.btnDisable);
					  } else {
						setting.nextBtn && nextBtn.removeClass(setting.btnDisable);
					  }
                // 璋冪敤鍥炶皟鍑芥暟
                setting.callback(setting.current);
                titleList.eq(i).addClass(setting.className).siblings().removeClass(setting.className);					
            },
            processMove: function (direct, node) {
                var childs = node.children();
                for (var i = 1; i < childs.length - 1; i++) {
                    var removeNode = childs.eq(i).remove();
                    node.append(removeNode);
                }
                var first = childs.eq(0).remove();
                node.append(first);
                node.css(direct, "0");
            }
        };
        switch (setting.effect) {
            case "none":
                doScrollNone.init();
                break;
            case "scroll":
                doScrollXY.init();
                break;
        }

        // 涓€浜涘垵濮嬪寲鎿嶄綔
        function doInit() {
            childParent.css("position","relative");
            if (!setting.cycle) {
                prevBtn.removeClass(setting.btnDisable);
                nextBtn.removeClass(setting.btnDisable);
                if (setting.current == 0) {
                    prevBtn.addClass(setting.btnDisable);
                }
                if (setting.current == counts - 1) {
                    nextBtn.addClass(setting.btnDisable);
                }
            }
            // 鍙湁涓€涓厓绱狅紝骞朵笖闇€瑕侀殣钘忔寜閽�
            if (childList.length <= 1 && setting.hideBtn) {
                prevBtn.hide();
                nextBtn.hide();
            }
            // 鍏嬮殕绗竴涓厓绱犲埌鏈€鍚�
            if (childList.length > 1 && setting.cycle) {
                var cloneNode = childList.eq(0).clone();
                cloneNode.attr("index", counts);
                cloneNode.appendTo(childParent);
            }
        }
        /**
         * 缁戝畾杞挱浜嬩欢
         */
        function bindEvent() {
            setting.nextBtn && nextBtn.bind("touchstart", function (event) {
                // 濡傛灉鎸夐挳宸茬粡琚鐢�
                if ($(this).hasClass(setting.btnDisable)) {
                    return;
                }
                var cur = setting.current;
                if (cur == counts) {
                    setting.current = 1;
                } else if (cur == counts - 1) {
                    // 杞挱鍒版渶鍚庝竴涓�
                    setting.current = counts;
                } else {
                    setting.current = cur + 1;
                }
                if (setting.ptr) {
                    clearInterval(setting.ptr);
                    setting.ptr = null;
                }
                $(this).addClass(setting.btnTouchClass);
                setting.currentMethod.process(setting.current);
					return false;
			});
            setting.prevBtn && prevBtn.bind("touchstart", function () {
                if ($(this).hasClass(setting.btnDisable)) {
                    return;
                }
                var cur = setting.current;
                setting.current = cur == 0 ? counts - 1 : cur - 1;
                if (setting.ptr) {
                    clearInterval(setting.ptr);
                    setting.ptr = null;
                }
                $(this).addClass(setting.btnTouchClass);
                setting.currentMethod.process(setting.current, cur == 0 ? true : false);
					return false;
			});
            setting.titleContainer && titleParent.bind("touchstart", function (e) {
                var element = $(e.target);
                // 寰楀埌鏍囬鑺傜偣
                while (element[0].tagName != titleList.get(0).tagName) {
                    element = element.parent();
                }
                if (setting.ptr) {
                    clearInterval(setting.ptr);
                    setting.ptr = null;
                }
                var index = parseInt(element.attr("index"), 10);
                setting.currentMethod.process(index);
					return false;
            });
            childParent[0].ontouchstart = handleTouchStart;
            // 瑙︽懜灞忓箷浜嬩欢
            function handleTouchStart(event) {
                var element = $(event.target);
                // 寰楀埌鏍囬鑺傜偣
                while (element[0].tagName != childList[0].tagName) {
                    element = element.parent();
                }
                if (event.changedTouches.length == 0) {
                    return;
                }
                var touch = event.changedTouches[0];
                var startX = touch.clientX;
                var startY = touch.clientY;
                var moveDirect = "";
                var currentPosition = setting.direct == "x" ? childParent.css("left") : childParent.css("top");
                if (setting.ptr) {
                    clearInterval(setting.ptr);
                    setting.ptr = null;
                }
                // 鎵嬫寚婊戝姩浜嬩欢
                childParent[0].ontouchmove = handleTouchMove;
                function handleTouchMove(moveEvent) {
                    var movetouch = moveEvent.changedTouches[0];
                    if (setting.direct == 'x') {
                        var moveX = movetouch.clientX;
                        var moveY = movetouch.clientY;
                        var x = moveX - startX;
                        var y = moveY - startY;
                        // 妯潗鏍囧拰绾靛潗鏍囩殑宸€艰秴杩�10涓儚绱狅紝鎵嶇粰婊戝姩
                        if(Math.abs(x) - Math.abs(y) > 10) {
                            // 闃绘榛樿鐨勪簨浠�
                            moveEvent.preventDefault();
                            childParent.css("left", parseFloat(currentPosition) + x);
                            moveDirect = x > 0 ? "sub" : "add";
                        } else {
                            return;
                        }
                    } else {
                        // Y杞存柟鍚戞粴鍔�
                        moveEvent.preventDefault();
                        var moveY = touch.pageY;
                        var y = moveY - startY;
                        childParent.css("top", parseFloat(currentPosition) + y);
                        moveDirect = y > 0 ? "sub" : "add";
                    }
                    childParent[0].ontouchend = handleTouchEnd;
                }
                //鎵嬫寚绂诲紑灞忓箷
                function handleTouchEnd() {
                    //鏍规嵁鎵嬫寚绉诲姩鐨勬柟鍚戯紝鍒ゆ柇涓嬩竴涓鏄剧ず鐨勮妭鐐瑰簭鍙�
                    var fast = false;
                    if (moveDirect == "add") {
                        if(setting.cycle) {
                          if (setting.current == counts) {
                              setting.current = 1;
                          } else {
                              setting.current = setting.current + 1;
                          }
                        } else {
                          if (setting.current != counts - 1) {
                              setting.current = setting.current + 1;
                          }	
                        }                        
                    } else {
                        if (setting.current == 0) {
                          setting.current = setting.cycle ? counts - 1 : 0;
                          fast = setting.cycle ?  true : false;
                        } else {
                            setting.current = setting.current - 1;
                        }
                    }
						if(setting.current > 0 && !setting.cycle) {
							setting.prevBtn && prevBtn.removeClass("setting.btnDisable");
						}
						if(setting.current < counts - 1 && !setting.cycle) {
							setting.nextBtn && nextBtn.removeClass("setting.btnDisable");
						}
                    // 璋冪敤瀵瑰簲鐨勫鐞嗗嚱鏁�
                    setting.currentMethod.process(setting.current, fast);
                    childParent[0].ontouchend = null;
                    childParent[0].ontouchmove = null;
                }
            }
        }

        /**
         * 鑷姩杞挱
         */
        function processAuto() {
            if (setting.ptr) {
                clearInterval(setting.ptr);
                setting.ptr = null;
            }
            // 璁剧疆杞挱瀹氭椂鍣�
            setting.ptr = setInterval(function () {
                if (setting.current == counts) {
                    setting.current = 1;
                } else if (setting.current == counts - 1) {
                    // 杞挱鍒版渶鍚庝竴涓�
                    setting.current = setting.cycle ? counts : counts - 1;
                  if(!setting.cycle && setting.ptr) {                    
                  	clearInterval(setting.ptr);
                    	setting.ptr = null;	
                  }                    
                } else {
                    setting.current = setting.current + 1;
                }
                var index = setting.current;
                if (index != 0) {
                    setting.prevBtn && prevBtn.removeClass(setting.btnDisable);
                } else if (!setting.cycle) {
                    setting.prevBtn && prevBtn.addClass(setting.btnDisable);
                }
                if (index != counts - 1) {
                    setting.nextBtn && nextBtn.removeClass(setting.btnDisable);
                } else if (!setting.cycle) {
                    setting.nextBtn && nextBtn.addClass(setting.btnDisable);
                }
                setting.currentMethod.process(setting.current);
            }, setting.timeFlag);
        }
        obj.setIndex = function(index) {
            if(index < 0) {
                index = 0;
            } else if(index >= counts) {
                index = counts - 1;
            }
            setting.currentMethod.process(index);
        }
    }
}

function checkQQNum(vals){
	var checkqq=/^[1-9]\d{4,14}$/;
	if(undefined!=vals && ''!=vals&& null!=vals){
		if(checkqq.test(vals)){		
			return true;
		}
	}
	return false;
}
function checkTelephone(vals){
	var checkphone=/^0?(13[0-9]|15[012356789]|18[0236789]|14[57])[0-9]{8}$/;
	if(undefined!=vals && ''!=vals&& null!=vals){
		if(checkphone.test(vals)){		
			return true;
		}
	}
	return false;
}

function showTip(content) {
    var element = $("#result-tip");
    element.css("position","absolute");
    $("#result-content").text(content);
    element.removeClass("comm-hide");
}


/**
 * 淇濆瓨鏈湴缂撳瓨淇℃伅
 * @param key       淇濆瓨鐨刱ey
 * @param value     闇€瑕佷繚瀛樼殑鍊�
 * @param isJson    鏄惁鏄痡son鏍煎紡鏁版嵁
 */
function saveStorage(key, value, isJson) {
    window.localStorage.setItem(key, isJson ? JSON.stringify(value) : value);
}
/**
 * 閫氳繃key鑾峰彇瀵瑰簲鐨勫€�
 * @param key
 * @return {*}
 */
function getStorage(key) {
    return window.localStorage.getItem(key);
}

/**
 * 鍒ゆ柇鏄惁鏀寔鏈湴缂撳瓨
 */
function isSupportStorage() {
    if(!window.localStorage) {
        return false;
    }
    return true;
}

/**
 * 婊氬姩鍔犺浇鍥剧墖
 */
function autoLoadImage() {
    var images_data = {
        // 褰撳墠鍙鍖哄煙鐨勯珮搴�
        viewHeight:$(window).height(),
        // 瀹氭椂鍣�
        ptr:"",
        // 鎵€鏈夊浘鐗�
        cache:[],
        // 鍥剧墖鏁伴噺
        num:0
    };
    init();
    if(images_data.ptr) {
        clearInterval(images_data.ptr);
    }
    function init() {
        $("img[init_src]").each(function(i) {
            var dom = $(this);
            images_data.cache.push({
                url:dom.attr("init_src"),
                obj:dom,
                top:dom.offset().top
            });
        });
        images_data.num = images_data.cache.length;
    }
    images_data.ptr = setInterval(doScroll, 100);
    function doScroll() {
        // 婊氬姩鏉＄殑楂樺害
        var scrollHeight = $(window).scrollTop();
        // 宸茬粡鍗疯捣鐨勯珮搴�+鍙鍖哄煙楂樺害锛屽嵆褰撳墠鏄剧ず鐨勫厓绱犵殑楂樺害
        var visibleHeight = images_data.viewHeight*1.5 + scrollHeight;
        $.each(images_data.cache,function(i,data) {
            var element = data.obj;
            var loaded = element.attr("loaded");
            // 鍥剧墖鍦ㄥ悗闈袱灞忚寖鍥村唴锛屽苟涓旀湭琚姞杞借繃
            if(visibleHeight > data.top && !loaded) {
                // 鍔犺浇鍥剧墖
                element.attr("src", data.url);
                element.attr("loaded",images_data.num);
                images_data.num--;
            }
        });
        // 娌℃湁鍥剧墖鍔犺浇锛屾竻闄ゅ畾鏃跺櫒
        if(images_data.num == 0) {
            clearInterval(images_data.ptr);
            images_data.ptr = null;
        }
    }
}

/**
 * 棣栭〉鍜岄閬撻〉婊戝姩骞垮憡
 */
$.fn.scrollImage = function (option) {
    var setting = {
        // 鏄剧ず鍑烘潵鐨勫浘鐗囨暟閲�
        showNum:3,
        // 婊戝姩鏁堟灉鐨勯€熷害
        speed:300,
        // 鍥剧墖闂寸殑闂撮殭
        gapWidth:0
    };
    if (option) {
        $.extend(setting, option);
    }
    var ulNode = $(this);
    ulNode.each(function () {
        var node = $(this);        
        doScrollImage(node);
    });
    function doScrollImage(node) {
        var childList = node.children();
        // 瀛愯妭鐐逛釜鏁�
        var counts = childList.length;
        // 鍗曚釜鍏冪礌鐨勫搴�
        var li_width = childList.width() + setting.gapWidth;
        var ulNodeWidth = li_width * counts;
        // 鍒濆鍖栬妭鐐圭殑鏍峰紡淇℃伅
        node.css({"width":ulNodeWidth, "left":0});
        node[0].ontouchstart = handleTouchStart;
        function handleTouchStart(e) {
            var touch = e.targetTouches[0];
            var startX = touch.pageX;
            var startY = touch.pageY;
            // 鎵嬫寚鏀句笅鏃剁殑left鍊�
            var currentPosition = node.css("left");
            node[0].ontouchmove = handleTouchMove;
            function handleTouchMove(moveEvent) {
                var moveTouch = moveEvent.targetTouches[0];
                var moveX = moveTouch.pageX;
                var moveY = moveTouch.pageY;
                var x = moveX - startX , y = moveY - startY;
                if (Math.abs(x) - Math.abs(y) > 10) {
                    // 闃绘榛樿鐨勪簨浠�
                    moveEvent.preventDefault();
                    node.css("left", parseInt(currentPosition, 10) + x);
                }
                // 鍒ゆ柇婊戝姩鏂瑰悜
                var direct = x > 0 ? "sub" : "add";
                node[0].ontouchend = handleTouchEnd;
                function handleTouchEnd() {
                    // 鎵嬫斁寮€鏃惰妭鐐圭殑left鍊�
                    var leftValue = parseInt(node.css("left"), 10);
                    if (leftValue > 0) {
                        // 鍙虫粦鍔ㄨ窛绂诲皬浜�0锛岃繑鍥炲埌0
                        node.animate({left:0}, setting.speed);
                    } else {
                        leftValue = Math.abs(leftValue);
                        var dif = ulNodeWidth - leftValue;
                        if (dif < li_width * setting.showNum) {
                            node.animate({left:-(ulNodeWidth - li_width * setting.showNum)}, setting.speed);
                        } else {
                            var all = leftValue + li_width * setting.showNum;
                            // 璁＄畻婊戣繃鐨勫浘鐗囩殑寮犳暟锛屼笉瓒充竴寮犵殑闇€瑕佽ˉ鍏ㄤ竴寮犵殑瀹藉害
                            if (all % li_width != 0) {
                                // 宸︽粦鍔ㄥ悜涓婂彇鏁达紝鍙虫粦鍔ㄥ悜涓嬪彇鏁�
                                var scrollCount = direct == "add" ? Math.ceil(all / li_width) : Math.floor(all / li_width);
                                node.animate({left:-(scrollCount - setting.showNum) * li_width}, setting.speed);
                            }
                        }
                    }
                    node[0].ontouchmove = null;
                    node[0].ontouchend = null;
                }
            }
        }
    }
}

// 鍦ㄥ脊鍑烘诞灞傚悗闃绘椤甸潰缁х画婊戝姩
function preventPageScroll(node) {
	node[0].ontouchstart = handleStart;	
	function handleStart(e) {
		node[0].ontouchmove = handleMove;		
	}
	function handleMove(evt) {
		evt.preventDefault();
		node[0].ontouchend = handleEnd;		
	}
	function handleEnd() {
		node[0].ontouchend = null;
		node[0].ontouchmove = null;
	}
}

// 鏌ヨurl涓殑鍙傛暟
function getQuery(name,url){
//鍙傛暟锛氬彉閲忓悕锛寀rl涓虹┖鍒欒〃浠庡綋鍓嶉〉闈㈢殑url涓彇
    var u  = arguments[1] || window.location.search,
        reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"),
        r = u.substr(u.indexOf("\?")+1).match(reg);
    return r!=null?r[2]:"";
}
// 娓呴櫎缂撳瓨璁板綍
function removeStorage(key) {
	window.localStorage.removeItem(key);
}

function isAllowSubmit(opt) {
	var set = {
		form:"",
		inputName:""
	};
	$.extend(set, opt);	
	$(set.form).each(function() {
			var formNode = $(this);
			var inputNode = formNode.find("input[name='"+set.inputName+"']");
			formNode.bind("submit", function() {
			var value = inputNode.val().replace(/^\s*|\s*$/g,"");
			return value != "";
		});
	})
}