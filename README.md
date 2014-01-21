shunt
=====

CSS3 animation API for JQuery.

Shunt is a jquery plugin providing an api for hardware-accelerated css3 animations.  With shunt, css3 animations behave like native jquery animations: easily trigger animations via events, chain animations together with callbacks and choreograph rich effects.

Check the fiddle here: http://jsfiddle.net/reconstrukt/jF45b/

CSS3 animation examples courtesy of Animate.css (http://daneden.me/animate).

Usage:

$.shunt( animation_name, duration, start_delay, callback )

 - animation name: animation classname (for example, keyframes from animate.css)
 - duration: optional playback time, millis (default = 1 sec)
 - start time: optional delay, millis (default = 0 sec, start immediately)
 - callback, optional
