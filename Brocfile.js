var Funnel = require('broccoli-funnel');
var uglify = require('broccoli-uglify-js');

var tree = new Funnel('exports', {
  include: ['ventana.js']
});

module.exports = uglify(tree, {
  mangle: true,
  compress: true
});
