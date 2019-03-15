class mx.events.LowLevelEvents
{
    var dispatchEvent, _onMouseMove, __q_mouseMove, _onRollOver, _onRollOut, _onPress, _onRelease, _onReleaseOutside, _onDragOver, _onDragOut, _onMouseDown, _onMouseUp;
    function LowLevelEvents()
    {
    } // End of the function
    static function addMouseEvents(obj)
    {
        if (obj.refcntMouseEvents > 0)
        {
            ++obj.refcntMouseEvents;
            return;
        } // end if
        var _loc2 = mx.events.UIEventDispatcher._fEventDispatcher;
        obj.refcntMouseEvents = 1;
        obj._onPress = obj.onPress;
        obj.onPress = _loc2.onPress;
        obj._onRelease = obj.onRelease;
        obj.onRelease = _loc2.onRelease;
        obj._onReleaseOutside = obj.onReleaseOutside;
        obj.onReleaseOutside = _loc2.onReleaseOutside;
        obj._onRollOver = obj.onRollOver;
        obj.onRollOver = _loc2.onRollOver;
        obj._onRollOut = obj.onRollOut;
        obj.onRollOut = _loc2.onRollOut;
        obj._onDragOver = obj.onDragOver;
        obj.onDragOver = _loc2.onDragOver;
        obj._onDragOut = obj.onDragOut;
        obj.onDragOut = _loc2.onDragOut;
    } // End of the function
    static function removeMouseEvents(obj)
    {
        if (obj.refcntMouseEvents > 1)
        {
            --obj.refcntMouseEvents;
            return;
        } // end if
        obj.refcntMouseEvents = 0;
        if (obj._onPress != undefined)
        {
            obj.onPress = obj._onPress;
        }
        else
        {
            delete obj.onPress;
        } // end else if
        if (obj._onRelease != undefined)
        {
            obj.onRelease = obj._onRelease;
        }
        else
        {
            delete obj.onRelease;
        } // end else if
        if (obj._onReleaseOutside != undefined)
        {
            obj.onReleaseOutside = obj._onReleaseOutside;
        }
        else
        {
            delete obj.onReleaseOutside;
        } // end else if
        if (obj._onRollOver != undefined)
        {
            obj.onRollOver = obj._onRollOver;
        }
        else
        {
            delete obj.onRollOver;
        } // end else if
        if (obj._onRollOut != undefined)
        {
            obj.onRollOut = obj._onRollOut;
        }
        else
        {
            delete obj.onRollOut;
        } // end else if
        if (obj._onDragOver != undefined)
        {
            obj.onDragOver = obj._onDragOver;
        }
        else
        {
            delete obj.onDragOver;
        } // end else if
        if (obj._onDragOut != undefined)
        {
            obj.onDragOut = obj._onDragOut;
        }
        else
        {
            delete obj.onDragOut;
        } // end else if
        if (obj._onMouseMove != undefined)
        {
            obj.onMouseMove = obj._onMouseMove;
        }
        else
        {
            delete obj.onMouseMove;
        } // end else if
    } // End of the function
    static function addSomewhereEvents(obj)
    {
        if (obj.refcntSomewhereEvents > 0)
        {
            ++obj.refcntSomewhereEvents;
            return;
        } // end if
        var _loc2 = mx.events.UIEventDispatcher._fEventDispatcher;
        obj.refcntSomewhereEvents = 1;
        obj._onMouseDown = obj.onMouseDown;
        obj.onMouseDown = _loc2.onMouseDown;
        obj._onMouseUp = obj.onMouseUp;
        obj.onMouseUp = _loc2.onMouseUp;
    } // End of the function
    static function removeSomewhereEvents(obj)
    {
        if (obj.refcntSomewhereEvents > 1)
        {
            --obj.refcntSomewhereEvents;
            return;
        } // end if
        obj.refcntSomewhereEvents = 0;
        if (obj._onMouseDown != undefined)
        {
            obj.onMouseDown = obj._onMouseDown;
        }
        else
        {
            delete obj.onMouseDown;
        } // end else if
        if (obj._onMouseUp != undefined)
        {
            obj.onMouseUp = obj._onMouseUp;
        }
        else
        {
            delete obj.onMouseUp;
        } // end else if
    } // End of the function
    function onMouseMove(Void)
    {
        this.dispatchEvent({type: "mouseMove"});
        this._onMouseMove();
    } // End of the function
    function onRollOver(Void)
    {
        this.dispatchEvent({type: "mouseOver"});
        if (__q_mouseMove.length > 0)
        {
            _onMouseMove = onMouseMove;
            var _loc2 = mx.events.UIEventDispatcher._fEventDispatcher;
            onMouseMove = _loc2.onMouseMove;
        } // end if
        this._onRollOver();
    } // End of the function
    function onRollOut(Void)
    {
        this.dispatchEvent({type: "mouseOut"});
        if (__q_mouseMove.length > 0)
        {
            if (_onMouseMove != undefined)
            {
                onMouseMove == _onMouseMove;
            }
            else
            {
                delete this.onMouseMove;
            } // end if
        } // end else if
        this._onRollOut();
    } // End of the function
    function onPress(Void)
    {
        this.dispatchEvent({type: "mouseDown"});
        this._onPress();
    } // End of the function
    function onRelease(Void)
    {
        this.dispatchEvent({type: "mouseUp"});
        this._onRelease();
    } // End of the function
    function onReleaseOutside(Void)
    {
        this.dispatchEvent({type: "mouseUp"});
        this._onReleaseOutside();
    } // End of the function
    function onDragOver(Void)
    {
        this.dispatchEvent({type: "mouseOver"});
        this._onDragOver();
    } // End of the function
    function onDragOut(Void)
    {
        this.dispatchEvent({type: "mouseOut"});
        this._onDragOut();
    } // End of the function
    function onMouseDown(Void)
    {
        this.dispatchEvent({type: "mouseDownSomewhere"});
        this._onMouseDown();
    } // End of the function
    function onMouseUp(Void)
    {
        this.dispatchEvent({type: "mouseUpSomewhere"});
        this._onMouseUp();
    } // End of the function
    static function enableLowLevelEvents()
    {
    } // End of the function
    static function classConstruct()
    {
        var _loc1 = mx.events.UIEventDispatcher;
        var _loc4 = mx.events.LowLevelEvents;
        _loc1.lowLevelEvents.mouseEvents = ["addMouseEvents", "removeMouseEvents"];
        _loc1.lowLevelEvents.somewhereEvents = ["addSomewhereEvents", "removeSomewhereEvents"];
        _loc1.mouseEvents = _loc4.mouseEvents;
        _loc1.addMouseEvents = _loc4.addMouseEvents;
        _loc1.removeMouseEvents = _loc4.removeMouseEvents;
        _loc1.somewhereEvents = _loc4.somewhereEvents;
        _loc1.addSomewhereEvents = _loc4.addSomewhereEvents;
        _loc1.removeSomewhereEvents = _loc4.removeSomewhereEvents;
        if (_loc1._fEventDispatcher == undefined)
        {
            _loc1._fEventDispatcher = new mx.events.UIEventDispatcher();
        } // end if
        var _loc3 = _loc1._fEventDispatcher;
        var _loc2 = _loc4.prototype;
        _loc3.onPress = _loc2.onPress;
        _loc3.onRelease = _loc2.onRelease;
        _loc3.onReleaseOutside = _loc2.onReleaseOutside;
        _loc3.onRollOut = _loc2.onRollOut;
        _loc3.onRollOver = _loc2.onRollOver;
        _loc3.onDragOut = _loc2.onDragOut;
        _loc3.onDragOver = _loc2.onDragOver;
        _loc3.onMouseDown = _loc2.onMouseDown;
        _loc3.onMouseMove = _loc2.onMouseMove;
        _loc3.onMouseUp = _loc2.onMouseUp;
        return (true);
    } // End of the function
    static var mouseEvents = {mouseMove: 1, mouseDown: 1, mouseUp: 1, mouseOver: 1, mouseOut: 1};
    static var somewhereEvents = {mouseDownSomewhere: 1, mouseUpSomewhere: 1};
    static var classConstructed = mx.events.LowLevelEvents.classConstruct();
    static var UIEventDispatcherDependency = mx.events.UIEventDispatcher;
} // End of Class
