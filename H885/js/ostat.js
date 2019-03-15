function sendORequestFromCookie()
{
	if(localStorage)
	{
		var ucnewsstat = getCookieOrStore("ucnewsstat") ;
		var statjson = [] ;
		try
		{
			statjson = JSON.parse(ucnewsstat) ;
		}
		catch(e)
		{
			setCookieOrStore("ucnewsstat", "[]") ;
			statjson = [] ;
			return ;
		}
		if(statjson == null)
		{
			setCookieOrStore("ucnewsstat", "[]") ;
			statjson = [] ;
			return ;
		}
		
		if(statjson.length <= 0)
			return ;
		
		var o = statjson[0].o ;
		var u = statjson[0].u ;
		if(o == undefined || u == undefined)
			return ;

		var ajax = new XMLHttpRequest() ;
		ajax.open("GET", "/o?id=" + o + "&trg=" + encodeURIComponent(u) + "&direct=true&uc_param_str=cpdnvefrpfssntbi&rand=" + Math.random()) ;
		// + "&trg=" + encodeURIComponent(u) + , true) ;
		ajax.onreadystatechange = function(e)
		{
			if(ajax.readyState == 4)
			{
				//ajax.abort() ;
				statjson.splice(0,1) ;
				setCookieOrStore("ucnewsstat", JSON.stringify(statjson)) ;
				sendORequestFromCookie() ;
				return ;
			}
		}
		ajax.send(null) ;
	}
}

function sendORequest(o)
{
	if(localStorage)
	{
		var ajax = new XMLHttpRequest() ;
		ajax.open("GET", "/o?id=" + o + "&trg=" + encodeURIComponent(location.href) + "&direct=true&uc_param_str=cpdnvefrpfssntbi&rand=" + Math.random()) ;
		// + "&trg=" + encodeURIComponent(u) + , true) ;
		ajax.onreadystatechange = function(e)
		{
			if(ajax.readyState == 4)
			{
				//ajax.abort() ;
				return ;
			}
		}
		ajax.send(null) ;		
	}
	else
	{
		var img = new Image() ;
		img.src = "/o?id=" + o + "&trg=" + encodeURIComponent(location.href) + "&direct=true&uc_param_str=cpdnvefrpfssntbi&rand=" + Math.random() ;
	}
}

function setCookieOrStore(B, E, C)
{
	if(localStorage)
	{
		localStorage[B] = escape(E) ;
	}
}
function getCookieOrStore(A) 
{
	if(localStorage)
	{
		return unescape(localStorage[A]) ;
	}
}

function o(a, o)
{
	if(localStorage)
	{
		if(a == '' || o == '')
			return ;
		var ucnewsstat = getCookieOrStore("ucnewsstat") ;
		var statjson = [] ;
		try
		{
			statjson = JSON.parse(ucnewsstat) ;
		}
		catch(e)
		{
			setCookieOrStore("ucnewsstat", "[]") ;
			statjson = [] ;
		}
		if(statjson == null)
		{
			setCookieOrStore("ucnewsstat", "[]") ;
			statjson = [] ;
		}
		
		statjson[statjson.length] = {u:typeof(a)=="string"?a:a.href, o:o} ;
		setCookieOrStore("ucnewsstat", JSON.stringify(statjson)) ;
	}
}