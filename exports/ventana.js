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

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, scroll_1) {
	    var ventana = {
	        init: function () { },
	        onScroll: function (func) {
	            scroll_1.default.listen(func);
	        }
	    };
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ventana;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6WyJpbml0Iiwib25TY3JvbGwiXSwibWFwcGluZ3MiOiI7SUFJQSxJQUFJLE9BQU8sR0FBRztRQUNaLElBQUksZ0JBQUlBLENBQUNBO1FBQ1QsUUFBUSxZQUFDLElBQWM7WUFDckJDLGdCQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUN0QkEsQ0FBQ0E7S0FTRixDQUFDO0lBRUY7c0JBQWUsT0FBTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNjcm9sbCBmcm9tICcuL3N0cmVhbXMvc2Nyb2xsJztcbmltcG9ydCByZXNpemUgZnJvbSAnLi9zdHJlYW1zL3Jlc2l6ZSc7XG5cblxubGV0IHZlbnRhbmEgPSB7XG4gIGluaXQoKSB7fSxcbiAgb25TY3JvbGwoZnVuYzogRnVuY3Rpb24pIHtcbiAgICBzY3JvbGwubGlzdGVuKGZ1bmMpO1xuICB9XG4gIC8qXG4gIGluaXQoKSB7XG4gICAgcXVldWVzLnJlZ2lzdGVyKCdyZXNpemUnLCB7XG4gICAgICByYWY6IHRydWUsXG4gICAgICBlbGVtZW50OiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgKi9cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHZlbnRhbmE7XG4iXX0=

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, raf_1, frame_1) {
	    var scrollPosition = -1;
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = raf_1.default.filter(function (frame) {
	        var newPos = frame.scrollTop;
	        if (frame.phase === frame_1.default.PHASE.MEASURE && newPos !== scrollPosition) {
	            scrollPosition = newPos;
	            return {
	                timestamp: frame.timestamp,
	                position: newPos
	            };
	        }
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2Nyb2xsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFJQSxJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUV4QjtzQkFBZSxhQUFHLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBWTtRQUNyQyxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssZUFBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksTUFBTSxLQUFLLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDckUsY0FBYyxHQUFHLE1BQU0sQ0FBQztZQUN4QixNQUFNLENBQUM7Z0JBQ0wsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO2dCQUMxQixRQUFRLEVBQUUsTUFBTTthQUNqQixDQUFDO1FBQ0osQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJBRiBmcm9tICcuL3JhZic7XG5pbXBvcnQgRnJhbWUgZnJvbSAnLi9mcmFtZSc7XG5pbXBvcnQgVyBmcm9tICcuLy4uL3dpbmRvdy1wcm94eSc7XG5cbmxldCBzY3JvbGxQb3NpdGlvbiA9IC0xO1xuXG5leHBvcnQgZGVmYXVsdCBSQUYuZmlsdGVyKChmcmFtZTogRnJhbWUpID0+IHtcbiAgbGV0IG5ld1BvcyA9IGZyYW1lLnNjcm9sbFRvcDtcbiAgaWYgKGZyYW1lLnBoYXNlID09PSBGcmFtZS5QSEFTRS5NRUFTVVJFICYmIG5ld1BvcyAhPT0gc2Nyb2xsUG9zaXRpb24pIHtcbiAgICBzY3JvbGxQb3NpdGlvbiA9IG5ld1BvcztcbiAgICByZXR1cm4ge1xuICAgICAgdGltZXN0YW1wOiBmcmFtZS50aW1lc3RhbXAsXG4gICAgICBwb3NpdGlvbjogbmV3UG9zXG4gICAgfTtcbiAgfVxufSk7XG4iXX0=

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(4), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, stream_1, frame_1, window_proxy_1) {
	    var RAFStream = (function (_super) {
	        __extends(RAFStream, _super);
	        function RAFStream() {
	            _super.apply(this, arguments);
	        }
	        RAFStream.prototype.write = function (timestamp) {
	            var frame = {
	                phase: frame_1.default.PHASE.MEASURE,
	                timestamp: timestamp,
	                scrollTop: window_proxy_1.default.getScrollTop(),
	                scrollLeft: window_proxy_1.default.getScrollLeft(),
	                width: window_proxy_1.default.getWidth(),
	                height: window_proxy_1.default.getHeight()
	            };
	            _super.prototype.write.call(this, frame);
	            frame.phase = frame_1.default.PHASE.MUTATE;
	            _super.prototype.write.call(this, frame);
	        };
	        return RAFStream;
	    })(stream_1.default);
	    var RAF = new RAFStream('requestAnimationFrame');
	    var pollForAF = function () {
	        RAF.write(Date.now());
	        window_proxy_1.default.rAF(pollForAF);
	    };
	    window_proxy_1.default.rAF(pollForAF);
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = RAF;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmFmLnRzIl0sIm5hbWVzIjpbIlJBRlN0cmVhbSIsIlJBRlN0cmVhbS5jb25zdHJ1Y3RvciIsIlJBRlN0cmVhbS53cml0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBS0E7UUFBd0JBLDZCQUFNQTtRQUE5QkE7WUFBd0JDLDhCQUFNQTtRQWU5QkEsQ0FBQ0E7UUFkQ0QseUJBQUtBLEdBQUxBLFVBQU9BLFNBQWlCQTtZQUN0QkUsSUFBSUEsS0FBS0EsR0FBU0E7Z0JBQ2hCQSxLQUFLQSxFQUFFQSxlQUFLQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQTtnQkFDMUJBLFdBQUFBLFNBQVNBO2dCQUNUQSxTQUFTQSxFQUFFQSxzQkFBQ0EsQ0FBQ0EsWUFBWUEsRUFBRUE7Z0JBQzNCQSxVQUFVQSxFQUFFQSxzQkFBQ0EsQ0FBQ0EsYUFBYUEsRUFBRUE7Z0JBQzdCQSxLQUFLQSxFQUFFQSxzQkFBQ0EsQ0FBQ0EsUUFBUUEsRUFBRUE7Z0JBQ25CQSxNQUFNQSxFQUFFQSxzQkFBQ0EsQ0FBQ0EsU0FBU0EsRUFBRUE7YUFDdEJBLENBQUNBO1lBRUZBLGdCQUFLQSxDQUFDQSxLQUFLQSxZQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUNuQkEsS0FBS0EsQ0FBQ0EsS0FBS0EsR0FBR0EsZUFBS0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQUE7WUFDaENBLGdCQUFLQSxDQUFDQSxLQUFLQSxZQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUNyQkEsQ0FBQ0E7UUFDSEYsZ0JBQUNBO0lBQURBLENBQUNBLEFBZkQsRUFBd0IsZ0JBQU0sRUFlN0I7SUFFRCxJQUFJLEdBQUcsR0FBRyxJQUFJLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBRWpELElBQUksU0FBUyxHQUFHO1FBQ2QsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN0QixzQkFBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuQixDQUFDLENBQUE7SUFDRCxzQkFBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUVqQjtzQkFBZSxHQUFHLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RyZWFtIGZyb20gJy4vc3RyZWFtJztcbmltcG9ydCBGcmFtZSBmcm9tICcuL2ZyYW1lJztcbmltcG9ydCBSQUZSZXN1bHQgZnJvbSAnLi9yYWYtcmVzdWx0JztcbmltcG9ydCBXIGZyb20gJy4vLi4vd2luZG93LXByb3h5JztcblxuY2xhc3MgUkFGU3RyZWFtIGV4dGVuZHMgU3RyZWFtIHtcbiAgd3JpdGUgKHRpbWVzdGFtcDogbnVtYmVyKSB7XG4gICAgbGV0IGZyYW1lOkZyYW1lID0ge1xuICAgICAgcGhhc2U6IEZyYW1lLlBIQVNFLk1FQVNVUkUsXG4gICAgICB0aW1lc3RhbXAsXG4gICAgICBzY3JvbGxUb3A6IFcuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICBzY3JvbGxMZWZ0OiBXLmdldFNjcm9sbExlZnQoKSxcbiAgICAgIHdpZHRoOiBXLmdldFdpZHRoKCksXG4gICAgICBoZWlnaHQ6IFcuZ2V0SGVpZ2h0KClcbiAgICB9O1xuXG4gICAgc3VwZXIud3JpdGUoZnJhbWUpO1xuICAgIGZyYW1lLnBoYXNlID0gRnJhbWUuUEhBU0UuTVVUQVRFXG4gICAgc3VwZXIud3JpdGUoZnJhbWUpO1xuICB9XG59XG5cbmxldCBSQUYgPSBuZXcgUkFGU3RyZWFtKCdyZXF1ZXN0QW5pbWF0aW9uRnJhbWUnKTtcblxubGV0IHBvbGxGb3JBRiA9ICgpID0+IHtcbiAgUkFGLndyaXRlKERhdGUubm93KCkpO1xuICBXLnJBRihwb2xsRm9yQUYpO1xufVxuVy5yQUYocG9sbEZvckFGKTtcblxuZXhwb3J0IGRlZmF1bHQgUkFGO1xuIl19

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    var Stream = (function () {
	        function Stream(name) {
	            if (name === void 0) { name = 'anonymous'; }
	            this.name = name;
	            this.targets = [];
	        }
	        Stream.prototype.write = function (value) {
	            this.targets.forEach(function (target) {
	                if (target instanceof Stream) {
	                    target.write(value);
	                }
	                else if (typeof target === 'function') {
	                    target(value);
	                }
	            });
	        };
	        Stream.prototype.listen = function (target) {
	            this.targets.push(target);
	        };
	        Stream.prototype.throttle = function () {
	        };
	        Stream.prototype.filter = function (filter) {
	            var filteredStream = new Stream();
	            this.listen(function (value) {
	                var filtered = filter(value);
	                if (filtered) {
	                    filteredStream.write(filtered);
	                }
	            });
	            return filteredStream;
	        };
	        return Stream;
	    })();
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = Stream;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RyZWFtLnRzIl0sIm5hbWVzIjpbIlN0cmVhbSIsIlN0cmVhbS5jb25zdHJ1Y3RvciIsIlN0cmVhbS53cml0ZSIsIlN0cmVhbS5saXN0ZW4iLCJTdHJlYW0udGhyb3R0bGUiLCJTdHJlYW0uZmlsdGVyIl0sIm1hcHBpbmdzIjoiO0lBQUE7UUFHRUEsZ0JBQWFBLElBQWtCQTtZQUFsQkMsb0JBQWtCQSxHQUFsQkEsa0JBQWtCQTtZQUM3QkEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7WUFDakJBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLEVBQUVBLENBQUNBO1FBQ3BCQSxDQUFDQTtRQUNERCxzQkFBS0EsR0FBTEEsVUFBTUEsS0FBVUE7WUFDZEUsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBQUEsTUFBTUE7Z0JBQ3pCQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxZQUFZQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDN0JBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO2dCQUN0QkEsQ0FBQ0E7Z0JBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLE9BQU9BLE1BQU1BLEtBQUtBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBO29CQUN4Q0EsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2hCQSxDQUFDQTtZQUNIQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNMQSxDQUFDQTtRQUNERix1QkFBTUEsR0FBTkEsVUFBT0EsTUFBeUJBO1lBQzlCRyxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUM1QkEsQ0FBQ0E7UUFDREgseUJBQVFBLEdBQVJBO1FBRUFJLENBQUNBO1FBQ0RKLHVCQUFNQSxHQUFOQSxVQUFPQSxNQUFnQkE7WUFDckJLLElBQUlBLGNBQWNBLEdBQUdBLElBQUlBLE1BQU1BLEVBQUVBLENBQUNBO1lBQ2xDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxVQUFDQSxLQUFVQTtnQkFDckJBLElBQUlBLFFBQVFBLEdBQUdBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO2dCQUM3QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ2JBLGNBQWNBLENBQUNBLEtBQUtBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO2dCQUNqQ0EsQ0FBQ0E7WUFDSEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDSEEsTUFBTUEsQ0FBQ0EsY0FBY0EsQ0FBQ0E7UUFDeEJBLENBQUNBO1FBQ0hMLGFBQUNBO0lBQURBLENBQUNBLEFBaENELElBZ0NDO0lBTUQ7c0JBQWUsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU3RyZWFtIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0YXJnZXRzOiBBcnJheTxTdHJlYW0gfCBGdW5jdGlvbj47XG4gIGNvbnN0cnVjdG9yIChuYW1lID0gJ2Fub255bW91cycpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFyZ2V0cyA9IFtdO1xuICB9XG4gIHdyaXRlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCh0YXJnZXQgPT4ge1xuICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIFN0cmVhbSkge1xuICAgICAgICB0YXJnZXQud3JpdGUodmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRhcmdldCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgbGlzdGVuKHRhcmdldDogU3RyZWFtIHwgRnVuY3Rpb24pIHtcbiAgICB0aGlzLnRhcmdldHMucHVzaCh0YXJnZXQpO1xuICB9XG4gIHRocm90dGxlKCkge1xuXG4gIH1cbiAgZmlsdGVyKGZpbHRlcjogRnVuY3Rpb24pIHtcbiAgICBsZXQgZmlsdGVyZWRTdHJlYW0gPSBuZXcgU3RyZWFtKCk7XG4gICAgdGhpcy5saXN0ZW4oKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgIGxldCBmaWx0ZXJlZCA9IGZpbHRlcih2YWx1ZSk7XG4gICAgICBpZiAoZmlsdGVyZWQpIHtcbiAgICAgICAgZmlsdGVyZWRTdHJlYW0ud3JpdGUoZmlsdGVyZWQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZFN0cmVhbTtcbiAgfVxufVxuXG4vKiBUT0RPXG4gIC0gQWRkIHF1ZXVlIGZlYXR1cmUgdG8gbGlzdGVuLiBBbGxvdyBvcmRlcmVkIHF1ZXVlcyBmb3IgYSBzdHJlYW0uXG4qL1xuXG5leHBvcnQgZGVmYXVsdCBTdHJlYW07XG4iXX0=

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    var RAFPhase;
	    (function (RAFPhase) {
	        RAFPhase[RAFPhase["MEASURE"] = 0] = "MEASURE";
	        RAFPhase[RAFPhase["MUTATE"] = 1] = "MUTATE";
	    })(RAFPhase || (RAFPhase = {}));
	    var Frame = (function () {
	        function Frame() {
	        }
	        Frame.PHASE = RAFPhase;
	        return Frame;
	    })();
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = Frame;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmcmFtZS50cyJdLCJuYW1lcyI6WyJSQUZQaGFzZSIsIkZyYW1lIiwiRnJhbWUuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7SUFBQSxJQUFLLFFBR0o7SUFIRCxXQUFLLFFBQVE7UUFDWEEsNkNBQU9BLENBQUFBO1FBQ1BBLDJDQUFNQSxDQUFBQTtJQUNSQSxDQUFDQSxFQUhJLFFBQVEsS0FBUixRQUFRLFFBR1o7SUFFRDtRQUFBQztRQVNBQyxDQUFDQTtRQVJRRCxXQUFLQSxHQUFHQSxRQUFRQSxDQUFDQTtRQVExQkEsWUFBQ0E7SUFBREEsQ0FBQ0EsQUFURCxJQVNDO0lBRUQ7c0JBQWUsS0FBSyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZW51bSBSQUZQaGFzZSB7XG4gIE1FQVNVUkUsXG4gIE1VVEFURVxufVxuXG5jbGFzcyBGcmFtZSB7XG4gIHN0YXRpYyBQSEFTRSA9IFJBRlBoYXNlO1xuXG4gIHBoYXNlOiBSQUZQaGFzZTtcbiAgdGltZXN0YW1wOiBudW1iZXI7XG4gIHNjcm9sbFRvcDogbnVtYmVyO1xuICBzY3JvbGxMZWZ0OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGcmFtZTtcbiJdfQ==

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    var hasDOM = (typeof window !== 'undefined') && window
	        && (typeof document !== 'undefined') && document;
	    var nop = function () { return 0; };
	    var W = {};
	    W.getScrollTop = W.getScrollLeft = W.getHeight = W.getWidth = nop;
	    W.rAF = hasDOM && window.requestAnimationFrame.bind(window);
	    function hasDomSetup() {
	        var se = typeof document.scrollingElement !== 'undefined';
	        W.getScrollTop = se ? function () { return document.scrollingElement.scrollTop; } : function () { return window.scrollY; };
	        W.getScrollLeft = se ? function () { return document.scrollingElement.scrollLeft; } : function () { return window.scrollX; };
	        W.getHeight = function () { return window.innerWidth; };
	        W.getWidth = function () { return window.innerHeight; };
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
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LXByb3h5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2luZG93LXByb3h5LnRzIl0sIm5hbWVzIjpbImhhc0RvbVNldHVwIl0sIm1hcHBpbmdzIjoiO0lBQ0EsSUFBSSxNQUFNLEdBQUcsQ0FBQyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUMsSUFBSSxNQUFNO1dBQy9DLENBQUMsT0FBTyxRQUFRLEtBQUssV0FBVyxDQUFDLElBQUksUUFBUSxDQUFDO0lBQ3JELElBQUksR0FBRyxHQUFHLGNBQU0sT0FBQSxDQUFDLEVBQUQsQ0FBQyxDQUFDO0lBQ2xCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNYLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO0lBRWxFLENBQUMsQ0FBQyxHQUFHLEdBQUcsTUFBTSxJQUFVLE1BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFbkU7UUFDRUEsSUFBSUEsRUFBRUEsR0FBR0EsT0FBYUEsUUFBU0EsQ0FBQ0EsZ0JBQWdCQSxLQUFLQSxXQUFXQSxDQUFDQTtRQUNqRUEsQ0FBQ0EsQ0FBQ0EsWUFBWUEsR0FBR0EsRUFBRUEsR0FBR0EsY0FBTUEsT0FBTUEsUUFBU0EsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxTQUFTQSxFQUExQ0EsQ0FBMENBLEdBQUdBLGNBQU1BLE9BQU1BLE1BQU9BLENBQUNBLE9BQU9BLEVBQXJCQSxDQUFxQkEsQ0FBQ0E7UUFDckdBLENBQUNBLENBQUNBLGFBQWFBLEdBQUdBLEVBQUVBLEdBQUdBLGNBQU1BLE9BQU1BLFFBQVNBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsVUFBVUEsRUFBM0NBLENBQTJDQSxHQUFHQSxjQUFNQSxPQUFNQSxNQUFPQSxDQUFDQSxPQUFPQSxFQUFyQkEsQ0FBcUJBLENBQUNBO1FBQ3ZHQSxDQUFDQSxDQUFDQSxTQUFTQSxHQUFHQSxjQUFNQSxPQUFNQSxNQUFPQSxDQUFDQSxVQUFVQSxFQUF4QkEsQ0FBd0JBLENBQUNBO1FBQzdDQSxDQUFDQSxDQUFDQSxRQUFRQSxHQUFHQSxjQUFNQSxPQUFNQSxNQUFPQSxDQUFDQSxXQUFXQSxFQUF6QkEsQ0FBeUJBLENBQUNBO0lBQy9DQSxDQUFDQTtJQUVELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDWCxFQUFFLENBQUMsQ0FBTyxRQUFTLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDN0MsV0FBVyxFQUFFLENBQUM7UUFDaEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0EsUUFBUyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3BFLENBQUM7SUFDSCxDQUFDO0lBRUQ7c0JBQWUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZGV0ZWN0IHRoZSBwcmVzZW5jZSBvZiBET01cbmxldCBoYXNET00gPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpICYmIHdpbmRvd1xuICAgICYmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSAmJiBkb2N1bWVudDtcbnZhciBub3AgPSAoKSA9PiAwO1xudmFyIFcgPSB7fTtcblcuZ2V0U2Nyb2xsVG9wID0gVy5nZXRTY3JvbGxMZWZ0ID0gVy5nZXRIZWlnaHQgPSBXLmdldFdpZHRoID0gbm9wO1xuXG5XLnJBRiA9IGhhc0RPTSAmJiAoPGFueT53aW5kb3cpLnJlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKHdpbmRvdyk7XG5cbmZ1bmN0aW9uIGhhc0RvbVNldHVwKCkge1xuICBsZXQgc2UgPSB0eXBlb2YgKDxhbnk+ZG9jdW1lbnQpLnNjcm9sbGluZ0VsZW1lbnQgIT09ICd1bmRlZmluZWQnO1xuICBXLmdldFNjcm9sbFRvcCA9IHNlID8gKCkgPT4gKDxhbnk+ZG9jdW1lbnQpLnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wIDogKCkgPT4gKDxhbnk+d2luZG93KS5zY3JvbGxZO1xuICBXLmdldFNjcm9sbExlZnQgPSBzZSA/ICgpID0+ICg8YW55PmRvY3VtZW50KS5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbExlZnQgOiAoKSA9PiAoPGFueT53aW5kb3cpLnNjcm9sbFg7XG4gIFcuZ2V0SGVpZ2h0ID0gKCkgPT4gKDxhbnk+d2luZG93KS5pbm5lcldpZHRoO1xuICBXLmdldFdpZHRoID0gKCkgPT4gKDxhbnk+d2luZG93KS5pbm5lckhlaWdodDtcbn1cblxuaWYgKGhhc0RPTSkge1xuICBpZiAoKDxhbnk+ZG9jdW1lbnQpLnJlYWR5U3RhdGUgIT09ICdsb2FkaW5nJykge1xuICAgIGhhc0RvbVNldHVwKCk7XG4gIH0gZWxzZSB7XG4gICAgKDxhbnk+ZG9jdW1lbnQpLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBoYXNEb21TZXR1cCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVztcbiJdfQ==

/***/ }
/******/ ])
});
;