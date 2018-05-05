module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
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
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Select = __webpack_require__(6);

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hasError: false,
      errors: [],
      value: _this.props.defaultValue || ''
    }, _this.onChange = function (e) {
      var _this$props = _this.props,
          maxLength = _this$props.maxLength,
          maxLengthErrorPhrase = _this$props.maxLengthErrorPhrase;

      var errors = [];
      var value = e.target.value;
      if (maxLength && value.length > maxLength) errors.push(maxLengthErrorPhrase || 'This field accepts ' + maxLength + ' characters.');
      _this.setState({ errors: errors, value: value });
      if (errors.length > 0) _this.setState({ hasError: true });else _this.setState({ hasError: false });
      _this.props.onChange(e);
    }, _this.onCheckboxChange = function (e) {
      var value = e.target.checked;
      _this.setState({ value: value });
      _this.props.onChange({
        target: {
          name: _this.props.name,
          value: e.target.checked
        }
      });
    }, _this.onRadioChange = function (e) {
      console.log(e.target);
      var value = _this.props.options.find(function (op) {
        return op.value === e.target.value;
      });
      _this.setState({ value: value });
      _this.props.onChange({
        target: {
          name: _this.props.name,
          value: value
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Input, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          type = _props.type,
          name = _props.name,
          checkboxLabel = _props.checkboxLabel,
          hasPlaceholder = _props.hasPlaceholder,
          placeholder = _props.placeholder,
          options = _props.options,
          requiredPhrase = _props.requiredPhrase,
          mustBeCheckedPhrase = _props.mustBeCheckedPhrase,
          required = _props.required,
          needsToFill = _props.needsToFill;
      var _state = this.state,
          hasError = _state.hasError,
          value = _state.value,
          errors = _state.errors;

      switch (type) {
        case 'select':
          return _react2.default.createElement(_Select2.default, _extends({}, this.props, { onChange: this.onChange.bind(this) }));
        case 'checkbox':
          return _react2.default.createElement(
            'div',
            { className: 'input-holder' },
            _react2.default.createElement('input', { type: 'checkbox', id: name, name: name, checked: value, onChange: this.onCheckboxChange.bind(this) }),
            _react2.default.createElement(
              'label',
              { htmlFor: name },
              checkboxLabel,
              required ? '*' : ''
            ),
            _react2.default.createElement(
              'ul',
              { className: needsToFill ? "input-errors vis" : "input-errors" },
              needsToFill && _react2.default.createElement(
                'li',
                null,
                mustBeCheckedPhrase || 'This field is required.'
              )
            )
          );
        case 'radio':
          return _react2.default.createElement(
            'div',
            { className: 'input-holder' },
            _react2.default.createElement(
              'label',
              null,
              name,
              required ? '*' : ''
            ),
            options && options.map(function (option, index) {
              var _React$createElement;

              return _react2.default.createElement(
                'div',
                { key: index },
                _react2.default.createElement('input', (_React$createElement = { type: 'radio', id: name + '-' + option.value, name: name, checked: option === value, defaultValue: option.value, value: name }, _defineProperty(_React$createElement, 'checked', value), _defineProperty(_React$createElement, 'onChange', _this2.onRadioChange.bind(_this2)), _React$createElement)),
                _react2.default.createElement(
                  'label',
                  { htmlFor: name + '-' + option.value },
                  option.label
                )
              );
            }),
            _react2.default.createElement(
              'ul',
              { className: needsToFill ? "input-errors vis" : "input-errors" },
              needsToFill && _react2.default.createElement(
                'li',
                null,
                mustBeCheckedPhrase || 'This field is required.'
              )
            )
          );
        default:
          return _react2.default.createElement(
            'div',
            { className: 'input-holder' },
            _react2.default.createElement(
              'span',
              { className: value.length > 0 ? 'with-value' : '' },
              placeholder,
              required ? '*' : ''
            ),
            _react2.default.createElement('input', { className: hasError || needsToFill && value.length === 0 ? 'input-err' : '', type: type, placeholder: hasPlaceholder ? placeholder : '', autoComplete: 'off', name: name, value: value, onChange: this.onChange.bind(this) }),
            _react2.default.createElement(
              'ul',
              { className: errors.length > 0 || needsToFill ? "input-errors vis" : "input-errors" },
              needsToFill && value.length === 0 && _react2.default.createElement(
                'li',
                null,
                requiredPhrase || 'This field is required.'
              ),
              errors.map(function (error, index) {
                return _react2.default.createElement(
                  'li',
                  { key: index },
                  error
                );
              })
            )
          );
      }
    }
  }]);

  return Input;
}(_react.Component);

exports.default = Input;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isEmpty = exports.isEmpty = function isEmpty(obj) {
  if (!obj) return true;
  if (obj.length === 0) return true;
  if (obj === '') return true;
  return false;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(8);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(9)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../node_modules/css-loader/index.js!./styles.css", function() {
		var newContent = require("!!../node_modules/css-loader/index.js!./styles.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = function (_Component) {
  _inherits(Select, _Component);

  function Select() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hasError: false,
      errors: [],
      value: _this.props.defaultValue || (_this.props.multiSelect ? [] : ''),
      options: _this.props.options || [],
      optionsVisible: false
    }, _this.toggleOptions = function () {
      _this.setState({
        optionsVisible: !_this.state.optionsVisible
      });
    }, _this.closeOptions = function () {
      _this.setState({ optionsVisible: false });
    }, _this.selectOption = function (op) {
      var multiSelect = _this.props.multiSelect;

      if (multiSelect) _this.setState({
        value: [op].concat(_toConsumableArray(_this.state.value)),
        options: _this.state.options.filter(function (o) {
          return o !== op;
        })
      }, _this.handleChange);else {
        _this.setState({
          value: op
        }, _this.handleChange);
        _this.closeOptions();
      }
    }, _this.handleChange = function () {
      _this.props.onChange({
        target: {
          value: _this.state.value,
          name: _this.props.name
        }
      });
    }, _this.removeValue = function (op) {
      _this.setState({
        value: _this.state.value.filter(function (v) {
          return v !== op;
        }),
        options: [].concat(_toConsumableArray(_this.state.options), [op])
      }, _this.handleChange);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Select, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          placeholder = _props.placeholder,
          requiredPhrase = _props.requiredPhrase,
          required = _props.required,
          selectHandle = _props.selectHandle,
          hasPlaceholder = _props.hasPlaceholder,
          multiSelect = _props.multiSelect,
          needsToFill = _props.needsToFill;
      var _state = this.state,
          hasError = _state.hasError,
          value = _state.value,
          errors = _state.errors,
          optionsVisible = _state.optionsVisible,
          options = _state.options;

      return _react2.default.createElement(
        'div',
        { className: 'input-holder' },
        _react2.default.createElement(
          'span',
          { className: multiSelect && value[0] || !multiSelect && value ? 'with-value' : '' },
          placeholder,
          required ? '*' : ''
        ),
        _react2.default.createElement(
          'div',
          { onClick: this.toggleOptions, className: hasError || needsToFill && value.length === 0 ? 'input input-select input-err' : 'input input-select ' },
          multiSelect ? value.length > 0 ? value.map(function (v, index) {
            return _react2.default.createElement(
              'div',
              { key: index, className: 'val-one' },
              v.label || value,
              _react2.default.createElement(
                'a',
                { onClick: function onClick() {
                    return _this2.removeValue(v);
                  } },
                'x'
              )
            );
          }) : hasPlaceholder ? placeholder : ' ' : value.label ? value.label : value !== '' ? value : hasPlaceholder ? placeholder : ' ',
          _react2.default.createElement(
            'div',
            { className: 'ops-handle' },
            selectHandle ? selectHandle : _react2.default.createElement('i', { className: 'ops-triangle' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: optionsVisible && options.length !== 0 ? "reformact-select-options vis" : "reformact-select-options" },
          options.map(function (op, index) {
            return _react2.default.createElement(
              'div',
              { key: index, className: 'op', onClick: function onClick() {
                  return _this2.selectOption(op);
                } },
              op.label
            );
          })
        ),
        _react2.default.createElement(
          'ul',
          { className: errors.length > 0 || needsToFill ? "input-errors vis" : "input-errors" },
          needsToFill && value.length === 0 && _react2.default.createElement(
            'li',
            null,
            requiredPhrase || 'This field is required.'
          ),
          errors.map(function (error, index) {
            return _react2.default.createElement(
              'li',
              { key: index },
              error
            );
          })
        )
      );
    }
  }]);

  return Select;
}(_react.Component);

exports.default = Select;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Input = __webpack_require__(1);

var _Input2 = _interopRequireDefault(_Input);

var _utils = __webpack_require__(2);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      fields: _this.props.fields,
      initialFields: Object.assign({}, { fields: _this.props.fields }),
      counter: 0
    }, _this.componentDidMount = function () {
      var fields = _this.props.fields;

      for (var i = 0; i < fields.length; i++) {
        if (fields[i].defaultValue) _this.setState(_defineProperty({}, fields[i].name, fields[i].defaultValue));
      }
    }, _this.onSubmit = function (e) {
      if (e) e.preventDefault();
      var fields = _this.state.fields;
      var gotError = false;
      console.log(fields);
      for (var i = 0; i < fields.length; i++) {
        var field = fields[i];
        if (field.required && (0, _utils.isEmpty)(_this.state[field.name])) {
          field.needsToFill = true;
          gotError = true;
        } else field.needsToFill = false;
      }
      _this.setState({ fields: fields });
      if (!gotError && !_this.state.fields.find(function (f) {
        return f.hasError;
      })) _this.props.onSubmit(_this.state);
    }, _this.handleChange = function (e, errorsLength) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Form, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          submitText = _props.submitText,
          hasReset = _props.hasReset,
          resetText = _props.resetText;
      var _state = this.state,
          fields = _state.fields,
          counter = _state.counter;

      return _react2.default.createElement(
        'form',
        { key: counter, onSubmit: this.onSubmit },
        _react2.default.createElement('input', { name: 'username', style: {
            display: "none"
          } }),
        _react2.default.createElement('input', { type: 'password', name: 'password', style: {
            display: "none"
          } }),
        ' ',
        fields && fields.map(function (input, index) {
          return _react2.default.createElement(_Input2.default, _extends({ key: index }, input, { onChange: function onChange(e) {
              return _this2.handleChange(e);
            } }));
        }),
        _react2.default.createElement('input', { type: 'submit', value: submitText }),
        ' ',
        hasReset ? _react2.default.createElement('input', { type: 'reset', onClick: function onClick() {
            return _this2.setState({
              fields: _this2.state.initialFields.fields,
              counter: counter + 1
            });
          } }) : ''
      );
    }
  }]);

  return Form;
}(_react.Component);

exports.default = Form;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "input, .input {\n  width: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  text-align: center;\n  border-radius: 4px;\n  padding: 4px;\n  color: #666;\n  transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  -webkit-transition: all 0.3s ease;\n}\n\ninput[type=\"submit\"], .input[type=\"submit\"] {\n  background: #666;\n  color: #fff;\n}\n\ninput[type=\"submit\"]:hover, .input[type=\"submit\"]:hover {\n  background: #555;\n}\n\ninput[type=\"checkbox\"]{\n  width: auto;\n}\n\ninput[type=\"checkbox\"] + label{\n  font-weight: normal;\n  margin: 0 4px;\n}\n\n.input-select {\n  cursor: pointer;\n  position: relative;\n}\n\n.input-holder {\n  position: relative;\n  margin-bottom: 30px;\n}\n\n.input-holder span {\n  padding-bottom: 4px;\n  transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  -webkit-transition: all 0.3s ease;\n  opacity: .7;\n}\n\n.ops-triangle {\n  position: relative;\n  top: 9px;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 8px 8px 0 8px;\n  border-color: #666 transparent transparent transparent;\n}\n\n.ops-handle {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  display: table;\n}\n\n.ops-handle i {\n   display: table-cell;\n   vertical-align: middle;\n}\n\n.val-one {\n  display: inline-block;\n  padding: 4px;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  border-radius: 20px;\n  font-size: 12px;\n}\n\n.val-one a{\n  margin: 0 4px;\n}\n\n.reformact-select-options {\n  transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  -webkit-transition: all 0.3s ease;\n  visibility: hidden;\n  max-height: 200px;\n  overflow: auto;\n  opacity: 0;\n  padding: 8px 0;\n  position: absolute;\n  top: 90%;\n  left: 15px;\n  right: 15px;\n  background: #fff;\n  z-index: 10;\n  border-radius: 4px;\n  color: #666;\n  box-shadow: 0 0 8px rgba(0, 0, 0, .1), 0 4px 16px -2px rgba(0, 0, 0, .2)\n}\n\n.reformact-select-options > div {\n  padding: 8px;\n  display: block;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  -webkit-transition: all 0.3s ease;\n}\n\n.reformact-select-options >div:hover {\n  background: #fafafa;\n}\n\n.reformact-select-options.vis {\n  visibility: visible;\n  top: 101%;\n  opacity: 1;\n}\n\n.input-err~span, .input-errors {\n  color: rgb(255, 128, 128)\n}\n\n.input-err {\n  border-color: rgb(255, 128, 128);\n  color: rgb(255, 128, 128);\n}\n\n.input-errors {\n  padding: 0 20px;\n}\n", ""]);

// exports


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ })
/******/ ]);