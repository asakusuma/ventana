import { measure } from './raf';
import { Frame, RAFPhase } from './frame';

let scrollTop = -1;
let scrollLeft = -1;

export default measure.filter((frame: Frame) => {
  let newScrollTop = frame.scrollTop;
  let newScrollLeft = frame.scrollLeft;
  if (frame.phase === RAFPhase.MEASURE && (
    newScrollTop !== scrollTop ||
    newScrollLeft !== scrollLeft
  )) {
    scrollTop = newScrollTop;
    scrollLeft = newScrollLeft;
    return {
      timestamp: frame.timestamp,
      scrollTop,
      scrollLeft
    };
  }
});
