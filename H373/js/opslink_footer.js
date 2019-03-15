var num=parseInt(Math.random()*4+6);

var baidu_words=new Array();
baidu_words[6]="网页提速30%，用百度浏览器 查看>";
baidu_words[7]="小说全、电影多，用百度浏览器 查看>";
baidu_words[8]="蛇年专属：看春晚用百度浏览器 查看>";
baidu_words[9]="省钱省流量，用百度浏览器 查看>";

var qq_words=new Array();
qq_words[6]="网页打开超快，用QQ浏览器>";
qq_words[7]="小说全、电影多，用QQ浏览器>";
qq_words[8]="QQ币等你拿，用QQ浏览器>";
qq_words[9]="省钱省流量，用QQ浏览器 查看>";

var mm_words=new Array();
mm_words[6]="最火爆美女写真>";
mm_words[7]="最新性感车模>";
mm_words[8]="明星模特最新写真>";
mm_words[9]="屌丝最爱的纯情美女>";

var aqioo_words=new Array();
aqioo_words[6]="【超人气】2013十二生肖开运宝典>";
aqioo_words[7]="女生最爱礼物,助表白增感情！>";
aqioo_words[8]="【超人气】2013十二生肖开运宝典>";
aqioo_words[9]="女生最爱礼物,助表白增感情！>";


var tabao_words=new Array();
tabao_words[6]="9元起：淘宝聚划算—团购 >>";
tabao_words[7]="1折起机票/酒店预订-淘宝旅行>>";
tabao_words[8]="购物狂欢 5折起包邮-淘宝天猫>>";
tabao_words[9]="9元起：淘宝聚划算—团购 >>";

var uc_words=new Array();
uc_words[6]="看电影小说，用新版UC浏览器>>";
uc_words[7]="省流量30%—下载UC浏览器>>";
uc_words[8]="看电影小说，用新版UC浏览器>>";
uc_words[9]="省流量30%—下载UC浏览器>>";

/*
qq_words[6]="节省30%流量，性感美女图片>>";
qq_words[7]="春节无聊利器，海量笑话大全>>";
qq_words[8]="上万张高清性感美女图片>>";
qq_words[9]="送朋友、同事，春节祝福短信>>";

var baidu_words=new Array();
baidu_words[6]="淘宝旅行—返程机票1.5折起>>";
baidu_words[7]="2.14情人节酒店—淘宝旅行>>";
baidu_words[8]="淘宝旅行—返程机票1.5折起>>";
baidu_words[9]="省钱省流量，用百度浏览器 查看>";

var qq_words=new Array();
qq_words[6]="淘宝旅行—返程机票1.5折起>>";
qq_words[7]="2.14情人节酒店—淘宝旅行>>";
qq_words[8]="淘宝旅行—返程机票1.5折起>>";
qq_words[9]="2.14情人节酒店—淘宝旅行>>";
*/
//if(navigator.userAgent.match(/Android/i)) {
    document.write('<div class="wdt-down">');
	document.write('<a href="ops/gourl.php@do=t1&n='+num+'" target="_blank">'+tabao_words[num]+'</a>');    
	document.write('<a href="ops/gourl.php@do=mm&n='+num+'" target="_blank">'+mm_words[num]+'</a><br>'); 
	document.write('<a href="ops/gourl.php@do=91&n=0" target="_blank">[省流量]91网址大全—手机上网导航</a><br>');
	document.write('</div>');
/*	
}else if(navigator.userAgent.match(/(iPhone|iPad|iPod|iOS)/i)){
	document.write('<div class="wdt-down"><a href="ops/gourl.php@do=mm&n='+num+'" target="_blank">'+mm_words[num]+'</a><br>');
	document.write('<a href="ops/gourl.php@do=t1&n='+num+'" target="_blank">'+tabao_words[num]+'</a><br>');
	document.write('<a href="ops/gourl.php@do=91&n=0" target="_blank">[省流量]91网址大全—手机上网导航</a><br>');
	document.write('</div>');
}
*/