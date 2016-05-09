(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var conf = { h: 'Hello', w: 'World', e: '!' };
exports.default = conf;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var confConf = function () {
	function confConf() {
		var p = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		_classCallCheck(this, confConf);

		this.p = p;
		this.tempP = [];
	}

	_createClass(confConf, [{
		key: "confConf",
		value: function confConf() {
			if (this.p.h) {
				this.tempP.push(p.h);
			}
			if (this.p.w) {
				this.tempP.push(p.w);
			}
			if (this.p.e) {
				this.tempP.push(p.e);
			}

			return this.tempP.length === 3;
		}
	}]);

	return confConf;
}();

var cConf = new confConf();

exports.default = cConf;

},{}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _configConfig = require('./config/configConfig');

var _configConfig2 = _interopRequireDefault(_configConfig);

var _config = require('./config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Application = function () {
	function Application() {
		_classCallCheck(this, Application);

		this.isEnabled = true;
		this.conf = null;
		this.setupConf();
	}

	_createClass(Application, [{
		key: 'setupConf',
		value: function setupConf(c) {
			if (!_configConfig2.default.confConf(c)) {
				this.conf = _config2.default;
			} else {
				this.conf = c;
			}
		}
	}, {
		key: 'message',
		value: function message(m) {
			var _this = this;

			var msg = function msg(index) {
				switch (index) {
					case 1:
						return _this.conf.h;
						break;
					case 2:
						return _this.conf.w;
						break;
					case 3:
						return _this.conf.e;
						break;
					default:
						return '';
						break;
				}
			};

			var msg1 = msg(1);
			var msg2 = msg(2);
			var msg3 = msg(3);

			return msg1 + ' ' + msg2 + msg3;
		}
	}]);

	return Application;
}();

var application = new Application();

console.log(application.message());

},{"./config/config":1,"./config/configConfig":2}]},{},[3]);

//# sourceMappingURL=build.js.map
