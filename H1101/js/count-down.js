// JavaScript Document

function jfCountDown(d, h, m, s) //constructor
{	
	this.days = d;	
	this.hours = h;	
	this.minutes = m;	
	this.seconds = s;
	
	this.idDays = $('#days');	
	this.idHours = $('#hours');	
	this.idMinutes = $('#minutes');	
	this.idSeconds = $('#seconds');
	
	this.update();
	
	var self = this;
		
	this.id_interval = setInterval(function() {self.run();}, 1000);	
}

jfCountDown.prototype.update = function()
{
	this.idDays.text(this.days);
	this.idHours.text(this.hours);
	this.idMinutes.text(this.minutes);	
	this.idSeconds.text(this.seconds);
}

jfCountDown.prototype.run = function()
{	
	if(this.seconds == 0)
	{
		if(this.minutes == 0)
		{
			if(this.hours == 0)
			{
				if(this.days == 0)
				{
					clearInterval(this.id_interval);
				  window.alert('Open!!!');
				}
				else
				{
					this.days -= 1;
					this.hours = 23;
					this.minutes = 59;
					this.seconds = 59;				
				}
			}
			else
			{				
				this.hours -= 1;
				this.minutes = 59;
				this.seconds = 59;				
			}
		}
		else
		{
			this.minutes -= 1;
			this.seconds = 59;
		}
	}
	else
	{
		this.seconds -= 1;		
	}
	
	this.update();
}