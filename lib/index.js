import queues from './queues';

let ventana = {
  init() {
    queues.register('resize', {
      raf: true,
      element: true
    });
  }
};

export default ventana;
