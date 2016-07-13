QUnit.module('Queue');

QUnit.test('tap() works', function(assert){

  var element = {
    el: null,
    callback: null,
    id: null,
    bcr: null
  };

  var taps = 0;
  var value = null;
  var queue = new ventana.Queue('test-queue', function(write, v) {
    taps++;
    value = v;
  });

  queue.push(element);

  queue.tap('swag');

  assert.equal(value, 'swag', 'value is passed');
  assert.equal(taps, 1, 'consuming function called once');
});

QUnit.test('remove() works using id', function(assert){
  var first = {
    el: null,
    callback: null,
    id: 'first',
    bcr: null
  };
  var second = {
    el: null,
    callback: null,
    id: 'second',
    bcr: null
  };
  var taps = 0;

  var queue = new ventana.Queue('test-queue', function() {
    taps++;
  });

  queue.push(first);
  queue.push(second);

  queue.tap('swag');

  queue.remove('first');

  queue.tap('swag');

  assert.equal(taps, 3, '3 items are tapped');
});


QUnit.test('remove() works using element', function(assert){
  var firstEl = document.createElement('div');
  var first = {
    el: firstEl,
    callback: null,
    id: 'first',
    bcr: null
  };
  var secondEl = document.createElement('div');
  var second = {
    el: secondEl,
    callback: null,
    id: 'second',
    bcr: null
  };
  var taps = 0;

  var queue = new ventana.Queue('test-queue', function() {
    taps++;
  });

  queue.push(first);
  queue.push(second);

  queue.tap('swag');

  queue.remove(firstEl);

  queue.tap('swag');

  assert.equal(taps, 3, '3 items are tapped');
});

QUnit.test('clear() works', function(assert){
  var first = {
    el: null,
    callback: null,
    id: 'first',
    bcr: null
  };
  var second = {
    el: null,
    callback: null,
    id: 'second',
    bcr: null
  };
  var taps = 0;

  var queue = new ventana.Queue('test-queue', function() {
    taps++;
  });

  queue.push(first);
  queue.push(second);

  queue.tap('swag');

  queue.clear();

  queue.tap('swag');

  assert.equal(taps, 2, '2 items are tapped');
});
