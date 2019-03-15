$(function(){
	//判断状态
	var user_status_api ='sso.php@m=User&a=init';
	$.getScript(user_status_api, function(data){
		if(nd_status==1)
		{
			$(".login-pop").hide();
			$(".login-stuts").show().attr('src','../../user.nandu.com/avatar.php@uid='+nd_uid+'&size=small');	
		}

		
	})

    //点击弹出登录框
    $(".login-pop").click(function(){	
    	$("#shade").show().height($(document).height());
		$("#lognlayer").css('left',($(window).width()-286)/2);
		$("html,body").animate({'scrollTop':0},800);
	  	$("#lognlayer").show().animate({'top':'200px'},500);
    })

    //关闭登录层
	$(".pop-close").click(function(){
		$("#lognlayer").animate({'top':'-162px'},500,function(){$(this).hide()});
	   	$("#shade").hide();
	})


	//点击登录框登录
	$('#post_login').click(function(){
		var email=$('#email').val();
		var password = $('#password').val();
		var login_api = 'app_sso.php@m=IUser&a=login&';
		var login_url = login_api+'email='+email+'&password='+password;
		if(email == '' || password=='')
		{
			alert('请输入您的用户名和密码');
		}
		if(email!='' && password!='')
		{
			$.getJSON(
				login_url,
				function(data){
					if(data.status==1){
						
						$("#shade,#lognlayer,.login-pop").hide();
						$(".login-stuts").show().attr('src','../../user.nandu.com/avatar.php@uid='+data.uid+'&size=small');	
						//判断是否评论框后的用户名显示
						if($(".tie-post").length>0)
						{
							$(".result").show();
							$(".nd_nickname").html(data.username);
							$("#pre_login").hide();	
						}
					

					}else{
						alert('登录失败:'+data.message);
					}


				}
			);
		}
		
	});
	

	/*文本输入框的处理*/
	$("#email").focus(function(){
		if($(this).next("span").html('')=='邮箱')
		{
			$(this).next("span").html('');
		}
	})

	$("#password").focus(function(){
		if($(this).next("span").html('')=='密码')
		{
			$(this).next("span").html('');
		}
	})

	//第三方登录链接
	$("#sina_login").attr('href','../../user.nandu.com/passport/index.php@m=user&a=goto_oauth2&type=sina');
	$("#qq_login").attr('href','../../user.nandu.com/passport/index.php@m=user&a=goto_oauth2&type=qq');

})