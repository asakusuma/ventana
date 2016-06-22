// https://gist.github.com/paulirish/1579671
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

// https://github.com/tom-james-watson/phantomjs-polyfill/blob/master/bind-polyfill.js
if (typeof Function.prototype.bind != 'function') {
    Function.prototype.bind = function bind(obj) {
        var args = Array.prototype.slice.call(arguments, 1),
            self = this,
            nop = function() {
            },
            bound = function() {
                return self.apply(
                    this instanceof nop ? this : (obj || {}), args.concat(
                        Array.prototype.slice.call(arguments)
                    )
                );
            };
        nop.prototype = this.prototype || {};
        bound.prototype = new nop();
        return bound;
    };
}
