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

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module, __webpack_require__(1), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, module, _streamsScroll, _streamsResize) {
	  'use strict';

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	  var _scroll = _interopRequireDefault(_streamsScroll);

	  var _resize = _interopRequireDefault(_streamsResize);

	  var ventana = {
	    init: function init() {},
	    onScroll: function onScroll(func) {
	      _scroll['default'].listen(func);
	    }
	    /*
	    init() {
	      queues.register('resize', {
	        raf: true,
	        element: true
	      });
	    }
	    */
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

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	  var _Stream = _interopRequireDefault(_stream);

	  var RAF = new _Stream['default']('requestAnimationFrame');

	  var pollForAF = function pollForAF() {
	    RAF.write({
	      timestamp: Date.now()
	    });
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
	    function Stream(name) {
	      _classCallCheck(this, Stream);

	      this.name = name;
	      this.targets = [];
	    }

	    /* TODO
	      - Add queue feature to listen. Allow ordered queues for a stream.
	    */

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
	      value: function merge(streams, reduce) {
	        //for ()
	      }
	    }]);

	    return Stream;
	  })();

	  module.exports = Stream;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	  // detect the presence of DOM
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

	  var getScrollTop;
	  exports.getScrollTop = getScrollTop;
	  var getScrollLeft;
	  exports.getScrollLeft = getScrollLeft;
	  var getWidth;
	  exports.getWidth = getWidth;
	  var getHeight;
	  exports.getHeight = getHeight;
	  var rAF;
	  exports.rAF = rAF;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module, __webpack_require__(2), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, module, _raf, _windowProxy) {
	  'use strict';

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	  var _RAF = _interopRequireDefault(_raf);

	  var h = (0, _windowProxy.getHeight)();
	  var w = (0, _windowProxy.getWidth)();

	  module.exports = _RAF['default'].filter(function (frame) {
	    var nH = (0, _windowProxy.getHeight)();
	    var nW = (0, _windowProxy.getWidth)();
	    if (nW !== w || nH !== h) {
	      h = nH;
	      w = nW;
	      return {
	        width: w,
	        height: h
	      };
	    }
	  });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }
/******/ ])
});
;