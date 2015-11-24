var Funnel = require('broccoli-funnel');
var bundle = require('./bundler');
var esTranspiler = require('broccoli-babel-transpiler');
var merge = require('broccoli-merge-trees');

var scriptTree = esTranspiler('lib', {
  modules: 'amd',
  moduleIds: true
});

module.exports = bundle([scriptTree]);
