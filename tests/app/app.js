requirejs.config({
    baseUrl: '../../amd',
    paths: {
      ventana: 'index'
    }
});

requirejs(["ventana"], function(ventana) {
  ventana = ventana['default'];
  ventana.init();
  ventana.onScroll(function(obj) {
    console.log(obj.position)
  });
});
