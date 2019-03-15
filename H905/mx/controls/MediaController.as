class mx.controls.MediaController extends mx.core.UIComponent
{
    var _lastProgressMediaType, _controllerPolicy, _width, _height, _horizontal, __get__width, __get__height, _x, _y, _priorPolicy, _activePlayControl, _backgroundStyle, _isOpen, _priorMouseOver, _closeId, _openId, gotoAndStop, _isPlaying, _playPercent, _playTime, _volume, tabEnabled, tabChildren, playAtBeginning, _screenAccommodator, redraw, __get__horizontal, __set__horizontal, __get__controllerPolicy, __set__controllerPolicy, __get__backgroundStyle, __set__backgroundStyle, __get__activePlayControl, __set__activePlayControl, _playBar, _miniPlayBar, _loadBar, _volumeControl, _buttons, width, height, _chrome, _secondChrome, _secondChromeClosedHeight, _secondChromeOpenHeight, _secondChromeClosedWidth, _secondChromeOpenWidth, _secondChromeFixedEnd, hitTest, _animationStart, _animationOpen, onEnterFrame, _loadPercent, invalidate, __get__volume, dispatchEvent, _listenForPlayheadMoveEvent, _notAnimating, __get__playing, __get__enabled, _strings, __get__playTime, __get__playPercent, _openUpOrLeft, __set__enabled, __get__expanded, __get__lastProgressMediaType, __set__playPercent, __set__playTime, __set__playing, __set__volume;
    function MediaController()
    {
        super();
    } // End of the function
    function get lastProgressMediaType()
    {
        return (_lastProgressMediaType);
    } // End of the function
    function init(Void)
    {
        mx.controls.streamingmedia.Tracer.trace("MediaController.init: start: policy=" + _controllerPolicy);
        this.initializeParameters();
        mx.controls.streamingmedia.Tracer.trace("MediaController.init: after initializeParameters: policy=" + _controllerPolicy);
        var _loc3 = _width;
        var _loc4 = _height;
        super.init();
        if (_horizontal)
        {
            _loc3 = Math.max(mx.controls.MediaController.MINIMUM_HORIZONTAL_WIDTH, _loc3);
            _loc4 = Math.max(mx.controls.MediaController.MINIMUM_HORIZONTAL_OPEN_HEIGHT, _loc4);
        }
        else
        {
            _loc3 = Math.max(mx.controls.MediaController.MINIMUM_VERTICAL_OPEN_WIDTH, _loc3);
            _loc4 = Math.max(mx.controls.MediaController.MINIMUM_VERTICAL_HEIGHT, _loc4);
        } // end else if
        this.setSize(_loc3, _loc4, true);
        mx.controls.streamingmedia.Tracer.trace("MediaController.init: after setSize " + this.__get__width() + "x" + this.__get__height() + " at (" + _x + "," + _y + ")");
        _priorPolicy = _controllerPolicy;
        this.createDefaultStrings();
        mx.controls.streamingmedia.Tracer.trace("MediaController.init: Initialized properties:");
        mx.controls.streamingmedia.Tracer.trace("  controllerPolicy=" + _controllerPolicy);
        mx.controls.streamingmedia.Tracer.trace("  horizontal=" + _horizontal);
        mx.controls.streamingmedia.Tracer.trace("  activePlayControl=" + _activePlayControl);
        mx.controls.streamingmedia.Tracer.trace("  backgroundStyle=" + _backgroundStyle);
        if (_controllerPolicy == "auto")
        {
            _isOpen = false;
            _priorMouseOver = false;
            _closeId = null;
            _openId = null;
            Mouse.addListener(this);
            this.gotoAndStop(this.getClosedFrameName());
        }
        else if (_controllerPolicy == "on")
        {
            _isOpen = true;
            this.gotoAndStop(this.getOpenFrameName());
        }
        else if (_controllerPolicy == "off")
        {
            _isOpen = false;
            this.gotoAndStop(this.getClosedFrameName());
        } // end else if
        _isPlaying = _activePlayControl == "pause";
        _playPercent = 0;
        _playTime = 0;
        _volume = mx.controls.streamingmedia.StreamingMediaConstants.DEFAULT_VOLUME;
        this.setOpenUpOrLeft(false);
        this.setListeningForPlayheadMoveEvent(true);
        tabEnabled = false;
        tabChildren = true;
        playAtBeginning = false;
        _screenAccommodator = new mx.controls.streamingmedia.ScreenAccommodator(this);
        this.redraw(true);
    } // End of the function
    function initializeParameters()
    {
        if (this.__get__horizontal() == null)
        {
            this.__set__horizontal(true);
        } // end if
        if (this.__get__controllerPolicy() == null)
        {
            this.__set__controllerPolicy("auto");
        } // end if
        if (this.__get__backgroundStyle() == null)
        {
            this.__set__backgroundStyle("default");
        } // end if
        if (this.__get__activePlayControl() == null)
        {
            this.__set__activePlayControl("pause");
        } // end if
    } // End of the function
    function getOpenFrameName()
    {
        return (_horizontal ? ("openHorizontal") : ("openVertical"));
    } // End of the function
    function getClosedFrameName()
    {
        return (_horizontal ? ("closedHorizontal") : ("closedVertical"));
    } // End of the function
    function draw(Void)
    {
        if (_isOpen)
        {
            this.gotoAndStop(this.getOpenFrameName());
            _playBar.draw();
        }
        else
        {
            this.gotoAndStop(this.getClosedFrameName());
            _miniPlayBar.draw();
        } // end else if
        _loadBar.draw();
        if (_horizontal)
        {
            this.positionControlsHorizontal();
        }
        else
        {
            this.positionControlsVertical();
        } // end else if
        this.drawChrome();
    } // End of the function
    function positionControlsVertical()
    {
        if (_isOpen)
        {
            _volumeControl._x = (this.__get__width() - _volumeControl._width) / 2;
            _volumeControl._y = this.__get__height() - _volumeControl._height - 8;
            _buttons._x = (this.__get__width() - _buttons._width) / 2;
            _buttons._y = this.__get__height() - _buttons._height - _volumeControl._height - 16;
            _playBar._x = (this.__get__width() - _playBar._width) / 2;
            _loadBar._x = _playBar._x + _playBar._width - 4;
        }
        else
        {
            _loadBar._x = mx.controls.MediaController.LOADBAR_VERTICAL_CLOSED_X;
            _miniPlayBar._x = mx.controls.MediaController.MINIPLAYBAR_VERTICAL_CLOSED_X;
        } // end else if
    } // End of the function
    function positionControlsHorizontal()
    {
        if (_isOpen)
        {
            _loadBar._y = mx.controls.MediaController.LOADBAR_HORIZONTAL_OPEN_Y;
            _buttons._x = 8;
            _buttons._y = this.__get__height() - _buttons._height - 8;
            _volumeControl._x = this.__get__width() - _volumeControl._width - 8;
            _volumeControl._y = this.__get__height() - _volumeControl._height - 8;
        }
        else
        {
            _loadBar._y = mx.controls.MediaController.LOADBAR_HORIZONTAL_CLOSED_Y;
        } // end else if
    } // End of the function
    function drawChrome(wi, he)
    {
        if (wi == null)
        {
            if (_horizontal)
            {
                wi = width;
            }
            else
            {
                wi = _isOpen ? (this.__get__width()) : (mx.controls.MediaController.CLOSED_VERTICAL_WIDTH);
            } // end if
        } // end else if
        if (he == null)
        {
            if (_horizontal)
            {
                he = _isOpen ? (this.__get__height()) : (mx.controls.MediaController.CLOSED_HORIZONTAL_HEIGHT);
            }
            else
            {
                he = height;
            } // end if
        } // end else if
        _chrome.visible = this.__get__backgroundStyle() == "default";
        _chrome.showToggles = false;
        _chrome.setSize(wi, he);
        _chrome.draw();
    } // End of the function
    function addSecondChrome(theChrome, closedHeight, openHeight, closedWidth, openWidth, fixedEnd)
    {
        _secondChrome = theChrome;
        _secondChromeClosedHeight = closedHeight;
        _secondChromeOpenHeight = openHeight;
        _secondChromeClosedWidth = closedWidth;
        _secondChromeOpenWidth = openWidth;
        _secondChromeFixedEnd = fixedEnd;
    } // End of the function
    function removeSecondChrome()
    {
        _secondChrome = null;
    } // End of the function
    function get expanded()
    {
        return (_isOpen);
    } // End of the function
    function onMouseMove()
    {
        var _loc5 = _root._xmouse;
        var _loc4 = _root._ymouse;
        var _loc3 = this.hitTest(_loc5, _loc4, true);
        if (_loc3 && _closeId != null || this.isNotAnimating())
        {
            clearInterval(_closeId);
            _closeId = null;
        } // end if
        if (!_loc3 && _openId != null || this.isNotAnimating())
        {
            clearInterval(_openId);
            _openId = null;
        } // end if
        if (_loc3 && !_isOpen && _controllerPolicy == "auto" && _openId == null && !this.isNotAnimating())
        {
            _openId = setInterval(this, "expand", mx.controls.MediaController.OPEN_DELAY);
        }
        else if (!_loc3 && _isOpen && _controllerPolicy == "auto" && _closeId == null && !this.isNotAnimating())
        {
            _closeId = setInterval(this, "contract", mx.controls.MediaController.CLOSE_DELAY);
        } // end else if
        _priorMouseOver = _loc3;
    } // End of the function
    function expand(force)
    {
        clearInterval(_openId);
        _openId = null;
        if (_controllerPolicy == "auto" || force)
        {
            _isOpen = true;
            _animationStart = getTimer();
            _animationOpen = true;
            _priorMouseOver = true;
            onEnterFrame = animate;
        } // end if
    } // End of the function
    function contract(force)
    {
        mx.controls.streamingmedia.Tracer.trace("MediaController.contract: force=" + force + ", animating=" + _animating + ", opening=" + _animationOpen);
        if (_animating && !_animationOpen)
        {
            return;
        } // end if
        clearInterval(_closeId);
        _closeId = null;
        if (_controllerPolicy == "auto" || force)
        {
            _isOpen = false;
            _animationStart = getTimer();
            _animationOpen = false;
            _priorMouseOver = false;
            this.gotoAndStop(this.getClosedFrameName());
            this.animate();
            onEnterFrame = animate;
        } // end if
    } // End of the function
    function animate()
    {
        _animating = true;
        var _loc4 = getTimer() - _animationStart;
        var _loc3 = Math.min(1, _loc4 / mx.controls.MediaController.ANIMATION_TIME);
        mx.controls.streamingmedia.Tracer.trace("MediaController.animate: _animationStart=" + _animationStart + ", elapsed=" + _loc4 + ", portion=" + _loc3 + ", ANIMATION_TIME=" + mx.controls.MediaController.ANIMATION_TIME);
        this.sizeMainChrome(_loc3);
        if (_secondChrome != null)
        {
            this.sizeSecondChrome(_loc3);
        } // end if
        this.animateBars(_loc3);
        if (_loc4 >= mx.controls.MediaController.ANIMATION_TIME || _global.isLivePreview)
        {
            this.animationDone();
        } // end if
    } // End of the function
    function animationDone()
    {
        mx.controls.streamingmedia.Tracer.trace("MediaController.animationDone");
        _animating = false;
        delete this.onEnterFrame;
        this.refreshBars();
        if (_animationOpen)
        {
            this.gotoAndStop(this.getOpenFrameName());
            
        } // end if
        this.redraw(true);
    } // End of the function
    function sizeMainChrome(portion)
    {
        var _loc2 = this.__get__height();
        var _loc3 = this.__get__width();
        if (_horizontal)
        {
            var _loc4 = (this.__get__height() - mx.controls.MediaController.CLOSED_HORIZONTAL_HEIGHT) * portion;
            if (_animationOpen)
            {
                _loc2 = mx.controls.MediaController.CLOSED_HORIZONTAL_HEIGHT + _loc4;
            }
            else
            {
                _loc2 = this.__get__height() - _loc4;
            } // end else if
        }
        else
        {
            _loc4 = (this.__get__width() - mx.controls.MediaController.CLOSED_VERTICAL_WIDTH) * portion;
            if (_animationOpen)
            {
                _loc3 = mx.controls.MediaController.CLOSED_VERTICAL_WIDTH + _loc4;
            }
            else
            {
                _loc3 = this.__get__width() - _loc4;
            } // end else if
        } // end else if
        if (this.isOpenUpOrLeft())
        {
            var _loc6 = _chrome.width - _loc3;
            var _loc5 = _chrome.height - _loc2;
            _x = _x + _loc6;
            _y = _y + _loc5;
        } // end if
        this.drawChrome(_loc3, _loc2);
    } // End of the function
    function sizeSecondChrome(portion)
    {
        var _loc3;
        var _loc4;
        var _loc2;
        if (_horizontal)
        {
            _loc4 = _secondChromeClosedWidth;
            _loc2 = (_secondChromeOpenHeight - _secondChromeClosedHeight) * portion;
            _loc3 = _animationOpen ? (_secondChromeClosedHeight + _loc2) : (_secondChromeOpenHeight - _loc2);
            if (_secondChromeFixedEnd)
            {
                _secondChrome._y = _secondChrome._y - _loc3 + _secondChrome.height;
            } // end if
        }
        else
        {
            _loc3 = _secondChromeClosedHeight;
            _loc2 = (_secondChromeOpenWidth - _secondChromeClosedWidth) * portion;
            _loc4 = _animationOpen ? (_secondChromeClosedWidth + _loc2) : (_secondChromeOpenWidth - _loc2);
            if (_secondChromeFixedEnd)
            {
                _secondChrome._x = _secondChrome._x - _loc4 + _secondChrome.width;
            } // end if
        } // end else if
        _secondChrome.setSize(_loc4, _loc3);
        _secondChrome.draw();
    } // End of the function
    function animateBars(portion)
    {
        var _loc2;
        if (_horizontal)
        {
            _loc2 = (mx.controls.MediaController.LOADBAR_HORIZONTAL_OPEN_Y - mx.controls.MediaController.LOADBAR_HORIZONTAL_CLOSED_Y) * portion;
            var _loc8 = _animationOpen ? (mx.controls.MediaController.LOADBAR_HORIZONTAL_CLOSED_Y + _loc2) : (mx.controls.MediaController.LOADBAR_HORIZONTAL_OPEN_Y - _loc2);
            _loadBar._y = _loc8;
        }
        else
        {
            var _loc5 = _chrome.width / 2;
            _loc2 = (_loc5 - mx.controls.MediaController.MINIPLAYBAR_VERTICAL_CLOSED_X) * portion;
            _loc2 = Math.max(0, _loc2);
            var _loc9 = _animationOpen ? (mx.controls.MediaController.MINIPLAYBAR_VERTICAL_CLOSED_X + _loc2) : (_loc5 - _loc2);
            _miniPlayBar._x = _loc9;
            _loadBar._x = _miniPlayBar._x + _miniPlayBar._width;
            var _loc3 = _loadBar.getClosedHeight();
            var _loc4 = _loadBar.getOpenHeight();
            _loc2 = (_loc3 - _loc4) * portion;
            var _loc6 = _animationOpen ? (_loc3 - _loc2) : (_loc4 + _loc2);
            _loadBar.draw(_loc6);
            _miniPlayBar.draw(_loc6);
        } // end else if
    } // End of the function
    function getLoadBar()
    {
        return (_loadBar);
    } // End of the function
    function refreshBars()
    {
        mx.controls.streamingmedia.Tracer.trace("MediaController.refreshBars: load=" + _loadPercent + ", play=" + _playPercent);
        _loadBar.setCompletionPercentage(_loadPercent);
        _playBar.setCompletionPercentage(_playPercent);
        _miniPlayBar.setCompletionPercentage(_playPercent);
    } // End of the function
    function getLoadPercent()
    {
        return (_loadPercent);
    } // End of the function
    function getMinimumOpenHeight()
    {
        var _loc2 = _horizontal ? (mx.controls.MediaController.MINIMUM_HORIZONTAL_OPEN_HEIGHT) : (mx.controls.MediaController.MINIMUM_VERTICAL_HEIGHT);
        return (_loc2);
    } // End of the function
    function getMinimumClosedHeight()
    {
        var _loc2 = _horizontal ? (mx.controls.MediaController.CLOSED_HORIZONTAL_HEIGHT) : (mx.controls.MediaController.MINIMUM_VERTICAL_HEIGHT);
        return (_loc2);
    } // End of the function
    function getMinimumOpenWidth()
    {
        var _loc2 = _horizontal ? (mx.controls.MediaController.MINIMUM_HORIZONTAL_WIDTH) : (mx.controls.MediaController.MINIMUM_VERTICAL_OPEN_WIDTH);
        return (_loc2);
    } // End of the function
    function getMinimumClosedWidth()
    {
        var _loc2 = _horizontal ? (mx.controls.MediaController.MINIMUM_HORIZONTAL_WIDTH) : (mx.controls.MediaController.CLOSED_VERTICAL_WIDTH);
        return (_loc2);
    } // End of the function
    function get controllerPolicy()
    {
        return (_controllerPolicy);
    } // End of the function
    function set controllerPolicy(aPolicy)
    {
        mx.controls.streamingmedia.Tracer.trace("MediaController.set controllerPolicy: old=" + _controllerPolicy + ", new=" + aPolicy);
        if (aPolicy == _controllerPolicy)
        {
            return;
        } // end if
        _controllerPolicy = aPolicy;
        if (_controllerPolicy == "on")
        {
            Mouse.removeListener(this);
            if (!_isOpen)
            {
                this.expand(true);
            } // end if
        }
        else if (_controllerPolicy == "off")
        {
            Mouse.removeListener(this);
            if (_isOpen)
            {
                mx.controls.streamingmedia.Tracer.trace("MediaController.set controllerPolicy(off): about to call contract");
                this.contract(true);
            } // end if
        }
        else if (_controllerPolicy == "auto")
        {
            _closeId = null;
            _openId = null;
            Mouse.addListener(this);
            var _loc3 = this.hitTest(_root._xmouse, _root._ymouse, true);
            if (_isOpen && !_loc3)
            {
                mx.controls.streamingmedia.Tracer.trace("MediaController.set controllerPolicy(auto): about to call contract");
                this.contract();
            }
            else if (!_isOpen && _loc3)
            {
                this.expand();
            } // end else if
            
        } // end else if
        //return (this.controllerPolicy());
        null;
    } // End of the function
    function get horizontal()
    {
        return (_horizontal);
    } // End of the function
    function set horizontal(isHoriz)
    {
        if (isHoriz != _horizontal)
        {
            _horizontal = isHoriz;
            var _loc2 = this.__get__height();
            var _loc3 = this.__get__width();
            if (isHoriz)
            {
                _loc2 = Math.max(_loc2, mx.controls.MediaController.MINIMUM_HORIZONTAL_WIDTH);
                _loc3 = Math.max(_loc3, mx.controls.MediaController.MINIMUM_HORIZONTAL_OPEN_HEIGHT);
            }
            else
            {
                _loc2 = Math.max(_loc2, mx.controls.MediaController.MINIMUM_VERTICAL_OPEN_WIDTH);
                _loc3 = Math.max(_loc3, mx.controls.MediaController.MINIMUM_VERTICAL_HEIGHT);
            } // end else if
            this.setSize(_loc2, _loc3);
            this.invalidate();
        }
        else
        {
            _horizontal = isHoriz;
        } // end else if
        //return (this.horizontal());
        null;
    } // End of the function
    function get volume()
    {
        return (_volume);
    } // End of the function
    function set volume(vol)
    {
        _volume = vol;
        _volumeControl.getHandle().setVolume(vol);
        //return (this.volume());
        null;
    } // End of the function
    function get backgroundStyle()
    {
        return (_backgroundStyle);
    } // End of the function
    function set backgroundStyle(aStyle)
    {
        _backgroundStyle = aStyle;
        this.drawChrome();
        //return (this.backgroundStyle());
        null;
    } // End of the function
    function broadcastEvent(eventType, detailArg)
    {
        var _loc2 = {type: eventType, target: this, detail: detailArg};
        if (eventType == "volume")
        {
            _volume = detailArg;
        } // end if
        this.dispatchEvent(_loc2);
    } // End of the function
    function handleEvent(ev)
    {
        if (ev.type == "change")
        {
            playAtBeginning = false;
            if (this.isListeningForPlayheadMoveEvent())
            {
                this.handleChangeEvent(ev);
            } // end if
        }
        else if (ev.type == "progress")
        {
            this.handleProgressEvent(ev);
        }
        else if (ev.type == "complete")
        {
            this.handleCompleteEvent(ev);
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
    function isListeningForPlayheadMoveEvent()
    {
        return (_listenForPlayheadMoveEvent);
    } // End of the function
    function setListeningForPlayheadMoveEvent(listen)
    {
        _listenForPlayheadMoveEvent = listen;
    } // End of the function
    function isNotAnimating()
    {
        return (_notAnimating);
    } // End of the function
    function setNotAnimating(still)
    {
        _notAnimating = still;
    } // End of the function
    function get activePlayControl()
    {
        return (_activePlayControl);
    } // End of the function
    function set activePlayControl(aControl)
    {
        _activePlayControl = aControl;
        //return (this.activePlayControl());
        null;
    } // End of the function
    function get playing()
    {
        return (this.isPlaying());
    } // End of the function
    function set playing(playFlag)
    {
        this.setPlaying(playFlag);
        //return (this.playing());
        null;
    } // End of the function
    function isPlaying()
    {
        return (_isPlaying);
    } // End of the function
    function setPlaying(playFlag)
    {
        _isPlaying = playFlag;
        _playBar.setIsPlaying(playFlag);
        if (playFlag)
        {
            _buttons.playPauseButtons.showPauseButton();
        }
        else
        {
            _buttons.playPauseButtons.showPlayButton();
        } // end else if
    } // End of the function
    function handleChangeEvent(ev)
    {
        var _loc2 = ev.target;
        _playTime = _loc2.playheadTime;
        var _loc3 = _loc2.__get__totalTime();
        _playPercent = 100 * _playTime / _loc3;
        if (_isOpen)
        {
            _playBar.setCompletionPercentage(_playPercent);
            _playBar.setTime(_playTime);
        }
        else
        {
            _miniPlayBar.setCompletionPercentage(_playPercent);
        } // end else if
    } // End of the function
    function handleProgressEvent(ev)
    {
        if (ev.target.isRtmp(ev.target.contentPath))
        {
            _loadPercent = 100;
        }
        else
        {
            var _loc4 = ev.target.bytesLoaded;
            var _loc3 = ev.target.bytesTotal;
            _loadPercent = 100 * _loc4 / _loc3;
        } // end else if
        this.refreshBars();
        _lastProgressMediaType = ev.target.mediaType;
        this.evaluateToEnd();
    } // End of the function
    function evaluateToEnd()
    {
        if (!_isOpen)
        {
            return;
        } // end if
        var _loc2 = false;
        if (_loadPercent >= 99 && this.__get__enabled())
        {
            if (_lastProgressMediaType == "MP3")
            {
                _loc2 = true;
            }
            else if (_lastProgressMediaType == "FLV" && !mx.controls.streamingmedia.StreamingMediaConstants.DISABLE_FLV_TOEND)
            {
                _loc2 = true;
            } // end if
        } // end else if
        _buttons.toEndButton.enabled = _loc2;
    } // End of the function
    function handleCompleteEvent(ev)
    {
        if (!this.isScrubbing() && !_animating)
        {
            var _loc2 = ev.target;
            _playTime = _loc2.totalTime;
            _playPercent = 100;
            if (_isOpen)
            {
                _playBar.setCompletionPercentage(_playPercent);
                _playBar.setTime(_playTime);
            }
            else
            {
                _miniPlayBar.setCompletionPercentage(_playPercent);
            } // end else if
            this.setPlaying(false);
            mx.controls.streamingmedia.Tracer.trace("MediaController.handleCompleteEvent: playAtBeginning=true");
            playAtBeginning = true;
        } // end if
    } // End of the function
    function handleScrubbingEvent(ev)
    {
        _listenForPlayheadMoveEvent = !ev.detail;
    } // End of the function
    function handleUnrecognizedEvent(ev)
    {
        mx.controls.streamingmedia.Tracer.trace("received an unrecognized event of type " + ev.type + " with target " + ev.target);
    } // End of the function
    function createDefaultStrings()
    {
        _strings = new Object();
        _strings.paused = "PAUSED";
        _strings.streaming = "STREAMING";
    } // End of the function
    function getLocalizedString(id)
    {
        var _loc2 = _strings[id];
        return (_loc2);
    } // End of the function
    function get playTime()
    {
        return (_playTime);
    } // End of the function
    function set playTime(aTime)
    {
        _playTime = aTime;
        //return (this.playTime());
        null;
    } // End of the function
    function get playPercent()
    {
        return (_playPercent);
    } // End of the function
    function set playPercent(aPercent)
    {
        _playPercent = aPercent;
        //return (this.playPercent());
        null;
    } // End of the function
    function isOpenUpOrLeft()
    {
        return (_openUpOrLeft);
    } // End of the function
    function setOpenUpOrLeft(is)
    {
        _openUpOrLeft = is;
    } // End of the function
    function associateDisplay(d)
    {
        d.associateController(this);
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
        mx.controls.streamingmedia.Tracer.trace("MediaController.set enabled to " + is);
        _enabled = is;
        _buttons.toStartButton.enabled = is;
        _buttons.toEndButton.enabled = is;
        _buttons.playPauseButtons.enabled = is;
        _volumeControl._muteButton.muteSimpleButton.enabled = is;
        _volumeControl._loudButton.loudSimpleButton.enabled = is;
        _playBar.__set__enabled(is);
        _volumeControl.getHandle().__set__enabled(is);
        if (is)
        {
            if (_priorPolicy != null)
            {
                this.__set__controllerPolicy(_priorPolicy);
            } // end if
        }
        else
        {
            _priorPolicy = controllerPolicy;
            if (this.__get__controllerPolicy() == "auto")
            {
                this.__set__controllerPolicy("off");
            } // end if
        } // end else if
        //return (this.enabled());
        null;
    } // End of the function
    function isScrubbing()
    {
        return (_playBar.isScrubbing());
    } // End of the function
    static var symbolName = "MediaController";
    static var symbolOwner = mx.controls.MediaController;
    var className = "MediaController";
    static var version = "2.0.1.78";
    var clipParameters = {controllerPolicy: "auto", horizontal: true, activePlayControl: "pause", backgroundStyle: "default"};
    static var MINIMUM_HORIZONTAL_WIDTH = 202;
    static var CLOSED_HORIZONTAL_HEIGHT = 25;
    static var MINIMUM_HORIZONTAL_OPEN_HEIGHT = 63;
    static var LOADBAR_HORIZONTAL_CLOSED_Y = 14;
    static var LOADBAR_HORIZONTAL_OPEN_Y = 24;
    static var MINIMUM_VERTICAL_HEIGHT = 202;
    static var CLOSED_VERTICAL_WIDTH = 25;
    static var MINIMUM_VERTICAL_OPEN_WIDTH = 80;
    static var LOADBAR_VERTICAL_CLOSED_X = 14;
    static var MINIPLAYBAR_VERTICAL_CLOSED_X = 8;
    static var ANIMATION_TIME = 250;
    static var CLOSE_DELAY = 1000;
    static var OPEN_DELAY = 100;
    static var LOCALIZED_FILE = "streamingmediacontroller.xml";
    static var H_BORDER = 8;
    static var V_BORDER = 8;
    var _animating = false;
    var _enabled = true;
} // End of Class
