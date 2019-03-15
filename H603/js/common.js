$(function () {
	
	//页面加载完成后隐藏地址栏
	window.onload=function(){  
		if(document.documentElement.scrollHeight <= document.documentElement.clientHeight) {  
			bodyTag = document.getElementsByTagName('body')[0];  
			bodyTag.style.height = document.documentElement.clientWidth / screen.width * screen.height + 'px';  
		}  
		setTimeout(function() {  
			window.scrollTo(0, 1)  
		}, 0);  
	};

	  //首页点击加载更多
	var currentpage=2;
		function indexAddMore(_Id){
			$(_Id).find('span').click(function(){
				var $me = $(this);
				if(!$me.hasClass('loading')){
					var t = $me.html();
					$me.addClass('now-loading').html('<b class="loading"></b>正在努力加载中，请稍后...');
					
					
					
					
					var getshtml=$(".list-thelist").html();
					var data = { 'ajaxpage': currentpage,'ajaxtype': 'indexmore' };
					$.getJSON("ajax.php?jsoncallback=?",
						data,
						function (json) {
							try
							{
								var jsonlist='';
								for(var i=0;i<json.list.length;i++)
								{
									jsonlist+='<li class="clearfix">';
									jsonlist+='  <a href="content.php@id='+json.list[i].id+'&boardid='+json.list[i].boardId+'">';
									if(json.list[i].imageUrl.length>6)
									{
										jsonlist+='<div class="thumb"><img src="'+json.list[i].imageUrl+'" width="70" height="70"></div>';
									}
									jsonlist+='    <h2 class="news-Title">'+json.list[i].title+'</h2>';
									jsonlist+='   <p class="news-Intro"><span class="user"><b class="mr10">'+json.list[i].postusername+'</b><b>'+json.list[i].lastposttime+'</b></span><span class="num">'+json.list[i].child+'/'+json.list[i].hits+'</span></p>';
									jsonlist+='   </a>';
									jsonlist+=' </li>';
								}
								$(".list-thelist").html(getshtml+jsonlist);
								
								$me.removeClass('now-loading').html(t);
							}
							catch(e)
							{
								$me.removeClass('now-loading').html('暂无更多内容！');
							}
						}
					);
					currentpage++;
					
					
					
					
					
				}
			});
		}
		//加载更多信息：全部
		indexAddMore('#addMore');
		getad();
		function getad()
		{
			var data = { 'ajaxtype': 'indexad' };
			$.getJSON("http//3g.kdnet.net/touch/ajax.php?jsoncallback=?",
				data,
				function (json) {
					try
					{
						var jsonlist='';
						for(var i=0;i<json.list.length;i++)
						{
							jsonlist+='<div class="item"><a href="content.php@id='+json.list[i].id+'&boardid='+json.list[i].boardid+'"><img src="'+json.list[i].imageurl+'"><span>'+json.list[i].title+'</span><b></b></a></div>';
							
						}
						$("#owl-demo").html(jsonlist);
						
							//活动轮播图
	$("#owl-demo").owlCarousel({
		  autoPlay: 3000, //Set AutoPlay to 3 seconds
		  slideSpeed : 300,
		  paginationSpeed : 400,
		  singleItem:true
	 
	  });

					}
					catch(e)
					{
					}
				}
			);
		}

	  //列表页点击加载更多
		function listAddMore(_Id){
			$(_Id).find('span').click(function(){
				var $me = $(this);
				if(!$me.hasClass('loading')){
					var t = $me.html();
					$me.addClass('now-loading').html('<b class="loading"></b>正在努力加载中，请稍后...');
					
					
					
					
					var getshtml=$(".list-thelist").html();
					var data = { 'lastposttime': lasttime,'ajaxtype': 'listmore','boardid':boardid };
					//alert(escape(data.lastposttime));
					$.getJSON("ajax.php?jsoncallback=?",
						data,
						function (json) {
							try
							{
								var jsonlist='';
								for(var i=0;i<json.list.length;i++)
								{
									jsonlist+='<li class="clearfix">';
									jsonlist+='  <a href="content.php@id='+json.list[i].id+'&boardid='+json.list[i].boardId+'">';
									if(json.list[i].imageUrl.length>6)
									{
										jsonlist+='<div class="thumb"><img src="'+json.list[i].imageUrl+'" width="70" height="70"></div>';
									}
									jsonlist+='    <h2 class="news-Title">'+json.list[i].title+'</h2>';
									jsonlist+='   <p class="news-Intro"><span class="user"><b class="mr10">'+json.list[i].postusername+'</b><b>'+json.list[i].lastposttime+'</b></span><span class="num">'+json.list[i].child+'/'+json.list[i].hits+'</span></p>';
									jsonlist+='   </a>';
									jsonlist+=' </li>';
								}
								$(".list-thelist").html(getshtml+jsonlist);
								lasttime=json.list[json.list.length-1].lastposttime;
								$me.removeClass('now-loading').html(t);
							}
							catch(e)
							{
								$me.removeClass('now-loading').html('暂无更多内容！');
							}
						}
					);
					currentpage++;
					
					
					
					
					
				}
			});
		}
		//列表加载更多信息：全部
		listAddMore('#listAddMore');
		

	//返回头部
	$(".gotop a").click(function(){
	var rel=$(this).attr("rel");
	var pos=$(rel).offset().top;
	$("html, body").animate({scrollTop:pos},500);
	});
	//header高度计算
	//$(".no-header").height($(".header").outerHeight());
	
	//关闭app下载
	$('.close').click(function(){
		$(this).parent('.appdown').fadeOut();
	});
	
});

// 提示框 -----------------------------------------------------------------------------------------------------------------
	
//弹出公用提示框：褐色。默认2秒
function showPromptBox(msg,time){
	//如果没有提示框，则新建一个提示框
	if(!$('.reply-succeed-box').length){ $('body').append('<!-- 信息提示 --><section class="reply-succeed-box"><span class="reply-suc">...</span></section>'); }
	var time = time ? time : 2000;
	$('.reply-succeed-box').fadeIn(300);
	$('.reply-suc').html(msg).css({'margin-left':'-'+($('.reply-suc').outerWidth()/2)+'px','margin-top':'-'+($('.reply-suc').height()/2)+'px'});
	setTimeout(function(){
		$('.reply-succeed-box').fadeOut(300);
	},time);
};
// 微博一键分享 
function postToWb(type, boardid, rootid){
	var _url = location.href.toLowerCase();
	
	//var _u = '../testclub.kdnet.net/WeiBo_UploadPic/dispbbs_temp.asp@boardid='+boardid+'&id='+rootid+'&type='+type;	//测试
	var _u = '../club.kdnet.net/WeiBo_UploadPic/dispbbs_temp.asp@boardid='+boardid+'&id='+rootid+'&type='+type;	//正式
	window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}