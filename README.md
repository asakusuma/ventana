# ventana
Window event microlibrary. Exposes a pretty API for window events and utilities.

```JavaScript
ventana.on('hide', function() {
  console.log('User hid the current tab');
});
```

## API

##### `ventana.on(Object target, Function callback)`
Bind to window events:

* move
* resize
* destroy (close tab or entire window)
* hide (move to another tab)
* show

<hr>

##### `ventana.mapBoundingRectToAbsolute(Object boundingRect)` -> `Object`

The native DOM API exposes a nifty function called [Element.getBoundingClientRect()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect), which returns positioning info about a DOM element. However, this info is relative to the viewport. Use **.mapBoundingRectToAbsolute** to map this object with relative position values to an object with absolute position values.

<hr>

##### `ventana.getWindowRect()` -> `Object`

Returns the [Element.getBoundingClientRect()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) equivalent value for the viewport.