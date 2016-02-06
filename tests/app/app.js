requirejs.config({
  baseUrl: '../../amd',
  paths: {
    ventana: 'index'
  }
});

requirejs(["ventana", "consumers/combination", "consumers/local/viewport"], function(ventana, combination, viewport) {
  viewport();
  items.forEach(item => {
    ventana.onViewport(item.id, item.el, () => {
      //console.log(item.id + ' In Da House');
    })
  });
});
