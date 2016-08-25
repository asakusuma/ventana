(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ventana = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var window_proxy_1 = require('./window-proxy');
var streams_1 = require('./streams/streams');
exports.RAFStream = streams_1.raf;
var element_1 = require('./queues/element');
exports.QueueElement = element_1.default;
exports.QueueDOMElement = element_1.QueueDOMElement;
var frame_1 = require('./streams/frame');
exports.Frame = frame_1.default;
var queue_1 = require('./queues/queue');
exports.Queue = queue_1.default;
exports.DOMQueue = queue_1.DOMQueue;
var stream_1 = require('./streams/stream');
exports.Terminal = stream_1.Terminal;
exports.Stream = stream_1.default;
var queues = {
    move: new queue_1.default('move'),
    resize: new queue_1.default('resize'),
    destroy: new queue_1.default('destroy'),
    hide: new queue_1.default('hide'),
    show: new queue_1.default('show')
};
var hideStream = new stream_1.default();
var showStream = new stream_1.default();
var destroyStream = new stream_1.default();
var taskQueue = new queue_1.default('tasks');
var process = function (frame, item) {
    return item.callback;
};
var callbackTerminal = new stream_1.Terminal(function (callback) { return callback(); });
hideStream.pipe(new stream_1.default({
    queue: queues.hide,
    process: process
})).pipe(callbackTerminal);
destroyStream.pipe(new stream_1.default({
    queue: queues.destroy,
    process: process
})).pipe(callbackTerminal);
showStream.pipe(new stream_1.default({
    queue: queues.show,
    process: process
})).pipe(callbackTerminal);
streams_1.scroll.pipe(new stream_1.default({
    queue: queues.move,
    process: process
})).pipe(callbackTerminal);
streams_1.resize.pipe(new stream_1.default({
    queue: queues.resize,
    process: process
})).pipe(callbackTerminal);
streams_1.poll.pipe(new stream_1.default({
    consume: true,
    queue: taskQueue,
    process: process
})).pipe(callbackTerminal);
if (window_proxy_1.default.hasDOM) {
    window.addEventListener('unload', destroyStream.write);
    document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'visible') {
            showStream.write(Date.now());
        }
        else {
            hideStream.write(Date.now());
        }
    });
}
function on(eventName, callback) {
    queues[eventName].push({
        callback: callback,
        id: null
    });
}
exports.on = on;
function queue(callback) {
    taskQueue.push({
        callback: callback,
        id: null
    });
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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var QueueElement = (function () {
    function QueueElement() {
    }
    return QueueElement;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = QueueElement;
var QueueDOMElement = (function (_super) {
    __extends(QueueDOMElement, _super);
    function QueueDOMElement() {
        _super.apply(this, arguments);
    }
    return QueueDOMElement;
}(QueueElement));
exports.QueueDOMElement = QueueDOMElement;

},{}],4:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var stream_1 = require('../streams/stream');
var Queue = (function () {
    function Queue(name) {
        this.populateCallbacks = [];
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
        if (this.items.length === 0) {
            this.populateCallbacks.forEach(function (callback) { return callback(); });
        }
        this.items.push(element);
    };
    Queue.prototype.toStream = function () {
        return this.stream;
    };
    Queue.prototype.callOnPopulate = function (callback) {
        this.populateCallbacks.push(callback);
    };
    return Queue;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Queue;
var DOMQueue = (function (_super) {
    __extends(DOMQueue, _super);
    function DOMQueue() {
        _super.apply(this, arguments);
    }
    return DOMQueue;
}(Queue));
exports.DOMQueue = DOMQueue;

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
        var _this = this;
        if (options === void 0) { options = {}; }
        this.targets = [];
        this.refCount = 0;
        this.populateCallbacks = [];
        this.options = options;
        this._process = options.process || (function (identity) { return identity; });
        if (options.queue) {
            options.queue.callOnPopulate(function () {
                _this.onPopulate();
            });
        }
    }
    Stream.prototype.process = function (value, item) {
        return this._process.call(this, value, item);
    };
    Stream.prototype.handleQueue = function (value, item) {
        var _this = this;
        this.targets.forEach(function (target) {
            var result = _this.process(value, item);
            if (result) {
                target.write(result);
            }
        });
    };
    Stream.prototype.write = function (value) {
        var _this = this;
        if (this.options.queue) {
            if (this.options.consume) {
                while (this.options.queue.items.length > 0) {
                    this.handleQueue(value, this.options.queue.items.pop());
                }
            }
            else {
                this.options.queue.items.forEach(function (item) { return _this.handleQueue(value, item); });
            }
        }
        else if (value = this.process(value)) {
            this.targets.forEach(function (target) {
                target.write(value);
            });
        }
    };
    Stream.prototype.onPopulate = function () {
        if (this.refCount < 1 && this.options.init) {
            this.options.init.call(this);
        }
        this.populateCallbacks.forEach(function (callback) { return callback(); });
        this.refCount++;
    };
    Stream.prototype.pipe = function (target) {
        var _this = this;
        this.targets.push(target);
        if (!this.options.queue) {
            target.callOnPopulate(function () {
                _this.onPopulate();
            });
        }
        return target;
    };
    Stream.prototype.callOnPopulate = function (callback) {
        this.populateCallbacks.push(callback);
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
    Terminal.prototype.callOnPopulate = function (callback) {
        callback();
    };
    return Terminal;
}());
exports.Terminal = Terminal;

},{}],7:[function(require,module,exports){
"use strict";
var stream_1 = require('./stream');
var window_proxy_1 = require('./../window-proxy');
var frame_1 = require('./frame');
var interfaces_1 = require('./../interfaces');
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
var resize = measure.pipe(new stream_1.default({
    init: function () {
        this.w = window_proxy_1.default.getWidth();
        this.h = window_proxy_1.default.getHeight();
    },
    process: function (frame) {
        var nH = frame.height;
        var nW = frame.width;
        if (nW !== this.w || nH !== this.h) {
            this.h = nH;
            this.w = nW;
            return {
                width: nW,
                height: nH
            };
        }
    }
}));
exports.resize = resize;
var scroll = measure.pipe(new stream_1.default({
    init: function () {
        this.scrollTop = window_proxy_1.default.getScrollTop();
        this.scrollLeft = window_proxy_1.default.getScrollLeft();
    },
    process: function (frame) {
        var newScrollTop = frame.scrollTop;
        var newScrollLeft = frame.scrollLeft;
        if (frame.phase === interfaces_1.RAFPhase.MEASURE && (newScrollTop !== this.scrollTop ||
            newScrollLeft !== this.scrollLeft)) {
            this.scrollTop = newScrollTop;
            this.scrollLeft = newScrollLeft;
            return {
                timestamp: frame.timestamp,
                newScrollTop: newScrollTop,
                newScrollLeft: newScrollLeft
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