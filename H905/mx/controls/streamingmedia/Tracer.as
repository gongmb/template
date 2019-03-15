class mx.controls.streamingmedia.Tracer
{
    function Tracer()
    {
    } // End of the function
    static function trace(message)
    {
        if (mx.controls.streamingmedia.Tracer.DEBUG)
        {
            trace (message);
        } // end if
    } // End of the function
    static var DEBUG = false;
} // End of Class
