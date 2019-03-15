class mx.controls.streamingmedia.LoadBar extends MovieClip
{
    var _parent, _controller, _fill, _y, _border, _background, _x;
    function LoadBar()
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
            _loc2 = this.yToPercent(_fill._height);
        }
        else
        {
            _loc2 = this.xToPercent(_fill._width);
        } // end else if
        return (_loc2);
    } // End of the function
    function setCompletionPercentage(aPercentage)
    {
        aPercentage = Math.floor(aPercentage);
        if (aPercentage < 0)
        {
            aPercentage = 0;
        }
        else if (aPercentage > 100)
        {
            aPercentage = 100;
        } // end else if
        if (this.isVertical())
        {
            _fill._height = this.percentToY(aPercentage);
            _fill._y = this.getActualHeight() - _fill._height - 1;
        }
        else
        {
            _fill._width = this.percentToX(aPercentage);
        } // end else if
    } // End of the function
    function draw(size)
    {
        var _loc3 = this.getCompletionPercentage();
        if (this.isVertical())
        {
            if (size == null)
            {
                size = this.getHeight();
            } // end if
            _y = 8;
            _border._height = size;
            _background._height = size - 2;
        }
        else
        {
            if (size == null)
            {
                size = this.getWidth();
            } // end if
            _x = 8;
            _border._width = size;
            _background._width = size - 2;
        } // end else if
        this.setCompletionPercentage(_loc3);
    } // End of the function
    function getWidth()
    {
        var _loc2;
        if (this.isVertical())
        {
            _loc2 = 3;
        }
        else
        {
            _loc2 = _controller.__get__width() - 16;
        } // end else if
        return (_loc2);
    } // End of the function
    function getHeight()
    {
        var _loc2;
        if (this.isVertical())
        {
            if (_controller.__get__expanded())
            {
                _loc2 = this.getOpenHeight();
            }
            else
            {
                _loc2 = this.getClosedHeight();
            } // end else if
        }
        else
        {
            _loc2 = 3;
        } // end else if
        return (_loc2);
    } // End of the function
    function getActualHeight()
    {
        return (_border._height);
    } // End of the function
    function getActualWidth()
    {
        return (_border._width);
    } // End of the function
    function getOpenHeight()
    {
        //return (_controller.height() - 90);
    } // End of the function
    function getClosedHeight()
    {
        //return (_controller.height() - 16);
    } // End of the function
    function xToPercent(x)
    {
        var _loc2 = 100 * x / (this.getActualWidth() - 2);
        return (_loc2);
    } // End of the function
    function percentToX(percent)
    {
        var _loc2 = (this.getWidth() - 2) * (percent / 100);
        return (_loc2);
    } // End of the function
    function yToPercent(y)
    {
        var _loc2 = 100 * (y - 0) / (this.getActualHeight() - 2);
        return (_loc2);
    } // End of the function
    function percentToY(percent)
    {
        var _loc2 = (this.getActualHeight() - 2) * (percent / 100);
        return (_loc2);
    } // End of the function
} // End of Class
