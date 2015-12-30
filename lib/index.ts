import scroll from './streams/scroll';
import Element from './queues/element';
import onViewport from './implementations/viewport';

let ventana = {
  init() {},
  onScroll(func: Function) {
    scroll.pipe(func);
  },
  onViewport
};

export default ventana;
