$(function(){
	
	$(".switchIndex").click(function(){
		$(".switchIndex").removeClass("selected");
		$(this).addClass("selected")
		var index = $(this).attr("index");
		if(index<=0){
			$(".productAd").show();
			$(".productList").hide();
		}else{
			switchIndex("/yotime/app/list_product.vm?orderBy="+index);
			$(".productAd").hide();
			$(".productList").show();
		}
	});
	//show select
	$(".ui_select").find("select").change(function(){//
		var seVal=$(this).find("option:selected").text();
		$(this).parent().find(".ui_inner_text").text(seVal);
		if($(this).is("#sh_addr"))
			$("#address").val(seVal);
	});

	//shopcar.html car_edit
	$(".car_edit").click(function(){
		if($(this).hasClass("hide"))
		{
			$(this).text("取消").removeClass("hide").addClass("show");
			$(".car_delbtn").show();
		}
		else
		{
			$(this).text("编辑").removeClass("show").addClass("hide");
			$(".car_delbtn").hide();
		}		
	});

	//my_orderinfo.html showProimg
	$(".my_odifImgCtrl").click(function(){
		if($(".my_odifImg").is(":visible"))
		{
			$(".my_odifImg").hide();
			$(this).find("i").addClass("icon_arrowDown").removeClass("icon_arrowUp");
		}
		else
		{
			$(".my_odifImg").show();
			$(this).find("i").addClass("icon_arrowUp").removeClass("icon_arrowDown");
		}
	});
	
	//送货上门||自提
	$(".addrstype > .btn").click(function(){
		$(this).addClass("selected").siblings("a.btn").removeClass("selected");
		$("#order_form input[name=take_way]").val($(this).attr("take_way"));
		if($(this).attr("take_way")==0){//送货上门
			$("#order_form input[name=address]").val($(".address").val());
		}else if($(this).attr("take_way")==1){//自提
			$(".prds_radio[name=psPlaceId]").each(function(i){
				if(i==0){
					$(this).click();
				}
			});
		}
		var _index=$(this).index();
		$(".adrsWrap .box_address:eq("+_index+")").addClass("show").siblings("section.box_address").removeClass("show");
		ps_order_format();
	});
	
	//刷新时 list 下页页数值的初始化
	$(".list_nextPage").val(Number(2));
	//list记录加载
	$(".list_loadmore").click(function(){
		$(".loadmore").hide();
		$(".loading").show();
		var load_type = $(this).attr("load_type");
		var page = $(".list_nextPage").val();
		if(load_type=="order"){
			$(".add_show_order:last").load("/yotime/app/my_orderlist.vm?page="+page+" #my_order li",function(){
				$("#my_order").append("<div class='add_show_order' ></div>");
				$(".loadmore").show();
				$(".loading").hide();
			});
		}
		if(load_type=="pcomment"){
		    var itemId = $(".list_getpid").val();
			$(".add_show_pcomment:last").load("/yotime/app/product_feedback.vm?itemId="+itemId+"&page="+page+" #ps_comment li",function(){
				$("#ps_comment").append("<div class='add_show_pcomment' ></div>");
				$(".loadmore").show();
				$(".loading").hide();
			});
		}
		$(".list_nextPage").val(Number(page)+Number(1));
	});
	
	$(".addcart").click(function(){
		if($(".prds_radio").length>0&&$(".prds_radio:checked").length==0){
			alert("请选择子产品");
			return false;
		}
		var param = 'productId:'+$(".prds_radio:checked").val()+',add:0'
		addCart(param);//加入购物车
	});
	
	/***********购物车操作************/
	$(".plus").click(function(){
		var amountInput = $(this).prev().find("input");
		var amount = parseInt($.trim(amountInput.val()));
		amountInput.val(amount+1);
		//var param = '{"productId":"'+$(amountInput).attr("pid")+'","amount":"'+$(amountInput).val()+'","type":"normal"}';
		//sendToApp("changeAmount","changeAmount",param);
		changeAmount(amountInput,"normal");
	});
	$(".minus").click(function(){
		var amountInput = $(this).next().find("input");
		var amount = parseInt($.trim(amountInput.val()));
		if(amount>1){
			amountInput.val(amount-1);
			//var param = '{"productId":"'+$(amountInput).attr("pid")+'","amount":"'+$(amountInput).val()+'","type":"normal"}';
			//sendToApp("changeAmount","changeAmount",param);
			changeAmount(amountInput,"normal");
		}
		if(amount==1){
			delProduct($(this).parent().prev(".car_delbtn"));
		}
	});
	$(".text-amount").keypress(function(event){
		var key = event.keyCode || event.which || event.charCode;
		if(key>=48&&key<=57||key==8){//数字键或删除键
			var param = '{"productId":"'+$(this).attr("pid")+'","amount":"'+$(this).val()+'","type":"normal"}';
			sendToApp("changeAmount","changeAmount",param);
			//changeAmount(this,"normal");
		}else{
			return false;
		}
	});
	/*
	$(".car_prolist").bind("swiperight", function(){
			$(this).find(".car_delbtn").show();     
    });
    $(".car_prolist").bind("swipeleft", function(){
			$(this).find(".car_delbtn").hide();     
    });
    */
	$(".car_delbtn").click(function(){
		//var param = '{"productId":"'+$(this).attr("pid")+'"}';
		//sendToApp("delProduct","delProduct",param);
		delProduct($(this));
	});
});
/*
 * 首页切换
 */
function switchIndex(url){
	$.ajax({
		 type: "POST",
		 url: url+"?fresh=" + Math.random(),
		 async: false,//非异步
		 cache:false,
		 dataType:"text",
		 beforeSend: function(XMLHttpRequest){
	     },			 
		 success:function (data,textStatus){
			$("#rq_progroup").html(data);
			setTimeout(function () {
				myScroll.refresh();//下拉刷新重载
			}, 0);
		 },
		 complete: function(XMLHttpRequest, textStatus){					
		 },
		 error: function(){
		 }
	});//$.ajax
}
/**
 * 撤单
 * @param {Object} orderid
 */
function Cancellation(orderid,createDate){
	if(DateDiff(createDate)/1000/60>5){
		alert("已过撤单时间");
		window.location.reload();
		return false;
	}
	if(confirm("确实要撤销该订单吗？")){
		var url = "/iwm/order.do?fresh=" + Math.random();
		var inData = "oldOrderId="+orderid+"&eventSubmit_CancelOrder";
		 $.ajax({
			type: "POST",
			url: url,
			cache:false,
			dataType:"text",
			data:inData,
			success: function(data){
				var v = data.split(",");
		   		var msg = v[0];
		   		if(msg=="撤单成功"){
		 	 		 alert("撤单成功");
		 	 		 window.location.reload();
	 	 		}else{
		 	 		 alert(msg);
	 	 		 }
			}
		 });
	}
}
function DateDiff(strDate_2,strDate_1){    
	var  date1  =  Date.parse("2000/01/01 "+strDate_1);    
	var  date2  =  Date.parse("2000/01/01 "+strDate_2);
	if((date2-date1)>0){
		return true;}
	return false;
}
//修改购物车产品数量
function changeAmount(amount,type){
	var productId=$(amount).attr("pid");
	//setTimeout(function(){
	$.ajax({
		type: "POST",
		url: "/order/cart.do?fresh=" + Math.random(),
		cache:false,
		dataType:"json",
		data:'productId='+productId+'&amount='+$(amount).val()+'&type='+type+'&eventSubmit_ChangeAmountYotime',
		success: function(data){
			if(data.msg=="ok"){
				$(".jz_helptxt").html("合计¥"+total_money(data.cart));
				var param = '{"amount":"'+data.cart.sum.amount+'"}';
				sendToApp("changeBadge","changeBadge",param);
			}
		}
	});
	//}, 100 );
}
//删除购物车产品
function delProduct(product){
	if(confirm("是否删除产品")){
		//setTimeout(function(){
			  $.ajax({
				type: "POST",
				url: "/order/cart.do?fresh=" + Math.random(),
				cache:false,
				dataType:"json",
				data:'productId='+$(product).attr("pid")+'&eventSubmit_RemoveProductYotime',
				success: function(data){
					if(data.msg=="ok"){
						if(data.cart.items){
							sendToApp("changeBadge","changeBadge",'{"amount":"'+data.cart.sum.amount+'"}');
							$(product).parent(".car_prolist").remove();
							$(".jz_helptxt").html("合计¥"+total_money(data.cart));
						}
						else{
							sendToApp("changeBadge","changeBadge",'{"amount":"0"}');
							$("#content_n").load("/yotime/app/shopcar_content.vm");
						}
					}
				}
			});
		//}, 100 );
	}
}
function total_money(cart){
	var total_money_html = "",fee_html = "";
	var total_price = 0;
	if(cart!=null&&cart.sum!=null){
		var total_price = cart.sum.rmoney;
		if(cart.codeId>0||cart.yh_person_id>0)
			total_price = total_price - cart.discount;
		if(cart.ps_wm_fee&&cart.ps_wm_fee.feeValue>0){
			fee_html ="<span> (含配送费"+cart.ps_wm_fee.feeValue+"元)</span>";
		}
	}
	total_money_html = parseFloat(total_price).toFixed(1)+fee_html;
	return total_money_html;
}
/********ios app 方法**********/
//页面跳转
function move(target,param){
	var paramString = "";
	if(param!=""){
		var value = param.split(",");
		for(var i=0;i<value.length;i++){
			if(i==0)
				paramString +="?"+value[i].split(":")[0]+"="+value[i].split(":")[1];
			else
				paramString +="&"+value[i].split(":")[0]+"="+value[i].split(":")[1];
		}
	}
	sendToApp("move",target,paramString);
}
//分享
function share(param){
	sendToApp("share","","");
}
//选中选择器
function selectTabbar(index){
	sendToApp("tabbar","tabbar",index);
}
//登陆
function login(type,param){
	if(type=="native"){
		param = '{"username":"'+$("#order_username").val()+'","password":"'+$("#order_password").val()+'"}';
	}
	sendToApp("login",type,param);
}
//定位
function mapLocated(param){
	sendToApp("mapLocated","mapLocated",param);
}
//加入购物车
function addCart(param){
	param = paramToJson(param);
	sendToApp("addCart","addCart",param);
}
//转换成URL然后在APP端截获后解析
function sendToApp(cmd,target,param){
	var url = "yotimeapp::"+cmd+"::"+target+"::"+param;
	document.location = url;
}
function paramToJson(param){
	var result = "";
	if(param!=""){
		var value = param.split(",");
		for(var i=0;i<value.length;i++){
			result += ',"'+value[i].split(":")[0]+'":'+'"'+value[i].split(":")[1]+'"';
		}
		result = '{'+result.substring(1)+'}';
	}
	return result;
}
