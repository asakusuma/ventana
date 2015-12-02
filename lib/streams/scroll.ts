import RAF from './raf';
import { Frame, RAFPhase } from './frame';

let scrollPosition = -1;

export default RAF.filter((frame: Frame) => {
  let newPos = frame.scrollTop;
  if (frame.phase === RAFPhase.MEASURE && newPos !== scrollPosition) {
    scrollPosition = newPos;
    return {
      timestamp: frame.timestamp,
      position: newPos
    };
  }
});
