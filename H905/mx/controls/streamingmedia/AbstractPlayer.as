class mx.controls.streamingmedia.AbstractPlayer
{
    var _playing, __get__playing;
    function AbstractPlayer()
    {
        _playing = false;
    } // End of the function
    function isPlaying()
    {
        return (_playing);
    } // End of the function
    function get playing()
    {
        return (this.isPlaying());
    } // End of the function
    function setPlaying(flag)
    {
        _playing = flag;
    } // End of the function
} // End of Class
