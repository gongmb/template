var browser={
	versions:function(){
	var u = navigator.userAgent, app = navigator.appVersion;
	return{	android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,};
	}(),language:(navigator.browserLanguage || navigator.language).toLowerCase()
}
var Sys = {};  
var ua = navigator.userAgent;
if(ua.match(/version\/([\d.]+).*safari/i)) {
	Sys.safari = ua.match(/version\/([\d.]+)/i)[1];
} else {
	Sys.safari = 0;
}
if(browser.versions.android || Sys.safari < "5.0.3" || ua==''){
	$("<link href='statics/css/ucother.css' rel='stylesheet' type='text/css'>").appendTo('head');
}
if(ua.match(/ucbrowser\/([\d.]+)/i)) {
	Sys.uc = parseFloat(ua.match(/ucbrowser\/([\d.]+)/i)[1]);
} else {
	Sys.uc = 0;
}

//��ʾ�˵�
function show_menu() {
	var bd_top = $(document).scrollTop();
	if($('#menu').css('display')=='none') {
		$('#menu').removeClass('hid');
		$('#menu').addClass('show');
		if(/iphone/i.test(navigator.userAgent) || (Sys.uc >= 9 && bd_top<300)) {
			$('#hed_id').removeClass('hd_box_float');
			$('#play_box').removeClass('p48');
			$('.mnav').css({"position":"relative"});
		}
		setcookie('hidtips','1'); 
	} else {
		$('#menu').removeClass('show');
		$('#menu').addClass('hid');
		if(/iphone/i.test(navigator.userAgent) || (Sys.uc >= 9 && bd_top<300)) {
			$('#hed_id').addClass('hd_box_float');
			$('#play_box').addClass('p48');
			$('.mnav').css({"position":"absolute"});
		}
		setcookie('hidtips','1'); 
	}
 }
//����ҳ-���⴦��ʾ����
function show_more(type) {
	if(type=='1') {
		$('#more_btn').css('display','none');
		$('#more_desc').addClass('show');
		$('#more_desc').removeClass('hid');
		var stat_sid = getRand(8,1);
		$.getScript("../v/"+stat_sid+".stat.ku6.com/dostatv.do@method=getVideoPlayCount&n=v_counts&cp=0&v="+vid);
	} else {
		$('#more_btn').css('display','');
		$('#more_desc').removeClass('show');
		$('#more_desc').addClass('hid');
		
	}
}
//����ҳtab�л�
function change_tab(id,callback) {
	for(i=1;i<4;i++) {
		if(id==i) {
			$('#reid_div'+i).css('display','');
			$('#reid'+i).addClass('ac');
		} else {
			$('#reid_div'+i).css('display','none');
			$('#reid'+i).removeClass('ac');
		}
		if(id==1) {
			$('#relationpage').css('display','');
			$('#topic_id').removeClass('hid');
		} else {
			$('#relationpage').css('display','none');
			$('#topic_id').addClass('hid');
		}
		if (id==3){
			$('#commentpage').css('display','');
		} else {
			$('#commentpage').css('display','none');
		}
	}
	if(callback) callback();
}
//��ʾ�Ƽ�
function showelite() {
	if($("#reid_div2").attr('f')!='1') {
		$.getJSON('api.php@op=json&action=show_elite', function(data) {
		if (data) {
			$("#reid_div2").html('');
			$.each(data.lists, function(n,item){
				$("#reid_div2").append('<li><div class="dv1"><a href="show/'+item.vid+'.html"><img src="http//'+item.picpath+'"></a></div><div class="dv2"><h5><a href="show/'+item.vid+'.html">'+item.title+'</a></h5><div class="cr imgst"><a href="show/'+item.vid+'.html" class="play_btn"></a><ul><li><span>�ϴ���</span>'+item.nick+'</li><li><span>��&nbsp;&nbsp;&nbsp;��</span>'+item.viewed+'</li><li><span>ʱ&nbsp;&nbsp;&nbsp;��</span>'+item.videotime+'</li></ul></div></div></li>');
			})
			$("#reid_div2").attr('f','1');
		}
		});
	}
}
//��ʾ����
function showcomment() {
	if($("#reid_div3").attr('f')!='1') {
		get_commnets(1);
		$("#reid_div3").attr('f','1');
	}
}
//����
$(document).ready(function () {
	$('#dosubmit').click(function (){
		if ($('#content').val()){
			var commentTopicid = $('#commentTopicid').val();
			var content = $('#content').val();
			var replyid = $('#replyid').val();
			$.getJSON('index.php', {m:'comment', c:'index', a:'ajax', vid:vid, content:content, commenttopicid:commentTopicid, replyid:replyid}, function(data) {
				if (data.topicid==1) {
					//$('#commentTopicid').val(data);
					alert('����ʧ�ܣ�');
				} else if(data.topicid==0) {
					alert('����ʧ�ܣ�');
				} else if (data.topicid=='9') {
					alert('���ȵ�¼�������ۣ�');
					window.location.href="index.php@m=member&c=index&a=login_snda";
				} else if(data.topicid=='8') {
					alert('�����б��������ģ�');
					$('#content').focus();
				} else {
					$('#commentTopicid').val(data.topicid);
					var author = $('#user').val();
					var author_photo = $('#userphoto').val();
					if ($("#comment > ul").html()=='ɳ����ȱ�У���������~') {
						$("#comment > ul").html('<li><div class="lrs"><img src="'+author_photo+'"></div><section class="jjxbox"><div class="cr"><h6>'+author+'</h6></div><p>'+data.content+'</p><span><time>�����ڸո�</time></span></section></li>');
					} else {
						$("#comment > ul").prepend('<li><div class="lrs"><img src="'+author_photo+'"></div><section class="jjxbox"><div class="cr"><h6>'+author+'</h6></div><p>'+data.content+'</p><span><time>�����ڸո�</time></span></section></li>');
					}
					$('#content').val('');
					$("#comment > ul").focus();
					window.location.href="#tab";
				}
			});
		} else if(vid) {
			alert('�������������ݣ�');
			$('#content').focus();
		}
	})
});

function get_commnets(pn) {	
	$.getJSON('index.php@m=comment&c=index&a=get', {vid:vid, page:pn, rn:10}, function(data) {
		if (data) {
			$('#comment_loading').addClass('hid');
			$('#commentTopicid').val(data.commenttopicid);
			$("#comment > ul").html('');
			$('#username').html('���ã�'+data.username);
			$('#user').val(data.username);
			$('#userphoto').val(data.userphoto);
			var html = '';
			try {
				$.each(data.lists, function(n,item){
					html = '';
					author = '';
					if (item.commentReplyid!='0' && item.comment) {
						html = '<div class="plst_box"><dl class="cr plx"><dt>';
						if (item.comment.commentAuthor){ 
							author = item.comment.commentAuthor+'(';
						} else {
							author = '��6����(';
						}
  						html += author;
						html += item.comment.commentIpcity+') д����</dt>';
						html += '<dd>'+item.comment.commentContent+'</dd></dl></div>';
					}
					$("#comment > ul").append('<li id="li_'+item.id+'"><div class="lrss"><img src="'+item.userpic+'"></div><section class="jjxboxs"><div class="cr"><a href="javascript:" class="hf_btn" onclick="reply(\''+item.id+'\')">�ظ�</a><h6>'+item.commentAuthor+'</h6></div><p>'+item.commentContent+'</p>'+html+'<span><time>������'+item.commentCtime+'</time>����<address>'+item.commentIpcity+'</address></span></section></li>');
				})
				
			} catch (e) {
				$("#comment > ul").html('ɳ����ȱ�У���������~');
 			}
			if (data.pages) {
				$('#commentpages').remove();
				$('#commentpage').prepend(data.pages);
				window.scrollTo(0, 326);
			}
			if(data.ku6uid==null) {
				$('#content').attr('disabled',"disabled");
				$('#content').attr('placeholder',"���ȵ�¼�������ۣ�");
				$('#dosubmit').attr('type',"hidden");
				$('#tips_but').attr('type',"button");
			}
		} else {
			$('#comment_loading').addClass('hid');
			$("#comment > ul").html('ɳ����ȱ�У���������~');
		}

	});
}

function reply(commentid) {
	var author = $('#user').val();
	if(author=="��6�ֻ��û�") {
		alert('���ȵ�¼�������ۣ�');
		return false;
	}
	if ($('#reply_div_'+commentid).html()) {
		$('#reply_div_'+commentid).remove();
	} else {
		var html = '<section class="cr pl_boxs xmbox" id="reply_div_'+commentid+'"><input type="hidden" name="replyid" placeholder="����������......" value="'+commentid+'"><textarea name="content"></textarea><div class="cr"><input type="submit" name="dosubmit" class="pls_btn" onclick="form_reply(\''+commentid+'\')" value="��������"></div></section>';
		$('#li_'+commentid).after("<li>"+html+"</li>");
	}
}

function form_reply(commentid) {
	var commenttopicid = $('#commentTopicid').val();
	var replyid = $('#reply_div_'+commentid+' > input[name="replyid"]').val();
	var content = $('#reply_div_'+commentid+' > textarea[name="content"]').val();
	var reply_p_content = $('#li_'+commentid+' > section > p').html();
	var reply_author = $('#li_'+commentid+' > section > div > h6').html();
	var reply_area = $('#li_'+commentid+' > section > span > address').html();
	if (content=='') {
		alert('�ظ����ݲ���Ϊ�գ�');
		$('#reply_div_'+commentid+' > textarea[name="content"]').focus();
	} else {
		$.get('index.php', {m:'comment', c:'index', a:'ajax', vid:vid, content:content, commenttopicid:commenttopicid, replyid:replyid}, function(data) {
			if (data==1) {
				//$('#commentTopicid').val(data);
				alert('����ʧ�ܣ�');
			} else if(data==0) {
				alert('����ʧ�ܣ�');
			} else if(data=='8') {
				alert('�����б��������ģ�');
				$('#content').focus();
			} else {
				$('#commentTopicid').val(data);
				var author = $('#user').val();
				var author_photo = $('#userphoto').val();
				var html = '<div class="plst_box"><dl class="cr plx"><dt>'+reply_author+'('+reply_area+') д����</dt><dd>'+reply_p_content+'</dd></dl></div>';
				$("#comment > ul").prepend('<li><div class="lrs"><img src="'+author_photo+'"></div><section class="jjxbox"><div class="cr"><h6>'+author+'</h6></div><p>'+content+'</p>'+html+'<span><time>�����ڸո�</time></span></section></li>');
				$('#reply_div_'+commentid).remove();
				window.location.href="#tab";
			}
		});
	}
}

//����ҳ��ȡ�����Ƶ����ҳ
function get_relation(type) {
	var page = $("#reid_div1").attr('page');
	if(!page) {
		page = 2;
	}
	if(page==1 && type=="up"){
		alert('�Ѿ��ǵ�һҳ�ˣ�');
		return '';
	}
	$.getJSON('api.php@op=json&action=get_relation&type='+type, {vid:vid,page:page},function(data) {
	if (data.code==200) {
		$("#reid_div1").html('');
		$('#series_vids').val('');
		$.each(data.lists, function(n,item) {
			s_vids = n==0 ? item.vid : s_vids+','+item.vid;
			if(page>0) $("#reid_div1").append('<li><div class="dv1"><a href="show/'+item.vid+'.html"><img src="http//'+item.picpath+'"></a></div><div class="dv2"><h5><a href="show/'+item.vid+'.html">'+item.title+'</a></h5><div class="cr imgst"><a href="show/'+item.vid+'.html" class="play_btn"></a><ul><li><span>�ϴ���</span>'+item.nick+'</li><li><span>��&nbsp;&nbsp;&nbsp;��</span>'+item.viewed+'</li><li><span>ʱ&nbsp;&nbsp;&nbsp;��</span>'+item.videotime+'</li></ul></div></div></li>');
		})
		vid_arr = s_vids.split(',');
		if(type=='down') {
			page = parseInt(page)+1;
		} else {
			page = parseInt(page)-1;
		}
		if(page<1) {
			page = 1;
			alert('��һҳû�������ˣ�');
		}
		$("#reid_div1").attr('page',page);
	} else {
		if(type=='up') {
			alert('��һҳû�������ˣ�');
		} else {
			alert('����û�������ˣ�');
		}
	}
	});
}


// �رչ����ʾ��
function close_bd(type) {
	if(type=='app') {
		$('#bd-top').addClass('hid');
		setcookie('hidappdown','1',0.04); 
	} else if(type=='bd-2') {
		$('#bd-2').addClass('hid');
		setcookie('hidappdown','1',0.04); 
	}else if(type == 'hiduc'){
		$('#hiduc').addClass('hid');
		setcookie('hiduc','1',0.04); 
	}
}
//��ʾ��Ƶ������
function v_counts(par1,par2) {
	$('#play_num').html("���Ŵ�����"+par1[0]['count']);
}
//ȡ���ֵ
function getRand(arr, len) {
	
	if(toString.apply(arr) === '[object Number]') {
		
		var new_arr = new Array();
		for(var i = 0; i < arr; i++) { 
			new_arr[i] = i;
		}
		arr = new_arr;
	}
    arr.sort(function () { 
        return Math.random()-0.5; 
    }); 
    return arr.slice(0, len); 
}
//����ҳ��ȡ��Ƶ��Ϣ��������
function get_video(vid,callback,fromstr) {
	$.getJSON('api.php@op=json&action=get_video&vid='+vid, function(data) {
	if (data) {
		if(data.vouch=='13') {
			window.location.href="show/"+vid+".html@localhref=vouch";
			return false;
		}
		$('#title').html(data.title);
		$('#desc').html(data.desc);
		$('#nickname').html("�ϴ��ߣ�<a href='./"+data.userid+"/1.html'>"+data.nick+"</a>");
		//����url
		if(supports_history_api()) {
			history.pushState(null,data.title,'show/'+vid+'.html');
			history.replaceState(null,data.title,'show/'+vid+'.html');
		}
		document.title=data.title;
		KP_play_url = 'show/'+vid+'.html@lb=1'+fromstr;
		callback();
	}
	});
	if($('#reid3').attr('class')=='ac') {
		get_commnets(1);
	}
	$("#reid_div2").attr('f','0');
	$("#reid_div3").attr('f','0');
	if($('#more_desc').attr('class')=="show") {
		var stat_sid = getRand(8,1);
		$.getScript("../v/"+stat_sid+".stat.ku6.com/dostatv.do@method=getVideoPlayCount&n=v_counts&cp=0&v="+vid);
	}
	$.getScript("api.php@op=add_play_record&lb=1&vid="+vid+"&refer=" + document.referrer+"");
}
function supports_history_api(){
        return !!(window.history && history.pushState);
}

//����uuid
(function() {
  var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  Math.uuidFast = function() {
    var chars = CHARS, uuid = new Array(12), rnd=0, r;
    for (var i = 0; i < 12; i++) {
      if (rnd <= 0x02) rnd = 0x2000000 + (Math.random()*0x1000000)|0;
        r = rnd & 0xf;
        rnd = rnd >> 4;
        uuid[i] = chars[r];
    }
    return uuid.join('');
  };
})();