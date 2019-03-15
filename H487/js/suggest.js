/**
 * 搜索推荐类
 * @param operator 搜索输入框可以为search类型，
 * @param ajaxUrl 发送请求的地址
 * @param wrapEl 结果列表样式
 * @param formEl 表单元素id
 * @param defaultVal 搜索默认值
 * @param hasFocus 是否注册onfocus事件
 * @return
 */
var Suggest = function(options){
	that = this;
	that.opt = options || {};
	that.operator = that.opt.operator || '.keyword';
	that.ajaxUrl = that.opt.ajaxUrl || 'suggest.php';
	that.wrapEl = that.opt.wrapEl || '.suggest';
	that.formEl = that.opt.formEl || '#search_form';
	that.defaultVal = that.opt.defaultVal || '';
	that.initInput();
}

Suggest.prototype = {
	initInput : function(){
		var operator = $(that.operator);
		if(operator.size() == 1){
			operator.attr("autocomplete","off");
			if(that.opt.hasFocus){
				operator.focus(function(){ window.scrollTo(0,215); });
				that.wrapEl = that.wrapEl + ':last';
			} else {
				that.wrapEl = that.wrapEl + ':first';
			}
			operator.get(0).addEventListener("input",function(){
				var kwd = operator.val().replace(/(^\s+)|(\s+$)/g, "");
				that.ajax(kwd);
			});
		}
	},
	ajax : function(kwd){
		$.ajax({
				url : that.ajaxUrl,
				data : {key : kwd, action : "suggest", sid : $("input[name=sid]").val()},
				dataType : "json",
				type : "POST",
				success : function(data){
					if(data != null){
						that.updateList(data);
					}
				}
		})
	},
	updateList : function(data){
		var arrList = [];
		$(that.wrapEl).html('').show();
		if(data.errorCode == 0){
			var word = data.word;
			for(var i = 0; i < word.length; i++){
				arrList.push("<li><span>" + word[i].key + "</span><span>约" + word[i].count + "个结果</span></li>");
			}
			arrList.push("<li class='close'>[关闭]</li>");
			$(that.wrapEl).html("<ul>" + arrList.join('') + "</ul>");
			that.effect();
		}
	},
	effect : function(){
		$(that.wrapEl).find("ul li").not(":last").click(function(){
				that.changeVal($(this).find("span:first").html());
		}).parent().find("li.close").click(function(){ $(that.wrapEl).html('').hide();})
	},
	changeVal : function(key){
		$(that.operator).val(key);
		$(that.wrapEl).html("");
		$(that.formEl).submit();	
	}
}