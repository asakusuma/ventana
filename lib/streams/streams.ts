import Stream from './stream';
import W from './../window-proxy';
import Frame from './frame';
import { RAFPhase, StreamInterface } from './../interfaces';

let raf = new Stream({
  init() {
    let pollForAF = () => {
      this.write(Date.now());
      W.rAF(pollForAF);
    };
    W.rAF(pollForAF);
  },
  process(value: number | Frame) {
    if (typeof value === 'number') {
      let frame = new Frame(
        RAFPhase.MEASURE,
        value,
        W.getScrollTop(),
        W.getScrollLeft(),
        W.getWidth(),
        W.getHeight()
      );
      this.write(frame);
      frame.phase = RAFPhase.MUTATE;
      return frame;
    } else {
      return value;
    }
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

let resize = measure.pipe(new Stream({
  init() {
    this.w = W.getWidth();
    this.h = W.getHeight();
  },
  process(frame: Frame) {
    let nH = frame.height;
    let nW = frame.width;
    if (nW !== this.w || nH !== this.h) {
      this.h = nH;
      this.w = nW;
      return {
        width: nW,
        height: nH
      };
    }
  }
}));

let scroll = measure.pipe(new Stream({
  init() {
    this.scrollTop = W.getScrollTop();
    this.scrollLeft = W.getScrollLeft();
  },
  process(frame: Frame) {
    let newScrollTop = frame.scrollTop;
    let newScrollLeft = frame.scrollLeft;
    if (frame.phase === RAFPhase.MEASURE && (
      newScrollTop !== this.scrollTop ||
      newScrollLeft !== this.scrollLeft
    )) {
      this.scrollTop = newScrollTop;
      this.scrollLeft = newScrollLeft;
      return {
        timestamp: frame.timestamp,
        newScrollTop,
        newScrollLeft
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
