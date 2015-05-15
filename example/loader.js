var modules = {};
var define = function(id, func) {
  modules[id] = func();
};
define.amd = {};
var require = function(id) {
  return modules[id];
};