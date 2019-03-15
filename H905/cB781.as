function FRdat()
{
    for (var _loc1 = 0; _loc1 < 2; ++_loc1)
    {
        logox[_loc1] = _xml.idMap.logo.childNodes[_loc1];
    } // end of for
    totSImg = _xml.idMap.bg.childNodes.length;
    for (var _loc1 = 0; _loc1 < totSImg; ++_loc1)
    {
        pic_arr[_loc1] = _xml.idMap.bg.childNodes[_loc1].firstChild.nodeValue;
    } // end of for
    mcolrox = _xml.idMap.bg.attributes.startclr;
    welC = _xml.idMap.welcome.childNodes[0];
    Contct = _xml.idMap.contact.childNodes[0];
    CopyR = _xml.idMap.copy.childNodes[0];
} // End of the function
stop ();
_global.$createTweenController = function ()
{
    var _loc3 = _root.createEmptyMovieClip("__tweenController__", 123432);
    _loc3.$_tweenPropList = new Array();
    _loc3.$_tTime = getTimer();
    _loc3.onEnterFrame = _global.$updateTweens;
};
ASSetPropFlags(_global, "$createTweenController", 1, 0);
_global.$removeTweenController = function ()
{
    delete _root.__tweenController__.$_tweenPropList;
    delete _root.__tweenController__.$_tTime;
    delete _root.__tweenController__.onEnterFrame;
    _root.__tweenController__.removeMovieClip();
};
ASSetPropFlags(_global, "$removeTweenController", 1, 0);
_global.$addTween = function (mtarget, prop, propDest, timeSeconds, animType, delay, callback, extra1, extra2, extras)
{
    if (timeSeconds == undefined)
    {
        timeSeconds = 0;
    } // end if
    if (animType == undefined || animType == "")
    {
        animType = "easeOutExpo";
    } // end if
    if (delay == undefined)
    {
        delay = 0;
    } // end if
    if (typeof(prop) == "string")
    {
        var _loc7 = [prop];
        var _loc11 = [mtarget[prop]];
        var _loc9 = [propDest];
    }
    else
    {
        _loc7 = [];
        _loc11 = [];
        _loc9 = [];
        for (var _loc32 in prop)
        {
            _loc11.push(mtarget[prop[_loc32]]);
        } // end of for...in
        for (var _loc32 in prop)
        {
            _loc7.push(prop[_loc32]);
        } // end of for...in
        for (var _loc32 in propDest)
        {
            _loc9.push(propDest[_loc32]);
        } // end of for...in
    } // end else if
    var _loc12 = false;
    if (_root.__tweenController__ == undefined)
    {
        _global.$createTweenController();
    } // end if
    var _loc4 = _root.__tweenController__.$_tweenPropList;
    var _loc8 = _root.__tweenController__.$_tTime;
    for (var _loc32 in _loc11)
    {
        if (_loc9[_loc32] != undefined && !mtarget.$_isTweenLocked)
        {
            if (mtarget.$_tweenCount > 0)
            {
                for (var _loc3 = 0; _loc3 < _loc4.length; ++_loc3)
                {
                    if (_loc4[_loc3]._targ == mtarget && _loc4[_loc3]._prop == _loc7[_loc32])
                    {
                        if (_loc8 + delay * 1000 < _loc4[_loc3]._timeDest)
                        {
                            _loc4.splice(_loc3, 1);
                            --_loc3;
                            --mtarget.$_tweenCount;
                        } // end if
                    } // end if
                } // end of for
            } // end if
            _loc4.push({_prop: _loc7[_loc32], _targ: mtarget, _propStart: undefined, _propDest: _loc9[_loc32], _timeStart: _loc8, _timeDest: _loc8 + timeSeconds * 1000, _animType: animType, _extra1: extra1, _extra2: extra2, _extras: extras, _delay: delay, _isPaused: false, _timePaused: 0, _callback: _loc12 ? (undefined) : (callback)});
            mtarget.$_tweenCount = mtarget.$_tweenCount > 0 ? (mtarget.$_tweenCount + 1) : (1);
            _loc12 = true;
        } // end if
    } // end of for...in
    ASSetPropFlags(mtarget, "$_tweenCount", 1, 0);
};
ASSetPropFlags(_global, "$addTween", 1, 0);
_global.$updateTweens = function ()
{
    var _loc8 = this.$_tTime = getTimer();
    for (var _loc6 = 0; _loc6 < this.$_tweenPropList.length; ++_loc6)
    {
        var _loc3 = this.$_tweenPropList[_loc6];
        if (_loc3._targ.toString() == undefined)
        {
            this.$_tweenPropList.splice(_loc6, 1);
            --_loc6;
            continue;
        } // end if
        if (_loc3._timeStart + _loc3._delay * 1000 <= _loc8 && !_loc3._isPaused)
        {
            if (_loc3._propStart == undefined)
            {
                if (_loc3._prop.substr(0, 10) == "__special_")
                {
                    if (_loc3._prop == "__special_mc_frame__")
                    {
                        _loc3._propStart = _loc3._targ._currentframe;
                    }
                    else if (_loc3._prop == "__special_mc_ra__")
                    {
                        _loc3._propStart = new Color(_loc3._targ).getTransform().ra;
                    }
                    else if (_loc3._prop == "__special_mc_rb__")
                    {
                        _loc3._propStart = new Color(_loc3._targ).getTransform().rb;
                    }
                    else if (_loc3._prop == "__special_mc_ga__")
                    {
                        _loc3._propStart = new Color(_loc3._targ).getTransform().ga;
                    }
                    else if (_loc3._prop == "__special_mc_gb__")
                    {
                        _loc3._propStart = new Color(_loc3._targ).getTransform().gb;
                    }
                    else if (_loc3._prop == "__special_mc_ba__")
                    {
                        _loc3._propStart = new Color(_loc3._targ).getTransform().ba;
                    }
                    else if (_loc3._prop == "__special_mc_bb__")
                    {
                        _loc3._propStart = new Color(_loc3._targ).getTransform().bb;
                    }
                    else if (_loc3._prop == "__special_mc_aa__")
                    {
                        _loc3._propStart = new Color(_loc3._targ).getTransform().aa;
                    }
                    else if (_loc3._prop == "__special_mc_ab__")
                    {
                        _loc3._propStart = new Color(_loc3._targ).getTransform().ab;
                    }
                    else if (_loc3._prop == "__special_text_r__")
                    {
                        _loc3._propStart = _loc3._targ.textColor >> 16;
                    }
                    else if (_loc3._prop == "__special_text_g__")
                    {
                        _loc3._propStart = (_loc3._targ.textColor & 65280) >> 8;
                    }
                    else if (_loc3._prop == "__special_text_b__")
                    {
                        _loc3._propStart = _loc3._targ.textColor & 255;
                    }
                    else if (_loc3._prop == "__special_sound_volume__")
                    {
                        _loc3._propStart = _loc3._targ.getVolume();
                    }
                    else if (_loc3._prop == "__special_sound_pan__")
                    {
                        _loc3._propStart = _loc3._targ.getPan();
                    }
                    else if (_loc3._prop == "__special_bst_t__")
                    {
                        _loc3._propStart = 0;
                        _loc3._extras.__special_bst_ix__ = _loc3._targ._x;
                        _loc3._extras.__special_bst_iy__ = _loc3._targ._y;
                    }
                    else if (_loc3._prop == "__special_blur_x__")
                    {
                        for (var _loc5 = 0; _loc5 < _loc3._targ.filters.length; ++_loc5)
                        {
                            if (_loc3._targ.filters[_loc5] instanceof flash.filters.BlurFilter)
                            {
                                _loc3._propStart = _loc3._targ.filters[_loc5].blurX;
                            } // end if
                        } // end of for
                        if (_loc3._propStart == undefined)
                        {
                            _loc3._propStart = 0;
                        } // end if
                    }
                    else if (_loc3._prop == "__special_blur_y__")
                    {
                        for (var _loc5 = 0; _loc5 < _loc3._targ.filters.length; ++_loc5)
                        {
                            if (_loc3._targ.filters[_loc5] instanceof flash.filters.BlurFilter)
                            {
                                _loc3._propStart = _loc3._targ.filters[_loc5].blurY;
                            } // end if
                        } // end of for
                        if (_loc3._propStart == undefined)
                        {
                            _loc3._propStart = 0;
                        } // end if
                    }
                    else if (_loc3._prop == "__special_glow_color__")
                    {
                        for (var _loc5 = 0; _loc5 < _loc3._targ.filters.length; ++_loc5)
                        {
                            if (_loc3._targ.filters[_loc5] instanceof flash.filters.GlowFilter)
                            {
                                _loc3._propStart = _loc3._targ.filters[_loc5].color;
                            } // end if
                        } // end of for
                        if (_loc3._propStart == undefined)
                        {
                            _loc3._propStart = 16777215;
                        } // end if
                    }
                    else if (_loc3._prop == "__special_glow_alpha__")
                    {
                        for (var _loc5 = 0; _loc5 < _loc3._targ.filters.length; ++_loc5)
                        {
                            if (_loc3._targ.filters[_loc5] instanceof flash.filters.GlowFilter)
                            {
                                _loc3._propStart = _loc3._targ.filters[_loc5].alpha;
                            } // end if
                        } // end of for
                        if (_loc3._propStart == undefined)
                        {
                            _loc3._propStart = 1;
                        } // end if
                    }
                    else if (_loc3._prop == "__special_glow_blurX__")
                    {
                        for (var _loc5 = 0; _loc5 < _loc3._targ.filters.length; ++_loc5)
                        {
                            if (_loc3._targ.filters[_loc5] instanceof flash.filters.GlowFilter)
                            {
                                _loc3._propStart = _loc3._targ.filters[_loc5].blurX;
                            } // end if
                        } // end of for
                        if (_loc3._propStart == undefined)
                        {
                            _loc3._propStart = 0;
                        } // end if
                    }
                    else if (_loc3._prop == "__special_glow_blurY__")
                    {
                        for (var _loc5 = 0; _loc5 < _loc3._targ.filters.length; ++_loc5)
                        {
                            if (_loc3._targ.filters[_loc5] instanceof flash.filters.GlowFilter)
                            {
                                _loc3._propStart = _loc3._targ.filters[_loc5].blurY;
                            } // end if
                        } // end of for
                        if (_loc3._propStart == undefined)
                        {
                            _loc3._propStart = 0;
                        } // end if
                    }
                    else if (_loc3._prop == "__special_glow_strength__")
                    {
                        for (var _loc5 = 0; _loc5 < _loc3._targ.filters.length; ++_loc5)
                        {
                            if (_loc3._targ.filters[_loc5] instanceof flash.filters.GlowFilter)
                            {
                                _loc3._propStart = _loc3._targ.filters[_loc5].strength;
                            } // end if
                        } // end of for
                        if (_loc3._propStart == undefined)
                        {
                            _loc3._propStart = 1;
                        } // end if
                    }
                    else if (_loc3._prop == "__special_bevel_distance__")
                    {
                        for (var _loc5 = 0; _loc5 < _loc3._targ.filters.length; ++_loc5)
                        {
                            if (_loc3._targ.filters[_loc5] instanceof flash.filters.BevelFilter)
                            {
                                _loc3._propStart = _loc3._targ.filters[_loc5].distance;
                            } // end if
                        } // end of for
                        if (_loc3._propStart == undefined)
                        {
                            _loc3._propStart = 0;
                        } // end if
                    }
                    else if (_loc3._prop == "__special_bevel_angle__")
                    {
                        for (var _loc5 = 0; _loc5 < _loc3._targ.filters.length; ++_loc5)
                        {
                            if (_loc3._targ.filters[_loc5] instanceof flash.filters.BevelFilter)
                            {
                                _loc3._propStart = _loc3._targ.filters[_loc5].angle;
                            } // end if
                        } // end of for
                        if (_loc3._propStart == undefined)
                        {
                            _loc3._propStart = 45;
                        } // end if
                    }
                    else if (_loc3._prop == "__special_bevel_highlightColor__")
                    {
                        for (var _loc5 = 0; _loc5 < _loc3._targ.filters.length; ++_loc5)
                        {
                            if (_loc3._targ.filters[_loc5] instanceof flash.filters.BevelFilter)
                            {
                                _loc3._propStart = _loc3._targ.filters[_loc5].highlightColor;
                            } // end if
                        } // end of for
                        if (_loc3._propStart == undefined)
                        {
                            _loc3._propStart = 16777215;
                        } // end if
                    }
                    else if (_loc3._prop == "__special_bevel_highlightAlpha__")
                    {
                        for (var _loc5 = 0; _loc5 < _loc3._targ.filters.length; ++_loc5)
                        {
                            if (_loc3._targ.filters[_loc5] instanceof flash.filters.BevelFilter)
                            {
                                _loc3._propStart = _loc3._targ.filters[_loc5].highlightAlpha;
                            } // end if
                        } // end of for
                        if (_loc3._propStart == undefined)
                        {
                            _loc3._propStart = 1;
                        } // end if
                    }
                    else if (_loc3._prop == "__special_bevel_shadowColor__")
                    {
                        for (var _loc5 = 0; _loc5 < _loc3._targ.filters.length; ++_loc5)
                        {
                            if (_loc3._targ.filters[_loc5] instanceof flash.filters.BevelFilter)
                            {
                                _loc3._propStart = _loc3._targ.filters[_loc5].shadowColor;
                            } // end if
                        } // end of for
                        if (_loc3._propStart == undefined)
                        {
                            _loc3._propStart = 0;
                        } // end if
                    }
                    else if (_loc3._prop == "__special_bevel_shadowAlpha__")
                    {
                        for (var _loc5 = 0; _loc5 < _loc3._targ.filters.length; ++_loc5)
                        {
                            if (_loc3._targ.filters[_loc5] instanceof flash.filters.BevelFilter)
                            {
                                _loc3._propStart = _loc3._targ.filters[_loc5].shadowAlpha;
                            } // end if
                        } // end of for
                        if (_loc3._propStart == undefined)
                        {
                            _loc3._propStart = 1;
                        } // end if
                    }
                    else if (_loc3._prop == "__special_bevel_blurX__")
                    {
                        for (var _loc5 = 0; _loc5 < _loc3._targ.filters.length; ++_loc5)
                        {
                            if (_loc3._targ.filters[_loc5] instanceof flash.filters.BevelFilter)
                            {
                                _loc3._propStart = _loc3._targ.filters[_loc5].blurX;
                            } // end if
                        } // end of for
                        if (_loc3._propStart == undefined)
                        {
                            _loc3._propStart = 0;
                        } // end if
                    }
                    else if (_loc3._prop == "__special_bevel_blurY__")
                    {
                        for (var _loc5 = 0; _loc5 < _loc3._targ.filters.length; ++_loc5)
                        {
                            if (_loc3._targ.filters[_loc5] instanceof flash.filters.BevelFilter)
                            {
                                _loc3._propStart = _loc3._targ.filters[_loc5].blurY;
                            } // end if
                        } // end of for
                        if (_loc3._propStart == undefined)
                        {
                            _loc3._propStart = 0;
                        } // end if
                    }
                    else if (_loc3._prop == "__special_bevel_strength__")
                    {
                        for (var _loc5 = 0; _loc5 < _loc3._targ.filters.length; ++_loc5)
                        {
                            if (_loc3._targ.filters[_loc5] instanceof flash.filters.BevelFilter)
                            {
                                _loc3._propStart = _loc3._targ.filters[_loc5].strength;
                            } // end if
                        } // end of for
                        if (_loc3._propStart == undefined)
                        {
                            _loc3._propStart = 1;
                        } // end if
                    }
                    else
                    {
                        _loc3._propStart = _loc3._targ[_loc3._prop];
                    } // end else if
                }
                else
                {
                    _loc3._propStart = _loc3._targ[_loc3._prop];
                } // end if
            } // end else if
            var _loc10 = _loc3._timeDest + _loc3._delay * 1000;
            if (_loc10 <= _loc8)
            {
                var _loc4 = _loc3._propDest;
            }
            else
            {
                _loc4 = _global.findTweenValue(_loc3._propStart, _loc3._propDest, _loc3._timeStart, _loc8 - _loc3._delay * 1000, _loc3._timeDest, _loc3._animType, _loc3._extra1, _loc3._extra2);
            } // end else if
            _loc3._targ[_loc3._prop] = _loc3._extras.mustRound ? (Math.round(_loc4)) : (_loc4);
            if (_loc3._prop == "__special_mc_frame__")
            {
                _loc3._targ.gotoAndStop(Math.round(_loc4));
            }
            else if (_loc3._prop == "__special_mc_ra__")
            {
                new Color(_loc3._targ).setTransform({ra: _loc4});
            }
            else if (_loc3._prop == "__special_mc_rb__")
            {
                new Color(_loc3._targ).setTransform({rb: _loc4});
            }
            else if (_loc3._prop == "__special_mc_ga__")
            {
                new Color(_loc3._targ).setTransform({ga: _loc4});
            }
            else if (_loc3._prop == "__special_mc_gb__")
            {
                new Color(_loc3._targ).setTransform({gb: _loc4});
            }
            else if (_loc3._prop == "__special_mc_ba__")
            {
                new Color(_loc3._targ).setTransform({ba: _loc4});
            }
            else if (_loc3._prop == "__special_mc_bb__")
            {
                new Color(_loc3._targ).setTransform({bb: _loc4});
            }
            else if (_loc3._prop == "__special_mc_aa__")
            {
                new Color(_loc3._targ).setTransform({aa: _loc4});
            }
            else if (_loc3._prop == "__special_mc_ab__")
            {
                new Color(_loc3._targ).setTransform({ab: _loc4});
            } // end else if
            if (_loc3._prop == "__special_bst_t__")
            {
                var _loc7 = _loc3._extras;
                var _loc9 = _global.findPointOnCurve(_loc7.__special_bst_ix__, _loc7.__special_bst_iy__, _loc7.__special_bst_cx__, _loc7.__special_bst_cy__, _loc7.__special_bst_dx__, _loc7.__special_bst_dy__, _loc4);
                if (_loc3._extras.mustRound)
                {
                    _loc3._targ._x = Math.round(_loc9.x);
                    _loc3._targ._y = Math.round(_loc9.y);
                }
                else
                {
                    _loc3._targ._x = _loc9.x;
                    _loc3._targ._y = _loc9.y;
                } // end if
            } // end else if
            if (typeof(_loc3._targ) != "movieclip" && _loc3._prop == "__special_text_b__")
            {
                _loc3._targ.textColor = (_loc3._targ.__special_text_r__ << 16) + (_loc3._targ.__special_text_g__ << 8) + _loc3._targ.__special_text_b__;
            } // end if
            if (_loc3._prop == "__special_sound_volume__")
            {
                _loc3._targ.setVolume(_loc4);
            } // end if
            if (_loc3._prop == "__special_sound_pan__")
            {
                _loc3._targ.setPan(_loc4);
            } // end if
            if (_loc3._prop == "__special_blur_x__")
            {
                _global.$setFilterProperty(_loc3._targ, "blur_blurX", _loc4, _loc3._extras);
            } // end if
            if (_loc3._prop == "__special_blur_y__")
            {
                _global.$setFilterProperty(_loc3._targ, "blur_blurY", _loc4, _loc3._extras);
            } // end if
            if (_loc3._prop == "__special_glow_color__")
            {
                _global.$setFilterProperty(_loc3._targ, "glow_color", _global.findTweenColor(_loc3, _loc8), _loc3._extras);
            } // end if
            if (_loc3._prop == "__special_glow_alpha__")
            {
                _global.$setFilterProperty(_loc3._targ, "glow_alpha", _loc4, _loc3._extras);
            } // end if
            if (_loc3._prop == "__special_glow_blurX__")
            {
                _global.$setFilterProperty(_loc3._targ, "glow_blurX", _loc4, _loc3._extras);
            } // end if
            if (_loc3._prop == "__special_glow_blurY__")
            {
                _global.$setFilterProperty(_loc3._targ, "glow_blurY", _loc4, _loc3._extras);
            } // end if
            if (_loc3._prop == "__special_glow_strength__")
            {
                _global.$setFilterProperty(_loc3._targ, "glow_strength", _loc4, _loc3._extras);
            } // end if
            if (_loc3._prop == "__special_bevel_distance__")
            {
                _global.$setFilterProperty(_loc3._targ, "bevel_distance", _loc4, _loc3._extras);
            } // end if
            if (_loc3._prop == "__special_bevel_angle__")
            {
                _global.$setFilterProperty(_loc3._targ, "bevel_angle", _loc4, _loc3._extras);
            } // end if
            if (_loc3._prop == "__special_bevel_highlightColor__")
            {
                _global.$setFilterProperty(_loc3._targ, "bevel_highlightColor", _global.findTweenColor(_loc3, _loc8), _loc3._extras);
            } // end if
            if (_loc3._prop == "__special_bevel_highlightAlpha__")
            {
                _global.$setFilterProperty(_loc3._targ, "bevel_highlightAlpha", _loc4, _loc3._extras);
            } // end if
            if (_loc3._prop == "__special_bevel_shadowColor__")
            {
                _global.$setFilterProperty(_loc3._targ, "bevel_shadowColor", _global.findTweenColor(_loc3, _loc8), _loc3._extras);
            } // end if
            if (_loc3._prop == "__special_bevel_shadowAlpha__")
            {
                _global.$setFilterProperty(_loc3._targ, "bevel_shadowAlpha", _loc4, _loc3._extras);
            } // end if
            if (_loc3._prop == "__special_bevel_blurX__")
            {
                _global.$setFilterProperty(_loc3._targ, "bevel_blurX", _loc4, _loc3._extras);
            } // end if
            if (_loc3._prop == "__special_bevel_blurY__")
            {
                _global.$setFilterProperty(_loc3._targ, "bevel_blurY", _loc4, _loc3._extras);
            } // end if
            if (_loc3._prop == "__special_bevel_strength__")
            {
                _global.$setFilterProperty(_loc3._targ, "bevel_strength", _loc4, _loc3._extras);
            } // end if
            if (_loc3._targ.onTweenUpdate != undefined)
            {
                _loc3._targ.onTweenUpdate(_loc3._prop);
            } // end if
            if (_loc10 <= _loc8)
            {
                if (_loc3._targ.onTweenComplete != undefined)
                {
                    _loc3._targ.onTweenComplete(_loc3._prop);
                } // end if
                _global.$stopTween(_loc3._targ, [_loc3._prop], false);
                --_loc6;
                if (_loc3._callback != undefined)
                {
                    if (_global.backwardCallbackTweening)
                    {
                        var _loc11 = _loc3._targ.createEmptyMovieClip("__child__", 122344);
                        _loc3._callback.apply(_loc11, null);
                        _loc11.removeMovieClip();
                        continue;
                    } // end if
                    _loc3._callback.apply(_loc3._targ, null);
                } // end if
            } // end if
        } // end if
    } // end of for
    if (this.$_tweenPropList.length == 0)
    {
        _global.$removeTweenController();
    } // end if
};
ASSetPropFlags(_global, "$updateTween", 1, 0);
_global.$stopTween = function (mtarget, props, wipeFuture)
{
    var _loc4 = _root.__tweenController__.$_tweenPropList;
    var _loc7;
    for (var _loc9 in _loc4)
    {
        _loc7 = _loc4[_loc9]._prop;
        for (var _loc5 = 0; _loc5 < props.length || _loc5 < 1 && props == undefined; ++_loc5)
        {
            if (_loc4[_loc9]._targ == mtarget && (_loc7 == props[_loc5] || props == undefined) && (wipeFuture || _loc4[_loc9]._timeDest + _loc4[_loc9]._delay * 1000 <= getTimer()))
            {
                switch (_loc7)
                {
                    case "__special_mc_frame__":
                    case "__special_mc_ra__":
                    case "__special_mc_rb__":
                    case "__special_mc_ga__":
                    case "__special_mc_gb__":
                    case "__special_mc_ba__":
                    case "__special_mc_bb__":
                    case "__special_mc_aa__":
                    case "__special_mc_ab__":
                    case "__special_sound_volume__":
                    case "__special_bst_t__":
                    {
                        delete mtarget[_loc7];
                        break;
                    } 
                    case "__special_text_b__":
                    {
                        delete mtarget.__special_text_r__;
                        delete mtarget.__special_text_g__;
                        delete mtarget.__special_text_b__;
                        break;
                    } 
                } // End of switch
                _loc4.splice(_loc9, 1);
            } // end if
        } // end of for
    } // end of for...in
    if (props == undefined)
    {
        delete mtarget.$_tweenCount;
    }
    else
    {
        mtarget.$_tweenCount = 0;
        for (var _loc9 in _loc4)
        {
            if (_loc4[_loc9]._targ == mtarget)
            {
                ++mtarget.$_tweenCount;
            } // end if
        } // end of for...in
        if (mtarget.$_tweenCount == 0)
        {
            delete mtarget.$_tweenCount;
        } // end if
    } // end else if
    if (_loc4.length == 0)
    {
        _global.$removeTweenController();
    } // end if
};
ASSetPropFlags(_global, "$stopTween", 1, 0);
_global.$setFilterProperty = function (mtarget, propName, propValue, extras)
{
    var _loc1;
    var _loc7 = false;
    var _loc3 = [];
    for (var _loc1 = 0; _loc1 < mtarget.filters.length; ++_loc1)
    {
        _loc3.push(mtarget.filters[_loc1]);
    } // end of for
    if (propName.substr(0, 5) == "blur_")
    {
        for (var _loc1 = 0; _loc1 < mtarget.filters.length; ++_loc1)
        {
            if (_loc3[_loc1] instanceof flash.filters.BlurFilter)
            {
                _loc3[_loc1][propName.substr(5)] = propValue;
                if (extras.__special_blur_quality__ != undefined)
                {
                    _loc3[_loc1].quality = extras.__special_blur_quality__;
                } // end if
                _loc7 = true;
                break;
            } // end if
        } // end of for
        if (!_loc7)
        {
            var _loc9;
            var _loc8 = extras.__special_blur_quality__ == undefined ? (2) : (extras.__special_blur_quality__);
            if (propName == "blur_blurX")
            {
                _loc9 = new flash.filters.BlurFilter(propValue, 0, _loc8);
            } // end if
            if (propName == "blur_blurY")
            {
                _loc9 = new flash.filters.BlurFilter(0, propValue, _loc8);
            } // end if
            _loc3.push(_loc9);
        } // end if
    }
    else if (propName.substr(0, 5) == "glow_")
    {
        for (var _loc1 = 0; _loc1 < mtarget.filters.length; ++_loc1)
        {
            if (_loc3[_loc1] instanceof flash.filters.GlowFilter)
            {
                _loc3[_loc1][propName.substr(5)] = propValue;
                if (extras.__special_glow_quality__ != undefined)
                {
                    _loc3[_loc1].quality = extras.__special_glow_quality__;
                } // end if
                if (extras.__special_glow_inner__ != undefined)
                {
                    _loc3[_loc1].inner = extras.__special_glow_inner__;
                } // end if
                if (extras.__special_glow_knockout__ != undefined)
                {
                    _loc3[_loc1].knockout = extras.__special_glow_knockout__;
                } // end if
                _loc7 = true;
                break;
            } // end if
        } // end of for
        if (!_loc7)
        {
            _loc8 = extras.__special_glow_quality__ == undefined ? (2) : (extras.__special_glow_quality__);
            var _loc12 = extras.__special_glow_inner__ == undefined ? (false) : (extras.__special_glow_inner__);
            var _loc10 = extras.__special_glow_knockout__ == undefined ? (false) : (extras.__special_glow_knockout__);
            if (propName == "glow_color")
            {
                _loc9 = new flash.filters.GlowFilter(propValue, 1, 0, 0, 1, _loc8, _loc12, _loc10);
            } // end if
            if (propName == "glow_alpha")
            {
                _loc9 = new flash.filters.GlowFilter(16777215, propValue, 0, 0, 1, _loc8, _loc12, _loc10);
            } // end if
            if (propName == "glow_blurX")
            {
                _loc9 = new flash.filters.GlowFilter(16777215, 1, propValue, 0, 1, _loc8, _loc12, _loc10);
            } // end if
            if (propName == "glow_blurY")
            {
                _loc9 = new flash.filters.GlowFilter(16777215, 1, 0, propValue, 1, _loc8, _loc12, _loc10);
            } // end if
            if (propName == "glow_strength")
            {
                _loc9 = new flash.filters.GlowFilter(16777215, 1, 0, 0, propValue, _loc8, _loc12, _loc10);
            } // end if
            _loc3.push(_loc9);
        } // end if
    }
    else if (propName.substr(0, 6) == "bevel_")
    {
        for (var _loc1 = 0; _loc1 < mtarget.filters.length; ++_loc1)
        {
            if (_loc3[_loc1] instanceof flash.filters.BevelFilter)
            {
                _loc3[_loc1][propName.substr(6)] = propValue;
                if (extras.__special_bevel_quality__ != undefined)
                {
                    _loc3[_loc1].quality = extras.__special_bevel_quality__;
                } // end if
                if (extras.__special_bevel_type__ != undefined)
                {
                    _loc3[_loc1].inner = extras.__special_bevel_type__;
                } // end if
                if (extras.__special_bevel_knockout__ != undefined)
                {
                    _loc3[_loc1].knockout = extras.__special_bevel_knockout__;
                } // end if
                _loc7 = true;
                break;
            } // end if
        } // end of for
        if (!_loc7)
        {
            _loc8 = extras.__special_bevel_quality__ == undefined ? (2) : (extras.__special_bevel_quality__);
            var _loc11 = extras.__special_bevel_type__ == undefined ? ("inner") : (extras.__special_bevel_type__);
            _loc10 = extras.__special_bevel_knockout__ == undefined ? (false) : (extras.__special_bevel_knockout__);
            if (propName == "bevel_distance")
            {
                _loc9 = new flash.filters.BevelFilter(propValue, 45, 16777215, 1, 0, 1, 0, 0, 1, _loc8, _loc11, _loc10);
            } // end if
            if (propName == "bevel_angle")
            {
                _loc9 = new flash.filters.BevelFilter(0, propValue, 16777215, 1, 0, 1, 0, 0, 1, _loc8, _loc11, _loc10);
            } // end if
            if (propName == "bevel_highlightColor")
            {
                _loc9 = new flash.filters.BevelFilter(0, 45, propValue, 1, 0, 1, 0, 0, 1, _loc8, _loc11, _loc10);
            } // end if
            if (propName == "bevel_highlightAlpha")
            {
                _loc9 = new flash.filters.BevelFilter(0, 45, 16777215, propValue, 0, 1, 0, 0, 1, _loc8, _loc11, _loc10);
            } // end if
            if (propName == "bevel_shadowColor")
            {
                _loc9 = new flash.filters.BevelFilter(0, 45, 16777215, 1, propValue, 1, 0, 0, 1, _loc8, _loc11, _loc10);
            } // end if
            if (propName == "bevel_shadowAlpha")
            {
                _loc9 = new flash.filters.BevelFilter(0, 45, 16777215, 1, 0, propValue, 0, 0, 1, _loc8, _loc11, _loc10);
            } // end if
            if (propName == "bevel_blurX")
            {
                _loc9 = new flash.filters.BevelFilter(0, 45, 16777215, 1, 0, 1, propValue, 0, 1, _loc8, _loc11, _loc10);
            } // end if
            if (propName == "bevel_blurY")
            {
                _loc9 = new flash.filters.BevelFilter(0, 45, 16777215, 1, 0, 1, 0, propValue, 1, _loc8, _loc11, _loc10);
            } // end if
            if (propName == "bevel_strength")
            {
                _loc9 = new flash.filters.BevelFilter(0, 45, 16777215, 1, 0, 1, 0, 0, propValue, _loc8, _loc11, _loc10);
            } // end if
            _loc3.push(_loc9);
        } // end if
    }
    else
    {
        return;
    } // end else if
    mtarget.filters = _loc3;
};
MovieClip.prototype.tween = TextField.prototype.tween = Sound.prototype.tween = function (prop, propDest, timeSeconds, animType, delay, callback, extra1, extra2)
{
    _global.$addTween(this, prop, propDest, timeSeconds, animType, delay, callback, extra1, extra2);
};
ASSetPropFlags(MovieClip.prototype, "tween", 1, 0);
ASSetPropFlags(TextField.prototype, "tween", 1, 0);
ASSetPropFlags(Sound.prototype, "tween", 1, 0);
MovieClip.prototype.roundedTween = TextField.prototype.roundedTween = Sound.prototype.roundedTween = function (prop, propDest, timeSeconds, animType, delay, callback, extra1, extra2)
{
    _global.$addTween(this, prop, propDest, timeSeconds, animType, delay, callback, extra1, extra2, {mustRound: true});
};
ASSetPropFlags(MovieClip.prototype, "roundedTween", 1, 0);
ASSetPropFlags(TextField.prototype, "roundedTween", 1, 0);
ASSetPropFlags(Sound.prototype, "roundedTween", 1, 0);
MovieClip.prototype.stopTween = TextField.prototype.stopTween = Sound.prototype.stopTween = function (props)
{
    if (typeof(props) == "string")
    {
        props = [props];
    } // end if
    if (props != undefined)
    {
        for (var _loc4 = 1; _loc4 < arguments.length; ++_loc4)
        {
            props.push(arguments[_loc4]);
        } // end of for
    } // end if
    _global.$stopTween(this, props, true);
};
ASSetPropFlags(MovieClip.prototype, "stopTween", 1, 0);
ASSetPropFlags(TextField.prototype, "stopTween", 1, 0);
ASSetPropFlags(Sound.prototype, "stopTween", 1, 0);
MovieClip.prototype.pauseTween = TextField.prototype.pauseTween = Sound.prototype.pauseTween = function (props)
{
    if (props != undefined)
    {
        if (typeof(props) == "string")
        {
            props = [props];
        } // end if
        for (var _loc6 = 1; _loc6 < Arguments.length; ++_loc6)
        {
            props.push(Arguments[_loc6]);
        } // end of for
    } // end if
    var _loc4 = _root.__tweenController__.$_tweenPropList;
    var _loc5;
    for (var _loc7 in _loc4)
    {
        if (_loc4[_loc7]._targ == this && !_loc4[_loc7]._isPaused)
        {
            if (props != undefined)
            {
                _loc5 = false;
                for (var _loc6 in props)
                {
                    if (props[_loc6] == _loc4[_loc7]._prop)
                    {
                        _loc5 = true;
                        break;
                    } // end if
                } // end of for...in
            } // end if
            if (props == undefined || _loc5)
            {
                _loc4[_loc7]._isPaused = true;
                _loc4[_loc7]._timePaused = _root.__tweenController__.$_tTime;
            } // end if
        } // end if
    } // end of for...in
};
ASSetPropFlags(MovieClip.prototype, "pauseTween", 1, 0);
ASSetPropFlags(TextField.prototype, "pauseTween", 1, 0);
ASSetPropFlags(Sound.prototype, "pauseTween", 1, 0);
MovieClip.prototype.resumeTween = TextField.prototype.resumeTween = Sound.prototype.resumeTween = function (props)
{
    if (props != undefined)
    {
        if (typeof(props) == "string")
        {
            props = [props];
        } // end if
        for (var _loc7 = 1; _loc7 < Arguments.length; ++_loc7)
        {
            props.push(Arguments[_loc7]);
        } // end of for
    } // end if
    var _loc3 = _root.__tweenController__.$_tweenPropList;
    var _loc5;
    var _loc6;
    for (var _loc8 in _loc3)
    {
        if (_loc3[_loc8]._targ == this && _loc3[_loc8]._isPaused)
        {
            if (props != undefined)
            {
                _loc5 = false;
                for (var _loc7 in props)
                {
                    if (props[_loc7] == _loc3[_loc8]._prop)
                    {
                        _loc5 = true;
                        break;
                    } // end if
                } // end of for...in
            } // end if
            if (props == undefined || _loc5)
            {
                _loc3[_loc8]._isPaused = false;
                _loc6 = _root.__tweenController__.$_tTime - _loc3[_loc8]._timePaused;
                _loc3[_loc8]._timeStart = _loc3[_loc8]._timeStart + _loc6;
                _loc3[_loc8]._timeDest = _loc3[_loc8]._timeDest + _loc6;
                _loc3[_loc8]._timePaused = 0;
            } // end if
        } // end if
    } // end of for...in
};
ASSetPropFlags(MovieClip.prototype, "resumeTween", 1, 0);
ASSetPropFlags(TextField.prototype, "resumeTween", 1, 0);
ASSetPropFlags(Sound.prototype, "resumeTween", 1, 0);
MovieClip.prototype.lockTween = TextField.prototype.lockTween = Sound.prototype.lockTween = function ()
{
    this.$_isTweenLocked = true;
    ASSetPropFlags(this, "this.$_isTweenLocked", 1, 0);
};
ASSetPropFlags(MovieClip.prototype, "lockTween", 1, 0);
ASSetPropFlags(TextField.prototype, "lockTween", 1, 0);
ASSetPropFlags(Sound.prototype, "lockTween", 1, 0);
MovieClip.prototype.unlockTween = TextField.prototype.unlockTween = Sound.prototype.unlockTween = function ()
{
    delete this.$_isTweenLocked;
};
ASSetPropFlags(MovieClip.prototype, "unlockTween", 1, 0);
ASSetPropFlags(TextField.prototype, "unlockTween", 1, 0);
ASSetPropFlags(Sound.prototype, "unlockTween", 1, 0);
MovieClip.prototype.getTweens = TextField.prototype.getTweens = Sound.prototype.getTweens = function ()
{
    return (this.$_tweenCount);
};
ASSetPropFlags(MovieClip.prototype, "getTweens", 1, 0);
ASSetPropFlags(TextField.prototype, "getTweens", 1, 0);
ASSetPropFlags(Sound.prototype, "getTweens", 1, 0);
MovieClip.prototype.isTweening = TextField.prototype.isTweening = Sound.prototype.isTweening = function ()
{
    return (this.$_tweenCount > 0 ? (true) : (false));
};
ASSetPropFlags(MovieClip.prototype, "isTweening", 1, 0);
ASSetPropFlags(TextField.prototype, "isTweening", 1, 0);
ASSetPropFlags(Sound.prototype, "isTweening", 1, 0);
MovieClip.prototype.alphaTo = TextField.prototype.alphaTo = function (propDest_a, timeSeconds, animType, delay, callback, extra1, extra2)
{
    _global.$addTween(this, "_alpha", propDest_a, timeSeconds, animType, delay, callback, extra1, extra2);
};
ASSetPropFlags(MovieClip.prototype, "alphaTo", 1, 0);
ASSetPropFlags(TextField.prototype, "alphaTo", 1, 0);
MovieClip.prototype.frameTo = function (propDest_frame, timeSeconds, animType, delay, callback, extra1, extra2)
{
    _global.$addTween(this, "__special_mc_frame__", propDest_frame, timeSeconds, animType, delay, callback, extra1, extra2);
};
ASSetPropFlags(MovieClip.prototype, "frameTo", 1, 0);
MovieClip.prototype.resizeTo = TextField.prototype.resizeTo = function (propDest_width, propDest_height, timeSeconds, animType, delay, callback, extra1, extra2)
{
    _global.$addTween(this, ["_width", "_height"], [propDest_width, propDest_height], timeSeconds, animType, delay, callback, extra1, extra2);
};
ASSetPropFlags(MovieClip.prototype, "resizeTo", 1, 0);
ASSetPropFlags(TextField.prototype, "resizeTo", 1, 0);
MovieClip.prototype.rotateTo = TextField.prototype.rotateTo = function (propDest_rotation, timeSeconds, animType, delay, callback, extra1, extra2)
{
    _global.$addTween(this, "_rotation", propDest_rotation, timeSeconds, animType, delay, callback, extra1, extra2);
};
ASSetPropFlags(MovieClip.prototype, "rotateTo", 1, 0);
ASSetPropFlags(TextField.prototype, "rotateTo", 1, 0);
MovieClip.prototype.scaleTo = TextField.prototype.scaleTo = function (propDest_scale, timeSeconds, animType, delay, callback, extra1, extra2)
{
    _global.$addTween(this, ["_xscale", "_yscale"], [propDest_scale, propDest_scale], timeSeconds, animType, delay, callback, extra1, extra2);
};
ASSetPropFlags(MovieClip.prototype, "scaleTo", 1, 0);
ASSetPropFlags(TextField.prototype, "scaleTo", 1, 0);
MovieClip.prototype.xScaleTo = TextField.prototype.xScaleTo = function (propDest_scale, timeSeconds, animType, delay, callback, extra1, extra2)
{
    _global.$addTween(this, "_xscale", propDest_scale, timeSeconds, animType, delay, callback, extra1, extra2);
};
ASSetPropFlags(MovieClip.prototype, "xScaleTo", 1, 0);
ASSetPropFlags(TextField.prototype, "xScaleTo", 1, 0);
MovieClip.prototype.yScaleTo = TextField.prototype.yScaleTo = function (propDest_scale, timeSeconds, animType, delay, callback, extra1, extra2)
{
    _global.$addTween(this, "_yscale", propDest_scale, timeSeconds, animType, delay, callback, extra1, extra2);
};
ASSetPropFlags(MovieClip.prototype, "yScaleTo", 1, 0);
ASSetPropFlags(TextField.prototype, "yScaleTo", 1, 0);
TextField.prototype.scrollTo = function (propDest_scroll, timeSeconds, animType, delay, callback, extra1, extra2)
{
    _global.$addTween(this, "scroll", propDest_scroll, timeSeconds, animType, delay, callback, extra1, extra2);
};
ASSetPropFlags(TextField.prototype, "scrollTo", 1, 0);
MovieClip.prototype.slideTo = TextField.prototype.slideTo = function (propDest_x, propDest_y, timeSeconds, animType, delay, callback, extra1, extra2)
{
    _global.$addTween(this, ["_x", "_y"], [propDest_x, propDest_y], timeSeconds, animType, delay, callback, extra1, extra2);
};
ASSetPropFlags(MovieClip.prototype, "slideTo", 1, 0);
ASSetPropFlags(TextField.prototype, "slideTo", 1, 0);
MovieClip.prototype.roundedSlideTo = TextField.prototype.roundedSlideTo = function (propDest_x, propDest_y, timeSeconds, animType, delay, callback, extra1, extra2)
{
    _global.$addTween(this, ["_x", "_y"], [propDest_x, propDest_y], timeSeconds, animType, delay, callback, extra1, extra2, {mustRound: true});
};
ASSetPropFlags(MovieClip.prototype, "roundedSlideTo", 1, 0);
ASSetPropFlags(TextField.prototype, "roundedSlideTo", 1, 0);
MovieClip.prototype.xSlideTo = TextField.prototype.xSlideTo = function (propDest_x, timeSeconds, animType, delay, callback, extra1, extra2)
{
    _global.$addTween(this, "_x", propDest_x, timeSeconds, animType, delay, callback, extra1, extra2);
};
ASSetPropFlags(MovieClip.prototype, "xSlideTo", 1, 0);
ASSetPropFlags(TextField.prototype, "xSlideTo", 1, 0);
MovieClip.prototype.roundedXSlideTo = TextField.prototype.roundedXSlideTo = function (propDest_x, timeSeconds, animType, delay, callback, extra1, extra2)
{
    _global.$addTween(this, "_x", propDest_x, timeSeconds, animType, delay, callback, extra1, extra2, {mustRound: true});
};
ASSetPropFlags(MovieClip.prototype, "roundedXSlideTo", 1, 0);
ASSetPropFlags(TextField.prototype, "roundedXSlideTo", 1, 0);
MovieClip.prototype.ySlideTo = TextField.prototype.ySlideTo = function (propDest_y, timeSeconds, animType, delay, callback, extra1, extra2)
{
    _global.$addTween(this, "_y", propDest_y, timeSeconds, animType, delay, callback, extra1, extra2);
};
ASSetPropFlags(MovieClip.prototype, "ySlideTo", 1, 0);
ASSetPropFlags(TextField.prototype, "ySlideTo", 1, 0);
MovieClip.prototype.roundedYSlideTo = TextField.prototype.roundedYSlideTo = function (propDest_y, timeSeconds, animType, delay, callback, extra1, extra2)
{
    _global.$addTween(this, "_y", propDest_y, timeSeconds, animType, delay, callback, extra1, extra2, {mustRound: true});
};
ASSetPropFlags(MovieClip.prototype, "roundedYSlideTo", 1, 0);
ASSetPropFlags(TextField.prototype, "roundedYSlideTo", 1, 0);
MovieClip.prototype.bezierSlideTo = TextField.prototype.bezierSlideTo = function (cpoint_x, cpoint_y, propDest_x, propDest_y, timeSeconds, animType, delay, callback, extra1, extra2)
{
    var _loc3 = new Object();
    _loc3.__special_bst_ix__ = undefined;
    _loc3.__special_bst_iy__ = undefined;
    _loc3.__special_bst_cx__ = cpoint_x;
    _loc3.__special_bst_cy__ = cpoint_y;
    _loc3.__special_bst_dx__ = propDest_x;
    _loc3.__special_bst_dy__ = propDest_y;
    _global.$addTween(this, "__special_bst_t__", 1, timeSeconds, animType, delay, callback, extra1, extra2, _loc3);
};
ASSetPropFlags(MovieClip.prototype, "bezierSlideTo", 1, 0);
ASSetPropFlags(TextField.prototype, "bezierSlideTo", 1, 0);
MovieClip.prototype.roundedBezierSlideTo = TextField.prototype.roundedBezierSlideTo = function (cpoint_x, cpoint_y, propDest_x, propDest_y, timeSeconds, animType, delay, callback, extra1, extra2)
{
    var _loc3 = new Object();
    _loc3.__special_bst_ix__ = undefined;
    _loc3.__special_bst_iy__ = undefined;
    _loc3.__special_bst_cx__ = cpoint_x;
    _loc3.__special_bst_cy__ = cpoint_y;
    _loc3.__special_bst_dx__ = propDest_x;
    _loc3.__special_bst_dy__ = propDest_y;
    _loc3.mustRound = true;
    _global.$addTween(this, "__special_bst_t__", 1, timeSeconds, animType, delay, callback, extra1, extra2, _loc3);
};
ASSetPropFlags(MovieClip.prototype, "roundedBezierSlideTo", 1, 0);
ASSetPropFlags(TextField.prototype, "roundedBezierSlideTo", 1, 0);
Sound.prototype.volumeTo = function (propDest_volume, timeSeconds, animType, delay, callback, extra1, extra2)
{
    _global.$addTween(this, "__special_sound_volume__", propDest_volume, timeSeconds, animType, delay, callback, extra1, extra2);
};
ASSetPropFlags(Sound.prototype, "volumeTo", 1, 0);
Sound.prototype.panTo = function (propDest_volume, timeSeconds, animType, delay, callback, extra1, extra2)
{
    _global.$addTween(this, "__special_sound_pan__", propDest_volume, timeSeconds, animType, delay, callback, extra1, extra2);
};
ASSetPropFlags(Sound.prototype, "panTo", 1, 0);
MovieClip.prototype.colorTo = function (propDest_color, timeSeconds, animType, delay, callback, extra1, extra2)
{
    if (propDest_color == null)
    {
        this.colorTransformTo(100, 0, 100, 0, 100, 0, undefined, undefined, timeSeconds, animType, delay, callback, extra1, extra2);
    }
    else
    {
        var _loc3 = propDest_color >> 16;
        var _loc5 = (propDest_color & 65280) >> 8;
        var _loc4 = propDest_color & 255;
        this.colorTransformTo(0, _loc3, 0, _loc5, 0, _loc4, undefined, undefined, timeSeconds, animType, delay, callback, extra1, extra2);
    } // end else if
};
ASSetPropFlags(MovieClip.prototype, "colorTo", 1, 0);
TextField.prototype.colorTo = function (propDest_color, timeSeconds, animType, delay, callback, extra1, extra2)
{
    var _loc3 = propDest_color >> 16;
    var _loc6 = (propDest_color & 65280) >> 8;
    var _loc4 = propDest_color & 255;
    _global.$addTween(this, ["__special_text_r__", "__special_text_g__", "__special_text_b__"], [_loc3, _loc6, _loc4], timeSeconds, animType, delay, callback, extra1, extra2);
};
ASSetPropFlags(TextField.prototype, "colorTo", 1, 0);
MovieClip.prototype.colorTransformTo = function ()
{
    if (typeof(arguments[0]) == "object" && arguments[0] != undefined)
    {
        _global.$addTween(this, ["__special_mc_ra__", "__special_mc_rb__", "__special_mc_ga__", "__special_mc_gb__", "__special_mc_ba__", "__special_mc_bb__", "__special_mc_aa__", "__special_mc_ab__"], [arguments[0].ra, arguments[0].rb, arguments[0].ga, arguments[0].gb, arguments[0].ba, arguments[0].bb, arguments[0].aa, arguments[0].ab], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    }
    else
    {
        _global.$addTween(this, ["__special_mc_ra__", "__special_mc_rb__", "__special_mc_ga__", "__special_mc_gb__", "__special_mc_ba__", "__special_mc_bb__", "__special_mc_aa__", "__special_mc_ab__"], [arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7]], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13]);
    } // end else if
};
ASSetPropFlags(MovieClip.prototype, "colorTransformTo", 1, 0);
MovieClip.prototype.blurTo = TextField.prototype.blurTo = function ()
{
    if (typeof(arguments[0]) == "object" && arguments[0] != undefined)
    {
        _global.$addTween(this, ["__special_blur_x__", "__special_blur_y__"], [arguments[0].blurX, arguments[0].blurY], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], {__special_blur_quality__: arguments[0].quality});
    }
    else
    {
        _global.$addTween(this, ["__special_blur_x__", "__special_blur_y__"], [arguments[0], arguments[0]], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], {__special_blur_quality__: arguments[1]});
    } // end else if
};
ASSetPropFlags(MovieClip.prototype, "blurTo", 1, 0);
ASSetPropFlags(TextField.prototype, "blurTo", 1, 0);
MovieClip.prototype.xyBlurTo = TextField.prototype.xyBlurTo = function (propDest_blurX, propDest_blurY, quality, timeSeconds, animType, delay, callback, extra1, extra2)
{
    _global.$addTween(this, ["__special_blur_x__", "__special_blur_y__"], [propDest_blurX, propDest_blurY], timeSeconds, animType, delay, callback, extra1, extra2, {__special_blur_quality__: quality});
};
ASSetPropFlags(MovieClip.prototype, "xyBlurTo", 1, 0);
ASSetPropFlags(TextField.prototype, "xyBlurTo", 1, 0);
MovieClip.prototype.xBlurTo = TextField.prototype.xBlurTo = function (propDest_blur, quality, timeSeconds, animType, delay, callback, extra1, extra2)
{
    _global.$addTween(this, "__special_blur_x__", propDest_blur, timeSeconds, animType, delay, callback, extra1, extra2, {__special_blur_quality__: quality});
};
ASSetPropFlags(MovieClip.prototype, "xBlurTo", 1, 0);
ASSetPropFlags(TextField.prototype, "xBlurTo", 1, 0);
MovieClip.prototype.yBlurTo = TextField.prototype.yBlurTo = function (propDest_blur, quality, timeSeconds, animType, delay, callback, extra1, extra2)
{
    _global.$addTween(this, "__special_blur_y__", propDest_blur, timeSeconds, animType, delay, callback, extra1, extra2, {__special_blur_quality__: quality});
};
ASSetPropFlags(MovieClip.prototype, "yBlurTo", 1, 0);
ASSetPropFlags(TextField.prototype, "yBlurTo", 1, 0);
MovieClip.prototype.glowTo = TextField.prototype.glowTo = function ()
{
    if (typeof(arguments[0]) == "object" && arguments[0] != undefined)
    {
        _global.$addTween(this, ["__special_glow_color__", "__special_glow_alpha__", "__special_glow_blurX__", "__special_glow_blurY__", "__special_glow_strength__"], [arguments[0].color, arguments[0].alpha, arguments[0].blurX, arguments[0].blurY, arguments[0].strength], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], {__special_glow_quality__: arguments[0].quality, __special_glow_inner__: arguments[0].inner, __special_glow_knockout__: arguments[0].knockout});
    }
    else
    {
        _global.$addTween(this, ["__special_glow_color__", "__special_glow_alpha__", "__special_glow_blurX__", "__special_glow_blurY__", "__special_glow_strength__"], [arguments[0], arguments[1], arguments[2], arguments[2], arguments[3]], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], {__special_glow_quality__: arguments[4], __special_glow_inner__: arguments[5], __special_glow_knockout__: arguments[6]});
    } // end else if
};
ASSetPropFlags(MovieClip.prototype, "glowTo", 1, 0);
ASSetPropFlags(TextField.prototype, "glowTo", 1, 0);
MovieClip.prototype.xyGlowTo = TextField.prototype.xyGlowTo = function (propDest_color, propDest_alpha, propDest_blurX, propDest_blurY, propDest_strength, quality, inner, knockout, timeSeconds, animType, delay, callback, extra1, extra2)
{
    _global.$addTween(this, ["__special_glow_color__", "__special_glow_alpha__", "__special_glow_blurX__", "__special_glow_blurY__", "__special_glow_strength__"], [propDest_color, propDest_alpha, propDest_blurX, propDest_blurY, propDest_strength], timeSeconds, animType, delay, callback, extra1, extra2, {__special_glow_quality__: quality, __special_glow_inner__: inner, __special_glow_knockout__: knockout});
};
ASSetPropFlags(MovieClip.prototype, "xyGlowTo", 1, 0);
ASSetPropFlags(TextField.prototype, "xyGlowTo", 1, 0);
MovieClip.prototype.xGlowTo = TextField.prototype.xGlowTo = function (propDest_color, propDest_alpha, propDest_blur, propDest_strength, quality, inner, knockout, timeSeconds, animType, delay, callback, extra1, extra2)
{
    _global.$addTween(this, ["__special_glow_color__", "__special_glow_alpha__", "__special_glow_blurX__", "__special_glow_strength__"], [propDest_color, propDest_alpha, propDest_blur, propDest_strength], timeSeconds, animType, delay, callback, extra1, extra2, {__special_glow_quality__: quality, __special_glow_inner__: inner, __special_glow_knockout__: knockout});
};
ASSetPropFlags(MovieClip.prototype, "xGlowTo", 1, 0);
ASSetPropFlags(TextField.prototype, "xGlowTo", 1, 0);
MovieClip.prototype.yGlowTo = TextField.prototype.yGlowTo = function (propDest_color, propDest_alpha, propDest_blur, propDest_strength, quality, inner, knockout, timeSeconds, animType, delay, callback, extra1, extra2)
{
    _global.$addTween(this, ["__special_glow_color__", "__special_glow_alpha__", "__special_glow_blurY__", "__special_glow_strength__"], [propDest_color, propDest_alpha, propDest_blur, propDest_strength], timeSeconds, animType, delay, callback, extra1, extra2, {__special_glow_quality__: quality, __special_glow_inner__: inner, __special_glow_knockout__: knockout});
};
ASSetPropFlags(MovieClip.prototype, "yGlowTo", 1, 0);
ASSetPropFlags(TextField.prototype, "yGlowTo", 1, 0);
MovieClip.prototype.bevelTo = TextField.prototype.bevelTo = function ()
{
    if (typeof(arguments[0]) == "object" && arguments[0] != undefined)
    {
        _global.$addTween(this, ["__special_bevel_distance__", "__special_bevel_angle__", "__special_bevel_highlightColor__", "__special_bevel_highlightAlpha__", "__special_bevel_shadowColor__", "__special_bevel_shadowAlpha__", "__special_bevel_blurX__", "__special_bevel_blurY__", "__special_bevel_strength__"], [arguments[0].distance, arguments[0].angle, arguments[0].highlightColor, arguments[0].highlightAlpha * 100, arguments[0].shadowColor, arguments[0].shadowAlpha * 100, arguments[0].blurX, arguments[0].blurY, arguments[0].strength], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], {__special_bevel_quality__: arguments[0].quality, __special_bevel_type__: arguments[0].type, __special_bevel_knockout__: arguments[0].knockout});
    }
    else
    {
        _global.$addTween(this, ["__special_bevel_distance__", "__special_bevel_angle__", "__special_bevel_highlightColor__", "__special_bevel_highlightAlpha__", "__special_bevel_shadowColor__", "__special_bevel_shadowAlpha__", "__special_bevel_blurX__", "__special_bevel_blurY__", "__special_bevel_strength__"], [arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[6], arguments[7]], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16], {__special_bevel_quality__: arguments[8], __special_bevel_type__: arguments[9], __special_bevel_knockout__: arguments[10]});
    } // end else if
};
ASSetPropFlags(MovieClip.prototype, "bevelTo", 1, 0);
ASSetPropFlags(TextField.prototype, "bevelTo", 1, 0);
MovieClip.prototype.xyBevelTo = TextField.prototype.xyBevelTo = function (propDest_distance, propDest_angle, propDest_highlightColor, propDest_highlightAlpha, propDest_shadowColor, propDest_shadowAlpha, propDest_blurX, propDest_blurY, propDest_strength, quality, type, knockout, timeSeconds, animType, delay, callback, extra1, extra2)
{
    _global.$addTween(this, ["__special_bevel_distance__", "__special_bevel_angle__", "__special_bevel_highlightColor__", "__special_bevel_highlightAlpha__", "__special_bevel_shadowColor__", "__special_bevel_shadowAlpha__", "__special_bevel_blurX__", "__special_bevel_blurY__", "__special_bevel_blurY__", "__special_bevel_strength__"], [propDest_distance, propDest_angle, propDest_highlightColor, propDest_highlightAlpha, propDest_shadowColor, propDest_shadowAlpha, propDest_blur, propDest_blur, propDest_strength], timeSeconds, animType, delay, callback, extra1, extra2, {__special_bevel_quality__: quality, __special_bevel_type__: type, __special_bevel_knockout__: knockout});
};
ASSetPropFlags(MovieClip.prototype, "xyBevelTo", 1, 0);
ASSetPropFlags(TextField.prototype, "xyBevelTo", 1, 0);
_global.findPointOnCurve = function (p1x, p1y, cx, cy, p2x, p2y, t)
{
    return ({x: p1x + t * (2 * (1 - t) * (cx - p1x) + t * (p2x - p1x)), y: p1y + t * (2 * (1 - t) * (cy - p1y) + t * (p2y - p1y))});
};
ASSetPropFlags(_global, "findPointOnCurve", 1, 0);
_global.findTweenColor = function (objProp, tTime)
{
    var _loc8 = objProp._propStart >> 16;
    var _loc4 = objProp._propDest >> 16;
    var _loc5 = objProp._propStart >> 8 & 255;
    var _loc6 = objProp._propDest >> 8 & 255;
    var _loc9 = objProp._propStart & 255;
    var _loc7 = objProp._propDest & 255;
    var _loc12 = Math.round(_global.findTweenValue(_loc8, _loc4, objProp._timeStart, tTime - objProp._delay * 1000, objProp._timeDest, objProp._animType, objProp._extra1, objProp._extra2));
    var _loc10 = Math.round(_global.findTweenValue(_loc5, _loc6, objProp._timeStart, tTime - objProp._delay * 1000, objProp._timeDest, objProp._animType, objProp._extra1, objProp._extra2));
    var _loc3 = Math.round(_global.findTweenValue(_loc9, _loc7, objProp._timeStart, tTime - objProp._delay * 1000, objProp._timeDest, objProp._animType, objProp._extra1, objProp._extra2));
    return ((_loc12 << 16) + (_loc10 << 8) + _loc3);
};
_global.findTweenValue = function (_propStart, _propDest, _timeStart, _timeNow, _timeDest, _animType, _extra1, _extra2)
{
    var _loc1 = _timeNow - _timeStart;
    var _loc4 = _propStart;
    var _loc2 = _propDest - _propStart;
    var _loc3 = _timeDest - _timeStart;
    var _loc6 = _extra1;
    var _loc7 = _extra2;
    var _loc5 = _extra1;
    switch (_animType.toLowerCase())
    {
        case "linear":
        {
            return (_loc2 * _loc1 / _loc3 + _loc4);
        } 
        case "easeinquad":
        {
            _loc1 = _loc1 / _loc3;
            return (_loc2 * (_loc1) * _loc1 + _loc4);
        } 
        case "easeoutquad":
        {
            _loc1 = _loc1 / _loc3;
            return (-_loc2 * (_loc1) * (_loc1 - 2) + _loc4);
        } 
        case "easeinoutquad":
        {
            _loc1 = _loc1 / (_loc3 / 2);
            if (_loc1 < 1)
            {
                return (_loc2 / 2 * _loc1 * _loc1 + _loc4);
            } // end if
            return (-_loc2 / 2 * (--_loc1 * (_loc1 - 2) - 1) + _loc4);
        } 
        case "easeoutinquad":
        {
            if (_loc1 < _loc3 / 2)
            {
                return (findTweenValue(0, _loc2, 0, _loc1 * 2, _loc3, "easeOutQuad") * 5.000000E-001 + _loc4);
            } // end if
            return (findTweenValue(0, _loc2, 0, _loc1 * 2 - _loc3, _loc3, "easeInQuad") * 5.000000E-001 + _loc2 * 5.000000E-001 + _loc4);
        } 
        case "easeincubic":
        {
            _loc1 = _loc1 / _loc3;
            return (_loc2 * (_loc1) * _loc1 * _loc1 + _loc4);
        } 
        case "easeoutcubic":
        {
            _loc1 = _loc1 / _loc3 - 1;
            return (_loc2 * ((_loc1) * _loc1 * _loc1 + 1) + _loc4);
        } 
        case "easeinoutcubic":
        {
            _loc1 = _loc1 / (_loc3 / 2);
            if (_loc1 < 1)
            {
                return (_loc2 / 2 * _loc1 * _loc1 * _loc1 + _loc4);
            } // end if
            _loc1 = _loc1 - 2;
            return (_loc2 / 2 * ((_loc1) * _loc1 * _loc1 + 2) + _loc4);
        } 
        case "easeoutincubic":
        {
            if (_loc1 < _loc3 / 2)
            {
                return (findTweenValue(0, _loc2, 0, _loc1 * 2, _loc3, "easeOutCubic") * 5.000000E-001 + _loc4);
            } // end if
            return (findTweenValue(0, _loc2, 0, _loc1 * 2 - _loc3, _loc3, "easeInCubic") * 5.000000E-001 + _loc2 * 5.000000E-001 + _loc4);
        } 
        case "easeinquart":
        {
            _loc1 = _loc1 / _loc3;
            return (_loc2 * (_loc1) * _loc1 * _loc1 * _loc1 + _loc4);
        } 
        case "easeoutquart":
        {
            _loc1 = _loc1 / _loc3 - 1;
            return (-_loc2 * ((_loc1) * _loc1 * _loc1 * _loc1 - 1) + _loc4);
        } 
        case "easeinoutquart":
        {
            _loc1 = _loc1 / (_loc3 / 2);
            if (_loc1 < 1)
            {
                return (_loc2 / 2 * _loc1 * _loc1 * _loc1 * _loc1 + _loc4);
            } // end if
            _loc1 = _loc1 - 2;
            return (-_loc2 / 2 * ((_loc1) * _loc1 * _loc1 * _loc1 - 2) + _loc4);
        } 
        case "easeoutinquart":
        {
            if (_loc1 < _loc3 / 2)
            {
                return (findTweenValue(0, _loc2, 0, _loc1 * 2, _loc3, "easeOutQuart") * 5.000000E-001 + _loc4);
            } // end if
            return (findTweenValue(0, _loc2, 0, _loc1 * 2 - _loc3, _loc3, "easeInQuart") * 5.000000E-001 + _loc2 * 5.000000E-001 + _loc4);
        } 
        case "easeinquint":
        {
            _loc1 = _loc1 / _loc3;
            return (_loc2 * (_loc1) * _loc1 * _loc1 * _loc1 * _loc1 + _loc4);
        } 
        case "easeoutquint":
        {
            _loc1 = _loc1 / _loc3 - 1;
            return (_loc2 * ((_loc1) * _loc1 * _loc1 * _loc1 * _loc1 + 1) + _loc4);
        } 
        case "easeinoutquint":
        {
            _loc1 = _loc1 / (_loc3 / 2);
            if (_loc1 < 1)
            {
                return (_loc2 / 2 * _loc1 * _loc1 * _loc1 * _loc1 * _loc1 + _loc4);
            } // end if
            _loc1 = _loc1 - 2;
            return (_loc2 / 2 * ((_loc1) * _loc1 * _loc1 * _loc1 * _loc1 + 2) + _loc4);
        } 
        case "easeoutinquint":
        {
            if (_loc1 < _loc3 / 2)
            {
                return (findTweenValue(0, _loc2, 0, _loc1 * 2, _loc3, "easeOutQuint") * 5.000000E-001 + _loc4);
            } // end if
            return (findTweenValue(0, _loc2, 0, _loc1 * 2 - _loc3, _loc3, "easeInQuint") * 5.000000E-001 + _loc2 * 5.000000E-001 + _loc4);
        } 
        case "easeinsine":
        {
            return (-_loc2 * Math.cos(_loc1 / _loc3 * 1.570796E+000) + _loc2 + _loc4);
        } 
        case "easeoutsine":
        {
            return (_loc2 * Math.sin(_loc1 / _loc3 * 1.570796E+000) + _loc4);
        } 
        case "easeinoutsine":
        {
            return (-_loc2 / 2 * (Math.cos(3.141593E+000 * _loc1 / _loc3) - 1) + _loc4);
        } 
        case "easeoutinsine":
        {
            if (_loc1 < _loc3 / 2)
            {
                return (findTweenValue(0, _loc2, 0, _loc1 * 2, _loc3, "easeOutSine") * 5.000000E-001 + _loc4);
            } // end if
            return (findTweenValue(0, _loc2, 0, _loc1 * 2 - _loc3, _loc3, "easeInSine") * 5.000000E-001 + _loc2 * 5.000000E-001 + _loc4);
        } 
        case "easeinexpo":
        {
            return (_loc1 == 0 ? (_loc4) : (_loc2 * Math.pow(2, 10 * (_loc1 / _loc3 - 1)) + _loc4));
        } 
        case "easeoutexpo":
        {
            return (_loc1 == _loc3 ? (_loc4 + _loc2) : (_loc2 * (-Math.pow(2, -10 * _loc1 / _loc3) + 1) + _loc4));
        } 
        case "easeinoutexpo":
        {
            if (_loc1 == 0)
            {
                return (_loc4);
            } // end if
            if (_loc1 == _loc3)
            {
                return (_loc4 + _loc2);
            } // end if
            _loc1 = _loc1 / (_loc3 / 2);
            if (_loc1 < 1)
            {
                return (_loc2 / 2 * Math.pow(2, 10 * (_loc1 - 1)) + _loc4);
            } // end if
            return (_loc2 / 2 * (-Math.pow(2, -10 * --_loc1) + 2) + _loc4);
        } 
        case "easeoutinexpo":
        {
            if (_loc1 == 0)
            {
                return (_loc4);
            } // end if
            if (_loc1 == _loc3)
            {
                return (_loc4 + _loc2);
            } // end if
            _loc1 = _loc1 / (_loc3 / 2);
            if (_loc1 < 1)
            {
                return (_loc2 / 2 * (-Math.pow(2, -10 * _loc1 / 1) + 1) + _loc4);
            } // end if
            return (_loc2 / 2 * (Math.pow(2, 10 * (_loc1 - 2) / 1) + 1) + _loc4);
        } 
        case "easeincirc":
        {
            _loc1 = _loc1 / _loc3;
            return (-_loc2 * (Math.sqrt(1 - _loc1 * _loc1) - 1) + _loc4);
        } 
        case "easeoutcirc":
        {
            _loc1 = _loc1 / _loc3 - 1;
            return (_loc2 * Math.sqrt(1 - (_loc1) * _loc1) + _loc4);
        } 
        case "easeinoutcirc":
        {
            _loc1 = _loc1 / (_loc3 / 2);
            if (_loc1 < 1)
            {
                return (-_loc2 / 2 * (Math.sqrt(1 - _loc1 * _loc1) - 1) + _loc4);
            } // end if
            _loc1 = _loc1 - 2;
            return (_loc2 / 2 * (Math.sqrt(1 - (_loc1) * _loc1) + 1) + _loc4);
        } 
        case "easeoutincirc":
        {
            if (_loc1 < _loc3 / 2)
            {
                return (findTweenValue(0, _loc2, 0, _loc1 * 2, _loc3, "easeOutCirc") * 5.000000E-001 + _loc4);
            } // end if
            return (findTweenValue(0, _loc2, 0, _loc1 * 2 - _loc3, _loc3, "easeInCirc") * 5.000000E-001 + _loc2 * 5.000000E-001 + _loc4);
        } 
        case "easeinelastic":
        {
            if (_loc1 == 0)
            {
                return (_loc4);
            } // end if
            _loc1 = _loc1 / _loc3;
            if (_loc1 == 1)
            {
                return (_loc4 + _loc2);
            } // end if
            if (!_loc7)
            {
                _loc7 = _loc3 * 3.000000E-001;
            } // end if
            if (!_loc6 || _loc6 < Math.abs(_loc2))
            {
                _loc6 = _loc2;
                _loc5 = _loc7 / 4;
            }
            else
            {
                _loc5 = _loc7 / 6.283185E+000 * Math.asin(_loc2 / _loc6);
            } // end else if
            _loc1 = _loc1 - 1;
            return (-_loc6 * Math.pow(2, 10 * (_loc1)) * Math.sin((_loc1 * _loc3 - _loc5) * 6.283185E+000 / _loc7) + _loc4);
        } 
        case "easeoutelastic":
        {
            if (_loc1 == 0)
            {
                return (_loc4);
            } // end if
            _loc1 = _loc1 / _loc3;
            if (_loc1 == 1)
            {
                return (_loc4 + _loc2);
            } // end if
            if (!_loc7)
            {
                _loc7 = _loc3 * 3.000000E-001;
            } // end if
            if (!_loc6 || _loc6 < Math.abs(_loc2))
            {
                _loc6 = _loc2;
                _loc5 = _loc7 / 4;
            }
            else
            {
                _loc5 = _loc7 / 6.283185E+000 * Math.asin(_loc2 / _loc6);
            } // end else if
            return (_loc6 * Math.pow(2, -10 * _loc1) * Math.sin((_loc1 * _loc3 - _loc5) * 6.283185E+000 / _loc7) + _loc2 + _loc4);
        } 
        case "easeinoutelastic":
        {
            if (_loc1 == 0)
            {
                return (_loc4);
            } // end if
            _loc1 = _loc1 / (_loc3 / 2);
            if (_loc1 == 2)
            {
                return (_loc4 + _loc2);
            } // end if
            if (!_loc7)
            {
                _loc7 = _loc3 * 4.500000E-001;
            } // end if
            if (!_loc6 || _loc6 < Math.abs(_loc2))
            {
                _loc6 = _loc2;
                _loc5 = _loc7 / 4;
            }
            else
            {
                _loc5 = _loc7 / 6.283185E+000 * Math.asin(_loc2 / _loc6);
            } // end else if
            if (_loc1 < 1)
            {
                _loc1 = _loc1 - 1;
                return (-5.000000E-001 * (_loc6 * Math.pow(2, 10 * (_loc1)) * Math.sin((_loc1 * _loc3 - _loc5) * 6.283185E+000 / _loc7)) + _loc4);
            } // end if
            _loc1 = _loc1 - 1;
            return (_loc6 * Math.pow(2, -10 * (_loc1)) * Math.sin((_loc1 * _loc3 - _loc5) * 6.283185E+000 / _loc7) * 5.000000E-001 + _loc2 + _loc4);
        } 
        case "easeoutinelastic":
        {
            if (_loc1 < _loc3 / 2)
            {
                return (findTweenValue(0, _loc2, 0, _loc1 * 2, _loc3, "easeOutElastic") * 5.000000E-001 + _loc4);
            } // end if
            return (findTweenValue(0, _loc2, 0, _loc1 * 2 - _loc3, _loc3, "easeInElastic") * 5.000000E-001 + _loc2 * 5.000000E-001 + _loc4);
        } 
        case "easeinback":
        {
            if (_loc5 == undefined)
            {
                _loc5 = 1.701580E+000;
            } // end if
            _loc1 = _loc1 / _loc3;
            return (_loc2 * (_loc1) * _loc1 * ((_loc5 + 1) * _loc1 - _loc5) + _loc4);
        } 
        case "easeoutback":
        {
            if (_loc5 == undefined)
            {
                _loc5 = 1.701580E+000;
            } // end if
            _loc1 = _loc1 / _loc3 - 1;
            return (_loc2 * ((_loc1) * _loc1 * ((_loc5 + 1) * _loc1 + _loc5) + 1) + _loc4);
        } 
        case "easeinoutback":
        {
            if (_loc5 == undefined)
            {
                _loc5 = 1.701580E+000;
            } // end if
            _loc1 = _loc1 / (_loc3 / 2);
            if (_loc1 < 1)
            {
                _loc5 = _loc5 * 1.525000E+000;
                return (_loc2 / 2 * (_loc1 * _loc1 * ((_loc5 + 1) * _loc1 - _loc5)) + _loc4);
            } // end if
            _loc1 = _loc1 - 2;
            _loc5 = _loc5 * 1.525000E+000;
            return (_loc2 / 2 * ((_loc1) * _loc1 * ((_loc5 + 1) * _loc1 + _loc5) + 2) + _loc4);
        } 
        case "easeoutinback":
        {
            if (_loc1 < _loc3 / 2)
            {
                return (findTweenValue(0, _loc2, 0, _loc1 * 2, _loc3, "easeOutBack") * 5.000000E-001 + _loc4);
            } // end if
            return (findTweenValue(0, _loc2, 0, _loc1 * 2 - _loc3, _loc3, "easeInBack") * 5.000000E-001 + _loc2 * 5.000000E-001 + _loc4);
        } 
        case "easeinbounce":
        {
            return (_loc2 - findTweenValue(0, _loc2, 0, _loc3 - _loc1, _loc3, "easeOutBounce") + _loc4);
        } 
        case "easeoutbounce":
        {
            _loc1 = _loc1 / _loc3;
            if (_loc1 < 3.636364E-001)
            {
                return (_loc2 * (7.562500E+000 * _loc1 * _loc1) + _loc4);
            }
            else if (_loc1 < 7.272727E-001)
            {
                _loc1 = _loc1 - 5.454545E-001;
                return (_loc2 * (7.562500E+000 * (_loc1) * _loc1 + 7.500000E-001) + _loc4);
            }
            else if (_loc1 < 9.090909E-001)
            {
                _loc1 = _loc1 - 8.181818E-001;
                return (_loc2 * (7.562500E+000 * (_loc1) * _loc1 + 9.375000E-001) + _loc4);
            }
            else
            {
                _loc1 = _loc1 - 9.545455E-001;
                return (_loc2 * (7.562500E+000 * (_loc1) * _loc1 + 9.843750E-001) + _loc4);
            } // end else if
        } 
        case "easeinoutbounce":
        {
            if (_loc1 < _loc3 / 2)
            {
                return (findTweenValue(0, _loc2, 0, _loc1 * 2, _loc3, "easeInBounce") * 5.000000E-001 + _loc4);
            } // end if
            return (findTweenValue(0, _loc2, 0, _loc1 * 2 - _loc3, _loc3, "easeOutBounce") * 5.000000E-001 + _loc2 * 5.000000E-001 + _loc4);
        } 
        case "easeoutinbounce":
        {
            if (_loc1 < _loc3 / 2)
            {
                return (findTweenValue(0, _loc2, 0, _loc1 * 2, _loc3, "easeOutBounce") * 5.000000E-001 + _loc4);
            } // end if
            return (findTweenValue(0, _loc2, 0, _loc1 * 2 - _loc3, _loc3, "easeInBounce") * 5.000000E-001 + _loc2 * 5.000000E-001 + _loc4);
        } 
    } // End of switch
    trace ("MC TWEEN ### Error on transition: there\'s no \"" + _animType + "\" animation type.");
    return (0);
};
ASSetPropFlags(_global, "findTweenValue", 1, 0);
com.mosesSupposes.fuse.ZigoEngine.simpleSetup(com.mosesSupposes.fuse.Shortcuts, com.mosesSupposes.fuse.PennerEasing);
Stage.scaleMode = "noScale";
Stage.align = "TL";
var mcolrox;
logox = [];
pic_arr = [];
_xml = new XML();
_xml.load("dat/xml/xmlx.xml");
_xml.ignoreWhite = true;
_xml.onLoad = function (ok)
{
    if (ok)
    {
        FRdat();
        play ();
    }
    else
    {
        trace ("XML not loaded");
    } // end else if
};
