var esTranspiler = require('broccoli-babel-transpiler');
var uglify = require('broccoli-uglify-js');
var merge = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');

var lib = 'lib';

var cjs = esTranspiler(lib, {
  modules: 'common',
  moduleId: 'ventana'
});

var umd = uglify(esTranspiler(lib, {
  modules: 'umd',
  moduleId: 'ventana'
}));

var webProduction = new Funnel(umd, {
  getDestinationPath: function(relativePath) {
    return 'ventana.umd.js'
  }
});

module.exports = merge([cjs, webProduction]);
