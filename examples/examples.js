ventana.on('move', function(info) {
  console.log(info);
})

function ViewportElement(id, el, callback) {
  this.inViewport = false;
  this.id = id;
  this.el = el;
  this.callback = callback;
}

// Queue of viewport tracked dom element
var viewportQueue = new ventana.RAFQueue('Viewport', function(write, frame, el) {
  var inViewport = el.bcr.top < frame.height &&
    el.bcr.top + el.bcr.height > 0 &&
    el.bcr.left < frame.width &&
    el.bcr.left + el.bcr.width > 0;

  if (!el.inViewport && inViewport) {
    el.callback();
  }
  el.inViewport = inViewport;

  write(el);

  return el;
});

ventana.RAFStream.pipe(viewportQueue);

var el = document.getElementById('items').firstChild;
var element = new ViewportElement('1', el, function() {
  console.log('first item visible');
});
viewportQueue.push(element);
