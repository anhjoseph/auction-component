const Sequelize = require('sequelize');

const db = new Sequelize(
  'auction',
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB,
    dialect: 'postgres',
  },
);

db.authenticate()
  .then(() => console.log('db authenticated'))
  .catch(err => console.log('error authenticating db', err));

module.exports = {
  db,
};
