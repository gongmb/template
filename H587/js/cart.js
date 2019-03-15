$(document).ready(function(){	
	//购物车加载
	$.ajax({
	   type: "POST",
	   url: "/order/cart.do",
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
	$(".plus").click(function(){
		var amountInput = $(this).prev().find("input");
		var amount = parseInt($.trim(amountInput.val()));
		amountInput.val(amount+1);
		changeAmount(amountInput,"normal");
	});
	
	$(".minus").click(function(){
		var amountInput = $(this).next().find("input");
		var amount = parseInt($.trim(amountInput.val()));
		if(amount>1){
			amountInput.val(amount-1);
			changeAmount(amountInput,"normal");
		}
		if(amount==1){
			delProduct($(this).parent().prev(".car_delbtn"));
		}
	});
	
	$(".text-amount").keypress(function(event){
		var key = event.keyCode || event.which || event.charCode;
		if(key>=48&&key<=57||key==8){//数字键或删除键
			changeAmount(this,"normal");
		}else{
			return false;
		}
	});
	
	$(".car_delbtn").click(function(){
		delProduct($(this));
	});
	
});

//修改购物车产品数量
function changeAmount(amount,type){
	var productId=$(amount).attr("pid");
	//setTimeout(function(){
	$.ajax({
		type: "POST",
		url: "/order/cart.do",
		cache:false,
		dataType:"json",
		data:'productId='+productId+'&amount='+$(amount).val()+'&type='+type+'&eventSubmit_ChangeAmountYotime',
		success: function(data){
			if(data.msg=="ok"){
				$("#content").load("/yotime/wxapp/shopcar_content.vm");
			}
			//购物车数量赋值
			$('#carnum').text(data.cart.sum.amount);
		}
	});
	//}, 100 );
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


//删除购物车产品 
function delProduct(product){
	if(confirm("是否删除产品")){
		//setTimeout(function(){
			  $.ajax({
				type: "POST",
				url: "/order/cart.do",
				cache:false,
				dataType:"json",
				data:'productId='+$(product).attr("pid")+'&eventSubmit_RemoveProductYotime',
				success: function(data){
					if(data.msg=="ok"){
						$("#content").load("/yotime/wxapp/shopcar_content.vm");
					}
					
					//购物车赋值
					if(data.cart.sum){
						$('#carnum').text(data.cart.sum.amount);
					}else{
						$('#carnum').text(0);
					}
//					if($(".car_edit").hasClass("hide")){
//						$(".car_edit").text("取消").removeClass("hide").addClass("show");
//						$(".car_delbtn").show();
//					}else{
//						$(".car_edit").text("编辑").removeClass("show").addClass("hide");
//						$(".car_delbtn").hide();
//					}	
				}
			});
		//}, 100 );
	}
}