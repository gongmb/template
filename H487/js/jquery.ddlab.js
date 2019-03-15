jQuery.prototype.showFixedBlock = function(position){
	var block = this;
	if(block[0] == undefined) { return;}
	var nav = window.navigator;
	var OSVersion;
	window.positionInterval = '';
	//获取ios版本
	if(nav.appVersion.match('iPhone')) {
		OSVersion = nav.appVersion.match(/OS (\d+_\d+)/i);
		OSVersion = OSVersion && OSVersion[1] ? +OSVersion[1].replace('_', '.') : 0;
	}
	else {
		OSVersion = 6;
	}
	//如果5以上版本 直接fix
	if(OSVersion >= 5) {
		block.css('position','fixed')
		if(position=='top'){
			block.css('top','0');
			block.css('bottom','');
		}
		else if(position=='middle'){
			block.css('top',window.innerHeight/2-block.height()/2+'px');
			block.css('bottom','');
		}
		else{
			block.css('top','');
			block.css('bottom','0');
		}
		block.css('display','block');
		return;
	}
	//5以下用js控制
	startX = 0;
	block.css('position','relative')
	block.css('left',startX + 'px');
	if(position=='top'){
		startY = 0;
		block.css('top', 0); 
	}
	else if(position=='middle'){
		startY = window.scrollY + window.innerHeight/2;
		block.css('top', startY  - block.height()/2 + 'px'); 
	}
	else {
		startY = window.scrollY + window.innerHeight;
		block.css('top', startY  - block.height() + 'px'); 
	}
	
	
	block.css('webkitTransitionProperty', '-webkit-transform');
	block.css('webkitTransitionDuration', '0.2s');
	block.css('display','block');
	positionInterval = setInterval(setPosition, 100);
	
	function setPosition () {
		var matrix = new WebKitCSSMatrix(window.getComputedStyle(block[0], null).webkitTransform);
		if(position=='top'){
			posY = window.scrollY;
		}
		else if(position=='middle') {
			posY = window.scrollY + window.innerHeight/2 - block.height()/2-startY;
		}
		else {
			posY = window.scrollY + window.innerHeight - startY;
		}
			
		posX = 0;
		//console.log(posY+' '+matrix.m42);
		//判断屏幕是否移动过
		if ( posY == matrix.m42 && posX == matrix.m41 ) return;
		block.css('webkitTransform', 'translate3d(' + posX + 'px,' + posY + 'px,0)');
	}
	
}

jQuery.prototype.hideFixedBlock = function(){
	var block = this;
	if(block[0] == undefined) { return;}
	if(positionInterval != undefined)	clearInterval( positionInterval );
	block.css('display','none');
	block.css('webkitTransform', '');
	block.css('webkitTransitionDuration', '');
	block.css('webkitTransitionProperty', '');
}