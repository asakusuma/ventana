import RAF from './raf';
import Frame from './frame';

let w = -1;
let h = -1;

export default RAF.filter((frame: Frame) => {
  if (frame.phase === Frame.PHASE.MEASURE) {
    let nH = frame.height;
    let nW = frame.width;
    if (nW !== w || nH !== h) {
      h = nH;
      w = nW;
      return {
        width: w,
        height: h
      };
    }
  }
});
