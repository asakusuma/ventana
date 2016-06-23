var assert = require('chai').assert;
var rsvp = require('rsvp');
var Nightmare = require('nightmare');
var TIMEOUT = 10;

function Context() {
  this._nightmare = Nightmare({ show: false }),
  this._nightmare.viewport(600, 600);
  this._events = [];
  this._results = [];
  this._assertions = [];
  this._execution = this._root = this._nightmare.goto('http://localhost:3000/').wait(10).evaluate(function() {
    window.STATE = {};
  });
}

Context.prototype.close = function() {
  return this._root.end();
}

Context.prototype.getExecution = function() {
  return this._execution;
}

Context.prototype.evaluate = function(func) {
  this._execution = this._execution.evaluate(func);
  return this;
}

Context.prototype.assert = function(func, assertion) {
  if (assertion) {
    this._execution.evaluate(func).then(assertion);
  } else {
    this._execution.evaluate(func).then(function(result) {
      assert(result, 'Ensure stuff');
    });
  }
  return this;
}

Context.prototype.viewport = function(width, height) {
  this._execution = this._execution.viewport(width, height).wait(TIMEOUT);
  return this;
}

Context.prototype.scrollTo = function(top, left) {
  this._execution = this._execution.scrollTo(top, left).wait(TIMEOUT);
  return this;
}

Context.prototype.wait = function(time) {
  this._execution = this._execution.wait(time);
  return this;
}

module.exports = Context;
