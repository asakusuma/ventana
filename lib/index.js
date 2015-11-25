import scroll from './streams/scroll';
import resize from './streams/resize';


let ventana = {
  init() {},
  onScroll(func) {
    scroll.listen(func);
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
