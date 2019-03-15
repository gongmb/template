class mx.controls.streamingmedia.ScreenAccommodator
{
    var containee, container, beforeInit, initId, wasAlreadyDisabled;
    function ScreenAccommodator(aContainee)
    {
        containee = aContainee;
        container = this.getContainingScreen();
        if (container != null)
        {
            var _loc2 = container.__get__visible();
            beforeInit = false;
            container.addEventListener("hide", this);
            container.addEventListener("reveal", this);
            if (!_loc2)
            {
                beforeInit = true;
                initId = setInterval(this, "disableContainee", 50);
            } // end if
        } // end if
    } // End of the function
    function disableContainee()
    {
        if (initAction == "nothing" || initAction == "hide")
        {
            mx.controls.streamingmedia.Tracer.trace("ScreenAccommodator.disableContainee: disabling " + containee);
            containee.enabled = false;
        } // end if
        clearInterval(initId);
        beforeInit = false;
    } // End of the function
    function getContainingScreen()
    {
        var _loc4 = null;
        for (var _loc3 = containee._parent; _loc4 == null && _loc3 != _root; _loc3 = _loc3._parent)
        {
            if (_loc3 instanceof mx.screens.Screen)
            {
                _loc4 = _loc3;
                continue;
            } // end if
        } // end of for
        return (_loc4);
    } // End of the function
    function handleEvent(ev)
    {
        mx.controls.streamingmedia.Tracer.trace("ScreenAccommodator.handleEvent: " + ev.type + " for " + containee);
        if (ev.type == "hide")
        {
            if (beforeInit)
            {
                initAction = "hide";
            }
            else if (containee.enabled)
            {
                wasAlreadyDisabled = false;
                containee.enabled = false;
            }
            else
            {
                wasAlreadyDisabled = true;
            } // end else if
        }
        else if (ev.type == "reveal")
        {
            if (beforeInit)
            {
                initAction = "reveal";
            }
            else if (!wasAlreadyDisabled && containee.visible)
            {
                containee.enabled = true;
            } // end else if
        } // end else if
    } // End of the function
    var initAction = "nothing";
} // End of Class
