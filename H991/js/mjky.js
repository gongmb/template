 var F_render_tpl = function(){
            if ($("#keyword").val() == "") {
                alert("搜索内容不能为空哦~");
                return false;
            }else{
                
                
                var keyv = $("#keyword").val();
                $.ajax({
                    url: 'Index/ajaxSearch',
                    type: 'POST',
                    dataType: 'json',
                    data: {key: keyv},
                    success: function(data, status, xhr){
                        if(data.code == "1002"){
                            alert(data.msg);
                            return false;
                        }else{
                            var element = $('#element'),
                            tpl = $('#tpl').html();
                            var data = data.data;
                            // 解析模板, 返回解析后的内容
                            var html = _.template(tpl, data);
                            // 将解析后的内容填充到渲染元素
                            element.html(html);
                            F_search_submit();
                        }
                    }
                });
            }   
        }

        var F_p_render_tpl = function(){
            if ($("#keyword").val() == "") {
                alert("搜索内容不能为空哦~");
                return false;
            }else{
                
                
                var keyv = $("#keyword").val();
                $.ajax({
                    url: 'Index/ajaxSearch',
                    type: 'POST',
                    dataType: 'json',
                    data: {key: keyv},
                    success: function(data, status, xhr){
                        if(data.code == "1002"){
                            alert(data.msg);
                            return false;
                        }else{
                            var element = $('#element'),
                            tpl = $('#tpl').html();
                            var data = data.data;
                            var html = _.template(tpl, data);
                            element.html(html);
                        }
                    }
                });
            }   
        }

        var F_side = function(){
            if ($("#nav").hasClass('out')) {

                $("#nav").removeClass('out');
                
                $("#find").addClass('active').find('i').removeClass("ico08").addClass('ico19').find('img').attr({
                    src: 'images/ss2.png'
                });
                $("#cover").css({
                    display: 'block'
                });
                
            }else{
                $("#find").removeClass('active').find('i').removeClass("ico19").addClass('ico08').find('img').attr({
                    src: 'images/ss1.png'
                });
                $("#nav").addClass('out');
                $("#cover").css({
                    display: 'none'
                });
            }
        }

        var F_search_submit = function(){
            $("#search-submit").find('i').removeClass("ico01").addClass('ico02');
            F_side();
            if ($("#seach-page").hasClass('out')) {
                $("#head").css({
                    display: 'none'
                });
                $("#foot").css({
                    display: 'none'
                });
                $("#seach-page").removeClass('out');
                /*$(".app").addClass('p-none');*/
                $("#goods").css({
                    display: 'none'
                });
                
            }else{
                $("#head").css({
                    display: 'block'
                });
                $("#foot").css({
                    display: 'block'
                });
                $("#seach-page").addClass('out');
                $(".app").removeClass('p-none');
                $("#goods").css({
                    display: 'block'
                });
            }

        }

        var F_search_showdelete = function(){
            $("#delete-search").css({
                display: 'block'
            });
        }

        var F_search_delete = function(){
            $("#keyword").val("");
        }

        var F_bannar = function(){
            $(".bannar").hide(400);
        }

        $("#cover").bind('click', F_side);
        $("#find").bind("click", F_side);
        $("#search-submit").bind('click', F_render_tpl);
        $("#p-search-submit").bind('click', F_p_render_tpl);
        $("#p-find").bind("click", F_search_submit);
        $("#delete-search").bind("click",F_search_delete);
        $("#keyword").bind('keydown', F_search_showdelete);
        $("#x").bind('click', F_bannar);

        $('#close_box').on('click', function(){
            $('.alert_fullbg').hide();
            $('#alert_exchange_new').hide();
        }) 

        $('#user').on('click', function(){
            $('.alert_fullbg').show();
            $('#alert_exchange_new').show();
        })
        $('.alert_black_bg .close').on('click', function(){
            $('.alert_black_bg').hide();
        })

