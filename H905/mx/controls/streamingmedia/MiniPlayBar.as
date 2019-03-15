class mx.controls.streamingmedia.MiniPlayBar extends MovieClip
{
    var _parent, _controller, _thumb, _hilite, _y, _tray, _x;
    function MiniPlayBar()
    {
        super();
        this.init();
    } // End of the function
    function init()
    {
        _controller = _parent;
        this.draw();
    } // End of the function
    function isVertical()
    {
        //return (!_controller.horizontal());
    } // End of the function
    function getCompletionPercentage()
    {
        var _loc2;
        if (this.isVertical())
        {
            _loc2 = this.yToPercent(_thumb._y);
        }
        else
        {
            _loc2 = this.xToPercent(_thumb._x);
        } // end else if
        return (_loc2);
    } // End of the function
    function setCompletionPercentage(aPercentage)
    {
        aPercentage = Math.floor(aPercentage);
        if (aPercentage < 1)
        {
            aPercentage = 1;
        }
        else if (aPercentage > 100)
        {
            aPercentage = 100;
        } // end else if
        if (this.isVertical())
        {
            var _loc3 = this.percentToY(aPercentage);
            _thumb._y = this.getActualHeight() - _loc3 - 1;
            _hilite._height = _loc3 - 1;
            _hilite._y = this.getActualHeight() - _loc3 - 2;
        }
        else
        {
            var _loc4 = this.percentToX(aPercentage);
            _thumb._x = _loc4;
            _hilite._width = _loc4 - 1;
        } // end else if
    } // End of the function
    function getController()
    {
        return (_controller);
    } // End of the function
    function draw(h)
    {
        if (this.isVertical())
        {
            _y = 8;
            if (h == null)
            {
                h = this.getHeight();
            } // end if
            _tray.setHeight(h);
        }
        else
        {
            var _loc3 = this.getWidth();
            _x = 8;
            _tray.setWidth(this.getWidth());
        } // end else if
        this.setCompletionPercentage(_controller.__get__playPercent());
    } // End of the function
    function getWidth()
    {
        var _loc2 = this.isVertical() ? (6) : (_controller.__get__width() - 16);
        return (_loc2);
    } // End of the function
    function getHeight()
    {
        var _loc2 = this.isVertical() ? (_controller.__get__height() - 16) : (6);
        return (_loc2);
    } // End of the function
    function getActualHeight()
    {
        var _loc2 = _tray.getHeight();
        return (_loc2);
    } // End of the function
    function xToPercent(x)
    {
        var _loc2 = 100 * x / (this.getWidth() - 2);
        return (_loc2);
    } // End of the function
    function percentToX(percent)
    {
        var _loc2 = (this.getWidth() - 2) * (percent / 100);
        return (_loc2);
    } // End of the function
    function yToPercent(y)
    {
        var _loc2 = 100 * (y - 1) / (this.getActualHeight() - 3);
        return (_loc2);
    } // End of the function
    function percentToY(percent)
    {
        var _loc2 = (this.getActualHeight() - 3) * (percent / 100) + 1;
        return (_loc2);
    } // End of the function
} // End of Class
