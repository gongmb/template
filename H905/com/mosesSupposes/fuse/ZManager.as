class com.mosesSupposes.fuse.ZManager
{
    var tweens, now;
    function ZManager()
    {
        tweens = {};
        numTweens = 0;
    } // End of the function
    function addTween(obj, props, endvals, seconds, ease, delay, callback)
    {
        var _loc24 = callback.skipLevel == undefined ? (0) : (callback.skipLevel);
        var _loc44 = callback.cycles == undefined ? (1) : (callback.cycles);
        var _loc30 = callback.extra1;
        var _loc29 = callback.extra2;
        var _loc23 = [];
        var _loc14 = _global.com.mosesSupposes.fuse.FuseFMP;
        var _loc43 = String("|" + _loc14.getAllShortcuts().join("|") + "|");
        var _loc42 = com.mosesSupposes.fuse.FuseKitCommon._cts();
        var _loc25 = "";
        var _loc28 = "";
        var _loc22 = obj.__zigoID__;
        var _loc7 = tweens[String(_loc22)];
        if (_loc7 != undefined && com.mosesSupposes.fuse.ZigoEngine.AUTOSTOP == true)
        {
            if (obj._listeners.length > 0)
            {
                for (var _loc40 in _loc7.props)
                {
                    _loc23.unshift(_loc40);
                } // end of for...in
            } // end if
            _loc7.numProps = 0;
            this.cleanUp(true);
        } // end if
        for (var _loc47 in props)
        {
            var _loc5 = props[_loc47];
            var _loc4 = endvals[_loc47];
            var _loc15 = 0;
            if (_loc5 == "_fade")
            {
                _loc5 = "_alpha";
                _loc15 = _loc4 < 50 ? (-1) : (1);
            } // end if
            var _loc16 = _loc42.indexOf("|" + _loc5 + "|") > -1;
            var _loc18 = _loc7.colorProp;
            if (_loc7 != undefined)
            {
                if (_loc16 == true && _loc18 != undefined)
                {
                    _loc23.unshift(_loc18);
                    delete _loc7.props[_loc18];
                    delete _loc7.colorProp;
                    --_loc7.numProps;
                }
                else if (_loc7.props[_loc5] != undefined)
                {
                    _loc23.unshift(_loc5);
                    delete _loc7[_loc5];
                    --_loc7.numProps;
                } // end if
            } // end else if
            var _loc3 = {c: -1, fmp: -1, complex: -1};
            var _loc11 = _loc24 == 0 && seconds + delay == 0 || _loc24 > 0 && seconds == 0;
            var _loc10 = false;
            var _loc13 = _loc14 != undefined && _loc43.indexOf("|" + _loc5 + "|") > -1;
            var _loc19 = _loc5.toLowerCase().indexOf("colors") > -1 && _loc4 instanceof Array;
            var _loc27 = _loc13 == true && _loc5.indexOf("lor") > -1 && _loc5.charAt(2) != "l";
            if (_loc13 == true)
            {
                _loc3.fmp = _loc14;
                _loc3.ps = _loc14.getFilterProp(obj, _loc5, true);
                _loc3.special = true;
            } // end if
            if (_loc16 == true || _loc19 == true || _loc27 && _loc11 == false)
            {
                _loc3.complex = 1;
                if (_loc16 == true)
                {
                    _loc3.c = new Color(obj);
                    _loc3.ps = (Color)(_loc3.c).getTransform();
                    var _loc17 = _loc5 == "_tint" || _loc5 == "_tintPercent" || _loc5 == "_colorReset" ? ("tint") : (_loc5.slice(1));
                    var _loc9 = null;
                    var _loc12 = null;
                    if (_loc5 != "_colorTransform")
                    {
                        if (_loc17 == "tint")
                        {
                            if (typeof(_loc4) == "object")
                            {
                                _loc12 = _loc4.tint;
                                _loc9 = _global.isNaN(_loc4.percent) == true ? (100) : (_loc4.percent);
                            }
                            else if (_loc5 == "_tintPercent" || _loc5 == "_colorReset")
                            {
                                var _loc20 = com.mosesSupposes.fuse.ZigoEngine.getColorKeysObj(obj).tintPercent;
                                if (_loc5 == "_colorReset")
                                {
                                    _loc9 = Math.min(_loc20, 100 - Math.abs(Number(_loc4)));
                                }
                                else
                                {
                                    _loc9 = typeof(_loc4) == "string" ? ((_loc20 || 0) + Number(_loc4)) : (Number(_loc4));
                                } // end else if
                                _loc9 = Math.max(0, Math.min(_loc9, 100));
                                _loc12 = com.mosesSupposes.fuse.ZigoEngine.getColorKeysObj(obj).tint || 0;
                            }
                            else
                            {
                                _loc12 = _loc4;
                                _loc9 = 100;
                            } // end else if
                        }
                        else
                        {
                            _loc9 = typeof(_loc4) == "string" ? ((com.mosesSupposes.fuse.ZigoEngine.getColorKeysObj(obj)[_loc17] || 0) + Number(_loc4)) : (_loc4);
                        } // end else if
                        _loc4 = com.mosesSupposes.fuse.ZigoEngine.getColorTransObj(_loc17, _loc9, _loc12);
                    } // end if
                    if (_loc11 == true)
                    {
                        if (_loc5 == "_colorTransform")
                        {
                            (Color)(_loc3.c).setTransform(_loc4);
                        }
                        else
                        {
                            com.mosesSupposes.fuse.ZigoEngine.setColorByKey(obj, _loc17, _loc9, _loc12);
                        } // end else if
                    }
                    else
                    {
                        var _loc21 = this.getChangeObj(_loc3.ps, _loc4, false, false);
                        _loc3.ch = _loc21.map;
                        if (_loc21.changed == true)
                        {
                            _loc10 = true;
                        } // end if
                    } // end else if
                }
                else if (_loc11 == true)
                {
                    _loc14.setFilterProp(obj, _loc5, _loc4);
                }
                else if (_loc19 == true)
                {
                    _loc3.c = 2;
                    _loc3.ch = [];
                    for (var _loc40 in _loc4)
                    {
                        if (_loc4[_loc40] != null)
                        {
                            if (_loc3.ps == null)
                            {
                                _loc3.ps = [];
                            } // end if
                            _loc3.ps[_loc40] = com.mosesSupposes.fuse.ZigoEngine.getColorTransObj("tint", 100, _loc3.ps[_loc40] == null ? (obj[_loc5][_loc40]) : (_loc3.ps[_loc40]));
                            _loc21 = this.getChangeObj(_loc3.ps[_loc40], com.mosesSupposes.fuse.ZigoEngine.getColorTransObj("tint", 100, _loc4[_loc40]), true, false);
                            _loc3.ch[_loc40] = _loc21.map;
                            if (_loc21.changed == true)
                            {
                                _loc10 = true;
                            } // end if
                        } // end if
                    } // end of for...in
                }
                else
                {
                    _loc3.c = 1;
                    _loc3.ps = com.mosesSupposes.fuse.ZigoEngine.getColorTransObj("tint", 100, _loc3.ps);
                    _loc21 = this.getChangeObj(_loc3.ps, com.mosesSupposes.fuse.ZigoEngine.getColorTransObj("tint", 100, _loc4), true, false);
                    _loc3.ch = _loc21.map;
                    if (_loc21.changed == true)
                    {
                        _loc10 = true;
                    } // end else if
                } // end else if
            }
            else if (_loc5 == "_bezier_")
            {
                this.removeTween(obj, "_x,_y", true);
                if (_loc11 == true)
                {
                    if (_loc4.x != null && _global.isNaN(Number(_loc4.x)) == false)
                    {
                        obj._x = typeof(_loc4.x) == "string" ? (obj._x + Number(_loc4.x)) : (_loc4.x);
                    } // end if
                    if (_loc4.y != null && _global.isNaN(Number(_loc4.y)) == false)
                    {
                        obj._y = typeof(_loc4.y) == "string" ? (obj._y + Number(_loc4.y)) : (_loc4.y);
                    } // end if
                }
                else
                {
                    _loc3.special = true;
                    _loc3.ps = 0;
                    _loc3.ch = 1;
                    _loc3.bz = {sx: obj._x, sy: obj._y};
                    if (_loc4.x == null || _global.isNaN(Number(_loc4.x)))
                    {
                        _loc4.x = _loc3.bz.sx;
                    } // end if
                    if (_loc4.y == null || _global.isNaN(Number(_loc4.y)))
                    {
                        _loc4.y = _loc3.bz.sy;
                    } // end if
                    _loc3.bz.chx = typeof(_loc4.x) == "string" ? (Number(_loc4.x)) : (_loc4.x - _loc3.bz.sx);
                    if (_global.isNaN(_loc3.bz.chx) == true)
                    {
                        _loc3.bx.chx = 0;
                    } // end if
                    _loc3.bz.chy = typeof(_loc4.y) == "string" ? (Number(_loc4.y)) : (_loc4.y - _loc3.bz.sy);
                    if (_global.isNaN(_loc3.bz.chy) == true)
                    {
                        _loc3.bx.chy = 0;
                    } // end if
                    if (_loc4.controlX == null || _global.isNaN(Number(_loc4.controlX)))
                    {
                        _loc3.bz.ctrlx = _loc3.bz.sx + _loc3.bz.chx / 2;
                    }
                    else
                    {
                        _loc3.bz.ctrlx = typeof(_loc4.controlX) == "string" ? (_loc3.bz.sx + Number(_loc4.controlX)) : (_loc4.controlX);
                    } // end else if
                    if (_loc4.controlY == null || _global.isNaN(Number(_loc4.controlY)))
                    {
                        _loc3.bz.ctrly = _loc3.bz.sy + _loc3.bz.chy / 2;
                    }
                    else
                    {
                        _loc3.bz.ctrly = typeof(_loc4.controlY) == "string" ? (_loc3.bz.sy + Number(_loc4.controlY)) : (_loc4.controlY);
                    } // end else if
                    _loc3.bz.ctrlx = _loc3.bz.ctrlx - _loc3.bz.sx;
                    _loc3.bz.ctrly = _loc3.bz.ctrly - _loc3.bz.sy;
                    _loc10 = _loc3.bz.chx + _loc3.bz.chy != 0;
                } // end else if
            }
            else
            {
                if (typeof(_loc4) == "object")
                {
                    _loc3.complex = _loc4 instanceof Array ? (0) : (1);
                } // end if
                if (_loc5 == "_x" || _loc5 == "_y")
                {
                    this.removeTween(obj, "_bezier_", true);
                } // end if
                if (_loc5 == "_frame" && typeof(obj) == "movieclip")
                {
                    _loc3.ps = obj._currentframe;
                    _loc3.special = true;
                }
                else if (_loc13 == false)
                {
                    if (_loc3.complex > -1)
                    {
                        _loc3.ps = _loc3.complex == 0 ? ([]) : ({});
                        for (var _loc40 in _loc4)
                        {
                            _loc3.ps[_loc40] = obj[_loc5][_loc40];
                        } // end of for...in
                    }
                    else
                    {
                        _loc3.ps = obj[_loc5];
                    } // end else if
                } // end else if
                if (_loc11 == true)
                {
                    if (_loc13 == true)
                    {
                        _loc14.setFilterProp(obj, _loc5, typeof(_loc4) == "string" ? (_loc3.ps + Number(_loc4)) : (_loc4));
                    }
                    else if (_loc3.complex > -1)
                    {
                        for (var _loc40 in _loc4)
                        {
                            if (_loc4[_loc40] != null && _global.isNaN(Number(_loc4[_loc40])) == false)
                            {
                                obj[_loc5][_loc40] = typeof(_loc4[_loc40]) == "string" ? (_loc3.ps[_loc40] + Number(_loc4[_loc40])) : (_loc4[_loc40]);
                                if (_global.isNaN(obj[_loc5][_loc40]) == true)
                                {
                                    obj[_loc5][_loc40] = 0;
                                } // end if
                            } // end if
                        } // end of for...in
                    }
                    else
                    {
                        obj[_loc5] = typeof(_loc4) == "string" ? (_loc3.ps + Number(_loc4)) : (_loc4);
                        if (_loc15 == 1)
                        {
                            obj._visible = true;
                        }
                        else if (_loc15 == -1)
                        {
                            obj._visible = false;
                        } // end else if
                    } // end else if
                }
                else if (_loc3.complex > -1)
                {
                    _loc21 = this.getChangeObj(_loc3.ps, _loc4, _loc13, _loc3.complex == 0);
                    _loc3.ch = _loc21.map;
                    if (_loc21.changed == true)
                    {
                        _loc10 = true;
                    } // end if
                }
                else
                {
                    if (_loc4 == null || _global.isNaN(Number(_loc4)))
                    {
                        _loc4 = _loc3.ps;
                    } // end if
                    _loc3.ch = typeof(_loc4) == "string" ? (Number(_loc4)) : (Number(_loc4) - _loc3.ps);
                    if (_global.isNaN(_loc3.ch) == true)
                    {
                        _loc3.ch = 0;
                    } // end if
                    _loc10 = _loc3.ch != 0;
                } // end else if
            } // end else if
            if (_loc24 == 0 && (_loc10 == true || _loc11 == false) || _loc10 == true && _loc11 == false)
            {
                if (_loc3.complex > -1 && _loc3.c !== 2)
                {
                    _loc3.ps = [_loc3.ps];
                    _loc3.ch = [_loc3.ch];
                } // end if
                _loc3.ts = now + delay * 1000;
                _loc3.pt = -1;
                _loc3.d = seconds * 1000;
                _loc3.ef = ease;
                _loc3.sf = false;
                _loc3.cycles = _loc44;
                if (_loc30 != undefined)
                {
                    _loc3.e1 = _loc30;
                } // end if
                if (_loc29 != undefined)
                {
                    _loc3.e2 = _loc29;
                } // end if
                _loc3.v = _loc15;
                if (callback.start != undefined)
                {
                    _loc3.scb = callback.start;
                } // end if
                if (callback.upd != undefined)
                {
                    _loc3.ucb = callback.upd;
                } // end if
                if (callback.end != undefined)
                {
                    _loc3.ecb = callback.end;
                } // end if
                if (callback.roundResults != undefined)
                {
                    _loc3.rr = callback.roundResults;
                } // end if
                if (tweens[String(_loc22)] == undefined)
                {
                    _loc7 = tweens[String(_loc22)] = {numProps: 0, locked: false, targ: obj, targID: String("\"" + (obj._name != undefined ? (obj._name) : (obj.toString())) + "\""), targZID: _loc22, props: {}};
                    ++numTweens;
                } // end if
                if (_loc16 == true)
                {
                    _loc7.colorProp = _loc5;
                } // end if
                _loc7.props[_loc5] = _loc3;
                ++_loc7.numProps;
                _loc25 = _loc5 + "," + _loc25;
                _loc28 = (typeof(_loc4) == "string" ? ("\"" + _loc4 + "\"") : (_loc4)) + "," + _loc28;
            } // end if
            _loc3 = undefined;
        } // end of for...in
        if (_loc7 == undefined || _loc7.numProps <= 0)
        {
            this.cleanUp();
        } // end if
        if (_loc23.length > 0 && com.mosesSupposes.fuse.ZigoEngine._listeners.length > 0)
        {
            com.mosesSupposes.fuse.ZigoEngine.broadcastMessage("onTweenInterrupt", {target: obj, props: _loc23, __zigoID__: _loc22, during: "add"});
        } // end if
        if (_loc25 == "")
        {
            if (_loc24 == 2)
            {
                if (com.mosesSupposes.fuse.ZigoEngine.OUTPUT_LEVEL == 2)
                {
                    com.mosesSupposes.fuse.FuseKitCommon.error("011", obj._name != undefined ? (obj._name) : (obj.toString()), props.toString());
                } // end if
            }
            else
            {
                var _loc48 = obj._listeners.length > 0;
                if (_loc48 == true)
                {
                    obj.broadcastMessage("onTweenStart", {target: obj, props: props});
                } // end if
                if (callback.start != undefined)
                {
                    callback.start.f.apply(callback.start.s, callback.start.a);
                } // end if
                if (_loc48 == true)
                {
                    obj.broadcastMessage("onTweenUpdate", {target: obj, props: props});
                } // end if
                if (callback.upd != undefined)
                {
                    callback.upd.f.apply(callback.upd.s, callback.upd.a);
                } // end if
                if (_loc48 == true)
                {
                    obj.broadcastMessage("onTweenEnd", {target: obj, props: props});
                } // end if
                if (callback.end != undefined)
                {
                    callback.end.f.apply(callback.end.s, callback.end.a);
                } // end if
            } // end else if
            this.cleanUp();
        } // end if
        if (com.mosesSupposes.fuse.ZigoEngine.OUTPUT_LEVEL == 2)
        {
            if (_loc25 == "")
            {
                com.mosesSupposes.fuse.FuseKitCommon.error("012", obj._name != undefined ? (obj._name) : (obj.toString()), props.toString(), endvals.toString());
            }
            else
            {
                com.mosesSupposes.fuse.FuseKitCommon.error("013", obj._name != undefined ? (obj._name) : (obj.toString()), _loc25.slice(0, -1), _loc28.slice(0, -1));
            } // end if
        } // end else if
        return (_loc25 == "" ? (null) : (_loc25.slice(0, -1)));
    } // End of the function
    function removeTween(targs, props, noInit)
    {
        var _loc4 = {};
        var _loc12 = this.paramsObj(targs, props);
        if (_loc12.none == true)
        {
            return;
        } // end if
        var _loc16 = _loc12.all;
        var _loc17 = _loc12.allprops;
        var _loc9 = _loc16 == true ? (tweens) : (Object(_loc12.tg));
        var _loc8 = false;
        for (var _loc20 in _loc9)
        {
            var _loc3 = _loc16 == true ? (_loc20) : (String(_loc9[_loc20].__zigoID__));
            var _loc2 = tweens[_loc3];
            var _loc6 = _loc17 == true ? (_loc2.props) : (_loc12.props);
            for (var _loc14 in _loc6)
            {
                var _loc5 = _loc14 == com.mosesSupposes.fuse.FuseKitCommon.ALLCOLOR && _loc2.colorProp != undefined;
                if (_loc2.props[_loc14] != undefined || _loc5 == true)
                {
                    if (_loc4[_loc3] == null)
                    {
                        _loc4[_loc3] = [];
                    } // end if
                    _loc4[_loc3].unshift(_loc14);
                    if (_loc14 == _loc2.colorProp || _loc5 == true)
                    {
                        delete _loc2.props[_loc2.colorProp];
                        delete _loc2.colorProp;
                    }
                    else
                    {
                        delete _loc2.props[_loc14];
                    } // end else if
                    --_loc2.numProps;
                    if (_loc2.numProps <= 0)
                    {
                        _loc8 = true;
                        break;
                    } // end if
                } // end if
            } // end of for...in
        } // end of for...in
        if (com.mosesSupposes.fuse.ZigoEngine._listeners.length > 0)
        {
            for (var _loc19 in _loc4)
            {
                var _loc7 = tweens[_loc19].targ;
                com.mosesSupposes.fuse.ZigoEngine.broadcastMessage("onTweenInterrupt", {target: typeof(_loc7.addProperty) == "function" ? (_loc7) : ("[MISSING(\"" + tweens[_loc19].targID + "\")]"), props: _loc4[_loc19], __zigoID__: tweens[_loc19].targZID, during: noInit == true ? ("add") : ("remove")});
            } // end of for...in
        } // end if
        if (_loc8 == true)
        {
            this.cleanUp(noInit);
        } // end if
    } // End of the function
    function alterTweens(type, targs, props, pauseFlag, noEvents, skipTo)
    {
        if (type == "lock")
        {
            tweens[String(targs.__zigoID__)].locked = props;
            return;
        } // end if
        var _loc11 = this.paramsObj(targs, props);
        if (_loc11.none == true)
        {
            return;
        } // end if
        var _loc14 = _loc11.all;
        var _loc15 = _loc11.allprops;
        var _loc9 = _loc14 == true ? (tweens) : (Object(_loc11.tg));
        var _loc8 = 0;
        for (var _loc16 in _loc9)
        {
            var _loc7 = _loc14 == true ? (_loc16) : (String(_loc9[_loc16].__zigoID__));
            var _loc5 = tweens[_loc7];
            var _loc4 = _loc15 == true ? (_loc5.props) : (_loc11.props);
            if (_loc4.ALLCOLOR == true)
            {
                _loc4[_loc5.colorProp] = true;
                delete _loc4.ALLCOLOR;
            } // end if
            for (var _loc10 in _loc4)
            {
                ++_loc8;
                var _loc2 = _loc5.props[_loc10];
                if (type == "rewind")
                {
                    if (pauseFlag == true)
                    {
                        _loc2.pt = now;
                    } // end if
                    _loc2.ts = now;
                    if (noEvents != true)
                    {
                        _loc2.sf = false;
                        if (_loc2.scb != undefined)
                        {
                            _loc2.scb.fired = false;
                        } // end if
                    } // end if
                    continue;
                } // end if
                if (type == "ff")
                {
                    if (noEvents == true)
                    {
                        _loc2.suppressEnd = true;
                    } // end if
                    _loc2.o = true;
                    _loc2.pt = -1;
                    _loc2.ts = now - _loc2.d;
                    continue;
                } // end if
                if (type == "skipTo")
                {
                    _loc2.ts = Math.min(now, _loc2.ts + (now - _loc2.ts) - skipTo * 1000);
                    continue;
                } // end if
                if (type == "pause")
                {
                    if (_loc2.pt == -1)
                    {
                        _loc2.pt = now;
                    } // end if
                    continue;
                } // end if
                if (type == "unpause")
                {
                    if (_loc2.pt != -1)
                    {
                        _loc2.ts = now - (_loc2.pt - _loc2.ts);
                        _loc2.pt = -1;
                    } // end if
                } // end if
            } // end of for...in
        } // end of for...in
        if (type == "ff" && _loc8 > 0)
        {
            this.update();
        }
        else if (type == "rewind" && _loc8 > 0)
        {
            this.update(true);
        } // end else if
    } // End of the function
    function getStatus(type, targ, param)
    {
        if (targ == null)
        {
            return (null);
        } // end if
        var _loc8 = String(targ).toUpperCase() == com.mosesSupposes.fuse.FuseKitCommon.ALL;
        var _loc4 = tweens[String(targ.__zigoID__)];
        switch (type)
        {
            case "paused":
            {
                var _loc2 = _loc4.props;
                if (param != null)
                {
                    if (_loc2[String(param)] == undefined)
                    {
                        return (false);
                    } // end if
                    return (Boolean(_loc2[String(param)].pt != -1));
                } // end if
                for (var _loc6 in _loc2)
                {
                    if (_loc2[_loc6].pt != -1)
                    {
                        return (true);
                    } // end if
                } // end of for...in
                return (false);
            } 
            case "active":
            {
                if (param == null)
                {
                    return (Boolean(_loc4 != undefined));
                } // end if
                if (String(param).toUpperCase() == com.mosesSupposes.fuse.FuseKitCommon.ALLCOLOR)
                {
                    return (Boolean(_loc4.colorProp != undefined));
                } // end if
                return (Boolean(_loc4.props[String(param)] != undefined));
            } 
            case "count":
            {
                if (!_loc8)
                {
                    return (_loc4.numProps);
                } // end if
                var _loc3 = 0;
                for (var _loc6 in tweens)
                {
                    _loc3 = _loc3 + tweens[_loc6].numProps;
                } // end of for...in
                return (_loc3);
            } 
            case "locked":
            {
                return (_loc4.locked);
            } 
        } // End of switch
    } // End of the function
    function update(force)
    {
        var _loc22 = {};
        var _loc24 = {};
        var _loc23 = {};
        var _loc15 = {};
        var _loc13 = {};
        var _loc14 = {};
        var _loc26 = false;
        var _loc20 = com.mosesSupposes.fuse.ZigoEngine.ROUND_RESULTS;
        for (var _loc35 in tweens)
        {
            var _loc12 = tweens[_loc35];
            var _loc5 = _loc12.targ;
            var _loc34 = _loc12.props;
            var _loc21 = _loc5._listeners.length > 0;
            if (_loc5.__zigoID__ == undefined)
            {
                _loc26 = true;
                if (com.mosesSupposes.fuse.ZigoEngine._listeners.length > 0)
                {
                    var _loc25 = [];
                    for (var _loc30 in _loc34)
                    {
                        _loc25.unshift(_loc30);
                    } // end of for...in
                    com.mosesSupposes.fuse.ZigoEngine.broadcastMessage("onTweenInterrupt", {target: typeof(_loc5.addProperty) == "function" ? (_loc5) : ("[MISSING:" + _loc12.targID + "]"), props: _loc25, __zigoID__: _loc12.targZID, during: "update"});
                } // end if
                continue;
            } // end if
            for (var _loc30 in _loc34)
            {
                var _loc3 = _loc34[_loc30];
                if ((_loc3.ts > now || _loc3.pt != -1) && force != true)
                {
                    continue;
                } // end if
                var _loc9 = now >= _loc3.ts + _loc3.d;
                if (_loc3.complex == -1)
                {
                    var _loc6;
                    if (_loc9 == true)
                    {
                        _loc6 = _loc3.ps + _loc3.ch;
                        if (_loc3.cycles > 1 || _loc3.cycles == 0)
                        {
                            if (_loc3.cycles > 1)
                            {
                                --_loc3.cycles;
                            } // end if
                            _loc3.ps = _loc6;
                            _loc3.ch = -_loc3.ch;
                            _loc3.ts = now;
                            _loc9 = false;
                        } // end if
                    }
                    else
                    {
                        _loc6 = _loc3.ef(now - _loc3.ts, _loc3.ps, _loc3.ch, _loc3.d, _loc3.e1, _loc3.e2);
                    } // end else if
                    if (_global.isNaN(_loc6) == false)
                    {
                        if (_loc30 != "_bezier_" && (_loc3.rr == true || _loc20 == true && _loc3.rr !== false))
                        {
                            _loc6 = Math.round(Number(_loc6));
                        } // end if
                        if (_loc3.special != true)
                        {
                            _loc5[_loc30] = _loc6;
                        }
                        else if (_loc3.fmp != -1)
                        {
                            _loc3.fmp.setFilterProp(_loc5, _loc30, _loc6);
                        }
                        else if (_loc30 == "_bezier_")
                        {
                            var _loc10 = _loc3.bz;
                            var _loc18 = _loc10.sx + _loc6 * (2 * (1 - _loc6) * _loc10.ctrlx + _loc6 * _loc10.chx);
                            var _loc17 = _loc10.sy + _loc6 * (2 * (1 - _loc6) * _loc10.ctrly + _loc6 * _loc10.chy);
                            if (_loc3.rr == true || _loc20 == true && _loc3.rr !== false)
                            {
                                _loc18 = Math.round(Number(_loc18));
                                _loc17 = Math.round(Number(_loc17));
                            } // end if
                            _loc5._x = _loc18;
                            _loc5._y = _loc17;
                        }
                        else if (_loc30 == "_frame")
                        {
                            (MovieClip)(_loc5).gotoAndStop(Math.ceil(_loc6));
                        } // end else if
                    } // end else if
                }
                else
                {
                    var _loc16 = _loc9 == true && (_loc3.cycles > 1 || _loc3.cycles == 0);
                    var _loc7 = [];
                    for (var _loc27 in _loc3.ch)
                    {
                        var _loc4 = _loc3.complex == 0 ? ([]) : ({});
                        for (var _loc28 in _loc3.ch[_loc27])
                        {
                            var _loc8 = _loc3.ch[_loc27][_loc28];
                            var _loc11 = _loc3.ps[_loc27][_loc28];
                            if (_loc9 == true)
                            {
                                _loc4[_loc28] = _loc11 + _loc8;
                                if (_loc16 == true)
                                {
                                    _loc3.ch[_loc27][_loc28] = -_loc8;
                                } // end if
                            }
                            else
                            {
                                _loc4[_loc28] = _loc3.ef(now - _loc3.ts, _loc11, _loc8, _loc3.d, _loc3.e1, _loc3.e2);
                            } // end else if
                            if (_global.isNaN(_loc4[_loc28]) == false)
                            {
                                if (_loc3.rr == true || _loc20 == true && _loc3.rr !== false)
                                {
                                    _loc4[_loc28] = Math.round(_loc4[_loc28]);
                                } // end if
                            } // end if
                            if (_loc3.fmp == -1 && _loc3.c == -1)
                            {
                                _loc5[_loc30][_loc28] = _loc4[_loc28];
                            } // end if
                        } // end of for...in
                        _loc7.push(_loc4);
                        if (_loc3.fmp == -1 && _loc3.c == 2)
                        {
                            _loc5[_loc30][_loc27] = Number(_loc4.rb << 16 | _loc4.gb << 8 | _loc4.bb);
                        } // end if
                    } // end of for...in
                    if (_loc3.fmp != -1)
                    {
                        if (_loc3.c == 1)
                        {
                            _loc3.fmp.setFilterProp(_loc5, _loc30, _loc7[0].rb << 16 | _loc7[0].gb << 8 | _loc7[0].bb);
                        }
                        else if (_loc3.c == 2)
                        {
                            var _loc19 = [];
                            for (var _loc28 in _loc7)
                            {
                                _loc19.unshift(_loc7[_loc28].rb << 16 | _loc7[_loc28].gb << 8 | _loc7[_loc28].bb);
                            } // end of for...in
                            _loc3.fmp.setFilterProp(_loc5, _loc30, _loc19);
                        } // end else if
                    }
                    else if (_loc3.c != -1)
                    {
                        _loc3.c.setTransform(_loc7[0]);
                    } // end else if
                    if (_loc16 == true)
                    {
                        if (_loc3.cycles > 1)
                        {
                            --_loc3.cycles;
                        } // end if
                        _loc9 = false;
                        _loc3.ts = now;
                        _loc3.ps = _loc7;
                    } // end if
                } // end else if
                if (_loc3.sf == false)
                {
                    if (_loc3.v != 0)
                    {
                        _loc5._visible = true;
                    } // end if
                    if (_loc21 == true)
                    {
                        if (_loc15[_loc35] == undefined)
                        {
                            _loc15[_loc35] = [_loc5, []];
                        } // end if
                        _loc15[_loc35][1].unshift(_loc30);
                    } // end if
                    _loc3.sf = true;
                } // end if
                if (_loc3.scb.fired == false)
                {
                    _loc22[String(_loc3.scb.id)] = _loc3.scb;
                    _loc3.scb.fired = true;
                } // end if
                if (_loc21 == true)
                {
                    if (_loc13[_loc35] == undefined)
                    {
                        _loc13[_loc35] = [_loc5, []];
                    } // end if
                    _loc13[_loc35][1].unshift(_loc30);
                } // end if
                if (_loc3.ucb != undefined)
                {
                    _loc24[String(_loc3.ucb.id)] = _loc3.ucb;
                } // end if
                if (_loc9 == true)
                {
                    if (_loc3.v === -1)
                    {
                        _loc5._visible = false;
                    } // end if
                    if (_loc3.suppressEnd != true)
                    {
                        if (_loc21 == true)
                        {
                            if (_loc14[_loc35] == undefined)
                            {
                                _loc14[_loc35] = [_loc5, []];
                            } // end if
                            _loc14[_loc35][1].unshift(_loc30);
                        } // end if
                        if (_loc3.ecb != undefined)
                        {
                            _loc23[String(_loc3.ecb.id)] = _loc3.ecb;
                        } // end if
                    } // end if
                    delete _loc34[_loc30];
                    if (_loc30 == _loc12.colorProp)
                    {
                        delete _loc12.colorProp;
                    } // end if
                    --_loc12.numProps;
                    if (_loc12.numProps <= 0)
                    {
                        _loc26 = true;
                    } // end if
                } // end if
                delete _loc3.suppressEnd;
            } // end of for...in
        } // end of for...in
        for (var _loc35 in _loc15)
        {
            _loc15[_loc35][0].broadcastMessage("onTweenStart", {target: _loc15[_loc35][0], props: _loc15[_loc35][1]});
        } // end of for...in
        for (var _loc35 in _loc22)
        {
            _loc22[_loc35].f.apply(_loc22[_loc35].s, _loc22[_loc35].a);
        } // end of for...in
        for (var _loc35 in _loc13)
        {
            _loc13[_loc35][0].broadcastMessage("onTweenUpdate", {target: _loc13[_loc35][0], props: _loc13[_loc35][1]});
        } // end of for...in
        for (var _loc35 in _loc24)
        {
            _loc24[_loc35].f.apply(_loc24[_loc35].s, _loc24[_loc35].a);
        } // end of for...in
        for (var _loc35 in _loc14)
        {
            _loc14[_loc35][0].broadcastMessage("onTweenEnd", {target: _loc14[_loc35][0], props: _loc14[_loc35][1]});
        } // end of for...in
        for (var _loc35 in _loc23)
        {
            _loc23[_loc35].f.apply(_loc23[_loc35].s, _loc23[_loc35].a);
        } // end of for...in
        if (_loc26)
        {
            this.cleanUp();
        } // end if
        now = getTimer();
    } // End of the function
    function cleanUp(noInit)
    {
        for (var _loc4 in tweens)
        {
            var _loc2 = tweens[_loc4].targ;
            if (tweens[_loc4].numProps <= 0 || _loc2.__zigoID__ == undefined)
            {
                if (_loc2 != undefined && _loc2.tween == undefined && noInit != true && _loc2._listeners.length <= 0)
                {
                    com.mosesSupposes.fuse.ZigoEngine.deinitializeTargets(_loc2);
                } // end if
                delete tweens[_loc4];
                --numTweens;
            } // end if
        } // end of for...in
        if (numTweens <= 0)
        {
            numTweens = 0;
            delete this.tweens;
            tweens = {};
            if (noInit != true)
            {
                com.mosesSupposes.fuse.ZigoEngine.__mgrRelay(this, "setup", [true]);
            } // end if
        } // end if
    } // End of the function
    function paramsObj(targs, props, endvals, retainFade)
    {
        var _loc6 = {};
        _loc6.all = String(targs).toUpperCase() == com.mosesSupposes.fuse.FuseKitCommon.ALL;
        _loc6.none = Boolean(targs == null);
        if (_loc6.all == true)
        {
            _loc6.tg = [null];
        }
        else
        {
            _loc6.tg = targs instanceof Array ? (targs) : ([targs]);
            for (var _loc11 in _loc6.tg)
            {
                var _loc7 = _loc6.tg[_loc11];
                if (_loc7 == null || !(typeof(_loc7) == "object" || typeof(_loc7) == "movieclip"))
                {
                    _loc6.tg.splice(Number(_loc11), 1);
                } // end if
            } // end of for...in
        } // end else if
        _loc6.allprops = props == null;
        var _loc1;
        var _loc4;
        var _loc3 = {};
        if (_loc6.allprops == false)
        {
            if (typeof(props) == "string" && (String(props).indexOf(" ") > -1 || String(props).indexOf(",") > -1))
            {
                props = String(props.split(" ").join("")).split(",");
            } // end if
            _loc1 = props instanceof Array ? (props.slice()) : ([props]);
            if (endvals != undefined)
            {
                if (typeof(endvals) == "string" && (String(endvals).indexOf(" ") > -1 || String(endvals).indexOf(",") > -1))
                {
                    endvals = String(endvals.split(" ").join("")).split(",");
                } // end if
                _loc4 = endvals instanceof Array ? (endvals.slice()) : ([endvals]);
                while (_loc4.length < _loc1.length)
                {
                    _loc4.push(_loc4[_loc4.length - 1]);
                } // end while
                _loc4.splice(_loc1.length, _loc4.length - _loc1.length);
            } // end if
            for (var _loc11 in _loc1)
            {
                var _loc2 = Number(_loc11);
                if (_loc1[_loc11] != "_scale" && _loc1[_loc11] != "_size")
                {
                    if (_loc3[_loc1[_loc11]] == undefined)
                    {
                        if (_loc1[_loc11] == "_fade" && retainFade != true)
                        {
                            _loc1[_loc11] = "_alpha";
                        } // end if
                        if (String(_loc1[_loc11]).toUpperCase() == com.mosesSupposes.fuse.FuseKitCommon.ALLCOLOR)
                        {
                            _loc1[_loc11] = com.mosesSupposes.fuse.FuseKitCommon.ALLCOLOR;
                        } // end if
                        _loc3[_loc1[_loc11]] = true;
                    }
                    else
                    {
                        _loc1.splice(_loc2, 1);
                        _loc4.splice(_loc2, 1);
                    } // end else if
                    continue;
                } // end if
                var _loc8 = String(_loc1.splice(_loc2, 1)[0]);
                var _loc5 = _loc4.splice(_loc2, 1)[0];
                if (_loc8 == "_scale")
                {
                    if (_loc3._xscale == undefined)
                    {
                        _loc1.splice(_loc2, 0, "_xscale");
                        _loc4.splice(_loc2, 0, _loc5);
                        _loc3._xscale = true;
                        ++_loc2;
                    } // end if
                    if (_loc3._yscale == undefined)
                    {
                        _loc1.splice(_loc2, 0, "_yscale");
                        _loc4.splice(_loc2, 0, _loc5);
                        _loc3._yscale = true;
                    } // end if
                } // end if
                if (_loc8 == "_size")
                {
                    if (_loc3._width == undefined)
                    {
                        _loc1.splice(_loc2, 0, "_width");
                        _loc4.splice(_loc2, 0, _loc5);
                        _loc3._width = true;
                        ++_loc2;
                    } // end if
                    if (_loc3._yscale == undefined)
                    {
                        _loc1.splice(_loc2, 0, "_height");
                        _loc4.splice(_loc2, 0, _loc5);
                        _loc3._height = true;
                    } // end if
                } // end if
            } // end of for...in
            for (var _loc11 in _loc1)
            {
                if (_loc1[_loc11] == "_xscale" && _loc3._width == true || _loc1[_loc11] == "_yscale" && _loc3._height == true)
                {
                    _loc1.splice(Number(_loc11), 1);
                    _loc4.splice(Number(_loc11), 1);
                    delete _loc3[_loc1[_loc11]];
                } // end if
            } // end of for...in
        } // end if
        _loc6.pa = _loc1;
        _loc6.va = _loc4;
        _loc6.props = _loc3;
        return (_loc6);
    } // End of the function
    function getChangeObj(ps, ep, isFMP, useArray)
    {
        var _loc3 = {map: useArray == true ? ([]) : ({}), changed: false};
        for (var _loc7 in ep)
        {
            if ((isFMP == true && _loc7.charAt(1) == "b" || ep[_loc7] != ps[_loc7] || useArray == true) && ep[_loc7] != null && _global.isNaN(Number(ep[_loc7])) == false)
            {
                _loc3.map[_loc7] = typeof(ep[_loc7]) == "string" ? (Number(ep[_loc7])) : (ep[_loc7] - ps[_loc7]);
                if (_global.isNaN(_loc3.map[_loc7]) == true)
                {
                    _loc3.map[_loc7] = 0;
                    continue;
                } // end if
                if (_loc3.map[_loc7] != 0)
                {
                    _loc3.changed = true;
                } // end if
            } // end if
        } // end of for...in
        return (_loc3);
    } // End of the function
    var numTweens = 0;
} // End of Class
