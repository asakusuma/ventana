window.scrollY = 100;
window.scrollX = 100;

QUnit.module('getWindowRect');

QUnit.test('Returns correct object if no offset is set', function(assert){
  var result = ventana.getWindowRect();
  assert.equal(result.top, 100, 'top should equal scrolled Y position');
  assert.equal(result.left, 100, 'left should equal scrolled x position');
  assert.equal(result.width, window.innerWidth, 'width should equal innerWidth');
  assert.equal(result.height, window.innerHeight, 'height should equal innerHeight');
});

QUnit.test('Returns correct object when offset is set', function(assert){
  var result = ventana.getWindowRect({
    top: 5
  });
  assert.equal(result.top, window.scrollY + 5, 'top should equal scrollY + offset');
});
