class mx.controls.streamingmedia.VolumeControlHandle extends MovieClip
{
    var _parent, _volumeControl, _controller, __set__enabled, tabEnabled, tabChildren, _x, startDrag, onMouseMove, stopDrag, _enabled, onPress, onRelease, onReleaseOutside, __get__enabled;
    function VolumeControlHandle()
    {
        super();
        this.init();
    } // End of the function
    function init()
    {
        _volumeControl = _parent;
        _controller = _parent._parent;
        this.setVolume(_controller.__get__volume());
        this.__set__enabled(_controller.enabled);
        tabEnabled = false;
        tabChildren = false;
    } // End of the function
    function isVertical()
    {
        //return (!_controller.horizontal());
    } // End of the function
    function setVolume(aVolume)
    {
        if (aVolume < 0)
        {
            aVolume = 0;
        }
        else if (aVolume > 100)
        {
            aVolume = 100;
        } // end else if
        _x = this.volumeToX(aVolume);
    } // End of the function
    function setMute()
    {
        this.setVolume(0);
    } // End of the function
    function setLoud()
    {
        this.setVolume(100);
    } // End of the function
    function handlePress()
    {
        this.startThumbDrag();
    } // End of the function
    function handleRelease()
    {
        this.stopThumbDrag();
    } // End of the function
    function handleReleaseOutside()
    {
        this.stopThumbDrag();
    } // End of the function
    function startThumbDrag()
    {
        this.startDrag(false, 12, 3, 12 + this.getRange(), 3);
        onMouseMove = handleMouseMove;
    } // End of the function
    function stopThumbDrag()
    {
        this.stopDrag();
        delete this.onMouseMove;
        this.broadcastEvent();
    } // End of the function
    function handleMouseMove()
    {
        this.broadcastEvent();
    } // End of the function
    function broadcastEvent()
    {
        _controller.broadcastEvent("volume", this.xToVolume(_x));
    } // End of the function
    function xToVolume(x)
    {
        return ((x - 12) * (100 / this.getRange()));
    } // End of the function
    function volumeToX(aVol)
    {
        return (aVol / (100 / this.getRange()) + 12);
    } // End of the function
    function getRange()
    {
        var _loc2 = this.isVertical() ? (27) : (50);
        return (_loc2);
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
            delete this.onPress;
            delete this.onRelease;
            delete this.onReleaseOutside;
        } // end else if
        //return (this.enabled());
        null;
    } // End of the function
} // End of Class
