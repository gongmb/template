    var show_float_layer_value = "show_float_layer";
    var show_float_layer_name = "show_float_layer";
    
    var cancle_layer_action = document.getElementById("xx");
    cancle_layer_action.onclick = add_cookie;
   

     //�ж��Ƿ����ֻ�QQ�����
    var isQQBrowser = navigator.userAgent.match(/QQBrowser/);
    //�ж��Ƿ����ֻ�Chrom�����
    var isMBChrom = navigator.userAgent.match(/CriOS/);
    //���ݲ�ͬ�����������Ӧ����
    
    //ֻ��iphone�Ĳų������
    if(/iPhone/.test(navigator.userAgent) && /Safari/.test(navigator.userAgent) && !isQQBrowser && !isMBChrom) 
    {
        var fixedDiv = document.getElementById('fixedDiv');
        if(getCookie(show_float_layer_name))
        {
            
            fixedDiv.style.display = "none";
        }
        else
        {
            fixedDiv.style.display = "block";
        }
        
    }  
    
    
    //������¼������ز�
    function add_cookie()
    {
        setCookie(show_float_layer_name,show_float_layer_value);
        var fixedDiv = document.getElementById('fixedDiv');
        fixedDiv.style.display = "none";
    }
    //����cookie    
    function setCookie(name,value)
    {
        var Days = 30; //�� cookie �������� 30 ��
        var exp  = new Date();    //new Date("December 31, 9998");
        exp.setTime(exp.getTime() + Days*24*60*60*1000);
        document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
    }
    //��ȡcookie
    function getCookie(name)
    {
        var arr = document.cookie.match(name);
        if(arr != null) 
            return true; 
        return false;
    }
    
