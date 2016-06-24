import { RAFPhase } from './../interfaces';

class Frame {
  phase: RAFPhase;
  timestamp: number;
  scrollTop: number;
  scrollLeft: number;
  width: number;
  height: number;

  isMeasure() {
    return this.phase === RAFPhase.MEASURE;
  }
}

export default Frame;
