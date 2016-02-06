export interface QueueElementInterface {
  el: Element;
  callback: Function;
  id: string;
  bcr: ClientRect;
  output?: StreamInterface
}

export interface QueueInterface {
  name: string;
  items: Array<QueueElementInterface>;
  collect: Function;
  push: (element: QueueElementInterface) => void;
  tap: (value: any) => void;
  intercept: (value: any, element:QueueElementInterface) => void;
  stream: StreamInterface;
}

export interface StreamInterface {
  name: string;
  targets: Array<StreamInterface | QueueInterface | Function>;
  write: (value: any) => void;
  pipe: (target: StreamInterface | QueueInterface | Function) => (StreamInterface | QueueInterface | Function);
  filter: (first: any, second?: Function) => StreamInterface;
}
