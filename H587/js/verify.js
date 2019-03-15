//=============验证==========================
    //str是否为空(为空 true)
    function strIsEmpty(str){
	    if($.trim(str)==""||str==undefined){
		    return true;
	    }
	    return false;
    }
    
    //比较两个str是否相同(相同 true)
    function two_strIsSame(str0,str1){
	    if(strIsEmpty(str0)||strIsEmpty(str1)){
		    return false;
	    }
	    if($.trim(str0)==$.trim(str1)){
		    return true;
	    }
		return false;
    }
    	
	//比较str是否在strs中(在 true)
	function strIsInStrs(str,strs){
		if(strIsEmpty(str)||strIsEmpty(strs)){
			return false;
		}
	    var strs_split = strs.split(",");
	    if(strs_split.length>0){
		    for(i=0;i<strs_split.length;i++){
			    if(two_strIsSame(strs_split[i],str)){//遇到有一个相同即返回真
	      			return true;			    
			    }
		    }
	    }
	    return false;
	}
	
	//strs中是否每个值都一样(一样 true)
	function verify_strs(strs){
		if(strIsEmpty(strs)){
			return false;
		}
		var strs_split = strs.split(",");
		if(strs_split.length==1&&strs_split[0]!=""){
			return true;
		}else if(strs_split.length>1){
			for(i=0;i<strs_split.length;i++){
			    for(j=i+1;j<strs_split.length;j++){
				    if(!two_strIsSame(strs_split[i],strs_split[j])){//遇到有一个不相同即返回真
		      			return false;
	      			}
			    }		
			}
			return true;
		}else{
			return false;		
		}
		return false;
	}

	//手机号码(正常 true)
	function isMobile(str){
		var mobile=/^(13|15|18)[0-9]{9}$/;   //手机验证
		if(strIsEmpty(str)){
			return false;
		}
		return mobile.test($.trim(str));		
	}

	//电话号码(正常 true)
	function isTel(str){
		var tel=/^((0\d{2,3}))?(\d{7,8})$/;	 //电话验证 057788691123
		if(strIsEmpty(str)){
			return false;
		}
		return tel.test($.trim(str));		
	}
	
    //联系号码(正常 true)
    function isLinkNumber(str){
	    if(isMobile(str)||isTel(str)){
		    return true;
	    }
	    return false;
    }
    
    //金额数字(正常 true)
    function isMoney(str){
	    var money = /^\d+\.?\d+$|^\d+$/;
	    if(strIsEmpty(str)){
		    return false;
	    }
	    if(money.test($.trim(str))){
	    	return true;
	    }
	    return false;
    }
        
    //3位内纯小数 如0.1，0.25，0.125(正常 true)
    function isDecimal(str){
	    var decimal_fraction=/^0\.\d{1,3}$/;
	    if(strIsEmpty(str)){
		    return false;
	    }
	    if(decimal_fraction.test($.trim(str))){
	    	return true;
	    }
	    return false;
    }
    
//=============验证==========================

	function endsWith(str, suffix) {
	    return str.indexOf(suffix, str.length - suffix.length) !== -1;
	}
