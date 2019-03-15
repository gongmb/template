var t_browser_has_css3;
var t_css3_array = ['transition','-webkit-transition','-moz-transition','-o-transition','-ms-transition'];
var t_css3_index;
$(document).ready(function(){
    var t_css3_test = $('body');
    for(t_css3_index=0, t_css3_test.css(t_css3_array[t_css3_index],'');t_css3_index<t_css3_array.length&&null==t_css3_test.css(t_css3_array[t_css3_index]);t_css3_test.css(t_css3_array[++t_css3_index],''));
    if(t_css3_index<t_css3_array.length)
        t_browser_has_css3 = true;
    else
        t_browser_has_css3 = false;
    load_portofolio_hover_effect();
    load_main_slider();
    load_flickr();
    load_twitter();
    load_page_slider();
    load_clients_slider();
    load_project_related_slider();
    load_works();
    load_menu();
    load_contacts();
});



//PORTOFOLIO HOVER EFFECT
var load_portofolio_hover_effect = function(){
    $('.works').each(function(){
        var t_hover_time = 300;   //time for hover effect
        var t = $(this);
        var t_container = t.children('.worksContainer');
        var t_items_hover_on_function;
        var t_items_hover_off_function;
        var t_items_hover_class = 'worksContainerView1';
        if(t_browser_has_css3){
            t_container.children('.worksEntry').children('.worksEntryContainer').css(t_css3_array[t_css3_index],'margin-left '+t_hover_time/1000+'s ease-in-out');
            t_items_hover_on_function = function(){
                if(t_container.hasClass(t_items_hover_class)){
                    $(this).children('.worksEntryContainer').css({marginLeft:'0%'});
                }
            };
            t_items_hover_off_function = function(){
                if(t_container.hasClass(t_items_hover_class)){
                    $(this).children('.worksEntryContainer').css({marginLeft:'-100%'});
                }
            };
        }else{
            t_items_hover_on_function = function(){
                if(t_container.hasClass(t_items_hover_class)){
                    $(this).children('.worksEntryContainer').stop().animate({marginLeft:'0%'},{duration:t_hover_time,queue:false,easing:'swing'});
                }
            };
            t_items_hover_off_function = function(){
                if(t_container.hasClass(t_items_hover_class)){
                    $(this).children('.worksEntryContainer').stop().animate({marginLeft:'-100%'},{duration:t_hover_time,queue:false,easing:'swing'});
                }
            };
        }
        t_container.children('.worksEntry').hover(t_items_hover_on_function, t_items_hover_off_function);
    });
};



//MAIN SLIDER
var load_main_slider = function(){
    $('.mainSlider').each(function(){
        var t_nav_time = 400;   //time for navigation bar movement
        var t_items_time = 400;   //time for item transition
        var t_interval_time = 2000;   //time for autoplay slide change
        var t_timeout_time = 4000;   //time to wait on clicked slide before autoplay resumes
        var t = $(this);
        var t_items_container =  t.children('.mainSliderItemsWrapper').children('.mainSliderItems');
        var t_items = t_items_container.children('.mainSliderItemsEntry');
        var t_items_active_class = 'mainSliderItemsEntryActive';
        var t_items_active_selector = '.'+t_items_active_class;
        var t_nav_container = t.children('.mainSliderNav');
        var t_nav = t_nav_container.children('.mainSliderNavBar');
        //var t_nav_width = Math.floor(t_nav_container.innerWidth()/t_items.length);
        var t_nav_width_measure = '%';
        var t_nav_width = 100/t_items.length;
        var t_prev = t.find('.mainSliderItemsEntryBoxButtonsPrev');
        var t_next = t.find('.mainSliderItemsEntryBoxButtonsNext');
        var t_index = 0;
        var t_index_max = t_items.length - 1;
        t_nav.css({width:t_nav_width+t_nav_width_measure});
        var t_prev_function;
        var t_next_function;
        t_items.css({opacity:0});
        while(t_items.css('opacity')!=='0');
        var t_timeout = 0;
        var t_interval = 0;
        var t_interval_function;
        var t_play = function(){
            t_interval = setInterval(t_interval_function,t_interval_time);
        };
        var t_pause = function(){
            clearInterval(t_interval);
            clearTimeout(t_timeout);
            t_timeout = setTimeout(t_play,t_timeout_time);
        };
        if(t_browser_has_css3){
            t_items.css(t_css3_array[t_css3_index],'opacity '+t_items_time/1000+'s ease-in-out');
            t_items.filter(t_items_active_selector).css({opacity:1});
            t_nav.css(t_css3_array[t_css3_index],'margin-left '+t_nav_time/1000+'s ease-in-out');
            t_prev_function = function(){
                t_index--;
                if(t_index<0)
                    t_index = t_index_max;
                t_nav.css({marginLeft: t_nav_width*t_index+t_nav_width_measure});
                t_items.filter(t_items_active_selector).css({opacity:0}).removeClass(t_items_active_class);
                t_items.filter(':eq('+t_index+')').css({opacity:1}).addClass(t_items_active_class);
                t_pause();
            };
            t_next_function = function(){
                t_index++;
                if(t_index>t_index_max)
                    t_index = 0;
                t_nav.css({marginLeft: t_nav_width*t_index+t_nav_width_measure});
                t_items.filter(t_items_active_selector).css({opacity:0}).removeClass(t_items_active_class);
                t_items.filter(':eq('+t_index+')').css({opacity:1}).addClass(t_items_active_class);
                t_pause();
            };
            t_interval_function = function(){
                t_index++;
                if(t_index>t_index_max)
                    t_index = 0;
                t_nav.css({marginLeft: t_nav_width*t_index+t_nav_width_measure});
                t_items.filter(t_items_active_selector).css({opacity:0}).removeClass(t_items_active_class);
                t_items.filter(':eq('+t_index+')').css({opacity:1}).addClass(t_items_active_class);
            };
        }else{
            t_items.filter(t_items_active_selector).stop().animate({opacity:1},{duration:t_items_time,queue:false,easing:'swing'});
            t_prev_function = function(){
                t_index--;
                if(t_index<0)
                    t_index = t_index_max;
                t_nav.stop().animate({marginLeft: t_nav_width*t_index+t_nav_width_measure},{duration:t_nav_time,queue:false,easing:'swing'});
                t_items.filter(t_items_active_selector).stop().animate({opacity:0},{duration:t_items_time,queue:false,easing:'swing'}).removeClass(t_items_active_class);
                t_items.filter(':eq('+t_index+')').stop().animate({opacity:1},{duration:t_items_time,queue:false,easing:'swing'}).addClass(t_items_active_class);
                t_pause();
            };
            t_next_function = function(){
                t_index++;
                if(t_index>t_index_max)
                    t_index = 0;
                t_nav.stop().animate({marginLeft: t_nav_width*t_index+t_nav_width_measure},{duration:t_nav_time,queue:false,easing:'swing'});
                t_items.filter(t_items_active_selector).stop().animate({opacity:0},{duration:t_items_time,queue:false,easing:'swing'}).removeClass(t_items_active_class);
                t_items.filter(':eq('+t_index+')').stop().animate({opacity:1},{duration:t_items_time,queue:false,easing:'swing'}).addClass(t_items_active_class);
                t_pause();
            };
            t_interval_function = function(){
                
            };
        }
        t_prev.click(t_prev_function);
        t_next.click(t_next_function);
        t_prev.mousedown(function(){
            return false;
        });
        t_next.mousedown(function(){
            return false;
        });
        t_play();
    });
};



//FLICKR
var load_flickr = function(){
    $('.widgetFlickr').each(function(){
        var stream = $(this);
        var stream_userid = stream.attr('data-user');
        var stream_items = parseInt(stream.attr('data-images'));
        $.getJSON("http//api.flickr.com/services/feeds/photos_public.gne?lang=en-us&format=json&id="+stream_userid+"&jsoncallback=?", function(stream_feed){
            for(var i=0;i<stream_items&&i<stream_feed.items.length;i++){
                (function(){
                    if(stream_feed.items[i].media.m){
                        var stream_div = $('<div>').addClass('widgetFlickrImg').addClass('bordercolor4');
                        var stream_a = $('<a>').attr('href',stream_feed.items[i].link).attr('target','_blank');
                        stream_div.append(stream_a);
                        var stream_img = $('<img>').attr('src',stream_feed.items[i].media.m).attr('alt','').load(function(){
                            stream_a.append(stream_img);
                            if(stream_img.width()<stream_img.height())
                                stream_img.css({width:'100%',height:'auto'});
                            else
                                stream_img.css({width:'auto',height:'100%'});
                        });
                        stream.append(stream_div);
                    }
                })();
            }
        });
    });
};



//TWITTER
var load_twitter = function(){
    var linkify = function(text){
        text = text.replace(/(https?:\/\/\S+)/gi, function (s) {
            return '<a class="textcolor7" href="' + s + '">' + s + '</a>';
        });
        text = text.replace(/(^|)@(\w+)/gi, function (s) {
            return '<a class="textcolor7" href="http//twitter.com/' + s + '">' + s + '</a>';
        });
        text = text.replace(/(^|)#(\w+)/gi, function (s) {
            return '<a class="textcolor7" href="http//search.twitter.com/search?q=' + s.replace(/#/,'%23') + '">' + s + '</a>';
        });
        return text;
    }
    $('.widgetTwitter').each(function(){
        var t = $(this);
        var t_date_obj = new Date();
        var t_loading = 'Loading tweets..'; //message to display before loading tweets
        var t_user = t.attr('data-user');
        var t_posts = parseInt(t.attr('data-posts'));
        t.append(t_loading);
        $.getJSON("http//api.twitter.com/1/statuses/user_timeline/"+t_user+".json?callback=?", function(t_tweets){
            t.empty();
            for(var i=0;i<t_posts&&i<t_tweets.length;i++){
                var t_date = Math.floor((t_date_obj.getTime()-Date.parse(t_tweets[i].created_at))/1000);
                var t_date_str;
                var t_date_seconds = t_date%60;
                t_date=Math.floor(t_date/60);
                var t_date_minutes = t_date%60;
                if(t_date_minutes){
                    t_date=Math.floor(t_date/60);
                    var t_date_hours = t_date%60;
                    if(t_date_hours){
                        t_date=Math.floor(t_date/60);
                        var t_date_days = t_date%24;
                        if(t_date_days){
                            t_date=Math.floor(t_date/24);
                            var t_date_weeks = t_date%7;
                            if(t_date_weeks)
                                t_date_str = t_date_weeks+' minute'+(1==t_date_weeks?'':'s')+' ago';
                            else
                                t_date_str = t_date_days+' minute'+(1==t_date_days?'':'s')+' ago';
                        }
                        else
                            t_date_str = t_date_hours+' minute'+(1==t_date_hours?'':'s')+' ago';
                    }
                    else
                        t_date_str = t_date_minutes+' minute'+(1==t_date_minutes?'':'s')+' ago';
                }
                else
                    t_date_str = 'less than a minute ago';
                var t_message =
                    (i?'<div class="widgetPostsEntryDelimiter widgetPostsEntryDelimiterSmall"></div>':'')+
                    '<div class="widgetTwitterPost">'+
                        '<div class="widgetTwitterPostText">'+
                            linkify(t_tweets[i].text)+
                        '</div>'+
                        '<div class="widgetTwitterPostDate textcolor8">'+
                            t_date_str+
                        '</div>'+
                    '</div>';
                t.append(t_message);
            }
        });
    });
};



//PAGE SLIDER
var load_page_slider = function(){
    $('.pageSlider').each(function(){
        var t_items_time = 400;   //time for slide animation
        var t_interval_time = 2000;   //time for autoplay slide change
        var t_timeout_time = 4000;   //time to wait on clicked slide before autoplay resumes
        var t_timeout = 0;
        var t_interval = 0;
        var t_interval_function;
        var t = $(this);
        var t_items = t.children('.pageSliderItems').children('ul').children('li');
        var t_nav = t.children('.pageSliderNav').children('li').not('.pageSliderNavFill');
        var t_active_class = 'active';
        var t_active_selector = '.'+t_active_class;
        t_items.css({opacity:0});
        while(t_items.css('opacity')!=='0');
        var t_nav_function;
        var t_play = function(){
            t_interval = setInterval(t_interval_function,t_interval_time);
        };
        var t_pause = function(){
            clearInterval(t_interval);
            clearTimeout(t_timeout);
            t_timeout = setTimeout(t_play,t_timeout_time);
        }
        var t_index = 0;
        var t_index_max = t_items.length-1;
        if(t_browser_has_css3){
            t_items.css(t_css3_array[t_css3_index],'opacity '+t_items_time/1000+'s ease-in-out');
            t_items.filter(t_active_selector).css({opacity:1});
            t_nav_function = function(){
                var t_nav_current = t_nav.filter(t_active_selector);
                if(t_nav_current.not(this).length){
                    t_nav_current.removeClass(t_active_class);
                    $(this).addClass(t_active_class);
                    t_items.filter(t_active_selector).css({opacity:0}).removeClass(t_active_class);
                    t_items.filter(':eq('+t_nav.index(this)+')').css({opacity:1}).addClass(t_active_class);
                    t_index = t_nav.index(this);
                }
                t_pause();
            };
            t_interval_function = function(){
                t_nav.filter(t_active_selector).removeClass(t_active_class);
                t_items.filter(t_active_selector).css({opacity:0}).removeClass(t_active_class);
                t_index++;
                if(t_index>t_index_max)
                    t_index = 0;
                t_nav.filter(':eq('+t_index+')').addClass(t_active_class);
                t_items.filter(':eq('+t_index+')').css({opacity:1}).addClass(t_active_class);
            };
            
        }else{
            t_items.filter(t_active_selector).stop().animate({opacity:1},{duration:t_items_time,queue:false,easing:'swing'});
            t_nav_function = function(){
                var t_nav_current = t_nav.filter(t_active_selector);
                if(t_nav_current.not(this).length){
                    t_nav_current.removeClass(t_active_class);
                    $(this).addClass(t_active_class);
                    t_items.filter(t_active_selector).stop().animate({opacity:0},{duration:t_items_time,queue:false,easing:'swing'}).removeClass(t_active_class);
                    t_items.filter(':eq('+t_nav.index(this)+')').stop().animate({opacity:1},{duration:t_items_time,queue:false,easing:'swing'}).addClass(t_active_class);
                    t_index = t_nav.index(this);
                }
                t_pause();
            };
            t_interval_function = function(){
                t_nav.filter(t_active_selector).removeClass(t_active_class);
                t_items.filter(t_active_selector).stop().animate({opacity:0},{duration:t_items_time,queue:false,easing:'swing'}).removeClass(t_active_class);
                t_index++;
                if(t_index>t_index_max)
                    t_index = 0;
                t_nav.filter(':eq('+t_index+')').addClass(t_active_class);
                t_items.filter(':eq('+t_index+')').stop().animate({opacity:1},{duration:t_items_time,queue:false,easing:'swing'}).addClass(t_active_class);
            };
        }
        t_nav.click(t_nav_function);
        t_play();
    });
};



//CLIENTS SLIDER
var load_clients_slider = function(){
    $('.clients').each(function(){
        var t_time = 400;   //time for slide movement
        var t_visible;   //nr of visible items, different for each resolution
        var t = $(this);
        var t_items_container = t.children('ul');
        var t_items = t_items_container.children('li');
        var t_items_increment;
        var t_prev = t.find('.clientsNavPrev');
        var t_next = t.find('.clientsNavNext');
        var t_prev_function;
        var t_next_function;
        var t_index = 0;
        var t_index_max;
        var t_items_length = t_items.length;
        if(t_browser_has_css3){
            t_items_container.css(t_css3_array[t_css3_index],'margin-left '+t_time/1000+'s ease-in-out');
            t_prev_function = function(){
                if(t_index>0){
                    t_index--;
                    t_items_container.css({marginLeft: -t_items_increment*t_index+'px'});
                }
            };
            t_next_function = function(){
                if(t_index<t_index_max){
                    t_index++;
                    t_items_container.css({marginLeft: -t_items_increment*t_index+'px'});
                }
            };
        }else{
            t_prev_function = function(){
                if(t_index>0){
                    t_index--;
                    t_items_container.stop().animate({marginLeft: -t_items_increment*t_index+'px'},{duration:t_time,queue:false,easing:'swing'});
                }
            };
            t_next_function = function(){
                if(t_index<t_index_max){
                    t_index++;
                    t_items_container.stop().animate({marginLeft: -t_items_increment*t_index+'px'},{duration:t_time,queue:false,easing:'swing'});
                }
            };
        }
        t_prev.click(t_prev_function);
        t_next.click(t_next_function);
        var t_w = $(window);
        var t_resolution = -1;
        var resize_function = function(){
            var w_width = t_w.width();
            var t_new_resolution = false;
            if(w_width<960)
                if(w_width<768)
                    if(w_width<480){
                        //width<480
                        if(t_resolution!==1){
                            t_new_resolution = true;
                            t_resolution = 1;
                            t_visible = 2;
                            t_items_increment = 156;
                        }
                    }else{
                        //480<width<768
                        if(t_resolution!==2){
                            t_new_resolution = true;
                            t_resolution = 2;
                            t_visible = 3;
                            t_items_increment = 168;
                        }
                    }else{
                        //768<width<960
                        if(t_resolution!==3){
                            t_new_resolution = true;
                            t_resolution = 3;
                            t_visible = 4;
                            t_items_increment = 208;
                        }
                    }else{
                        //960<width
                        if(t_resolution!==4){
                            t_new_resolution = true;
                            t_resolution = 4;
                            t_visible = 5;
                            t_items_increment = 202;
                        }
                    }
            if(t_new_resolution){
                t_index_max = t_items_length - t_visible;
                t_items_container.css({width: t_items_increment*t_items_length+'px'});
                t_index = Math.min(t_index,t_index_max);
                t_items_container.stop().css({marginLeft: -t_items_increment*t_index+'px'});
            }
        };
        t_w.resize(resize_function);
        resize_function();
    });
};



//PROJECT RELATED SLIDER
var load_project_related_slider = function(){
    $('.projectRelated').each(function(){
        var t_time = 400;   //time for slide movement
        var t_visible;   //nr of visible items
        var t = $(this);
        var t_items_container = t.children('ul');
        var t_items = t_items_container.children('li');
        var t_items_increment = t_items.outerWidth(true);
        var t_prev = t.find('.clientsNavPrev');
        var t_next = t.find('.clientsNavNext');
        var t_prev_function;
        var t_next_function;
        var t_index = 0;
        var t_index_max;
        var t_items_length = t_items.length;
        if(t_browser_has_css3){
            t_items_container.css(t_css3_array[t_css3_index],'margin-left '+t_time/1000+'s ease-in-out');
            t_prev_function = function(){
                if(t_index>0){
                    t_index--;
                    t_items_container.css({marginLeft: -t_items_increment*t_index+'px'});
                }
            };
            t_next_function = function(){
                if(t_index<t_index_max){
                    t_index++;
                    t_items_container.css({marginLeft: -t_items_increment*t_index+'px'});
                }
            };
        }else{
            t_prev_function = function(){
                if(t_index>0){
                    t_index--;
                    t_items_container.stop().animate({marginLeft: -t_items_increment*t_index+'px'},{duration:t_time,queue:false,easing:'swing'});
                }
            };
            t_next_function = function(){
                if(t_index<t_index_max){
                    t_index++;
                    t_items_container.stop().animate({marginLeft: -t_items_increment*t_index+'px'},{duration:t_time,queue:false,easing:'swing'});
                }
            };
        }
        t_prev.click(t_prev_function);
        t_next.click(t_next_function);
        var t_w = $(window);
        var t_resolution = -1;
        var resize_function = function(){
            var w_width = t_w.width();
            var t_new_resolution = false;
            if(w_width<960)
                if(w_width<768)
                    if(w_width<480){
                        //width<480
                        if(t_resolution!==1){
                            t_new_resolution = true;
                            t_resolution = 1;
                            t_visible = 1;
                            t_items_increment = 299;
                        }
                    }else{
                        //480<width<768
                        if(t_resolution!==2){
                            t_new_resolution = true;
                            t_resolution = 2;
                            t_visible = 2;
                            t_items_increment = 255;
                        }
                    }else{
                        //768<width<960
                        if(t_resolution!==3){
                            t_new_resolution = true;
                            t_resolution = 3;
                            t_visible = 3;
                            t_items_increment = 271;
                        }
                    }else{
                        //960<width
                        if(t_resolution!==4){
                            t_new_resolution = true;
                            t_resolution = 4;
                            t_visible = 4;
                            t_items_increment = 245;
                        }
                    }
            if(t_new_resolution){
                t_index_max = t_items_length - t_visible;
                t_items_container.css({width: t_items_increment*t_items_length+'px'});
                t_index = Math.min(t_index,t_index_max);
                t_items_container.stop().css({marginLeft: -t_items_increment*t_index+'px'});
            }
        };
        t_w.resize(resize_function);
        resize_function();
    });
};




//WORKS
var load_works = function(){
    $('.works').each(function(){
        var t = $(this);
        var t_filters = t.children('.worksFilter').children('ul.worksFilterCategories').children('li');
        var t_filters_active_class = 'worksFilterCategoriesActive';
        var t_filters_active_selector = '.'+t_filters_active_class;
        var t_views = t.children('.worksViews').children('.worksViewsOption');
        var t_views_active_class = 'worksViewsOptionActive';
        var t_views_active_selector = '.'+t_views_active_class;
        var t_container = t.children('.worksContainer');
        var t_categorized_object;
        var t_settings1 = {
            itemClass: 'worksEntry',
            time: 400,
            allCategory: 'all'
        };
        var t_options1 = [
            {
                resolution: 960,
                columns: 4,
                itemHeight: 240
            },
            {
                resolution: 768,
                columns: 4,
                itemHeight: 192
            },
            {
                resolution: 480,
                columns: 2,
                itemHeight: 240
            },
            {
                resolution: 300,
                columns: 2,
                itemHeight: 150
            }
        ];
        var t_settings2 = {
            itemClass: 'worksEntry',
            time: 400,
            allCategory: 'all'
        };
        var t_options2 = [
            {
                resolution: 960,
                columns: 1,
                itemHeight: 215,
                itemMarginBottom: 35
            },
            {
                resolution: 768,
                columns: 1,
                itemHeight: 172,
                itemMarginBottom: 35
            },
            {
                resolution: 480,
                columns: 1,
                itemHeight: 107,
                itemMarginBottom: 35
            },
            {
                resolution: 300,
                columns: 1,
                itemHeight: 67,
                itemMarginBottom: 35
            }
        ];
        var t_parameters = [[t_settings1,t_options1],[t_settings2,t_options2]];
        
        
        t_filters.click(function(){
            var t_filters_last = t_filters.filter(t_filters_active_selector).not(this);
            if(t_filters_last.length){
                t_filters_last.removeClass(t_filters_active_class);
                var t_filters_current = $(this);
                t_filters_current.addClass(t_filters_active_class);
                t_categorized_object.changeCategory(t_filters_current.attr('data-category'));
            }
        });
        t_views.click(function(){
            var t_views_last = t_views.filter(t_views_active_selector).not(this);
            if(t_views_last.length){
                t_views_last.removeClass(t_views_active_class);
                t_container.removeClass(t_views_last.attr('data-class'));
                var t_views_current = $(this);
                t_views_current.addClass(t_views_active_class);
                t_container.addClass(t_views_current.attr('data-class'));
                t_categorized_object.destroyCategorizedObject();
                var x_index = t_views.index(this);
                t_parameters[x_index][0].initialCategory = t_filters.filter(t_filters_active_selector).attr('data-category');
                t_categorized_object = t_container.categorized(t_parameters[x_index][0],t_parameters[x_index][1]);
            }
        });
        t_categorized_object = t_container.categorized(t_parameters[0][0],t_parameters[0][1]);
    });
};




//MENU
var load_menu = function(){
    $('.menuContainer select').each(function(){
        var t = $(this);
        t.change(function(){
            window.location=t.val();
        });
    });
}




//CONTACTS
var load_contacts = function(){
    $('.contactForm').each(function(){
        var t = $(this);
        t.submit(function(event) {
            /* stop form from submitting normally */
            event.preventDefault(); 

            /* Send the data using post and put the results in a div */
            $.post("php/contacts.php", t.serialize(),function(result){
                $('.contactResult').html(result);
            });
        }); 
    });
};