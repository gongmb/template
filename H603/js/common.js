$(function () {
	
	//ҳ�������ɺ����ص�ַ��
	window.onload=function(){  
		if(document.documentElement.scrollHeight <= document.documentElement.clientHeight) {  
			bodyTag = document.getElementsByTagName('body')[0];  
			bodyTag.style.height = document.documentElement.clientWidth / screen.width * screen.height + 'px';  
		}  
		setTimeout(function() {  
			window.scrollTo(0, 1)  
		}, 0);  
	};

	  //��ҳ������ظ���
	var currentpage=2;
		function indexAddMore(_Id){
			$(_Id).find('span').click(function(){
				var $me = $(this);
				if(!$me.hasClass('loading')){
					var t = $me.html();
					$me.addClass('now-loading').html('<b class="loading"></b>����Ŭ�������У����Ժ�...');
					
					
					
					
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
								$me.removeClass('now-loading').html('���޸������ݣ�');
							}
						}
					);
					currentpage++;
					
					
					
					
					
				}
			});
		}
		//���ظ�����Ϣ��ȫ��
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
						
							//��ֲ�ͼ
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

	  //�б�ҳ������ظ���
		function listAddMore(_Id){
			$(_Id).find('span').click(function(){
				var $me = $(this);
				if(!$me.hasClass('loading')){
					var t = $me.html();
					$me.addClass('now-loading').html('<b class="loading"></b>����Ŭ�������У����Ժ�...');
					
					
					
					
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
								$me.removeClass('now-loading').html('���޸������ݣ�');
							}
						}
					);
					currentpage++;
					
					
					
					
					
				}
			});
		}
		//�б���ظ�����Ϣ��ȫ��
		listAddMore('#listAddMore');
		

	//����ͷ��
	$(".gotop a").click(function(){
	var rel=$(this).attr("rel");
	var pos=$(rel).offset().top;
	$("html, body").animate({scrollTop:pos},500);
	});
	//header�߶ȼ���
	//$(".no-header").height($(".header").outerHeight());
	
	//�ر�app����
	$('.close').click(function(){
		$(this).parent('.appdown').fadeOut();
	});
	
});

// ��ʾ�� -----------------------------------------------------------------------------------------------------------------
	
//����������ʾ�򣺺�ɫ��Ĭ��2��
function showPromptBox(msg,time){
	//���û����ʾ�����½�һ����ʾ��
	if(!$('.reply-succeed-box').length){ $('body').append('<!-- ��Ϣ��ʾ --><section class="reply-succeed-box"><span class="reply-suc">...</span></section>'); }
	var time = time ? time : 2000;
	$('.reply-succeed-box').fadeIn(300);
	$('.reply-suc').html(msg).css({'margin-left':'-'+($('.reply-suc').outerWidth()/2)+'px','margin-top':'-'+($('.reply-suc').height()/2)+'px'});
	setTimeout(function(){
		$('.reply-succeed-box').fadeOut(300);
	},time);
};
// ΢��һ������ 
function postToWb(type, boardid, rootid){
	var _url = location.href.toLowerCase();
	
	//var _u = '../testclub.kdnet.net/WeiBo_UploadPic/dispbbs_temp.asp@boardid='+boardid+'&id='+rootid+'&type='+type;	//����
	var _u = '../club.kdnet.net/WeiBo_UploadPic/dispbbs_temp.asp@boardid='+boardid+'&id='+rootid+'&type='+type;	//��ʽ
	window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}