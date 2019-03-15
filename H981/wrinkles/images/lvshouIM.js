var stop = false;
var CloseType = 1;
var NextInviteTime = 5000000;
//关闭浮动框

function close() {
    document.getElementById("full").style.display = "none";
    window.setTimeout("openFull()", 5000);
}
function CloseFull() {
    $("#full").hide();
    window.setTimeout("openFull()", 5000);
}
//打开浮动框

function openFull() {
    if (document.getElementById("invite").style.display == "none") {
        document.getElementById("full").style.display = "block";
    }
}
//设置模式
function setCloseType(type) {
    CloseType = type;
}
//设置弹框间隔时间
function setNextInviteTime(time) {
    NextInviteTime = time;
}

//关闭邀请框
function closeinvite() {
    document.getElementById("invite").style.display = "none";
    document.getElementById("full").style.display = "block";
    if (CloseType == 1) {
        //不再弹邀请框
        return;
    } else if (CloseType == 2) {
        //5秒后再次弹出邀请框
        window.setTimeout("ShowInvite()", NextInviteTime);
    }
    //window.location.href = WebSite;
    //return false;
}
//浮动框和邀请框的平滑移动

lastScrollY = 0;
function heartBeat() {
    if (!stop) {
        var diffY;
        if (document.documentElement && document.documentElement.scrollTop)
            diffY = document.documentElement.scrollTop;
        else if (document.body)
            diffY = document.body.scrollTop
        else
        { /*Netscape stuff*/ }
        percent = .1 * (diffY - lastScrollY);
        if (percent > 0) percent = Math.ceil(percent);
        else percent = Math.floor(percent);
        document.getElementById("full").style.top = parseInt(document.getElementById("full").style.top) + percent + "px";
        document.getElementById("invite").style.top = parseInt(document.getElementById("invite").style.top) + percent + "px";
        lastScrollY = lastScrollY + percent;
    }
}
//显示邀请框
function ShowInvite() {
    if (CloseType == 2) {
        document.getElementById("full").style.display = "none";
        document.getElementById("invite").style.display = "block";
    }
}
//取得上级网页地址
function GetReferrerX() {
    var tempReferrer = "";
    try {
        tempReferrer = SetDataX(document.referrer, tempReferrer);
        tempReferrer = SetDataX(top.document.referrer, tempReferrer);
        tempReferrer = SetDataX(window.parent.document.referrer, tempReferrer);
    } catch (e) {
    }
    return tempReferrer;
}

function SetDataX(dataSource, data) {
    tempdata = data;
    try {
        if (dataSource && dataSource != '') {
            if (tempdata == '')
			{
                tempdata = dataSource;
				
			}
        }
    }
    catch (e) { }
    return tempdata;
}
//取得当前页面地址
function InitURLX() {
    var uri = "";
    try {
        uri = SetDataX(document.URL, uri);
        uri = SetDataX(window.location, uri);
        uri = SetDataX(window.parent.location, uri);
    } catch (e) {
    }
	if(!/\?/.test(uri))
	uri = uri+"?";
    return uri;
}
//取得网页标题
function InitTitleX() {
    var docTitle = document.title;
    try {
        if (typeof docTitle == 'undefined' || docTitle == null || docTitle == '') {
            var t_titles = document.getElementsByTagName("title");
            if (typeof t_titles != 'undefined' && t_titles && t_titles.length > 0) {
                docTitle = t_titles[0].innerText;
            } else {
                docTitle = "";
            }
        }
    } catch (e) { }
    return docTitle;
}

window.setInterval("heartBeat()", 1);
var posX;
var posY;
var popDiv;
var dragable;
var c_Height = $(document.body)[0].clientHeight;
var c_Width = $(document.body)[0].clientWidth;
c_Width = c_Width - 630;

// 获取窗口高度 
var winHeight = 0;

if (window.innerHeight)

    winHeight = window.innerHeight;

else if ((document.body) && (document.body.clientHeight))

    winHeight = document.body.clientHeight;

// 通过深入 Document 内部对 body 进行检测，获取窗口大小 

if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {

    winHeight = document.documentElement.clientHeight;

}

winHeight = winHeight - 455 + 100;


//打开商务通并更新访客的isIM变量
var chatWindow;
function OpenIM() {
	
	CarID = GetCookie("CarID");
    var tmpCarID = "errorID";
    var tmpCookieID = "errorCookieID";
    if (typeof CarID != "undefined" && CarID != null && CarID != '') {
        tmpCarID = CarID;
    }
    if (typeof cgid != "undefined" && cgid != null && cgid != '') {
        tmpCookieID = cgid;
    }
	
	var zooUrlII = "../../ljq.zoossoft.com/LR/Chatpre.aspx@id=LJQ51355817";
    var zooUrl = "../../d2.lvshou.net/LR/Chatpre.aspx@id=LXA91520613";
    var rnd = Math.round((Math.random() * 9 + 1)); //产生一个1-10的随机数
    if (rnd > 5) zooUrl = zooUrlII;

    
    var ZoosNetURL = GetCookie("ZoosNetURL");
    if (typeof ZoosNetURL != "undefined" && ZoosNetURL != null && ZoosNetURL != '') {
        zooUrl = ZoosNetURL;
    }
    
    SetCookie("ZoosNetURL",zooUrl);

	if (zooUrl == "javascript:void(0)") {
        return;
    }
    var xHistoryZooUrl = "";
    if (typeof HistoryZoosNetURL != "undefined" && HistoryZoosNetURL != null && HistoryZoosNetURL != '') {
        xHistoryZooUrl = HistoryZoosNetURL;
    }
	
	

    var xSourceRefer = "";
    //debugger;
    //if (typeof SourceRefer != "undefined" && SourceRefer != null && SourceRefer != '') {
    //   xSourceRefer = SourceRefer;
    //}
    //else {
    xSourceRefer = GetCookie("SaveSourceRefer");
    //}

    var xSourceTime = "";

    //if (typeof SourceTime != "undefined" && SourceTime != null && SourceTime != '') {
    //    xSourceTime = SourceTime;
    //}
    //else {
    xSourceTime = GetCookie("SaveSourceTime");
    //}
    //zooUrl = "../../ljq.zoossoft.com/LR/Chatpre.aspx@id=LJQ51355817";
	var myReferUrl = GetCookie("swt_refer");
	
	xHistoryZooUrl = zooUrl;
	xSourceRefer = myReferUrl;
	

    var openURL = zooUrl + "&e=" + "HistoryZoosNetUrl:" + xHistoryZooUrl + "|Refer:" + xSourceRefer + "|Time:" + xSourceTime + "&r=" + escape(myReferUrl) + "&p=" + escape(InitURLX()) + "&cid=CarID" + tmpCarID;
	
    closeinvite();
    var exParas = "height=455, width=630, top=" + winHeight + ",left=" + c_Width + ", toolbar=no, menubar=no, scrollbars=no, resizable=yes,location=no, status=no";

    
    chatWindow = window.open(openURL, "chatWindow", exParas);
    
    setCloseType(1);
    tmpCarID = null;
    if (typeof OnIM != 'undefined') {
        OnIM();
    }
    CheckChatWindow();
}
function CheckChatWindow() {

    if (chatWindow.closed == true) {
        setCloseType(2);
        window.setTimeout("ShowInvite()", NextInviteTime);
    }
    else {
        setTimeout("CheckChatWindow()", 5000);
    }
}