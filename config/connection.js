require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

//check if connection is successful
sequelize.authenticate()
    .then(() => console.log('Database connection made!'))
    .catch(err => {
      console.log(err);
    });

module.exports = sequelize;
