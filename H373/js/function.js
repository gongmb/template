function get_time(){
	return new Date().getTime();
}
function comment_submit(){
	if($("#weibo").attr("checked")=="checked"){
		var share=1;
	}else{
		var share=0;
	}
	var content= $("#content").val();
	if(content==""){
		$("#text_id").text("内容不能为空");
		return;
	}
	if(content.length>=140){
		$("#text_id").text("评论内容超过140字");
		return ;
	}
	$.ajax({
		url: "xh_comment.php@&doaction=post_comment&"+get_time(),
		type: "POST",
		data:"id="+id+"&cid="+cid+"&content="+content+"&share="+share,
		success: function(return_back){

		    if(return_back==1){
		    	$("#text_id").text("发布成功");
		    	window.location.href="xh_comment_list.php@id="+id+"&type="+type+"&nowpage="+nowpage;
		    }else{
		    	$("#text_id").text("发布失败");
		    	return;
		    }
		}
	 });	
}

function share_weibo(id){
	$.ajax({
		url: "xh_comment.php@&doaction=share_weibo&"+get_time(),
		type: "GET",
		data:"id="+id,
		success: function(return_back){
		    if(return_back==1){
		    	$("#share_weibo_"+id).text("分享成功");
		    }else if(return_back==2){
		    	window.location.href="xh_login.php";
		    }else{
		    	$("#share_weibo_"+id).text("分享失败");
		    }
		    return;
		}
	 });	
}