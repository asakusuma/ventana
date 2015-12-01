import Stream from './stream';
import Frame from './frame';
import RAFResult from './raf-result';
import W from './../window-proxy';

class RAFStream extends Stream {
  write (timestamp: number) {
    let frame:Frame = {
      phase: Frame.PHASE.MEASURE,
      timestamp,
      scrollTop: W.getScrollTop(),
      scrollLeft: W.getScrollLeft(),
      width: W.getWidth(),
      height: W.getHeight()
    };

    super.write(frame);
    frame.phase = Frame.PHASE.MUTATE
    super.write(frame);
  }
}

let RAF = new RAFStream('requestAnimationFrame');

let pollForAF = () => {
  RAF.write(Date.now());
  W.rAF(pollForAF);
}
W.rAF(pollForAF);

export default RAF;
