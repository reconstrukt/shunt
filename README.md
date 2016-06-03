shunt
=====

CSS3 animation API for JQuery.

Shunt is a jquery plugin providing an api for hardware-accelerated css3 animations.  With shunt, css3 animations behave like native jquery animations: easily trigger animations via events, chain animations together with callbacks and choreograph rich effects.

Demos: 
 - https://rawgit.com/reconstrukt/shunt/master/demo-basic.html
 - https://rawgit.com/reconstrukt/shunt/master/demo-blur.html 
 - https://rawgit.com/reconstrukt/shunt/master/demo-bonkers.html 

Fiddle: http://jsfiddle.net/reconstrukt/jF45b/

Options
-------

 - animation name: animation classname (for example, keyframes from animate.css)
 - duration: optional playback time, millis (default = 1 sec)
 - start time: optional delay, millis (default = 0 sec, start immediately)
 - callback, optional

Usage
-----

Works just like jquery's other familiar animation methods, i.e.:

`$.shunt( animation_name, duration, start_delay, callback )`

The `duration` and `start_delay` parameters are optional. You can use the shorthand signature passing just `animation_name` and `callback`, like so:

`$.shunt( animation_name, callback )`

Here's an example that plays a 3-step choreographed animation onclick:

```javascript
<script>

$('.box-1').click(function() {

   $('.box-1').shunt('flipOutY', function() {

     $(this).shunt('flipInY', function(){

       $(this)
         .text('IMMA FALL DOWN')
         .shunt('hinge', 2000, 1000, function(){
          
          $(this).text('OUCH THAT HURT');
          alert('all done.');

       });
     });
   });
 }); 

```

Shout out
---------

CSS3 animation examples courtesy of Animate.css, http://daneden.me/animate

