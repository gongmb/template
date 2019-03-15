class mx.controls.streamingmedia.CuePoint
{
    var name, time;
    function CuePoint(aName, aTime)
    {
        name = aName;
        time = aTime;
    } // End of the function
    function toString()
    {
        return ("CuePoint: " + name + " at " + time + " seconds");
    } // End of the function
} // End of Class
