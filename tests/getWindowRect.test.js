QUnit.module('getWindowRect');
console.log('Start Tests');
QUnit.test('Returns correct object if no offset is set', function(assert){
  assert.expect(4);
  var done = assert.async();
  console.log('In test 1');
  ventana.queue(function() {
    console.log('In test 1 queue');
    var result = ventana.getWindowRect();
    assert.equal(result.top, 0, 'top should equal scrolled Y position');
    assert.equal(result.left, 0, 'left should equal scrolled x position');
    assert.equal(result.width, window.innerWidth, 'width should equal innerWidth');
    assert.equal(result.height, window.innerHeight, 'height should equal innerHeight');
    done();
  });
});

QUnit.test('Returns correct object when offset is set', function(assert){
  var result = ventana.getWindowRect({
    top: 5
  });
  assert.equal(result.top, 5, 'top should equal scrollY + offset');
});
