(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("ventana", [], factory);
	else if(typeof exports === 'object')
		exports["ventana"] = factory();
	else
		root["ventana"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, module, _streamsScroll) {
	    'use strict';

	    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	    var _scroll = _interopRequireDefault(_streamsScroll);

	    var ventana = {
	        init: function init() {},
	        onScroll: function onScroll(func) {
	            _scroll['default'].listen(func);
	        }
	    };
	    module.exports = ventana;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module, __webpack_require__(2), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, module, _raf, _windowProxy) {
	    'use strict';

	    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	    var _RAF = _interopRequireDefault(_raf);

	    var scrollPosition = (0, _windowProxy.getScrollTop)();
	    module.exports = _RAF['default'].filter(function (frame) {
	        var newPos = (0, _windowProxy.getScrollTop)();
	        if (newPos !== scrollPosition) {
	            scrollPosition = newPos;
	            return {
	                timestamp: frame.timestamp,
	                position: newPos
	            };
	        }
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module, __webpack_require__(3), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, module, _stream, _windowProxy) {
	    'use strict';

	    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	    var _Stream2 = _interopRequireDefault(_stream);

	    var RAF = new _Stream2['default']('requestAnimationFrame');

	    var RAFStream = (function (_Stream) {
	        _inherits(RAFStream, _Stream);

	        function RAFStream() {
	            _classCallCheck(this, RAFStream);

	            _get(Object.getPrototypeOf(RAFStream.prototype), 'constructor', this).apply(this, arguments);
	        }

	        _createClass(RAFStream, [{
	            key: 'write',
	            value: function write(timestamp) {
	                var measure = {
	                    MEASURE: true,
	                    timestamp: timestamp
	                };
	                var mutate = {
	                    MUTATE: true,
	                    timestamp: timestamp
	                };
	                _get(Object.getPrototypeOf(RAFStream.prototype), 'write', this).call(this, measure);
	                _get(Object.getPrototypeOf(RAFStream.prototype), 'write', this).call(this, mutate);
	            }
	        }]);

	        return RAFStream;
	    })(_Stream2['default']);

	    var pollForAF = function pollForAF() {
	        RAF.write(Date.now());
	        (0, _windowProxy.rAF)(pollForAF);
	    };
	    (0, _windowProxy.rAF)(pollForAF);
	    module.exports = RAF;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, module) {
	    'use strict';

	    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	    var Stream = (function () {
	        function Stream() {
	            var name = arguments.length <= 0 || arguments[0] === undefined ? 'anonymous' : arguments[0];

	            _classCallCheck(this, Stream);

	            this.name = name;
	            this.targets = [];
	        }

	        _createClass(Stream, [{
	            key: 'write',
	            value: function write(value) {
	                this.targets.forEach(function (target) {
	                    if (target instanceof Stream) {
	                        target.write(value);
	                    } else if (typeof target === 'function') {
	                        target(value);
	                    }
	                });
	            }
	        }, {
	            key: 'listen',
	            value: function listen(target) {
	                this.targets.push(target);
	            }
	        }, {
	            key: 'throttle',
	            value: function throttle() {}
	        }, {
	            key: 'filter',
	            value: function filter(_filter) {
	                var filteredStream = new Stream();
	                this.listen(function (value) {
	                    var filtered = _filter(value);
	                    if (filtered) {
	                        filteredStream.write(filtered);
	                    }
	                });
	                return filteredStream;
	            }
	        }], [{
	            key: 'merge',
	            value: function merge(streams, reduce) {}
	        }]);

	        return Stream;
	    })();

	    module.exports = Stream;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, '__esModule', {
	        value: true
	    });
	    var hasDOM = typeof window !== 'undefined' && window && typeof document !== 'undefined' && document;
	    var rAF = hasDOM && window.requestAnimationFrame;
	    var getScrollTop, getScrollLeft, getHeight, getWidth;
	    exports.getScrollTop = getScrollTop = exports.getScrollLeft = getScrollLeft = exports.getHeight = getHeight = exports.getWidth = getWidth = function () {
	        return 0;
	    };
	    function hasDomSetup() {
	        var se = typeof document.scrollingElement !== 'undefined';
	        exports.getScrollTop = getScrollTop = se ? function () {
	            return document.scrollingElement.scrollTop;
	        } : function () {
	            return window.scrollY;
	        };
	        exports.getScrollLeft = getScrollLeft = se ? function () {
	            return document.scrollingElement.scrollLeft;
	        } : function () {
	            return window.scrollX;
	        };
	        exports.getHeight = getHeight = function () {
	            return window.innerWidth;
	        };
	        exports.getWidth = getWidth = function () {
	            return window.innerHeight;
	        };
	    }
	    if (hasDOM) {
	        document.addEventListener('DOMContentLoaded', hasDomSetup);
	    }
	    exports.getScrollTop = getScrollTop;
	    exports.getScrollLeft = getScrollLeft;
	    exports.getWidth = getWidth;
	    exports.getHeight = getHeight;
	    exports.rAF = rAF;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }
/******/ ])
});
;