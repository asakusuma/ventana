var Funnel = require('broccoli-funnel');
var bundle = require('./bundler');
var esTranspiler = require('broccoli-babel-transpiler');
var merge = require('broccoli-merge-trees');
var tsTranspiler = require('broccoli-typescript-compiler');

var inputTree = 'lib';
var typescript = tsTranspiler(inputTree);
var scriptTree = esTranspiler(typescript, {
  modules: 'amd',
  moduleIds: true
});

module.exports = bundle([scriptTree]);
