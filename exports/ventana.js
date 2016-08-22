(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ventana = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var window_proxy_1 = require('./window-proxy');
var streams_1 = require('./streams/streams');
exports.RAFStream = streams_1.raf;
var element_1 = require('./queues/element');
exports.QueueElement = element_1.default;
var frame_1 = require('./streams/frame');
exports.Frame = frame_1.default;
var raf_queue_1 = require('./queues/raf-queue');
exports.RAFQueue = raf_queue_1.default;
var queue_1 = require('./queues/queue');
exports.Queue = queue_1.default;
var stream_1 = require('./streams/stream');
exports.Stream = stream_1.default;
var stream_2 = require('./streams/stream');
exports.stream = stream_2.stream;
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
streams_1.scroll.pipe(function (arg) {
    listeners.move.forEach(function (callback) {
        callback.call(null, arg);
    });
});
streams_1.resize.pipe(function (arg) {
    listeners.resize.forEach(function (callback) {
        callback.call(null, arg);
    });
});
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
streams_1.poll.pipe(function (frame) {
    while (taskQueue.length > 0) {
        taskQueue.pop().call(null, frame);
    }
});
function on(eventName, callback) {
    listeners[eventName].push(callback);
}
exports.on = on;
function queue(callback) {
    taskQueue.push(callback);
}
exports.queue = queue;

},{"./queues/element":3,"./queues/queue":4,"./queues/raf-queue":5,"./streams/frame":6,"./streams/stream":7,"./streams/streams":8,"./window-proxy":9}],2:[function(require,module,exports){
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
    function Queue(name, collect) {
        this.name = name;
        this.items = [];
        this.collect = collect;
        this.stream = new stream_1.default(name + ' output stream');
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
    Queue.prototype.callOnPopulate = function (callback) {
        if (this.items.length > 0) {
            callback.call(this);
        }
        else {
            this.populateCallbacks.push(callback);
        }
    };
    Queue.prototype.clear = function () {
        this.items = [];
    };
    Queue.prototype.push = function (element) {
        this.items.push(element);
        while (this.populateCallbacks.length > 0) {
            this.populateCallbacks.pop().call(this);
        }
    };
    Queue.prototype.toStream = function () {
        return this.stream;
    };
    Queue.prototype.tap = function (value) {
        var _this = this;
        this.items.map(function (element) {
            if (!_this.intercept(value, element)) {
                return _this.collect(_this.stream.write.bind(_this.stream), value, element);
            }
            return element;
        });
    };
    Queue.prototype.intercept = function (value, element) {
        return false;
    };
    return Queue;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Queue;

},{"../streams/stream":7}],5:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var queue_1 = require('./queue');
var RAFQueue = (function (_super) {
    __extends(RAFQueue, _super);
    function RAFQueue() {
        _super.apply(this, arguments);
    }
    RAFQueue.prototype.intercept = function (frame, element) {
        if (frame.isMeasure()) {
            element.bcr = element.el.getBoundingClientRect();
            return true;
        }
        return false;
    };
    return RAFQueue;
}(queue_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RAFQueue;

},{"./queue":4}],6:[function(require,module,exports){
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

},{"./../interfaces":2}],7:[function(require,module,exports){
"use strict";
var Stream = (function () {
    function Stream(source) {
        var _this = this;
        this.instanceInit = function () { };
        this.initCalled = false;
        this.name = 'anonymous';
        if (typeof source === 'function') {
            this.instanceInit = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                _this.write.apply(_this, args);
            };
        }
        else if (typeof source === 'string') {
            this.name = source;
        }
        this.targets = [];
    }
    Stream.prototype.init = function () {
        if (!this.initCalled) {
            this.initCalled = true;
            this.onInit.call(this);
        }
    };
    Stream.prototype.onInit = function () {
        this.instanceInit();
    };
    Stream.prototype.write = function (value) {
        this.targets.forEach(function (target, index) {
            if (target.endpoint instanceof Stream) {
                target.stream.write(value);
            }
            else if (typeof target.endpoint === 'function') {
                target.stream.write(target.endpoint(value));
            }
            else if (typeof target.endpoint.tap === 'function') {
                target.endpoint.tap(value);
            }
        });
    };
    Stream.prototype.pipe = function (target) {
        var _this = this;
        if (target instanceof Stream) {
            this.targets.push({
                stream: target,
                endpoint: target
            });
            return target;
        }
        else if (target instanceof Function) {
            var stream_1 = new Stream();
            this.targets.push({
                endpoint: function (result) {
                    stream_1.write(target(result));
                },
                stream: stream_1
            });
            this.init();
            return stream_1;
        }
        else {
            var stream_2 = target.toStream();
            this.targets.push({
                stream: stream_2,
                endpoint: target
            });
            target.callOnPopulate(function () {
                _this.init();
            });
            return stream_2;
        }
    };
    Stream.join = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var cache = new Array(args.length);
        return new Stream(function (write) {
            var _this = this;
            args.forEach(function (stream, i) {
                stream.pipe(function (value) {
                    cache[i] = value;
                    _this.write(cache);
                });
            });
        });
    };
    Stream.prototype.filter = function (first, second) {
        var _this = this;
        var state = typeof first !== 'function' && first;
        var hasState = !!state;
        var filter = hasState ? second : first;
        return new Stream(function (write) {
            _this.pipe(function (value) {
                var filtered = hasState ? filter(state, value) : filter(value);
                if (filtered) {
                    write(filtered);
                }
            });
        });
    };
    return Stream;
}());
exports.Stream = Stream;
function toStream(sof) {
    if (typeof sof === 'function') {
        return new Stream(sof);
    }
    else if (sof instanceof Stream) {
        return sof;
    }
}
function stream() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    args[0] = args[0] || new Stream();
    return args.length > 1 ? Stream.join.apply(null, args.map(toStream)) : args[0];
}
exports.stream = stream;
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Stream;

},{}],8:[function(require,module,exports){
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
    RAFStream.prototype.onInit = function () {
        var _this = this;
        var pollForAF = function () {
            _this.write(Date.now());
            window_proxy_1.default.rAF(pollForAF);
        };
        window_proxy_1.default.rAF(pollForAF);
        _super.prototype.onInit.call(this);
    };
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
exports.RAFStream = RAFStream;
var raf = new RAFStream('requestAnimationFrame');
exports.raf = raf;
var measure = raf.filter(function (frame) {
    if (frame.phase === interfaces_1.RAFPhase.MEASURE) {
        return frame;
    }
});
exports.measure = measure;
var poll = raf.filter(function (frame) {
    if (frame.phase !== interfaces_1.RAFPhase.MEASURE) {
        return frame;
    }
});
exports.poll = poll;
var w = -1;
var h = -1;
var resize = measure.filter(function (frame) {
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
});
exports.resize = resize;
var scrollTop = -1;
var scrollLeft = -1;
var scroll = measure.filter(function (frame) {
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
});
exports.scroll = scroll;

},{"./../interfaces":2,"./../window-proxy":9,"./frame":6,"./stream":7}],9:[function(require,module,exports){
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