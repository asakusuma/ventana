import { StreamInterface, QueueInterface, QueueElementInterface } from './../interfaces';

export interface StreamOptions {
  init?: Function;
  process?: (value: any, item?: QueueElementInterface) => any;
  queue?: QueueInterface;
}

export default class Stream implements StreamInterface {
  private options: StreamOptions;
  private _process: Function;
  private targets: Array<StreamInterface> = [];
  constructor (options: StreamOptions = {}) {
    this.options = options;
    this._process = options.process || ((identity: any) => identity);
    if (options.init) {
      // TODO: Refactor to make lazy
      options.init.call(this);
    }
  }
  process(value: any, item?: QueueElementInterface) {
    return this._process.call(this, value, item);
  }
  write(value: any) {
    value = this.process ? this.process(value) : value;
    if (value) {
      if (this.options.queue) {
        this.options.queue.items.forEach((item: QueueElementInterface) => {
          this.targets.forEach((target: any) => {
            target.write(this.process(value, item));
          });
        });
      } else {
        this.targets.forEach((target: any) => {
          target.write(this.process(value));
        });
      }
    }
  }
  pipe(target: StreamInterface): StreamInterface {
    this.targets.push(target);
    return target;
  }
}

export class Terminal implements StreamInterface {
  private terminal: Function;
  private targets: Array<StreamInterface> = [];
  constructor(terminal: Function) {
    this.terminal = terminal;
  }
  write(value: any) {
    let result = this.terminal(value);
    this.targets.forEach((target: any) => {
      target.write(result);
    });
  }
  pipe(target: StreamInterface) {
    this.targets.push(target);
    return target;
  }
}
