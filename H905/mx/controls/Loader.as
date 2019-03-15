class mx.controls.Loader extends mx.core.View
{
    var _origWidth, _origHeight, livePreview, __width, __height, createTextField, __get__autoLoad, contentHolder, childrenCreated, __get__contentPath, __get__scaleContent, destroyChildAt, createChild, border_mc, __set__autoLoad, __get__bytesLoaded, __get__bytesTotal, __get__content, __set__contentPath, __get__percentLoaded, __set__scaleContent;
    function Loader()
    {
        super();
    } // End of the function
    function init()
    {
        super.init();
    } // End of the function
    function setSize(w, h, noEvent)
    {
        _origWidth = w;
        _origHeight = h;
        super.setSize(w, h, noEvent);
        if (_global.isLivePreview)
        {
            livePreview._width = __width - 1;
            livePreview._height = __height - 1;
        } // end if
    } // End of the function
    function draw()
    {
        this.size();
    } // End of the function
    function size()
    {
        super.size();
        if (__scaleContent)
        {
            this.doScaleContent();
        }
        else
        {
            this.doScaleLoader();
        } // end else if
    } // End of the function
    function createChildren()
    {
        super.createChildren();
        if (_global.isLivePreview)
        {
            this.createTextField("livePreview", -1000, 0, 0, 99, 99);
            livePreview.text = "mx.controls.Loader";
            livePreview.border = true;
        } // end if
        if (__autoLoad)
        {
            this.load();
        } // end if
    } // End of the function
    function getAutoLoad()
    {
        return (__autoLoad);
    } // End of the function
    function get autoLoad()
    {
        return (this.getAutoLoad());
    } // End of the function
    function setAutoLoad(b)
    {
        if (__autoLoad != b)
        {
            __autoLoad = b;
            if (__autoLoad && !this[mx.core.View.childNameBase + 0]._complete)
            {
                this.load();
            } // end if
        } // end if
    } // End of the function
    function set autoLoad(b)
    {
        this.setAutoLoad(b);
        //return (this.autoLoad());
        null;
    } // End of the function
    function getBytesLoaded()
    {
        return (__bytesLoaded);
    } // End of the function
    function get bytesLoaded()
    {
        return (this.getBytesLoaded());
    } // End of the function
    function getBytesTotal()
    {
        return (__bytesTotal);
    } // End of the function
    function get bytesTotal()
    {
        return (this.getBytesTotal());
    } // End of the function
    function getContent()
    {
        return (contentHolder);
    } // End of the function
    function get content()
    {
        return (this.getContent());
    } // End of the function
    function getContentPath()
    {
        return (__contentPath);
    } // End of the function
    function get contentPath()
    {
        return (this.getContentPath());
    } // End of the function
    function setContentPath(url)
    {
        if (__contentPath != url)
        {
            __contentPath = url;
            if (childrenCreated)
            {
                if (__autoLoad)
                {
                    this.load();
                } // end if
            } // end if
        } // end if
    } // End of the function
    function set contentPath(c)
    {
        this.setContentPath(c);
        //return (this.contentPath());
        null;
    } // End of the function
    function getPercentLoaded()
    {
        var _loc2 = 100 * (__bytesLoaded / __bytesTotal);
        if (isNaN(_loc2))
        {
            _loc2 = 0;
        } // end if
        return (_loc2);
    } // End of the function
    function get percentLoaded()
    {
        return (this.getPercentLoaded());
    } // End of the function
    function get scaleContent()
    {
        return (this.getScaleContent());
    } // End of the function
    function getScaleContent()
    {
        return (__scaleContent);
    } // End of the function
    function setScaleContent(b)
    {
        if (__scaleContent != b)
        {
            __scaleContent = b;
            if (__scaleContent)
            {
                this.doScaleContent();
            }
            else
            {
                this.doScaleLoader();
            } // end if
        } // end else if
    } // End of the function
    function set scaleContent(b)
    {
        this.setScaleContent(b);
        //return (this.scaleContent());
        null;
    } // End of the function
    function load(url)
    {
        if (url != undefined)
        {
            __contentPath = url;
        } // end if
        if (this[mx.core.View.childNameBase + 0] != undefined)
        {
            if (this[mx.core.View.childNameBase + 0]._complete)
            {
                this.setSize(_origWidth, _origHeight);
            } // end if
            this.destroyChildAt(0);
        } // end if
        if (__contentPath == undefined || __contentPath == "")
        {
            return;
        } // end if
        this.createChild(__contentPath, "contentHolder");
    } // End of the function
    function childLoaded(obj)
    {
        super.childLoaded(obj);
        obj._rotation = 0;
        _origWidth = __width;
        _origHeight = __height;
        if (__scaleContent)
        {
            this.doScaleContent();
        }
        else
        {
            this.doScaleLoader();
        } // end else if
    } // End of the function
    function dispatchEvent(obj)
    {
        if (obj.type == "progress" || obj.type == "complete")
        {
            obj.target = this;
            __bytesTotal = obj.total;
            __bytesLoaded = obj.current;
        } // end if
        super.dispatchEvent(obj);
    } // End of the function
    function doScaleContent()
    {
        if (!this[mx.core.View.childNameBase + 0]._complete)
        {
            return;
        } // end if
        this.unScaleContent();
        var _loc2 = border_mc.__get__borderMetrics();
        var _loc7 = _origWidth - _loc2.left - _loc2.right;
        var _loc6 = _origHeight - _loc2.top - _loc2.bottom;
        var _loc9 = _loc2.left;
        var _loc8 = _loc2.top;
        var _loc5 = _loc7 / contentHolder._width;
        var _loc3 = _loc6 / contentHolder._height;
        var _loc4;
        if (_loc5 > _loc3)
        {
            _loc9 = _loc2.left + Math.floor((_loc7 - contentHolder._width * _loc3) / 2);
            _loc4 = _loc3;
        }
        else
        {
            _loc8 = _loc2.top + Math.floor((_loc6 - contentHolder._height * _loc5) / 2);
            _loc4 = _loc5;
        } // end else if
        _loc4 = _loc4 * 100;
        contentHolder._xscale = contentHolder._yscale = _loc4;
        contentHolder._x = _loc9;
        contentHolder._y = _loc8;
        if (__width != _origWidth || __height != _origHeight)
        {
            this.setSize(_origWidth, _origHeight);
        } // end if
    } // End of the function
    function doScaleLoader()
    {
        if (!this[mx.core.View.childNameBase + 0]._complete)
        {
            return;
        } // end if
        this.unScaleContent();
        var _loc2 = border_mc.__get__borderMetrics();
        var _loc4 = contentHolder._width + _loc2.left + _loc2.right;
        var _loc3 = contentHolder._height + _loc2.top + _loc2.bottom;
        if (__width != _loc4 || __height != _loc3)
        {
            this.setSize(_loc4, _loc3);
        } // end if
        contentHolder._x = _loc2.left;
        contentHolder._y = _loc2.top;
    } // End of the function
    function unScaleContent()
    {
        contentHolder._xscale = contentHolder._yscale = 100;
        contentHolder._x = contentHolder._y = 0;
    } // End of the function
    static var symbolName = "Loader";
    static var symbolOwner = mx.controls.Loader;
    static var version = "2.0.1.78";
    var className = "Loader";
    var clipParameters = {autoLoad: 1, scaleContent: 1, contentPath: 1};
    static var mergedClipParameters = mx.core.UIObject.mergeClipParameters(mx.controls.Loader.prototype.clipParameters, mx.core.View.prototype.clipParameters);
    var __autoLoad = true;
    var __bytesLoaded = undefined;
    var __bytesTotal = undefined;
    var __contentPath = undefined;
    var __scaleContent = true;
} // End of Class
