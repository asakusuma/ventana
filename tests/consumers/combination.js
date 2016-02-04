define(['ventana'], function(ventana) {
  ventana.stream(function(write) {
    var start = Date.now();
    setInterval(function() {
      write(Date.now() - start);
    }, 500);
  }, write => {
    this.addEventListener('mousemove', write);
  }).pipe(function(state) {
    //console.log(state);
  });
});
