require('dotenv').config();
// console.log(process.env.NODE_ENV);
const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  dialect: 'postgres',
  dialectOptions: {
    bigNumberStrings: true
  }
}

module.exports = { config }
