var Funnel = require('broccoli-funnel');
var bundle = require('./bundler');
var esTranspiler = require('broccoli-babel-transpiler');
var merge = require('broccoli-merge-trees');
var uglify = require('broccoli-uglify-js');
var tsTranspiler = require('broccoli-typescript-compiler');

var inputTree = 'lib';
var typescript = tsTranspiler(inputTree);
var scriptTree = esTranspiler(typescript, {
  modules: 'amd',
  moduleIds: true
});

var amd = new Funnel(typescript, {
  destDir: 'amd'
});

var bundled = bundle([typescript]);

var prod = new Funnel(uglify(bundled, {
  mangle: true,
  compress: true
}), {
  destDir: 'min'
});

module.exports = merge([bundled, prod, amd]);
