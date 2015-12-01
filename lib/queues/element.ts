interface ClientRect {
  top: number;
  left: number;
  width: number;
  height: number;
}

interface QueueElement {
  el: Object;
  callback: Function;
  id: string;
  bcr: ClientRect;
}

export default QueueElement;
