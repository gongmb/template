class mx.controls.streamingmedia.LoudButton extends MovieClip
{
    var attachMovie, loudSimpleButton, _parent, tabEnabled, tabChildren;
    function LoudButton()
    {
        super();
        this.init();
    } // End of the function
    function init()
    {
        this.attachMovie("SimpleButton", "loudSimpleButton", 1, {falseUpSkin: "Loud-False-Up", falseOverSkin: "Loud-False-Over", falseDownSkin: "Loud-False-Down", falseDisabledSkin: "Loud-False-Disabled"});
        loudSimpleButton.addEventListener("click", this);
        loudSimpleButton.enabled = _parent._parent.enabled;
        tabEnabled = false;
        tabChildren = true;
    } // End of the function
    function click(ev)
    {
        _parent._parent.broadcastEvent("volume", 100);
        _parent.getHandle().setLoud();
    } // End of the function
} // End of Class
