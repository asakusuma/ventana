# ventana [![Build Status](https://travis-ci.org/asakusuma/ventana.svg)](https://travis-ci.org/asakusuma/ventana)
Window event microlibrary. Exposes a pretty API for window events and utilities.

```JavaScript
ventana.on('scroll', function() {
  console.log('User scrolled');
});
```

## Usage
Ventana is available as a [standard npm module](https://www.npmjs.com/package/ventana). Additionally, you can use the [minified UMD file](https://github.com/asakusuma/ventana/blob/master/exports/ventana.umd.js).

## API

##### `ventana.on(Object target, Function callback)`
Bind to window events:

* **move** - Triggered when the user scrolls on either axis.
* **resize**
* **destroy** (close tab or entire window)
* **hide** (move to another tab)
* **show**

#### Performance note
For performance reasons, the move event (aka scroll) is [implemented](https://github.com/asakusuma/ventana/blob/master/lib/ventana.js#L32) via [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame).

<hr>

##### `ventana.queue(Function callback)`
Queue up a function to be called after the next [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) loop completes.

<hr>

##### `ventana.mapBoundingRectToAbsolute(Object boundingRect)` -> `Object`

The native DOM API exposes a nifty function called [Element.getBoundingClientRect()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect), which returns positioning info about a DOM element. However, this info is relative to the viewport. Use **.mapBoundingRectToAbsolute** to map this object with relative position values to an object with absolute position values.

<hr>

##### `ventana.getWindowRect(Object offset)` -> `Object`

Returns the [Element.getBoundingClientRect()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) equivalent value for the viewport. You can pass an offset object that expects any combination of the following properties: top, left, bottom, right.

## How it works

Under the hood, there are two main abstractions used to implement Ventana: streams and queues.

#### Streams
Ventana streams are barebones, essentially just lists of listeners with the ability to filter on values and work nicely with queues. Listeners can be functions, other streams, or queues. You write a single value to the stream, and each listener gets called with that value. Streams are used to represent a single type of repeatable event, like the user scrolling or the window being re-sized. In the later case, the value being passed by the stream could be the updated dimensions of the window.

#### Queues
Ventana queues represent a set of objects that can receive a stream of values, i.e. a Stream. Queues are usually an abstraction above a paired stream. For instance, a queue can represent a list of DOM objects that need to be modified when the user scrolls. In this example, a stream representing scroll events could be piped into the queue representing the DOM objects.
