requirejs.config({
    baseUrl: '../../amd',
    paths: {
      ventana: 'index'
    }
});

requirejs(["ventana"], function(ventana) {
  ventana = ventana['default'];
  items.forEach(item => {
    ventana.onViewport(item.id, item.el, () => {
      console.log(item.id + ' In Da House');
    })
  });
});
