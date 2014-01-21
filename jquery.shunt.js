/*
shunt-js - http://reconstrukt.com
Licensed under the MIT license

Copyright (c) 2013 Matthew Knight

Provides a jquery api for chaining together, and controlling playback of, CSS3 animations. Animation examples courtesy of Animate.css (http://daneden.me/animate).

Usage:

shunt( animation_name, duration, start_delay, callback )

 - animation name: animation classname, from animate.css
 - duration: optional playback time, millis (default = 1 sec)
 - start time: optional delay, millis (default = 0 sec, start immediately)
 - callback, optional
*/

$.fn.shunt = function (animation, duration, start, cb) {

    // shorthand call style
    if ($.isFunction(duration)) {
        cb = duration;
        duration = 1000;
        start = 0;
    }
    if ($.isFunction(start)) {
        cb = start;
        start = 0;
    }
    if (typeof duration !== 'number') duration = 1000;
    if (typeof start !== 'number') start = 0;

    var uid = 'shunt-' + (new Date().getTime()) + '-' + (Math.floor( Math.random()*1000000 ));
	
    var classes = [uid, 'animated ' + animation];
    var prefixes = ['webkit-', 'moz-', 'ms-', 'o-', ''];
    var endevent = 'animationend webkitAnimationEnd oAnimationEnd';

    var ttl = duration / 1000 + 's';
    var delay = start / 1000 + 's';

    var animcss = [];
    for (var i in prefixes) {
        var dur = prefixes[i] + 'animation-duration';
        var del = prefixes[i] + 'animation-delay';
        animcss.push(dur);
        animcss.push(del);

        this.css(dur, ttl).css(del, delay);
    }

    this
    .addClass(classes.join(' '))
    .attr('data-shunt-classes', classes.join(' '))
    .attr('data-shunt-animcss', animcss.join(','))
    .one(endevent, function(){

        var source = $('.' + uid);

        var classes = source.attr('data-shunt-classes');
        source.removeClass(classes);

        var animcss = source.attr('data-shunt-animcss').split(',');
        for (var i in animcss) source.css(animcss[i], '');

        source
        .removeAttr('data-shunt-classes')
        .removeAttr('data-shunt-animcss');

        if ($.isFunction(cb)) $(this).each(cb);
    });

};
