import RAF from './raf';
import Frame from './frame';
import W from './../window-proxy';

let scrollPosition = -1;

export default RAF.filter((frame: Frame) => {
  let newPos = frame.scrollTop;
  if (frame.phase === Frame.PHASE.MEASURE && newPos !== scrollPosition) {
    scrollPosition = newPos;
    return {
      timestamp: frame.timestamp,
      position: newPos
    };
  }
});
