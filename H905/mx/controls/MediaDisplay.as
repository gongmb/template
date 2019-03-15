class mx.controls.MediaDisplay extends mx.core.UIComponent
{
    var _width, _height, _deadPreview, _startingTime, _playingBeforeDisabled, _started, _sendCompleteEvent, _fullyLoaded, tabEnabled, tabChildren, _screenAccommodator, __get__mediaType, __set__mediaType, __get__totalTime, __set__totalTime, __get__contentPath, __set__contentPath, __get__autoPlay, __set__autoPlay, __get__autoSize, __set__autoSize, __get__aspectRatio, __set__aspectRatio, _cuePoints, initCuePointNames, initCuePointTimes, _mostRecentCuePoint, __get__volume, _playerImpl, _contentPath, _totalTime, _videoHolder, createEmptyMovieClip, _soundHolder, __set__volume, redraw, _autoPlay, _pollId, _autoSize, _aspectRatio, __get__preferredWidth, __get__preferredHeight, __get__height, __get__width, _parent, dispatchEvent, __get__enabled, invalidate, __get__playheadTime, _mediaType, __get__cuePoints, __set__playheadTime, __get__bytesLoaded, __get__bytesTotal, addEventListener, __set__cuePoints, __set__enabled, __get__mostRecentCuePoint, __get__mostRecentCuePointName, __get__mostRecentCuePointTime, __get__playing, __get__videoHeight, __get__videoWidth;
    function MediaDisplay()
    {
        super();
    } // End of the function
    function init(Void)
    {
        this.initializeParameters();
        var _loc3 = _width;
        var _loc4 = _height;
        _deadPreview._visible = false;
        super.init();
        this.setSize(_loc3, _loc4, true);
        this.initCuePoints();
        _startingTime = 0;
        _playingBeforeDisabled = false;
        _started = false;
        _sendCompleteEvent = false;
        _fullyLoaded = false;
        makeVideoVisible = false;
        tabEnabled = false;
        tabChildren = false;
        _screenAccommodator = new mx.controls.streamingmedia.ScreenAccommodator(this);
    } // End of the function
    function initializeParameters()
    {
        if (this.__get__mediaType() == null)
        {
            this.__set__mediaType("FLV");
        } // end if
        if (this.__get__totalTime() == null)
        {
            this.__set__totalTime(0);
        } // end if
        if (this.__get__contentPath() == null)
        {
            this.__set__contentPath("");
        } // end if
        if (this.__get__autoPlay() == null)
        {
            this.__set__autoPlay(true);
        } // end if
        if (this.__get__autoSize() == null)
        {
            this.__set__autoSize(true);
        } // end if
        if (this.__get__aspectRatio() == null)
        {
            this.__set__aspectRatio(true);
        } // end if
    } // End of the function
    function initCuePoints()
    {
        _cuePoints = new Array();
        for (var _loc2 = 0; _loc2 < initCuePointNames.length && _loc2 < initCuePointTimes.length; ++_loc2)
        {
            this.addCuePoint(initCuePointNames[_loc2], initCuePointTimes[_loc2]);
        } // end of for
        delete this.initCuePointNames;
        delete this.initCuePointTimes;
        _mostRecentCuePoint = undefined;
    } // End of the function
    function initMedia(switchType)
    {
        if (this.isLivePreview())
        {
            return;
        } // end if
        var _loc2 = this.__get__volume();
        if (switchType)
        {
            _playerImpl.stop();
        } // end if
        if (this.isFLV())
        {
            if (this.isRtmp(_contentPath))
            {
                _playerImpl = new mx.controls.streamingmedia.RTMPPlayer(_contentPath, mx.controls.streamingmedia.StreamingMediaConstants.FLV_MEDIA_TYPE, _videoHolder, _totalTime);
            }
            else
            {
                _playerImpl = new mx.controls.streamingmedia.FLVPlayer(_contentPath, _videoHolder, _totalTime);
            } // end else if
        }
        else if (this.isMP3())
        {
            if (switchType)
            {
                this.releaseVideo();
            } // end if
            if (this.isRtmp(_contentPath))
            {
                _playerImpl = new mx.controls.streamingmedia.RTMPPlayer(_contentPath, mx.controls.streamingmedia.StreamingMediaConstants.MP3_MEDIA_TYPE, _videoHolder, _totalTime);
            }
            else
            {
                this.createEmptyMovieClip("_soundHolder", 10);
                _playerImpl = new mx.controls.streamingmedia.MP3Player(_contentPath, _soundHolder);
            } // end else if
            
        } // end else if
        if (_loc2 != undefined)
        {
            this.__set__volume(_loc2);
        } // end if
        this.redraw(true);
        _playerImpl.removeAllListeners();
        _playerImpl.addListener(this);
        _started = false;
        if (!switchType)
        {
            if (_autoPlay)
            {
                this.play();
            }
            else
            {
                this.load();
            } // end else if
            this.poll(true);
            if (_pollId != null)
            {
                clearInterval(_pollId);
            } // end if
            _pollId = setInterval(this, "poll", 250);
        } // end if
    } // End of the function
    function draw()
    {
        if (this.isFLV())
        {
            if (makeVideoVisible)
            {
                _videoHolder._visible = true;
                makeVideoVisible = false;
            } // end if
            if (_autoSize)
            {
                this.assignPreferredSize();
            }
            else if (_aspectRatio)
            {
                var _loc4 = this.__get__preferredWidth();
                var _loc3 = this.__get__preferredHeight();
                var _loc2 = Math.min(this.__get__width() / _loc4, this.__get__height() / _loc3);
                this.setVideoDisplaySize(_loc2 * _loc4, _loc2 * _loc3);
            }
            else
            {
                this.setVideoDisplaySize(this.__get__width(), this.__get__height());
            } // end else if
        } // end else if
    } // End of the function
    function setVideoDisplaySize(w, h)
    {
        if (this.isFLV())
        {
            var _loc2 = _videoHolder._video;
            _loc2._width = w;
            _loc2._height = h;
            _loc2._x = (this.__get__width() - _loc2._width) / 2;
            _loc2._y = (this.__get__height() - _loc2._height) / 2;
        } // end if
    } // End of the function
    function get videoWidth()
    {
        var _loc2;
        if (this.isMP3())
        {
            _loc2 = 0;
        }
        else
        {
            _loc2 = _videoHolder._video._width;
        } // end else if
        return (_loc2);
    } // End of the function
    function get videoHeight()
    {
        var _loc2;
        if (this.isMP3())
        {
            _loc2 = 0;
        }
        else
        {
            _loc2 = _videoHolder._video._height;
        } // end else if
        return (_loc2);
    } // End of the function
    function get preferredWidth()
    {
        var _loc2;
        if (this.isMP3())
        {
            _loc2 = 0;
        }
        else
        {
            _loc2 = _videoHolder._video.width;
        } // end else if
        return (_loc2);
    } // End of the function
    function get preferredHeight()
    {
        var _loc2;
        if (this.isMP3())
        {
            _loc2 = 0;
        }
        else
        {
            _loc2 = _videoHolder._video.height;
        } // end else if
        return (_loc2);
    } // End of the function
    function assignPreferredSize()
    {
        this.setVideoDisplaySize(this.__get__preferredWidth(), this.__get__preferredHeight(), true);
    } // End of the function
    function handlePlayer(player, status)
    {
        if (status == "start" || status == "resizeVideo")
        {
            if (_parent instanceof mx.controls.MediaPlayback)
            {
            }
            else
            {
                makeVideoVisible = true;
                this.draw();
            } // end else if
            if (_started)
            {
                var _loc2 = {target: this, type: "resizeVideo"};
                this.dispatchEvent(_loc2);
            }
            else
            {
                _loc2 = {target: this, type: "start"};
                this.dispatchEvent(_loc2);
                if (this.isRtmp(_contentPath))
                {
                    _loc2 = {target: this, type: "progress"};
                    this.dispatchEvent(_loc2);
                } // end if
                _started = true;
            } // end else if
        }
        else if (status == "complete")
        {
            _sendCompleteEvent = true;
        } // end else if
    } // End of the function
    function toString()
    {
        return ("MediaDisplay: media=" + _contentPath);
    } // End of the function
    function load()
    {
        _playerImpl.load();
    } // End of the function
    function play(startingPoint)
    {
        if (startingPoint != undefined)
        {
            _startingTime = startingPoint;
        } // end if
        if (this.__get__enabled())
        {
            _playerImpl.play(startingPoint);
        }
        else
        {
            _playingBeforeDisabled = true;
        } // end else if
    } // End of the function
    function pause()
    {
        _playerImpl.pause();
    } // End of the function
    function stop()
    {
        _playerImpl.stop();
    } // End of the function
    function get autoSize()
    {
        return (_autoSize);
    } // End of the function
    function set autoSize(flag)
    {
        if (_autoSize != flag)
        {
            _autoSize = flag;
            this.invalidate();
        } // end if
        //return (this.autoSize());
        null;
    } // End of the function
    function get aspectRatio()
    {
        return (_aspectRatio);
    } // End of the function
    function set aspectRatio(flag)
    {
        if (_aspectRatio != flag)
        {
            _aspectRatio = flag;
            this.invalidate();
        } // end if
        //return (this.aspectRatio());
        null;
    } // End of the function
    function get autoPlay()
    {
        return (_autoPlay);
    } // End of the function
    function set autoPlay(flag)
    {
        _autoPlay = flag;
        //return (this.autoPlay());
        null;
    } // End of the function
    function get playheadTime()
    {
        return (_playerImpl.getPlayheadTime());
    } // End of the function
    function set playheadTime(position)
    {
        if (position != undefined)
        {
            _startingTime = position;
        } // end if
        _playerImpl.setPlayheadTime(position);
        //return (this.playheadTime());
        null;
    } // End of the function
    function get contentPath()
    {
        return (_contentPath);
    } // End of the function
    function set contentPath(aUrl)
    {
        this.setMedia(aUrl);
        //return (this.contentPath());
        null;
    } // End of the function
    function setMedia(aUrl, aType)
    {
        _fireCuePoints = false;
        if (aType == null)
        {
            aType = this.deduceMediaType(aUrl);
        }
        else if (aType != mx.controls.streamingmedia.StreamingMediaConstants.FLV_MEDIA_TYPE && aType != mx.controls.streamingmedia.StreamingMediaConstants.MP3_MEDIA_TYPE)
        {
        } // end else if
        var _loc5 = _mediaType;
        _mediaType = aType;
        var _loc7 = this.isRtmp(_contentPath);
        var _loc6 = this.isRtmp(aUrl);
        _contentPath = aUrl;
        _fullyLoaded = false;
        _startingTime = 0;
        if (!this.isLivePreview())
        {
            if (_contentPath == "")
            {
                this.releaseVideo();
            }
            else if (_playerImpl == null)
            {
                this.initMedia();
            }
            else if (_loc5 != _mediaType || _loc7 != _loc6)
            {
                var _loc4 = _playerImpl.isPlaying();
                this.initMedia(true);
                if (_loc4)
                {
                    _playerImpl.play(0);
                }
                else
                {
                    _playerImpl.load();
                } // end else if
            }
            else
            {
                _playerImpl.setMediaUrl(aUrl);
                _started = false;
            } // end else if
        } // end else if
    } // End of the function
    function deduceMediaType(aUrl)
    {
        var _loc2 = aUrl.substr(-3);
        if (_loc2 == "flv" || _loc2 == "FLV")
        {
            return ("FLV");
        } // end if
        if (_loc2 == "mp3" || _loc2 == "MP3")
        {
            return ("MP3");
        } // end if
        return (_mediaType);
    } // End of the function
    function releaseVideo()
    {
        _playerImpl.close();
        _playerImpl = null;
    } // End of the function
    function isLivePreview()
    {
        return (_root.contents.obj != null);
    } // End of the function
    function get volume()
    {
        return (_playerImpl.getVolume());
    } // End of the function
    function set volume(aVol)
    {
        _playerImpl.setVolume(aVol);
        //return (this.volume());
        null;
    } // End of the function
    function get playing()
    {
        return (_playerImpl.isPlaying());
    } // End of the function
    function get bytesLoaded()
    {
        return (_playerImpl.getMediaBytesLoaded());
    } // End of the function
    function get bytesTotal()
    {
        return (_playerImpl.getMediaBytesTotal());
    } // End of the function
    function isFLV()
    {
        return (_mediaType == mx.controls.streamingmedia.StreamingMediaConstants.FLV_MEDIA_TYPE);
    } // End of the function
    function isMP3()
    {
        return (_mediaType == mx.controls.streamingmedia.StreamingMediaConstants.MP3_MEDIA_TYPE);
    } // End of the function
    function get mediaType()
    {
        return (_mediaType);
    } // End of the function
    function set mediaType(aType)
    {
        _mediaType = aType;
        //return (this.mediaType());
        null;
    } // End of the function
    function get totalTime()
    {
        var _loc2;
        if (_playerImpl == null)
        {
            _loc2 = _totalTime;
        }
        else
        {
            _loc2 = _playerImpl.getTotalTime();
        } // end else if
        return (_loc2);
    } // End of the function
    function set totalTime(aTime)
    {
        _totalTime = aTime;
        if (_playerImpl instanceof mx.controls.streamingmedia.FLVPlayer)
        {
            _playerImpl.setTotalTime(aTime);
        }
        else if (_playerImpl instanceof mx.controls.streamingmedia.RTMPPlayer)
        {
            _playerImpl.setTotalTime(aTime);
        } // end else if
        //return (this.totalTime());
        null;
    } // End of the function
    function getCuePoints()
    {
        return (_cuePoints);
    } // End of the function
    function get cuePoints()
    {
        return (this.getCuePoints());
    } // End of the function
    function setCuePoints(cp)
    {
        _cuePoints = cp;
        for (var _loc2 = 0; _loc2 < _cuePoints.length; ++_loc2)
        {
            _cuePoints[_loc2].display = this;
        } // end of for
    } // End of the function
    function set cuePoints(cp)
    {
        this.setCuePoints(cp);
        //return (this.cuePoints());
        null;
    } // End of the function
    function getCuePoint(pointName)
    {
        var _loc3 = null;
        var _loc2 = this.getCuePointIndex(pointName);
        if (_loc2 > -1)
        {
            _loc3 = _cuePoints[_loc2];
        } // end if
        return (_loc3);
    } // End of the function
    function addCuePoint(aName, aTime)
    {
        var _loc2 = new mx.controls.streamingmedia.CuePoint(aName, aTime);
        this.addCuePointObject(_loc2);
    } // End of the function
    function addCuePointObject(aCuePoint)
    {
        aCuePoint.display = this;
        _cuePoints.push(aCuePoint);
    } // End of the function
    function removeCuePoint(aCuePoint)
    {
        var _loc2 = this.getCuePointIndex(aCuePoint.name);
        if (_loc2 > -1)
        {
            _cuePoints.splice(_loc2, 1);
        } // end if
    } // End of the function
    function removeAllCuePoints()
    {
        _cuePoints.length = 0;
        _mostRecentCuePoint = undefined;
    } // End of the function
    function get mostRecentCuePoint()
    {
        return (_mostRecentCuePoint);
    } // End of the function
    function get mostRecentCuePointName()
    {
        return (_mostRecentCuePoint.name);
    } // End of the function
    function get mostRecentCuePointTime()
    {
        return (_mostRecentCuePoint.time);
    } // End of the function
    function handleEvent(ev)
    {
        if (ev.type == "click" && ev.detail == "play")
        {
            this.handlePlayEvent(ev);
        }
        else if (ev.type == "click" && ev.detail == "pause")
        {
            this.handlePauseEvent(ev);
        }
        else if (ev.type == "playheadChange")
        {
            this.handlePlayheadChangeEvent(ev);
        }
        else if (ev.type == "volume")
        {
            this.handleVolumeEvent(ev);
        }
        else if (ev.type == "scrubbing")
        {
            this.handleScrubbingEvent(ev);
        }
        else
        {
            this.handleUnrecognizedEvent(ev);
        } // end else if
    } // End of the function
    function handlePlayEvent(ev)
    {
        this.play();
    } // End of the function
    function handleStopEvent(ev)
    {
        this.stop();
    } // End of the function
    function handlePauseEvent(ev)
    {
        this.pause();
    } // End of the function
    function handleRewindEvent(ev)
    {
        this.__set__playheadTime(0);
    } // End of the function
    function handleFastForwardEvent(ev)
    {
        var _loc2 = this.__get__totalTime();
        this.__set__playheadTime(_loc2);
    } // End of the function
    function handlePlayheadChangeEvent(ev)
    {
        var _loc3 = ev.detail;
        var _loc2 = _loc3 / 100 * this.__get__totalTime();
        _fireCuePoints = _scrubbing;
        this.__set__playheadTime(_loc2);
    } // End of the function
    function handleVolumeEvent(ev)
    {
        var _loc2 = ev.detail;
        this.__set__volume(_loc2);
    } // End of the function
    function handleScrubbingEvent(ev)
    {
        _scrubbing = ev.detail;
    } // End of the function
    function handleUnrecognizedEvent(ev)
    {
    } // End of the function
    function getCuePointIndex(pointName)
    {
        var _loc3 = -1;
        for (var _loc2 = 0; _loc2 < _cuePoints.length && _loc3 == -1; ++_loc2)
        {
            if (_cuePoints[_loc2].name == pointName)
            {
                _loc3 = _loc2;
            } // end if
        } // end of for
        return (_loc3);
    } // End of the function
    function poll(first)
    {
        var _loc4 = this.__get__playheadTime();
        var _loc8 = this.__get__bytesLoaded();
        if (_loc4 != _priorTime)
        {
            if (_mediaType == "MP3" && _playerImpl.isPlaying() && !_started)
            {
                _playerImpl.playStarted();
                var _loc9 = this.__get__playheadTime();
                if (_startingTime - 1.000000E-001 < _loc9 && _loc9 < _startingTime + 1.000000E-001)
                {
                    _started = true;
                    var _loc10 = {target: this, type: "start"};
                    this.dispatchEvent(_loc10);
                } // end if
            } // end if
            _loc10 = {type: "change", target: this};
            this.dispatchEvent(_loc10);
        } // end if
        var _loc7 = false;
        if (!_fullyLoaded && this.__get__bytesLoaded() >= this.__get__bytesTotal() - 100)
        {
            _fullyLoaded = true;
            _playerImpl.mediaLoaded();
            _loc7 = true;
        }
        else if (first || _loc8 != _priorBytesLoaded)
        {
            _loc7 = true;
        } // end else if
        if (_loc7)
        {
            _loc10 = {type: "progress", target: this};
            this.dispatchEvent(_loc10);
        } // end if
        var _loc2 = null;
        for (var _loc3 = 0; _fireCuePoints && _loc3 < _cuePoints.length; ++_loc3)
        {
            _loc2 = _cuePoints[_loc3];
            if (_priorTime < _loc2.time && _loc4 >= _loc2.time || _priorTime > _loc2.time && _loc4 <= _loc2.time)
            {
                _mostRecentCuePoint = _loc2;
                _loc10 = {type: "cuePoint", target: this, cuePointName: _loc2.name, cuePointTime: _loc2.time};
                this.dispatchEvent(_loc10);
            } // end if
        } // end of for
        _fireCuePoints = true;
        if (_sendCompleteEvent)
        {
            _sendCompleteEvent = false;
            _loc10 = {type: "complete", target: this};
            this.dispatchEvent(_loc10);
        } // end if
        _priorTime = _loc4;
        _priorBytesLoaded = _loc8;
    } // End of the function
    function isRtmp(mediaUrl)
    {
        if (mediaUrl != null)
        {
            var _loc1;
            _loc1 = mediaUrl.toLowerCase();
            return (_loc1.indexOf("rtmp") == 0);
        } // end if
        return (false);
    } // End of the function
    function associateController(c)
    {
        c.addEventListener("click", this);
        c.addEventListener("playheadChange", this);
        c.addEventListener("volume", this);
        c.addEventListener("scrubbing", this);
        this.addEventListener("change", c);
        this.addEventListener("progress", c);
        this.addEventListener("complete", c);
    } // End of the function
    function setSize(w, h, noEvent)
    {
        super.setSize(w, h, noEvent);
        this.invalidate();
    } // End of the function
    function get enabled()
    {
        return (_enabled);
    } // End of the function
    function set enabled(is)
    {
        if (_enabled == is)
        {
            return;
        } // end if
        _enabled = is;
        if (is)
        {
            if (_playingBeforeDisabled)
            {
                this.play();
                _playingBeforeDisabled = false;
            } // end if
        }
        else
        {
            _playingBeforeDisabled = playing;
            if (_playingBeforeDisabled && _playerImpl instanceof mx.controls.streamingmedia.MP3Player)
            {
                _playingBeforeDisabled = !_playerImpl.willStop();
            } // end if
            this.pause();
        } // end else if
        //return (this.enabled());
        null;
    } // End of the function
    function onUnload()
    {
        _playerImpl.close();
    } // End of the function
    static var symbolName = "MediaDisplay";
    static var symbolOwner = mx.controls.MediaDisplay;
    var className = "MediaDisplay";
    static var version = "2.0.1.78";
    var clipParameters = {mediaType: "FLV", contentPath: "", totalTime: 0, autoSize: true, autoPlay: true, initCuePointNames: new Array(), initCuePointTimes: new Array(), fps: 30};
    var _priorTime = 0;
    var _priorBytesLoaded = 0;
    var _scrubbing = false;
    var _fireCuePoints = true;
    var _enabled = true;
    var makeVideoVisible = false;
} // End of Class
