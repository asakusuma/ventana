export enum RAFPhase {
  MEASURE,
  MUTATE
}

export interface QueueElementInterface {
  el: Element;
  callback: Function;
  id: string;
  bcr?: ClientRect;
  output?: StreamInterface
}

export interface QueueInterface {
  collect: Function;
  push: (element: QueueElementInterface) => void;
  tap: (value: any) => void;
  intercept: (value: any, element:QueueElementInterface) => void;
  toStream: () => StreamInterface;
  callOnPopulate: (callback: Function) => void;
}

export interface StreamInterface {
  name: string;
  targets: Array<StreamTarget>;
  write: (value: any) => void;
  pipe: (target: StreamInterface | QueueInterface | Function) => StreamInterface;
  filter: (first: any, second?: Function) => StreamInterface;
}

export interface StreamTarget {
  stream: StreamInterface;
  endpoint: StreamInterface | QueueInterface | Function;
}
