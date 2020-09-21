"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.fieldNames = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _index = _interopRequireDefault(require("../models/index"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Staff = _index["default"].Staff;

var properCase = function properCase(str) {
  if (str && typeof str === 'string' && str.trim().length === 1) {
    return String(str).trim().toUpperCase();
  }

  if (str && typeof str === 'string') {
    return str.trim().split(' ').map(function (w) {
      return w[0] && w[0].toUpperCase() + w.substr(1).toLowerCase();
    }).join(' ');
  }

  return str;
};

var fieldNames = ['Serial No', 'firstName', 'lastName', 'email', 'inviteSent', 'testSent', 'testStatus'];
exports.fieldNames = fieldNames;

var StaffUtils = /*#__PURE__*/function () {
  function StaffUtils() {
    (0, _classCallCheck2["default"])(this, StaffUtils);
  }

  (0, _createClass2["default"])(StaffUtils, null, [{
    key: "getRequestBody",
    value: function getRequestBody(body) {
      var dataObj = {};
      fieldNames.forEach(function (field) {
        var _body$field;

        dataObj[field] = ((_body$field = body[field]) === null || _body$field === void 0 ? void 0 : _body$field.toLowerCase()) !== 'na' ? properCase(body[field]) : 'NA';
      });
      return dataObj;
    }
  }, {
    key: "getAllReqBody",
    value: function getAllReqBody(body) {
      var xdata = [];
      Array.from(body).forEach(function (data) {
        var dataObj = {};
        fieldNames.forEach(function (field) {
          var _data$field;

          dataObj[field] = ((_data$field = data[field]) === null || _data$field === void 0 ? void 0 : _data$field.toLowerCase()) !== 'na' ? properCase(data[field]) : 'NA';
        });
        xdata.push(dataObj);
      });
      return xdata;
    }
  }, {
    key: "createStaff",
    value: function () {
      var _createStaff = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
        var newStaff;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Staff.create(data);

              case 3:
                newStaff = _context.sent;
                return _context.abrupt("return", newStaff);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                throw _context.t0;

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function createStaff(_x) {
        return _createStaff.apply(this, arguments);
      }

      return createStaff;
    }()
  }, {
    key: "removeStaff",
    value: function () {
      var _removeStaff = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(key, value) {
        var options,
            deletedStaff,
            _args2 = arguments;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                options = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {};
                _context2.prev = 1;
                _context2.next = 4;
                return Staff.destroy(_objectSpread({
                  where: (0, _defineProperty2["default"])({}, key, value)
                }, options));

              case 4:
                deletedStaff = _context2.sent;
                return _context2.abrupt("return", deletedStaff);

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](1);
                throw _context2.t0;

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 8]]);
      }));

      function removeStaff(_x2, _x3) {
        return _removeStaff.apply(this, arguments);
      }

      return removeStaff;
    }()
  }, {
    key: "findOrCreateStaff",
    value: function () {
      var _findOrCreateStaff = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(data) {
        var newStaff;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return Staff.findOrCreate({
                  where: {
                    email: data.email
                  }
                });

              case 3:
                newStaff = _context3.sent;
                return _context3.abrupt("return", newStaff);

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                throw _context3.t0;

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }));

      function findOrCreateStaff(_x4) {
        return _findOrCreateStaff.apply(this, arguments);
      }

      return findOrCreateStaff;
    }()
  }, {
    key: "updateStaff",
    value: function () {
      var _updateStaff = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(email, updates) {
        var staffToUpdate, staff;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return StaffUtils.findStaff('email', email);

              case 3:
                staffToUpdate = _context4.sent;

                if (!staffToUpdate) {
                  _context4.next = 9;
                  break;
                }

                _context4.next = 7;
                return Staff.update(updates, {
                  where: {
                    email: email
                  },
                  attributes: {
                    exclude: ['id']
                  },
                  returning: true
                });

              case 7:
                staff = _context4.sent;
                return _context4.abrupt("return", staff);

              case 9:
                return _context4.abrupt("return", null);

              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4["catch"](0);
                throw _context4.t0;

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 12]]);
      }));

      function updateStaff(_x5, _x6) {
        return _updateStaff.apply(this, arguments);
      }

      return updateStaff;
    }()
  }, {
    key: "findStaff",
    value: function () {
      var _findStaff = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(key, value) {
        var staff;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return Staff.findOne({
                  where: (0, _defineProperty2["default"])({}, key, value)
                });

              case 3:
                staff = _context5.sent;
                return _context5.abrupt("return", staff);

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](0);
                throw _context5.t0;

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 7]]);
      }));

      function findStaff(_x7, _x8) {
        return _findStaff.apply(this, arguments);
      }

      return findStaff;
    }()
  }, {
    key: "findAllStaff",
    value: function () {
      var _findAllStaff = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(key, value) {
        var staff;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;

                if (!(!key && !value)) {
                  _context6.next = 7;
                  break;
                }

                _context6.next = 4;
                return Staff.findAll({
                  raw: true
                });

              case 4:
                staff = _context6.sent;
                _context6.next = 17;
                break;

              case 7:
                if (!value) {
                  _context6.next = 13;
                  break;
                }

                _context6.next = 10;
                return Staff.findAll({
                  where: (0, _defineProperty2["default"])({}, key, value)
                });

              case 10:
                staff = _context6.sent;
                _context6.next = 17;
                break;

              case 13:
                if (!(Object.keys(key).length > 0)) {
                  _context6.next = 17;
                  break;
                }

                _context6.next = 16;
                return Staff.findAll({
                  where: key
                });

              case 16:
                staff = _context6.sent;

              case 17:
                return _context6.abrupt("return", staff);

              case 20:
                _context6.prev = 20;
                _context6.t0 = _context6["catch"](0);
                throw _context6.t0;

              case 23:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 20]]);
      }));

      function findAllStaff(_x9, _x10) {
        return _findAllStaff.apply(this, arguments);
      }

      return findAllStaff;
    }()
  }, {
    key: "getStaffField",
    value: function () {
      var _getStaffField = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(withoutId, body) {
        var data, acceptedFields;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                data = {};
                acceptedFields = fieldNames;
                if (withoutId) acceptedFields = acceptedFields.filter(function (field) {
                  return field !== 'id';
                });
                Object.entries(body).forEach(function (_ref) {
                  var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
                      key = _ref2[0],
                      value = _ref2[1];

                  if (acceptedFields.includes(key)) {
                    data[key] = value;
                  }
                });
                return _context7.abrupt("return", data);

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function getStaffField(_x11, _x12) {
        return _getStaffField.apply(this, arguments);
      }

      return getStaffField;
    }()
  }]);
  return StaffUtils;
}();

exports["default"] = StaffUtils;