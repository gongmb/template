<!--
var enabled = 0; today = new Date();
var day; var date;
if(today.getDay()==0) day = "������"
if(today.getDay()==1) day = "����һ"
if(today.getDay()==2) day = "���ڶ�"
if(today.getDay()==3) day = "������"
if(today.getDay()==4) day = "������"
if(today.getDay()==5) day = "������"
if(today.getDay()==6) day = "������"
document.fgColor = "ffffff";
date =("������ "+today.getYear()) + " ��" + (today.getMonth() + 1 ) + "��" + today.getDate() + "�� " + day +"";
document.write(date);
// -->