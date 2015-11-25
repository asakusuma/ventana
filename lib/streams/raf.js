import Stream from './stream';
import { rAF } from './../window-proxy';

let RAF = new Stream('requestAnimationFrame');

let pollForAF = () => {
  RAF.write({
    timestamp: Date.now()
  });
  rAF(pollForAF);
}
rAF(pollForAF);

export default RAF;
