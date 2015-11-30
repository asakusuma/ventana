import RAF from './raf';
import W from './../window-proxy';

let scrollPosition = W.getScrollTop();

export default RAF.filter((frame: any) => {
  let newPos = W.getScrollTop();
  if (newPos !== scrollPosition) {
    scrollPosition = newPos;
    return {
      timestamp: frame.timestamp,
      position: newPos
    };
  }
});
