function handleError(msg) {
  console.error(msg);
}

let counter = 1;
function uuid() {
  return counter++;
}

export default {
  /**
   * Current state variables about the viewport
   *
   * @private
   * @type {Object}
   * @property _viewport
   */
  _viewport: {
    y: 0,
    x: 0,
    width: 0,
    height: 0
  },

  /**
   * List of queues that require requestAnimationFrame polling
   *
   * @private
   * @type {Array}
   * @property _rafQueueNames
   */
  _rafQueueNames: [],

  /**
   * Object map of queues
   *
   * @private
   * @type {Object}
   * @property _queues
   */
  _queues: {},

  /**
   * Register a new queue
   *
   * @method register
   * @param {String} name - The queue name
   * @param {Object} config - The config object
   * @param {Boolean} config.raf - Flag determining if the queue requires requestAnimationFrame polling
   * @param {Boolean} config.element - Flag determining if queued listeners have an associated DOM element
   */
  register(name, { raf = false, element = false }) {
    // If the queue doesn't exist yet or the queue previously wasn't a RAF queue
    let q = this._queues[name];
    if (raf && (!q || !q.raf)) {
      this._rafQueueNames.push(name);
    }
    this._queues[name] = {
      raf: raf,
      element: element,
      listeners: []
    };
  },
  init() {
    let hasDOM = (typeof window !== 'undefined') && window
        && (typeof document !== 'undefined') && document;
    let rAF = hasDOM && window.requestAnimationFrame;

    let se = typeof document.scrollingElement !== 'undefined';
    this.getScrollTop = se ? () => document.scrollingElement.scrollTop : () => window.scrollY;
    this.getScrollLeft = se ? () => document.scrollingElement.scrollLeft : () => window.scrollX;
  },

  listen(queueName, { el, id, callback, context }) {
    let queue = this._queues[queueName];
    if (!callback) {
      return;
    } else if (queue.element && !el) {
      handleError(queueName + ' listeners must include an element.');
      return;
    }
    id = id || uuid();
  },

  /**
   * Loop through every
   *
   * @method flush
   */
  flush(queueName) {
    let queue = this._queues[queueName];
  }
};
