import Stream from './stream';
import { rAF } from './../window-proxy';

let RAF = new Stream('requestAnimationFrame');

class RAFStream extends Stream {
  write (timestamp) {
    let measure = {
      MEASURE: true,
      timestamp
    };
    let mutate = {
      MUTATE: true,
      timestamp
    };
    super.write(measure);
    super.write(mutate);
  }
}

let pollForAF = () => {
  RAF.write(Date.now());
  rAF(pollForAF);
}
rAF(pollForAF);

export default RAF;
