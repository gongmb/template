
function setTabNews2 ( i )
	{
		selectTabNews2(i);
	}
	
	function selectTabNews2 ( i )
	{
		switch(i){
			case 4:
			document.getElementById("TabCon4").style.display="block";
			document.getElementById("TabCon5").style.display="none";
			document.getElementById("TabCon6").style.display="none";
			document.getElementById("font4").style.color="#000000";
			document.getElementById("font5").style.color="#ffffff";
			document.getElementById("font6").style.color="#ffffff";
			break;
			case 5:
			document.getElementById("TabCon4").style.display="none";
			document.getElementById("TabCon5").style.display="block";
			document.getElementById("TabCon6").style.display="none";
			document.getElementById("font4").style.color="#ffffff";
			document.getElementById("font5").style.color="#000000";
			document.getElementById("font6").style.color="#ffffff";
			break;
			case 6:
			document.getElementById("TabCon4").style.display="none";
			document.getElementById("TabCon5").style.display="none";
			document.getElementById("TabCon6").style.display="block";
			document.getElementById("font4").style.color="#ffffff";
			document.getElementById("font5").style.color="#ffffff";
			document.getElementById("font6").style.color="#000000";
			break;
		}
	}
// JavaScript Document