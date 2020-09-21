"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.sendEmailWithNodemailer = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _mail = _interopRequireDefault(require("@sendgrid/mail"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _debug = _interopRequireDefault(require("debug"));

var _mailtemplate = _interopRequireDefault(require("./mailtemplate"));

_dotenv["default"].config();

var debug = new _debug["default"]('dev');
var _process = process,
    env = _process.env;
var apiKey = env.SENDGRID_API_KEY;
var CLIENT_URL = env.NODE_ENV === 'test' || 'development' ? "http://localhost:".concat(env.PORT) : env.CLIENT_URL;

_mail["default"].setApiKey(apiKey);

var expiry = (env.TOKEN_EXPIRY || 1000000) / 60 / 60;

var smtpTransport = _nodemailer["default"].createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    user: env.EMAIL,
    clientId: env.GMAIL_ID,
    clientSecret: env.GMAIL_SECRET,
    refreshToken: env.GMAIL_REFRESH
  }
});

var sendEmailWithNodemailer = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(user, token, html) {
    var mailOptions;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // export const sendEmail = async (user, token, html) => {
            mailOptions = {
              from: env.EMAIL,
              to: user.email,
              subject: 'Test Email',
              html: html || (0, _mailtemplate["default"])() || getMessage(user, token)
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

  return function sendEmailWithNodemailer(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.sendEmailWithNodemailer = sendEmailWithNodemailer;

var sendEmail = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(user, token, html) {
    var msg, message;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            msg = {
              to: user.email,
              from: 'intbusfor@gmail.com',
              subject: 'Test Email',
              html: html ? html : (0, _mailtemplate["default"])()
            };
            _context2.next = 4;
            return _mail["default"].send(msg);

          case 4:
            message = _context2.sent;

            if (!(message[0] && message[0].request)) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", 'sent');

          case 7:
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            console.log('message failed', _context2.t0);
            return _context2.abrupt("return", 'fail');

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function sendEmail(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

function getMessage(user, token) {
  return "\n        <h3>This is just a test email.<h3> \n        <p>You received this mail because you are our friend or a random email happened to be yours.</p>\n        <a href='".concat(CLIENT_URL, "/").concat(token, "/").concat(user.email, "'>Click this link now to Signup</a>\n\n        <p>The link will expire in ").concat(expiry, "</p>\n        <br><br>\n        <p>--Team</p>");
}

var _default = sendEmail;
exports["default"] = _default;