function getProducts(brandId, selId, defSel, callback){
	var defOpt = $("#" + selId + " option:first-child");
	$("#" + selId).children().remove();
	if(defOpt.val() == 0){
		$("#" + selId).append(defOpt);
	}
	if(brandId < 1){
		return;
	}
	$.get("/product/do/get_products.jsp?brandId="+brandId,
		function(json){
			var jsonObj = eval( "(" + json + ")" );
			if(jsonObj.status > 0){
				var products = eval( "(" + jsonObj.result + ")" );
				for(var i in products){
					if (products[i].gruopName != null) {
						$("#" + selId).append("<optgroup label='" + products[i].gruopName +"'></optgroup>");
					} else {
						$("#" + selId).append("<option value='" + products[i].productId +"'>" + products[i].name + "</option>");
					}
				}
				$("#" + selId).val(defSel);
			}else{
				alert(jsonObj.msg);
			}
			if(callback) eval(callback+'();');
		}
	);
}

function getMoreProducts(url, id, callback) {
	$.get(url, function(json){
				var jsonObj = eval( "(" + json + ")" );
				if(jsonObj.status > 0){
					var products = eval( "(" + jsonObj.result + ")" );
					for(var i in products){
						var li = "<li><a href='" + products[i].pubUrl +"'>"
								+ "<em>"+products[i].listNum+"</em>"
								+ "<img src='" + products[i].idx7PictureUrl + "' alt=''/>"
								+ "<div class='dDes'><p class='pTit'>"+products[i].name+"</p><p class='pDes'>" + products[i].price + "</p></div>"
								+ "</a></li>";
						$("#" + id).append(li);
					}
				}
				if(callback) eval(callback+'();');
			}
		);
}

function getMoreReviews(url, id, callback) {
	$.get(url, function(json){
			var jsonObj = eval( "(" + json + ")" );
			if(jsonObj.status > 0){
				var reviews = eval( "(" + jsonObj.result + ")" );
				for(var i in reviews){
					var li = "<li><a href='" + reviews[i].url +"' target='_blank'>" + reviews[i].title + "</a></li>";
					$("#" + id).append(li);
				}
			}
			if(callback) eval(callback+'();');
		}
	);
}

function getMorePrices(url, id, callback) {
	$.get(url, function(json){
			var jsonObj = eval( "(" + json + ")" );
			if(jsonObj.status > 0){
				var prices = eval( "(" + jsonObj.result + ")" );
				for(var i in prices){
					var li = "<li>"
							+ "<i class='price'>" + prices[i].retailPrice + "</i>"
							+ "<em>" + prices[i].companyName + "</em><br>"
							+ "<i class='phone'>" + prices[i].first2phones + "</i>"
							+ "</li>";
					$("#" + id).append(li);
				}
			}
			if(callback) eval(callback+'();');
		}
	);
}

function getMoreComments(url, id, callback) {
	$.get(url, function(json){
			var jsonObj = eval( "(" + json + ")" );
			if(jsonObj.status > 0){
				var comments = eval( "(" + jsonObj.result + ")" );
				for(var i in comments){
					var li = "<div class='c-wrap'><div class='c-thT'>" + comments[i].title + "</div>"
							+ "<div class='c-th'><span class='user'>" + comments[i].createBy + "</span><span class='time'>2013-02-12</span></div>"
							+ "<div class='c-tb'>"
							+ "<p><em>" + comments[i].advTitle + "</em><span>" + comments[i].advantage + "</span></p>"
							+ "<p><em>" + comments[i].defTitle + "</em><span>" + comments[i].deficiency + "</span></p>"
							+ "<p><em>" + comments[i].desTitle + "</em><span>" + comments[i].description + "</span></p>"
							+ "</div></div>";
					$("#" + id).append(li);
				}
			}
			if(callback) eval(callback+'();');
		}
	);
}

function getMoreSearchResult(url, id, callback, listNum) {
	$.get(url, function(json){
			var jsonObj = eval( "(" + json + ")" );
			if(jsonObj.status > 0){
				var result = eval( "(" + jsonObj.result + ")" );
				for(var i in result){
					var li = "<li><a href='" + result[i].pubUrl + "'>"
							+ "<em>" + result[i].listNum + "</em><img src='" + result[i].idx7PictureUrl + "' alt='" + result[i].name + "'>"
							+ "<div class='dDes'><p class='pTit'>" + result[i].name + "</p><p class='pDes'>" + result[i].price + "</p></div>"
							+ "</a></li>";
					$("#" + id).append(li);
					listNum = result[i].listNum
				}
			}
			if(callback) eval(callback+'(' + listNum + ');');
		}
	);
}