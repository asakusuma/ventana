import {
  QueueElementInterface
} from './../interfaces';

class QueueElement implements QueueElementInterface {
  el: Element;
  callback: Function;
  id: string;
  bcr: ClientRect;
}

export default QueueElement;
