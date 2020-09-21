"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _faker = _interopRequireDefault(require("faker"));

// const userSeed = require("../helpers/seed").userSeed;
module.exports = {
  up: function () {
    var _up = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(queryInterface, Sequelize) {
      var staffs;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              staffs = [];
              staffs.push(newPerson());
              return _context.abrupt("return", queryInterface.bulkInsert('staffs', staffs));

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function up(_x, _x2) {
      return _up.apply(this, arguments);
    }

    return up;
  }(),
  down: function down(queryInterface) {
    return queryInterface.bulkDelete('staffs', null, {});
  }
};

function newPerson() {
  var statusChance = Math.random();
  var firstName = _faker["default"].name.firstName() || '';
  var lastName = _faker["default"].name.firstName() || '';
  return {
    firstName: firstName,
    lastName: lastName,
    email: _faker["default"].internet.email(firstName, lastName),
    inviteSent: Math.floor(Math.random() * 100) % 2 ? 'Yes' : 'No',
    testSent: Math.floor(Math.random() * 30) % 2 ? 'Yes' : 'No',
    testStatus: statusChance > 0.66 ? 'Pending' : statusChance > 0.33 ? 'Sent' : 'Received'
  };
}