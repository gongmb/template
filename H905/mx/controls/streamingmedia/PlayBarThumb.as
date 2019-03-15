class mx.controls.streamingmedia.PlayBarThumb extends MovieClip
{
    var _parent, _playBar, __set__enabled, _dragging, _wasPlaying, onMouseMove, _y, _x, _enabled, onPress, onRelease, onReleaseOutside, __get__enabled;
    function PlayBarThumb()
    {
        super();
        this.init();
    } // End of the function
    function init()
    {
        _playBar = _parent;
        this.__set__enabled(_playBar.getController().enabled);
    } // End of the function
    function isVertical()
    {
        return (_playBar.isVertical());
    } // End of the function
    function handlePress()
    {
        this.startThumbDrag();
    } // End of the function
    function startThumbDrag()
    {
        _dragging = true;
        var _loc2 = _playBar.getController();
        _loc2.broadcastEvent("scrubbing", true);
        _wasPlaying = _loc2.isPlaying();
        if (_wasPlaying)
        {
            _loc2.broadcastEvent("click", "pause");
        } // end if
        onMouseMove = handleMouseMove;
    } // End of the function
    function onUnload()
    {
        if (_dragging)
        {
            this.stopThumbDrag();
        } // end if
    } // End of the function
    function handleRelease()
    {
        if (_dragging)
        {
            this.stopThumbDrag();
        } // end if
    } // End of the function
    function handleReleaseOutside()
    {
        if (_dragging)
        {
            this.stopThumbDrag();
        } // end if
    } // End of the function
    function stopThumbDrag()
    {
        _dragging = false;
        var _loc2 = _playBar.getController();
        if (_wasPlaying)
        {
            _loc2.broadcastEvent("click", "play");
        } // end if
        _loc2.broadcastEvent("scrubbing", false);
        delete this.onMouseMove;
    } // End of the function
    function handleMouseMove()
    {
        var _loc2 = _playBar.getController();
        var _loc8 = _loc2.getLoadBar().getCompletionPercentage() / 100;
        if (this.isVertical())
        {
            var _loc6 = _playBar.getHeight() - 8;
            var _loc9 = _loc6 * (1 - _loc8) - 2;
            var _loc3 = _playBar._ymouse;
            if (_loc3 < _loc9)
            {
                _loc3 = _loc9;
            }
            else if (_loc3 > _loc6)
            {
                _loc3 = _loc6;
            } // end else if
            _y = _loc3;
        }
        else
        {
            var _loc10 = (_playBar.getWidth() - 6) * _loc8;
            var _loc4 = _playBar._xmouse;
            if (_loc4 < 0)
            {
                _loc4 = 0;
            }
            else if (_loc4 > _loc10)
            {
                _loc4 = _loc10;
            } // end else if
            _x = _loc4;
        } // end else if
        _playBar.updateHiliteToMatchThumb();
        var _loc5 = this.isVertical() ? (_playBar.yToPercent(_y)) : (_playBar.xToPercent(_x));
        if (mx.controls.streamingmedia.StreamingMediaConstants.SCRUBBING)
        {
            _loc2.broadcastEvent("playheadChange", _loc5);
        } // end if
        var _loc11 = _loc2.__get__playTime() * 100 / _loc2.__get__playPercent();
        var _loc7 = _loc11 * _loc5 / 100;
        _playBar.setTime(_loc7);
        _loc2.__set__playPercent(_loc5);
        _loc2.__set__playTime(_loc7);
    } // End of the function
    function get enabled()
    {
        return (_enabled);
    } // End of the function
    function set enabled(is)
    {
        _enabled = is;
        if (is)
        {
            onPress = handlePress;
            onRelease = handleRelease;
            onReleaseOutside = handleReleaseOutside;
        }
        else
        {
            if (_dragging)
            {
                this.stopThumbDrag();
            } // end if
            delete this.onPress;
            delete this.onRelease;
            delete this.onReleaseOutside;
        } // end else if
        //return (this.enabled());
        null;
    } // End of the function
    function isScrubbing()
    {
        return (_dragging);
    } // End of the function
} // End of Class
