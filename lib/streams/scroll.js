import RAF from './raf';

function getScrollTop() {
  return document.scrollingElement.scrollTop;
}

let scrollPosition = 0;

export default RAF.filter((frame) => {
  let newPos = getScrollTop();
  if (newPos !== scrollPosition) {
    scrollPosition = newPos;
    return {
      timestamp: frame.timestamp,
      position: newPos
    };
  }
});
