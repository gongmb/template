function ding(id){
	$("#ding_"+id).text("已投票");
	$.ajax({
		url: "xh_ding.php@id="+id+"&"+get_time(),
		type: "GET",
		success: function(result){
			/*
		    if(result=="1"){
				$("#ding_"+id).text("已投票");
		    }
		    */
		}
	 });
	$.ajax({
		url: "../www.qiyigoo.com/xiaohua/xh_ding.php@id="+id+"&"+get_time(),
		type: "GET",
		success: function(result){
		}
	 });	
}
function get_time(){
	return new Date().getTime();
}