requirejs.config({
    baseUrl: '../../amd',
    paths: {
      ventana: 'index'
    }
});

requirejs(["ventana", "consumers/combination"], function(ventana, combination) {
  items.forEach(item => {
    ventana.onViewport(item.id, item.el, () => {
      console.log(item.id + ' In Da House');
    })
  });
});
