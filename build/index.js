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

var _models = require("./models");

_dotenv["default"].config(); // Sequelize
// const models = require('./models')


var errorResponse = _response["default"].errorResponse,
    successResponse = _response["default"].successResponse; // Set Environment

var dev = process.env.NODE_ENV || 'development';
var PORT = process.env.PORT || 3002;
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
              console.log('them staff', staff);
              return _context.abrupt("return", successResponse(res, 200, 'All Staff members', staff));

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", errorResponse(res, 500, _context.t0));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
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
              return _models.Staff.destroy({
                where: {
                  email: email
                },
                cascase: true
              });

            case 8:
              _context2.next = 11;
              break;

            case 10:
              return _context2.abrupt("return", errorResponse(res, 404, 'Staff not found'));

            case 11:
              updates = _staff["default"].findAllStaff();
              return _context2.abrupt("return", successResponse(res, 200, 'All Staff members', updates));

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", errorResponse(res, 500, _context2.t0));

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 15]]);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
  server.post('/sendinvite', /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
      var token, data, updates;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              token = 'rerteESDew432f';
              _context4.next = 4;
              return _staff["default"].getAllReqBody(req.body);

            case 4:
              data = _context4.sent;
              console.log('reqss', data);
              data && data.forEach( /*#__PURE__*/function () {
                var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(d) {
                  var userFound, isInvited, emailSent, newUser, _emailSent;

                  return _regenerator["default"].wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.prev = 0;
                          _context3.next = 3;
                          return _staff["default"].findStaff('email', d.email);

                        case 3:
                          userFound = _context3.sent;
                          console.log('userFound', userFound);

                          if (!userFound) {
                            _context3.next = 14;
                            break;
                          }

                          isInvited = userFound.inviteSent === 'Yes';

                          if (isInvited) {
                            _context3.next = 12;
                            break;
                          }

                          _context3.next = 10;
                          return (0, _mail["default"])(userFound, token);

                        case 10:
                          emailSent = _context3.sent;
                          if (emailSent || emailSent === 'sent') _staff["default"].updateStaff(userFound.email, {
                            inviteSent: 'Yes'
                          });

                        case 12:
                          _context3.next = 23;
                          break;

                        case 14:
                          _context3.next = 16;
                          return _staff["default"].createStaff(d);

                        case 16:
                          newUser = _context3.sent;
                          console.log('new user', newUser);

                          if (!(newUser && newUser.email)) {
                            _context3.next = 23;
                            break;
                          }

                          _context3.next = 21;
                          return (0, _mail["default"])(newUser, token);

                        case 21:
                          _emailSent = _context3.sent;
                          if (!_emailSent || _emailSent === 'fail') _staff["default"].updateStaff(newUser.email, {
                            inviteSent: 'No'
                          });

                        case 23:
                          _context3.next = 28;
                          break;

                        case 25:
                          _context3.prev = 25;
                          _context3.t0 = _context3["catch"](0);
                          console.log('problems with user', _context3.t0);

                        case 28:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3, null, [[0, 25]]);
                }));

                return function (_x7) {
                  return _ref4.apply(this, arguments);
                };
              }());
              updates = _staff["default"].findAllStaff();
              return _context4.abrupt("return", successResponse(res, 201, 'Invites Sent', updates));

            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](0);
              console.log('error', _context4.t0);
              return _context4.abrupt("return", errorResponse(res, 500, _context4.t0));

            case 15:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 11]]);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }()); // server.use('/api', (req, res) => res.json('yo welcome'))

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
  }); // Connect to DB
  // models.sequelize.sync().then(function () {
  //   server.listen(PORT, (err) => {
  //     if (err) throw err
  //     console.log(`> Ready on ${PORT}`)
  //   })
  // })
})["catch"](function (ex) {
  // Exit if there is an exception
  console.error(ex.stack);
  process.exit(1);
});
var _default = server;
exports["default"] = _default;