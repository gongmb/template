class mx.controls.streamingmedia.FullScreenToggleControl extends MovieClip
{
    var _parent, toggle, _enabled, onRollOver, onRollOut, onRelease, gotoAndStop;
    function FullScreenToggleControl()
    {
        super();
        this.init();
    } // End of the function
    function init()
    {
        toggle = _parent;
        this.setEnabled(toggle.getEnabled());
    } // End of the function
    function handleRollOver()
    {
        this.getController().setNotAnimating(true);
    } // End of the function
    function handleRollOut()
    {
        this.getController().setNotAnimating(false);
    } // End of the function
    function handleRelease()
    {
        toggle.toggleDisplay();
    } // End of the function
    function getController()
    {
        return (toggle.getPlayer().getController());
    } // End of the function
    function getEnabled()
    {
        return (_enabled);
    } // End of the function
    function setEnabled(is)
    {
        mx.controls.streamingmedia.Tracer.trace("FullScreenToggleControl.setEnabled: " + is);
        _enabled = is;
        if (is)
        {
            onRollOver = handleRollOver;
            onRollOut = handleRollOut;
            onRelease = handleRelease;
            this.gotoAndStop("_up");
        }
        else
        {
            delete this.onRollOver;
            delete this.onRollOut;
            delete this.onRelease;
            this.gotoAndStop("_disabled");
        } // end else if
    } // End of the function
} // End of Class
