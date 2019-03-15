class mx.controls.streamingmedia.Chrome extends MovieClip
{
    var visible, width, height, _parent, _alpha, _chromeEdge, _chromeHilite, _chromeFill, showToggles, _toggleNW, _toggleSW, _toggleNE, _toggleSE;
    function Chrome()
    {
        super();
        this.init();
    } // End of the function
    function init()
    {
        if (visible == null)
        {
            visible = true;
        } // end if
        if (width != null && height != null)
        {
            this.draw();
        } // end if
        mx.controls.streamingmedia.Tracer.trace("Chrome.init: setting enabled to " + _parent.enabled);
        this.setEnabled(_parent.enabled);
    } // End of the function
    function setSize(w, h)
    {
        width = w;
        height = h;
    } // End of the function
    function draw()
    {
        if (visible)
        {
            _alpha = 100;
        }
        else
        {
            _alpha = 0;
        } // end else if
        _chromeEdge._width = width;
        _chromeEdge._height = height;
        _chromeEdge._x = 0;
        _chromeEdge._y = 0;
        _chromeHilite._width = width - 2;
        _chromeHilite._x = 1;
        _chromeHilite._y = 1;
        _chromeFill._width = width - 2;
        _chromeFill._height = height - 3;
        _chromeFill._x = 1;
        _chromeFill._y = 2;
        if (visible && showToggles)
        {
            _toggleNW._visible = true;
            _toggleSW._visible = true;
            _toggleNE._visible = true;
            _toggleSE._visible = true;
            _toggleNW._x = 0;
            _toggleNW._y = 0;
            _toggleNE._x = width;
            _toggleNE._y = 0;
            _toggleSW._x = 0;
            _toggleSW._y = height;
            _toggleSE._x = width;
            _toggleSE._y = height;
        }
        else
        {
            _toggleNW._visible = false;
            _toggleSW._visible = false;
            _toggleNE._visible = false;
            _toggleSE._visible = false;
        } // end else if
    } // End of the function
    function getAllToggles()
    {
        return ([_toggleNW, _toggleNE, _toggleSW, _toggleSE]);
    } // End of the function
    function getOneToggle()
    {
        return (_toggleNE);
    } // End of the function
    function getEnabled()
    {
        return (_parent.enabled);
    } // End of the function
    function setEnabled(is)
    {
        mx.controls.streamingmedia.Tracer.trace("Chrome.setEnabled: " + is);
        _toggleNW.setEnabled(is);
        _toggleNE.setEnabled(is);
        _toggleSW.setEnabled(is);
        _toggleSE.setEnabled(is);
    } // End of the function
} // End of Class
