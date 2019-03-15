var myScroll,
pullDownEl, pullDownOffset,
pullUpEl, pullUpOffset,
generatedCount = 0;

function pullDownAction () {
	setTimeout(function () {}, 0);
}

function pullUpAction () {
	var pid = $('#pid').val();
	//details
	$('#pullUp').hide();
	$("#details").load("/yotime/wxapp/product_details_n.vm?itemId="+pid,function(response,status,xhr){
		if(status == 'success'){
			setTimeout(function(){
				myScroll.refresh();
			}, 200);
		}
	});
}

function loaded() {
	pullDownEl = document.getElementById('pullDown');
	pullDownOffset = pullDownEl.offsetHeight;
	pullUpEl = document.getElementById('pullUp');	
	pullUpOffset = pullUpEl.offsetHeight;
	myScroll = new iScroll('content', {
		useTransition: true,
		topOffset: pullDownOffset,
		onRefresh: function () {
			if (pullDownEl.className.match('loading')) {
				pullDownEl.className = '';
				//pullDownEl.querySelector('.pullDownLabel').innerHTML = '向下拉刷新...';
			} else if (pullUpEl.className.match('loading')) {
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '向上拉加载更多...';
			}
		},
		onScrollMove: function () {
			if (this.y > 5 && !pullDownEl.className.match('flip')) {
				pullDownEl.className = 'flip';
				//pullDownEl.querySelector('.pullDownLabel').innerHTML = '放开刷新...';
				this.minScrollY = 0;
				//alert('1')
			} else if (this.y < 5 && pullDownEl.className.match('flip')) {
				pullDownEl.className = '';
				//pullDownEl.querySelector('.pullDownLabel').innerHTML = '向下拉刷新...';
				this.minScrollY = -pullDownOffset;
			} else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
				pullUpEl.className = 'flip';
				//pullUpEl.querySelector('.pullUpLabel').innerHTML = '放开刷新...';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '';
				this.maxScrollY = this.maxScrollY;
				//alert('2')
			} else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '向上拉刷新...';
				this.maxScrollY = pullUpOffset;
			}
		},
		onScrollEnd: function () {
			if (pullDownEl.className.match('flip')) {
				pullDownEl.className = 'loading';
				//pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中...';				
				pullDownAction();	// Execute custom function (ajax call?)
			} else if (pullUpEl.className.match('flip')) {
				pullUpEl.className = 'loading';
				//pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';	
				if(!$('#pullUp').is(':hidden')){
					pullUpAction();	// Execute custom function (ajax call?)
				}		
				
			}
		}
	});
	setTimeout(function () { document.getElementById('content').style.left = '0'; }, 0);
}

function pullUp(){
	var page = $(".nextPage:last").val();
	var total = $("#totalCount").val();
	if(parseInt(page)>parseInt(total)){
		return;
	}
	$(".rq_progroup>div:last").load($("#pageUrl").val()+"&page="+page,function(){
		$(".rq_progroup").append("<div></div>");
		if(parseInt(page)>=parseInt(total)){
			$("#pullUp").hide();
		}
		setTimeout(function () {
			myScroll.refresh();
		}, 0);
		
	});
}

$(function(){
	var resizeTimer = null;
	$(window).resize(function() {
	    if (resizeTimer) clearTimeout(resizeTimer);
	    resizeTimer = setTimeout(function(){
	    	myScroll.refresh();
	    }, 10);
	});
})