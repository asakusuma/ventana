define(['ventana'], function(ventana) {
  ventana.stream(function(write) {
    var start = Date.now();
    setInterval(function() {
      write(Date.now() - start);
    }, 500);
  }, write => {
    this.addEventListener('mousemove', write);
  }).filter({
    pointer: 0
  }, function(state, value) {
    var result = {
      time: value[0] - state.pointer,
      mouse: value[1]
    };

    if (result.mouse !== state.mouse) {
      state.pointer = value[0];
      result.time = 0;
      state.mouse = result.mouse;
    }

    if (result.time < 5000) {
      return false;
    }

    return result;
  }).pipe(function(value) {
    //console.log(value);
  });
});
