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

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(5), __webpack_require__(6), __webpack_require__(7), __webpack_require__(1), __webpack_require__(8), __webpack_require__(1), __webpack_require__(2), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, window_proxy_1, scroll_1, resize_1, element_1, raf_1, raf_queue_1, raf_2, stream_1, stream_2) {
	    "use strict";
	    exports.QueueElement = element_1.default;
	    exports.RAFQueue = raf_queue_1.default;
	    exports.RAFStream = raf_2.raf;
	    exports.Stream = stream_1.default;
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
	    scroll_1.default.pipe(function (arg) {
	        listeners.move.forEach(function (callback) {
	            callback.call(null, arg);
	        });
	    });
	    resize_1.default.pipe(function (arg) {
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
	    var cY = 0;
	    var cX = 0;
	    var cW = 0;
	    var cH = 0;
	    var taskQueue = [];
	    raf_1.poll.pipe(function (frame) {
	        cY = frame.scrollTop;
	        cX = frame.scrollLeft;
	        cW = frame.width;
	        cH = frame.height;
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
	    function mapBoundingRectToAbsolute(boundingRect) {
	        var dimensions = {
	            top: boundingRect.top + cY,
	            left: boundingRect.left + cX,
	            width: boundingRect.width,
	            height: boundingRect.height
	        };
	        return dimensions;
	    }
	    exports.mapBoundingRectToAbsolute = mapBoundingRectToAbsolute;
	    function getWindowRect(offset) {
	        offset = offset || {
	            top: 0,
	            left: 0,
	            right: 0,
	            bottom: 0
	        };
	        return {
	            top: cY + offset.top,
	            left: cX + offset.left,
	            height: cH - offset.top - offset.bottom,
	            width: cW - offset.left - offset.right
	        };
	    }
	    exports.getWindowRect = getWindowRect;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUdRLHlDQUFrRDtJQUdqRCx1Q0FBZ0Q7SUFDaEQsOEJBQXdDO0lBRXhDLGtDQUE0QztJQUM1QyxpQ0FBaUM7SUFXMUMsSUFBSSxTQUFTLEdBQWdCO1FBQzNCLElBQUksRUFBRSxFQUFFO1FBQ1IsTUFBTSxFQUFFLEVBQUU7UUFDVixPQUFPLEVBQUUsRUFBRTtRQUNYLElBQUksRUFBRSxFQUFFO1FBQ1IsSUFBSSxFQUFFLEVBQUU7S0FDVCxDQUFDO0lBRUYseUJBQXlCLEdBQVc7UUFDbEMsTUFBTSxDQUFDO1lBQ0wsSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3pCLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsQ0FBQztRQUNILENBQUMsQ0FBQTtJQUNILENBQUM7SUFFRCxnQkFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7UUFDbkIsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRO1lBQzlCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxnQkFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7UUFDbkIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRO1lBQ2hDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFD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IGZyb20gJy4vc3RyZWFtcy9zY3JvbGwnO1xuaW1wb3J0IHJlc2l6ZSBmcm9tICcuL3N0cmVhbXMvcmVzaXplJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBRdWV1ZUVsZW1lbnQgfSBmcm9tICcuL3F1ZXVlcy9lbGVtZW50JztcbmltcG9ydCB7IHBvbGwgYXMgcG9sbFN0cmVhbSwgbWVhc3VyZSBhcyBtZWFzdXJlU3RyZWFtIH0gZnJvbSAnLi9zdHJlYW1zL3JhZic7XG5pbXBvcnQgeyBGcmFtZSB9IGZyb20gJy4vc3RyZWFtcy9mcmFtZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJBRlF1ZXVlIH0gZnJvbSAnLi9xdWV1ZXMvcmFmLXF1ZXVlJztcbmV4cG9ydCB7IHJhZiBhcyBSQUZTdHJlYW0gfSBmcm9tICcuL3N0cmVhbXMvcmFmJztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTdHJlYW0gfSBmcm9tICcuL3N0cmVhbXMvc3RyZWFtJztcbmV4cG9ydCB7IHN0cmVhbSB9IGZyb20gJy4vc3RyZWFtcy9zdHJlYW0nO1xuXG5pbnRlcmZhY2UgTGlzdGVuZXJzTWFwIHtcbiAgbW92ZTogRnVuY3Rpb25bXSxcbiAgcmVzaXplOiBGdW5jdGlvbltdLFxuICBkZXN0cm95OiBGdW5jdGlvbltdLFxuICBoaWRlOiBGdW5jdGlvbltdLFxuICBzaG93OiBGdW5jdGlvbltdLFxuICBba2V5OiBzdHJpbmddOiBGdW5jdGlvbltdO1xufVxuXG5sZXQgbGlzdGVuZXJzOkxpc3RlbmVyc01hcCA9IHtcbiAgbW92ZTogW10sXG4gIHJlc2l6ZTogW10sXG4gIGRlc3Ryb3k6IFtdLFxuICBoaWRlOiBbXSxcbiAgc2hvdzogW11cbn07XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVHJpZ2dlcihrZXk6IHN0cmluZykge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGxldCBjYWxsYmFja3MgPSBsaXN0ZW5lcnNba2V5XSwgbGVuID0gY2FsbGJhY2tzLmxlbmd0aCwgaSA9IDA7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjYWxsYmFja3NbaV0uY2FsbChudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuc2Nyb2xsLnBpcGUoKGFyZzogYW55KSA9PiB7XG4gIGxpc3RlbmVycy5tb3ZlLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgY2FsbGJhY2suY2FsbChudWxsLCBhcmcpO1xuICB9KTtcbn0pO1xuXG5yZXNpemUucGlwZSgoYXJnOiBhbnkpID0+IHtcbiAgbGlzdGVuZXJzLnJlc2l6ZS5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xuICAgIGNhbGxiYWNrLmNhbGwobnVsbCwgYXJnKTtcbiAgfSk7XG59KTtcblxuaWYgKHcuaGFzRE9NKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd1bmxvYWQnLCBnZW5lcmF0ZVRyaWdnZXIoJ2Rlc3Ryb3knKSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSAndmlzaWJsZScpIHtcbiAgICAgIGdlbmVyYXRlVHJpZ2dlcignc2hvdycpKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbmVyYXRlVHJpZ2dlcignaGlkZScpKCk7XG4gICAgfVxuICB9KTtcbn1cblxubGV0IGNZID0gMDtcbmxldCBjWCA9IDA7XG5sZXQgY1cgPSAwO1xubGV0IGNIID0gMDtcblxubGV0IHRhc2tRdWV1ZTogRnVuY3Rpb25bXSA9IFtdO1xuXG5wb2xsU3RyZWFtLnBpcGUoKGZyYW1lOiBGcmFtZSkgPT4ge1xuICBjWSA9IGZyYW1lLnNjcm9sbFRvcDtcbiAgY1ggPSBmcmFtZS5zY3JvbGxMZWZ0O1xuICBjVyA9IGZyYW1lLndpZHRoO1xuICBjSCA9IGZyYW1lLmhlaWdodDtcblxuICB3aGlsZSAodGFza1F1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICB0YXNrUXVldWUucG9wKCkuY2FsbChudWxsLCBmcmFtZSk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gb24oZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xuICBsaXN0ZW5lcnNbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXVlKGNhbGxiYWNrOiBGdW5jdGlvbikge1xuICB0YXNrUXVldWUucHVzaChjYWxsYmFjayk7XG59XG5cbmludGVyZmFjZSBBYnNvbHV0ZVJlY3Qge1xuICB0b3A6IG51bWJlcjtcbiAgYm90dG9tOiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwQm91bmRpbmdSZWN0VG9BYnNvbHV0ZShib3VuZGluZ1JlY3Q6IENsaWVudFJlY3QpIHtcbiAgbGV0IGRpbWVuc2lvbnMgPSB7XG4gICAgdG9wOiBib3VuZGluZ1JlY3QudG9wICsgY1ksXG4gICAgbGVmdDogYm91bmRpbmdSZWN0LmxlZnQgKyBjWCxcbiAgICB3aWR0aDogYm91bmRpbmdSZWN0LndpZHRoLFxuICAgIGhlaWdodDogYm91bmRpbmdSZWN0LmhlaWdodFxuICB9O1xuICByZXR1cm4gZGltZW5zaW9ucztcbn1cblxuaW50ZXJmYWNlIE9mZnNldCB7XG4gIHRvcDogbnVtYmVyO1xuICBsZWZ0OiBudW1iZXI7XG4gIHJpZ2h0OiBudW1iZXI7XG4gIGJvdHRvbTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2luZG93UmVjdChvZmZzZXQ6IE9mZnNldCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfHwge1xuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMFxuICB9O1xuICByZXR1cm4ge1xuICAgIHRvcDogY1kgKyBvZmZzZXQudG9wLFxuICAgIGxlZnQ6IGNYICsgb2Zmc2V0LmxlZnQsXG4gICAgaGVpZ2h0OiBjSCAtIG9mZnNldC50b3AgLSBvZmZzZXQuYm90dG9tLFxuICAgIHdpZHRoOiBjVyAtIG9mZnNldC5sZWZ0IC0gb2Zmc2V0LnJpZ2h0XG4gIH07XG59XG4iXX0=

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2), __webpack_require__(3), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, stream_1, window_proxy_1, frame_1) {
	    "use strict";
	    var RAFStream = (function (_super) {
	        __extends(RAFStream, _super);
	        function RAFStream() {
	            _super.apply(this, arguments);
	        }
	        RAFStream.prototype.write = function (timestamp) {
	            var frame = new frame_1.Frame();
	            frame.timestamp = timestamp;
	            frame.phase = frame_1.RAFPhase.MEASURE;
	            frame.scrollTop = window_proxy_1.default.getScrollTop();
	            frame.scrollLeft = window_proxy_1.default.getScrollLeft();
	            frame.width = window_proxy_1.default.getWidth();
	            frame.height = window_proxy_1.default.getHeight();
	            _super.prototype.write.call(this, frame);
	            frame.phase = frame_1.RAFPhase.MUTATE;
	            _super.prototype.write.call(this, frame);
	        };
	        return RAFStream;
	    }(stream_1.default));
	    var raf = new RAFStream('requestAnimationFrame');
	    exports.raf = raf;
	    var measure = raf.filter(function (frame) {
	        if (frame.phase === frame_1.RAFPhase.MEASURE) {
	            return frame;
	        }
	    });
	    exports.measure = measure;
	    var poll = raf.filter(function (frame) {
	        if (frame.phase !== frame_1.RAFPhase.MEASURE) {
	            return frame;
	        }
	    });
	    exports.poll = poll;
	    var pollForAF = function () {
	        raf.write(Date.now());
	        window_proxy_1.default.rAF(pollForAF);
	    };
	    window_proxy_1.default.rAF(pollForAF);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RyZWFtcy9yYWYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQUlBO1FBQXdCLDZCQUFNO1FBQTlCO1lBQXdCLDhCQUFNO1FBYzlCLENBQUM7UUFiQyx5QkFBSyxHQUFMLFVBQU8sU0FBaUI7WUFDdEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztZQUN4QixLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUM1QixLQUFLLENBQUMsS0FBSyxHQUFHLGdCQUFRLENBQUMsT0FBTyxDQUFDO1lBQy9CLEtBQUssQ0FBQyxTQUFTLEdBQUcsc0JBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNuQyxLQUFLLENBQUMsVUFBVSxHQUFHLHNCQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckMsS0FBSyxDQUFDLEtBQUssR0FBRyxzQkFBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzNCLEtBQUssQ0FBQyxNQUFNLEdBQUcsc0JBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUU3QixnQkFBSyxDQUFDLEtBQUssWUFBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixLQUFLLENBQUMsS0FBSyxHQUFHLGdCQUFRLENBQUMsTUFBTSxDQUFBO1lBQzdCLGdCQUFLLENBQUMsS0FBSyxZQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUM7UUFDSCxnQkFBQztJQUFELENBQUMsQUFkRCxDQUF3QixnQkFBTSxHQWM3QjtJQUVELElBQUksR0FBRyxHQUFHLElBQUksU0FBUyxDQUFDLHVCQUF1QixDQUFDO0lBcUI5QyxXQUFHLE9BckI0QztJQUVqRCxJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBWTtRQUNwQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLGdCQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNyQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2YsQ0FBQztJQUNILENBQUMsQ0FBQztJQWdCQSxlQUFPLFdBaEJOO0lBRUgsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEtBQVk7UUFDakMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxnQkFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDckMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7SUFDSCxDQUFDLENBQUM7SUFXQSxZQUFJLFFBWEg7SUFFSCxJQUFJLFNBQVMsR0FBRztRQUNkLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDdEIsc0JBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkIsQ0FBQyxDQUFBO0lBQ0Qsc0JBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFNZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHJlYW0gZnJvbSAnLi9zdHJlYW0nO1xuaW1wb3J0IFcgZnJvbSAnLi8uLi93aW5kb3ctcHJveHknO1xuaW1wb3J0IHsgRnJhbWUsIFJBRlBoYXNlIH0gZnJvbSAnLi9mcmFtZSc7XG5cbmNsYXNzIFJBRlN0cmVhbSBleHRlbmRzIFN0cmVhbSB7XG4gIHdyaXRlICh0aW1lc3RhbXA6IG51bWJlcikge1xuICAgIGxldCBmcmFtZSA9IG5ldyBGcmFtZSgpO1xuICAgIGZyYW1lLnRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcbiAgICBmcmFtZS5waGFzZSA9IFJBRlBoYXNlLk1FQVNVUkU7XG4gICAgZnJhbWUuc2Nyb2xsVG9wID0gVy5nZXRTY3JvbGxUb3AoKTtcbiAgICBmcmFtZS5zY3JvbGxMZWZ0ID0gVy5nZXRTY3JvbGxMZWZ0KCk7XG4gICAgZnJhbWUud2lkdGggPSBXLmdldFdpZHRoKCk7XG4gICAgZnJhbWUuaGVpZ2h0ID0gVy5nZXRIZWlnaHQoKTtcblxuICAgIHN1cGVyLndyaXRlKGZyYW1lKTtcbiAgICBmcmFtZS5waGFzZSA9IFJBRlBoYXNlLk1VVEFURVxuICAgIHN1cGVyLndyaXRlKGZyYW1lKTtcbiAgfVxufVxuXG5sZXQgcmFmID0gbmV3IFJBRlN0cmVhbSgncmVxdWVzdEFuaW1hdGlvbkZyYW1lJyk7XG5cbmxldCBtZWFzdXJlID0gcmFmLmZpbHRlcigoZnJhbWU6IEZyYW1lKSA9PiB7XG4gIGlmIChmcmFtZS5waGFzZSA9PT0gUkFGUGhhc2UuTUVBU1VSRSkge1xuICAgIHJldHVybiBmcmFtZTtcbiAgfVxufSk7XG5cbmxldCBwb2xsID0gcmFmLmZpbHRlcigoZnJhbWU6IEZyYW1lKSA9PiB7XG4gIGlmIChmcmFtZS5waGFzZSAhPT0gUkFGUGhhc2UuTUVBU1VSRSkge1xuICAgIHJldHVybiBmcmFtZTtcbiAgfVxufSk7XG5cbmxldCBwb2xsRm9yQUYgPSAoKSA9PiB7XG4gIHJhZi53cml0ZShEYXRlLm5vdygpKTtcbiAgVy5yQUYocG9sbEZvckFGKTtcbn1cblcuckFGKHBvbGxGb3JBRik7XG5cbmV4cG9ydCB7XG4gIHJhZixcbiAgbWVhc3VyZSxcbiAgcG9sbFxufTtcbiJdfQ==

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    "use strict";
	    var Stream = (function () {
	        function Stream(source) {
	            var _this = this;
	            this.name = name;
	            if (typeof source === 'function') {
	                source.call(this, function () {
	                    var args = [];
	                    for (var _i = 0; _i < arguments.length; _i++) {
	                        args[_i - 0] = arguments[_i];
	                    }
	                    _this.write.apply(_this, args);
	                });
	            }
	            else if (typeof source === 'string') {
	                this.name = source;
	            }
	            this.targets = [];
	            this.targetEndpoints = [];
	        }
	        Stream.prototype.write = function (value) {
	            var _this = this;
	            this.targets.forEach(function (target, index) {
	                if (target instanceof Stream) {
	                    target.write(value);
	                }
	                else if (typeof target === 'function') {
	                    _this.targetEndpoints[index].write(target(value));
	                }
	                else if (typeof target.tap === 'function') {
	                    target.tap(value);
	                }
	            });
	        };
	        Stream.prototype.pipe = function (target) {
	            this.targets.push(target);
	            if (target instanceof Stream) {
	                this.targetEndpoints.push(null);
	                return target;
	            }
	            else if (target instanceof Function) {
	                var endpoint = new Stream();
	                this.targetEndpoints.push(endpoint);
	                return endpoint;
	            }
	            else {
	                this.targetEndpoints.push(null);
	                return target.toStream();
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
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RyZWFtcy9zdHJlYW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SUFFQTtRQUlFLGdCQUFhLE1BQTBDO1lBSnpELGlCQXdGQztZQW5GRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixFQUFFLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtvQkFBQyxjQUFhO3lCQUFiLFdBQWEsQ0FBYixzQkFBYSxDQUFiLElBQWE7d0JBQWIsNkJBQWE7O29CQUM5QixLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQy9CLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztZQUNyQixDQUFDO1lBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDNUIsQ0FBQztRQUNELHNCQUFLLEdBQUwsVUFBTSxLQUFVO1lBQWhCLGlCQVVDO1lBVEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFXLEVBQUUsS0FBYTtnQkFDOUMsRUFBRSxDQUFDLENBQUMsTUFBTSxZQUFZLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQzdCLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3RCLENBQUM7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sTUFBTSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQ3hDLEtBQUksQ0FBQyxlQUFl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LFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFnQixHQUFHLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsWUFBWSxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDYixDQUFDO0lBQ0gsQ0FBQztJQUVEO1FBQXVCLGNBQWdDO2FBQWhDLFdBQWdDLENBQWhDLHNCQUFnQyxDQUFoQyxJQUFnQztZQUFoQyw2QkFBZ0M7O1FBQ3JELElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUhlLGNBQU0sU0FHckIsQ0FBQTtJQUFBLENBQUM7SUFHRjtzQkFBZSxNQUFNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJlYW1JbnRlcmZhY2UsIFF1ZXVlSW50ZXJmYWNlIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzJztcblxuY2xhc3MgU3RyZWFtIGltcGxlbWVudHMgU3RyZWFtSW50ZXJmYWNlIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0YXJnZXRzOiBBcnJheTxTdHJlYW0gfCBRdWV1ZUludGVyZmFjZSB8IEZ1bmN0aW9uPjtcbiAgdGFyZ2V0RW5kcG9pbnRzOiBBcnJheTxTdHJlYW0+O1xuICBjb25zdHJ1Y3RvciAoc291cmNlPzpzdHJpbmd8KCh3cml0ZTogRnVuY3Rpb24pID0+IHZvaWQpKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgc291cmNlLmNhbGwodGhpcywgKC4uLmFyZ3M6YW55W10pID0+IHtcbiAgICAgICAgdGhpcy53cml0ZS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMubmFtZSA9IHNvdXJjZTtcbiAgICB9XG4gICAgdGhpcy50YXJnZXRzID0gW107XG4gICAgdGhpcy50YXJnZXRFbmRwb2ludHMgPSBbXTtcbiAgfVxuICB3cml0ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldDogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgU3RyZWFtKSB7XG4gICAgICAgIHRhcmdldC53cml0ZSh2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy50YXJnZXRFbmRwb2ludHNbaW5kZXhdLndyaXRlKCg8RnVuY3Rpb24+dGFyZ2V0KSh2YWx1ZSkpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGFyZ2V0LnRhcCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0YXJnZXQudGFwKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBwaXBlKHRhcmdldDogU3RyZWFtIHwgUXVldWVJbnRlcmZhY2UgfCBGdW5jdGlvbik6U3RyZWFtSW50ZXJmYWNlIHtcbiAgICB0aGlzLnRhcmdldHMucHVzaCh0YXJnZXQpO1xuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBTdHJlYW0pIHtcbiAgICAgIHRoaXMudGFyZ2V0RW5kcG9pbnRzLnB1c2gobnVsbCk7XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0IGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIGxldCBlbmRwb2ludCA9IG5ldyBTdHJlYW0oKTtcbiAgICAgIHRoaXMudGFyZ2V0RW5kcG9pbnRzLnB1c2goZW5kcG9pbnQpO1xuICAgICAgcmV0dXJuIGVuZHBvaW50O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRhcmdldEVuZHBvaW50cy5wdXNoKG51bGwpO1xuICAgICAgcmV0dXJuIHRhcmdldC50b1N0cmVhbSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyZWFtLiBUaGUgcmVzdWx0aW5nIHN0cmVhbSdzIGJlaGF2aW9yIGlzIGRlZmluZWQgYnlcbiAgICogdGhlIHN1cHBsaWVkIHN0cmVhbXMuIEdpdmVuIE4gc3RyZWFtcyBwYXNzZWQgaW4gYXMgYXJndW1lbnRzLFxuICAgKiB0aGUgcmVzdWx0aW5nIHN0cmVhbSB3aWxsIHJlY2lldmUgQXJyYXkgdmFsdWVzIG9mIGxlbmd0aCBOLlxuICAgKiBWYWx1ZXMgd2lsbCBiZSB3cml0dGVuIGFueSB0aW1lIGFueSBzb3VyY2Ugc3RyZWFtIGhhcyBhIG5ld1xuICAgKiB2YWx1ZS4gRWFjaCB2YWx1ZSBpbiB0aGUgcmVzdWx0aW5nIHN0cmVhbSB2YWx1ZSBhcnJheVxuICAgKiBpcyB0aGUgbGF0ZXN0IHZhbHVlIGZyb20gdGhlIGNvcnJlc3BvbmRpbmcgYXJndW1lbnQgc3RyZWFtLlxuICAgKlxuICAgKiBAcGFyYW0gey4uLlN0cmVhbX0gYXJncyAtIEFueSBudW1iZXIgb2Ygc3RyZWFtc1xuICAgKiBAcmV0dXJucyB7U3RyZWFtfSAtIFRoZSBnZW5lcmF0ZWQgc3RyZWFtXG4gICAqL1xuICBzdGF0aWMgam9pbiguLi5hcmdzOiBTdHJlYW1bXSkge1xuICAgIGxldCBjYWNoZTphbnlbXSA9IG5ldyBBcnJheShhcmdzLmxlbmd0aCk7XG4gICAgcmV0dXJuIG5ldyBTdHJlYW0oZnVuY3Rpb24gKHdyaXRlOiBGdW5jdGlvbikge1xuICAgICAgYXJncy5mb3JFYWNoKChzdHJlYW0sIGkpID0+IHtcbiAgICAgICAgc3RyZWFtLnBpcGUoKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgICAgICBjYWNoZVtpXSA9IHZhbHVlO1xuICAgICAgICAgIHRoaXMud3JpdGUoY2FjaGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBuZXcgc3RyZWFtLiBUaGUgbmV3IHN0cmVhbSdzIGJlaGF2aW9yIGlzIGRlZmluZWQgYnkgdGhlXG4gICAqIG9yaWdpbmFsIHN0cmVhbSBhbmQgdGhlIGZpbHRlciBmdW5jdGlvbi4gVmFsdWVzIGZyb20gdGhlIG9yaWdpbmFsXG4gICAqIHN0cmVhbSBhcmUgcGFzc2VkIGludG8gdGhlIGZpbHRlciBmdW5jdGlvbiwgYW5kIGlmIHRoZSBmaWx0ZXJcbiAgICogZnVuY3Rpb24gcmV0dXJucyBhIHRydXRoeSB2YWx1ZSwgdGhlIHZhbHVlIGlzIHBhc3NlZCBvbnRvIHRoZSBuZXdcbiAgICogc3RyZWFtLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmaWx0ZXIgLSBUaGUgZmlsdGVyIGZ1bmN0aW9uXG4gICAqIEByZXR1cm5zIHtTdHJlYW19IC0gVGhlIGZpbHRlcmVkIHN0cmVhbVxuICAgKi9cbiAgZmlsdGVyKGZpcnN0OiBhbnksIHNlY29uZD86IEZ1bmN0aW9uKSB7XG4gICAgbGV0IHN0YXRlID0gdHlwZW9mIGZpcnN0ICE9PSAnZnVuY3Rpb24nICYmIGZpcnN0O1xuICAgIGxldCBoYXNTdGF0ZTpCb29sZWFuID0gISFzdGF0ZTtcbiAgICBsZXQgZmlsdGVyID0gaGFzU3RhdGUgPyBzZWNvbmQgOiBmaXJzdDtcbiAgICByZXR1cm4gbmV3IFN0cmVhbSgod3JpdGUpID0+IHtcbiAgICAgIHRoaXMucGlwZSgodmFsdWU6IGFueSkgPT4ge1xuICAgICAgICBsZXQgZmlsdGVyZWQgPSBoYXNTdGF0ZSA/IGZpbHRlcihzdGF0ZSwgdmFsdWUpIDogZmlsdGVyKHZhbHVlKTtcbiAgICAgICAgaWYgKGZpbHRlcmVkKSB7XG4gICAgICAgICAgd3JpdGUoZmlsdGVyZWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG50eXBlIFdyaXRlRnVuY3Rpb24gPSAod3JpdGU6IEZ1bmN0aW9uKSA9PiB2b2lkO1xudHlwZSBTdHJlYW1PcldyaXRlRnVuY3Rpb24gPSBTdHJlYW0gfCBXcml0ZUZ1bmN0aW9uO1xuXG5mdW5jdGlvbiB0b1N0cmVhbShzb2Y6U3RyZWFtT3JXcml0ZUZ1bmN0aW9uKTpTdHJlYW0ge1xuICBpZiAodHlwZW9mIHNvZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBuZXcgU3RyZWFtKDxXcml0ZUZ1bmN0aW9uPnNvZik7XG4gIH0gZWxzZSBpZiAoc29mIGluc3RhbmNlb2YgU3RyZWFtKSB7XG4gICAgcmV0dXJuIHNvZjtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyZWFtKC4uLmFyZ3M6IFN0cmVhbU9yV3JpdGVGdW5jdGlvbltdKSB7XG4gIGFyZ3NbMF0gPSBhcmdzWzBdIHx8IG5ldyBTdHJlYW0oKTtcbiAgcmV0dXJuIGFyZ3MubGVuZ3RoID4gMSA/IFN0cmVhbS5qb2luLmFwcGx5KG51bGwsIGFyZ3MubWFwKHRvU3RyZWFtKSkgOiBhcmdzWzBdO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBTdHJlYW07XG4iXX0=

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    "use strict";
	    var nop = function () { return 0; };
	    var hasDOM = !!((typeof window !== 'undefined') && window && (typeof document !== 'undefined') && document);
	    var W = {
	        hasDOM: hasDOM,
	        getScrollTop: nop,
	        getScrollLeft: nop,
	        getHeight: nop,
	        getWidth: nop,
	        rAF: hasDOM && window.requestAnimationFrame.bind(window)
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
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LXByb3h5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2luZG93LXByb3h5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBQ0EsSUFBSSxHQUFHLEdBQUcsY0FBTSxPQUFBLENBQUMsRUFBRCxDQUFDLENBQUM7SUFXbEIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUMsSUFBSSxNQUFNLElBQUksQ0FBQyxPQUFPLFFBQVEsS0FBSyxXQUFXLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQztJQUU1RyxJQUFJLENBQUMsR0FBZ0I7UUFDbkIsUUFBQSxNQUFNO1FBQ04sWUFBWSxFQUFFLEdBQUc7UUFDakIsYUFBYSxFQUFFLEdBQUc7UUFDbEIsU0FBUyxFQUFFLEdBQUc7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLEdBQUcsRUFBRSxNQUFNLElBQVUsTUFBTyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7S0FDaEUsQ0FBQztJQUVGO1FBQ0UsSUFBSSxFQUFFLEdBQUcsT0FBYSxRQUFTLENBQUMsZ0JBQWdCLEtBQUssV0FBVyxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxZQUFZLEdBQUcsRUFBRSxHQUFHLGNBQU0sT0FBTSxRQUFTLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUExQyxDQUEwQyxHQUFHLGNBQU0sT0FBTSxNQUFPLENBQUMsT0FBTyxFQUFyQixDQUFxQixDQUFDO1FBQ3JHLENBQUMsQ0FBQyxhQUFhLEdBQUcsRUFBRSxHQUFHLGNBQU0sT0FBTSxRQUFTLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUEzQyxDQUEyQyxHQUFHLGNBQU0sT0FBTSxNQUFPLENBQUMsT0FBTyxFQUFyQixDQUFxQixDQUFDO1FBQ3ZHLENBQUMsQ0FBQyxTQUFTLEdBQUcsY0FBTSxPQUFNLE1BQU8sQ0FBQyxXQUFXLEVBQXpCLENBQXlCLENBQUM7UUFDOUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxjQUFNLE9BQU0sTUFBTyxDQUFDLFVBQVUsRUFBeEIsQ0FBd0IsQ0FBQztJQUM5QyxDQUFDO0lBRUQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNYLEVBQUUsQ0FBQyxDQUFPLFFBQVMsQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM3QyxXQUFXLEVBQUUsQ0FBQztRQUNoQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDQSxRQUFTLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDcEUsQ0FBQztJQUNILENBQUM7SUFFRDtzQkFBZSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkZXRlY3QgdGhlIHByZXNlbmNlIG9mIERPTVxudmFyIG5vcCA9ICgpID0+IDA7XG5cbmludGVyZmFjZSBXaW5kb3dQcm94eSB7XG4gIGhhc0RPTTogYm9vbGVhbjtcbiAgZ2V0U2Nyb2xsVG9wOiBGdW5jdGlvbjtcbiAgZ2V0U2Nyb2xsTGVmdDogRnVuY3Rpb247XG4gIGdldEhlaWdodDogRnVuY3Rpb247XG4gIGdldFdpZHRoOiBGdW5jdGlvbjtcbiAgckFGOiBGdW5jdGlvbjtcbn1cblxubGV0IGhhc0RPTSA9ICEhKCh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgJiYgd2luZG93ICYmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSAmJiBkb2N1bWVudCk7XG5cbnZhciBXOiBXaW5kb3dQcm94eSA9IHtcbiAgaGFzRE9NLFxuICBnZXRTY3JvbGxUb3A6IG5vcCxcbiAgZ2V0U2Nyb2xsTGVmdDogbm9wLFxuICBnZXRIZWlnaHQ6IG5vcCxcbiAgZ2V0V2lkdGg6IG5vcCxcbiAgckFGOiBoYXNET00gJiYgKDxhbnk+d2luZG93KS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZCh3aW5kb3cpXG59O1xuXG5mdW5jdGlvbiBoYXNEb21TZXR1cCgpIHtcbiAgbGV0IHNlID0gdHlwZW9mICg8YW55PmRvY3VtZW50KS5zY3JvbGxpbmdFbGVtZW50ICE9PSAndW5kZWZpbmVkJztcbiAgVy5nZXRTY3JvbGxUb3AgPSBzZSA/ICgpID0+ICg8YW55PmRvY3VtZW50KS5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbFRvcCA6ICgpID0+ICg8YW55PndpbmRvdykuc2Nyb2xsWTtcbiAgVy5nZXRTY3JvbGxMZWZ0ID0gc2UgPyAoKSA9PiAoPGFueT5kb2N1bWVudCkuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxMZWZ0IDogKCkgPT4gKDxhbnk+d2luZG93KS5zY3JvbGxYO1xuICBXLmdldEhlaWdodCA9ICgpID0+ICg8YW55PndpbmRvdykuaW5uZXJIZWlnaHQ7XG4gIFcuZ2V0V2lkdGggPSAoKSA9PiAoPGFueT53aW5kb3cpLmlubmVyV2lkdGg7XG59XG5cbmlmIChoYXNET00pIHtcbiAgaWYgKCg8YW55PmRvY3VtZW50KS5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycpIHtcbiAgICBoYXNEb21TZXR1cCgpO1xuICB9IGVsc2Uge1xuICAgICg8YW55PmRvY3VtZW50KS5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaGFzRG9tU2V0dXApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFc7XG4iXX0=

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    "use strict";
	    var RAFPhase;
	    (function (RAFPhase) {
	        RAFPhase[RAFPhase["MEASURE"] = 0] = "MEASURE";
	        RAFPhase[RAFPhase["MUTATE"] = 1] = "MUTATE";
	    })(RAFPhase || (RAFPhase = {}));
	    exports.RAFPhase = RAFPhase;
	    var Frame = (function () {
	        function Frame() {
	        }
	        Frame.prototype.isMeasure = function () {
	            return this.phase === RAFPhase.MEASURE;
	        };
	        return Frame;
	    }());
	    exports.Frame = Frame;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdHJlYW1zL2ZyYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBQUEsSUFBSyxRQUdKO0lBSEQsV0FBSyxRQUFRO1FBQ1gsNkNBQU8sQ0FBQTtRQUNQLDJDQUFNLENBQUE7SUFDUixDQUFDLEVBSEksUUFBUSxLQUFSLFFBQVEsUUFHWjtJQWlCQyxnQkFBUSxZQWpCVDtJQUVEO1FBQUE7UUFXQSxDQUFDO1FBSEMseUJBQVMsR0FBVDtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDekMsQ0FBQztRQUNILFlBQUM7SUFBRCxDQUFDLEFBWEQsSUFXQztJQUdDLGFBQUssU0FITjtJQUtDIiwic291cmNlc0NvbnRlbnQiOlsiZW51bSBSQUZQaGFzZSB7XG4gIE1FQVNVUkUsXG4gIE1VVEFURVxufVxuXG5jbGFzcyBGcmFtZSB7XG4gIHBoYXNlOiBSQUZQaGFzZTtcbiAgdGltZXN0YW1wOiBudW1iZXI7XG4gIHNjcm9sbFRvcDogbnVtYmVyO1xuICBzY3JvbGxMZWZ0OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuXG4gIGlzTWVhc3VyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5waGFzZSA9PT0gUkFGUGhhc2UuTUVBU1VSRTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBGcmFtZSxcbiAgUkFGUGhhc2Vcbn07XG4iXX0=

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, raf_1, frame_1) {
	    "use strict";
	    var scrollTop = -1;
	    var scrollLeft = -1;
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = raf_1.measure.filter(function (frame) {
	        var newScrollTop = frame.scrollTop;
	        var newScrollLeft = frame.scrollLeft;
	        if (frame.phase === frame_1.RAFPhase.MEASURE && (newScrollTop !== scrollTop ||
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
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RyZWFtcy9zY3JvbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SUFHQSxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuQixJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUVwQjtzQkFBZSxhQUFPLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBWTtRQUN6QyxJQUFJLFlBQVksR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDckMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxnQkFBUSxDQUFDLE9BQU8sSUFBSSxDQUN0QyxZQUFZLEtBQUssU0FBUztZQUMxQixhQUFhLEtBQUssVUFBVSxDQUM3QixDQUFDLENBQUMsQ0FBQztZQUNGLFNBQVMsR0FBRyxZQUFZLENBQUM7WUFDekIsVUFBVSxHQUFHLGFBQWEsQ0FBQztZQUMzQixNQUFNLENBQUM7Z0JBQ0wsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO2dCQUMxQixXQUFBLFNBQVM7Z0JBQ1QsWUFBQSxVQUFVO2FBQ1gsQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1lYXN1cmUgfSBmcm9tICcuL3JhZic7XG5pbXBvcnQgeyBGcmFtZSwgUkFGUGhhc2UgfSBmcm9tICcuL2ZyYW1lJztcblxubGV0IHNjcm9sbFRvcCA9IC0xO1xubGV0IHNjcm9sbExlZnQgPSAtMTtcblxuZXhwb3J0IGRlZmF1bHQgbWVhc3VyZS5maWx0ZXIoKGZyYW1lOiBGcmFtZSkgPT4ge1xuICBsZXQgbmV3U2Nyb2xsVG9wID0gZnJhbWUuc2Nyb2xsVG9wO1xuICBsZXQgbmV3U2Nyb2xsTGVmdCA9IGZyYW1lLnNjcm9sbExlZnQ7XG4gIGlmIChmcmFtZS5waGFzZSA9PT0gUkFGUGhhc2UuTUVBU1VSRSAmJiAoXG4gICAgbmV3U2Nyb2xsVG9wICE9PSBzY3JvbGxUb3AgfHxcbiAgICBuZXdTY3JvbGxMZWZ0ICE9PSBzY3JvbGxMZWZ0XG4gICkpIHtcbiAgICBzY3JvbGxUb3AgPSBuZXdTY3JvbGxUb3A7XG4gICAgc2Nyb2xsTGVmdCA9IG5ld1Njcm9sbExlZnQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpbWVzdGFtcDogZnJhbWUudGltZXN0YW1wLFxuICAgICAgc2Nyb2xsVG9wLFxuICAgICAgc2Nyb2xsTGVmdFxuICAgIH07XG4gIH1cbn0pO1xuIl19

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, raf_1) {
	    "use strict";
	    var w = -1;
	    var h = -1;
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = raf_1.measure.filter(function (frame) {
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
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RyZWFtcy9yZXNpemUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SUFHQSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRVg7c0JBQWUsYUFBTyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEtBQVk7UUFDekMsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUN0QixJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNQLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDUCxNQUFNLENBQUM7Z0JBQ0wsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsTUFBTSxFQUFFLENBQUM7YUFDVixDQUFDO1FBQ0osQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWVhc3VyZSB9IGZyb20gJy4vcmFmJztcbmltcG9ydCB7IEZyYW1lLCBSQUZQaGFzZSB9IGZyb20gJy4vZnJhbWUnO1xuXG5sZXQgdyA9IC0xO1xubGV0IGggPSAtMTtcblxuZXhwb3J0IGRlZmF1bHQgbWVhc3VyZS5maWx0ZXIoKGZyYW1lOiBGcmFtZSkgPT4ge1xuICBsZXQgbkggPSBmcmFtZS5oZWlnaHQ7XG4gIGxldCBuVyA9IGZyYW1lLndpZHRoO1xuICBpZiAoblcgIT09IHcgfHwgbkggIT09IGgpIHtcbiAgICBoID0gbkg7XG4gICAgdyA9IG5XO1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogdyxcbiAgICAgIGhlaWdodDogaFxuICAgIH07XG4gIH1cbn0pO1xuIl19

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    "use strict";
	    var QueueElement = (function () {
	        function QueueElement() {
	        }
	        return QueueElement;
	    }());
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = QueueElement;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInF1ZXVlcy9lbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBSUE7UUFBQTtRQUtBLENBQUM7UUFBRCxtQkFBQztJQUFELENBQUMsQUFMRCxJQUtDO0lBRUQ7c0JBQWUsWUFBWSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgUXVldWVFbGVtZW50SW50ZXJmYWNlXG59IGZyb20gJy4vLi4vaW50ZXJmYWNlcyc7XG5cbmNsYXNzIFF1ZXVlRWxlbWVudCBpbXBsZW1lbnRzIFF1ZXVlRWxlbWVudEludGVyZmFjZSB7XG4gIGVsOiBFbGVtZW50O1xuICBjYWxsYmFjazogRnVuY3Rpb247XG4gIGlkOiBzdHJpbmc7XG4gIGJjcjogQ2xpZW50UmVjdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUXVldWVFbGVtZW50O1xuIl19

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, queue_1) {
	    "use strict";
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
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFmLXF1ZXVlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVldWVzL3JhZi1xdWV1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBSUE7UUFBdUIsNEJBQUs7UUFBNUI7WUFBdUIsOEJBQUs7UUFRNUIsQ0FBQztRQVBDLDRCQUFTLEdBQVQsVUFBVSxLQUFZLEVBQUUsT0FBOEI7WUFDcEQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDdEIsT0FBTyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLHFCQUFxQixFQUFFLENBQUM7Z0JBQ2pELE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDZCxDQUFDO1lBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7UUFDSCxlQUFDO0lBQUQsQ0FBQyxBQVJELENBQXVCLGVBQUssR0FRM0I7SUFFRDtzQkFBZSxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWV1ZUVsZW1lbnRJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCBRdWV1ZSBmcm9tICcuL3F1ZXVlJztcbmltcG9ydCB7IEZyYW1lIH0gZnJvbSAnLi8uLi9zdHJlYW1zL2ZyYW1lJztcblxuY2xhc3MgUkFGUXVldWUgZXh0ZW5kcyBRdWV1ZSB7XG4gIGludGVyY2VwdChmcmFtZTogRnJhbWUsIGVsZW1lbnQ6IFF1ZXVlRWxlbWVudEludGVyZmFjZSkge1xuICAgIGlmIChmcmFtZS5pc01lYXN1cmUoKSkge1xuICAgICAgZWxlbWVudC5iY3IgPSBlbGVtZW50LmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSQUZRdWV1ZTtcbiJdfQ==

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, stream_1) {
	    "use strict";
	    var Queue = (function () {
	        function Queue(name, collect) {
	            this.name = name;
	            this.items = [];
	            this.collect = collect;
	            this.stream = new stream_1.default(name + ' output stream');
	        }
	        Queue.prototype.push = function (element) {
	            this.items.push(element);
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
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVldWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWV1ZXMvcXVldWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SUFPQTtRQUtFLGVBQVksSUFBWSxFQUFFLE9BQWlCO1lBQ3pDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxnQkFBTSxDQUFDLElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3BELENBQUM7UUFDRCxvQkFBSSxHQUFKLFVBQUssT0FBOEI7WUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0IsQ0FBQztRQUVELHdCQUFRLEdBQVI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDO1FBUUQsbUJBQUcsR0FBSCxVQUFJLEtBQVU7WUFBZCxpQkFPQztZQU5DLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsT0FBOEI7Z0JBQzVDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwQyxNQUFNLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDM0UsQ0FBQztnQkFDRCxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQVlELHlCQUFTLEdBQVQsVUFBVSxLQUFVLEVBQUUsT0FBNkI7WUFDakQsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7UUFDSCxZQUFDO0lBQUQsQ0FBQyxBQS9DRCxJQStDQztJQUVEO3NCQUFlLEtBQUssQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHJlYW0gZnJvbSAnLi4vc3RyZWFtcy9zdHJlYW0nO1xuaW1wb3J0IHtcbiAgU3RyZWFtSW50ZXJmYWNlLFxuICBRdWV1ZUludGVyZmFjZSxcbiAgUXVldWVFbGVtZW50SW50ZXJmYWNlXG59IGZyb20gJy4vLi4vaW50ZXJmYWNlcyc7XG5cbmNsYXNzIFF1ZXVlIGltcGxlbWVudHMgUXVldWVJbnRlcmZhY2Uge1xuICBuYW1lOiBzdHJpbmc7XG4gIGl0ZW1zOiBBcnJheTxRdWV1ZUVsZW1lbnRJbnRlcmZhY2U+O1xuICBjb2xsZWN0OiBGdW5jdGlvbjtcbiAgc3RyZWFtOiBTdHJlYW07XG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgY29sbGVjdDogRnVuY3Rpb24pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB0aGlzLmNvbGxlY3QgPSBjb2xsZWN0O1xuICAgIHRoaXMuc3RyZWFtID0gbmV3IFN0cmVhbShuYW1lICsgJyBvdXRwdXQgc3RyZWFtJyk7XG4gIH1cbiAgcHVzaChlbGVtZW50OiBRdWV1ZUVsZW1lbnRJbnRlcmZhY2UpIHtcbiAgICB0aGlzLml0ZW1zLnB1c2goZWxlbWVudCk7XG4gIH1cblxuICB0b1N0cmVhbSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJlYW07XG4gIH1cblxuICAvKipcbiAgICogQXBwbGllcyBhIHZhbHVlIHRvIGV2ZXJ5IHF1ZXVlIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7QW55fSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byB0YXAgaW50byB0aGUgcXVldWVcbiAgICogQHJldHVybnMge09iamVjdH0gLSBPYmplY3Qgd2l0aCBwZXJjZW50IGhpZGRlbiBwcm9wZXJ0aWVzXG4gICAqL1xuICB0YXAodmFsdWU6IGFueSkge1xuICAgIHRoaXMuaXRlbXMubWFwKChlbGVtZW50OiBRdWV1ZUVsZW1lbnRJbnRlcmZhY2UpID0+IHtcbiAgICAgIGlmICghdGhpcy5pbnRlcmNlcHQodmFsdWUsIGVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3QodGhpcy5zdHJlYW0ud3JpdGUuYmluZCh0aGlzLnN0cmVhbSksIHZhbHVlLCBlbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRvIHNwZWNpZnkgYSBmdW5jdGlvbiB0aGF0IGNhbiBwcmV2ZW50IGluZGl2aWR1YWwgcXVldWVcbiAgICogaXRlbXMgZnJvbSBiZWluZyB0YXBwZWQuIFJldHVybiB0cnVlIGlmIGEgZ2l2ZW4gdmFsdWUsIFF1ZXVlRWxlbWVudEludGVyZmFjZVxuICAgKiBjb21iaW5hdGlvbiBzaG91bGQgbm90IGdldCB0YXBwZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7QW55fSB2YWx1ZSAtIFRoZSB2YWx1ZSBiZWluZyB0YXBwZWQgaW50byB0aGUgcXVldWVcbiAgICogQHBhcmFtIHtRdWV1ZUVsZW1lbnRJbnRlcmZhY2V9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCBhYm91dCB0byBiZSB0YXBwZWRcbiAgICogQHJldHVybnMge0Jvb2xlYW59IC0gU2hvdWxkIGJlIHRydWUgaWYgdmFsdWUvZWxlbWVudCBwYWlyIHNob3VsZG4ndFxuICAgKiBiZSB0YXBwZWRcbiAgICovXG4gIGludGVyY2VwdCh2YWx1ZTogYW55LCBlbGVtZW50OlF1ZXVlRWxlbWVudEludGVyZmFjZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBRdWV1ZTtcbiJdfQ==

/***/ }
/******/ ])
});
;