"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendEmail = exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _debug = _interopRequireDefault(require("debug"));

var debug = new _debug["default"]('dev');

var smtpTransport = _nodemailer["default"].createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL,
    clientId: process.env.GMAIL_ID,
    clientSecret: process.env.GMAIL_SECRET,
    refreshToken: process.env.GMAIL_REFRESH
  }
});

var expiry = (process.env.TOKEN_EXPIRY || 1000000) / 60 / 60;

var sendEmail = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(user, token, html) {
    var mailOptions;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            mailOptions = {
              from: process.env.EMAIL,
              to: user.email,
              subject: 'Reward Test',
              html: html || "".concat('<h4><b>Reward Test Demo</b></h4>' + '<p>We would like you to fill out a quick form for us to let us know how you like to be appreciated:</p>' + '<a href=').concat(process.env.CLIENT_URL, "/rewardtest/").concat(user.user_id, "/").concat(token, "\">").concat(process.env.CLIENT_URL, "/resetpassword/").concat(user.id, "/").concat(token, "</a>") + "<p>This link expires in ".concat(expiry, " hours<p>") + '<br><br>' + '<p>--Team</p>'
            };
            _context.prev = 1;
            _context.next = 4;
            return smtpTransport.sendMail(mailOptions, function (info) {
              debug('INFO', info);
            });

          case 4:
            return _context.abrupt("return", 'sent');

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            debug('ERROR IN SENDING EMAIL', _context.t0);
            return _context.abrupt("return", 'fail');

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 7]]);
  }));

  return function sendEmail(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.sendEmail = sendEmail;
var _default = sendEmail;
exports["default"] = _default;