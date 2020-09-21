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
  server.get('/staffs', function (req, res) {
    try {
      var staff = _staff["default"].findAllStaff();

      console.log('them staff', staff);
      return successResponse(res, 200, 'All Staff members', staff);
    } catch (error) {
      return errorResponse(res, 500, error);
    }
  });
  server["delete"]('/staffs/:email', /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var email, staff, updates;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              email = req.params.email;
              _context.next = 4;
              return _staff["default"].findStaff('email', email);

            case 4:
              staff = _context.sent;

              if (!staff) {
                _context.next = 10;
                break;
              }

              _context.next = 8;
              return _models.Staff.destroy({
                where: {
                  email: email
                },
                cascase: true
              });

            case 8:
              _context.next = 11;
              break;

            case 10:
              return _context.abrupt("return", errorResponse(res, 404, 'Staff not found'));

            case 11:
              updates = _staff["default"].findAllStaff();
              return _context.abrupt("return", successResponse(res, 200, 'All Staff members', updates));

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", errorResponse(res, 500, _context.t0));

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 15]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  server.post('/sendinvite', function (req, res) {
    try {
      var token = 'rerteESDew432f';
      console.log('reqss', req.body);

      var data = _staff["default"].getAllReqBody(req.body);

      data && data.forEach( /*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(d) {
          var userFound, isInvited, emailSent, newUser, _emailSent;

          return _regenerator["default"].wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return _staff["default"].findStaff('email', d.email);

                case 3:
                  userFound = _context2.sent;
                  console.log('userFound', userFound);

                  if (!userFound) {
                    _context2.next = 14;
                    break;
                  }

                  isInvited = userFound.inviteSent === 'Yes';

                  if (isInvited) {
                    _context2.next = 12;
                    break;
                  }

                  _context2.next = 10;
                  return (0, _mail["default"])(userFound, token);

                case 10:
                  emailSent = _context2.sent;
                  if (emailSent || emailSent === 'sent') _staff["default"].updateStaff(userFound.email, {
                    inviteSent: 'Yes'
                  });

                case 12:
                  _context2.next = 22;
                  break;

                case 14:
                  _context2.next = 16;
                  return _staff["default"].createStaff(d);

                case 16:
                  newUser = _context2.sent;

                  if (!(newUser && newUser.email)) {
                    _context2.next = 22;
                    break;
                  }

                  _context2.next = 20;
                  return (0, _mail["default"])(newUser, token);

                case 20:
                  _emailSent = _context2.sent;
                  if (!_emailSent || _emailSent === 'fail') _staff["default"].updateStaff(newUser.email, {
                    inviteSent: 'No'
                  });

                case 22:
                  _context2.next = 27;
                  break;

                case 24:
                  _context2.prev = 24;
                  _context2.t0 = _context2["catch"](0);
                  console.log('problems with user', _context2.t0);

                case 27:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[0, 24]]);
        }));

        return function (_x3) {
          return _ref2.apply(this, arguments);
        };
      }());

      var updates = _staff["default"].findAllStaff();

      return successResponse(res, 201, 'Invites Sent', updates);
    } catch (error) {
      return errorResponse(res, 500, error);
    }
  }); // server.use('/api', (req, res) => res.json('yo welcome'))

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