var assert = require('chai').assert;
var Context = require('../headless-context');
var context;

describe('Abstractions API', function() {
  beforeEach(function() {
    context = new Context();
  });

  afterEach(function() {
    context.close();
  })

  describe('queue()', function() {
    it('should fire callback once and only once even after scrolling around', function() {
      return context.evaluate(function() {
        window.STATE.queued = 0;
        ventana.queue(function() {
          window.STATE.queued++;
        });
      })
      .scrollTo(100)
      .wait(50)
      .scrollTo(200)
      .wait(50)
      .scrollTo(150)
      .wait(50)
      .getExecution()
      .evaluate(function() {
        return window.STATE.queued;
      }).then(function(result) {
        assert.equal(result, 1, 'Queued callback fired once');
      });
    });
  });
});
