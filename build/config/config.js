// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

module.exports = {
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