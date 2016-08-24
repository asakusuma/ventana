QUnit.module('Queue');

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

  assert.equal(queue.items.length, 2, 'There are two items in queue');

  queue.remove('first');

  assert.equal(queue.items.length, 1, 'There is one item in queue');
  assert.equal(queue.items[0].id, 'second', 'Second item is only item in queue');
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

  assert.equal(queue.items.length, 2, 'There are two items in queue');

  queue.remove(firstEl);

  assert.equal(queue.items.length, 1, 'There is one item in queue');
  assert.equal(queue.items[0].id, 'second', 'Second item is only item in queue');
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

  assert.equal(queue.items.length, 2, 'There are two items in queue');

  queue.clear();

  assert.equal(queue.items.length, 0, 'Queue is empty');
});
