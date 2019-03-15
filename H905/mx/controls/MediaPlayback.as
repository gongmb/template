class mx.controls.MediaPlayback extends mx.core.UIComponent
{
    var _width, _height, _deadPreview, _contentPath, _mediaType, _autoPlay, _autoSize, _aspectRatio, _totalTime, initCuePointNames, initCuePointTimes, attachMovie, __get__controlPlacement, _controllerPolicy, _controller, _display, _enabled, tabEnabled, tabChildren, redraw, __get__mediaType, __set__mediaType, __get__totalTime, __set__totalTime, __get__contentPath, __set__contentPath, __get__autoPlay, __set__autoPlay, __get__autoSize, __set__autoSize, __get__aspectRatio, __set__aspectRatio, __get__controllerPolicy, __set__controllerPolicy, __set__controlPlacement, __get__height, __get__width, _chrome, width, height, dispatchEvent, invalidate, __get__playheadTime, __get__volume, __get__cuePoints, _controlPlacement, __get__enabled, __get__bytesLoaded, __get__bytesTotal, __set__cuePoints, __set__enabled, __get__mostRecentCuePoint, __get__mostRecentCuePointName, __get__mostRecentCuePointTime, __set__playheadTime, __get__playing, __get__preferredHeight, __get__preferredWidth, __set__volume;
    function MediaPlayback()
    {
        super();
    } // End of the function
    function init(Void)
    {
        this.initializeParameters();
        var _loc5 = _width;
        var _loc8 = _height;
        _deadPreview._visible = false;
        super.init();
        var _loc3 = {contentPath: _contentPath, mediaType: _mediaType, autoPlay: _autoPlay, autoSize: _autoSize, aspectRatio: _aspectRatio, totalTime: _totalTime, initCuePointNames: initCuePointNames, initCuePointTimes: initCuePointTimes};
        this.attachMovie("MediaDisplay", "_display", 1, _loc3);
        var _loc4 = _autoPlay ? (mx.controls.streamingmedia.StreamingMediaConstants.PAUSE_PLAY_CONTROL) : (mx.controls.streamingmedia.StreamingMediaConstants.PLAY_PLAY_CONTROL);
        var _loc6 = _mediaType == "MP3" ? ("default") : ("none");
        var _loc7 = this.__get__controlPlacement() == "top" || this.__get__controlPlacement() == "bottom";
        _loc3 = {horizontal: _loc7, controllerPolicy: _controllerPolicy, backgroundStyle: _loc6, activePlayControl: _loc4};
        this.attachMovie("MediaController", "_controller", 2, _loc3);
        this.setSize(_loc5, _loc8, true);
        _display.associateController(_controller);
        _controller.addEventListener("click", this);
        _controller.addEventListener("playheadChange", this);
        _controller.addEventListener("volume", this);
        _controller.addEventListener("scrubbing", this);
        _display.addEventListener("change", this);
        _display.addEventListener("progress", this);
        _display.addEventListener("start", this);
        _display.addEventListener("resizeVideo", this);
        _display.addEventListener("cuePoint", this);
        _display.addEventListener("complete", this);
        _enabled = true;
        tabEnabled = false;
        tabChildren = true;
        this.redraw(true);
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
        if (this.__get__controllerPolicy() == null)
        {
            this.__set__controllerPolicy("auto");
        } // end if
        if (this.__get__controlPlacement() == null)
        {
            this.__set__controlPlacement("bottom");
        } // end if
    } // End of the function
    function draw(Void)
    {
        if (_mediaType == "MP3")
        {
            this.drawMP3();
        }
        else
        {
            this.drawFLV();
        } // end else if
    } // End of the function
    function drawMP3()
    {
        _display._x = 0;
        _display._y = 0;
        _controller._x = 0;
        _controller._y = 0;
        _controller.setSize(this.__get__width(), this.__get__height(), true);
        _controller.__set__backgroundStyle("default");
        _controller.setOpenUpOrLeft(false);
        _controller.redraw(true);
        _chrome.visible = false;
        _chrome.showToggles = false;
        _chrome.draw();
    } // End of the function
    function drawFLV()
    {
        this.drawChrome();
        this.drawFLVController();
        this.drawFLVDisplay();
    } // End of the function
    function drawChrome()
    {
        var _loc3;
        var _loc2;
        if (_controller.__get__horizontal())
        {
            _loc2 = this.__get__height() - _controller.getMinimumOpenHeight() + _controller.getMinimumClosedHeight();
            _loc3 = width;
        }
        else
        {
            _loc3 = this.__get__width() - _controller.getMinimumOpenWidth() + _controller.getMinimumClosedWidth();
            _loc2 = height;
        } // end else if
        var _loc4 = this.__get__width();
        var _loc5 = this.__get__height();
        var _loc8 = _controllerPolicy == "on" ? (_loc4) : (_loc3);
        var _loc7 = _controllerPolicy == "on" ? (_loc5) : (_loc2);
        var _loc6 = this.isTopControlPlacement() || this.isLeftControlPlacement();
        _chrome._x = 0;
        _chrome._y = 0;
        if (this.isTopControlPlacement() && (_controllerPolicy == "off" || _controllerPolicy == "auto"))
        {
            _chrome._y = _controller.getMinimumOpenHeight() - _controller.getMinimumClosedHeight();
        }
        else if (this.isLeftControlPlacement() && (_controllerPolicy == "off" || _controllerPolicy == "auto"))
        {
            _chrome._x = _controller.getMinimumOpenWidth() - _controller.getMinimumClosedWidth();
        } // end else if
        _chrome.visible = true;
        _chrome.showToggles = true;
        _chrome.setSize(_loc8, _loc7);
        _chrome.draw();
        this.addSecondChrome(_chrome, _loc2, _loc5, _loc3, _loc4, _loc6);
    } // End of the function
    function drawFLVController()
    {
        if (this.isBottomControlPlacement())
        {
            _controller.setSize(this.__get__width(), _controller.getMinimumOpenHeight(), true);
            _controller.__set__horizontal(true);
            _controller._x = 0;
            _controller._y = this.__get__height() - _controller.__get__height();
        }
        else if (this.isTopControlPlacement())
        {
            _controller.setSize(this.__get__width(), _controller.getMinimumOpenHeight(), true);
            _controller.__set__horizontal(true);
            _controller.setOpenUpOrLeft(true);
            _controller._x = 0;
            if (_controllerPolicy == "on")
            {
                _controller._y = 0;
            }
            else
            {
                _controller._y = _controller.__get__height() - _controller.getMinimumClosedHeight();
            } // end else if
        }
        else if (this.isRightControlPlacement())
        {
            _controller.setSize(_controller.getMinimumOpenWidth(), this.__get__height(), true);
            _controller.__set__horizontal(false);
            _controller._x = this.__get__width() - _controller.__get__width();
            _controller._y = 0;
        }
        else if (this.isLeftControlPlacement())
        {
            _controller.setSize(_controller.getMinimumOpenWidth(), this.__get__height(), true);
            _controller.__set__horizontal(false);
            _controller.setOpenUpOrLeft(true);
            if (_controllerPolicy == "on")
            {
                _controller._x = 0;
            }
            else
            {
                _controller._x = _controller.__get__width() - _controller.getMinimumClosedWidth();
            } // end else if
            _controller._y = 0;
        } // end else if
        _controller.__set__backgroundStyle("none");
        _controller.invalidate();
    } // End of the function
    function drawFLVDisplay()
    {
        this.displaySetProperSize();
        var _loc3 = 0;
        var _loc2 = 0;
        if (this.isTopControlPlacement())
        {
            _loc2 = _controller.height;
        }
        else if (this.isLeftControlPlacement())
        {
            _loc3 = _controller.width;
        } // end else if
        _display._x = _loc3 + mx.controls.MediaPlayback.H_BORDER;
        _display._y = _loc2 + mx.controls.MediaPlayback.V_BORDER;
    } // End of the function
    function displaySetProperSize()
    {
        var _loc2 = this.__get__width() - mx.controls.MediaPlayback.H_BORDER * 2;
        var _loc3 = this.__get__height() - mx.controls.MediaPlayback.V_BORDER * 2;
        if (this.isBottomControlPlacement() || this.isTopControlPlacement())
        {
            _loc3 = _loc3 - _controller.height;
        }
        else
        {
            _loc2 = _loc2 - _controller.width;
        } // end else if
        if (_autoSize && (_display.__get__preferredWidth() > _loc2 || _display.__get__preferredHeight() > _loc3))
        {
            _display.__set__autoSize(false);
            _display.__set__aspectRatio(true);
        }
        else
        {
            _display.__set__autoSize(_autoSize);
            _display.__set__aspectRatio(_aspectRatio);
        } // end else if
        _display.setSize(_loc2, _loc3, true);
        _display.invalidate();
    } // End of the function
    function handleEvent(ev)
    {
        ev.target = this;
        this.dispatchEvent(ev);
        if (ev.type == "start")
        {
            if (_mediaType == "FLV")
            {
                _display.makeVideoVisible = true;
                this.redraw(true);
            }
            else if (_mediaType == "MP3")
            {
                _controller.setPlaying(_display.__get__playing());
            } // end if
        } // end else if
        if (ev.type == "resizeVideo")
        {
            if (_mediaType == "FLV")
            {
                _display.makeVideoVisible = true;
                this.redraw(true);
            } // end if
        } // end if
    } // End of the function
    function toString()
    {
        return ("MediaPlayback: media=" + _contentPath);
    } // End of the function
    function getController()
    {
        return (_controller);
    } // End of the function
    function isRtmp(mediaUrl)
    {
        if (_display != null)
        {
            return (_display.isRtmp(mediaUrl));
        } // end if
        return (false);
    } // End of the function
    function load()
    {
        _display.load();
    } // End of the function
    function play(startingPoint)
    {
        _display.play(startingPoint);
        _controller.setPlaying(true);
    } // End of the function
    function pause()
    {
        _display.pause();
        _controller.setPlaying(false);
    } // End of the function
    function stop()
    {
        _display.stop();
        _controller.setPlaying(false);
    } // End of the function
    function get autoSize()
    {
        if (_display != null)
        {
            _autoSize = _display.autoSize;
        } // end if
        return (_autoSize);
    } // End of the function
    function set autoSize(flag)
    {
        _autoSize = flag;
        if (_display != null)
        {
            this.displaySetProperSize();
            this.invalidate();
        } // end if
        //return (this.autoSize());
        null;
    } // End of the function
    function get aspectRatio()
    {
        if (_display != null)
        {
            _aspectRatio = _display.aspectRatio;
        } // end if
        return (_aspectRatio);
    } // End of the function
    function set aspectRatio(flag)
    {
        _aspectRatio = flag;
        if (_display != null)
        {
            this.displaySetProperSize();
            this.invalidate();
        } // end if
        //return (this.aspectRatio());
        null;
    } // End of the function
    function get autoPlay()
    {
        if (_display != null)
        {
            _autoPlay = _display.autoPlay;
        } // end if
        return (_autoPlay);
    } // End of the function
    function set autoPlay(flag)
    {
        _autoPlay = flag;
        if (_display != null)
        {
            _display.__set__autoPlay(flag);
        } // end if
        //return (this.autoPlay());
        null;
    } // End of the function
    function get playheadTime()
    {
        //return (_display.playheadTime());
    } // End of the function
    function set playheadTime(position)
    {
        _display.__set__playheadTime(position);
        //return (this.playheadTime());
        null;
    } // End of the function
    function get contentPath()
    {
        if (_display != null)
        {
            _contentPath = _display.contentPath;
        } // end if
        return (_contentPath);
    } // End of the function
    function set contentPath(aUrl)
    {
        _contentPath = aUrl;
        if (_display != null)
        {
            if (!_settingMedia)
            {
                _display.__set__contentPath(aUrl);
            } // end if
            _mediaType = _display.mediaType;
        } // end if
        //return (this.contentPath());
        null;
    } // End of the function
    function get volume()
    {
        //return (_display.volume());
    } // End of the function
    function set volume(aVol)
    {
        _display.__set__volume(aVol);
        _controller.__set__volume(aVol);
        //return (this.volume());
        null;
    } // End of the function
    function get playing()
    {
        //return (_display.playing());
    } // End of the function
    function get preferredWidth()
    {
        //return (_display.preferredWidth());
    } // End of the function
    function get preferredHeight()
    {
        //return (_display.preferredHeight());
    } // End of the function
    function get bytesLoaded()
    {
        //return (_display.bytesLoaded());
    } // End of the function
    function get bytesTotal()
    {
        //return (_display.bytesTotal());
    } // End of the function
    function get mediaType()
    {
        if (_display != null)
        {
            _mediaType = _display.mediaType;
        } // end if
        return (_mediaType);
    } // End of the function
    function set mediaType(aType)
    {
        _mediaType = aType;
        if (_display != null)
        {
            _display.__set__mediaType(aType);
            if (aType == "MP3")
            {
                _controller.__set__backgroundStyle("none");
                this.removeSecondChrome();
            }
            else
            {
                _controller.__set__backgroundStyle("default");
                this.drawChrome();
            } // end else if
            this.invalidate();
        } // end if
        //return (this.mediaType());
        null;
    } // End of the function
    function setMedia(aUrl, aType)
    {
        _settingMedia = true;
        var _loc5 = _mediaType;
        _display.setMedia(aUrl, aType);
        if (aType == null)
        {
            var _loc3 = aUrl.substr(-3);
            if (_loc3 == "flv" || _loc3 == "FLV")
            {
                aType = "FLV";
            }
            else if (_loc3 == "mp3" || _loc3 == "MP3")
            {
                aType = "MP3";
            }
            else
            {
                aType = _mediaType;
            } // end else if
        } // end else if
        if (_loc5 != aType)
        {
            this.__set__mediaType(aType);
        } // end if
        this.__set__contentPath(aUrl);
        _settingMedia = false;
    } // End of the function
    function get totalTime()
    {
        if (_display != null)
        {
            _totalTime = _display.totalTime;
        } // end if
        return (_totalTime);
    } // End of the function
    function set totalTime(aTime)
    {
        _totalTime = aTime;
        if (_display != null)
        {
            _display.__set__totalTime(_totalTime);
        } // end if
        //return (this.totalTime());
        null;
    } // End of the function
    function getCuePoints()
    {
        return (_display.getCuePoints());
    } // End of the function
    function get cuePoints()
    {
        return (this.getCuePoints());
    } // End of the function
    function setCuePoints(cp)
    {
        for (var _loc2 = 0; _loc2 < cp.length; ++_loc2)
        {
            cp[_loc2].playback = this;
        } // end of for
        _display.__set__cuePoints(cp);
    } // End of the function
    function set cuePoints(cp)
    {
        this.setCuePoints(cp);
        //return (this.cuePoints());
        null;
    } // End of the function
    function getCuePoint(pointName)
    {
        return (_display.getCuePoint(pointName));
    } // End of the function
    function addCuePoint(aName, aTime)
    {
        var _loc2 = new mx.controls.streamingmedia.CuePoint(aName, aTime);
        _loc2.playback = this;
        this.addCuePointObject(_loc2);
    } // End of the function
    function addCuePointObject(aCuePoint)
    {
        aCuePoint.playback = this;
        _display.addCuePointObject(aCuePoint);
    } // End of the function
    function removeCuePoint(aCuePoint)
    {
        _display.removeCuePoint(aCuePoint);
    } // End of the function
    function removeAllCuePoints()
    {
        _display.removeAllCuePoints();
    } // End of the function
    function get mostRecentCuePoint()
    {
        //return (_display.mostRecentCuePoint());
    } // End of the function
    function get mostRecentCuePointName()
    {
        //return (_display.mostRecentCuePointName());
    } // End of the function
    function get mostRecentCuePointTime()
    {
        //return (_display.mostRecentCuePointTime());
    } // End of the function
    function get controllerPolicy()
    {
        if (_controller != null)
        {
            _controllerPolicy = _controller.controllerPolicy;
        } // end if
        return (_controllerPolicy);
    } // End of the function
    function set controllerPolicy(aPolicy)
    {
        _controllerPolicy = aPolicy;
        if (_controller != null)
        {
            _controller.__set__controllerPolicy(aPolicy);
        } // end if
        //return (this.controllerPolicy());
        null;
    } // End of the function
    function addSecondChrome(theChrome, closedHeight, openHeight, closedWidth, openWidth, fixedEnd)
    {
        _controller.addSecondChrome(theChrome, closedHeight, openHeight, closedWidth, openWidth, fixedEnd);
    } // End of the function
    function removeSecondChrome()
    {
        _controller.removeSecondChrome();
    } // End of the function
    function getMinimumOpenHeight()
    {
        return (_controller.getMinimumOpenHeight());
    } // End of the function
    function getMinimumOpenWidth()
    {
        return (_controller.getMinimumOpenWidth());
    } // End of the function
    function getMinimumClosedHeight()
    {
        return (_controller.getMinimumClosedHeight());
    } // End of the function
    function getMinimumClosedWidth()
    {
        return (_controller.getMinimumClosedWidth());
    } // End of the function
    function expand(force)
    {
        _controller.expand(force);
    } // End of the function
    function contract(force)
    {
        _controller.contract(force);
    } // End of the function
    function get controlPlacement()
    {
        return (_controlPlacement);
    } // End of the function
    function set controlPlacement(aPos)
    {
        _controlPlacement = aPos;
        if (_controller != null)
        {
            var _loc2 = this.isTopControlPlacement() || this.isLeftControlPlacement();
            _controller.setOpenUpOrLeft(_loc2);
            var _loc3 = this.isTopControlPlacement() || this.isBottomControlPlacement();
            _controller.__set__horizontal(_loc3);
            this.invalidate();
        } // end if
        //return (this.controlPlacement());
        null;
    } // End of the function
    function isTopControlPlacement()
    {
        return (_controlPlacement == mx.controls.MediaPlayback.TOP_CONTROL_POSITION);
    } // End of the function
    function isBottomControlPlacement()
    {
        return (_controlPlacement == mx.controls.MediaPlayback.BOTTOM_CONTROL_POSITION);
    } // End of the function
    function isLeftControlPlacement()
    {
        return (_controlPlacement == mx.controls.MediaPlayback.LEFT_CONTROL_POSITION);
    } // End of the function
    function isRightControlPlacement()
    {
        return (_controlPlacement == mx.controls.MediaPlayback.RIGHT_CONTROL_POSITION);
    } // End of the function
    function displayFull()
    {
        var _loc2 = _chrome.getOneToggle();
        _loc2.displayFull(false);
    } // End of the function
    function displayNormal()
    {
        var _loc2 = _chrome.getOneToggle();
        _loc2.displayNormal(false);
    } // End of the function
    function setSize(w, h, noEvent)
    {
        w = Math.max(w, _controller.getMinimumOpenWidth() + 17);
        h = Math.max(h, _controller.getMinimumOpenHeight() + 17);
        super.setSize(w, h, noEvent);
        this.invalidate();
    } // End of the function
    function get enabled()
    {
        return (_enabled);
    } // End of the function
    function set enabled(is)
    {
        _enabled = is;
        _display.__set__enabled(is);
        _controller.__set__enabled(is);
        _chrome.setEnabled(is);
        //return (this.enabled());
        null;
    } // End of the function
    static var symbolName = "MediaPlayback";
    static var symbolOwner = mx.controls.MediaPlayback;
    var className = "MediaPlayback";
    static var version = "2.0.1.78";
    var clipParameters = {mediaType: "FLV", contentPath: "", totalTime: 0, autoSize: true, autoPlay: true, controllerPolicy: "auto", initCuePointNames: new Array(), initCuePointTimes: new Array(), controlPlacement: "bottom", fps: 30};
    static var TOP_CONTROL_POSITION = "top";
    static var BOTTOM_CONTROL_POSITION = "bottom";
    static var LEFT_CONTROL_POSITION = "left";
    static var RIGHT_CONTROL_POSITION = "right";
    static var H_BORDER = 8;
    static var V_BORDER = 8;
    var _settingMedia = false;
} // End of Class
