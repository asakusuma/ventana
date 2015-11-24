import scrollStream from './streams/scroll';


let ventana = {
  init() {},
  onScroll(func) {
    scrollStream.listen(func);
  }
  /*
  init() {
    queues.register('resize', {
      raf: true,
      element: true
    });
  }
  */
};

export default ventana;
