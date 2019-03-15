
function Slide(config){
	this.config = {
		slideBox: null,
		nextBtn: null,
		prevBtn: null,
		autoPlay: true,
		triggers: null,
		triggerOnClass: "current",
		maskTrigger:true,
		callback: null,
		slider:true
	}

	$.extend(this.config, config);
	this.init();
} 
Slide.prototype = {
	init: function(){
		var self = this, cfg = self.config;
		self.box = cfg.slideBox;

		self.gallery  = self.box.find("ul");
		self.galleryItems = self.gallery.find("li");
		self.galleryImgs = self.gallery.find("img");
		self.galleryImgs.width();
		self.sildePT = self.box.parent().css('padding-top');
		self.sildeH = self.galleryImgs.eq(0).height();
		$('.slide-controler').css({'top': self.sildePT,'height': self.sildeH});
		$('.slide-controler ul').css({'height' : self.sildeH });
		$('.slide-controler ul li').css({'height' : self.sildeH });


	
		self.length = self.galleryItems.length;
		self.currentIndex = 0;

		
		/*self.wrapperW = self.box[0].clientWidth;
		self.gallery.css("width", self.wrapperW*(self.length+2) +"px");
		self.galleryItems.width(self.wrapperW);*/

		self.resize();
		$(window).resize(function(){
			self.resize();
		})

		self.gallery.append($(self.galleryItems[0]).clone());
		self.gallery.prepend($(self.galleryItems[self.length-1]).clone());

		self.gallery.css("-webkit-transition-duration", "0s");
		self.gallery.css("-webkit-transform", "translate3d(-"+ self.wrapperW +"px, 0px, 0px)");
		
		
		self.bindEvent();
		self.triggers = cfg.triggers;
		self.initTrigger();
		self.start();

		self.itemsFlag = [];
		for(i=0; i<=self.length; i++){
			self.itemsFlag[i] = 0;
		}
		self.itemsFlag[0]=1;
		self.itemsFlag[1]=1;
		self.itemsFlag[self.length - 1]=1
	},
	bindEvent: function(){
		var self = this;
		if(self.config.nextBtn){
			self.config.nextBtn.bind("click", function(){
				self.pause();
				self.next();
				self.start();
			});
		}
		if(self.config.prevBtn){
			self.config.prevBtn.bind("click", function(){
				self.pause();
				self.previous();
				self.start();
			})
		}
		if(self.config.maskTrigger){
			$('.slide-controler').touchwipe({
				wipeLeft: function() {
					self.pause();
					self.next();
					return false;
				},
				wipeRight: function() {
					self.pause();
					self.previous();
					return false;
				}
			}).click(function(){
				location.href=self.galleryImgs.eq(self.currentIndex).attr('data-url');
				return false;
			});
		}else{
			self.box.touchwipe({
				wipeLeft: function() {
					self.pause();
					self.next();
					return false;
				},
				wipeRight: function() {
					self.pause();
					self.previous();
					return false;
				}
			});
		}		
	},
	resize:function(){

		var self = this;
		self.wrapperW = self.box[0].clientWidth;
		
		if(self.config.slider){
			self.gallery.css("width", self.wrapperW*(self.length+2) +"px");
			self.gallery.find("img").width(self.wrapperW);
			l = - (self.currentIndex+1) * self.wrapperW;
			self.gallery.css("-webkit-transform", "translate3d("+ l +"px, 0px, 0px)");
			self.sildePT = self.box.parent().css('padding-top');
			self.sildeH = self.galleryImgs.eq(0).height();
			$('.slide-controler').css({'top': self.sildePT,'height': self.sildeH});
			$('.slide-controler ul').css({'height' : self.sildeH });
			$('.slide-controler ul li').css({'height' : self.sildeH });

		}else{
			self.box.addClass('not-slider');
			self.gallery.css("width", self.wrapperW*(self.length+2) +"px");
			self.gallery.find(".slideItem").width(self.wrapperW);
			self.gallery.find(".slideItem").height(self.wrapperW);
			self.gallery.find('li').height(self.wrapperW);
			self.gallery.find('li').width(self.wrapperW);
			//alert('sdfsd');
			if(self.gallery.find(".slideItem img").height()>self.wrapperW){
				self.gallery.find(".slideItem img").css({'height':'100%'});
			}
			
			
			$('.gallerySlide').height(self.wrapperW);

			
			//self.gallery.parent().parent().height(self.wrapperW);
			
			l = - (self.currentIndex+1) * self.wrapperW;
			self.gallery.css("-webkit-transform", "translate3d("+ l +"px, 0px, 0px)");
		}
		if(self.config.maskTrigger){
			$('.slide-controler').width($('.slide-list').width());
		}
	},
	start: function(){
		var self = this;
		if(self.config.autoPlay){
			self.timer = setInterval(function(){
				self.next();
			}, 5000);
		}
	},
	pause: function(){
		var self = this;
		if(self.timer){
			clearInterval(self.timer);
			self.timer = null;
		}
	},
	next: function(){	
		var self = this, l;

		self.currentIndex++;
		l = - (self.currentIndex+1) * self.wrapperW;
		self.gallery.css("-webkit-transition-duration", "0.4s");
		self.gallery.css("-webkit-transform", "translate3d("+ l +"px, 0px, 0px)");
		if( self.currentIndex==self.length){
			setTimeout(function(){
				self.gallery.css("-webkit-transition-duration", "0s");
				self.gallery.css("-webkit-transform", "translate3d(-"+ self.wrapperW+"px, 0px, 0px)");
			}, 400);
			self.currentIndex = 0;
		}
		self.swtichTrigger(self.currentIndex);
		if(self.config.callback){
			self.config.callback(self.currentIndex);
		}
		if(self.currentIndex < self.length-1){			
			self.loadPic(self.currentIndex+1);
		}
	},
	previous: function(){
		var self = this, l;

		self.currentIndex--;
		l = - (self.currentIndex+1) * self.wrapperW;
		self.gallery.css("-webkit-transition-duration", "0.4s");
		self.gallery.css("-webkit-transform", "translate3d("+ l +"px, 0px, 0px)");
		if(self.currentIndex==-1){
			setTimeout(function(){
				self.gallery.css("-webkit-transition-duration", "0s");
				self.gallery.css("-webkit-transform", "translate3d("+ -self.length*self.wrapperW +"px, 0px, 0px)");
			}, 400);
			self.currentIndex = self.length - 1;
		}
		self.swtichTrigger(self.currentIndex);

		if(self.config.callback){
			self.config.callback(self.currentIndex);
		}
		if(self.currentIndex > 1){
			self.loadPic(self.currentIndex);
		}
	},
	initTrigger: function(){
		var self = this;

		if(self.triggers){
			self.triggers.eq(self.currentIndex).addClass(self.config.triggerOnClass);
		}
	},
	swtichTrigger: function(i){
		var self = this;
		if(self.triggers){
			self.triggers.removeClass(self.config.triggerOnClass);
			$(self.triggers[i]).addClass(self.config.triggerOnClass);
		}
		
	},
	loadPic: function(index){
		var self = this, img;
		if(self.itemsFlag[index]==1){

			return ;
		}
		img = $(self.galleryImgs[index]);
		img.attr("src",img.attr('data-src'));
		self.itemsFlag[index] = 1;
	}
}