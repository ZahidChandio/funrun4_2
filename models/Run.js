const { Model, DataTypes } = require('sequelize');
const sequelize = require('services/database');
const User = require('../models/User'); // Use the correct relative path


class Run extends Model {}

// Initialize the table
Run.init({
    date: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    run_type: {
        type: DataTypes.STRING
    },
    url: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    tableName: 'runs', // THIS IS THE TABLE NAME IN THE DATABASE
    modelName: 'runs',
    timestamps: false // CreatedAt and UpdatedAt don't exist in our database
}),


  
  module.exports = Run;