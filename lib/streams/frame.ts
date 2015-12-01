enum RAFPhase {
  MEASURE,
  MUTATE
}

class Frame {
  static PHASE = RAFPhase;

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
