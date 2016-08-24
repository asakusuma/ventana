(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ventana = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var window_proxy_1 = require('./window-proxy');
var streams_1 = require('./streams/streams');
exports.RAFStream = streams_1.raf;
var element_1 = require('./queues/element');
exports.QueueElement = element_1.default;
var frame_1 = require('./streams/frame');
exports.Frame = frame_1.default;
var queue_1 = require('./queues/queue');
exports.Queue = queue_1.default;
var stream_1 = require('./streams/stream');
var stream_2 = require('./streams/stream');
exports.Stream = stream_2.default;
var listeners = {
    move: [],
    resize: [],
    destroy: [],
    hide: [],
    show: []
};
function generateTrigger(key) {
    return function () {
        var callbacks = listeners[key], len = callbacks.length, i = 0;
        for (i = 0; i < len; i++) {
            callbacks[i].call(null);
        }
    };
}
streams_1.scroll.pipe(new stream_1.Terminal(function (arg) {
    listeners.move.forEach(function (callback) {
        callback.call(null, arg);
    });
}));
streams_1.resize.pipe(new stream_1.Terminal(function (arg) {
    listeners.resize.forEach(function (callback) {
        callback.call(null, arg);
    });
}));
if (window_proxy_1.default.hasDOM) {
    window.addEventListener('unload', generateTrigger('destroy'));
    document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'visible') {
            generateTrigger('show')();
        }
        else {
            generateTrigger('hide')();
        }
    });
}
var taskQueue = [];
streams_1.poll.pipe(new stream_1.Terminal(function (frame) {
    while (taskQueue.length > 0) {
        taskQueue.pop().call(null, frame);
    }
}));
function on(eventName, callback) {
    listeners[eventName].push(callback);
}
exports.on = on;
function queue(callback) {
    taskQueue.push(callback);
}
exports.queue = queue;

},{"./queues/element":3,"./queues/queue":4,"./streams/frame":5,"./streams/stream":6,"./streams/streams":7,"./window-proxy":8}],2:[function(require,module,exports){
"use strict";
(function (RAFPhase) {
    RAFPhase[RAFPhase["MEASURE"] = 0] = "MEASURE";
    RAFPhase[RAFPhase["MUTATE"] = 1] = "MUTATE";
})(exports.RAFPhase || (exports.RAFPhase = {}));
var RAFPhase = exports.RAFPhase;

},{}],3:[function(require,module,exports){
"use strict";
var QueueElement = (function () {
    function QueueElement() {
    }
    return QueueElement;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = QueueElement;

},{}],4:[function(require,module,exports){
"use strict";
var stream_1 = require('../streams/stream');
var Queue = (function () {
    function Queue(name) {
        this.name = name;
        this.items = [];
        this.stream = new stream_1.default();
    }
    Queue.prototype.remove = function (identifier) {
        var predicate;
        if (typeof identifier === 'string') {
            predicate = function (element) { return element.id === identifier; };
        }
        else {
            predicate = function (element) { return element.el === identifier; };
        }
        var len = this.items.length;
        for (var i = 0; i < len; i++) {
            if (predicate(this.items[i])) {
                this.items.splice(i, 1);
                i--;
                len--;
            }
        }
    };
    Queue.prototype.clear = function () {
        this.items = [];
    };
    Queue.prototype.push = function (element) {
        this.items.push(element);
    };
    Queue.prototype.toStream = function () {
        return this.stream;
    };
    return Queue;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Queue;

},{"../streams/stream":6}],5:[function(require,module,exports){
"use strict";
var interfaces_1 = require('./../interfaces');
var Frame = (function () {
    function Frame() {
    }
    Frame.prototype.isMeasure = function () {
        return this.phase === interfaces_1.RAFPhase.MEASURE;
    };
    return Frame;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Frame;

},{"./../interfaces":2}],6:[function(require,module,exports){
"use strict";
var Stream = (function () {
    function Stream(options) {
        if (options === void 0) { options = {}; }
        this.targets = [];
        this.options = options;
        this._process = options.process || (function (identity) { return identity; });
        if (options.init) {
            options.init.call(this);
        }
    }
    Stream.prototype.process = function (value, item) {
        return this._process.call(this, value, item);
    };
    Stream.prototype.write = function (value) {
        var _this = this;
        value = this.process ? this.process(value) : value;
        if (value) {
            if (this.options.queue) {
                this.options.queue.items.forEach(function (item) {
                    _this.targets.forEach(function (target) {
                        target.write(_this.process(value, item));
                    });
                });
            }
            else {
                this.targets.forEach(function (target) {
                    target.write(_this.process(value));
                });
            }
        }
    };
    Stream.prototype.pipe = function (target) {
        this.targets.push(target);
        return target;
    };
    return Stream;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Stream;
var Terminal = (function () {
    function Terminal(terminal) {
        this.targets = [];
        this.terminal = terminal;
    }
    Terminal.prototype.write = function (value) {
        var result = this.terminal(value);
        this.targets.forEach(function (target) {
            target.write(result);
        });
    };
    Terminal.prototype.pipe = function (target) {
        this.targets.push(target);
        return target;
    };
    return Terminal;
}());
exports.Terminal = Terminal;

},{}],7:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var stream_1 = require('./stream');
var window_proxy_1 = require('./../window-proxy');
var frame_1 = require('./frame');
var interfaces_1 = require('./../interfaces');
var RAFStream = (function (_super) {
    __extends(RAFStream, _super);
    function RAFStream() {
        _super.apply(this, arguments);
    }
    RAFStream.prototype.write = function (timestamp) {
        var frame = new frame_1.default();
        frame.timestamp = timestamp;
        frame.phase = interfaces_1.RAFPhase.MEASURE;
        frame.scrollTop = window_proxy_1.default.getScrollTop();
        frame.scrollLeft = window_proxy_1.default.getScrollLeft();
        frame.width = window_proxy_1.default.getWidth();
        frame.height = window_proxy_1.default.getHeight();
        _super.prototype.write.call(this, frame);
        frame.phase = interfaces_1.RAFPhase.MUTATE;
        _super.prototype.write.call(this, frame);
    };
    return RAFStream;
}(stream_1.default));
var raf = new stream_1.default({
    init: function () {
        var _this = this;
        var pollForAF = function () {
            _this.write(Date.now());
            window_proxy_1.default.rAF(pollForAF);
        };
        window_proxy_1.default.rAF(pollForAF);
    },
    process: function (value) {
        if (typeof value === 'number') {
            var frame = new frame_1.default();
            frame.timestamp = value;
            frame.phase = interfaces_1.RAFPhase.MEASURE;
            frame.scrollTop = window_proxy_1.default.getScrollTop();
            frame.scrollLeft = window_proxy_1.default.getScrollLeft();
            frame.width = window_proxy_1.default.getWidth();
            frame.height = window_proxy_1.default.getHeight();
            this.write(frame);
            frame.phase = interfaces_1.RAFPhase.MUTATE;
            return frame;
        }
        else {
            return value;
        }
    }
});
exports.raf = raf;
var measure = raf.pipe(new stream_1.default({
    process: function (frame) {
        if (frame.phase === interfaces_1.RAFPhase.MEASURE) {
            return frame;
        }
    }
}));
exports.measure = measure;
var poll = raf.pipe(new stream_1.default({
    process: function (frame) {
        if (frame.phase !== interfaces_1.RAFPhase.MEASURE) {
            return frame;
        }
    }
}));
exports.poll = poll;
var w = -1;
var h = -1;
var resize = measure.pipe(new stream_1.default({
    process: function (frame) {
        var nH = frame.height;
        var nW = frame.width;
        if (nW !== w || nH !== h) {
            h = nH;
            w = nW;
            return {
                width: w,
                height: h
            };
        }
    }
}));
exports.resize = resize;
var scrollTop = -1;
var scrollLeft = -1;
var scroll = measure.pipe(new stream_1.default({
    process: function (frame) {
        var newScrollTop = frame.scrollTop;
        var newScrollLeft = frame.scrollLeft;
        if (frame.phase === interfaces_1.RAFPhase.MEASURE && (newScrollTop !== scrollTop ||
            newScrollLeft !== scrollLeft)) {
            scrollTop = newScrollTop;
            scrollLeft = newScrollLeft;
            return {
                timestamp: frame.timestamp,
                scrollTop: scrollTop,
                scrollLeft: scrollLeft
            };
        }
    }
}));
exports.scroll = scroll;

},{"./../interfaces":2,"./../window-proxy":8,"./frame":5,"./stream":6}],8:[function(require,module,exports){
"use strict";
var nop = function () { return 0; };
var hasDOM = !!((typeof window !== 'undefined') && window && (typeof document !== 'undefined') && document);
var W = {
    hasDOM: hasDOM,
    getScrollTop: nop,
    getScrollLeft: nop,
    getHeight: nop,
    getWidth: nop,
    rAF: hasDOM && !!window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function () { }
};
function hasDomSetup() {
    var se = typeof document.scrollingElement !== 'undefined';
    W.getScrollTop = se ? function () { return document.scrollingElement.scrollTop; } : function () { return window.scrollY; };
    W.getScrollLeft = se ? function () { return document.scrollingElement.scrollLeft; } : function () { return window.scrollX; };
    W.getHeight = function () { return window.innerHeight; };
    W.getWidth = function () { return window.innerWidth; };
}
if (hasDOM) {
    if (document.readyState !== 'loading') {
        hasDomSetup();
    }
    else {
        document.addEventListener('DOMContentLoaded', hasDomSetup);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = W;

},{}]},{},[1])(1)
});