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

	  var _scrollStream = _interopRequireDefault(_streamsScroll);

	  var ventana = {
	    init: function init() {},
	    onScroll: function onScroll(func) {
	      _scrollStream['default'].listen(func);
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

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, module, _raf) {
	  'use strict';

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	  var _RAF = _interopRequireDefault(_raf);

	  function getScrollTop() {
	    return document.scrollingElement.scrollTop;
	  }

	  var scrollPosition = 0;

	  module.exports = _RAF['default'].filter(function (frame) {
	    var newPos = getScrollTop();
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

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module, __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, module, _stream) {
	  'use strict';

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	  var _Stream = _interopRequireDefault(_stream);

	  var RAF = new _Stream['default']();

	  var hasDOM = typeof window !== 'undefined' && window && typeof document !== 'undefined' && document;
	  var rAF = hasDOM && window.requestAnimationFrame;

	  var pollForAF = function pollForAF() {
	    RAF.write({
	      timestamp: Date.now()
	    });
	    rAF(pollForAF);
	  };
	  rAF(pollForAF);

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
	      _classCallCheck(this, Stream);

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
	    }]);

	    return Stream;
	  })();

	  module.exports = Stream;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }
/******/ ])
});
;