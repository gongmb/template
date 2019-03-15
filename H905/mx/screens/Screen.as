class mx.screens.Screen extends mx.controls.Loader
{
    var _childScreens, __get__parentScreen, _parent, _loadExternalClass, __set__scaleContent, _name, __get__parentIsScreen, __get__scaleContent, globalToLocal, x, y, border_mc, dispatchEvent, __get__indexInParent, __get__numChildScreens, __get__rootScreen, __get__transitionManager;
    static var __get__currentFocusedScreen;
    function Screen()
    {
        super();
    } // End of the function
    function get indexInParent()
    {
        return (_indexInParent);
    } // End of the function
    function get numChildScreens()
    {
        return (_childScreens.length);
    } // End of the function
    function get parentIsScreen()
    {
        var _loc2 = this.__get__parentScreen() != null && parentScreen._isScreen;
        return (_loc2);
    } // End of the function
    function get parentScreen()
    {
        var _loc2 = _parent;
        if (_loc2 == null)
        {
            return (null);
        }
        else if (_loc2._isScreen)
        {
            return (_loc2);
        }
        else
        {
            return (null);
        } // end else if
    } // End of the function
    function get rootScreen()
    {
        for (var _loc2 = this; _loc2.__get__parentIsScreen(); _loc2 = _loc2.parentScreen)
        {
        } // end of for
        return (_loc2);
    } // End of the function
    function get transitionManager()
    {
        return (__transitionManager);
    } // End of the function
    static function get currentFocusedScreen()
    {
        var curFocus;
        curFocus = _root.focusManager.getFocus();
        if (!curFocus || curFocus == undefined)
        {
        } // end if
        for (curFocus = Selection.getFocus(); curFocus && !curFocus._isScreen; curFocus = curFocus._parent)
        {
        } // end of for
        if (curFocus == undefined)
        {
            return (null);
        }
        else
        {
            return (curFocus);
        } // end else if
    } // End of the function
    function getChildScreen(childIndex)
    {
        return (_childScreens[childIndex]);
    } // End of the function
    function createChild(className, instanceName, initProps)
    {
        var _loc4;
        _childLoading = instanceName;
        return (super.createChild(className, instanceName, initProps));
    } // End of the function
    function drawFocus()
    {
    } // End of the function
    function init()
    {
        mx.core.ext.UIObjectExtensions.Extensions();
        mx.core.ext.UIComponentExtensions.Extensions();
        mx.events.LowLevelEvents.enableLowLevelEvents();
        _childScreens = [];
        super.init();
        _loadExternalClass = mx.screens.Screen.symbolName;
        this.__set__scaleContent(false);
        mx.events.UIEventDispatcher.initialize(this);
        if (_parent._childLoading == _name)
        {
        }
        else if (this.__get__parentIsScreen())
        {
            _parent.registerChildScreen(this);
        } // end else if
    } // End of the function
    function registerChildScreen(scrn)
    {
        scrn._indexInParent = _childScreens.push(scrn) - 1;
    } // End of the function
    function childLoaded(obj)
    {
        super.childLoaded(obj);
        var _loc4;
        var _loc5 = null;
        var _loc7 = obj._parent;
        for (var _loc4 in obj)
        {
            if (typeof(obj[_loc4]) == "movieclip" && obj[_loc4]._isScreen)
            {
                _loc5 = obj[_loc4];
                break;
            } // end if
        } // end of for...in
        if (_loc5._isScreen)
        {
            if (!this.__get__scaleContent())
            {
                var _loc6 = new Object();
                _loc6.x = obj.x;
                _loc6.y = obj.y;
                this.globalToLocal(_loc6);
                obj._x = _loc6.x;
                obj._y = _loc6.y;
            }
            else
            {
                _loc6 = new Object();
                _loc6.x = x;
                _loc6.y = y;
                _parent.localToGlobal(_loc6);
                obj.globalToLocal(_loc6);
                _loc5._x = _loc6.x;
                _loc5._y = _loc6.y;
            } // end else if
            _loc5._indexInParent = _loc7._childScreens.push(_loc5) - 1;
            obj._isScreenContainer = true;
            obj._containedScreen = _loc5;
        } // end if
        _loc7._childLoading = "";
    } // End of the function
    function doScaleLoader()
    {
    } // End of the function
    function createChildren()
    {
        border_mc = new mx.skins.RectBorder();
        border_mc.__borderMetrics = {top: 0, left: 0, bottom: 0, right: 0};
        super.createChildren();
    } // End of the function
    function allTransitionsInDone()
    {
        this.dispatchEvent({type: "allTransitionsInDone", target: this});
    } // End of the function
    function allTransitionsOutDone()
    {
        this.dispatchEvent({type: "allTransitionsOutDone", target: this});
    } // End of the function
    function destroyChildAt(childIndex)
    {
        _childScreens.splice(childIndex, 1);
        super.destroyChildAt(childIndex);
    } // End of the function
    static var symbolName = "Screen";
    static var symbolOwner = mx.screens.Screen;
    var className = "Screen";
    var _isScreen = true;
    var _indexInParent = 0;
    var __transitionManager = null;
    var _childLoading = "";
    var borderStyle = "none";
} // End of Class
