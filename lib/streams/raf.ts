import Stream from './stream';
import rafPhase from './raf-phase';
import W from './../window-proxy';

class RAFStream extends Stream {
  write (timestamp: number) {
    let measure = {
      phase: rafPhase.MEASURE,
      timestamp
    };
    let mutate = {
      phasee: rafPhase.MUTATE,
      timestamp
    };
    super.write(measure);
    super.write(mutate);
  }
}

let RAF = new RAFStream('requestAnimationFrame');

let pollForAF = () => {
  RAF.write(Date.now());
  W.rAF(pollForAF);
}
W.rAF(pollForAF);

export default RAF;
