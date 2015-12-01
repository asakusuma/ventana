import scroll from './streams/scroll';
import Element from './queues/element';
import onViewport from './implementations/viewport';

let ventana = {
  init() {},
  onScroll(func: Function) {
    scroll.listen(func);
  },
  onViewport
};

export default ventana;
