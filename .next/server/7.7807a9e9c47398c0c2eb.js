exports.ids = [7];
exports.modules = {

/***/ "Carx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("DbpL");
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("C9pf");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var use_dark_mode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rsis");
/* harmony import */ var use_dark_mode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(use_dark_mode__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




const MODE_TRANSITION_CLASS_NAME = 'dark-mode-transition';
const MODE_TRANSITION_DURATION = 500;

function setDarkModeTransition() {
  document.documentElement.classList.add(MODE_TRANSITION_CLASS_NAME);
  setTimeout(() => document.documentElement.classList.remove(MODE_TRANSITION_CLASS_NAME), MODE_TRANSITION_DURATION);
}

const ThemeSwitch = () => {
  const {
    value: hasActiveDarkMode,
    toggle: activateDarkMode
  } = use_dark_mode__WEBPACK_IMPORTED_MODULE_3___default()();

  const toggleDarkMode = () => {
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

/* harmony default export */ __webpack_exports__["default"] = (ThemeSwitch);

/***/ })

};;