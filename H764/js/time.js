<!--
var datelocalweek=new Array("������", "����һ", "���ڶ�","������","������", "������","������");
var datelocalnow=new Date(); 
var datelocalyear=datelocalnow.getFullYear(); 
var datelocalmonth=(datelocalmonth="0"+(datelocalnow.getMonth()+1)).substr(datelocalmonth.length-2,2); 
var datelocalday=(datelocalday="0"+datelocalnow.getDate()).substr(datelocalday.length-2,2); 
var datelocalweekday=datelocalweek[datelocalnow.getDay()]; 
document.write("<font color=#fc7a05>����ʱ��</font><font color=#fff>�� "+datelocalyear+"��"+datelocalmonth+"��"+datelocalday+"��"+" "+datelocalweekday+"</font>"); 
// -->