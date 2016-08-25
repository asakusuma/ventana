var assert = require('chai').assert;
var Context = require('../headless-context');
var context;

describe('Core window events', function() {
  beforeEach(function() {
    context = new Context();
  });

  afterEach(function() {
    context.close();
  })

  it('should not fire move event without scroll', function() {
    return context.evaluate(function() {
      ventana.on('move', function() {
        window.STATE.moved = true;
      });
    })
    .getExecution()
    .evaluate(function() {
      return window.STATE.moved;
    }).then(function(result) {
      assert(!result, 'Move event not fired');
    });
  });

  it('should fire move event after scroll', function() {
    return context.evaluate(function() {
      ventana.on('move', function() {
        window.STATE.moved = true;
      });
    })
    .scrollTo(100)
    .wait(10)
    .getExecution()
    .evaluate(function() {
      return window.STATE.moved;
    }).then(function(result) {
      assert(result, 'Move event fired');
    });
  });
});
