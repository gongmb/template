class mx.controls.streamingmedia.RTMPConnection extends NetConnection
{
    var _player, _targetURI, _streamName;
    static var _connectFlag;
    function RTMPConnection(player)
    {
        super();
        _player = player;
    } // End of the function
    function onMetaData(info)
    {
        _player.setTotalTime(info.duration);
    } // End of the function
    function connect(targetURI, streamName)
    {
        if (mx.controls.streamingmedia.RTMPConnection._connectFlag == true)
        {
            this.pushConnection(targetURI, streamName);
            return;
        } // end if
        _connectFlag = true;
        super.connect(targetURI, streamName);
        this.popConnection();
    } // End of the function
    function pushConnection(targetURI, streamName)
    {
        _targetURI = targetURI;
        _streamName = streamName;
        mx.controls.streamingmedia.RTMPConnection._connectorQueue.push(this);
    } // End of the function
    function popConnection()
    {
        _connectFlag = false;
        if (mx.controls.streamingmedia.RTMPConnection._connectorQueue.length != 0)
        {
            var _loc1 = mx.controls.streamingmedia.RTMPConnection._connectorQueue.pop();
            _loc1.connect(_loc1._targetURI, _loc1._streamName);
        } // end if
    } // End of the function
    static var _connectorQueue = new Array();
} // End of Class
