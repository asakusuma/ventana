import Stream from './stream';

let RAF = new Stream();

let hasDOM = (typeof window !== 'undefined') && window
    && (typeof document !== 'undefined') && document;
let rAF = hasDOM && window.requestAnimationFrame;

let pollForAF = () => {
  RAF.write({
    timestamp: Date.now()
  });
  rAF(pollForAF);
}
rAF(pollForAF);

export default RAF;
