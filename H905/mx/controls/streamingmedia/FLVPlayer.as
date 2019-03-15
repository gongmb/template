class mx.controls.streamingmedia.FLVPlayer extends mx.controls.streamingmedia.AbstractPlayer
{
    var _mediaUrl, _videoHolder, _video, _totalTime, _listeners, setPlaying, _isLoaded, _sound, isPlaying, _ns, _nc, _videoHeight, _videoWidth, _momentaryPlayId;
    function FLVPlayer(aMediaUrl, aVideoHolder, aTotalTime)
    {
        super();
        if (aMediaUrl == null || aVideoHolder == null || aTotalTime == null)
        {
        } // end if
        _mediaUrl = aMediaUrl;
        _videoHolder = aVideoHolder;
        _video = _videoHolder._video;
        _totalTime = aTotalTime;
        this.init();
    } // End of the function
    function init()
    {
        _listeners = new Array();
        this.setPlaying(false);
        _isLoaded = false;
        _sound = new Sound(_videoHolder);
        this.setVolume(mx.controls.streamingmedia.StreamingMediaConstants.DEFAULT_VOLUME);
    } // End of the function
    function addListener(aListener)
    {
        _listeners.push(aListener);
    } // End of the function
    function removeAllListeners()
    {
        _listeners.length = 0;
    } // End of the function
    function broadcastEvent(status)
    {
        for (var _loc2 = 0; _loc2 < _listeners.length; ++_loc2)
        {
            _listeners[_loc2].handlePlayer(this, status);
        } // end of for
    } // End of the function
    function bufferIsFull()
    {
        this.broadcastEvent("start");
        if (!this.isPlaying())
        {
            this.pause();
        } // end if
    } // End of the function
    function resizeVideo()
    {
        this.broadcastEvent("resizeVideo");
        if (!this.isPlaying())
        {
            this.pause();
        } // end if
    } // End of the function
    function toString()
    {
        return ("FLVPlayer: Playing " + this.getMediaUrl());
    } // End of the function
    function close()
    {
        _ns.close();
        _nc.close();
        _video.clear();
    } // End of the function
    function load()
    {
        _nc = new NetConnection();
        _nc.connect(null);
        _ns = new mx.controls.streamingmedia.PlayerNetStream(_nc, this);
        this.assignBufferTime();
        _video.attachVideo(_ns);
        _videoHeight = _video.height;
        _videoWidth = _video.width;
        _videoHolder.attachAudio(_ns);
        _ns.play(_mediaUrl);
        _isLoaded = true;
        _videoHolder._visible = false;
        this.setPlaying(false);
    } // End of the function
    function assignBufferTime()
    {
        var _loc2 = _totalTime / 4;
        if (_loc2 < 1.000000E-001)
        {
            _loc2 = 1.000000E-001;
        }
        else if (_loc2 > 5)
        {
            _loc2 = 5;
        } // end else if
        _ns.setBufferTime(_loc2);
    } // End of the function
    function play(startingPoint)
    {
        if (!_isLoaded)
        {
            this.load();
        } // end if
        if (startingPoint != null)
        {
            _ns.seek(startingPoint);
        } // end if
        _ns.pause(false);
        this.setPlaying(true);
    } // End of the function
    function pause()
    {
        _ns.pause(true);
        this.setPlaying(false);
    } // End of the function
    function stop()
    {
        this.pause();
        this.setPlayheadTime(0);
    } // End of the function
    function getPlayheadTime()
    {
        return (_ns.time);
    } // End of the function
    function setPlayheadTime(position)
    {
        _ns.seek(position);
        if (mx.controls.streamingmedia.StreamingMediaConstants.SCRUBBING)
        {
        }
        else if (!this.isPlaying())
        {
            _ns.pause(false);
            _momentaryPlayId = setInterval(this, "doneUpdateFrame", 50);
        } // end else if
    } // End of the function
    function doneUpdateFrame()
    {
        clearInterval(_momentaryPlayId);
        _momentaryPlayId = null;
        _ns.pause(true);
    } // End of the function
    function playStopped()
    {
        this.pause();
        this.broadcastEvent("complete");
    } // End of the function
    function getMediaUrl()
    {
        return (_mediaUrl);
    } // End of the function
    function setMediaUrl(aUrl)
    {
        _mediaUrl = aUrl;
        _isLoaded = false;
        if (this.isPlaying())
        {
            this.play(0);
        }
        else
        {
            this.load();
        } // end else if
    } // End of the function
    function getVolume()
    {
        return (_sound.getVolume());
    } // End of the function
    function setVolume(aVol)
    {
        _sound.setVolume(aVol);
    } // End of the function
    function getMediaBytesLoaded()
    {
        return (_ns.bytesLoaded);
    } // End of the function
    function getMediaBytesTotal()
    {
        return (_ns.bytesTotal);
    } // End of the function
    function getTotalTime()
    {
        return (_totalTime);
    } // End of the function
    function setTotalTime(aTime)
    {
        _totalTime = aTime;
        this.assignBufferTime();
    } // End of the function
    function mediaLoaded()
    {
    } // End of the function
    function logError(error)
    {
    } // End of the function
    function isSizeSet()
    {
        if (_video.width > 0 && _video.height > 0)
        {
            return (true);
        } // end if
        return (false);
    } // End of the function
    function isSizeChange()
    {
        if (_video.width != _videoWidth || _video.height != _videoHeight)
        {
            _videoWidth = _video.width;
            _videoHeight = _video.height;
            return (true);
        } // end if
        return (false);
    } // End of the function
    function setSeeking(isSeeking)
    {
    } // End of the function
} // End of Class
