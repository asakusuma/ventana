import Element from './element';
import Queue from './queue';
import { Frame } from './../streams/frame';

class RAFQueue extends Queue {
  intercept(frame: Frame, element: Element) {
    if (frame.isMeasure()) {
      element.bcr = element.el.getBoundingClientRect();
      return true;
    }
    return false;
  }
}

export default RAFQueue;
