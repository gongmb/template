/*tab轮换*/
function switchTab(ProTag, ProBox) {
            for (i = 1; i < 4; i++) {
                if ("tab" + i == ProTag) {
                    document.getElementById(ProTag).getElementsByTagName("a")[0].className = "on";
                } else {
                    document.getElementById("tab" + i).getElementsByTagName("a")[0].className = "";
                }
              if ("product" + i == ProBox) {
                    document.getElementById(ProBox).style.display = "";
                } else {
                    document.getElementById("product" + i).style.display = "none";
                }
            }
        }

/*出现滚动*/
 


/*导航*/
$(function(){
	var probox1=$("#product1");
	var probox2=$("#product2");
	var probox3=$("#product3");
	$("#product").click( function(){
		$("#tab1>a").addClass("on");
		$("#tab2>a").removeClass("on");
		$("#tab3>a").removeClass("on");
		probox1.show();
		probox2.hide();
		probox3.hide();
		})
	$("#case").click( function(){
		$("#tab2>a").addClass("on");
		$("#tab1>a").removeClass("on");
		$("#tab3>a").removeClass("on");
		probox2.show();
		probox1.hide();
		probox3.hide();
		})
   	$("#share").click( function(){
		$("#tab3>a").addClass("on");
		$("#tab1>a").removeClass("on");
		$("#tab2>a").removeClass("on");
		probox3.show();
		probox1.hide();
		probox2.hide();
		})
	$("#gou,#gou1,#gou2").click( function(){
		$("#tab1>a").addClass("on");
		$("#tab2>a").removeClass("on");
		$("#tab3>a").removeClass("on");
		probox1.show();
		probox2.hide();
		probox3.hide();
		})

		
});