export enum RAFPhase {
  MEASURE,
  MUTATE
}

export interface QueueElementInterface {
  el?: Element;
  callback: Function;
  id: string;
}

export interface QueueDOMElementInterface extends QueueElementInterface {
  el: Element;
  bcr: ClientRect;
}

export interface QueueInterface {
  name: string;
  items: Array<QueueElementInterface>;
  push: (element: QueueElementInterface) => void;
  toStream: () => StreamInterface;
  callOnPopulate: (callback: Function) => void;
}

export interface StreamInterface {
  write: (value: any) => void;
  pipe: (target: StreamInterface) => StreamInterface;
  callOnPopulate: (callback: Function) => void;
}
