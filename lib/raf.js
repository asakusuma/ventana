function setupRafListeners(callback) {
  let pollForAF = () => {
    callback();
    rAF(pollForAF);
  }
  rAF(pollForAF);
}


export default {

};
