var div_img_width_size;
//ȫ�ֱ�����������ͨ�ٲ���ʱ��ʹ��
var space_speacil_img_width_height;
var is_360browser = navigator.userAgent.match(/360browser/);
//����WO�ռ������ͼƬ������ͼ��ǵĲ���
function set_img_container(page_type)
{
    var client_width = document.documentElement.clientWidth ;
    if(is_360browser=="360browser" && client_width==800)//����android�Ͱ汾ϵͳ��360���������Ļ���ȡ�������⴦��
    {
        client_width = 320;
    }
    
    if(client_width > 720)
    {
        document.write("<style type='text/css'>.content .content-max720 { max-width:800px}</style>");
        client_width = (client_width > 800) ? 800 : client_width;
        div_img_width_size=Math.round((client_width-30) / 3);
    }
    else
    {
        div_img_width_size=(client_width-26) / 2;
    }
    
    //var img_width = (div_img_width_size-4).toString();ԭ��
    
    //�¸� Ϊ�����ٲ�����ʱ��ͼƬ������ݿ�һ�¶����Ĵ���
    var img_width = div_img_width_size.toString();
    //�¸� end
    
    if(page_type=="space")
    {
        //var img_height = img_width;//ԭ��
        
        //�¸ģ������ٲ�����ʱ��ͼƬ��΢����4�����أ������û������б�ҳ��С���ݵĴ���
        var img_width = img_width-4;
        var img_height = img_width;
        //�¸� end
        
        var trips_width = img_width-16;
        var column_width = client_width-4;
        space_speacil_img_width_height = img_width;//����WO�ռ������ͼƬ������ͼ��ǵĲ��������һ��
    }

    document.write("<style type='text/css'>");
    document.write(".item a img { ");
    document.write("width:"+img_width+"px;");
    if(page_type=="space")
    {
        document.write("height:"+img_height+"px;");
        document.write(" }");
        document.write(".without_img_content { ");
        document.write("width:"+img_width+"px;");
        document.write("height:"+img_height+"px;");
        document.write(" }");
        
        document.write(".item_wo { ");
        document.write("width:"+img_width+"px;");
        document.write("height:"+img_height+"px;");
        document.write("overflow:hidden");
        document.write(" }");
        
        document.write(".item { ");
        document.write("width:"+img_width+"px;");
        document.write("height:"+img_height+"px;");
        document.write(" }");
        
        document.write(".trips {");
        document.write("width:"+trips_width+"px;");
        document.write(" }");
        document.write(".label_page .pic_box .column {");
        document.write("width:"+column_width+"px;");
    }
    document.write(" }");
    document.write("</style>");
}

function imgCen(imgObjImg)
{	
    
    var setObjHeigth = parseInt(space_speacil_img_width_height);
    var setObjWidth  = parseInt(space_speacil_img_width_height);
    var imgWidth = imgObjImg.width;
    var imgHeight = imgObjImg.height;
    if( (imgWidth/setObjWidth) > (imgHeight/setObjHeigth) )
    {
        var retWidth = setObjHeigth*imgWidth / imgHeight;
        imgObjImg.style.width = retWidth;
        imgObjImg.style.height = setObjHeigth + 'px';
        imgObjImg.style.marginLeft = -(retWidth-setObjWidth)/2 + "px";
    }
    else
    {
        var retHeight = setObjWidth*imgHeight / imgWidth;
        imgObjImg.style.height = retHeight;
        imgObjImg.style.width  = setObjWidth + 'px';
        imgObjImg.style.marginTop = -(retHeight-setObjHeigth)/2 + "px";
    }	
    imgObjImg.style.visibility = "visible" ;
}