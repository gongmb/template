// JavaScript Document
// ver-001 2012-06-14

function jfSubscribeForm($subscribeId, $path) {	
	this.path = $path;
	//this.email = $('#subscribe-email');
	//this.message = $('#subcribe-message');
	this.parent = $($subscribeId);
	this.email = this.parent.find('input[name=email]');
	this.message = this.parent.find('.message');

	var $self = this;		
	
	//$('#subscribe .button-submit').click(function(event){
	this.parent.find('.button-submit').bind('click', function(event){
		$self.subscribe();
			
		event.preventDefault();
	});
	
	this.parent.find('form').bind('submit', function(event){
		$self.subscribe();
		
		event.preventDefault();
	});
	
	this.email.keyup(function(event){
		if (event.keyCode == '13') {
			$self.subscribe();		
			event.preventDefault();
		}
	});
}

jfSubscribeForm.prototype.subscribe = function() {
	
	var $self = this;
	
	var $request = 'jf_subscribe_email=';
		
		if(this.email.attr('alt') != this.email.val()) {
			$request = $request + this.email.val();	
		}		
		
		$.ajax({
			type: "POST",
			data: $request,
			cach: false,
			dataType: "json",
			url: this.path + "/subscribe.php",
			beforeSend: function(){
				$(this.parent).append('<div class="preloader-small" id="preloader-subscribe"><span></span></div>');
			},
			complete: function() {			
				$('#preloader-subscribe').remove();
			},
			error: function() {
				$('#preloader-subscribe').remove();
				window.alert('Error subscribe.');
			},
			success: function(data)
			{		
				//window.alert('Data ' + data.message);
				$self.message.text(data.message);
				$self.message.fadeIn();
			
				switch(data.status)
				{
					case 1: // error field value
						$self.message.addClass('error');
					break;
					case 2: // OK
						$self.message.removeClass('error');
					break;							
				}
			}
		});	
	
};