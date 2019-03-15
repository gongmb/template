
var AJAXAction={};
AJAXAction.script = function(e){
    if (e.status){jQuery.globalEval(e.script);}
};
redirecturl='';
AJAXAction.redirect = function(e){
        delay= e.delay ? e.delay : 0;
        redirecturl=e.url;
        showprompt(e.data);
        setTimeout(function(){location.href=redirecturl;},e.delay*1000);
    };
AJAXAction.checklogin = function(e){
        if (e.status)
        {
            location.reload();
        } 
    };
AJAXAction.success=function(e){
    showprompt(e.data);
};
AJAXAction.error=function(e){
    showprompt(e.data);
};
AJAXAction.callback=function(e){
};
AJAXAction.logout=function(e){
        showprompt(e.data);
        location.reload();
};
AJAXAction.reload=function(e){
    if (e.status) {showprompt(e.data,5000);}
    location.reload();
};
AJAXAction.systemerror=function(e){
        // alert(e.data);
    };
String.prototype.trim = function(){
    return this.replace(/(^\s*)|(\s*$)/g, "");
};
String.prototype.strip = function(){
    return this.replace(/<[^>].*?>/g,"");
};
String.prototype.stripspace = function(){
    ch=this.replace(/&nbsp;/g," ");
    ch=ch.replace(/&nbsp/g," ");
    return ch;
};
// Array.prototype.indexOf=function(substr,start){
//     var ta,rt,d="\n";
//     if(start!==null){
//         ta=this.slice(start);
//         rt=start;
//     }else{
//         ta=this;rt=0;
//     }
//     var str=d+ta.join(d)+d,t=str.indexOf(d+substr+d);
//     if(t==-1)return -1;
//     rt+=str.slice(0,t).replace(/[^\n]/g,'').length;
//     return rt;
// };
// Array.prototype.del=function(n) {
// 　if(n<0)
// 　　return this;
// 　else
// 　　return this.slice(0,n).concat(this.slice(n+1,this.length));
// };

$.fn.historyLoad=function(loc,targetid){
    if (this.id =='main') {
        lastMainUrl=loc;
    }
    lastLogic=loc;
    var id='';
    if (targetid) id = '&id='+targetid;
        else if ($(this).attr('id')) 
            id = '&id='+$(this).attr('id');
            else if ($(this).attr('targetid')) 
                id = '&id='+$(this).attr('targetid');
    if (id)
        $('#ajaxframe').get(0).src='history.html@url='+encodeURIComponent(loc)+id + '&';
    return this;
};

var ajaxhistory=function(url,id){
    if (!id) id ='main';
    id='#'+id;
    lastLogic=decodeURIComponent(url);
    $(id).ajaxload(lastLogic);    
};

function JsonEncode(o)
{
    var i, v, t;

    if (o == null)
        return 'null';

    t = typeof o;

    if (t == 'string') {
        v = '\bb\tt\nn\ff\rr\""\'\'\\\\';

        return '"' + o.replace(/([\u0080-\uFFFF\x00-\x1f\"])/g, function(a, b) {
            i = v.indexOf(b);

            if (i + 1)
                return '\\' + v.charAt(i + 1);

            a = b.charCodeAt().toString(16);

            return '\\u' + '0000'.substring(a.length) + a;
        }) + '"';
    }

    if (t == 'object') {
        if (o instanceof Array) {
                for (i=0, v = '['; i<o.length; i++)
                    v += (i > 0 ? ',' : '') + JsonEncode(o[i]);

                return v + ']';
            }

            v = '{';

            for (i in o)
                v += typeof o[i] != 'function' ? (v.length > 1 ? ',"' : '"') + i + '":' + JsonEncode(o[i]) : '';

            return v + '}';
    }

    return '' + o;
}

function GetCookie(sName)
{
    var ndCookie = document.cookie.split("; ");
    for (var i=0; i < ndCookie.length; i++)
    {
        var pval = ndCookie[i].indexOf("=");
        if (!pval) continue; 
        var name = ndCookie[i].slice(0,pval);
        var val = ndCookie[i].slice(pval+1);
        if (sName == name)
            return unescape(val);
    }
    return null;
}

function SetCookie(sName, sValue, etime)
{
    var expdate = new Date();
    etime=(etime==null) ? 24 :etime;
    expdate.setTime(expdate.getTime() + ( etime * 3600 * 1000 ));
    document.cookie = sName + "=" + escape(sValue) + "; expires=" + expdate + "; path=/";
}
function AddFavorite(sURL, sTitle)
{
    try
    {
        window.external.addFavorite(sURL, sTitle);
    }
    catch (e)
    {
        try
        {
            window.sidebar.addPanel(sTitle, sURL, "");
        }
        catch (e)
        {
            alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}
function SetHome(obj,vrl){
        try{
                obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl);
        }
        catch(e){
                if(window.netscape) {
                        try {
                                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                        }
                        catch (e) {
                                alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
                        }
                        var prefs = Components.classes['_40mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
                        prefs.setCharPref('browser.startup.homepage',vrl);
                 }
        }
}
function checklogin()
{
    if (typeof isLogin!="undefined" && isLogin)
        return true; 
    else 
    {
        SetCookie('mdID','');
        return false;
    }
}

function switchstatus()
{
    try{
        if (isLogin)
        {
            $('.isLogin').show();
            $('.noLogin').hide();
            if (isMyself)
            {
                $('.isMyself').show();
                $('.noMyself').hide();
            } else
            {
                $('.isMyself').hide();
                $('.noMyself').show();            
            }
            if (isMyfriend)
            {
                $('.isMyfriend').show();
                $('.noMyfriend').hide();
            } else
            {
                $('.isMyfriend').hide();
                $('.noMyfriend').show();            
            }
        } else
        {    $('.isMyself').hide();
            $('.isMyfriend').hide();
            $('.noMyself').hide();
            $('.noMyfriend').hide();
            $('.isLogin').hide();
            $('.noLogin').show();    
        }
    } catch(e){}
}
sync = null;
pieid = 0;
function showprompt(msg,etime)
{
    if ($('#promptbox').length){
    if (pieid) clearTimeout(pieid);
    $('#promptbox').html(msg);
    $('#prompt-outer').css('top',($(window).height()-$('#prompt-outer').height())/2+$(window).scrollTop()).css('left',($(window).width()-$('#prompt-outer').width())/2).fadeIn(500);
    if (!etime) etime=3000;
    pieid = setTimeout("hideprompt()",etime);
    } else {
        alert(msg);
    }
}

/* 右下角显示的提示信息 */
function hideprompt()
{
    $('#prompt-outer').fadeOut(500);
    pieid = 0;
}

function goTop()
{
    try{
    moving=setInterval(function(){
        window.scrollBy(0,-30);
        sy=document.documentElement.scrollTop|| document.body.scrollTop;
        if (sy <= 1){
            clearInterval(moving);
        }
    },10);
    } catch(e){}
    return false;
}

function tooltip_min(obj)
{
    reltitle=$(obj).parents('.titlebar').children('.title').text() ? $(obj).parents('.titlebar').children('.title').text() : $(obj).parents('.titlebar').children('b').text();
    shorttitle=reltitle.substr(0,6);
    blockname='closeblock-'+Math.round(Math.random()*10000000);
    loadtools($('<a href="#" title="'+reltitle+'"><button onclick="javascript:tooltip_show(\'#'+blockname+'\',this)"><div class="refername">'+shorttitle+'</div></button></a>'),$('#taskbar'));
    $(obj).parents('.block-container').attr('id',blockname).fadeOut();
}
function tooltip_show(obj,button)
{
    $(button).parent().remove();
    $(obj).fadeIn();
    location.href=obj;
}
function tooltip_close(obj)
{
    $(obj).parents('.block-container').remove();
}

function tooltip_slide(obj)
{
    if ($(obj).text()=='展 开')
    {
        $(obj).text('折 叠');
        $(obj).parents('.titlebar').parent().children('.container').slideDown();
    } else
    {
        $(obj).text('展 开');
        $(obj).parents('.titlebar').parent().children('.container').slideUp();
    }
}

LastDialogHandle=null;
function CreateDialog(obj, title, width, height, modal, resizable, button)
{
    if (!obj.dialog("isOpen"))
    return obj.dialog({
        title: title,
        resizable: resizable,
        modal: modal, 
        width: width,
        height: height,
        buttons: button ,
          beforeclose: function(event, ui) {
              LastDialogHandle=null;
           },
        overlay: { 
            opacity: 0.9, 
            background: "#e0e0e0" 
        } 
        });
}

function CloseDialog(obj)
{
    try{dialogmce.remove(); dialogmce=null; }catch(e){}
    try{
        obj.dialog("close");
        obj.attr('url',null);
        obj.attr('type',null);
    } catch(e){}
}

dialogtitle = '对话框';
dialogwidth = '400px';
dialogheight = '300px';
dialogmodal = true;
dialogresizable = false;
dialogbutton = false;

function LoadDialog(url, objdialog, title, width, height, modal, resizable, button)
{
    if (sync != null) return false;
    sync="dialog";
    objdialog = objdialog=='' ? '#popwindow':objdialog;
    if (!$(objdialog).length) {
        var dialogid=objdialog.substr(1);
        $('body').append('<div id="'+dialogid+'" class="vista" style="display:none;" />');
    }
    $(objdialog).attr('url',url);
    $(objdialog).attr('type','divloader');
    dialogtitle = title;
    dialogwidth = width;
    dialogheight = height;
    dialogmodal = modal;
    dialogresizable = resizable;
    dialogbutton = button;
    var rdialog = Ajaxme(url,'get',null,10000,"NDFLdialogcallback(data,\""+objdialog+"\",\""+url+"\")");
    if (!rdialog) {
        sync = null;
        return false;
    }
    return $(objdialog);
}

function NDFLdialogcallback(data,selector,loadurl)
{
    if (!data || data=='undefined'){
        if (data=='undefined' && loadurl)
            Ajaxme(loadurl,'get',null,10000,"NDFLdialogcallback(data,\""+selector+"\")");
        $(selector).html('<div class="loaderror"><a type="div" target="'+selector+'" href="'+loadurl+'">&nbsp;</a></div>');
        $(selector).removeAttr('compiled');
        compile($(selector));
        LastDialogHandle=CreateDialog($(selector), dialogtitle, dialogwidth, dialogheight, dialogmodal, dialogresizable, dialogbutton);
        sync = null;
        return;
    }
    $(selector).removeClass('loading');
    $(selector).html(data);
    $(selector).find('form').attr('isdialog','true');
    $(selector).find('form').attr('type','ajax');
    $(selector).removeAttr('compiled');
    compile($(selector));
    LastDialogHandle=CreateDialog($(selector), dialogtitle, dialogwidth, dialogheight, dialogmodal, dialogresizable, dialogbutton);
    sync = null;
    return true;
}

LastWindowHandle=null;
WindowHandleStack=[];
function CreateWindow(obj, title, width, height, modal, resizable, button)
{
    if (!obj.dialog("isOpen"))
    {
    WindowHandleStack.push(obj.attr('id'));
    return obj.dialog({
        title: title,
        resizable: resizable,
        modal: modal, 
        width: width,
        height: height,
        buttons: button ,
          afterclose: function(event, ui) {
            var phandle=obj.attr('id');
            obj.remove();
            if (WindowHandleStack.length>0)
              {
                  var ihdl=WindowHandleStack.indexOf(phandle);
                  if (ihdl==(WindowHandleStack.length-1))
                  {
                      WindowHandleStack.pop();
                      if (WindowHandleStack.length)
                      {
                          LastWindowHandle=$('#'+WindowHandleStack[WindowHandleStack.length-1]);
                          LastWindowHandle.focus();
                      } else {
                          LastWindowHandle=null;    
                      }
                  } else {
                      WindowHandleStack=WindowHandleStack.del(ihdl);
                  }
              }
          },
        overlay: { 
            opacity: 0.9, 
            background: "#e0e0e0" 
        } 
        });
    }
}

function LoadWindow(url, objdialog, title, width, height, modal, resizable, button)
{
    if (sync != null) return false;
    sync="dialog";
    objdialog = objdialog=='' ? '#popwindow':objdialog;
    if (!$(objdialog).length) {
        var dialogid=objdialog.substr(1);
        $('body').append('<div id="'+dialogid+'" class="vista" style="display:none;" />');
    }
    $(objdialog).attr('url',url);
    $(objdialog).attr('type','divloader');
    dialogtitle = title;
    dialogwidth = width;
    dialogheight = height;
    dialogmodal = modal;
    dialogresizable = resizable;
    dialogbutton = button;
    var rdialog = Ajaxme(url,'get',null,10000,"NDFLwindowcallback(data,\""+objdialog+"\",\""+url+"\")");
    if (!rdialog) {
        sync = null;
        return false;
    }
    return $(objdialog);
}

function NDFLwindowcallback(data,selector,loadurl)
{
    if (!data || data=='undefined'){
        if (data=='undefined' && loadurl)
        Ajaxme(loadurl,'get',null,10000,"NDFLwindowcallback(data,\""+selector+"\")");
        $(selector).html('<div class="loaderror"><a type="div" target="'+selector+'" href="'+loadurl+'">&nbsp;</a></div>');
        $(selector).removeAttr('compiled');
        compile($(selector));
        LastWindowHandle=CreateWindow($(selector), dialogtitle, dialogwidth, dialogheight, dialogmodal, dialogresizable, dialogbutton);
        sync = null;
        return true;
    }
    $(selector).removeClass('loading');
    $(selector).html(data);
    var mwselector=$(selector).clone().attr('id',$(selector).attr('id')+Math.floor(Math.random()*100000)).appendTo('body');
    mwselector.find('form').attr('isdialog','true');
    mwselector.find('form').attr('type','ajax');
    $(mwselector).removeAttr('compiled');
    compile(mwselector);
    $(selector).empty();
    $(selector).attr('url',null);
    $(selector).attr('type',null);
    LastWindowHandle=CreateWindow(mwselector, dialogtitle, dialogwidth, dialogheight, dialogmodal, dialogresizable, dialogbutton);
    sync = null;
    return true;
}

function JsonAction(data)
{
    var json = {};
    if (data){
        try{
            json=jQuery.parseJSON(data);
        } catch(e) {
            json=data;
        }
        if (json.action && AJAXAction.hasOwnProperty(json.action))
        {
            try{
            eval('('+'AJAXAction.'+json.action+'(json)'+')');
            }catch(e){}
        }
    } else 
    {
        json.status=0;
        json.data='请稍等，您的网络出现了小毛病！';
    }
    return json;
}

function Ajaxmecallback(data,callid){
    var backfunc = $('body').data(callid);
    var json=JsonAction(data);
    backfunc(json);
    $('body').removeData(callid);
    return; 
}

function getAbsUrl(url){
    url = url.trim();
    if (url.indexOf("http//")==0) return url;
    if (url.indexOf("/")==0) return 'http//'+location.host+url;
    var dt = location.href.split("?")[0].split("/");
      dt.length--;
      while(url.indexOf("../default.htm")==0)
      {
        url = url.slice(3);
        dt.length--;
      }
    return unescape(dt.join("../default.htm")+"/"+url);
}

function Ajaxme(url,type,data,atimeout,callback,noswf)
{
    var postdata="isAjax=true";
    if (!url) return false;
    url = getAbsUrl(url);
    if ( data && typeof data != "string" )
        postdata = jQuery.param(data)+"&isAjax=true";
    else {
        if (!data || data.charAt(data.length-1)=="&") 
            postdata = data+"isAjax=true";
        else
            postdata = data+"&isAjax=true";
    }
    try{
        var checkflash = AjaxLoader.checkFlash();
    }
    catch(e){
        var checkflash = false;
    }
    
    var jphost;
    if (typeof usersession=="undefined") usersession="";
    if (typeof comHost=="undefined") jphost="../Api"; else jphost=comHost;    //http//g.oeeee.com
    if (typeof uidHost!="undefined" && uidHost!="") jphost=uidHost;
    
    if (type && type.toLowerCase()=='post'){
        if (url.indexOf(location.hostname)>0)
            return $.ajax({
                url:url,
                type:"POST",
                dataType:"text",
                data:postdata,
                timeout: atimeout ? atimeout : 5000,
                    statusCode: {502: function() {

                  }},
                success:function(data){
                    if (callback && jQuery.isFunction(callback)){ 
                        var json=JsonAction(data);
                        callback(json);
                    }
                    else
                    {
                        try{
                            eval(callback);
                        }catch(e){}
                    }
                },
                error:function(e){
                    // showprompt('服务器繁忙或地址错误，请稍候再试');
                }
            });
        else
        if (!checkflash || noswf)
            return $.ajax({
                url:jphost+'/jsonp.php',
                dataType:"jsonp",
                data:{sid:usersession,url:url,pdata:postdata},
                jsonp:"jpback",
                timeout: atimeout ? atimeout : 5000,
                  statusCode: {502: function() {

                  }},

                success:function(json){
                    if (json.status){
                        if (callback && jQuery.isFunction(callback)) 
                        {
                            var json=JsonAction(json.data);
                            callback(json);
                        }
                        else
                        {
                            var json=JsonAction(json.data);
                            try{
                                eval(callback);
                            }catch(e){}
                        }
                    } 
                },
                error:function(e){
                    // showprompt('服务器繁忙或地址错误，请稍候再试');
                }
            });
        else
        {
            if (callback && jQuery.isFunction(callback))
            {
                var callid='Ajaxme'+Math.floor(Math.random()*1000000);
                $('body').data(callid,callback);
                return AjaxCrossDomainPost(url,postdata,"Ajaxmecallback(data,\""+callid+"\")");
            } else return AjaxCrossDomainPost(url,postdata,callback);
        }    
    } else {   
        if (postdata)
            if (url.charAt(url.length-1)=="&") 
                url = url+"isAjax=true";
            else
                if (url.indexOf('?')>1) url = url+"&isAjax=true"; else url = url+"@isAjax=true";
                
     
        if (!checkflash || noswf)
        return $.ajax({
                url:jphost+'/jsonp.php',
                dataType:"jsonp",
                data:{sid:usersession,url:url},
                jsonp:"jpback",
                timeout: atimeout ? atimeout : 5000,
                success:function(json){
                    
                    if (json.status){
                        var data = json.data; 
                        if (callback && jQuery.isFunction(callback)) 
                        {
                            
                            var json=JsonAction(data);
                            
                            callback(json);
                        }
                        else
                        {
                            var json=JsonAction(data);
                            
                            try{
                                eval(callback);
                            }catch(e){}
                        }
                    } 
                },
                error:function(e){
                    // showprompt('服务器繁忙或地址错误，请稍候再试');
                }
            });
        else
        {
            if (callback && jQuery.isFunction(callback))
            {
                var callid='Ajaxme'+Math.floor(Math.random()*1000000);
                $('body').data(callid,callback);
                return AjaxCrossDomainGet(url,"Ajaxmecallback(data,\""+callid+"\")");
            } else return AjaxCrossDomainGet(url,callback);
        }
    }
}
// 扩展跨域load
ajaxloadcallbackhandle=null;
$.fn.ajaxload=function(url,callback,nocompile){
    var callid='';
    $(this).attr('loadstate','loading');
	$(this).addClass('loading');    //<*>
    if (callback && jQuery.isFunction(callback)) 
        ajaxloadcallbackhandle=callback;
    else
    {
        nocompile=callback;
        ajaxloadcallbackhandle=null;
    }
    if ($(this).attr('id')) 
        callid=$(this).attr('id');
    else
    {
        callid='NDFL'+Math.floor(Math.random()*1000000);
        $(this).attr('id',callid);
    }
    
    var tagnoc='false';
    if (nocompile) tagnoc='true';
    callid='#'+callid;    
    Ajaxme(url,'get',null,10000,"NDLOADcallback(data,\""+callid+"\",\""+url+"\","+tagnoc+")");                    
};

function NDLOADcallback(data,selector,loadurl,nocompile)
{
    
    if (!data || data=='undefined'){
        if (data=='undefined' && loadurl)
            Ajaxme(loadurl,'get',null,10000,"NDLOADcallback(data,\""+selector+"\",\"\","+nocompile+")",true);
        $(selector).html('<div class="loaderror"><a type="div" target="'+selector+'" href="'+loadurl+'">&nbsp;</a></div>');
        $(selector).removeAttr('compiled');
        compile($(selector));
        return true;
    }
    $(selector).removeClass('loading');
    $(selector).html(data);
    if (!nocompile) {$(selector).removeAttr('compiled');compile($(selector));}
    if (ajaxloadcallbackhandle){
        $(selector).each(function(){
            ajaxloadcallbackhandle();
        });
    }
}

function NDPOSTcallback(data,callback,loadurl,param){
    if (!data || data=='undefined' || data.trim().charAt(0) =='<' ){
        if (data=='undefined' && loadurl)
        Ajaxme(loadurl,'get',param,10000,"NDPOSTcallback(data,\"ajaxpostcallbackhandle\")",true);
        // showprompt('请重新提交试试:'+data);
        return true;
    }
    json=JsonAction(data);
    if (callback) {
        eval(callback+'(json)');
    }
}
ajaxpostcallbackhandle=null;
function AjaxPost(oform, callback)
{
    ajaxpostcallbackhandle=callback;
    var param=$(oform).serialize();
    return Ajaxme($(oform).attr('action'),'post',param,10000,"NDPOSTcallback(data,\"ajaxpostcallbackhandle\",\""+oform.action+"\",\""+param+"\")");    
}

function NDFLcallback(data,selector,loadurl)
{
     
    if ($(selector).attr('loadstate')=='loaded') return;
    
    if (data=='undefined'){
        if (loadurl)
        Ajaxme(loadurl,'get',null,10000,"NDFLcallback(data,\""+selector+"\")",true);
        $(selector).html('<div class="loaderror"><a type="div" target="'+selector+'" href="'+loadurl+'">&nbsp;</a></div>');
        $(selector).removeAttr('compiled');
        compile($(selector));
        return true;
    } 
    $(selector).removeClass('loading');
    $(selector).attr('loadstate','loaded');
    $(selector).html(data);
    $(selector).removeAttr('compiled');
    compile($(selector));
}

function uncompile(obj){
    obj.removeAttr('compiled');
    obj.find('form[type=ajax]').unbind("submit");
    obj.find('input[type="button"][mode="ajax"]').unbind("click");
    obj.find('a[type]').unbind("click");
}

function ReplaceUrlTime(href){
    var time=Math.round((new Date())/1000);
    var outstr=href.replace(/&time=\d+/ig,"&time="+time);
    return outstr;
}
/* 编译html标签的DOM效果 */

function compile(obj){   

    if (obj.attr('compiled')){
       
       return false; 
    }  
    initFormValidation(obj.get(0));  
    switchstatus(); 
    obj.find('form[type="ajax"]').each(function(){
        $(this).submit(function(){
            if ($(this).attr('prepare'))
            {
                try{
                var re=eval($(this).attr('prepare'));
                if (!re) return false;
                }
                catch(e)
                {return false;}
            }    
            if ($(this).attr('valid') && $(this).attr('valid')!='true') return false;
            cback='';
            if ($(this).attr('callback')) cback=$(this).attr('callback');
            formobj=this;
            submitbtn=$(this).find('input[type="submit"]');
            if (submitbtn.attr('sync')) {
                globaloldvalue=submitbtn.val();
                submitbtn.val(submitbtn.attr('sync'));
                submitbtn.attr('disabled','disabled');
            }
            if ($(formobj).attr('ajaxmsg'))
            {
                if ($(formobj).attr('sync'))
                    $(formobj).find($(formobj).attr('ajaxmsg')).html($(formobj).attr('sync')).show();
                else
                    $(formobj).find($(formobj).attr('ajaxmsg')).addClass('loading').show();
            }
            AjaxPost(this,function(json){
                if (!json.status) 
                {
                    if ($(formobj).attr('ajaxmsg'))
                        $(formobj).find($(formobj).attr('ajaxmsg')).html(json.data).show();
                    else
                    {
                        $(formobj).find('.ajaxerror').html(json.data).show();
                    }
                }
                if (cback) try{ eval(cback);}catch(e){}
                try{
                if (submitbtn.attr('sync')) {
                    submitbtn.val(globaloldvalue);
                    if (!json.status) submitbtn.attr('disabled',null);
                }
                } catch(e){}
                if (json.status && $(formobj).attr('isdialog')=='true'){
                    CloseDialog($(formobj).parents('.ui-dialog-content'));
                }
            });
            return false;
        });
    });
    
    obj.find('input[type="button"][mode="ajax"]').click(function(){
        if ($(this).attr('prepare'))
        {
            try{
            var re=eval($(this).attr('prepare'));
            if (!re) return false;
            }
            catch(e)
            {}
        }
        var cback='';
        if ($(this).attr('callback'))
        {
            cback = $(this).attr('callback');
        }
        osub='';
        if ($(this).attr('parent'))
        {
            osub = $($(this).attr('parent')).get(0);
        } else
        {
            osub = $(this).parents('div').get(0);
        }
        obform=$(osub).clone(true);
        oform=$('<form />').html($(obform));
        Ajaxme($(this).attr('action'),"POST", 
                oform.serialize(),
                30000, eval(cback));
    });
    
    /* Div的异步载入 */

    obj.find('div[type]').each(function(){
        switch($(this).attr('type')){
            
            case 'divloader':
                
                if ($(this).attr('loadstate')=='loaded') return true; 
                $(this).attr('loadstate','loading');
                var divwidth=$(this).width() ? $(this).width()+'px' : '99%';
                var divheight=$(this).height() ? $(this).height()+'px' : '99%';
                $(this).addClass('loading');
                var loadurl=$(this).attr('url');
                loadurl=ReplaceUrlTime(loadurl);
                    var callid='';
                    if ($(this).attr('id')) 
                        callid=$(this).attr('id');
                    else
                    {
                        callid='NDFL'+Math.floor(Math.random()*1000000);
                        $(this).attr('id',callid);
                    }
                    callid='#'+callid;                          
                    Ajaxme(loadurl,'get',null,5000,"NDFLcallback(data,\""+callid+"\",\""+loadurl+"\")");
                break;
            
            case 'swfloader':
                var thispath=$(this).attr('path');
                var thiswidth=$(this).attr('width') ? $(this).attr('width'): 400;
                var thisheight=$(this).attr('height') ? $(this).attr('height'): 300;
                var flashvars={};
                try{
                    eval('flashvars='+$(this).attr('flashvars'));
                } catch(e){}
                try{
                    eval('params='+$(this).attr('params'));
                } catch(e){params={};}

                swfid=$(this).attr('id')+Math.round(Math.round()*1000000);
                $(this).empty().append('<div id="'+swfid+'"></div>');
                if (!statichost) statichost='';
                if (thispath !='')
                    swfobject.embedSWF(thispath, swfid, thiswidth, thisheight, "9.0.0",statichost+"/Public/Js/Common/expressInstall.swf", flashvars,params);
                break;       
            case 'xmlloader':
            
                var url;
                if ($(this).attr('url')){ 
                    url = $(this).attr('url');
                }
                else
                {
                    if ($(this).attr('path')){
                        url=$(this).attr('path')+'../XmlData/'+$(this).attr('folder')+'/'+$(this).attr('file');
                    }
                }
                rs=xmltemplate(url,this);
                     
                break;  
            default:
                return true;
                
        }    
    });

    obj.find('a[type]').click(function(e){
        switch(this.type){
        case 'dialog':
            if (LastDialogHandle){
                CloseDialog(LastDialogHandle);
            }
            var odialog=($(this).attr('div'))? $(this).attr('div'):'#popwindow';
            var settitle = $(this).attr('title');
            if (!settitle) settitle = $(this).text();
            if (!settitle) settitle = '站点消息';
            var gohref = $(this).attr('href');
            var setwidth = ($(this).attr('winwidth')) ? $(this).attr('winwidth') : '400px';
            var setheight = ($(this).attr('winheight')) ? $(this).attr('winheight'): '300px';
            var setresizable = false;
            if  ($(this).attr('resizable')) setresizable = true;
            var setmodal = true;
            if  ($(this).attr('multi')) setmodal = false;
            aobj=$(this);
            if ($(this).attr('prepare'))
            {
                try{
                var re=eval($(this).attr('prepare'));
                if (!re) return false;
                }
                catch(e)
                {}
            }
            if ($(this).attr('button'))
            {
                setbutton=new Object();
                try{
                    if (aobj.attr('buttonok')) setbutton['确定']=function(){eval(aobj.attr('buttonok'));};
                    if (aobj.attr('buttoncancel')) setbutton['取消']=function(){eval(aobj.attr('buttoncancel'));};
                }catch(e){
                }
            } else
            {
                setbutton={};
            }
            if (gohref!='' && gohref!='#'){ 
                if  ($(this).attr('multi'))
                    LoadWindow(gohref, odialog, settitle, setwidth, setheight, setmodal, setresizable, setbutton);
                else
                    LoadDialog(gohref, odialog, settitle, setwidth, setheight, setmodal, setresizable, setbutton);
            } else {
                if  ($(this).attr('multi'))
                {
                    sync = 'window';
                    LastWindowHandle=CreateDialog($(odialog), settitle, setwidth, setheight, setmodal, setresizable, setbutton);
                } else {
                    sync = 'dialog';
                    LastDialogHandle=CreateDialog($(odialog), settitle, setwidth, setheight, setmodal, setresizable, setbutton);
                }
                sync = null;
            }
             return false;
            break;
        case 'ajax':
            var target=$(this).attr('target');
            if ($(this).attr('prepare'))
            {
                try{
                var re=eval($(this).attr('prepare'));
                if (!re) return false;
                }
                catch(e)
                {}
            }
            var cback='';
            if ($(this).attr('callback'))
            {
                cback = $(this).attr('callback');
            }
            var method='POST';
            method= $(this).attr('method') ? $(this).attr('method') : method;
            
            var data='';
            if ($(this).attr('data')) data=$(this).attr('data');
            aobj=$(this);
            var gohref=ReplaceUrlTime(this.href);
            Ajaxme(gohref,method,data,30000,
                    function(json){
                        if (cback){
                            try{
                                eval(cback);
                            }catch(e){}
                        } else {
                        if (target=='') {
                            if (json.action!='nopop' && json.data) showprompt(json.data);
                         }
                        else $(target).html(json.data);
                        }
                    });

            return false;
            break;
        case 'div':
            divtarget=$(this).attr('target');
            if (!$(divtarget).is('div')){
                divtarget="#main";
            }
            if ($(this).attr('prepare'))
            {
                try{
                var re=eval($(this).attr('prepare'));
                if (!re) return false;
                }
                catch(e)
                {}
            }
            if ($(this).attr('append')!='true') $(divtarget).empty();
            if ($(this).attr('ask')=='true' &&  $(divtarget).children().length>0)
            {
                if (confirm('当前消息框有程序正在运行，确定将强制退出：'))
                    $(divtarget).empty();
                else 
                    return false;
            }
            $(divtarget).addClass('loading');
            $(divtarget).attr('loadstate','loading');
            var gohref=ReplaceUrlTime(this.href);
            Ajaxme(gohref,'get',null,10000,"NDFLcallback(data,\""+divtarget+"\",\""+gohref+"\")");
            return false;
            break;
        case "iframe":
            var divtarget=$(this).attr('target');
            var iframe = document.getElementById("ajaxframe");   
            if (!$(divtarget).is('div')){
                divtarget="#main";
            }
            if ($(this).attr('append')!='true') $(divtarget).empty();
            iframe.src=this.href;
            $('#ajaxframe').clone().width($(divtarget).width()).height($(divtarget).height()).prependTo($(divtarget));
            return false;
        break;
        default:
            return true;
        }
    });
 
    obj.find("a[href='#']").click(function(){
        return false;
    });
    obj.find(".popmenu").click(function(){
    popclass='.'+($(this).attr('alt')?$(this).attr('alt'):'tooltips');
    $(this).parent().children(popclass).slideDown('fast').css('z-index',999999)
    .click(function(){
        $(this).slideUp('fast');
        $(this).parent().children('#popoverlap').remove();
    });
    $("<div id='popoverlap' />").css({position:'absolute', 
            left:'0px', 
            top:'0px', 
            background:'transparent',
            width: $(document).width()+'px', 
            height: $(document).height()+'px'})
    .css("z-index",999998)
    .appendTo($(this).parent())
    .click(function(){
        $(this).parent().children(popclass).slideUp('fast');
        $(this).remove();
    });
    });
    obj.attr('compiled','compiled');
    return true;
  
}// end compile


function xmltypeparser(type, text)
{
    if (type=='datetime'){
            return regularTimestamp(text,'',true);
    }
    
    try{
    if (regme = type.match(/^enum\((.*)+\)$/ig))
    {
        var regstr=regme[0];
        regstr=regstr.substring(5,regstr.length-1);
        enumtxt=regstr.split(',');
        return enumtxt[parseInt(text,10)];
    }
    } catch(e){return '空';}
    return text;
}

function getxmldata(url,callback){
    FlashRequest.get(url, '', '', '', function (data) {
        if (callback) callback(data);
    });
}

function xmltemplate(url,otpl){
    xmlrs=new Object();
    try{
        $.ajax({
            type: "GET",
            cache: false,
            dataType: "xml",
            url: url,
            success: function(xml){
            $(xml).find('item').each(function(){
                    tags=[];
                    rpl=[];
                    item_len=$(this).children().length;
                    for (i=0;i<item_len;i++){
                        em=$(this).children().get(i);
                        tags.push(em.tagName);
                        if ($(em).attr('type')){
                            text=xmltypeparser($(em).attr('type'),$(em).text());
                        } else
                        {
                            text= $(em).text() ? $(em).text() : '(未填写)';
                        }
                        rpl.push(text);
                    }
                    $(otpl).html(tag_replacer($(otpl).html(),tags,rpl));
                    $(otpl).removeAttr('compiled');
                    compile($(otpl));
                });
            }
        });
        return xmlrs;
        }catch(e){
            tags = [];
            rpl = [];
            $(otpl).html(tag_replacer($(otpl).html(),tags,rpl));
            return false;
        }
}

function tag_replacer(src_html,tags,rpl)
{
    while(tags.length>0){
        em_tags='[['+tags.shift()+']]';
        em_rpl=rpl.shift();
        src_html=src_html.replace(em_tags, em_rpl);
    }
    src_html=src_html.replace(/(\[\[([^\]])+\]\])/g, '(保密)');
    return src_html;
}

function getMyFileSize(size){
        if(size > Math.pow(2,80)){
            return Math.round(size/Math.pow(2,80),2)+" YB";
        }else if(size > Math.pow(2,70)){
            return Math.round(size/Math.pow(2,70),2)+" ZB";
        }else if(size > Math.pow(2,60)){
            return Math.round(size/Math.pow(2,60),2)+" EB";
        }else if(size > Math.pow(2,50)){
            return Math.round(size/Math.pow(2,50),2)+" PB";
        }else if(size > Math.pow(2,40)){
            return Math.round(size/Math.pow(2,40),2)+" TB";
        }else if(size > Math.pow(2,30)){
            return Math.round(size/Math.pow(2,30),2)+" GB";
        }else if(size > Math.pow(2,20)){
            return Math.round(size/Math.pow(2,20),2)+" MB";
        }else if(size > Math.pow(2,10)){
            return Math.round(size/Math.pow(2,10),2)+" KB";
        }else{
            return size+" B";
        }
}

function regularTimestamp(timestamp, nowtime, isNormal, showtime){
        timestamp=new Date(parseInt(timestamp,10)*1000);
        if (nowtime) 
        {
            nowtime=new Date(parseInt(nowtime,10)*1000);
        } else
        {
            nowtmp=new Date();
            nowtime=nowtmp.getTime();
        }
        var outputdate=timestamp.getFullYear()+'年'+(timestamp.getMonth()+1)+'月'+timestamp.getDate()+'日';
        var outputtime=timestamp.getHours()+'时'+timestamp.getMinutes()+'分'+timestamp.getSeconds()+'秒';
        if (isNormal)
        {
            if (showtime)
              return outputdate+' '+outputtime;
            else
              return outputdate;
        } else
        {
            delta=Math.ceil((nowtime-timestamp)/1000);
            if (delta<=0)
                return '小于1秒';
            if (delta<=60)
                 return (delta-1)+'秒前';
            if (delta<=3600)
                return (Math.ceil(delta/60)-1)+'分钟前';
            if (delta<=86400)
                return (Math.ceil(delta/3600)-1)+'小时前';
            if (delta<=86400*15)
                return (Math.ceil(delta/86400)-1)+'天前';
            else
                return outputdate; 
        }
    
}

/**
 * 字数递减和限制字数
 * 
 */
function fot(obj,targetid,limit){
    var val=$(obj).val();
    if(val.length > 1){
        var d = $('#'+targetid);
        var c = val.length;
        var len = limit ? limit : 200;
        var xxx = len - c;
        if(c<=len){
            d.html("您还可输入"+xxx+"个字");
        }else{
            $(obj).val(val.substring(0,len));
            showprompt('只能输入'+len+'个字!');
        }
    }
}
// 复制剪切板
function copyToClipboard(txt) {
     if(window.clipboardData) {
             window.clipboardData.clearData();
             window.clipboardData.setData("Text", txt);
     } else if(navigator.userAgent.indexOf("Opera") != -1) {
          window.location = txt;
     } else if (window.netscape) {
          try {
               netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
          } catch (e) {
               showprompt("你的浏览器安全机制拒绝复制，请手动复制!",5000);
               return;
          }
          var clip = Components.classes['_40mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
          if (!clip)
               return;
          var trans = Components.classes['_40mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
          if (!trans)
               return;
          trans.addDataFlavor('text/unicode');
          var str = new Object();
          var len = new Object();
          var str = Components.classes["_40mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
          var copytext = txt;
          str.data = copytext;
          trans.setTransferData("text/unicode",str,copytext.length*2);
          var clipid = Components.interfaces.nsIClipboard;
          if (!clip)
               return false;
          clip.setData(trans,null,clipid.kGlobalClipboard);
     }
     showprompt("地址已复制到剪切板!",5000);
}  

$(function(){
    
    if (!$('#popwindow').length) $('body').append('<div class=vista id=popwindow></div>');
    if (!$('#promptbox').length) $('body').append('<div align="center" style="display:none;" id="prompt-outer"><div class="promptboxinput"><div class="promptboxleft"></div><div class="promptboxright"><div class="close"><a href="javascript:hideprompt()" title="关闭"></a></div><div class="biao"><table  class="promptboxcontent" width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td class="fnw"></td><td class="fn"></td><td class="fne"></td></tr><tr><td class="fw"><div class="fq"></div></td><td class="promptbox-message"><h1 id="promptbox">成功提交!</h1></td><td class="fe">&nbsp;</td> </tr> <tr><td class="fsw">&nbsp;</td><td class="fs">&nbsp;</td><td class="fse">&nbsp;</td></tr></table></div></div></div></div>');
    if (typeof ndcompile == 'undefined' || ndcompile!=1) compile($('body'));
});
(function($){function getCheckedCount(a){var b=0;$('input[name="'+a+'"]').each(function(){try{if($(this).attr('checked')){b++}}catch(e){alert(a)}});return b}function isNumber(a){return(/^-?\d*\.?\d+(e-?\d+)?$/).test(a)}var g={typeMismatch:false,rangeUnderflow:false,rangeOverflow:false,stepMismatch:false,tooLong:false,tooShort:false,equalto:false,patternMismatch:false,valueMissing:false,customError:false,valid:true};var h={typeMismatch:function(a){var b=$(a).attr('wftype');switch(b){case'date':return'请按"年-月-日"的格式填写';case'email':return'输入格式必须为E-mail.';case'number':return'必须输入数字.';case'url':return'必须输入合法的URL.'}},rangeUnderflow:function(a){return'数值不能小于 '+$(a).attr('min')+'.'},rangeOverflow:function(a){return'数值不能大于 '+$(a).attr('max')+'.'},stepMismatch:'递增值不符.',tooLong:function(a){return'字符串长度不能大于 '+$(a).attr('maxlength')+' 字节.'},tooShort:function(a){return'字符串长度不能小于 '+$(a).attr('minlength')+' 字节.'},patternMismatch:function(a){var b=$(a).attr('title');return(b?b:'格式不符')},equalto:function(a){return'两次输入不相同'},valueMissing:'黄色框是必填项目.',customError:function(a){return getWebForms(a).customErrorMessage}};var i={typeMismatch:function(a){var b=a.attr('wftype');var c=a.val();if(c!==''){switch(b){case'email':temail=a.attr('email');if(!temail){temail=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i}return temail.test(c);case'date':tdate=a.attr('date');if(!tdate){tdate=/^(^(\d{4})(\-|\/|\.)\d{1,2}(\-|\/|\.)\d{1,2}$)/i}return tdate.test(c);case'number':case'range':return isNumber(c);case'url':turl=a.attr('url');if(!turl){turl=/(http[s]?|ftp|rtsp|mms):\/\/[^\/\.]+?[\..+\w]/i}return turl.test(c)}}return true},rangeUnderflow:function(a){var b=a.attr('min');if((b!=='')&&isNumber(b)){var c=a.val();if(isNumber(c)){return(Number(b)<=Number(c))}}return true},rangeOverflow:function(a){var b=a.attr('max');if((b!=='')&&isNumber(b)){var c=a.val();if(isNumber(c)){return(Number(b)>=Number(c))}}return true},stepMismatch:function(a){var b=a.attr('step');if(!isNumber(b)){b=1}var c=a.attr('min');if((c==='')||!isNumber(c)){c=a.attr('max')}if((c!=='')&&isNumber(c)){var d=a.val();if(isNumber(d)){return(parseInt((d-c)/b,10)==((d-c)/b))}}return true},tooLong:function(a){var b=a.attr('maxlength');if(b&&(b>0)){return(b>=a.val().length)}return true},equalto:function(a){try{if(a.attr('refer')){var b=$('input[id="'+a.attr('refer')+'"]');var c=a.val();var d=0;if(b.length>0)d=b.length-1;if(c){return(b.get(d).value==c)}}}catch(e){return true}return true},tooShort:function(a){var b=a.attr('minlength');if(b&&(b>0)){return(b<=a.val().length)}return true},patternMismatch:function(a){var b=a.attr('pattern');var c=a.val();if((b||(b===0))&&(c!=='')){var d=new RegExp('^(?:'+b+')$');if(!d.test(c)){return false}}return true},valueMissing:function(a){if(a.attr('required')){switch(a.attr('type')){case'checkbox':case'radio':var b=getCheckedCount(a.attr('name'));if(a.attr('type')=='checkbox'){return(b>=1)}else{return(b==1)}break;default:if($.trim(a.val())===''){return false}break}}return true}};var j=''+':input'+':not(:disabled):not([readonly])'+':not([type="hidden"]):not(:button):not(:reset):not(:submit)';function initializeWebForms(a){var b={willValidate:$(a).willValidate(),validity:$.extend({},g),customErrorMessage:''};$.data(a,'webForms',b);return b}function getWebForms(a){var b=$.data(a,'webForms');if(b===undefined){b=initializeWebForms(a)}return b}function validate(a,b){var c=$(a);b.validity.valid=!b.validity.customError;$.each(i,function(e,f){b.validity.valid=!(b.validity[e]=!(f(c)))&&b.validity.valid})}function getValidationMessage(a,b){var c=$.extend({},b.validity);delete c.valid;var d='';$.each(c,function(e,v){if(v){if(typeof h[e]=='string'){d+=h[e]+"\n"}else if($.isFunction(h[e])){d+=h[e](a)+"\n"}}});return $.trim(d)}$.extend({webForms:{beforeValidate:function(a){},errorHandler:function(a){},validHandler:function(a){},validationMessages:function(a){$.extend(h,a)}},isDefaultSubmit:function(a){return a===$(a.form).find(':submit:first')[0]},isIndeterminate:function(a){return a.type=='radio'&&getCheckedCount(a.name)===0}});$.extend($.expr[':'],{indeterminate:'jQuery.isIndeterminate(a)','default':'jQuery.isDefaultSubmit(a) || a.defaultChecked || a.defaultSelected',valid:'jQuery(a).validity().valid',invalid:'!jQuery(a).validity().valid','in-range':'!jQuery(a).validity().typeMismatch '+'&& !jQuery(a).validity().rangeUnderflow '+'&& !jQuery(a).validity().rangeOverflow','out-of-range':'jQuery(a).validity().rangeUnderflow '+'|| jQuery(a).validity().rangeOverflow',required:'jQuery(a).attr("required")',optional:'/input|textarea/i.test(a.nodeName) '+'&& !/hidden|image|reset|submit|button/i.test(a.type) '+'&& !jQuery(a).attr("required")','read-only':'jQuery(a).is("[readonly]")','read-write':'!jQuery(a).is("[readonly]")'});$.fn.extend({willValidate:function(){return this.is(j)},validity:function(){if(this.length){return getWebForms(this[0]).validity}},setCustomValidity:function(b){b=b||'';var c=!!b;return this.each(function(){var a=getWebForms(this);a.customErrorMessage=b;a.validity.valid=!(a.validity.customError=c);for(e in i){a.validity.valid=a.validity.valid&&!a.validity[e]}$.data(this,'webForms',a)})},checkValidity:function(){if(this.length){var a=this[0];$.webForms.beforeValidate(a);if($(a).is('form')){var b=true;$(j,a).each(function(){b=$(this).checkValidity()&&b});return b}else{var c=getWebForms(a);if(!c)return true;if(c.willValidate){validate(a,c);if(c.validity.valid){return $.webForms.validHandler(a)}else{if($(a).triggerHandler('invalid')!==false){$.webForms.errorHandler(a)}}return c.validity.valid}}}},validationMessage:function(){var a='';if(this.length){var b=getWebForms(this[0]);if(!b.validity.valid){a=getValidationMessage(this[0],b)}}return a}});$(document).ready(function(){var d;function processData(a){var b=$(a);if(b.attr('xmlns')!='http//www.w3.org/1999/xhtml'){return}if(b.attr('wftype')!='incremental'){d.empty()}var c=d.val();b.children('option').each(function(){d.append(this)});d.val(c)}$('select[data]').each(function(){d=$(this);var a=d.attr('data');a=/^data:/.test(a)?unescape(a.substring(a.indexOf(',')+1)):$.ajax({url:a,async:false}).responseText;processData(a)})});$.webforms=$.webForms})(jQuery);
$.extend($.webForms,{beforeValidate:function(elem){var tipsobj=$(elem).parent().parent().find('.forminstant');if(!$(elem).attr('tips')&&!tipsobj.hasClass('formerror')&&!tipsobj.hasClass('formright')){$(elem).attr('tips',tipsobj.html())}},errorHandler:function(elem){$(elem).addClass('error');if($(elem).val()=='')return true;var tipsobj=$(elem).parent().parent().find('.forminstant');if(tipsobj.length){tipsobj.addClass('formerror').html('<div class="check-error"></div><h1>'+$(elem).validationMessage()+'</h1>')}tipsobj.removeClass('formright');if($(elem).parents().find('.ajaxerror').length){$($(elem).parents().find('.ajaxerror').get(0)).html($(elem).validationMessage()).fadeIn('fast')}},validHandler:function(elem){var tipsobj=$(elem).parent().parent().find('.forminstant');if($(elem).attr('href')){if($(elem).attr('type')=='text'&&$(elem).attr('oldvalue')==$(elem).val()){if($(elem).attr('valid')=='true')return true;else return false};if($(elem).val()=='')return true;$.get($(elem).attr('href'),elem.name+"="+elem.value,function(data){json=JsonAction(data);$(elem).attr('oldvalue',$(elem).val());if($(elem).parent().parent().find('.forminstant').length)$(elem).parent().parent().find('.forminstant').html('<h1>'+json.data+'</h1>');else if($(elem).parents().find('.ajaxerror').length)$($(elem).parents().find('.ajaxerror').get(0)).html('<h1>'+json.data+'</h1>').fadeIn('fast');if(json.status){$(elem).attr('valid','true');tipsobj.removeClass('formerror').addClass('formright')}else{$(elem).attr('valid','false');tipsobj.removeClass('formright').addClass('formerror')}});if($(elem).attr('valid')=='true')return true;else return false}else{$(elem).removeClass('error');$(elem).attr('valid','true');tipsobj.removeClass('formerror').addClass('formright');return true}}});function initFormValidation(elem){$("form[valid]",$(elem)).bind('submit',function(){var formvalid=$(this).checkValidity();if(formvalid)$(this).attr('valid','true');return formvalid});$(':input[type!="submit"][type!="button"]',$(elem)).focus(function(){$(this).addClass('inputFocus')});$(':input[type!="submit"][type!="button"]',$(elem)).blur(function(){$(this).removeClass('inputFocus')});$('input[valid],textarea[valid]',$(elem)).focus(function(){var tipsobj=$(this).parent().parent().find('.forminstant');if($(this).attr('tips')&&$(this).val()==''){tipsobj.removeClass('formerror').removeClass('formright').html($(this).attr('tips'))}});$('input[valid],textarea[valid]',$(elem)).blur(function(){if($(this).attr('type')=='text'&&$(this).attr('oldvalue')==$(this).val()){if($(this).attr('valid')=='true')return true};var re=$(this).checkValidity();if(re)$(this).attr('valid','true');if($(this).val()!='')$(this).attr('oldvalue',$(this).val());if($(this).find("input[valid][valid!='true'],textarea[valid][valid!='true']").length==0)$("form[valid]",$(elem)).attr('valid','true');return re})}
