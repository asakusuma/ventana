import Stream from './stream';
import W from './../window-proxy';
import Frame from './frame';
import { RAFPhase, StreamInterface } from './../interfaces';

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
    frame.phase = RAFPhase.MUTATE;
    super.write(frame);
  }
}

let raf = new Stream({
  init() {
    let pollForAF = () => {
      this.write(Date.now());
      W.rAF(pollForAF);
    };
    W.rAF(pollForAF);
  }
});

let measure = raf.pipe(new Stream({
  process(frame: Frame) {
    if (frame.phase === RAFPhase.MEASURE) {
      return frame;
    }
  }
}));

let poll = raf.pipe(new Stream({
  process(frame: Frame) {
    if (frame.phase !== RAFPhase.MEASURE) {
      return frame;
    }
  }
}));



let w = -1;
let h = -1;

let resize = measure.pipe(new Stream({
  process(frame: Frame) {
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
}));

let scrollTop = -1;
let scrollLeft = -1;

let scroll = measure.pipe(new Stream({
  process(frame: Frame) {
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
  }
}));



export {
  StreamInterface,
  raf,
  resize,
  scroll,
  measure,
  poll
};
