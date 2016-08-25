import { StreamInterface, QueueInterface, QueueElementInterface } from './../interfaces';

export interface StreamOptions {
  init?: Function;
  process?: (value: any, item?: QueueElementInterface) => any;
  queue?: QueueInterface;
  consume?: Boolean;
}

export default class Stream implements StreamInterface {
  private options: StreamOptions;
  private _process: Function;
  private targets: Array<StreamInterface> = [];
  private refCount: number = 0;
  private populateCallbacks: Array<Function> = [];
  constructor (options: StreamOptions = {}) {
    this.options = options;
    this._process = options.process || ((identity: any) => identity);
    if (options.queue) {
      options.queue.callOnPopulate(() => {
        this.onPopulate();
      });
    }
  }
  process(value: any, item?: QueueElementInterface) {
    return this._process.call(this, value, item);
  }
  private handleQueue(value: any, item: QueueElementInterface) {
    this.targets.forEach((target: any) => {
      let result = this.process(value, item);
      if (result) {
        target.write(result);
      }
    });
  }
  write(value: any) {
    if (this.options.queue) {
      if (this.options.consume) {
        while (this.options.queue.items.length > 0) {
          this.handleQueue(value, this.options.queue.items.pop());
        }
      } else {
        this.options.queue.items.forEach((item: QueueElementInterface) => this.handleQueue(value, item));
      }
    } else if (value = this.process(value)) {
      this.targets.forEach((target: any) => {
        target.write(value);
      });
    }
  }
  private onPopulate() {
    if (this.refCount < 1 && this.options.init) {
      this.options.init.call(this);
    }
    this.populateCallbacks.forEach((callback: Function) => callback());
    this.refCount++;
  }
  pipe(target: StreamInterface): StreamInterface {
    this.targets.push(target);
    if (!this.options.queue) {
      target.callOnPopulate(() => {
        this.onPopulate();
      });
    }
    return target;
  }
  callOnPopulate(callback: Function) {
    this.populateCallbacks.push(callback);
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
  callOnPopulate(callback: Function) {
    callback();
  }
}
