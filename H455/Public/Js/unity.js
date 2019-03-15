$(function(){
  //用于判断url中是否有from参数，然后执行get请求	
  var url=window.location.search;
   var all_url=window.location.href;
   var str='',strss=[];
   if(url.indexOf("?")!=-1)
   {
   	  if(url.match(/\//))
       {
        //判断？后面的字符串如果有'../default.htm'  如: from_3.html?a=/from/paper
         str=url.substr(1);
		 strs = str.split("/");
      
         for(var i=0;i<strs.length;i++)
         {
           if(strs[i]=='afrom')
           {
             $.get("../../www.nandu.com/Api/analysis.php@s=_2Fanalysis_2Ffrom&from="+encodeURIComponent(all_url));
           }

           
         }

       } 
       else
       {
         // 判断？后面的字符串如果没有'../default.htm'  如: from_3.html?from=paper&clickfrom=dd
         if(url.indexOf("&")!=-1)
		 {
			 
			 str=url.substr(1);
			 strs = str.split("&");
			 for(var i=0;i<strs.length;i++)
			 {
			   var strss=strs[i].split('=');
			  
			   if(strss[0]=='afrom')
			   {
				  $.get("../../www.nandu.com/Api/analysis.php@s=_2Fanalysis_2Ffrom&from="+encodeURIComponent(all_url));
			   }
			 }	 
	     }
		 else
		 {
		     str=url.substr(1);
			 strs=str.split('=');
			 if(strs[0]=='afrom')
			 {
			     $.get("../../www.nandu.com/Api/analysis.php@s=_2Fanalysis_2Ffrom&from="+encodeURIComponent(all_url));
			 }	 
		 }
         

       }  

   }	
})

