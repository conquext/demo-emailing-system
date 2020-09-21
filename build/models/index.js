"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _dotenv = _interopRequireDefault(require("dotenv"));

// import cf from '../config/config.js'
// eslint-disable-next-line @typescript-eslint/no-var-requires
_dotenv["default"].config();

var cf = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    use_env_variable: 'DB_URL'
  },
  test: {
    username: process.env.DB_USERNAME_TEST,
    password: process.env.DB_PASSWORD_TEST,
    database: process.env.DB_TEST_NAME_TEST,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    operatorsAliases: false
  },
  production: {
    use_env_variable: 'DB_URL'
  }
};

var basename = _path["default"].basename(__filename);

var db = {};
var env = process.env.NODE_ENV || 'development';
var config = cf[env];
var sequelize = config.use_env_variable ? new _sequelize["default"](process.env[config.use_env_variable], config) : new _sequelize["default"](config.database, config.username, config.password, config); // Import the models

exports.sequelize = sequelize;

_fs["default"].readdirSync(__dirname).filter(function (file) {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
}).forEach(function (file) {
  // const model = sequelize.import(path.join(__dirname, file))
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  var fileDir = require(_path["default"].join(__dirname, file))["default"];

  var model = fileDir(sequelize, _sequelize["default"].DataTypes);
  var modelName = model.name.charAt(0).toUpperCase() + model.name.slice(1);
  db[modelName] = model;
}); // and combine those models and resolve their associations using the Sequelize API


Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
var _default = db;
exports["default"] = _default;