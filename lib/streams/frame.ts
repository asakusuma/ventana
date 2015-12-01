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
}

export default Frame;
