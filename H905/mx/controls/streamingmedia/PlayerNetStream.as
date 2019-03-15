class mx.controls.streamingmedia.PlayerNetStream extends NetStream
{
    var _player, __get__player, detectedFirstBuffer, initId, checkSizeInterval, __set__player;
    function PlayerNetStream(nc, aPlayer)
    {
        super(nc);
        this.setPlayer(aPlayer);
    } // End of the function
    function getPlayer()
    {
        return (_player);
    } // End of the function
    function get player()
    {
        return (this.getPlayer());
    } // End of the function
    function setPlayer(aPlayer)
    {
        _player = aPlayer;
    } // End of the function
    function set player(aPlayer)
    {
        this.setPlayer(aPlayer);
        //return (this.player());
        null;
    } // End of the function
    function pause(shouldPause)
    {
        super.pause(shouldPause);
    } // End of the function
    function setBufferTime(time)
    {
        super.setBufferTime(time);
    } // End of the function
    function play(name, st, len, reset)
    {
        super.play(name, st, len, reset);
    } // End of the function
    function seek(offset)
    {
        super.seek(offset);
    } // End of the function
    function close()
    {
        super.close();
    } // End of the function
    function attachAudio(theMicrophone)
    {
        super.attachAudio(theMicrophone);
    } // End of the function
    function attachVideo(theCamera, snapshotMilliseconds)
    {
        super.attachVideo(theCamera, snapshotMilliseconds);
    } // End of the function
    function onStatus(info)
    {
        var _loc2 = this.getPlayer();
        switch (info.code)
        {
            case "NetStream.Buffer.Full":
            {
                break;
            } 
            case "NetStream.Play.Start":
            {
                detectedFirstBuffer = false;
                clearInterval(initId);
                checkSizeInterval = 10;
                initId = setInterval(this, "detect", checkSizeInterval);
                break;
            } 
            case "NetStream.Pause.Notify":
            {
                break;
            } 
            case "NetStream.Play.Stop":
            {
                clearInterval(initId);
                _loc2.playStopped();
                break;
            } 
            case "NetStream.Play.Failed":
            case "NetStream.Play.StreamNotFound":
            {
                var _loc3;
                _loc3 = "Error playing URL: " + info.description;
                _loc2.logError(_loc3);
                break;
            } 
            case "NetStream.Seek.Notify":
            {
                _loc2.setSeeking(false);
                break;
            } 
        } // End of switch
    } // End of the function
    function detect()
    {
        var _loc2 = this.getPlayer();
        if (!detectedFirstBuffer && _loc2.isSizeSet())
        {
            detectedFirstBuffer = true;
            _loc2.bufferIsFull();
        } // end if
        if (_loc2.isSizeChange())
        {
            _loc2.resizeVideo();
        } // end if
        clearInterval(initId);
        checkSizeInterval = checkSizeInterval * 2;
        initId = setInterval(this, "detect", checkSizeInterval);
    } // End of the function
    function onMetaData(info)
    {
        var _loc2 = this.getPlayer();
        if (_loc2 instanceof mx.controls.streamingmedia.FLVPlayer)
        {
            var _loc3 = _loc2;
            _loc3.setTotalTime(info.duration);
        }
        else if (_loc2 instanceof mx.controls.streamingmedia.RTMPPlayer)
        {
            var _loc4 = _loc2;
            _loc4.setTotalTime(info.duration);
        } // end else if
    } // End of the function
} // End of Class
