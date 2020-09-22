"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _uuid = require("uuid");

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _url = _interopRequireDefault(require("url"));

var _cors = _interopRequireDefault(require("cors"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _next = _interopRequireDefault(require("next"));

var _nextroutes = _interopRequireDefault(require("./nextroutes"));

var _routes = _interopRequireDefault(require("./routes"));

var _mail = _interopRequireDefault(require("./services/mail"));

var _staff = _interopRequireDefault(require("./utils/staff"));

var _response = _interopRequireDefault(require("./utils/response"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

_dotenv["default"].config(); // Sequelize
// const models = require('./models')


var errorResponse = _response["default"].errorResponse,
    successResponse = _response["default"].successResponse; // Set Environment

var dev = process.env.NODE_ENV || 'development';
var _process$env$PORT = process.env.PORT,
    PORT = _process$env$PORT === void 0 ? 5000 : _process$env$PORT;
var isDev = String(dev).includes('dev'); // Next App

var app = (0, _next["default"])({
  dev: isDev
});
var handle = app.getRequestHandler();

_dotenv["default"].config();
/**
 * Front end Routes
 */


var nRoutes = (0, _nextroutes["default"])();
var server;
app.prepare().then(function () {
  server = (0, _express["default"])(); // Generate Unique Session Secret tokens

  server.use((0, _expressSession["default"])({
    secret: (0, _uuid.v4)(),
    name: 'sessionId',
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 60000
    }
  }));
  server.enable('trust proxy');
  server.use((0, _cors["default"])());
  server.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  server.use(_bodyParser["default"].urlencoded({
    extended: true
  }));
  server.use(_bodyParser["default"].json());
  server.get('/staffs', /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var staff;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _staff["default"].findAllStaff();

            case 3:
              staff = _context.sent;
              return _context.abrupt("return", successResponse(res, 200, 'All Staff members', staff));

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", errorResponse(res, 500, _context.t0));

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  server["delete"]('/staffs/:email', /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var email, staff, updates;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              email = req.params.email;
              _context2.next = 4;
              return _staff["default"].findStaff('email', email);

            case 4:
              staff = _context2.sent;

              if (!staff) {
                _context2.next = 10;
                break;
              }

              _context2.next = 8;
              return _staff["default"].removeStaff('email', email);

            case 8:
              _context2.next = 11;
              break;

            case 10:
              return _context2.abrupt("return", errorResponse(res, 404, 'Staff not found'));

            case 11:
              _context2.next = 13;
              return _staff["default"].findAllStaff();

            case 13:
              updates = _context2.sent;
              return _context2.abrupt("return", successResponse(res, 200, 'All Staff members', updates));

            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", errorResponse(res, 500, _context2.t0));

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 17]]);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
  server.post('/sendinvite', /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
      var token, data, _iterator, _step, d, userFound, isInvited, emailSent, newUser, _emailSent, updates;

      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              token = 'rerteESDew432f';
              _context3.next = 4;
              return _staff["default"].getAllReqBody(req.body);

            case 4:
              data = _context3.sent;

              if (!data) {
                _context3.next = 51;
                break;
              }

              _iterator = _createForOfIteratorHelper(data);
              _context3.prev = 7;

              _iterator.s();

            case 9:
              if ((_step = _iterator.n()).done) {
                _context3.next = 43;
                break;
              }

              d = _step.value;
              _context3.prev = 11;
              _context3.next = 14;
              return _staff["default"].findStaff('email', d.email);

            case 14:
              userFound = _context3.sent;

              if (!userFound) {
                _context3.next = 26;
                break;
              }

              isInvited = userFound.inviteSent === 'Yes';

              if (isInvited) {
                _context3.next = 24;
                break;
              }

              _context3.next = 20;
              return (0, _mail["default"])(userFound, token);

            case 20:
              emailSent = _context3.sent;

              if (!(emailSent || emailSent === 'sent')) {
                _context3.next = 24;
                break;
              }

              _context3.next = 24;
              return _staff["default"].updateStaff(userFound.email, {
                inviteSent: 'Yes'
              });

            case 24:
              _context3.next = 36;
              break;

            case 26:
              _context3.next = 28;
              return _staff["default"].createStaff(d);

            case 28:
              newUser = _context3.sent;

              if (!(newUser && newUser.email)) {
                _context3.next = 36;
                break;
              }

              _context3.next = 32;
              return (0, _mail["default"])({
                email: 'a.rasheedalabi@gmail.com'
              }, token);

            case 32:
              _emailSent = _context3.sent;

              if (!(!_emailSent || _emailSent === 'fail')) {
                _context3.next = 36;
                break;
              }

              _context3.next = 36;
              return _staff["default"].updateStaff(newUser.email, {
                inviteSent: 'No'
              });

            case 36:
              _context3.next = 41;
              break;

            case 38:
              _context3.prev = 38;
              _context3.t0 = _context3["catch"](11);
              console.log('problems with user', _context3.t0);

            case 41:
              _context3.next = 9;
              break;

            case 43:
              _context3.next = 48;
              break;

            case 45:
              _context3.prev = 45;
              _context3.t1 = _context3["catch"](7);

              _iterator.e(_context3.t1);

            case 48:
              _context3.prev = 48;

              _iterator.f();

              return _context3.finish(48);

            case 51:
              _context3.next = 53;
              return _staff["default"].findAllStaff();

            case 53:
              updates = _context3.sent;
              return _context3.abrupt("return", successResponse(res, 201, 'Invites Sent', updates));

            case 57:
              _context3.prev = 57;
              _context3.t2 = _context3["catch"](0);
              return _context3.abrupt("return", errorResponse(res, 500, _context3.t2));

            case 60:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 57], [7, 45, 48, 51], [11, 38]]);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
  server.use(_routes["default"]); // Use React application on server

  server.get('*', function (req, res) {
    // Parse url param, slashesDenoteHost
    //   const parsedUrl = parse(req.url, true)
    //   const { pathname, query = {} } = parsedUrl
    //   /**
    //    * Pull in front end routes, and check request against those routes
    //    */
    //   const route = nRoutes[pathname]
    //   if (route) {
    //     return app.render(req, res, route.page, query)
    //   }
    return handle(req, res);
  });
  server.listen(PORT, function (err) {
    if (err) throw err;
    console.log("> Ready on ".concat(PORT));
  });
})["catch"](function (ex) {
  // Exit if there is an exception
  console.error(ex.stack);
  process.exit(1);
});
var _default = server;
exports["default"] = _default;