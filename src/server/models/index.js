import Sequelize from 'sequelize'
import fs from 'fs'
import path from 'path'
// import cf from '../config/config.js'

// eslint-disable-next-line @typescript-eslint/no-var-requires
import dotenv from 'dotenv'
dotenv.config()

const cf = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    use_env_variable: 'DB_URL',
  },
  test: {
    username: process.env.DB_USERNAME_TEST,
    password: process.env.DB_PASSWORD_TEST,
    database: process.env.DB_TEST_NAME_TEST,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    operatorsAliases: false,
  },
  production: {
    use_env_variable: 'DB_URL',
  },
}

const basename = path.basename(__filename)
const db = {}

const env = process.env.NODE_ENV || 'development'

const config = cf[env]

const sequelize = config.use_env_variable
  ? new Sequelize(process.env[config.use_env_variable], config)
  : new Sequelize(config.database, config.username, config.password, config)

// Import the models
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    )
  })
  .forEach((file) => {
    // const model = sequelize.import(path.join(__dirname, file))
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const fileDir = require(path.join(__dirname, file)).default
    const model = fileDir(sequelize, Sequelize.DataTypes)
    const modelName = model.name.charAt(0).toUpperCase() + model.name.slice(1)
    db[modelName] = model
  })

// and combine those models and resolve their associations using the Sequelize API
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

export { sequelize }

export default db
