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

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1), __webpack_require__(2), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, scroll_1, raf_1, queue_1) {
	    var viewportQueue = new queue_1.default('Viewport', function (frame, element) {
	        if (frame.isMeasure()) {
	            element.bcr = element.el.getBoundingClientRect();
	        }
	        else {
	            var bcr = element.bcr;
	            var inViewport = bcr.top < frame.height && bcr.top + bcr.height > 0;
	            if (!element.inViewport && inViewport) {
	                element.callback();
	            }
	            element.inViewport = inViewport;
	        }
	    });
	    raf_1.default.listen(viewportQueue);
	    var ventana = {
	        init: function () { },
	        onScroll: function (func) {
	            scroll_1.default.listen(func);
	        },
	        onViewport: function (id, el, callback) {
	            var element = {
	                id: id,
	                el: el,
	                callback: callback
	            };
	            viewportQueue.push(element);
	        }
	    };
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ventana;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6WyJpbml0Iiwib25TY3JvbGwiLCJvblZpZXdwb3J0Il0sIm1hcHBpbmdzIjoiO0lBTUEsSUFBSSxhQUFhLEdBQUcsSUFBSSxlQUFLLENBQUMsVUFBVSxFQUFFLFVBQUMsS0FBWSxFQUFFLE9BQWdCO1FBQ3ZFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDbkQsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUN0QixJQUFJLFVBQVUsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNwRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDdEMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3JCLENBQUM7WUFDRCxPQUFPLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUNsQyxDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxhQUFHLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRTFCLElBQUksT0FBTyxHQUFHO1FBQ1osSUFBSSxnQkFBSUEsQ0FBQ0E7UUFDVCxRQUFRLFlBQUMsSUFBYztZQUNyQkMsZ0JBQU1BLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQ3RCQSxDQUFDQTtRQUNELFVBQVUsWUFBQyxFQUFVLEVBQUUsRUFBVSxFQUFFLFFBQWtCO1lBQ25EQyxJQUFJQSxPQUFPQSxHQUFZQTtnQkFDckJBLElBQUFBLEVBQUVBO2dCQUNGQSxJQUFBQSxFQUFFQTtnQkFDRkEsVUFBQUEsUUFBUUE7YUFDVEEsQ0FBQ0E7WUFDRkEsYUFBYUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7UUFDOUJBLENBQUNBO0tBQ0YsQ0FBQztJQUVGO3NCQUFlLE9BQU8sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzY3JvbGwgZnJvbSAnLi9zdHJlYW1zL3Njcm9sbCc7XG5pbXBvcnQgcmFmIGZyb20gJy4vc3RyZWFtcy9yYWYnO1xuaW1wb3J0IEZyYW1lIGZyb20gJy4vc3RyZWFtcy9mcmFtZSc7XG5pbXBvcnQgUXVldWUgZnJvbSAnLi9xdWV1ZXMvcXVldWUnO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSAnLi9xdWV1ZXMvZWxlbWVudCc7XG5cbmxldCB2aWV3cG9ydFF1ZXVlID0gbmV3IFF1ZXVlKCdWaWV3cG9ydCcsIChmcmFtZTogRnJhbWUsIGVsZW1lbnQ6IEVsZW1lbnQpID0+IHtcbiAgaWYgKGZyYW1lLmlzTWVhc3VyZSgpKSB7XG4gICAgZWxlbWVudC5iY3IgPSBlbGVtZW50LmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB9IGVsc2Uge1xuICAgIGxldCBiY3IgPSBlbGVtZW50LmJjcjtcbiAgICBsZXQgaW5WaWV3cG9ydCA9IGJjci50b3AgPCBmcmFtZS5oZWlnaHQgJiYgYmNyLnRvcCArIGJjci5oZWlnaHQgPiAwO1xuICAgIGlmICghZWxlbWVudC5pblZpZXdwb3J0ICYmIGluVmlld3BvcnQpIHtcbiAgICAgIGVsZW1lbnQuY2FsbGJhY2soKTtcbiAgICB9XG4gICAgZWxlbWVudC5pblZpZXdwb3J0ID0gaW5WaWV3cG9ydDtcbiAgfVxufSk7XG5cbnJhZi5saXN0ZW4odmlld3BvcnRRdWV1ZSk7XG5cbmxldCB2ZW50YW5hID0ge1xuICBpbml0KCkge30sXG4gIG9uU2Nyb2xsKGZ1bmM6IEZ1bmN0aW9uKSB7XG4gICAgc2Nyb2xsLmxpc3RlbihmdW5jKTtcbiAgfVxuICBvblZpZXdwb3J0KGlkOiBzdHJpbmcsIGVsOiBPYmplY3QsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xuICAgIGxldCBlbGVtZW50OiBFbGVtZW50ID0ge1xuICAgICAgaWQsXG4gICAgICBlbCxcbiAgICAgIGNhbGxiYWNrXG4gICAgfTtcbiAgICB2aWV3cG9ydFF1ZXVlLnB1c2goZWxlbWVudCk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHZlbnRhbmE7XG4iXX0=

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, raf_1, frame_1) {
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2Nyb2xsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFHQSxJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUV4QjtzQkFBZSxhQUFHLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBWTtRQUNyQyxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssZUFBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksTUFBTSxLQUFLLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDckUsY0FBYyxHQUFHLE1BQU0sQ0FBQztZQUN4QixNQUFNLENBQUM7Z0JBQ0wsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO2dCQUMxQixRQUFRLEVBQUUsTUFBTTthQUNqQixDQUFDO1FBQ0osQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJBRiBmcm9tICcuL3JhZic7XG5pbXBvcnQgRnJhbWUgZnJvbSAnLi9mcmFtZSc7XG5cbmxldCBzY3JvbGxQb3NpdGlvbiA9IC0xO1xuXG5leHBvcnQgZGVmYXVsdCBSQUYuZmlsdGVyKChmcmFtZTogRnJhbWUpID0+IHtcbiAgbGV0IG5ld1BvcyA9IGZyYW1lLnNjcm9sbFRvcDtcbiAgaWYgKGZyYW1lLnBoYXNlID09PSBGcmFtZS5QSEFTRS5NRUFTVVJFICYmIG5ld1BvcyAhPT0gc2Nyb2xsUG9zaXRpb24pIHtcbiAgICBzY3JvbGxQb3NpdGlvbiA9IG5ld1BvcztcbiAgICByZXR1cm4ge1xuICAgICAgdGltZXN0YW1wOiBmcmFtZS50aW1lc3RhbXAsXG4gICAgICBwb3NpdGlvbjogbmV3UG9zXG4gICAgfTtcbiAgfVxufSk7XG4iXX0=

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(5), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, stream_1, frame_1, window_proxy_1) {
	    var RAFStream = (function (_super) {
	        __extends(RAFStream, _super);
	        function RAFStream() {
	            _super.apply(this, arguments);
	        }
	        RAFStream.prototype.write = function (timestamp) {
	            var frame = new frame_1.default();
	            frame.phase = frame_1.default.PHASE.MEASURE;
	            frame.scrollTop = window_proxy_1.default.getScrollTop();
	            frame.scrollLeft = window_proxy_1.default.getScrollLeft();
	            frame.width = window_proxy_1.default.getWidth();
	            frame.height = window_proxy_1.default.getHeight();
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmFmLnRzIl0sIm5hbWVzIjpbIlJBRlN0cmVhbSIsIlJBRlN0cmVhbS5jb25zdHJ1Y3RvciIsIlJBRlN0cmVhbS53cml0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBS0E7UUFBd0JBLDZCQUFNQTtRQUE5QkE7WUFBd0JDLDhCQUFNQTtRQWE5QkEsQ0FBQ0E7UUFaQ0QseUJBQUtBLEdBQUxBLFVBQU9BLFNBQWlCQTtZQUN0QkUsSUFBSUEsS0FBS0EsR0FBR0EsSUFBSUEsZUFBS0EsRUFBRUEsQ0FBQ0E7WUFDeEJBLEtBQUtBLENBQUNBLEtBQUtBLEdBQUdBLGVBQUtBLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBO1lBQ2xDQSxLQUFLQSxDQUFDQSxTQUFTQSxHQUFHQSxzQkFBQ0EsQ0FBQ0EsWUFBWUEsRUFBRUEsQ0FBQ0E7WUFDbkNBLEtBQUtBLENBQUNBLFVBQVVBLEdBQUdBLHNCQUFDQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFDQTtZQUNyQ0EsS0FBS0EsQ0FBQ0EsS0FBS0EsR0FBR0Esc0JBQUNBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBO1lBQzNCQSxLQUFLQSxDQUFDQSxNQUFNQSxHQUFHQSxzQkFBQ0EsQ0FBQ0EsU0FBU0EsRUFBRUEsQ0FBQ0E7WUFFN0JBLGdCQUFLQSxDQUFDQSxLQUFLQSxZQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUNuQkEsS0FBS0EsQ0FBQ0EsS0FBS0EsR0FBR0EsZUFBS0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQUE7WUFDaENBLGdCQUFLQSxDQUFDQSxLQUFLQSxZQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUNyQkEsQ0FBQ0E7UUFDSEYsZ0JBQUNBO0lBQURBLENBQUNBLEFBYkQsRUFBd0IsZ0JBQU0sRUFhN0I7SUFFRCxJQUFJLEdBQUcsR0FBRyxJQUFJLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBRWpELElBQUksU0FBUyxHQUFHO1FBQ2QsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN0QixzQkFBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuQixDQUFDLENBQUE7SUFDRCxzQkFBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUVqQjtzQkFBZSxHQUFHLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RyZWFtIGZyb20gJy4vc3RyZWFtJztcbmltcG9ydCBGcmFtZSBmcm9tICcuL2ZyYW1lJztcbmltcG9ydCBSQUZSZXN1bHQgZnJvbSAnLi9yYWYtcmVzdWx0JztcbmltcG9ydCBXIGZyb20gJy4vLi4vd2luZG93LXByb3h5JztcblxuY2xhc3MgUkFGU3RyZWFtIGV4dGVuZHMgU3RyZWFtIHtcbiAgd3JpdGUgKHRpbWVzdGFtcDogbnVtYmVyKSB7XG4gICAgbGV0IGZyYW1lID0gbmV3IEZyYW1lKCk7XG4gICAgZnJhbWUucGhhc2UgPSBGcmFtZS5QSEFTRS5NRUFTVVJFO1xuICAgIGZyYW1lLnNjcm9sbFRvcCA9IFcuZ2V0U2Nyb2xsVG9wKCk7XG4gICAgZnJhbWUuc2Nyb2xsTGVmdCA9IFcuZ2V0U2Nyb2xsTGVmdCgpO1xuICAgIGZyYW1lLndpZHRoID0gVy5nZXRXaWR0aCgpO1xuICAgIGZyYW1lLmhlaWdodCA9IFcuZ2V0SGVpZ2h0KCk7XG5cbiAgICBzdXBlci53cml0ZShmcmFtZSk7XG4gICAgZnJhbWUucGhhc2UgPSBGcmFtZS5QSEFTRS5NVVRBVEVcbiAgICBzdXBlci53cml0ZShmcmFtZSk7XG4gIH1cbn1cblxubGV0IFJBRiA9IG5ldyBSQUZTdHJlYW0oJ3JlcXVlc3RBbmltYXRpb25GcmFtZScpO1xuXG5sZXQgcG9sbEZvckFGID0gKCkgPT4ge1xuICBSQUYud3JpdGUoRGF0ZS5ub3coKSk7XG4gIFcuckFGKHBvbGxGb3JBRik7XG59XG5XLnJBRihwb2xsRm9yQUYpO1xuXG5leHBvcnQgZGVmYXVsdCBSQUY7XG4iXX0=

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, queue_1) {
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
	                else if (target instanceof queue_1.default) {
	                    target.tap(value);
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RyZWFtLnRzIl0sIm5hbWVzIjpbIlN0cmVhbSIsIlN0cmVhbS5jb25zdHJ1Y3RvciIsIlN0cmVhbS53cml0ZSIsIlN0cmVhbS5saXN0ZW4iLCJTdHJlYW0udGhyb3R0bGUiLCJTdHJlYW0uZmlsdGVyIl0sIm1hcHBpbmdzIjoiO0lBQ0E7UUFHRUEsZ0JBQWFBLElBQWtCQTtZQUFsQkMsb0JBQWtCQSxHQUFsQkEsa0JBQWtCQTtZQUM3QkEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7WUFDakJBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLEVBQUVBLENBQUNBO1FBQ3BCQSxDQUFDQTtRQUNERCxzQkFBS0EsR0FBTEEsVUFBTUEsS0FBVUE7WUFDZEUsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBQUEsTUFBTUE7Z0JBQ3pCQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxZQUFZQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDN0JBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO2dCQUN0QkEsQ0FBQ0E7Z0JBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLFlBQVlBLGVBQUtBLENBQUNBLENBQUNBLENBQUNBO29CQUNuQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3BCQSxDQUFDQTtnQkFBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsTUFBTUEsS0FBS0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3hDQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtnQkFDaEJBLENBQUNBO1lBQ0hBLENBQUNBLENBQUNBLENBQUNBO1FBQ0xBLENBQUNBO1FBQ0RGLHVCQUFNQSxHQUFOQSxVQUFPQSxNQUFpQ0E7WUFDdENHLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1FBQzVCQSxDQUFDQTtRQUNESCx5QkFBUUEsR0FBUkE7UUFFQUksQ0FBQ0E7UUFDREosdUJBQU1BLEdBQU5BLFVBQU9BLE1BQWdCQTtZQUNyQkssSUFBSUEsY0FBY0EsR0FBR0EsSUFBSUEsTUFBTUEsRUFBRUEsQ0FBQ0E7WUFDbENBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLFVBQUNBLEtBQVVBO2dCQUNyQkEsSUFBSUEsUUFBUUEsR0FBR0EsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzdCQSxFQUFFQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDYkEsY0FBY0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ2pDQSxDQUFDQTtZQUNIQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNIQSxNQUFNQSxDQUFDQSxjQUFjQSxDQUFDQTtRQUN4QkEsQ0FBQ0E7UUFDSEwsYUFBQ0E7SUFBREEsQ0FBQ0EsQUFsQ0QsSUFrQ0M7SUFNRDtzQkFBZSxNQUFNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUXVldWUgZnJvbSAnLi8uLi9xdWV1ZXMvcXVldWUnO1xuY2xhc3MgU3RyZWFtIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0YXJnZXRzOiBBcnJheTxTdHJlYW0gfCBGdW5jdGlvbj47XG4gIGNvbnN0cnVjdG9yIChuYW1lID0gJ2Fub255bW91cycpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFyZ2V0cyA9IFtdO1xuICB9XG4gIHdyaXRlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCh0YXJnZXQgPT4ge1xuICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIFN0cmVhbSkge1xuICAgICAgICB0YXJnZXQud3JpdGUodmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBRdWV1ZSkge1xuICAgICAgICB0YXJnZXQudGFwKHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0YXJnZXQodmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGxpc3Rlbih0YXJnZXQ6IFN0cmVhbSB8IFF1ZXVlIHwgRnVuY3Rpb24pIHtcbiAgICB0aGlzLnRhcmdldHMucHVzaCh0YXJnZXQpO1xuICB9XG4gIHRocm90dGxlKCkge1xuXG4gIH1cbiAgZmlsdGVyKGZpbHRlcjogRnVuY3Rpb24pIHtcbiAgICBsZXQgZmlsdGVyZWRTdHJlYW0gPSBuZXcgU3RyZWFtKCk7XG4gICAgdGhpcy5saXN0ZW4oKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgIGxldCBmaWx0ZXJlZCA9IGZpbHRlcih2YWx1ZSk7XG4gICAgICBpZiAoZmlsdGVyZWQpIHtcbiAgICAgICAgZmlsdGVyZWRTdHJlYW0ud3JpdGUoZmlsdGVyZWQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZFN0cmVhbTtcbiAgfVxufVxuXG4vKiBUT0RPXG4gIC0gQWRkIHF1ZXVlIGZlYXR1cmUgdG8gbGlzdGVuLiBBbGxvdyBvcmRlcmVkIHF1ZXVlcyBmb3IgYSBzdHJlYW0uXG4qL1xuXG5leHBvcnQgZGVmYXVsdCBTdHJlYW07XG4iXX0=

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    var Queue = (function () {
	        function Queue(name, collect) {
	            this.name = name;
	            this.items = [];
	            this.collect = collect;
	        }
	        Queue.prototype.push = function (element) {
	            this.items.push(element);
	        };
	        Queue.prototype.tap = function (value) {
	            var _this = this;
	            this.items.forEach(function (element) {
	                _this.collect(value, element);
	            });
	        };
	        return Queue;
	    })();
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = Queue;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVldWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWV1ZS50cyJdLCJuYW1lcyI6WyJRdWV1ZSIsIlF1ZXVlLmNvbnN0cnVjdG9yIiwiUXVldWUucHVzaCIsIlF1ZXVlLnRhcCJdLCJtYXBwaW5ncyI6IjtJQUVBO1FBSUVBLGVBQVlBLElBQVlBLEVBQUVBLE9BQWlCQTtZQUN6Q0MsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7WUFDakJBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEVBQUVBLENBQUNBO1lBQ2hCQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxPQUFPQSxDQUFDQTtRQUN6QkEsQ0FBQ0E7UUFDREQsb0JBQUlBLEdBQUpBLFVBQUtBLE9BQXFCQTtZQUN4QkUsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7UUFDM0JBLENBQUNBO1FBQ0RGLG1CQUFHQSxHQUFIQSxVQUFJQSxLQUFVQTtZQUFkRyxpQkFJQ0E7WUFIQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBQ0EsT0FBT0E7Z0JBQ3pCQSxLQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQTtZQUMvQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDTEEsQ0FBQ0E7UUFDSEgsWUFBQ0E7SUFBREEsQ0FBQ0EsQUFqQkQsSUFpQkM7SUFFRDtzQkFBZSxLQUFLLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUXVldWVFbGVtZW50IGZyb20gJy4vZWxlbWVudCc7XG5cbmNsYXNzIFF1ZXVlIHtcbiAgbmFtZTogc3RyaW5nO1xuICBpdGVtczogQXJyYXk8UXVldWVFbGVtZW50PjtcbiAgY29sbGVjdDogRnVuY3Rpb247XG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgY29sbGVjdDogRnVuY3Rpb24pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB0aGlzLmNvbGxlY3QgPSBjb2xsZWN0O1xuICB9XG4gIHB1c2goZWxlbWVudDogUXVldWVFbGVtZW50KSB7XG4gICAgdGhpcy5pdGVtcy5wdXNoKGVsZW1lbnQpO1xuICB9XG4gIHRhcCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICB0aGlzLmNvbGxlY3QodmFsdWUsIGVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXVlO1xuIl19

/***/ },
/* 5 */
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
	        Frame.prototype.isMeasure = function () {
	            return this.phase === RAFPhase.MEASURE;
	        };
	        Frame.PHASE = RAFPhase;
	        return Frame;
	    })();
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = Frame;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmcmFtZS50cyJdLCJuYW1lcyI6WyJSQUZQaGFzZSIsIkZyYW1lIiwiRnJhbWUuY29uc3RydWN0b3IiLCJGcmFtZS5pc01lYXN1cmUiXSwibWFwcGluZ3MiOiI7SUFBQSxJQUFLLFFBR0o7SUFIRCxXQUFLLFFBQVE7UUFDWEEsNkNBQU9BLENBQUFBO1FBQ1BBLDJDQUFNQSxDQUFBQTtJQUNSQSxDQUFDQSxFQUhJLFFBQVEsS0FBUixRQUFRLFFBR1o7SUFFRDtRQUFBQztRQWFBQyxDQUFDQTtRQUhDRCx5QkFBU0EsR0FBVEE7WUFDRUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsS0FBS0EsUUFBUUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7UUFDekNBLENBQUNBO1FBWE1GLFdBQUtBLEdBQUdBLFFBQVFBLENBQUNBO1FBWTFCQSxZQUFDQTtJQUFEQSxDQUFDQSxBQWJELElBYUM7SUFFRDtzQkFBZSxLQUFLLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJlbnVtIFJBRlBoYXNlIHtcbiAgTUVBU1VSRSxcbiAgTVVUQVRFXG59XG5cbmNsYXNzIEZyYW1lIHtcbiAgc3RhdGljIFBIQVNFID0gUkFGUGhhc2U7XG5cbiAgcGhhc2U6IFJBRlBoYXNlO1xuICB0aW1lc3RhbXA6IG51bWJlcjtcbiAgc2Nyb2xsVG9wOiBudW1iZXI7XG4gIHNjcm9sbExlZnQ6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG5cbiAgaXNNZWFzdXJlKCkge1xuICAgIHJldHVybiB0aGlzLnBoYXNlID09PSBSQUZQaGFzZS5NRUFTVVJFO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyYW1lO1xuIl19

/***/ },
/* 6 */
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
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LXByb3h5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2luZG93LXByb3h5LnRzIl0sIm5hbWVzIjpbImhhc0RvbVNldHVwIl0sIm1hcHBpbmdzIjoiO0lBQ0EsSUFBSSxNQUFNLEdBQUcsQ0FBQyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUMsSUFBSSxNQUFNO1dBQy9DLENBQUMsT0FBTyxRQUFRLEtBQUssV0FBVyxDQUFDLElBQUksUUFBUSxDQUFDO0lBQ3JELElBQUksR0FBRyxHQUFHLGNBQU0sT0FBQSxDQUFDLEVBQUQsQ0FBQyxDQUFDO0lBQ2xCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNYLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO0lBRWxFLENBQUMsQ0FBQyxHQUFHLEdBQUcsTUFBTSxJQUFVLE1BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFbkU7UUFDRUEsSUFBSUEsRUFBRUEsR0FBR0EsT0FBYUEsUUFBU0EsQ0FBQ0EsZ0JBQWdCQSxLQUFLQSxXQUFXQSxDQUFDQTtRQUNqRUEsQ0FBQ0EsQ0FBQ0EsWUFBWUEsR0FBR0EsRUFBRUEsR0FBR0EsY0FBTUEsT0FBTUEsUUFBU0EsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxTQUFTQSxFQUExQ0EsQ0FBMENBLEdBQUdBLGNBQU1BLE9BQU1BLE1BQU9BLENBQUNBLE9BQU9BLEVBQXJCQSxDQUFxQkEsQ0FBQ0E7UUFDckdBLENBQUNBLENBQUNBLGFBQWFBLEdBQUdBLEVBQUVBLEdBQUdBLGNBQU1BLE9BQU1BLFFBQVNBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsVUFBVUEsRUFBM0NBLENBQTJDQSxHQUFHQSxjQUFNQSxPQUFNQSxNQUFPQSxDQUFDQSxPQUFPQSxFQUFyQkEsQ0FBcUJBLENBQUNBO1FBQ3ZHQSxDQUFDQSxDQUFDQSxTQUFTQSxHQUFHQSxjQUFNQSxPQUFNQSxNQUFPQSxDQUFDQSxXQUFXQSxFQUF6QkEsQ0FBeUJBLENBQUNBO1FBQzlDQSxDQUFDQSxDQUFDQSxRQUFRQSxHQUFHQSxjQUFNQSxPQUFNQSxNQUFPQSxDQUFDQSxVQUFVQSxFQUF4QkEsQ0FBd0JBLENBQUNBO0lBQzlDQSxDQUFDQTtJQUVELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDWCxFQUFFLENBQUMsQ0FBTyxRQUFTLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDN0MsV0FBVyxFQUFFLENBQUM7UUFDaEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0EsUUFBUyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3BFLENBQUM7SUFDSCxDQUFDO0lBRUQ7c0JBQWUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZGV0ZWN0IHRoZSBwcmVzZW5jZSBvZiBET01cbmxldCBoYXNET00gPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpICYmIHdpbmRvd1xuICAgICYmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSAmJiBkb2N1bWVudDtcbnZhciBub3AgPSAoKSA9PiAwO1xudmFyIFcgPSB7fTtcblcuZ2V0U2Nyb2xsVG9wID0gVy5nZXRTY3JvbGxMZWZ0ID0gVy5nZXRIZWlnaHQgPSBXLmdldFdpZHRoID0gbm9wO1xuXG5XLnJBRiA9IGhhc0RPTSAmJiAoPGFueT53aW5kb3cpLnJlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKHdpbmRvdyk7XG5cbmZ1bmN0aW9uIGhhc0RvbVNldHVwKCkge1xuICBsZXQgc2UgPSB0eXBlb2YgKDxhbnk+ZG9jdW1lbnQpLnNjcm9sbGluZ0VsZW1lbnQgIT09ICd1bmRlZmluZWQnO1xuICBXLmdldFNjcm9sbFRvcCA9IHNlID8gKCkgPT4gKDxhbnk+ZG9jdW1lbnQpLnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wIDogKCkgPT4gKDxhbnk+d2luZG93KS5zY3JvbGxZO1xuICBXLmdldFNjcm9sbExlZnQgPSBzZSA/ICgpID0+ICg8YW55PmRvY3VtZW50KS5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbExlZnQgOiAoKSA9PiAoPGFueT53aW5kb3cpLnNjcm9sbFg7XG4gIFcuZ2V0SGVpZ2h0ID0gKCkgPT4gKDxhbnk+d2luZG93KS5pbm5lckhlaWdodDtcbiAgVy5nZXRXaWR0aCA9ICgpID0+ICg8YW55PndpbmRvdykuaW5uZXJXaWR0aDtcbn1cblxuaWYgKGhhc0RPTSkge1xuICBpZiAoKDxhbnk+ZG9jdW1lbnQpLnJlYWR5U3RhdGUgIT09ICdsb2FkaW5nJykge1xuICAgIGhhc0RvbVNldHVwKCk7XG4gIH0gZWxzZSB7XG4gICAgKDxhbnk+ZG9jdW1lbnQpLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBoYXNEb21TZXR1cCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVztcbiJdfQ==

/***/ }
/******/ ])
});
;