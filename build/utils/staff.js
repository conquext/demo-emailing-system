"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _index = _interopRequireDefault(require("../models/index"));

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

var StaffUtils = /*#__PURE__*/function () {
  function StaffUtils() {
    (0, _classCallCheck2["default"])(this, StaffUtils);
    (0, _defineProperty2["default"])(this, "fieldNames", ['Serial No', 'firstName', 'lastName', 'email', 'inviteSent', 'testSent', 'testStatus']);
  }

  (0, _createClass2["default"])(StaffUtils, null, [{
    key: "getRequestBody",
    value: function getRequestBody(body) {
      var dataObj = {};
      this.fieldNames.forEach(function (field) {
        var _body$field;

        dataObj[field] = ((_body$field = body[field]) === null || _body$field === void 0 ? void 0 : _body$field.toLowerCase()) === 'na' ? properCase(body[field]) : 'NA';
      });
      return dataObj;
    }
  }, {
    key: "getAllReqBody",
    value: function getAllReqBody(body) {
      var _this = this;

      var data = [];
      Array.from(body).forEach(function (data) {
        var dataObj = {};

        _this.fieldNames.forEach(function (field) {
          var _data$field;

          dataObj[field] = ((_data$field = data[field]) === null || _data$field === void 0 ? void 0 : _data$field.toLowerCase()) === 'na' ? properCase(data[field]) : 'NA';
        });

        data.push(dataObj);
      });
      return data;
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
    key: "findOrCreateStaff",
    value: function () {
      var _findOrCreateStaff = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(data) {
        var newStaff;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Staff.findOrCreate({
                  where: {
                    email: data.email
                  }
                });

              case 3:
                newStaff = _context2.sent;
                return _context2.abrupt("return", newStaff);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                throw _context2.t0;

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      function findOrCreateStaff(_x2) {
        return _findOrCreateStaff.apply(this, arguments);
      }

      return findOrCreateStaff;
    }()
  }, {
    key: "updateStaff",
    value: function () {
      var _updateStaff = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(email, updates) {
        var staffToUpdate, staff;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return StaffUtils.findStaff('email', email);

              case 3:
                staffToUpdate = _context3.sent;

                if (!staffToUpdate) {
                  _context3.next = 9;
                  break;
                }

                _context3.next = 7;
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
                staff = _context3.sent;
                return _context3.abrupt("return", staff);

              case 9:
                return _context3.abrupt("return", null);

              case 12:
                _context3.prev = 12;
                _context3.t0 = _context3["catch"](0);
                throw _context3.t0;

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 12]]);
      }));

      function updateStaff(_x3, _x4) {
        return _updateStaff.apply(this, arguments);
      }

      return updateStaff;
    }()
  }, {
    key: "findStaff",
    value: function () {
      var _findStaff = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(key, value) {
        var staff;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return Staff.findOne({
                  where: (0, _defineProperty2["default"])({}, key, value)
                });

              case 3:
                staff = _context4.sent;
                return _context4.abrupt("return", staff);

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                throw _context4.t0;

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 7]]);
      }));

      function findStaff(_x5, _x6) {
        return _findStaff.apply(this, arguments);
      }

      return findStaff;
    }()
  }, {
    key: "findAllStaff",
    value: function () {
      var _findAllStaff = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(key, value) {
        var staff;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;

                if (!(!key && !value)) {
                  _context5.next = 7;
                  break;
                }

                _context5.next = 4;
                return Staff.findAll({
                  raw: true
                });

              case 4:
                staff = _context5.sent;
                _context5.next = 17;
                break;

              case 7:
                if (!value) {
                  _context5.next = 13;
                  break;
                }

                _context5.next = 10;
                return Staff.findAll({
                  where: (0, _defineProperty2["default"])({}, key, value)
                });

              case 10:
                staff = _context5.sent;
                _context5.next = 17;
                break;

              case 13:
                if (!(Object.keys(key).length > 0)) {
                  _context5.next = 17;
                  break;
                }

                _context5.next = 16;
                return Staff.findAll({
                  where: key
                });

              case 16:
                staff = _context5.sent;

              case 17:
                return _context5.abrupt("return", staff);

              case 20:
                _context5.prev = 20;
                _context5.t0 = _context5["catch"](0);
                throw _context5.t0;

              case 23:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 20]]);
      }));

      function findAllStaff(_x7, _x8) {
        return _findAllStaff.apply(this, arguments);
      }

      return findAllStaff;
    }()
  }, {
    key: "getStaffField",
    value: function () {
      var _getStaffField = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(withoutId, body) {
        var data, acceptedFields;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                data = {};
                acceptedFields = this.fieldNames;
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
                return _context6.abrupt("return", data);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getStaffField(_x9, _x10) {
        return _getStaffField.apply(this, arguments);
      }

      return getStaffField;
    }()
  }]);
  return StaffUtils;
}();

exports["default"] = StaffUtils;