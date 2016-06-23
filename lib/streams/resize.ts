import { measure } from './raf';
import { Frame, RAFPhase } from './frame';

let w = -1;
let h = -1;

export default measure.filter((frame: Frame) => {
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
});
