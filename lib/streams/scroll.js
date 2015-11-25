import RAF from './raf';
import { getScrollTop } from './../window-proxy';

let scrollPosition = getScrollTop();

export default RAF.filter((frame) => {
  let newPos = getScrollTop();
  if (newPos !== scrollPosition) {
    scrollPosition = newPos;
    return {
      timestamp: frame.timestamp,
      position: newPos
    };
  }
});
