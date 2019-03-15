// m.ggg.cn
var MGGGJS = {
    searchgames: function(id, url, size, rows, loading,lable){
        var box = $('#' + id),
            start = box.find(lable).length + 1,
            end = start + size - 1;
		$pageloading = $("#" + loading);
        $.ajax({
            type:"post",
            url: url,
            data: {'start': start, 'end': end},
            beforeSend: function(){
            	$pageloading.addClass('ns_load');
            },
            success:function(data){
            	box.append(data);           
                if(end >= rows){
                	$pageloading.hide();
                }
            },complete: function(){
            	$pageloading.removeClass('ns_load');
            }
        });	
    },
	    
    loadgames: function(id, url, size, loading,lable){
        var loadbox = $('#' + loading),
            box = $('#' + id),
            start = box.find(lable).length + 1,
            end = start + size - 1;

        loadbox.show();
        setTimeout(function(){
            $.ajax({
                url: url,
                data: {'start': start, 'end': end},
                dataType: 'html',
                success: function(html){
                    if(!html.trim()){
                        $(document).unbind('swipeUp');
                    }
                    box.append(html.trim());
                    loadbox.hide();
                }
            });
        }, 5000);
    },

    loadScreenshot: function(id, url){
        var box = $('#' + id),
            len = url.length;

        if(box.find('li').length == 0 && len > 0){
            box.append("<li class=\"current\"><img src=\"" + url[0] + "\" alt=\"screenshot\" /></li>").parent().show();
            box.after("<ol id=\"" + id + "Page\"><li class=\"current\"></li></ol>");
            for(i=1; i<len; i++){
                box.append("<li style=\"display:none;\"><img src=\"" + url[i] + "\" alt=\"screenshot\" /></li>");
                $('#' + id + 'Page').append("<li></li>");
            }
            box.swipeLeft(function(){
                MGGGJS.swipeScreenshot.next(box);
            });
            box.swipeRight(function(){
                MGGGJS.swipeScreenshot.prev(box);
            });
            $('#next').click(function(){
                MGGGJS.swipeScreenshot.next(box);
            });
            $('#prev').click(function(){
                MGGGJS.swipeScreenshot.prev(box);
            });
        }
        else{
            return false;
        }
    },

    swipeScreenshot: {
        next: function(box){
            var $this = box.find('.current'),
                $next = $this.next(),
                $page = box.next().find('.current'),
                $pageNext = $page.next();
            if($next.length != 0){
                $next.show().addClass('current');
                $this.hide().removeClass('current');
                $page.removeClass('current');
                $pageNext.addClass('current');
            }
            else{
                return false;
            }
        },
        prev: function(box){
            var $this = box.find('.current'),
                $prev = $this.prev(),
                $page = box.next().find('.current'),
                $pagePrev = $page.prev();
            if($prev.length != 0){
                $prev.show().addClass('current');
                $this.hide().removeClass('current');
                $page.removeClass('current');
                $pagePrev.addClass('current');
            }
            else{
                return false;
            }
        }
    }
};

var wall = {
	pri_next:function($this){
		var time = parseInt($this.attr('time')),
		uuid = $this.attr('uid'),
		$pageloading = $('#pri_page_wrap');
		if (!isNaN(time)) {
			$.ajax({
				type:"post", url:"m/ajax/privatewall.cgi", async:false, cache:false, data:{uuid:uuid,before:time},
				beforeSend: function(){
					$pageloading.addClass('more_load');
				},success:function(data){
					var last_start = $(data).find('#last_start').val(),
						has_more_threads = $(data).find('#more_threads').val(),
						$res = $(data).find('#more_wall');
					if ($res.children().length != 0) {
						$('#pri_next').attr('time', last_start);
						$('#Perslist1').append($res);	
					}
                    if (has_more_threads == 'false'){
                    	$pageloading.hide("slow");
                    }
				},complete: function(){
					$pageloading.removeClass('more_load');
		        }
			});
		}
	},
	pub_next:function($this){
		var time = parseInt($this.attr('time')),
		uuid = $this.attr('uid'),
		$pageloading = $('#pub_page_wrap');
		if (!isNaN(time)) {
			$.ajax({
				type:"post", url:"m/ajax/publicwall.cgi", async:false, cache:false, data:{uuid:uuid,before:time},
				beforeSend: function(){
					$pageloading.addClass('more_load');
				},success:function(data){
					var last_start = $(data).find('#last_start').val(),
						has_more_threads = $(data).find('#more_threads').val(),
						$res = $(data).find('#more_wall');
					if ($res.children().length != 0){
						$('#pub_next').attr('time', last_start);
						$('#Perslist2').append($res);	
					} 
                    if (has_more_threads == 'false'){
                    	$pageloading.hide("slow");
                    }
				},complete: function(){
					$pageloading.removeClass('more_load');
		        }
			});
		}
	},
};

$(document).ready(function(){
	// 推荐游戏页更多
	$("#recommend_next_page").click(function(){
		$pageloading = $("#page_loading");
		var $this = $(this);
		var curPage = parseInt($this.attr('cpg'));
    	var maxPage = parseInt($this.attr('mpg'));
		var params = {page:null,r:Math.random()};
		params.page = curPage + 1;
        $.ajax({
            type:"post",
            url:"m/ajax/recommend.cgi",
            data:params,
            beforeSend: function(){
            	$pageloading.addClass('ns_load');
            },
            success:function(data){
                $("#recommend").append(data);             
                if(maxPage <= params.page){
                	$this.unbind('click').hide();
                } else {
                	$this.attr('cpg', params.page);
                }
            },complete: function(){
            	$pageloading.removeClass('ns_load');
            }
        });	
	});
	
	// 游戏列表页更多
	$("#game_next_page").click(function(){
		$pageloading = $("#page_loading");
		var $this = $(this);
		var curPage = parseInt($this.attr('cpg'));
    	var maxPage = parseInt($this.attr('mpg'));
    	var categoryId = parseInt($this.attr('cid'));
    	var sort = $this.attr('sort');   	
    	var params = {categoryId:null,sort:null,page:null,r:Math.random()};
		params.categoryId = categoryId;
		params.sort = sort;
		params.page = curPage + 1;
        $.ajax({
            type:"post",
            url:"m/ajax/game/list.cgi",
            data:params,
            beforeSend: function(){
            	$pageloading.addClass('ns_load');
            },
            success:function(data){
            	$("#list").append(data);           
                if(maxPage <= params.page){
                	$this.unbind('click').hide();
                } else {
                	$this.attr('cpg', params.page);
                }
            },complete: function(){
            	$pageloading.removeClass('ns_load');
            }
        });	
	});
	
	// 资讯页更多
	$("#article_next_page").click(function(){
		$pageloading = $("#page_loading");
		var $this = $(this);
		var curPage = parseInt($this.attr('cpg'));
    	var maxPage = parseInt($this.attr('mpg'));
    	var categoryId = parseInt($this.attr('cid'));
    	var params = {categoryId:null,page:null,r:Math.random()};
		params.categoryId = categoryId;
		params.page = curPage + 1;
        $.ajax({
            type:"post",
            url:"m/ajax/article/list.cgi",
            data:params,
            beforeSend: function(){
            	$pageloading.addClass('ns_load');
            },
            success:function(data){
            	$("#articles").append(data);           
                if(maxPage <= params.page){
                	$this.unbind('click').hide();
                } else {
                	$this.attr('cpg', params.page);
                }
            },complete: function(){
            	$pageloading.removeClass('ns_load');
            }
        });
	});
	
	// 排行榜更多
	$("#toplist_next_page").click(function(){
		$pageloading = $("#page_loading");
		var $this = $(this);
		var curPage = parseInt($this.attr('cpg'));
    	var maxPage = parseInt($this.attr('mpg'));
    	var tid = parseInt($this.attr('tid'));
    	var params = {id:null,page:null,r:Math.random()};
		params.id = tid;
		params.page = curPage + 1;
        $.ajax({
            type:"post",
            url:"m/ajax/toplistdetail.cgi",
            data:params,
            beforeSend: function(){
            	$pageloading.addClass('ns_load');
            },
            success:function(data){
            	$("#toplists").append(data);           
                if(maxPage <= params.page){
                	$this.unbind('click').hide();
                } else {
                	$this.attr('cpg', params.page);
                }
            },complete: function(){
            	$pageloading.removeClass('ns_load');
            }
        });	
	});
	
	// 活动专区页面更多
    $("#campaign_next_page").click(function(){
    	var $this = $(this),
    		$pageloading = $("#page_loading"),
    		curPage = parseInt($this.attr('cpg')),
    		maxPage = parseInt($this.attr('mpg')),
    		params = {page:0,r:Math.random()};
		params.page = curPage + 1;
		$.ajax({
	    	type:"post", 
	    	url:"m/ajax/market/campaign/list.cgi", 
	    	data:params,
	        beforeSend: function(){
	        	$pageloading.addClass('more_load');
	        },
	        success:function(data){
	            $('#act_list').append(data);             
	            if(maxPage <= params.page){
	            	$this.unbind('click').hide();
	            } else {
	            	$this.attr('cpg', params.page);
	            }
	        },complete: function(){
	        	$pageloading.removeClass('more_load');
	        }
	    });	
    });
	
	// 个人动态翻页
	$("#pri_next").click(function(){
		wall.pri_next($(this));
	});
	// 社区动态翻页
	$("#pub_next").click(function(){
		wall.pub_next($(this));
	});
	
	
	var dotlist = $class("dot");
	//$obj("slider-banner").style.width = $obj("slider-banner").getBoundingClientRect().width+"px";
	var sliderIndex = new Swipe(document.getElementById('slider-banner'), {
		auto:5000,
		callback:function(e, i){
			setDotIndex(i);
		}
	});
	//$obj("slider-down").style.width = $obj("slider-down").getBoundingClientRect().width+"px";
	var sliderDown = new Swipe(document.getElementById('slider-down'));
	
	var sLeft = $class("slide-left");
	
	for( var i=0; i<sLeft.length; i++ ) {
		sLeft[i].onclick=function() {
			sliderDown.prev();
		};
	}
	
	var sRight = $class("slide-right");
	for( var i=0; i<sRight.length; i++ ) {
		sRight[i].onclick=function() {
			sliderDown.next();
		};
	}
	
	function setDotIndex(i) {
		for(var t=0; t<dotlist.length; t++) {
			dotlist[t].className = "dot";
		}
		dotlist[i].className = "dot current";
	}
	
	
	for(var i=0; i<dotlist.length; i++) {
		dotlist[i].onclick=function () {
			var x = parseInt(this.getAttribute("index"), 10);
			setDotIndex(x);
			sliderIndex.slide(x, 300);
		};
	}	
	
});

