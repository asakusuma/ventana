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

export class QueueDOMElement extends QueueElement {
  el: Element;
  callback: Function;
  id: string;
  bcr: ClientRect;
}
