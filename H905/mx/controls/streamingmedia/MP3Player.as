class mx.controls.streamingmedia.MP3Player extends mx.controls.streamingmedia.AbstractPlayer
{
    var _mediaUrl, _soundHolder, _positionOnLoad, _listeners, _sound, _volume, _recentPosition, _loaded, setPlaying, isPlaying;
    function MP3Player(aMediaUrl, aSoundHolder)
    {
        super();
        if (aMediaUrl == null || aSoundHolder == null)
        {
        } // end if
        _mediaUrl = aMediaUrl;
        _soundHolder = aSoundHolder;
        this.init();
    } // End of the function
    function willStop()
    {
        return (_positionOnLoad == mx.controls.streamingmedia.MP3Player.STOP);
    } // End of the function
    function init()
    {
        _listeners = new Array();
        _sound = new Sound(_soundHolder);
        _volume = mx.controls.streamingmedia.StreamingMediaConstants.DEFAULT_VOLUME;
        var _loc4 = Object(_sound);
        _loc4.player = this;
        _sound.onSoundComplete = function ()
        {
            var _loc3 = Object(this);
            var _loc2 = _loc3.player;
            _loc2.setPlaying(false);
            _loc2.broadcastEvent("complete");
        };
        _recentPosition = 0;
        _loaded = false;
        _positionOnLoad = mx.controls.streamingmedia.MP3Player.STOP;
        this.setPlaying(false);
    } // End of the function
    function playStarted()
    {
        _loaded = true;
        this.initializeVolume();
        if (_positionOnLoad == mx.controls.streamingmedia.MP3Player.STOP)
        {
            this.stop();
        }
        else
        {
            this.play(_positionOnLoad);
        } // end else if
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
    function load()
    {
        this.setPlaying(true);
        _positionOnLoad = mx.controls.streamingmedia.MP3Player.STOP;
        _sound.loadSound(_mediaUrl, true);
        _sound.setVolume(0);
    } // End of the function
    function play(startingPoint)
    {
        if (startingPoint == null)
        {
            startingPoint = _recentPosition;
        } // end if
        if (_loaded)
        {
            _sound.start(startingPoint);
        }
        else
        {
            _positionOnLoad = startingPoint;
            _sound.loadSound(_mediaUrl, true);
            _sound.setVolume(0);
        } // end else if
        this.setPlaying(true);
    } // End of the function
    function pause()
    {
        _recentPosition = _sound.position / 1000;
        _sound.stop();
        this.setPlaying(false);
    } // End of the function
    function stop()
    {
        _recentPosition = 0;
        _sound.stop();
        this.setPlaying(false);
    } // End of the function
    function getPlayheadTime()
    {
        var _loc2 = this.isPlaying() ? (_sound.position / 1000) : (_recentPosition);
        return (_loc2);
    } // End of the function
    function setPlayheadTime(aPosition)
    {
        _recentPosition = aPosition;
        if (this.isPlaying())
        {
            this.play(aPosition);
        } // end if
    } // End of the function
    function getMediaUrl()
    {
        return (_mediaUrl);
    } // End of the function
    function setMediaUrl(aUrl)
    {
        _loaded = false;
        _mediaUrl = aUrl;
        if (this.isPlaying())
        {
            this.play(0);
        }
        else
        {
            _recentPosition = 0;
            this.load();
        } // end else if
    } // End of the function
    function getVolume()
    {
        return (_volume);
    } // End of the function
    function setVolume(aVol)
    {
        _sound.setVolume(aVol);
        _volume = aVol;
    } // End of the function
    function initializeVolume()
    {
        this.setVolume(_volume);
    } // End of the function
    function getMediaBytesLoaded()
    {
        return (_sound.getBytesLoaded());
    } // End of the function
    function getMediaBytesTotal()
    {
        return (_sound.getBytesTotal());
    } // End of the function
    function getTotalTime()
    {
        var _loc2 = _sound.duration * _sound.getBytesTotal() / _sound.getBytesLoaded();
        return (_loc2 / 1000);
    } // End of the function
    function bufferIsFull()
    {
    } // End of the function
    function resizeVideo()
    {
    } // End of the function
    function playStopped()
    {
    } // End of the function
    function mediaLoaded()
    {
    } // End of the function
    function close()
    {
        _sound.stop();
    } // End of the function
    function logError(error)
    {
    } // End of the function
    function isSizeSet()
    {
        return (false);
    } // End of the function
    function isSizeChange()
    {
        return (false);
    } // End of the function
    function setSeeking(isSeeking)
    {
    } // End of the function
    static var STOP = -1;
} // End of Class
