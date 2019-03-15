// JavaScript Document

function setTabNews3 ( i )
	{
		selectTabNews3(i);
	}
	
	function selectTabNews3 ( i )
	{
		switch(i){
			case 7:
			document.getElementById("TabCon7").style.display="block";
			document.getElementById("TabCon8").style.display="none";
			document.getElementById("TabCon9").style.display="none";
			document.getElementById("font7").style.color="#ae1c03";
			document.getElementById("font8").style.color="#626060";
			document.getElementById("font9").style.color="#626060";
			break;
			case 8:
			document.getElementById("TabCon7").style.display="none";
			document.getElementById("TabCon8").style.display="block";
			document.getElementById("TabCon9").style.display="none";
			document.getElementById("font7").style.color="#626060";
			document.getElementById("font8").style.color="#ae1c03";
			document.getElementById("font9").style.color="#626060";
			break;
			case 9:
			document.getElementById("TabCon7").style.display="none";
			document.getElementById("TabCon8").style.display="none";
			document.getElementById("TabCon9").style.display="block";
			document.getElementById("font7").style.color="#626060";
			document.getElementById("font8").style.color="#626060";
			document.getElementById("font9").style.color="#ae1c03";
			break;
		}
	}
// JavaScript Document