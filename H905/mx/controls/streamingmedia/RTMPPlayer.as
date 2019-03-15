class mx.controls.streamingmedia.RTMPPlayer extends mx.controls.streamingmedia.AbstractPlayer
{
    var _mediaUrl, _mediaType, _videoHolder, _video, _totalTime, _listeners, _connectTimeOutId, _protocol, _port, _appUrl, _streamName, setPlaying, _isLoaded, _isLoading, _isPlayPending, _nc_rtmp, _nc_rtmpt, _playHeadPos, _isPausing, _sound, isPlaying, _ns, _videoHeight, _videoWidth, _player, popConnection, _conn_Id, _isSeeking, _momentaryPlayId, _statusCount, _checkCompleteId;
    function RTMPPlayer(aMediaUrl, aMediaType, aVideoHolder, aTotalTime)
    {
        super();
        if (aMediaUrl == null || aVideoHolder == null || aTotalTime == null)
        {
        } // end if
        _mediaUrl = aMediaUrl;
        _mediaType = aMediaType;
        _videoHolder = aVideoHolder;
        _video = _videoHolder._video;
        _totalTime = aTotalTime;
        _listeners = new Array();
        _connectTimeOutId = null;
        this.init();
    } // End of the function
    function init()
    {
        var _loc2;
        _loc2 = _mediaUrl.indexOf(":");
        if (_loc2 == -1)
        {
        } // end if
        _protocol = _mediaUrl.substring(0, _loc2).toLowerCase();
        if (_protocol != "rtmp" && _protocol != "rtmps" && _protocol != "rtmpt")
        {
        } // end if
        var _loc3 = _mediaUrl.substring(_loc2 + 1, _mediaUrl.length);
        _port = null;
        var _loc5 = _loc3.indexOf(":");
        if (_loc5 != -1)
        {
            _port = _loc3.substring(_loc5 + 1, _loc3.length);
            var _loc4 = _port.indexOf("/");
            if (_loc4 != -1 && _loc4 < _loc5)
            {
                _port = _port.substring(0, _loc4);
            }
            else
            {
                _port = null;
            } // end if
        } // end else if
        _loc2 = _loc3.lastIndexOf("/");
        if (_loc2 == -1)
        {
        } // end if
        _appUrl = _loc3.substring(0, _loc2);
        _streamName = _loc3.substring(_loc2 + 1, _loc3.length);
        if (_streamName.length == 0)
        {
        } // end if
        if (_mediaType == mx.controls.streamingmedia.StreamingMediaConstants.FLV_MEDIA_TYPE)
        {
            _loc2 = _streamName.indexOf(".");
            if (_loc2 != -1)
            {
                var _loc6;
                _loc6 = _streamName.substring(_loc2).toLowerCase();
                if (_loc6 == ".flv")
                {
                    _streamName = _streamName.substring(0, _loc2);
                } // end if
            } // end if
            _streamName = "flv:" + _streamName;
        }
        else if (_mediaType == mx.controls.streamingmedia.StreamingMediaConstants.MP3_MEDIA_TYPE)
        {
            _loc2 = _streamName.indexOf(".");
            if (_loc2 != -1)
            {
                _loc6 = _streamName.substring(_loc2).toLowerCase();
                if (_loc6 == ".mp3")
                {
                    _streamName = _streamName.substring(0, _loc2);
                } // end if
            } // end if
            _streamName = "mp3:" + _streamName;
            
        } // end else if
        this.setPlaying(false);
        _isLoaded = false;
        _isLoading = false;
        _isPlayPending = false;
        _nc_rtmp = null;
        _nc_rtmpt = null;
        _playHeadPos = 0;
        this.setSeeking(false);
        _isPausing = false;
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
        return ("RTMPPlayer: Playing " + this.getMediaUrl());
    } // End of the function
    function close()
    {
        _ns.onStatus = null;
        _ns.close();
        _ns = null;
        if (_nc_rtmp != null)
        {
            _nc_rtmp.onStatus = null;
            _nc_rtmp.close();
            _nc_rtmp = null;
        } // end if
        if (_nc_rtmpt != null)
        {
            _nc_rtmpt.onStatus = null;
            _nc_rtmpt.close();
            _nc_rtmpt = null;
        } // end if
        _video.clear();
    } // End of the function
    function load()
    {
        _isLoading = true;
        this.actualConnect();
        if (_connectTimeOutId != null)
        {
            clearInterval(_connectTimeOutId);
            _connectTimeOutId = null;
        } // end if
        _connectTimeOutId = setInterval(this, "onConnectTimeOut", 60000);
    } // End of the function
    function startStream(nc)
    {
        clearInterval(_connectTimeOutId);
        _connectTimeOutId = null;
        _ns = new mx.controls.streamingmedia.PlayerNetStream(nc, this);
        if (_mediaType == mx.controls.streamingmedia.StreamingMediaConstants.FLV_MEDIA_TYPE)
        {
            _video.attachVideo(_ns);
        } // end if
        _video.attachVideo(_ns);
        _videoHeight = _video.height;
        _videoWidth = _video.width;
        _ns.setBufferTime(5);
        _videoHolder.attachAudio(_ns);
        _ns.play(_streamName, 0, -1);
        _isLoading = false;
        _isLoaded = true;
        _videoHolder._visible = false;
        this.setPlaying(false);
        if (_isPlayPending)
        {
            this.play(null);
        }
        else
        {
            _isPausing = false;
            this.pause();
        } // end else if
    } // End of the function
    function onConnectTimeOut()
    {
        clearInterval(_connectTimeOutId);
        _connectTimeOutId = null;
        if (_nc_rtmpt != null)
        {
            _nc_rtmpt.onStatus = null;
            _nc_rtmpt.close();
            _nc_rtmpt = null;
        } // end if
        if (_nc_rtmp != null)
        {
            _nc_rtmp.onStatus = null;
            _nc_rtmp.close();
            _nc_rtmp = null;
        } // end if
        _isLoading = false;
        _isLoaded = false;
    } // End of the function
    function actualConnect()
    {
        if (_protocol == "rtmp")
        {
            _nc_rtmp = new mx.controls.streamingmedia.RTMPConnection(this);
            _nc_rtmp.onStatus = function (info)
            {
                if (info.code == "NetConnection.Connect.Success")
                {
                    clearInterval(_player._conn_Id);
                    _nc_rtmpt.onStatus = null;
                    _nc_rtmpt.close();
                    _nc_rtmpt = null;
                    _player.startStream(this);
                    this.popConnection();
                } // end if
            };
            _nc_rtmp.connect("rtmp:" + _appUrl, _streamName);
        } // end if
        if (_protocol == "rtmpt" || _protocol == "rtmp" && _port == null)
        {
            _nc_rtmpt = new mx.controls.streamingmedia.RTMPConnection(this);
            _nc_rtmpt.onStatus = function (info)
            {
                if (info.code == "NetConnection.Connect.Success")
                {
                    _nc_rtmp.onStatus = null;
                    _nc_rtmp.close();
                    _nc_rtmp = null;
                    _player.startStream(this);
                    this.popConnection();
                } // end if
            };
            if (_protocol == "rtmpt")
            {
                _nc_rtmpt.connect("rtmpt:" + _appUrl, _streamName);
            }
            else
            {
                clearInterval(_conn_Id);
                _conn_Id = setInterval(this, "connectRtmpt", 3000);
            } // end if
        } // end else if
    } // End of the function
    function connectRtmpt()
    {
        clearInterval(_conn_Id);
        _nc_rtmpt.connect("rtmpt:" + _appUrl, _streamName);
    } // End of the function
    function play(startingPoint)
    {
        this.setPlaying(true);
        if (startingPoint != null)
        {
            _playHeadPos = startingPoint;
        } // end if
        if (_isLoading || !_isLoaded)
        {
            _isPlayPending = true;
            if (!_isLoaded)
            {
                this.load();
            } // end if
            return;
        } // end if
        _isPlayPending = false;
        _isPausing = false;
        _ns.pause(false);
        _ns.seek(_playHeadPos);
    } // End of the function
    function pause()
    {
        if (!_isPausing)
        {
            _ns.pause(true);
            _isPausing = true;
            _isPlayPending = false;
            _playHeadPos = _ns.time;
            this.setPlaying(false);
        } // end if
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
        _playHeadPos = position;
        if (!_isSeeking)
        {
            _ns.seek(position);
            this.setSeeking(true);
        } // end if
        if (mx.controls.streamingmedia.StreamingMediaConstants.SCRUBBING)
        {
        }
        else if (!this.isPlaying())
        {
            _ns.pause(false);
            clearInterval(_momentaryPlayId);
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
        _statusCount = 2;
        clearInterval(_checkCompleteId);
        _checkCompleteId = setInterval(this, "checkComplete", 50);
    } // End of the function
    function checkComplete()
    {
        if (_ns.bufferLength <= 1.000000E-003)
        {
            if (_statusCount <= 0)
            {
                clearInterval(_checkCompleteId);
                _checkCompleteId = null;
                this.pause();
                this.broadcastEvent("complete");
            }
            else
            {
                _statusCount = _statusCount - 1;
            } // end if
        } // end else if
    } // End of the function
    function getMediaUrl()
    {
        return (_mediaUrl);
    } // End of the function
    function setMediaUrl(aUrl)
    {
        _mediaUrl = aUrl;
        _isLoaded = false;
        var _loc3 = this.isPlaying();
        var _loc2 = this.getVolume();
        this.close();
        this.init();
        this.setVolume(_loc2);
        if (_loc3)
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
        _isSeeking = isSeeking;
    } // End of the function
} // End of Class
