exports.ids = [0];
exports.modules = {

/***/ "./src/components/layout/ThemeSwitch.tsx":
/*!***********************************************!*\
  !*** ./src/components/layout/ThemeSwitch.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-switch */ "react-switch");
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var use_dark_mode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-dark-mode */ "use-dark-mode");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvVGhlbWVTd2l0Y2gudHN4Il0sIm5hbWVzIjpbIk1PREVfVFJBTlNJVElPTl9DTEFTU19OQU1FIiwiTU9ERV9UUkFOU0lUSU9OX0RVUkFUSU9OIiwic2V0RGFya01vZGVUcmFuc2l0aW9uIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiVGhlbWVTd2l0Y2giLCJ2YWx1ZSIsImhhc0FjdGl2ZURhcmtNb2RlIiwidG9nZ2xlIiwiYWN0aXZhdGVEYXJrTW9kZSIsInVzZURhcmtNb2RlIiwidG9nZ2xlRGFya01vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsMEJBQTBCLEdBQUcsc0JBQW5DO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsR0FBakM7O0FBRUEsU0FBU0MscUJBQVQsR0FBaUM7QUFDL0JDLFVBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsU0FBekIsQ0FBbUNDLEdBQW5DLENBQXVDTiwwQkFBdkM7QUFDQU8sWUFBVSxDQUNSLE1BQU1KLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsU0FBekIsQ0FBbUNHLE1BQW5DLENBQTBDUiwwQkFBMUMsQ0FERSxFQUVSQyx3QkFGUSxDQUFWO0FBSUQ7O0FBRUQsTUFBTVEsV0FBcUIsR0FBRyxNQUFNO0FBQ2xDLFFBQU07QUFBRUMsU0FBSyxFQUFFQyxpQkFBVDtBQUE0QkMsVUFBTSxFQUFFQztBQUFwQyxNQUF5REMsb0RBQVcsRUFBMUU7O0FBRUEsUUFBTUMsY0FBYyxHQUFHLE1BQU07QUFDM0JiLHlCQUFxQjtBQUNyQlcsb0JBQWdCO0FBQ2pCLEdBSEQ7O0FBS0EsU0FDRSxNQUFDLG1EQUFEO0FBQ0UsWUFBUSxFQUFFRSxjQURaO0FBRUUsV0FBTyxFQUFFSixpQkFGWDtBQUdFLGVBQVcsRUFBRSxNQUFDLHFEQUFEO0FBQVEsZUFBUyxFQUFDO0FBQWxCLE1BSGY7QUFJRSxpQkFBYSxFQUFFLE1BQUMsb0RBQUQ7QUFBTyxlQUFTLEVBQUM7QUFBakIsTUFKakI7QUFLRSxXQUFPLEVBQUMsU0FMVjtBQU1FLFlBQVEsRUFBQyxTQU5YO0FBT0UsaUJBQWEsRUFBQyxTQVBoQjtBQVFFLGtCQUFjLEVBQUMsU0FSakI7QUFTRSxhQUFTLEVBQUM7QUFUWixJQURGO0FBYUQsQ0FyQkQ7O0FBdUJlRiwwRUFBZixFIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTd2l0Y2ggZnJvbSAncmVhY3Qtc3dpdGNoJ1xuaW1wb3J0IHsgRmlNb29uLCBGaVN1biB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJ1xuaW1wb3J0IHVzZURhcmtNb2RlIGZyb20gJ3VzZS1kYXJrLW1vZGUnXG5cbmNvbnN0IE1PREVfVFJBTlNJVElPTl9DTEFTU19OQU1FID0gJ2RhcmstbW9kZS10cmFuc2l0aW9uJ1xuY29uc3QgTU9ERV9UUkFOU0lUSU9OX0RVUkFUSU9OID0gNTAwXG5cbmZ1bmN0aW9uIHNldERhcmtNb2RlVHJhbnNpdGlvbigpIHtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoTU9ERV9UUkFOU0lUSU9OX0NMQVNTX05BTUUpXG4gIHNldFRpbWVvdXQoXG4gICAgKCkgPT4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoTU9ERV9UUkFOU0lUSU9OX0NMQVNTX05BTUUpLFxuICAgIE1PREVfVFJBTlNJVElPTl9EVVJBVElPTlxuICApXG59XG5cbmNvbnN0IFRoZW1lU3dpdGNoOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgeyB2YWx1ZTogaGFzQWN0aXZlRGFya01vZGUsIHRvZ2dsZTogYWN0aXZhdGVEYXJrTW9kZSB9ID0gdXNlRGFya01vZGUoKVxuXG4gIGNvbnN0IHRvZ2dsZURhcmtNb2RlID0gKCkgPT4ge1xuICAgIHNldERhcmtNb2RlVHJhbnNpdGlvbigpXG4gICAgYWN0aXZhdGVEYXJrTW9kZSgpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxTd2l0Y2hcbiAgICAgIG9uQ2hhbmdlPXt0b2dnbGVEYXJrTW9kZX1cbiAgICAgIGNoZWNrZWQ9e2hhc0FjdGl2ZURhcmtNb2RlfVxuICAgICAgY2hlY2tlZEljb249ezxGaU1vb24gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIG14LTIgbXktMVwiIC8+fVxuICAgICAgdW5jaGVja2VkSWNvbj17PEZpU3VuIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBteC0yIG15LTFcIiAvPn1cbiAgICAgIG9uQ29sb3I9XCIjMWEyMDJjXCJcbiAgICAgIG9mZkNvbG9yPVwiI2Y3ZmFmY1wiXG4gICAgICBvbkhhbmRsZUNvbG9yPVwiI2Y3ZmFmY1wiXG4gICAgICBvZmZIYW5kbGVDb2xvcj1cIiMxYTIwMmNcIlxuICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS0xMDAgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBkYXJrOmJvcmRlci0wXCJcbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lU3dpdGNoXG4iXSwic291cmNlUm9vdCI6IiJ9