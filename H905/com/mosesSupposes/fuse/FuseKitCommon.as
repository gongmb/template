class com.mosesSupposes.fuse.FuseKitCommon
{
    static var logOutput;
    function FuseKitCommon()
    {
    } // End of the function
    static function _cts()
    {
        return ("|_tint|_tintPercent|_brightness|_brightOffset|_contrast|_invertColor|_colorReset|_colorTransform|");
    } // End of the function
    static function _resetTo100()
    {
        return ("|_alpha|_contrast|_invertColor|_tintPercent|_xscale|_yscale|_scale|");
    } // End of the function
    static function _resetTo0()
    {
        return ("|_brightness|_brightOffset|_colorReset|_rotation|");
    } // End of the function
    static function _underscoreable()
    {
        return (com.mosesSupposes.fuse.FuseKitCommon._cts() + "_frame|_x|_y|_xscale|_yscale|_scale|_width|_height|_size|_rotation|_alpha|_fade|_visible|");
    } // End of the function
    static function _cbprops()
    {
        return ("|skipLevel|cycles|roundResults|extra1|extra2|func|scope|args|startfunc|startscope|startargs|updfunc|updscope|updargs|");
    } // End of the function
    static function _fuseEvents()
    {
        return ("|onStart|onStop|onPause|onResume|onAdvance|onComplete|");
    } // End of the function
    static function _fuseprops()
    {
        return ("|command|label|delay|event|eventparams|target|addTarget|trigger|startAt|ease|easing|seconds|duration|time|");
    } // End of the function
    static function _validateFuseCommand(c, inGroup, hasArg, outputLevel, simple)
    {
        var _loc1 = false;
        var _loc2 = false;
        switch (c)
        {
            case "start":
            case "stop":
            case "pause":
            case "resume":
            case "setStartProps":
            {
                if (inGroup != true)
                {
                    _loc1 = true;
                } // end if
                break;
            } 
            case "delay":
            case "trigger":
            {
                if (simple == true)
                {
                    if (hasArg == true)
                    {
                        _loc1 = true;
                    } // end if
                }
                else
                {
                    _loc2 = true;
                } // end else if
                inGroup = false;
                break;
            } 
            case "skipTo":
            {
                if (hasArg == true && inGroup != true)
                {
                    _loc1 = true;
                } // end if
            } 
        } // End of switch
        if (outputLevel > 0 && _loc1 == false)
        {
            com.mosesSupposes.fuse.FuseKitCommon.error("109", c, inGroup, _loc2);
        } // end if
        return (_loc1);
    } // End of the function
    static function output(s)
    {
        if (typeof(com.mosesSupposes.fuse.FuseKitCommon.logOutput) == "function")
        {
            com.mosesSupposes.fuse.FuseKitCommon.logOutput(s);
        }
        else
        {
            trace (s);
        } // end else if
    } // End of the function
    static function error(errorCode)
    {
        var _loc3 = arguments[1];
        var _loc4 = arguments[2];
        var _loc6 = arguments[3];
        if (com.mosesSupposes.fuse.FuseKitCommon.VERBOSE != true)
        {
            com.mosesSupposes.fuse.FuseKitCommon.output("[FuseKitCommon#" + errorCode + "]");
            return;
        } // end if
        var _loc2 = "";
        var _loc5 = "\n";
        switch (errorCode)
        {
            case "001":
            {
                _loc2 = _loc2 + "** ERROR: When using simpleSetup to extend prototypes, you must pass the Shortcuts class. **";
                _loc2 = _loc2 + (_loc5 + " import com.mosesSupposes.fuse.*;");
                _loc2 = _loc2 + (_loc5 + " ZigoEngine.simpleSetup(Shortcuts);" + _loc5);
                break;
            } 
            case "002":
            {
                _loc2 = _loc2 + "** ZigoEngine.doShortcut: shortcuts missing. Use the setup commands: import com.mosesSupposes.fuse.*; ZigoEngine.register(Shortcuts); **";
                break;
            } 
            case "003":
            {
                _loc2 = _loc2 + (_loc5 + "*** Error: DO NOT use #include \"lmc_tween.as\" with this version of ZigoEngine! ***" + _loc5);
                break;
            } 
            case "004":
            {
                _loc2 = _loc2 + ("** ZigoEngine.doTween - too few arguments [" + _loc3 + "].");
                if (Boolean(_loc4) == true)
                {
                    _loc2 = _loc2 + " If you are trying to use Object Syntax without Fuse, pass FuseItem in your register() or simpleSetup() call. **";
                }
                else
                {
                    _loc2 = _loc2 + " Object syntax call failed. **";
                } // end else if
                break;
            } 
            case "005":
            {
                _loc2 = _loc2 + ("** ZigoEngine.doTween - missing targets[" + _loc3 + "] and/or props[" + _loc4 + "] **");
                break;
            } 
            case "006":
            {
                _loc2 = _loc2 + ("** Error: easing shortcut string not recognized (\"" + _loc3 + "\"). You may need to pass the in PennerEasing class during register or simpleSetup. **");
                break;
            } 
            case "007":
            {
                _loc2 = _loc2 + ("- ZigoEngine: Target locked [" + _loc3 + "], ignoring tween call [" + _loc4 + "]");
                break;
            } 
            case "008":
            {
                _loc2 = _loc2 + "** You must register the Shortcuts class in order to use easy string-type callback parsing. **";
                break;
            } 
            case "009":
            {
                _loc2 = _loc2 + ("** ZigoEngine: A callback parameter \"" + _loc3 + "\" was not recognized. **");
                break;
            } 
            case "010":
            {
                _loc2 = _loc2 + ("** " + (_loc3 == true ? ("ZigoEngine") : ("FuseItem")) + " unable to parse " + (_loc4 == 1 ? ("callback[") : (String(_loc4) + " callbacks[")) + _loc6 + "]. Try using the syntax {scope:this, func:\"myFunction\"} **");
                break;
            } 
            case "011":
            {
                _loc2 = _loc2 + ("- ZigoEngine: Callbacks discarded via skipLevel 2 option [" + _loc3 + "|" + _loc4 + "].");
                break;
            } 
            case "012":
            {
                _loc2 = _loc2 + ("- Engine set props or ignored no-change tween on: " + _loc3 + ", props passed:[" + _loc4 + "], endvals passed:[" + _loc6 + "]");
                break;
            } 
            case "013":
            {
                _loc2 = _loc2 + ("- Engine added tween on:\n\ttargets:[" + _loc3 + "]\n\tprops:[" + _loc4 + "]\n\tendvals:[" + _loc6 + "]");
                break;
            } 
            case "014":
            {
                _loc2 = _loc2 + "** Error: easing function passed is not usable with this engine. Functions need to follow the Robert Penner model. **";
                break;
            } 
            case "015":
            {
                _loc2 = _loc2 + "** Error: The CustomEasing class must be passed during setup (register or simpleSetup) to use custom easing Arrays. **";
                break;
            } 
            case "016":
            {
                _loc2 = _loc2 + ("[ ZigoEngine.TIME_MULTIPLIER: " + String(Number(Number(_loc3) * 100)) + "% ]");
                break;
            } 
            case "101":
            {
                _loc2 = _loc2 + "** ERROR: Fuse simpleSetup was removed in version 2.0! **";
                _loc2 = _loc2 + (_loc5 + " You must now use the following commands:");
                _loc2 = _loc2 + (_loc5 + _loc5 + "\timport com.mosesSupposes.fuse.*;");
                _loc2 = _loc2 + (_loc5 + "\tZigoEngine.simpleSetup(Shortcuts, PennerEasing, Fuse);");
                _loc2 = _loc2 + (_loc5 + "Note that PennerEasing is optional, and FuseFMP is also accepted. (FuseFMP.simpleSetup is run automatically if included.)" + _loc5);
                break;
            } 
            case "102":
            {
                _loc2 = _loc2 + ("** Fuse " + _loc3 + " index or label not found (" + _loc4 + ") or out of range. **");
                break;
            } 
            case "103":
            {
                _loc2 = _loc2 + ("** Fuse skipTo (" + _loc3 + ")  ignored - targets the current index (" + _loc4 + "). **");
                break;
            } 
            case "104":
            {
                _loc2 = _loc2 + ("** Fuse fastForward index out of play range (" + _loc3 + ") - skipTo has been called instead. **");
                break;
            } 
            case "105":
            {
                _loc2 = _loc2 + "** An unsupported Array method was called on Fuse. **";
                break;
            } 
            case "106":
            {
                _loc2 = _loc2 + "** ERROR: You have not set up Fuse correctly. **";
                _loc2 = _loc2 + (_loc5 + "You must now use the following commands (PennerEasing is optional).");
                _loc2 = _loc2 + (_loc5 + "\timport com.mosesSupposes.fuse.*;");
                _loc2 = _loc2 + (_loc5 + "\tZigoEngine.simpleSetup(Shortcuts, PennerEasing, Fuse);" + _loc5);
                break;
            } 
            case "107":
            {
                _loc2 = _loc2 + "** Fuse :: id not found - Aborting open(). **";
                break;
            } 
            case "108":
            {
                _loc2 = _loc2 + "** Fuse.startRecent: No recent Fuse found to start! **";
                break;
                break;
            } 
            case "109":
            {
                _loc2 = _loc2 + ("** Command \"" + _loc3 + "\" discarded. ");
                if (_loc4 == true)
                {
                    _loc2 = _loc2 + "Not allowed within a group. **";
                }
                else if (_loc6 == true)
                {
                    _loc2 = _loc2 + ("Not supported in Object Syntax, use the " + _loc3 + " property instead. **");
                }
                else
                {
                    _loc2 = _loc2 + "The command may be unrecognized or missing an argument. **";
                } // end else if
                break;
            } 
            case "110":
            {
                _loc2 = _loc2 + ("** " + _loc3 + " illegal Fuse property discarded:\"" + _loc4 + "\". Bezier keywords other than x and y cannot be set as start values. **");
                break;
            } 
            case "112":
            {
                _loc2 = _loc2 + "** Fuse: missing com.mosesSupposes.fuse.ZigoEngine! Cannot tween. **";
                break;
            } 
            case "113":
            {
                _loc2 = _loc2 + "** FuseItem: A callback has been discarded. Actions with a command may only contain: label, delay, scope, args. **";
                break;
            } 
            case "115":
            {
                _loc2 = _loc2 + (_loc3 + " overlapping prop discarded: " + _loc4);
                break;
            } 
            case "116":
            {
                _loc2 = _loc2 + ("** FuseItem Error: Delays within groups (arrays) and start/update callbacks are not supported when using Fuse without ZigoEngine. Although you need to restructure your Fuse, it should be possible to achieve the same results. **" + _loc5);
                break;
            } 
            case "117":
            {
                _loc2 = _loc2 + ("** " + _loc3 + ": infinite cycles are not allowed within Fuses - discarded. **");
                break;
            } 
            case "118":
            {
                _loc2 = _loc2 + ("** " + _loc3 + ": No targets found!" + (_loc4 == true ? ("  [Unable to set start props] **") : ("  [Skipping tween parameters in this action] **")));
                break;
            } 
            case "119":
            {
                _loc2 = _loc2 + ("** " + _loc3 + ": " + (_loc4 == 1 ? ("") : (_loc4 + " actions in the group")) + " missing targets" + (_loc6 == true ? (" during setStartProps **") : (" **")));
                break;
            } 
            case "120":
            {
                _loc2 = _loc2 + ("** " + _loc3 + ": conflict with \"" + _loc4 + "\". Property might be doubled within a grouped-action array. **");
                break;
            } 
            case "121":
            {
                _loc2 = _loc2 + "** Fuse timecode formatting requires \"00:\" formatting (example:\"01:01:33\" yields 61.33 seconds.) **";
                break;
            } 
            case "122":
            {
                _loc2 = _loc2 + ("** Event \"" + _loc3 + "\" reserved by Fuse. **");
                break;
            } 
            case "123":
            {
                _loc2 = _loc2 + ("** A Fuse event parameter failed in " + _loc3 + " **");
                break;
            } 
            case "124":
            {
                _loc2 = _loc2 + ("** " + _loc3 + ": trigger:" + _loc4 + " ignored - only one trigger is allowed per action **");
                break;
            } 
            case "125":
            {
                _loc2 = _loc2 + (_loc3 + " Warning - fastForward hit an item during its tween cycle, may malfunction.");
                break;
            } 
            case "201":
            {
                _loc2 = _loc2 + ("**** FuseFMP cannot initialize argument " + _loc3 + " (BitmapFilters cannot be applied to this object type) ****");
                break;
            } 
            case "202":
            {
                _loc2 = _loc2 + ("** FuseFMP error: A " + _loc3 + " could not be created for " + _loc4 + " **");
                break;
            } 
            case "203":
            {
                _loc2 = _loc2 + ("** FuseFMP.setFilterProps - too few arguments passed (" + _loc3 + ") - minimum 2 required. **");
                break;
            } 
            case "204":
            {
                _loc2 = _loc2 + ("** FuseFMP.setFilterProps could not locate the filter passed. (" + _loc3 + ") **");
                break;
            } 
        } // End of switch
        com.mosesSupposes.fuse.FuseKitCommon.output(_loc2);
    } // End of the function
    static function parseCallback(callback, targets, outputLevel, callerIsEngine, addprefix)
    {
        if (callback._vcb == true)
        {
            return (callback);
        } // end if
        var validCBs = {_vcb: true, skipLevel: _global.com.mosesSupposes.fuse.ZigoEngine.SKIP_LEVEL, cycles: 1};
        if (callback == undefined)
        {
            return (validCBs);
        } // end if
        var cbErrors = [];
        if (typeof(callback) == "object")
        {
            if (callback.skipLevel != undefined && typeof(callback.skipLevel) == "number" && callback.skipLevel != _global.com.mosesSupposes.fuse.ZigoEngine.SKIP_LEVEL)
            {
                if (callback.skipLevel >= 0 && callback.skipLevel <= 2)
                {
                    validCBs.skipLevel = callback.skipLevel;
                } // end if
            } // end if
            if (callback.cycles != undefined)
            {
                if (typeof(callback.cycles) == "number" && callback.cycles > -1)
                {
                    validCBs.cycles = callback.cycles;
                }
                else if (callback.cycles.toUpperCase() == "LOOP")
                {
                    validCBs.cycles = 0;
                } // end if
            } // end else if
            if (callback.extra1 != undefined)
            {
                validCBs.extra1 = callback.extra1;
            } // end if
            if (callback.extra2 != undefined)
            {
                validCBs.extra2 = callback.extra2;
            } // end if
            if (callback.roundResults === true || callback.roundResults === false)
            {
                validCBs.roundResults = callback.roundResults;
            } // end if
        }
        else
        {
            callback = {func: callback};
        } // end else if
        var prefixes = ["start", "upd", ""];
        var easyfuncparse = _global.com.mosesSupposes.fuse.Shortcuts.parseStringTypeCallback;
        for (var i in prefixes)
        {
            var prefix = prefixes[i];
            var fstr = callback[prefix + "func"];
            if (fstr != undefined && typeof(fstr) == "string" && fstr.indexOf("(") > -1)
            {
                if (easyfuncparse != undefined)
                {
                    var efc = easyfuncparse(fstr);
                    if (efc.func != undefined)
                    {
                        callback[prefix + "scope"] = efc.scope;
                        callback[prefix + "func"] = efc.func;
                        callback[prefix + "args"] = efc.args;
                    } // end if
                    continue;
                } // end if
                if (outputLevel > 0)
                {
                    com.mosesSupposes.fuse.FuseKitCommon.error("008");
                } // end if
            } // end if
        } // end of for...in
        var basescope = callback.scope;
        for (var i in callback)
        {
            var fi = i.toLowerCase().indexOf("func");
            if (fi > -1)
            {
                var prefix = i.slice(0, fi);
                var func = callback[i];
                var args = callback[prefix + "args"];
                var scope = callback[prefix + "scope"] == undefined ? (basescope) : (callback[prefix + "scope"]);
                if (typeof(func) == "string" && scope[func] == undefined)
                {
                    for (var j in targets)
                    {
                        var targ = targets[j];
                        if (typeof(targ[func]) == "function")
                        {
                            scope = targ;
                            break;
                        } // end if
                        if (typeof(targ._parent[func]) == "function")
                        {
                            scope = targ._parent;
                            break;
                        } // end if
                    } // end of for...in
                    if (scope == undefined && _level0[func] != undefined)
                    {
                        scope = _level0;
                    } // end if
                    if (scope == undefined && _global[func] != undefined)
                    {
                        scope = _global;
                    } // end if
                } // end if
                if (typeof(func) != "function")
                {
                    if (typeof(scope[String(func)]) == "function")
                    {
                        func = scope[String(func)];
                    }
                    else
                    {
                        func = String(func);
                    } // end if
                } // end else if
                if (func == undefined)
                {
                    cbErrors.push(String((addprefix == null ? (i) : (addprefix + i)) + ":" + (typeof(callback[i]) == "string" ? ("\"" + callback[i] + "\"") : (callback[i])) + "/" + prefix + "scope:" + scope));
                }
                else
                {
                    if (args != undefined && !(args instanceof Array))
                    {
                        args = [args];
                    } // end if
                    if (prefix == "")
                    {
                        prefix = "end";
                    } // end if
                    validCBs[prefix] = {s: scope, f: func, a: args};
                    if (callerIsEngine == true)
                    {
                        validCBs[prefix].id = cbTicker = ++com.mosesSupposes.fuse.FuseKitCommon.cbTicker;
                    } // end if
                    if (prefix == "start")
                    {
                        validCBs.start.fired = false;
                    } // end if
                } // end else if
                continue;
            } // end if
            if (com.mosesSupposes.fuse.FuseKitCommon._cbprops().indexOf("|" + i + "|") == -1)
            {
                com.mosesSupposes.fuse.FuseKitCommon.error("009", i);
            } // end if
        } // end of for...in
        if (cbErrors.length > 0 && outputLevel > 0)
        {
            if (outputLevel > 0)
            {
                com.mosesSupposes.fuse.FuseKitCommon.error("010", callerIsEngine, cbErrors.length, cbErrors.toString());
            } // end if
        } // end if
        return (validCBs);
    } // End of the function
    static var VERSION = "Fuse Kit 2.1.3r1 Copyright (c) 2006 Moses Gunesch, MosesSupposes.com under MIT Open Source License";
    static var VERBOSE = true;
    static var ALL = "ALL";
    static var ALLCOLOR = "ALLCOLOR";
    static var cbTicker = 0;
} // End of Class
