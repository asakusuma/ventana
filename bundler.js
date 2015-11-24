var RSVP = require('rsvp');
var path = require('path');
var webpack = require('webpack');
var CachingWriter = require('broccoli-caching-writer');

WebpackBundler.prototype = Object.create(CachingWriter.prototype);
WebpackBundler.prototype.constructor = WebpackBundler;
function WebpackBundler(inputNodes, options) {
  options = options || {};
	this.options = options;
  CachingWriter.call(this, inputNodes, options);
}

WebpackBundler.prototype.build = function() {
	var destDir = this.outputPath;
	var options = {
		context: path.resolve(this.inputPaths[0]),
		entry: './index',
		output: {
			path: this.outputPath,
			filename: 'ventana.js',
			library: 'ventana',
			libraryTarget: 'umd',
			umdNamedDefine: true
		}
	};
	var compiler = webpack(options);
	return new RSVP.Promise(function(resolve, reject) {
		compiler.run(function(err) {
			if (err) {
				reject(err);
			} else {
				resolve(destDir);
			}
		})
	});
}

module.exports = function(node, options) {
	return new WebpackBundler(node, options);
};
