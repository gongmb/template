$(window).ready(function() {
  $('.testimonials').flexslider({
  		animation: "slide",
  		controlNav: false,
  		directionNav:true,
  	   animationLoop: true,
  	   itemWidth: 420,
  	   itemMargin: 0
  });
  
$('.mainslider').flexslider({
  			slideshow: true,
  			controlNav: false,
  			nextText: "<i class='icon-chevron-right'></i>",
  			prevText:"<i class='icon-chevron-left'></i>" 
  		});
  
  $('#thumbs a').touchTouch();
  
  
        function send(mail) {
        	jQuery.ajax({
                type: "POST",
                url: "php/mail.php",
                data: {email:mail},
                cache: false,
                success: function (html) {
                
                    setTimeout(function(){
                    jQuery("#submit").removeClass("disabled");
                    $('.respond').addClass('success');
                    $('#submit').removeClass('disabled');
                    jQuery(".respond").html(html);
                    setTimeout(function(){
                    jQuery(".respond").html('Thank you for Subscribing !');}, 2000);
                    }, 2000);
                    
                }
            });
        }
   $('#subscribemail').each(function() {
   var default_value = this.value;
   $(this).focus(function() {
   if(this.value == default_value) {
   this.value = '';
   $(this).css('color', '#000');
   }
   });
   $(this).blur(function() {
   if(this.value == '') {
   $(this).css('color', '#999');
   this.value = default_value;
   }
   });
   });
            $("#submit").click(function (event) {
                event.preventDefault();
                var valid = "";
               
                var mail = $('#subscribemail').val();
                if (!mail.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)) {
                    valid += "Invalid&nbsp;email";
                }
                if (valid != "") {
                    $('#subscribemail').after("<a class='error_icon tooltip' rel='tooltip' title="+ valid + "></a>");
                     $('#subscribemail').addClass('error_input');
                     $('.respond').addClass('error');
                     $('.respond').text('Invalid Email !');
                     $('#subscribemail').tooltip();
                } else {
                    if($('#subscribemail').hasClass('error_input')){
                    	$('#subscribemail').removeClass('error_input');
                    	$('.respond').text('');$('.respond').addClass('success');
                    };
                    $("#submit").addClass('disabled');
                    $(".respond").html('Subscribing...');
                    setTimeout(function(){send(mail);}, 2000);
                }
                return false;
            });
            
            jQuery("#subscribemail").keypress(function(e) {
                if(e.keyCode == 13) {
                    jQuery("#submit").click();
                    return false;
                }
  
        });
        
  
  
});
