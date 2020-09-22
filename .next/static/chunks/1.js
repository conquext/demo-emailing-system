(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[1],{

/***/ "./node_modules/@use-it/event-listener/dist/event-listener.m.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@use-it/event-listener/dist/event-listener.m.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony default export */ __webpack_exports__["default"] = (function(t,r,i,o){void 0===i&&(i=global),void 0===o&&(o={});var c=Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(),u=o.capture,a=o.passive,v=o.once;Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function(){c.current=r},[r]),Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function(){if(i&&i.addEventListener){var e=function(e){return c.current(e)},n={capture:u,passive:a,once:v};return i.addEventListener(t,e,n),function(){i.removeEventListener(t,e,n)}}},[t,i,u,a,v])});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-switch/dist/react-switch.dev.js":
/*!************************************************************!*\
  !*** ./node_modules/react-switch/dist/react-switch.dev.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, '__esModule', { value: true });

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/*
The MIT License (MIT)

Copyright (c) 2015 instructure-react

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
var uncheckedIcon = React.createElement('svg', {
  viewBox: "-2 -5 14 20",
  height: "100%",
  width: "100%",
  style: {
    position: "absolute",
    top: 0
  }
}, React.createElement('path', {
  d: "M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",
  fill: "#fff",
  fillRule: "evenodd"
}));
var checkedIcon = React.createElement('svg', {
  height: "100%",
  width: "100%",
  viewBox: "-2 -5 17 21",
  style: {
    position: "absolute",
    top: 0
  }
}, React.createElement('path', {
  d: "M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",
  fill: "#fff",
  fillRule: "evenodd"
}));

function createBackgroundColor(pos, checkedPos, uncheckedPos, offColor, onColor) {
  var relativePos = (pos - uncheckedPos) / (checkedPos - uncheckedPos);

  if (relativePos === 0) {
    return offColor;
  }

  if (relativePos === 1) {
    return onColor;
  }

  var newColor = "#";

  for (var i = 1; i < 6; i += 2) {
    var offComponent = parseInt(offColor.substr(i, 2), 16);
    var onComponent = parseInt(onColor.substr(i, 2), 16);
    var weightedValue = Math.round((1 - relativePos) * offComponent + relativePos * onComponent);
    var newComponent = weightedValue.toString(16);

    if (newComponent.length === 1) {
      newComponent = "0" + newComponent;
    }

    newColor += newComponent;
  }

  return newColor;
}

function convertShorthandColor(color) {
  if (color.length === 7) {
    return color;
  }

  var sixDigitColor = "#";

  for (var i = 1; i < 4; i += 1) {
    sixDigitColor += color[i] + color[i];
  }

  return sixDigitColor;
}

function getBackgroundColor(pos, checkedPos, uncheckedPos, offColor, onColor) {
  var sixDigitOffColor = convertShorthandColor(offColor);
  var sixDigitOnColor = convertShorthandColor(onColor);
  return createBackgroundColor(pos, checkedPos, uncheckedPos, sixDigitOffColor, sixDigitOnColor);
}

// Make sure color props are strings that start with "#" since other ways to write colors are not supported.
var hexColorPropType = function (props, propName, componentName) {
  var prop = props[propName];

  if (typeof prop !== "string" || prop[0] !== "#" || prop.length !== 4 && prop.length !== 7) {
    return new Error("Invalid prop '" + propName + "' supplied to '" + componentName + "'. '" + propName + "' has to be either a 3-digit or 6-digit hex-color string. Valid examples: '#abc', '#123456'");
  }

  return null;
};

function objectWithoutProperties(obj, exclude) {
  var target = {};

  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];

  return target;
}

var ReactSwitch =
/*@__PURE__*/
function (Component) {
  function ReactSwitch(props) {
    Component.call(this, props);
    var height = props.height;
    var width = props.width;
    var handleDiameter = props.handleDiameter;
    var checked = props.checked;
    this.$handleDiameter = handleDiameter || height - 2;
    this.$checkedPos = Math.max(width - height, width - (height + this.$handleDiameter) / 2);
    this.$uncheckedPos = Math.max(0, (height - this.$handleDiameter) / 2);
    this.state = {
      $pos: checked ? this.$checkedPos : this.$uncheckedPos
    };
    this.$lastDragAt = 0;
    this.$lastKeyUpAt = 0;
    this.$onMouseDown = this.$onMouseDown.bind(this);
    this.$onMouseMove = this.$onMouseMove.bind(this);
    this.$onMouseUp = this.$onMouseUp.bind(this);
    this.$onTouchStart = this.$onTouchStart.bind(this);
    this.$onTouchMove = this.$onTouchMove.bind(this);
    this.$onTouchEnd = this.$onTouchEnd.bind(this);
    this.$onClick = this.$onClick.bind(this);
    this.$onInputChange = this.$onInputChange.bind(this);
    this.$onKeyUp = this.$onKeyUp.bind(this);
    this.$setHasOutline = this.$setHasOutline.bind(this);
    this.$unsetHasOutline = this.$unsetHasOutline.bind(this);
    this.$getInputRef = this.$getInputRef.bind(this);
  }

  if (Component) ReactSwitch.__proto__ = Component;
  ReactSwitch.prototype = Object.create(Component && Component.prototype);
  ReactSwitch.prototype.constructor = ReactSwitch;

  ReactSwitch.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.checked === this.props.checked) {
      return;
    }

    var $pos = this.props.checked ? this.$checkedPos : this.$uncheckedPos;
    this.setState({
      $pos: $pos
    });
  };

  ReactSwitch.prototype.$onDragStart = function $onDragStart(clientX) {
    this.$inputRef.focus();
    this.setState({
      $startX: clientX,
      $hasOutline: true,
      $dragStartingTime: Date.now()
    });
  };

  ReactSwitch.prototype.$onDrag = function $onDrag(clientX) {
    var ref = this.state;
    var $startX = ref.$startX;
    var $isDragging = ref.$isDragging;
    var $pos = ref.$pos;
    var ref$1 = this.props;
    var checked = ref$1.checked;
    var startPos = checked ? this.$checkedPos : this.$uncheckedPos;
    var mousePos = startPos + clientX - $startX; // We need this check to fix a windows glitch where onDrag is triggered onMouseDown in some cases

    if (!$isDragging && clientX !== $startX) {
      this.setState({
        $isDragging: true
      });
    }

    var newPos = Math.min(this.$checkedPos, Math.max(this.$uncheckedPos, mousePos)); // Prevent unnecessary rerenders

    if (newPos !== $pos) {
      this.setState({
        $pos: newPos
      });
    }
  };

  ReactSwitch.prototype.$onDragStop = function $onDragStop(event) {
    var ref = this.state;
    var $pos = ref.$pos;
    var $isDragging = ref.$isDragging;
    var $dragStartingTime = ref.$dragStartingTime;
    var ref$1 = this.props;
    var checked = ref$1.checked;
    var halfwayCheckpoint = (this.$checkedPos + this.$uncheckedPos) / 2; // Simulate clicking the handle

    var timeSinceStart = Date.now() - $dragStartingTime;

    if (!$isDragging || timeSinceStart < 250) {
      this.$onChange(event); // Handle dragging from checked position
    } else if (checked) {
      if ($pos > halfwayCheckpoint) {
        this.setState({
          $pos: this.$checkedPos
        });
      } else {
        this.$onChange(event);
      } // Handle dragging from unchecked position

    } else if ($pos < halfwayCheckpoint) {
      this.setState({
        $pos: this.$uncheckedPos
      });
    } else {
      this.$onChange(event);
    }

    this.setState({
      $isDragging: false,
      $hasOutline: false
    });
    this.$lastDragAt = Date.now();
  };

  ReactSwitch.prototype.$onMouseDown = function $onMouseDown(event) {
    event.preventDefault(); // Ignore right click and scroll

    if (typeof event.button === "number" && event.button !== 0) {
      return;
    }

    this.$onDragStart(event.clientX);
    window.addEventListener("mousemove", this.$onMouseMove);
    window.addEventListener("mouseup", this.$onMouseUp);
  };

  ReactSwitch.prototype.$onMouseMove = function $onMouseMove(event) {
    event.preventDefault();
    this.$onDrag(event.clientX);
  };

  ReactSwitch.prototype.$onMouseUp = function $onMouseUp(event) {
    this.$onDragStop(event);
    window.removeEventListener("mousemove", this.$onMouseMove);
    window.removeEventListener("mouseup", this.$onMouseUp);
  };

  ReactSwitch.prototype.$onTouchStart = function $onTouchStart(event) {
    this.$checkedStateFromDragging = null;
    this.$onDragStart(event.touches[0].clientX);
  };

  ReactSwitch.prototype.$onTouchMove = function $onTouchMove(event) {
    this.$onDrag(event.touches[0].clientX);
  };

  ReactSwitch.prototype.$onTouchEnd = function $onTouchEnd(event) {
    event.preventDefault();
    this.$onDragStop(event);
  };

  ReactSwitch.prototype.$onInputChange = function $onInputChange(event) {
    // This condition is unfortunately needed in some browsers where the input's change event might get triggered
    // right after the dragstop event is triggered (occurs when dropping over a label element)
    if (Date.now() - this.$lastDragAt > 50) {
      this.$onChange(event); // Prevent clicking label, but not key activation from setting outline to true - yes, this is absurd

      if (Date.now() - this.$lastKeyUpAt > 50) {
        this.setState({
          $hasOutline: false
        });
      }
    }
  };

  ReactSwitch.prototype.$onKeyUp = function $onKeyUp() {
    this.$lastKeyUpAt = Date.now();
  };

  ReactSwitch.prototype.$setHasOutline = function $setHasOutline() {
    this.setState({
      $hasOutline: true
    });
  };

  ReactSwitch.prototype.$unsetHasOutline = function $unsetHasOutline() {
    this.setState({
      $hasOutline: false
    });
  };

  ReactSwitch.prototype.$getInputRef = function $getInputRef(el) {
    this.$inputRef = el;
  };

  ReactSwitch.prototype.$onClick = function $onClick(event) {
    event.preventDefault();
    this.$inputRef.focus();
    this.$onChange(event);
    this.setState({
      $hasOutline: false
    });
  };

  ReactSwitch.prototype.$onChange = function $onChange(event) {
    var ref = this.props;
    var checked = ref.checked;
    var onChange = ref.onChange;
    var id = ref.id;
    onChange(!checked, event, id);
  };

  ReactSwitch.prototype.render = function render() {
    var ref = this.props;
    var disabled = ref.disabled;
    var className = ref.className;
    var offColor = ref.offColor;
    var onColor = ref.onColor;
    var offHandleColor = ref.offHandleColor;
    var onHandleColor = ref.onHandleColor;
    var checkedIcon$$1 = ref.checkedIcon;
    var uncheckedIcon$$1 = ref.uncheckedIcon;
    var boxShadow = ref.boxShadow;
    var activeBoxShadow = ref.activeBoxShadow;
    var height = ref.height;
    var width = ref.width;
    var handleDiameter = ref.handleDiameter;
    var rest$1 = objectWithoutProperties(ref, ["disabled", "className", "offColor", "onColor", "offHandleColor", "onHandleColor", "checkedIcon", "uncheckedIcon", "boxShadow", "activeBoxShadow", "height", "width", "handleDiameter"]);
    var rest = rest$1;
    var ref$1 = this.state;
    var $pos = ref$1.$pos;
    var $isDragging = ref$1.$isDragging;
    var $hasOutline = ref$1.$hasOutline;
    var rootStyle = {
      position: "relative",
      display: "inline-block",
      textAlign: "left",
      opacity: disabled ? 0.5 : 1,
      direction: "ltr",
      borderRadius: height / 2,
      WebkitTransition: "opacity 0.25s",
      MozTransition: "opacity 0.25s",
      transition: "opacity 0.25s",
      touchAction: "none",
      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      WebkitUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none"
    };
    var backgroundStyle = {
      height: height,
      width: width,
      margin: Math.max(0, (this.$handleDiameter - height) / 2),
      position: "relative",
      background: getBackgroundColor($pos, this.$checkedPos, this.$uncheckedPos, offColor, onColor),
      borderRadius: height / 2,
      cursor: disabled ? "default" : "pointer",
      WebkitTransition: $isDragging ? null : "background 0.25s",
      MozTransition: $isDragging ? null : "background 0.25s",
      transition: $isDragging ? null : "background 0.25s"
    };
    var checkedIconStyle = {
      height: height,
      width: Math.min(height * 1.5, width - (this.$handleDiameter + height) / 2 + 1),
      position: "relative",
      opacity: ($pos - this.$uncheckedPos) / (this.$checkedPos - this.$uncheckedPos),
      pointerEvents: "none",
      WebkitTransition: $isDragging ? null : "opacity 0.25s",
      MozTransition: $isDragging ? null : "opacity 0.25s",
      transition: $isDragging ? null : "opacity 0.25s"
    };
    var uncheckedIconStyle = {
      height: height,
      width: Math.min(height * 1.5, width - (this.$handleDiameter + height) / 2 + 1),
      position: "absolute",
      opacity: 1 - ($pos - this.$uncheckedPos) / (this.$checkedPos - this.$uncheckedPos),
      right: 0,
      top: 0,
      pointerEvents: "none",
      WebkitTransition: $isDragging ? null : "opacity 0.25s",
      MozTransition: $isDragging ? null : "opacity 0.25s",
      transition: $isDragging ? null : "opacity 0.25s"
    };
    var handleStyle = {
      height: this.$handleDiameter,
      width: this.$handleDiameter,
      background: getBackgroundColor($pos, this.$checkedPos, this.$uncheckedPos, offHandleColor, onHandleColor),
      display: "inline-block",
      cursor: disabled ? "default" : "pointer",
      borderRadius: "50%",
      position: "absolute",
      transform: "translateX(" + $pos + "px)",
      top: Math.max(0, (height - this.$handleDiameter) / 2),
      outline: 0,
      boxShadow: $hasOutline ? activeBoxShadow : boxShadow,
      border: 0,
      WebkitTransition: $isDragging ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s",
      MozTransition: $isDragging ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s",
      transition: $isDragging ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s"
    };
    var inputStyle = {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      width: 1
    };
    return React.createElement('div', {
      className: className,
      style: rootStyle
    }, React.createElement('div', {
      className: "react-switch-bg",
      style: backgroundStyle,
      onClick: disabled ? null : this.$onClick,
      onMouseDown: function (e) {
        return e.preventDefault();
      }
    }, checkedIcon$$1 && React.createElement('div', {
      style: checkedIconStyle
    }, checkedIcon$$1), uncheckedIcon$$1 && React.createElement('div', {
      style: uncheckedIconStyle
    }, uncheckedIcon$$1)), React.createElement('div', {
      className: "react-switch-handle",
      style: handleStyle,
      onClick: function (e) {
        return e.preventDefault();
      },
      onMouseDown: disabled ? null : this.$onMouseDown,
      onTouchStart: disabled ? null : this.$onTouchStart,
      onTouchMove: disabled ? null : this.$onTouchMove,
      onTouchEnd: disabled ? null : this.$onTouchEnd,
      onTouchCancel: disabled ? null : this.$unsetHasOutline
    }), React.createElement('input', _extends({}, {
      type: "checkbox",
      role: "switch",
      disabled: disabled,
      style: inputStyle
    }, rest, {
      ref: this.$getInputRef,
      onFocus: this.$setHasOutline,
      onBlur: this.$unsetHasOutline,
      onKeyUp: this.$onKeyUp,
      onChange: this.$onInputChange
    })));
  };

  return ReactSwitch;
}(React.Component);

ReactSwitch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  offColor: hexColorPropType,
  onColor: hexColorPropType,
  offHandleColor: hexColorPropType,
  onHandleColor: hexColorPropType,
  handleDiameter: PropTypes.number,
  uncheckedIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
  checkedIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
  boxShadow: PropTypes.string,
  activeBoxShadow: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  id: PropTypes.string,
  className: PropTypes.string
};
ReactSwitch.defaultProps = {
  disabled: false,
  offColor: "#888",
  onColor: "#080",
  offHandleColor: "#fff",
  onHandleColor: "#fff",
  uncheckedIcon: uncheckedIcon,
  checkedIcon: checkedIcon,
  boxShadow: null,
  activeBoxShadow: "0 0 2px 3px #3bf",
  height: 28,
  width: 56
};

exports.default = ReactSwitch;


/***/ }),

/***/ "./node_modules/react-switch/index.js":
/*!********************************************!*\
  !*** ./node_modules/react-switch/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./dist/react-switch.dev.js */ "./node_modules/react-switch/dist/react-switch.dev.js");
}


/***/ }),

/***/ "./node_modules/use-dark-mode/dist/use-dark-mode.m.js":
/*!************************************************************!*\
  !*** ./node_modules/use-dark-mode/dist/use-dark-mode.m.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _use_it_event_listener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @use-it/event-listener */ "./node_modules/@use-it/event-listener/dist/event-listener.m.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_persisted_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-persisted-state */ "./node_modules/use-persisted-state/dist/use-persisted-state.m.js");
var i=function(){},u={classList:{add:i,remove:i}},d=function(e,r,n){void 0===n&&(n=global);var a=e?Object(use_persisted_state__WEBPACK_IMPORTED_MODULE_2__["default"])(e,r):react__WEBPACK_IMPORTED_MODULE_1__["useState"],i=n.matchMedia?n.matchMedia("(prefers-color-scheme: dark)"):{},d={addEventListener:function(e,t){return i.addListener&&i.addListener(t)},removeEventListener:function(e,t){return i.removeListener&&i.removeListener(t)}},s="(prefers-color-scheme: dark)"===i.media,c=n.document&&n.document.body||u;return{usePersistedDarkModeState:a,getDefaultOnChange:function(e,t,r){return void 0===e&&(e=c),void 0===t&&(t="dark-mode"),void 0===r&&(r="light-mode"),function(n){e.classList.add(n?t:r),e.classList.remove(n?r:t)}},mediaQueryEventTarget:d,getInitialValue:function(e){return s?i.matches:e}}};/* harmony default export */ __webpack_exports__["default"] = (function(t,o){void 0===t&&(t=!1),void 0===o&&(o={});var i=o.element,u=o.classNameDark,s=o.classNameLight,c=o.onChange,m=o.storageKey;void 0===m&&(m="darkMode");var l=o.storageProvider,f=o.global,v=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function(){return d(m,l,f)},[m,l,f]),g=v.getDefaultOnChange,h=v.mediaQueryEventTarget,L=(0,v.usePersistedDarkModeState)((0,v.getInitialValue)(t)),k=L[0],p=L[1],b=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function(){return c||g(i,u,s)},[c,i,u,s,g]);return Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function(){b(k)},[b,k]),Object(_use_it_event_listener__WEBPACK_IMPORTED_MODULE_0__["default"])("change",function(e){return p(e.matches)},h),{value:k,enable:Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function(){return p(!0)},[p]),disable:Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function(){return p(!1)},[p]),toggle:Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function(){return p(function(e){return!e})},[p])}});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/use-persisted-state/dist/use-persisted-state.m.js":
/*!************************************************************************!*\
  !*** ./node_modules/use-persisted-state/dist/use-persisted-state.m.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_it_event_listener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @use-it/event-listener */ "./node_modules/@use-it/event-listener/dist/event-listener.m.js");
var u={},c=function(t,n,e){return u[t]||(u[t]={callbacks:[],value:e}),u[t].callbacks.push(n),{deregister:function(){var e=u[t].callbacks,r=e.indexOf(n);r>-1&&e.splice(r,1)},emit:function(e){u[t].value!==e&&(u[t].value=e,u[t].callbacks.forEach(function(t){n!==t&&t(e)}))}}};/* harmony default export */ __webpack_exports__["default"] = (function(u,i){if(void 0===i&&(i=global.localStorage),i){var o=function(t){return{get:function(n,e){var r=t.getItem(n);return null===r?"function"==typeof e?e():e:JSON.parse(r)},set:function(n,e){t.setItem(n,JSON.stringify(e))}}}(i);return function(i){return function(u,i,o){var a=o.get,f=o.set,l=Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null),s=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function(){return a(i,u)}),v=s[0],g=s[1];return Object(_use_it_event_listener__WEBPACK_IMPORTED_MODULE_1__["default"])("storage",function(t){var n=t.key,e=JSON.parse(t.newValue);n===i&&v!==e&&g(e)}),Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function(){return l.current=c(i,g,u),function(){l.current.deregister()}},[]),Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function(){f(i,v),l.current.emit(v)},[v]),[v,g]}(i,u,o)}}return react__WEBPACK_IMPORTED_MODULE_0__["useState"]});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/components/layout/ThemeSwitch.tsx":
/*!***********************************************!*\
  !*** ./src/components/layout/ThemeSwitch.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-switch */ "./node_modules/react-switch/index.js");
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var use_dark_mode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-dark-mode */ "./node_modules/use-dark-mode/dist/use-dark-mode.m.js");
var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




var MODE_TRANSITION_CLASS_NAME = 'dark-mode-transition';
var MODE_TRANSITION_DURATION = 500;

function setDarkModeTransition() {
  document.documentElement.classList.add(MODE_TRANSITION_CLASS_NAME);
  setTimeout(function () {
    return document.documentElement.classList.remove(MODE_TRANSITION_CLASS_NAME);
  }, MODE_TRANSITION_DURATION);
}

var ThemeSwitch = function ThemeSwitch() {
  _s();

  var _useDarkMode = Object(use_dark_mode__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      hasActiveDarkMode = _useDarkMode.value,
      activateDarkMode = _useDarkMode.toggle;

  var toggleDarkMode = function toggleDarkMode() {
    setDarkModeTransition();
    activateDarkMode();
  };

  return __jsx(react_switch__WEBPACK_IMPORTED_MODULE_1___default.a, {
    onChange: toggleDarkMode,
    checked: hasActiveDarkMode,
    checkedIcon: __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__["FiMoon"], {
      className: "inline-block mx-2 my-1"
    }),
    uncheckedIcon: __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__["FiSun"], {
      className: "inline-block mx-2 my-1"
    }),
    onColor: "#1a202c",
    offColor: "#f7fafc",
    onHandleColor: "#f7fafc",
    offHandleColor: "#1a202c",
    className: "text-gray-900 dark:text-gray-100 border border-gray-400 dark:border-0"
  });
};

_s(ThemeSwitch, "27J7ALEiwxKqIjWBw+DoaPK7WZ0=", false, function () {
  return [use_dark_mode__WEBPACK_IMPORTED_MODULE_3__["default"]];
});

_c = ThemeSwitch;
/* harmony default export */ __webpack_exports__["default"] = (ThemeSwitch);

var _c;

$RefreshReg$(_c, "ThemeSwitch");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0B1c2UtaXQvZXZlbnQtbGlzdGVuZXIvZGlzdC9ldmVudC1saXN0ZW5lci5tLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3dpdGNoL2Rpc3QvcmVhY3Qtc3dpdGNoLmRldi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN3aXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3VzZS1kYXJrLW1vZGUvZGlzdC91c2UtZGFyay1tb2RlLm0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy91c2UtcGVyc2lzdGVkLXN0YXRlL2Rpc3QvdXNlLXBlcnNpc3RlZC1zdGF0ZS5tLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvVGhlbWVTd2l0Y2gudHN4Il0sIm5hbWVzIjpbIk1PREVfVFJBTlNJVElPTl9DTEFTU19OQU1FIiwiTU9ERV9UUkFOU0lUSU9OX0RVUkFUSU9OIiwic2V0RGFya01vZGVUcmFuc2l0aW9uIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiVGhlbWVTd2l0Y2giLCJ1c2VEYXJrTW9kZSIsImhhc0FjdGl2ZURhcmtNb2RlIiwidmFsdWUiLCJhY3RpdmF0ZURhcmtNb2RlIiwidG9nZ2xlIiwidG9nZ2xlRGFya01vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBNkQsaUZBQWtCLHdDQUF3QyxFQUFFLE1BQU0sb0RBQUMsb0NBQW9DLHVEQUFDLFlBQVksWUFBWSxNQUFNLHVEQUFDLFlBQVksMEJBQTBCLGtCQUFrQixvQkFBb0IsSUFBSSw0QkFBNEIsNENBQTRDLCtCQUErQixjQUFjOzs7Ozs7Ozs7Ozs7O0FDQXpZLDhDQUE4QyxjQUFjOztBQUU1RCxZQUFZLG1CQUFPLENBQUMsNENBQU87QUFDM0IsZ0JBQWdCLG1CQUFPLENBQUMsc0RBQVk7O0FBRXBDO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxvRkFBb0Y7O0FBRXBGO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFOztBQUV4RTs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLE9BQU87O0FBRVAsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssMkNBQTJDO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUN2Z0JBLElBQUksS0FBcUMsRUFBRSxFQUUxQztBQUNELG1CQUFtQixtQkFBTyxDQUFDLHdGQUE0QjtBQUN2RDs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUosa0JBQWtCLElBQUksV0FBVyxnQkFBZ0IsbUJBQW1CLHVCQUF1QixRQUFRLG1FQUFDLE1BQU0sOENBQUMsK0RBQStELElBQUksK0JBQStCLHVDQUF1QyxtQ0FBbUMsOENBQThDLDZFQUE2RSxPQUFPLCtEQUErRCw4RkFBOEYsa0RBQWtELHFEQUFxRCx3QkFBdUMsNkVBQWMsb0NBQW9DLEVBQUUsaUZBQWlGLDJCQUEyQixxQ0FBcUMscURBQUMsWUFBWSxnQkFBZ0IsdUlBQXVJLHFEQUFDLFlBQVksbUJBQW1CLGNBQWMsT0FBTyx1REFBQyxZQUFZLEtBQUssUUFBUSxzRUFBQyxzQkFBc0Isb0JBQW9CLEtBQUssZUFBZSx5REFBQyxZQUFZLGFBQWEsY0FBYyx5REFBQyxZQUFZLGFBQWEsYUFBYSx5REFBQyxZQUFZLHFCQUFxQixTQUFTLEVBQUUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7QUNBcjlDO0FBQUE7QUFBQTtBQUFBO0FBQWtHLFFBQVEsbUJBQW1CLG9CQUFvQixxQkFBcUIsMEJBQTBCLHNCQUFzQixvQ0FBb0Msb0JBQW9CLGtCQUFrQixpRUFBaUUsWUFBWSxNQUFxQiw2RUFBYywwQ0FBMEMsa0JBQWtCLE9BQU8sa0JBQWtCLG1CQUFtQix5REFBeUQsbUJBQW1CLGlDQUFpQyxJQUFJLG1CQUFtQix1QkFBdUIsc0JBQXNCLG9EQUFDLFNBQVMsc0RBQUMsWUFBWSxjQUFjLGdCQUFnQixPQUFPLHNFQUFDLHVCQUF1QixxQ0FBcUMsbUJBQW1CLEVBQUUsdURBQUMsWUFBWSxxQ0FBcUMsd0JBQXdCLEtBQUssdURBQUMsWUFBWSx5QkFBeUIsWUFBWSxTQUFTLE9BQU8sOENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTE4QjtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLDBCQUEwQixHQUFHLHNCQUFuQztBQUNBLElBQU1DLHdCQUF3QixHQUFHLEdBQWpDOztBQUVBLFNBQVNDLHFCQUFULEdBQWlDO0FBQy9CQyxVQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFNBQXpCLENBQW1DQyxHQUFuQyxDQUF1Q04sMEJBQXZDO0FBQ0FPLFlBQVUsQ0FDUjtBQUFBLFdBQU1KLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsU0FBekIsQ0FBbUNHLE1BQW5DLENBQTBDUiwwQkFBMUMsQ0FBTjtBQUFBLEdBRFEsRUFFUkMsd0JBRlEsQ0FBVjtBQUlEOztBQUVELElBQU1RLFdBQXFCLEdBQUcsU0FBeEJBLFdBQXdCLEdBQU07QUFBQTs7QUFBQSxxQkFDNkJDLDZEQUFXLEVBRHhDO0FBQUEsTUFDbkJDLGlCQURtQixnQkFDMUJDLEtBRDBCO0FBQUEsTUFDUUMsZ0JBRFIsZ0JBQ0FDLE1BREE7O0FBR2xDLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQmIseUJBQXFCO0FBQ3JCVyxvQkFBZ0I7QUFDakIsR0FIRDs7QUFLQSxTQUNFLE1BQUMsbURBQUQ7QUFDRSxZQUFRLEVBQUVFLGNBRFo7QUFFRSxXQUFPLEVBQUVKLGlCQUZYO0FBR0UsZUFBVyxFQUFFLE1BQUMscURBQUQ7QUFBUSxlQUFTLEVBQUM7QUFBbEIsTUFIZjtBQUlFLGlCQUFhLEVBQUUsTUFBQyxvREFBRDtBQUFPLGVBQVMsRUFBQztBQUFqQixNQUpqQjtBQUtFLFdBQU8sRUFBQyxTQUxWO0FBTUUsWUFBUSxFQUFDLFNBTlg7QUFPRSxpQkFBYSxFQUFDLFNBUGhCO0FBUUUsa0JBQWMsRUFBQyxTQVJqQjtBQVNFLGFBQVMsRUFBQztBQVRaLElBREY7QUFhRCxDQXJCRDs7R0FBTUYsVztVQUMyREMscUQ7OztLQUQzREQsVztBQXVCU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0e3VzZVJlZiBhcyBlLHVzZUVmZmVjdCBhcyBufWZyb21cInJlYWN0XCI7ZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odCxyLGksbyl7dm9pZCAwPT09aSYmKGk9Z2xvYmFsKSx2b2lkIDA9PT1vJiYobz17fSk7dmFyIGM9ZSgpLHU9by5jYXB0dXJlLGE9by5wYXNzaXZlLHY9by5vbmNlO24oZnVuY3Rpb24oKXtjLmN1cnJlbnQ9cn0sW3JdKSxuKGZ1bmN0aW9uKCl7aWYoaSYmaS5hZGRFdmVudExpc3RlbmVyKXt2YXIgZT1mdW5jdGlvbihlKXtyZXR1cm4gYy5jdXJyZW50KGUpfSxuPXtjYXB0dXJlOnUscGFzc2l2ZTphLG9uY2U6dn07cmV0dXJuIGkuYWRkRXZlbnRMaXN0ZW5lcih0LGUsbiksZnVuY3Rpb24oKXtpLnJlbW92ZUV2ZW50TGlzdGVuZXIodCxlLG4pfX19LFt0LGksdSxhLHZdKX1cbiIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG4vKlxuVGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cbkNvcHlyaWdodCAoYykgMjAxNSBpbnN0cnVjdHVyZS1yZWFjdFxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuU09GVFdBUkUuXG4qL1xudmFyIHVuY2hlY2tlZEljb24gPSBSZWFjdC5jcmVhdGVFbGVtZW50KCdzdmcnLCB7XG4gIHZpZXdCb3g6IFwiLTIgLTUgMTQgMjBcIixcbiAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgd2lkdGg6IFwiMTAwJVwiLFxuICBzdHlsZToge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgdG9wOiAwXG4gIH1cbn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7XG4gIGQ6IFwiTTkuOSAyLjEyTDcuNzggMCA0Ljk1IDIuODI4IDIuMTIgMCAwIDIuMTJsMi44MyAyLjgzTDAgNy43NzYgMi4xMjMgOS45IDQuOTUgNy4wNyA3Ljc4IDkuOSA5LjkgNy43NzYgNy4wNzIgNC45NSA5LjkgMi4xMlwiLFxuICBmaWxsOiBcIiNmZmZcIixcbiAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiXG59KSk7XG52YXIgY2hlY2tlZEljb24gPSBSZWFjdC5jcmVhdGVFbGVtZW50KCdzdmcnLCB7XG4gIGhlaWdodDogXCIxMDAlXCIsXG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgdmlld0JveDogXCItMiAtNSAxNyAyMVwiLFxuICBzdHlsZToge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgdG9wOiAwXG4gIH1cbn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7XG4gIGQ6IFwiTTExLjI2NCAwTDUuMjYgNi4wMDQgMi4xMDMgMi44NDcgMCA0Ljk1bDUuMjYgNS4yNiA4LjEwOC04LjEwN0wxMS4yNjQgMFwiLFxuICBmaWxsOiBcIiNmZmZcIixcbiAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiXG59KSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhY2tncm91bmRDb2xvcihwb3MsIGNoZWNrZWRQb3MsIHVuY2hlY2tlZFBvcywgb2ZmQ29sb3IsIG9uQ29sb3IpIHtcbiAgdmFyIHJlbGF0aXZlUG9zID0gKHBvcyAtIHVuY2hlY2tlZFBvcykgLyAoY2hlY2tlZFBvcyAtIHVuY2hlY2tlZFBvcyk7XG5cbiAgaWYgKHJlbGF0aXZlUG9zID09PSAwKSB7XG4gICAgcmV0dXJuIG9mZkNvbG9yO1xuICB9XG5cbiAgaWYgKHJlbGF0aXZlUG9zID09PSAxKSB7XG4gICAgcmV0dXJuIG9uQ29sb3I7XG4gIH1cblxuICB2YXIgbmV3Q29sb3IgPSBcIiNcIjtcblxuICBmb3IgKHZhciBpID0gMTsgaSA8IDY7IGkgKz0gMikge1xuICAgIHZhciBvZmZDb21wb25lbnQgPSBwYXJzZUludChvZmZDb2xvci5zdWJzdHIoaSwgMiksIDE2KTtcbiAgICB2YXIgb25Db21wb25lbnQgPSBwYXJzZUludChvbkNvbG9yLnN1YnN0cihpLCAyKSwgMTYpO1xuICAgIHZhciB3ZWlnaHRlZFZhbHVlID0gTWF0aC5yb3VuZCgoMSAtIHJlbGF0aXZlUG9zKSAqIG9mZkNvbXBvbmVudCArIHJlbGF0aXZlUG9zICogb25Db21wb25lbnQpO1xuICAgIHZhciBuZXdDb21wb25lbnQgPSB3ZWlnaHRlZFZhbHVlLnRvU3RyaW5nKDE2KTtcblxuICAgIGlmIChuZXdDb21wb25lbnQubGVuZ3RoID09PSAxKSB7XG4gICAgICBuZXdDb21wb25lbnQgPSBcIjBcIiArIG5ld0NvbXBvbmVudDtcbiAgICB9XG5cbiAgICBuZXdDb2xvciArPSBuZXdDb21wb25lbnQ7XG4gIH1cblxuICByZXR1cm4gbmV3Q29sb3I7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRTaG9ydGhhbmRDb2xvcihjb2xvcikge1xuICBpZiAoY29sb3IubGVuZ3RoID09PSA3KSB7XG4gICAgcmV0dXJuIGNvbG9yO1xuICB9XG5cbiAgdmFyIHNpeERpZ2l0Q29sb3IgPSBcIiNcIjtcblxuICBmb3IgKHZhciBpID0gMTsgaSA8IDQ7IGkgKz0gMSkge1xuICAgIHNpeERpZ2l0Q29sb3IgKz0gY29sb3JbaV0gKyBjb2xvcltpXTtcbiAgfVxuXG4gIHJldHVybiBzaXhEaWdpdENvbG9yO1xufVxuXG5mdW5jdGlvbiBnZXRCYWNrZ3JvdW5kQ29sb3IocG9zLCBjaGVja2VkUG9zLCB1bmNoZWNrZWRQb3MsIG9mZkNvbG9yLCBvbkNvbG9yKSB7XG4gIHZhciBzaXhEaWdpdE9mZkNvbG9yID0gY29udmVydFNob3J0aGFuZENvbG9yKG9mZkNvbG9yKTtcbiAgdmFyIHNpeERpZ2l0T25Db2xvciA9IGNvbnZlcnRTaG9ydGhhbmRDb2xvcihvbkNvbG9yKTtcbiAgcmV0dXJuIGNyZWF0ZUJhY2tncm91bmRDb2xvcihwb3MsIGNoZWNrZWRQb3MsIHVuY2hlY2tlZFBvcywgc2l4RGlnaXRPZmZDb2xvciwgc2l4RGlnaXRPbkNvbG9yKTtcbn1cblxuLy8gTWFrZSBzdXJlIGNvbG9yIHByb3BzIGFyZSBzdHJpbmdzIHRoYXQgc3RhcnQgd2l0aCBcIiNcIiBzaW5jZSBvdGhlciB3YXlzIHRvIHdyaXRlIGNvbG9ycyBhcmUgbm90IHN1cHBvcnRlZC5cbnZhciBoZXhDb2xvclByb3BUeXBlID0gZnVuY3Rpb24gKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICB2YXIgcHJvcCA9IHByb3BzW3Byb3BOYW1lXTtcblxuICBpZiAodHlwZW9mIHByb3AgIT09IFwic3RyaW5nXCIgfHwgcHJvcFswXSAhPT0gXCIjXCIgfHwgcHJvcC5sZW5ndGggIT09IDQgJiYgcHJvcC5sZW5ndGggIT09IDcpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKFwiSW52YWxpZCBwcm9wICdcIiArIHByb3BOYW1lICsgXCInIHN1cHBsaWVkIHRvICdcIiArIGNvbXBvbmVudE5hbWUgKyBcIicuICdcIiArIHByb3BOYW1lICsgXCInIGhhcyB0byBiZSBlaXRoZXIgYSAzLWRpZ2l0IG9yIDYtZGlnaXQgaGV4LWNvbG9yIHN0cmluZy4gVmFsaWQgZXhhbXBsZXM6ICcjYWJjJywgJyMxMjM0NTYnXCIpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5mdW5jdGlvbiBvYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGV4Y2x1ZGUpIHtcbiAgdmFyIHRhcmdldCA9IHt9O1xuXG4gIGZvciAodmFyIGsgaW4gb2JqKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaykgJiYgZXhjbHVkZS5pbmRleE9mKGspID09PSAtMSkgdGFyZ2V0W2tdID0gb2JqW2tdO1xuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbnZhciBSZWFjdFN3aXRjaCA9XG4vKkBfX1BVUkVfXyovXG5mdW5jdGlvbiAoQ29tcG9uZW50KSB7XG4gIGZ1bmN0aW9uIFJlYWN0U3dpdGNoKHByb3BzKSB7XG4gICAgQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpO1xuICAgIHZhciBoZWlnaHQgPSBwcm9wcy5oZWlnaHQ7XG4gICAgdmFyIHdpZHRoID0gcHJvcHMud2lkdGg7XG4gICAgdmFyIGhhbmRsZURpYW1ldGVyID0gcHJvcHMuaGFuZGxlRGlhbWV0ZXI7XG4gICAgdmFyIGNoZWNrZWQgPSBwcm9wcy5jaGVja2VkO1xuICAgIHRoaXMuJGhhbmRsZURpYW1ldGVyID0gaGFuZGxlRGlhbWV0ZXIgfHwgaGVpZ2h0IC0gMjtcbiAgICB0aGlzLiRjaGVja2VkUG9zID0gTWF0aC5tYXgod2lkdGggLSBoZWlnaHQsIHdpZHRoIC0gKGhlaWdodCArIHRoaXMuJGhhbmRsZURpYW1ldGVyKSAvIDIpO1xuICAgIHRoaXMuJHVuY2hlY2tlZFBvcyA9IE1hdGgubWF4KDAsIChoZWlnaHQgLSB0aGlzLiRoYW5kbGVEaWFtZXRlcikgLyAyKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgJHBvczogY2hlY2tlZCA/IHRoaXMuJGNoZWNrZWRQb3MgOiB0aGlzLiR1bmNoZWNrZWRQb3NcbiAgICB9O1xuICAgIHRoaXMuJGxhc3REcmFnQXQgPSAwO1xuICAgIHRoaXMuJGxhc3RLZXlVcEF0ID0gMDtcbiAgICB0aGlzLiRvbk1vdXNlRG93biA9IHRoaXMuJG9uTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy4kb25Nb3VzZU1vdmUgPSB0aGlzLiRvbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuJG9uTW91c2VVcCA9IHRoaXMuJG9uTW91c2VVcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuJG9uVG91Y2hTdGFydCA9IHRoaXMuJG9uVG91Y2hTdGFydC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuJG9uVG91Y2hNb3ZlID0gdGhpcy4kb25Ub3VjaE1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLiRvblRvdWNoRW5kID0gdGhpcy4kb25Ub3VjaEVuZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuJG9uQ2xpY2sgPSB0aGlzLiRvbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy4kb25JbnB1dENoYW5nZSA9IHRoaXMuJG9uSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLiRvbktleVVwID0gdGhpcy4kb25LZXlVcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuJHNldEhhc091dGxpbmUgPSB0aGlzLiRzZXRIYXNPdXRsaW5lLmJpbmQodGhpcyk7XG4gICAgdGhpcy4kdW5zZXRIYXNPdXRsaW5lID0gdGhpcy4kdW5zZXRIYXNPdXRsaW5lLmJpbmQodGhpcyk7XG4gICAgdGhpcy4kZ2V0SW5wdXRSZWYgPSB0aGlzLiRnZXRJbnB1dFJlZi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaWYgKENvbXBvbmVudCkgUmVhY3RTd2l0Y2guX19wcm90b19fID0gQ29tcG9uZW50O1xuICBSZWFjdFN3aXRjaC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENvbXBvbmVudCAmJiBDb21wb25lbnQucHJvdG90eXBlKTtcbiAgUmVhY3RTd2l0Y2gucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUmVhY3RTd2l0Y2g7XG5cbiAgUmVhY3RTd2l0Y2gucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAocHJldlByb3BzLmNoZWNrZWQgPT09IHRoaXMucHJvcHMuY2hlY2tlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciAkcG9zID0gdGhpcy5wcm9wcy5jaGVja2VkID8gdGhpcy4kY2hlY2tlZFBvcyA6IHRoaXMuJHVuY2hlY2tlZFBvcztcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICRwb3M6ICRwb3NcbiAgICB9KTtcbiAgfTtcblxuICBSZWFjdFN3aXRjaC5wcm90b3R5cGUuJG9uRHJhZ1N0YXJ0ID0gZnVuY3Rpb24gJG9uRHJhZ1N0YXJ0KGNsaWVudFgpIHtcbiAgICB0aGlzLiRpbnB1dFJlZi5mb2N1cygpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgJHN0YXJ0WDogY2xpZW50WCxcbiAgICAgICRoYXNPdXRsaW5lOiB0cnVlLFxuICAgICAgJGRyYWdTdGFydGluZ1RpbWU6IERhdGUubm93KClcbiAgICB9KTtcbiAgfTtcblxuICBSZWFjdFN3aXRjaC5wcm90b3R5cGUuJG9uRHJhZyA9IGZ1bmN0aW9uICRvbkRyYWcoY2xpZW50WCkge1xuICAgIHZhciByZWYgPSB0aGlzLnN0YXRlO1xuICAgIHZhciAkc3RhcnRYID0gcmVmLiRzdGFydFg7XG4gICAgdmFyICRpc0RyYWdnaW5nID0gcmVmLiRpc0RyYWdnaW5nO1xuICAgIHZhciAkcG9zID0gcmVmLiRwb3M7XG4gICAgdmFyIHJlZiQxID0gdGhpcy5wcm9wcztcbiAgICB2YXIgY2hlY2tlZCA9IHJlZiQxLmNoZWNrZWQ7XG4gICAgdmFyIHN0YXJ0UG9zID0gY2hlY2tlZCA/IHRoaXMuJGNoZWNrZWRQb3MgOiB0aGlzLiR1bmNoZWNrZWRQb3M7XG4gICAgdmFyIG1vdXNlUG9zID0gc3RhcnRQb3MgKyBjbGllbnRYIC0gJHN0YXJ0WDsgLy8gV2UgbmVlZCB0aGlzIGNoZWNrIHRvIGZpeCBhIHdpbmRvd3MgZ2xpdGNoIHdoZXJlIG9uRHJhZyBpcyB0cmlnZ2VyZWQgb25Nb3VzZURvd24gaW4gc29tZSBjYXNlc1xuXG4gICAgaWYgKCEkaXNEcmFnZ2luZyAmJiBjbGllbnRYICE9PSAkc3RhcnRYKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgJGlzRHJhZ2dpbmc6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBuZXdQb3MgPSBNYXRoLm1pbih0aGlzLiRjaGVja2VkUG9zLCBNYXRoLm1heCh0aGlzLiR1bmNoZWNrZWRQb3MsIG1vdXNlUG9zKSk7IC8vIFByZXZlbnQgdW5uZWNlc3NhcnkgcmVyZW5kZXJzXG5cbiAgICBpZiAobmV3UG9zICE9PSAkcG9zKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgJHBvczogbmV3UG9zXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgUmVhY3RTd2l0Y2gucHJvdG90eXBlLiRvbkRyYWdTdG9wID0gZnVuY3Rpb24gJG9uRHJhZ1N0b3AoZXZlbnQpIHtcbiAgICB2YXIgcmVmID0gdGhpcy5zdGF0ZTtcbiAgICB2YXIgJHBvcyA9IHJlZi4kcG9zO1xuICAgIHZhciAkaXNEcmFnZ2luZyA9IHJlZi4kaXNEcmFnZ2luZztcbiAgICB2YXIgJGRyYWdTdGFydGluZ1RpbWUgPSByZWYuJGRyYWdTdGFydGluZ1RpbWU7XG4gICAgdmFyIHJlZiQxID0gdGhpcy5wcm9wcztcbiAgICB2YXIgY2hlY2tlZCA9IHJlZiQxLmNoZWNrZWQ7XG4gICAgdmFyIGhhbGZ3YXlDaGVja3BvaW50ID0gKHRoaXMuJGNoZWNrZWRQb3MgKyB0aGlzLiR1bmNoZWNrZWRQb3MpIC8gMjsgLy8gU2ltdWxhdGUgY2xpY2tpbmcgdGhlIGhhbmRsZVxuXG4gICAgdmFyIHRpbWVTaW5jZVN0YXJ0ID0gRGF0ZS5ub3coKSAtICRkcmFnU3RhcnRpbmdUaW1lO1xuXG4gICAgaWYgKCEkaXNEcmFnZ2luZyB8fCB0aW1lU2luY2VTdGFydCA8IDI1MCkge1xuICAgICAgdGhpcy4kb25DaGFuZ2UoZXZlbnQpOyAvLyBIYW5kbGUgZHJhZ2dpbmcgZnJvbSBjaGVja2VkIHBvc2l0aW9uXG4gICAgfSBlbHNlIGlmIChjaGVja2VkKSB7XG4gICAgICBpZiAoJHBvcyA+IGhhbGZ3YXlDaGVja3BvaW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICRwb3M6IHRoaXMuJGNoZWNrZWRQb3NcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRvbkNoYW5nZShldmVudCk7XG4gICAgICB9IC8vIEhhbmRsZSBkcmFnZ2luZyBmcm9tIHVuY2hlY2tlZCBwb3NpdGlvblxuXG4gICAgfSBlbHNlIGlmICgkcG9zIDwgaGFsZndheUNoZWNrcG9pbnQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAkcG9zOiB0aGlzLiR1bmNoZWNrZWRQb3NcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiRvbkNoYW5nZShldmVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAkaXNEcmFnZ2luZzogZmFsc2UsXG4gICAgICAkaGFzT3V0bGluZTogZmFsc2VcbiAgICB9KTtcbiAgICB0aGlzLiRsYXN0RHJhZ0F0ID0gRGF0ZS5ub3coKTtcbiAgfTtcblxuICBSZWFjdFN3aXRjaC5wcm90b3R5cGUuJG9uTW91c2VEb3duID0gZnVuY3Rpb24gJG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gSWdub3JlIHJpZ2h0IGNsaWNrIGFuZCBzY3JvbGxcblxuICAgIGlmICh0eXBlb2YgZXZlbnQuYnV0dG9uID09PSBcIm51bWJlclwiICYmIGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuJG9uRHJhZ1N0YXJ0KGV2ZW50LmNsaWVudFgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMuJG9uTW91c2VNb3ZlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy4kb25Nb3VzZVVwKTtcbiAgfTtcblxuICBSZWFjdFN3aXRjaC5wcm90b3R5cGUuJG9uTW91c2VNb3ZlID0gZnVuY3Rpb24gJG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLiRvbkRyYWcoZXZlbnQuY2xpZW50WCk7XG4gIH07XG5cbiAgUmVhY3RTd2l0Y2gucHJvdG90eXBlLiRvbk1vdXNlVXAgPSBmdW5jdGlvbiAkb25Nb3VzZVVwKGV2ZW50KSB7XG4gICAgdGhpcy4kb25EcmFnU3RvcChldmVudCk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy4kb25Nb3VzZU1vdmUpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLiRvbk1vdXNlVXApO1xuICB9O1xuXG4gIFJlYWN0U3dpdGNoLnByb3RvdHlwZS4kb25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24gJG9uVG91Y2hTdGFydChldmVudCkge1xuICAgIHRoaXMuJGNoZWNrZWRTdGF0ZUZyb21EcmFnZ2luZyA9IG51bGw7XG4gICAgdGhpcy4kb25EcmFnU3RhcnQoZXZlbnQudG91Y2hlc1swXS5jbGllbnRYKTtcbiAgfTtcblxuICBSZWFjdFN3aXRjaC5wcm90b3R5cGUuJG9uVG91Y2hNb3ZlID0gZnVuY3Rpb24gJG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy4kb25EcmFnKGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCk7XG4gIH07XG5cbiAgUmVhY3RTd2l0Y2gucHJvdG90eXBlLiRvblRvdWNoRW5kID0gZnVuY3Rpb24gJG9uVG91Y2hFbmQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuJG9uRHJhZ1N0b3AoZXZlbnQpO1xuICB9O1xuXG4gIFJlYWN0U3dpdGNoLnByb3RvdHlwZS4kb25JbnB1dENoYW5nZSA9IGZ1bmN0aW9uICRvbklucHV0Q2hhbmdlKGV2ZW50KSB7XG4gICAgLy8gVGhpcyBjb25kaXRpb24gaXMgdW5mb3J0dW5hdGVseSBuZWVkZWQgaW4gc29tZSBicm93c2VycyB3aGVyZSB0aGUgaW5wdXQncyBjaGFuZ2UgZXZlbnQgbWlnaHQgZ2V0IHRyaWdnZXJlZFxuICAgIC8vIHJpZ2h0IGFmdGVyIHRoZSBkcmFnc3RvcCBldmVudCBpcyB0cmlnZ2VyZWQgKG9jY3VycyB3aGVuIGRyb3BwaW5nIG92ZXIgYSBsYWJlbCBlbGVtZW50KVxuICAgIGlmIChEYXRlLm5vdygpIC0gdGhpcy4kbGFzdERyYWdBdCA+IDUwKSB7XG4gICAgICB0aGlzLiRvbkNoYW5nZShldmVudCk7IC8vIFByZXZlbnQgY2xpY2tpbmcgbGFiZWwsIGJ1dCBub3Qga2V5IGFjdGl2YXRpb24gZnJvbSBzZXR0aW5nIG91dGxpbmUgdG8gdHJ1ZSAtIHllcywgdGhpcyBpcyBhYnN1cmRcblxuICAgICAgaWYgKERhdGUubm93KCkgLSB0aGlzLiRsYXN0S2V5VXBBdCA+IDUwKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICRoYXNPdXRsaW5lOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgUmVhY3RTd2l0Y2gucHJvdG90eXBlLiRvbktleVVwID0gZnVuY3Rpb24gJG9uS2V5VXAoKSB7XG4gICAgdGhpcy4kbGFzdEtleVVwQXQgPSBEYXRlLm5vdygpO1xuICB9O1xuXG4gIFJlYWN0U3dpdGNoLnByb3RvdHlwZS4kc2V0SGFzT3V0bGluZSA9IGZ1bmN0aW9uICRzZXRIYXNPdXRsaW5lKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgJGhhc091dGxpbmU6IHRydWVcbiAgICB9KTtcbiAgfTtcblxuICBSZWFjdFN3aXRjaC5wcm90b3R5cGUuJHVuc2V0SGFzT3V0bGluZSA9IGZ1bmN0aW9uICR1bnNldEhhc091dGxpbmUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAkaGFzT3V0bGluZTogZmFsc2VcbiAgICB9KTtcbiAgfTtcblxuICBSZWFjdFN3aXRjaC5wcm90b3R5cGUuJGdldElucHV0UmVmID0gZnVuY3Rpb24gJGdldElucHV0UmVmKGVsKSB7XG4gICAgdGhpcy4kaW5wdXRSZWYgPSBlbDtcbiAgfTtcblxuICBSZWFjdFN3aXRjaC5wcm90b3R5cGUuJG9uQ2xpY2sgPSBmdW5jdGlvbiAkb25DbGljayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy4kaW5wdXRSZWYuZm9jdXMoKTtcbiAgICB0aGlzLiRvbkNoYW5nZShldmVudCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAkaGFzT3V0bGluZTogZmFsc2VcbiAgICB9KTtcbiAgfTtcblxuICBSZWFjdFN3aXRjaC5wcm90b3R5cGUuJG9uQ2hhbmdlID0gZnVuY3Rpb24gJG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgdmFyIHJlZiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGNoZWNrZWQgPSByZWYuY2hlY2tlZDtcbiAgICB2YXIgb25DaGFuZ2UgPSByZWYub25DaGFuZ2U7XG4gICAgdmFyIGlkID0gcmVmLmlkO1xuICAgIG9uQ2hhbmdlKCFjaGVja2VkLCBldmVudCwgaWQpO1xuICB9O1xuXG4gIFJlYWN0U3dpdGNoLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHJlZiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGRpc2FibGVkID0gcmVmLmRpc2FibGVkO1xuICAgIHZhciBjbGFzc05hbWUgPSByZWYuY2xhc3NOYW1lO1xuICAgIHZhciBvZmZDb2xvciA9IHJlZi5vZmZDb2xvcjtcbiAgICB2YXIgb25Db2xvciA9IHJlZi5vbkNvbG9yO1xuICAgIHZhciBvZmZIYW5kbGVDb2xvciA9IHJlZi5vZmZIYW5kbGVDb2xvcjtcbiAgICB2YXIgb25IYW5kbGVDb2xvciA9IHJlZi5vbkhhbmRsZUNvbG9yO1xuICAgIHZhciBjaGVja2VkSWNvbiQkMSA9IHJlZi5jaGVja2VkSWNvbjtcbiAgICB2YXIgdW5jaGVja2VkSWNvbiQkMSA9IHJlZi51bmNoZWNrZWRJY29uO1xuICAgIHZhciBib3hTaGFkb3cgPSByZWYuYm94U2hhZG93O1xuICAgIHZhciBhY3RpdmVCb3hTaGFkb3cgPSByZWYuYWN0aXZlQm94U2hhZG93O1xuICAgIHZhciBoZWlnaHQgPSByZWYuaGVpZ2h0O1xuICAgIHZhciB3aWR0aCA9IHJlZi53aWR0aDtcbiAgICB2YXIgaGFuZGxlRGlhbWV0ZXIgPSByZWYuaGFuZGxlRGlhbWV0ZXI7XG4gICAgdmFyIHJlc3QkMSA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHJlZiwgW1wiZGlzYWJsZWRcIiwgXCJjbGFzc05hbWVcIiwgXCJvZmZDb2xvclwiLCBcIm9uQ29sb3JcIiwgXCJvZmZIYW5kbGVDb2xvclwiLCBcIm9uSGFuZGxlQ29sb3JcIiwgXCJjaGVja2VkSWNvblwiLCBcInVuY2hlY2tlZEljb25cIiwgXCJib3hTaGFkb3dcIiwgXCJhY3RpdmVCb3hTaGFkb3dcIiwgXCJoZWlnaHRcIiwgXCJ3aWR0aFwiLCBcImhhbmRsZURpYW1ldGVyXCJdKTtcbiAgICB2YXIgcmVzdCA9IHJlc3QkMTtcbiAgICB2YXIgcmVmJDEgPSB0aGlzLnN0YXRlO1xuICAgIHZhciAkcG9zID0gcmVmJDEuJHBvcztcbiAgICB2YXIgJGlzRHJhZ2dpbmcgPSByZWYkMS4kaXNEcmFnZ2luZztcbiAgICB2YXIgJGhhc091dGxpbmUgPSByZWYkMS4kaGFzT3V0bGluZTtcbiAgICB2YXIgcm9vdFN0eWxlID0ge1xuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgb3BhY2l0eTogZGlzYWJsZWQgPyAwLjUgOiAxLFxuICAgICAgZGlyZWN0aW9uOiBcImx0clwiLFxuICAgICAgYm9yZGVyUmFkaXVzOiBoZWlnaHQgLyAyLFxuICAgICAgV2Via2l0VHJhbnNpdGlvbjogXCJvcGFjaXR5IDAuMjVzXCIsXG4gICAgICBNb3pUcmFuc2l0aW9uOiBcIm9wYWNpdHkgMC4yNXNcIixcbiAgICAgIHRyYW5zaXRpb246IFwib3BhY2l0eSAwLjI1c1wiLFxuICAgICAgdG91Y2hBY3Rpb246IFwibm9uZVwiLFxuICAgICAgV2Via2l0VGFwSGlnaGxpZ2h0Q29sb3I6IFwicmdiYSgwLCAwLCAwLCAwKVwiLFxuICAgICAgV2Via2l0VXNlclNlbGVjdDogXCJub25lXCIsXG4gICAgICBNb3pVc2VyU2VsZWN0OiBcIm5vbmVcIixcbiAgICAgIG1zVXNlclNlbGVjdDogXCJub25lXCIsXG4gICAgICB1c2VyU2VsZWN0OiBcIm5vbmVcIlxuICAgIH07XG4gICAgdmFyIGJhY2tncm91bmRTdHlsZSA9IHtcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgbWFyZ2luOiBNYXRoLm1heCgwLCAodGhpcy4kaGFuZGxlRGlhbWV0ZXIgLSBoZWlnaHQpIC8gMiksXG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgYmFja2dyb3VuZDogZ2V0QmFja2dyb3VuZENvbG9yKCRwb3MsIHRoaXMuJGNoZWNrZWRQb3MsIHRoaXMuJHVuY2hlY2tlZFBvcywgb2ZmQ29sb3IsIG9uQ29sb3IpLFxuICAgICAgYm9yZGVyUmFkaXVzOiBoZWlnaHQgLyAyLFxuICAgICAgY3Vyc29yOiBkaXNhYmxlZCA/IFwiZGVmYXVsdFwiIDogXCJwb2ludGVyXCIsXG4gICAgICBXZWJraXRUcmFuc2l0aW9uOiAkaXNEcmFnZ2luZyA/IG51bGwgOiBcImJhY2tncm91bmQgMC4yNXNcIixcbiAgICAgIE1velRyYW5zaXRpb246ICRpc0RyYWdnaW5nID8gbnVsbCA6IFwiYmFja2dyb3VuZCAwLjI1c1wiLFxuICAgICAgdHJhbnNpdGlvbjogJGlzRHJhZ2dpbmcgPyBudWxsIDogXCJiYWNrZ3JvdW5kIDAuMjVzXCJcbiAgICB9O1xuICAgIHZhciBjaGVja2VkSWNvblN0eWxlID0ge1xuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICB3aWR0aDogTWF0aC5taW4oaGVpZ2h0ICogMS41LCB3aWR0aCAtICh0aGlzLiRoYW5kbGVEaWFtZXRlciArIGhlaWdodCkgLyAyICsgMSksXG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgb3BhY2l0eTogKCRwb3MgLSB0aGlzLiR1bmNoZWNrZWRQb3MpIC8gKHRoaXMuJGNoZWNrZWRQb3MgLSB0aGlzLiR1bmNoZWNrZWRQb3MpLFxuICAgICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXG4gICAgICBXZWJraXRUcmFuc2l0aW9uOiAkaXNEcmFnZ2luZyA/IG51bGwgOiBcIm9wYWNpdHkgMC4yNXNcIixcbiAgICAgIE1velRyYW5zaXRpb246ICRpc0RyYWdnaW5nID8gbnVsbCA6IFwib3BhY2l0eSAwLjI1c1wiLFxuICAgICAgdHJhbnNpdGlvbjogJGlzRHJhZ2dpbmcgPyBudWxsIDogXCJvcGFjaXR5IDAuMjVzXCJcbiAgICB9O1xuICAgIHZhciB1bmNoZWNrZWRJY29uU3R5bGUgPSB7XG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIHdpZHRoOiBNYXRoLm1pbihoZWlnaHQgKiAxLjUsIHdpZHRoIC0gKHRoaXMuJGhhbmRsZURpYW1ldGVyICsgaGVpZ2h0KSAvIDIgKyAxKSxcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICBvcGFjaXR5OiAxIC0gKCRwb3MgLSB0aGlzLiR1bmNoZWNrZWRQb3MpIC8gKHRoaXMuJGNoZWNrZWRQb3MgLSB0aGlzLiR1bmNoZWNrZWRQb3MpLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB0b3A6IDAsXG4gICAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcbiAgICAgIFdlYmtpdFRyYW5zaXRpb246ICRpc0RyYWdnaW5nID8gbnVsbCA6IFwib3BhY2l0eSAwLjI1c1wiLFxuICAgICAgTW96VHJhbnNpdGlvbjogJGlzRHJhZ2dpbmcgPyBudWxsIDogXCJvcGFjaXR5IDAuMjVzXCIsXG4gICAgICB0cmFuc2l0aW9uOiAkaXNEcmFnZ2luZyA/IG51bGwgOiBcIm9wYWNpdHkgMC4yNXNcIlxuICAgIH07XG4gICAgdmFyIGhhbmRsZVN0eWxlID0ge1xuICAgICAgaGVpZ2h0OiB0aGlzLiRoYW5kbGVEaWFtZXRlcixcbiAgICAgIHdpZHRoOiB0aGlzLiRoYW5kbGVEaWFtZXRlcixcbiAgICAgIGJhY2tncm91bmQ6IGdldEJhY2tncm91bmRDb2xvcigkcG9zLCB0aGlzLiRjaGVja2VkUG9zLCB0aGlzLiR1bmNoZWNrZWRQb3MsIG9mZkhhbmRsZUNvbG9yLCBvbkhhbmRsZUNvbG9yKSxcbiAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICBjdXJzb3I6IGRpc2FibGVkID8gXCJkZWZhdWx0XCIgOiBcInBvaW50ZXJcIixcbiAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWChcIiArICRwb3MgKyBcInB4KVwiLFxuICAgICAgdG9wOiBNYXRoLm1heCgwLCAoaGVpZ2h0IC0gdGhpcy4kaGFuZGxlRGlhbWV0ZXIpIC8gMiksXG4gICAgICBvdXRsaW5lOiAwLFxuICAgICAgYm94U2hhZG93OiAkaGFzT3V0bGluZSA/IGFjdGl2ZUJveFNoYWRvdyA6IGJveFNoYWRvdyxcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIFdlYmtpdFRyYW5zaXRpb246ICRpc0RyYWdnaW5nID8gbnVsbCA6IFwiYmFja2dyb3VuZC1jb2xvciAwLjI1cywgdHJhbnNmb3JtIDAuMjVzLCBib3gtc2hhZG93IDAuMTVzXCIsXG4gICAgICBNb3pUcmFuc2l0aW9uOiAkaXNEcmFnZ2luZyA/IG51bGwgOiBcImJhY2tncm91bmQtY29sb3IgMC4yNXMsIHRyYW5zZm9ybSAwLjI1cywgYm94LXNoYWRvdyAwLjE1c1wiLFxuICAgICAgdHJhbnNpdGlvbjogJGlzRHJhZ2dpbmcgPyBudWxsIDogXCJiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzLCB0cmFuc2Zvcm0gMC4yNXMsIGJveC1zaGFkb3cgMC4xNXNcIlxuICAgIH07XG4gICAgdmFyIGlucHV0U3R5bGUgPSB7XG4gICAgICBib3JkZXI6IDAsXG4gICAgICBjbGlwOiBcInJlY3QoMCAwIDAgMClcIixcbiAgICAgIGhlaWdodDogMSxcbiAgICAgIG1hcmdpbjogLTEsXG4gICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgd2lkdGg6IDFcbiAgICB9O1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgIHN0eWxlOiByb290U3R5bGVcbiAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICBjbGFzc05hbWU6IFwicmVhY3Qtc3dpdGNoLWJnXCIsXG4gICAgICBzdHlsZTogYmFja2dyb3VuZFN0eWxlLFxuICAgICAgb25DbGljazogZGlzYWJsZWQgPyBudWxsIDogdGhpcy4kb25DbGljayxcbiAgICAgIG9uTW91c2VEb3duOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0sIGNoZWNrZWRJY29uJCQxICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgIHN0eWxlOiBjaGVja2VkSWNvblN0eWxlXG4gICAgfSwgY2hlY2tlZEljb24kJDEpLCB1bmNoZWNrZWRJY29uJCQxICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgIHN0eWxlOiB1bmNoZWNrZWRJY29uU3R5bGVcbiAgICB9LCB1bmNoZWNrZWRJY29uJCQxKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJyZWFjdC1zd2l0Y2gtaGFuZGxlXCIsXG4gICAgICBzdHlsZTogaGFuZGxlU3R5bGUsXG4gICAgICBvbkNsaWNrOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSxcbiAgICAgIG9uTW91c2VEb3duOiBkaXNhYmxlZCA/IG51bGwgOiB0aGlzLiRvbk1vdXNlRG93bixcbiAgICAgIG9uVG91Y2hTdGFydDogZGlzYWJsZWQgPyBudWxsIDogdGhpcy4kb25Ub3VjaFN0YXJ0LFxuICAgICAgb25Ub3VjaE1vdmU6IGRpc2FibGVkID8gbnVsbCA6IHRoaXMuJG9uVG91Y2hNb3ZlLFxuICAgICAgb25Ub3VjaEVuZDogZGlzYWJsZWQgPyBudWxsIDogdGhpcy4kb25Ub3VjaEVuZCxcbiAgICAgIG9uVG91Y2hDYW5jZWw6IGRpc2FibGVkID8gbnVsbCA6IHRoaXMuJHVuc2V0SGFzT3V0bGluZVxuICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIF9leHRlbmRzKHt9LCB7XG4gICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICByb2xlOiBcInN3aXRjaFwiLFxuICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgc3R5bGU6IGlucHV0U3R5bGVcbiAgICB9LCByZXN0LCB7XG4gICAgICByZWY6IHRoaXMuJGdldElucHV0UmVmLFxuICAgICAgb25Gb2N1czogdGhpcy4kc2V0SGFzT3V0bGluZSxcbiAgICAgIG9uQmx1cjogdGhpcy4kdW5zZXRIYXNPdXRsaW5lLFxuICAgICAgb25LZXlVcDogdGhpcy4kb25LZXlVcCxcbiAgICAgIG9uQ2hhbmdlOiB0aGlzLiRvbklucHV0Q2hhbmdlXG4gICAgfSkpKTtcbiAgfTtcblxuICByZXR1cm4gUmVhY3RTd2l0Y2g7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cblJlYWN0U3dpdGNoLnByb3BUeXBlcyA9IHtcbiAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgb2ZmQ29sb3I6IGhleENvbG9yUHJvcFR5cGUsXG4gIG9uQ29sb3I6IGhleENvbG9yUHJvcFR5cGUsXG4gIG9mZkhhbmRsZUNvbG9yOiBoZXhDb2xvclByb3BUeXBlLFxuICBvbkhhbmRsZUNvbG9yOiBoZXhDb2xvclByb3BUeXBlLFxuICBoYW5kbGVEaWFtZXRlcjogUHJvcFR5cGVzLm51bWJlcixcbiAgdW5jaGVja2VkSWNvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIGNoZWNrZWRJY29uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgYm94U2hhZG93OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhY3RpdmVCb3hTaGFkb3c6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5SZWFjdFN3aXRjaC5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgb2ZmQ29sb3I6IFwiIzg4OFwiLFxuICBvbkNvbG9yOiBcIiMwODBcIixcbiAgb2ZmSGFuZGxlQ29sb3I6IFwiI2ZmZlwiLFxuICBvbkhhbmRsZUNvbG9yOiBcIiNmZmZcIixcbiAgdW5jaGVja2VkSWNvbjogdW5jaGVja2VkSWNvbixcbiAgY2hlY2tlZEljb246IGNoZWNrZWRJY29uLFxuICBib3hTaGFkb3c6IG51bGwsXG4gIGFjdGl2ZUJveFNoYWRvdzogXCIwIDAgMnB4IDNweCAjM2JmXCIsXG4gIGhlaWdodDogMjgsXG4gIHdpZHRoOiA1NlxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUmVhY3RTd2l0Y2g7XG4iLCJpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZGlzdC9yZWFjdC1zd2l0Y2gubWluLmpzXCIpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9kaXN0L3JlYWN0LXN3aXRjaC5kZXYuanNcIik7XG59XG4iLCJpbXBvcnQgZSBmcm9tXCJAdXNlLWl0L2V2ZW50LWxpc3RlbmVyXCI7aW1wb3J0e3VzZVN0YXRlIGFzIHQsdXNlRWZmZWN0IGFzIHIsdXNlQ2FsbGJhY2sgYXMgbix1c2VNZW1vIGFzIGF9ZnJvbVwicmVhY3RcIjtpbXBvcnQgbyBmcm9tXCJ1c2UtcGVyc2lzdGVkLXN0YXRlXCI7dmFyIGk9ZnVuY3Rpb24oKXt9LHU9e2NsYXNzTGlzdDp7YWRkOmkscmVtb3ZlOml9fSxkPWZ1bmN0aW9uKGUscixuKXt2b2lkIDA9PT1uJiYobj1nbG9iYWwpO3ZhciBhPWU/byhlLHIpOnQsaT1uLm1hdGNoTWVkaWE/bi5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKTp7fSxkPXthZGRFdmVudExpc3RlbmVyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGkuYWRkTGlzdGVuZXImJmkuYWRkTGlzdGVuZXIodCl9LHJlbW92ZUV2ZW50TGlzdGVuZXI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gaS5yZW1vdmVMaXN0ZW5lciYmaS5yZW1vdmVMaXN0ZW5lcih0KX19LHM9XCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCI9PT1pLm1lZGlhLGM9bi5kb2N1bWVudCYmbi5kb2N1bWVudC5ib2R5fHx1O3JldHVybnt1c2VQZXJzaXN0ZWREYXJrTW9kZVN0YXRlOmEsZ2V0RGVmYXVsdE9uQ2hhbmdlOmZ1bmN0aW9uKGUsdCxyKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9Yyksdm9pZCAwPT09dCYmKHQ9XCJkYXJrLW1vZGVcIiksdm9pZCAwPT09ciYmKHI9XCJsaWdodC1tb2RlXCIpLGZ1bmN0aW9uKG4pe2UuY2xhc3NMaXN0LmFkZChuP3Q6ciksZS5jbGFzc0xpc3QucmVtb3ZlKG4/cjp0KX19LG1lZGlhUXVlcnlFdmVudFRhcmdldDpkLGdldEluaXRpYWxWYWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gcz9pLm1hdGNoZXM6ZX19fTtleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih0LG8pe3ZvaWQgMD09PXQmJih0PSExKSx2b2lkIDA9PT1vJiYobz17fSk7dmFyIGk9by5lbGVtZW50LHU9by5jbGFzc05hbWVEYXJrLHM9by5jbGFzc05hbWVMaWdodCxjPW8ub25DaGFuZ2UsbT1vLnN0b3JhZ2VLZXk7dm9pZCAwPT09bSYmKG09XCJkYXJrTW9kZVwiKTt2YXIgbD1vLnN0b3JhZ2VQcm92aWRlcixmPW8uZ2xvYmFsLHY9YShmdW5jdGlvbigpe3JldHVybiBkKG0sbCxmKX0sW20sbCxmXSksZz12LmdldERlZmF1bHRPbkNoYW5nZSxoPXYubWVkaWFRdWVyeUV2ZW50VGFyZ2V0LEw9KDAsdi51c2VQZXJzaXN0ZWREYXJrTW9kZVN0YXRlKSgoMCx2LmdldEluaXRpYWxWYWx1ZSkodCkpLGs9TFswXSxwPUxbMV0sYj1hKGZ1bmN0aW9uKCl7cmV0dXJuIGN8fGcoaSx1LHMpfSxbYyxpLHUscyxnXSk7cmV0dXJuIHIoZnVuY3Rpb24oKXtiKGspfSxbYixrXSksZShcImNoYW5nZVwiLGZ1bmN0aW9uKGUpe3JldHVybiBwKGUubWF0Y2hlcyl9LGgpLHt2YWx1ZTprLGVuYWJsZTpuKGZ1bmN0aW9uKCl7cmV0dXJuIHAoITApfSxbcF0pLGRpc2FibGU6bihmdW5jdGlvbigpe3JldHVybiBwKCExKX0sW3BdKSx0b2dnbGU6bihmdW5jdGlvbigpe3JldHVybiBwKGZ1bmN0aW9uKGUpe3JldHVybiFlfSl9LFtwXSl9fVxuIiwiaW1wb3J0e3VzZVN0YXRlIGFzIHQsdXNlRWZmZWN0IGFzIG4sdXNlUmVmIGFzIGV9ZnJvbVwicmVhY3RcIjtpbXBvcnQgciBmcm9tXCJAdXNlLWl0L2V2ZW50LWxpc3RlbmVyXCI7dmFyIHU9e30sYz1mdW5jdGlvbih0LG4sZSl7cmV0dXJuIHVbdF18fCh1W3RdPXtjYWxsYmFja3M6W10sdmFsdWU6ZX0pLHVbdF0uY2FsbGJhY2tzLnB1c2gobikse2RlcmVnaXN0ZXI6ZnVuY3Rpb24oKXt2YXIgZT11W3RdLmNhbGxiYWNrcyxyPWUuaW5kZXhPZihuKTtyPi0xJiZlLnNwbGljZShyLDEpfSxlbWl0OmZ1bmN0aW9uKGUpe3VbdF0udmFsdWUhPT1lJiYodVt0XS52YWx1ZT1lLHVbdF0uY2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24odCl7biE9PXQmJnQoZSl9KSl9fX07ZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odSxpKXtpZih2b2lkIDA9PT1pJiYoaT1nbG9iYWwubG9jYWxTdG9yYWdlKSxpKXt2YXIgbz1mdW5jdGlvbih0KXtyZXR1cm57Z2V0OmZ1bmN0aW9uKG4sZSl7dmFyIHI9dC5nZXRJdGVtKG4pO3JldHVybiBudWxsPT09cj9cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2UoKTplOkpTT04ucGFyc2Uocil9LHNldDpmdW5jdGlvbihuLGUpe3Quc2V0SXRlbShuLEpTT04uc3RyaW5naWZ5KGUpKX19fShpKTtyZXR1cm4gZnVuY3Rpb24oaSl7cmV0dXJuIGZ1bmN0aW9uKHUsaSxvKXt2YXIgYT1vLmdldCxmPW8uc2V0LGw9ZShudWxsKSxzPXQoZnVuY3Rpb24oKXtyZXR1cm4gYShpLHUpfSksdj1zWzBdLGc9c1sxXTtyZXR1cm4gcihcInN0b3JhZ2VcIixmdW5jdGlvbih0KXt2YXIgbj10LmtleSxlPUpTT04ucGFyc2UodC5uZXdWYWx1ZSk7bj09PWkmJnYhPT1lJiZnKGUpfSksbihmdW5jdGlvbigpe3JldHVybiBsLmN1cnJlbnQ9YyhpLGcsdSksZnVuY3Rpb24oKXtsLmN1cnJlbnQuZGVyZWdpc3RlcigpfX0sW10pLG4oZnVuY3Rpb24oKXtmKGksdiksbC5jdXJyZW50LmVtaXQodil9LFt2XSksW3YsZ119KGksdSxvKX19cmV0dXJuIHR9XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTd2l0Y2ggZnJvbSAncmVhY3Qtc3dpdGNoJ1xuaW1wb3J0IHsgRmlNb29uLCBGaVN1biB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJ1xuaW1wb3J0IHVzZURhcmtNb2RlIGZyb20gJ3VzZS1kYXJrLW1vZGUnXG5cbmNvbnN0IE1PREVfVFJBTlNJVElPTl9DTEFTU19OQU1FID0gJ2RhcmstbW9kZS10cmFuc2l0aW9uJ1xuY29uc3QgTU9ERV9UUkFOU0lUSU9OX0RVUkFUSU9OID0gNTAwXG5cbmZ1bmN0aW9uIHNldERhcmtNb2RlVHJhbnNpdGlvbigpIHtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoTU9ERV9UUkFOU0lUSU9OX0NMQVNTX05BTUUpXG4gIHNldFRpbWVvdXQoXG4gICAgKCkgPT4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoTU9ERV9UUkFOU0lUSU9OX0NMQVNTX05BTUUpLFxuICAgIE1PREVfVFJBTlNJVElPTl9EVVJBVElPTlxuICApXG59XG5cbmNvbnN0IFRoZW1lU3dpdGNoOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgeyB2YWx1ZTogaGFzQWN0aXZlRGFya01vZGUsIHRvZ2dsZTogYWN0aXZhdGVEYXJrTW9kZSB9ID0gdXNlRGFya01vZGUoKVxuXG4gIGNvbnN0IHRvZ2dsZURhcmtNb2RlID0gKCkgPT4ge1xuICAgIHNldERhcmtNb2RlVHJhbnNpdGlvbigpXG4gICAgYWN0aXZhdGVEYXJrTW9kZSgpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxTd2l0Y2hcbiAgICAgIG9uQ2hhbmdlPXt0b2dnbGVEYXJrTW9kZX1cbiAgICAgIGNoZWNrZWQ9e2hhc0FjdGl2ZURhcmtNb2RlfVxuICAgICAgY2hlY2tlZEljb249ezxGaU1vb24gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIG14LTIgbXktMVwiIC8+fVxuICAgICAgdW5jaGVja2VkSWNvbj17PEZpU3VuIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBteC0yIG15LTFcIiAvPn1cbiAgICAgIG9uQ29sb3I9XCIjMWEyMDJjXCJcbiAgICAgIG9mZkNvbG9yPVwiI2Y3ZmFmY1wiXG4gICAgICBvbkhhbmRsZUNvbG9yPVwiI2Y3ZmFmY1wiXG4gICAgICBvZmZIYW5kbGVDb2xvcj1cIiMxYTIwMmNcIlxuICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS0xMDAgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBkYXJrOmJvcmRlci0wXCJcbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lU3dpdGNoXG4iXSwic291cmNlUm9vdCI6IiJ9