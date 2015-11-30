import RAF from './raf';
import { getHeight, getWidth } from './../window-proxy';

let h = getHeight();
let w = getWidth();

export default RAF.filter((frame: any) => {
  if (frame.MEASURE) {
    let nH = getHeight();
    let nW = getWidth();
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
