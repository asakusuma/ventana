import {
  QueueElementInterface,
  QueueDOMElementInterface
} from './../interfaces';

class QueueElement implements QueueElementInterface {
  callback: Function;
  id: string;
}

export default QueueElement;

export class QueueDOMElement extends QueueElement implements QueueDOMElementInterface {
  el: Element;
  callback: Function;
  id: string;
  bcr: ClientRect;
}
