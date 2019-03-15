class mx.controls.streamingmedia.FullScreenToggle extends MovieClip
{
    var _parent, _player, _isFull, gotoAndStop, _originalPlayerX, _originalPlayerY, _originalPlayerWidth, _originalPlayerHeight, _originalAutosize, _waited, onEnterFrame, _maximize, _minimize;
    function FullScreenToggle()
    {
        super();
        this.init();
    } // End of the function
    function init()
    {
        _player = _parent._parent;
        _isFull = false;
        this.setEnabled(_player.__get__enabled());
    } // End of the function
    function isFullScreen()
    {
        return (_isFull);
    } // End of the function
    function displayFull(noAction)
    {
        this.gotoAndStop("big");
        _isFull = true;
        if (!noAction)
        {
            _originalPlayerX = _player._x;
            _originalPlayerY = _player._y;
            _originalPlayerWidth = _player.width;
            _originalPlayerHeight = _player.height;
            _originalAutosize = _player.autoSize;
            var _loc7 = _player.getController();
            if (_loc7.__get__controllerPolicy() == "auto" && _loc7.__get__expanded())
            {
                mx.controls.streamingmedia.Tracer.trace("FullScreenToggle.displayFull: about to call contract");
                _loc7.contract();
            } // end if
            _loc7.setNotAnimating(false);
            _player.__set__autoSize(false);
            var _loc4 = this.getContainerInfo();
            _player.setSize(_loc4.width, _loc4.height);
            if (_loc4.origin)
            {
                var _loc5 = mx.managers.SystemManager.__get__screen();
                mx.controls.streamingmedia.Tracer.trace("FullScreenToggle.displayFull: scr=(" + _loc5.x + "," + _loc5.y + ")");
                _player._x = _loc5.x;
                _player._y = _loc5.y;
            } // end if
            var _loc6 = _player.getBounds(_loc4.container);
            mx.controls.streamingmedia.Tracer.trace("FullScreenToggle.displayFull: bounds=(" + _loc6.xMin + "," + _loc6.yMin + ")");
            if (_loc4.origin)
            {
                _player._x = _player._x + _loc5.x;
                _player._y = _player._y + _loc5.y;
            }
            else
            {
                _player._x = _player._x + _loc4.x;
                _player._y = _player._y + _loc4.y;
            } // end else if
            _player._x = _player._x - _loc6.xMin;
            _player._y = _player._y - _loc6.yMin;
            _waited = false;
            onEnterFrame = delayedBarRefresh;
            var _loc3 = this.getOtherToggles();
            for (var _loc2 = 0; _loc2 < _loc3.length; ++_loc2)
            {
                _loc3[_loc2].displayFull(true);
            } // end of for
        } // end if
    } // End of the function
    function getContainerInfo()
    {
        var _loc4;
        var _loc6 = this.getScrollViewAncestor(_player);
        if (_loc6 == null)
        {
            var _loc5 = mx.managers.SystemManager.__get__screen();
            _loc4 = {container: _root, width: _loc5.width, height: _loc5.height, x: 0, y: 0, origin: true};
        }
        else
        {
            var _loc3 = _loc6.getViewMetrics();
            _loc4 = {container: _loc6, width: _loc6.width - _loc3.left - _loc3.right, height: _loc6.height - _loc3.top - _loc3.bottom, x: _loc3.left, y: _loc3.top, origin: false};
        } // end else if
        return (_loc4);
    } // End of the function
    function getScrollViewAncestor(anMC)
    {
        var _loc3;
        if (anMC == _root)
        {
            _loc3 = null;
        }
        else if (anMC instanceof mx.core.ScrollView)
        {
            _loc3 = anMC;
        }
        else
        {
            _loc3 = this.getScrollViewAncestor(anMC._parent);
        } // end else if
        return (_loc3);
    } // End of the function
    function delayedBarRefresh()
    {
        if (!_waited)
        {
            _waited = true;
        }
        else
        {
            delete this.onEnterFrame;
            _player.getController().refreshBars();
        } // end else if
    } // End of the function
    function displayNormal(noAction)
    {
        this.gotoAndStop("small");
        _isFull = false;
        if (!noAction)
        {
            var _loc4 = _player.getController();
            if (_loc4.__get__controllerPolicy() == "auto" && _loc4.__get__expanded())
            {
                mx.controls.streamingmedia.Tracer.trace("FullScreenToggle.displayNormal: about to call contract");
                _loc4.contract();
            } // end if
            _loc4.setNotAnimating(false);
            _player.__set__autoSize(_originalAutosize);
            _player.setSize(_originalPlayerWidth, _originalPlayerHeight);
            _player._x = _originalPlayerX;
            _player._y = _originalPlayerY;
            _waited = false;
            onEnterFrame = delayedBarRefresh;
            var _loc3 = this.getOtherToggles();
            for (var _loc2 = 0; _loc2 < _loc3.length; ++_loc2)
            {
                _loc3[_loc2].displayNormal(true);
            } // end of for
        } // end if
    } // End of the function
    function toggleDisplay()
    {
        if (_isFull)
        {
            this.displayNormal();
        }
        else
        {
            this.displayFull();
        } // end else if
    } // End of the function
    function getAllToggles()
    {
        return (_parent.getAllToggles());
    } // End of the function
    function getOtherToggles()
    {
        var _loc3 = this.getAllToggles();
        for (var _loc2 = 0; _loc2 < _loc3.length; ++_loc2)
        {
            if (_loc3[_loc2] == this)
            {
                _loc3.splice(_loc2, 1);
                break;
            } // end if
        } // end of for
        return (_loc3);
    } // End of the function
    function getPlayer()
    {
        return (_player);
    } // End of the function
    function getEnabled()
    {
        //return (_player.enabled());
    } // End of the function
    function setEnabled(is)
    {
        mx.controls.streamingmedia.Tracer.trace("FullScreenToggle.setEnabled: " + is);
        _maximize.setEnabled(is);
        _minimize.setEnabled(is);
    } // End of the function
} // End of Class
