"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var staffs = function staffs(sequelize, DataTypes) {
  var Staff = sequelize.define('staff', {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true
      }
    },
    inviteSent: {
      type: DataTypes.ENUM,
      defaultValue: 'Yes',
      allowNull: false,
      values: ['No', 'Yes']
    },
    testSent: {
      type: DataTypes.ENUM,
      defaultValue: 'Yes',
      allowNull: false,
      values: ['No', 'Yes']
    },
    testStatus: {
      type: DataTypes.ENUM,
      defaultValue: 'NA',
      allowNull: false,
      values: ['Pending', 'Received', 'NA']
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE
  });
  return Staff;
};

var _default = staffs;
exports["default"] = _default;