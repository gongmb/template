class mx.controls.streamingmedia.PlayBar extends MovieClip
{
    var _parent, _controller, _thumb, _hilite, _timeTextField, _statusTextField, onEnterFrame, _darkenText, _textPulseTime, _x, _y, _tray, __get__enabled, __set__enabled;
    function PlayBar()
    {
        super();
        this.init();
    } // End of the function
    function init()
    {
        _controller = _parent;
        this.setCompletionPercentage(_controller.__get__playPercent());
        this.setTime(_controller.__get__playTime());
        this.draw();
    } // End of the function
    function isVertical()
    {
        //return (!_controller.horizontal());
    } // End of the function
    function getCompletionPercentage()
    {
        var _loc2;
        if (this.isVertical())
        {
            _loc2 = this.yToPercent(_thumb._y);
        }
        else
        {
            _loc2 = this.xToPercent(_thumb._x);
        } // end else if
        return (_loc2);
    } // End of the function
    function setCompletionPercentage(aPercentage)
    {
        aPercentage = Math.floor(aPercentage);
        if (aPercentage < 1)
        {
            aPercentage = 1;
        }
        else if (aPercentage > 100)
        {
            aPercentage = 100;
        } // end else if
        if (this.isVertical())
        {
            var _loc3 = this.percentToY(aPercentage);
            _thumb._y = this.getHeight() - _loc3 - 9;
        }
        else
        {
            var _loc4 = this.percentToX(aPercentage);
            _thumb._x = _loc4;
        } // end else if
        this.updateHiliteToMatchThumb();
    } // End of the function
    function updateHiliteToMatchThumb()
    {
        if (this.isVertical())
        {
            _hilite._height = this.getHeight() - _thumb._y - 6;
            _hilite._y = this.getHeight() - _hilite._height - 1;
        }
        else
        {
            _hilite._width = _thumb._x + 4;
        } // end else if
    } // End of the function
    function setTime(aTime)
    {
        var _loc7 = Math.floor(aTime / 3600);
        var _loc3 = aTime % 3600;
        var _loc6 = Math.floor(_loc3 / 60);
        _loc3 = _loc3 % 60;
        var _loc5 = Math.floor(_loc3);
        _loc3 = _loc3 % 1;
        var _loc2 = Math.round(_loc3 * 1000);
        var _loc4 = _loc7 + ":" + (_loc6 < 10 ? ("0") : ("")) + _loc6 + ":" + (_loc5 < 10 ? ("0") : ("")) + _loc5 + ".";
        if (_loc2 < 10)
        {
            _loc4 = _loc4 + ("00" + String(_loc2));
        }
        else if (_loc2 < 100)
        {
            _loc4 = _loc4 + ("0" + String(_loc2));
        }
        else
        {
            _loc4 = _loc4 + String(_loc2);
        } // end else if
        _timeTextField.text = _loc4;
    } // End of the function
    function setIsPlaying(isPlaying)
    {
        if (isPlaying)
        {
            _statusTextField.text = _controller.getLocalizedString(mx.controls.streamingmedia.PlayBar.STREAMING_ID);
            delete this.onEnterFrame;
            this.setDarkText();
        }
        else
        {
            _statusTextField.text = _controller.getLocalizedString(mx.controls.streamingmedia.PlayBar.PAUSED_ID);
            _darkenText = false;
            _textPulseTime = getTimer();
            onEnterFrame = pulseText;
        } // end else if
    } // End of the function
    function getController()
    {
        return (_controller);
    } // End of the function
    function draw()
    {
        var _loc2 = this.getCompletionPercentage();
        if (this.isVertical())
        {
            _x = (_controller.__get__width() - this.getWidth()) / 2;
            _y = 8;
            _tray.setHeight(this.getHeight());
            _statusTextField._y = this.getHeight() - 4;
        }
        else
        {
            _x = 8;
            _tray.setWidth(this.getWidth());
            _timeTextField._x = this.getWidth() - _timeTextField._width - 3;
        } // end else if
        this.setIsPlaying(_controller.isPlaying());
        this.setCompletionPercentage(_loc2);
    } // End of the function
    function getWidth()
    {
        var _loc2 = this.isVertical() ? (20) : (_controller.__get__width() - 16);
        return (_loc2);
    } // End of the function
    function getHeight()
    {
        var _loc2 = this.isVertical() ? (_controller.__get__height() - 90) : (20);
        return (_loc2);
    } // End of the function
    function xToPercent(x)
    {
        var _loc2 = 100 * ((x + 3) / (this.getWidth() - 3));
        return (_loc2);
    } // End of the function
    function percentToX(percent)
    {
        var _loc2 = (this.getWidth() - 3) * (percent / 100) - 3;
        return (_loc2);
    } // End of the function
    function yToPercent(y)
    {
        var _loc2 = 100 * ((this.getHeight() - 3 - y) / this.getHeight());
        return (_loc2);
    } // End of the function
    function percentToY(percent)
    {
        var _loc2 = (this.getHeight() - 3) * (percent / 100) - 3;
        return (_loc2);
    } // End of the function
    function pulseText()
    {
        var _loc2 = getTimer() - _textPulseTime;
        var _loc5 = Math.min(1, _loc2 / mx.controls.streamingmedia.PlayBar.PULSE_DURATION);
        var _loc7 = mx.controls.streamingmedia.PlayBar.PULSE_DURATION * mx.controls.streamingmedia.PlayBar.ACTIVE_PULSE_PORTION;
        var _loc6 = Math.min(1, _loc2 / _loc7);
        var _loc4 = _loc6 * (mx.controls.streamingmedia.PlayBar.TEXT_ALPHA_DARK - mx.controls.streamingmedia.PlayBar.TEXT_ALPHA_LIGHT);
        var _loc3 = _darkenText ? (mx.controls.streamingmedia.PlayBar.TEXT_ALPHA_LIGHT + _loc4) : (mx.controls.streamingmedia.PlayBar.TEXT_ALPHA_DARK - _loc4);
        _statusTextField._alpha = _loc3;
        _timeTextField._alpha = _loc3;
        if (_loc5 >= 1)
        {
            _darkenText = !_darkenText;
            _textPulseTime = getTimer();
        } // end if
    } // End of the function
    function setDarkText()
    {
        _statusTextField._alpha = mx.controls.streamingmedia.PlayBar.TEXT_ALPHA_DARK;
        _timeTextField._alpha = mx.controls.streamingmedia.PlayBar.TEXT_ALPHA_DARK;
    } // End of the function
    function setLightText()
    {
        _statusTextField._alpha = mx.controls.streamingmedia.PlayBar.TEXT_ALPHA_LIGHT;
        _timeTextField._alpha = mx.controls.streamingmedia.PlayBar.TEXT_ALPHA_LIGHT;
    } // End of the function
    function get enabled()
    {
        //return (_thumb.enabled());
    } // End of the function
    function set enabled(is)
    {
        _thumb.__set__enabled(is);
        //return (this.enabled());
        null;
    } // End of the function
    function isScrubbing()
    {
        return (_thumb.isScrubbing());
    } // End of the function
    static var TEXT_ALPHA_DARK = 100;
    static var TEXT_ALPHA_LIGHT = 50;
    static var PULSE_DURATION = 1400;
    static var ACTIVE_PULSE_PORTION = 4.000000E-001;
    static var STREAMING_ID = "streaming";
    static var PAUSED_ID = "paused";
} // End of Class
