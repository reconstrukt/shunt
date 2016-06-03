/*
shunt - https://github.com/reconstrukt/shunt

A jquery plugin for css3 animation chaining. 

by Matthew Knight, http://reconstrukt.com
Licensed under the MIT license. 
*/

(function(jQuery){

  jQuery.fn.shunt = function(animation, duration, start, cb) {

    // shorthand call style
    if (jQuery.isFunction(duration)) {
      cb = duration;
      duration = 1000;
      start = 0;
    }
    if (jQuery.isFunction(start)) {
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

      var source = jQuery('.' + uid);

      var classes = source.attr('data-shunt-classes');
      source.removeClass(classes);

      var animcss = source.attr('data-shunt-animcss').split(',');
      for (i=0; i < animcss.length; i++) source.css(animcss[i], '');

      source
      .removeAttr('data-shunt-classes')
      .removeAttr('data-shunt-animcss');

      if (jQuery.isFunction(cb)) jQuery(this).each(cb);
    });

  };

})(jQuery);
