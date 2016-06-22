import Stream from './stream';
import W from './../window-proxy';
import { Frame, RAFPhase } from './frame';

class RAFStream extends Stream {
  write (timestamp: number) {
    let frame = new Frame();
    frame.timestamp = timestamp;
    frame.phase = RAFPhase.MEASURE;
    frame.scrollTop = W.getScrollTop();
    frame.scrollLeft = W.getScrollLeft();
    frame.width = W.getWidth();
    frame.height = W.getHeight();

    super.write(frame);
    frame.phase = RAFPhase.MUTATE
    super.write(frame);
  }
}

let raf = new RAFStream('requestAnimationFrame');

let measure = raf.filter((frame: Frame) => {
  if (frame.phase === RAFPhase.MEASURE) {
    return frame;
  }
});

let poll = raf.filter((frame: Frame) => {
  if (frame.phase !== RAFPhase.MEASURE) {
    return frame;
  }
});

let pollForAF = () => {
  raf.write(Date.now());
  W.rAF(pollForAF);
}
W.rAF(pollForAF);

export {
  raf,
  measure,
  poll
};
