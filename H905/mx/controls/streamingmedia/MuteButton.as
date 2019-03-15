class mx.controls.streamingmedia.MuteButton extends MovieClip
{
    var attachMovie, muteSimpleButton, _parent, tabEnabled, tabChildren;
    function MuteButton()
    {
        super();
        this.init();
    } // End of the function
    function init()
    {
        this.attachMovie("SimpleButton", "muteSimpleButton", 1, {falseUpSkin: "Mute-False-Up", falseOverSkin: "Mute-False-Over", falseDownSkin: "Mute-False-Down", falseDisabledSkin: "Mute-False-Disabled"});
        muteSimpleButton.addEventListener("click", this);
        muteSimpleButton.enabled = _parent._parent.enabled;
        tabEnabled = false;
        tabChildren = true;
    } // End of the function
    function click(ev)
    {
        _parent._parent.broadcastEvent("volume", 0);
        _parent.getHandle().setMute();
    } // End of the function
} // End of Class
