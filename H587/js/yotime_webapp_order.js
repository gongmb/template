$(document).ready(function(){
	var isWeixing = $("#domain").val()=="weixing";//页面来源
	/*******初始化*******/
    if($("#sh_addr").find("option").length>1){
    	$("#order_form input[name=address]").attr("readonly","readonly");
	}
	/******************/
	$("#yh_code").focusout(function(){
		yh_code_use();
	});
	$(".cancel_yh").find("input").click(function(){
		yh_code_cancel();
	});
	//切换地址 收货人信息赋值
	$("#sh_addr").change(function(){
		var shobj = $("div.sh_info");
		//$("#sh_dh_isSame").attr("checked",false);
		$(".address").removeAttr("readonly");
		
		clear_dh_info();
		if($(this).val()!=""){
			if($(this).val()!=-1){
				var sh_name = $(this).find("option:selected").attr("sh_name");
				var sh_phone = $(this).find("option:selected").attr("sh_phone");
				var sh_addr = $(this).find("option:selected").attr("sh_addr");
				
				$("#order_form input[name=contactName]").val(sh_name);
				$("#order_form input[name=contactNumber]").val(sh_phone);
				$("#order_form input[name=address]").val(sh_addr);
				$(".address").val(sh_addr)
				$(".address").attr("readonly","readonly");
				$("#order_form input[name=lat]").val("");
				$("#order_form input[name=lng]").val("");
				
			}else{//新增地址
				$("#order_form input[name=contactName]").val("");
				$("#order_form input[name=contactNumber]").val("");
				$("#order_form input[name=address]").val("");
				$(".address").val("");
				$(".address").removeAttr("readonly");
				$("#order_form input[name=lat]").val("");
				$("#order_form input[name=lng]").val("");
			}
		}
	});
	//初始订货人信息
	function clear_dh_info(){
		var dhobj = $("div.dh_info");
		var linkman = $("#user_usname").val();
		var telephone = $("#user_usphone").val();
		$("#order_form input[name=linkman]").val(linkman);
		$("#order_form input[name=telephone]").val(telephone);
	}
	//订货 收货是否一样按钮
	$("#sh_dh_isSame").change(function(){
		clear_dh_info();
		if($("#sh_dh_isSame:checked").length==1){
			var sh_name = $("#order_form input[name=contactName]").val();
			var sh_phone = $("#order_form input[name=contactNumber]").val();
			if(!strIsEmpty(sh_name)&&!strIsEmpty(sh_phone)){
				var dhobj = $("div.dh_info");
				$("#order_form input[name=linkman]").val(sh_name);
				$("#order_form input[name=telephone]").val(sh_phone);
			}
		}
	});
	//提交订单
	$(".submitForm").click(function(){
	 	if(confirm('是否确认提交订单')){
	 		/**订单验证***/
		 	$(".submitForm").hide();
		 	$(".submitWait").show();
		 
		 	var validate_info = validateOrder();
		 	if(isWeixing){
		 		if(validate_info.user&&validate_info.user.is_login==0){
		 			alert("用户未登录");
			 		$(".submitForm").show();
			 		$(".submitWait").hide();
		 			return false;
		 		}
		 	}
		 	if(validate_info.msg!=""){
		 		if(validate_info.user&&validate_info.user.msg!=""){//用户验证未通过
		 			/*
		 			if(validate_info.user.state == -1){//未注册用户 手机号码已被绑定
		 				if(confirm(validate_info.user.msg+",请登录或更换手机号码")){
		 				
		 				}
		 			}
		 			*/
		 			alert(validate_info.user.msg);
		 		}
		 		else if(validate_info.address){//地址验证未通过
		 			if(validate_info.address.state = -1){//地址未定位
		 				if(confirm("该地址未定位，是否进行定位")){
		 					if(isWeixing){
			 					mapLocated();
		 					}else{
		 						mapLocated(json2str(validate_info));
		 					}
		 				};
		 			}else{
		 				alert(validate_info.address.msg);
		 			}
		 		}else{	
		 			alert(validate_info.msg);
		 		}

		 		$(".submitForm").show();
		 		$(".submitWait").hide();
		 		return false;
		 	}

		 	/***********/
		 	$("#order_form input[name=__method]").val("AddOrder");
			$("#order_form").submit();
	 	}
	});
	//地址输入框离开焦点
	$("#order_form input[name=address]").blur(function(){
		var areaid = $("#areaid").val();
		var address = $(this).val();
		$.ajax({
		   type: "POST",
		   url: "/webaddress.do?eventSubmit_SplitAddressInfo?fresh=" + Math.random(),
		   cache:false,
		   dataType:"json",
		   data:'areaid='+areaid+'&areaname='+address,
		   success: function(data){
				$("#order_form input[name=areaid]").val(data.areaid);
				$("#order_form input[name=lat]").val(data.lat);
				$("#order_form input[name=lng]").val(data.lng);
		   }
		});
	});
	/*******地址输入框********/
	$('.address').keyup(function(){
		$("#order_form input[name=address]").val($(this).val());
		$("#mapAddress").val($(this).val());
	});
	$('.address').focus(function(){
		$("#order_form input[name=address]").val($(this).val());
		$("#mapAddress").val($(this).val());
	});
	$('.address').focusout(function(){
		$("#order_form input[name=address]").val($(this).val());
		$("#mapAddress").val($(this).val());
	});
	$(".prds_radio[name=psPlaceId]").click(function(){
		$("#order_form input[name=address]").val($(this).attr("addr"));
	});
	
	/*******微信js代码块********/
	/*微信百度地图保存地址坐标点击事件
	 */
	$("#locate").click(function(){
		if($("#lat").val()=="" || $("#lng").val()==""){
			if(!confirm("未在地图上定位，是否返回")){
				return;
			}
		}else{
			updateLatLng();
		}
	});
	/*百度地图自适应高宽
	 */
	(function(){
		$("div.map").width($(window).width());
		$("div.map").height($(window).height());
		$("#map_canvas").width($(window).width());
		$("#map_canvas").height($(window).height());
	})();
	
	function mapLocated(){
		$("#order_form").hide();
		$("#baiduMap").show();
	}
	$("#navbar").change(function(){
		window.location.href=$(this).val();
	});
	/*******微信js结束********/
});
function loadCart(){
	$.ajax({
		   type: "POST",
		   url: "/order/cart.do?fresh=" + Math.random(),
		   cache:false,
		   dataType:"json",
		   data:'eventSubmit_LoadCartYotime',
		   success: function(data){
		   		if(data.msg == "ok"){
			   		var cart = data.cart;
			   		$(".jz_helptxt").html("合计¥"+total_money(data.cart));
		   		}
		   }
	});
}
function updateLatLng(){
	var memberid = $("#order_form select[name=memberId]").val();
	if(memberid>0){
		$("#order_form input[name=__method]").val("SaveNewMember");
		var form_values = $("#order_form").serialize();////得到from中的所值
		$.ajax({
		   type: "POST",
		   url: "/newOrder.do?fresh=" + Math.random(),
		   cache:false,
		   async: false,
		   dataType:"text",
		   data:form_values,
		   success: function(data){
		   		if(data=="ok"){
		   			$(".address").val($("#mapAddress").val());
		   			$("#order_form").show();
		   			$("#baiduMap").hide();
		   		}else{
		   			alert(data);
		   		}
		   }
		});
	}else{
		$(".address").val($("#mapAddress").val());
		$("#order_form").show();
		$("#baiduMap").hide();
	}
}
//订单验证
function validateOrder(){
	$("#order_form input[name=__method]").val("ValidateOrder");
	var form_values = $("#order_form").serialize();////得到from中的所值
	
	var validate_info;
	$.ajax({
	   type: "POST",
	   url: "/newOrder.do?fresh=" + Math.random(),
	   cache:false,
	   async: false,
	   dataType:"json",
	   data:form_values,
	   success: function(data){
	   		validate_info = data;
	   }
   });
   return validate_info;
}
//使用优惠码
function yh_code_use(){
	if($.trim($("#yh_code").val())!=""){
		$.ajax({
		   type: "POST",
		   url: "/order/yh.do?fresh=" + Math.random(),
		   cache:false,
		   async: false,
		   dataType:"json",
		   data:'yhidCode='+$("#yh_code").val()+'&eventSubmit_YHCodeYotime',
		   success: function(data){
		   		var msg=quan_msg(data.codeId,data);		
		   		if(data.msg!="")msg=data.msg;
				if(data.codeId>0){
					$(".use_yh").hide();
					$(".cancel_yh").show();
					$(".cancel_yh").find("span").html("成功使用 "+data.codeNote);
				}else{
					alert(msg);
				}
		   }
	   });
   }
}
//取消优惠码
function yh_code_cancel(){
	$.ajax({
	   type: "POST",
	   url: "/order/yh.do?fresh=" + Math.random(),
	   cache:false,
	   dataType:"json",
	   data:'eventSubmit_CancelCouponYotime',
	   success: function(cart){
			$(".use_yh").show();
			$(".cancel_yh").hide();
	   }
   });		
	return false;		
}
//返回优惠券状态
function quan_msg(id,data){
	var msg="";
	switch(id)
	{	
	   case -7:
	     msg="该城市不支持此优惠券";
	     break;
	   case -6:
	     msg="购物车没有产品，请添加产品";
	     break;
	   case -5:
	     msg="您已使用优惠券，不能与优惠码同时使用！";
	     break;
	   case -4:
	     msg="没有对应的优惠产品！请返回店铺选择对应的优惠产品或者不使用优惠码直接完成下单";
	     break;
	   case -3:
	     msg="该店铺不支持使用该优惠码！";
	     break;
	   case -2:
	     msg="该优惠码已使用过了！";//找不到对应的活动，或者当前时间不在活动有效期内
	     break;
       case -1:
	     msg="请检查优惠码输入是否有误！";
	     break;
	   case 0:
	     msg="该优惠券的使用期限为"+data.start+"至"+data.end;
	     break;					     					    
	}	
	return msg;	
}
function json2str(o) { 
	var arr = []; 
	var fmt = function(s) { 
	if (typeof s == 'object' && s != null) return json2str(s); 
	return /^(string|number)$/.test(typeof s) ? '"' + s + '"' : s; 
	} 
	for (var i in o) arr.push('"' + i + '":' + fmt(o[i])); 
	return '{' + arr.join(',') + '}'; 
}

//悠享家订单处理（例配送费）
function ps_order_format(){
	$.ajax({
		   type: "POST",
		   url: "/yotime/cart.do",
		   cache:false,
		   dataType:"json",
		   data:'eventSubmit_PsOrderFormat&take_way='+$("#order_form input[name=take_way]").val(),
		   success: function(data){}
	 });
}