const { Model, DataTypes } = require('sequelize');
const sequelize = require('../services/database'); // Update the path to your database service

class Registration extends Model {}

// ...
Registration.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      race_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      registration_date: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      tableName: 'registrations',
      modelName: 'registrations',
      timestamps: false,
    }
  );
  module.exports = Registration;
  