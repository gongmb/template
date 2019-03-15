$(document).ready(function(){
	YotimeBookDateTime();//加载订购时间
});
function YotimeBookDateTime(){
	var shopid = $("#shopId").val();
	var ps=$(".productId");
	var pids="";
	$.each($(ps),function(i,pid){
		pids+=","+$(pid).val();
	});
	$.ajax({
	   type: "POST",
	   url: "/shop.do",
	   cache:false,
	   dataType:"json",
	   data:'id='+shopid+'&pids='+pids+'&eventSubmit_ShopStateProduct',
	   success: function(data){
			startDate=data.startDate;
	   		startTime=data.periodStart;
	   		endTime=data.periodEnd;
	   		m_str=startDate+" "+startTime;
			var bookDate_value = setYotimeBookDate(data.dateList);
			if(bookDate_value!=startDate){
  					setYotimeBookTime(data.notTodayTime);
			}else{
				setYotimeBookTime(data.todayTime);
			}
			
			$("#bookDate").change(function(){////改变日期
				$("#bookTime").parent().find(".ui_inner_text").text("选择时间");
				if($(this).val()!=startDate){
					setYotimeBookTime(data.notTodayTime);
				}else{
					setYotimeBookTime(data.todayTime);
				}
			})
	   }
	});
}
///优享家预定日期创建
function setYotimeBookDate(data){
	if($("#bookDate").val()!=""&&$("#bookDate").val()!="undefined"&&$("#bookDate").val()!=null){
		return $("#bookDate").val();
	}
	if(typeof($("#bookDate").get(0).options)!="undefined"){
		$("#bookDate").get(0).options.length=0;
	}
	if(data!=''){
		var firstDate="";
		$.each(data, function(i, item) {
			if(item.split(",").length>=3){
				var item_data = item.split(",");
				$("<option value='"+item_data[0]+"' diff_day='"+item_data[2]+"'>"+item_data[0]+"，"+item_data[1]+"</option>").appendTo($("#bookDate"));
			}
			else{
	            $("<option value='"+item.split(",")[0]+"'>" + item + "</option>").appendTo($("#bookDate"));
			}
            if(i==0){
            	firstDate=item.split(",")[0];
            }
        });
        if(firstDate!=""){
        	setTimeout(function(){
			    $("#bookDate").val(firstDate);
			    $("#bookDate").parent().find(".ui_inner_text").text(firstDate);
			},1);
			
        }
	}
	return $("#bookDate").val();
}
///优享家预定时间创建
function setYotimeBookTime(data){
	if(typeof($("#bookTime").get(0).options)!="undefined"){
		$("#bookTime").get(0).options.length=1;
	}
	var bookTime = $('#bookTime')[0];
	
	var take_way=$("#order_form input[name=take_way]:checked").val();
	if(take_way==1){///上面自提
		bookTime.options.add(new Option("09:00~13:00","09:00~13:00"));
		bookTime.options.add(new Option("13:00~18:00","13:00~18:00"));
		bookTime.options.add(new Option("18:00~21:00","18:00~21:00"));
	}else{
		var time_array = formatBookTime($("#bookDate").val(),data);
		if(time_array!=''){
			$.each(time_array, function(i, item) {
				/*
				var msg ="";
				var style ="";
				if(item.state ==1||item.state ==0){
					msg="空闲";
					style ="green";
				}else if(item.state ==2){
					msg="繁忙";
					style ="red";
				}
				option = new Option(item.time+" "+msg,item.time);
				option.style.color = style;
				*/
				option = new Option(item.time,item.time);
				bookTime.options.add(option);
	        });
		}
		/*
		if(data!=''){
			$.each(data, function(i, item) {
	            bookTime.options.add(new Option(item,item));
	        });
		}
		*/
	}
}

function formatBookTime(dateTime,timeArray){
	var lat=$("#lat").val();
	var lng=$("#lng").val();
	var address = $("#order_form input[name=memberId]:checked");
	var bookingproduct = $("#bookingproduct").val();
	if(lat==''&&lat==''){
		lat = 0.0;
		lng = 0.0;
	}
	var time_array ="";
	$.ajax({
	   type: "POST",
	   url: "/iwm/order.do",
	   cache:false,
	   async: false,
	   dataType:"json",
	   data:'dateTime='+dateTime+'&timeArray='+timeArray+'&lat='+lat+'&lng='+lng+'&eventSubmit_FormatBookTime'+"&bookingproduct="+bookingproduct,
	   success: function(data){
	   		if(data.msg=="ok")
	   			time_array = data.time_array;
		}	   
	});
	return time_array;
}