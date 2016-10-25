import { RAFPhase } from './../interfaces';

class Frame {
  constructor(
    public phase: RAFPhase,
    public timestamp: number,
    public scrollTop: number,
    public scrollLeft: number,
    public width: number,
    public height: number
  ) {}

  isMeasure() {
    return this.phase === RAFPhase.MEASURE;
  }
}

export default Frame;
