export enum RAFPhase {
  MEASURE,
  MUTATE
}

export interface QueueElementInterface {
  el?: Element;
  callback: Function;
  id: string;
  bcr?: ClientRect;
  output?: StreamInterface
}

export interface QueueInterface {
  name: string;
  items: Array<QueueElementInterface>;
  push: (element: QueueElementInterface) => void;
  toStream: () => StreamInterface
}

export interface StreamInterface {
  write: (value: any) => void;
  pipe: (target: StreamInterface) => StreamInterface;
}
