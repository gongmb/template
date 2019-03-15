class mx.controls.streamingmedia.VolumeControl extends MovieClip
{
    var tabEnabled, tabChildren, _handle;
    function VolumeControl()
    {
        super();
        this.init();
    } // End of the function
    function init()
    {
        tabEnabled = false;
        tabChildren = true;
    } // End of the function
    function getHandle()
    {
        return (_handle);
    } // End of the function
} // End of Class
