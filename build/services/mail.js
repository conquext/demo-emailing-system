"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mail = _interopRequireDefault(require("@sendgrid/mail"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _mailtemplate = _interopRequireDefault(require("./mailtemplate"));

_dotenv["default"].config();

var _process = process,
    env = _process.env;
var apiKey = env.SENDGRID_API_KEY;
var CLIENT_URL = env.NODE_ENV === 'test' || 'development' ? "http://localhost:".concat(env.PORT) : env.CLIENT_URL;
var expiry = (env.TOKEN_EXPIRY || 1000000) / 60 / 60;

_mail["default"].setApiKey(apiKey);

var sendEmail = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(user, token, html) {
    var _message$, msg, message;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            msg = {
              to: user.email,
              from: env.EMAIL,
              subject: 'Test Email',
              html: html ? html : (0, _mailtemplate["default"])()
            };
            _context.next = 4;
            return _mail["default"].send(msg);

          case 4:
            message = _context.sent;

            if (!(message[0] && ((_message$ = message[0]) === null || _message$ === void 0 ? void 0 : _message$.statusCode) === 202)) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", 'sent');

          case 9:
            return _context.abrupt("return", 'fail');

          case 10:
            _context.next = 16;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            console.log('message failed', _context.t0);
            return _context.abrupt("return", 'fail');

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function sendEmail(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = sendEmail;
exports["default"] = _default;