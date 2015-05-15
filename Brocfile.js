var build = require('broccoli-es6-npm-compiler');

module.exports = build({
  amdModuleId: 'ventana',
  globalAlias: 'ventana'
});