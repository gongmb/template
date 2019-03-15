/**
 * http//cd.api.paojiao.cn/stat.html?operation=3&product=paojiaocom&productVersion=1.0&cid=paojiaocom&imei=0019810228
 * 
 * 方法：down()
 * 下载统计代码
 * @param {Object}  -- product：产品类型，如paojiaoyouxiao,paojiaocundang,wap,web
 * @param {Object} 	-- productVersion：产品版本
 * @param {Object}  -- cid：渠道号
 * @param {Object} 	-- imei：设备IMEI
 * @param {Object} 	-- model：设备型号
 * @param {Object} 	-- operation：统计类型1为打开应用，2为小窗口，3为下载，4为下载成功
 * @param {Object} 	-- resourceId：下载资源ID
 * 
 */
$(function(){
  $('.dl_class').click(function(){
	  var url=$(this).attr('data');
	  var randnum = new Date().getTime();
	  window.location = url+"&randID="+randnum;
  });
})

