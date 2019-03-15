/**
 * category js
 * usage categories & filter
 * User: chaichunyan
 * Date: 11-12-8
 * Time: 上午11:33
 * To change this template use File | Settings | File Templates.
 */
var qs = new Querystring();
//var keyword = qs.get('keyword');
var cid = qs.get('cid');
var sid = qs.get('sid');
var sort_type = qs.get('sort_type');
if(sort_type==undefined){
    sort_type= 'default_0';
}

$(function(){
    var level1_name = $('#current_cat').text();
    var level1_count = $('#s_count').text();
    //var level1_cat = {"Name":level1_name,ID:"0",'Count':level1_count};
    var level1_cat = {
        "Name":level1_name,
        ID:cid,
        'Count':level1_count
    };

    //getFilter(keyword,cid,level1_cat);
    getFilter(cid,level1_cat);

    // 分类
    $('.categories').hide();
    $('#lnk_categories').click(function(){
        showLayoutCategories();
    });

    $('.lnk_back').click(function(){
        hideLayoutCategories();
    });

    // 筛选
    $('.cat_filter').hide();
    $('#lnk_filter').click(function(){
        showLayoutFilters();
    });
    $('#btn_filter').click(function(){
        hideLayoutFilters();
    });
    $('.lnk_back').click(function(){
        hideLayoutFilters();
    });

    $('#complete').click(function(){
        doCategoryFilter();
    });

    $('.btn_title_complete').click(function(){
        doCategoryFilter();
    });

    // 筛选后无结果提示
    showFilterNoResult();
});

function getFilter(cid,pre_cat){
    $.ajax({
        type: "GET",
        url: "category.php",
        data: {
            action: 'list_filter',
            //action:'list_category',
            //keyword : keyword,
            cid : cid,
            result_format : 1
        },
        success: function(data){
            var data = '[' + data + ']';
            showDataCategories(eval(data),pre_cat);
            showDataFilters(eval(data));
        }
    });
}

// 数据层操作
// categories
function showDataCategories(data,pre_cat){
    var data_categories = data[0].categories;
    //console.log(data_categories);
    //console.log(pre_cat);

    // the first is all link
    var first_li = newEl('li','');
    var first_lnk = 'category.php@cid=' + pre_cat['ID'];
    var all_lnk = newHrefEl("全部"+pre_cat['Name']+"("+ pre_cat['Count'] +")", first_lnk,'');
    first_li.append(all_lnk);
    //$('.categories ul').append(first_li);

    if(data_categories!=null && data_categories!=""){
        for(var i=0; i<data_categories.length;i++){
            $('.categories ul').append(getCategoriesContent(data_categories[i]));
        }
    }
}
function getCategoriesContent(data){
    var row = newEl("li","");
    var cat_line = newEl("span",'category_line',data['Name']+"("+data['Count'] + ")");

    cat_line.click(function(){
        // get sub categories
        //getDataSubCategories(data['ID'],data);

        // change to redirect to listpage. @cychai modify 20120215
        window.location = 'category.php@cid=' + data['ID'] + '&action=list_category'+'&sid='+sid;
    });

    row.append(cat_line);
    return row;
}

// sub categories
function getDataSubCategories( cid, c_data){
    // clear pre categories
    $('.categories ul').empty();
    $('.cat_select section').empty();

    //console.log(cid);
    getFilter(cid,c_data);
}

// filter
function showDataFilters(data){
    //console.log(data);
    $('.cat_select section').append(getDataFilterContent(data));
}
function getDataFilterContent(data){
    var main_ul = newEl('ul','','');

    // 品牌
    var data_brands = data[0].brands;
    if(data_brands!=null){
        var filter_brands = newEl('li','','');
        var title_brands = newEl('div','a_title','品牌');
        filter_brands.append(title_brands);
        filter_brands.append(getDataFilterBrands(data_brands));

        main_ul.append(filter_brands);
    }

    // 属性attr
    var data_att = data[0].att;
    if(data_att!=null){
        main_ul.append(getDataAtt(data_att));
    }

    //价格
    var data_priceint = data[0].priceint;
    if(data_priceint!=null){
        var filter_priceint = newEl('li','','');
        var title_priceint = newEl('div','a_title','价格');
        filter_priceint.append(title_priceint);
        filter_priceint.append(getDataFilterPriceint(data_priceint));
        
        main_ul.append(filter_priceint);
    }

    // 当当自营or商家
    var data_shop_type = data[0].shop_type;
    if(data_shop_type!=null){
        var filter_shoptype = newEl('li','','');
        var title_shoptype = newEl('div','a_title','来源');
        filter_shoptype.append(title_shoptype);
        filter_shoptype.append(getDataFilterShopType(data_shop_type));

        main_ul.append(filter_shoptype);
    }

    // checkbox
    var data_checkbox = data[0].checkbox;
    if(data_checkbox!=null){
        var filter_checkbox = newEl('li','','');
        var title_checkbox = newEl('div','a_title','筛选');
        filter_checkbox.append(title_checkbox);
        filter_checkbox.append(getDataFilterCheckbox(data_checkbox));

        main_ul.append(filter_checkbox);
    }
	
    return main_ul;
}
// filter-brands
function getDataFilterBrands(data){
    var selector = newEl('div','selectors clearfix','');
    selector.append(cancelSelected('brandid'));
    for(var i=0; i<data.length;i++){
        selector.append(getDataFilterBrandLine(data[i]));
    }

    return selector;
}
function getDataFilterBrandLine(data){
    var lbl = newEl('label','','');
    var txt = newEl('font','',data['Name']);
    //var chk = newInputEl('checkbox','','');
    var chk = newInputEl('radio','brandid','');
    chk.attr("value",data['ID']);

    lbl.append(chk);
    lbl.append(txt);
    return lbl;
}

// filter-att
function getDataAtt(data){
    var dataAttItem = newEl('div','','');
    for(var i=0; i<data.length; i++){
        dataAttItem.append(getDataAttItem(data[i]));
    }
    return dataAttItem;
}
// att so complicated ...
function getDataAttItem(data){
    var Category = data.Category;
    var ID = data.ID;
    var Name = data.Name;
    var Values = data.Values;
	
    var li_item = newEl('li','','');
    var title_brands = newEl('div','a_title',data.Name);
    var att_content = newEl('div','selectors clearfix','');

    att_content.append(cancelSelected('attr_'+ID));
    for(var i=0; i<Values.length; i++){
        att_content.append(getDataAttValue(ID,Values[i]));
    }
    li_item.append(title_brands);
    li_item.append(att_content);
    return li_item;
}
function getDataAttValue(ID, data){
    var lbl = newEl('label','','');
    var txt = newEl('font','',data['Name']);
    var chk = newInputEl('radio','attr'+'_'+ID,'');
    chk.attr("value",ID + ':' + data['ID']);

    lbl.append(chk);
    lbl.append(txt);
    return lbl;
}

// filter-priceint
function getDataFilterPriceint(data){
    var selector = newEl('div','selectors clearfix','');
    selector.append(cancelSelected('price'));
    for(var i=0; i<data.length;i++){
        selector.append(getDataFilterPriceintLine(data[i]));
    }

    return selector;
}
function getDataFilterPriceintLine(data){
    var lbl = newEl('label','','');
    var font = data.Min;
    if(data.Max == 0){
        font += '以上';
    }else{
        font += '-' + data.Max;
    }
    var txt = newEl('font','',font);
    
    var chk = newInputEl('radio','price','');
    chk.attr('value',data.Min + '-' + data.Max);
	
    lbl.append(chk);
    lbl.append(txt);
    return lbl;
}

// filter-shoptype
function getDataFilterShopType(data){
    var selector = newEl('div','selectors clearfix','');
    var data = data.splice(',');
    for(var i=0; i<data.length;i++){
        selector.append(getDataFilterShopTypeLine(data[i]));
    }

    return selector;
}
function getDataFilterShopTypeLine(data){
    var lbl = newEl('label','','');
    var name_st = '';
    switch(data){
        case 0 :
            name_st='全部';
            break;
        case 1 :
            name_st='当当自营';
            break;
        case 2 :
            name_st='商家';
            break;
    }
    var txt = newEl('font','',name_st);
    //var chk = newInputEl('checkbox','','');
    var chk = newInputEl('radio','shop_type','');
    chk.attr('value', data);
    if(data==0){
        chk.attr('checked', 'checked');
    }
    lbl.append(chk);
    lbl.append(txt);
    return lbl;
}

// filter-checkbox
function getDataFilterCheckbox(data){
    var selector = newEl('div','selectors clearfix','');
    for(var i=0; i<data.length;i++){
        selector.append(getDataFilterCheckboxLine(data[i]));
    }

    return selector;
}
function getDataFilterCheckboxLine(data){
    var txt_chk = '';
    switch(data){
        case 'is_promo' :
            txt_chk='只显示促销商品';
            break;
        case 'is_stock' :
            txt_chk='只显示有货商品';
            break;
        case 'is_bestsell' :
            txt_chk='只显示畅销商品';
            break;
        case 'is_new' :
            txt_chk='只显示新品';
            break;
    }
    var lbl = newEl('label','','');
    var txt = newEl('font','', txt_chk);
    //var chk = newInputEl('checkbox',data,'checked');
	
    lbl.append('<input type="checkbox" name="' + data +'">');
    lbl.append(txt);
    return lbl;
}

// 表现层操作
function showLayoutCategories(){
    $('.cat_result').hide();
    $('.line_search').hide();
    $('.categories').show();
    $('footer.footer').hide();
    $('.breadcrumb').hide();
    $('.dd_header').hide();
}
function hideLayoutCategories(){
    $('.categories').hide();
    $('.cat_result').show();
    $(".line_search").show();
    $('footer.footer').show();
    $('.breadcrumb').show();
    $('.dd_header').show();
}

function showLayoutFilters(){
    $('#filter_p_num').text($('#s_count').text());
    $('.cat_result').hide();
    $('.line_search').hide();
    $('.cat_filter').show();
    $('footer.footer').hide();
    $('.breadcrumb').hide();
    $('.dd_header').hide();
}
function hideLayoutFilters(){
    $('.cat_filter').hide();
    $('.line_search').show();
    $('.cat_result').show();
    $('footer.footer').show();
    $('.breadcrumb').show();
    $('.dd_header').show();
}

function doCategoryFilter(){
    var filterParams = '';

    $('.cat_select input[type=radio]').each(function(){
        if($(this).attr('checked')=='checked' && $(this).val()!=-1){

            var attr_name = $(this).attr('name');

            if(attr_name.split('_')[0] == 'attr'){
                // 与请求接口保持一致，使用att
                filterParams += '&att[]='+$(this).val();
            }
            if(attr_name=='price'){
                var price = $(this).val().split('-');
                var low = price[0];
                var high = price[1];
                filterParams += '&highp='+high;
                filterParams += '&lowp='+low;
            }
            if(attr_name=='brandid'){
                filterParams += '&brandid=' + $(this).val();
            }
            if(attr_name=='shop_type'){
                filterParams += '&shop_type=' + $(this).val();
            }
        //console.log($(this).attr('name') + '=' +$(this).val());
        }
    });

    $('.cat_select input[type=checkbox]').each(function(){
        if($(this).attr('checked')=='checked'){
            filterParams += '&'+ $(this).attr('name') + '=1';
        //console.log($(this).attr('name') + '=' +$(this).val());
        }
    });

    //console.log(filterParams);
    if(filterParams==''){
        hideLayoutFilters();
    }else{
        window.location = 'category.php@cid='+cid+ filterParams + '&sort_type=' +sort_type+'&sid='+sid;
    }
}
// add all select radio
function cancelSelected(type){
    var row = newEl('label','','');
    var input = newInputEl('radio',type,'');
    input.attr('value','-1');
    input.attr('checked','checked');
    var font = newEl('font','','全部');

    row.append(input);
    row.append(font);

    return row;
}

function showFilterNoResult(){
    var filterResult = $('.cat_result section ul').html().trim();
    if(filterResult=="" || filterResult == null){
        $('.cat_result section ul').append("<p>您当前筛选无结果，请返回重新筛选。</p>");
    }
}