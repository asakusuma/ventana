import RAF from './raf';

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
