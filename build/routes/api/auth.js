"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var router = _express["default"].Router();

router.post('/signup', function () {
  return console.log('howdy you');
});
router.post('/login', function (res) {
  return res.json({
    data: 'nice one, stranger'
  });
});
router.post('/passwords/reset/:userId', function () {
  return console.log('its all good');
});
var _default = router;
exports["default"] = _default;