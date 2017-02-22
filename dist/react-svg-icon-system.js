(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["Icon"] = factory(require("react"));
	else
		root["Icon"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

function Circle (props) {
    return React.createElement("svg",props,React.createElement("circle",{"fill":"#39B54A","cx":"35","cy":"35","r":"29"}));
}

Circle.displayName = "Circle";

Circle.defaultProps = {"version":"1.1","id":"Layer_1","x":"0px","y":"0px","viewBox":"0 0 69 69","enableBackground":"new 0 0 69 69","xmlSpace":"preserve"};

module.exports = Circle;

Circle.default = Circle;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

function Square (props) {
    return React.createElement("svg",props,React.createElement("g",null,React.createElement("rect",{"x":"5","y":"5","fill":"#D4145A","width":"59","height":"59"})));
}

Square.displayName = "Square";

Square.defaultProps = {"version":"1.1","id":"Layer_1","x":"0px","y":"0px","viewBox":"0 0 69 69","enableBackground":"new 0 0 69 69","xmlSpace":"preserve"};

module.exports = Square;

Square.default = Square;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

function Triangle (props) {
    return React.createElement("svg",props,React.createElement("polygon",{"fill":"#29ABE2","points":"34.5,8.336 4,61.164 65,61.164 34.5,8.336 4,61.164 65,61.164 "}));
}

Triangle.displayName = "Triangle";

Triangle.defaultProps = {"version":"1.1","id":"Layer_1","x":"0px","y":"0px","viewBox":"0 0 69 69","enableBackground":"new 0 0 69 69","xmlSpace":"preserve"};

module.exports = Triangle;

Triangle.default = Triangle;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _circle = __webpack_require__(1);

var _circle2 = _interopRequireDefault(_circle);

var _square = __webpack_require__(2);

var _square2 = _interopRequireDefault(_square);

var _triangle = __webpack_require__(3);

var _triangle2 = _interopRequireDefault(_triangle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Icons = {
  circle: _circle2.default,
  square: _square2.default,
  triangle: _triangle2.default
};
Object.freeze(Icons);

exports.default = function (_ref) {
  var name = _ref.name,
      restProps = _objectWithoutProperties(_ref, ['name']);

  return (0, _react.createElement)(Icons[name], restProps);
};

module.exports = exports['default'];

/***/ })
/******/ ]);
});