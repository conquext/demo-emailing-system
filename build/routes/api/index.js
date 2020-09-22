"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _auth = _interopRequireDefault(require("./auth"));

// import users from './users'
// import products from './products'
// import passport from 'passport'
var router = (0, _express.Router)();
router.use('/auth/', _auth["default"]); // router.use('/users/', passport.authenticate('jwt', { session: false }), users)
// router.use(
//   '/products/',
//   passport.authenticate('jwt', { session: false }),
//   products
// )

var _default = router;
exports["default"] = _default;