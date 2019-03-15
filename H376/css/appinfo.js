
$(function(){
	var appType = $("#appType_id").val();
	var appid = $("#app_id").val();
	
	$("#morecontents").toggle(function(){
		$("#contents").empty().html($("#allcontents").html());
		$(this).removeClass('introduct2');
		$(this).addClass('introduct1');
		$("#t_id").text("收起");
	},function(){
		$("#contents").empty().html($("#subcontents").html());
		$(this).removeClass('introduct1');
		$(this).addClass('introduct2');
		$("#t_id").text("全部");
	});
	
	$.getJSON("count.xhtml?appid="+appid+"&appType="+appType+"&t="+Math.random(),function(data){
		if(data.code==1){
			var total = data.fun+data.notfun;
			if(data.ccn>0){
				$("#plcn_id").text("评论("+data.ccn+")");
			}else{
				$("#plcn_id").text("评论");
			}
			if(total>0){
				$("#like_id").text(parseInt((data.fun/total)*100)+"%喜欢");
				$("#f_id").text(parseInt((data.fun/total)*100)+"%");
				$("#nf_id").text(parseInt((data.notfun/total)*100)+"%");
				$("#f_id").attr("num",data.fun);
				$("#nf_id").attr("num",data.notfun);
			}

		}
	})
	

})

	function addcomment(){
			var type = $("#appType_id").val();
			var appid = $("#app_id").val();
			var content = $("#content_id").val();
			var url = $("#req_id").val()+"&t="+Math.random();
			if(content==null|| content==""){
				alert("评论内容不能为空！");
				return false;
			}
			$.getJSON("addcomment.xhtml?t="+Math.random(), 
					{type:type,appid:appid,content:content},
					  function(data){
					   if(data==1){
						   alert("发表成功");
						   $("#content_id").val("")
							$.get(url,function(html){
								$("#comment_id").html(html);
							})
							$.getJSON("count.xhtml?appid="+appid+"&appType="+type+"&t="+Math.random(),function(data){
								if(data.code==1){
									$("#plcn_id").text("评论("+data.ccn+")");
								}
							})							
						 }else{
							 alert("发表失败");
						 }
					  });
		}
	
function setTab(n){
	if(n==1){
		$("#one1").removeClass('hover');
		$("#one1").addClass('current_sidebar');
		$("#one2").removeClass('current_sidebar');
		$("#one2").addClass('hover');
		$("#con_one_1").show();
		$("#con_one_2").hide();
		$("#allp_id").show();
	}else{
		$("#one2").removeClass('hover');
		$("#one2").addClass('current_sidebar');
		$("#one1").removeClass('current_sidebar');
		$("#one1").addClass('hover');
		$("#con_one_2").show();
		$("#con_one_1").hide();
		$("#allp_id").hide();
		//好玩还是不好玩
		var funlen = $("#color_id").width()-3;
		var fun = $("#f_id").attr("num")*1;
		var notfun = $("#nf_id").attr("num")*1;
		var fcn = (fun/(fun+notfun))*funlen;
		var nfcn = (notfun/(fun+notfun))*funlen;
		$("#fun_id").animate({width:fcn+"%"}, 1000);
		//$("#notfun_id").animate({width:nfcn+"%"}, 1000);	
		//评论
		var url = $("#req_id").val()+"&t="+Math.random();
		$.get(url,function(html){
			$("#comment_id").html(html);
		})
		
	}
}

function fun(n){
	var appid = $("#app_id").val();
	var funlen = $("#color_id").width()-3;
	$.getJSON("opinion.xhtml?t="+Math.random(), 
			{appid:appid,opinion:n},
			  function(data){
			   if(data.code==1){
					$("#f_id").text(parseInt((data.fun/(data.fun+data.notfun))*100)+"%");
					$("#nf_id").text(parseInt((data.notfun/(data.fun+data.notfun))*100)+"%");
					
					var fcn = (data.fun/(data.fun+data.notfun))*funlen;
					var nfcn = (data.notfun/(data.fun+data.notfun))*funlen;
					$("#fun_id").animate({width:fcn+"%"}, 1000);
					$("#like_id").text(parseInt((data.fun/(data.fun+data.notfun))*100)+"%喜欢");
					//$("#notfun_id").animate({width:nfcn+"%"}, 1000);
				 }
			  });
}

function morecomment(){
	$("#moreapp").hide();
	$("#loading").show();
	var nowpi = parseInt($("#moreapp").attr("pi"));
	var url = $("#moreapp").attr("url") + "pi=" + nowpi;
	var newpi = $("#moreapp").attr("pi")*1 + 1;
	$.get(url,function(html){
		$('#showMore').remove();
		$("#loading").hide();
		$("#comment_id").append(html);
		$('#showMore').show();
	})
}
