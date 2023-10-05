const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('funruns', '', '', {
    host: './funrun.sqlite',
    dialect: 'sqlite'
});

module.exports = sequelize;